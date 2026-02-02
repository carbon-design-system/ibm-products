import{e,S as B,p as h,r as a,u as k}from"./iframe-BbTYfv9-.js";import{C as N,a as r}from"./CreateFullPageStep-B_JzS_6a.js";import{s as q}from"./_storybook-styles-CAC8YPpa.js";import{A as L}from"./index-KnhCxvuW.js";import{C as j}from"./Checkbox-C_vI3TFv.js";import{F as _}from"./FormGroup-B3b7XRZY.js";import{G as s}from"./Grid-CTufMKYT.js";import{C as i}from"./Column-BYF5dbgU.js";import{I as w}from"./Notification-CQS7w2Qd.js";import{N as v}from"./NumberInput-Bq5ylnNA.js";import{R as m}from"./RadioButton-BEzYjobE.js";import{R}from"./RadioButtonGroup-C9S45n6Q.js";import{T as g}from"./TextInput-Du3rpjcU.js";import{T as $}from"./Toggle-g348Q8D9.js";import{D as A}from"./DefinitionTooltip-BGxvqF2J.js";import{E as z}from"./EditFullPage-BEEYH3JL.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DADqHIn3.js";import"./ComposedModal-DsGf30ws.js";import"./index-CiA8v0SK.js";import"./LayerContext-DTkiAC__.js";import"./clamp--00YEiB8.js";import"./ButtonSet-CRhG9zQ2.js";import"./InlineLoading-J4T5f71r.js";import"./bucket-6-D484BBya.js";import"./mergeRefs-BZpmU3mx.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./wrapFocus-CeU4PdEv.js";import"./Text-CJYku-mr.js";import"./index-DxihRps1.js";import"./bucket-19-DKyp3qQO.js";import"./utils-C-ow7gcy.js";import"./Form-DKRHIJqZ.js";import"./BreadcrumbWithOverflow-DEJbVAGw.js";import"./useResizeObserver-DG4fyqZH.js";import"./useIsomorphicEffect-omIe2Oju.js";import"./BreadcrumbItem-CMz7i1Ao.js";import"./Link-CLBD2w3u.js";import"./bucket-13-CbrtgyZp.js";import"./MenuItem-C_s8hbQW.js";import"./useControllableState-D_LENDKK.js";import"./useAttachedMenu-wuMnyGSa.js";import"./defaultItemToString-zSItMTD_.js";import"./bucket-2-BqdtHwJF.js";import"./index-DxyAS3QW.js";import"./useOutsideClick-te459-kT.js";import"./uuidv4-BN2rGLQG.js";import"./TooltipTrigger-DjUrMc3_.js";import"./bucket-1-C8b05e8n.js";import"./devtools-KS_k4bKc.js";import"./lastIndexInArray-C7vHYyIO.js";import"./wait-CTNFjQS8.js";import"./ProgressIndicator-BhoCOIWi.js";import"./bucket-10-Cya3ufu0.js";import"./usePreviousValue-z0wuNVJu.js";import"./ActionSet-BkLkGxhx.js";import"./props-helper-fbCn-Z71.js";import"./useNormalizedInputProps-DZ8P3UsW.js";import"./FormContext-DY8rSwJV.js";import"./bucket-17-CwHsRtB8.js";import"./bucket-0-DpCnEeoO.js";const G=()=>e.createElement(B,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/edit-and-update/usage/#full-page-edit",blocks:[{description:`There are **2** components that make up a Create Full Page component, which can
be used in unison to create the desired look, or flow. Please note, to utilize
the Create Full Page component, you'll need to have a minimum of two steps. If
you are looking for a one step creation flow, consider Create Tearsheet, Create
Side Panel, or Create Modal.`},{story:c,description:"This is used when you have one section per step. This can be created by passing\nin the overall `<CreateFullPage />` component and the `<CreateFullPageStep />`\ncomponent with form items as children:",source:{code:`<CreateFullPage {...props}>
      <CreateFullPageStep
          title="Required title"
          subtitle="Optional subtitle"
          description="Optional description"
          onNext={() => {'Optional function'}}
          >
          <Row>
            <Column xlg={5} lg={5} md={4} sm={4}>
              <TextInput
                id="test-1"
                invalidText="A valid value is required"
                labelText="Topic name"
                placeholder="Enter topic name"
              />
            </Column>
          </Row>
      </CreateFullPageStep>
    </CreateFullPage>`}},{story:p,description:"This is used when you have several sections per step. This can be created by\npassing in the overall `<CreateFullPage />` component and the\n`<CreateFullPageStep />` component for the first `section`. All additional\n`sections` must be passed in as children, as shown below:",source:{code:`<CreateFullPageStep
    title="Required title"
    subtitle="Optional subtitle"
    description="Optional description"
    onNext={() => {'Optional function'}}
    >
    <Row>
      <Column xlg={5} lg={5} md={4} sm={4}>
        <fieldset className={\`#{$pkg-prefix}--create-full-page__step-fieldset\`}>
          <TextInput
            id="test-1"
            invalidText="A valid value is required"
            labelText="Topic name"
            placeholder="Enter topic name"
          />
        </fieldset>
      </Column>
    </Row>
    <span className={\`#{$pkg-prefix}--create-full-page__section-divider\`} />
    <h5 className={\`#{$pkg-prefix}--create-full-page__step-title\`}>Required title</h5>
    <h6 className={\`#{$pkg-prefix}--create-full-page__step-subtitle\`}>
      Optional subtitle
    </h6>
    <p className={\`#{$pkg-prefix}--create-full-page__step-description\`}>
      Optional description
    </p>
    <Row>
      <Column xlg={5} lg={5} md={4} sm={4}>
        <fieldset className={\`#{$pkg-prefix}--create-full-page__step-fieldset\`}>
          <TextInput
            id="test-2"
            invalidText="A valid value is required"
            labelText="Topic name"
            placeholder="Enter topic name"
          />
        </fieldset>
      </Column>
    </Row>
</CreateFullPageStep>`}},{title:"Using custom components",description:"It is possible to use custom components that return `CreateFullPageStep`s in\norder to help reduce the amount of logic in the component that contains the main\n`CreateFullPage`. _It is required that each child of the `CreateFullPage` either\nbe a custom step or a `CreateFullPageStep`_. An example of this could look like\nthe following:",source:{code:`const CreateStepCustom = ({ subtitle, ...rest }) => {
  return (
    <CreateFullPageStep
      {...rest}
      subtitle={subtitle}
      title="Step 1"
      onNext={() => console.log('optional validation check')}
      onMount={() => console.log('optional onMount fn')}
      disableSubmit={false}
    >
      step content here
    </CreateFullPageStep>
  );
};

const CreateComponent = () => {
  return (
    <CreateFullPage {...createFullPageProps}>
      <CreateStepCustom subtitle="Custom step subtitle" />
      <CreateFullPageStep
        title="Topic name"
        fieldsetLegendText="Topic information"
        disableSubmit={!value}
        subtitle="This is the unique name used to recognize your topic"
        description="It will also be used by your producers and consumers as part of the
        connection information, so make it something easy to recognize."
      >
        Content for second step
      </CreateFullPageStep>
    </CreateFullPage>
  );
};`}},{title:"Using dynamic steps",description:"The use of dynamic steps can be utilized in a scenario when the user makes a\ncertain selection on one step that effects which steps will follow it, this is\ncontrolled via the `includeStep` prop. See abbreviated example below:",source:{code:`import { useState } from 'react';

const CreateFlow = () => {
  const [shouldIncludeAdditionalStep, setShouldIncludeAdditionalStep] =
    useState(false);
  return (
    <CreateFullPage {...createFullPageProps}>
      <CreateFullPageStep {...step1Props}>
        Step 1 content
        <Checkbox
          labelText={\`Include additional step\`}
          id="include-additional-step-checkbox"
          onChange={(value) => setShouldIncludeAdditionalStep(value)}
          checked={shouldIncludeAdditionalStep}
        />
      </CreateFullPageStep>
      <CreateFullPageStep
        {...step2Props}
        includeStep={shouldIncludeAdditionalStep}
      >
        Dynamic step content
      </CreateFullPageStep>
      <CreateFullPageStep {...step3Props}>
        Final step content
      </CreateFullPageStep>
    </CreateFullPage>
  );
};`}},{title:"Class names",description:"Additionally, to get the preferred styling when including your own children as\nsections, you can utilize the below included class names.\n\n| Class name                                           | Element     | Features                                                   |\n| ---------------------------------------------------- | ----------- | ---------------------------------------------------------- |\n| `#{$pkg-prefix}--create-full-page__step-title`       | title       | `productive-heading-04` & `margin-bottom` of `$spacing-05` |\n| `#{$pkg-prefix}--create-full-page__step-subtitle`    | subtitle    | `productive-heading-01` & `margin-bottom` of `$spacing-03` |\n| `#{$pkg-prefix}--create-full-page__step-description` | description | `body-long-01` & `margin-bottom` of `$spacing-06`          |\n| `#{$pkg-prefix}--create-full-page__step-fieldset`    | fieldset    | `margin-bottom` of `$spacing-05` to all children elements  |\n| `#{$pkg-prefix}--create-full-page__section-divider`  | divider     | Includes a `1px` divider line inside the `main` content    |\n"}]});G.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:F}=__STORYBOOK_MODULE_ACTIONS__,d="create-full-page-stories",u=`${h.prefix}--create-full-page`,Xe={title:"Deprecated/Edit and update/EditFullPage",component:z,tags:["autodocs"],parameters:{styles:q,layout:"fullscreen",docs:{page:G},controls:{sort:"requiredFirst"}},decorators:[b=>e.createElement("div",{className:`${d}__viewport`},e.createElement("style",null,`
      .${h.prefix}--custom-annotation { height: 100% }
      .${h.prefix}--custom-annotation > .${h.prefix}--annotation__content { height: calc(100% - 1.6rem); padding: 0 }
      `),e.createElement(L,{className:`${h.prefix}--custom-annotation`,type:"deprecation-notice",text:e.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},b()))]},D={nextButtonText:"Next",backButtonText:"Back",cancelButtonText:"Cancel changes",submitButtonText:"Save changes",modalTitle:"Are you sure you want to cancel?",modalDescription:"If you cancel, the information you have entered won't be saved.",modalDangerButtonText:"Cancel partition",modalSecondaryButtonText:"Return to form",onRequestSubmit:F("Submit handler called"),onClose:F("Close handler called")},M=({...b})=>{const[t,T]=a.useState("Enter topic name"),[S,f]=a.useState(!1),[C,E]=a.useState(!1),[y,n]=a.useState(!1),[P]=a.useState(750),[x,l]=a.useState(!1),I=k();return e.createElement(e.Fragment,null,e.createElement("style",null,`.${I}--modal { opacity: 0; }`,";"),e.createElement(N,{...b},e.createElement(r,{className:`${d}__step-fieldset--no-label`,title:"Partition",subtitle:`One or more partitions make up a topic. A partition is an ordered list
        of messages.`,description:`Partitions are distributed across the brokers in order to increase the
        scalability of your topic. You can also use them to distribute
        messages across the members of a consumer group.`,onNext:()=>new Promise((o,O)=>{setTimeout(()=>{C&&(f(!0),O()),n(!1),o()},P)}),disableSubmit:!t},e.createElement(s,null,e.createElement(i,{xlg:5,lg:5,md:4,sm:4},e.createElement(g,{id:"test-1",invalidText:"A valid value is required",labelText:"Topic name",placeholder:"Enter topic name",value:t,onChange:o=>{T(o.target.value),n(!1)},onBlur:()=>{t.length===0&&n(!0)},invalid:y}),S&&e.createElement(w,{lowContrast:!0,kind:"error",title:"Error",subtitle:"Resolve errors to continue",onClose:()=>f(!1)}),e.createElement("div",null,e.createElement("div",null,e.createElement(A,{className:`${d}__error--text`,size:"sm",definition:"Once toggled on, an inline error notification will appear upon clicking next. This is an example usage of how to prevent the next step if some kind of error occurred during the `onNext` handler."},"Simulate error")),e.createElement($,{labelText:"Simulate error",hideLabel:!0,id:"simulated-error-toggle",size:"sm",onToggle:o=>E(o)})),e.createElement(j,{labelText:"Include additional step",id:"include-additional-step-checkbox",onChange:o=>l(o),checked:x})))),e.createElement(r,{title:"Dynamic step",description:"Example dynamic step",includeStep:x}),e.createElement(r,{title:"Empty",secondaryLabel:"Optional",description:"Empty step for demonstration purposes"}),e.createElement(r,{className:`${d}__step-fieldset--no-label`,title:"Core configuration",description:"Here is an example description for the 'Core configuration' step.",secondaryLabel:"Optional"},e.createElement(s,null,e.createElement(i,{xlg:5,lg:5,md:4,sm:4},e.createElement(s,null,e.createElement(i,{xlg:5,lg:5,md:4,sm:4},e.createElement(g,{id:"test-2",invalidText:"A valid value is required",labelText:"Topic name (optional)",placeholder:"Enter topic name",value:t})),e.createElement(i,{xlg:5,lg:5,md:4,sm:4},e.createElement(v,{id:"test-3",invalidText:"Number is not valid",label:"Label (optional)",max:100,min:0,step:10,value:0,iconDescription:"Number input"}),e.createElement(v,{id:"test-4",invalidText:"Number is not valid",label:"Label (optional)",max:100,min:0,step:10,value:0,iconDescription:"Number input"})),e.createElement(i,{xlg:5,lg:5,md:4,sm:4},e.createElement(g,{id:"test-5",invalidText:"A valid value is required",labelText:"Minimum in-sync replicas (optional)",placeholder:"Enter topic name",value:t})))))),e.createElement(r,{title:"Message retention",subtitle:"This is how many copies of a topic will be made for high availability",description:"The partitions of each topic can be replicated across a configurable number of brokers"},e.createElement(s,null,e.createElement(i,{xlg:5,lg:5,md:4,sm:4},e.createElement(R,{defaultSelected:"standard",legend:"Group Legend",name:"radio-button-group",valueSelected:"standard",orientation:"vertical"},e.createElement(m,{id:"radio-1",labelText:"Replication factor: 1",value:"standard"}),e.createElement(m,{id:"radio-2",labelText:"Replication factor: 2",value:"default-selected"}),e.createElement(m,{id:"radio-3",labelText:"Replication factor: 3",value:"disabled"})))))))},H=({...b})=>{const[t,T]=a.useState("Enter topic name"),[S,f]=a.useState(!1),[C,E]=a.useState(!1),[y,n]=a.useState(!1),[P]=a.useState(750),x=k();return e.createElement(e.Fragment,null,e.createElement("style",null,`.${x}--modal { opacity: 0; }`,";"),e.createElement(N,{className:`${u}`,...b},e.createElement(r,{title:"Partition",subtitle:`One or more partitions make up a topic. A partition is an ordered list
        of messages.`,description:`Partitions are distributed across the brokers in order to increase the
        scalability of your topic. You can also use them to distribute
        messages across the members of a consumer group.`,onNext:()=>new Promise((l,I)=>{setTimeout(()=>{C&&(f(!0),I()),n(!1),l()},P)}),disableSubmit:!t},e.createElement(s,null,e.createElement(i,{xlg:5,lg:5,md:4,sm:4},e.createElement(_,{className:`${u}__step-fieldset ${d}__step-fieldset--label`,legendText:"Partition"},e.createElement(g,{id:"test-6",invalidText:"A valid value is required",labelText:"Topic name",placeholder:"Enter topic name",value:t,onChange:l=>{T(l.target.value),n(!1)},onBlur:()=>{t.length===0&&n(!0)},invalid:y}),S&&e.createElement(w,{lowContrast:!0,kind:"error",title:"Error",subtitle:"Resolve errors to continue",onClose:()=>f(!1)}),e.createElement("div",null,e.createElement("div",null,e.createElement(A,{className:`${d}__error--text`,size:"sm",definition:"Once toggled on, an inline error notification will appear upon clicking next. This is an example usage of how to prevent the next step if some kind of error occurred during the `onNext` handler."},"Simulate error")),e.createElement($,{labelText:"Simulate error",hideLabel:!0,id:"simulated-error-toggle",size:"sm",onToggle:l=>E(l)}))))),e.createElement("span",{className:`${u}__section-divider`}),e.createElement(s,null,e.createElement(i,{xlg:5,lg:5,md:4,sm:4},e.createElement("h5",{className:`${u}__step-title`},"Core configuration"),e.createElement("h6",{className:`${u}__step-subtitle`},"This is how long messages are retained before they are deleted."),e.createElement(_,{className:`${u}__step-fieldset ${d}__step-fieldset--label`,legendText:"Core configuration"},e.createElement("p",null,"If your messages are not read by a consumer within this time, they will be missed."),e.createElement(g,{id:"test-7",invalidText:"A valid value is required",labelText:"Topic name (optional)",placeholder:"Enter topic name",value:t}),e.createElement(v,{id:"test-8",invalidText:"Number is not valid",label:"Label (optional)",max:100,min:0,step:10,value:0}),e.createElement(v,{id:"test-9",invalidText:"Number is not valid",label:"Label (optional)",max:100,min:0,step:10,value:0}),e.createElement(g,{id:"test-10",invalidText:"A valid value is required",labelText:"Minimum in-sync replicas (optional)",placeholder:"Enter topic name",value:t}))))),e.createElement(r,{title:"Message retention",subtitle:"This is how many copies of a topic will be made for high availability",description:"The partitions of each topic can be replicated across a configurable number of brokers."},e.createElement(s,null,e.createElement(i,{xlg:5,lg:5,md:4,sm:4},e.createElement(R,{defaultSelected:"standard",legend:"Group Legend",name:"radio-button-group",valueSelected:"standard",orientation:"vertical"},e.createElement(m,{id:"radio-4",labelText:"Replication factor: 1",value:"standard"}),e.createElement(m,{id:"radio-5",labelText:"Replication factor: 2",value:"default-selected"}),e.createElement(m,{id:"radio-6",labelText:"Replication factor: 3",value:"disabled"})))))))},c=M.bind({});c.args={...D};const p=H.bind({});p.args={...D};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  const [textInput, setTextInput] = useState('Enter topic name');
  const [hasSubmitError, setHasSubmitError] = useState(false);
  const [shouldReject, setShouldReject] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [simulatedDelay] = useState(750);
  const [shouldIncludeAdditionalStep, setShouldIncludeAdditionalStep] = useState(false);
  const carbonPrefix = usePrefix();
  return <>
      <style>{\`.\${carbonPrefix}--modal { opacity: 0; }\`};</style>
      <CreateFullPage {...args}>
        <CreateFullPageStep className={\`\${storyClass}__step-fieldset--no-label\`} title="Partition" subtitle="One or more partitions make up a topic. A partition is an ordered list
        of messages." description="Partitions are distributed across the brokers in order to increase the
        scalability of your topic. You can also use them to distribute
        messages across the members of a consumer group." onNext={() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            // Example usage of how to prevent the next step if some kind
            // of error occurred during the \`onNext\` handler.
            if (shouldReject) {
              setHasSubmitError(true);
              reject();
            }
            setIsInvalid(false);
            resolve();
          }, simulatedDelay);
        });
      }} disableSubmit={!textInput}>
          <Grid>
            <Column xlg={5} lg={5} md={4} sm={4}>
              <TextInput id="test-1" invalidText="A valid value is required" labelText="Topic name" placeholder="Enter topic name" value={textInput} onChange={e => {
              setTextInput(e.target.value);
              setIsInvalid(false);
            }} onBlur={() => {
              textInput.length === 0 && setIsInvalid(true);
            }} invalid={isInvalid} />
              {hasSubmitError && <InlineNotification lowContrast kind="error" title="Error" subtitle="Resolve errors to continue" onClose={() => setHasSubmitError(false)} />}
              <div>
                <div>
                  <DefinitionTooltip className={\`\${storyClass}__error--text\`} size="sm" definition={'Once toggled on, an inline error notification will appear upon clicking next. This is an example usage of how to prevent the next step if some kind of error occurred during the \`onNext\` handler.'}>
                    Simulate error
                  </DefinitionTooltip>
                </div>
                <Toggle labelText="Simulate error" hideLabel id="simulated-error-toggle" size="sm" onToggle={event => setShouldReject(event)} />
              </div>
              <Checkbox labelText={\`Include additional step\`} id="include-additional-step-checkbox" onChange={value => setShouldIncludeAdditionalStep(value)} checked={shouldIncludeAdditionalStep} />
            </Column>
          </Grid>
        </CreateFullPageStep>
        <CreateFullPageStep title="Dynamic step" description="Example dynamic step" includeStep={shouldIncludeAdditionalStep} />
        <CreateFullPageStep title="Empty" secondaryLabel="Optional" description="Empty step for demonstration purposes" />
        <CreateFullPageStep className={\`\${storyClass}__step-fieldset--no-label\`} title="Core configuration" description="Here is an example description for the 'Core configuration' step." secondaryLabel="Optional">
          <Grid>
            <Column xlg={5} lg={5} md={4} sm={4}>
              <Grid>
                <Column xlg={5} lg={5} md={4} sm={4}>
                  <TextInput id="test-2" invalidText="A valid value is required" labelText="Topic name (optional)" placeholder="Enter topic name" value={textInput} />
                </Column>
                <Column xlg={5} lg={5} md={4} sm={4}>
                  <NumberInput id="test-3" invalidText="Number is not valid" label="Label (optional)" max={100} min={0} step={10} value={0} iconDescription="Number input" />
                  <NumberInput id="test-4" invalidText="Number is not valid" label="Label (optional)" max={100} min={0} step={10} value={0} iconDescription="Number input" />
                </Column>
                <Column xlg={5} lg={5} md={4} sm={4}>
                  <TextInput id="test-5" invalidText="A valid value is required" labelText="Minimum in-sync replicas (optional)" placeholder="Enter topic name" value={textInput} />
                </Column>
              </Grid>
            </Column>
          </Grid>
        </CreateFullPageStep>
        <CreateFullPageStep title="Message retention" subtitle="This is how many copies of a topic will be made for high availability" description="The partitions of each topic can be replicated across a configurable number of brokers">
          <Grid>
            <Column xlg={5} lg={5} md={4} sm={4}>
              <RadioButtonGroup defaultSelected="standard" legend="Group Legend" name="radio-button-group" valueSelected="standard" orientation="vertical">
                <RadioButton id="radio-1" labelText="Replication factor: 1" value="standard" />
                <RadioButton id="radio-2" labelText="Replication factor: 2" value="default-selected" />
                <RadioButton id="radio-3" labelText="Replication factor: 3" value="disabled" />
              </RadioButtonGroup>
            </Column>
          </Grid>
        </CreateFullPageStep>
      </CreateFullPage>
    </>;
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  const [textInput, setTextInput] = useState('Enter topic name');
  const [hasSubmitError, setHasSubmitError] = useState(false);
  const [shouldReject, setShouldReject] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [simulatedDelay] = useState(750);
  const carbonPrefix = usePrefix();
  return <>
      <style>{\`.\${carbonPrefix}--modal { opacity: 0; }\`};</style>
      <CreateFullPage className={\`\${blockClass}\`} {...args}>
        <CreateFullPageStep title="Partition" subtitle="One or more partitions make up a topic. A partition is an ordered list
        of messages." description="Partitions are distributed across the brokers in order to increase the
        scalability of your topic. You can also use them to distribute
        messages across the members of a consumer group." onNext={() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            // Example usage of how to prevent the next step if some kind
            // of error occurred during the \`onNext\` handler.
            if (shouldReject) {
              setHasSubmitError(true);
              reject();
            }
            setIsInvalid(false);
            resolve();
          }, simulatedDelay);
        });
      }} disableSubmit={!textInput}>
          <Grid>
            <Column xlg={5} lg={5} md={4} sm={4}>
              <FormGroup className={\`\${blockClass}__step-fieldset \${storyClass}__step-fieldset--label\`} legendText="Partition">
                <TextInput id="test-6" invalidText="A valid value is required" labelText="Topic name" placeholder="Enter topic name" value={textInput} onChange={e => {
                setTextInput(e.target.value);
                setIsInvalid(false);
              }} onBlur={() => {
                textInput.length === 0 && setIsInvalid(true);
              }} invalid={isInvalid} />
                {hasSubmitError && <InlineNotification lowContrast kind="error" title="Error" subtitle="Resolve errors to continue" onClose={() => setHasSubmitError(false)} />}
                <div>
                  <div>
                    <DefinitionTooltip className={\`\${storyClass}__error--text\`} size="sm" definition={'Once toggled on, an inline error notification will appear upon clicking next. This is an example usage of how to prevent the next step if some kind of error occurred during the \`onNext\` handler.'}>
                      Simulate error
                    </DefinitionTooltip>
                  </div>
                  <Toggle labelText="Simulate error" hideLabel id="simulated-error-toggle" size="sm" onToggle={event => setShouldReject(event)} />
                </div>
              </FormGroup>
            </Column>
          </Grid>
          <span className={\`\${blockClass}__section-divider\`} />
          <Grid>
            <Column xlg={5} lg={5} md={4} sm={4}>
              <h5 className={\`\${blockClass}__step-title\`}>
                Core configuration
              </h5>
              <h6 className={\`\${blockClass}__step-subtitle\`}>
                This is how long messages are retained before they are deleted.
              </h6>
              <FormGroup className={\`\${blockClass}__step-fieldset \${storyClass}__step-fieldset--label\`} legendText="Core configuration">
                <p>
                  If your messages are not read by a consumer within this time,
                  they will be missed.
                </p>
                <TextInput id="test-7" invalidText="A valid value is required" labelText="Topic name (optional)" placeholder="Enter topic name" value={textInput} />
                <NumberInput id="test-8" invalidText="Number is not valid" label="Label (optional)" max={100} min={0} step={10} value={0} />
                <NumberInput id="test-9" invalidText="Number is not valid" label="Label (optional)" max={100} min={0} step={10} value={0} />
                <TextInput id="test-10" invalidText="A valid value is required" labelText="Minimum in-sync replicas (optional)" placeholder="Enter topic name" value={textInput} />
              </FormGroup>
            </Column>
          </Grid>
        </CreateFullPageStep>
        <CreateFullPageStep title="Message retention" subtitle="This is how many copies of a topic will be made for high availability" description="The partitions of each topic can be replicated across a configurable number of brokers.">
          <Grid>
            <Column xlg={5} lg={5} md={4} sm={4}>
              <RadioButtonGroup defaultSelected="standard" legend="Group Legend" name="radio-button-group" valueSelected="standard" orientation="vertical">
                <RadioButton id="radio-4" labelText="Replication factor: 1" value="standard" />
                <RadioButton id="radio-5" labelText="Replication factor: 2" value="default-selected" />
                <RadioButton id="radio-6" labelText="Replication factor: 3" value="disabled" />
              </RadioButtonGroup>
            </Column>
          </Grid>
        </CreateFullPageStep>
      </CreateFullPage>
    </>;
}`,...p.parameters?.docs?.source}}};const Ze=["editFullPage","editFullPageWithSections"];export{Ze as __namedExportsOrder,Xe as default,c as editFullPage,p as editFullPageWithSections};
//# sourceMappingURL=EditFullPage.stories-CIq-aZsG.js.map
