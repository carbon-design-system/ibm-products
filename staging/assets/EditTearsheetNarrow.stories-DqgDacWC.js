import{e,r as t}from"./index-CPiZ6Cnx.js";import{a as Y}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as K,P as q}from"./index-CXyjPnaX.js";import{p as M,B as W}from"./settings-iwZeeh4T.js";import{D as A}from"./Dropdown-CqwYW1NX.js";import{F as O}from"./FormGroup-9BStNhuZ.js";import{N as i}from"./NumberInput-7N1NynOx.js";import{T as j}from"./TextInput-D6QswYlg.js";import{s as L,C as H}from"./_storybook-styles-CFkNVtH6.js";import{S as X}from"./StoryDocsPage-BfvnOk2Z.js";import{s as Z,S as U}from"./slug-DdkEd7lj.js";import{A as ee}from"./index-DVpmqM_A.js";import{g as te}from"./devtools-CjVY-wQW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./index-BSHYryQu.js";import"./index-Bsyy8W_U.js";import"./events-OVwOsPzJ.js";import"./index-DJK44odq.js";import"./index-DoQB7l6P.js";import"./tslib.es6-rrx6G-_s.js";import"./FormContext-CgeSXHS1.js";import"./mergeRefs-CTUecegF.js";import"./bucket-18-By6NmkK1.js";import"./bucket-2-L5Cs0C3i.js";import"./useNormalizedInputProps-Dv8FHz9Q.js";import"./Text-vNWzJqus.js";import"./bucket-16-DAqQSLfq.js";import"./bucket-0-DUfmGMOu.js";import"./useAnnouncer-Dwt0jqXi.js";import"./Form--JAB0_ak.js";import"./TearsheetNarrow-Ba9cDOZ0.js";import"./TearsheetShell-U9euF4wX.js";import"./useResizeObserver-CZKdqPxj.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./props-helper-Dlg0HCIz.js";import"./ComposedModal-BZzRRIGC.js";import"./index-Dcfl0vi2.js";import"./LayerContext-BGhaVt7n.js";import"./ButtonSet-DCPCKVSR.js";import"./InlineLoading-DZri6jHG.js";import"./bucket-6-BQYdmIZX.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-i_P_nIQh.js";import"./usePortalTarget-2TvXB9Ir.js";import"./feature-flags-B_abUzZ5.js";import"./index-BLF2Ep9P.js";import"./useFocus-jmjiioUJ.js";import"./wait-CTNFjQS8.js";import"./usePreviousValue-CSEZflXC.js";import"./ActionSet-B09sMic5.js";import"./uuidv4-BQrI85uz.js";import"./index-B_DdD064.js";import"./iframe-BFx4DPzL.js";import"../sb-preview/runtime.js";import"./jsx-runtime-Dc-z7RWI.js";import"./index-Df9so8jS.js";import"./index-DMCuvgYY.js";import"./index-DrFu-skq.js";import"./story-helper-U7E6Psyp.js";import"./index-C-0O7yd6.js";import"./bucket-17-Ddrrb1BH.js";import"./bucket-9-BSWQ2dSd.js";const ae=`${M.prefix}--edit-tearsheet-narrow`,_="EditTearsheetNarrow";let m=e.forwardRef(({children:r,className:v,...o},s)=>e.createElement("div",{...o,className:K(ae,v,{}),ref:s,role:"main",...te(_)},r));m.deprecated={level:"warn",details:"This component is deprecated and will be removed in the next major version."};m=M.checkComponentEnabled(m,_);m.displayName=_;m.propTypes={children:q.node.isRequired,className:q.string};m.__docgenInfo={description:`**This component is deprecated.** <br>
Use a narrow tearsheet as an alternative to a modal when there is scrolling. See usage guidance for further information.
@deprecated`,methods:[],displayName:"EditTearsheetNarrow",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Provide the contents of the EditTearsheetNarrow.",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}}}};const gt={title:"Deprecated/Edit and update/EditTearsheetNarrow",component:m,tags:["autodocs"],parameters:{styles:L,docs:{page:()=>e.createElement(X,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/edit-and-update/usage/#tearsheet-edit"})}},decorators:[r=>e.createElement(ee,{type:"deprecation-notice",text:e.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},r())],argTypes:{...Z()}},u=`${M.prefix}--create-tearsheet-narrow--story`,C={title:"Edit partition",className:"test-class-name",description:"Select the number of partitions you want to create",formTitle:"Core configuration",formDescription:"We recommend you fill out and evaluate these details at a minimum before deploying your topic.",primaryButtonText:"Save",secondaryButtonText:"Cancel",label:"Test label",selectorPrimaryFocus:"#tearsheet-narrow-story-text-input--1"},ne=({slug:r,...v})=>{const[o,s]=t.useState(!1),[l,S]=t.useState("Enter topic name here"),[T,N]=t.useState(1),[g,b]=t.useState(1),[y,f]=t.useState(1),[h,w]=t.useState(1),[x,I]=t.useState(1),[R]=t.useState(["Day(s)","Month(s)","Year(s"]),E=T<=0||g<=0||y<=0||h<=0||x<=0;return e.createElement(e.Fragment,null,e.createElement("style",null,`.${C.className} { opacity: 0 }`,";"),e.createElement(W,{onClick:()=>s(!o)},o?"Close EditTearsheetNarrow":"Open EditTearsheetNarrow"),e.createElement(H,{open:o,onRequestClose:()=>s(!1),onRequestSubmit:Y("onRequestSubmit action called"),disableSubmit:!l||E,slug:r&&U(),...v},e.createElement(j,{labelText:"Topic name",id:"tearsheet-narrow-story-text-input--1",value:l,placeholder:"Enter topic name",onChange:a=>S(a.target.value)}),e.createElement(i,{id:"partition-count",min:1,max:100,value:T,label:"Partitions",invalidText:"Max partitions is 100, min is 1",onChange:a=>N(a.imaginaryTarget.value)}),e.createElement(i,{id:"replica-count",min:1,max:100,value:g,label:"Replicas",invalidText:"Max replicas is 10, min is 1",onChange:a=>b(a.imaginaryTarget.value)}),e.createElement(i,{id:"minimum-in-sync-count",min:1,max:100,value:y,label:"Minimum in-sync replicas",invalidText:"Max is 5, min is 1",onChange:a=>f(a.imaginaryTarget.value)}),e.createElement("div",{className:`${u}__flex-container`},e.createElement(i,{id:"retention-time",min:1,max:60,value:h,label:"Retention time",invalidText:"Max is 60, min is 1",onChange:a=>w(a.imaginaryTarget.value)}),e.createElement(A,{id:"create-tearsheet-narrow-dropdown-options-c",initialSelectedItem:"Day(s)",items:R,label:"Options",titleText:"Options"})),e.createElement(i,{id:"quantity",min:1,max:100,value:x,label:"Quantity",invalidText:"Max is 10, min is 1",onChange:a=>I(a.imaginaryTarget.value)})))},z=({slug:r,...v})=>{const[o,s]=t.useState(!1),[l,S]=t.useState("Enter topic name here"),[T,N]=t.useState(1),[g,b]=t.useState(1),[y,f]=t.useState(1),[h,w]=t.useState(1),[x,I]=t.useState(1),[R]=t.useState(["Day(s)","Month(s)","Year(s"]),[E,a]=t.useState(!1),J=T<=0||g<=0||y<=0||h<=0||x<=0;return e.createElement(e.Fragment,null,e.createElement("style",null,`.${C.className} { opacity: 0 }`,";"),e.createElement(W,{onClick:()=>s(!o)},o?"Close EditTearsheetNarrow":"Open EditTearsheetNarrow"),e.createElement(H,{open:o,onRequestClose:()=>{s(!1),S(""),a(!1)},onRequestSubmit:Y("onRequestSubmit action called"),disableSubmit:!l||J,slug:r&&U(),...v},e.createElement(O,{className:`${u}__form ${u}__example-form-group`,legendText:"Topic information"},e.createElement(j,{labelText:"Topic name",id:"tearsheet-narrow-story-text-input--1",value:l,placeholder:"Enter topic name",onChange:n=>S(n.target.value),onBlur:()=>!l.length&&a(!0),invalid:E,invalidText:"This is a required field"}),e.createElement(i,{id:"partition-count",min:1,max:100,value:T,label:"Partitions",invalidText:"Max partitions is 100, min is 1",onChange:n=>N(n.imaginaryTarget.value)}),e.createElement(i,{id:"replica-count",min:1,max:100,value:g,label:"Replicas",invalidText:"Max replicas is 10, min is 1",onChange:n=>b(n.imaginaryTarget.value)}),e.createElement(i,{id:"minimum-in-sync-count",min:1,max:100,value:y,label:"Minimum in-sync replicas",invalidText:"Max is 5, min is 1",onChange:n=>f(n.imaginaryTarget.value)})),e.createElement(O,{className:`${u}__form ${u}__example-form-group`,legendText:"Scheduling"},e.createElement("div",{className:`${u}__flex-container`},e.createElement(i,{id:"retention-time",min:1,max:60,value:h,label:"Retention time",invalidText:"Max is 60, min is 1",onChange:n=>w(n.imaginaryTarget.value)}),e.createElement(A,{id:"create-tearsheet-narrow-dropdown-options-c",initialSelectedItem:"Day(s)",items:R,label:"Options",titleText:"Options"})),e.createElement(i,{id:"quantity",min:1,max:100,value:x,label:"Quantity",invalidText:"Max is 10, min is 1",onChange:n=>I(n.imaginaryTarget.value)}))))},ie="Default",c=ne.bind({});c.storyName=ie;c.args={...C};const oe="With Form Validation",p=z.bind({});p.storyName=oe;p.args={...C};const re="With Multiple Forms",d=z.bind({});d.storyName=re;d.args={...C};var B,P,$;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`({
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
}`,...(V=(G=d.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};const yt=["editTearsheetNarrow","withValidation","withMultipleForms"];export{yt as __namedExportsOrder,gt as default,c as editTearsheetNarrow,d as withMultipleForms,p as withValidation};
