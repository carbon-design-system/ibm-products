import{r as s,e}from"./index-CPiZ6Cnx.js";import{F as fe,c as ge,l as ye,P as t}from"./index-BPCFiO9b.js";import{p as K,c as xe,B as q}from"./settings-41bnSjHp.js";import{w as be}from"./wait-CTNFjQS8.js";import{S as he}from"./StoryDocsPage-B0IyT778.js";import{C as Ee,M as ve,a as Se,b as Te}from"./ComposedModal-CgRKyN5W.js";import{F as Be}from"./FormGroup-BF7c02p3.js";import{L as Re}from"./InlineLoading-Cst7O9Fk.js";import{T as Me,P as we}from"./TextInput-d19WJcLV.js";import{R as Ce}from"./RadioButton-CQKVrHNr.js";import{R as qe}from"./RadioButtonGroup-DgAqhidy.js";import{g as Oe}from"./devtools-Ca6Wku6c.js";import{u as Le}from"./usePortalTarget-DAnmNO4S.js";import{u as Ie}from"./uuidv4-BN2rGLQG.js";import{E as ke}from"./bucket-6-CO2LLwKX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B83en7q5.js";import"./index-ZKO_qc5e.js";import"./events-OVwOsPzJ.js";import"./index-H2wBg9na.js";import"./index-C-2_Eo4o.js";import"./iframe-necW5_o2.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";import"./story-helper-C7pmvIin.js";import"./index-C_tB4MqD.js";import"./LayerContext-BGhaVt7n.js";import"./ButtonSet-BTIAcY4e.js";import"./mergeRefs-CTUecegF.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-Dfrp1CCV.js";import"./useNormalizedInputProps-CqoVIYpB.js";import"./Text-DJS5NTiV.js";import"./bucket-18-CAzey7tD.js";import"./FormContext-CgeSXHS1.js";import"./useAnnouncer-Dwt0jqXi.js";import"./feature-flags-CMZHtsao.js";import"./index-BI1fCQHV.js";const O="ExportModal",z={preformattedExtensions:Object.freeze([]),validExtensions:Object.freeze([])};let a=s.forwardRef(({body:g,className:y,error:x,errorMessage:S,filename:i,hidePasswordLabel:b,inputLabel:T,inputType:h="text",invalidInputText:B,loading:l,loadingMessage:R,onClose:u,onRequestSubmit:p,open:E,portalTarget:M,preformattedExtensions:n=z.preformattedExtensions,preformattedExtensionsLabel:Q,primaryButtonText:X,secondaryButtonText:Z,showPasswordLabel:ee,successMessage:te,successful:v,title:k,triggerButtonRef:re,validExtensions:w=z.validExtensions,...se},ne)=>{const o=`${K.prefix}--export-modal`,[c,_]=s.useState(""),[oe,ae]=s.useState(!1),[C,F]=s.useState(""),ie=Le(M);s.useEffect(()=>{var r,$;_(i),n&&n.length>0&&((r=n[0])!=null&&r.extension)&&F(($=n==null?void 0:n[0])==null?void 0:$.extension)},[i,n,E]),s.useEffect(()=>{if(v){const r=document.querySelector(`.${o} .${xe.prefix}--modal-close-button button`);r==null||r.focus()}},[v,o]);const le=r=>{_(r.target.value)},ue=r=>{F(r)},pe=()=>{ae(!0)},ce=()=>{const r=C?`${i}.${C.toLocaleLowerCase()}`:c;p==null||p(r)},H=()=>{if(!oe||!w||!w.length)return!1;if(!c.includes("."))return!0;const r=c.split(".").pop();return!w.includes(r)},de=s.useRef(Ie()),me=l||!c||H(),P=l||x||v,N={id:`text-input--${de.current}`,value:c,onChange:le,labelText:T,invalid:H(),invalidText:B,onBlur:pe,"data-modal-primary-focus":!0};return ie(e.createElement(fe,{enableExperimentalFocusWrapWithoutSentinels:!0},e.createElement(Ee,{...se,className:ge(o,y),"aria-label":k,size:"sm",preventCloseOnClickOutside:!0,launcherButtonRef:re,open:E,ref:ne,onClose:u,...Oe(O)},e.createElement(ve,{className:`${o}__header`,closeModal:u,title:k}),e.createElement(Se,{className:`${o}__body-container`},!P&&e.createElement(e.Fragment,null,g&&e.createElement("p",{className:`${o}__body`},g),n.length?e.createElement(Be,{legendText:Q},e.createElement(qe,{orientation:"vertical",onChange:ue,valueSelected:C,name:"extensions"},n.map(r=>e.createElement(Ce,{key:r.extension,id:r.extension,value:r.extension,labelText:`${r.extension} (${r.description})`,"data-modal-primary-focus":!0})))):e.createElement("div",{className:`${o}__input-container`},h==="text"?e.createElement(Me,{...N}):e.createElement(we,{...N,showPasswordLabel:ee,hidePasswordLabel:b,tooltipPosition:"left"}))),e.createElement("div",{"aria-live":"polite",className:`${o}__messaging`},l&&e.createElement(e.Fragment,null,e.createElement(Re,{"aria-live":"off",description:"",small:!0,withOverlay:!1}),e.createElement("p",null,R)),v&&e.createElement(e.Fragment,null,e.createElement(ye,{size:16,className:`${o}__checkmark-icon`}),e.createElement("p",null,te)),x&&e.createElement(e.Fragment,null,e.createElement(ke,{size:16,className:`${o}__error-icon`}),e.createElement("p",null,S)))),!P&&e.createElement(Te,{className:`${o}__footer`},e.createElement(q,{type:"button",kind:"secondary",onClick:u},Z),e.createElement(q,{type:"submit",kind:"primary",onClick:ce,disabled:me},X)))))});a=K.checkComponentEnabled(a,O);a.propTypes={body:t.string,className:t.string,error:t.bool,errorMessage:t.string,filename:t.string.isRequired,hidePasswordLabel:t.string,inputLabel:t.string,inputType:t.oneOf(["text","password"]),invalidInputText:t.string,loading:t.bool,loadingMessage:t.string,onClose:t.func,onRequestSubmit:t.func,open:t.bool,portalTarget:t.node,preformattedExtensions:t.arrayOf(t.shape({extension:t.string,description:t.string})),preformattedExtensionsLabel:t.string,primaryButtonText:t.string.isRequired,secondaryButtonText:t.string.isRequired,showPasswordLabel:t.string,successMessage:t.string,successful:t.bool,title:t.string.isRequired,triggerButtonRef:t.any,validExtensions:t.array};a.displayName=O;a.__docgenInfo={description:"Modal dialog version of the export pattern",methods:[],displayName:"ExportModal",props:{body:{required:!1,tsType:{name:"string"},description:"Body content for the modal",type:{name:"string"}},className:{required:!1,tsType:{name:"string"},description:"Optional class name",type:{name:"string"}},error:{required:!1,tsType:{name:"boolean"},description:"specify if an error occurred",type:{name:"bool"}},errorMessage:{required:!1,tsType:{name:"string"},description:"messaging to display in the event of an error",type:{name:"string"}},filename:{required:!0,tsType:{name:"string"},description:"name of the file being exported",type:{name:"string"}},hidePasswordLabel:{required:!1,tsType:{name:"string"},description:"label text that's displayed when hovering over visibility toggler to hide key",type:{name:"string"}},inputLabel:{required:!1,tsType:{name:"string"},description:"label for the text input",type:{name:"string"}},inputType:{required:!1,tsType:{name:"union",raw:"'text' | 'password'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'password'"}]},description:"specify the type of text input",defaultValue:{value:"'text'",computed:!1},type:{name:"enum",value:[{value:"'text'",computed:!1},{value:"'password'",computed:!1}]}},invalidInputText:{required:!1,tsType:{name:"string"},description:"text for an invalid input",type:{name:"string"}},loading:{required:!1,tsType:{name:"boolean"},description:"specify if the modal is in a loading state",type:{name:"bool"}},loadingMessage:{required:!1,tsType:{name:"string"},description:"message to display during the loading state",type:{name:"string"}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Specify a handler for closing modal",type:{name:"func"}},onRequestSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(value?: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:'Specify a handler for "submitting" modal. Returns the file name',type:{name:"func"}},open:{required:!1,tsType:{name:"boolean"},description:"Specify whether the Modal is currently open",type:{name:"bool"}},portalTarget:{required:!1,tsType:{name:"ReactNode"},description:"The DOM node the tearsheet should be rendered within. Defaults to document.body.",type:{name:"node"}},preformattedExtensions:{required:!1,tsType:{name:"unknown"},description:"Array of extensions to display as radio buttons",defaultValue:{value:"Object.freeze([])",computed:!0},type:{name:"arrayOf",value:{name:"shape",value:{extension:{name:"string",required:!1},description:{name:"string",required:!1}}}}},preformattedExtensionsLabel:{required:!1,tsType:{name:"string"},description:"Label for the preformatted label form group",type:{name:"string"}},primaryButtonText:{required:!0,tsType:{name:"string"},description:"Specify the text for the primary button",type:{name:"string"}},secondaryButtonText:{required:!0,tsType:{name:"string"},description:"Specify the text for the secondary button",type:{name:"string"}},showPasswordLabel:{required:!1,tsType:{name:"string"},description:"label text that's displayed when hovering over visibility toggler to show key",type:{name:"string"}},successMessage:{required:!1,tsType:{name:"string"},description:"messaging to display if the export was successful",type:{name:"string"}},successful:{required:!1,tsType:{name:"boolean"},description:"specify if the export was successful",type:{name:"bool"}},title:{required:!0,tsType:{name:"string"},description:"The text displayed at the top of the modal",type:{name:"string"}},triggerButtonRef:{required:!1,tsType:{name:"RefObject",elements:[{name:"any"}],raw:"RefObject<any>"},description:"Reference to trigger button",type:{name:"any"}},validExtensions:{required:!1,tsType:{name:"unknown"},description:"array of valid extensions the file can have",defaultValue:{value:"Object.freeze([])",computed:!0},type:{name:"array"}}}};const bt={title:"IBM Products/Components/Export/ExportModal",component:a,tags:["autodocs"],parameters:{docs:{page:()=>e.createElement(he,{altGuidelinesHref:[{href:"https://pages.github.ibm.com/carbon/ibm-products/components/export/usage/",label:"Export guidelines"},{href:"https://www.carbondesignsystem.com/components/modal/usage",label:"Carbon Modal usage guidelines"},{href:"https://react.carbondesignsystem.com/?path=/docs/modal--default",label:"Carbon Modal documentation"}]})}},argTypes:{validExtensions:{control:{type:"select",labels:{0:"no extension validation",1:"pdf extension validation"}},options:[0,1],mapping:{0:[],1:["pdf"]}},preformattedExtensions:{control:{type:"select",labels:{0:"no preformatted extensions",1:"preformatted extensions"}},options:[0,1],mapping:{0:[],1:[{extension:"YAML",description:"best for IBM managed cloud"},{extension:"BAR",description:"best for integration server"}]}}}},L={filename:"Sample02.pdf",inputLabel:"File name",onClose:()=>{},onRequestSubmit:()=>{},open:!0,primaryButtonText:"Export",secondaryButtonText:"Cancel",title:"Export",inputType:"text",successful:!0},I=({storyInitiallyOpen:g=!1,...y},x)=>{const[S,i]=s.useState(x.viewMode!=="docs"&&g),b=s.useRef(null),[T,h]=s.useState(!1),[B,l]=s.useState(!1),[R,u]=s.useState(!1),p=async()=>{h(!0),await be(1e3),y.successful?l(!0):u(!0),h(!1)},E=()=>{i(!1),l(!1),u(!1)};function M(n){return e.createElement(q,{ref:n,onClick:()=>i(!0)},"Launch modal")}return e.createElement(e.Fragment,null,M(b),e.createElement(a,{...y,open:S,onClose:E,onRequestSubmit:p,loading:T,successful:B,loadingMessage:"Exporting file...",successMessage:"The file has been exported.",error:R,errorMessage:"Server error 500",triggerButtonRef:b}))},d=I.bind({});d.args={...L,validExtensions:0,preformattedExtensions:0,invalidInputText:"File must have valid extension .pdf",body:"",preformattedExtensionsLabel:"Choose an export format",storyInitiallyOpen:!0};const m=I.bind({});m.args={...L,validExtensions:1,preformattedExtensions:0,filename:"",invalidInputText:"File must have valid extension .pdf",body:"File must be exported in a PDF format.",preformattedExtensionsLabel:"Choose an export format",storyInitiallyOpen:!0};const f=I.bind({});f.args={...L,filename:"test",validExtensions:0,preformattedExtensions:1,invalidInputText:"File must have valid extension .pdf",body:"",preformattedExtensionsLabel:"Choose an export format",storyInitiallyOpen:!0};var D,j,W;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`({
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
}`,...(W=(j=d.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var V,A,G;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`({
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
}`,...(G=(A=m.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var U,Y,J;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`({
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
}`,...(J=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};const ht=["Standard","WithExtensionValidation","WithPreformattedExtensions"];export{d as Standard,m as WithExtensionValidation,f as WithPreformattedExtensions,ht as __namedExportsOrder,bt as default};
