import{j as t,M as l,C as o,A as d}from"./blocks-XHmWKNVf.js";import{useMDXComponents as c}from"./index-DWnxPoA9.js";import{U as h,D as n,W as a,a as s}from"./user-avatar.stories--rwCfh1j.js";import{s as i}from"./codePreviewer-C8-W-Pb0.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-B2dGZ3uq.js";import"./user-avatar-jHbIPps0.js";import"./class-map-tNNkCSzW.js";import"./definition-tooltip-BVXyj3o2.js";import"./popover-content-DKTuhRDn.js";import"./query-DAIS6qJ0.js";import"./state-Cj-ErXDi.js";import"./16-D6PKKtR4.js";import"./icon-loader-Cf7p-8D_.js";import"./16-DLXnHeki.js";import"./collection-helpers-Cnsts1JG.js";import"./tab-skeleton-BvMZLXRr.js";import"./progress-step-CKopEZv3.js";import"./16-BcmW1dBn.js";import"./16-rZwhNvBO.js";import"./progress-bar-D5HH9etN.js";import"./button-DVr7o_tG.js";import"./16-DSflTaDq.js";import"./16-0nG14jWc.js";import"./button-skeleton-D8YftpuT.js";import"./breadcrumb-skeleton-C6vf6Tz6.js";import"./link-BL6xWEgM.js";import"./overflow-menu-item-5Z3vevkK.js";import"./icon-button-BjUtidcR.js";import"./16-DYhtUhBA.js";import"./checkbox-Cwfh_Ag5.js";import"./16-UkQW1UVa.js";import"./consume-BDFsnhk-.js";import"./style-map-BMSdP3Aj.js";import"./16-Cp4I51YB.js";import"./validity-CUJaV9kI.js";import"./16-iEvmxbCa.js";import"./16-nJySvwbz.js";import"./dropdown-skeleton-D7fjYoRT.js";import"./16-Dc1ce3EM.js";import"./text-input-DrYX0fj-.js";import"./file-uploader-item-uqV0Nybo.js";import"./loading-BZFmjxDF.js";import"./loading-icon-BjgRrB1k.js";import"./form-group-DccvA6yh.js";import"./search-skeleton-CPyWQvy4.js";import"./form-item-lotXoAyE.js";import"./32-FWc1SMqm.js";import"./16-PO2M8t47.js";import"./text-input-skeleton-sk_J7Wnv.js";import"./inline-loading-DZLJT3oa.js";import"./layer-CDEssFqr.js";import"./modal-label-C5RrzIaN.js";import"./actionable-notification-button-BIWpFHKg.js";import"./number-input-skeleton-dOfqLXKW.js";import"./16-DG77Odo3.js";import"./textarea-skeleton-DVvia02K.js";import"./slider-skeleton-B486PUN4.js";import"./tag-BvxJwH5p.js";import"./toggle-DLRySbXD.js";import"./switcher-divider-dwM5G3jy.js";import"./20-CD9UwiLF.js";import"./20-b8PuNCrA.js";import"./16-PS-8tLDd.js";import"./16-DYrvuIVq.js";import"./16-CeH4JhOl.js";import"./16-0wsGWJU-.js";import"./16-h0a7ESSC.js";import"./16-DEajC6Gz.js";import"./20-DgNpQY5o.js";import"./16-aWrrgdCQ.js";import"./16-DxVvgUmP.js";import"./16-CVWqvXKz.js";const p=[`import Group from '@carbon/icons/es/group/16';
import { iconLoader } from '@carbon/web-components/es/globals/internal/icon-loader.js';`];function m(r){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...c(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(l,{of:h}),`
`,`
`,t.jsx(e.h1,{id:"user-avatar",children:"User-avatar"}),`
`,t.jsx(e.p,{children:`User avatars are a representation of a user or group of users. They can be used
to identify a user or indicate collaborators.`}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsxs(e.p,{children:[`💡 Check our
`,t.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/user-avatar",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/user-avatar",rel:"nofollow",children:t.jsx(e.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,t.jsx(e.h2,{id:"note-on-theming",children:"Note on theming"}),`
`,t.jsxs(e.p,{children:["The backgroundColor and font color will adapt dynamically based on the ",t.jsx(e.code,{children:"theme"}),`
prop.`]}),`
`,t.jsx(e.h2,{id:"getting-started",children:"Getting started"}),`
`,t.jsx(e.p,{children:"Here's a quick example to get you started."}),`
`,t.jsx(e.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import '@carbon/ibm-products-web-components/es/components/user-avatar/index.js';
`})}),`
`,t.jsx(e.h3,{id:"html",children:"HTML"}),`
`,t.jsx(e.h3,{id:"default",children:"Default"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<c4p-user-avatar
  name="Thomas J. Watson"
  background-color="order-11-purple"
  size="lg"
  tooltip-text="TW, Thomas J. Watson user profile"
  tooltip-alignment="right"
></c4p-user-avatar>
`})}),`
`,t.jsx(e.h3,{id:"example-usage",children:"Example Usage"}),`
`,t.jsx(o,{of:n,additionalActions:[{title:"Open in Stackblitz",onClick:()=>i({story:n,componentName:"user-avatar"})}]}),`
`,t.jsx(e.h3,{id:"with-icon",children:"With Icon"}),`
`,t.jsx(e.p,{children:"The user avatar with profile picture"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<c4p-user-avatar
  tooltip-alignment=\${args.tooltipAlignment}
  tooltip-text=\${args.tooltipText}
  size=\${args.size}
  image=\${args.image}
  image-description=\${args.imageDescription}   
  theme=\${args.theme}
>
</c4p-user-avatar>
`})}),`
`,t.jsx(e.h3,{id:"example-usage-1",children:"Example Usage"}),`
`,t.jsx(o,{of:a,additionalActions:[{title:"Open in Stackblitz",onClick:()=>i({story:a,customImports:p,componentName:"user-avatar"})}]}),`
`,t.jsx(e.h3,{id:"with-image",children:"With Image"}),`
`,t.jsxs(e.p,{children:[`For a custom icon, specify the slot by adding the
`,t.jsx(e.code,{children:'slot="rendericon"'})," attribute to the element."]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<c4p-user-avatar
  name="Thomas J. Watson"
  background-color="order-11-purple"
  size="lg"
  tooltip-text="TW, Thomas J. Watson user profile"
  tooltip-alignment="right"
>
  \${Group({ slot: 'rendericon' })}
</c4p-user-avatar>
`})}),`
`,t.jsx(e.h3,{id:"example-usage-2",children:"Example Usage"}),`
`,t.jsx(o,{of:s,additionalActions:[{title:"Open in Stackblitz",onClick:()=>i({story:s,customImports:p,componentName:"user-avatar"})}]}),`
`,t.jsxs(e.h2,{id:"c4p-user-avatar-attributes-properties-and-events",children:[t.jsx(e.code,{children:"<c4p-user-avatar>"})," attributes, properties and events"]}),`
`,t.jsxs(e.p,{children:["Note: For ",t.jsx(e.code,{children:"boolean"})," attributes, ",t.jsx(e.code,{children:"true"})," means simply setting the attribute."]}),`
`,t.jsx(d,{of:"c4p-user-avatar"})]})}function Ut(r={}){const{wrapper:e}={...c(),...r.components};return e?t.jsx(e,{...r,children:t.jsx(m,{...r})}):m(r)}export{p as customImportArr,Ut as default};
