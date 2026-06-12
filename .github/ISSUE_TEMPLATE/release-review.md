---
name: (C4IBM Products team only) Component Status Promotion Review
about: Review process for promoting components between PDLC status levels
---

## Component Status Promotion Review

**Component Name:** [Component Name]  
**Current Status:** [Draft / Preview Candidate / Preview]  
**Target Status:** [Preview Candidate / Preview / Stable]  
**PDLC Phase:** [Discovery / Delivery / Launch & Scale]

---

## Status Promotion Path

Components follow this progression:

```
Draft → Preview Candidate → Preview → Stable
```

Select the appropriate checklist below based on your promotion target.

---

## 📋 Promoting to Preview Candidate (Discovery Phase)

Use this checklist when promoting from **Draft** to **Preview Candidate**.

### Readiness

- [ ] Basic functionality implemented
- [ ] Initial design review completed
- [ ] Measurable results identified and documented
- [ ] Stakeholders identified
- [ ] Clear business value defined
- [ ] Component ready for broader validation

### Next Steps

- [ ] Announce in `#carbon-for-ibmproducts` Slack channel
- [ ] Gather feedback from stakeholders
- [ ] Plan for composability review

---

## 📋 Promoting to Preview (Delivery Phase)

Use this checklist when promoting from **Preview Candidate** to **Preview**.

### Readiness

- [ ] Composability review (design and dev) completed
- [ ] API is mostly stable
- [ ] Core features complete
- [ ] Documentation drafted
- [ ] Feedback from stakeholders incorporated
- [ ] Ready for production use

### Testing

- [ ] Test coverage ≥ 80%
- [ ] Tests exercise all inputs (props, slots, etc)
- [ ] Tests validate behaviors and interactions
- [ ] No warnings, errors, or log messages in test output
- [ ] Run: `yarn test:c4p /ComponentName/ --coverage`

### Documentation

- [ ] Source code satisfactorily commented with DocGen comments
- [ ] Story for each design scenario
- [ ] Usage documentation and code samples available
- [ ] Props table complete
- [ ] Examples on CodeSandbox and Stackblitz

### Next Steps

- [ ] Announce promotion in `#carbon-for-ibmproducts` Slack channel
- [ ] Begin accessibility review
- [ ] Begin design review for stable promotion

## 📋 Promoting to Stable (Launch & Scale Phase)

Use this checklist when promoting from **Preview** to **Stable**.

### Readiness

- [ ] One or more scenarios for a design pattern have been identified as a
      useful unit of functionality
- [ ] Component has completed
      [accessibility review](https://github.com/carbon-design-system/ibm-products/blob/main/.github/ISSUE_TEMPLATE/accessibilty-review.md)
- [ ] One or more design maintainers have approved via
      [design review](https://github.com/carbon-design-system/ibm-products/blob/main/.github/ISSUE_TEMPLATE/design-review.md)
- [ ] API is finalized (no breaking changes without major version)
- [ ] No critical bugs
- [ ] Documentation complete across code, kit, and design

### Engineering Review

#### API & Implementation

- [ ] Breaking changes have only been introduced with prior approval and are
      documented
- [ ] Implementation accounts for remaining and anticipated design scenarios
- [ ] Public component features are consistent with Carbon conventions
- [ ] The UI produced is:
  - [ ] Responsive
  - [ ] Translatable[^1]
  - [ ] Cross-browser compatible
  - [ ] Responds to currently set Carbon theme
- [ ] Components are functional components using hooks
- [ ] Public components support `className`
- [ ] Public components support a ref (via `React.forwardRef`)
- [ ] Public component supports Devtools attribute
- [ ] All significant DOM elements have meaningful classes[^2] with
      package/Carbon prefix
- [ ] Additional attributes passed through to appropriate DOM node
- [ ] No warnings, errors or log messages in console

#### Code Standards

- [ ] No linter warnings or errors
- [ ] Carbon tokens (theme, layout, motion) used unless design specifies
      otherwise
- [ ] Components with motion include reduced-motion queries
- [ ] Code formatted according to prettier rules
- [ ] Code is clear, maintainable, follows React best practices
- [ ] Copyright header in every source file with appropriate years

### Testing

- [ ] Test coverage ≥ 90% (required for stable)
- [ ] Tests exercise all inputs and verify outputs
- [ ] Tests validate behaviors and interactions
- [ ] Usage of `istanbul ignore` is appropriate and minimal
- [ ] No warnings, errors, or log messages in test output
- [ ] Run: `yarn test:c4p /ComponentName/ --coverage`
- [ ] Verify coverage: `yarn coverage:report`

### Snapshots & Build

- [ ] Test snapshots regenerated: `yarn test:c4p:snapshot -u`
- [ ] Public CSS snapshot updated and committed
- [ ] Type definitions rebuilt: `yarn build:types`

### Documentation

- [ ] Complete documentation across code, kit, and design
- [ ] All props documented with DocGen comments
- [ ] Stories for all design scenarios
- [ ] Usage examples and code samples complete
- [ ] Migration guide created (if API changed from Preview)
- [ ] Examples on CodeSandbox and Stackblitz updated

### Announcement

- [ ] Post in `#carbon-for-ibmproducts` Slack channel with:
  - Component overview
  - Key features
  - Import example
  - Link to documentation
  - Test coverage percentage

---

## Additional Notes

### Status codemods

A codemods is available to help consumers update their imports when components
change status:

```bash
npx @carbon/upgrade migrate ibm-products-update-pdlc-status --write
```

**What it does:**

- Automatically adds PDLC status prefixes to non-stable component imports
- Preserves local variable names using aliases
- Handles both new imports and already-prefixed imports

**Example transformation:**

```javascript
// Before
import { Tearsheet, InlineTip, SearchBar } from '@carbon/ibm-products';

// After
import {
  Tearsheet,
  previewCandidate__InlineTip as InlineTip,
  previewCandidate__SearchBar as SearchBar,
} from '@carbon/ibm-products';
```

**Note:** Run without `--write` flag first to preview changes before applying
them.

**Manual updates still required:**

- Component implementation (export name changes)
- Documentation
- Storybook configuration
- SCSS imports (for stable promotion)
- Changelog entries
- Test snapshots

### Coverage Requirements

- **Preview Candidate:** Approaching 80%
- **Preview:** ≥ 80%
- **Stable:** ≥ 90%

### Related Documentation

- [Component Status Definitions](https://github.com/carbon-design-system/ibm-products/blob/main/docs/guides/COMPONENT_STATUS_DEFINITIONS.md)
- [Release Review Guidelines](https://github.com/carbon-design-system/ibm-products/blob/main/docs/reviews/RELEASE_REVIEW_GUIDELINES.md)
- [Maintainer Guidelines](https://github.com/carbon-design-system/ibm-products/blob/main/docs/MAINTAINER_GUIDELINES.md)

---

[^1]: Any labels, text, or other strings within a component should use a prop.

[^2]:
    See Carbon's
    [Developer Handbook](https://github.com/carbon-design-system/carbon/blob/main/.github/CONTRIBUTING.md)
    for guidance on
    [class names](https://github.com/carbon-design-system/carbon/blob/main/docs/developer-handbook.md#class-names).
