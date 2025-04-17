import{b as O,d as A,u as Re,_ as V,i as we,j as Y,c as Se,k as ce,l as _e,n as Z,E as ee,S as te,g as R,P as e}from"./index-5As4T26e.js";import{e as t,r as u}from"./index-DzvNrmz8.js";import{L as De}from"./Link-Dprirwoi.js";import{c as G}from"./events-OVwOsPzJ.js";import{g as de,a as ue}from"./useNoInteractiveChildren-Dx0RzjJ8.js";import{T as Fe}from"./Text-DyBNjUAs.js";import{A as Pe,a as Ke}from"./bucket-0-C6v-wDs9.js";import{E as Ae}from"./bucket-6-BVxmYIXv.js";import{C as He}from"./bucket-2-CdrYWKja.js";var pe,fe,me,he;const ge=t.forwardRef(function($,T){let{children:b,className:C,decorator:m,light:l=!1,slug:o,hasRoundedCorners:g=!1,...E}=$;const p=O(),w=A(`${p}--tile`,{[`${p}--tile--light`]:l,[`${p}--tile--slug`]:o,[`${p}--tile--slug-rounded`]:o&&g,[`${p}--tile--decorator`]:m,[`${p}--tile--decorator-rounded`]:m&&g},C);return t.createElement("div",V({className:w,ref:T},E),b,o,m&&t.createElement("div",{className:`${p}--tile--inner-decorator`},m))});ge.displayName="Tile";ge.propTypes={children:e.node,className:e.string,decorator:e.node,hasRoundedCorners:e.bool,light:R(e.bool),slug:R(e.node)};const be=t.forwardRef(function($,T){let{children:b,className:C,clicked:m=!1,decorator:l,disabled:o,href:g,light:E,onClick:p=()=>{},onKeyDown:w=()=>{},renderIcon:h,hasRoundedCorners:_,slug:S,...k}=$;const a=O(),y=A(`${a}--tile`,`${a}--tile--clickable`,{[`${a}--tile--is-clicked`]:m,[`${a}--tile--light`]:E,[`${a}--tile--slug`]:S,[`${a}--tile--slug-rounded`]:S&&_,[`${a}--tile--decorator`]:l,[`${a}--tile--decorator-rounded`]:l&&_},C),[i,D]=u.useState(m);function F(d){var I;(I=d==null?void 0:d.persist)==null||I.call(d),D(!i),p(d)}function f(d){var I;(I=d==null?void 0:d.persist)==null||I.call(d),Z(d,[ee,te])&&D(!i),w(d)}const x=Re("enable-v12-tile-default-icons");x&&(h||(h=Pe),o&&(h=Ae));const H=A({[`${a}--tile--icon`]:!x||x&&!o,[`${a}--tile--disabled-icon`]:x&&o});return t.createElement(De,V({className:y,href:g,tabIndex:!g&&!o?0:void 0,onClick:o?void 0:F,onKeyDown:f,ref:T,disabled:o},k),S||l?t.createElement("div",{className:`${a}--tile-content`},b):b,(S===!0||l===!0)&&t.createElement(Ke,{size:"24",className:`${a}--tile--ai-label-icon`}),t.isValidElement(l)&&t.createElement("div",{className:`${a}--tile--inner-decorator`},l),h&&t.createElement(h,{className:H,"aria-hidden":"true"}))});be.displayName="ClickableTile";be.propTypes={children:e.node,className:e.string,clicked:e.bool,decorator:e.oneOfType([e.bool,e.node]),disabled:e.bool,hasRoundedCorners:e.bool,href:e.string,light:R(e.bool),onClick:e.func,onKeyDown:e.func,rel:e.string,renderIcon:e.oneOfType([e.func,e.object])};const ve=t.forwardRef(function($,T){var M;let{children:b,className:C,decorator:m,disabled:l,id:o,light:g,onClick:E=()=>{},onChange:p=()=>{},onKeyDown:w=()=>{},selected:h=!1,tabIndex:_=0,title:S="title",slug:k,hasRoundedCorners:a,...y}=$;const i=O(),D=E,F=w,[f,x]=u.useState(h),[H,d]=u.useState(h),I=A(`${i}--tile`,`${i}--tile--selectable`,{[`${i}--tile--is-selected`]:f,[`${i}--tile--light`]:g,[`${i}--tile--disabled`]:l,[`${i}--tile--slug`]:k,[`${i}--tile--slug-rounded`]:k&&a,[`${i}--tile--decorator`]:m,[`${i}--tile--decorator-rounded`]:m&&a},C);function J(n){var P;n.preventDefault(),(P=n==null?void 0:n.persist)==null||P.call(n),!(s&&B.current&&B.current.contains(n.target))&&(x(!f),D(n),p(n,f,o))}function Q(n){var P;(P=n==null?void 0:n.persist)==null||P.call(n),Z(n,[ee,te])&&(n.preventDefault(),x(!f),p(n,f,o)),F(n)}function W(n){x(n.target.checked),p(n,f,o)}h!==H&&(x(h),d(h));const B=u.useRef(null);let s=t.isValidElement(k??m)?k??m:null;return s&&((M=s.type)==null?void 0:M.displayName)==="AILabel"&&(s=t.cloneElement(s,{size:"xs",ref:B})),t.createElement("div",V({className:I,onClick:l?void 0:J,role:"checkbox","aria-checked":f,onKeyDown:l?void 0:Q,tabIndex:l?void 0:_,ref:T,id:o,onChange:l?void 0:W,title:S},y),t.createElement("span",{className:`${i}--tile__checkmark ${i}--tile__checkmark--persistent`},f?pe||(pe=t.createElement(_e,null)):fe||(fe=t.createElement(He,null))),t.createElement(Fe,{as:"label",htmlFor:o,className:`${i}--tile-content`},b),k?s:m?t.createElement("div",{className:`${i}--tile--inner-decorator`},s):"")});ve.propTypes={children:e.node,className:e.string,decorator:e.node,disabled:e.bool,hasRoundedCorners:e.bool,id:e.string,light:R(e.bool),name:R(e.string),onChange:e.func,onClick:e.func,onKeyDown:e.func,selected:e.bool,slug:R(e.node),tabIndex:e.number,title:e.string,value:R(e.oneOfType([e.string,e.number]))};const Ce=t.forwardRef(function($,T){var se;let{tabIndex:b=0,className:C,children:m,decorator:l,expanded:o=!1,tileMaxHeight:g=0,tilePadding:E=0,onClick:p,onKeyUp:w,tileCollapsedIconText:h="Interact to expand Tile",tileExpandedIconText:_="Interact to collapse Tile",tileCollapsedLabel:S,tileExpandedLabel:k,light:a,slug:y,hasRoundedCorners:i,...D}=$;const[F,f]=u.useState(g),[x,H]=u.useState(E),[d,I]=u.useState(o),[J,Q]=u.useState(g),[W,B]=u.useState(E),[s,M]=u.useState(o),[n,P]=u.useState(!0),N=u.useRef(null),U=u.useRef(null),ne=u.useRef(null),j=u.useRef(null),K=u.useRef(null),le=we([T,K]),r=O();o!==d&&(M(o),I(o),oe()),g!==J&&(f(g),Q(g)),E!==W&&(H(E),B(E));function oe(){var c;s&&j.current&&f((c=j.current.getBoundingClientRect())==null?void 0:c.height),N.current&&f(N.current.getBoundingClientRect().height)}function re(c){var L;(L=c==null?void 0:c.persist)==null||L.call(c),M(!s),oe()}function ae(c){c.target!==K.current&&c.target!==ne.current&&Z(c,[ee,te])&&c.preventDefault()}function Te(){return t.Children.toArray(m)}const Ee=A(`${r}--tile`,`${r}--tile--expandable`,{[`${r}--tile--is-expanded`]:s,[`${r}--tile--light`]:a},C),ye=A(`${r}--tile`,`${r}--tile--expandable`,`${r}--tile--expandable--interactive`,{[`${r}--tile--is-expanded`]:s,[`${r}--tile--light`]:a,[`${r}--tile--slug`]:y,[`${r}--tile--slug-rounded`]:y&&i,[`${r}--tile--decorator`]:l,[`${r}--tile--decorator-rounded`]:l&&i},C),Ne=A(`${r}--tile__chevron`,`${r}--tile__chevron--interactive`),q=Te();Y(()=>{if(!K.current||!N.current)return;const c=window.getComputedStyle(K.current,null),{current:L}=N,{height:X}=L.getBoundingClientRect(),ke=parseInt(c.getPropertyValue("padding-top"),10),Ie=parseInt(c.getPropertyValue("padding-bottom"),10);f(X),H(ke+Ie)},[F]),Y(()=>{!N.current||!U.current||!de(U.current)&&!ue(U.current)&&!de(N.current)&&!ue(N.current)&&!(y||l)&&P(!1)},[y,l]),Y(()=>{K.current&&(s?K.current.style.maxHeight="":K.current.style.maxHeight=F+x+"px")},[s,F,x]),u.useEffect(()=>{if(!N.current)return;const c=new ResizeObserver(L=>{const[X]=L;f(X.contentRect.height)});return c.observe(N.current),()=>c.disconnect()},[]);const ie=Se("expandable-tile-interactive");let v=t.isValidElement(y??l)?y??l:null;return v&&((se=v.type)==null?void 0:se.displayName)==="AILabel"&&(v=t.cloneElement(v,{size:"xs"})),n?t.createElement("div",V({ref:le,className:ye},D),t.createElement("div",{ref:j},y?v:l?t.createElement("div",{className:`${r}--tile--inner-decorator`},v):"",t.createElement("div",{ref:N,className:`${r}--tile-content`},q[0]),t.createElement("button",{type:"button","aria-expanded":s,"aria-controls":ie,onKeyUp:G([w,ae]),onClick:G([p,re]),"aria-label":s?_:h,ref:ne,className:Ne},me||(me=t.createElement(ce,null))),t.createElement("div",{ref:U,className:`${r}--tile-content`,id:ie},q[1]))):t.createElement("button",V({type:"button",ref:le,className:Ee,"aria-expanded":s,title:s?_:h},D,{onKeyUp:G([w,ae]),onClick:G([p,re]),tabIndex:b}),t.createElement("div",{ref:j},t.createElement("div",{ref:N,className:`${r}--tile-content`},q[0]),t.createElement("div",{className:`${r}--tile__chevron`},t.createElement("span",null,s?k:S),he||(he=t.createElement(ce,null))),t.createElement("div",{ref:U,className:`${r}--tile-content`},q[1])))});Ce.propTypes={children:e.node,className:e.string,decorator:e.node,expanded:e.bool,hasRoundedCorners:e.bool,id:e.string,light:R(e.bool),onClick:e.func,onKeyUp:e.func,slug:R(e.node),tabIndex:e.number,tileCollapsedIconText:e.string,tileCollapsedLabel:e.string,tileExpandedIconText:e.string,tileExpandedLabel:e.string};Ce.displayName="ExpandableTile";const xe=t.forwardRef(function($,T){let{children:b}=$;const C=O();return t.createElement("div",{ref:T,className:`${C}--tile-content__above-the-fold`},b)});xe.propTypes={children:e.node};xe.displayName="TileAboveTheFoldContent";const $e=t.forwardRef(function($,T){let{children:b}=$;const C=O();return t.createElement("div",{ref:T,className:`${C}--tile-content__below-the-fold`},b)});$e.propTypes={children:e.node};$e.displayName="TileBelowTheFoldContent";export{be as C,Ce as E,ve as S,ge as T,xe as a,$e as b};
