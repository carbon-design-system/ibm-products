import{j as r,M as s,C as n,A as m}from"./blocks-DKCR_JXm.js";import{useMDXComponents as p}from"./index-DacHF0DJ.js";import{F as a,D as o}from"./full-page-error.stories-Dwi6Tdqm.js";import{s as l}from"./codePreviewer-CZTSi7x3.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-DCbJu0gS.js";import"./full-page-error-B40yY97U.js";import"./collection-helpers-Cnsts1JG.js";import"./class-map-DdhOA3rD.js";import"./tab-skeleton-CdoQTa-M.js";import"./state-9P2czl_k.js";import"./query-D0jTsbLw.js";import"./icon-loader-CszQ8uN0.js";import"./skeleton-text-kOPRSukX.js";import"./progress-bar-C5kX_l6F.js";import"./16-DvgjsF02.js";import"./popover-content-DPqkAdc6.js";import"./floating-controller-xHgEX7I-.js";import"./button-BTRCBkXO.js";import"./16-DSuDh1sQ.js";import"./16-BSY9xwqG.js";import"./button-skeleton-vSuw4yvD.js";import"./breadcrumb-skeleton-Eh5QMICN.js";import"./link-czYkTX-P.js";import"./overflow-menu-item-BRl1APf2.js";import"./icon-button-Df03qkzC.js";import"./definition-tooltip-0bKXgr8h.js";import"./16-DYhtUhBA.js";import"./checkbox-DkrNHzH2.js";import"./16-Bjq4wp4K.js";import"./consume-80TrDY9I.js";import"./style-map-QRWHH31M.js";import"./16-D0aIqdwb.js";import"./validity-CUJaV9kI.js";import"./16-iEvmxbCa.js";import"./16-D5maUdCH.js";import"./dropdown-skeleton-D0Ah_VNG.js";import"./16-C2f9e6nj.js";import"./text-input-CTYZVdkr.js";import"./file-uploader-item-BenGmRiz.js";import"./loading-Dus2_ifg.js";import"./inline-loading-iWYZiBOX.js";import"./form-group-DaDOkL5u.js";import"./search-skeleton-Dqqb7vZc.js";import"./form-item-C_jIKJpw.js";import"./32-Db5nMlN-.js";import"./16-BD_AiC5G.js";import"./16-D3CzXAJU.js";import"./16-Ci-Iy0jC.js";import"./text-input-skeleton-CC2mIKMO.js";import"./layer-CxrB1Hpx.js";import"./modal-label-CitTEZSj.js";import"./20-CvqWH37X.js";import"./actionable-notification-button-08cy4M95.js";import"./number-input-skeleton-CHGI7mXJ.js";import"./16-DXyY1wqk.js";import"./textarea-skeleton-C1GCdA8k.js";import"./progress-step-Ca1LgyiW.js";import"./slider-skeleton-DIHIFHS6.js";import"./tag-Ds5djwYx.js";import"./toggle-DW_Ppd2A.js";import"./switcher-divider-BElus9RS.js";import"./20-D_EsaJV1.js";import"./stack-wfAc7ltK.js";import"./20-DsEWp9Q5.js";import"./16-B7SSgyYC.js";import"./16-CU4u-ZW8.js";import"./16-803qFA73.js";import"./16-BpKA4nzT.js";import"./20-CppOV_ea.js";import"./16-DgEWGJjw.js";import"./16-LR5LqMCE.js";import"./16-CPU3a-Kb.js";import"./16-DSpKrZTh.js";import"./16-aWrrgdCQ.js";import"./16-xraWWrlP.js";import"./16-CVWqvXKz.js";import"./16-BswKfa1f.js";function i(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...p(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(s,{of:a}),`
`,r.jsx(t.h1,{id:"fullpageerror",children:"FullPageError"}),`
`,r.jsx(t.p,{children:`Display a full-page error when the requested page is unavailable to the user.
This is typically caused by issues with the requested URL or access permissions.
Errors caused by server connectivity issues are not covered in this guideline.`}),`
`,r.jsxs(t.blockquote,{children:[`
`,r.jsxs(t.p,{children:[`💡 Check our
`,r.jsx(t.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/full-page-error",rel:"nofollow",children:"Stackblitz"}),`
example implementation.
`,r.jsx(t.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/full-page-error",rel:"nofollow",children:r.jsx(t.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})]}),`
`]}),`
`,r.jsx(t.h2,{id:"getting-started",children:"Getting started"}),`
`,r.jsx(t.p,{children:"Here's a quick example to get you started."}),`
`,r.jsx(t.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,r.jsx(t.pre,{children:r.jsx(t.code,{className:"language-javascript",children:`import '@carbon/ibm-products-web-components/es/components/full-page-error/index.js';
`})}),`
`,r.jsx(t.h3,{id:"html",children:"HTML"}),`
`,r.jsx(t.pre,{children:r.jsx(t.code,{className:"language-html",children:`<c4p-full-page-error
  label="Error 404"
  class="my-custom-class"
  title="Page not found"
  description="The page you requested has moved or is unavailable, or the specified URL is not valid. Please check the URL or search the site for the requested content."
  kind="404"
>
  <!-- Pass any content you want to display to the user here -->
  <a class="cds--link" href="#">– Forwarding link 1</a>
  <br />
  <a class="cds--link" href="#">– Forwarding link 2</a>
</c4p-full-page-error>
`})}),`
`,r.jsx(t.h3,{id:"example-usage",children:"Example Usage"}),`
`,r.jsx(n,{of:o,additionalActions:[{title:"Open in Stackblitz",onClick:()=>l({story:o,componentName:"full-page-error"})}]}),`
`,r.jsxs(t.h2,{id:"c4p-full-page-error-attributes-properties-and-events",children:[r.jsx(t.code,{children:"<c4p-full-page-error>"})," attributes, properties and events"]}),`
`,r.jsx(m,{of:"c4p-full-page-error"})]})}function Tr(e={}){const{wrapper:t}={...p(),...e.components};return t?r.jsx(t,{...e,children:r.jsx(i,{...e})}):i(e)}export{Tr as default};
