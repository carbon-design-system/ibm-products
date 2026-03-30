<!--
HUMAN MAINTAINERS:
This file should be as short as possible. More length = more tokens used.
-->

This is a monorepo for Carbon for IBM Products that extends IBM's Carbon Design
System with React components, web components, styles, and patterns for IBM
product teams.

# Repository Guidelines

- The correct Node version to use is present in `.nvmrc`
- Yarn workspaces manage dependencies and package relationships
- `package.json` scripts make use of Lerna for build and task sequencing

## Workflow details

- Avoid scanning the entire repo as a first step. Start from the most necessary
  surface for the task and expand or drill down only when necessary
- Follow the coding style guide, see `docs/CODE_GUIDELINES.md`
- Follow the maintainer guide, see `docs/MAINTAINER_GUIDELINES.md`
- For procedural instructions on various tasks for maintainers, see
  `docs/guides/`
- The approach for delivering experimental, feature-flagged, "canary" code:
  `docs/guides/CANARY_STRUCTURE.md`
- Linting, formatting, build and tests should all pass before committing
- Before opening or reviewing a pull request (PR), follow the instructions:
  `docs/reviews/PR_REVIEW_GUIDELINES.md`

## Package relationships

- The packages contained within this monorepo and published to NPM are
  intentionally layered. Higher-level packages re-export or wrap lower-level
  packages.
- A directory-to-package mapping is generated from the build:
  `docs/generated/package-structure.json`
- A detailed graph of packages and their relationships is generated from the
  build: `docs/generated/monorepo-internal-graph.json`
- Main packages: `@carbon/ibm-products` (React), `@carbon/ibm-products-styles`
  (styles), `@carbon/ibm-products-web-components` (Web Components)

## Package-specific details

- A dual-flagship model is followed for `@carbon/ibm-products` and
  `@carbon/ibm-products-web-components`. These two are intended to provide an
  equal experience for consumers choosing to build with either library. Visual
  and functional parity are paramount, though implementations may diverge as
  necessary.
- `@carbon/ibm-products-styles` provides standalone styles that can be used
  independently or are consumed by the component packages.

## End user/practitioner guidance

If the task is complicated and specialized enough to require it, there is
external documentation focused towards end users of the system (designers,
developers, product managers)

- Detailed design and usage information for the system as a whole:
  https://ibm-products.carbondesignsystem.com
- Developer-focused, component-specific usage docs are surfaced through
  Storybook and housed in colocated `.mdx` files.
