import{b as O,d as w,j as B,_ as I,P as e,c as Z}from"./index-5As4T26e.js";import{r as S,e as s}from"./index-DzvNrmz8.js";import{u as M}from"./index-P6UCShJt.js";import{bj as P}from"./settings-DbzZchXt.js";import{w as F}from"./wrapComponent-DDV-bQTu.js";import{aE as U}from"./bucket-0-C6v-wDs9.js";import{A as G}from"./bucket-1-BbY-lWHx.js";const g={NONE:"NONE",DESC:"DESC",ASC:"ASC"},J=S.createContext({titleId:void 0,descriptionId:void 0}),K=(l,t)=>{var u,y,E,m;if(l.children.length>0)return!1;const r=window.getComputedStyle(l);t.font=r.font?r.font:`${r.fontSize}" "${r.fontFamily}`;let o=(t==null?void 0:t.measureText(l.textContent??"")).width??0;const f=(u=r.letterSpacing)==null?void 0:u.split("px");f&&f.length&&!isNaN(Number(f[0]))&&(o+=Number(f[0])*(((y=l.textContent)==null?void 0:y.length)??0));const b=(E=r.paddingLeft)==null?void 0:E.split("px");b&&b.length&&!isNaN(Number(b[0]))&&(o+=Number(b[0]));const p=(m=r.paddingLeft)==null?void 0:m.split("px");return p&&p.length&&!isNaN(Number(p[0]))&&(o+=Number(p[0])),o>l.getBoundingClientRect().width},Q=l=>{var k;let{className:t,children:r,useZebraStyles:d,size:o="lg",isSortable:f=!1,useStaticWidth:b,stickyHeader:p,overflowMenuOnHover:u=!0,experimentalAutoAlign:y=!1,tabIndex:E,...m}=l;const{titleId:$,descriptionId:v}=S.useContext(J),a=O(),[x,n]=S.useState(!1),i=S.useRef(null),_=w(`${a}--data-table`,t,{[`${a}--data-table--${o}`]:o,[`${a}--data-table--sort`]:f,[`${a}--data-table--zebra`]:d,[`${a}--data-table--static`]:b,[`${a}--data-table--sticky-header`]:p,[`${a}--data-table--visible-overflow-menu`]:!u}),T=S.useCallback(function(){var c,N;(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?(c=i.current)==null||c.classList.add(`${a}--data-table--top-aligned-body`):(N=i.current)==null||N.classList.remove(`${a}--data-table--top-aligned-body`)},[a]),h=S.useCallback(function(){var c,N;(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?(c=i.current)==null||c.classList.add(`${a}--data-table--top-aligned-header`):(N=i.current)==null||N.classList.remove(`${a}--data-table--top-aligned-header`)},[a]),A=S.useCallback(()=>{if(y){const c=document.createElement("canvas").getContext("2d");if(i.current&&c){const N=Array.from(i.current.querySelectorAll("td")).some(R=>K(R,c)),D=Array.from(i.current.querySelectorAll("th")).some(R=>{const q=R.querySelector(`.${a}--table-header-label`);return q&&K(q,c)});T(N),h(D)}}else T(!1),h(!1)},[y,T,h,a]),z=P(A,100);M("resize",z);const H=S.useCallback(()=>{var N,D;const C=(N=i==null?void 0:i.current)==null?void 0:N.parentNode,c=(D=i==null?void 0:i.current)==null?void 0:D.firstChild;(c==null?void 0:c.scrollWidth)>(C==null?void 0:C.clientWidth)?n(!0):n(!1)},[]),W=P(H,100);M("resize",W),B(()=>{H()},[H]),typeof document<"u"&&((k=document==null?void 0:document.fonts)!=null&&k.status)&&document.fonts.status!=="loaded"&&document.fonts.ready.then(()=>{A()}),B(()=>{A()},[A,o]);const L=s.createElement("div",{className:`${a}--data-table-content`,tabIndex:E??(x?0:void 0)},s.createElement("table",I({"aria-labelledby":$,"aria-describedby":v},m,{className:_,ref:i}),r));return p?s.createElement("section",{className:`${a}--data-table_inner-container`},L):L};Q.propTypes={children:e.node,className:e.string,experimentalAutoAlign:e.bool,isSortable:e.bool,overflowMenuOnHover:e.bool,size:e.oneOf(["xs","sm","md","lg","xl"]),stickyHeader:e.bool,useStaticWidth:e.bool,useZebraStyles:e.bool,tabIndex:e.number};const X=l=>{let{children:t,className:r,...d}=l;return s.createElement("tbody",I({"aria-live":d["aria-live"]??"polite",className:r},d),t)};X.propTypes={"aria-live":e.oneOf(["polite","assertive","off"]),children:e.node,className:e.string};const Y=s.forwardRef((l,t)=>{let{children:r,className:d,hasAILabelHeader:o,colSpan:f,...b}=l;const p=O(),u=w(d,{[`${p}--table-cell--column-slug`]:o});return s.createElement("td",I({className:u||void 0,ref:t,colSpan:f},b),r)});Y.displayName="TableCell";const be=F({name:"TableHead",type:"thead"}),ee="col",V={buttonDescription:"carbon.table.header.icon.description"},te=(l,t)=>t&&l===V.buttonDescription?t.isSortHeader&&g?t.sortDirection===g.NONE?`Click to sort rows by ${t.header} header in ascending order`:t.sortDirection===g.ASC?`Click to sort rows by ${t.header} header in descending order`:`Click to unsort rows by ${t.header} header`:`Click to sort rows by ${t.header} header in ascending order`:"",ae={[g.NONE]:"none",[g.ASC]:"ascending",[g.DESC]:"descending"},j=s.forwardRef(function(t,r){var C;let{className:d,children:o,colSpan:f,decorator:b,isSortable:p=!1,isSortHeader:u,onClick:y,scope:E=ee,sortDirection:m,translateWithId:$=te,slug:v,id:a,...x}=t;const n=O(),i=Z("table-sort"),_=S.useRef(null);let T,h=s.isValidElement(v??b)?v??b:null;h&&((C=h.type)==null?void 0:C.displayName)==="AILabel"&&(T=!0,h=s.cloneElement(h,{size:"mini",ref:_}));const A=w({[`${n}--table-header-label`]:!0,[`${n}--table-header-label--slug ${n}--table-header-label--ai-label`]:T,[`${n}--table-header-label--decorator`]:b});if(!p)return s.createElement("th",I({},x,{id:a,className:d,scope:E,colSpan:f,ref:r}),o?s.createElement("div",{className:A},o,s.createElement("div",{className:`${n}--table-header-label--decorator-inner`},h)):null);const z=w(d,{[`${n}--table-sort`]:!0,[`${n}--table-sort--active`]:u&&m!==g.NONE,[`${n}--table-sort--descending`]:u&&m===g.DESC}),H=!u||!m?"none":ae[m],W=$&&$("carbon.table.header.icon.description",{header:o,sortDirection:m,isSortHeader:u,sortStates:g}),L=w(d,`${n}--table-sort__header`,{[`${n}--table-sort__header--ai-label`]:T,[`${n}--table-sort__header--decorator`]:b}),k=c=>{if(!(T&&_.current&&_.current.contains(c.target))&&y)return y(c)};return s.createElement("th",{id:a,"aria-sort":H,className:L,colSpan:f,ref:r,scope:E},s.createElement("div",{className:`${n}--table-sort__description`,id:i},W),s.createElement("button",I({type:"button","aria-describedby":i,className:z,onClick:k},x),s.createElement("span",{className:`${n}--table-sort__flex`},s.createElement("div",{className:`${n}--table-header-label`},o),s.createElement(U,{size:20,className:`${n}--table-sort__icon`}),s.createElement(G,{size:20,className:`${n}--table-sort__icon-unsorted`}),s.createElement("div",{className:`${n}--table-header-label--decorator-inner`},h))))});j.propTypes={children:e.node,className:e.string,colSpan:e.number,id:e.string,isSortHeader:e.bool,isSortable:e.bool,onClick:e.func,scope:e.string,sortDirection:e.oneOf(Object.values(g)),translateWithId:e.func};j.translationKeys=Object.values(V);j.displayName="TableHeader";const se=s.forwardRef((l,t)=>{const r=O();let d;l!=null&&l.children&&s.Children.toArray(l.children).map($=>{var v,a,x;(((v=$.type)==null?void 0:v.displayName)==="TableSlugRow"||((a=$.type)==null?void 0:a.displayName)==="TableDecoratorRow")&&($.props.slug||((x=$.props.decorator)==null?void 0:x.type.displayName)==="AILabel")&&(d=!0)});const o=w(l.className,{[`${r}--data-table--selected`]:l.isSelected,[`${r}--data-table--slug-row ${r}--data-table--ai-label-row`]:d}),{ariaLabel:f,"aria-label":b,"aria-controls":p,onExpand:u,isExpanded:y,isSelected:E,...m}=l;return o&&(m.className=o),s.createElement("tr",I({ref:t},m))});se.propTypes={className:e.string,isSelected:e.bool};export{Q as T,be as a,se as b,j as c,X as d,Y as e,J as f,g as s};
