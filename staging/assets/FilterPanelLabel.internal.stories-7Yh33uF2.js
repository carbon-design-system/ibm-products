import{e as r}from"./index-DtHxqM--.js";import{j as e}from"./index-DgLvjnYm.js";import{useMDXComponents as m}from"./index-CseD6FCQ.js";import"./index-Bq0jCRb-.js";import{s as p}from"./_storybook-styles-DYLPaI3o.js";import{F as c,a as d}from"./FilterPanelLabel-IxdL5AHF.js";import{a as u,j as x,C as h}from"./index-BridxrSo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CiYgQLeJ.js";import"./preview-DZaLbi38.js";import"./iframe-CjQaoex9.js";import"./DocsRenderer-CFRXHY34-LUAN-qqw.js";import"./client-CZTHzaKS.js";import"./index-CMVdkQrl.js";import"./devtools-CJD9WatR.js";import"./settings-C3kz8lqM.js";import"./events-OVwOsPzJ.js";import"./index-BLvAv8yb.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";function a(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...m(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"filterpanellabel",children:"FilterPanelLabel"}),`
`,e.jsx(t.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"FilterPanelLabel"})," is for internal use only by the ",e.jsx(t.code,{children:"FilterPanel"}),"."]}),`
`,e.jsx(u,{children:e.jsx(x,{of:l})}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(h,{})]})}function j(n={}){const{wrapper:t}={...m(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}const b="filter-panel-stories",$={title:"Experimental/Internal/FilterPanelLabel",component:c,tags:["autodocs"],parameters:{styles:p,docs:{page:j}},argTypes:{className:{control:{type:{}}},onChange:{table:{disable:!0}},count:{control:{type:"select",labels:{0:"No value",1:"As number: 10",2:'As string: "1,500"'}},mapping:{0:void 0,1:10,2:"1,500"},options:[0,1,2]},labelText:{control:{type:"select",labels:{0:"Plain text",1:"Very long text",2:"Using markup"}},mapping:{0:"Label",1:"Really, really long label name",2:r.createElement(r.Fragment,null,r.createElement("strong",null,"Formatted")," ",r.createElement("em",null,"label"))},options:[0,1,2]}},args:{count:1,labelText:0}},f=n=>r.createElement("div",{className:`${b}__viewport`},r.createElement(d,null,r.createElement(c,{...n}))),l=f.bind({});l.storyName="Default";l.args={title:""};var o,s,i;l.parameters={...l.parameters,docs:{...(o=l.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  return <div className={\`\${storyClass}__viewport\`}>
      <FilterPanel>
        <FilterPanelLabel {...args} />
      </FilterPanel>
    </div>;
}`,...(i=(s=l.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const k=["Default"];export{l as Default,k as __namedExportsOrder,$ as default};
