---
name: Release review 🐦
about: Review process before release of a new component or pattern from Canary
---

## Review for release

### Readiness

- [ ] One or more scenarios for a design pattern have been identified as a
      useful unit of functionality to publish.
- [ ] A functioning component or components delivering those scenarios have been
      delivered and merged to `main`.
- [ ] The component or components have completed an
      [accessibility review](https://github.com/carbon-design-system/ibm-products/blob/main/.github/ISSUE_TEMPLATE/accessibilty-review.md).
- [ ] One or more design maintainers have approved the implementation for those
      scenarios, preferably via
      [design review](https://github.com/carbon-design-system/ibm-products/blob/main/.github/ISSUE_TEMPLATE/design-review.md).

### Engineering review

- [ ] Breaking changes have only been introduced with prior approval, discussion
      and are documented in release notes. Deprecation notices and/or feature
      flags are included in the prior major version.
- [ ] The implementation takes into account, and does not impair, remaining and
      anticipated design scenarios.
- [ ] Public component features (names, props, etc) are consistent with
      Carbon-defined conventions and are consistent internally. Where there
      isn’t an existing convention to apply, ensure robust precedents are being
      established.
- [ ] The UI produced is
  - [ ] responsive,
  - [ ] translatable[^1],
  - [ ] cross-browser,
  - [ ] and responds to the currently set Carbon theme.
- [ ] Components are functional components using hooks.
- [ ] Public components which produce DOM structures support `className`.
- [ ] Public components support a ref (via `React.forwardRef`).
- [ ] Public component supports a Devtools attribute
- [ ] All significant DOM elements have meaningful classes[^2] and include the
      package or Carbon prefix (no hardcoded prefixes).
- [ ] Additional attributes that are not identified as props (such as `title`,
      `aria-*`, etc) are passed through to an appropriate DOM node of the
      component as HTML attributes.
- [ ] No warnings, errors or log messages in the console.
- [ ] Each public component JS is exported in `/src/components/index.js`, each
      public component SCSS is included in `/src/components/_index.scss`, and
      each public component has a flag in `package-settings.js`.
- [ ] Each public component SCSS lists all of the Carbon and IBM Products
      components imported and used by the JavaScript code and explicitly imports
      the SCSS for each of these components.

### Standards

- [ ] No linter warnings or errors are produced.
- [ ] Carbon tokens (theme, layout, motion) are used unless the design specifies
      otherwise.
- [ ] All components utilizing motion must include reduced-motion queries for
      accessibility purposes.
- [ ] Code is formatted according to prettier rules (no use of
      `//prettier-ignore`).
- [ ] Code is clear, maintainable and follows standard React practices and the
      code guidelines.
- [ ] Copyright header in every source file (js, css, scss etc.) with the
      appropriate years.

### Testing

- [ ] There is a set of test cases for the components.
- [ ] The tests exercise all inputs (props, slots, etc) and verify appropriate
      outputs.
- [ ] The tests validate the behaviors and interactions defined in the design
      where practical.
- [ ] The tests achieve at least 80% coverage. Usage of `istanbul ignore` is
      appropriate and not extensive.
- [ ] No warnings, errors, or log messages in the test output.

### Documentation

- [ ] Source code is satisfactorily commented and provides DocGen comments for
      all public components and their props.
- [ ] There is a story for each design scenario. The stories expose all relevant
      props and actions, and additional usage documentation and code samples are
      available on the Docs story along with the props table.
- [ ] There is an example (or multiple sandboxes if appropriate) on CodeSandbox
      and Stackblitz for the components.

[^1]: Any labels, text, or other strings within a component should use a prop.
[^2]:
    See Carbon’s
    [Developer Handbook](https://github.com/carbon-design-system/carbon/blob/main/.github/CONTRIBUTING.md)
    for guidance on
    [class names](https://github.com/carbon-design-system/carbon/blob/main/docs/developer-handbook.md#class-names).
