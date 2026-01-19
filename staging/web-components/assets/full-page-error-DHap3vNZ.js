import{j as r,M as p,C as n,A as m}from"./blocks-D0RoLEfu.js";import{useMDXComponents as s}from"./index-Cd1CY8hy.js";import{F as a,D as o}from"./full-page-error.stories-BkeU1_4p.js";import{s as l}from"./codePreviewer-C8mfVE16.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-DSdqiJWw.js";import"./full-page-error-Bc88C0UD.js";import"./collection-helpers-Cnsts1JG.js";import"./class-map-Ul68iTr_.js";import"./tab-skeleton-RizOEYhv.js";import"./state-EvD611k3.js";import"./query-DAIS6qJ0.js";import"./icon-loader-CMdg6y5C.js";import"./progress-step-zENqopDR.js";import"./16-BcmW1dBn.js";import"./16-rZwhNvBO.js";import"./progress-bar-CE3YZLf4.js";import"./popover-content-upcN7uZa.js";import"./button-NKOdGHCg.js";import"./16-DSflTaDq.js";import"./16-0nG14jWc.js";import"./button-skeleton-BIethCF0.js";import"./breadcrumb-skeleton-ezb2nNTW.js";import"./link-DKS3H8bi.js";import"./overflow-menu-item-hgfMReOS.js";import"./icon-button-BMqwiuoE.js";import"./definition-tooltip-D9OlpmnR.js";import"./16-DYhtUhBA.js";import"./checkbox-BgZPK3uV.js";import"./16-DR8ZKxTi.js";import"./consume-DPJwAUm8.js";import"./style-map-rMuObA-g.js";import"./16-Cp4I51YB.js";import"./validity-CUJaV9kI.js";import"./16-iEvmxbCa.js";import"./16-nJySvwbz.js";import"./dropdown-skeleton-DWxqXrO8.js";import"./16-Dc1ce3EM.js";import"./text-input-DDgNtQUw.js";import"./file-uploader-item-Bvksn0qA.js";import"./loading-BMZX1Sx6.js";import"./loading-icon-SJhjppFG.js";import"./form-group-CMz-h3gJ.js";import"./search-skeleton-C3TYHJgi.js";import"./form-item-DOXYdbog.js";import"./32-DioILMol.js";import"./16-CyTxh60K.js";import"./text-input-skeleton-D3qXhvgf.js";import"./inline-loading-CG366cej.js";import"./layer-C1Lrkfih.js";import"./modal-label-BaX0ssBB.js";import"./actionable-notification-button-C66IaI9G.js";import"./number-input-skeleton-XdmJoJaD.js";import"./16-DG77Odo3.js";import"./textarea-skeleton-W5oJz5kN.js";import"./slider-skeleton-DZy-GgMP.js";import"./tag-DLaBUumf.js";import"./toggle-CMtFPTbr.js";import"./switcher-divider-q587LYwR.js";import"./20-CD9UwiLF.js";import"./20-IIJw2YCn.js";import"./16-PS-8tLDd.js";import"./16-DYrvuIVq.js";import"./16-CeH4JhOl.js";import"./16-0wsGWJU-.js";import"./16-h0a7ESSC.js";import"./16-DEajC6Gz.js";import"./16-DLXnHeki.js";import"./20-DgNpQY5o.js";import"./16-aWrrgdCQ.js";import"./16-DxVvgUmP.js";import"./16-CVWqvXKz.js";import"./16-D6PKKtR4.js";function i(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...s(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(p,{of:a}),`
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
