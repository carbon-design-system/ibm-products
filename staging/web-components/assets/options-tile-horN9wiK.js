import{j as t,M as p,C as m,A as s}from"./blocks-BM_RqY4j.js";import{useMDXComponents as n}from"./index-nWwB_ncV.js";import{O as l,D as e}from"./options-tile.stories-CGsYjFzC.js";import{s as c}from"./codePreviewer-SInp1ua2.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-qgZfZ3Fa.js";import"./options-tile-DvXHtQwj.js";import"./state-DzqCEE-r.js";import"./class-map-cKCt9_PM.js";import"./20-D_EsaJV1.js";import"./icon-loader-CfQrfwoP.js";import"./button-e3i8PJBw.js";import"./button-skeleton-BKVij690.js";import"./layer-C6EzAUeD.js";import"./toggle-B0JdtGQZ.js";import"./query-D0jTsbLw.js";import"./checkbox-G-aVusHH.js";import"./16-BQR5nc35.js";import"./toggle-skeleton-BX5ryn1H.js";import"./dropdown-skeleton-CT0_bkFD.js";import"./16-C2f9e6nj.js";import"./16-D0aIqdwb.js";import"./validity-CUJaV9kI.js";import"./floating-controller-xHgEX7I-.js";import"./collection-helpers-Cnsts1JG.js";import"./tab-skeleton-BCYXLqOZ.js";import"./skeleton-text-Bcyn1qvo.js";import"./progress-bar-B1Ra0pdb.js";import"./16-DvgjsF02.js";import"./popover-content-BPnqwnKl.js";import"./16-DSuDh1sQ.js";import"./16-CyCI-I-w.js";import"./breadcrumb-skeleton-QrrAk3SC.js";import"./link-CKYvSVct.js";import"./overflow-menu-item-CqfZU91i.js";import"./icon-button-BpveDxeH.js";import"./definition-tooltip-C3O1NSp4.js";import"./16-DYhtUhBA.js";import"./consume-DciFRa5W.js";import"./style-map-CT8tfjnK.js";import"./16-iEvmxbCa.js";import"./16-D5maUdCH.js";import"./text-input-CUHpAHSI.js";import"./file-uploader-item-DJiST4j2.js";import"./loading-CW5tTFaE.js";import"./inline-loading-BExXjabi.js";import"./form-group-74Ey2fTr.js";import"./search-skeleton-BpX4tBFM.js";import"./form-item-_0hyMHY5.js";import"./32-BCVgSU9O.js";import"./16-LKQtd5cM.js";import"./16-D3CzXAJU.js";import"./16-Ci-Iy0jC.js";import"./text-input-skeleton-Gvb0cWie.js";import"./modal-label-z0YtcfT6.js";import"./20-CvqWH37X.js";import"./actionable-notification-button-BbSwq3P9.js";import"./number-input-skeleton-BahHt5tT.js";import"./16-DXyY1wqk.js";import"./textarea-skeleton-CvL21W5M.js";import"./progress-step-DBomeE57.js";import"./slider-skeleton-BuaBz4h9.js";import"./tag-D2o5GaCf.js";import"./switcher-divider-JSG2zQSe.js";import"./stack-DaPQSs5B.js";import"./20-Dxpf5ws1.js";import"./16-B7SSgyYC.js";import"./16-CU4u-ZW8.js";import"./16-803qFA73.js";import"./16-BpKA4nzT.js";import"./20-CppOV_ea.js";import"./16-DgEWGJjw.js";import"./16-LR5LqMCE.js";import"./16-CPU3a-Kb.js";import"./16-aWrrgdCQ.js";import"./16-xraWWrlP.js";import"./16-CVWqvXKz.js";import"./16-BswKfa1f.js";const a=["const blockClass = 'options-tile';"];function r(o){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...n(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
`,`
`,t.jsx(i.h1,{id:"optionstile",children:"OptionsTile"}),`
`,t.jsxs(i.blockquote,{children:[`
`,t.jsxs(i.p,{children:["💡 Check our ",t.jsx(i.a,{href:"#",children:"Stackblitz"})," example implementation."]}),`
`]}),`
`,t.jsx(i.p,{children:t.jsx(i.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/options-tile",rel:"nofollow",children:t.jsx(i.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,t.jsx(i.p,{children:`An options tile can contain information, controls or tables which, when
collapsed, are summarized. It can be paired with a toggle to quickly enable or
disable the option.`}),`
`,t.jsx(i.h2,{id:"getting-started",children:"Getting started"}),`
`,t.jsx(i.p,{children:"Here's a quick example to get you started."}),`
`,t.jsx(i.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,t.jsx(i.pre,{children:t.jsx(i.code,{className:"language-javascript",children:`import '@carbon/ibm-products-web-components/es/components/options-tile/index.js';
`})}),`
`,t.jsx(i.h3,{id:"example-usage",children:"Example Usage"}),`
`,t.jsx(m,{of:e,additionalActions:[{title:"Open in Stackblitz",onClick:()=>c({story:e,customFunctionDefs:a,componentName:"options-tile"})}]}),`
`,t.jsx(i.h3,{id:"html",children:"HTML"}),`
`,t.jsx(i.pre,{children:t.jsx(i.code,{className:"language-html",children:`<c4p-options-tile
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
`,t.jsxs(i.h2,{id:"c4p-options-tile-attributes-properties-and-events",children:[t.jsx(i.code,{children:"<c4p-options-tile>"})," attributes, properties and events"]}),`
`,t.jsx(s,{of:"c4p-options-tile"})]})}function Nt(o={}){const{wrapper:i}={...n(),...o.components};return i?t.jsx(i,{...o,children:t.jsx(r,{...o})}):r(o)}export{a as customFunctionArr,Nt as default};
