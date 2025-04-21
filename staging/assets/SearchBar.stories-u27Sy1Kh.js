import{e as _}from"./index-DzvNrmz8.js";import{a as u}from"./index-B-lxVbXh.js";import{j as e}from"./index-Cg1swjps.js";import{useMDXComponents as M}from"./index-B7BkHM3Y.js";import"./index-yZ7SzbPB.js";import{C as P}from"./story-helper-DPPXKxdX.js";import{S as m}from"./SearchBar-Brc3fUdl.js";import{a as i,j as l,C as U}from"./index-CzcKhd7Q.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./v4-CtRu48qb.js";import"./index-Bv4JGo1_.js";import"./preview-CtqmI_Lj.js";import"./iframe-Czcp_UX8.js";import"./DocsRenderer-CFRXHY34-DLQHOBuc.js";import"./client-fwTTGz69.js";import"./index-5As4T26e.js";import"./settings-CP9zVSjJ.js";import"./events-OVwOsPzJ.js";import"./index-P6UCShJt.js";import"./Search-BqckCrhT.js";import"./FormContext-TkVWILkp.js";import"./bucket-15-BuGLwsj4.js";import"./MultiSelect-BNZzndEw.js";import"./index-CpKToLap.js";import"./inheritsLoose-D3Az7yH5.js";import"./mergeRefs-CTUecegF.js";import"./Checkbox-BedUlDBz.js";import"./Text-DyBNjUAs.js";import"./bucket-18-D-cwffHE.js";import"./devtools-B_dijMH7.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";function x(r){const o={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...M(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{id:"searchbar",children:"SearchBar"}),`
`,e.jsx(o.p,{children:e.jsx(o.a,{href:"https://carbondesignsystem.com/patterns/search-pattern/",rel:"nofollow",children:"Carbon Search pattern"})}),`
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
`,e.jsx(i,{children:e.jsx(l,{of:s})}),`
`,e.jsx(o.h3,{id:"initial-value",children:"Initial Value"}),`
`,e.jsx(i,{children:e.jsx(l,{of:t})}),`
`,e.jsx(o.h3,{id:"scopes",children:"Scopes"}),`
`,e.jsx(i,{children:e.jsx(l,{of:a})}),`
`,e.jsx(o.h3,{id:"unsorted-scopes",children:"Unsorted Scopes"}),`
`,e.jsx(i,{children:e.jsx(l,{of:n})}),`
`,e.jsx(o.h3,{id:"selected-scopes",children:"Selected Scopes"}),`
`,e.jsx(i,{children:e.jsx(l,{of:c})}),`
`,e.jsx(o.h2,{id:"code-sample",children:"Code sample"}),`
`,e.jsx(P,{exampleDirectory:"SearchBar"}),`
`,e.jsx(o.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(U,{})]})}function V(r={}){const{wrapper:o}={...M(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(x,{...r})}):x(r)}const X="",Se={title:"Experimental/Components/Search bar/SearchBar",component:m,tags:["autodocs"],argTypes:{value:{control:{disable:!0}},onChange:{control:{disable:!0}},className:{control:{disable:!0}},hideScopesLabel:{control:{disable:!0}},onSubmit:{control:{disable:!0}},scopeToString:{control:{disable:!0}},scopes:{control:{disable:!0}},scopesTypeLabel:{control:{disable:!0}},selectedScopes:{control:{disable:!0}},sortItems:{control:{disable:!0}},titleText:{control:{disable:!0}},translateWithId:{control:{disable:!0}}},parameters:{styles:X,docs:{page:V}}},d=[{id:"scope-2",text:"Scope 2"},{id:"scope-1",text:"Scope 1"},{id:"scope-3",text:"Scope 3"}],p={clearButtonLabelText:"Clear",placeholderText:"Search...",submitLabel:"Search",labelText:"Label text",onChange:r=>u("onChange")(r),onSubmit:r=>u("onSubmit")(r)},h=({...r})=>_.createElement(m,{...r}),O=({...r})=>_.createElement(m,{...r}),s=h.bind({});s.args={...p};const t=h.bind({});t.args={...p,value:"Initial value"};const a=O.bind({});a.args={...p,scopes:d,scopesTypeLabel:"Scopes",scopeToString:r=>r?r.text:""};const n=O.bind({});n.args={...p,scopes:d,scopesTypeLabel:"Scopes",sortItems:r=>r,scopeToString:r=>r?r.text:""};const c=h.bind({});c.args={...p,scopes:d,scopesTypeLabel:"Scopes",selectedScopes:[d[0]],scopeToString:r=>r?r.text:""};var S,j,b;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`({
  ...args
}) => {
  return <SearchBar {...args} />;
}`,...(b=(j=s.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var g,f,C;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`({
  ...args
}) => {
  return <SearchBar {...args} />;
}`,...(C=(f=t.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var T,v,B;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`({
  ...args
}) => {
  return <SearchBar {...args} />;
}`,...(B=(v=a.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var y,L,I;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`({
  ...args
}) => {
  return <SearchBar {...args} />;
}`,...(I=(L=n.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var D,E,w;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`({
  ...args
}) => {
  return <SearchBar {...args} />;
}`,...(w=(E=c.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};const je=["Default","InitialValue","Scopes","UnsortedScopes","SelectedScopes"];export{s as Default,t as InitialValue,a as Scopes,c as SelectedScopes,n as UnsortedScopes,je as __namedExportsOrder,Se as default};
