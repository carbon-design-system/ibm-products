# Migration Guide: From Canary Feature Flags to PDLC Export Naming

## Overview

The Carbon for IBM Products package is transitioning from a feature flag-based
system for experimental components to a PDLC (Product Development Lifecycle)
export naming convention. This guide will help you migrate your code.

## What's Changing?

### Before (Deprecated)

Components required enabling via feature flags:

```js
import { pkg, ExampleComponent } from '@carbon/ibm-products';

// Enable component before first use
pkg.component.ExampleComponent = true;

function MyApp() {
  return <ExampleComponent />;
}
```

### After (Current)

Components are exported with their stability status in the name:

```js
import { previewCandidate__ExampleComponent } from '@carbon/ibm-products';

function MyApp() {
  return <previewCandidate__ExampleComponent />;
}
```

## Understanding PDLC Export Naming

Components are now exported with prefixes that indicate their stability:

| Export Name                       | Status                | Description                                   |
| --------------------------------- | --------------------- | --------------------------------------------- |
| `ComponentName`                   | **Stable**            | Production-ready, fully reviewed and released |
| `previewCandidate__ComponentName` | **Preview Candidate** | Feature complete, undergoing final review     |
| `preview__ComponentName`          | **Preview**           | Early access, API may change                  |
| Not exported                      | **Draft**             | Internal development, not available publicly  |

## Migration Steps

### Step 1: Identify Components Using Feature Flags

Search your codebase for:

- `pkg.component.` assignments
- `pkg.setAllComponents()` calls
- Components imported from `@carbon/ibm-products` that were previously flagged

### Step 2: Find the New Export Name

Check the current exports in `@carbon/ibm-products`:

```js
// Stable components (no prefix)
import { AboutModal, PageHeader, SidePanel } from '@carbon/ibm-products';

// Preview candidates (previewCandidate__ prefix)
import {
  previewCandidate__BigNumber,
  previewCandidate__Toolbar,
  previewCandidate__SearchBar,
} from '@carbon/ibm-products';

// Preview components (preview__ prefix)
import {
  preview__Coachmark,
  preview__TruncatedText,
} from '@carbon/ibm-products';
```

### Step 3: Update Your Imports

#### Example 1: Single Component

**Before:**

```js
import { pkg, Toolbar } from '@carbon/ibm-products';

pkg.component.Toolbar = true;

function MyToolbar() {
  return <Toolbar>...</Toolbar>;
}
```

**After:**

```js
import { previewCandidate__Toolbar } from '@carbon/ibm-products';

function MyToolbar() {
  return <previewCandidate__Toolbar>...</previewCandidate__Toolbar>;
}
```

#### Example 2: Multiple Components

**Before:**

```js
import { pkg, BigNumber, SearchBar, Toolbar } from '@carbon/ibm-products';

pkg.component.BigNumber = true;
pkg.component.SearchBar = true;
pkg.component.Toolbar = true;
```

**After:**

```js
import {
  previewCandidate__BigNumber,
  previewCandidate__SearchBar,
  previewCandidate__Toolbar,
} from '@carbon/ibm-products';
```

#### Example 3: Using setAllComponents

**Before:**

```js
import { pkg } from '@carbon/ibm-products';

// Enable all components
pkg.setAllComponents(true);
```

**After:**

```js
// Import only the components you need with their PDLC prefix
import {
  previewCandidate__BigNumber,
  previewCandidate__Toolbar,
  preview__Coachmark,
} from '@carbon/ibm-products';

// Stable components don't need a prefix
import { PageHeader, SidePanel } from '@carbon/ibm-products';
```

### Step 4: Update Component Usage

If you aliased components to remove the prefix, update your JSX:

**Option A: Use the prefixed name directly**

```js
import { previewCandidate__Toolbar } from '@carbon/ibm-products';

function MyApp() {
  return <previewCandidate__Toolbar>...</previewCandidate__Toolbar>;
}
```

**Option B: Alias the import**

```js
import { previewCandidate__Toolbar as Toolbar } from '@carbon/ibm-products';

function MyApp() {
  return <Toolbar>...</Toolbar>;
}
```

### Step 5: Remove Feature Flag Configuration

Remove all feature flag setup code:

```js
// DELETE these lines:
import { pkg } from '@carbon/ibm-products';
pkg.component.ComponentName = true;
pkg.setAllComponents(true);
```

## Component Status Reference

Here's a mapping of commonly used components and their current status:

### Stable Components (No Prefix)

- `AboutModal`
- `APIKeyModal`
- `CreateModal`
- `CreateFullPage`
- `CreateSidePanel`
- `CreateTearsheet`
- `Datagrid`
- `EditInPlace`
- `EmptyState`
- `ExportModal`
- `ImportModal`
- `NotificationsPanel`
- `PageHeader`
- `RemoveModal`
- `SidePanel`
- `StatusIcon`
- `TagSet`
- `Tearsheet`
- `UserAvatar`
- `WebTerminal`

### Preview Candidates (previewCandidate\_\_ prefix)

- `previewCandidate__BigNumber`
- `previewCandidate__Coachmark`
- `previewCandidate__ConditionBuilder`
- `previewCandidate__DataSpreadsheet`
- `previewCandidate__DelimitedList`
- `previewCandidate__Decorator`
- `previewCandidate__GetStartedCard`
- `previewCandidate__Guidebanner`
- `previewCandidate__InlineTip`
- `previewCandidate__NonLinearReading`
- `previewCandidate__SearchBar`
- `previewCandidate__Toolbar`
- `previewCandidate__TruncatedList`

### Preview Components (preview\_\_ prefix)

- `preview__Coachmark` (next version)
- `preview__TruncatedText`
- `preview__FeatureFlags`
- `preview__PageHeader` (next version)
- `preview__Tearsheet` (next version)

## TypeScript Support

The new export naming works seamlessly with TypeScript:

```typescript
import {
  previewCandidate__Toolbar,
  type ToolbarProps
} from '@carbon/ibm-products';

const MyToolbar: React.FC<ToolbarProps> = (props) => {
  return <previewCandidate__Toolbar {...props} />;
};
```

## Automated Migration Tool

A codemods is available to help automate the import updates:

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
import { Toolbar, SearchBar, InlineTip } from '@carbon/ibm-products';

// After
import {
  previewCandidate__Toolbar as Toolbar,
  previewCandidate__SearchBar as SearchBar,
  previewCandidate__InlineTip as InlineTip,
} from '@carbon/ibm-products';
```

**Important notes:**

- Run without `--write` flag first to preview changes
- This codemods only updates imports; you must manually remove feature flag code
  (`pkg.component.*` statements)
- Always review the changes before committing
- The codemods uses the mapping in
  `tasks/upgrade/transforms/nonStableMapping.js`

## Testing Your Migration

1. **Remove all feature flag code** from your configuration files
2. **Run the codemods** to update imports automatically (or update manually)
3. **Run your tests** to ensure everything works
4. **Check for console warnings** about deprecated APIs
5. **Verify in browser** that components render correctly

## Common Issues and Solutions

### Issue: Component not found after migration

**Problem:**

```js
import { Toolbar } from '@carbon/ibm-products';
// Error: Module '"@carbon/ibm-products"' has no exported member 'Toolbar'
```

**Solution:** The component is now exported with a PDLC prefix:

```js
import { previewCandidate__Toolbar } from '@carbon/ibm-products';
```

### Issue: Too many prefixes in JSX

**Problem:**

```jsx
<previewCandidate__Toolbar>
  <previewCandidate__ToolbarButton />
  <previewCandidate__ToolbarGroup />
</previewCandidate__Toolbar>
```

**Solution:** Use import aliases for cleaner JSX:

```js
import {
  previewCandidate__Toolbar as Toolbar,
  previewCandidate__ToolbarButton as ToolbarButton,
  previewCandidate__ToolbarGroup as ToolbarGroup,
} from '@carbon/ibm-products';

// Now use without prefix:
<Toolbar>
  <ToolbarButton />
  <ToolbarGroup />
</Toolbar>;
```

### Issue: Feature flags still in test setup

**Problem:**

```js
beforeAll(() => {
  pkg.setAllComponents(true);
});
```

**Solution:** Remove the feature flag setup and import components with their
PDLC prefix:

```js
import { previewCandidate__Toolbar } from '@carbon/ibm-products';

// No beforeAll needed
```

## Benefits of the New Approach

1. **No Configuration Required**: Import and use components directly
2. **Clear Stability Indication**: Component status is visible in the import
3. **Better IDE Support**: Autocomplete shows available components with their
   status
4. **Type Safety**: TypeScript can validate exports at compile time
5. **Smaller Bundle**: No runtime feature flag checking
6. **Explicit Intent**: Your code clearly shows which experimental features
   you're using

## Timeline

- **Current Release**: Canary mechanism deprecated, migration guide available
- **Next Release**: Canary mechanism removed
- **Support**: Migration assistance available through GitHub issues

## Need Help?

- **Documentation**:
  [Component Status Definitions](./COMPONENT_STATUS_DEFINITIONS.md)
- **Issues**:
  [GitHub Issues](https://github.com/carbon-design-system/ibm-products/issues)
- **Slack**: `#ibmproducts-pal-dev` channel

## Feedback

We welcome feedback on this migration! Please open an issue if you encounter
problems or have suggestions for improving this guide.
