import{j as e,M as r,C as o,A as a}from"./blocks-M3RBijn-.js";import{useMDXComponents as i}from"./index-H35GsqRp.js";import{T as c,D as l,t as d}from"./truncated-text.stories-D3eE3650.js";import"./iframe-BH0C7KwN.js";import"./truncated-text-DXKDMnfs.js";import"./class-map-BigE7AVp.js";import"./style-map-xoyVCijD.js";import"./definition-tooltip-D-zmq8-b.js";import"./button-MvXzrdhH.js";import"./link-cip5oIhn.js";import"./layer-BlQNcv42.js";function s(n){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c}),`
`,e.jsx(t.h1,{id:"truncatedtext",children:"TruncatedText"}),`
`,e.jsx(t.p,{children:`The truncated text utility can truncate text based on a specified number of
lines, provided via a prop. It offers two configurable options for revealing the
full content:`}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:["Tooltip mode ",e.jsx(t.code,{children:'type="tooltip"'}),`: Displays the full text in a tooltip overlay on
hover.`]}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:["Expandable mode ",e.jsx(t.code,{children:'type="expand"'}),`: Reveals the complete content through
collapsible “Read more” / “Read less” toggles. These labels can be customized
using the `,e.jsx(t.code,{children:"expand-label"})," and ",e.jsx(t.code,{children:"collapse-label"})," attributes on the component."]}),`
`]}),`
`]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[`💡 Check our
`,e.jsx(t.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/truncated-text",rel:"nofollow",children:"Stackblitz"}),`
example implementation.
`,e.jsx(t.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/truncated-text",rel:"nofollow",children:e.jsx(t.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})]}),`
`]}),`
`,e.jsx(t.h2,{id:"default-type-tooltip",children:"Default type tooltip"}),`
`,e.jsx(o,{of:l}),`
`,e.jsx(t.h2,{id:"type-expand",children:"Type expand"}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(t.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(t.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(t.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import '@carbon/ibm-products-web-components/es/components/truncated-text/index.js';
`})}),`
`,e.jsx(t.h3,{id:"html",children:"HTML"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<c4p-truncated-text
  value="Buttons are used to initialize an action, either in the background or foreground of an experience. There are several kinds of buttons. Primary buttons should be used for the principal call to action on the page. Secondary buttons should be used for secondary actions on each page. Danger buttons should be used for a negative action (such as Delete) on the page. Modify the behavior of the button by changing its event properties. Small buttons may be used when there is not enough space for a regular-sized button. This issue is most often found in tables. Small buttons should have three words or fewer."
  lines="2"
  type="tooltip"
></c4p-truncated-text>
`})}),`
`,e.jsxs(t.h2,{id:"c4p-truncated-text-attributes-properties-and-events",children:[e.jsx(t.code,{children:"<c4p-truncated-text>"})," attributes, properties and events"]}),`
`,e.jsx(a,{of:"c4p-truncated-text"})]})}function k(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{k as default};
