import{j as r,M as s,C as n,A as m}from"./blocks-Dk7EIFdo.js";import{useMDXComponents as p}from"./index-Cv7mAmmJ.js";import{F as a,D as o}from"./full-page-error.stories-ByiB4fIj.js";import{s as l}from"./codePreviewer-VZmLTzH2.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-DCyUdvyd.js";import"./full-page-error-BrBs3R9k.js";import"./collection-helpers-Cnsts1JG.js";import"./class-map-phl3okVG.js";import"./tab-skeleton-fAoNQkQn.js";import"./state-CBGOrMJf.js";import"./query-D0jTsbLw.js";import"./icon-loader-DJwbA0i1.js";import"./skeleton-text-CsPJA1R9.js";import"./progress-bar-CDYXNf9z.js";import"./16-DvgjsF02.js";import"./popover-content-CL9jmiNa.js";import"./floating-controller-xHgEX7I-.js";import"./button-C3qrS0FG.js";import"./16-DSuDh1sQ.js";import"./16-CtvlJoTL.js";import"./button-skeleton-B3cVTbQo.js";import"./breadcrumb-skeleton-BQ5xoA-d.js";import"./link-Dmsy2I9n.js";import"./overflow-menu-item-BeScIwv4.js";import"./icon-button-CxkHNCPd.js";import"./definition-tooltip-DODAVJUY.js";import"./16-DYhtUhBA.js";import"./checkbox-DMsc1laA.js";import"./16-COlWGPCY.js";import"./consume-0PqtCb-J.js";import"./style-map-CAiPd8CD.js";import"./16-D0aIqdwb.js";import"./validity-CUJaV9kI.js";import"./16-iEvmxbCa.js";import"./16-D5maUdCH.js";import"./dropdown-skeleton-BbEDuNT8.js";import"./16-C2f9e6nj.js";import"./text-input-DxiW-aRs.js";import"./file-uploader-item-CO7VXitH.js";import"./loading-gOVN33Bw.js";import"./inline-loading-D_6XjEgf.js";import"./form-group-Dy58wmnA.js";import"./search-skeleton-3JCv3lAU.js";import"./form-item-sJMGKszo.js";import"./32-Lu7A6wmg.js";import"./16-DoG_qfmj.js";import"./16-D3CzXAJU.js";import"./16-Ci-Iy0jC.js";import"./text-input-skeleton-Dqix3M9Q.js";import"./layer-Dby8OZF6.js";import"./modal-label-D1nxGQdu.js";import"./20-CvqWH37X.js";import"./actionable-notification-button-rpUUwBQ1.js";import"./number-input-skeleton-D_vTe2Ca.js";import"./16-DXyY1wqk.js";import"./textarea-skeleton-CFwR9jir.js";import"./progress-step-Ch1-j90B.js";import"./slider-skeleton-Bc38nPx5.js";import"./tag-sqwJOSAd.js";import"./toggle-B_oTdfeQ.js";import"./switcher-divider-D2a2M6DO.js";import"./20-D_EsaJV1.js";import"./stack-krBDYPeD.js";import"./20-BoSto6ak.js";import"./16-B7SSgyYC.js";import"./16-CU4u-ZW8.js";import"./16-803qFA73.js";import"./16-BpKA4nzT.js";import"./20-CppOV_ea.js";import"./16-DgEWGJjw.js";import"./16-LR5LqMCE.js";import"./16-CPU3a-Kb.js";import"./16-aWrrgdCQ.js";import"./16-xraWWrlP.js";import"./16-CVWqvXKz.js";import"./16-BswKfa1f.js";function i(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...p(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(s,{of:a}),`
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
`,r.jsx(m,{of:"c4p-full-page-error"})]})}function Sr(e={}){const{wrapper:t}={...p(),...e.components};return t?r.jsx(t,{...e,children:r.jsx(i,{...e})}):i(e)}export{Sr as default};
