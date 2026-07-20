var a=Object.defineProperty;var s=(r,n)=>a(r,"name",{value:n,configurable:!0});import{u as d,j as e,M as o}from"./iframe-LxOZQDAZ.js";import{r as t}from"./index-s-fwBYUo.js";import"./preload-helper-Cc2_yIPf.js";function i(r){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Deprecated/Prebuilt Patterns/Overview"}),`
`,e.jsx(n.h1,{id:"prebuilt-patterns--deprecation-overview",children:"Prebuilt patterns — deprecation overview"}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#what-is-changing",children:"What is changing?"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#why-patterns-instead-of-components",children:"Why patterns instead of components?"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#how-prebuilt-patterns-and-patterns-differ",children:"How prebuilt patterns and patterns differ"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#affected-components-and-their-pattern-equivalents",children:"Affected components and their pattern equivalents"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#how-to-migrate--general-process",children:"How to migrate — general process"})}),`
`,e.jsx(n.li,{children:e.jsxs(n.a,{href:"#example-apikeymodal--generateanapikey",children:["Example: ",e.jsx(n.code,{children:"APIKeyModal"})," → ",e.jsx(n.code,{children:"GenerateAnAPIKey"})]})}),`
`,e.jsx(n.li,{children:e.jsxs(n.a,{href:"#example-createtearsheet--createtearsheet-pattern",children:["Example: ",e.jsx(n.code,{children:"CreateTearsheet"})," → ",e.jsx(n.code,{children:"CreateTearsheet"})," pattern"]})}),`
`,e.jsx(n.li,{children:e.jsxs(n.a,{href:"#a-note-on-preview-components",children:["A note on ",e.jsx(n.code,{children:"preview-components"})]})}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"what-is-changing",children:"What is changing?"}),`
`,e.jsxs(n.p,{children:[`Patterns can be accomplished in multiple ways utilizing one or more components
with additional design considerations. The prebuilt patterns in this library are
based on existing
`,e.jsx(n.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/patterns/overview/patterns/",rel:"nofollow",children:"patterns"}),`
documented on the Carbon for IBM Products website, however, they are built like
traditional components that can also be imported directly for use.`]}),`
`,e.jsxs(n.p,{children:["We are transitioning these prebuilt patterns from ",e.jsx(n.strong,{children:"importable components"}),` to
`,e.jsx(n.strong,{children:"pure patterns"}),` — reference implementations that you copy into your codebase
and customize. This gives you full ownership and control over the code.`]}),`
`,e.jsx(n.h3,{id:"before--prebuilt-component-approach",children:"Before — prebuilt component approach"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// Import the component directly from the package
import { SomePrebuiltPattern } from '@carbon/ibm-products';

function MyApp() {
  return (
    <SomePrebuiltPattern
      open={open}
      onClose={handleClose}
      propA="value"
      propB="value"
      // ...many more props to control every built-in variation
    />
  );
}
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Limitations of this approach:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Limited customization without prop drilling"}),`
`,e.jsx(n.li,{children:"Breaking changes affect all adopters on upgrade"}),`
`,e.jsx(n.li,{children:"Complex prop APIs required for edge cases"}),`
`,e.jsx(n.li,{children:"Difficult to extend for unique product requirements"}),`
`]}),`
`,e.jsx(n.h3,{id:"after--pure-pattern-approach",children:"After — pure pattern approach"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// Copy the pattern files from example/components/ into your project once.
// The exact files vary per pattern — check the pattern's own migration guide.
import { SomePattern } from './patterns/SomePattern/SomePattern';

function MyApp() {
  return (
    <SomePattern
      open={open}
      onRequestClose={handleClose}
      // Only the props your use case needs
    >
      {/* You compose the content directly as children */}
      <MyFormFields />
    </SomePattern>
  );
}
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Benefits:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Full control"})," — modify the code to match your exact requirements"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"No breaking changes"})," — library updates do not touch your copy"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Seamless customization"})," — adapt without workarounds or prop drilling"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Smaller bundles"})," — include only what your product needs"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Reduced maintenance"}),` — the library no longer needs to support every edge
case`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"why-patterns-instead-of-components",children:"Why patterns instead of components?"}),`
`,e.jsx(n.h3,{id:"the-problem-with-complex-components",children:"The problem with complex components"}),`
`,e.jsx(n.p,{children:`Some UI patterns are inherently complex and highly variable across different
products:`}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Multi-step workflows"}),` — different products need different validation,
navigation, and state management`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Create / Edit flows"}),` — unique business logic, data structures, and
submission handling`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Complex forms"}),` — product-specific validation rules, field dependencies,
and error handling`]}),`
`]}),`
`,e.jsx(n.p,{children:`Adding more props to solve each case compounds the API surface, increases
maintenance cost, and still cannot cover every scenario.`}),`
`,e.jsx(n.h3,{id:"when-to-use-patterns-vs-components",children:"When to use patterns vs components"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Use a component"}),e.jsx(n.th,{children:"Use a pattern"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Simple, consistent UI elements"}),e.jsx(n.td,{children:"Complex, multi-step workflows"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Minimal customization needed"}),e.jsx(n.td,{children:"Heavy customization expected"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Stable, well-defined API"}),e.jsx(n.td,{children:"Variable business logic"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Reusable across products as-is"}),e.jsx(n.td,{children:"Product-specific implementations"})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.strong,{children:"Examples:"})," Button, Modal, Tag"]}),e.jsxs(n.td,{children:[e.jsx(n.strong,{children:"Examples:"})," CreateTearsheet, APIKeyModal"]})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"how-prebuilt-patterns-and-patterns-differ",children:"How prebuilt patterns and patterns differ"}),`
`,e.jsx(n.p,{children:`Prebuilt patterns can be useful, containing a number of features built-in.
However, prebuilt patterns have stricter APIs and may have limited flexibility.
Many of our patterns include "recipes" that list the components used to deliver
the pattern. These are often provided as example code that you can adopt or
extend further for your own use case.`}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{}),e.jsxs(n.th,{children:["Prebuilt pattern (e.g. ",e.jsx(n.code,{children:"APIKeyModal"}),")"]}),e.jsxs(n.th,{children:["Pattern (e.g. ",e.jsx(n.code,{children:"GenerateAnAPIKey"}),")"]})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Ownership"})}),e.jsx(n.td,{children:"Library-owned, versioned API"}),e.jsx(n.td,{children:"Your codebase — you control every line"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Flexibility"})}),e.jsx(n.td,{children:"Fixed prop surface"}),e.jsx(n.td,{children:"Fully composable"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Breaking changes"})}),e.jsx(n.td,{children:"Yes — next major removes it"}),e.jsx(n.td,{children:"None — you copied it"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Customization"})}),e.jsx(n.td,{children:"Props only"}),e.jsx(n.td,{children:"Direct code changes"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Bundle"})}),e.jsx(n.td,{children:"Includes all use-cases whether used or not"}),e.jsx(n.td,{children:"Include only what you need"})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"affected-components-and-their-pattern-equivalents",children:"Affected components and their pattern equivalents"}),`
`,e.jsx(n.h3,{id:"confirmed-for-deprecation",children:"Confirmed for deprecation"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prebuilt pattern"}),e.jsx(n.th,{children:"Equivalent pattern"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"APIKeyModal"})}),e.jsx(n.td,{children:e.jsx(t,{title:"Patterns/Generate an API key",name:"Overview",children:"Generate an API key"})})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Create flows ",e.jsx(n.code,{children:"CreateFullPage"})]}),e.jsx(n.td,{children:e.jsx(t,{title:"Patterns/Create flows/Create Full Page",name:"Overview",children:"Create Full Page"})})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Create flows ",e.jsx(n.code,{children:"CreateModal"})]}),e.jsx(n.td,{children:e.jsx(t,{title:"Patterns/Create flows/Create Modal",name:"Overview",children:"Create Modal"})})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Create flows ",e.jsx(n.code,{children:"CreateSidePanel"})]}),e.jsx(n.td,{children:"—"})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Create flows ",e.jsx(n.code,{children:"CreateTearsheet"})]}),e.jsx(n.td,{children:e.jsx(t,{title:"Patterns/Create flows/CreateTearsheet",name:"Overview",children:"CreateTearsheet"})})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Create flows ",e.jsx(n.code,{children:"CreateTearsheetNarrow"})]}),e.jsx(n.td,{children:e.jsx(t,{title:"Patterns/Create flows/CreateTearsheetNarrow",name:"Overview",children:"CreateTearsheetNarrow"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"ExportModal"})}),e.jsx(n.td,{children:e.jsx(t,{title:"Patterns/Export Modal",name:"Overview",children:"Export Modal"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"ImportModal"})}),e.jsx(n.td,{children:e.jsx(t,{title:"Patterns/Import And Upload",name:"Overview",children:"Import and Upload"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Delete and remove"})}),e.jsx(n.td,{children:e.jsx(t,{title:"Patterns/Delete and remove",name:"Overview",children:"Delete and remove"})})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Add and select ",e.jsx(n.code,{children:"MultiAddSelect"})]}),e.jsx(n.td,{children:e.jsx(t,{title:"Patterns/Add and select/MultiAddSelect",name:"Overview",children:"Multi AddSelect"})})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Add and select ",e.jsx(n.code,{children:"SingleAddSelect"})]}),e.jsx(n.td,{children:e.jsx(t,{title:"Patterns/Add and select/SingleAddSelect",name:"Overview",children:"Single AddSelect"})})]})]})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"}),` Add and select patterns are built using the new
`,e.jsx(n.a,{href:"https://carbon-for-ibm-products.netlify.app/?path=/docs/preview-add-and-select--overview",rel:"nofollow",children:"AddSelect"}),`
component.`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"how-to-migrate--general-process",children:"How to migrate — general process"}),`
`,e.jsx(n.p,{children:`The general process is the same for every prebuilt pattern. The specifics (file
names, props, any extra providers) are in each pattern's own detailed migration
guide, linked from the table above.`}),`
`,e.jsx(n.h3,{id:"step-1--read-the-patterns-migration-guide",children:"Step 1 — Read the pattern's migration guide"}),`
`,e.jsxs(n.p,{children:["Each pattern's Storybook documentation page has a ",e.jsxs(n.strong,{children:[`Migrating from
`,e.jsx(n.code,{children:"<OldComponent>"})]}),` section with a complete prop-mapping reference and
before/after code examples for every supported use case. Start there. See the
two concrete examples further down this page.`]}),`
`,e.jsx(n.h3,{id:"step-2--copy-the-pattern-files",children:"Step 2 — Copy the pattern files"}),`
`,e.jsxs(n.p,{children:["Navigate to the pattern's ",e.jsx(n.code,{children:"example/components/"}),` directory on GitHub and copy the
files into your project:`]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Pattern"}),e.jsx(n.th,{children:"Files to copy"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"GenerateAnAPIKey"})}),e.jsxs(n.td,{children:[e.jsx(n.a,{href:"https://github.com/carbon-design-system/ibm-products/tree/main/packages/ibm-products/src/patterns/GenerateAnAPIKey/example/components",rel:"nofollow",children:e.jsx(n.code,{children:"example/components/"})})," — ",e.jsx(n.code,{children:"GenerateAnAPIKey.tsx"}),", ",e.jsx(n.code,{children:"APIKeyDownloader.tsx"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"CreateTearsheet"})}),e.jsxs(n.td,{children:[e.jsx(n.a,{href:"https://github.com/carbon-design-system/ibm-products/tree/main/packages/ibm-products/src/patterns/CreateTearsheet/example/components",rel:"nofollow",children:e.jsx(n.code,{children:"example/components/"})})," — ",e.jsx(n.code,{children:"CreateTearsheet.tsx"}),", ",e.jsx(n.code,{children:"CreateTearsheetStep.tsx"}),", ",e.jsx(n.code,{children:"CreateTearsheetContext.tsx"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Others"}),e.jsxs(n.td,{children:["Check each pattern's ",e.jsx(n.code,{children:"example/components/"})," directory"]})]})]})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`mkdir -p src/patterns/<PatternName>
# Copy the files listed above into that directory
`})}),`
`,e.jsxs(n.p,{children:[`Alternatively, open the StackBlitz example, download the project, and copy the
`,e.jsx(n.code,{children:"components"})," folder."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:["Do not copy ",e.jsx(n.code,{children:"preview-components/"})]}),` — see the
`,e.jsx(n.a,{href:"#a-note-on-preview-components",children:"note below"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"step-3--install-any-new-dependencies",children:"Step 3 — Install any new dependencies"}),`
`,e.jsxs(n.p,{children:["Check the pattern's ",e.jsx(n.code,{children:"example/package.json"}),` for its dependency list. Most
patterns only need `,e.jsx(n.code,{children:"@carbon/react"}),`, which you likely already have. Some patterns
(e.g. `,e.jsx(n.code,{children:"CreateTearsheet"}),") also need ",e.jsx(n.code,{children:"@carbon/utilities-react"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @carbon/utilities-react
# or
yarn add @carbon/utilities-react
`})}),`
`,e.jsx(n.h3,{id:"step-4--update-imports",children:"Step 4 — Update imports"}),`
`,e.jsx(n.p,{children:"Replace the package import with a relative import pointing to your copied files:"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Before:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { SomePrebuiltPattern } from '@carbon/ibm-products';
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"After:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { SomePattern } from './patterns/SomePattern/SomePattern';
`})}),`
`,e.jsx(n.h3,{id:"step-5--replace-props-with-composed-children",children:"Step 5 — Replace props with composed children"}),`
`,e.jsxs(n.p,{children:["The biggest shift is that the pattern's ",e.jsx(n.strong,{children:`internal content is no longer driven
by props`})," — you render it directly as JSX ",e.jsx(n.code,{children:"children"}),". Concretely:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Input fields controlled by ",e.jsx(n.code,{children:"nameLabel"})," / ",e.jsx(n.code,{children:"namePlaceholder"})," / ",e.jsx(n.code,{children:"nameRequired"}),` →
render your own `,e.jsx(n.code,{children:"<TextInput>"})," inside ",e.jsx(n.code,{children:"children"})]}),`
`,e.jsxs(n.li,{children:["Error/success messages controlled by ",e.jsx(n.code,{children:"errorText"})," / ",e.jsx(n.code,{children:"generateSuccessMessage"}),` →
render `,e.jsx(n.code,{children:"<ErrorFilled>"})," / ",e.jsx(n.code,{children:"<CheckmarkFilled>"})," + ",e.jsx(n.code,{children:"<p>"})," inside ",e.jsx(n.code,{children:"children"}),` based
on local state`]}),`
`,e.jsxs(n.li,{children:["A download link controlled by ",e.jsx(n.code,{children:"hasDownloadLink"}),` + several download props →
render `,e.jsx(n.code,{children:"<APIKeyDownloader>"})," directly inside ",e.jsx(n.code,{children:"children"})]}),`
`,e.jsxs(n.li,{children:["Loading state controlled by a ",e.jsx(n.code,{children:"loading"})," boolean → render ",e.jsx(n.code,{children:"<InlineLoading>"}),`
inside `,e.jsx(n.code,{children:"children"}),"; gate the submit button via ",e.jsx(n.code,{children:"primaryButtonDisabled"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Each pattern's own migration guide maps every old prop to its replacement."}),`
`,e.jsx(n.h3,{id:"step-6--test-your-implementation",children:"Step 6 — Test your implementation"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"✅ Pattern opens and closes correctly"}),`
`,e.jsx(n.li,{children:"✅ Primary action (generate / submit / copy / save) fires correctly"}),`
`,e.jsx(n.li,{children:"✅ Loading and success states display as expected"}),`
`,e.jsx(n.li,{children:"✅ Error states display and recover correctly"}),`
`,e.jsx(n.li,{children:"✅ Pattern resets properly when closed and re-opened"}),`
`,e.jsx(n.li,{children:"✅ Accessibility: focus moves to the correct element on open and close"}),`
`]}),`
`,e.jsx(n.h3,{id:"step-7--customize-optional",children:"Step 7 — Customize (optional)"}),`
`,e.jsx(n.p,{children:"Because you own the code, any customization is a direct edit:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// Change validation logic freely
const isSubmitDisabled =
  loading || !requiredField || someProductSpecificCheck();

// Add extra fields, swap components, restructure the layout — no prop workarounds needed
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"example-apikeymodal--generateanapikey",children:["Example: ",e.jsx(n.code,{children:"APIKeyModal"})," → ",e.jsx(n.code,{children:"GenerateAnAPIKey"})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[`Full prop-by-prop reference is in the
`,e.jsx(n.a,{href:"?path=/docs/patterns-generate-an-api-key--overview",children:"Generate an API key pattern documentation"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"what-changed",children:"What changed"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{}),e.jsx(n.th,{children:e.jsx(n.code,{children:"APIKeyModal"})}),e.jsxs(n.th,{children:[e.jsx(n.code,{children:"GenerateAnAPIKey"})," pattern"]})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Import"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"@carbon/ibm-products"})}),e.jsxs(n.td,{children:["Your copied ",e.jsx(n.code,{children:"./patterns/GenerateAnAPIKey/GenerateAnAPIKey"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Close handler"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"onClose"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"onRequestClose"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Title"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"generateTitle"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"modalHeading"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Generate button"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"generateButtonText"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"primaryButtonText"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Close button"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"closeButtonText"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"secondaryButtonText"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Loading"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"loading"})," boolean + ",e.jsx(n.code,{children:"loadingText"})]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"loadingStatus"})," (",e.jsx(n.code,{children:"'inactive'"}),"/",e.jsx(n.code,{children:"'active'"}),"/",e.jsx(n.code,{children:"'finished'"}),") + ",e.jsx(n.code,{children:"loadingDescription"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Name field"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"nameRequired"}),", ",e.jsx(n.code,{children:"nameLabel"}),", ",e.jsx(n.code,{children:"nameHelperText"}),", ",e.jsx(n.code,{children:"namePlaceholder"})]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"<TextInput>"})," rendered in ",e.jsx(n.code,{children:"children"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Key display"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"apiKeyLabel"}),", ",e.jsx(n.code,{children:"hasAPIKeyVisibilityToggle"}),", ",e.jsx(n.code,{children:"helperText"})]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"<PasswordInput>"})," rendered in ",e.jsx(n.code,{children:"children"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Success message"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"generateSuccessMessage"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"<p>"})," rendered in ",e.jsx(n.code,{children:"children"})," when key is set"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Error message"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"error"}),", ",e.jsx(n.code,{children:"errorText"})]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"<ErrorFilled>"})," + ",e.jsx(n.code,{children:"<p>"})," rendered in ",e.jsx(n.code,{children:"children"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Download link"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"hasDownloadLink"})," + 5 props"]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"<APIKeyDownloader>"})," rendered in ",e.jsx(n.code,{children:"children"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Edit mode"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"editing"}),", ",e.jsx(n.code,{children:"editButtonText"}),", ",e.jsx(n.code,{children:"editSuccess"}),", ",e.jsx(n.code,{children:"editSuccessMessage"})]}),e.jsxs(n.td,{children:["Same component; render edit ",e.jsx(n.code,{children:"children"})," + use ",e.jsx(n.code,{children:'primaryButtonText="Save"'})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Multi-step"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"customSteps"})," array"]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"customSteps"})," array — ",e.jsx(n.strong,{children:"shape unchanged"})]})]})]})]}),`
`,e.jsx(n.h3,{id:"generate-flow--before-and-after",children:"Generate flow — before and after"}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["Before — ",e.jsx(n.code,{children:"APIKeyModal"}),":"]})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { APIKeyModal } from '@carbon/ibm-products';

const [open, setOpen] = useState(false);
const [loading, setLoading] = useState(false);
const [apiKey, setApiKey] = useState('');

<APIKeyModal
  open={open}
  onClose={() => {
    setApiKey('');
    setLoading(false);
    setOpen(false);
  }}
  generateTitle="Generate an API key"
  modalLabel="API keys"
  generateButtonText="Generate API key"
  copyButtonText="Copy"
  copyIconDescription="Copy to clipboard"
  closeButtonText="Close"
  nameRequired
  nameLabel="Name your application"
  namePlaceholder="Application name"
  nameHelperText="This name will help you identify your API key later."
  loading={loading}
  loadingText="Generating..."
  apiKey={apiKey}
  apiKeyLabel="Unique API key"
  hasAPIKeyVisibilityToggle
  helperText="This is your unique API key and is non-recoverable."
  showAPIKeyLabel="Show key"
  hideAPIKeyLabel="Hide key"
  generateSuccessMessage="API key successfully created"
  hasDownloadLink
  downloadBodyText="Download your API key."
  downloadFileName="apikey"
  downloadFileType="json"
  downloadLinkText="Download as JSON"
  downloadLinkLabel="Download API Key as JSON"
  onRequestGenerate={async (name) => {
    setLoading(true);
    const key = await myAPI.generate(name);
    setApiKey(key);
    setLoading(false);
  }}
/>;
`})}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["After — ",e.jsx(n.code,{children:"GenerateAnAPIKey"})," pattern:"]})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { GenerateAnAPIKey } from './patterns/GenerateAnAPIKey/GenerateAnAPIKey';
import { APIKeyDownloader } from './patterns/GenerateAnAPIKey/APIKeyDownloader';
import { PasswordInput, TextInput, InlineLoading } from '@carbon/react';
import { InformationFilled, CheckmarkFilled } from '@carbon/react/icons';

const [open, setOpen] = useState(false);
const [loading, setLoading] = useState(false);
const [apiKey, setApiKey] = useState('');
const [name, setName] = useState('');
const blockClass = 'apikey-modal-pattern';

const handleClose = () => {
  setApiKey('');
  setName('');
  setLoading(false);
  setOpen(false);
};

// Props switch once the key arrives
const modalProps = apiKey
  ? {
      modalHeading: 'Generate an API key',
      primaryButtonText: 'Copy',
      onRequestSubmit: () => navigator.clipboard.writeText(apiKey),
      apiKeyLoaded: true,
      apiKey,
      copyIconDescription: 'Copy to clipboard',
    }
  : {
      modalHeading: 'Generate an API key',
      primaryButtonText: 'Generate API key',
      onRequestSubmit: async () => {
        setLoading(true);
        setApiKey(await myAPI.generate(name));
        setLoading(false);
      },
      apiKeyLoaded: false,
    };

<GenerateAnAPIKey
  open={open}
  onRequestClose={handleClose}
  modalLabel="API keys"
  secondaryButtonText="Close"
  primaryButtonDisabled={loading || (!apiKey && name.length === 0)}
  loadingDescription="Generating..."
  {...modalProps}
>
  {apiKey ? (
    <>
      <PasswordInput
        id="generated-api-key"
        labelText="Unique API key"
        value={apiKey}
        readOnly
        showPasswordLabel="Show key"
        hidePasswordLabel="Hide key"
        tooltipPosition="left"
        helperText="This is your unique API key and is non-recoverable."
      />
      <div className={\`\${blockClass}__messaging\`}>
        <InformationFilled size={16} />
        <APIKeyDownloader
          apiKey={apiKey}
          body="Download your API key."
          fileName="apikey"
          fileType="json"
          linkText="Download as JSON"
          downloadLinkLabel="Download API Key as JSON"
        />
      </div>
      <div className={\`\${blockClass}__messaging\`}>
        <CheckmarkFilled
          size={16}
          className={\`\${blockClass}__checkmark-icon\`}
        />
        <p
          className={\`\${blockClass}__messaging-text\`}
          role="alert"
          aria-live="assertive"
        >
          API key successfully created
        </p>
      </div>
    </>
  ) : (
    <>
      <p style={{ marginBlockEnd: '1rem' }}>
        To connect securely to [product name], your application needs an API
        key.
      </p>
      <TextInput
        id="app-name"
        labelText="Name your application"
        placeholder="Application name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={loading}
        helperText="This name will help you identify your API key later."
        data-modal-primary-focus
      />
      {loading && (
        <InlineLoading
          description="Generating..."
          className={\`\${blockClass}__loader\`}
        />
      )}
    </>
  )}
</GenerateAnAPIKey>;
`})}),`
`,e.jsx(n.h3,{id:"edit-flow--before-and-after",children:"Edit flow — before and after"}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["Before — ",e.jsx(n.code,{children:"APIKeyModal"}),":"]})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<APIKeyModal
  open={open}
  onClose={() => setOpen(false)}
  generateTitle="Save an API key"
  editButtonText="Save API key"
  closeButtonText="Close"
  editing
  apiKeyName={currentKeyName}
  nameRequired
  nameLabel="Name your application"
  loading={loading}
  loadingText="Saving..."
  editSuccess={success}
  editSuccessMessage="API key successfully saved"
  onRequestEdit={async (name) => {
    setLoading(true);
    await myAPI.edit(name);
    setLoading(false);
    setSuccess(true);
  }}
/>
`})}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["After — ",e.jsx(n.code,{children:"GenerateAnAPIKey"})," pattern:"]})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// There is no \`editing\` prop — edit is the same component with different children.
const [name, setName] = useState(currentKeyName);
const [success, setSuccess] = useState(false);

<GenerateAnAPIKey
  open={open}
  onRequestClose={() => {
    setName(currentKeyName);
    setSuccess(false);
    setOpen(false);
  }}
  onRequestSubmit={async () => {
    setLoading(true);
    await myAPI.edit(name);
    setLoading(false);
    setSuccess(true);
  }}
  modalHeading="Save an API key"
  primaryButtonText="Save API key"
  secondaryButtonText="Close"
  primaryButtonDisabled={loading || name.length === 0}
  loadingStatus={success ? 'finished' : loading ? 'active' : 'inactive'}
  loadingDescription="Saving..."
>
  <TextInput
    id="edit-app-name"
    labelText="Name your application"
    value={name}
    onChange={(e) => {
      setSuccess(false);
      setName(e.target.value);
    }}
    disabled={loading}
    data-modal-primary-focus
  />
  {loading && <InlineLoading description="Saving..." />}
  {success && (
    <div className={\`\${blockClass}__messaging\`}>
      <CheckmarkFilled size={20} className={\`\${blockClass}__checkmark-icon\`} />
      <p
        className={\`\${blockClass}__messaging-text\`}
        role="alert"
        aria-live="assertive"
      >
        API key successfully saved
      </p>
    </div>
  )}
</GenerateAnAPIKey>;
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"example-createtearsheet--createtearsheet-pattern",children:["Example: ",e.jsx(n.code,{children:"CreateTearsheet"})," → ",e.jsx(n.code,{children:"CreateTearsheet"})," pattern"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[`Full prop-by-prop reference is in the
`,e.jsx(n.a,{href:"?path=/docs/patterns-create-flows-createtearsheet--overview",children:"CreateTearsheet pattern documentation"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"what-changed-1",children:"What changed"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{}),e.jsxs(n.th,{children:[e.jsx(n.code,{children:"CreateTearsheet"})," (old)"]}),e.jsxs(n.th,{children:[e.jsx(n.code,{children:"CreateTearsheet"})," pattern"]})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Import"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"@carbon/ibm-products"})}),e.jsxs(n.td,{children:["Your copied ",e.jsx(n.code,{children:"./patterns/CreateTearsheet/CreateTearsheet"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Required wrapper"})}),e.jsx(n.td,{children:"None"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"<StepProvider>"})," from ",e.jsx(n.code,{children:"@carbon/utilities-react"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Open state setter"})}),e.jsx(n.td,{children:"Not needed"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"setOpen"})," prop required (to close after submit)"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Step state / form state"})}),e.jsx(n.td,{children:"Managed internally"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"useStepContext()"})," hook from ",e.jsx(n.code,{children:"@carbon/utilities-react"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Validation per step"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"disableSubmit"})," on ",e.jsx(n.code,{children:"<CreateTearsheetStep>"})]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"handleNextDisabledState(formState, currentStep)"})," callback on ",e.jsx(n.code,{children:"<CreateTearsheet>"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Next-step async hook"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"onNext"})," on ",e.jsx(n.code,{children:"<CreateTearsheetStep>"})]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"onNext({ currentStep, totalSteps, formState })"})," on ",e.jsx(n.code,{children:"<CreateTearsheet>"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Button labels"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"backButtonText"}),", ",e.jsx(n.code,{children:"cancelButtonText"}),", ",e.jsx(n.code,{children:"nextButtonText"}),", ",e.jsx(n.code,{children:"submitButtonText"})]}),e.jsx(n.td,{children:e.jsx(n.strong,{children:"Unchanged"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Influencer"})}),e.jsxs(n.td,{children:["Always vertical ",e.jsx(n.code,{children:"CreateInfluencer"})]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"progressIndicator='vertical'"})," (default) or ",e.jsx(n.code,{children:"'horizontal'"}),"; fully overridable via ",e.jsx(n.code,{children:"influencer"})," render prop"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Progress indicator"})}),e.jsxs(n.td,{children:["Auto-built from step ",e.jsx(n.code,{children:"title"})]}),e.jsxs(n.td,{children:["Auto-built from step ",e.jsx(n.code,{children:"label"})," / ",e.jsx(n.code,{children:"title"}),"; hidden per step via ",e.jsx(n.code,{children:"hideSteps"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Intro step"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"introStep"})," prop on step"]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"hideSteps"})," prop on step (hides it from progress indicator)"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Dynamic / conditional steps"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"shouldIncludeStep"})," on step"]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"includeStep"})," on step — ",e.jsx(n.strong,{children:"renamed"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Error state"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"hasError"})," on ",e.jsx(n.code,{children:"<CreateTearsheet>"})]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"hasError"})," on ",e.jsx(n.code,{children:"<CreateTearsheet>"})," — ",e.jsx(n.strong,{children:"unchanged"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Step secondary label"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"secondaryLabel"})," on step"]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"secondaryLabel"})," on step — ",e.jsx(n.strong,{children:"unchanged"})]})]})]})]}),`
`,e.jsx(n.h3,{id:"multi-step-flow--before-and-after",children:"Multi-step flow — before and after"}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["Before — ",e.jsx(n.code,{children:"CreateTearsheet"})," (old component):"]})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { CreateTearsheet, CreateTearsheetStep } from '@carbon/ibm-products';

const [open, setOpen] = useState(false);

<CreateTearsheet
  open={open}
  onClose={() => setOpen(false)}
  title="Create topic"
  description="Create a Kafka topic."
  label="Topics"
  backButtonText="Back"
  cancelButtonText="Cancel"
  nextButtonText="Next"
  submitButtonText="Create"
  onRequestSubmit={async () => {
    await myAPI.create(formData);
    setOpen(false);
  }}
  hasError={hasSubmitError}
>
  <CreateTearsheetStep
    title="Topic name"
    subtitle="This is the unique name used to recognize your topic"
    fieldsetLegendText="Topic information"
    disableSubmit={!topicName}
  >
    <TextInput
      id="topic-name"
      labelText="Topic name"
      value={topicName}
      onChange={(e) => setTopicName(e.target.value)}
    />
  </CreateTearsheetStep>

  <CreateTearsheetStep
    title="Partitions"
    fieldsetLegendText="Partition information"
  >
    <NumberInput
      id="partitions"
      value={partitions}
      min={1}
      max={100}
      onChange={(e) => setPartitions(e.imaginaryTarget.value)}
    />
  </CreateTearsheetStep>
</CreateTearsheet>;
`})}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["After — ",e.jsx(n.code,{children:"CreateTearsheet"})," pattern:"]})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { CreateTearsheet } from './patterns/CreateTearsheet/CreateTearsheet';
import { CreateTearsheetStep } from './patterns/CreateTearsheet/CreateTearsheetStep';
import { StepProvider, useStepContext } from '@carbon/utilities-react';

// Form state now lives in StepProvider's context — read/write with useStepContext()
const TopicNameStep = () => {
  const { formState, setFormState } = useStepContext();
  return (
    <CreateTearsheetStep
      title="Topic name"
      subtitle="This is the unique name used to recognize your topic"
      fieldsetLegendText="Topic information"
      // validation is handled at the container level via handleNextDisabledState
    >
      <TextInput
        id="topic-name"
        labelText="Topic name"
        value={formState?.topicName || ''}
        onChange={(e) => setFormState((prev) => ({ ...prev, topicName: e.target.value }))}
      />
    </CreateTearsheetStep>
  );
};

const PartitionsStep = () => {
  const { formState, setFormState } = useStepContext();
  return (
    <CreateTearsheetStep title="Partitions" fieldsetLegendText="Partition information">
      <NumberInput
        id="partitions"
        value={formState?.partitions ?? 1}
        min={1}
        max={100}
        onChange={(e) => setFormState((prev) => ({ ...prev, partitions: e.imaginaryTarget.value }))}
      />
    </CreateTearsheetStep>
  );
};

// ─── Parent component ────────────────────────────────────────────────────────
const [open, setOpen] = useState(false);

// Validation callback receives shared formState and current step index
const handleNextDisabledState = (formState, currentStep) => {
  if (currentStep === 1 && !formState?.topicName) return true;
  return false;
};

<StepProvider>                           {/* ← new required wrapper */}
  <CreateTearsheet
    open={open}
    setOpen={setOpen}                    {/* ← new: required to close on submit */}
    onClose={() => setOpen(false)}
    title="Create topic"
    description="Create a Kafka topic."
    label="Topics"
    backButtonText="Back"
    cancelButtonText="Cancel"
    nextButtonText="Next"
    submitButtonText="Create"
    onRequestSubmit={async () => {
      await myAPI.create(formState);
      // returning nothing causes the tearsheet to close automatically
    }}
    hasError={hasSubmitError}
    handleNextDisabledState={handleNextDisabledState}
  >
    <TopicNameStep />
    <PartitionsStep />
  </CreateTearsheet>
</StepProvider>
`})}),`
`,e.jsx(n.h3,{id:"intro-step-hidesteps--before-and-after",children:"Intro step (hideSteps) — before and after"}),`
`,e.jsx(n.p,{children:`An intro step is a step that is excluded from the progress indicator but still
participates in navigation.`}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Before:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<CreateTearsheetStep
  title="Select a category"
  introStep // ← old prop
>
  <TileGroup>{/* category tiles */}</TileGroup>
</CreateTearsheetStep>
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"After:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<CreateTearsheetStep
  title="Select a category"
  hideSteps // ← renamed
  hasFieldset={false}
>
  <TileGroup>{/* category tiles */}</TileGroup>
</CreateTearsheetStep>
`})}),`
`,e.jsx(n.h3,{id:"conditional--dynamic-step--before-and-after",children:"Conditional / dynamic step — before and after"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Before:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<CreateTearsheetStep
  title="Advanced options"
  shouldIncludeStep={showAdvanced} // ← old prop
>
  {/* fields */}
</CreateTearsheetStep>
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"After:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<CreateTearsheetStep
  title="Advanced options"
  includeStep={showAdvanced} // ← renamed
>
  {/* fields */}
</CreateTearsheetStep>
`})}),`
`,e.jsx(n.h3,{id:"reading-form-state-across-steps",children:"Reading form state across steps"}),`
`,e.jsxs(n.p,{children:["The new pattern exposes a shared ",e.jsx(n.code,{children:"formState"})," object via ",e.jsx(n.code,{children:"useStepContext()"}),`. Read
from it in any step component and write to it with the `,e.jsx(n.code,{children:"setFormState"})," updater:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { useStepContext } from '@carbon/utilities-react';

const MyStep = () => {
  const { formState, setFormState } = useStepContext();

  return (
    <CreateTearsheetStep title="Details">
      <TextInput
        id="name"
        labelText="Name"
        value={formState?.name || ''}
        onChange={(e) =>
          setFormState((prev) => ({ ...prev, name: e.target.value }))
        }
      />
    </CreateTearsheetStep>
  );
};
`})}),`
`,e.jsxs(n.p,{children:["Access ",e.jsx(n.code,{children:"formState"})," in the ",e.jsx(n.code,{children:"onRequestSubmit"}),` handler via closure or by lifting it
out of `,e.jsx(n.code,{children:"useStepContext()"}),` at the parent level (since the parent is also inside
`,e.jsx(n.code,{children:"<StepProvider>"}),")."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"a-note-on-preview-components",children:["A note on ",e.jsx(n.code,{children:"preview-components"})]}),`
`,e.jsxs(n.p,{children:["Inside each pattern's ",e.jsx(n.code,{children:"example/"})," folder you will find two sub-directories:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`example/
├── components/          ← copy these into your project
└── preview-components/  ← do NOT copy these
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"preview-components/"})," exist ",e.jsx(n.strong,{children:"purely for Storybook"}),`. Each file is a
self-contained demo wrapper that wires up local state, simulates an async API
call, and renders a trigger `,e.jsx(n.code,{children:"<Button>"}),` so the story can be interactive in
isolation.`]}),`
`,e.jsxs(n.p,{children:["They were written specifically to achieve ",e.jsx(n.strong,{children:"visual and functional parity"}),` with
the deprecated prebuilt pattern stories — every story variant that existed on
the old component has a matching preview component in the pattern, so reviewers
can compare the two side-by-side during migration.`]}),`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:["Do not copy ",e.jsx(n.code,{children:"preview-components/"})," into your application."]}),` They are demo
scaffolding, not production code. The files you want are in `,e.jsx(n.code,{children:"components/"}),"."]}),`
`,e.jsx(n.hr,{})]})}s(i,"_createMdxContent");function x(r={}){const{wrapper:n}={...d(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}s(x,"MDXContent");export{x as default};
//# sourceMappingURL=Overview-gjcV0zTp.js.map
