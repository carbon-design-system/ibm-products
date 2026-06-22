import{u as i,j as t,M as s,A as r}from"./blocks-HMKi1Hst.js";import a from"./tearsheet.stories-Dx4FpJ_2.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-Dkc0Ia68.js";import"./tearsheet-BRaBz4ad.js";import"./state-D8btNkt2.js";import"./query-D0jTsbLw.js";import"./query-assigned-elements-CblsR2sJ.js";import"./host-listener-DN1-XIwx.js";import"./button-BzIgzRzW.js";import"./class-map-CmISaglH.js";import"./button-skeleton-DW8oJA9t.js";import"./layer-BlUuHoX8.js";import"./modal-label-ji4xjuET.js";import"./inline-loading-Ca9ibbg0.js";import"./icon-loader-D7NoNf8T.js";import"./16-DSuDh1sQ.js";import"./icon-button-C-lClvkb.js";import"./definition-tooltip-B9TXRXyy.js";import"./popover-content-zu5IwWNI.js";import"./floating-controller-O5_OP1Uj.js";import"./20-CvqWH37X.js";import"./defs-Cv2ppYYy.js";import"./tab-skeleton-Bu4jI0vi.js";import"./collection-helpers-Cnsts1JG.js";import"./16-D5maUdCH.js";import"./badge-indicator-BVQh5HFj.js";import"./text-input-DIDN-yvc.js";import"./form-BTpacr1I.js";import"./validity-CzEiVmrf.js";import"./if-non-empty-B6ropqBp.js";import"./16-C1hWzIbz.js";import"./16-B8NH1ntc.js";import"./text-input-skeleton-B6mKeuC-.js";import"./textarea-skeleton-ByM1VWaD.js";import"./slug-action-button-spcDc8e2.js";import"./progress-bar-GOc26Xah.js";import"./16-DvgjsF02.js";import"./dropdown-skeleton-nQmVjz-8.js";import"./16-D0aIqdwb.js";import"./16-C2f9e6nj.js";import"./progress-step-21AWfk0s.js";import"./skeleton-text-DMvZ_1ao.js";import"./16-Ci-Iy0jC.js";import"./16-D3CzXAJU.js";import"./truncated-text-CXzduq2E.js";import"./style-map-DH85bSAs.js";import"./link-DzQnlb98.js";function o(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:a}),`
`,t.jsx(e.h1,{id:"tearsheet",children:"Tearsheet"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsxs(e.p,{children:[`💡 Check our
`,t.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/tearsheet",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/tearsheet",rel:"nofollow",children:t.jsx(e.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,t.jsx(e.p,{children:`A tearsheet is a mostly full-screen type of dialog that keeps users in-context
and focused by bringing actionable content front and center while revealing
parts of the UI behind it. There is also a narrow variant of the tearsheet.`}),`
`,t.jsx(e.p,{children:`A tearsheet comprises up to 5 zones, allowing for flexibility depending on the
content: a heading area including a title, an optional navigation area that sits
just below the heading, an optional influencer which is a side panel on either
the left or right side, the main content area, and a set of action buttons.`}),`
`,t.jsx(e.h2,{id:"getting-started",children:"Getting started"}),`
`,t.jsx(e.p,{children:"Here's a quick example to get you started."}),`
`,t.jsx(e.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import '@carbon/ibm-products-web-components/es/components/tearsheet/index.js';
// The following are used for slotted fields
import '@carbon/web-components/es/components/text-input/index.js';
import '@carbon/web-components/es/components/textarea/index.js';
import '@carbon/web-components/es/components/button/index.js';
`})}),`
`,t.jsx(e.h3,{id:"html",children:"HTML"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<c4p-tearsheet>
  <!-- Content -->
  <h5>Tearsheet content</h5>
  <div class="\${storyPrefix}text-inputs">
    <cds-text-input
      label="Input A"
      id="tearsheet-story-text-input-a"
    ></cds-text-input>
    <cds-text-input
      label="Input B"
      id="tearsheet-story-text-input-b"
    ></cds-text-input>
  </div>
  <div class="\${storyPrefix}text-inputs">
    <cds-text-input
      label="Input C"
      id="tearsheet-story-text-input-c"
    ></cds-text-input>
    <cds-text-input
      label="Input D"
      id="tearsheet-story-text-input-d"
    ></cds-text-input>
  </div>
  <div class="\${storyPrefix}textarea-container">
    <cds-textarea label="Notes" value="This is a text area"></cds-textarea>
    <cds-textarea label="Notes" value="This is a text area"></cds-textarea>
    <cds-textarea label="Notes" value="This is a text area"></cds-textarea>
  </div>

  <!-- subtitle optional -->
  <div slot="subtitle">
    Subtitle text which can provide more detail on the content being displayed.
  </div>

  <!-- Action toolbar optional -->
  <cds-button slot="action-toolbar">Copy</cds-button>
  <cds-button
    slot="action-toolbar"
    aria-label="Settings"
    has-icon-only="true"
    kind="\${BUTTON_KIND.GHOST}"
    size="sm"
    tooltip-text="Settings"
  >
    \${Settings({ slot: 'icon' })}
  </cds-button>
  <cds-button
    slot="action-toolbar"
    aria-label="Delete"
    has-icon-only="true"
    kind="\${BUTTON_KIND.GHOST}"
    size="sm"
    tooltip-text="Delete"
  >
    \${Trashcan({ slot: 'icon' })}
  </cds-button>

  <!-- Tearsheet actions optional -->
  <cds-button slot="actions" kind="\${BUTTON_KIND.GHOST}">Ghost</cds-button>
  <cds-button slot="actions" kind="\${BUTTON_KIND.PRIMARY}"></cds-button>
</c4p-tearsheet>
`})}),`
`,t.jsxs(e.h2,{id:"c4p-tearsheet-attributes-properties-and-events",children:[t.jsx(e.code,{children:"<c4p-tearsheet>"})," attributes, properties and events"]}),`
`,t.jsxs(e.p,{children:["Note: For ",t.jsx(e.code,{children:"boolean"})," attributes, ",t.jsx(e.code,{children:"true"}),` means simply setting the attribute (e.g.
`,t.jsx(e.code,{children:"<c4p-tearsheet open>"}),") and ",t.jsx(e.code,{children:"false"}),` means not setting the attribute (e.g.
`,t.jsx(e.code,{children:"<c4p-tearsheet>"})," without ",t.jsx(e.code,{children:"open"})," attribute)."]}),`
`,t.jsx(r,{of:"c4p-tearsheet"})]})}function nt(n={}){const{wrapper:e}={...i(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(o,{...n})}):o(n)}export{nt as default};
