# Canary Explained

In case you were thinking what, why or how with regards to the Canary lines in
the components...

They were added to enable component feature flags, that is the enabling of
components through user settings.

This will allow the removal of the term/package `experimental` and permit the
publication of all components in a single package. Those that have not yet
completed the release review process will be considered to be `canary` and
require the consumer to enable via a feature flag.

See example component enabled via feature flags on
[codesandbox](https://codesandbox.io/s/example-component-canary-olif5).

## When to use

Only components that are to be used directly by our package consumers, those in
`src/components/index.js`, need to have the Canary structure

## By the way

As part of these changes the following also happened.

- `pkgPrefix` is gone instead now import `pkg` and use `pkg.prefix`.
- `getStorybookSlug` was added to `../../../config.js` to make building the
  story slug simpler in `.mdx` files.
- `getStorybookPrefix` was added to `../../../config.js` to make building your
  story path simpler in story files.

## Canary structure

The following changes were made to each component to create component feature
flags.

### Component file (Component.js)

This:

```js
import { pkg } from '../../settings';
const componentName = 'ExampleComponent';
const blockClass = `${pkg.prefix}-example-component`;

export const ExampleComponent = ({ props }) => {
  // ...
};
```

Becomes:

```js
import { Canary } from '../_Canary'; // Canary needs importing
import { pkg } from '../../settings';
const componentName = 'ExampleComponent';
const blockClass = `${pkg.prefix}-example-component`;

export const ExampleComponent = !pkg.isComponentEnabled(componentName)
  ? // Return canary if not released or flag not set
    () => <Canary component={componentName} />
  : // Main component code...
    ({ props }) => {
      // ...
    };

ExampleComponents.displayName = componentName; // displayName is used in preference to function.name by React
```

- Adding the import of `Canary`.
- Placing the `pkg.isComponentEnabled` test and ternary before the main
  component code.
- Ensuring we specify a displayName for the component.

### The test file (Component.test.js)

In order to test a component it will need to be enabled, regardless of whether
it is canary or not. To do so you must import `../../enable-all` prior to
importing any Cloud and Cognitive component.

E.g.

```js
import { pkg } from '../../settings';
import '../../enable-all'; // must come before component is imported (directly or indirectly)
import { ExampleComponent } from '.';
```

### The story file (Component.stories.js)

In order to view a component in a story it needs to be enabled, regardless of
whether it is canary or not. To do so you must import `../../enable-all` prior
to importing any Cloud and Cognitive component.

```js
import { pkg } from '../../settings';
import '../../enable-all'; // must come before component is imported (directly or indirectly)
import { ExampleComponent } from '.';
```

### The index file (src/components/index.js)

A component is included in the public API by adding it here.

```js
export { ExampleComponent } from './ExampleComponent';
```

### The feature flags file (src/global/js/package-settings.js)

An entry is required for each published component in `defaults.component`. A
published component will have the value true, a canary component false.

```js
const defaults = {
  // ...
  // by default only released components are set to true
  component: {
    // ...
    ExampleComponent: false,
    // ...
  },

  // feature level flags
  feature: {
    // ...
    'a-new-feature': false,
    // ...
  },
};
```
