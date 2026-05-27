import{F as _,x as d,_ as s,n as i,c as y,r as E}from"./iframe-fG77Yubj.js";import{i as z}from"./icon-loader-DDhdgHD4.js";import{H as S,a as b}from"./host-listener-DN1-XIwx.js";import"./definition-tooltip-5JiOW5Jr.js";import{t as B,a as f}from"./tag-6s63PvM7.js";import{a as T}from"./query-D0jTsbLw.js";import{_ as L}from"./16-D5maUdCH.js";import{e as D}from"./class-map-DqzJUOym.js";import{r as C}from"./state-KqMWkLUD.js";var p;let a=(p=class extends S(_(B)){constructor(...e){super(...e),this._handleClick=t=>{if(t.composedPath().indexOf(this._buttonNode)>=0){if(this.disabled)t.stopPropagation();else if(this.open){const o=this._findNextFocusableTag(),l={bubbles:!0,cancelable:!0,composed:!0,detail:{triggeredBy:t.target}};if(this.dispatchEvent(new CustomEvent(this.constructor.eventBeforeClose,l))){if(this.open=!1,o){const n=o._buttonNode;n&&n.focus()}this.dispatchEvent(new CustomEvent(this.constructor.eventClose,l))}}}},this.disabled=!1,this.dismissTooltipAlignment="bottom",this.open=!0,this.size="md",this.tagTitle="",this.text="",this.type="gray"}_findNextFocusableTag(){let e=this.nextElementSibling;for(;e;){if(e.tagName.toLowerCase()==="cds-dismissible-tag"&&!e.hasAttribute("disabled")&&e.getAttribute("open")!=="false")return e;e=e.nextElementSibling}return null}_handleAILabelSlotChange({target:e}){const t=e.assignedNodes().filter(o=>o.matches!==void 0?o.matches(this.constructor.aiLabelItem)||o.matches(this.constructor.slugItem):!1);t.length>0&&(t[0].setAttribute("tag",`${this.type}`),t[0].setAttribute("size","sm"),t[0].setAttribute("kind","inline")),this.requestUpdate()}render(){const{disabled:e,_handleAILabelSlotChange:t,_handleIconSlotChange:o,_hasEllipsisApplied:l,size:n,tagTitle:m,text:v,dismissTooltipLabel:x,dismissTooltipAlignment:w}=this,A=`Dismiss "${v}"`,k=x||(l?A:"Dismiss");return d`
      ${n!=="sm"?d`<slot name="icon" @slotchange="${o}"></slot>`:""}
      <div class="${"cds"}--interactive--tag-children">
        <span
          title="${m||v}"
          class="${"cds"}--tag__label">
          ${v}
        </span>
        <slot name="decorator" @slotchange="${t}"></slot>
        <slot name="ai-label" @slotchange="${t}"></slot>
        <slot name="slug" @slotchange="${t}"></slot>
        <cds-tooltip align=${w} enter-delay-ms=${0}>
          <button
            class="sb-tooltip-trigger"
            role="button"
            aria-labelledby="content"
            class="${"cds"}--tag__close-icon"
            ?disabled=${e}>
            ${z(L)}
          </button>
          <cds-tooltip-content id="content">
            ${k}
          </cds-tooltip-content>
        </cds-tooltip>
      </div>
    `}static get slugItem(){return"cds-slug"}static get aiLabelItem(){return"cds-ai-label"}static get eventBeforeClose(){return"cds-dismissible-tag-beingclosed"}static get eventClose(){return"cds-dismissible-tag-closed"}},p.styles=f,p);s([T("button")],a.prototype,"_buttonNode",void 0);s([b("shadowRoot:click")],a.prototype,"_handleClick",void 0);s([i({type:Boolean,reflect:!0})],a.prototype,"disabled",void 0);s([i({type:String,attribute:"dismiss-tooltip-alignment",reflect:!0})],a.prototype,"dismissTooltipAlignment",void 0);s([i({type:String,attribute:"dismiss-tooltip-label",reflect:!0})],a.prototype,"dismissTooltipLabel",void 0);s([i({type:Boolean,reflect:!0})],a.prototype,"open",void 0);s([i({type:String,reflect:!0})],a.prototype,"size",void 0);s([i({type:String,attribute:"tag-title",reflect:!0})],a.prototype,"tagTitle",void 0);s([i({type:String,reflect:!0})],a.prototype,"text",void 0);s([i({reflect:!0})],a.prototype,"type",void 0);a=s([y("cds-dismissible-tag")],a);var h;let $=(h=class extends E{constructor(...e){super(...e),this.size="sm"}render(){return d` <span class="${D({"cds--tag":!0,"cds--skeleton":!0,[`cds--layout--size-${this.size}`]:this.size})}"></span> `}},h.styles=f,h);s([i({reflect:!0,type:String})],$.prototype,"size",void 0);$=s([y("cds-tag-skeleton")],$);var g;let c=(g=class extends S(_(E)){constructor(...e){super(...e),this.triggerEvents=t=>{if(this.disabled)t.stopPropagation();else{const o={bubbles:!0,cancelable:!0,composed:!0,detail:{triggeredBy:t.target}};this.dispatchEvent(new CustomEvent(this.constructor.eventBeforeSelected,o))&&(this.selected=!this.selected,this.dispatchEvent(new CustomEvent(this.constructor.eventSelected,o)))}},this._handleClick=t=>{this.triggerEvents(t)},this._handleKeyDown=t=>{(t.key==="Enter"||t.key===" ")&&this.triggerEvents(t)},this.disabled=!1,this.selected=!1,this.size="md",this.text="",this._hasEllipsisApplied=!1}async updated(){await this.updateComplete;const e=this.shadowRoot?.querySelector("cds-tag")?.shadowRoot?.querySelector(".cds--tag__label");if(!e)return;const t=e.scrollWidth>e.clientWidth;this._hasEllipsisApplied=t}render(){const{disabled:e,selected:t,size:o,text:l,_hasEllipsisApplied:n}=this;return d` ${n?d` <cds-tooltip align="bottom" keyboard-only leave-delay-ms=${0}>
          <cds-tag
            ?aria-pressed="${t}"
            size="${o}"
            ?disabled="${e}">
            <slot name="icon" slot="icon"></slot>
            ${l}
            <slot name="decorator" slot="decorator"></slot>
            <slot name="ai-label" slot="ai-label"></slot>
            <slot name="slug" slot="slug"></slot>
          </cds-tag>
          <cds-tooltip-content id="content"> ${l} </cds-tooltip-content>
        </cds-tooltip>`:d`
          <cds-tag
            ?aria-pressed="${t}"
            size="${o}"
            ?disabled="${e}">
            <slot name="icon" slot="icon"></slot>
            ${l}
            <slot name="decorator" slot="decorator"></slot>
            <slot name="ai-label" slot="ai-label"></slot>
            <slot name="slug" slot="slug"></slot>
          </cds-tag>
        `}`}static get eventBeforeSelected(){return"cds-selectable-tag-beingselected"}static get eventSelected(){return"cds-selectable-tag-selected"}},g.styles=f,g);s([b("shadowRoot:click")],c.prototype,"_handleClick",void 0);s([b("shadowRoot:keydown")],c.prototype,"_handleKeyDown",void 0);s([i({type:Boolean,reflect:!0})],c.prototype,"disabled",void 0);s([i({type:Boolean,reflect:!0})],c.prototype,"selected",void 0);s([i({type:String,reflect:!0})],c.prototype,"size",void 0);s([i({type:String,reflect:!0})],c.prototype,"text",void 0);s([C()],c.prototype,"_hasEllipsisApplied",void 0);c=s([y("cds-selectable-tag")],c);var u;let r=(u=class extends S(_(E)){constructor(...e){super(...e),this.triggerEvents=t=>{if(this.disabled)t.stopPropagation();else{const o={bubbles:!0,cancelable:!0,composed:!0,detail:{triggeredBy:t.target}};this.dispatchEvent(new CustomEvent(this.constructor.eventBeforeSelected,o))&&(this.selected=!this.selected,this.dispatchEvent(new CustomEvent(this.constructor.eventSelected,o)))}},this._handleClick=t=>{this.triggerEvents(t)},this._handleKeyDown=t=>{(t.key==="Enter"||t.key===" ")&&this.triggerEvents(t)},this.disabled=!1,this.selected=!1,this.size="md",this.text="",this.type="gray",this._hasEllipsisApplied=!1}async updated(){await this.updateComplete;const e=this.shadowRoot?.querySelector("cds-tag")?.shadowRoot?.querySelector(".cds--tag__label");if(!e)return;const t=e.scrollWidth>e.clientWidth;this._hasEllipsisApplied=t}render(){const{disabled:e,selected:t,size:o,text:l,type:n,_hasEllipsisApplied:m}=this;return d` ${m?d` <cds-tooltip
          align="bottom"
          keyboard-only
          closeOnActivation
          leave-delay-ms=${0}>
          <cds-tag
            part="tag"
            ?aria-pressed="${t}"
            size="${o}"
            ?disabled="${e}"
            type="${n}">
            <slot name="icon" slot="icon"></slot>
            ${l}
            <slot name="decorator" slot="decorator"></slot>
            <slot name="ai-label" slot="ai-label"></slot>
            <slot name="slug" slot="slug"></slot>
          </cds-tag>
          <cds-tooltip-content id="content"> ${l} </cds-tooltip-content>
        </cds-tooltip>`:d`
          <cds-tag
            part="tag"
            ?aria-pressed="${t}"
            size="${o}"
            ?disabled="${e}"
            type="${n}">
            <slot name="icon" slot="icon"></slot>
            ${l}
            <slot name="decorator" slot="decorator"></slot>
            <slot name="ai-label" slot="ai-label"></slot>
            <slot name="slug" slot="slug"></slot>
          </cds-tag>
        `}`}static get eventBeforeSelected(){return"cds-operational-tag-beingselected"}static get eventSelected(){return"cds-operational-tag-selected"}},u.styles=f,u);s([b("shadowRoot:click")],r.prototype,"_handleClick",void 0);s([b("shadowRoot:keydown")],r.prototype,"_handleKeyDown",void 0);s([i({type:Boolean,reflect:!0})],r.prototype,"disabled",void 0);s([i({type:Boolean,reflect:!0})],r.prototype,"selected",void 0);s([i({type:String,reflect:!0})],r.prototype,"size",void 0);s([i({type:String,reflect:!0})],r.prototype,"text",void 0);s([i({reflect:!0})],r.prototype,"type",void 0);s([C()],r.prototype,"_hasEllipsisApplied",void 0);r=s([y("cds-operational-tag")],r);
