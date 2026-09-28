import{u as o,j as t,M as s,A as a}from"./blocks-QGBcU6m1.js";import r from"./side-panel.stories-BaOYGPh4.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-BwFky8KF.js";import"./side-panel-jEZc135U.js";import"./state-DrckJZ2L.js";import"./class-map-uE7ZMOog.js";import"./host-listener-DN1-XIwx.js";import"./16-803qFA73.js";import"./16-D5maUdCH.js";import"./icon-loader-DuT9yokZ.js";import"./resizer-panel-DKWzruGZ.js";import"./tslib.es6-Cdhlq9ds.js";import"./button-CAHXFj4a.js";import"./button-skeleton-a5jOaw_5.js";import"./icon-button-Bzu27wpE.js";import"./definition-tooltip-BnYf1CeA.js";import"./deep-shadow-contains-Cz_peORR.js";import"./popover-content-Cr3k-9hl.js";import"./layer-CIKPh-Rn.js";import"./action-set-D_ZDS8ix.js";import"./ref-8_L2P8Kp.js";import"./text-input-BGdJVt5e.js";import"./form-BTpacr1I.js";import"./validity-CzEiVmrf.js";import"./if-non-empty-BYa1m-oL.js";import"./16-C1hWzIbz.js";import"./16-B8NH1ntc.js";import"./16-B9g2nIv4.js";import"./text-input-skeleton-Rp1vD2KG.js";import"./textarea-skeleton-CViuS5Z7.js";import"./defs-Cv2ppYYy.js";import"./16-gUhxGjnI.js";import"./16-C-Ba_D2f.js";import"./breadcrumb-skeleton-By24sUqA.js";import"./link-Cie1CkZ5.js";import"./toast-notification-BSxDOeWY.js";import"./actionable-notification-button-C93n0olW.js";import"./callout-notification-Cu8uCk5g.js";function i(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...o(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:r}),`
`,t.jsx(e.h1,{id:"sidepanel",children:"SidePanel"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsxs(e.p,{children:[`💡 Check our
`,t.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/side-panel",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/side-panel",rel:"nofollow",children:t.jsx(e.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,t.jsx(e.p,{children:`Side panels keep users in-context of a page while performing tasks like
navigating, editing, viewing details, or configuring something new.`}),`
`,t.jsxs(e.p,{children:[`The side panel supports an optional resizer feature that allows users to adjust
the panel width by dragging a handle. This feature uses the
`,t.jsx(e.code,{children:"@carbon-labs/wc-resizer"}),` component and can be enabled by setting the
`,t.jsx(e.code,{children:"enable-resizer"})," attribute."]}),`
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
  enable-resizer
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
`,t.jsx(a,{of:"c4p-side-panel"})]})}function L(n={}){const{wrapper:e}={...o(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(i,{...n})}):i(n)}export{L as default};
