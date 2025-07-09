import{T as f}from"./lit-element-B5NQPoCB.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=(e,t,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function y(e,t){return(s,o,r)=>{const n=i=>{var c;return((c=i.renderRoot)==null?void 0:c.querySelector(e))??null};return w(s,o,{get(){return n(this)}})}}const h=(e,t,s,o)=>{const r=s._hostListeners;if(!r)throw new Error("The method `@HostListener()` is defined on has to be of a class that has `HostListerMixin`.");r[o]||(r[o]={}),r[o][e]={options:t}},b=(e,t,s)=>{const{kind:o,key:r,placement:n}=s;if(!(o==="method"&&n==="prototype"||o==="field"&&n==="own"))throw new Error("`@HostListener()` must be defined on instance methods, but you may have defined it on static, field, etc.");return Object.assign(Object.assign({},s),{finisher(i){h(e,t,i,r)}})},T=(e,t)=>(s,o)=>typeof o<"u"?h(e,t,s.constructor,o):b(e,t,s);function p(e,...t){return e.addEventListener(...t),{release(){return e.removeEventListener(...t),null}}}const _=/^((document|window|parentRoot|shadowRoot):)?([\w-]+)$/,$=e=>{class t extends e{constructor(){super(...arguments),this._handles=new Set}connectedCallback(){super.connectedCallback();const o=this.constructor._hostListeners;Object.keys(o).forEach(r=>{Object.keys(o[r]).forEach(n=>{var i;const c=_.exec(n);if(!c)throw new Error(`Could not parse the event name: ${r}`);const[,,d,a]=c,u={document:this.ownerDocument,window:this.ownerDocument.defaultView,parentRoot:this.getRootNode(),shadowRoot:this.shadowRoot}[d]||this,{options:l}=o[r][n];this._handles.add(p(u,(i=this.constructor[a])!==null&&i!==void 0?i:a,this[r],l))})})}disconnectedCallback(){this._handles.forEach(o=>{o.release(),this._handles.delete(o)}),super.disconnectedCallback()}}return t._hostListeners={},t};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L={ATTRIBUTE:1,CHILD:2},m=e=>(...t)=>({_$litDirective$:e,values:t});class E{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,o){this._$Ct=t,this._$AM=s,this._$Ci=o}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const g=m(class extends E{constructor(e){var t;if(super(e),e.type!==L.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var o,r;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!((o=this.nt)!=null&&o.has(n))&&this.st.add(n);return this.render(t)}const s=e.element.classList;for(const n of this.st)n in t||(s.remove(n),this.st.delete(n));for(const n in t){const i=!!t[n];i===this.st.has(n)||(r=this.nt)!=null&&r.has(n)||(i?(s.add(n),this.st.add(n)):(s.remove(n),this.st.delete(n)))}return f}});export{$ as H,m as a,y as b,g as c,T as d,w as e,E as i,p as o,L as t};
