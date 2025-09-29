import{j as t,M as s,A as r}from"./blocks-CkwV_Ktb.js";import{useMDXComponents as o}from"./index-CqOEW4mY.js";import{O as p}from"./options-tile.stories-DU7vcAKd.js";import"./iframe-3XTLwSNm.js";import"./class-map-BuSmLJyE.js";import"./20-CD9UwiLF.js";import"./icon-loader-DnbRHTcw.js";import"./button-DEdq3Jfp.js";import"./button-skeleton-DjJjXia2.js";import"./layer-Cx_T7g4K.js";import"./toggle-CHab9Px_.js";import"./checkbox-Ke9o3OdL.js";import"./form-BtEVdvua.js";import"./dropdown-skeleton-BNYunYw0.js";import"./16-Dc1ce3EM.js";import"./16-Cp4I51YB.js";import"./shared-enums-BTfaHpqk.js";import"./collection-helpers-lnQzUmW5.js";function i(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...o(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:p}),`
`,t.jsx(e.h1,{id:"optionstile",children:"OptionsTile"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsxs(e.p,{children:["💡 Check our ",t.jsx(e.a,{href:"#",children:"Stackblitz"})," example implementation."]}),`
`]}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/options-tile",rel:"nofollow",children:t.jsx(e.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,t.jsx(e.p,{children:`An options tile can contain information, controls or tables which, when
collapsed, are summarized. It can be paired with a toggle to quickly enable or
disable the option.`}),`
`,t.jsx(e.h2,{id:"getting-started",children:"Getting started"}),`
`,t.jsx(e.p,{children:"Here's a quick example to get you started."}),`
`,t.jsx(e.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import '@carbon/ibm-products-web-components/es/components/options-tile/index.js';
`})}),`
`,t.jsx(e.h3,{id:"html",children:"HTML"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<c4p-options-tile
  id="my-tile"
  size="lg"
  titleText="A title describing all included content."
  titleId="my-title"
>
  <div slot="summary">
    <span>A summary of the current state of content.</span>
  </div>
  <div slot="body">
    Additional detail or content will be shown when expanded.
  </div>
</c4p-options-tile>
`})}),`
`,t.jsxs(e.h2,{id:"c4p-options-tile-attributes-properties-and-events",children:[t.jsx(e.code,{children:"<c4p-options-tile>"})," attributes, properties and events"]}),`
`,t.jsx(r,{of:"c4p-options-tile"})]})}function A(n={}){const{wrapper:e}={...o(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(i,{...n})}):i(n)}export{A as default};
