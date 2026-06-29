<!-- cspell:ignore ibmproducts -->

# Maintainer guide

Pull requests are automatically assigned to the Carbon For IBM Products
Development team.

## Reviewing code

Pull requests should be reviewed in a timely manner.

Code review should follow the process and standards documented in our
[PR review guidelines](https://github.com/carbon-design-system/ibm-products/blob/main/docs/reviews/PR_REVIEW_GUIDELINES.md).

### DCO (Developer Certificate of Origin)

All contributions must be covered by the Developer Certificate of Origin (DCO).
Contributors must sign the DCO by adding a comment to their pull request.

**For maintainers reviewing PRs:**

1. Check if the PR has the DCO signed (look for the DCO bot check)
2. If DCO is not signed, request the contributor to add a comment with:
   ```
   I have read the DCO document and I hereby sign the DCO.
   ```
3. The DCO bot will automatically verify the signature once the comment is
   posted

**Note:** The PR cannot be merged until the DCO is signed.

### Merging pull requests

Once a PR is approved and DCO is signed, you can add the label
**`status: ready to merge`**, to allow Kodiak to handle automatic updates and
merging. PRs can be merged by their authors although for PRs contributed by
those outside of the core contributor team, you may also merge and delete the
branches on their behalf.

## Component status and promotion

Components in Carbon for IBM Products follow a PDLC (Product Development
Lifecycle) status system:

**Draft → Preview Candidate → Preview → Stable**

For detailed information about each status level and how to promote components,
see:

- [Component Status Definitions](./guides/COMPONENT_STATUS_DEFINITIONS.md)
- [Release Review Template](.github/ISSUE_TEMPLATE/release-review.md)

### Coverage requirements by status

- **Preview Candidate:** Test coverage approaching 80%
- **Preview:** Test coverage ≥ 80%
- **Stable:** Test coverage ≥ 90%

## Performing release reviews

As described in the
[release review guidelines](https://github.com/carbon-design-system/ibm-products/blob/main/docs/reviews/RELEASE_REVIEW_GUIDELINES.md),
the core contribution team is responsible for performing release reviews.

In most cases, a new maintainer will partner with an experienced contributor for
their first release review. Most of the steps covered in the checklist should be
self-explanatory.

To check for component test coverage for a given component, for example in the
`ibm-products` package, run:

```shell
yarn test:c4p /ComponentName/ --coverage
// or
yarn coverage /ComponentName/
```

This will generate a coverage report in `packages/ibm-products/coverage` which
you can easily access with `yarn coverage:report`.

## Publishing releases

Releases are handled by a GitHub action called “Release.” While releases are
scheduled to run on a regular cadence, they can also be triggered manually
through GitHub Actions.

After each release, our contributors should announce the latest version of
`@carbon/ibm-products` in the `#carbon-for-ibmproducts` Slack channel.

For more detail on publishing releases, please see our guidelines on
[publishing releases](https://github.com/carbon-design-system/ibm-products/blob/main/docs/PUBLISHING_RELEASES.md)
