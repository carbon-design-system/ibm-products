var q=Object.defineProperty;var t=(l,a)=>q(l,"name",{value:a,configurable:!0});import{R as e,ai as L,p as x,r as i,a as N}from"./iframe-DVd9vcGU.js";import{C as w,a as d}from"./CreateFullPageStep-B_pL_NzL.js";import{s as j}from"./_storybook-styles-CAC8YPpa.js";import{A as z}from"./index-DjIFoxIr.js";import{D as R}from"./DefinitionTooltip-DXeHSrLD.js";import{C as M}from"./Checkbox-B_6sBQMw.js";import{R as b}from"./RadioButton-6TMgNTOZ.js";import{F}from"./FormGroup-DEXmcWIZ.js";import{G as u}from"./Grid-C_vCJeaw.js";import{C as n}from"./Column-DolgHgZI.js";import{I as $}from"./Notification-C-fL0jdb.js";import{N as T}from"./NumberInput-CiLoRS_t.js";import{R as A}from"./RadioButtonGroup-YXPRf8gY.js";import{T as f}from"./TextInput-CTJ6ODQn.js";import{T as G}from"./Toggle-Tn3mO4Wl.js";import{E as H}from"./EditFullPage-CBXBy2ct.js";import"./preload-helper-Cc2_yIPf.js";import"./index-B5TJhcrb.js";import"./Form-DIs6HtKs.js";import"./ComposedModal-Kuqffqwp.js";import"./index-DosVcssD.js";import"./index-Cq97S7tC.js";import"./bucket-20-CIHM76kD.js";import"./mergeRefs-BH0-8uDG.js";import"./index-Bx67NhBX.js";import"./LayerContext-MpoPJHNF.js";import"./clamp-ekNJC_Xv.js";import"./isTopmostVisibleModal--B4sDzjk.js";import"./InlineLoading-Drafgksa.js";import"./bucket-7-B00WowSE.js";import"./Text-DV9-Mjr0.js";import"./ButtonSet-YUvtI9UW.js";import"./wrapFocus-CVUKykfF.js";import"./BreadcrumbWithOverflow-_H86dtzh.js";import"./useResizeObserver-5neUPqpH.js";import"./useIsomorphicEffect-CAlWORU7.js";import"./BreadcrumbItem-DmxVZzxp.js";import"./index-DBdnCykv.js";import"./Link-BCdmVRNe.js";import"./bucket-14-CYz0f0la.js";import"./MenuItem-D6sgJ7Iz.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-ClE4WXq0.js";import"./environment-DRRHKtsv.js";import"./useControllableState-CUgugIkH.js";import"./bucket-2-Lc-sFvYQ.js";import"./index-BAqb6uzn.js";import"./useOutsideClick-B66mP4a-.js";import"./uuidv4-Fbcg8Vng.js";import"./bucket-1-CZRk4HMw.js";import"./TooltipTrigger-DQVRnDr1.js";import"./devtools-BesH-HZp.js";import"./lastIndexInArray-B2MHcuMv.js";import"./wait-Ymtilqka.js";import"./ProgressIndicator-CDbaaCn4.js";import"./bucket-10-Bgmy4xEZ.js";import"./bucket-21-Cb3_HMBa.js";import"./usePreviousValue-B_kjVhIW.js";import"./ActionSet-ChSdsXmR.js";import"./props-helper-Cgnw3G9k.js";import"./bucket-11-C-IW6PGm.js";import"./hasHelperText-CcJ_VphT.js";import"./useNormalizedInputProps-BuZiZ9rP.js";import"./FlexGrid-D3RA640v.js";import"./FormContext-xJEFPa8c.js";import"./bucket-0-DsQIryCB.js";import"./bucket-18-Bd98iWDb.js";import"./index-CwUMjKQR.js";import"./getAnnouncement-BwJDzAQp.js";const D=t(()=>e.createElement(L,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/edit-and-update/usage/#full-page-edit",blocks:[{description:`There are **2** components that make up a Create Full Page component, which can
be used in unison to create the desired look, or flow. Please note, to utilize
the Create Full Page component, you'll need to have a minimum of two steps. If
you are looking for a one step creation flow, consider Create Tearsheet, Create
Side Panel, or Create Modal.`},{story:m,description:"This is used when you have one section per step. This can be created by passing\nin the overall `<CreateFullPage />` component and the `<CreateFullPageStep />`\ncomponent with form items as children:",source:{code:`<CreateFullPage {...props}>
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
    </CreateFullPage>`}},{story:g,description:"This is used when you have several sections per step. This can be created by\npassing in the overall `<CreateFullPage />` component and the\n`<CreateFullPageStep />` component for the first `section`. All additional\n`sections` must be passed in as children, as shown below:",source:{code:`<CreateFullPageStep
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
};`}},{title:"Class names",description:"Additionally, to get the preferred styling when including your own children as\nsections, you can utilize the below included class names.\n\n| Class name                                           | Element     | Features                                                   |\n| ---------------------------------------------------- | ----------- | ---------------------------------------------------------- |\n| `#{$pkg-prefix}--create-full-page__step-title`       | title       | `productive-heading-04` & `margin-bottom` of `$spacing-05` |\n| `#{$pkg-prefix}--create-full-page__step-subtitle`    | subtitle    | `productive-heading-01` & `margin-bottom` of `$spacing-03` |\n| `#{$pkg-prefix}--create-full-page__step-description` | description | `body-long-01` & `margin-bottom` of `$spacing-06`          |\n| `#{$pkg-prefix}--create-full-page__step-fieldset`    | fieldset    | `margin-bottom` of `$spacing-05` to all children elements  |\n| `#{$pkg-prefix}--create-full-page__section-divider`  | divider     | Includes a `1px` divider line inside the `main` content    |\n"}]}),"DocsPage");D.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:k}=__STORYBOOK_MODULE_ACTIONS__,c="create-full-page-stories",p=`${x.prefix}--create-full-page`,dt={title:"Deprecated/Edit and update/EditFullPage",component:H,tags:["autodocs"],parameters:{styles:j,chromatic:{disableSnapshot:!0},layout:"fullscreen",docs:{page:D},controls:{sort:"requiredFirst"}},decorators:[l=>e.createElement("div",{className:`${c}__viewport`},e.createElement("style",null,`
      .${x.prefix}--custom-annotation { height: 100% }
      .${x.prefix}--custom-annotation > .${x.prefix}--annotation__content { height: calc(100% - 1.6rem); padding: 0 }
      `),e.createElement(z,{className:`${x.prefix}--custom-annotation`,type:"deprecation-notice",text:e.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},l()))]},O={nextButtonText:"Next",backButtonText:"Back",cancelButtonText:"Cancel changes",submitButtonText:"Save changes",modalTitle:"Are you sure you want to cancel?",modalDescription:"If you cancel, the information you have entered won't be saved.",modalDangerButtonText:"Cancel partition",modalSecondaryButtonText:"Return to form",onRequestSubmit:k("Submit handler called"),onClose:k("Close handler called")},Y=t(({...l})=>{const[a,S]=i.useState("Enter topic name"),[C,h]=i.useState(!1),[E,y]=i.useState(!1),[P,o]=i.useState(!1),[I]=i.useState(750),[v,r]=i.useState(!1),_=N();return e.createElement(e.Fragment,null,e.createElement("style",null,`.${_}--modal { opacity: 0; }`,";"),e.createElement(w,{...l},e.createElement(d,{className:`${c}__step-fieldset--no-label`,title:"Partition",subtitle:`One or more partitions make up a topic. A partition is an ordered list
        of messages.`,description:`Partitions are distributed across the brokers in order to increase the
        scalability of your topic. You can also use them to distribute
        messages across the members of a consumer group.`,onNext:t(()=>new Promise((s,B)=>{setTimeout(()=>{E&&(h(!0),B()),o(!1),s()},I)}),"onNext"),disableSubmit:!a},e.createElement(u,null,e.createElement(n,{xlg:5,lg:5,md:4,sm:4},e.createElement(f,{id:"test-1",invalidText:"A valid value is required",labelText:"Topic name",placeholder:"Enter topic name",value:a,onChange:t(s=>{S(s.target.value),o(!1)},"onChange"),onBlur:t(()=>{a.length===0&&o(!0)},"onBlur"),invalid:P}),C&&e.createElement($,{lowContrast:!0,kind:"error",title:"Error",subtitle:"Resolve errors to continue",onClose:t(()=>h(!1),"onClose")}),e.createElement("div",null,e.createElement("div",null,e.createElement(R,{className:`${c}__error--text`,size:"sm",definition:"Once toggled on, an inline error notification will appear upon clicking next. This is an example usage of how to prevent the next step if some kind of error occurred during the `onNext` handler."},"Simulate error")),e.createElement(G,{labelText:"Simulate error",hideLabel:!0,id:"simulated-error-toggle",size:"sm",onToggle:t(s=>y(s),"onToggle")})),e.createElement(M,{labelText:"Include additional step",id:"include-additional-step-checkbox",onChange:t(s=>r(s),"onChange"),checked:v})))),e.createElement(d,{title:"Dynamic step",description:"Example dynamic step",includeStep:v}),e.createElement(d,{title:"Empty",secondaryLabel:"Optional",description:"Empty step for demonstration purposes"}),e.createElement(d,{className:`${c}__step-fieldset--no-label`,title:"Core configuration",description:"Here is an example description for the 'Core configuration' step.",secondaryLabel:"Optional"},e.createElement(u,null,e.createElement(n,{xlg:5,lg:5,md:4,sm:4},e.createElement(u,null,e.createElement(n,{xlg:5,lg:5,md:4,sm:4},e.createElement(f,{id:"test-2",invalidText:"A valid value is required",labelText:"Topic name (optional)",placeholder:"Enter topic name",value:a})),e.createElement(n,{xlg:5,lg:5,md:4,sm:4},e.createElement(T,{id:"test-3",invalidText:"Number is not valid",label:"Label (optional)",max:100,min:0,step:10,value:0,iconDescription:"Number input"}),e.createElement(T,{id:"test-4",invalidText:"Number is not valid",label:"Label (optional)",max:100,min:0,step:10,value:0,iconDescription:"Number input"})),e.createElement(n,{xlg:5,lg:5,md:4,sm:4},e.createElement(f,{id:"test-5",invalidText:"A valid value is required",labelText:"Minimum in-sync replicas (optional)",placeholder:"Enter topic name",value:a})))))),e.createElement(d,{title:"Message retention",subtitle:"This is how many copies of a topic will be made for high availability",description:"The partitions of each topic can be replicated across a configurable number of brokers"},e.createElement(u,null,e.createElement(n,{xlg:5,lg:5,md:4,sm:4},e.createElement(A,{defaultSelected:"standard",legend:"Group Legend",name:"radio-button-group",valueSelected:"standard",orientation:"vertical"},e.createElement(b,{id:"radio-1",labelText:"Replication factor: 1",value:"standard"}),e.createElement(b,{id:"radio-2",labelText:"Replication factor: 2",value:"default-selected"}),e.createElement(b,{id:"radio-3",labelText:"Replication factor: 3",value:"disabled"})))))))},"Template"),U=t(({...l})=>{const[a,S]=i.useState("Enter topic name"),[C,h]=i.useState(!1),[E,y]=i.useState(!1),[P,o]=i.useState(!1),[I]=i.useState(750),v=N();return e.createElement(e.Fragment,null,e.createElement("style",null,`.${v}--modal { opacity: 0; }`,";"),e.createElement(w,{className:`${p}`,...l},e.createElement(d,{title:"Partition",subtitle:`One or more partitions make up a topic. A partition is an ordered list
        of messages.`,description:`Partitions are distributed across the brokers in order to increase the
        scalability of your topic. You can also use them to distribute
        messages across the members of a consumer group.`,onNext:t(()=>new Promise((r,_)=>{setTimeout(()=>{E&&(h(!0),_()),o(!1),r()},I)}),"onNext"),disableSubmit:!a},e.createElement(u,null,e.createElement(n,{xlg:5,lg:5,md:4,sm:4},e.createElement(F,{className:`${p}__step-fieldset ${c}__step-fieldset--label`,legendText:"Partition"},e.createElement(f,{id:"test-6",invalidText:"A valid value is required",labelText:"Topic name",placeholder:"Enter topic name",value:a,onChange:t(r=>{S(r.target.value),o(!1)},"onChange"),onBlur:t(()=>{a.length===0&&o(!0)},"onBlur"),invalid:P}),C&&e.createElement($,{lowContrast:!0,kind:"error",title:"Error",subtitle:"Resolve errors to continue",onClose:t(()=>h(!1),"onClose")}),e.createElement("div",null,e.createElement("div",null,e.createElement(R,{className:`${c}__error--text`,size:"sm",definition:"Once toggled on, an inline error notification will appear upon clicking next. This is an example usage of how to prevent the next step if some kind of error occurred during the `onNext` handler."},"Simulate error")),e.createElement(G,{labelText:"Simulate error",hideLabel:!0,id:"simulated-error-toggle",size:"sm",onToggle:t(r=>y(r),"onToggle")}))))),e.createElement("span",{className:`${p}__section-divider`}),e.createElement(u,null,e.createElement(n,{xlg:5,lg:5,md:4,sm:4},e.createElement("h5",{className:`${p}__step-title`},"Core configuration"),e.createElement("h6",{className:`${p}__step-subtitle`},"This is how long messages are retained before they are deleted."),e.createElement(F,{className:`${p}__step-fieldset ${c}__step-fieldset--label`,legendText:"Core configuration"},e.createElement("p",null,"If your messages are not read by a consumer within this time, they will be missed."),e.createElement(f,{id:"test-7",invalidText:"A valid value is required",labelText:"Topic name (optional)",placeholder:"Enter topic name",value:a}),e.createElement(T,{id:"test-8",invalidText:"Number is not valid",label:"Label (optional)",max:100,min:0,step:10,value:0}),e.createElement(T,{id:"test-9",invalidText:"Number is not valid",label:"Label (optional)",max:100,min:0,step:10,value:0}),e.createElement(f,{id:"test-10",invalidText:"A valid value is required",labelText:"Minimum in-sync replicas (optional)",placeholder:"Enter topic name",value:a}))))),e.createElement(d,{title:"Message retention",subtitle:"This is how many copies of a topic will be made for high availability",description:"The partitions of each topic can be replicated across a configurable number of brokers."},e.createElement(u,null,e.createElement(n,{xlg:5,lg:5,md:4,sm:4},e.createElement(A,{defaultSelected:"standard",legend:"Group Legend",name:"radio-button-group",valueSelected:"standard",orientation:"vertical"},e.createElement(b,{id:"radio-4",labelText:"Replication factor: 1",value:"standard"}),e.createElement(b,{id:"radio-5",labelText:"Replication factor: 2",value:"default-selected"}),e.createElement(b,{id:"radio-6",labelText:"Replication factor: 3",value:"disabled"})))))))},"TemplateWithSections"),m=Y.bind({});m.args={...O};const g=U.bind({});g.args={...O};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`({
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
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`({
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
}`,...g.parameters?.docs?.source}}};const ut=["editFullPage","editFullPageWithSections"];export{ut as __namedExportsOrder,dt as default,m as editFullPage,g as editFullPageWithSections};
//# sourceMappingURL=EditFullPage.stories-C5dZJojb.js.map
