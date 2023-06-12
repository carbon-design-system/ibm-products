# Storybook addon for Carbon themes

This addon for storybook allows you to change the theme used with Carbon
Components!

## Supports

- React
- Vue

No reason to suspect others are not supported, but have not been tested. If you
use with another framework then please post an update to the README.md.

## Install

```sh
npm install --save-dev @carbon/storybook-addon-theme
yarn instsall --dev @carbon/storybook-addon-theme
```

## Requirements

- Use of Carbon Components
- Use of Custom CSS Properties feature flag

## 🙌 Contributing

We are always looking for contributors to help us fix bugs, build new features,
or help us improve the project documentation. If you're interested, definitely
check out our
[Contributing Guide](https://github.com/carbon-design-system/ibm-products/blob/master/.github/CONTRIBUTING.md)
and
[Carbon's Developer Handbook](https://github.com/carbon-design-system/carbon/blob/master/docs/developer-handbook.md)!
👀

## Usage

`.storybook/main.js`:

```js
module.exports = {
  // other addons...
  addons: ['@carbon/storybook-addon-theme/preset.js'],
};
```

### Global Decorator

`.storybook/preview.js`:

```js
import { withCarbonTheme } from '@carbon/storybook-addon-theme/withCarbonTheme';
import {
  PARAM_KEY as CARBON_THEME_PARAM_KEY,
  CARBON_THEMES,
} from '@carbon/storybook-addon-theme/constants';

const decorators = [
  /// other decorators...
  withCarbonTheme,
];

const globals = {
  // other globals...
  // default value of the theme selector
  [CARBON_THEME_PARAM_KEY]: CARBON_THEMES.g10,
};

export { decorators, globals };
```

## SCSS

`.storybook/index.scss`

### Carbon 11

```scss
@use '@carbon/styles' as styles;
@use '@carbon/styles/scss/theme' as *;

[storybook-carbon-theme] {
  @include styles.theme(styles.$white);

  /* make sure background and color are set if theme in use */
  background-color: $background;
  color: $text-primary;
}

[storybook-carbon-theme='g10'],
.sb--use-carbon-theme-g10 {
  @include styles.theme(styles.$g10);
}

[storybook-carbon-theme='g90'],
.sb--use-carbon-theme-g90 {
  @include styles.theme(styles.$g90);
}

[storybook-carbon-theme='g100'],
.sb--use-carbon-theme-g100 {
  @include styles.theme(styles.$g100);
}
```

### Carbon 10

```SCSS
// Must happen before styles are loaded
$feature-flags: (
  ui-shell: true,
  grid-columns-16: true,
  enable-css-custom-properties: true
);

@import "carbon-components/scss/globals/scss/styles";
@import "@carbon/themes/scss/themes";

[storybook-carbon-theme] {
  background: $ui-background;
  color: $ui-01;

  @include carbon--theme(
    $theme: $carbon--theme--white,
    $emit-custom-properties: true
  );
}

[storybook-carbon-theme="g10"] {
  @include carbon--theme(
    $theme: $carbon--theme--g10,
    $emit-custom-properties: true
  );
}

[storybook-carbon-theme="g90"] {
  z-index: 90;
  @include carbon--theme(
    $theme: $carbon--theme--g90,
    $emit-custom-properties: true
  );
}

[storybook-carbon-theme="g100"] {
  @include carbon--theme(
    $theme: $carbon--theme--g100,
    $emit-custom-properties: true
  );
}
```
