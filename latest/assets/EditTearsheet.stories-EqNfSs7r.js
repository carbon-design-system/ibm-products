import{e,r as o}from"./index-DzvNrmz8.js";import{E as k,a as r}from"./EditTearsheetForm-Bn5zBhYX.js";import{S as G}from"./StoryDocsPage-D9_Ykp8-.js";import{d as H}from"./index-5As4T26e.js";import{p as j,B as U}from"./settings-DbzZchXt.js";import{C as s}from"./Column-1L-H8Axx.js";import{I as W}from"./Notification-CB8F9TVs.js";import{N as Y}from"./NumberInput-B9uXi7jS.js";import{R as u}from"./RadioButton-CTt7PviF.js";import{R as J}from"./RadioButtonGroup-C22sI-DP.js";import{T as K}from"./Toggle-_4VkK34Z.js";import{T as a}from"./TextInput-eyoE_C-N.js";import{a as h}from"./index-B-lxVbXh.js";import{S as Q,s as X}from"./slug-BQoKUJ8d.js";import{A as Z}from"./index-DaecxxNR.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./FormGroup-DglN6MVK.js";import"./Grid-BZY738Do.js";import"./FlexGrid-SGz1UDZT.js";import"./Form-EzleJG-j.js";import"./SideNavLinkText-xmwjuieE.js";import"./Link-eQwNzbSE.js";import"./index-P6UCShJt.js";import"./index-BHMIdRzp.js";import"./useMatchMedia-T2GVo85G.js";import"./SideNavMenuItem-BUkJkWpT.js";import"./devtools-CskDVa8y.js";import"./TearsheetShell-BKIzCle8.js";import"./useResizeObserver-Cp7HDrpC.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./props-helper-BZh4EldX.js";import"./ComposedModal-DuX0rG4s.js";import"./index-B9LAK09p.js";import"./LayerContext-DfrloTEd.js";import"./ButtonSet-B2onNqwp.js";import"./InlineLoading-pF8In0wu.js";import"./bucket-6-BVxmYIXv.js";import"./mergeRefs-CTUecegF.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-DPmHpWJH.js";import"./events-OVwOsPzJ.js";import"./index-pOgDNIY8.js";import"./DefinitionTooltip-DKyN1THq.js";import"./usePortalTarget-BRFg5-2X.js";import"./feature-flags-Cd4xSQCq.js";import"./index-Cg1swjps.js";import"./index-Bv4JGo1_.js";import"./index-BXVusgOK.js";import"./useFocus-CrEADr-4.js";import"./usePreviousValue-DGkdsrtI.js";import"./useIsomorphicEffect-l5L8NYko.js";import"./ActionSet-CYm8Ussl.js";import"./index-C_-_U5WJ.js";import"./iframe-CBXui-ld.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";import"./story-helper-DPPXKxdX.js";import"./Text-DyBNjUAs.js";import"./bucket-9-DBhRplFe.js";import"./bucket-18-D-cwffHE.js";import"./useNormalizedInputProps-BTIESqM4.js";import"./FormContext-TkVWILkp.js";import"./bucket-16-IFGKs9HR.js";import"./bucket-0-C6v-wDs9.js";import"./useControllableState--uiA2kjV.js";import"./useAnnouncer-Dwt0jqXi.js";import"./v4-CtRu48qb.js";import"./index-Cwsl1zwy.js";import"./bucket-17-F0QcB3Pi.js";import"./bucket-10-BLMdRzi0.js";const ee=".c4p--tearsheet-edit-multi-form__description{font-size:var(--cds-body-compact-01-font-size, .875rem);font-weight:var(--cds-body-compact-01-font-weight, 400);line-height:var(--cds-body-compact-01-line-height, 1.28572);letter-spacing:var(--cds-body-compact-01-letter-spacing, .16px);padding-block-end:.75rem}p.c4p--tearsheet-edit-multi-form__description:last-of-type{padding-block-end:2rem}.c4p--tearsheet-edit-multi-form__heading{font-weight:600}.c4p--tearsheet-edit-multi-form .c4p--tearsheet__content .cds--form-item{margin-block-end:1rem}.cds--tile-group div{display:flex;flex-wrap:wrap}.c4p--tearsheet-edit-multi-form--custom-tile{block-size:240px;inline-size:280px;margin-inline-end:1rem}.c4p--tearsheet-edit-multi-form--custom-tile .c4p--empty-state__illustration.c4p--empty-state__illustration--lg{block-size:120px;min-inline-size:120px}.c4p--tearsheet-edit-multi-form--custom-tile-label{position:absolute;inset-block-end:1rem;inset-inline-start:1rem}",F=()=>e.createElement(G,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/edit-and-update/usage/#tearsheet-edit",blocks:[{story:g,description:"This is used when you have one section per step. This can be created by passing\nin the overall `<EditTearsheet />` component and the `<EditTearsheetForm />`\ncomponent with form items as children:",source:{code:`<EditTearsheet {...props}>
  <EditTearsheetForm
    title="Required title"
    subtitle="Optional subtitle"
    description="Optional description"
    onNext={() => {
      'Optional function';
    }}
  >
    <TextInput
      id="test-1"
      invalidText="A valid value is required"
      labelText="Topic name"
      placeholder="Enter topic name"
    />
  </EditTearsheetForm>
</EditTearsheet>`}},{title:"Using custom components",description:"It is possible to use custom components that return `EditTearsheetForms` in\norder to help reduce the amount of logic in the component that contains the main\n`EditTearsheet`. _It is required that each child of the `EditTearsheet` either\nbe a custom step or a `EditTearsheetForm`_. An example of this could look like\nthe following:",source:{code:`const CreateFormCustom = ({ subtitle, ...rest }) => {
  return (
    <EditTearsheetForm {...rest} subtitle={subtitle} title="Form 1">
      form content here
    </EditTearsheetForm>
  );
};

const CreateComponent = () => {
  return (
    <EditTearsheet {...EditTearsheetProps}>
      <CreateFormCustom subtitle="Custom form subtitle" />
      <EditTearsheetForm
        title="Topic name"
        fieldsetLegendText="Topic information"
        subtitle="This is the unique name used to recognize your topic"
        description="It will also be used by your producers and consumers as part of the
        connection information, so make it something easy to recognize."
      >
        Content for second form
      </EditTearsheetForm>
    </EditTearsheet>
  );
};`}},{title:"Class names",description:"Additionally, to get the preferred styling when including your own children as\nsections, you can utilize the below included class names.\n\n| Class name                                            | Element     | Features                                                   |\n| ----------------------------------------------------- | ----------- | ---------------------------------------------------------- |\n| `#{$pkg-prefix}--create-tearsheet__form--title`       | title       | `productive-heading-04` & `margin-bottom` of `$spacing-05` |\n| `#{$pkg-prefix}--create-tearsheet__form--subtitle`    | subtitle    | `productive-heading-01` & `margin-bottom` of `$spacing-03` |\n| `#{$pkg-prefix}--create-tearsheet__form--description` | description | `body-long-01` & `margin-bottom` of `$spacing-06`          |\n| `#{$pkg-prefix}--create-tearsheet__form--fieldset`    | fieldset    | `margin-bottom` of `$spacing-05` to all children elements  |\n"}]});F.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const f=`${j.prefix}--tearsheet-edit-multi-form`,S=({cancelButtonText:n,className:I,description:V,influencerWidth:z,label:$,slug:A,submitButtonText:L,title:N})=>{const[l,m]=o.useState(!1),[i,c]=o.useState(!1),[p,T]=o.useState("Topic name here"),[b,E]=o.useState("Topic description here"),[x,y]=o.useState("Topic value here"),[v,C]=o.useState("Location here"),[P,_]=o.useState(1),[O,w]=o.useState("one-day"),[q,d]=o.useState(!1),B=()=>{T(p),E(b),y(x),C(v),_(1),w("one-day"),c(!1),d(!1),m(!1)},D=()=>{B(),h("onClose")()},R=async()=>{await new Promise(t=>setTimeout(t,1e3)),m(!1),h("onSubmit")()},M=()=>{h("handleFormChange")()};return e.createElement("div",null,e.createElement("style",null,`.${f} { opacity: 0 }`,";"),e.createElement(U,{onClick:()=>m(!l)},l?"Close EditTearsheet":"Open EditTearsheet"),e.createElement(k,{influencerWidth:z,label:$,className:H(f,I),submitButtonText:L,cancelButtonText:n,description:V,title:N,open:l,onRequestSubmit:R,onClose:D,onFormChange:M,slug:A&&Q()},e.createElement(r,{title:"Topic name",fieldsetLegendText:"Topic information",subtitle:"This is the unique name used to recognize your topic",description:`It will also be used by your producers and consumers as part of the
          connection information, so make it something easy to recognize.`},e.createElement(s,{xlg:8,lg:8,md:8,sm:8},e.createElement(a,{labelText:"Topic name",placeholder:"Enter topic name",id:"tearsheet-multi-form-story-text-input-multi-form-1",value:p,onChange:t=>{t.target.value.length&&d(!1),T(t.target.value)},invalid:q,invalidText:"This is a required field",onBlur:()=>{p.length||d(!0)}}),e.createElement(a,{labelText:"Topic description (optional)",id:"tearsheet-multi-form-story-text-input-multi-form-1-input-2",value:b,placeholder:"Enter topic description",onChange:t=>E(t.target.value)}),e.createElement(a,{labelText:"Topic version (optional)",id:"tearsheet-multi-form-story-text-input-multi-form-1-input-3",value:x,placeholder:"Enter topic version",onChange:t=>y(t.target.value)}),i&&e.createElement(W,{kind:"error",title:"Error",subtitle:"Resolve errors to continue",onClose:()=>c(!i)}),e.createElement(K,{className:`${f}__error--toggle`,id:"simulated-error-toggle",size:"sm",labelText:"Simulate error",onToggle:()=>c(!i),toggled:i}))),e.createElement(r,{title:"Location",subtitle:"Custom form subtitle",fieldsetLegendText:"",description:"Custom form description (see storybook implementation for new custom form capability)"},e.createElement(s,{xlg:8,lg:8,md:8,sm:8},e.createElement(a,{value:v,onChange:t=>C(t.target.value),id:"custom-form-input",labelText:"Location",placeholder:"Enter location"}))),e.createElement(r,{title:"Partitions",subtitle:`One or more partitions make up a topic. A partition is an ordered
          list of messages.`,description:`Partitions are distributed across the brokers in order to increase
          the scalability of your topic. You can also use them to distribute
          messages across the members of a consumer group.`,fieldsetLegendText:"Partition information"},e.createElement(s,{xlg:3,lg:3,md:8,sm:4},e.createElement(Y,{id:"carbon-number",min:1,max:100,value:P,label:"Partitions",helperText:"1 partition is sufficient for getting started but, production systems often have more.",invalidText:"Max partitions is 100, min is 1",onChange:t=>_(t.imaginaryTarget.value)}))),e.createElement(r,{title:"Message retention",subtitle:"This is how long messages are retained before they are deleted.",description:`If your messages are not read by a consumer within this time, they
          will be missed.`,fieldsetLegendText:"Message retention scheduling"},e.createElement(s,{xlg:8,lg:8,md:8,sm:8},e.createElement(J,{legendText:"Message retention",name:"radio-button-group",defaultSelected:O,onChange:t=>w(t),orientation:"vertical"},e.createElement(u,{labelText:"A day",value:"one-day",id:"one-day"}),e.createElement(u,{labelText:"A week",value:"one-week",id:"one-week"}),e.createElement(u,{labelText:"A month",value:"one-month",id:"one-month"}))))))};S.__docgenInfo={description:"",methods:[],displayName:"MultiFormEditTearsheet"};const bt={title:"Deprecated/Edit and update/EditTearsheet",component:k,tags:["autodocs"],argTypes:{description:{control:{type:"text"}},label:{control:{type:"text"}},title:{control:{type:"text"}},influencer:{control:{disable:!0}},onClose:{control:{disable:!0}},open:{control:{disable:!0}},...X()},parameters:{styles:ee,docs:{page:F}},decorators:[n=>e.createElement(Z,{type:"deprecation-notice",text:e.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},n())]},te={title:"Edit topic",description:"Specify details for the topic you want to update",submitButtonText:"Save",cancelButtonText:"Cancel",className:"test-class-name",label:"",influencerWidth:"narrow"},g=S.bind({});g.storyName="Edit tearsheet";g.args={...te};const Et=["multiFormEditTearsheet"];export{Et as __namedExportsOrder,bt as default,g as multiFormEditTearsheet};
