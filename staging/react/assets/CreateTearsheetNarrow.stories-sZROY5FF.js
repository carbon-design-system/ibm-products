var W=Object.defineProperty;var t=(r,s)=>W(r,"name",{value:s,configurable:!0});import{R as e,ah as Y,r as a,B as $,p as V}from"./iframe-AQ-BiXqb.js";import{D as P}from"./Dropdown-Dx5BSpjE.js";import{F as O}from"./FormGroup-gqlUTVoT.js";import{N as o}from"./NumberInput-DrqcwUKg.js";import{T as k}from"./TextInput-6KNOz_JO.js";import{s as A}from"./_storybook-styles-B4jRGrUa.js";import{d as H,s as K,a as S}from"./decorator-CEWELJAx.js";import{C as q}from"./CreateTearsheetNarrow-DWjdiCH9.js";import{T as B}from"./TruncatedText-BfHh_GPh.js";import"./preload-helper-Cc2_yIPf.js";import"./defaultItemToString-DDHghiWu.js";import"./useNormalizedInputProps-BnR5QOMF.js";import"./Text-Dsm_R2xh.js";import"./bucket-20-BcR2p0qs.js";import"./index-qzm5qFKq.js";import"./index-Fa8k82Av.js";import"./bucket-19-CwFHWh6u.js";import"./downshift.esm-ChF4f0t9.js";import"./FormContext-D-Seu0q0.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./useControllableState-BkXCH9yg.js";import"./clamp-ekNJC_Xv.js";import"./bucket-0-CR3j4wIT.js";import"./bucket-17-CAM4_o7B.js";import"./hasHelperText-CcJ_VphT.js";import"./bucket-10-Bksw52J5.js";import"./Form-BC-HEkYt.js";import"./TearsheetNarrow-CSbaJ6XZ.js";import"./TearsheetShell-BgfXhB84.js";import"./useResizeObserver-Do33kQkr.js";import"./useIsomorphicEffect-6UMNTwlI.js";import"./getNodeTextContent-CjFansOq.js";import"./props-helper-B9mZyXXv.js";import"./index-BqjEa5xh.js";import"./LayerContext-XFxZ9wyv.js";import"./ComposedModal-DmVWaX7l.js";import"./toggleClass-nCY9tTpf.js";import"./InlineLoading-C_kEiLlS.js";import"./bucket-6-Ch-ncPVP.js";import"./ButtonSet-DxHfgiWq.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-BuLK8cQJ.js";import"./index-B4M1cy69.js";import"./Wrap-C6n7qtqI.js";import"./usePortalTarget-B4MSwqBR.js";import"./index-BADmuj8j.js";import"./useFocus-BL0kPL6u.js";import"./usePresence-9BRczg7C.js";import"./useId-BIuPFXmX.js";import"./uuidv4-Fbcg8Vng.js";import"./usePreviousValue-0TKt-UMc.js";import"./ActionSet-CPJK-4Zj.js";import"./devtools-B5UnDfi3.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Patterns/Prebuilt patterns/Create flows/CreateTearsheetNarrow",component:q,tags:["autodocs"],argTypes:{description:{control:{type:"select",labels:{0:"With plain String",1:"With TruncatedText and 1 line",2:"With TruncatedText and 2 lines"},default:0},description:"A description of the flow, displayed in the header area of the tearsheet.\n Note: `TruncatedText` can be passed as a React node to apply custom text formatting, including ellipsis truncation and a definition tooltip when the content is too long.",options:[0,1,2],mapping:{0:"Select the number of partitions you want to create",1:e.createElement(B,{lines:1,tooltipDirection:"bottom",value:"This is a description for the tearsheet, providing an opportunity to describe the flow over a couple of lines in the header of the tearsheet."}),2:e.createElement(B,{lines:2,truncate:!0,tooltipDirection:"bottom",value:"This is a description for the tearsheet, providing an opportunity to describe the flow over a couple of lines in the header of the tearsheet."})}},children:{control:{disable:!0}},...K(),...H()},parameters:{styles:A,docs:{page:t(()=>e.createElement(Y,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/create-flows/usage/#narrow-tearsheet"}),"page")}}},c=`${V.prefix}--create-tearsheet-narrow--story`,x={title:"Create partition",className:"test-class-name",description:0,formTitle:"Core configuration",formDescription:"We recommend you fill out and evaluate these details at a minimum before deploying your topic.",primaryButtonText:"Create",secondaryButtonText:"Cancel",label:"Test label",selectorPrimaryFocus:"#tearsheet-narrow-story-text-input--1"},L=t(({slug:r,decorator:s,...N},w)=>{const[l,v]=a.useState(w.viewMode!=="docs"),[m,b]=a.useState(""),[T,f]=a.useState(1),[C,I]=a.useState(1),[h,R]=a.useState(1),[g,D]=a.useState(1),[y,M]=a.useState(1),[_]=a.useState(["Day(s)","Month(s)","Year(s"]),E=T<=0||C<=0||h<=0||g<=0||y<=0;return e.createElement("div",null,e.createElement("style",null,`.${x.className} { opacity: 0 }`,";"),e.createElement($,{onClick:t(()=>v(!l),"onClick")},l?"Close CreateTearsheetNarrow":"Open CreateTearsheetNarrow"),e.createElement(q,{open:l,onRequestClose:t(()=>v(!1),"onRequestClose"),onRequestSubmit:F("onRequestSubmit action called"),disableSubmit:!m||E,slug:r&&S(r),decorator:s&&S(s),...N},e.createElement(k,{labelText:"Topic name",id:"tearsheet-narrow-story-text-input--1",value:m,placeholder:"Enter topic name",onChange:t(i=>b(i.target.value),"onChange")}),e.createElement(o,{iconDescription:"Choose a number",id:"partition-count",min:1,max:100,value:T,label:"Partitions",invalidText:"Max partitions is 100, min is 1",onChange:t(i=>f(i.imaginaryTarget.value),"onChange")}),e.createElement(o,{iconDescription:"Choose a number",id:"replica-count",min:1,max:100,value:C,label:"Replicas",invalidText:"Max replicas is 10, min is 1",onChange:t(i=>I(i.imaginaryTarget.value),"onChange")}),e.createElement(o,{iconDescription:"Choose a number",id:"minimum-in-sync-count",min:1,max:100,value:h,label:"Minimum in-sync replicas",invalidText:"Max is 5, min is 1",onChange:t(i=>R(i.imaginaryTarget.value),"onChange")}),e.createElement("div",{className:`${c}__flex-container`},e.createElement(o,{iconDescription:"Choose a number",id:"retention-time",min:1,max:60,value:g,label:"Retention time",invalidText:"Max is 60, min is 1",onChange:t(i=>D(i.imaginaryTarget.value),"onChange")}),e.createElement(P,{id:"create-tearsheet-narrow-dropdown-options-c",initialSelectedItem:"Day(s)",items:_,label:"Options",titleText:"Options"})),e.createElement(o,{iconDescription:"Choose a number",id:"quantity",min:1,max:100,value:y,label:"Quantity",invalidText:"Max is 10, min is 1",onChange:t(i=>M(i.imaginaryTarget.value),"onChange")})))},"Template"),Q=t(({slug:r,decorator:s,...N},w)=>{const[l,v]=a.useState(w.viewMode!=="docs"),[m,b]=a.useState(""),[T,f]=a.useState(1),[C,I]=a.useState(1),[h,R]=a.useState(1),[g,D]=a.useState(1),[y,M]=a.useState(1),[_]=a.useState(["Day(s)","Month(s)","Year(s"]),[E,i]=a.useState(!1),G=T<=0||C<=0||h<=0||g<=0||y<=0;return e.createElement("div",null,e.createElement("style",null,`.${x.className} { opacity: 0 }`,";"),e.createElement($,{onClick:t(()=>v(!l),"onClick")},l?"Close CreateTearsheetNarrow":"Open CreateTearsheetNarrow"),e.createElement(q,{open:l,onRequestClose:t(()=>{v(!1),b(""),i(!1)},"onRequestClose"),onRequestSubmit:F("onRequestSubmit action called"),disableSubmit:!m||G,slug:r&&S(r),decorator:s&&S(s),...N},e.createElement(O,{className:`${c}__form ${c}__example-form-group`,legendText:"Topic information"},e.createElement(k,{labelText:"Topic name",id:"tearsheet-narrow-story-text-input--1",value:m,placeholder:"Enter topic name",onChange:t(n=>b(n.target.value),"onChange"),onBlur:t(()=>!m.length&&i(!0),"onBlur"),invalid:E,invalidText:"This is a required field"}),e.createElement(o,{iconDescription:"Choose a number",id:"partition-count",min:1,max:100,value:T,label:"Partitions",invalidText:"Max partitions is 100, min is 1",onChange:t(n=>f(n.imaginaryTarget.value),"onChange")}),e.createElement(o,{iconDescription:"Choose a number",id:"replica-count",min:1,max:100,value:C,label:"Replicas",invalidText:"Max replicas is 10, min is 1",onChange:t(n=>I(n.imaginaryTarget.value),"onChange")}),e.createElement(o,{iconDescription:"Choose a number",id:"minimum-in-sync-count",min:1,max:100,value:h,label:"Minimum in-sync replicas",invalidText:"Max is 5, min is 1",onChange:t(n=>R(n.imaginaryTarget.value),"onChange")})),e.createElement(O,{className:`${c}__form ${c}__example-form-group`,legendText:"Scheduling"},e.createElement("div",{className:`${c}__flex-container`},e.createElement(o,{iconDescription:"Choose a number",id:"retention-time",min:1,max:60,value:g,label:"Retention time",invalidText:"Max is 60, min is 1",onChange:t(n=>D(n.imaginaryTarget.value),"onChange")}),e.createElement(P,{id:"create-tearsheet-narrow-dropdown-options-c",initialSelectedItem:"Day(s)",items:_,label:"Options",titleText:"Options"})),e.createElement(o,{iconDescription:"Choose a number",id:"quantity",min:1,max:100,value:y,label:"Quantity",invalidText:"Max is 10, min is 1",onChange:t(n=>M(n.imaginaryTarget.value),"onChange")}))))},"WithValidationTemplate"),U="Default",u=L.bind({});u.storyName=U;u.args={...x};const j="With Form Validation",p=Q.bind({});p.storyName=j;p.args={...x};const z="With Multiple Forms",d=Q.bind({});d.storyName=z;d.args={...x};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`({
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
}`,...d.parameters?.docs?.source}}};const Ze=["createTearsheetNarrow","withValidation","withMultipleForms"];export{Ze as __namedExportsOrder,u as createTearsheetNarrow,Xe as default,d as withMultipleForms,p as withValidation};
//# sourceMappingURL=CreateTearsheetNarrow.stories-sZROY5FF.js.map
