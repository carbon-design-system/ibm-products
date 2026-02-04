import{e,S as G,r as t,B,p as W}from"./iframe-BBf3bqTv.js";import{D as $}from"./Dropdown-BaNsfuLx.js";import{F as q}from"./FormGroup-Bc7y84q3.js";import{N as i}from"./NumberInput-DQrLspbe.js";import{T as P}from"./TextInput-McvUY1bW.js";import{s as Y}from"./_storybook-styles-B4jRGrUa.js";import{d as V,s as A,a as b}from"./decorator-DRwU3Sk7.js";import{C as E}from"./CreateTearsheetNarrow-9TQegQwi.js";import{T as O}from"./TruncatedText-DbYAUHIX.js";import"./preload-helper-D9Z9MdNV.js";import"./index-C9bxGSfS.js";import"./inheritsLoose-DHKJTbHM.js";import"./FormContext-CW3fTVyM.js";import"./mergeRefs-BZpmU3mx.js";import"./useNormalizedInputProps-BgZ5uQfL.js";import"./Text-CaNb5F2n.js";import"./bucket-19-zmdOpOwk.js";import"./index-DOwP6x5e.js";import"./defaultItemToString-zSItMTD_.js";import"./utils-BgfmaY2S.js";import"./clamp--00YEiB8.js";import"./useControllableState-DY2q8Reb.js";import"./bucket-17-Do5TN8B6.js";import"./bucket-0-BlUU4S-L.js";import"./bucket-10-BG8-V5O3.js";import"./Form-D5NjAWeq.js";import"./TearsheetNarrow-M2rtEqTy.js";import"./TearsheetShell-D6-OMKbK.js";import"./useResizeObserver-CVVoysON.js";import"./useIsomorphicEffect-ZKZ1smHY.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./props-helper-CYOz70En.js";import"./ComposedModal-BW2ljFCb.js";import"./index-CbeIurAw.js";import"./LayerContext-BOWqFdTq.js";import"./ButtonSet-C3GUdjVj.js";import"./InlineLoading-Iu2BiOBt.js";import"./bucket-6-TRoxTq9G.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./wrapFocus-DaSELL9x.js";import"./index-7K8oyqWX.js";import"./Wrap-BwGjSwQP.js";import"./usePortalTarget-wcltUqTk.js";import"./index-hrngNdBX.js";import"./useFocus-BlxCTRT7.js";import"./usePreviousValue-Bzpu_MqH.js";import"./ActionSet-ByaSX0Ns.js";import"./devtools-c2gfrTL0.js";import"./uuidv4-BN2rGLQG.js";const{action:k}=__STORYBOOK_MODULE_ACTIONS__,Ae={title:"Patterns/Prebuilt patterns/Create flows/CreateTearsheetNarrow",component:E,tags:["autodocs"],argTypes:{description:{control:{type:"select",labels:{0:"With plain String",1:"With TruncatedText and 1 line",2:"With TruncatedText and 2 lines"},default:0},description:"A description of the flow, displayed in the header area of the tearsheet.\n Note: `TruncatedText` can be passed as a React node to apply custom text formatting, including ellipsis truncation and a definition tooltip when the content is too long.",options:[0,1,2],mapping:{0:"Select the number of partitions you want to create",1:e.createElement(O,{lines:1,tooltipDirection:"bottom",value:"This is a description for the tearsheet, providing an opportunity to describe the flow over a couple of lines in the header of the tearsheet."}),2:e.createElement(O,{lines:2,truncate:!0,tooltipDirection:"bottom",value:"This is a description for the tearsheet, providing an opportunity to describe the flow over a couple of lines in the header of the tearsheet."})}},children:{control:{disable:!0}},...A(),...V()},parameters:{styles:Y,docs:{page:()=>e.createElement(G,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/create-flows/usage/#narrow-tearsheet"})}}},s=`${W.prefix}--create-tearsheet-narrow--story`,y={title:"Create partition",className:"test-class-name",description:0,formTitle:"Core configuration",formDescription:"We recommend you fill out and evaluate these details at a minimum before deploying your topic.",primaryButtonText:"Create",secondaryButtonText:"Cancel",label:"Test label",selectorPrimaryFocus:"#tearsheet-narrow-story-text-input--1"},H=({slug:u,decorator:p,...S},N)=>{const[o,d]=t.useState(N.viewMode!=="docs"),[r,x]=t.useState(""),[v,w]=t.useState(1),[T,f]=t.useState(1),[C,I]=t.useState(1),[h,R]=t.useState(1),[g,D]=t.useState(1),[M]=t.useState(["Day(s)","Month(s)","Year(s"]),_=v<=0||T<=0||C<=0||h<=0||g<=0;return e.createElement("div",null,e.createElement("style",null,`.${y.className} { opacity: 0 }`,";"),e.createElement(B,{onClick:()=>d(!o)},o?"Close CreateTearsheetNarrow":"Open CreateTearsheetNarrow"),e.createElement(E,{open:o,onRequestClose:()=>d(!1),onRequestSubmit:k("onRequestSubmit action called"),disableSubmit:!r||_,slug:u&&b(u),decorator:p&&b(p),...S},e.createElement(P,{labelText:"Topic name",id:"tearsheet-narrow-story-text-input--1",value:r,placeholder:"Enter topic name",onChange:a=>x(a.target.value)}),e.createElement(i,{iconDescription:"Choose a number",id:"partition-count",min:1,max:100,value:v,label:"Partitions",invalidText:"Max partitions is 100, min is 1",onChange:a=>w(a.imaginaryTarget.value)}),e.createElement(i,{iconDescription:"Choose a number",id:"replica-count",min:1,max:100,value:T,label:"Replicas",invalidText:"Max replicas is 10, min is 1",onChange:a=>f(a.imaginaryTarget.value)}),e.createElement(i,{iconDescription:"Choose a number",id:"minimum-in-sync-count",min:1,max:100,value:C,label:"Minimum in-sync replicas",invalidText:"Max is 5, min is 1",onChange:a=>I(a.imaginaryTarget.value)}),e.createElement("div",{className:`${s}__flex-container`},e.createElement(i,{iconDescription:"Choose a number",id:"retention-time",min:1,max:60,value:h,label:"Retention time",invalidText:"Max is 60, min is 1",onChange:a=>R(a.imaginaryTarget.value)}),e.createElement($,{id:"create-tearsheet-narrow-dropdown-options-c",initialSelectedItem:"Day(s)",items:M,label:"Options",titleText:"Options"})),e.createElement(i,{iconDescription:"Choose a number",id:"quantity",min:1,max:100,value:g,label:"Quantity",invalidText:"Max is 10, min is 1",onChange:a=>D(a.imaginaryTarget.value)})))},F=({slug:u,decorator:p,...S},N)=>{const[o,d]=t.useState(N.viewMode!=="docs"),[r,x]=t.useState(""),[v,w]=t.useState(1),[T,f]=t.useState(1),[C,I]=t.useState(1),[h,R]=t.useState(1),[g,D]=t.useState(1),[M]=t.useState(["Day(s)","Month(s)","Year(s"]),[_,a]=t.useState(!1),Q=v<=0||T<=0||C<=0||h<=0||g<=0;return e.createElement("div",null,e.createElement("style",null,`.${y.className} { opacity: 0 }`,";"),e.createElement(B,{onClick:()=>d(!o)},o?"Close CreateTearsheetNarrow":"Open CreateTearsheetNarrow"),e.createElement(E,{open:o,onRequestClose:()=>{d(!1),x(""),a(!1)},onRequestSubmit:k("onRequestSubmit action called"),disableSubmit:!r||Q,slug:u&&b(u),decorator:p&&b(p),...S},e.createElement(q,{className:`${s}__form ${s}__example-form-group`,legendText:"Topic information"},e.createElement(P,{labelText:"Topic name",id:"tearsheet-narrow-story-text-input--1",value:r,placeholder:"Enter topic name",onChange:n=>x(n.target.value),onBlur:()=>!r.length&&a(!0),invalid:_,invalidText:"This is a required field"}),e.createElement(i,{iconDescription:"Choose a number",id:"partition-count",min:1,max:100,value:v,label:"Partitions",invalidText:"Max partitions is 100, min is 1",onChange:n=>w(n.imaginaryTarget.value)}),e.createElement(i,{iconDescription:"Choose a number",id:"replica-count",min:1,max:100,value:T,label:"Replicas",invalidText:"Max replicas is 10, min is 1",onChange:n=>f(n.imaginaryTarget.value)}),e.createElement(i,{iconDescription:"Choose a number",id:"minimum-in-sync-count",min:1,max:100,value:C,label:"Minimum in-sync replicas",invalidText:"Max is 5, min is 1",onChange:n=>I(n.imaginaryTarget.value)})),e.createElement(q,{className:`${s}__form ${s}__example-form-group`,legendText:"Scheduling"},e.createElement("div",{className:`${s}__flex-container`},e.createElement(i,{iconDescription:"Choose a number",id:"retention-time",min:1,max:60,value:h,label:"Retention time",invalidText:"Max is 60, min is 1",onChange:n=>R(n.imaginaryTarget.value)}),e.createElement($,{id:"create-tearsheet-narrow-dropdown-options-c",initialSelectedItem:"Day(s)",items:M,label:"Options",titleText:"Options"})),e.createElement(i,{iconDescription:"Choose a number",id:"quantity",min:1,max:100,value:g,label:"Quantity",invalidText:"Max is 10, min is 1",onChange:n=>D(n.imaginaryTarget.value)}))))},K="Default",l=H.bind({});l.storyName=K;l.args={...y};const L="With Form Validation",m=F.bind({});m.storyName=L;m.args={...y};const U="With Multiple Forms",c=F.bind({});c.storyName=U;c.args={...y};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`({
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
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`({
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
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
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
}`,...c.parameters?.docs?.source}}};const He=["createTearsheetNarrow","withValidation","withMultipleForms"];export{He as __namedExportsOrder,l as createTearsheetNarrow,Ae as default,c as withMultipleForms,m as withValidation};
//# sourceMappingURL=CreateTearsheetNarrow.stories-DbGqmlNV.js.map
