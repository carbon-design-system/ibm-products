import{j as e,M as o,A as n}from"./blocks-BcYjkRBo.js";import{useMDXComponents as s}from"./index-C4PaRzgg.js";import{i as c}from"./interstitial-screen.stories-CRNJWSzd.js";import"./iframe-CflQw5FD.js";import"./class-map-rvYMCB_X.js";import"./modal-label-2bZQyfEj.js";import"./20-Evcg2dJ9.js";import"./spread-CgNMLHME.js";import"./button-DU1j5wRX.js";import"./tab-skeleton-DBA-7_zj.js";import"./collection-helpers-B5OPurRG.js";import"./16-CpQf2IkZ.js";import"./definition-tooltip-BtE9e--Z.js";import"./16-Cmdh_AoA.js";import"./16-Bg2MNGx1.js";import"./ref-BM3pWntv.js";import"./button-skeleton-GcR35FwI.js";import"./inline-loading-B3TmDjEl.js";import"./loading-icon-CUbP2l8o.js";import"./combo-button-qe3m1UmW.js";import"./breadcrumb-skeleton-BxPObKhU.js";import"./link-DUfYbXzM.js";import"./overflow-menu-item-C5vU9p5Z.js";import"./icon-button-pOo_sz4f.js";import"./style-map-BeE14Ffg.js";import"./16-DqTWvGxl.js";import"./shared-enums-WsGAW9C4.js";import"./16-CDn50pbp.js";import"./16-C9crr8t3.js";import"./dropdown-skeleton-BbtypCHZ.js";import"./form-Gi-AYYwm.js";import"./text-input-D1U9qo3W.js";import"./file-uploader-item-DuCy5hye.js";import"./loading-CseeagAf.js";import"./checkbox-2nlSrzED.js";import"./radio-button-skeleton-Bg5eZaUi.js";import"./search-skeleton-D7lFGYlc.js";import"./toast-notification-DTC1L70K.js";import"./text-input-skeleton-Bhz7HmSD.js";import"./layer-BENV-zUz.js";import"./textarea-skeleton-BTOte-ZG.js";import"./slider-skeleton-_cICiPcC.js";import"./operational-tag-yx1Sl1PQ.js";import"./toggle-LOR56Tda.js";import"./heading-BESuNynq.js";import"./20-VerJiA3k.js";function r(i){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c}),`
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
