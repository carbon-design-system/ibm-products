import{j as e,M as i,C as t}from"./blocks-BzEZOrgq.js";import{useMDXComponents as r}from"./index-BYYhK2HH.js";import{S as l,a}from"./set-of-tags.stories-jiebkiiY.js";import{SetOfActions as c}from"./set-of-actions.stories-Bg2nFwG1.js";import{SetOfUsers as p}from"./set-of-users.stories-DOJt9LFq.js";import{SetOfBreadcrumbs as h}from"./set-of-breadcrumbs.stories-Don5b7IT.js";import"./preload-helper-D9Z9MdNV.js";import"./iframe-CRtCEvHj.js";import"./tag-DIJdIQe3.js";import"./state-CtNM5jHe.js";import"./query-DAIS6qJ0.js";import"./icon-loader-DNTraskY.js";import"./class-map-BDBYr7ko.js";import"./16-D5maUdCH.js";import"./operational-tag-D2LJj0Bw.js";import"./definition-tooltip-BV9MAPtz.js";import"./popover-content-ugB3_2l0.js";import"./link-D5cw_Yv2.js";import"./modal-label-BL3rRNsf.js";import"./button-BPrzbWFT.js";import"./search-skeleton-BqvTrmxO.js";import"./text-input-fIvTTJ0p.js";import"./16-DGMTFMdo.js";import"./validity-CUJaV9kI.js";import"./documentLang-E105Y72C.js";import"./overflowHandler-6nRVSJRW.js";import"./story-styles-DDh6JUmH.js";import"./16-CU4u-ZW8.js";import"./16-BswKfa1f.js";import"./repeat-eowXJxic.js";import"./button-skeleton-Bkfs8A1v.js";import"./overflow-menu-item-D6QEcr1n.js";import"./collection-helpers-Cnsts1JG.js";import"./icon-button-Dm8UBGd3.js";import"./settings-ClFWKeZ4.js";import"./breadcrumb-skeleton-bmHmtDzq.js";import"./16-DYhtUhBA.js";function s(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:l}),`
`,e.jsx(n.h1,{id:"item-overflow",children:"Item overflow"}),`
`,e.jsxs(n.p,{children:[`item overflow are a group of patterns built using
`,e.jsx(n.a,{href:"?path=/docs/experimental-utilities-overflowhandler--docs",children:"overflowHandler"})]}),`
`,e.jsx(n.p,{children:`Patterns have multiple ways of accomplishing a user need and typically use a
combination of components with additional design considerations. The pattern
code we share is meant to serve as an example implementation that can be built
and extended further.`}),`
`,e.jsx(n.h3,{id:"1-set-of-tags",children:"1) Set of Tags"}),`
`,e.jsx(n.p,{children:`The Set of Tags pattern displays a row of tags. If there isn’t enough space to
show all of them, the overflowing tags are grouped in a popover, triggered by an
overflow button labeled +N.`}),`
`,e.jsx(n.p,{children:`If there are more than 10 overflowing tags, a View all tags button appears in
the popover. Clicking it opens a modal that displays the full list of tags.`}),`
`,e.jsx(n.p,{children:"This pattern is commonly used to filter or categorize content."}),`
`,e.jsx(n.p,{children:"To build this pattern, we recommend including the following components:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-tag--overview",rel:"nofollow",children:"cds-tag cds-dismissible-tag cds-operational-tag"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-popover--overview",rel:"nofollow",children:"cds-popover"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-modal--overview",rel:"nofollow",children:"cds-modal"})}),`
`]}),`
`,e.jsx(n.p,{children:"and the following utility:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/experimental-utilities-overflowhandler--docs",children:"overflowHandler"})}),`
`]}),`
`,e.jsxs(n.p,{children:["These components are used within the ",e.jsx(n.code,{children:"set-of-tags"}),` wrapper component to handle
state management.`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[`💡 Check our
`,e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/set-of-tags",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/set-of-tags",rel:"nofollow",children:e.jsx(n.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsx(t,{of:a,sourceState:"none"}),`
`,e.jsx(n.h3,{id:"2-set-of-actions",children:"2) Set of Actions"}),`
`,e.jsx(n.p,{children:`The Set of Actions pattern displays a row of actions in the form of icon
buttons. If there isn’t enough space to show all of them, the overflowing
actions are grouped into an overflow menu.`}),`
`,e.jsx(n.p,{children:"There is also a vertical variant available to display actions."}),`
`,e.jsx(n.p,{children:"To build this pattern, we recommend including the following components:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-icon-button--overview",rel:"nofollow",children:"cds-icon-button"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-overflow-menu--overview",rel:"nofollow",children:"cds-overflow-menu"})}),`
`]}),`
`,e.jsx(n.p,{children:"and the following utility:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/experimental-utilities-overflowhandler--docs",children:"overflowHandler"})}),`
`]}),`
`,e.jsxs(n.p,{children:["These components are used within the ",e.jsx(n.code,{children:"set-of-actions"}),` wrapper component to
handle state management.`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[`💡 Check our
`,e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/set-of-actions",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/set-of-actions",rel:"nofollow",children:e.jsx(n.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsx(t,{of:c,sourceState:"none"}),`
`,e.jsx(n.h3,{id:"3-set-of-useravatars",children:"3) Set of UserAvatars"}),`
`,e.jsx(n.p,{children:`The Set of UserAvatars pattern displays a row of user avatars. If there isn’t
enough space to show all of them, the overflowing avatars are grouped in a
popover, triggered by an overflow button labeled +N.`}),`
`,e.jsx(n.p,{children:`If there are more than 10 overflowing users, a View all users button appears in
the popover. Clicking it opens a modal that displays the full list of users.`}),`
`,e.jsx(n.p,{children:"To build this pattern, we recommend including the following components:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/experimental-useravatar--docs",children:"c4p-user-avatar"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-popover--overview",rel:"nofollow",children:"cds-popover"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-modal--overview",rel:"nofollow",children:"cds-modal"})}),`
`]}),`
`,e.jsx(n.p,{children:"and the following utility:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/experimental-utilities-overflowhandler--docs",children:"overflowHandler"})}),`
`]}),`
`,e.jsxs(n.p,{children:["These components are used within the ",e.jsx(n.code,{children:"set-of-users"}),` wrapper component to handle
state management.`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[`💡 Check our
`,e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/set-of-users",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/set-of-users",rel:"nofollow",children:e.jsx(n.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsx(t,{of:p,sourceState:"none"}),`
`,e.jsx(n.h3,{id:"4-set-of-breadcrumbs",children:"4) Set of Breadcrumbs"}),`
`,e.jsx(n.p,{children:`The Set of Breadcrumbs pattern displays a horizontal trail of links representing
the user's navigation path. If there isn’t enough space to show all of them, the
overflowing breadcrumbs are grouped into an overflow menu.`}),`
`,e.jsx(n.p,{children:"To build this pattern, we recommend including the following components:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-breadcrumb--overview",rel:"nofollow",children:"cds-breadcrumb"})}),`
`]}),`
`,e.jsx(n.p,{children:"and the following utility:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/experimental-utilities-overflowhandler--docs",children:"overflowHandler"})}),`
`]}),`
`,e.jsxs(n.p,{children:["These components are used within the ",e.jsx(n.code,{children:"set-of-breadcrumbs"}),` wrapper component to
handle state management.`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[`💡 Check our
`,e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/set-of-breadcrumbs",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/set-of-breadcrumbs",rel:"nofollow",children:e.jsx(n.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsx(t,{of:h,sourceState:"none"}),`
`,e.jsx(n.h3,{id:"5-collapsible-button-set",children:"5) Collapsible button-set"}),`
`,e.jsxs(n.p,{children:[`this is different from button-set with container queries, this will show a group
of buttons collapse into a
`,e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-menu-button--overview",rel:"nofollow",children:"menu-button"})]})]})}function K(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{K as default};
