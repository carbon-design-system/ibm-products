import{b as ae,c as B,l as Ce,_ as Y,P as s,d as vt}from"./index-CXyjPnaX.js";import{r as I,e as h}from"./index-CPiZ6Cnx.js";import{k as ve}from"./settings-iwZeeh4T.js";import{u as Ne}from"./index-DJK44odq.js";import{w as Nt}from"./wrapComponent-fq0T_7oD.js";import{c as xt,g as wt}from"./bucket-0-DUfmGMOu.js";import{c as re,g as Et}from"./_commonjsHelpers-BosuxZz1.js";const w={NONE:"NONE",DESC:"DESC",ASC:"ASC"},$t=I.createContext({titleId:void 0,descriptionId:void 0}),xe=(i,a)=>{var C,x,v,E;if(i.children.length>0)return!1;const u=window.getComputedStyle(i);a.font=u.font?u.font:`${u.fontSize}" "${u.fontFamily}`;let f=(a==null?void 0:a.measureText(i.textContent??"")).width??0;const b=(C=u.letterSpacing)==null?void 0:C.split("px");b&&b.length&&!isNaN(Number(b[0]))&&(f+=Number(b[0])*(((x=i.textContent)==null?void 0:x.length)??0));const _=(v=u.paddingLeft)==null?void 0:v.split("px");_&&_.length&&!isNaN(Number(_[0]))&&(f+=Number(_[0]));const m=(E=u.paddingLeft)==null?void 0:E.split("px");return m&&m.length&&!isNaN(Number(m[0]))&&(f+=Number(m[0])),f>i.getBoundingClientRect().width},Tt=i=>{var J;let{className:a,children:u,useZebraStyles:y,size:f="lg",isSortable:b=!1,useStaticWidth:_,stickyHeader:m,overflowMenuOnHover:C=!0,experimentalAutoAlign:x=!1,tabIndex:v,...E}=i;const{titleId:$,descriptionId:A}=I.useContext($t),l=ae(),[g,P]=I.useState(!1),c=I.useRef(null),R=B(`${l}--data-table`,a,{[`${l}--data-table--${f}`]:f,[`${l}--data-table--sort`]:b,[`${l}--data-table--zebra`]:y,[`${l}--data-table--static`]:_,[`${l}--data-table--sticky-header`]:m,[`${l}--data-table--visible-overflow-menu`]:!C}),j=I.useCallback(function(){var p,S;(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?(p=c.current)==null||p.classList.add(`${l}--data-table--top-aligned-body`):(S=c.current)==null||S.classList.remove(`${l}--data-table--top-aligned-body`)},[l]),F=I.useCallback(function(){var p,S;(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?(p=c.current)==null||p.classList.add(`${l}--data-table--top-aligned-header`):(S=c.current)==null||S.classList.remove(`${l}--data-table--top-aligned-header`)},[l]),O=I.useCallback(()=>{if(x){const p=document.createElement("canvas").getContext("2d");if(c.current&&p){const S=Array.from(c.current.querySelectorAll("td")).some(G=>xe(G,p)),k=Array.from(c.current.querySelectorAll("th")).some(G=>{const L=G.querySelector(`.${l}--table-header-label`);return L&&xe(L,p)});j(S),F(k)}}else j(!1),F(!1)},[x,j,F,l]),U=ve(O,100);Ne("resize",U);const M=I.useCallback(()=>{var S,k;const D=(S=c==null?void 0:c.current)==null?void 0:S.parentNode,p=(k=c==null?void 0:c.current)==null?void 0:k.firstChild;(p==null?void 0:p.scrollWidth)>(D==null?void 0:D.clientWidth)?P(!0):P(!1)},[]),Z=ve(M,100);Ne("resize",Z),Ce(()=>{M()},[M]),typeof document<"u"&&((J=document==null?void 0:document.fonts)!=null&&J.status)&&document.fonts.status!=="loaded"&&document.fonts.ready.then(()=>{O()}),Ce(()=>{O()},[O,f]);const H=h.createElement("div",{className:`${l}--data-table-content`,tabIndex:v??(g?0:void 0)},h.createElement("table",Y({"aria-labelledby":$,"aria-describedby":A},E,{className:R,ref:c}),u));return m?h.createElement("section",{className:`${l}--data-table_inner-container`},H):H};Tt.propTypes={children:s.node,className:s.string,experimentalAutoAlign:s.bool,isSortable:s.bool,overflowMenuOnHover:s.bool,size:s.oneOf(["xs","sm","md","lg","xl"]),stickyHeader:s.bool,useStaticWidth:s.bool,useZebraStyles:s.bool,tabIndex:s.number};const It=i=>{let{children:a,className:u,...y}=i;return h.createElement("tbody",Y({"aria-live":"polite",className:u},y),a)};It.propTypes={"aria-live":s.oneOf(["polite","assertive","off"]),children:s.node,className:s.string};const At=h.forwardRef((i,a)=>{let{children:u,className:y,hasSlugHeader:f,colSpan:b,..._}=i;const m=ae(),C=B(y,{[`${m}--table-cell--column-slug`]:f});return h.createElement("td",Y({className:C||void 0,ref:a,colSpan:b},_),u)});At.displayName="TableCell";const qt=Nt({name:"TableHead",type:"thead"}),Ot="col",Ee={buttonDescription:"carbon.table.header.icon.description"},Ht=(i,a)=>a&&i===Ee.buttonDescription?a.isSortHeader&&w?a.sortDirection===w.NONE?`Click to sort rows by ${a.header} header in ascending order`:a.sortDirection===w.ASC?`Click to sort rows by ${a.header} header in descending order`:`Click to unsort rows by ${a.header} header`:`Click to sort rows by ${a.header} header in ascending order`:"",Dt={[w.NONE]:"none",[w.ASC]:"ascending",[w.DESC]:"descending"},ue=h.forwardRef(function(a,u){let{className:y,children:f,colSpan:b,isSortable:_=!1,isSortHeader:m,onClick:C,scope:x=Ot,sortDirection:v,translateWithId:E=Ht,slug:$,id:A,...l}=a;const g=ae(),P=vt("table-sort"),c=I.useRef(null);let R;$&&(R=h.cloneElement($,{size:"mini",ref:c}));const j=B({[`${g}--table-header-label`]:!0,[`${g}--table-header-label--slug`]:$});if(!_)return h.createElement("th",Y({},l,{id:A,className:y,scope:x,colSpan:b,ref:u}),f?h.createElement("div",{className:j},f,R):null);const F=B(y,{[`${g}--table-sort`]:!0,[`${g}--table-sort--active`]:m&&v!==w.NONE,[`${g}--table-sort--descending`]:m&&v===w.DESC}),O=!m||!v?"none":Dt[v],U=E&&E("carbon.table.header.icon.description",{header:f,sortDirection:v,isSortHeader:m,sortStates:w}),M=B(y,`${g}--table-sort__header`,{[`${g}--table-sort__header--slug`]:$}),Z=H=>{if(!($&&c.current&&c.current.contains(H.target))&&C)return C(H)};return h.createElement("th",{id:A,"aria-sort":O,className:M,colSpan:b,ref:u,scope:x},h.createElement("div",{className:`${g}--table-sort__description`,id:P},U),h.createElement("button",Y({type:"button","aria-describedby":P,className:F,onClick:Z},l),h.createElement("span",{className:`${g}--table-sort__flex`},h.createElement("div",{className:`${g}--table-header-label`},f),h.createElement(xt,{size:20,className:`${g}--table-sort__icon`}),h.createElement(wt,{size:20,className:`${g}--table-sort__icon-unsorted`}),R)))});ue.propTypes={children:s.node,className:s.string,colSpan:s.number,id:s.string,isSortHeader:s.bool,isSortable:s.bool,onClick:s.func,scope:s.string,sortDirection:s.oneOf(Object.values(w)),translateWithId:s.func};ue.translationKeys=Object.values(Ee);ue.displayName="TableHeader";var ce,we;function Lt(){if(we)return ce;we=1;var i=200,a="__lodash_hash_undefined__",u=1/0,y=9007199254740991,f="[object Arguments]",b="[object Function]",_="[object GeneratorFunction]",m="[object Symbol]",C=/[\\^$.*+?()[\]{}|]/g,x=/^\[object .+?Constructor\]$/,v=/^(?:0|[1-9]\d*)$/,E=typeof re=="object"&&re&&re.Object===Object&&re,$=typeof self=="object"&&self&&self.Object===Object&&self,A=E||$||Function("return this")();function l(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function g(e,t){var n=e?e.length:0;return!!n&&j(e,t,0)>-1}function P(e,t){for(var n=-1,r=e?e.length:0,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}function c(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e}function R(e,t,n,r){for(var o=e.length,d=n+-1;++d<o;)if(t(e[d],d,e))return d;return-1}function j(e,t,n){if(t!==t)return R(e,F,n);for(var r=n-1,o=e.length;++r<o;)if(e[r]===t)return r;return-1}function F(e){return e!==e}function O(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}function U(e,t){return e.has(t)}function M(e,t){return e==null?void 0:e[t]}function Z(e){var t=!1;if(e!=null&&typeof e.toString!="function")try{t=!!(e+"")}catch{}return t}function H(e,t){return function(n){return e(t(n))}}var J=Array.prototype,D=Function.prototype,p=Object.prototype,S=A["__core-js_shared__"],k=function(){var e=/[^.]+$/.exec(S&&S.keys&&S.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),G=D.toString,L=p.hasOwnProperty,oe=p.toString,$e=RegExp("^"+G.call(L).replace(C,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),de=A.Symbol,Te=H(Object.getPrototypeOf,Object),Ie=p.propertyIsEnumerable,Ae=J.splice,fe=de?de.isConcatSpreadable:void 0,se=Object.getOwnPropertySymbols,he=Math.max,Oe=pe(A,"Map"),V=pe(Object,"create");function z(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function He(){this.__data__=V?V(null):{}}function De(e){return this.has(e)&&delete this.__data__[e]}function Le(e){var t=this.__data__;if(V){var n=t[e];return n===a?void 0:n}return L.call(t,e)?t[e]:void 0}function Pe(e){var t=this.__data__;return V?t[e]!==void 0:L.call(t,e)}function Re(e,t){var n=this.__data__;return n[e]=V&&t===void 0?a:t,this}z.prototype.clear=He,z.prototype.delete=De,z.prototype.get=Le,z.prototype.has=Pe,z.prototype.set=Re;function K(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function je(){this.__data__=[]}function Fe(e){var t=this.__data__,n=Q(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():Ae.call(t,n,1),!0}function Me(e){var t=this.__data__,n=Q(t,e);return n<0?void 0:t[n][1]}function ke(e){return Q(this.__data__,e)>-1}function ze(e,t){var n=this.__data__,r=Q(n,e);return r<0?n.push([e,t]):n[r][1]=t,this}K.prototype.clear=je,K.prototype.delete=Fe,K.prototype.get=Me,K.prototype.has=ke,K.prototype.set=ze;function W(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Ge(){this.__data__={hash:new z,map:new(Oe||K),string:new z}}function Ke(e){return ee(this,e).delete(e)}function We(e){return ee(this,e).get(e)}function qe(e){return ee(this,e).has(e)}function Be(e,t){return ee(this,e).set(e,t),this}W.prototype.clear=Ge,W.prototype.delete=Ke,W.prototype.get=We,W.prototype.has=qe,W.prototype.set=Be;function X(e){var t=-1,n=e?e.length:0;for(this.__data__=new W;++t<n;)this.add(e[t])}function Ue(e){return this.__data__.set(e,a),this}function Ze(e){return this.__data__.has(e)}X.prototype.add=X.prototype.push=Ue,X.prototype.has=Ze;function Ve(e,t){var n=ie(e)||be(e)?O(e.length,String):[],r=n.length,o=!!r;for(var d in e)o&&(d=="length"||lt(d,r))||n.push(d);return n}function Q(e,t){for(var n=e.length;n--;)if(bt(e[n][0],t))return n;return-1}function Ye(e,t,n,r){var o=-1,d=g,N=!0,T=e.length,te=[],Ct=t.length;if(!T)return te;t.length>=i&&(d=U,N=!1,t=new X(t));e:for(;++o<T;){var q=e[o],ne=q;if(q=q!==0?q:0,N&&ne===ne){for(var Se=Ct;Se--;)if(t[Se]===ne)continue e;te.push(q)}else d(t,ne,r)||te.push(q)}return te}function Je(e,t,n,r,o){var d=-1,N=e.length;for(n||(n=it),o||(o=[]);++d<N;){var T=e[d];n(T)?c(o,T):o[o.length]=T}return o}function Xe(e,t,n){var r=t(e);return ie(e)?r:c(r,n(e))}function Qe(e){if(!le(e)||ut(e))return!1;var t=ge(e)||Z(e)?$e:x;return t.test(pt(e))}function et(e){if(!le(e))return ft(e);var t=dt(e),n=[];for(var r in e)r=="constructor"&&(t||!L.call(e,r))||n.push(r);return n}function tt(e,t){return e=Object(e),nt(e,t,function(n,r){return r in e})}function nt(e,t,n){for(var r=-1,o=t.length,d={};++r<o;){var N=t[r],T=e[N];n(T,N)&&(d[N]=T)}return d}function rt(e,t){return t=he(t===void 0?e.length-1:t,0),function(){for(var n=arguments,r=-1,o=he(n.length-t,0),d=Array(o);++r<o;)d[r]=n[t+r];r=-1;for(var N=Array(t+1);++r<t;)N[r]=n[r];return N[t]=d,l(e,this,N)}}function at(e){return Xe(e,_t,st)}function ee(e,t){var n=e.__data__;return ct(t)?n[typeof t=="string"?"string":"hash"]:n.map}function pe(e,t){var n=M(e,t);return Qe(n)?n:void 0}var ot=se?H(se,Object):_e,st=se?function(e){for(var t=[];e;)c(t,ot(e)),e=Te(e);return t}:_e;function it(e){return ie(e)||be(e)||!!(fe&&e&&e[fe])}function lt(e,t){return t=t??y,!!t&&(typeof e=="number"||v.test(e))&&e>-1&&e%1==0&&e<t}function ct(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function ut(e){return!!k&&k in e}function dt(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||p;return e===n}function ft(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}function ht(e){if(typeof e=="string"||yt(e))return e;var t=e+"";return t=="0"&&1/e==-u?"-0":t}function pt(e){if(e!=null){try{return G.call(e)}catch{}try{return e+""}catch{}}return""}function bt(e,t){return e===t||e!==e&&t!==t}function be(e){return mt(e)&&L.call(e,"callee")&&(!Ie.call(e,"callee")||oe.call(e)==f)}var ie=Array.isArray;function me(e){return e!=null&&gt(e.length)&&!ge(e)}function mt(e){return ye(e)&&me(e)}function ge(e){var t=le(e)?oe.call(e):"";return t==b||t==_}function gt(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=y}function le(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function ye(e){return!!e&&typeof e=="object"}function yt(e){return typeof e=="symbol"||ye(e)&&oe.call(e)==m}function _t(e){return me(e)?Ve(e):et(e)}var St=rt(function(e,t){return e==null?{}:(t=P(Je(t),ht),tt(e,Ye(at(e),t)))});function _e(){return[]}return ce=St,ce}var Pt=Lt();const Rt=Et(Pt),jt=i=>{const a=ae();let u;i!=null&&i.children&&h.Children.toArray(i.children).map(b=>{var _;((_=b.type)==null?void 0:_.displayName)==="TableSlugRow"&&b.props.slug&&(u=!0)});const y=B(i.className,{[`${a}--data-table--selected`]:i.isSelected,[`${a}--data-table--slug-row`]:u}),f={...Rt(i,["ariaLabel","aria-label","aria-controls","onExpand","isExpanded","isSelected"]),className:y||void 0};return h.createElement("tr",f)};jt.propTypes={className:s.string,isSelected:s.bool};export{Tt as T,qt as a,jt as b,ue as c,It as d,At as e,$t as f,w as s};
