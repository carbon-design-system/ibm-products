import{e,r as t}from"./index-DxDX2vOa.js";import{a as Y}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as K,P as q}from"./index-B_euquWE.js";import{p as M,B as W}from"./settings-0ThqPtR3.js";import{D as A}from"./Dropdown-DnYB61C4.js";import{F as O}from"./FormGroup-BHxKds7u.js";import{N as i}from"./NumberInput-B5Nr-RgL.js";import{T as j}from"./TextInput-CqIwQ22u.js";import{s as L,C as H}from"./_storybook-styles-CETQv-QN.js";import{S as X}from"./StoryDocsPage-CSDwatIL.js";import{s as Z,S as U}from"./slug-C_MVEI5G.js";import{A as ee}from"./index-CJ0Gdo6o.js";import{g as te}from"./devtools-BlxCaI1L.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./index-CaMJXrh2.js";import"./events-OVwOsPzJ.js";import"./index-YDq2Pj7F.js";import"./index-D4Cc84yY.js";import"./tslib.es6-B4_xh3D5.js";import"./FormContext-Dj7olUH1.js";import"./mergeRefs-CTUecegF.js";import"./bucket-18-Dvh787Y8.js";import"./bucket-2-BDpMY3Ys.js";import"./useNormalizedInputProps-BaY27oQV.js";import"./Text-9AedOkae.js";import"./bucket-16-BwEHvyin.js";import"./bucket-0-DEgqxqZV.js";import"./useAnnouncer-Dwt0jqXi.js";import"./Form-Cr9ynH8v.js";import"./TearsheetNarrow-Bb2dZdIc.js";import"./TearsheetShell-DL71VJCc.js";import"./useResizeObserver-DUmvKY5Q.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./props-helper-DmbAnr2a.js";import"./ComposedModal-BsLCo1xi.js";import"./index-B1YmXwfC.js";import"./LayerContext-BLFdRioi.js";import"./ButtonSet-epghEKVn.js";import"./InlineLoading-CIMtbZ0Q.js";import"./bucket-6-Cw3hdw1e.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-ChZuRP4g.js";import"./usePortalTarget-BfZpr1XQ.js";import"./feature-flags-BboNqy5q.js";import"./index-DYXyeV2p.js";import"./useFocus-57u9QJvZ.js";import"./wait-CTNFjQS8.js";import"./usePreviousValue-CLgSY5iR.js";import"./ActionSet-0Lk-L5n-.js";import"./uuidv4-BQrI85uz.js";import"./index-CYHZTqqy.js";import"./iframe-Cku1tuHn.js";import"../sb-preview/runtime.js";import"./index-Df9so8jS.js";import"./index-CRUq0TYl.js";import"./index-DrFu-skq.js";import"./story-helper-BvAgcfdm.js";import"./index-DkxCE0a1.js";import"./bucket-17-BLAXVSDb.js";import"./bucket-9-Clk9T-SZ.js";const ae=`${M.prefix}--edit-tearsheet-narrow`,_="EditTearsheetNarrow";let l=e.forwardRef(({children:r,className:v,...o},s)=>e.createElement("div",{...o,className:K(ae,v,{}),ref:s,role:"main",...te(_)},r));l.deprecated={level:"warn",details:"This component is deprecated and will be removed in the next major version."};l=M.checkComponentEnabled(l,_);l.displayName=_;l.propTypes={children:q.node.isRequired,className:q.string};l.__docgenInfo={description:`**This component is deprecated.** <br>
Use a narrow tearsheet as an alternative to a modal when there is scrolling. See usage guidance for further information.
@deprecated`,methods:[],displayName:"EditTearsheetNarrow",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Provide the contents of the EditTearsheetNarrow.",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}}}};const vt={title:"Deprecated/Edit and update/EditTearsheetNarrow",component:l,tags:["autodocs"],parameters:{styles:L,docs:{page:()=>e.createElement(X,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/edit-and-update/usage/#tearsheet-edit"})}},decorators:[r=>e.createElement(ee,{type:"deprecation-notice",text:e.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},r())],argTypes:{...Z()}},u=`${M.prefix}--create-tearsheet-narrow--story`,C={title:"Edit partition",className:"test-class-name",description:"Select the number of partitions you want to create",formTitle:"Core configuration",formDescription:"We recommend you fill out and evaluate these details at a minimum before deploying your topic.",primaryButtonText:"Save",secondaryButtonText:"Cancel",label:"Test label",selectorPrimaryFocus:"#tearsheet-narrow-story-text-input--1"},ne=({slug:r,...v})=>{const[o,s]=t.useState(!1),[m,S]=t.useState("Enter topic name here"),[T,N]=t.useState(1),[g,b]=t.useState(1),[y,f]=t.useState(1),[h,w]=t.useState(1),[x,I]=t.useState(1),[R]=t.useState(["Day(s)","Month(s)","Year(s"]),E=T<=0||g<=0||y<=0||h<=0||x<=0;return e.createElement(e.Fragment,null,e.createElement("style",null,`.${C.className} { opacity: 0 }`,";"),e.createElement(W,{onClick:()=>s(!o)},o?"Close EditTearsheetNarrow":"Open EditTearsheetNarrow"),e.createElement(H,{open:o,onRequestClose:()=>s(!1),onRequestSubmit:Y("onRequestSubmit action called"),disableSubmit:!m||E,slug:r&&U(),...v},e.createElement(j,{labelText:"Topic name",id:"tearsheet-narrow-story-text-input--1",value:m,placeholder:"Enter topic name",onChange:a=>S(a.target.value)}),e.createElement(i,{id:"partition-count",min:1,max:100,value:T,label:"Partitions",invalidText:"Max partitions is 100, min is 1",onChange:a=>N(a.imaginaryTarget.value)}),e.createElement(i,{id:"replica-count",min:1,max:100,value:g,label:"Replicas",invalidText:"Max replicas is 10, min is 1",onChange:a=>b(a.imaginaryTarget.value)}),e.createElement(i,{id:"minimum-in-sync-count",min:1,max:100,value:y,label:"Minimum in-sync replicas",invalidText:"Max is 5, min is 1",onChange:a=>f(a.imaginaryTarget.value)}),e.createElement("div",{className:`${u}__flex-container`},e.createElement(i,{id:"retention-time",min:1,max:60,value:h,label:"Retention time",invalidText:"Max is 60, min is 1",onChange:a=>w(a.imaginaryTarget.value)}),e.createElement(A,{id:"create-tearsheet-narrow-dropdown-options-c",initialSelectedItem:"Day(s)",items:R,label:"Options",titleText:"Options"})),e.createElement(i,{id:"quantity",min:1,max:100,value:x,label:"Quantity",invalidText:"Max is 10, min is 1",onChange:a=>I(a.imaginaryTarget.value)})))},z=({slug:r,...v})=>{const[o,s]=t.useState(!1),[m,S]=t.useState("Enter topic name here"),[T,N]=t.useState(1),[g,b]=t.useState(1),[y,f]=t.useState(1),[h,w]=t.useState(1),[x,I]=t.useState(1),[R]=t.useState(["Day(s)","Month(s)","Year(s"]),[E,a]=t.useState(!1),J=T<=0||g<=0||y<=0||h<=0||x<=0;return e.createElement(e.Fragment,null,e.createElement("style",null,`.${C.className} { opacity: 0 }`,";"),e.createElement(W,{onClick:()=>s(!o)},o?"Close EditTearsheetNarrow":"Open EditTearsheetNarrow"),e.createElement(H,{open:o,onRequestClose:()=>{s(!1),S(""),a(!1)},onRequestSubmit:Y("onRequestSubmit action called"),disableSubmit:!m||J,slug:r&&U(),...v},e.createElement(O,{className:`${u}__form ${u}__example-form-group`,legendText:"Topic information"},e.createElement(j,{labelText:"Topic name",id:"tearsheet-narrow-story-text-input--1",value:m,placeholder:"Enter topic name",onChange:n=>S(n.target.value),onBlur:()=>!m.length&&a(!0),invalid:E,invalidText:"This is a required field"}),e.createElement(i,{id:"partition-count",min:1,max:100,value:T,label:"Partitions",invalidText:"Max partitions is 100, min is 1",onChange:n=>N(n.imaginaryTarget.value)}),e.createElement(i,{id:"replica-count",min:1,max:100,value:g,label:"Replicas",invalidText:"Max replicas is 10, min is 1",onChange:n=>b(n.imaginaryTarget.value)}),e.createElement(i,{id:"minimum-in-sync-count",min:1,max:100,value:y,label:"Minimum in-sync replicas",invalidText:"Max is 5, min is 1",onChange:n=>f(n.imaginaryTarget.value)})),e.createElement(O,{className:`${u}__form ${u}__example-form-group`,legendText:"Scheduling"},e.createElement("div",{className:`${u}__flex-container`},e.createElement(i,{id:"retention-time",min:1,max:60,value:h,label:"Retention time",invalidText:"Max is 60, min is 1",onChange:n=>w(n.imaginaryTarget.value)}),e.createElement(A,{id:"create-tearsheet-narrow-dropdown-options-c",initialSelectedItem:"Day(s)",items:R,label:"Options",titleText:"Options"})),e.createElement(i,{id:"quantity",min:1,max:100,value:x,label:"Quantity",invalidText:"Max is 10, min is 1",onChange:n=>I(n.imaginaryTarget.value)}))))},ie="Default",c=ne.bind({});c.storyName=ie;c.args={...C};const oe="With Form Validation",p=z.bind({});p.storyName=oe;p.args={...C};const re="With Multiple Forms",d=z.bind({});d.storyName=re;d.args={...C};var B,P,$;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`({
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
}`,...($=(P=c.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var k,D,F;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`({
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
}`,...(F=(D=p.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var Q,G,V;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`({
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
}`,...(V=(G=d.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};const Tt=["editTearsheetNarrow","withValidation","withMultipleForms"];export{Tt as __namedExportsOrder,vt as default,c as editTearsheetNarrow,d as withMultipleForms,p as withValidation};
