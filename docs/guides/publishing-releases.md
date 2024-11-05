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
| [Stable release](#stable-release)               | Graduate the prerelease into a stable release that is available through packages on NPM                                  |
| [Post release](#post-release)                   | Support the latest stable release and address any issues that may come up as a result of promoting the release to stable |
| [Patch release](#patch-release)                 | Publish a patch release with hot fixes to the full release                                                               |

### Prerelease

The prerelease occurs on the first Monday of a sprint. During this stage, the
release team will need to do the following:

- [ ] Initiate code freeze by creating a release branch from `main`

  - This can be done through the GitHub UI
  - Make sure the branch name follows the `release/vx.x.x` format
    ![Screenshot of manually creating release branch from GitHub UI](https://github.com/carbon-design-system/ibm-products/assets/54281166/0920cd6f-e4cd-44e9-ad8c-a3195bbaf9ea)

- [ ] Add branch protections to the release branch by going to 'Settings' in the
      IBM Products repository > 'Branches' under 'Code and automation' side
      panel. Change the branch name pattern from `released/v2*` to
      `release/v2*`.
      ![Screenshot of branch settings page](https://github.com/carbon-design-system/ibm-products/assets/54281166/45855e7f-6440-48db-856c-2cfab1e8530f)

- [ ] Run the
      [minor release workflow](https://github.com/carbon-design-system/ibm-products/actions/workflows/release-minor.yml)
      to generate the prerelease versions for the packages

  - [ ] Ensure the release branch is selected
  - [ ] Specify the type of release - in this case we will select
        `first minor rc` (rc stands for release candidate)
  - [ ] Ensure the dry run is checked

  ![Screenshot of minor release workflow](https://github.com/carbon-design-system/ibm-products/assets/54281166/8ee243b5-0933-4505-be7d-58c64d99ce40)

- [ ] Once the job has completed, which it should have failed, check the
      action's log. Lerna should have logged what versions it is bumping the
      packages to. It should bump the packages up by a minor version with the
      prerelease identifier (ie. `v2.39.0 ---> v2.40.0-rc.0`).
- [ ] If the version bumps are expected, run the workflow again with the same
      inputs as above, but this time with dry run unchecked.
- [ ] Once job has completed, check the packages on npm to ensure they have been
      published under the `next` tag:
  - [ ] `@carbon/ibm-products`:
        https://www.npmjs.com/package/@carbon/ibm-products?activeTab=versions
  - [ ] `@carbon/ibm-products-styles`:
        https://www.npmjs.com/package/@carbon/ibm-products-styles?activeTab=versions
- [ ] The workflow should have triggered the
      [deploy staging environment workflow](https://github.com/carbon-design-system/ibm-products/actions/workflows/deploy-staging.yml).
      Once this workflow has completed, check the
      [staging environment](https://carbon-design-system.github.io/ibm-products/staging)
      and ensure the version in the storybook top left header has been updated.
- [ ] Run the
      [create github tag and PR workflow](https://github.com/carbon-design-system/ibm-products/actions/workflows/create-release-tag-and-pr.yml).
      This workflow creates the release tag, generates the release with notes,
      and opens a PR to merge the changelog and version bumps from the release
      branch to `main`.
  - [ ] Make sure to specify to release branch and the correct release versions.
        ![Screenshot of create github tag and PR workflow with options selected](https://github.com/user-attachments/assets/3e11b0b1-1af9-421c-95b2-bf45fbca1a0b)
    - The `release tag` option is the version that was just published (ie.
      v2.47.0-rc.0). Fill in the `previous tag` option with the previous full
      release (ie. v2.46.0).
  - [ ] Merge in the generated PR (the title of the PR should start with
        `chore(release):` followed by the version).
  - [ ] Check the generated
        [release](https://github.com/carbon-design-system/ibm-products/releases)
        to ensure the release notes are correct.
- [ ] Post a message to the `#ibmproducts-pal-dev` Slack channel to announce the
      new version of `@carbon/ibm-products`.

  - For **release candidates**, an example message:

    ```
    :ibm-products::ibm-products::ibm-products::ibm-products::ibm-products::ibm-products::ibm-products:

    Hi all! Release candidate v2.45.0-rc.0 of `@carbon/ibm-products` has been created and is ready for testing!

    What is a release candidate? Before releasing a full version (ie. v2.45.0), we publish prerelease versions / release candidates for testing purposes. This helps to prevent any major bugs making their way to our full versions. If you find any issues with this release candidate, you can report any issues here: https://github.com/carbon-design-system/ibm-products/issues/new/choose.

    Changelog: https://github.com/carbon-design-system/ibm-products/releases/tag/%40carbon%2Fibm-products%402.45.0-rc.0
    Storybook environment (Staging): https://carbon-design-system.github.io/ibm-products/staging/

    :ibm-products::ibm-products::ibm-products::ibm-products::ibm-products::ibm-products::ibm-products:
    ```

### Subsequent Prerelease

Once the first prerelease / release candidate has been published, it is
available for testing. If there are any issues during the testing period, fixes
can be pushed to the release branch. We can then publish subsequent prereleases
from the release branch for further testing. To publish subsequent prereleases,

- [ ] Run the
      [minor release workflow](https://github.com/carbon-design-system/ibm-products/actions/workflows/release-minor.yml)
      to generate the prerelease versions for the packages
      ![Screenshot of minor release workflow with subsequent release selected](https://github.com/carbon-design-system/ibm-products/assets/54281166/5d2694df-251d-46f4-bb9f-b86587758236)
  - [ ] Ensure the release branch is selected
  - [ ] Specify the type of release - in this case we will select
        `subsequent rc`
  - [ ] Ensure the dry run is checked
- [ ] Once the job has completed, which it should have failed, check the
      action's log. Lerna should have logged what versions it is bumping the
      packages to. It should bump the packages up by the prerelease identifier
      (ie. `v2.40.0-rc.0 ---> v2.40.0-rc.1`).
- [ ] If the version bumps are expected, run the workflow again with the same
      inputs as above, but this time with dry run unchecked.
- [ ] Once job has completed, check the packages on npm to ensure they have been
      published under the `next` tag:
  - [ ] `@carbon/ibm-products`:
        https://www.npmjs.com/package/@carbon/ibm-products?activeTab=versions
  - [ ] `@carbon/ibm-products-styles`:
        https://www.npmjs.com/package/@carbon/ibm-products-styles?activeTab=versions
- [ ] The workflow should have triggered the
      [deploy staging environment workflow](https://github.com/carbon-design-system/ibm-products/actions/workflows/deploy-staging.yml).
      Once this workflow has completed, check the
      [staging environment](https://carbon-design-system.github.io/ibm-products/staging)
      and ensure the version in the storybook top left header has been updated.
- [ ] Run the
      [create github tag and PR workflow](https://github.com/carbon-design-system/ibm-products/actions/workflows/create-release-tag-and-pr.yml).
      This workflow creates the release tag, generates the release with notes,
      and opens a PR to merge the changelog and version bumps from the release
      branch to `main`.
  - [ ] Make sure to specify to release branch and the correct release versions.
        ![Screenshot of create github tag and PR workflow with options selected](https://github.com/user-attachments/assets/854ca22d-997e-48b7-98dc-6b337c821a00)
    - The `release tag` option is the version that was just published (ie.
      v2.47.0-rc.1). Fill in the `previous tag` option with the previous release
      candidate (ie. v2.47.0-rc.0)
  - [ ] Merge in the generated PR (the title of the PR should start with
        `chore(release):` followed by the version).
  - [ ] Check the generated
        [release](https://github.com/carbon-design-system/ibm-products/releases)
        to ensure the release notes are correct.
- [ ] Post a message to the `#ibmproducts-pal-dev` Slack channel to announce the
      new version of `@carbon/ibm-products`.

  - For **release candidates**, an example message:

    ```
    :ibm-products::ibm-products::ibm-products::ibm-products::ibm-products::ibm-products::ibm-products:

    Hi all! Release candidate v2.45.0-rc.1 of `@carbon/ibm-products` has been created and is ready for testing!

    What is a release candidate? Before releasing a full version (ie. v2.45.0), we publish prerelease versions / release candidates for testing purposes. This helps to prevent any major bugs making their way to our full versions. If you find any issues with this release candidate, you can report any issues here: https://github.com/carbon-design-system/ibm-products/issues/new/choose.

    Changelog: https://github.com/carbon-design-system/ibm-products/releases/tag/%40carbon%2Fibm-products%402.45.0-rc.1
    Storybook environment (Staging): https://carbon-design-system.github.io/ibm-products/staging/

    :ibm-products::ibm-products::ibm-products::ibm-products::ibm-products::ibm-products::ibm-products:
    ```

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
- [ ] Once job has completed, check the packages on npm to ensure they have been
      published under the `latest` tag:
  - [ ] `@carbon/ibm-products`:
        https://www.npmjs.com/package/@carbon/ibm-products?activeTab=versions
  - [ ] `@carbon/ibm-products-styles`:
        https://www.npmjs.com/package/@carbon/ibm-products-styles?activeTab=versions
- [ ] The workflow should have triggered the
      [deploy staging environment workflow](https://github.com/carbon-design-system/ibm-products/actions/workflows/deploy-staging.yml)
      and the
      [deploy production environment workflow](https://github.com/carbon-design-system/ibm-products/actions/workflows/deploy-latest.yml).
      Once both these workflows have completed, check the
      [staging environment](https://carbon-design-system.github.io/ibm-products/staging)
      and the
      [production/latest environment](https://carbon-design-system.github.io/ibm-products/latest)
      to ensure the versions in the storybook top left header have been updated.
- [ ] Run the
      [create github tag and PR workflow](https://github.com/carbon-design-system/ibm-products/actions/workflows/create-release-tag-and-pr.yml).
      This workflow creates the release tag, generates the release with notes,
      and opens a PR to merge the changelog and version bumps from the release
      branch to `main`.
  - [ ] Make sure to specify to release branch and the correct release versions.
        ![Screenshot of create github tag and PR workflow with options selected](https://github.com/user-attachments/assets/85b8abfc-3dbe-4fd2-9d22-1d87e042148b)
    - The `release tag` option is the version that was just published (ie.
      v2.47.0). Fill in the `previous tag` option with the previous full release
      (ie. v2.46.0)
  - [ ] Merge in the generated PR (the title of the PR should start with
        `chore(release):` followed by the version).
  - [ ] Check the generated
        [release](https://github.com/carbon-design-system/ibm-products/releases)
        to ensure the release notes are correct.
  - [ ] Edit the generated release, and change the release from `pre-release` to
        `latest`.
        ![Screenshot of release label with latest option selected](https://github.com/user-attachments/assets/0be18f12-380e-45f2-b8aa-cfd01b9aa50c)
- [ ] Post a message to the `#ibmproducts-pal-dev` Slack channel to announce the
      new version of `@carbon/ibm-products`.

  - For **full releases**, list some of the features included in the release.
    These can be pulled from the release changelog. An example message:

    ```
    :ibm-products::ibm-products::ibm-products::ibm-products::ibm-products::ibm-products::ibm-products:

    Hi everyone! :wave: We are happy to announce the release of `@carbon/ibm-products` v2.47.0! This release comes with a bunch of new features, along with our usual bug squashing!

    New features and fixes include:
    - Optional custom component to row header in Data SpreadSheet
    - Action section and custom input for Condition Builder
    - Opt out ability for editable cells in DataGrid
    - Specify additional floating menu selectors for Tearsheet Shell
    - lots of a11y fixes!
    - lots of dependency upgrades!
    - and many more bug fixes! :bugsquash:

    Check out the full changelog, available at:
    https://github.com/carbon-design-system/ibm-products/releases/tag/v2.47.0
    Thank you for being an active member of our community! If you see any issues, you can reach out to us here, or open an issue on our board! :github:

    :ibm-products::ibm-products::ibm-products::ibm-products::ibm-products::ibm-products::ibm-products:
    ```

- [ ] Remove the branch protections for `release/v2.*` by changing the branch
      name pattern to `released/v2*`
      ![Screenshot of branch settings page with branch name pattern changed back to released](https://github.com/carbon-design-system/ibm-products/assets/54281166/690d4b71-4efa-4b70-9768-c3f4eae9ca7e)

- [ ] Update the release in the
      [Wiki release page](https://github.com/carbon-design-system/ibm-products/wiki/Carbon-for-IBM-Products-Releases)

### Post release

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
  - [ ] Make sure the branch name follows the `release/vx.x.x` format. For
        example, if the last release was `v2.49.0`, the patch release branch
        name should be `release/v2.49.1`
  - [ ] This can be done through the GitHub UI. First select the previous
        release tag from the GitHub branches / tags dropdown.
        ![Screenshot of GitHub's branch/tag dropdown](https://github.com/carbon-design-system/ibm-products/assets/54281166/93650016-5d30-40b6-8675-bc057755ec35)
  - [ ] Then reopen the dropdown, select the `Branches` tab, and create the
        release branch off the previously selected tag
        ![Screenshot of GitHub's branch/tag dropdown with release branch created](https://github.com/carbon-design-system/ibm-products/assets/54281166/8b5face8-d982-42df-b9ba-df5ffc01f85e)
- [ ] Once the patch release branch has been created, open a PR(s) to merge in
      any fixes / changes needed for the patch release. NOTE: Any changes merged
      into a `release/v2*` branch will be merged automatically into the `main`
      branch via the
      [automerge workflow](https://github.com/carbon-design-system/ibm-products/blob/main/.github/workflows/automerge.yml)
- [ ] Follow the same steps as the [prerelease](#prerelease) (skipping the
      branch creation steps as we have already created the patch release branch
      from the steps above here),
      [subsequent prerelease](#subsequent-prerelease), and
      [stable release](#stable-release) publishes, except instead of using the
      [minor release workflow](https://github.com/carbon-design-system/ibm-products/actions/workflows/release-minor.yml),
      use the
      [patch release workflow](https://github.com/carbon-design-system/ibm-products/actions/workflows/release-patch.yml)
