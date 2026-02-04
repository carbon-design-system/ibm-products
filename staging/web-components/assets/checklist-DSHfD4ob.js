import{j as e,M as l,C as o,A as i}from"./blocks-BzEZOrgq.js";import{useMDXComponents as n}from"./index-BYYhK2HH.js";import{C as r,D as a}from"./checklist.stories-D7SioJCN.js";import"./preload-helper-D9Z9MdNV.js";import"./iframe-CRtCEvHj.js";import"./32-GVrj0rvK.js";import"./icon-loader-DNTraskY.js";import"./class-map-BDBYr7ko.js";import"./16-D3CzXAJU.js";import"./16-Ci-Iy0jC.js";import"./icon-button-Dm8UBGd3.js";import"./definition-tooltip-BV9MAPtz.js";import"./popover-content-ugB3_2l0.js";import"./query-DAIS6qJ0.js";import"./state-CtNM5jHe.js";import"./button-BPrzbWFT.js";import"./button-skeleton-Bkfs8A1v.js";import"./link-D5cw_Yv2.js";import"./truncated-text-krLmmoQi.js";import"./style-map-DCFPMVS-.js";function c(s){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:r}),`
`,e.jsx(t.h1,{id:"checklist",children:"Checklist"}),`
`,`
`,e.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"c4p-checklist"})," is a web component designed to display a list of items users should complete in order to learn about and/or onboard to a product This component has a structured layout with features such as progress tracking, task grouping, and expandable sections."]}),`
`,e.jsx(t.h4,{id:"component-dependencies",children:"Component Dependencies"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"c4p-checklist-chart"})," for progress visualization"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"c4p-checklist-group"})," for task categorization"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"c4p-checklist-item"})," for individual tasks"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"c4p-checklist-icon"})," for task status indication"]}),`
`]}),`
`,e.jsx(t.h4,{id:"progress-indicator",children:"Progress Indicator"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"c4p-checklist"})," component integrates a ",e.jsx(t.code,{children:"c4p-checklist-chart"})," component in the header to visually represent the overall progress of the checklist. This helps users understand how far they’ve come and what remains."]}),`
`,e.jsx(t.h4,{id:"checklist-group",children:"Checklist Group"}),`
`,e.jsxs(t.p,{children:["Use the ",e.jsx(t.code,{children:"c4p-checklist-group"})," component to divide a long onboarding journey into manageable blocks. Each group can have its own title and set of tasks."]}),`
`,e.jsx(t.h4,{id:"checklist-item",children:"Checklist Item"}),`
`,e.jsxs(t.p,{children:["Each task is rendered using the ",e.jsx(t.code,{children:"c4p-checklist-item"})," component. It supports:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Task title"}),`
`,e.jsxs(t.li,{children:["Status indication via ",e.jsx(t.code,{children:"c4p-checklist-icon"})," component"]}),`
`]}),`
`,e.jsx(t.h3,{id:"composability",children:"Composability"}),`
`,e.jsxs(t.p,{children:["All major sections (checklist header, body, footer, checklist item content, item status indicator) are implemented as ",e.jsx(t.strong,{children:"slots"}),", allowing developers to inject their own content and styling. When customizing these slots, developers are expected to apply appropriate styles in alignment with Carbon design guidelines."]}),`
`,e.jsx(t.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(t.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(t.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import '@carbon/ibm-products-web-components/es/components/checklist/index.js';
`})}),`
`,e.jsx(t.h3,{id:"usage-example",children:"Usage Example"}),`
`,e.jsx(o,{className:"page-header--docs-demo",of:a}),`
`,e.jsx(t.h3,{id:"html",children:"HTML"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<c4p-checklist
  title=\${title}
  chartLabel=\${chartLabel}
  chartValue=\${chartValue}
  toggleLabel=\${toggleLabel}
  toggleLabelAlign=\${toggleLabelAlign}
  toggleAriaLabel=\${toggleAriaLabel}
  open
  viewAllLabel=\${viewAllLabel}
  @c4p-checklist-view-all=\${action(\`Clicked View All\`)}
  @c4p-checklist-toggle=\${action(\`Clicked Toggle\`)}
  >
  <c4p-checklist-group title=\${groupTitle}>
    <c4p-checklist-item
    label="Task name"
    status="completed"
    ></c4p-checklist-item>
    <c4p-checklist-item
    label="Task name"
    status="in progress"
    @c4p-checklist-item-clicked=\${action(\`Clicked Checklist Item\`)}
    ?clickable=\${true}
    ></c4p-checklist-item>
    <c4p-checklist-item
    label="Task name"
    status="not started"
    @c4p-checklist-item-clicked=\${action(\`Clicked Checklist Item\`)}
    ?clickable=\${true}
    ></c4p-checklist-item>
  </c4p-checklist-group>
</c4p-checklist>
`})}),`
`,e.jsxs(t.h2,{id:"c4p-checklist-attributes-properties-events-and-slots",children:[e.jsx(t.code,{children:"<c4p-checklist>"})," attributes, properties, events and slots."]}),`
`,e.jsx(i,{of:"c4p-checklist"}),`
`,e.jsxs(t.h2,{id:"c4p-checklist-group-attributes-properties-events-and-slots",children:[e.jsx(t.code,{children:"<c4p-checklist-group>"})," attributes, properties, events and slots."]}),`
`,e.jsx(i,{of:"c4p-checklist-group"}),`
`,e.jsxs(t.h2,{id:"c4p-checklist-item-attributes-properties-events-and-slots",children:[e.jsx(t.code,{children:"<c4p-checklist-item>"})," attributes, properties, events and slots."]}),`
`,e.jsx(i,{of:"c4p-checklist-item"}),`
`,e.jsxs(t.h2,{id:"c4p-checklist-chart-attributes-properties-events-and-slots",children:[e.jsx(t.code,{children:"<c4p-checklist-chart>"})," attributes, properties, events and slots."]}),`
`,e.jsx(i,{of:"c4p-checklist-chart"}),`
`,e.jsxs(t.h2,{id:"c4p-checklist-icon-attributes-properties-events-and-slots",children:[e.jsx(t.code,{children:"<c4p-checklist-icon>"})," attributes, properties, events and slots."]}),`
`,e.jsx(i,{of:"c4p-checklist-icon"})]})}function D(s={}){const{wrapper:t}={...n(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(c,{...s})}):c(s)}export{D as default};
