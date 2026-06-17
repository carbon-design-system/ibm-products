# Component Status Definitions

## Overview

Carbon for IBM Products uses a Product Development Lifecycle (PDLC) status
system to communicate component maturity. By aligning on the requirements for
what it means for an asset to be done, we can create a backlog of work to be
prioritized, better differentiate when an asset is a component versus a pattern,
share expectations with contributors, and display the status of assets to users.

With each phase, the component should progress in its completeness. Once it has
reached stable, then the asset will be considered done.

## PDLC Status Progression

```
Draft → Preview Candidate → Preview → Stable
```

## Status Levels

| Status                | PDLC Phase       | Description                                                                         |
| --------------------- | ---------------- | ----------------------------------------------------------------------------------- |
| **Draft**             | Discovery        | Partially complete, ready for validation                                            |
| **Preview Candidate** | Discovery        | Partially complete, with measurable results, stakeholders, and clear business value |
| **Preview**           | Delivery         | Mostly complete, changes possible based on feedback, available to use in production |
| **Stable**            | Launch and Scale | Complete across code, kit, docs, design, and ready for production use               |

---

### Draft (Not Exported)

**PDLC Phase:** Discovery  
**Export:** Not publicly exported  
**Location:** `@carbon/labs` or internal development  
**Prefix:** None (not accessible)

**Definition:** Partially complete, ready for validation. Component is in active
development with API subject to significant changes.

**Characteristics:**

- ❌ Not exported in package index
- ❌ No public API
- ❌ Incomplete features
- ❌ Limited or no test coverage
- ❌ Minimal documentation
- ✅ Ready for initial validation

**When to use:**

- Initial component development
- Proof of concept work
- Internal experimentation
- Early validation phase

**Exit criteria to Preview Candidate:**

- Basic functionality implemented
- Initial design review completed
- Measurable results identified
- Stakeholders identified
- Clear business value defined
- Ready for broader validation

---

### Preview Candidate

**PDLC Phase:** Discovery  
**Export:** `previewCandidate__ComponentName`  
**Location:** `@carbon/ibm-products`, `@carbon/ibm-products-web-components`  
**Prefix:** `previewCandidate__`

**Definition:** Partially complete, with measurable results, stakeholders, and
clear business value. Component is being validated with real use cases and
feedback.

**Characteristics:**

- ✅ Exported with `previewCandidate__` prefix
- ✅ Measurable results defined
- ✅ Stakeholders identified
- ✅ Clear business value
- ⚠️ API may still change based on validation
- ⚠️ Test coverage approaching 80%
- ⚠️ Basic documentation available
- ⚠️ Composability review in progress

**When to use:**

- Validating component with real use cases
- Gathering feedback from stakeholders
- Prototyping with defined business value
- Non-production or controlled production environments

**Import example:**

```typescript
import { previewCandidate__Toolbar } from '@carbon/ibm-products';

function MyApp() {
  return <previewCandidate__Toolbar>...</previewCandidate__Toolbar>;
}
```

**Exit criteria to Preview:**

- Composability review (design and dev) completed
- API is mostly stable
- Test coverage ≥ 80%
- Core features complete
- Documentation drafted
- Feedback incorporated
- Ready for production use with changes possible

**Important notes:**

- ⚠️ **Not a permanent bucket** - Components should progress to Preview or be
  deprecated
- ⚠️ Long-term, preview candidates should typically belong in `@carbon/labs`
- ⚠️ `@carbon/ibm-products` should primarily contain Preview and Stable
  components

---

### Preview

**PDLC Phase:** Delivery  
**Export:** `preview__ComponentName`  
**Location:** `@carbon/ibm-products`, `@carbon/ibm-products-web-components`  
**Prefix:** `preview__`

**Definition:** Mostly complete, changes possible based on feedback, available
to use in production. Component has passed composability review and is
production-ready with the understanding that API refinements may occur.

**Characteristics:**

- ✅ Exported with `preview__` prefix
- ✅ Composability review passed (design and dev)
- ✅ API is mostly stable (minor changes possible)
- ✅ Test coverage ≥ 80%
- ✅ Good documentation
- ✅ Production-ready
- ⚠️ API changes possible based on feedback
- ⚠️ Final reviews in progress

**When to use:**

- Production applications
- When you need the functionality and can tolerate minor API changes
- When you're willing to provide feedback
- When the component meets your production requirements

**Import example:**

```typescript
import { preview__PageHeader } from '@carbon/ibm-products';

function MyApp() {
  return <preview__PageHeader title="My App" />;
}
```

**Exit criteria to Stable:**

- Release review completed
- Test coverage ≥ 90%
- Accessibility review passed
- Design review approved
- Documentation complete across code, kit, and docs
- No critical bugs
- API finalized
- Ready for launch and scale

---

### Stable (No Prefix)

**PDLC Phase:** Launch and Scale  
**Export:** `ComponentName`  
**Location:** `@carbon/ibm-products`, `@carbon/ibm-products-web-components`  
**Prefix:** None

**Definition:** Complete across code, kit, docs, design, and ready for
production use. API is stable with no breaking changes without major version
bump.

**Characteristics:**

- ✅ Exported without prefix
- ✅ API is stable
- ✅ Test coverage ≥ 90%
- ✅ Complete documentation (code, kit, design)
- ✅ Accessibility compliant
- ✅ Design approved
- ✅ Production-ready for launch and scale
- ✅ No breaking changes without major version

**When to use:**

- All production applications
- When you need API stability guarantees
- When you require full support and documentation
- When scaling across multiple products

**Import example:**

```typescript
import { PageHeader } from '@carbon/ibm-products';

function MyApp() {
  return <PageHeader title="My App" />;
}
```

**Maintenance:**

- ✅ Bug fixes allowed
- ✅ Non-breaking enhancements allowed
- ❌ Breaking changes require major version bump
- ✅ Deprecation warnings for planned removals

---

## Component Lifecycle Flow

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                        Component Lifecycle                                     │
│                                                                                │
│          Discovery Phase                   Delivery Phase    Launch & Scale    │
└────────────────────────────────────────────────────────────────────────────────┘

    Draft              Preview Candidate         Preview            Stable
(Not Exported)      (previewCandidate__)      (preview__)       (No prefix)
      │                      │                     │                 │
      │  Basic               │  Composability      │  Release        │
      │  Functionality       │  Review             │  Review         │
      │  Measurable          │  80% Tests          │  90% Tests      │
      │  Results             │  API Stable         │  Complete       │
      │  Stakeholders        │                     │  Docs           │
      ▼                      ▼                     ▼                 ▼
   [Draft] ──────────> [Preview] ──────────> [Preview] ──────> [Stable]
                       [Candidate]
                           │                     │
                           │                     │
                           │   Not meeting       │
                           │   requirements      │
                           │                     │
                           ▼                     ▼
                      [Deprecated] ◄──────── [Deprecated]
```

### Progression Paths

**Forward Path (Normal):**

1. **Draft → Preview Candidate:** Basic functionality + measurable results +
   stakeholders
2. **Preview Candidate → Preview:** Composability review + 80% tests + stable
   API
3. **Preview → Stable:** Release review + 90% tests + complete documentation

**Alternative Paths:**

- **Preview Candidate → Deprecated:** Component doesn't meet requirements or no
  longer needed
- **Preview → Deprecated:** Component not viable for stable release

---

## Status Comparison Matrix

| Aspect                   | Draft          | Preview Candidate    | Preview          | Stable                |
| ------------------------ | -------------- | -------------------- | ---------------- | --------------------- |
| **PDLC Phase**           | Discovery      | Discovery            | Delivery         | Launch & Scale        |
| **Exported**             | ❌ No          | ✅ Yes               | ✅ Yes           | ✅ Yes                |
| **Prefix**               | N/A            | `previewCandidate__` | `preview__`      | None                  |
| **Completeness**         | Partial        | Partial              | Mostly Complete  | Complete              |
| **API Stability**        | ❌ Unstable    | ⚠️ May change        | ⚠️ Mostly stable | ✅ Stable             |
| **Test Coverage**        | ❌ Minimal     | ⚠️ ~80%              | ✅ ≥80%          | ✅ ≥90%               |
| **Documentation**        | ❌ Minimal     | ⚠️ Basic             | ✅ Good          | ✅ Complete           |
| **Composability Review** | ❌ No          | ⚠️ In progress       | ✅ Required      | ✅ Yes                |
| **Accessibility Review** | ❌ No          | ❌ No                | ⚠️ In progress   | ✅ Yes                |
| **Design Review**        | ❌ No          | ⚠️ Initial           | ⚠️ In progress   | ✅ Yes                |
| **Production Use**       | ❌ No          | ⚠️ Controlled        | ✅ Yes           | ✅ Yes                |
| **Breaking Changes**     | ✅ Anytime     | ⚠️ Possible          | ⚠️ Minor only    | ❌ Major version only |
| **Business Value**       | ⚠️ Exploring   | ✅ Defined           | ✅ Validated     | ✅ Proven             |
| **Stakeholders**         | ⚠️ Identifying | ✅ Identified        | ✅ Engaged       | ✅ Satisfied          |

---

## Importing Components by Status

### Stable Components

```typescript
// No prefix needed
import { PageHeader, SidePanel, Tearsheet } from '@carbon/ibm-products';
```

### Preview Components

```typescript
// Use preview__ prefix
import { preview__PageHeader, preview__Coachmark } from '@carbon/ibm-products';
```

### Preview Candidate Components

```typescript
// Use previewCandidate__ prefix
import {
  previewCandidate__Toolbar,
  previewCandidate__SearchBar,
} from '@carbon/ibm-products';
```

### Aliasing for Cleaner Code

```typescript
// Alias to remove prefix in your code
import {
  preview__PageHeader as PageHeader
} from '@carbon/ibm-products';

// Now use without prefix
<PageHeader title="My App" />
```

---

## FAQ

### Q: What's the difference between Preview Candidate and Preview?

**A:** 
- **Preview Candidate (Discovery):** Partially complete, gathering validation
  and feedback. API may still change significantly.
- **Preview (Delivery):** Mostly complete, passed composability review,
  production-ready. Only minor API changes expected.

### Q: How long should a component stay in Preview Candidate?

**A:** Preview Candidate is part of the Discovery phase. Components should move
to Preview once they pass composability review and meet the 80% test coverage
requirement. If a component remains in Preview Candidate for extended periods,
evaluate whether it should be:

- Promoted to Preview (if ready)
- Moved to `@carbon/labs` (if still experimental)
- Deprecated (if not viable)

### Q: Can I use Preview components in production?

**A:** Yes! Preview components are in the Delivery phase and are available for
production use. However, minor API changes are possible based on feedback, so be
prepared to update your code.

### Q: Can I use Preview Candidate components in production?

**A:** Preview Candidate components can be used in controlled production
environments for validation, but they're still in the Discovery phase. Use with
caution and be prepared for potential API changes.

### Q: Why are some components exported with prefixes?

**A:** The prefix makes the component's PDLC status visible in your code,
helping you make informed decisions about which components to use and what level
of API stability to expect.

### Q: Can a Stable component become Preview again?

**A:** No. Once a component reaches Stable (Launch and Scale phase), it
maintains API stability. Breaking changes require a major version bump and
follow a deprecation path, not a status downgrade.

### Q: What does "composability review" mean?

**A:** Composability review (both design and development) ensures the component
works well with other components in the system, follows design patterns, and
provides a consistent API. This review is required to move from Preview
Candidate to Preview.

---

## For Contributors: Exporting Components

When adding or promoting components in
`packages/ibm-products/src/components/index.ts`:

### Preview Candidate Export

```typescript
export {
  ComponentName as previewCandidate__ComponentName,
  type ComponentNameProps,
} from './ComponentName';
```

### Preview Export

```typescript
export {
  ComponentName as preview__ComponentName,
  type ComponentNameProps,
} from './ComponentName';
```

### Stable Export

```typescript
export { ComponentName, type ComponentNameProps } from './ComponentName';
```

---

## Storybook Organization

Components are organized in Storybook by status:

```
Carbon for IBM Products/
├── Components/
│   ├── Stable/
│   │   ├── PageHeader
│   │   ├── SidePanel
│   │   └── Tearsheet
│   ├── Preview Candidate/
│   │   ├── BigNumber
│   │   ├── Toolbar
│   │   └── SearchBar
│   └── Preview/
│       ├── Coachmark
│       └── TruncatedText
```

---

## Benefits of PDLC Status System

1. **Clear Communication**: Component status is immediately visible in imports
2. **No Configuration**: No feature flags to set up or manage
3. **Type Safety**: TypeScript validates exports at compile time
4. **Better Developer Experience**: IDE autocomplete shows components with their
   status
5. **Explicit Intent**: Code clearly shows which experimental features are in
   use
6. **Smaller Bundle**: No runtime feature flag checking overhead
7. **Easier Promotion**: Simple export name changes to promote components
   Candidate to Preview.

---

**Last Updated:** 2026-06-10  
**Maintained by:** Carbon for IBM Products Team
