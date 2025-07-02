import{e,r as t}from"./index-DtHxqM--.js";import{a as Y}from"./index-B-lxVbXh.js";import"./index-4poXP75K.js";import{B as A,p as K}from"./settings-Bzj6EGPa.js";import{D as H}from"./Dropdown-CEnPVNAx.js";import{F as q}from"./FormGroup-TrQxkASF.js";import{N as n}from"./NumberInput-CY9fJUbq.js";import{T as j}from"./TextInput-CBue0XF4.js";import{S as O}from"./StringFormatter-CBtq_Hoj.js";import{s as L}from"./_storybook-styles-B4jRGrUa.js";import{S as U}from"./StoryDocsPage-wPPqGWyY.js";import{d as X,s as Z,a as b}from"./decorator-QTywbba9.js";import{C as E}from"./CreateTearsheetNarrow-CdlPOsSF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CtRu48qb.js";import"./index-DgLvjnYm.js";import"./index-CiYgQLeJ.js";import"./events-CdfZZS3f.js";import"./index-CK_d43HR.js";import"./inheritsLoose-D3Az7yH5.js";import"./FormContext-C4Nuixum.js";import"./mergeRefs-91-mP8KM.js";import"./index-CVEmjZFv.js";import"./bucket-18-338UTbBD.js";import"./utils--12iVJsW.js";import"./bucket-19-D8xKEiK4.js";import"./useNormalizedInputProps-OpqrZ34r.js";import"./Text-Cjos7Soh.js";import"./clamp--00YEiB8.js";import"./useControllableState-P5wT7SAH.js";import"./documentLang-E105Y72C.js";import"./bucket-16-B0VO6oot.js";import"./bucket-0-C0XwVn_F.js";import"./devtools-B69Kc3qg.js";import"./DefinitionTooltip-DCyVnqQ8.js";import"./props-helper-57MyEezq.js";import"./useIsomorphicEffect-DztsuiUB.js";import"./index-BwG5U4EM.js";import"./iframe-Chm5YKQf.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";import"./story-helper-C5uq5kSZ.js";import"./bucket-9-BIeYAPRu.js";import"./Form-ChW2GdEk.js";import"./TearsheetNarrow-BI8kbgq3.js";import"./TearsheetShell-CBhZ5r7h.js";import"./useResizeObserver-CiQvgsPb.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-CpTP8HrD.js";import"./index-BqG52EEo.js";import"./LayerContext-B9CO-6mR.js";import"./ButtonSet-A5I0_tvd.js";import"./InlineLoading-WqBhFG3p.js";import"./bucket-6-DLW23Ky6.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-jEwItT4M.js";import"./index-2cTe6Fdx.js";import"./Wrap-Dkwk7Xz6.js";import"./usePortalTarget-CqHjfDP8.js";import"./feature-flags-eU_vhwbI.js";import"./index-CbYM9rgX.js";import"./useFocus-NuZvsjqA.js";import"./usePreviousValue-CuNkkQo9.js";import"./ActionSet-5vkpASfI.js";import"./uuidv4-BN2rGLQG.js";const Ct={title:"Patterns/Prebuilt patterns/Create flows/CreateTearsheetNarrow",component:E,tags:["autodocs"],argTypes:{description:{control:{type:"select",labels:{0:"With plain String",1:"With StringFormatter and 1 line",2:"With StringFormatter and 2 lines"},default:0},description:"A description of the flow, displayed in the header area of the tearsheet.\n Note: `StringFormatter` can be passed as a React node to apply custom text formatting, including ellipsis truncation and a definition tooltip when the content is too long.",options:[0,1,2],mapping:{0:"Select the number of partitions you want to create",1:e.createElement(O,{lines:1,truncate:!0,value:"This is a description for the tearsheet, providing an opportunity to describe the flow over a couple of lines in the header of the tearsheet.",tooltipDirection:"bottom"}),2:e.createElement(O,{lines:2,truncate:!0,value:"This is a description for the tearsheet, providing an opportunity to describe the flow over a couple of lines in the header of the tearsheet.",tooltipDirection:"bottom"})}},children:{control:{disable:!0}},...Z(),...X()},parameters:{styles:L,docs:{page:()=>e.createElement(U,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/create-flows/usage/#narrow-tearsheet"})}}},s=`${K.prefix}--create-tearsheet-narrow--story`,y={title:"Create partition",className:"test-class-name",description:0,formTitle:"Core configuration",formDescription:"We recommend you fill out and evaluate these details at a minimum before deploying your topic.",primaryButtonText:"Create",secondaryButtonText:"Cancel",label:"Test label",selectorPrimaryFocus:"#tearsheet-narrow-story-text-input--1"},ee=({slug:u,decorator:p,...S},N)=>{const[o,d]=t.useState(N.viewMode!=="docs"),[r,x]=t.useState(""),[v,f]=t.useState(1),[C,w]=t.useState(1),[h,I]=t.useState(1),[T,R]=t.useState(1),[g,D]=t.useState(1),[M]=t.useState(["Day(s)","Month(s)","Year(s"]),_=v<=0||C<=0||h<=0||T<=0||g<=0;return e.createElement("div",null,e.createElement("style",null,`.${y.className} { opacity: 0 }`,";"),e.createElement(A,{onClick:()=>d(!o)},o?"Close CreateTearsheetNarrow":"Open CreateTearsheetNarrow"),e.createElement(E,{open:o,onRequestClose:()=>d(!1),onRequestSubmit:Y("onRequestSubmit action called"),disableSubmit:!r||_,slug:u&&b(u),decorator:p&&b(p),...S},e.createElement(j,{labelText:"Topic name",id:"tearsheet-narrow-story-text-input--1",value:r,placeholder:"Enter topic name",onChange:a=>x(a.target.value)}),e.createElement(n,{iconDescription:"Choose a number",id:"partition-count",min:1,max:100,value:v,label:"Partitions",invalidText:"Max partitions is 100, min is 1",onChange:a=>f(a.imaginaryTarget.value)}),e.createElement(n,{iconDescription:"Choose a number",id:"replica-count",min:1,max:100,value:C,label:"Replicas",invalidText:"Max replicas is 10, min is 1",onChange:a=>w(a.imaginaryTarget.value)}),e.createElement(n,{iconDescription:"Choose a number",id:"minimum-in-sync-count",min:1,max:100,value:h,label:"Minimum in-sync replicas",invalidText:"Max is 5, min is 1",onChange:a=>I(a.imaginaryTarget.value)}),e.createElement("div",{className:`${s}__flex-container`},e.createElement(n,{iconDescription:"Choose a number",id:"retention-time",min:1,max:60,value:T,label:"Retention time",invalidText:"Max is 60, min is 1",onChange:a=>R(a.imaginaryTarget.value)}),e.createElement(H,{id:"create-tearsheet-narrow-dropdown-options-c",initialSelectedItem:"Day(s)",items:M,label:"Options",titleText:"Options"})),e.createElement(n,{iconDescription:"Choose a number",id:"quantity",min:1,max:100,value:g,label:"Quantity",invalidText:"Max is 10, min is 1",onChange:a=>D(a.imaginaryTarget.value)})))},z=({slug:u,decorator:p,...S},N)=>{const[o,d]=t.useState(N.viewMode!=="docs"),[r,x]=t.useState(""),[v,f]=t.useState(1),[C,w]=t.useState(1),[h,I]=t.useState(1),[T,R]=t.useState(1),[g,D]=t.useState(1),[M]=t.useState(["Day(s)","Month(s)","Year(s"]),[_,a]=t.useState(!1),J=v<=0||C<=0||h<=0||T<=0||g<=0;return e.createElement("div",null,e.createElement("style",null,`.${y.className} { opacity: 0 }`,";"),e.createElement(A,{onClick:()=>d(!o)},o?"Close CreateTearsheetNarrow":"Open CreateTearsheetNarrow"),e.createElement(E,{open:o,onRequestClose:()=>{d(!1),x(""),a(!1)},onRequestSubmit:Y("onRequestSubmit action called"),disableSubmit:!r||J,slug:u&&b(u),decorator:p&&b(p),...S},e.createElement(q,{className:`${s}__form ${s}__example-form-group`,legendText:"Topic information"},e.createElement(j,{labelText:"Topic name",id:"tearsheet-narrow-story-text-input--1",value:r,placeholder:"Enter topic name",onChange:i=>x(i.target.value),onBlur:()=>!r.length&&a(!0),invalid:_,invalidText:"This is a required field"}),e.createElement(n,{iconDescription:"Choose a number",id:"partition-count",min:1,max:100,value:v,label:"Partitions",invalidText:"Max partitions is 100, min is 1",onChange:i=>f(i.imaginaryTarget.value)}),e.createElement(n,{iconDescription:"Choose a number",id:"replica-count",min:1,max:100,value:C,label:"Replicas",invalidText:"Max replicas is 10, min is 1",onChange:i=>w(i.imaginaryTarget.value)}),e.createElement(n,{iconDescription:"Choose a number",id:"minimum-in-sync-count",min:1,max:100,value:h,label:"Minimum in-sync replicas",invalidText:"Max is 5, min is 1",onChange:i=>I(i.imaginaryTarget.value)})),e.createElement(q,{className:`${s}__form ${s}__example-form-group`,legendText:"Scheduling"},e.createElement("div",{className:`${s}__flex-container`},e.createElement(n,{iconDescription:"Choose a number",id:"retention-time",min:1,max:60,value:T,label:"Retention time",invalidText:"Max is 60, min is 1",onChange:i=>R(i.imaginaryTarget.value)}),e.createElement(H,{id:"create-tearsheet-narrow-dropdown-options-c",initialSelectedItem:"Day(s)",items:M,label:"Options",titleText:"Options"})),e.createElement(n,{iconDescription:"Choose a number",id:"quantity",min:1,max:100,value:g,label:"Quantity",invalidText:"Max is 10, min is 1",onChange:i=>D(i.imaginaryTarget.value)}))))},te="Default",m=ee.bind({});m.storyName=te;m.args={...y};const ae="With Form Validation",l=z.bind({});l.storyName=ae;l.args={...y};const ie="With Multiple Forms",c=z.bind({});c.storyName=ie;c.args={...y};var B,$,P;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`({
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
}`,...(P=($=m.parameters)==null?void 0:$.docs)==null?void 0:P.source}}};var F,k,Q;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`({
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
}`,...(Q=(k=l.parameters)==null?void 0:k.docs)==null?void 0:Q.source}}};var G,W,V;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`({
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
}`,...(V=(W=c.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};const ht=["createTearsheetNarrow","withValidation","withMultipleForms"];export{ht as __namedExportsOrder,m as createTearsheetNarrow,Ct as default,c as withMultipleForms,l as withValidation};
