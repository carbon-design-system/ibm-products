import{j as p,x as c}from"./iframe-B2dGZ3uq.js";import"./guide-banner-element-BbFCYOpA.js";import"./preload-helper-PPVm8Dsz.js";import"./class-map-tNNkCSzW.js";import"./button-DVr7o_tG.js";import"./button-skeleton-D8YftpuT.js";import"./16-nJySvwbz.js";import"./20-DgNpQY5o.js";import"./icon-loader-Cf7p-8D_.js";const i=".body-container{display:grid;grid-template-columns:repeat(3,1fr)}.body-elm{padding:1rem;color:#f4f4f4}",g=p(i);/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const{fn:n}=__STORYBOOK_MODULE_TEST__,m={},b="guide-banner-story",u=t=>{const{"@c4p-guidebanner-ontoggle":o,"@c4p-guidebanner-onclose":a,collapseText:r,expandText:s,titleText:l,open:d}=t;return c`
    <style>
      ${g}
    </style>
    <c4p-guide-banner
      @c4p-guidebanner-toggle=${o}
      @c4p-guidebanner-close=${a}
      class=${b}
      collapseText=${r}
      expandText=${s}
      ?open=${d}
      titleText=${l}
    >
      <div slot="body">
        <div class="body-container">
          <c4p-guide-banner-element class="body-elm">
            <p>example body content</p>
          </c4p-guide-banner-element>
          <c4p-guide-banner-element class="body-elm">
            <p>example body content</p>
          </c4p-guide-banner-element>
          <c4p-guide-banner-element class="body-elm">
            <p>example body content</p>
          </c4p-guide-banner-element>
        </div>
      </div>
    </c4p-guide-banner>
  `},e={args:{"@c4p-guidebanner-ontoggle":n(),"@c4p-guidebanner-onclose":n(),collapseText:"Read less",expandText:"Read more",titleText:"Page-related heading that can stand on its own",open:!0},argTypes:m,render:u},v={title:"Components/GuideBanner"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    '@c4p-guidebanner-ontoggle': fn(),
    '@c4p-guidebanner-onclose': fn(),
    collapseText: 'Read less',
    expandText: 'Read more',
    titleText: 'Page-related heading that can stand on its own',
    open: true
  },
  argTypes,
  render: renderTemplate
}`,...e.parameters?.docs?.source}}};const C=["Default"];export{e as Default,C as __namedExportsOrder,v as default};
