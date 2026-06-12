Migration Guide: From Canary Feature Flags to PDLC Export Naming Overview The
Carbon for IBM Products package is transitioning from a feature flag-based
system for experimental components to a PDLC (Product Development Lifecycle)
export naming convention. This guide will help you migrate your code.

What's Changing? Before (Deprecated) Components required enabling via feature
flags:

import { pkg, ExampleComponent } from '@carbon/ibm-products';

// Enable component before first use pkg.component.ExampleComponent = true;

function MyApp() { return <ExampleComponent />; } After (Current) Components are
exported with their stability status in the name:

import { previewCandidate\_\_ExampleComponent } from '@carbon/ibm-products';

function MyApp() { return <previewCandidate\_\_ExampleComponent />; }
Understanding PDLC Export Naming Components are now exported with prefixes that
indicate their stability:

Export Name Status Description Not exported Draft Internal development, not
available publicly previewCandidate**ComponentName Preview Candidate Feature
complete, undergoing final review preview**ComponentName Preview Early access,
API may change ComponentName Stable Production-ready, fully reviewed and
released Migration Steps Step 1: Identify Components Using Feature Flags Search
your codebase for:

pkg.component. assignments pkg.setAllComponents() calls Components imported from
@carbon/ibm-products that were previously flagged Step 2: Find the New Export
Name Check the current exports in @carbon/ibm-products:

// Stable components (no prefix) import { AboutModal, PageHeader, SidePanel }
from '@carbon/ibm-products';

// Preview candidates (previewCandidate** prefix) import {
previewCandidate**BigNumber, previewCandidate**Toolbar,
previewCandidate**SearchBar, } from '@carbon/ibm-products';

// Preview components (preview** prefix) import { preview**Coachmark,
preview\_\_TruncatedText, } from '@carbon/ibm-products'; Step 3: Update Your
Imports Example 1: Single Component Before:

import { pkg, Toolbar } from '@carbon/ibm-products';

pkg.component.Toolbar = true;

function MyToolbar() { return <Toolbar>...</Toolbar>; } After:

import { previewCandidate\_\_Toolbar } from '@carbon/ibm-products';

function MyToolbar() { return
<previewCandidate**Toolbar>...</previewCandidate**Toolbar>; } Example 2:
Multiple Components Before:

import { pkg, BigNumber, SearchBar, Toolbar } from '@carbon/ibm-products';

pkg.component.BigNumber = true; pkg.component.SearchBar = true;
pkg.component.Toolbar = true; After:

import { previewCandidate**BigNumber, previewCandidate**SearchBar,
previewCandidate\_\_Toolbar, } from '@carbon/ibm-products'; Example 3: Using
setAllComponents Before:

import { pkg } from '@carbon/ibm-products';

// Enable all components pkg.setAllComponents(true); After:

// Import only the components you need with their PDLC prefix import {
previewCandidate**BigNumber, previewCandidate**Toolbar, preview\_\_Coachmark, }
from '@carbon/ibm-products';

// Stable components don't need a prefix import { PageHeader, SidePanel } from
'@carbon/ibm-products'; Step 4: Update Component Usage If you aliased components
to remove the prefix, update your JSX:

Option A: Use the prefixed name directly

import { previewCandidate\_\_Toolbar } from '@carbon/ibm-products';

function MyApp() { return
<previewCandidate**Toolbar>...</previewCandidate**Toolbar>; } Option B: Alias
the import

import { previewCandidate\_\_Toolbar as Toolbar } from '@carbon/ibm-products';

function MyApp() { return <Toolbar>...</Toolbar>; } Step 5: Remove Feature Flag
Configuration Remove all feature flag setup code:

// DELETE these lines: import { pkg } from '@carbon/ibm-products';
pkg.component.ComponentName = true; pkg.setAllComponents(true); TypeScript
Support The new export naming works seamlessly with TypeScript:

import { previewCandidate\_\_Toolbar, type ToolbarProps } from
'@carbon/ibm-products';

const MyToolbar: React.FC<ToolbarProps> = (props) => { return
<previewCandidate\_\_Toolbar {...props} />; }; Automated Migration Tool Take
action To make the transition as smooth as possible, we've created a status
renaming codemods. To use it, follow these steps:

Run the following command to preview the changes before applying them:

npx @carbon/upgrade migrate rename-ibm-products-imports-to-preview Review the
changes to ensure they meet your needs

Once you're satisfied, re-run the command with the --write flag to apply the
changes:

npx @carbon/upgrade migrate rename-ibm-products-imports-to-preview --write What
it does:

Automatically adds PDLC status prefixes to non-stable component imports
Preserves local variable names using aliases Handles both new imports and
already-prefixed imports Example transformation:

// Before import { Toolbar, SearchBar, InlineTip } from '@carbon/ibm-products';

// After import { previewCandidate**Toolbar as Toolbar,
previewCandidate**SearchBar as SearchBar, previewCandidate\_\_InlineTip as
InlineTip, } from '@carbon/ibm-products'; Important notes:

Run without --write flag first to preview changes This codemods only updates
imports; you must manually remove feature flag code (pkg.component.\*
statements) Always review the changes before committing The codemods uses the
mapping in tasks/upgrade/transforms/nonStableMapping.js Testing Your Migration
Remove all feature flag code from your configuration files Run the codemods to
update imports automatically (or update manually) Run your tests to ensure
everything works Verify in browser that components render correctly Benefits of
the New Approach No Configuration Required: Import and use components directly
Clear Stability Indication: Component status is visible in the import Better IDE
Support: Autocomplete shows available components with their status Type Safety:
TypeScript can validate exports at compile time Smaller Bundle: No runtime
feature flag checking Explicit Intent: Your code clearly shows which
experimental features you're using Timeline Current Release: Canary mechanism
deprecated, migration guide available Next Release: Canary mechanism removed
Support: Migration assistance available through GitHub issues Need Help?
Documentation: Component Status Definitions Issues: GitHub Issues Slack:
#ibmproducts-pal-dev channel Feedback We welcome feedback on this migration!
Please open an issue if you encounter problems or have suggestions for improving
this guide.
