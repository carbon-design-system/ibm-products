import{_ as c,n as a,c as l,p as e,x as r}from"./iframe-DQyJnm4A.js";import{i as d}from"./icon-loader-D1vPuoPv.js";import{s as u,C as p,i as f}from"./actionable-notification-button-NLElTe8l.js";import{N as _}from"./toast-notification-BD934h5E.js";let o=class extends p{constructor(){super(...arguments),this.titleId="",this.kind=_.INFO}_renderIcon(){const{statusIconDescription:i,kind:t}=this,n=f[t];return n?d(n,{class:`${e}--inline-notification__icon`,"aria-label":i||void 0}):void 0}_renderText(){const{subtitle:i,title:t,titleId:n,_type:s}=this;return r`
      <div class="${e}--${s}-notification__text-wrapper">
        <div class="${e}--${s}-notification__content">
          ${t&&r`<div
            class="${e}--${s}-notification__title"
            id="${n}">
            ${t}<slot name="title"></slot>
          </div>`}
          ${i&&r`<div class="${e}--${s}-notification__subtitle">
            ${i}<slot name="subtitle"></slot>
          </div>`}
          <slot></slot>
        </div>
      </div>
    `}_renderButton(){return r``}connectedCallback(){super.connectedCallback(),this.removeAttribute("role")}updated(i){super.updated(i);const t=this.querySelector(this.constructor.selectorActionButton);t&&(t.setAttribute("kind","ghost"),this.titleId&&t.setAttribute("aria-describedby",this.titleId))}};o.styles=u;c([a({type:String,reflect:!0,attribute:"title-id"})],o.prototype,"titleId",void 0);c([a({reflect:!0})],o.prototype,"kind",void 0);o=c([l(`${e}-callout-notification`)],o);
