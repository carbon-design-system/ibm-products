import{el as e,em as c,eo as m,en as d,e as o}from"./iframe-HX3uP5rF.js";import{u as p}from"./uuidv4-BN2rGLQG.js";import{useMDXComponents as l}from"./index-BvpUgIFr.js";import{s as h}from"./_storybook-styles-DYLPaI3o.js";import{A as x}from"./index-DMCXImGW.js";import{F as s}from"./FilterPanelCheckbox-BqFS_n1E.js";import{a as u}from"./FilterPanelLabel-CTSkgJUi.js";import"./bucket-10-DxX4pcgn.js";import"./bucket-19-DB0RW10U.js";import"./Checkbox-D4xbVJpr.js";import"./index-BzsQW5qN.js";import"./bucket-18-KiX7pVM7.js";import"./utils-CeAP7Zfj.js";import"./Text-DBtsZOEn.js";import"./devtools-CNhWTRl7.js";function a(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"filterpanelcheckbox",children:"FilterPanelCheckbox"}),`
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
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"FilterPanelCheckbox"})," is a modified Carbon ",e.jsx(n.code,{children:"Checkbox"}),` and accepts both a
label and a count.`]}),`
`,e.jsx(n.h2,{id:"example-usage",children:"Example usage"}),`
`,e.jsx(c,{children:e.jsx(m,{of:r})}),`
`,e.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(d,{})]})}function b(t={}){const{wrapper:n}={...l(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}const{action:j}=__STORYBOOK_MODULE_ACTIONS__,g="filter-panel-stories",S={title:"Deprecated/Filter panel/FilterPanelCheckbox",component:s,tags:["autodocs"],argTypes:{className:{control:{type:{}}},id:{table:{disable:!0}},onChange:{table:{disable:!0}},count:{control:{type:"select",labels:{0:"No value",1:"As number: 10",2:'As string: "1,500"'}},mapping:{0:void 0,1:10,2:"1,500"},options:[0,1,2]},labelText:{control:{type:"select",labels:{0:"Plain text",1:"Very long text",2:"Using markup"}},mapping:{0:"Checkbox",1:"Really, really long checkbox name",2:o.createElement(o.Fragment,null,o.createElement("strong",null,"Formatted")," ",o.createElement("em",null,"checkbox"))},options:[0,1,2]}},args:{count:1,labelText:0},parameters:{styles:h,docs:{page:b}},decorators:[t=>o.createElement(x,{type:"deprecation-notice",text:o.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},t())]},C=t=>o.createElement("div",{className:`${g}__viewport`},o.createElement(u,null,o.createElement(s,{...t}))),r=C.bind({});r.storyName="Default";r.args={id:p(),onChange:(t,{checked:n,id:i})=>j("onChange Checkbox (event, { checked, id })")(t,n,i),title:""};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  return <div className={\`\${storyClass}__viewport\`}>
      <FilterPanel>
        <FilterPanelCheckbox {...args} />
      </FilterPanel>
    </div>;
}`,...r.parameters?.docs?.source}}};const q=["Default"];export{r as Default,q as __namedExportsOrder,S as default};
