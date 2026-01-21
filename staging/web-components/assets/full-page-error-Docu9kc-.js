import{j as r,M as p,C as n,A as m}from"./blocks-XHmWKNVf.js";import{useMDXComponents as s}from"./index-DWnxPoA9.js";import{F as a,D as o}from"./full-page-error.stories-CZp_DXAZ.js";import{s as l}from"./codePreviewer-C8-W-Pb0.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-B2dGZ3uq.js";import"./full-page-error-Ce-OoWu3.js";import"./collection-helpers-Cnsts1JG.js";import"./class-map-tNNkCSzW.js";import"./tab-skeleton-BvMZLXRr.js";import"./state-Cj-ErXDi.js";import"./query-DAIS6qJ0.js";import"./icon-loader-Cf7p-8D_.js";import"./progress-step-CKopEZv3.js";import"./16-BcmW1dBn.js";import"./16-rZwhNvBO.js";import"./progress-bar-D5HH9etN.js";import"./popover-content-DKTuhRDn.js";import"./button-DVr7o_tG.js";import"./16-DSflTaDq.js";import"./16-0nG14jWc.js";import"./button-skeleton-D8YftpuT.js";import"./breadcrumb-skeleton-C6vf6Tz6.js";import"./link-BL6xWEgM.js";import"./overflow-menu-item-5Z3vevkK.js";import"./icon-button-BjUtidcR.js";import"./definition-tooltip-BVXyj3o2.js";import"./16-DYhtUhBA.js";import"./checkbox-Cwfh_Ag5.js";import"./16-UkQW1UVa.js";import"./consume-BDFsnhk-.js";import"./style-map-BMSdP3Aj.js";import"./16-Cp4I51YB.js";import"./validity-CUJaV9kI.js";import"./16-iEvmxbCa.js";import"./16-nJySvwbz.js";import"./dropdown-skeleton-D7fjYoRT.js";import"./16-Dc1ce3EM.js";import"./text-input-DrYX0fj-.js";import"./file-uploader-item-uqV0Nybo.js";import"./loading-BZFmjxDF.js";import"./loading-icon-BjgRrB1k.js";import"./form-group-DccvA6yh.js";import"./search-skeleton-CPyWQvy4.js";import"./form-item-lotXoAyE.js";import"./32-FWc1SMqm.js";import"./16-PO2M8t47.js";import"./text-input-skeleton-sk_J7Wnv.js";import"./inline-loading-DZLJT3oa.js";import"./layer-CDEssFqr.js";import"./modal-label-C5RrzIaN.js";import"./actionable-notification-button-BIWpFHKg.js";import"./number-input-skeleton-dOfqLXKW.js";import"./16-DG77Odo3.js";import"./textarea-skeleton-DVvia02K.js";import"./slider-skeleton-B486PUN4.js";import"./tag-BvxJwH5p.js";import"./toggle-DLRySbXD.js";import"./switcher-divider-dwM5G3jy.js";import"./20-CD9UwiLF.js";import"./20-b8PuNCrA.js";import"./16-PS-8tLDd.js";import"./16-DYrvuIVq.js";import"./16-CeH4JhOl.js";import"./16-0wsGWJU-.js";import"./16-h0a7ESSC.js";import"./16-DEajC6Gz.js";import"./16-DLXnHeki.js";import"./20-DgNpQY5o.js";import"./16-aWrrgdCQ.js";import"./16-DxVvgUmP.js";import"./16-CVWqvXKz.js";import"./16-D6PKKtR4.js";function i(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...s(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(p,{of:a}),`
`,r.jsx(e.h1,{id:"fullpageerror",children:"FullPageError"}),`
`,r.jsx(e.p,{children:`Display a full-page error when the requested page is unavailable to the user.
This is typically caused by issues with the requested URL or access permissions.
Errors caused by server connectivity issues are not covered in this guideline.`}),`
`,r.jsxs(e.blockquote,{children:[`
`,r.jsxs(e.p,{children:[`💡 Check our
`,r.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/full-page-error",rel:"nofollow",children:"Stackblitz"}),`
example implementation.
`,r.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/full-page-error",rel:"nofollow",children:r.jsx(e.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})]}),`
`]}),`
`,r.jsx(e.h2,{id:"getting-started",children:"Getting started"}),`
`,r.jsx(e.p,{children:"Here's a quick example to get you started."}),`
`,r.jsx(e.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-javascript",children:`import '@carbon/ibm-products-web-components/es/components/full-page-error/index.js';
`})}),`
`,r.jsx(e.h3,{id:"html",children:"HTML"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-html",children:`<c4p-full-page-error
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
`,r.jsx(e.h3,{id:"example-usage",children:"Example Usage"}),`
`,r.jsx(n,{of:o,additionalActions:[{title:"Open in Stackblitz",onClick:()=>l({story:o,componentName:"full-page-error"})}]}),`
`,r.jsxs(e.h2,{id:"c4p-full-page-error-attributes-properties-and-events",children:[r.jsx(e.code,{children:"<c4p-full-page-error>"})," attributes, properties and events"]}),`
`,r.jsx(m,{of:"c4p-full-page-error"})]})}function Fr(t={}){const{wrapper:e}={...s(),...t.components};return e?r.jsx(e,{...t,children:r.jsx(i,{...t})}):i(t)}export{Fr as default};
