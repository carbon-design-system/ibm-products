# e2e testing

## Overview

| Task                                                  | Command                                            |
| :---------------------------------------------------- | :------------------------------------------------- |
| Run playwright tests                                  | `yarn playwright test`                             |
| Run a specific playwright test                        | `yarn playwright test path/to/test-e2e.js`         |
| Run playwright tests in a specific browser            | `yarn playwright test --browser=chromium`          |
| Run playwright tests in a specific project            | `yarn playwright test --project=chromium`          |
| Debug playwright tests                                | `yarn playwright test --debug`                     |
| Run playwright with browser visible                   | `yarn playwright test --project=chromium --headed` |
| Run playwright tests that match a specific tag        | `yarn playwright test --grep @tag-name`            |
| Run playwright tests that do not match a specific tag | `yarn playwright test --grep-invert @tag-name`     |

### Playwright

We use Playwright to run end-to-end tests against components in `ibm-products`,
together with the `accessibility-checker` package from IBM Accessibility to
ensure we catch and prevent a11y violations in the components we ship.

These tests are authored within the `e2e` directory and match the file pattern:
`*.test.avt.e2e.js`.

### Tags

Playwright tests are divided into different tag categories for reporting
purposes. We currently only support `@avt` tags but in future release will be
exploring a `@vrt` tag to denote visual regression testing.

For avt tests, the test title should always include one of the following:

| Tag                    | Description                                                                                                                    |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `@avt`                 | High level/root tag that should wrap all avt tests. This is usually placed in a `describe` block title.                        |
| `@avt-default-state`   | Sub-tag of `@avt`, used to tag individual tests covering the default state of a component.                                     |
| `@avt-advanced-states` | Sub-tag of `@avt`, used to tag individual tests covering advanced states of a component (open/close, invalid, expanded, etc.). |
| `@avt-keyboard-nav`    | Sub-tag of `@avt`, used to tag individual tests covering keyboard navigation flows.                                            |

#### Developing

When working with Playwright locally, it's important to start up the service
that you're testing against. For components in `@carbon/ibm-products`, this will
mean starting up the storybook locally by doing the following from the root of
the project:

```bash
yarn
yarn storybook
```

Now you can run the playwright tests with one of the commands in the overview
table above. This is an ongoing effort our team will be working on with some
additions including adding these e2e tests as part of our PR checks, including
additional `@avt` coverage for other components, and introducing visual
regression testing by using playwright and Percy together.
