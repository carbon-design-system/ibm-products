import{e as t,r as S}from"./index-DzvNrmz8.js";import"./index-5As4T26e.js";import{B as T}from"./settings-DbzZchXt.js";import{L as P}from"./Link-Dprirwoi.js";import{S as D}from"./StoryDocsPage-D9_Ykp8-.js";import{R as y}from"./RemoveModal-BQgu5z21.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-Cg1swjps.js";import"./index-Bv4JGo1_.js";import"./events-OVwOsPzJ.js";import"./index-P6UCShJt.js";import"./index-C_-_U5WJ.js";import"./iframe-CBXui-ld.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";import"./story-helper-DPPXKxdX.js";import"./ComposedModal-DuX0rG4s.js";import"./index-B9LAK09p.js";import"./LayerContext-DfrloTEd.js";import"./ButtonSet-B2onNqwp.js";import"./InlineLoading-pF8In0wu.js";import"./bucket-6-BVxmYIXv.js";import"./mergeRefs-CTUecegF.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-DPmHpWJH.js";import"./TextInput-eyoE_C-N.js";import"./useNormalizedInputProps-BTIESqM4.js";import"./Text-DyBNjUAs.js";import"./bucket-18-D-cwffHE.js";import"./FormContext-TkVWILkp.js";import"./useAnnouncer-Dwt0jqXi.js";import"./devtools-CskDVa8y.js";import"./usePortalTarget-BRFg5-2X.js";import"./feature-flags-Cd4xSQCq.js";import"./index-BXVusgOK.js";import"./uuidv4-BN2rGLQG.js";import"./usePreviousValue-DGkdsrtI.js";const x=()=>t.createElement(D,{altGuidelinesHref:[{href:"https://pages.github.ibm.com/carbon/ibm-products/patterns/delete-and-remove/usage/",label:"RemoveModal usage guidelines"},{href:"https://www.carbondesignsystem.com/components/modal/usage",label:"Carbon Modal usage guidelines"},{href:"https://react.carbondesignsystem.com/?path=/docs/components-modal",label:"Carbon Modal documentation"}]});x.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const ge={title:"IBM Products/Patterns/Remove/RemoveModal",component:y,tags:["autodocs"],parameters:{docs:{page:x}},argTypes:{portalTarget:{control:!1}}},e="bx1001",s={body:`Deleting ${e} will permanently delete the configuration. This action cannot be undone.`,className:"remove-modal-test",title:"Confirm delete",iconDescription:"Close",inputInvalidText:"A valid value is required",inputLabelText:`Type ${e} to confirm`,inputPlaceholderText:"Name of resourceName",onClose:()=>!1,open:!0,primaryButtonDisabled:!1,primaryButtonText:"Delete",resourceName:e,secondaryButtonText:"Cancel",label:`Delete ${e}`,preventCloseOnClickOutside:!0},i=({open:B,...R},M)=>{const[w,m]=S.useState(M.viewMode!=="docs"&&B);return t.createElement(t.Fragment,null,t.createElement(y,{...R,open:w,onClose:()=>m(!1)}),t.createElement(T,{onClick:()=>m(!0)},"Launch modal"))},o=i.bind({});o.args={...s,body:`Removing ${e} will permanently remove the configuration. This action cannot be undone.`,title:"Confirm removal",primaryButtonText:"Remove",label:`Remove ${e}`};const n=i.bind({});n.args={...s,body:`Removing ${e} will permanently remove the configuration. This action cannot be undone.`,title:"Confirm removal",primaryButtonText:"Remove",label:`Remove ${e}`,open:!0};const r=i.bind({});r.args={...s,textConfirmation:!0};const a=i.bind({});a.args={...s,body:t.createElement(t.Fragment,null,`Before removing ${e}, you can find out more information on the `,t.createElement(P,{href:"https://www.carbondesignsystem.com"},"Carbon Design System")," website.")};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`({
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
