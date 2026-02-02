import{F as f,p as o,x as p,_ as s,n as a,c as m,r as _}from"./iframe-CPwma648.js";import{a as k}from"./query-DAIS6qJ0.js";import{i as D}from"./icon-loader-Bb4ppSSv.js";import{_ as z}from"./16-D5maUdCH.js";import{H as S,b as g,e as L}from"./class-map-BjEbJ_wj.js";import{C as B,T as h,a as E,s as y}from"./tag-D_6alxd0.js";import"./definition-tooltip-BoMZIf0Z.js";import{r as C}from"./state-BZ954teF.js";/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */let n=class extends S(f(B)){constructor(){super(...arguments),this._handleClick=t=>{if(t.composedPath().indexOf(this._buttonNode)>=0){if(this.disabled)t.stopPropagation();else if(this.open){const e=this._findNextFocusableTag(),i={bubbles:!0,cancelable:!0,composed:!0,detail:{triggeredBy:t.target}};if(this.dispatchEvent(new CustomEvent(this.constructor.eventBeforeClose,i))){if(this.open=!1,e){const l=e._buttonNode;l&&l.focus()}this.dispatchEvent(new CustomEvent(this.constructor.eventClose,i))}}}},this.disabled=!1,this.dismissTooltipAlignment="bottom",this.open=!0,this.size=h.MEDIUM,this.tagTitle="",this.text="",this.type=E.GRAY}_findNextFocusableTag(){let t=this.nextElementSibling;for(;t;){if(t.tagName.toLowerCase()===`${o}-dismissible-tag`&&!t.hasAttribute("disabled")&&t.getAttribute("open")!=="false")return t;t=t.nextElementSibling}return null}_handleAILabelSlotChange({target:t}){const e=t.assignedNodes().filter(i=>i.matches!==void 0?i.matches(this.constructor.aiLabelItem)||i.matches(this.constructor.slugItem):!1);e.length>0&&(e[0].setAttribute("tag",`${this.type}`),e[0].setAttribute("size","sm"),e[0].setAttribute("kind","inline")),this.requestUpdate()}render(){const{disabled:t,_handleAILabelSlotChange:e,_handleIconSlotChange:i,_hasEllipsisApplied:l,size:d,tagTitle:u,text:$,dismissTooltipLabel:A,dismissTooltipAlignment:x}=this,w=`Dismiss "${$}"`,T=A||(l?w:"Dismiss");return p`
      ${d!==h.SMALL?p`<slot name="icon" @slotchange="${i}"></slot>`:""}
      <div class="${o}--interactive--tag-children">
        <span
          title="${u||$}"
          class="${o}--tag__label">
          ${$}
        </span>
        <slot name="decorator" @slotchange="${e}"></slot>
        <slot name="ai-label" @slotchange="${e}"></slot>
        <slot name="slug" @slotchange="${e}"></slot>
        <cds-tooltip align=${x} enter-delay-ms=${0}>
          <button
            class="sb-tooltip-trigger"
            role="button"
            aria-labelledby="content"
            class="${o}--tag__close-icon"
            ?disabled=${t}>
            ${D(z)}
          </button>
          <cds-tooltip-content id="content">
            ${T}
          </cds-tooltip-content>
        </cds-tooltip>
      </div>
    `}static get slugItem(){return`${o}-slug`}static get aiLabelItem(){return`${o}-ai-label`}static get eventBeforeClose(){return`${o}-dismissible-tag-beingclosed`}static get eventClose(){return`${o}-dismissible-tag-closed`}};n.styles=y;s([k("button")],n.prototype,"_buttonNode",void 0);s([g("shadowRoot:click")],n.prototype,"_handleClick",void 0);s([a({type:Boolean,reflect:!0})],n.prototype,"disabled",void 0);s([a({type:String,attribute:"dismiss-tooltip-alignment",reflect:!0})],n.prototype,"dismissTooltipAlignment",void 0);s([a({type:String,attribute:"dismiss-tooltip-label",reflect:!0})],n.prototype,"dismissTooltipLabel",void 0);s([a({type:Boolean,reflect:!0})],n.prototype,"open",void 0);s([a({type:String,reflect:!0})],n.prototype,"size",void 0);s([a({type:String,attribute:"tag-title",reflect:!0})],n.prototype,"tagTitle",void 0);s([a({type:String,reflect:!0})],n.prototype,"text",void 0);s([a({reflect:!0})],n.prototype,"type",void 0);n=s([m(`${o}-dismissible-tag`)],n);/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */let b=class extends _{constructor(){super(...arguments),this.size=h.SMALL}render(){const t=L({[`${o}--tag`]:!0,[`${o}--skeleton`]:!0,[`${o}--layout--size-${this.size}`]:this.size});return p` <span class="${t}"></span> `}};b.styles=y;s([a({reflect:!0,type:String})],b.prototype,"size",void 0);b=s([m(`${o}-tag-skeleton`)],b);/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */let c=class extends S(f(_)){constructor(){super(...arguments),this.triggerEvents=t=>{if(this.disabled)t.stopPropagation();else{const e={bubbles:!0,cancelable:!0,composed:!0,detail:{triggeredBy:t.target}};this.dispatchEvent(new CustomEvent(this.constructor.eventBeforeSelected,e))&&(this.selected=!this.selected,this.dispatchEvent(new CustomEvent(this.constructor.eventSelected,e)))}},this._handleClick=t=>{this.triggerEvents(t)},this._handleKeyDown=t=>{(t.key==="Enter"||t.key===" ")&&this.triggerEvents(t)},this.disabled=!1,this.selected=!1,this.size=h.MEDIUM,this.text="",this._hasEllipsisApplied=!1}async updated(){var t,e,i;await this.updateComplete;const l=(i=(e=(t=this.shadowRoot)===null||t===void 0?void 0:t.querySelector(`${o}-tag`))===null||e===void 0?void 0:e.shadowRoot)===null||i===void 0?void 0:i.querySelector(`.${o}--tag__label`);if(!l)return;const d=l.scrollWidth>l.clientWidth;this._hasEllipsisApplied=d}render(){const{disabled:t,selected:e,size:i,text:l,_hasEllipsisApplied:d}=this;return p` ${d?p` <cds-tooltip align="bottom" keyboard-only leave-delay-ms=${0}>
          <cds-tag
            ?aria-pressed="${e}"
            size="${i}"
            ?disabled="${t}">
            <slot name="icon" slot="icon"></slot>
            ${l}
            <slot name="decorator" slot="decorator"></slot>
            <slot name="ai-label" slot="ai-label"></slot>
            <slot name="slug" slot="slug"></slot>
          </cds-tag>
          <cds-tooltip-content id="content"> ${l} </cds-tooltip-content>
        </cds-tooltip>`:p`
          <cds-tag
            ?aria-pressed="${e}"
            size="${i}"
            ?disabled="${t}">
            <slot name="icon" slot="icon"></slot>
            ${l}
            <slot name="decorator" slot="decorator"></slot>
            <slot name="ai-label" slot="ai-label"></slot>
            <slot name="slug" slot="slug"></slot>
          </cds-tag>
        `}`}static get eventBeforeSelected(){return`${o}-selectable-tag-beingselected`}static get eventSelected(){return`${o}-selectable-tag-selected`}};c.styles=y;s([g("shadowRoot:click")],c.prototype,"_handleClick",void 0);s([g("shadowRoot:keydown")],c.prototype,"_handleKeyDown",void 0);s([a({type:Boolean,reflect:!0})],c.prototype,"disabled",void 0);s([a({type:Boolean,reflect:!0})],c.prototype,"selected",void 0);s([a({type:String,reflect:!0})],c.prototype,"size",void 0);s([a({type:String,reflect:!0})],c.prototype,"text",void 0);s([C()],c.prototype,"_hasEllipsisApplied",void 0);c=s([m(`${o}-selectable-tag`)],c);/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */let r=class extends S(f(_)){constructor(){super(...arguments),this.triggerEvents=t=>{if(this.disabled)t.stopPropagation();else{const e={bubbles:!0,cancelable:!0,composed:!0,detail:{triggeredBy:t.target}};this.dispatchEvent(new CustomEvent(this.constructor.eventBeforeSelected,e))&&(this.selected=!this.selected,this.dispatchEvent(new CustomEvent(this.constructor.eventSelected,e)))}},this._handleClick=t=>{this.triggerEvents(t)},this._handleKeyDown=t=>{(t.key==="Enter"||t.key===" ")&&this.triggerEvents(t)},this.disabled=!1,this.selected=!1,this.size=h.MEDIUM,this.text="",this.type=E.GRAY,this._hasEllipsisApplied=!1}async updated(){var t,e,i;await this.updateComplete;const l=(i=(e=(t=this.shadowRoot)===null||t===void 0?void 0:t.querySelector(`${o}-tag`))===null||e===void 0?void 0:e.shadowRoot)===null||i===void 0?void 0:i.querySelector(`.${o}--tag__label`);if(!l)return;const d=l.scrollWidth>l.clientWidth;this._hasEllipsisApplied=d}render(){const{disabled:t,selected:e,size:i,text:l,type:d,_hasEllipsisApplied:u}=this;return p` ${u?p` <cds-tooltip
          align="bottom"
          keyboard-only
          closeOnActivation
          leave-delay-ms=${0}>
          <cds-tag
            part="tag"
            ?aria-pressed="${e}"
            size="${i}"
            ?disabled="${t}"
            type="${d}">
            <slot name="icon" slot="icon"></slot>
            ${l}
            <slot name="decorator" slot="decorator"></slot>
            <slot name="ai-label" slot="ai-label"></slot>
            <slot name="slug" slot="slug"></slot>
          </cds-tag>
          <cds-tooltip-content id="content"> ${l} </cds-tooltip-content>
        </cds-tooltip>`:p`
          <cds-tag
            part="tag"
            ?aria-pressed="${e}"
            size="${i}"
            ?disabled="${t}"
            type="${d}">
            <slot name="icon" slot="icon"></slot>
            ${l}
            <slot name="decorator" slot="decorator"></slot>
            <slot name="ai-label" slot="ai-label"></slot>
            <slot name="slug" slot="slug"></slot>
          </cds-tag>
        `}`}static get eventBeforeSelected(){return`${o}-operational-tag-beingselected`}static get eventSelected(){return`${o}-operational-tag-selected`}};r.styles=y;s([g("shadowRoot:click")],r.prototype,"_handleClick",void 0);s([g("shadowRoot:keydown")],r.prototype,"_handleKeyDown",void 0);s([a({type:Boolean,reflect:!0})],r.prototype,"disabled",void 0);s([a({type:Boolean,reflect:!0})],r.prototype,"selected",void 0);s([a({type:String,reflect:!0})],r.prototype,"size",void 0);s([a({type:String,reflect:!0})],r.prototype,"text",void 0);s([a({reflect:!0})],r.prototype,"type",void 0);s([C()],r.prototype,"_hasEllipsisApplied",void 0);r=s([m(`${o}-operational-tag`)],r);
