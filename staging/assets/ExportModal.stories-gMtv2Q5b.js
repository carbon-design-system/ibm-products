import{r as s,e}from"./index-DxDX2vOa.js";import{F as fe,c as ge,P as t}from"./index-B_euquWE.js";import{p as K,c as ye,B as C}from"./settings-0ThqPtR3.js";import{w as xe}from"./wait-CTNFjQS8.js";import{S as be}from"./StoryDocsPage-CZd9HUNz.js";import{C as he,M as Ee,a as ve,b as Se}from"./ComposedModal-BsLCo1xi.js";import{F as Te}from"./FormGroup-BHxKds7u.js";import{L as Re}from"./InlineLoading-CIMtbZ0Q.js";import{T as Be,P as Me}from"./TextInput-CqIwQ22u.js";import{R as we}from"./RadioButton-wK6B5koV.js";import{R as qe}from"./RadioButtonGroup-BFKhdgSb.js";import{g as Ce}from"./devtools-BlxCaI1L.js";import{u as Oe}from"./usePortalTarget-BfZpr1XQ.js";import{u as Le}from"./uuidv4-BQrI85uz.js";import{a as Ie}from"./bucket-2-BDpMY3Ys.js";import{E as ke}from"./bucket-6-Cw3hdw1e.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CaMJXrh2.js";import"./events-OVwOsPzJ.js";import"./index-YDq2Pj7F.js";import"./index-DAMUIRRT.js";import"./iframe-C1IaBP6P.js";import"../sb-preview/runtime.js";import"./index-Df9so8jS.js";import"./index-CRUq0TYl.js";import"./index-DrFu-skq.js";import"./story-helper-BvAgcfdm.js";import"./tslib.es6-B4_xh3D5.js";import"./index-B1YmXwfC.js";import"./LayerContext-BLFdRioi.js";import"./ButtonSet-epghEKVn.js";import"./mergeRefs-CTUecegF.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-ChZuRP4g.js";import"./useNormalizedInputProps-BaY27oQV.js";import"./Text-9AedOkae.js";import"./bucket-18-Dvh787Y8.js";import"./FormContext-Dj7olUH1.js";import"./useAnnouncer-Dwt0jqXi.js";import"./feature-flags-BboNqy5q.js";import"./index-DYXyeV2p.js";const O="ExportModal",z={inputType:"text",preformattedExtensions:Object.freeze([]),validExtensions:Object.freeze([])};let a=s.forwardRef(({body:f,className:g,error:y,errorMessage:S,filename:i,hidePasswordLabel:x,inputLabel:T,inputType:b="text",invalidInputText:R,loading:l,loadingMessage:B,onClose:u,onRequestSubmit:h,open:E,portalTarget:M,preformattedExtensions:n=z.preformattedExtensions,preformattedExtensionsLabel:Q,primaryButtonText:X,secondaryButtonText:Z,showPasswordLabel:ee,successMessage:te,successful:v,title:k,triggerButtonRef:re,validExtensions:w=z.validExtensions,...se},ne)=>{const o=`${K.prefix}--export-modal`,[p,_]=s.useState(""),[oe,ae]=s.useState(!1),[q,F]=s.useState(""),ie=Oe(M);s.useEffect(()=>{var r,$;_(i),n&&n.length>0&&((r=n[0])!=null&&r.extension)&&F(($=n==null?void 0:n[0])==null?void 0:$.extension)},[i,n,E]),s.useEffect(()=>{if(v){const r=document.querySelector(`.${o} .${ye.prefix}--modal-close-button button`);r==null||r.focus()}},[v,o]);const le=r=>{_(r.target.value)},ue=r=>{F(r)},pe=()=>{ae(!0)},ce=()=>{const r=q?`${i}.${q.toLocaleLowerCase()}`:p;h&&h(r)},H=()=>{if(!oe||!w||!w.length)return!1;if(!p.includes("."))return!0;const r=p.split(".").pop();return!w.includes(r)},de=s.useRef(Le()),me=l||!p||H(),P=l||y||v,N={id:`text-input--${de.current}`,value:p,onChange:le,labelText:T,invalid:H(),invalidText:R,onBlur:pe,"data-modal-primary-focus":!0};return ie(e.createElement(fe,{enableExperimentalFocusWrapWithoutSentinels:!0},e.createElement(he,{...se,className:ge(o,g),"aria-label":k,size:"sm",preventCloseOnClickOutside:!0,launcherButtonRef:re,open:E,ref:ne,onClose:u,...Ce(O)},e.createElement(Ee,{className:`${o}__header`,closeModal:u,title:k}),e.createElement(ve,{className:`${o}__body-container`},!P&&e.createElement(e.Fragment,null,f&&e.createElement("p",{className:`${o}__body`},f),n.length?e.createElement(Te,{legendText:Q},e.createElement(qe,{orientation:"vertical",onChange:ue,valueSelected:q,name:"extensions"},n.map(r=>e.createElement(we,{key:r.extension,id:r.extension,value:r.extension,labelText:`${r.extension} (${r.description})`,"data-modal-primary-focus":!0})))):e.createElement("div",{className:`${o}__input-container`},b==="text"?e.createElement(Be,{...N}):e.createElement(Me,{...N,showPasswordLabel:ee,hidePasswordLabel:x,tooltipPosition:"left"}))),e.createElement("div",{"aria-live":"polite",className:`${o}__messaging`},l&&e.createElement(e.Fragment,null,e.createElement(Re,{"aria-live":"off",description:"",small:!0,withOverlay:!1}),e.createElement("p",null,B)),v&&e.createElement(e.Fragment,null,e.createElement(Ie,{size:16,className:`${o}__checkmark-icon`}),e.createElement("p",null,te)),y&&e.createElement(e.Fragment,null,e.createElement(ke,{size:16,className:`${o}__error-icon`}),e.createElement("p",null,S)))),!P&&e.createElement(Se,{className:`${o}__footer`},e.createElement(C,{type:"button",kind:"secondary",onClick:u},Z),e.createElement(C,{type:"submit",kind:"primary",onClick:ce,disabled:me},X)))))});a=K.checkComponentEnabled(a,O);a.propTypes={body:t.string,className:t.string,error:t.bool,errorMessage:t.string,filename:t.string.isRequired,hidePasswordLabel:t.string,inputLabel:t.string,inputType:t.oneOf(["text","password"]),invalidInputText:t.string,loading:t.bool,loadingMessage:t.string,onClose:t.func,onRequestSubmit:t.func,open:t.bool,portalTarget:t.node,preformattedExtensions:t.arrayOf(t.shape({extension:t.string,description:t.string})),preformattedExtensionsLabel:t.string,primaryButtonText:t.string.isRequired,secondaryButtonText:t.string.isRequired,showPasswordLabel:t.string,successMessage:t.string,successful:t.bool,title:t.string.isRequired,triggerButtonRef:t.any,validExtensions:t.array};a.displayName=O;a.__docgenInfo={description:"Modal dialog version of the export pattern",methods:[],displayName:"ExportModal",props:{body:{required:!1,tsType:{name:"string"},description:"Body content for the modal",type:{name:"string"}},className:{required:!1,tsType:{name:"string"},description:"Optional class name",type:{name:"string"}},error:{required:!1,tsType:{name:"boolean"},description:"specify if an error occurred",type:{name:"bool"}},errorMessage:{required:!1,tsType:{name:"string"},description:"messaging to display in the event of an error",type:{name:"string"}},filename:{required:!0,tsType:{name:"string"},description:"name of the file being exported",type:{name:"string"}},hidePasswordLabel:{required:!1,tsType:{name:"string"},description:"label text that's displayed when hovering over visibility toggler to hide key",type:{name:"string"}},inputLabel:{required:!1,tsType:{name:"string"},description:"label for the text input",type:{name:"string"}},inputType:{required:!1,tsType:{name:"union",raw:"'text' | 'password'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'password'"}]},description:"specify the type of text input",defaultValue:{value:"'text'",computed:!1},type:{name:"enum",value:[{value:"'text'",computed:!1},{value:"'password'",computed:!1}]}},invalidInputText:{required:!1,tsType:{name:"string"},description:"text for an invalid input",type:{name:"string"}},loading:{required:!1,tsType:{name:"boolean"},description:"specify if the modal is in a loading state",type:{name:"bool"}},loadingMessage:{required:!1,tsType:{name:"string"},description:"message to display during the loading state",type:{name:"string"}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Specify a handler for closing modal",type:{name:"func"}},onRequestSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(value?: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:'Specify a handler for "submitting" modal. Returns the file name',type:{name:"func"}},open:{required:!1,tsType:{name:"boolean"},description:"Specify whether the Modal is currently open",type:{name:"bool"}},portalTarget:{required:!1,tsType:{name:"ReactNode"},description:"The DOM node the tearsheet should be rendered within. Defaults to document.body.",type:{name:"node"}},preformattedExtensions:{required:!1,tsType:{name:"unknown"},description:"Array of extensions to display as radio buttons",defaultValue:{value:"Object.freeze([])",computed:!0},type:{name:"arrayOf",value:{name:"shape",value:{extension:{name:"string",required:!1},description:{name:"string",required:!1}}}}},preformattedExtensionsLabel:{required:!1,tsType:{name:"string"},description:"Label for the preformatted label form group",type:{name:"string"}},primaryButtonText:{required:!0,tsType:{name:"string"},description:"Specify the text for the primary button",type:{name:"string"}},secondaryButtonText:{required:!0,tsType:{name:"string"},description:"Specify the text for the secondary button",type:{name:"string"}},showPasswordLabel:{required:!1,tsType:{name:"string"},description:"label text that's displayed when hovering over visibility toggler to show key",type:{name:"string"}},successMessage:{required:!1,tsType:{name:"string"},description:"messaging to display if the export was successful",type:{name:"string"}},successful:{required:!1,tsType:{name:"boolean"},description:"specify if the export was successful",type:{name:"bool"}},title:{required:!0,tsType:{name:"string"},description:"The text displayed at the top of the modal",type:{name:"string"}},triggerButtonRef:{required:!1,tsType:{name:"RefObject",elements:[{name:"any"}],raw:"RefObject<any>"},description:"Reference to trigger button",type:{name:"any"}},validExtensions:{required:!1,tsType:{name:"unknown"},description:"array of valid extensions the file can have",defaultValue:{value:"Object.freeze([])",computed:!0},type:{name:"array"}}}};const vt={title:"IBM Products/Components/Export/ExportModal",component:a,tags:["autodocs"],parameters:{docs:{page:()=>e.createElement(be,{altGuidelinesHref:[{href:"https://pages.github.ibm.com/carbon/ibm-products/components/export/usage/",label:"Export guidelines"},{href:"https://www.carbondesignsystem.com/components/modal/usage",label:"Carbon Modal usage guidelines"},{href:"https://react.carbondesignsystem.com/?path=/docs/modal--default",label:"Carbon Modal documentation"}]})}},argTypes:{validExtensions:{control:{type:"select",labels:{0:"no extension validation",1:"pdf extension validation"}},options:[0,1],mapping:{0:[],1:["pdf"]}},preformattedExtensions:{control:{type:"select",labels:{0:"no preformatted extensions",1:"preformatted extensions"}},options:[0,1],mapping:{0:[],1:[{extension:"YAML",description:"best for IBM managed cloud"},{extension:"BAR",description:"best for integration server"}]}}}},L={filename:"Sample02.pdf",inputLabel:"File name",onClose:()=>{},onRequestSubmit:()=>{},open:!0,primaryButtonText:"Export",secondaryButtonText:"Cancel",title:"Export",inputType:"text",successful:!0},I=({storyInitiallyOpen:f=!1,...g},y)=>{const[S,i]=s.useState(y.viewMode!=="docs"&&f),x=s.useRef(null),[T,b]=s.useState(!1),[R,l]=s.useState(!1),[B,u]=s.useState(!1),h=async()=>{b(!0),await xe(1e3),g.successful?l(!0):u(!0),b(!1)},E=()=>{i(!1),l(!1),u(!1)};function M(n){return e.createElement(C,{ref:n,onClick:()=>i(!0)},"Launch modal")}return e.createElement(e.Fragment,null,M(x),e.createElement(a,{...g,open:S,onClose:E,onRequestSubmit:h,loading:T,successful:R,loadingMessage:"Exporting file...",successMessage:"The file has been exported.",error:B,errorMessage:"Server error 500",triggerButtonRef:x}))},c=I.bind({});c.args={...L,validExtensions:0,preformattedExtensions:0,invalidInputText:"File must have valid extension .pdf",body:"",preformattedExtensionsLabel:"Choose an export format",storyInitiallyOpen:!0};const d=I.bind({});d.args={...L,validExtensions:1,preformattedExtensions:0,filename:"",invalidInputText:"File must have valid extension .pdf",body:"File must be exported in a PDF format.",preformattedExtensionsLabel:"Choose an export format",storyInitiallyOpen:!0};const m=I.bind({});m.args={...L,filename:"test",validExtensions:0,preformattedExtensions:1,invalidInputText:"File must have valid extension .pdf",body:"",preformattedExtensionsLabel:"Choose an export format",storyInitiallyOpen:!0};var D,j,W;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`({
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
}`,...(J=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};const St=["Standard","WithExtensionValidation","WithPreformattedExtensions"];export{c as Standard,d as WithExtensionValidation,m as WithPreformattedExtensions,St as __namedExportsOrder,vt as default};
