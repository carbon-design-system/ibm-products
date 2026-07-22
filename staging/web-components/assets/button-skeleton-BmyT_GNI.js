import{r as y,x as b,_ as i,c as g,n as E,o as n}from"./iframe-WhcWw8do.js";import{a as m,b as v}from"./button-_YZ9mRAH.js";import{e as $,c as x}from"./class-map-CNCDRts-.js";var a;let f=(a=class extends y{render(){return b`<slot></slot>`}connectedCallback(){super.connectedCallback(),this.setAttribute("role","list")}},a.styles=m,a);f=i([g("cds-button-set-base")],f);var w=f,l;let r=(l=class extends w{constructor(...t){super(...t),this.stacked=!1,this._hideSiblingMargin=()=>{if(!this._slotElement)return;const o=this._slotElement.assignedElements().filter(s=>s.tagName.toLowerCase()==="cds-button"),e=o.findIndex(s=>s.matches(":focus-within"));o.forEach((s,d)=>{const h=e>=0&&(d===e||d===e+1);s.toggleAttribute("hide-margin",h)})}}_handleSlotChange(t){t.target.assignedNodes().filter(e=>e.matches!==void 0?e.matches(this.constructor.selectorItem):!1).forEach((e,s)=>{e.setAttribute("kind",s===0?"secondary":"primary")});const o=new CustomEvent("cds-btn-set-update",{bubbles:!0,cancelable:!0,composed:!0});this.dispatchEvent(o)}connectedCallback(){super.connectedCallback?.(),this.addEventListener("focusin",this._hideSiblingMargin),this.addEventListener("focusout",this._hideSiblingMargin)}render(){const{stacked:t}=this;return b`<slot
      class="${$({"cds--btn-set--stacked":t,"cds--btn-set":!0})}"
      part="button-set"
      @slotchange="${this._handleSlotChange}"></slot>`}static get selectorItem(){return"cds-button"}},l.styles=m,l);i([x("slot")],r.prototype,"_slotElement",void 0);i([E({type:Boolean,reflect:!0})],r.prototype,"stacked",void 0);r=i([g("cds-button-set")],r);var I=r,c;let p=(c=class extends v{_handleClickLinkSkeleton(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}render(){const{autofocus:t,disabled:o,download:e,href:s,hreflang:d,ping:h,rel:C,size:u,target:S,type:k}=this,_=$({"cds--btn":!0,"cds--skeleton":!0,[`cds--btn--${u}`]:u,[`cds--layout--size-${u}`]:u});return s?b`
          <a
            id="button"
            role="button"
            class="${_}"
            download="${n(e)}"
            href="${n(s)}"
            hreflang="${n(d)}"
            ping="${n(h)}"
            rel="${n(C)}"
            target="${n(S)}"
            type="${n(k)}"
            @click="${this._handleClickLinkSkeleton}"></a>
        `:b`
          <button
            id="button"
            class="${_}"
            ?autofocus="${t}"
            ?disabled="${o}"
            type="${n(k)}"></button>
        `}},c.styles=m,c);p=i([g("cds-button-skeleton")],p);var A=p;export{w as a,I as b,A as c};
