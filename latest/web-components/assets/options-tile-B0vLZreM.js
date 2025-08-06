import{j as t,M as s,A as r}from"./blocks-CQ_kgSH6.js";import{useMDXComponents as o}from"./index-CuG9piX1.js";import{O as l}from"./options-tile.stories-CNrYqHgV.js";import"./iframe-Bxt0-d8K.js";import"./class-map-Dc2M-kfU.js";import"./20-Bjf5zXil.js";import"./spread-yWqBgWDm.js";import"./button-BluQf5Vo.js";import"./button-skeleton-BUKK43kf.js";import"./toggle-BXdV2G7F.js";import"./checkbox-D_JL9LkT.js";import"./form-DySLsG0e.js";function i(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...o(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:l}),`
`,t.jsx(e.h1,{id:"optionstile",children:"OptionsTile"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsxs(e.p,{children:[`💡 Check our
`,t.jsx(e.a,{href:"#",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/options-tile",rel:"nofollow",children:t.jsx(e.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,t.jsx(e.p,{children:"An options tile can contain information, controls or tables which, when collapsed, are summarized. It can be paired with a toggle to quickly enable or disable the option."}),`
`,t.jsx(e.h2,{id:"getting-started",children:"Getting started"}),`
`,t.jsx(e.p,{children:"Here's a quick example to get you started."}),`
`,t.jsx(e.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import '@carbon/ibm-products-web-components/es/components/options-tile/index.js';
`})}),`
`,t.jsx(e.h3,{id:"html",children:"HTML"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<c4p-options-tile
  id="my-tile"
  size="lg"
  title="A title describing all included content."
  titleId="my-title-title"
>
  <div slot="summary">
    <span>A summary of the current state of content.</span>
  </div>
  <div slot="body">
    Additional detail or content will be shown when expanded.
  </div>
</c4p-options-tile>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const tile = document.querySelector('c4p-options-tile');
    tile.addEventListener('c4p-options-tile-open', () => {
      tile?.setAttribute('open', 'true');
    });
    tile.addEventListener('c4p-options-tile-close', () => {
      tile?.removeAttribute('open');
    });
  });
<\/script>
`})}),`
`,t.jsxs(e.h2,{id:"c4p-options-tile-attributes-properties-and-events",children:[t.jsx(e.code,{children:"<c4p-options-tile>"})," attributes, properties and events"]}),`
`,t.jsx(r,{of:"c4p-options-tile"})]})}function f(n={}){const{wrapper:e}={...o(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(i,{...n})}):i(n)}export{f as default};
