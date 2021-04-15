# Review Checklists

## PR reviews

When reviewing a PR, check that our
[code guidelines](https://github.com/carbon-design-system/ibm-cloud-cognitive/blob/master/.github/CONTRIBUTING.md)
are followed, and keep an eye on the component review checklist below.

Each PR should be reviewed based on these criteria where applicable.

### New production dependencies

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

## Component reviews for readiness

Reviews will be carried out by one or more members of the core contribution
team. They will include as a minimum the following checks, which establish the
"definition of done" for a component.

Paste the following checklist into the epic or issue under which the component
is being made ready, then check where criteria passed, and add notes to clarify
how an item is complete or what remains to be done: for anything more than
minor/simple items, open issues to track them.

**Tip** You should be able to copy and paste the section below directly into a
GitHub comment, then check where criteria passed, strike out where not
applicable, and add notes to each item where applicable.

Once one or more components have been reviewed for readiness, the following
steps are needed:

- the flags for the components in package-settings.js should be changed to
  `true`.
- the component SCSS should be included in
  /src/components/\_index-released-only.scss.
- run the tests, recreating snapshots (using `-u`), and check in the updated
  public CSS snapshot.

`## Review for release`

`###` Readiness

`- [ ]` One or more scenarios for a design pattern have been identified as a
useful unit of functionality to publish.\
`- [ ]` A functioning component or components delivering those scenarios have been
delivered and merged to master.\
`- [ ]` Design maintainer has approved the implementation for those scenarios
(via a comment on the relevant issue/epic).

`###` Engineering review

`- [ ]` Breaking changes have only been introduced with prior approval,
discussion and documented in release notes. Ideally deprecation notices in the
prior major version must have been added in a timely fashion.\
`- [ ]` The implementation takes into account, and does not impair, remaining and
anticipated design scenarios.\
`- [ ]` Public component features (names, props, etc) are consistent with
Carbon-defined conventions and are consistent internally. Where there isn't an
existing convention to apply, ensure robust precedents are being established.\
`- [ ]` The UI produced is accessible, responsive, translatable, cross-browser, and
responds to the currently set Carbon theme.\
`- [ ]` Components are functional components using hooks.\
`- [ ]` Public components which produce DOM structures support className.\
`- [ ]` Public components support a ref (via React.forwardRef).\
`- [ ]` All significant DOM elements have meaningful classes.\
`- [ ]` Additional attributes that are not identified as props (such as title,
aria-\*, etc) are passed through to an appropriate DOM node of the component as
HTML attributes.\
`- [ ]` No warnings, errors or log messages in the console.\
`- [ ]` Each public component JS is exported in /src/components/index.js, each
public component SCSS is included in /src/components/\_index.scss, and each
public component has a flag in package-settings.js.

`###` Standards

`- [ ]` No linter warnings or errors are produced.\
`- [ ]` Carbon tokens (theme, layout, motion) are used unless the design specifies
otherwise.\
`- [ ]` Code is formatted according to prettier rules (no use of
//prettier-ignore).\
`- [ ]` Code is clear, maintainable and follows standard React practices and the
[code guidelines](https://github.com/carbon-design-system/ibm-cloud-cognitive/blob/master/.github/CONTRIBUTING.md).\
`- [ ]` Copyright header in every source file (js, css, scss etc.) with the
appropriate years.

`###` Testing

`- [ ]` There is a set of test cases for the components.\
`- [ ]` The tests exercise all inputs (props, slots, etc) and verify appropriate
outputs.\
`- [ ]` The tests validate the behaviors and interactions defined in the design
where practical.\
`- [ ]` The tests achieve 100% coverage. Usage of `istanbul ignore` is appropriate
and not extensive.\
`- [ ]` No warnings, errors or log messages in the test output.

`###` Documentation

`- [ ]` Source code is satisfactorily commented and provides DocGen comments for
all public components and their props.\
`- [ ]` There is a story for each design scenario. The stories expose all relevant
props and actions, and additional usage documentation and code samples are available
on the 'Docs' tab along with the props table.\
`- [ ]` There is a sandbox (or multiple sandboxes if appropriate) on CodeSandbox
for the components.
