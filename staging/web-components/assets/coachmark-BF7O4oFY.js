import{j as n,M as r,A as c}from"./blocks-CB_68QJj.js";import{useMDXComponents as a}from"./index-qazALEpo.js";import s from"./coachmark.stories-8S5tiONp.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-D_goBqV9.js";import"./coachmark-beacon-BkMraQ8U.js";import"./class-map-Cd1_UiXq.js";import"./index-DjrVbClt.js";import"./popover-content-30i-98cd.js";import"./query-D0jTsbLw.js";import"./floating-controller-xHgEX7I-.js";import"./button-BiU2GWBy.js";import"./button-skeleton-D_cJh9PI.js";import"./16-D5maUdCH.js";import"./16-DgEWGJjw.js";import"./icon-loader-wTLyOJdN.js";function t(e){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...a(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:s}),`
`,n.jsx(o.h1,{id:"coachmark",children:"Coachmark"}),`
`,n.jsxs(o.blockquote,{children:[`
`,n.jsxs(o.p,{children:[`💡 Check our
`,n.jsx(o.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/coachmark",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,n.jsx(o.p,{children:n.jsx(o.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/coachmark/usage",rel:"nofollow",children:"Usage guidelines"})}),`
`,n.jsxs(o.p,{children:[n.jsx(o.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/coachmark/usage",rel:"nofollow",children:"Coachmark"}),`
are used to call out specific functionality or concepts within the UI that may not be intuitive but are important for the user to gain an understanding of the product’s main value and discover new use cases. They can be used for first-time use, as well as secondary onboarding and to highlight new functionality.`]}),`
`,n.jsx(o.h2,{id:"getting-started",children:"Getting started"}),`
`,n.jsx(o.p,{children:"Here's a quick example to get you started."}),`
`,n.jsx(o.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-javascript",children:`import '@carbon/ibm-products-web-components/es/components/coachmark/index.js';
import '@carbon/ibm-products-web-components/es/components/coachmark/coachmark-beacon/index.js';
import '@carbon/web-components/es/components/button/index.js';
import Crossroads from '@carbon/icons/es/crossroads/16.js';
`})}),`
`,n.jsx(o.h3,{id:"html",children:"HTML"}),`
`,n.jsx(o.h3,{id:"tooltip",children:"Tooltip"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-html",children:`  <c4p-coachmark
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
`,n.jsx(o.h3,{id:"floating",children:"Floating"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-html",children:`  <c4p-coachmark
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
`,n.jsxs(o.h2,{id:"c4p-coachmark-attributes-properties-and-events",children:[n.jsx(o.code,{children:"<c4p-coachmark>"})," attributes, properties and events"]}),`
`,n.jsx(c,{of:"c4p-coachmark"}),`
`,n.jsxs(o.h2,{id:"c4p-coachmark-header-attributes-properties-and-events",children:[n.jsx(o.code,{children:"<c4p-coachmark-header>"})," attributes, properties and events"]}),`
`,n.jsx(c,{of:"c4p-coachmark-header"}),`
`,n.jsxs(o.h2,{id:"c4p-coachmark-body-attributes-properties-and-events",children:[n.jsx(o.code,{children:"<c4p-coachmark-body>"})," attributes, properties and events"]}),`
`,n.jsxs(o.p,{children:["The ",n.jsx(o.code,{children:"<c4p-coachmark-body>"})," component serves as a container for the coachmark’s main content."]})]})}function C(e={}){const{wrapper:o}={...a(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(t,{...e})}):t(e)}export{C as default};
