import{j as t}from"./settings-BiUEFdm2.js";import"./deprecate-D9ms-jbM.js";import{L as s}from"./ListItem-bxQFBg2r.js";import{a as l}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{useMDXComponents as a}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-CsZ1lTTC.js";import{e as I,i as p,C as h}from"./index-CDYzkStP.js";import{T as d}from"./TruncatedList-DyMLFCxA.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-Dk74W0Oi.js";import"./events-Bq7WR1mU.js";import"./index-BONylQH5.js";import"./Text-_TFgs5hl.js";import"./v4-CQkTLCs1.js";import"./iframe-j3s5A4v9.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-BjQFKvNH.js";import"./isSymbol-BZYRlrjc.js";import"./index-DrFu-skq.js";import"./devtools-BPcQvzXy.js";const x=".sb-show-main.sb-main-centered #storybook-root{margin-top:1rem}.truncated-list-stories__viewport{width:10rem}";function r(i){const e={a:"a",h1:"h1",h2:"h2",li:"li",ul:"ul",...a(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"truncatedlist",children:"TruncatedList"}),`
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
`,t.jsx(h,{})]})}function L(i={}){const{wrapper:e}={...a(),...i.components};return e?t.jsx(e,{...i,children:t.jsx(r,{...i})}):r(i)}const j="truncated-list-stories",G={title:"IBM Products/Components/Truncated list/TruncatedList",component:d,tags:["autodocs"],parameters:{styles:x,layout:"centered",docs:{page:L}}},u=i=>t.jsx("div",{className:`${j}__viewport`,children:t.jsxs(d,{onClick:e=>{l(`clicked, is ${e?"collapsed":"expanded"}`)()},...i,children:[t.jsx(s,{children:"Item 1"}),t.jsx(s,{children:"Item 2"}),t.jsx(s,{children:"Item 3"}),t.jsx(s,{children:"Item 4"}),t.jsx(s,{children:"Item 5"}),t.jsx(s,{children:"Item 6"}),t.jsx(s,{children:"Item 7"}),t.jsx(s,{children:"Item 8"}),t.jsx(s,{children:"Item 9"}),t.jsx(s,{children:"Item 10"}),t.jsx(s,{children:"Item 11"}),t.jsx(s,{children:"Item 12"}),t.jsx(s,{children:"Item 13"}),t.jsx(s,{children:"Item 14"}),t.jsx(s,{children:"Item 15"}),t.jsx(s,{children:"Item 16"})]})}),n=u.bind({});n.args={as:"ul",collapsedItemsLimit:3,expandedItemsLimit:9};var m,o,c;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(c=(o=n.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const H=["truncatedList"];export{H as __namedExportsOrder,G as default,n as truncatedList};
