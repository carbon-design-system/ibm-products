import{p as _,j as e,B as V}from"./settings-CljJQLyl.js";import{R as K,r as t}from"./index-BwDkhjyp.js";import{a as Y}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{c as L}from"./floating-ui.react-C-lGofMW.js";import{D as W}from"./Dropdown-DS9tr3Sg.js";import{F as E}from"./FormGroup-CetGQBil.js";import{N as i}from"./NumberInput-B_IiETrc.js";import{T as A}from"./TextInput-BxExSEf6.js";import{s as X,C as H}from"./_storybook-styles-ClHkbtR2.js";import{S as Z}from"./StoryDocsPage-CNi3GqrB.js";import{s as ee,S as U}from"./slug-BIdG4TSb.js";import{P as j}from"./index-Dk74W0Oi.js";import{g as te}from"./devtools-C9kUiWhx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./events-B5D95Jtx.js";import"./index-1ulDwjQN.js";import"./v4-CQkTLCs1.js";import"./index-BONylQH5.js";import"./index-B1Zk_jvd.js";import"./extends-CCbyfPlC.js";import"./index-DcAOwtUU.js";import"./tslib.es6-B4_xh3D5.js";import"./FormContext-C7kRVu4t.js";import"./mergeRefs-CTUecegF.js";import"./bucket-18-9qioxFta.js";import"./useNormalizedInputProps-ZjpNpqFw.js";import"./Text-B6Yb8geH.js";import"./bucket-15-Bq0LvDr0.js";import"./bucket-0-M87sILds.js";import"./bucket-17-ByMkANur.js";import"./useAnnouncer-Dwt0jqXi.js";import"./Form-C6pxK2BG.js";import"./TearsheetNarrow-mNf_zOMG.js";import"./TearsheetShell-CgULgFRM.js";import"./useResizeObserver-CYrpFlRY.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-qy9RXrDA.js";import"./index-CUiOlLtv.js";import"./LayerContext-DbU-6VX4.js";import"./ButtonSet--6H_yrng.js";import"./InlineLoading-CCyGWQ0L.js";import"./bucket-6-CJUP1MJz.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-DMN3GZJC.js";import"./index-xbyQ_51k.js";import"./usePortalTarget-BZfsLKvG.js";import"./feature-flags-DvPVNspo.js";import"./index-DnHywpOJ.js";import"./useFocus-BFpJW4NW.js";import"./wait-CTNFjQS8.js";import"./usePreviousValue-DDnp_zt4.js";import"./ActionSet-0r0uXgna.js";import"./props-helper-BM8tfO54.js";import"./uuidv4-BQrI85uz.js";import"./index-DyDuCB6G.js";import"./iframe-CRI-r_X1.js";import"../sb-preview/runtime.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./story-helper-Ba8HmmvT.js";import"./index-CMVUDlQd.js";const ne=`${_.prefix}--edit-tearsheet-narrow`,q="EditTearsheetNarrow";let c=K.forwardRef(({children:d,className:v,...o},s)=>e.jsx("div",{...o,className:L(ne,v,{}),ref:s,role:"main",...te(q),children:d}));c=_.checkComponentEnabled(c,q);c.displayName=q;c.propTypes={children:j.node.isRequired,className:j.string};c.__docgenInfo={description:"Use a narrow tearsheet as an alternative to a modal when there is scrolling. See usage guidance for further information.",methods:[],displayName:"EditTearsheetNarrow",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Provide the contents of the EditTearsheetNarrow.",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}}}};const xt={title:"Experimental/Patterns/Edit and update/EditTearsheetNarrow",component:c,tags:["autodocs"],parameters:{styles:X,docs:{page:()=>e.jsx(Z,{altGuidelinesHref:"https://pages.github.ibm.com/cdai-design/pal/patterns/edit/usage#tearsheet-edit"})}},argTypes:{...ee()}},l=`${_.prefix}--create-tearsheet-narrow--story`,C={title:"Edit partition",className:"test-class-name",description:"Select the number of partitions you want to create",formTitle:"Core configuration",formDescription:"We recommend you fill out and evaluate these details at a minimum before deploying your topic.",primaryButtonText:"Save",secondaryButtonText:"Cancel",label:"Test label",selectorPrimaryFocus:"#tearsheet-narrow-story-text-input--1"},ae=({slug:d,...v})=>{const[o,s]=t.useState(!1),[r,S]=t.useState("Enter topic name here"),[T,N]=t.useState(1),[x,b]=t.useState(1),[g,f]=t.useState(1),[h,w]=t.useState(1),[y,I]=t.useState(1),[R]=t.useState(["Day(s)","Month(s)","Year(s"]),M=T<=0||x<=0||g<=0||h<=0||y<=0;return e.jsxs("div",{children:[e.jsxs("style",{children:[`.${C.className} { opacity: 0 }`,";"]}),e.jsx(V,{onClick:()=>s(!o),children:o?"Close EditTearsheetNarrow":"Open EditTearsheetNarrow"}),e.jsxs(H,{open:o,onRequestClose:()=>s(!1),onRequestSubmit:Y("onRequestSubmit action called"),disableSubmit:!r||M,slug:d&&U(),...v,children:[e.jsx(A,{labelText:"Topic name",id:"tearsheet-narrow-story-text-input--1",value:r,placeholder:"Enter topic name",onChange:n=>S(n.target.value)}),e.jsx(i,{id:"partition-count",min:1,max:100,value:T,label:"Partitions",invalidText:"Max partitions is 100, min is 1",onChange:n=>N(n.imaginaryTarget.value)}),e.jsx(i,{id:"replica-count",min:1,max:100,value:x,label:"Replicas",invalidText:"Max replicas is 10, min is 1",onChange:n=>b(n.imaginaryTarget.value)}),e.jsx(i,{id:"minimum-in-sync-count",min:1,max:100,value:g,label:"Minimum in-sync replicas",invalidText:"Max is 5, min is 1",onChange:n=>f(n.imaginaryTarget.value)}),e.jsxs("div",{className:`${l}__flex-container`,children:[e.jsx(i,{id:"retention-time",min:1,max:60,value:h,label:"Retention time",invalidText:"Max is 60, min is 1",onChange:n=>w(n.imaginaryTarget.value)}),e.jsx(W,{id:"create-tearsheet-narrow-dropdown-options-c",initialSelectedItem:"Day(s)",items:R,label:"Options",titleText:"Options"})]}),e.jsx(i,{id:"quantity",min:1,max:100,value:y,label:"Quantity",invalidText:"Max is 10, min is 1",onChange:n=>I(n.imaginaryTarget.value)})]})]})},z=({slug:d,...v})=>{const[o,s]=t.useState(!1),[r,S]=t.useState("Enter topic name here"),[T,N]=t.useState(1),[x,b]=t.useState(1),[g,f]=t.useState(1),[h,w]=t.useState(1),[y,I]=t.useState(1),[R]=t.useState(["Day(s)","Month(s)","Year(s"]),[M,n]=t.useState(!1),J=T<=0||x<=0||g<=0||h<=0||y<=0;return e.jsxs("div",{children:[e.jsxs("style",{children:[`.${C.className} { opacity: 0 }`,";"]}),e.jsx(V,{onClick:()=>s(!o),children:o?"Close EditTearsheetNarrow":"Open EditTearsheetNarrow"}),e.jsxs(H,{open:o,onRequestClose:()=>{s(!1),S(""),n(!1)},onRequestSubmit:Y("onRequestSubmit action called"),disableSubmit:!r||J,slug:d&&U(),...v,children:[e.jsxs(E,{className:`${l}__form ${l}__example-form-group`,legendText:"Topic information",children:[e.jsx(A,{labelText:"Topic name",id:"tearsheet-narrow-story-text-input--1",value:r,placeholder:"Enter topic name",onChange:a=>S(a.target.value),onBlur:()=>!r.length&&n(!0),invalid:M,invalidText:"This is a required field"}),e.jsx(i,{id:"partition-count",min:1,max:100,value:T,label:"Partitions",invalidText:"Max partitions is 100, min is 1",onChange:a=>N(a.imaginaryTarget.value)}),e.jsx(i,{id:"replica-count",min:1,max:100,value:x,label:"Replicas",invalidText:"Max replicas is 10, min is 1",onChange:a=>b(a.imaginaryTarget.value)}),e.jsx(i,{id:"minimum-in-sync-count",min:1,max:100,value:g,label:"Minimum in-sync replicas",invalidText:"Max is 5, min is 1",onChange:a=>f(a.imaginaryTarget.value)})]}),e.jsxs(E,{className:`${l}__form ${l}__example-form-group`,legendText:"Scheduling",children:[e.jsxs("div",{className:`${l}__flex-container`,children:[e.jsx(i,{id:"retention-time",min:1,max:60,value:h,label:"Retention time",invalidText:"Max is 60, min is 1",onChange:a=>w(a.imaginaryTarget.value)}),e.jsx(W,{id:"create-tearsheet-narrow-dropdown-options-c",initialSelectedItem:"Day(s)",items:R,label:"Options",titleText:"Options"})]}),e.jsx(i,{id:"quantity",min:1,max:100,value:y,label:"Quantity",invalidText:"Max is 10, min is 1",onChange:a=>I(a.imaginaryTarget.value)})]})]})]})},ie="Default",m=ae.bind({});m.storyName=ie;m.args={...C};const oe="With Form Validation",u=z.bind({});u.storyName=oe;u.args={...C};const se="With Multiple Forms",p=z.bind({});p.storyName=se;p.args={...C};var O,B,P;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`({
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
}`,...(P=(B=m.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var $,k,D;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`({
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
}`,...(D=(k=u.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var F,Q,G;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`({
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
}`,...(G=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:G.source}}};const gt=["editTearsheetNarrow","withValidation","withMultipleForms"];export{gt as __namedExportsOrder,xt as default,m as editTearsheetNarrow,p as withMultipleForms,u as withValidation};
