import{a as A,c,_ as q}from"./floating-ui.core.mjs-LzsX8FoD.js";import{r as F,R as a}from"./index-BwDkhjyp.js";import{P as e}from"./index-Dk74W0Oi.js";import{u as I}from"./useControllableState-DwpxGhsf.js";import{T as h}from"./Text-DzW_iQLr.js";var _;function M(x){let{"aria-labelledby":g,className:$,defaultToggled:C=!1,disabled:r=!1,hideLabel:i=!1,id:d,labelA:T="Off",labelB:v="On",labelText:t,onClick:b,onToggle:y,readOnly:m,size:E="md",toggled:k,...N}=x;const l=A(),s=F.useRef(null),[o,w]=I({value:k,onChange:y,defaultValue:C});function p(n){m||w(!o),b&&b(n)}const f=E==="sm",L=i?t:o?v:T,O=!(i&&!t),R=t?"label":"div",z=c(`${l}--toggle`,{[`${l}--toggle--disabled`]:r,[`${l}--toggle--readonly`]:m},$),B=c(`${l}--toggle__label-text`,{[`${l}--visually-hidden`]:i}),P=c(`${l}--toggle__appearance`,{[`${l}--toggle__appearance--sm`]:f}),S=c(`${l}--toggle__switch`,{[`${l}--toggle__switch--checked`]:o}),u=`${d}_label`;return a.createElement("div",{className:z,onClick:t?void 0:n=>{s.current&&n.target!==s.current&&!r&&(p(n),s.current.focus())}},a.createElement("button",q({},N,{ref:s,id:d,className:`${l}--toggle__button`,role:"switch",type:"button","aria-checked":o,"aria-labelledby":g??(t?u:void 0),disabled:r,onClick:p})),a.createElement(R,{id:u,htmlFor:g?void 0:d,className:`${l}--toggle__label`},t&&a.createElement(h,{className:B},t),a.createElement("div",{className:P},a.createElement("div",{className:S},f&&a.createElement("svg",{className:`${l}--toggle__check`,width:"6px",height:"5px",viewBox:"0 0 6 5"},_||(_=a.createElement("path",{d:"M2.2 2.7L5 0 6 1 2.2 5 0 2.7 1 1.5z"})))),O&&a.createElement(h,{className:`${l}--toggle__text`,"aria-hidden":"true"},L))))}M.propTypes={"aria-labelledby":e.string,className:e.string,defaultToggled:e.bool,disabled:e.bool,hideLabel:e.bool,id:e.string.isRequired,labelA:e.node,labelB:e.node,labelText:e.string,onClick:e.func,onToggle:e.func,readOnly:e.bool,size:e.oneOf(["sm","md"]),toggled:e.bool};export{M as T};
