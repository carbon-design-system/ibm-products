import{j as e,M as s}from"./blocks-D2PmR6A2.js";import{useMDXComponents as i}from"./index-D9Jgl2Tx.js";import l from"./api-key-modal.stories-hY0CHvKk.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-Etog_1uH.js";import"./state-DSNP4DDc.js";import"./host-listener-DN1-XIwx.js";import"./modal-label-BsN1hQbW.js";import"./inline-loading-M6ieQhxH.js";import"./icon-loader-2iGE0hUJ.js";import"./class-map-DrB8Nott.js";import"./16-DSuDh1sQ.js";import"./icon-button-C58FG4yH.js";import"./button-DbFY82zT.js";import"./definition-tooltip-DNxqllHQ.js";import"./popover-content--Q8g0cY9.js";import"./floating-controller-O5_OP1Uj.js";import"./query-D0jTsbLw.js";import"./button-skeleton-ijMrHdaY.js";import"./20-CvqWH37X.js";import"./text-input-BsWRkIFW.js";import"./16-BKf1RCCE.js";import"./validity-5v9si4Dr.js";import"./text-input-skeleton-BFKx_7Pz.js";import"./16-aWrrgdCQ.js";import"./16-iEvmxbCa.js";import"./ref-9w6QLtPI.js";import"./form-group-D86coUoZ.js";import"./collection-helpers-Cnsts1JG.js";import"./toggle-B-oN_SCJ.js";import"./checkbox-B3YC-omz.js";import"./toggle-skeleton-CjxTlnE5.js";function t(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:l}),`
`,e.jsx(n.h1,{id:"apikeymodal",children:"APIKeyModal"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/patterns/generate-an-api-key/usage/",rel:"nofollow",children:"Usage guidelines"}),`
|
`,e.jsx(n.a,{href:"https://www.carbondesignsystem.com/components/modal/usage",rel:"nofollow",children:"Carbon modal usage guidelines"}),`
|
`,e.jsx(n.a,{href:"https://react.carbondesignsystem.com/?path=/docs/components-modal",rel:"nofollow",children:"Carbon modal documentation"})]}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#overview",children:"Overview"}),"."]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#example-usage",children:"Example usage"})}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:`The APIKey Modal pattern is used When designing for the generation of API keys,
ensure users know what the key is created for, the security implications, and
the end destination of the key.`}),`
`,e.jsx(n.p,{children:`Patterns have multiple ways of accomplishing a user need and typically use a
combination of components with additional design considerations. The pattern
code we share is meant to serve as an example implementation that can be built
and extended further.`}),`
`,e.jsx(n.p,{children:"To build this pattern, we recommend including the following components:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-modal",rel:"nofollow",children:"cds-modal"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-form-group",rel:"nofollow",children:"cds-form-group"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-radio-button",rel:"nofollow",children:"cds-radio-button"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-toggle",rel:"nofollow",children:"cds-toggle"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-inline-loading",rel:"nofollow",children:"cds-inline-loading"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-text-input",rel:"nofollow",children:"cds-text-input"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-button",rel:"nofollow",children:"cds-button"})}),`
`]}),`
`,e.jsx(n.h2,{id:"example-usage",children:"Example usage"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[`💡 Check our
`,e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/api-key-modal",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/api-key-modal",rel:"nofollow",children:e.jsx(n.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsx(n.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(n.h4,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/modal/index.js';
import '@carbon/web-components/es/components/button/index.js';
import '@carbon/web-components/es/components/text-input/index.js';
import '@carbon/web-components/es/components/inline-loading/index.js';
import '@carbon/web-components/es/components/form-group/index.js';
import '@carbon/web-components/es/components/radio-button/index.js';
import '@carbon/web-components/es/components/toggle/index.js';
`})}),`
`,e.jsx(n.h3,{id:"html",children:"HTML"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<cds-modal >
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
`})})]})}function H(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{H as default};
