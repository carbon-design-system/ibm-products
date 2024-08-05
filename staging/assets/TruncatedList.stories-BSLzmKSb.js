import{j as t}from"./settings-B0yoEqB-.js";import"./useMergedRefs-CY5AfkP4.js";import{L as s}from"./ListItem-DWqe2A4Q.js";import{a as l}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{useMDXComponents as c}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-C8rwFTKs.js";import{e as I,i as p,C as x}from"./index-D4z3D3nr.js";import{T as d}from"./TruncatedList-Bh8d9boi.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-Dk74W0Oi.js";import"./events-D6dlm1BF.js";import"./index-D2JPet7M.js";import"./index-BONylQH5.js";import"./Text-CiWJR74P.js";import"./v4-CQkTLCs1.js";import"./iframe-BBSBJ9v0.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./devtools-Cvhd47uB.js";const h=".sb-show-main.sb-main-centered #storybook-root{margin-top:1rem}.truncated-list-stories__viewport{width:10rem}";function m(i){const e={a:"a",h1:"h1",h2:"h2",li:"li",ul:"ul",...c(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"truncatedlist",children:"TruncatedList"}),`
`,t.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#overview",children:"Overview"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#example-usage",children:"Example usage"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,t.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,`
`,t.jsx(e.h2,{id:"example-usage",children:"Example usage"}),`
`,`
`,t.jsx(I,{children:t.jsx(p,{of:n})}),`
`,t.jsx(e.h2,{id:"code-sample",children:"Code sample"}),`
`,`
`,t.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,t.jsx(x,{})]})}function L(i={}){const{wrapper:e}={...c(),...i.components};return e?t.jsx(e,{...i,children:t.jsx(m,{...i})}):m(i)}const j="truncated-list-stories",G={title:"Experimental/Components/Truncated list/TruncatedList",component:d,tags:["autodocs"],parameters:{styles:h,layout:"centered",docs:{page:L}}},u=i=>t.jsx("div",{className:`${j}__viewport`,children:t.jsxs(d,{onClick:e=>{l(`clicked, is ${e?"collapsed":"expanded"}`)()},...i,children:[t.jsx(s,{children:"Item 1"}),t.jsx(s,{children:"Item 2"}),t.jsx(s,{children:"Item 3"}),t.jsx(s,{children:"Item 4"}),t.jsx(s,{children:"Item 5"}),t.jsx(s,{children:"Item 6"}),t.jsx(s,{children:"Item 7"}),t.jsx(s,{children:"Item 8"}),t.jsx(s,{children:"Item 9"}),t.jsx(s,{children:"Item 10"}),t.jsx(s,{children:"Item 11"}),t.jsx(s,{children:"Item 12"}),t.jsx(s,{children:"Item 13"}),t.jsx(s,{children:"Item 14"}),t.jsx(s,{children:"Item 15"}),t.jsx(s,{children:"Item 16"})]})}),n=u.bind({});n.args={as:"ul",collapsedItemsLimit:3,expandedItemsLimit:9};var r,o,a;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  return <div className={\`\${storyClass}__viewport\`}>
      <TruncatedList onClick={isCollapsed => {
      action(\`clicked, is \${isCollapsed ? 'collapsed' : 'expanded'}\`)();
    }} {...args}>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
        <ListItem>Item 4</ListItem>
        <ListItem>Item 5</ListItem>
        <ListItem>Item 6</ListItem>
        <ListItem>Item 7</ListItem>
        <ListItem>Item 8</ListItem>
        <ListItem>Item 9</ListItem>
        <ListItem>Item 10</ListItem>
        <ListItem>Item 11</ListItem>
        <ListItem>Item 12</ListItem>
        <ListItem>Item 13</ListItem>
        <ListItem>Item 14</ListItem>
        <ListItem>Item 15</ListItem>
        <ListItem>Item 16</ListItem>
      </TruncatedList>
    </div>;
}`,...(a=(o=n.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const H=["truncatedList"];export{H as __namedExportsOrder,G as default,n as truncatedList};
