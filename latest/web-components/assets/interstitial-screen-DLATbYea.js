import{j as e,M as o,A as n}from"./blocks-CQ_kgSH6.js";import{useMDXComponents as s}from"./index-CuG9piX1.js";import{i as c}from"./interstitial-screen.stories-DD3aE0fD.js";import"./iframe-Bxt0-d8K.js";import"./state-D4yaH75e.js";import"./class-map-Dc2M-kfU.js";import"./modal-label-BkWrpIB3.js";import"./20-BC16LVAU.js";import"./spread-yWqBgWDm.js";import"./button-BluQf5Vo.js";import"./tab-skeleton-B33UQ1yS.js";import"./collection-helpers-DQ0QbBzH.js";import"./16-2Azfrzh5.js";import"./definition-tooltip-D6Iup9YT.js";import"./16-1dRGXov_.js";import"./form-DySLsG0e.js";import"./text-input-DYzBPui5.js";import"./16-DTdcG69A.js";import"./16-CsmPjRv4.js";import"./ref-CKVX1pAh.js";import"./button-skeleton-BUKK43kf.js";import"./inline-loading-BMTg6v4C.js";import"./loading-icon-AmluHB3K.js";import"./combo-button-BkOUfo0s.js";import"./breadcrumb-skeleton-v2jU7yep.js";import"./link-C3I1od3J.js";import"./overflow-menu-item-DWXqgDEC.js";import"./icon-button-KS98ZLwD.js";import"./16-B-FBsta3.js";import"./16-CIt7uY5f.js";import"./file-uploader-item-Bf207vhJ.js";import"./loading-B22GFeJG.js";import"./checkbox-D_JL9LkT.js";import"./radio-button-skeleton-CYId8WFS.js";import"./search-skeleton-BXzVOTPp.js";import"./toast-notification-DkRG4sX8.js";import"./text-input-skeleton-DvW12H14.js";import"./layer-CUiabAN8.js";import"./textarea-skeleton-CFR7Hx-Y.js";import"./slider-skeleton-CX7pwKYt.js";import"./operational-tag-Dc9k_r6Z.js";import"./toggle-BXdV2G7F.js";import"./heading-DqFBWkls.js";import"./20-Bjf5zXil.js";function r(i){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c}),`
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
