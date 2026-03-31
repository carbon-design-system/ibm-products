import{j as e,M as r,C as d,A as i}from"./blocks-C5gY99bq.js";import{useMDXComponents as o}from"./index-B5-v5Qtp.js";import{G as l,D as a}from"./guide-banner.stories-BJAwYFi1.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-LTWq63Dx.js";import"./repeat-D6AUC9B7.js";import"./class-map-DX35lnv2.js";import"./guide-banner-element-CKe9uwjy.js";import"./button-D37mKeLy.js";import"./button-skeleton-B3koeCDo.js";import"./16-D5maUdCH.js";import"./20-CppOV_ea.js";import"./icon-loader-DWmlJi0p.js";function s(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsx(n.h1,{id:"guidebanner",children:"GuideBanner"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:"The GuideBanner component is a collapsible banner that provides guidance or information to users. It features a horizontal scrollable list of guide elements with navigation controls, and can be expanded or collapsed to show or hide detailed content."}),`
`,e.jsx(n.h4,{id:"component-dependencies",children:"Component Dependencies"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"c4p-guide-banner-element"})," for individual guide items within the banner"]}),`
`]}),`
`,e.jsx(n.h4,{id:"guide-banner-element",children:"Guide Banner Element"}),`
`,e.jsxs(n.p,{children:["Each guide item is rendered using the ",e.jsx(n.code,{children:"c4p-guide-banner-element"})," component. It supports:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Title slot for the guide item heading"}),`
`,e.jsx(n.li,{children:"Description slot for detailed information"}),`
`,e.jsx(n.li,{children:"Default slot for additional content (buttons, links, etc.)"}),`
`]}),`
`,e.jsx(n.h3,{id:"composability",children:"Composability"}),`
`,e.jsxs(n.p,{children:["All major sections (header icon, body content, footer navigation) are implemented as ",e.jsx(n.strong,{children:"slots"}),", allowing developers to inject their own content and styling. When customizing these slots, developers are expected to apply appropriate styles in alignment with Carbon design guidelines."]}),`
`,e.jsx(n.p,{children:"The component provides the following customization points:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Icon slot"}),": Replace the default idea icon with a custom icon"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Header slot"}),": Add custom content to the header area"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Body slot"}),": Insert guide banner elements or custom content"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Footer slot"}),": Customize the navigation and toggle controls"]}),`
`]}),`
`,e.jsx(n.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(n.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(n.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import '@carbon/ibm-products-web-components/es/components/guide-banner/index.js';
`})}),`
`,e.jsx(n.h3,{id:"html",children:"HTML"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<c4p-guide-banner
  collapseButtonLabel="Read less"
  expandButtonLabel="Read more"
  titleText="Page-related heading that can stand on its own"
  open
>
  <div slot="body">
    <!-- Guide banner elements go here -->
  </div>
</c4p-guide-banner>
`})}),`
`,e.jsx(n.h2,{id:"example-usage",children:"Example Usage"}),`
`,e.jsx(d,{of:a}),`
`,e.jsxs(n.h2,{id:"c4p-guide-banner-attributes-properties-events-and-slots",children:[e.jsx(n.code,{children:"<c4p-guide-banner>"})," attributes, properties, events and slots"]}),`
`,e.jsx(i,{of:"c4p-guide-banner"}),`
`,e.jsxs(n.h2,{id:"c4p-guide-banner-element-attributes-properties-events-and-slots",children:[e.jsx(n.code,{children:"<c4p-guide-banner-element>"})," attributes, properties, events and slots"]}),`
`,e.jsx(i,{of:"c4p-guide-banner-element"})]})}function C(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{C as default};
