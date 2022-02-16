## Review for release

### Readiness

- [ ] One or more scenarios for a design pattern have been identified as a useful unit of functionality to publish.
- [ ] A functioning component or components delivering those scenarios have been delivered and merged to main.
- [ ] Design maintainer has approved the implementation for those scenarios (via a comment on the relevant issue/epic).

### Engineering review

- [ ] Breaking changes have only been introduced with prior approval, discussion and documented in release notes. Ideally deprecation notices in the prior major version must have been added in a timely fashion.
- [ ] The implementation takes into account, and does not impair, remaining and anticipated design scenarios.
- [ ] Public component features (names, props, etc) are consistent with Carbon-defined conventions and are consistent internally. Where there isn't an existing convention to apply, ensure robust precedents are being established.
- [ ] The UI produced is accessible, responsive, translatable, cross-browser, and responds to the currently set Carbon theme.
- [ ] Components are functional components using hooks.
- [ ] Public components which produce DOM structures support className.
- [ ] Public components support a ref (via React.forwardRef).
- [ ] Public component supports a Devtools attribute
- [ ] All significant DOM elements have meaningful classes.
- [ ] Additional attributes that are not identified as props (such as title, aria-*, etc) are passed through to an appropriate DOM node of the component as HTML attributes.
- [ ] No warnings, errors or log messages in the console.
- [ ] Each public component JS is exported in /src/components/index.js, each public component SCSS is included in /src/components/_index.scss, and each public component has a flag in package-settings.js.
- [ ] Each public component SCSS lists all of the Carbon and C&CS components imported and used by the JavaScript code and explicitly imports the SCSS for each of these components.

### Standards

- [ ] No linter warnings or errors are produced.
- [ ] Carbon tokens (theme, layout, motion) are used unless the design specifies otherwise.
- [ ] All components utilizing motion must include reduced-motion queries for accessibility purposes - read more here.
- [ ] Code is formatted according to prettier rules (no use of //prettier-ignore).
- [ ] Code is clear, maintainable and follows standard React practices and the code guidelines.
- [ ] Copyright header in every source file (js, css, scss etc.) with the appropriate years.

### Testing

- [ ] There is a set of test cases for the components.
- [ ] The tests exercise all inputs (props, slots, etc) and verify appropriate outputs.
- [ ] The tests validate the behaviors and interactions defined in the design where practical.
- [ ] The tests achieve 100% coverage. Usage of istanbul ignore is appropriate and not extensive.
- [ ] No warnings, errors or log messages in the test output.

### Documentation

- [ ] Source code is satisfactorily commented and provides DocGen comments for all public components and their props.
- [ ] There is a story for each design scenario. The stories expose all relevant props and actions, and additional usage documentation and code samples are available on the 'Docs' tab along with the props table.
- [ ] There is a sandbox (or multiple sandboxes if appropriate) on CodeSandbox for the components.

© 2022 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHu
