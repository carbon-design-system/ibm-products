import{j as e,aB as o,aD as c,aC as I,e as n}from"./iframe-BbTYfv9-.js";import{L as s}from"./ListItem-ByZKorbv.js";import{useMDXComponents as r}from"./index-BBorVmTi.js";import{T as a}from"./TruncatedList-Dq5N2Dh9.js";import"./preload-helper-D9Z9MdNV.js";import"./Text-CJYku-mr.js";import"./devtools-KS_k4bKc.js";import"./useIsomorphicEffect-omIe2Oju.js";const d=".sb-show-main.sb-main-centered #storybook-root{margin-block-start:1rem}.truncated-list-stories__viewport{inline-size:10rem}";function l(m){const t={a:"a",h1:"h1",h2:"h2",li:"li",ul:"ul",...r(),...m.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"truncatedlist",children:"TruncatedList"}),`
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
`,e.jsx(o,{children:e.jsx(c,{of:i})}),`
`,e.jsx(t.h2,{id:"code-sample",children:"Code sample"}),`
`,`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(I,{})]})}function u(m={}){const{wrapper:t}={...r(),...m.components};return t?e.jsx(t,{...m,children:e.jsx(l,{...m})}):l(m)}const{action:L}=__STORYBOOK_MODULE_ACTIONS__,p="truncated-list-stories",T={title:"Utilities/TruncatedList",component:a,tags:["autodocs"],parameters:{styles:d,layout:"centered",docs:{page:u}}},x=m=>n.createElement("div",{className:`${p}__viewport`},n.createElement(a,{onClick:t=>{L(`clicked, is ${t?"collapsed":"expanded"}`)()},...m},n.createElement(s,null,"Item 1"),n.createElement(s,null,"Item 2"),n.createElement(s,null,"Item 3"),n.createElement(s,null,"Item 4"),n.createElement(s,null,"Item 5"),n.createElement(s,null,"Item 6"),n.createElement(s,null,"Item 7"),n.createElement(s,null,"Item 8"),n.createElement(s,null,"Item 9"),n.createElement(s,null,"Item 10"),n.createElement(s,null,"Item 11"),n.createElement(s,null,"Item 12"),n.createElement(s,null,"Item 13"),n.createElement(s,null,"Item 14"),n.createElement(s,null,"Item 15"),n.createElement(s,null,"Item 16"))),i=x.bind({});i.args={as:"ul",collapsedItemsLimit:3,expandedItemsLimit:9};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => {
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
}`,...i.parameters?.docs?.source}}};const w=["truncatedList"];export{w as __namedExportsOrder,T as default,i as truncatedList};
//# sourceMappingURL=TruncatedList.stories-DkqXsmoY.js.map
