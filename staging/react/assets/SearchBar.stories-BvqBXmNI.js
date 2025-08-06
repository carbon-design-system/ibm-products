import{el as e,em as l,ex as g,en as j,e as x}from"./iframe-DMSo7fNu.js";import{useMDXComponents as S}from"./index-VUs-zLzk.js";import{S as d}from"./SearchBar-QMF8Vudc.js";import"./MultiSelect-DonrfaUD.js";import"./index-CigMzKTM.js";import"./inheritsLoose-DHKJTbHM.js";import"./FormContext-EOTHCOkS.js";import"./mergeRefs-91-mP8KM.js";import"./Checkbox-Ct6BjSZ4.js";import"./index-BkMDkXli.js";import"./bucket-18-NqwZiyr7.js";import"./utils-CkYnHtpG.js";import"./Text-Dh2QBwQf.js";import"./bucket-19-D9iFC4WK.js";import"./Search-Ck63I16p.js";import"./bucket-15-BaxoEXEo.js";import"./devtools-BJavCYMb.js";function u(r){const s={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...S(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{id:"searchbar",children:"SearchBar"}),`
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
`,e.jsx(l,{of:o}),`
`,e.jsx(s.h3,{id:"initial-value",children:"Initial Value"}),`
`,e.jsx(l,{of:t}),`
`,e.jsx(s.h3,{id:"scopes",children:"Scopes"}),`
`,e.jsx(l,{of:a}),`
`,e.jsx(s.h3,{id:"unsorted-scopes",children:"Unsorted Scopes"}),`
`,e.jsx(l,{of:n}),`
`,e.jsx(s.h3,{id:"selected-scopes",children:"Selected Scopes"}),`
`,e.jsx(l,{of:c}),`
`,e.jsx(s.h2,{id:"code-sample",children:"Code sample"}),`
`,e.jsx(g,{exampleDirectory:"SearchBar"}),`
`,e.jsx(s.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(j,{})]})}function f(r={}){const{wrapper:s}={...S(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(u,{...r})}):u(r)}const T="",{action:h}=__STORYBOOK_MODULE_ACTIONS__,N={title:"Experimental/SearchBar",component:d,tags:["autodocs"],argTypes:{value:{control:{disable:!0}},onChange:{control:{disable:!0}},className:{control:{disable:!0}},hideScopesLabel:{control:{disable:!0}},onSubmit:{control:{disable:!0}},scopeToString:{control:{disable:!0}},scopes:{control:{disable:!0}},scopesTypeLabel:{control:{disable:!0}},selectedScopes:{control:{disable:!0}},sortItems:{control:{disable:!0}},titleText:{control:{disable:!0}},translateWithId:{control:{disable:!0}}},parameters:{styles:T,docs:{page:f}}},p=[{id:"scope-2",text:"Scope 2"},{id:"scope-1",text:"Scope 1"},{id:"scope-3",text:"Scope 3"}],i={clearButtonLabelText:"Clear",placeholderText:"Search...",submitLabel:"Search",labelText:"Label text",onChange:r=>h("onChange")(r),onSubmit:r=>h("onSubmit")(r)},m=({...r})=>x.createElement(d,{...r}),b=({...r})=>x.createElement(d,{...r}),o=m.bind({});o.args={...i};const t=m.bind({});t.args={...i,value:"Initial value"};const a=b.bind({});a.args={...i,scopes:p,scopesTypeLabel:"Scopes",scopeToString:r=>r?r.text:""};const n=b.bind({});n.args={...i,scopes:p,scopesTypeLabel:"Scopes",sortItems:r=>r,scopeToString:r=>r?r.text:""};const c=m.bind({});c.args={...i,scopes:p,scopesTypeLabel:"Scopes",selectedScopes:[p[0]],scopeToString:r=>r?r.text:""};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <SearchBar {...args} />;
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
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
}`,...c.parameters?.docs?.source}}};const R=["Default","InitialValue","Scopes","UnsortedScopes","SelectedScopes"];export{o as Default,t as InitialValue,a as Scopes,c as SelectedScopes,n as UnsortedScopes,R as __namedExportsOrder,N as default};
