import{j as e,p as j,B as R}from"./settings-BiUEFdm2.js";import{r as s}from"./index-BwDkhjyp.js";import{c as Tt,i as kt}from"./deprecate-D9ms-jbM.js";import{F as Xe}from"./Form-Cl1Tfi_h.js";import{F as le}from"./FormGroup-CVk9XJ_R.js";import{I as ue}from"./InlineLoading-DEQVZSgg.js";import{R as de}from"./RadioButton-RZ6IdjNG.js";import{R as vt}from"./RadioButtonGroup-Dyjy7gd2.js";import{T as Pt}from"./Toggle-DdCAfBCT.js";import{P as wt,T as X}from"./TextInput-CjYtA_nO.js";import{a as pe}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{w as Q}from"./wait-CTNFjQS8.js";import{S as St}from"./StoryDocsPage-BuwgUq5r.js";import{u as Rt}from"./index-CDYzkStP.js";import{b as At}from"./story-helper-YTYnELA9.js";import{P as t}from"./index-Dk74W0Oi.js";import{C as It,M as qt,a as Nt,b as Ct}from"./ComposedModal-Ckm8JaZ3.js";import{u as _t}from"./usePortalTarget-CUzsWZah.js";import{g as jt}from"./devtools-BPcQvzXy.js";import{i as me}from"./props-helper-1oU9hECe.js";import{u as Re}from"./uuidv4-BQrI85uz.js";import{E as Bt}from"./bucket-5-BuK6y5Rd.js";import{d as Kt}from"./bucket-8-61DsWji_.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./events-Bq7WR1mU.js";import"./index-BONylQH5.js";import"./mergeRefs-CTUecegF.js";import"./Text-_TFgs5hl.js";import"./bucket-17-CArjO86K.js";import"./useControllableState-DwpxGhsf.js";import"./useNormalizedInputProps-DRpk_7sW.js";import"./FormContext-C7kRVu4t.js";import"./bucket-16-C-1D9aPX.js";import"./useAnnouncer-MW4fVOqQ.js";import"./v4-CQkTLCs1.js";import"./iframe-j3s5A4v9.js";import"../sb-preview/runtime.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-BjQFKvNH.js";import"./isSymbol-BZYRlrjc.js";import"./index-DrFu-skq.js";import"./tslib.es6-B4_xh3D5.js";import"./index-DcAOwtUU.js";import"./ButtonSet-CqsYbwZH.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-CuszVIVc.js";import"./index-gKY8typL.js";import"./feature-flags-CaJ_YE9P.js";import"./index-DshjxXYm.js";import"./index-BO2nGe7b.js";const Et="APIKeyDownloader",Y=({apiKey:n,body:o,fileName:i,fileType:r,linkText:l})=>{const[u,h]=s.useState({});return s.useEffect(()=>{(async()=>{const m=r==="txt"?n:JSON.stringify({apiKey:n}),a=new Blob([m],{type:r==="txt"?"text/plain":"application/json"}),x=await URL.createObjectURL(a),d=`${i||"apikey"}.${r}`;h({href:x,download:d})})()},[n,i,r]),e.jsx("div",{className:`${j.prefix}--apikey-modal__download-container`,children:e.jsxs("p",{className:`${j.prefix}--apikey-modal__messaging-text`,children:[o," ",e.jsx("a",{...u,className:`${j.prefix}--apikey-modal__download-link`,children:l})]})})};Y.displayName=Et;Y.propTypes={apiKey:t.string.isRequired,body:t.string.isRequired,fileName:t.string.isRequired,fileType:t.oneOf(["txt","json"]).isRequired,linkText:t.string.isRequired};Y.__docgenInfo={description:"",methods:[],displayName:"APIKeyDownloader",props:{apiKey:{description:"the api key that's displayed to the user when a request to create is fulfilled.",type:{name:"string"},required:!0},body:{description:"body content for the downloader",type:{name:"string"},required:!0},fileName:{description:"designates the name of downloadable json file with the key. if not specified will default to 'apikey'",type:{name:"string"},required:!0},fileType:{description:"designates the file type for the downloadable key",type:{name:"enum",value:[{value:"'txt'",computed:!1},{value:"'json'",computed:!1}]},required:!0},linkText:{description:"anchor text for the download link",type:{name:"string"},required:!0}}};const ye="APIKeyModal",Ae={apiKeyName:"",customSteps:[]};let k=s.forwardRef(({apiKey:n,apiKeyLabel:o,apiKeyName:i=Ae.apiKeyName,body:r,className:l,closeButtonText:u,copyButtonText:h,copyErrorText:b,copyIconDescription:m,customSteps:a=Ae.customSteps,downloadBodyText:x,downloadFileName:d,downloadFileType:v,downloadLinkText:I,editButtonText:$,editSuccess:B,editSuccessTitle:K,editing:c,error:D,errorText:E,generateButtonText:F,generateSuccessBody:W,generateSuccessTitle:M,generateTitle:q,hasAPIKeyVisibilityToggle:V,hasDownloadLink:Z,hideAPIKeyLabel:ee,loading:N,loadingText:y,modalLabel:ge,nameHelperText:tt,nameLabel:nt,namePlaceholder:st,nameRequired:te,nextStepButtonText:ot,onClose:ne,onCopy:fe,onRequestEdit:se,onRequestGenerate:oe,open:ae,portalTarget:at,previousStepButtonText:rt,showAPIKeyLabel:it,...lt},dt)=>{var Se;const[he,z]=s.useState(null),[be,ct]=s.useState(!1),[J,xe]=s.useState(i),[P,re]=s.useState(0),ie=s.useRef(),Te=s.useRef(Re()),ut=s.useRef(Re()),pt=_t(at),w=!!a.length,p=n&&!N,ke=w&&P<a.length-1,ve=w&&P!==0,mt={renderIcon:f=>e.jsx(kt,{size:16,...f}),iconDescription:m,ref:ie},g=`${j.prefix}--apikey-modal`;s.useEffect(()=>{ie.current&&ae&&p&&ie.current.focus()},[ae,p]);const yt=()=>{var f;return N?!0:w&&"valid"in((a==null?void 0:a[P])||[])?!((f=a[P])!=null&&f.valid):!!(!w&&te&&!J)},gt=()=>ke?ot:p?h:c?$:F,ft=()=>ve&&!p?rt:u;s.useEffect(()=>{var f;z(c&&B?K:p?M:w?(f=a[P])==null?void 0:f.title:q)},[p,c,B,K,w,M,q,P,a]);const ht=f=>{xe(f.target.value)},Pe=()=>{xe(""),re(0),ne==null||ne()},we=async f=>{if(f.preventDefault(),ke)re(P+1);else if(p)if(fe)fe(n);else try{await navigator.clipboard.writeText(n)}catch(xt){console.error(xt),ct(!0)}else c?se==null||se(J):oe==null||oe(J)},bt=()=>{ve&&!p?re(P-1):Pe()};return pt(e.jsxs(It,{...lt,open:ae,ref:dt,...jt(ye),className:Tt(l,g),onClose:Pe,size:"sm","aria-label":ge,preventCloseOnClickOutside:!0,children:[e.jsx(qt,{className:`${g}__header`,title:he,label:ge}),e.jsx(Nt,{className:`${g}__body-container`,children:w&&!p?(Se=a[P])==null?void 0:Se.content:e.jsxs(e.Fragment,{children:[r&&e.jsx("p",{className:`${g}__body`,children:r}),!c&&n&&V&&e.jsx(wt,{value:n,labelText:o,id:Te.current,showPasswordLabel:it,hidePasswordLabel:ee,tooltipPosition:"left"}),!c&&n&&!V&&e.jsx(X,{value:n,labelText:o,id:Te.current}),(c||!p&&te)&&e.jsx(Xe,{onSubmit:we,"aria-label":he??void 0,children:e.jsx(X,{helperText:tt,placeholder:st,labelText:nt,onChange:ht,value:J,id:ut.current,disabled:N,required:te,"data-modal-primary-focus":!0})}),N&&e.jsx(ue,{description:y,className:`${g}__loader`}),(be||D)&&e.jsxs("div",{className:`${g}__messaging`,children:[e.jsx("div",{className:`${g}__error-icon`,children:e.jsx(Bt,{size:16})}),e.jsx("p",{className:`${g}__messaging-text`,children:be?b:E})]}),p&&e.jsxs("div",{className:`${g}__messaging`,children:[e.jsx(Kt,{size:16}),Z?e.jsx(Y,{apiKey:n,body:x,fileName:d,linkText:I,fileType:v}):e.jsx("div",{className:`${g}__messaging-text`,children:W})]})]})}),e.jsxs(Ct,{className:`${g}__footer`,children:[e.jsx(R,{type:"button",kind:"secondary",onClick:bt,children:ft()}),e.jsx(R,{...p&&mt,type:"submit",kind:"primary",onClick:we,disabled:yt(),children:gt()})]})]}))});const Ie=n=>me(n,({customSteps:o})=>o&&o.length>1),ce=n=>me(n,({editing:o})=>o),U=n=>me(n,({hasDownloadLink:o})=>o);k=j.checkComponentEnabled(k,ye);k.propTypes={apiKey:t.string,apiKeyLabel:t.string,apiKeyName:t.string,body:t.string,className:t.string,closeButtonText:t.string,copyButtonText:t.string,copyErrorText:t.string,copyIconDescription:t.string,customSteps:t.arrayOf(t.shape({valid:t.bool,content:t.node,title:t.string})),downloadBodyText:U(t.string),downloadFileName:U(t.string),downloadFileType:U(t.oneOf(["txt","json"])),downloadLinkText:U(t.string),editButtonText:ce(t.string),editSuccess:ce(t.bool),editSuccessTitle:ce(t.string),editing:t.bool,error:t.bool,errorText:t.string,generateButtonText:t.string,generateSuccessBody:t.node,generateSuccessTitle:t.string,generateTitle:t.string,hasAPIKeyVisibilityToggle:t.bool,hasDownloadLink:t.bool,hideAPIKeyLabel:t.string,loading:t.bool,loadingText:t.string,modalLabel:t.string,nameHelperText:t.string,nameLabel:t.string,namePlaceholder:t.string,nameRequired:t.bool,nextStepButtonText:Ie(t.string),onClose:t.func,onCopy:t.func,onRequestEdit:t.func,onRequestGenerate:t.func,open:t.bool.isRequired,portalTarget:t.node,previousStepButtonText:Ie(t.string),showAPIKeyLabel:t.string};k.displayName=ye;k.__docgenInfo={description:"",methods:[],displayName:"APIKeyModal",props:{apiKey:{required:!1,tsType:{name:"string"},description:"the api key that's displayed to the user when a request to create is fulfilled.",type:{name:"string"}},apiKeyLabel:{required:!1,tsType:{name:"string"},description:"label for the text input that holds the api key.",type:{name:"string"}},apiKeyName:{required:!1,tsType:{name:"string"},description:"the name of the api key. should only be supplied in edit mode.",defaultValue:{value:"''",computed:!1},type:{name:"string"}},body:{required:!1,tsType:{name:"string"},description:"body content for the modal",type:{name:"string"}},className:{required:!1,tsType:{name:"string"},description:"optional class name",type:{name:"string"}},closeButtonText:{required:!1,tsType:{name:"string"},description:"text for the close button",type:{name:"string"}},copyButtonText:{required:!1,tsType:{name:"string"},description:"text for the copy button",type:{name:"string"}},copyErrorText:{required:!1,tsType:{name:"string"},description:"Error message for when the copy function fails",type:{name:"string"}},copyIconDescription:{required:!1,tsType:{name:"string"},description:"text description for the copy button icon",type:{name:"string"}},customSteps:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  valid?: boolean;
  content?: ReactNode;
  title?: string;
}`,signature:{properties:[{key:"valid",value:{name:"boolean",required:!1}},{key:"content",value:{name:"ReactNode",required:!1}},{key:"title",value:{name:"string",required:!1}}]}}],raw:`Array<{
  valid?: boolean;
  content?: ReactNode;
  title?: string;
}>`},description:"if you need more options for key creation beyond just the name use custom steps to obtain whatever data is required.",defaultValue:{value:"[]",computed:!1},type:{name:"arrayOf",value:{name:"shape",value:{valid:{name:"bool",description:"designates if the step has passed whatever validation rules are in place.",required:!1},content:{name:"node",description:"designates content is the JSX that holds whatever inputs you need",required:!1},title:{name:"string",description:"designates the title that's displayed at the top of the modal for each step",required:!1}}}}},editing:{required:!1,tsType:{name:"boolean"},description:"designates if the modal is in the edit mode",type:{name:"bool"}},error:{required:!1,tsType:{name:"boolean"},description:"designates if an error has occurred in a request",type:{name:"bool"}},errorText:{required:!1,tsType:{name:"string"},description:"text to display if an error has occurred",type:{name:"string"}},generateButtonText:{required:!1,tsType:{name:"string"},description:`default primary button text for modal in assumed default mode create or generate.
in create mode this is the button text prior to supplying an api key, which then
uses copyButtonText`,type:{name:"string"}},generateSuccessBody:{required:!1,tsType:{name:"ReactNode"},description:"content to display if generate request was successful",type:{name:"node"}},generateSuccessTitle:{required:!1,tsType:{name:"string"},description:"title for a successful key generation",type:{name:"string"}},generateTitle:{required:!1,tsType:{name:"string"},description:"default title for the modal in generate key mode",type:{name:"string"}},hasAPIKeyVisibilityToggle:{required:!1,tsType:{name:"boolean"},description:"designates if the api input has the visibility toggle enabled",type:{name:"bool"}},hasDownloadLink:{required:!1,tsType:{name:"boolean"},description:"designates if user is able to download the api key",type:{name:"bool"}},hideAPIKeyLabel:{required:!1,tsType:{name:"string"},description:"label text that's displayed when hovering over visibility toggler to hide key",type:{name:"string"}},loading:{required:!1,tsType:{name:"boolean"},description:"designates if the modal is in a loading state via a request or some other in progress operation",type:{name:"bool"}},loadingText:{required:!1,tsType:{name:"string"},description:"text that displays while modal is in the loading state",type:{name:"string"}},modalLabel:{required:!1,tsType:{name:"string"},description:"general label text for modal",type:{name:"string"}},nameHelperText:{required:!1,tsType:{name:"string"},description:"helper text for name input",type:{name:"string"}},nameLabel:{required:!1,tsType:{name:"string"},description:"label for api key name input",type:{name:"string"}},namePlaceholder:{required:!1,tsType:{name:"string"},description:"placeholder text for api key name input",type:{name:"string"}},nameRequired:{required:!1,tsType:{name:"boolean"},description:"designates if a name is required or not for key generation. NOTE- if using custom steps set this to false since you will be using your own validation",type:{name:"bool"}},open:{required:!0,tsType:{name:"boolean"},description:"designates if modal is open or closed",type:{name:"bool"}},portalTarget:{required:!1,tsType:{name:"ReactNode"},description:"The DOM node the tearsheet should be rendered within. Defaults to document.body.",type:{name:"node"}},showAPIKeyLabel:{required:!1,tsType:{name:"string"},description:"label text that's displayed when hovering over visibility toggler to show key",type:{name:"string"}},previousStepButtonText:{required:!1,tsType:{name:"string"},description:"text that displays in the secondary button when using custom steps to indicate to the user that there is a previous step",type:{name:"custom",raw:"customStepsRequiredProps(PropTypes.string)"}},nextStepButtonText:{required:!1,tsType:{name:"string"},description:"text that displays in the primary button when using custom steps to indicate to the user that there is a next step",type:{name:"custom",raw:"customStepsRequiredProps(PropTypes.string)"}},editButtonText:{required:!1,tsType:{name:"string"},description:"text for the edit button",type:{name:"custom",raw:"editRequiredProps(PropTypes.string)"}},editSuccess:{required:!1,tsType:{name:"boolean"},description:"designates if the edit request was successful",type:{name:"custom",raw:"editRequiredProps(PropTypes.bool)"}},editSuccessTitle:{required:!1,tsType:{name:"string"},description:"title for a successful edit",type:{name:"custom",raw:"editRequiredProps(PropTypes.string)"}},downloadBodyText:{required:!1,tsType:{name:"string"},description:"the content that appears that indicates the key is downloadable",type:{name:"custom",raw:"downloadRequiredProps(PropTypes.string)"}},downloadFileName:{required:!1,tsType:{name:"string"},description:"designates the name of downloadable json file with the key. if not specified will default to 'apikey'",type:{name:"custom",raw:"downloadRequiredProps(PropTypes.string)"}},downloadFileType:{required:!1,tsType:{name:"union",raw:"'txt' | 'json'",elements:[{name:"literal",value:"'txt'"},{name:"literal",value:"'json'"}]},description:"designates the file type for the downloadable key",type:{name:"custom",raw:"downloadRequiredProps(PropTypes.oneOf(['txt', 'json']))"}},downloadLinkText:{required:!1,tsType:{name:"string"},description:"anchor text for the download link",type:{name:"custom",raw:"downloadRequiredProps(PropTypes.string)"}},onClose:{description:"handler for on modal close",type:{name:"func"},required:!1},onCopy:{description:`Optional callback if you want to use your own copy function instead of the build in one
onCopy(apiKey)`,type:{name:"func"},required:!1},onRequestEdit:{description:"handler for api key edit",type:{name:"func"},required:!1},onRequestGenerate:{description:"handler for api key generation",type:{name:"func"},required:!1}}};const Ft=".c4p--apikey-modal .cds--radio-button-wrapper{margin-bottom:.25rem}.c4p--apikey-modal__permissions.cds--fieldset{margin-top:1rem;margin-bottom:0}.c4p--apikey-modal__resource-toggle.cds--fieldset{margin-top:0;margin-bottom:1rem}.c4p--apikey-modal__resource-name.cds--fieldset{margin-top:0;margin-bottom:0}.c4p--apikey-modal__button-loading.cds--btn--primary{background:var(--cds-link-secondary, #0043ce)}",Qe=()=>{const{csfFile:n}=Rt("meta",["meta"]);return e.jsx(St,{altGuidelinesHref:[At(n),{href:"https://www.carbondesignsystem.com/components/modal/usage",label:"Carbon Modal usage guidelines"},{href:"https://react.carbondesignsystem.com/?path=/docs/modal--default",label:"Carbon Modal documentation"}],blocks:[{story:_,description:"API key creation / generation is assumed to be the default mode for this modal.\nTo enable key editing you have to set the `edit` prop to true and supply any\nother edit related props with the relevant input."},{description:"By default generate and edit only supply a name input for your key. If you need additional input you should use custom steps",story:S}]})};Qe.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const Hn={title:"IBM Products/Patterns/Generating an API key/APIKeyModal",component:k,tags:["autodocs"],parameters:{styles:Ft,docs:{page:Qe}},argTypes:{generateSuccessBody:{control:{type:"select",labels:{0:"short body",1:"long body"}},options:[0,1],mapping:{0:e.jsx("p",{children:"API key successfully created."}),1:e.jsx("p",{children:"This is your unique API key and is non-recoverable. If you lose this API key, you will have to reset it."})}},portalTarget:{control:!1}}},A={apiKey:"123-456-789",apiKeyLabel:"API key",showAPIKeyLabel:"Show key",hideAPIKeyLabel:"Hide key",copyButtonText:"Copy",copyIconDescription:"Copy",hasAPIKeyVisibilityToggle:!0,downloadBodyText:"This is your unique API key and is non-recoverable. If you lose this API key, you will have to reset it.",downloadLinkText:"Download as JSON",hasDownloadLink:!0,downloadFileName:"apikey",downloadFileType:"json",open:!0,closeButtonText:"Close",generateSuccessTitle:"API key successfully created",editSuccessTitle:"API key successfully saved",loadingText:"Generating...",modalLabel:"Generate API key"},T=`${j.prefix}--apikey-modal`,Ht=n=>{const[o,i]=s.useState(!1),[r,l]=s.useState(!1),u=async()=>{l(!0),await Q(1e3),i(!0),l(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs("style",{children:[`.${T} { opacity: 0; }`,";"]}),e.jsx(k,{...n,onClose:()=>i(!1),open:o}),r?e.jsx(R,{renderIcon:ue,className:`${T}__button-loading`,children:"Generating..."}):e.jsx(R,{onClick:u,children:"Generate"})]})},Ye=n=>{const{error:o}=n,[i,r]=s.useState(!1),[l,u]=s.useState(""),[h,b]=s.useState(!1),[m,a]=s.useState(!1),x=async v=>{pe(`submitted ${v}`)(),a(!1),b(!0),await Q(1e3),o?a(!0):u("111-111-111-111"),b(!1)},d=()=>{r(!1),u("")};return e.jsxs(e.Fragment,{children:[e.jsxs("style",{children:[`.${T} { opacity: 0; }`,";"]}),e.jsx(k,{...n,apiKey:l,loading:h,onClose:d,onRequestGenerate:x,open:i,error:m}),e.jsx(R,{onClick:()=>r(!i),children:"Generate API key"})]})},Ze=n=>{const{editing:o}=n,{savedName:i,savedPermissions:r,savedAllResources:l,savedResource:u,...h}=n,[b,m]=s.useState(!1),[a,x]=s.useState(""),[d,v]=s.useState(!1),[I,$]=s.useState(i),[B,K]=s.useState(r),[c,D]=s.useState(l),[E,F]=s.useState(u),[W,M]=s.useState(!1),q=async()=>{pe("submitted")(),v(!0),await Q(1e3),o?M(!0):x("111-111-111-111"),v(!1)},V=()=>{m(!1),o||(x(""),$(""),K(""),D(!1),F(""))},Z=y=>{y.preventDefault(),q()},ee=()=>{c&&E&&F(""),D(y=>!y)},N=[{valid:!!(I&&B),title:o?"Edit API key":"Generate API key",content:e.jsxs(e.Fragment,{children:[e.jsx("p",{className:`${T}__body`,children:"(Optional description text) To connect securely to [product name], your application or tool needs an API key with permission to access resources such as [product resource name]."}),e.jsx(X,{value:I,onChange:y=>$(y.target.value),labelText:"Name your application",placeholder:"Application name",id:"name-input","data-modal-primary-focus":!0}),e.jsx(le,{legendText:"What do you want your application to be able to do",className:`${T}__permissions`,children:e.jsxs(vt,{onChange:y=>K(y),valueSelected:B,name:"permission",orientation:"vertical",children:[e.jsx(de,{value:"Read and write",labelText:"Read and write"}),e.jsx(de,{value:"Read only",labelText:"Read only"}),e.jsx(de,{value:"Write only",labelText:"Write only"})]})})]})},{valid:c||!c&&!!E,title:"Choose which resources the API will have access to",content:e.jsxs(e.Fragment,{children:[e.jsxs(Xe,{onSubmit:Z,children:[e.jsx(le,{legendText:"What do you want your application to be able to do",className:`${T}__resource-toggle`,children:e.jsx(Pt,{onClick:ee,labelText:"All resources",toggled:c,disabled:d,id:"toggle1",autoFocus:!0})}),e.jsx(le,{legendText:"What do you want your application to be able to do",className:`${T}__resource-name`,children:e.jsx(X,{value:E,onChange:y=>F(y.target.value),labelText:"Which resource?",placeholder:"Resources name",disabled:d||c,id:"resource-input"})})]}),d&&e.jsx(ue,{description:d?"Saving...":"Generating..."}),W&&e.jsx("div",{className:`${T}__messaging`,children:"Edited successfully"})]})}];return e.jsxs(e.Fragment,{children:[e.jsxs("style",{children:[`.${T} { opacity: 0; }`,";"]}),e.jsx(k,{...h,apiKey:a,loading:d,onClose:V,onRequestEdit:q,onRequestGenerate:q,open:b,customSteps:N,nameRequired:!1,editSuccess:W}),e.jsx(R,{onClick:()=>m(!b),children:o?"Edit API key":"Generate API key"})]})},et=n=>{const{error:o,apiKeyName:i}=n,[r,l]=s.useState(!1),[u,h]=s.useState(!1),[b,m]=s.useState(!1),[a,x]=s.useState(!1),d=async()=>{pe(`submitted ${i}`)(),m(!1),h(!0),await Q(1e3),o?m(!0):x(!0),h(!1)},v=()=>{l(!1)},I=()=>{l(!0)};return e.jsxs(e.Fragment,{children:[e.jsxs("style",{children:[`.${T} { opacity: 0; }`,";"]}),e.jsx(k,{...n,loading:u,onClose:v,onRequestEdit:d,open:r,error:b,editSuccess:a}),e.jsx(R,{onClick:I,children:"Edit API key"})]})},H=Ye.bind({});H.args={...A,generateButtonText:"Generate API key",generateTitle:"Generate an API key",generateSuccessBody:1,body:"(Optional description text) To connect securely to [product name], your application or tool needs an API key with permission to access resources such as [product resource name].",nameHelperText:"Providing the application name will help you identify your API key later.",nameLabel:"Name your application",namePlaceholder:"Application name",nameRequired:!0};const L=Ye.bind({});L.args={...A,hasAPIKeyVisibilityToggle:!0,generateButtonText:"Generate API key",generateTitle:"Generate an API key",body:"(Optional description text) To connect securely to [product name], your application or tool needs an API key with permission to access resources such as [product resource name].",nameHelperText:"Providing the application name will help you identify your API key later.",nameLabel:"Name your application",namePlaceholder:"Application name",nameRequired:!0,error:!0,errorText:"Failed to create API key"};const G=Ht.bind({});G.args={...A,apiKeyLabel:""};const C=Ze.bind({});C.args={...A,generateButtonText:"Generate",nextStepButtonText:"Next",previousStepButtonText:"Previous",downloadFileName:"apikey",savedName:"",savedAllResources:!1,savedResource:"",savedPermissions:""};C.parameters={docs:{source:{code:"Sorry, this feature is not currently available for this story"}}};const _=et.bind({});_.args={...A,editButtonText:"Save API key",generateTitle:"Save an API key",body:"(Optional description text) To connect securely to [product name], your application or tool needs an API key with permission to access resources such as [product resource name].",nameHelperText:"Providing the application name will help you identify your API key later.",nameLabel:"Name your application",namePlaceholder:"Application name",nameRequired:!0,editing:!0,apiKey:"",loadingText:"Saving...",apiKeyName:"test_key_1"};const O=et.bind({});O.args={...A,editButtonText:"Save API key",generateTitle:"Save an API key",body:"(Optional description text) To connect securely to [product name], your application or tool needs an API key with permission to access resources such as [product resource name].",nameHelperText:"Providing the application name will help you identify your API key later.",nameLabel:"Name your application",namePlaceholder:"Application name",nameRequired:!0,editing:!0,apiKey:"",loadingText:"Saving...",generateSuccessBody:"API Key saved.",apiKeyName:"test_key_1",error:!0,errorText:"Failed to edit API key"};const S=Ze.bind({});S.args={...A,generateButtonText:"Generate",nextStepButtonText:"Next",previousStepButtonText:"Previous",downloadFileName:"apikey",savedName:"test_key_1",savedAllResources:!1,savedResource:"resource_1",savedPermissions:"Read only",editing:!0,editButtonText:"Save API key"};S.parameters={docs:{source:{code:"Sorry, this feature is not currently available for this story"}}};var qe,Ne,Ce;H.parameters={...H.parameters,docs:{...(qe=H.parameters)==null?void 0:qe.docs,source:{originalSource:`args => {
  const {
    error
  } = args;
  const [open, setOpen] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  // eslint-disable-next-line
  const submitHandler = async apiKeyName => {
    action(\`submitted \${apiKeyName}\`)();
    setFetchError(false);
    setLoading(true);
    await wait(1000);
    if (error) {
      setFetchError(true);
    } else {
      setApiKey('111-111-111-111');
    }
    setLoading(false);
  };
  const onCloseHandler = () => {
    setOpen(false);
    setApiKey('');
  };
  return <>
      <style>{\`.\${blockClass} { opacity: 0; }\`};</style>
      <APIKeyModal {...args} apiKey={apiKey} loading={loading} onClose={onCloseHandler} onRequestGenerate={submitHandler} open={open} error={fetchError} />
      <Button onClick={() => setOpen(!open)}>Generate API key</Button>
    </>;
}`,...(Ce=(Ne=H.parameters)==null?void 0:Ne.docs)==null?void 0:Ce.source}}};var _e,je,Be;L.parameters={...L.parameters,docs:{...(_e=L.parameters)==null?void 0:_e.docs,source:{originalSource:`args => {
  const {
    error
  } = args;
  const [open, setOpen] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  // eslint-disable-next-line
  const submitHandler = async apiKeyName => {
    action(\`submitted \${apiKeyName}\`)();
    setFetchError(false);
    setLoading(true);
    await wait(1000);
    if (error) {
      setFetchError(true);
    } else {
      setApiKey('111-111-111-111');
    }
    setLoading(false);
  };
  const onCloseHandler = () => {
    setOpen(false);
    setApiKey('');
  };
  return <>
      <style>{\`.\${blockClass} { opacity: 0; }\`};</style>
      <APIKeyModal {...args} apiKey={apiKey} loading={loading} onClose={onCloseHandler} onRequestGenerate={submitHandler} open={open} error={fetchError} />
      <Button onClick={() => setOpen(!open)}>Generate API key</Button>
    </>;
}`,...(Be=(je=L.parameters)==null?void 0:je.docs)==null?void 0:Be.source}}};var Ke,Ee,Fe;G.parameters={...G.parameters,docs:{...(Ke=G.parameters)==null?void 0:Ke.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const generateKey = async () => {
    setLoading(true);
    await wait(1000);
    setOpen(true);
    setLoading(false);
  };
  return <>
      <style>{\`.\${blockClass} { opacity: 0; }\`};</style>
      <APIKeyModal {...args} onClose={() => setOpen(false)} open={open} />
      {loading ? <Button renderIcon={InlineLoading} className={\`\${blockClass}__button-loading\`}>
          Generating...
        </Button> : <Button onClick={generateKey}>Generate</Button>}
    </>;
}`,...(Fe=(Ee=G.parameters)==null?void 0:Ee.docs)==null?void 0:Fe.source}}};var He,Le,Ge;C.parameters={...C.parameters,docs:{...(He=C.parameters)==null?void 0:He.docs,source:{originalSource:`args => {
  const {
    editing
  } = args;
  const {
    savedName,
    savedPermissions,
    savedAllResources,
    savedResource,
    ...finalArgs
  } = args;
  const [open, setOpen] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [loading, setLoading] = useState(false);

  // multi step options
  const [name, setName] = useState(savedName);
  const [permissions, setPermissions] = useState(savedPermissions);
  const [allResources, setAllResources] = useState(savedAllResources);
  const [resource, setResource] = useState(savedResource);
  const [editSuccess, setEditSuccess] = useState(false);

  // eslint-disable-next-line
  const submitHandler = async () => {
    action('submitted')();
    setLoading(true);
    await wait(1000);
    if (editing) {
      setEditSuccess(true);
    } else {
      setApiKey('111-111-111-111');
    }
    setLoading(false);
  };
  const onCloseHandler = () => {
    setOpen(false);
    if (!editing) {
      setApiKey('');
      setName('');
      setPermissions('');
      setAllResources(false);
      setResource('');
    }
  };
  const formHandler = evt => {
    evt.preventDefault();
    submitHandler();
  };
  const allResourcesHandler = () => {
    if (allResources && resource) {
      setResource('');
    }
    setAllResources(prev => !prev);
  };
  const steps = [{
    valid: Boolean(name && permissions),
    title: editing ? 'Edit API key' : 'Generate API key',
    content: <>
          <p className={\`\${blockClass}__body\`}>
            (Optional description text) To connect securely to [product name],
            your application or tool needs an API key with permission to access
            resources such as [product resource name].
          </p>
          <TextInput value={name} onChange={e => setName(e.target.value)} labelText="Name your application" placeholder="Application name" id="name-input" data-modal-primary-focus />
          <FormGroup legendText="What do you want your application to be able to do" className={\`\${blockClass}__permissions\`}>
            <RadioButtonGroup onChange={opt => setPermissions(opt)} valueSelected={permissions} name="permission" orientation="vertical">
              <RadioButton value="Read and write" labelText="Read and write" />
              <RadioButton value="Read only" labelText="Read only" />
              <RadioButton value="Write only" labelText="Write only" />
            </RadioButtonGroup>
          </FormGroup>
        </>
  }, {
    valid: allResources || !allResources && !!resource,
    title: 'Choose which resources the API will have access to',
    content: <>
          <Form onSubmit={formHandler}>
            <FormGroup legendText="What do you want your application to be able to do" className={\`\${blockClass}__resource-toggle\`}>
              <Toggle onClick={allResourcesHandler} labelText="All resources" toggled={allResources} disabled={loading} id="toggle1"
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus />
            </FormGroup>
            <FormGroup legendText="What do you want your application to be able to do" className={\`\${blockClass}__resource-name\`}>
              <TextInput value={resource} onChange={e => setResource(e.target.value)} labelText="Which resource?" placeholder="Resources name" disabled={loading || allResources} id="resource-input" />
            </FormGroup>
          </Form>
          {loading && <InlineLoading description={loading ? 'Saving...' : 'Generating...'} />}
          {editSuccess && <div className={\`\${blockClass}__messaging\`}>
              Edited successfully
            </div>}
        </>
  }];
  return <>
      <style>{\`.\${blockClass} { opacity: 0; }\`};</style>
      <APIKeyModal {...finalArgs} apiKey={apiKey} loading={loading} onClose={onCloseHandler} onRequestEdit={submitHandler} onRequestGenerate={submitHandler} open={open} customSteps={steps} nameRequired={false} editSuccess={editSuccess} />
      <Button onClick={() => setOpen(!open)}>
        {editing ? 'Edit API key' : 'Generate API key'}
      </Button>
    </>;
}`,...(Ge=(Le=C.parameters)==null?void 0:Le.docs)==null?void 0:Ge.source}}};var Oe,$e,De;_.parameters={..._.parameters,docs:{...(Oe=_.parameters)==null?void 0:Oe.docs,source:{originalSource:`args => {
  const {
    error,
    apiKeyName
  } = args;
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const [fetchSuccess, setFetchSuccess] = useState(false);
  const submitHandler = async () => {
    action(\`submitted \${apiKeyName}\`)();
    setFetchError(false);
    setLoading(true);
    await wait(1000);
    if (error) {
      setFetchError(true);
    } else {
      setFetchSuccess(true);
    }
    setLoading(false);
  };
  const onCloseHandler = () => {
    setOpen(false);
  };
  const onOpenHandler = () => {
    setOpen(true);
  };
  return <>
      <style>{\`.\${blockClass} { opacity: 0; }\`};</style>
      <APIKeyModal {...args} loading={loading} onClose={onCloseHandler} onRequestEdit={submitHandler} open={open} error={fetchError} editSuccess={fetchSuccess} />
      <Button onClick={onOpenHandler}>Edit API key</Button>
    </>;
}`,...(De=($e=_.parameters)==null?void 0:$e.docs)==null?void 0:De.source}}};var We,Me,Ve;O.parameters={...O.parameters,docs:{...(We=O.parameters)==null?void 0:We.docs,source:{originalSource:`args => {
  const {
    error,
    apiKeyName
  } = args;
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const [fetchSuccess, setFetchSuccess] = useState(false);
  const submitHandler = async () => {
    action(\`submitted \${apiKeyName}\`)();
    setFetchError(false);
    setLoading(true);
    await wait(1000);
    if (error) {
      setFetchError(true);
    } else {
      setFetchSuccess(true);
    }
    setLoading(false);
  };
  const onCloseHandler = () => {
    setOpen(false);
  };
  const onOpenHandler = () => {
    setOpen(true);
  };
  return <>
      <style>{\`.\${blockClass} { opacity: 0; }\`};</style>
      <APIKeyModal {...args} loading={loading} onClose={onCloseHandler} onRequestEdit={submitHandler} open={open} error={fetchError} editSuccess={fetchSuccess} />
      <Button onClick={onOpenHandler}>Edit API key</Button>
    </>;
}`,...(Ve=(Me=O.parameters)==null?void 0:Me.docs)==null?void 0:Ve.source}}};var ze,Je,Ue;S.parameters={...S.parameters,docs:{...(ze=S.parameters)==null?void 0:ze.docs,source:{originalSource:`args => {
  const {
    editing
  } = args;
  const {
    savedName,
    savedPermissions,
    savedAllResources,
    savedResource,
    ...finalArgs
  } = args;
  const [open, setOpen] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [loading, setLoading] = useState(false);

  // multi step options
  const [name, setName] = useState(savedName);
  const [permissions, setPermissions] = useState(savedPermissions);
  const [allResources, setAllResources] = useState(savedAllResources);
  const [resource, setResource] = useState(savedResource);
  const [editSuccess, setEditSuccess] = useState(false);

  // eslint-disable-next-line
  const submitHandler = async () => {
    action('submitted')();
    setLoading(true);
    await wait(1000);
    if (editing) {
      setEditSuccess(true);
    } else {
      setApiKey('111-111-111-111');
    }
    setLoading(false);
  };
  const onCloseHandler = () => {
    setOpen(false);
    if (!editing) {
      setApiKey('');
      setName('');
      setPermissions('');
      setAllResources(false);
      setResource('');
    }
  };
  const formHandler = evt => {
    evt.preventDefault();
    submitHandler();
  };
  const allResourcesHandler = () => {
    if (allResources && resource) {
      setResource('');
    }
    setAllResources(prev => !prev);
  };
  const steps = [{
    valid: Boolean(name && permissions),
    title: editing ? 'Edit API key' : 'Generate API key',
    content: <>
          <p className={\`\${blockClass}__body\`}>
            (Optional description text) To connect securely to [product name],
            your application or tool needs an API key with permission to access
            resources such as [product resource name].
          </p>
          <TextInput value={name} onChange={e => setName(e.target.value)} labelText="Name your application" placeholder="Application name" id="name-input" data-modal-primary-focus />
          <FormGroup legendText="What do you want your application to be able to do" className={\`\${blockClass}__permissions\`}>
            <RadioButtonGroup onChange={opt => setPermissions(opt)} valueSelected={permissions} name="permission" orientation="vertical">
              <RadioButton value="Read and write" labelText="Read and write" />
              <RadioButton value="Read only" labelText="Read only" />
              <RadioButton value="Write only" labelText="Write only" />
            </RadioButtonGroup>
          </FormGroup>
        </>
  }, {
    valid: allResources || !allResources && !!resource,
    title: 'Choose which resources the API will have access to',
    content: <>
          <Form onSubmit={formHandler}>
            <FormGroup legendText="What do you want your application to be able to do" className={\`\${blockClass}__resource-toggle\`}>
              <Toggle onClick={allResourcesHandler} labelText="All resources" toggled={allResources} disabled={loading} id="toggle1"
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus />
            </FormGroup>
            <FormGroup legendText="What do you want your application to be able to do" className={\`\${blockClass}__resource-name\`}>
              <TextInput value={resource} onChange={e => setResource(e.target.value)} labelText="Which resource?" placeholder="Resources name" disabled={loading || allResources} id="resource-input" />
            </FormGroup>
          </Form>
          {loading && <InlineLoading description={loading ? 'Saving...' : 'Generating...'} />}
          {editSuccess && <div className={\`\${blockClass}__messaging\`}>
              Edited successfully
            </div>}
        </>
  }];
  return <>
      <style>{\`.\${blockClass} { opacity: 0; }\`};</style>
      <APIKeyModal {...finalArgs} apiKey={apiKey} loading={loading} onClose={onCloseHandler} onRequestEdit={submitHandler} onRequestGenerate={submitHandler} open={open} customSteps={steps} nameRequired={false} editSuccess={editSuccess} />
      <Button onClick={() => setOpen(!open)}>
        {editing ? 'Edit API key' : 'Generate API key'}
      </Button>
    </>;
}`,...(Ue=(Je=S.parameters)==null?void 0:Je.docs)==null?void 0:Ue.source}}};const Ln=["Generate","GenerateWithError","InstantGenerate","CustomGenerate","Edit","EditWithError","CustomEdit"];export{S as CustomEdit,C as CustomGenerate,_ as Edit,O as EditWithError,H as Generate,L as GenerateWithError,G as InstantGenerate,Ln as __namedExportsOrder,Hn as default};
