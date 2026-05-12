import{j as o,M as h,C as e,A as r}from"./blocks-DJzRcHPi.js";import{useMDXComponents as p}from"./index-BLkAPSyv.js";import{C as d,T as c,F as i}from"./coachmark.stories-c-DHFsGG.js";import{s as a}from"./codePreviewer-BoTIw-rQ.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-CgNFSeB1.js";import"./coachmark-beacon-BCt4ENyz.js";import"./host-listener-DN1-XIwx.js";import"./index-CqEQr9cn.js";import"./popover-content-XMDEUlVi.js";import"./floating-controller-O5_OP1Uj.js";import"./query-D0jTsbLw.js";import"./class-map-Bdn2bqNV.js";import"./button-ByE8Aak9.js";import"./button-skeleton-D1pZMfSU.js";import"./16-D5maUdCH.js";import"./16-BJ-s22c-.js";import"./icon-loader-z0mqz2T1.js";import"./16-B_l_7QwJ.js";import"./collection-helpers-Cnsts1JG.js";import"./tab-skeleton-46M3x7KT.js";import"./state-CbL7u6MK.js";import"./skeleton-text-CVCELsZ2.js";import"./progress-bar-Ck6HW4EF.js";import"./16-DvgjsF02.js";import"./16-DSuDh1sQ.js";import"./16-CRltFL5t.js";import"./breadcrumb-skeleton-ClMnp5W3.js";import"./link-Dlkem5jw.js";import"./definition-tooltip-DahtQP5e.js";import"./icon-button-BUePki20.js";import"./overflow-menu-item-DDmoNAY6.js";import"./16-DYhtUhBA.js";import"./checkbox-Cyr3ZnMD.js";import"./16-BKf1RCCE.js";import"./consume-BS0AbIQr.js";import"./16-iEvmxbCa.js";import"./style-map-fTufT2hl.js";import"./16-D0aIqdwb.js";import"./dropdown-skeleton-Caaz6mi7.js";import"./validity-CzEiVmrf.js";import"./16-C2f9e6nj.js";import"./text-input-DhA2aRrt.js";import"./file-uploader-item-l4iSXMYn.js";import"./loading-BjLrn8PQ.js";import"./inline-loading-C2qgR8sc.js";import"./form-group-xssOQxDB.js";import"./search-skeleton-ClVLDoyK.js";import"./form-item-C3HOOCdY.js";import"./32-C4AmCwEY.js";import"./toast-notification-DZ83oCSA.js";import"./16-D3CzXAJU.js";import"./16-Ci-Iy0jC.js";import"./text-input-skeleton-hnhNvQVe.js";import"./layer-tXXzVMol.js";import"./modal-label-l9GUQMia.js";import"./20-CvqWH37X.js";import"./actionable-notification-button-8TO3DLVY.js";import"./number-input-skeleton-BcTUkBeN.js";import"./16-DXyY1wqk.js";import"./textarea-skeleton-BmUNDGon.js";import"./progress-step-DNimpfgf.js";import"./slider-skeleton-BVwc6YWz.js";import"./tag-vmFy3lSX.js";import"./toggle-BIlyHigR.js";import"./switcher-divider-k4J9MKIR.js";import"./20-D_EsaJV1.js";import"./stack-BomrF2_0.js";import"./20-dOzCPQEj.js";import"./16-DrZ0hxK3.js";import"./32-gWGFBCOY.js";import"./16-CfG0rDIQ.js";import"./16-803qFA73.js";import"./16-BpKA4nzT.js";import"./20-p-8MYGqG.js";import"./index-DkSYGz6Z.js";import"./16-LR5LqMCE.js";import"./16-CPU3a-Kb.js";import"./20-CEm2HUGl.js";import"./16-DSpKrZTh.js";import"./16-aWrrgdCQ.js";import"./16-xraWWrlP.js";import"./16-DOn1njS0.js";import"./16-C-Ba_D2f.js";import"./16-gUhxGjnI.js";import"./16-BswKfa1f.js";import"./20-3muJ_g4f.js";const l=`/**
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
`,o.jsxs(t.p,{children:["The ",o.jsx(t.code,{children:"<c4p-coachmark-body>"})," component serves as a container for the coachmark’s main content."]})]})}function Ko(n={}){const{wrapper:t}={...p(),...n.components};return t?o.jsx(t,{...n,children:o.jsx(m,{...n})}):m(n)}export{s as customFunctionArr,u as customImportArr,Ko as default};
