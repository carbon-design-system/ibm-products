---
title: Changes to non-stable components in v2.75.0
date: 2025-09
tags:
  - label: Breaking Change
    type: red
order: 2
---

# Important Update: Changes to non-stable components (Canary mechanism deprecated)

**Date:** v2.75.0 Release  
**Impact:** High  
**Category:** Breaking Change

## Summary

We're streamlining our component development process to better align with our
product development lifecycle. As a result, **we're removing the canary
mechanism** starting with v2.75.0 release.

## 🔵 What Does This Mean for You?

### Before (Old Approach)

- Non-stable components required enabling via canary approach
- Example: `pkg.component.ComponentName = true`

### After (New Approach)

- **No more canary enabling required**
- Non-stable components will now be exported with their corresponding PDLC
  status prefixed to the component name
- Example: Import `ComponentNamePreview` instead of `ComponentName`

## 🔵 Take Action

To make the transition as smooth as possible, we've created a **status renaming
codemods**. Follow these steps:

### Step 1: Preview Changes

Run the following command to preview the changes before applying them:

```bash
npx @carbon/upgrade migrate rename-ibm-products-imports-to-preview
```

### Step 2: Review

Review the changes to ensure they meet your needs and understand what will be
updated.

### Step 3: Apply Changes

Once you're satisfied, re-run the command with the `--write` flag to apply the
changes:

```bash
npx @carbon/upgrade migrate rename-ibm-products-imports-to-preview --write
```

## Example Migration

**Before:**

```jsx
import { pkg } from '@carbon/ibm-products';
import { MyComponent } from '@carbon/ibm-products';

// Enable canary component
pkg.component.MyComponent = true;

function App() {
  return <MyComponent />;
}
```

**After:**

```jsx
import { MyComponentPreview } from '@carbon/ibm-products';

function App() {
  return <MyComponentPreview />;
}
```

## Benefits

- **Clearer Component Status:** Component names now explicitly indicate their
  stability level
- **Simplified Setup:** No need to enable components via feature flags
- **Better Alignment:** Matches our product development lifecycle (PDLC)
- **Easier Maintenance:** Reduces configuration complexity

## Affected Components

All non-stable components that previously required canary enablement are
affected. Check your imports and update them using the codemods tool.

## Timeline

- **v2.75.0:** Canary mechanism removed
- **Recommended Action:** Run the codemods as soon as possible to ensure
  compatibility

## Need Help?

- [codemods Documentation](https://github.com/carbon-design-system/ibm-products/tree/main/packages/upgrade)
- [Migration Guide](https://github.com/carbon-design-system/ibm-products/blob/main/docs/guides/CANARY_STRUCTURE.md)
- [GitHub Discussions](https://github.com/carbon-design-system/ibm-products/discussions)

If you encounter any issues during migration, please open a GitHub issue or
discussion.
