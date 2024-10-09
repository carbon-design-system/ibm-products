import{b as Ie,a as O,c as M,l as V,_ as A,d as $e,j as fe,C as _e,n as Le,B as be,J as me,K as ve,L as he,i as z,M as ye}from"./floating-ui.core.mjs-LzsX8FoD.js";import{k as re,T as pe,h as we}from"./settings-DEdZ0TrD.js";import{P as n}from"./index-Dk74W0Oi.js";import{r,R as t}from"./index-BwDkhjyp.js";import{r as ae}from"./index-DcAOwtUU.js";import{u as Ce}from"./useControllableState-DwpxGhsf.js";import{g as oe}from"./useNoInteractiveChildren-B4Ro9ZJd.js";import{b as le}from"./index-CtP8jiW9.js";import{u as Ne}from"./useMatchMedia-BV3YP2kV.js";import{T as G}from"./Text-DzW_iQLr.js";import{k as Pe,h as Se}from"./events-BwXSUnsA.js";function se(p){const d=r.useRef(p),m=r.useRef(!1);r.useEffect(()=>{d.current=p}),r.useEffect(()=>{m.current!==!0&&(m.current=!0,d.current())},[])}function ce(p){let{onPress:d,onPressIn:m,onPressOut:o,onLongPress:v,delayLongPressMs:f=500}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const l=r.useRef(d),i=r.useRef(m),h=r.useRef(o),I=r.useRef(v),[$,L]=r.useState(!1),[e,E]=r.useState(!1),w=r.useRef({longPress:!1});r.useEffect(()=>{l.current=d},[d]),r.useEffect(()=>{i.current=m},[m]),r.useEffect(()=>{h.current=o},[o]),r.useEffect(()=>{I.current=v},[v]),r.useEffect(()=>{const{current:u}=p;function y(c){var W;L(!0),(W=i.current)==null||W.call(i),c.preventDefault()}function R(){var c;L(!1),E(!1),(c=h.current)==null||c.call(h,w.current)}function g(){var c;L(!1),E(!1),(c=h.current)==null||c.call(h),w.current.longPress=!1}function b(){var c;L(!1),E(!1),(c=h.current)==null||c.call(h),w.current.longPress=!1}function s(){var c;E(!1),L(!1),(c=l.current)==null||c.call(l,w.current),w.current.longPress=!1}function P(c){c.preventDefault()}return u.addEventListener("pointerdown",y),u.addEventListener("pointerup",R),u.addEventListener("pointercancel",g),u.addEventListener("pointerleave",b),u.addEventListener("click",s),u.addEventListener("contextmenu",P),()=>{u.removeEventListener("pointerdown",y),u.removeEventListener("pointerup",R),u.removeEventListener("pointercancel",g),u.removeEventListener("pointerleave",b),u.removeEventListener("click",s),u.removeEventListener("contextmenu",P)}},[p]),r.useEffect(()=>{if($){const u=setTimeout(()=>{L(!1),E(!0)},f);return()=>{clearTimeout(u)}}},[$,f]),r.useEffect(()=>{var u;if(e)return w.current.longPress=!0,(u=I.current)==null?void 0:u.call(I)},[e])}var ie,ue;const J=t.createContext({baseId:"",activeIndex:0,defaultSelectedIndex:0,dismissable:!1,onTabCloseRequest(){},setActiveIndex(){},selectedIndex:0,setSelectedIndex(){}}),ge=t.createContext({index:0,hasSecondaryLabel:!1}),Te=`(min-width: ${we.lg.width})`,Ee=t.createContext(0);function Re(p){let{children:d,defaultSelectedIndex:m=0,onChange:o,selectedIndex:v,dismissable:f,onTabCloseRequest:l}=p;const i=Ie("ccs"),[h,I]=r.useState(m),[$,L]=Ce({value:v,defaultValue:m,onChange:E=>o==null?void 0:o({selectedIndex:E})}),e={baseId:i,activeIndex:h,defaultSelectedIndex:m,dismissable:f,onTabCloseRequest:l,setActiveIndex:I,selectedIndex:$,setSelectedIndex:L};return t.createElement(J.Provider,{value:e},d)}Re.propTypes={children:n.node,defaultSelectedIndex:n.number,dismissable:n.bool,onChange:n.func,onTabCloseRequest:p=>{if(p.dismissable&&!p.onTabCloseRequest)return new Error("dismissable property specified without also providing an onTabCloseRequest property.")},selectedIndex:n.number};n.node,n.number,n.string,n.func,n.number;function We(p,d,m){switch(!0){case z(p,be):return(m+1)%d;case z(p,me):return(d+m-1)%d;case z(p,ve):return 0;case z(p,he):return d-1;default:return m}}function De(p){let{activation:d="automatic","aria-label":m,children:o,className:v,contained:f=!1,fullWidth:l=!1,iconSize:i,leftOverflowButtonProps:h,light:I,rightOverflowButtonProps:$,scrollDebounceWait:L=200,scrollIntoView:e,...E}=p;const{activeIndex:w,selectedIndex:u,setSelectedIndex:y,setActiveIndex:R,dismissable:g}=t.useContext(J),b=O(),s=r.useRef(null),P=r.useRef(null),c=r.useRef(null),[W,H]=r.useState(!1),[S,T]=r.useState(0);let k=!1;f&&(k=t.Children.toArray(o).some(a=>ae.isElement(a)&&!!a.props.secondaryLabel));const Q=Ne(Te),U=l&&f&&Q&&t.Children.toArray(o).length<9,X=M(`${b}--tabs`,{[`${b}--tabs--contained`]:f,[`${b}--tabs--light`]:I,[`${b}--tabs__icon--default`]:i==="default",[`${b}--tabs__icon--lg`]:i==="lg",[`${b}--layout--size-lg`]:i==="lg",[`${b}--tabs--tall`]:k,[`${b}--tabs--full-width`]:U,[`${b}--tabs--dismissable`]:g},v),D=44,[F,Y]=r.useState(s.current?S+D+s.current.clientWidth<s.current.scrollWidth:!1),Z=s.current?W&&S>0:!1,K=M(`${b}--tab--overflow-nav-button`,`${b}--tab--overflow-nav-button--previous`,{[`${b}--tab--overflow-nav-button--hidden`]:!Z}),j=M(`${b}--tab--overflow-nav-button`,`${b}--tab--overflow-nav-button--next`,{[`${b}--tab--overflow-nav-button--hidden`]:!F}),C=r.useRef([]),ee=r.useCallback(()=>re(a=>{T(a.target.scrollLeft)},L),[L]);function _(a){var x;if(Le(a,[be,me,ve,he])){a.preventDefault();const B=C.current.filter(ne=>ne!==null).filter(ne=>!ne.disabled),te=B.indexOf(C.current[d==="automatic"?u:w]),q=C.current.indexOf(B[We(a,B.length,te)]);d==="automatic"?y(q):d==="manual"&&R(q),(x=C.current[q])==null||x.focus()}}return se(()=>{const a=C.current[u];e&&a&&a.scrollIntoView({block:"nearest",inline:"nearest"})}),r.useEffect(()=>{Y(s.current?S+D+s.current.clientWidth+1<s.current.scrollWidth:!1),g&&s.current&&H(s.current.scrollWidth>s.current.clientWidth)},[S,o,g,W]),se(()=>{var a;if((a=C.current[u])!=null&&a.disabled){const x=C.current.filter(N=>!N.disabled);if(x.length>0){const N=x[0];y(C.current.indexOf(N))}}}),V(()=>{s.current&&H(s.current.scrollWidth>s.current.clientWidth+1);function a(){s.current&&H(s.current.scrollWidth>s.current.clientWidth+1)}const x=re(a,200);return window.addEventListener("resize",x),()=>{x.cancel(),window.removeEventListener("resize",x)}},[]),V(()=>{S!==null&&s.current&&(s.current.scrollLeft=S)},[S]),V(()=>{if(!W||!s.current)return;const a=d==="manual"?C.current[w]:C.current[u];if(a){const{width:x}=a.getBoundingClientRect(),N=a.offsetLeft,B=a.offsetLeft+x,te=s.current.scrollLeft+D,q=s.current.scrollLeft+s.current.clientWidth-D;N<te&&T(N-D),B>q&&T(B+D-s.current.clientWidth)}},[d,w,u,W,o]),ce(P,{onPress(a){let{longPress:x}=a;!x&&s.current&&T(Math.max(S-s.current.scrollWidth/C.current.length*1.5,0))},onLongPress(){return de(s,"backward",T)}}),ce(c,{onPress(a){let{longPress:x}=a;!x&&s.current&&T(Math.min(S+s.current.scrollWidth/C.current.length*1.5,s.current.scrollWidth-s.current.clientWidth))},onLongPress(){return de(s,"forward",T)}}),t.createElement("div",{className:X},t.createElement("button",A({"aria-hidden":"true",tabIndex:-1,"aria-label":"Scroll left",ref:P,className:K,type:"button"},h),ie||(ie=t.createElement(Pe,null))),t.createElement("div",A({},E,{"aria-label":m,ref:s,role:"tablist",className:`${b}--tab--list`,onScroll:ee,onKeyDown:_}),t.Children.map(o,(a,x)=>ae.isElement(a)?t.createElement(ge.Provider,{value:{index:x,hasSecondaryLabel:k,contained:f}},t.cloneElement(a,{ref:N=>{C.current[x]=N}})):null)),t.createElement("button",A({"aria-hidden":"true",tabIndex:-1,"aria-label":"Scroll right",ref:c,className:j,type:"button"},$),ue||(ue=t.createElement(Se,null))))}De.propTypes={activation:n.oneOf(["automatic","manual"]),"aria-label":n.string.isRequired,children:n.node,className:n.string,contained:n.bool,fullWidth:n.bool,iconSize:n.oneOf(["default","lg"]),leftOverflowButtonProps:n.object,light:$e(n.bool),rightOverflowButtonProps:n.object,scrollDebounceWait:n.number,scrollIntoView:n.bool};n.oneOf(["automatic","manual"]),n.string.isRequired,n.node,n.string;function de(p,d,m){const o=p.current;if(!o)return()=>{};const v=o==null?void 0:o.style["scroll-behavior"];o.style["scroll-behavior"]="auto";const f=d==="forward"?5:-5;let l=null;function i(){o&&(o.scrollLeft=o.scrollLeft+f,l=requestAnimationFrame(i))}return l=requestAnimationFrame(i),()=>{o.style["scroll-behavior"]=v,m(o.scrollLeft),l&&cancelAnimationFrame(l)}}const xe=r.forwardRef(function(d,m){let{as:o="button",children:v,className:f,disabled:l,onClick:i,onKeyDown:h,secondaryLabel:I,renderIcon:$,...L}=d;const e=O(),{selectedIndex:E,setSelectedIndex:w,baseId:u,dismissable:y,onTabCloseRequest:R}=t.useContext(J),{index:g,hasSecondaryLabel:b,contained:s}=t.useContext(ge),P=r.useRef(null),c=r.useRef(null),W=fe([m,c]),[H,S]=r.useState(!1),T=`${u}-tab-${g}`,k=`${u}-tabpanel-${g}`,[Q,U]=r.useState(!1),X=_=>(U(_.offsetHeight<_.scrollHeight),_.offsetHeight<_.scrollHeight),D=M(`${e}--tabs__nav-item`,`${e}--tabs__nav-link`,{[`${e}--tabs__nav-item--selected`]:E===g,[`${e}--tabs__nav-item--disabled`]:l,[`${e}--tabs__nav-item--hover-off`]:H},f),F=o,Y=_=>{s&&c.current&&(_.stopPropagation(),S(!0),c.current.classList.add(`${e}--tabs__nav-item--hover-off`))},Z=()=>{s&&c.current&&(c.current.classList.remove(`${e}--tabs__nav-item--hover-off`),S(!1))};le(P,"mouseover",Y),le(P,"mouseleave",Z),V(()=>{function _(){const a=document.getElementById(`${T}`)||c.current;if(a!=null&&a.closest(`.${e}--tabs--vertical`)){const x=a==null?void 0:a.getElementsByClassName(`${e}--tabs__nav-item-label`)[0];X(x)}}return _(),window.addEventListener("resize",_),()=>{window.removeEventListener("resize",_)}},[e,T]);const K=_=>{var a;if(_.stopPropagation(),R==null||R(g),c.current&&c.current.parentElement){const x=Array.from(c.current.parentElement.childNodes).filter(N=>{const B=N;return B.classList.contains("cds--tabs__nav-link")&&!B.classList.contains("cds--tabs__nav-item--disabled")}).length;if(c.current&&g+1!==x)c.current.focus();else{const N=(x-2)*2;(a=c.current.parentElement.childNodes[N])==null||a.focus()}}},j=_=>{y&&z(_,ye)&&K(_),h==null||h(_)},C=t.createElement("div",{className:M({[`${e}--tabs__nav-item--close`]:y,[`${e}--tabs__nav-item--close--hidden`]:!y})},t.createElement("button",{type:"button",tabIndex:E===g&&y?0:-1,"aria-disabled":l,"aria-hidden":E===g&&y?"false":"true",disabled:l,className:M({[`${e}--tabs__nav-item--close-icon`]:y,[`${e}--visually-hidden`]:!y,[`${e}--tabs__nav-item--close-icon--selected`]:E===g,[`${e}--tabs__nav-item--close-icon--disabled`]:l}),onClick:K,title:`Remove ${typeof v=="string"?v:""} tab`,ref:P},t.createElement(_e,{"aria-hidden":E===g&&y?"false":"true","aria-label":`Press delete to remove ${typeof v=="string"?v:""} tab`}))),ee=$??y;return Q?t.createElement(pe,{label:v,align:"top",leaveDelayMs:0,autoAlign:!0,onMouseEnter:()=>!1,closeOnActivation:!0},t.createElement(F,A({},L,{"aria-controls":k,"aria-disabled":l,"aria-selected":E===g,ref:W,id:T,role:"tab",className:D,disabled:l,title:v,onClick:_=>{l||(w(g),i==null||i(_))},onKeyDown:j,tabIndex:E===g?"0":"-1",type:"button"}),t.createElement("div",{className:`${e}--tabs__nav-item-label-wrapper`},t.createElement(G,{className:`${e}--tabs__nav-item-label`},v)),b&&I&&t.createElement(G,{as:"div",className:`${e}--tabs__nav-item-secondary-label`,title:I},I))):t.createElement(t.Fragment,null,t.createElement(F,A({},L,{"aria-controls":k,"aria-disabled":l,"aria-selected":E===g,ref:W,id:T,role:"tab",className:D,disabled:l,onClick:_=>{l||(w(g),i==null||i(_))},onKeyDown:j,tabIndex:E===g?"0":"-1",type:"button"}),t.createElement("div",{className:`${e}--tabs__nav-item-label-wrapper`},y&&$&&t.createElement("div",{className:`${e}--tabs__nav-item--icon-left`},t.createElement($,{size:16})),t.createElement(G,{className:`${e}--tabs__nav-item-label`},v),!y&&$&&t.createElement("div",{className:M(`${e}--tabs__nav-item--icon`,{[`${e}--visually-hidden`]:!ee})},!y&&$&&t.createElement($,{size:16}))),b&&I&&t.createElement(G,{as:"div",className:`${e}--tabs__nav-item-secondary-label`,title:I},I)),C)});xe.propTypes={as:n.oneOfType([n.string,n.elementType]),children:n.node,className:n.string,disabled:n.bool,onClick:n.func,onKeyDown:n.func,renderButton:n.func,renderIcon:n.oneOfType([n.func,n.object]),secondaryLabel:n.string};const Be=t.forwardRef(function(d,m){let{children:o,className:v,defaultOpen:f=!1,enterDelayMs:l,leaveDelayMs:i,label:h,...I}=d;const $=O(),L=M(`${$}--tabs__nav-item--icon-only`,v);return t.createElement(pe,{align:"bottom",defaultOpen:f,className:`${$}--icon-tooltip`,enterDelayMs:l,label:h,leaveDelayMs:i},t.createElement(xe,A({className:L,ref:m},I),o))});Be.propTypes={children:n.node,className:n.string,defaultOpen:n.bool,enterDelayMs:n.number,label:n.node.isRequired,leaveDelayMs:n.number};const Me=t.forwardRef(function(d,m){let{children:o,className:v,...f}=d;const l=O(),i=r.useRef(null),h=fe([m,i]),[I,$]=r.useState(0),[L,e]=r.useState(!1),{selectedIndex:E,baseId:w}=t.useContext(J),u=t.useContext(Ee),y=`${w}-tabpanel-${u}`,R=`${w}-tab-${u}`,g=M(`${l}--tab-content`,v,{[`${l}--tab-content--interactive`]:L});return se(()=>{if(!i.current)return;oe(i.current)&&(e(!0),$(-1))}),r.useEffect(()=>{const b=i.current;if(!b)return;function s(){oe(b)?(e(!0),$(-1)):(e(!1),$(0))}const P=new MutationObserver(s);return P.observe(b,{childList:!0,subtree:!0}),()=>P.disconnect()},[]),t.createElement("div",A({},f,{"aria-labelledby":R,id:y,className:g,ref:h,role:"tabpanel",tabIndex:I,hidden:E!==u}),o)});Me.propTypes={children:n.node,className:n.string};function Ae(p){let{children:d}=p;const m=O(),o=r.useRef([]),v=r.useRef([]);return V(()=>{var h,I;const f=(h=o.current[0])==null?void 0:h.previousElementSibling,l=f==null?void 0:f.classList.contains(`${m}--tabs--vertical`),i=(I=f==null?void 0:f.parentElement)==null?void 0:I.style.height;if(l&&!i){v.current=o.current.map(e=>(e==null?void 0:e.hidden)||!1),o.current.forEach(e=>{e&&(e.hidden=!1)});const $=o.current.map(e=>(e==null?void 0:e.offsetHeight)||0),L=Math.max(...$);f.style.height=L+"px",o.current.forEach((e,E)=>{e&&(e.hidden=v.current[E])})}}),t.createElement(t.Fragment,null,t.Children.map(d,(f,l)=>t.createElement(Ee.Provider,{value:l},t.cloneElement(f,{ref:i=>{o.current[l]=i}}))))}Ae.propTypes={children:n.node};export{De as T,xe as a,Re as b,Ae as c,Me as d};
