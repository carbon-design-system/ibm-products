import{u as p,j as o,M as h,C as r,A as e}from"./blocks-Bf4ALiN_.js";import{C as d,T as c,F as i}from"./coachmark.stories-CNaMFJIT.js";import{s as a}from"./codePreviewer-Ask97b7J.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-CRmnE6JT.js";import"./coachmark-beacon-jEpndnQi.js";import"./state-BjiaeJkM.js";import"./host-listener-DN1-XIwx.js";import"./index-MBi77NEp.js";import"./popover-content-0IyLSMJi.js";import"./deep-shadow-contains-CX7jJMNg.js";import"./class-map-1b56Lb7a.js";import"./button-Hfvgyj54.js";import"./button-skeleton-C1A52Sfs.js";import"./16-D5maUdCH.js";import"./16-BJ-s22c-.js";import"./icon-loader-CYhG94LF.js";import"./16-B_l_7QwJ.js";import"./collection-helpers-DS5mzmOk.js";import"./16-z4EPQvwm.js";import"./skeleton-text-BUq4_ZdW.js";import"./dropdown-skeleton-CKgxgsx7.js";import"./16-DvgjsF02.js";import"./form-BTpacr1I.js";import"./validity-CzEiVmrf.js";import"./16-C1hWzIbz.js";import"./16-B8NH1ntc.js";import"./16-D0aIqdwb.js";import"./16-C2f9e6nj.js";import"./progress-bar-DjAz_2ts.js";import"./16-DSuDh1sQ.js";import"./skeleton-icon-DEsqvADY.js";import"./16-D5iRoj1X.js";import"./breadcrumb-skeleton-c-Hog0Yy.js";import"./link-B1bfPlx7.js";import"./definition-tooltip-zxe_iCYj.js";import"./icon-button-BexeCJbz.js";import"./overflow-menu-item-BftT7klX.js";import"./consume-DI2TaawZ.js";import"./index-CWLFeOgg.js";import"./16-DYhtUhBA.js";import"./checkbox-DPtW3aU7.js";import"./checkbox-skeleton-CQpPYlXd.js";import"./code-snippet-skeleton-BMsHRG1A.js";import"./16-iEvmxbCa.js";import"./style-map-Bb5JJDht.js";import"./if-non-empty-CdV8fGSQ.js";import"./tab-skeleton-CnycmvCQ.js";import"./file-uploader-item-_E7aNRPj.js";import"./loading-Dzg5GgfW.js";import"./inline-loading-uPBNUq7T.js";import"./radio-button-skeleton-cINbMMhN.js";import"./search-skeleton-BnWdSUNi.js";import"./text-input-BkFvhf9h.js";import"./16-B9g2nIv4.js";import"./form-item-Cr31aulc.js";import"./form-group-CrZJWXl-.js";import"./32-DEBCMdDk.js";import"./toast-notification-bXyGPkxL.js";import"./16-D3CzXAJU.js";import"./16-Ci-Iy0jC.js";import"./text-input-skeleton-BGhy3ag-.js";import"./layer-BN05p3em.js";import"./modal-label-B8XLOYuv.js";import"./20-CvqWH37X.js";import"./actionable-notification-button-ZlOvCL-o.js";import"./number-input-skeleton-CJGYeiLh.js";import"./16-DXyY1wqk.js";import"./textarea-skeleton-B9Uv1C5K.js";import"./progress-step-BTUBi5A6.js";import"./slider-skeleton-CTu7DQb0.js";import"./tag-gsG8y1hD.js";import"./tile-group-C-LNjd-a.js";import"./16-BpKA4nzT.js";import"./toggle-DTsKNZAo.js";import"./switcher-divider-YRvmMzcS.js";import"./stack-BN47kujP.js";import"./20-CDWUo4di.js";import"./16-Cb7P2Dje.js";import"./16-CfG0rDIQ.js";import"./16-DdDEGe5r.js";import"./16-803qFA73.js";import"./16-BggJfAoA.js";import"./index-DkSYGz6Z.js";import"./20-q75D_U8N.js";import"./16-C_7DXZKc.js";import"./16-BsOTR82k.js";import"./16-LR5LqMCE.js";import"./16-CPU3a-Kb.js";import"./20-CEm2HUGl.js";import"./16-DSpKrZTh.js";import"./16-aWrrgdCQ.js";import"./16-xraWWrlP.js";import"./16-C22St5FV.js";import"./16-DOn1njS0.js";import"./16-C-Ba_D2f.js";import"./16-gUhxGjnI.js";import"./16-BswKfa1f.js";import"./20-3muJ_g4f.js";const l=`/**
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
