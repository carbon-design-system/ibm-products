import{T as f}from"./iframe-Cdz6_tpU.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=(s,e,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(s,e,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function y(s,e){return(n,t,o)=>{const r=i=>i.renderRoot?.querySelector(s)??null;return w(n,t,{get(){return r(this)}})}}const h=(s,e,n,t)=>{const o=n._hostListeners;if(!o)throw new Error("The method `@HostListener()` is defined on has to be of a class that has `HostListerMixin`.");o[t]||(o[t]={}),o[t][s]={options:e}},b=(s,e,n)=>{const{kind:t,key:o,placement:r}=n;if(!(t==="method"&&r==="prototype"||t==="field"&&r==="own"))throw new Error("`@HostListener()` must be defined on instance methods, but you may have defined it on static, field, etc.");return Object.assign(Object.assign({},n),{finisher(i){h(s,e,i,o)}})},T=(s,e)=>(n,t)=>typeof t<"u"?h(s,e,n.constructor,t):b(s,e,n);function p(s,...e){return s.addEventListener(...e),{release(){return s.removeEventListener(...e),null}}}const _=/^((document|window|parentRoot|shadowRoot):)?([\w-]+)$/,$=s=>{class e extends s{constructor(){super(...arguments),this._handles=new Set}connectedCallback(){super.connectedCallback();const t=this.constructor._hostListeners;Object.keys(t).forEach(o=>{Object.keys(t[o]).forEach(r=>{var i;const c=_.exec(r);if(!c)throw new Error(`Could not parse the event name: ${o}`);const[,,d,a]=c,u={document:this.ownerDocument,window:this.ownerDocument.defaultView,parentRoot:this.getRootNode(),shadowRoot:this.shadowRoot}[d]||this,{options:l}=t[o][r];this._handles.add(p(u,(i=this.constructor[a])!==null&&i!==void 0?i:a,this[o],l))})})}disconnectedCallback(){this._handles.forEach(t=>{t.release(),this._handles.delete(t)}),super.disconnectedCallback()}}return e._hostListeners={},e};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L={ATTRIBUTE:1,CHILD:2},m=s=>(...e)=>({_$litDirective$:s,values:e});class E{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,t){this._$Ct=e,this._$AM=n,this._$Ci=t}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const g=m(class extends E{constructor(s){if(super(s),s.type!==L.ATTRIBUTE||s.name!=="class"||s.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(s){return" "+Object.keys(s).filter(e=>s[e]).join(" ")+" "}update(s,[e]){if(this.st===void 0){this.st=new Set,s.strings!==void 0&&(this.nt=new Set(s.strings.join(" ").split(/\s/).filter(t=>t!=="")));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const n=s.element.classList;for(const t of this.st)t in e||(n.remove(t),this.st.delete(t));for(const t in e){const o=!!e[t];o===this.st.has(t)||this.nt?.has(t)||(o?(n.add(t),this.st.add(t)):(n.remove(t),this.st.delete(t)))}return f}});export{$ as H,m as a,g as b,y as c,T as d,w as e,E as i,p as o,L as t};
