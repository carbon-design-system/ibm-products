import{p as z,j as e,B as me}from"./settings-BiUEFdm2.js";import{a as I}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{useMDXComponents as G}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-CsZ1lTTC.js";import{e as g,i as f,C as he}from"./index-CDYzkStP.js";import{C as ge}from"./story-helper-YTYnELA9.js";import{R as fe,r as S}from"./index-BwDkhjyp.js";import{P as s}from"./index-Dk74W0Oi.js";import{c as ye}from"./deprecate-D9ms-jbM.js";import{g as be}from"./devtools-BPcQvzXy.js";import{S as Se}from"./Search-BxJEuMG1.js";import{M as xe}from"./MultiSelect-CADSkVLv.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./events-Bq7WR1mU.js";import"./index-BONylQH5.js";import"./v4-CQkTLCs1.js";import"./iframe-j3s5A4v9.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-BjQFKvNH.js";import"./isSymbol-BZYRlrjc.js";import"./index-DrFu-skq.js";import"./tslib.es6-B4_xh3D5.js";import"./FormContext-C7kRVu4t.js";import"./bucket-13-DC_Wi0nI.js";import"./index-mZNF_Ndq.js";import"./index-DcAOwtUU.js";import"./index-n5c_F1iv.js";import"./mergeRefs-CTUecegF.js";import"./bucket-17-CArjO86K.js";const c=`${z.prefix}--search-bar`,C="SearchBar",v={onSubmit:()=>{},onChange:()=>{},scopes:[],selectedScopes:[],hideScopesLabel:!0};let n=fe.forwardRef(({className:t,clearButtonLabelText:r,hideScopesLabel:b=v.hideScopesLabel,labelText:T,onChange:q=v.onChange,onSubmit:J=v.onSubmit,placeholderText:K,scopes:a=[],scopesTypeLabel:Q,scopeToString:Y,selectedScopes:j=[],sortItems:Z,submitLabel:ee,translateWithId:te,value:re,...se},ne)=>{const[o,ae]=S.useState(re||""),[oe,ie]=S.useState(j||[]),[ce,L]=S.useState(!1);S.useEffect(()=>{!o||!o.length?L(!1):L(!0)},[o]);const le=i=>{i.preventDefault();const h={value:o};a.length>0&&(h.selectedScopes=oe),J(h)},pe=({selectedItems:i})=>{ie(i),q({selectedScopes:i,value:o})},ue=i=>{const{value:h}=i.target,B={value:h};a.length>0&&(B.selectedScopes=j),ae(h),q(B)},de={initialSelectedItems:j,items:a,itemToString:Y,label:Q,sortItems:Z,translateWithId:te};return e.jsxs("form",{...se,ref:ne,...be(C),className:ye(c,t,{[`${c}--hide-scopes-label`]:b}),onSubmit:le,children:[a!=null&&a.length?e.jsx(xe,{...de,id:`${c}__multi-select`,name:"search-scopes",className:`${c}__scopes`,onChange:pe,size:"lg"}):null,e.jsx(Se,{className:`${c}__input`,closeButtonLabelText:r,labelText:T,name:"search-input",onChange:ue,placeholder:K,value:o,size:"lg"}),e.jsx(me,{name:"search-submit",kind:"primary",type:"submit",className:`${c}__submit`,disabled:!ce,children:ee})]})});n=z.checkComponentEnabled(n,C);n.displayName=C;const Te=(t,r,b,...T)=>t.scopes&&t.scopes.length>0&&!t[r]?new Error(`Required \`${r}\` when \`scopes\` prop type is supplied to \`${b}\`. Validation failed.`):s.string(t,r,b,...T),je={titleText:s.string};n.propTypes={className:s.string,clearButtonLabelText:s.string.isRequired,hideScopesLabel:s.bool,labelText:s.string.isRequired,onChange:s.func,onSubmit:s.func,placeholderText:s.string.isRequired,scopeToString:s.func,scopes:s.arrayOf(s.oneOfType([s.string,s.object])),scopesTypeLabel:Te,selectedScopes:s.arrayOf(s.oneOfType([s.string,s.object])),sortItems:s.func,submitLabel:s.string.isRequired,translateWithId:s.func,value:s.string,...je};n.__docgenInfo={description:"",methods:[],displayName:"SearchBar",props:{className:{required:!1,tsType:{name:"string"},description:"@type {string} Optional additional class name.",type:{name:"string"}},clearButtonLabelText:{required:!0,tsType:{name:"string"},description:"@type {string} The label text for the search text input.",type:{name:"string"}},hideScopesLabel:{required:!1,tsType:{name:"boolean"},description:"Whether or not the scopes MultiSelect label is visually hidden.",defaultValue:{value:"true",computed:!1},type:{name:"bool"}},labelText:{required:!0,tsType:{name:"string"},description:"@type {string} The label text for the search text input.",type:{name:"string"}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: any) => void",signature:{arguments:[{type:{name:"any"},name:"event"}],return:{name:"void"}}},description:"@type {Function} Function handler for when the user changes their query search.",defaultValue:{value:"() => {}",computed:!1},type:{name:"func"}},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: any) => void",signature:{arguments:[{type:{name:"any"},name:"event"}],return:{name:"void"}}},description:"@type {Function} Function handler for when the user submits a search.",defaultValue:{value:"() => {}",computed:!1},type:{name:"func"}},placeholderText:{required:!0,tsType:{name:"string"},description:"@type {string} Placeholder text to be displayed in the search input.",type:{name:"string"}},scopeToString:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"@type {Function} Function to get the text for each scope to display in dropdown.",type:{name:"func"}},scopes:{required:!1,tsType:{name:"union",raw:"string[] | object[]",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"Array",elements:[{name:"object"}],raw:"object[]"}]},description:"@type {Array<any>} Array of allowed search scopes.",defaultValue:{value:"[]",computed:!1},type:{name:"arrayOf",value:{name:"union",value:[{name:"string"},{name:"object"}]}}},scopesTypeLabel:{required:!1,tsType:{name:"conditionalScopePropValidator"},description:"@type {string} The name text for the search scope type.",type:{name:"custom",raw:`(
  props,
  propName,
  componentName,
  ...rest
) => {
  if (props.scopes && props.scopes.length > 0 && !props[propName]) {
    return new Error(
      \`Required \\\`\${propName}\\\` when \\\`scopes\\\` prop type is supplied to \\\`\${componentName}\\\`. Validation failed.\`
    );
  }
  /**@ts-ignore */
  return PropTypes.string(props, propName, componentName, ...rest);
}`}},selectedScopes:{required:!1,tsType:{name:"union",raw:"string[] | object[]",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"Array",elements:[{name:"object"}],raw:"object[]"}]},description:"@type {Array<any> Array of initially selected search scopes.",defaultValue:{value:"[]",computed:!1},type:{name:"arrayOf",value:{name:"union",value:[{name:"string"},{name:"object"}]}}},sortItems:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Optional custom sorting algorithm for an array of scope items.
By default, scope items are sorted in ascending alphabetical order,
with "selected" items moved to the start of the scope items array.`,type:{name:"func"}},submitLabel:{required:!0,tsType:{name:"string"},description:"@type {string} The label text for the search submit button.",type:{name:"string"}},titleText:{required:!1,tsType:{name:"string"},description:"Provide accessible label text for the scopes MultiSelect.",type:{name:"string"}},translateWithId:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"@type {func} Callback function for translating MultiSelect's child ListBoxMenuIcon SVG title.",type:{name:"func"}},value:{required:!1,tsType:{name:"string"},description:"@type {string} Search query value.",type:{name:"string"}}},composes:["PropsWithChildren"]};function _(t){const r={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ul:"ul",...G(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"searchbar",children:"SearchBar"}),`
`,e.jsx(r.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(r.h2,{id:"overview",children:"Overview"}),`
`,`
`,e.jsx(r.h2,{id:"example-usage",children:"Example usage"}),`
`,e.jsx(r.h3,{id:"default",children:"Default"}),`
`,e.jsx(g,{children:e.jsx(f,{of:l})}),`
`,e.jsx(r.h3,{id:"initial-value",children:"Initial Value"}),`
`,e.jsx(g,{children:e.jsx(f,{of:p})}),`
`,e.jsx(r.h3,{id:"scopes",children:"Scopes"}),`
`,e.jsx(g,{children:e.jsx(f,{of:u})}),`
`,e.jsx(r.h3,{id:"unsorted-scopes",children:"Unsorted Scopes"}),`
`,e.jsx(g,{children:e.jsx(f,{of:d})}),`
`,e.jsx(r.h3,{id:"selected-scopes",children:"Selected Scopes"}),`
`,e.jsx(g,{children:e.jsx(f,{of:m})}),`
`,e.jsx(r.h2,{id:"code-sample",children:"Code sample"}),`
`,e.jsx(ge,{exampleDirectory:"SearchBar"}),`
`,e.jsx(r.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(he,{})]})}function ve(t={}){const{wrapper:r}={...G(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(_,{...t})}):_(t)}const Ce="",nt={title:"IBM Products/Components/Search bar/SearchBar",component:n,tags:["autodocs"],argTypes:{value:{control:{disable:!0}},onChange:{control:{disable:!0}},className:{control:{disable:!0}},hideScopesLabel:{control:{disable:!0}},onSubmit:{control:{disable:!0}},scopeToString:{control:{disable:!0}},scopes:{control:{disable:!0}},scopesTypeLabel:{control:{disable:!0}},selectedScopes:{control:{disable:!0}},sortItems:{control:{disable:!0}},titleText:{control:{disable:!0}},translateWithId:{control:{disable:!0}}},parameters:{styles:Ce,docs:{page:ve}}},x=[{id:"scope-2",text:"Scope 2"},{id:"scope-1",text:"Scope 1"},{id:"scope-3",text:"Scope 3"}],y={clearButtonLabelText:"Clear",placeholderText:"Search...",submitLabel:"Search",labelText:"Label text",onChange:t=>I("onChange")(t),onSubmit:t=>I("onSubmit")(t)},w=({...t})=>e.jsx(n,{...t}),H=({...t})=>e.jsx(n,{...t}),l=w.bind({});l.args={...y};const p=w.bind({});p.args={...y,value:"Initial value"};const u=H.bind({});u.args={...y,scopes:x,scopesTypeLabel:"Scopes",scopeToString:t=>t?t.text:""};const d=H.bind({});d.args={...y,scopes:x,scopesTypeLabel:"Scopes",sortItems:t=>t,scopeToString:t=>t?t.text:""};const m=w.bind({});m.args={...y,scopes:x,scopesTypeLabel:"Scopes",selectedScopes:[x[0]],scopeToString:t=>t?t.text:""};var P,N,O;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`({
  ...args
}) => {
  return <SearchBar {...args} />;
}`,...(O=(N=l.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var V,D,M;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`({
  ...args
}) => {
  return <SearchBar {...args} />;
}`,...(M=(D=p.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var $,A,R;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`({
  ...args
}) => {
  return <SearchBar {...args} />;
}`,...(R=(A=u.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var E,F,k;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`({
  ...args
}) => {
  return <SearchBar {...args} />;
}`,...(k=(F=d.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var W,U,X;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`({
  ...args
}) => {
  return <SearchBar {...args} />;
}`,...(X=(U=m.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const at=["Default","InitialValue","Scopes","UnsortedScopes","SelectedScopes"];export{l as Default,p as InitialValue,u as Scopes,m as SelectedScopes,d as UnsortedScopes,at as __namedExportsOrder,nt as default};
