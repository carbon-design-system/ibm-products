import{k as o,x as a}from"./iframe-CPwma648.js";import"./full-page-error-CdUHMiTD.js";const c=".full-page-error-stories__story-container{position:fixed;display:grid;block-size:100vh;grid-template-rows:3rem 1fr;inline-size:100vw;inset-block-start:0;inset-inline-start:0}.full-page-error-stories__story-header{background:var(--cds-background-inverse, #393939)}",i=o(c);/**
 * @license
 *
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const t={kind:{control:{type:"select"},options:["403","404","custom"]}},r={args:{class:"custom-class",label:"Error ###",title:"[Error title]",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",kind:"custom"},argTypes:t,render:e=>a`
      <style>
        ${i}
      </style>
      <div class="full-page-error-stories__story-container">
        <div class="full-page-error-stories__story-header"></div>
        <c4p-full-page-error
          label=${e.label}
          class=${e.class}
          title=${e.title}
          description=${e.description}
          kind=${e.kind}
        >
          <a class="cds--link cds--link--lg" href="#">– Forwarding link 1</a>
          <br />
          <a class="cds--link cds--link--lg" href="#">– Forwarding link 2</a>
        </c4p-full-page-error>
      </div>
    `},s={args:{class:"custom-class",title:"Access denied",label:"Error 403",description:"You are not authorized to access the requested page. Please verify that you are logged in to the hosting environment and your access permissions are correct.",kind:"403"},argTypes:t,render:e=>a`
      <style>
        ${i}
      </style>
      <div class="full-page-error-stories__story-container">
        <div class="full-page-error-stories__story-header"></div>
        <c4p-full-page-error
          label=${e.label}
          class=${e.class}
          title=${e.title}
          description=${e.description}
          kind=${e.kind}
        >
          <a class="cds--link cds--link--lg" href="#">– Forwarding link 1</a>
          <br />
          <a class="cds--link cds--link--lg" href="#">– Forwarding link 2</a>
        </c4p-full-page-error>
      </div>
    `},l={args:{title:"Page not found",label:"Error 404",description:"The page you requested has moved or is unavailable, or the specified URL is not valid. Please check the URL or search the site for the requested content.",kind:"404",class:"custom-class"},argTypes:t,render:e=>a`
      <style>
        ${i}
      </style>
      <div class="full-page-error-stories__story-container">
        <div class="full-page-error-stories__story-header"></div>
        <c4p-full-page-error
          label=${e.label}
          class=${e.class}
          title=${e.title}
          description=${e.description}
          kind=${e.kind}
        >
          <a class="cds--link cds--link--lg" href="#">– Forwarding link 1</a>
          <br />
          <a class="cds--link cds--link--lg" href="#">– Forwarding link 2</a>
        </c4p-full-page-error>
      </div>
    `},n={title:"Components/FullPageError",component:"c4p-full-page-error"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    class: 'custom-class',
    label: 'Error ###',
    title: '[Error title]',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    kind: 'custom'
  },
  argTypes,
  render: args => {
    return html\`
      <style>
        \${styles}
      </style>
      <div class="full-page-error-stories__story-container">
        <div class="full-page-error-stories__story-header"></div>
        <c4p-full-page-error
          label=\${args.label}
          class=\${args.class}
          title=\${args.title}
          description=\${args.description}
          kind=\${args.kind}
        >
          <a class="cds--link cds--link--lg" href="#">– Forwarding link 1</a>
          <br />
          <a class="cds--link cds--link--lg" href="#">– Forwarding link 2</a>
        </c4p-full-page-error>
      </div>
    \`;
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    class: 'custom-class',
    title: 'Access denied',
    label: 'Error 403',
    description: 'You are not authorized to access the requested page. Please verify that you are logged in to the hosting environment and your access permissions are correct.',
    kind: '403'
  },
  argTypes,
  render: args => {
    return html\`
      <style>
        \${styles}
      </style>
      <div class="full-page-error-stories__story-container">
        <div class="full-page-error-stories__story-header"></div>
        <c4p-full-page-error
          label=\${args.label}
          class=\${args.class}
          title=\${args.title}
          description=\${args.description}
          kind=\${args.kind}
        >
          <a class="cds--link cds--link--lg" href="#">– Forwarding link 1</a>
          <br />
          <a class="cds--link cds--link--lg" href="#">– Forwarding link 2</a>
        </c4p-full-page-error>
      </div>
    \`;
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Page not found',
    label: 'Error 404',
    description: 'The page you requested has moved or is unavailable, or the specified URL is not valid. Please check the URL or search the site for the requested content.',
    kind: '404',
    class: 'custom-class'
  },
  argTypes,
  render: args => {
    return html\`
      <style>
        \${styles}
      </style>
      <div class="full-page-error-stories__story-container">
        <div class="full-page-error-stories__story-header"></div>
        <c4p-full-page-error
          label=\${args.label}
          class=\${args.class}
          title=\${args.title}
          description=\${args.description}
          kind=\${args.kind}
        >
          <a class="cds--link cds--link--lg" href="#">– Forwarding link 1</a>
          <br />
          <a class="cds--link cds--link--lg" href="#">– Forwarding link 2</a>
        </c4p-full-page-error>
      </div>
    \`;
  }
}`,...l.parameters?.docs?.source}}};const d=["Default","Error403","Error404"],u=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Error403:s,Error404:l,__namedExportsOrder:d,default:n},Symbol.toStringTag,{value:"Module"}));export{r as D,u as F};
