import{j as o,M as h,C as e,A as r}from"./blocks-Dk7EIFdo.js";import{useMDXComponents as p}from"./index-Cv7mAmmJ.js";import{C as d,T as c,F as i}from"./coachmark.stories-D_i7IUfx.js";import{s as a}from"./codePreviewer-VZmLTzH2.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-DCyUdvyd.js";import"./coachmark-beacon-B4UU1qgt.js";import"./class-map-phl3okVG.js";import"./index-Da7DgJs9.js";import"./popover-content-CL9jmiNa.js";import"./query-D0jTsbLw.js";import"./floating-controller-xHgEX7I-.js";import"./button-C3qrS0FG.js";import"./button-skeleton-B3cVTbQo.js";import"./16-D5maUdCH.js";import"./16-DgEWGJjw.js";import"./icon-loader-DJwbA0i1.js";import"./collection-helpers-Cnsts1JG.js";import"./tab-skeleton-fAoNQkQn.js";import"./state-CBGOrMJf.js";import"./skeleton-text-CsPJA1R9.js";import"./progress-bar-CDYXNf9z.js";import"./16-DvgjsF02.js";import"./16-DSuDh1sQ.js";import"./16-CtvlJoTL.js";import"./breadcrumb-skeleton-BQ5xoA-d.js";import"./link-Dmsy2I9n.js";import"./overflow-menu-item-BeScIwv4.js";import"./icon-button-CxkHNCPd.js";import"./definition-tooltip-DODAVJUY.js";import"./16-DYhtUhBA.js";import"./checkbox-DMsc1laA.js";import"./16-COlWGPCY.js";import"./consume-0PqtCb-J.js";import"./style-map-CAiPd8CD.js";import"./16-D0aIqdwb.js";import"./validity-CUJaV9kI.js";import"./16-iEvmxbCa.js";import"./dropdown-skeleton-BbEDuNT8.js";import"./16-C2f9e6nj.js";import"./text-input-DxiW-aRs.js";import"./file-uploader-item-CO7VXitH.js";import"./loading-gOVN33Bw.js";import"./inline-loading-D_6XjEgf.js";import"./form-group-Dy58wmnA.js";import"./search-skeleton-3JCv3lAU.js";import"./form-item-sJMGKszo.js";import"./32-Lu7A6wmg.js";import"./16-DoG_qfmj.js";import"./16-D3CzXAJU.js";import"./16-Ci-Iy0jC.js";import"./text-input-skeleton-Dqix3M9Q.js";import"./layer-Dby8OZF6.js";import"./modal-label-D1nxGQdu.js";import"./20-CvqWH37X.js";import"./actionable-notification-button-rpUUwBQ1.js";import"./number-input-skeleton-D_vTe2Ca.js";import"./16-DXyY1wqk.js";import"./textarea-skeleton-CFwR9jir.js";import"./progress-step-Ch1-j90B.js";import"./slider-skeleton-Bc38nPx5.js";import"./tag-sqwJOSAd.js";import"./toggle-B_oTdfeQ.js";import"./switcher-divider-D2a2M6DO.js";import"./20-D_EsaJV1.js";import"./stack-krBDYPeD.js";import"./20-BoSto6ak.js";import"./16-B7SSgyYC.js";import"./16-CU4u-ZW8.js";import"./16-803qFA73.js";import"./16-BpKA4nzT.js";import"./20-CppOV_ea.js";import"./16-LR5LqMCE.js";import"./16-CPU3a-Kb.js";import"./16-aWrrgdCQ.js";import"./16-xraWWrlP.js";import"./16-CVWqvXKz.js";import"./16-BswKfa1f.js";const l=`/**
 * @license
 *
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { prefix } from '../../globals/settings';

export const handleClick = () => {
  const coachmark = document.querySelector('c4p-coachmark');
  coachmark?.toggleAttribute('open');
};

export const handleDone = () => {
  document.querySelector(\`\${prefix}-coachmark\`)?.removeAttribute('open');
};

// Listen for coachmark-opened event to focus the Done button
export const handleCoachmarkOpened = () => {
  setTimeout(() => {
    const doneButton = document.querySelector('.coachmark-body cds-button');
    (doneButton as HTMLElement)?.focus();
  }, 100);
};
`,s=[`const el = document?.body.querySelector('my-app');

`+l.replace(/import\s+.*?from\s+['"].*?['"];?\s*/g,"").replace(/export\s+/g,"").replace(/\/\*\*[\s\S]*?\*\//g,"").replace(/document\.querySelector\(/g,"el?.shadowRoot?.querySelector(").trim()],u=[`import iconLoader from '@carbon/web-components/es/globals/internal/icon-loader.js';
import Crossroads from '@carbon/icons/es/crossroads/16.js';
`];function m(n){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...p(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(h,{of:d}),`
`,o.jsx(t.h1,{id:"coachmark",children:"Coachmark"}),`
`,o.jsxs(t.blockquote,{children:[`
`,o.jsxs(t.p,{children:[`💡 Check our
`,o.jsx(t.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/coachmark",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,o.jsx(t.p,{children:o.jsx(t.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/coachmark/usage",rel:"nofollow",children:"Usage guidelines"})}),`
`,o.jsxs(t.p,{children:[o.jsx(t.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/coachmark/usage",rel:"nofollow",children:"Coachmark"}),`
are used to call out specific functionality or concepts within the UI that may not be intuitive but are important for the user to gain an understanding of the product’s main value and discover new use cases. They can be used for first-time use, as well as secondary onboarding and to highlight new functionality.`]}),`
`,o.jsx(t.h2,{id:"getting-started",children:"Getting started"}),`
`,o.jsx(t.p,{children:"Here's a quick example to get you started."}),`
`,o.jsx(t.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-javascript",children:`import '@carbon/ibm-products-web-components/es/components/coachmark/index.js';
import '@carbon/ibm-products-web-components/es/components/coachmark/coachmark-beacon/index.js';
import '@carbon/web-components/es/components/button/index.js';
import Crossroads from '@carbon/icons/es/crossroads/16.js';
`})}),`
`,o.jsx(t.h3,{id:"html",children:"HTML"}),`
`,o.jsx(t.h3,{id:"tooltip",children:"Tooltip"}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-html",children:`  <c4p-coachmark
    align='bottom'
    .open=\${true}
    .highContrast=\${true}
  >
    <c4p-coachmark-beacon
      label="Show information"
      .expanded=\${true}
      @c4p-coachmark-beacon-clicked=\${handleClick}
      slot="trigger"
    >
    </c4p-coachmark-beacon>
    <c4p-coachmark-header
      class="coachmark-header"
      closeIconDescription="close icon"
    ></c4p-coachmark-header>
    <c4p-coachmark-body class="coachmark-body">
      <h2>Hello World</h2>
      <p>this is a description test</p>
      <cds-button size="sm">Done</cds-button>
    </c4p-coachmark-body>
  </c4p-coachmark>
`})}),`
`,o.jsx(t.h3,{id:"floating",children:"Floating"}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-html",children:`  <c4p-coachmark
    align="bottom"
    .open=\${true}
    .highContrast=\${true}
    .floating=\${true}
  >
    <cds-button
      kind="tertiary"
      slot="trigger"
      class="trigger-btn"
      @click=\${handleClick}
    >Show information \${iconLoader(ArrowRight as any, { slot: 'icon' })}
    </cds-button>
    <c4p-coachmark-header
    class="coachmark-header"
    closeIconDescription="close icon"
    ></c4p-coachmark-header>
    <c4p-coachmark-body class="coachmark-body">
      <h2>Hello World</h2>
      <p>this is a description test</p>
      <cds-button size="sm">Done</cds-button>
    </c4p-coachmark-body>
  </c4p-coachmark>
`})}),`
`,o.jsx(t.h3,{id:"example-usage",children:"Example Usage"}),`
`,o.jsx(t.h3,{id:"tooltip-1",children:"Tooltip"}),`
`,o.jsx(e,{of:c,additionalActions:[{title:"Open in Stackblitz",onClick:()=>a({story:c,customFunctionDefs:s,componentName:"coachmark"})}]}),`
`,o.jsx(t.h3,{id:"floating-1",children:"Floating"}),`
`,o.jsx(e,{of:i,additionalActions:[{title:"Open in Stackblitz",onClick:()=>a({story:i,customFunctionDefs:s,customImports:u,componentName:"coachmark"})}]}),`
`,o.jsxs(t.h2,{id:"c4p-coachmark-attributes-properties-and-events",children:[o.jsx(t.code,{children:"<c4p-coachmark>"})," attributes, properties and events"]}),`
`,o.jsx(r,{of:"c4p-coachmark"}),`
`,o.jsxs(t.h2,{id:"c4p-coachmark-header-attributes-properties-and-events",children:[o.jsx(t.code,{children:"<c4p-coachmark-header>"})," attributes, properties and events"]}),`
`,o.jsx(r,{of:"c4p-coachmark-header"}),`
`,o.jsxs(t.h2,{id:"c4p-coachmark-body-attributes-properties-and-events",children:[o.jsx(t.code,{children:"<c4p-coachmark-body>"})," attributes, properties and events"]}),`
`,o.jsxs(t.p,{children:["The ",o.jsx(t.code,{children:"<c4p-coachmark-body>"})," component serves as a container for the coachmark’s main content."]})]})}function Oo(n={}){const{wrapper:t}={...p(),...n.components};return t?o.jsx(t,{...n,children:o.jsx(m,{...n})}):m(n)}export{s as customFunctionArr,u as customImportArr,Oo as default};
