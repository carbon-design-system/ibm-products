import{j as e,M as o,A as a}from"./blocks-JDUY7bhW.js";import{useMDXComponents as s}from"./index-ClMunz7M.js";import{U as i}from"./user-avatar.stories-CjCuOn9z.js";import"./iframe-DlBNYmVP.js";import"./user-avatar-ConBpnj-.js";import"./class-map-C-MR2Csb.js";import"./definition-tooltip-0QC-YKG1.js";import"./16-D6PKKtR4.js";import"./icon-loader-B1vsvZK7.js";function r(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:i}),`
`,e.jsx(n.h1,{id:"user-avatar",children:"User-avatar"}),`
`,e.jsx(n.p,{children:`User avatars are a representation of a user or group of users. They can be used
to identify a user or indicate collaborators.`}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[`💡 Check our
`,e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/user-avatar",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/user-avatar",rel:"nofollow",children:e.jsx(n.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsx(n.h2,{id:"note-on-theming",children:"Note on theming"}),`
`,e.jsxs(n.p,{children:["The backgroundColor and font color will adapt dynamically based on the ",e.jsx(n.code,{children:"theme"}),`
prop.`]}),`
`,e.jsx(n.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(n.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(n.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import '@carbon/ibm-products-web-components/es/components/user-avatar/index.js';
`})}),`
`,e.jsx(n.h3,{id:"html",children:"HTML"}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<c4p-user-avatar
  name="Thomas J. Watson"
  background-color="order-11-purple"
  size="lg"
  tooltip-text="TW, Thomas J. Watson user profile"
  tooltip-alignment="right"
></c4p-user-avatar>
`})}),`
`,e.jsx(n.h3,{id:"with-icon",children:"With Icon"}),`
`,e.jsxs(n.p,{children:["A carbon icon can be passed as a slot in ",e.jsx(n.code,{children:"<c4p-user-avatar>"}),` using
`,e.jsx(n.code,{children:"{ slot: 'rendericon' }"}),`. For a custom icon, specify the slot by adding the
`,e.jsx(n.code,{children:'slot="rendericon"'})," attribute to the element."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<c4p-user-avatar
  name="Thomas J. Watson"
  background-color="order-11-purple"
  size="lg"
  tooltip-text="TW, Thomas J. Watson user profile"
  tooltip-alignment="right"
>
  \${Group({ slot: 'rendericon' })}
</c4p-user-avatar>
`})}),`
`,e.jsxs(n.h2,{id:"c4p-user-avatar-attributes-properties-and-events",children:[e.jsx(n.code,{children:"<c4p-user-avatar>"})," attributes, properties and events"]}),`
`,e.jsxs(n.p,{children:["Note: For ",e.jsx(n.code,{children:"boolean"})," attributes, ",e.jsx(n.code,{children:"true"})," means simply setting the attribute."]}),`
`,e.jsx(a,{of:"c4p-user-avatar"})]})}function b(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{b as default};
