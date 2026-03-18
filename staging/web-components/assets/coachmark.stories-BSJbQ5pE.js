import{k,r as y,l as r,E as I,x as d,n as b,c as f}from"./iframe-f5hh7K5H.js";import{u as S,c as P}from"./coachmark-beacon-WD8eUw6w.js";import"./button-XM3OYt4g.js";import"./button-skeleton-CfNwpw03.js";import{H as $}from"./class-map-ByrB7N_-.js";import{_ as w}from"./16-D5maUdCH.js";import{_ as z,a as H}from"./16-DgEWGJjw.js";import{e as v}from"./index-jZ7v_nzm.js";import{i as m}from"./icon-loader-CvslT9ia.js";import{P as c}from"./popover-content-BAfXCnFL.js";const B=":host(c4p-coachmark-header){justify-content:flex-end;display:flex}:host(c4p-coachmark-header) .c4p--coachmark-header-drag-handle{margin-inline-end:auto}:host(c4p-coachmark-header) .c4p--coachmark-header-drag-icon,:host(c4p-coachmark-header) .c4p--coachmark-header-close-icon{fill:var(--cds-background,#fff)}",E=k(B);var L=Object.defineProperty,j=Object.getOwnPropertyDescriptor,u=(o,a,i,n)=>{for(var e=n>1?void 0:n?j(a,i):a,t=o.length-1,s;t>=0;t--)(s=o[t])&&(e=(n?s(a,i,e):s(e))||e);return n&&e&&L(a,i,e),e};let p=class extends v($(y)){constructor(){super(...arguments),this.closeIconDescription="",this.dragIconDescription="",this._handleClick=()=>{const o=this.closest(`${r}-coachmark`);o&&(o.open=!1),S({name:"open",detail:!1})}}render(){const{floating:o}=P.get();return d`
      ${o?d`
            <cds-button
              kind="ghost"
              size="sm"
              class="${r}--coachmark-header-drag-handle"
              iconDescription="${this.dragIconDescription}"
              hasIconOnly
            >
              ${m(z,{slot:"icon",class:`${r}--coachmark-header-drag-icon`})}
            </cds-button>
          `:I}
      <slot name="header"></slot>
      <cds-button
        kind="ghost"
        size="sm"
        iconDescription="${this.closeIconDescription}"
        hasIconOnly
        @click=${this._handleClick}
      >
        ${m(w,{slot:"icon",class:`${r}--coachmark-header-close-icon`})}
      </cds-button>
    `}};p.styles=E;u([b({reflect:!0})],p.prototype,"closeIconDescription",2);u([b({reflect:!0})],p.prototype,"dragIconDescription",2);p=u([f(`${r}-coachmark-header`)],p);const F=":host(c4p-coachmark-body){padding:0 1rem 1rem;display:block}",M=k(F);var A=Object.getOwnPropertyDescriptor,G=(o,a,i,n)=>{for(var e=n>1?void 0:n?A(a,i):a,t=o.length-1,s;t>=0;t--)(s=o[t])&&(e=s(e)||e);return e};let g=class extends v($(y)){render(){return d` <slot></slot> `}};g.styles=M;g=G([f(`${r}-coachmark-body`)],g);const R=".coachmark-body{flex-direction:column;inline-size:290px;display:flex}.coachmark-body h2{font-size:var(--cds-productive-heading-02-font-size,1rem);font-weight:var(--cds-productive-heading-02-font-weight,600);line-height:var(--cds-productive-heading-02-line-height,1.375);letter-spacing:var(--cds-productive-heading-02-letter-spacing,0);margin:0 0 .5rem}.coachmark-body p{font-size:var(--cds-body-long-01-font-size,.875rem);font-weight:var(--cds-body-long-01-font-weight,400);line-height:var(--cds-body-long-01-line-height,1.42857);letter-spacing:var(--cds-body-long-01-letter-spacing,.16px);margin:0 0 .5rem}.coachmark-body cds-button{align-self:flex-end;margin-block-start:.5rem;display:flex}.trigger-btn{margin:.5rem}",C=k(R),D=()=>{document.querySelector("c4p-coachmark")?.toggleAttribute("open")},_=()=>{document.querySelector(`${r}-coachmark`)?.removeAttribute("open")},O=()=>{setTimeout(()=>{document.querySelector(".coachmark-body cds-button")?.focus()},100)},W={top:c.TOP,"top-left":c.TOP_LEFT,"top-right":c.TOP_RIGHT,bottom:c.BOTTOM,"bottom-left":c.BOTTOM_LEFT,"bottom-right":c.BOTTOM_RIGHT,left:c.LEFT,right:c.RIGHT},x={align:c.TOP},T={align:{control:"select",description:"Specify the alignment of the Coachmark relative to its target",options:W}},l={args:{...x,open:!0,highContrast:!0,align:"bottom"},argTypes:T,render:o=>d`
      <style>
        ${C}
      </style>
      <div style="padding-top:200px; position: relative; display: flex;">
        <c4p-coachmark
          .open=${o.open}
          align=${o.align}
          .highContrast=${o.highContrast}
          .position=${{x:150,y:100}}
          @c4p-coachmark-opened=${O}
        >
          <c4p-coachmark-beacon
            label="Show information"
            .expanded=${o.open}
            @c4p-coachmark-beacon-clicked=${D}
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
            <cds-button size="sm" @click=${_}>Done</cds-button>
          </c4p-coachmark-body>
        </c4p-coachmark>
      </div>
    `},h={args:{...x,open:!0,highContrast:!0,align:"bottom"},argTypes:T,render:o=>d`
      <style>
        ${C}
      </style>
      <div style="padding-top:200px; position: relative;">
        <c4p-coachmark
          .open=${o.open}
          align=${o.align}
          .highContrast=${o.highContrast}
          .floating=${!0}
          @c4p-coachmark-opened=${O}
        >
          <cds-button
            kind="tertiary"
            slot="trigger"
            class="trigger-btn"
            @click=${D}
            >Show information ${m(H,{slot:"icon"})}
          </cds-button>
          <c4p-coachmark-header
            closeIconDescription="close icon"
            dragIconDescription="drag icon"
            class="coachmark-header"
          ></c4p-coachmark-header>
          <c4p-coachmark-body class="coachmark-body">
            <h2>Hello World</h2>
            <p>this is a description test</p>
            <cds-button size="sm" @click=${_}>Done</cds-button>
          </c4p-coachmark-body>
        </c4p-coachmark>
      </div>
    `},q={title:"Components/Coachmark"};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...args,
    open: true,
    highContrast: true,
    align: 'bottom'
  },
  argTypes,
  render: args => {
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
            closeIconDescription="close icon"
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
            closeIconDescription="close icon"
            dragIconDescription="drag icon"
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
}`,...h.parameters?.docs?.source}}};const N=["Tooltip","Floating"],co=Object.freeze(Object.defineProperty({__proto__:null,Floating:h,Tooltip:l,__namedExportsOrder:N,default:q},Symbol.toStringTag,{value:"Module"}));export{co as C,h as F,l as T};
