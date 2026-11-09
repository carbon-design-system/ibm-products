var W=Object.defineProperty;var t=(r,s)=>W(r,"name",{value:s,configurable:!0});import{R as e,aj as A,r as a,L as $,K as Y}from"./iframe-CxssGfIx.js";import{D as P}from"./Dropdown-vv2SUzDh.js";import{F as O}from"./FormGroup-BOye6MYk.js";import{N as o}from"./NumberInput-B3EFQps3.js";import{T as k}from"./TextInput-CptCPkLT.js";import{s as V}from"./_storybook-styles-B4jRGrUa.js";import{d as j,s as K,a as N}from"./decorator-sfEndcmV.js";import{A as L}from"./index-tJHR7slp.js";import{C as q}from"./CreateTearsheetNarrow-D4PtNq-I.js";import{T as B}from"./TruncatedText-Chu8nNsM.js";import"./preload-helper-Cc2_yIPf.js";import"./defaultItemToString-DDHghiWu.js";import"./downshift.esm-Cs0y05Iw.js";import"./FormContext-BjQFomFa.js";import"./inheritsLoose-CdLKJotq.js";import"./index-BYZvoV4K.js";import"./index-CWMOMp-b.js";import"./bucket-20-BIFULJnx.js";import"./mergeRefs-BH0-8uDG.js";import"./useNormalizedInputProps-DzHYawdO.js";import"./Text-D6GWTWaE.js";import"./bucket-21-CFosKZLf.js";import"./useNoInteractiveChildrenForLabel-CId5oWH1.js";import"./useControllableState-CnZ18wTe.js";import"./clamp-ekNJC_Xv.js";import"./bucket-0-DBjt2rfb.js";import"./bucket-18-B4TYjtzN.js";import"./hasHelperText-CcJ_VphT.js";import"./getAnnouncement-B0n4vXaG.js";import"./bucket-11-B2Q-R7v1.js";import"./Form-CAL6Pf4R.js";import"./TearsheetNarrow-Tn9V1R0O.js";import"./TearsheetShell-6rXvX5t4.js";import"./useResizeObserver-Dv8F0UVz.js";import"./useIsomorphicEffect-CNSQVNA3.js";import"./getNodeTextContent-CjFansOq.js";import"./props-helper-D-zb_sYP.js";import"./index-DkLxpCKS.js";import"./LayerContext-C_5CgdjX.js";import"./ComposedModal-CrYZI3d3.js";import"./isTopmostVisibleModal-DDVMScul.js";import"./InlineLoading-CDh0dUGZ.js";import"./bucket-7-OCU3BT4m.js";import"./ButtonSet-DomsQFIK.js";import"./wrapFocus-Ci4BaSO3.js";import"./index-JCGYHVJY.js";import"./Wrap-FDMpUmN8.js";import"./usePortalTarget-CX-Yi4ru.js";import"./index-BPTEhXTz.js";import"./useFocus-DyOBqSef.js";import"./usePresence-DoLXGu_F.js";import"./useId-lls9HsYP.js";import"./uuidv4-Fbcg8Vng.js";import"./usePreviousValue-PTJOBmyx.js";import"./ActionSet-XEl64wft.js";import"./devtools-C3HuczRY.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,tt={title:"Deprecated/Prebuilt patterns/Create flows/CreateTearsheetNarrow",component:q,tags:["autodocs"],argTypes:{description:{control:{type:"select",labels:{0:"With plain String",1:"With TruncatedText and 1 line",2:"With TruncatedText and 2 lines"},default:0},description:"A description of the flow, displayed in the header area of the tearsheet.\n Note: `TruncatedText` can be passed as a React node to apply custom text formatting, including ellipsis truncation and a definition tooltip when the content is too long.",options:[0,1,2],mapping:{0:"Select the number of partitions you want to create",1:e.createElement(B,{lines:1,tooltipDirection:"bottom",value:"This is a description for the tearsheet, providing an opportunity to describe the flow over a couple of lines in the header of the tearsheet."}),2:e.createElement(B,{lines:2,truncate:!0,tooltipDirection:"bottom",value:"This is a description for the tearsheet, providing an opportunity to describe the flow over a couple of lines in the header of the tearsheet."})}},children:{control:{disable:!0}},...K(),...j()},parameters:{styles:V,docs:{page:t(()=>e.createElement(A,{deprecationNotice:"This component is deprecated and will be removed in the next major version. Please migrate to [Create Tearsheet Narrow](https://carbon-for-ibm-products.netlify.app/?path=/docs/patterns-create-flows-createtearsheetnarrow) pattern.",altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/create-flows/usage/#narrow-tearsheet"}),"page")}},decorators:[r=>e.createElement(L,{type:"deprecation-notice",text:e.createElement("div",null,"This component is deprecated and will be removed in the next major version. Please migrate to"," ",e.createElement("a",{href:"https://carbon-for-ibm-products.netlify.app/?path=/docs/patterns-create-flows-createtearsheetnarrow"},"Create Tearsheet Narrow")," ","pattern.")},r())]},c=`${Y.prefix}--create-tearsheet-narrow--story`,x={title:"Create partition",className:"test-class-name",description:0,formTitle:"Core configuration",formDescription:"We recommend you fill out and evaluate these details at a minimum before deploying your topic.",primaryButtonText:"Create",secondaryButtonText:"Cancel",label:"Test label",selectorPrimaryFocus:"#tearsheet-narrow-story-text-input--1"},H=t(({slug:r,decorator:s,...S},w)=>{const[l,v]=a.useState(w.viewMode!=="docs"),[m,b]=a.useState(""),[h,f]=a.useState(1),[T,I]=a.useState(1),[C,R]=a.useState(1),[g,D]=a.useState(1),[y,M]=a.useState(1),[_]=a.useState(["Day(s)","Month(s)","Year(s"]),E=h<=0||T<=0||C<=0||g<=0||y<=0;return e.createElement("div",null,e.createElement("style",null,`.${x.className} { opacity: 0 }`,";"),e.createElement($,{onClick:t(()=>v(!l),"onClick")},l?"Close CreateTearsheetNarrow":"Open CreateTearsheetNarrow"),e.createElement(q,{open:l,onRequestClose:t(()=>v(!1),"onRequestClose"),onRequestSubmit:F("onRequestSubmit action called"),disableSubmit:!m||E,slug:r&&N(r),decorator:s&&N(s),...S},e.createElement(k,{labelText:"Topic name",id:"tearsheet-narrow-story-text-input--1",value:m,placeholder:"Enter topic name",onChange:t(n=>b(n.target.value),"onChange")}),e.createElement(o,{iconDescription:"Choose a number",id:"partition-count",min:1,max:100,value:h,label:"Partitions",invalidText:"Max partitions is 100, min is 1",onChange:t(n=>f(n.imaginaryTarget.value),"onChange")}),e.createElement(o,{iconDescription:"Choose a number",id:"replica-count",min:1,max:100,value:T,label:"Replicas",invalidText:"Max replicas is 10, min is 1",onChange:t(n=>I(n.imaginaryTarget.value),"onChange")}),e.createElement(o,{iconDescription:"Choose a number",id:"minimum-in-sync-count",min:1,max:100,value:C,label:"Minimum in-sync replicas",invalidText:"Max is 5, min is 1",onChange:t(n=>R(n.imaginaryTarget.value),"onChange")}),e.createElement("div",{className:`${c}__flex-container`},e.createElement(o,{iconDescription:"Choose a number",id:"retention-time",min:1,max:60,value:g,label:"Retention time",invalidText:"Max is 60, min is 1",onChange:t(n=>D(n.imaginaryTarget.value),"onChange")}),e.createElement(P,{id:"create-tearsheet-narrow-dropdown-options-c",initialSelectedItem:"Day(s)",items:_,label:"Options",titleText:"Options"})),e.createElement(o,{iconDescription:"Choose a number",id:"quantity",min:1,max:100,value:y,label:"Quantity",invalidText:"Max is 10, min is 1",onChange:t(n=>M(n.imaginaryTarget.value),"onChange")})))},"Template"),Q=t(({slug:r,decorator:s,...S},w)=>{const[l,v]=a.useState(w.viewMode!=="docs"),[m,b]=a.useState(""),[h,f]=a.useState(1),[T,I]=a.useState(1),[C,R]=a.useState(1),[g,D]=a.useState(1),[y,M]=a.useState(1),[_]=a.useState(["Day(s)","Month(s)","Year(s"]),[E,n]=a.useState(!1),G=h<=0||T<=0||C<=0||g<=0||y<=0;return e.createElement("div",null,e.createElement("style",null,`.${x.className} { opacity: 0 }`,";"),e.createElement($,{onClick:t(()=>v(!l),"onClick")},l?"Close CreateTearsheetNarrow":"Open CreateTearsheetNarrow"),e.createElement(q,{open:l,onRequestClose:t(()=>{v(!1),b(""),n(!1)},"onRequestClose"),onRequestSubmit:F("onRequestSubmit action called"),disableSubmit:!m||G,slug:r&&N(r),decorator:s&&N(s),...S},e.createElement(O,{className:`${c}__form ${c}__example-form-group`,legendText:"Topic information"},e.createElement(k,{labelText:"Topic name",id:"tearsheet-narrow-story-text-input--1",value:m,placeholder:"Enter topic name",onChange:t(i=>b(i.target.value),"onChange"),onBlur:t(()=>!m.length&&n(!0),"onBlur"),invalid:E,invalidText:"This is a required field"}),e.createElement(o,{iconDescription:"Choose a number",id:"partition-count",min:1,max:100,value:h,label:"Partitions",invalidText:"Max partitions is 100, min is 1",onChange:t(i=>f(i.imaginaryTarget.value),"onChange")}),e.createElement(o,{iconDescription:"Choose a number",id:"replica-count",min:1,max:100,value:T,label:"Replicas",invalidText:"Max replicas is 10, min is 1",onChange:t(i=>I(i.imaginaryTarget.value),"onChange")}),e.createElement(o,{iconDescription:"Choose a number",id:"minimum-in-sync-count",min:1,max:100,value:C,label:"Minimum in-sync replicas",invalidText:"Max is 5, min is 1",onChange:t(i=>R(i.imaginaryTarget.value),"onChange")})),e.createElement(O,{className:`${c}__form ${c}__example-form-group`,legendText:"Scheduling"},e.createElement("div",{className:`${c}__flex-container`},e.createElement(o,{iconDescription:"Choose a number",id:"retention-time",min:1,max:60,value:g,label:"Retention time",invalidText:"Max is 60, min is 1",onChange:t(i=>D(i.imaginaryTarget.value),"onChange")}),e.createElement(P,{id:"create-tearsheet-narrow-dropdown-options-c",initialSelectedItem:"Day(s)",items:_,label:"Options",titleText:"Options"})),e.createElement(o,{iconDescription:"Choose a number",id:"quantity",min:1,max:100,value:y,label:"Quantity",invalidText:"Max is 10, min is 1",onChange:t(i=>M(i.imaginaryTarget.value),"onChange")}))))},"WithValidationTemplate"),U="Default",u=H.bind({});u.storyName=U;u.args={...x};const z="With Form Validation",p=Q.bind({});p.storyName=z;p.args={...x};const J="With Multiple Forms",d=Q.bind({});d.storyName=J;d.args={...x};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`({
  slug,
  decorator,
  ...args
}, context) => {
  const [open, setOpen] = useState(context.viewMode !== 'docs');
  const [topicName, setTopicName] = useState('');
  const [partitionCount, setPartitionCount] = useState(1);
  const [replicaCount, setReplicaCount] = useState(1);
  const [minimumInSyncReplicaCount, setMinimumInSyncReplicaCount] = useState(1);
  const [retentionTime, setRetentionTime] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [items] = useState(['Day(s)', 'Month(s)', 'Year(s']);
  const numberInputsInvalid = partitionCount <= 0 || replicaCount <= 0 || minimumInSyncReplicaCount <= 0 || retentionTime <= 0 || quantity <= 0;
  return <div>
      <style>{\`.\${defaultStoryProps.className} { opacity: 0 }\`};</style>
      <Button onClick={() => setOpen(!open)}>
        {open ? 'Close CreateTearsheetNarrow' : 'Open CreateTearsheetNarrow'}
      </Button>
      <CreateTearsheetNarrow open={open} onRequestClose={() => setOpen(false)} onRequestSubmit={action('onRequestSubmit action called')} disableSubmit={!topicName || numberInputsInvalid} slug={slug && sampleDecorator(slug)} decorator={decorator && sampleDecorator(decorator)} {...args}>
        <TextInput labelText="Topic name" id="tearsheet-narrow-story-text-input--1" value={topicName} placeholder="Enter topic name" onChange={event => setTopicName(event.target.value)} />
        <NumberInput iconDescription="Choose a number" id="partition-count" min={1} max={100} value={partitionCount} label="Partitions" invalidText="Max partitions is 100, min is 1" onChange={event => setPartitionCount(event.imaginaryTarget.value)} />
        <NumberInput iconDescription="Choose a number" id="replica-count" min={1} max={100} value={replicaCount} label="Replicas" invalidText="Max replicas is 10, min is 1" onChange={event => setReplicaCount(event.imaginaryTarget.value)} />
        <NumberInput iconDescription="Choose a number" id="minimum-in-sync-count" min={1} max={100} value={minimumInSyncReplicaCount} label="Minimum in-sync replicas" invalidText="Max is 5, min is 1" onChange={event => setMinimumInSyncReplicaCount(event.imaginaryTarget.value)} />
        <div className={\`\${createTearsheetNarrowBlockClass}__flex-container\`}>
          <NumberInput iconDescription="Choose a number" id="retention-time" min={1} max={60} value={retentionTime} label="Retention time" invalidText="Max is 60, min is 1" onChange={event => setRetentionTime(event.imaginaryTarget.value)} />
          <Dropdown id="create-tearsheet-narrow-dropdown-options-c" initialSelectedItem="Day(s)" items={items} label="Options" titleText="Options" />
        </div>
        <NumberInput iconDescription="Choose a number" id="quantity" min={1} max={100} value={quantity} label="Quantity" invalidText="Max is 10, min is 1" onChange={event => setQuantity(event.imaginaryTarget.value)} />
      </CreateTearsheetNarrow>
    </div>;
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`({
  slug,
  decorator,
  ...args
}, context) => {
  const [open, setOpen] = useState(context.viewMode !== 'docs');
  const [topicName, setTopicName] = useState('');
  const [partitionCount, setPartitionCount] = useState(1);
  const [replicaCount, setReplicaCount] = useState(1);
  const [minimumInSyncReplicaCount, setMinimumInSyncReplicaCount] = useState(1);
  const [retentionTime, setRetentionTime] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [items] = useState(['Day(s)', 'Month(s)', 'Year(s']);
  const [invalid, setInvalid] = useState(false);
  const numberInputsInvalid = partitionCount <= 0 || replicaCount <= 0 || minimumInSyncReplicaCount <= 0 || retentionTime <= 0 || quantity <= 0;
  return <div>
      <style>{\`.\${defaultStoryProps.className} { opacity: 0 }\`};</style>
      <Button onClick={() => setOpen(!open)}>
        {open ? 'Close CreateTearsheetNarrow' : 'Open CreateTearsheetNarrow'}
      </Button>
      <CreateTearsheetNarrow open={open} onRequestClose={() => {
      setOpen(false);
      setTopicName('');
      setInvalid(false);
    }} onRequestSubmit={action('onRequestSubmit action called')} disableSubmit={!topicName || numberInputsInvalid} slug={slug && sampleDecorator(slug)} decorator={decorator && sampleDecorator(decorator)} {...args}>
        <FormGroup className={\`\${createTearsheetNarrowBlockClass}__form \${createTearsheetNarrowBlockClass}__example-form-group\`} legendText="Topic information">
          <TextInput labelText="Topic name" id="tearsheet-narrow-story-text-input--1" value={topicName} placeholder="Enter topic name" onChange={event => setTopicName(event.target.value)} onBlur={() => !topicName.length && setInvalid(true)} invalid={invalid} invalidText="This is a required field" />
          <NumberInput iconDescription="Choose a number" id="partition-count" min={1} max={100} value={partitionCount} label="Partitions" invalidText="Max partitions is 100, min is 1" onChange={event => setPartitionCount(event.imaginaryTarget.value)} />
          <NumberInput iconDescription="Choose a number" id="replica-count" min={1} max={100} value={replicaCount} label="Replicas" invalidText="Max replicas is 10, min is 1" onChange={event => setReplicaCount(event.imaginaryTarget.value)} />
          <NumberInput iconDescription="Choose a number" id="minimum-in-sync-count" min={1} max={100} value={minimumInSyncReplicaCount} label="Minimum in-sync replicas" invalidText="Max is 5, min is 1" onChange={event => setMinimumInSyncReplicaCount(event.imaginaryTarget.value)} />
        </FormGroup>
        <FormGroup className={\`\${createTearsheetNarrowBlockClass}__form \${createTearsheetNarrowBlockClass}__example-form-group\`} legendText="Scheduling">
          <div className={\`\${createTearsheetNarrowBlockClass}__flex-container\`}>
            <NumberInput iconDescription="Choose a number" id="retention-time" min={1} max={60} value={retentionTime} label="Retention time" invalidText="Max is 60, min is 1" onChange={event => setRetentionTime(event.imaginaryTarget.value)} />
            <Dropdown id="create-tearsheet-narrow-dropdown-options-c" initialSelectedItem="Day(s)" items={items} label="Options" titleText="Options" />
          </div>
          <NumberInput iconDescription="Choose a number" id="quantity" min={1} max={100} value={quantity} label="Quantity" invalidText="Max is 10, min is 1" onChange={event => setQuantity(event.imaginaryTarget.value)} />
        </FormGroup>
      </CreateTearsheetNarrow>
    </div>;
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`({
  slug,
  decorator,
  ...args
}, context) => {
  const [open, setOpen] = useState(context.viewMode !== 'docs');
  const [topicName, setTopicName] = useState('');
  const [partitionCount, setPartitionCount] = useState(1);
  const [replicaCount, setReplicaCount] = useState(1);
  const [minimumInSyncReplicaCount, setMinimumInSyncReplicaCount] = useState(1);
  const [retentionTime, setRetentionTime] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [items] = useState(['Day(s)', 'Month(s)', 'Year(s']);
  const [invalid, setInvalid] = useState(false);
  const numberInputsInvalid = partitionCount <= 0 || replicaCount <= 0 || minimumInSyncReplicaCount <= 0 || retentionTime <= 0 || quantity <= 0;
  return <div>
      <style>{\`.\${defaultStoryProps.className} { opacity: 0 }\`};</style>
      <Button onClick={() => setOpen(!open)}>
        {open ? 'Close CreateTearsheetNarrow' : 'Open CreateTearsheetNarrow'}
      </Button>
      <CreateTearsheetNarrow open={open} onRequestClose={() => {
      setOpen(false);
      setTopicName('');
      setInvalid(false);
    }} onRequestSubmit={action('onRequestSubmit action called')} disableSubmit={!topicName || numberInputsInvalid} slug={slug && sampleDecorator(slug)} decorator={decorator && sampleDecorator(decorator)} {...args}>
        <FormGroup className={\`\${createTearsheetNarrowBlockClass}__form \${createTearsheetNarrowBlockClass}__example-form-group\`} legendText="Topic information">
          <TextInput labelText="Topic name" id="tearsheet-narrow-story-text-input--1" value={topicName} placeholder="Enter topic name" onChange={event => setTopicName(event.target.value)} onBlur={() => !topicName.length && setInvalid(true)} invalid={invalid} invalidText="This is a required field" />
          <NumberInput iconDescription="Choose a number" id="partition-count" min={1} max={100} value={partitionCount} label="Partitions" invalidText="Max partitions is 100, min is 1" onChange={event => setPartitionCount(event.imaginaryTarget.value)} />
          <NumberInput iconDescription="Choose a number" id="replica-count" min={1} max={100} value={replicaCount} label="Replicas" invalidText="Max replicas is 10, min is 1" onChange={event => setReplicaCount(event.imaginaryTarget.value)} />
          <NumberInput iconDescription="Choose a number" id="minimum-in-sync-count" min={1} max={100} value={minimumInSyncReplicaCount} label="Minimum in-sync replicas" invalidText="Max is 5, min is 1" onChange={event => setMinimumInSyncReplicaCount(event.imaginaryTarget.value)} />
        </FormGroup>
        <FormGroup className={\`\${createTearsheetNarrowBlockClass}__form \${createTearsheetNarrowBlockClass}__example-form-group\`} legendText="Scheduling">
          <div className={\`\${createTearsheetNarrowBlockClass}__flex-container\`}>
            <NumberInput iconDescription="Choose a number" id="retention-time" min={1} max={60} value={retentionTime} label="Retention time" invalidText="Max is 60, min is 1" onChange={event => setRetentionTime(event.imaginaryTarget.value)} />
            <Dropdown id="create-tearsheet-narrow-dropdown-options-c" initialSelectedItem="Day(s)" items={items} label="Options" titleText="Options" />
          </div>
          <NumberInput iconDescription="Choose a number" id="quantity" min={1} max={100} value={quantity} label="Quantity" invalidText="Max is 10, min is 1" onChange={event => setQuantity(event.imaginaryTarget.value)} />
        </FormGroup>
      </CreateTearsheetNarrow>
    </div>;
}`,...d.parameters?.docs?.source}}};const at=["createTearsheetNarrow","withValidation","withMultipleForms"];export{at as __namedExportsOrder,u as createTearsheetNarrow,tt as default,d as withMultipleForms,p as withValidation};
//# sourceMappingURL=CreateTearsheetNarrow.stories-BQO3uW2s.js.map
