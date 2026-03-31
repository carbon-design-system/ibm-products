var Y=Object.defineProperty;var t=(l,s)=>Y(l,"name",{value:s,configurable:!0});import{e,S as U,u as B,r as n,p as V}from"./iframe-CjBCRFVj.js";import{C as M}from"./Checkbox-CET8YCR1.js";import{F as q}from"./FormGroup-BWFLobqU.js";import{G as i}from"./Grid-LR8sqjmS.js";import{C as a}from"./Column-C-VEsi7m.js";import{L as K}from"./Link-B9fBvMD0.js";import{I as L}from"./Notification-BZABwt6B.js";import{N as y}from"./NumberInput-DAmJMtSG.js";import{R as h}from"./RadioButton-s3rMrPv_.js";import{R as O}from"./RadioButtonGroup-0uan1ved.js";import{T as m}from"./TextInput-CbJUOcDx.js";import{T as D}from"./Toggle-DjOZHlfN.js";import{H as J,a as Q}from"./HeaderName--81HkE7R.js";import{H as X,S as Z}from"./SideNavLink-Bcn-TDeb.js";import{a as ee,b as te}from"./SideNavLinkText-DoKZdmHH.js";import{D as H}from"./DefinitionTooltip-DeVuspr6.js";import{C as R,a as o}from"./CreateFullPageStep-yJNH0yLk.js";import{s as ae}from"./_storybook-styles-CAC8YPpa.js";import"./preload-helper-Cc2_yIPf.js";import"./Text-BrH4C0jF.js";import"./index-CzluofQO.js";import"./index-DInTrMzG.js";import"./bucket-19-BlJcL9aw.js";import"./utils-CfXDWtIp.js";import"./bucket-20-BOI0trXu.js";import"./wrapFocus-CFxqynwa.js";import"./bucket-10-ZrkysMit.js";import"./bucket-6-CXCYtBmh.js";import"./useNormalizedInputProps-iq3oC8B3.js";import"./FormContext-BppFagRd.js";import"./clamp-ekNJC_Xv.js";import"./useControllableState-DI7Xu23J.js";import"./documentLang-E105Y72C.js";import"./bucket-17-Bd47KcNt.js";import"./bucket-0-DPFyNFTi.js";import"./mergeRefs-BH0-8uDG.js";import"./Link-rXuQP2cL.js";import"./AriaPropTypes-BRSJCqpE.js";import"./bucket-12-CftUHxMi.js";import"./useMatchMedia-FQ7egXS-.js";import"./index-B1DzEGCY.js";import"./ComposedModal-bhxv7MDS.js";import"./index-Srdo1RRm.js";import"./LayerContext-1C_CyexE.js";import"./ButtonSet-CPatE6mM.js";import"./InlineLoading-B5kGlaxG.js";import"./usePresenceContext-DUsD1D5h.js";import"./requiredIfGivenPropIsTruthy-DakX99Et.js";import"./Form-DeWEtTHg.js";import"./BreadcrumbWithOverflow-BsB5p5GN.js";import"./useResizeObserver-CDXgigJs.js";import"./useIsomorphicEffect-CxQ5hh_U.js";import"./BreadcrumbItem-CGciRIED.js";import"./bucket-13-C-q7moq6.js";import"./MenuItem-CsJ8k-Je.js";import"./useAttachedMenu-CotrszDl.js";import"./environment-DRRHKtsv.js";import"./defaultItemToString-DDHghiWu.js";import"./bucket-2-EKCFwDEt.js";import"./index-Baa2ARkH.js";import"./useOutsideClick-eIEGF3iK.js";import"./uuidv4-Fbcg8Vng.js";import"./TooltipTrigger-BGVFvlhn.js";import"./bucket-1-CLzSBq5W.js";import"./devtools-CsBMoq7i.js";import"./lastIndexInArray-BHoxsiCO.js";import"./wait-Ymtilqka.js";import"./ProgressIndicator-Bjsydnkr.js";import"./usePreviousValue-DwrLjxQX.js";import"./ActionSet-Db6dLYiY.js";import"./props-helper-8n0VjC8z.js";const z=t(()=>e.createElement(U,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/create-flows/usage/#full-page",blocks:[{description:`There are **2** components that make up a Create Full Page component, which can
be used in unison to create the desired look, or flow. Please note, to utilize
the Create Full Page component, you'll need to have a minimum of two steps. If
you are looking for a one step creation flow, consider Create Tearsheet, Create
Side Panel, or Create Modal.`},{story:T,description:"This is used when you have one section per step. This can be created by passing\nin the overall `<CreateFullPage />` component and the `<CreateFullPageStep />`\ncomponent with form items as children:\n",source:{code:`<CreateFullPage {...props}>
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
    </CreateFullPage>`}},{story:E,description:"This is used when you have several sections per step. This can be created by\npassing in the overall `<CreateFullPage />` component and the\n`<CreateFullPageStep />` component for the first `section`. All additional\n`sections` must be passed in as children, as shown below:",source:{code:`<CreateFullPageStep
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
</CreateFullPageStep>`}},{story:P,description:"This is used when you want to show a header title and breadcrumbs. This can be created by\npassing in a title or breadcrumbs to the `<CreateFullPage />` component  as shown below:",source:{code:`<CreateFullPage
  title='Page title'
  breadcrumbsOverflowAriaLabel='Open and close additional breadcrumb item list.'
  breadcrumbs={[
    { key: '0', label: 'Breadcrumb 1', href: '/', title: 'home page' },
    { key: '1', label: 'Breadcrumb 2', href: '/', },
    { key: '2', label: 'Breadcrumb 3', href:'/' },
    { key: '3', label: 'Breadcrumb 4', isCurrentPage: true }
  ]}
  maxVisibleBreadcrumbs={3}
  {...props}
>
    <CreateFullPageStep {...createFullPageStepProps}>...</CreateFullPageStep>
</CreateFullPage>`}},{story:I,description:"Passing an invalid prop to the step will show up an error icon on the progress indicator step indicating an error state in that step",source:{code:`<CreateFullPage {...createFullPageProps}>
  <CreateFullPageStep
    title="Topic name"
    invalid={true}
  >
    Step content
  </CreateFullPageStep>
</CreateFullPage>`}},{title:"Using custom components",description:"It is possible to use custom components that return `CreateFullPageStep`s in\norder to help reduce the amount of logic in the component that contains the main\n`CreateFullPage`. _It is required that each child of the `CreateFullPage` either\nbe a custom step or a `CreateFullPageStep`_. An example of this could look like\nthe following:",source:{code:`const CreateStepCustom = ({ subtitle, ...rest }) => {
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
};`}},{title:"Class names",description:"Additionally, to get the preferred styling when including your own children as\nsections, you can utilize the below included class names.\n\n| Class name                                           | Element     | Features                                                   |\n| ---------------------------------------------------- | ----------- | ---------------------------------------------------------- |\n| `#{$pkg-prefix}--create-full-page__step-title`       | title       | `productive-heading-04` & `margin-bottom` of `$spacing-05` |\n| `#{$pkg-prefix}--create-full-page__step-subtitle`    | subtitle    | `productive-heading-01` & `margin-bottom` of `$spacing-03` |\n| `#{$pkg-prefix}--create-full-page__step-description` | description | `body-long-01` & `margin-bottom` of `$spacing-06`          |\n| `#{$pkg-prefix}--create-full-page__step-fieldset`    | fieldset    | `margin-bottom` of `$spacing-05` to all children elements  |\n| `#{$pkg-prefix}--create-full-page__section-divider`  | divider     | Includes a `1px` divider line inside the `main` content    |\n"},{title:"Prevent the modal from closing after submit",description:"In the case that you want to prevent the modal from closing after the user submits you can return an object from `onRequestSubmit` and indicate the `preventClose` property to `true`",source:{code:`
<CreateFullPage onRequestSubmit={() => ({ preventClose: true })}>
  ...
</CreateFullPage>
`}}]}),"DocsPage");z.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:j}=__STORYBOOK_MODULE_ACTIONS__,r="create-full-page-stories",C=`${V.prefix}--create-full-page`,$={"No breadcrumb":null,"A single breadcrumb":[{href:"/",key:"0",label:"Home page"}],"Two breadcrumbs":[{key:"0",href:"/",label:"Home page"},{key:"1",href:"/",label:"Application name"}]},Pt={title:"Patterns/Prebuilt patterns/Create flows/CreateFullPage",component:R,tags:["autodocs"],parameters:{styles:ae,layout:"fullscreen",docs:{page:z},controls:{sort:"requiredFirst"}},decorators:[l=>e.createElement("div",{className:`${r}__viewport`},l())],argTypes:{breadcrumbs:{control:{type:"select",labels:Object.keys($)},options:Object.values($).map((l,s)=>s),mapping:Object.values($)},children:{control:!1}}},A={secondaryTitle:"Create topic",nextButtonText:"Next",backButtonText:"Back",cancelButtonText:"Cancel",submitButtonText:"Create",modalTitle:"Are you sure you want to cancel?",modalDescription:"If you cancel, the information you have entered won't be saved.",modalDangerButtonText:"Cancel partition",modalSecondaryButtonText:"Return to form",onClickInfluencerStep:t(l=>console.log("Step: ",l),"onClickInfluencerStep"),onRequestSubmit:j("Submit handler called"),onClose:j("Close handler called")},W=t(({...l})=>{const s=B(),[p,x]=n.useState(""),[f,d]=n.useState(!1),[S,b]=n.useState(!1),[k,u]=n.useState(!1),[F]=n.useState(750),[c,_]=n.useState(!1);return e.createElement(e.Fragment,null,e.createElement("style",null,`.${s}--modal { opacity: 0; }`,";"),e.createElement(R,{...l},e.createElement(o,{className:`${r}__step-fieldset--no-label`,title:"Partition",subtitle:`One or more partitions make up a topic. A partition is an ordered list
        of messages.`,description:e.createElement(e.Fragment,null,e.createElement("span",null,"Partitions are distributed across the brokers in order to increase the scalability of your topic. You can also use them to distribute messages across the members of a consumer group.")," ",e.createElement(K,{href:"#"},"Learn more.")),onNext:t(()=>new Promise((g,N)=>{setTimeout(()=>{S&&(d(!0),N()),u(!1),g()},F)}),"onNext"),disableSubmit:!p},e.createElement(i,null,e.createElement(a,{xlg:5,lg:5,md:4,sm:4},e.createElement(m,{id:"test-1",invalidText:"A valid value is required",labelText:"Topic name",placeholder:"Enter topic name",onChange:t(g=>{x(g.target.value),u(!1)},"onChange"),onBlur:t(()=>{p.length===0&&u(!0)},"onBlur"),invalid:k}),f&&e.createElement(L,{lowContrast:!0,kind:"error",title:"Error",subtitle:"Resolve errors to continue",onClose:t(()=>d(!1),"onClose")}),e.createElement("div",null,e.createElement("div",null,e.createElement(H,{className:`${r}__error--text`,size:"sm",definition:"Once toggled on, an inline error notification will appear upon clicking next. This is an example usage of how to prevent the next step if some kind of error occurred during the `onNext` handler."},"Simulate error")),e.createElement(D,{labelText:"Simulate error",hideLabel:!0,id:"simulated-error-toggle",size:"sm",onToggle:t(g=>b(g),"onToggle")})),e.createElement(M,{labelText:"Include additional step",id:"include-additional-step-checkbox",onChange:t((g,{checked:N})=>_(N),"onChange"),checked:c})))),e.createElement(o,{title:"Dynamic step",description:"Example dynamic step",includeStep:c,onPrevious:t(()=>console.log("custom onPrevious handler"),"onPrevious")}),e.createElement(o,{title:"Empty",secondaryLabel:"Optional",description:"Empty step for demonstration purposes",onPrevious:t(()=>console.log("custom onPrevious handler"),"onPrevious")}),e.createElement(o,{className:`${r}__step-fieldset--no-label`,title:"Core configuration",description:"Here is an example description for the 'Core configuration' step.",secondaryLabel:"Optional",onPrevious:t(()=>console.log("custom onPrevious handler"),"onPrevious")},e.createElement(i,null,e.createElement(a,{xlg:5,lg:5,md:4,sm:4},e.createElement(i,null,e.createElement(a,{xlg:5,lg:5,md:4,sm:4},e.createElement(m,{id:"test-2",invalidText:"A valid value is required",labelText:"Topic name (optional)",placeholder:"Enter topic name"})),e.createElement(a,{span:3},e.createElement(y,{id:"test-3",invalidText:"Number is not valid",label:"Label (optional)",max:100,min:0,step:10,value:0,iconDescription:"Choose a number"}),e.createElement(y,{id:"test-4",invalidText:"Number is not valid",label:"Label (optional)",max:100,min:0,step:10,value:0,iconDescription:"Choose a number"})),e.createElement(a,{xlg:5,lg:5,md:4,sm:4},e.createElement(m,{id:"test-5",invalidText:"A valid value is required",labelText:"Minimum in-sync replicas (optional)",placeholder:"Enter topic name"})))))),e.createElement(o,{title:"Message retention",subtitle:"This is how many copies of a topic will be made for high availability",description:"The partitions of each topic can be replicated across a configurable number of brokers",onPrevious:t(()=>console.log("custom onPrevious handler"),"onPrevious")},e.createElement(i,null,e.createElement(a,{span:100},e.createElement(O,{defaultSelected:"standard",legend:"Group Legend",name:"radio-button-group",valueSelected:"standard",orientation:"vertical"},e.createElement(h,{id:"radio-1",labelText:"Replication factor: 1",value:"standard"}),e.createElement(h,{id:"radio-2",labelText:"Replication factor: 2",value:"default-selected"}),e.createElement(h,{id:"radio-3",labelText:"Replication factor: 3",value:"disabled"})))))))},"Template"),ne=t(({...l})=>{const s=B(),[p,x]=n.useState(""),[f,d]=n.useState(!1),[S,b]=n.useState(!1),[k,u]=n.useState(!1),[F]=n.useState(750);return e.createElement(e.Fragment,null,e.createElement("style",null,`.${s}--modal { opacity: 0; }`,";"),e.createElement(R,{className:`${C}`,...l},e.createElement(o,{title:"Partition",subtitle:`One or more partitions make up a topic. A partition is an ordered list
        of messages.`,description:`Partitions are distributed across the brokers in order to increase the
        scalability of your topic. You can also use them to distribute
        messages across the members of a consumer group.`,onNext:t(()=>new Promise((c,_)=>{setTimeout(()=>{S&&(d(!0),_()),u(!1),c()},F)}),"onNext"),disableSubmit:!p},e.createElement(i,null,e.createElement(a,{xlg:5,lg:5,md:4,sm:4},e.createElement(q,{className:`${C}__step-fieldset ${r}__step-fieldset--label`,legendText:"Partition"},e.createElement(m,{id:"test-6",invalidText:"A valid value is required",labelText:"Topic name",placeholder:"Enter topic name",onChange:t(c=>{x(c.target.value),u(!1)},"onChange"),onBlur:t(()=>{p.length===0&&u(!0)},"onBlur"),invalid:k}),f&&e.createElement(L,{lowContrast:!0,kind:"error",title:"Error",subtitle:"Resolve errors to continue",onClose:t(()=>d(!1),"onClose")}),e.createElement("div",null,e.createElement("div",null,e.createElement(H,{className:`${r}__error--text`,size:"sm",definition:"Once toggled on, an inline error notification will appear upon clicking next. This is an example usage of how to prevent the next step if some kind of error occurred during the `onNext` handler."},"Simulate error")),e.createElement(D,{labelText:"Simulate error",hideLabel:!0,id:"simulated-error-toggle",size:"sm",onToggle:t(c=>b(c),"onToggle")}))))),e.createElement("span",{className:`${C}__section-divider`}),e.createElement(i,null,e.createElement(a,{span:50},e.createElement("h5",{className:`${C}__step-title`},"Core configuration"),e.createElement("h6",{className:`${C}__step-subtitle`},"This is how long messages are retained before they are deleted."))),e.createElement(i,null,e.createElement(a,{xlg:8,lg:8,md:4,sm:4},e.createElement(q,{className:`${C}__step-fieldset ${r}__step-fieldset--label`,legendText:"Core configuration"},e.createElement(i,null,e.createElement(a,{span:50},e.createElement("p",{className:`${C}__step-description ${r}__step-description`},"If your messages are not read by a consumer within this time, they will be missed.")),e.createElement(a,{xlg:5,lg:5,md:4,sm:4},e.createElement(i,null,e.createElement(a,{xlg:5,lg:5,md:4,sm:4},e.createElement(m,{id:"test-7",invalidText:"A valid value is required",labelText:"Topic name (optional)",placeholder:"Enter topic name"})),e.createElement(a,{span:3},e.createElement(y,{id:"test-8",invalidText:"Number is not valid",label:"Label (optional)",max:100,min:0,step:10,value:0,iconDescription:"Choose a number"}),e.createElement(y,{id:"test-9",invalidText:"Number is not valid",label:"Label (optional)",max:100,min:0,step:10,value:0,iconDescription:"Choose a number"})),e.createElement(a,{xlg:5,lg:5,md:4,sm:4},e.createElement(m,{id:"test-10",invalidText:"A valid value is required",labelText:"Minimum in-sync replicas (optional)",placeholder:"Enter topic name"}))))))))),e.createElement(o,{title:"Message retention",subtitle:"This is how many copies of a topic will be made for high availability",description:"The partitions of each topic can be replicated across a configurable number of brokers."},e.createElement(i,null,e.createElement(a,{span:100},e.createElement(O,{defaultSelected:"standard",legend:"Group Legend",name:"radio-button-group",valueSelected:"standard",orientation:"vertical"},e.createElement(h,{id:"radio-4",labelText:"Replication factor: 1",value:"standard"}),e.createElement(h,{id:"radio-5",labelText:"Replication factor: 2",value:"default-selected"}),e.createElement(h,{id:"radio-6",labelText:"Replication factor: 3",value:"disabled"})))))))},"TemplateWithSections"),ie=t(({...l})=>{const[s,p]=n.useState(""),[x,f]=n.useState(!0),[d,S]=n.useState(!0);return e.createElement(R,{...l},e.createElement(o,{title:"Partition",subtitle:`One or more partitions make up a topic. A partition is an ordered list
        of messages.`,invalid:d,disableSubmit:d},e.createElement(i,null,e.createElement(a,{xlg:5,lg:5,md:4,sm:4},e.createElement(m,{id:"test-6",invalidText:"A valid value is required",labelText:"Topic name",placeholder:"Enter topic name",onChange:t(b=>{p(b.target.value),f(!b.target.value),S(!b.target.value)},"onChange"),onBlur:t(()=>{s.length===0&&f(!0)},"onBlur"),invalid:x})))),e.createElement(o,{title:"Core Configuration"},e.createElement(i,null,e.createElement(a,{xlg:5,lg:5,md:4,sm:4},"Test step"))))},"TemplateWithError"),T=W.bind({});T.args={...A};const E=ne.bind({});E.args={...A};const P=W.bind({});P.args={...A,title:"Page title",breadcrumbsOverflowAriaLabel:"Open and close additional breadcrumb item list.",breadcrumbs:[{key:"0",label:"Breadcrumb 1",href:"/",title:"home page"},{key:"1",label:"Breadcrumb 2",href:"/"},{key:"2",label:"Breadcrumb 3",href:"/"},{key:"3",label:"Breadcrumb 4",isCurrentPage:!0}],maxVisibleBreadcrumbs:3,breadcrumbOverflowTooltipAlign:"right"};const I=ie.bind({});I.args={...A};const le=t(({...l})=>{const s=B(),[p,x]=n.useState(""),[f,d]=n.useState(!1),[S,b]=n.useState(!1),[k,u]=n.useState(!1),[F]=n.useState(750),[c,_]=n.useState(!1),[g,N]=n.useState(!1);return e.createElement(e.Fragment,null,e.createElement("style",null,`.${s}--modal { opacity: 0; }`,";"),e.createElement(J,{"aria-label":"IBM Platform Name"},e.createElement(X,{"aria-label":"Open menu",isCollapsible:!0,onClick:t(()=>{N(v=>!v)},"onClick"),isActive:g}),e.createElement(Q,{href:"#",prefix:"IBM"},"Products application"),e.createElement(ee,{"aria-label":"Side navigation",expanded:g,isFixedNav:!0},e.createElement(te,null,e.createElement(Z,{href:"https://pages.github.ibm.com/carbon/ibm-products/",target:"_blank"},"Sample link: Carbon for IBM Products")))),e.createElement("div",{className:`${r}__content-container ${r}__content-container--with-global-header`},e.createElement(R,{...l},e.createElement(o,{className:`${r}__step-fieldset--no-label`,title:"Partition",subtitle:`One or more partitions make up a topic. A partition is an ordered list
        of messages.`,description:`Partitions are distributed across the brokers in order to increase the
        scalability of your topic. You can also use them to distribute
        messages across the members of a consumer group.`,onNext:t(()=>new Promise((v,G)=>{setTimeout(()=>{S&&(d(!0),G()),u(!1),v()},F)}),"onNext"),disableSubmit:!p},e.createElement(i,null,e.createElement(a,{xlg:5,lg:5,md:4,sm:4},e.createElement(m,{id:"test-1",invalidText:"A valid value is required",labelText:"Topic name",placeholder:"Enter topic name",onChange:t(v=>{x(v.target.value),u(!1)},"onChange"),onBlur:t(()=>{p.length===0&&u(!0)},"onBlur"),invalid:k}),f&&e.createElement(L,{lowContrast:!0,kind:"error",title:"Error",subtitle:"Resolve errors to continue",onClose:t(()=>d(!1),"onClose")}),e.createElement("div",null,e.createElement("div",null,e.createElement(H,{className:`${r}__error--text`,size:"sm",definition:"Once toggled on, an inline error notification will appear upon clicking next. This is an example usage of how to prevent the next step if some kind of error occurred during the `onNext` handler."},"Simulate error")),e.createElement(D,{labelText:"Simulate error",hideLabel:!0,id:"simulated-error-toggle",size:"sm",onToggle:t(v=>b(v),"onToggle")})),e.createElement(M,{labelText:"Include additional step",id:"include-additional-step-checkbox",onChange:t((v,{checked:G})=>_(G),"onChange"),checked:c})))),e.createElement(o,{title:"Dynamic step",description:"Example dynamic step",includeStep:c}),e.createElement(o,{title:"Empty",secondaryLabel:"Optional",description:"Empty step for demonstration purposes"}),e.createElement(o,{className:`${r}__step-fieldset--no-label`,title:"Core configuration",description:"Here is an example description for the 'Core configuration' step.",secondaryLabel:"Optional"},e.createElement(i,null,e.createElement(a,{xlg:5,lg:5,md:4,sm:4},e.createElement(i,null,e.createElement(a,{xlg:5,lg:5,md:4,sm:4},e.createElement(m,{id:"test-2",invalidText:"A valid value is required",labelText:"Topic name (optional)",placeholder:"Enter topic name"})),e.createElement(a,{span:3},e.createElement(y,{id:"test-3",invalidText:"Number is not valid",label:"Label (optional)",max:100,min:0,step:10,value:0,iconDescription:"Choose a number"}),e.createElement(y,{id:"test-4",invalidText:"Number is not valid",label:"Label (optional)",max:100,min:0,step:10,value:0,iconDescription:"Choose a number"})),e.createElement(a,{xlg:5,lg:5,md:4,sm:4},e.createElement(m,{id:"test-5",invalidText:"A valid value is required",labelText:"Minimum in-sync replicas (optional)",placeholder:"Enter topic name"})))))),e.createElement(o,{title:"Message retention",subtitle:"This is how many copies of a topic will be made for high availability",description:"The partitions of each topic can be replicated across a configurable number of brokers"},e.createElement(i,null,e.createElement(a,{span:100},e.createElement(O,{defaultSelected:"standard",legend:"Group Legend",name:"radio-button-group",valueSelected:"standard",orientation:"vertical"},e.createElement(h,{id:"radio-1",labelText:"Replication factor: 1",value:"standard"}),e.createElement(h,{id:"radio-2",labelText:"Replication factor: 2",value:"default-selected"}),e.createElement(h,{id:"radio-3",labelText:"Replication factor: 3",value:"disabled"}))))))))},"TemplateWithGlobalHeader"),w=le.bind({});w.args={...A,title:"Page title",breadcrumbsOverflowAriaLabel:"Open and close additional breadcrumb item list.",breadcrumbs:[{key:"0",label:"Breadcrumb 1",href:"/",title:"home page"},{key:"1",label:"Breadcrumb 2",href:"/"},{key:"2",label:"Breadcrumb 3",href:"/"},{key:"3",label:"Breadcrumb 4",isCurrentPage:!0}],maxVisibleBreadcrumbs:3,breadcrumbOverflowTooltipAlign:"right"};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  const carbonPrefix = usePrefix();
  const [textInput, setTextInput] = useState('');
  const [hasSubmitError, setHasSubmitError] = useState(false);
  const [shouldReject, setShouldReject] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [simulatedDelay] = useState(750);
  const [shouldIncludeAdditionalStep, setShouldIncludeAdditionalStep] = useState(false);
  return <>
      <style>{\`.\${carbonPrefix}--modal { opacity: 0; }\`};</style>
      <CreateFullPage {...args}>
        <CreateFullPageStep className={\`\${storyClass}__step-fieldset--no-label\`} title="Partition" subtitle="One or more partitions make up a topic. A partition is an ordered list
        of messages." description={<>
              <span>
                Partitions are distributed across the brokers in order to
                increase the scalability of your topic. You can also use them to
                distribute messages across the members of a consumer group.
              </span>
              &nbsp;<Link href="#">Learn more.</Link>
            </>} onNext={() => {
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
              <TextInput id="test-1" invalidText="A valid value is required" labelText="Topic name" placeholder="Enter topic name" onChange={e => {
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
              <Checkbox labelText={\`Include additional step\`} id="include-additional-step-checkbox" onChange={(event, {
              checked
            }) => setShouldIncludeAdditionalStep(checked)} checked={shouldIncludeAdditionalStep} />
            </Column>
          </Grid>
        </CreateFullPageStep>
        <CreateFullPageStep title="Dynamic step" description="Example dynamic step" includeStep={shouldIncludeAdditionalStep} onPrevious={() => console.log('custom onPrevious handler')} />
        <CreateFullPageStep title="Empty" secondaryLabel="Optional" description="Empty step for demonstration purposes" onPrevious={() => console.log('custom onPrevious handler')} />
        <CreateFullPageStep className={\`\${storyClass}__step-fieldset--no-label\`} title="Core configuration" description="Here is an example description for the 'Core configuration' step." secondaryLabel="Optional" onPrevious={() => console.log('custom onPrevious handler')}>
          <Grid>
            <Column xlg={5} lg={5} md={4} sm={4}>
              <Grid>
                <Column xlg={5} lg={5} md={4} sm={4}>
                  <TextInput id="test-2" invalidText="A valid value is required" labelText="Topic name (optional)" placeholder="Enter topic name" />
                </Column>

                <Column span={3}>
                  <NumberInput id="test-3" invalidText="Number is not valid" label="Label (optional)" max={100} min={0} step={10} value={0} iconDescription="Choose a number" />

                  <NumberInput id="test-4" invalidText="Number is not valid" label="Label (optional)" max={100} min={0} step={10} value={0} iconDescription="Choose a number" />
                </Column>

                <Column xlg={5} lg={5} md={4} sm={4}>
                  <TextInput id="test-5" invalidText="A valid value is required" labelText="Minimum in-sync replicas (optional)" placeholder="Enter topic name" />
                </Column>
              </Grid>
            </Column>
          </Grid>
        </CreateFullPageStep>

        <CreateFullPageStep title="Message retention" subtitle="This is how many copies of a topic will be made for high availability" description="The partitions of each topic can be replicated across a configurable number of brokers" onPrevious={() => console.log('custom onPrevious handler')}>
          <Grid>
            <Column span={100}>
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
}`,...T.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  const carbonPrefix = usePrefix();
  const [textInput, setTextInput] = useState('');
  const [hasSubmitError, setHasSubmitError] = useState(false);
  const [shouldReject, setShouldReject] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [simulatedDelay] = useState(750);
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
                <TextInput id="test-6" invalidText="A valid value is required" labelText="Topic name" placeholder="Enter topic name" onChange={e => {
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
            <Column span={50}>
              <h5 className={\`\${blockClass}__step-title\`}>
                Core configuration
              </h5>

              <h6 className={\`\${blockClass}__step-subtitle\`}>
                This is how long messages are retained before they are deleted.
              </h6>
            </Column>
          </Grid>

          <Grid>
            <Column xlg={8} lg={8} md={4} sm={4}>
              <FormGroup className={\`\${blockClass}__step-fieldset \${storyClass}__step-fieldset--label\`} legendText="Core configuration">
                <Grid>
                  <Column span={50}>
                    <p className={\`\${blockClass}__step-description \${storyClass}__step-description\`}>
                      If your messages are not read by a consumer within this
                      time, they will be missed.
                    </p>
                  </Column>

                  <Column xlg={5} lg={5} md={4} sm={4}>
                    <Grid>
                      <Column xlg={5} lg={5} md={4} sm={4}>
                        <TextInput id="test-7" invalidText="A valid value is required" labelText="Topic name (optional)" placeholder="Enter topic name" />
                      </Column>

                      <Column span={3}>
                        <NumberInput id="test-8" invalidText="Number is not valid" label="Label (optional)" max={100} min={0} step={10} value={0} iconDescription="Choose a number" />

                        <NumberInput id="test-9" invalidText="Number is not valid" label="Label (optional)" max={100} min={0} step={10} value={0} iconDescription="Choose a number" />
                      </Column>

                      <Column xlg={5} lg={5} md={4} sm={4}>
                        <TextInput id="test-10" invalidText="A valid value is required" labelText="Minimum in-sync replicas (optional)" placeholder="Enter topic name" />
                      </Column>
                    </Grid>
                  </Column>
                </Grid>
              </FormGroup>
            </Column>
          </Grid>
        </CreateFullPageStep>

        <CreateFullPageStep title="Message retention" subtitle="This is how many copies of a topic will be made for high availability" description="The partitions of each topic can be replicated across a configurable number of brokers.">
          <Grid>
            <Column span={100}>
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
}`,...E.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  const carbonPrefix = usePrefix();
  const [textInput, setTextInput] = useState('');
  const [hasSubmitError, setHasSubmitError] = useState(false);
  const [shouldReject, setShouldReject] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [simulatedDelay] = useState(750);
  const [shouldIncludeAdditionalStep, setShouldIncludeAdditionalStep] = useState(false);
  return <>
      <style>{\`.\${carbonPrefix}--modal { opacity: 0; }\`};</style>
      <CreateFullPage {...args}>
        <CreateFullPageStep className={\`\${storyClass}__step-fieldset--no-label\`} title="Partition" subtitle="One or more partitions make up a topic. A partition is an ordered list
        of messages." description={<>
              <span>
                Partitions are distributed across the brokers in order to
                increase the scalability of your topic. You can also use them to
                distribute messages across the members of a consumer group.
              </span>
              &nbsp;<Link href="#">Learn more.</Link>
            </>} onNext={() => {
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
              <TextInput id="test-1" invalidText="A valid value is required" labelText="Topic name" placeholder="Enter topic name" onChange={e => {
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
              <Checkbox labelText={\`Include additional step\`} id="include-additional-step-checkbox" onChange={(event, {
              checked
            }) => setShouldIncludeAdditionalStep(checked)} checked={shouldIncludeAdditionalStep} />
            </Column>
          </Grid>
        </CreateFullPageStep>
        <CreateFullPageStep title="Dynamic step" description="Example dynamic step" includeStep={shouldIncludeAdditionalStep} onPrevious={() => console.log('custom onPrevious handler')} />
        <CreateFullPageStep title="Empty" secondaryLabel="Optional" description="Empty step for demonstration purposes" onPrevious={() => console.log('custom onPrevious handler')} />
        <CreateFullPageStep className={\`\${storyClass}__step-fieldset--no-label\`} title="Core configuration" description="Here is an example description for the 'Core configuration' step." secondaryLabel="Optional" onPrevious={() => console.log('custom onPrevious handler')}>
          <Grid>
            <Column xlg={5} lg={5} md={4} sm={4}>
              <Grid>
                <Column xlg={5} lg={5} md={4} sm={4}>
                  <TextInput id="test-2" invalidText="A valid value is required" labelText="Topic name (optional)" placeholder="Enter topic name" />
                </Column>

                <Column span={3}>
                  <NumberInput id="test-3" invalidText="Number is not valid" label="Label (optional)" max={100} min={0} step={10} value={0} iconDescription="Choose a number" />

                  <NumberInput id="test-4" invalidText="Number is not valid" label="Label (optional)" max={100} min={0} step={10} value={0} iconDescription="Choose a number" />
                </Column>

                <Column xlg={5} lg={5} md={4} sm={4}>
                  <TextInput id="test-5" invalidText="A valid value is required" labelText="Minimum in-sync replicas (optional)" placeholder="Enter topic name" />
                </Column>
              </Grid>
            </Column>
          </Grid>
        </CreateFullPageStep>

        <CreateFullPageStep title="Message retention" subtitle="This is how many copies of a topic will be made for high availability" description="The partitions of each topic can be replicated across a configurable number of brokers" onPrevious={() => console.log('custom onPrevious handler')}>
          <Grid>
            <Column span={100}>
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
}`,...P.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  const [textInput, setTextInput] = useState('');
  const [isInvalid, setIsInvalid] = useState(true);
  const [isFirstStepInvalid, setIsFirstStepInvalid] = useState(true);
  return <CreateFullPage {...args}>
      <CreateFullPageStep title="Partition" subtitle="One or more partitions make up a topic. A partition is an ordered list
        of messages." invalid={isFirstStepInvalid} disableSubmit={isFirstStepInvalid}>
        <Grid>
          <Column xlg={5} lg={5} md={4} sm={4}>
            <TextInput id="test-6" invalidText="A valid value is required" labelText="Topic name" placeholder="Enter topic name" onChange={e => {
            setTextInput(e.target.value);
            setIsInvalid(e.target.value ? false : true);
            setIsFirstStepInvalid(e.target.value ? false : true);
          }} onBlur={() => {
            textInput.length === 0 && setIsInvalid(true);
          }} invalid={isInvalid} />
          </Column>
        </Grid>
      </CreateFullPageStep>
      <CreateFullPageStep title="Core Configuration">
        <Grid>
          <Column xlg={5} lg={5} md={4} sm={4}>
            Test step
          </Column>
        </Grid>
      </CreateFullPageStep>
    </CreateFullPage>;
}`,...I.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  const carbonPrefix = usePrefix();
  const [textInput, setTextInput] = useState('');
  const [hasSubmitError, setHasSubmitError] = useState(false);
  const [shouldReject, setShouldReject] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [simulatedDelay] = useState(750);
  const [shouldIncludeAdditionalStep, setShouldIncludeAdditionalStep] = useState(false);
  const [isSideNavExpanded, setIsSideNavExpanded] = useState(false);
  return <>
      <style>{\`.\${carbonPrefix}--modal { opacity: 0; }\`};</style>
      <Header aria-label="IBM Platform Name">
        <HeaderMenuButton aria-label="Open menu" isCollapsible onClick={() => {
        setIsSideNavExpanded(prev => !prev);
      }} isActive={isSideNavExpanded} />
        <HeaderName href="#" prefix="IBM">
          Products application
        </HeaderName>
        <SideNav aria-label="Side navigation" expanded={isSideNavExpanded} isFixedNav>
          <SideNavItems>
            <SideNavLink href="https://pages.github.ibm.com/carbon/ibm-products/" target="_blank">
              Sample link: Carbon for IBM Products
            </SideNavLink>
          </SideNavItems>
        </SideNav>
      </Header>
      <div className={\`\${storyClass}__content-container \${storyClass}__content-container--with-global-header\`}>
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
                <TextInput id="test-1" invalidText="A valid value is required" labelText="Topic name" placeholder="Enter topic name" onChange={e => {
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
                <Checkbox labelText={\`Include additional step\`} id="include-additional-step-checkbox" onChange={(event, {
                checked
              }) => setShouldIncludeAdditionalStep(checked)} checked={shouldIncludeAdditionalStep} />
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
                    <TextInput id="test-2" invalidText="A valid value is required" labelText="Topic name (optional)" placeholder="Enter topic name" />
                  </Column>

                  <Column span={3}>
                    <NumberInput id="test-3" invalidText="Number is not valid" label="Label (optional)" max={100} min={0} step={10} value={0} iconDescription="Choose a number" />

                    <NumberInput id="test-4" invalidText="Number is not valid" label="Label (optional)" max={100} min={0} step={10} value={0} iconDescription="Choose a number" />
                  </Column>

                  <Column xlg={5} lg={5} md={4} sm={4}>
                    <TextInput id="test-5" invalidText="A valid value is required" labelText="Minimum in-sync replicas (optional)" placeholder="Enter topic name" />
                  </Column>
                </Grid>
              </Column>
            </Grid>
          </CreateFullPageStep>

          <CreateFullPageStep title="Message retention" subtitle="This is how many copies of a topic will be made for high availability" description="The partitions of each topic can be replicated across a configurable number of brokers">
            <Grid>
              <Column span={100}>
                <RadioButtonGroup defaultSelected="standard" legend="Group Legend" name="radio-button-group" valueSelected="standard" orientation="vertical">
                  <RadioButton id="radio-1" labelText="Replication factor: 1" value="standard" />
                  <RadioButton id="radio-2" labelText="Replication factor: 2" value="default-selected" />
                  <RadioButton id="radio-3" labelText="Replication factor: 3" value="disabled" />
                </RadioButtonGroup>
              </Column>
            </Grid>
          </CreateFullPageStep>
        </CreateFullPage>
      </div>
    </>;
}`,...w.parameters?.docs?.source}}};const It=["createFullPage","createFullPageWithSections","createFullPageWithHeader","createFullPageWithStepInErrorState","createFullPageWithGlobalHeader"];export{It as __namedExportsOrder,T as createFullPage,w as createFullPageWithGlobalHeader,P as createFullPageWithHeader,E as createFullPageWithSections,I as createFullPageWithStepInErrorState,Pt as default};
//# sourceMappingURL=CreateFullPage.stories-CBmJ8iao.js.map
