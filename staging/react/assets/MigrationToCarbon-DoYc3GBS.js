var d=Object.defineProperty;var s=(r,e)=>d(r,"name",{value:e,configurable:!0});import{u as o,j as n,M as i}from"./iframe-CxssGfIx.js";import"./index-Bdwsx_rX.js";import"./preload-helper-Cc2_yIPf.js";function t(r){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...o(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Overview/Migration to Carbon (v12)"}),`
`,n.jsx(e.h1,{id:"migration-to-carbon--whats-changing-in-v12",children:"Migration to Carbon — what's changing in v12"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Who this is for:"})," teams consuming ",n.jsx(e.code,{children:"@carbon/ibm-products"}),` today who want to
understand where components are going, what will break, and how to prepare.`]}),`
`]}),`
`,n.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#summary",children:"Summary"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#why-is-this-happening",children:"Why is this happening?"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#what-happens-to-this-package",children:"What happens to this package?"})}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"#where-is-each-component-going",children:"Where is each component going?"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsxs(e.a,{href:"#migrating-to-carbonreact",children:["Migrating to ",n.jsx(e.code,{children:"@carbon/react"})]})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#moving-to-carbon-labs",children:"Moving to Carbon Labs"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#deprecated--no-migration-path",children:"Deprecated"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#patterns-and-examples",children:"Patterns and examples"})}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"#what-do-i-need-to-change",children:"What do I need to change?"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#import-path-change",children:"Import path change"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#non-composable-components--two-step-migration",children:"Non-composable components — two-step migration"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#tearsheet-pageheader-and-card--migrate-to-the-composable-versions",children:"Tearsheet, PageHeader and Card — migrate to the composable versions"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#codemods",children:"Codemods"})}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"summary",children:"Summary"}),`
`,n.jsxs(e.p,{children:["Starting with ",n.jsx(e.strong,{children:"Carbon v12"}),`, the high-value components from
`,n.jsx(e.code,{children:"@carbon/ibm-products"}),` are being selectively migrated into the Carbon core
packages (`,n.jsx(e.code,{children:"@carbon/react"})," and ",n.jsx(e.code,{children:"@carbon/web-components"}),"). This means:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["You will eventually install ",n.jsx(e.strong,{children:"one package"})," instead of two."]}),`
`,n.jsx(e.li,{children:`Migrated components become first-class Carbon APIs, gaining v12 features
(updated motion, rounded corners, new tokens) immediately.`}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"@carbon/ibm-products"})," stays available but enters ",n.jsx(e.strong,{children:"minimal maintenance mode"}),`
after v12 ships — no new features or components will be developed there.`]}),`
`,n.jsxs(e.li,{children:["A ",n.jsx(e.strong,{children:"one-time import-path change"}),` is required for components that migrate.
Codemods will be provided to automate this.`]}),`
`,n.jsxs(e.li,{children:["Migrated components will be available in both ",n.jsx(e.strong,{children:n.jsx(e.code,{children:"@carbon/react"})}),` and
`,n.jsx(e.strong,{children:n.jsx(e.code,{children:"@carbon/web-components"})}),`. Web Components ports are delivered as follow-up
work per component and may not land simultaneously with the React
implementation at v12.`]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"why-is-this-happening",children:"Why is this happening?"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"carbon-for-ibm-products"}),` was built upon the foundational components of Carbon
Core, extended with additional components, styling, and guidance crafted
specifically for software product use cases, it is not a replacement for Core,
but a specialized layer on top of it. That separation was useful early on, but
it now creates friction:`]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Two packages to install."})," Adopters must manage both ",n.jsx(e.code,{children:"@carbon/react"}),` and
`,n.jsx(e.code,{children:"@carbon/ibm-products"})," to get the full component set."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Duplicated infrastructure."}),` Two CI pipelines, two Storybooks, two release
workflows — maintenance overhead with no consumer benefit.`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Slower v12 adoption."}),` Components in a separate repo cannot easily consume
in-flight monorepo changes, lengthening the feedback loop.`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Visibility across squads."}),` PRs and issues from different teams cannot
cross-reference when work is split across two repos.`]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"what-happens-to-this-package",children:"What happens to this package?"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Phase"}),n.jsx(e.th,{children:"What it means for you"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.strong,{children:"Now → v12"})}),n.jsxs(e.td,{children:["Everything continues to work. Components are being migrated internally but not yet exported from ",n.jsx(e.code,{children:"@carbon/react"}),". No changes required on your side. Migrated components will be published from release branch (alpha releases) early on with v12 features."]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.strong,{children:"At v12"})}),n.jsxs(e.td,{children:["Migrated components are officially exported from ",n.jsx(e.code,{children:"@carbon/react"}),". Update your import paths. Codemods are available to automate this."]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.strong,{children:"Post-v12"})}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"@carbon/ibm-products"})," enters minimal maintenance mode. Critical bug fixes only — no new features, no new components."]})]})]})]}),`
`,n.jsx(e.p,{children:"Every component in this Storybook will be labelled with one of these outcomes:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsxs(e.strong,{children:["Migrated to ",n.jsx(e.code,{children:"@carbon/react"})]}),` — links to the new location and import-path
change.`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Deprecated"}),` — Not moving forward due to minimal or no adoption, an existing
replacement, or because the capability has already been delivered as a
standard pattern.`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Moved to Carbon Labs"}),` — available in the community-maintained
`,n.jsx(e.a,{href:"https://github.com/carbon-design-system/carbon-labs",rel:"nofollow",children:"Carbon Labs"})," repo."]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"where-is-each-component-going",children:"Where is each component going?"}),`
`,n.jsxs(e.h3,{id:"migrating-to-carbonreact",children:["Migrating to ",n.jsx(e.code,{children:"@carbon/react"})]}),`
`,n.jsxs(e.p,{children:[`These components have sufficient adoption, standalone utility, or architectural
fit to justify first-class status in `,n.jsx(e.code,{children:"@carbon/react"}),` and
`,n.jsx(e.code,{children:"@carbon/web-components"}),`. They are exported as part of the public API starting
at v12.`]}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Component"}),n.jsxs(e.th,{children:["v12 status in ",n.jsx(e.code,{children:"@carbon/react"})]}),n.jsx(e.th,{children:"Notes"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Add and select"}),n.jsx(e.td,{children:"Preview → Stable"}),n.jsxs(e.td,{children:["The monolithic pattern is deprecated; replaced by a composable component system. ",n.jsx(e.code,{children:"AddSelectData"})," manages hierarchical selection state separately from the UI."]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Big number"}),n.jsx(e.td,{children:"Preview"}),n.jsx(e.td,{children:"Lightweight component with strong potential. Enters core as a preview; may move to Labs if adoption does not grow post-v12."})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Coachmark"}),n.jsx(e.td,{children:"Preview → Stable"}),n.jsxs(e.td,{children:["Old monolithic version deprecated. New composable version (already a preview in c4ip) moves to core as ",n.jsx(e.strong,{children:"stable"}),"."]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Composable card"}),n.jsx(e.td,{children:"Preview → Stable"}),n.jsxs(e.td,{children:["Replaces ",n.jsx(e.code,{children:"ExpressiveCard"})," / ",n.jsx(e.code,{children:"ProductiveCard"}),". Available in ",n.jsx(e.code,{children:"@carbon/react"})," as a preview ",n.jsx(e.strong,{children:"before v12"}),", promoted to stable at v12."]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Condition builder"}),n.jsx(e.td,{children:"Preview → Stable"}),n.jsxs(e.td,{children:["Accessibility and composability reviews complete. Moves to core as ",n.jsx(e.strong,{children:"stable"}),". Web Components port is a follow-up."]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Full-page error"}),n.jsx(e.td,{children:"Stable"}),n.jsxs(e.td,{children:["High adoption. Composable design. Migrates to core as ",n.jsx(e.strong,{children:"stable"}),"."]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Guide banner"}),n.jsx(e.td,{children:"Preview"}),n.jsxs(e.td,{children:["Moves to core as ",n.jsx(e.strong,{children:"preview"}),". Composable API can be explored post-v12."]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Inline edit"}),n.jsx(e.td,{children:"Stable"}),n.jsxs(e.td,{children:["Moves to core as ",n.jsx(e.strong,{children:"stable"}),"."]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Interstitial screen"}),n.jsx(e.td,{children:"Stable"}),n.jsxs(e.td,{children:["Already re-implemented as a stable composable component. Migrates to core as ",n.jsx(e.strong,{children:"stable"}),"."]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Notifications panel"}),n.jsx(e.td,{children:"Stable"}),n.jsxs(e.td,{children:["Moves to core as ",n.jsx(e.strong,{children:"stable"})," (non-composable). A composable redesign will follow post-v12 as a preview."]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Options tile"}),n.jsx(e.td,{children:"Stable"}),n.jsxs(e.td,{children:["Good adoption. Migrates to core as ",n.jsx(e.strong,{children:"stable"}),"."]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Page header"}),n.jsx(e.td,{children:"Preview → Stable"}),n.jsxs(e.td,{children:["Old ",n.jsx(e.code,{children:"PageHeader"})," deprecated. New composable version (already a preview in c4ip) moves to core as ",n.jsx(e.strong,{children:"stable"}),"."]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Resizer"}),n.jsx(e.td,{children:"Stable"}),n.jsx(e.td,{children:"Migrates to core as a utility component from Carbon Labs."})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Scroll gradient"}),n.jsx(e.td,{children:"Stable"}),n.jsx(e.td,{children:"Migrates as a utility component."})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Side panel"}),n.jsx(e.td,{children:"Stable"}),n.jsxs(e.td,{children:["Moves to core ",n.jsx(e.strong,{children:"as-is"})," (non-composable). Will deliver a composable redesign post-v12."]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Tag overflow"}),n.jsx(e.td,{children:"Stable"}),n.jsxs(e.td,{children:["Moves to core as ",n.jsx(e.strong,{children:"stable"}),". Replaces ",n.jsx(e.code,{children:"TagSet"}),"."]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Tearsheet"}),n.jsx(e.td,{children:"Preview → Stable"}),n.jsxs(e.td,{children:["Old monolithic ",n.jsx(e.code,{children:"Tearsheet"})," deprecated. New composable version (already a preview in c4ip) moves to core as ",n.jsx(e.strong,{children:"stable"}),"."]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Truncated text"}),n.jsx(e.td,{children:"Stable"}),n.jsx(e.td,{children:"Lightweight utility used internally across components. Exporting lets adopters reuse the same overflow behavior."})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"User avatar"}),n.jsx(e.td,{children:"Stable"}),n.jsxs(e.td,{children:["Migrates to core as ",n.jsx(e.strong,{children:"stable"}),"."]})]})]})]}),`
`,n.jsx(e.h3,{id:"moving-to-carbon-labs",children:"Moving to Carbon Labs"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://github.com/carbon-design-system/carbon-labs",rel:"nofollow",children:"Carbon Labs"}),` is
community-maintained. These components have low adoption, but retain enough
value to remain available for teams who want to use and contribute to them. The
Carbon core team does not own or gate releases in Labs.`]}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Component"}),n.jsx(e.th,{children:"Notes"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Cascade"}),n.jsx(e.td,{children:"Low adoption;"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Checklist"}),n.jsx(e.td,{children:"Low adoption; useful for onboarding and time-to-value flows."})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Inline tip"}),n.jsx(e.td,{children:"No production adoption. Community can use and maintain it in Labs."})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Nonlinear reading"}),n.jsx(e.td,{children:"Low adoption."})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Truncated list"}),n.jsx(e.td,{})]})]})]}),`
`,n.jsx(e.h3,{id:"deprecated",children:"Deprecated"}),`
`,n.jsxs(e.p,{children:["These components will be deprecated in ",n.jsx(e.code,{children:"@carbon/ibm-products"}),` and will not
migrate to Carbon core. They have either zero or near-zero adoption, have been
replaced by a newly delivered component, or are better served as a documented
pattern rather than an exported component.`]}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Component"}),n.jsx(e.th,{children:"Reason"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"About modal"}),n.jsx(e.td,{children:"A simple modal with structured content. Deprecated; shared as an example pattern instead."})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Action bar"}),n.jsxs(e.td,{children:["No adoption; used only internally by the old ",n.jsx(e.code,{children:"PageHeader"}),". Not needed with the new composable ",n.jsx(e.code,{children:"PageHeader"}),"."]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Decorator"}),n.jsx(e.td,{children:"No adoption."})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Expressive card"}),n.jsxs(e.td,{children:["Replaced by the new composable ",n.jsx(e.code,{children:"Card"})," component."]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Get started card"}),n.jsxs(e.td,{children:["Will be delivered as a pattern built on top of the new composable ",n.jsx(e.code,{children:"Card"})," component."]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Page header"}),n.jsxs(e.td,{children:["Replaced by the new composable ",n.jsx(e.code,{children:"PageHeader"})," (",n.jsx(e.code,{children:"preview__PageHeader"}),")."]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Productive card"}),n.jsxs(e.td,{children:["Replaced by the new composable ",n.jsx(e.code,{children:"Card"})," component."]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Search bar"}),n.jsx(e.td,{children:"No adoption."})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Tag set"}),n.jsxs(e.td,{children:["Deprecated in favour of ",n.jsx(e.code,{children:"TagOverflow"}),", which provides the same capability with greater flexibility."]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Tearsheet"}),n.jsxs(e.td,{children:["Replaced by the new composable ",n.jsx(e.code,{children:"Tearsheet"})," (",n.jsx(e.code,{children:"preview__Tearsheet"}),")."]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Toolbar"}),n.jsx(e.td,{children:"No adoption."})]})]})]}),`
`,n.jsx(e.h3,{id:"patterns-and-examples",children:"Patterns and examples"}),`
`,n.jsxs(e.p,{children:[`These are usage patterns and example flows built on top of Carbon and
`,n.jsx(e.code,{children:"@carbon/ibm-products"})," components. They are ",n.jsx(e.strong,{children:`not exported as standalone
components`})," but will be documented under an ",n.jsx(e.code,{children:"Examples/"}),` section in the Carbon
core Storybook. The composed components (e.g. `,n.jsx(e.code,{children:"Tearsheet"}),", ",n.jsx(e.code,{children:"SidePanel"}),`) are what
gets migrated and exported — the patterns show you how to compose them. The
standalone components patterns(pre-built patterns) are already deprecated in
products repo.`]}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Pattern"}),n.jsx(e.th,{children:"Notes"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Add and select patterns"}),n.jsxs(e.td,{children:["Pattern examples built on top of the new composable ",n.jsx(e.code,{children:"AddSelect"})," system."]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Coachmark patterns"}),n.jsxs(e.td,{children:["Pattern variants built on top of the composable ",n.jsx(e.code,{children:"Coachmark"})," component."]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Create flows"}),n.jsxs(e.td,{children:["Full-page and modal creation patterns composed from ",n.jsx(e.code,{children:"Tearsheet"}),", ",n.jsx(e.code,{children:"SidePanel"}),",",n.jsx(e.code,{children:"Step Utility"})," and related components."]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Delete and remove"}),n.jsx(e.td,{children:"Pattern for destructive confirmation flows."})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Export"}),n.jsx(e.td,{children:"Pattern for export confirmation flows."})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Generate an API key"}),n.jsx(e.td,{children:"Pattern for API key generation flows."})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Import and upload"}),n.jsx(e.td,{children:"Pattern for import and file upload flows."})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Saving"}),n.jsx(e.td,{children:"Pattern for Saving."})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Web terminal"}),n.jsx(e.td,{children:"Pattern for Web terminal."})]})]})]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"what-do-i-need-to-change",children:"What do I need to change?"}),`
`,n.jsx(e.h3,{id:"import-path-change",children:"Import path change"}),`
`,n.jsxs(e.p,{children:["For every component that migrates to ",n.jsx(e.code,{children:"@carbon/react"}),", the ",n.jsx(e.strong,{children:`only required change
at v12`})," is the import path:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Before (Carbon v11 / current)
import { SidePanel } from '@carbon/ibm-products';

// After (Carbon v12+)
import { SidePanel } from '@carbon/react';
`})}),`
`,n.jsxs(e.p,{children:["You do ",n.jsx(e.strong,{children:"not"}),` need to change how you use the component at v12. The component
API is preserved on migration.`]}),`
`,n.jsx(e.h3,{id:"preview--stable-components--one-step-api-migration",children:"Preview → Stable components — one-step API migration"}),`
`,n.jsxs(e.p,{children:[`Some components were already rewritten as composable previews inside
`,n.jsx(e.code,{children:"@carbon/ibm-products"}),`. Those preview versions are what migrate to
`,n.jsx(e.code,{children:"@carbon/react"})," and ship as ",n.jsx(e.strong,{children:"stable"}),` at v12. For these components, both the
import path `,n.jsx(e.strong,{children:"and"}),` the component API change — the old monolithic export is
deprecated.`]}),`
`,n.jsx(e.p,{children:`Migration guides and codemods for each of these will be published alongside the
v12 release.`}),`
`,n.jsx(e.h3,{id:"tearsheet-pageheader-and-card--migrate-to-the-composable-versions",children:"Tearsheet, PageHeader and Card — migrate to the composable versions"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Tearsheet"}),", ",n.jsx(e.code,{children:"PageHeader"})," and ",n.jsx(e.code,{children:"Card"}),` are being replaced by new composable
implementations. This applies to both the `,n.jsx(e.strong,{children:"React"})," (",n.jsx(e.code,{children:"@carbon/ibm-products"}),`) and
`,n.jsx(e.strong,{children:"Web Components"})," (",n.jsx(e.code,{children:"@carbon/ibm-products-web-components"}),") packages."]}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Component"}),n.jsx(e.th,{children:"Current (non-composable) status"}),n.jsx(e.th,{children:"New composable version"}),n.jsx(e.th,{children:"Available in v12"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Tearsheet"}),n.jsxs(e.td,{children:["Stable component now carries a ",n.jsx(e.strong,{children:"deprecation notice"}),"."]}),n.jsxs(e.td,{children:[n.jsx(e.strong,{children:"Delivered"})," — available as a ",n.jsx(e.strong,{children:"preview"}),"."]}),n.jsx(e.td,{children:"New version only."})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"PageHeader"}),n.jsxs(e.td,{children:["Stable component now carries a ",n.jsx(e.strong,{children:"deprecation notice"}),"."]}),n.jsxs(e.td,{children:[n.jsx(e.strong,{children:"Delivered"})," — available as a ",n.jsx(e.strong,{children:"preview"}),"."]}),n.jsx(e.td,{children:"New version only."})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Card"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"ExpressiveCard"})," / ",n.jsx(e.code,{children:"ProductiveCard"})," will be deprecated ",n.jsx(e.strong,{children:"soon"}),"."]}),n.jsxs(e.td,{children:[n.jsx(e.strong,{children:"Coming soon"})," — will ship as a ",n.jsx(e.strong,{children:"preview"}),"."]}),n.jsx(e.td,{children:"New version only."})]})]})]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"In v12, only the new composable components will be available."}),` The existing
stable `,n.jsx(e.code,{children:"Tearsheet"}),", ",n.jsx(e.code,{children:"PageHeader"})," and ",n.jsx(e.code,{children:"Card"})," (",n.jsx(e.code,{children:"ExpressiveCard"}),", ",n.jsx(e.code,{children:"ProductiveCard"}),`)
will not be carried forward, so they cannot be used after upgrading.`]}),`
`,n.jsx(e.h4,{id:"what-to-do-now",children:"What to do now"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Start migrating to the new composable versions today."}),` Do not wait for v12
— the composable `,n.jsx(e.code,{children:"Tearsheet"})," and ",n.jsx(e.code,{children:"PageHeader"}),` are already available as
previews and are the versions that will ship as stable in v12.`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Treat the deprecation notices as action items."}),` The old components keep
working until v12, but will receive no new features.`]}),`
`,n.jsxs(e.li,{children:[n.jsxs(e.strong,{children:["Plan for ",n.jsx(e.code,{children:"Card"}),"."]})," Avoid starting new work on ",n.jsx(e.code,{children:"ExpressiveCard"}),` or
`,n.jsx(e.code,{children:"ProductiveCard"}),". Migrate to the composable ",n.jsx(e.code,{children:"Card"}),` once it is released as a
preview. This will be released from @carbon/react`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Expect an API change, not just an import-path change."}),` The new components
are composed from smaller building blocks (for example header, body and footer
parts for `,n.jsx(e.code,{children:"Tearsheet"}),") rather than configured through a single set of props."]}),`
`]}),`
`,n.jsx(e.h4,{id:"react",children:"React"}),`
`,n.jsxs(e.p,{children:["The composable previews are exported from ",n.jsx(e.code,{children:"@carbon/ibm-products"}),` with a
`,n.jsx(e.code,{children:"preview__"})," prefix:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Before (deprecated)
import { Tearsheet, PageHeader } from '@carbon/ibm-products';

// After (composable, preview)
import {
  preview__Tearsheet as Tearsheet,
  preview__PageHeader as PageHeader,
} from '@carbon/ibm-products';
`})}),`
`,n.jsx(e.p,{children:`For codemods, prop mappings and side-by-side examples, see the migration
sections in the component docs:`}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"?path=/docs/preview-tearsheet--docs#migration-from-legacy-tearsheet",children:"Tearsheet — Migration from Legacy Tearsheet"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"?path=/docs/preview-pageheader--docs#migration-guidance-from-deprecated-pageheader-to-preview_pageheader",children:"PageHeader — Migration guidance from deprecated PageHeader to preview_PageHeader"})}),`
`]}),`
`,n.jsx(e.h4,{id:"web-components",children:"Web Components"}),`
`,n.jsxs(e.p,{children:[`Detailed migration guide:
`,n.jsxs(e.a,{href:"https://ibm-products-web-components.carbondesignsystem.com/?path=/docs/preview-tearsheet--docs#migration-from-legacy-tearsheet",rel:"nofollow",children:["Tearsheet → ",n.jsx(e.code,{children:"c4p-preview-tearsheet"})]})]}),`
`,n.jsxs(e.p,{children:[`The composable Tearsheet is delivered as a separate set of elements. For
example, use `,n.jsx(e.code,{children:"CDSTearsheetPreview"})," (",n.jsx(e.code,{children:"<c4p-preview-tearsheet>"}),`) together with its
companion elements such as `,n.jsx(e.code,{children:"CDSTearsheetHeader"}),", ",n.jsx(e.code,{children:"CDSTearsheetBody"}),` and
`,n.jsx(e.code,{children:"CDSTearsheetFooter"})," in place of ",n.jsx(e.code,{children:"CDSTearsheet"})," (",n.jsx(e.code,{children:"<c4p-tearsheet>"}),`). Refer to
the `,n.jsx(e.code,{children:"PageHeader"})," and ",n.jsx(e.code,{children:"Tearsheet"})," stories for the available composable elements."]}),`
`,n.jsx(e.p,{children:"Migration guides and codemods will be published alongside the v12 release."}),`
`,n.jsx(e.h3,{id:"codemods",children:"Codemods"}),`
`,n.jsx(e.p,{children:`Codemods will be published as part of the v12 release to automate import-path
changes. Details will be shared later.`}),`
`,n.jsx(e.hr,{})]})}s(t,"_createMdxContent");function x(r={}){const{wrapper:e}={...o(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(t,{...r})}):t(r)}s(x,"MDXContent");export{x as default};
//# sourceMappingURL=MigrationToCarbon-DoYc3GBS.js.map
