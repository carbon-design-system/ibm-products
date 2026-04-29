import{j as e,M as i,C as r}from"./blocks-qJqtNjbj.js";import{useMDXComponents as s}from"./index-C-gzPaeo.js";import{C as a,D as c}from"./coachmark-fixed.stories-DTUKP3DK.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-Dq7_sE-R.js";import"./state-145bePLO.js";import"./popover-content-CwEb-NFO.js";import"./host-listener-DN1-XIwx.js";import"./floating-controller-O5_OP1Uj.js";import"./query-D0jTsbLw.js";import"./class-map-lm-sIrT2.js";import"./button-CAMQBIDi.js";import"./chunk-Ci2WlFE4-KEkrn0Yu.js";import"./link-B9XCLPk6.js";import"./coachmark-header-IUO2UXzA.js";import"./decorate-tPtMJD2o.js";import"./index-C4tCn5Jd.js";import"./16-D5maUdCH.js";import"./icon-loader-DBarA4V3.js";import"./button-skeleton-BqzEqCwi.js";import"./16-BJ-s22c-.js";import"./coachmark-tagline-GgNQn28B.js";import"./16-DSpKrZTh.js";function t(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
`,e.jsx(n.h1,{id:"coachmarkfixedstories",children:"CoachmarkFixedStories"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/patterns/coachmark-fixed/usage/",rel:"nofollow",children:"CoachmarkFixedStories usage guidelines"})}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:"The CoachmarkFixed pattern acts as a container element for onboarding and should only be used within the scope of a Coachmark."}),`
`,e.jsx(n.h2,{id:"coded-examples",children:"Coded examples"}),`
`,e.jsx(n.p,{children:`Patterns have multiple ways of accomplishing a user need and typically use a
combination of components with additional design considerations. The pattern
code we share is meant to serve as an example implementation that can be built
and extended further.`}),`
`,e.jsx(n.h3,{id:"ingredients",children:"Ingredients"}),`
`,e.jsx(n.p,{children:"To build this pattern, you'll need the following components:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://ibm-products-web-components.carbondesignsystem.com/?path=/docs/components-coachmark",rel:"nofollow",children:"Coachmark"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://ibm-products-web-components.carbondesignsystem.com/?path=/docs/components-coachmark-tagline",rel:"nofollow",children:"Coachmark Tagline"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-button",rel:"nofollow",children:"Button"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-link",rel:"nofollow",children:"Link"})}),`
`,e.jsxs(n.li,{children:["**",e.jsx(n.a,{href:"https://github.com/carbon-design-system/carbon/blob/main/packages/utilities/src/carousel/README.md",rel:"nofollow",children:"Carousel utility"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"implementation-notes",children:"Implementation Notes"}),`
`,e.jsx(n.h4,{id:"required-styles",children:"Required Styles"}),`
`,e.jsx(n.p,{children:"The tagline component requires both JavaScript and SCSS imports:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`@use '@carbon/ibm-products-web-components/scss/components/coachmark/coachmark-tagline/coachmark-tagline.scss';
`})}),`
`,e.jsx(n.h4,{id:"carousel-integration",children:"Carousel Integration"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"@carbon/utilities"})," carousel for managing slide navigation:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Initialize after component first render"}),`
`,e.jsx(n.li,{children:"Handle view change events to update button states"}),`
`,e.jsx(n.li,{children:"Manage focus and accessibility attributes"}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[`💡 Check our
`,e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/coachmark-fixed",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/coachmark-fixed",rel:"nofollow",children:e.jsx(n.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsx(n.h3,{id:"example-usage",children:"Example Usage"}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(n.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(n.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(n.h4,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { POPOVER_ALIGNMENT } from '@carbon/web-components/es/components/popover/defs.js';
import '@carbon/ibm-products-web-components/es/components/coachmark/index.js';
import '@carbon/ibm-products-web-components/es/components/coachmark/coachmark-tagline/index.js';
import '@carbon/web-components/es/components/button/button.js';
import { InitCarousel, initCarousel } from '@carbon/utilities';
import '@carbon/web-components/es/components/link/index.js';
`})})]})}function T(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{T as default};
