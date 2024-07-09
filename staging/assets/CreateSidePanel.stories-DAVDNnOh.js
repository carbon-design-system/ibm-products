import{p as T,j as e,B as S}from"./settings-BiUEFdm2.js";import{R as ee,r as u}from"./index-BwDkhjyp.js";import{c as ie,u as I}from"./deprecate-D9ms-jbM.js";import{D as C}from"./Dropdown-CU2s9Kq8.js";import{F as O}from"./FormGroup-CVk9XJ_R.js";import{G as $}from"./Grid-sFQW4EYz.js";import{C as P}from"./Column-joQvaXDX.js";import{N as t}from"./NumberInput-CdfmSC9K.js";import{H as ne,a as te}from"./HeaderName-DQ5XwvUg.js";import{H as ae}from"./HeaderContainer-CIYsqeKk.js";import{S as se,a as oe}from"./index-Bo7SW2KM.js";import{T as N}from"./TextInput-CjYtA_nO.js";import{P as n}from"./index-Dk74W0Oi.js";import{g as re}from"./devtools-BPcQvzXy.js";import{F as le}from"./Form-Cl1Tfi_h.js";import{u as me}from"./uuidv4-BQrI85uz.js";import{S as pe}from"./SidePanel-DzCtXUcy.js";import{S as ce}from"./StoryDocsPage-BuwgUq5r.js";import{s as de}from"./sidePanelDecorator-Blj0khb9.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./events-Bq7WR1mU.js";import"./index-BONylQH5.js";import"./index-mZNF_Ndq.js";import"./extends-CCbyfPlC.js";import"./index-DcAOwtUU.js";import"./tslib.es6-B4_xh3D5.js";import"./FormContext-C7kRVu4t.js";import"./mergeRefs-CTUecegF.js";import"./bucket-17-CArjO86K.js";import"./index-gKY8typL.js";import"./useNormalizedInputProps-DRpk_7sW.js";import"./Text-_TFgs5hl.js";import"./bucket-14-u3bYiptr.js";import"./bucket-0-D7rUCVax.js";import"./Link-CeOVr8UJ.js";import"./bucket-16-C-1D9aPX.js";import"./useAnnouncer-MW4fVOqQ.js";import"./index-DkUr2NOz.js";import"./props-helper-1oU9hECe.js";import"./motionConstants-CR5hPmRc.js";import"./use-reduced-motion-BisnjenD.js";import"./usePrefersReducedMotion-DeqUFceN.js";import"./useIsomorphicEffect-D7JMtAof.js";import"./ActionSet-DPSyJhT2.js";import"./ButtonSet-CqsYbwZH.js";import"./InlineLoading-DEQVZSgg.js";import"./bucket-5-BuK6y5Rd.js";import"./usePreviousValue-DDnp_zt4.js";import"./useFocus-CSvq-1pJ.js";import"./index-CDYzkStP.js";import"./iframe-j3s5A4v9.js";import"../sb-preview/runtime.js";import"./index-C2eUe6cH.js";import"./index-BjQFKvNH.js";import"./isSymbol-BZYRlrjc.js";import"./index-DrFu-skq.js";import"./story-helper-YTYnELA9.js";const x=`${T.prefix}--create-side-panel`,j="CreateSidePanel";let o=ee.forwardRef(({className:r,children:l,disableSubmit:m,formTitle:a,formDescription:s,id:p,onRequestClose:f,onRequestSubmit:c,open:d,primaryButtonText:b,secondaryButtonText:z,selectorPageContent:_,selectorPrimaryFocus:Y,subtitle:L,title:J,...K},Q)=>{const X=[{label:b,onClick:Z=>{Z.preventDefault(),c==null||c()},kind:"primary",disabled:m,type:"submit"},{label:z,onClick:f,kind:"secondary"}],R=me();return _&&e.jsxs(pe,{...K,id:p,open:d,ref:Q,selectorPageContent:_,onRequestClose:f,title:J,subtitle:L,selectorPrimaryFocus:Y,...re(j),placement:"right",slideIn:!0,animateTitle:!1,className:ie(x,r),size:"md",actions:X,children:[e.jsx("h3",{className:`${x}__form-title-text ${x}__content-text`,id:R,children:a}),e.jsx("p",{className:`${x}__form-description-text ${x}__content-text`,children:s}),e.jsx(le,{className:`${x}__form`,"aria-labelledby":R,children:l})]})});o=T.checkComponentEnabled(o,j);o.displayName=j;o.propTypes={children:n.oneOfType([n.arrayOf(n.node),n.node]).isRequired,className:n.string,description:n.node,disableSubmit:n.bool,formDescription:n.node,formTitle:n.node.isRequired,id:n.string,onRequestClose:n.func,onRequestSubmit:n.func,open:n.bool,primaryButtonText:n.string.isRequired,secondaryButtonText:n.string.isRequired,selectorPageContent:n.string.isRequired,selectorPrimaryFocus:n.node.isRequired,slug:n.node,subtitle:n.node,title:n.string.isRequired};o.__docgenInfo={description:"Use with medium complexity creations if the user needs page context. On-page content can be seen and interacted with.",methods:[],displayName:"CreateSidePanel",props:{className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}},description:{required:!1,tsType:{name:"ReactNode"},description:"The description of the CreateSidePanel serves to provide more information about the form within the panel.",type:{name:"node"}},disableSubmit:{required:!1,tsType:{name:"boolean"},description:"Specifies a boolean for disabling or enabling the primary button. This is important for form validation\nReturning `true` prevents the primary button from being clicked until required fields are completed.",type:{name:"bool"}},formDescription:{required:!1,tsType:{name:"ReactNode"},description:"Specifies an optional field that provides a additional context for a form",type:{name:"node"}},formTitle:{required:!0,tsType:{name:"ReactNode"},description:"Specifies a required field that provides a title for a form",type:{name:"node"}},id:{required:!1,tsType:{name:"string"},description:"Unique identifier",type:{name:"string"}},open:{required:!1,tsType:{name:"boolean"},description:"Specifies whether the CreateSidePanel is open or not.",type:{name:"bool"}},primaryButtonText:{required:!0,tsType:{name:"string"},description:"Specifies the primary button's text in the modal.",type:{name:"string"}},secondaryButtonText:{required:!0,tsType:{name:"string"},description:"Specifies the secondary button's text in the modal.",type:{name:"string"}},selectorPageContent:{required:!0,tsType:{name:"string"},description:"This is the selector to the element that contains all of the page content that will shrink when the panel is a slide in.\nThis prop is required since create flows use the `slideIn` variant of the side panel.",type:{name:"string"}},selectorPrimaryFocus:{required:!0,tsType:{name:"string"},description:"Specifies which DOM element in the form should be focused.",type:{name:"node"}},slug:{required:!1,tsType:{name:"ReactNode"},description:"**Experimental:** Provide a `Slug` component to be rendered inside the `SidePanel` component",type:{name:"node"}},subtitle:{required:!1,tsType:{name:"ReactNode"},description:"The subtitle of the CreateSidePanel is optional and serves to provide more information about the modal.",type:{name:"node"}},title:{required:!0,tsType:{name:"string"},description:"The title of the CreateSidePanel is usually the product or service name.",type:{name:"string"}},children:{description:"Sets the body content of the create side panel",type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"}]},required:!0},onRequestClose:{description:`Specifies an optional handler which is called when the CreateSidePanel
is closed.`,type:{name:"func"},required:!1},onRequestSubmit:{description:`Specifies an optional handler which is called when the CreateSidePanel
primary button is pressed.`,type:{name:"func"},required:!1}}};const ue=".create-side-panel-stories__example-container{display:grid;align-items:flex-end;grid-gap:.75rem;grid-template-columns:1fr 1fr}.create-side-panel-stories__example-form-group .cds--label{margin-bottom:0}.c4p--create-side-panel .cds--number__control-btn:before,.c4p--create-side-panel .cds--number__control-btn:after{background-color:var(--cds-field-02, #ffffff)}.create-side-panel-stories__container{display:flex;height:100vh;flex-direction:column}.create-side-panel-stories__content{flex-grow:1}.create-side-panel-stories__toggle{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}",V=()=>e.jsx(ce,{altGuidelinesHref:[{href:"https://pages.github.ibm.com/cdai-design/pal/patterns/creation-flows/usage#side-panel",label:"Carbon create flows side panel usage guidelines"}],blocks:[{story:h},{title:"Form validation",description:`All forms, including that within the \`CreateSidePanel\` should follow @carbon/ibm-products
guidelines for form validation.

This includes the following:

- The \`Submit\` button in the side panel should be disabled, until all required
  inputs are filled in and valid
- All required inputs should _only_ throw an invalid error _after_ the element
  loses focus
- All optional form fields should have an \`(optional)\` text at the end of the
  input \`labelText\`. Optional should always be in parentheses

You can find more information on how to validate your form fields in
[Carbon's Form usage page](https://www.carbondesignsystem.com/components/form/usage).`}]});V.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const F=`${T.prefix}--create-side-panel`,i="create-side-panel-stories__",D=e.jsx(se,{className:"slug-container",size:"xs",children:e.jsx(oe,{children:e.jsxs("div",{children:[e.jsx("p",{className:"secondary",children:"AI Explained"}),e.jsx("h1",{children:"84%"}),e.jsx("p",{className:"secondary bold",children:"Confidence score"}),e.jsx("p",{className:"secondary",children:"This is not really Lorem Ipsum but the spell checker did not like the previous text with it's non-words which is why this unwieldy sentence, should one choose to call it that, here."}),e.jsx("hr",{}),e.jsx("p",{className:"secondary",children:"Model type"}),e.jsx("p",{className:"bold",children:"Foundation model"})]})})}),w={title:"Create partitions",subtitle:"Specify the details of the partitions you're creating",formTitle:"Core configuration",formDescription:"We recommend you fill out and evaluate these details at a minimum before deploying your topic.",primaryButtonText:"Create",secondaryButtonText:"Cancel"},q=["Day(s)","Month(s)","Year(s)"],v=()=>e.jsx(ae,{render:()=>e.jsx(ne,{children:e.jsx(te,{href:"/",prefix:"IBM",children:"Cloud Pak"})})}),Ni={title:"IBM Products/Patterns/Create flows/CreateSidePanel",component:o,tags:["autodocs"],parameters:{layout:"fullscreen",styles:ue,docs:{page:V}},argTypes:{slug:{control:{type:"select",labels:{0:"No AI slug",1:"with AI Slug"},default:0},options:[0,1]}},decorators:[de(v,i)]},fe=({slug:r,...l})=>{const m=I(),[a,s]=u.useState(!1);return e.jsxs(e.Fragment,{children:[v(),e.jsx($,{id:"ibm-products-page-content",children:e.jsx(P,{lg:{span:2,start:8},children:e.jsx(S,{onClick:()=>s(!a),children:a?"Close side panel":"Open side panel"})})}),e.jsxs(o,{...l,open:a,onRequestClose:()=>s(!1),onRequestSubmit:()=>s(!1),selectorPrimaryFocus:`.${m}--text-input`,slug:r&&D,children:[e.jsx(N,{id:"create-side-panel-topic-name-a",labelText:"Topic name",className:`${i}form-item`,placeholder:"Enter topic name"}),e.jsx(t,{id:"1",className:`${i}form-item`,label:"Partitions",min:0,max:50,value:1,iconDescription:"Choose a number"}),e.jsx(t,{id:"2",className:`${i}form-item`,label:"Replicas",min:0,max:50,value:1,iconDescription:"Choose a number"}),e.jsx(t,{id:"3",className:`${i}form-item`,label:"Minimum in-sync replicas",min:0,max:50,value:1,iconDescription:"Choose a number"}),e.jsxs("div",{style:{display:"grid",alignItems:"flex-end",gridGap:"0.75rem",gridTemplateColumns:"1fr 1fr"},children:[e.jsx(t,{id:"4",className:`${i}form-item`,label:"Retention time",min:0,max:50,value:30,iconDescription:"Choose a number"}),e.jsx(C,{id:"create-side-panel-dropdown-options-a",items:q,initialSelectedItem:"Day(s)",label:"Options",titleText:"Options",className:`${i}form-item`})]}),e.jsx(t,{id:"5",className:`${i}form-item`,label:"Minimum in-sync replicas",min:0,max:50,value:1,iconDescription:"Choose a number"})]})]})},xe=({slug:r,...l})=>{const m=I(),[a,s]=u.useState(!1),[p,f]=u.useState(""),[c,d]=u.useState(!1);return e.jsxs(e.Fragment,{children:[v(),e.jsx($,{id:"ibm-products-page-content",children:e.jsx(P,{lg:{span:2,start:8},children:e.jsx(S,{onClick:()=>s(!a),children:a?"Close side panel":"Open side panel"})})}),e.jsxs(o,{...l,open:a,onRequestClose:()=>s(!1),onRequestSubmit:()=>s(!1),disableSubmit:!p.length,selectorPrimaryFocus:`.${m}--text-input`,slug:r&&D,children:[e.jsx(N,{id:"create-side-panel-topic-name-b",labelText:"Topic name",className:`${i}form-item`,placeholder:"Enter topic name",onChange:b=>{f(b.target.value),d(!1)},onBlur:()=>{p.length===0&&d(!0)},invalid:c,invalidText:"This is a required field"}),e.jsx(t,{id:"1",className:`${i}form-item`,label:"Partitions",min:0,max:50,value:1,iconDescription:"Choose a number"}),e.jsx(t,{id:"2",className:`${i}form-item`,label:"Replicas",min:0,max:50,value:1,iconDescription:"Choose a number"}),e.jsx(t,{id:"3",className:`${i}form-item`,label:"Minimum in-sync replicas",min:0,max:50,value:1,iconDescription:"Choose a number"}),e.jsxs("div",{className:`${i}example-container`,children:[e.jsx(t,{id:"4",className:`${i}form-item`,label:"Retention time",min:0,max:50,value:30,iconDescription:"Choose a number"}),e.jsx(C,{id:"create-side-panel-dropdown-options-b","aria-label":"Dropdown",initialSelectedItem:"Day(s)",items:q,label:"Options",className:`${i}form-item`})]}),e.jsx(t,{id:"3",className:`${i}form-item`,label:"Minimum in-sync replicas",min:0,max:50,value:1,iconDescription:"Choose a number"})]})]})},he=({slug:r,...l})=>{const m=I(),[a,s]=u.useState(!1),[p,f]=u.useState(""),[c,d]=u.useState(!1);return e.jsxs(e.Fragment,{children:[v(),e.jsx($,{id:"ibm-products-page-content",children:e.jsx(P,{lg:{span:2,start:8},children:e.jsx(S,{onClick:()=>s(!a),children:a?"Close side panel":"Open side panel"})})}),e.jsxs(o,{...l,open:a,onRequestClose:()=>s(!1),onRequestSubmit:()=>s(!1),disableSubmit:!p.length,selectorPrimaryFocus:`.${m}--text-input`,slug:r&&D,children:[e.jsxs(O,{className:`${F}__form ${i}example-form-group`,legendText:"Personal information",children:[e.jsx(N,{id:"create-side-panel-first-name",labelText:"First name",className:`${i}form-item`,placeholder:"Enter topic name",onChange:b=>{f(b.target.value),d(!1)},onBlur:()=>{p.length===0&&d(!0)},invalid:c,invalidText:"This is a required field"}),e.jsx(C,{id:"create-side-panel-dropdown-bu",titleText:"Business unit","aria-label":"Dropdown",initialSelectedItem:"IBM Cloud platform",items:["IBM Cloud platform","AI Ops","Watson"],label:"Business unit",className:`${i}form-item`})]}),e.jsxs(O,{className:`${F}__form ${i}example-form-group`,legendText:"Topic information",children:[e.jsx(N,{id:"create-side-panel-topic-name-c",labelText:"Topic name",className:`${i}form-item`,placeholder:"Enter topic name"}),e.jsx(t,{id:"1",className:`${i}form-item`,label:"Partitions",min:0,max:50,value:1,iconDescription:"Choose a number"}),e.jsx(t,{id:"2",className:`${i}form-item`,label:"Replicas",min:0,max:50,value:1,iconDescription:"Choose a number"}),e.jsx(t,{id:"3",className:`${i}form-item`,label:"Minimum in-sync replicas",min:0,max:50,value:1,iconDescription:"Choose a number"}),e.jsxs("div",{className:`${i}example-container`,children:[e.jsx(t,{id:"4",className:`${i}form-item`,label:"Retention time",min:0,max:50,value:30,iconDescription:"Choose a number"}),e.jsx(C,{id:"create-side-panel-dropdown-options-c","aria-label":"Dropdown",initialSelectedItem:"Day(s)",items:q,label:"Options",className:`${i}form-item`})]}),e.jsx(t,{id:"3",className:`${i}form-item`,label:"Minimum in-sync replicas",min:0,max:50,value:1,iconDescription:"Choose a number"})]})]})]})},h=fe.bind({});h.args={selectorPageContent:"#ibm-products-page-content",...w};const g=xe.bind({});g.args={selectorPageContent:"#ibm-products-page-content",...w};const y=he.bind({});y.args={selectorPageContent:"#ibm-products-page-content",...w};var B,M,k;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`({
  slug,
  ...args
}) => {
  const carbonPrefix = usePrefix();
  const [open, setOpen] = useState(false);
  return <>
      {renderUIShellHeader()}
      <Grid id="ibm-products-page-content">
        <Column lg={{
        span: 2,
        start: 8
      }}>
          <Button onClick={() => setOpen(!open)}>
            {open ? 'Close side panel' : 'Open side panel'}
          </Button>
        </Column>
      </Grid>
      <CreateSidePanel {...args} open={open} onRequestClose={() => setOpen(false)} onRequestSubmit={() => setOpen(false)} selectorPrimaryFocus={\`.\${carbonPrefix}--text-input\`} slug={slug && sampleSlug}>
        <TextInput id="create-side-panel-topic-name-a" labelText="Topic name" className={\`\${prefix}form-item\`} placeholder="Enter topic name" />
        <NumberInput id="1" className={\`\${prefix}form-item\`} label="Partitions" min={0} max={50} value={1} iconDescription="Choose a number" />
        <NumberInput id="2" className={\`\${prefix}form-item\`} label="Replicas" min={0} max={50} value={1} iconDescription="Choose a number" />
        <NumberInput id="3" className={\`\${prefix}form-item\`} label="Minimum in-sync replicas" min={0} max={50} value={1} iconDescription="Choose a number" />
        <div style={{
        display: 'grid',
        alignItems: 'flex-end',
        gridGap: '0.75rem',
        gridTemplateColumns: '1fr 1fr'
      }}>
          <NumberInput id="4" className={\`\${prefix}form-item\`} label="Retention time" min={0} max={50} value={30} iconDescription="Choose a number" />
          <Dropdown id="create-side-panel-dropdown-options-a" items={items} initialSelectedItem="Day(s)" label="Options" titleText="Options" className={\`\${prefix}form-item\`} />
        </div>
        <NumberInput id="5" className={\`\${prefix}form-item\`} label="Minimum in-sync replicas" min={0} max={50} value={1} iconDescription="Choose a number" />
      </CreateSidePanel>
    </>;
}`,...(k=(M=h.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var G,E,H;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`({
  slug,
  ...args
}) => {
  const carbonPrefix = usePrefix();
  const [open, setOpen] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [invalid, setInvalid] = useState(false);
  return <>
      {renderUIShellHeader()}
      <Grid id="ibm-products-page-content">
        <Column lg={{
        span: 2,
        start: 8
      }}>
          <Button onClick={() => setOpen(!open)}>
            {open ? 'Close side panel' : 'Open side panel'}
          </Button>
        </Column>
      </Grid>
      <CreateSidePanel {...args} open={open} onRequestClose={() => setOpen(false)} onRequestSubmit={() => setOpen(false)} disableSubmit={!textInput.length} selectorPrimaryFocus={\`.\${carbonPrefix}--text-input\`} slug={slug && sampleSlug}>
        <TextInput id="create-side-panel-topic-name-b" labelText="Topic name" className={\`\${prefix}form-item\`} placeholder="Enter topic name" onChange={e => {
        setTextInput(e.target.value);
        setInvalid(false);
      }} onBlur={() => {
        textInput.length === 0 && setInvalid(true);
      }} invalid={invalid} invalidText="This is a required field" />
        <NumberInput id="1" className={\`\${prefix}form-item\`} label="Partitions" min={0} max={50} value={1} iconDescription="Choose a number" />
        <NumberInput id="2" className={\`\${prefix}form-item\`} label="Replicas" min={0} max={50} value={1} iconDescription="Choose a number" />
        <NumberInput id="3" className={\`\${prefix}form-item\`} label="Minimum in-sync replicas" min={0} max={50} value={1} iconDescription="Choose a number" />
        <div className={\`\${prefix}example-container\`}>
          <NumberInput id="4" className={\`\${prefix}form-item\`} label="Retention time" min={0} max={50} value={30} iconDescription="Choose a number" />
          <Dropdown id="create-side-panel-dropdown-options-b" aria-label="Dropdown" initialSelectedItem="Day(s)" items={items} label="Options" className={\`\${prefix}form-item\`} />
        </div>
        <NumberInput id="3" className={\`\${prefix}form-item\`} label="Minimum in-sync replicas" min={0} max={50} value={1} iconDescription="Choose a number" />
      </CreateSidePanel>
    </>;
}`,...(H=(E=g.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var A,W,U;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`({
  slug,
  ...args
}) => {
  const carbonPrefix = usePrefix();
  const [open, setOpen] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [invalid, setInvalid] = useState(false);
  return <>
      {renderUIShellHeader()}
      <Grid id="ibm-products-page-content">
        <Column lg={{
        span: 2,
        start: 8
      }}>
          <Button onClick={() => setOpen(!open)}>
            {open ? 'Close side panel' : 'Open side panel'}
          </Button>
        </Column>
      </Grid>
      <CreateSidePanel {...args} open={open} onRequestClose={() => setOpen(false)} onRequestSubmit={() => setOpen(false)} disableSubmit={!textInput.length} selectorPrimaryFocus={\`.\${carbonPrefix}--text-input\`} slug={slug && sampleSlug}>
        <FormGroup className={\`\${blockClass}__form \${prefix}example-form-group\`} legendText="Personal information">
          <TextInput id="create-side-panel-first-name" labelText="First name" className={\`\${prefix}form-item\`} placeholder="Enter topic name" onChange={e => {
          setTextInput(e.target.value);
          setInvalid(false);
        }} onBlur={() => {
          textInput.length === 0 && setInvalid(true);
        }} invalid={invalid} invalidText="This is a required field" />
          <Dropdown id="create-side-panel-dropdown-bu" titleText="Business unit" aria-label="Dropdown" initialSelectedItem="IBM Cloud platform" items={['IBM Cloud platform', 'AI Ops', 'Watson']} label="Business unit" className={\`\${prefix}form-item\`} />
        </FormGroup>
        <FormGroup className={\`\${blockClass}__form \${prefix}example-form-group\`} legendText="Topic information">
          <TextInput id="create-side-panel-topic-name-c" labelText="Topic name" className={\`\${prefix}form-item\`} placeholder="Enter topic name" />
          <NumberInput id="1" className={\`\${prefix}form-item\`} label="Partitions" min={0} max={50} value={1} iconDescription="Choose a number" />
          <NumberInput id="2" className={\`\${prefix}form-item\`} label="Replicas" min={0} max={50} value={1} iconDescription="Choose a number" />
          <NumberInput id="3" className={\`\${prefix}form-item\`} label="Minimum in-sync replicas" min={0} max={50} value={1} iconDescription="Choose a number" />
          <div className={\`\${prefix}example-container\`}>
            <NumberInput id="4" className={\`\${prefix}form-item\`} label="Retention time" min={0} max={50} value={30} iconDescription="Choose a number" />
            <Dropdown id="create-side-panel-dropdown-options-c" aria-label="Dropdown" initialSelectedItem="Day(s)" items={items} label="Options" className={\`\${prefix}form-item\`} />
          </div>
          <NumberInput id="3" className={\`\${prefix}form-item\`} label="Minimum in-sync replicas" min={0} max={50} value={1} iconDescription="Choose a number" />
        </FormGroup>
      </CreateSidePanel>
    </>;
}`,...(U=(W=y.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};const vi=["Default","WithFormValidation","WithMultipleForms"];export{h as Default,g as WithFormValidation,y as WithMultipleForms,vi as __namedExportsOrder,Ni as default};
