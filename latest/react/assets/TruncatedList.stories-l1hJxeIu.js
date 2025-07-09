import{e as n}from"./index-DtHxqM--.js";import"./index-4poXP75K.js";import{L as s}from"./ListItem-BNaOEPt2.js";import{a as d}from"./index-B-lxVbXh.js";import{j as e}from"./index-DgLvjnYm.js";import{useMDXComponents as c}from"./index-CseD6FCQ.js";import"./index-CkZI38nJ.js";import{T as I}from"./TruncatedList-Dn3K8v22.js";import{a as p,j as u,C as L}from"./index-B4WvMzTq.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Text-Cjos7Soh.js";import"./v4-CtRu48qb.js";import"./index-CiYgQLeJ.js";import"./preview-BV6Bb4BF.js";import"./iframe-wzBMF1p9.js";import"./DocsRenderer-CFRXHY34-Cz8oKkT0.js";import"./client-CZTHzaKS.js";import"./settings-Bzj6EGPa.js";import"./events-CdfZZS3f.js";import"./devtools-B69Kc3qg.js";import"./useIsomorphicEffect-DztsuiUB.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";const x=".sb-show-main.sb-main-centered #storybook-root{margin-block-start:1rem}.truncated-list-stories__viewport{inline-size:10rem}";function r(m){const t={a:"a",h1:"h1",h2:"h2",li:"li",ul:"ul",...c(),...m.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"truncatedlist",children:"TruncatedList"}),`
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
`,e.jsx(L,{})]})}function h(m={}){const{wrapper:t}={...c(),...m.components};return t?e.jsx(t,{...m,children:e.jsx(r,{...m})}):r(m)}const j="truncated-list-stories",q={title:"Utilities/TruncatedList",component:I,tags:["autodocs"],parameters:{styles:x,layout:"centered",docs:{page:h}}},E=m=>n.createElement("div",{className:`${j}__viewport`},n.createElement(I,{onClick:t=>{d(`clicked, is ${t?"collapsed":"expanded"}`)()},...m},n.createElement(s,null,"Item 1"),n.createElement(s,null,"Item 2"),n.createElement(s,null,"Item 3"),n.createElement(s,null,"Item 4"),n.createElement(s,null,"Item 5"),n.createElement(s,null,"Item 6"),n.createElement(s,null,"Item 7"),n.createElement(s,null,"Item 8"),n.createElement(s,null,"Item 9"),n.createElement(s,null,"Item 10"),n.createElement(s,null,"Item 11"),n.createElement(s,null,"Item 12"),n.createElement(s,null,"Item 13"),n.createElement(s,null,"Item 14"),n.createElement(s,null,"Item 15"),n.createElement(s,null,"Item 16"))),i=E.bind({});i.args={as:"ul",collapsedItemsLimit:3,expandedItemsLimit:9};var l,o,a;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
}`,...(a=(o=i.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const B=["truncatedList"];export{B as __namedExportsOrder,q as default,i as truncatedList};
