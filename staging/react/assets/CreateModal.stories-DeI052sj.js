var O=Object.defineProperty;var o=(a,e)=>O(a,"name",{value:e,configurable:!0});import{j as t,aH as B,aJ as R,e as n,c as F,B as g,r as c}from"./iframe-DU3fWsEq.js";import{useMDXComponents as T}from"./index-Y1jbeCiL.js";import{D as z}from"./Dropdown-DYfcOZ8h.js";import{T as I}from"./TextArea-BEgYS-x8.js";import{T as f}from"./TextInput--RpbZDfF.js";import{F as N}from"./Form-BIeJC-fj.js";import{C as P,M as D,a as A,b as W}from"./ComposedModal-DNlEtFPF.js";import{R as j}from"./RadioButton-aVRfOY8G.js";import{R as L}from"./RadioButtonGroup-9ebgYWnW.js";import"./preload-helper-Cc2_yIPf.js";import"./defaultItemToString-DDHghiWu.js";import"./index-Cp5_bPRb.js";import"./index-CnSnZ5hY.js";import"./bucket-19-Be1_xXYE.js";import"./downshift.esm-D4fflNyB.js";import"./FormContext-DWfhBwkE.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./useNormalizedInputProps-CiScQqEC.js";import"./Text-BMNkTgzs.js";import"./bucket-20-CmByzEsl.js";import"./index-BiE6xxiG.js";import"./LayerContext-Clj7bd5Z.js";import"./clamp-ekNJC_Xv.js";import"./toggleClass-DE6Cjo8X.js";import"./InlineLoading-DCLgadCg.js";import"./bucket-6-CYCyVP6N.js";import"./ButtonSet-TigcdyOE.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-bGeByaic.js";const V=".create-modal .cds--modal-close{display:none}@media(min-width:42rem){.create-modal .cds--modal-container{max-block-size:95%}}@media(min-width:66rem){.create-modal .cds--modal-container{max-block-size:95%}}.create-modal .cds--modal-header{border-block-end:1px solid var(--cds-layer-accent-01, #e0e0e0);margin-block-end:0;padding-block-end:.5rem;padding-inline-end:20%}.create-modal .cds--modal-footer .cds--btn{max-inline-size:none}.create-modal__subtitle{font-size:var(--cds-body-compact-01-font-size, .875rem);font-weight:var(--cds-body-compact-01-font-weight, 400);line-height:var(--cds-body-compact-01-line-height, 1.28572);letter-spacing:var(--cds-body-compact-01-letter-spacing, .16px);color:var(--cds-text-secondary, #525252);margin-block-end:.5rem}.create-modal__description{font-size:var(--cds-body-01-font-size, .875rem);font-weight:var(--cds-body-01-font-weight, 400);line-height:var(--cds-body-01-line-height, 1.42857);letter-spacing:var(--cds-body-01-letter-spacing, .16px);margin:.5rem 0 1rem;padding-inline-end:calc(20% - 1rem)}.create-modal__form .cds--fieldset{margin-block-end:0;min-inline-size:100%}.create-modal__form>*{margin-block-end:1rem}.create-modal__form>*:last-child{margin-block-end:0}";function C(a){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...T(),...a.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"create-modal",children:"Create Modal"}),`
`,t.jsxs(e.p,{children:[t.jsx(e.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/patterns/create-flows/usage/#modal",rel:"nofollow",children:"Usage guidelines"}),`
|
`,t.jsx(e.a,{href:"https://www.carbondesignsystem.com/components/modal/usage",rel:"nofollow",children:"Carbon modal usage guidelines"}),`
|
`,t.jsx(e.a,{href:"https://react.carbondesignsystem.com/?path=/docs/components-modal",rel:"nofollow",children:"Carbon modal documentation"})]}),`
`,t.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#overview",children:"Overview"})}),`
`,t.jsxs(e.li,{children:[t.jsx(e.a,{href:"#example-usage",children:"Example usage"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#create-modal",children:"Create Modal"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#form-validation",children:"From validation"})}),`
`]}),`
`]}),`
`]}),`
`,t.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.code,{children:"CreateModal"}),` pattern provides a way for a user to quickly generate a new
resource. It is triggered by a user’s action, appears on top of the main page
content, and is persistent until dismissed. The purpose of this modal should be
immediately apparent to the user, with a clear and obvious path to completion.`]}),`
`,t.jsx(e.p,{children:"To build this pattern, we recommend including the following ingredients:"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"https://react.carbondesignsystem.com/?path=/docs/components-composedmodal",rel:"nofollow",children:"ComposedModal"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"https://react.carbondesignsystem.com/?path=/docs/components-button",rel:"nofollow",children:"Button"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"https://react.carbondesignsystem.com/?path=/docs/components-form",rel:"nofollow",children:"Form"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"https://react.carbondesignsystem.com/?path=/docs/components-formgroup",rel:"nofollow",children:"FormGroup"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"https://react.carbondesignsystem.com/?path=/docs/components-textinput",rel:"nofollow",children:"TextInput"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"https://react.carbondesignsystem.com/?path=/docs/components-textarea",rel:"nofollow",children:"TextArea"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"https://react.carbondesignsystem.com/?path=/docs/components-radiobutton",rel:"nofollow",children:"RadioButton"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"https://react.carbondesignsystem.com/?path=/docs/components-dropdown",rel:"nofollow",children:"DropDown"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"https://react.carbondesignsystem.com/?path=/docs/components-loading",rel:"nofollow",children:"Loading"})}),`
`]}),`
`,t.jsx(e.h3,{id:"example-usage",children:"Example usage"}),`
`,t.jsx(e.h3,{id:"create-modal-1",children:"Create Modal"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsxs(e.p,{children:[`💡 Check our
`,t.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products/src/patterns/CreateModal/example",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products/src/patterns/CreateModal/example",rel:"nofollow",children:t.jsx(e.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit react-patterns"})})}),`
`,`
`,t.jsx(B,{withSource:"none",children:t.jsx(R,{of:u})}),`
`,t.jsx(e.h3,{id:"form-validation",children:"Form validation"}),`
`,t.jsxs(e.p,{children:["All forms, including that within the ",t.jsx(e.code,{children:"CreateModal"}),` should follow
`,t.jsx(e.code,{children:"@carbon/ibm-products"})," guidelines for form validation."]}),`
`,t.jsx(e.p,{children:"This includes the following:"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:["The ",t.jsx(e.code,{children:"Submit"}),` button in the modal should be disabled, until all required inputs
are filled in and valid`]}),`
`,t.jsx(e.li,{children:`All required inputs should only throw an invalid error after the element loses
focus`}),`
`,t.jsxs(e.li,{children:["All optional form fields should have an ",t.jsx(e.code,{children:"(optional)"}),` text at the end of the
input `,t.jsx(e.code,{children:"labelText"}),". Optional should always be in parentheses"]}),`
`]}),`
`,t.jsxs(e.p,{children:[`You can find more information on how to validate your form fields in
`,t.jsx(e.a,{href:"https://carbondesignsystem.com/components/form/usage/",rel:"nofollow",children:"Carbon's Form usage page"}),"."]})]})}o(C,"_createMdxContent");function $(a={}){const{wrapper:e}={...T(),...a.components};return e?t.jsx(e,{...a,children:t.jsx(C,{...a})}):C(a)}o($,"MDXContent");const x="create-modal",y=n.forwardRef((a,e)=>{const{className:r,children:d,onRequestClose:m,onRequestSubmit:s,open:p,title:l,subtitle:h,description:i,secondaryButtonText:M,primaryButtonText:E,disableSubmit:k,selectorPrimaryFocus:_,...S}=a;return n.createElement(P,{...S,selectorPrimaryFocus:_,className:F(x,r),open:p,ref:e,"aria-label":l,size:"sm",preventCloseOnClickOutside:!0,onClose:o(()=>(m?.(),!1),"onClose")},n.createElement(D,{title:l,titleClassName:`${x}__title`},h&&n.createElement("p",{className:`${x}__subtitle`},h)),n.createElement(A,{hasForm:!0},i&&n.createElement("p",{className:`${x}__description`},i),n.createElement(N,{className:`${x}__form`,"aria-label":l,onSubmit:o(q=>q.preventDefault(),"onSubmit")},d)),n.createElement(W,null,n.createElement(g,{type:"button",kind:"secondary",onClick:m},M),n.createElement(g,{type:"submit",kind:"primary",onClick:s,disabled:k},E)))});y.displayName="CreateModal";y.__docgenInfo={description:"",methods:[],displayName:"CreateModal",props:{className:{required:!1,tsType:{name:"string"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"ReactNode"},description:""},description:{required:!0,tsType:{name:"ReactNode"},description:""},secondaryButtonText:{required:!0,tsType:{name:"string"},description:""},primaryButtonText:{required:!0,tsType:{name:"string"},description:""},disableSubmit:{required:!1,tsType:{name:"boolean"},description:""},selectorPrimaryFocus:{required:!0,tsType:{name:"string"},description:""}},composes:["PropsWithChildren"]};const H=["Option 0","Option 1","Option 2"],w=o(({open:a,setOpen:e})=>{const[r,d]=c.useState(""),[m,s]=c.useState(null),[p,l]=c.useState(""),h=o(()=>{d(""),s(null),l(""),e(!1)},"handleClose");return n.createElement(y,{open:a,onRequestClose:h,title:"Title",subtitle:"Your subtitle text will appear here",description:"This is example description text that will appear here in your modal",primaryButtonText:"Create",secondaryButtonText:"Cancel",selectorPrimaryFocus:"#text-input-1",onRequestSubmit:h},n.createElement(f,{id:"text-input-1",labelText:"Text input label",helperText:"Helper text goes here",placeholder:"Placeholder",value:r,onChange:o(i=>d(i.target.value),"onChange")}),n.createElement(z,{id:"dropdown-1",titleText:"Dropdown label",helperText:"This is some helper text",label:"Dropdown menu options",items:H,selectedItem:m,onChange:o(({selectedItem:i})=>s(i??null),"onChange")}),n.createElement(I,{id:"text-area-1",placeholder:"Placeholder text",labelText:"Text area label",helperText:"Optional helper text",value:p,onChange:o(i=>l(i.target.value),"onChange")}))},"StandardCreateModal");w.__docgenInfo={description:"",methods:[],displayName:"StandardCreateModal",props:{open:{required:!0,tsType:{name:"boolean"},description:""},setOpen:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const v=o(({open:a,setOpen:e})=>{const[r,d]=c.useState(""),[m,s]=c.useState(!1),p=o(()=>{d(""),s(!1),e(!1)},"handleClose");return n.createElement(y,{open:a,onRequestClose:p,title:"Title",subtitle:"Your subtitle text will appear here",description:"This is example description text that will appear here in your modal",primaryButtonText:"Create",secondaryButtonText:"Cancel",disableSubmit:r.length===0,selectorPrimaryFocus:"#text-input-1",onRequestSubmit:p},n.createElement(f,{id:"text-input-1",labelText:"Text input label",placeholder:"Placeholder",value:r,onChange:o(l=>{d(l.target.value),s(!1)},"onChange"),onBlur:o(()=>{r.length===0&&s(!0)},"onBlur"),invalid:m,invalidText:"This is a required field"}),n.createElement(f,{id:"text-input-2",labelText:"Text input label (optional)",placeholder:"Placeholder"}),n.createElement(f,{id:"text-input-3",labelText:"Text input label (optional)",placeholder:"Placeholder"}),n.createElement(L,{legendText:"Radio button legend text goes here",name:"radio-button-group",defaultSelected:"radio-1"},n.createElement(j,{labelText:"Radio-1",value:"radio-1",id:"radio-1"}),n.createElement(j,{labelText:"Radio-2",value:"radio-2",id:"radio-2"}),n.createElement(j,{labelText:"Radio-3",value:"radio-3",id:"radio-3"})))},"CreateModalWithValidation");v.__docgenInfo={description:"",methods:[],displayName:"CreateModalWithValidation",props:{open:{required:!0,tsType:{name:"boolean"},description:""},setOpen:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const Me={title:"Patterns/Create flows/Create Modal",component:o(()=>{},"component"),tags:["autodocs"],parameters:{styles:V,docs:{page:$}}},X=o(a=>{const[e,r]=c.useState(!1);return n.createElement(n.Fragment,null,n.createElement(g,{onClick:o(()=>r(!0),"onClick")},"Launch modal"),n.createElement(w,{open:e,setOpen:r,...a}))},"CreateModalPattern"),Y=o(a=>{const[e,r]=c.useState(!1);return n.createElement(n.Fragment,null,n.createElement(g,{onClick:o(()=>r(!0),"onClick")},"Launch CreateModal with form validation"),n.createElement(v,{open:e,setOpen:r,...a}))},"CreateModalWithValidationPattern"),u=X.bind({});u.args={};const b=Y.bind({});b.args={};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <>
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
      <StandardCreateModal open={open} setOpen={setOpen} {...args} />
    </>;
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <>
      <Button onClick={() => setOpen(true)}>
        Launch CreateModal with form validation
      </Button>
      <CreateModalWithValidation open={open} setOpen={setOpen} {...args} />
    </>;
}`,...b.parameters?.docs?.source}}};const Ee=["CreateModal","WithFormValidation"];export{u as CreateModal,b as WithFormValidation,Ee as __namedExportsOrder,Me as default};
//# sourceMappingURL=CreateModal.stories-DeI052sj.js.map
