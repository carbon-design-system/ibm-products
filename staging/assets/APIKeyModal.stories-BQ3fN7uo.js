import{r as s,R as e}from"./index-BwDkhjyp.js";import{c as vt,H as kt}from"./floating-ui.dom.mjs-BB6krl5l.js";import{p as _,B as E}from"./settings-GP6q6PuD.js";import{F as Xe}from"./Form-DN6pa6y_.js";import{F as le}from"./FormGroup-BqnClHRL.js";import{I as ue}from"./InlineLoading-Du9-dGcy.js";import{R as ce}from"./RadioButton-iuzHq1lE.js";import{R as xt}from"./RadioButtonGroup-BzvjbZlV.js";import{T as Pt}from"./Toggle-B24WmpL7.js";import{P as wt,T as X}from"./TextInput-CEsoFxuO.js";import{a as pe}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{w as Q}from"./wait-CTNFjQS8.js";import{S as St}from"./StoryDocsPage-6b3Ekv3Y.js";import{u as Et}from"./index-CRDEJUOW.js";import{b as Rt}from"./story-helper-6_fmjwZ-.js";import{P as t}from"./index-Dk74W0Oi.js";import{C as At,M as It,a as qt,b as Nt}from"./ComposedModal-BJ2Qndwj.js";import{u as Ct}from"./usePortalTarget-CbuweS39.js";import{g as _t}from"./devtools-TX7bKGcX.js";import{i as me}from"./props-helper-2sr7eXy7.js";import{u as Ee}from"./uuidv4-BQrI85uz.js";import{E as Bt}from"./bucket-6-CVuTMQPO.js";import{b as Kt}from"./bucket-9-CrVHodqy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BONylQH5.js";import"./index-CJvxHwuA.js";import"./events-b0qlIvq_.js";import"./index-CmXP8YBY.js";import"./mergeRefs-CTUecegF.js";import"./Text-XRl1lg-_.js";import"./bucket-18-D0nV4up4.js";import"./useControllableState-DwpxGhsf.js";import"./useNormalizedInputProps-QbhCpGGJ.js";import"./FormContext-C7kRVu4t.js";import"./bucket-17-CZ6sDvQ6.js";import"./useAnnouncer-Dwt0jqXi.js";import"./v4-CQkTLCs1.js";import"./iframe-DGBkLKmo.js";import"../sb-preview/runtime.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./tslib.es6-B4_xh3D5.js";import"./index-DcAOwtUU.js";import"./index-CyttNDxU.js";import"./LayerContext-DbU-6VX4.js";import"./ButtonSet-MPuWm2ig.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-7Bp8k5hD.js";import"./index-B48M1B-m.js";import"./feature-flags-BtLgATM2.js";import"./index-CMu7qODQ.js";const Ft="APIKeyDownloader",Y=({apiKey:n,body:a,fileName:i,fileType:r,linkText:l})=>{const[u,h]=s.useState({});return s.useEffect(()=>{(async()=>{const m=r==="txt"?n:JSON.stringify({apiKey:n}),o=new Blob([m],{type:r==="txt"?"text/plain":"application/json"}),T=await URL.createObjectURL(o),c=`${i||"apikey"}.${r}`;h({href:T,download:c})})()},[n,i,r]),e.createElement("div",{className:`${_.prefix}--apikey-modal__download-container`},e.createElement("p",{className:`${_.prefix}--apikey-modal__messaging-text`},a," ",e.createElement("a",{...u,className:`${_.prefix}--apikey-modal__download-link`},l)))};Y.displayName=Ft;Y.propTypes={apiKey:t.string.isRequired,body:t.string.isRequired,fileName:t.string.isRequired,fileType:t.oneOf(["txt","json"]).isRequired,linkText:t.string.isRequired};Y.__docgenInfo={description:"",methods:[],displayName:"APIKeyDownloader",props:{apiKey:{description:"the api key that's displayed to the user when a request to create is fulfilled.",type:{name:"string"},required:!0},body:{description:"body content for the downloader",type:{name:"string"},required:!0},fileName:{description:"designates the name of downloadable json file with the key. if not specified will default to 'apikey'",type:{name:"string"},required:!0},fileType:{description:"designates the file type for the downloadable key",type:{name:"enum",value:[{value:"'txt'",computed:!1},{value:"'json'",computed:!1}]},required:!0},linkText:{description:"anchor text for the download link",type:{name:"string"},required:!0}}};const ye="APIKeyModal",Re={apiKeyName:"",customSteps:[]};let k=s.forwardRef(({apiKey:n,apiKeyLabel:a,apiKeyName:i=Re.apiKeyName,body:r,className:l,closeButtonText:u,copyButtonText:h,copyErrorText:b,copyIconDescription:m,customSteps:o=Re.customSteps,downloadBodyText:T,downloadFileName:c,downloadFileType:x,downloadLinkText:A,editButtonText:D,editSuccess:B,editSuccessTitle:K,editing:d,error:W,errorText:F,generateButtonText:H,generateSuccessBody:M,generateSuccessTitle:j,generateTitle:I,hasAPIKeyVisibilityToggle:V,hasDownloadLink:Z,hideAPIKeyLabel:ee,loading:q,loadingText:y,modalLabel:ge,nameHelperText:tt,nameLabel:nt,namePlaceholder:st,nameRequired:te,nextStepButtonText:at,onClose:ne,onCopy:fe,onRequestEdit:se,onRequestGenerate:ae,open:oe,portalTarget:ot,previousStepButtonText:rt,showAPIKeyLabel:it,...lt},ct)=>{var Se;const[he,z]=s.useState(null),[be,dt]=s.useState(!1),[J,Te]=s.useState(i),[P,re]=s.useState(0),ie=s.useRef(void 0),ve=s.useRef(Ee()),ut=s.useRef(Ee()),pt=Ct(ot),w=!!o.length,p=n&&!q,ke=w&&P<o.length-1,xe=w&&P!==0,mt={renderIcon:f=>e.createElement(kt,{size:16,...f}),iconDescription:m,ref:ie},g=`${_.prefix}--apikey-modal`;s.useEffect(()=>{ie.current&&oe&&p&&ie.current.focus()},[oe,p]);const yt=()=>{var f;return q?!0:w&&"valid"in((o==null?void 0:o[P])||[])?!((f=o[P])!=null&&f.valid):!!(!w&&te&&!J)},gt=()=>ke?at:p?h:d?D:H,ft=()=>xe&&!p?rt:u;s.useEffect(()=>{var f;z(d&&B?K:p?j:w?(f=o[P])==null?void 0:f.title:I)},[p,d,B,K,w,j,I,P,o]);const ht=f=>{Te(f.target.value)},Pe=()=>{Te(""),re(0),ne==null||ne()},we=async f=>{if(f.preventDefault(),ke)re(P+1);else if(p)if(fe)fe(n);else try{await navigator.clipboard.writeText(n)}catch(Tt){console.error(Tt),dt(!0)}else d?se==null||se(J):ae==null||ae(J)},bt=()=>{xe&&!p?re(P-1):Pe()};return pt(e.createElement(At,{...lt,open:oe,ref:ct,..._t(ye),className:vt(l,g),onClose:Pe,size:"sm","aria-label":ge,preventCloseOnClickOutside:!0},e.createElement(It,{className:`${g}__header`,title:he,label:ge}),e.createElement(qt,{className:`${g}__body-container`},w&&!p?(Se=o[P])==null?void 0:Se.content:e.createElement(e.Fragment,null,r&&e.createElement("p",{className:`${g}__body`},r),!d&&n&&V&&e.createElement(wt,{value:n,labelText:a,id:ve.current,showPasswordLabel:it,hidePasswordLabel:ee,tooltipPosition:"left"}),!d&&n&&!V&&e.createElement(X,{value:n,labelText:a,id:ve.current}),(d||!p&&te)&&e.createElement(Xe,{onSubmit:we,"aria-label":he??void 0},e.createElement(X,{helperText:tt,placeholder:st,labelText:nt,onChange:ht,value:J,id:ut.current,disabled:q,required:te,"data-modal-primary-focus":!0})),q&&e.createElement(ue,{description:y,className:`${g}__loader`}),(be||W)&&e.createElement("div",{className:`${g}__messaging`},e.createElement("div",{className:`${g}__error-icon`},e.createElement(Bt,{size:16})),e.createElement("p",{className:`${g}__messaging-text`},be?b:F)),p&&e.createElement("div",{className:`${g}__messaging`},e.createElement(Kt,{size:16}),Z?e.createElement(Y,{apiKey:n,body:T,fileName:c,linkText:A,fileType:x}):e.createElement("div",{className:`${g}__messaging-text`},M)))),e.createElement(Nt,{className:`${g}__footer`},e.createElement(E,{type:"button",kind:"secondary",onClick:bt},ft()),e.createElement(E,{...p&&mt,type:"submit",kind:"primary",onClick:we,disabled:yt()},gt()))))});const Ae=n=>me(n,({customSteps:a})=>a&&a.length>1),de=n=>me(n,({editing:a})=>a),U=n=>me(n,({hasDownloadLink:a})=>a);k=_.checkComponentEnabled(k,ye);k.propTypes={apiKey:t.string,apiKeyLabel:t.string,apiKeyName:t.string,body:t.string,className:t.string,closeButtonText:t.string,copyButtonText:t.string,copyErrorText:t.string,copyIconDescription:t.string,customSteps:t.arrayOf(t.shape({valid:t.bool,content:t.node,title:t.string})),downloadBodyText:U(t.string),downloadFileName:U(t.string),downloadFileType:U(t.oneOf(["txt","json"])),downloadLinkText:U(t.string),editButtonText:de(t.string),editSuccess:de(t.bool),editSuccessTitle:de(t.string),editing:t.bool,error:t.bool,errorText:t.string,generateButtonText:t.string,generateSuccessBody:t.node,generateSuccessTitle:t.string,generateTitle:t.string,hasAPIKeyVisibilityToggle:t.bool,hasDownloadLink:t.bool,hideAPIKeyLabel:t.string,loading:t.bool,loadingText:t.string,modalLabel:t.string,nameHelperText:t.string,nameLabel:t.string,namePlaceholder:t.string,nameRequired:t.bool,nextStepButtonText:Ae(t.string),onClose:t.func,onCopy:t.func,onRequestEdit:t.func,onRequestGenerate:t.func,open:t.bool.isRequired,portalTarget:t.node,previousStepButtonText:Ae(t.string),showAPIKeyLabel:t.string};k.displayName=ye;k.__docgenInfo={description:"",methods:[],displayName:"APIKeyModal",props:{apiKey:{required:!1,tsType:{name:"string"},description:"the api key that's displayed to the user when a request to create is fulfilled.",type:{name:"string"}},apiKeyLabel:{required:!1,tsType:{name:"string"},description:"label for the text input that holds the api key.",type:{name:"string"}},apiKeyName:{required:!1,tsType:{name:"string"},description:"the name of the api key. should only be supplied in edit mode.",defaultValue:{value:"''",computed:!1},type:{name:"string"}},body:{required:!1,tsType:{name:"string"},description:"body content for the modal",type:{name:"string"}},className:{required:!1,tsType:{name:"string"},description:"optional class name",type:{name:"string"}},closeButtonText:{required:!1,tsType:{name:"string"},description:"text for the close button",type:{name:"string"}},copyButtonText:{required:!1,tsType:{name:"string"},description:"text for the copy button",type:{name:"string"}},copyErrorText:{required:!1,tsType:{name:"string"},description:"Error message for when the copy function fails",type:{name:"string"}},copyIconDescription:{required:!1,tsType:{name:"string"},description:"text description for the copy button icon",type:{name:"string"}},customSteps:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
onCopy(apiKey)`,type:{name:"func"},required:!1},onRequestEdit:{description:"handler for api key edit",type:{name:"func"},required:!1},onRequestGenerate:{description:"handler for api key generation",type:{name:"func"},required:!1}}};const Ht=".c4p--apikey-modal .cds--radio-button-wrapper{margin-bottom:.25rem}.c4p--apikey-modal__permissions.cds--fieldset{margin-top:1rem;margin-bottom:0}.c4p--apikey-modal__resource-toggle.cds--fieldset{margin-top:0;margin-bottom:1rem}.c4p--apikey-modal__resource-name.cds--fieldset{margin-top:0;margin-bottom:0}.c4p--apikey-modal__button-loading.cds--btn--primary{background:var(--cds-link-secondary, #0043ce)}",Qe=()=>{const{csfFile:n}=Et("meta",["meta"]);return e.createElement(St,{altGuidelinesHref:[Rt(n),{href:"https://www.carbondesignsystem.com/components/modal/usage",label:"Carbon Modal usage guidelines"},{href:"https://react.carbondesignsystem.com/?path=/docs/modal--default",label:"Carbon Modal documentation"}],blocks:[{story:C,description:"API key creation / generation is assumed to be the default mode for this modal.\nTo enable key editing you have to set the `edit` prop to true and supply any\nother edit related props with the relevant input."},{description:"By default generate and edit only supply a name input for your key. If you need additional input you should use custom steps",story:S}]})};Qe.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const Gn={title:"IBM Products/Components/Generating an API key/APIKeyModal",component:k,tags:["autodocs"],parameters:{styles:Ht,docs:{page:Qe}},argTypes:{generateSuccessBody:{control:{type:"select",labels:{0:"short body",1:"long body"}},options:[0,1],mapping:{0:e.createElement("p",null,"API key successfully created."),1:e.createElement("p",null,"This is your unique API key and is non-recoverable. If you lose this API key, you will have to reset it.")}},portalTarget:{control:!1}}},R={apiKey:"123-456-789",apiKeyLabel:"API key",showAPIKeyLabel:"Show key",hideAPIKeyLabel:"Hide key",copyButtonText:"Copy",copyIconDescription:"Copy",hasAPIKeyVisibilityToggle:!0,downloadBodyText:"This is your unique API key and is non-recoverable. If you lose this API key, you will have to reset it.",downloadLinkText:"Download as JSON",hasDownloadLink:!0,downloadFileName:"apikey",downloadFileType:"json",open:!0,closeButtonText:"Close",generateSuccessTitle:"API key successfully created",editSuccessTitle:"API key successfully saved",loadingText:"Generating...",modalLabel:"Generate API key"},v=`${_.prefix}--apikey-modal`,Lt=n=>{const[a,i]=s.useState(!1),[r,l]=s.useState(!1),u=async()=>{l(!0),await Q(1e3),i(!0),l(!1)};return e.createElement(e.Fragment,null,e.createElement("style",null,`.${v} { opacity: 0; }`,";"),e.createElement(k,{...n,onClose:()=>i(!1),open:a}),r?e.createElement(E,{renderIcon:ue,className:`${v}__button-loading`},"Generating..."):e.createElement(E,{onClick:u},"Generate"))},Ye=n=>{const{error:a}=n,[i,r]=s.useState(!1),[l,u]=s.useState(""),[h,b]=s.useState(!1),[m,o]=s.useState(!1),T=async x=>{pe(`submitted ${x}`)(),o(!1),b(!0),await Q(1e3),a?o(!0):u("111-111-111-111"),b(!1)},c=()=>{r(!1),u("")};return e.createElement(e.Fragment,null,e.createElement("style",null,`.${v} { opacity: 0; }`,";"),e.createElement(k,{...n,apiKey:l,loading:h,onClose:c,onRequestGenerate:T,open:i,error:m}),e.createElement(E,{onClick:()=>r(!i)},"Generate API key"))},Ze=n=>{const{editing:a}=n,{savedName:i,savedPermissions:r,savedAllResources:l,savedResource:u,...h}=n,[b,m]=s.useState(!1),[o,T]=s.useState(""),[c,x]=s.useState(!1),[A,D]=s.useState(i),[B,K]=s.useState(r),[d,W]=s.useState(l),[F,H]=s.useState(u),[M,j]=s.useState(!1),I=async()=>{pe("submitted")(),x(!0),await Q(1e3),a?j(!0):T("111-111-111-111"),x(!1)},V=()=>{m(!1),a||(T(""),D(""),K(""),W(!1),H(""))},Z=y=>{y.preventDefault(),I()},ee=()=>{d&&F&&H(""),W(y=>!y)},q=[{valid:!!(A&&B),title:a?"Edit API key":"Generate API key",content:e.createElement(e.Fragment,null,e.createElement("p",{className:`${v}__body`},"(Optional description text) To connect securely to [product name], your application or tool needs an API key with permission to access resources such as [product resource name]."),e.createElement(X,{value:A,onChange:y=>D(y.target.value),labelText:"Name your application",placeholder:"Application name",id:"name-input","data-modal-primary-focus":!0}),e.createElement(le,{legendText:"What do you want your application to be able to do",className:`${v}__permissions`},e.createElement(xt,{onChange:y=>K(y),valueSelected:B,name:"permission",orientation:"vertical"},e.createElement(ce,{value:"Read and write",labelText:"Read and write"}),e.createElement(ce,{value:"Read only",labelText:"Read only"}),e.createElement(ce,{value:"Write only",labelText:"Write only"}))))},{valid:d||!d&&!!F,title:"Choose which resources the API will have access to",content:e.createElement(e.Fragment,null,e.createElement(Xe,{onSubmit:Z},e.createElement(le,{legendText:"What do you want your application to be able to do",className:`${v}__resource-toggle`},e.createElement(Pt,{onClick:ee,labelText:"All resources",toggled:d,disabled:c,id:"toggle1",autoFocus:!0})),e.createElement(le,{legendText:"What do you want your application to be able to do",className:`${v}__resource-name`},e.createElement(X,{value:F,onChange:y=>H(y.target.value),labelText:"Which resource?",placeholder:"Resources name",disabled:c||d,id:"resource-input"}))),c&&e.createElement(ue,{description:c?"Saving...":"Generating..."}),M&&e.createElement("div",{className:`${v}__messaging`},"Edited successfully"))}];return e.createElement(e.Fragment,null,e.createElement("style",null,`.${v} { opacity: 0; }`,";"),e.createElement(k,{...h,apiKey:o,loading:c,onClose:V,onRequestEdit:I,onRequestGenerate:I,open:b,customSteps:q,nameRequired:!1,editSuccess:M}),e.createElement(E,{onClick:()=>m(!b)},a?"Edit API key":"Generate API key"))},et=n=>{const{error:a,apiKeyName:i}=n,[r,l]=s.useState(!1),[u,h]=s.useState(!1),[b,m]=s.useState(!1),[o,T]=s.useState(!1),c=async()=>{pe(`submitted ${i}`)(),m(!1),h(!0),await Q(1e3),a?m(!0):T(!0),h(!1)},x=()=>{l(!1)},A=()=>{l(!0)};return e.createElement(e.Fragment,null,e.createElement("style",null,`.${v} { opacity: 0; }`,";"),e.createElement(k,{...n,loading:u,onClose:x,onRequestEdit:c,open:r,error:b,editSuccess:o}),e.createElement(E,{onClick:A},"Edit API key"))},L=Ye.bind({});L.args={...R,generateButtonText:"Generate API key",generateTitle:"Generate an API key",generateSuccessBody:1,body:"(Optional description text) To connect securely to [product name], your application or tool needs an API key with permission to access resources such as [product resource name].",nameHelperText:"Providing the application name will help you identify your API key later.",nameLabel:"Name your application",namePlaceholder:"Application name",nameRequired:!0};const G=Ye.bind({});G.args={...R,hasAPIKeyVisibilityToggle:!0,generateButtonText:"Generate API key",generateTitle:"Generate an API key",body:"(Optional description text) To connect securely to [product name], your application or tool needs an API key with permission to access resources such as [product resource name].",nameHelperText:"Providing the application name will help you identify your API key later.",nameLabel:"Name your application",namePlaceholder:"Application name",nameRequired:!0,error:!0,errorText:"Failed to create API key"};const O=Lt.bind({});O.args={...R,apiKeyLabel:""};const N=Ze.bind({});N.args={...R,generateButtonText:"Generate",nextStepButtonText:"Next",previousStepButtonText:"Previous",downloadFileName:"apikey",savedName:"",savedAllResources:!1,savedResource:"",savedPermissions:""};N.parameters={docs:{source:{code:"Sorry, this feature is not currently available for this story"}}};const C=et.bind({});C.args={...R,editButtonText:"Save API key",generateTitle:"Save an API key",body:"(Optional description text) To connect securely to [product name], your application or tool needs an API key with permission to access resources such as [product resource name].",nameHelperText:"Providing the application name will help you identify your API key later.",nameLabel:"Name your application",namePlaceholder:"Application name",nameRequired:!0,editing:!0,apiKey:"",loadingText:"Saving...",apiKeyName:"test_key_1"};const $=et.bind({});$.args={...R,editButtonText:"Save API key",generateTitle:"Save an API key",body:"(Optional description text) To connect securely to [product name], your application or tool needs an API key with permission to access resources such as [product resource name].",nameHelperText:"Providing the application name will help you identify your API key later.",nameLabel:"Name your application",namePlaceholder:"Application name",nameRequired:!0,editing:!0,apiKey:"",loadingText:"Saving...",generateSuccessBody:"API Key saved.",apiKeyName:"test_key_1",error:!0,errorText:"Failed to edit API key"};const S=Ze.bind({});S.args={...R,generateButtonText:"Generate",nextStepButtonText:"Next",previousStepButtonText:"Previous",downloadFileName:"apikey",savedName:"test_key_1",savedAllResources:!1,savedResource:"resource_1",savedPermissions:"Read only",editing:!0,editButtonText:"Save API key"};S.parameters={docs:{source:{code:"Sorry, this feature is not currently available for this story"}}};var Ie,qe,Ne;L.parameters={...L.parameters,docs:{...(Ie=L.parameters)==null?void 0:Ie.docs,source:{originalSource:`args => {
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
}`,...(Ne=(qe=L.parameters)==null?void 0:qe.docs)==null?void 0:Ne.source}}};var Ce,_e,Be;G.parameters={...G.parameters,docs:{...(Ce=G.parameters)==null?void 0:Ce.docs,source:{originalSource:`args => {
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
}`,...(Be=(_e=G.parameters)==null?void 0:_e.docs)==null?void 0:Be.source}}};var Ke,Fe,He;O.parameters={...O.parameters,docs:{...(Ke=O.parameters)==null?void 0:Ke.docs,source:{originalSource:`args => {
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
}`,...(He=(Fe=O.parameters)==null?void 0:Fe.docs)==null?void 0:He.source}}};var Le,Ge,Oe;N.parameters={...N.parameters,docs:{...(Le=N.parameters)==null?void 0:Le.docs,source:{originalSource:`args => {
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
}`,...(Ve=(je=$.parameters)==null?void 0:je.docs)==null?void 0:Ve.source}}};var ze,Je,Ue;S.parameters={...S.parameters,docs:{...(ze=S.parameters)==null?void 0:ze.docs,source:{originalSource:`args => {
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
}`,...(Ue=(Je=S.parameters)==null?void 0:Je.docs)==null?void 0:Ue.source}}};const On=["Generate","GenerateWithError","InstantGenerate","CustomGenerate","Edit","EditWithError","CustomEdit"];export{S as CustomEdit,N as CustomGenerate,C as Edit,$ as EditWithError,L as Generate,G as GenerateWithError,O as InstantGenerate,On as __namedExportsOrder,Gn as default};
