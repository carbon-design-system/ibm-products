import{j as e,M as o,A as n}from"./blocks-DlYeiFf7.js";import{useMDXComponents as s}from"./index-DSkuZQOY.js";import{i as c}from"./interstitial-screen.stories-Dq94Wf-G.js";import"./iframe-BiuzA_8Z.js";import"./class-map-DM8nNC8t.js";import"./modal-label-bd4j0fpn.js";import"./icon-loader-DFvU-TXO.js";import"./button-VujQVKIu.js";import"./tab-skeleton-C1OYV3EH.js";import"./collection-helpers-B5OPurRG.js";import"./16-rZwhNvBO.js";import"./definition-tooltip-D0n07nsO.js";import"./16-DSflTaDq.js";import"./16-0nG14jWc.js";import"./ref-CsEqI-c-.js";import"./button-skeleton-CO9LKr4T.js";import"./inline-loading-3rFGcmB-.js";import"./loading-icon-C9LHvL07.js";import"./combo-button-BQm9d2Qx.js";import"./overflow-menu-item--Kk8TQO2.js";import"./icon-button-CfeYNbMa.js";import"./16-DYhtUhBA.js";import"./breadcrumb-skeleton-sflhU_L_.js";import"./link-M6JhgsSj.js";import"./style-map-DpVJretm.js";import"./16-Cp4I51YB.js";import"./shared-enums-WsGAW9C4.js";import"./16-iEvmxbCa.js";import"./16-nJySvwbz.js";import"./dropdown-skeleton-BdoLBFJ9.js";import"./form-DCDehIA0.js";import"./text-input-bijBc2Xj.js";import"./file-uploader-item-a_HnH17v.js";import"./loading-BG6Zxfo7.js";import"./checkbox-CmIZQ4EX.js";import"./radio-button-skeleton-xV8SAxwD.js";import"./search-skeleton-oHGT-3MG.js";import"./toast-notification-CU7TJtbr.js";import"./form-item-CONOiYmP.js";import"./text-input-skeleton-BvEbvBTt.js";import"./layer-nqDNTMls.js";import"./actionable-notification-button-BL77GeKs.js";import"./textarea-skeleton-C0jtR5bv.js";import"./slider-skeleton-ouj7eIQh.js";import"./operational-tag-BUw65Wfm.js";import"./toggle-3bObg_O_.js";import"./heading-C9c3ryz-.js";import"./20-CD9UwiLF.js";function r(i){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c}),`
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
