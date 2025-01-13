import{e as a,r as x}from"./index-CPiZ6Cnx.js";import{a as E}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{aw as e,al as f,ax as y,ak as he}from"./index-Bns_Ssrt.js";import{useMDXComponents as G}from"./index-CUO_02de.js";import"./chunk-NUUEMKO5-BrfLt39G.js";import{C as ge}from"./story-helper-xvx7_7ek.js";import{c as fe,P as n}from"./index-CXyjPnaX.js";import{p as H,B as ye}from"./settings-iwZeeh4T.js";import{S as be}from"./Search-soxfLq4A.js";import{M as Se}from"./MultiSelect-DmE7dnKq.js";import{g as xe}from"./devtools-CjVY-wQW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./iframe-CXupES5w.js";import"../sb-preview/runtime.js";import"./index-BSHYryQu.js";import"./index-Bsyy8W_U.js";import"./index-Df9so8jS.js";import"./index-DMCuvgYY.js";import"./index-DrFu-skq.js";import"./react-18-C6q_qjn2.js";import"./tslib.es6-B4_xh3D5.js";import"./events-OVwOsPzJ.js";import"./index-DJK44odq.js";import"./FormContext-CgeSXHS1.js";import"./bucket-14-BKxafgTW.js";import"./index-BwLm7_-6.js";import"./mergeRefs-CTUecegF.js";import"./Checkbox-UQpZ5X10.js";import"./Text-vNWzJqus.js";import"./bucket-18-By6NmkK1.js";const l=`${H.prefix}--search-bar`,C="SearchBar",w={onSubmit:()=>{},onChange:()=>{},scopes:[],selectedScopes:[],hideScopesLabel:!0};let s=a.forwardRef(({className:t,clearButtonLabelText:r,hideScopesLabel:S=w.hideScopesLabel,labelText:v,onChange:L=w.onChange,onSubmit:K=w.onSubmit,placeholderText:Q,scopes:o=[],scopesTypeLabel:Y,scopeToString:Z,selectedScopes:j=[],sortItems:ee,submitLabel:te,translateWithId:re,value:ne,...se},ae)=>{const[i,oe]=x.useState(ne||""),[ie,ce]=x.useState(j||[]),[le,B]=x.useState(!1);x.useEffect(()=>{!i||!i.length?B(!1):B(!0)},[i]);const pe=c=>{c.preventDefault();const g={value:i};o.length>0&&(g.selectedScopes=ie),K(g)},ue=({selectedItems:c})=>{ce(c),L({selectedScopes:c,value:i})},de=c=>{const{value:g}=c.target,I={value:g};o.length>0&&(I.selectedScopes=j),oe(g),L(I)},me={initialSelectedItems:j,items:o,itemToString:Z,label:Y,sortItems:ee,translateWithId:re};return a.createElement("form",{...se,ref:ae,...xe(C),className:fe(l,t,{[`${l}--hide-scopes-label`]:S}),onSubmit:pe},o!=null&&o.length?a.createElement(Se,{...me,id:`${l}__multi-select`,name:"search-scopes",className:`${l}__scopes`,onChange:ue,size:"lg"}):null,a.createElement(be,{className:`${l}__input`,closeButtonLabelText:r,labelText:v,name:"search-input",onChange:de,placeholder:Q,value:i,size:"lg"}),a.createElement(ye,{name:"search-submit",kind:"primary",type:"submit",className:`${l}__submit`,disabled:!le},te))});s=H.checkComponentEnabled(s,C);s.displayName=C;const Te=(t,r,S,...v)=>t.scopes&&t.scopes.length>0&&!t[r]?new Error(`Required \`${r}\` when \`scopes\` prop type is supplied to \`${S}\`. Validation failed.`):n.string(t,r,S,...v),ve={titleText:n.string};s.propTypes={className:n.string,clearButtonLabelText:n.string.isRequired,hideScopesLabel:n.bool,labelText:n.string.isRequired,onChange:n.func,onSubmit:n.func,placeholderText:n.string.isRequired,scopeToString:n.func,scopes:n.arrayOf(n.oneOfType([n.string,n.object])),scopesTypeLabel:Te,selectedScopes:n.arrayOf(n.oneOfType([n.string,n.object])),sortItems:n.func,submitLabel:n.string.isRequired,translateWithId:n.func,value:n.string,...ve};s.__docgenInfo={description:"",methods:[],displayName:"SearchBar",props:{className:{required:!1,tsType:{name:"string"},description:"@type {string} Optional additional class name.",type:{name:"string"}},clearButtonLabelText:{required:!0,tsType:{name:"string"},description:"@type {string} The label text for the search text input.",type:{name:"string"}},hideScopesLabel:{required:!1,tsType:{name:"boolean"},description:"Whether or not the scopes MultiSelect label is visually hidden.",defaultValue:{value:"true",computed:!1},type:{name:"bool"}},labelText:{required:!0,tsType:{name:"string"},description:"@type {string} The label text for the search text input.",type:{name:"string"}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: any) => void",signature:{arguments:[{type:{name:"any"},name:"event"}],return:{name:"void"}}},description:"@type {Function} Function handler for when the user changes their query search.",defaultValue:{value:"() => {}",computed:!1},type:{name:"func"}},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: any) => void",signature:{arguments:[{type:{name:"any"},name:"event"}],return:{name:"void"}}},description:"@type {Function} Function handler for when the user submits a search.",defaultValue:{value:"() => {}",computed:!1},type:{name:"func"}},placeholderText:{required:!0,tsType:{name:"string"},description:"@type {string} Placeholder text to be displayed in the search input.",type:{name:"string"}},scopeToString:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"@type {Function} Function to get the text for each scope to display in dropdown.",type:{name:"func"}},scopes:{required:!1,tsType:{name:"union",raw:"string[] | object[]",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"Array",elements:[{name:"object"}],raw:"object[]"}]},description:"@type {Array<any>} Array of allowed search scopes.",defaultValue:{value:"[]",computed:!1},type:{name:"arrayOf",value:{name:"union",value:[{name:"string"},{name:"object"}]}}},scopesTypeLabel:{required:!1,tsType:{name:"conditionalScopePropValidator"},description:"@type {string} The name text for the search scope type.",type:{name:"custom",raw:`(
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
`,e.jsx(f,{children:e.jsx(y,{of:p})}),`
`,e.jsx(r.h3,{id:"initial-value",children:"Initial Value"}),`
`,e.jsx(f,{children:e.jsx(y,{of:u})}),`
`,e.jsx(r.h3,{id:"scopes",children:"Scopes"}),`
`,e.jsx(f,{children:e.jsx(y,{of:d})}),`
`,e.jsx(r.h3,{id:"unsorted-scopes",children:"Unsorted Scopes"}),`
`,e.jsx(f,{children:e.jsx(y,{of:m})}),`
`,e.jsx(r.h3,{id:"selected-scopes",children:"Selected Scopes"}),`
`,e.jsx(f,{children:e.jsx(y,{of:h})}),`
`,e.jsx(r.h2,{id:"code-sample",children:"Code sample"}),`
`,e.jsx(ge,{exampleDirectory:"SearchBar"}),`
`,e.jsx(r.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(he,{})]})}function je(t={}){const{wrapper:r}={...G(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(_,{...t})}):_(t)}const we="",rt={title:"Experimental/Components/Search bar/SearchBar",component:s,tags:["autodocs"],argTypes:{value:{control:{disable:!0}},onChange:{control:{disable:!0}},className:{control:{disable:!0}},hideScopesLabel:{control:{disable:!0}},onSubmit:{control:{disable:!0}},scopeToString:{control:{disable:!0}},scopes:{control:{disable:!0}},scopesTypeLabel:{control:{disable:!0}},selectedScopes:{control:{disable:!0}},sortItems:{control:{disable:!0}},titleText:{control:{disable:!0}},translateWithId:{control:{disable:!0}}},parameters:{styles:we,docs:{page:je}}},T=[{id:"scope-2",text:"Scope 2"},{id:"scope-1",text:"Scope 1"},{id:"scope-3",text:"Scope 3"}],b={clearButtonLabelText:"Clear",placeholderText:"Search...",submitLabel:"Search",labelText:"Label text",onChange:t=>E("onChange")(t),onSubmit:t=>E("onSubmit")(t)},q=({...t})=>a.createElement(s,{...t}),J=({...t})=>a.createElement(s,{...t}),p=q.bind({});p.args={...b};const u=q.bind({});u.args={...b,value:"Initial value"};const d=J.bind({});d.args={...b,scopes:T,scopesTypeLabel:"Scopes",scopeToString:t=>t?t.text:""};const m=J.bind({});m.args={...b,scopes:T,scopesTypeLabel:"Scopes",sortItems:t=>t,scopeToString:t=>t?t.text:""};const h=q.bind({});h.args={...b,scopes:T,scopesTypeLabel:"Scopes",selectedScopes:[T[0]],scopeToString:t=>t?t.text:""};var N,P,O;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`({
  ...args
}) => {
  return <SearchBar {...args} />;
}`,...(O=(P=p.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var V,D,A;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`({
  ...args
}) => {
  return <SearchBar {...args} />;
}`,...(A=(D=u.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var M,$,R;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`({
  ...args
}) => {
  return <SearchBar {...args} />;
}`,...(R=($=d.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};var k,F,W;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`({
  ...args
}) => {
  return <SearchBar {...args} />;
}`,...(W=(F=m.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var U,X,z;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`({
  ...args
}) => {
  return <SearchBar {...args} />;
}`,...(z=(X=h.parameters)==null?void 0:X.docs)==null?void 0:z.source}}};const nt=["Default","InitialValue","Scopes","UnsortedScopes","SelectedScopes"];export{p as Default,u as InitialValue,d as Scopes,h as SelectedScopes,m as UnsortedScopes,nt as __namedExportsOrder,rt as default};
