import{e as n}from"./index-BOZkNhcz.js";import"./index-Cd8snwnz.js";import{L as s}from"./ListItem-CcFVDSZv.js";import{a as d}from"./chunk-D5ZWXAHU-DlerbUHg.js";import{j as e,a as p,h as u,C as L}from"./index-Cm8rDqP-.js";import{useMDXComponents as c}from"./index-aaDvWpb8.js";import"./DocsRenderer-CFRXHY34-ky5EjvM_.js";import{T as I}from"./TruncatedList-D3lPZU3f.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-hBZdtWkn.js";import"./index-2uioG_CI.js";import"./Text-Rb3iZwUo.js";import"./v4-CtRu48qb.js";import"./iframe-DVffvOdJ.js";import"./index-CO8sV34W.js";import"./index-ogSvIofg.js";import"./react-18-Cs6RDBhU.js";import"./settings-DqneCnpo.js";import"./events-OVwOsPzJ.js";import"./index-CN8ymWyE.js";import"./devtools-Bjt2CwRv.js";import"./useIsomorphicEffect-C0ObacuX.js";const h=".sb-show-main.sb-main-centered #storybook-root{margin-block-start:1rem}.truncated-list-stories__viewport{inline-size:10rem}";function r(m){const t={a:"a",h1:"h1",h2:"h2",li:"li",ul:"ul",...c(),...m.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"truncatedlist",children:"TruncatedList"}),`
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
`,e.jsx(L,{})]})}function x(m={}){const{wrapper:t}={...c(),...m.components};return t?e.jsx(t,{...m,children:e.jsx(r,{...m})}):r(m)}const E="truncated-list-stories",U={title:"Utils/Components/TruncatedList",component:I,tags:["autodocs"],parameters:{styles:h,layout:"centered",docs:{page:x}}},j=m=>n.createElement("div",{className:`${E}__viewport`},n.createElement(I,{onClick:t=>{d(`clicked, is ${t?"collapsed":"expanded"}`)()},...m},n.createElement(s,null,"Item 1"),n.createElement(s,null,"Item 2"),n.createElement(s,null,"Item 3"),n.createElement(s,null,"Item 4"),n.createElement(s,null,"Item 5"),n.createElement(s,null,"Item 6"),n.createElement(s,null,"Item 7"),n.createElement(s,null,"Item 8"),n.createElement(s,null,"Item 9"),n.createElement(s,null,"Item 10"),n.createElement(s,null,"Item 11"),n.createElement(s,null,"Item 12"),n.createElement(s,null,"Item 13"),n.createElement(s,null,"Item 14"),n.createElement(s,null,"Item 15"),n.createElement(s,null,"Item 16"))),i=j.bind({});i.args={as:"ul",collapsedItemsLimit:3,expandedItemsLimit:9};var l,o,a;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
}`,...(a=(o=i.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const q=["truncatedList"];export{q as __namedExportsOrder,U as default,i as truncatedList};
