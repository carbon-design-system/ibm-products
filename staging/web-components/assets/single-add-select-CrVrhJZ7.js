import{u as s,j as e,M as c}from"./blocks-3VQtrEYq.js";import r from"./single-add-select.stories-DnIuXQev.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-BoCQr2sp.js";import"./state-BGVRmIbP.js";import"./button-zsE1n1Bb.js";import"./host-listener-DN1-XIwx.js";import"./class-map-h1JXuMsD.js";import"./button-skeleton-BKVbevEW.js";import"./toast-notification-C0YMAMZO.js";import"./icon-loader-BqrhyFhm.js";import"./16-D5maUdCH.js";import"./tearsheet-summary-content-a5k15lWL.js";import"./index-BBvoEKsi.js";import"./manageFocusTrap-CMfl2_31.js";import"./layer-D7U7ZKkd.js";import"./action-set-Cf7deDjt.js";import"./ref-D8L1pfD4.js";import"./modal-label-6oN8d_WC.js";import"./inline-loading-Cb5YBp5X.js";import"./16-DSuDh1sQ.js";import"./icon-button-Bn0Tn8Fo.js";import"./definition-tooltip-CDX4g3jt.js";import"./deep-shadow-contains-DK3btacB.js";import"./popover-content-mhoElPR3.js";import"./20-CvqWH37X.js";import"./side-panel-CAdg8gcJ.js";import"./16-803qFA73.js";import"./resizer-panel-Dk_YWRVk.js";import"./tslib.es6-Cdhlq9ds.js";import"./truncated-text-WkrmCYjF.js";import"./style-map-B5v6uXi3.js";import"./link-C-WjR1tk.js";import"./20-q75D_U8N.js";import"./tearsheet-stack-Dt1n1gxa.js";import"./add-select-row-CB03RV0x.js";import"./search-skeleton-wo-mk901.js";import"./form-BTpacr1I.js";import"./if-non-empty-CJwvxyMY.js";import"./tag-CjY5bEhi.js";import"./operational-tag-DUBqCLtc.js";import"./breadcrumb-skeleton-BzrtB_gx.js";import"./checkbox-zO52dlv2.js";import"./16-C1hWzIbz.js";import"./16-B8NH1ntc.js";import"./checkbox-skeleton-Btgi-N2Z.js";import"./radio-button-skeleton-Dg5KhJVQ.js";import"./collection-helpers-DS5mzmOk.js";import"./skeleton-text-CuQHrASR.js";import"./skeleton-icon-BKpFFaZb.js";import"./16-z4EPQvwm.js";import"./16-B9g2nIv4.js";import"./action-set-DcQ53wAq.js";import"./decorate-BsyuvM50.js";import"./side-panel-DN9F6v5W.js";import"./query-assigned-elements-Dt4vy5_8.js";import"./tearsheet-summary-content-D0U-RQID.js";import"./truncated-text-DoYC-fca.js";import"./user-avatar-BwrFbcsS.js";import"./16-BswKfa1f.js";import"./16-D0aIqdwb.js";import"./16-C22St5FV.js";import"./page-header-tabs-DJEOS4af.js";import"./consume-D_JZLJeP.js";import"./static-CuUzhtt4.js";import"./20-CEm2HUGl.js";import"./coachmark-ipEMR7pU.js";import"./coachmark-beacon-DMNlHYrN.js";import"./coachmark-tagline-D2Lupbm5.js";import"./16-DSpKrZTh.js";import"./16-CUIfRU65.js";import"./16-C_7DXZKc.js";import"./16-BsOTR82k.js";import"./16-C2f9e6nj.js";function i(n){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:r}),`
`,e.jsx(t.h1,{id:"single-add-select",children:"Single add select"}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage/#select-flow",rel:"nofollow",children:"Single add select usage guidelines"})}),`
`,e.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(t.p,{children:"The single add select pattern is used to add or select a single item from larger lists or hierarchies. It provides a streamlined interface for users to search, filter, and select one item from a collection."}),`
`,e.jsx(t.h2,{id:"coded-examples",children:"Coded examples"}),`
`,e.jsx(t.p,{children:"Patterns have multiple ways of accomplishing a user need and typically use a combination of components with additional design considerations. The pattern code we share is meant to serve as an example implementation that can be built and extended further."}),`
`,e.jsx(t.h4,{id:"ingredients",children:"Ingredients"}),`
`,e.jsx(t.p,{children:"To build this pattern, we recommend including the following components:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"/?path=/docs/components-tearsheet--docs",children:"c4p-tearsheet"})," - Container for the pattern"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"/?path=/docs/components-add-select--docs",children:"c4p-add-select"})," - Wrapper component"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"/?path=/docs/components-add-select--docs",children:"c4p-add-select-body"})," - Container with search and breadcrumb navigation"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"/?path=/docs/components-add-select--docs",children:"c4p-add-select-breadcrumbs"})," - Breadcrumb navigation for hierarchical data (used internally by c4p-add-select-body)"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"/?path=/docs/components-add-select--docs",children:"c4p-add-select-list"})," - List container"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"/?path=/docs/components-add-select--docs",children:"c4p-add-select-row"})," - Individual selectable items"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-button--overview",rel:"nofollow",children:"cds-button"})," - Action buttons"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-notifications-toast--overview",rel:"nofollow",children:"cds-toast-notification"})," - Success feedback"]}),`
`]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[`💡 Check our
`,e.jsx(t.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/single-add-select",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/single-add-select",rel:"nofollow",children:e.jsx(t.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsx(t.h2,{id:"single-item-selection",children:"Single item selection"}),`
`,e.jsx(t.p,{children:"The single add select pattern allows users to select one item from a list. It includes:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"A search/filter capability to narrow down options"}),`
`,e.jsx(t.li,{children:"Radio button selection for single choice"}),`
`,e.jsx(t.li,{children:"Clear visual feedback on the selected item"}),`
`,e.jsx(t.li,{children:"Submit and cancel actions"}),`
`]}),`
`,e.jsx(t.h3,{id:"example",children:"Example"}),`
`,e.jsx(t.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(t.h4,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/button/index.js';
import '@carbon/web-components/es/components/notification/toast-notification.js';

import '../../../../src/components/tearsheet/index';
import '../../../../src/components/add-select/add-select/add-select';
import '../../../../src/components/add-select/add-select-body/add-select-body';
import '../../../../src/components/add-select/add-select-list/add-select-list';
import '../../../../src/components/add-select/add-select-row/add-select-row';
`})}),`
`,e.jsx(t.h4,{id:"html",children:"HTML"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<!-- Trigger button -->
<cds-button
  type="button"
  kind="primary"
  size="md"
  @click="\${this._openAddSelect}"
>
  Select an item
</cds-button>

<!-- Single Add Select Pattern using Tearsheet -->
<c4p-add-select>
  <c4p-tearsheet
    ?open=\${this._open}
    width="narrow"
    @c4p-tearsheet-closed="\${this._handleClose}"
  >
    <!-- Header -->
    <h3 slot="title">Select category</h3>
    <div slot="description">Choose one category from the list below</div>

    <!-- Body with Add Select Content -->
    <c4p-add-select-body
      global-search-label="Search categories"
      global-search-placeholder="Search..."
      items-label="Categories"
      search-results-title="Search results"
      .itemCount="\${this._filteredItems.length}"
      .path="\${this._getBreadcrumbPath()}"
      @c4p-add-select-body-search="\${this._handleSearch}"
      @c4p-add-select-body-breadcrumb-click="\${this._handleBreadcrumbClick}"
    >
      <c4p-add-select-list>
        \${this._filteredItems.map((item) => html\`
          <c4p-add-select-row
            item-id="\${item.id}"
            title="\${item.title}"
            value="\${item.value}"
            ?has-children="\${!!item.children}"
            ?selected="\${this._selectedItem === item.id}"
            @c4p-add-select-row-select="\${this._handleItemSelect}"
            @c4p-add-select-row-navigate="\${this._handleNavigate}"
          >
          </c4p-add-select-row>
        \`)}
      </c4p-add-select-list>
    </c4p-add-select-body>

    <!-- Footer with Action Buttons -->
    <cds-button
      slot="actions"
      kind="secondary"
      @click="\${this._handleClose}"
    >
      Cancel
    </cds-button>
    <cds-button
      slot="actions"
      kind="primary"
      @click="\${this._handleSubmit}"
      ?disabled="\${!this._selectedItem}"
    >
      Select
    </cds-button>
  </c4p-tearsheet>
</c4p-add-select>

<!-- Success notification -->
<cds-toast-notification
  kind="success"
  title="Item selected"
  subtitle="You selected: \${selectedItemData?.title}"
  timeout="3000"
  @cds-notification-closed="\${this._onNotificationClose}"
>
</cds-toast-notification>
`})}),`
`,e.jsx(t.h2,{id:"key-features",children:"Key features"}),`
`,e.jsx(t.h3,{id:"search-and-filter",children:"Search and filter"}),`
`,e.jsx(t.p,{children:"The pattern includes built-in search functionality that allows users to quickly find items by typing. The search filters items in real-time based on the item title and supports hierarchical navigation."}),`
`,e.jsx(t.h3,{id:"single-selection",children:"Single selection"}),`
`,e.jsx(t.p,{children:"Users can select only one item at a time using radio buttons. The selected item is visually highlighted and the submit button is enabled only when an item is selected."}),`
`,e.jsx(t.h3,{id:"hierarchical-navigation",children:"Hierarchical navigation"}),`
`,e.jsx(t.p,{children:"The pattern supports nested data structures with breadcrumb navigation, allowing users to drill down into categories and navigate back up the hierarchy."}),`
`,e.jsx(t.h3,{id:"event-handling",children:"Event handling"}),`
`,e.jsx(t.p,{children:"The pattern emits custom events for key interactions:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"c4p-tearsheet-closed"})," - Fired when the tearsheet is closed"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"c4p-add-select-body-search"})," - Fired when search term changes"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"c4p-add-select-body-breadcrumb-click"})," - Fired when breadcrumb is clicked"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"c4p-add-select-row-select"})," - Fired when item is selected/deselected"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"c4p-add-select-row-navigate"})," - Fired when navigating to item children"]}),`
`]}),`
`,e.jsx(t.h3,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(t.p,{children:"The pattern follows accessibility best practices:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Proper ARIA attributes for screen readers"}),`
`,e.jsx(t.li,{children:"Keyboard navigation support"}),`
`,e.jsx(t.li,{children:"Focus management"}),`
`,e.jsx(t.li,{children:"Clear visual indicators for selected items"}),`
`]}),`
`,e.jsx(t.h2,{id:"component-properties",children:"Component properties"}),`
`,e.jsx(t.h3,{id:"c4p-add-select-body",children:"c4p-add-select-body"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"global-search-label"})," (String) - Search input label"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"global-search-placeholder"})," (String) - Search placeholder text"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"items-label"})," (String) - Label for items section"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"search-results-title"})," (String) - Title for search results"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"itemCount"})," (Number) - Number of items for display"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"path"})," (Array) - Breadcrumb navigation path"]}),`
`]}),`
`,e.jsx(t.h3,{id:"c4p-add-select-row",children:"c4p-add-select-row"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"item-id"})," (String) - Unique identifier"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"title"})," (String) - Item title"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"value"})," (String) - Item value"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"selected"})," (Boolean) - Selection state"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"has-children"})," (Boolean) - Whether item has child items"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"disabled"})," (Boolean) - Disabled state"]}),`
`]}),`
`,e.jsx(t.h3,{id:"c4p-tearsheet",children:"c4p-tearsheet"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"open"})," (Boolean) - Controls tearsheet visibility"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"width"}),' (String) - Tearsheet width ("narrow", "wide")']}),`
`]}),`
`,e.jsx(t.h2,{id:"best-practices",children:"Best practices"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Use tearsheet for complex selections"}),": The tearsheet provides a focused environment for selection tasks without losing context."]}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Implement hierarchical data thoughtfully"}),": Use breadcrumbs to help users understand their location in the data hierarchy."]}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Enable search for large lists"}),": For lists with more than 10 items, search functionality becomes essential."]}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Show feedback"}),": Display a success notification after selection to confirm the action."]}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Handle empty states"}),": Provide helpful messages when no results are found or when navigating to empty categories."]}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Maintain selection state"}),": Keep track of the selected item and display it clearly in the UI, even when navigating through hierarchies."]}),`
`]}),`
`]})]})}function _e(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{_e as default};
