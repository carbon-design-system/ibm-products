import{x as d,E as a}from"./lit-element-B5NQPoCB.js";import{p as c}from"./settings-BYM-UxKO.js";import{f}from"./directive-helpers-9-C1vVOa.js";import{i as _,t as u,a as A}from"./class-map-Duf76KCM.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const h=(t,s)=>{var i;const e=t._$AN;if(e===void 0)return!1;for(const o of e)(i=o._$AO)==null||i.call(o,s,!1),h(o,s);return!0},r=t=>{let s,e;do{if((s=t._$AM)===void 0)break;e=s._$AN,e.delete(t),t=s}while((e==null?void 0:e.size)===0)},$=t=>{for(let s;s=t._$AM;t=s){let e=s._$AN;if(e===void 0)s._$AN=e=new Set;else if(e.has(t))break;e.add(t),p(s)}};function v(t){this._$AN!==void 0?(r(this),this._$AM=t,$(this)):this._$AM=t}function g(t,s=!1,e=0){const i=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(s)if(Array.isArray(i))for(let n=e;n<i.length;n++)h(i[n],!1),r(i[n]);else i!=null&&(h(i,!1),r(i));else h(this,t)}const p=t=>{t.type==u.CHILD&&(t._$AP??(t._$AP=g),t._$AQ??(t._$AQ=v))};class Y extends _{constructor(){super(...arguments),this._$AN=void 0}_$AT(s,e,i){super._$AT(s,e,i),$(this),this.isConnected=s._$AU}_$AO(s,e=!0){var i,o;s!==this.isConnected&&(this.isConnected=s,s?(i=this.reconnected)==null||i.call(this):(o=this.disconnected)==null||o.call(this)),e&&(h(this,s),r(this))}setValue(s){if(f(this._$Ct))this._$Ct._$AI(s,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=s,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}var N=({description:t,small:s})=>{const e=s?"42":"44";return d`
    <svg class="${c}--loading__svg" viewBox="0 0 100 100">
      ${t?d` <title>${t}</title> `:void 0}
      <circle
        ?hidden="${!s}"
        class="${c}--loading__background"
        cx="50%"
        cy="50%"
        r="${e}" />
      <circle
        class="${c}--loading__stroke"
        cx="50%"
        cy="50%"
        r="${e}" />
    </svg>
  `};const l=new WeakMap,k=A(class extends Y{render(t){return a}update(t,[s]){var i;const e=s!==this.Y;return e&&this.Y!==void 0&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.Y=s,this.ht=(i=t.options)==null?void 0:i.host,this.rt(this.ct=t.element)),a}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){const s=this.ht??globalThis;let e=l.get(s);e===void 0&&(e=new WeakMap,l.set(s,e)),e.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),e.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,s;return typeof this.Y=="function"?(t=l.get(this.ht??globalThis))==null?void 0:t.get(this.Y):(s=this.Y)==null?void 0:s.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});export{N as g,k as n};
