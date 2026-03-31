import{j as e,M as s}from"./blocks-C5gY99bq.js";import{useMDXComponents as o}from"./index-B5-v5Qtp.js";import d from"./overflow-handler.stories-Cu762K73.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-LTWq63Dx.js";import"./tag-CIKFoGkI.js";import"./state-D9pS_nHD.js";import"./query-D0jTsbLw.js";import"./icon-loader-DWmlJi0p.js";import"./class-map-DX35lnv2.js";import"./16-D5maUdCH.js";import"./operational-tag-CKCrIba1.js";import"./definition-tooltip-D9INSkqm.js";import"./popover-content-DQMgFrRc.js";import"./floating-controller-oBvGnMaE.js";import"./slider-skeleton-nAW8zyc5.js";import"./16-Ct9TbVNK.js";import"./button-D37mKeLy.js";import"./button-skeleton-B3koeCDo.js";import"./user-avatar-CwC9I3R4.js";import"./16-BswKfa1f.js";import"./documentLang-E105Y72C.js";import"./overflowHandler-6nRVSJRW.js";function i(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d}),`
`,e.jsx(n.h1,{id:"overflowhandler",children:"overflowHandler"}),`
`,e.jsx(n.p,{children:`overflowHandler is a framework agnostic utility for handling the truncation of a
list of items.`}),`
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
`,e.jsxs(n.p,{children:[`For details on implementation, please refer to the
`,e.jsx(n.a,{href:"?path=/docs/patterns-item-overflow--overview",children:"example code"}),"."]})]})}function L(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{L as default};
