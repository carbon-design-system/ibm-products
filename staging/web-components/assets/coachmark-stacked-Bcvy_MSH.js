import{j as e,M as a,C as i}from"./blocks-D2PmR6A2.js";import{useMDXComponents as o}from"./index-D9Jgl2Tx.js";import{C as c,D as r}from"./coachmark-stacked.stories-BOKtXqY3.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-Etog_1uH.js";import"./state-DSNP4DDc.js";import"./popover-content--Q8g0cY9.js";import"./host-listener-DN1-XIwx.js";import"./floating-controller-O5_OP1Uj.js";import"./query-D0jTsbLw.js";import"./class-map-DrB8Nott.js";import"./button-DbFY82zT.js";import"./chunk-Ci2WlFE4-KEkrn0Yu.js";import"./link-D91fK6is.js";import"./coachmark-header-DgMzT_fV.js";import"./decorate-tPtMJD2o.js";import"./index-BZslYQZt.js";import"./16-D5maUdCH.js";import"./icon-loader-2iGE0hUJ.js";import"./button-skeleton-ijMrHdaY.js";import"./16-BJ-s22c-.js";import"./coachmark-tagline-DK9Io-qP.js";import"./16-DSpKrZTh.js";import"./20-CEm2HUGl.js";function s(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:c}),`
`,e.jsx(n.h1,{id:"coachmarkstacked",children:"CoachmarkStacked"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/coachmark/usage/#stacked",rel:"nofollow",children:"Usage guidelines"})}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#example-usage",children:"Example usage"})}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:`CoachmarkStacked appears fixed at the bottom right corner of the browser window
when the page loads. It starts in a minimized state, to cover as little of the
UI as possible; when shown in tests as expanded by default, users immediately
closed it without reading, to get it out of the way. CoachmarkStacked can
include ghost buttons to trigger another layer to slide up to stack on top of
it, much like the stacked Tearsheet. When dismissed, the stacked layer exits by
sliding back down, revealing the main layer. When the main layer is dismissed,
it slides down off the page. Only one layer can be stacked on the main layer.`}),`
`,e.jsx(n.h2,{id:"coded-examples",children:"Coded examples"}),`
`,e.jsx(n.p,{children:`Patterns have multiple ways of accomplishing a user need and typically use a
combination of components with additional design considerations. The pattern
code we share is meant to serve as an example implementation that can be built
and extended further.`}),`
`,e.jsx(n.h3,{id:"ingredients",children:"Ingredients"}),`
`,e.jsx(n.p,{children:"To build this pattern, you'll need the following components:"}),`
`,e.jsx(n.p,{children:"To build this pattern, we recommend including the following components:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://ibm-products-web-components.carbondesignsystem.com/?path=/docs/components-coachmark",rel:"nofollow",children:"Coachmark"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-button",rel:"nofollow",children:"cds-button"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-link--overview",rel:"nofollow",children:"cds-link"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/carbon-design-system/carbon/blob/main/packages/utilities/src/carousel/README.md",rel:"nofollow",children:"Carousel utility"})}),`
`]}),`
`,e.jsx(n.h3,{id:"implementation-notes",children:"Implementation Notes"}),`
`,e.jsx(n.h4,{id:"required-styles",children:"Required Styles"}),`
`,e.jsx(n.p,{children:"The tagline component requires both JavaScript and SCSS imports:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`@use '@carbon/ibm-products-web-components/scss/components/coachmark/coachmark-tagline/coachmark-tagline.scss';
`})}),`
`,e.jsx(n.h4,{id:"carousel-integration",children:"Carousel Integration"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"@carbon/utilities"})," carousel for managing slide navigation:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Initialize after component first render"}),`
`,e.jsx(n.li,{children:"Handle view change events to update button states"}),`
`,e.jsx(n.li,{children:"Manage focus and accessibility attributes"}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[`💡 Check our
`,e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/coachmark-stacked",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/coachmark-stacked",rel:"nofollow",children:e.jsx(n.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsx(n.h3,{id:"example-usage",children:"Example Usage"}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(n.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(n.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(n.h4,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { POPOVER_ALIGNMENT } from '@carbon/web-components/es/components/popover/defs.js';
import '@carbon/ibm-products-web-components/es/components/coachmark/index.js';
import '@carbon/ibm-products-web-components/es/components/coachmark/coachmark-tagline/index.js';
import '@carbon/web-components/es/components/button/button.js';
import { InitCarousel, initCarousel } from '@carbon/utilities';
import '@carbon/web-components/es/components/link/index.js';
`})}),`
`,e.jsx(n.h3,{id:"html",children:"HTML"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`    <!-- Parent Coachmark -->
        <c4p-coachmark
          ?open=\${this._parentOpen}
          align=\${POPOVER_ALIGNMENT.TOP}
          .highContrast=\${true}
          .caret=\${false}
          @c4p-coachmark-request-close=\${this.handleParentClose}
        >
          <c4p-coachmark-tagline
            id="CoachmarkTagline"
            title="Why are there two types of severity scores?"
            close-icon-description="close"
            ?open=\${this._parentOpen}
            @c4p-coachmark-tagline-cta-click=\${this.handleTaglineClick}
            slot="trigger"
          >
          </c4p-coachmark-tagline>
          <c4p-coachmark-header closeIconDescription="Close"></c4p-coachmark-header>
          <c4p-coachmark-body class="coachmark-stacked-home__body">
            <div class="coachmark-stacked-home-element">
              \${iconLoader(Idea20, { class: 'coachmark-stacked-home__icon-idea' })}
            </div>
            <div class="coachmark-stacked-home__content">
              <h2 class="coachmark-stacked-home__title">Example title</h2>
              <p class="coachmark-stacked-home__body">This is an example of a description</p>
            </div>
            <ul class="coachmark-stacked-home__nav-links">
              \${parentItems.map((item) => html\`
                <li key=\${item.id}>
                  <cds-button
                    id="parent-button-\${item.id}"
                    kind="ghost"
                    size="sm"
                    class="nav-button"
                    @click=\${(e: Event) => this.handleChildButtonClick(item.id, e)}
                  >
                    \${item.label}
                  </cds-button>
                </li>
              \`)}
            </ul>
            <cds-button
              size="sm"
              @click=\${this.handleParentClose}
              class="coachmark-stacked-home__footer"
            >
              Close
            </cds-button>
          </c4p-coachmark-body>
        </c4p-coachmark>
      </div>

      <!-- Child Coachmarks with their trigger buttons -->
      \${parentItems.map((item) => {
        const isOpen = this._openChildId === item.id;
        const nestedItem = nestedItems.find((nested) => nested.id === item.id);
        
        if (!nestedItem) return '';

        return html\`
          <c4p-coachmark
            id="child-\${item.id}"
            class="stacked_element_content"
            ?open=\${isOpen}
            align=\${POPOVER_ALIGNMENT.TOP}
            .highContrast=\${true}
            .caret=\${false}
            @c4p-coachmark-request-close=\${(e: Event) => {
              e.stopPropagation();
              this.handleChildClose(e);
            }}
          >
            <!-- Use the button as the trigger -->
            <cds-button
              slot="trigger"
              id="coachmark-trigger-\${item.id}"
              kind="ghost"
              size="sm"
              class="coachmark-stacked-home__nav-link"
              @click=\${(e: Event) => this.handleChildButtonClick(item.id, e)}
            >
            </cds-button>
            <c4p-coachmark-header closeIconDescription="Close"></c4p-coachmark-header>
            <c4p-coachmark-body>
              \${nestedItem.type === 'simple' ? html\`
                <div class="stacked-coachmark__content">
                  <h2 class="stacked-coachmark__title">\${nestedItem.title}</h2>
                  <p class="stacked-coachmark__body">\${nestedItem.text}</p>
                  <div class="stacked-coachmark__button">
                    <cds-button
                      class="done-btn"
                      size="sm"
                      @click=\${this.handleChildClose}
                    >
                      Done
                    </cds-button>
                  </div>
                </div>
              \` : ''}
              
              \${nestedItem.type === 'carousel' ? html\`
                <div class="exampleCarouselWrapper">
                  \${nestedItem.pages.map((page) => html\`
                    <div>
                      <h2>\${page.title}</h2>
                      <p>\${page.text}</p>
                      \${page.button ? html\`<p>\${page.button}</p>\` : ''}
                    </div>
                  \`)}
                </div>

                <div class="carouselControlWrapper__footer">
                  <div class="carouselControlWrapper--controls-progress">
                    <span>\${this._currentViewIndex + 1} / \${nestedItem.pages.length}</span>
                  </div>
                  <div class="carouselControlWrapper--buttons">
                    \${this.showBack ? html\`
                      <cds-button
                        class="back-btn"
                        size="sm"
                        kind="ghost"
                        @click=\${(e: Event) => this.handlePrev(item.id, e)}
                      >
                        Back
                      </cds-button>
                    \` : ''}
                    \${this.showNext ? html\`
                      <cds-button
                        class="next-btn"
                        size="sm"
                        @click=\${(e: Event) => this.handleNext(item.id, e)}
                      >
                        Next
                      </cds-button>
                    \` : ''}
                    \${this.showDone ? html\`
                      <cds-button
                        class="done-btn"
                        size="sm"
                        @click=\${(e: Event) => this.handleChildClose(e)}
                      >
                        Done
                      </cds-button>
                    \` : ''}
                  </div>
                </div>
              \` : ''}
            </c4p-coachmark-body>
          </c4p-coachmark>
`})})]})}function N(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{N as default};
