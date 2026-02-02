import{j as e,M as d}from"./blocks-Ca2gZWhY.js";import{useMDXComponents as s}from"./index-CWnaG5n0.js";import{c as a}from"./create-modal.stories-BNgC8JD-.js";import"./preload-helper-D9Z9MdNV.js";import"./iframe-CPwma648.js";import"./state-BZ954teF.js";import"./query-DAIS6qJ0.js";import"./class-map-BjEbJ_wj.js";import"./modal-label-BPUdpckU.js";import"./icon-loader-Bb4ppSSv.js";import"./button-BE8YYPkS.js";import"./button-skeleton-Dtbl2yvK.js";import"./text-input-BX25Iv0z.js";import"./16-Wf9R93-z.js";import"./validity-CUJaV9kI.js";import"./text-input-skeleton-CQeRY_Yn.js";import"./textarea-skeleton-BHFf5yXR.js";import"./dropdown-skeleton-DFhJYyeA.js";import"./16-C2f9e6nj.js";import"./16-D0aIqdwb.js";import"./collection-helpers-Cnsts1JG.js";import"./form-group-C7eGaK_m.js";import"./stack-QS70E3oR.js";function t(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:a}),`
`,e.jsx(n.h1,{id:"create-modal",children:"Create Modal"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/patterns/create-flows/usage/#modal",rel:"nofollow",children:"Usage guidelines"}),`
|
`,e.jsx(n.a,{href:"https://www.carbondesignsystem.com/components/modal/usage",rel:"nofollow",children:"Carbon modal usage guidelines"}),`
|
`,e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-modal",rel:"nofollow",children:"Carbon modal documentation"})]}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#example-usage",children:"Example usage"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#create-modal",children:"Create Modal"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#form-validation",children:"From validation"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"create-modal"}),` pattern provides a way for a user to quickly generate a new
resource. It is triggered by a user’s action, appears on top of the main page
content, and is persistent until dismissed. The purpose of this modal should be
immediately apparent to the user, with a clear and obvious path to completion.`]}),`
`,e.jsx(n.p,{children:"To build this pattern, we recommend including the following ingredients:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-modal",rel:"nofollow",children:"cds-modal"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-form",rel:"nofollow",children:"cds-form"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-form-group",rel:"nofollow",children:"cds-form-group"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-text-input",rel:"nofollow",children:"cds-text-input"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-radio-button",rel:"nofollow",children:"cds-radio-button"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-loading",rel:"nofollow",children:"cds-loading"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-button",rel:"nofollow",children:"cds-button"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-dropdown",rel:"nofollow",children:"cds-dropdown"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-text-area",rel:"nofollow",children:"cds-text-area"})}),`
`]}),`
`,e.jsx(n.h3,{id:"example-usage",children:"Example usage"}),`
`,e.jsx(n.h3,{id:"coded-examples",children:"Coded examples"}),`
`,e.jsx(n.p,{children:"Coded examples can be edited and are a great way to try out a component."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[`💡 Check our
`,e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/create-modal",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/create-modal",rel:"nofollow",children:e.jsx(n.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsx(n.h2,{id:"basic-implementation",children:"Basic implementation"}),`
`,e.jsx(n.p,{children:`The create modal provides a simple form for users to create a new resource. The
modal should include a title, optional subtitle for context (such as step
indicators), and description text to guide the user through the creation
process.`}),`
`,e.jsx(n.h3,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(n.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(n.h4,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/modal/index.js';
import '@carbon/web-components/es/components/button/index';
import '@carbon/web-components/es/components/text-input/index';
import '@carbon/web-components/es/components/dropdown/index';
import '@carbon/web-components/es/components/textarea/index';
import '@carbon/web-components/es/components/stack/index';
`})}),`
`,e.jsx(n.h3,{id:"html",children:"HTML"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<cds-modal class="c4p--create-modal" size="sm" prevent-close-on-click-outside>
  <cds-modal-close-button></cds-modal-close-button>
  
  <cds-modal-header class="c4p--create-modal__heading">
    <cds-modal-heading>Title</cds-modal-heading>
    <p class="c4p--create-modal__subtitle">Your subtitle text will appear here</p>
  </cds-modal-header>

  <cds-modal-body has-form>
    <p class="c4p--create-modal__description">
      This is example description text that will appear here in your modal
    </p>
    <cds-stack gap="4">
      <cds-text-input
        label="Text input label"
        helper-text="Helper text goes here"
        placeholder="Placeholder"
      ></cds-text-input>

      <cds-dropdown
        title-text="Dropdown label"
        helper-text="This is some helper text"
        label="Dropdown menu options"
      >
        <cds-dropdown-item value="option-0">Option 0</cds-dropdown-item>
        <cds-dropdown-item value="option-1">Option 1</cds-dropdown-item>
        <cds-dropdown-item value="option-2">Option 2</cds-dropdown-item>
      </cds-dropdown>

      <cds-textarea
        label="Text area label"
        helper-text="Optional helper text"
        placeholder="Placeholder text"
      ></cds-textarea>
    </cds-stack>
  </cds-modal-body>

  <cds-modal-footer>
    <cds-modal-footer-button kind="secondary" data-modal-close>
      Cancel
    </cds-modal-footer-button>
    <cds-modal-footer-button kind="primary">
      Create
    </cds-modal-footer-button>
  </cds-modal-footer>
</cds-modal>
`})}),`
`,e.jsx(n.h2,{id:"form-validation",children:"Form validation"}),`
`,e.jsx(n.p,{children:`When implementing form validation, use the invalid state on form inputs to
provide feedback to users. Required fields should be clearly marked and
validated on blur or submit.`}),`
`,e.jsx(n.h3,{id:"getting-started-1",children:"Getting started"}),`
`,e.jsx(n.p,{children:"Here's an example with form validation."}),`
`,e.jsx(n.h3,{id:"html-1",children:"HTML"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<cds-modal class="c4p--create-modal" size="sm" prevent-close-on-click-outside>
  <cds-modal-close-button></cds-modal-close-button>
  
  <cds-modal-header class="c4p--create-modal__heading">
    <cds-modal-heading>Title</cds-modal-heading>
    <p class="c4p--create-modal__subtitle">Your subtitle text will appear here</p>
  </cds-modal-header>

  <cds-modal-body has-form>
    <p class="c4p--create-modal__description">
      This is example description text that will appear here in your modal
    </p>
    <cds-stack gap="4">
      <cds-text-input
        label="Text input label"
        placeholder="Placeholder"
        invalid
        invalid-text="This is a required field"
      ></cds-text-input>

      <cds-text-input
        label="Text input label (optional)"
        placeholder="Placeholder"
      ></cds-text-input>

      <cds-text-input
        label="Text input label (optional)"
        placeholder="Placeholder"
      ></cds-text-input>

      <cds-radio-button-group
        legend-text="Radio button legend text goes here"
        name="radio-button-group"
      >
        <cds-radio-button label-text="Radio-1" value="radio-1"></cds-radio-button>
        <cds-radio-button label-text="Radio-2" value="radio-2"></cds-radio-button>
        <cds-radio-button label-text="Radio-3" value="radio-3"></cds-radio-button>
      </cds-radio-button-group>
    </cds-stack>
  </cds-modal-body>

  <cds-modal-footer>
    <cds-modal-footer-button kind="secondary" data-modal-close>
      Cancel
    </cds-modal-footer-button>
    <cds-modal-footer-button kind="primary" disabled>
      Create
    </cds-modal-footer-button>
  </cds-modal-footer>
</cds-modal>
`})})]})}function O(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{O as default};
