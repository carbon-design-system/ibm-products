import{R as e,r as a}from"./index-BwDkhjyp.js";import{p as I,c as D}from"./settings-DI4GKhuL.js";import{a as F}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{s as U,C as B,a as s}from"./_storybook-styles-jyASq1R4.js";import{c as W}from"./index-C8rbkH0g.js";import{C as J}from"./Checkbox-BYXaHiKq.js";import{F as N}from"./FormGroup-U0nC7yo_.js";import{G as d}from"./Grid-8YiV6Fu4.js";import{C as i}from"./Column-BcwsXbO0.js";import{I as L}from"./Notification-BmdIIjcO.js";import{N as T}from"./NumberInput-VX9OGJ6-.js";import{R as g}from"./RadioButton-DGsh84ks.js";import{R as O}from"./RadioButtonGroup-BWB0dd1W.js";import{T as j}from"./Toggle-BGCADFoV.js";import{D as z}from"./DefinitionTooltip-CS-ERqGw.js";import{T as f}from"./TextInput-DzTaHMIt.js";import{S as K}from"./StoryDocsPage-D0IWKjO6.js";import{P as k}from"./index-Dk74W0Oi.js";import{g as Q}from"./devtools-BXUoVCj7.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./events-OVwOsPzJ.js";import"./index-7nuGG3yx.js";import"./v4-CQkTLCs1.js";import"./ComposedModal-B4D2akSI.js";import"./index-DcAOwtUU.js";import"./index-DE-lHwKS.js";import"./LayerContext-DbU-6VX4.js";import"./ButtonSet-BECKiWsh.js";import"./InlineLoading-CdHnoZn4.js";import"./bucket-6-D8gTeSgt.js";import"./bucket-2-BgPkDhJt.js";import"./mergeRefs-CTUecegF.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-BBe48k1H.js";import"./Form-DdvgvJxN.js";import"./props-helper-DbXaHz23.js";import"./BreadcrumbWithOverflow-DFGn1rJl.js";import"./useResizeObserver-CYrpFlRY.js";import"./BreadcrumbItem-O8rb_Upx.js";import"./Link-DedcumfW.js";import"./Text-DZylbEPL.js";import"./bucket-12-BdJxyMSm.js";import"./index-7ofX8jt7.js";import"./useAttachedMenu-DeIo1fst.js";import"./index-BONylQH5.js";import"./uuidv4-BQrI85uz.js";import"./TooltipTrigger-DwgziBmX.js";import"./bucket-0-DwwVbvd9.js";import"./lastIndexInArray-g6ZdHM--.js";import"./wait-CTNFjQS8.js";import"./ProgressIndicator-NuKi0hWU.js";import"./bucket-18--U95jA7N.js";import"./bucket-9-DfCy8Gkj.js";import"./usePreviousValue-Cw-zRxyE.js";import"./ActionSet-DimiiQBT.js";import"./useNormalizedInputProps-BXoiUTEC.js";import"./FormContext-C7kRVu4t.js";import"./bucket-16-37j4Z-9c.js";import"./useControllableState-DwpxGhsf.js";import"./useAnnouncer-Dwt0jqXi.js";import"./index-BpGm7QiY.js";import"./iframe-B6oKv5UQ.js";import"../sb-preview/runtime.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./story-helper-6_fmjwZ-.js";import"./tslib.es6-B4_xh3D5.js";const V=`${I.prefix}--edit-full-page`,_="EditFullPage";let b=e.forwardRef(({className:l,children:t,...h},x)=>e.createElement("div",{...h,className:W(V,l,{}),ref:x,role:"main",...Q(_)},t));b=I.checkComponentEnabled(b,_);b.displayName=_;b.propTypes={children:k.node.isRequired,className:k.string};b.__docgenInfo={description:`Use when settings on a page need to always be shown in edit mode, or when the context of the page is needed to make several changes.
See usage guidance for further details.`,methods:[],displayName:"EditFullPage",props:{className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}},children:{required:!0,tsType:{name:"ReactNode"},description:"Provide the contents of the EditFullPage.",type:{name:"node"}}}};const H=()=>e.createElement(K,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/edit-and-update/usage/#full-page-edit",blocks:[{description:`There are **2** components that make up a Create Full Page component, which can
be used in unison to create the desired look, or flow. Please note, to utilize
the Create Full Page component, you'll need to have a minimum of two steps. If
you are looking for a one step creation flow, consider Create Tearsheet, Create
Side Panel, or Create Modal.`},{story:p,description:"This is used when you have one section per step. This can be created by passing\nin the overall `<CreateFullPage />` component and the `<CreateFullPageStep />`\ncomponent with form items as children:",source:{code:`<CreateFullPage {...props}>
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
};`}},{title:"Class names",description:"Additionally, to get the preferred styling when including your own children as\nsections, you can utilize the below included class names.\n\n| Class name                                           | Element     | Features                                                   |\n| ---------------------------------------------------- | ----------- | ---------------------------------------------------------- |\n| `#{$pkg-prefix}--create-full-page__step-title`       | title       | `productive-heading-04` & `margin-bottom` of `$spacing-05` |\n| `#{$pkg-prefix}--create-full-page__step-subtitle`    | subtitle    | `productive-heading-01` & `margin-bottom` of `$spacing-03` |\n| `#{$pkg-prefix}--create-full-page__step-description` | description | `body-long-01` & `margin-bottom` of `$spacing-06`          |\n| `#{$pkg-prefix}--create-full-page__step-fieldset`    | fieldset    | `margin-bottom` of `$spacing-05` to all children elements  |\n| `#{$pkg-prefix}--create-full-page__section-divider`  | divider     | Includes a `1px` divider line inside the `main` content    |\n"}]});H.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const u="create-full-page-stories",c=`${I.prefix}--create-full-page`,bt={title:"Experimental/Patterns/Edit and update/EditFullPage",component:b,tags:["autodocs"],parameters:{styles:U,layout:"fullscreen",docs:{page:H},controls:{sort:"requiredFirst"}},decorators:[l=>e.createElement("div",{className:`${u}__viewport`},l())]},M={nextButtonText:"Next",backButtonText:"Back",cancelButtonText:"Cancel changes",submitButtonText:"Save changes",modalTitle:"Are you sure you want to cancel?",modalDescription:"If you cancel, the information you have entered won't be saved.",modalDangerButtonText:"Cancel partition",modalSecondaryButtonText:"Return to form",onRequestSubmit:F("Submit handler called"),onClose:F("Close handler called")},X=({...l})=>{const[t,h]=a.useState("Enter topic name"),[x,v]=a.useState(!1),[C,S]=a.useState(!1),[E,o]=a.useState(!1),[y]=a.useState(750),[n,P]=a.useState(!1);return e.createElement(e.Fragment,null,e.createElement("style",null,`.${D.prefix}--modal { opacity: 0; }`,";"),e.createElement(B,{...l},e.createElement(s,{className:`${u}__step-fieldset--no-label`,title:"Partition",subtitle:`One or more partitions make up a topic. A partition is an ordered list
        of messages.`,description:`Partitions are distributed across the brokers in order to increase the
        scalability of your topic. You can also use them to distribute
        messages across the members of a consumer group.`,onNext:()=>new Promise((r,Y)=>{setTimeout(()=>{C&&(v(!0),Y()),o(!1),r()},y)}),disableSubmit:!t},e.createElement(d,null,e.createElement(i,{xlg:5,lg:5,md:4,sm:4},e.createElement(f,{id:"test-1",invalidText:"A valid value is required",labelText:"Topic name",placeholder:"Enter topic name",value:t,onChange:r=>{h(r.target.value),o(!1)},onBlur:()=>{t.length===0&&o(!0)},invalid:E}),x&&e.createElement(L,{lowContrast:!0,kind:"error",title:"Error",subtitle:"Resolve errors to continue",onClose:()=>v(!1)}),e.createElement("div",null,e.createElement("div",null,e.createElement(z,{className:`${u}__error--text`,size:"sm",definition:"Once toggled on, an inline error notification will appear upon clicking next. This is an example usage of how to prevent the next step if some kind of error occurred during the `onNext` handler."},"Simulate error")),e.createElement(j,{labelText:"Simulate error",hideLabel:!0,id:"simulated-error-toggle",size:"sm",onToggle:r=>S(r)})),e.createElement(J,{labelText:"Include additional step",id:"include-additional-step-checkbox",onChange:r=>P(r),checked:n})))),e.createElement(s,{title:"Dynamic step",description:"Example dynamic step",includeStep:n}),e.createElement(s,{title:"Empty",secondaryLabel:"Optional",description:"Empty step for demonstration purposes"}),e.createElement(s,{className:`${u}__step-fieldset--no-label`,title:"Core configuration",description:"Here is an example description for the 'Core configuration' step.",secondaryLabel:"Optional"},e.createElement(d,null,e.createElement(i,{xlg:5,lg:5,md:4,sm:4},e.createElement(d,null,e.createElement(i,{xlg:5,lg:5,md:4,sm:4},e.createElement(f,{id:"test-2",invalidText:"A valid value is required",labelText:"Topic name (optional)",placeholder:"Enter topic name",value:t})),e.createElement(i,{xlg:5,lg:5,md:4,sm:4},e.createElement(T,{id:"test-3",invalidText:"Number is not valid",label:"Label (optional)",max:100,min:0,step:10,value:0,iconDescription:"Number input"}),e.createElement(T,{id:"test-4",invalidText:"Number is not valid",label:"Label (optional)",max:100,min:0,step:10,value:0,iconDescription:"Number input"})),e.createElement(i,{xlg:5,lg:5,md:4,sm:4},e.createElement(f,{id:"test-5",invalidText:"A valid value is required",labelText:"Minimum in-sync replicas (optional)",placeholder:"Enter topic name",value:t})))))),e.createElement(s,{title:"Message retention",subtitle:"This is how many copies of a topic will be made for high availability",description:"The partitions of each topic can be replicated across a configurable number of brokers"},e.createElement(d,null,e.createElement(i,{xlg:5,lg:5,md:4,sm:4},e.createElement(O,{defaultSelected:"standard",legend:"Group Legend",name:"radio-button-group",valueSelected:"standard",orientation:"vertical"},e.createElement(g,{id:"radio-1",labelText:"Replication factor: 1",value:"standard"}),e.createElement(g,{id:"radio-2",labelText:"Replication factor: 2",value:"default-selected"}),e.createElement(g,{id:"radio-3",labelText:"Replication factor: 3",value:"disabled"})))))))},Z=({...l})=>{const[t,h]=a.useState("Enter topic name"),[x,v]=a.useState(!1),[C,S]=a.useState(!1),[E,o]=a.useState(!1),[y]=a.useState(750);return e.createElement(e.Fragment,null,e.createElement("style",null,`.${D.prefix}--modal { opacity: 0; }`,";"),e.createElement(B,{className:`${c}`,...l},e.createElement(s,{title:"Partition",subtitle:`One or more partitions make up a topic. A partition is an ordered list
        of messages.`,description:`Partitions are distributed across the brokers in order to increase the
        scalability of your topic. You can also use them to distribute
        messages across the members of a consumer group.`,onNext:()=>new Promise((n,P)=>{setTimeout(()=>{C&&(v(!0),P()),o(!1),n()},y)}),disableSubmit:!t},e.createElement(d,null,e.createElement(i,{xlg:5,lg:5,md:4,sm:4},e.createElement(N,{className:`${c}__step-fieldset ${u}__step-fieldset--label`,legendText:"Partition"},e.createElement(f,{id:"test-6",invalidText:"A valid value is required",labelText:"Topic name",placeholder:"Enter topic name",value:t,onChange:n=>{h(n.target.value),o(!1)},onBlur:()=>{t.length===0&&o(!0)},invalid:E}),x&&e.createElement(L,{lowContrast:!0,kind:"error",title:"Error",subtitle:"Resolve errors to continue",onClose:()=>v(!1)}),e.createElement("div",null,e.createElement("div",null,e.createElement(z,{className:`${u}__error--text`,size:"sm",definition:"Once toggled on, an inline error notification will appear upon clicking next. This is an example usage of how to prevent the next step if some kind of error occurred during the `onNext` handler."},"Simulate error")),e.createElement(j,{labelText:"Simulate error",hideLabel:!0,id:"simulated-error-toggle",size:"sm",onToggle:n=>S(n)}))))),e.createElement("span",{className:`${c}__section-divider`}),e.createElement(d,null,e.createElement(i,{xlg:5,lg:5,md:4,sm:4},e.createElement("h5",{className:`${c}__step-title`},"Core configuration"),e.createElement("h6",{className:`${c}__step-subtitle`},"This is how long messages are retained before they are deleted."),e.createElement(N,{className:`${c}__step-fieldset ${u}__step-fieldset--label`,legendText:"Core configuration"},e.createElement("p",null,"If your messages are not read by a consumer within this time, they will be missed."),e.createElement(f,{id:"test-7",invalidText:"A valid value is required",labelText:"Topic name (optional)",placeholder:"Enter topic name",value:t}),e.createElement(T,{id:"test-8",invalidText:"Number is not valid",label:"Label (optional)",max:100,min:0,step:10,value:0}),e.createElement(T,{id:"test-9",invalidText:"Number is not valid",label:"Label (optional)",max:100,min:0,step:10,value:0}),e.createElement(f,{id:"test-10",invalidText:"A valid value is required",labelText:"Minimum in-sync replicas (optional)",placeholder:"Enter topic name",value:t}))))),e.createElement(s,{title:"Message retention",subtitle:"This is how many copies of a topic will be made for high availability",description:"The partitions of each topic can be replicated across a configurable number of brokers."},e.createElement(d,null,e.createElement(i,{xlg:5,lg:5,md:4,sm:4},e.createElement(O,{defaultSelected:"standard",legend:"Group Legend",name:"radio-button-group",valueSelected:"standard",orientation:"vertical"},e.createElement(g,{id:"radio-4",labelText:"Replication factor: 1",value:"standard"}),e.createElement(g,{id:"radio-5",labelText:"Replication factor: 2",value:"default-selected"}),e.createElement(g,{id:"radio-6",labelText:"Replication factor: 3",value:"disabled"})))))))},p=X.bind({});p.args={...M};const m=Z.bind({});m.args={...M};var w,R,$;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`({
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
}`,...($=(R=p.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var A,G,q;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`({
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
}`,...(q=(G=m.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};const ht=["editFullPage","editFullPageWithSections"];export{ht as __namedExportsOrder,bt as default,p as editFullPage,m as editFullPageWithSections};
