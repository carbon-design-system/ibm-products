var F=Object.defineProperty;var t=(r,d)=>F(r,"name",{value:d,configurable:!0});import{R as e,ai as Q,r as a,B as _,p as G}from"./iframe-BNGWoFVN.js";import{D as q}from"./Dropdown-BQ_2wzrz.js";import{F as M}from"./FormGroup-CiGW62au.js";import{N as o}from"./NumberInput-Cq_mItwW.js";import{T as O}from"./TextInput-DrD-cBjm.js";import{s as Y}from"./_storybook-styles-B4jRGrUa.js";import{s as V,S as B}from"./slug-BThatZaS.js";import{A}from"./index-DMT0QKGP.js";import{E as W}from"./EditTearsheetNarrow-BFbatcpd.js";import{C as $}from"./CreateTearsheetNarrow-DsyWmmyn.js";import"./preload-helper-Cc2_yIPf.js";import"./defaultItemToString-DDHghiWu.js";import"./downshift.esm-CKmaosc4.js";import"./FormContext-BOkH4Ia3.js";import"./inheritsLoose-CdLKJotq.js";import"./index-BGVaWMRy.js";import"./index-CbhpwO1D.js";import"./bucket-20-DnGv9FGc.js";import"./mergeRefs-BH0-8uDG.js";import"./useNormalizedInputProps-BZ7mSUIs.js";import"./Text-BKVLrozK.js";import"./bucket-21-Dc8elOVL.js";import"./useControllableState-DD-t2lIg.js";import"./clamp-ekNJC_Xv.js";import"./bucket-0-DgGA-qIJ.js";import"./bucket-18-CXNFW6DE.js";import"./hasHelperText-CcJ_VphT.js";import"./getAnnouncement-BwJDzAQp.js";import"./bucket-11-VzlUN_tG.js";import"./devtools-DfKI38aY.js";import"./Form-B9NFRf-6.js";import"./TearsheetNarrow-RxwmkY5x.js";import"./TearsheetShell-3Dg2OuQ6.js";import"./useResizeObserver-DhHCg6Do.js";import"./useIsomorphicEffect-C3WxPeS7.js";import"./getNodeTextContent-CjFansOq.js";import"./props-helper-BtRmhizd.js";import"./index-CFH01y5t.js";import"./LayerContext-BHqy-tts.js";import"./ComposedModal-CHYY0ruW.js";import"./isTopmostVisibleModal-CNMer6m0.js";import"./InlineLoading-BUwmRQvj.js";import"./bucket-7-DFXPTo5t.js";import"./ButtonSet-D35-9THN.js";import"./wrapFocus-D8wRDpML.js";import"./index-CdROyjJO.js";import"./Wrap-B6-sXQHz.js";import"./usePortalTarget-BsDIf4KV.js";import"./index-BzfEn4D3.js";import"./useFocus-lrb9v1Au.js";import"./usePresence-Ba3W4fjL.js";import"./useId-BJfoE5r_.js";import"./uuidv4-Fbcg8Vng.js";import"./usePreviousValue-BTb-B77j.js";import"./ActionSet-BUDcAy3c.js";const{action:D}=__STORYBOOK_MODULE_ACTIONS__,Je={title:"Deprecated/Edit and update/EditTearsheetNarrow",component:W,tags:["autodocs"],parameters:{styles:Y,chromatic:{disableSnapshot:!0},docs:{page:t(()=>e.createElement(Q,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/edit-and-update/usage/#tearsheet-edit"}),"page")}},decorators:[r=>e.createElement(A,{type:"deprecation-notice",text:e.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},r())],argTypes:{...V()}},m=`${G.prefix}--create-tearsheet-narrow--story`,h={title:"Edit partition",className:"test-class-name",description:"Select the number of partitions you want to create",formTitle:"Core configuration",formDescription:"We recommend you fill out and evaluate these details at a minimum before deploying your topic.",primaryButtonText:"Save",secondaryButtonText:"Cancel",label:"Test label",selectorPrimaryFocus:"#tearsheet-narrow-story-text-input--1"},j=t(({slug:r,...d})=>{const[s,T]=a.useState(!1),[l,S]=a.useState("Enter topic name here"),[v,N]=a.useState(1),[g,b]=a.useState(1),[y,I]=a.useState(1),[C,w]=a.useState(1),[x,f]=a.useState(1),[R]=a.useState(["Day(s)","Month(s)","Year(s"]),E=v<=0||g<=0||y<=0||C<=0||x<=0;return e.createElement(e.Fragment,null,e.createElement("style",null,`.${h.className} { opacity: 0 }`,";"),e.createElement(_,{onClick:t(()=>T(!s),"onClick")},s?"Close EditTearsheetNarrow":"Open EditTearsheetNarrow"),e.createElement($,{open:s,onRequestClose:t(()=>T(!1),"onRequestClose"),onRequestSubmit:D("onRequestSubmit action called"),disableSubmit:!l||E,slug:r&&B(),...d},e.createElement(O,{labelText:"Topic name",id:"tearsheet-narrow-story-text-input--1",value:l,placeholder:"Enter topic name",onChange:t(i=>S(i.target.value),"onChange")}),e.createElement(o,{id:"partition-count",min:1,max:100,value:v,label:"Partitions",invalidText:"Max partitions is 100, min is 1",onChange:t(i=>N(i.imaginaryTarget.value),"onChange")}),e.createElement(o,{id:"replica-count",min:1,max:100,value:g,label:"Replicas",invalidText:"Max replicas is 10, min is 1",onChange:t(i=>b(i.imaginaryTarget.value),"onChange")}),e.createElement(o,{id:"minimum-in-sync-count",min:1,max:100,value:y,label:"Minimum in-sync replicas",invalidText:"Max is 5, min is 1",onChange:t(i=>I(i.imaginaryTarget.value),"onChange")}),e.createElement("div",{className:`${m}__flex-container`},e.createElement(o,{id:"retention-time",min:1,max:60,value:C,label:"Retention time",invalidText:"Max is 60, min is 1",onChange:t(i=>w(i.imaginaryTarget.value),"onChange")}),e.createElement(q,{id:"create-tearsheet-narrow-dropdown-options-c",initialSelectedItem:"Day(s)",items:R,label:"Options",titleText:"Options"})),e.createElement(o,{id:"quantity",min:1,max:100,value:x,label:"Quantity",invalidText:"Max is 10, min is 1",onChange:t(i=>f(i.imaginaryTarget.value),"onChange")})))},"Template"),P=t(({slug:r,...d})=>{const[s,T]=a.useState(!1),[l,S]=a.useState("Enter topic name here"),[v,N]=a.useState(1),[g,b]=a.useState(1),[y,I]=a.useState(1),[C,w]=a.useState(1),[x,f]=a.useState(1),[R]=a.useState(["Day(s)","Month(s)","Year(s"]),[E,i]=a.useState(!1),k=v<=0||g<=0||y<=0||C<=0||x<=0;return e.createElement(e.Fragment,null,e.createElement("style",null,`.${h.className} { opacity: 0 }`,";"),e.createElement(_,{onClick:t(()=>T(!s),"onClick")},s?"Close EditTearsheetNarrow":"Open EditTearsheetNarrow"),e.createElement($,{open:s,onRequestClose:t(()=>{T(!1),S(""),i(!1)},"onRequestClose"),onRequestSubmit:D("onRequestSubmit action called"),disableSubmit:!l||k,slug:r&&B(),...d},e.createElement(M,{className:`${m}__form ${m}__example-form-group`,legendText:"Topic information"},e.createElement(O,{labelText:"Topic name",id:"tearsheet-narrow-story-text-input--1",value:l,placeholder:"Enter topic name",onChange:t(n=>S(n.target.value),"onChange"),onBlur:t(()=>!l.length&&i(!0),"onBlur"),invalid:E,invalidText:"This is a required field"}),e.createElement(o,{id:"partition-count",min:1,max:100,value:v,label:"Partitions",invalidText:"Max partitions is 100, min is 1",onChange:t(n=>N(n.imaginaryTarget.value),"onChange")}),e.createElement(o,{id:"replica-count",min:1,max:100,value:g,label:"Replicas",invalidText:"Max replicas is 10, min is 1",onChange:t(n=>b(n.imaginaryTarget.value),"onChange")}),e.createElement(o,{id:"minimum-in-sync-count",min:1,max:100,value:y,label:"Minimum in-sync replicas",invalidText:"Max is 5, min is 1",onChange:t(n=>I(n.imaginaryTarget.value),"onChange")})),e.createElement(M,{className:`${m}__form ${m}__example-form-group`,legendText:"Scheduling"},e.createElement("div",{className:`${m}__flex-container`},e.createElement(o,{id:"retention-time",min:1,max:60,value:C,label:"Retention time",invalidText:"Max is 60, min is 1",onChange:t(n=>w(n.imaginaryTarget.value),"onChange")}),e.createElement(q,{id:"create-tearsheet-narrow-dropdown-options-c",initialSelectedItem:"Day(s)",items:R,label:"Options",titleText:"Options"})),e.createElement(o,{id:"quantity",min:1,max:100,value:x,label:"Quantity",invalidText:"Max is 10, min is 1",onChange:t(n=>f(n.imaginaryTarget.value),"onChange")}))))},"WithValidationTemplate"),H="Default",u=j.bind({});u.storyName=H;u.args={...h};const K="With Form Validation",c=P.bind({});c.storyName=K;c.args={...h};const L="With Multiple Forms",p=P.bind({});p.storyName=L;p.args={...h};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`({
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
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
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
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`({
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
}`,...p.parameters?.docs?.source}}};const Xe=["editTearsheetNarrow","withValidation","withMultipleForms"];export{Xe as __namedExportsOrder,Je as default,u as editTearsheetNarrow,p as withMultipleForms,c as withValidation};
//# sourceMappingURL=EditTearsheetNarrow.stories-BzRiol6S.js.map
