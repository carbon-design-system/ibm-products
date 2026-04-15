import{j as n,M as a,C as i}from"./blocks-CHJjRkec.js";import{useMDXComponents as s}from"./index-wz-uvy-O.js";import{C as c,D as r}from"./coachmark-overlay-elements.stories-xxkoBd4z.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-BSerOd4r.js";import"./state-C8U7RqRN.js";import"./popover-content-ed0Pyil1.js";import"./class-map-C13EjW-N.js";import"./query-D0jTsbLw.js";import"./floating-controller-oBvGnMaE.js";import"./button-BCfvtfcs.js";import"./carousel-XvC6Z29M.js";import"./documentLang-E105Y72C.js";import"./coachmark-header-CQfec-XJ.js";import"./decorate-tPtMJD2o.js";import"./index-CWoKuKvP.js";import"./16-D5maUdCH.js";import"./icon-loader-DvuWCAmY.js";import"./button-skeleton-Cr5pY24u.js";import"./16-BJ-s22c-.js";function o(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:c}),`
`,n.jsx(e.h1,{id:"coachmarkoverlayelements",children:"CoachmarkOverlayElements"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/patterns/coachmark-overlay-elements/usage/",rel:"nofollow",children:"CoachmarkOverlayElements usage guidelines"})}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsx(e.p,{children:"The CoachmarkOverlayElements pattern acts as a container element for onboarding and should only be used within the scope of a Coachmark."}),`
`,n.jsx(e.h2,{id:"coded-examples",children:"Coded examples"}),`
`,n.jsx(e.p,{children:`Patterns have multiple ways of accomplishing a user need and typically use a
combination of components with additional design considerations. The pattern
code we share is meant to serve as an example implementation that can be built
and extended further.`}),`
`,n.jsx(e.h3,{id:"ingredients",children:"Ingredients"}),`
`,n.jsx(e.p,{children:"To build this pattern, we recommend including the following components:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://ibm-products-web-components.carbondesignsystem.com/?path=/docs/components-coachmark",rel:"nofollow",children:"Coachmark"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-button",rel:"nofollow",children:"cds-button"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/carbon-design-system/carbon/blob/main/packages/utilities/src/carousel/README.md",rel:"nofollow",children:"Carousel utility"})}),`
`]}),`
`,n.jsx(e.h3,{id:"implementation-notes",children:"Implementation Notes"}),`
`,n.jsx(e.h4,{id:"carousel-integration",children:"Carousel Integration"}),`
`,n.jsxs(e.p,{children:["Use the ",n.jsx(e.code,{children:"@carbon/utilities"})," carousel for managing slide navigation:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Initialize after component first render"}),`
`,n.jsx(e.li,{children:"Handle view change events to update button states"}),`
`,n.jsx(e.li,{children:"Manage focus and accessibility attributes"}),`
`]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[`💡 Check our
`,n.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/coachmark-overlay-elements",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/coachmark-overlay-elements",rel:"nofollow",children:n.jsx(e.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,n.jsx(e.h3,{id:"example-usage",children:"Example Usage"}),`
`,n.jsx(i,{of:r,title:"Coachmark overlay elements"}),`
`,n.jsx(e.h2,{id:"getting-started",children:"Getting started"}),`
`,n.jsx(e.p,{children:"Here's a quick example to get you started."}),`
`,n.jsx(e.h4,{id:"js-via-import",children:"JS (via import)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { POPOVER_ALIGNMENT } from '@carbon/web-components/es/components/popover/defs.js';
import '@carbon/ibm-products-web-components/es/components/coachmark/index.js';
import '@carbon/ibm-products-web-components/es/components/coachmark/coachmark-beacon/index.js';
import { InitCarousel, initCarousel } from '@carbon/utilities';
import '@carbon/web-components/es/components/button/button.js';
`})}),`
`,n.jsx(e.h3,{id:"html",children:"HTML"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<c4p-coachmark
  ?open=\${this._open}
  align=\${POPOVER_ALIGNMENT.TOP}
  .position=\${{ x: 150, y: 150 }}
  .highContrast=\${true}
>
  <c4p-coachmark-beacon
    label="Show information"
    ?expanded=\${this._open}
    @c4p-coachmark-beacon-clicked=\${this.handleBeaconClick}
    slot="trigger"
  >
  </c4p-coachmark-beacon>
  <c4p-coachmark-header
    closeIconDescription="Close"
  ></c4p-coachmark-header>
  <c4p-coachmark-body class="coachmark-body">
    <div>
      <img
        src=\${sampleImage}
        style="width: 100%; margin-bottom: 1rem;"
        alt="Sample"
      />
    </div>

    <div class="exampleCarouselWrapper">
      \${items.map(
        (item) => html\`
          <div>
            <h2>\${item.title}</h2>
            <p>\${item.text}</p>
          </div>
        \`
      )}
    </div>
    <div class="carouselControlWrapper__footer">
      <div class="carouselControlWrapper--controls-progress">
        <span class="carousel-progress">\${this._currentViewIndex + 1} / \${items.length}</span>
      </div>
      <div class="carouselControlWrapper--buttons">
        \${this.showBack ? html\`
          <cds-button
            class="back-btn"
            size="sm"
            kind="ghost"
            @click=\${this.handlePrev}
          >
            Back
          </cds-button>
        \` : ''}
        \${this.showNext ? html\`
          <cds-button
            class="next-btn"
            size="sm"
            @click=\${this.handleNext}
          >
            Next
          </cds-button>
        \` : ''}
        \${this.showDone ? html\`
          <cds-button
            class="done-btn"
            size="sm"
            @click=\${this.handleClose}
          >
            Done
          </cds-button>
        \` : ''}
      </div>
    </div>
  </c4p-coachmark-body>
</c4p-coachmark>
`})})]})}function I(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{I as default};
