<!-- cspell:ignore ibmproducts -->

# Maintainer guide

Pull requests are automatically assigned to the IBM Cloud & Cognitive
Development team. (Pull requests related to the
[`security` package](https://github.com/carbon-design-system/ibm-cloud-cognitive/tree/main/packages/security)
are assigned the individual maintainers of that package.)

## Reviewing code

Pull requests should be reviewed in a timely manner.

Code review should follow the process and standards documented in our
[PR review guidelines](https://github.com/carbon-design-system/ibm-cloud-cognitive/blob/main/docs/reviews/PR_REVIEW_GUIDELINES.md).

Once a PR is approved, you can add the label **`status: ready to merge`**, to
allow Kodiak to handle automatic updates and merging. PRs can be merged by their
authors although for PRs contributed by those outside of the core contributor
team, you may also merge and delete the branches on their behalf.

## Performing release reviews

As described in the
[release review guidelines](https://github.com/carbon-design-system/ibm-cloud-cognitive/blob/main/docs/reviews/RELEASE_REVIEW_GUIDELINES.md),
the core contribution team is responsible for performing release reviews.

In most cases, a new maintainer will partner with an experienced contributor for
their first release review. Most of the steps covered in the checklist should be
self-explanatory.

To check for component test coverage for a given component, for example in the
`ibm-products` package, run:

```shell
yarn test:c4p /ComponentName/ --coverage
```

This will generate a coverage report in `packages/cloud-cognitive/coverage`.

## Publishing releases

Releases are handled by a GitHub action called “Release.” While releases are
scheduled to run on a regular cadence, they can also be triggered manually
through GitHub Actions.

After each release, our contributors should announce the latest version of
`@carbon/ibm-products` in the `ibmproducts-pal-dev` Slack channel.

For more detail on publishing releases, please see our guidelines on
[publishing releases](https://github.com/carbon-design-system/ibm-cloud-cognitive/blob/main/docs/PUBLISHING_RELEASES.md)
