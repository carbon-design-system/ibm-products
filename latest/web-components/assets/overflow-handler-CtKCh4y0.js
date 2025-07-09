import{j as e,M as d}from"./index-J_y7_eFh.js";import{useMDXComponents as o}from"./index-B3OvTqAm.js";import{O as s}from"./overflow-handler.stories-Ceb1eSqz.js";import"./iframe-BKO62x0Q.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";import"./lit-element-B5NQPoCB.js";import"./carbon-element-C-vEVMF2.js";import"./operational-tag-DcWfJJmV.js";import"./settings-BYM-UxKO.js";import"./class-map-Duf76KCM.js";import"./16-B-Kt6Qh6.js";import"./spread-D_CBe4YO.js";import"./focus-BhzKTEFX.js";import"./definition-tooltip-D31Xh-9R.js";import"./state-DK_n439u.js";import"./defs-DmJ6Jw23.js";import"./form-BdiM1BJz.js";import"./button-CjC2oM9O.js";import"./button-skeleton-IGTvngUO.js";import"./user-avatar-5ROAjphJ.js";import"./settings-01Nn-mNp.js";import"./documentLang-E105Y72C.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:s}),`
`,e.jsx(n.h1,{id:"overflowhandler",children:"overflowHandler"}),`
`,e.jsx(n.p,{children:"overflowHandler is a utility for handling the truncation of a list of items."}),`
`,e.jsx(n.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(n.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { createOverflowHandler } from '@carbon/utilities';

createOverflowHandler({
  container, // The document node that holds the items. HTMLElement
  maxVisibleItems, // Maximum number of visible items. If provided, only this number of items will be shown. number | undefined
  onChange: (visibleItems: HTMLElement[], hiddenItems: HTMLElement[]) => void, // Callback function invoked when the visible and hidden items change.
  dimension, // The dimension to consider for overflow calculations. "width" | "height" | undefined
});
`})}),`
`,e.jsxs(n.p,{children:["The only required argument necessary to consume this utility is ",e.jsx(n.code,{children:"container"}),`.
Once the handler has been instantiated, an event handler is created that checks
the width of the container when it's rendered or resized. The handler adds the
necessary `,e.jsx(n.code,{children:"data-hidden"}),` attributes to the items that should be hidden. These
items can then be hidden using the following style in the implementation.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`[data-hidden]:not([data-fixed]) { // scope if needed
  display: none;
}
`})}),`
`,e.jsx(n.h2,{id:"attribute-definitions",children:"Attribute definitions"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"data-hidden"})," - Added by the handler on the items that are meant to be hidden."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"data-fixed"}),` - Items that have this attribute added will opt out of all
overflow activities and will be outside the scope of the handler.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"data-offset"}),` - Is added to the offset element that contains all the
overflowing elements within it, such as popovers, overflow menus, tooltips,
modals, etc.`]}),`
`]}),`
`,e.jsxs(n.p,{children:["Using the ",e.jsx(n.code,{children:"onChange"}),` callback, you have access to an array holding the visible
and hidden elements. This gives you the flexibility to access the hidden items
and render them elsewhere, such as a modal or popover.`]}),`
`,e.jsx(n.p,{children:`The handler needs to be re-initialized whenever items are added or removed, when
an item changes its width dynamically, or when the offset changes its width
dynamically, to update the overflow with the new sizes.`}),`
`,e.jsx(n.p,{children:"For details on implementation, please refer to the example code."})]})}function L(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{L as default};
