import{u as r,j as e,M as o}from"./blocks-7YrsnBML.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-eCGu8_pm.js";function s(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Overview/Migration to Carbon (v12)"}),`
`,e.jsx(n.h1,{id:"migration-to-carbon--whats-changing-in-v12",children:"Migration to Carbon — what's changing in v12"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Who this is for:"})," teams consuming ",e.jsx(n.code,{children:"@carbon/ibm-products-web-components"}),`
today who want to understand where components are going, what will break, and
how to prepare.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#summary",children:"Summary"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#why-is-this-happening",children:"Why is this happening?"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#what-happens-to-this-package",children:"What happens to this package?"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#where-is-each-component-going",children:"Where is each component going?"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsxs(n.a,{href:"#migrating-to-carbonweb-components",children:["Migrating to ",e.jsx(n.code,{children:"@carbon/web-components"})]})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#moving-to-carbon-labs",children:"Moving to Carbon Labs"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#deprecated--no-migration-path",children:"Deprecated"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#patterns-and-examples",children:"Patterns and examples"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#what-do-i-need-to-change",children:"What do I need to change?"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#import-path-change",children:"Import path change"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#non-composable-components--two-step-migration",children:"Non-composable components — two-step migration"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#codemods",children:"Codemods"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"summary",children:"Summary"}),`
`,e.jsxs(n.p,{children:["Starting with ",e.jsx(n.strong,{children:"Carbon v12"}),`, the high-value components from
`,e.jsx(n.code,{children:"@carbon/ibm-products-web-components"}),` are being selectively migrated into the
Carbon core packages (`,e.jsx(n.code,{children:"@carbon/web-components"}),"). This means:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["You will eventually install ",e.jsx(n.strong,{children:"one package"})," instead of two."]}),`
`,e.jsx(n.li,{children:`Migrated components become first-class Carbon APIs, gaining v12 features
(updated motion, rounded corners, new tokens) immediately.`}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"@carbon/ibm-products-web-components"})," stays available but enters ",e.jsx(n.strong,{children:`minimal
maintenance mode`}),` after v12 ships — no new features or components will be
developed there.`]}),`
`,e.jsxs(n.li,{children:["A ",e.jsx(n.strong,{children:"one-time import-path change"}),` is required for components that migrate.
Codemods will be provided to automate this.`]}),`
`,e.jsxs(n.li,{children:[`Web Components ports are delivered as follow-up work per component and may not
land simultaneously with the React implementation at v12. Parity with
`,e.jsx(n.code,{children:"@carbon/ibm-products"})," (React) is the target across both flagship packages."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"why-is-this-happening",children:"Why is this happening?"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"carbon-for-ibm-products"}),` was built upon the foundational components of Carbon
Core, extended with additional components, styling, and guidance crafted
specifically for software product use cases. It is not a replacement for Core,
but a specialized layer on top of it. That separation was useful early on, but
it now creates friction:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Two packages to install."})," Adopters must manage both ",e.jsx(n.code,{children:"@carbon/web-components"}),`
and `,e.jsx(n.code,{children:"@carbon/ibm-products-web-components"})," to get the full component set."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Duplicated infrastructure."}),` Two CI pipelines, two Storybooks, two release
workflows — maintenance overhead with no consumer benefit.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Slower v12 adoption."}),` Components in a separate repo cannot easily consume
in-flight monorepo changes, lengthening the feedback loop.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Visibility across squads."}),` PRs and issues from different teams cannot
cross-reference when work is split across two repos.`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"what-happens-to-this-package",children:"What happens to this package?"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Phase"}),e.jsx(n.th,{children:"What it means for you"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Now → v12"})}),e.jsxs(n.td,{children:["Everything continues to work. Components are being migrated internally but not yet exported from ",e.jsx(n.code,{children:"@carbon/web-components"}),". No changes required on your side. Migrated components will be published from release branch (alpha releases) early on with v12 features."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"At v12"})}),e.jsxs(n.td,{children:["Migrated components are officially exported from ",e.jsx(n.code,{children:"@carbon/web-components"}),". Update your import paths. Codemods are available to automate this."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Post-v12"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"@carbon/ibm-products-web-components"})," enters minimal maintenance mode. Critical bug fixes only — no new features, no new components."]})]})]})]}),`
`,e.jsx(n.p,{children:"Every component in this Storybook will be labelled with one of these outcomes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Migrated to ",e.jsx(n.code,{children:"@carbon/web-components"})]}),` — links to the new location and
import-path change.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Deprecated"}),` — Not moving forward due to minimal or no adoption, an existing
replacement, or because the capability has already been delivered as a standard
pattern.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Moved to Carbon Labs"}),` — available in the community-maintained
`,e.jsx(n.a,{href:"https://github.com/carbon-design-system/carbon-labs",rel:"nofollow",children:"Carbon Labs"})," repo."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"where-is-each-component-going",children:"Where is each component going?"}),`
`,e.jsxs(n.h3,{id:"migrating-to-carbonweb-components",children:["Migrating to ",e.jsx(n.code,{children:"@carbon/web-components"})]}),`
`,e.jsxs(n.p,{children:[`These components have sufficient adoption, standalone utility, or architectural
fit to justify first-class status in `,e.jsx(n.code,{children:"@carbon/web-components"}),`. They are exported
as part of the public API starting at v12.`]}),`
`,e.jsx(n.p,{children:`The table below reflects
the intended v12 destination; availability dates will be confirmed in the v12
release notes.`}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Component"}),e.jsxs(n.th,{children:["v12 status in ",e.jsx(n.code,{children:"@carbon/web-components"})]}),e.jsx(n.th,{children:"Notes"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Add and select"}),e.jsx(n.td,{children:"Preview → Stable"}),e.jsxs(n.td,{children:["The monolithic pattern is deprecated; replaced by a composable component system. ",e.jsx(n.code,{children:"AddSelectData"})," utility manages hierarchical selection state separately from the UI."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Big number"}),e.jsx(n.td,{children:"Preview"}),e.jsx(n.td,{children:"Lightweight component with strong potential. Enters core as a preview; may move to Labs if adoption does not grow post-v12."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Coachmark"}),e.jsx(n.td,{children:"Stable"}),e.jsxs(n.td,{children:["Old monolithic version deprecated. New composable version moves to core as ",e.jsx(n.strong,{children:"stable"}),"."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Composable card"}),e.jsx(n.td,{children:"Preview → Stable"}),e.jsxs(n.td,{children:["Replaces expressive/productive card variants. Available in ",e.jsx(n.code,{children:"@carbon/web-components"})," as a preview ",e.jsx(n.strong,{children:"before v12"}),", promoted to stable at v12."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Full-page error"}),e.jsx(n.td,{children:"Stable"}),e.jsxs(n.td,{children:["High adoption. Composable design. Migrates to core as ",e.jsx(n.strong,{children:"stable"}),"."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Guide banner"}),e.jsx(n.td,{children:"Preview"}),e.jsxs(n.td,{children:["Moves to core as ",e.jsx(n.strong,{children:"preview"}),". Composable API can be explored post-v12."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Inline edit"}),e.jsx(n.td,{children:"Stable"}),e.jsxs(n.td,{children:["Moves to core as ",e.jsx(n.strong,{children:"stable"}),"."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Interstitial screen"}),e.jsx(n.td,{children:"Stable"}),e.jsxs(n.td,{children:["Already re-implemented as a stable composable component. Migrates to core as ",e.jsx(n.strong,{children:"stable"}),"."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Notifications panel"}),e.jsx(n.td,{children:"Stable"}),e.jsxs(n.td,{children:["Moves to core as ",e.jsx(n.strong,{children:"stable"})," (non-composable). A composable redesign will follow post-v12 as a preview."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Options tile"}),e.jsx(n.td,{children:"Stable"}),e.jsxs(n.td,{children:["Good adoption. Migrates to core as ",e.jsx(n.strong,{children:"stable"}),"."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Page header"}),e.jsx(n.td,{children:"Stable"}),e.jsxs(n.td,{children:["Old ",e.jsx(n.code,{children:"PageHeader"})," deprecated. New composable version moves to core as ",e.jsx(n.strong,{children:"stable"}),"."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Resizer"}),e.jsx(n.td,{children:"Stable"}),e.jsx(n.td,{children:"Migrates to core as a utility component from Carbon Labs."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Side panel"}),e.jsx(n.td,{children:"Stable"}),e.jsxs(n.td,{children:["Moves to core ",e.jsx(n.strong,{children:"as-is"})," (non-composable). Composable redesign delivered post-v12 as preview, then promoted to stable."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Tearsheet"}),e.jsx(n.td,{children:"Preview → Stable"}),e.jsxs(n.td,{children:["Old monolithic ",e.jsx(n.code,{children:"Tearsheet"})," deprecated. New composable version moves to core as ",e.jsx(n.strong,{children:"stable"}),"."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Truncated text"}),e.jsx(n.td,{children:"Stable"}),e.jsx(n.td,{children:"Lightweight utility used internally across components. Exporting lets adopters reuse the same overflow behavior."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"User avatar"}),e.jsx(n.td,{children:"Stable"}),e.jsxs(n.td,{children:["Migrates to core as ",e.jsx(n.strong,{children:"stable"}),"."]})]})]})]}),`
`,e.jsx(n.h3,{id:"moving-to-carbon-labs",children:"Moving to Carbon Labs"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/carbon-design-system/carbon-labs",rel:"nofollow",children:"Carbon Labs"}),` is
community-maintained. These components have low adoption, but retain enough
value to remain available for teams who want to use and contribute to them. The
Carbon core team does not own or gate releases in Labs.`]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Component"}),e.jsx(n.th,{children:"Notes"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Checklist"}),e.jsx(n.td,{children:"Low adoption; useful for onboarding and time-to-value flows."})]})})]}),`
`,e.jsx(n.h3,{id:"deprecated",children:"Deprecated"}),`
`,e.jsxs(n.p,{children:["These components will be deprecated in ",e.jsx(n.code,{children:"@carbon/ibm-products-web-components"}),`
and will not migrate to Carbon core. They have either zero or near-zero
adoption, have been replaced by a newly delivered component, or are better
served as a documented pattern rather than an exported component.`]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Component"}),e.jsx(n.th,{children:"Reason"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"About modal"}),e.jsx(n.td,{children:"A simple modal with structured content. Deprecated; shared as an example pattern instead."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Tearsheet"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"c4p-tearsheet"})," will be deprecated in favour of new tearsheet delivered, which is currently ",e.jsx(n.code,{children:"c4p-preview-tearsheet"})]})]})]})]}),`
`,e.jsx(n.h3,{id:"patterns-and-examples",children:"Patterns and examples"}),`
`,e.jsxs(n.p,{children:[`These are usage patterns and example flows built on top of Carbon and
`,e.jsx(n.code,{children:"@carbon/ibm-products-web-components"})," components. They are ",e.jsx(n.strong,{children:`not exported as
standalone components`})," but will be documented under an ",e.jsx(n.code,{children:"Examples/"}),` section in
the Carbon core Storybook. The composed components (e.g. `,e.jsx(n.code,{children:"c4p-tearsheet"}),`,
`,e.jsx(n.code,{children:"c4p-side-panel"}),`) are what gets migrated and exported — the patterns show you
how to compose them. The standalone component patterns (pre-built patterns) are
already deprecated in the products repo.`]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Pattern"}),e.jsx(n.th,{children:"Notes"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Add and select patterns"}),e.jsxs(n.td,{children:["Pattern examples built on top of the new composable ",e.jsx(n.code,{children:"AddSelect"})," system."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Coachmark patterns"}),e.jsxs(n.td,{children:["Pattern variants built on top of the composable ",e.jsx(n.code,{children:"c4p-coachmark"})," component."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Create flows"}),e.jsxs(n.td,{children:["Full-page and modal creation patterns composed from ",e.jsx(n.code,{children:"c4p-tearsheet"}),", ",e.jsx(n.code,{children:"c4p-side-panel"}),", and related components."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Delete and remove"}),e.jsx(n.td,{children:"Pattern for destructive confirmation flows."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Export"}),e.jsx(n.td,{children:"Pattern for export confirmation flows."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Generate an API key"}),e.jsx(n.td,{children:"Pattern for API key generation flows."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Import and upload"}),e.jsx(n.td,{children:"Pattern for import and file upload flows."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Saving"}),e.jsx(n.td,{children:"Pattern for Saving."})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"what-do-i-need-to-change",children:"What do I need to change?"}),`
`,e.jsx(n.h3,{id:"import-path-change",children:"Import path change"}),`
`,e.jsxs(n.p,{children:["For every component that migrates to ",e.jsx(n.code,{children:"@carbon/web-components"}),", the ",e.jsx(n.strong,{children:`only
required change at v12`})," is the import path:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// Before (Carbon v11 / current)
import '@carbon/ibm-products-web-components/es/components/side-panel/index.js';

// After (Carbon v12+)
import '@carbon/web-components/es/components/side-panel/index.js';
`})}),`
`,e.jsxs(n.p,{children:["You do ",e.jsx(n.strong,{children:"not"}),` need to change how you use the component (tag names, attributes,
slots, or events) at v12. The component API is preserved on migration.`]}),`
`,e.jsx(n.h3,{id:"preview--stable-components--one-step-api-migration",children:"Preview → Stable components — one-step API migration"}),`
`,e.jsxs(n.p,{children:[`Some components were already rewritten as composable previews inside
`,e.jsx(n.code,{children:"@carbon/ibm-products-web-components"}),`. Those preview versions are what migrate
to `,e.jsx(n.code,{children:"@carbon/web-components"})," and ship as ",e.jsx(n.strong,{children:"stable"}),` at v12. For these components,
both the import path `,e.jsx(n.strong,{children:"and"}),` the component API change — the old monolithic
export is deprecated.`]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Component"}),e.jsx(n.th,{children:"Change required at v12"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"c4p-tearsheet"})}),e.jsx(n.td,{children:"New import path + migrate to composable API"})]})})]}),`
`,e.jsx(n.h3,{id:"codemods",children:"Codemods"}),`
`,e.jsx(n.p,{children:`Codemods will be published as part of the v12 release to automate import-path
changes. Details will be shared later.`}),`
`,e.jsx(n.hr,{})]})}function c(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{c as default};
