import{k,r as y,E as O,l as h,x as d,n as f,c as $}from"./iframe-CPwma648.js";import{u as T,c as b}from"./coachmark-beacon-Dm6Mu8lf.js";import"./button-BE8YYPkS.js";import"./button-skeleton-Dtbl2yvK.js";import{H as v}from"./class-map-BjEbJ_wj.js";import{_ as I}from"./16-D5maUdCH.js";import{_ as S,a as P}from"./16-DgEWGJjw.js";import{e as C}from"./index-QJAogcvb.js";import{i as m}from"./icon-loader-Bb4ppSSv.js";import{P as t}from"./popover-content-O3lmoZ8f.js";const w=":host(c4p-coachmark-header){display:flex;justify-content:flex-end}:host(c4p-coachmark-header) .c4p--coachmark-header-drag-handle{margin-inline-end:auto}:host(c4p-coachmark-header) .c4p--coachmark-header-drag-icon{fill:var(--cds-background, #ffffff)}:host(c4p-coachmark-header) .c4p--coachmark-header-close-icon{fill:var(--cds-background, #ffffff)}",z=k(w);var E=Object.defineProperty,H=Object.getOwnPropertyDescriptor,u=(o,n,s,c)=>{for(var e=c>1?void 0:c?H(n,s):n,a=o.length-1,r;a>=0;a--)(r=o[a])&&(e=(c?r(n,s,e):r(e))||e);return c&&e&&E(n,s,e),e};let p=class extends C(v(y)){constructor(){super(...arguments),this.closeIconDescription="",this.dragIconDescription="",this._handleClick=()=>{T({name:"open",detail:!b.get().open})}}render(){const{floating:o}=b.get();return d`
      ${o?d`
            <cds-button
              kind="ghost"
              size="sm"
              class="${h}--coachmark-header-drag-handle"
              iconDescription="${this.dragIconDescription}"
              hasIconOnly
            >
              ${m(S,{slot:"icon",class:`${h}--coachmark-header-drag-icon`})}
            </cds-button>
          `:O}
      <slot name="header"></slot>
      <cds-button
        kind="ghost"
        size="sm"
        iconDescription="${this.closeIconDescription}"
        hasIconOnly
        @click=${this._handleClick}
      >
        ${m(I,{slot:"icon",class:`${h}--coachmark-header-close-icon`})}
      </cds-button>
    `}};p.styles=z;u([f({reflect:!0})],p.prototype,"closeIconDescription",2);u([f({reflect:!0})],p.prototype,"dragIconDescription",2);p=u([$(`${h}-coachmark-header`)],p);const L=":host(c4p-coachmark-body){display:block;padding:0 1rem 1rem}",A=k(L);var B=Object.getOwnPropertyDescriptor,M=(o,n,s,c)=>{for(var e=c>1?void 0:c?B(n,s):n,a=o.length-1,r;a>=0;a--)(r=o[a])&&(e=r(e)||e);return e};let g=class extends C(v(y)){render(){return d` <slot></slot> `}};g.styles=A;g=M([$(`${h}-coachmark-body`)],g);const j=`/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */.coachmark-body{display:flex;flex-direction:column;inline-size:290px}.coachmark-body h2{font-size:var(--cds-productive-heading-02-font-size, 1rem);font-weight:var(--cds-productive-heading-02-font-weight, 600);line-height:var(--cds-productive-heading-02-line-height, 1.375);letter-spacing:var(--cds-productive-heading-02-letter-spacing, 0);margin:0 0 .5rem}.coachmark-body p{font-size:var(--cds-body-long-01-font-size, .875rem);font-weight:var(--cds-body-long-01-font-weight, 400);line-height:var(--cds-body-long-01-line-height, 1.42857);letter-spacing:var(--cds-body-long-01-letter-spacing, .16px);margin:0 0 .5rem}.coachmark-body cds-button{display:flex;align-self:flex-end;margin-block-start:.5rem}.coachmark-body cds-button::part(button){box-shadow:none}.trigger-btn{margin:.5rem}`,_=k(j);/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const F={top:t.TOP,"top-left":t.TOP_LEFT,"top-right":t.TOP_RIGHT,bottom:t.BOTTOM,"bottom-left":t.BOTTOM_LEFT,"bottom-right":t.BOTTOM_RIGHT,left:t.LEFT,right:t.RIGHT},x={align:t.TOP},D={align:{control:"select",description:"Specify the alignment of the Coachmark relative to its target",options:F}},i={args:{...x,open:!0,highContrast:!0,align:"bottom"},argTypes:D,render:o=>{const n=()=>{document.querySelector("c4p-coachmark")?.toggleAttribute("open")};return d`
      <style>
        ${_}
      </style>
      <div style="padding-top:200px; position: relative; display: flex;">
        <c4p-coachmark
          .open=${o.open}
          align=${o.align}
          .highContrast=${o.highContrast}
          .position=${{x:150,y:100}}
        >
          <c4p-coachmark-beacon
            label="Show information"
            .expanded=${o.open}
            @c4p-coachmark-beacon-clicked=${n}
            slot="trigger"
          >
          </c4p-coachmark-beacon>
          <c4p-coachmark-header
            closeIconDescription="close icon"
            class="coachmark-header"
          ></c4p-coachmark-header>
          <c4p-coachmark-body class="coachmark-body">
            <h2>Hello World</h2>
            <p>this is a description test</p>
            <cds-button size="sm">Done</cds-button>
          </c4p-coachmark-body>
        </c4p-coachmark>
      </div>
    `}},l={args:{...x,open:!0,highContrast:!0,align:"bottom"},argTypes:D,render:o=>{const n=()=>{document.querySelector("c4p-coachmark")?.toggleAttribute("open")};return d`
      <style>
        ${_}
      </style>
      <div style="padding-top:200px; position: relative;">
        <c4p-coachmark
          .open=${o.open}
          align=${o.align}
          .highContrast=${o.highContrast}
          .floating=${!0}
        >
          <cds-button
            kind="tertiary"
            slot="trigger"
            class="trigger-btn"
            @click=${n}
            >Show information ${m(P,{slot:"icon"})}
          </cds-button>
          <c4p-coachmark-header
            closeIconDescription="close icon"
            dragIconDescription="drag icon"
            class="coachmark-header"
          ></c4p-coachmark-header>
          <c4p-coachmark-body class="coachmark-body">
            <h2>Hello World</h2>
            <p>this is a description test</p>
            <cds-button size="sm">Done</cds-button>
          </c4p-coachmark-body>
        </c4p-coachmark>
      </div>
    `}},q={title:"Components/Coachmark"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...args,
    open: true,
    highContrast: true,
    align: 'bottom'
  },
  argTypes,
  render: args => {
    const handleClick = () => {
      document.querySelector('c4p-coachmark')?.toggleAttribute('open');
    };
    return html\`
      <style>
        \${styles}
      </style>
      <div style="padding-top:200px; position: relative; display: flex;">
        <c4p-coachmark
          .open=\${args.open}
          align=\${args.align}
          .highContrast=\${args.highContrast}
          .position=\${{
      x: 150,
      y: 100
    }}
        >
          <c4p-coachmark-beacon
            label="Show information"
            .expanded=\${args.open}
            @c4p-coachmark-beacon-clicked=\${handleClick}
            slot="trigger"
          >
          </c4p-coachmark-beacon>
          <c4p-coachmark-header
            closeIconDescription="close icon"
            class="coachmark-header"
          ></c4p-coachmark-header>
          <c4p-coachmark-body class="coachmark-body">
            <h2>Hello World</h2>
            <p>this is a description test</p>
            <cds-button size="sm">Done</cds-button>
          </c4p-coachmark-body>
        </c4p-coachmark>
      </div>
    \`;
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...args,
    open: true,
    highContrast: true,
    align: 'bottom'
  },
  argTypes,
  render: args => {
    const handleClick = () => {
      document.querySelector('c4p-coachmark')?.toggleAttribute('open');
    };
    return html\`
      <style>
        \${styles}
      </style>
      <div style="padding-top:200px; position: relative;">
        <c4p-coachmark
          .open=\${args.open}
          align=\${args.align}
          .highContrast=\${args.highContrast}
          .floating=\${Boolean(true)}
        >
          <cds-button
            kind="tertiary"
            slot="trigger"
            class="trigger-btn"
            @click=\${handleClick}
            >Show information \${iconLoader(Crossroads as any, {
      slot: 'icon'
    })}
          </cds-button>
          <c4p-coachmark-header
            closeIconDescription="close icon"
            dragIconDescription="drag icon"
            class="coachmark-header"
          ></c4p-coachmark-header>
          <c4p-coachmark-body class="coachmark-body">
            <h2>Hello World</h2>
            <p>this is a description test</p>
            <cds-button size="sm">Done</cds-button>
          </c4p-coachmark-body>
        </c4p-coachmark>
      </div>
    \`;
  }
}`,...l.parameters?.docs?.source}}};const G=["Tooltip","Floating"],Z=Object.freeze(Object.defineProperty({__proto__:null,Floating:l,Tooltip:i,__namedExportsOrder:G,default:q},Symbol.toStringTag,{value:"Module"}));export{Z as C};
