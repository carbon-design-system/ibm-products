import{R as e,r as u}from"./index-BwDkhjyp.js";import{c as ee,b as T}from"./index-CO-HQMMN.js";import{p as S,B as I}from"./settings-9_3hiHpE.js";import{D as C}from"./Dropdown-CIyg-5U1.js";import{F as O}from"./FormGroup-C6KGJYle.js";import{G as E}from"./Grid-CpAb88bR.js";import{C as $}from"./Column-C2vw5Ugh.js";import{N as i}from"./NumberInput-CIYFWR2V.js";import{H as te,a as ne}from"./HeaderName-B9slWelk.js";import{H as ie}from"./HeaderContainer-CHaqNmwG.js";import{A as ae,a as re}from"./index-C5SNi40Q.js";import{T as N}from"./TextInput-ChL1gOHC.js";import{P as n}from"./index-Dk74W0Oi.js";import{g as oe}from"./devtools-7ohusRRR.js";import{F as se}from"./Form-KmNZSuVG.js";import{u as le}from"./uuidv4-BQrI85uz.js";import{S as me}from"./SidePanel-BEjIuYNK.js";import{S as pe}from"./StoryDocsPage-DrAYFZur.js";import{s as ce}from"./sidePanelDecorator-82Ye0aHI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BONylQH5.js";import"./index-CJvxHwuA.js";import"./events-OVwOsPzJ.js";import"./index-DQ9l4IMz.js";import"./index-Czv2bu3D.js";import"./extends-CCbyfPlC.js";import"./index-DcAOwtUU.js";import"./tslib.es6-B4_xh3D5.js";import"./FormContext-C7kRVu4t.js";import"./mergeRefs-CTUecegF.js";import"./bucket-18-BI__9nmH.js";import"./bucket-2-Bt1jIBkN.js";import"./useNormalizedInputProps-BXOXUZo5.js";import"./Text-DeIkfaUm.js";import"./bucket-16-C765DF6-.js";import"./bucket-0-a_zZqU1p.js";import"./Link-CG0FgCAu.js";import"./bucket-17-ClE8iwID.js";import"./useAnnouncer-Dwt0jqXi.js";import"./motionConstants-CR5hPmRc.js";import"./use-reduced-motion-BisnjenD.js";import"./index-DkUr2NOz.js";import"./props-helper-2oDpPmvU.js";import"./usePrefersReducedMotion-DeqUFceN.js";import"./useIsomorphicEffect-D7JMtAof.js";import"./useFocus-CpNJuhjW.js";import"./wait-CTNFjQS8.js";import"./ActionSet-CseuYsKo.js";import"./ButtonSet-Cn6zokRw.js";import"./InlineLoading-BdVs8Ys4.js";import"./bucket-6-DcTgwLU8.js";import"./usePreviousValue-Cw-zRxyE.js";import"./index-CuSCUedZ.js";import"./iframe-DwMp3N-J.js";import"../sb-preview/runtime.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./story-helper-6_fmjwZ-.js";const b=`${S.prefix}--create-side-panel`,P="CreateSidePanel";let o=e.forwardRef(({className:s,children:l,disableSubmit:m,formTitle:a,formDescription:r,id:p,onRequestClose:f,onRequestSubmit:c,open:d,primaryButtonText:x,secondaryButtonText:z,selectorPageContent:_,selectorPrimaryFocus:Y,subtitle:j,title:J,...K},Q)=>{const X=[{label:x,onClick:Z=>{Z.preventDefault(),c==null||c()},kind:"primary",disabled:m,type:"submit"},{label:z,onClick:f,kind:"secondary"}],R=le();return _&&e.createElement(me,{...K,id:p,open:d,ref:Q,selectorPageContent:_,onRequestClose:f,title:J,subtitle:j,selectorPrimaryFocus:Y,...oe(P),placement:"right",slideIn:!0,animateTitle:!1,className:ee(b,s),size:"md",actions:X},e.createElement("h3",{className:`${b}__form-title-text ${b}__content-text`,id:R},a),e.createElement("p",{className:`${b}__form-description-text ${b}__content-text`},r),e.createElement(se,{className:`${b}__form`,"aria-labelledby":R},l))});o=S.checkComponentEnabled(o,P);o.displayName=P;o.propTypes={children:n.oneOfType([n.arrayOf(n.node),n.node]).isRequired,className:n.string,description:n.node,disableSubmit:n.bool,formDescription:n.node,formTitle:n.node.isRequired,id:n.string,onRequestClose:n.func,onRequestSubmit:n.func,open:n.bool,primaryButtonText:n.string.isRequired,secondaryButtonText:n.string.isRequired,selectorPageContent:n.string.isRequired,selectorPrimaryFocus:n.node.isRequired,slug:n.node,subtitle:n.node,title:n.string.isRequired};o.__docgenInfo={description:"Use with medium complexity creations if the user needs page context. On-page content can be seen and interacted with.",methods:[],displayName:"CreateSidePanel",props:{className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}},description:{required:!1,tsType:{name:"ReactNode"},description:"The description of the CreateSidePanel serves to provide more information about the form within the panel.",type:{name:"node"}},disableSubmit:{required:!1,tsType:{name:"boolean"},description:"Specifies a boolean for disabling or enabling the primary button. This is important for form validation\nReturning `true` prevents the primary button from being clicked until required fields are completed.",type:{name:"bool"}},formDescription:{required:!1,tsType:{name:"ReactNode"},description:"Specifies an optional field that provides a additional context for a form",type:{name:"node"}},formTitle:{required:!0,tsType:{name:"ReactNode"},description:"Specifies a required field that provides a title for a form",type:{name:"node"}},id:{required:!1,tsType:{name:"string"},description:"Unique identifier",type:{name:"string"}},open:{required:!1,tsType:{name:"boolean"},description:"Specifies whether the CreateSidePanel is open or not.",type:{name:"bool"}},primaryButtonText:{required:!0,tsType:{name:"string"},description:"Specifies the primary button's text in the modal.",type:{name:"string"}},secondaryButtonText:{required:!0,tsType:{name:"string"},description:"Specifies the secondary button's text in the modal.",type:{name:"string"}},selectorPageContent:{required:!0,tsType:{name:"string"},description:"This is the selector to the element that contains all of the page content that will shrink when the panel is a slide in.\nThis prop is required since create flows use the `slideIn` variant of the side panel.",type:{name:"string"}},selectorPrimaryFocus:{required:!0,tsType:{name:"string"},description:"Specifies which DOM element in the form should be focused.",type:{name:"node"}},slug:{required:!1,tsType:{name:"ReactNode"},description:"**Experimental:** Provide a `Slug` component to be rendered inside the `SidePanel` component",type:{name:"node"}},subtitle:{required:!1,tsType:{name:"ReactNode"},description:"The subtitle of the CreateSidePanel is optional and serves to provide more information about the modal.",type:{name:"node"}},title:{required:!0,tsType:{name:"string"},description:"The title of the CreateSidePanel is usually the product or service name.",type:{name:"string"}},children:{description:"Sets the body content of the create side panel",type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"}]},required:!0},onRequestClose:{description:`Specifies an optional handler which is called when the CreateSidePanel
is closed.`,type:{name:"func"},required:!1},onRequestSubmit:{description:`Specifies an optional handler which is called when the CreateSidePanel
primary button is pressed.`,type:{name:"func"},required:!1}}};const de=".create-side-panel-stories__example-container{display:grid;align-items:flex-end;grid-gap:.75rem;grid-template-columns:1fr 1fr}.create-side-panel-stories__example-form-group .cds--label{margin-bottom:0}.c4p--create-side-panel .cds--number__control-btn:before,.c4p--create-side-panel .cds--number__control-btn:after{background-color:var(--cds-field-02, #ffffff)}.create-side-panel-stories__container{display:flex;height:100vh;flex-direction:column}.create-side-panel-stories__content{flex-grow:1}.create-side-panel-stories__toggle{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}",V=()=>e.createElement(pe,{altGuidelinesHref:[{href:"https://pages.github.ibm.com/carbon/ibm-products/patterns/create-flows/usage/#side-panel",label:"Carbon create flows side panel usage guidelines"}],blocks:[{story:h},{title:"Form validation",description:`All forms, including that within the \`CreateSidePanel\` should follow @carbon/ibm-products
guidelines for form validation.

This includes the following:

- The \`Submit\` button in the side panel should be disabled, until all required
  inputs are filled in and valid
- All required inputs should _only_ throw an invalid error _after_ the element
  loses focus
- All optional form fields should have an \`(optional)\` text at the end of the
  input \`labelText\`. Optional should always be in parentheses

You can find more information on how to validate your form fields in
[Carbon's Form usage page](https://www.carbondesignsystem.com/components/form/usage).`}]});V.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const F=`${S.prefix}--create-side-panel`,t="create-side-panel-stories__",D=e.createElement(ae,{className:"slug-container",size:"xs"},e.createElement(re,null,e.createElement("div",null,e.createElement("p",{className:"secondary"},"AI Explained"),e.createElement("h1",null,"84%"),e.createElement("p",{className:"secondary bold"},"Confidence score"),e.createElement("p",{className:"secondary"},"This is not really Lorem Ipsum but the spell checker did not like the previous text with it's non-words which is why this unwieldy sentence, should one choose to call it that, here."),e.createElement("hr",null),e.createElement("p",{className:"secondary"},"Model type"),e.createElement("p",{className:"bold"},"Foundation model")))),w={title:"Create partitions",subtitle:"Specify the details of the partitions you're creating",formTitle:"Core configuration",formDescription:"We recommend you fill out and evaluate these details at a minimum before deploying your topic.",primaryButtonText:"Create",secondaryButtonText:"Cancel"},q=["Day(s)","Month(s)","Year(s)"],v=()=>e.createElement(ie,{render:()=>e.createElement(te,null,e.createElement(ne,{href:"/",prefix:"IBM"},"Cloud Pak"))}),Nt={title:"IBM Products/Patterns/Create flows/CreateSidePanel",component:o,tags:["autodocs"],parameters:{layout:"fullscreen",styles:de,docs:{page:V}},argTypes:{slug:{control:{type:"select",labels:{0:"No AI slug",1:"with AI Slug"},default:0},options:[0,1]}},decorators:[ce(v,t)]},ue=({slug:s,...l})=>{const m=T(),[a,r]=u.useState(!1);return e.createElement(e.Fragment,null,v(),e.createElement(E,{id:"ibm-products-page-content"},e.createElement($,{lg:{span:2,start:8}},e.createElement(I,{onClick:()=>r(!a)},a?"Close side panel":"Open side panel"))),e.createElement(o,{...l,open:a,onRequestClose:()=>r(!1),onRequestSubmit:()=>r(!1),selectorPrimaryFocus:`.${m}--text-input`,slug:s&&D},e.createElement(N,{id:"create-side-panel-topic-name-a",labelText:"Topic name",className:`${t}form-item`,placeholder:"Enter topic name"}),e.createElement(i,{id:"1",className:`${t}form-item`,label:"Partitions",min:0,max:50,value:1,iconDescription:"Choose a number"}),e.createElement(i,{id:"2",className:`${t}form-item`,label:"Replicas",min:0,max:50,value:1,iconDescription:"Choose a number"}),e.createElement(i,{id:"3",className:`${t}form-item`,label:"Minimum in-sync replicas",min:0,max:50,value:1,iconDescription:"Choose a number"}),e.createElement("div",{style:{display:"grid",alignItems:"flex-end",gridGap:"0.75rem",gridTemplateColumns:"1fr 1fr"}},e.createElement(i,{id:"4",className:`${t}form-item`,label:"Retention time",min:0,max:50,value:30,iconDescription:"Choose a number"}),e.createElement(C,{id:"create-side-panel-dropdown-options-a",items:q,initialSelectedItem:"Day(s)",label:"Options",titleText:"Options",className:`${t}form-item`})),e.createElement(i,{id:"5",className:`${t}form-item`,label:"Minimum in-sync replicas",min:0,max:50,value:1,iconDescription:"Choose a number"})))},fe=({slug:s,...l})=>{const m=T(),[a,r]=u.useState(!1),[p,f]=u.useState(""),[c,d]=u.useState(!1);return e.createElement(e.Fragment,null,v(),e.createElement(E,{id:"ibm-products-page-content"},e.createElement($,{lg:{span:2,start:8}},e.createElement(I,{onClick:()=>r(!a)},a?"Close side panel":"Open side panel"))),e.createElement(o,{...l,open:a,onRequestClose:()=>r(!1),onRequestSubmit:()=>r(!1),disableSubmit:!p.length,selectorPrimaryFocus:`.${m}--text-input`,slug:s&&D},e.createElement(N,{id:"create-side-panel-topic-name-b",labelText:"Topic name",className:`${t}form-item`,placeholder:"Enter topic name",onChange:x=>{f(x.target.value),d(!1)},onBlur:()=>{p.length===0&&d(!0)},invalid:c,invalidText:"This is a required field"}),e.createElement(i,{id:"1",className:`${t}form-item`,label:"Partitions",min:0,max:50,value:1,iconDescription:"Choose a number"}),e.createElement(i,{id:"2",className:`${t}form-item`,label:"Replicas",min:0,max:50,value:1,iconDescription:"Choose a number"}),e.createElement(i,{id:"3",className:`${t}form-item`,label:"Minimum in-sync replicas",min:0,max:50,value:1,iconDescription:"Choose a number"}),e.createElement("div",{className:`${t}example-container`},e.createElement(i,{id:"4",className:`${t}form-item`,label:"Retention time",min:0,max:50,value:30,iconDescription:"Choose a number"}),e.createElement(C,{id:"create-side-panel-dropdown-options-b","aria-label":"Dropdown",initialSelectedItem:"Day(s)",items:q,label:"Options",className:`${t}form-item`})),e.createElement(i,{id:"3",className:`${t}form-item`,label:"Minimum in-sync replicas",min:0,max:50,value:1,iconDescription:"Choose a number"})))},be=({slug:s,...l})=>{const m=T(),[a,r]=u.useState(!1),[p,f]=u.useState(""),[c,d]=u.useState(!1);return e.createElement(e.Fragment,null,v(),e.createElement(E,{id:"ibm-products-page-content"},e.createElement($,{lg:{span:2,start:8}},e.createElement(I,{onClick:()=>r(!a)},a?"Close side panel":"Open side panel"))),e.createElement(o,{...l,open:a,onRequestClose:()=>r(!1),onRequestSubmit:()=>r(!1),disableSubmit:!p.length,selectorPrimaryFocus:`.${m}--text-input`,slug:s&&D},e.createElement(O,{className:`${F}__form ${t}example-form-group`,legendText:"Personal information"},e.createElement(N,{id:"create-side-panel-first-name",labelText:"First name",className:`${t}form-item`,placeholder:"Enter topic name",onChange:x=>{f(x.target.value),d(!1)},onBlur:()=>{p.length===0&&d(!0)},invalid:c,invalidText:"This is a required field"}),e.createElement(C,{id:"create-side-panel-dropdown-bu",titleText:"Business unit","aria-label":"Dropdown",initialSelectedItem:"IBM Cloud platform",items:["IBM Cloud platform","AI Ops","Watson"],label:"Business unit",className:`${t}form-item`})),e.createElement(O,{className:`${F}__form ${t}example-form-group`,legendText:"Topic information"},e.createElement(N,{id:"create-side-panel-topic-name-c",labelText:"Topic name",className:`${t}form-item`,placeholder:"Enter topic name"}),e.createElement(i,{id:"1",className:`${t}form-item`,label:"Partitions",min:0,max:50,value:1,iconDescription:"Choose a number"}),e.createElement(i,{id:"2",className:`${t}form-item`,label:"Replicas",min:0,max:50,value:1,iconDescription:"Choose a number"}),e.createElement(i,{id:"3",className:`${t}form-item`,label:"Minimum in-sync replicas",min:0,max:50,value:1,iconDescription:"Choose a number"}),e.createElement("div",{className:`${t}example-container`},e.createElement(i,{id:"4",className:`${t}form-item`,label:"Retention time",min:0,max:50,value:30,iconDescription:"Choose a number"}),e.createElement(C,{id:"create-side-panel-dropdown-options-c","aria-label":"Dropdown",initialSelectedItem:"Day(s)",items:q,label:"Options",className:`${t}form-item`})),e.createElement(i,{id:"3",className:`${t}form-item`,label:"Minimum in-sync replicas",min:0,max:50,value:1,iconDescription:"Choose a number"}))))},h=ue.bind({});h.args={selectorPageContent:"#ibm-products-page-content",...w};const g=fe.bind({});g.args={selectorPageContent:"#ibm-products-page-content",...w};const y=be.bind({});y.args={selectorPageContent:"#ibm-products-page-content",...w};var B,M,k;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`({
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
}`,...(k=(M=h.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var G,A,H;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`({
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
}`,...(H=(A=g.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var W,U,L;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`({
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
}`,...(L=(U=y.parameters)==null?void 0:U.docs)==null?void 0:L.source}}};const vt=["Default","WithFormValidation","WithMultipleForms"];export{h as Default,g as WithFormValidation,y as WithMultipleForms,vt as __namedExportsOrder,Nt as default};
