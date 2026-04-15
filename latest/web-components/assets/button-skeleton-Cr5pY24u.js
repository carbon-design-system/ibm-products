import{r as _,x as u,_ as b,c as f,p as e,n as v,o as a}from"./iframe-BSerOd4r.js";import{e as m}from"./class-map-C13EjW-N.js";import{b as S,B as k,C as D}from"./button-BCfvtfcs.js";let d=class extends _{render(){return u`<slot></slot>`}connectedCallback(){super.connectedCallback(),this.setAttribute("role","list")}};d.styles=S;d=b([f(`${e}-button-set-base`)],d);var y=d;let r=class extends y{constructor(){super(...arguments),this.stacked=!1,this._hideSiblingMargin=()=>{var t;const l=(t=this.shadowRoot)===null||t===void 0?void 0:t.querySelector("slot");if(!l)return;const o=l.assignedElements().filter(n=>n.tagName.toLowerCase()===`${e}-button`),s=o.findIndex(n=>n.matches(":focus-within"));o.forEach((n,i)=>{const $=s>=0&&(i===s||i===s+1);n.toggleAttribute("hide-margin",$)})}}_handleSlotChange(t){t.target.assignedNodes().filter(s=>s.matches!==void 0?s.matches(this.constructor.selectorItem):!1).forEach((s,n)=>{s.setAttribute("kind",n===0?k.SECONDARY:k.PRIMARY)});const o=new CustomEvent(`${e}-btn-set-update`,{bubbles:!0,cancelable:!0,composed:!0});this.dispatchEvent(o)}connectedCallback(){var t;(t=super.connectedCallback)===null||t===void 0||t.call(this),this.addEventListener("focusin",this._hideSiblingMargin),this.addEventListener("focusout",this._hideSiblingMargin)}render(){const{stacked:t}=this,l={[`${e}--btn-set--stacked`]:t,[`${e}--btn-set`]:!0},o=m(l);return u`<slot class="${o} part="button-set" @slotchange="${this._handleSlotChange}"></slot>`}static get selectorItem(){return`${e}-button`}};r.styles=S;b([v({type:Boolean,reflect:!0})],r.prototype,"stacked",void 0);r=b([f(`${e}-button-set`)],r);var L=r;let h=class extends D{_handleClickLinkSkeleton(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}render(){const{autofocus:t,disabled:l,download:o,href:s,hreflang:n,ping:i,rel:$,size:c,target:B,type:p}=this,C=m({[`${e}--btn`]:!0,[`${e}--skeleton`]:!0,[`${e}--btn--${c}`]:c,[`${e}--layout--size-${c}`]:c});return s?u`
          <a
            id="button"
            role="button"
            class="${C}"
            download="${a(o)}"
            href="${a(s)}"
            hreflang="${a(n)}"
            ping="${a(i)}"
            rel="${a($)}"
            target="${a(B)}"
            type="${a(p)}"
            @click="${this._handleClickLinkSkeleton}"></a>
        `:u`
          <button
            id="button"
            class="${C}"
            ?autofocus="${t}"
            ?disabled="${l}"
            type="${a(p)}"></button>
        `}};h.styles=S;h=b([f(`${e}-button-skeleton`)],h);var M=h;export{L as C,y as a,M as b};
