import{e as o}from"./index-DtHxqM--.js";import{a as d}from"./index-B-lxVbXh.js";import{u as h}from"./uuidv4-BN2rGLQG.js";import{j as e}from"./index-DgLvjnYm.js";import{useMDXComponents as c}from"./index-CseD6FCQ.js";import"./index-CkZI38nJ.js";import{s as x}from"./_storybook-styles-DYLPaI3o.js";import{A as u}from"./index-Cr_YAIZY.js";import{F as m}from"./FilterPanelCheckbox-CpopSjqi.js";import{a as b}from"./FilterPanelLabel-DKXezEXL.js";import{a as j,j as f,C as g}from"./index-B4WvMzTq.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CtRu48qb.js";import"./index-CiYgQLeJ.js";import"./preview-BV6Bb4BF.js";import"./iframe-wzBMF1p9.js";import"./DocsRenderer-CFRXHY34-Cz8oKkT0.js";import"./client-CZTHzaKS.js";import"./index-4poXP75K.js";import"./bucket-10-CJixWMOF.js";import"./bucket-19-D8xKEiK4.js";import"./settings-Bzj6EGPa.js";import"./events-CdfZZS3f.js";import"./Checkbox-BrqLuRFj.js";import"./index-CVEmjZFv.js";import"./bucket-18-338UTbBD.js";import"./utils--12iVJsW.js";import"./Text-Cjos7Soh.js";import"./devtools-B69Kc3qg.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";function a(n){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...c(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"filterpanelcheckbox",children:"FilterPanelCheckbox"}),`
`,e.jsx(t.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(t.h2,{id:"deprecation-notice",children:"Deprecation notice"}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:"This component is deprecated and will be removed in the next major version."}),`
`]}),`
`,e.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"FilterPanelCheckbox"})," is a modified Carbon ",e.jsx(t.code,{children:"Checkbox"}),` and accepts both a
label and a count.`]}),`
`,e.jsx(t.h2,{id:"example-usage",children:"Example usage"}),`
`,e.jsx(j,{children:e.jsx(f,{of:r})}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(g,{})]})}function C(n={}){const{wrapper:t}={...c(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}const v="filter-panel-stories",ee={title:"Deprecated/Filter panel/FilterPanelCheckbox",component:m,tags:["autodocs"],argTypes:{className:{control:{type:{}}},id:{table:{disable:!0}},onChange:{table:{disable:!0}},count:{control:{type:"select",labels:{0:"No value",1:"As number: 10",2:'As string: "1,500"'}},mapping:{0:void 0,1:10,2:"1,500"},options:[0,1,2]},labelText:{control:{type:"select",labels:{0:"Plain text",1:"Very long text",2:"Using markup"}},mapping:{0:"Checkbox",1:"Really, really long checkbox name",2:o.createElement(o.Fragment,null,o.createElement("strong",null,"Formatted")," ",o.createElement("em",null,"checkbox"))},options:[0,1,2]}},args:{count:1,labelText:0},parameters:{styles:x,docs:{page:C}},decorators:[n=>o.createElement(u,{type:"deprecation-notice",text:o.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},n())]},k=n=>o.createElement("div",{className:`${v}__viewport`},o.createElement(b,null,o.createElement(m,{...n}))),r=k.bind({});r.storyName="Default";r.args={id:h(),onChange:(n,{checked:t,id:p})=>d("onChange Checkbox (event, { checked, id })")(n,t,p),title:""};var i,l,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  return <div className={\`\${storyClass}__viewport\`}>
      <FilterPanel>
        <FilterPanelCheckbox {...args} />
      </FilterPanel>
    </div>;
}`,...(s=(l=r.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const te=["Default"];export{r as Default,te as __namedExportsOrder,ee as default};
