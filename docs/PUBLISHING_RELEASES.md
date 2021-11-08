# Publishing releases

The heavy lifting of generating and publishing releases for the packages in this
repo is all done by a github action called 'release'. This action runs on a
schedule, but can also be initiated manually if releases are wanted between the
scheduled releases.

## Manually initiating a release

To initiate a release manually, go to the repository on GitHub, look at
"Actions", select the "Release" workflow, and you should see the history of
recent runs of the release action. Select "Run workflow", and the workflow
action will be initiated: a short time later, when the action completes, the
repository will be updated with the new version numbers and the new releases
will be published on npm. Please also note the items listed below under
"**Things to do after each release**".

Note that you will need to be a collaborator on the project with at least
'write' access in order to manually initiate the release action. Please contact
one of the team members or admins if you need help with creating a release.

## What a release will do

The release action, whether it runs on the schedule or is initiated manually,
will look at the commits (_i.e._ the names of the PRs that have been merged)
that affect each of the published packages since the last release of the
package. If there are no commits for a package, it will not be included in the
release (but if it is dependent on another package that is included in the
release then it will also have a version 'bump' to update the dependency
version). If there are only chores or fixes, a patch release will be created for
the package. If there are features, a minor version release will be created for
the package. If there are breaking changes, a major version release will be
created for the release. Each package that is included in the release will have
its `package.json` updated with the corresponding versions, and these will be
committed back to the repository. The built versions of the updated packages
will be published to npm. These tasks are all carried out using `lerna`.

## Things to do after each release

After each release, whether it runs on the schedule or is initiated manually,
the following should be done:

- Check that the workflow completed successfully, and that the appropriate
  packages have been published. NB the workflow should not normally fail,
  because the checks that are done before each PR can be merged try to ensure
  this, but anomalous situations can still sometimes arise and cause the
  workflow to fail despite our best efforts.
- Post a message to the `ccs-pal-dev` Slack channel to announce the new version
  of @carbon/ibm-cloud-cognitive. To do this, post the message ":npm: new
  version:" and then paste the initial part of the release summary from the
  releases page on GitHub () that shows the package name, version number, and
  any features and bug fixes but stopping before the assets (there is no need to
  post those into the Slack message). An example is as follows: ":npm: new
  version: @carbon/ibm-cloud-cognitive@0.97.0 Latest 0.97.0 (2021-11-01)
  Features create tearsheet step, with custom components (#1342) (ef1e972)
  SidePanel: add rest props to actionToolbarButtons prop (#1362) (93eac3b) Bug
  fixes Tearsheet: avoid focus traps with stacked tearsheets (#1360) (17f48df)"
