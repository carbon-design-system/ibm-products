import{P as t,b as h,d as k,c as f,_ as N,i as K,E as V,e as _}from"./index-B_euquWE.js";import{u as w,P as j,a as q,d as G,m as J}from"./index-YDq2Pj7F.js";import{r as v,e}from"./index-DxDX2vOa.js";import{I as Q}from"./settings-0ThqPtR3.js";import{c as X}from"./bucket-17-BLAXVSDb.js";t.elementType,t.node,t.string;const R=e.createContext(void 0);function B(){return v.useContext(R)}function O(u){let{align:i,as:m,autoAlign:o,className:n,children:s,defaultOpen:c=!1,...g}=u;const l=v.useRef(null),[r,d]=v.useState(c),p=h(),C=k(),$=f(`${p}--toggletip`,n,{[`${p}--toggletip--open`]:r,[`${p}--autoalign`]:o}),b={toggle:()=>{d(!r)},close:()=>{d(!1)}},E={buttonProps:{"aria-expanded":r,"aria-controls":C,onClick:b.toggle},contentProps:{id:C},onClick:{onClick:b.toggle}},A=a=>{var x;if(r&&K(a,V)){b.close();const L=(x=l.current)==null?void 0:x.children[0];L instanceof HTMLButtonElement&&L.focus()}},T=a=>{r&&a.relatedTarget===null||a.currentTarget.contains(a.relatedTarget)||b.close()};return w("blur",()=>{r&&b.close()}),w("click",a=>{r&&l.current&&!l.current.contains(a.target)&&b.close()}),e.createElement(R.Provider,{value:E},e.createElement(j,N({align:i,as:m,caret:!0,className:$,dropShadow:!1,highContrast:!0,open:r,onKeyDown:A,onBlur:T,ref:l,autoAlign:o},g),s))}O.propTypes={align:t.oneOf(["top","top-left","top-right","bottom","bottom-left","bottom-right","left","left-bottom","left-top","right","right-bottom","right-top","top-start","top-end","bottom-start","bottom-end","left-end","left-start","right-end","right-start"]),as:t.elementType,autoAlign:t.bool,children:t.node,className:t.string,defaultOpen:t.bool};const y=e.forwardRef(function(i,m){let{children:o,className:n,label:s="Show information",as:c,...g}=i;const l=B(),r=h(),d=f(`${r}--toggletip-button`,n),p=c??"button";return p!=="button"?e.createElement(p,N({},l==null?void 0:l.onClick,{className:d},g),o):e.createElement("button",N({},l==null?void 0:l.buttonProps,{"aria-label":s,type:"button",className:d,ref:m},g),o)});y.propTypes={children:t.node,className:t.string,label:t.string};y.displayName="ToggletipButton";const I=e.forwardRef(function(i,m){let{children:o,className:n}=i;const s=B(),c=h();return e.createElement(q,N({className:n},s==null?void 0:s.contentProps,{ref:m}),e.createElement("div",{className:`${c}--toggletip-content`},o))});I.propTypes={children:t.node,className:t.string};I.displayName="ToggletipContent";function S(u){let{children:i,className:m}=u;const o=h(),n=f(`${o}--toggletip-actions`,m);return e.createElement("div",{className:n},i)}S.propTypes={children:t.node,className:t.string};var P;const z=e.forwardRef(function(i,m){let{className:o,children:n,...s}=i;const c=h(),g=e.Children.toArray(n).some(r=>{var p;(p=r.type)==null||p.displayName}),l=f(o,{[`${c}--ai-label-content`]:!0,[`${c}--ai-label-content--with-actions`]:g});return e.createElement(I,{className:l},n)});z.displayName="AILabelContent";z.propTypes={children:t.node,className:t.string};const M=e.forwardRef(function(i,m){let{className:o,children:n,...s}=i;const c=h(),g=f(o,{[`${c}--ai-label-actions`]:!0});return e.createElement(S,{className:g},n)});M.displayName="AILabelActions";M.propTypes={children:t.node,className:t.string};const Y=u=>J(u),U=e.forwardRef(function(i,m){let{aiText:o="AI",aiTextLabel:n,textLabel:s,align:c,autoAlign:g=!0,children:l,className:r,kind:d="default",onRevertClick:p,revertActive:C,revertLabel:$="Revert to AI input",slugLabel:b="Show information",["aria-label"]:E="Show information",size:A="xs",...T}=i;const a=h(),x=k("AILabel"),L=f(r,{[`${a}--ai-label`]:!0,[`${a}--ai-label--revert`]:C}),W=f({[`${a}--ai-label__button`]:!0,[`${a}--ai-label__button--${A}`]:A,[`${a}--ai-label__button--${d}`]:d,[`${a}--ai-label__button--inline-with-content`]:d==="inline"&&(n||s)}),D=H=>{p&&p(H)},F=!n&&!s?`${o} - ${b||E}`:`${o} - ${n||s}`;return e.createElement("div",{className:L,ref:m,id:x},C?e.createElement(Q,N({onClick:D,kind:"ghost",size:"sm",label:$},T),P||(P=e.createElement(X,null))):e.createElement(O,N({align:c,autoAlign:g},T),e.createElement(y,{className:W,label:F},e.createElement("span",{className:`${a}--ai-label__text`},o),d==="inline"&&(n||s)&&e.createElement("span",{className:`${a}--ai-label__additional-text`},n||s)),l))});U.displayName="AILabel";U.propTypes={AILabelContent:t.node,aiText:t.string,aiTextLabel:_(t.string),align:G(t.oneOf(["top","top-left","top-right","bottom","bottom-left","bottom-right","left","left-bottom","left-top","right","right-bottom","right-top","top-start","top-end","bottom-start","bottom-end","left-end","left-start","right-end","right-start"]),["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"],Y),"aria-label":t.string,autoAlign:t.bool,children:t.node,className:t.string,kind:t.oneOf(["default","inline"]),onRevertClick:t.func,revertActive:t.bool,revertLabel:t.string,size:t.oneOf(["mini","2xs","xs","sm","md","lg","xl"]),slugLabel:_(t.string),textLabel:t.string};export{U as A,O as T,z as a,y as b,I as c,M as d};
