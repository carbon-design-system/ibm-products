import{j as e}from"./settings-CljJQLyl.js";import{a as p}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{u as d}from"./uuidv4-BQrI85uz.js";import{useMDXComponents as l}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-BRC-GqF5.js";import{e as h,i as x,C as u}from"./index-DyDuCB6G.js";import{s as j}from"./_storybook-styles-C0uQlRwR.js";import{F as c}from"./FilterPanelCheckbox-DQhH6vyc.js";import{a as b}from"./FilterPanelLabel-o4FRQWiz.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-Dk74W0Oi.js";import"./floating-ui.react-C-lGofMW.js";import"./index-BONylQH5.js";import"./events-B5D95Jtx.js";import"./index-1ulDwjQN.js";import"./v4-CQkTLCs1.js";import"./iframe-CRI-r_X1.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./Checkbox-XYcbknGw.js";import"./Text-B6Yb8geH.js";import"./bucket-18-9qioxFta.js";import"./devtools-C9kUiWhx.js";function n(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"filterpanelcheckbox",children:"FilterPanelCheckbox"}),`
`,e.jsx(t.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"FilterPanelCheckbox"})," is a modified Carbon ",e.jsx(t.code,{children:"Checkbox"}),` and accepts both a
label and a count.`]}),`
`,e.jsx(t.h2,{id:"example-usage",children:"Example usage"}),`
`,e.jsx(h,{children:e.jsx(x,{of:r})}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(u,{})]})}function C(o={}){const{wrapper:t}={...l(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}const g="filter-panel-stories",Q={title:"Experimental/Components/Filter panel/FilterPanelCheckbox",component:c,tags:["autodocs"],argTypes:{className:{control:{type:{}}},id:{table:{disable:!0}},onChange:{table:{disable:!0}},count:{control:{type:"select",labels:{0:"No value",1:"As number: 10",2:'As string: "1,500"'}},mapping:{0:void 0,1:10,2:"1,500"},options:[0,1,2]},labelText:{control:{type:"select",labels:{0:"Plain text",1:"Very long text",2:"Using markup"}},mapping:{0:"Checkbox",1:"Really, really long checkbox name",2:e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Formatted"})," ",e.jsx("em",{children:"checkbox"})]})},options:[0,1,2]}},args:{count:1,labelText:0},parameters:{styles:j,docs:{page:C}}},f=o=>e.jsx("div",{className:`${g}__viewport`,children:e.jsx(b,{children:e.jsx(c,{...o})})}),r=f.bind({});r.storyName="Default";r.args={id:d(),onChange:(o,{checked:t,id:m})=>p("onChange Checkbox (event, { checked, id })")(o,t,m),title:""};var i,s,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  return <div className={\`\${storyClass}__viewport\`}>
      <FilterPanel>
        <FilterPanelCheckbox {...args} />
      </FilterPanel>
    </div>;
}`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const W=["Default"];export{r as Default,W as __namedExportsOrder,Q as default};
