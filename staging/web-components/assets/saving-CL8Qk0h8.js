import{j as n,M as i}from"./blocks-UGq23DFQ.js";import{useMDXComponents as o}from"./index-CpLmZVRJ.js";import{s as a}from"./saving.stories-CM0rPaHf.js";import"./iframe-JDcqu3bl.js";import"./class-map-ClODDnf9.js";import"./textarea-skeleton-O_ECXt9Q.js";import"./form-CjaGj7XY.js";import"./spread-DT2i-7IB.js";import"./text-input-CVzNhx7n.js";import"./shared-enums-WsGAW9C4.js";import"./16-BKH_SaWf.js";import"./button-Ct4N9ls6.js";import"./button-skeleton-DUOBVDNj.js";import"./inline-loading-4Ch4yjNg.js";import"./16-D_29E8-W.js";import"./loading-icon-5JrFKCfL.js";import"./16-BBmCMGoc.js";function s(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:a}),`
`,n.jsx(t.h1,{id:"saving",children:"Saving"}),`
`,n.jsx(t.p,{children:"To build this pattern, we recommend including the following components:"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsx(t.li,{children:n.jsx(t.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-text-area",rel:"nofollow",children:"cds-textarea"})}),`
`,n.jsx(t.li,{children:n.jsx(t.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-button",rel:"nofollow",children:"cds-button"})}),`
`,n.jsx(t.li,{children:n.jsx(t.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-inline-loading",rel:"nofollow",children:"cds-inline-loading"})}),`
`]}),`
`,n.jsxs(t.p,{children:["These components are used within the ",n.jsx(t.code,{children:"auto-saving"})," and ",n.jsx(t.code,{children:"manual-saving"})," wrapper components to handle state management."]}),`
`,n.jsxs(t.blockquote,{children:[`
`,n.jsxs(t.p,{children:[`💡 Check our
`,n.jsx(t.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/saving",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,n.jsx(t.p,{children:n.jsx(t.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/saving",rel:"nofollow",children:n.jsx(t.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,n.jsx(t.h2,{id:"getting-started",children:"Getting started"}),`
`,n.jsx(t.p,{children:"Here's a quick example to get you started."}),`
`,n.jsx(t.h2,{id:"auto",children:"Auto"}),`
`,n.jsx(t.h3,{id:"html",children:"HTML"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-html",children:`<cds-textarea
  id="save-auto-textarea"
  label="Enter in the thing you wanted saved"
  class="saving-story-textarea"
></cds-textarea>
\${dirtyInput && status !== 'default'
  ? html\`
      <div class="\${blockClass}__message">
        \${status === 'fail'
          ? html\`
              <div class="\${blockClass}__error-icon">
                <ErrorFilled size="{16}" />
                \${errorFilled16({})}
              </div>
            \`
          : ''}
        <p class="\${blockClass}__text">\${statusObj[status]?.text}</p>
      </div>
    \`
  : ''}
`})}),`
`,n.jsx(t.h2,{id:"manual",children:"Manual"}),`
`,n.jsx(t.h3,{id:"html-1",children:"HTML"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-html",children:`<div class="\${blockClass}__buttons">
  <cds-button
    kind="secondary"
    ?disabled=\${status !== 'in-progress'}
    type="button"
  >
    Cancel
  </cds-button>
  <cds-button
    @click=\${onRequestSave}
    kind="primary"
    ?disabled=\${status === 'in-progress'}
    type="button"
  >
    \${statusObj[status]?.text} \${icon}
  </cds-button>
</div>
`})})]})}function $(e={}){const{wrapper:t}={...o(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(s,{...e})}):s(e)}export{$ as default};
