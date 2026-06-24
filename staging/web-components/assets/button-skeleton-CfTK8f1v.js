import{r as y,x as u,_ as h,c as k,n as v,o as n}from"./iframe-B8AK9roo.js";import{a as m,b as E}from"./button-DruO1jNF.js";import{e as S}from"./class-map-As6Et5mH.js";var c;let g=(c=class extends y{render(){return u`<slot></slot>`}connectedCallback(){super.connectedCallback(),this.setAttribute("role","list")}},c.styles=m,c);g=h([k("cds-button-set-base")],g);var w=g,l;let b=(l=class extends w{constructor(...t){super(...t),this.stacked=!1,this._hideSiblingMargin=()=>{const a=this.shadowRoot?.querySelector("slot");if(!a)return;const e=a.assignedElements().filter(o=>o.tagName.toLowerCase()==="cds-button"),s=e.findIndex(o=>o.matches(":focus-within"));e.forEach((o,i)=>{const f=s>=0&&(i===s||i===s+1);o.toggleAttribute("hide-margin",f)})}}_handleSlotChange(t){t.target.assignedNodes().filter(e=>e.matches!==void 0?e.matches(this.constructor.selectorItem):!1).forEach((e,s)=>{e.setAttribute("kind",s===0?"secondary":"primary")});const a=new CustomEvent("cds-btn-set-update",{bubbles:!0,cancelable:!0,composed:!0});this.dispatchEvent(a)}connectedCallback(){super.connectedCallback?.(),this.addEventListener("focusin",this._hideSiblingMargin),this.addEventListener("focusout",this._hideSiblingMargin)}render(){const{stacked:t}=this;return u`<slot
      class="${S({"cds--btn-set--stacked":t,"cds--btn-set":!0})}"
      part="button-set"
      @slotchange="${this._handleSlotChange}"></slot>`}static get selectorItem(){return"cds-button"}},l.styles=m,l);h([v({type:Boolean,reflect:!0})],b.prototype,"stacked",void 0);b=h([k("cds-button-set")],b);var D=b,r;let p=(r=class extends E{_handleClickLinkSkeleton(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}render(){const{autofocus:t,disabled:a,download:e,href:s,hreflang:o,ping:i,rel:f,size:d,target:C,type:$}=this,_=S({"cds--btn":!0,"cds--skeleton":!0,[`cds--btn--${d}`]:d,[`cds--layout--size-${d}`]:d});return s?u`
          <a
            id="button"
            role="button"
            class="${_}"
            download="${n(e)}"
            href="${n(s)}"
            hreflang="${n(o)}"
            ping="${n(i)}"
            rel="${n(f)}"
            target="${n(C)}"
            type="${n($)}"
            @click="${this._handleClickLinkSkeleton}"></a>
        `:u`
          <button
            id="button"
            class="${_}"
            ?autofocus="${t}"
            ?disabled="${a}"
            type="${n($)}"></button>
        `}},r.styles=m,r);p=h([k("cds-button-skeleton")],p);var I=p;export{w as a,D as b,I as c};
