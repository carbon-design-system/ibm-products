import{R as o}from"./index-BwDkhjyp.js";import{a as d}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{u as h}from"./uuidv4-BQrI85uz.js";import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{useMDXComponents as c}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-UdGwiunq.js";import{e as x,i as u,C as b}from"./index-CTiS1d2M.js";import{s as j}from"./_storybook-styles-C0uQlRwR.js";import{A as f}from"./index-DznJAQiH.js";import{F as m}from"./FilterPanelCheckbox-xejk3Za4.js";import{a as g}from"./FilterPanelLabel-Dq8uMmgD.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./iframe-t6fBb6Y8.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./index-BONylQH5.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./index-Dk74W0Oi.js";import"./index-CQ0F2wkl.js";import"./settings-xiNX1vM3.js";import"./index-CJvxHwuA.js";import"./events-OVwOsPzJ.js";import"./index-ABeo-Xma.js";import"./bucket-18-DbwFKOtV.js";import"./bucket-9-BGCJpvdq.js";import"./Checkbox-NbGVaYV6.js";import"./Text-BiMgJRID.js";import"./devtools-Bz70ioU6.js";function a(n){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...c(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"filterpanelcheckbox",children:"FilterPanelCheckbox"}),`
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
`,e.jsx(x,{children:e.jsx(u,{of:r})}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(b,{})]})}function C(n={}){const{wrapper:t}={...c(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}const v="filter-panel-stories",te={title:"Deprecated/Filter panel/FilterPanelCheckbox",component:m,tags:["autodocs"],argTypes:{className:{control:{type:{}}},id:{table:{disable:!0}},onChange:{table:{disable:!0}},count:{control:{type:"select",labels:{0:"No value",1:"As number: 10",2:'As string: "1,500"'}},mapping:{0:void 0,1:10,2:"1,500"},options:[0,1,2]},labelText:{control:{type:"select",labels:{0:"Plain text",1:"Very long text",2:"Using markup"}},mapping:{0:"Checkbox",1:"Really, really long checkbox name",2:o.createElement(o.Fragment,null,o.createElement("strong",null,"Formatted")," ",o.createElement("em",null,"checkbox"))},options:[0,1,2]}},args:{count:1,labelText:0},parameters:{styles:j,docs:{page:C}},decorators:[n=>o.createElement(f,{type:"deprecation-notice",text:o.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},n())]},k=n=>o.createElement("div",{className:`${v}__viewport`},o.createElement(g,null,o.createElement(m,{...n}))),r=k.bind({});r.storyName="Default";r.args={id:h(),onChange:(n,{checked:t,id:p})=>d("onChange Checkbox (event, { checked, id })")(n,t,p),title:""};var i,l,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  return <div className={\`\${storyClass}__viewport\`}>
      <FilterPanel>
        <FilterPanelCheckbox {...args} />
      </FilterPanel>
    </div>;
}`,...(s=(l=r.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const ne=["Default"];export{r as Default,ne as __namedExportsOrder,te as default};
