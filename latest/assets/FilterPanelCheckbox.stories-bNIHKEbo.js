import{j as e}from"./settings-Bk-Ww79A.js";import{a as p}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{u as d}from"./uuidv4-BQrI85uz.js";import{useMDXComponents as l}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-D4RjTd1I.js";import{e as h,i as x,C as u}from"./index-TffMvrPM.js";import{s as j}from"./_storybook-styles-C0uQlRwR.js";import{F as c}from"./FilterPanelCheckbox-DOys3Cja.js";import{a as b}from"./FilterPanelLabel-hl4XUZzU.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-Dk74W0Oi.js";import"./useMergedRefs-DoviDd4t.js";import"./events-CiqBCP_Q.js";import"./index-8ToAQMOn.js";import"./index-BONylQH5.js";import"./v4-CQkTLCs1.js";import"./iframe-DrDxz63W.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-BjQFKvNH.js";import"./isSymbol-BZYRlrjc.js";import"./index-DrFu-skq.js";import"./Checkbox-kY2Abb91.js";import"./Text-BVB9JT_I.js";import"./bucket-18-D3Jjo1Sn.js";import"./devtools-jK7s13u1.js";function n(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{id:"filterpanelcheckbox",children:"FilterPanelCheckbox"}),`
`,e.jsx(o.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(o.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"FilterPanelCheckbox"})," is a modified Carbon ",e.jsx(o.code,{children:"Checkbox"}),` and accepts both a
label and a count.`]}),`
`,e.jsx(o.h2,{id:"example-usage",children:"Example usage"}),`
`,e.jsx(h,{children:e.jsx(x,{of:r})}),`
`,e.jsx(o.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(u,{})]})}function C(t={}){const{wrapper:o}={...l(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n(t)}const g="filter-panel-stories",W={title:"IBM Products/Components/Filter panel/FilterPanelCheckbox",component:c,tags:["autodocs"],argTypes:{className:{control:{type:{}}},id:{table:{disable:!0}},onChange:{table:{disable:!0}},count:{control:{type:"select",labels:{0:"No value",1:"As number: 10",2:'As string: "1,500"'}},mapping:{0:void 0,1:10,2:"1,500"},options:[0,1,2]},labelText:{control:{type:"select",labels:{0:"Plain text",1:"Very long text",2:"Using markup"}},mapping:{0:"Checkbox",1:"Really, really long checkbox name",2:e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Formatted"})," ",e.jsx("em",{children:"checkbox"})]})},options:[0,1,2]}},args:{count:1,labelText:0},parameters:{styles:j,docs:{page:C}}},f=t=>e.jsx("div",{className:`${g}__viewport`,children:e.jsx(b,{children:e.jsx(c,{...t})})}),r=f.bind({});r.storyName="Default";r.args={id:d(),onChange:(t,{checked:o,id:m})=>p("onChange Checkbox (event, { checked, id })")(t,o,m),title:""};var s,i,a;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  return <div className={\`\${storyClass}__viewport\`}>
      <FilterPanel>
        <FilterPanelCheckbox {...args} />
      </FilterPanel>
    </div>;
}`,...(a=(i=r.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const Y=["Default"];export{r as Default,Y as __namedExportsOrder,W as default};
