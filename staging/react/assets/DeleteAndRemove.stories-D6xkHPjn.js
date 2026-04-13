var J=Object.defineProperty;var n=(i,e)=>J(i,"name",{value:e,configurable:!0});import{j as t,aD as K,aF as Q,r as s,e as o,B as I}from"./iframe-B4rJbuYi.js";import{useMDXComponents as _}from"./index-2CjpABYM.js";import{T as M}from"./TextInput-BBATFvKm.js";import{M as Y}from"./Modal-BNtG2fjv.js";import{T as z}from"./Notification-DhpABApq.js";import{L}from"./Link-pH65GHmt.js";import{C as P}from"./Checkbox-BYDjfuTW.js";import{F as A}from"./FormLabel-D0SQ47pk.js";import{c as q}from"./bucket-11-Bv31aPkg.js";import{I as Z}from"./InlineLoading-xiZHHIVS.js";import{T as ee}from"./bucket-19-Bd0ix_8N.js";import"./preload-helper-Cc2_yIPf.js";import"./Text-Drzp9J0j.js";import"./index-2cgUJDVc.js";import"./index-xYa1U4c2.js";import"./utils-CEm6Ryh0.js";import"./FormContext-_ii8s4P8.js";import"./useNormalizedInputProps-DnTF4qMt.js";import"./bucket-20-CW2CpDM7.js";import"./toggleClass-C-4mpgrX.js";import"./ButtonSet-D6G4_VtK.js";import"./index-DK1CVULi.js";import"./LayerContext-Bxhywl2x.js";import"./clamp-ekNJC_Xv.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-nUCJraCO.js";import"./bucket-6-0Oc9PexT.js";import"./bucket-10-BUrAaRCQ.js";const te=".app{margin:.75rem}.app .cds--inline-loading{min-block-size:unset}.notification{position:absolute;inset-block-start:.75rem;inset-inline-end:.75rem}.no-bullets{margin:0;list-style-type:none;padding-inline-start:2rem}";function B(i){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",..._(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"delete-and-remove",children:"Delete and remove"}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/patterns/delete-and-remove/usage/",rel:"nofollow",children:"Usage guidelines"})}),`
`,t.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#overview",children:"Overview"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#example-usage",children:"Example usage"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#high-impact-deletion",children:"High impact deletion"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#high-impact-deletion-with-connected-items",children:"High impact deletion with connected items"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#high-impact-batch-deletion",children:"High impact batch deletion"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#medium-impact-deletion-or-removal",children:"Medium impact deletion or removal"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#low-impact-deletion-or-removal",children:"Low impact deletion or removal"})}),`
`]}),`
`,t.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,t.jsx(e.p,{children:`“Removing” is an action that moves information from one location to another.
Removal can be both destructive and non-destructive. “Deletion” is the most
common type of removal and is destructive`}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:`NOTE: Patterns have multiple ways of accomplishing a user need and typically
use a combination of components with additional design considerations. The
pattern code we share is meant to serve as an example implementation that can
be built and extended further.`}),`
`]}),`
`,t.jsx(e.p,{children:"To build these patterns, we recommend including the following components:"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"https://react.carbondesignsystem.com/?path=/docs/components-composedmodal",rel:"nofollow",children:"ComposedModal"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"https://react.carbondesignsystem.com/?path=/docs/components-button",rel:"nofollow",children:"Button"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"https://react.carbondesignsystem.com/?path=/docs/components-checkbox",rel:"nofollow",children:"Checkbox"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"https://react.carbondesignsystem.com/?path=/docs/components-textinput",rel:"nofollow",children:"TextInput"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"https://react.carbondesignsystem.com/?path=/docs/components-formlabel",rel:"nofollow",children:"FormLabel"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"https://react.carbondesignsystem.com/?path=/docs/components-inlineloading",rel:"nofollow",children:"InlineLoading"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"https://react.carbondesignsystem.com/?path=/docs/components-link",rel:"nofollow",children:"Link"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"https://react.carbondesignsystem.com/?path=/story/components-notifications-toast",rel:"nofollow",children:"ToastNotification"})}),`
`]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`import {
  Button,
  Checkbox,
  FormLabel,
  InlineLoading,
  Link,
  Modal,
  TextInput,
  ToastNotification,
} from '@carbon/react';
`})}),`
`,t.jsx(e.h2,{id:"example-usage",children:"Example usage"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsxs(e.p,{children:[`💡 Check our
`,t.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products/src/patterns/DeleteAndRemove/example",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products/src/patterns/DeleteAndRemove/example",rel:"nofollow",children:t.jsx(e.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit react-patterns"})})}),`
`,`
`,t.jsx(K,{withSource:"none",children:t.jsx(Q,{of:b})}),`
`,t.jsx(e.h2,{id:"high-impact-deletion",children:"High impact deletion"}),`
`,t.jsx(e.p,{children:`When deleting is high-impact, a confirmation dialog should be presented to the
user which displays:`}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"The name of the resource"}),`
`,t.jsx(e.li,{children:"Consequences of the deletion"}),`
`,t.jsx(e.li,{children:"This action cannot be undone."}),`
`,t.jsx(e.li,{children:"An editable text field for the name of the resource to be entered"}),`
`]}),`
`,t.jsx(e.h2,{id:"high-impact-deletion-with-connected-items",children:"High impact deletion with connected items"}),`
`,t.jsx(e.p,{children:`It is similar to high-impact deletion pattern, but the confirmation dialog will
display the below 2 additional content:`}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"A list of all the connected items"}),`
`,t.jsx(e.li,{children:"A checkbox to confirm the deletion of all its connected items."}),`
`]}),`
`,t.jsx(e.h2,{id:"high-impact-batch-deletion",children:"High impact batch deletion"}),`
`,t.jsx(e.p,{children:`In batch deletion, a confirmation dialog should be presented to the user which
displays:`}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"The names of the items selected"}),`
`,t.jsx(e.li,{children:"The consequences of the deletion"}),`
`,t.jsx(e.li,{children:"The phrase, “This action cannot be undone”"}),`
`,t.jsx(e.li,{children:"A checkbox to confirm the deletion of the selected resources"}),`
`,t.jsx(e.li,{children:"A note of items that cannot be deleted in batch selection (optional)"}),`
`]}),`
`,t.jsx(e.h2,{id:"medium-impact-deletion-or-removal",children:"Medium impact deletion or removal"}),`
`,t.jsx(e.p,{children:`When deleting is medium-impact, the user is not required to confirm the resource
name by typing it into a text field.`}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:`NOTE: The medium-impact removal pattern is similar to medium-impact deletion
pattern, with the only difference being the usage of “remove” or “delete“ in
the text. Use “remove” when the action is reversible or not truly destructive.`}),`
`]}),`
`,t.jsx(e.h2,{id:"low-impact-deletion-or-removal",children:"Low impact deletion or removal"}),`
`,t.jsx(e.p,{children:"In low impact situations, user confirmation may not be required."}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:`NOTE: The low-impact removal pattern is similar to low-impact deletion
pattern, with the only difference being the usage of “remove” or “delete“ in
the text.`}),`
`]})]})}n(B,"_createMdxContent");function ne(i={}){const{wrapper:e}={..._(),...i.components};return e?t.jsx(e,{...i,children:t.jsx(B,{...i})}):B(i)}n(ne,"MDXContent");function O(){const i=new Date;let e=i.getHours();const l=i.getMinutes().toString().padStart(2,"0"),a=i.getSeconds().toString().padStart(2,"0"),d=e>=12?"PM":"AM";return e=e%12,e=e||12,`${e}:${l}:${a} ${d}`}n(O,"getCurrentTime");const S=n(({open:i,onRequestClose:e,onRequestSubmit:l,onSecondarySubmit:a,modalHeading:d,modalLabel:r,primaryButtonText:u="Delete",secondaryButtonText:c="Cancel",primaryButtonDisabled:p,loadingStatus:h,loadingDescription:x,onLoadingSuccess:m,size:g,danger:T=!0,successNotificationTitle:y="Success",successNotificationSubtitle:E,showSuccessNotification:f=!1,children:N,...U})=>{const[G,k]=s.useState(!1);return s.useEffect(()=>{f&&h==="finished"&&k(!0),h==="inactive"&&k(!1)},[f,h]),o.createElement(o.Fragment,null,o.createElement(Y,{open:i,onRequestClose:e,danger:T,modalHeading:d,modalLabel:r,primaryButtonText:u,secondaryButtonText:c,onRequestSubmit:l,onSecondarySubmit:a??e,primaryButtonDisabled:p,loadingStatus:h,loadingDescription:x,onLoadingSuccess:m,size:g,...U},N),G&&E&&o.createElement(z,{"aria-label":"closes notification",caption:O(),kind:"success",lowContrast:!0,onClose:n(()=>k(!1),"onClose"),role:"status",statusIconDescription:"notification",subtitle:E,timeout:3e3,title:y,className:"notification"}))},"DeleteAndRemove");S.displayName="DeleteAndRemove";S.__docgenInfo={description:"",methods:[],displayName:"DeleteAndRemove",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onRequestClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onRequestSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSecondarySubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},modalHeading:{required:!0,tsType:{name:"string"},description:""},modalLabel:{required:!1,tsType:{name:"string"},description:""},primaryButtonText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Delete'",computed:!1}},secondaryButtonText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Cancel'",computed:!1}},primaryButtonDisabled:{required:!1,tsType:{name:"boolean"},description:""},loadingStatus:{required:!1,tsType:{name:"union",raw:"'inactive' | 'active' | 'finished' | 'error'",elements:[{name:"literal",value:"'inactive'"},{name:"literal",value:"'active'"},{name:"literal",value:"'finished'"},{name:"literal",value:"'error'"}]},description:""},loadingDescription:{required:!1,tsType:{name:"string"},description:""},onLoadingSuccess:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:""},danger:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},successNotificationTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Success'",computed:!1}},successNotificationSubtitle:{required:!1,tsType:{name:"string"},description:""},showSuccessNotification:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const ie=n(i=>new Promise(e=>setTimeout(e,i)),"wait$4"),$=n(()=>{const[i,e]=s.useState(!1),[l,a]=s.useState("inactive"),[d,r]=s.useState("Deleting"),[u,c]=s.useState(""),[p,h]=s.useState(!1),x=n(async()=>(await ie(1e3),!0),"deleteItem"),m=n(async()=>{a("active"),await x(),a("finished"),r("Deleted!"),e(!1)},"handleDelete"),g=n(y=>{c(y.target.value),h(y.target.value==="Bx1001")},"validateInput"),T=n(()=>{a("inactive"),r("Deleting...")},"resetLoaderStatus");return o.createElement("div",{className:"app"},o.createElement(I,{size:"md",kind:"danger",onClick:n(()=>{c(""),e(!0)},"onClick")},"Delete"),o.createElement(S,{open:i,onRequestClose:n(()=>e(!1),"onRequestClose"),onRequestSubmit:m,modalHeading:"Confirm delete",modalLabel:"Delete Bx1001",primaryButtonDisabled:!p,loadingStatus:l,loadingDescription:d,onLoadingSuccess:T,showSuccessNotification:!0,successNotificationSubtitle:"Bx1001 has been successfully deleted."},o.createElement("p",{style:{marginBottom:"1rem"}},"Deleting 'Bx1001' will permanently delete the configuration. This action cannot be undone."),o.createElement(M,{"data-modal-primary-focus":!0,id:"text-input-1",labelText:"Type Bx1001 to confirm",placeholder:"Name of resource",value:u,onChange:g})))},"HighImpactDeletion");$.__docgenInfo={description:"",methods:[],displayName:"HighImpactDeletion"};const oe=n(i=>new Promise(e=>setTimeout(e,i)),"wait$3"),R=[{id:1,name:"Route1_name"},{id:2,name:"Hpt-392-ser"},{id:3,name:"Route2_name"}],W=n(()=>{const[i,e]=s.useState(!1),[l,a]=s.useState("inactive"),[d,r]=s.useState("Deleting"),[u,c]=s.useState(""),[p,h]=s.useState(!1),[x,m]=s.useState(!1),g=n(async()=>(await oe(1e3),!0),"deleteItem"),T=n(async()=>{a("active"),await g(),a("finished"),r("Deleted!"),e(!1)},"handleDelete"),y=n(f=>{c(f.target.value),h(f.target.value==="Bx1001")},"validateInput"),E=n(()=>{a("inactive"),r("Deleting...")},"resetLoaderStatus");return o.createElement("div",{className:"app"},o.createElement(I,{size:"md",kind:"danger",onClick:n(()=>{c(""),m(!1),e(!0)},"onClick")},"Delete"),o.createElement(S,{open:i,onRequestClose:n(()=>e(!1),"onRequestClose"),onRequestSubmit:T,modalHeading:"Confirm delete",modalLabel:"Delete Bx1001",primaryButtonDisabled:!p||!x,loadingStatus:l,loadingDescription:d,onLoadingSuccess:E,showSuccessNotification:!0,successNotificationSubtitle:"Bx1001 and all connected items have been successfully deleted."},o.createElement("p",{style:{marginBottom:"1rem"}},"When you delete the 'Bx1001', this resource and all connected items are permanently deleted. This action cannot be undone."),o.createElement(M,{"data-modal-primary-focus":!0,value:u,id:"text-input-1",labelText:"Type Bx1001 to confirm",placeholder:"Name of resource",onChange:y,style:{marginBottom:"1rem"}}),o.createElement(A,null,"The following connected items will also be deleted. Review each item to confirm that they can be deleted."),o.createElement(P,{checked:x,id:"checkbox-1",labelText:`${R.length} items: `,onChange:n((f,{checked:N})=>m(N),"onChange")}),o.createElement("ul",{className:"no-bullets"},R.map(f=>o.createElement("li",{key:f.id},o.createElement(L,{href:"#",renderIcon:q},f.name))))))},"HighImpactDeletionWithConnectedItems");W.__docgenInfo={description:"",methods:[],displayName:"HighImpactDeletionWithConnectedItems"};const ae=n(i=>new Promise(e=>setTimeout(e,i)),"wait$2"),H=[{id:1,name:"Route1_name"},{id:2,name:"Hpt-392-ser"},{id:3,name:"Route2_name"}],C=[{id:1,name:"Route3_name"},{id:2,name:"Route4_name"}],V=n(()=>{const[i,e]=s.useState(!1),[l,a]=s.useState("inactive"),[d,r]=s.useState("Deleting"),[u,c]=s.useState(!1),p=n(async()=>(await ae(1e3),!0),"deleteItem"),h=n(async()=>{a("active"),await p(),a("finished"),r("Deleted!"),e(!1)},"handleDelete"),x=n(()=>{a("inactive"),r("Deleting...")},"resetLoaderStatus");return o.createElement("div",{className:"app"},o.createElement(I,{size:"md",kind:"danger",onClick:n(()=>{c(!1),e(!0)},"onClick")},"Delete all"),o.createElement(S,{open:i,onRequestClose:n(()=>e(!1),"onRequestClose"),onRequestSubmit:h,modalHeading:"Confirm delete",modalLabel:"Delete selected items",primaryButtonDisabled:!u,size:"sm",loadingStatus:l,loadingDescription:d,onLoadingSuccess:x,showSuccessNotification:!0,successNotificationSubtitle:"Selected items have been successfully deleted."},o.createElement("p",{style:{marginBottom:"1rem"}},"Decide if you want to keep these items. Deleting these items is permanent. This action cannot be undone."),o.createElement(A,null,"The following items will be deleted. Review each item to confirm that they can be deleted."),o.createElement(P,{checked:u,id:"checkbox-1",labelText:`${H.length} items: `,onChange:n((m,{checked:g})=>c(g),"onChange")}),o.createElement("ul",{className:"no-bullets"},H.map(m=>o.createElement("li",{key:m.id},o.createElement(L,{href:"#",renderIcon:q},m.name)))),C.length>0&&o.createElement("p",{style:{marginTop:"1rem"}},"Note - the following selected items cannot be deleted:"," ",C.map((m,g)=>o.createElement("span",{key:m.id},o.createElement(L,{href:"#",renderIcon:q},m.name),g<C.length-1&&", ")))))},"HighImpactBatchDeletion");V.__docgenInfo={description:"",methods:[],displayName:"HighImpactBatchDeletion"};const se=n(i=>new Promise(e=>setTimeout(e,i)),"wait$1"),F=n(()=>{const[i,e]=s.useState(!1),[l,a]=s.useState("inactive"),[d,r]=s.useState("Deleting"),u=n(async()=>(await se(1e3),!0),"deleteItem"),c=n(async()=>{a("active"),await u(),a("finished"),r("Deleted!"),e(!1)},"handleDelete"),p=n(()=>{a("inactive"),r("Deleting...")},"resetLoaderStatus");return o.createElement("div",{className:"app"},o.createElement(I,{size:"md",kind:"danger",onClick:n(()=>e(!0),"onClick")},"Delete"),o.createElement(S,{open:i,onRequestClose:n(()=>e(!1),"onRequestClose"),onRequestSubmit:c,modalHeading:"Confirm delete",modalLabel:"Delete Bx1001",loadingStatus:l,loadingDescription:d,onLoadingSuccess:p,showSuccessNotification:!0,successNotificationSubtitle:"Bx1001 has been successfully deleted."},o.createElement("p",null,"When you delete 'Bx1001', this resource is permanently deleted. This action cannot be undone.")))},"MediumImpactDeletion");F.__docgenInfo={description:"",methods:[],displayName:"MediumImpactDeletion"};const re=n(i=>new Promise(e=>setTimeout(e,i)),"wait"),X=n(()=>{const[i,e]=s.useState(!1),[l,a]=s.useState(!1),d=n(async()=>(await re(1e3),!0),"deleteItem"),r=n(async()=>{a(!0);const p=await d();a(!1),p&&u()},"handleDelete"),u=n(()=>{e(!0)},"showNotification"),c=n(()=>{e(!1)},"hideNotification");return o.createElement("div",{className:"app"},l?o.createElement(I,{size:"md",kind:"danger",iconDescription:"Loading",renderIcon:Z},"Deleting..."):o.createElement(I,{size:"md",kind:"danger",iconDescription:"TrashCan",renderIcon:ee,onClick:r},"Delete"),i&&o.createElement(z,{"aria-label":"closes notification",caption:O(),kind:"success",lowContrast:!0,onClose:c,role:"status",statusIconDescription:"notification",subtitle:"Bx1001 has been successfully deleted.",timeout:3e3,title:"Success",className:"notification"}))},"LowImpactDeletion");X.__docgenInfo={description:"",methods:[],displayName:"LowImpactDeletion"};const $e={title:"Patterns/Delete and remove",component:n(()=>{},"component"),tags:["autodocs"],parameters:{styles:te,docs:{page:ne}}},ce=n(i=>o.createElement($,{...i}),"HighImpactDeletionPattern"),b=ce.bind({});b.storyName="High impact deletion";b.args={};const le=n(i=>o.createElement(W,{...i}),"HighImpactDeletionWithConnectedItemsPattern"),v=le.bind({});v.storyName="Deletion with connected items";v.args={};const de=n(i=>o.createElement(V,{...i}),"HighImpactBatchDeletionPattern"),D=de.bind({});D.storyName="Batch deletion";D.args={};const me=n(i=>o.createElement(F,{...i}),"MediumImpactDeletionPattern"),w=me.bind({});w.storyName="Medium impact deletion";w.args={};const ue=n(i=>o.createElement(X,{...i}),"LowImpactDeletionPattern"),j=ue.bind({});j.storyName="Low impact deletion";j.args={};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => {
  return <HighImpactDeletion {...args} />;
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => {
  return <HighImpactDeletionWithConnectedItems {...args} />;
}`,...v.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`args => {
  return <HighImpactBatchDeletion {...args} />;
}`,...D.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`args => {
  return <MediumImpactDeletion {...args} />;
}`,...w.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`args => {
  return <LowImpactDeletion {...args} />;
}`,...j.parameters?.docs?.source}}};const We=["highImpactDeletion","highImpactDeletionWithConnectedItems","highImpactBatchDeletion","mediumImpactDeletion","lowImpactDeletion"];export{We as __namedExportsOrder,$e as default,D as highImpactBatchDeletion,b as highImpactDeletion,v as highImpactDeletionWithConnectedItems,j as lowImpactDeletion,w as mediumImpactDeletion};
//# sourceMappingURL=DeleteAndRemove.stories-D6xkHPjn.js.map
