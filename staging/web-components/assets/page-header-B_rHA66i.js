import{u as o,j as e,M as h,C as a,A as s,b as p}from"./blocks-QGBcU6m1.js";import{w as i}from"./iframe-BwFky8KF.js";import{P as m,D as g,C as b,a as x,T as u}from"./page-header.stories-BgbiOzh4.js";import"./preload-helper-PPVm8Dsz.js";import"./page-header-tabs-5WsH15zH.js";import"./state-DrckJZ2L.js";import"./consume-D_JZLJeP.js";import"./class-map-uE7ZMOog.js";import"./static-C5N101Rf.js";import"./definition-tooltip-BnYf1CeA.js";import"./host-listener-DN1-XIwx.js";import"./deep-shadow-contains-Cz_peORR.js";import"./popover-content-Cr3k-9hl.js";import"./breadcrumb-skeleton-By24sUqA.js";import"./link-Cie1CkZ5.js";import"./20-q75D_U8N.js";import"./switcher-divider-DAZgVMWb.js";import"./button-CAHXFj4a.js";import"./collection-helpers-DS5mzmOk.js";import"./icon-loader-DuT9yokZ.js";import"./16-D0aIqdwb.js";import"./16-D5maUdCH.js";import"./button-skeleton-a5jOaw_5.js";import"./repeat-DpQDnyuu.js";import"./overflow-menu-item-DoU664uk.js";import"./consume-DI2TaawZ.js";import"./16-C2f9e6nj.js";import"./index-0hmKYAH2.js";import"./icon-button-Bzu27wpE.js";import"./16-DYhtUhBA.js";import"./truncated-text-Dwv2Cr-E.js";import"./style-map-Bwy1Ojfy.js";import"./16-DOn1njS0.js";import"./tag-D5V4iviF.js";import"./operational-tag-7tBkdz9V.js";import"./modal-label-DBOfjcwJ.js";import"./inline-loading-heUki2i7.js";import"./16-DSuDh1sQ.js";import"./20-CvqWH37X.js";import"./search-skeleton-BQVobZ1M.js";import"./form-BTpacr1I.js";import"./if-non-empty-BYa1m-oL.js";import"./index-quXh5Vvz.js";import"./tab-skeleton-k0xKn7TA.js";import"./16-z4EPQvwm.js";import"./tabs-vertical-2mZnpS0B.js";import"./16-DXyY1wqk.js";import"./16-Cb7P2Dje.js";import"./defs-x7PjbPWW.js";function r(t,n){let c="";return t.forEach(l=>{c+=`<script type="module" src="https://1.www.s81c.com/common/carbon/web-components/${n}/${l}.min.js"><\/script>
`}),c}const j=({components:t})=>`
### JS (via CDN)

 > NOTE: Only one version of artifacts should be used. Mixing versions will cause rendering issues.

 \`\`\`html
 // SPECIFIC VERSION (available starting v2.0.0)
 ${r(t,`version/v${i.version}`)}
 \`\`\`

 #### Right-to-left (RTL) versions

 \`\`\`html
 // SPECIFIC VERSION (available starting v2.0.0)
 ${r(t,`version/v${i.version}`)}
 \`\`\`
   `;function d(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:m}),`
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
`,e.jsx(a,{className:"page-header--docs-demo",of:g}),`
`,e.jsx(n.h2,{id:"breadcrumb",children:"Breadcrumb"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"c4p-page-header-breadcrumb"}),` component is used to render the breadcrumb
navigation area within the Page header. It accepts `,e.jsx(n.code,{children:"cds-breadcrumb"}),` and
`,e.jsx(n.code,{children:"cds-breadcrumb-item"}),` components as children to define the breadcrumb trail.
Additionally, it has `,e.jsx(n.code,{children:"content-actions"})," and",e.jsx(n.code,{children:" page-actions"}),` slots, allowing for
actions, such as `,e.jsx(n.code,{children:"cds-button"})," or ",e.jsx(n.code,{children:"cds-icon-button"}),` — alongside the breadcrumb
content.`]}),`
`,e.jsx(n.h2,{id:"content",children:"Content"}),`
`,e.jsx(a,{className:"page-header--docs-demo",of:b}),`
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
`,e.jsxs(n.h3,{id:"custom-title-content-title-slot",children:["Custom title content (",e.jsx(n.code,{children:"title"})," slot)"]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"title"})," attribute on ",e.jsx(n.code,{children:"c4p-page-header-content"}),` accepts a plain string. When
you need arbitrary content in the title position — for example a status badge
alongside the heading text — use the `,e.jsx(n.code,{children:"title"}),` named slot instead. When the
`,e.jsx(n.code,{children:"title"})," slot is populated, the ",e.jsx(n.code,{children:"title"})," attribute is ignored."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<c4p-page-header-content>
  <span slot="title">
    <strong>My page</strong>
    <cds-tag type="green" size="sm">Live</cds-tag>
  </span>
</c4p-page-header-content>
`})}),`
`,e.jsxs(n.h3,{id:"custom-breadcrumb-title-content-breadcrumb-content-slot",children:["Custom breadcrumb title content (",e.jsx(n.code,{children:"breadcrumb-content"})," slot)"]}),`
`,e.jsxs(n.p,{children:["When the page header uses ",e.jsx(n.code,{children:"c4p-page-header-breadcrumbs-set"}),`, the collapsed
breadcrumb bar shows the page title as a truncated text link. Use the
`,e.jsx(n.code,{children:"breadcrumb-content"}),` slot to replace that truncated text with custom content —
useful when the collapsed title should match a rich `,e.jsx(n.code,{children:"title"}),` slot rather than a
plain string.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<c4p-page-header-breadcrumbs-set title="My page" breadcrumbs-data="...">
  <span slot="breadcrumb-content">
    <strong>My page</strong>
    <cds-tag type="green" size="sm">Live</cds-tag>
  </span>
</c4p-page-header-breadcrumbs-set>
`})}),`
`,e.jsxs(n.h3,{id:"rich-subtitle-content-subtitle-content-slot",children:["Rich subtitle content (",e.jsx(n.code,{children:"subtitle-content"})," slot)"]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"subtitle"})," attribute on ",e.jsx(n.code,{children:"c4p-page-header-content-text"}),` accepts a plain
string. For rich subtitle content — links, badges, or status indicators — use
the `,e.jsx(n.code,{children:"subtitle-content"}),` named slot. When the slot is populated it is rendered
inside the subtitle heading element in place of the `,e.jsx(n.code,{children:"subtitle"})," attribute value."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<c4p-page-header-content-text>
  <span slot="subtitle-content">
    Version 2.4
    <cds-link href="/changelog">View changelog</cds-link>
  </span>
  Body text goes here.
</c4p-page-header-content-text>
`})}),`
`,e.jsx(n.h3,{id:"content-with-hero-image",children:"Content With Hero Image"}),`
`,e.jsx(a,{className:"page-header--docs-demo",of:x}),`
`,e.jsxs(n.p,{children:[`When including a hero image within the Page header, the Carbon Grid classes will
need to be utilized. In addition, the `,e.jsx(n.code,{children:"withinGrid"}),` attribute has to be set in
the `,e.jsx(n.code,{children:"c4p-page-header-content"})," and ",e.jsx(n.code,{children:"c4p-page-header-breadcrumb"})," components."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"c4p-page-header-hero-image"}),` component maintains a consistent aspect ratio
(3×2 on mobile/tablet, 2×1 on desktop) and automatically prevents horizontal
overflow. The image is centered within its container using flexbox, ensuring it
stays within viewport boundaries while maintaining proper aspect ratio.`]}),`
`,e.jsxs(n.p,{children:["You can control how the image fills the container using the ",e.jsx(n.code,{children:"object-fit"})," prop:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cover"}),": Image fills container, may crop edges (default)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"contain"}),": Image fits within container, may show empty space"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"fill"}),": Image stretches to fill container"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"none"}),": Image uses its natural size"]}),`
`]}),`
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
        <c4p-page-header-hero-image object-fit="cover">
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
            />
          </picture>
        </c4p-page-header-hero-image>
      </div>
    </div>
  </div>
</c4p-page-header>
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"}),` The hero image is automatically constrained to prevent horizontal
overflow. The `,e.jsx(n.code,{children:"picture"}),` element uses flexbox with centered alignment to ensure
the image stays within its container boundaries across all viewport sizes.`]}),`
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
`,e.jsx(a,{className:"page-header--docs-demo",of:u}),`
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
`,e.jsx(n.h2,{id:"custom-events",children:"Custom events"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"c4p-page-header"})," dispatches the following custom events when scroll state changes. All events bubble and are composed."]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Event"}),e.jsx(n.th,{children:"Detail"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"c4p-page-header-fully-collapsed"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"{ fullyCollapsed: boolean }"})}),e.jsxs(n.td,{children:["Fired when the page header content scrolls fully out of view (",e.jsx(n.code,{children:"true"}),") or back into view (",e.jsx(n.code,{children:"false"}),"). Equivalent to the React ",e.jsx(n.code,{children:"onContentFullyCollapsed"})," prop."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"c4p-page-header-title-clipped"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"{ titleClipped: boolean }"})}),e.jsxs(n.td,{children:["Fired when the page header title is clipped by the viewport (",e.jsx(n.code,{children:"true"}),") or becomes visible again (",e.jsx(n.code,{children:"false"}),"). Equivalent to the React ",e.jsx(n.code,{children:"onTitleClipped"})," prop."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"c4p-page-header-content-actions-clipped"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"{ contentActionsClipped: boolean }"})}),e.jsxs(n.td,{children:["Fired when the page actions area is clipped by the breadcrumb bar (",e.jsx(n.code,{children:"true"}),") or becomes visible again (",e.jsx(n.code,{children:"false"}),"). Equivalent to the React ",e.jsx(n.code,{children:"onContentActionsClipped"})," prop."]})]})]})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`document
  .querySelector('c4p-page-header')
  .addEventListener('c4p-page-header-fully-collapsed', (event) => {
    console.log('fully collapsed:', event.detail.fullyCollapsed);
  });
`})}),`
`,e.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(s,{of:"c4p-page-header"}),`
`,e.jsx(n.h2,{id:"c4p-page-header-breadcrumb",children:e.jsx(n.code,{children:"c4p-page-header-breadcrumb"})}),`
`,e.jsx(s,{of:"c4p-page-header-breadcrumb"}),`
`,e.jsx(n.h2,{id:"c4p-page-header-content",children:e.jsx(n.code,{children:"c4p-page-header-content"})}),`
`,e.jsx(s,{of:"c4p-page-header-content"}),`
`,e.jsx(n.h2,{id:"c4p-page-header-content-text",children:e.jsx(n.code,{children:"c4p-page-header-content-text"})}),`
`,e.jsx(s,{of:"c4p-page-header-content-text"}),`
`,e.jsx(n.h2,{id:"c4p-page-header-tabs",children:e.jsx(n.code,{children:"c4p-page-header-tabs"})}),`
`,e.jsx(s,{of:"c4p-page-header-tabs"}),`
`,e.jsx(n.h2,{id:"c4p-page-header-hero-image",children:e.jsx(n.code,{children:"c4p-page-header-hero-image"})}),`
`,e.jsx(s,{of:"c4p-page-header-hero-image"}),`
`,e.jsx(p,{children:`${j({components:["page-header"]})}`}),`
`,e.jsx(n.h2,{id:"feedback",children:"Feedback"}),`
`,e.jsxs(n.p,{children:[`Help us improve this component by providing feedback, asking questions on Slack,
or updating this file on
`,e.jsx(n.a,{href:"https://github.com/carbon-design-system/carbon/edit/main/packages/web-components/src/components/page-header/page-header.mdx",rel:"nofollow",children:"GitHub"}),"."]})]})}function ge(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(d,{...t})}):d(t)}export{ge as default};
