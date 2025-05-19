---
name: (C4IBM Products devs only) enhancement refinement template
about: Refinement template for new enhancements
---

# Acceptance criteria

User stories describing what this new component is meant to achieve.

## Base requirements

- [ ] Create initial component
- [ ] Include stories for component
- [ ] Add test coverage, reaching our baseline 80% coverage threshold (this may
      often be created as a sub-issue)

### Draft API requirements

`<component-name>`

- [ ] Draft tentative api specifications
- [ ] List any new props/attributes
- [ ] Component is built in TypeScript from the start
- [ ] Any composability considerations that may impact the new component's
      architecture

### Additional resources

- Links to design resources, Figma file/s
- Links to website guidance

### Composability checklist

- [ ] Does this component require sub-components or a compound component
      architecture? If so, have they been documented in the draft api
      requirements section?
- [ ] If parts of this component are rendered internally based on props, are
      there ways the adopter can optionally take responsibility for rendering?
