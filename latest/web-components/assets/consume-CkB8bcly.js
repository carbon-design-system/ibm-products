/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let u=class extends Event{constructor(s,e,i,t){super("context-request",{bubbles:!0,composed:!0}),this.context=s,this.contextTarget=e,this.callback=i,this.subscribe=t??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function p(r){return r}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let h=class{constructor(s,e,i,t){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(o,c)=>{this.unsubscribe&&(this.unsubscribe!==c&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=o,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(o,c)),this.unsubscribe=c},this.host=s,e.context!==void 0){const o=e;this.context=o.context,this.callback=o.callback,this.subscribe=o.subscribe??!1}else this.context=e,this.callback=i,this.subscribe=t??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new u(this.context,this.host,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class l{get value(){return this.o}set value(s){this.setValue(s)}setValue(s,e=!1){const i=e||!Object.is(s,this.o);this.o=s,i&&this.updateObservers()}constructor(s){this.subscriptions=new Map,this.updateObservers=()=>{for(const[e,{disposer:i}]of this.subscriptions)e(this.o,i)},s!==void 0&&(this.value=s)}addCallback(s,e,i){if(!i)return void s(this.value);this.subscriptions.has(s)||this.subscriptions.set(s,{disposer:()=>{this.subscriptions.delete(s)},consumerHost:e});const{disposer:t}=this.subscriptions.get(s);s(this.value,t)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let b=class extends Event{constructor(s,e){super("context-provider",{bubbles:!0,composed:!0}),this.context=s,this.contextTarget=e}};class a extends l{constructor(s,e,i){super(e.context!==void 0?e.initialValue:i),this.onContextRequest=t=>{if(t.context!==this.context)return;const o=t.contextTarget??t.composedPath()[0];o!==this.host&&(t.stopPropagation(),this.addCallback(t.callback,o,t.subscribe))},this.onProviderRequest=t=>{if(t.context!==this.context||(t.contextTarget??t.composedPath()[0])===this.host)return;const o=new Set;for(const[c,{consumerHost:n}]of this.subscriptions)o.has(c)||(o.add(c),n.dispatchEvent(new u(this.context,n,c,!0)));t.stopPropagation()},this.host=s,e.context!==void 0?this.context=e.context:this.context=e,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new b(this.context,this.host))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function f({context:r}){return(s,e)=>{const i=new WeakMap;if(typeof e=="object")return{get(){return s.get.call(this)},set(t){return i.get(this).setValue(t),s.set.call(this,t)},init(t){return i.set(this,new a(this,{context:r,initialValue:t})),t}};{s.constructor.addInitializer(c=>{i.set(c,new a(c,{context:r}))});const t=Object.getOwnPropertyDescriptor(s,e);let o;if(t===void 0){const c=new WeakMap;o={get(){return c.get(this)},set(n){i.get(this).setValue(n),c.set(this,n)},configurable:!0,enumerable:!0}}else{const c=t.set;o={...t,set(n){i.get(this).setValue(n),c?.call(this,n)}}}return void Object.defineProperty(s,e,o)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function g({context:r,subscribe:s}){return(e,i)=>{typeof i=="object"?i.addInitializer(function(){new h(this,{context:r,callback:t=>{e.set.call(this,t)},subscribe:s})}):e.constructor.addInitializer(t=>{new h(t,{context:r,callback:o=>{t[i]=o},subscribe:s})})}}export{g as c,f as e,p as n,h as s};
