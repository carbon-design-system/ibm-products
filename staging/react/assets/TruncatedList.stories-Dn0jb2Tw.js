var c=Object.defineProperty;var l=(m,e)=>c(m,"name",{value:e,configurable:!0});import{j as t,aH as I,aJ as d,aI as u,e as n}from"./iframe-BlOC0pA1.js";import{L as s}from"./ListItem-MBArVUD9.js";import{useMDXComponents as a}from"./index-lCuXp6Hj.js";import{T as o}from"./TruncatedList-CWz3STqZ.js";import"./preload-helper-Cc2_yIPf.js";import"./Text-Cp4U2L1v.js";import"./devtools-PisD3bve.js";import"./useIsomorphicEffect-TwSdq75_.js";const L=".sb-show-main.sb-main-centered #storybook-root{margin-block-start:1rem}.truncated-list-stories__viewport{inline-size:10rem}";function r(m){const e={a:"a",h1:"h1",h2:"h2",li:"li",ul:"ul",...a(),...m.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"truncatedlist",children:"TruncatedList"}),`
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
`,t.jsx(I,{children:t.jsx(d,{of:i})}),`
`,t.jsx(e.h2,{id:"code-sample",children:"Code sample"}),`
`,`
`,t.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,t.jsx(u,{})]})}l(r,"_createMdxContent");function p(m={}){const{wrapper:e}={...a(),...m.components};return e?t.jsx(e,{...m,children:t.jsx(r,{...m})}):r(m)}l(p,"MDXContent");const{action:x}=__STORYBOOK_MODULE_ACTIONS__,h="truncated-list-stories",b={title:"Utilities/TruncatedList",component:o,tags:["autodocs"],parameters:{styles:L,layout:"centered",docs:{page:p}}},E=l(m=>n.createElement("div",{className:`${h}__viewport`},n.createElement(o,{onClick:l(e=>{x(`clicked, is ${e?"collapsed":"expanded"}`)()},"onClick"),...m},n.createElement(s,null,"Item 1"),n.createElement(s,null,"Item 2"),n.createElement(s,null,"Item 3"),n.createElement(s,null,"Item 4"),n.createElement(s,null,"Item 5"),n.createElement(s,null,"Item 6"),n.createElement(s,null,"Item 7"),n.createElement(s,null,"Item 8"),n.createElement(s,null,"Item 9"),n.createElement(s,null,"Item 10"),n.createElement(s,null,"Item 11"),n.createElement(s,null,"Item 12"),n.createElement(s,null,"Item 13"),n.createElement(s,null,"Item 14"),n.createElement(s,null,"Item 15"),n.createElement(s,null,"Item 16"))),"Template"),i=E.bind({});i.args={as:"ul",collapsedItemsLimit:3,expandedItemsLimit:9};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => {
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
}`,...i.parameters?.docs?.source}}};const y=["truncatedList"];export{y as __namedExportsOrder,b as default,i as truncatedList};
//# sourceMappingURL=TruncatedList.stories-Dn0jb2Tw.js.map
