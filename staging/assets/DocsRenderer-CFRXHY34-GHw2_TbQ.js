const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-CUO_02de.js","./index-CPiZ6Cnx.js","./_commonjsHelpers-BosuxZz1.js"])))=>i.map(i=>d[i]);
import{_ as c}from"./iframe-necW5_o2.js";import{r as s,e as n}from"./index-CPiZ6Cnx.js";import{H as p,A as h,i as E,j as d}from"./index-C-2_Eo4o.js";import{c as v}from"./client-BCQEsWlk.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B83en7q5.js";import"./index-ZKO_qc5e.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";var i=new Map;function R(){return globalThis.IS_REACT_ACT_ENVIRONMENT}var f=({callback:e,children:t})=>{let r=s.useRef();return s.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t};typeof Promise.withResolvers>"u"&&(Promise.withResolvers=()=>{let e=null,t=null;return{promise:new Promise((r,o)=>{e=r,t=o}),resolve:e,reject:t}});var w=async(e,t,r)=>{let o=await x(t,r);if(R()){o.render(e);return}let{promise:a,resolve:m}=Promise.withResolvers();return o.render(s.createElement(f,{callback:m},e)),a},_=(e,t)=>{let r=i.get(e);r&&(r.unmount(),i.delete(e))},x=async(e,t)=>{let r=i.get(e);return r||(r=v.createRoot(e,t),i.set(e,r)),r},g={code:E,a:h,...p},y=class extends s.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:n.createElement(n.Fragment,null,t)}},S=class{constructor(){this.render=async(e,t,r)=>{let o={...g,...t==null?void 0:t.components},a=d;return new Promise((m,l)=>{c(async()=>{const{MDXProvider:u}=await import("./index-CUO_02de.js");return{MDXProvider:u}},__vite__mapDeps([0,1,2]),import.meta.url).then(({MDXProvider:u})=>w(n.createElement(y,{showException:l,key:Math.random()},n.createElement(u,{components:o},n.createElement(a,{context:e,docsParameter:t}))),r)).then(()=>m())})},this.unmount=e=>{_(e)}}};export{S as DocsRenderer,g as defaultComponents};
