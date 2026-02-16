import{k as g,r as b,l as i,E as _,x as d,n as y,c as f}from"./iframe-D_goBqV9.js";import{u as S,c as x}from"./coachmark-beacon-BkMraQ8U.js";import"./button-BiU2GWBy.js";import"./button-skeleton-D_cJh9PI.js";import{H as $}from"./class-map-Cd1_UiXq.js";import{_ as B}from"./16-D5maUdCH.js";import{_ as I,a as q}from"./16-DgEWGJjw.js";import{e as D}from"./index-DjrVbClt.js";import{i as m}from"./icon-loader-wTLyOJdN.js";import{P as n}from"./popover-content-30i-98cd.js";import"./preload-helper-PPVm8Dsz.js";import"./query-D0jTsbLw.js";import"./floating-controller-xHgEX7I-.js";const H=":host(c4p-coachmark-header){justify-content:flex-end;display:flex}:host(c4p-coachmark-header) .c4p--coachmark-header-drag-handle{margin-inline-end:auto}:host(c4p-coachmark-header) .c4p--coachmark-header-drag-icon,:host(c4p-coachmark-header) .c4p--coachmark-header-close-icon{fill:var(--cds-background,#fff)}",L=g(H);var E=Object.defineProperty,P=Object.getOwnPropertyDescriptor,k=(o,t,a,c)=>{for(var e=c>1?void 0:c?P(t,a):t,r=o.length-1,s;r>=0;r--)(s=o[r])&&(e=(c?s(t,a,e):s(e))||e);return c&&e&&E(t,a,e),e};let l=class extends D($(b)){constructor(){super(...arguments),this.closeIconDescription="",this.dragIconDescription="",this._handleClick=()=>{const o=this.closest(`${i}-coachmark`);o&&(o.open=!1),S({name:"open",detail:!1})}}render(){const{floating:o}=x.get();return d`
      ${o?d`
            <cds-button
              kind="ghost"
              size="sm"
              class="${i}--coachmark-header-drag-handle"
              iconDescription="${this.dragIconDescription}"
              hasIconOnly
            >
              ${m(I,{slot:"icon",class:`${i}--coachmark-header-drag-icon`})}
            </cds-button>
          `:_}
      <slot name="header"></slot>
      <cds-button
        kind="ghost"
        size="sm"
        iconDescription="${this.closeIconDescription}"
        hasIconOnly
        @click=${this._handleClick}
      >
        ${m(B,{slot:"icon",class:`${i}--coachmark-header-close-icon`})}
      </cds-button>
    `}};l.styles=L;k([y({reflect:!0})],l.prototype,"closeIconDescription",2);k([y({reflect:!0})],l.prototype,"dragIconDescription",2);l=k([f(`${i}-coachmark-header`)],l);const w=":host(c4p-coachmark-body){padding:0 1rem 1rem;display:block}",z=g(w);var A=Object.getOwnPropertyDescriptor,M=(o,t,a,c)=>{for(var e=c>1?void 0:c?A(t,a):t,r=o.length-1,s;r>=0;r--)(s=o[r])&&(e=s(e)||e);return e};let u=class extends D($(b)){render(){return d` <slot></slot> `}};u.styles=z;u=M([f(`${i}-coachmark-body`)],u);const F=".coachmark-body{flex-direction:column;inline-size:290px;display:flex}.coachmark-body h2{font-size:var(--cds-productive-heading-02-font-size,1rem);font-weight:var(--cds-productive-heading-02-font-weight,600);line-height:var(--cds-productive-heading-02-line-height,1.375);letter-spacing:var(--cds-productive-heading-02-letter-spacing,0);margin:0 0 .5rem}.coachmark-body p{font-size:var(--cds-body-long-01-font-size,.875rem);font-weight:var(--cds-body-long-01-font-weight,400);line-height:var(--cds-body-long-01-line-height,1.42857);letter-spacing:var(--cds-body-long-01-letter-spacing,.16px);margin:0 0 .5rem}.coachmark-body cds-button{align-self:flex-end;margin-block-start:.5rem;display:flex}.trigger-btn{margin:.5rem}",v=g(F),{action:C}=__STORYBOOK_MODULE_ACTIONS__,R={top:n.TOP,"top-left":n.TOP_LEFT,"top-right":n.TOP_RIGHT,bottom:n.BOTTOM,"bottom-left":n.BOTTOM_LEFT,"bottom-right":n.BOTTOM_RIGHT,left:n.LEFT,right:n.RIGHT},T={align:n.TOP},O={align:{control:"select",description:"Specify the alignment of the Coachmark relative to its target",options:R}},h={args:{...T,open:!0,highContrast:!0,align:"bottom"},argTypes:O,render:o=>{const t=()=>{document.querySelector("c4p-coachmark")?.toggleAttribute("open")},a=()=>{C("onDone")("Done button clicked"),document.querySelector("c4p-coachmark")?.removeAttribute("open")},c=()=>{setTimeout(()=>{document.querySelector(".coachmark-body cds-button")?.focus()},100)};return o.open&&setTimeout(()=>{document.querySelector(".coachmark-body cds-button")?.focus()},100),d`
      <style>
        ${v}
      </style>
      <div style="padding-top:200px; position: relative; display: flex;">
        <c4p-coachmark
          .open=${o.open}
          align=${o.align}
          .highContrast=${o.highContrast}
          .position=${{x:150,y:100}}
          @c4p-coachmark-opened=${c}
        >
          <c4p-coachmark-beacon
            label="Show information"
            .expanded=${o.open}
            @c4p-coachmark-beacon-clicked=${t}
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
            <cds-button size="sm" @click=${a}>Done</cds-button>
          </c4p-coachmark-body>
        </c4p-coachmark>
      </div>
    `}},p={args:{...T,open:!0,highContrast:!0,align:"bottom"},argTypes:O,render:o=>{const t=()=>{document.querySelector("c4p-coachmark")?.toggleAttribute("open")},a=()=>{C("onDone")("Done button clicked"),document.querySelector("c4p-coachmark")?.removeAttribute("open")},c=()=>{setTimeout(()=>{document.querySelector(".coachmark-body cds-button")?.focus()},100)};return o.open&&setTimeout(()=>{document.querySelector(".coachmark-body cds-button")?.focus()},100),d`
      <style>
        ${v}
      </style>
      <div style="padding-top:200px; position: relative;">
        <c4p-coachmark
          .open=${o.open}
          align=${o.align}
          .highContrast=${o.highContrast}
          .floating=${!0}
          @c4p-coachmark-opened=${c}
        >
          <cds-button
            kind="tertiary"
            slot="trigger"
            class="trigger-btn"
            @click=${t}
            >Show information ${m(q,{slot:"icon"})}
          </cds-button>
          <c4p-coachmark-header
            closeIconDescription="close icon"
            dragIconDescription="drag icon"
            class="coachmark-header"
          ></c4p-coachmark-header>
          <c4p-coachmark-body class="coachmark-body">
            <h2>Hello World</h2>
            <p>this is a description test</p>
            <cds-button size="sm" @click=${a}>Done</cds-button>
          </c4p-coachmark-body>
        </c4p-coachmark>
      </div>
    `}},eo={title:"Components/Coachmark"};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...args,
    open: true,
    highContrast: true,
    align: 'bottom'
  },
  argTypes,
  render: args => {
    const handleClick = () => {
      const coachmark = document.querySelector('c4p-coachmark');
      coachmark?.toggleAttribute('open');
    };
    const handleDone = () => {
      action('onDone')('Done button clicked');
      document.querySelector('c4p-coachmark')?.removeAttribute('open');
    };

    // Listen for coachmark-opened event to focus the Done button
    const handleCoachmarkOpened = () => {
      setTimeout(() => {
        const doneButton = document.querySelector('.coachmark-body cds-button');
        (doneButton as HTMLElement)?.focus();
      }, 100);
    };

    // Focus Done button on initial render if open
    if (args.open) {
      setTimeout(() => {
        const doneButton = document.querySelector('.coachmark-body cds-button');
        (doneButton as HTMLElement)?.focus();
      }, 100);
    }
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
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...args,
    open: true,
    highContrast: true,
    align: 'bottom'
  },
  argTypes,
  render: (args: any) => {
    const handleClick = () => {
      const coachmark = document.querySelector('c4p-coachmark');
      coachmark?.toggleAttribute('open');
    };
    const handleDone = () => {
      action('onDone')('Done button clicked');
      document.querySelector('c4p-coachmark')?.removeAttribute('open');
    };

    // Listen for coachmark-opened event to focus the Done button
    const handleCoachmarkOpened = () => {
      setTimeout(() => {
        const doneButton = document.querySelector('.coachmark-body cds-button');
        (doneButton as HTMLElement)?.focus();
      }, 100);
    };

    // Focus Done button on initial render if open
    if (args.open) {
      setTimeout(() => {
        const doneButton = document.querySelector('.coachmark-body cds-button');
        (doneButton as HTMLElement)?.focus();
      }, 100);
    }
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
}`,...p.parameters?.docs?.source}}};const to=["Tooltip","Floating"];export{p as Floating,h as Tooltip,to as __namedExportsOrder,eo as default};
