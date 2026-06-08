import{u as o,j as t,M as s,A as a}from"./blocks-kYx6XcD1.js";import r from"./side-panel.stories-Cg-RDVtD.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-DR1WA3L-.js";import"./side-panel-DzA5YR-5.js";import"./state-TBFLRUV6.js";import"./query-D0jTsbLw.js";import"./host-listener-DN1-XIwx.js";import"./16-803qFA73.js";import"./16-D5maUdCH.js";import"./icon-loader-DL1ZNzxN.js";import"./class-map-Dg3tacqA.js";import"./index-CrWKEZ58.js";import"./button-C8YhQ_39.js";import"./button-skeleton-D_sbyVTw.js";import"./icon-button-BNlzycrP.js";import"./definition-tooltip-CpaTfnF5.js";import"./popover-content-v84rt999.js";import"./floating-controller-O5_OP1Uj.js";import"./layer-CGln1lfz.js";import"./action-set-DxbD8ocv.js";import"./ref-CtnuhZHj.js";import"./text-input-CUD5HWVf.js";import"./form-BTpacr1I.js";import"./validity-CzEiVmrf.js";import"./if-non-empty-DnuQKTz0.js";import"./16-C1hWzIbz.js";import"./16-B8NH1ntc.js";import"./text-input-skeleton-CVN-MygM.js";import"./textarea-skeleton-BK0dNBFT.js";import"./defs-Cv2ppYYy.js";import"./16-gUhxGjnI.js";import"./16-C-Ba_D2f.js";import"./breadcrumb-skeleton-CcYX_F_J.js";import"./link-DHxziJLp.js";import"./toast-notification-CzAuk7Ie.js";import"./actionable-notification-button-Wc3ppkhL.js";import"./callout-notification-CfRP5wnM.js";function i(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...o(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:r}),`
`,t.jsx(e.h1,{id:"sidepanel",children:"SidePanel"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsxs(e.p,{children:[`💡 Check our
`,t.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/side-panel",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/side-panel",rel:"nofollow",children:t.jsx(e.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,t.jsx(e.p,{children:`Side panels keep users in-context of a page while performing tasks like
navigating, editing, viewing details, or configuring something new.`}),`
`,t.jsx(e.h2,{id:"getting-started",children:"Getting started"}),`
`,t.jsx(e.p,{children:"Here's a quick example to get you started."}),`
`,t.jsx(e.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import '@carbon/ibm-products-web-components/es/components/side-panel/index.js';
// The following are used for slotted fields
import '@carbon/web-components/es/components/text-input/index.js';
import '@carbon/web-components/es/components/textarea/index.js';
import '@carbon/web-components/es/components/button/index.js';
`})}),`
`,t.jsx(e.h3,{id:"html",children:"HTML"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<c4p-side-panel
  include-overlay
  open
  label-text="An optional label"
  size="md"
  title="A title, can be omitted"
>
  <!-- Content -->
  <h5>Side panel content</h5>
  <div class="\${storyPrefix}text-inputs">
    <cds-text-input
      label="Input A"
      id="side-panel-story-text-input-a"
    ></cds-text-input>
    <cds-text-input
      label="Input B"
      id="side-panel-story-text-input-b"
    ></cds-text-input>
  </div>
  <div class="\${storyPrefix}text-inputs">
    <cds-text-input
      label="Input C"
      id="side-panel-story-text-input-c"
    ></cds-text-input>
    <cds-text-input
      label="Input D"
      id="side-panel-story-text-input-d"
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

  <!-- Side panel actions optional -->
  <cds-button slot="actions" kind="\${BUTTON_KIND.GHOST}">Ghost</cds-button>
  <cds-button slot="actions" kind="\${BUTTON_KIND.PRIMARY}"></cds-button>
</c4p-side-panel>
`})}),`
`,t.jsxs(e.h2,{id:"c4p-side-panel-attributes-properties-and-events",children:[t.jsx(e.code,{children:"<c4p-side-panel>"})," attributes, properties and events"]}),`
`,t.jsxs(e.p,{children:["Note: For ",t.jsx(e.code,{children:"boolean"})," attributes, ",t.jsx(e.code,{children:"true"}),` means simply setting the attribute (e.g.
`,t.jsx(e.code,{children:"<c4p-side-panel open>"}),") and ",t.jsx(e.code,{children:"false"}),` means not setting the attribute (e.g.
`,t.jsx(e.code,{children:"<c4p-side-panel>"})," without ",t.jsx(e.code,{children:"open"})," attribute)."]}),`
`,t.jsx(a,{of:"c4p-side-panel"})]})}function F(n={}){const{wrapper:e}={...o(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(i,{...n})}):i(n)}export{F as default};
