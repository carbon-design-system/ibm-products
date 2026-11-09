var j=Object.defineProperty;var t=(r,o)=>j(r,"name",{value:o,configurable:!0});import{u as b,j as e,aO as l,b1 as f,aS as T,R as p}from"./iframe-CxssGfIx.js";import{A as C}from"./index-tJHR7slp.js";import{S as u}from"./SearchBar-DZqnxGyW.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-11-B2Q-R7v1.js";import"./bucket-21-CFosKZLf.js";import"./Search-CmByNr0i.js";import"./useNoInteractiveChildrenForLabel-CId5oWH1.js";import"./FormContext-BjQFomFa.js";import"./bucket-17-BF5Rew1w.js";import"./MultiSelect-DtaGQKAn.js";import"./defaultItemToString-DDHghiWu.js";import"./downshift.esm-Cs0y05Iw.js";import"./inheritsLoose-CdLKJotq.js";import"./index-BYZvoV4K.js";import"./index-CWMOMp-b.js";import"./bucket-20-BIFULJnx.js";import"./mergeRefs-BH0-8uDG.js";import"./useNormalizedInputProps-DzHYawdO.js";import"./Text-D6GWTWaE.js";import"./Checkbox-DO-Rkv4h.js";import"./hasHelperText-CcJ_VphT.js";import"./devtools-C3HuczRY.js";function x(r){const o={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...b(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{id:"searchbar",children:"SearchBar"}),`
`,e.jsx(o.p,{children:e.jsx(o.a,{href:"https://carbondesignsystem.com/patterns/search-pattern/",rel:"nofollow",children:"Carbon Search pattern"})}),`
`,e.jsx(o.h2,{id:"deprecation-notice",children:"Deprecation notice"}),`
`,e.jsx(o.p,{children:`This component is deprecated and will be removed in the next major version. This
component has no known production adoption and will not be migrating to Carbon
core.`}),`
`,e.jsx(o.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(o.h2,{id:"overview",children:"Overview"}),`
`,`
`,e.jsx(o.h2,{id:"example-usage",children:"Example usage"}),`
`,e.jsx(o.h3,{id:"default",children:"Default"}),`
`,e.jsx(l,{of:n}),`
`,e.jsx(o.h3,{id:"initial-value",children:"Initial Value"}),`
`,e.jsx(l,{of:s}),`
`,e.jsx(o.h3,{id:"scopes",children:"Scopes"}),`
`,e.jsx(l,{of:a}),`
`,e.jsx(o.h3,{id:"unsorted-scopes",children:"Unsorted Scopes"}),`
`,e.jsx(l,{of:c}),`
`,e.jsx(o.h3,{id:"selected-scopes",children:"Selected Scopes"}),`
`,e.jsx(l,{of:i}),`
`,e.jsx(o.h2,{id:"code-sample",children:"Code sample"}),`
`,e.jsx(f,{exampleDirectory:"SearchBar"}),`
`,e.jsx(o.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(T,{})]})}t(x,"_createMdxContent");function v(r={}){const{wrapper:o}={...b(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(x,{...r})}):x(r)}t(v,"MDXContent");const B="",{action:S}=__STORYBOOK_MODULE_ACTIONS__,H={title:"Deprecated/SearchBar",component:u,tags:["autodocs"],argTypes:{value:{control:{disable:!0}},onChange:{control:{disable:!0}},className:{control:{disable:!0}},hideScopesLabel:{control:{disable:!0}},onSubmit:{control:{disable:!0}},scopeToString:{control:{disable:!0}},scopes:{control:{disable:!0}},scopesTypeLabel:{control:{disable:!0}},selectedScopes:{control:{disable:!0}},sortItems:{control:{disable:!0}},titleText:{control:{disable:!0}},translateWithId:{control:{disable:!0}}},parameters:{styles:B,docs:{page:v}},decorators:[r=>p.createElement(C,{type:"deprecation-notice",text:p.createElement("div",null,p.createElement("strong",null,"SearchBar")," is deprecated and will be removed in a future major release. This component has no known production adoption and will not be migrating to Carbon core.")},r())]},m=[{id:"scope-2",text:"Scope 2"},{id:"scope-1",text:"Scope 1"},{id:"scope-3",text:"Scope 3"}],d={clearButtonLabelText:"Clear",placeholderText:"Search...",submitLabel:"Search",labelText:"Label text",onChange:t(r=>S("onChange")(r),"onChange"),onSubmit:t(r=>S("onSubmit")(r),"onSubmit")},h=t(({...r})=>p.createElement(u,{...r}),"DefaultTemplate"),g=t(({...r})=>p.createElement(u,{...r}),"ScopesTemplate"),n=h.bind({});n.args={...d};const s=h.bind({});s.args={...d,value:"Initial value"};const a=g.bind({});a.args={...d,scopes:m,scopesTypeLabel:"Scopes",scopeToString:t(r=>r?r.text:"","scopeToString")};const c=g.bind({});c.args={...d,scopes:m,scopesTypeLabel:"Scopes",sortItems:t(r=>r,"sortItems"),scopeToString:t(r=>r?r.text:"","scopeToString")};const i=h.bind({});i.args={...d,scopes:m,scopesTypeLabel:"Scopes",selectedScopes:[m[0]],scopeToString:t(r=>r?r.text:"","scopeToString")};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <SearchBar {...args} />;
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <SearchBar {...args} />;
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <SearchBar {...args} />;
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <SearchBar {...args} />;
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <SearchBar {...args} />;
}`,...i.parameters?.docs?.source}}};const J=["Default","InitialValue","Scopes","UnsortedScopes","SelectedScopes"];export{n as Default,s as InitialValue,a as Scopes,i as SelectedScopes,c as UnsortedScopes,J as __namedExportsOrder,H as default};
//# sourceMappingURL=SearchBar.stories-CmfGShrX.js.map
