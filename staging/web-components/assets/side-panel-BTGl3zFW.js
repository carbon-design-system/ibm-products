import{j as t,M as s,A as a}from"./index-D-Oa9lTF.js";import{useMDXComponents as o}from"./index-DYhTUxTr.js";import{S as r}from"./side-panel.stories-BGahXsH_.js";import"./iframe-B-6S7qXZ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";import"./lit-element-B5NQPoCB.js";import"./carbon-element-C-vEVMF2.js";import"./state-DK_n439u.js";import"./class-map-Duf76KCM.js";import"./query-assigned-elements-B7BWcrrG.js";import"./settings-01Nn-mNp.js";import"./settings-BYM-UxKO.js";import"./spread-D_CBe4YO.js";import"./20-CLL_zZQf.js";import"./button-CjC2oM9O.js";import"./focus-BhzKTEFX.js";import"./button-skeleton-IGTvngUO.js";import"./icon-button-Buhi13AX.js";import"./definition-tooltip-D31Xh-9R.js";import"./defs-DmJ6Jw23.js";import"./layer-BB7Zu3Fj.js";import"./text-input-DD9tXeyX.js";import"./form-BdiM1BJz.js";import"./text-input-skeleton-mw_-Ah61.js";import"./textarea-skeleton-BZ0cLKo9.js";function i(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...o(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:r}),`
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
  title="A title, can be omitted">
  <!-- Content -->
  <h5>Side panel content</h5>
  <div class="\${storyPrefix}text-inputs">
    <cds-text-input
      label="Input A"
      id="side-panel-story-text-input-a"></cds-text-input>
    <cds-text-input
      label="Input B"
      id="side-panel-story-text-input-b"></cds-text-input>
  </div>
  <div class="\${storyPrefix}text-inputs">
    <cds-text-input
      label="Input C"
      id="side-panel-story-text-input-c"></cds-text-input>
    <cds-text-input
      label="Input D"
      id="side-panel-story-text-input-d"></cds-text-input>
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

  <!-- Side panel actions optional -->
  <cds-button slot="actions" kind="\${BUTTON_KIND.GHOST}">Ghost</cds-button>
  <cds-button slot="actions" kind="\${BUTTON_KIND.PRIMARY}"></cds-button>
</c4p-side-panel>
`})}),`
`,t.jsxs(e.h2,{id:"c4p-side-panel-attributes-properties-and-events",children:[t.jsx(e.code,{children:"<c4p-side-panel>"})," attributes, properties and events"]}),`
`,t.jsxs(e.p,{children:["Note: For ",t.jsx(e.code,{children:"boolean"})," attributes, ",t.jsx(e.code,{children:"true"}),` means simply setting the attribute (e.g.
`,t.jsx(e.code,{children:"<c4p-side-panel open>"}),") and ",t.jsx(e.code,{children:"false"}),` means not setting the attribute (e.g.
`,t.jsx(e.code,{children:"<c4p-side-panel>"})," without ",t.jsx(e.code,{children:"open"})," attribute)."]}),`
`,t.jsx(a,{of:"c4p-side-panel"})]})}function O(n={}){const{wrapper:e}={...o(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(i,{...n})}):i(n)}export{O as default};
