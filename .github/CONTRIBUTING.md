# Contributing

IBMers should complete steps documented on
[W3 Developer](https://w3.ibm.com/developer/docs/open-source/contributing/)
before contributing to open source projects.

Also refer to
[contributing in Carbon](https://github.com/carbon-design-system/carbon/blob/master/.github/CONTRIBUTING.md).

## Issues, ideas, and feedback

Contribution comes in many forms and many of them do not need you to write a
line of code.

- Have a question? Visit our
  [Slack channel](https://ibm-casdesign.slack.com/archives/C013ZTX0N6B) and/or
  [ask a question on GitHub](https://github.com/carbon-design-system/ibm-cloud-cognitive/issues/new?assignees=&labels=type%3A+question+%E2%9D%93&template=question.md&title=)
- Have an issue you’d like resolved, then
  [raise an issue](https://github.com/carbon-design-system/ibm-cloud-cognitive/issues/new?assignees=&labels=type%3A+bug&template=bug-report.md&title=)
- Have a new component, pattern, or enhancement request, then
  [tell us about it](https://github.com/carbon-design-system/ibm-cloud-cognitive/issues/new?assignees=&labels=&template=component-or-pattern.md)

## Code

There’s only so many hours in a day, so we welcome contributions of code.
[Find an issue or raise one](https://github.com/carbon-design-system/ibm-cloud-cognitive/issues),
and follow the guide below.

### 1. Fork the repo

Go to the
[Carbon for IBM Products repository on GitHub](https://github.com/carbon-design-system/ibm-cloud-cognitive)
and [fork the repo](https://help.github.com/articles/fork-a-repo/),
[syncing with the original repo](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo#keep-your-fork-synced).

### 2. Work in a branch

When contributing to Carbon for IBM Products, your work should always be done in
a
[branch off your fork](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository).

### 3. Start the development server

1. To install the project’s dependencies, from the root directory of your fork,
   run `yarn`
2. To scaffold a [new component or pattern](#8-new-component-or-pattern), run
   `yarn generate ComponentName`, where `ComponentName` is the name of the
   component or pattern
3. To get your development server running and to start coding, run
   `yarn storybook`

This will start a development server where you can see any changes you are
making to components in our Storybook.

The command to start the server will differ depending on which package you are
working within. To find out which command you’ll need to run, you can check the
`scripts` property in the package’s `package.json`.

Once it's done building, you can edit source code or create new components. The
system is set up to automatically bundle your additions / changes. Visit
[`http://localhost:3000`](http://localhost:3000) to see the changes happen on
the fly.

#### What is this Canary thing?

The Canary lines in the components were added to enable component feature flags,
that is, the enabling of components through user settings.

This allowed the removal of the term/package `experimental` and permitted the
publication of all components in a single package. Those that have not yet
completed the [release review](/docs/reviews/RELEASE_REVIEW_GUIDELINES.md)
process are considered to be `canary` and require the consumer to enable via a
feature flag.

See example component enabled via feature flags on
[CodeSandbox](https://codesandbox.io/s/example-component-canary-olif5).

For more information on how this affects components see
[CANARY_STRUCTURE.md](https://github.com/carbon-design-system/ibm-cloud-cognitive/blob/master/docs/guides/CANARY_STRUCTURE.md).

### 4. Test your JavaScript code

If you’re contributing to our JavaScript code, test your changes by running
`yarn test`.

New tests are written in
[React Testing Library](https://testing-library.com/docs/react-testing-library/intro),
with [Enzyme](https://enzymejs.github.io/enzyme) available for migration
compatibility, and follow the
[User Experience Standards Adopter Guide](https://github.ibm.com/IBMPrivateCloud/BedrockServices/blob/master/AdopterGuides/CommonUXStandardsAdoptionGuide.md#testing).

### 5. Make a pull request

**Note:** Before you make a pull request,
[search the issues](https://github.com/carbon-design-system/ibm-cloud-cognitive/issues)
to see if a similar issue has already been submitted. If a similar issue has
been submitted, assign yourself or ask to be assigned to the issue by posting a
comment. If the issue does not exist, please make a new issue.

**Note 2:** If you are submitting a new component or pattern there are some
additional steps we’d like you to take. In brief, use the
`New component or pattern` issue template. The new issue should be an epic.

Refer to
[contributing in Carbon](https://github.com/carbon-design-system/carbon/blob/master/.github/CONTRIBUTING.md#what-is-the-contribution-process)
for some contribution quick tips.

An effective pull request should not have more than 400 lines of code
changed[^1], so do not create one massive PR if it can be
[scoped down into smaller, focused PRs of independent behaviors and functionality](https://www.netlify.com/blog/2020/03/31/how-to-scope-down-prs/).

[^1]:
    [SmartBear study of a Cisco Systems programming team](https://smartbear.com/learn/code-review/best-practices-for-peer-code-review)

When you’re at a good stopping place and you’re ready for feedback from other
contributors and maintainers,
[commit](https://docs.github.com/en/github/managing-files-in-a-repository/adding-a-file-to-a-repository-using-the-command-line),
[push to your fork](https://docs.github.com/en/github/using-git/pushing-commits-to-a-remote-repository),
and
[create a pull request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork).

- See [Conventional Commits](https://www.conventionalcommits.org) for more
  information about how to write your commit message.
- Also refer to
  [How to write the perfect pull request](https://github.blog/2015-01-21-how-to-write-the-perfect-pull-request).

### 6. Updating a pull request

Stay up to date with the activity in your pull request. Maintainers will be
reviewing your work and making comments, asking questions, and suggesting
changes to be made before they merge your code.

When you need to make a change, use the same method detailed above.

Once all revisions to your pull request are complete, a maintainer will squash
and merge your commits for you.

### 7. New production dependencies

If you introduce a new dependency to `package.json` then there will be some
additional work to do.

- [ ] Verify the dependency has previously been
      [pedigree reviewed](https://pedigree-service.wdc1a.cirrus.ibm.com)
- [ ] Verify the dependency
      [doesn’t contain any vulnerabilities](https://snyk.io/vuln)
- [ ] Verify the dependency [bundle size](https://bundlephobia.com) is
      acceptable
- [ ] Verify the dependency is [actively maintained](https://www.npmtrends.com)

### 8. New component or pattern

If you create a new component or pattern, it should first be contributed as
[`canary`](https://github.com/carbon-design-system/ibm-cloud-cognitive/blob/master/docs/guides/CANARY_STRUCTURE.md).

Due to the nature of the monorepo, when you add a new component or pattern, be
sure to add it in `packages/core/story-structure`. This step will surface the
component or pattern in the Storybook navigation.

To move a component from `canary` to the released state, there are two
additional tasks that must be completed.

- [ ] See our
      [design review guidelines](https://github.com/carbon-design-system/ibm-cloud-cognitive/blob/main/docs/reviews/DESIGN_REVIEW_GUIDELINES.md)
      and then create a new issue based on the
      [`design-review` template](https://github.com/carbon-design-system/ibm-cloud-cognitive/issues/new?assignees=&labels=&design-review.md)
      and complete the steps suggested.
- [ ] See our
      [release guidelines](https://github.com/carbon-design-system/ibm-cloud-cognitive/blob/main/docs/reviews/RELEASE_REVIEW_GUIDELINES.md)
      and then create a new issue based on the
      [`release-review` template](https://github.com/carbon-design-system/ibm-cloud-cognitive/issues/new?assignees=&labels=&release-review.md).
