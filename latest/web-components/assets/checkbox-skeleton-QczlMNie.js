import{r as g,x as b,_ as t,n as a,c as m}from"./iframe-BznCWkpD.js";import{i as k}from"./icon-loader-hqfehaN5.js";import{c as _}from"./checkbox-BhSZXFkB.js";import{e as A}from"./class-map-B23oXJvR.js";import{_ as B}from"./16-C1hWzIbz.js";import{_ as q}from"./16-B8NH1ntc.js";var c;let e=(c=class extends g{constructor(...o){super(...o),this.orientation="vertical",this.readonly=!1,this.warn=!1,this.warnText="",this._hasAILabel=!1}_handleSlotChange({target:o}){const s=o.assignedNodes().filter(l=>l.matches!==void 0?l.matches(this.constructor.aiLabelItem)||l.matches(this.constructor.slugItem):!1);this._hasAILabel=!!s,s[0].setAttribute("size","mini"),this.requestUpdate()}updated(o){const{selectorCheckbox:s}=this.constructor,l=this.querySelectorAll(s);if(["disabled","readonly","orientation"].forEach(r=>{if(o.has(r)){const{[r]:p}=this;l.forEach(n=>{n[r]=p})}}),o.has("invalid")||o.has("disabled")||o.has("readonly")){const{invalid:r,disabled:p,readonly:n}=this,v=r&&!p&&!n;l.forEach(d=>{v?d.setAttribute("invalid-group",""):d.removeAttribute("invalid-group")})}}render(){const{ariaLabelledBy:o,disabled:s,helperText:l,invalid:r,invalidText:p,legendId:n,legendText:v,orientation:d,readonly:u,warn:w,warnText:S,_hasAILabel:I,_handleSlotChange:x}=this,i={invalid:!u&&!s&&r,warn:!u&&!r&&!s&&w},C=!i.invalid&&!i.warn,L=Math.random().toString(16).slice(2),y=l?`checkbox-group-helper-text-${L}`:void 0,$=l?b` <div id="${y}" class="${"cds"}--form__helper-text">
          ${l}
        </div>`:null,T=A({"cds--checkbox-group":!0,"cds--checkbox-group--readonly":u,"cds--checkbox-group--invalid":i.invalid,"cds--checkbox-group--warning":i.warn,"cds--checkbox-group--slug":I,[`cds--checkbox-group--${d}`]:d==="horizontal"});return b`
      <fieldset
        class="${T}"
        ?data-invalid=${i.invalid}
        ?disabled=${s}
        aria-disabled=${u||s}
        ?aria-labelledby=${o||n}
        ?aria-describedby=${!i.invalid&&!i.warn&&$?y:void 0}
        orientation=${d}>
        <legend class="${"cds"}--label" id=${n||o}>
          ${v}
          <slot name="ai-label" @slotchange="${x}"></slot>
          <slot name="decorator" @slotchange="${x}"></slot>
          <slot name="slug" @slotchange="${x}"></slot>
        </legend>
        <slot></slot>
        <div class="${"cds"}--checkbox-group__validation-msg">
          ${i.invalid?b`
                ${k(B,{class:"cds--checkbox__invalid-icon"})}
                <div class="${"cds"}--form-requirement">${p}</div>
              `:null}
          ${i.warn?b`
                ${k(q,{class:"cds--checkbox__invalid-icon cds--checkbox__invalid-icon--warning"})}
                <div class="${"cds"}--form-requirement">${S}</div>
              `:null}
        </div>
        ${C?$:null}
      </fieldset>
    `}static get selectorCheckbox(){return"cds-checkbox, cds-preview-checkbox"}static get slugItem(){return"cds-slug"}static get aiLabelItem(){return"cds-ai-label"}},c.shadowRootOptions={...g.shadowRootOptions,delegatesFocus:!0},c.styles=_,c);t([a({type:String,reflect:!0,attribute:"aria-labelledby"})],e.prototype,"ariaLabelledBy",void 0);t([a({type:Boolean})],e.prototype,"disabled",void 0);t([a({type:String,reflect:!0,attribute:"helper-text"})],e.prototype,"helperText",void 0);t([a({type:Boolean,attribute:"invalid"})],e.prototype,"invalid",void 0);t([a({type:String,reflect:!0,attribute:"invalid-text"})],e.prototype,"invalidText",void 0);t([a({type:String,reflect:!0,attribute:"legend-id"})],e.prototype,"legendId",void 0);t([a({type:String,reflect:!0,attribute:"legend-text"})],e.prototype,"legendText",void 0);t([a({type:String,reflect:!0,attribute:"orientation"})],e.prototype,"orientation",void 0);t([a({type:Boolean,reflect:!0})],e.prototype,"readonly",void 0);t([a({type:Boolean,reflect:!0})],e.prototype,"warn",void 0);t([a({type:String,reflect:!0,attribute:"warn-text"})],e.prototype,"warnText",void 0);e=t([m("cds-checkbox-group")],e);var G=e,h;let f=(h=class extends g{render(){return b`
      <label class="${"cds"}--checkbox-label" for="checkbox" part="label">
        <span class="${"cds"}--checkbox-label-text ${"cds"}--skeleton"
          ><slot></slot
        ></span>
      </label>
    `}},h.styles=_,h);f=t([m("cds-checkbox-skeleton")],f);var H=f;export{H as a,G as c};
