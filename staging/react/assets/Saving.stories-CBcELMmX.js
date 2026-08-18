var N=Object.defineProperty;var a=(t,e)=>N(t,"name",{value:e,configurable:!0});import{u as T,j as n,aN as q,aU as A,r as d,R as s,c as M,B as y,N as z}from"./iframe-1IYrbML7.js";import{T as O}from"./TextArea-CH67QTCy.js";import{I as P}from"./InlineLoading-BFd6-Jhe.js";import{a as B,b as F}from"./bucket-7-DHuUxKrn.js";import{S as R}from"./bucket-16-yGLssMBD.js";import"./preload-helper-Cc2_yIPf.js";import"./Text-CGH0tvjM.js";import"./hasHelperText-CcJ_VphT.js";import"./index-BFuhdGQf.js";import"./index-CYUyvB3t.js";import"./bucket-20-DuHSi_VM.js";import"./FormContext-wtA34ekt.js";import"./getAnnouncement-BwJDzAQp.js";import"./bucket-21-DShaIQEG.js";const L=".saving-story-textarea{margin-block-end:.5rem}.saving-pattern{display:inline-flex;align-items:center}.saving-pattern__buttons{display:flex}.saving-pattern__buttons .cds--btn .cds--inline-loading{min-block-size:auto}.saving-pattern__message{display:flex;align-items:center;gap:.25rem}.saving-pattern__error-icon{display:flex;align-items:center;color:var(--cds-support-error, #da1e28)}.saving-pattern__text{font-size:var(--cds-body-compact-01-font-size, .875rem);font-weight:var(--cds-body-compact-01-font-weight, 400);line-height:var(--cds-body-compact-01-line-height, 1.28572);letter-spacing:var(--cds-body-compact-01-letter-spacing, .16px);color:var(--cds-text-secondary, #525252)}";function j(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...T(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"saving",children:"Saving"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/patterns/save/usage/",rel:"nofollow",children:"Usage guidelines"})}),`
`,n.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#overview",children:"Overview"})}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"#example-usage",children:"Example usage"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#auto-save",children:"Auto save"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#manual-save",children:"Manual save"})}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsx(e.p,{children:`The Saving pattern provides a standard way to communicate the state of a save
operation to the user. There are two variants:`}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Auto"}),` — saving happens automatically in the background (for example,
triggered by a debounced `,n.jsx(e.code,{children:"onChange"}),` handler). A short status string confirms
the current state.`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Manual"}),` — the user initiates the save explicitly by clicking a button. The
save button reflects the current state via its label and icon; a Cancel button
is available only while saving is in progress.`]}),`
`]}),`
`,n.jsx(e.p,{children:"To build this pattern, we recommend including the following ingredients:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://react.carbondesignsystem.com/?path=/docs/components-button",rel:"nofollow",children:"Button"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://react.carbondesignsystem.com/?path=/docs/components-inlineloading",rel:"nofollow",children:"InlineLoading"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://react.carbondesignsystem.com/?path=/docs/components-textarea",rel:"nofollow",children:"TextArea"})}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { Button, InlineLoading, TextArea } from '@carbon/react';
import {
  CheckmarkOutline,
  ErrorFilled,
  ErrorOutline,
  Save,
} from '@carbon/react/icons';
`})}),`
`,n.jsx(e.h3,{id:"example-usage",children:"Example usage"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[`💡 Check our
`,n.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products/src/patterns/Saving/example",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products/src/patterns/Saving/example",rel:"nofollow",children:n.jsx(e.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit react-patterns"})})}),`
`,n.jsx(q,{withSource:"none",children:n.jsx(A,{of:o})}),`
`,n.jsx(e.h2,{id:"auto-save",children:"Auto save"}),`
`,n.jsx(e.p,{children:`The auto-save variant renders a status message only. The save is triggered
automatically after a debounce delay following user input. No buttons are
displayed — the user does not explicitly initiate the save.`}),`
`,n.jsx(e.h2,{id:"manual-save",children:"Manual save"}),`
`,n.jsx(e.p,{children:`The manual-save variant renders a pair of buttons. The primary button initiates
the save and updates its label and icon to reflect the current state. The
secondary Cancel button is enabled only while saving is in progress, allowing
the user to abort.`}),`
`,n.jsx(e.h3,{id:"design-guidelines",children:"Design guidelines"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Labels"}),` — use sentence-case labels (e.g. "Save", "Saving…", "Saved",
"Failed to save").`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Icon descriptions"})," — always provide an accessible ",n.jsx(e.code,{children:"iconDescription"}),` for
each state's icon.`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Disabled states"}),` — in the manual variant, disable the Save button while
`,n.jsx(e.code,{children:"status === 'in-progress'"}),` and disable Cancel whenever the status is not
`,n.jsx(e.code,{children:"'in-progress'"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Auto mode"}),` — hide the status indicator until the user has made their first
change (`,n.jsx(e.code,{children:"dirtyInput"}),"), and hide it again if the status returns to ",n.jsx(e.code,{children:"'default'"}),"."]}),`
`]})]})}a(j,"_createMdxContent");function $(t={}){const{wrapper:e}={...T(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(j,{...t})}):j(t)}a($,"MDXContent");const m="saving-pattern",g=d.forwardRef(({secondaryButtonText:t,className:e,defaultIconDescription:c,defaultText:x,failIconDescription:l,failText:v,inProgressIconDescription:f,inProgressText:p,onRequestCancel:b,onRequestSave:_,status:i,successIconDescription:E,successText:k,type:I,...D},C)=>{const h={default:{text:x,iconDescription:c,icon:a(r=>s.createElement(R,{size:16,...r}),"icon")},"in-progress":{text:p,iconDescription:f,icon:a(r=>s.createElement(P,{size:16,...r}),"icon")},success:{text:k,iconDescription:E,icon:a(r=>s.createElement(z,{size:16,...r}),"icon")},fail:{text:v,iconDescription:l,icon:a(r=>s.createElement(F,{size:16,...r}),"icon")}};return s.createElement("div",{...D,ref:C,className:M(m,e)},I==="auto"?s.createElement("div",{className:`${m}__message`},i==="fail"&&s.createElement("div",{className:`${m}__error-icon`},s.createElement(B,{size:16})),s.createElement("p",{className:`${m}__text`},h[i]?.text)):s.createElement("div",{className:`${m}__buttons`},s.createElement(y,{onClick:b,kind:"secondary",disabled:i!=="in-progress",type:"button"},t),s.createElement(y,{onClick:_,kind:"primary",renderIcon:h[i]?.icon,iconDescription:h[i]?.iconDescription,disabled:i==="in-progress",type:"button"},h[i]?.text)))});g.displayName="Saving";g.__docgenInfo={description:"",methods:[],displayName:"Saving",props:{className:{required:!1,tsType:{name:"string"},description:""},defaultIconDescription:{required:!1,tsType:{name:"string"},description:""},defaultText:{required:!1,tsType:{name:"string"},description:""},failIconDescription:{required:!1,tsType:{name:"string"},description:""},failText:{required:!1,tsType:{name:"string"},description:""},inProgressIconDescription:{required:!1,tsType:{name:"string"},description:""},inProgressText:{required:!1,tsType:{name:"string"},description:""},secondaryButtonText:{required:!1,tsType:{name:"string"},description:""},status:{required:!0,tsType:{name:"union",raw:"'default' | 'in-progress' | 'success' | 'fail'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'in-progress'"},{name:"literal",value:"'success'"},{name:"literal",value:"'fail'"}]},description:""},successIconDescription:{required:!1,tsType:{name:"string"},description:""},successText:{required:!1,tsType:{name:"string"},description:""},type:{required:!0,tsType:{name:"union",raw:"'manual' | 'auto'",elements:[{name:"literal",value:"'manual'"},{name:"literal",value:"'auto'"}]},description:""}}};const X=a(t=>new Promise(e=>setTimeout(e,t)),"wait$1"),S=a(()=>{const[t,e]=d.useState("default"),[c,x]=d.useState(""),[l,v]=d.useState(!1);d.useEffect(()=>{const p=setTimeout(async()=>{l&&(e("in-progress"),await X(1e3),e("success"))},1e3);return()=>clearTimeout(p)},[c,l]);const f=a(p=>{const{value:b}=p.target;l||v(!0),x(b)},"onChangeHandler");return s.createElement("main",null,s.createElement(O,{id:"save-auto-textarea",onChange:f,value:c,labelText:"Enter in the thing you wanted saved",className:"saving-story-textarea"}),l&&t!=="default"&&s.createElement(g,{type:"auto",status:t,inProgressText:"Saving...",successText:"Saved",failText:"Failed to save"}))},"AutoSaving");S.__docgenInfo={description:"",methods:[],displayName:"AutoSaving"};const H=a(t=>new Promise(e=>setTimeout(e,t)),"wait"),w=a(()=>{const[t,e]=d.useState("default"),c=a(async()=>{e("in-progress"),await H(2e3),e("success")},"onSaveHandler");return s.createElement("main",null,s.createElement(g,{type:"manual",status:t,defaultText:"Save",inProgressText:"Saving...",successText:"Saved",failText:"Failed to save. Try again?",defaultIconDescription:"Save icon",inProgressIconDescription:"Saving in progress",successIconDescription:"Saved successfully",failIconDescription:"Save failed",secondaryButtonText:"Cancel",onRequestSave:c,onRequestCancel:a(()=>e("default"),"onRequestCancel")}))},"ManualSaving");w.__docgenInfo={description:"",methods:[],displayName:"ManualSaving"};const re={title:"Patterns/Saving",component:a(()=>{},"component"),tags:["autodocs"],parameters:{styles:L,docs:{page:$}}},o=a(()=>s.createElement(S,null),"Auto");o.storyName="Auto";const u=a(()=>s.createElement(w,null),"Manual");u.storyName="Manual";o.__docgenInfo={description:"",methods:[],displayName:"Auto"};u.__docgenInfo={description:"",methods:[],displayName:"Manual"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"() => <AutoSaving />",...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"() => <ManualSaving />",...u.parameters?.docs?.source}}};const oe=["Auto","Manual"];export{o as Auto,u as Manual,oe as __namedExportsOrder,re as default};
//# sourceMappingURL=Saving.stories-CBcELMmX.js.map
