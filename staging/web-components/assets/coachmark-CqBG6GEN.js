import{u as p,j as o,M as h,C as r,A as e}from"./blocks-BpYy6Kus.js";import{C as d,T as c,F as i}from"./coachmark.stories-qyg9egLq.js";import{s as a}from"./codePreviewer-BdzSrME_.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-BjfCSw7l.js";import"./coachmark-beacon-DFkDn78C.js";import"./state-CBHOxDdd.js";import"./host-listener-kwRZOB_f.js";import"./index--zG4BMqE.js";import"./popover-content-DzQ2mNSG.js";import"./deep-shadow-contains-BvJEnj9d.js";import"./class-map-De0W_ih8.js";import"./button-Ci2L7IAh.js";import"./button-skeleton-DG90fYPb.js";import"./16-D5maUdCH.js";import"./16-BJ-s22c-.js";import"./icon-loader-C3atd2ML.js";import"./16-B_l_7QwJ.js";import"./collection-helpers-DS5mzmOk.js";import"./16-z4EPQvwm.js";import"./skeleton-text-C9SyAame.js";import"./dropdown-skeleton-_ZSFx_j9.js";import"./16-DvgjsF02.js";import"./form-Bv1Rg7Di.js";import"./validity-CzEiVmrf.js";import"./16-C1hWzIbz.js";import"./16-B8NH1ntc.js";import"./16-D0aIqdwb.js";import"./16-C2f9e6nj.js";import"./progress-bar-CElYiyzN.js";import"./16-DSuDh1sQ.js";import"./skeleton-icon-Bc6z-oaJ.js";import"./16-DnFfShiv.js";import"./breadcrumb-skeleton-BqZPPfEb.js";import"./link-Bivpi56q.js";import"./definition-tooltip-4PFlWzxp.js";import"./icon-button-B_Y7OlVp.js";import"./overflow-menu-item-Czfe93PN.js";import"./consume-DI2TaawZ.js";import"./16-DYhtUhBA.js";import"./16-BpKA4nzT.js";import"./index-DpJE2t4D.js";import"./16-DOn1njS0.js";import"./style-map-Q4-wlQ4P.js";import"./checkbox-RjBGDM_J.js";import"./checkbox-skeleton-Ai1f3qYu.js";import"./code-snippet-skeleton-CtiDHJVa.js";import"./16-iEvmxbCa.js";import"./if-non-empty-0gbAFI6H.js";import"./tab-skeleton-Bc-GZ_DE.js";import"./file-uploader-item-DJjdmeTe.js";import"./loading-CXx5P3_C.js";import"./inline-loading-DPHUZpmP.js";import"./radio-button-skeleton-CvdUAe_n.js";import"./search-skeleton-gC9HZxdp.js";import"./form-item-CeZ_pK1B.js";import"./form-group-D0Qbr9mq.js";import"./32-DV6rM9n9.js";import"./toast-notification-BrQ8G3_j.js";import"./16-D3CzXAJU.js";import"./16-Ci-Iy0jC.js";import"./text-input-szq26kvM.js";import"./16-B9g2nIv4.js";import"./text-input-skeleton-BYwanTbV.js";import"./layer-CA0Wcn_a.js";import"./modal-label-C0TjKOYx.js";import"./20-CvqWH37X.js";import"./actionable-notification-button-CMXRUegH.js";import"./number-input-skeleton-CX2aI-EF.js";import"./16-DXyY1wqk.js";import"./textarea-skeleton-D-c1YSzx.js";import"./progress-step-C2bshfKU.js";import"./slider-skeleton-Bhpur6sv.js";import"./tag-RyICHoMz.js";import"./tile-group-DyFTN8cV.js";import"./toggle-D98FCZ5P.js";import"./switcher-divider-C1Sv5Tll.js";import"./stack-BpUxbVpU.js";import"./20-UtxN0VC_.js";import"./16-Cb7P2Dje.js";import"./16-CfG0rDIQ.js";import"./16-DdDEGe5r.js";import"./16-803qFA73.js";import"./16-BggJfAoA.js";import"./index-DkSYGz6Z.js";import"./20-q75D_U8N.js";import"./16-C_7DXZKc.js";import"./16-BsOTR82k.js";import"./16-LR5LqMCE.js";import"./16-CPU3a-Kb.js";import"./20-CEm2HUGl.js";import"./16-DSpKrZTh.js";import"./16-aWrrgdCQ.js";import"./16-Dmu1QWqc.js";import"./16-C22St5FV.js";import"./16-C-Ba_D2f.js";import"./16-CFYMBMYp.js";import"./16-gUhxGjnI.js";import"./16-BswKfa1f.js";import"./20-3muJ_g4f.js";const l=`/**
 * @license
 *
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { prefix } from '../../globals/settings';
import { coachmarkDetailsSignal } from './coachmark-context';

export const handleClick = () => {
  const coachmark = document.querySelector('c4p-coachmark');
  coachmark?.toggleAttribute('open');
};

export const handleDone = () => {
  const coachmark = document.querySelector('c4p-coachmark');
  coachmark?.removeAttribute('open');
};

export const handleCoachmarkOpened = () => {
  const details = coachmarkDetailsSignal.get();

  setTimeout(() => {
    if (details.floating) {
      // Focus on drag handle for floating coachmark
      const header = document.querySelector(\`\${prefix}-coachmark-header\`);
      const dragHandle = header?.shadowRoot?.querySelector(
        \`.\${prefix}--coachmark-header-drag-handle\`
      ) as HTMLElement;
      dragHandle?.focus();
    } else {
      // Focus on done button for non-floating coachmark
      const doneButton = document.querySelector(
        '.coachmark-body cds-button'
      ) as HTMLElement;
      doneButton?.focus();
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
    .caret=\${true}
    selector-primary-focus=".done-button"
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
`,o.jsx(r,{of:c,additionalActions:[{title:"Open in Stackblitz",onClick:()=>a({story:c,customFunctionDefs:s,componentName:"coachmark"})}]}),`
`,o.jsx(t.h3,{id:"floating-1",children:"Floating"}),`
`,o.jsx(r,{of:i,additionalActions:[{title:"Open in Stackblitz",onClick:()=>a({story:i,customFunctionDefs:s,customImports:u,componentName:"coachmark"})}]}),`
`,o.jsxs(t.h2,{id:"c4p-coachmark-attributes-properties-and-events",children:[o.jsx(t.code,{children:"<c4p-coachmark>"})," attributes, properties and events"]}),`
`,o.jsx(e,{of:"c4p-coachmark"}),`
`,o.jsxs(t.h2,{id:"c4p-coachmark-header-attributes-properties-and-events",children:[o.jsx(t.code,{children:"<c4p-coachmark-header>"})," attributes, properties and events"]}),`
`,o.jsx(e,{of:"c4p-coachmark-header"}),`
`,o.jsxs(t.h2,{id:"c4p-coachmark-body-attributes-properties-and-events",children:[o.jsx(t.code,{children:"<c4p-coachmark-body>"})," attributes, properties and events"]}),`
`,o.jsxs(t.p,{children:["The ",o.jsx(t.code,{children:"<c4p-coachmark-body>"})," component serves as a container for the coachmark’s main content."]})]})}function st(n={}){const{wrapper:t}={...p(),...n.components};return t?o.jsx(t,{...n,children:o.jsx(m,{...n})}):m(n)}export{s as customFunctionArr,u as customImportArr,st as default};
