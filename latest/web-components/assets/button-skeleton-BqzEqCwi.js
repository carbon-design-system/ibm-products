import{r as E,x as b,_ as f,c as k,p as t,n as x,o}from"./iframe-Dq7_sE-R.js";import{a as m,B as C,b as B}from"./button-CAMQBIDi.js";import{e as y}from"./class-map-lm-sIrT2.js";var r;let p=(r=class extends E{render(){return b`<slot></slot>`}connectedCallback(){super.connectedCallback(),this.setAttribute("role","list")}},r.styles=m,r);p=f([k(`${t}-button-set-base`)],p);var w=p,i;let h=(i=class extends w{constructor(...e){super(...e),this.stacked=!1,this._hideSiblingMargin=()=>{const l=this.shadowRoot?.querySelector("slot");if(!l)return;const s=l.assignedElements().filter(a=>a.tagName.toLowerCase()===`${t}-button`),n=s.findIndex(a=>a.matches(":focus-within"));s.forEach((a,u)=>{const $=n>=0&&(u===n||u===n+1);a.toggleAttribute("hide-margin",$)})}}_handleSlotChange(e){e.target.assignedNodes().filter(s=>s.matches!==void 0?s.matches(this.constructor.selectorItem):!1).forEach((s,n)=>{s.setAttribute("kind",n===0?C.SECONDARY:C.PRIMARY)});const l=new CustomEvent(`${t}-btn-set-update`,{bubbles:!0,cancelable:!0,composed:!0});this.dispatchEvent(l)}connectedCallback(){super.connectedCallback?.(),this.addEventListener("focusin",this._hideSiblingMargin),this.addEventListener("focusout",this._hideSiblingMargin)}render(){const{stacked:e}=this;return b`<slot
      class="${y({[`${t}--btn-set--stacked`]:e,[`${t}--btn-set`]:!0})}"
      part="button-set"
      @slotchange="${this._handleSlotChange}"></slot>`}static get selectorItem(){return`${t}-button`}},i.styles=m,i);f([x({type:Boolean,reflect:!0})],h.prototype,"stacked",void 0);h=f([k(`${t}-button-set`)],h);var L=h,c;let g=(c=class extends B{_handleClickLinkSkeleton(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}render(){const{autofocus:e,disabled:l,download:s,href:n,hreflang:a,ping:u,rel:$,size:d,target:v,type:_}=this,S=y({[`${t}--btn`]:!0,[`${t}--skeleton`]:!0,[`${t}--btn--${d}`]:d,[`${t}--layout--size-${d}`]:d});return n?b`
          <a
            id="button"
            role="button"
            class="${S}"
            download="${o(s)}"
            href="${o(n)}"
            hreflang="${o(a)}"
            ping="${o(u)}"
            rel="${o($)}"
            target="${o(v)}"
            type="${o(_)}"
            @click="${this._handleClickLinkSkeleton}"></a>
        `:b`
          <button
            id="button"
            class="${S}"
            ?autofocus="${e}"
            ?disabled="${l}"
            type="${o(_)}"></button>
        `}},c.styles=m,c);g=f([k(`${t}-button-skeleton`)],g);var N=g;export{w as a,L as b,N as c};
