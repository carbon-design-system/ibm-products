import{u as p,j as o,M as h,C as r,A as e}from"./blocks-D8aXWszT.js";import{C as d,T as c,F as i}from"./coachmark.stories-Wlza3pfn.js";import{s as a}from"./codePreviewer-a7AeKpkn.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-BeiuzDDI.js";import"./coachmark-beacon-DUgKo1wf.js";import"./state-wuDIel8h.js";import"./host-listener-DN1-XIwx.js";import"./index-YYQ-WX4I.js";import"./popover-content-9vQtx_uV.js";import"./deep-shadow-contains-CgxOJitL.js";import"./class-map-BS30bUre.js";import"./button-DchrcEvf.js";import"./button-skeleton-B_fMUrZY.js";import"./16-D5maUdCH.js";import"./16-BJ-s22c-.js";import"./icon-loader-DYitl9j7.js";import"./16-B_l_7QwJ.js";import"./collection-helpers-DS5mzmOk.js";import"./16-z4EPQvwm.js";import"./skeleton-text-D0Re7VJ9.js";import"./dropdown-skeleton-DDPhH5iC.js";import"./16-DvgjsF02.js";import"./form-BTpacr1I.js";import"./validity-CzEiVmrf.js";import"./16-C1hWzIbz.js";import"./16-B8NH1ntc.js";import"./16-D0aIqdwb.js";import"./16-C2f9e6nj.js";import"./progress-bar-BIOXCzTL.js";import"./16-DSuDh1sQ.js";import"./skeleton-icon-DM3ZH4kI.js";import"./16-Bdq7556Q.js";import"./breadcrumb-skeleton-O1vpi-lL.js";import"./link-0L02rpg8.js";import"./definition-tooltip-DLL861dr.js";import"./icon-button-DPkM1bhc.js";import"./overflow-menu-item-BsD3pH5u.js";import"./consume-DI2TaawZ.js";import"./index-CD1mMP8h.js";import"./16-DYhtUhBA.js";import"./checkbox-B6c_GYqy.js";import"./checkbox-skeleton-DHRjwkst.js";import"./code-snippet-skeleton-C0sz2bQn.js";import"./16-iEvmxbCa.js";import"./if-non-empty-B0oc9X11.js";import"./tab-skeleton-CcBc5WdO.js";import"./file-uploader-item-DxcobLsI.js";import"./loading-oOc5hSea.js";import"./inline-loading-BSNO7R9g.js";import"./radio-button-skeleton-CiE4q2Rf.js";import"./search-skeleton-Dp1FDVc_.js";import"./form-item-CE1QLyGb.js";import"./form-group-V99pZQhZ.js";import"./32-Cl_p9pZP.js";import"./toast-notification-C-WwLuBw.js";import"./16-D3CzXAJU.js";import"./16-Ci-Iy0jC.js";import"./text-input-B34936vs.js";import"./16-B9g2nIv4.js";import"./text-input-skeleton-BLCMAQwt.js";import"./layer-CAmVBUsf.js";import"./modal-label-C_W5i1Tu.js";import"./20-CvqWH37X.js";import"./actionable-notification-button-p2BruRFV.js";import"./number-input-skeleton-BlcZzuhT.js";import"./16-DXyY1wqk.js";import"./textarea-skeleton-zNJNnWsA.js";import"./progress-step-CGVteXAD.js";import"./slider-skeleton-ClMzpK6C.js";import"./tag-BrrUMBNH.js";import"./tile-group-CkK2vuxa.js";import"./16-BpKA4nzT.js";import"./toggle-CJhdEDpc.js";import"./switcher-divider-BaOz1r4l.js";import"./stack-DdhRCgvJ.js";import"./20-6UrXDB7V.js";import"./16-Cb7P2Dje.js";import"./16-CfG0rDIQ.js";import"./16-DdDEGe5r.js";import"./16-803qFA73.js";import"./16-BggJfAoA.js";import"./index-DkSYGz6Z.js";import"./20-q75D_U8N.js";import"./16-C_7DXZKc.js";import"./16-BsOTR82k.js";import"./16-LR5LqMCE.js";import"./16-CPU3a-Kb.js";import"./20-CEm2HUGl.js";import"./16-DSpKrZTh.js";import"./16-aWrrgdCQ.js";import"./16-Dmu1QWqc.js";import"./16-C22St5FV.js";import"./16-DOn1njS0.js";import"./16-C-Ba_D2f.js";import"./16-CFYMBMYp.js";import"./16-gUhxGjnI.js";import"./16-BswKfa1f.js";import"./20-3muJ_g4f.js";const l=`/**
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
`,o.jsxs(t.p,{children:["The ",o.jsx(t.code,{children:"<c4p-coachmark-body>"})," component serves as a container for the coachmark’s main content."]})]})}function at(n={}){const{wrapper:t}={...p(),...n.components};return t?o.jsx(t,{...n,children:o.jsx(m,{...n})}):m(n)}export{s as customFunctionArr,u as customImportArr,at as default};
