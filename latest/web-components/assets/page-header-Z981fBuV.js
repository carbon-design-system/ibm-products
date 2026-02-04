import{j as e,M as h,C as s,A as a,e as l}from"./blocks-BzEZOrgq.js";import{useMDXComponents as i}from"./index-BYYhK2HH.js";import{h as o}from"./iframe-CRtCEvHj.js";import{P as m,D as g,C as b,a as x,T as u}from"./page-header.stories-C3WiDxbP.js";import"./preload-helper-D9Z9MdNV.js";import"./page-header-tabs-DHf_tB75.js";import"./state-CtNM5jHe.js";import"./consume-CkB8bcly.js";import"./class-map-BDBYr7ko.js";import"./definition-tooltip-BV9MAPtz.js";import"./popover-content-ugB3_2l0.js";import"./query-DAIS6qJ0.js";import"./breadcrumb-skeleton-bmHmtDzq.js";import"./link-D5cw_Yv2.js";import"./16-B7SSgyYC.js";import"./20-D_EsaJV1.js";import"./icon-loader-DNTraskY.js";import"./button-BPrzbWFT.js";import"./button-skeleton-Bkfs8A1v.js";import"./tag-DIJdIQe3.js";import"./16-D5maUdCH.js";import"./operational-tag-D2LJj0Bw.js";import"./icon-button-Dm8UBGd3.js";import"./tab-skeleton-Bu2gyRN-.js";import"./collection-helpers-Cnsts1JG.js";import"./switcher-divider-BvEYYiNJ.js";import"./16-D0aIqdwb.js";import"./16-DXyY1wqk.js";import"./modal-label-BL3rRNsf.js";import"./search-skeleton-BqvTrmxO.js";import"./text-input-fIvTTJ0p.js";import"./16-DGMTFMdo.js";import"./validity-CUJaV9kI.js";import"./documentLang-E105Y72C.js";import"./overflowHandler-6nRVSJRW.js";import"./repeat-eowXJxic.js";import"./overflow-menu-item-D6QEcr1n.js";import"./16-DYhtUhBA.js";import"./truncated-text-krLmmoQi.js";import"./style-map-DCFPMVS-.js";/**
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
   `;function d(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:m}),`
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
`,e.jsx(n.a,{href:"https://github.com/carbon-design-system/carbon/edit/main/packages/web-components/src/components/page-header/page-header.mdx",rel:"nofollow",children:"GitHub"}),"."]})]})}function ce(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(d,{...t})}):d(t)}export{ce as default};
