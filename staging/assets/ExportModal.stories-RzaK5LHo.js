import{p as K,c as fe,j as e,B as j}from"./settings-DEdZ0TrD.js";import{r as s}from"./index-BwDkhjyp.js";import{c as ge}from"./floating-ui.core.mjs-LzsX8FoD.js";import{w as ye}from"./wait-CTNFjQS8.js";import{S as xe}from"./StoryDocsPage-CxMYxNDO.js";import{C as he,M as be,a as ve,b as Se}from"./ComposedModal-Bz57YeIR.js";import{F as Te}from"./FormGroup-2MNJUnTV.js";import{L as Re}from"./InlineLoading-b-XMbmpT.js";import{T as Be,P as Ee}from"./TextInput-DnFddHXA.js";import{R as we}from"./RadioButton-RVFxoHP5.js";import{R as Me}from"./RadioButtonGroup-C9o-g5EX.js";import{F as qe}from"./index-Jn_1HPt0.js";import{P as t}from"./index-Dk74W0Oi.js";import{g as je}from"./devtools-BMJcATO0.js";import{u as Ce}from"./usePortalTarget-C9qZOTQP.js";import{u as Oe}from"./uuidv4-BQrI85uz.js";import{a as Le}from"./events-BwXSUnsA.js";import{E as Ie}from"./bucket-6-COExmpDO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-CtP8jiW9.js";import"./index-BONylQH5.js";import"./index-DeGQKZDn.js";import"./iframe-HHF2JHdl.js";import"../sb-preview/runtime.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./story-helper-CtkteSRf.js";import"./tslib.es6-B4_xh3D5.js";import"./index-DcAOwtUU.js";import"./index-B19trKVm.js";import"./LayerContext-DbU-6VX4.js";import"./ButtonSet-B0eeKBZg.js";import"./mergeRefs-CTUecegF.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-DKhmFa_m.js";import"./useNormalizedInputProps-SnNF9w2p.js";import"./Text-DzW_iQLr.js";import"./bucket-18-BepxNBd9.js";import"./FormContext-C7kRVu4t.js";import"./bucket-17-Cv_pKmw7.js";import"./useAnnouncer-Dwt0jqXi.js";import"./feature-flags-ZUymDm0z.js";import"./index-BkXf54zg.js";const C="ExportModal",$={inputType:"text",preformattedExtensions:Object.freeze([]),validExtensions:Object.freeze([])};let a=s.forwardRef(({body:f,className:g,error:y,errorMessage:T,filename:i,hidePasswordLabel:x,inputLabel:R,inputType:h="text",invalidInputText:B,loading:l,loadingMessage:E,onClose:u,onRequestSubmit:b,open:v,portalTarget:w,preformattedExtensions:r=$.preformattedExtensions,preformattedExtensionsLabel:Q,primaryButtonText:X,secondaryButtonText:Z,showPasswordLabel:ee,successMessage:te,successful:S,title:I,triggerButtonRef:ne,validExtensions:M=$.validExtensions,...se},re)=>{const o=`${K.prefix}--export-modal`,[d,_]=s.useState(""),[oe,ae]=s.useState(!1),[q,k]=s.useState(""),ie=Ce(w);s.useEffect(()=>{var n,N;_(i),r&&r.length>0&&((n=r[0])!=null&&n.extension)&&k((N=r==null?void 0:r[0])==null?void 0:N.extension)},[i,r,v]),s.useEffect(()=>{if(S){const n=document.querySelector(`.${o} .${fe.prefix}--modal-close-button button`);n==null||n.focus()}},[S,o]);const le=n=>{_(n.target.value)},ue=n=>{k(n)},de=()=>{ae(!0)},pe=()=>{const n=q?`${i}.${q.toLocaleLowerCase()}`:d;b&&b(n)},H=()=>{if(!oe||!M||!M.length)return!1;if(!d.includes("."))return!0;const n=d.split(".").pop();return!M.includes(n)},ce=s.useRef(Oe()),me=l||!d||H(),F=l||y||S,P={id:`text-input--${ce.current}`,value:d,onChange:le,labelText:R,invalid:H(),invalidText:B,onBlur:de,"data-modal-primary-focus":!0};return ie(e.jsx(qe,{flags:{"enable-experimental-focus-wrap-without-sentinels":!0},children:e.jsxs(he,{...se,className:ge(o,g),"aria-label":I,size:"sm",preventCloseOnClickOutside:!0,launcherButtonRef:ne,open:v,ref:re,onClose:u,...je(C),children:[e.jsx(be,{className:`${o}__header`,closeModal:u,title:I}),e.jsxs(ve,{className:`${o}__body-container`,children:[!F&&e.jsxs(e.Fragment,{children:[f&&e.jsx("p",{className:`${o}__body`,children:f}),r.length?e.jsx(Te,{legendText:Q,children:e.jsx(Me,{orientation:"vertical",onChange:ue,valueSelected:q,name:"extensions",children:r.map(n=>e.jsx(we,{id:n.extension,value:n.extension,labelText:`${n.extension} (${n.description})`,"data-modal-primary-focus":!0},n.extension))})}):e.jsx("div",{className:`${o}__input-container`,children:h==="text"?e.jsx(Be,{...P}):e.jsx(Ee,{...P,showPasswordLabel:ee,hidePasswordLabel:x,tooltipPosition:"left"})})]}),e.jsxs("div",{"aria-live":"polite",className:`${o}__messaging`,children:[l&&e.jsxs(e.Fragment,{children:[e.jsx(Re,{"aria-live":"off",description:"",small:!0,withOverlay:!1}),e.jsx("p",{children:E})]}),S&&e.jsxs(e.Fragment,{children:[e.jsx(Le,{size:16,className:`${o}__checkmark-icon`}),e.jsx("p",{children:te})]}),y&&e.jsxs(e.Fragment,{children:[e.jsx(Ie,{size:16,className:`${o}__error-icon`}),e.jsx("p",{children:T})]})]})]}),!F&&e.jsxs(Se,{className:`${o}__footer`,children:[e.jsx(j,{type:"button",kind:"secondary",onClick:u,children:Z}),e.jsx(j,{type:"submit",kind:"primary",onClick:pe,disabled:me,children:X})]})]})}))});a=K.checkComponentEnabled(a,C);a.propTypes={body:t.string,className:t.string,error:t.bool,errorMessage:t.string,filename:t.string.isRequired,hidePasswordLabel:t.string,inputLabel:t.string,inputType:t.oneOf(["text","password"]),invalidInputText:t.string,loading:t.bool,loadingMessage:t.string,onClose:t.func,onRequestSubmit:t.func,open:t.bool,portalTarget:t.node,preformattedExtensions:t.arrayOf(t.shape({extension:t.string,description:t.string})),preformattedExtensionsLabel:t.string,primaryButtonText:t.string.isRequired,secondaryButtonText:t.string.isRequired,showPasswordLabel:t.string,successMessage:t.string,successful:t.bool,title:t.string.isRequired,triggerButtonRef:t.any,validExtensions:t.array};a.displayName=C;a.__docgenInfo={description:"Modal dialog version of the export pattern",methods:[],displayName:"ExportModal",props:{body:{required:!1,tsType:{name:"string"},description:"Body content for the modal",type:{name:"string"}},className:{required:!1,tsType:{name:"string"},description:"Optional class name",type:{name:"string"}},error:{required:!1,tsType:{name:"boolean"},description:"specify if an error occurred",type:{name:"bool"}},errorMessage:{required:!1,tsType:{name:"string"},description:"messaging to display in the event of an error",type:{name:"string"}},filename:{required:!0,tsType:{name:"string"},description:"name of the file being exported",type:{name:"string"}},hidePasswordLabel:{required:!1,tsType:{name:"string"},description:"label text that's displayed when hovering over visibility toggler to hide key",type:{name:"string"}},inputLabel:{required:!1,tsType:{name:"string"},description:"label for the text input",type:{name:"string"}},inputType:{required:!1,tsType:{name:"union",raw:"'text' | 'password'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'password'"}]},description:"specify the type of text input",defaultValue:{value:"'text'",computed:!1},type:{name:"enum",value:[{value:"'text'",computed:!1},{value:"'password'",computed:!1}]}},invalidInputText:{required:!1,tsType:{name:"string"},description:"text for an invalid input",type:{name:"string"}},loading:{required:!1,tsType:{name:"boolean"},description:"specify if the modal is in a loading state",type:{name:"bool"}},loadingMessage:{required:!1,tsType:{name:"string"},description:"message to display during the loading state",type:{name:"string"}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Specify a handler for closing modal",type:{name:"func"}},onRequestSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(value?: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:'Specify a handler for "submitting" modal. Returns the file name',type:{name:"func"}},open:{required:!1,tsType:{name:"boolean"},description:"Specify whether the Modal is currently open",type:{name:"bool"}},portalTarget:{required:!1,tsType:{name:"ReactNode"},description:"The DOM node the tearsheet should be rendered within. Defaults to document.body.",type:{name:"node"}},preformattedExtensions:{required:!1,tsType:{name:"unknown"},description:"Array of extensions to display as radio buttons",defaultValue:{value:"Object.freeze([])",computed:!0},type:{name:"arrayOf",value:{name:"shape",value:{extension:{name:"string",required:!1},description:{name:"string",required:!1}}}}},preformattedExtensionsLabel:{required:!1,tsType:{name:"string"},description:"Label for the preformatted label form group",type:{name:"string"}},primaryButtonText:{required:!0,tsType:{name:"string"},description:"Specify the text for the primary button",type:{name:"string"}},secondaryButtonText:{required:!0,tsType:{name:"string"},description:"Specify the text for the secondary button",type:{name:"string"}},showPasswordLabel:{required:!1,tsType:{name:"string"},description:"label text that's displayed when hovering over visibility toggler to show key",type:{name:"string"}},successMessage:{required:!1,tsType:{name:"string"},description:"messaging to display if the export was successful",type:{name:"string"}},successful:{required:!1,tsType:{name:"boolean"},description:"specify if the export was successful",type:{name:"bool"}},title:{required:!0,tsType:{name:"string"},description:"The text displayed at the top of the modal",type:{name:"string"}},triggerButtonRef:{required:!1,tsType:{name:"RefObject",elements:[{name:"any"}],raw:"RefObject<any>"},description:"Reference to trigger button",type:{name:"any"}},validExtensions:{required:!1,tsType:{name:"unknown"},description:"array of valid extensions the file can have",defaultValue:{value:"Object.freeze([])",computed:!0},type:{name:"array"}}}};const wt={title:"IBM Products/Components/Export/ExportModal",component:a,tags:["autodocs"],parameters:{docs:{page:()=>e.jsx(xe,{altGuidelinesHref:[{href:"https://pages.github.ibm.com/carbon/ibm-products/components/export/usage/",label:"Export guidelines"},{href:"https://www.carbondesignsystem.com/components/modal/usage",label:"Carbon Modal usage guidelines"},{href:"https://react.carbondesignsystem.com/?path=/docs/modal--default",label:"Carbon Modal documentation"}]})}},argTypes:{validExtensions:{control:{type:"select",labels:{0:"no extension validation",1:"pdf extension validation"}},options:[0,1],mapping:{0:[],1:["pdf"]}},preformattedExtensions:{control:{type:"select",labels:{0:"no preformatted extensions",1:"preformatted extensions"}},options:[0,1],mapping:{0:[],1:[{extension:"YAML",description:"best for IBM managed cloud"},{extension:"BAR",description:"best for integration server"}]}}}},O={filename:"Sample02.pdf",inputLabel:"File name",onClose:()=>{},onRequestSubmit:()=>{},open:!0,primaryButtonText:"Export",secondaryButtonText:"Cancel",title:"Export",inputType:"text",successful:!0},L=({storyInitiallyOpen:f=!1,...g},y)=>{const[T,i]=s.useState(y.viewMode!=="docs"&&f),x=s.useRef(null),[R,h]=s.useState(!1),[B,l]=s.useState(!1),[E,u]=s.useState(!1),b=async()=>{h(!0),await ye(1e3),g.successful?l(!0):u(!0),h(!1)},v=()=>{i(!1),l(!1),u(!1)};function w(r){return e.jsx(j,{ref:r,onClick:()=>i(!0),children:"Launch modal"})}return e.jsxs(e.Fragment,{children:[w(x),e.jsx(a,{...g,open:T,onClose:v,onRequestSubmit:b,loading:R,successful:B,loadingMessage:"Exporting file...",successMessage:"The file has been exported.",error:E,errorMessage:"Server error 500",triggerButtonRef:x})]})},p=L.bind({});p.args={...O,validExtensions:0,preformattedExtensions:0,invalidInputText:"File must have valid extension .pdf",body:"",preformattedExtensionsLabel:"Choose an export format",storyInitiallyOpen:!0};const c=L.bind({});c.args={...O,validExtensions:1,preformattedExtensions:0,filename:"",invalidInputText:"File must have valid extension .pdf",body:"File must be exported in a PDF format.",preformattedExtensionsLabel:"Choose an export format",storyInitiallyOpen:!0};const m=L.bind({});m.args={...O,filename:"test",validExtensions:0,preformattedExtensions:1,invalidInputText:"File must have valid extension .pdf",body:"",preformattedExtensionsLabel:"Choose an export format",storyInitiallyOpen:!0};var z,D,V;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`({
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
}`,...(V=(D=p.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var W,A,G;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`({
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
}`,...(G=(A=c.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var U,Y,J;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`({
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
}`,...(J=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};const Mt=["Standard","WithExtensionValidation","WithPreformattedExtensions"];export{p as Standard,c as WithExtensionValidation,m as WithPreformattedExtensions,Mt as __namedExportsOrder,wt as default};
