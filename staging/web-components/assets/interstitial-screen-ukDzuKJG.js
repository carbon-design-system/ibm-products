import{j as e,M as o,A as n}from"./blocks-COh-1RPt.js";import{useMDXComponents as s}from"./index-BTS7Q-1T.js";import{i as c}from"./interstitial-screen.stories-D13QM9JZ.js";import"./iframe-CxDE64CT.js";import"./class-map-CiMK15PJ.js";import"./modal-label-Cd7GfR3Y.js";import"./icon-loader-Cl2A5aZ3.js";import"./button-DQUKOBwW.js";import"./tab-skeleton-C8Ixs3h8.js";import"./collection-helpers-B5OPurRG.js";import"./16-rZwhNvBO.js";import"./definition-tooltip-DcNdxjrw.js";import"./16-DSflTaDq.js";import"./16-0nG14jWc.js";import"./ref-DFrKTaQk.js";import"./button-skeleton-sJa5bMFP.js";import"./inline-loading-BWRHaz4s.js";import"./loading-icon-Xrfd2MV9.js";import"./combo-button-Bb0UfDqN.js";import"./overflow-menu-item-DqJ6mk63.js";import"./icon-button-BK2njcvD.js";import"./16-DYhtUhBA.js";import"./breadcrumb-skeleton-CK-_AtVD.js";import"./link-DV6Hq_AL.js";import"./style-map-B4gdd-kq.js";import"./16-Cp4I51YB.js";import"./shared-enums-WsGAW9C4.js";import"./16-iEvmxbCa.js";import"./16-nJySvwbz.js";import"./dropdown-skeleton-v1eK0gP_.js";import"./form-BTUi-65o.js";import"./text-input-Drlkialu.js";import"./file-uploader-item-wjU1xR_5.js";import"./loading-BLD7uJuH.js";import"./checkbox-S2JztazR.js";import"./radio-button-skeleton--iwCqw1S.js";import"./search-skeleton-i_YWh3x7.js";import"./toast-notification-CxNtei2t.js";import"./form-item-BfFoBaTs.js";import"./text-input-skeleton-D1EhL4sY.js";import"./layer-m8sXr2Tc.js";import"./actionable-notification-button-VxHPjEp8.js";import"./textarea-skeleton-CVapXa9S.js";import"./slider-skeleton-Q_7iUKRS.js";import"./operational-tag-CPOpS5qH.js";import"./toggle-P0F79Vv_.js";import"./heading-BekSOx5Y.js";import"./20-CD9UwiLF.js";function r(i){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c}),`
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
