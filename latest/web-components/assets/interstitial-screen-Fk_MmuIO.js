import{j as e,M as o,A as i}from"./blocks-DuC4sYuk.js";import{useMDXComponents as r}from"./index-3BUqxoOq.js";import{i as c}from"./interstitial-screen.stories-DOLVKUiV.js";import"./iframe-C_vjMAVs.js";import"./class-map-BGcMmACJ.js";import"./modal-label-DTE-1n87.js";import"./icon-loader-CI4sVXVa.js";import"./button-ChBsKPge.js";import"./manageFocusTrap-Di_Vym-0.js";import"./progress-step-skeleton-DtPk94dT.js";import"./collection-helpers-lnQzUmW5.js";import"./16-rZwhNvBO.js";import"./16-D1TGUut8.js";import"./ref-CR-MXxkr.js";import"./button-skeleton-BpvjuqXG.js";import"./inline-loading-tnxULFER.js";import"./16-0nG14jWc.js";import"./16-DSflTaDq.js";import"./loading-icon-CS5-QdcA.js";import"./toggle-C-p6icvX.js";import"./checkbox-D6Eip60L.js";import"./form-DrS3gZiq.js";import"./operational-tag-pIGPCz2O.js";import"./16-nJySvwbz.js";import"./definition-tooltip-CXuzfgfG.js";import"./16-Dc1ce3EM.js";function s(n){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c}),`
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
`,e.jsx(i,{of:"c4p-interstitial-screen"}),`
`,e.jsxs(t.h2,{id:"c4p-interstitial-header-attributes-properties-and-events",children:[e.jsx(t.code,{children:"<c4p-interstitial-header>"})," attributes, properties and events"]}),`
`,e.jsx(i,{of:"c4p-interstitial-screen-header"}),`
`,e.jsxs(t.h2,{id:"c4p-interstitial-screen-body-attributes-properties-and-events",children:[e.jsx(t.code,{children:"<c4p-interstitial-screen-body>"})," attributes, properties and events"]}),`
`,e.jsx(i,{of:"c4p-interstitial-screen-body"}),`
`,e.jsxs(t.h2,{id:"c4p-interstitial-screen-body-item-attributes-properties-and-events",children:[e.jsx(t.code,{children:"<c4p-interstitial-screen-body-item>"})," attributes, properties and events"]}),`
`,e.jsx(i,{of:"c4p-interstitial-screen-body-item"}),`
`,e.jsxs(t.h2,{id:"c4p-interstitial-screen-footer-attributes-properties-and-events",children:[e.jsx(t.code,{children:"<c4p-interstitial-screen-footer>"})," attributes, properties and events"]}),`
`,e.jsx(i,{of:"c4p-interstitial-screen-footer"})]})}function X(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{X as default};
