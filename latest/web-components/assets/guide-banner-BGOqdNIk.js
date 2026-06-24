import{u as r,j as e,M as l,C as s,A as t}from"./blocks-nSDRSHG_.js";import{G as d,D as a,M as c,F as h}from"./guide-banner.stories-Bu-yZJOQ.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-B8AK9roo.js";import"./repeat-BV-9q8Mp.js";import"./class-map-As6Et5mH.js";import"./guide-banner-element-BzAsF1ve.js";import"./host-listener-DN1-XIwx.js";import"./button-DruO1jNF.js";import"./button-skeleton-CfTK8f1v.js";import"./16-D5maUdCH.js";import"./20-CEm2HUGl.js";import"./icon-loader-DCP23Wv4.js";import"./index-DkSYGz6Z.js";import"./16-B_l_7QwJ.js";function o(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:d}),`
`,e.jsx(n.h1,{id:"guidebanner",children:"GuideBanner"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/guide-banner/usage/",rel:"nofollow",children:"Usage guidelines"})}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#getting-started",children:"Getting started"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#example-usage",children:"Example Usage"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#collapsible",children:"Collapsible"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#many-insights",children:"Many insights"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#few-insights",children:"Few insights"})}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:"The guide banner sits at the top of a page, or page-level tab, to introduce foundational concepts related to the page's content. The component is a collapsible banner that provides guidance or information to users. It features a horizontal scrollable list of guide elements with navigation controls, and can be expanded or collapsed to show or hide detailed content."}),`
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
`,e.jsx(n.h3,{id:"collapsible",children:"Collapsible"}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(n.h3,{id:"many-insights",children:"Many insights"}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(n.h3,{id:"few-insights",children:"Few insights"}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,e.jsxs(n.h3,{id:"c4p-guide-banner-attributes-properties-events-and-slots",children:[e.jsx(n.code,{children:"<c4p-guide-banner>"})," attributes, properties, events and slots"]}),`
`,e.jsx(t,{of:"c4p-guide-banner"}),`
`,e.jsxs(n.h3,{id:"c4p-guide-banner-element-attributes-properties-events-and-slots",children:[e.jsx(n.code,{children:"<c4p-guide-banner-element>"})," attributes, properties, events and slots"]}),`
`,e.jsx(t,{of:"c4p-guide-banner-element"})]})}function T(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{T as default};
