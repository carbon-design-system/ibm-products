import{j as o,M as h,C as e,A as r}from"./blocks-CHJjRkec.js";import{useMDXComponents as p}from"./index-wz-uvy-O.js";import{C as d,T as c,F as a}from"./coachmark.stories-QnMfLmv-.js";import{s as i}from"./codePreviewer-CdTHx_N8.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-BSerOd4r.js";import"./coachmark-beacon-Ds8K9rH-.js";import"./class-map-C13EjW-N.js";import"./index-CWoKuKvP.js";import"./popover-content-ed0Pyil1.js";import"./query-D0jTsbLw.js";import"./floating-controller-oBvGnMaE.js";import"./button-BCfvtfcs.js";import"./button-skeleton-Cr5pY24u.js";import"./16-D5maUdCH.js";import"./16-BJ-s22c-.js";import"./icon-loader-DvuWCAmY.js";import"./16-B_l_7QwJ.js";import"./collection-helpers-Cnsts1JG.js";import"./tab-skeleton-DhdflDKM.js";import"./state-C8U7RqRN.js";import"./skeleton-text-DjaZu3dS.js";import"./progress-bar-w6OittgM.js";import"./16-DvgjsF02.js";import"./16-DSuDh1sQ.js";import"./16-DZd5Gz43.js";import"./breadcrumb-skeleton-DNgKuqnL.js";import"./link-DWIQQKKv.js";import"./overflow-menu-item-ebqYRLSt.js";import"./icon-button-a_b8kjUt.js";import"./definition-tooltip-DHqw2Vew.js";import"./16-DYhtUhBA.js";import"./checkbox-D-jTFO6M.js";import"./16-DklnDM7b.js";import"./consume-BbUldnZo.js";import"./style-map-B29j8P-8.js";import"./16-D0aIqdwb.js";import"./validity-CUJaV9kI.js";import"./16-iEvmxbCa.js";import"./dropdown-skeleton-DooTMm3W.js";import"./16-C2f9e6nj.js";import"./text-input-BQdjbvD3.js";import"./file-uploader-item-DwPcgZSm.js";import"./loading-BQVM2bLd.js";import"./inline-loading-CAdbPM5o.js";import"./form-group-CPkvvBay.js";import"./search-skeleton-DZZa3pOF.js";import"./form-item-CAV3Kjxn.js";import"./32-DMiw3ToL.js";import"./toast-notification-B5D-byUk.js";import"./16-D3CzXAJU.js";import"./16-Ci-Iy0jC.js";import"./text-input-skeleton-CYmxDUj3.js";import"./layer-BmQxbjS3.js";import"./modal-label-BndOtWYH.js";import"./20-CvqWH37X.js";import"./actionable-notification-button-Dy1BeoXx.js";import"./number-input-skeleton-BU0Gmrgg.js";import"./16-DXyY1wqk.js";import"./textarea-skeleton-XGM5dkqm.js";import"./progress-step-CHp_nlSL.js";import"./slider-skeleton-CGgfAUsj.js";import"./tag-BGjuzXTT.js";import"./toggle-BlVMhpO2.js";import"./switcher-divider-Chcvh9ZR.js";import"./20-D_EsaJV1.js";import"./stack-DnhZfaiC.js";import"./20-DIUILptf.js";import"./16-DrZ0hxK3.js";import"./32-gWGFBCOY.js";import"./16-CU4u-ZW8.js";import"./16-803qFA73.js";import"./16-BpKA4nzT.js";import"./20-p-8MYGqG.js";import"./20-CppOV_ea.js";import"./16-LR5LqMCE.js";import"./16-CPU3a-Kb.js";import"./16-DSpKrZTh.js";import"./16-aWrrgdCQ.js";import"./16-xraWWrlP.js";import"./16-CVWqvXKz.js";import"./16-gUhxGjnI.js";import"./16-BswKfa1f.js";const l=`/**
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
`,o.jsxs(n.p,{children:["The ",o.jsx(n.code,{children:"<c4p-coachmark-body>"})," component serves as a container for the coachmark’s main content."]})]})}function _o(t={}){const{wrapper:n}={...p(),...t.components};return n?o.jsx(n,{...t,children:o.jsx(m,{...t})}):m(t)}export{s as customFunctionArr,u as customImportArr,_o as default};
