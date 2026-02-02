import{j as r,M as s,C as n,A as m}from"./blocks-Ca2gZWhY.js";import{useMDXComponents as p}from"./index-CWnaG5n0.js";import{F as a,D as o}from"./full-page-error.stories-DdG-7Yze.js";import{s as l}from"./codePreviewer-rTr7wgJY.js";import"./preload-helper-D9Z9MdNV.js";import"./iframe-CPwma648.js";import"./full-page-error-CdUHMiTD.js";import"./collection-helpers-Cnsts1JG.js";import"./class-map-BjEbJ_wj.js";import"./tab-skeleton-DPUs4kNk.js";import"./state-BZ954teF.js";import"./query-DAIS6qJ0.js";import"./icon-loader-Bb4ppSSv.js";import"./skeleton-text-DMNRcLQ6.js";import"./progress-bar-B1-s3kFq.js";import"./16-DvgjsF02.js";import"./popover-content-O3lmoZ8f.js";import"./button-BE8YYPkS.js";import"./16-DSflTaDq.js";import"./16-0nG14jWc.js";import"./16-YJ-wVYvE.js";import"./button-skeleton-Dtbl2yvK.js";import"./breadcrumb-skeleton-BS5xd6lB.js";import"./link-CRJoQCKP.js";import"./overflow-menu-item-BzweTqnM.js";import"./icon-button-JBsothZb.js";import"./definition-tooltip-BoMZIf0Z.js";import"./16-DYhtUhBA.js";import"./checkbox-CyHkCwxR.js";import"./16-Wf9R93-z.js";import"./consume-uB5p-Xep.js";import"./style-map-C8fFnpHt.js";import"./16-D0aIqdwb.js";import"./validity-CUJaV9kI.js";import"./16-iEvmxbCa.js";import"./16-D5maUdCH.js";import"./dropdown-skeleton-DFhJYyeA.js";import"./16-C2f9e6nj.js";import"./text-input-BX25Iv0z.js";import"./file-uploader-item-Bqi1I8R8.js";import"./loading-C9uAKN96.js";import"./loading-icon-BzQ9gUnH.js";import"./form-group-C7eGaK_m.js";import"./search-skeleton-D-Ptc-Tu.js";import"./form-item-B7v7p6SW.js";import"./32-Bgu4Ew3p.js";import"./16-BGJEph7x.js";import"./16-D3CzXAJU.js";import"./16-Ci-Iy0jC.js";import"./text-input-skeleton-CQeRY_Yn.js";import"./inline-loading-B_2pANgA.js";import"./layer-DhPwLigj.js";import"./modal-label-BPUdpckU.js";import"./actionable-notification-button-CUaXXfz-.js";import"./number-input-skeleton-ChiIGhk3.js";import"./16-DXyY1wqk.js";import"./textarea-skeleton-BHFf5yXR.js";import"./progress-step-qgLo9ZRV.js";import"./slider-skeleton-CVkzaWZT.js";import"./tag-D_6alxd0.js";import"./toggle-CGnUS8gr.js";import"./switcher-divider-CQ9Uq3R7.js";import"./20-D_EsaJV1.js";import"./stack-QS70E3oR.js";import"./20-_I5zorna.js";import"./16-B7SSgyYC.js";import"./16-CU4u-ZW8.js";import"./16-803qFA73.js";import"./16-BpKA4nzT.js";import"./20-CppOV_ea.js";import"./16-DgEWGJjw.js";import"./16-LR5LqMCE.js";import"./16-CPU3a-Kb.js";import"./16-DSpKrZTh.js";import"./16-aWrrgdCQ.js";import"./16-xraWWrlP.js";import"./16-CVWqvXKz.js";import"./16-BswKfa1f.js";function i(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...p(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(s,{of:a}),`
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
