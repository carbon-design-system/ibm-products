# Coding standards and conventions

The following guidelines reflect our common and desired practice for developing
components. They are intended to be supportive rather than restrictive, and need
to stay up-to-date, so do raise a question if anything needs changing or is
unclear.

## Organization and files

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
  - \_storybook-styles.scss &mdash; SCSS used by the Storybook stories, which
    may have additional styles used by the stories. Note that this file does NOT
    need to import any of the component styles, as these are rolled up
    separately.
  - _ComponentName_.mdx &mdash; a Storybook docs page for the component.
- Each component which is to be publicly available (for use by users of the
  package) also needs the following:
  - The JS must be exported in /src/components/index.js, with something like
    `export { ComponentName } from './DirectoryName';`.
  - The SCSS must be include in /src/components/\_index.scss, with something
    like `@import './DirectoryName/index';`. When the component has been
    reviewed for release, it should also be included in
    /src/components/\_index-released-only.scss in the same way.
  - Each public component must also be identified in
    /src/globals/js/package-settings.js with a boolean flag in the `component`
    section, of the form `ComponentName: false,`. The flag should be true when
    the component has been reviewed for release, and false otherwise.
  - If a component is not intended for public use, and is only an internal
    helper within the package, it should NOT be exported from the index.js,
    should NOT be included in \_index.scss, and should NOT have a flag in the
    package-settings.js. Instead, the JS should be imported, and the SCSS
    included, wherever the component is needed internally.

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
  - One or more component definitions will then follow. Related components can
    be put into separate source files for clarity unless they are very simple.
- Each public component definition should include the following:

  - The following opening logic, using `forwardRef` to pass a supplied ref to an
    appropriate node, destructuring the props in alphabetical order (for
    consistency), and using a `let` to enable the use of `checkComponentEnabled`
    (see below).
    ```js
    export let ComponentName = forwardRef(({
      className,
      prop1,
      prop2,
      ...
      ...rest
    }, ref) => {
    ```
  - `{...rest}` should be included on the main DOM element to enable HTML
    attributes to be passed through. It should appear _first_, so that it cannot
    override HTML attributes that the component itself sets and requires. If any
    of the HTML attributes should be overridable by client code, it should be
    made into a prop so the value(s) can be handled and merged as needed.
  - The `classnames` helper (imported as `cx`) should be used on the main DOM
    element to combine needed classes and the block class with the `className`
    prop:
    ```js
    <html-element class={cx(
      blockClass, {
      // other classes we might need to attach
      [className]: className  // this handles className omitted/falsy
    })} ...
    ```
  - `ref={ref}` should be included on a suitable DOM element (often the main DOM
    element) to enable a supplied ref to be passed to an appropriate node.
  - All significant DOM objects in the returned component markup should have
    classes set on them to enable users to attach styling. The `blockClass`
    constant can help with keeping these consistent:
    ```js
    <html-element className={`${blockClass}__some-element`} ...
    ```
    Class names should follow the Carbon BEM pattern which is
    ```
    <prefix>--<component-name>__<element>--<modifier>
    ```
    (and of course there may not always be an element and/or modifier, and there
    may be more than one). The `blockClass` class should always be applied to
    the root node, along with any variants with modifiers that might apply, and
    each `${blockClass}__element` class should always be applied to each
    significant element, along with any variants with modifiers that might
    apply.
  - The exported object should be passed through `checkComponentEnabled`, which
    enables non-released components to be enable through a feature flag
    mechanism:
    ```js
    // Return a placeholder if not released and not enabled by feature flag
    ComponentName = pkg.checkComponentEnabled(ComponentName, componentName);
    ```
  - The exported object should also have set on it:
    - `.displayName = componentName;`
    - `.propTypes = {};` using the PropTypes to specify property types, shapes,
      and required properties, and including DocGen comments to describe the
      properties for a user.

- Ensure all code is neatly formatted (use `yarn format` and/or a prettier
  plugin for an editor to follow the prettier rules set up in the project), and
  that code is clear, maintainable and follows standard React practices and the
  [contributing guidelines](https://github.com/carbon-design-system/ibm-products/blob/master/.github/CONTRIBUTING.md).

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
    @import '../../global/styles/carbon-settings';
    @import '../../global/styles/project-settings';
    ```
  - Imports of styles for any Carbon components or settings or components from
    elsewhere in this package that the component is dependent on.
  - The following mixin, which should then contain all the style definitions.
    This is in order to enable the Carbon import-once mechanism.

    ```scss
    // Define all component styles in a mixin which is then exported using
    // the Carbon import-once mechanism.
    @mixin component-name {
      $block-class: #{$pkg-prefix}--component-name;

      // styles here
    }

    @include exports('component-name') {
      @include component-name;
    }
    ```

- Do not use nesting of SCSS.
- Style directives should use Carbon tokens (theme, layout, motion) are used
  unless the design specifies otherwise.
- Begin all selectors with the block class. This helps with specificity, and
  also helps prevent style 'leakage' to other parts of the page they were not
  intended to apply to.
- Ensure all selectors have sufficient specificity to override Carbon styles
  whether Carbon is loaded before _or after_ the component styles. To test this
  using Storybook, add a line to `_storybook-styles.scss` for the component,
  loading Carbon after all other styles, and verify that the styles being
  applied in the stories are still as expected:
  ```scss
  //@import 'carbon-components/css/carbon-components.min';
  ```

## Test cases

- There should be a set of test cases for all components, contained in a file
  called _ComponentName_.test.js (additional test files may also be used
  providing they all have names that end with .test.js).
- Tests are run using `yarn test` for the full test set, and can be filtered to
  a single component using `yarn test ComponentName`.
- Use `describe` for test suites and `it` for individual tests, naming each test
  with a simple predicate (_e.g._ `it('renders a title', ()=>...);`).
- Use `screen` to explore the rendered content where possible, and use queries
  that rely on visible aspects (eg text, accessibility roles, labels, _etc_)
  where possible. Some tests will need to rely on non-visible aspects (_e.g._
  classes on elements), but only do this when necessary.
- Use `expect` to assert outcomes (_e.g._ `expect(...).not.toBeNull();`), but
  note that many of the `screen` queries already include useful assertions: for
  example, to check that there is a button labelled 'Press me' it suffices to
  use `screen.getByRole('button', { name: 'Press me' });`, and this does not
  need to be further enclosed in `expect(...).not.toBeNull();` which would be
  redundant.
- A useful approach is to prepare prop values including a random component, for
  example by using the `uuidv4()` utility function, which can then be reliably
  searched for in the rendered output.
- The tests should include all of the following:
  - A basic test that a component is rendered. Something like:
    ```jsx
    it('renders a component ComponentName', () => {
      render(<ComponentName />);
      expect(screen.getByRole('main')).toHaveClass(blockClass);
    });
    ```
  - Standard accessibility tests:
    ```jsx
    it('has no accessibility violations', async () => {
      const { container } = render(<ComponentName />);
      await expect(container).toBeAccessible(componentName);
      await expect(container).toHaveNoAxeViolations();
    });
    ```
  - A test that `className` is correctly handled. Something like:
    ```jsx
    const className = `class-${uuidv4()}`;
    it('applies className to the containing node', () => {
      render(<ComponentName className={className} />);
      expect(screen.getByRole('main')).toHaveClass(className);
    });
    ```
  - A test for each input (props, slots, _etc_), verifying appropriate outputs.
  - A test to validate each the behaviors and actions as far as is practical.
  - A test that additional HTML attributes are passed through to an appropriate
    node. Something like:
    ```jsx
    const dataTestId = uuidv4();
    it('adds additional properties to the containing node', () => {
      render(<ComponentName data-testid={dataTestId} />);
      screen.getByTestId(dataTestId);
    });
    ```
  - A test that a supplied ref is forwarded to an appropriate node. Something
    like:
    ```jsx
    it('forwards a ref to an appropriate node', () => {
      const ref = React.createRef();
      render(<ComponentName ref={ref} />);
      expect(ref.current).toEqual(screen.getByRole('main'));
    });
    ```
- The tests should aim to achieve 100% coverage (use
  `yarn test:c4p ComponentName --coverage or yarn coverage ComponentName`). You
  can easily access the coverage report using `yarn coverage:report`. Specific
  pieces of code that cannot practically be reached can be marked with
  `istanbul ignore` tags, but these should be used sparingly and only where
  appropriate.
- Test cases should not emit warnings, errors or log messages. If the test needs
  to include something that causes a console log, use the appropriate Jest
  mechanisms for catching this.

## Stories

- There should be a set of stories to cover the design scenarios. Note that
  there does not necessarily need to be a separate story for each scenario,
  providing each scenario can be experienced using the stories provided.
- The stories should expose all relevant props in the controls panel. In
  particular:
  - Ensure that prop-types and DocGen comment appear in the component source
    files, in order to fully and usefully populate the storybook controls panel
    and the props table on the documentation page.
  - Props that can be directly edited (strings, numbers, colors, etc) should
    have appropriate controls, which may mean overriding the default control
    types where necessary.
  - Props that cannot be directly edited, such as props that take arrays or
    object structures or DOM fragments incorporating specific assets, should be
    given useful options, for example by using a 'select' control type with a
    selection of relevant choices (including 'none').
  - Some props may require some extra controls to be included in the story in
    order to illustrate them correctly, in which case they should be disabled in
    the controls panel so as not to make conflicting changes.
  - Props that cannot usefully be modified in the story context (for example,
    handlers) should be disabled in the controls panel.
- The stories should also expose all relevant actions and behaviors. This may
  require adding some extra controls to the stories, and coding some handlers
  and simple actions. Reproducing a full use case isn't necessary, especially
  where it becomes intricate or complicated.
- Additional usage documentation and code samples should be made available on
  the 'Docs' tab along with the props table.
