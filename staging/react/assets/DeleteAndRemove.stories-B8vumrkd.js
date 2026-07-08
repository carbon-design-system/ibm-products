var J=Object.defineProperty;var n=(i,e)=>J(i,"name",{value:e,configurable:!0});import{u as _,j as t,aO as K,aU as Q,r as s,R as a,B as S}from"./iframe-D_TgCArL.js";import{T as M}from"./TextInput-VFFCrF86.js";import{M as Y}from"./Modal-DCH8tkph.js";import{T as z}from"./Notification-ypcYZ2Lm.js";import{L}from"./Link-DfZ7aJKy.js";import{C as O}from"./Checkbox-BhroKPX1.js";import{F as A}from"./FormLabel-DhSQe8rZ.js";import{c as B}from"./bucket-11-JyXE3w_-.js";import{I as Z}from"./InlineLoading-BGCjZ4v_.js";import{T as ee}from"./bucket-19-DTdadaEd.js";import"./preload-helper-Cc2_yIPf.js";import"./Text-dRt3vkhG.js";import"./hasHelperText-CcJ_VphT.js";import"./useNormalizedInputProps-CsURg4Bb.js";import"./bucket-20-I6CTYn6M.js";import"./index-rkIh3fWn.js";import"./index-ByjH8V_s.js";import"./FormContext-BSRgfZem.js";import"./wrapFocus-ETscRDcT.js";import"./isTopmostVisibleModal-BR-FkALa.js";import"./ButtonSet-D4f8odRz.js";import"./index-C4I8n2OM.js";import"./LayerContext-cz8DORjj.js";import"./clamp-ekNJC_Xv.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./usePreviousValue-DuLishmK.js";import"./bucket-6-CXN0yrIs.js";import"./bucket-10-pwko2831.js";const te=".app{margin:.75rem}.app .cds--inline-loading{min-block-size:unset}.notification{position:absolute;inset-block-start:.75rem;inset-inline-end:.75rem}.no-bullets{margin:0;list-style-type:none;padding-inline-start:2rem}";function q(i){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",..._(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"delete-and-remove",children:"Delete and remove"}),`
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
`,t.jsx(e.h3,{id:"example",children:"Example"}),`
`,t.jsx(e.p,{children:"Here's a quick example of high impact deletion to get you started."}),`
`,t.jsx(e.h4,{id:"html",children:"HTML"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<div className="app">
  <Button
    size="md"
    kind="danger"
    onClick={() => {
      setResourceName('');
      setOpen(true);
    }}
  >Delete</Button>
  <DeleteAndRemove
    open={open}
    onRequestClose={() => setOpen(false)}
    onRequestSubmit={handleDelete}
    modalHeading="Confirm delete"
    modalLabel="Delete Bx1001"
    primaryButtonDisabled={!isValidName}
    loadingStatus={loadingStatus}
    loadingDescription={loaderDescription}
    onLoadingSuccess={resetLoaderStatus}
    showSuccessNotification={true}
    successNotificationSubtitle="Bx1001 has been successfully deleted."
  >
    <p style={{ marginBottom: '1rem' }}>
      Deleting 'Bx1001' will permanently delete the configuration. This
      action cannot be undone.
    </p>
    <TextInput
      data-modal-primary-focus
      id="text-input-1"
      labelText="Type Bx1001 to confirm"
      placeholder="Name of resource"
      value={resourceName}
      onChange={validateInput}
    />
  </DeleteAndRemove>
</div>
`})}),`
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
`]})]})}n(q,"_createMdxContent");function ne(i={}){const{wrapper:e}={..._(),...i.components};return e?t.jsx(e,{...i,children:t.jsx(q,{...i})}):q(i)}n(ne,"MDXContent");function P(){const i=new Date;let e=i.getHours();const c=i.getMinutes().toString().padStart(2,"0"),o=i.getSeconds().toString().padStart(2,"0"),d=e>=12?"PM":"AM";return e=e%12,e=e||12,`${e}:${c}:${o} ${d}`}n(P,"getCurrentTime");const I=n(({open:i,onRequestClose:e,onRequestSubmit:c,onSecondarySubmit:o,modalHeading:d,modalLabel:r,primaryButtonText:u="Delete",secondaryButtonText:l="Cancel",primaryButtonDisabled:p,loadingStatus:h,loadingDescription:x,onLoadingSuccess:m,size:g,danger:T=!0,successNotificationTitle:y="Success",successNotificationSubtitle:N,showSuccessNotification:f=!1,children:k,...X})=>{const[G,E]=s.useState(!1);return s.useEffect(()=>{f&&h==="finished"&&E(!0),h==="inactive"&&E(!1)},[f,h]),a.createElement(a.Fragment,null,a.createElement(Y,{open:i,onRequestClose:e,danger:T,modalHeading:d,modalLabel:r,primaryButtonText:u,secondaryButtonText:l,onRequestSubmit:c,onSecondarySubmit:o??e,primaryButtonDisabled:p,loadingStatus:h,loadingDescription:x,onLoadingSuccess:m,size:g,...X},k),G&&N&&a.createElement(z,{"aria-label":"closes notification",caption:P(),kind:"success",lowContrast:!0,onClose:n(()=>E(!1),"onClose"),role:"status",statusIconDescription:"notification",subtitle:N,timeout:3e3,title:y,className:"notification"}))},"DeleteAndRemove");I.displayName="DeleteAndRemove";I.__docgenInfo={description:"",methods:[],displayName:"DeleteAndRemove",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onRequestClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onRequestSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSecondarySubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},modalHeading:{required:!0,tsType:{name:"string"},description:""},modalLabel:{required:!1,tsType:{name:"string"},description:""},primaryButtonText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Delete'",computed:!1}},secondaryButtonText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Cancel'",computed:!1}},primaryButtonDisabled:{required:!1,tsType:{name:"boolean"},description:""},loadingStatus:{required:!1,tsType:{name:"union",raw:"'inactive' | 'active' | 'finished' | 'error'",elements:[{name:"literal",value:"'inactive'"},{name:"literal",value:"'active'"},{name:"literal",value:"'finished'"},{name:"literal",value:"'error'"}]},description:""},loadingDescription:{required:!1,tsType:{name:"string"},description:""},onLoadingSuccess:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:""},danger:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},successNotificationTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Success'",computed:!1}},successNotificationSubtitle:{required:!1,tsType:{name:"string"},description:""},showSuccessNotification:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const ie=n(i=>new Promise(e=>setTimeout(e,i)),"wait$4"),$=n(()=>{const[i,e]=s.useState(!1),[c,o]=s.useState("inactive"),[d,r]=s.useState("Deleting"),[u,l]=s.useState(""),[p,h]=s.useState(!1),x=n(async()=>(await ie(1e3),!0),"deleteItem"),m=n(async()=>{o("active"),await x(),o("finished"),r("Deleted!"),e(!1)},"handleDelete"),g=n(y=>{l(y.target.value),h(y.target.value==="Bx1001")},"validateInput"),T=n(()=>{o("inactive"),r("Deleting...")},"resetLoaderStatus");return a.createElement("div",{className:"app"},a.createElement(S,{size:"md",kind:"danger",onClick:n(()=>{l(""),e(!0)},"onClick")},"Delete"),a.createElement(I,{open:i,onRequestClose:n(()=>e(!1),"onRequestClose"),onRequestSubmit:m,modalHeading:"Confirm delete",modalLabel:"Delete Bx1001",primaryButtonDisabled:!p,loadingStatus:c,loadingDescription:d,onLoadingSuccess:T,showSuccessNotification:!0,successNotificationSubtitle:"Bx1001 has been successfully deleted."},a.createElement("p",{style:{marginBottom:"1rem"}},"Deleting 'Bx1001' will permanently delete the configuration. This action cannot be undone."),a.createElement(M,{"data-modal-primary-focus":!0,id:"text-input-1",labelText:"Type Bx1001 to confirm",placeholder:"Name of resource",value:u,onChange:g})))},"HighImpactDeletion");$.__docgenInfo={description:"",methods:[],displayName:"HighImpactDeletion"};const ae=n(i=>new Promise(e=>setTimeout(e,i)),"wait$3"),R=[{id:1,name:"Route1_name"},{id:2,name:"Hpt-392-ser"},{id:3,name:"Route2_name"}],V=n(()=>{const[i,e]=s.useState(!1),[c,o]=s.useState("inactive"),[d,r]=s.useState("Deleting"),[u,l]=s.useState(""),[p,h]=s.useState(!1),[x,m]=s.useState(!1),g=n(async()=>(await ae(1e3),!0),"deleteItem"),T=n(async()=>{o("active"),await g(),o("finished"),r("Deleted!"),e(!1)},"handleDelete"),y=n(f=>{l(f.target.value),h(f.target.value==="Bx1001")},"validateInput"),N=n(()=>{o("inactive"),r("Deleting...")},"resetLoaderStatus");return a.createElement("div",{className:"app"},a.createElement(S,{size:"md",kind:"danger",onClick:n(()=>{l(""),m(!1),e(!0)},"onClick")},"Delete"),a.createElement(I,{open:i,onRequestClose:n(()=>e(!1),"onRequestClose"),onRequestSubmit:T,modalHeading:"Confirm delete",modalLabel:"Delete Bx1001",primaryButtonDisabled:!p||!x,loadingStatus:c,loadingDescription:d,onLoadingSuccess:N,showSuccessNotification:!0,successNotificationSubtitle:"Bx1001 and all connected items have been successfully deleted."},a.createElement("p",{style:{marginBottom:"1rem"}},"When you delete the 'Bx1001', this resource and all connected items are permanently deleted. This action cannot be undone."),a.createElement(M,{"data-modal-primary-focus":!0,value:u,id:"text-input-1",labelText:"Type Bx1001 to confirm",placeholder:"Name of resource",onChange:y,style:{marginBottom:"1rem"}}),a.createElement(A,null,"The following connected items will also be deleted. Review each item to confirm that they can be deleted."),a.createElement(O,{checked:x,id:"checkbox-1",labelText:`${R.length} items: `,onChange:n((f,{checked:k})=>m(k),"onChange")}),a.createElement("ul",{className:"no-bullets"},R.map(f=>a.createElement("li",{key:f.id},a.createElement(L,{href:"#",renderIcon:B},f.name))))))},"HighImpactDeletionWithConnectedItems");V.__docgenInfo={description:"",methods:[],displayName:"HighImpactDeletionWithConnectedItems"};const oe=n(i=>new Promise(e=>setTimeout(e,i)),"wait$2"),H=[{id:1,name:"Route1_name"},{id:2,name:"Hpt-392-ser"},{id:3,name:"Route2_name"}],C=[{id:1,name:"Route3_name"},{id:2,name:"Route4_name"}],W=n(()=>{const[i,e]=s.useState(!1),[c,o]=s.useState("inactive"),[d,r]=s.useState("Deleting"),[u,l]=s.useState(!1),p=n(async()=>(await oe(1e3),!0),"deleteItem"),h=n(async()=>{o("active"),await p(),o("finished"),r("Deleted!"),e(!1)},"handleDelete"),x=n(()=>{o("inactive"),r("Deleting...")},"resetLoaderStatus");return a.createElement("div",{className:"app"},a.createElement(S,{size:"md",kind:"danger",onClick:n(()=>{l(!1),e(!0)},"onClick")},"Delete all"),a.createElement(I,{open:i,onRequestClose:n(()=>e(!1),"onRequestClose"),onRequestSubmit:h,modalHeading:"Confirm delete",modalLabel:"Delete selected items",primaryButtonDisabled:!u,size:"sm",loadingStatus:c,loadingDescription:d,onLoadingSuccess:x,showSuccessNotification:!0,successNotificationSubtitle:"Selected items have been successfully deleted."},a.createElement("p",{style:{marginBottom:"1rem"}},"Decide if you want to keep these items. Deleting these items is permanent. This action cannot be undone."),a.createElement(A,null,"The following items will be deleted. Review each item to confirm that they can be deleted."),a.createElement(O,{checked:u,id:"checkbox-1",labelText:`${H.length} items: `,onChange:n((m,{checked:g})=>l(g),"onChange")}),a.createElement("ul",{className:"no-bullets"},H.map(m=>a.createElement("li",{key:m.id},a.createElement(L,{href:"#",renderIcon:B},m.name)))),C.length>0&&a.createElement("p",{style:{marginTop:"1rem"}},"Note - the following selected items cannot be deleted:"," ",C.map((m,g)=>a.createElement("span",{key:m.id},a.createElement(L,{href:"#",renderIcon:B},m.name),g<C.length-1&&", ")))))},"HighImpactBatchDeletion");W.__docgenInfo={description:"",methods:[],displayName:"HighImpactBatchDeletion"};const se=n(i=>new Promise(e=>setTimeout(e,i)),"wait$1"),F=n(()=>{const[i,e]=s.useState(!1),[c,o]=s.useState("inactive"),[d,r]=s.useState("Deleting"),u=n(async()=>(await se(1e3),!0),"deleteItem"),l=n(async()=>{o("active"),await u(),o("finished"),r("Deleted!"),e(!1)},"handleDelete"),p=n(()=>{o("inactive"),r("Deleting...")},"resetLoaderStatus");return a.createElement("div",{className:"app"},a.createElement(S,{size:"md",kind:"danger",onClick:n(()=>e(!0),"onClick")},"Delete"),a.createElement(I,{open:i,onRequestClose:n(()=>e(!1),"onRequestClose"),onRequestSubmit:l,modalHeading:"Confirm delete",modalLabel:"Delete Bx1001",loadingStatus:c,loadingDescription:d,onLoadingSuccess:p,showSuccessNotification:!0,successNotificationSubtitle:"Bx1001 has been successfully deleted."},a.createElement("p",null,"When you delete 'Bx1001', this resource is permanently deleted. This action cannot be undone.")))},"MediumImpactDeletion");F.__docgenInfo={description:"",methods:[],displayName:"MediumImpactDeletion"};const re=n(i=>new Promise(e=>setTimeout(e,i)),"wait"),U=n(()=>{const[i,e]=s.useState(!1),[c,o]=s.useState(!1),d=n(async()=>(await re(1e3),!0),"deleteItem"),r=n(async()=>{o(!0);const p=await d();o(!1),p&&u()},"handleDelete"),u=n(()=>{e(!0)},"showNotification"),l=n(()=>{e(!1)},"hideNotification");return a.createElement("div",{className:"app"},c?a.createElement(S,{size:"md",kind:"danger",iconDescription:"Loading",renderIcon:Z},"Deleting..."):a.createElement(S,{size:"md",kind:"danger",iconDescription:"TrashCan",renderIcon:ee,onClick:r},"Delete"),i&&a.createElement(z,{"aria-label":"closes notification",caption:P(),kind:"success",lowContrast:!0,onClose:l,role:"status",statusIconDescription:"notification",subtitle:"Bx1001 has been successfully deleted.",timeout:3e3,title:"Success",className:"notification"}))},"LowImpactDeletion");U.__docgenInfo={description:"",methods:[],displayName:"LowImpactDeletion"};const $e={title:"Patterns/Delete and remove",component:n(()=>{},"component"),tags:["autodocs"],parameters:{styles:te,docs:{page:ne}}},le=n(i=>a.createElement($,{...i}),"HighImpactDeletionPattern"),b=le.bind({});b.storyName="High impact deletion";b.args={};const ce=n(i=>a.createElement(V,{...i}),"HighImpactDeletionWithConnectedItemsPattern"),D=ce.bind({});D.storyName="Deletion with connected items";D.args={};const de=n(i=>a.createElement(W,{...i}),"HighImpactBatchDeletionPattern"),v=de.bind({});v.storyName="Batch deletion";v.args={};const me=n(i=>a.createElement(F,{...i}),"MediumImpactDeletionPattern"),w=me.bind({});w.storyName="Medium impact deletion";w.args={};const ue=n(i=>a.createElement(U,{...i}),"LowImpactDeletionPattern"),j=ue.bind({});j.storyName="Low impact deletion";j.args={};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => {
  return <HighImpactDeletion {...args} />;
}`,...b.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`args => {
  return <HighImpactDeletionWithConnectedItems {...args} />;
}`,...D.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => {
  return <HighImpactBatchDeletion {...args} />;
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`args => {
  return <MediumImpactDeletion {...args} />;
}`,...w.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`args => {
  return <LowImpactDeletion {...args} />;
}`,...j.parameters?.docs?.source}}};const Ve=["highImpactDeletion","highImpactDeletionWithConnectedItems","highImpactBatchDeletion","mediumImpactDeletion","lowImpactDeletion"];export{Ve as __namedExportsOrder,$e as default,v as highImpactBatchDeletion,b as highImpactDeletion,D as highImpactDeletionWithConnectedItems,j as lowImpactDeletion,w as mediumImpactDeletion};
//# sourceMappingURL=DeleteAndRemove.stories-B8vumrkd.js.map
