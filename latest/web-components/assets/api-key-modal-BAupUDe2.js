import{j as n,M as s}from"./blocks-DYBDMA8S.js";import{useMDXComponents as i}from"./index-m1wblmMm.js";import{a as l}from"./api-key-modal.stories-i-GeS6u9.js";import"./iframe-Dehrahfq.js";import"./state-C9UqjUZL.js";import"./class-map-Bbjbq_-I.js";import"./modal-label-XVN8z6qn.js";import"./20-ocrHuuRm.js";import"./spread-BsFCWSZ_.js";import"./button-CfSafBDM.js";import"./button-skeleton-D8b7xDTQ.js";import"./text-input-DZI5UsbE.js";import"./form-BwhIWYgg.js";import"./text-input-skeleton-B6E04RPk.js";import"./inline-loading-Dm9B2UWv.js";import"./16-Dn1eLgao.js";import"./16-HbgIh-wu.js";import"./loading-icon-1jsyNKfd.js";import"./ref-gWUNFhCh.js";import"./radio-button-skeleton-D3KNPLwC.js";import"./collection-helpers-Do_VULfa.js";import"./toggle-D4Q91sze.js";import"./checkbox-DIfKX_qL.js";function t(o){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:l}),`
`,n.jsx(e.h1,{id:"apikeymodal",children:"APIKeyModal"}),`
`,n.jsx(e.p,{children:`The APIKey Modal pattern is used When designing for the generation of API keys,
ensure users know what the key is created for, the security implications, and
the end destination of the key.`}),`
`,n.jsx(e.p,{children:`Patterns have multiple ways of accomplishing a user need and typically use a
combination of components with additional design considerations. The pattern
code we share is meant to serve as an example implementation that can be built
and extended further.`}),`
`,n.jsx(e.p,{children:"To build this pattern, we recommend including the following components:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-modal",rel:"nofollow",children:"cds-modal"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-form-group",rel:"nofollow",children:"cds-form-group"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-radio-button",rel:"nofollow",children:"cds-radio-button"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-toggle",rel:"nofollow",children:"cds-toggle"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-inline-loading",rel:"nofollow",children:"cds-inline-loading"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-text-input",rel:"nofollow",children:"cds-text-input"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-button",rel:"nofollow",children:"cds-button"})}),`
`]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[`💡 Check our
`,n.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/api-key-modal",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/api-key-modal",rel:"nofollow",children:n.jsx(e.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,n.jsx(e.h2,{id:"getting-started",children:"Getting started"}),`
`,n.jsx(e.p,{children:"Here's a quick example to get you started."}),`
`,n.jsx(e.h4,{id:"js-via-import",children:"JS (via import)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/modal/index.js';
import '@carbon/web-components/es/components/button/index.js';
import '@carbon/web-components/es/components/text-input/index.js';
import '@carbon/web-components/es/components/inline-loading/index.js';
import '@carbon/web-components/es/components/form-group/index.js';
import '@carbon/web-components/es/components/radio-button/index.js';
import '@carbon/web-components/es/components/toggle/index.js';
`})}),`
`,n.jsx(e.h3,{id:"html",children:"HTML"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<cds-modal >
  <cds-modal-header>
    <cds-modal-label>An example of Generate API key</cds-modal-label>
    <cds-modal-heading>Generate an API key</cds-modal-heading>
  </cds-modal-header>
  <cds-modal-body>
    <cds-modal-body-content>
      (Optional description text) To connect securely to [product name], your
      application or tool needs an API key with permission to access resources
      such as [product resource name].
    </cds-modal-body-content>

    \${this.apiKey ? html\`
    <cds-text-input
      value="\${this.apiKey}"
      label="API key"
      showPasswordLabel="Show key"
      hidePasswordLabel="Hide key"
      tooltipPosition="left"
      type="password"
      show-password-visibility-toggle="true"
      readonly="true"
      helper-text="This is your unique API key and is non-recoverable. If you lose this API key, you will have to reset it."
    />
    \` : null} \${!this.apiKeyLoaded && this.nameRequired ? html\`
    <cds-form-item>
      <cds-text-input
        label="Name your application"
        id="test-id"
        .value="\${this.apiKeyName}"
        @input="\${this._inputHandler}"
        placeholder="Application name"
        ?disabled="\${this.loading}"
        ?required="\${this.nameRequired}"
        helper-text="Providing the application name will help you identify your API key later."
      ></cds-text-input> </cds-form-item
    >\` : null} \${this.loading ? html\`
    <cds-inline-loading
      ?icon-description="Generating"
      >Generating...</cds-inline-loading
    >
    \` : null} \${this.copyError || this.error ? html\`
    <div>
      <div>
        \${ErrorFilled16({ slot: 'icon'})}
      </div>
      <p
        class="\${\`\${blockClass}__messaging-text\`}"
        role="alert"
        aria-live="assertive"
      >
        \${this.copyError ? html\`\` : html\`Failed to create API key\`}
      </p>
    </div>
    \` : null} \${this.apiKeyLoaded ? html\`
    <div>
      \${InformationFilled16({ slot: 'icon', })} \${this.hasDownloadLink ? html\`
      <api-key-downloader
        apiKey="\${this.apiKey}"
        fileName="apikey"
        linkText="Download as JSON"
        fileType="json"
        downloadLinkLabel="Download API Key in Java Script File format"
      />\` : html\`
      <div
        role="alert"
        aria-live="assertive"
      >
        <p>
          This is your unique API key and is non-recoverable. If you lose this
          API key, you will have to reset it.
        </p>
      </div>
      \`}
    </div>
    \` : null} \${this.editSuccess || this.apiKeyLoaded ? html\`
    <div>
      \${CheckmarkFilled16({ slot: 'icon'})}
      <p
        role="alert"
        aria-live="assertive"
      >
        API key successfully created
      </p>
    </div>
    \` : null}
  </cds-modal-body>
  <cds-modal-footer>
    <cds-modal-footer-button
      kind="secondary"
      data-modal-close
      @click="\${onCloseHandler}"
    >Close</cds-modal-footer-button>
    <cds-modal-footer-button
      ?disabled="\${this.isPrimaryButtonDisabled()}"
      @click="\${this._submitHandler}"
      >\${this.apiKeyLoaded ? html \`Copy \${Copy16({ slot: 'icon' })}\` : 'Generate
      API key'}
    </cds-modal-footer-button>
  </cds-modal-footer>
</cds-modal>
`})})]})}function C(o={}){const{wrapper:e}={...i(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{C as default};
