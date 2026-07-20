var z=Object.defineProperty;var i=(a,e)=>z(a,"name",{value:e,configurable:!0});import{u as E,j as t,aN as W,aU as L,R as n,r as v,B as N}from"./iframe-LxOZQDAZ.js";import{C as A}from"./Content-J-1ipU2p.js";import{H as G,a as U}from"./HeaderName-Debhei94.js";import{H as X}from"./HeaderContainer-BW-kbYmz.js";import{D as _}from"./Dropdown-CbTb0lto.js";import{N as r}from"./NumberInput-BziJhKz0.js";import{T as k}from"./TextInput-D178IeyT.js";import{F as Q}from"./Form-Cb4WnTKS.js";import{S as Y}from"./SidePanel-DLQEUCIg.js";import"./preload-helper-Cc2_yIPf.js";import"./Link-D2WtdVjC.js";import"./defaultItemToString-DDHghiWu.js";import"./useNormalizedInputProps-QJ6MvXNJ.js";import"./Text-BRhHXZCE.js";import"./bucket-20-CPLXmsjx.js";import"./bucket-21-CQi2gVtC.js";import"./index-NOUejIsb.js";import"./index-By2Zbst-.js";import"./downshift.esm-B7sI8gv5.js";import"./FormContext-Cdv1M00w.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./useControllableState-C0cmDY6p.js";import"./clamp-ekNJC_Xv.js";import"./bucket-0-dfuKY6jq.js";import"./bucket-18-Ar-ngw05.js";import"./hasHelperText-CcJ_VphT.js";import"./index-Cuq_gYqS.js";import"./LayerContext-Dp9ZRtSj.js";import"./index-V-GITaOS.js";import"./index-DH8D3rrj.js";import"./props-helper-BGW8o-_q.js";import"./devtools-B1WIs_qd.js";import"./index-Csspy4Nv.js";import"./useFocus-C64I-osv.js";import"./usePreviousValue-CD8ZFEAM.js";import"./usePrefersReducedMotion-CVY5qbgp.js";import"./useIsomorphicEffect-Cxr7g83s.js";import"./usePresence-QfAcXbB8.js";import"./ActionSet-DpmqCooQ.js";import"./ButtonSet-Q9L3O0X_.js";import"./InlineLoading-DbhE4RnG.js";import"./bucket-7-1DWIAd7h.js";import"./bucket-1-B6LDmGWR.js";function P(a){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...E(),...a.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"createsidepanel",children:"CreateSidePanel"}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/patterns/create-flows/usage/#side-panel",rel:"nofollow",children:"Usage guidelines"})}),`
`,t.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#overview",children:"Overview"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#example-usage",children:"Example usage"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#default",children:"Default"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#with-form-validation",children:"With form validation"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#feedback",children:"Feedback"})}),`
`]}),`
`,t.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,t.jsx(e.p,{children:`The CreateSidePanel pattern provides a recipe for building single-form creation
interfaces in a slide-in side panel. It is used for medium-complexity creations
where the user needs to retain page context — the underlying content remains
visible and interactive while the panel is open.`}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:`NOTE: Patterns have multiple ways of accomplishing a user need and typically
use a combination of components with additional design considerations. The
pattern code we share is meant to serve as an example implementation that can
be built and extended further.`}),`
`]}),`
`,t.jsx(e.p,{children:"To build this pattern, we recommend including the following components:"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:[t.jsx(e.a,{href:"https://ibm-products.carbondesignsystem.com/?path=/docs/components-sidepanel",rel:"nofollow",children:"SidePanel"}),`
(with `,t.jsx(e.code,{children:"slideIn"})," and ",t.jsx(e.code,{children:'placement="right"'}),")"]}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"https://react.carbondesignsystem.com/?path=/docs/components-form",rel:"nofollow",children:"Form"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"https://react.carbondesignsystem.com/?path=/docs/components-textinput",rel:"nofollow",children:"TextInput"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"https://react.carbondesignsystem.com/?path=/docs/components-dropdown",rel:"nofollow",children:"Dropdown"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"https://react.carbondesignsystem.com/?path=/docs/components-formgroup",rel:"nofollow",children:"FormGroup"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"https://react.carbondesignsystem.com/?path=/docs/components-button",rel:"nofollow",children:"Button"})}),`
`]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`import { SidePanel } from '@carbon/ibm-products';
import { Form, TextInput, Dropdown, FormGroup, Button } from '@carbon/react';
`})}),`
`,t.jsx(e.h2,{id:"example-usage",children:"Example usage"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsxs(e.p,{children:[`💡 Check our
`,t.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products/src/patterns/CreateSidePanel/example",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products/src/patterns/CreateSidePanel/example",rel:"nofollow",children:t.jsx(e.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit react-patterns"})})}),`
`,t.jsx(W,{withSource:"none",children:t.jsx(L,{of:c})}),`
`,t.jsx(e.h3,{id:"example",children:"Example"}),`
`,t.jsx(e.p,{children:"Here's a quick example to get you started."}),`
`,t.jsx(e.h4,{id:"html",children:"HTML"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<div id="page-content-selector">
  <button onClick="{()" ="">setOpen(true)}> Create resource</button>
  <CreateSidePanel
    open="{open}"
    title="Create resource"
    subtitle="Provide the details for your new resource"
    formTitle="Resource configuration"
    formDescription="Fill in the required fields below."
    primaryButtonText="Create"
    secondaryButtonText="Cancel"
    selectorPageContent="#page-content-selector"
    selectorPrimaryFocus="#resource-name"
    onRequestClose="{()"
    =""
  >
    setOpen(false)} onRequestSubmit={handleSubmit} >
    <TextInput id="resource-name" labelText="Resource name" />
  </CreateSidePanel>
</div>
`})}),`
`,t.jsx(e.h2,{id:"default",children:"Default"}),`
`,t.jsx(e.p,{children:`The default CreateSidePanel pattern provides a focused single-form creation
experience inside a slide-in side panel with:`}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"A slide-in panel that preserves page context"}),`
`,t.jsx(e.li,{children:"Form title and description sections"}),`
`,t.jsx(e.li,{children:"Submit and cancel action buttons in the panel footer"}),`
`]}),`
`,t.jsx(e.h2,{id:"with-form-validation",children:"With form validation"}),`
`,t.jsx(e.p,{children:"The pattern can be extended to include form validation:"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"Field-level validation with error states"}),`
`,t.jsx(e.li,{children:"Submit button disabled until all required fields are valid"}),`
`,t.jsx(e.li,{children:"Invalid text displayed for fields with errors"}),`
`,t.jsx(e.li,{children:"Real-time validation on blur or change events"}),`
`]}),`
`,t.jsx(e.h2,{id:"feedback",children:"Feedback"}),`
`,t.jsxs(e.p,{children:[`Help us improve this component by providing feedback through
`,t.jsx(e.a,{href:"https://github.com/carbon-design-system/ibm-products/issues/new/choose",rel:"nofollow",children:"GitHub issues"}),"."]})]})}i(P,"_createMdxContent");function J(a={}){const{wrapper:e}={...E(),...a.components};return e?t.jsx(e,{...a,children:t.jsx(P,{...a})}):P(a)}i(J,"MDXContent");const S="create-side-panel",w=n.forwardRef(({children:a,className:e,decorator:f,disableSubmit:d=!1,formDescription:m,formTitle:p,id:b,label:x,launcherButtonRef:o,onRequestClose:u,onRequestSubmit:C,open:g,primaryButtonText:y,secondaryButtonText:j,selectorPageContent:R,selectorPrimaryFocus:F,subtitle:B,title:I,...V},M)=>{const H=v.useMemo(()=>[{key:"submit",kind:"primary",label:y,onClick:i(T=>{T.preventDefault(),C?.()},"onClick"),disabled:d,type:"submit"},{key:"cancel",kind:"secondary",label:j,onClick:u}],[y,j,d,u,C]);return n.createElement(Y,{...V,ref:M,id:b,open:g,title:I,subtitle:B,labelText:x,placement:"right",slideIn:!0,animateTitle:!1,size:"md",className:`${S}${e?` ${e}`:""}`,selectorPageContent:R,selectorPrimaryFocus:F,launcherButtonRef:o,onRequestClose:u,actions:H,decorator:f,preventCloseOnClickOutside:!0},p&&n.createElement("h3",{className:`${S}__form-title`},p),m&&n.createElement("p",{className:`${S}__form-description`},m),n.createElement(Q,{className:`${S}__form`,onSubmit:i(T=>T.preventDefault(),"onSubmit")},a))});w.displayName="CreateSidePanel";w.__docgenInfo={description:"",methods:[],displayName:"CreateSidePanel",props:{className:{required:!1,tsType:{name:"string"},description:"Optional class applied to the outermost element."},disableSubmit:{required:!1,tsType:{name:"boolean"},description:"Disables the primary submit button — use for form validation.",defaultValue:{value:"false",computed:!1}},formDescription:{required:!1,tsType:{name:"ReactNode"},description:"Optional description rendered below the form title inside the panel body."},formTitle:{required:!0,tsType:{name:"ReactNode"},description:"Required title for the form section inside the panel body."},id:{required:!1,tsType:{name:"string"},description:"Unique identifier forwarded to the underlying SidePanel."},launcherButtonRef:{required:!1,tsType:{name:"RefObject",elements:[{name:"union",raw:"HTMLButtonElement | null",elements:[{name:"HTMLButtonElement"},{name:"null"}]}],raw:"RefObject<HTMLButtonElement | null>"},description:"Provide a ref to return focus to once the side panel is closed."},open:{required:!0,tsType:{name:"boolean"},description:"Controls whether the panel is open."},label:{required:!1,tsType:{name:"string"},description:"Label text shown above the panel title."},primaryButtonText:{required:!0,tsType:{name:"string"},description:"Text for the primary (submit) action button."},secondaryButtonText:{required:!0,tsType:{name:"string"},description:"Text for the secondary (cancel) action button."},selectorPageContent:{required:!0,tsType:{name:"string"},description:"CSS selector for the element that contains all page content.\nRequired for the `slideIn` variant so the page content can shrink."},selectorPrimaryFocus:{required:!1,tsType:{name:"string"},description:"CSS selector for the element that should receive focus when the panel opens."},subtitle:{required:!1,tsType:{name:"ReactNode"},description:"Optional subtitle shown in the panel header."},title:{required:!0,tsType:{name:"string"},description:"Panel header title."},decorator:{required:!1,tsType:{name:"ReactNode"},description:"Optional decorator (e.g. Slug / AI label) rendered inside the SidePanel."}},composes:["PropsWithChildren"]};const s="create-side-panel-stories__",K=["Day(s)","Month(s)","Year(s)"],q=i(({primaryButtonText:a="Create",secondaryButtonText:e="Cancel",subtitle:f="",title:d="Create partitions",selectorPageContent:m="#ibm-products-page-content",open:p,setOpen:b,...x})=>{const o=i(()=>b(!1),"clearAndClose");return n.createElement(w,{open:p,title:d,subtitle:f,formTitle:"Core configuration",formDescription:"We recommend you fill out and evaluate these details at a minimum before deploying your topic.",primaryButtonText:a,secondaryButtonText:e,selectorPageContent:m,selectorPrimaryFocus:".cds--text-input",onRequestClose:o,onRequestSubmit:o,...x},n.createElement(k,{id:"create-side-panel-topic-name-a",labelText:"Topic name",className:`${s}form-item`,placeholder:"Enter topic name"}),n.createElement(r,{id:"create-side-panel-partitions",className:`${s}form-item`,label:"Partitions",min:0,max:50,value:1,iconDescription:"Choose a number"}),n.createElement(r,{id:"create-side-panel-replicas",className:`${s}form-item`,label:"Replicas",min:0,max:50,value:1,iconDescription:"Choose a number"}),n.createElement(r,{id:"create-side-panel-min-in-sync",className:`${s}form-item`,label:"Minimum in-sync replicas",min:0,max:50,value:1,iconDescription:"Choose a number"}),n.createElement("div",{className:`${s}example-container`},n.createElement(r,{id:"create-side-panel-retention-time",className:`${s}form-item`,label:"Retention time",min:0,max:50,value:30,iconDescription:"Choose a number"}),n.createElement(_,{id:"create-side-panel-dropdown-options-a",items:K,initialSelectedItem:"Day(s)",label:"Options",titleText:"Options",className:`${s}form-item`})),n.createElement(r,{id:"create-side-panel-quantity",className:`${s}form-item`,label:"Quantity",min:0,max:50,value:1,iconDescription:"Choose a number"}))},"Default");q.__docgenInfo={description:"",methods:[],displayName:"Default",props:{primaryButtonText:{defaultValue:{value:"'Create'",computed:!1},required:!1},secondaryButtonText:{defaultValue:{value:"'Cancel'",computed:!1},required:!1},subtitle:{defaultValue:{value:"''",computed:!1},required:!1},title:{defaultValue:{value:"'Create partitions'",computed:!1},required:!1},selectorPageContent:{defaultValue:{value:"'#ibm-products-page-content'",computed:!1},required:!1}}};const l="create-side-panel-stories__",Z=["Day(s)","Month(s)","Year(s)"],D=i(({primaryButtonText:a="Create",secondaryButtonText:e="Cancel",subtitle:f="",title:d="Create partitions",selectorPageContent:m="#ibm-products-page-content",open:p,setOpen:b,...x})=>{const[o,u]=v.useState(""),[C,g]=v.useState(!1),y=i(()=>{u(""),g(!1),b(!1)},"clearAndClose");return n.createElement(w,{open:p,title:d,subtitle:f,formTitle:"Core configuration",formDescription:"We recommend you fill out and evaluate these details at a minimum before deploying your topic.",primaryButtonText:a,secondaryButtonText:e,selectorPageContent:m,selectorPrimaryFocus:"#create-side-panel-topic-name-b",onRequestClose:y,onRequestSubmit:y,disableSubmit:!o.length,...x},n.createElement(k,{id:"create-side-panel-topic-name-b",labelText:"Topic name",className:`${l}form-item`,placeholder:"Enter topic name",value:o,onChange:i(j=>{u(j.target.value),g(!1)},"onChange"),onBlur:i(()=>{o.length===0&&g(!0)},"onBlur"),invalid:C,invalidText:"This is a required field"}),n.createElement(r,{id:"create-side-panel-partitions-b",className:`${l}form-item`,label:"Partitions",min:0,max:50,value:1,iconDescription:"Choose a number"}),n.createElement(r,{id:"create-side-panel-replicas-b",className:`${l}form-item`,label:"Replicas",min:0,max:50,value:1,iconDescription:"Choose a number"}),n.createElement(r,{id:"create-side-panel-min-in-sync-b",className:`${l}form-item`,label:"Minimum in-sync replicas",min:0,max:50,value:1,iconDescription:"Choose a number"}),n.createElement("div",{className:`${l}example-container`},n.createElement(r,{id:"create-side-panel-retention-time-b",className:`${l}form-item`,label:"Retention time",min:0,max:50,value:30,iconDescription:"Choose a number"}),n.createElement(_,{id:"create-side-panel-dropdown-options-b","aria-label":"Dropdown",items:Z,initialSelectedItem:"Day(s)",label:"Options",titleText:"Options",className:`${l}form-item`})),n.createElement(r,{id:"create-side-panel-quantity-b",className:`${l}form-item`,label:"Quantity",min:0,max:50,value:1,iconDescription:"Choose a number"}))},"WithValidation");D.__docgenInfo={description:"",methods:[],displayName:"WithValidation",props:{primaryButtonText:{defaultValue:{value:"'Create'",computed:!1},required:!1},secondaryButtonText:{defaultValue:{value:"'Cancel'",computed:!1},required:!1},subtitle:{defaultValue:{value:"''",computed:!1},required:!1},title:{defaultValue:{value:"'Create partitions'",computed:!1},required:!1},selectorPageContent:{defaultValue:{value:"'#ibm-products-page-content'",computed:!1},required:!1}}};const ee=".create-side-panel__form-title{font-size:var(--cds-heading-compact-02-font-size, 1rem);font-weight:var(--cds-heading-compact-02-font-weight, 600);line-height:var(--cds-heading-compact-02-line-height, 1.375);letter-spacing:var(--cds-heading-compact-02-letter-spacing, 0);padding-block-end:.5rem}.create-side-panel__form-description{font-size:var(--cds-body-01-font-size, .875rem);font-weight:var(--cds-body-01-font-weight, 400);line-height:var(--cds-body-01-line-height, 1.42857);letter-spacing:var(--cds-body-01-letter-spacing, .16px);margin-block-end:1rem}.create-side-panel__form .cds--form-item{margin-block-end:1rem}.create-side-panel__form .cds--form-item:last-child{margin-block-end:0}.create-side-panel-stories__example-container{display:grid;align-items:flex-end;grid-gap:.5rem;grid-template-columns:1fr 1fr}.create-side-panel-stories__example-form-group>legend.cds--label{margin-block-end:0;padding-block-end:.5rem;padding-block-start:.5rem}.create-side-panel-stories__form-item{margin-block-end:1rem}.create-side-panel-stories__launcher-button{display:flex;align-items:center;justify-content:center;min-block-size:calc(100vh - 3rem)}",O="create-side-panel-stories__",$=i(({children:a})=>n.createElement(n.Fragment,null,n.createElement(X,{render:i(()=>n.createElement(G,null,n.createElement(U,{href:"/",prefix:"IBM"},"Cloud Pak")),"render")}),n.createElement(A,{id:"ibm-products-page-content"},a)),"PageShell"),Ge={title:"Patterns/Create flows/CreateSidePanel",component:i(()=>{},"component"),tags:["autodocs"],parameters:{layout:"fullscreen",styles:ee,docs:{page:J}}},c=i(()=>{const[a,e]=v.useState(!1);return n.createElement($,null,n.createElement("div",{className:`${O}launcher-button`},n.createElement(N,{onClick:i(()=>e(!a),"onClick")},a?"Close SidePanel":"Open SidePanel")),n.createElement(q,{open:a,setOpen:e}))},"createSidePanel");c.storyName="Default";const h=i(()=>{const[a,e]=v.useState(!1);return n.createElement($,null,n.createElement("div",{className:`${O}launcher-button`},n.createElement(N,{onClick:i(()=>e(!a),"onClick")},a?"Close SidePanel":"Open SidePanel")),n.createElement(D,{open:a,setOpen:e}))},"withFormValidation");h.storyName="With Form Validation";c.__docgenInfo={description:"",methods:[],displayName:"createSidePanel"};h.__docgenInfo={description:"",methods:[],displayName:"withFormValidation"};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <PageShell>
      <div className={\`\${prefix}launcher-button\`}>
        <Button onClick={() => setOpen(!open)}>
          {open ? 'Close SidePanel' : 'Open SidePanel'}
        </Button>
      </div>
      <Default open={open} setOpen={setOpen} />
    </PageShell>;
}`,...c.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <PageShell>
      <div className={\`\${prefix}launcher-button\`}>
        <Button onClick={() => setOpen(!open)}>
          {open ? 'Close SidePanel' : 'Open SidePanel'}
        </Button>
      </div>
      <WithValidation open={open} setOpen={setOpen} />
    </PageShell>;
}`,...h.parameters?.docs?.source}}};const Ue=["createSidePanel","withFormValidation"];export{Ue as __namedExportsOrder,c as createSidePanel,Ge as default,h as withFormValidation};
//# sourceMappingURL=CreateSidePanel.stories-CtIErO5z.js.map
