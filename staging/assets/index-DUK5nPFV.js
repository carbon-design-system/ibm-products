import{e as r,r as U}from"./index-BOZkNhcz.js";import{u as Z,a as le,e as ce,f as ue,d as fe,b as pe,c as P,_ as X,P as n,a3 as i,i as de,T as he,O as me,a5 as ee,a6 as ge,w as Y,z as be,A as ye,y as Oe,X as we,E as _e,g as H}from"./index-Cd8snwnz.js";import{I as te,n as T}from"./settings-DqneCnpo.js";import{b as ve,a as Ce}from"./useAttachedMenu-S-3pNb8o.js";import{m as ne}from"./mergeRefs-CTUecegF.js";import{d as Me}from"./index-CN8ymWyE.js";import{d as oe}from"./bucket-12-CsE6RCLW.js";import{M as Ee}from"./index-hBZdtWkn.js";import{c as S,g as Re}from"./_commonjsHelpers-BosuxZz1.js";import{s as Te,a as Ie,w as Pe,b as xe}from"./wrapFocus-CTxWTAfl.js";function Fe(c){function e(o){return r.createElement(c,o)}const t=c.displayName||c.name;return e.displayName=`ClassWrapper(${t})`,e}const G="md",$e=c=>({"top-left":"top-start","top-right":"top-end","bottom-left":"bottom-start","bottom-right":"bottom-end","left-bottom":"left-end","left-top":"left-start","right-bottom":"right-end","right-top":"right-start"})[c],se=r.forwardRef(function(e,t){let{autoAlign:o=!1,children:s,className:u,label:l="Options",renderIcon:a=oe,size:d=G,menuAlignment:h="bottom-start",tooltipAlignment:_,menuTarget:w,...b}=e;const p=Z("enable-v12-dynamic-floating-styles")||o,{refs:f,floatingStyles:y,placement:v,middlewareData:C}=le(p?{placement:h,strategy:"fixed",middleware:[o&&ue({fallbackPlacements:h.includes("bottom")?["bottom-start","bottom-end","top-start","top-end"]:["top-start","top-end","bottom-start","bottom-end"]})],whileElementsMounted:ce}:{}),O=fe("overflowmenu"),m=pe(),g=U.useRef(null),{open:M,x:E,y:z,handleClick:A,handleMousedown:W,handleClose:L}=ve(g);U.useEffect(()=>{p&&Object.keys(y).forEach($=>{f.floating.current&&(f.floating.current.style[$]=y[$])})},[y,p,f.floating,M,v,C]);function x(){g.current&&A()}const j=P(u,`${m}--overflow-menu__container`,{[`${m}--autoalign`]:p}),V=P(`${m}--overflow-menu__${h}`),q=P(`${m}--overflow-menu`,{[`${m}--overflow-menu--open`]:M},d!==G&&`${m}--overflow-menu--${d}`),F=ne(g,f.setReference);return r.createElement("div",X({},b,{className:j,"aria-owns":M?O:void 0,ref:t}),r.createElement(te,{"aria-controls":M?O:void 0,"aria-haspopup":!0,"aria-expanded":M,className:q,onClick:x,onMouseDown:W,ref:F,label:l,align:_,kind:"ghost"},r.createElement(a,{className:`${m}--overflow-menu__icon`})),r.createElement(Ce,{containerRef:g,ref:f.setFloating,menuAlignment:h,className:V,id:O,size:d,legacyAutoalign:!p,open:M,onClose:L,x:E,y:z,label:l,target:w},s))});se.propTypes={autoAlign:n.bool,children:n.node,className:n.string,label:n.string,menuAlignment:n.oneOf(["top-start","top-end","bottom-start","bottom-end"]),renderIcon:n.oneOfType([n.func,n.object]),size:n.oneOf(["sm","md","lg"]),tooltipAlignment:Me(n.oneOf(["top","top-left","top-right","bottom","bottom-left","bottom-right","left","left-bottom","left-top","right","right-bottom","right-top","top-start","top-end","bottom-start","bottom-end","left-end","left-start","right-end","right-start"]),["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"],$e),menuTarget:n.instanceOf(typeof Element<"u"?Element:Object)};var N,J;function De(){return J||(J=1,N=typeof self=="object"&&self.self===self&&self||typeof S=="object"&&S.global===S&&S||N),N}var Se=De();const I=Re(Se),Ne=function(){const e=[];let t=!1;function o(){e.forEach(l=>{l()}),t=!1}function s(){t||(t=!0,I.requestAnimationFrame(o))}function u(l){l&&e.indexOf(l)<0&&e.push(l)}return{add:l=>(e.length||I.addEventListener("resize",s),u(l),{release(){const a=e.indexOf(l);a>=0&&e.splice(a,1)}})}}();var ke=Ne;const ie="left",k="top",re="right",R="bottom",Be=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return typeof c!=typeof e?!0:Object(e)===e&&typeof e!="function"?c.top!==e.top||c.left!==e.left:c!==e},ze=c=>{let{menuSize:e,refPosition:t={},offset:o={},direction:s=R,scrollX:u=0,scrollY:l=0,container:a}=c;const{left:d=0,top:h=0,right:_=0,bottom:w=0}=t,b=a.position!=="static"?0:u,p=a.position!=="static"?0:l,f={top:a.position!=="static"?a.rect.top:0,left:a.position!=="static"?a.rect.left:0},{width:y,height:v}=e,{top:C=0,left:O=0}=o,m=(d+_)/2,g=(h+w)/2;return{[ie]:()=>({left:d-y+b-O-f.left,top:g-v/2+p+C-9-f.top}),[k]:()=>({left:m-y/2+b+O-f.left,top:h-v+p-C-f.top}),[re]:()=>({left:_+b+O-f.left,top:g-v/2+p+C+3-f.top}),[R]:()=>({left:m-y/2+b+O-f.left,top:w+p+C-f.top})}[s]()};class K extends r.Component{constructor(){var e;super(...arguments),e=this,i(this,"_placeInProgress",!1),i(this,"state",{floatingPosition:void 0}),i(this,"_menuContainer",null),i(this,"_menuBody",null),i(this,"startSentinel",r.createRef()),i(this,"endSentinel",r.createRef()),i(this,"_updateMenuSize",function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const s=e._menuBody;if(!s)return;const{menuOffset:u={},menuDirection:l}=t,{menuOffset:a={},menuDirection:d=R}=e.props;if(Be(u,a)||l!==d||o){const{flipped:h,triggerRef:_,updateOrientation:w=null}=e.props,{current:b}=_,p=s.getBoundingClientRect(),f=b&&b.getBoundingClientRect(),y=typeof a!="function"?a:a(s,d,b,h);w&&w({menuSize:p,refPosition:f,direction:d,offset:y,scrollX:I.pageXOffset,scrollY:I.pageYOffset,container:{rect:e.props.target().getBoundingClientRect(),position:getComputedStyle(e.props.target()).position}}),(p.width>0&&p.height>0||!y)&&e.setState({floatingPosition:ze({menuSize:p,refPosition:f,direction:d,offset:y,scrollX:I.pageXOffset,scrollY:I.pageYOffset,container:{rect:e.props.target().getBoundingClientRect(),position:getComputedStyle(e.props.target()).position}})},()=>{o||s.getBoundingClientRect()!==p&&e._updateMenuSize(e.props,!0)})}}),i(this,"_focusMenuContent",t=>{const o=t.querySelector(this.props.selectorPrimaryFocus||null),s=t.querySelector(Te),u=t.querySelector(Ie);(o||s||u||t).focus()}),i(this,"_menuRef",t=>{const{menuRef:o}=this.props;this._placeInProgress=!!t,o&&o(this._menuBody=t),t&&this._updateMenuSize()}),i(this,"_getChildrenWithProps",()=>{const{styles:t,children:o}=this.props,{floatingPosition:s}=this.state,u=s?{left:`${s.left}px`,top:`${s.top}px`,right:"auto"}:{visibility:"hidden",top:"0px"};return r.cloneElement(o,{ref:this._menuRef,style:{...t,...u,position:"absolute",opacity:1}})}),i(this,"handleBlur",t=>{let{target:o,relatedTarget:s}=t;if(s&&o){const{current:u}=this.startSentinel,{current:l}=this.endSentinel;Pe({bodyNode:this._menuBody,currentActiveNode:s,oldActiveNode:o})}}),i(this,"handleKeyDown",t=>{de(t,he)&&this._menuBody&&xe({containerNode:this._menuBody,currentActiveNode:t.target,event:t})})}componentWillUnmount(){this.hResize.release()}componentDidMount(){this.hResize=ke.add(()=>{this._updateMenuSize()})}componentDidUpdate(e){this._updateMenuSize(e);const{onPlace:t}=this.props;this._placeInProgress&&this.state.floatingPosition&&(this._menuBody&&!this._menuBody.contains(document.activeElement)&&this._focusMenuContent(this._menuBody),typeof t=="function"&&(t(this._menuBody),this._placeInProgress=!1))}render(){const{context:e}=this,t=me("enable-experimental-focus-wrap-without-sentinels");if(typeof document<"u"){const{focusTrap:o,target:s}=this.props;return Ee.createPortal(r.createElement("div",{onBlur:o&&!t?this.handleBlur:()=>{},onKeyDown:t?this.handleKeyDown:()=>{}},!t&&r.createElement("span",{ref:this.startSentinel,tabIndex:"0",role:"link",className:`${e}--visually-hidden`},"Focus sentinel"),this._getChildrenWithProps(),!t&&r.createElement("span",{ref:this.endSentinel,tabIndex:"0",role:"link",className:`${e}--visually-hidden`},"Focus sentinel")),s?s():document.body)}return null}}i(K,"contextType",ee);i(K,"propTypes",{children:n.object,flipped:n.bool,focusTrap:n.bool,menuDirection:n.oneOf([ie,k,re,R]),menuOffset:n.oneOfType([n.shape({top:n.number,left:n.number}),n.func]),menuRef:n.func,onPlace:n.func,selectorPrimaryFocus:n.string,styles:n.object,target:n.func,triggerRef:n.oneOfType([n.func,n.shape({current:n.any})]),updateOrientation:n.func});var Ae=K;class D extends r.Component{static getEventTarget(e){return e.composed&&typeof e.composedPath=="function"?e.composedPath()[0]:e.target}constructor(e){super(e),this.handleRef=this.handleRef.bind(this),this.handleDocumentClick=this.handleDocumentClick.bind(this)}componentDidMount(){document.addEventListener("click",this.handleDocumentClick)}componentWillUnmount(){document.removeEventListener("click",this.handleDocumentClick)}handleDocumentClick(e){this.element&&this.element.contains&&!this.element.contains(D.getEventTarget(e))&&this.props.onClickOutside(e)}handleRef(e){const{children:t}=this.props;this.element=e,t.ref&&typeof t.ref=="function"&&t.ref(e)}render(){return r.cloneElement(this.props.children,{ref:this.handleRef})}}i(D,"propTypes",{children:n.element.isRequired,onClickOutside:n.func.isRequired});const We=ge(),Le=function(c){for(var e=arguments.length,t=new Array(e>1?e-1:0),o=1;o<e;o++)t[o-1]=arguments[o];return c.addEventListener(...t),{release(){return c.removeEventListener(...t),null}}},je={[k]:"bottom",[R]:"top"},Q=(c,e,t,o)=>{const s=je[e],{offsetWidth:u,offsetHeight:l}=c;switch(s){case"top":case"bottom":{const a=t?t.offsetWidth:0;return{left:(o?-1:1)*(u/2-a/2),top:0}}}};let B=class extends r.Component{constructor(){super(...arguments),i(this,"state",{open:!1,hasMountedTrigger:!1,click:!1}),i(this,"instanceId",We()),i(this,"_hFocusIn",null),i(this,"_hBlurTimeout",void 0),i(this,"_triggerRef",r.createRef()),i(this,"handleClick",e=>{const{onClick:t=T}=this.props;this.setState({click:!0}),(!this._menuBody||!this._menuBody.contains(e.target))&&(this.setState({open:!this.state.open}),t(e))}),i(this,"closeMenuAndFocus",()=>{const e=this.state.click,t=this.state.open;this.closeMenu(()=>{t&&!e&&this.focusMenuEl()})}),i(this,"closeMenuOnEscape",()=>{const e=this.state.open;this.closeMenu(()=>{e&&this.focusMenuEl()})}),i(this,"handleKeyPress",e=>{this.state.open&&Y(e,[be,ye,Oe,we])&&e.preventDefault(),Y(e,[_e])&&(this.closeMenuOnEscape(),e.stopPropagation())}),i(this,"handleClickOutside",e=>{this.state.open&&(!this._menuBody||!this._menuBody.contains(e.target))&&this.closeMenu()}),i(this,"closeMenu",e=>{const{onClose:t=T}=this.props;this.setState({open:!1},()=>{e&&e(),t()})}),i(this,"focusMenuEl",()=>{const{current:e}=this._triggerRef;e&&e.focus()}),i(this,"handleOverflowMenuItemFocus",e=>{let{currentIndex:t,direction:o}=e;const s=r.Children.toArray(this.props.children).reduce((a,d,h)=>(r.isValidElement(d)&&!d.props.disabled&&a.push(h),a),[]),u=(()=>{const a=s.indexOf(t)+o;switch(a){case-1:return s.length-1;case s.length:return 0;default:return a}})(),l=this[`overflowMenuItem${s[u]}`];l==null||l.focus()}),i(this,"_menuBody",null),i(this,"_bindMenuBody",e=>{e||(this._menuBody=e),!e&&this._hFocusIn&&(this._hFocusIn=this._hFocusIn.release())}),i(this,"_handlePlace",e=>{const{onOpen:t=T}=this.props;if(e){this._menuBody=e;const o="onfocusin"in window,s=o?"focusin":"focus";this._hFocusIn=Le(e.ownerDocument,s,u=>{const l=D.getEventTarget(u),{current:a}=this._triggerRef;typeof l.matches=="function"&&!e.contains(l)&&a&&!l.matches(`.${this.context}--overflow-menu:first-child,.${this.context}--overflow-menu-options:first-child`)&&this.closeMenuAndFocus()},!o),t()}}),i(this,"_getTarget",()=>{const{current:e}=this._triggerRef;return e instanceof Element&&e.closest("[data-floating-menu-container]")||document.body})}componentDidUpdate(e,t){const{onClose:o=T}=this.props;!this.state.open&&t.open&&o()}componentDidMount(){this._triggerRef.current&&this.setState({hasMountedTrigger:!0})}static getDerivedStateFromProps(e,t){let{open:o}=e;const{prevOpen:s}=t;return s===o?null:{open:o,prevOpen:o}}componentWillUnmount(){typeof this._hBlurTimeout=="number"&&(clearTimeout(this._hBlurTimeout),this._hBlurTimeout=void 0)}render(){const e=this.context,{id:t,["aria-label"]:o=null,ariaLabel:s,children:u,iconDescription:l="Options",direction:a=R,flipped:d=!1,focusTrap:h=!0,menuOffset:_=Q,menuOffsetFlip:w=Q,iconClass:b,onClick:p=T,onOpen:f=T,selectorPrimaryFocus:y="[data-floating-menu-primary-focus]",renderIcon:v=oe,innerRef:C,menuOptionsClass:O,light:m,size:g="md",...M}=this.props,{open:E=!1}=this.state,z=P(this.props.className,`${e}--overflow-menu`,{[`${e}--overflow-menu--open`]:E,[`${e}--overflow-menu--light`]:m,[`${e}--overflow-menu--${g}`]:g}),A=P(O,`${e}--overflow-menu-options`,{[`${e}--overflow-menu--flip`]:this.props.flipped,[`${e}--overflow-menu-options--open`]:E,[`${e}--overflow-menu-options--light`]:m,[`${e}--overflow-menu-options--${g}`]:g}),W=P(`${e}--overflow-menu__icon`,b),L=r.Children.toArray(u).map((F,$)=>r.isValidElement(F)?r.cloneElement(F,{closeMenu:F.props.closeMenu||this.closeMenuAndFocus,handleOverflowMenuItemFocus:this.handleOverflowMenuItemFocus,ref:ae=>{this[`overflowMenuItem${$}`]=ae},index:$}):null),x=`overflow-menu-${this.instanceId}__menu-body`,j=r.createElement("ul",{className:A,tabIndex:-1,role:"menu","aria-label":o||s,onKeyDown:this.handleKeyPress,id:x},L),V=r.createElement(Ae,{focusTrap:h,triggerRef:this._triggerRef,menuDirection:a,menuOffset:d?w:_,menuRef:this._bindMenuBody,flipped:this.props.flipped,target:this._getTarget,onPlace:this._handlePlace,selectorPrimaryFocus:this.props.selectorPrimaryFocus},r.cloneElement(j,{"data-floating-menu-direction":a})),q={className:W,"aria-label":l};return r.createElement(D,{onClickOutside:this.handleClickOutside},r.createElement("span",{className:`${e}--overflow-menu__wrapper`,"aria-owns":E?x:void 0},r.createElement(te,X({},M,{type:"button","aria-haspopup":!0,"aria-expanded":E,"aria-controls":E?x:void 0,className:z,onClick:this.handleClick,id:t,ref:ne(this._triggerRef,C),size:g,label:l,kind:"ghost"}),r.createElement(v,q)),E&&this.state.hasMountedTrigger&&V))}};i(B,"propTypes",{"aria-label":n.string,ariaLabel:H(n.string),children:n.node,className:n.string,direction:n.oneOf([k,R]),flipped:n.bool,focusTrap:n.bool,iconClass:n.string,iconDescription:n.string,id:n.string,light:H(n.bool),menuOffset:n.oneOfType([n.shape({top:n.number,left:n.number}),n.func]),menuOffsetFlip:n.oneOfType([n.shape({top:n.number,left:n.number}),n.func]),menuOptionsClass:n.string,onClick:n.func,onClose:n.func,onFocus:n.func,onKeyDown:n.func,onOpen:n.func,open:n.bool,renderIcon:n.oneOfType([n.func,n.object]),selectorPrimaryFocus:n.string,size:n.oneOf(["sm","md","lg"])});i(B,"contextType",ee);(()=>{const c=(e,t)=>r.createElement(B,X({},e,{innerRef:t}));return c.displayName="OverflowMenu",r.forwardRef(c)})();const Ve=Fe(B);function qe(c){return Z("enable-v12-overflowmenu")?r.createElement(se,c):r.createElement(Ve,c)}qe.displayName="OverflowMenu";export{qe as O};
