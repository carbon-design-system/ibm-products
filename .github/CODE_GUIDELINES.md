# Coding standards and conventions

The following guidelines reflect our common and desired practice for developing
components. They are intended to be supportive rather than restrictive, and need
to stay up-to-date, so do raise a question if anything needs changing or is
unclear.

## Organisation and files

- Each component, or group of closely related components, is in its own
  directory which will normally contain the following files:
  - _ComponentName_.js &mdash; the main component and any related components.
    Additional JS files may be used as needed for complex sets of components.
  - index.js &mdash; exports all public components and entry points for users,
    often with something like
    `export { ComponentName } from './ComponentName';`.
  - _ComponentName_.test.js &mdash; the Jest test cases for the component.
  - _ComponentName_.stories.js &mdash; the Storybook stories for the component.
  - \__component-name_.scss &mdash; the SCSS styles used by the component.
  - \_index.scss &mdash; imports all the public SCSS for users, often with
    something like `@import './component-name.scss';`.
  - \_storybook.scss &mdash; SCSS used by the Storybook stories, which usually
    includes the component public SCSS and may have additional styles used by
    the stories.

## Component JavaScript code

- Components are built using React, and are functional components using hooks.
- Each source file should include some or all of the following:
  - Standard copyright header of the form:
    ```js
    /**
     * Copyright IBM Corp. 2020, 2020
     *
     * This source code is licensed under the Apache-2.0 license found in the
     * LICENSE file in the root directory of this source tree.
     */
    ```
    where the two years are the year of first release and the year of latest
    significant update.
  - Import portions of React that are needed:
    ```js
    import React from 'react';
    ```
  - Other standard imports:
    ```js
    import PropTypes from 'prop-types';
    import cx from 'classnames';
    import { pkg } from '../../settings';
    ```
  - Imports of any Carbon-React components or components from elsewhere in this
    package that the component is dependent on.
  - The following standard definitions, which will be used elsewhere in the
    code:
    ```js
    const blockClass = `${pkg.prefix}--component-name`;
    const componentName = 'ComponentName';
    ```
  - Note that a component does not need to import its own SCSS: that is rolled
    up separately.
- Each public component definition should include the following:

  - The following opening logic, which means that unreleased components can be
    enabled by feature flag mechanism:

    ```js
    export const ComponentName = !pkg.isComponentEnabled(componentName)
      ? // Return canary if not released or flag not set
        () => <Canary component={componentName} />
      : // Main component code...
        ({
          className,
          prop1,
          prop2,

          propN,
          ...rest
        }) => {
    ```

  - `rest` should be included on the main DOM element to enable HTML attributes
    to be passed through.
  - The classnames helper (imported as `cx`) should be used on the main DOM
    element to combine needed classes and the block class with the `className`
    prop:
    ```js
    <html-element class={cx(
      blockClass,
      // other classes we might need to attach
      [className]: className  // this handles className omitted/falsy
    )} ...
    ```
  - All significant DOM objects in the returned component markup should have
    classes set on them to enable users to attach styling. The `blockClass`
    constant can help with keeping these consistent:
    ```js
    <html-element class={`${pkg.prefix}__title`} ...
    ```
    Class names should follow the Carbon BEM pattern which is
    ```
    <prefix>--<component-name>__<element>--<modifier>
    ```
    (and of course there may not always be an element and/or modifier).
  - The exported object should also have set on it:
    - `.displayName = componentName;`
    - `.propTypes = {};` using the PropTypes to specify property types, shapes,
      and required properties, and including DocGen comments to describe the
      properties for a user.
    - `.defaultProps = {};` providing default values for properties that need
      them. Required props do NOT need default values. Any property that is not
      required but which the component needs to make an assumed value for should
      be given a suitable default. Properties that can be left unset do NOT need
      default values if the component simply tests for and copes with the value
      being `undefined`.

- Ensure all code is neatly formatted (use `yarn format` and/or a prettier
  plugin for an editor to follow the prettier rules set up in the project), and
  that code is clear, maintainable and follows standard React practices and the
  [code guidelines](https://github.com/carbon-design-system/ibm-cloud-cognitive/blob/master/.github/CONTRIBUTING.md).

## Component SCSS code

- Each source file should include the following:
  - Standard copyright header of the form:
    ```scss
    //
    // Copyright IBM Corp. FULL_YEAR, FULL_YEAR
    //
    // This source code is licensed under the Apache-2.0 license found in the
    // LICENSE file in the root directory of this source tree.
    //
    ```
    where the two years are the year of first release and the year of latest
    significant update.
  - Standard imports:
    ```scss
    @import '@carbon/import-once/scss/import-once';
    @import '../../global/styles/project-settings';
    ```
- Do not use nesting of SCSS.
- Style directives should use Carbon tokens (theme, layout, motion) are used
  unless the design specifies otherwise.\

## Test cases

- There should be a set of test cases for all components.
- Tests are run using `yarn test` for the full test set, and can be filtered to
  a single component using `yarn test ComponentName`.
- The tests should exercise all inputs (props, slots, etc) and verify outputs.
- The tests should validate as many of the behaviours and actions as is
  practical.
- The tests should aim to achieve 100% coverage (use
  `yarn test ComponentName --coverage`). Specific pieces of code that cannot
  practically be reached can be marked with `istanbul ignore` tags, but these
  should be used sparingly and where appropriate.
- Test cases should not emit warnings, errors or log messages. If the test needs
  to include something that causes a console log, use the appropriate Jest
  mechanisms for catching this.

## Stories

- There should be a set of stories to cover the design scenarios. The stories
  should expose all relevant props and actions.
- Additional usage documentation and code samples should be made available on
  the 'Docs' tab along with the props table.
