import{e,r as t}from"./index-DzvNrmz8.js";import{a as F}from"./index-B-lxVbXh.js";import"./index-5As4T26e.js";import{B as Q,p as H}from"./settings-CP9zVSjJ.js";import{D as G}from"./Dropdown-DocP4HuW.js";import{F as E}from"./FormGroup-DglN6MVK.js";import{N as n}from"./NumberInput-B9uXi7jS.js";import{T as V}from"./TextInput-BPIVFFXG.js";import{s as z}from"./_storybook-styles-B4jRGrUa.js";import{S as J}from"./StoryDocsPage-7HbyCrjL.js";import{s as K,S as Y}from"./slug-BXDiLczi.js";import{A as L}from"./index-B9fxRmSt.js";import{E as U}from"./EditTearsheetNarrow-JicBfdq0.js";import{C as W}from"./CreateTearsheetNarrow-D0qxOgkU.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./v4-CtRu48qb.js";import"./index-Cg1swjps.js";import"./index-Bv4JGo1_.js";import"./events-OVwOsPzJ.js";import"./index-P6UCShJt.js";import"./index-CpKToLap.js";import"./inheritsLoose-D3Az7yH5.js";import"./FormContext-TkVWILkp.js";import"./mergeRefs-CTUecegF.js";import"./bucket-18-D-cwffHE.js";import"./useNormalizedInputProps-BTIESqM4.js";import"./Text-DyBNjUAs.js";import"./bucket-16-IFGKs9HR.js";import"./bucket-0-C6v-wDs9.js";import"./useAnnouncer-Dwt0jqXi.js";import"./index-CwcgRXWl.js";import"./iframe-BsXekYnT.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";import"./story-helper-DPPXKxdX.js";import"./index-D3HeH2cJ.js";import"./bucket-17-F0QcB3Pi.js";import"./bucket-10-BLMdRzi0.js";import"./devtools-B_dijMH7.js";import"./Form-EzleJG-j.js";import"./TearsheetNarrow-CDBb8Mvi.js";import"./TearsheetShell-BFzazQuq.js";import"./useResizeObserver-Cp7HDrpC.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./props-helper-DCsMHcG1.js";import"./ComposedModal-DgZhcRE2.js";import"./index-B9LAK09p.js";import"./LayerContext-DfrloTEd.js";import"./ButtonSet-B2onNqwp.js";import"./InlineLoading-pF8In0wu.js";import"./bucket-6-BVxmYIXv.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-DPmHpWJH.js";import"./index-pOgDNIY8.js";import"./DefinitionTooltip-DKyN1THq.js";import"./usePortalTarget-at7lxj2t.js";import"./feature-flags-Cd4xSQCq.js";import"./index-BXVusgOK.js";import"./useFocus-DYvWTlBN.js";import"./usePreviousValue-DGkdsrtI.js";import"./useIsomorphicEffect-l5L8NYko.js";import"./ActionSet-DdP2NI5x.js";import"./uuidv4-BN2rGLQG.js";const ct={title:"Deprecated/Edit and update/EditTearsheetNarrow",component:U,tags:["autodocs"],parameters:{styles:z,docs:{page:()=>e.createElement(J,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/edit-and-update/usage/#tearsheet-edit"})}},decorators:[c=>e.createElement(L,{type:"deprecation-notice",text:e.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},c())],argTypes:{...K()}},s=`${H.prefix}--create-tearsheet-narrow--story`,C={title:"Edit partition",className:"test-class-name",description:"Select the number of partitions you want to create",formTitle:"Core configuration",formDescription:"We recommend you fill out and evaluate these details at a minimum before deploying your topic.",primaryButtonText:"Save",secondaryButtonText:"Cancel",label:"Test label",selectorPrimaryFocus:"#tearsheet-narrow-story-text-input--1"},X=({slug:c,...h})=>{const[o,p]=t.useState(!1),[r,x]=t.useState("Enter topic name here"),[d,S]=t.useState(1),[v,N]=t.useState(1),[T,b]=t.useState(1),[g,I]=t.useState(1),[y,f]=t.useState(1),[w]=t.useState(["Day(s)","Month(s)","Year(s"]),R=d<=0||v<=0||T<=0||g<=0||y<=0;return e.createElement(e.Fragment,null,e.createElement("style",null,`.${C.className} { opacity: 0 }`,";"),e.createElement(Q,{onClick:()=>p(!o)},o?"Close EditTearsheetNarrow":"Open EditTearsheetNarrow"),e.createElement(W,{open:o,onRequestClose:()=>p(!1),onRequestSubmit:F("onRequestSubmit action called"),disableSubmit:!r||R,slug:c&&Y(),...h},e.createElement(V,{labelText:"Topic name",id:"tearsheet-narrow-story-text-input--1",value:r,placeholder:"Enter topic name",onChange:a=>x(a.target.value)}),e.createElement(n,{id:"partition-count",min:1,max:100,value:d,label:"Partitions",invalidText:"Max partitions is 100, min is 1",onChange:a=>S(a.imaginaryTarget.value)}),e.createElement(n,{id:"replica-count",min:1,max:100,value:v,label:"Replicas",invalidText:"Max replicas is 10, min is 1",onChange:a=>N(a.imaginaryTarget.value)}),e.createElement(n,{id:"minimum-in-sync-count",min:1,max:100,value:T,label:"Minimum in-sync replicas",invalidText:"Max is 5, min is 1",onChange:a=>b(a.imaginaryTarget.value)}),e.createElement("div",{className:`${s}__flex-container`},e.createElement(n,{id:"retention-time",min:1,max:60,value:g,label:"Retention time",invalidText:"Max is 60, min is 1",onChange:a=>I(a.imaginaryTarget.value)}),e.createElement(G,{id:"create-tearsheet-narrow-dropdown-options-c",initialSelectedItem:"Day(s)",items:w,label:"Options",titleText:"Options"})),e.createElement(n,{id:"quantity",min:1,max:100,value:y,label:"Quantity",invalidText:"Max is 10, min is 1",onChange:a=>f(a.imaginaryTarget.value)})))},A=({slug:c,...h})=>{const[o,p]=t.useState(!1),[r,x]=t.useState("Enter topic name here"),[d,S]=t.useState(1),[v,N]=t.useState(1),[T,b]=t.useState(1),[g,I]=t.useState(1),[y,f]=t.useState(1),[w]=t.useState(["Day(s)","Month(s)","Year(s"]),[R,a]=t.useState(!1),j=d<=0||v<=0||T<=0||g<=0||y<=0;return e.createElement(e.Fragment,null,e.createElement("style",null,`.${C.className} { opacity: 0 }`,";"),e.createElement(Q,{onClick:()=>p(!o)},o?"Close EditTearsheetNarrow":"Open EditTearsheetNarrow"),e.createElement(W,{open:o,onRequestClose:()=>{p(!1),x(""),a(!1)},onRequestSubmit:F("onRequestSubmit action called"),disableSubmit:!r||j,slug:c&&Y(),...h},e.createElement(E,{className:`${s}__form ${s}__example-form-group`,legendText:"Topic information"},e.createElement(V,{labelText:"Topic name",id:"tearsheet-narrow-story-text-input--1",value:r,placeholder:"Enter topic name",onChange:i=>x(i.target.value),onBlur:()=>!r.length&&a(!0),invalid:R,invalidText:"This is a required field"}),e.createElement(n,{id:"partition-count",min:1,max:100,value:d,label:"Partitions",invalidText:"Max partitions is 100, min is 1",onChange:i=>S(i.imaginaryTarget.value)}),e.createElement(n,{id:"replica-count",min:1,max:100,value:v,label:"Replicas",invalidText:"Max replicas is 10, min is 1",onChange:i=>N(i.imaginaryTarget.value)}),e.createElement(n,{id:"minimum-in-sync-count",min:1,max:100,value:T,label:"Minimum in-sync replicas",invalidText:"Max is 5, min is 1",onChange:i=>b(i.imaginaryTarget.value)})),e.createElement(E,{className:`${s}__form ${s}__example-form-group`,legendText:"Scheduling"},e.createElement("div",{className:`${s}__flex-container`},e.createElement(n,{id:"retention-time",min:1,max:60,value:g,label:"Retention time",invalidText:"Max is 60, min is 1",onChange:i=>I(i.imaginaryTarget.value)}),e.createElement(G,{id:"create-tearsheet-narrow-dropdown-options-c",initialSelectedItem:"Day(s)",items:w,label:"Options",titleText:"Options"})),e.createElement(n,{id:"quantity",min:1,max:100,value:y,label:"Quantity",invalidText:"Max is 10, min is 1",onChange:i=>f(i.imaginaryTarget.value)}))))},Z="Default",m=X.bind({});m.storyName=Z;m.args={...C};const ee="With Form Validation",l=A.bind({});l.storyName=ee;l.args={...C};const te="With Multiple Forms",u=A.bind({});u.storyName=te;u.args={...C};var M,_,q;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`({
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
}`,...(q=(_=m.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var O,B,$;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`({
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
}`,...($=(B=l.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var D,P,k;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`({
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
}`,...(k=(P=u.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};const pt=["editTearsheetNarrow","withValidation","withMultipleForms"];export{pt as __namedExportsOrder,ct as default,m as editTearsheetNarrow,u as withMultipleForms,l as withValidation};
