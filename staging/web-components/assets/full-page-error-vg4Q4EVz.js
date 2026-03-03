import{j as r,M as s,C as n,A as m}from"./blocks-BM_RqY4j.js";import{useMDXComponents as p}from"./index-nWwB_ncV.js";import{F as a,D as o}from"./full-page-error.stories-BWgDqUIF.js";import{s as l}from"./codePreviewer-SInp1ua2.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-qgZfZ3Fa.js";import"./full-page-error-KKJdhbo-.js";import"./collection-helpers-Cnsts1JG.js";import"./class-map-cKCt9_PM.js";import"./tab-skeleton-BCYXLqOZ.js";import"./state-DzqCEE-r.js";import"./query-D0jTsbLw.js";import"./icon-loader-CfQrfwoP.js";import"./skeleton-text-Bcyn1qvo.js";import"./progress-bar-B1Ra0pdb.js";import"./16-DvgjsF02.js";import"./popover-content-BPnqwnKl.js";import"./floating-controller-xHgEX7I-.js";import"./button-e3i8PJBw.js";import"./16-DSuDh1sQ.js";import"./16-CyCI-I-w.js";import"./button-skeleton-BKVij690.js";import"./breadcrumb-skeleton-QrrAk3SC.js";import"./link-CKYvSVct.js";import"./overflow-menu-item-CqfZU91i.js";import"./icon-button-BpveDxeH.js";import"./definition-tooltip-C3O1NSp4.js";import"./16-DYhtUhBA.js";import"./checkbox-G-aVusHH.js";import"./16-BQR5nc35.js";import"./consume-DciFRa5W.js";import"./style-map-CT8tfjnK.js";import"./16-D0aIqdwb.js";import"./validity-CUJaV9kI.js";import"./16-iEvmxbCa.js";import"./16-D5maUdCH.js";import"./dropdown-skeleton-CT0_bkFD.js";import"./16-C2f9e6nj.js";import"./text-input-CUHpAHSI.js";import"./file-uploader-item-DJiST4j2.js";import"./loading-CW5tTFaE.js";import"./inline-loading-BExXjabi.js";import"./form-group-74Ey2fTr.js";import"./search-skeleton-BpX4tBFM.js";import"./form-item-_0hyMHY5.js";import"./32-BCVgSU9O.js";import"./16-LKQtd5cM.js";import"./16-D3CzXAJU.js";import"./16-Ci-Iy0jC.js";import"./text-input-skeleton-Gvb0cWie.js";import"./layer-C6EzAUeD.js";import"./modal-label-z0YtcfT6.js";import"./20-CvqWH37X.js";import"./actionable-notification-button-BbSwq3P9.js";import"./number-input-skeleton-BahHt5tT.js";import"./16-DXyY1wqk.js";import"./textarea-skeleton-CvL21W5M.js";import"./progress-step-DBomeE57.js";import"./slider-skeleton-BuaBz4h9.js";import"./tag-D2o5GaCf.js";import"./toggle-B0JdtGQZ.js";import"./switcher-divider-JSG2zQSe.js";import"./20-D_EsaJV1.js";import"./stack-DaPQSs5B.js";import"./20-Dxpf5ws1.js";import"./16-B7SSgyYC.js";import"./16-CU4u-ZW8.js";import"./16-803qFA73.js";import"./16-BpKA4nzT.js";import"./20-CppOV_ea.js";import"./16-DgEWGJjw.js";import"./16-LR5LqMCE.js";import"./16-CPU3a-Kb.js";import"./16-aWrrgdCQ.js";import"./16-xraWWrlP.js";import"./16-CVWqvXKz.js";import"./16-BswKfa1f.js";function i(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...p(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(s,{of:a}),`
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
