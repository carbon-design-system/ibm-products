import{e,r as u}from"./index-DxDX2vOa.js";import{c as ee,P as n,b as T}from"./index-B_euquWE.js";import{p as I,B as S}from"./settings-0ThqPtR3.js";import{D as C}from"./Dropdown-DnYB61C4.js";import{F as R}from"./FormGroup-BHxKds7u.js";import{G as E}from"./Grid-JDZMd2Uv.js";import{C as $}from"./Column-cqxfba-8.js";import{N as i}from"./NumberInput-B5Nr-RgL.js";import{H as te,a as ne}from"./HeaderName-BfazdmlO.js";import{H as ie}from"./HeaderContainer-CoHg-_Zy.js";import{A as ae,a as oe}from"./index-DkxCE0a1.js";import{T as N}from"./TextInput-CqIwQ22u.js";import{g as re}from"./devtools-BlxCaI1L.js";import{F as se}from"./Form-Cr9ynH8v.js";import{u as le}from"./uuidv4-BQrI85uz.js";import{S as me}from"./SidePanel-WNdrDmyT.js";import{S as pe}from"./StoryDocsPage-CZd9HUNz.js";import{s as ce}from"./sidePanelDecorator-CBcAi2Kf.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CaMJXrh2.js";import"./events-OVwOsPzJ.js";import"./index-YDq2Pj7F.js";import"./index-D4Cc84yY.js";import"./tslib.es6-B4_xh3D5.js";import"./FormContext-Dj7olUH1.js";import"./mergeRefs-CTUecegF.js";import"./bucket-18-Dvh787Y8.js";import"./bucket-2-BDpMY3Ys.js";import"./useNormalizedInputProps-BaY27oQV.js";import"./Text-9AedOkae.js";import"./bucket-16-BwEHvyin.js";import"./bucket-0-DEgqxqZV.js";import"./Link-xS5JvnNe.js";import"./bucket-17-BLAXVSDb.js";import"./useAnnouncer-Dwt0jqXi.js";import"./motionConstants-BwVwxeFP.js";import"./use-reduced-motion-DIWO13co.js";import"./index-DkUr2NOz.js";import"./props-helper-DmbAnr2a.js";import"./usePrefersReducedMotion-CynZ7xBU.js";import"./useIsomorphicEffect-BPCmBl9Y.js";import"./useFocus-57u9QJvZ.js";import"./wait-CTNFjQS8.js";import"./ActionSet-0Lk-L5n-.js";import"./ButtonSet-epghEKVn.js";import"./InlineLoading-CIMtbZ0Q.js";import"./bucket-6-Cw3hdw1e.js";import"./usePreviousValue-CLgSY5iR.js";import"./index-DAMUIRRT.js";import"./iframe-C1IaBP6P.js";import"../sb-preview/runtime.js";import"./index-Df9so8jS.js";import"./index-CRUq0TYl.js";import"./index-DrFu-skq.js";import"./story-helper-BvAgcfdm.js";const b=`${I.prefix}--create-side-panel`,P="CreateSidePanel";let r=e.forwardRef(({className:s,children:l,disableSubmit:m,formTitle:a,formDescription:o,id:p,onRequestClose:f,onRequestSubmit:c,open:d,primaryButtonText:g,secondaryButtonText:z,selectorPageContent:_,selectorPrimaryFocus:Y,subtitle:j,title:J,...K},Q)=>{const X=[{label:g,onClick:Z=>{Z.preventDefault(),c==null||c()},kind:"primary",disabled:m,type:"submit"},{label:z,onClick:f,kind:"secondary"}],O=le();return _&&e.createElement(me,{...K,id:p,open:d,ref:Q,selectorPageContent:_,onRequestClose:f,title:J,subtitle:j,selectorPrimaryFocus:Y,...re(P),placement:"right",slideIn:!0,animateTitle:!1,className:ee(b,s),size:"md",actions:X},e.createElement("h3",{className:`${b}__form-title-text ${b}__content-text`,id:O},a),e.createElement("p",{className:`${b}__form-description-text ${b}__content-text`},o),e.createElement(se,{className:`${b}__form`,"aria-labelledby":O},l))});r=I.checkComponentEnabled(r,P);r.displayName=P;r.propTypes={children:n.oneOfType([n.arrayOf(n.node),n.node]).isRequired,className:n.string,description:n.node,disableSubmit:n.bool,formDescription:n.node,formTitle:n.node.isRequired,id:n.string,onRequestClose:n.func,onRequestSubmit:n.func,open:n.bool,primaryButtonText:n.string.isRequired,secondaryButtonText:n.string.isRequired,selectorPageContent:n.string.isRequired,selectorPrimaryFocus:n.node.isRequired,slug:n.node,subtitle:n.node,title:n.string.isRequired};r.__docgenInfo={description:"Use with medium complexity creations if the user needs page context. On-page content can be seen and interacted with.",methods:[],displayName:"CreateSidePanel",props:{className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}},description:{required:!1,tsType:{name:"ReactNode"},description:"The description of the CreateSidePanel serves to provide more information about the form within the panel.",type:{name:"node"}},disableSubmit:{required:!1,tsType:{name:"boolean"},description:"Specifies a boolean for disabling or enabling the primary button. This is important for form validation\nReturning `true` prevents the primary button from being clicked until required fields are completed.",type:{name:"bool"}},formDescription:{required:!1,tsType:{name:"ReactNode"},description:"Specifies an optional field that provides a additional context for a form",type:{name:"node"}},formTitle:{required:!0,tsType:{name:"ReactNode"},description:"Specifies a required field that provides a title for a form",type:{name:"node"}},id:{required:!1,tsType:{name:"string"},description:"Unique identifier",type:{name:"string"}},open:{required:!1,tsType:{name:"boolean"},description:"Specifies whether the CreateSidePanel is open or not.",type:{name:"bool"}},primaryButtonText:{required:!0,tsType:{name:"string"},description:"Specifies the primary button's text in the modal.",type:{name:"string"}},secondaryButtonText:{required:!0,tsType:{name:"string"},description:"Specifies the secondary button's text in the modal.",type:{name:"string"}},selectorPageContent:{required:!0,tsType:{name:"string"},description:"This is the selector to the element that contains all of the page content that will shrink when the panel is a slide in.\nThis prop is required since create flows use the `slideIn` variant of the side panel.",type:{name:"string"}},selectorPrimaryFocus:{required:!0,tsType:{name:"string"},description:"Specifies which DOM element in the form should be focused.",type:{name:"node"}},slug:{required:!1,tsType:{name:"ReactNode"},description:"**Experimental:** Provide a `Slug` component to be rendered inside the `SidePanel` component",type:{name:"node"}},subtitle:{required:!1,tsType:{name:"ReactNode"},description:"The subtitle of the CreateSidePanel is optional and serves to provide more information about the modal.",type:{name:"node"}},title:{required:!0,tsType:{name:"string"},description:"The title of the CreateSidePanel is usually the product or service name.",type:{name:"string"}},children:{description:"Sets the body content of the create side panel",type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"}]},required:!0},onRequestClose:{description:`Specifies an optional handler which is called when the CreateSidePanel
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
[Carbon's Form usage page](https://www.carbondesignsystem.com/components/form/usage).`},{title:"With AI Label",description:"An AI Label is intended for any scenario where something is being generated by AI to reinforce AI transparency, accountability, and explainability at the UI level. A Carbon AI Label can be provided to the Tearsheet component by including an `aiLabel` property on it and providing the carbon AILabel component as its own custom component.",source:{language:"html",code:`
<CreateSidePanel
  {...args}
  slug={
    // carbon AILabel component
    <AILabel
      className="ai-label-container"
      autoAlign={false}
      align="bottom-right"
    >
      <AILabelContent>... ...</AILabelContent>
    </AILabel>
  }
>
  ...
</CreateSidePanel>
                `}}]});V.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const F=`${I.prefix}--create-side-panel`,t="create-side-panel-stories__",D=e.createElement(ae,{className:"slug-container",size:"xs"},e.createElement(oe,null,e.createElement("div",null,e.createElement("p",{className:"secondary"},"AI Explained"),e.createElement("h1",null,"84%"),e.createElement("p",{className:"secondary bold"},"Confidence score"),e.createElement("p",{className:"secondary"},"This is not really Lorem Ipsum but the spell checker did not like the previous text with it's non-words which is why this unwieldy sentence, should one choose to call it that, here."),e.createElement("hr",null),e.createElement("p",{className:"secondary"},"Model type"),e.createElement("p",{className:"bold"},"Foundation model")))),w={title:"Create partitions",subtitle:"Specify the details of the partitions you're creating",formTitle:"Core configuration",formDescription:"We recommend you fill out and evaluate these details at a minimum before deploying your topic.",primaryButtonText:"Create",secondaryButtonText:"Cancel"},q=["Day(s)","Month(s)","Year(s)"],v=()=>e.createElement(ie,{render:()=>e.createElement(te,null,e.createElement(ne,{href:"/",prefix:"IBM"},"Cloud Pak"))}),gt={title:"IBM Products/Patterns/Create flows/CreateSidePanel",component:r,tags:["autodocs"],parameters:{layout:"fullscreen",styles:de,docs:{page:V}},argTypes:{slug:{control:{type:"select",labels:{0:"No AI slug",1:"with AI Slug"},default:0},options:[0,1]}},decorators:[ce(v,t)]},ue=({slug:s,...l})=>{const m=T(),[a,o]=u.useState(!1);return e.createElement(e.Fragment,null,v(),e.createElement(E,{id:"ibm-products-page-content"},e.createElement($,{lg:{span:2,start:8}},e.createElement(S,{onClick:()=>o(!a)},a?"Close side panel":"Open side panel"))),e.createElement(r,{...l,open:a,onRequestClose:()=>o(!1),onRequestSubmit:()=>o(!1),selectorPrimaryFocus:`.${m}--text-input`,slug:s&&D},e.createElement(N,{id:"create-side-panel-topic-name-a",labelText:"Topic name",className:`${t}form-item`,placeholder:"Enter topic name"}),e.createElement(i,{id:"1",className:`${t}form-item`,label:"Partitions",min:0,max:50,value:1,iconDescription:"Choose a number"}),e.createElement(i,{id:"2",className:`${t}form-item`,label:"Replicas",min:0,max:50,value:1,iconDescription:"Choose a number"}),e.createElement(i,{id:"3",className:`${t}form-item`,label:"Minimum in-sync replicas",min:0,max:50,value:1,iconDescription:"Choose a number"}),e.createElement("div",{style:{display:"grid",alignItems:"flex-end",gridGap:"0.75rem",gridTemplateColumns:"1fr 1fr"}},e.createElement(i,{id:"4",className:`${t}form-item`,label:"Retention time",min:0,max:50,value:30,iconDescription:"Choose a number"}),e.createElement(C,{id:"create-side-panel-dropdown-options-a",items:q,initialSelectedItem:"Day(s)",label:"Options",titleText:"Options",className:`${t}form-item`})),e.createElement(i,{id:"5",className:`${t}form-item`,label:"Minimum in-sync replicas",min:0,max:50,value:1,iconDescription:"Choose a number"})))},fe=({slug:s,...l})=>{const m=T(),[a,o]=u.useState(!1),[p,f]=u.useState(""),[c,d]=u.useState(!1);return e.createElement(e.Fragment,null,v(),e.createElement(E,{id:"ibm-products-page-content"},e.createElement($,{lg:{span:2,start:8}},e.createElement(S,{onClick:()=>o(!a)},a?"Close side panel":"Open side panel"))),e.createElement(r,{...l,open:a,onRequestClose:()=>o(!1),onRequestSubmit:()=>o(!1),disableSubmit:!p.length,selectorPrimaryFocus:`.${m}--text-input`,slug:s&&D},e.createElement(N,{id:"create-side-panel-topic-name-b",labelText:"Topic name",className:`${t}form-item`,placeholder:"Enter topic name",onChange:g=>{f(g.target.value),d(!1)},onBlur:()=>{p.length===0&&d(!0)},invalid:c,invalidText:"This is a required field"}),e.createElement(i,{id:"1",className:`${t}form-item`,label:"Partitions",min:0,max:50,value:1,iconDescription:"Choose a number"}),e.createElement(i,{id:"2",className:`${t}form-item`,label:"Replicas",min:0,max:50,value:1,iconDescription:"Choose a number"}),e.createElement(i,{id:"3",className:`${t}form-item`,label:"Minimum in-sync replicas",min:0,max:50,value:1,iconDescription:"Choose a number"}),e.createElement("div",{className:`${t}example-container`},e.createElement(i,{id:"4",className:`${t}form-item`,label:"Retention time",min:0,max:50,value:30,iconDescription:"Choose a number"}),e.createElement(C,{id:"create-side-panel-dropdown-options-b","aria-label":"Dropdown",initialSelectedItem:"Day(s)",items:q,label:"Options",className:`${t}form-item`})),e.createElement(i,{id:"3",className:`${t}form-item`,label:"Minimum in-sync replicas",min:0,max:50,value:1,iconDescription:"Choose a number"})))},be=({slug:s,...l})=>{const m=T(),[a,o]=u.useState(!1),[p,f]=u.useState(""),[c,d]=u.useState(!1);return e.createElement(e.Fragment,null,v(),e.createElement(E,{id:"ibm-products-page-content"},e.createElement($,{lg:{span:2,start:8}},e.createElement(S,{onClick:()=>o(!a)},a?"Close side panel":"Open side panel"))),e.createElement(r,{...l,open:a,onRequestClose:()=>o(!1),onRequestSubmit:()=>o(!1),disableSubmit:!p.length,selectorPrimaryFocus:`.${m}--text-input`,slug:s&&D},e.createElement(R,{className:`${F}__form ${t}example-form-group`,legendText:"Personal information"},e.createElement(N,{id:"create-side-panel-first-name",labelText:"First name",className:`${t}form-item`,placeholder:"Enter topic name",onChange:g=>{f(g.target.value),d(!1)},onBlur:()=>{p.length===0&&d(!0)},invalid:c,invalidText:"This is a required field"}),e.createElement(C,{id:"create-side-panel-dropdown-bu",titleText:"Business unit","aria-label":"Dropdown",initialSelectedItem:"IBM Cloud platform",items:["IBM Cloud platform","AI Ops","Watson"],label:"Business unit",className:`${t}form-item`})),e.createElement(R,{className:`${F}__form ${t}example-form-group`,legendText:"Topic information"},e.createElement(N,{id:"create-side-panel-topic-name-c",labelText:"Topic name",className:`${t}form-item`,placeholder:"Enter topic name"}),e.createElement(i,{id:"1",className:`${t}form-item`,label:"Partitions",min:0,max:50,value:1,iconDescription:"Choose a number"}),e.createElement(i,{id:"2",className:`${t}form-item`,label:"Replicas",min:0,max:50,value:1,iconDescription:"Choose a number"}),e.createElement(i,{id:"3",className:`${t}form-item`,label:"Minimum in-sync replicas",min:0,max:50,value:1,iconDescription:"Choose a number"}),e.createElement("div",{className:`${t}example-container`},e.createElement(i,{id:"4",className:`${t}form-item`,label:"Retention time",min:0,max:50,value:30,iconDescription:"Choose a number"}),e.createElement(C,{id:"create-side-panel-dropdown-options-c","aria-label":"Dropdown",initialSelectedItem:"Day(s)",items:q,label:"Options",className:`${t}form-item`})),e.createElement(i,{id:"3",className:`${t}form-item`,label:"Minimum in-sync replicas",min:0,max:50,value:1,iconDescription:"Choose a number"}))))},h=ue.bind({});h.args={selectorPageContent:"#ibm-products-page-content",...w};const x=fe.bind({});x.args={selectorPageContent:"#ibm-products-page-content",...w};const y=be.bind({});y.args={selectorPageContent:"#ibm-products-page-content",...w};var B,A,M;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`({
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
}`,...(M=(A=h.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var k,G,L;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`({
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
}`,...(L=(G=x.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};var H,W,U;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`({
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
}`,...(U=(W=y.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};const xt=["Default","WithFormValidation","WithMultipleForms"];export{h as Default,x as WithFormValidation,y as WithMultipleForms,xt as __namedExportsOrder,gt as default};
