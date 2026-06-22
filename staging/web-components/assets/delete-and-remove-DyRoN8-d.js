import{u as s,j as e,M as c,C as l,S as r}from"./blocks-HMKi1Hst.js";import o from"./delete-and-remove.stories-BA-GrheT.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-Dkc0Ia68.js";import"./state-D8btNkt2.js";import"./modal-label-ji4xjuET.js";import"./host-listener-DN1-XIwx.js";import"./inline-loading-Ca9ibbg0.js";import"./icon-loader-D7NoNf8T.js";import"./class-map-CmISaglH.js";import"./16-DSuDh1sQ.js";import"./icon-button-C-lClvkb.js";import"./button-BzIgzRzW.js";import"./definition-tooltip-B9TXRXyy.js";import"./popover-content-zu5IwWNI.js";import"./floating-controller-O5_OP1Uj.js";import"./query-D0jTsbLw.js";import"./button-skeleton-DW8oJA9t.js";import"./20-CvqWH37X.js";import"./form-item-lKdNmrYb.js";import"./text-input-DIDN-yvc.js";import"./form-BTpacr1I.js";import"./validity-CzEiVmrf.js";import"./if-non-empty-B6ropqBp.js";import"./16-C1hWzIbz.js";import"./16-B8NH1ntc.js";import"./toast-notification-3pcnVbXs.js";import"./16-D5maUdCH.js";import"./checkbox-CiN1b3Wr.js";import"./link-DzQnlb98.js";import"./16-xraWWrlP.js";import"./16-gUhxGjnI.js";function i(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:o}),`
`,e.jsx(n.h1,{id:"delete-and-remove",children:"Delete and remove"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/patterns/delete-and-remove/usage/",rel:"nofollow",children:"Usage guidelines"})}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#high-impact-deletion",children:"High impact deletion"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#high-impact-deletion-with-connected-items",children:"High impact deletion with connected items"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#high-impact-batch-deletion",children:"High impact batch deletion"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#medium-impact-deletion-or-removal",children:"Medium impact deletion or removal"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#low-impact-deletion-or-removal",children:"Low impact deletion or removal"})}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:`“Removing” is an action that moves information from one location to another.
Removal can be both destructive and non-destructive. “Deletion” is the most
common type of removal and is destructive`}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`NOTE: Patterns have multiple ways of accomplishing a user need and typically
use a combination of components with additional design considerations. The
pattern code we share is meant to serve as an example implementation that can
be built and extended further.`}),`
`]}),`
`,e.jsx(n.p,{children:"To build this pattern, we recommend including the following components:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-modal",rel:"nofollow",children:"cds-modal"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-text-input--overview",rel:"nofollow",children:"cds-text-input"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-notifications-toast--overview",rel:"nofollow",children:"cds-toast-notification"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-button--overview",rel:"nofollow",children:"cds-button"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-checkbox--overview",rel:"nofollow",children:"cds-checkbox"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-link--overview",rel:"nofollow",children:"cds-link"})}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/modal/index.js';
import '@carbon/web-components/es/components/form/form-item.js';
import '@carbon/web-components/es/components/text-input/text-input.js';
import '@carbon/web-components/es/components/notification/toast-notification.js';
import '@carbon/web-components/es/components/checkbox/checkbox.js';
import '@carbon/web-components/es/components/link/link.js';
`})}),`
`,e.jsx(n.h2,{id:"example-usage",children:"Example usage"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[`💡 Check our
`,e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/delete-and-remove",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/delete-and-remove",rel:"nofollow",children:e.jsx(n.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsx(l,{withSource:"none",children:e.jsx(r,{of:o.highImpactDeletion})}),`
`,e.jsx(n.h3,{id:"example",children:"Example"}),`
`,e.jsx(n.p,{children:"Here's a quick example of high impact deletion to get you started."}),`
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
`,e.jsx(n.h2,{id:"high-impact-deletion",children:"High impact deletion"}),`
`,e.jsx(n.p,{children:`When deleting is high-impact, a confirmation dialog should be presented to the
user which displays:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The name of the resource"}),`
`,e.jsx(n.li,{children:"Consequences of the deletion"}),`
`,e.jsx(n.li,{children:"This action cannot be undone."}),`
`,e.jsx(n.li,{children:"An editable text field for the name of the resource to be entered"}),`
`]}),`
`,e.jsx(n.h3,{id:"high-impact-deletion-with-connected-items",children:"High impact deletion with connected items"}),`
`,e.jsx(n.p,{children:`It is similar to high-impact deletion pattern, but the confirmation dialog will
display the below 2 additional content:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"A list of all the connected items"}),`
`,e.jsx(n.li,{children:"A checkbox to confirm the deletion of all its connected items."}),`
`]}),`
`,e.jsx(n.h3,{id:"high-impact-batch-deletion",children:"High impact batch deletion"}),`
`,e.jsx(n.p,{children:`In batch deletion, a confirmation dialog should be presented to the user which
displays:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The names of the items selected"}),`
`,e.jsx(n.li,{children:"The consequences of the deletion"}),`
`,e.jsx(n.li,{children:"The phrase, “This action cannot be undone”"}),`
`,e.jsx(n.li,{children:"A checkbox to confirm the deletion of the selected resources"}),`
`,e.jsx(n.li,{children:"A note of items that cannot be deleted in batch selection (optional)"}),`
`]}),`
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
`,e.jsx(n.h2,{id:"low-impact-deletion-or-removal",children:"Low impact deletion or removal"}),`
`,e.jsx(n.p,{children:`Requiring the user to confirm deletion is generally recommended. However, in low
impact situations, or when an ‘undo’ option is available, user confirmation may
not be required.`}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`NOTE: The low-impact removal pattern is similar to low-impact deletion
pattern, with the only difference being the usage of “remove” or “delete“ in
the text. Use “remove” when the action is reversible or not truly destructive.`}),`
`]})]})}function R(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{R as default};
