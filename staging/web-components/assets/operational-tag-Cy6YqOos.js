import{F as x,x as l,_ as s,n as i,c as v,r as I}from"./iframe-B3guWsIT.js";import{i as z}from"./icon-loader-CNAz-s9w.js";import{H as A,a as $}from"./host-listener-kwRZOB_f.js";import"./definition-tooltip-B8WKhSEs.js";import{t as D,a as _}from"./tag-Dy0DmPrF.js";import{c as k,e as L}from"./class-map-CxCm6SdQ.js";import{_ as B}from"./16-D5maUdCH.js";import{r as C}from"./state-Dqk0UdPy.js";var m;let n=(m=class extends A(x(D)){constructor(...t){super(...t),this._handleClick=e=>{if(this._buttonNode&&e.composedPath().indexOf(this._buttonNode)>=0){if(this.disabled)e.stopPropagation();else if(this.open){const o=this._findNextFocusableTag(),a={bubbles:!0,cancelable:!0,composed:!0,detail:{triggeredBy:e.target}};if(this.dispatchEvent(new CustomEvent(this.constructor.eventBeforeClose,a))){if(this.open=!1,o){const c=o._buttonNode;c&&c.focus()}this.dispatchEvent(new CustomEvent(this.constructor.eventClose,a))}}}},this.disabled=!1,this.dismissTooltipAlignment="bottom",this.open=!0,this.size="md",this.tagTitle="",this.text="",this.type="gray"}_findNextFocusableTag(){let t=this.nextElementSibling;for(;t;){if(t.tagName.toLowerCase()==="cds-dismissible-tag"&&!t.hasAttribute("disabled")&&t.getAttribute("open")!=="false")return t;t=t.nextElementSibling}return null}_handleAILabelSlotChange({target:t}){const e=t.assignedNodes().filter(o=>o.matches!==void 0?o.matches(this.constructor.aiLabelItem)||o.matches(this.constructor.slugItem):!1);e.length>0&&(e[0].setAttribute("tag",`${this.type}`),e[0].setAttribute("size","sm"),e[0].setAttribute("kind","inline")),this.requestUpdate()}render(){const{disabled:t,_handleAILabelSlotChange:e,_handleIconSlotChange:o,_hasEllipsisApplied:a,size:c,tagTitle:p,text:h,dismissTooltipLabel:g,dismissTooltipAlignment:u}=this,E=`Dismiss "${h}"`,w=g||(a?E:"Dismiss"),T=l`
      <button
        class="${"cds"}--tag__close-icon"
        ?disabled=${t}
        aria-label="${w}">
        ${z(B)}
      </button>
    `;return l`
      ${c!=="sm"?l`<slot name="icon" @slotchange="${o}"></slot>`:""}
      <div class="${"cds"}--interactive--tag-children">
        <span
          title="${p||h}"
          class="${"cds"}--tag__label">
          ${h}
        </span>
        <slot name="decorator" @slotchange="${e}"></slot>
        <slot name="ai-label" @slotchange="${e}"></slot>
        <slot name="slug" @slotchange="${e}"></slot>
        ${t?T:l`<cds-tooltip
              align=${u}
              enter-delay-ms=${0}>
              <button
                class="sb-tooltip-trigger"
                role="button"
                aria-labelledby="content"
                class="${"cds"}--tag__close-icon">
                ${z(B)}
              </button>
              <cds-tooltip-content id="content">
                ${w}
              </cds-tooltip-content>
            </cds-tooltip>`}
      </div>
    `}static get slugItem(){return"cds-slug"}static get aiLabelItem(){return"cds-ai-label"}static get eventBeforeClose(){return"cds-dismissible-tag-beingclosed"}static get eventClose(){return"cds-dismissible-tag-closed"}},m.styles=_,m);s([k("button")],n.prototype,"_buttonNode",void 0);s([$("shadowRoot:click")],n.prototype,"_handleClick",void 0);s([i({type:Boolean,reflect:!0})],n.prototype,"disabled",void 0);s([i({type:String,attribute:"dismiss-tooltip-alignment",reflect:!0})],n.prototype,"dismissTooltipAlignment",void 0);s([i({type:String,attribute:"dismiss-tooltip-label",reflect:!0})],n.prototype,"dismissTooltipLabel",void 0);s([i({type:Boolean,reflect:!0})],n.prototype,"open",void 0);s([i({type:String,reflect:!0})],n.prototype,"size",void 0);s([i({type:String,attribute:"tag-title",reflect:!0})],n.prototype,"tagTitle",void 0);s([i({type:String,reflect:!0})],n.prototype,"text",void 0);s([i({reflect:!0})],n.prototype,"type",void 0);n=s([v("cds-dismissible-tag")],n);var b;let S=(b=class extends I{constructor(...t){super(...t),this.size="sm"}render(){const t=L({"cds--tag":!0,"cds--skeleton":!0,[`cds--layout--size-${this.size}`]:this.size});return l` <span class="${t}"></span> `}},b.styles=_,b);s([i({reflect:!0,type:String})],S.prototype,"size",void 0);S=s([v("cds-tag-skeleton")],S);var y;let d=(y=class extends A(x(I)){constructor(...t){super(...t),this.triggerEvents=e=>{if(this.disabled)e.stopPropagation();else{const o={bubbles:!0,cancelable:!0,composed:!0,detail:{triggeredBy:e.target}};this.dispatchEvent(new CustomEvent(this.constructor.eventBeforeSelected,o))&&(this.selected=!this.selected,this.dispatchEvent(new CustomEvent(this.constructor.eventSelected,o)))}},this._handleClick=e=>{this.triggerEvents(e)},this._handleKeyDown=e=>{(e.key==="Enter"||e.key===" ")&&this.triggerEvents(e)},this.disabled=!1,this.selected=!1,this.size="md",this.text="",this._hasEllipsisApplied=!1,this._hasCustomIcon=!1}_handleIconSlotChange({target:t}){this._hasCustomIcon=t.assignedNodes().length>0}async updated(){await this.updateComplete;const t=this._tag?._textContainer;if(!t)return;const e=t.scrollWidth>t.clientWidth;this._hasEllipsisApplied=e}render(){const{disabled:t,selected:e,size:o,text:a,_handleIconSlotChange:c,_hasCustomIcon:p,_hasEllipsisApplied:h}=this,g=l`<slot
      name="icon"
      slot="icon"
      @slotchange="${c}"></slot>`,u=l`<slot
      hidden
      name="icon"
      @slotchange="${c}"></slot>`;return l`${p?null:u}
    ${h?l` <cds-tooltip align="bottom" keyboard-only leave-delay-ms=${0}>
          <cds-tag
            ?aria-pressed="${e}"
            size="${o}"
            ?disabled="${t}">
            ${p?g:null} ${a}
            <slot name="decorator" slot="decorator"></slot>
            <slot name="ai-label" slot="ai-label"></slot>
            <slot name="slug" slot="slug"></slot>
          </cds-tag>
          <cds-tooltip-content id="content"> ${a} </cds-tooltip-content>
        </cds-tooltip>`:l`
          <cds-tag
            ?aria-pressed="${e}"
            size="${o}"
            ?disabled="${t}">
            ${p?g:null} ${a}
            <slot name="decorator" slot="decorator"></slot>
            <slot name="ai-label" slot="ai-label"></slot>
            <slot name="slug" slot="slug"></slot>
          </cds-tag>
        `}`}static get eventBeforeSelected(){return"cds-selectable-tag-beingselected"}static get eventSelected(){return"cds-selectable-tag-selected"}},y.styles=_,y);s([k("cds-tag")],d.prototype,"_tag",void 0);s([$("shadowRoot:click")],d.prototype,"_handleClick",void 0);s([$("shadowRoot:keydown")],d.prototype,"_handleKeyDown",void 0);s([i({type:Boolean,reflect:!0})],d.prototype,"disabled",void 0);s([i({type:Boolean,reflect:!0})],d.prototype,"selected",void 0);s([i({type:String,reflect:!0})],d.prototype,"size",void 0);s([i({type:String,reflect:!0})],d.prototype,"text",void 0);s([C()],d.prototype,"_hasEllipsisApplied",void 0);s([C()],d.prototype,"_hasCustomIcon",void 0);d=s([v("cds-selectable-tag")],d);var f;let r=(f=class extends A(x(I)){constructor(...t){super(...t),this.triggerEvents=e=>{if(this.disabled)e.stopPropagation();else{const o={bubbles:!0,cancelable:!0,composed:!0,detail:{triggeredBy:e.target}};this.dispatchEvent(new CustomEvent(this.constructor.eventBeforeSelected,o))&&(this.selected=!this.selected,this.dispatchEvent(new CustomEvent(this.constructor.eventSelected,o)))}},this._handleClick=e=>{this.triggerEvents(e)},this._handleKeyDown=e=>{(e.key==="Enter"||e.key===" ")&&this.triggerEvents(e)},this.disabled=!1,this.selected=!1,this.size="md",this.text="",this.type="gray",this._hasEllipsisApplied=!1,this._hasCustomIcon=!1}_handleIconSlotChange({target:t}){this._hasCustomIcon=t.assignedNodes().length>0}async updated(){await this.updateComplete;const t=this._tag?._textContainer;if(!t)return;const e=t.scrollWidth>t.clientWidth;this._hasEllipsisApplied=e}render(){const{disabled:t,selected:e,size:o,text:a,type:c,_handleIconSlotChange:p,_hasCustomIcon:h,_hasEllipsisApplied:g}=this,u=l`<slot
      name="icon"
      slot="icon"
      @slotchange="${p}"></slot>`,E=l`<slot
      hidden
      name="icon"
      @slotchange="${p}"></slot>`;return l`${h?null:E}
    ${g?l` <cds-tooltip
          align="bottom"
          keyboard-only
          closeOnActivation
          leave-delay-ms=${0}>
          <cds-tag
            part="tag"
            ?aria-pressed="${e}"
            size="${o}"
            ?disabled="${t}"
            type="${c}">
            ${h?u:null} ${a}
            <slot name="decorator" slot="decorator"></slot>
            <slot name="ai-label" slot="ai-label"></slot>
            <slot name="slug" slot="slug"></slot>
          </cds-tag>
          <cds-tooltip-content id="content"> ${a} </cds-tooltip-content>
        </cds-tooltip>`:l`
          <cds-tag
            part="tag"
            ?aria-pressed="${e}"
            size="${o}"
            ?disabled="${t}"
            type="${c}">
            ${h?u:null} ${a}
            <slot name="decorator" slot="decorator"></slot>
            <slot name="ai-label" slot="ai-label"></slot>
            <slot name="slug" slot="slug"></slot>
          </cds-tag>
        `}`}static get eventBeforeSelected(){return"cds-operational-tag-beingselected"}static get eventSelected(){return"cds-operational-tag-selected"}},f.styles=_,f);s([k("cds-tag")],r.prototype,"_tag",void 0);s([$("shadowRoot:click")],r.prototype,"_handleClick",void 0);s([$("shadowRoot:keydown")],r.prototype,"_handleKeyDown",void 0);s([i({type:Boolean,reflect:!0})],r.prototype,"disabled",void 0);s([i({type:Boolean,reflect:!0})],r.prototype,"selected",void 0);s([i({type:String,reflect:!0})],r.prototype,"size",void 0);s([i({type:String,reflect:!0})],r.prototype,"text",void 0);s([i({reflect:!0})],r.prototype,"type",void 0);s([C()],r.prototype,"_hasEllipsisApplied",void 0);s([C()],r.prototype,"_hasCustomIcon",void 0);r=s([v("cds-operational-tag")],r);
