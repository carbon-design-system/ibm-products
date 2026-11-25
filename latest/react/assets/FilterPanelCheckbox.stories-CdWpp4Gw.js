var m=Object.defineProperty;var a=(n,e)=>m(n,"name",{value:e,configurable:!0});import{u as s,j as t,aO as d,aR as p,aS as h,R as o}from"./iframe-D4ZNlhex.js";import{u as x}from"./uuidv4-Fbcg8Vng.js";import{s as u}from"./_storybook-styles-DYLPaI3o.js";import{A as b}from"./index-7eWKnxVS.js";import{F as i}from"./FilterPanelCheckbox-CYy8ORUt.js";import{a as j}from"./FilterPanelLabel-DAzgQoxK.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-11-DhLs2RAA.js";import"./bucket-21-Hs8N1bt_.js";import"./Checkbox-6O6B4yM3.js";import"./Text-BFiLljUe.js";import"./index-Cao-7C0a.js";import"./index-BRJsLXjB.js";import"./bucket-20-gkMQqIp8.js";import"./hasHelperText-CcJ_VphT.js";import"./useNormalizedInputProps-wWIaiWPW.js";import"./useNoInteractiveChildrenForLabel-CA4kHAjX.js";import"./devtools-DViE3VQV.js";function l(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...s(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"filterpanelcheckbox",children:"FilterPanelCheckbox"}),`
`,t.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#overview",children:"Overview"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#example-usage",children:"Example usage"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,t.jsx(e.h2,{id:"deprecation-notice",children:"Deprecation notice"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"This component is deprecated and will be removed in the next major version."}),`
`]}),`
`,t.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.code,{children:"FilterPanelCheckbox"})," is a modified Carbon ",t.jsx(e.code,{children:"Checkbox"}),` and accepts both a
label and a count.`]}),`
`,t.jsx(e.h2,{id:"example-usage",children:"Example usage"}),`
`,t.jsx(d,{children:t.jsx(p,{of:r})}),`
`,t.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,t.jsx(h,{})]})}a(l,"_createMdxContent");function g(n={}){const{wrapper:e}={...s(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(l,{...n})}):l(n)}a(g,"MDXContent");const{action:C}=__STORYBOOK_MODULE_ACTIONS__,v="filter-panel-stories",U={title:"Deprecated/Filter panel/FilterPanelCheckbox",component:i,tags:["autodocs"],argTypes:{className:{control:{type:{}}},id:{table:{disable:!0}},onChange:{table:{disable:!0}},count:{control:{type:"select",labels:{0:"No value",1:"As number: 10",2:'As string: "1,500"'}},mapping:{0:void 0,1:10,2:"1,500"},options:[0,1,2]},labelText:{control:{type:"select",labels:{0:"Plain text",1:"Very long text",2:"Using markup"}},mapping:{0:"Checkbox",1:"Really, really long checkbox name",2:o.createElement(o.Fragment,null,o.createElement("strong",null,"Formatted")," ",o.createElement("em",null,"checkbox"))},options:[0,1,2]}},args:{count:1,labelText:0},parameters:{styles:u,chromatic:{disableSnapshot:!0},docs:{page:g}},decorators:[n=>o.createElement(b,{type:"deprecation-notice",text:o.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},n())]},f=a(n=>o.createElement("div",{className:`${v}__viewport`},o.createElement(j,null,o.createElement(i,{...n}))),"Template"),r=f.bind({});r.storyName="Default";r.args={id:x(),onChange:a((n,{checked:e,id:c})=>C("onChange Checkbox (event, { checked, id })")(n,e,c),"onChange"),title:""};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  return <div className={\`\${storyClass}__viewport\`}>
      <FilterPanel>
        <FilterPanelCheckbox {...args} />
      </FilterPanel>
    </div>;
}`,...r.parameters?.docs?.source}}};const $=["Default"];export{r as Default,$ as __namedExportsOrder,U as default};
//# sourceMappingURL=FilterPanelCheckbox.stories-CdWpp4Gw.js.map
