import{j as e,M as o,A as n}from"./blocks-CYDNFLHP.js";import{useMDXComponents as s}from"./index-CenRCwqY.js";import c from"./interstitial-screen.stories-BMuglG4S.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-CuUhoocR.js";import"./state-OdRpx7h7.js";import"./query-D0jTsbLw.js";import"./modal-label-C4tVJiyp.js";import"./host-listener-DN1-XIwx.js";import"./inline-loading-D9cWEVlQ.js";import"./icon-loader-D3hNzi-X.js";import"./class-map-CgwZVf9F.js";import"./16-DSuDh1sQ.js";import"./icon-button-C5dclO95.js";import"./button-C5okWIzV.js";import"./definition-tooltip-yWH_93f1.js";import"./popover-content-DwFRDX3G.js";import"./floating-controller-O5_OP1Uj.js";import"./button-skeleton-BVd90Jni.js";import"./20-CvqWH37X.js";import"./index-C2Y4xxhb.js";import"./manageFocusTrap-skPvt5D5.js";import"./progress-step-Z3GAVIzN.js";import"./collection-helpers-Cnsts1JG.js";import"./skeleton-text-DjTAGisz.js";import"./16-Ci-Iy0jC.js";import"./16-D3CzXAJU.js";import"./chunk-DMEZ3h3f-KEkrn0Yu.js";import"./ref-CwK00rp-.js";import"./16-BpKA4nzT.js";import"./action-set-BaPvtp9E.js";import"./toggle-0qVPHS3Z.js";import"./checkbox-CIW1K0mG.js";import"./16-BKf1RCCE.js";import"./toggle-skeleton-BP0Dj6L_.js";import"./tag-Bmj40Wma.js";import"./16-D5maUdCH.js";import"./operational-tag-CUzZfzfp.js";import"./16-C2f9e6nj.js";function r(i){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c}),`
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
`,e.jsx(n,{of:"c4p-interstitial-screen-footer"})]})}function O(i={}){const{wrapper:t}={...s(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(r,{...i})}):r(i)}export{O as default};
