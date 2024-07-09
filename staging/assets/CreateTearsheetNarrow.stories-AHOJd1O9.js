import{j as e,p as H,B as Q}from"./settings-BiUEFdm2.js";import{r as t}from"./index-BwDkhjyp.js";import{a as G}from"./chunk-MZXVCX43-CM0pFb8Z.js";import"./deprecate-D9ms-jbM.js";import{D as E}from"./Dropdown-CU2s9Kq8.js";import{F as D}from"./FormGroup-CVk9XJ_R.js";import{N as a}from"./NumberInput-CdfmSC9K.js";import{T as V}from"./TextInput-CjYtA_nO.js";import{C as M,s as z}from"./_storybook-styles-CnObTEza.js";import{S as J}from"./StoryDocsPage-BuwgUq5r.js";import{s as K,S as Y}from"./slug-CVusDWG_.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-Dk74W0Oi.js";import"./events-Bq7WR1mU.js";import"./index-BONylQH5.js";import"./v4-CQkTLCs1.js";import"./index-mZNF_Ndq.js";import"./extends-CCbyfPlC.js";import"./index-DcAOwtUU.js";import"./tslib.es6-B4_xh3D5.js";import"./FormContext-C7kRVu4t.js";import"./mergeRefs-CTUecegF.js";import"./bucket-17-CArjO86K.js";import"./useNormalizedInputProps-DRpk_7sW.js";import"./Text-_TFgs5hl.js";import"./bucket-14-u3bYiptr.js";import"./bucket-0-D7rUCVax.js";import"./bucket-16-C-1D9aPX.js";import"./useAnnouncer-MW4fVOqQ.js";import"./Form-Cl1Tfi_h.js";import"./devtools-BPcQvzXy.js";import"./TearsheetNarrow-DkK1Urk3.js";import"./props-helper-1oU9hECe.js";import"./TearsheetShell-BtN3A38u.js";import"./useResizeObserver-CYrpFlRY.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-Ckm8JaZ3.js";import"./ButtonSet-CqsYbwZH.js";import"./InlineLoading-DEQVZSgg.js";import"./bucket-5-BuK6y5Rd.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-CuszVIVc.js";import"./index-gKY8typL.js";import"./index-DoBoZ-97.js";import"./LayerContext-DbU-6VX4.js";import"./usePortalTarget-CUzsWZah.js";import"./feature-flags-CaJ_YE9P.js";import"./index-DshjxXYm.js";import"./index-BO2nGe7b.js";import"./useFocus-CSvq-1pJ.js";import"./usePreviousValue-DDnp_zt4.js";import"./ActionSet-DPSyJhT2.js";import"./uuidv4-BQrI85uz.js";import"./index-CDYzkStP.js";import"./iframe-j3s5A4v9.js";import"../sb-preview/runtime.js";import"./index-C2eUe6cH.js";import"./index-BjQFKvNH.js";import"./isSymbol-BZYRlrjc.js";import"./index-DrFu-skq.js";import"./story-helper-YTYnELA9.js";import"./index-Bo7SW2KM.js";const lt={title:"IBM Products/Patterns/Create flows/CreateTearsheetNarrow",component:M,tags:["autodocs"],argTypes:{children:{control:{disable:!0}},...K()},parameters:{styles:z,docs:{page:()=>e.jsx(J,{altGuidelinesHref:"https://pages.github.ibm.com/cdai-design/pal/patterns/creation-flows/usage#narrow-tearsheet"})}}},r=`${H.prefix}--create-tearsheet-narrow--story`,x={title:"Create partition",className:"test-class-name",description:"Select the number of partitions you want to create",formTitle:"Core configuration",formDescription:"We recommend you fill out and evaluate these details at a minimum before deploying your topic.",primaryButtonText:"Create",secondaryButtonText:"Cancel",label:"Test label",selectorPrimaryFocus:"#tearsheet-narrow-story-text-input--1"},L=({slug:g,...y})=>{const[o,c]=t.useState(!1),[s,h]=t.useState(""),[p,b]=t.useState(1),[d,S]=t.useState(1),[C,N]=t.useState(1),[v,I]=t.useState(1),[T,f]=t.useState(1),[w]=t.useState(["Day(s)","Month(s)","Year(s"]),R=p<=0||d<=0||C<=0||v<=0||T<=0;return e.jsxs("div",{children:[e.jsxs("style",{children:[`.${x.className} { opacity: 0 }`,";"]}),e.jsx(Q,{onClick:()=>c(!o),children:o?"Close CreateTearsheetNarrow":"Open CreateTearsheetNarrow"}),e.jsxs(M,{open:o,onRequestClose:()=>c(!1),onRequestSubmit:G("onRequestSubmit action called"),disableSubmit:!s||R,slug:g&&Y(),...y,children:[e.jsx(V,{labelText:"Topic name",id:"tearsheet-narrow-story-text-input--1",value:s,placeholder:"Enter topic name",onChange:n=>h(n.target.value)}),e.jsx(a,{iconDescription:"Choose a number",id:"partition-count",min:1,max:100,value:p,label:"Partitions",invalidText:"Max partitions is 100, min is 1",onChange:n=>b(n.imaginaryTarget.value)}),e.jsx(a,{iconDescription:"Choose a number",id:"replica-count",min:1,max:100,value:d,label:"Replicas",invalidText:"Max replicas is 10, min is 1",onChange:n=>S(n.imaginaryTarget.value)}),e.jsx(a,{iconDescription:"Choose a number",id:"minimum-in-sync-count",min:1,max:100,value:C,label:"Minimum in-sync replicas",invalidText:"Max is 5, min is 1",onChange:n=>N(n.imaginaryTarget.value)}),e.jsxs("div",{className:`${r}__flex-container`,children:[e.jsx(a,{iconDescription:"Choose a number",id:"retention-time",min:1,max:60,value:v,label:"Retention time",invalidText:"Max is 60, min is 1",onChange:n=>I(n.imaginaryTarget.value)}),e.jsx(E,{id:"create-tearsheet-narrow-dropdown-options-c",initialSelectedItem:"Day(s)",items:w,label:"Options",titleText:"Options"})]}),e.jsx(a,{iconDescription:"Choose a number",id:"quantity",min:1,max:100,value:T,label:"Quantity",invalidText:"Max is 10, min is 1",onChange:n=>f(n.imaginaryTarget.value)})]})]})},W=({slug:g,...y})=>{const[o,c]=t.useState(!1),[s,h]=t.useState(""),[p,b]=t.useState(1),[d,S]=t.useState(1),[C,N]=t.useState(1),[v,I]=t.useState(1),[T,f]=t.useState(1),[w]=t.useState(["Day(s)","Month(s)","Year(s"]),[R,n]=t.useState(!1),A=p<=0||d<=0||C<=0||v<=0||T<=0;return e.jsxs("div",{children:[e.jsxs("style",{children:[`.${x.className} { opacity: 0 }`,";"]}),e.jsx(Q,{onClick:()=>c(!o),children:o?"Close CreateTearsheetNarrow":"Open CreateTearsheetNarrow"}),e.jsxs(M,{open:o,onRequestClose:()=>{c(!1),h(""),n(!1)},onRequestSubmit:G("onRequestSubmit action called"),disableSubmit:!s||A,slug:g&&Y(),...y,children:[e.jsxs(D,{className:`${r}__form ${r}__example-form-group`,legendText:"Topic information",children:[e.jsx(V,{labelText:"Topic name",id:"tearsheet-narrow-story-text-input--1",value:s,placeholder:"Enter topic name",onChange:i=>h(i.target.value),onBlur:()=>!s.length&&n(!0),invalid:R,invalidText:"This is a required field"}),e.jsx(a,{iconDescription:"Choose a number",id:"partition-count",min:1,max:100,value:p,label:"Partitions",invalidText:"Max partitions is 100, min is 1",onChange:i=>b(i.imaginaryTarget.value)}),e.jsx(a,{iconDescription:"Choose a number",id:"replica-count",min:1,max:100,value:d,label:"Replicas",invalidText:"Max replicas is 10, min is 1",onChange:i=>S(i.imaginaryTarget.value)}),e.jsx(a,{iconDescription:"Choose a number",id:"minimum-in-sync-count",min:1,max:100,value:C,label:"Minimum in-sync replicas",invalidText:"Max is 5, min is 1",onChange:i=>N(i.imaginaryTarget.value)})]}),e.jsxs(D,{className:`${r}__form ${r}__example-form-group`,legendText:"Scheduling",children:[e.jsxs("div",{className:`${r}__flex-container`,children:[e.jsx(a,{iconDescription:"Choose a number",id:"retention-time",min:1,max:60,value:v,label:"Retention time",invalidText:"Max is 60, min is 1",onChange:i=>I(i.imaginaryTarget.value)}),e.jsx(E,{id:"create-tearsheet-narrow-dropdown-options-c",initialSelectedItem:"Day(s)",items:w,label:"Options",titleText:"Options"})]}),e.jsx(a,{iconDescription:"Choose a number",id:"quantity",min:1,max:100,value:T,label:"Quantity",invalidText:"Max is 10, min is 1",onChange:i=>f(i.imaginaryTarget.value)})]})]})]})},U="Default",m=L.bind({});m.storyName=U;m.args={...x};const X="With Form Validation",l=W.bind({});l.storyName=X;l.args={...x};const Z="With Multiple Forms",u=W.bind({});u.storyName=Z;u.args={...x};var _,q,j;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`({
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
}`,...(j=(q=m.parameters)==null?void 0:q.docs)==null?void 0:j.source}}};var O,B,$;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`({
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
