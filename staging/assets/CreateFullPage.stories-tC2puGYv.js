import{e,r as a}from"./index-BOZkNhcz.js";import{a as H}from"./chunk-D5ZWXAHU-DlerbUHg.js";import{b as $}from"./index--clQM3eT.js";import{C as ne}from"./Checkbox-BkhXuVvJ.js";import{F as j}from"./FormGroup-C9yKEUD9.js";import{G as n}from"./Grid-D2-CuTqT.js";import{C as t}from"./Column-DDtOIyjn.js";import{L as oe}from"./Link-BFsW3ySJ.js";import{I as B}from"./Notification-Dl7Wew9T.js";import{N as I}from"./NumberInput-wLF2-I7y.js";import{R as g}from"./RadioButton-BG56v3Z_.js";import{R as L}from"./RadioButtonGroup-BNG-Ca3n.js";import{T as O}from"./Toggle-BZq8z3oA.js";import{H as re,a as se}from"./HeaderName-ui400tp1.js";import{H as de}from"./HeaderMenuButton-BHsqmEhd.js";import{S as ue,a as ce}from"./SideNavItems-DxQHRaDG.js";import{S as pe}from"./SideNavLink-DOdubiZO.js";import{D}from"./DefinitionTooltip-Dmd5thZA.js";import{T as c}from"./TextInput-CiRlUEc0.js";import{s as me,C as w,a as i}from"./_storybook-styles-m31duoPn.js";import{p as be}from"./settings-BYgtfLKl.js";import{S as ge}from"./StoryDocsPage-DUYNgJVx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CtRu48qb.js";import"./index-hBZdtWkn.js";import"./index-2uioG_CI.js";import"./Text-C-NQiyV2.js";import"./bucket-18-Dly-sSmK.js";import"./index-YZUn1U4D.js";import"./bucket-9-C6VBS02H.js";import"./bucket-6-B5NNCZ27.js";import"./useNormalizedInputProps-BDKhkbhJ.js";import"./FormContext-qEw5DNxz.js";import"./bucket-16-BFXGSpzc.js";import"./bucket-0-tjTgXQWL.js";import"./mergeRefs-CTUecegF.js";import"./useControllableState-BHFQnaNh.js";import"./Link-D3FAVEj-.js";import"./bucket-11-BtP8_QA8.js";import"./index-CtW6Lsnp.js";import"./useMatchMedia-mREA3gfT.js";import"./SideNavLinkText-DJBY9HK8.js";import"./useAnnouncer-Dwt0jqXi.js";import"./ComposedModal-B5GOofnJ.js";import"./index-_87NmGAs.js";import"./LayerContext-DxTbsTfh.js";import"./ButtonSet-BHSafAHF.js";import"./InlineLoading-CRp3J8hh.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-DuCohhwL.js";import"./events-OVwOsPzJ.js";import"./Form-DpO5UFRB.js";import"./props-helper-BNocl_Zr.js";import"./BreadcrumbWithOverflow-B7vzCo7s.js";import"./useResizeObserver-DcNhBpO-.js";import"./BreadcrumbItem-dK65A63C.js";import"./bucket-12-BQFRxjkG.js";import"./MenuItem-BSeNOHR5.js";import"./useAttachedMenu-BS0JXRSz.js";import"./bucket-2-rFuAlaTW.js";import"./index-0E3e6jj2.js";import"./uuidv4-BN2rGLQG.js";import"./TooltipTrigger-TH7VaB48.js";import"./devtools-BSXGZlBP.js";import"./lastIndexInArray-CSk7ldvF.js";import"./wait-CTNFjQS8.js";import"./ProgressIndicator-XE1PKxnq.js";import"./usePreviousValue-BEwlonP-.js";import"./ActionSet-UhZB57-y.js";import"./index-KgSg3jcr.js";import"./iframe--Hb3m1kv.js";import"./index-CO8sV34W.js";import"./index-ogSvIofg.js";import"./story-helper-DEC8H8IF.js";const ie=()=>e.createElement(ge,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/create-flows/usage/#full-page",blocks:[{description:`There are **2** components that make up a Create Full Page component, which can
be used in unison to create the desired look, or flow. Please note, to utilize
the Create Full Page component, you'll need to have a minimum of two steps. If
you are looking for a one step creation flow, consider Create Tearsheet, Create
Side Panel, or Create Modal.`},{story:C,description:"This is used when you have one section per step. This can be created by passing\nin the overall `<CreateFullPage />` component and the `<CreateFullPageStep />`\ncomponent with form items as children:\n",source:{code:`<CreateFullPage {...props}>
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
    </CreateFullPage>`}},{story:T,description:"This is used when you have several sections per step. This can be created by\npassing in the overall `<CreateFullPage />` component and the\n`<CreateFullPageStep />` component for the first `section`. All additional\n`sections` must be passed in as children, as shown below:",source:{code:`<CreateFullPageStep
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
</CreateFullPageStep>`}},{story:E,description:"This is used when you want to show a header title and breadcrumbs. This can be created by\npassing in a title or breadcrumbs to the `<CreateFullPage />` component  as shown below:",source:{code:`<CreateFullPage
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
</CreateFullPage>`}},{story:P,description:"Passing an invalid prop to the step will show up an error icon on the progress indicator step indicating an error state in that step",source:{code:`<CreateFullPage {...createFullPageProps}>
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
};`}},{title:"Class names",description:"Additionally, to get the preferred styling when including your own children as\nsections, you can utilize the below included class names.\n\n| Class name                                           | Element     | Features                                                   |\n| ---------------------------------------------------- | ----------- | ---------------------------------------------------------- |\n| `#{$pkg-prefix}--create-full-page__step-title`       | title       | `productive-heading-04` & `margin-bottom` of `$spacing-05` |\n| `#{$pkg-prefix}--create-full-page__step-subtitle`    | subtitle    | `productive-heading-01` & `margin-bottom` of `$spacing-03` |\n| `#{$pkg-prefix}--create-full-page__step-description` | description | `body-long-01` & `margin-bottom` of `$spacing-06`          |\n| `#{$pkg-prefix}--create-full-page__step-fieldset`    | fieldset    | `margin-bottom` of `$spacing-05` to all children elements  |\n| `#{$pkg-prefix}--create-full-page__section-divider`  | divider     | Includes a `1px` divider line inside the `main` content    |\n"}]});ie.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const l="create-full-page-stories",v=`${be.prefix}--create-full-page`,G={"No breadcrumb":null,"A single breadcrumb":[{href:"/",key:"0",label:"Home page"}],"Two breadcrumbs":[{key:"0",href:"/",label:"Home page"},{key:"1",href:"/",label:"Application name"}]},Dt={title:"IBM Products/Patterns/Create flows/CreateFullPage",component:w,tags:["autodocs"],parameters:{styles:me,layout:"fullscreen",docs:{page:ie},controls:{sort:"requiredFirst"},percy:{waitForSelector:`button.${v}__create-button`}},decorators:[o=>e.createElement("div",{className:`${l}__viewport`},o())],argTypes:{breadcrumbs:{control:{type:"select",labels:Object.keys(G)},options:Object.values(G).map((o,p)=>p),mapping:Object.values(G)},children:{control:!1}}},R={secondaryTitle:"Create topic",nextButtonText:"Next",backButtonText:"Back",cancelButtonText:"Cancel",submitButtonText:"Create",modalTitle:"Are you sure you want to cancel?",modalDescription:"If you cancel, the information you have entered won't be saved.",modalDangerButtonText:"Cancel partition",modalSecondaryButtonText:"Return to form",onClickInfluencerStep:o=>console.log("Step: ",o),onRequestSubmit:H("Submit handler called"),onClose:H("Close handler called")},le=({...o})=>{const p=$(),[u,x]=a.useState(""),[h,r]=a.useState(!1),[S,m]=a.useState(!1),[y,s]=a.useState(!1),[k]=a.useState(750),[d,F]=a.useState(!1);return e.createElement(e.Fragment,null,e.createElement("style",null,`.${p}--modal { opacity: 0; }`,";"),e.createElement(w,{...o},e.createElement(i,{className:`${l}__step-fieldset--no-label`,title:"Partition",subtitle:`One or more partitions make up a topic. A partition is an ordered list
        of messages.`,description:e.createElement(e.Fragment,null,e.createElement("span",null,"Partitions are distributed across the brokers in order to increase the scalability of your topic. You can also use them to distribute messages across the members of a consumer group.")," ",e.createElement(oe,{href:"#"},"Learn more.")),onNext:()=>new Promise((b,N)=>{setTimeout(()=>{S&&(r(!0),N()),s(!1),b()},k)}),disableSubmit:!u},e.createElement(n,null,e.createElement(t,{xlg:5,lg:5,md:4,sm:4},e.createElement(c,{id:"test-1",invalidText:"A valid value is required",labelText:"Topic name",placeholder:"Enter topic name",onChange:b=>{x(b.target.value),s(!1)},onBlur:()=>{u.length===0&&s(!0)},invalid:y}),h&&e.createElement(B,{lowContrast:!0,kind:"error",title:"Error",subtitle:"Resolve errors to continue",onClose:()=>r(!1)}),e.createElement("div",null,e.createElement("div",null,e.createElement(D,{className:`${l}__error--text`,size:"sm",definition:"Once toggled on, an inline error notification will appear upon clicking next. This is an example usage of how to prevent the next step if some kind of error occurred during the `onNext` handler."},"Simulate error")),e.createElement(O,{labelText:"Simulate error",hideLabel:!0,id:"simulated-error-toggle",size:"sm",onToggle:b=>m(b)})),e.createElement(ne,{labelText:"Include additional step",id:"include-additional-step-checkbox",onChange:(b,{checked:N})=>F(N),checked:d})))),e.createElement(i,{title:"Dynamic step",description:"Example dynamic step",includeStep:d,onPrevious:()=>console.log("custom onPrevious handler")}),e.createElement(i,{title:"Empty",secondaryLabel:"Optional",description:"Empty step for demonstration purposes",onPrevious:()=>console.log("custom onPrevious handler")}),e.createElement(i,{className:`${l}__step-fieldset--no-label`,title:"Core configuration",description:"Here is an example description for the 'Core configuration' step.",secondaryLabel:"Optional",onPrevious:()=>console.log("custom onPrevious handler")},e.createElement(n,null,e.createElement(t,{xlg:5,lg:5,md:4,sm:4},e.createElement(n,null,e.createElement(t,{xlg:5,lg:5,md:4,sm:4},e.createElement(c,{id:"test-2",invalidText:"A valid value is required",labelText:"Topic name (optional)",placeholder:"Enter topic name"})),e.createElement(t,{span:3},e.createElement(I,{id:"test-3",invalidText:"Number is not valid",label:"Label (optional)",max:100,min:0,step:10,value:0,iconDescription:"Choose a number"}),e.createElement(I,{id:"test-4",invalidText:"Number is not valid",label:"Label (optional)",max:100,min:0,step:10,value:0,iconDescription:"Choose a number"})),e.createElement(t,{xlg:5,lg:5,md:4,sm:4},e.createElement(c,{id:"test-5",invalidText:"A valid value is required",labelText:"Minimum in-sync replicas (optional)",placeholder:"Enter topic name"})))))),e.createElement(i,{title:"Message retention",subtitle:"This is how many copies of a topic will be made for high availability",description:"The partitions of each topic can be replicated across a configurable number of brokers",onPrevious:()=>console.log("custom onPrevious handler")},e.createElement(n,null,e.createElement(t,{span:100},e.createElement(L,{defaultSelected:"standard",legend:"Group Legend",name:"radio-button-group",valueSelected:"standard",orientation:"vertical"},e.createElement(g,{id:"radio-1",labelText:"Replication factor: 1",value:"standard"}),e.createElement(g,{id:"radio-2",labelText:"Replication factor: 2",value:"default-selected"}),e.createElement(g,{id:"radio-3",labelText:"Replication factor: 3",value:"disabled"})))))))},he=({...o})=>{const p=$(),[u,x]=a.useState(""),[h,r]=a.useState(!1),[S,m]=a.useState(!1),[y,s]=a.useState(!1),[k]=a.useState(750);return e.createElement(e.Fragment,null,e.createElement("style",null,`.${p}--modal { opacity: 0; }`,";"),e.createElement(w,{className:`${v}`,...o},e.createElement(i,{title:"Partition",subtitle:`One or more partitions make up a topic. A partition is an ordered list
        of messages.`,description:`Partitions are distributed across the brokers in order to increase the
        scalability of your topic. You can also use them to distribute
        messages across the members of a consumer group.`,onNext:()=>new Promise((d,F)=>{setTimeout(()=>{S&&(r(!0),F()),s(!1),d()},k)}),disableSubmit:!u},e.createElement(n,null,e.createElement(t,{xlg:5,lg:5,md:4,sm:4},e.createElement(j,{className:`${v}__step-fieldset ${l}__step-fieldset--label`,legendText:"Partition"},e.createElement(c,{id:"test-6",invalidText:"A valid value is required",labelText:"Topic name",placeholder:"Enter topic name",onChange:d=>{x(d.target.value),s(!1)},onBlur:()=>{u.length===0&&s(!0)},invalid:y}),h&&e.createElement(B,{lowContrast:!0,kind:"error",title:"Error",subtitle:"Resolve errors to continue",onClose:()=>r(!1)}),e.createElement("div",null,e.createElement("div",null,e.createElement(D,{className:`${l}__error--text`,size:"sm",definition:"Once toggled on, an inline error notification will appear upon clicking next. This is an example usage of how to prevent the next step if some kind of error occurred during the `onNext` handler."},"Simulate error")),e.createElement(O,{labelText:"Simulate error",hideLabel:!0,id:"simulated-error-toggle",size:"sm",onToggle:d=>m(d)}))))),e.createElement("span",{className:`${v}__section-divider`}),e.createElement(n,null,e.createElement(t,{span:50},e.createElement("h5",{className:`${v}__step-title`},"Core configuration"),e.createElement("h6",{className:`${v}__step-subtitle`},"This is how long messages are retained before they are deleted."))),e.createElement(n,null,e.createElement(t,{xlg:8,lg:8,md:4,sm:4},e.createElement(j,{className:`${v}__step-fieldset ${l}__step-fieldset--label`,legendText:"Core configuration"},e.createElement(n,null,e.createElement(t,{span:50},e.createElement("p",{className:`${v}__step-description ${l}__step-description`},"If your messages are not read by a consumer within this time, they will be missed.")),e.createElement(t,{xlg:5,lg:5,md:4,sm:4},e.createElement(n,null,e.createElement(t,{xlg:5,lg:5,md:4,sm:4},e.createElement(c,{id:"test-7",invalidText:"A valid value is required",labelText:"Topic name (optional)",placeholder:"Enter topic name"})),e.createElement(t,{span:3},e.createElement(I,{id:"test-8",invalidText:"Number is not valid",label:"Label (optional)",max:100,min:0,step:10,value:0,iconDescription:"Choose a number"}),e.createElement(I,{id:"test-9",invalidText:"Number is not valid",label:"Label (optional)",max:100,min:0,step:10,value:0,iconDescription:"Choose a number"})),e.createElement(t,{xlg:5,lg:5,md:4,sm:4},e.createElement(c,{id:"test-10",invalidText:"A valid value is required",labelText:"Minimum in-sync replicas (optional)",placeholder:"Enter topic name"}))))))))),e.createElement(i,{title:"Message retention",subtitle:"This is how many copies of a topic will be made for high availability",description:"The partitions of each topic can be replicated across a configurable number of brokers."},e.createElement(n,null,e.createElement(t,{span:100},e.createElement(L,{defaultSelected:"standard",legend:"Group Legend",name:"radio-button-group",valueSelected:"standard",orientation:"vertical"},e.createElement(g,{id:"radio-4",labelText:"Replication factor: 1",value:"standard"}),e.createElement(g,{id:"radio-5",labelText:"Replication factor: 2",value:"default-selected"}),e.createElement(g,{id:"radio-6",labelText:"Replication factor: 3",value:"disabled"})))))))},fe=({...o})=>{const[p,u]=a.useState(""),[x,h]=a.useState(!0),[r,S]=a.useState(!0);return e.createElement(w,{...o},e.createElement(i,{title:"Partition",subtitle:`One or more partitions make up a topic. A partition is an ordered list
        of messages.`,invalid:r,disableSubmit:r},e.createElement(n,null,e.createElement(t,{xlg:5,lg:5,md:4,sm:4},e.createElement(c,{id:"test-6",invalidText:"A valid value is required",labelText:"Topic name",placeholder:"Enter topic name",onChange:m=>{u(m.target.value),h(!m.target.value),S(!m.target.value)},onBlur:()=>{p.length===0&&h(!0)},invalid:x})))),e.createElement(i,{title:"Core Configuration"},e.createElement(n,null,e.createElement(t,{xlg:5,lg:5,md:4,sm:4},"Test step"))))},C=le.bind({});C.args={...R};const T=he.bind({});T.args={...R};const E=le.bind({});E.args={...R,title:"Page title",breadcrumbsOverflowAriaLabel:"Open and close additional breadcrumb item list.",breadcrumbs:[{key:"0",label:"Breadcrumb 1",href:"/",title:"home page"},{key:"1",label:"Breadcrumb 2",href:"/"},{key:"2",label:"Breadcrumb 3",href:"/"},{key:"3",label:"Breadcrumb 4",isCurrentPage:!0}],maxVisibleBreadcrumbs:3,breadcrumbOverflowTooltipAlign:"right"};const P=fe.bind({});P.args={...R};const ve=({...o})=>{const p=$(),[u,x]=a.useState(""),[h,r]=a.useState(!1),[S,m]=a.useState(!1),[y,s]=a.useState(!1),[k]=a.useState(750),[d,F]=a.useState(!1),[b,N]=a.useState(!1);return e.createElement(e.Fragment,null,e.createElement("style",null,`.${p}--modal { opacity: 0; }`,";"),e.createElement(re,{"aria-label":"IBM Platform Name"},e.createElement(de,{"aria-label":"Open menu",isCollapsible:!0,onClick:()=>{N(f=>!f)},isActive:b}),e.createElement(se,{href:"#",prefix:"IBM"},"Products application"),e.createElement(ue,{"aria-label":"Side navigation",expanded:b,isFixedNav:!0},e.createElement(ce,null,e.createElement(pe,{href:"https://pages.github.ibm.com/carbon/ibm-products/",target:"_blank"},"Sample link: Carbon for IBM Products")))),e.createElement("div",{className:`${l}__content-container ${l}__content-container--with-global-header`},e.createElement(w,{...o},e.createElement(i,{className:`${l}__step-fieldset--no-label`,title:"Partition",subtitle:`One or more partitions make up a topic. A partition is an ordered list
        of messages.`,description:`Partitions are distributed across the brokers in order to increase the
        scalability of your topic. You can also use them to distribute
        messages across the members of a consumer group.`,onNext:()=>new Promise((f,A)=>{setTimeout(()=>{S&&(r(!0),A()),s(!1),f()},k)}),disableSubmit:!u},e.createElement(n,null,e.createElement(t,{xlg:5,lg:5,md:4,sm:4},e.createElement(c,{id:"test-1",invalidText:"A valid value is required",labelText:"Topic name",placeholder:"Enter topic name",onChange:f=>{x(f.target.value),s(!1)},onBlur:()=>{u.length===0&&s(!0)},invalid:y}),h&&e.createElement(B,{lowContrast:!0,kind:"error",title:"Error",subtitle:"Resolve errors to continue",onClose:()=>r(!1)}),e.createElement("div",null,e.createElement("div",null,e.createElement(D,{className:`${l}__error--text`,size:"sm",definition:"Once toggled on, an inline error notification will appear upon clicking next. This is an example usage of how to prevent the next step if some kind of error occurred during the `onNext` handler."},"Simulate error")),e.createElement(O,{labelText:"Simulate error",hideLabel:!0,id:"simulated-error-toggle",size:"sm",onToggle:f=>m(f)})),e.createElement(ne,{labelText:"Include additional step",id:"include-additional-step-checkbox",onChange:(f,{checked:A})=>F(A),checked:d})))),e.createElement(i,{title:"Dynamic step",description:"Example dynamic step",includeStep:d}),e.createElement(i,{title:"Empty",secondaryLabel:"Optional",description:"Empty step for demonstration purposes"}),e.createElement(i,{className:`${l}__step-fieldset--no-label`,title:"Core configuration",description:"Here is an example description for the 'Core configuration' step.",secondaryLabel:"Optional"},e.createElement(n,null,e.createElement(t,{xlg:5,lg:5,md:4,sm:4},e.createElement(n,null,e.createElement(t,{xlg:5,lg:5,md:4,sm:4},e.createElement(c,{id:"test-2",invalidText:"A valid value is required",labelText:"Topic name (optional)",placeholder:"Enter topic name"})),e.createElement(t,{span:3},e.createElement(I,{id:"test-3",invalidText:"Number is not valid",label:"Label (optional)",max:100,min:0,step:10,value:0,iconDescription:"Choose a number"}),e.createElement(I,{id:"test-4",invalidText:"Number is not valid",label:"Label (optional)",max:100,min:0,step:10,value:0,iconDescription:"Choose a number"})),e.createElement(t,{xlg:5,lg:5,md:4,sm:4},e.createElement(c,{id:"test-5",invalidText:"A valid value is required",labelText:"Minimum in-sync replicas (optional)",placeholder:"Enter topic name"})))))),e.createElement(i,{title:"Message retention",subtitle:"This is how many copies of a topic will be made for high availability",description:"The partitions of each topic can be replicated across a configurable number of brokers"},e.createElement(n,null,e.createElement(t,{span:100},e.createElement(L,{defaultSelected:"standard",legend:"Group Legend",name:"radio-button-group",valueSelected:"standard",orientation:"vertical"},e.createElement(g,{id:"radio-1",labelText:"Replication factor: 1",value:"standard"}),e.createElement(g,{id:"radio-2",labelText:"Replication factor: 2",value:"default-selected"}),e.createElement(g,{id:"radio-3",labelText:"Replication factor: 3",value:"disabled"}))))))))},_=ve.bind({});_.args={...R,title:"Page title",breadcrumbsOverflowAriaLabel:"Open and close additional breadcrumb item list.",breadcrumbs:[{key:"0",label:"Breadcrumb 1",href:"/",title:"home page"},{key:"1",label:"Breadcrumb 2",href:"/"},{key:"2",label:"Breadcrumb 3",href:"/"},{key:"3",label:"Breadcrumb 4",isCurrentPage:!0}],maxVisibleBreadcrumbs:3,breadcrumbOverflowTooltipAlign:"right"};var q,M,z;C.parameters={...C.parameters,docs:{...(q=C.parameters)==null?void 0:q.docs,source:{originalSource:`({
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
}`,...(z=(M=C.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var W,Y,V;T.parameters={...T.parameters,docs:{...(W=T.parameters)==null?void 0:W.docs,source:{originalSource:`({
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
}`,...(V=(Y=T.parameters)==null?void 0:Y.docs)==null?void 0:V.source}}};var U,J,K;E.parameters={...E.parameters,docs:{...(U=E.parameters)==null?void 0:U.docs,source:{originalSource:`({
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
}`,...(K=(J=E.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Z;P.parameters={...P.parameters,docs:{...(Q=P.parameters)==null?void 0:Q.docs,source:{originalSource:`({
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
}`,...(Z=(X=P.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,ae;_.parameters={..._.parameters,docs:{...(ee=_.parameters)==null?void 0:ee.docs,source:{originalSource:`({
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
}`,...(ae=(te=_.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};const Ht=["createFullPage","createFullPageWithSections","createFullPageWithHeader","createFullPageWithStepInErrorState","createFullPageWithGlobalHeader"];export{Ht as __namedExportsOrder,C as createFullPage,_ as createFullPageWithGlobalHeader,E as createFullPageWithHeader,T as createFullPageWithSections,P as createFullPageWithStepInErrorState,Dt as default};
