import{j as e}from"./settings-BiUEFdm2.js";import{useMDXComponents as i}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-CsZ1lTTC.js";import{e as m,i as p,C as d}from"./index-CDYzkStP.js";import{s as x}from"./_storybook-styles-C0uQlRwR.js";import{F as c,a as h}from"./FilterPanelLabel-BZGwbzwr.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-Dk74W0Oi.js";import"./deprecate-D9ms-jbM.js";import"./events-Bq7WR1mU.js";import"./index-BONylQH5.js";import"./iframe-j3s5A4v9.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-BjQFKvNH.js";import"./isSymbol-BZYRlrjc.js";import"./index-DrFu-skq.js";import"./devtools-BPcQvzXy.js";function l(r){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"filterpanellabel",children:"FilterPanelLabel"}),`
`,e.jsx(t.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"FilterPanelLabel"})," is for internal use only by the ",e.jsx(t.code,{children:"FilterPanel"}),"."]}),`
`,e.jsx(m,{children:e.jsx(p,{of:n})}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(d,{})]})}function u(r={}){const{wrapper:t}={...i(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(l,{...r})}):l(r)}const j="filter-panel-stories",k={title:"IBM Products/Internal/FilterPanelLabel",component:c,tags:["autodocs"],parameters:{styles:x,docs:{page:u}},argTypes:{className:{control:{type:{}}},onChange:{table:{disable:!0}},count:{control:{type:"select",labels:{0:"No value",1:"As number: 10",2:'As string: "1,500"'}},mapping:{0:void 0,1:10,2:"1,500"},options:[0,1,2]},labelText:{control:{type:"select",labels:{0:"Plain text",1:"Very long text",2:"Using markup"}},mapping:{0:"Label",1:"Really, really long label name",2:e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Formatted"})," ",e.jsx("em",{children:"label"})]})},options:[0,1,2]}},args:{count:1,labelText:0}},b=r=>e.jsx("div",{className:`${j}__viewport`,children:e.jsx(h,{children:e.jsx(c,{...r})})}),n=b.bind({});n.storyName="Default";n.args={title:""};var o,s,a;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  return <div className={\`\${storyClass}__viewport\`}>
      <FilterPanel>
        <FilterPanelLabel {...args} />
      </FilterPanel>
    </div>;
}`,...(a=(s=n.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const B=["Default"];export{n as Default,B as __namedExportsOrder,k as default};
