---
name: New component or pattern 💡
about: Create a new component or pattern
---

# Name of component or pattern

## Brief description

Add a brief description.

## Details

[Link to Design]() [Link to example or existing component]()

### Links to other materials

e.g. sketch files, icons, images, prototypes

## Design Maintainer(s)

- Owner/main maintainer(s)
- Second/backup maintainer(s)

## Tasks

- [ ] Initial review of design/existing code

### Working in experimental package

- [ ] Create a shell component which
  - [ ] Create ComponentName/ComponentName.js component file that renders props
        in raw form (no styling or sub components, plain text OK)
  - [ ] Adds prop-types with comments for DocGen to
        ComponentName/ComponentName.js
  - [ ] Add Doc file e.g. ComponentName.mdx with a brief description of the
        component.
- [ ] First engineering review/playback

### Continuing in experimental package

- [ ] Storybook - stories to cover design scenarios, story with long, min and
      max content, story to demonstrate right-to-left support, etc.
- [ ] Doc tab in storybook derived from design docs with embedded stories where
      appropriate
- [ ] Code to include prop-types with comments for automated DocGen
      documentation
- [ ] Tests (written in React Test Library) to cover behavior from the
      documented in the components mdx file.

### New production dependencies

- [ ] Verify the dependency has previously been
      [pedigree reviewed](https://pedigree-service.wdc1a.cirrus.ibm.com)
- [ ] Verify the dependency
      [doesn't contain any vulnerabilities](https://snyk.io/vuln)
- [ ] Verify the dependency [bundle size](https://bundlephobia.com) is
      acceptable
- [ ] Verify the dependency is [actively maintained](https://www.npmtrends.com)

### Review and promote

-
- [ ] Design review
- [ ] Add design review issues addressed, issues raised or discounted.
- [ ] Engineering review - Submit PR to promote component to production package
- [ ] All engineering issues addressed, issues raised or discounted.
