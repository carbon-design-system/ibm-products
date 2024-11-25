import{R as n}from"./index-BwDkhjyp.js";import"./index-CQ0F2wkl.js";import{L as m}from"./ListItem-BMyRYSTP.js";import{a as d}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{useMDXComponents as c}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-BgzNaMoH.js";import{e as p,i as u,C as L}from"./index-DXUYcqZv.js";import{T as I}from"./TruncatedList-BZ2blH9n.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Dk74W0Oi.js";import"./index-BONylQH5.js";import"./Text-BiMgJRID.js";import"./v4-CQkTLCs1.js";import"./iframe-DanyPKBP.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./settings-xiNX1vM3.js";import"./index-CJvxHwuA.js";import"./events-OVwOsPzJ.js";import"./index-ABeo-Xma.js";import"./devtools-Bz70ioU6.js";const h=".sb-show-main.sb-main-centered #storybook-root{margin-top:1rem}.truncated-list-stories__viewport{width:10rem}";function r(s){const t={a:"a",h1:"h1",h2:"h2",li:"li",ul:"ul",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"truncatedlist",children:"TruncatedList"}),`
`,e.jsx(t.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,`
`,e.jsx(t.h2,{id:"example-usage",children:"Example usage"}),`
`,`
`,e.jsx(p,{children:e.jsx(u,{of:i})}),`
`,e.jsx(t.h2,{id:"code-sample",children:"Code sample"}),`
`,`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(L,{})]})}function x(s={}){const{wrapper:t}={...c(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(r,{...s})}):r(s)}const E="truncated-list-stories",H={title:"Utils/Components/TruncatedList",component:I,tags:["autodocs"],parameters:{styles:h,layout:"centered",docs:{page:x}}},j=s=>n.createElement("div",{className:`${E}__viewport`},n.createElement(I,{onClick:t=>{d(`clicked, is ${t?"collapsed":"expanded"}`)()},...s},n.createElement(m,null,"Item 1"),n.createElement(m,null,"Item 2"),n.createElement(m,null,"Item 3"),n.createElement(m,null,"Item 4"),n.createElement(m,null,"Item 5"),n.createElement(m,null,"Item 6"),n.createElement(m,null,"Item 7"),n.createElement(m,null,"Item 8"),n.createElement(m,null,"Item 9"),n.createElement(m,null,"Item 10"),n.createElement(m,null,"Item 11"),n.createElement(m,null,"Item 12"),n.createElement(m,null,"Item 13"),n.createElement(m,null,"Item 14"),n.createElement(m,null,"Item 15"),n.createElement(m,null,"Item 16"))),i=j.bind({});i.args={as:"ul",collapsedItemsLimit:3,expandedItemsLimit:9};var o,l,a;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
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
}`,...(a=(l=i.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const J=["truncatedList"];export{J as __namedExportsOrder,H as default,i as truncatedList};
