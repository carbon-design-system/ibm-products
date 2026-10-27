import{u as i,j as o,M as l,C as s,S as t}from"./blocks-ClH2EbWa.js";import{A as d,S as c,W as r}from"./about-modal.stories-D4pSi2rP.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-B3guWsIT.js";import"./state-Dqk0UdPy.js";import"./modal-label-Dpv8yTPb.js";import"./host-listener-kwRZOB_f.js";import"./inline-loading-CAlLAzi3.js";import"./icon-loader-CNAz-s9w.js";import"./class-map-CxCm6SdQ.js";import"./16-DSuDh1sQ.js";import"./icon-button-AuO-3WC8.js";import"./button-82KHasXs.js";import"./definition-tooltip-B8WKhSEs.js";import"./index-yP5Q8vb6.js";import"./popover-content-D4D6pJRD.js";import"./button-skeleton-DliybRAV.js";import"./20-CvqWH37X.js";import"./link-C543jzEx.js";function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{of:d}),`
`,o.jsx(n.h1,{id:"about-modal",children:"About modal"}),`
`,o.jsxs(n.p,{children:[o.jsx(n.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/about-modal/usage/",rel:"nofollow",children:"Usage guidelines"}),`
|
`,o.jsx(n.a,{href:"https://www.carbondesignsystem.com/components/modal/usage",rel:"nofollow",children:"Carbon modal usage guidelines"}),`
|
`,o.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-modal",rel:"nofollow",children:"Carbon modal documentation"})]}),`
`,o.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,o.jsxs(n.ul,{children:[`
`,o.jsx(n.li,{children:o.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,o.jsxs(n.li,{children:[o.jsx(n.a,{href:"#example-usage",children:"Example usage"}),`
`,o.jsxs(n.ul,{children:[`
`,o.jsx(n.li,{children:o.jsx(n.a,{href:"#with-additional-content",children:"With additional content"})}),`
`]}),`
`]}),`
`]}),`
`,o.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,o.jsx(n.p,{children:`About modal is a pattern that conveys product information, including the version
number, copyright information, and license details. The about modal is triggered
by a user's action and appears on top of the main page content. It is persistent
until dismissed. The purpose of this modal should be immediately apparent to the
user, with a clear and obvious path to completion.`}),`
`,o.jsxs(n.blockquote,{children:[`
`,o.jsx(n.p,{children:`NOTE: Patterns have multiple ways of accomplishing a user need and typically
use a combination of components with additional design considerations. The
pattern code we share is meant to serve as an example implementation that can
be built and extended further.`}),`
`]}),`
`,o.jsx(n.p,{children:"To build this pattern, we recommend including the following ingredients:"}),`
`,o.jsxs(n.ul,{children:[`
`,o.jsxs(n.li,{children:[o.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-modal",rel:"nofollow",children:"cds-modal"}),`
(`,o.jsx(n.code,{children:"cds-modal-header"}),", ",o.jsx(n.code,{children:"cds-modal-body"}),", ",o.jsx(n.code,{children:"cds-modal-footer"}),")"]}),`
`,o.jsx(n.li,{children:o.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-link",rel:"nofollow",children:"cds-link"})}),`
`,o.jsxs(n.li,{children:["Product logo: a consumer-supplied ",o.jsx(n.code,{children:"<img>"})," or inline SVG"]}),`
`,o.jsx(n.li,{children:"Version and copyright text: plain text nodes"}),`
`]}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-javascript",children:`import '@carbon/web-components/es/components/modal/index.js';
import '@carbon/web-components/es/components/link/index.js';
`})}),`
`,o.jsx(n.h3,{id:"example-usage",children:"Example usage"}),`
`,o.jsxs(n.blockquote,{children:[`
`,o.jsxs(n.p,{children:[`💡 Check our
`,o.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/about-modal-pattern",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,o.jsx(n.p,{children:o.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/about-modal-pattern",rel:"nofollow",children:o.jsx(n.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,o.jsx(s,{withSource:"none",children:o.jsx(t,{of:c})}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-html",children:`<cds-modal aria-label="About this product" ?open="\${this._open}">
  <div class="c4p--about-modal__logo">
    <img src="\${logo}" alt="Example product or service logo" />
  </div>
  <cds-modal-header>
    <cds-modal-close-button close-button-label="Close"></cds-modal-close-button>
    <cds-modal-heading>IBM Product name</cds-modal-heading>
  </cds-modal-header>
  <cds-modal-body>
    <div class="c4p--about-modal__version">Version 0.0.0</div>
    <p class="c4p--about-modal__copyright-text">
      Copyright © IBM Corp. 2020, 2026
    </p>
  </cds-modal-body>
</cds-modal>
`})}),`
`,o.jsx(n.h3,{id:"with-additional-content",children:"With additional content"}),`
`,o.jsx(n.p,{children:`Some products may be legally required to display logos of technologies used to
build the product. These can be provided in the footer.`}),`
`,o.jsxs(n.p,{children:["While the about modal supports a list of Carbon ",o.jsx(n.code,{children:"cds-link"}),` components, these
should be used to display product information and not to direct users to find
help content.`]}),`
`,o.jsx(s,{withSource:"none",children:o.jsx(t,{of:r})}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-html",children:`<cds-modal aria-label="About this product" ?open="\${this._open}">
  <div class="c4p--about-modal__logo">
    <img src="\${logo}" alt="Example product or service logo" />
  </div>
  <cds-modal-header>
    <cds-modal-close-button close-button-label="Close"></cds-modal-close-button>
    <cds-modal-heading>
      IBM <span class="c4p--about-modal__title-emphasis">Product name</span>
    </cds-modal-heading>
  </cds-modal-header>
  <cds-modal-body>
    <div class="c4p--about-modal__version">Version 0.0.0</div>
    <div class="c4p--about-modal__links-container">
      <cds-link href="#">Link action</cds-link>
      <cds-link href="#">Link action</cds-link>
    </div>
    <p class="c4p--about-modal__content">\${legalCopy}</p>
    <p class="c4p--about-modal__copyright-text">
      Copyright © IBM Corp. 2020, 2026
    </p>
  </cds-modal-body>
  <cds-modal-footer>
    <p class="c4p--about-modal__footer-label">Powered by</p>
    <img src="\${grafanaLogo}" alt="Grafana" class="c4p--about-modal__tech-logo" />
  </cds-modal-footer>
</cds-modal>
`})})]})}function T(e={}){const{wrapper:n}={...i(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(a,{...e})}):a(e)}export{T as default};
