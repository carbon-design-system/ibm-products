import{e as t,r as e}from"./index-DtHxqM--.js";import"./index-CMVdkQrl.js";import{B as F}from"./settings-C3kz8lqM.js";import{w as P}from"./wait-CTNFjQS8.js";import{S as q}from"./StoryDocsPage-Z4lHM_h2.js";import{E as y}from"./ExportModal-TltJjaWq.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DgLvjnYm.js";import"./index-CiYgQLeJ.js";import"./events-OVwOsPzJ.js";import"./index-BLvAv8yb.js";import"./index-CK5iQhpn.js";import"./iframe-BEyU_vaq.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";import"./story-helper-CmBIJVOZ.js";import"./ComposedModal-DK_gDe0c.js";import"./index-ly07KqNH.js";import"./LayerContext-B9CO-6mR.js";import"./clamp--00YEiB8.js";import"./ButtonSet-S29aEq84.js";import"./InlineLoading-C_FY6vWy.js";import"./bucket-6-CRocNvF-.js";import"./mergeRefs-CTUecegF.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-4QzkQnOM.js";import"./FormGroup-BRiLUXWl.js";import"./PasswordInput-CKmzISgI.js";import"./useNormalizedInputProps-DMHlP-q8.js";import"./Text-DeLhjZ72.js";import"./bucket-18-xYgoy0Nr.js";import"./TextInput-CixU1YEY.js";import"./FormContext-C4Nuixum.js";import"./RadioButton-B542YUZn.js";import"./RadioButtonGroup-DY6Qt54Z.js";import"./devtools-CJD9WatR.js";import"./usePortalTarget-BpuhspP7.js";import"./feature-flags-CgeLICHA.js";import"./index-BLKsqoyU.js";import"./uuidv4-BN2rGLQG.js";const ye={title:"IBM Products/Components/Export/ExportModal",component:y,tags:["autodocs"],parameters:{docs:{page:()=>t.createElement(q,{altGuidelinesHref:[{href:"https://pages.github.ibm.com/carbon/ibm-products/components/export/usage/",label:"Export usage guidelines"},{href:"https://www.carbondesignsystem.com/components/modal/usage",label:"Carbon Modal usage guidelines"},{href:"https://react.carbondesignsystem.com/?path=/docs/components-modal",label:"Carbon Modal documentation"}]})}},argTypes:{validExtensions:{control:{type:"select",labels:{0:"no extension validation",1:"pdf extension validation"}},options:[0,1],mapping:{0:[],1:["pdf"]}},preformattedExtensions:{control:{type:"select",labels:{0:"no preformatted extensions",1:"preformatted extensions"}},options:[0,1],mapping:{0:[],1:[{extension:"YAML",description:"best for IBM managed cloud"},{extension:"BAR",description:"best for integration server"}]}}}},n={filename:"Sample02.pdf",inputLabel:"File name",onClose:()=>{},onRequestSubmit:()=>{},open:!0,primaryButtonText:"Export",secondaryButtonText:"Cancel",title:"Export",inputType:"text",successful:!0},a=({storyInitiallyOpen:h=!1,...i},M)=>{const[v,l]=e.useState(M.viewMode!=="docs"&&h),u=e.useRef(null),[C,c]=e.useState(!1),[O,p]=e.useState(!1),[L,d]=e.useState(!1),w=async()=>{c(!0),await P(1e3),i.successful?p(!0):d(!0),c(!1)},H=()=>{l(!1),p(!1),d(!1)};function I(T){return t.createElement(F,{ref:T,onClick:()=>l(!0)},"Launch modal")}return t.createElement(t.Fragment,null,I(u),t.createElement(y,{...i,open:v,onClose:H,onRequestSubmit:w,loading:C,successful:O,loadingMessage:"Exporting file...",successMessage:"The file has been exported.",error:L,errorMessage:"Server error 500",triggerButtonRef:u}))},s=a.bind({});s.args={...n,validExtensions:0,preformattedExtensions:0,invalidInputText:"File must have valid extension .pdf",body:"",preformattedExtensionsLabel:"Choose an export format",storyInitiallyOpen:!0};const o=a.bind({});o.args={...n,validExtensions:1,preformattedExtensions:0,filename:"",invalidInputText:"File must have valid extension .pdf",body:"File must be exported in a PDF format.",preformattedExtensionsLabel:"Choose an export format",storyInitiallyOpen:!0};const r=a.bind({});r.args={...n,filename:"test",validExtensions:0,preformattedExtensions:1,invalidInputText:"File must have valid extension .pdf",body:"",preformattedExtensionsLabel:"Choose an export format",storyInitiallyOpen:!0};var f,m,g;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`({
  storyInitiallyOpen = false,
  ...args
}, context) => {
  const [open, setOpen] = useState(context.viewMode !== 'docs' && storyInitiallyOpen);
  const triggerButtonRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [error, setError] = useState(false);
  const onSubmitHandler = async () => {
    setLoading(true);
    await wait(1000);
    if (args.successful) {
      setSuccessful(true);
    } else {
      setError(true);
    }
    setLoading(false);
  };
  const onCloseHandler = () => {
    setOpen(false);
    setSuccessful(false);
    setError(false);
  };
  function RenderButton(triggerButtonRef) {
    return <Button ref={triggerButtonRef} onClick={() => setOpen(true)}>
        Launch modal
      </Button>;
  }
  return <>
      {RenderButton(triggerButtonRef)}
      <ExportModal {...args} open={open} onClose={onCloseHandler} onRequestSubmit={onSubmitHandler} loading={loading} successful={successful} loadingMessage="Exporting file..." successMessage="The file has been exported." error={error} errorMessage="Server error 500" triggerButtonRef={triggerButtonRef} />
    </>;
}`,...(g=(m=s.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var x,S,E;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`({
  storyInitiallyOpen = false,
  ...args
}, context) => {
  const [open, setOpen] = useState(context.viewMode !== 'docs' && storyInitiallyOpen);
  const triggerButtonRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [error, setError] = useState(false);
  const onSubmitHandler = async () => {
    setLoading(true);
    await wait(1000);
    if (args.successful) {
      setSuccessful(true);
    } else {
      setError(true);
    }
    setLoading(false);
  };
  const onCloseHandler = () => {
    setOpen(false);
    setSuccessful(false);
    setError(false);
  };
  function RenderButton(triggerButtonRef) {
    return <Button ref={triggerButtonRef} onClick={() => setOpen(true)}>
        Launch modal
      </Button>;
  }
  return <>
      {RenderButton(triggerButtonRef)}
      <ExportModal {...args} open={open} onClose={onCloseHandler} onRequestSubmit={onSubmitHandler} loading={loading} successful={successful} loadingMessage="Exporting file..." successMessage="The file has been exported." error={error} errorMessage="Server error 500" triggerButtonRef={triggerButtonRef} />
    </>;
}`,...(E=(S=o.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var b,B,R;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`({
  storyInitiallyOpen = false,
  ...args
}, context) => {
  const [open, setOpen] = useState(context.viewMode !== 'docs' && storyInitiallyOpen);
  const triggerButtonRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [error, setError] = useState(false);
  const onSubmitHandler = async () => {
    setLoading(true);
    await wait(1000);
    if (args.successful) {
      setSuccessful(true);
    } else {
      setError(true);
    }
    setLoading(false);
  };
  const onCloseHandler = () => {
    setOpen(false);
    setSuccessful(false);
    setError(false);
  };
  function RenderButton(triggerButtonRef) {
    return <Button ref={triggerButtonRef} onClick={() => setOpen(true)}>
        Launch modal
      </Button>;
  }
  return <>
      {RenderButton(triggerButtonRef)}
      <ExportModal {...args} open={open} onClose={onCloseHandler} onRequestSubmit={onSubmitHandler} loading={loading} successful={successful} loadingMessage="Exporting file..." successMessage="The file has been exported." error={error} errorMessage="Server error 500" triggerButtonRef={triggerButtonRef} />
    </>;
}`,...(R=(B=r.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};const he=["Standard","WithExtensionValidation","WithPreformattedExtensions"];export{s as Standard,o as WithExtensionValidation,r as WithPreformattedExtensions,he as __namedExportsOrder,ye as default};
