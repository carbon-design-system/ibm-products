var l=Object.defineProperty;var t=(s,e)=>l(s,"name",{value:e,configurable:!0});import{u as r,j as n,M as c}from"./iframe-D_TgCArL.js";import"./preload-helper-Cc2_yIPf.js";function i(s){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"Patterns/Add and select/Overview"}),`
`,n.jsx(e.h1,{id:"add-and-select-patterns",children:"Add and select patterns"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage/",rel:"nofollow",children:"Usage guidelines"})}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsx(e.p,{children:`The Add and select patterns provide complete, production-ready implementations
for selection workflows in IBM products. These patterns combine Carbon
components with IBM Products components to create cohesive user experiences.`}),`
`,n.jsx(e.h2,{id:"available-patterns",children:"Available patterns"}),`
`,n.jsx(e.h3,{id:"singleaddselect",children:"SingleAddSelect"}),`
`,n.jsx(e.p,{children:`A complete pattern for single-selection workflows with hierarchical navigation,
breadcrumbs, and success notifications.`}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Use when:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Users need to select exactly one item"}),`
`,n.jsx(e.li,{children:"Items are organized in a hierarchical structure"}),`
`,n.jsx(e.li,{children:"Navigation through categories is required"}),`
`,n.jsx(e.li,{children:"Selection requires a modal/tearsheet interface"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"/docs/patterns-add-and-select-singleaddselect--overview",children:"View SingleAddSelect →"})}),`
`,n.jsx(e.h3,{id:"multiaddselect",children:"MultiAddSelect"}),`
`,n.jsx(e.p,{children:`A complete pattern for multi-selection workflows with Tearsheet, selection
summary, and success notifications.`}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Use when:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Users need to select multiple items from a list"}),`
`,n.jsx(e.li,{children:"Selection requires a modal/tearsheet interface"}),`
`,n.jsx(e.li,{children:"You need real-time selection feedback"}),`
`,n.jsx(e.li,{children:"Success confirmation is important"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"/docs/patterns-add-and-select-multiaddselect--overview",children:"View MultiAddSelect →"})}),`
`,n.jsx(e.h2,{id:"pattern-philosophy",children:"Pattern philosophy"}),`
`,n.jsxs(e.p,{children:["These patterns are ",n.jsx(e.strong,{children:"copy-paste ready"})," - they include everything you need:"]}),`
`,n.jsxs(e.p,{children:["✅ ",n.jsx(e.strong,{children:"Complete implementations"}),` - Tearsheet, AddSelect, Toast notifications, and
all interaction logic`,n.jsx(e.br,{}),`
`,"✅ ",n.jsx(e.strong,{children:"Production-ready"})," - Fully tested, accessible, and responsive",n.jsx(e.br,{}),`
`,"✅ ",n.jsx(e.strong,{children:"Customizable"})," - Easy to adapt to your specific use case",n.jsx(e.br,{}),`
`,"✅ ",n.jsx(e.strong,{children:"Well-documented"})," - Clear API and usage examples"]}),`
`,n.jsx(e.h2,{id:"how-to-use",children:"How to use"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Copy the component file"})," from ",n.jsx(e.code,{children:"example/components/"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Import and use"})," in your application"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Customize props"})," to match your requirements"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Style as needed"})," using Carbon tokens"]}),`
`]}),`
`,n.jsx(e.h2,{id:"file-structure",children:"File structure"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`patterns/AddSelect/
├── example/
│   ├── components/           # 🎯 COPY-PASTE READY CODE
│   │   ├── MultiAddSelect.tsx
│   │   └── SingleAddSelect.tsx
│   └── preview-components/   # Demo wrappers (for Storybook only)
│       ├── MultiAddSelectDefault.tsx
│       └── SingleAddSelectDefault.tsx
├── MultiAddSelect/
│   ├── MultiAddSelect.stories.jsx
│   └── MultiAddSelect.mdx
└── SingleAddSelect/
    ├── SingleAddSelect.stories.jsx
    └── SingleAddSelect.mdx
`})}),`
`,n.jsx(e.h2,{id:"components-used",children:"Components used"}),`
`,n.jsx(e.p,{children:"These patterns are built using:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Tearsheet"})," - Modal container"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"AddSelect"})," - Core selection component"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Button"})," - Action triggers"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"ToastNotification"})," - Success feedback"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"NoDataEmptyState"})," - Empty states"]}),`
`]}),`
`,n.jsx(e.h2,{id:"best-practices",children:"Best practices"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Choose the right pattern"}),` - Multi for bulk operations, Single for category
selection`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Customize labels"})," - Update all text to match your domain language"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Handle callbacks"})," - Always implement ",n.jsx(e.code,{children:"onSubmit"})," to process selections"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Test with real data"}),` - Ensure patterns work with your actual data
structure`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Consider performance"}),` - For large datasets, implement pagination or
virtualization`]}),`
`]}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsx(e.p,{children:"Both patterns include:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Full keyboard navigation"}),`
`,n.jsx(e.li,{children:"ARIA attributes for screen readers"}),`
`,n.jsx(e.li,{children:"Focus management"}),`
`,n.jsx(e.li,{children:"Semantic HTML structure"}),`
`,n.jsx(e.li,{children:"High contrast support"}),`
`]}),`
`,n.jsx(e.h2,{id:"example-usage",children:"Example usage"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[`💡 Check our
`,n.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products/src/patterns/AddSelect/example",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products/src/patterns/AddSelect/example",rel:"nofollow",children:n.jsx(e.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit react-patterns"})})}),`
`,n.jsx(e.h2,{id:"related-resources",children:"Related resources"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"/docs/preview-add-and-select--overview",children:"AddSelect Component"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"/docs/preview-tearsheet--overview",children:"Tearsheet Component"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://carbondesignsystem.com",rel:"nofollow",children:"Carbon Design System"})}),`
`]}),`
`,n.jsx(e.h2,{id:"support",children:"Support"}),`
`,n.jsx(e.p,{children:"For questions or issues:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/carbon-design-system/ibm-products/issues",rel:"nofollow",children:"GitHub Issues"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://ibm.enterprise.slack.com/archives/CQGR0HC05",rel:"nofollow",children:"Carbon for IBM Products Slack"})}),`
`]})]})}t(i,"_createMdxContent");function h(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}t(h,"MDXContent");export{h as default};
//# sourceMappingURL=AddSelectOverview-CF31uOSa.js.map
