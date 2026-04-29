import{p as e,x as r,_ as c,n as l,c as d}from"./iframe-Dq7_sE-R.js";import{i as u}from"./icon-loader-DBarA4V3.js";import{N as p}from"./toast-notification-V-aWqDpV.js";import{a as _,i as f,b}from"./actionable-notification-button-Bbr4vpE6.js";var o;let a=(o=class extends _{constructor(...t){super(...t),this.titleId="",this.kind=p.INFO}_renderIcon(){const{statusIconDescription:t,kind:i}=this,n=f[i];return n?u(n,{class:`${e}--inline-notification__icon`,"aria-label":t||void 0}):void 0}_renderText(){const{subtitle:t,title:i,titleId:n,_type:s}=this;return r`
      <div class="${e}--${s}-notification__text-wrapper">
        <div class="${e}--${s}-notification__content">
          ${i&&r`<div
            class="${e}--${s}-notification__title"
            id="${n}">
            ${i}<slot name="title"></slot>
          </div>`}
          ${t&&r`<div class="${e}--${s}-notification__subtitle">
            ${t}<slot name="subtitle"></slot>
          </div>`}
          <slot></slot>
        </div>
      </div>
    `}_renderButton(){return r``}connectedCallback(){super.connectedCallback(),this.removeAttribute("role")}updated(t){super.updated(t);const i=this.querySelector(this.constructor.selectorActionButton);i&&(i.setAttribute("kind","ghost"),this.titleId&&i.setAttribute("aria-describedby",this.titleId))}},o.styles=b,o);c([l({type:String,reflect:!0,attribute:"title-id"})],a.prototype,"titleId",void 0);c([l({reflect:!0})],a.prototype,"kind",void 0);a=c([d(`${e}-callout-notification`)],a);
