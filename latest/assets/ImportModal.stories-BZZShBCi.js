import{e as t,r as E}from"./index-CPiZ6Cnx.js";import{b as G,_ as K,C as Be,P as e,c as X,v as pe,e as ae,t as ce,S as me}from"./index-CXyjPnaX.js";import{o as ue,n as fe,T as Ie,p as ye,B as W}from"./settings-DkGFwmHv.js";import{a as Ce}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as we}from"./StoryDocsPage-B_QkJq2W.js";import{ae as Re}from"./index-z3zJDXtl.js";import{b as ke}from"./story-helper-CTHQ3yzD.js";import{C as ze,M as Oe,a as Pe,b as He}from"./ComposedModal-DIgif1vZ.js";import{c as Le}from"./events-OVwOsPzJ.js";import{L as Me}from"./InlineLoading-DZri6jHG.js";import{a as Ae}from"./bucket-2-L5Cs0C3i.js";import{W as Ue}from"./bucket-18-By6NmkK1.js";import{T as j}from"./Text-vNWzJqus.js";import{T as je}from"./TextInput-DmU-PbK4.js";import{g as We}from"./devtools-BgfuqBVa.js";import{u as Ke}from"./usePortalTarget-D7xkRihu.js";import{u as ne}from"./uuidv4-BQrI85uz.js";import{A as Ge}from"./bucket-0-DUfmGMOu.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BSHYryQu.js";import"./index-Bsyy8W_U.js";import"./index-DJK44odq.js";import"./v4-CQkTLCs1.js";import"./iframe-BAt2XFX8.js";import"../sb-preview/runtime.js";import"./index-Df9so8jS.js";import"./index-DMCuvgYY.js";import"./index-DrFu-skq.js";import"./index-Dcfl0vi2.js";import"./LayerContext-BGhaVt7n.js";import"./ButtonSet-DCPCKVSR.js";import"./mergeRefs-CTUecegF.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-i_P_nIQh.js";import"./bucket-6-BQYdmIZX.js";import"./useNormalizedInputProps-Dv8FHz9Q.js";import"./FormContext-CgeSXHS1.js";import"./useAnnouncer-Dwt0jqXi.js";import"./feature-flags-B_abUzZ5.js";import"./index-BLF2Ep9P.js";var oe;function ge(l){let{iconDescription:d="Uploading file",status:n="uploading",invalid:p,name:m,tabIndex:v=0,["aria-describedby"]:y,...g}=l;const f=G();switch(n){case"uploading":return t.createElement(Me,{description:d,small:!0,withOverlay:!1,className:`${f}--file-loading`});case"edit":return t.createElement(t.Fragment,null,p&&t.createElement(Ue,{className:`${f}--file-invalid`}),t.createElement("button",K({"aria-label":`${d} - ${m}`,className:`${f}--file-close`,type:"button",tabIndex:v},g,{"aria-describedby":p?y:void 0}),oe||(oe=t.createElement(Be,null))));case"complete":return t.createElement(Ae,K({"aria-label":d,className:`${f}--file-complete`},g,{tabIndex:-1}),d&&t.createElement("title",null,d));default:return null}}ge.propTypes={"aria-describedby":e.string,iconDescription:e.string,invalid:e.bool,name:e.string,status:e.oneOf(["edit","complete","uploading"]),tabIndex:e.number};function be(l){let{accept:d=[],className:n,id:p,disabled:m,labelText:v="Add file",multiple:y=!1,name:g,onAddFiles:f=fe,onClick:N,pattern:w=".[0-9a-z]+$",innerRef:R,..._}=l;const u=G(),$=E.useRef(null),{current:o}=E.useRef(p||ue()),[B,D]=E.useState(!1),I=X(`${u}--file__drop-container`,`${u}--file-browse-btn`,{[`${u}--file__drop-container--drag-over`]:B,[`${u}--file-browse-btn--disabled`]:m},n);function x(r){if(!d.length)return r;const b=new Set(d);return r.reduce((F,C)=>{const{name:L,type:Y=""}=C,J=new RegExp(w,"i"),[M]=L.match(J)??[];return M===void 0?F:b.has(Y)||b.has(M.toLowerCase())?F.concat([C]):(C.invalidFileType=!0,F.concat([C]))},[])}function k(r){const b=[...r.target.files??[]],F=x(b);return f(r,{addedFiles:F})}function s(r){const b=[...r.dataTransfer.files],F=x(b);return f(r,{addedFiles:F})}const V=()=>{var r;m||(r=$.current)==null||r.click()};return t.createElement("div",{className:`${u}--file`,onDragOver:r=>{r.stopPropagation(),r.preventDefault(),!m&&(D(!0),r.dataTransfer.dropEffect="copy")},onDragLeave:r=>{r.stopPropagation(),r.preventDefault(),!m&&(D(!1),r.dataTransfer.dropEffect="move")},onDrop:r=>{r.stopPropagation(),r.preventDefault(),!m&&(D(!1),s(r))}},t.createElement("button",K({type:"button",className:I,ref:R,onKeyDown:r=>{var b;pe(r,[ce,me])&&(r.preventDefault(),(b=$.current)==null||b.click())},onClick:Le([N,V])},_),v),t.createElement("label",{htmlFor:o,className:`${u}--visually-hidden`},v),t.createElement("input",{type:"file",id:o,className:`${u}--file-input`,ref:$,tabIndex:-1,disabled:m,accept:d.join(","),name:g,multiple:y,onChange:k,onClick:r=>{r.target.value=""}}))}be.propTypes={accept:e.arrayOf(e.string),className:e.string,disabled:e.bool,id:e.string,labelText:e.string.isRequired,multiple:e.bool,name:e.string,onAddFiles:e.func,onClick:e.func,pattern:e.string,role:ae(e.number),tabIndex:ae(e.number)};function he(l){let{uuid:d,name:n,status:p="uploading",iconDescription:m,onDelete:v=fe,invalid:y,errorSubject:g,errorBody:f,size:N,className:w,...R}=l;const _=E.useRef(null),[u,$]=E.useState(!1),o=G(),{current:B}=E.useRef(d||ue()),D=X(`${o}--file__selected-file`,w,{[`${o}--file__selected-file--invalid`]:y,[`${o}--file__selected-file--md`]:N==="md",[`${o}--file__selected-file--sm`]:N==="sm"}),I=y?`${o}--file-filename-container-wrap-invalid`:`${o}--file-filename-container-wrap`,x=s=>s==null?void 0:s.replace(/\s+/g,""),k=s=>($(s.offsetWidth<s.scrollWidth),s.offsetWidth<s.scrollWidth);return E.useLayoutEffect(()=>{k(_.current)},[o,n]),t.createElement("span",K({className:D},R),u?t.createElement("div",{className:I},t.createElement(Ie,{label:n,align:"bottom",className:`${o}--file-filename-tooltip`},t.createElement("button",{className:`${o}--file-filename-button`,type:"button"},t.createElement(j,{ref:_,as:"p",title:n,className:`${o}--file-filename-button`,id:x(n)},n)))):t.createElement(j,{ref:_,as:"p",title:n,className:`${o}--file-filename`,id:x(n)},n),t.createElement("div",{className:`${o}--file-container-item`},t.createElement("span",{className:`${o}--file__state-container`},t.createElement(ge,{name:n,iconDescription:m,status:p,invalid:y,"aria-describedby":y&&g?`${x(n)}-id-error`:void 0,onKeyDown:s=>{pe(s,[ce,me])&&p==="edit"&&(s.preventDefault(),v(s,{uuid:B}))},onClick:s=>{p==="edit"&&v(s,{uuid:B})}}))),y&&g&&t.createElement("div",{className:`${o}--form-requirement`,role:"alert",id:`${x(n)}-id-error`},t.createElement(j,{as:"div",className:`${o}--form-requirement__title`},g),f&&t.createElement(j,{as:"p",className:`${o}--form-requirement__supplement`},f)))}he.propTypes={errorBody:e.string,errorSubject:e.string,iconDescription:e.string,invalid:e.bool,name:e.string,onDelete:e.func,size:e.oneOf(["sm","md","lg"]),status:e.oneOf(["uploading","edit","complete"]),uuid:e.string};const Z="ImportModal";let q=E.forwardRef(({accept:l=[],className:d,defaultErrorBody:n,defaultErrorHeader:p,description:m,fetchErrorBody:v,fetchErrorHeader:y,fileDropHeader:g,fileDropLabel:f,fileUploadLabel:N,inputButtonIcon:w,inputButtonText:R,inputId:_,inputLabel:u,inputPlaceholder:$,invalidFileTypeErrorBody:o,invalidFileTypeErrorHeader:B,invalidIconDescription:D,maxFileSize:I,maxFileSizeErrorBody:x,maxFileSizeErrorHeader:k,onClose:s,onRequestSubmit:V,open:r,portalTarget:b,primaryButtonText:F,secondaryButtonText:C,title:L,...Y},J)=>{const M=G(),[z,A]=E.useState([]),[O,ee]=E.useState(""),Te=Ke(b),ve=i=>{const T=new Set(l),S=i.name,c=i.type,a=`.${S.split(".").pop()}`;return!(T.has(c)||T.has(a)||l.length===0)},Q=i=>{const S=[...i.map(c=>{const a={uuid:c.uuid||ne(),status:"edit",iconDescription:D,name:c.name,fileSize:c.size,invalidFileType:c.invalidFileType,fileData:c,fetchError:c.fetchError};return a.fetchError?(a.errorBody=v||n,a.errorSubject=y||p,a.invalid=!0):a.invalidFileType?(a.errorBody=o||n,a.errorSubject=B||p,a.invalid=!0):I&&((a==null?void 0:a.fileSize)??0)>I&&(a.errorBody=x||n,a.errorSubject=k||p,a.invalid=!0),a})];A(S)},xe=async i=>{i.preventDefault();const T=O.substring(O.lastIndexOf("/")+1).split("?")[0],S={name:T,status:"uploading",uuid:ne()};A([S]);try{const c=await fetch(O);if(!c.ok||c.status!==200)throw new Error(`${c.status}`);const a=await c.blob(),U=new File([a],T,{type:a.type});U.invalidFileType=ve(U),U.uuid=S.uuid,Q([U])}catch{const a={...S,fetchError:!0};Q([a])}},Fe=(i,{addedFiles:T})=>{i.stopPropagation(),Q(T)},Se=i=>{const T=z.filter(S=>S.uuid!==i);A(T)},_e=()=>{V(z)},$e=i=>{ee(i.target.value)},te=()=>{A([]),ee(""),s&&s()},re=z.length,ie=z.filter(i=>!i.invalid).length,P=re>0,De=!P||!(ie>0),qe=!O||P,Ne=`${ie} / ${re} ${N}`,h=`${ye.prefix}--import-modal`;return Te(t.createElement(ze,{...Y,open:r,ref:J,...We(Z),"aria-label":L,className:X(h,d),size:"sm",preventCloseOnClickOutside:!0,onClose:te},t.createElement(Oe,{className:`${h}__header`,title:L}),t.createElement(Pe,{className:`${h}__body-container`},m&&t.createElement("p",{className:`${h}__body`},m),g&&t.createElement("p",{className:`${h}__file-drop-header`},g),t.createElement(be,{accept:l,labelText:f,onAddFiles:Fe,disabled:P,"data-modal-primary-focus":!0}),u&&t.createElement("p",{className:`${h}__label`},u),t.createElement("div",{className:`${h}__input-group`},t.createElement(je,{labelText:"",id:_||"",onChange:$e,placeholder:$,value:O,disabled:P,"aria-label":u}),t.createElement(W,{onClick:xe,className:`${h}__import-button`,size:"sm",disabled:qe,renderIcon:w?i=>t.createElement(Ge,{size:20,...i}):void 0},R)),t.createElement("div",{className:`${M}--file-container ${h}__file-container`},P&&t.createElement("p",{className:`${h}__helper-text`},Ne),z.map(i=>t.createElement(he,{key:i.uuid,onDelete:()=>Se(i.uuid),name:i.name,status:i.status,size:"lg",uuid:i.uuid,iconDescription:i.iconDescription,invalid:i.invalid,errorBody:i.errorBody,errorSubject:i.errorSubject,filesize:i.fileSize})))),t.createElement(He,{className:`${h}__footer`},t.createElement(W,{type:"button",kind:"secondary",onClick:te},C),t.createElement(W,{type:"submit",kind:"primary",onClick:_e,disabled:De},F))))});q=ye.checkComponentEnabled(q,Z);q.propTypes={accept:e.array,className:e.string,defaultErrorBody:e.string.isRequired,defaultErrorHeader:e.string.isRequired,description:e.string,fetchErrorBody:e.string,fetchErrorHeader:e.string,fileDropHeader:e.string,fileDropLabel:e.string,fileUploadLabel:e.string,inputButtonIcon:e.bool,inputButtonText:e.string.isRequired,inputId:e.string,inputLabel:e.string,inputPlaceholder:e.string,invalidFileTypeErrorBody:e.string,invalidFileTypeErrorHeader:e.string,invalidIconDescription:e.string,maxFileSize:e.number,maxFileSizeErrorBody:e.string,maxFileSizeErrorHeader:e.string,onClose:e.func,onRequestSubmit:e.func.isRequired,open:e.bool.isRequired,portalTarget:e.node,primaryButtonText:e.string.isRequired,secondaryButtonText:e.string.isRequired,title:e.string.isRequired};q.displayName=Z;q.__docgenInfo={description:"",methods:[],displayName:"ImportModal",props:{accept:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Specifies the file types that are valid for importing",defaultValue:{value:"[]",computed:!1},type:{name:"array"}},className:{required:!1,tsType:{name:"string"},description:"Optional class name",type:{name:"string"}},defaultErrorBody:{required:!0,tsType:{name:"string"},description:"The default message shown for an import error",type:{name:"string"}},defaultErrorHeader:{required:!0,tsType:{name:"string"},description:"The default header that is displayed to show an error message",type:{name:"string"}},description:{required:!1,tsType:{name:"string"},description:"Content that is displayed inside the modal",type:{name:"string"}},fetchErrorBody:{required:!1,tsType:{name:"string"},description:"Optional error body to display specifically for a fetch error",type:{name:"string"}},fetchErrorHeader:{required:!1,tsType:{name:"string"},description:"Optional error header to display specifically for a fetch error",type:{name:"string"}},fileDropHeader:{required:!1,tsType:{name:"string"},description:"Header for the drag and drop box",type:{name:"string"}},fileDropLabel:{required:!1,tsType:{name:"string"},description:"Label for the drag and drop box",type:{name:"string"}},fileUploadLabel:{required:!1,tsType:{name:"string"},description:"Label that appears when a file is uploaded to show number of files (1 / 1)",type:{name:"string"}},inputButtonIcon:{required:!1,tsType:{name:"boolean"},description:"Button icon for import by url button",type:{name:"bool"}},inputButtonText:{required:!0,tsType:{name:"string"},description:"Button text for import by url button",type:{name:"string"}},inputId:{required:!1,tsType:{name:"string"},description:"ID for text input",type:{name:"string"}},inputLabel:{required:!1,tsType:{name:"string"},description:"Header to display above import by url",type:{name:"string"}},inputPlaceholder:{required:!1,tsType:{name:"string"},description:"Placeholder for text input",type:{name:"string"}},invalidFileTypeErrorBody:{required:!1,tsType:{name:"string"},description:"Optional error message to display specifically for a invalid file type error",type:{name:"string"}},invalidFileTypeErrorHeader:{required:!1,tsType:{name:"string"},description:"Optional error header to display specifically for a invalid file type error",type:{name:"string"}},invalidIconDescription:{required:!1,tsType:{name:"string"},description:"Description for delete file icon",type:{name:"string"}},maxFileSize:{required:!1,tsType:{name:"number"},description:"File size limit in bytes",type:{name:"number"}},maxFileSizeErrorBody:{required:!1,tsType:{name:"string"},description:"Optional error message to display specifically for a max file size error",type:{name:"string"}},maxFileSizeErrorHeader:{required:!1,tsType:{name:"string"},description:"Optional error header to display specifically for a max file size error",type:{name:"string"}},open:{required:!0,tsType:{name:"boolean"},description:"Specify whether the Modal is currently open",type:{name:"bool"}},portalTarget:{required:!1,tsType:{name:"ReactNode"},description:"The DOM node the tearsheet should be rendered within. Defaults to document.body.",type:{name:"node"}},primaryButtonText:{required:!0,tsType:{name:"string"},description:"Specify the text for the primary button",type:{name:"string"}},secondaryButtonText:{required:!0,tsType:{name:"string"},description:"Specify the text for the secondary button",type:{name:"string"}},title:{required:!0,tsType:{name:"string"},description:"The text displayed at the top of the modal",type:{name:"string"}},onClose:{description:"Specify a handler for closing modal",type:{name:"func"},required:!1},onRequestSubmit:{description:'Specify a handler for "submitting" modal. Access the imported file via `file => {}`',type:{name:"func"},required:!0}}};const Ee=()=>{const{csfFile:l}=Re("meta",["meta"]);return t.createElement(we,{altGuidelinesHref:[ke(l),{href:"https://www.carbondesignsystem.com/components/modal/usage",label:"Carbon Modal usage guidelines"},{href:"https://react.carbondesignsystem.com/?path=/docs/modal--default",label:"Carbon Modal documentation"}]})};Ee.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const zt={title:"IBM Products/Patterns/Import and upload/ImportModal",component:q,tags:["autodocs"],parameters:{docs:{page:Ee}},argTypes:{accept:{control:{type:"select",labels:{0:"image (png, jpeg or gif)",1:"document (doc or pdf)",2:"development (html, css or javascript)"}},options:[0,1,2],mapping:{0:["image/png","image/jpeg","image/gif"],1:["application/doc","application/docx","application/pdf"],2:["text/plain","text/css","text/html","text/javascript"]}},portalTarget:{control:!1}}},Ve={className:"test-class",defaultErrorBody:"Select a new file and try again.",defaultErrorHeader:"Import failed",description:"You can specify a file to import by either dragging it into the drag and drop area or by specifying a URL. (Maximum file size of 500KB)",fetchErrorBody:"Unable to fetch URL.",fetchErrorHeader:"Import failed",fileDropHeader:"Add files using drag and drop",fileDropLabel:"Drag and drop files here or click to upload",fileUploadLabel:"files uploaded",inputButtonIcon:!1,inputButtonText:"Add file",inputId:"test-id",inputLabel:"Add a file by specifying a URL",inputPlaceholder:"URL",invalidFileTypeErrorBody:"Invalid file type.",invalidFileTypeErrorHeader:"Import failed",invalidIconDescription:"Delete",maxFileSize:5e5,maxFileSizeErrorBody:"500kb max file size. Select a new file and try again.",maxFileSizeErrorHeader:"Import failed",onClose:Ce("onClose event"),onRequestSubmit:l=>console.log("file contents",l),open:!0,primaryButtonText:"Import",secondaryButtonText:"Cancel",title:"Import"},Ye=({...l},d)=>{const[n,p]=E.useState(d.viewMode!=="docs");return t.createElement(t.Fragment,null,t.createElement(q,{...l,open:n,onClose:()=>p(!1)}),t.createElement(W,{onClick:()=>p(!0)},"Launch modal"))},H=Ye.bind({});H.args={accept:0,...Ve};var se,le,de;H.parameters={...H.parameters,docs:{...(se=H.parameters)==null?void 0:se.docs,source:{originalSource:`({
  ...args
}, context) => {
  const [open, setOpen] = useState(context.viewMode !== 'docs');
  return <>
      <ImportModal {...args} open={open} onClose={() => setOpen(false)} />
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
    </>;
}`,...(de=(le=H.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};const Ot=["Standard"];export{H as Standard,Ot as __namedExportsOrder,zt as default};
