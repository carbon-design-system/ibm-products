import{j as t,M as c,C as n,A as d}from"./blocks-CHJjRkec.js";import{useMDXComponents as p}from"./index-wz-uvy-O.js";import{A as h,D as r,a as i}from"./about-modal.stories-DuiDQOiO.js";import{s}from"./codePreviewer-CdTHx_N8.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-BSerOd4r.js";import"./about-modal-DZam_X9h.js";import"./state-C8U7RqRN.js";import"./query-D0jTsbLw.js";import"./class-map-C13EjW-N.js";import"./modal-label-BndOtWYH.js";import"./inline-loading-CAdbPM5o.js";import"./16-DSuDh1sQ.js";import"./icon-loader-DvuWCAmY.js";import"./20-CvqWH37X.js";import"./icon-button-a_b8kjUt.js";import"./definition-tooltip-DHqw2Vew.js";import"./popover-content-ed0Pyil1.js";import"./floating-controller-oBvGnMaE.js";import"./button-BCfvtfcs.js";import"./button-skeleton-Cr5pY24u.js";import"./link-DWIQQKKv.js";import"./collection-helpers-Cnsts1JG.js";import"./tab-skeleton-DhdflDKM.js";import"./skeleton-text-DjaZu3dS.js";import"./progress-bar-w6OittgM.js";import"./16-DvgjsF02.js";import"./16-DZd5Gz43.js";import"./breadcrumb-skeleton-DNgKuqnL.js";import"./overflow-menu-item-ebqYRLSt.js";import"./16-DYhtUhBA.js";import"./checkbox-D-jTFO6M.js";import"./16-DklnDM7b.js";import"./consume-BbUldnZo.js";import"./style-map-B29j8P-8.js";import"./16-D0aIqdwb.js";import"./validity-CUJaV9kI.js";import"./16-iEvmxbCa.js";import"./16-D5maUdCH.js";import"./dropdown-skeleton-DooTMm3W.js";import"./16-C2f9e6nj.js";import"./text-input-BQdjbvD3.js";import"./file-uploader-item-DwPcgZSm.js";import"./loading-BQVM2bLd.js";import"./form-group-CPkvvBay.js";import"./search-skeleton-DZZa3pOF.js";import"./form-item-CAV3Kjxn.js";import"./32-DMiw3ToL.js";import"./toast-notification-B5D-byUk.js";import"./16-D3CzXAJU.js";import"./16-Ci-Iy0jC.js";import"./text-input-skeleton-CYmxDUj3.js";import"./layer-BmQxbjS3.js";import"./actionable-notification-button-Dy1BeoXx.js";import"./number-input-skeleton-BU0Gmrgg.js";import"./16-DXyY1wqk.js";import"./textarea-skeleton-XGM5dkqm.js";import"./progress-step-CHp_nlSL.js";import"./slider-skeleton-CGgfAUsj.js";import"./tag-BGjuzXTT.js";import"./toggle-BlVMhpO2.js";import"./switcher-divider-Chcvh9ZR.js";import"./20-D_EsaJV1.js";import"./stack-DnhZfaiC.js";import"./20-DIUILptf.js";import"./16-DrZ0hxK3.js";import"./32-gWGFBCOY.js";import"./16-CU4u-ZW8.js";import"./16-803qFA73.js";import"./16-BpKA4nzT.js";import"./20-p-8MYGqG.js";import"./20-CppOV_ea.js";import"./16-B_l_7QwJ.js";import"./16-BJ-s22c-.js";import"./16-LR5LqMCE.js";import"./16-CPU3a-Kb.js";import"./16-DSpKrZTh.js";import"./16-aWrrgdCQ.js";import"./16-xraWWrlP.js";import"./16-CVWqvXKz.js";import"./16-gUhxGjnI.js";import"./16-BswKfa1f.js";const u=`/**
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

export const blockClass = \`\${prefix}--about-modal\`;
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
`,a=[u.replace(/import\s+.*?from\s+['"].*?['"];?\s*/g,"").replace(/export\s+/g,"").replace(/\/\*\*[\s\S]*?\*\//g,"").trim()],m=[`import '@carbon/web-components/es/components/link/index.js';
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
`,t.jsx(d,{of:"c4p-about-modal"})]})}function Rt(e={}){const{wrapper:o}={...p(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(l,{...e})}):l(e)}export{a as customFunctionArr,m as customImportArr,Rt as default};
