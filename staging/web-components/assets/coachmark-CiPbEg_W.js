import{j as o,M as h,C as e,A as r}from"./blocks-C5gY99bq.js";import{useMDXComponents as p}from"./index-B5-v5Qtp.js";import{C as d,T as c,F as a}from"./coachmark.stories-CI3v5Wc5.js";import{s as i}from"./codePreviewer-DoDHVxzx.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-LTWq63Dx.js";import"./coachmark-beacon-pvrsVBZ6.js";import"./class-map-DX35lnv2.js";import"./index-BlPpHHgw.js";import"./popover-content-DQMgFrRc.js";import"./query-D0jTsbLw.js";import"./floating-controller-oBvGnMaE.js";import"./button-D37mKeLy.js";import"./button-skeleton-B3koeCDo.js";import"./16-D5maUdCH.js";import"./16-DgEWGJjw.js";import"./icon-loader-DWmlJi0p.js";import"./collection-helpers-Cnsts1JG.js";import"./tab-skeleton-VOXo_DRz.js";import"./state-D9pS_nHD.js";import"./skeleton-text-Ckd8bsuM.js";import"./progress-bar-CnxxIwXf.js";import"./16-DvgjsF02.js";import"./16-DSuDh1sQ.js";import"./16-BhEFu2YO.js";import"./breadcrumb-skeleton-B24I2x2J.js";import"./link-Bs8SCEKY.js";import"./overflow-menu-item-8eUXCv5X.js";import"./icon-button-CqSccBYs.js";import"./definition-tooltip-D9INSkqm.js";import"./16-DYhtUhBA.js";import"./checkbox-CPQSClVY.js";import"./16-Ct9TbVNK.js";import"./consume-DxOKXvRI.js";import"./style-map-Bl4DgQuK.js";import"./16-D0aIqdwb.js";import"./validity-CUJaV9kI.js";import"./16-iEvmxbCa.js";import"./dropdown-skeleton-yCZPXrYO.js";import"./16-C2f9e6nj.js";import"./text-input-B-6FkR0n.js";import"./file-uploader-item-BtdDWN2o.js";import"./loading-CVsgVQAd.js";import"./inline-loading-BBPXEiBz.js";import"./form-group-DlZYNmPl.js";import"./search-skeleton-DkUw0IEh.js";import"./form-item-D6wsM-lW.js";import"./32-B8aOpYxN.js";import"./toast-notification-BqAznNM_.js";import"./16-D3CzXAJU.js";import"./16-Ci-Iy0jC.js";import"./text-input-skeleton--0MKD7Kk.js";import"./layer-oZ91cA7p.js";import"./modal-label-m8GwR13E.js";import"./20-CvqWH37X.js";import"./actionable-notification-button-BsFaEUft.js";import"./number-input-skeleton-Bn8IfWtZ.js";import"./16-DXyY1wqk.js";import"./textarea-skeleton-D6HMRNVZ.js";import"./progress-step-DalAXMnz.js";import"./slider-skeleton-nAW8zyc5.js";import"./tag-CIKFoGkI.js";import"./toggle-DOrciRzu.js";import"./switcher-divider-B8xYlUrg.js";import"./20-D_EsaJV1.js";import"./stack-uLuZLs8d.js";import"./20-DPnuUEKe.js";import"./16-DrZ0hxK3.js";import"./32-gWGFBCOY.js";import"./16-CU4u-ZW8.js";import"./16-803qFA73.js";import"./16-BpKA4nzT.js";import"./20-p-8MYGqG.js";import"./20-CppOV_ea.js";import"./16-LR5LqMCE.js";import"./16-CPU3a-Kb.js";import"./16-aWrrgdCQ.js";import"./16-xraWWrlP.js";import"./16-CVWqvXKz.js";import"./16-gUhxGjnI.js";import"./16-BswKfa1f.js";const l=`/**
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

// Listen for coachmark-opened event to focus the appropriate element
export const handleCoachmarkOpened = () => {
  setTimeout(() => {
    const coachmark = document.querySelector(\`\${prefix}-coachmark\`);
    const isFloating = coachmark?.hasAttribute('floating');

    if (isFloating) {
      // Focus drag icon for floating coachmark
      const header = coachmark?.querySelector(
        \`\${prefix}-coachmark-header\`
      ) as HTMLElement;
      if (header && header.shadowRoot) {
        const dragHandle = header.shadowRoot.querySelector(
          \`.\${prefix}--coachmark-header-drag-handle\`
        ) as HTMLElement;
        dragHandle?.focus();
      }
    } else {
      // Focus done button for non-floating coachmark
      const doneButton = document.querySelector('.coachmark-body cds-button');
      (doneButton as HTMLElement)?.focus();
    }
  }, 100);
};
`,s=[`const el = document?.body.querySelector('my-app');

`+l.replace(/import\s+.*?from\s+['"].*?['"];?\s*/g,"").replace(/export\s+/g,"").replace(/\/\*\*[\s\S]*?\*\//g,"").replace(/document\.querySelector\(/g,"el?.shadowRoot?.querySelector(").trim()],u=[`import iconLoader from '@carbon/web-components/es/globals/internal/icon-loader.js';
import Crossroads from '@carbon/icons/es/crossroads/16.js';
`];function m(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...p(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(h,{of:d}),`
`,o.jsx(n.h1,{id:"coachmark",children:"Coachmark"}),`
`,o.jsxs(n.blockquote,{children:[`
`,o.jsxs(n.p,{children:[`💡 Check our
`,o.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/coachmark",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,o.jsx(n.p,{children:o.jsx(n.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/coachmark/usage",rel:"nofollow",children:"Usage guidelines"})}),`
`,o.jsxs(n.p,{children:[o.jsx(n.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/coachmark/usage",rel:"nofollow",children:"Coachmark"}),`
are used to call out specific functionality or concepts within the UI that may not be intuitive but are important for the user to gain an understanding of the product’s main value and discover new use cases. They can be used for first-time use, as well as secondary onboarding and to highlight new functionality.`]}),`
`,o.jsx(n.h2,{id:"getting-started",children:"Getting started"}),`
`,o.jsx(n.p,{children:"Here's a quick example to get you started."}),`
`,o.jsx(n.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-javascript",children:`import '@carbon/ibm-products-web-components/es/components/coachmark/index.js';
import '@carbon/ibm-products-web-components/es/components/coachmark/coachmark-beacon/index.js';
import '@carbon/web-components/es/components/button/index.js';
import Crossroads from '@carbon/icons/es/crossroads/16.js';
`})}),`
`,o.jsx(n.h3,{id:"html",children:"HTML"}),`
`,o.jsx(n.h3,{id:"tooltip",children:"Tooltip"}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-html",children:`  <c4p-coachmark
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
`,o.jsx(n.h3,{id:"floating",children:"Floating"}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-html",children:`  <c4p-coachmark
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
`,o.jsx(n.h3,{id:"example-usage",children:"Example Usage"}),`
`,o.jsx(n.h3,{id:"tooltip-1",children:"Tooltip"}),`
`,o.jsx(e,{of:c,additionalActions:[{title:"Open in Stackblitz",onClick:()=>i({story:c,customFunctionDefs:s,componentName:"coachmark"})}]}),`
`,o.jsx(n.h3,{id:"floating-1",children:"Floating"}),`
`,o.jsx(e,{of:a,additionalActions:[{title:"Open in Stackblitz",onClick:()=>i({story:a,customFunctionDefs:s,customImports:u,componentName:"coachmark"})}]}),`
`,o.jsxs(n.h2,{id:"c4p-coachmark-attributes-properties-and-events",children:[o.jsx(n.code,{children:"<c4p-coachmark>"})," attributes, properties and events"]}),`
`,o.jsx(r,{of:"c4p-coachmark"}),`
`,o.jsxs(n.h2,{id:"c4p-coachmark-header-attributes-properties-and-events",children:[o.jsx(n.code,{children:"<c4p-coachmark-header>"})," attributes, properties and events"]}),`
`,o.jsx(r,{of:"c4p-coachmark-header"}),`
`,o.jsxs(n.h2,{id:"c4p-coachmark-body-attributes-properties-and-events",children:[o.jsx(n.code,{children:"<c4p-coachmark-body>"})," attributes, properties and events"]}),`
`,o.jsxs(n.p,{children:["The ",o.jsx(n.code,{children:"<c4p-coachmark-body>"})," component serves as a container for the coachmark’s main content."]})]})}function Xo(t={}){const{wrapper:n}={...p(),...t.components};return n?o.jsx(n,{...t,children:o.jsx(m,{...t})}):m(t)}export{s as customFunctionArr,u as customImportArr,Xo as default};
