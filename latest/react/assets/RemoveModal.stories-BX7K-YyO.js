import{e as t,r as T}from"./index-DtHxqM--.js";import"./index-4poXP75K.js";import{B as P}from"./settings-Bzj6EGPa.js";import{L as M}from"./Link-PvdHJXrE.js";import{S as D}from"./StoryDocsPage-BlyQ38W4.js";import{R as y}from"./RemoveModal-DS64EliU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DgLvjnYm.js";import"./index-CiYgQLeJ.js";import"./events-CdfZZS3f.js";import"./index-B4WvMzTq.js";import"./iframe-wzBMF1p9.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";import"./story-helper-C5uq5kSZ.js";import"./ComposedModal-CpTP8HrD.js";import"./index-BqG52EEo.js";import"./LayerContext-B9CO-6mR.js";import"./clamp--00YEiB8.js";import"./ButtonSet-A5I0_tvd.js";import"./InlineLoading-WqBhFG3p.js";import"./bucket-6-DLW23Ky6.js";import"./mergeRefs-91-mP8KM.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-jEwItT4M.js";import"./Text-Cjos7Soh.js";import"./index-CVEmjZFv.js";import"./bucket-18-338UTbBD.js";import"./utils--12iVJsW.js";import"./TextInput-CBue0XF4.js";import"./useNormalizedInputProps-OpqrZ34r.js";import"./bucket-19-D8xKEiK4.js";import"./FormContext-C4Nuixum.js";import"./devtools-B69Kc3qg.js";import"./usePortalTarget-CqHjfDP8.js";import"./feature-flags-eU_vhwbI.js";import"./index-CbYM9rgX.js";import"./props-helper-57MyEezq.js";import"./uuidv4-BN2rGLQG.js";import"./usePreviousValue-CuNkkQo9.js";const x=()=>t.createElement(D,{altGuidelinesHref:[{href:"https://pages.github.ibm.com/carbon/ibm-products/patterns/delete-and-remove/usage/",label:"Usage guidelines"},{href:"https://www.carbondesignsystem.com/components/modal/usage",label:"Carbon modal usage guidelines"},{href:"https://react.carbondesignsystem.com/?path=/docs/components-modal",label:"Carbon modal documentation"}]});x.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const ve={title:"Patterns/Prebuilt patterns/RemoveModal",component:y,tags:["autodocs"],parameters:{docs:{page:x}},argTypes:{portalTarget:{control:!1}}},e="bx1001",s={body:`Deleting ${e} will permanently delete the configuration. This action cannot be undone.`,className:"remove-modal-test",title:"Confirm delete",iconDescription:"Close",inputInvalidText:"A valid value is required",inputLabelText:`Type ${e} to confirm`,inputPlaceholderText:"Name of resourceName",onClose:()=>!1,open:!0,primaryButtonDisabled:!1,primaryButtonText:"Delete",resourceName:e,secondaryButtonText:"Cancel",label:`Delete ${e}`,preventCloseOnClickOutside:!0},i=({open:B,...R},w)=>{const[S,m]=T.useState(w.viewMode!=="docs"&&B);return t.createElement(t.Fragment,null,t.createElement(y,{...R,open:S,onClose:()=>m(!1)}),t.createElement(P,{onClick:()=>m(!0)},"Launch modal"))},o=i.bind({});o.args={...s,body:`Removing ${e} will permanently remove the configuration. This action cannot be undone.`,title:"Confirm removal",primaryButtonText:"Remove",label:`Remove ${e}`};const n=i.bind({});n.args={...s,body:`Removing ${e} will permanently remove the configuration. This action cannot be undone.`,title:"Confirm removal",primaryButtonText:"Remove",label:`Remove ${e}`,open:!0};const r=i.bind({});r.args={...s,textConfirmation:!0};const a=i.bind({});a.args={...s,body:t.createElement(t.Fragment,null,`Before removing ${e}, you can find out more information on the `,t.createElement(M,{href:"https://www.carbondesignsystem.com"},"Carbon Design System")," website.")};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`({
  open: initOpen,
  ...args
}, context) => {
  const [open, setOpen] = useState(context.viewMode !== 'docs' && initOpen);
  return <>
      <RemoveModal {...args} open={open} onClose={() => setOpen(false)} />
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
    </>;
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,u,g;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`({
  open: initOpen,
  ...args
}, context) => {
  const [open, setOpen] = useState(context.viewMode !== 'docs' && initOpen);
  return <>
      <RemoveModal {...args} open={open} onClose={() => setOpen(false)} />
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
    </>;
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,b,v;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`({
  open: initOpen,
  ...args
}, context) => {
  const [open, setOpen] = useState(context.viewMode !== 'docs' && initOpen);
  return <>
      <RemoveModal {...args} open={open} onClose={() => setOpen(false)} />
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
    </>;
}`,...(v=(b=r.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var h,C,O;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`({
  open: initOpen,
  ...args
}, context) => {
  const [open, setOpen] = useState(context.viewMode !== 'docs' && initOpen);
  return <>
      <RemoveModal {...args} open={open} onClose={() => setOpen(false)} />
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
    </>;
}`,...(O=(C=a.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};const he=["Standard","RemovePattern","DeletePattern","ComponentInBodyPattern"];export{a as ComponentInBodyPattern,r as DeletePattern,n as RemovePattern,o as Standard,he as __namedExportsOrder,ve as default};
