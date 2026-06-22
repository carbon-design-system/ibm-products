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
