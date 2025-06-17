import{e,r as t}from"./index-DtHxqM--.js";import{a as F}from"./index-B-lxVbXh.js";import"./index-C360Eztx.js";import{B as Q,p as H}from"./settings-CFkY3W_8.js";import{D as G}from"./Dropdown-CX5Du4pc.js";import{F as E}from"./FormGroup-DOeAvcbG.js";import{N as n}from"./NumberInput-H4rExYPH.js";import{T as V}from"./TextInput-DJpFdpZP.js";import{s as z}from"./_storybook-styles-B4jRGrUa.js";import{S as J}from"./StoryDocsPage-efLN1cW8.js";import{s as K,S as Y}from"./slug-CSG2HUA0.js";import{A as L}from"./index-BpQ54rfJ.js";import{E as U}from"./EditTearsheetNarrow-Cf8HOaBG.js";import{C as W}from"./CreateTearsheetNarrow-CCwdu2fw.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CtRu48qb.js";import"./index-DgLvjnYm.js";import"./index-CiYgQLeJ.js";import"./events-CdfZZS3f.js";import"./index-BopFi8TB.js";import"./index-CydRNFts.js";import"./inheritsLoose-D3Az7yH5.js";import"./FormContext-C4Nuixum.js";import"./mergeRefs-91-mP8KM.js";import"./bucket-19-D7HYZr93.js";import"./useNormalizedInputProps-cPzcHHVT.js";import"./Text-DKfZ87L_.js";import"./clamp--00YEiB8.js";import"./useControllableState-P5wT7SAH.js";import"./bucket-16-DWe95sPE.js";import"./bucket-0-CylTshg8.js";import"./index-DXOm4vU7.js";import"./iframe-DQx73iB6.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";import"./story-helper-DKr4OZ7U.js";import"./index-ucZMVirk.js";import"./bucket-18-iDqRS6B9.js";import"./bucket-10-F-tNiG7L.js";import"./devtools-XPxnGn1y.js";import"./Form-Bke3lSBz.js";import"./TearsheetNarrow-CWSRYwNk.js";import"./TearsheetShell-JEF80Hpr.js";import"./useResizeObserver-CiQvgsPb.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./props-helper-CSyPWdyB.js";import"./ComposedModal-CJn3uPYK.js";import"./index-B0hq8c5O.js";import"./LayerContext-B9CO-6mR.js";import"./ButtonSet-Co_YnHPl.js";import"./InlineLoading-DwO_qCAY.js";import"./bucket-6-BjeV6rPm.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-BeRLXXyC.js";import"./index-D_6HqJlS.js";import"./Wrap-CWE5Hef0.js";import"./usePortalTarget-CutnQ3UR.js";import"./feature-flags-DS-UqKIX.js";import"./index-DOtZcGjg.js";import"./index-B3dOPLFv.js";import"./useFocus-qurYX6CL.js";import"./usePreviousValue-CuNkkQo9.js";import"./useIsomorphicEffect-DztsuiUB.js";import"./ActionSet-Du6AS19V.js";import"./uuidv4-BN2rGLQG.js";const dt={title:"Deprecated/Edit and update/EditTearsheetNarrow",component:U,tags:["autodocs"],parameters:{styles:z,docs:{page:()=>e.createElement(J,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/edit-and-update/usage/#tearsheet-edit"})}},decorators:[c=>e.createElement(L,{type:"deprecation-notice",text:e.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},c())],argTypes:{...K()}},s=`${H.prefix}--create-tearsheet-narrow--story`,C={title:"Edit partition",className:"test-class-name",description:"Select the number of partitions you want to create",formTitle:"Core configuration",formDescription:"We recommend you fill out and evaluate these details at a minimum before deploying your topic.",primaryButtonText:"Save",secondaryButtonText:"Cancel",label:"Test label",selectorPrimaryFocus:"#tearsheet-narrow-story-text-input--1"},X=({slug:c,...h})=>{const[o,p]=t.useState(!1),[r,x]=t.useState("Enter topic name here"),[d,S]=t.useState(1),[v,N]=t.useState(1),[T,b]=t.useState(1),[g,I]=t.useState(1),[y,f]=t.useState(1),[w]=t.useState(["Day(s)","Month(s)","Year(s"]),R=d<=0||v<=0||T<=0||g<=0||y<=0;return e.createElement(e.Fragment,null,e.createElement("style",null,`.${C.className} { opacity: 0 }`,";"),e.createElement(Q,{onClick:()=>p(!o)},o?"Close EditTearsheetNarrow":"Open EditTearsheetNarrow"),e.createElement(W,{open:o,onRequestClose:()=>p(!1),onRequestSubmit:F("onRequestSubmit action called"),disableSubmit:!r||R,slug:c&&Y(),...h},e.createElement(V,{labelText:"Topic name",id:"tearsheet-narrow-story-text-input--1",value:r,placeholder:"Enter topic name",onChange:a=>x(a.target.value)}),e.createElement(n,{id:"partition-count",min:1,max:100,value:d,label:"Partitions",invalidText:"Max partitions is 100, min is 1",onChange:a=>S(a.imaginaryTarget.value)}),e.createElement(n,{id:"replica-count",min:1,max:100,value:v,label:"Replicas",invalidText:"Max replicas is 10, min is 1",onChange:a=>N(a.imaginaryTarget.value)}),e.createElement(n,{id:"minimum-in-sync-count",min:1,max:100,value:T,label:"Minimum in-sync replicas",invalidText:"Max is 5, min is 1",onChange:a=>b(a.imaginaryTarget.value)}),e.createElement("div",{className:`${s}__flex-container`},e.createElement(n,{id:"retention-time",min:1,max:60,value:g,label:"Retention time",invalidText:"Max is 60, min is 1",onChange:a=>I(a.imaginaryTarget.value)}),e.createElement(G,{id:"create-tearsheet-narrow-dropdown-options-c",initialSelectedItem:"Day(s)",items:w,label:"Options",titleText:"Options"})),e.createElement(n,{id:"quantity",min:1,max:100,value:y,label:"Quantity",invalidText:"Max is 10, min is 1",onChange:a=>f(a.imaginaryTarget.value)})))},A=({slug:c,...h})=>{const[o,p]=t.useState(!1),[r,x]=t.useState("Enter topic name here"),[d,S]=t.useState(1),[v,N]=t.useState(1),[T,b]=t.useState(1),[g,I]=t.useState(1),[y,f]=t.useState(1),[w]=t.useState(["Day(s)","Month(s)","Year(s"]),[R,a]=t.useState(!1),j=d<=0||v<=0||T<=0||g<=0||y<=0;return e.createElement(e.Fragment,null,e.createElement("style",null,`.${C.className} { opacity: 0 }`,";"),e.createElement(Q,{onClick:()=>p(!o)},o?"Close EditTearsheetNarrow":"Open EditTearsheetNarrow"),e.createElement(W,{open:o,onRequestClose:()=>{p(!1),x(""),a(!1)},onRequestSubmit:F("onRequestSubmit action called"),disableSubmit:!r||j,slug:c&&Y(),...h},e.createElement(E,{className:`${s}__form ${s}__example-form-group`,legendText:"Topic information"},e.createElement(V,{labelText:"Topic name",id:"tearsheet-narrow-story-text-input--1",value:r,placeholder:"Enter topic name",onChange:i=>x(i.target.value),onBlur:()=>!r.length&&a(!0),invalid:R,invalidText:"This is a required field"}),e.createElement(n,{id:"partition-count",min:1,max:100,value:d,label:"Partitions",invalidText:"Max partitions is 100, min is 1",onChange:i=>S(i.imaginaryTarget.value)}),e.createElement(n,{id:"replica-count",min:1,max:100,value:v,label:"Replicas",invalidText:"Max replicas is 10, min is 1",onChange:i=>N(i.imaginaryTarget.value)}),e.createElement(n,{id:"minimum-in-sync-count",min:1,max:100,value:T,label:"Minimum in-sync replicas",invalidText:"Max is 5, min is 1",onChange:i=>b(i.imaginaryTarget.value)})),e.createElement(E,{className:`${s}__form ${s}__example-form-group`,legendText:"Scheduling"},e.createElement("div",{className:`${s}__flex-container`},e.createElement(n,{id:"retention-time",min:1,max:60,value:g,label:"Retention time",invalidText:"Max is 60, min is 1",onChange:i=>I(i.imaginaryTarget.value)}),e.createElement(G,{id:"create-tearsheet-narrow-dropdown-options-c",initialSelectedItem:"Day(s)",items:w,label:"Options",titleText:"Options"})),e.createElement(n,{id:"quantity",min:1,max:100,value:y,label:"Quantity",invalidText:"Max is 10, min is 1",onChange:i=>f(i.imaginaryTarget.value)}))))},Z="Default",m=X.bind({});m.storyName=Z;m.args={...C};const ee="With Form Validation",l=A.bind({});l.storyName=ee;l.args={...C};const te="With Multiple Forms",u=A.bind({});u.storyName=te;u.args={...C};var M,_,q;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`({
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
}`,...(k=(P=u.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};const vt=["editTearsheetNarrow","withValidation","withMultipleForms"];export{vt as __namedExportsOrder,dt as default,m as editTearsheetNarrow,u as withMultipleForms,l as withValidation};
