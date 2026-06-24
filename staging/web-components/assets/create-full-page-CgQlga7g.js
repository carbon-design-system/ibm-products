import{u as i,j as e,M as o,C as r}from"./blocks-nSDRSHG_.js";import{c as l,C as a,a as c,b as d,d as h,e as p}from"./create-full-page.stories-BvsI3ti1.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-B8AK9roo.js";import"./state-Bxcl7owa.js";import"./host-listener-DN1-XIwx.js";import"./text-input-O9RXV0tO.js";import"./icon-loader-DCP23Wv4.js";import"./class-map-As6Et5mH.js";import"./form-BTpacr1I.js";import"./validity-CzEiVmrf.js";import"./if-non-empty-CMjSGG5q.js";import"./query-D0jTsbLw.js";import"./16-C1hWzIbz.js";import"./16-B8NH1ntc.js";import"./text-input-skeleton-BCwJWjc8.js";import"./number-input-skeleton-BBQDbWCg.js";import"./16-DXyY1wqk.js";import"./checkbox-WGMbMqnG.js";import"./checkbox-skeleton-DoUyG_ag.js";import"./toggle-BPJ7i21X.js";import"./toggle-skeleton-BAJxa4tl.js";import"./form-group-dcO9LxNC.js";import"./collection-helpers-Cnsts1JG.js";import"./toast-notification-Cf0PDmm8.js";import"./16-D5maUdCH.js";import"./actionable-notification-button-exBjg0g-.js";import"./button-DruO1jNF.js";import"./callout-notification-hn387k1D.js";import"./link-DiDgX2iH.js";import"./modal-label-D03IH8oP.js";import"./inline-loading-lqwiijTr.js";import"./16-DSuDh1sQ.js";import"./icon-button-Dcz-fJMC.js";import"./definition-tooltip-BWo7SsVR.js";import"./popover-content-DZY7SGRV.js";import"./floating-controller-O5_OP1Uj.js";import"./button-skeleton-CfTK8f1v.js";import"./20-CvqWH37X.js";import"./decorate-BsyuvM50.js";import"./consume-D_JZLJeP.js";import"./breadcrumb-skeleton-DxrzC4Jx.js";import"./20-q75D_U8N.js";import"./switcher-divider-Ddj66fmP.js";import"./16-D0aIqdwb.js";import"./style-map-ip9gcgha.js";import"./repeat-BV-9q8Mp.js";import"./overflow-menu-item-CytbPgyN.js";import"./16-DYhtUhBA.js";import"./16-DOn1njS0.js";import"./search-skeleton-CHLF_gDE.js";import"./tag-iGxrXgPO.js";import"./operational-tag-CSUkBcH_.js";import"./index-C-eRm0LX.js";import"./action-set-CONIRgOs.js";import"./ref-K3YrDb8j.js";import"./grid-Cec6C7Sg.js";import"./consume-DI2TaawZ.js";import"./progress-step-DMMc9tRB.js";import"./skeleton-text-Cn4MmZh7.js";import"./16-Ci-Iy0jC.js";import"./16-D3CzXAJU.js";function s(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:l}),`
`,e.jsx(n.h1,{id:"create-full-page",children:"Create Full Page"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/patterns/create-flows/usage/#full-page",rel:"nofollow",children:"Usage guidelines"})," | ",e.jsx(n.a,{href:"https://www.carbondesignsystem.com/patterns/common-actions/#create",rel:"nofollow",children:"Carbon page usage guidelines"})]}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#what-is-a-pattern",children:"What is a Pattern?"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#getting-started",children:"Getting Started"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#example-usage",children:"Example Usage"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#architecture",children:"Architecture"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#customization",children:"Customization"})}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"create-full-page"})," is a ",e.jsx(n.strong,{children:"pattern"}),` (not a component) that provides a recipe
for building multi-step workflow interfaces for creating resources using a full
page experience. It demonstrates how to compose a full-page layout with StepFlow
from `,e.jsx(n.code,{children:"@carbon/utilities"})," for managing step navigation and state."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[`💡 Check our
`,e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/create-full-page",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/create-full-page",rel:"nofollow",children:e.jsx(n.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
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
`,e.jsx(n.p,{children:"The CreateFullPage pattern consists of:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"create-full-page.ts"})," - Main full-page wrapper web component"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"create-full-page-step.ts"})," - Individual step web component"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"create-influencer.ts"})," - Progress indicator web component"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index.ts"})," - Exports and component registration"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"@carbon/ibm-products-web-components"})," page-header components for breadcrumbs and title display"]}),`
`,e.jsx(n.li,{children:"Styles and utilities"}),`
`]}),`
`,e.jsxs(n.p,{children:["The pattern uses Carbon's ",e.jsx(n.code,{children:"@carbon/ibm-products-web-components"})," page-header components for breadcrumbs and title display."]}),`
`,e.jsx(n.h2,{id:"getting-started",children:"Getting Started"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Copy the pattern code"}),` from the
`,e.jsx(n.a,{href:"https://github.com/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/create-full-page/src/components",rel:"nofollow",children:"example directory"}),`
into your project`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Install dependencies"}),": ",e.jsx(n.code,{children:"@carbon/web-components"}),", ",e.jsx(n.code,{children:"lit"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Import and use"})," the pattern components in your application"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Customize"})," as needed for your use case"]}),`
`]}),`
`,e.jsx(n.p,{children:"The pattern uses:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"LitElement"}),": Base class for creating web components with reactive properties"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Shadow DOM"}),": Encapsulation for component styles and structure"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Carbon Web Components"}),": For form inputs (",e.jsx(n.code,{children:"cds-text-input"}),", ",e.jsx(n.code,{children:"cds-number-input"}),", etc.), layout (",e.jsx(n.code,{children:"cds-grid"}),", ",e.jsx(n.code,{children:"cds-column"}),"), and UI elements"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Carbon IBM Products Web Components"}),": ",e.jsx(n.code,{children:"c4p-page-header"}),", ",e.jsx(n.code,{children:"c4p-page-header-breadcrumbs-set"})," for page header and breadcrumbs"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Custom web components"}),": ",e.jsx(n.code,{children:"create-influencer"})," for progress indication"]}),`
`]}),`
`,e.jsx(n.h3,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Multi-step workflow"}),": Guide users through complex creation processes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Progress indication"}),": Visual feedback with vertical progress indicators"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Breadcrumb navigation"}),": Optional breadcrumbs with overflow handling"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Page header"}),": Support for page title and breadcrumbs"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Step management"}),": Built-in navigation with back, next, and submit actions"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Reactive state management"}),": Using Lit's ",e.jsx(n.code,{children:"@state()"})," decorators for reactive properties"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Global header integration"}),": Works seamlessly with Carbon's UI Shell components"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Responsive design"}),": Adapts to different screen sizes using Carbon Grid"]}),`
`]}),`
`,e.jsx(n.h3,{id:"key-implementation-steps",children:"Key Implementation Steps"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Copy Pattern Files"}),": Copy all pattern web components from the example directory into your project"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Import Components"}),": Import the pattern components and Carbon Web Components in your application"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"State Management"}),": Use ",e.jsx(n.code,{children:"@state()"})," decorators in your wrapper component to manage form state"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Event Handlers"}),": Implement event handlers for form inputs and step navigation"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Close Handler"}),": Set ",e.jsx(n.code,{children:"onClose"})," callback on the ",e.jsx(n.code,{children:"create-full-page"})," element to handle dismissal"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Submit Handler"}),": Set ",e.jsx(n.code,{children:"onRequestSubmit"})," callback on the ",e.jsx(n.code,{children:"create-full-page"})," element for form submission"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Customization"}),": Modify the copied pattern files to fit your specific needs"]}),`
`]}),`
`,e.jsx(n.h2,{id:"example-usage",children:"Example Usage"}),`
`,e.jsx(n.h3,{id:"standard-createfullpage",children:"Standard CreateFullPage"}),`
`,e.jsx(r,{of:a}),`
`,e.jsx(n.h3,{id:"with-sections",children:"With Sections"}),`
`,e.jsx(n.p,{children:"Demonstrates how to organize form fields into logical sections within a step."}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(n.h3,{id:"with-header",children:"With Header"}),`
`,e.jsx(n.p,{children:"Shows breadcrumbs and page title in the header."}),`
`,e.jsx(r,{of:d}),`
`,e.jsx(n.h3,{id:"with-step-in-error-state",children:"With Step in Error State"}),`
`,e.jsx(n.p,{children:"Demonstrates error handling and validation in steps."}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(n.h3,{id:"with-global-header",children:"With Global Header"}),`
`,e.jsx(n.p,{children:"Shows integration with Carbon's global header and side navigation."}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(n.h2,{id:"customization",children:"Customization"}),`
`,e.jsx(n.p,{children:"Here's a minimal example showing how to use the create-full-page pattern:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Import the pattern components
import './components/create-full-page/index.js';

// Import Carbon Web Components
import '@carbon/web-components/es/components/text-input/index.js';
import '@carbon/web-components/es/components/grid/index.js';
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"HTML:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<create-full-page
  secondary-title="Create topic"
  next-button-text="Next"
  back-button-text="Back"
  cancel-button-text="Cancel"
  submit-button-text="Create"
  modal-title="Are you sure you want to cancel?"
  modal-description="If you cancel, the information you have entered won't be saved."
  modal-danger-button-text="Cancel partition"
  modal-secondary-button-text="Return to form"
>
  <create-full-page-step
    slot="steps"
    title="Partition"
    subtitle="One or more partitions make up a topic."
    description="A partition is an ordered list of messages."
  >
    <cds-grid>
      <cds-column xlg="5" lg="5" md="4" sm="4">
        <cds-text-input
          id="topic-name"
          label="Topic name"
          placeholder="Enter topic name"
          required
        >
        </cds-text-input>
      </cds-column>
    </cds-grid>
  </create-full-page-step>

  <create-full-page-step
    slot="steps"
    title="Configuration"
    description="Configure your topic settings."
  >
    <cds-grid>
      <cds-column xlg="5" lg="5" md="4" sm="4">
        <p>Additional configuration options...</p>
      </cds-column>
    </cds-grid>
  </create-full-page-step>
</create-full-page>
`})}),`
`,e.jsx(n.h2,{id:"architecture",children:"Architecture"}),`
`,e.jsx(n.p,{children:"The CreateFullPage pattern is built on top of:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"LitElement"}),": Base class for creating reactive web components with Shadow DOM"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Lit Reactive Properties"}),": Using ",e.jsx(n.code,{children:"@state()"})," and ",e.jsx(n.code,{children:"@property()"})," decorators for reactive state management"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Carbon Web Components"}),": For form inputs (",e.jsx(n.code,{children:"cds-text-input"}),", ",e.jsx(n.code,{children:"cds-number-input"}),", ",e.jsx(n.code,{children:"cds-radio-button"}),", etc.), layout (",e.jsx(n.code,{children:"cds-grid"}),", ",e.jsx(n.code,{children:"cds-column"}),"), and UI elements"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Carbon IBM Products Web Components"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"c4p-page-header"}),": Handles page header layout"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"c4p-page-header-breadcrumbs-set"}),": Handles breadcrumbs with overflow"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Custom Web Components"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"create-influencer"}),": Displays vertical progress indicator"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"step-management",children:"Step Management"}),`
`,e.jsxs(n.p,{children:["Steps are managed internally by the ",e.jsx(n.code,{children:"create-full-page"})," web component:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Current step tracking with reactive state"}),`
`,e.jsx(n.li,{children:"Navigation methods (next, previous, go to step)"}),`
`,e.jsxs(n.li,{children:["Step data extraction from slotted ",e.jsx(n.code,{children:"create-full-page-step"})," elements"]}),`
`,e.jsx(n.li,{children:"Step visibility management"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Important"}),": Always use the ",e.jsx(n.code,{children:'slot="steps"'})," attribute on ",e.jsx(n.code,{children:"create-full-page-step"})," elements for proper step management."]}),`
`,e.jsx(n.h3,{id:"layout-structure",children:"Layout Structure"}),`
`,e.jsx(n.p,{children:"The full-page layout consists of:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Header"})," (optional): Breadcrumbs and page title via ",e.jsx(n.code,{children:"c4p-page-header"})," and ",e.jsx(n.code,{children:"c4p-page-header-breadcrumbs-set"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Main Content Area"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Influencer Panel"})," (left): Vertical progress indicator via ",e.jsx(n.code,{children:"create-influencer"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Form Area"})," (right): Step content with form fields"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Footer"}),": Action buttons (Cancel, Back, Next/Submit)"]}),`
`]}),`
`,e.jsx(n.h3,{id:"state-management",children:"State Management"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Step state"}),": Managed internally by the ",e.jsx(n.code,{children:"create-full-page"})," web component using ",e.jsx(n.code,{children:"@state()"})," decorators"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Form state"}),": Managed in your wrapper component using ",e.jsx(n.code,{children:"@state()"})," decorators and passed to form inputs"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Loading state"}),": Managed internally for async ",e.jsx(n.code,{children:"onNext"})," handlers"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Validation"}),": Each step can have its own ",e.jsx(n.code,{children:"onNext"})," handler for validation"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Reactive updates"}),": Lit's reactive property system automatically re-renders when state changes"]}),`
`]}),`
`,e.jsx(n.h3,{id:"form-validation",children:"Form Validation"}),`
`,e.jsxs(n.p,{children:["All forms within the ",e.jsx(n.code,{children:"CreateFullPage"})," should follow ",e.jsx(n.code,{children:"@carbon/ibm-products"}),`
guidelines for form validation:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"Submit"}),` button should be disabled until all required inputs are filled in
and valid`]}),`
`,e.jsx(n.li,{children:`All required inputs should only throw an invalid error after the element loses
focus`}),`
`,e.jsxs(n.li,{children:["All optional form fields should have an ",e.jsx(n.code,{children:"(optional)"}),` text at the end of the
input `,e.jsx(n.code,{children:"labelText"}),". Optional should always be in parentheses"]}),`
`,e.jsxs(n.li,{children:["Use the ",e.jsx(n.code,{children:"disableSubmit"})," prop on ",e.jsx(n.code,{children:"CreateFullPageStep"})," to control button state"]}),`
`,e.jsxs(n.li,{children:["Use the ",e.jsx(n.code,{children:"onNext"})," handler to perform async validation before proceeding"]}),`
`]}),`
`,e.jsxs(n.p,{children:[`You can find more information on how to validate your form fields in
`,e.jsx(n.a,{href:"https://carbondesignsystem.com/components/form/usage/",rel:"nofollow",children:"Carbon's Form usage page"}),"."]}),`
`,e.jsx(n.h2,{id:"feedback",children:"Feedback"}),`
`,e.jsxs(n.p,{children:[`Help us improve this component by providing feedback through
`,e.jsx(n.a,{href:"https://github.com/carbon-design-system/ibm-products/issues/new/choose",rel:"nofollow",children:"GitHub issues"}),"."]})]})}function ye(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{ye as default};
