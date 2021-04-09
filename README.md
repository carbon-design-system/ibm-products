# Carbon for Cloud & Cognitive

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-10-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![Licensed under the Apache License, Version 2.0](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](https://github.com/carbon-design-system/ibm-cloud-cognitive/blob/master/LICENSE)
[![Build status](https://github.com/carbon-design-system/ibm-cloud-cognitive/workflows/ci/badge.svg)](https://github.com/carbon-design-system/ibm-cloud-cognitive/actions?query=workflow%3Aci)
[![Netlify status](https://img.shields.io/netlify/19d81e71-7987-4124-8a3a-36e051486e6b)](https://app.netlify.com/sites/ibm-cloud-cognitive/deploys)
[![GitHub Lerna version](https://img.shields.io/github/lerna-json/v/carbon-design-system/ibm-cloud-cognitive)](https://lerna.js.org)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)](https://github.com/carbon-design-system/ibm-cloud-cognitive/blob/master/.github/CONTRIBUTING.md)

> Carbon for Cloud & Cognitive

## 🚀 Getting started

If you're just getting started and looking for React components, take a look at
[our Storybook](https://ibm-cloud-cognitive.netlify.app).

If you're trying to find something specific, here's a full list of packages that
we support!

| Package name                                                                                                                      | Description          |
| --------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| [`@carbon/ibm-cloud-cognitive`](https://github.com/carbon-design-system/ibm-cloud-cognitive/tree/master/packages/cloud-cognitive) | Common UI components |

If you want to try out Carbon for Cloud & Cognitive, you can use
[CodeSandbox](https://codesandbox.io/s/github/carbon-design-system/ibm-cloud-cognitive/tree/main/examples/codesandbox).

[![Edit CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/carbon-design-system/ibm-cloud-cognitive/tree/main/examples/codesandbox)

## 📦 Installing IBM Cloud Cognitive

To use IBM Cloud Cognitive components, all you need to do is install the
`@carbon/ibm-cloud-cognitive` package.

```shell
$ yarn add @carbon/ibm-cloud-cognitive

# or

$ npm install @carbon/ibm-cloud-cognitive
```

Then you can import the component styles in your `index.js`.

```js
import '@carbon/ibm-cloud-cognitive/css/index.min.css';
```

## Usage

To start using the components

```jsx
import { AboutModal } from '@carbon/ibm-cloud-cognitive';

const App = () => {
  return <AboutModal />;
};
```

## Enabling canary components

Components that have not yet completed the release review process are considered
to be canary and require the consumer to enable via a feature flag in a
`config.js` file.

Create a `config.js` in your `src` directory.

```js
import { pkg } from '@carbon/ibm-cloud-cognitive/es/settings';

// Enable 'canary' (not yet reviewed/released) components
// that we want to make use of
pkg.component.AboutModal = true;
pkg.component.SidePanel = true;

// Live dangerously: enable all components!
pkg.setAllComponents(true);

// Enable all pre-release feature flags that we want to use
pkg.flags.noneJustYet = true;

// Live dangerously: enable all pre-release features!
pkg.setAllFeatures(true);
```

## Building and running Locally

To get started run the following commands and storybook will be built and then
served on port `3000` on your local machine.

```
yarn install
yarn storybook
```

To build all the packages, run the following command.

```
yarn build
```

## Browser Support

This library supports the latest versions of:

- Apple Safari
- Google Chrome
- Microsoft Edge
- Mozilla Firefox

## 🙌 Contributing

This project is made possible by several community members who have invested
their own time to give back to the Carbon community.

We're always looking for contributors to help us fix bugs, build new features,
or help us improve the project documentation. If you're interested, definitely
check out our
[Contributing Guide](https://github.com/carbon-design-system/ibm-cloud-cognitive/blob/master/.github/CONTRIBUTING.md)
and
[Carbon's Developer Handbook](https://github.com/carbon-design-system/carbon/blob/master/docs/developer-handbook.md)!
👀

## Contributors ✨

Thanks goes to these wonderful people
([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://simonfinney.dev"><img src="https://avatars2.githubusercontent.com/u/3846874?v=4" width="100px;" alt=""/><br /><sub><b>Simon Finney</b></sub></a><br /><a href="https://github.com/carbon-design-system/ibm-cloud-cognitive/commits?author=SimonFinney" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/lee-chase"><img src="https://avatars0.githubusercontent.com/u/15086604?v=4" width="100px;" alt=""/><br /><sub><b>Lee Chase</b></sub></a><br /><a href="https://github.com/carbon-design-system/ibm-cloud-cognitive/commits?author=lee-chase" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/moores2"><img src="https://avatars2.githubusercontent.com/u/6977424?v=4" width="100px;" alt=""/><br /><sub><b>Simon Moore</b></sub></a><br /><a href="https://github.com/carbon-design-system/ibm-cloud-cognitive/commits?author=moores2" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/joshblack"><img src="https://avatars1.githubusercontent.com/u/3901764?v=4" width="100px;" alt=""/><br /><sub><b>Josh Black</b></sub></a><br /><a href="https://github.com/carbon-design-system/ibm-cloud-cognitive/commits?author=joshblack" title="Code">💻</a></td>
    <td align="center"><a href="http://davidmenendez.net"><img src="https://avatars1.githubusercontent.com/u/6370760?v=4" width="100px;" alt=""/><br /><sub><b>David Menendez</b></sub></a><br /><a href="https://github.com/carbon-design-system/ibm-cloud-cognitive/commits?author=davidmenendez" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/vladbalanescu"><img src="https://avatars2.githubusercontent.com/u/16047402?v=4" width="100px;" alt=""/><br /><sub><b>vladbalanescu</b></sub></a><br /><a href="https://github.com/carbon-design-system/ibm-cloud-cognitive/commits?author=vladbalanescu" title="Code">💻</a></td>
    <td align="center"><a href="http://www.matthewdgallo.com"><img src="https://avatars0.githubusercontent.com/u/10215203?v=4" width="100px;" alt=""/><br /><sub><b>Matthew Gallo</b></sub></a><br /><a href="https://github.com/carbon-design-system/ibm-cloud-cognitive/commits?author=matthewgallo" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/asfordmatt"><img src="https://avatars2.githubusercontent.com/u/14233261?v=4" width="100px;" alt=""/><br /><sub><b>Matt Chapman</b></sub></a><br /><a href="https://github.com/carbon-design-system/ibm-cloud-cognitive/commits?author=asfordmatt" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/dbrugger"><img src="https://avatars1.githubusercontent.com/u/10086178?v=4" width="100px;" alt=""/><br /><sub><b>Dominik Brugger</b></sub></a><br /><a href="https://github.com/carbon-design-system/ibm-cloud-cognitive/commits?author=dbrugger" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/polinaouk"><img src="https://avatars2.githubusercontent.com/u/24444328?v=4" width="100px;" alt=""/><br /><sub><b>Polina Olemskaia</b></sub></a><br /><a href="https://github.com/carbon-design-system/ibm-cloud-cognitive/commits?author=polinaouk" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/sydrosa"><img src="https://avatars.githubusercontent.com/u/47571589?v=4" width="100px;" alt=""/><br /><sub><b>Syd Rosa</b></sub></a><br /><a href="https://github.com/carbon-design-system/ibm-cloud-cognitive/commits?author=sydrosa" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/dcwarwick"><img src="https://avatars.githubusercontent.com/u/6385315?v=4" width="100px;" alt=""/><br /><sub><b>Dave Clark</b></sub></a><br /><a href="https://github.com/carbon-design-system/ibm-cloud-cognitive/commits?author=dcwarwick" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the
[all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind welcome!

## 📝 License

Licensed under the
[Apache-2.0 License](https://github.com/carbon-design-system/ibm-cloud-cognitive/blob/master/LICENSE).

[![This site is powered by Netlify](https://www.netlify.com/img/global/badges/netlify-color-accent.svg)](https://www.netlify.com)
