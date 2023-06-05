# Canary explained

In case you were thinking what, why or how with regards to the Canary lines in
the components...

They were added to enable component feature flags, that is, the enabling of
components through user settings.

This allowed the removal of the term/package `experimental` and permitted the
publication of all components in a single package. Those that have not yet
completed the [release review](../reviews/RELEASE_REVIEW_GUIDELINES.md) process
are considered to be `canary` and require the consumer to enable via a feature
flag.

See example component enabled via feature flags on
[CodeSandbox](https://codesandbox.io/s/example-component-canary-olif5).

## When to use

Only components that are to be used directly by our package consumers, those in
`src/components/index.js`, need to have the Canary structure.

## By the way

As part of these changes, the following also happened.

- `pkgPrefix` is gone — instead now import `pkg` and use `pkg.prefix`.
- `getStoryId` was added to `../../global/js/utils/story-helper.js` to make
  building the story slug simpler in `.mdx` files.
- `getStoryTitle` was added to `../../global/js/utils/story-helper.js` to make
  building your story path simpler in story files.

## Canary structure

The following changes were made to each component to create component feature
flags.

### Component file (Component.js)

This:

```js
import { pkg } from '../../settings';
const componentName = 'ExampleComponent';
const blockClass = `${pkg.prefix}--example-component`;

export const ExampleComponent = ({ props }) => {
  // ...
};
```

Becomes:

```js
import { pkg } from '../../settings';
const componentName = 'ExampleComponent';
const blockClass = `${pkg.prefix}--example-component`;

export let ExampleComponent = ({ props }) => {
  // ...
};

// Return a placeholder if not released and not enabled by feature flag
ExampleComponents = pkg.checkComponentEnabled(ExampleComponents, componentName);

ExampleComponents.displayName = componentName; // displayName is used in preference to function.name by React
```

- Using `let` on the export to enable the export to be replaced later.
- Using the `pkg.checkComponentEnabled` test, which replaces disabled components
  with a Canary placeholder.
- Ensuring we specify a displayName for the component.

### Tests and stories

For tests and stories, all components are enabled regardless of whether they are
canary or not. There is nothing further a component needs to do unless a
different status is required for testing (which only currently happens for some
full-package export tests).

### Exporting components

A component is included in the public API by adding it to the index file
(`src/components/index.js`).

```js
export { ExampleComponent } from './ExampleComponent';
```

### Feature flags

An entry is required for each published component in `defaults.component` in the
feature flags file (`src/global/js/package-settings.js`). A published component
will have the value `true`, a canary component `false`.

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
