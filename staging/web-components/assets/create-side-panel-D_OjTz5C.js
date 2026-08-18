import{u as i,j as n,M as s}from"./blocks-3VQtrEYq.js";import r from"./create-side-panel.stories-BGoW3a-D.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-BoCQr2sp.js";import"./state-BGVRmIbP.js";import"./side-panel-DN9F6v5W.js";import"./decorate-BsyuvM50.js";import"./action-set-DcQ53wAq.js";import"./class-map-h1JXuMsD.js";import"./ref-D8L1pfD4.js";import"./button-zsE1n1Bb.js";import"./host-listener-DN1-XIwx.js";import"./button-skeleton-BKVbevEW.js";import"./16-803qFA73.js";import"./16-D5maUdCH.js";import"./icon-loader-BqrhyFhm.js";import"./resizer-panel-Dk_YWRVk.js";import"./tslib.es6-Cdhlq9ds.js";import"./icon-button-Bn0Tn8Fo.js";import"./definition-tooltip-CDX4g3jt.js";import"./deep-shadow-contains-DK3btacB.js";import"./popover-content-mhoElPR3.js";import"./layer-D7U7ZKkd.js";import"./text-input-CihfnmK8.js";import"./form-BTpacr1I.js";import"./validity-CzEiVmrf.js";import"./if-non-empty-CJwvxyMY.js";import"./16-C1hWzIbz.js";import"./16-B8NH1ntc.js";import"./16-B9g2nIv4.js";import"./text-input-skeleton-CkDGdCUu.js";import"./number-input-skeleton-Da2tCDWl.js";import"./16-DXyY1wqk.js";import"./dropdown-skeleton-BBVPYXHN.js";import"./collection-helpers-DS5mzmOk.js";import"./16-DvgjsF02.js";import"./16-D0aIqdwb.js";import"./16-C2f9e6nj.js";import"./form-item-DdiQxq1M.js";function o(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:r}),`
`,n.jsx(e.h1,{id:"create-sidepanel",children:"Create Sidepanel"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/patterns/create-flows/usage/#side-panel",rel:"nofollow",children:"Create sidepanel usage guidelines"})}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsx(e.p,{children:"Use with medium complexity creations if the user needs page context. On-page content can be seen and interacted with."}),`
`,n.jsx(e.p,{children:`Patterns have multiple ways of accomplishing a user need and typically use a
combination of components with additional design considerations. The pattern
code we share is meant to serve as an example implementation that can be built
and extended further.`}),`
`,n.jsx(e.h4,{id:"ingredients",children:"Ingredients"}),`
`,n.jsx(e.p,{children:"To build this pattern, we recommend including the following components:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://ibm-products-web-components.netlify.app/?path=/docs/components-sidepanel--overview",rel:"nofollow",children:"c4p-sidepanel"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-button--overview",rel:"nofollow",children:"cds-button"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-dropdown--overview",rel:"nofollow",children:"cds-dropdown"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-form--overview",rel:"nofollow",children:"cds-form-item"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-number-input--overview",rel:"nofollow",children:"cds-number-input"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-text-input--overview",rel:"nofollow",children:"cds-text-input"})}),`
`]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[`💡 Check our
`,n.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/create-side-panel",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/create-side-panel",rel:"nofollow",children:n.jsx(e.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,n.jsx(e.h3,{id:"example",children:"Example"}),`
`,n.jsx(e.p,{children:"Here's a quick example to get you started."}),`
`,n.jsx(e.h4,{id:"js-via-import",children:"JS (via import)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import '@carbon/ibm-products-web-components/es/components/side-panel/index.js';
import '@carbon/web-components/es/components/button/index.js';
import '@carbon/web-components/es/components/dropdown/index.js';
import '@carbon/web-components/es/components/form/form-item.js';
import '@carbon/web-components/es/components/number-input/index.js';
import '@carbon/web-components/es/components/text-input/index.js';
`})}),`
`,n.jsx(e.h4,{id:"html",children:"HTML"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<div>
  <cds-button @click=\${this._openHandler}>Open SidePanel</cds-button>
  <c4p-side-panel
    @c4p-side-panel-closed=\${this._openHandler}
    class="\${blockClass}"
    ?animate-title=\${false}
    ?open=\${this.open}
    size="md"
    title="Create partitions"
  >
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
        <cds-text-input placeholder="Enter topic name" label="Topic name"></cds-text-input>
      </cds-form-item>
      <cds-form-item>
        <cds-number-input
          value="1"
          min="0"
          max="50"
          step="1"
          label="Partitions"
          size="md"
        >
        </cds-number-input>
      </cds-form-item>
      <cds-form-item>
        <cds-number-input
          value="1"
          min="0"
          max="50"
          step="1"
          label="Replicas"
          size="md"
        >
        </cds-number-input>
      </cds-form-item>
      <cds-form-item>
        <cds-number-input
          value="1"
          min="0"
          max="50"
          step="1"
          label="Minimum in-sync replicas"
          size="md"
        >
        </cds-number-input>
      </cds-form-item>
      <cds-form-item class="\${blockClass}__retention-row">
        <cds-number-input
          value="30"
          min="0"
          max="50"
          step="1"
          label="Retention time"
          size="md"
        >
        </cds-number-input>
        <cds-dropdown
          title-text="Options"
          label="Options"
          value="Day(s)"
        >
          <cds-dropdown-item value="Day(s)">Day(s)</cds-dropdown-item>
          <cds-dropdown-item value="Month(s)">Month(s)</cds-dropdown-item>
          <cds-dropdown-item value="Year(s)">Year(s)</cds-dropdown-item>
        </cds-dropdown>
      </cds-form-item>
      <cds-form-item>
        <cds-number-input
          value="1"
          min="0"
          max="50"
          step="1"
          label="Quantity"
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
`})}),`
`,n.jsx(e.h2,{id:"with-form-validation",children:"With Form Validation"}),`
`,n.jsx(e.p,{children:`The "With Form Validation" story extends the default pattern with basic form
validation:`}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["The ",n.jsx(e.strong,{children:"Create"})," button is disabled until the Topic name field contains text"]}),`
`,n.jsx(e.li,{children:`The Topic name field shows an invalid state with error text when blurred while
empty`}),`
`,n.jsx(e.li,{children:"Form state (topic name and invalid flag) resets when the panel is closed"}),`
`]}),`
`,n.jsx(e.h3,{id:"js-via-import-1",children:"JS (via import)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import '@carbon/ibm-products-web-components/es/components/side-panel/index.js';
import '@carbon/web-components/es/components/button/index.js';
import '@carbon/web-components/es/components/dropdown/index.js';
import '@carbon/web-components/es/components/form/form-item.js';
import '@carbon/web-components/es/components/number-input/index.js';
import '@carbon/web-components/es/components/text-input/index.js';
`})}),`
`,n.jsx(e.h3,{id:"key-differences-from-default",children:"Key differences from Default"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!-- Topic name input tracks value and shows validation -->
<cds-text-input
  placeholder="Enter topic name"
  label="Topic name"
  value=\${this.topicName}
  ?invalid=\${this.invalid}
  invalid-text="This is a required field"
  @input=\${this._handleTopicNameInput}
  @blur=\${this._handleTopicNameBlur}
></cds-text-input>

<!-- Create button disabled until topic name has a value -->
<cds-button
  slot="actions"
  kind="primary"
  ?disabled=\${!this.topicName.length}
  @click=\${this._openHandler}
  >Create</cds-button
>
`})})]})}function Y(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{Y as default};
