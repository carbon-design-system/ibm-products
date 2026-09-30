import{u as r,j as e,M as i,C as t}from"./blocks-D8aXWszT.js";import{S as l,a}from"./set-of-tags.stories-BZTnEm_6.js";import{SetOfActions as c}from"./set-of-actions.stories-B0KBgRyX.js";import{SetOfUsers as p}from"./set-of-users.stories-Bq1Wzlg-.js";import{SetOfBreadcrumbs as h}from"./set-of-breadcrumbs.stories-BjLbFC9B.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-BeiuzDDI.js";import"./defs-x7PjbPWW.js";import"./state-wuDIel8h.js";import"./class-map-BS30bUre.js";import"./tag-BrrUMBNH.js";import"./icon-loader-DYitl9j7.js";import"./host-listener-DN1-XIwx.js";import"./16-D5maUdCH.js";import"./operational-tag-BvrpUZlS.js";import"./definition-tooltip-DLL861dr.js";import"./deep-shadow-contains-CgxOJitL.js";import"./popover-content-9vQtx_uV.js";import"./link-0L02rpg8.js";import"./modal-label-C_W5i1Tu.js";import"./inline-loading-BSNO7R9g.js";import"./16-DSuDh1sQ.js";import"./icon-button-DPkM1bhc.js";import"./button-DchrcEvf.js";import"./button-skeleton-B_fMUrZY.js";import"./20-CvqWH37X.js";import"./search-skeleton-Dp1FDVc_.js";import"./form-BTpacr1I.js";import"./if-non-empty-B0oc9X11.js";import"./index-quXh5Vvz.js";import"./story-styles-Cv4vrsXi.js";import"./16-CfG0rDIQ.js";import"./16-BswKfa1f.js";import"./repeat-B9R25PK0.js";import"./overflow-menu-item-BsD3pH5u.js";import"./collection-helpers-DS5mzmOk.js";import"./consume-DI2TaawZ.js";import"./16-C2f9e6nj.js";import"./index-CD1mMP8h.js";import"./16-DOn1njS0.js";import"./user-avatar-D5PBmuvT.js";import"./decorate-BsyuvM50.js";import"./breadcrumb-skeleton-O1vpi-lL.js";import"./16-DYhtUhBA.js";function s(n){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:l}),`
`,e.jsx(o.h1,{id:"item-overflow",children:"Item overflow"}),`
`,e.jsxs(o.p,{children:[`item overflow are a group of patterns built using
`,e.jsx(o.a,{href:"?path=/docs/experimental-utilities-overflowhandler--docs",children:"overflowHandler"})]}),`
`,e.jsx(o.p,{children:`Patterns have multiple ways of accomplishing a user need and typically use a
combination of components with additional design considerations. The pattern
code we share is meant to serve as an example implementation that can be built
and extended further.`}),`
`,e.jsx(o.h3,{id:"1-set-of-tags",children:"1) Set of Tags"}),`
`,e.jsx(o.p,{children:`The Set of Tags pattern displays a row of tags. If there isn’t enough space to
show all of them, the overflowing tags are grouped in a popover, triggered by an
overflow button labeled +N.`}),`
`,e.jsx(o.p,{children:`If there are more than 10 overflowing tags, a View all tags button appears in
the popover. Clicking it opens a modal that displays the full list of tags.`}),`
`,e.jsx(o.p,{children:"This pattern is commonly used to filter or categorize content."}),`
`,e.jsx(o.p,{children:"To build this pattern, we recommend including the following components:"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-tag--overview",rel:"nofollow",children:"cds-tag cds-dismissible-tag cds-operational-tag"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-popover--overview",rel:"nofollow",children:"cds-popover"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-modal--overview",rel:"nofollow",children:"cds-modal"})}),`
`]}),`
`,e.jsx(o.p,{children:"and the following utility:"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/experimental-utilities-overflowhandler--docs",children:"overflowHandler"})}),`
`]}),`
`,e.jsxs(o.p,{children:["These components are used within the ",e.jsx(o.code,{children:"set-of-tags"}),` wrapper component to handle
state management.`]}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsxs(o.p,{children:[`💡 Check our
`,e.jsx(o.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/set-of-tags",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(o.p,{children:e.jsx(o.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/set-of-tags",rel:"nofollow",children:e.jsx(o.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsx(t,{of:a,sourceState:"none"}),`
`,e.jsx(o.h3,{id:"2-set-of-actions",children:"2) Set of Actions"}),`
`,e.jsx(o.p,{children:`The Set of Actions pattern displays a row of actions in the form of icon
buttons. If there isn’t enough space to show all of them, the overflowing
actions are grouped into an overflow menu.`}),`
`,e.jsx(o.p,{children:"There is also a vertical variant available to display actions."}),`
`,e.jsx(o.p,{children:"To build this pattern, we recommend including the following components:"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-icon-button--overview",rel:"nofollow",children:"cds-icon-button"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-overflow-menu--overview",rel:"nofollow",children:"cds-overflow-menu"})}),`
`]}),`
`,e.jsx(o.p,{children:"and the following utility:"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/experimental-utilities-overflowhandler--docs",children:"overflowHandler"})}),`
`]}),`
`,e.jsxs(o.p,{children:["These components are used within the ",e.jsx(o.code,{children:"set-of-actions"}),` wrapper component to
handle state management.`]}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsxs(o.p,{children:[`💡 Check our
`,e.jsx(o.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/set-of-actions",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(o.p,{children:e.jsx(o.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/set-of-actions",rel:"nofollow",children:e.jsx(o.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsx(t,{of:c,sourceState:"none"}),`
`,e.jsx(o.h3,{id:"3-set-of-useravatars",children:"3) Set of UserAvatars"}),`
`,e.jsx(o.p,{children:`The Set of UserAvatars pattern displays a row of user avatars. If there isn’t
enough space to show all of them, the overflowing avatars are grouped in a
popover, triggered by an overflow button labeled +N.`}),`
`,e.jsx(o.p,{children:`If there are more than 10 overflowing users, a View all users button appears in
the popover. Clicking it opens a modal that displays the full list of users.`}),`
`,e.jsx(o.p,{children:"To build this pattern, we recommend including the following components:"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/experimental-useravatar--docs",children:"c4p-user-avatar"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-popover--overview",rel:"nofollow",children:"cds-popover"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-modal--overview",rel:"nofollow",children:"cds-modal"})}),`
`]}),`
`,e.jsx(o.p,{children:"and the following utility:"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/experimental-utilities-overflowhandler--docs",children:"overflowHandler"})}),`
`]}),`
`,e.jsxs(o.p,{children:["These components are used within the ",e.jsx(o.code,{children:"set-of-users"}),` wrapper component to handle
state management.`]}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsxs(o.p,{children:[`💡 Check our
`,e.jsx(o.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/set-of-users",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(o.p,{children:e.jsx(o.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/set-of-users",rel:"nofollow",children:e.jsx(o.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsx(t,{of:p,sourceState:"none"}),`
`,e.jsx(o.h3,{id:"4-set-of-breadcrumbs",children:"4) Set of Breadcrumbs"}),`
`,e.jsx(o.p,{children:`The Set of Breadcrumbs pattern displays a horizontal trail of links representing
the user's navigation path. If there isn’t enough space to show all of them, the
overflowing breadcrumbs are grouped into an overflow menu.`}),`
`,e.jsx(o.p,{children:"To build this pattern, we recommend including the following components:"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-breadcrumb--overview",rel:"nofollow",children:"cds-breadcrumb"})}),`
`]}),`
`,e.jsx(o.p,{children:"and the following utility:"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/experimental-utilities-overflowhandler--docs",children:"overflowHandler"})}),`
`]}),`
`,e.jsxs(o.p,{children:["These components are used within the ",e.jsx(o.code,{children:"set-of-breadcrumbs"}),` wrapper component to
handle state management.`]}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsxs(o.p,{children:[`💡 Check our
`,e.jsx(o.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/set-of-breadcrumbs",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(o.p,{children:e.jsx(o.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/set-of-breadcrumbs",rel:"nofollow",children:e.jsx(o.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsx(t,{of:h,sourceState:"none"}),`
`,e.jsx(o.h3,{id:"5-collapsible-button-set",children:"5) Collapsible button-set"}),`
`,e.jsxs(o.p,{children:[`this is different from button-set with container queries, this will show a group
of buttons collapse into a
`,e.jsx(o.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-menu-button--overview",rel:"nofollow",children:"menu-button"})]})]})}function ne(n={}){const{wrapper:o}={...r(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(s,{...n})}):s(n)}export{ne as default};
