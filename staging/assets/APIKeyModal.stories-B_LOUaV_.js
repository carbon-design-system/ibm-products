import{r as s,R as e}from"./index-BwDkhjyp.js";import{c as vt}from"./index-CO-HQMMN.js";import{p as _,B as R,j as wt}from"./settings-9_3hiHpE.js";import{F as Xe}from"./Form-KmNZSuVG.js";import{F as le}from"./FormGroup-C6KGJYle.js";import{I as ue}from"./InlineLoading-BdVs8Ys4.js";import{R as ce}from"./RadioButton-DLr_wNA0.js";import{R as xt}from"./RadioButtonGroup-CVuKOGBL.js";import{T as Pt}from"./Toggle-Bqo8tFuJ.js";import{P as St,T as U}from"./TextInput-ChL1gOHC.js";import{a as pe}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{w as X}from"./wait-CTNFjQS8.js";import{S as Et}from"./StoryDocsPage-Cb8ckBcE.js";import{u as At}from"./index-DHGWxKiG.js";import{b as Rt}from"./story-helper-6_fmjwZ-.js";import{P as t}from"./index-Dk74W0Oi.js";import{C as It,M as qt,a as Nt,b as Ct}from"./ComposedModal-COQTPQ85.js";import{u as _t}from"./usePortalTarget-CBi58TPO.js";import{g as Bt}from"./devtools-7ohusRRR.js";import{i as me}from"./props-helper-2oDpPmvU.js";import{u as Ee}from"./uuidv4-BQrI85uz.js";import{E as Kt}from"./bucket-6-DcTgwLU8.js";import{d as Lt}from"./bucket-9-CnK3eVdV.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BONylQH5.js";import"./index-CJvxHwuA.js";import"./events-OVwOsPzJ.js";import"./index-DQ9l4IMz.js";import"./bucket-2-Bt1jIBkN.js";import"./mergeRefs-CTUecegF.js";import"./Text-DeIkfaUm.js";import"./bucket-18-BI__9nmH.js";import"./useControllableState-DwpxGhsf.js";import"./useNormalizedInputProps-BXOXUZo5.js";import"./FormContext-C7kRVu4t.js";import"./useAnnouncer-Dwt0jqXi.js";import"./v4-CQkTLCs1.js";import"./iframe-CBdycsFE.js";import"../sb-preview/runtime.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./tslib.es6-B4_xh3D5.js";import"./index-DcAOwtUU.js";import"./index-Y0d6iLU4.js";import"./LayerContext-DbU-6VX4.js";import"./ButtonSet-Cn6zokRw.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-gin0UG4f.js";import"./feature-flags-AXXmAEUF.js";import"./index-CeOnRtOi.js";const Ft="APIKeyDownloader",Q=({apiKey:n,body:a,fileName:i,fileType:r,linkText:l,downloadLinkLabel:u})=>{const[f,m]=s.useState({});return s.useEffect(()=>{(async()=>{const o=r==="txt"?n:JSON.stringify({apiKey:n}),b=new Blob([o],{type:r==="txt"?"text/plain":"application/json"}),d=await URL.createObjectURL(b),T=`${i||"apikey"}.${r}`;m({href:d,download:T})})()},[n,i,r]),e.createElement("div",{className:`${_.prefix}--apikey-modal__download-container`},e.createElement("p",{className:`${_.prefix}--apikey-modal__messaging-text`},a," ",e.createElement("a",{...f,className:`${_.prefix}--apikey-modal__download-link`,"aria-label":u??l,role:"button"},l)))};Q.displayName=Ft;Q.propTypes={apiKey:t.string.isRequired,body:t.string.isRequired,downloadLinkLabel:t.string,fileName:t.string.isRequired,fileType:t.oneOf(["txt","json"]).isRequired,linkText:t.string.isRequired};Q.__docgenInfo={description:"",methods:[],displayName:"APIKeyDownloader",props:{apiKey:{description:"the api key that's displayed to the user when a request to create is fulfilled.",type:{name:"string"},required:!0},body:{description:"body content for the downloader",type:{name:"string"},required:!0},downloadLinkLabel:{description:"aria-label for the download link",type:{name:"string"},required:!1},fileName:{description:"designates the name of downloadable json file with the key. if not specified will default to 'apikey'",type:{name:"string"},required:!0},fileType:{description:"designates the file type for the downloadable key",type:{name:"enum",value:[{value:"'txt'",computed:!1},{value:"'json'",computed:!1}]},required:!0},linkText:{description:"anchor text for the download link",type:{name:"string"},required:!0}}};const ye="APIKeyModal",Ae={apiKeyName:"",customSteps:[]};let w=s.forwardRef(({apiKey:n,apiKeyLabel:a,apiKeyName:i=Ae.apiKeyName,body:r,className:l,closeButtonText:u,copyButtonText:f,copyErrorText:m,copyIconDescription:h,customSteps:o=Ae.customSteps,downloadBodyText:b,downloadFileName:d,downloadFileType:T,downloadLinkText:P,downloadLinkLabel:D=P,editButtonText:W,editSuccess:B,editSuccessTitle:S,editing:k,error:K,errorText:L,generateButtonText:M,generateSuccessBody:Y,generateSuccessTitle:q,generateTitle:j,hasAPIKeyVisibilityToggle:V,hasDownloadLink:Z,hideAPIKeyLabel:ee,loading:c,loadingText:tt,modalLabel:ge,nameHelperText:nt,nameLabel:st,namePlaceholder:at,nameRequired:te,nextStepButtonText:ot,onClose:ne,onCopy:fe,onRequestEdit:se,onRequestGenerate:ae,open:oe,portalTarget:rt,previousStepButtonText:it,showAPIKeyLabel:lt,...ct},dt)=>{var Se;const[he,z]=s.useState(null),[be,ut]=s.useState(!1),[J,Te]=s.useState(i),[x,re]=s.useState(0),ie=s.useRef(void 0),ke=s.useRef(Ee()),pt=s.useRef(Ee()),mt=_t(rt),E=!!o.length,p=n&&!c,ve=E&&x<o.length-1,we=E&&x!==0,yt={renderIcon:g=>e.createElement(wt,{size:16,...g}),iconDescription:h,ref:ie},y=`${_.prefix}--apikey-modal`;s.useEffect(()=>{ie.current&&oe&&p&&ie.current.focus()},[oe,p]);const gt=()=>{var g;return c?!0:E&&"valid"in((o==null?void 0:o[x])||[])?!((g=o[x])!=null&&g.valid):!!(!E&&te&&!J)},ft=()=>ve?ot:p?f:k?W:M,ht=()=>we&&!p?it:u;s.useEffect(()=>{var g;z(k&&B?S:p?q:E?(g=o[x])==null?void 0:g.title:j)},[p,k,B,S,E,q,j,x,o]);const bt=g=>{Te(g.target.value)},xe=()=>{Te(""),re(0),ne==null||ne()},Pe=async g=>{if(g.preventDefault(),ve)re(x+1);else if(p)if(fe)fe(n);else try{await navigator.clipboard.writeText(n)}catch(kt){console.error(kt),ut(!0)}else k?se==null||se(J):ae==null||ae(J)},Tt=()=>{we&&!p?re(x-1):xe()};return mt(e.createElement(It,{...ct,open:oe,ref:dt,...Bt(ye),className:vt(l,y),onClose:xe,size:"sm","aria-label":ge,preventCloseOnClickOutside:!0},e.createElement(qt,{className:`${y}__header`,title:he,label:ge}),e.createElement(Nt,{className:`${y}__body-container`},E&&!p?(Se=o[x])==null?void 0:Se.content:e.createElement(e.Fragment,null,r&&e.createElement("p",{className:`${y}__body`},r),!k&&n&&V&&e.createElement(St,{value:n,labelText:a,id:ke.current,showPasswordLabel:lt,hidePasswordLabel:ee,tooltipPosition:"left"}),!k&&n&&!V&&e.createElement(U,{value:n,labelText:a,id:ke.current}),(k||!p&&te)&&e.createElement(Xe,{onSubmit:Pe,"aria-label":he??void 0},e.createElement(U,{helperText:nt,placeholder:at,labelText:st,onChange:bt,value:J,id:pt.current,disabled:c,required:te,"data-modal-primary-focus":!0})),c&&e.createElement(ue,{description:tt,className:`${y}__loader`}),(be||K)&&e.createElement("div",{className:`${y}__messaging`},e.createElement("div",{className:`${y}__error-icon`},e.createElement(Kt,{size:16})),e.createElement("p",{className:`${y}__messaging-text`},be?m:L)),p&&e.createElement("div",{className:`${y}__messaging`},e.createElement(Lt,{size:16}),Z?e.createElement(Q,{apiKey:n,body:b,fileName:d,linkText:P,fileType:T,downloadLinkLabel:D}):e.createElement("div",{className:`${y}__messaging-text`},Y)))),e.createElement(Ct,{className:`${y}__footer`},e.createElement(R,{type:"button",kind:"secondary",onClick:Tt},ht()),e.createElement(R,{...p&&yt,type:"submit",kind:"primary",onClick:Pe,disabled:gt()},ft()))))});const Re=n=>me(n,({customSteps:a})=>a&&a.length>1),de=n=>me(n,({editing:a})=>a),F=n=>me(n,({hasDownloadLink:a})=>a);w=_.checkComponentEnabled(w,ye);w.propTypes={apiKey:t.string,apiKeyLabel:t.string,apiKeyName:t.string,body:t.string,className:t.string,closeButtonText:t.string,copyButtonText:t.string,copyErrorText:t.string,copyIconDescription:t.string,customSteps:t.arrayOf(t.shape({valid:t.bool,content:t.node,title:t.string})),downloadBodyText:F(t.string),downloadFileName:F(t.string),downloadFileType:F(t.oneOf(["txt","json"])),downloadLinkLabel:F(t.string),downloadLinkText:F(t.string),editButtonText:de(t.string),editSuccess:de(t.bool),editSuccessTitle:de(t.string),editing:t.bool,error:t.bool,errorText:t.string,generateButtonText:t.string,generateSuccessBody:t.node,generateSuccessTitle:t.string,generateTitle:t.string,hasAPIKeyVisibilityToggle:t.bool,hasDownloadLink:t.bool,hideAPIKeyLabel:t.string,loading:t.bool,loadingText:t.string,modalLabel:t.string,nameHelperText:t.string,nameLabel:t.string,namePlaceholder:t.string,nameRequired:t.bool,nextStepButtonText:Re(t.string),onClose:t.func,onCopy:t.func,onRequestEdit:t.func,onRequestGenerate:t.func,open:t.bool.isRequired,portalTarget:t.node,previousStepButtonText:Re(t.string),showAPIKeyLabel:t.string};w.displayName=ye;w.__docgenInfo={description:"",methods:[],displayName:"APIKeyModal",props:{apiKey:{required:!1,tsType:{name:"string"},description:"the api key that's displayed to the user when a request to create is fulfilled.",type:{name:"string"}},apiKeyLabel:{required:!1,tsType:{name:"string"},description:"label for the text input that holds the api key.",type:{name:"string"}},apiKeyName:{required:!1,tsType:{name:"string"},description:"the name of the api key. should only be supplied in edit mode.",defaultValue:{value:"''",computed:!1},type:{name:"string"}},body:{required:!1,tsType:{name:"string"},description:"body content for the modal",type:{name:"string"}},className:{required:!1,tsType:{name:"string"},description:"optional class name",type:{name:"string"}},closeButtonText:{required:!1,tsType:{name:"string"},description:"text for the close button",type:{name:"string"}},copyButtonText:{required:!1,tsType:{name:"string"},description:"text for the copy button",type:{name:"string"}},copyErrorText:{required:!1,tsType:{name:"string"},description:"Error message for when the copy function fails",type:{name:"string"}},copyIconDescription:{required:!1,tsType:{name:"string"},description:"text description for the copy button icon",type:{name:"string"}},customSteps:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  valid?: boolean;
  content?: ReactNode;
  title?: string;
}`,signature:{properties:[{key:"valid",value:{name:"boolean",required:!1}},{key:"content",value:{name:"ReactNode",required:!1}},{key:"title",value:{name:"string",required:!1}}]}}],raw:`Array<{
  valid?: boolean;
  content?: ReactNode;
  title?: string;
}>`},description:"if you need more options for key creation beyond just the name use custom steps to obtain whatever data is required.",defaultValue:{value:"[]",computed:!1},type:{name:"arrayOf",value:{name:"shape",value:{valid:{name:"bool",description:"designates if the step has passed whatever validation rules are in place.",required:!1},content:{name:"node",description:"designates content is the JSX that holds whatever inputs you need",required:!1},title:{name:"string",description:"designates the title that's displayed at the top of the modal for each step",required:!1}}}}},editing:{required:!1,tsType:{name:"boolean"},description:"designates if the modal is in the edit mode",type:{name:"bool"}},error:{required:!1,tsType:{name:"boolean"},description:"designates if an error has occurred in a request",type:{name:"bool"}},errorText:{required:!1,tsType:{name:"string"},description:"text to display if an error has occurred",type:{name:"string"}},generateButtonText:{required:!1,tsType:{name:"string"},description:`default primary button text for modal in assumed default mode create or generate.
in create mode this is the button text prior to supplying an api key, which then
uses copyButtonText`,type:{name:"string"}},generateSuccessBody:{required:!1,tsType:{name:"ReactNode"},description:"content to display if generate request was successful",type:{name:"node"}},generateSuccessTitle:{required:!1,tsType:{name:"string"},description:"title for a successful key generation",type:{name:"string"}},generateTitle:{required:!1,tsType:{name:"string"},description:"default title for the modal in generate key mode",type:{name:"string"}},hasAPIKeyVisibilityToggle:{required:!1,tsType:{name:"boolean"},description:"designates if the api input has the visibility toggle enabled",type:{name:"bool"}},hasDownloadLink:{required:!1,tsType:{name:"boolean"},description:"designates if user is able to download the api key",type:{name:"bool"}},hideAPIKeyLabel:{required:!1,tsType:{name:"string"},description:"label text that's displayed when hovering over visibility toggler to hide key",type:{name:"string"}},loading:{required:!1,tsType:{name:"boolean"},description:"designates if the modal is in a loading state via a request or some other in progress operation",type:{name:"bool"}},loadingText:{required:!1,tsType:{name:"string"},description:"text that displays while modal is in the loading state",type:{name:"string"}},modalLabel:{required:!1,tsType:{name:"string"},description:"general label text for modal",type:{name:"string"}},nameHelperText:{required:!1,tsType:{name:"string"},description:"helper text for name input",type:{name:"string"}},nameLabel:{required:!1,tsType:{name:"string"},description:"label for api key name input",type:{name:"string"}},namePlaceholder:{required:!1,tsType:{name:"string"},description:"placeholder text for api key name input",type:{name:"string"}},nameRequired:{required:!1,tsType:{name:"boolean"},description:"designates if a name is required or not for key generation. NOTE- if using custom steps set this to false since you will be using your own validation",type:{name:"bool"}},open:{required:!0,tsType:{name:"boolean"},description:"designates if modal is open or closed",type:{name:"bool"}},portalTarget:{required:!1,tsType:{name:"ReactNode"},description:"The DOM node the tearsheet should be rendered within. Defaults to document.body.",type:{name:"node"}},showAPIKeyLabel:{required:!1,tsType:{name:"string"},description:"label text that's displayed when hovering over visibility toggler to show key",type:{name:"string"}},previousStepButtonText:{required:!1,tsType:{name:"string"},description:"text that displays in the secondary button when using custom steps to indicate to the user that there is a previous step",type:{name:"custom",raw:"customStepsRequiredProps(PropTypes.string)"}},nextStepButtonText:{required:!1,tsType:{name:"string"},description:"text that displays in the primary button when using custom steps to indicate to the user that there is a next step",type:{name:"custom",raw:"customStepsRequiredProps(PropTypes.string)"}},editButtonText:{required:!1,tsType:{name:"string"},description:"text for the edit button",type:{name:"custom",raw:"editRequiredProps(PropTypes.string)"}},editSuccess:{required:!1,tsType:{name:"boolean"},description:"designates if the edit request was successful",type:{name:"custom",raw:"editRequiredProps(PropTypes.bool)"}},editSuccessTitle:{required:!1,tsType:{name:"string"},description:"title for a successful edit",type:{name:"custom",raw:"editRequiredProps(PropTypes.string)"}},downloadBodyText:{required:!1,tsType:{name:"string"},description:"the content that appears that indicates the key is downloadable",type:{name:"custom",raw:"downloadRequiredProps(PropTypes.string)"}},downloadFileName:{required:!1,tsType:{name:"string"},description:"designates the name of downloadable json file with the key. if not specified will default to 'apikey'",type:{name:"custom",raw:"downloadRequiredProps(PropTypes.string)"}},downloadFileType:{required:!1,tsType:{name:"union",raw:"'txt' | 'json'",elements:[{name:"literal",value:"'txt'"},{name:"literal",value:"'json'"}]},description:"designates the file type for the downloadable key",type:{name:"custom",raw:"downloadRequiredProps(PropTypes.oneOf(['txt', 'json']))"}},downloadLinkText:{required:!1,tsType:{name:"string"},description:"anchor text for the download link",type:{name:"custom",raw:"downloadRequiredProps(PropTypes.string)"}},downloadLinkLabel:{required:!1,tsType:{name:"string"},description:"Aria-label for the download link",defaultValue:{value:"downloadLinkText",computed:!1},type:{name:"custom",raw:"downloadRequiredProps(PropTypes.string)"}},onClose:{description:"handler for on modal close",type:{name:"func"},required:!1},onCopy:{description:`Optional callback if you want to use your own copy function instead of the build in one
onCopy(apiKey)`,type:{name:"func"},required:!1},onRequestEdit:{description:"handler for api key edit",type:{name:"func"},required:!1},onRequestGenerate:{description:"handler for api key generation",type:{name:"func"},required:!1}}};const Ht=".c4p--apikey-modal .cds--radio-button-wrapper{margin-bottom:.25rem}.c4p--apikey-modal__permissions.cds--fieldset{margin-top:1rem;margin-bottom:0}.c4p--apikey-modal__resource-toggle.cds--fieldset{margin-top:0;margin-bottom:1rem}.c4p--apikey-modal__resource-name.cds--fieldset{margin-top:0;margin-bottom:0}.c4p--apikey-modal__button-loading.cds--btn--primary{background:var(--cds-link-secondary, #0043ce)}",Qe=()=>{const{csfFile:n}=At("meta",["meta"]);return e.createElement(Et,{altGuidelinesHref:[Rt(n),{href:"https://www.carbondesignsystem.com/components/modal/usage",label:"Carbon Modal usage guidelines"},{href:"https://react.carbondesignsystem.com/?path=/docs/modal--default",label:"Carbon Modal documentation"}],blocks:[{story:C,description:"API key creation / generation is assumed to be the default mode for this modal.\nTo enable key editing you have to set the `edit` prop to true and supply any\nother edit related props with the relevant input."},{description:"By default generate and edit only supply a name input for your key. If you need additional input you should use custom steps",story:A}]})};Qe.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const Gn={title:"IBM Products/Components/Generating an API key/APIKeyModal",component:w,tags:["autodocs"],parameters:{styles:Ht,docs:{page:Qe}},argTypes:{generateSuccessBody:{control:{type:"select",labels:{0:"short body",1:"long body"}},options:[0,1],mapping:{0:e.createElement("p",null,"API key successfully created."),1:e.createElement("p",null,"This is your unique API key and is non-recoverable. If you lose this API key, you will have to reset it.")}},portalTarget:{control:!1}}},I={apiKey:"123-456-789",apiKeyLabel:"API key",showAPIKeyLabel:"Show key",hideAPIKeyLabel:"Hide key",copyButtonText:"Copy",copyIconDescription:"Copy",hasAPIKeyVisibilityToggle:!0,downloadBodyText:"This is your unique API key and is non-recoverable. If you lose this API key, you will have to reset it.",downloadLinkText:"Download as JSON",downloadLinkLabel:"Download API Key in Java Script File format",hasDownloadLink:!0,downloadFileName:"apikey",downloadFileType:"json",open:!0,closeButtonText:"Close",generateSuccessTitle:"API key successfully created",editSuccessTitle:"API key successfully saved",loadingText:"Generating...",modalLabel:"An example of Generate API key"},v=`${_.prefix}--apikey-modal`,Gt=n=>{const[a,i]=s.useState(!1),[r,l]=s.useState(!1),u=async()=>{l(!0),await X(1e3),i(!0),l(!1)};return e.createElement(e.Fragment,null,e.createElement("style",null,`.${v} { opacity: 0; }`,";"),e.createElement(w,{...n,onClose:()=>i(!1),open:a}),r?e.createElement(R,{renderIcon:ue,className:`${v}__button-loading`},"Generating..."):e.createElement(R,{onClick:u},"Generate"))},Ye=n=>{const{error:a}=n,[i,r]=s.useState(!1),[l,u]=s.useState(""),[f,m]=s.useState(!1),[h,o]=s.useState(!1),b=async T=>{pe(`submitted ${T}`)(),o(!1),m(!0),await X(1e3),a?o(!0):u("111-111-111-111"),m(!1)},d=()=>{r(!1),u("")};return e.createElement(e.Fragment,null,e.createElement("style",null,`.${v} { opacity: 0; }`,";"),e.createElement(w,{...n,apiKey:l,loading:f,onClose:d,onRequestGenerate:b,open:i,error:h}),e.createElement(R,{onClick:()=>r(!i)},"Generate API key"))},Ze=n=>{const{editing:a}=n,{savedName:i,savedPermissions:r,savedAllResources:l,savedResource:u,...f}=n,[m,h]=s.useState(!1),[o,b]=s.useState(""),[d,T]=s.useState(!1),[P,D]=s.useState(i),[W,B]=s.useState(r),[S,k]=s.useState(l),[K,L]=s.useState(u),[M,Y]=s.useState(!1),q=async()=>{pe("submitted")(),T(!0),await X(1e3),a?Y(!0):b("111-111-111-111"),T(!1)},j=()=>{h(!1),a||(b(""),D(""),B(""),k(!1),L(""))},V=c=>{c.preventDefault(),q()},Z=()=>{S&&K&&L(""),k(c=>!c)},ee=[{valid:!!(P&&W),title:a?"Edit API key":"Generate API key",content:e.createElement(e.Fragment,null,e.createElement("p",{className:`${v}__body`},"(Optional description text) To connect securely to [product name], your application or tool needs an API key with permission to access resources such as [product resource name]."),e.createElement(U,{value:P,onChange:c=>D(c.target.value),labelText:"Name your application",placeholder:"Application name",id:"name-input","data-modal-primary-focus":!0}),e.createElement(le,{legendText:"What do you want your application to be able to do",className:`${v}__permissions`},e.createElement(xt,{onChange:c=>B(c),valueSelected:W,name:"permission",orientation:"vertical"},e.createElement(ce,{value:"Read and write",labelText:"Read and write"}),e.createElement(ce,{value:"Read only",labelText:"Read only"}),e.createElement(ce,{value:"Write only",labelText:"Write only"}))))},{valid:S||!S&&!!K,title:"Choose which resources the API will have access to",content:e.createElement(e.Fragment,null,e.createElement(Xe,{onSubmit:V},e.createElement(le,{legendText:"What do you want your application to be able to do",className:`${v}__resource-toggle`},e.createElement(Pt,{onClick:Z,labelText:"All resources",toggled:S,disabled:d,id:"toggle1",autoFocus:!0})),e.createElement(le,{legendText:"What do you want your application to be able to do",className:`${v}__resource-name`},e.createElement(U,{value:K,onChange:c=>L(c.target.value),labelText:"Which resource?",placeholder:"Resources name",disabled:d||S,id:"resource-input"}))),d&&e.createElement(ue,{description:d?"Saving...":"Generating..."}),M&&e.createElement("div",{className:`${v}__messaging`},"Edited successfully"))}];return e.createElement(e.Fragment,null,e.createElement("style",null,`.${v} { opacity: 0; }`,";"),e.createElement(w,{...f,apiKey:o,loading:d,onClose:j,onRequestEdit:q,onRequestGenerate:q,open:m,customSteps:ee,nameRequired:!1,editSuccess:M}),e.createElement(R,{onClick:()=>h(!m)},a?"Edit API key":"Generate API key"))},et=n=>{const{error:a,apiKeyName:i}=n,[r,l]=s.useState(!1),[u,f]=s.useState(!1),[m,h]=s.useState(!1),[o,b]=s.useState(!1),d=async()=>{pe(`submitted ${i}`)(),h(!1),f(!0),await X(1e3),a?h(!0):b(!0),f(!1)},T=()=>{l(!1)},P=()=>{l(!0)};return e.createElement(e.Fragment,null,e.createElement("style",null,`.${v} { opacity: 0; }`,";"),e.createElement(w,{...n,loading:u,onClose:T,onRequestEdit:d,open:r,error:m,editSuccess:o}),e.createElement(R,{onClick:P},"Edit API key"))},H=Ye.bind({});H.args={...I,generateButtonText:"Generate API key",generateTitle:"Generate an API key",generateSuccessBody:1,body:"(Optional description text) To connect securely to [product name], your application or tool needs an API key with permission to access resources such as [product resource name].",nameHelperText:"Providing the application name will help you identify your API key later.",nameLabel:"Name your application",namePlaceholder:"Application name",nameRequired:!0};const G=Ye.bind({});G.args={...I,hasAPIKeyVisibilityToggle:!0,generateButtonText:"Generate API key",generateTitle:"Generate an API key",body:"(Optional description text) To connect securely to [product name], your application or tool needs an API key with permission to access resources such as [product resource name].",nameHelperText:"Providing the application name will help you identify your API key later.",nameLabel:"Name your application",namePlaceholder:"Application name",nameRequired:!0,error:!0,errorText:"Failed to create API key"};const O=Gt.bind({});O.args={...I,apiKeyLabel:""};const N=Ze.bind({});N.args={...I,generateButtonText:"Generate",nextStepButtonText:"Next",previousStepButtonText:"Previous",downloadFileName:"apikey",savedName:"",savedAllResources:!1,savedResource:"",savedPermissions:""};N.parameters={docs:{source:{code:"Sorry, this feature is not currently available for this story"}}};const C=et.bind({});C.args={...I,editButtonText:"Save API key",generateTitle:"Save an API key",body:"(Optional description text) To connect securely to [product name], your application or tool needs an API key with permission to access resources such as [product resource name].",nameHelperText:"Providing the application name will help you identify your API key later.",nameLabel:"Name your application",namePlaceholder:"Application name",nameRequired:!0,editing:!0,apiKey:"",loadingText:"Saving...",apiKeyName:"test_key_1"};const $=et.bind({});$.args={...I,editButtonText:"Save API key",generateTitle:"Save an API key",body:"(Optional description text) To connect securely to [product name], your application or tool needs an API key with permission to access resources such as [product resource name].",nameHelperText:"Providing the application name will help you identify your API key later.",nameLabel:"Name your application",namePlaceholder:"Application name",nameRequired:!0,editing:!0,apiKey:"",loadingText:"Saving...",generateSuccessBody:"API Key saved.",apiKeyName:"test_key_1",error:!0,errorText:"Failed to edit API key"};const A=Ze.bind({});A.args={...I,generateButtonText:"Generate",nextStepButtonText:"Next",previousStepButtonText:"Previous",downloadFileName:"apikey",savedName:"test_key_1",savedAllResources:!1,savedResource:"resource_1",savedPermissions:"Read only",editing:!0,editButtonText:"Save API key"};A.parameters={docs:{source:{code:"Sorry, this feature is not currently available for this story"}}};var Ie,qe,Ne;H.parameters={...H.parameters,docs:{...(Ie=H.parameters)==null?void 0:Ie.docs,source:{originalSource:`args => {
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
}`,...(Ne=(qe=H.parameters)==null?void 0:qe.docs)==null?void 0:Ne.source}}};var Ce,_e,Be;G.parameters={...G.parameters,docs:{...(Ce=G.parameters)==null?void 0:Ce.docs,source:{originalSource:`args => {
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
}`,...(Be=(_e=G.parameters)==null?void 0:_e.docs)==null?void 0:Be.source}}};var Ke,Le,Fe;O.parameters={...O.parameters,docs:{...(Ke=O.parameters)==null?void 0:Ke.docs,source:{originalSource:`args => {
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
}`,...(Fe=(Le=O.parameters)==null?void 0:Le.docs)==null?void 0:Fe.source}}};var He,Ge,Oe;N.parameters={...N.parameters,docs:{...(He=N.parameters)==null?void 0:He.docs,source:{originalSource:`args => {
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
}`,...(Oe=(Ge=N.parameters)==null?void 0:Ge.docs)==null?void 0:Oe.source}}};var $e,De,We;C.parameters={...C.parameters,docs:{...($e=C.parameters)==null?void 0:$e.docs,source:{originalSource:`args => {
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
}`,...(We=(De=C.parameters)==null?void 0:De.docs)==null?void 0:We.source}}};var Me,je,Ve;$.parameters={...$.parameters,docs:{...(Me=$.parameters)==null?void 0:Me.docs,source:{originalSource:`args => {
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
}`,...(Ve=(je=$.parameters)==null?void 0:je.docs)==null?void 0:Ve.source}}};var ze,Je,Ue;A.parameters={...A.parameters,docs:{...(ze=A.parameters)==null?void 0:ze.docs,source:{originalSource:`args => {
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
}`,...(Ue=(Je=A.parameters)==null?void 0:Je.docs)==null?void 0:Ue.source}}};const On=["Generate","GenerateWithError","InstantGenerate","CustomGenerate","Edit","EditWithError","CustomEdit"];export{A as CustomEdit,N as CustomGenerate,C as Edit,$ as EditWithError,H as Generate,G as GenerateWithError,O as InstantGenerate,On as __namedExportsOrder,Gn as default};
