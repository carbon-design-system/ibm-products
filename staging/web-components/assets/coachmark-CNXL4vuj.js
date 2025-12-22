import{j as n,M as r,A as c}from"./blocks-Da2gICcr.js";import{useMDXComponents as t}from"./index-BKs51YP2.js";import{C as s}from"./coachmark.stories-DCdWnMFq.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-DNBlYLoc.js";import"./class-map-BHC2YdfG.js";import"./index-kGnBBgQD.js";import"./popover-content-CbnsKvWu.js";import"./query-DAIS6qJ0.js";import"./button-CPCOdUr8.js";import"./button-skeleton-DDVkYVk9.js";import"./16-nJySvwbz.js";import"./icon-loader-CzrwLUK8.js";function a(o){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...t(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:s}),`
`,n.jsx(e.h1,{id:"coachmark",children:"Coachmark"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[`💡 Check our
`,n.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/coachmark",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/coachmark/usage",rel:"nofollow",children:"Usage guidelines"})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/coachmark/usage",rel:"nofollow",children:"Coachmark"}),`
are used to call out specific functionality or concepts within the UI that may not be intuitive but are important for the user to gain an understanding of the product’s main value and discover new use cases. They can be used for first-time use, as well as secondary onboarding and to highlight new functionality.`]}),`
`,n.jsx(e.h2,{id:"getting-started",children:"Getting started"}),`
`,n.jsx(e.p,{children:"Here's a quick example to get you started."}),`
`,n.jsx(e.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import '@carbon/ibm-products-web-components/es/components/coachmark/index.js';
import '@carbon/ibm-products-web-components/es/components/coachmark/coachmark-beacon/index.js';
import '@carbon/web-components/es/components/button/index.js';
import Crossroads from '@carbon/icons/es/crossroads/16.js';
`})}),`
`,n.jsx(e.h3,{id:"html",children:"HTML"}),`
`,n.jsx(e.h3,{id:"tooltip",children:"Tooltip"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`  <c4p-coachmark
    align='bottom'
    .open=\${true}
    .highContrast=\${true}
  >
    <c4p-coachmark-beacon
      label="Show information"
      .expanded=\${true}
      @c4p-coachmark-beacon-clicked=\${handleClick}
      slot="trigger"
    >
    </c4p-coachmark-beacon>
    <c4p-coachmark-header
      class="coachmark-header"
      closeIconDescription="close icon"
    ></c4p-coachmark-header>
    <c4p-coachmark-body class="coachmark-body">
      <h2>Hello World</h2>
      <p>this is a description test</p>
      <cds-button size="sm">Done</cds-button>
    </c4p-coachmark-body>
  </c4p-coachmark>
`})}),`
`,n.jsx(e.h3,{id:"floating",children:"Floating"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`  <c4p-coachmark
    align="bottom"
    .open=\${true}
    .highContrast=\${true}
    .floating=\${true}
  >
    <cds-button
      kind="tertiary"
      slot="trigger"
      class="trigger-btn"
      @click=\${handleClick}
    >Show information \${iconLoader(ArrowRight as any, { slot: 'icon' })}
    </cds-button>
    <c4p-coachmark-header
    class="coachmark-header"
    closeIconDescription="close icon"
    ></c4p-coachmark-header>
    <c4p-coachmark-body class="coachmark-body">
      <h2>Hello World</h2>
      <p>this is a description test</p>
      <cds-button size="sm">Done</cds-button>
    </c4p-coachmark-body>
  </c4p-coachmark>
`})}),`
`,n.jsxs(e.h2,{id:"c4p-coachmark-attributes-properties-and-events",children:[n.jsx(e.code,{children:"<c4p-coachmark>"})," attributes, properties and events"]}),`
`,n.jsx(c,{of:"c4p-coachmark"}),`
`,n.jsxs(e.h2,{id:"c4p-coachmark-header-attributes-properties-and-events",children:[n.jsx(e.code,{children:"<c4p-coachmark-header>"})," attributes, properties and events"]}),`
`,n.jsx(c,{of:"c4p-coachmark-header"}),`
`,n.jsxs(e.h2,{id:"c4p-coachmark-body-attributes-properties-and-events",children:[n.jsx(e.code,{children:"<c4p-coachmark-body>"})," attributes, properties and events"]}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"<c4p-coachmark-body>"})," component serves as a container for the coachmark’s main content."]})]})}function y(o={}){const{wrapper:e}={...t(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(a,{...o})}):a(o)}export{y as default};
