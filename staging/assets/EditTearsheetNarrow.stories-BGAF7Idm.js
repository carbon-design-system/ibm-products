import{R as e,r as t}from"./index-BwDkhjyp.js";import{a as Y}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{c as K}from"./index-CO-HQMMN.js";import{p as M,B as W}from"./settings-9_3hiHpE.js";import{D as A}from"./Dropdown-CIyg-5U1.js";import{F as q}from"./FormGroup-C6KGJYle.js";import{N as i}from"./NumberInput-CIYFWR2V.js";import{T as H}from"./TextInput-ChL1gOHC.js";import{s as L,C as U}from"./_storybook-styles-BIpxhkNO.js";import{S as X}from"./StoryDocsPage-ohgCD2zx.js";import{s as Z,S as j}from"./slug-BD3WymjH.js";import{P as O}from"./index-Dk74W0Oi.js";import{g as ee}from"./devtools-7ohusRRR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./index-BONylQH5.js";import"./index-CJvxHwuA.js";import"./events-OVwOsPzJ.js";import"./index-DQ9l4IMz.js";import"./index-Czv2bu3D.js";import"./extends-CCbyfPlC.js";import"./index-DcAOwtUU.js";import"./tslib.es6-B4_xh3D5.js";import"./FormContext-C7kRVu4t.js";import"./mergeRefs-CTUecegF.js";import"./bucket-18-BI__9nmH.js";import"./bucket-2-Bt1jIBkN.js";import"./useNormalizedInputProps-BXOXUZo5.js";import"./Text-DeIkfaUm.js";import"./bucket-16-C765DF6-.js";import"./bucket-0-a_zZqU1p.js";import"./useAnnouncer-Dwt0jqXi.js";import"./Form-KmNZSuVG.js";import"./TearsheetNarrow-DbIZYCDt.js";import"./TearsheetShell-DY0OIocw.js";import"./useResizeObserver-CYrpFlRY.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./props-helper-2oDpPmvU.js";import"./ComposedModal-COQTPQ85.js";import"./index-Y0d6iLU4.js";import"./LayerContext-DbU-6VX4.js";import"./ButtonSet-Cn6zokRw.js";import"./InlineLoading-BdVs8Ys4.js";import"./bucket-6-DcTgwLU8.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-gin0UG4f.js";import"./usePortalTarget-CBi58TPO.js";import"./feature-flags-AXXmAEUF.js";import"./index-CeOnRtOi.js";import"./useFocus-CpNJuhjW.js";import"./wait-CTNFjQS8.js";import"./usePreviousValue-Cw-zRxyE.js";import"./ActionSet-CseuYsKo.js";import"./uuidv4-BQrI85uz.js";import"./index-CHtKUyL9.js";import"./iframe-BleUBiry.js";import"../sb-preview/runtime.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./story-helper-6_fmjwZ-.js";import"./index-C5SNi40Q.js";import"./bucket-17-ClE8iwID.js";const te=`${M.prefix}--edit-tearsheet-narrow`,_="EditTearsheetNarrow";let p=e.forwardRef(({children:d,className:v,...o},r)=>e.createElement("div",{...o,className:K(te,v,{}),ref:r,role:"main",...ee(_)},d));p=M.checkComponentEnabled(p,_);p.displayName=_;p.propTypes={children:O.node.isRequired,className:O.string};p.__docgenInfo={description:"Use a narrow tearsheet as an alternative to a modal when there is scrolling. See usage guidance for further information.",methods:[],displayName:"EditTearsheetNarrow",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Provide the contents of the EditTearsheetNarrow.",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}}}};const Tt={title:"Experimental/Patterns/Edit and update/EditTearsheetNarrow",component:p,tags:["autodocs"],parameters:{styles:L,docs:{page:()=>e.createElement(X,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/edit-and-update/usage/#tearsheet-edit"})}},argTypes:{...Z()}},m=`${M.prefix}--create-tearsheet-narrow--story`,x={title:"Edit partition",className:"test-class-name",description:"Select the number of partitions you want to create",formTitle:"Core configuration",formDescription:"We recommend you fill out and evaluate these details at a minimum before deploying your topic.",primaryButtonText:"Save",secondaryButtonText:"Cancel",label:"Test label",selectorPrimaryFocus:"#tearsheet-narrow-story-text-input--1"},ne=({slug:d,...v})=>{const[o,r]=t.useState(!1),[s,S]=t.useState("Enter topic name here"),[T,N]=t.useState(1),[g,b]=t.useState(1),[y,f]=t.useState(1),[h,w]=t.useState(1),[C,I]=t.useState(1),[R]=t.useState(["Day(s)","Month(s)","Year(s"]),E=T<=0||g<=0||y<=0||h<=0||C<=0;return e.createElement("div",null,e.createElement("style",null,`.${x.className} { opacity: 0 }`,";"),e.createElement(W,{onClick:()=>r(!o)},o?"Close EditTearsheetNarrow":"Open EditTearsheetNarrow"),e.createElement(U,{open:o,onRequestClose:()=>r(!1),onRequestSubmit:Y("onRequestSubmit action called"),disableSubmit:!s||E,slug:d&&j(),...v},e.createElement(H,{labelText:"Topic name",id:"tearsheet-narrow-story-text-input--1",value:s,placeholder:"Enter topic name",onChange:n=>S(n.target.value)}),e.createElement(i,{id:"partition-count",min:1,max:100,value:T,label:"Partitions",invalidText:"Max partitions is 100, min is 1",onChange:n=>N(n.imaginaryTarget.value)}),e.createElement(i,{id:"replica-count",min:1,max:100,value:g,label:"Replicas",invalidText:"Max replicas is 10, min is 1",onChange:n=>b(n.imaginaryTarget.value)}),e.createElement(i,{id:"minimum-in-sync-count",min:1,max:100,value:y,label:"Minimum in-sync replicas",invalidText:"Max is 5, min is 1",onChange:n=>f(n.imaginaryTarget.value)}),e.createElement("div",{className:`${m}__flex-container`},e.createElement(i,{id:"retention-time",min:1,max:60,value:h,label:"Retention time",invalidText:"Max is 60, min is 1",onChange:n=>w(n.imaginaryTarget.value)}),e.createElement(A,{id:"create-tearsheet-narrow-dropdown-options-c",initialSelectedItem:"Day(s)",items:R,label:"Options",titleText:"Options"})),e.createElement(i,{id:"quantity",min:1,max:100,value:C,label:"Quantity",invalidText:"Max is 10, min is 1",onChange:n=>I(n.imaginaryTarget.value)})))},z=({slug:d,...v})=>{const[o,r]=t.useState(!1),[s,S]=t.useState("Enter topic name here"),[T,N]=t.useState(1),[g,b]=t.useState(1),[y,f]=t.useState(1),[h,w]=t.useState(1),[C,I]=t.useState(1),[R]=t.useState(["Day(s)","Month(s)","Year(s"]),[E,n]=t.useState(!1),J=T<=0||g<=0||y<=0||h<=0||C<=0;return e.createElement("div",null,e.createElement("style",null,`.${x.className} { opacity: 0 }`,";"),e.createElement(W,{onClick:()=>r(!o)},o?"Close EditTearsheetNarrow":"Open EditTearsheetNarrow"),e.createElement(U,{open:o,onRequestClose:()=>{r(!1),S(""),n(!1)},onRequestSubmit:Y("onRequestSubmit action called"),disableSubmit:!s||J,slug:d&&j(),...v},e.createElement(q,{className:`${m}__form ${m}__example-form-group`,legendText:"Topic information"},e.createElement(H,{labelText:"Topic name",id:"tearsheet-narrow-story-text-input--1",value:s,placeholder:"Enter topic name",onChange:a=>S(a.target.value),onBlur:()=>!s.length&&n(!0),invalid:E,invalidText:"This is a required field"}),e.createElement(i,{id:"partition-count",min:1,max:100,value:T,label:"Partitions",invalidText:"Max partitions is 100, min is 1",onChange:a=>N(a.imaginaryTarget.value)}),e.createElement(i,{id:"replica-count",min:1,max:100,value:g,label:"Replicas",invalidText:"Max replicas is 10, min is 1",onChange:a=>b(a.imaginaryTarget.value)}),e.createElement(i,{id:"minimum-in-sync-count",min:1,max:100,value:y,label:"Minimum in-sync replicas",invalidText:"Max is 5, min is 1",onChange:a=>f(a.imaginaryTarget.value)})),e.createElement(q,{className:`${m}__form ${m}__example-form-group`,legendText:"Scheduling"},e.createElement("div",{className:`${m}__flex-container`},e.createElement(i,{id:"retention-time",min:1,max:60,value:h,label:"Retention time",invalidText:"Max is 60, min is 1",onChange:a=>w(a.imaginaryTarget.value)}),e.createElement(A,{id:"create-tearsheet-narrow-dropdown-options-c",initialSelectedItem:"Day(s)",items:R,label:"Options",titleText:"Options"})),e.createElement(i,{id:"quantity",min:1,max:100,value:C,label:"Quantity",invalidText:"Max is 10, min is 1",onChange:a=>I(a.imaginaryTarget.value)}))))},ae="Default",l=ne.bind({});l.storyName=ae;l.args={...x};const ie="With Form Validation",u=z.bind({});u.storyName=ie;u.args={...x};const oe="With Multiple Forms",c=z.bind({});c.storyName=oe;c.args={...x};var B,P,$;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`({
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
  return <div>
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
    </div>;
}`,...($=(P=l.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var k,D,F;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`({
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
  return <div>
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
    </div>;
}`,...(F=(D=u.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var Q,G,V;c.parameters={...c.parameters,docs:{...(Q=c.parameters)==null?void 0:Q.docs,source:{originalSource:`({
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
  return <div>
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
    </div>;
}`,...(V=(G=c.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};const gt=["editTearsheetNarrow","withValidation","withMultipleForms"];export{gt as __namedExportsOrder,Tt as default,l as editTearsheetNarrow,c as withMultipleForms,u as withValidation};
