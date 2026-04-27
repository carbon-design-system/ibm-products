var c=Object.defineProperty;var l=(t,n)=>c(t,"name",{value:n,configurable:!0});import{j as e,aH as p,aJ as m,aI as d,e as r}from"./iframe-BlOC0pA1.js";import{useMDXComponents as s}from"./index-lCuXp6Hj.js";import{s as u}from"./_storybook-styles-DYLPaI3o.js";import{A as h}from"./index-BVDl2kOt.js";import{F as i}from"./FilterPanelGroup-lW1o9chG.js";import{a as x}from"./FilterPanelLabel-ChOijVZ-.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-11-DrbgTs29.js";import"./bucket-20-CeVQz5jy.js";import"./devtools-PisD3bve.js";function a(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"filterpanelgroup",children:"FilterPanelGroup"}),`
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
`,e.jsx(p,{children:e.jsx(m,{of:o})}),`
`,e.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(d,{})]})}l(a,"_createMdxContent");function j(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}l(j,"MDXContent");const g="filter-panel-stories",T={title:"Deprecated/Filter panel/FilterPanelGroup",component:i,tags:["autodocs"],parameters:{styles:u,docs:{page:j}},argTypes:{children:{table:{disable:!0}},className:{control:{type:{}}},count:{control:{type:"select",labels:{0:"No value",1:"As number: 10",2:'As string: "1,500"'}},mapping:{0:void 0,1:10,2:"1,500"},options:[0,1,2]},labelText:{control:{type:"select",labels:{0:"Plain text",1:"Very long text",2:"Using markup"}},mapping:{0:"Group name",1:"Really, really, really long group name",2:r.createElement(r.Fragment,null,"Formatted ",r.createElement("em",null,"group")," ",r.createElement("span",{style:{fontWeight:"normal"}},"label"))},options:[0,1,2]}},args:{count:1,labelText:0},decorators:[t=>r.createElement(h,{type:"deprecation-notice",text:r.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},t())]},f=l(t=>r.createElement("div",{className:`${g}__viewport`},r.createElement(x,null,r.createElement(i,{...t}," "))),"Template"),o=f.bind({});o.storyName="Default";o.args={title:""};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  return <div className={\`\${storyClass}__viewport\`}>
      <FilterPanel>
        <FilterPanelGroup {...args}>
          {/* \`children\` are required. */}
          &nbsp;
        </FilterPanelGroup>
      </FilterPanel>
    </div>;
}`,...o.parameters?.docs?.source}}};const A=["Default"];export{o as Default,A as __namedExportsOrder,T as default};
//# sourceMappingURL=FilterPanelGroup.stories-BOtWTZyz.js.map
