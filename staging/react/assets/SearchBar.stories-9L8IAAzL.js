import{el as e,em as l,eo as i,ey as j,en as f,e as S}from"./iframe-Cbdf71kV.js";import{useMDXComponents as b}from"./index-Bz9OSaUz.js";import{S as m}from"./SearchBar-KMJ54ojZ.js";import"./MultiSelect-BrY82tK2.js";import"./index-BhC_9JVN.js";import"./inheritsLoose-DHKJTbHM.js";import"./FormContext-ChOR-8Xx.js";import"./mergeRefs-91-mP8KM.js";import"./Checkbox-BvGpbVrt.js";import"./index-DgPdVJKo.js";import"./bucket-18-DV2Au_NX.js";import"./utils-Rl5Zs1h-.js";import"./Text-ByKyVd5E.js";import"./bucket-19-CLDj7gXe.js";import"./Search-C7JQKTZg.js";import"./bucket-15-ChlaTHT7.js";import"./devtools-BsT0_Owc.js";function u(r){const s={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...b(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{id:"searchbar",children:"SearchBar"}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://carbondesignsystem.com/patterns/search-pattern/",rel:"nofollow",children:"Carbon Search pattern"})}),`
`,e.jsx(s.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(s.h2,{id:"overview",children:"Overview"}),`
`,`
`,e.jsx(s.h2,{id:"example-usage",children:"Example usage"}),`
`,e.jsx(s.h3,{id:"default",children:"Default"}),`
`,e.jsx(l,{children:e.jsx(i,{of:o})}),`
`,e.jsx(s.h3,{id:"initial-value",children:"Initial Value"}),`
`,e.jsx(l,{children:e.jsx(i,{of:t})}),`
`,e.jsx(s.h3,{id:"scopes",children:"Scopes"}),`
`,e.jsx(l,{children:e.jsx(i,{of:n})}),`
`,e.jsx(s.h3,{id:"unsorted-scopes",children:"Unsorted Scopes"}),`
`,e.jsx(l,{children:e.jsx(i,{of:a})}),`
`,e.jsx(s.h3,{id:"selected-scopes",children:"Selected Scopes"}),`
`,e.jsx(l,{children:e.jsx(i,{of:c})}),`
`,e.jsx(s.h2,{id:"code-sample",children:"Code sample"}),`
`,e.jsx(j,{exampleDirectory:"SearchBar"}),`
`,e.jsx(s.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(f,{})]})}function T(r={}){const{wrapper:s}={...b(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(u,{...r})}):u(r)}const C="",{action:x}=__STORYBOOK_MODULE_ACTIONS__,R={title:"Experimental/SearchBar",component:m,tags:["autodocs"],argTypes:{value:{control:{disable:!0}},onChange:{control:{disable:!0}},className:{control:{disable:!0}},hideScopesLabel:{control:{disable:!0}},onSubmit:{control:{disable:!0}},scopeToString:{control:{disable:!0}},scopes:{control:{disable:!0}},scopesTypeLabel:{control:{disable:!0}},selectedScopes:{control:{disable:!0}},sortItems:{control:{disable:!0}},titleText:{control:{disable:!0}},translateWithId:{control:{disable:!0}}},parameters:{styles:C,docs:{page:T}}},d=[{id:"scope-2",text:"Scope 2"},{id:"scope-1",text:"Scope 1"},{id:"scope-3",text:"Scope 3"}],p={clearButtonLabelText:"Clear",placeholderText:"Search...",submitLabel:"Search",labelText:"Label text",onChange:r=>x("onChange")(r),onSubmit:r=>x("onSubmit")(r)},h=({...r})=>S.createElement(m,{...r}),g=({...r})=>S.createElement(m,{...r}),o=h.bind({});o.args={...p};const t=h.bind({});t.args={...p,value:"Initial value"};const n=g.bind({});n.args={...p,scopes:d,scopesTypeLabel:"Scopes",scopeToString:r=>r?r.text:""};const a=g.bind({});a.args={...p,scopes:d,scopesTypeLabel:"Scopes",sortItems:r=>r,scopeToString:r=>r?r.text:""};const c=h.bind({});c.args={...p,scopes:d,scopesTypeLabel:"Scopes",selectedScopes:[d[0]],scopeToString:r=>r?r.text:""};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <SearchBar {...args} />;
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <SearchBar {...args} />;
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <SearchBar {...args} />;
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <SearchBar {...args} />;
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <SearchBar {...args} />;
}`,...c.parameters?.docs?.source}}};const k=["Default","InitialValue","Scopes","UnsortedScopes","SelectedScopes"];export{o as Default,t as InitialValue,n as Scopes,c as SelectedScopes,a as UnsortedScopes,k as __namedExportsOrder,R as default};
