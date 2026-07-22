import{x as n,_ as r,n as a,c as l}from"./iframe-WhcWw8do.js";import{i as d}from"./icon-loader-DZVVdcXA.js";import{a as u,i as _,b as f}from"./actionable-notification-button-P0pzmZDh.js";var e;let c=(e=class extends u{constructor(...t){super(...t),this.titleId="",this.kind="info"}_renderIcon(){const{statusIconDescription:t,kind:i}=this,o=_[i];return o?d(o,{class:"cds--inline-notification__icon","aria-label":t||void 0}):void 0}_renderText(){const{subtitle:t,title:i,titleId:o,_type:s}=this;return n`
      <div class="${"cds"}--${s}-notification__text-wrapper">
        <div class="${"cds"}--${s}-notification__content">
          ${i&&n`<div
            class="${"cds"}--${s}-notification__title"
            id="${o}">
            ${i}<slot name="title"></slot>
          </div>`}
          ${t&&n`<div class="${"cds"}--${s}-notification__subtitle">
            ${t}<slot name="subtitle"></slot>
          </div>`}
          <slot></slot>
        </div>
      </div>
    `}_renderButton(){return n``}connectedCallback(){super.connectedCallback(),this.removeAttribute("role")}updated(t){super.updated(t);const i=this.querySelector(this.constructor.selectorActionButton);i&&(i.setAttribute("kind","ghost"),this.titleId&&i.setAttribute("aria-describedby",this.titleId))}},e.styles=f,e);r([a({type:String,reflect:!0,attribute:"title-id"})],c.prototype,"titleId",void 0);r([a({reflect:!0})],c.prototype,"kind",void 0);c=r([l("cds-callout-notification")],c);
