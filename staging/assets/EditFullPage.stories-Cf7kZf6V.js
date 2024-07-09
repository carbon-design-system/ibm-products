import{p as j,j as e,c as q}from"./settings-BiUEFdm2.js";import{R as U,r as i}from"./index-BwDkhjyp.js";import{a as F}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{s as W,C as D,a as r}from"./_storybook-styles-TV_svqEt.js";import{c as J}from"./deprecate-D9ms-jbM.js";import{C as K}from"./Checkbox-78nhbV8e.js";import{F as N}from"./FormGroup-CVk9XJ_R.js";import{G as d}from"./Grid-sFQW4EYz.js";import{C as a}from"./Column-joQvaXDX.js";import{I as B}from"./Notification-DMQAeU5X.js";import{N as T}from"./NumberInput-CdfmSC9K.js";import{R as g}from"./RadioButton-RZ6IdjNG.js";import{R as O}from"./RadioButtonGroup-Dyjy7gd2.js";import{T as L}from"./Toggle-DdCAfBCT.js";import{D as z}from"./DefinitionTooltip-CGz-mKqM.js";import{T as h}from"./TextInput-CjYtA_nO.js";import{S as Q}from"./StoryDocsPage-BuwgUq5r.js";import{P as k}from"./index-Dk74W0Oi.js";import{g as V}from"./devtools-BPcQvzXy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./events-Bq7WR1mU.js";import"./index-BONylQH5.js";import"./v4-CQkTLCs1.js";import"./ComposedModal-Ckm8JaZ3.js";import"./index-DcAOwtUU.js";import"./ButtonSet-CqsYbwZH.js";import"./InlineLoading-DEQVZSgg.js";import"./bucket-5-BuK6y5Rd.js";import"./mergeRefs-CTUecegF.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-CuszVIVc.js";import"./index-gKY8typL.js";import"./Form-Cl1Tfi_h.js";import"./lastIndexInArray-CI1JlX0P.js";import"./wait-CTNFjQS8.js";import"./ProgressIndicator-Cj-AlNDT.js";import"./Text-_TFgs5hl.js";import"./bucket-17-CArjO86K.js";import"./bucket-8-61DsWji_.js";import"./props-helper-1oU9hECe.js";import"./SimpleHeader-C62aNXs1.js";import"./BreadcrumbWithOverflow-BOFtIDUR.js";import"./useResizeObserver-CYrpFlRY.js";import"./BreadcrumbItem-CKZpd8ZN.js";import"./Link-CxgVlihf.js";import"./bucket-11-S2aFzyL7.js";import"./index-B7Id7uWF.js";import"./useAttachedMenu-BGzc4N1_.js";import"./createClassWrapper-EbB2Yi8H.js";import"./uuidv4-BQrI85uz.js";import"./TooltipTrigger-BUBh9TEp.js";import"./bucket-0-D7rUCVax.js";import"./usePreviousValue-DDnp_zt4.js";import"./ActionSet-DPSyJhT2.js";import"./useNormalizedInputProps-DRpk_7sW.js";import"./FormContext-C7kRVu4t.js";import"./bucket-14-u3bYiptr.js";import"./useControllableState-DwpxGhsf.js";import"./bucket-16-C-1D9aPX.js";import"./useAnnouncer-MW4fVOqQ.js";import"./index-CDYzkStP.js";import"./iframe-j3s5A4v9.js";import"../sb-preview/runtime.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-BjQFKvNH.js";import"./isSymbol-BZYRlrjc.js";import"./index-DrFu-skq.js";import"./story-helper-YTYnELA9.js";import"./tslib.es6-B4_xh3D5.js";const X=`${j.prefix}--edit-full-page`,_="EditFullPage";let x=U.forwardRef(({className:n,children:t,...f},b)=>e.jsx("div",{...f,className:J(X,n,{}),ref:b,role:"main",...V(_),children:t}));x=j.checkComponentEnabled(x,_);x.displayName=_;x.propTypes={children:k.node.isRequired,className:k.string};x.__docgenInfo={description:`Use when settings on a page need to always be shown in edit mode, or when the context of the page is needed to make several changes.
See usage guidance for further details.`,methods:[],displayName:"EditFullPage",props:{className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}},children:{required:!0,tsType:{name:"ReactNode"},description:"Provide the contents of the EditFullPage.",type:{name:"node"}}}};const M=()=>e.jsx(Q,{altGuidelinesHref:"https://pages.github.ibm.com/cdai-design/pal/patterns/edit/usage#full-page-edit",blocks:[{description:`There are **2** components that make up a Create Full Page component, which can
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
    </CreateFullPage>`}},{story:m,description:"This is used when you have several sections per step. This can be created by\npassing in the overall `<CreateFullPage />` component and the\n`<CreateFullPageStep />` component for the first `section`. All additional\n`sections` must be passed in as children, as shown below:",source:{code:`<CreateFullPageStep
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
};`}},{title:"Class names",description:"Additionally, to get the preferred styling when including your own children as\nsections, you can utilize the below included class names.\n\n| Class name                                           | Element     | Features                                                   |\n| ---------------------------------------------------- | ----------- | ---------------------------------------------------------- |\n| `#{$pkg-prefix}--create-full-page__step-title`       | title       | `productive-heading-04` & `margin-bottom` of `$spacing-05` |\n| `#{$pkg-prefix}--create-full-page__step-subtitle`    | subtitle    | `productive-heading-01` & `margin-bottom` of `$spacing-03` |\n| `#{$pkg-prefix}--create-full-page__step-description` | description | `body-long-01` & `margin-bottom` of `$spacing-06`          |\n| `#{$pkg-prefix}--create-full-page__step-fieldset`    | fieldset    | `margin-bottom` of `$spacing-05` to all children elements  |\n| `#{$pkg-prefix}--create-full-page__section-divider`  | divider     | Includes a `1px` divider line inside the `main` content    |\n"}]});M.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const u="create-full-page-stories",p=`${j.prefix}--create-full-page`,bt={title:"IBM Products/Patterns/Edit and update/EditFullPage",component:x,tags:["autodocs"],parameters:{styles:W,layout:"fullscreen",docs:{page:M},controls:{sort:"requiredFirst"}},decorators:[n=>e.jsx("div",{className:`${u}__viewport`,children:n()})]},H={nextButtonText:"Next",backButtonText:"Back",cancelButtonText:"Cancel changes",submitButtonText:"Save changes",modalTitle:"Are you sure you want to cancel?",modalDescription:"If you cancel, the information you have entered won't be saved.",modalDangerButtonText:"Cancel partition",modalSecondaryButtonText:"Return to form",onRequestSubmit:F("Submit handler called"),onClose:F("Close handler called")},Z=({...n})=>{const[t,f]=i.useState("Enter topic name"),[b,v]=i.useState(!1),[C,S]=i.useState(!1),[y,l]=i.useState(!1),[P]=i.useState(750),[o,I]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs("style",{children:[`.${q.prefix}--modal { opacity: 0; }`,";"]}),e.jsxs(D,{...n,children:[e.jsx(r,{className:`${u}__step-fieldset--no-label`,title:"Partition",subtitle:`One or more partitions make up a topic. A partition is an ordered list
        of messages.`,description:`Partitions are distributed across the brokers in order to increase the
        scalability of your topic. You can also use them to distribute
        messages across the members of a consumer group.`,onNext:()=>new Promise((s,Y)=>{setTimeout(()=>{C&&(v(!0),Y()),l(!1),s()},P)}),disableSubmit:!t,children:e.jsx(d,{children:e.jsxs(a,{xlg:5,lg:5,md:4,sm:4,children:[e.jsx(h,{id:"test-1",invalidText:"A valid value is required",labelText:"Topic name",placeholder:"Enter topic name",value:t,onChange:s=>{f(s.target.value),l(!1)},onBlur:()=>{t.length===0&&l(!0)},invalid:y}),b&&e.jsx(B,{lowContrast:!0,kind:"error",title:"Error",subtitle:"Resolve errors to continue",onClose:()=>v(!1)}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(z,{className:`${u}__error--text`,size:"sm",definition:"Once toggled on, an inline error notification will appear upon clicking next. This is an example usage of how to prevent the next step if some kind of error occurred during the `onNext` handler.",children:"Simulate error"})}),e.jsx(L,{id:"simulated-error-toggle",size:"sm",onToggle:s=>S(s)})]}),e.jsx(K,{labelText:"Include additional step",id:"include-additional-step-checkbox",onChange:s=>I(s),checked:o})]})})}),e.jsx(r,{title:"Dynamic step",description:"Example dynamic step",includeStep:o}),e.jsx(r,{title:"Empty",secondaryLabel:"Optional",description:"Empty step for demonstration purposes"}),e.jsx(r,{className:`${u}__step-fieldset--no-label`,title:"Core configuration",description:"Here is an example description for the 'Core configuration' step.",secondaryLabel:"Optional",children:e.jsx(d,{children:e.jsx(a,{xlg:5,lg:5,md:4,sm:4,children:e.jsxs(d,{children:[e.jsx(a,{xlg:5,lg:5,md:4,sm:4,children:e.jsx(h,{id:"test-2",invalidText:"A valid value is required",labelText:"Topic name (optional)",placeholder:"Enter topic name",value:t})}),e.jsxs(a,{xlg:5,lg:5,md:4,sm:4,children:[e.jsx(T,{id:"test-3",invalidText:"Number is not valid",label:"Label (optional)",max:100,min:0,step:10,value:0,iconDescription:"Number input"}),e.jsx(T,{id:"test-4",invalidText:"Number is not valid",label:"Label (optional)",max:100,min:0,step:10,value:0,iconDescription:"Number input"})]}),e.jsx(a,{xlg:5,lg:5,md:4,sm:4,children:e.jsx(h,{id:"test-5",invalidText:"A valid value is required",labelText:"Minimum in-sync replicas (optional)",placeholder:"Enter topic name",value:t})})]})})})}),e.jsx(r,{title:"Message retention",subtitle:"This is how many copies of a topic will be made for high availability",description:"The partitions of each topic can be replicated across a configurable number of brokers",children:e.jsx(d,{children:e.jsx(a,{xlg:5,lg:5,md:4,sm:4,children:e.jsxs(O,{defaultSelected:"standard",legend:"Group Legend",name:"radio-button-group",valueSelected:"standard",orientation:"vertical",children:[e.jsx(g,{id:"radio-1",labelText:"Replication factor: 1",value:"standard"}),e.jsx(g,{id:"radio-2",labelText:"Replication factor: 2",value:"default-selected"}),e.jsx(g,{id:"radio-3",labelText:"Replication factor: 3",value:"disabled"})]})})})})]})]})},ee=({...n})=>{const[t,f]=i.useState("Enter topic name"),[b,v]=i.useState(!1),[C,S]=i.useState(!1),[y,l]=i.useState(!1),[P]=i.useState(750);return e.jsxs(e.Fragment,{children:[e.jsxs("style",{children:[`.${q.prefix}--modal { opacity: 0; }`,";"]}),e.jsxs(D,{className:`${p}`,...n,children:[e.jsxs(r,{title:"Partition",subtitle:`One or more partitions make up a topic. A partition is an ordered list
        of messages.`,description:`Partitions are distributed across the brokers in order to increase the
        scalability of your topic. You can also use them to distribute
        messages across the members of a consumer group.`,onNext:()=>new Promise((o,I)=>{setTimeout(()=>{C&&(v(!0),I()),l(!1),o()},P)}),disableSubmit:!t,children:[e.jsx(d,{children:e.jsx(a,{xlg:5,lg:5,md:4,sm:4,children:e.jsxs(N,{className:`${p}__step-fieldset ${u}__step-fieldset--label`,legendText:"Partition",children:[e.jsx(h,{id:"test-6",invalidText:"A valid value is required",labelText:"Topic name",placeholder:"Enter topic name",value:t,onChange:o=>{f(o.target.value),l(!1)},onBlur:()=>{t.length===0&&l(!0)},invalid:y}),b&&e.jsx(B,{lowContrast:!0,kind:"error",title:"Error",subtitle:"Resolve errors to continue",onClose:()=>v(!1)}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(z,{className:`${u}__error--text`,size:"sm",definition:"Once toggled on, an inline error notification will appear upon clicking next. This is an example usage of how to prevent the next step if some kind of error occurred during the `onNext` handler.",children:"Simulate error"})}),e.jsx(L,{id:"simulated-error-toggle",size:"sm",onToggle:o=>S(o)})]})]})})}),e.jsx("span",{className:`${p}__section-divider`}),e.jsx(d,{children:e.jsxs(a,{xlg:5,lg:5,md:4,sm:4,children:[e.jsx("h5",{className:`${p}__step-title`,children:"Core configuration"}),e.jsx("h6",{className:`${p}__step-subtitle`,children:"This is how long messages are retained before they are deleted."}),e.jsxs(N,{className:`${p}__step-fieldset ${u}__step-fieldset--label`,legendText:"Core configuration",children:[e.jsx("p",{children:"If your messages are not read by a consumer within this time, they will be missed."}),e.jsx(h,{id:"test-7",invalidText:"A valid value is required",labelText:"Topic name (optional)",placeholder:"Enter topic name",value:t}),e.jsx(T,{id:"test-8",invalidText:"Number is not valid",label:"Label (optional)",max:100,min:0,step:10,value:0}),e.jsx(T,{id:"test-9",invalidText:"Number is not valid",label:"Label (optional)",max:100,min:0,step:10,value:0}),e.jsx(h,{id:"test-10",invalidText:"A valid value is required",labelText:"Minimum in-sync replicas (optional)",placeholder:"Enter topic name",value:t})]})]})})]}),e.jsx(r,{title:"Message retention",subtitle:"This is how many copies of a topic will be made for high availability",description:"The partitions of each topic can be replicated across a configurable number of brokers.",children:e.jsx(d,{children:e.jsx(a,{xlg:5,lg:5,md:4,sm:4,children:e.jsxs(O,{defaultSelected:"standard",legend:"Group Legend",name:"radio-button-group",valueSelected:"standard",orientation:"vertical",children:[e.jsx(g,{id:"radio-4",labelText:"Replication factor: 1",value:"standard"}),e.jsx(g,{id:"radio-5",labelText:"Replication factor: 2",value:"default-selected"}),e.jsx(g,{id:"radio-6",labelText:"Replication factor: 3",value:"disabled"})]})})})})]})]})},c=Z.bind({});c.args={...H};const m=ee.bind({});m.args={...H};var w,R,E;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`({
  ...args
}) => {
  const [textInput, setTextInput] = useState('Enter topic name');
  const [hasSubmitError, setHasSubmitError] = useState(false);
  const [shouldReject, setShouldReject] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [simulatedDelay] = useState(750);
  const [shouldIncludeAdditionalStep, setShouldIncludeAdditionalStep] = useState(false);
  return <>
      <style>{\`.\${carbon.prefix}--modal { opacity: 0; }\`};</style>
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
                <Toggle id="simulated-error-toggle" size="sm" onToggle={event => setShouldReject(event)} />
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
}`,...(E=(R=c.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var $,A,G;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`({
  ...args
}) => {
  const [textInput, setTextInput] = useState('Enter topic name');
  const [hasSubmitError, setHasSubmitError] = useState(false);
  const [shouldReject, setShouldReject] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [simulatedDelay] = useState(750);
  return <>
      <style>{\`.\${carbon.prefix}--modal { opacity: 0; }\`};</style>
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
                  <Toggle id="simulated-error-toggle" size="sm" onToggle={event => setShouldReject(event)} />
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
}`,...(G=(A=m.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};const vt=["editFullPage","editFullPageWithSections"];export{vt as __namedExportsOrder,bt as default,c as editFullPage,m as editFullPageWithSections};
