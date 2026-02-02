import{e,S as k,r as t,B as M,p as F}from"./iframe-BbTYfv9-.js";import{D as _}from"./Dropdown-BsaPmP1_.js";import{F as E}from"./FormGroup-B3b7XRZY.js";import{N as i}from"./NumberInput-Bq5ylnNA.js";import{T as q}from"./TextInput-Du3rpjcU.js";import{s as Q}from"./_storybook-styles-B4jRGrUa.js";import{s as G,S as O}from"./slug-Dgm-TqwV.js";import{A as Y}from"./index-KnhCxvuW.js";import{E as V}from"./EditTearsheetNarrow-D3a_tG-l.js";import{C as B}from"./CreateTearsheetNarrow-C3BMOmvE.js";import"./preload-helper-D9Z9MdNV.js";import"./index-Bo8gO87W.js";import"./inheritsLoose-DHKJTbHM.js";import"./FormContext-DY8rSwJV.js";import"./mergeRefs-BZpmU3mx.js";import"./useNormalizedInputProps-DZ8P3UsW.js";import"./Text-CJYku-mr.js";import"./bucket-19-DKyp3qQO.js";import"./index-DxihRps1.js";import"./defaultItemToString-zSItMTD_.js";import"./utils-C-ow7gcy.js";import"./clamp--00YEiB8.js";import"./useControllableState-D_LENDKK.js";import"./bucket-17-CwHsRtB8.js";import"./bucket-0-DpCnEeoO.js";import"./bucket-10-Cya3ufu0.js";import"./devtools-KS_k4bKc.js";import"./Form-DKRHIJqZ.js";import"./TearsheetNarrow-BPCWY5d2.js";import"./TearsheetShell-C8v5h5aU.js";import"./useResizeObserver-DG4fyqZH.js";import"./useIsomorphicEffect-omIe2Oju.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./props-helper-fbCn-Z71.js";import"./ComposedModal-DsGf30ws.js";import"./index-CiA8v0SK.js";import"./LayerContext-DTkiAC__.js";import"./ButtonSet-CRhG9zQ2.js";import"./InlineLoading-J4T5f71r.js";import"./bucket-6-D484BBya.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./wrapFocus-CeU4PdEv.js";import"./index-DADqHIn3.js";import"./Wrap-BTpem4Cx.js";import"./usePortalTarget-CQmsAlyZ.js";import"./index-aiv_WSu0.js";import"./useFocus-DzkM3UDm.js";import"./usePreviousValue-z0wuNVJu.js";import"./ActionSet-BkLkGxhx.js";import"./uuidv4-BN2rGLQG.js";const{action:$}=__STORYBOOK_MODULE_ACTIONS__,Ae={title:"Deprecated/Edit and update/EditTearsheetNarrow",component:V,tags:["autodocs"],parameters:{styles:Q,docs:{page:()=>e.createElement(k,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/edit-and-update/usage/#tearsheet-edit"})}},decorators:[c=>e.createElement(Y,{type:"deprecation-notice",text:e.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},c())],argTypes:{...G()}},s=`${F.prefix}--create-tearsheet-narrow--story`,C={title:"Edit partition",className:"test-class-name",description:"Select the number of partitions you want to create",formTitle:"Core configuration",formDescription:"We recommend you fill out and evaluate these details at a minimum before deploying your topic.",primaryButtonText:"Save",secondaryButtonText:"Cancel",label:"Test label",selectorPrimaryFocus:"#tearsheet-narrow-story-text-input--1"},A=({slug:c,...h})=>{const[o,p]=t.useState(!1),[r,x]=t.useState("Enter topic name here"),[d,S]=t.useState(1),[T,N]=t.useState(1),[v,b]=t.useState(1),[g,I]=t.useState(1),[y,w]=t.useState(1),[f]=t.useState(["Day(s)","Month(s)","Year(s"]),R=d<=0||T<=0||v<=0||g<=0||y<=0;return e.createElement(e.Fragment,null,e.createElement("style",null,`.${C.className} { opacity: 0 }`,";"),e.createElement(M,{onClick:()=>p(!o)},o?"Close EditTearsheetNarrow":"Open EditTearsheetNarrow"),e.createElement(B,{open:o,onRequestClose:()=>p(!1),onRequestSubmit:$("onRequestSubmit action called"),disableSubmit:!r||R,slug:c&&O(),...h},e.createElement(q,{labelText:"Topic name",id:"tearsheet-narrow-story-text-input--1",value:r,placeholder:"Enter topic name",onChange:a=>x(a.target.value)}),e.createElement(i,{id:"partition-count",min:1,max:100,value:d,label:"Partitions",invalidText:"Max partitions is 100, min is 1",onChange:a=>S(a.imaginaryTarget.value)}),e.createElement(i,{id:"replica-count",min:1,max:100,value:T,label:"Replicas",invalidText:"Max replicas is 10, min is 1",onChange:a=>N(a.imaginaryTarget.value)}),e.createElement(i,{id:"minimum-in-sync-count",min:1,max:100,value:v,label:"Minimum in-sync replicas",invalidText:"Max is 5, min is 1",onChange:a=>b(a.imaginaryTarget.value)}),e.createElement("div",{className:`${s}__flex-container`},e.createElement(i,{id:"retention-time",min:1,max:60,value:g,label:"Retention time",invalidText:"Max is 60, min is 1",onChange:a=>I(a.imaginaryTarget.value)}),e.createElement(_,{id:"create-tearsheet-narrow-dropdown-options-c",initialSelectedItem:"Day(s)",items:f,label:"Options",titleText:"Options"})),e.createElement(i,{id:"quantity",min:1,max:100,value:y,label:"Quantity",invalidText:"Max is 10, min is 1",onChange:a=>w(a.imaginaryTarget.value)})))},D=({slug:c,...h})=>{const[o,p]=t.useState(!1),[r,x]=t.useState("Enter topic name here"),[d,S]=t.useState(1),[T,N]=t.useState(1),[v,b]=t.useState(1),[g,I]=t.useState(1),[y,w]=t.useState(1),[f]=t.useState(["Day(s)","Month(s)","Year(s"]),[R,a]=t.useState(!1),P=d<=0||T<=0||v<=0||g<=0||y<=0;return e.createElement(e.Fragment,null,e.createElement("style",null,`.${C.className} { opacity: 0 }`,";"),e.createElement(M,{onClick:()=>p(!o)},o?"Close EditTearsheetNarrow":"Open EditTearsheetNarrow"),e.createElement(B,{open:o,onRequestClose:()=>{p(!1),x(""),a(!1)},onRequestSubmit:$("onRequestSubmit action called"),disableSubmit:!r||P,slug:c&&O(),...h},e.createElement(E,{className:`${s}__form ${s}__example-form-group`,legendText:"Topic information"},e.createElement(q,{labelText:"Topic name",id:"tearsheet-narrow-story-text-input--1",value:r,placeholder:"Enter topic name",onChange:n=>x(n.target.value),onBlur:()=>!r.length&&a(!0),invalid:R,invalidText:"This is a required field"}),e.createElement(i,{id:"partition-count",min:1,max:100,value:d,label:"Partitions",invalidText:"Max partitions is 100, min is 1",onChange:n=>S(n.imaginaryTarget.value)}),e.createElement(i,{id:"replica-count",min:1,max:100,value:T,label:"Replicas",invalidText:"Max replicas is 10, min is 1",onChange:n=>N(n.imaginaryTarget.value)}),e.createElement(i,{id:"minimum-in-sync-count",min:1,max:100,value:v,label:"Minimum in-sync replicas",invalidText:"Max is 5, min is 1",onChange:n=>b(n.imaginaryTarget.value)})),e.createElement(E,{className:`${s}__form ${s}__example-form-group`,legendText:"Scheduling"},e.createElement("div",{className:`${s}__flex-container`},e.createElement(i,{id:"retention-time",min:1,max:60,value:g,label:"Retention time",invalidText:"Max is 60, min is 1",onChange:n=>I(n.imaginaryTarget.value)}),e.createElement(_,{id:"create-tearsheet-narrow-dropdown-options-c",initialSelectedItem:"Day(s)",items:f,label:"Options",titleText:"Options"})),e.createElement(i,{id:"quantity",min:1,max:100,value:y,label:"Quantity",invalidText:"Max is 10, min is 1",onChange:n=>w(n.imaginaryTarget.value)}))))},W="Default",l=A.bind({});l.storyName=W;l.args={...C};const j="With Form Validation",m=D.bind({});m.storyName=j;m.args={...C};const H="With Multiple Forms",u=D.bind({});u.storyName=H;u.args={...C};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`({
  slug,
  ...args
}) => {
  const [open, setOpen] = useState(false);
  const [topicName, setTopicName] = useState('Enter topic name here');
  const [partitionCount, setPartitionCount] = useState(1);
  const [replicaCount, setReplicaCount] = useState(1);
  const [minimumInSyncReplicaCount, setMinimumInSyncReplicaCount] = useState(1);
  const [retentionTime, setRetentionTime] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [items] = useState(['Day(s)', 'Month(s)', 'Year(s']);
  const numberInputsInvalid = partitionCount <= 0 || replicaCount <= 0 || minimumInSyncReplicaCount <= 0 || retentionTime <= 0 || quantity <= 0;
  return <>
      <style>{\`.\${defaultStoryProps.className} { opacity: 0 }\`};</style>
      <Button onClick={() => setOpen(!open)}>
        {open ? 'Close EditTearsheetNarrow' : 'Open EditTearsheetNarrow'}
      </Button>
      <CreateTearsheetNarrow open={open} onRequestClose={() => setOpen(false)} onRequestSubmit={action('onRequestSubmit action called')} disableSubmit={!topicName || numberInputsInvalid} slug={slug && SlugSample()} {...args}>
        <TextInput labelText="Topic name" id="tearsheet-narrow-story-text-input--1" value={topicName} placeholder="Enter topic name" onChange={event => setTopicName(event.target.value)} />
        <NumberInput id="partition-count" min={1} max={100} value={partitionCount} label="Partitions" invalidText="Max partitions is 100, min is 1" onChange={event => setPartitionCount(event.imaginaryTarget.value)} />
        <NumberInput id="replica-count" min={1} max={100} value={replicaCount} label="Replicas" invalidText="Max replicas is 10, min is 1" onChange={event => setReplicaCount(event.imaginaryTarget.value)} />
        <NumberInput id="minimum-in-sync-count" min={1} max={100} value={minimumInSyncReplicaCount} label="Minimum in-sync replicas" invalidText="Max is 5, min is 1" onChange={event => setMinimumInSyncReplicaCount(event.imaginaryTarget.value)} />
        <div className={\`\${createTearsheetNarrowBlockClass}__flex-container\`}>
          <NumberInput id="retention-time" min={1} max={60} value={retentionTime} label="Retention time" invalidText="Max is 60, min is 1" onChange={event => setRetentionTime(event.imaginaryTarget.value)} />
          <Dropdown id="create-tearsheet-narrow-dropdown-options-c" initialSelectedItem="Day(s)" items={items} label="Options" titleText="Options" />
        </div>
        <NumberInput id="quantity" min={1} max={100} value={quantity} label="Quantity" invalidText="Max is 10, min is 1" onChange={event => setQuantity(event.imaginaryTarget.value)} />
      </CreateTearsheetNarrow>
    </>;
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`({
  slug,
  ...args
}) => {
  const [open, setOpen] = useState(false);
  const [topicName, setTopicName] = useState('Enter topic name here');
  const [partitionCount, setPartitionCount] = useState(1);
  const [replicaCount, setReplicaCount] = useState(1);
  const [minimumInSyncReplicaCount, setMinimumInSyncReplicaCount] = useState(1);
  const [retentionTime, setRetentionTime] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [items] = useState(['Day(s)', 'Month(s)', 'Year(s']);
  const [invalid, setInvalid] = useState(false);
  const numberInputsInvalid = partitionCount <= 0 || replicaCount <= 0 || minimumInSyncReplicaCount <= 0 || retentionTime <= 0 || quantity <= 0;
  return <>
      <style>{\`.\${defaultStoryProps.className} { opacity: 0 }\`};</style>
      <Button onClick={() => setOpen(!open)}>
        {open ? 'Close EditTearsheetNarrow' : 'Open EditTearsheetNarrow'}
      </Button>
      <CreateTearsheetNarrow open={open} onRequestClose={() => {
      setOpen(false);
      setTopicName('');
      setInvalid(false);
    }} onRequestSubmit={action('onRequestSubmit action called')} disableSubmit={!topicName || numberInputsInvalid} slug={slug && SlugSample()} {...args}>
        <FormGroup className={\`\${createTearsheetNarrowBlockClass}__form \${createTearsheetNarrowBlockClass}__example-form-group\`} legendText="Topic information">
          <TextInput labelText="Topic name" id="tearsheet-narrow-story-text-input--1" value={topicName} placeholder="Enter topic name" onChange={event => setTopicName(event.target.value)} onBlur={() => !topicName.length && setInvalid(true)} invalid={invalid} invalidText="This is a required field" />
          <NumberInput id="partition-count" min={1} max={100} value={partitionCount} label="Partitions" invalidText="Max partitions is 100, min is 1" onChange={event => setPartitionCount(event.imaginaryTarget.value)} />
          <NumberInput id="replica-count" min={1} max={100} value={replicaCount} label="Replicas" invalidText="Max replicas is 10, min is 1" onChange={event => setReplicaCount(event.imaginaryTarget.value)} />
          <NumberInput id="minimum-in-sync-count" min={1} max={100} value={minimumInSyncReplicaCount} label="Minimum in-sync replicas" invalidText="Max is 5, min is 1" onChange={event => setMinimumInSyncReplicaCount(event.imaginaryTarget.value)} />
        </FormGroup>
        <FormGroup className={\`\${createTearsheetNarrowBlockClass}__form \${createTearsheetNarrowBlockClass}__example-form-group\`} legendText="Scheduling">
          <div className={\`\${createTearsheetNarrowBlockClass}__flex-container\`}>
            <NumberInput id="retention-time" min={1} max={60} value={retentionTime} label="Retention time" invalidText="Max is 60, min is 1" onChange={event => setRetentionTime(event.imaginaryTarget.value)} />
            <Dropdown id="create-tearsheet-narrow-dropdown-options-c" initialSelectedItem="Day(s)" items={items} label="Options" titleText="Options" />
          </div>
          <NumberInput id="quantity" min={1} max={100} value={quantity} label="Quantity" invalidText="Max is 10, min is 1" onChange={event => setQuantity(event.imaginaryTarget.value)} />
        </FormGroup>
      </CreateTearsheetNarrow>
    </>;
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`({
  slug,
  ...args
}) => {
  const [open, setOpen] = useState(false);
  const [topicName, setTopicName] = useState('Enter topic name here');
  const [partitionCount, setPartitionCount] = useState(1);
  const [replicaCount, setReplicaCount] = useState(1);
  const [minimumInSyncReplicaCount, setMinimumInSyncReplicaCount] = useState(1);
  const [retentionTime, setRetentionTime] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [items] = useState(['Day(s)', 'Month(s)', 'Year(s']);
  const [invalid, setInvalid] = useState(false);
  const numberInputsInvalid = partitionCount <= 0 || replicaCount <= 0 || minimumInSyncReplicaCount <= 0 || retentionTime <= 0 || quantity <= 0;
  return <>
      <style>{\`.\${defaultStoryProps.className} { opacity: 0 }\`};</style>
      <Button onClick={() => setOpen(!open)}>
        {open ? 'Close EditTearsheetNarrow' : 'Open EditTearsheetNarrow'}
      </Button>
      <CreateTearsheetNarrow open={open} onRequestClose={() => {
      setOpen(false);
      setTopicName('');
      setInvalid(false);
    }} onRequestSubmit={action('onRequestSubmit action called')} disableSubmit={!topicName || numberInputsInvalid} slug={slug && SlugSample()} {...args}>
        <FormGroup className={\`\${createTearsheetNarrowBlockClass}__form \${createTearsheetNarrowBlockClass}__example-form-group\`} legendText="Topic information">
          <TextInput labelText="Topic name" id="tearsheet-narrow-story-text-input--1" value={topicName} placeholder="Enter topic name" onChange={event => setTopicName(event.target.value)} onBlur={() => !topicName.length && setInvalid(true)} invalid={invalid} invalidText="This is a required field" />
          <NumberInput id="partition-count" min={1} max={100} value={partitionCount} label="Partitions" invalidText="Max partitions is 100, min is 1" onChange={event => setPartitionCount(event.imaginaryTarget.value)} />
          <NumberInput id="replica-count" min={1} max={100} value={replicaCount} label="Replicas" invalidText="Max replicas is 10, min is 1" onChange={event => setReplicaCount(event.imaginaryTarget.value)} />
          <NumberInput id="minimum-in-sync-count" min={1} max={100} value={minimumInSyncReplicaCount} label="Minimum in-sync replicas" invalidText="Max is 5, min is 1" onChange={event => setMinimumInSyncReplicaCount(event.imaginaryTarget.value)} />
        </FormGroup>
        <FormGroup className={\`\${createTearsheetNarrowBlockClass}__form \${createTearsheetNarrowBlockClass}__example-form-group\`} legendText="Scheduling">
          <div className={\`\${createTearsheetNarrowBlockClass}__flex-container\`}>
            <NumberInput id="retention-time" min={1} max={60} value={retentionTime} label="Retention time" invalidText="Max is 60, min is 1" onChange={event => setRetentionTime(event.imaginaryTarget.value)} />
            <Dropdown id="create-tearsheet-narrow-dropdown-options-c" initialSelectedItem="Day(s)" items={items} label="Options" titleText="Options" />
          </div>
          <NumberInput id="quantity" min={1} max={100} value={quantity} label="Quantity" invalidText="Max is 10, min is 1" onChange={event => setQuantity(event.imaginaryTarget.value)} />
        </FormGroup>
      </CreateTearsheetNarrow>
    </>;
}`,...u.parameters?.docs?.source}}};const We=["editTearsheetNarrow","withValidation","withMultipleForms"];export{We as __namedExportsOrder,Ae as default,l as editTearsheetNarrow,u as withMultipleForms,m as withValidation};
//# sourceMappingURL=EditTearsheetNarrow.stories-Big-QOXx.js.map
