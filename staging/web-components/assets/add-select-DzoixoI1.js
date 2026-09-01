import{u as c,j as e,M as d,A as s}from"./blocks-C_q5Z3QV.js";import l from"./add-select.stories-BiZtO-8D.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-Jmzb2J_X.js";import"./toggle-ZrKD7k9R.js";import"./host-listener-DN1-XIwx.js";import"./checkbox-BKEtAI62.js";import"./icon-loader-D-DCGbf4.js";import"./class-map-Dq7Cgk20.js";import"./form-BTpacr1I.js";import"./16-C1hWzIbz.js";import"./16-B8NH1ntc.js";import"./toggle-skeleton-9hdYSXoK.js";import"./add-select-item-panel-Dr3-bCM9.js";import"./state-DUKcvrci.js";import"./button-BIg63iLT.js";import"./button-skeleton-CxxG6nwo.js";import"./search-skeleton-DXE69sGB.js";import"./if-non-empty-DgN-jBnF.js";import"./16-D5maUdCH.js";import"./tag-ROZE3sjG.js";import"./operational-tag-CpJqIY3G.js";import"./definition-tooltip-0jAFAzlc.js";import"./deep-shadow-contains-e9TvcXtW.js";import"./popover-content-BraSTtPt.js";import"./breadcrumb-skeleton-BIR6L1BX.js";import"./link-VRc9dNo9.js";import"./checkbox-skeleton-Dg_tOxd0.js";import"./radio-button-skeleton-UXWCnU33.js";import"./collection-helpers-DS5mzmOk.js";import"./skeleton-text-jhDyYbSZ.js";import"./skeleton-icon-Bq9T_m19.js";import"./icon-button-D0dqBuDI.js";import"./16-z4EPQvwm.js";import"./16-B9g2nIv4.js";import"./16-C_7DXZKc.js";import"./16-CFYMBMYp.js";import"./user-avatar-_A1az7p1.js";import"./16-BswKfa1f.js";import"./16-BggJfAoA.js";import"./16-Dmu1QWqc.js";import"./16-BJ-s22c-.js";import"./chunk-2WNKQWTL-DpPos4kR.js";function i(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:l}),`
`,e.jsx(t.h1,{id:"addselect-web-component",children:"AddSelect Web Component"}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/add-select/usage/",rel:"nofollow",children:"Usage guidelines"})}),`
`,e.jsx(t.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#usage",children:"Usage"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#examples",children:"Examples"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(t.p,{children:"AddSelect is a composable web component system for building add/select interfaces. It provides a flexible approach where you can compose the UI using smaller, focused web components."}),`
`,e.jsx(t.h2,{id:"components",children:"Components"}),`
`,e.jsx(t.h3,{id:"c4p-add-select",children:"c4p-add-select"}),`
`,e.jsx(t.p,{children:"The root component that provides context for selection state."}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Attributes:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"multi"})," - Enable multi-select (checkboxes) or single-select (radio buttons)"]}),`
`]}),`
`,e.jsx(t.h3,{id:"c4p-add-select-body",children:"c4p-add-select-body"}),`
`,e.jsx(t.p,{children:"Contains the search bar, breadcrumbs, and main content area."}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Attributes:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"items-label"})," - Label for the items section"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"global-search-label"})," - Label for the search input"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"global-search-placeholder"})," - Placeholder text for search"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"item-count"})," - Total number of items"]}),`
`]}),`
`,e.jsx(t.h3,{id:"c4p-add-select-content",children:"c4p-add-select-content"}),`
`,e.jsx(t.p,{children:"Container for items with keyboard navigation support."}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Keyboard Navigation:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Arrow Up/Down"})," - Navigate between items"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Arrow Right"})," - Navigate into children (if available)"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Enter/Space"})," - Select/deselect item"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Ctrl+Home"})," - Jump to first item"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Ctrl+End"})," - Jump to last item"]}),`
`]}),`
`,e.jsx(t.h3,{id:"c4p-add-select-row",children:"c4p-add-select-row"}),`
`,e.jsx(t.p,{children:"Individual selectable item."}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Attributes:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"item-id"})," - Unique identifier"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"title"})," - Item title"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"subtitle"})," - Optional subtitle"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"value"})," - Item value"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"selected"})," - Whether item is selected"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"disabled"})," - Whether item is disabled"]}),`
`]}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.h3,{id:"basic-multi-select",children:"Basic Multi-Select"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<c4p-add-select multi>
  <c4p-add-select-body
    items-label="All items"
    global-search-label="Search"
    item-count="5"
  >
    <c4p-add-select-content>
      <c4p-add-select-row
        item-id="1"
        title="Item 1"
        subtitle="Description"
        value="item-1"
      ></c4p-add-select-row>
      <!-- More rows -->
    </c4p-add-select-content>
  </c4p-add-select-body>
</c4p-add-select>
`})}),`
`,e.jsx(t.h3,{id:"single-select",children:"Single Select"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<c4p-add-select>
  <c4p-add-select-body items-label="Select one item">
    <c4p-add-select-content>
      <!-- Rows -->
    </c4p-add-select-content>
  </c4p-add-select-body>
</c4p-add-select>
`})}),`
`,e.jsx(t.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(t.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(t.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import '@carbon/ibm-products-web-components/es/components/add-select/index.js';
`})}),`
`,e.jsx(t.h3,{id:"html",children:"HTML"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<c4p-add-select multi>
  <c4p-add-select-body
    items-label="All items"
    global-search-label="Search"
    global-search-placeholder="Search items"
    item-count="5"
  >
    <c4p-add-select-content>
      <c4p-add-select-row
        item-id="1"
        title="Item 1"
        subtitle="Description"
        value="item-1"
      ></c4p-add-select-row>
      <c4p-add-select-row
        item-id="2"
        title="Item 2"
        subtitle="Description"
        value="item-2"
      ></c4p-add-select-row>
    </c4p-add-select-content>
  </c4p-add-select-body>
</c4p-add-select>
`})}),`
`,e.jsxs(t.h2,{id:"c4p-add-select-attributes-properties-and-events",children:[e.jsx(t.code,{children:"<c4p-add-select>"})," attributes, properties and events"]}),`
`,e.jsxs(t.p,{children:["Note: For ",e.jsx(t.code,{children:"boolean"})," attributes, ",e.jsx(t.code,{children:"true"}),` means simply setting the attribute (e.g.
`,e.jsx(t.code,{children:"<c4p-add-select multi>"}),") and ",e.jsx(t.code,{children:"false"}),` means not setting the attribute (e.g.
`,e.jsx(t.code,{children:"<c4p-add-select>"})," without ",e.jsx(t.code,{children:"multi"})," attribute)."]}),`
`,e.jsx(s,{of:"c4p-add-select"}),`
`,e.jsxs(t.h2,{id:"c4p-add-select-body-attributes-properties-and-events",children:[e.jsx(t.code,{children:"<c4p-add-select-body>"})," attributes, properties and events"]}),`
`,e.jsx(s,{of:"c4p-add-select-body"}),`
`,e.jsxs(t.h2,{id:"c4p-add-select-content-attributes-properties-and-events",children:[e.jsx(t.code,{children:"<c4p-add-select-content>"})," attributes, properties and events"]}),`
`,e.jsx(s,{of:"c4p-add-select-content"}),`
`,e.jsxs(t.h2,{id:"c4p-add-select-row-attributes-properties-and-events",children:[e.jsx(t.code,{children:"<c4p-add-select-row>"})," attributes, properties and events"]}),`
`,e.jsx(s,{of:"c4p-add-select-row"})]})}function Y(n={}){const{wrapper:t}={...c(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{Y as default};
