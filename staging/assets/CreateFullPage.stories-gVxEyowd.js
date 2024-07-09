import{j as e,p as le}from"./settings-BiUEFdm2.js";import{r as i}from"./index-BwDkhjyp.js";import{a as O}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{u as G}from"./deprecate-D9ms-jbM.js";import{C as ne}from"./Checkbox-78nhbV8e.js";import{F as H}from"./FormGroup-CVk9XJ_R.js";import{G as n}from"./Grid-sFQW4EYz.js";import{C as t}from"./Column-joQvaXDX.js";import{L as se}from"./Link-CxgVlihf.js";import{I as $}from"./Notification-DMQAeU5X.js";import{N as P}from"./NumberInput-CdfmSC9K.js";import{R as h}from"./RadioButton-RZ6IdjNG.js";import{R as B}from"./RadioButtonGroup-Dyjy7gd2.js";import{T as L}from"./Toggle-DdCAfBCT.js";import{H as re,a as de}from"./HeaderName-DQ5XwvUg.js";import{H as ue}from"./HeaderMenuButton-5Vd09Ps9.js";import{S as ce,a as pe}from"./SideNavItems-Cj-AZLVD.js";import{S as me}from"./SideNavLink-B9k5qkEu.js";import{D}from"./DefinitionTooltip-CGz-mKqM.js";import{T as c}from"./TextInput-CjYtA_nO.js";import{C as w,s as ge,a}from"./_storybook-styles-TV_svqEt.js";import{S as he}from"./StoryDocsPage-BuwgUq5r.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-Dk74W0Oi.js";import"./events-Bq7WR1mU.js";import"./index-BONylQH5.js";import"./v4-CQkTLCs1.js";import"./Text-_TFgs5hl.js";import"./bucket-17-CArjO86K.js";import"./index-gKY8typL.js";import"./bucket-5-BuK6y5Rd.js";import"./bucket-8-61DsWji_.js";import"./useNormalizedInputProps-DRpk_7sW.js";import"./FormContext-C7kRVu4t.js";import"./bucket-14-u3bYiptr.js";import"./bucket-0-D7rUCVax.js";import"./mergeRefs-CTUecegF.js";import"./useControllableState-DwpxGhsf.js";import"./Link-CeOVr8UJ.js";import"./bucket-10-CoUF9gTV.js";import"./useMatchMedia-w9z1Yjfq.js";import"./SideNavLinkText-B_TncfF_.js";import"./bucket-16-C-1D9aPX.js";import"./useAnnouncer-MW4fVOqQ.js";import"./devtools-BPcQvzXy.js";import"./ComposedModal-Ckm8JaZ3.js";import"./index-DcAOwtUU.js";import"./ButtonSet-CqsYbwZH.js";import"./InlineLoading-DEQVZSgg.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-CuszVIVc.js";import"./Form-Cl1Tfi_h.js";import"./lastIndexInArray-CI1JlX0P.js";import"./wait-CTNFjQS8.js";import"./ProgressIndicator-Cj-AlNDT.js";import"./props-helper-1oU9hECe.js";import"./SimpleHeader-C62aNXs1.js";import"./BreadcrumbWithOverflow-BOFtIDUR.js";import"./useResizeObserver-CYrpFlRY.js";import"./BreadcrumbItem-CKZpd8ZN.js";import"./bucket-11-S2aFzyL7.js";import"./index-B7Id7uWF.js";import"./useAttachedMenu-BGzc4N1_.js";import"./createClassWrapper-EbB2Yi8H.js";import"./uuidv4-BQrI85uz.js";import"./TooltipTrigger-BUBh9TEp.js";import"./usePreviousValue-DDnp_zt4.js";import"./ActionSet-DPSyJhT2.js";import"./index-CDYzkStP.js";import"./iframe-j3s5A4v9.js";import"../sb-preview/runtime.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-BjQFKvNH.js";import"./isSymbol-BZYRlrjc.js";import"./index-DrFu-skq.js";import"./story-helper-YTYnELA9.js";import"./tslib.es6-B4_xh3D5.js";const ae=()=>e.jsx(he,{altGuidelinesHref:"https://pages.github.ibm.com/cdai-design/pal/patterns/creation-flows/usage#full-page",blocks:[{description:`There are **2** components that make up a Create Full Page component, which can
be used in unison to create the desired look, or flow. Please note, to utilize
the Create Full Page component, you'll need to have a minimum of two steps. If
you are looking for a one step creation flow, consider Create Tearsheet, Create
Side Panel, or Create Modal.`},{story:S,description:"This is used when you have one section per step. This can be created by passing\nin the overall `<CreateFullPage />` component and the `<CreateFullPageStep />`\ncomponent with form items as children:\n",source:{code:`<CreateFullPage {...props}>
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
</CreateFullPageStep>`}},{story:I,description:"This is used when you want to show a header title and breadcrumbs. This can be created by\npassing in a title or breadcrumbs to the `<CreateFullPage />` component  as shown below:",source:{code:`<CreateFullPage
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
</CreateFullPage>`}},{story:y,description:"Passing an invalid prop to the step will show up an error icon on the progress indicator step indicating an error state in that step",source:{code:`<CreateFullPage {...createFullPageProps}>
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
};`}},{title:"Class names",description:"Additionally, to get the preferred styling when including your own children as\nsections, you can utilize the below included class names.\n\n| Class name                                           | Element     | Features                                                   |\n| ---------------------------------------------------- | ----------- | ---------------------------------------------------------- |\n| `#{$pkg-prefix}--create-full-page__step-title`       | title       | `productive-heading-04` & `margin-bottom` of `$spacing-05` |\n| `#{$pkg-prefix}--create-full-page__step-subtitle`    | subtitle    | `productive-heading-01` & `margin-bottom` of `$spacing-03` |\n| `#{$pkg-prefix}--create-full-page__step-description` | description | `body-long-01` & `margin-bottom` of `$spacing-06`          |\n| `#{$pkg-prefix}--create-full-page__step-fieldset`    | fieldset    | `margin-bottom` of `$spacing-05` to all children elements  |\n| `#{$pkg-prefix}--create-full-page__section-divider`  | divider     | Includes a `1px` divider line inside the `main` content    |\n"}]});ae.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const o="create-full-page-stories",C=`${le.prefix}--create-full-page`,A={"No breadcrumb":null,"A single breadcrumb":[{href:"/",key:"0",label:"Home page"}],"Two breadcrumbs":[{key:"0",href:"/",label:"Home page"},{key:"1",href:"/",label:"Application name"}]},zt={title:"IBM Products/Patterns/Create flows/CreateFullPage",component:w,tags:["autodocs"],parameters:{styles:ge,layout:"fullscreen",docs:{page:ae},controls:{sort:"requiredFirst"}},decorators:[d=>e.jsx("div",{className:`${o}__viewport`,children:d()})],argTypes:{breadcrumbs:{control:{type:"select",labels:Object.keys(A)},options:Object.values(A).map((d,p)=>p),mapping:Object.values(A)},children:{control:!1}}},E={secondaryTitle:"Create topic",nextButtonText:"Next",backButtonText:"Back",cancelButtonText:"Cancel",submitButtonText:"Create",modalTitle:"Are you sure you want to cancel?",modalDescription:"If you cancel, the information you have entered won't be saved.",modalDangerButtonText:"Cancel partition",modalSecondaryButtonText:"Return to form",onRequestSubmit:O("Submit handler called"),onClose:O("Close handler called")},oe=({...d})=>{const p=G(),[u,f]=i.useState(""),[b,l]=i.useState(!1),[v,m]=i.useState(!1),[j,s]=i.useState(!1),[k]=i.useState(750),[r,F]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs("style",{children:[`.${p}--modal { opacity: 0; }`,";"]}),e.jsxs(w,{...d,children:[e.jsx(a,{className:`${o}__step-fieldset--no-label`,title:"Partition",subtitle:`One or more partitions make up a topic. A partition is an ordered list
        of messages.`,description:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Partitions are distributed across the brokers in order to increase the scalability of your topic. You can also use them to distribute messages across the members of a consumer group."})," ",e.jsx(se,{href:"#",children:"Learn more."})]}),onNext:()=>new Promise((g,N)=>{setTimeout(()=>{v&&(l(!0),N()),s(!1),g()},k)}),disableSubmit:!u,children:e.jsx(n,{children:e.jsxs(t,{xlg:5,lg:5,md:4,sm:4,children:[e.jsx(c,{id:"test-1",invalidText:"A valid value is required",labelText:"Topic name",placeholder:"Enter topic name",onChange:g=>{f(g.target.value),s(!1)},onBlur:()=>{u.length===0&&s(!0)},invalid:j}),b&&e.jsx($,{lowContrast:!0,kind:"error",title:"Error",subtitle:"Resolve errors to continue",onClose:()=>l(!1)}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(D,{className:`${o}__error--text`,size:"sm",definition:"Once toggled on, an inline error notification will appear upon clicking next. This is an example usage of how to prevent the next step if some kind of error occurred during the `onNext` handler.",children:"Simulate error"})}),e.jsx(L,{id:"simulated-error-toggle",size:"sm",onToggle:g=>m(g)})]}),e.jsx(ne,{labelText:"Include additional step",id:"include-additional-step-checkbox",onChange:(g,{checked:N})=>F(N),checked:r})]})})}),e.jsx(a,{title:"Dynamic step",description:"Example dynamic step",includeStep:r}),e.jsx(a,{title:"Empty",secondaryLabel:"Optional",description:"Empty step for demonstration purposes"}),e.jsx(a,{className:`${o}__step-fieldset--no-label`,title:"Core configuration",description:"Here is an example description for the 'Core configuration' step.",secondaryLabel:"Optional",children:e.jsx(n,{children:e.jsx(t,{xlg:5,lg:5,md:4,sm:4,children:e.jsxs(n,{children:[e.jsx(t,{xlg:5,lg:5,md:4,sm:4,children:e.jsx(c,{id:"test-2",invalidText:"A valid value is required",labelText:"Topic name (optional)",placeholder:"Enter topic name"})}),e.jsxs(t,{span:3,children:[e.jsx(P,{id:"test-3",invalidText:"Number is not valid",label:"Label (optional)",max:100,min:0,step:10,value:0,iconDescription:"Choose a number"}),e.jsx(P,{id:"test-4",invalidText:"Number is not valid",label:"Label (optional)",max:100,min:0,step:10,value:0,iconDescription:"Choose a number"})]}),e.jsx(t,{xlg:5,lg:5,md:4,sm:4,children:e.jsx(c,{id:"test-5",invalidText:"A valid value is required",labelText:"Minimum in-sync replicas (optional)",placeholder:"Enter topic name"})})]})})})}),e.jsx(a,{title:"Message retention",subtitle:"This is how many copies of a topic will be made for high availability",description:"The partitions of each topic can be replicated across a configurable number of brokers",children:e.jsx(n,{children:e.jsx(t,{span:100,children:e.jsxs(B,{defaultSelected:"standard",legend:"Group Legend",name:"radio-button-group",valueSelected:"standard",orientation:"vertical",children:[e.jsx(h,{id:"radio-1",labelText:"Replication factor: 1",value:"standard"}),e.jsx(h,{id:"radio-2",labelText:"Replication factor: 2",value:"default-selected"}),e.jsx(h,{id:"radio-3",labelText:"Replication factor: 3",value:"disabled"})]})})})})]})]})},be=({...d})=>{const p=G(),[u,f]=i.useState(""),[b,l]=i.useState(!1),[v,m]=i.useState(!1),[j,s]=i.useState(!1),[k]=i.useState(750);return e.jsxs(e.Fragment,{children:[e.jsxs("style",{children:[`.${p}--modal { opacity: 0; }`,";"]}),e.jsxs(w,{className:`${C}`,...d,children:[e.jsxs(a,{title:"Partition",subtitle:`One or more partitions make up a topic. A partition is an ordered list
        of messages.`,description:`Partitions are distributed across the brokers in order to increase the
        scalability of your topic. You can also use them to distribute
        messages across the members of a consumer group.`,onNext:()=>new Promise((r,F)=>{setTimeout(()=>{v&&(l(!0),F()),s(!1),r()},k)}),disableSubmit:!u,children:[e.jsx(n,{children:e.jsx(t,{xlg:5,lg:5,md:4,sm:4,children:e.jsxs(H,{className:`${C}__step-fieldset ${o}__step-fieldset--label`,legendText:"Partition",children:[e.jsx(c,{id:"test-6",invalidText:"A valid value is required",labelText:"Topic name",placeholder:"Enter topic name",onChange:r=>{f(r.target.value),s(!1)},onBlur:()=>{u.length===0&&s(!0)},invalid:j}),b&&e.jsx($,{lowContrast:!0,kind:"error",title:"Error",subtitle:"Resolve errors to continue",onClose:()=>l(!1)}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(D,{className:`${o}__error--text`,size:"sm",definition:"Once toggled on, an inline error notification will appear upon clicking next. This is an example usage of how to prevent the next step if some kind of error occurred during the `onNext` handler.",children:"Simulate error"})}),e.jsx(L,{id:"simulated-error-toggle",size:"sm",onToggle:r=>m(r)})]})]})})}),e.jsx("span",{className:`${C}__section-divider`}),e.jsx(n,{children:e.jsxs(t,{span:50,children:[e.jsx("h5",{className:`${C}__step-title`,children:"Core configuration"}),e.jsx("h6",{className:`${C}__step-subtitle`,children:"This is how long messages are retained before they are deleted."})]})}),e.jsx(n,{children:e.jsx(t,{xlg:8,lg:8,md:4,sm:4,children:e.jsx(H,{className:`${C}__step-fieldset ${o}__step-fieldset--label`,legendText:"Core configuration",children:e.jsxs(n,{children:[e.jsx(t,{span:50,children:e.jsx("p",{className:`${C}__step-description ${o}__step-description`,children:"If your messages are not read by a consumer within this time, they will be missed."})}),e.jsx(t,{xlg:5,lg:5,md:4,sm:4,children:e.jsxs(n,{children:[e.jsx(t,{xlg:5,lg:5,md:4,sm:4,children:e.jsx(c,{id:"test-7",invalidText:"A valid value is required",labelText:"Topic name (optional)",placeholder:"Enter topic name"})}),e.jsxs(t,{span:3,children:[e.jsx(P,{id:"test-8",invalidText:"Number is not valid",label:"Label (optional)",max:100,min:0,step:10,value:0,iconDescription:"Choose a number"}),e.jsx(P,{id:"test-9",invalidText:"Number is not valid",label:"Label (optional)",max:100,min:0,step:10,value:0,iconDescription:"Choose a number"})]}),e.jsx(t,{xlg:5,lg:5,md:4,sm:4,children:e.jsx(c,{id:"test-10",invalidText:"A valid value is required",labelText:"Minimum in-sync replicas (optional)",placeholder:"Enter topic name"})})]})})]})})})})]}),e.jsx(a,{title:"Message retention",subtitle:"This is how many copies of a topic will be made for high availability",description:"The partitions of each topic can be replicated across a configurable number of brokers.",children:e.jsx(n,{children:e.jsx(t,{span:100,children:e.jsxs(B,{defaultSelected:"standard",legend:"Group Legend",name:"radio-button-group",valueSelected:"standard",orientation:"vertical",children:[e.jsx(h,{id:"radio-4",labelText:"Replication factor: 1",value:"standard"}),e.jsx(h,{id:"radio-5",labelText:"Replication factor: 2",value:"default-selected"}),e.jsx(h,{id:"radio-6",labelText:"Replication factor: 3",value:"disabled"})]})})})})]})]})},xe=({...d})=>{const[p,u]=i.useState(""),[f,b]=i.useState(!0),[l,v]=i.useState(!0);return e.jsxs(w,{...d,children:[e.jsx(a,{title:"Partition",subtitle:`One or more partitions make up a topic. A partition is an ordered list
        of messages.`,invalid:l,disableSubmit:l,children:e.jsx(n,{children:e.jsx(t,{xlg:5,lg:5,md:4,sm:4,children:e.jsx(c,{id:"test-6",invalidText:"A valid value is required",labelText:"Topic name",placeholder:"Enter topic name",onChange:m=>{u(m.target.value),b(!m.target.value),v(!m.target.value)},onBlur:()=>{p.length===0&&b(!0)},invalid:f})})})}),e.jsx(a,{title:"Core Configuration",children:e.jsx(n,{children:e.jsx(t,{xlg:5,lg:5,md:4,sm:4,children:"Test step"})})})]})},S=oe.bind({});S.args={...E};const T=be.bind({});T.args={...E};const I=oe.bind({});I.args={...E,title:"Page title",breadcrumbsOverflowAriaLabel:"Open and close additional breadcrumb item list.",breadcrumbs:[{key:"0",label:"Breadcrumb 1",href:"/",title:"home page"},{key:"1",label:"Breadcrumb 2",href:"/"},{key:"2",label:"Breadcrumb 3",href:"/"},{key:"3",label:"Breadcrumb 4",isCurrentPage:!0}],maxVisibleBreadcrumbs:3};const y=xe.bind({});y.args={...E};const fe=({...d})=>{const p=G(),[u,f]=i.useState(""),[b,l]=i.useState(!1),[v,m]=i.useState(!1),[j,s]=i.useState(!1),[k]=i.useState(750),[r,F]=i.useState(!1),[g,N]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs("style",{children:[`.${p}--modal { opacity: 0; }`,";"]}),e.jsxs(re,{"aria-label":"IBM Platform Name",children:[e.jsx(ue,{"aria-label":"Open menu",isCollapsible:!0,onClick:()=>{N(x=>!x)},isActive:g}),e.jsx(de,{href:"#",prefix:"IBM",children:"Products application"}),e.jsx(ce,{"aria-label":"Side navigation",expanded:g,isFixedNav:!0,children:e.jsx(pe,{children:e.jsx(me,{href:"https://pages.github.ibm.com/cdai-design/pal/",target:"_blank",children:"Sample link: Carbon for IBM Products"})})})]}),e.jsx("div",{className:`${o}__content-container ${o}__content-container--with-global-header`,children:e.jsxs(w,{...d,children:[e.jsx(a,{className:`${o}__step-fieldset--no-label`,title:"Partition",subtitle:`One or more partitions make up a topic. A partition is an ordered list
        of messages.`,description:`Partitions are distributed across the brokers in order to increase the
        scalability of your topic. You can also use them to distribute
        messages across the members of a consumer group.`,onNext:()=>new Promise((x,R)=>{setTimeout(()=>{v&&(l(!0),R()),s(!1),x()},k)}),disableSubmit:!u,children:e.jsx(n,{children:e.jsxs(t,{xlg:5,lg:5,md:4,sm:4,children:[e.jsx(c,{id:"test-1",invalidText:"A valid value is required",labelText:"Topic name",placeholder:"Enter topic name",onChange:x=>{f(x.target.value),s(!1)},onBlur:()=>{u.length===0&&s(!0)},invalid:j}),b&&e.jsx($,{lowContrast:!0,kind:"error",title:"Error",subtitle:"Resolve errors to continue",onClose:()=>l(!1)}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(D,{className:`${o}__error--text`,size:"sm",definition:"Once toggled on, an inline error notification will appear upon clicking next. This is an example usage of how to prevent the next step if some kind of error occurred during the `onNext` handler.",children:"Simulate error"})}),e.jsx(L,{id:"simulated-error-toggle",size:"sm",onToggle:x=>m(x)})]}),e.jsx(ne,{labelText:"Include additional step",id:"include-additional-step-checkbox",onChange:(x,{checked:R})=>F(R),checked:r})]})})}),e.jsx(a,{title:"Dynamic step",description:"Example dynamic step",includeStep:r}),e.jsx(a,{title:"Empty",secondaryLabel:"Optional",description:"Empty step for demonstration purposes"}),e.jsx(a,{className:`${o}__step-fieldset--no-label`,title:"Core configuration",description:"Here is an example description for the 'Core configuration' step.",secondaryLabel:"Optional",children:e.jsx(n,{children:e.jsx(t,{xlg:5,lg:5,md:4,sm:4,children:e.jsxs(n,{children:[e.jsx(t,{xlg:5,lg:5,md:4,sm:4,children:e.jsx(c,{id:"test-2",invalidText:"A valid value is required",labelText:"Topic name (optional)",placeholder:"Enter topic name"})}),e.jsxs(t,{span:3,children:[e.jsx(P,{id:"test-3",invalidText:"Number is not valid",label:"Label (optional)",max:100,min:0,step:10,value:0,iconDescription:"Choose a number"}),e.jsx(P,{id:"test-4",invalidText:"Number is not valid",label:"Label (optional)",max:100,min:0,step:10,value:0,iconDescription:"Choose a number"})]}),e.jsx(t,{xlg:5,lg:5,md:4,sm:4,children:e.jsx(c,{id:"test-5",invalidText:"A valid value is required",labelText:"Minimum in-sync replicas (optional)",placeholder:"Enter topic name"})})]})})})}),e.jsx(a,{title:"Message retention",subtitle:"This is how many copies of a topic will be made for high availability",description:"The partitions of each topic can be replicated across a configurable number of brokers",children:e.jsx(n,{children:e.jsx(t,{span:100,children:e.jsxs(B,{defaultSelected:"standard",legend:"Group Legend",name:"radio-button-group",valueSelected:"standard",orientation:"vertical",children:[e.jsx(h,{id:"radio-1",labelText:"Replication factor: 1",value:"standard"}),e.jsx(h,{id:"radio-2",labelText:"Replication factor: 2",value:"default-selected"}),e.jsx(h,{id:"radio-3",labelText:"Replication factor: 3",value:"disabled"})]})})})})]})})]})},_=fe.bind({});_.args={...E,title:"Page title",breadcrumbsOverflowAriaLabel:"Open and close additional breadcrumb item list.",breadcrumbs:[{key:"0",label:"Breadcrumb 1",href:"/",title:"home page"},{key:"1",label:"Breadcrumb 2",href:"/"},{key:"2",label:"Breadcrumb 3",href:"/"},{key:"3",label:"Breadcrumb 4",isCurrentPage:!0}],maxVisibleBreadcrumbs:3};var q,M,z;S.parameters={...S.parameters,docs:{...(q=S.parameters)==null?void 0:q.docs,source:{originalSource:`({
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
                <Toggle id="simulated-error-toggle" size="sm" onToggle={event => setShouldReject(event)} />
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
    </>;
}`,...(z=(M=S.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var W,Y,V;T.parameters={...T.parameters,docs:{...(W=T.parameters)==null?void 0:W.docs,source:{originalSource:`({
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
                  <Toggle id="simulated-error-toggle" size="sm" onToggle={event => setShouldReject(event)} />
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
}`,...(V=(Y=T.parameters)==null?void 0:Y.docs)==null?void 0:V.source}}};var U,J,K;I.parameters={...I.parameters,docs:{...(U=I.parameters)==null?void 0:U.docs,source:{originalSource:`({
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
                <Toggle id="simulated-error-toggle" size="sm" onToggle={event => setShouldReject(event)} />
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
    </>;
}`,...(K=(J=I.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Z;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`({
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
}`,...(Z=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,ie;_.parameters={..._.parameters,docs:{...(ee=_.parameters)==null?void 0:ee.docs,source:{originalSource:`({
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
            <SideNavLink href="https://pages.github.ibm.com/cdai-design/pal/" target="_blank">
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
                  <Toggle id="simulated-error-toggle" size="sm" onToggle={event => setShouldReject(event)} />
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
}`,...(ie=(te=_.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};const Wt=["createFullPage","createFullPageWithSections","createFullPageWithHeader","createFullPageWithStepInErrorState","createFullPageWithGlobalHeader"];export{Wt as __namedExportsOrder,S as createFullPage,_ as createFullPageWithGlobalHeader,I as createFullPageWithHeader,T as createFullPageWithSections,y as createFullPageWithStepInErrorState,zt as default};
