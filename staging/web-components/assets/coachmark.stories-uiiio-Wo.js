import{z as f,r as b,B as a,E as w,x as h,n as y,c as k}from"./iframe-WhcWw8do.js";import{u as D,c as x}from"./coachmark-beacon-Cm-U6XDG.js";import"./button-_YZ9mRAH.js";import"./button-skeleton-BmyT_GNI.js";import{H as $}from"./host-listener-DN1-XIwx.js";import{_ as P}from"./16-D5maUdCH.js";import{_ as O}from"./16-BJ-s22c-.js";import{o as v}from"./index-CHHh8tl7.js";import{i as m}from"./icon-loader-DZVVdcXA.js";import{P as e}from"./popover-content-Dg6xNfH2.js";import{_ as F}from"./16-B_l_7QwJ.js";const I=":host(c4p-coachmark-header){display:flex;justify-content:flex-end}:host(c4p-coachmark-header) .c4p--coachmark-header-drag-handle{margin-inline-end:auto}:host(c4p-coachmark-header) .c4p--coachmark-header-drag-icon{fill:var(--cds-background, #ffffff)}:host(c4p-coachmark-header) .c4p--coachmark-header-close-icon{fill:var(--cds-background, #ffffff)}",E=f(I);var z=Object.defineProperty,H=Object.getOwnPropertyDescriptor,u=(o,r,i,c)=>{for(var t=c>1?void 0:c?H(r,i):r,n=o.length-1,s;n>=0;n--)(s=o[n])&&(t=(c?s(r,i,t):s(t))||t);return c&&t&&z(r,i,t),t};let p=class extends v($(b)){constructor(){super(...arguments),this.closeIconDescription="",this.dragIconDescription="",this._handleClick=o=>{o.stopPropagation();const r=this.closest(`${a}-coachmark`);r&&(r.dispatchEvent(new CustomEvent(`${a}-coachmark-request-close`,{bubbles:!0,composed:!0,cancelable:!0,detail:{source:"header-close-button"}})),r.open=!1),D({name:"open",detail:!1})}}render(){const{floating:o}=x.get();return h`
      ${o?h`
            <cds-button
              kind="ghost"
              size="sm"
              class="${a}--coachmark-header-drag-handle"
              tooltip-text="${this.dragIconDescription}"
            >
              ${m(O,{slot:"icon",class:`${a}--coachmark-header-drag-icon`})}
            </cds-button>
          `:w}
      <slot name="header"></slot>
      <cds-button
        kind="ghost"
        size="sm"
        class="${a}--coachmark-header-close-button"
        tooltip-text="${this.closeIconDescription}"
        @click=${this._handleClick}
      >
        ${m(P,{slot:"icon",class:`${a}--coachmark-header-close-icon`})}
      </cds-button>
    `}};p.styles=E;u([y({reflect:!0})],p.prototype,"closeIconDescription",2);u([y({reflect:!0})],p.prototype,"dragIconDescription",2);p=u([k(`${a}-coachmark-header`)],p);const A=":host(c4p-coachmark-body){display:block;padding:0 1rem 1rem}",R=f(A);var j=Object.getOwnPropertyDescriptor,L=(o,r,i,c)=>{for(var t=c>1?void 0:c?j(r,i):r,n=o.length-1,s;n>=0;n--)(s=o[n])&&(t=s(t)||t);return t};let g=class extends v($(b)){render(){return h` <slot></slot> `}};g.styles=R;g=L([k(`${a}-coachmark-body`)],g);const B=".coachmark-body{display:flex;flex-direction:column;inline-size:290px}.coachmark-body h2{font-size:var(--cds-productive-heading-02-font-size, 1rem);font-weight:var(--cds-productive-heading-02-font-weight, 600);line-height:var(--cds-productive-heading-02-line-height, 1.375);letter-spacing:var(--cds-productive-heading-02-letter-spacing, 0);margin:0 0 .5rem}.coachmark-body p{font-size:var(--cds-body-long-01-font-size, .875rem);font-weight:var(--cds-body-long-01-font-weight, 400);line-height:var(--cds-body-long-01-line-height, 1.42857);letter-spacing:var(--cds-body-long-01-letter-spacing, .16px);margin:0 0 .5rem}.coachmark-body cds-button{display:flex;align-self:flex-end;margin-block-start:.5rem}.trigger-btn{margin:.5rem}",C=f(B),_=()=>{document.querySelector("c4p-coachmark")?.toggleAttribute("open")},M={top:e.TOP,"top-end":e.TOP_END,"top-start":e.TOP_START,bottom:e.BOTTOM,"bottom-end":e.BOTTOM_END,"bottom-start":e.BOTTOM_START,left:e.LEFT,"left-end":e.LEFT_END,"left-start":e.LEFT_START,right:e.RIGHT,"right-end":e.RIGHT_END,"right-start":e.RIGHT_START},S={align:e.TOP,open:!0,highContrast:!0,caret:!1,floating:!1,dropShadow:!1},T={align:{control:"select",description:"Where to render the Coachmark relative to its target",options:M},open:{control:"boolean",description:"Specifies whether the component is currently open"},highContrast:{control:"boolean",description:"Specify whether the component should be rendered on high-contrast"},caret:{control:"boolean",description:"Specify whether a caret should be rendered on the popover. This is intended to use only for coachmark patterns."},floating:{control:"boolean",description:"Specifies whether the component is floating or not"},dropShadow:{control:"boolean",description:"Specify whether a drop shadow should be rendered on the popover"},position:{control:"object",description:"Fine tune the position of the target in pixels. Applies only to Beacons"},selectorPrimaryFocus:{control:"text",description:"CSS selector for the element that should receive focus when the coachmark opens"}},l={args:{...S,align:"bottom",caret:!0,selectorPrimaryFocus:""},argTypes:T,render:o=>h`
      <style>
        ${C}
      </style>
      <div style="padding-top:200px; position: relative; display: flex;">
        <c4p-coachmark
          .open=${o.open}
          align=${o.align}
          .highContrast=${o.highContrast}
          .dropShadow=${o.dropShadow}
          .floating=${o.floating}
          .position=${{x:150,y:100}}
          .caret=${o.caret}
          selector-primary-focus=${o.selectorPrimaryFocus}
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
            <cds-button size="sm" class="done-btn">Done</cds-button>
          </c4p-coachmark-body>
        </c4p-coachmark>
      </div>
    `},d={args:{...S,align:"bottom",floating:!0,selectorPrimaryFocus:""},argTypes:T,render:o=>h`
      <style>
        ${C}
      </style>
      <div style="padding-top:200px; position: relative;">
        <c4p-coachmark
          .open=${o.open}
          align=${o.align}
          .highContrast=${o.highContrast}
          .dropShadow=${o.dropShadow}
          .floating=${o.floating}
          .caret=${o.caret}
          drag-aria-label="Coachmark is being dragged"
          selector-primary-focus=${o.selectorPrimaryFocus}
        >
          <cds-button
            kind="tertiary"
            slot="trigger"
            class="trigger-btn"
            @click=${_}
            >Show information ${m(F,{slot:"icon"})}
          </cds-button>
          <c4p-coachmark-header
            closeIconDescription="Close"
            dragIconDescription="Drag"
            class="coachmark-header"
          ></c4p-coachmark-header>
          <c4p-coachmark-body class="coachmark-body">
            <h2>Hello World</h2>
            <p>this is a description test</p>
            <cds-button size="sm" class="done-btn">Done</cds-button>
          </c4p-coachmark-body>
        </c4p-coachmark>
      </div>
    `},N={title:"Components/Onboarding/Coachmark"};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...args,
    align: 'bottom',
    caret: true,
    selectorPrimaryFocus: ''
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
          .dropShadow=\${args.dropShadow}
          .floating=\${args.floating}
          .position=\${{
      x: 150,
      y: 100
    }}
          .caret=\${args.caret}
          selector-primary-focus=\${args.selectorPrimaryFocus}
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
            <cds-button size="sm" class="done-btn">Done</cds-button>
          </c4p-coachmark-body>
        </c4p-coachmark>
      </div>
    \`;
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...args,
    align: 'bottom',
    floating: true,
    selectorPrimaryFocus: ''
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
          .dropShadow=\${args.dropShadow}
          .floating=\${args.floating}
          .caret=\${args.caret}
          drag-aria-label="Coachmark is being dragged"
          selector-primary-focus=\${args.selectorPrimaryFocus}
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
            <cds-button size="sm" class="done-btn">Done</cds-button>
          </c4p-coachmark-body>
        </c4p-coachmark>
      </div>
    \`;
  }
}`,...d.parameters?.docs?.source}}};const W=["Tooltip","Floating"],eo=Object.freeze(Object.defineProperty({__proto__:null,Floating:d,Tooltip:l,__namedExportsOrder:W,default:N},Symbol.toStringTag,{value:"Module"}));export{eo as C,d as F,l as T};
