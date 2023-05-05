# @carbon/ibm-products

> Carbon for IBM Products is an open source implementation of the closed source
> [Carbon for Cloud & Cognitive pattern asset library (PAL)](https://pages.github.ibm.com/cdai-design/pal/).
> These PAL designs build on the foundation of IBM’s open source Carbon Design
> System and React implementation to offer components and patterns beyond the
> typical component library. Carbon for IBM Products was previously known as
> Carbon for IBM Cloud and Cognitive (@carbon/ibm-cloud-cognitive), and this
> name can still be encountered in various places and historical logs.

[![All Contributors](https://img.shields.io/badge/all_contributors-10-orange.svg)](#contributors-)
[![Licensed under the Apache License, Version 2.0](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](https://github.com/carbon-design-system/ibm-cloud-cognitive/blob/master/LICENSE)
[![Build status](https://github.com/carbon-design-system/ibm-cloud-cognitive/actions/workflows/ci.yml/badge.svg)](https://github.com/carbon-design-system/ibm-cloud-cognitive/actions/workflows/ci.yml)
[![Netlify status](https://img.shields.io/netlify/f850c678-e8be-43c0-aa95-b2b9cca8ac21)](https://app.netlify.com/sites/carbon-for-ibm-products/deploys)
[![GitHub Lerna version](https://img.shields.io/github/lerna-json/v/carbon-design-system/ibm-cloud-cognitive)](https://lerna.js.org)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)](https://github.com/carbon-design-system/ibm-cloud-cognitive/blob/master/.github/CONTRIBUTING.md)

> Carbon for IBM Products common UI components

## 🚀 Getting started

If you’re just getting started and looking to browse our React components, take
a look at [our Storybook](https://carbon-for-ibm-products.netlify.app).

### 📦 Installing Carbon for IBM Products

To use Carbon for IBM Products components, all you need to do is install the
`@carbon/ibm-products` package.

```shell
$ yarn add @carbon/ibm-products

# or

$ npm install @carbon/ibm-products
```

Then you can import the component styles in your `index.js`.

```js
import '@carbon/ibm-products/css/index.min.css';
```

### Webpack 4

Our package requires support for ES modules (see
[#2378](https://github.com/carbon-design-system/ibm-cloud-cognitive/issues/2378#issuecomment-1319276192)).
In Webpack 5, these are supported by default. In Webpack 4, you will need to add
the [following rule](https://stackoverflow.com/a/72149467) to your config.

```js
rules: [
  {
    test: /\.mjs$/,
    include: /node_modules/,
    type: 'javascript/auto',
  },
],
```

### Peer dependencies

`@carbon/ibm-products` is built on top of Carbon components and has a number of
dependencies which need to be installed.

- Install
  [`carbon-components-react`](https://www.npmjs.com/package/carbon-components-react)
  as per package instructions
- Install
  [`@carbon/icons-react`](https://www.npmjs.com/package/@carbon/icons-react) as
  per package instructions
- Install [`@carbon/elements`](https://www.npmjs.com/package/@carbon/elements)
  as per package instructions

**Note:** `@carbon/elements` rolls up a number of Carbon packages that could be
installed independently. As this list of dependencies could change, we leave you
to view `package.json` in ibm-cloud-cognitive if you wish to install individual
packages.

## Examples

### CodeSandbox

Examples for each released component, and some that are still not quite ready,
can be found here on
[CodeSandbox](https://codesandbox.io/examples/package/@carbon/ibm-cloud-cognitive).

### Packages

You can find example projects using the components in the
[examples folder](../../packages/examples/carbon-for-ibm-products).

## Usage

To start using the components

```jsx
import { AboutModal } from '@carbon/ibm-products';

const App = () => {
  return <AboutModal />;
};
```

### Enabling Canary components and flagged features

Components that have not yet completed the release review process are considered
to be canary and require the consumer to enable via a feature flag in a
`config.js` file.

For example, create a `config.js` in your `src` directory:

```js
import { pkg } from '@carbon/ibm-products';

// Enable 'canary' (not yet reviewed/released) components
// that we want to make use of
pkg.component.AboutModal = true;
pkg.component.SidePanel = true;

// Live dangerously: enable all components!
pkg.setAllComponents(true);

// Enable a feature flagged example
pkg.feature.nameOfFeature = true;
pkg.feature['Component.feature'] = true;
// Live dangerously: enable all pre-release features!
pkg.setAllFeatures(true);
```

**Note:** The above settings must happen before a component first renders or a
feature is first used.

**Note: 2** In the case of features implemented via hooks the feature may
function without enabling. In all cases features that disabled by default will
log in the console a warning if enabled via a feature flag or an error if not.

### Building and running locally

To get started, run the following commands and Storybook will be built and then
served on port `3000` on your local machine.

```shell
yarn install
yarn storybook
```

To build all the packages, run the following command.

```shell
yarn build
```

## Browser support

This library supports the latest versions of:

- Apple Safari
- Google Chrome
- Microsoft Edge
- Mozilla Firefox

## 🙌 Contributing

This project is made possible by several community members who have invested
their precious time to give back to the Carbon community. It will continue to be
possible by having those that benefit from the package contribute back to it.

So, do not be shy. We both depend on and appreciate contributors, new and old,
who help us fix bugs, build new features, improve our documentation, etc.

If you’re interested, definitely check out our
[Contributing Guide](https://github.com/carbon-design-system/ibm-cloud-cognitive/blob/master/.github/CONTRIBUTING.md)
and
[Carbon’s Developer Handbook](https://github.com/carbon-design-system/carbon/blob/master/docs/developer-handbook.md)!
👀

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/lee-chase"><img src="https://avatars0.githubusercontent.com/u/15086604?v=4" width="100px;" alt=""/><br /><sub><b>Lee Chase</b></sub></a><br /><a href="https://github.com/carbon-design-system/ibm-cloud-cognitive/commits?author=lee-chase" title="Code">💻</a></td>
    <td align="center"><a href="http://davidmenendez.net"><img src="https://avatars1.githubusercontent.com/u/6370760?v=4" width="100px;" alt=""/><br /><sub><b>David Menendez</b></sub></a><br /><a href="https://github.com/carbon-design-system/ibm-cloud-cognitive/commits?author=davidmenendez" title="Code">💻</a></td>
    <td align="center"><a href="http://www.matthewdgallo.com"><img src="https://avatars0.githubusercontent.com/u/10215203?v=4" width="100px;" alt=""/><br /><sub><b>Matthew Gallo</b></sub></a><br /><a href="https://github.com/carbon-design-system/ibm-cloud-cognitive/commits?author=matthewgallo" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://simonfinney.dev"><img src="https://avatars2.githubusercontent.com/u/3846874?v=4" width="100px;" alt=""/><br /><sub><b>Simon Finney</b></sub></a><br /><a href="https://github.com/carbon-design-system/ibm-cloud-cognitive/commits?author=SimonFinney" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/polinaouk"><img src="https://avatars2.githubusercontent.com/u/24444328?v=4" width="100px;" alt=""/><br /><sub><b>Polina Olemskaia</b></sub></a><br /><a href="https://github.com/carbon-design-system/ibm-cloud-cognitive/commits?author=polinaouk" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## Telemetry

In order to gather usage information for these components we use
[@carbon/telemetry](https://www.carbondesignsystem.com/help/faq/#telemetry).

## 📝 License

Licensed under the
[Apache-2.0 License](https://github.com/carbon-design-system/ibm-cloud-cognitive/blob/master/LICENSE).

[![This site is powered by Netlify](https://www.netlify.com/img/global/badges/netlify-color-accent.svg)](https://www.netlify.com)
