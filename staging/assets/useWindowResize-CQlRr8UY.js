import{u as S,b as te,c as v,_ as T,a as K,A as ne,i as se,S as oe,e as ae}from"./useMergedRefs-CY5AfkP4.js";import{P as e}from"./index-Dk74W0Oi.js";import{r as t,R as n}from"./index-BwDkhjyp.js";import{u as J}from"./useControllableState-DwpxGhsf.js";import{M as G,u as re,a as Q,b as ie}from"./useAttachedMenu-BaaFYui-.js";import{T as le}from"./Text-CiWJR74P.js";import{f as ce,g as ue,C as X,d as de}from"./events-D6dlm1BF.js";import{B as me}from"./settings-B0yoEqB-.js";import{c as fe,d as pe,f as he,s as ge}from"./index-D2JPet7M.js";import{m as be}from"./mergeRefs-CTUecegF.js";var V,U;const ye=150,Ie=300,H=t.forwardRef(function(u,l){let{children:r,className:d,disabled:c,kind:o="default",label:b,onClick:h,renderIcon:f,shortcut:y,...g}=u;const a=S(),i=t.useContext(G),m=t.useRef(null),E=te([l,m]),[C,p]=t.useState({x:-1,y:-1}),[R,k]=t.useState(!1),I=!!r,[x,z]=t.useState(!1),_=t.useRef(null),M=t.useRef(null),$=c&&!I,L=o==="danger"&&!I;function A(){i.dispatch({type:"registerItem",payload:{ref:m,disabled:!!c}})}function D(){if(!m.current)return;const{x:s,y:O,width:j,height:F}=m.current.getBoundingClientRect();p(R?{x:[-s,s-j],y:[O,O+F]}:{x:[s,s+j],y:[O,O+F]}),z(!0)}function N(){z(!1),p({x:-1,y:-1})}function B(s){$||(I?D():(i.state.requestCloseRoot(s),h&&h(s)))}function q(){M.current&&(clearTimeout(M.current),M.current=null),_.current=setTimeout(()=>{D()},ye)}function Y(){_.current&&(clearTimeout(_.current),M.current=setTimeout(()=>{var s;N(),(s=m.current)==null||s.focus()},Ie))}function Z(s){I&&K(s,ne)&&(D(),s.stopPropagation()),(K(s,se)||K(s,oe))&&B(s),g.onKeyDown&&g.onKeyDown(s)}const ee=v(d,`${a}--menu-item`,{[`${a}--menu-item--disabled`]:$,[`${a}--menu-item--danger`]:L});t.useEffect(()=>{A()},[]);const{direction:P}=re();t.useEffect(()=>{(document==null?void 0:document.dir)==="rtl"||P==="rtl"?k(!0):k(!1)},[P]);const W=i.state.mode==="basic"||g.role==="menuitemcheckbox"||g.role==="menuitemradio";return t.useEffect(()=>{W&&f&&!i.state.hasIcons&&i.dispatch({type:"enableIcons"})},[W,f,i.state.hasIcons,i]),n.createElement("li",T({role:"menuitem"},g,{ref:E,className:ee,tabIndex:-1,"aria-disabled":$??void 0,"aria-haspopup":I??void 0,"aria-expanded":I?x:void 0,onClick:B,onMouseEnter:I?q:void 0,onMouseLeave:I?Y:void 0,onKeyDown:Z}),n.createElement("div",{className:`${a}--menu-item__icon`},W&&f&&n.createElement(f,null)),n.createElement(le,{as:"div",className:`${a}--menu-item__label`,title:b},b),y&&!I&&n.createElement("div",{className:`${a}--menu-item__shortcut`},y),I&&n.createElement(n.Fragment,null,n.createElement("div",{className:`${a}--menu-item__shortcut`},R?V||(V=n.createElement(ce,null)):U||(U=n.createElement(ue,null))),n.createElement(Q,{label:b,open:x,onClose:()=>{var s;N(),(s=m.current)==null||s.focus()},x:C.x,y:C.y},r)))});H.propTypes={children:e.node,className:e.string,disabled:e.bool,kind:e.oneOf(["default","danger"]),label:e.string.isRequired,onClick:e.func,renderIcon:e.oneOfType([e.func,e.object]),shortcut:e.string};const we=t.forwardRef(function(u,l){let{className:r,defaultSelected:d,label:c,onChange:o,selected:b,...h}=u;const f=S(),y=t.useContext(G);y.state.mode;const[g,a]=J({value:b,onChange:o,defaultValue:d??!1});function i(E){a(!g),o&&o(E)}t.useEffect(()=>{y.state.hasIcons||y.dispatch({type:"enableIcons"})},[y.state.hasIcons,y]);const m=v(r,`${f}--menu-item-selectable--selected`);return n.createElement(H,T({},h,{ref:l,label:c,className:m,role:"menuitemcheckbox","aria-checked":g,renderIcon:g?X:void 0,onClick:i}))});we.propTypes={className:e.string,defaultSelected:e.bool,label:e.string.isRequired,onChange:e.func,selected:e.bool};const Ce=t.forwardRef(function(u,l){let{children:r,className:d,label:c,...o}=u;const b=S(),h=v(d,`${b}--menu-item-group`);return n.createElement("li",{className:h,role:"none",ref:l},n.createElement("ul",T({},o,{role:"group","aria-label":c}),r))});Ce.propTypes={children:e.node,className:e.string,label:e.string.isRequired};const xe=w=>w.toString(),Ee=t.forwardRef(function(u,l){let{className:r,defaultSelectedItem:d,items:c,itemToString:o=xe,label:b,onChange:h,selectedItem:f,...y}=u;const g=S(),a=t.useContext(G);a.state.mode;const[i,m]=J({value:f,onChange:h,defaultValue:d});function E(p,R){m(p),h&&h(R)}t.useEffect(()=>{a.state.hasIcons||a.dispatch({type:"enableIcons"})},[a.state.hasIcons,a]);const C=v(r,`${g}--menu-item-radio-group`);return n.createElement("li",{className:C,role:"none",ref:l},n.createElement("ul",T({},y,{role:"group","aria-label":b}),c.map((p,R)=>n.createElement(H,{key:R,label:o(p),role:"menuitemradio","aria-checked":p===i,renderIcon:p===i?X:void 0,onClick:k=>{E(p,k)}}))))});Ee.propTypes={className:e.string,defaultSelectedItem:e.any,itemToString:e.func,items:e.array,label:e.string.isRequired,onChange:e.func,selectedItem:e.any};const Re=t.forwardRef(function(u,l){let{className:r,...d}=u;const c=S(),o=v(r,`${c}--menu-item-divider`);return n.createElement("li",T({},d,{className:o,role:"separator",ref:l}))});Re.propTypes={className:e.string};const ve=["primary","tertiary","ghost"],Ne="primary",ke=t.forwardRef(function(u,l){let{children:r,className:d,disabled:c,kind:o=Ne,label:b,size:h="lg",menuAlignment:f="bottom",tabIndex:y=0,...g}=u;const a=ae("MenuButton"),i=S(),m=t.useRef(null),E=[he({crossAxis:!1})];(f==="bottom"||f==="top")&&E.push(ge({apply(N){let{rects:B,elements:q}=N;Object.assign(q.floating.style,{width:`${B.reference.width}px`})}}));const{refs:C,floatingStyles:p,placement:R,middlewareData:k}=fe({placement:f,strategy:"fixed",middleware:E,whileElementsMounted:pe}),I=be(l,m),{open:x,handleClick:z,handleMousedown:_,handleClose:M}=ie(m);t.useLayoutEffect(()=>{Object.keys(p).forEach(N=>{C.floating.current&&(C.floating.current.style[N]=p[N])})},[p,C.floating,k,R,x]);function $(){m.current&&z()}const L=v(`${i}--menu-button__container`,d),A=v(`${i}--menu-button__trigger`,{[`${i}--menu-button__trigger--open`]:x}),D=v(`${i}--menu-button__${f}`);return n.createElement("div",T({},g,{ref:I,"aria-owns":x?a:void 0,className:L}),n.createElement(me,{ref:C.setReference,className:A,size:h,tabIndex:y,kind:o,renderIcon:de,disabled:c,"aria-haspopup":!0,"aria-expanded":x,onClick:$,onMouseDown:_,"aria-controls":x?a:void 0},b),n.createElement(Q,{containerRef:m,menuAlignment:f,className:D,ref:C.setFloating,id:a,legacyAutoalign:!1,label:b,mode:"basic",size:h,open:x,onClose:M},r))});ke.propTypes={children:e.node.isRequired,className:e.string,disabled:e.bool,kind:e.oneOf(ve),label:e.string.isRequired,menuAlignment:e.oneOf(["top","top-start","top-end","bottom","bottom-start","bottom-end"]),size:e.oneOf(["sm","md","lg"]),tabIndex:e.number};const Me=typeof window<"u",Se=()=>{if(!Me)return{innerHeight:0,innerWidth:0,outerHeight:0,outerWidth:0};const{innerHeight:w,innerWidth:u,outerHeight:l,outerWidth:r}={...window};return{innerHeight:w,innerWidth:u,outerHeight:l,outerWidth:r}},We=(w,u,l=0)=>{const r=t.useRef({}),d=t.useRef(null),c=()=>{const o={previous:r.current,current:Se()};w(o),r.current=o.current,d.current=null};t.useLayoutEffect(()=>{const o=()=>{l?d.current===null&&(d.current=setTimeout(c,l)):c()};return window.addEventListener("resize",o),c(),()=>window.removeEventListener("resize",o)},u)};export{ke as M,H as a,We as u};
