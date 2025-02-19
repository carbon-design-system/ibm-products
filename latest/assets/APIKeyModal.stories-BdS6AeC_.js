import{r as s,e}from"./index-BOZkNhcz.js";import{P as t,F as _t,c as Bt}from"./index-Cd8snwnz.js";import{p as H,B as q,e as Kt}from"./settings-DqneCnpo.js";import{F as ot}from"./Form-6DaNhxaJ.js";import{F as ye}from"./FormGroup-CwhL9o_y.js";import{I as he}from"./InlineLoading-82KDAKCf.js";import{R as fe}from"./RadioButton-57mE-Hhs.js";import{R as Ft}from"./RadioButtonGroup-DraaP4WA.js";import{T as Lt}from"./Toggle-DKejV_6J.js";import{P as Ht,T as ne}from"./TextInput-Bs2r8Jim.js";import{a as be}from"./chunk-D5ZWXAHU-DlerbUHg.js";import{w as ae}from"./wait-CTNFjQS8.js";import{S as Gt}from"./StoryDocsPage-CUDE-DA-.js";import{u as Ot}from"./index-Cm8rDqP-.js";import{b as $t}from"./story-helper-HIAsLHzl.js";import{C as Mt,M as Dt,a as Wt,b as jt}from"./ComposedModal-CpktCI_l.js";import{u as Vt}from"./usePortalTarget-D4ub4VO0.js";import{g as zt}from"./devtools-Bjt2CwRv.js";import{i as Te}from"./props-helper-DIx2Ramn.js";import{u as Ke}from"./uuidv4-BQrI85uz.js";import{u as Jt,c as Ut}from"./useFocus-BAskf9li.js";import{u as Xt}from"./usePreviousValue-BEwlonP-.js";import{E as Qt}from"./bucket-6-Bh7P8rIU.js";import{d as Yt}from"./bucket-9-0Zx3G2i3.js";import{a as Zt}from"./bucket-2-BRYD7UVO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-hBZdtWkn.js";import"./index-2uioG_CI.js";import"./events-OVwOsPzJ.js";import"./index-CN8ymWyE.js";import"./mergeRefs-CTUecegF.js";import"./Text-Rb3iZwUo.js";import"./bucket-18-D95sPjw6.js";import"./useControllableState-BHFQnaNh.js";import"./useNormalizedInputProps-CMiK_Vbq.js";import"./FormContext-qEw5DNxz.js";import"./useAnnouncer-Dwt0jqXi.js";import"./v4-CtRu48qb.js";import"./iframe-DVffvOdJ.js";import"./index-CO8sV34W.js";import"./index-ogSvIofg.js";import"./index-26QMFoPE.js";import"./LayerContext-DxTbsTfh.js";import"./ButtonSet-DkA8no1v.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-CTxWTAfl.js";import"./feature-flags-D5BeACme.js";import"./index-BwgvqBjT.js";const es="APIKeyDownloader",oe=({apiKey:n,body:a,fileName:i,fileType:r,linkText:u,downloadLinkLabel:l})=>{const[p,g]=s.useState({});return s.useEffect(()=>{(async()=>{const o=r==="txt"?n:JSON.stringify({apiKey:n}),v=new Blob([o],{type:r==="txt"?"text/plain":"application/json"}),h=await URL.createObjectURL(v),c=`${i||"apikey"}.${r}`;g({href:h,download:c})})()},[n,i,r]),e.createElement("div",{className:`${H.prefix}--apikey-modal__download-container`},e.createElement("p",{className:`${H.prefix}--apikey-modal__messaging-text`},a," ",e.createElement("a",{...p,className:`${H.prefix}--apikey-modal__download-link`,"aria-label":l??u,role:"button"},l??u)))};oe.displayName=es;oe.propTypes={apiKey:t.string.isRequired,body:t.string,downloadLinkLabel:t.string,fileName:t.string.isRequired,fileType:t.oneOf(["txt","json"]).isRequired,linkText:t.string.isRequired};oe.__docgenInfo={description:"",methods:[],displayName:"APIKeyDownloader",props:{apiKey:{description:"the api key that's displayed to the user when a request to create is fulfilled.",type:{name:"string"},required:!0},body:{description:"body content for the downloader",type:{name:"string"},required:!1},downloadLinkLabel:{description:"aria-label for the download link",type:{name:"string"},required:!1},fileName:{description:"designates the name of downloadable json file with the key. if not specified will default to 'apikey'",type:{name:"string"},required:!0},fileType:{description:"designates the file type for the downloadable key",type:{name:"enum",value:[{value:"'txt'",computed:!1},{value:"'json'",computed:!1}]},required:!0},linkText:{description:"anchor text for the download link",type:{name:"string"},required:!0}}};const ve="APIKeyModal",Fe={apiKeyName:"",customSteps:[]};let x=s.forwardRef(({apiKey:n,apiKeyLabel:a,apiKeyName:i=Fe.apiKeyName,body:r,className:u,closeButtonText:l,copyButtonText:p,copyErrorText:g,copyIconDescription:T,customSteps:o=Fe.customSteps,downloadBodyText:v,downloadFileName:h,downloadFileType:c,downloadLinkText:k,downloadLinkLabel:P=k,editButtonText:C,editSuccess:_,editSuccessTitle:G,editSuccessMessage:O,editing:m,error:U,errorText:$,generateButtonText:M,generateSuccessBody:X,generateSuccessTitle:Q,generateSuccessMessage:B,generateTitle:K,hasAPIKeyVisibilityToggle:Y,hasDownloadLink:re,hideAPIKeyLabel:ie,launcherButtonRef:y,loading:D,loadingText:dt,modalLabel:ke,nameHelperText:ut,nameLabel:pt,namePlaceholder:mt,nameRequired:le,nextStepButtonText:yt,onClose:ce,onCopy:Re,onRequestEdit:de,onRequestGenerate:ue,open:S,portalTarget:ft,previousStepButtonText:gt,showAPIKeyLabel:ht,helperText:bt,...Tt},vt)=>{var Be;const[xe,Z]=s.useState(null),[we,Pe]=s.useState(null),[Se,kt]=s.useState(!1),[ee,Ee]=s.useState(i),[w,pe]=s.useState(0),me=s.useRef(void 0),W=s.useRef(Ke()),Rt=s.useRef(Ke()),xt=Vt(ft),E=!!o.length,f=n&&!D,Ae=E&&w<o.length-1,Ie=E&&w!==0,wt={renderIcon:b=>e.createElement(Kt,{size:16,...b}),iconDescription:T,ref:me},d=`${H.prefix}--apikey-modal`,Pt=s.useRef(void 0),A=s.useRef(null),te=vt||Pt,{firstElement:qe,keyDownListener:St}=Jt(te),Ne=Xt(S);s.useEffect(()=>{me.current&&S&&f&&me.current.focus(),A!=null&&A.current&&(A==null||A.current.setAttribute("readOnly","true"))},[S,f]),s.useEffect(()=>{S&&Ut(qe,te,`#${CSS.escape(W==null?void 0:W.current)}`)},[qe,te,S]),s.useEffect(()=>{Ne&&!S&&y&&setTimeout(()=>{y.current.focus()},0)},[y,S,Ne]);const Et=()=>{var b;return D?!0:E&&"valid"in((o==null?void 0:o[w])||[])?!((b=o[w])!=null&&b.valid):!!(!E&&le&&!ee)},At=()=>Ae?yt:f?p:m?C:M,It=()=>Ie&&!f?gt:l;s.useEffect(()=>{var b;m&&_?(Z(K),Pe(O??G)):f?(Z(K),Pe(B??Q)):Z(E?(b=o[w])==null?void 0:b.title:K)},[f,D,m,_,G,O,E,Q,B,K,w,o]);const qt=b=>{Ee(b.target.value)},Ce=()=>{Ee(""),pe(0),ce==null||ce()},_e=async b=>{if(b.preventDefault(),Ae)pe(w+1);else if(f)if(Re)Re(n);else try{await navigator.clipboard.writeText(n)}catch(Ct){console.error(Ct),kt(!0)}else m?de==null||de(ee):ue==null||ue(ee)},Nt=()=>{Ie&&!f?pe(w-1):Ce()};return xt(e.createElement(_t,{enableExperimentalFocusWrapWithoutSentinels:!0},e.createElement(Mt,{...Tt,open:S,...zt(ve),ref:te,onKeyDown:St,className:Bt(u,d),onClose:Ce,size:"sm","aria-label":ke,preventCloseOnClickOutside:!0},e.createElement(Dt,{className:`${d}__header`,title:xe,label:ke}),e.createElement(Wt,{className:`${d}__body-container`},E&&!f?(Be=o[w])==null?void 0:Be.content:e.createElement(e.Fragment,null,r&&e.createElement("p",{className:`${d}__body`},r),!m&&n&&Y&&e.createElement(Ht,{value:n,labelText:a,id:W.current,showPasswordLabel:ht,hidePasswordLabel:ie,tooltipPosition:"left",helperText:bt,ref:A}),!m&&n&&!Y&&e.createElement(ne,{value:n,labelText:a,id:W.current}),(m||!f&&le)&&e.createElement(ot,{onSubmit:_e,"aria-label":xe??void 0},e.createElement(ne,{helperText:ut,placeholder:mt,labelText:pt,onChange:qt,value:ee,id:Rt.current,disabled:D,required:le,"data-modal-primary-focus":!0})),D&&e.createElement(he,{description:dt,className:`${d}__loader`}),(Se||U)&&e.createElement("div",{className:`${d}__messaging`},e.createElement("div",{className:`${d}__error-icon`},e.createElement(Qt,{size:16})),e.createElement("p",{className:`${d}__messaging-text`,role:"alert","aria-live":"assertive"},Se?g:$)),f&&e.createElement("div",{className:`${d}__messaging`},e.createElement(Yt,{size:16}),re?e.createElement(oe,{apiKey:n,body:v,fileName:h,linkText:k,fileType:c,downloadLinkLabel:P}):e.createElement("div",{className:`${d}__messaging-text`,role:"alert","aria-live":"assertive"},X)),(_||f&&we)&&e.createElement("div",{className:`${d}__messaging`},e.createElement(Zt,{size:16,className:`${d}__checkmark-icon`}),e.createElement("p",{className:`${d}__messaging-text`,role:"alert","aria-live":"assertive"},we)))),e.createElement(jt,{className:`${d}__footer`},e.createElement(q,{type:"button",kind:"secondary",onClick:Nt},It()),e.createElement(q,{...f&&wt,type:"submit",kind:"primary",onClick:_e,disabled:Et()},At())))))});const Le=n=>Te(n,({customSteps:a})=>a&&a.length>1),ge=n=>Te(n,({editing:a})=>a),se=n=>Te(n,({hasDownloadLink:a})=>a);x=H.checkComponentEnabled(x,ve);const ts={editSuccessTitle:t.string,generateSuccessTitle:t.string};x.propTypes={apiKey:t.string,apiKeyLabel:t.string,apiKeyName:t.string,body:t.string,className:t.string,closeButtonText:t.string,copyButtonText:t.string,copyErrorText:t.string,copyIconDescription:t.string,customSteps:t.arrayOf(t.shape({valid:t.bool,content:t.node,title:t.string})),downloadBodyText:t.string,downloadFileName:se(t.string),downloadFileType:se(t.oneOf(["txt","json"])),downloadLinkLabel:se(t.string),downloadLinkText:se(t.string),editButtonText:ge(t.string),editSuccess:ge(t.bool),editSuccessMessage:ge(t.string),editing:t.bool,error:t.bool,errorText:t.string,generateButtonText:t.string,generateSuccessBody:t.node,generateSuccessMessage:t.string,generateTitle:t.string,hasAPIKeyVisibilityToggle:t.bool,hasDownloadLink:t.bool,helperText:t.string,hideAPIKeyLabel:t.string,launcherButtonRef:t.any,loading:t.bool,loadingText:t.string,modalLabel:t.string,nameHelperText:t.string,nameLabel:t.string,namePlaceholder:t.string,nameRequired:t.bool,nextStepButtonText:Le(t.string),onClose:t.func,onCopy:t.func,onRequestEdit:t.func,onRequestGenerate:t.func,open:t.bool.isRequired,portalTarget:t.node,previousStepButtonText:Le(t.string),selectorPrimaryFocus:t.string,showAPIKeyLabel:t.string,...ts};x.displayName=ve;x.__docgenInfo={description:"",methods:[],displayName:"APIKeyModal",props:{apiKey:{required:!1,tsType:{name:"string"},description:"the api key that's displayed to the user when a request to create is fulfilled.",type:{name:"string"}},apiKeyLabel:{required:!1,tsType:{name:"string"},description:"label for the text input that holds the api key.",type:{name:"string"}},apiKeyName:{required:!1,tsType:{name:"string"},description:"the name of the api key. should only be supplied in edit mode.",defaultValue:{value:"''",computed:!1},type:{name:"string"}},body:{required:!1,tsType:{name:"string"},description:"body content for the modal",type:{name:"string"}},className:{required:!1,tsType:{name:"string"},description:"optional class name",type:{name:"string"}},closeButtonText:{required:!1,tsType:{name:"string"},description:"text for the close button",type:{name:"string"}},copyButtonText:{required:!1,tsType:{name:"string"},description:"text for the copy button",type:{name:"string"}},copyErrorText:{required:!1,tsType:{name:"string"},description:"Error message for when the copy function fails",type:{name:"string"}},copyIconDescription:{required:!1,tsType:{name:"string"},description:"text description for the copy button icon",type:{name:"string"}},customSteps:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  valid?: boolean;
  content?: ReactNode;
  title?: string;
}`,signature:{properties:[{key:"valid",value:{name:"boolean",required:!1}},{key:"content",value:{name:"ReactNode",required:!1}},{key:"title",value:{name:"string",required:!1}}]}}],raw:`Array<{
  valid?: boolean;
  content?: ReactNode;
  title?: string;
}>`},description:"if you need more options for key creation beyond just the name use custom steps to obtain whatever data is required.",defaultValue:{value:"[]",computed:!1},type:{name:"arrayOf",value:{name:"shape",value:{valid:{name:"bool",description:"designates if the step has passed whatever validation rules are in place.",required:!1},content:{name:"node",description:"designates content is the JSX that holds whatever inputs you need",required:!1},title:{name:"string",description:"designates the title that's displayed at the top of the modal for each step",required:!1}}}}},editing:{required:!1,tsType:{name:"boolean"},description:"designates if the modal is in the edit mode",type:{name:"bool"}},error:{required:!1,tsType:{name:"boolean"},description:"designates if an error has occurred in a request",type:{name:"bool"}},errorText:{required:!1,tsType:{name:"string"},description:"text to display if an error has occurred",type:{name:"string"}},generateButtonText:{required:!1,tsType:{name:"string"},description:`default primary button text for modal in assumed default mode create or generate.
in create mode this is the button text prior to supplying an api key, which then
uses copyButtonText`,type:{name:"string"}},generateSuccessBody:{required:!1,tsType:{name:"ReactNode"},description:"content to display if generate request was successful",type:{name:"node"}},generateSuccessTitle:{required:!1,tsType:{name:"string"},description:"* @deprecated use `generateSuccessMessage` instead\ntitle for a successful key generation",type:{name:"string"}},generateSuccessMessage:{required:!1,tsType:{name:"string"},description:"success message for a successful key generation",type:{name:"string"}},generateTitle:{required:!1,tsType:{name:"string"},description:"default title for the modal in generate key mode",type:{name:"string"}},hasAPIKeyVisibilityToggle:{required:!1,tsType:{name:"boolean"},description:"designates if the api input has the visibility toggle enabled",type:{name:"bool"}},hasDownloadLink:{required:!1,tsType:{name:"boolean"},description:"designates if user is able to download the api key",type:{name:"bool"}},hideAPIKeyLabel:{required:!1,tsType:{name:"string"},description:"label text that's displayed when hovering over visibility toggler to hide key",type:{name:"string"}},launcherButtonRef:{required:!1,tsType:{name:"RefObject",elements:[{name:"any"}],raw:"RefObject<any>"},description:"Provide a ref to return focus to once the tearsheet is closed.",type:{name:"any"}},loading:{required:!1,tsType:{name:"boolean"},description:"designates if the modal is in a loading state via a request or some other in progress operation",type:{name:"bool"}},loadingText:{required:!1,tsType:{name:"string"},description:"text that displays while modal is in the loading state",type:{name:"string"}},modalLabel:{required:!1,tsType:{name:"string"},description:"general label text for modal",type:{name:"string"}},nameHelperText:{required:!1,tsType:{name:"string"},description:"helper text for name input",type:{name:"string"}},nameLabel:{required:!1,tsType:{name:"string"},description:"label for api key name input",type:{name:"string"}},namePlaceholder:{required:!1,tsType:{name:"string"},description:"placeholder text for api key name input",type:{name:"string"}},nameRequired:{required:!1,tsType:{name:"boolean"},description:"designates if a name is required or not for key generation. NOTE- if using custom steps set this to false since you will be using your own validation",type:{name:"bool"}},open:{required:!0,tsType:{name:"boolean"},description:"designates if modal is open or closed",type:{name:"bool"}},portalTarget:{required:!1,tsType:{name:"ReactNode"},description:"The DOM node the tearsheet should be rendered within. Defaults to document.body.",type:{name:"node"}},showAPIKeyLabel:{required:!1,tsType:{name:"string"},description:"label text that's displayed when hovering over visibility toggler to show key",type:{name:"string"}},helperText:{required:!1,tsType:{name:"string"},description:"helper text for password input",type:{name:"string"}},previousStepButtonText:{required:!1,tsType:{name:"string"},description:"text that displays in the secondary button when using custom steps to indicate to the user that there is a previous step",type:{name:"custom",raw:"customStepsRequiredProps(PropTypes.string)"}},nextStepButtonText:{required:!1,tsType:{name:"string"},description:"text that displays in the primary button when using custom steps to indicate to the user that there is a next step",type:{name:"custom",raw:"customStepsRequiredProps(PropTypes.string)"}},editButtonText:{required:!1,tsType:{name:"string"},description:"text for the edit button",type:{name:"custom",raw:"editRequiredProps(PropTypes.string)"}},editSuccess:{required:!1,tsType:{name:"boolean"},description:"designates if the edit request was successful",type:{name:"custom",raw:"editRequiredProps(PropTypes.bool)"}},editSuccessTitle:{required:!1,tsType:{name:"string"},description:"* @deprecated use `editSuccessMessage` instead\ntitle for a successful edit",type:{name:"string"}},editSuccessMessage:{required:!1,tsType:{name:"string"},description:"success message for edit",type:{name:"custom",raw:"editRequiredProps(PropTypes.string)"}},downloadBodyText:{required:!1,tsType:{name:"string"},description:"the content that appears that indicates the key is downloadable",type:{name:"string"}},downloadFileName:{required:!1,tsType:{name:"string"},description:"designates the name of downloadable json file with the key. if not specified will default to 'apikey'",type:{name:"custom",raw:"downloadRequiredProps(PropTypes.string)"}},downloadFileType:{required:!1,tsType:{name:"union",raw:"'txt' | 'json'",elements:[{name:"literal",value:"'txt'"},{name:"literal",value:"'json'"}]},description:"designates the file type for the downloadable key",type:{name:"custom",raw:"downloadRequiredProps(PropTypes.oneOf(['txt', 'json']))"}},downloadLinkText:{required:!1,tsType:{name:"string"},description:"anchor text for the download link",type:{name:"custom",raw:"downloadRequiredProps(PropTypes.string)"}},downloadLinkLabel:{required:!1,tsType:{name:"string"},description:"Aria-label for the download link",defaultValue:{value:"downloadLinkText",computed:!1},type:{name:"custom",raw:"downloadRequiredProps(PropTypes.string)"}},onClose:{description:"handler for on modal close",type:{name:"func"},required:!1},onCopy:{description:`Optional callback if you want to use your own copy function instead of the build in one
onCopy(apiKey)`,type:{name:"func"},required:!1},onRequestEdit:{description:"handler for api key edit",type:{name:"func"},required:!1},onRequestGenerate:{description:"handler for api key generation",type:{name:"func"},required:!1},selectorPrimaryFocus:{description:`Specify a CSS selector that matches the DOM element that should be
focused when the Modal opens.`,type:{name:"string"},required:!1}}};const ss=".c4p--apikey-modal .cds--radio-button-wrapper{margin-block-end:.25rem}.c4p--apikey-modal__permissions.cds--fieldset{margin-block:1rem 0}.c4p--apikey-modal__resource-toggle.cds--fieldset{margin-block:0 1rem}.c4p--apikey-modal__resource-name.cds--fieldset{margin-block:0}.c4p--apikey-modal__button-loading.cds--btn--primary{background:var(--cds-link-secondary, #0043ce)}",rt=()=>{const{csfFile:n}=Ot("meta",["meta"]);return e.createElement(Gt,{altGuidelinesHref:[$t(n),{href:"https://www.carbondesignsystem.com/components/modal/usage",label:"Carbon Modal usage guidelines"},{href:"https://react.carbondesignsystem.com/?path=/docs/modal--default",label:"Carbon Modal documentation"}],blocks:[{story:L,description:"API key creation / generation is assumed to be the default mode for this modal.\nTo enable key editing you have to set the `edit` prop to true and supply any\nother edit related props with the relevant input."},{description:"By default generate and edit only supply a name input for your key. If you need additional input you should use custom steps",story:I}]})};rt.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const Ys={title:"IBM Products/Components/Generating an API key/APIKeyModal",component:x,tags:["autodocs"],parameters:{styles:ss,docs:{page:rt}},argTypes:{generateSuccessBody:{control:{type:"select",labels:{0:"short body",1:"long body"}},options:[0,1],mapping:{0:e.createElement("p",null,"API key successfully created."),1:e.createElement("p",null,"This is your unique API key and is non-recoverable. If you lose this API key, you will have to reset it.")}},portalTarget:{control:!1}}},N={apiKey:"123-456-789",apiKeyLabel:"API key",showAPIKeyLabel:"Show key",hideAPIKeyLabel:"Hide key",copyButtonText:"Copy",copyIconDescription:"Copy",hasAPIKeyVisibilityToggle:!0,helperText:"This is your unique API key and is non-recoverable. If you lose this API key, you will have to reset it.",downloadLinkText:"Download as JSON",downloadLinkLabel:"Download API Key in Java Script File format",hasDownloadLink:!0,downloadFileName:"apikey",downloadFileType:"json",open:!0,closeButtonText:"Close",generateSuccessMessage:"API key successfully created",editSuccessMessage:"API key successfully saved",loadingText:"Generating...",modalLabel:"An example of Generate API key"},R=`${H.prefix}--apikey-modal`,ns=(n,a)=>{const[i,r]=s.useState(a.viewMode!=="docs"),[u,l]=s.useState(!1),p=s.useRef(void 0),g=async()=>{l(!0),await ae(1e3),r(!0),l(!1)};return e.createElement(e.Fragment,null,e.createElement("style",null,`.${R} { opacity: 0; }`,";"),e.createElement(x,{...n,onClose:()=>r(!1),open:i,launcherButtonRef:p}),u?e.createElement(q,{renderIcon:he,className:`${R}__button-loading`},"Generating..."):e.createElement(q,{onClick:g,ref:p},"Generate"))},it=(n,a)=>{const{error:i}=n,[r,u]=s.useState(a.viewMode!=="docs"),[l,p]=s.useState(""),[g,T]=s.useState(!1),[o,v]=s.useState(!1),h=s.useRef(void 0),c=async P=>{be(`submitted ${P}`)(),v(!1),T(!0),await ae(1e3),i?v(!0):p("111-111-111-111"),T(!1)},k=()=>{u(!1),p("")};return e.createElement(e.Fragment,null,e.createElement("style",null,`.${R} { opacity: 0; }`,";"),e.createElement(x,{...n,apiKey:l,loading:g,onClose:k,onRequestGenerate:c,open:r,error:o,launcherButtonRef:h}),e.createElement(q,{onClick:()=>u(!r),ref:h},"Generate API key"))},lt=(n,a)=>{const{editing:i}=n,{savedName:r,savedPermissions:u,savedAllResources:l,savedResource:p,...g}=n,[T,o]=s.useState(a.viewMode!=="docs"),[v,h]=s.useState(""),[c,k]=s.useState(!1),P=s.useRef(void 0),[C,_]=s.useState(r),[G,O]=s.useState(u),[m,U]=s.useState(l),[$,M]=s.useState(p),[X,Q]=s.useState(!1),B=async()=>{be("submitted")(),k(!0),await ae(1e3),i?Q(!0):h("111-111-111-111"),k(!1)},K=()=>{o(!1),i||(h(""),_(""),O(""),U(!1),M(""))},Y=y=>{y.preventDefault(),B()},re=()=>{m&&$&&M(""),U(y=>!y)},ie=[{valid:!!(C&&G),title:i?"Edit API key":"Generate API key",content:e.createElement(e.Fragment,null,e.createElement("p",{className:`${R}__body`},"(Optional description text) To connect securely to [product name], your application or tool needs an API key with permission to access resources such as [product resource name]."),e.createElement(ne,{value:C,onChange:y=>_(y.target.value),labelText:"Name your application",placeholder:"Application name",id:"name-input","data-modal-primary-focus":!0}),e.createElement(ye,{legendText:"What do you want your application to be able to do",className:`${R}__permissions`},e.createElement(Ft,{onChange:y=>O(y),valueSelected:G,name:"permission",orientation:"vertical"},e.createElement(fe,{value:"Read and write",labelText:"Read and write"}),e.createElement(fe,{value:"Read only",labelText:"Read only"}),e.createElement(fe,{value:"Write only",labelText:"Write only"}))))},{valid:m||!m&&!!$,title:"Choose which resources the API will have access to",content:e.createElement(e.Fragment,null,e.createElement(ot,{onSubmit:Y},e.createElement(ye,{legendText:"What do you want your application to be able to do",className:`${R}__resource-toggle`},e.createElement(Lt,{onClick:re,labelText:"All resources",toggled:m,disabled:c,id:"toggle1",autoFocus:!0})),e.createElement(ye,{legendText:"What do you want your application to be able to do",className:`${R}__resource-name`},e.createElement(ne,{value:$,onChange:y=>M(y.target.value),labelText:"Which resource?",placeholder:"Resources name",disabled:c||m,id:"resource-input"}))),c&&e.createElement(he,{description:c?"Saving...":"Generating..."}),X&&e.createElement("div",{className:`${R}__messaging`},"Edited successfully, API key successfully saved."))}];return e.createElement(e.Fragment,null,e.createElement("style",null,`.${R} { opacity: 0; }`,";"),e.createElement(x,{...g,apiKey:v,loading:c,onClose:K,onRequestEdit:B,onRequestGenerate:B,open:T,customSteps:ie,nameRequired:!1,editSuccess:X,launcherButtonRef:P}),e.createElement(q,{onClick:()=>o(!T),ref:P},i?"Edit API key":"Generate API key"))},ct=(n,a)=>{const{error:i,apiKeyName:r}=n,[u,l]=s.useState(a.viewMode!=="docs"),[p,g]=s.useState(!1),[T,o]=s.useState(!1),[v,h]=s.useState(!1),c=s.useRef(void 0),k=async()=>{be(`submitted ${r}`)(),o(!1),g(!0),await ae(1e3),i?o(!0):h(!0),g(!1)},P=()=>{l(!1)},C=()=>{l(!0)};return e.createElement(e.Fragment,null,e.createElement("style",null,`.${R} { opacity: 0; }`,";"),e.createElement(x,{...n,loading:p,onClose:P,onRequestEdit:k,open:u,error:T,editSuccess:v,launcherButtonRef:c}),e.createElement(q,{onClick:C,ref:c},"Edit API key"))},j=it.bind({});j.args={...N,generateButtonText:"Generate API key",generateTitle:"Generate an API key",generateSuccessBody:1,body:"(Optional description text) To connect securely to [product name], your application or tool needs an API key with permission to access resources such as [product resource name].",nameHelperText:"Providing the application name will help you identify your API key later.",nameLabel:"Name your application",namePlaceholder:"Application name",nameRequired:!0};const V=it.bind({});V.args={...N,hasAPIKeyVisibilityToggle:!0,generateButtonText:"Generate API key",generateTitle:"Generate an API key",body:"(Optional description text) To connect securely to [product name], your application or tool needs an API key with permission to access resources such as [product resource name].",nameHelperText:"Providing the application name will help you identify your API key later.",nameLabel:"Name your application",namePlaceholder:"Application name",nameRequired:!0,error:!0,errorText:"Failed to create API key"};const z=ns.bind({});z.args={...N,apiKeyLabel:"Unique API Key",generateTitle:"Generate an API key"};const F=lt.bind({});F.args={...N,generateButtonText:"Generate",nextStepButtonText:"Next",previousStepButtonText:"Previous",downloadFileName:"apikey",savedName:"",savedAllResources:!1,savedResource:"",savedPermissions:"",generateTitle:"Generate an API key"};F.parameters={docs:{source:{code:"Sorry, this feature is not currently available for this story"}}};const L=ct.bind({});L.args={...N,editButtonText:"Save API key",generateTitle:"Save an API key",body:"(Optional description text) To connect securely to [product name], your application or tool needs an API key with permission to access resources such as [product resource name].",nameHelperText:"Providing the application name will help you identify your API key later.",nameLabel:"Name your application",namePlaceholder:"Application name",nameRequired:!0,editing:!0,apiKey:"",loadingText:"Saving...",apiKeyName:"test_key_1"};const J=ct.bind({});J.args={...N,editButtonText:"Save API key",generateTitle:"Save an API key",body:"(Optional description text) To connect securely to [product name], your application or tool needs an API key with permission to access resources such as [product resource name].",nameHelperText:"Providing the application name will help you identify your API key later.",nameLabel:"Name your application",namePlaceholder:"Application name",nameRequired:!0,editing:!0,apiKey:"",loadingText:"Saving...",generateSuccessBody:"API Key saved.",apiKeyName:"test_key_1",error:!0,errorText:"Failed to edit API key"};const I=lt.bind({});I.args={...N,generateButtonText:"Generate",nextStepButtonText:"Next",previousStepButtonText:"Previous",downloadFileName:"apikey",savedName:"test_key_1",savedAllResources:!1,savedResource:"resource_1",savedPermissions:"Read only",editing:!0,editButtonText:"Save API key",generateTitle:"Save an API key"};I.parameters={docs:{source:{code:"Sorry, this feature is not currently available for this story"}}};var He,Ge,Oe;j.parameters={...j.parameters,docs:{...(He=j.parameters)==null?void 0:He.docs,source:{originalSource:`(args, context) => {
  const {
    error
  } = args;
  const [open, setOpen] = useState(context.viewMode !== 'docs');
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
}`,...(Oe=(Ge=j.parameters)==null?void 0:Ge.docs)==null?void 0:Oe.source}}};var $e,Me,De;V.parameters={...V.parameters,docs:{...($e=V.parameters)==null?void 0:$e.docs,source:{originalSource:`(args, context) => {
  const {
    error
  } = args;
  const [open, setOpen] = useState(context.viewMode !== 'docs');
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
}`,...(De=(Me=V.parameters)==null?void 0:Me.docs)==null?void 0:De.source}}};var We,je,Ve;z.parameters={...z.parameters,docs:{...(We=z.parameters)==null?void 0:We.docs,source:{originalSource:`(args, context) => {
  const [open, setOpen] = useState(context.viewMode !== 'docs');
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
}`,...(Ve=(je=z.parameters)==null?void 0:je.docs)==null?void 0:Ve.source}}};var ze,Je,Ue;F.parameters={...F.parameters,docs:{...(ze=F.parameters)==null?void 0:ze.docs,source:{originalSource:`(args, context) => {
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
  const [open, setOpen] = useState(context.viewMode !== 'docs');
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
}`,...(Ue=(Je=F.parameters)==null?void 0:Je.docs)==null?void 0:Ue.source}}};var Xe,Qe,Ye;L.parameters={...L.parameters,docs:{...(Xe=L.parameters)==null?void 0:Xe.docs,source:{originalSource:`(args, context) => {
  const {
    error,
    apiKeyName
  } = args;
  const [open, setOpen] = useState(context.viewMode !== 'docs');
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
}`,...(Ye=(Qe=L.parameters)==null?void 0:Qe.docs)==null?void 0:Ye.source}}};var Ze,et,tt;J.parameters={...J.parameters,docs:{...(Ze=J.parameters)==null?void 0:Ze.docs,source:{originalSource:`(args, context) => {
  const {
    error,
    apiKeyName
  } = args;
  const [open, setOpen] = useState(context.viewMode !== 'docs');
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
}`,...(tt=(et=J.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var st,nt,at;I.parameters={...I.parameters,docs:{...(st=I.parameters)==null?void 0:st.docs,source:{originalSource:`(args, context) => {
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
  const [open, setOpen] = useState(context.viewMode !== 'docs');
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
}`,...(at=(nt=I.parameters)==null?void 0:nt.docs)==null?void 0:at.source}}};const Zs=["Generate","GenerateWithError","InstantGenerate","CustomGenerate","Edit","EditWithError","CustomEdit"];export{I as CustomEdit,F as CustomGenerate,L as Edit,J as EditWithError,j as Generate,V as GenerateWithError,z as InstantGenerate,Zs as __namedExportsOrder,Ys as default};
