import{j as e,M as o,A as n}from"./blocks-CJZ-cEVh.js";import{useMDXComponents as s}from"./index-DoFBDpLl.js";import{i as c}from"./interstitial-screen.stories-JS4xJS8b.js";import"./iframe-BC5PAVyB.js";import"./state-CoTnyFz4.js";import"./class-map-Cl2mdCeV.js";import"./modal-label-CECw6aWl.js";import"./20-nHRI0GxY.js";import"./spread-DLAZ5juq.js";import"./button-CzM4-yuv.js";import"./tab-skeleton-CCSfSVhO.js";import"./collection-helpers-DQ0QbBzH.js";import"./16-DkB74eWI.js";import"./definition-tooltip-JESJwKjL.js";import"./16-C80CIN_X.js";import"./form-Dvp1Tlt8.js";import"./text-input-D3JfGoZx.js";import"./16-BwjQoutC.js";import"./16-LtE1xkgk.js";import"./ref-BwgFqmeO.js";import"./button-skeleton-CLZgxgXq.js";import"./inline-loading-DS-edFAJ.js";import"./loading-icon-Dxt5cH0X.js";import"./combo-button-BmgV5k8W.js";import"./breadcrumb-skeleton-D3MsevJQ.js";import"./link-D6dhQptb.js";import"./overflow-menu-item-Cy_sd3hV.js";import"./icon-button-BQJfDiJN.js";import"./16-DZ_YeTfR.js";import"./16-DMXexXVs.js";import"./file-uploader-item-CewgzQ0K.js";import"./loading-BB7GM8sO.js";import"./checkbox-DzUnjDUT.js";import"./radio-button-skeleton-BtvBnRVV.js";import"./search-skeleton-Bp_oD2_y.js";import"./toast-notification-BvzL3twK.js";import"./text-input-skeleton-eDiTTbOV.js";import"./layer-DnPr2lwG.js";import"./textarea-skeleton-DTXeuDHO.js";import"./slider-skeleton-BMcocJ1G.js";import"./operational-tag-DxyBhvk_.js";import"./toggle-D0voNoAm.js";import"./heading-BuG83Hte.js";import"./20-DKuQahbX.js";function r(i){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c}),`
`,e.jsx(t.h1,{id:"interstitialscreen",children:"InterstitialScreen"}),`
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
`,e.jsx(n,{of:"c4p-interstitial-screen-footer"})]})}function Y(i={}){const{wrapper:t}={...s(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(r,{...i})}):r(i)}export{Y as default};
