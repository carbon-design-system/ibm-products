import{k,r as b,l as a,E as S,x as d,n as f,c as y}from"./iframe-Etog_1uH.js";import{u as w,c as I}from"./coachmark-beacon-DTXUVzzu.js";import"./button-DbFY82zT.js";import"./button-skeleton-ijMrHdaY.js";import{H as $}from"./host-listener-DN1-XIwx.js";import{_ as P}from"./16-D5maUdCH.js";import{_ as z}from"./16-BJ-s22c-.js";import{e as v}from"./index-BZslYQZt.js";import{i as m}from"./icon-loader-2iGE0hUJ.js";import{P as c}from"./popover-content--Q8g0cY9.js";import{_ as H}from"./16-B_l_7QwJ.js";const E=":host(c4p-coachmark-header){display:flex;justify-content:flex-end}:host(c4p-coachmark-header) .c4p--coachmark-header-drag-handle{margin-inline-end:auto}:host(c4p-coachmark-header) .c4p--coachmark-header-drag-icon{fill:var(--cds-background, #ffffff)}:host(c4p-coachmark-header) .c4p--coachmark-header-close-icon{fill:var(--cds-background, #ffffff)}",B=k(E);var F=Object.defineProperty,j=Object.getOwnPropertyDescriptor,u=(o,e,n,r)=>{for(var t=r>1?void 0:r?j(e,n):e,s=o.length-1,i;s>=0;s--)(i=o[s])&&(t=(r?i(e,n,t):i(t))||t);return r&&t&&F(e,n,t),t};let p=class extends v($(b)){constructor(){super(...arguments),this.closeIconDescription="",this.dragIconDescription="",this._handleClick=o=>{o.stopPropagation();const e=this.closest(`${a}-coachmark`);e&&(e.dispatchEvent(new CustomEvent(`${a}-coachmark-request-close`,{bubbles:!0,composed:!0,cancelable:!0,detail:{source:"header-close-button"}})),e.open=!1),w({name:"open",detail:!1})}}render(){const{floating:o}=I.get();return d`
      ${o?d`
            <cds-button
              kind="ghost"
              size="sm"
              class="${a}--coachmark-header-drag-handle"
              tooltip-text="${this.dragIconDescription}"
            >
              ${m(z,{slot:"icon",class:`${a}--coachmark-header-drag-icon`})}
            </cds-button>
          `:S}
      <slot name="header"></slot>
      <cds-button
        kind="ghost"
        size="sm"
        tooltip-text="${this.closeIconDescription}"
        @click=${this._handleClick}
      >
        ${m(P,{slot:"icon",class:`${a}--coachmark-header-close-icon`})}
      </cds-button>
    `}};p.styles=B;u([f({reflect:!0})],p.prototype,"closeIconDescription",2);u([f({reflect:!0})],p.prototype,"dragIconDescription",2);p=u([y(`${a}-coachmark-header`)],p);const q=":host(c4p-coachmark-body){display:block;padding:0 1rem 1rem}",L=k(q);var A=Object.getOwnPropertyDescriptor,M=(o,e,n,r)=>{for(var t=r>1?void 0:r?A(e,n):e,s=o.length-1,i;s>=0;s--)(i=o[s])&&(t=i(t)||t);return t};let g=class extends v($(b)){render(){return d` <slot></slot> `}};g.styles=L;g=M([y(`${a}-coachmark-body`)],g);const R=".coachmark-body{display:flex;flex-direction:column;inline-size:290px}.coachmark-body h2{font-size:var(--cds-productive-heading-02-font-size, 1rem);font-weight:var(--cds-productive-heading-02-font-weight, 600);line-height:var(--cds-productive-heading-02-line-height, 1.375);letter-spacing:var(--cds-productive-heading-02-letter-spacing, 0);margin:0 0 .5rem}.coachmark-body p{font-size:var(--cds-body-long-01-font-size, .875rem);font-weight:var(--cds-body-long-01-font-weight, 400);line-height:var(--cds-body-long-01-line-height, 1.42857);letter-spacing:var(--cds-body-long-01-letter-spacing, .16px);margin:0 0 .5rem}.coachmark-body cds-button{display:flex;align-self:flex-end;margin-block-start:.5rem}.trigger-btn{margin:.5rem}",C=k(R),_=()=>{document.querySelector("c4p-coachmark")?.toggleAttribute("open")},D=()=>{document.querySelector(`${a}-coachmark`)?.removeAttribute("open")},x=()=>{setTimeout(()=>{const o=document.querySelector(`${a}-coachmark`);if(o?.hasAttribute("floating")){const n=o?.querySelector(`${a}-coachmark-header`);n&&n.shadowRoot&&n.shadowRoot.querySelector(`.${a}--coachmark-header-drag-handle`)?.focus()}else document.querySelector(".coachmark-body cds-button")?.focus()},100)},W={top:c.TOP,"top-left":c.TOP_LEFT,"top-right":c.TOP_RIGHT,bottom:c.BOTTOM,"bottom-left":c.BOTTOM_LEFT,"bottom-right":c.BOTTOM_RIGHT,left:c.LEFT,right:c.RIGHT},O={align:c.TOP},T={align:{control:"select",description:"Where to render the Coachmark relative to its target",options:W},open:{control:"boolean",description:"Specifies whether the component is currently open"},highContrast:{control:"boolean",description:"Specify whether the component should be rendered on high-contrast"},floating:{control:"boolean",description:"Specifies whether the component is floating or not"},dropShadow:{control:"boolean",description:"Specify whether a drop shadow should be rendered on the popover"},position:{control:"object",description:"Fine tune the position of the target in pixels. Applies only to Beacons"}},l={args:{...O,open:!0,highContrast:!0,align:"bottom"},argTypes:T,render:o=>d`
      <style>
        ${C}
      </style>
      <div style="padding-top:200px; position: relative; display: flex;">
        <c4p-coachmark
          .open=${o.open}
          align=${o.align}
          .highContrast=${o.highContrast}
          .position=${{x:150,y:100}}
          @c4p-coachmark-opened=${x}
        >
          <c4p-coachmark-beacon
            label="Show information"
            .expanded=${o.open}
            @c4p-coachmark-beacon-clicked=${_}
            slot="trigger"
          >
          </c4p-coachmark-beacon>
          <c4p-coachmark-header
            closeIconDescription="Close"
            class="coachmark-header"
          ></c4p-coachmark-header>
          <c4p-coachmark-body class="coachmark-body">
            <h2>Hello World</h2>
            <p>this is a description test</p>
            <cds-button size="sm" @click=${D}>Done</cds-button>
          </c4p-coachmark-body>
        </c4p-coachmark>
      </div>
    `},h={args:{...O,open:!0,highContrast:!0,align:"bottom"},argTypes:T,render:o=>d`
      <style>
        ${C}
      </style>
      <div style="padding-top:200px; position: relative;">
        <c4p-coachmark
          .open=${o.open}
          align=${o.align}
          .highContrast=${o.highContrast}
          .floating=${!0}
          @c4p-coachmark-opened=${x}
        >
          <cds-button
            kind="tertiary"
            slot="trigger"
            class="trigger-btn"
            @click=${_}
            >Show information ${m(H,{slot:"icon"})}
          </cds-button>
          <c4p-coachmark-header
            closeIconDescription="Close"
            dragIconDescription="Drag"
            class="coachmark-header"
          ></c4p-coachmark-header>
          <c4p-coachmark-body class="coachmark-body">
            <h2>Hello World</h2>
            <p>this is a description test</p>
            <cds-button size="sm" @click=${D}>Done</cds-button>
          </c4p-coachmark-body>
        </c4p-coachmark>
      </div>
    `},G={title:"Components/Coachmark"};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...args,
    open: true,
    highContrast: true,
    align: 'bottom'
  },
  argTypes,
  render: (args: any) => {
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
          @c4p-coachmark-opened=\${handleCoachmarkOpened}
        >
          <c4p-coachmark-beacon
            label="Show information"
            .expanded=\${args.open}
            @c4p-coachmark-beacon-clicked=\${handleClick}
            slot="trigger"
          >
          </c4p-coachmark-beacon>
          <c4p-coachmark-header
            closeIconDescription="Close"
            class="coachmark-header"
          ></c4p-coachmark-header>
          <c4p-coachmark-body class="coachmark-body">
            <h2>Hello World</h2>
            <p>this is a description test</p>
            <cds-button size="sm" @click=\${handleDone}>Done</cds-button>
          </c4p-coachmark-body>
        </c4p-coachmark>
      </div>
    \`;
  }
}`,...l.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...args,
    open: true,
    highContrast: true,
    align: 'bottom'
  },
  argTypes,
  render: (args: any) => {
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
          @c4p-coachmark-opened=\${handleCoachmarkOpened}
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
            closeIconDescription="Close"
            dragIconDescription="Drag"
            class="coachmark-header"
          ></c4p-coachmark-header>
          <c4p-coachmark-body class="coachmark-body">
            <h2>Hello World</h2>
            <p>this is a description test</p>
            <cds-button size="sm" @click=\${handleDone}>Done</cds-button>
          </c4p-coachmark-body>
        </c4p-coachmark>
      </div>
    \`;
  }
}`,...h.parameters?.docs?.source}}};const N=["Tooltip","Floating"],ao=Object.freeze(Object.defineProperty({__proto__:null,Floating:h,Tooltip:l,__namedExportsOrder:N,default:G},Symbol.toStringTag,{value:"Module"}));export{ao as C,h as F,l as T};
