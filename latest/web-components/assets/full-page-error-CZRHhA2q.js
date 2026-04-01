import{j as r,M as s,C as n,A as m}from"./blocks-D5t_hZ3L.js";import{useMDXComponents as p}from"./index-BlOh1_aL.js";import{F as a,D as o}from"./full-page-error.stories-BQZW8-9T.js";import{s as l}from"./codePreviewer-BEuF7oZI.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-DsPQhQhI.js";import"./full-page-error-CZXUQafk.js";import"./collection-helpers-Cnsts1JG.js";import"./class-map-iRsQjrXr.js";import"./tab-skeleton-C40pyVQk.js";import"./state-CyhmrqtZ.js";import"./query-D0jTsbLw.js";import"./icon-loader-BVqGmcM2.js";import"./skeleton-text-DazORNik.js";import"./progress-bar-DHcFLSpY.js";import"./16-DvgjsF02.js";import"./popover-content-D74Isyv2.js";import"./floating-controller-oBvGnMaE.js";import"./button-CY1NirrJ.js";import"./16-DSuDh1sQ.js";import"./16-cC10JsJn.js";import"./button-skeleton-C3BIQxoa.js";import"./breadcrumb-skeleton-DoFTKGnh.js";import"./link-BQ7pILpE.js";import"./overflow-menu-item-teguY3RG.js";import"./icon-button-CzkCLL3d.js";import"./definition-tooltip-CnJJ46YE.js";import"./16-DYhtUhBA.js";import"./checkbox-By7g7dGf.js";import"./16-D3XztVYO.js";import"./consume-DRmiRSmz.js";import"./style-map-DWDfbZ4B.js";import"./16-D0aIqdwb.js";import"./validity-CUJaV9kI.js";import"./16-iEvmxbCa.js";import"./16-D5maUdCH.js";import"./dropdown-skeleton-DL6-TSAv.js";import"./16-C2f9e6nj.js";import"./text-input-DTbLDOYX.js";import"./file-uploader-item-2glPhi6S.js";import"./loading-CCBDvQyR.js";import"./inline-loading-gKqmQm_i.js";import"./form-group-DalzByAm.js";import"./search-skeleton-DnN8_fQq.js";import"./form-item-BGG0eh8b.js";import"./32-Bv-Sn_FX.js";import"./toast-notification-BJLO-BiU.js";import"./16-D3CzXAJU.js";import"./16-Ci-Iy0jC.js";import"./text-input-skeleton-CrWVskMZ.js";import"./layer-wv--Tvgu.js";import"./modal-label-B6nZka97.js";import"./20-CvqWH37X.js";import"./actionable-notification-button-D7ir0na4.js";import"./number-input-skeleton-Cl1s4VmQ.js";import"./16-DXyY1wqk.js";import"./textarea-skeleton-B-WmucS4.js";import"./progress-step-BNbdaimv.js";import"./slider-skeleton-BlXrIzKh.js";import"./tag-CGSUhAOw.js";import"./toggle-DeZG5Of-.js";import"./switcher-divider-BPawqdxJ.js";import"./20-D_EsaJV1.js";import"./stack-CGaHOW_p.js";import"./20-tDipgawt.js";import"./16-DrZ0hxK3.js";import"./32-gWGFBCOY.js";import"./16-CU4u-ZW8.js";import"./16-803qFA73.js";import"./16-BpKA4nzT.js";import"./20-p-8MYGqG.js";import"./20-CppOV_ea.js";import"./16-DgEWGJjw.js";import"./16-LR5LqMCE.js";import"./16-CPU3a-Kb.js";import"./16-aWrrgdCQ.js";import"./16-xraWWrlP.js";import"./16-CVWqvXKz.js";import"./16-gUhxGjnI.js";import"./16-BswKfa1f.js";function i(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...p(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(s,{of:a}),`
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
`,r.jsx(m,{of:"c4p-full-page-error"})]})}function _r(e={}){const{wrapper:t}={...p(),...e.components};return t?r.jsx(t,{...e,children:r.jsx(i,{...e})}):i(e)}export{_r as default};
