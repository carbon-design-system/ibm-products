import{j as e,M as o,A as n}from"./blocks-M3RBijn-.js";import{useMDXComponents as s}from"./index-H35GsqRp.js";import{i as c}from"./interstitial-screen.stories-DKX9wRlz.js";import"./iframe-BH0C7KwN.js";import"./class-map-BigE7AVp.js";import"./modal-label-D2CSauNP.js";import"./icon-loader-BYVN6rkX.js";import"./button-MvXzrdhH.js";import"./tab-skeleton-BV-b0ydr.js";import"./collection-helpers-B5OPurRG.js";import"./16-rZwhNvBO.js";import"./definition-tooltip-D-zmq8-b.js";import"./16-DSflTaDq.js";import"./16-0nG14jWc.js";import"./ref-Dzz1i632.js";import"./button-skeleton-4I48g8sL.js";import"./inline-loading-DfLdq_7N.js";import"./loading-icon-REaAR85d.js";import"./combo-button-BhrkOym7.js";import"./overflow-menu-item-BPFrqOtH.js";import"./icon-button-CYBLI_Rd.js";import"./16-DYhtUhBA.js";import"./breadcrumb-skeleton-BhvVmA2-.js";import"./link-cip5oIhn.js";import"./style-map-xoyVCijD.js";import"./16-Cp4I51YB.js";import"./shared-enums-WsGAW9C4.js";import"./16-iEvmxbCa.js";import"./16-nJySvwbz.js";import"./dropdown-skeleton-DSoi1FHC.js";import"./form-Bgk6h-ad.js";import"./text-input-yct9C4p9.js";import"./file-uploader-item-BJLSq4hH.js";import"./loading-DxODLWIH.js";import"./checkbox-KrGzRTIO.js";import"./radio-button-skeleton-Cf2TER_U.js";import"./search-skeleton-BApdIpF8.js";import"./toast-notification-7F_SNH8H.js";import"./form-item-I2sFPFlU.js";import"./text-input-skeleton-BJXKKd6z.js";import"./layer-BlQNcv42.js";import"./actionable-notification-button-DUaVi7D0.js";import"./textarea-skeleton-CBn1pNFe.js";import"./slider-skeleton-CwSObzIM.js";import"./operational-tag-6QacbE3t.js";import"./toggle-CJuSI_LY.js";import"./heading-D_fFmp7-.js";import"./20-CD9UwiLF.js";function r(i){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c}),`
`,e.jsx(t.h1,{id:"interstitialscreen",children:"InterstitialScreen"}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[`💡 Check our
`,e.jsx(t.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/interstitial-screen",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/interstitial-screen/usage",rel:"nofollow",children:"Usage guidelines"})}),`
`,e.jsxs(t.p,{children:[e.jsx(t.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/interstitial-screen/usage",rel:"nofollow",children:"Interstitial screen"}),`
can be a full page or an overlay, and are shown on the first time a user
accesses a new experience (e.g. upon first login or first time opening a page
where a newly purchased capability is presented).`]}),`
`,e.jsx(t.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(t.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(t.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import '@carbon/ibm-products-web-components/es/components/interstitial-screen/index.js';
`})}),`
`,e.jsx(t.h3,{id:"html",children:"HTML"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`  <c4p-interstitial-screen
        ?full-screen=\${false}
        ?open=\${true}
        @c4p-interstitial-opened=\${(e) => {
          console.log('event initialize', e.detail);
        }}
      >
      
        <c4p-interstitial-screen-header
          header-title="Use case-specific title"
          header-subtitle="Use case-specific sub title"
        ></c4p-interstitial-screen-header>
        <c4p-interstitial-screen-body>
          <c4p-interstitial-screen-body-item
        id="\${eachContent.id}"
        stepTitle="\${eachContent.stepTitle}"
      >
       
        <div
          role="complementary"
          aria-label=\${eachContent.stepTitle}
          class="c4p--interstitial-screen-view"
        >
          <section class="\${blockClass}">
            <h1 class="\${blockClass}--heading">\${eachContent.title}</h1>
            <p class="\${blockClass}--body">\${eachContent.description}</p>
          </section>

         
        </div>
        </c4p-interstitial-screen-body-item>
        </c4p-interstitial-screen-body>
        <c4p-interstitial-screen-footer
          @c4p-on-before-action="\${onAction}"
        ></c4p-interstitial-screen-footer>
      </c4p-interstitial-screen>


`})}),`
`,e.jsxs(t.h2,{id:"c4p-interstitial-screen-attributes-properties-and-events",children:[e.jsx(t.code,{children:"<c4p-interstitial-screen>"})," attributes, properties and events"]}),`
`,e.jsx(n,{of:"c4p-interstitial-screen"}),`
`,e.jsxs(t.h2,{id:"c4p-interstitial-header-attributes-properties-and-events",children:[e.jsx(t.code,{children:"<c4p-interstitial-header>"})," attributes, properties and events"]}),`
`,e.jsx(n,{of:"c4p-interstitial-screen-header"}),`
`,e.jsxs(t.h2,{id:"c4p-interstitial-screen-body-attributes-properties-and-events",children:[e.jsx(t.code,{children:"<c4p-interstitial-screen-body>"})," attributes, properties and events"]}),`
`,e.jsx(n,{of:"c4p-interstitial-screen-body"}),`
`,e.jsxs(t.h2,{id:"c4p-interstitial-screen-body-item-attributes-properties-and-events",children:[e.jsx(t.code,{children:"<c4p-interstitial-screen-body-item>"})," attributes, properties and events"]}),`
`,e.jsx(n,{of:"c4p-interstitial-screen-body-item"}),`
`,e.jsxs(t.h2,{id:"c4p-interstitial-screen-footer-attributes-properties-and-events",children:[e.jsx(t.code,{children:"<c4p-interstitial-screen-footer>"})," attributes, properties and events"]}),`
`,e.jsx(n,{of:"c4p-interstitial-screen-footer"})]})}function ie(i={}){const{wrapper:t}={...s(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(r,{...i})}):r(i)}export{ie as default};
