import{e,r as f}from"./index-CPiZ6Cnx.js";import{c as ee,P as n,b as I}from"./index-CXyjPnaX.js";import{p as S,B as E}from"./settings-DkGFwmHv.js";import{D as v}from"./Dropdown-Bou1JX7F.js";import{F}from"./FormGroup-9BStNhuZ.js";import{G as $}from"./Grid-CFwaJv6N.js";import{C as P}from"./Column-DEIwTZ2S.js";import{N as i}from"./NumberInput-7N1NynOx.js";import{H as te,a as ne}from"./HeaderName-snspd0G9.js";import{H as ie}from"./HeaderContainer-D2K8lmwY.js";import{A as ae,c as oe}from"./index-CwMfrGy4.js";import{T as N}from"./TextInput-DmU-PbK4.js";import{g as re}from"./devtools-BgfuqBVa.js";import{F as se}from"./Form--JAB0_ak.js";import{u as le}from"./uuidv4-BQrI85uz.js";import{S as me}from"./SidePanel-B2JOSSeV.js";import{S as ce}from"./StoryDocsPage-DbyjhUpU.js";import{s as pe}from"./sidePanelDecorator-Czj3d6NU.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BSHYryQu.js";import"./index-Bsyy8W_U.js";import"./events-OVwOsPzJ.js";import"./index-DJK44odq.js";import"./index-ieEXB2QH.js";import"./FormContext-CgeSXHS1.js";import"./mergeRefs-CTUecegF.js";import"./bucket-18-By6NmkK1.js";import"./bucket-2-L5Cs0C3i.js";import"./useNormalizedInputProps-Dv8FHz9Q.js";import"./Text-vNWzJqus.js";import"./bucket-16-DAqQSLfq.js";import"./bucket-0-DUfmGMOu.js";import"./Link-wljZ0kk-.js";import"./bucket-17-Ddrrb1BH.js";import"./useAnnouncer-Dwt0jqXi.js";import"./motionConstants-DlACNM8M.js";import"./use-reduced-motion-BpDRJM_F.js";import"./index-DkUr2NOz.js";import"./props-helper-C4XfpXsc.js";import"./usePrefersReducedMotion-B4CsCXC2.js";import"./useIsomorphicEffect-CqAX3nH-.js";import"./useFocus-CyuX_LJM.js";import"./wait-CTNFjQS8.js";import"./ActionSet-niQNGcwi.js";import"./ButtonSet-DCPCKVSR.js";import"./InlineLoading-DZri6jHG.js";import"./bucket-6-BQYdmIZX.js";import"./usePreviousValue-CSEZflXC.js";import"./index-Be1mmqnw.js";import"./iframe-C_4cBVrG.js";import"../sb-preview/runtime.js";import"./index-Df9so8jS.js";import"./index-DMCuvgYY.js";import"./index-DrFu-skq.js";import"./story-helper-CTHQ3yzD.js";const b=`${S.prefix}--create-side-panel`,D="CreateSidePanel";let r=e.forwardRef(({className:l,children:m,disableSubmit:c,formTitle:p,formDescription:a,id:o,onRequestClose:s,onRequestSubmit:d,open:g,primaryButtonText:u,secondaryButtonText:x,selectorPageContent:O,selectorPrimaryFocus:Y,subtitle:j,title:J,...K},Q)=>{const X=[{label:u,onClick:Z=>{Z.preventDefault(),d==null||d()},kind:"primary",disabled:c,type:"submit"},{label:x,onClick:s,kind:"secondary"}],R=le();return O&&e.createElement(me,{...K,id:o,open:g,ref:Q,selectorPageContent:O,onRequestClose:s,title:J,subtitle:j,selectorPrimaryFocus:Y,...re(D),placement:"right",slideIn:!0,animateTitle:!1,className:ee(b,l),size:"md",actions:X},e.createElement("h3",{className:`${b}__form-title-text ${b}__content-text`,id:R},p),e.createElement("p",{className:`${b}__form-description-text ${b}__content-text`},a),e.createElement(se,{className:`${b}__form`,"aria-labelledby":R},m))});r=S.checkComponentEnabled(r,D);r.displayName=D;r.propTypes={children:n.oneOfType([n.arrayOf(n.node),n.node]).isRequired,className:n.string,description:n.node,disableSubmit:n.bool,formDescription:n.node,formTitle:n.node.isRequired,id:n.string,onRequestClose:n.func,onRequestSubmit:n.func,open:n.bool,primaryButtonText:n.string.isRequired,secondaryButtonText:n.string.isRequired,selectorPageContent:n.string.isRequired,selectorPrimaryFocus:n.node.isRequired,slug:n.node,subtitle:n.node,title:n.string.isRequired};r.__docgenInfo={description:"Use with medium complexity creations if the user needs page context. On-page content can be seen and interacted with.",methods:[],displayName:"CreateSidePanel",props:{className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}},description:{required:!1,tsType:{name:"ReactNode"},description:"The description of the CreateSidePanel serves to provide more information about the form within the panel.",type:{name:"node"}},disableSubmit:{required:!1,tsType:{name:"boolean"},description:"Specifies a boolean for disabling or enabling the primary button. This is important for form validation\nReturning `true` prevents the primary button from being clicked until required fields are completed.",type:{name:"bool"}},formDescription:{required:!1,tsType:{name:"ReactNode"},description:"Specifies an optional field that provides a additional context for a form",type:{name:"node"}},formTitle:{required:!0,tsType:{name:"ReactNode"},description:"Specifies a required field that provides a title for a form",type:{name:"node"}},id:{required:!1,tsType:{name:"string"},description:"Unique identifier",type:{name:"string"}},open:{required:!1,tsType:{name:"boolean"},description:"Specifies whether the CreateSidePanel is open or not.",type:{name:"bool"}},primaryButtonText:{required:!0,tsType:{name:"string"},description:"Specifies the primary button's text in the modal.",type:{name:"string"}},secondaryButtonText:{required:!0,tsType:{name:"string"},description:"Specifies the secondary button's text in the modal.",type:{name:"string"}},selectorPageContent:{required:!0,tsType:{name:"string"},description:"This is the selector to the element that contains all of the page content that will shrink when the panel is a slide in.\nThis prop is required since create flows use the `slideIn` variant of the side panel.",type:{name:"string"}},selectorPrimaryFocus:{required:!0,tsType:{name:"string"},description:"Specifies which DOM element in the form should be focused.",type:{name:"node"}},slug:{required:!1,tsType:{name:"ReactNode"},description:"**Experimental:** Provide a `Slug` component to be rendered inside the `SidePanel` component",type:{name:"node"}},subtitle:{required:!1,tsType:{name:"ReactNode"},description:"The subtitle of the CreateSidePanel is optional and serves to provide more information about the modal.",type:{name:"node"}},title:{required:!0,tsType:{name:"string"},description:"The title of the CreateSidePanel is usually the product or service name.",type:{name:"string"}},children:{description:"Sets the body content of the create side panel",type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"}]},required:!0},onRequestClose:{description:`Specifies an optional handler which is called when the CreateSidePanel
is closed.`,type:{name:"func"},required:!1},onRequestSubmit:{description:`Specifies an optional handler which is called when the CreateSidePanel
primary button is pressed.`,type:{name:"func"},required:!1}}};const de=".create-side-panel-stories__example-container{display:grid;align-items:flex-end;grid-gap:.75rem;grid-template-columns:1fr 1fr}.create-side-panel-stories__example-form-group .cds--label{margin-bottom:0}.c4p--create-side-panel .cds--number__control-btn:before,.c4p--create-side-panel .cds--number__control-btn:after{background-color:var(--cds-field-02, #ffffff)}.create-side-panel-stories__container{display:flex;height:100vh;flex-direction:column}.create-side-panel-stories__content{flex-grow:1}.create-side-panel-stories__toggle{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}",z=()=>e.createElement(ce,{altGuidelinesHref:[{href:"https://pages.github.ibm.com/carbon/ibm-products/patterns/create-flows/usage/#side-panel",label:"Carbon create flows side panel usage guidelines"}],blocks:[{story:h},{title:"Form validation",description:`All forms, including that within the \`CreateSidePanel\` should follow @carbon/ibm-products
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
                `}}]});z.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const M=`${S.prefix}--create-side-panel`,t="create-side-panel-stories__",w=e.createElement(ae,{className:"slug-container",size:"xs"},e.createElement(oe,null,e.createElement("div",null,e.createElement("p",{className:"secondary"},"AI Explained"),e.createElement("h1",null,"84%"),e.createElement("p",{className:"secondary bold"},"Confidence score"),e.createElement("p",{className:"secondary"},"This is not really Lorem Ipsum but the spell checker did not like the previous text with it's non-words which is why this unwieldy sentence, should one choose to call it that, here."),e.createElement("hr",null),e.createElement("p",{className:"secondary"},"Model type"),e.createElement("p",{className:"bold"},"Foundation model")))),q={title:"Create partitions",subtitle:"Specify the details of the partitions you're creating",formTitle:"Core configuration",formDescription:"We recommend you fill out and evaluate these details at a minimum before deploying your topic.",primaryButtonText:"Create",secondaryButtonText:"Cancel"},_=["Day(s)","Month(s)","Year(s)"],T=()=>e.createElement(ie,{render:()=>e.createElement(te,null,e.createElement(ne,{href:"/",prefix:"IBM"},"Cloud Pak"))}),gt={title:"IBM Products/Patterns/Create flows/CreateSidePanel",component:r,tags:["autodocs"],parameters:{layout:"fullscreen",styles:de,docs:{page:z}},argTypes:{slug:{control:{type:"select",labels:{0:"No AI slug",1:"with AI Slug"},default:0},options:[0,1]}},decorators:[pe(T,t)]},ue=({slug:l,...m},c)=>{const p=I(),[a,o]=f.useState(c.viewMode!=="docs");return e.createElement(e.Fragment,null,T(),e.createElement($,{id:"ibm-products-page-content"},e.createElement(P,{lg:{span:2,start:8}},e.createElement(E,{onClick:()=>o(!a)},a?"Close side panel":"Open side panel"))),e.createElement(r,{...m,open:a,onRequestClose:()=>o(!1),onRequestSubmit:()=>o(!1),selectorPrimaryFocus:`.${p}--text-input`,slug:l&&w},e.createElement(N,{id:"create-side-panel-topic-name-a",labelText:"Topic name",className:`${t}form-item`,placeholder:"Enter topic name"}),e.createElement(i,{id:"1",className:`${t}form-item`,label:"Partitions",min:0,max:50,value:1,iconDescription:"Choose a number"}),e.createElement(i,{id:"2",className:`${t}form-item`,label:"Replicas",min:0,max:50,value:1,iconDescription:"Choose a number"}),e.createElement(i,{id:"3",className:`${t}form-item`,label:"Minimum in-sync replicas",min:0,max:50,value:1,iconDescription:"Choose a number"}),e.createElement("div",{style:{display:"grid",alignItems:"flex-end",gridGap:"0.75rem",gridTemplateColumns:"1fr 1fr"}},e.createElement(i,{id:"4",className:`${t}form-item`,label:"Retention time",min:0,max:50,value:30,iconDescription:"Choose a number"}),e.createElement(v,{id:"create-side-panel-dropdown-options-a",items:_,initialSelectedItem:"Day(s)",label:"Options",titleText:"Options",className:`${t}form-item`})),e.createElement(i,{id:"5",className:`${t}form-item`,label:"Minimum in-sync replicas",min:0,max:50,value:1,iconDescription:"Choose a number"})))},fe=({slug:l,...m},c)=>{const p=I(),[a,o]=f.useState(c.viewMode!=="docs"),[s,d]=f.useState(""),[g,u]=f.useState(!1);return e.createElement(e.Fragment,null,T(),e.createElement($,{id:"ibm-products-page-content"},e.createElement(P,{lg:{span:2,start:8}},e.createElement(E,{onClick:()=>o(!a)},a?"Close side panel":"Open side panel"))),e.createElement(r,{...m,open:a,onRequestClose:()=>o(!1),onRequestSubmit:()=>o(!1),disableSubmit:!s.length,selectorPrimaryFocus:`.${p}--text-input`,slug:l&&w},e.createElement(N,{id:"create-side-panel-topic-name-b",labelText:"Topic name",className:`${t}form-item`,placeholder:"Enter topic name",onChange:x=>{d(x.target.value),u(!1)},onBlur:()=>{s.length===0&&u(!0)},invalid:g,invalidText:"This is a required field"}),e.createElement(i,{id:"1",className:`${t}form-item`,label:"Partitions",min:0,max:50,value:1,iconDescription:"Choose a number"}),e.createElement(i,{id:"2",className:`${t}form-item`,label:"Replicas",min:0,max:50,value:1,iconDescription:"Choose a number"}),e.createElement(i,{id:"3",className:`${t}form-item`,label:"Minimum in-sync replicas",min:0,max:50,value:1,iconDescription:"Choose a number"}),e.createElement("div",{className:`${t}example-container`},e.createElement(i,{id:"4",className:`${t}form-item`,label:"Retention time",min:0,max:50,value:30,iconDescription:"Choose a number"}),e.createElement(v,{id:"create-side-panel-dropdown-options-b","aria-label":"Dropdown",initialSelectedItem:"Day(s)",items:_,label:"Options",className:`${t}form-item`})),e.createElement(i,{id:"3",className:`${t}form-item`,label:"Minimum in-sync replicas",min:0,max:50,value:1,iconDescription:"Choose a number"})))},be=({slug:l,...m},c)=>{const p=I(),[a,o]=f.useState(c.viewMode!=="docs"),[s,d]=f.useState(""),[g,u]=f.useState(!1);return e.createElement(e.Fragment,null,T(),e.createElement($,{id:"ibm-products-page-content"},e.createElement(P,{lg:{span:2,start:8}},e.createElement(E,{onClick:()=>o(!a)},a?"Close side panel":"Open side panel"))),e.createElement(r,{...m,open:a,onRequestClose:()=>o(!1),onRequestSubmit:()=>o(!1),disableSubmit:!s.length,selectorPrimaryFocus:`.${p}--text-input`,slug:l&&w},e.createElement(F,{className:`${M}__form ${t}example-form-group`,legendText:"Personal information"},e.createElement(N,{id:"create-side-panel-first-name",labelText:"First name",className:`${t}form-item`,placeholder:"Enter topic name",onChange:x=>{d(x.target.value),u(!1)},onBlur:()=>{s.length===0&&u(!0)},invalid:g,invalidText:"This is a required field"}),e.createElement(v,{id:"create-side-panel-dropdown-bu",titleText:"Business unit","aria-label":"Dropdown",initialSelectedItem:"IBM Cloud platform",items:["IBM Cloud platform","AI Ops","Watson"],label:"Business unit",className:`${t}form-item`})),e.createElement(F,{className:`${M}__form ${t}example-form-group`,legendText:"Topic information"},e.createElement(N,{id:"create-side-panel-topic-name-c",labelText:"Topic name",className:`${t}form-item`,placeholder:"Enter topic name"}),e.createElement(i,{id:"1",className:`${t}form-item`,label:"Partitions",min:0,max:50,value:1,iconDescription:"Choose a number"}),e.createElement(i,{id:"2",className:`${t}form-item`,label:"Replicas",min:0,max:50,value:1,iconDescription:"Choose a number"}),e.createElement(i,{id:"3",className:`${t}form-item`,label:"Minimum in-sync replicas",min:0,max:50,value:1,iconDescription:"Choose a number"}),e.createElement("div",{className:`${t}example-container`},e.createElement(i,{id:"4",className:`${t}form-item`,label:"Retention time",min:0,max:50,value:30,iconDescription:"Choose a number"}),e.createElement(v,{id:"create-side-panel-dropdown-options-c","aria-label":"Dropdown",initialSelectedItem:"Day(s)",items:_,label:"Options",className:`${t}form-item`})),e.createElement(i,{id:"3",className:`${t}form-item`,label:"Minimum in-sync replicas",min:0,max:50,value:1,iconDescription:"Choose a number"}))))},h=ue.bind({});h.args={selectorPageContent:"#ibm-products-page-content",...q};const y=fe.bind({});y.args={selectorPageContent:"#ibm-products-page-content",...q};const C=be.bind({});C.args={selectorPageContent:"#ibm-products-page-content",...q};var B,A,k;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`({
  slug,
  ...args
}, context) => {
  const carbonPrefix = usePrefix();
  const [open, setOpen] = useState(context.viewMode !== 'docs');
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
}`,...(k=(A=h.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var G,L,H;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`({
  slug,
  ...args
}, context) => {
  const carbonPrefix = usePrefix();
  const [open, setOpen] = useState(context.viewMode !== 'docs');
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
}`,...(H=(L=y.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var W,U,V;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`({
  slug,
  ...args
}, context) => {
  const carbonPrefix = usePrefix();
  const [open, setOpen] = useState(context.viewMode !== 'docs');
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
}`,...(V=(U=C.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};const xt=["Default","WithFormValidation","WithMultipleForms"];export{h as Default,y as WithFormValidation,C as WithMultipleForms,xt as __namedExportsOrder,gt as default};
