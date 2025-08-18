import{j as e,M as o,A as n}from"./blocks-UGq23DFQ.js";import{useMDXComponents as s}from"./index-CpLmZVRJ.js";import{i as c}from"./interstitial-screen.stories-Ckp1qhuh.js";import"./iframe-JDcqu3bl.js";import"./class-map-ClODDnf9.js";import"./modal-label-DSELNQCe.js";import"./20-BBmagaS8.js";import"./spread-DT2i-7IB.js";import"./button-Ct4N9ls6.js";import"./tab-skeleton-D5zshv0t.js";import"./collection-helpers-B5OPurRG.js";import"./16-BBmCMGoc.js";import"./definition-tooltip-CG8FK9D6.js";import"./16-BKH_SaWf.js";import"./16-D_29E8-W.js";import"./ref-DHiIiFux.js";import"./button-skeleton-DUOBVDNj.js";import"./inline-loading-4Ch4yjNg.js";import"./loading-icon-5JrFKCfL.js";import"./combo-button-Dji2kAtX.js";import"./breadcrumb-skeleton-Bwqsow1n.js";import"./link-RPoPPxMx.js";import"./overflow-menu-item-CrAIXo4b.js";import"./icon-button-BIu9dWip.js";import"./style-map-D1k11C6Z.js";import"./16-DMg-uC0e.js";import"./shared-enums-WsGAW9C4.js";import"./16-Dv9uc_nW.js";import"./16-DNauqHZC.js";import"./dropdown-skeleton-Ox4G9d-O.js";import"./form-CjaGj7XY.js";import"./text-input-CVzNhx7n.js";import"./file-uploader-item-DuORfuXu.js";import"./loading-CxL2keaQ.js";import"./checkbox-CKCFTXUu.js";import"./radio-button-skeleton-CnFogv-r.js";import"./search-skeleton-D0KTBtrP.js";import"./toast-notification-CSdzOlQg.js";import"./text-input-skeleton-fliixTZQ.js";import"./layer-BwYNXY9X.js";import"./textarea-skeleton-O_ECXt9Q.js";import"./slider-skeleton-Cv4oRLUB.js";import"./operational-tag-B3rqwdWs.js";import"./toggle-FltYksx3.js";import"./heading-CM1sER6a.js";import"./20-nEwxOw7t.js";function r(i){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c}),`
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
`,e.jsx(n,{of:"c4p-interstitial-screen-footer"})]})}function ee(i={}){const{wrapper:t}={...s(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(r,{...i})}):r(i)}export{ee as default};
