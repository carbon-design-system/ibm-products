import{R as e,r as t}from"./index-BwDkhjyp.js";import{a as Q}from"./chunk-MZXVCX43-CM0pFb8Z.js";import"./index-CQ0F2wkl.js";import{p as j,B as G}from"./settings-xiNX1vM3.js";import{D as V}from"./Dropdown-DdJe44Fy.js";import{F as D}from"./FormGroup-BugBd57F.js";import{N as i}from"./NumberInput-BohLIeNM.js";import{T as Y}from"./TextInput-Co-qdCU4.js";import{C as M,s as z}from"./_storybook-styles-BtjkI6jg.js";import{S as J}from"./StoryDocsPage-DVIWh70a.js";import{s as K,S as W}from"./slug-tTlxCg8k.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./index-Dk74W0Oi.js";import"./index-BONylQH5.js";import"./index-CJvxHwuA.js";import"./events-OVwOsPzJ.js";import"./index-ABeo-Xma.js";import"./index-DesgAUBt.js";import"./extends-CCbyfPlC.js";import"./index-DcAOwtUU.js";import"./tslib.es6-B4_xh3D5.js";import"./FormContext-C7kRVu4t.js";import"./mergeRefs-CTUecegF.js";import"./bucket-18-DbwFKOtV.js";import"./bucket-2-DlXCnOsR.js";import"./useNormalizedInputProps-B85N_Uyv.js";import"./Text-BiMgJRID.js";import"./bucket-16-CA_u3VxQ.js";import"./bucket-0-DyNWBZ5j.js";import"./useAnnouncer-Dwt0jqXi.js";import"./Form-BSVSs_TK.js";import"./TearsheetNarrow-C2yIFXfU.js";import"./TearsheetShell-DGNFyaak.js";import"./useResizeObserver-CYrpFlRY.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./props-helper-BS5A6Pu3.js";import"./ComposedModal-Bp7RzMcH.js";import"./index-CvBNEhOa.js";import"./LayerContext-DbU-6VX4.js";import"./ButtonSet-UZItGUcq.js";import"./InlineLoading-Dllsw8qU.js";import"./bucket-6-DBBo9VQm.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-0D7LLA53.js";import"./usePortalTarget-CjULiY7e.js";import"./feature-flags-D0iIr019.js";import"./index-C2GlWzJb.js";import"./useFocus-BkvvrSzv.js";import"./wait-CTNFjQS8.js";import"./usePreviousValue-Cw-zRxyE.js";import"./ActionSet-DKjZKKQp.js";import"./devtools-Bz70ioU6.js";import"./uuidv4-BQrI85uz.js";import"./index-CTiS1d2M.js";import"./iframe-t6fBb6Y8.js";import"../sb-preview/runtime.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./story-helper-6_fmjwZ-.js";import"./index-DJMs1yu9.js";import"./bucket-17-B1XGOcQQ.js";const lt={title:"IBM Products/Patterns/Create flows/CreateTearsheetNarrow",component:M,tags:["autodocs"],argTypes:{children:{control:{disable:!0}},...K()},parameters:{styles:z,docs:{page:()=>e.createElement(J,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/create-flows/usage/#narrow-tearsheet"})}}},s=`${j.prefix}--create-tearsheet-narrow--story`,g={title:"Create partition",className:"test-class-name",description:"Select the number of partitions you want to create",formTitle:"Core configuration",formDescription:"We recommend you fill out and evaluate these details at a minimum before deploying your topic.",primaryButtonText:"Create",secondaryButtonText:"Cancel",label:"Test label",selectorPrimaryFocus:"#tearsheet-narrow-story-text-input--1"},L=({slug:y,...x})=>{const[o,c]=t.useState(!1),[r,h]=t.useState(""),[p,b]=t.useState(1),[d,S]=t.useState(1),[C,N]=t.useState(1),[v,I]=t.useState(1),[T,f]=t.useState(1),[w]=t.useState(["Day(s)","Month(s)","Year(s"]),R=p<=0||d<=0||C<=0||v<=0||T<=0;return e.createElement("div",null,e.createElement("style",null,`.${g.className} { opacity: 0 }`,";"),e.createElement(G,{onClick:()=>c(!o)},o?"Close CreateTearsheetNarrow":"Open CreateTearsheetNarrow"),e.createElement(M,{open:o,onRequestClose:()=>c(!1),onRequestSubmit:Q("onRequestSubmit action called"),disableSubmit:!r||R,slug:y&&W(),...x},e.createElement(Y,{labelText:"Topic name",id:"tearsheet-narrow-story-text-input--1",value:r,placeholder:"Enter topic name",onChange:n=>h(n.target.value)}),e.createElement(i,{iconDescription:"Choose a number",id:"partition-count",min:1,max:100,value:p,label:"Partitions",invalidText:"Max partitions is 100, min is 1",onChange:n=>b(n.imaginaryTarget.value)}),e.createElement(i,{iconDescription:"Choose a number",id:"replica-count",min:1,max:100,value:d,label:"Replicas",invalidText:"Max replicas is 10, min is 1",onChange:n=>S(n.imaginaryTarget.value)}),e.createElement(i,{iconDescription:"Choose a number",id:"minimum-in-sync-count",min:1,max:100,value:C,label:"Minimum in-sync replicas",invalidText:"Max is 5, min is 1",onChange:n=>N(n.imaginaryTarget.value)}),e.createElement("div",{className:`${s}__flex-container`},e.createElement(i,{iconDescription:"Choose a number",id:"retention-time",min:1,max:60,value:v,label:"Retention time",invalidText:"Max is 60, min is 1",onChange:n=>I(n.imaginaryTarget.value)}),e.createElement(V,{id:"create-tearsheet-narrow-dropdown-options-c",initialSelectedItem:"Day(s)",items:w,label:"Options",titleText:"Options"})),e.createElement(i,{iconDescription:"Choose a number",id:"quantity",min:1,max:100,value:T,label:"Quantity",invalidText:"Max is 10, min is 1",onChange:n=>f(n.imaginaryTarget.value)})))},A=({slug:y,...x})=>{const[o,c]=t.useState(!1),[r,h]=t.useState(""),[p,b]=t.useState(1),[d,S]=t.useState(1),[C,N]=t.useState(1),[v,I]=t.useState(1),[T,f]=t.useState(1),[w]=t.useState(["Day(s)","Month(s)","Year(s"]),[R,n]=t.useState(!1),H=p<=0||d<=0||C<=0||v<=0||T<=0;return e.createElement("div",null,e.createElement("style",null,`.${g.className} { opacity: 0 }`,";"),e.createElement(G,{onClick:()=>c(!o)},o?"Close CreateTearsheetNarrow":"Open CreateTearsheetNarrow"),e.createElement(M,{open:o,onRequestClose:()=>{c(!1),h(""),n(!1)},onRequestSubmit:Q("onRequestSubmit action called"),disableSubmit:!r||H,slug:y&&W(),...x},e.createElement(D,{className:`${s}__form ${s}__example-form-group`,legendText:"Topic information"},e.createElement(Y,{labelText:"Topic name",id:"tearsheet-narrow-story-text-input--1",value:r,placeholder:"Enter topic name",onChange:a=>h(a.target.value),onBlur:()=>!r.length&&n(!0),invalid:R,invalidText:"This is a required field"}),e.createElement(i,{iconDescription:"Choose a number",id:"partition-count",min:1,max:100,value:p,label:"Partitions",invalidText:"Max partitions is 100, min is 1",onChange:a=>b(a.imaginaryTarget.value)}),e.createElement(i,{iconDescription:"Choose a number",id:"replica-count",min:1,max:100,value:d,label:"Replicas",invalidText:"Max replicas is 10, min is 1",onChange:a=>S(a.imaginaryTarget.value)}),e.createElement(i,{iconDescription:"Choose a number",id:"minimum-in-sync-count",min:1,max:100,value:C,label:"Minimum in-sync replicas",invalidText:"Max is 5, min is 1",onChange:a=>N(a.imaginaryTarget.value)})),e.createElement(D,{className:`${s}__form ${s}__example-form-group`,legendText:"Scheduling"},e.createElement("div",{className:`${s}__flex-container`},e.createElement(i,{iconDescription:"Choose a number",id:"retention-time",min:1,max:60,value:v,label:"Retention time",invalidText:"Max is 60, min is 1",onChange:a=>I(a.imaginaryTarget.value)}),e.createElement(V,{id:"create-tearsheet-narrow-dropdown-options-c",initialSelectedItem:"Day(s)",items:w,label:"Options",titleText:"Options"})),e.createElement(i,{iconDescription:"Choose a number",id:"quantity",min:1,max:100,value:T,label:"Quantity",invalidText:"Max is 10, min is 1",onChange:a=>f(a.imaginaryTarget.value)}))))},U="Default",m=L.bind({});m.storyName=U;m.args={...g};const X="With Form Validation",l=A.bind({});l.storyName=X;l.args={...g};const Z="With Multiple Forms",u=A.bind({});u.storyName=Z;u.args={...g};var _,q,E;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`({
  slug,
  ...args
}) => {
  const [open, setOpen] = useState(false);
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
      <CreateTearsheetNarrow open={open} onRequestClose={() => setOpen(false)} onRequestSubmit={action('onRequestSubmit action called')} disableSubmit={!topicName || numberInputsInvalid} slug={slug && SlugSample()} {...args}>
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
}`,...(E=(q=m.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var O,B,$;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`({
  slug,
  ...args
}) => {
  const [open, setOpen] = useState(false);
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
    }} onRequestSubmit={action('onRequestSubmit action called')} disableSubmit={!topicName || numberInputsInvalid} slug={slug && SlugSample()} {...args}>
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
}`,...($=(B=l.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var P,k,F;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`({
  slug,
  ...args
}) => {
  const [open, setOpen] = useState(false);
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
    }} onRequestSubmit={action('onRequestSubmit action called')} disableSubmit={!topicName || numberInputsInvalid} slug={slug && SlugSample()} {...args}>
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
}`,...(F=(k=u.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};const ut=["createTearsheetNarrow","withValidation","withMultipleForms"];export{ut as __namedExportsOrder,m as createTearsheetNarrow,lt as default,u as withMultipleForms,l as withValidation};
