var W=Object.defineProperty;var t=(r,s)=>W(r,"name",{value:s,configurable:!0});import{e,S as Y,r as a,B as $,p as V}from"./iframe-DU3fWsEq.js";import{D as P}from"./Dropdown-DYfcOZ8h.js";import{F as O}from"./FormGroup-DzyROZ99.js";import{N as o}from"./NumberInput-Cpqim228.js";import{T as k}from"./TextInput--RpbZDfF.js";import{s as A}from"./_storybook-styles-B4jRGrUa.js";import{d as H,s as K,a as S}from"./decorator-B2_DLVNJ.js";import{C as q}from"./CreateTearsheetNarrow-CKUSIkfR.js";import{T as B}from"./TruncatedText-UBmuRnAk.js";import"./preload-helper-Cc2_yIPf.js";import"./defaultItemToString-DDHghiWu.js";import"./index-Cp5_bPRb.js";import"./index-CnSnZ5hY.js";import"./bucket-19-Be1_xXYE.js";import"./downshift.esm-D4fflNyB.js";import"./FormContext-DWfhBwkE.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./useNormalizedInputProps-CiScQqEC.js";import"./Text-BMNkTgzs.js";import"./bucket-20-CmByzEsl.js";import"./useControllableState-DmxEIS6S.js";import"./clamp-ekNJC_Xv.js";import"./bucket-0-DJtoSbW8.js";import"./bucket-17-0E7988s6.js";import"./bucket-10-B-hm18Zs.js";import"./Form-BIeJC-fj.js";import"./TearsheetNarrow-PtVY20iR.js";import"./TearsheetShell-5exhEWnR.js";import"./useResizeObserver-IK2T-B-k.js";import"./useIsomorphicEffect-rJHRE8hL.js";import"./getNodeTextContent-CjFansOq.js";import"./props-helper-D-MGgUNp.js";import"./index-BiE6xxiG.js";import"./LayerContext-Clj7bd5Z.js";import"./ComposedModal-DNlEtFPF.js";import"./toggleClass-DE6Cjo8X.js";import"./InlineLoading-DCLgadCg.js";import"./bucket-6-CYCyVP6N.js";import"./ButtonSet-TigcdyOE.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-bGeByaic.js";import"./index-CzJj9-T5.js";import"./Wrap-DnAerGrU.js";import"./usePortalTarget-aX8U2yX0.js";import"./index-CHJSsczR.js";import"./useFocus-D86medVK.js";import"./usePresence-B6qubMJ-.js";import"./useId-DL4LrsM7.js";import"./uuidv4-Fbcg8Vng.js";import"./usePreviousValue-Dy_YEFje.js";import"./ActionSet-DoeQiy-Y.js";import"./devtools-D1O-44XN.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,Je={title:"Patterns/Prebuilt patterns/Create flows/CreateTearsheetNarrow",component:q,tags:["autodocs"],argTypes:{description:{control:{type:"select",labels:{0:"With plain String",1:"With TruncatedText and 1 line",2:"With TruncatedText and 2 lines"},default:0},description:"A description of the flow, displayed in the header area of the tearsheet.\n Note: `TruncatedText` can be passed as a React node to apply custom text formatting, including ellipsis truncation and a definition tooltip when the content is too long.",options:[0,1,2],mapping:{0:"Select the number of partitions you want to create",1:e.createElement(B,{lines:1,tooltipDirection:"bottom",value:"This is a description for the tearsheet, providing an opportunity to describe the flow over a couple of lines in the header of the tearsheet."}),2:e.createElement(B,{lines:2,truncate:!0,tooltipDirection:"bottom",value:"This is a description for the tearsheet, providing an opportunity to describe the flow over a couple of lines in the header of the tearsheet."})}},children:{control:{disable:!0}},...K(),...H()},parameters:{styles:A,docs:{page:t(()=>e.createElement(Y,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/create-flows/usage/#narrow-tearsheet"}),"page")}}},c=`${V.prefix}--create-tearsheet-narrow--story`,x={title:"Create partition",className:"test-class-name",description:0,formTitle:"Core configuration",formDescription:"We recommend you fill out and evaluate these details at a minimum before deploying your topic.",primaryButtonText:"Create",secondaryButtonText:"Cancel",label:"Test label",selectorPrimaryFocus:"#tearsheet-narrow-story-text-input--1"},L=t(({slug:r,decorator:s,...N},w)=>{const[l,v]=a.useState(w.viewMode!=="docs"),[m,b]=a.useState(""),[T,f]=a.useState(1),[C,I]=a.useState(1),[h,R]=a.useState(1),[g,D]=a.useState(1),[y,M]=a.useState(1),[_]=a.useState(["Day(s)","Month(s)","Year(s"]),E=T<=0||C<=0||h<=0||g<=0||y<=0;return e.createElement("div",null,e.createElement("style",null,`.${x.className} { opacity: 0 }`,";"),e.createElement($,{onClick:t(()=>v(!l),"onClick")},l?"Close CreateTearsheetNarrow":"Open CreateTearsheetNarrow"),e.createElement(q,{open:l,onRequestClose:t(()=>v(!1),"onRequestClose"),onRequestSubmit:F("onRequestSubmit action called"),disableSubmit:!m||E,slug:r&&S(r),decorator:s&&S(s),...N},e.createElement(k,{labelText:"Topic name",id:"tearsheet-narrow-story-text-input--1",value:m,placeholder:"Enter topic name",onChange:t(i=>b(i.target.value),"onChange")}),e.createElement(o,{iconDescription:"Choose a number",id:"partition-count",min:1,max:100,value:T,label:"Partitions",invalidText:"Max partitions is 100, min is 1",onChange:t(i=>f(i.imaginaryTarget.value),"onChange")}),e.createElement(o,{iconDescription:"Choose a number",id:"replica-count",min:1,max:100,value:C,label:"Replicas",invalidText:"Max replicas is 10, min is 1",onChange:t(i=>I(i.imaginaryTarget.value),"onChange")}),e.createElement(o,{iconDescription:"Choose a number",id:"minimum-in-sync-count",min:1,max:100,value:h,label:"Minimum in-sync replicas",invalidText:"Max is 5, min is 1",onChange:t(i=>R(i.imaginaryTarget.value),"onChange")}),e.createElement("div",{className:`${c}__flex-container`},e.createElement(o,{iconDescription:"Choose a number",id:"retention-time",min:1,max:60,value:g,label:"Retention time",invalidText:"Max is 60, min is 1",onChange:t(i=>D(i.imaginaryTarget.value),"onChange")}),e.createElement(P,{id:"create-tearsheet-narrow-dropdown-options-c",initialSelectedItem:"Day(s)",items:_,label:"Options",titleText:"Options"})),e.createElement(o,{iconDescription:"Choose a number",id:"quantity",min:1,max:100,value:y,label:"Quantity",invalidText:"Max is 10, min is 1",onChange:t(i=>M(i.imaginaryTarget.value),"onChange")})))},"Template"),Q=t(({slug:r,decorator:s,...N},w)=>{const[l,v]=a.useState(w.viewMode!=="docs"),[m,b]=a.useState(""),[T,f]=a.useState(1),[C,I]=a.useState(1),[h,R]=a.useState(1),[g,D]=a.useState(1),[y,M]=a.useState(1),[_]=a.useState(["Day(s)","Month(s)","Year(s"]),[E,i]=a.useState(!1),G=T<=0||C<=0||h<=0||g<=0||y<=0;return e.createElement("div",null,e.createElement("style",null,`.${x.className} { opacity: 0 }`,";"),e.createElement($,{onClick:t(()=>v(!l),"onClick")},l?"Close CreateTearsheetNarrow":"Open CreateTearsheetNarrow"),e.createElement(q,{open:l,onRequestClose:t(()=>{v(!1),b(""),i(!1)},"onRequestClose"),onRequestSubmit:F("onRequestSubmit action called"),disableSubmit:!m||G,slug:r&&S(r),decorator:s&&S(s),...N},e.createElement(O,{className:`${c}__form ${c}__example-form-group`,legendText:"Topic information"},e.createElement(k,{labelText:"Topic name",id:"tearsheet-narrow-story-text-input--1",value:m,placeholder:"Enter topic name",onChange:t(n=>b(n.target.value),"onChange"),onBlur:t(()=>!m.length&&i(!0),"onBlur"),invalid:E,invalidText:"This is a required field"}),e.createElement(o,{iconDescription:"Choose a number",id:"partition-count",min:1,max:100,value:T,label:"Partitions",invalidText:"Max partitions is 100, min is 1",onChange:t(n=>f(n.imaginaryTarget.value),"onChange")}),e.createElement(o,{iconDescription:"Choose a number",id:"replica-count",min:1,max:100,value:C,label:"Replicas",invalidText:"Max replicas is 10, min is 1",onChange:t(n=>I(n.imaginaryTarget.value),"onChange")}),e.createElement(o,{iconDescription:"Choose a number",id:"minimum-in-sync-count",min:1,max:100,value:h,label:"Minimum in-sync replicas",invalidText:"Max is 5, min is 1",onChange:t(n=>R(n.imaginaryTarget.value),"onChange")})),e.createElement(O,{className:`${c}__form ${c}__example-form-group`,legendText:"Scheduling"},e.createElement("div",{className:`${c}__flex-container`},e.createElement(o,{iconDescription:"Choose a number",id:"retention-time",min:1,max:60,value:g,label:"Retention time",invalidText:"Max is 60, min is 1",onChange:t(n=>D(n.imaginaryTarget.value),"onChange")}),e.createElement(P,{id:"create-tearsheet-narrow-dropdown-options-c",initialSelectedItem:"Day(s)",items:_,label:"Options",titleText:"Options"})),e.createElement(o,{iconDescription:"Choose a number",id:"quantity",min:1,max:100,value:y,label:"Quantity",invalidText:"Max is 10, min is 1",onChange:t(n=>M(n.imaginaryTarget.value),"onChange")}))))},"WithValidationTemplate"),U="Default",u=L.bind({});u.storyName=U;u.args={...x};const j="With Form Validation",p=Q.bind({});p.storyName=j;p.args={...x};const z="With Multiple Forms",d=Q.bind({});d.storyName=z;d.args={...x};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`({
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
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`({
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
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`({
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
}`,...d.parameters?.docs?.source}}};const Xe=["createTearsheetNarrow","withValidation","withMultipleForms"];export{Xe as __namedExportsOrder,u as createTearsheetNarrow,Je as default,d as withMultipleForms,p as withValidation};
//# sourceMappingURL=CreateTearsheetNarrow.stories-DVy94KLq.js.map
