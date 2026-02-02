import{j as e,M as s}from"./blocks-Ca2gZWhY.js";import{useMDXComponents as i}from"./index-CWnaG5n0.js";import{D as c}from"./delete-and-remove.stories-Di34ktDT.js";import"./preload-helper-D9Z9MdNV.js";import"./iframe-CPwma648.js";import"./state-BZ954teF.js";import"./modal-label-BPUdpckU.js";import"./class-map-BjEbJ_wj.js";import"./icon-loader-Bb4ppSSv.js";import"./button-BE8YYPkS.js";import"./form-item-B7v7p6SW.js";import"./text-input-BX25Iv0z.js";import"./query-DAIS6qJ0.js";import"./16-Wf9R93-z.js";import"./validity-CUJaV9kI.js";import"./16-BGJEph7x.js";import"./16-D5maUdCH.js";import"./checkbox-CyHkCwxR.js";import"./link-CRJoQCKP.js";import"./16-xraWWrlP.js";function o(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c}),`
`,e.jsx(n.h1,{id:"delete-and-remove",children:"Delete and remove"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/patterns/delete-and-remove/usage/",rel:"nofollow",children:"Delete and remove usage guidelines"})}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:`“Removing” is an action that moves information from one location to another.
Removal can be both destructive and non-destructive. “Deletion” is the most
common type of removal and is destructive`}),`
`,e.jsx(n.h2,{id:"coded-examples",children:"Coded examples"}),`
`,e.jsx(n.p,{children:`Patterns have multiple ways of accomplishing a user need and typically use a
combination of components with additional design considerations. The pattern
code we share is meant to serve as an example implementation that can be built
and extended further.`}),`
`,e.jsx(n.h4,{id:"ingredients",children:"Ingredients"}),`
`,e.jsx(n.p,{children:"To build this pattern, we recommend including the following components:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-modal",rel:"nofollow",children:"cds-modal"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-text-input--overview",rel:"nofollow",children:"cds-text-input"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-notifications-toast--overview",rel:"nofollow",children:"cds-toast-notification"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-button--overview",rel:"nofollow",children:"cds-button"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-checkbox--overview",rel:"nofollow",children:"cds-checkbox"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-link--overview",rel:"nofollow",children:"cds-link"})}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[`💡 Check our
`,e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/delete-and-remove",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/delete-and-remove",rel:"nofollow",children:e.jsx(n.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsx(n.h2,{id:"high-impact-deletion",children:"High impact deletion"}),`
`,e.jsx(n.p,{children:`When deleting is high-impact, a confirmation dialog should be presented to the
user which displays:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The name of the resource"}),`
`,e.jsx(n.li,{children:"Consequences of the deletion"}),`
`,e.jsx(n.li,{children:"This action cannot be undone."}),`
`,e.jsx(n.li,{children:"An editable text field for the name of the resource to be entered"}),`
`]}),`
`,e.jsx(n.h3,{id:"example",children:"Example"}),`
`,e.jsx(n.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(n.h4,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/modal/index.js';
import '@carbon/web-components/es/components/form/form-item.js';
import '@carbon/web-components/es/components/text-input/text-input.js';
import '@carbon/web-components/es/components/notification/toast-notification.js';
import '@carbon/web-components/es/components/checkbox/checkbox.js';
import '@carbon/web-components/es/components/link/link.js';
`})}),`
`,e.jsx(n.h4,{id:"html",children:"HTML"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<cds-modal size="sm" ?open="\${this._open}" prevent-close>
  <cds-modal-header>
    <cds-modal-close-button @click="\${this._close}"></cds-modal-close-button>
    <cds-modal-label>Delete Bx1001</cds-modal-label>
    <cds-modal-heading>Confirm delete</cds-modal-heading>
  </cds-modal-header>
  <cds-modal-body>
    <cds-modal-body-content description="">
      Deleting 'Bx1001' will permanently delete the configuration. This action
      cannot be undone.
    </cds-modal-body-content>
    <cds-form-item>
      <cds-text-input
        placeholder="Name of resource"
        label="Type Bx1001 to confirm"
        value="\${this._textInput}"
        @input="\${this._onInputChange}"
        autocomplete="off"
      >
      </cds-text-input>
    </cds-form-item>
  </cds-modal-body>
  <cds-modal-footer>
    <cds-modal-footer-button kind="secondary" @click="\${this._close}"
      >Cancel</cds-modal-footer-button
    >
    <cds-modal-footer-button
      ?disabled="\${!this._enableDelete}"
      kind="danger"
      @click="\${this._onDelete}"
      >Delete
    </cds-modal-footer-button>
  </cds-modal-footer>
</cds-modal>
<cds-toast-notification
  class="notification"
  kind="success"
  title="Success"
  subtitle="Bx1001 has been successfully deleted."
  caption="\${getCurrentTime()}"
  low-contrast="true"
  timeout="3000"
  @cds-notification-closed="\${this._onNotificationClose}"
></cds-toast-notification>
`})}),`
`,e.jsx(n.h3,{id:"deletion-with-connected-items",children:"Deletion with connected items"}),`
`,e.jsx(n.p,{children:`It is similar to high-impact deletion pattern, but the confirmation dialog will
display the below 2 additional content:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"A list of all the connected items"}),`
`,e.jsx(n.li,{children:"A checkbox to confirm the deletion of all its connected items."}),`
`]}),`
`,e.jsx(n.h3,{id:"batch-deletion",children:"Batch deletion"}),`
`,e.jsx(n.p,{children:`In batch deletion, a confirmation dialog should be presented to the user which
displays:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The names of the items selected"}),`
`,e.jsx(n.li,{children:"The consequences of the deletion"}),`
`,e.jsx(n.li,{children:"The phrase, “This action cannot be undone”"}),`
`,e.jsx(n.li,{children:"A checkbox to confirm the deletion of the selected resources"}),`
`,e.jsx(n.li,{children:"A note of items that cannot be deleted in batch selection (optional)"}),`
`]}),`
`,e.jsx(n.h3,{id:"example-1",children:"Example"}),`
`,e.jsx(n.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(n.h4,{id:"html-1",children:"HTML"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<cds-modal size="sm" ?open="\${this._open}" prevent-close>
  <cds-modal-header>
    <cds-modal-close-button @click="\${this._close}"></cds-modal-close-button>
    <cds-modal-label>Delete selected items</cds-modal-label>
    <cds-modal-heading>Confirm delete</cds-modal-heading>
  </cds-modal-header>
  <cds-modal-body>
    <cds-modal-body-content description="">
      Decide if you want to keep these items. Deleting these items is permanent.
      This action cannot be undone.
    </cds-modal-body-content>
    <cds-modal-label
      >The following items will be deleted. Review each item to confirm that
      they can be deleted.</cds-modal-label
    >
    <cds-checkbox
      ?checked="\${this._isCheckboxChecked}"
      @cds-checkbox-changed="\${this._onCheckboxChange}"
      >3 items:</cds-checkbox
    >
    <ul class="no-bullets">
      <li><cds-link> Route1_name \${Launch16} </cds-link></li>
      <li><cds-link> Hpt-392-ser \${Launch16} </cds-link></li>
      <li><cds-link> Route2_name \${Launch16} </cds-link></li>
    </ul>

    <p>
      Note - the following selected items cannot be deleted:
      <cds-link>Route3_name</cds-link>, <cds-link>Route4_name</cds-link>
    </p>
  </cds-modal-body>
  <cds-modal-footer>
    <cds-modal-footer-button kind="secondary" @click="\${this._close}"
      >Cancel</cds-modal-footer-button
    >
    <cds-modal-footer-button
      ?disabled="\${!this._enableDelete}"
      kind="danger"
      @click="\${this._onDelete}"
      >Delete</cds-modal-footer-button
    >
  </cds-modal-footer>
</cds-modal>
<cds-toast-notification
  class="notification"
  kind="success"
  title="Success"
  subtitle="Selected items have been successfully deleted."
  caption="\${getCurrentTime()}"
  low-contrast="true"
  timeout="3000"
  @cds-notification-closed="\${this._onNotificationClose}"
></cds-toast-notification>
`})}),`
`,e.jsx(n.h2,{id:"medium-impact-deletion-or-removal",children:"Medium impact deletion or removal"}),`
`,e.jsx(n.p,{children:`When deleting is medium-impact, a confirmation dialog should be presented to the
user which displays:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The name of the resource"}),`
`,e.jsx(n.li,{children:"Consequences of the deletion"}),`
`,e.jsx(n.li,{children:"The action cannot be undone."}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`NOTE: The medium-impact removal pattern is similar to medium-impact deletion
pattern, with the only difference being the usage of “remove” or “delete“ in
the text. Use “remove” when the action is reversible or not truly destructive.`}),`
`]}),`
`,e.jsx(n.h3,{id:"example-2",children:"Example"}),`
`,e.jsx(n.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(n.h4,{id:"html-2",children:"HTML"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<cds-modal size="sm" ?open="\${this._open}" prevent-close>
  <cds-modal-header>
    <cds-modal-close-button @click="\${this._close}"></cds-modal-close-button>
    <cds-modal-label>Delete Bx1001</cds-modal-label>
    <cds-modal-heading>Confirm delete</cds-modal-heading>
  </cds-modal-header>
  <cds-modal-body>
    <cds-modal-body-content description="">
      Deleting 'Bx1001' will permanently delete the configuration. This action
      cannot be undone.
    </cds-modal-body-content>
  </cds-modal-body>
  <cds-modal-footer>
    <cds-modal-footer-button kind="secondary" @click="\${this._close}"
      >Cancel</cds-modal-footer-button
    >
    <cds-modal-footer-button kind="danger" @click="\${this._onDelete}">
      Delete
    </cds-modal-footer-button>
  </cds-modal-footer>
</cds-modal>
<cds-toast-notification
  class="notification"
  kind="success"
  title="Success"
  subtitle="Bx1001 has been successfully deleted"
  caption="\${getCurrentTime()}"
  low-contrast="true"
  timeout="3000"
  @cds-notification-closed="\${this._onNotificationClose}"
></cds-toast-notification>
`})}),`
`,e.jsx(n.h2,{id:"low-impact-deletion-or-removal",children:"Low impact deletion or removal"}),`
`,e.jsx(n.p,{children:`Requiring the user to confirm deletion is generally recommended. However, in low
impact situations, or when an ‘undo’ option is available, user confirmation may
not be required.`}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`NOTE: The low-impact removal pattern is similar to low-impact deletion
pattern, with the only difference being the usage of “remove” or “delete“ in
the text. Use “remove” when the action is reversible or not truly destructive.`}),`
`]}),`
`,e.jsx(n.h3,{id:"example-3",children:"Example"}),`
`,e.jsx(n.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(n.h4,{id:"html-3",children:"HTML"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<cds-button
  type="button"
  kind="danger"
  size="md"
  @click="\${this._onDeleteButtonClick}"
>
  Delete \${TrashCan16}
</cds-button>
<cds-toast-notification
  class="notification"
  kind="success"
  title="Success"
  subtitle="Bx1001 has been successfully deleted"
  caption="\${getCurrentTime()}"
  low-contrast="true"
  timeout="3000"
  @cds-notification-closed="\${this._onNotificationClose}"
></cds-toast-notification>
`})})]})}function T(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{T as default};
