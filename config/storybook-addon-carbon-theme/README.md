# Storybook addon for Carbon themes

This addon for storybook allows you to change the theme used with Carbon
Components!

## Supports

- React
- Vue

## Install

```sh
npm install @carbon/storybook-addon-theme
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
  addons: ['@carbon/storybook-addon-theme/preset.js'],
};
```

### Global Decorator

`.storybook/preview.js`:

```js
import { withCarbonTheme } from '@carbon/storybook-addon-theme/withCarbonTheme';
import { PARAM_KEY as CARBON_THEME_PARAM_KEY, CARBON_THEMES } from '@carbon/storybook-addon-theme/constants';

const decorators [
  withCarbonTheme;
];

const globals = {
  [CARBON_THEME_PARAM_KEY]: CARBON_THEMES.g10,
};

export { decorators, globals }
```

## SCSS

`.storybook/index.scss`

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
