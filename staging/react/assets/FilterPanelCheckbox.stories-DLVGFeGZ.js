var m=Object.defineProperty;var a=(t,e)=>m(t,"name",{value:e,configurable:!0});import{j as n,aA as d,aC as p,aB as h,e as o}from"./iframe-D7SEW46n.js";import{u as x}from"./uuidv4-Fbcg8Vng.js";import{useMDXComponents as s}from"./index-mjRP7aaa.js";import{s as u}from"./_storybook-styles-DYLPaI3o.js";import{A as b}from"./index-0r6Ybb21.js";import{F as i}from"./FilterPanelCheckbox-B3DwmkaC.js";import{a as j}from"./FilterPanelLabel-BQKtkeri.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-10-CZYtW2_b.js";import"./bucket-19-CmSPB5ma.js";import"./Checkbox-IP95NoIw.js";import"./Text-CpOZ4YWZ.js";import"./index-CnSU-Q9T.js";import"./index-5XOxg9sF.js";import"./utils-DwyE9iBt.js";import"./devtools-1BZM14jD.js";function l(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"filterpanelcheckbox",children:"FilterPanelCheckbox"}),`
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
`,n.jsx(h,{})]})}a(l,"_createMdxContent");function C(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(l,{...t})}):l(t)}a(C,"MDXContent");const{action:g}=__STORYBOOK_MODULE_ACTIONS__,v="filter-panel-stories",X={title:"Deprecated/Filter panel/FilterPanelCheckbox",component:i,tags:["autodocs"],argTypes:{className:{control:{type:{}}},id:{table:{disable:!0}},onChange:{table:{disable:!0}},count:{control:{type:"select",labels:{0:"No value",1:"As number: 10",2:'As string: "1,500"'}},mapping:{0:void 0,1:10,2:"1,500"},options:[0,1,2]},labelText:{control:{type:"select",labels:{0:"Plain text",1:"Very long text",2:"Using markup"}},mapping:{0:"Checkbox",1:"Really, really long checkbox name",2:o.createElement(o.Fragment,null,o.createElement("strong",null,"Formatted")," ",o.createElement("em",null,"checkbox"))},options:[0,1,2]}},args:{count:1,labelText:0},parameters:{styles:u,docs:{page:C}},decorators:[t=>o.createElement(b,{type:"deprecation-notice",text:o.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},t())]},f=a(t=>o.createElement("div",{className:`${v}__viewport`},o.createElement(j,null,o.createElement(i,{...t}))),"Template"),r=f.bind({});r.storyName="Default";r.args={id:x(),onChange:a((t,{checked:e,id:c})=>g("onChange Checkbox (event, { checked, id })")(t,e,c),"onChange"),title:""};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  return <div className={\`\${storyClass}__viewport\`}>
      <FilterPanel>
        <FilterPanelCheckbox {...args} />
      </FilterPanel>
    </div>;
}`,...r.parameters?.docs?.source}}};const B=["Default"];export{r as Default,B as __namedExportsOrder,X as default};
//# sourceMappingURL=FilterPanelCheckbox.stories-DLVGFeGZ.js.map
