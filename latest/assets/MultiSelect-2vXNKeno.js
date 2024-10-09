import{R as F,a as ot,b as it,u as at,f as ct,s as dt,h as ut,e as ft,i as P,c as N,_ as U,d as pt,M as Ce,E as mt,S as ht,Q as gt,o as It}from"./floating-ui.core.mjs-LzsX8FoD.js";import{u as Ee,L as j,a as yt}from"./index-DEc8pD2w.js";import{g as St}from"./_commonjsHelpers-BosuxZz1.js";import{P as r}from"./index-Dk74W0Oi.js";import{r as u,R as c}from"./index-BwDkhjyp.js";import{m as xt}from"./mergeRefs-CTUecegF.js";import{F as bt}from"./FormContext-C7kRVu4t.js";import{C as vt}from"./Checkbox-BLZlWiKF.js";import{n as wt}from"./settings-DEdZ0TrD.js";import{W as Ct,a as _t}from"./bucket-18-BepxNBd9.js";var Et=typeof Element<"u",$t=typeof Map=="function",Tt=typeof Set=="function",At=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function V(e,s){if(e===s)return!0;if(e&&s&&typeof e=="object"&&typeof s=="object"){if(e.constructor!==s.constructor)return!1;var l,n,a;if(Array.isArray(e)){if(l=e.length,l!=s.length)return!1;for(n=l;n--!==0;)if(!V(e[n],s[n]))return!1;return!0}var d;if($t&&e instanceof Map&&s instanceof Map){if(e.size!==s.size)return!1;for(d=e.entries();!(n=d.next()).done;)if(!s.has(n.value[0]))return!1;for(d=e.entries();!(n=d.next()).done;)if(!V(n.value[1],s.get(n.value[0])))return!1;return!0}if(Tt&&e instanceof Set&&s instanceof Set){if(e.size!==s.size)return!1;for(d=e.entries();!(n=d.next()).done;)if(!s.has(n.value[0]))return!1;return!0}if(At&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(s)){if(l=e.length,l!=s.length)return!1;for(n=l;n--!==0;)if(e[n]!==s[n])return!1;return!0}if(e.constructor===RegExp)return e.source===s.source&&e.flags===s.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof s.valueOf=="function")return e.valueOf()===s.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof s.toString=="function")return e.toString()===s.toString();if(a=Object.keys(e),l=a.length,l!==Object.keys(s).length)return!1;for(n=l;n--!==0;)if(!Object.prototype.hasOwnProperty.call(s,a[n]))return!1;if(Et&&e instanceof Element)return!1;for(n=l;n--!==0;)if(!((a[n]==="_owner"||a[n]==="__v"||a[n]==="__o")&&e.$$typeof)&&!V(e[a[n]],s[a[n]]))return!1;return!0}return e!==e&&s!==s}var Ot=function(s,l){try{return V(s,l)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}};const te=St(Ot),Mt={compareItems:r.func,sortItems:r.func},Pt=(e,s,l)=>{let{locale:n}=l;return e.localeCompare(s,n,{numeric:!0})},Ft=(e,s)=>{let{selectedItems:l=[],itemToString:n,compareItems:a,locale:d="en"}=s;return e.sort((p,m)=>{if(p.isSelectAll)return-1;if(m.isSelectAll)return 1;const y=l.includes(p),A=l.includes(m);return y&&!A?-1:A&&!y?1:a(n(p),n(m),{locale:d})})};function _e(e){let{isControlled:s,isMounted:l,onChangeHandlerControlled:n,onChangeHandlerUncontrolled:a,selectedItems:d}=e;s?l&&n&&n({selectedItems:d}):a(d)}function Bt(e){let{disabled:s,onChange:l,initialSelectedItems:n=[],selectedItems:a,selectAll:d=!1,filteredItems:p=[]}=e;const m=u.useRef(!1),y=u.useRef(l),[A,E]=u.useState(n),v=!!a,h=v?a:A,Q=u.useCallback(_=>{if(s)return;const z=p.filter(w=>!w.disabled),G=p.filter(w=>w.disabled).length;let S;if(_&&_.isSelectAll&&h.length>0)S=[];else if(_&&_.isSelectAll&&h.length==0)S=z;else{let w;h.forEach((B,J)=>{te(B,_)&&(w=J)}),w===void 0?(S=h.concat(_),d&&p.length-1===S.length+G&&(S=z)):(S=$e(h,w),S=S.filter(B=>!B.isSelectAll))}_e({isControlled:v,isMounted:m.current,onChangeHandlerControlled:y.current,onChangeHandlerUncontrolled:E,selectedItems:S})},[s,h,p,d,v]),g=u.useCallback(()=>{s||_e({isControlled:v,isMounted:m.current,onChangeHandlerControlled:y.current,onChangeHandlerUncontrolled:E,selectedItems:[]})},[s,v]);return u.useEffect(()=>{y.current=l},[l]),u.useEffect(()=>{m.current&&y.current&&!v&&y.current({selectedItems:h})},[v,h]),u.useEffect(()=>(m.current=!0,()=>{m.current=!1}),[]),{selectedItems:h,onItemChange:Q,clearSelection:g}}class Dt extends c.Component{constructor(s){super(s),F(this,"internalSetState",(l,n)=>this.setState(l,()=>{n&&n(),this.props.onChange&&this.props.onChange(this.state)})),F(this,"handleClearSelection",()=>{this.props.disabled||this.internalSetState({selectedItems:[]})}),F(this,"handleSelectItem",l=>{this.internalSetState(n=>({selectedItems:n.selectedItems.concat(l)}))}),F(this,"handleRemoveItem",l=>{this.internalSetState(n=>({selectedItems:$e(n.selectedItems,l)}))}),F(this,"handleOnItemChange",l=>{if(this.props.disabled)return;const{selectedItems:n}=this.state;let a;if(n.forEach((d,p)=>{te(d,l)&&(a=p)}),a===void 0){this.handleSelectItem(l);return}this.handleRemoveItem(a)}),this.state={selectedItems:s.initialSelectedItems}}render(){const{children:s,render:l}=this.props,{selectedItems:n}=this.state,a={selectedItems:n,onItemChange:this.handleOnItemChange,clearSelection:this.handleClearSelection};return l!==void 0?l(a):s!==void 0?s(a):null}}F(Dt,"propTypes",{children:r.func,disabled:r.bool,initialSelectedItems:r.array.isRequired,onChange:r.func,render:r.func});const $e=(e,s)=>{const l=e.slice();return l.splice(s,1),l},{ItemClick:Rt,ToggleButtonBlur:kt,ToggleButtonKeyDownArrowDown:Nt,ToggleButtonKeyDownArrowUp:jt,ToggleButtonKeyDownEnter:zt,ToggleButtonKeyDownEscape:Ht,ToggleButtonKeyDownSpaceButton:Lt,ItemMouseMove:Kt,MenuMouseLeave:Wt,ToggleButtonClick:qt,ToggleButtonKeyDownPageDown:Ut,ToggleButtonKeyDownPageUp:Vt,FunctionSetHighlightedIndex:Qt}=Ee.stateChangeTypes,Gt=e=>typeof e=="string"?e:typeof e=="number"?`${e}`:e!==null&&typeof e=="object"&&"label"in e&&typeof e.label=="string"?e.label:"",Te=c.forwardRef((e,s)=>{var we;let{autoAlign:l=!1,className:n,id:a,items:d,itemToElement:p,itemToString:m=Gt,titleText:y=!1,hideLabel:A,helperText:E,label:v,type:h="default",size:Q,disabled:g=!1,initialSelectedItems:_=[],sortItems:z=Ft,compareItems:G=Pt,clearSelectionText:S="To clear selection, press Delete or Backspace",clearAnnouncement:w="all items have been cleared",clearSelectionDescription:B="Total items selected: ",light:J,invalid:x,invalidText:Ae,warn:H,warnText:Oe,useTitleInItem:Me,translateWithId:ne,downshiftProps:Pe,open:O=!1,selectionFeedback:se="top-after-reopen",onChange:Fe,onMenuChange:le,direction:re="bottom",selectedItems:oe,readOnly:D,locale:Be="en",slug:L}=e;const R=u.useMemo(()=>d.filter(t=>{if(typeof t=="object"&&t!==null){for(const f in t)if(Object.hasOwn(t,f)&&t[f]===void 0)return!1}return!0}),[d]);let k=R.some(t=>t.isSelectAll);(oe??[]).length>0&&k&&(console.warn("Warning: `selectAll` should not be used when `selectedItems` is provided. Please pass either `selectAll` or `selectedItems`, not both."),k=!1);const o=ot(),{isFluid:K}=u.useContext(bt),ie=it(),[De,ae]=u.useState(!1),[ce,de]=u.useState(!1),[b,Re]=u.useState(O||!1),[ke,Ne]=u.useState(O),[je,ze]=u.useState([]),[He,ue]=u.useState(!1),{refs:M,floatingStyles:fe,middlewareData:pe}=at(l?{placement:re,strategy:"fixed",middleware:[ct({crossAxis:!1}),dt({apply(t){let{rects:f,elements:i}=t;Object.assign(i.floating.style,{width:`${f.reference.width}px`})}}),ut()],whileElementsMounted:ft}:{});u.useLayoutEffect(()=>{var t;if(l){const f={...fe,visibility:(t=pe.hide)!=null&&t.referenceHidden?"hidden":"visible"};Object.keys(f).forEach(i=>{M.floating.current&&(M.floating.current.style[i]=f[i])})}},[l,fe,M.floating,pe,O]);const{selectedItems:W,onItemChange:me,clearSelection:he}=Bt({disabled:g,initialSelectedItems:_,onChange:Fe,selectedItems:oe,selectAll:k,filteredItems:R}),X={selectedItems:W,itemToString:m,compareItems:G,locale:Be},Le={stateReducer:et,isOpen:b,itemToString:t=>Array.isArray(t)&&t.map(function(f){return m(f)}).join(", ")||"",selectedItem:W,items:R,isItemDisabled(t,f){return t.disabled},...Pe},{getToggleButtonProps:Ke,getLabelProps:We,getMenuProps:ge,getItemProps:qe,selectedItem:Ue,highlightedIndex:Ve,setHighlightedIndex:Ie}=Ee(Le),ye=Ke({onFocus:()=>{de(!0)},onBlur:()=>{de(!1)},onKeyDown:t=>{g||((P(t,Ce)||P(t,mt))&&!b&&(he(),t.stopPropagation()),!b&&P(t,Ce)&&I.length>0&&ue(!0),(P(t,ht)||P(t,gt)||P(t,It))&&!b&&(Ie(0),ue(!1),q(!0)))}}),Y=xt(ye.ref,s),I=Ue,q=t=>{Re(t),le&&le(t)};ke!==O&&(q(O),Ne(O));const $=h==="inline",Se=!x&&H,Qe=N(`${o}--multi-select__wrapper`,`${o}--list-box__wrapper`,n,{[`${o}--multi-select__wrapper--inline`]:$,[`${o}--list-box__wrapper--inline`]:$,[`${o}--multi-select__wrapper--inline--invalid`]:$&&x,[`${o}--list-box__wrapper--inline--invalid`]:$&&x,[`${o}--list-box__wrapper--fluid--invalid`]:K&&x,[`${o}--list-box__wrapper--fluid--focus`]:!b&&K&&De,[`${o}--list-box__wrapper--slug`]:L}),Ge=N(`${o}--label`,{[`${o}--label--disabled`]:g,[`${o}--visually-hidden`]:A}),xe=E?`multiselect-helper-text-${ie}`:void 0,Je=`multiselect-field-label-${ie}`,Xe=N(`${o}--form__helper-text`,{[`${o}--form__helper-text--disabled`]:g}),Ye=N(`${o}--multi-select`,{[`${o}--multi-select--invalid`]:x,[`${o}--multi-select--invalid--focused`]:x&&ce,[`${o}--multi-select--warning`]:Se,[`${o}--multi-select--inline`]:$,[`${o}--multi-select--selected`]:I&&I.length>0,[`${o}--list-box--up`]:re==="top",[`${o}--multi-select--readonly`]:D,[`${o}--autoalign`]:l,[`${o}--multi-select--selectall`]:k}),Ze=p;se==="fixed"?X.selectedItems=[]:se==="top-after-reopen"&&(X.selectedItems=je);function et(t,f){const{changes:i,props:Z,type:T}=f,{highlightedIndex:C}=i;switch(i.isOpen&&!b&&ze(W),T){case Lt:case zt:if(i.selectedItem===void 0||Array.isArray(i.selectedItem))break;return me(i.selectedItem),{...i,highlightedIndex:t.highlightedIndex};case kt:case Ht:q(!1);break;case qt:return q(i.isOpen||!1),{...i,highlightedIndex:W.length>0?0:void 0};case Rt:return Ie(i.selectedItem),me(i.selectedItem),{...i,highlightedIndex:t.highlightedIndex};case Wt:return{...i,highlightedIndex:t.highlightedIndex};case Qt:return b?{...i,highlightedIndex:R.indexOf(C)}:{...i,highlightedIndex:0};case Nt:case jt:case Ut:case Vt:if(C>-1){const ee=document.querySelectorAll(`li.${o}--list-box__menu-item[role="option"]`);Z.scrollIntoView(ee[C])}return C===-1?{...i,highlightedIndex:0}:i;case Kt:return{...i,highlightedIndex:t.highlightedIndex}}return i}const tt=N(`${o}--list-box__field--wrapper`,{[`${o}--list-box__field--wrapper--input-focused`]:ce}),be=t=>{t.target.classList.contains(`${o}--tag__close-icon`)?ae(!1):ae(t.type==="focus")},nt=D?{onClick:t=>{t.preventDefault(),Y.current!==void 0&&Y.current.focus()},onKeyDown:t=>{["ArrowDown","ArrowUp"," ","Enter"].includes(t.key)&&t.preventDefault()}}:{};let ve;L&&((we=L.type)==null?void 0:we.displayName)==="AILabel"&&(ve=c.cloneElement(L,{size:"mini"}));const st=I.length>0&&I.map(t=>t==null?void 0:t.text),lt=k?I.filter(t=>!t.isSelectAll).length:I.length,rt=u.useMemo(()=>ge({ref:l?M.setFloating:null}),[l,ge,M.setFloating]);return c.createElement("div",{className:Qe},c.createElement("label",U({className:Ge},We()),y&&y,I.length>0&&c.createElement("span",{className:`${o}--visually-hidden`},B," ",I.length," ",st,",",S)),c.createElement(j,{onFocus:K?be:void 0,onBlur:K?be:void 0,type:h,size:Q,className:Ye,disabled:g,light:J,invalid:x,invalidText:Ae,warn:H,warnText:Oe,isOpen:b,id:a},x&&c.createElement(Ct,{className:`${o}--list-box__invalid-icon`}),Se&&c.createElement(_t,{className:`${o}--list-box__invalid-icon ${o}--list-box__invalid-icon--warning`}),c.createElement("div",{className:tt,ref:l?M.setReference:null},I.length>0&&c.createElement(j.Selection,{readOnly:D,clearSelection:!g&&!D?he:wt,selectionCount:lt,translateWithId:ne,disabled:g}),c.createElement("button",U({type:"button",className:`${o}--list-box__field`,disabled:g,"aria-disabled":g||D,"aria-describedby":!$&&!x&&!H&&E?xe:void 0},ye,{ref:Y},nt),c.createElement("span",{id:Je,className:`${o}--list-box__label`},v),c.createElement(j.MenuIcon,{isOpen:b,translateWithId:ne})),ve),c.createElement(j.Menu,rt,b&&z(R,X).map((t,f)=>{const i=I.filter(ee=>te(ee,t)).length>0,Z=I.length!==0&&t.isSelectAll&&!i,T=qe({item:t,"aria-selected":i}),C=m(t);return c.createElement(j.MenuItem,U({key:T.id,isActive:i&&!t.isSelectAll,"aria-label":C,isHighlighted:Ve===f,title:C,disabled:T["aria-disabled"]},T),c.createElement("div",{className:`${o}--checkbox-wrapper`},c.createElement(vt,{id:`${T.id}__checkbox`,labelText:p?c.createElement(Ze,U({key:T.id},t)):C,checked:i,title:Me?C:void 0,indeterminate:Z,disabled:g})))})),He&&c.createElement("span",{"aria-live":"assertive","aria-label":w})),!$&&!x&&!H&&E&&c.createElement("div",{id:xe,className:Xe},E))});Te.displayName="MultiSelect";Te.propTypes={...Mt,autoAlign:r.bool,className:r.string,clearSelectionDescription:r.string,clearSelectionText:r.string,compareItems:r.func,direction:r.oneOf(["top","bottom"]),disabled:r.bool,downshiftProps:r.object,helperText:r.node,hideLabel:r.bool,id:r.string.isRequired,initialSelectedItems:r.array,invalid:r.bool,invalidText:r.node,itemToElement:r.func,itemToString:r.func,items:r.array.isRequired,label:r.node.isRequired,light:pt(r.bool),locale:r.string,onChange:r.func,onMenuChange:r.func,open:r.bool,readOnly:r.bool,selectedItems:r.array,selectionFeedback:r.oneOf(["top","fixed","top-after-reopen"]),size:yt,slug:r.node,sortItems:r.func,titleText:r.node,translateWithId:r.func,type:r.oneOf(["default","inline"]),useTitleInItem:r.bool,warn:r.bool,warnText:r.node};export{Te as M,te as i};
