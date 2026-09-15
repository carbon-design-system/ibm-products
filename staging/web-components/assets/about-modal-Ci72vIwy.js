import{u as p,j as t,M as c,C as n,A as d}from"./blocks-B8zssuRs.js";import{A as h,D as r,a as i}from"./about-modal.stories-DktatWl7.js";import{s}from"./codePreviewer-Dw8PVpgV.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-yrSTpSEu.js";import"./about-modal-BuCH0CkS.js";import"./state-sbTwPZUI.js";import"./class-map-Cs7v0TfJ.js";import"./host-listener-DN1-XIwx.js";import"./modal-label-DhTTlXth.js";import"./inline-loading-CkwH6Usv.js";import"./icon-loader-CWnvgjW_.js";import"./16-DSuDh1sQ.js";import"./icon-button-CYixsxiJ.js";import"./button-P0txWoPc.js";import"./definition-tooltip-CNvJyaqH.js";import"./deep-shadow-contains-CGX9SE_1.js";import"./popover-content-CKMYAYpM.js";import"./button-skeleton-BiCmXIrB.js";import"./20-CvqWH37X.js";import"./link-ESd6y4N0.js";import"./collection-helpers-DS5mzmOk.js";import"./16-z4EPQvwm.js";import"./skeleton-text-CVUzIqyd.js";import"./dropdown-skeleton-pB_P5g0p.js";import"./16-DvgjsF02.js";import"./form-BTpacr1I.js";import"./validity-CzEiVmrf.js";import"./16-C1hWzIbz.js";import"./16-B8NH1ntc.js";import"./16-D0aIqdwb.js";import"./16-C2f9e6nj.js";import"./progress-bar-CN12zrPp.js";import"./skeleton-icon-Bw_cbHbZ.js";import"./16-BDCWmyHk.js";import"./breadcrumb-skeleton-CUyG0gpo.js";import"./overflow-menu-item-BjgvhCmq.js";import"./consume-DI2TaawZ.js";import"./index-C8suiviA.js";import"./16-DYhtUhBA.js";import"./checkbox-DBQlmCEw.js";import"./checkbox-skeleton-DpBBs9sh.js";import"./code-snippet-skeleton-DKJUXxRo.js";import"./16-iEvmxbCa.js";import"./if-non-empty-BO7ig9CD.js";import"./16-D5maUdCH.js";import"./tab-skeleton-B2PdDRQo.js";import"./file-uploader-item-B4xnSjf3.js";import"./loading-DTswshml.js";import"./radio-button-skeleton-DFwzimQ9.js";import"./search-skeleton-DORS7bX-.js";import"./form-item-DpAvrJ5I.js";import"./form-group-BsrO08bq.js";import"./32-Cdnp3Qqq.js";import"./toast-notification-Cs8Xvn1I.js";import"./16-D3CzXAJU.js";import"./16-Ci-Iy0jC.js";import"./text-input-CLztvDqJ.js";import"./16-B9g2nIv4.js";import"./text-input-skeleton-BRA5VFG5.js";import"./layer-CMUgVTDl.js";import"./actionable-notification-button-CDxd8RLr.js";import"./number-input-skeleton-CDLwByLW.js";import"./16-DXyY1wqk.js";import"./textarea-skeleton-Do7EUZu_.js";import"./progress-step-D-ptex61.js";import"./slider-skeleton-BTBJhUFq.js";import"./tag-OOAUJ9Xh.js";import"./tile-group-J_Sx4Svh.js";import"./16-BpKA4nzT.js";import"./toggle-DscM1bcn.js";import"./switcher-divider-UhA_ld4Z.js";import"./stack-At5LUO5r.js";import"./20-BMa-PJk1.js";import"./16-Cb7P2Dje.js";import"./16-CfG0rDIQ.js";import"./16-DdDEGe5r.js";import"./16-803qFA73.js";import"./16-BggJfAoA.js";import"./index-DkSYGz6Z.js";import"./20-q75D_U8N.js";import"./16-B_l_7QwJ.js";import"./16-BJ-s22c-.js";import"./16-C_7DXZKc.js";import"./16-BsOTR82k.js";import"./16-LR5LqMCE.js";import"./16-CPU3a-Kb.js";import"./20-CEm2HUGl.js";import"./16-DSpKrZTh.js";import"./16-aWrrgdCQ.js";import"./16-Dmu1QWqc.js";import"./16-C22St5FV.js";import"./16-DOn1njS0.js";import"./16-C-Ba_D2f.js";import"./16-CFYMBMYp.js";import"./16-gUhxGjnI.js";import"./16-BswKfa1f.js";import"./20-3muJ_g4f.js";const u=`/**
 * @license
 *
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, TemplateResult } from 'lit';
import { prefix } from '../../globals/settings';
import ansibleLogo from './_story-assets/ansible-logo.svg';
import grafanaLogo from './_story-assets/grafana-logo.svg';
import jsLogo from './_story-assets/js-logo.svg';

export const blockClass = prefix + '--about-modal';
export const storyPrefix = 'about-modal-stories__';
export const getTitle = (index) => {
  switch (index) {
    case 0:
      return html\`IBM Product name\`;
    case 1:
      return html\`IBM Product name example that is longer than one line\`;
    case 2:
      return html\`IBM <span style="font-weight: 600">Product name</span>\`;
    default:
      return null;
  }
};

export const getAdditionalInfo = (index) => {
  switch (index) {
    case 1:
      return html\`
        <p class=\${\`\${blockClass}__footer-label\`}>Powered by</p>
        <img
          src=\${grafanaLogo}
          alt="Grafana"
          class=\${\`\${blockClass}__footer--tech-logo\`}
        />
        <img
          src=\${ansibleLogo}
          alt="Ansible"
          class=\${\`\${blockClass}__footer--tech-logo\`}
        />
        <img
          src=\${jsLogo}
          alt="JavaScript"
          class=\${\`\${blockClass}__footer--tech-logo\`}
        />
      \`;
    default:
      return null;
  }
};

export const getContent = (index) => {
  switch (index) {
    case 1:
      return html\`This Web site contains proprietary notices and copyright
      information, the terms of which must be observed and followed.\`;
    case 2:
      return html\`This Web site contains proprietary notices and copyright
      information, the terms of which must be observed and followed. Please see
      the tab entitled 'Copyright and trademark information' for related
      information. IBM grants you a non-exclusive, non-transferable, limited
      permission to access and display the Web pages within this site as a
      customer or potential customer of IBM provided you comply with these Terms
      of Use, and all copyright, trademark, and other proprietary notices remain
      intact.\`;
    case 3:
      return html\`This Web site contains proprietary notices and copyright
      information, the terms of which must be observed and followed. Please see
      the tab entitled 'Copyright and trademark information' for related
      information. IBM grants you a non-exclusive, non-transferable, limited
      permission to access and display the Web pages within this site as a
      customer or potential customer of IBM provided you comply with these Terms
      of Use, and all copyright, trademark, and other proprietary notices remain
      intact. You may only use a crawler to crawl this Web site as permitted by
      this Web site's robots.txt protocol, and IBM may block any crawlers in its
      sole discretion. The use authorized under this agreement is non-commercial
      in nature (e.g., you may not sell the content you access on or through
      this Web site.) All other use of this site is prohibited. Except for the
      limited permission in the preceding paragraph, IBM does not grant you any
      express or implied rights or licenses under any patents, trademarks,
      copyrights, or other proprietary or intellectual property rights. You may
      not mirror any of the content from this site on another Web site or in any
      other media. Any software and other materials that are made available for
      downloading, access, or other use from this site with their own license
      terms will be governed by such terms, conditions, and notices. Your
      failure to comply with such terms or any of the terms on this site will
      result in automatic termination of any rights granted to you, without
      prior notice, and you must immediately destroy all copies of downloaded
      materials in your possession, custody or control. This Web site contains
      proprietary notices and copyright information, the terms of which must be
      observed and followed. Please see the tab entitled “Copyright and
      trademark information” for related information. IBM grants you a
      non-exclusive, non-transferable, limited permission to access and display
      the Web pages within this site as a customer or potential customer of IBM
      provided you comply with these Terms of Use, and all copyright, trademark,
      and other proprietary notices remain intact. You may only use a crawler to
      crawl this Web site as permitted by this Web site’s robots.txt protocol,
      and IBM may block any crawlers in its sole discretion. The use authorized
      under this agreement is non-commercial in nature (e.g., you may not sell
      the content you access on or through this Web site.) All other use of this
      site is prohibited. Except for the limited permission in the preceding
      paragraph, IBM does not grant you any express or implied rights or
      licenses under any patents, trademarks, copyrights, or other proprietary
      or intellectual property rights. You may not mirror any of the content
      from this site on another Web site or in any other media. Any software and
      other materials that are made available for downloading, access, or other
      use from this site with their own license terms will be governed by such
      terms, conditions, and notices. Your failure to comply with such terms or
      any of the terms on this site will result in automatic termination of any
      rights granted to you, without prior notice, and you must immediately
      destroy all copies of downloaded materials in your possession, custody or
      control.\`;
    default:
      return null;
  }
};

export const getLinks = (index) => {
  if (index > 0) {
    const links: TemplateResult[] = [];
    for (let i = 0; i < index; i++) {
      const link = html\`<cds-link href="#"> Link action </cds-link>\`;
      links.push(link);
    }
    return links;
  } else {
    return null;
  }
};
`,a=[u.replace(/import\s+.*?from\s+['"].*?['"];?\s*/g,"").replace(/export\s+/g,"").replace(/\/\*\*[\s\S]*?\*\//g,"").replace(/\bprefix\b/g,"'c4p'").replace(/'c4p'\s*\+\s*'--/g,"'c4p--").trim()],m=[`import '@carbon/web-components/es/components/link/index.js';
import { TemplateResult } from 'lit';
import ExampleLogo from './story-assets/example-logo.svg';
import ansibleLogo from './story-assets/ansible-logo.svg';
import jsLogo from './story-assets/js-logo.svg';
import grafanaLogo from './story-assets/grafana-logo.svg';
`];function l(e){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...p(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(c,{of:h}),`
`,t.jsx(o.h1,{id:"aboutmodal",children:"AboutModal"}),`
`,t.jsxs(o.blockquote,{children:[`
`,t.jsxs(o.p,{children:[`💡 Check our
`,t.jsx(o.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/about-modal",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,t.jsx(o.p,{children:t.jsx(o.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/about-modal",rel:"nofollow",children:t.jsx(o.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,t.jsx(o.p,{children:`The AboutModal component provides a way to communicate product information to
users. It is triggered by a user’s action, appears on top of the main page
content, and is persistent until dismissed. The purpose of this modal should be
immediately apparent to the user, with a clear and obvious path to completion.`}),`
`,t.jsx(o.h2,{id:"getting-started",children:"Getting started"}),`
`,t.jsx(o.p,{children:"Here's a quick example to get you started."}),`
`,t.jsx(o.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-javascript",children:`import '@carbon/ibm-products-web-components/es/components/about-modal/index.js';
`})}),`
`,t.jsx(o.h3,{id:"html",children:"HTML"}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-html",children:`<c4p-about-modal> </c4p-about-modal>
`})}),`
`,t.jsx(o.h3,{id:"example-usage",children:"Example Usage"}),`
`,t.jsx(o.h3,{id:"default",children:"Default"}),`
`,t.jsx(n,{of:r,additionalActions:[{title:"Open in Stackblitz",onClick:()=>s({story:r,customFunctionDefs:a,customImports:m,componentName:"about-modal"})}]}),`
`,t.jsx(o.h3,{id:"about-modal-with-all-props-set",children:"About Modal With All Props Set"}),`
`,t.jsx(n,{of:i,additionalActions:[{title:"Open in Stackblitz",onClick:()=>s({story:i,customFunctionDefs:a,customImports:m,componentName:"about-modal"})}]}),`
`,t.jsxs(o.h2,{id:"c4p-about-modal-attributes-properties-and-events",children:[t.jsx(o.code,{children:"<c4p-about-modal>"})," attributes, properties and events"]}),`
`,t.jsx(d,{of:"c4p-about-modal"})]})}function io(e={}){const{wrapper:o}={...p(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(l,{...e})}):l(e)}export{a as customFunctionArr,m as customImportArr,io as default};
