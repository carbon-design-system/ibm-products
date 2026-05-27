var c=Object.defineProperty;var a=(t,n)=>c(t,"name",{value:n,configurable:!0});import{ae as s,j as e,aO as p,aU as m,aP as d,R as r}from"./iframe-Smi5ZmZZ.js";import{s as u}from"./_storybook-styles-DYLPaI3o.js";import{A as h}from"./index-dR_u1LN1.js";import{F as i}from"./FilterPanelGroup-Bvcrrls1.js";import{a as x}from"./FilterPanelLabel-CJAhje9n.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-11-oiky0jDC.js";import"./bucket-20-B45IimhC.js";import"./devtools-DrPHs2CJ.js";function l(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"filterpanelgroup",children:"FilterPanelGroup"}),`
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
`,e.jsx(d,{})]})}a(l,"_createMdxContent");function j(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(l,{...t})}):l(t)}a(j,"MDXContent");const g="filter-panel-stories",G={title:"Deprecated/Filter panel/FilterPanelGroup",component:i,tags:["autodocs"],parameters:{styles:u,chromatic:{disableSnapshot:!0},docs:{page:j}},argTypes:{children:{table:{disable:!0}},className:{control:{type:{}}},count:{control:{type:"select",labels:{0:"No value",1:"As number: 10",2:'As string: "1,500"'}},mapping:{0:void 0,1:10,2:"1,500"},options:[0,1,2]},labelText:{control:{type:"select",labels:{0:"Plain text",1:"Very long text",2:"Using markup"}},mapping:{0:"Group name",1:"Really, really, really long group name",2:r.createElement(r.Fragment,null,"Formatted ",r.createElement("em",null,"group")," ",r.createElement("span",{style:{fontWeight:"normal"}},"label"))},options:[0,1,2]}},args:{count:1,labelText:0},decorators:[t=>r.createElement(h,{type:"deprecation-notice",text:r.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},t())]},v=a(t=>r.createElement("div",{className:`${g}__viewport`},r.createElement(x,null,r.createElement(i,{...t}," "))),"Template"),o=v.bind({});o.storyName="Default";o.args={title:""};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  return <div className={\`\${storyClass}__viewport\`}>
      <FilterPanel>
        <FilterPanelGroup {...args}>
          {/* \`children\` are required. */}
          &nbsp;
        </FilterPanelGroup>
      </FilterPanel>
    </div>;
}`,...o.parameters?.docs?.source}}};const T=["Default"];export{o as Default,T as __namedExportsOrder,G as default};
//# sourceMappingURL=FilterPanelGroup.stories-BbTkNhbH.js.map
