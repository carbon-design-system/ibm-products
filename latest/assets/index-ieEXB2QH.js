import{P as s,b as ne,c as se,_ as Me,e as Mt,H as Et,C as je}from"./index-CXyjPnaX.js";import{r as d,e as C}from"./index-CPiZ6Cnx.js";import{F as Ot}from"./FormContext-CgeSXHS1.js";function me(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},T.apply(null,arguments)}var Ee={exports:{}},b={},ze;function Tt(){if(ze)return b;ze=1;/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),o=Symbol.for("react.server_context"),c=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),M=Symbol.for("react.offscreen"),I;I=Symbol.for("react.module.reference");function x(a){if(typeof a=="object"&&a!==null){var v=a.$$typeof;switch(v){case e:switch(a=a.type,a){case n:case i:case r:case m:case p:return a;default:switch(a=a&&a.$$typeof,a){case o:case u:case c:case y:case E:case l:return a;default:return v}}case t:return v}}}return b.ContextConsumer=u,b.ContextProvider=l,b.Element=e,b.ForwardRef=c,b.Fragment=n,b.Lazy=y,b.Memo=E,b.Portal=t,b.Profiler=i,b.StrictMode=r,b.Suspense=m,b.SuspenseList=p,b.isAsyncMode=function(){return!1},b.isConcurrentMode=function(){return!1},b.isContextConsumer=function(a){return x(a)===u},b.isContextProvider=function(a){return x(a)===l},b.isElement=function(a){return typeof a=="object"&&a!==null&&a.$$typeof===e},b.isForwardRef=function(a){return x(a)===c},b.isFragment=function(a){return x(a)===n},b.isLazy=function(a){return x(a)===y},b.isMemo=function(a){return x(a)===E},b.isPortal=function(a){return x(a)===t},b.isProfiler=function(a){return x(a)===i},b.isStrictMode=function(a){return x(a)===r},b.isSuspense=function(a){return x(a)===m},b.isSuspenseList=function(a){return x(a)===p},b.isValidElementType=function(a){return typeof a=="string"||typeof a=="function"||a===n||a===i||a===r||a===m||a===p||a===M||typeof a=="object"&&a!==null&&(a.$$typeof===y||a.$$typeof===E||a.$$typeof===l||a.$$typeof===u||a.$$typeof===c||a.$$typeof===I||a.getModuleId!==void 0)},b.typeOf=x,b}var Ue;function Dt(){return Ue||(Ue=1,Ee.exports=Tt()),Ee.exports}Dt();const Ge=e=>typeof e=="object"&&e!=null&&e.nodeType===1,Xe=(e,t)=>(!t||e!=="hidden")&&e!=="visible"&&e!=="clip",Oe=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){const n=getComputedStyle(e,null);return Xe(n.overflowY,t)||Xe(n.overflowX,t)||(r=>{const i=(l=>{if(!l.ownerDocument||!l.ownerDocument.defaultView)return null;try{return l.ownerDocument.defaultView.frameElement}catch{return null}})(r);return!!i&&(i.clientHeight<r.scrollHeight||i.clientWidth<r.scrollWidth)})(e)}return!1},pe=(e,t,n,r,i,l,u,o)=>l<e&&u>t||l>e&&u<t?0:l<=e&&o<=n||u>=t&&o>=n?l-e-r:u>t&&o<n||l<e&&o>n?u-t+i:0,$t=e=>{const t=e.parentElement;return t??(e.getRootNode().host||null)},St=(e,t)=>{var n,r,i,l;if(typeof document>"u")return[];const{scrollMode:u,block:o,inline:c,boundary:m,skipOverflowHiddenElements:p}=t,E=typeof m=="function"?m:j=>j!==m;if(!Ge(e))throw new TypeError("Invalid target");const y=document.scrollingElement||document.documentElement,M=[];let I=e;for(;Ge(I)&&E(I);){if(I=$t(I),I===y){M.push(I);break}I!=null&&I===document.body&&Oe(I)&&!Oe(document.documentElement)||I!=null&&Oe(I,p)&&M.push(I)}const x=(r=(n=window.visualViewport)==null?void 0:n.width)!=null?r:innerWidth,a=(l=(i=window.visualViewport)==null?void 0:i.height)!=null?l:innerHeight,{scrollX:v,scrollY:q}=window,{height:P,width:H,top:Q,right:Z,bottom:re,left:ee}=e.getBoundingClientRect(),{top:ce,right:de,bottom:fe,left:ge}=(j=>{const w=window.getComputedStyle(j);return{top:parseFloat(w.scrollMarginTop)||0,right:parseFloat(w.scrollMarginRight)||0,bottom:parseFloat(w.scrollMarginBottom)||0,left:parseFloat(w.scrollMarginLeft)||0}})(e);let S=o==="start"||o==="nearest"?Q-ce:o==="end"?re+fe:Q+P/2-ce+fe,R=c==="center"?ee+H/2-ge+de:c==="end"?Z+de:ee-ge;const ie=[];for(let j=0;j<M.length;j++){const w=M[j],{height:h,width:g,top:f,right:O,bottom:V,left:K}=w.getBoundingClientRect();if(u==="if-needed"&&Q>=0&&ee>=0&&re<=a&&Z<=x&&Q>=f&&re<=V&&ee>=K&&Z<=O)return ie;const k=getComputedStyle(w),A=parseInt(k.borderLeftWidth,10),B=parseInt(k.borderTopWidth,10),W=parseInt(k.borderRightWidth,10),L=parseInt(k.borderBottomWidth,10);let D=0,$=0;const z="offsetWidth"in w?w.offsetWidth-w.clientWidth-A-W:0,U="offsetHeight"in w?w.offsetHeight-w.clientHeight-B-L:0,X="offsetWidth"in w?w.offsetWidth===0?0:g/w.offsetWidth:0,N="offsetHeight"in w?w.offsetHeight===0?0:h/w.offsetHeight:0;if(y===w)D=o==="start"?S:o==="end"?S-a:o==="nearest"?pe(q,q+a,a,B,L,q+S,q+S+P,P):S-a/2,$=c==="start"?R:c==="center"?R-x/2:c==="end"?R-x:pe(v,v+x,x,A,W,v+R,v+R+H,H),D=Math.max(0,D+q),$=Math.max(0,$+v);else{D=o==="start"?S-f-B:o==="end"?S-V+L+U:o==="nearest"?pe(f,V,h,B,L+U,S,S+P,P):S-(f+h/2)+U/2,$=c==="start"?R-K-A:c==="center"?R-(K+g/2)+z/2:c==="end"?R-O+W+z:pe(K,O,g,A,W+z,R,R+H,H);const{scrollLeft:_,scrollTop:F}=w;D=N===0?0:Math.max(0,Math.min(F+D/N,w.scrollHeight-h/N+U)),$=X===0?0:Math.max(0,Math.min(_+$/X,w.scrollWidth-g/X+z)),S+=F-D,R+=_-$}ie.push({el:w,top:D,left:$})}return ie};var te=function(){return te=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},te.apply(this,arguments)};var Rt=0;function rt(){}function kt(e,t){if(e){var n=St(e,{boundary:t,block:"nearest",scrollMode:"if-needed"});n.forEach(function(r){var i=r.el,l=r.top,u=r.left;i.scrollTop=l,i.scrollLeft=u})}}function Ye(e,t,n){var r=e===t||t instanceof n.Node&&e.contains&&e.contains(t);return r}function Se(e,t){var n;function r(){n&&clearTimeout(n)}function i(){for(var l=arguments.length,u=new Array(l),o=0;o<l;o++)u[o]=arguments[o];r(),n=setTimeout(function(){n=null,e.apply(void 0,u)},t)}return i.cancel=r,i}function Y(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){for(var i=arguments.length,l=new Array(i>1?i-1:0),u=1;u<i;u++)l[u-1]=arguments[u];return t.some(function(o){return o&&o.apply(void 0,[r].concat(l)),r.preventDownshiftDefault||r.hasOwnProperty("nativeEvent")&&r.nativeEvent.preventDownshiftDefault})}}function Te(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){t.forEach(function(i){typeof i=="function"?i(r):i&&(i.current=r)})}}function Bt(){return String(Rt++)}function De(e,t){return!e||!t?e:Object.keys(e).reduce(function(n,r){return n[r]=Lt(t,r)?t[r]:e[r],n},{})}function Lt(e,t){return e[t]!==void 0}function Ht(e){var t=e.key,n=e.keyCode;return n>=37&&n<=40&&t.indexOf("Arrow")!==0?"Arrow"+t:t}function ve(e,t,n,r,i){i===void 0&&(i=!1);var l=n.length;if(l===0)return-1;var u=l-1;(typeof e!="number"||e<0||e>u)&&(e=t>0?-1:u+1);var o=e+t;o<0?o=i?u:0:o>u&&(o=i?0:u);var c=ye(o,t<0,n,r,i);return c===-1?e>=l?-1:e:c}function ye(e,t,n,r,i){i===void 0&&(i=!1);var l=n.length;if(t){for(var u=e;u>=0;u--)if(!r(n[u],u))return u}else for(var o=e;o<l;o++)if(!r(n[o],o))return o;return i?ye(t?l-1:0,t,n,r):-1}function Je(e,t,n,r){return r===void 0&&(r=!0),n&&t.some(function(i){return i&&(Ye(i,e,n)||r&&Ye(i,n.document.activeElement,n))})}var Kt=Se(function(e){it(e).textContent=""},500);function it(e){var t=e.getElementById("a11y-status-message");return t||(t=e.createElement("div"),t.setAttribute("id","a11y-status-message"),t.setAttribute("role","status"),t.setAttribute("aria-live","polite"),t.setAttribute("aria-relevant","additions text"),Object.assign(t.style,{border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",width:"1px"}),e.body.appendChild(t),t)}function Ft(e,t){if(!(!e||!t)){var n=it(t);n.textContent=e,Kt(t)}}function Pt(e){var t=e==null?void 0:e.getElementById("a11y-status-message");t&&t.remove()}var ot={highlightedIndex:-1,isOpen:!1,selectedItem:null,inputValue:""};function Vt(e,t,n){var r=e.props,i=e.type,l={};Object.keys(t).forEach(function(u){At(u,e,t,n),n[u]!==t[u]&&(l[u]=n[u])}),r.onStateChange&&Object.keys(l).length&&r.onStateChange(T({type:i},l))}function At(e,t,n,r){var i=t.props,l=t.type,u="on"+Re(e)+"Change";i[u]&&r[e]!==void 0&&r[e]!==n[e]&&i[u](T({type:l},r))}function Wt(e,t){return t.changes}var Qe=Se(function(e,t){Ft(e,t)},200),Nt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?d.useLayoutEffect:d.useEffect,_t="useId"in C?function(t){var n=t.id,r=t.labelId,i=t.menuId,l=t.getItemId,u=t.toggleButtonId,o=t.inputId,c="downshift-"+C.useId();n||(n=c);var m=d.useRef({labelId:r||n+"-label",menuId:i||n+"-menu",getItemId:l||function(p){return n+"-item-"+p},toggleButtonId:u||n+"-toggle-button",inputId:o||n+"-input"});return m.current}:function(t){var n=t.id,r=n===void 0?"downshift-"+Bt():n,i=t.labelId,l=t.menuId,u=t.getItemId,o=t.toggleButtonId,c=t.inputId,m=d.useRef({labelId:i||r+"-label",menuId:l||r+"-menu",getItemId:u||function(p){return r+"-item-"+p},toggleButtonId:o||r+"-toggle-button",inputId:c||r+"-input"});return m.current};function qt(e,t,n,r){var i,l;if(e===void 0){if(t===void 0)throw new Error(r);i=n[t],l=t}else l=t===void 0?n.indexOf(e):t,i=e;return[i,l]}function jt(e){return/^\S{1}$/.test(e)}function Re(e){return""+e.slice(0,1).toUpperCase()+e.slice(1)}function lt(e){var t=d.useRef(e);return t.current=e,t}function zt(e,t,n,r){var i=d.useRef(),l=d.useRef(),u=d.useCallback(function(M,I){l.current=I,M=De(M,I.props);var x=e(M,I),a=I.props.stateReducer(M,T({},I,{changes:x}));return a},[e]),o=d.useReducer(u,t,n),c=o[0],m=o[1],p=lt(t),E=d.useCallback(function(M){return m(T({props:p.current},M))},[p]),y=l.current;return d.useEffect(function(){var M=De(i.current,y==null?void 0:y.props),I=y&&i.current&&!r(M,c);I&&Vt(y,M,c),i.current=c},[c,y,r]),[c,E]}function Ut(e,t,n,r){var i=zt(e,t,n,r),l=i[0],u=i[1];return[De(l,t),u]}var le={itemToString:function(t){return t?String(t):""},itemToKey:function(t){return t},stateReducer:Wt,scrollIntoView:kt,environment:typeof window>"u"?void 0:window};function J(e,t,n){n===void 0&&(n=ot);var r=e["default"+Re(t)];return r!==void 0?r:n[t]}function ue(e,t,n){n===void 0&&(n=ot);var r=e[t];if(r!==void 0)return r;var i=e["initial"+Re(t)];return i!==void 0?i:J(e,t,n)}function Gt(e){var t=ue(e,"selectedItem"),n=ue(e,"isOpen"),r=tn(e),i=ue(e,"inputValue");return{highlightedIndex:r<0&&t&&n?e.items.findIndex(function(l){return e.itemToKey(l)===e.itemToKey(t)}):r,isOpen:n,selectedItem:t,inputValue:i}}function xe(e,t,n){var r=e.items,i=e.initialHighlightedIndex,l=e.defaultHighlightedIndex,u=e.isItemDisabled,o=e.itemToKey,c=t.selectedItem,m=t.highlightedIndex;return r.length===0?-1:i!==void 0&&m===i&&!u(r[i],i)?i:l!==void 0&&!u(r[l],l)?l:c?r.findIndex(function(p){return o(c)===o(p)}):n<0&&!u(r[r.length-1],r.length-1)?r.length-1:n>0&&!u(r[0],0)?0:-1}function Xt(e,t,n){var r=d.useRef({isMouseDown:!1,isTouchMove:!1,isTouchEnd:!1});return d.useEffect(function(){if(!e)return rt;var i=n.map(function(p){return p.current});function l(){r.current.isTouchEnd=!1,r.current.isMouseDown=!0}function u(p){r.current.isMouseDown=!1,Je(p.target,i,e)||t()}function o(){r.current.isTouchEnd=!1,r.current.isTouchMove=!1}function c(){r.current.isTouchMove=!0}function m(p){r.current.isTouchEnd=!0,!r.current.isTouchMove&&!Je(p.target,i,e,!1)&&t()}return e.addEventListener("mousedown",l),e.addEventListener("mouseup",u),e.addEventListener("touchstart",o),e.addEventListener("touchmove",c),e.addEventListener("touchend",m),function(){e.removeEventListener("mousedown",l),e.removeEventListener("mouseup",u),e.removeEventListener("touchstart",o),e.removeEventListener("touchmove",c),e.removeEventListener("touchend",m)}},[n,e,t]),r.current}var Yt=function(){return rt};function Jt(e,t,n,r){r===void 0&&(r={});var i=r.document,l=en();d.useEffect(function(){if(!(!e||l||!i)){var u=e(t);Qe(u,i)}},n),d.useEffect(function(){return function(){Qe.cancel(),Pt(i)}},[i])}function Qt(e){var t=e.highlightedIndex,n=e.isOpen,r=e.itemRefs,i=e.getItemNodeFromIndex,l=e.menuElement,u=e.scrollIntoView,o=d.useRef(!0);return Nt(function(){t<0||!n||!Object.keys(r.current).length||(o.current===!1?o.current=!0:u(i(t),l))},[t]),o}function Ze(e,t,n){var r,i=((r=e.items)==null?void 0:r.length)&&t>=0;return T({isOpen:!1,highlightedIndex:-1},i&&T({selectedItem:e.items[t],isOpen:J(e,"isOpen"),highlightedIndex:J(e,"highlightedIndex")},n))}function Zt(e,t){return e.isOpen===t.isOpen&&e.inputValue===t.inputValue&&e.highlightedIndex===t.highlightedIndex&&e.selectedItem===t.selectedItem}function en(){var e=C.useRef(!0);return C.useEffect(function(){return e.current=!1,function(){e.current=!0}},[]),e.current}function ut(e){var t=J(e,"highlightedIndex");return t>-1&&e.isItemDisabled(e.items[t],t)?-1:t}function tn(e){var t=ue(e,"highlightedIndex");return t>-1&&e.isItemDisabled(e.items[t],t)?-1:t}var Ie={environment:s.shape({addEventListener:s.func.isRequired,removeEventListener:s.func.isRequired,document:s.shape({createElement:s.func.isRequired,getElementById:s.func.isRequired,activeElement:s.any.isRequired,body:s.any.isRequired}).isRequired,Node:s.func.isRequired}),itemToString:s.func,itemToKey:s.func,stateReducer:s.func},st=T({},Ie,{getA11yStatusMessage:s.func,highlightedIndex:s.number,defaultHighlightedIndex:s.number,initialHighlightedIndex:s.number,isOpen:s.bool,defaultIsOpen:s.bool,initialIsOpen:s.bool,selectedItem:s.any,initialSelectedItem:s.any,defaultSelectedItem:s.any,id:s.string,labelId:s.string,menuId:s.string,getItemId:s.func,toggleButtonId:s.string,onSelectedItemChange:s.func,onHighlightedIndexChange:s.func,onStateChange:s.func,onIsOpenChange:s.func,scrollIntoView:s.func});function nn(e,t,n){var r=t.type,i=t.props,l;switch(r){case n.ItemMouseMove:l={highlightedIndex:t.disabled?-1:t.index};break;case n.MenuMouseLeave:l={highlightedIndex:-1};break;case n.ToggleButtonClick:case n.FunctionToggleMenu:l={isOpen:!e.isOpen,highlightedIndex:e.isOpen?-1:xe(i,e,0)};break;case n.FunctionOpenMenu:l={isOpen:!0,highlightedIndex:xe(i,e,0)};break;case n.FunctionCloseMenu:l={isOpen:!1};break;case n.FunctionSetHighlightedIndex:l={highlightedIndex:i.isItemDisabled(i.items[t.highlightedIndex],t.highlightedIndex)?-1:t.highlightedIndex};break;case n.FunctionSetInputValue:l={inputValue:t.inputValue};break;case n.FunctionReset:l={highlightedIndex:ut(i),isOpen:J(i,"isOpen"),selectedItem:J(i,"selectedItem"),inputValue:J(i,"inputValue")};break;default:throw new Error("Reducer called without proper action type.")}return T({},e,l)}function rn(e){for(var t=e.keysSoFar,n=e.highlightedIndex,r=e.items,i=e.itemToString,l=e.isItemDisabled,u=t.toLowerCase(),o=0;o<r.length;o++){var c=(o+n+(t.length<2?1:0))%r.length,m=r[c];if(m!==void 0&&i(m).toLowerCase().startsWith(u)&&!l(m,c))return c}return n}te(te({},st),{items:s.array.isRequired,isItemDisabled:s.func});var on=te(te({},le),{isItemDisabled:function(){return!1}}),be=0,ke=1,Be=2,we=3,Le=4,He=5,Ke=6,Fe=7,Pe=8,Ve=9,Ae=10,Ce=11,at=12,ct=13,We=14,dt=15,ft=16,gt=17,ht=18,Ne=19,$e=20,mt=21,pt=Object.freeze({__proto__:null,FunctionCloseMenu:gt,FunctionOpenMenu:ft,FunctionReset:mt,FunctionSelectItem:Ne,FunctionSetHighlightedIndex:ht,FunctionSetInputValue:$e,FunctionToggleMenu:dt,ItemClick:We,ItemMouseMove:ct,MenuMouseLeave:at,ToggleButtonBlur:Ce,ToggleButtonClick:be,ToggleButtonKeyDownArrowDown:ke,ToggleButtonKeyDownArrowUp:Be,ToggleButtonKeyDownCharacter:we,ToggleButtonKeyDownEnd:Ke,ToggleButtonKeyDownEnter:Fe,ToggleButtonKeyDownEscape:Le,ToggleButtonKeyDownHome:He,ToggleButtonKeyDownPageDown:Ae,ToggleButtonKeyDownPageUp:Ve,ToggleButtonKeyDownSpaceButton:Pe});function ln(e,t){var n,r=t.type,i=t.props,l=t.altKey,u;switch(r){case We:u={isOpen:J(i,"isOpen"),highlightedIndex:ut(i),selectedItem:i.items[t.index]};break;case we:{var o=t.key,c=""+e.inputValue+o,m=!e.isOpen&&e.selectedItem?i.items.findIndex(function(M){return i.itemToKey(M)===i.itemToKey(e.selectedItem)}):e.highlightedIndex,p=rn({keysSoFar:c,highlightedIndex:m,items:i.items,itemToString:i.itemToString,isItemDisabled:i.isItemDisabled});u={inputValue:c,highlightedIndex:p,isOpen:!0}}break;case ke:{var E=e.isOpen?ve(e.highlightedIndex,1,i.items,i.isItemDisabled):l&&e.selectedItem==null?-1:xe(i,e,1);u={highlightedIndex:E,isOpen:!0}}break;case Be:if(e.isOpen&&l)u=Ze(i,e.highlightedIndex,!1);else{var y=e.isOpen?ve(e.highlightedIndex,-1,i.items,i.isItemDisabled):xe(i,e,-1);u={highlightedIndex:y,isOpen:!0}}break;case Fe:case Pe:u=Ze(i,e.highlightedIndex,!1);break;case He:u={highlightedIndex:ye(0,!1,i.items,i.isItemDisabled),isOpen:!0};break;case Ke:u={highlightedIndex:ye(i.items.length-1,!0,i.items,i.isItemDisabled),isOpen:!0};break;case Ve:u={highlightedIndex:ve(e.highlightedIndex,-10,i.items,i.isItemDisabled)};break;case Ae:u={highlightedIndex:ve(e.highlightedIndex,10,i.items,i.isItemDisabled)};break;case Le:u={isOpen:!1,highlightedIndex:-1};break;case Ce:u=T({isOpen:!1,highlightedIndex:-1},e.highlightedIndex>=0&&((n=i.items)==null?void 0:n.length)&&{selectedItem:i.items[e.highlightedIndex]});break;case Ne:u={selectedItem:t.selectedItem};break;default:return nn(e,t,pt)}return T({},e,u)}var un=["onClick"],sn=["onMouseLeave","refKey","ref"],an=["onBlur","onClick","onPress","onKeyDown","refKey","ref"],cn=["item","index","onMouseMove","onClick","onMouseDown","onPress","refKey","disabled","ref"];dn.stateChangeTypes=pt;function dn(e){e===void 0&&(e={});var t=T({},on,e),n=t.scrollIntoView,r=t.environment,i=t.getA11yStatusMessage,l=Ut(ln,t,Gt,Zt),u=l[0],o=l[1],c=u.isOpen,m=u.highlightedIndex,p=u.selectedItem,E=u.inputValue,y=d.useRef(null),M=d.useRef(null),I=d.useRef({}),x=d.useRef(null),a=_t(t),v=lt({state:u,props:t}),q=d.useCallback(function(h){return I.current[a.getItemId(h)]},[a]);Jt(i,u,[c,m,p,E],r);var P=Qt({menuElement:M.current,highlightedIndex:m,isOpen:c,itemRefs:I,scrollIntoView:n,getItemNodeFromIndex:q});d.useEffect(function(){return x.current=Se(function(h){h({type:$e,inputValue:""})},500),function(){x.current.cancel()}},[]),d.useEffect(function(){E&&x.current(o)},[o,E]),d.useEffect(function(){var h=ue(t,"isOpen");h&&y.current&&y.current.focus()},[]);var H=Xt(r,d.useCallback(function(){v.current.state.isOpen&&o({type:Ce})},[o,v]),d.useMemo(function(){return[M,y]},[M.current,y.current])),Q=Yt();d.useEffect(function(){c||(I.current={})},[c]);var Z=d.useMemo(function(){return{ArrowDown:function(g){g.preventDefault(),o({type:ke,altKey:g.altKey})},ArrowUp:function(g){g.preventDefault(),o({type:Be,altKey:g.altKey})},Home:function(g){g.preventDefault(),o({type:He})},End:function(g){g.preventDefault(),o({type:Ke})},Escape:function(){v.current.state.isOpen&&o({type:Le})},Enter:function(g){g.preventDefault(),o({type:v.current.state.isOpen?Fe:be})},PageUp:function(g){v.current.state.isOpen&&(g.preventDefault(),o({type:Ve}))},PageDown:function(g){v.current.state.isOpen&&(g.preventDefault(),o({type:Ae}))}," ":function(g){g.preventDefault();var f=v.current.state;if(!f.isOpen){o({type:be});return}f.inputValue?o({type:we,key:" "}):o({type:Pe})}}},[o,v]),re=d.useCallback(function(){o({type:dt})},[o]),ee=d.useCallback(function(){o({type:gt})},[o]),ce=d.useCallback(function(){o({type:ft})},[o]),de=d.useCallback(function(h){o({type:ht,highlightedIndex:h})},[o]),fe=d.useCallback(function(h){o({type:Ne,selectedItem:h})},[o]),ge=d.useCallback(function(){o({type:mt})},[o]),S=d.useCallback(function(h){o({type:$e,inputValue:h})},[o]),R=d.useCallback(function(h){var g=h===void 0?{}:h,f=g.onClick,O=me(g,un),V=function(){var k;(k=y.current)==null||k.focus()};return T({id:a.labelId,htmlFor:a.toggleButtonId,onClick:Y(f,V)},O)},[a]),ie=d.useCallback(function(h,g){var f,O=h===void 0?{}:h,V=O.onMouseLeave,K=O.refKey,k=K===void 0?"ref":K,A=O.ref,B=me(O,sn),W=g===void 0?{}:g;W.suppressRefError;var L=function(){o({type:at})};return T((f={},f[k]=Te(A,function(D){M.current=D}),f.id=a.menuId,f.role="listbox",f["aria-labelledby"]=B&&B["aria-label"]?void 0:""+a.labelId,f.onMouseLeave=Y(V,L),f),B)},[o,Q,a]),j=d.useCallback(function(h,g){var f,O=h===void 0?{}:h,V=O.onBlur,K=O.onClick;O.onPress;var k=O.onKeyDown,A=O.refKey,B=A===void 0?"ref":A,W=O.ref,L=me(O,an),D=g===void 0?{}:g;D.suppressRefError;var $=v.current.state,z=function(){o({type:be})},U=function(){$.isOpen&&!H.isMouseDown&&o({type:Ce})},X=function(F){var G=Ht(F);G&&Z[G]?Z[G](F):jt(G)&&o({type:we,key:G})},N=T((f={},f[B]=Te(W,function(_){y.current=_}),f["aria-activedescendant"]=$.isOpen&&$.highlightedIndex>-1?a.getItemId($.highlightedIndex):"",f["aria-controls"]=a.menuId,f["aria-expanded"]=v.current.state.isOpen,f["aria-haspopup"]="listbox",f["aria-labelledby"]=L&&L["aria-label"]?void 0:""+a.labelId,f.id=a.toggleButtonId,f.role="combobox",f.tabIndex=0,f.onBlur=Y(V,U),f),L);return L.disabled||(N.onClick=Y(K,z),N.onKeyDown=Y(k,X)),N},[o,a,v,H,Q,Z]),w=d.useCallback(function(h){var g,f=h===void 0?{}:h,O=f.item,V=f.index,K=f.onMouseMove,k=f.onClick,A=f.onMouseDown;f.onPress;var B=f.refKey,W=B===void 0?"ref":B,L=f.disabled,D=f.ref,$=me(f,cn);L!==void 0&&console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled prop from useSelect.');var z=v.current,U=z.state,X=z.props,N=qt(O,V,X.items,"Pass either item or index to getItemProps!"),_=N[0],F=N[1],G=X.isItemDisabled(_,F),yt=function(){H.isTouchEnd||F===U.highlightedIndex||(P.current=!1,o({type:ct,index:F,disabled:G}))},xt=function(){o({type:We,index:F})},wt=function(Ct){return Ct.preventDefault()},he=T((g={},g[W]=Te(D,function(oe){oe&&(I.current[a.getItemId(F)]=oe)}),g["aria-disabled"]=G,g["aria-selected"]=_===U.selectedItem,g.id=a.getItemId(F),g.role="option",g),$);return G||(he.onClick=Y(k,xt)),he.onMouseMove=Y(K,yt),he.onMouseDown=Y(A,wt),he},[v,a,H,P,o]);return{getToggleButtonProps:j,getLabelProps:R,getMenuProps:ie,getItemProps:w,toggleMenu:re,openMenu:ce,closeMenu:ee,setHighlightedIndex:de,selectItem:fe,reset:ge,setInputValue:S,highlightedIndex:m,isOpen:c,selectedItem:p,inputValue:E}}T({},st,{items:s.array.isRequired,isItemDisabled:s.func,inputValue:s.string,defaultInputValue:s.string,initialInputValue:s.string,inputId:s.string,onInputValueChange:s.func});T({},le,{isItemDisabled:function(){return!1}});Ie.stateReducer,Ie.itemToKey,Ie.environment,s.array,s.array,s.array,s.func,s.number,s.number,s.number,s.func,s.func,s.string,s.string;le.itemToKey,le.stateReducer,le.environment;const fn=["default","inline"],gn=["sm","md","lg"],hn=s.oneOf(fn),mn=s.oneOf(gn),pn=e=>{e.keyCode===27&&e.stopPropagation()},vn=e=>{e.preventDefault(),e.stopPropagation()},_e=C.forwardRef(function(t,n){let{children:r,className:i,disabled:l=!1,type:u="default",size:o,invalid:c,invalidText:m,invalidTextId:p,warn:E,warnText:y,warnTextId:M,light:I,isOpen:x,...a}=t;const v=ne(),{isFluid:q}=d.useContext(Ot),P=!c&&E,H=se({...i&&{[i]:!0},[`${v}--list-box`]:!0,[`${v}--list-box--${o}`]:o,[`${v}--list-box--inline`]:u==="inline",[`${v}--list-box--disabled`]:l,[`${v}--list-box--light`]:I,[`${v}--list-box--expanded`]:x,[`${v}--list-box--invalid`]:c,[`${v}--list-box--warning`]:P});return C.createElement(C.Fragment,null,C.createElement("div",Me({},a,{className:H,ref:n,onKeyDown:pn,onClick:vn,"data-invalid":c||void 0}),r),q&&C.createElement("hr",{className:`${v}--list-box__divider`}),c?C.createElement("div",{className:`${v}--form-requirement`,id:p},m):null,P?C.createElement("div",{className:`${v}--form-requirement`,id:M},y):null)});_e.displayName="ListBox";_e.propTypes={children:s.node,className:s.string,disabled:s.bool,invalid:s.bool,invalidText:s.node,invalidTextId:s.string,isOpen:s.bool,light:Mt(s.bool),size:mn,type:hn,warn:s.bool,warnText:s.string,warnTextId:s.string};function vt(e){let{children:t,disabled:n,tabIndex:r,...i}=e;const l=ne();return C.createElement("div",Me({className:`${l}--list-box__field`,tabIndex:!n&&r||-1},i),t)}vt.propTypes={"aria-haspopup":s.oneOfType([s.string,s.bool]),children:s.node,disabled:s.bool,role:s.string,tabIndex:s.oneOfType([s.number,s.string])};function In(e){const[t,n]=d.useState(!1);return d.useEffect(()=>{const r=e.current,{offsetWidth:i,scrollWidth:l}=r;n(i<l)},[e,n]),t}const ae=C.forwardRef(function(t,n){let{children:r,isActive:i=!1,isHighlighted:l=!1,title:u,...o}=t;const c=ne(),m=d.useRef(null),p=In((n==null?void 0:n.menuItemOptionRef)||m),E=se(`${c}--list-box__menu-item`,{[`${c}--list-box__menu-item--active`]:i,[`${c}--list-box__menu-item--highlighted`]:l});return C.createElement("li",Me({},o,{className:E,title:p?u:void 0}),C.createElement("div",{className:`${c}--list-box__menu-item__option`,ref:(n==null?void 0:n.menuItemOptionRef)||m},r))});ae.displayName="ListBoxMenuItem";ae.propTypes={children:s.node,disabled:s.bool,isActive:s.bool,isHighlighted:s.bool,title:s.string};const qe=C.forwardRef(function(t,n){let{children:r,id:i,...l}=t;const u=ne();return C.createElement("ul",Me({ref:n,id:i,className:`${u}--list-box__menu`,role:"listbox"},l),r)});qe.displayName="ListBoxMenu";qe.propTypes={children:s.oneOfType([s.node,s.arrayOf(s.oneOf([ae])),s.shape({type:s.oneOf([ae])}),s.bool]),id:s.string.isRequired};const bn={"close.menu":"Close menu","open.menu":"Open menu"},yn=e=>bn[e],It=e=>{let{isOpen:t,translateWithId:n=yn}=e;const r=ne(),i=se(`${r}--list-box__menu-icon`,{[`${r}--list-box__menu-icon--open`]:t}),l=n(t?"close.menu":"open.menu");return C.createElement("div",{className:i},C.createElement(Et,{name:"chevron--down","aria-label":l},C.createElement("title",null,l)))};It.propTypes={isOpen:s.bool.isRequired,translateWithId:s.func};var et,tt;const nt={"clear.all":"clear.all","clear.selection":"clear.selection"},xn={[nt["clear.all"]]:"Clear all selected items",[nt["clear.selection"]]:"Clear selected item"},wn=e=>xn[e],bt=e=>{let{clearSelection:t,selectionCount:n,translateWithId:r=wn,disabled:i,onClearSelection:l,readOnly:u}=e;const o=ne(),c=se(`${o}--list-box__selection`,{[`${o}--tag--filter`]:n,[`${o}--list-box__selection--multi`]:n}),m=y=>{y.stopPropagation(),!(i||u)&&(t(y),l&&l(y))},p=r(n?"clear.all":"clear.selection"),E=se(`${o}--tag`,`${o}--tag--filter`,`${o}--tag--high-contrast`,{[`${o}--tag--disabled`]:i});return n?C.createElement("div",{className:E},C.createElement("span",{className:`${o}--tag__label`,title:`${n}`},n),C.createElement("div",{role:"button",tabIndex:-1,className:`${o}--tag__close-icon`,onClick:m,"aria-label":r("clear.all"),title:p,"aria-disabled":u?!0:void 0},et||(et=C.createElement(je,null)))):C.createElement("div",{role:"button",className:c,tabIndex:-1,onClick:m,"aria-label":p,title:p},n,tt||(tt=C.createElement(je,null)))};bt.propTypes={clearSelection:s.func.isRequired,disabled:s.bool,onClearSelection:s.func,readOnly:s.bool,selectionCount:s.number,translateWithId:s.func};const On=Object.assign(_e,{Field:vt,Menu:qe,MenuIcon:It,MenuItem:ae,Selection:bt});export{On as L,mn as a,hn as b,dn as u};
