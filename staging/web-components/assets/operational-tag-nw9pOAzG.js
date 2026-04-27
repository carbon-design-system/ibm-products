import{F as S,p as o,x as c,_ as s,n as l,c as $,r as C}from"./iframe-Etog_1uH.js";import{i as B}from"./icon-loader-2iGE0hUJ.js";import{H as A,a as y}from"./host-listener-DN1-XIwx.js";import"./definition-tooltip-DNxqllHQ.js";import{t as D,T as m,a as x,b as v}from"./tag-z87i5Foa.js";import{a as I}from"./query-D0jTsbLw.js";import{_ as R}from"./16-D5maUdCH.js";import{e as M}from"./class-map-DrB8Nott.js";import{r as w}from"./state-DSNP4DDc.js";var h;let r=(h=class extends A(S(D)){constructor(...e){super(...e),this._handleClick=t=>{if(t.composedPath().indexOf(this._buttonNode)>=0){if(this.disabled)t.stopPropagation();else if(this.open){const i=this._findNextFocusableTag(),a={bubbles:!0,cancelable:!0,composed:!0,detail:{triggeredBy:t.target}};if(this.dispatchEvent(new CustomEvent(this.constructor.eventBeforeClose,a))){if(this.open=!1,i){const d=i._buttonNode;d&&d.focus()}this.dispatchEvent(new CustomEvent(this.constructor.eventClose,a))}}}},this.disabled=!1,this.dismissTooltipAlignment="bottom",this.open=!0,this.size=m.MEDIUM,this.tagTitle="",this.text="",this.type=x.GRAY}_findNextFocusableTag(){let e=this.nextElementSibling;for(;e;){if(e.tagName.toLowerCase()===`${o}-dismissible-tag`&&!e.hasAttribute("disabled")&&e.getAttribute("open")!=="false")return e;e=e.nextElementSibling}return null}_handleAILabelSlotChange({target:e}){const t=e.assignedNodes().filter(i=>i.matches!==void 0?i.matches(this.constructor.aiLabelItem)||i.matches(this.constructor.slugItem):!1);t.length>0&&(t[0].setAttribute("tag",`${this.type}`),t[0].setAttribute("size","sm"),t[0].setAttribute("kind","inline")),this.requestUpdate()}render(){const{disabled:e,_handleAILabelSlotChange:t,_handleIconSlotChange:i,_hasEllipsisApplied:a,size:d,tagTitle:f,text:E,dismissTooltipLabel:k,dismissTooltipAlignment:z}=this,T=`Dismiss "${E}"`,L=k||(a?T:"Dismiss");return c`
      ${d!==m.SMALL?c`<slot name="icon" @slotchange="${i}"></slot>`:""}
      <div class="${o}--interactive--tag-children">
        <span
          title="${f||E}"
          class="${o}--tag__label">
          ${E}
        </span>
        <slot name="decorator" @slotchange="${t}"></slot>
        <slot name="ai-label" @slotchange="${t}"></slot>
        <slot name="slug" @slotchange="${t}"></slot>
        <cds-tooltip align=${z} enter-delay-ms=${0}>
          <button
            class="sb-tooltip-trigger"
            role="button"
            aria-labelledby="content"
            class="${o}--tag__close-icon"
            ?disabled=${e}>
            ${B(R)}
          </button>
          <cds-tooltip-content id="content">
            ${L}
          </cds-tooltip-content>
        </cds-tooltip>
      </div>
    `}static get slugItem(){return`${o}-slug`}static get aiLabelItem(){return`${o}-ai-label`}static get eventBeforeClose(){return`${o}-dismissible-tag-beingclosed`}static get eventClose(){return`${o}-dismissible-tag-closed`}},h.styles=v,h);s([I("button")],r.prototype,"_buttonNode",void 0);s([y("shadowRoot:click")],r.prototype,"_handleClick",void 0);s([l({type:Boolean,reflect:!0})],r.prototype,"disabled",void 0);s([l({type:String,attribute:"dismiss-tooltip-alignment",reflect:!0})],r.prototype,"dismissTooltipAlignment",void 0);s([l({type:String,attribute:"dismiss-tooltip-label",reflect:!0})],r.prototype,"dismissTooltipLabel",void 0);s([l({type:Boolean,reflect:!0})],r.prototype,"open",void 0);s([l({type:String,reflect:!0})],r.prototype,"size",void 0);s([l({type:String,attribute:"tag-title",reflect:!0})],r.prototype,"tagTitle",void 0);s([l({type:String,reflect:!0})],r.prototype,"text",void 0);s([l({reflect:!0})],r.prototype,"type",void 0);r=s([$(`${o}-dismissible-tag`)],r);var g;let _=(g=class extends C{constructor(...e){super(...e),this.size=m.SMALL}render(){return c` <span class="${M({[`${o}--tag`]:!0,[`${o}--skeleton`]:!0,[`${o}--layout--size-${this.size}`]:this.size})}"></span> `}},g.styles=v,g);s([l({reflect:!0,type:String})],_.prototype,"size",void 0);_=s([$(`${o}-tag-skeleton`)],_);var u;let p=(u=class extends A(S(C)){constructor(...e){super(...e),this.triggerEvents=t=>{if(this.disabled)t.stopPropagation();else{const i={bubbles:!0,cancelable:!0,composed:!0,detail:{triggeredBy:t.target}};this.dispatchEvent(new CustomEvent(this.constructor.eventBeforeSelected,i))&&(this.selected=!this.selected,this.dispatchEvent(new CustomEvent(this.constructor.eventSelected,i)))}},this._handleClick=t=>{this.triggerEvents(t)},this._handleKeyDown=t=>{(t.key==="Enter"||t.key===" ")&&this.triggerEvents(t)},this.disabled=!1,this.selected=!1,this.size=m.MEDIUM,this.text="",this._hasEllipsisApplied=!1}async updated(){await this.updateComplete;const e=this.shadowRoot?.querySelector(`${o}-tag`)?.shadowRoot?.querySelector(`.${o}--tag__label`);e&&(this._hasEllipsisApplied=e.scrollWidth>e.clientWidth)}render(){const{disabled:e,selected:t,size:i,text:a,_hasEllipsisApplied:d}=this;return c` ${d?c` <cds-tooltip align="bottom" keyboard-only leave-delay-ms=${0}>
          <cds-tag
            ?aria-pressed="${t}"
            size="${i}"
            ?disabled="${e}">
            <slot name="icon" slot="icon"></slot>
            ${a}
            <slot name="decorator" slot="decorator"></slot>
            <slot name="ai-label" slot="ai-label"></slot>
            <slot name="slug" slot="slug"></slot>
          </cds-tag>
          <cds-tooltip-content id="content"> ${a} </cds-tooltip-content>
        </cds-tooltip>`:c`
          <cds-tag
            ?aria-pressed="${t}"
            size="${i}"
            ?disabled="${e}">
            <slot name="icon" slot="icon"></slot>
            ${a}
            <slot name="decorator" slot="decorator"></slot>
            <slot name="ai-label" slot="ai-label"></slot>
            <slot name="slug" slot="slug"></slot>
          </cds-tag>
        `}`}static get eventBeforeSelected(){return`${o}-selectable-tag-beingselected`}static get eventSelected(){return`${o}-selectable-tag-selected`}},u.styles=v,u);s([y("shadowRoot:click")],p.prototype,"_handleClick",void 0);s([y("shadowRoot:keydown")],p.prototype,"_handleKeyDown",void 0);s([l({type:Boolean,reflect:!0})],p.prototype,"disabled",void 0);s([l({type:Boolean,reflect:!0})],p.prototype,"selected",void 0);s([l({type:String,reflect:!0})],p.prototype,"size",void 0);s([l({type:String,reflect:!0})],p.prototype,"text",void 0);s([w()],p.prototype,"_hasEllipsisApplied",void 0);p=s([$(`${o}-selectable-tag`)],p);var b;let n=(b=class extends A(S(C)){constructor(...e){super(...e),this.triggerEvents=t=>{if(this.disabled)t.stopPropagation();else{const i={bubbles:!0,cancelable:!0,composed:!0,detail:{triggeredBy:t.target}};this.dispatchEvent(new CustomEvent(this.constructor.eventBeforeSelected,i))&&(this.selected=!this.selected,this.dispatchEvent(new CustomEvent(this.constructor.eventSelected,i)))}},this._handleClick=t=>{this.triggerEvents(t)},this._handleKeyDown=t=>{(t.key==="Enter"||t.key===" ")&&this.triggerEvents(t)},this.disabled=!1,this.selected=!1,this.size=m.MEDIUM,this.text="",this.type=x.GRAY,this._hasEllipsisApplied=!1}async updated(){await this.updateComplete;const e=this.shadowRoot?.querySelector(`${o}-tag`)?.shadowRoot?.querySelector(`.${o}--tag__label`);e&&(this._hasEllipsisApplied=e.scrollWidth>e.clientWidth)}render(){const{disabled:e,selected:t,size:i,text:a,type:d,_hasEllipsisApplied:f}=this;return c` ${f?c` <cds-tooltip
          align="bottom"
          keyboard-only
          closeOnActivation
          leave-delay-ms=${0}>
          <cds-tag
            part="tag"
            ?aria-pressed="${t}"
            size="${i}"
            ?disabled="${e}"
            type="${d}">
            <slot name="icon" slot="icon"></slot>
            ${a}
            <slot name="decorator" slot="decorator"></slot>
            <slot name="ai-label" slot="ai-label"></slot>
            <slot name="slug" slot="slug"></slot>
          </cds-tag>
          <cds-tooltip-content id="content"> ${a} </cds-tooltip-content>
        </cds-tooltip>`:c`
          <cds-tag
            part="tag"
            ?aria-pressed="${t}"
            size="${i}"
            ?disabled="${e}"
            type="${d}">
            <slot name="icon" slot="icon"></slot>
            ${a}
            <slot name="decorator" slot="decorator"></slot>
            <slot name="ai-label" slot="ai-label"></slot>
            <slot name="slug" slot="slug"></slot>
          </cds-tag>
        `}`}static get eventBeforeSelected(){return`${o}-operational-tag-beingselected`}static get eventSelected(){return`${o}-operational-tag-selected`}},b.styles=v,b);s([y("shadowRoot:click")],n.prototype,"_handleClick",void 0);s([y("shadowRoot:keydown")],n.prototype,"_handleKeyDown",void 0);s([l({type:Boolean,reflect:!0})],n.prototype,"disabled",void 0);s([l({type:Boolean,reflect:!0})],n.prototype,"selected",void 0);s([l({type:String,reflect:!0})],n.prototype,"size",void 0);s([l({type:String,reflect:!0})],n.prototype,"text",void 0);s([l({reflect:!0})],n.prototype,"type",void 0);s([w()],n.prototype,"_hasEllipsisApplied",void 0);n=s([$(`${o}-operational-tag`)],n);
