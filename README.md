# Carbon for IBM Products

> Carbon for IBM Products is an open source implementation of the closed source
> [IBM Software pattern asset library (PAL)](https://pages.github.ibm.com/cdai-design/pal/).
> These PAL designs build on the foundation of IBM’s open source Carbon Design
> System and React implementation to offer components and patterns beyond the
> typical component library. Carbon for IBM Products was previously known as
> Carbon for Cloud and Cognitive, and this name can still be encountered in
> various places and historical logs.

[![All Contributors](https://img.shields.io/github/all-contributors/carbon-design-system/ibm-products?color=ee8449)](#contributors-)
[![Licensed under the Apache License, Version 2.0](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](https://github.com/carbon-design-system/ibm-products/blob/master/LICENSE)
[![Build status](https://github.com/carbon-design-system/ibm-products/actions/workflows/ci.yml/badge.svg)](https://github.com/carbon-design-system/ibm-products/actions/workflows/ci.yml)
[![Netlify status](https://img.shields.io/netlify/e8cd9972-0fc8-4c51-a911-e9a930ca6605)](https://app.netlify.com/sites/carbon-for-ibm-products/deploys)
[![GitHub Lerna version](https://img.shields.io/github/lerna-json/v/carbon-design-system/ibm-products)](https://lerna.js.org)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)](https://github.com/carbon-design-system/ibm-products/blob/master/.github/CONTRIBUTING.md)

## 🚀 Getting started

If you’re just getting started and looking to browse our React components, take
a look at [our Storybook](https://ibm-products.carbondesignsystem.com).

All of our source code and documentation, including this readme, can be found on
[our GitHub repo](https://github.com/carbon-design-system/ibm-products), which
is also the place to
[open issues](https://github.com/carbon-design-system/ibm-products/issues/new/choose)
if you have a problem or find a defect or would like to request a new feature or
change something.

If you have access to the IBM Slack workspaces, join
[our Slack channel](https://ibm-casdesign.slack.com/archives/C013ZTX0N6B) where
you can ask questions, report problems, and get help from the team and from
other users.

This project consists of a number of component library packages published on
npm:

| Package name                                                                                                     | Description                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| [`@carbon/ibm-products`](./packages/ibm-products)                                                                | A curated set of components and patterns, built on top of Carbon and designed by the Carbon for IBM Products team |
| [`@carbon/ibm-cloud-cognitive-cdai`](https://github.com/carbon-design-system/ibm-products/tree/v1/packages/cdai) | (**v1 only**) Legacy and non-curated design implementations used in application integration                       |
| [`@carbon/ibm-security`](https://github.com/carbon-design-system/ibm-products/tree/v1/packages/security)         | (**v1 only**) Legacy and non-curated design implementations used in security                                      |

Also the following additional utility packages are published on npm:

| Package name                                                             | Description                                       |
| ------------------------------------------------------------------------ | ------------------------------------------------- |
| [`@carbon/storybook-addon-theme`](./config/storybook-addon-carbon-theme) | A storybook addon enabling Carbon theme switching |

The remaining packages are part of our project infrastructure and are not
published on npm.

### Version support

Carbon 11 support is introduced in Carbon for IBM Products
<https://github.com/carbon-design-system/ibm-products/labels/v2>

| Package name           | Carbon package      | React version |
| ---------------------- | ------------------- | ------------- |
| `@carbon/ibm-products` | **`@carbon/react`** | 18, 17, 16    |

The following packages support Carbon 10 and are considered
<https://github.com/carbon-design-system/ibm-products/labels/v1> packages.

| Package name                                                                                     | Carbon package                                                                                                                                                   | React version |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `@carbon/ibm-products`<br/> `@carbon/ibm-cloud-cognitive-cdai`<br/> `@carbon/ibm-security` <br/> | **`carbon-components-react`**<br/> `carbon-components`<br/> `@carbon/icons-react`<br/> `@carbon/icons` <br/> `@carbon/colors` <br/> `@carbon/elements` <br/> etc | 17, 16        |

If you’d like to learn more about migrating from Carbon 10 to Carbon 11, please
see the Carbon
[v11 migration guide](https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md)
(which includes codemods via
[`@carbon/upgrade`](https://github.com/carbon-design-system/carbon/blob/main/packages/upgrade/README.md))
and the Carbon for IBM Products
[v2 migration guide](https://github.com/carbon-design-system/ibm-products/blob/main/docs/guides/v2.md).

## 🙌 Contributing

This project is made possible by several community members who have invested
their precious time to give back to the Carbon community. It will continue to be
possible by having those that benefit from the package contribute back to it.

So, do not be shy. We both depend on and appreciate contributors, new and old,
who help us fix bugs, build new features, improve our documentation, etc.

This repository is a monorepo and contains multiple packages so be sure to check
the relevant package for any package-specific guidance.

- [@carbon/ibm-products](https://github.com/carbon-design-system/ibm-products/blob/master/.github/CONTRIBUTING.md)
- [@carbon/ibm-cloud-cognitive-cdai](./packages/cdai)
- [@carbon/ibm-security](./packages/security)

Read also our
[Contributing Guide](https://github.com/carbon-design-system/ibm-products/blob/master/.github/CONTRIBUTING.md)
and
[Carbon’s Developer Handbook](https://github.com/carbon-design-system/carbon/blob/master/docs/developer-handbook.md)!
👀

## Contributors ✨

Thanks goes to these wonderful people
([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="20%"><a href="http://simonfinney.dev"><img src="https://avatars2.githubusercontent.com/u/3846874?v=4?s=100" width="100px;" alt="Simon Finney"/><br /><sub><b>Simon Finney</b></sub></a><br /><a href="https://github.com/carbon-design-system/ibm-products/commits?author=SimonFinney" title="Code">💻</a></td>
      <td align="center" valign="top" width="20%"><a href="https://github.com/lee-chase"><img src="https://avatars0.githubusercontent.com/u/15086604?v=4?s=100" width="100px;" alt="Lee Chase"/><br /><sub><b>Lee Chase</b></sub></a><br /><a href="https://github.com/carbon-design-system/ibm-products/commits?author=lee-chase" title="Code">💻</a> <a href="#example-lee-chase" title="Examples">💡</a> <a href="https://github.com/carbon-design-system/ibm-products/pulls?q=is%3Apr+reviewed-by%3Alee-chase" title="Reviewed Pull Requests">👀</a> <a href="#infra-lee-chase" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
      <td align="center" valign="top" width="20%"><a href="https://github.com/moores2"><img src="https://avatars2.githubusercontent.com/u/6977424?v=4?s=100" width="100px;" alt="Simon Moore"/><br /><sub><b>Simon Moore</b></sub></a><br /><a href="https://github.com/carbon-design-system/ibm-products/commits?author=moores2" title="Code">💻</a></td>
      <td align="center" valign="top" width="20%"><a href="https://github.com/joshblack"><img src="https://avatars1.githubusercontent.com/u/3901764?v=4?s=100" width="100px;" alt="Josh Black"/><br /><sub><b>Josh Black</b></sub></a><br /><a href="https://github.com/carbon-design-system/ibm-products/commits?author=joshblack" title="Code">💻</a></td>
      <td align="center" valign="top" width="20%"><a href="http://davidmenendez.net"><img src="https://avatars1.githubusercontent.com/u/6370760?v=4?s=100" width="100px;" alt="David Menendez"/><br /><sub><b>David Menendez</b></sub></a><br /><a href="https://github.com/carbon-design-system/ibm-products/commits?author=davidmenendez" title="Code">💻</a> <a href="https://github.com/carbon-design-system/ibm-products/pulls?q=is%3Apr+reviewed-by%3Adavidmenendez" title="Reviewed Pull Requests">👀</a> <a href="#a11y-davidmenendez" title="Accessibility">️️️️♿️</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="20%"><a href="https://github.com/vladbalanescu"><img src="https://avatars2.githubusercontent.com/u/16047402?v=4?s=100" width="100px;" alt="vladbalanescu"/><br /><sub><b>vladbalanescu</b></sub></a><br /><a href="https://github.com/carbon-design-system/ibm-products/commits?author=vladbalanescu" title="Code">💻</a></td>
      <td align="center" valign="top" width="20%"><a href="http://www.matthewdgallo.com"><img src="https://avatars0.githubusercontent.com/u/10215203?v=4?s=100" width="100px;" alt="Matthew Gallo"/><br /><sub><b>Matthew Gallo</b></sub></a><br /><a href="https://github.com/carbon-design-system/ibm-products/commits?author=matthewgallo" title="Code">💻</a> <a href="#infra-matthewgallo" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/carbon-design-system/ibm-products/pulls?q=is%3Apr+reviewed-by%3Amatthewgallo" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="20%"><a href="https://github.com/asfordmatt"><img src="https://avatars2.githubusercontent.com/u/14233261?v=4?s=100" width="100px;" alt="Matt Chapman"/><br /><sub><b>Matt Chapman</b></sub></a><br /><a href="https://github.com/carbon-design-system/ibm-products/commits?author=asfordmatt" title="Code">💻</a></td>
      <td align="center" valign="top" width="20%"><a href="https://github.com/dbrugger"><img src="https://avatars1.githubusercontent.com/u/10086178?v=4?s=100" width="100px;" alt="Dominik Brugger"/><br /><sub><b>Dominik Brugger</b></sub></a><br /><a href="https://github.com/carbon-design-system/ibm-products/commits?author=dbrugger" title="Code">💻</a></td>
      <td align="center" valign="top" width="20%"><a href="https://github.com/polinaouk"><img src="https://avatars2.githubusercontent.com/u/24444328?v=4?s=100" width="100px;" alt="Polina Olemskaia"/><br /><sub><b>Polina Olemskaia</b></sub></a><br /><a href="https://github.com/carbon-design-system/ibm-products/commits?author=polinaouk" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="20%"><a href="http://alexandermelo.com"><img src="https://avatars.githubusercontent.com/u/12755042?v=4?s=100" width="100px;" alt="Alexander Melo"/><br /><sub><b>Alexander Melo</b></sub></a><br /><a href="https://github.com/carbon-design-system/ibm-products/commits?author=AlexanderMelox" title="Code">💻</a></td>
      <td align="center" valign="top" width="20%"><a href="https://github.com/Ratheeshrajan"><img src="https://avatars.githubusercontent.com/u/305492?v=4?s=100" width="100px;" alt="Ratheesh Rajan"/><br /><sub><b>Ratheesh Rajan</b></sub></a><br /><a href="https://github.com/carbon-design-system/ibm-products/commits?author=Ratheeshrajan" title="Code">💻</a> <a href="https://github.com/carbon-design-system/ibm-products/pulls?q=is%3Apr+reviewed-by%3ARatheeshrajan" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="20%"><a href="https://janhassel.de"><img src="https://avatars.githubusercontent.com/u/28265588?v=4?s=100" width="100px;" alt="Jan Hassel"/><br /><sub><b>Jan Hassel</b></sub></a><br /><a href="https://github.com/carbon-design-system/ibm-products/commits?author=janhassel" title="Code">💻</a> <a href="#a11y-janhassel" title="Accessibility">️️️️♿️</a></td>
      <td align="center" valign="top" width="20%"><a href="https://github.com/marion-bruells"><img src="https://avatars.githubusercontent.com/u/51152537?v=4?s=100" width="100px;" alt="marion-bruells"/><br /><sub><b>marion-bruells</b></sub></a><br /><a href="#design-marion-bruells" title="Design">🎨</a></td>
      <td align="center" valign="top" width="20%"><a href="https://www.hellojagath.com"><img src="https://avatars.githubusercontent.com/u/29351394?v=4?s=100" width="100px;" alt="Jagath Jayakumar"/><br /><sub><b>Jagath Jayakumar</b></sub></a><br /><a href="https://github.com/carbon-design-system/ibm-products/commits?author=jagathgj" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="20%"><a href="https://github.com/Laura-Marshall"><img src="https://avatars.githubusercontent.com/u/53219208?v=4?s=100" width="100px;" alt="Laura Marshall"/><br /><sub><b>Laura Marshall</b></sub></a><br /><a href="#design-Laura-Marshall" title="Design">🎨</a></td>
      <td align="center" valign="top" width="20%"><a href="https://github.com/glapadre"><img src="https://avatars.githubusercontent.com/u/25260547?v=4?s=100" width="100px;" alt="Drew Glapa"/><br /><sub><b>Drew Glapa</b></sub></a><br /><a href="https://github.com/carbon-design-system/ibm-products/commits?author=glapadre" title="Code">💻</a></td>
      <td align="center" valign="top" width="20%"><a href="https://linkedin.com/in/mslilypeng/"><img src="https://avatars.githubusercontent.com/u/3118961?v=4?s=100" width="100px;" alt="Lily"/><br /><sub><b>Lily</b></sub></a><br /><a href="https://github.com/carbon-design-system/ibm-products/commits?author=lily-peng" title="Code">💻</a></td>
      <td align="center" valign="top" width="20%"><a href="https://github.com/mgallo25"><img src="https://avatars.githubusercontent.com/u/23409382?v=4?s=100" width="100px;" alt="Marienella Gallo"/><br /><sub><b>Marienella Gallo</b></sub></a><br /><a href="https://github.com/carbon-design-system/ibm-products/commits?author=mgallo25" title="Code">💻</a></td>
      <td align="center" valign="top" width="20%"><a href="https://github.com/sdignum"><img src="https://avatars.githubusercontent.com/u/10590403?v=4?s=100" width="100px;" alt="Shelley Dignum"/><br /><sub><b>Shelley Dignum</b></sub></a><br /><a href="#design-sdignum" title="Design">🎨</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="20%"><a href="https://github.com/thefirstartist"><img src="https://avatars.githubusercontent.com/u/40870771?v=4?s=100" width="100px;" alt="Sam Ting"/><br /><sub><b>Sam Ting</b></sub></a><br /><a href="#a11y-thefirstartist" title="Accessibility">️️️️♿️</a> <a href="#design-thefirstartist" title="Design">🎨</a></td>
      <td align="center" valign="top" width="20%"><a href="https://github.com/paul-balchin-ibm"><img src="https://avatars.githubusercontent.com/u/52505287?v=4?s=100" width="100px;" alt="Paul Balchin"/><br /><sub><b>Paul Balchin</b></sub></a><br /><a href="https://github.com/carbon-design-system/ibm-products/commits?author=paul-balchin-ibm" title="Code">💻</a></td>
      <td align="center" valign="top" width="20%"><a href="https://github.com/jlongshore"><img src="https://avatars.githubusercontent.com/u/25206522?v=4?s=100" width="100px;" alt="Jeff Longshore"/><br /><sub><b>Jeff Longshore</b></sub></a><br /><a href="https://github.com/carbon-design-system/ibm-products/commits?author=jlongshore" title="Code">💻</a></td>
      <td align="center" valign="top" width="20%"><a href="https://github.com/kristastarr"><img src="https://avatars.githubusercontent.com/u/21047571?v=4?s=100" width="100px;" alt="Krista Starr"/><br /><sub><b>Krista Starr</b></sub></a><br /><a href="#a11y-kristastarr" title="Accessibility">️️️️♿️</a> <a href="https://github.com/carbon-design-system/ibm-products/commits?author=kristastarr" title="Code">💻</a></td>
      <td align="center" valign="top" width="20%"><a href="http://mikeolasov.com"><img src="https://avatars.githubusercontent.com/u/27870459?v=4?s=100" width="100px;" alt="Mike Olasov"/><br /><sub><b>Mike Olasov</b></sub></a><br /><a href="#design-mikeolasov" title="Design">🎨</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="20%"><a href="https://github.com/punnoosewilson"><img src="https://avatars.githubusercontent.com/u/40118548?v=4?s=100" width="100px;" alt="PUNNOOSE WILSON"/><br /><sub><b>PUNNOOSE WILSON</b></sub></a><br /><a href="https://github.com/carbon-design-system/ibm-products/commits?author=punnoosewilson" title="Code">💻</a></td>
      <td align="center" valign="top" width="20%"><a href="https://github.com/SeonyuK"><img src="https://avatars.githubusercontent.com/u/144151347?v=4?s=100" width="100px;" alt="SeonyuK"/><br /><sub><b>SeonyuK</b></sub></a><br /><a href="#a11y-SeonyuK" title="Accessibility">️️️️♿️</a> <a href="https://github.com/carbon-design-system/ibm-products/commits?author=SeonyuK" title="Code">💻</a></td>
      <td align="center" valign="top" width="20%"><a href="https://github.com/elycheea"><img src="https://avatars.githubusercontent.com/u/1717398?v=4?s=100" width="100px;" alt="Elysia"/><br /><sub><b>Elysia</b></sub></a><br /><a href="https://github.com/carbon-design-system/ibm-products/commits?author=elycheea" title="Code">💻</a> <a href="#infra-elycheea" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/carbon-design-system/ibm-products/pulls?q=is%3Apr+reviewed-by%3Aelycheea" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="20%"><a href="http://iamafsal.in/"><img src="https://avatars.githubusercontent.com/u/9197089?v=4?s=100" width="100px;" alt="Afsal K"/><br /><sub><b>Afsal K</b></sub></a><br /><a href="https://github.com/carbon-design-system/ibm-products/commits?author=makafsal" title="Code">💻</a></td>
      <td align="center" valign="top" width="20%"><a href="https://github.com/devadula-nandan"><img src="https://avatars.githubusercontent.com/u/47176249?v=4?s=100" width="100px;" alt="Nandan Devadula"/><br /><sub><b>Nandan Devadula</b></sub></a><br /><a href="https://github.com/carbon-design-system/ibm-products/commits?author=devadula-nandan" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="20%"><a href="https://github.com/anamikaanu96"><img src="https://avatars.githubusercontent.com/u/47971732?v=4?s=100" width="100px;" alt="Anamika T S"/><br /><sub><b>Anamika T S</b></sub></a><br /><a href="https://github.com/carbon-design-system/ibm-products/commits?author=anamikaanu96" title="Code">💻</a></td>
      <td align="center" valign="top" width="20%"><a href="https://github.com/szinta"><img src="https://avatars.githubusercontent.com/u/53395955?v=4?s=100" width="100px;" alt="Sinta Augustine"/><br /><sub><b>Sinta Augustine</b></sub></a><br /><a href="https://github.com/carbon-design-system/ibm-products/commits?author=szinta" title="Code">💻</a></td>
      <td align="center" valign="top" width="20%"><a href="https://github.com/AustinGitHub"><img src="https://avatars.githubusercontent.com/u/10100397?v=4?s=100" width="100px;" alt="Austin"/><br /><sub><b>Austin</b></sub></a><br /><a href="https://github.com/carbon-design-system/ibm-products/commits?author=AustinGitHub" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the
[all-contributors](https://github.com/kentcdodds/all-contributors)
specification. Contributions of any kind welcome!

## 📝 License

Licensed under the
[Apache-2.0 License](https://github.com/carbon-design-system/ibm-products/blob/master/LICENSE).

[![This site is powered by Netlify](https://www.netlify.com/img/global/badges/netlify-color-accent.svg)](https://www.netlify.com)
