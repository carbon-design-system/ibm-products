import{r as g,x as p,_ as t,n as o,c as m}from"./iframe-elyKelMt.js";import{i as k}from"./icon-loader-zidJCUlI.js";import{c as _}from"./checkbox-MKYeGRCf.js";import{e as A}from"./class-map-B13Nnaxe.js";import{_ as C,a as B}from"./16-DeKHrdu0.js";var n;let e=(n=class extends g{constructor(...a){super(...a),this.orientation="vertical",this.readonly=!1,this.warn=!1,this.warnText="",this._hasAILabel=!1}_handleSlotChange({target:a}){const i=a.assignedNodes().filter(l=>l.matches!==void 0?l.matches(this.constructor.aiLabelItem)||l.matches(this.constructor.slugItem):!1);this._hasAILabel=!!i,i[0].setAttribute("size","mini"),this.requestUpdate()}updated(a){const{selectorCheckbox:i}=this.constructor,l=this.querySelectorAll(i);if(["disabled","readonly","orientation"].forEach(r=>{if(a.has(r)){const{[r]:b}=this;l.forEach(c=>{c[r]=b})}}),a.has("invalid")||a.has("disabled")||a.has("readonly")){const{invalid:r,disabled:b,readonly:c}=this,v=r&&!b&&!c;l.forEach(d=>{v?d.setAttribute("invalid-group",""):d.removeAttribute("invalid-group")})}}render(){const{ariaLabelledBy:a,disabled:i,helperText:l,invalid:r,invalidText:b,legendId:c,legendText:v,orientation:d,readonly:u,warn:w,warnText:S,_hasAILabel:I,_handleSlotChange:x}=this,s={invalid:!u&&!i&&r,warn:!u&&!r&&!i&&w},L=!s.invalid&&!s.warn,T=Math.random().toString(16).slice(2),f=l?`checkbox-group-helper-text-${T}`:void 0,$=l?p` <div id="${f}" class="${"cds"}--form__helper-text">
          ${l}
        </div>`:null;return p`
      <fieldset
        class="${A({"cds--checkbox-group":!0,"cds--checkbox-group--readonly":u,"cds--checkbox-group--invalid":s.invalid,"cds--checkbox-group--warning":s.warn,"cds--checkbox-group--slug":I,[`cds--checkbox-group--${d}`]:d==="horizontal"})}"
        ?data-invalid=${s.invalid}
        ?disabled=${i}
        aria-disabled=${u||i}
        ?aria-labelledby=${a||c}
        ?aria-describedby=${!s.invalid&&!s.warn&&$?f:void 0}
        orientation=${d}>
        <legend class="${"cds"}--label" id=${c||a}>
          ${v}
          <slot name="ai-label" @slotchange="${x}"></slot>
          <slot name="decorator" @slotchange="${x}"></slot>
          <slot name="slug" @slotchange="${x}"></slot>
        </legend>
        <slot></slot>
        <div class="${"cds"}--checkbox-group__validation-msg">
          ${s.invalid?p`
                ${k(C,{class:"cds--checkbox__invalid-icon"})}
                <div class="${"cds"}--form-requirement">${b}</div>
              `:null}
          ${s.warn?p`
                ${k(B,{class:"cds--checkbox__invalid-icon cds--checkbox__invalid-icon--warning"})}
                <div class="${"cds"}--form-requirement">${S}</div>
              `:null}
        </div>
        ${L?$:null}
      </fieldset>
    `}static get selectorCheckbox(){return"cds-checkbox"}static get slugItem(){return"cds-slug"}static get aiLabelItem(){return"cds-ai-label"}},n.shadowRootOptions={...g.shadowRootOptions,delegatesFocus:!0},n.styles=_,n);t([o({type:String,reflect:!0,attribute:"aria-labelledby"})],e.prototype,"ariaLabelledBy",void 0);t([o({type:Boolean})],e.prototype,"disabled",void 0);t([o({type:String,reflect:!0,attribute:"helper-text"})],e.prototype,"helperText",void 0);t([o({type:Boolean,attribute:"invalid"})],e.prototype,"invalid",void 0);t([o({type:String,reflect:!0,attribute:"invalid-text"})],e.prototype,"invalidText",void 0);t([o({type:String,reflect:!0,attribute:"legend-id"})],e.prototype,"legendId",void 0);t([o({type:String,reflect:!0,attribute:"legend-text"})],e.prototype,"legendText",void 0);t([o({type:String,reflect:!0,attribute:"orientation"})],e.prototype,"orientation",void 0);t([o({type:Boolean,reflect:!0})],e.prototype,"readonly",void 0);t([o({type:Boolean,reflect:!0})],e.prototype,"warn",void 0);t([o({type:String,reflect:!0,attribute:"warn-text"})],e.prototype,"warnText",void 0);e=t([m("cds-checkbox-group")],e);var D=e,h;let y=(h=class extends g{render(){return p`
      <label class="${"cds"}--checkbox-label" for="checkbox" part="label">
        <span class="${"cds"}--checkbox-label-text ${"cds"}--skeleton"
          ><slot></slot
        ></span>
      </label>
    `}},h.styles=_,h);y=t([m("cds-checkbox-skeleton")],y);var F=y;export{F as a,D as c};
