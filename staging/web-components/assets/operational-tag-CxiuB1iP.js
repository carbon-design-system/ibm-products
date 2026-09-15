import{F as _,x as c,_ as s,n as i,c as y,r as E}from"./iframe-yrSTpSEu.js";import{i as B}from"./icon-loader-CWnvgjW_.js";import{H as C,a as b}from"./host-listener-DN1-XIwx.js";import"./definition-tooltip-CNvJyaqH.js";import{t as T,a as f}from"./tag-OOAUJ9Xh.js";import{c as S,e as L}from"./class-map-Cs7v0TfJ.js";import{_ as D}from"./16-D5maUdCH.js";import{r as x}from"./state-sbTwPZUI.js";var p;let a=(p=class extends C(_(T)){constructor(...e){super(...e),this._handleClick=t=>{if(t.composedPath().indexOf(this._buttonNode)>=0){if(this.disabled)t.stopPropagation();else if(this.open){const o=this._findNextFocusableTag(),l={bubbles:!0,cancelable:!0,composed:!0,detail:{triggeredBy:t.target}};if(this.dispatchEvent(new CustomEvent(this.constructor.eventBeforeClose,l))){if(this.open=!1,o){const d=o._buttonNode;d&&d.focus()}this.dispatchEvent(new CustomEvent(this.constructor.eventClose,l))}}}},this.disabled=!1,this.dismissTooltipAlignment="bottom",this.open=!0,this.size="md",this.tagTitle="",this.text="",this.type="gray"}_findNextFocusableTag(){let e=this.nextElementSibling;for(;e;){if(e.tagName.toLowerCase()==="cds-dismissible-tag"&&!e.hasAttribute("disabled")&&e.getAttribute("open")!=="false")return e;e=e.nextElementSibling}return null}_handleAILabelSlotChange({target:e}){const t=e.assignedNodes().filter(o=>o.matches!==void 0?o.matches(this.constructor.aiLabelItem)||o.matches(this.constructor.slugItem):!1);t.length>0&&(t[0].setAttribute("tag",`${this.type}`),t[0].setAttribute("size","sm"),t[0].setAttribute("kind","inline")),this.requestUpdate()}render(){const{disabled:e,_handleAILabelSlotChange:t,_handleIconSlotChange:o,_hasEllipsisApplied:l,size:d,tagTitle:m,text:v,dismissTooltipLabel:A,dismissTooltipAlignment:k}=this,w=`Dismiss "${v}"`,z=A||(l?w:"Dismiss");return c`
      ${d!=="sm"?c`<slot name="icon" @slotchange="${o}"></slot>`:""}
      <div class="${"cds"}--interactive--tag-children">
        <span
          title="${m||v}"
          class="${"cds"}--tag__label">
          ${v}
        </span>
        <slot name="decorator" @slotchange="${t}"></slot>
        <slot name="ai-label" @slotchange="${t}"></slot>
        <slot name="slug" @slotchange="${t}"></slot>
        <cds-tooltip align=${k} enter-delay-ms=${0}>
          <button
            class="sb-tooltip-trigger"
            role="button"
            aria-labelledby="content"
            class="${"cds"}--tag__close-icon"
            ?disabled=${e}>
            ${B(D)}
          </button>
          <cds-tooltip-content id="content">
            ${z}
          </cds-tooltip-content>
        </cds-tooltip>
      </div>
    `}static get slugItem(){return"cds-slug"}static get aiLabelItem(){return"cds-ai-label"}static get eventBeforeClose(){return"cds-dismissible-tag-beingclosed"}static get eventClose(){return"cds-dismissible-tag-closed"}},p.styles=f,p);s([S("button")],a.prototype,"_buttonNode",void 0);s([b("shadowRoot:click")],a.prototype,"_handleClick",void 0);s([i({type:Boolean,reflect:!0})],a.prototype,"disabled",void 0);s([i({type:String,attribute:"dismiss-tooltip-alignment",reflect:!0})],a.prototype,"dismissTooltipAlignment",void 0);s([i({type:String,attribute:"dismiss-tooltip-label",reflect:!0})],a.prototype,"dismissTooltipLabel",void 0);s([i({type:Boolean,reflect:!0})],a.prototype,"open",void 0);s([i({type:String,reflect:!0})],a.prototype,"size",void 0);s([i({type:String,attribute:"tag-title",reflect:!0})],a.prototype,"tagTitle",void 0);s([i({type:String,reflect:!0})],a.prototype,"text",void 0);s([i({reflect:!0})],a.prototype,"type",void 0);a=s([y("cds-dismissible-tag")],a);var h;let $=(h=class extends E{constructor(...e){super(...e),this.size="sm"}render(){return c` <span class="${L({"cds--tag":!0,"cds--skeleton":!0,[`cds--layout--size-${this.size}`]:this.size})}"></span> `}},h.styles=f,h);s([i({reflect:!0,type:String})],$.prototype,"size",void 0);$=s([y("cds-tag-skeleton")],$);var g;let r=(g=class extends C(_(E)){constructor(...e){super(...e),this.triggerEvents=t=>{if(this.disabled)t.stopPropagation();else{const o={bubbles:!0,cancelable:!0,composed:!0,detail:{triggeredBy:t.target}};this.dispatchEvent(new CustomEvent(this.constructor.eventBeforeSelected,o))&&(this.selected=!this.selected,this.dispatchEvent(new CustomEvent(this.constructor.eventSelected,o)))}},this._handleClick=t=>{this.triggerEvents(t)},this._handleKeyDown=t=>{(t.key==="Enter"||t.key===" ")&&this.triggerEvents(t)},this.disabled=!1,this.selected=!1,this.size="md",this.text="",this._hasEllipsisApplied=!1}async updated(){await this.updateComplete;const e=this._tag?._textContainer;if(!e)return;const t=e.scrollWidth>e.clientWidth;this._hasEllipsisApplied=t}render(){const{disabled:e,selected:t,size:o,text:l,_hasEllipsisApplied:d}=this;return c` ${d?c` <cds-tooltip align="bottom" keyboard-only leave-delay-ms=${0}>
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
        </cds-tooltip>`:c`
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
        `}`}static get eventBeforeSelected(){return"cds-selectable-tag-beingselected"}static get eventSelected(){return"cds-selectable-tag-selected"}},g.styles=f,g);s([S("cds-tag")],r.prototype,"_tag",void 0);s([b("shadowRoot:click")],r.prototype,"_handleClick",void 0);s([b("shadowRoot:keydown")],r.prototype,"_handleKeyDown",void 0);s([i({type:Boolean,reflect:!0})],r.prototype,"disabled",void 0);s([i({type:Boolean,reflect:!0})],r.prototype,"selected",void 0);s([i({type:String,reflect:!0})],r.prototype,"size",void 0);s([i({type:String,reflect:!0})],r.prototype,"text",void 0);s([x()],r.prototype,"_hasEllipsisApplied",void 0);r=s([y("cds-selectable-tag")],r);var u;let n=(u=class extends C(_(E)){constructor(...e){super(...e),this.triggerEvents=t=>{if(this.disabled)t.stopPropagation();else{const o={bubbles:!0,cancelable:!0,composed:!0,detail:{triggeredBy:t.target}};this.dispatchEvent(new CustomEvent(this.constructor.eventBeforeSelected,o))&&(this.selected=!this.selected,this.dispatchEvent(new CustomEvent(this.constructor.eventSelected,o)))}},this._handleClick=t=>{this.triggerEvents(t)},this._handleKeyDown=t=>{(t.key==="Enter"||t.key===" ")&&this.triggerEvents(t)},this.disabled=!1,this.selected=!1,this.size="md",this.text="",this.type="gray",this._hasEllipsisApplied=!1}async updated(){await this.updateComplete;const e=this._tag?._textContainer;if(!e)return;const t=e.scrollWidth>e.clientWidth;this._hasEllipsisApplied=t}render(){const{disabled:e,selected:t,size:o,text:l,type:d,_hasEllipsisApplied:m}=this;return c` ${m?c` <cds-tooltip
          align="bottom"
          keyboard-only
          closeOnActivation
          leave-delay-ms=${0}>
          <cds-tag
            part="tag"
            ?aria-pressed="${t}"
            size="${o}"
            ?disabled="${e}"
            type="${d}">
            <slot name="icon" slot="icon"></slot>
            ${l}
            <slot name="decorator" slot="decorator"></slot>
            <slot name="ai-label" slot="ai-label"></slot>
            <slot name="slug" slot="slug"></slot>
          </cds-tag>
          <cds-tooltip-content id="content"> ${l} </cds-tooltip-content>
        </cds-tooltip>`:c`
          <cds-tag
            part="tag"
            ?aria-pressed="${t}"
            size="${o}"
            ?disabled="${e}"
            type="${d}">
            <slot name="icon" slot="icon"></slot>
            ${l}
            <slot name="decorator" slot="decorator"></slot>
            <slot name="ai-label" slot="ai-label"></slot>
            <slot name="slug" slot="slug"></slot>
          </cds-tag>
        `}`}static get eventBeforeSelected(){return"cds-operational-tag-beingselected"}static get eventSelected(){return"cds-operational-tag-selected"}},u.styles=f,u);s([S("cds-tag")],n.prototype,"_tag",void 0);s([b("shadowRoot:click")],n.prototype,"_handleClick",void 0);s([b("shadowRoot:keydown")],n.prototype,"_handleKeyDown",void 0);s([i({type:Boolean,reflect:!0})],n.prototype,"disabled",void 0);s([i({type:Boolean,reflect:!0})],n.prototype,"selected",void 0);s([i({type:String,reflect:!0})],n.prototype,"size",void 0);s([i({type:String,reflect:!0})],n.prototype,"text",void 0);s([i({reflect:!0})],n.prototype,"type",void 0);s([x()],n.prototype,"_hasEllipsisApplied",void 0);n=s([y("cds-operational-tag")],n);
