import{j as e,M as o,A as n}from"./blocks-DTHtialm.js";import{useMDXComponents as s}from"./index-GOvmkhEc.js";import{i as c}from"./interstitial-screen.stories-Dm2ok6TO.js";import"./iframe-C3ZZwOwN.js";import"./class-map-BaN9tuix.js";import"./modal-label-Dsofb66N.js";import"./icon-loader-_PG4cwoy.js";import"./button-CoNkMZUk.js";import"./tab-skeleton-BrnT5bvp.js";import"./collection-helpers-B5OPurRG.js";import"./16-rZwhNvBO.js";import"./definition-tooltip-BpzRk-2L.js";import"./16-DSflTaDq.js";import"./16-0nG14jWc.js";import"./ref-CmQtcHzE.js";import"./button-skeleton-CbmQb5iw.js";import"./inline-loading-BTEwoblP.js";import"./loading-icon-Cs4Rc1__.js";import"./combo-button-CYVHgNO8.js";import"./overflow-menu-item-CfStO_ZM.js";import"./icon-button-BaaY3_Av.js";import"./16-DYhtUhBA.js";import"./breadcrumb-skeleton-DW7165iO.js";import"./link-BTv43Ia0.js";import"./style-map-V27t5LlC.js";import"./16-Cp4I51YB.js";import"./shared-enums-WsGAW9C4.js";import"./16-iEvmxbCa.js";import"./16-nJySvwbz.js";import"./dropdown-skeleton-dE31Ri57.js";import"./form-B7pLoR-k.js";import"./text-input-BhxVXNUL.js";import"./file-uploader-item-DplITlcj.js";import"./loading-BnIYZX6f.js";import"./checkbox-D_GWi7Xj.js";import"./radio-button-skeleton-BxVVICp-.js";import"./search-skeleton-yHPLIyYg.js";import"./toast-notification-BAP1gj9l.js";import"./form-item-lT45uYN3.js";import"./text-input-skeleton-DlDUpOXP.js";import"./layer-Cv5o8dan.js";import"./actionable-notification-button-IEi5DAVu.js";import"./textarea-skeleton-KODGvZiJ.js";import"./slider-skeleton-DYYdhi_Y.js";import"./operational-tag-MpCWxOo-.js";import"./toggle-DH1v35sd.js";import"./heading-DxGLwUaM.js";import"./20-CD9UwiLF.js";function r(i){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c}),`
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
