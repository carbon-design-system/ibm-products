/**
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import github from '@actions/github';
import core from '@actions/core';
import { App } from 'octokit';
import util from 'util';
import decompress from 'decompress';

async function run() {
  const { context } = github;
  const appId = core.getInput('APP_ID', {
    required: true,
  });
  const privateKey = core.getInput('APP_PRIVATE_KEY', {
    required: true,
  });
  const app = new App({ appId, privateKey });
  const octokit = await app.getInstallationOctokit(52238220);

  const { workflow_run, repository, organization } = context.payload;
  const workflowRunId = workflow_run.id;

  const { data: workflowArtifacts } = await octokit.request(
    'GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts',
    {
      owner: organization.login,
      repo: repository.name,
      run_id: workflowRunId,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    }
  );

  const matchArtifact = workflowArtifacts.artifacts.filter((artifact) => {
    return artifact.name == 'pr-data-to-process';
  })[0];

  const artifactResponse = await octokit.request(
    'GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}',
    {
      owner: organization.login,
      repo: repository.name,
      artifact_id: matchArtifact.id,
      archive_format: 'zip',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    }
  );

  // Decode the array buffer from the artifact to read initial review PR data from a privileged workflow

  // Convert ArrayBuffer to Buffer
  const buff = Buffer.from(artifactResponse.data);

  // Decompress the file
  const files = await decompress(buff);

  // Decode the decompressed buffer
  const decodedArtifact = new util.TextDecoder().decode(files[0].data);

  // Parse decoded buffer
  const parsedDecodedArtifact = JSON.parse(decodedArtifact);

  const { pull_request, review } = parsedDecodedArtifact;
  const { state, draft } = pull_request;

  // We only want to work with Pull Requests that are marked as open
  if (state !== 'open') {
    return;
  }

  // We only want to work with Pull Requests that are not draft PRs
  if (draft) {
    return;
  }

  // If the review was not an approval then we'll ignore the event
  if (review && review.state !== 'approved') {
    return;
  }

  const { data: allReviews } = await octokit.rest.pulls.listReviews({
    owner: repository.owner.login,
    repo: repository.name,
    pull_number: pull_request.number,
    per_page: 100,
  });

  // Get reviewer team data
  const { data } = await octokit.request('GET /orgs/{org}/teams/{team_slug}', {
    org: organization.login,
    team_slug: 'reviewing-team', // Should be only hardcoded value (outside of the labels) needed within this action. Replace with the appropriate reviewing team that is assigned to review PRs.
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });
  const { members_url } = data;

  const org_id = members_url.split('organizations/').pop().split('/team')[0];
  const team_id = members_url.split('team/').pop().split('/members')[0];

  const { data: teamMembers } = await octokit.request(
    'GET /organizations/{org_id}/team/{team_id}/members',
    {
      org_id,
      team_id,
      headers: {
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
    }
  );

  const additionalReviewLabel = 'status: one more review 👀';
  const readyForReviewLabel = 'status: ready for review 👀';

  // If we find that the reviewing user is not part of the reviewing team
  // then we don't want to count their review so we stop here
  const reviewingUser = review.user.login;
  if (!teamMembers.filter((user) => user.login === reviewingUser).length) {
    return;
  }

  // The `listReviews` endpoint will return all of the reviews for the pull
  // request. We only care about the most recent reviews so we'll go through the
  // list and get the most recent review for each reviewer
  const reviewers = {};
  const reviews = [];

  // Process reviews in reverse order since they are listed from oldest to newest
  for (const review of allReviews.reverse()) {
    const { user } = review;
    // If we've already saved a review for this user we already have the most
    // recent review
    if (reviewers[user.login]) {
      continue;
    }

    // If the author of the review not part of the reviewer team we ignore it
    if (!teamMembers.filter((u) => u.login === user.login).length) {
      continue;
    }

    reviewers[user.login] = true;
    reviews.push(review);
  }

  const approved = reviews.filter((review) => {
    return review.state === 'APPROVED';
  });

  if (approved.length > 0) {
    const hasReadyLabel = pull_request.labels.find((label) => {
      return label.name === readyForReviewLabel;
    });
    // Remove ready for review label if there is at least one approval
    if (hasReadyLabel) {
      await octokit.rest.issues.removeLabel({
        owner: repository.owner.login,
        repo: repository.name,
        issue_number: pull_request.number,
        name: readyForReviewLabel,
      });
    }
  }

  if (approved.length === 1) {
    const hasAdditionalReviewLabel = pull_request.labels.find((label) => {
      return label.name === additionalReviewLabel;
    });
    // Add the one more review label if there's at least one approval and it doesn't have the label already
    if (!hasAdditionalReviewLabel) {
      await octokit.rest.issues.addLabels({
        owner: repository.owner.login,
        repo: repository.name,
        issue_number: pull_request.number,
        labels: [additionalReviewLabel],
      });
    }
    return;
  }

  if (approved.length >= 2) {
    const hasAdditionalReviewLabel = pull_request.labels.find((label) => {
      return label.name === additionalReviewLabel;
    });
    // Remove the one more review label if there are at least 2 approvals from the reviewing team
    if (hasAdditionalReviewLabel) {
      await octokit.rest.issues.removeLabel({
        owner: repository.owner.login,
        repo: repository.name,
        issue_number: pull_request.number,
        name: additionalReviewLabel,
      });
    }
    return;
  }
}

run().catch((error) => {
  console.log(error);
  process.exit(1);
});
