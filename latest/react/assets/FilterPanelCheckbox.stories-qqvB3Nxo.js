var m=Object.defineProperty;var a=(t,e)=>m(t,"name",{value:e,configurable:!0});import{j as n,aH as d,aJ as p,aI as h,e as o}from"./iframe-t6K2KT89.js";import{u as x}from"./uuidv4-Fbcg8Vng.js";import{useMDXComponents as i}from"./index-CcGpqAnU.js";import{s as u}from"./_storybook-styles-DYLPaI3o.js";import{A as b}from"./index-CMLNWzVP.js";import{F as s}from"./FilterPanelCheckbox-mBTFNSdW.js";import{a as j}from"./FilterPanelLabel-DOgq_vtJ.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-11-Cx8VWvu-.js";import"./bucket-20-RO2qCJtZ.js";import"./Checkbox-Ddp6lQzA.js";import"./Text-DAQ2PBki.js";import"./hasHelperText-CcJ_VphT.js";import"./useNormalizedInputProps-CnzvYlOI.js";import"./index-CRnkdfzI.js";import"./index-BYKt6Fpu.js";import"./bucket-19-Dcgt9bs5.js";import"./devtools-W8hnGsLd.js";function l(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"filterpanelcheckbox",children:"FilterPanelCheckbox"}),`
`,n.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#overview",children:"Overview"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#example-usage",children:"Example usage"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,n.jsx(e.h2,{id:"deprecation-notice",children:"Deprecation notice"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"This component is deprecated and will be removed in the next major version."}),`
`]}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"FilterPanelCheckbox"})," is a modified Carbon ",n.jsx(e.code,{children:"Checkbox"}),` and accepts both a
label and a count.`]}),`
`,n.jsx(e.h2,{id:"example-usage",children:"Example usage"}),`
`,n.jsx(d,{children:n.jsx(p,{of:r})}),`
`,n.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,n.jsx(h,{})]})}a(l,"_createMdxContent");function g(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(l,{...t})}):l(t)}a(g,"MDXContent");const{action:C}=__STORYBOOK_MODULE_ACTIONS__,v="filter-panel-stories",U={title:"Deprecated/Filter panel/FilterPanelCheckbox",component:s,tags:["autodocs"],argTypes:{className:{control:{type:{}}},id:{table:{disable:!0}},onChange:{table:{disable:!0}},count:{control:{type:"select",labels:{0:"No value",1:"As number: 10",2:'As string: "1,500"'}},mapping:{0:void 0,1:10,2:"1,500"},options:[0,1,2]},labelText:{control:{type:"select",labels:{0:"Plain text",1:"Very long text",2:"Using markup"}},mapping:{0:"Checkbox",1:"Really, really long checkbox name",2:o.createElement(o.Fragment,null,o.createElement("strong",null,"Formatted")," ",o.createElement("em",null,"checkbox"))},options:[0,1,2]}},args:{count:1,labelText:0},parameters:{styles:u,docs:{page:g}},decorators:[t=>o.createElement(b,{type:"deprecation-notice",text:o.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},t())]},f=a(t=>o.createElement("div",{className:`${v}__viewport`},o.createElement(j,null,o.createElement(s,{...t}))),"Template"),r=f.bind({});r.storyName="Default";r.args={id:x(),onChange:a((t,{checked:e,id:c})=>C("onChange Checkbox (event, { checked, id })")(t,e,c),"onChange"),title:""};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  return <div className={\`\${storyClass}__viewport\`}>
      <FilterPanel>
        <FilterPanelCheckbox {...args} />
      </FilterPanel>
    </div>;
}`,...r.parameters?.docs?.source}}};const $=["Default"];export{r as Default,$ as __namedExportsOrder,U as default};
//# sourceMappingURL=FilterPanelCheckbox.stories-qqvB3Nxo.js.map
