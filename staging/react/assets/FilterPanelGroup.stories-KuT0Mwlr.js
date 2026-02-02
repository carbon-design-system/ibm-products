import{j as e,aB as i,aD as c,aC as p,e as r}from"./iframe-BbTYfv9-.js";import{useMDXComponents as a}from"./index-BBorVmTi.js";import{s as m}from"./_storybook-styles-DYLPaI3o.js";import{A as d}from"./index-KnhCxvuW.js";import{F as s}from"./FilterPanelGroup-CwMCv25E.js";import{a as u}from"./FilterPanelLabel-Btcw7oi0.js";import"./preload-helper-D9Z9MdNV.js";import"./bucket-10-Cya3ufu0.js";import"./bucket-19-DKyp3qQO.js";import"./devtools-KS_k4bKc.js";function l(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"filterpanelgroup",children:"FilterPanelGroup"}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(n.h2,{id:"deprecation-notice",children:"Deprecation notice"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"This component is deprecated and will be removed in the next major version."}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"FilterPanelGroup"}),` is a container for visually grouping content with a label
and optional count.`]}),`
`,e.jsx(i,{children:e.jsx(c,{of:o})}),`
`,e.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(p,{})]})}function h(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(l,{...t})}):l(t)}const x="filter-panel-stories",D={title:"Deprecated/Filter panel/FilterPanelGroup",component:s,tags:["autodocs"],parameters:{styles:m,docs:{page:h}},argTypes:{children:{table:{disable:!0}},className:{control:{type:{}}},count:{control:{type:"select",labels:{0:"No value",1:"As number: 10",2:'As string: "1,500"'}},mapping:{0:void 0,1:10,2:"1,500"},options:[0,1,2]},labelText:{control:{type:"select",labels:{0:"Plain text",1:"Very long text",2:"Using markup"}},mapping:{0:"Group name",1:"Really, really, really long group name",2:r.createElement(r.Fragment,null,"Formatted ",r.createElement("em",null,"group")," ",r.createElement("span",{style:{fontWeight:"normal"}},"label"))},options:[0,1,2]}},args:{count:1,labelText:0},decorators:[t=>r.createElement(d,{type:"deprecation-notice",text:r.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},t())]},j=t=>r.createElement("div",{className:`${x}__viewport`},r.createElement(u,null,r.createElement(s,{...t}," "))),o=j.bind({});o.storyName="Default";o.args={title:""};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  return <div className={\`\${storyClass}__viewport\`}>
      <FilterPanel>
        <FilterPanelGroup {...args}>
          {/* \`children\` are required. */}
          &nbsp;
        </FilterPanelGroup>
      </FilterPanel>
    </div>;
}`,...o.parameters?.docs?.source}}};const _=["Default"];export{o as Default,_ as __namedExportsOrder,D as default};
//# sourceMappingURL=FilterPanelGroup.stories-KuT0Mwlr.js.map
