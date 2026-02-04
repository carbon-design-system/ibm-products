import{j as n,M as s}from"./blocks-BzEZOrgq.js";import{useMDXComponents as i}from"./index-BYYhK2HH.js";import{e as l}from"./export-modal.stories-BMY7VXLy.js";import"./preload-helper-D9Z9MdNV.js";import"./iframe-CRtCEvHj.js";import"./state-CtNM5jHe.js";import"./class-map-BDBYr7ko.js";import"./modal-label-BL3rRNsf.js";import"./icon-loader-DNTraskY.js";import"./button-BPrzbWFT.js";import"./button-skeleton-Bkfs8A1v.js";import"./text-input-fIvTTJ0p.js";import"./query-DAIS6qJ0.js";import"./16-DGMTFMdo.js";import"./validity-CUJaV9kI.js";import"./text-input-skeleton-qlfwOlhX.js";import"./16-0nG14jWc.js";import"./16-DSflTaDq.js";import"./loading-CMI8n8Xs.js";import"./loading-icon-C0xK6mM8.js";import"./ref-_DMAocnm.js";import"./form-group-B_OFNGJ5.js";import"./collection-helpers-Cnsts1JG.js";function t(o){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:l}),`
`,n.jsx(e.h1,{id:"export",children:"Export"}),`
`,n.jsx(e.p,{children:"The export pattern is used for exporting resources to the system."}),`
`,n.jsx(e.p,{children:`Patterns have multiple ways of accomplishing a user need and typically use a
combination of components with additional design considerations. The pattern
code we share is meant to serve as an example implementation that can be built
and extended further.`}),`
`,n.jsx(e.p,{children:"To build this pattern, we recommend including the following components:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-modal",rel:"nofollow",children:"cds-modal"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-form-group",rel:"nofollow",children:"cds-form-group"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-text-input",rel:"nofollow",children:"cds-text-input"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-radio-button",rel:"nofollow",children:"cds-radio-button"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-loading",rel:"nofollow",children:"cds-loading"})}),`
`]}),`
`,n.jsxs(e.p,{children:["These components are used within the ",n.jsx(e.code,{children:"standard-export-modal"}),` and
`,n.jsx(e.code,{children:"export-modal-preformatted-extension"}),` wrapper components to handle state
management.`]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[`💡 Check our
`,n.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/export-modal",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/export-modal",rel:"nofollow",children:n.jsx(e.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,n.jsx(e.h2,{id:"basic-implementation",children:"Basic implementation"}),`
`,n.jsx(e.p,{children:`When a file’s name can be edited before exporting, a dialog containing an
editable textbox should be presented to the user. The textbox should be
pre-populated with the file’s default name.`}),`
`,n.jsx(e.h3,{id:"getting-started",children:"Getting started"}),`
`,n.jsx(e.p,{children:"Here's a quick example to get you started."}),`
`,n.jsx(e.h4,{id:"js-via-import",children:"JS (via import)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/modal/index.js';
import '@carbon/web-components/es/components/button/index';
import '@carbon/web-components/es/components/form-group/index';
import '@carbon/web-components/es/components/text-input/index';
import CheckmarkFilled16 from '@carbon/icons/es/checkmark--filled/16';
import ErrorFilled16 from '@carbon/icons/es/error--filled/16';
import '@carbon/web-components/es/components/loading/index';
`})}),`
`,n.jsx(e.h3,{id:"html",children:"HTML"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<cds-modal>
  <cds-modal-close-button @click="\${onCloseHandler()}"></cds-modal-close-button>
  <cds-modal-header>
    <cds-modal-heading>Export</cds-modal-heading>
  </cds-modal-header>
  <cds-modal-body>
    \${!submitted ? html\` \${this.validExtensions.length > 0 ? html \`
    <p>File must be exported in a PDF format</p>
    \`: null}
    <div>
      <cds-text-input
        placeholder="URL"
        label="File name"
        id="test-id"
        .value="\${this.filename}"
        @input="\${inputHandler}"
        @blur="\${handleBlur}"
        ?disabled
        .invalid="\${this.validExtensions? this.hasInvalidExtension(): false}"
        invalid-text="\${this.validExtensions.length > 0 ? 'File must have valid extension .pdf': null}"
      ></cds-text-input>
    </div>
    \` : null}
    <div aria-live="polite">
      \${this.loading ? html\`<cds-loading
        aria-live="off"
        description=""
        small
        .withOverlay="\${false}"
      ></cds-loading>
      <p>Exporting file...</p>
      \`: null} \${this.successful ? html\` \${iconLoader(CheckmarkFilled16, {slot: 'icon',})}
      <p>The file has been exported.</p>
      \`: null} \${this.error ? html\` \${iconLoader(ErrorFilled16, {slot: 'icon',})}
      <p>Server error 500</p>
      \`: null}
    </div>
  </cds-modal-body>
  \${!submitted ? html\`
  <cds-modal-footer>
    <cds-modal-footer-button
      kind="secondary"
      data-modal-close
      @click="\${onCloseHandler();}"
      >Cancel</cds-modal-footer-button
    >
    <cds-modal-footer-button
      ?disabled="\${checkDisabled()}"
      @click="\${submitHandler();}"
      >Export</cds-modal-footer-button
    > </cds-modal-footer
  >\`:null}
</cds-modal>
`})}),`
`,n.jsx(e.h2,{id:"with-extension",children:"With Extension"}),`
`,n.jsx(e.p,{children:"Similar as standard Export Modal with valid Extension property."}),`
`,n.jsx(e.h2,{id:"with-preformatted-extension",children:"With Preformatted Extension"}),`
`,n.jsx(e.p,{children:`When a file can be exported in 2-5 different formats, these can be presented in
a radio button selection. Where possible, provide guidance about which format a
user might want to choose, and set a sensible default.`}),`
`,n.jsx(e.h3,{id:"getting-started-1",children:"Getting started"}),`
`,n.jsx(e.p,{children:"Here's a quick example to get you started."}),`
`,n.jsx(e.h3,{id:"html-1",children:"HTML"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<cds-modal>
  <cds-modal-close-button @click="\${onCloseHandler()}"></cds-modal-close-button>
  <cds-modal-header>
    <cds-modal-heading>Export</cds-modal-heading>
  </cds-modal-header>
  <cds-modal-body>
    \${!submitted ? html\` \${this.validExtensions.length > 0 ? html \`
    <p>File must be exported in a PDF format</p>
    \`: null}
    <div>
      <cds-form-group legend-text="Choose an export format">
        \${this.preformattedExtension.length ? html \`<cds-radio-button-group
          name="extensions"
          @input="\${extensionChangeHandler}"
          value="\${this.extension}"
          orientation="vertical"
        >
          \${this.preformattedExtension.map(o) => html\`
          <cds-radio-button
            label-text="\${\`\${o.extension} (\${o.description})\`}"
            value="\${o.extension}"
            id="\${o.extension}"
          ></cds-radio-button
          >\`} </cds-radio-button-group
        >\` : null}
      </cds-form-group>
    </div>
    \` : null}
    <div aria-live="polite">
      \${this.loading ? html\`<cds-loading
        aria-live="off"
        description=""
        small
        .withOverlay="\${false}"
      ></cds-loading>
      <p>Exporting file...</p>
      \`: null} \${this.successful ? html\` \${iconLoader(CheckmarkFilled16, {slot: 'icon',})}
      <p>The file has been exported.</p>
      \`: null} \${this.error ? html\` \${iconLoader(ErrorFilled16, {slot: 'icon',})}
      <p>Server error 500</p>
      \`: null}
    </div>
  </cds-modal-body>
  \${!submitted ? html\`<cds-modal-footer>
    <cds-modal-footer-button
      kind="secondary"
      data-modal-close
      @click="\${onCloseHandler()}"
      >Cancel</cds-modal-footer-button
    >
    <cds-modal-footer-button
      ?disabled="\${!this.filename || this.loading}"
      @click="\${this.submitHandler()}"
      >Export</cds-modal-footer-button
    >
  </cds-modal-footer>
  \` : null}
</cds-modal>
`})})]})}function T(o={}){const{wrapper:e}={...i(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{T as default};
