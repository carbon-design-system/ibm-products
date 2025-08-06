import{j as e,M as o,A as n}from"./blocks-BtrZhanP.js";import{useMDXComponents as s}from"./index-D-vrZS-T.js";import{i as c}from"./interstitial-screen.stories-DaTc9xj-.js";import"./iframe-CBTnhw7N.js";import"./state-Cbt-Dy8_.js";import"./class-map-D3uJeleG.js";import"./modal-label-dMakarmS.js";import"./20-DJXP4POB.js";import"./spread-D-IYg-7S.js";import"./button-BToDYsiH.js";import"./tab-skeleton-2a3puTbB.js";import"./collection-helpers-DQ0QbBzH.js";import"./16-3X0NjQru.js";import"./definition-tooltip-BMZfQ_wf.js";import"./16-AZA-TeRU.js";import"./form-B49nrHIj.js";import"./text-input-Bp_8H1ny.js";import"./16-77nfke1x.js";import"./16-CTsOp7n4.js";import"./ref-CuSalNHN.js";import"./button-skeleton-BV8rXZvI.js";import"./inline-loading-CaSAhhWP.js";import"./loading-icon-Bcv85k-U.js";import"./combo-button-kgmC7IyX.js";import"./breadcrumb-skeleton-Bynuzayz.js";import"./link-BW1Ue7Ek.js";import"./overflow-menu-item-CD0wkGTI.js";import"./icon-button-CY909-9F.js";import"./16-Cx7XcqKb.js";import"./16-C6lwlGTN.js";import"./file-uploader-item-CQUy9kFy.js";import"./loading-Cdt9lzg5.js";import"./checkbox-CJcpB80F.js";import"./radio-button-skeleton-CDsMJtGC.js";import"./search-skeleton-B4bLCN3S.js";import"./toast-notification-BVGBnF0i.js";import"./text-input-skeleton-CdhSg0cH.js";import"./layer-BOYyLOKr.js";import"./textarea-skeleton-CyYdEyIh.js";import"./slider-skeleton-D5XPG1s8.js";import"./operational-tag-D_ourcAV.js";import"./toggle-DCpYFhE7.js";import"./heading-46pK3P_q.js";import"./20-CjSbxK_D.js";function r(i){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c}),`
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
