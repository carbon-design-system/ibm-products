import{j as t,M as p,C as m,A as s}from"./blocks-Dk7EIFdo.js";import{useMDXComponents as n}from"./index-Cv7mAmmJ.js";import{O as l,D as e}from"./options-tile.stories-CkC-Qmvf.js";import{s as c}from"./codePreviewer-VZmLTzH2.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-DCyUdvyd.js";import"./options-tile-CMpz1j0C.js";import"./state-CBGOrMJf.js";import"./class-map-phl3okVG.js";import"./20-D_EsaJV1.js";import"./icon-loader-DJwbA0i1.js";import"./button-C3qrS0FG.js";import"./button-skeleton-B3cVTbQo.js";import"./layer-Dby8OZF6.js";import"./toggle-B_oTdfeQ.js";import"./query-D0jTsbLw.js";import"./checkbox-DMsc1laA.js";import"./16-COlWGPCY.js";import"./toggle-skeleton-DHwsnc70.js";import"./dropdown-skeleton-BbEDuNT8.js";import"./16-C2f9e6nj.js";import"./16-D0aIqdwb.js";import"./validity-CUJaV9kI.js";import"./floating-controller-xHgEX7I-.js";import"./collection-helpers-Cnsts1JG.js";import"./tab-skeleton-fAoNQkQn.js";import"./skeleton-text-CsPJA1R9.js";import"./progress-bar-CDYXNf9z.js";import"./16-DvgjsF02.js";import"./popover-content-CL9jmiNa.js";import"./16-DSuDh1sQ.js";import"./16-CtvlJoTL.js";import"./breadcrumb-skeleton-BQ5xoA-d.js";import"./link-Dmsy2I9n.js";import"./overflow-menu-item-BeScIwv4.js";import"./icon-button-CxkHNCPd.js";import"./definition-tooltip-DODAVJUY.js";import"./16-DYhtUhBA.js";import"./consume-0PqtCb-J.js";import"./style-map-CAiPd8CD.js";import"./16-iEvmxbCa.js";import"./16-D5maUdCH.js";import"./text-input-DxiW-aRs.js";import"./file-uploader-item-CO7VXitH.js";import"./loading-gOVN33Bw.js";import"./inline-loading-D_6XjEgf.js";import"./form-group-Dy58wmnA.js";import"./search-skeleton-3JCv3lAU.js";import"./form-item-sJMGKszo.js";import"./32-Lu7A6wmg.js";import"./16-DoG_qfmj.js";import"./16-D3CzXAJU.js";import"./16-Ci-Iy0jC.js";import"./text-input-skeleton-Dqix3M9Q.js";import"./modal-label-D1nxGQdu.js";import"./20-CvqWH37X.js";import"./actionable-notification-button-rpUUwBQ1.js";import"./number-input-skeleton-D_vTe2Ca.js";import"./16-DXyY1wqk.js";import"./textarea-skeleton-CFwR9jir.js";import"./progress-step-Ch1-j90B.js";import"./slider-skeleton-Bc38nPx5.js";import"./tag-sqwJOSAd.js";import"./switcher-divider-D2a2M6DO.js";import"./stack-krBDYPeD.js";import"./20-BoSto6ak.js";import"./16-B7SSgyYC.js";import"./16-CU4u-ZW8.js";import"./16-803qFA73.js";import"./16-BpKA4nzT.js";import"./20-CppOV_ea.js";import"./16-DgEWGJjw.js";import"./16-LR5LqMCE.js";import"./16-CPU3a-Kb.js";import"./16-aWrrgdCQ.js";import"./16-xraWWrlP.js";import"./16-CVWqvXKz.js";import"./16-BswKfa1f.js";const a=["const blockClass = 'options-tile';"];function r(o){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...n(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
