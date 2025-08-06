import{j as t,M as i,A as a}from"./blocks-BtrZhanP.js";import{useMDXComponents as o}from"./index-D-vrZS-T.js";import{T as r}from"./tearsheet.stories-AV-G_0_f.js";import"./iframe-CBTnhw7N.js";import"./state-Cbt-Dy8_.js";import"./class-map-D3uJeleG.js";import"./query-assigned-elements-DLzgSFIn.js";import"./button-BToDYsiH.js";import"./button-skeleton-BV8rXZvI.js";import"./layer-BOYyLOKr.js";import"./modal-label-dMakarmS.js";import"./20-DJXP4POB.js";import"./spread-D-IYg-7S.js";import"./tab-skeleton-2a3puTbB.js";import"./collection-helpers-DQ0QbBzH.js";import"./16-3X0NjQru.js";import"./definition-tooltip-BMZfQ_wf.js";import"./16-AZA-TeRU.js";import"./form-B49nrHIj.js";import"./text-input-Bp_8H1ny.js";import"./16-77nfke1x.js";import"./16-CTsOp7n4.js";import"./text-input-skeleton-CdhSg0cH.js";import"./textarea-skeleton-CyYdEyIh.js";import"./truncated-text-CJftUeBN.js";import"./link-BW1Ue7Ek.js";function s(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...o(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{of:r}),`
`,t.jsx(e.h1,{id:"tearsheet",children:"Tearsheet"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsxs(e.p,{children:[`💡 Check our
`,t.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/tearsheet",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/tearsheet",rel:"nofollow",children:t.jsx(e.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,t.jsx(e.p,{children:"A tearsheet is a mostly full-screen type of dialog that keeps users in-context and focused by bringing actionable content front and center while revealing parts of the UI behind it. There is also a narrow variant of the tearsheet."}),`
`,t.jsx(e.p,{children:"A tearsheet comprises up to 5 zones, allowing for flexibility depending on the content: a heading area including a title, an optional navigation area that sits just below the heading, an optional influencer which is a side panel on either the left or right side, the main content area, and a set of action buttons."}),`
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
      id="tearsheet-story-text-input-a"></cds-text-input>
    <cds-text-input
      label="Input B"
      id="tearsheet-story-text-input-b"></cds-text-input>
  </div>
  <div class="\${storyPrefix}text-inputs">
    <cds-text-input
      label="Input C"
      id="tearsheet-story-text-input-c"></cds-text-input>
    <cds-text-input
      label="Input D"
      id="tearsheet-story-text-input-d"></cds-text-input>
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
    tooltip-text="Settings">
    \${Settings({ slot: 'icon' })}
  </cds-button>
  <cds-button
    slot="action-toolbar"
    aria-label="Delete"
    has-icon-only="true"
    kind="\${BUTTON_KIND.GHOST}"
    size="sm"
    tooltip-text="Delete">
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
`,t.jsx(a,{of:"c4p-tearsheet"})]})}function C(n={}){const{wrapper:e}={...o(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(s,{...n})}):s(n)}export{C as default};
