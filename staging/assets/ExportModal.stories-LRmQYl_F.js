import{r,R as e}from"./index-BwDkhjyp.js";import{x as fe,c as ge}from"./index-CO-HQMMN.js";import{p as K,c as ye,B as C}from"./settings-9_3hiHpE.js";import{w as xe}from"./wait-CTNFjQS8.js";import{S as be}from"./StoryDocsPage-ohgCD2zx.js";import{C as he,M as Ee,a as ve,b as Se}from"./ComposedModal-COQTPQ85.js";import{F as Te}from"./FormGroup-C6KGJYle.js";import{L as Re}from"./InlineLoading-BdVs8Ys4.js";import{T as Be,P as Me}from"./TextInput-ChL1gOHC.js";import{R as we}from"./RadioButton-DLr_wNA0.js";import{R as qe}from"./RadioButtonGroup-CVuKOGBL.js";import{P as t}from"./index-Dk74W0Oi.js";import{g as Ce}from"./devtools-7ohusRRR.js";import{u as Oe}from"./usePortalTarget-CBi58TPO.js";import{u as Le}from"./uuidv4-BQrI85uz.js";import{a as Ie}from"./bucket-2-Bt1jIBkN.js";import{E as ke}from"./bucket-6-DcTgwLU8.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BONylQH5.js";import"./index-CJvxHwuA.js";import"./events-OVwOsPzJ.js";import"./index-DQ9l4IMz.js";import"./index-CHtKUyL9.js";import"./iframe-BleUBiry.js";import"../sb-preview/runtime.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./story-helper-6_fmjwZ-.js";import"./tslib.es6-B4_xh3D5.js";import"./index-DcAOwtUU.js";import"./index-Y0d6iLU4.js";import"./LayerContext-DbU-6VX4.js";import"./ButtonSet-Cn6zokRw.js";import"./mergeRefs-CTUecegF.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-gin0UG4f.js";import"./useNormalizedInputProps-BXOXUZo5.js";import"./Text-DeIkfaUm.js";import"./bucket-18-BI__9nmH.js";import"./FormContext-C7kRVu4t.js";import"./useAnnouncer-Dwt0jqXi.js";import"./feature-flags-AXXmAEUF.js";import"./index-CeOnRtOi.js";const O="ExportModal",z={inputType:"text",preformattedExtensions:Object.freeze([]),validExtensions:Object.freeze([])};let a=r.forwardRef(({body:f,className:g,error:y,errorMessage:S,filename:i,hidePasswordLabel:x,inputLabel:T,inputType:b="text",invalidInputText:R,loading:l,loadingMessage:B,onClose:u,onRequestSubmit:h,open:E,portalTarget:M,preformattedExtensions:s=z.preformattedExtensions,preformattedExtensionsLabel:Q,primaryButtonText:X,secondaryButtonText:Z,showPasswordLabel:ee,successMessage:te,successful:v,title:k,triggerButtonRef:ne,validExtensions:w=z.validExtensions,...re},se)=>{const o=`${K.prefix}--export-modal`,[p,_]=r.useState(""),[oe,ae]=r.useState(!1),[q,H]=r.useState(""),ie=Oe(M);r.useEffect(()=>{var n,$;_(i),s&&s.length>0&&((n=s[0])!=null&&n.extension)&&H(($=s==null?void 0:s[0])==null?void 0:$.extension)},[i,s,E]),r.useEffect(()=>{if(v){const n=document.querySelector(`.${o} .${ye.prefix}--modal-close-button button`);n==null||n.focus()}},[v,o]);const le=n=>{_(n.target.value)},ue=n=>{H(n)},pe=()=>{ae(!0)},ce=()=>{const n=q?`${i}.${q.toLocaleLowerCase()}`:p;h&&h(n)},F=()=>{if(!oe||!w||!w.length)return!1;if(!p.includes("."))return!0;const n=p.split(".").pop();return!w.includes(n)},de=r.useRef(Le()),me=l||!p||F(),P=l||y||v,N={id:`text-input--${de.current}`,value:p,onChange:le,labelText:T,invalid:F(),invalidText:R,onBlur:pe,"data-modal-primary-focus":!0};return ie(e.createElement(fe,{enableExperimentalFocusWrapWithoutSentinels:!0},e.createElement(he,{...re,className:ge(o,g),"aria-label":k,size:"sm",preventCloseOnClickOutside:!0,launcherButtonRef:ne,open:E,ref:se,onClose:u,...Ce(O)},e.createElement(Ee,{className:`${o}__header`,closeModal:u,title:k}),e.createElement(ve,{className:`${o}__body-container`},!P&&e.createElement(e.Fragment,null,f&&e.createElement("p",{className:`${o}__body`},f),s.length?e.createElement(Te,{legendText:Q},e.createElement(qe,{orientation:"vertical",onChange:ue,valueSelected:q,name:"extensions"},s.map(n=>e.createElement(we,{key:n.extension,id:n.extension,value:n.extension,labelText:`${n.extension} (${n.description})`,"data-modal-primary-focus":!0})))):e.createElement("div",{className:`${o}__input-container`},b==="text"?e.createElement(Be,{...N}):e.createElement(Me,{...N,showPasswordLabel:ee,hidePasswordLabel:x,tooltipPosition:"left"}))),e.createElement("div",{"aria-live":"polite",className:`${o}__messaging`},l&&e.createElement(e.Fragment,null,e.createElement(Re,{"aria-live":"off",description:"",small:!0,withOverlay:!1}),e.createElement("p",null,B)),v&&e.createElement(e.Fragment,null,e.createElement(Ie,{size:16,className:`${o}__checkmark-icon`}),e.createElement("p",null,te)),y&&e.createElement(e.Fragment,null,e.createElement(ke,{size:16,className:`${o}__error-icon`}),e.createElement("p",null,S)))),!P&&e.createElement(Se,{className:`${o}__footer`},e.createElement(C,{type:"button",kind:"secondary",onClick:u},Z),e.createElement(C,{type:"submit",kind:"primary",onClick:ce,disabled:me},X)))))});a=K.checkComponentEnabled(a,O);a.propTypes={body:t.string,className:t.string,error:t.bool,errorMessage:t.string,filename:t.string.isRequired,hidePasswordLabel:t.string,inputLabel:t.string,inputType:t.oneOf(["text","password"]),invalidInputText:t.string,loading:t.bool,loadingMessage:t.string,onClose:t.func,onRequestSubmit:t.func,open:t.bool,portalTarget:t.node,preformattedExtensions:t.arrayOf(t.shape({extension:t.string,description:t.string})),preformattedExtensionsLabel:t.string,primaryButtonText:t.string.isRequired,secondaryButtonText:t.string.isRequired,showPasswordLabel:t.string,successMessage:t.string,successful:t.bool,title:t.string.isRequired,triggerButtonRef:t.any,validExtensions:t.array};a.displayName=O;a.__docgenInfo={description:"Modal dialog version of the export pattern",methods:[],displayName:"ExportModal",props:{body:{required:!1,tsType:{name:"string"},description:"Body content for the modal",type:{name:"string"}},className:{required:!1,tsType:{name:"string"},description:"Optional class name",type:{name:"string"}},error:{required:!1,tsType:{name:"boolean"},description:"specify if an error occurred",type:{name:"bool"}},errorMessage:{required:!1,tsType:{name:"string"},description:"messaging to display in the event of an error",type:{name:"string"}},filename:{required:!0,tsType:{name:"string"},description:"name of the file being exported",type:{name:"string"}},hidePasswordLabel:{required:!1,tsType:{name:"string"},description:"label text that's displayed when hovering over visibility toggler to hide key",type:{name:"string"}},inputLabel:{required:!1,tsType:{name:"string"},description:"label for the text input",type:{name:"string"}},inputType:{required:!1,tsType:{name:"union",raw:"'text' | 'password'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'password'"}]},description:"specify the type of text input",defaultValue:{value:"'text'",computed:!1},type:{name:"enum",value:[{value:"'text'",computed:!1},{value:"'password'",computed:!1}]}},invalidInputText:{required:!1,tsType:{name:"string"},description:"text for an invalid input",type:{name:"string"}},loading:{required:!1,tsType:{name:"boolean"},description:"specify if the modal is in a loading state",type:{name:"bool"}},loadingMessage:{required:!1,tsType:{name:"string"},description:"message to display during the loading state",type:{name:"string"}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Specify a handler for closing modal",type:{name:"func"}},onRequestSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(value?: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:'Specify a handler for "submitting" modal. Returns the file name',type:{name:"func"}},open:{required:!1,tsType:{name:"boolean"},description:"Specify whether the Modal is currently open",type:{name:"bool"}},portalTarget:{required:!1,tsType:{name:"ReactNode"},description:"The DOM node the tearsheet should be rendered within. Defaults to document.body.",type:{name:"node"}},preformattedExtensions:{required:!1,tsType:{name:"unknown"},description:"Array of extensions to display as radio buttons",defaultValue:{value:"Object.freeze([])",computed:!0},type:{name:"arrayOf",value:{name:"shape",value:{extension:{name:"string",required:!1},description:{name:"string",required:!1}}}}},preformattedExtensionsLabel:{required:!1,tsType:{name:"string"},description:"Label for the preformatted label form group",type:{name:"string"}},primaryButtonText:{required:!0,tsType:{name:"string"},description:"Specify the text for the primary button",type:{name:"string"}},secondaryButtonText:{required:!0,tsType:{name:"string"},description:"Specify the text for the secondary button",type:{name:"string"}},showPasswordLabel:{required:!1,tsType:{name:"string"},description:"label text that's displayed when hovering over visibility toggler to show key",type:{name:"string"}},successMessage:{required:!1,tsType:{name:"string"},description:"messaging to display if the export was successful",type:{name:"string"}},successful:{required:!1,tsType:{name:"boolean"},description:"specify if the export was successful",type:{name:"bool"}},title:{required:!0,tsType:{name:"string"},description:"The text displayed at the top of the modal",type:{name:"string"}},triggerButtonRef:{required:!1,tsType:{name:"RefObject",elements:[{name:"any"}],raw:"RefObject<any>"},description:"Reference to trigger button",type:{name:"any"}},validExtensions:{required:!1,tsType:{name:"unknown"},description:"array of valid extensions the file can have",defaultValue:{value:"Object.freeze([])",computed:!0},type:{name:"array"}}}};const Bt={title:"IBM Products/Components/Export/ExportModal",component:a,tags:["autodocs"],parameters:{docs:{page:()=>e.createElement(be,{altGuidelinesHref:[{href:"https://pages.github.ibm.com/carbon/ibm-products/components/export/usage/",label:"Export guidelines"},{href:"https://www.carbondesignsystem.com/components/modal/usage",label:"Carbon Modal usage guidelines"},{href:"https://react.carbondesignsystem.com/?path=/docs/modal--default",label:"Carbon Modal documentation"}]})}},argTypes:{validExtensions:{control:{type:"select",labels:{0:"no extension validation",1:"pdf extension validation"}},options:[0,1],mapping:{0:[],1:["pdf"]}},preformattedExtensions:{control:{type:"select",labels:{0:"no preformatted extensions",1:"preformatted extensions"}},options:[0,1],mapping:{0:[],1:[{extension:"YAML",description:"best for IBM managed cloud"},{extension:"BAR",description:"best for integration server"}]}}}},L={filename:"Sample02.pdf",inputLabel:"File name",onClose:()=>{},onRequestSubmit:()=>{},open:!0,primaryButtonText:"Export",secondaryButtonText:"Cancel",title:"Export",inputType:"text",successful:!0},I=({storyInitiallyOpen:f=!1,...g},y)=>{const[S,i]=r.useState(y.viewMode!=="docs"&&f),x=r.useRef(null),[T,b]=r.useState(!1),[R,l]=r.useState(!1),[B,u]=r.useState(!1),h=async()=>{b(!0),await xe(1e3),g.successful?l(!0):u(!0),b(!1)},E=()=>{i(!1),l(!1),u(!1)};function M(s){return e.createElement(C,{ref:s,onClick:()=>i(!0)},"Launch modal")}return e.createElement(e.Fragment,null,M(x),e.createElement(a,{...g,open:S,onClose:E,onRequestSubmit:h,loading:T,successful:R,loadingMessage:"Exporting file...",successMessage:"The file has been exported.",error:B,errorMessage:"Server error 500",triggerButtonRef:x}))},c=I.bind({});c.args={...L,validExtensions:0,preformattedExtensions:0,invalidInputText:"File must have valid extension .pdf",body:"",preformattedExtensionsLabel:"Choose an export format",storyInitiallyOpen:!0};const d=I.bind({});d.args={...L,validExtensions:1,preformattedExtensions:0,filename:"",invalidInputText:"File must have valid extension .pdf",body:"File must be exported in a PDF format.",preformattedExtensionsLabel:"Choose an export format",storyInitiallyOpen:!0};const m=I.bind({});m.args={...L,filename:"test",validExtensions:0,preformattedExtensions:1,invalidInputText:"File must have valid extension .pdf",body:"",preformattedExtensionsLabel:"Choose an export format",storyInitiallyOpen:!0};var D,j,W;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`({
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
}`,...(W=(j=c.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var V,A,G;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`({
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
}`,...(G=(A=d.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var U,Y,J;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`({
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
}`,...(J=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};const Mt=["Standard","WithExtensionValidation","WithPreformattedExtensions"];export{c as Standard,d as WithExtensionValidation,m as WithPreformattedExtensions,Mt as __namedExportsOrder,Bt as default};
