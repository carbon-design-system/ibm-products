import{j as t,M as p,C as m,A as s}from"./blocks-DKCR_JXm.js";import{useMDXComponents as n}from"./index-DacHF0DJ.js";import{O as l,D as e}from"./options-tile.stories-DVhW67go.js";import{s as c}from"./codePreviewer-CZTSi7x3.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-DCbJu0gS.js";import"./options-tile-BUXFGiE3.js";import"./state-9P2czl_k.js";import"./class-map-DdhOA3rD.js";import"./20-D_EsaJV1.js";import"./icon-loader-CszQ8uN0.js";import"./button-BTRCBkXO.js";import"./button-skeleton-vSuw4yvD.js";import"./layer-CxrB1Hpx.js";import"./toggle-DW_Ppd2A.js";import"./query-D0jTsbLw.js";import"./checkbox-DkrNHzH2.js";import"./16-Bjq4wp4K.js";import"./toggle-skeleton-DFnS21y5.js";import"./dropdown-skeleton-D0Ah_VNG.js";import"./16-C2f9e6nj.js";import"./16-D0aIqdwb.js";import"./validity-CUJaV9kI.js";import"./floating-controller-xHgEX7I-.js";import"./collection-helpers-Cnsts1JG.js";import"./tab-skeleton-CdoQTa-M.js";import"./skeleton-text-kOPRSukX.js";import"./progress-bar-C5kX_l6F.js";import"./16-DvgjsF02.js";import"./popover-content-DPqkAdc6.js";import"./16-DSuDh1sQ.js";import"./16-BSY9xwqG.js";import"./breadcrumb-skeleton-Eh5QMICN.js";import"./link-czYkTX-P.js";import"./overflow-menu-item-BRl1APf2.js";import"./icon-button-Df03qkzC.js";import"./definition-tooltip-0bKXgr8h.js";import"./16-DYhtUhBA.js";import"./consume-80TrDY9I.js";import"./style-map-QRWHH31M.js";import"./16-iEvmxbCa.js";import"./16-D5maUdCH.js";import"./text-input-CTYZVdkr.js";import"./file-uploader-item-BenGmRiz.js";import"./loading-Dus2_ifg.js";import"./inline-loading-iWYZiBOX.js";import"./form-group-DaDOkL5u.js";import"./search-skeleton-Dqqb7vZc.js";import"./form-item-C_jIKJpw.js";import"./32-Db5nMlN-.js";import"./16-BD_AiC5G.js";import"./16-D3CzXAJU.js";import"./16-Ci-Iy0jC.js";import"./text-input-skeleton-CC2mIKMO.js";import"./modal-label-CitTEZSj.js";import"./20-CvqWH37X.js";import"./actionable-notification-button-08cy4M95.js";import"./number-input-skeleton-CHGI7mXJ.js";import"./16-DXyY1wqk.js";import"./textarea-skeleton-C1GCdA8k.js";import"./progress-step-Ca1LgyiW.js";import"./slider-skeleton-DIHIFHS6.js";import"./tag-Ds5djwYx.js";import"./switcher-divider-BElus9RS.js";import"./stack-wfAc7ltK.js";import"./20-DsEWp9Q5.js";import"./16-B7SSgyYC.js";import"./16-CU4u-ZW8.js";import"./16-803qFA73.js";import"./16-BpKA4nzT.js";import"./20-CppOV_ea.js";import"./16-DgEWGJjw.js";import"./16-LR5LqMCE.js";import"./16-CPU3a-Kb.js";import"./16-DSpKrZTh.js";import"./16-aWrrgdCQ.js";import"./16-xraWWrlP.js";import"./16-CVWqvXKz.js";import"./16-BswKfa1f.js";const a=["const blockClass = 'options-tile';"];function r(o){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...n(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
`,t.jsx(s,{of:"c4p-options-tile"})]})}function Xt(o={}){const{wrapper:i}={...n(),...o.components};return i?t.jsx(i,{...o,children:t.jsx(r,{...o})}):r(o)}export{a as customFunctionArr,Xt as default};
