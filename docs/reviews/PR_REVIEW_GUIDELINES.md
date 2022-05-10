# PR reviews

When reviewing a PR, check that our
[code guidelines](https://github.com/carbon-design-system/ibm-cloud-cognitive/blob/master/docs/CODE_GUIDELINES.md)
are followed, and keep an eye on the
[release review guidelines](https://github.com/carbon-design-system/ibm-cloud-cognitive/blob/master/docs/reviews/RELEASE_REVIEW_GUIDELINES.md).

Each PR should be reviewed based on these criteria where applicable.

## Standards and conventions

- PR titles are used to determine the semver release type go into our changelog
  — be sure to include name your PRs appropriately

  - **feat**: for new features or changes, when applicable, include the
    component or area, e.g. **feat(Tearsheet)**
  - **fix**: for bug fixes
  - **chore**, **docs**, **test**, **etc**: for changes that don’t impact the
    end-user experience directly

- **No breaking changes.** If we need to remove or change props, we should
  deprecate them using the props helpers in
  `../../global/js/utils/props-helper.js`.

## New production dependencies

If a PR introduces new dependencies in `package.json`, paste the following
checklist into the PR as a comment and check the items off before approving.

**Tip** You should be able to copy and paste the section below directly into a
GitHub comment, then check where criteria passed, strike out where not
applicable.

`## Review of dependencies`

`- [ ]` Verify the dependency has previously been
[pedigree reviewed](https://pedigree-service.wdc1a.cirrus.ibm.com)\
`- [ ]` Verify the dependency [doesn't contain any vulnerabilities](https://snyk.io/vuln)\
`- [ ]` Verify the dependency [bundle size](https://bundlephobia.com) is
acceptable\
`- [ ]` Verify the dependency is [actively maintained](https://www.npmtrends.com)\
`- [ ]` Verify license conditions are met e.g. forwarding of copyright if
necessary.
