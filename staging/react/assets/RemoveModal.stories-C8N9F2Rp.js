import{e as t,S as b,r as f,B as v}from"./iframe-Cbdf71kV.js";import{L as h}from"./Link-CCRD-roz.js";import{R as p}from"./RemoveModal-DtIaLh_s.js";import"./ComposedModal-Bq5ZjMWK.js";import"./index-BEhuL1MR.js";import"./index-QS6KczTe.js";import"./LayerContext-CszjMr56.js";import"./clamp--00YEiB8.js";import"./ButtonSet-BMY4CLjn.js";import"./InlineLoading-DLaaz_4f.js";import"./bucket-6-BiOweKob.js";import"./mergeRefs-91-mP8KM.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-bi0LZfCr.js";import"./Text-ByKyVd5E.js";import"./index-DgPdVJKo.js";import"./bucket-18-DV2Au_NX.js";import"./utils-Rl5Zs1h-.js";import"./TextInput-idITBobI.js";import"./useNormalizedInputProps-BAp2UTAQ.js";import"./bucket-19-CLDj7gXe.js";import"./FormContext-ChOR-8Xx.js";import"./devtools-BsT0_Owc.js";import"./usePortalTarget-D9BcsXEH.js";import"./index-B1vwz3bX.js";import"./props-helper-DqfsKzpa.js";import"./uuidv4-BN2rGLQG.js";import"./usePreviousValue-DaZSyAQn.js";const c=()=>t.createElement(b,{altGuidelinesHref:[{href:"https://pages.github.ibm.com/carbon/ibm-products/patterns/delete-and-remove/usage/",label:"Usage guidelines"},{href:"https://www.carbondesignsystem.com/components/modal/usage",label:"Carbon modal usage guidelines"},{href:"https://react.carbondesignsystem.com/?path=/docs/components-modal",label:"Carbon modal documentation"}]});c.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const K={title:"Patterns/Prebuilt patterns/RemoveModal",component:p,tags:["autodocs"],parameters:{docs:{page:c}},argTypes:{portalTarget:{control:!1}}},e="bx1001",s={body:`Deleting ${e} will permanently delete the configuration. This action cannot be undone.`,className:"remove-modal-test",title:"Confirm delete",iconDescription:"Close",inputInvalidText:"A valid value is required",inputLabelText:`Type ${e} to confirm`,inputPlaceholderText:"Name of resourceName",onClose:()=>!1,open:!0,primaryButtonDisabled:!1,primaryButtonText:"Delete",resourceName:e,secondaryButtonText:"Cancel",label:`Delete ${e}`,preventCloseOnClickOutside:!0},i=({open:l,...d},u)=>{const[g,m]=f.useState(u.viewMode!=="docs"&&l);return t.createElement(t.Fragment,null,t.createElement(p,{...d,open:g,onClose:()=>m(!1)}),t.createElement(v,{onClick:()=>m(!0)},"Launch modal"))},o=i.bind({});o.args={...s,body:`Removing ${e} will permanently remove the configuration. This action cannot be undone.`,title:"Confirm removal",primaryButtonText:"Remove",label:`Remove ${e}`};const n=i.bind({});n.args={...s,body:`Removing ${e} will permanently remove the configuration. This action cannot be undone.`,title:"Confirm removal",primaryButtonText:"Remove",label:`Remove ${e}`,open:!0};const r=i.bind({});r.args={...s,textConfirmation:!0};const a=i.bind({});a.args={...s,body:t.createElement(t.Fragment,null,`Before removing ${e}, you can find out more information on the `,t.createElement(h,{href:"https://www.carbondesignsystem.com"},"Carbon Design System")," website.")};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  open: initOpen,
  ...args
}, context) => {
  const [open, setOpen] = useState(context.viewMode !== 'docs' && initOpen);
  return <>
      <RemoveModal {...args} open={open} onClose={() => setOpen(false)} />
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
    </>;
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
  open: initOpen,
  ...args
}, context) => {
  const [open, setOpen] = useState(context.viewMode !== 'docs' && initOpen);
  return <>
      <RemoveModal {...args} open={open} onClose={() => setOpen(false)} />
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
    </>;
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`({
  open: initOpen,
  ...args
}, context) => {
  const [open, setOpen] = useState(context.viewMode !== 'docs' && initOpen);
  return <>
      <RemoveModal {...args} open={open} onClose={() => setOpen(false)} />
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
    </>;
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  open: initOpen,
  ...args
}, context) => {
  const [open, setOpen] = useState(context.viewMode !== 'docs' && initOpen);
  return <>
      <RemoveModal {...args} open={open} onClose={() => setOpen(false)} />
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
    </>;
}`,...a.parameters?.docs?.source}}};const Q=["Standard","RemovePattern","DeletePattern","ComponentInBodyPattern"];export{a as ComponentInBodyPattern,r as DeletePattern,n as RemovePattern,o as Standard,Q as __namedExportsOrder,K as default};
