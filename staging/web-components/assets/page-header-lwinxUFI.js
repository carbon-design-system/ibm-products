import{j as e,M as h,C as s,A as a,c as l}from"./blocks-COh-1RPt.js";import{useMDXComponents as d}from"./index-BTS7Q-1T.js";import{g as o}from"./iframe-CxDE64CT.js";import{P as m,D as g,C as b,a as x,T as u}from"./page-header.stories-BcqblkDe.js";import"./class-map-CiMK15PJ.js";import"./consume-CkB8bcly.js";import"./definition-tooltip-DcNdxjrw.js";import"./combo-button-Bb0UfDqN.js";import"./tab-skeleton-C8Ixs3h8.js";import"./collection-helpers-B5OPurRG.js";import"./16-rZwhNvBO.js";import"./icon-loader-Cl2A5aZ3.js";import"./button-DQUKOBwW.js";import"./16-DSflTaDq.js";import"./16-0nG14jWc.js";import"./overflow-menu-item-DqJ6mk63.js";import"./icon-button-BK2njcvD.js";import"./button-skeleton-sJa5bMFP.js";import"./16-DYhtUhBA.js";import"./breadcrumb-skeleton-CK-_AtVD.js";import"./link-DV6Hq_AL.js";import"./style-map-B4gdd-kq.js";import"./16-Cp4I51YB.js";import"./shared-enums-WsGAW9C4.js";import"./16-iEvmxbCa.js";import"./16-nJySvwbz.js";import"./dropdown-skeleton-v1eK0gP_.js";import"./form-BTUi-65o.js";import"./text-input-Drlkialu.js";import"./file-uploader-item-wjU1xR_5.js";import"./loading-BLD7uJuH.js";import"./loading-icon-Xrfd2MV9.js";import"./checkbox-S2JztazR.js";import"./radio-button-skeleton--iwCqw1S.js";import"./search-skeleton-i_YWh3x7.js";import"./toast-notification-CxNtei2t.js";import"./form-item-BfFoBaTs.js";import"./text-input-skeleton-D1EhL4sY.js";import"./inline-loading-BWRHaz4s.js";import"./layer-m8sXr2Tc.js";import"./modal-label-Cd7GfR3Y.js";import"./actionable-notification-button-VxHPjEp8.js";import"./textarea-skeleton-CVapXa9S.js";import"./slider-skeleton-Q_7iUKRS.js";import"./operational-tag-CPOpS5qH.js";import"./toggle-P0F79Vv_.js";import"./heading-BekSOx5Y.js";import"./20-CD9UwiLF.js";import"./overflowHandler-6nRVSJRW.js";import"./documentLang-E105Y72C.js";import"./repeat-BoGPDxkc.js";import"./truncated-text-SJaLXv4S.js";/**
 * @license
 *
 * Copyright IBM Corp. 2021, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */function r(t,n){let c="";return t.forEach(p=>{c+=`<script type="module" src="https://1.www.s81c.com/common/carbon/web-components/${n}/${p}.min.js"><\/script>
`}),c}const j=({components:t})=>`
### JS (via CDN)

 > NOTE: Only one version of artifacts should be used. Mixing versions will cause rendering issues.

 \`\`\`html
 // SPECIFIC VERSION (available starting v2.0.0)
 ${r(t,`version/v${o.version}`)}
 \`\`\`

 #### Right-to-left (RTL) versions

 \`\`\`html
 // SPECIFIC VERSION (available starting v2.0.0)
 ${r(t,`version/v${o.version}`)}
 \`\`\`
   `;function i(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...d(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:m}),`
`,e.jsx(n.h1,{id:"page-header",children:"Page header"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[`💡 Check our
`,e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/page-header",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/page-header",rel:"nofollow",children:e.jsx(n.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsx(n.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(n.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(n.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import '@carbon/ibm-products-web-components/es/components/page-header/index.js';
// The following are used for slotted fields
import '@carbon/web-components/es/components/tabs/index.js';
import '@carbon/web-components/es/components/icon-button/index.js';
import '@carbon/web-components/es/components/button/index.js';
`})}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"c4p-page-header"}),` is a large family of components, composed of three zones;
the Breadcrumb, Content, and Tabs.`]}),`
`,e.jsx(s,{className:"page-header--docs-demo",of:g}),`
`,e.jsx(n.h2,{id:"breadcrumb",children:"Breadcrumb"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"c4p-page-header-breadcrumb"}),` component is used to render the breadcrumb
navigation area within the Page header. It accepts `,e.jsx(n.code,{children:"cds-breadcrumb"}),` and
`,e.jsx(n.code,{children:"cds-breadcrumb-item"}),` components as children to define the breadcrumb trail.
Additionally, it has `,e.jsx(n.code,{children:"content-actions"})," and",e.jsx(n.code,{children:" page-actions"}),` slots, allowing for
actions, such as `,e.jsx(n.code,{children:"cds-button"})," or ",e.jsx(n.code,{children:"cds-icon-button"}),` — alongside the breadcrumb
content.`]}),`
`,e.jsx(n.h2,{id:"content",children:"Content"}),`
`,e.jsx(s,{className:"page-header--docs-demo",of:b}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"c4p-page-header-content"}),` component defines the primary content area of the
Page header, including the title, subtitle, and any supporting text or
contextual actions. It accepts a `,e.jsx(n.code,{children:"title"}),` attribute to display the main heading
and has an `,e.jsx(n.code,{children:"icon"}),` slot to show an icon adjacent to the title. Child components
such as `,e.jsx(n.code,{children:"c4p-page-header-content-text"}),` can be used to provide additional
descriptive text. To support use cases such as tags, `,e.jsx(n.code,{children:"contextual-actions"}),` slot
can be to render components beside the content. `,e.jsx(n.code,{children:"page-actions"}),` slot allows
integration of action buttons aligned with the content section.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<c4p-page-header>
  <c4p-page-header-breadcrumb>...</c4p-page-header-breadcrumb>
  <c4p-page-header-content title="Title">
    <div slot="contextual-actions">
      <cds-tag type="blue" size="lg">Tag</cds-tag>
    </div>
    <div slot="page-actions">
      <cds-button size="md"
        >Primary action \${Add16({ slot: 'icon' })}</cds-button
      >
    </div>
    <c4p-page-header-content-text subtitle="Subtitle">
      Content text.
    </c4p-page-header-content-text>
  </c4p-page-header-content>
</c4p-page-header>
`})}),`
`,e.jsx(n.h3,{id:"content-with-hero-image",children:"Content With Hero Image"}),`
`,e.jsx(s,{className:"page-header--docs-demo",of:x}),`
`,e.jsxs(n.p,{children:[`When including a hero image within the Page header, the Carbon Grid classes will
need to be utilized. In addition, the `,e.jsx(n.code,{children:"withinGrid"}),` attribute has to be set in
the `,e.jsx(n.code,{children:"c4p-page-header-content"})," and ",e.jsx(n.code,{children:"c4p-page-header-breadcrumb"})," components."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@use '@carbon/grid';

// Emit css-grid styles
@include grid.css-grid();
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<c4p-page-header>
  <div class="cds--css-grid">
    <div class="cds--sm:col-span-4 cds--md:col-span-4 cds--lg:col-span-8 cds--css-grid-column">
      <c4p-page-header-breadcrumb within-grid border=false>...</c4p-page-header-breadcrumb>
      <c4p-page-header-content
        within-grid
        title="Title"
        >
        ...
      </c4p-page-header-content>
      </div>
      <div class="cds--sm:col-span-0 cds--md:col-span-4 cds--lg:col-span-8 cds--css-grid-column">
        <c4p-page-header-hero-image>
          <picture>
            <source
              srcset="..."
              media=\${\`(min-width: \${breakpoints.lg.width})\`}
            ></source>
            <source
              srcset="..."
              media=\${\`(max-width: \${breakpoints.lg.width})\`}
            ></source>
            <img
              src="..."
              alt="a default image"
              style="max-width:100%;height:auto"
            />
          </picture>
        </c4p-page-header-hero-image>
      </div>
    </div>
  </div>
</c4p-page-header>
`})}),`
`,e.jsx(n.h2,{id:"tabs",children:"Tabs"}),`
`,e.jsxs(n.p,{children:["To render the Tabs zone, utilize the ",e.jsx(n.code,{children:"c4p-page-header-tabs"}),` component, passing
in the `,e.jsx(n.code,{children:"cds-tabs"})," and ",e.jsx(n.code,{children:"cds-tab"})," components as within its ",e.jsx(n.code,{children:"tabs"}),` slot. Then set
up the corresponding tab panel elements outside of `,e.jsx(n.code,{children:"c4p-page-header"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<c4p-page-header>
  <c4p-page-header-breadcrumb>...</c4p-page-header-breadcrumb>
  <c4p-page-header-content> ... </c4p-page-header-content>
  <c4p-page-header-tabs>
    <cds-tabs slot="tabs" value="tab-1">
      <cds-tab id="tab-1" target="tab-panel-1" value="tab-1">Tab 1</cds-tab>
      <cds-tab id="tab-2" target="tab-panel-2" value="tab-2">Tab 2</cds-tab>
    </cds-tabs>
  </c4p-page-header-tabs>
</c4p-page-header>
<div id="tab-panel-1" role="tabpanel" aria-labelledby="tab-1" hidden>
  Tab Panel 1
</div>
<div id="tab-panel-2" role="tabpanel" aria-labelledby="tab-2" hidden>
  Tab Panel 2
</div>
`})}),`
`,e.jsx(n.h3,{id:"tabs-with-tags",children:"Tabs With Tags"}),`
`,e.jsx(s,{className:"page-header--docs-demo",of:u}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"c4p-page-header-tabs"})," component has a ",e.jsx(n.code,{children:"tags"})," slot for tag components."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<c4p-page-header>
  <c4p-page-header-breadcrumb>...</c4p-page-header-breadcrumb>
  <c4p-page-header-content> ... </c4p-page-header-content>
  <c4p-page-header-tabs>
    ...
    <div slot="tags">
      <cds-tag type="blue" size="md">Tag</cds-tag>
    </div>
  </c4p-page-header-tabs>
</c4p-page-header>
`})}),`
`,e.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(a,{of:"c4p-page-header"}),`
`,e.jsx(n.h2,{id:"c4p-page-header-breadcrumb",children:e.jsx(n.code,{children:"c4p-page-header-breadcrumb"})}),`
`,e.jsx(a,{of:"c4p-page-header-breadcrumb"}),`
`,e.jsx(n.h2,{id:"c4p-page-header-content",children:e.jsx(n.code,{children:"c4p-page-header-content"})}),`
`,e.jsx(a,{of:"c4p-page-header-content"}),`
`,e.jsx(n.h2,{id:"c4p-page-header-content-text",children:e.jsx(n.code,{children:"c4p-page-header-content-text"})}),`
`,e.jsx(a,{of:"c4p-page-header-content-text"}),`
`,e.jsx(n.h2,{id:"c4p-page-header-tabs",children:e.jsx(n.code,{children:"c4p-page-header-tabs"})}),`
`,e.jsx(a,{of:"c4p-page-header-tabs"}),`
`,e.jsx(l,{children:`${j({components:["page-header"]})}`}),`
`,e.jsx(n.h2,{id:"feedback",children:"Feedback"}),`
`,e.jsxs(n.p,{children:[`Help us improve this component by providing feedback, asking questions on Slack,
or updating this file on
`,e.jsx(n.a,{href:"https://github.com/carbon-design-system/carbon/edit/main/packages/web-components/src/components/page-header/page-header.mdx",rel:"nofollow",children:"GitHub"}),"."]})]})}function ue(t={}){const{wrapper:n}={...d(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{ue as default};
