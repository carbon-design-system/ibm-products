import{e as n}from"./index-DxDX2vOa.js";import"./index-B_euquWE.js";import{L as s}from"./ListItem-D-NIYBD9.js";import{a as d}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{aw as e,al as p,ax as u,ak as L}from"./index-DAMUIRRT.js";import{useMDXComponents as c}from"./index-BgI2kBcJ.js";import"./chunk-NUUEMKO5-qxTmjHpU.js";import{T as I}from"./TruncatedList-C40eyFNK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CaMJXrh2.js";import"./Text-9AedOkae.js";import"./v4-CQkTLCs1.js";import"./iframe-C1IaBP6P.js";import"../sb-preview/runtime.js";import"./index-Df9so8jS.js";import"./index-CRUq0TYl.js";import"./index-DrFu-skq.js";import"./react-18-DcnmlX6h.js";import"./settings-0ThqPtR3.js";import"./events-OVwOsPzJ.js";import"./index-YDq2Pj7F.js";import"./devtools-BlxCaI1L.js";const x=".sb-show-main.sb-main-centered #storybook-root{margin-top:1rem}.truncated-list-stories__viewport{width:10rem}";function r(m){const t={a:"a",h1:"h1",h2:"h2",li:"li",ul:"ul",...c(),...m.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"truncatedlist",children:"TruncatedList"}),`
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
`,e.jsx(L,{})]})}function h(m={}){const{wrapper:t}={...c(),...m.components};return t?e.jsx(t,{...m,children:e.jsx(r,{...m})}):r(m)}const E="truncated-list-stories",q={title:"Utils/Components/TruncatedList",component:I,tags:["autodocs"],parameters:{styles:x,layout:"centered",docs:{page:h}}},j=m=>n.createElement("div",{className:`${E}__viewport`},n.createElement(I,{onClick:t=>{d(`clicked, is ${t?"collapsed":"expanded"}`)()},...m},n.createElement(s,null,"Item 1"),n.createElement(s,null,"Item 2"),n.createElement(s,null,"Item 3"),n.createElement(s,null,"Item 4"),n.createElement(s,null,"Item 5"),n.createElement(s,null,"Item 6"),n.createElement(s,null,"Item 7"),n.createElement(s,null,"Item 8"),n.createElement(s,null,"Item 9"),n.createElement(s,null,"Item 10"),n.createElement(s,null,"Item 11"),n.createElement(s,null,"Item 12"),n.createElement(s,null,"Item 13"),n.createElement(s,null,"Item 14"),n.createElement(s,null,"Item 15"),n.createElement(s,null,"Item 16"))),i=j.bind({});i.args={as:"ul",collapsedItemsLimit:3,expandedItemsLimit:9};var l,a,o;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
}`,...(o=(a=i.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const z=["truncatedList"];export{z as __namedExportsOrder,q as default,i as truncatedList};
