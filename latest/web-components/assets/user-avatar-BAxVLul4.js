import{j as e,M as o,A as a}from"./blocks-BtrZhanP.js";import{useMDXComponents as s}from"./index-D-vrZS-T.js";import{U as i}from"./user-avatar.stories-CUo2-ylJ.js";import"./iframe-CBTnhw7N.js";import"./user-avatar-O8jtyWV9.js";import"./class-map-D3uJeleG.js";import"./definition-tooltip-BMZfQ_wf.js";import"./state-Cbt-Dy8_.js";import"./16-C_oIid5r.js";import"./spread-D-IYg-7S.js";function r(n){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:i}),`
`,e.jsx(t.h1,{id:"user-avatar",children:"User-avatar"}),`
`,e.jsx(t.p,{children:"User avatars are a representation of a user or group of users. They can be used to identify a user or indicate collaborators."}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[`💡 Check our
`,e.jsx(t.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/user-avatar",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/user-avatar",rel:"nofollow",children:e.jsx(t.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsx(t.h2,{id:"note-on-theming",children:"Note on theming"}),`
`,e.jsxs(t.p,{children:["The backgroundColor and font color will adapt dynamically based on the ",e.jsx(t.code,{children:"theme"})," prop."]}),`
`,e.jsx(t.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(t.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(t.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import '@carbon/ibm-products-web-components/es/components/user-avatar/index.js';

`})}),`
`,e.jsx(t.h3,{id:"html",children:"HTML"}),`
`,e.jsx(t.h3,{id:"default",children:"Default"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:` <c4p-user-avatar
  name= 'Thomas J. Watson'
  background-color='order-11-purple'
  size="lg"
  tooltip-text='TW, Thomas J. Watson user profile'
  tooltip-alignment="right"
></c4p-user-avatar>
`})}),`
`,e.jsx(t.h3,{id:"with-icon",children:"With Icon"}),`
`,e.jsxs(t.p,{children:["A carbon icon can be passed as a slot in ",e.jsx(t.code,{children:"<c4p-user-avatar>"})," using ",e.jsx(t.code,{children:"{ slot: 'rendericon' }"}),". For a custom icon, specify the slot by adding the ",e.jsx(t.code,{children:'slot="rendericon"'})," attribute to the element."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:` <c4p-user-avatar
  name= 'Thomas J. Watson'
  background-color='order-11-purple'
  size="lg"
  tooltip-text='TW, Thomas J. Watson user profile'
  tooltip-alignment="right"
>
 \${Group({ slot: 'rendericon' })}
</c4p-user-avatar>
`})}),`
`,e.jsxs(t.h2,{id:"c4p-user-avatar-attributes-properties-and-events",children:[e.jsx(t.code,{children:"<c4p-user-avatar>"})," attributes, properties and events"]}),`
`,e.jsxs(t.p,{children:["Note: For ",e.jsx(t.code,{children:"boolean"})," attributes, ",e.jsx(t.code,{children:"true"})," means simply setting the attribute."]}),`
`,e.jsx(a,{of:"c4p-user-avatar"})]})}function g(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{g as default};
