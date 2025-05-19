import{e as t,r as S}from"./index-DtHxqM--.js";import"./index-CMVdkQrl.js";import{B as T}from"./settings-C3kz8lqM.js";import{L as P}from"./Link-C2-sHeI7.js";import{S as D}from"./StoryDocsPage-BVOG86NQ.js";import{R as y}from"./RemoveModal-vOf39e1M.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DgLvjnYm.js";import"./index-CiYgQLeJ.js";import"./events-OVwOsPzJ.js";import"./index-BLvAv8yb.js";import"./index-CZ9wmdcH.js";import"./iframe-0Ob7ddQ0.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";import"./story-helper-CmBIJVOZ.js";import"./ComposedModal-DK_gDe0c.js";import"./index-ly07KqNH.js";import"./LayerContext-B9CO-6mR.js";import"./clamp--00YEiB8.js";import"./ButtonSet-S29aEq84.js";import"./InlineLoading-C_FY6vWy.js";import"./bucket-6-CRocNvF-.js";import"./mergeRefs-CTUecegF.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-4QzkQnOM.js";import"./TextInput-CixU1YEY.js";import"./useNormalizedInputProps-DMHlP-q8.js";import"./Text-DeLhjZ72.js";import"./bucket-18-xYgoy0Nr.js";import"./FormContext-C4Nuixum.js";import"./devtools-CJD9WatR.js";import"./usePortalTarget-BpuhspP7.js";import"./feature-flags-CgeLICHA.js";import"./index-BLKsqoyU.js";import"./uuidv4-BN2rGLQG.js";import"./usePreviousValue-CuNkkQo9.js";const x=()=>t.createElement(D,{altGuidelinesHref:[{href:"https://pages.github.ibm.com/carbon/ibm-products/patterns/delete-and-remove/usage/",label:"RemoveModal usage guidelines"},{href:"https://www.carbondesignsystem.com/components/modal/usage",label:"Carbon Modal usage guidelines"},{href:"https://react.carbondesignsystem.com/?path=/docs/components-modal",label:"Carbon Modal documentation"}]});x.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const ge={title:"IBM Products/Patterns/Remove/RemoveModal",component:y,tags:["autodocs"],parameters:{docs:{page:x}},argTypes:{portalTarget:{control:!1}}},e="bx1001",s={body:`Deleting ${e} will permanently delete the configuration. This action cannot be undone.`,className:"remove-modal-test",title:"Confirm delete",iconDescription:"Close",inputInvalidText:"A valid value is required",inputLabelText:`Type ${e} to confirm`,inputPlaceholderText:"Name of resourceName",onClose:()=>!1,open:!0,primaryButtonDisabled:!1,primaryButtonText:"Delete",resourceName:e,secondaryButtonText:"Cancel",label:`Delete ${e}`,preventCloseOnClickOutside:!0},i=({open:B,...R},M)=>{const[w,m]=S.useState(M.viewMode!=="docs"&&B);return t.createElement(t.Fragment,null,t.createElement(y,{...R,open:w,onClose:()=>m(!1)}),t.createElement(T,{onClick:()=>m(!0)},"Launch modal"))},o=i.bind({});o.args={...s,body:`Removing ${e} will permanently remove the configuration. This action cannot be undone.`,title:"Confirm removal",primaryButtonText:"Remove",label:`Remove ${e}`};const n=i.bind({});n.args={...s,body:`Removing ${e} will permanently remove the configuration. This action cannot be undone.`,title:"Confirm removal",primaryButtonText:"Remove",label:`Remove ${e}`,open:!0};const r=i.bind({});r.args={...s,textConfirmation:!0};const a=i.bind({});a.args={...s,body:t.createElement(t.Fragment,null,`Before removing ${e}, you can find out more information on the `,t.createElement(P,{href:"https://www.carbondesignsystem.com"},"Carbon Design System")," website.")};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`({
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
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,v,b;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`({
  open: initOpen,
  ...args
}, context) => {
  const [open, setOpen] = useState(context.viewMode !== 'docs' && initOpen);
  return <>
      <RemoveModal {...args} open={open} onClose={() => setOpen(false)} />
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
    </>;
}`,...(b=(v=r.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var h,C,O;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`({
  open: initOpen,
  ...args
}, context) => {
  const [open, setOpen] = useState(context.viewMode !== 'docs' && initOpen);
  return <>
      <RemoveModal {...args} open={open} onClose={() => setOpen(false)} />
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
    </>;
}`,...(O=(C=a.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};const fe=["Standard","RemovePattern","DeletePattern","ComponentInBodyPattern"];export{a as ComponentInBodyPattern,r as DeletePattern,n as RemovePattern,o as Standard,fe as __namedExportsOrder,ge as default};
