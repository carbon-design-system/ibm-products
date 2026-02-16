import{j as r,M as s,C as n,A as m}from"./blocks-CB_68QJj.js";import{useMDXComponents as p}from"./index-qazALEpo.js";import{F as a,D as o}from"./full-page-error.stories-DTbXCcGo.js";import{s as l}from"./codePreviewer-7PKBC-r4.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-D_goBqV9.js";import"./full-page-error-CTokp8Sn.js";import"./collection-helpers-Cnsts1JG.js";import"./class-map-Cd1_UiXq.js";import"./tab-skeleton-BtVXc5C2.js";import"./state-010NHMgK.js";import"./query-D0jTsbLw.js";import"./icon-loader-wTLyOJdN.js";import"./skeleton-text-rf-ax3YU.js";import"./progress-bar-P_HDUPpp.js";import"./16-DvgjsF02.js";import"./popover-content-30i-98cd.js";import"./floating-controller-xHgEX7I-.js";import"./button-BiU2GWBy.js";import"./16-DSuDh1sQ.js";import"./16-CnbXaDZl.js";import"./button-skeleton-D_cJh9PI.js";import"./breadcrumb-skeleton-yerV0XcC.js";import"./link-BbqWY59B.js";import"./overflow-menu-item-Be9xV2ek.js";import"./icon-button-DN4QV_WT.js";import"./definition-tooltip-BMNIiPWq.js";import"./16-DYhtUhBA.js";import"./checkbox-DcuMChAA.js";import"./16-BX5ofAFL.js";import"./consume-BDoLbdht.js";import"./style-map-DCg0na6t.js";import"./16-D0aIqdwb.js";import"./validity-CUJaV9kI.js";import"./16-iEvmxbCa.js";import"./16-D5maUdCH.js";import"./dropdown-skeleton-BLhgndac.js";import"./16-C2f9e6nj.js";import"./text-input-BbphKhDW.js";import"./file-uploader-item-DO9ycR5z.js";import"./loading-4WxMDnKN.js";import"./inline-loading-nCTZazmj.js";import"./form-group-BuMBygD2.js";import"./search-skeleton-ByRgYtVk.js";import"./form-item-BgjS_Wmn.js";import"./32-BKNt4FLX.js";import"./16-DfZW_dVM.js";import"./16-D3CzXAJU.js";import"./16-Ci-Iy0jC.js";import"./text-input-skeleton-ph05RCYN.js";import"./layer-DQ8-ROfZ.js";import"./modal-label-DTtERH8y.js";import"./20-CvqWH37X.js";import"./actionable-notification-button-0xIKl1jk.js";import"./number-input-skeleton-DCj8QTgY.js";import"./16-DXyY1wqk.js";import"./textarea-skeleton-DGI8ZSxV.js";import"./progress-step-CnaQpQ9E.js";import"./slider-skeleton-CBlEa3CS.js";import"./tag-UB_Yzw_8.js";import"./toggle-BxrWlGF_.js";import"./switcher-divider-BxL_BxHJ.js";import"./20-D_EsaJV1.js";import"./stack-CWWPNK1J.js";import"./20-Bx89xmjE.js";import"./16-B7SSgyYC.js";import"./16-CU4u-ZW8.js";import"./16-803qFA73.js";import"./16-BpKA4nzT.js";import"./20-CppOV_ea.js";import"./16-DgEWGJjw.js";import"./16-LR5LqMCE.js";import"./16-CPU3a-Kb.js";import"./16-DSpKrZTh.js";import"./16-aWrrgdCQ.js";import"./16-xraWWrlP.js";import"./16-CVWqvXKz.js";import"./16-BswKfa1f.js";function i(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...p(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(s,{of:a}),`
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
