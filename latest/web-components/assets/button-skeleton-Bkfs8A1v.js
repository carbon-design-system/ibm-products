import{r as v,x as c,_ as h,c as $,p as s,n as D,o as a}from"./iframe-CRtCEvHj.js";import{e as m}from"./class-map-BDBYr7ko.js";import{b as S,B as k,C as _}from"./button-BPrzbWFT.js";let d=class extends v{render(){return c`<slot></slot>`}connectedCallback(){super.connectedCallback(),this.setAttribute("role","list")}};d.styles=S;d=h([$(`${s}-button-set-base`)],d);var y=d;let r=class extends y{constructor(){super(...arguments),this.stacked=!1,this._hideSiblingMargin=()=>{var t;const l=(t=this.shadowRoot)===null||t===void 0?void 0:t.querySelector("slot");if(!l)return;const o=l.assignedElements().filter(n=>n.tagName.toLowerCase()===`${s}-button`),e=o.findIndex(n=>n.matches(":focus-within"));o.forEach((n,i)=>{const b=e>=0&&(i===e||i===e+1);n.toggleAttribute("hide-margin",b)})}}_handleSlotChange(t){t.target.assignedNodes().filter(e=>e.matches!==void 0?e.matches(this.constructor.selectorItem):!1).forEach((e,n)=>{e.setAttribute("kind",n===0?k.SECONDARY:k.PRIMARY)});const o=new CustomEvent(`${s}-btn-set-update`,{bubbles:!0,cancelable:!0,composed:!0});this.dispatchEvent(o)}connectedCallback(){var t;(t=super.connectedCallback)===null||t===void 0||t.call(this),this.addEventListener("focusin",this._hideSiblingMargin),this.addEventListener("focusout",this._hideSiblingMargin)}render(){const{stacked:t}=this,l={[`${s}--btn-set--stacked`]:t,[`${s}--btn-set`]:!0},o=m(l);return c`<slot class="${o} @slotchange="${this._handleSlotChange}"></slot>`}static get selectorItem(){return`${s}-button`}};r.styles=S;h([D({type:Boolean,reflect:!0})],r.prototype,"stacked",void 0);r=h([$(`${s}-button-set`)],r);var L=r;let u=class extends _{_handleClickLinkSkeleton(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}render(){const{autofocus:t,disabled:l,download:o,href:e,hreflang:n,ping:i,rel:b,size:g,target:B,type:p}=this,C=m({[`${s}--btn`]:!0,[`${s}--skeleton`]:!0,[`${s}--btn--${g}`]:g});return e?c`
          <a
            id="button"
            role="button"
            class="${C}"
            download="${a(o)}"
            href="${a(e)}"
            hreflang="${a(n)}"
            ping="${a(i)}"
            rel="${a(b)}"
            target="${a(B)}"
            type="${a(p)}"
            @click="${this._handleClickLinkSkeleton}"></a>
        `:c`
          <button
            id="button"
            class="${C}"
            ?autofocus="${t}"
            ?disabled="${l}"
            type="${a(p)}"></button>
        `}};u.styles=S;u=h([$(`${s}-button-skeleton`)],u);var M=u;export{L as C,y as a,M as b};
