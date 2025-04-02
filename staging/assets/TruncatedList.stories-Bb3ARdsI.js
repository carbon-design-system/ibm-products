import{e as n}from"./index-CPiZ6Cnx.js";import"./index-BPCFiO9b.js";import{L as m}from"./ListItem-DPfNRx_s.js";import{a as d}from"./index-B-lxVbXh.js";import{j as e}from"./index-B83en7q5.js";import{useMDXComponents as c}from"./index-CUO_02de.js";import"./index-Bf_H9q8r.js";import{T as I}from"./TruncatedList-DRAbbHt3.js";import{a as p,f as u,C as L}from"./index-DblCLej2.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Text-DJS5NTiV.js";import"./v4-CtRu48qb.js";import"./index-ZKO_qc5e.js";import"./preview-DUa2hDsf.js";import"./iframe-DG_HeTRT.js";import"./DocsRenderer-CFRXHY34-DtZUrKsm.js";import"./client-BCQEsWlk.js";import"./settings-41bnSjHp.js";import"./events-OVwOsPzJ.js";import"./index-H2wBg9na.js";import"./devtools-Ca6Wku6c.js";import"./useIsomorphicEffect-CqAX3nH-.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";const x=".sb-show-main.sb-main-centered #storybook-root{margin-block-start:1rem}.truncated-list-stories__viewport{inline-size:10rem}";function r(s){const t={a:"a",h1:"h1",h2:"h2",li:"li",ul:"ul",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"truncatedlist",children:"TruncatedList"}),`
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
`,e.jsx(L,{})]})}function h(s={}){const{wrapper:t}={...c(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(r,{...s})}):r(s)}const E="truncated-list-stories",B={title:"Utils/Components/TruncatedList",component:I,tags:["autodocs"],parameters:{styles:x,layout:"centered",docs:{page:h}}},j=s=>n.createElement("div",{className:`${E}__viewport`},n.createElement(I,{onClick:t=>{d(`clicked, is ${t?"collapsed":"expanded"}`)()},...s},n.createElement(m,null,"Item 1"),n.createElement(m,null,"Item 2"),n.createElement(m,null,"Item 3"),n.createElement(m,null,"Item 4"),n.createElement(m,null,"Item 5"),n.createElement(m,null,"Item 6"),n.createElement(m,null,"Item 7"),n.createElement(m,null,"Item 8"),n.createElement(m,null,"Item 9"),n.createElement(m,null,"Item 10"),n.createElement(m,null,"Item 11"),n.createElement(m,null,"Item 12"),n.createElement(m,null,"Item 13"),n.createElement(m,null,"Item 14"),n.createElement(m,null,"Item 15"),n.createElement(m,null,"Item 16"))),i=j.bind({});i.args={as:"ul",collapsedItemsLimit:3,expandedItemsLimit:9};var l,o,a;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
}`,...(a=(o=i.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const G=["truncatedList"];export{G as __namedExportsOrder,B as default,i as truncatedList};
