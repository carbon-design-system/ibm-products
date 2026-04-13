import{j as r,M as s,C as n,A as m}from"./blocks-D1hKyns-.js";import{useMDXComponents as p}from"./index-BcxrcvKj.js";import{F as a,D as o}from"./full-page-error.stories-BOpx0CcT.js";import{s as l}from"./codePreviewer-CbiIAOXq.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-CP4dfPbx.js";import"./full-page-error-Cq1r5mGF.js";import"./collection-helpers-Cnsts1JG.js";import"./class-map-B72C5jzg.js";import"./tab-skeleton-Dm3TcppV.js";import"./state-BDxDf_Na.js";import"./query-D0jTsbLw.js";import"./icon-loader-BF3hKQw_.js";import"./skeleton-text-D5xMRdVb.js";import"./progress-bar-WI6ZhULP.js";import"./16-DvgjsF02.js";import"./popover-content--jEsecY-.js";import"./floating-controller-oBvGnMaE.js";import"./button-C6fqHhE6.js";import"./16-DSuDh1sQ.js";import"./16-CbK41bBi.js";import"./button-skeleton-BK04JWyt.js";import"./breadcrumb-skeleton-DnLg-CaB.js";import"./link-CqZmUe2U.js";import"./overflow-menu-item-D0RuusRv.js";import"./icon-button-DlBa4kJP.js";import"./definition-tooltip-ZZgU52JU.js";import"./16-DYhtUhBA.js";import"./checkbox-PrMCUm3x.js";import"./16-uKVnmRcm.js";import"./consume-BkFWX8qD.js";import"./style-map-DGHRjLH-.js";import"./16-D0aIqdwb.js";import"./validity-CUJaV9kI.js";import"./16-iEvmxbCa.js";import"./16-D5maUdCH.js";import"./dropdown-skeleton-q5_YD-hS.js";import"./16-C2f9e6nj.js";import"./text-input-BuICAtxg.js";import"./file-uploader-item-Df3Xyrq_.js";import"./loading-Db31ZUEk.js";import"./inline-loading-DSB9qHSD.js";import"./form-group-Dul_4kTH.js";import"./search-skeleton-tf1q-lDd.js";import"./form-item-CFRSyTez.js";import"./32-CaGvfgC_.js";import"./toast-notification-Q_Yh4fkP.js";import"./16-D3CzXAJU.js";import"./16-Ci-Iy0jC.js";import"./text-input-skeleton-BVEAAGJi.js";import"./layer-D6S8ofp6.js";import"./modal-label-_N8OLFjq.js";import"./20-CvqWH37X.js";import"./actionable-notification-button-Bq8YbfU0.js";import"./number-input-skeleton-BOmibB2r.js";import"./16-DXyY1wqk.js";import"./textarea-skeleton-CO33uYwP.js";import"./progress-step-Dfouydmo.js";import"./slider-skeleton-Cy_7z1qG.js";import"./tag-BzQLCQd-.js";import"./toggle-SXw4EnMw.js";import"./switcher-divider-CH3VRlnw.js";import"./20-D_EsaJV1.js";import"./stack-DJa8n77j.js";import"./20-DI8IzcKZ.js";import"./16-DrZ0hxK3.js";import"./32-gWGFBCOY.js";import"./16-CU4u-ZW8.js";import"./16-803qFA73.js";import"./16-BpKA4nzT.js";import"./20-p-8MYGqG.js";import"./20-CppOV_ea.js";import"./16-B_l_7QwJ.js";import"./16-BJ-s22c-.js";import"./16-LR5LqMCE.js";import"./16-CPU3a-Kb.js";import"./16-DSpKrZTh.js";import"./16-aWrrgdCQ.js";import"./16-xraWWrlP.js";import"./16-CVWqvXKz.js";import"./16-gUhxGjnI.js";import"./16-BswKfa1f.js";function i(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...p(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(s,{of:a}),`
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
`,r.jsx(m,{of:"c4p-full-page-error"})]})}function Nr(e={}){const{wrapper:t}={...p(),...e.components};return t?r.jsx(t,{...e,children:r.jsx(i,{...e})}):i(e)}export{Nr as default};
