import{u as i,j as e,M as r}from"./blocks-cZ5h9mXq.js";import{s as o}from"./create-tearsheet.stories-BM6IcAou.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-Be8Zv5F4.js";import"./state-yUR2oP26.js";import"./keyed-CwqvS4Ec.js";import"./decorate-BsyuvM50.js";import"./class-map-CeOJ8zB9.js";import"./query-D0jTsbLw.js";import"./style-map-GwMfzukW.js";import"./definition-tooltip-BaiLMn_A.js";import"./host-listener-DN1-XIwx.js";import"./popover-content-Ds-WnFXt.js";import"./floating-controller-O5_OP1Uj.js";import"./button-rtq4s5rI.js";import"./link-CogyUh9o.js";import"./icon-loader-CkFMeExi.js";import"./16-BpKA4nzT.js";import"./index-DQuUfJx4.js";import"./layer-DVX_2kQs.js";import"./action-set--SDMFPbS.js";import"./ref-BeHtf_Xa.js";import"./button-skeleton-DIbveJlF.js";import"./modal-label-C98mCXAp.js";import"./inline-loading-DI4M25ll.js";import"./16-DSuDh1sQ.js";import"./icon-button-DgGbN1I-.js";import"./20-CvqWH37X.js";import"./side-panel-DJFvICuh.js";import"./16-803qFA73.js";import"./16-D5maUdCH.js";import"./resizer-panel-Dk_YWRVk.js";import"./tslib.es6-Cdhlq9ds.js";import"./20-q75D_U8N.js";import"./grid-C43cfP2m.js";import"./consume-DI2TaawZ.js";import"./text-input-DJOAA_yF.js";import"./form-BTpacr1I.js";import"./validity-CzEiVmrf.js";import"./if-non-empty-D5Byj5A3.js";import"./16-C1hWzIbz.js";import"./16-B8NH1ntc.js";import"./text-input-skeleton-EAebhCbN.js";import"./textarea-skeleton-CmvAmfhF.js";import"./number-input-skeleton-CuPjTeTv.js";import"./16-DXyY1wqk.js";import"./progress-step-TkFSsGcp.js";import"./collection-helpers-Cnsts1JG.js";import"./skeleton-text-CR65bYap.js";import"./16-Ci-Iy0jC.js";import"./16-D3CzXAJU.js";import"./radio-button-skeleton-DDeRpy_M.js";import"./tile-group-ekT_NNvS.js";import"./16-D0aIqdwb.js";import"./toggle-728nbW9m.js";import"./checkbox-CbYAlhhY.js";import"./toggle-skeleton-C5jYrIVZ.js";import"./stack-DtZPiy66.js";import"./checkbox-skeleton-BshbqPDb.js";import"./toast-notification-DxJN0oN0.js";import"./actionable-notification-button-B7Eng9D9.js";import"./callout-notification-Cax2c2wu.js";function s(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:o}),`
`,e.jsx(n.h1,{id:"createtearsheet-pattern",children:"CreateTearsheet Pattern"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/patterns/create-flows/usage/#wide-tearsheet",rel:"nofollow",children:"Usage guidelines"})}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#what-is-a-pattern",children:"What is a Pattern?"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#getting-started",children:"Getting Started"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#example-usage",children:"Example Usage"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#customization",children:"Customization"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#architecture",children:"Architecture"})}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"CreateTearsheet"})," is a ",e.jsx(n.strong,{children:"pattern"}),` (not a component) that provides a recipe
for building multi-step workflow interfaces for creating resources or completing
complex tasks. It demonstrates how to compose the Tearsheet component with
Lit reactive state for managing step navigation and form state.`]}),`
`,e.jsx(n.h2,{id:"what-is-a-pattern",children:"What is a Pattern?"}),`
`,e.jsxs(n.p,{children:["Unlike components that are exported from the package, ",e.jsx(n.strong,{children:"patterns are recipes"}),`
that you copy into your codebase and customize to fit your specific needs. This
approach offers:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Full Control"}),": Modify the code to match your exact requirements"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"No Breaking Changes"}),`: Updates to the pattern don't affect your
implementation`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Seamless Customization"}),`: Adapt the pattern without workarounds or prop
drilling`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Scalability"}),": Build upon the foundation with your own features"]}),`
`]}),`
`,e.jsx(n.p,{children:"The CreateTearsheet pattern consists of:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"create-tearsheet-base.ts"})," - Main tearsheet workflow base class"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"create-tearsheet-step.ts"})," - Individual step wrapper component"]}),`
`,e.jsxs(n.li,{children:["Example implementations in ",e.jsx(n.code,{children:"examples/create-tearsheet/src/"})]}),`
`,e.jsx(n.li,{children:"Styles and utilities"}),`
`]}),`
`,e.jsx(n.h2,{id:"getting-started",children:"Getting Started"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Copy the pattern code"}),` from the
`,e.jsx(n.a,{href:"https://github.com/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/create-tearsheet/src",rel:"nofollow",children:"example directory"}),`
into your project`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Install dependencies"}),": ",e.jsx(n.code,{children:"@carbon/web-components"}),`,
`,e.jsx(n.code,{children:"@carbon/ibm-products-web-components"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Import and use"})," the pattern components in your application"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Customize"})," as needed for your use case"]}),`
`]}),`
`,e.jsx(n.p,{children:"The pattern uses:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tearsheet component"})," (",e.jsx(n.code,{children:"@carbon/ibm-products-web-components"}),`): Provides the
modal container and layout`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Lit reactive state"}),": Manages step navigation and form state"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Carbon Web Components"}),": For form inputs and UI elements"]}),`
`]}),`
`,e.jsx(n.h3,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Multi-step workflow"}),": Guide users through complex creation processes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Progress indication"}),": Visual feedback with vertical progress indicators"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Responsive design"}),": Adapts to different screen sizes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Step management"}),": Built-in navigation with back, next, and submit actions"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Form state management"}),": Integrated state management across steps"]}),`
`]}),`
`,e.jsx(n.h3,{id:"key-implementation-steps",children:"Key Implementation Steps"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Copy Pattern Files"}),`: Copy the pattern components from the example
directory into your project`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"State Management"}),": Use LitElement's ",e.jsx(n.code,{children:"@state()"}),` decorators to manage step
state and form data`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Open State"}),": Manage ",e.jsx(n.code,{children:"open"})," state in your component"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Step Navigation"}),": Implement ",e.jsx(n.code,{children:"handleNext()"}),", ",e.jsx(n.code,{children:"handleBack()"}),`, and
`,e.jsx(n.code,{children:"handleSubmit()"})," methods"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Customization"}),": Modify the copied pattern files to fit your specific needs"]}),`
`]}),`
`,e.jsx(n.h2,{id:"example-usage",children:"Example Usage"}),`
`,e.jsx(n.p,{children:"Three preview variants are available in the web components example package:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"MultiStep"}),": baseline multi-step create flow"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"MultiStepWithIntro"}),": intro-first flow with category-specific conditional steps"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"MultiStepWithStepInErrorState"}),": flow showing invalid step states in the progress indicator"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '@carbon/ibm-products-web-components/es/components/tearsheet-preview/index.js';
import '@carbon/web-components/es/components/button/index.js';
import '@carbon/web-components/es/components/progress-indicator/index.js';

@customElement('my-create-tearsheet')
class MyCreateTearsheet extends LitElement {
  @state()
  private open = false;

  @state()
  private currentStep = 0;

  private stepLabels = [
    { label: 'Topic name', secondaryLabel: 'Name your topic' },
    { label: 'Partitions', secondaryLabel: 'Configure partitions' },
    { label: 'Retention', secondaryLabel: 'Set retention policy' },
  ];

  private handleNext = () => {
    this.currentStep++;
  };

  private handleBack = () => {
    this.currentStep--;
  };

  private handleClose = () => {
    this.open = false;
  };

  render() {
    return html\`
      <cds-button @click=\${() => (this.open = true)}>
        Create Resource
      </cds-button>
      \${this.open
        ? html\`
            <c4p-preview-tearsheet
              open
              variant="wide"
              @c4p-preview-tearsheet-closed=\${this.handleClose}
            >
              <c4p-tearsheet-header>
                <c4p-tearsheet-header-content title="Create Resource">
                  <div slot="description">
                    Specify details for the new resource you want to create
                  </div>
                </c4p-tearsheet-header-content>
              </c4p-tearsheet-header>

              <c4p-tearsheet-influencer>
                <cds-progress-indicator vertical>
                  \${this.stepLabels.map(
                    (step, index) => html\`
                      <cds-progress-step
                        label=\${step.label}
                        description=\${step.secondaryLabel}
                        ?complete=\${index < this.currentStep}
                        ?current=\${index === this.currentStep}
                      ></cds-progress-step>
                    \`
                  )}
                </cds-progress-indicator>
              </c4p-tearsheet-influencer>

              <c4p-tearsheet-body>
                <div slot="main-content">
                  <!-- Step content here -->
                </div>
              </c4p-tearsheet-body>

              <c4p-tearsheet-footer
                variant="wide"
                .actions=\${[
                  {
                    kind: 'ghost',
                    label: 'Cancel',
                    onClick: this.handleClose,
                  },
                  {
                    kind: 'secondary',
                    label: 'Back',
                    onClick: this.handleBack,
                    disabled: this.currentStep === 0,
                  },
                  {
                    kind: 'primary',
                    label: 'Next',
                    onClick: this.handleNext,
                  },
                ]}
              ></c4p-tearsheet-footer>
            </c4p-preview-tearsheet>
          \`
        : ''}
    \`;
  }
}
`})}),`
`,e.jsx(n.h2,{id:"customization",children:"Customization"}),`
`,e.jsx(n.p,{children:"Since this is a pattern (not a component), you have full control to customize:"}),`
`,e.jsx(n.h3,{id:"modify-validation-logic",children:"Modify Validation Logic"}),`
`,e.jsx(n.p,{children:"Edit the validation logic in your copied implementation:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`protected isNextDisabledForStep(stepKey) {
  switch (stepKey) {
    case 'topic-information':
      return !this.formData.topicName.trim();
    case 'location':
      return !this.formData.location.trim();
    default:
      return false;
  }
}
`})}),`
`,e.jsx(n.h3,{id:"add-custom-buttons",children:"Add Custom Buttons"}),`
`,e.jsx(n.p,{children:"Modify the footer action rendering in your copied implementation:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`html\`
  <cds-button kind="ghost">Save draft</cds-button>
  <cds-button kind="secondary" @click=\${this.handleBack}>Back</cds-button>
  <cds-button kind="primary" @click=\${this.handleNext}>Next</cds-button>
\`;
`})}),`
`,e.jsx(n.h3,{id:"customize-step-layout",children:"Customize Step Layout"}),`
`,e.jsx(n.p,{children:"Edit your copied step component layout structure:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`html\`
  <create-tearsheet-step
    title="Topic name"
    subtitle="Provide topic details"
    description="Add your custom content here"
  >
    <cds-text-input label="Topic name"></cds-text-input>
  </create-tearsheet-step>
\`;
`})}),`
`,e.jsx(n.h2,{id:"architecture",children:"Architecture"}),`
`,e.jsx(n.p,{children:"The CreateTearsheet pattern is built on top of:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tearsheet component"})," (",e.jsx(n.code,{children:"@carbon/ibm-products-web-components"}),`): Provides the
modal container and layout with responsive behavior`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"LitElement"}),": Manages reactive state and rendering"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Progress Indicator"})," (",e.jsx(n.code,{children:"@carbon/web-components"}),"): For step visualization"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Carbon Web Components"}),": For form inputs and UI elements"]}),`
`]}),`
`,e.jsx(n.h3,{id:"step-management",children:"Step Management"}),`
`,e.jsx(n.p,{children:`Steps are managed using Lit reactive state in the copied pattern implementation.
The base workflow provides:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Current step tracking"}),`
`,e.jsxs(n.li,{children:["Navigation methods like ",e.jsx(n.code,{children:"handleNext()"}),", ",e.jsx(n.code,{children:"handleBack()"}),", and ",e.jsx(n.code,{children:"handleSubmit()"})]}),`
`,e.jsxs(n.li,{children:["Form state management through a shared ",e.jsx(n.code,{children:"formData"})," object"]}),`
`,e.jsxs(n.li,{children:["Visible step configuration through ",e.jsx(n.code,{children:"getVisibleSteps()"})]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Important"}),`: Copy both the base workflow and step wrapper files so the step
management and layout stay aligned.`]}),`
`,e.jsx(n.h3,{id:"responsive-behavior",children:"Responsive Behavior"}),`
`,e.jsx(n.p,{children:"The progress indicator adapts to screen size:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Large screens"}),`: Vertical progress indicator displayed in the influencer
panel`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Small screens"}),": Responsive tearsheet layout adapts for smaller viewports"]}),`
`]}),`
`,e.jsx(n.h3,{id:"state-management",children:"State Management"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Step state"}),": Managed with Lit ",e.jsx(n.code,{children:"@state()"})," properties"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Form state"}),": Shared across steps through the component's ",e.jsx(n.code,{children:"formData"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Open state"}),": Managed in the pattern component"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Auto-reset"}),": The tearsheet resets to the initial step when closed"]}),`
`]}),`
`,e.jsx(n.h2,{id:"feedback",children:"Feedback"}),`
`,e.jsxs(n.p,{children:[`Help us improve this component by providing feedback through
`,e.jsx(n.a,{href:"https://github.com/carbon-design-system/ibm-products/issues/new/choose",rel:"nofollow",children:"GitHub issues"}),"."]})]})}function je(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{je as default};
