import{j as r,M as s,C as n,A as m}from"./blocks-BzEZOrgq.js";import{useMDXComponents as p}from"./index-BYYhK2HH.js";import{F as a,D as o}from"./full-page-error.stories-BJhh-882.js";import{s as l}from"./codePreviewer-DXHcsLfZ.js";import"./preload-helper-D9Z9MdNV.js";import"./iframe-CRtCEvHj.js";import"./full-page-error-DgH-7_C6.js";import"./collection-helpers-Cnsts1JG.js";import"./class-map-BDBYr7ko.js";import"./tab-skeleton-Bu2gyRN-.js";import"./state-CtNM5jHe.js";import"./query-DAIS6qJ0.js";import"./icon-loader-DNTraskY.js";import"./skeleton-text-MiCu1893.js";import"./progress-bar-BAVdNPrI.js";import"./16-DvgjsF02.js";import"./popover-content-ugB3_2l0.js";import"./button-BPrzbWFT.js";import"./16-DSflTaDq.js";import"./16-0nG14jWc.js";import"./16-Y4eBee2g.js";import"./button-skeleton-Bkfs8A1v.js";import"./breadcrumb-skeleton-bmHmtDzq.js";import"./link-D5cw_Yv2.js";import"./overflow-menu-item-D6QEcr1n.js";import"./icon-button-Dm8UBGd3.js";import"./definition-tooltip-BV9MAPtz.js";import"./16-DYhtUhBA.js";import"./checkbox-DrfFirBS.js";import"./16-DGMTFMdo.js";import"./consume-bfNkmtUz.js";import"./style-map-DCFPMVS-.js";import"./16-D0aIqdwb.js";import"./validity-CUJaV9kI.js";import"./16-iEvmxbCa.js";import"./16-D5maUdCH.js";import"./dropdown-skeleton-DhijaTA-.js";import"./16-C2f9e6nj.js";import"./text-input-fIvTTJ0p.js";import"./file-uploader-item-CAKKkhWL.js";import"./loading-CMI8n8Xs.js";import"./loading-icon-C0xK6mM8.js";import"./form-group-B_OFNGJ5.js";import"./search-skeleton-BqvTrmxO.js";import"./form-item-D9gwSUDH.js";import"./32-GVrj0rvK.js";import"./16-Klj0Ejm-.js";import"./16-D3CzXAJU.js";import"./16-Ci-Iy0jC.js";import"./text-input-skeleton-qlfwOlhX.js";import"./inline-loading-Cf9lDATN.js";import"./layer-Dbf7rtDX.js";import"./modal-label-BL3rRNsf.js";import"./actionable-notification-button-DInYUA9Q.js";import"./number-input-skeleton-DTrk0VLY.js";import"./16-DXyY1wqk.js";import"./textarea-skeleton-fsFLHvzS.js";import"./progress-step-C0NLz6wE.js";import"./slider-skeleton-Dr969RDd.js";import"./tag-DIJdIQe3.js";import"./toggle-C5spHnBX.js";import"./switcher-divider-BvEYYiNJ.js";import"./20-D_EsaJV1.js";import"./stack-yNDPbvyp.js";import"./20-SLlrovRb.js";import"./16-B7SSgyYC.js";import"./16-CU4u-ZW8.js";import"./16-803qFA73.js";import"./16-BpKA4nzT.js";import"./20-CppOV_ea.js";import"./16-DgEWGJjw.js";import"./16-LR5LqMCE.js";import"./16-CPU3a-Kb.js";import"./16-DSpKrZTh.js";import"./16-aWrrgdCQ.js";import"./16-xraWWrlP.js";import"./16-CVWqvXKz.js";import"./16-BswKfa1f.js";function i(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...p(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(s,{of:a}),`
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
