import{e as n}from"./index-DtHxqM--.js";import"./index-Ccw_5OKp.js";import{L as m}from"./ListItem-CAqjhNiq.js";import{a as d}from"./index-B-lxVbXh.js";import{j as e}from"./index-DgLvjnYm.js";import{useMDXComponents as c}from"./index-CseD6FCQ.js";import"./index-lMmuxduI.js";import{T as I}from"./TruncatedList-DlbV5_5x.js";import{a as p,j as u,C as L}from"./index-BEF4m_XO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Text-CPocCdE2.js";import"./v4-CtRu48qb.js";import"./index-CiYgQLeJ.js";import"./preview-jePjwBR5.js";import"./iframe-Dt20USK0.js";import"./DocsRenderer-CFRXHY34-C0lv72g2.js";import"./client-CZTHzaKS.js";import"./settings-JuRwpTYJ.js";import"./events-OVwOsPzJ.js";import"./index-DxWVrnnv.js";import"./devtools-DSwQefcu.js";import"./useIsomorphicEffect-DztsuiUB.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";const x=".sb-show-main.sb-main-centered #storybook-root{margin-block-start:1rem}.truncated-list-stories__viewport{inline-size:10rem}";function r(s){const t={a:"a",h1:"h1",h2:"h2",li:"li",ul:"ul",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"truncatedlist",children:"TruncatedList"}),`
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
`,e.jsx(L,{})]})}function h(s={}){const{wrapper:t}={...c(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(r,{...s})}):r(s)}const j="truncated-list-stories",B={title:"Utils/Components/TruncatedList",component:I,tags:["autodocs"],parameters:{styles:x,layout:"centered",docs:{page:h}}},E=s=>n.createElement("div",{className:`${j}__viewport`},n.createElement(I,{onClick:t=>{d(`clicked, is ${t?"collapsed":"expanded"}`)()},...s},n.createElement(m,null,"Item 1"),n.createElement(m,null,"Item 2"),n.createElement(m,null,"Item 3"),n.createElement(m,null,"Item 4"),n.createElement(m,null,"Item 5"),n.createElement(m,null,"Item 6"),n.createElement(m,null,"Item 7"),n.createElement(m,null,"Item 8"),n.createElement(m,null,"Item 9"),n.createElement(m,null,"Item 10"),n.createElement(m,null,"Item 11"),n.createElement(m,null,"Item 12"),n.createElement(m,null,"Item 13"),n.createElement(m,null,"Item 14"),n.createElement(m,null,"Item 15"),n.createElement(m,null,"Item 16"))),i=E.bind({});i.args={as:"ul",collapsedItemsLimit:3,expandedItemsLimit:9};var l,o,a;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
