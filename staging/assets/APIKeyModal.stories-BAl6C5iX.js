import{r as n,R as e}from"./index-BwDkhjyp.js";import{J as At,c as It}from"./index-CQ0F2wkl.js";import{p as _,B as A,j as qt}from"./settings-xiNX1vM3.js";import{F as tt}from"./Form-BSVSs_TK.js";import{F as ue}from"./FormGroup-BugBd57F.js";import{I as ye}from"./InlineLoading-Dllsw8qU.js";import{R as pe}from"./RadioButton-CqP5qcr1.js";import{R as Ct}from"./RadioButtonGroup-Ck-JWiH0.js";import{T as Nt}from"./Toggle-miARzfIN.js";import{P as Bt,T as Z}from"./TextInput-Co-qdCU4.js";import{a as fe}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{w as ee}from"./wait-CTNFjQS8.js";import{S as _t}from"./StoryDocsPage-CQs0QWcW.js";import{u as Kt}from"./index-DXUYcqZv.js";import{b as Ft}from"./story-helper-6_fmjwZ-.js";import{P as t}from"./index-Dk74W0Oi.js";import{C as Lt,M as Ht,a as Gt,b as Ot}from"./ComposedModal-Bp7RzMcH.js";import{u as $t}from"./usePortalTarget-CjULiY7e.js";import{g as Dt}from"./devtools-Bz70ioU6.js";import{i as ge}from"./props-helper-BS5A6Pu3.js";import{u as Ce}from"./uuidv4-BQrI85uz.js";import{u as Wt,c as Mt}from"./useFocus-BkvvrSzv.js";import{u as jt}from"./usePreviousValue-Cw-zRxyE.js";import{E as Vt}from"./bucket-6-DBBo9VQm.js";import{d as Jt}from"./bucket-9-BGCJpvdq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BONylQH5.js";import"./index-CJvxHwuA.js";import"./events-OVwOsPzJ.js";import"./index-ABeo-Xma.js";import"./bucket-2-DlXCnOsR.js";import"./mergeRefs-CTUecegF.js";import"./Text-BiMgJRID.js";import"./bucket-18-DbwFKOtV.js";import"./useControllableState-DwpxGhsf.js";import"./useNormalizedInputProps-B85N_Uyv.js";import"./FormContext-C7kRVu4t.js";import"./useAnnouncer-Dwt0jqXi.js";import"./v4-CQkTLCs1.js";import"./iframe-DanyPKBP.js";import"../sb-preview/runtime.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./tslib.es6-B4_xh3D5.js";import"./index-DcAOwtUU.js";import"./index-CvBNEhOa.js";import"./LayerContext-DbU-6VX4.js";import"./ButtonSet-UZItGUcq.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-0D7LLA53.js";import"./feature-flags-D0iIr019.js";import"./index-C2GlWzJb.js";const zt="APIKeyDownloader",te=({apiKey:s,body:o,fileName:i,fileType:r,linkText:l,downloadLinkLabel:c})=>{const[m,f]=n.useState({});return n.useEffect(()=>{(async()=>{const a=r==="txt"?s:JSON.stringify({apiKey:s}),g=new Blob([a],{type:r==="txt"?"text/plain":"application/json"}),d=await URL.createObjectURL(g),R=`${i||"apikey"}.${r}`;f({href:d,download:R})})()},[s,i,r]),e.createElement("div",{className:`${_.prefix}--apikey-modal__download-container`},e.createElement("p",{className:`${_.prefix}--apikey-modal__messaging-text`},o," ",e.createElement("a",{...m,className:`${_.prefix}--apikey-modal__download-link`,"aria-label":c??l,role:"button"},c??l)))};te.displayName=zt;te.propTypes={apiKey:t.string.isRequired,body:t.string.isRequired,downloadLinkLabel:t.string,fileName:t.string.isRequired,fileType:t.oneOf(["txt","json"]).isRequired,linkText:t.string.isRequired};te.__docgenInfo={description:"",methods:[],displayName:"APIKeyDownloader",props:{apiKey:{description:"the api key that's displayed to the user when a request to create is fulfilled.",type:{name:"string"},required:!0},body:{description:"body content for the downloader",type:{name:"string"},required:!0},downloadLinkLabel:{description:"aria-label for the download link",type:{name:"string"},required:!1},fileName:{description:"designates the name of downloadable json file with the key. if not specified will default to 'apikey'",type:{name:"string"},required:!0},fileType:{description:"designates the file type for the downloadable key",type:{name:"enum",value:[{value:"'txt'",computed:!1},{value:"'json'",computed:!1}]},required:!0},linkText:{description:"anchor text for the download link",type:{name:"string"},required:!0}}};const he="APIKeyModal",Ne={apiKeyName:"",customSteps:[]};let w=n.forwardRef(({apiKey:s,apiKeyLabel:o,apiKeyName:i=Ne.apiKeyName,body:r,className:l,closeButtonText:c,copyButtonText:m,copyErrorText:f,copyIconDescription:T,customSteps:a=Ne.customSteps,downloadBodyText:g,downloadFileName:d,downloadFileType:R,downloadLinkText:v,downloadLinkLabel:q=v,editButtonText:j,editSuccess:K,editSuccessTitle:F,editing:p,error:V,errorText:L,generateButtonText:H,generateSuccessBody:J,generateSuccessTitle:z,generateTitle:C,hasAPIKeyVisibilityToggle:U,hasDownloadLink:ne,hideAPIKeyLabel:se,launcherButtonRef:G,loading:u,loadingText:rt,modalLabel:be,nameHelperText:it,nameLabel:lt,namePlaceholder:ct,nameRequired:oe,nextStepButtonText:dt,onClose:ae,onCopy:Te,onRequestEdit:re,onRequestGenerate:ie,open:x,portalTarget:ut,previousStepButtonText:pt,selectorPrimaryFocus:le,showAPIKeyLabel:mt,...yt},ft)=>{var qe;const[Re,X]=n.useState(null),[ve,gt]=n.useState(!1),[Q,ke]=n.useState(i),[P,ce]=n.useState(0),de=n.useRef(void 0),we=n.useRef(Ce()),ht=n.useRef(Ce()),bt=$t(ut),S=!!a.length,y=s&&!u,Pe=S&&P<a.length-1,xe=S&&P!==0,Tt={renderIcon:b=>e.createElement(qt,{size:16,...b}),iconDescription:T,ref:de},h=`${_.prefix}--apikey-modal`,Rt=n.useRef(void 0),Y=ft||Rt,{firstElement:Se,keyDownListener:vt}=Wt(Y,le),Ee=jt(x);n.useEffect(()=>{de.current&&x&&y&&de.current.focus()},[x,y]),n.useEffect(()=>{x&&Mt(Se,Y,le)},[Se,Y,x,le]),n.useEffect(()=>{Ee&&!x&&G&&setTimeout(()=>{G.current.focus()},0)},[G,x,Ee]);const kt=()=>{var b;return u?!0:S&&"valid"in((a==null?void 0:a[P])||[])?!((b=a[P])!=null&&b.valid):!!(!S&&oe&&!Q)},wt=()=>Pe?dt:y?m:p?j:H,Pt=()=>xe&&!y?pt:c;n.useEffect(()=>{var b;X(p&&K?F:y?z:S?(b=a[P])==null?void 0:b.title:C)},[y,p,K,F,S,z,C,P,a]);const xt=b=>{ke(b.target.value)},Ae=()=>{ke(""),ce(0),ae==null||ae()},Ie=async b=>{if(b.preventDefault(),Pe)ce(P+1);else if(y)if(Te)Te(s);else try{await navigator.clipboard.writeText(s)}catch(Et){console.error(Et),gt(!0)}else p?re==null||re(Q):ie==null||ie(Q)},St=()=>{xe&&!y?ce(P-1):Ae()};return bt(e.createElement(At,{enableExperimentalFocusWrapWithoutSentinels:!0},e.createElement(Lt,{...yt,open:x,...Dt(he),ref:Y,onKeyDown:vt,className:It(l,h),onClose:Ae,size:"sm","aria-label":be,preventCloseOnClickOutside:!0},e.createElement(Ht,{className:`${h}__header`,title:Re,label:be}),e.createElement(Gt,{className:`${h}__body-container`},S&&!y?(qe=a[P])==null?void 0:qe.content:e.createElement(e.Fragment,null,r&&e.createElement("p",{className:`${h}__body`},r),!p&&s&&U&&e.createElement(Bt,{value:s,labelText:o,id:we.current,showPasswordLabel:mt,hidePasswordLabel:se,tooltipPosition:"left"}),!p&&s&&!U&&e.createElement(Z,{value:s,labelText:o,id:we.current}),(p||!y&&oe)&&e.createElement(tt,{onSubmit:Ie,"aria-label":Re??void 0},e.createElement(Z,{helperText:it,placeholder:ct,labelText:lt,onChange:xt,value:Q,id:ht.current,disabled:u,required:oe,"data-modal-primary-focus":!0})),u&&e.createElement(ye,{description:rt,className:`${h}__loader`}),(ve||V)&&e.createElement("div",{className:`${h}__messaging`},e.createElement("div",{className:`${h}__error-icon`},e.createElement(Vt,{size:16})),e.createElement("p",{className:`${h}__messaging-text`},ve?f:L)),y&&e.createElement("div",{className:`${h}__messaging`},e.createElement(Jt,{size:16}),ne?e.createElement(te,{apiKey:s,body:g,fileName:d,linkText:v,fileType:R,downloadLinkLabel:q}):e.createElement("div",{className:`${h}__messaging-text`},J)))),e.createElement(Ot,{className:`${h}__footer`},e.createElement(A,{type:"button",kind:"secondary",onClick:St},Pt()),e.createElement(A,{...y&&Tt,type:"submit",kind:"primary",onClick:Ie,disabled:kt()},wt())))))});const Be=s=>ge(s,({customSteps:o})=>o&&o.length>1),me=s=>ge(s,({editing:o})=>o),O=s=>ge(s,({hasDownloadLink:o})=>o);w=_.checkComponentEnabled(w,he);w.propTypes={apiKey:t.string,apiKeyLabel:t.string,apiKeyName:t.string,body:t.string,className:t.string,closeButtonText:t.string,copyButtonText:t.string,copyErrorText:t.string,copyIconDescription:t.string,customSteps:t.arrayOf(t.shape({valid:t.bool,content:t.node,title:t.string})),downloadBodyText:O(t.string),downloadFileName:O(t.string),downloadFileType:O(t.oneOf(["txt","json"])),downloadLinkLabel:O(t.string),downloadLinkText:O(t.string),editButtonText:me(t.string),editSuccess:me(t.bool),editSuccessTitle:me(t.string),editing:t.bool,error:t.bool,errorText:t.string,generateButtonText:t.string,generateSuccessBody:t.node,generateSuccessTitle:t.string,generateTitle:t.string,hasAPIKeyVisibilityToggle:t.bool,hasDownloadLink:t.bool,hideAPIKeyLabel:t.string,launcherButtonRef:t.any,loading:t.bool,loadingText:t.string,modalLabel:t.string,nameHelperText:t.string,nameLabel:t.string,namePlaceholder:t.string,nameRequired:t.bool,nextStepButtonText:Be(t.string),onClose:t.func,onCopy:t.func,onRequestEdit:t.func,onRequestGenerate:t.func,open:t.bool.isRequired,portalTarget:t.node,previousStepButtonText:Be(t.string),selectorPrimaryFocus:t.string,showAPIKeyLabel:t.string};w.displayName=he;w.__docgenInfo={description:"",methods:[],displayName:"APIKeyModal",props:{apiKey:{required:!1,tsType:{name:"string"},description:"the api key that's displayed to the user when a request to create is fulfilled.",type:{name:"string"}},apiKeyLabel:{required:!1,tsType:{name:"string"},description:"label for the text input that holds the api key.",type:{name:"string"}},apiKeyName:{required:!1,tsType:{name:"string"},description:"the name of the api key. should only be supplied in edit mode.",defaultValue:{value:"''",computed:!1},type:{name:"string"}},body:{required:!1,tsType:{name:"string"},description:"body content for the modal",type:{name:"string"}},className:{required:!1,tsType:{name:"string"},description:"optional class name",type:{name:"string"}},closeButtonText:{required:!1,tsType:{name:"string"},description:"text for the close button",type:{name:"string"}},copyButtonText:{required:!1,tsType:{name:"string"},description:"text for the copy button",type:{name:"string"}},copyErrorText:{required:!1,tsType:{name:"string"},description:"Error message for when the copy function fails",type:{name:"string"}},copyIconDescription:{required:!1,tsType:{name:"string"},description:"text description for the copy button icon",type:{name:"string"}},customSteps:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  valid?: boolean;
  content?: ReactNode;
  title?: string;
}`,signature:{properties:[{key:"valid",value:{name:"boolean",required:!1}},{key:"content",value:{name:"ReactNode",required:!1}},{key:"title",value:{name:"string",required:!1}}]}}],raw:`Array<{
  valid?: boolean;
  content?: ReactNode;
  title?: string;
}>`},description:"if you need more options for key creation beyond just the name use custom steps to obtain whatever data is required.",defaultValue:{value:"[]",computed:!1},type:{name:"arrayOf",value:{name:"shape",value:{valid:{name:"bool",description:"designates if the step has passed whatever validation rules are in place.",required:!1},content:{name:"node",description:"designates content is the JSX that holds whatever inputs you need",required:!1},title:{name:"string",description:"designates the title that's displayed at the top of the modal for each step",required:!1}}}}},editing:{required:!1,tsType:{name:"boolean"},description:"designates if the modal is in the edit mode",type:{name:"bool"}},error:{required:!1,tsType:{name:"boolean"},description:"designates if an error has occurred in a request",type:{name:"bool"}},errorText:{required:!1,tsType:{name:"string"},description:"text to display if an error has occurred",type:{name:"string"}},generateButtonText:{required:!1,tsType:{name:"string"},description:`default primary button text for modal in assumed default mode create or generate.
in create mode this is the button text prior to supplying an api key, which then
uses copyButtonText`,type:{name:"string"}},generateSuccessBody:{required:!1,tsType:{name:"ReactNode"},description:"content to display if generate request was successful",type:{name:"node"}},generateSuccessTitle:{required:!1,tsType:{name:"string"},description:"title for a successful key generation",type:{name:"string"}},generateTitle:{required:!1,tsType:{name:"string"},description:"default title for the modal in generate key mode",type:{name:"string"}},hasAPIKeyVisibilityToggle:{required:!1,tsType:{name:"boolean"},description:"designates if the api input has the visibility toggle enabled",type:{name:"bool"}},hasDownloadLink:{required:!1,tsType:{name:"boolean"},description:"designates if user is able to download the api key",type:{name:"bool"}},hideAPIKeyLabel:{required:!1,tsType:{name:"string"},description:"label text that's displayed when hovering over visibility toggler to hide key",type:{name:"string"}},launcherButtonRef:{required:!1,tsType:{name:"RefObject",elements:[{name:"any"}],raw:"RefObject<any>"},description:"Provide a ref to return focus to once the tearsheet is closed.",type:{name:"any"}},loading:{required:!1,tsType:{name:"boolean"},description:"designates if the modal is in a loading state via a request or some other in progress operation",type:{name:"bool"}},loadingText:{required:!1,tsType:{name:"string"},description:"text that displays while modal is in the loading state",type:{name:"string"}},modalLabel:{required:!1,tsType:{name:"string"},description:"general label text for modal",type:{name:"string"}},nameHelperText:{required:!1,tsType:{name:"string"},description:"helper text for name input",type:{name:"string"}},nameLabel:{required:!1,tsType:{name:"string"},description:"label for api key name input",type:{name:"string"}},namePlaceholder:{required:!1,tsType:{name:"string"},description:"placeholder text for api key name input",type:{name:"string"}},nameRequired:{required:!1,tsType:{name:"boolean"},description:"designates if a name is required or not for key generation. NOTE- if using custom steps set this to false since you will be using your own validation",type:{name:"bool"}},open:{required:!0,tsType:{name:"boolean"},description:"designates if modal is open or closed",type:{name:"bool"}},portalTarget:{required:!1,tsType:{name:"ReactNode"},description:"The DOM node the tearsheet should be rendered within. Defaults to document.body.",type:{name:"node"}},selectorPrimaryFocus:{required:!1,tsType:{name:"string"},description:`Specify a CSS selector that matches the DOM element that should be
focused when the Modal opens.`,type:{name:"string"}},showAPIKeyLabel:{required:!1,tsType:{name:"string"},description:"label text that's displayed when hovering over visibility toggler to show key",type:{name:"string"}},previousStepButtonText:{required:!1,tsType:{name:"string"},description:"text that displays in the secondary button when using custom steps to indicate to the user that there is a previous step",type:{name:"custom",raw:"customStepsRequiredProps(PropTypes.string)"}},nextStepButtonText:{required:!1,tsType:{name:"string"},description:"text that displays in the primary button when using custom steps to indicate to the user that there is a next step",type:{name:"custom",raw:"customStepsRequiredProps(PropTypes.string)"}},editButtonText:{required:!1,tsType:{name:"string"},description:"text for the edit button",type:{name:"custom",raw:"editRequiredProps(PropTypes.string)"}},editSuccess:{required:!1,tsType:{name:"boolean"},description:"designates if the edit request was successful",type:{name:"custom",raw:"editRequiredProps(PropTypes.bool)"}},editSuccessTitle:{required:!1,tsType:{name:"string"},description:"title for a successful edit",type:{name:"custom",raw:"editRequiredProps(PropTypes.string)"}},downloadBodyText:{required:!1,tsType:{name:"string"},description:"the content that appears that indicates the key is downloadable",type:{name:"custom",raw:"downloadRequiredProps(PropTypes.string)"}},downloadFileName:{required:!1,tsType:{name:"string"},description:"designates the name of downloadable json file with the key. if not specified will default to 'apikey'",type:{name:"custom",raw:"downloadRequiredProps(PropTypes.string)"}},downloadFileType:{required:!1,tsType:{name:"union",raw:"'txt' | 'json'",elements:[{name:"literal",value:"'txt'"},{name:"literal",value:"'json'"}]},description:"designates the file type for the downloadable key",type:{name:"custom",raw:"downloadRequiredProps(PropTypes.oneOf(['txt', 'json']))"}},downloadLinkText:{required:!1,tsType:{name:"string"},description:"anchor text for the download link",type:{name:"custom",raw:"downloadRequiredProps(PropTypes.string)"}},downloadLinkLabel:{required:!1,tsType:{name:"string"},description:"Aria-label for the download link",defaultValue:{value:"downloadLinkText",computed:!1},type:{name:"custom",raw:"downloadRequiredProps(PropTypes.string)"}},onClose:{description:"handler for on modal close",type:{name:"func"},required:!1},onCopy:{description:`Optional callback if you want to use your own copy function instead of the build in one
onCopy(apiKey)`,type:{name:"func"},required:!1},onRequestEdit:{description:"handler for api key edit",type:{name:"func"},required:!1},onRequestGenerate:{description:"handler for api key generation",type:{name:"func"},required:!1}}};const Ut=".c4p--apikey-modal .cds--radio-button-wrapper{margin-bottom:.25rem}.c4p--apikey-modal__permissions.cds--fieldset{margin-top:1rem;margin-bottom:0}.c4p--apikey-modal__resource-toggle.cds--fieldset{margin-top:0;margin-bottom:1rem}.c4p--apikey-modal__resource-name.cds--fieldset{margin-top:0;margin-bottom:0}.c4p--apikey-modal__button-loading.cds--btn--primary{background:var(--cds-link-secondary, #0043ce)}",nt=()=>{const{csfFile:s}=Kt("meta",["meta"]);return e.createElement(_t,{altGuidelinesHref:[Ft(s),{href:"https://www.carbondesignsystem.com/components/modal/usage",label:"Carbon Modal usage guidelines"},{href:"https://react.carbondesignsystem.com/?path=/docs/modal--default",label:"Carbon Modal documentation"}],blocks:[{story:B,description:"API key creation / generation is assumed to be the default mode for this modal.\nTo enable key editing you have to set the `edit` prop to true and supply any\nother edit related props with the relevant input."},{description:"By default generate and edit only supply a name input for your key. If you need additional input you should use custom steps",story:E}]})};nt.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const Yn={title:"IBM Products/Components/Generating an API key/APIKeyModal",component:w,tags:["autodocs"],parameters:{styles:Ut,docs:{page:nt}},argTypes:{generateSuccessBody:{control:{type:"select",labels:{0:"short body",1:"long body"}},options:[0,1],mapping:{0:e.createElement("p",null,"API key successfully created."),1:e.createElement("p",null,"This is your unique API key and is non-recoverable. If you lose this API key, you will have to reset it.")}},portalTarget:{control:!1}}},I={apiKey:"123-456-789",apiKeyLabel:"API key",showAPIKeyLabel:"Show key",hideAPIKeyLabel:"Hide key",copyButtonText:"Copy",copyIconDescription:"Copy",hasAPIKeyVisibilityToggle:!0,downloadBodyText:"This is your unique API key and is non-recoverable. If you lose this API key, you will have to reset it.",downloadLinkText:"Download as JSON",downloadLinkLabel:"Download API Key in Java Script File format",hasDownloadLink:!0,downloadFileName:"apikey",downloadFileType:"json",open:!0,closeButtonText:"Close",generateSuccessTitle:"API key successfully created",editSuccessTitle:"API key successfully saved",loadingText:"Generating...",modalLabel:"An example of Generate API key"},k=`${_.prefix}--apikey-modal`,Xt=s=>{const[o,i]=n.useState(!1),[r,l]=n.useState(!1),c=n.useRef(void 0),m=async()=>{l(!0),await ee(1e3),i(!0),l(!1)};return e.createElement(e.Fragment,null,e.createElement("style",null,`.${k} { opacity: 0; }`,";"),e.createElement(w,{...s,onClose:()=>i(!1),open:o,launcherButtonRef:c}),r?e.createElement(A,{renderIcon:ye,className:`${k}__button-loading`},"Generating..."):e.createElement(A,{onClick:m,ref:c},"Generate"))},st=s=>{const{error:o}=s,[i,r]=n.useState(!1),[l,c]=n.useState(""),[m,f]=n.useState(!1),[T,a]=n.useState(!1),g=n.useRef(void 0),d=async v=>{fe(`submitted ${v}`)(),a(!1),f(!0),await ee(1e3),o?a(!0):c("111-111-111-111"),f(!1)},R=()=>{r(!1),c("")};return e.createElement(e.Fragment,null,e.createElement("style",null,`.${k} { opacity: 0; }`,";"),e.createElement(w,{...s,apiKey:l,loading:m,onClose:R,onRequestGenerate:d,open:i,error:T,launcherButtonRef:g}),e.createElement(A,{onClick:()=>r(!i),ref:g},"Generate API key"))},ot=s=>{const{editing:o}=s,{savedName:i,savedPermissions:r,savedAllResources:l,savedResource:c,...m}=s,[f,T]=n.useState(!1),[a,g]=n.useState(""),[d,R]=n.useState(!1),v=n.useRef(void 0),[q,j]=n.useState(i),[K,F]=n.useState(r),[p,V]=n.useState(l),[L,H]=n.useState(c),[J,z]=n.useState(!1),C=async()=>{fe("submitted")(),R(!0),await ee(1e3),o?z(!0):g("111-111-111-111"),R(!1)},U=()=>{T(!1),o||(g(""),j(""),F(""),V(!1),H(""))},ne=u=>{u.preventDefault(),C()},se=()=>{p&&L&&H(""),V(u=>!u)},G=[{valid:!!(q&&K),title:o?"Edit API key":"Generate API key",content:e.createElement(e.Fragment,null,e.createElement("p",{className:`${k}__body`},"(Optional description text) To connect securely to [product name], your application or tool needs an API key with permission to access resources such as [product resource name]."),e.createElement(Z,{value:q,onChange:u=>j(u.target.value),labelText:"Name your application",placeholder:"Application name",id:"name-input","data-modal-primary-focus":!0}),e.createElement(ue,{legendText:"What do you want your application to be able to do",className:`${k}__permissions`},e.createElement(Ct,{onChange:u=>F(u),valueSelected:K,name:"permission",orientation:"vertical"},e.createElement(pe,{value:"Read and write",labelText:"Read and write"}),e.createElement(pe,{value:"Read only",labelText:"Read only"}),e.createElement(pe,{value:"Write only",labelText:"Write only"}))))},{valid:p||!p&&!!L,title:"Choose which resources the API will have access to",content:e.createElement(e.Fragment,null,e.createElement(tt,{onSubmit:ne},e.createElement(ue,{legendText:"What do you want your application to be able to do",className:`${k}__resource-toggle`},e.createElement(Nt,{onClick:se,labelText:"All resources",toggled:p,disabled:d,id:"toggle1",autoFocus:!0})),e.createElement(ue,{legendText:"What do you want your application to be able to do",className:`${k}__resource-name`},e.createElement(Z,{value:L,onChange:u=>H(u.target.value),labelText:"Which resource?",placeholder:"Resources name",disabled:d||p,id:"resource-input"}))),d&&e.createElement(ye,{description:d?"Saving...":"Generating..."}),J&&e.createElement("div",{className:`${k}__messaging`},"Edited successfully"))}];return e.createElement(e.Fragment,null,e.createElement("style",null,`.${k} { opacity: 0; }`,";"),e.createElement(w,{...m,apiKey:a,loading:d,onClose:U,onRequestEdit:C,onRequestGenerate:C,open:f,customSteps:G,nameRequired:!1,editSuccess:J,launcherButtonRef:v}),e.createElement(A,{onClick:()=>T(!f),ref:v},o?"Edit API key":"Generate API key"))},at=s=>{const{error:o,apiKeyName:i}=s,[r,l]=n.useState(!1),[c,m]=n.useState(!1),[f,T]=n.useState(!1),[a,g]=n.useState(!1),d=n.useRef(void 0),R=async()=>{fe(`submitted ${i}`)(),T(!1),m(!0),await ee(1e3),o?T(!0):g(!0),m(!1)},v=()=>{l(!1)},q=()=>{l(!0)};return e.createElement(e.Fragment,null,e.createElement("style",null,`.${k} { opacity: 0; }`,";"),e.createElement(w,{...s,loading:c,onClose:v,onRequestEdit:R,open:r,error:f,editSuccess:a,launcherButtonRef:d}),e.createElement(A,{onClick:q,ref:d},"Edit API key"))},$=st.bind({});$.args={...I,generateButtonText:"Generate API key",generateTitle:"Generate an API key",generateSuccessBody:1,body:"(Optional description text) To connect securely to [product name], your application or tool needs an API key with permission to access resources such as [product resource name].",nameHelperText:"Providing the application name will help you identify your API key later.",nameLabel:"Name your application",namePlaceholder:"Application name",nameRequired:!0};const D=st.bind({});D.args={...I,hasAPIKeyVisibilityToggle:!0,generateButtonText:"Generate API key",generateTitle:"Generate an API key",body:"(Optional description text) To connect securely to [product name], your application or tool needs an API key with permission to access resources such as [product resource name].",nameHelperText:"Providing the application name will help you identify your API key later.",nameLabel:"Name your application",namePlaceholder:"Application name",nameRequired:!0,error:!0,errorText:"Failed to create API key"};const W=Xt.bind({});W.args={...I,apiKeyLabel:"Unique API Key"};const N=ot.bind({});N.args={...I,generateButtonText:"Generate",nextStepButtonText:"Next",previousStepButtonText:"Previous",downloadFileName:"apikey",savedName:"",savedAllResources:!1,savedResource:"",savedPermissions:""};N.parameters={docs:{source:{code:"Sorry, this feature is not currently available for this story"}}};const B=at.bind({});B.args={...I,editButtonText:"Save API key",generateTitle:"Save an API key",body:"(Optional description text) To connect securely to [product name], your application or tool needs an API key with permission to access resources such as [product resource name].",nameHelperText:"Providing the application name will help you identify your API key later.",nameLabel:"Name your application",namePlaceholder:"Application name",nameRequired:!0,editing:!0,apiKey:"",loadingText:"Saving...",apiKeyName:"test_key_1"};const M=at.bind({});M.args={...I,editButtonText:"Save API key",generateTitle:"Save an API key",body:"(Optional description text) To connect securely to [product name], your application or tool needs an API key with permission to access resources such as [product resource name].",nameHelperText:"Providing the application name will help you identify your API key later.",nameLabel:"Name your application",namePlaceholder:"Application name",nameRequired:!0,editing:!0,apiKey:"",loadingText:"Saving...",generateSuccessBody:"API Key saved.",apiKeyName:"test_key_1",error:!0,errorText:"Failed to edit API key"};const E=ot.bind({});E.args={...I,generateButtonText:"Generate",nextStepButtonText:"Next",previousStepButtonText:"Previous",downloadFileName:"apikey",savedName:"test_key_1",savedAllResources:!1,savedResource:"resource_1",savedPermissions:"Read only",editing:!0,editButtonText:"Save API key"};E.parameters={docs:{source:{code:"Sorry, this feature is not currently available for this story"}}};var _e,Ke,Fe;$.parameters={...$.parameters,docs:{...(_e=$.parameters)==null?void 0:_e.docs,source:{originalSource:`args => {
  const {
    error
  } = args;
  const [open, setOpen] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const buttonRef = useRef(undefined);

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
      <APIKeyModal {...args} apiKey={apiKey} loading={loading} onClose={onCloseHandler} onRequestGenerate={submitHandler} open={open} error={fetchError} launcherButtonRef={buttonRef} />
      <Button onClick={() => setOpen(!open)} ref={buttonRef}>
        Generate API key
      </Button>
    </>;
}`,...(Fe=(Ke=$.parameters)==null?void 0:Ke.docs)==null?void 0:Fe.source}}};var Le,He,Ge;D.parameters={...D.parameters,docs:{...(Le=D.parameters)==null?void 0:Le.docs,source:{originalSource:`args => {
  const {
    error
  } = args;
  const [open, setOpen] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const buttonRef = useRef(undefined);

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
      <APIKeyModal {...args} apiKey={apiKey} loading={loading} onClose={onCloseHandler} onRequestGenerate={submitHandler} open={open} error={fetchError} launcherButtonRef={buttonRef} />
      <Button onClick={() => setOpen(!open)} ref={buttonRef}>
        Generate API key
      </Button>
    </>;
}`,...(Ge=(He=D.parameters)==null?void 0:He.docs)==null?void 0:Ge.source}}};var Oe,$e,De;W.parameters={...W.parameters,docs:{...(Oe=W.parameters)==null?void 0:Oe.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const buttonRef = useRef(undefined);
  const generateKey = async () => {
    setLoading(true);
    await wait(1000);
    setOpen(true);
    setLoading(false);
  };
  return <>
      <style>{\`.\${blockClass} { opacity: 0; }\`};</style>
      <APIKeyModal {...args} onClose={() => setOpen(false)} open={open} launcherButtonRef={buttonRef} />
      {loading ? <Button renderIcon={InlineLoading} className={\`\${blockClass}__button-loading\`}>
          Generating...
        </Button> : <Button onClick={generateKey} ref={buttonRef}>
          Generate
        </Button>}
    </>;
}`,...(De=($e=W.parameters)==null?void 0:$e.docs)==null?void 0:De.source}}};var We,Me,je;N.parameters={...N.parameters,docs:{...(We=N.parameters)==null?void 0:We.docs,source:{originalSource:`args => {
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
  const buttonRef = useRef(undefined);

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
      <APIKeyModal {...finalArgs} apiKey={apiKey} loading={loading} onClose={onCloseHandler} onRequestEdit={submitHandler} onRequestGenerate={submitHandler} open={open} customSteps={steps} nameRequired={false} editSuccess={editSuccess} launcherButtonRef={buttonRef} />
      <Button onClick={() => setOpen(!open)} ref={buttonRef}>
        {editing ? 'Edit API key' : 'Generate API key'}
      </Button>
    </>;
}`,...(je=(Me=N.parameters)==null?void 0:Me.docs)==null?void 0:je.source}}};var Ve,Je,ze;B.parameters={...B.parameters,docs:{...(Ve=B.parameters)==null?void 0:Ve.docs,source:{originalSource:`args => {
  const {
    error,
    apiKeyName
  } = args;
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const [fetchSuccess, setFetchSuccess] = useState(false);
  const buttonRef = useRef(undefined);
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
      <APIKeyModal {...args} loading={loading} onClose={onCloseHandler} onRequestEdit={submitHandler} open={open} error={fetchError} editSuccess={fetchSuccess} launcherButtonRef={buttonRef} />
      <Button onClick={onOpenHandler} ref={buttonRef}>
        Edit API key
      </Button>
    </>;
}`,...(ze=(Je=B.parameters)==null?void 0:Je.docs)==null?void 0:ze.source}}};var Ue,Xe,Qe;M.parameters={...M.parameters,docs:{...(Ue=M.parameters)==null?void 0:Ue.docs,source:{originalSource:`args => {
  const {
    error,
    apiKeyName
  } = args;
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const [fetchSuccess, setFetchSuccess] = useState(false);
  const buttonRef = useRef(undefined);
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
      <APIKeyModal {...args} loading={loading} onClose={onCloseHandler} onRequestEdit={submitHandler} open={open} error={fetchError} editSuccess={fetchSuccess} launcherButtonRef={buttonRef} />
      <Button onClick={onOpenHandler} ref={buttonRef}>
        Edit API key
      </Button>
    </>;
}`,...(Qe=(Xe=M.parameters)==null?void 0:Xe.docs)==null?void 0:Qe.source}}};var Ye,Ze,et;E.parameters={...E.parameters,docs:{...(Ye=E.parameters)==null?void 0:Ye.docs,source:{originalSource:`args => {
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
  const buttonRef = useRef(undefined);

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
      <APIKeyModal {...finalArgs} apiKey={apiKey} loading={loading} onClose={onCloseHandler} onRequestEdit={submitHandler} onRequestGenerate={submitHandler} open={open} customSteps={steps} nameRequired={false} editSuccess={editSuccess} launcherButtonRef={buttonRef} />
      <Button onClick={() => setOpen(!open)} ref={buttonRef}>
        {editing ? 'Edit API key' : 'Generate API key'}
      </Button>
    </>;
}`,...(et=(Ze=E.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};const Zn=["Generate","GenerateWithError","InstantGenerate","CustomGenerate","Edit","EditWithError","CustomEdit"];export{E as CustomEdit,N as CustomGenerate,B as Edit,M as EditWithError,$ as Generate,D as GenerateWithError,W as InstantGenerate,Zn as __namedExportsOrder,Yn as default};
