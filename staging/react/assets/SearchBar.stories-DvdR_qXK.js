var j=Object.defineProperty;var o=(r,s)=>j(r,"name",{value:s,configurable:!0});import{j as e,aA as l,aR as f,aB as T,e as S}from"./iframe-D7SEW46n.js";import{useMDXComponents as b}from"./index-mjRP7aaa.js";import{S as m}from"./SearchBar-rdz3mmfb.js";import"./preload-helper-Cc2_yIPf.js";import"./MultiSelect-Dy9k0WaO.js";import"./index-CAZ07BHJ.js";import"./inheritsLoose-CdLKJotq.js";import"./FormContext-CPS5qPuK.js";import"./mergeRefs-BH0-8uDG.js";import"./Checkbox-IP95NoIw.js";import"./Text-CpOZ4YWZ.js";import"./index-CnSU-Q9T.js";import"./index-5XOxg9sF.js";import"./bucket-19-CmSPB5ma.js";import"./utils-DwyE9iBt.js";import"./defaultItemToString-DDHghiWu.js";import"./useNormalizedInputProps-qNpjkVGD.js";import"./Search-BzMD7ewh.js";import"./bucket-15-BKeoxuDz.js";import"./devtools-1BZM14jD.js";function h(r){const s={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...b(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{id:"searchbar",children:"SearchBar"}),`
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
`,e.jsx(l,{of:t}),`
`,e.jsx(s.h3,{id:"initial-value",children:"Initial Value"}),`
`,e.jsx(l,{of:a}),`
`,e.jsx(s.h3,{id:"scopes",children:"Scopes"}),`
`,e.jsx(l,{of:n}),`
`,e.jsx(s.h3,{id:"unsorted-scopes",children:"Unsorted Scopes"}),`
`,e.jsx(l,{of:c}),`
`,e.jsx(s.h3,{id:"selected-scopes",children:"Selected Scopes"}),`
`,e.jsx(l,{of:i}),`
`,e.jsx(s.h2,{id:"code-sample",children:"Code sample"}),`
`,e.jsx(f,{exampleDirectory:"SearchBar"}),`
`,e.jsx(s.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(T,{})]})}o(h,"_createMdxContent");function C(r={}){const{wrapper:s}={...b(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(h,{...r})}):h(r)}o(C,"MDXContent");const v="",{action:x}=__STORYBOOK_MODULE_ACTIONS__,Y={title:"Preview Candidate/SearchBar",component:m,tags:["autodocs"],argTypes:{value:{control:{disable:!0}},onChange:{control:{disable:!0}},className:{control:{disable:!0}},hideScopesLabel:{control:{disable:!0}},onSubmit:{control:{disable:!0}},scopeToString:{control:{disable:!0}},scopes:{control:{disable:!0}},scopesTypeLabel:{control:{disable:!0}},selectedScopes:{control:{disable:!0}},sortItems:{control:{disable:!0}},titleText:{control:{disable:!0}},translateWithId:{control:{disable:!0}}},parameters:{styles:v,docs:{page:C}}},d=[{id:"scope-2",text:"Scope 2"},{id:"scope-1",text:"Scope 1"},{id:"scope-3",text:"Scope 3"}],p={clearButtonLabelText:"Clear",placeholderText:"Search...",submitLabel:"Search",labelText:"Label text",onChange:o(r=>x("onChange")(r),"onChange"),onSubmit:o(r=>x("onSubmit")(r),"onSubmit")},u=o(({...r})=>S.createElement(m,{...r}),"DefaultTemplate"),g=o(({...r})=>S.createElement(m,{...r}),"ScopesTemplate"),t=u.bind({});t.args={...p};const a=u.bind({});a.args={...p,value:"Initial value"};const n=g.bind({});n.args={...p,scopes:d,scopesTypeLabel:"Scopes",scopeToString:o(r=>r?r.text:"","scopeToString")};const c=g.bind({});c.args={...p,scopes:d,scopesTypeLabel:"Scopes",sortItems:o(r=>r,"sortItems"),scopeToString:o(r=>r?r.text:"","scopeToString")};const i=u.bind({});i.args={...p,scopes:d,scopesTypeLabel:"Scopes",selectedScopes:[d[0]],scopeToString:o(r=>r?r.text:"","scopeToString")};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <SearchBar {...args} />;
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <SearchBar {...args} />;
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <SearchBar {...args} />;
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <SearchBar {...args} />;
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <SearchBar {...args} />;
}`,...i.parameters?.docs?.source}}};const q=["Default","InitialValue","Scopes","UnsortedScopes","SelectedScopes"];export{t as Default,a as InitialValue,n as Scopes,i as SelectedScopes,c as UnsortedScopes,q as __namedExportsOrder,Y as default};
//# sourceMappingURL=SearchBar.stories-DvdR_qXK.js.map
