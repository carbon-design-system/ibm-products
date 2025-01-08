import{r as s,e}from"./index-CPiZ6Cnx.js";import{P as t,F as Bt,c as Kt}from"./index-CXyjPnaX.js";import{p as H,B as q,j as Ft}from"./settings-iwZeeh4T.js";import{F as rt}from"./Form--JAB0_ak.js";import{F as ye}from"./FormGroup-9BStNhuZ.js";import{I as he}from"./InlineLoading-DZri6jHG.js";import{R as fe}from"./RadioButton-DFKglrJp.js";import{R as Lt}from"./RadioButtonGroup-CxQn_S4P.js";import{T as Ht}from"./Toggle-DklbMXot.js";import{P as Gt,T as te}from"./TextInput-D6QswYlg.js";import{a as be}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{w as se}from"./wait-CTNFjQS8.js";import{S as Ot}from"./StoryDocsPage-sPxu-ImI.js";import{ae as $t}from"./index-t1iuulR4.js";import{b as Mt}from"./story-helper-U7E6Psyp.js";import{C as Dt,M as Wt,a as jt,b as Vt}from"./ComposedModal-BZzRRIGC.js";import{u as zt}from"./usePortalTarget-2TvXB9Ir.js";import{g as Jt}from"./devtools-CjVY-wQW.js";import{i as Te}from"./props-helper-Dlg0HCIz.js";import{u as Fe}from"./uuidv4-BQrI85uz.js";import{u as Ut,c as Xt}from"./useFocus-jmjiioUJ.js";import{u as Qt}from"./usePreviousValue-CSEZflXC.js";import{E as Yt}from"./bucket-6-BQYdmIZX.js";import{d as Zt}from"./bucket-9-BSWQ2dSd.js";import{a as es}from"./bucket-2-L5Cs0C3i.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BSHYryQu.js";import"./index-Bsyy8W_U.js";import"./events-OVwOsPzJ.js";import"./index-DJK44odq.js";import"./mergeRefs-CTUecegF.js";import"./Text-vNWzJqus.js";import"./bucket-18-By6NmkK1.js";import"./useControllableState-uQXf5Mu5.js";import"./useNormalizedInputProps-Dv8FHz9Q.js";import"./FormContext-CgeSXHS1.js";import"./useAnnouncer-Dwt0jqXi.js";import"./v4-CQkTLCs1.js";import"./iframe-rw3uFrCz.js";import"../sb-preview/runtime.js";import"./jsx-runtime-Dc-z7RWI.js";import"./index-Df9so8jS.js";import"./index-DMCuvgYY.js";import"./index-DrFu-skq.js";import"./tslib.es6-rrx6G-_s.js";import"./index-Dcfl0vi2.js";import"./LayerContext-BGhaVt7n.js";import"./ButtonSet-DCPCKVSR.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-i_P_nIQh.js";import"./feature-flags-B_abUzZ5.js";import"./index-BLF2Ep9P.js";const ts="APIKeyDownloader",ne=({apiKey:n,body:a,fileName:i,fileType:r,linkText:l,downloadLinkLabel:c})=>{const[m,y]=s.useState({});return s.useEffect(()=>{(async()=>{const o=r==="txt"?n:JSON.stringify({apiKey:n}),f=new Blob([o],{type:r==="txt"?"text/plain":"application/json"}),d=await URL.createObjectURL(f),T=`${i||"apikey"}.${r}`;y({href:d,download:T})})()},[n,i,r]),e.createElement("div",{className:`${H.prefix}--apikey-modal__download-container`},e.createElement("p",{className:`${H.prefix}--apikey-modal__messaging-text`},a," ",e.createElement("a",{...m,className:`${H.prefix}--apikey-modal__download-link`,"aria-label":c??l,role:"button"},c??l)))};ne.displayName=ts;ne.propTypes={apiKey:t.string.isRequired,body:t.string,downloadLinkLabel:t.string,fileName:t.string.isRequired,fileType:t.oneOf(["txt","json"]).isRequired,linkText:t.string.isRequired};ne.__docgenInfo={description:"",methods:[],displayName:"APIKeyDownloader",props:{apiKey:{description:"the api key that's displayed to the user when a request to create is fulfilled.",type:{name:"string"},required:!0},body:{description:"body content for the downloader",type:{name:"string"},required:!1},downloadLinkLabel:{description:"aria-label for the download link",type:{name:"string"},required:!1},fileName:{description:"designates the name of downloadable json file with the key. if not specified will default to 'apikey'",type:{name:"string"},required:!0},fileType:{description:"designates the file type for the downloadable key",type:{name:"enum",value:[{value:"'txt'",computed:!1},{value:"'json'",computed:!1}]},required:!0},linkText:{description:"anchor text for the download link",type:{name:"string"},required:!0}}};const ve="APIKeyModal",Le={apiKeyName:"",customSteps:[]};let x=s.forwardRef(({apiKey:n,apiKeyLabel:a,apiKeyName:i=Le.apiKeyName,body:r,className:l,closeButtonText:c,copyButtonText:m,copyErrorText:y,copyIconDescription:b,customSteps:o=Le.customSteps,downloadBodyText:f,downloadFileName:d,downloadFileType:T,downloadLinkText:v,downloadLinkLabel:C=v,editButtonText:z,editSuccess:_,editSuccessTitle:G,editSuccessMessage:w,editing:k,error:O,errorText:$,generateButtonText:J,generateSuccessBody:ae,generateSuccessTitle:B,generateSuccessMessage:U,generateTitle:K,hasAPIKeyVisibilityToggle:X,hasDownloadLink:oe,hideAPIKeyLabel:g,launcherButtonRef:re,loading:M,loadingText:ut,modalLabel:ke,nameHelperText:pt,nameLabel:mt,namePlaceholder:yt,nameRequired:ie,nextStepButtonText:ft,onClose:le,onCopy:Re,onRequestEdit:ce,onRequestGenerate:de,open:S,portalTarget:gt,previousStepButtonText:ht,selectorPrimaryFocus:ue,showAPIKeyLabel:bt,helperText:Tt,...vt},kt)=>{var Ke;const[xe,Q]=s.useState(null),[Pe,we]=s.useState(null),[Se,Rt]=s.useState(!1),[Y,Ee]=s.useState(i),[P,pe]=s.useState(0),me=s.useRef(void 0),Ae=s.useRef(Fe()),xt=s.useRef(Fe()),Pt=zt(gt),E=!!o.length,p=n&&!M,Ie=E&&P<o.length-1,qe=E&&P!==0,wt={renderIcon:h=>e.createElement(Ft,{size:16,...h}),iconDescription:b,ref:me},u=`${H.prefix}--apikey-modal`,St=s.useRef(void 0),A=s.useRef(null),Z=kt||St,{firstElement:Ne,keyDownListener:Et}=Ut(Z,ue),Ce=Qt(S);s.useEffect(()=>{me.current&&S&&p&&me.current.focus(),A!=null&&A.current&&(A==null||A.current.setAttribute("readOnly","true"))},[S,p]),s.useEffect(()=>{S&&Xt(Ne,Z,ue)},[Ne,Z,S,ue]),s.useEffect(()=>{Ce&&!S&&re&&setTimeout(()=>{re.current.focus()},0)},[re,S,Ce]);const At=()=>{var h;return M?!0:E&&"valid"in((o==null?void 0:o[P])||[])?!((h=o[P])!=null&&h.valid):!!(!E&&ie&&!Y)},It=()=>Ie?ft:p?m:k?z:J,qt=()=>qe&&!p?ht:c;s.useEffect(()=>{var h;k&&_?(Q(K),we(w??G)):p?(Q(K),we(U??B)):Q(E?(h=o[P])==null?void 0:h.title:K)},[p,M,k,_,G,w,E,B,U,K,P,o]);const Nt=h=>{Ee(h.target.value)},_e=()=>{Ee(""),pe(0),le==null||le()},Be=async h=>{if(h.preventDefault(),Ie)pe(P+1);else if(p)if(Re)Re(n);else try{await navigator.clipboard.writeText(n)}catch(_t){console.error(_t),Rt(!0)}else k?ce==null||ce(Y):de==null||de(Y)},Ct=()=>{qe&&!p?pe(P-1):_e()};return Pt(e.createElement(Bt,{enableExperimentalFocusWrapWithoutSentinels:!0},e.createElement(Dt,{...vt,open:S,...Jt(ve),ref:Z,onKeyDown:Et,className:Kt(l,u),onClose:_e,size:"sm","aria-label":ke,preventCloseOnClickOutside:!0},e.createElement(Wt,{className:`${u}__header`,title:xe,label:ke}),e.createElement(jt,{className:`${u}__body-container`},E&&!p?(Ke=o[P])==null?void 0:Ke.content:e.createElement(e.Fragment,null,r&&e.createElement("p",{className:`${u}__body`},r),!k&&n&&X&&e.createElement(Gt,{value:n,labelText:a,id:Ae.current,showPasswordLabel:bt,hidePasswordLabel:g,tooltipPosition:"left",helperText:Tt,ref:A}),!k&&n&&!X&&e.createElement(te,{value:n,labelText:a,id:Ae.current}),(k||!p&&ie)&&e.createElement(rt,{onSubmit:Be,"aria-label":xe??void 0},e.createElement(te,{helperText:pt,placeholder:yt,labelText:mt,onChange:Nt,value:Y,id:xt.current,disabled:M,required:ie,"data-modal-primary-focus":!0})),M&&e.createElement(he,{description:ut,className:`${u}__loader`}),(Se||O)&&e.createElement("div",{className:`${u}__messaging`},e.createElement("div",{className:`${u}__error-icon`},e.createElement(Yt,{size:16})),e.createElement("p",{className:`${u}__messaging-text`,role:"alert","aria-live":"assertive"},Se?y:$)),p&&e.createElement("div",{className:`${u}__messaging`},e.createElement(Zt,{size:16}),oe?e.createElement(ne,{apiKey:n,body:f,fileName:d,linkText:v,fileType:T,downloadLinkLabel:C}):e.createElement("div",{className:`${u}__messaging-text`,role:"alert","aria-live":"assertive"},ae)),(_||p&&Pe)&&e.createElement("div",{className:`${u}__messaging`},e.createElement(es,{size:16,className:`${u}__checkmark-icon`}),e.createElement("p",{className:`${u}__messaging-text`,role:"alert","aria-live":"assertive"},Pe)))),e.createElement(Vt,{className:`${u}__footer`},e.createElement(q,{type:"button",kind:"secondary",onClick:Ct},qt()),e.createElement(q,{...p&&wt,type:"submit",kind:"primary",onClick:Be,disabled:At()},It())))))});const He=n=>Te(n,({customSteps:a})=>a&&a.length>1),ge=n=>Te(n,({editing:a})=>a),ee=n=>Te(n,({hasDownloadLink:a})=>a);x=H.checkComponentEnabled(x,ve);const ss={editSuccessTitle:t.string,generateSuccessTitle:t.string};x.propTypes={apiKey:t.string,apiKeyLabel:t.string,apiKeyName:t.string,body:t.string,className:t.string,closeButtonText:t.string,copyButtonText:t.string,copyErrorText:t.string,copyIconDescription:t.string,customSteps:t.arrayOf(t.shape({valid:t.bool,content:t.node,title:t.string})),downloadBodyText:t.string,downloadFileName:ee(t.string),downloadFileType:ee(t.oneOf(["txt","json"])),downloadLinkLabel:ee(t.string),downloadLinkText:ee(t.string),editButtonText:ge(t.string),editSuccess:ge(t.bool),editSuccessMessage:ge(t.string),editing:t.bool,error:t.bool,errorText:t.string,generateButtonText:t.string,generateSuccessBody:t.node,generateSuccessMessage:t.string,generateTitle:t.string,hasAPIKeyVisibilityToggle:t.bool,hasDownloadLink:t.bool,helperText:t.string,hideAPIKeyLabel:t.string,launcherButtonRef:t.any,loading:t.bool,loadingText:t.string,modalLabel:t.string,nameHelperText:t.string,nameLabel:t.string,namePlaceholder:t.string,nameRequired:t.bool,nextStepButtonText:He(t.string),onClose:t.func,onCopy:t.func,onRequestEdit:t.func,onRequestGenerate:t.func,open:t.bool.isRequired,portalTarget:t.node,previousStepButtonText:He(t.string),selectorPrimaryFocus:t.string,showAPIKeyLabel:t.string,...ss};x.displayName=ve;x.__docgenInfo={description:"",methods:[],displayName:"APIKeyModal",props:{apiKey:{required:!1,tsType:{name:"string"},description:"the api key that's displayed to the user when a request to create is fulfilled.",type:{name:"string"}},apiKeyLabel:{required:!1,tsType:{name:"string"},description:"label for the text input that holds the api key.",type:{name:"string"}},apiKeyName:{required:!1,tsType:{name:"string"},description:"the name of the api key. should only be supplied in edit mode.",defaultValue:{value:"''",computed:!1},type:{name:"string"}},body:{required:!1,tsType:{name:"string"},description:"body content for the modal",type:{name:"string"}},className:{required:!1,tsType:{name:"string"},description:"optional class name",type:{name:"string"}},closeButtonText:{required:!1,tsType:{name:"string"},description:"text for the close button",type:{name:"string"}},copyButtonText:{required:!1,tsType:{name:"string"},description:"text for the copy button",type:{name:"string"}},copyErrorText:{required:!1,tsType:{name:"string"},description:"Error message for when the copy function fails",type:{name:"string"}},copyIconDescription:{required:!1,tsType:{name:"string"},description:"text description for the copy button icon",type:{name:"string"}},customSteps:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  valid?: boolean;
  content?: ReactNode;
  title?: string;
}`,signature:{properties:[{key:"valid",value:{name:"boolean",required:!1}},{key:"content",value:{name:"ReactNode",required:!1}},{key:"title",value:{name:"string",required:!1}}]}}],raw:`Array<{
  valid?: boolean;
  content?: ReactNode;
  title?: string;
}>`},description:"if you need more options for key creation beyond just the name use custom steps to obtain whatever data is required.",defaultValue:{value:"[]",computed:!1},type:{name:"arrayOf",value:{name:"shape",value:{valid:{name:"bool",description:"designates if the step has passed whatever validation rules are in place.",required:!1},content:{name:"node",description:"designates content is the JSX that holds whatever inputs you need",required:!1},title:{name:"string",description:"designates the title that's displayed at the top of the modal for each step",required:!1}}}}},editing:{required:!1,tsType:{name:"boolean"},description:"designates if the modal is in the edit mode",type:{name:"bool"}},error:{required:!1,tsType:{name:"boolean"},description:"designates if an error has occurred in a request",type:{name:"bool"}},errorText:{required:!1,tsType:{name:"string"},description:"text to display if an error has occurred",type:{name:"string"}},generateButtonText:{required:!1,tsType:{name:"string"},description:`default primary button text for modal in assumed default mode create or generate.
in create mode this is the button text prior to supplying an api key, which then
uses copyButtonText`,type:{name:"string"}},generateSuccessBody:{required:!1,tsType:{name:"ReactNode"},description:"content to display if generate request was successful",type:{name:"node"}},generateSuccessTitle:{required:!1,tsType:{name:"string"},description:"* @deprecated use `generateSuccessMessage` instead\ntitle for a successful key generation",type:{name:"string"}},generateSuccessMessage:{required:!1,tsType:{name:"string"},description:"success message for a successful key generation",type:{name:"string"}},generateTitle:{required:!1,tsType:{name:"string"},description:"default title for the modal in generate key mode",type:{name:"string"}},hasAPIKeyVisibilityToggle:{required:!1,tsType:{name:"boolean"},description:"designates if the api input has the visibility toggle enabled",type:{name:"bool"}},hasDownloadLink:{required:!1,tsType:{name:"boolean"},description:"designates if user is able to download the api key",type:{name:"bool"}},hideAPIKeyLabel:{required:!1,tsType:{name:"string"},description:"label text that's displayed when hovering over visibility toggler to hide key",type:{name:"string"}},launcherButtonRef:{required:!1,tsType:{name:"RefObject",elements:[{name:"any"}],raw:"RefObject<any>"},description:"Provide a ref to return focus to once the tearsheet is closed.",type:{name:"any"}},loading:{required:!1,tsType:{name:"boolean"},description:"designates if the modal is in a loading state via a request or some other in progress operation",type:{name:"bool"}},loadingText:{required:!1,tsType:{name:"string"},description:"text that displays while modal is in the loading state",type:{name:"string"}},modalLabel:{required:!1,tsType:{name:"string"},description:"general label text for modal",type:{name:"string"}},nameHelperText:{required:!1,tsType:{name:"string"},description:"helper text for name input",type:{name:"string"}},nameLabel:{required:!1,tsType:{name:"string"},description:"label for api key name input",type:{name:"string"}},namePlaceholder:{required:!1,tsType:{name:"string"},description:"placeholder text for api key name input",type:{name:"string"}},nameRequired:{required:!1,tsType:{name:"boolean"},description:"designates if a name is required or not for key generation. NOTE- if using custom steps set this to false since you will be using your own validation",type:{name:"bool"}},open:{required:!0,tsType:{name:"boolean"},description:"designates if modal is open or closed",type:{name:"bool"}},portalTarget:{required:!1,tsType:{name:"ReactNode"},description:"The DOM node the tearsheet should be rendered within. Defaults to document.body.",type:{name:"node"}},selectorPrimaryFocus:{required:!1,tsType:{name:"string"},description:`Specify a CSS selector that matches the DOM element that should be
focused when the Modal opens.`,type:{name:"string"}},showAPIKeyLabel:{required:!1,tsType:{name:"string"},description:"label text that's displayed when hovering over visibility toggler to show key",type:{name:"string"}},helperText:{required:!1,tsType:{name:"string"},description:"helper text for password input",type:{name:"string"}},previousStepButtonText:{required:!1,tsType:{name:"string"},description:"text that displays in the secondary button when using custom steps to indicate to the user that there is a previous step",type:{name:"custom",raw:"customStepsRequiredProps(PropTypes.string)"}},nextStepButtonText:{required:!1,tsType:{name:"string"},description:"text that displays in the primary button when using custom steps to indicate to the user that there is a next step",type:{name:"custom",raw:"customStepsRequiredProps(PropTypes.string)"}},editButtonText:{required:!1,tsType:{name:"string"},description:"text for the edit button",type:{name:"custom",raw:"editRequiredProps(PropTypes.string)"}},editSuccess:{required:!1,tsType:{name:"boolean"},description:"designates if the edit request was successful",type:{name:"custom",raw:"editRequiredProps(PropTypes.bool)"}},editSuccessTitle:{required:!1,tsType:{name:"string"},description:"* @deprecated use `editSuccessMessage` instead\ntitle for a successful edit",type:{name:"string"}},editSuccessMessage:{required:!1,tsType:{name:"string"},description:"success message for edit",type:{name:"custom",raw:"editRequiredProps(PropTypes.string)"}},downloadBodyText:{required:!1,tsType:{name:"string"},description:"the content that appears that indicates the key is downloadable",type:{name:"string"}},downloadFileName:{required:!1,tsType:{name:"string"},description:"designates the name of downloadable json file with the key. if not specified will default to 'apikey'",type:{name:"custom",raw:"downloadRequiredProps(PropTypes.string)"}},downloadFileType:{required:!1,tsType:{name:"union",raw:"'txt' | 'json'",elements:[{name:"literal",value:"'txt'"},{name:"literal",value:"'json'"}]},description:"designates the file type for the downloadable key",type:{name:"custom",raw:"downloadRequiredProps(PropTypes.oneOf(['txt', 'json']))"}},downloadLinkText:{required:!1,tsType:{name:"string"},description:"anchor text for the download link",type:{name:"custom",raw:"downloadRequiredProps(PropTypes.string)"}},downloadLinkLabel:{required:!1,tsType:{name:"string"},description:"Aria-label for the download link",defaultValue:{value:"downloadLinkText",computed:!1},type:{name:"custom",raw:"downloadRequiredProps(PropTypes.string)"}},onClose:{description:"handler for on modal close",type:{name:"func"},required:!1},onCopy:{description:`Optional callback if you want to use your own copy function instead of the build in one
onCopy(apiKey)`,type:{name:"func"},required:!1},onRequestEdit:{description:"handler for api key edit",type:{name:"func"},required:!1},onRequestGenerate:{description:"handler for api key generation",type:{name:"func"},required:!1}}};const ns=".c4p--apikey-modal .cds--radio-button-wrapper{margin-bottom:.25rem}.c4p--apikey-modal__permissions.cds--fieldset{margin-top:1rem;margin-bottom:0}.c4p--apikey-modal__resource-toggle.cds--fieldset{margin-top:0;margin-bottom:1rem}.c4p--apikey-modal__resource-name.cds--fieldset{margin-top:0;margin-bottom:0}.c4p--apikey-modal__button-loading.cds--btn--primary{background:var(--cds-link-secondary, #0043ce)}",it=()=>{const{csfFile:n}=$t("meta",["meta"]);return e.createElement(Ot,{altGuidelinesHref:[Mt(n),{href:"https://www.carbondesignsystem.com/components/modal/usage",label:"Carbon Modal usage guidelines"},{href:"https://react.carbondesignsystem.com/?path=/docs/modal--default",label:"Carbon Modal documentation"}],blocks:[{story:L,description:"API key creation / generation is assumed to be the default mode for this modal.\nTo enable key editing you have to set the `edit` prop to true and supply any\nother edit related props with the relevant input."},{description:"By default generate and edit only supply a name input for your key. If you need additional input you should use custom steps",story:I}]})};it.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const nn={title:"IBM Products/Components/Generating an API key/APIKeyModal",component:x,tags:["autodocs"],parameters:{styles:ns,docs:{page:it}},argTypes:{generateSuccessBody:{control:{type:"select",labels:{0:"short body",1:"long body"}},options:[0,1],mapping:{0:e.createElement("p",null,"API key successfully created."),1:e.createElement("p",null,"This is your unique API key and is non-recoverable. If you lose this API key, you will have to reset it.")}},portalTarget:{control:!1}}},N={apiKey:"123-456-789",apiKeyLabel:"API key",showAPIKeyLabel:"Show key",hideAPIKeyLabel:"Hide key",copyButtonText:"Copy",copyIconDescription:"Copy",hasAPIKeyVisibilityToggle:!0,helperText:"This is your unique API key and is non-recoverable. If you lose this API key, you will have to reset it.",downloadLinkText:"Download as JSON",downloadLinkLabel:"Download API Key in Java Script File format",hasDownloadLink:!0,downloadFileName:"apikey",downloadFileType:"json",open:!0,closeButtonText:"Close",generateSuccessMessage:"API key successfully created",editSuccessMessage:"API key successfully saved",loadingText:"Generating...",modalLabel:"An example of Generate API key"},R=`${H.prefix}--apikey-modal`,as=n=>{const[a,i]=s.useState(!1),[r,l]=s.useState(!1),c=s.useRef(void 0),m=async()=>{l(!0),await se(1e3),i(!0),l(!1)};return e.createElement(e.Fragment,null,e.createElement("style",null,`.${R} { opacity: 0; }`,";"),e.createElement(x,{...n,onClose:()=>i(!1),open:a,launcherButtonRef:c}),r?e.createElement(q,{renderIcon:he,className:`${R}__button-loading`},"Generating..."):e.createElement(q,{onClick:m,ref:c},"Generate"))},lt=n=>{const{error:a}=n,[i,r]=s.useState(!1),[l,c]=s.useState(""),[m,y]=s.useState(!1),[b,o]=s.useState(!1),f=s.useRef(void 0),d=async v=>{be(`submitted ${v}`)(),o(!1),y(!0),await se(1e3),a?o(!0):c("111-111-111-111"),y(!1)},T=()=>{r(!1),c("")};return e.createElement(e.Fragment,null,e.createElement("style",null,`.${R} { opacity: 0; }`,";"),e.createElement(x,{...n,apiKey:l,loading:m,onClose:T,onRequestGenerate:d,open:i,error:b,launcherButtonRef:f}),e.createElement(q,{onClick:()=>r(!i),ref:f},"Generate API key"))},ct=n=>{const{editing:a}=n,{savedName:i,savedPermissions:r,savedAllResources:l,savedResource:c,...m}=n,[y,b]=s.useState(!1),[o,f]=s.useState(""),[d,T]=s.useState(!1),v=s.useRef(void 0),[C,z]=s.useState(i),[_,G]=s.useState(r),[w,k]=s.useState(l),[O,$]=s.useState(c),[J,ae]=s.useState(!1),B=async()=>{be("submitted")(),T(!0),await se(1e3),a?ae(!0):f("111-111-111-111"),T(!1)},U=()=>{b(!1),a||(f(""),z(""),G(""),k(!1),$(""))},K=g=>{g.preventDefault(),B()},X=()=>{w&&O&&$(""),k(g=>!g)},oe=[{valid:!!(C&&_),title:a?"Edit API key":"Generate API key",content:e.createElement(e.Fragment,null,e.createElement("p",{className:`${R}__body`},"(Optional description text) To connect securely to [product name], your application or tool needs an API key with permission to access resources such as [product resource name]."),e.createElement(te,{value:C,onChange:g=>z(g.target.value),labelText:"Name your application",placeholder:"Application name",id:"name-input","data-modal-primary-focus":!0}),e.createElement(ye,{legendText:"What do you want your application to be able to do",className:`${R}__permissions`},e.createElement(Lt,{onChange:g=>G(g),valueSelected:_,name:"permission",orientation:"vertical"},e.createElement(fe,{value:"Read and write",labelText:"Read and write"}),e.createElement(fe,{value:"Read only",labelText:"Read only"}),e.createElement(fe,{value:"Write only",labelText:"Write only"}))))},{valid:w||!w&&!!O,title:"Choose which resources the API will have access to",content:e.createElement(e.Fragment,null,e.createElement(rt,{onSubmit:K},e.createElement(ye,{legendText:"What do you want your application to be able to do",className:`${R}__resource-toggle`},e.createElement(Ht,{onClick:X,labelText:"All resources",toggled:w,disabled:d,id:"toggle1",autoFocus:!0})),e.createElement(ye,{legendText:"What do you want your application to be able to do",className:`${R}__resource-name`},e.createElement(te,{value:O,onChange:g=>$(g.target.value),labelText:"Which resource?",placeholder:"Resources name",disabled:d||w,id:"resource-input"}))),d&&e.createElement(he,{description:d?"Saving...":"Generating..."}),J&&e.createElement("div",{className:`${R}__messaging`},"Edited successfully, API key successfully saved."))}];return e.createElement(e.Fragment,null,e.createElement("style",null,`.${R} { opacity: 0; }`,";"),e.createElement(x,{...m,apiKey:o,loading:d,onClose:U,onRequestEdit:B,onRequestGenerate:B,open:y,customSteps:oe,nameRequired:!1,editSuccess:J,launcherButtonRef:v}),e.createElement(q,{onClick:()=>b(!y),ref:v},a?"Edit API key":"Generate API key"))},dt=n=>{const{error:a,apiKeyName:i}=n,[r,l]=s.useState(!1),[c,m]=s.useState(!1),[y,b]=s.useState(!1),[o,f]=s.useState(!1),d=s.useRef(void 0),T=async()=>{be(`submitted ${i}`)(),b(!1),m(!0),await se(1e3),a?b(!0):f(!0),m(!1)},v=()=>{l(!1)},C=()=>{l(!0)};return e.createElement(e.Fragment,null,e.createElement("style",null,`.${R} { opacity: 0; }`,";"),e.createElement(x,{...n,loading:c,onClose:v,onRequestEdit:T,open:r,error:y,editSuccess:o,launcherButtonRef:d}),e.createElement(q,{onClick:C,ref:d},"Edit API key"))},D=lt.bind({});D.args={...N,generateButtonText:"Generate API key",generateTitle:"Generate an API key",generateSuccessBody:1,body:"(Optional description text) To connect securely to [product name], your application or tool needs an API key with permission to access resources such as [product resource name].",nameHelperText:"Providing the application name will help you identify your API key later.",nameLabel:"Name your application",namePlaceholder:"Application name",nameRequired:!0};const W=lt.bind({});W.args={...N,hasAPIKeyVisibilityToggle:!0,generateButtonText:"Generate API key",generateTitle:"Generate an API key",body:"(Optional description text) To connect securely to [product name], your application or tool needs an API key with permission to access resources such as [product resource name].",nameHelperText:"Providing the application name will help you identify your API key later.",nameLabel:"Name your application",namePlaceholder:"Application name",nameRequired:!0,error:!0,errorText:"Failed to create API key"};const j=as.bind({});j.args={...N,apiKeyLabel:"Unique API Key",generateTitle:"Generate an API key"};const F=ct.bind({});F.args={...N,generateButtonText:"Generate",nextStepButtonText:"Next",previousStepButtonText:"Previous",downloadFileName:"apikey",savedName:"",savedAllResources:!1,savedResource:"",savedPermissions:"",generateTitle:"Generate an API key"};F.parameters={docs:{source:{code:"Sorry, this feature is not currently available for this story"}}};const L=dt.bind({});L.args={...N,editButtonText:"Save API key",generateTitle:"Save an API key",body:"(Optional description text) To connect securely to [product name], your application or tool needs an API key with permission to access resources such as [product resource name].",nameHelperText:"Providing the application name will help you identify your API key later.",nameLabel:"Name your application",namePlaceholder:"Application name",nameRequired:!0,editing:!0,apiKey:"",loadingText:"Saving...",apiKeyName:"test_key_1"};const V=dt.bind({});V.args={...N,editButtonText:"Save API key",generateTitle:"Save an API key",body:"(Optional description text) To connect securely to [product name], your application or tool needs an API key with permission to access resources such as [product resource name].",nameHelperText:"Providing the application name will help you identify your API key later.",nameLabel:"Name your application",namePlaceholder:"Application name",nameRequired:!0,editing:!0,apiKey:"",loadingText:"Saving...",generateSuccessBody:"API Key saved.",apiKeyName:"test_key_1",error:!0,errorText:"Failed to edit API key"};const I=ct.bind({});I.args={...N,generateButtonText:"Generate",nextStepButtonText:"Next",previousStepButtonText:"Previous",downloadFileName:"apikey",savedName:"test_key_1",savedAllResources:!1,savedResource:"resource_1",savedPermissions:"Read only",editing:!0,editButtonText:"Save API key",generateTitle:"Save an API key"};I.parameters={docs:{source:{code:"Sorry, this feature is not currently available for this story"}}};var Ge,Oe,$e;D.parameters={...D.parameters,docs:{...(Ge=D.parameters)==null?void 0:Ge.docs,source:{originalSource:`args => {
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
}`,...($e=(Oe=D.parameters)==null?void 0:Oe.docs)==null?void 0:$e.source}}};var Me,De,We;W.parameters={...W.parameters,docs:{...(Me=W.parameters)==null?void 0:Me.docs,source:{originalSource:`args => {
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
}`,...(We=(De=W.parameters)==null?void 0:De.docs)==null?void 0:We.source}}};var je,Ve,ze;j.parameters={...j.parameters,docs:{...(je=j.parameters)==null?void 0:je.docs,source:{originalSource:`args => {
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
}`,...(ze=(Ve=j.parameters)==null?void 0:Ve.docs)==null?void 0:ze.source}}};var Je,Ue,Xe;F.parameters={...F.parameters,docs:{...(Je=F.parameters)==null?void 0:Je.docs,source:{originalSource:`args => {
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
              Edited successfully, API key successfully saved.
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
}`,...(Xe=(Ue=F.parameters)==null?void 0:Ue.docs)==null?void 0:Xe.source}}};var Qe,Ye,Ze;L.parameters={...L.parameters,docs:{...(Qe=L.parameters)==null?void 0:Qe.docs,source:{originalSource:`args => {
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
}`,...(Ze=(Ye=L.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var et,tt,st;V.parameters={...V.parameters,docs:{...(et=V.parameters)==null?void 0:et.docs,source:{originalSource:`args => {
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
}`,...(st=(tt=V.parameters)==null?void 0:tt.docs)==null?void 0:st.source}}};var nt,at,ot;I.parameters={...I.parameters,docs:{...(nt=I.parameters)==null?void 0:nt.docs,source:{originalSource:`args => {
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
              Edited successfully, API key successfully saved.
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
}`,...(ot=(at=I.parameters)==null?void 0:at.docs)==null?void 0:ot.source}}};const an=["Generate","GenerateWithError","InstantGenerate","CustomGenerate","Edit","EditWithError","CustomEdit"];export{I as CustomEdit,F as CustomGenerate,L as Edit,V as EditWithError,D as Generate,W as GenerateWithError,j as InstantGenerate,an as __namedExportsOrder,nn as default};
