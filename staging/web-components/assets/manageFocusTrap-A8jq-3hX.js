import{s as m,p as i}from"./iframe-CPwma648.js";/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */let a=[];const g=r=>{r&&a.push(r)},p=r=>{const l=m.replace(`${i}-button`,`${i}-button:not([disabled]), ${i}-selectable-tag`);if(!a.length)return{cleanup:()=>{}};const c=e=>e?e.tagName==="BUTTON"||e.tabIndex>=0?e:e.querySelector('button, [tabindex]:not([tabindex="-1"])')||e:null,d=()=>{let e=document.activeElement;if(e&&l.indexOf(e.tagName.toLocaleLowerCase())==-1&&e?.shadowRoot?.activeElement&&(e=e.shadowRoot.activeElement),e?.tagName==="SLOT"){let t;e instanceof HTMLSlotElement&&(t=e.assignedElements({flatten:!0}));const n=t?.find(o=>o.matches('button, [tabindex]:not([tabindex="-1"])'));n&&(e=n)}return e};requestAnimationFrame(()=>{const e=f(a);c(e[0])?.focus({preventScroll:!0})});function u(e){if(e.key!=="Tab")return;const t=f(a),n=t[0],o=t[t.length-1],s=d();e.shiftKey?(s===n||n.contains(s))&&(e.preventDefault(),c(o)?.focus()):(s===o||o.contains(s))&&(e.preventDefault(),c(n)?.focus())}const f=e=>e.flatMap(t=>[...t.querySelectorAll(l)]).filter(Boolean);return document.addEventListener("keydown",u,!0),{cleanup:()=>{document.removeEventListener("keydown",u,!0),a.length=0}}};export{g as r,p as t};
