import{R as e,r as x}from"./index-BwDkhjyp.js";import{a as b}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{c as V,b as F}from"./index-CQ0F2wkl.js";import{p as N,j as z,B as H}from"./settings-xiNX1vM3.js";import{D as G}from"./Dropdown-DdJe44Fy.js";import{G as j}from"./Grid-DmYr0bLG.js";import{C as L}from"./Column-n48QE4UZ.js";import{N as p}from"./NumberInput-BohLIeNM.js";import{H as U,a as Y}from"./HeaderName-Cz9k02-1.js";import{H as W}from"./HeaderContainer-Dl0hetNE.js";import{A as J,a as K}from"./index-DJMs1yu9.js";import{T as Q}from"./TextInput-Co-qdCU4.js";import{S as X}from"./StoryDocsPage-DVIWh70a.js";import{s as Z}from"./sidePanelDecorator-CvgA9Tly.js";import{A as ee}from"./index-DznJAQiH.js";import"./props-helper-BS5A6Pu3.js";import{F as te}from"./Form-BSVSs_TK.js";import{P as t}from"./index-Dk74W0Oi.js";import{g as ie}from"./devtools-Bz70ioU6.js";import{u as ne}from"./uuidv4-BQrI85uz.js";import{S as ae}from"./SidePanel-BfCqpCL-.js";import{a as oe}from"./bucket-14-BEt3Y4-s.js";import{T as re}from"./bucket-17-B1XGOcQQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./index-BONylQH5.js";import"./index-CJvxHwuA.js";import"./events-OVwOsPzJ.js";import"./index-ABeo-Xma.js";import"./index-DesgAUBt.js";import"./extends-CCbyfPlC.js";import"./index-DcAOwtUU.js";import"./tslib.es6-B4_xh3D5.js";import"./FormContext-C7kRVu4t.js";import"./mergeRefs-CTUecegF.js";import"./bucket-18-DbwFKOtV.js";import"./bucket-2-DlXCnOsR.js";import"./useNormalizedInputProps-B85N_Uyv.js";import"./Text-BiMgJRID.js";import"./bucket-16-CA_u3VxQ.js";import"./bucket-0-DyNWBZ5j.js";import"./Link-BMPdum6G.js";import"./useAnnouncer-Dwt0jqXi.js";import"./index-CTiS1d2M.js";import"./iframe-t6fBb6Y8.js";import"../sb-preview/runtime.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./story-helper-6_fmjwZ-.js";import"./bucket-9-BGCJpvdq.js";import"./motionConstants-CR5hPmRc.js";import"./use-reduced-motion-BisnjenD.js";import"./index-DkUr2NOz.js";import"./usePrefersReducedMotion-DeqUFceN.js";import"./useIsomorphicEffect-D7JMtAof.js";import"./useFocus-BkvvrSzv.js";import"./wait-CTNFjQS8.js";import"./ActionSet-DKjZKKQp.js";import"./ButtonSet-UZItGUcq.js";import"./InlineLoading-Dllsw8qU.js";import"./bucket-6-DBBo9VQm.js";import"./usePreviousValue-Cw-zRxyE.js";const s=`${N.prefix}--edit-side-panel`,y="EditSidePanel";let a=e.forwardRef(({children:i,className:c,disableSubmit:u,id:f,formTitle:o,formDescription:r,onRequestClose:m,onRequestSubmit:d,open:h,placement:q="right",primaryButtonText:P,secondaryButtonText:D,selectorPrimaryFocus:_,selectorPageContent:w,size:I="md",slideIn:O,subtitle:R,title:k,...$},B)=>{const M=[{label:P,onClick:A=>{A.preventDefault(),d&&d()},kind:"primary",disabled:u,type:"submit"},{label:D,onClick:m,kind:"secondary"}],g=ne();return e.createElement(ae,{...$,open:h,ref:B,selectorPageContent:w,onRequestClose:m,title:k,subtitle:R,selectorPrimaryFocus:_,id:f,...ie(y),placement:q,slideIn:O,animateTitle:!1,className:V(s,c),size:I,preventCloseOnClickOutside:!0,actions:M},o&&e.createElement("h3",{id:g,className:`${s}__form-title-text ${s}__content-text`},o),r&&e.createElement("p",{className:`${s}__form-description-text ${s}__content-text`},r),e.createElement(te,{className:`${s}__form`,"aria-labelledby":g},i))});a.deprecated={level:"warn",details:"This component is deprecated and will be removed in the next major version."};a=N.checkComponentEnabled(a,y);a.displayName=y;a.propTypes={children:t.oneOfType([t.arrayOf(t.node),t.node]).isRequired,className:t.string,disableSubmit:t.bool,formDescription:t.node,formTitle:t.node.isRequired,id:t.string,onRequestClose:t.func,onRequestSubmit:t.func,open:t.bool.isRequired,placement:t.oneOf(["left","right"]),primaryButtonText:t.string.isRequired,secondaryButtonText:t.string.isRequired,selectorPageContent:t.string.isRequired.if(({slideIn:i})=>i),selectorPrimaryFocus:t.node.isRequired,size:t.oneOf(["xs","sm","md","lg","2xl"]),slideIn:t.bool,slug:t.node,subtitle:t.node,title:t.node.isRequired};a.__docgenInfo={description:`**This component is deprecated.** <br>
Use with medium complexity edits if the user needs page context.
@deprecated`,methods:[],displayName:"EditSidePanel",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Sets the body content of the create side panel",type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"}]}},className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}},disableSubmit:{required:!1,tsType:{name:"boolean"},description:"Specifies a boolean for disabling or enabling the primary button. This is important for form validation\nReturning `true` prevents the primary button from being clicked until required fields are completed.",type:{name:"bool"}},formDescription:{required:!1,tsType:{name:"ReactNode"},description:"Specifies an optional field that provides a additional context for a form",type:{name:"node"}},formTitle:{required:!0,tsType:{name:"ReactNode"},description:"Specifies a required field that provides a title for a form",type:{name:"node"}},id:{required:!1,tsType:{name:"string"},description:"Unique identifier",type:{name:"string"}},onRequestClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Specifies an optional handler which is called when the CreateSidePanel
is closed.`,type:{name:"func"}},onRequestSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Specifies an optional handler which is called when the CreateSidePanel
primary button is pressed.`,type:{name:"func"}},open:{required:!0,tsType:{name:"boolean"},description:"Specifies whether the CreateSidePanel is open or not.",type:{name:"bool"}},placement:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"Determines if the side panel is on the right or left",defaultValue:{value:"'right'",computed:!1},type:{name:"enum",value:[{value:"'left'",computed:!1},{value:"'right'",computed:!1}]}},primaryButtonText:{required:!0,tsType:{name:"string"},description:"Specifies the primary button's text in the modal.",type:{name:"string"}},secondaryButtonText:{required:!0,tsType:{name:"string"},description:"Specifies the secondary button's text in the modal.",type:{name:"string"}},selectorPageContent:{required:!0,tsType:{name:"string"},description:"This is the selector to the element that contains all of the page content that will shrink if the panel is a slide in.\nThis prop is required when using the `slideIn` variant of the side panel.",type:{name:"string"}},selectorPrimaryFocus:{required:!0,tsType:{name:"string"},description:"Specifies which DOM element in the form should be focused.",type:{name:"node"}},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'2xl'"}]},description:"Sets the size of the side panel",defaultValue:{value:"'md'",computed:!1},type:{name:"enum",value:[{value:"'xs'",computed:!1},{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1},{value:"'2xl'",computed:!1}]}},slideIn:{required:!1,tsType:{name:"boolean"},description:"Specifies which DOM element in the form should be focused.",type:{name:"bool"}},slug:{required:!1,tsType:{name:"ReactNode"},description:"**Experimental:** Provide a `Slug` component to be rendered inside the `SidePanel` component",type:{name:"node"}},subtitle:{required:!1,tsType:{name:"ReactNode"},description:"The subtitle of the CreateSidePanel is optional and serves to provide more information about the modal.",type:{name:"node"}},title:{required:!0,tsType:{name:"string"},description:"The title of the CreateSidePanel is usually the product or service name.",type:{name:"node"}}}};const se=".edit-side-panel-stories__example-container{display:grid;align-items:flex-end;grid-gap:.75rem;grid-template-columns:1fr 1fr}.edit-side-panel-stories__example-form-group .cds--label{margin-bottom:0}.c4p--edit-side-panel .cds--number__control-btn:before,.c4p--edit-side-panel .cds--number__control-btn:after{background-color:var(--cds-field-02, #ffffff)}.edit-side-panel-stories__container{display:flex;height:100vh;flex-direction:column}.edit-side-panel-stories__content{flex-grow:1}.edit-side-panel-stories__toggle{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}",le=e.createElement(J,{className:"slug-container",size:"xs"},e.createElement(K,null,e.createElement("div",null,e.createElement("p",{className:"secondary"},"AI Explained"),e.createElement("h1",null,"84%"),e.createElement("p",{className:"secondary bold"},"Confidence score"),e.createElement("p",{className:"secondary"},"This is not really Lorem Ipsum but the spell checker did not like the previous text with it's non-words which is why this unwieldy sentence, should one choose to call it that, here."),e.createElement("hr",null),e.createElement("p",{className:"secondary"},"Model type"),e.createElement("p",{className:"bold"},"Foundation model")))),me={title:"Edit platform quotas",subtitle:"Specify the details of the quotas",formTitle:"Core configuration",formDescription:"We recommend you fill out and evaluate these details at a minimum before deploying your topic.",primaryButtonText:"Save",secondaryButtonText:"Cancel"},pe=()=>e.createElement(W,{render:()=>e.createElement(U,null,e.createElement(Y,{href:"/",prefix:"IBM"},"Cloud Pak"))}),n="edit-side-panel-stories__",Tt={title:"Deprecated/Edit and update/EditSidePanel",component:a,tags:["autodocs"],argTypes:{title:{control:{type:"text"}},subtitle:{control:{type:"text"}},formTitle:{control:{type:"text"}},formDescription:{control:{type:"text"}},open:{control:{disable:!0}},slug:{control:{type:"select",labels:{0:"No AI slug",1:"with AI Slug"},default:0},options:[0,1]}},parameters:{layout:"fullscreen",styles:se,docs:{page:()=>e.createElement(X,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/edit-and-update/usage/#side-panel-edit"})}},decorators:[i=>e.createElement(j,{id:"ibm-products-page-content",className:"story-content"},e.createElement(L,{sm:{span:4},md:{span:6}},e.createElement(ee,{type:"deprecation-notice",text:e.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},i()))),Z(pe,n)]},de=({slug:i,...c})=>{const u=F(),f=["Day(s)","Month(s)","Year(s)"],[o,r]=x.useState(!1),[m,d]=x.useState("Cluster management");return e.createElement(e.Fragment,null,e.createElement(H,{onClick:()=>r(!o)},o?"Close side panel":"Open side panel"),e.createElement(a,{...c,id:"storybook-id",open:o,onRequestClose:()=>r(!1),onRequestSubmit:()=>r(!1),disableSubmit:!m.length,selectorPrimaryFocus:`.${u}--text-input`,slug:i&&le},e.createElement(Q,{id:"create-side-panel-topic-name-a",labelText:"Topic name",className:`${n}form-item`,placeholder:"Enter topic name",value:m,onChange:h=>d(h.target.value)}),e.createElement(p,{iconDescription:"Choose a number",id:"1",className:`${n}form-item`,label:"Partitions",min:0,max:50,value:1}),e.createElement(p,{iconDescription:"Choose a number",id:"2",className:`${n}form-item`,label:"Replicas",min:0,max:50,value:1}),e.createElement(p,{iconDescription:"Choose a number",id:"3",className:`${n}form-item`,label:"Minimum in-sync replicas",min:0,max:50,value:1}),e.createElement("div",{style:{display:"grid",alignItems:"flex-end",gridGap:"0.75rem",gridTemplateColumns:"1fr 1fr"}},e.createElement(p,{iconDescription:"Choose a number",id:"4",className:`${n}form-item`,label:"Retention time",min:0,max:50,value:30}),e.createElement(G,{id:"create-side-panel-dropdown-options-a",items:f,initialSelectedItem:"Day(s)",label:"Options",titleText:"Options",className:`${n}form-item`})),e.createElement(p,{iconDescription:"Choose a number",id:"5",className:`${n}form-item`,label:"Minimum in-sync replicas",min:0,max:50,value:1})))},l=de.bind({});l.args={actionToolbarButtons:[{label:"Copy platform id",icon:i=>e.createElement(z,{size:16,...i}),onClick:b("Toolbar button clicked: Copy"),hasIconOnly:!0},{label:"Settings",icon:i=>e.createElement(oe,{size:16,...i}),onClick:b("Toolbar button clicked: Settings"),hasIconOnly:!0},{label:"Delete",icon:i=>e.createElement(re,{size:16,...i}),onClick:b("Toolbar button clicked: Delete"),hasIconOnly:!0}],includeOverlay:!0,...me};var v,T,S,C,E;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`({
  slug,
  ...args
}) => {
  const carbonPrefix = usePrefix();
  const items = ['Day(s)', 'Month(s)', 'Year(s)'];
  const [open, setOpen] = useState(false);
  const [topicValue, setTopicValue] = useState('Cluster management');
  return <>
      <Button onClick={() => setOpen(!open)}>
        {open ? 'Close side panel' : 'Open side panel'}
      </Button>
      <EditSidePanel {...args} id="storybook-id" open={open} onRequestClose={() => setOpen(false)} onRequestSubmit={() => setOpen(false)} disableSubmit={!topicValue.length} selectorPrimaryFocus={\`.\${carbonPrefix}--text-input\`} slug={slug && sampleSlug}>
        <TextInput id="create-side-panel-topic-name-a" labelText="Topic name" className={\`\${prefix}form-item\`} placeholder="Enter topic name" value={topicValue} onChange={event => setTopicValue(event.target.value)} />
        <NumberInput iconDescription="Choose a number" id="1" className={\`\${prefix}form-item\`} label="Partitions" min={0} max={50} value={1} />
        <NumberInput iconDescription="Choose a number" id="2" className={\`\${prefix}form-item\`} label="Replicas" min={0} max={50} value={1} />
        <NumberInput iconDescription="Choose a number" id="3" className={\`\${prefix}form-item\`} label="Minimum in-sync replicas" min={0} max={50} value={1} />
        <div style={{
        display: 'grid',
        alignItems: 'flex-end',
        gridGap: '0.75rem',
        gridTemplateColumns: '1fr 1fr'
      }}>
          <NumberInput iconDescription="Choose a number" id="4" className={\`\${prefix}form-item\`} label="Retention time" min={0} max={50} value={30} />
          <Dropdown id="create-side-panel-dropdown-options-a" items={items} initialSelectedItem="Day(s)" label="Options" titleText="Options" className={\`\${prefix}form-item\`} />
        </div>
        <NumberInput iconDescription="Choose a number" id="5" className={\`\${prefix}form-item\`} label="Minimum in-sync replicas" min={0} max={50} value={1} />
      </EditSidePanel>
    </>;
}`,...(S=(T=l.parameters)==null?void 0:T.docs)==null?void 0:S.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(E=(C=l.parameters)==null?void 0:C.docs)==null?void 0:E.description}}};const St=["editSidePanel"];export{St as __namedExportsOrder,Tt as default,l as editSidePanel};
