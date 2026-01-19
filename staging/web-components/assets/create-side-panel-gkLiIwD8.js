import{j as e,M as i}from"./blocks-D0RoLEfu.js";import{useMDXComponents as s}from"./index-Cd1CY8hy.js";import{S as r}from"./create-side-panel.stories-BK5jbS1w.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-DSdqiJWw.js";import"./state-EvD611k3.js";import"./query-DAIS6qJ0.js";import"./query-assigned-elements-QtOlz7Yz.js";import"./settings-ClFWKeZ4.js";import"./class-map-Ul68iTr_.js";import"./16-CeH4JhOl.js";import"./16-nJySvwbz.js";import"./icon-loader-CMdg6y5C.js";import"./index-gRrbDvJ2.js";import"./button-NKOdGHCg.js";import"./button-skeleton-BIethCF0.js";import"./icon-button-BMqwiuoE.js";import"./definition-tooltip-D9OlpmnR.js";import"./popover-content-upcN7uZa.js";import"./layer-C1Lrkfih.js";import"./text-input-DDgNtQUw.js";import"./16-DR8ZKxTi.js";import"./validity-CUJaV9kI.js";import"./text-input-skeleton-D3qXhvgf.js";import"./number-input-skeleton-XdmJoJaD.js";import"./16-DG77Odo3.js";import"./form-item-DOXYdbog.js";function o(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:r}),`
`,e.jsx(n.h1,{id:"create-sidepanel",children:"Create Sidepanel"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/patterns/create-flows/usage/#side-panel",rel:"nofollow",children:"Create sidepanel usage guidelines"})}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:"Use with medium complexity creations if the user needs page context. On-page content can be seen and interacted with."}),`
`,e.jsx(n.p,{children:`Patterns have multiple ways of accomplishing a user need and typically use a
combination of components with additional design considerations. The pattern
code we share is meant to serve as an example implementation that can be built
and extended further.`}),`
`,e.jsx(n.h4,{id:"ingredients",children:"Ingredients"}),`
`,e.jsx(n.p,{children:"To build this pattern, we recommend including the following components:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://ibm-products-web-components.netlify.app/?path=/docs/components-sidepanel--overview",rel:"nofollow",children:"c4p-sidepanel"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-button--overview",rel:"nofollow",children:"cds-button"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-form--overview",rel:"nofollow",children:"cds-form-item"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-number-input--overview",rel:"nofollow",children:"cds-number-input"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-text-input--overview",rel:"nofollow",children:"cds-text-input"})}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[`💡 Check our
`,e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/create-side-panel",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/create-side-panel",rel:"nofollow",children:e.jsx(n.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsx(n.h3,{id:"example",children:"Example"}),`
`,e.jsx(n.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(n.h4,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import '@carbon/ibm-products-web-components/es/components/side-panel/index.js';
import '@carbon/web-components/es/components/button/index.js';
import '@carbon/web-components/es/components/form/form-item.js';
import '@carbon/web-components/es/components/number-input/index.js';
import '@carbon/web-components/es/components/text-input/index.js';
`})}),`
`,e.jsx(n.h4,{id:"html",children:"HTML"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div>
  <cds-button @click=\${this._openHandler}>Create partitions</cds-button>
  <c4p-side-panel
    @c4p-side-panel-closed=\${this._openHandler}
    class="\${blockClass}"
    ?animate-title=\${false}
    include-overlay
    ?open=\${this.open}
    size="md"
    title="Create partitions"
  >
    <div slot="subtitle">
      Specify the details of the partitions you're creating
    </div>
    <h3
      class="\${blockClass}__form-title-text \${blockClass}__content-text"
    >
      Core configuration
    </h3>
    <p class="\${blockClass}__form-description-text \${blockClass}__content-text">
      We recommend you fill out and evaluate these details at a minimum
      before deploying your topic.
    </p>
    <cds-form id="example-form" class="\${blockClass}__form">
      <cds-form-item>
        <cds-text-input value="Topic" label="Topic name"></cds-text-input>
      </cds-form-item>
      <cds-form-item>
        <cds-number-input
          value="50"
          min="0"
          max="100"
          step="1"
          label="Partitions"
          size="md"
        >
        </cds-number-input>
      </cds-form-item>
      <cds-form-item>
        <cds-number-input
          value="50"
          min="0"
          max="100"
          step="1"
          label="Replicas"
          size="md"
        >
        </cds-number-input>
      </cds-form-item>
    </cds-form>
    <cds-button
      slot="actions"
      kind="secondary"
      @click=\${this._openHandler}
      >Cancel</cds-button
    >
    <cds-button slot="actions" kind="primary" @click=\${this._openHandler}
      >Create</cds-button
    >
  </c4p-side-panel>
</div>
`})})]})}function E(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{E as default};
