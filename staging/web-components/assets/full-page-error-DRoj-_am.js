import{j as e,M as o,A as i}from"./blocks-COh-1RPt.js";import{useMDXComponents as t}from"./index-BTS7Q-1T.js";import{F as a}from"./full-page-error.stories-4eypG6jm.js";import"./iframe-CxDE64CT.js";function n(s){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:a}),`
`,e.jsx(r.h1,{id:"fullpageerror",children:"FullPageError"}),`
`,e.jsx(r.p,{children:`Display a full-page error when the requested page is unavailable to the user.
This is typically caused by issues with the requested URL or access permissions.
Errors caused by server connectivity issues are not covered in this guideline.`}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:[`💡 Check our
`,e.jsx(r.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/full-page-error",rel:"nofollow",children:"Stackblitz"}),`
example implementation.
`,e.jsx(r.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/full-page-error",rel:"nofollow",children:e.jsx(r.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})]}),`
`]}),`
`,e.jsx(r.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(r.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(r.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-javascript",children:`import '@carbon/ibm-products-web-components/es/components/full-page-error/index.js';
`})}),`
`,e.jsx(r.h3,{id:"html",children:"HTML"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<c4p-full-page-error
  label="Error 404"
  class="my-custom-class"
  title="Page not found"
  description="The page you requested has moved or is unavailable, or the specified URL is not valid. Please check the URL or search the site for the requested content."
  kind="404"
>
  <!-- Pass any content you want to display to the user here -->
  <a class="cds--link" href="#">– Forwarding link 1</a>
  <br />
  <a class="cds--link" href="#">– Forwarding link 2</a>
</c4p-full-page-error>
`})}),`
`,e.jsxs(r.h2,{id:"c4p-full-page-error-attributes-properties-and-events",children:[e.jsx(r.code,{children:"<c4p-full-page-error>"})," attributes, properties and events"]}),`
`,e.jsx(i,{of:"c4p-full-page-error"})]})}function h(s={}){const{wrapper:r}={...t(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(n,{...s})}):n(s)}export{h as default};
