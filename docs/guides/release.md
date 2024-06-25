# Release

> How we version and release packages in Carbon for IBM Products

## Table of Contents

- [Overview](#overview)
- [Release Team](#release-team)
- [Process](#process)
  - [Prerelease](#prerelease)
  - [Subsequent prerelease](#subsequent-prerelease)
  - [Stable release](#stable-release)
  - [Post release](#post-release)
  - [Patch release](#patch-release)

## Overview

The team follows a time-based release model where we deliver a stable `minor`
update every two weeks. The full schedule for releases is available
[here](https://github.com/carbon-design-system/ibm-products/wiki/Carbon-for-IBM-Products-Releases).

We also publish prereleases before every `minor` release. This prerelease
happens several days before the stable release. This offers an integration
window where the prerelease can be tested on products before the stable release.

We also ship security and bug fixes in `patch` releases. This will be shipped
as-needed and do not follow a specific schedule.

## Release Team

The release team is responsible for coordinating the `minor` and `patch`
releases in a given week. This group is composed of a release lead and sidekick.
The release lead is responsible for:

- Managing the release itself, including
  - Testing
  - Publishing
  - Support
- Helping the release sidekick understand and run through the release process,
  where appropriate

The release sidekick is responsible for:

- Learning how to run the release process if this is your first time on the
  release team
- Helping out the release lead in the release process, this includes helping
  with testing, publishing, support, and more

## Process

When going through a release, the release team will go through the following
checkpoints:

| Checkpoint                                      | Description                                                                                                              |
| :---------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------- |
| [Prerelease](#prerelease)                       | Publish a prerelease that will be used to test out the release candidate before becoming stabilized                      |
| [Subsequent prerelease](#subsequent-prerelease) | Publish a subsequent prerelease with any fixes added to the release branch                                               |
| [Stable release](#stablerelease)                | Graduate the prerelease into a stable release that is available through packages on NPM                                  |
| [Post release](#post-release)                   | Support the latest stable release and address any issues that may come up as a result of promoting the release to stable |

### Prerelease

The prerelease occurs on the first Monday of a sprint. During this stage, the
release team will need to do the following:

- [ ] Initiate code freeze by creating a release branch from `main`

  - This can be done through the GitHub UI
  - Make sure the branch name follows the `release/vx.x.x` format
    ![Screenshot of manually creating release branch from GitHub UI](https://github.com/carbon-design-system/ibm-products/assets/54281166/0920cd6f-e4cd-44e9-ad8c-a3195bbaf9ea)

- [ ] Run the
      [minor release workflow](https://github.com/carbon-design-system/ibm-products/actions/workflows/release-minor.yml)
      to generate the prerelease versions for the packages

  ![Screenshot of minor release workflow](https://github.com/carbon-design-system/ibm-products/assets/54281166/8ee243b5-0933-4505-be7d-58c64d99ce40)

  - [ ] Ensure the release branch is selected
  - [ ] Specify the type of release - in this case we will select
        `first minor rc` (rc stands for release candidate)
  - [ ] Ensure the dry run is checked
  - [ ] Once the job has completed, which it should have failed, check the
        action's log. Lerna should have logged what versions it is bumping the
        packages to. It should bump the packages up by a minor version with the
        prerelease identifier (ie. `v2.39.0 ---> v2.40.0-rc.0`).
  - [ ] If the version bumps are expected, run the workflow again with the same
        inputs as above, but this time with dry run unchecked.

### Subsequent Prerelease

Once the first prerelease / release candidate has been published, it is
available for testing. If there are any issues during the testing period, fixes
can be pushed to the release branch. We can then publish subsequent prereleases
from the release branch for further testing. To publish subsequent prereleases,

- [ ] Follow the above steps for [Prerelease](#prerelease), but select
      `subsequent rc` in the type of release dropdown instead.
      ![Screenshot of minor release workflow with subsequent release selected](https://github.com/carbon-design-system/ibm-products/assets/54281166/5d2694df-251d-46f4-bb9f-b86587758236)

  - [ ] When checking the action's log after the dry run, ensure the version has
        been bumped up by the release candidate (ie.
        `v2.40.0-rc.0 ---> v2.40.0-rc.1`).

### Stable release

A stable release occurs on the last Wednesday of the sprint and finishes later
in the day. This should occur after the prerelease has been tested and
validated. During this stage, the release team will do the following:

- [ ] Run the
      [minor release workflow](https://github.com/carbon-design-system/ibm-products/actions/workflows/release-minor.yml)
      to generate the full minor versions for the packages

  ![Screenshot of minor release workflow with full minor release selected](https://github.com/carbon-design-system/ibm-products/assets/54281166/9f7a5b75-5b5b-4530-b52b-7070e00a14e7)

  - [ ] Ensure the release branch is selected
  - [ ] Specify the type of release - in this case we will select
        `full minor release`
  - [ ] Ensure the dry run is checked
  - [ ] Once the job has completed, which it should have failed, check the
        action's log. Lerna should have logged what versions it is bumping the
        packages to. It should bump the packages up by a minor version (ie.
        `v2.40.0-rc.1 ---> v2.40.0`).
  - [ ] If the version bumps are expected, run the workflow again with the same
        inputs as above, but this time with dry run unchecked.

### Post release

- [ ] We want to make sure all changes from the release branch have been merged
      to `main`. The
      [automerge workflow](https://github.com/carbon-design-system/ibm-products/actions/workflows/automerge.yml)
      handles this automatically but fails when there are merge conflicts. Check
      the workflow to ensure the changes have been merged in. If it has failed,
      open a PR with the merge conflicts resolved.

After a release has switched packages from `next` to `latest`, it is important
to monitor channels on Slack and issues on GitHub in case breaking changes may
have occurred in the release.

If issues occur for the specific release, it's important to determine the next
best steps based on the type of issue. Typically, issues fall into one of two
categories:

- Hotfix: if the issue is self contained and can be addressed quickly, going
  through a patch release may be the easiest way to resolve the issue
- Revert to previous stable release: this strategy is helpful if the issue that
  has been identified is not able to be quickly remediated or the timeline is
  unknown

### Patch release

Occasionally we need to do an off-cycle patch release to fix some broken
functionality that was published in a previous release. In such cases, follow
these steps (similar to the minor release process) below to ensure a proper
patch release:

- [ ] Create a release branch from the previous release tag
  - [ ] This can be done through the GitHub UI. First select the previous
        release tag from the GitHub branches / tags dropdown.
        ![Screenshot of GitHub's branch/tag dropdown](https://github.com/carbon-design-system/ibm-products/assets/54281166/93650016-5d30-40b6-8675-bc057755ec35)
  - [ ] Then reopen the dropdown, select the `Branches` tab, and create the
        release branch off the previously selected tag
        ![Screenshot of GitHub's branch/tag dropdown with release branch created](https://github.com/carbon-design-system/ibm-products/assets/54281166/8b5face8-d982-42df-b9ba-df5ffc01f85e)
- [ ] Run the
      [patch release workflow](https://github.com/carbon-design-system/ibm-products/ibm-products/actions/workflows/release-patch.yml)
      following the same steps as the minor release.
