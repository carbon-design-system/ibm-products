import{e,r as t}from"./index-BOZkNhcz.js";import{a as Y}from"./chunk-D5ZWXAHU-DlerbUHg.js";import"./index--clQM3eT.js";import{B as W,p as J}from"./settings-BYgtfLKl.js";import{D as A}from"./Dropdown-DUiNNuDy.js";import{F as E}from"./FormGroup-C9yKEUD9.js";import{N as n}from"./NumberInput-wLF2-I7y.js";import{T as H}from"./TextInput-CiRlUEc0.js";import{s as K,C as q}from"./_storybook-styles-Ra8a0m2m.js";import{S as L}from"./StoryDocsPage-DUYNgJVx.js";import{d as U,s as X,a as b}from"./decorator-DPa2YPH-.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CtRu48qb.js";import"./index-hBZdtWkn.js";import"./index-2uioG_CI.js";import"./events-OVwOsPzJ.js";import"./index-YZUn1U4D.js";import"./index-CVAOgdFx.js";import"./FormContext-qEw5DNxz.js";import"./mergeRefs-CTUecegF.js";import"./bucket-18-Dly-sSmK.js";import"./useNormalizedInputProps-BDKhkbhJ.js";import"./Text-C-NQiyV2.js";import"./bucket-16-BFXGSpzc.js";import"./bucket-0-tjTgXQWL.js";import"./useAnnouncer-Dwt0jqXi.js";import"./Form-DpO5UFRB.js";import"./TearsheetNarrow-DAmvfbvP.js";import"./TearsheetShell-M3dBNjBx.js";import"./useResizeObserver-DcNhBpO-.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./props-helper-BNocl_Zr.js";import"./ComposedModal-B5GOofnJ.js";import"./index-_87NmGAs.js";import"./LayerContext-DxTbsTfh.js";import"./ButtonSet-BHSafAHF.js";import"./InlineLoading-CRp3J8hh.js";import"./bucket-6-B5NNCZ27.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-DuCohhwL.js";import"./DefinitionTooltip-Dmd5thZA.js";import"./usePortalTarget-BnwBxO9W.js";import"./feature-flags-opBMwCDq.js";import"./index-D8bRXWRJ.js";import"./useFocus-C0rv1dQy.js";import"./usePreviousValue-BEwlonP-.js";import"./useIsomorphicEffect-C0ObacuX.js";import"./ActionSet-UhZB57-y.js";import"./devtools-BSXGZlBP.js";import"./uuidv4-BN2rGLQG.js";import"./index-KgSg3jcr.js";import"./iframe--Hb3m1kv.js";import"./index-CO8sV34W.js";import"./index-ogSvIofg.js";import"./story-helper-DEC8H8IF.js";import"./index-CKq6Ewiq.js";import"./bucket-17-Dbz5FtJu.js";import"./bucket-9-C6VBS02H.js";const st={title:"IBM Products/Patterns/Create flows/CreateTearsheetNarrow",component:q,tags:["autodocs"],argTypes:{children:{control:{disable:!0}},...X(),...U()},parameters:{styles:K,docs:{page:()=>e.createElement(L,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/create-flows/usage/#narrow-tearsheet"})}}},s=`${J.prefix}--create-tearsheet-narrow--story`,y={title:"Create partition",className:"test-class-name",description:"Select the number of partitions you want to create",formTitle:"Core configuration",formDescription:"We recommend you fill out and evaluate these details at a minimum before deploying your topic.",primaryButtonText:"Create",secondaryButtonText:"Cancel",label:"Test label",selectorPrimaryFocus:"#tearsheet-narrow-story-text-input--1"},Z=({slug:u,decorator:p,...S},N)=>{const[o,d]=t.useState(N.viewMode!=="docs"),[r,x]=t.useState(""),[v,w]=t.useState(1),[C,I]=t.useState(1),[T,f]=t.useState(1),[g,R]=t.useState(1),[h,M]=t.useState(1),[D]=t.useState(["Day(s)","Month(s)","Year(s"]),_=v<=0||C<=0||T<=0||g<=0||h<=0;return e.createElement("div",null,e.createElement("style",null,`.${y.className} { opacity: 0 }`,";"),e.createElement(W,{onClick:()=>d(!o)},o?"Close CreateTearsheetNarrow":"Open CreateTearsheetNarrow"),e.createElement(q,{open:o,onRequestClose:()=>d(!1),onRequestSubmit:Y("onRequestSubmit action called"),disableSubmit:!r||_,slug:u&&b(u),decorator:p&&b(p),...S},e.createElement(H,{labelText:"Topic name",id:"tearsheet-narrow-story-text-input--1",value:r,placeholder:"Enter topic name",onChange:a=>x(a.target.value)}),e.createElement(n,{iconDescription:"Choose a number",id:"partition-count",min:1,max:100,value:v,label:"Partitions",invalidText:"Max partitions is 100, min is 1",onChange:a=>w(a.imaginaryTarget.value)}),e.createElement(n,{iconDescription:"Choose a number",id:"replica-count",min:1,max:100,value:C,label:"Replicas",invalidText:"Max replicas is 10, min is 1",onChange:a=>I(a.imaginaryTarget.value)}),e.createElement(n,{iconDescription:"Choose a number",id:"minimum-in-sync-count",min:1,max:100,value:T,label:"Minimum in-sync replicas",invalidText:"Max is 5, min is 1",onChange:a=>f(a.imaginaryTarget.value)}),e.createElement("div",{className:`${s}__flex-container`},e.createElement(n,{iconDescription:"Choose a number",id:"retention-time",min:1,max:60,value:g,label:"Retention time",invalidText:"Max is 60, min is 1",onChange:a=>R(a.imaginaryTarget.value)}),e.createElement(A,{id:"create-tearsheet-narrow-dropdown-options-c",initialSelectedItem:"Day(s)",items:D,label:"Options",titleText:"Options"})),e.createElement(n,{iconDescription:"Choose a number",id:"quantity",min:1,max:100,value:h,label:"Quantity",invalidText:"Max is 10, min is 1",onChange:a=>M(a.imaginaryTarget.value)})))},j=({slug:u,decorator:p,...S},N)=>{const[o,d]=t.useState(N.viewMode!=="docs"),[r,x]=t.useState(""),[v,w]=t.useState(1),[C,I]=t.useState(1),[T,f]=t.useState(1),[g,R]=t.useState(1),[h,M]=t.useState(1),[D]=t.useState(["Day(s)","Month(s)","Year(s"]),[_,a]=t.useState(!1),z=v<=0||C<=0||T<=0||g<=0||h<=0;return e.createElement("div",null,e.createElement("style",null,`.${y.className} { opacity: 0 }`,";"),e.createElement(W,{onClick:()=>d(!o)},o?"Close CreateTearsheetNarrow":"Open CreateTearsheetNarrow"),e.createElement(q,{open:o,onRequestClose:()=>{d(!1),x(""),a(!1)},onRequestSubmit:Y("onRequestSubmit action called"),disableSubmit:!r||z,slug:u&&b(u),decorator:p&&b(p),...S},e.createElement(E,{className:`${s}__form ${s}__example-form-group`,legendText:"Topic information"},e.createElement(H,{labelText:"Topic name",id:"tearsheet-narrow-story-text-input--1",value:r,placeholder:"Enter topic name",onChange:i=>x(i.target.value),onBlur:()=>!r.length&&a(!0),invalid:_,invalidText:"This is a required field"}),e.createElement(n,{iconDescription:"Choose a number",id:"partition-count",min:1,max:100,value:v,label:"Partitions",invalidText:"Max partitions is 100, min is 1",onChange:i=>w(i.imaginaryTarget.value)}),e.createElement(n,{iconDescription:"Choose a number",id:"replica-count",min:1,max:100,value:C,label:"Replicas",invalidText:"Max replicas is 10, min is 1",onChange:i=>I(i.imaginaryTarget.value)}),e.createElement(n,{iconDescription:"Choose a number",id:"minimum-in-sync-count",min:1,max:100,value:T,label:"Minimum in-sync replicas",invalidText:"Max is 5, min is 1",onChange:i=>f(i.imaginaryTarget.value)})),e.createElement(E,{className:`${s}__form ${s}__example-form-group`,legendText:"Scheduling"},e.createElement("div",{className:`${s}__flex-container`},e.createElement(n,{iconDescription:"Choose a number",id:"retention-time",min:1,max:60,value:g,label:"Retention time",invalidText:"Max is 60, min is 1",onChange:i=>R(i.imaginaryTarget.value)}),e.createElement(A,{id:"create-tearsheet-narrow-dropdown-options-c",initialSelectedItem:"Day(s)",items:D,label:"Options",titleText:"Options"})),e.createElement(n,{iconDescription:"Choose a number",id:"quantity",min:1,max:100,value:h,label:"Quantity",invalidText:"Max is 10, min is 1",onChange:i=>M(i.imaginaryTarget.value)}))))},ee="Default",m=Z.bind({});m.storyName=ee;m.args={...y};const te="With Form Validation",l=j.bind({});l.storyName=te;l.args={...y};const ae="With Multiple Forms",c=j.bind({});c.storyName=ae;c.args={...y};var O,B,$;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`({
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
}`,...($=(B=m.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var P,k,F;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`({
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
}`,...(F=(k=l.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var Q,G,V;c.parameters={...c.parameters,docs:{...(Q=c.parameters)==null?void 0:Q.docs,source:{originalSource:`({
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
}`,...(V=(G=c.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};const mt=["createTearsheetNarrow","withValidation","withMultipleForms"];export{mt as __namedExportsOrder,m as createTearsheetNarrow,st as default,c as withMultipleForms,l as withValidation};
