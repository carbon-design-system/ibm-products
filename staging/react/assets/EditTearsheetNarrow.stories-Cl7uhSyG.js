var F=Object.defineProperty;var t=(r,d)=>F(r,"name",{value:d,configurable:!0});import{e,S as Q,r as a,B as _,p as G}from"./iframe-Cyj4LIh5.js";import{D as q}from"./Dropdown-DFN0MI2V.js";import{F as M}from"./FormGroup-gic93zTi.js";import{N as o}from"./NumberInput-CBcnLFy_.js";import{T as O}from"./TextInput-BiBOrj07.js";import{s as Y}from"./_storybook-styles-B4jRGrUa.js";import{s as V,S as B}from"./slug-DvPMqCuY.js";import{A}from"./index-CIWihwQc.js";import{E as W}from"./EditTearsheetNarrow-C6UjBRCW.js";import{C as $}from"./CreateTearsheetNarrow-D9LQZRc-.js";import"./preload-helper-Cc2_yIPf.js";import"./defaultItemToString-DDHghiWu.js";import"./useNormalizedInputProps-DwDb6zRU.js";import"./Text-B0E6WkMH.js";import"./bucket-20-Dg4NJRV5.js";import"./index-CrQOVYp8.js";import"./index-DbpC7nej.js";import"./bucket-19-B7hMRFoz.js";import"./downshift.esm-CJNHbtOw.js";import"./FormContext-DyuhYneE.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./useControllableState-CO01KbI6.js";import"./clamp-ekNJC_Xv.js";import"./bucket-0-DaAi4Fe5.js";import"./bucket-17-Bj5oC3tN.js";import"./hasHelperText-CcJ_VphT.js";import"./bucket-11-Cl123CV8.js";import"./devtools-DMaYy3Jo.js";import"./Form-DY6zEBeb.js";import"./TearsheetNarrow-ChsHF6Gh.js";import"./TearsheetShell-CEmm5uVC.js";import"./useResizeObserver-YS0buUPl.js";import"./useIsomorphicEffect-CQvdjB27.js";import"./getNodeTextContent-CjFansOq.js";import"./props-helper-BeW6tFoM.js";import"./index-vioIMqkQ.js";import"./LayerContext-DFxG2aK0.js";import"./ComposedModal-DytiUj0S.js";import"./toggleClass-BAKBuigj.js";import"./InlineLoading-B1oqkF9D.js";import"./bucket-6-DL_KxiA5.js";import"./ButtonSet-C5cAYjyA.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-Xv7dNCVp.js";import"./index-DZkQvb7J.js";import"./Wrap-D3Ev0dkB.js";import"./usePortalTarget-Bek0sZsK.js";import"./index-BQHgwKad.js";import"./useFocus-Beh_ysYk.js";import"./usePresence-AtfgPAs_.js";import"./useId-CZbCsq9r.js";import"./uuidv4-Fbcg8Vng.js";import"./usePreviousValue-Bjujx9j5.js";import"./ActionSet-DoSddDiM.js";const{action:D}=__STORYBOOK_MODULE_ACTIONS__,Je={title:"Deprecated/Edit and update/EditTearsheetNarrow",component:W,tags:["autodocs"],parameters:{styles:Y,docs:{page:t(()=>e.createElement(Q,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/edit-and-update/usage/#tearsheet-edit"}),"page")}},decorators:[r=>e.createElement(A,{type:"deprecation-notice",text:e.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},r())],argTypes:{...V()}},m=`${G.prefix}--create-tearsheet-narrow--story`,h={title:"Edit partition",className:"test-class-name",description:"Select the number of partitions you want to create",formTitle:"Core configuration",formDescription:"We recommend you fill out and evaluate these details at a minimum before deploying your topic.",primaryButtonText:"Save",secondaryButtonText:"Cancel",label:"Test label",selectorPrimaryFocus:"#tearsheet-narrow-story-text-input--1"},j=t(({slug:r,...d})=>{const[s,T]=a.useState(!1),[l,S]=a.useState("Enter topic name here"),[v,N]=a.useState(1),[g,b]=a.useState(1),[y,I]=a.useState(1),[C,w]=a.useState(1),[x,f]=a.useState(1),[R]=a.useState(["Day(s)","Month(s)","Year(s"]),E=v<=0||g<=0||y<=0||C<=0||x<=0;return e.createElement(e.Fragment,null,e.createElement("style",null,`.${h.className} { opacity: 0 }`,";"),e.createElement(_,{onClick:t(()=>T(!s),"onClick")},s?"Close EditTearsheetNarrow":"Open EditTearsheetNarrow"),e.createElement($,{open:s,onRequestClose:t(()=>T(!1),"onRequestClose"),onRequestSubmit:D("onRequestSubmit action called"),disableSubmit:!l||E,slug:r&&B(),...d},e.createElement(O,{labelText:"Topic name",id:"tearsheet-narrow-story-text-input--1",value:l,placeholder:"Enter topic name",onChange:t(n=>S(n.target.value),"onChange")}),e.createElement(o,{id:"partition-count",min:1,max:100,value:v,label:"Partitions",invalidText:"Max partitions is 100, min is 1",onChange:t(n=>N(n.imaginaryTarget.value),"onChange")}),e.createElement(o,{id:"replica-count",min:1,max:100,value:g,label:"Replicas",invalidText:"Max replicas is 10, min is 1",onChange:t(n=>b(n.imaginaryTarget.value),"onChange")}),e.createElement(o,{id:"minimum-in-sync-count",min:1,max:100,value:y,label:"Minimum in-sync replicas",invalidText:"Max is 5, min is 1",onChange:t(n=>I(n.imaginaryTarget.value),"onChange")}),e.createElement("div",{className:`${m}__flex-container`},e.createElement(o,{id:"retention-time",min:1,max:60,value:C,label:"Retention time",invalidText:"Max is 60, min is 1",onChange:t(n=>w(n.imaginaryTarget.value),"onChange")}),e.createElement(q,{id:"create-tearsheet-narrow-dropdown-options-c",initialSelectedItem:"Day(s)",items:R,label:"Options",titleText:"Options"})),e.createElement(o,{id:"quantity",min:1,max:100,value:x,label:"Quantity",invalidText:"Max is 10, min is 1",onChange:t(n=>f(n.imaginaryTarget.value),"onChange")})))},"Template"),P=t(({slug:r,...d})=>{const[s,T]=a.useState(!1),[l,S]=a.useState("Enter topic name here"),[v,N]=a.useState(1),[g,b]=a.useState(1),[y,I]=a.useState(1),[C,w]=a.useState(1),[x,f]=a.useState(1),[R]=a.useState(["Day(s)","Month(s)","Year(s"]),[E,n]=a.useState(!1),k=v<=0||g<=0||y<=0||C<=0||x<=0;return e.createElement(e.Fragment,null,e.createElement("style",null,`.${h.className} { opacity: 0 }`,";"),e.createElement(_,{onClick:t(()=>T(!s),"onClick")},s?"Close EditTearsheetNarrow":"Open EditTearsheetNarrow"),e.createElement($,{open:s,onRequestClose:t(()=>{T(!1),S(""),n(!1)},"onRequestClose"),onRequestSubmit:D("onRequestSubmit action called"),disableSubmit:!l||k,slug:r&&B(),...d},e.createElement(M,{className:`${m}__form ${m}__example-form-group`,legendText:"Topic information"},e.createElement(O,{labelText:"Topic name",id:"tearsheet-narrow-story-text-input--1",value:l,placeholder:"Enter topic name",onChange:t(i=>S(i.target.value),"onChange"),onBlur:t(()=>!l.length&&n(!0),"onBlur"),invalid:E,invalidText:"This is a required field"}),e.createElement(o,{id:"partition-count",min:1,max:100,value:v,label:"Partitions",invalidText:"Max partitions is 100, min is 1",onChange:t(i=>N(i.imaginaryTarget.value),"onChange")}),e.createElement(o,{id:"replica-count",min:1,max:100,value:g,label:"Replicas",invalidText:"Max replicas is 10, min is 1",onChange:t(i=>b(i.imaginaryTarget.value),"onChange")}),e.createElement(o,{id:"minimum-in-sync-count",min:1,max:100,value:y,label:"Minimum in-sync replicas",invalidText:"Max is 5, min is 1",onChange:t(i=>I(i.imaginaryTarget.value),"onChange")})),e.createElement(M,{className:`${m}__form ${m}__example-form-group`,legendText:"Scheduling"},e.createElement("div",{className:`${m}__flex-container`},e.createElement(o,{id:"retention-time",min:1,max:60,value:C,label:"Retention time",invalidText:"Max is 60, min is 1",onChange:t(i=>w(i.imaginaryTarget.value),"onChange")}),e.createElement(q,{id:"create-tearsheet-narrow-dropdown-options-c",initialSelectedItem:"Day(s)",items:R,label:"Options",titleText:"Options"})),e.createElement(o,{id:"quantity",min:1,max:100,value:x,label:"Quantity",invalidText:"Max is 10, min is 1",onChange:t(i=>f(i.imaginaryTarget.value),"onChange")}))))},"WithValidationTemplate"),H="Default",u=j.bind({});u.storyName=H;u.args={...h};const K="With Form Validation",c=P.bind({});c.storyName=K;c.args={...h};const L="With Multiple Forms",p=P.bind({});p.storyName=L;p.args={...h};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`({
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
//# sourceMappingURL=EditTearsheetNarrow.stories-Cl7uhSyG.js.map
