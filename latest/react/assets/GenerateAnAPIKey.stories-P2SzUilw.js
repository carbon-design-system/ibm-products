var S=Object.defineProperty;var a=(n,e)=>S(n,"name",{value:e,configurable:!0});import{j as t,aH as q,aJ as N,e as s,r as d,B as w}from"./iframe-DU3fWsEq.js";import{useMDXComponents as P}from"./index-Y1jbeCiL.js";import{P as G}from"./PasswordInput-CQvXiEzR.js";import{M as _}from"./Modal-SpyG1aVn.js";import{T as v}from"./TextInput--RpbZDfF.js";import"./preload-helper-Cc2_yIPf.js";import"./FormContext-DWfhBwkE.js";import"./useNormalizedInputProps-CiScQqEC.js";import"./Text-BMNkTgzs.js";import"./bucket-20-CmByzEsl.js";import"./toggleClass-DE6Cjo8X.js";import"./InlineLoading-DCLgadCg.js";import"./bucket-6-CYCyVP6N.js";import"./ButtonSet-TigcdyOE.js";import"./index-BiE6xxiG.js";import"./LayerContext-Clj7bd5Z.js";import"./clamp-ekNJC_Xv.js";import"./index-Cp5_bPRb.js";import"./index-CnSnZ5hY.js";import"./bucket-19-Be1_xXYE.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-bGeByaic.js";import"./usePreviousValue-BeLpIcYU.js";function T(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...P(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"generate-an-api-key",children:"Generate an API key"}),`
`,t.jsxs(e.p,{children:[t.jsx(e.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/patterns/generate-an-api-key/usage/",rel:"nofollow",children:"Usage guidelines"}),`
|
`,t.jsx(e.a,{href:"https://www.carbondesignsystem.com/components/modal/usage",rel:"nofollow",children:"Carbon modal usage guidelines"}),`
|
`,t.jsx(e.a,{href:"https://react.carbondesignsystem.com/?path=/docs/components-modal",rel:"nofollow",children:"Carbon modal documentation"})]}),`
`,t.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#overview",children:"Overview"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#example-usage",children:"Example usage"})}),`
`]}),`
`,t.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,t.jsx(e.p,{children:`When designing for the generation of API keys, ensure users know what the key is
created for, the security implications, and the end destination of the key.`}),`
`,t.jsx(e.p,{children:"To build this pattern, we recommend including the following ingredients:"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"https://react.carbondesignsystem.com/?path=/docs/components-composedmodal",rel:"nofollow",children:"ComposedModal"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"https://react.carbondesignsystem.com/?path=/docs/components-button",rel:"nofollow",children:"Button"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"https://react.carbondesignsystem.com/?path=/docs/components-textinput",rel:"nofollow",children:"TextInput"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"https://react.carbondesignsystem.com/?path=/docs/components-passwordinput--overview",rel:"nofollow",children:"PasswordInput"})}),`
`]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`import { Button, Modal, TextInput, PasswordInput } from '@carbon/react';
`})}),`
`,t.jsx(e.h2,{id:"example-usage",children:"Example usage"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsxs(e.p,{children:[`💡 Check our
`,t.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products/src/patterns/GenerateAnAPIKey/example",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products/src/patterns/GenerateAnAPIKey/example",rel:"nofollow",children:t.jsx(e.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit react-patterns"})})}),`
`,`
`,t.jsx(e.h3,{id:"getting-started",children:"Getting started"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`import { Button, Modal, TextInput, PasswordInput } from '@carbon/react';
import { InformationFilled, CheckmarkFilled } from '@carbon/react/icons';
`})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`
<GenerateAnAPIKey
  open={open}
        onRequestClose={toggleModal}
        primaryButtonDisabled={loading || name.length === 0}
        secondaryButtonText="Close"
        loadingDescription="Loading"
        onLoadingSuccess={() => {}}
        {...modalProps}
      >
        {key ? (
          <>
            <PasswordInput
              id="generated-api-key"
              labelText="Unique API key"
              value={key}
              readOnly
              showPasswordLabel="Show key"
              hidePasswordLabel="Hide key"
              tooltipPosition="left"
              helperText="This is your unique API key and is non-recoverable. If you lose this API key, you will have to reset it."
            />
            <div className={\`\${blockClass}__messaging\`}>
              <InformationFilled size={16} />
              <APIKeyDownloader
                apiKey={key}
                body="This is your unique API key and is non-recoverable. If you lose this API key, you will have to reset it."
                fileName="apikey"
                linkText="Download as JSON"
                fileType="json"
                downloadLinkLabel="Download API Key in Java Script File format"
              />
            </div>
             <div className={\`\${blockClass}__messaging\`}>
            <CheckmarkFilled
              size={20}
              className={\`\${blockClass}__checkmark-icon\`}
            />
            <p
              className={\`\${blockClass}__messaging-text\`}
              role="alert"
              aria-live="assertive"
            >
              API key successfully created
            </p>
            </div>
          </>
        ) : (
          <>
            <p style={{ marginBlockEnd: '1rem' }}>
              (Optional description text) To connect securely to [product name],
              your application or tool needs an API key with permission to
              access resources such as [product resource name].
            </p>
            <TextInput
              id="app-name"
              labelText="Name your application"
              placeholder="Application name"
              value={name}
              onChange={handleName}
              disabled={loading}
              helperText="Providing the application name will help you identify your API key later."
            />
          </>
        )}
      </GenerateAnAPIKey>
`})}),`
`,t.jsx(q,{withSource:"none",children:t.jsx(N,{of:void 0})})]})}a(T,"_createMdxContent");function B(n={}){const{wrapper:e}={...P(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(T,{...n})}):T(n)}a(B,"MDXContent");const b=a(({open:n,onRequestClose:e,onRequestSubmit:r,modalHeading:i,primaryButtonText:o="Generate API key",secondaryButtonText:u="Close",primaryButtonDisabled:l=!1,loadingStatus:c="inactive",loadingDescription:m="Loading",onLoadingSuccess:p,children:y})=>s.createElement(_,{open:n,onRequestClose:e,onRequestSubmit:r,modalHeading:i,primaryButtonText:o,secondaryButtonText:u,primaryButtonDisabled:l,loadingStatus:c,loadingDescription:m,onLoadingSuccess:p},y),"GenerateAnAPIKey");b.displayName="GenerateAnAPIKey";b.__docgenInfo={description:"",methods:[],displayName:"GenerateAnAPIKey",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onRequestClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onRequestSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},modalHeading:{required:!0,tsType:{name:"string"},description:""},primaryButtonText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Generate API key'",computed:!1}},secondaryButtonText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Close'",computed:!1}},primaryButtonDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loadingStatus:{required:!1,tsType:{name:"union",raw:"'inactive' | 'active' | 'finished'",elements:[{name:"literal",value:"'inactive'"},{name:"literal",value:"'active'"},{name:"literal",value:"'finished'"}]},description:"",defaultValue:{value:"'inactive'",computed:!1}},loadingDescription:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Loading'",computed:!1}},onLoadingSuccess:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const L=a(n=>new Promise(e=>setTimeout(e,n)),"wait$2"),K=a(async()=>(await L(1e3),"082be29c-3622-4276-bc58-695e2a12bd93"),"apiCall$2"),A=a(()=>{const[n,e]=d.useState(!1),[r,i]=d.useState(!1),[o,u]=d.useState(""),l=a(async()=>{i(!0);const p=await K();i(!1),u(p),m()},"fetchKey"),c=a(async()=>{try{await navigator.clipboard.writeText(o)}catch(p){console.error(p)}},"copyKey"),m=a(()=>{e(!n)},"toggleModal");return s.createElement("div",{className:"app"},s.createElement(w,{onClick:l,disabled:r},r?"Generating...":"Generate"),s.createElement(b,{open:n,onRequestClose:m,onRequestSubmit:c,modalHeading:"API key successfully created",primaryButtonText:"Copy",secondaryButtonText:"Close"},s.createElement(G,{id:"instant-api-key",labelText:"API key",value:o,helperText:"This is your unique API key and is non-recoverable. If you lose this API key, you will have to reset it."})))},"InstantGenerate");A.__docgenInfo={description:"",methods:[],displayName:"InstantGenerate"};const D=a(n=>new Promise(e=>setTimeout(e,n)),"wait$1"),M=a(async()=>(await D(1e3),"082be29c-3622-4276-bc58-695e2a12bd93"),"apiCall$1"),j=a(()=>{const[n,e]=d.useState(!1),[r,i]=d.useState(!1),[o,u]=d.useState(""),[l,c]=d.useState(""),m=a(x=>{c(x.target.value)},"handleName"),p=a(async()=>{i(!0);const x=await M();i(!1),u(x)},"fetchKey"),y=a(async()=>{try{await navigator.clipboard.writeText(o)}catch(x){console.error(x)}},"copyKey"),k=a(()=>{n&&(u(""),c(""),i(!1)),e(!n)},"toggleModal"),C=o?{modalHeading:"API key successfully created",primaryButtonText:"Copy",onRequestSubmit:y,loadingStatus:"inactive"}:{modalHeading:"Generate an API key",primaryButtonText:"Generate API key",onRequestSubmit:p,loadingStatus:a(()=>o?"finished":r?"active":"inactive","getLoadingStatus")()};return s.createElement("div",{className:"app"},s.createElement(w,{onClick:k},"Generate"),s.createElement(b,{open:n,onRequestClose:k,primaryButtonDisabled:r||l.length===0,secondaryButtonText:"Close",loadingDescription:"Loading",onLoadingSuccess:a(()=>{},"onLoadingSuccess"),...C},o?s.createElement(v,{id:"generated-api-key",labelText:"Unique API key",value:o,readOnly:!0,helperText:"This is your unique API key and is non-recoverable. If you lose this API key, you will have to reset it."}):s.createElement(s.Fragment,null,s.createElement("p",{style:{marginBlockEnd:"1rem"}},"(Optional description text) To connect securely to [product name], your application or tool needs an API key with permission to access resources such as [product resource name]."),s.createElement(v,{id:"app-name",labelText:"Name your application",value:l,onChange:m,disabled:r,helperText:"Providing a name will help you identify your API key later."}))))},"Generate");j.__docgenInfo={description:"",methods:[],displayName:"Generate"};const O=a(n=>new Promise(e=>setTimeout(e,n)),"wait"),R=a(async()=>(await O(1e3),"082be29c-3622-4276-bc58-695e2a12bd93"),"apiCall"),E=a(()=>{const[n,e]=d.useState(!1),[r,i]=d.useState(!1),[o,u]=d.useState("resource_name_1"),[l,c]=d.useState(!1),m=a(I=>{l&&c(!1),u(I.target.value)},"handleName"),p=a(async()=>{c(!1),i(!0),await R(),i(!1),c(!0)},"putName"),y=a(()=>{n&&(u("resource_name_1"),c(!1),i(!1)),e(!n)},"toggleModal"),k=a(()=>l?"finished":r?"active":"inactive","getLoadingStatus");return s.createElement("div",{className:"app"},s.createElement(w,{onClick:y},"Edit"),s.createElement(b,{open:n,onRequestClose:y,onRequestSubmit:p,modalHeading:"Edit API key",primaryButtonText:"Edit API key",secondaryButtonText:"Close",primaryButtonDisabled:r||o.length===0,loadingStatus:k(),loadingDescription:l?"Edited":"Loading",onLoadingSuccess:a(()=>{},"onLoadingSuccess")},s.createElement("p",{style:{marginBlockEnd:"1rem"}},"(Optional description text) To connect securely to [product name], your application or tool needs an API key with permission to access resources such as [product resource name]."),s.createElement(v,{id:"edit-app-name",labelText:"Name your application",value:o,onChange:m,disabled:r,helperText:l?"API key successfully saved":""})))},"Edit");E.__docgenInfo={description:"",methods:[],displayName:"Edit"};const ge={title:"Patterns/Generate an API key",component:a(()=>{},"component"),tags:["autodocs"],parameters:{docs:{page:B}}},$=a(n=>s.createElement(A,{...n}),"InstantTemplate"),z=a(n=>s.createElement(j,{...n}),"GenerateTemplate"),F=a(n=>s.createElement(E,{...n}),"EditTemplate"),g=$.bind({});g.storyName="Instant generate";g.args={};const h=z.bind({});h.storyName="Generate";h.args={};const f=F.bind({});f.storyName="Edit";f.args={};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => {
  return <InstantGenerate {...args} />;
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => {
  return <Generate {...args} />;
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => {
  return <Edit {...args} />;
}`,...f.parameters?.docs?.source}}};const he=["instantGenerate","generate","edit"];export{he as __namedExportsOrder,ge as default,f as edit,h as generate,g as instantGenerate};
//# sourceMappingURL=GenerateAnAPIKey.stories-P2SzUilw.js.map
