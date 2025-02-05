import{e,r as a}from"./index-CPiZ6Cnx.js";import{p as d,c as q}from"./settings-DkGFwmHv.js";import{a as F}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{s as U,C as B,a as s}from"./_storybook-styles-BHjqRtvF.js";import{A as W}from"./index-Spu41qs0.js";import{c as J,P as N}from"./index-CXyjPnaX.js";import{C as K}from"./Checkbox-CPOZKaZ_.js";import{F as w}from"./FormGroup-9BStNhuZ.js";import{G as c}from"./Grid-CFwaJv6N.js";import{C as i}from"./Column-DEIwTZ2S.js";import{I as L}from"./Notification-DxY0dFlI.js";import{N as C}from"./NumberInput-7N1NynOx.js";import{R as f}from"./RadioButton-DFKglrJp.js";import{R as O}from"./RadioButtonGroup-CxQn_S4P.js";import{T as j}from"./Toggle-DklbMXot.js";import{D as z}from"./DefinitionTooltip-BPN6Mdin.js";import{T as b}from"./TextInput-DmU-PbK4.js";import{S as Q}from"./StoryDocsPage-B_QkJq2W.js";import{g as V}from"./devtools-BgfuqBVa.js";import"./_commonjsHelpers-BosuxZz1.js";import"./events-OVwOsPzJ.js";import"./index-DJK44odq.js";import"./v4-CQkTLCs1.js";import"./ComposedModal-DIgif1vZ.js";import"./index-Dcfl0vi2.js";import"./LayerContext-BGhaVt7n.js";import"./ButtonSet-DCPCKVSR.js";import"./InlineLoading-DZri6jHG.js";import"./bucket-6-BQYdmIZX.js";import"./bucket-2-L5Cs0C3i.js";import"./mergeRefs-CTUecegF.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-i_P_nIQh.js";import"./Form--JAB0_ak.js";import"./props-helper-C4XfpXsc.js";import"./BreadcrumbWithOverflow-BB0sjDPe.js";import"./useResizeObserver-CZKdqPxj.js";import"./BreadcrumbItem-CpE1feGd.js";import"./Link-EP4KkhUp.js";import"./Text-vNWzJqus.js";import"./bucket-12-Oh5ngpb2.js";import"./MenuItem-8LA01F7J.js";import"./useControllableState-uQXf5Mu5.js";import"./useAttachedMenu-MiCadXk0.js";import"./index-BSHYryQu.js";import"./index-Bsyy8W_U.js";import"./index-mnDakJPj.js";import"./uuidv4-BQrI85uz.js";import"./TooltipTrigger-CA2_KrNG.js";import"./bucket-0-DUfmGMOu.js";import"./lastIndexInArray-Dbizr_b9.js";import"./wait-CTNFjQS8.js";import"./ProgressIndicator-D8Oipw1Q.js";import"./bucket-18-By6NmkK1.js";import"./bucket-9-BSWQ2dSd.js";import"./usePreviousValue-CSEZflXC.js";import"./ActionSet-niQNGcwi.js";import"./useNormalizedInputProps-Dv8FHz9Q.js";import"./FormContext-CgeSXHS1.js";import"./bucket-16-DAqQSLfq.js";import"./useAnnouncer-Dwt0jqXi.js";import"./index-z3zJDXtl.js";import"./iframe-BAt2XFX8.js";import"../sb-preview/runtime.js";import"./index-Df9so8jS.js";import"./index-DMCuvgYY.js";import"./index-DrFu-skq.js";import"./story-helper-CTHQ3yzD.js";const X=`${d.prefix}--edit-full-page`,_="EditFullPage";let p=e.forwardRef(({className:o,children:t,...x},v)=>e.createElement("div",{...x,className:J(X,o,{}),ref:v,role:"main",...V(_)},t));p.deprecated={level:"warn",details:"This component is deprecated and will be removed in the next major version."};p=d.checkComponentEnabled(p,_);p.displayName=_;p.propTypes={children:N.node.isRequired,className:N.string};p.__docgenInfo={description:`**This component is deprecated.** <br>
Use when settings on a page need to always be shown in edit mode, or when the context of the page is needed to make several changes.
See usage guidance for further details.
@deprecated`,methods:[],displayName:"EditFullPage",props:{className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}},children:{required:!0,tsType:{name:"ReactNode"},description:"Provide the contents of the EditFullPage.",type:{name:"node"}}}};const H=()=>e.createElement(Q,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/edit-and-update/usage/#full-page-edit",blocks:[{description:`There are **2** components that make up a Create Full Page component, which can
be used in unison to create the desired look, or flow. Please note, to utilize
the Create Full Page component, you'll need to have a minimum of two steps. If
you are looking for a one step creation flow, consider Create Tearsheet, Create
Side Panel, or Create Modal.`},{story:g,description:"This is used when you have one section per step. This can be created by passing\nin the overall `<CreateFullPage />` component and the `<CreateFullPageStep />`\ncomponent with form items as children:",source:{code:`<CreateFullPage {...props}>
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
    </CreateFullPage>`}},{story:h,description:"This is used when you have several sections per step. This can be created by\npassing in the overall `<CreateFullPage />` component and the\n`<CreateFullPageStep />` component for the first `section`. All additional\n`sections` must be passed in as children, as shown below:",source:{code:`<CreateFullPageStep
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
};`}},{title:"Class names",description:"Additionally, to get the preferred styling when including your own children as\nsections, you can utilize the below included class names.\n\n| Class name                                           | Element     | Features                                                   |\n| ---------------------------------------------------- | ----------- | ---------------------------------------------------------- |\n| `#{$pkg-prefix}--create-full-page__step-title`       | title       | `productive-heading-04` & `margin-bottom` of `$spacing-05` |\n| `#{$pkg-prefix}--create-full-page__step-subtitle`    | subtitle    | `productive-heading-01` & `margin-bottom` of `$spacing-03` |\n| `#{$pkg-prefix}--create-full-page__step-description` | description | `body-long-01` & `margin-bottom` of `$spacing-06`          |\n| `#{$pkg-prefix}--create-full-page__step-fieldset`    | fieldset    | `margin-bottom` of `$spacing-05` to all children elements  |\n| `#{$pkg-prefix}--create-full-page__section-divider`  | divider     | Includes a `1px` divider line inside the `main` content    |\n"}]});H.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const u="create-full-page-stories",m=`${d.prefix}--create-full-page`,ht={title:"Deprecated/Edit and update/EditFullPage",component:p,tags:["autodocs"],parameters:{styles:U,layout:"fullscreen",docs:{page:H},controls:{sort:"requiredFirst"}},decorators:[o=>e.createElement("div",{className:`${u}__viewport`},e.createElement("style",null,`
      .${d.prefix}--custom-annotation { height: 100% }
      .${d.prefix}--custom-annotation > .${d.prefix}--annotation__content { height: calc(100% - 1.6rem); padding: 0 }
      `),e.createElement(W,{className:`${d.prefix}--custom-annotation`,type:"deprecation-notice",text:e.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},o()))]},M={nextButtonText:"Next",backButtonText:"Back",cancelButtonText:"Cancel changes",submitButtonText:"Save changes",modalTitle:"Are you sure you want to cancel?",modalDescription:"If you cancel, the information you have entered won't be saved.",modalDangerButtonText:"Cancel partition",modalSecondaryButtonText:"Return to form",onRequestSubmit:F("Submit handler called"),onClose:F("Close handler called")},Z=({...o})=>{const[t,x]=a.useState("Enter topic name"),[v,T]=a.useState(!1),[S,E]=a.useState(!1),[y,l]=a.useState(!1),[P]=a.useState(750),[n,I]=a.useState(!1);return e.createElement(e.Fragment,null,e.createElement("style",null,`.${q.prefix}--modal { opacity: 0; }`,";"),e.createElement(B,{...o},e.createElement(s,{className:`${u}__step-fieldset--no-label`,title:"Partition",subtitle:`One or more partitions make up a topic. A partition is an ordered list
        of messages.`,description:`Partitions are distributed across the brokers in order to increase the
        scalability of your topic. You can also use them to distribute
        messages across the members of a consumer group.`,onNext:()=>new Promise((r,Y)=>{setTimeout(()=>{S&&(T(!0),Y()),l(!1),r()},P)}),disableSubmit:!t},e.createElement(c,null,e.createElement(i,{xlg:5,lg:5,md:4,sm:4},e.createElement(b,{id:"test-1",invalidText:"A valid value is required",labelText:"Topic name",placeholder:"Enter topic name",value:t,onChange:r=>{x(r.target.value),l(!1)},onBlur:()=>{t.length===0&&l(!0)},invalid:y}),v&&e.createElement(L,{lowContrast:!0,kind:"error",title:"Error",subtitle:"Resolve errors to continue",onClose:()=>T(!1)}),e.createElement("div",null,e.createElement("div",null,e.createElement(z,{className:`${u}__error--text`,size:"sm",definition:"Once toggled on, an inline error notification will appear upon clicking next. This is an example usage of how to prevent the next step if some kind of error occurred during the `onNext` handler."},"Simulate error")),e.createElement(j,{labelText:"Simulate error",hideLabel:!0,id:"simulated-error-toggle",size:"sm",onToggle:r=>E(r)})),e.createElement(K,{labelText:"Include additional step",id:"include-additional-step-checkbox",onChange:r=>I(r),checked:n})))),e.createElement(s,{title:"Dynamic step",description:"Example dynamic step",includeStep:n}),e.createElement(s,{title:"Empty",secondaryLabel:"Optional",description:"Empty step for demonstration purposes"}),e.createElement(s,{className:`${u}__step-fieldset--no-label`,title:"Core configuration",description:"Here is an example description for the 'Core configuration' step.",secondaryLabel:"Optional"},e.createElement(c,null,e.createElement(i,{xlg:5,lg:5,md:4,sm:4},e.createElement(c,null,e.createElement(i,{xlg:5,lg:5,md:4,sm:4},e.createElement(b,{id:"test-2",invalidText:"A valid value is required",labelText:"Topic name (optional)",placeholder:"Enter topic name",value:t})),e.createElement(i,{xlg:5,lg:5,md:4,sm:4},e.createElement(C,{id:"test-3",invalidText:"Number is not valid",label:"Label (optional)",max:100,min:0,step:10,value:0,iconDescription:"Number input"}),e.createElement(C,{id:"test-4",invalidText:"Number is not valid",label:"Label (optional)",max:100,min:0,step:10,value:0,iconDescription:"Number input"})),e.createElement(i,{xlg:5,lg:5,md:4,sm:4},e.createElement(b,{id:"test-5",invalidText:"A valid value is required",labelText:"Minimum in-sync replicas (optional)",placeholder:"Enter topic name",value:t})))))),e.createElement(s,{title:"Message retention",subtitle:"This is how many copies of a topic will be made for high availability",description:"The partitions of each topic can be replicated across a configurable number of brokers"},e.createElement(c,null,e.createElement(i,{xlg:5,lg:5,md:4,sm:4},e.createElement(O,{defaultSelected:"standard",legend:"Group Legend",name:"radio-button-group",valueSelected:"standard",orientation:"vertical"},e.createElement(f,{id:"radio-1",labelText:"Replication factor: 1",value:"standard"}),e.createElement(f,{id:"radio-2",labelText:"Replication factor: 2",value:"default-selected"}),e.createElement(f,{id:"radio-3",labelText:"Replication factor: 3",value:"disabled"})))))))},ee=({...o})=>{const[t,x]=a.useState("Enter topic name"),[v,T]=a.useState(!1),[S,E]=a.useState(!1),[y,l]=a.useState(!1),[P]=a.useState(750);return e.createElement(e.Fragment,null,e.createElement("style",null,`.${q.prefix}--modal { opacity: 0; }`,";"),e.createElement(B,{className:`${m}`,...o},e.createElement(s,{title:"Partition",subtitle:`One or more partitions make up a topic. A partition is an ordered list
        of messages.`,description:`Partitions are distributed across the brokers in order to increase the
        scalability of your topic. You can also use them to distribute
        messages across the members of a consumer group.`,onNext:()=>new Promise((n,I)=>{setTimeout(()=>{S&&(T(!0),I()),l(!1),n()},P)}),disableSubmit:!t},e.createElement(c,null,e.createElement(i,{xlg:5,lg:5,md:4,sm:4},e.createElement(w,{className:`${m}__step-fieldset ${u}__step-fieldset--label`,legendText:"Partition"},e.createElement(b,{id:"test-6",invalidText:"A valid value is required",labelText:"Topic name",placeholder:"Enter topic name",value:t,onChange:n=>{x(n.target.value),l(!1)},onBlur:()=>{t.length===0&&l(!0)},invalid:y}),v&&e.createElement(L,{lowContrast:!0,kind:"error",title:"Error",subtitle:"Resolve errors to continue",onClose:()=>T(!1)}),e.createElement("div",null,e.createElement("div",null,e.createElement(z,{className:`${u}__error--text`,size:"sm",definition:"Once toggled on, an inline error notification will appear upon clicking next. This is an example usage of how to prevent the next step if some kind of error occurred during the `onNext` handler."},"Simulate error")),e.createElement(j,{labelText:"Simulate error",hideLabel:!0,id:"simulated-error-toggle",size:"sm",onToggle:n=>E(n)}))))),e.createElement("span",{className:`${m}__section-divider`}),e.createElement(c,null,e.createElement(i,{xlg:5,lg:5,md:4,sm:4},e.createElement("h5",{className:`${m}__step-title`},"Core configuration"),e.createElement("h6",{className:`${m}__step-subtitle`},"This is how long messages are retained before they are deleted."),e.createElement(w,{className:`${m}__step-fieldset ${u}__step-fieldset--label`,legendText:"Core configuration"},e.createElement("p",null,"If your messages are not read by a consumer within this time, they will be missed."),e.createElement(b,{id:"test-7",invalidText:"A valid value is required",labelText:"Topic name (optional)",placeholder:"Enter topic name",value:t}),e.createElement(C,{id:"test-8",invalidText:"Number is not valid",label:"Label (optional)",max:100,min:0,step:10,value:0}),e.createElement(C,{id:"test-9",invalidText:"Number is not valid",label:"Label (optional)",max:100,min:0,step:10,value:0}),e.createElement(b,{id:"test-10",invalidText:"A valid value is required",labelText:"Minimum in-sync replicas (optional)",placeholder:"Enter topic name",value:t}))))),e.createElement(s,{title:"Message retention",subtitle:"This is how many copies of a topic will be made for high availability",description:"The partitions of each topic can be replicated across a configurable number of brokers."},e.createElement(c,null,e.createElement(i,{xlg:5,lg:5,md:4,sm:4},e.createElement(O,{defaultSelected:"standard",legend:"Group Legend",name:"radio-button-group",valueSelected:"standard",orientation:"vertical"},e.createElement(f,{id:"radio-4",labelText:"Replication factor: 1",value:"standard"}),e.createElement(f,{id:"radio-5",labelText:"Replication factor: 2",value:"default-selected"}),e.createElement(f,{id:"radio-6",labelText:"Replication factor: 3",value:"disabled"})))))))},g=Z.bind({});g.args={...M};const h=ee.bind({});h.args={...M};var k,R,$;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`({
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
}`,...($=(R=g.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var A,G,D;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`({
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
}`,...(D=(G=h.parameters)==null?void 0:G.docs)==null?void 0:D.source}}};const ft=["editFullPage","editFullPageWithSections"];export{ft as __namedExportsOrder,ht as default,g as editFullPage,h as editFullPageWithSections};
