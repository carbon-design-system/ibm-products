import{b as N,_ as h,d as C,P as e,o as j}from"./index-5As4T26e.js";import{e as g}from"./index-DzvNrmz8.js";import{u as B}from"./FlexGrid-SGz1UDZT.js";function S(c){let{as:o="div",children:n,className:a,sm:s,md:t,lg:l,xlg:m,max:r,...u}=c;const{mode:d}=B(),i=N();if(d==="css-grid")return g.createElement(T,h({as:o,className:a,sm:s,md:t,lg:l,xlg:m,max:r},u),n);const $=F([s,t,l,m,r],i),b=C(a,$,{[`${i}--col`]:$.length===0}),y=o;return g.createElement(y,h({className:b},u),n)}const f=e.oneOf(["25%","50%","75%","100%"]),p=j("enable-css-grid")?e.oneOfType([e.bool,e.number,e.shape({span:e.oneOfType([e.number,f]),offset:e.number,start:e.number,end:e.number}),f]):e.oneOfType([e.bool,e.number,e.shape({span:e.number,offset:e.number})]);S.propTypes={as:e.oneOfType([e.string,e.elementType]),children:e.node,className:e.string,lg:p,max:p,md:p,sm:p,span:e.oneOfType([e.number,f]),xlg:p};function T(c){let{as:o="div",children:n,className:a,sm:s,md:t,lg:l,xlg:m,max:r,span:u,...d}=c;const i=N(),$=k([s,t,l,m,r],i),b=P(u,i),y=C(a,$,b,{[`${i}--css-grid-column`]:!0});return g.createElement(o,h({className:y},d),n)}T.propTypes={as:e.oneOfType([e.string,e.elementType]),children:e.node,className:e.string,lg:p,max:p,md:p,sm:p,span:e.oneOfType([e.number,f,e.shape({span:e.oneOfType([e.number,f]),start:e.number,end:e.number})]),xlg:p};const O=["sm","md","lg","xlg","max"];function k(c,o){const n=[];for(let a=0;a<c.length;a++){const s=c[a];if(s==null)continue;const t=O[a];if(s===!0){n.push(`${o}--${t}:col-span-auto`);continue}if(typeof s=="string"){n.push(`${o}--${t}:col-span-${s.replace("%","")}`);continue}if(typeof s=="number"){n.push(`${o}--${t}:col-span-${s}`);continue}if(typeof s=="object"){const{span:l,offset:m,start:r,end:u}=s;if(typeof m=="number"&&n.push(`${o}--${t}:col-start-${m>0?m+1:"auto"}`),typeof r=="number"&&n.push(`${o}--${t}:col-start-${r||"auto"}`),typeof u=="number"&&n.push(`${o}--${t}:col-end-${u}`),typeof l=="number")n.push(`${o}--${t}:col-span-${l}`);else if(typeof l=="string"){n.push(`${o}--${t}:col-span-${l.slice(0,-1)}`);continue}}}return n.join(" ")}function F(c,o){const n=[];for(let a=0;a<c.length;a++){const s=c[a];if(s==null)continue;const t=O[a];if(s===!0){n.push(`${o}--col-${t}`);continue}if(typeof s=="number"){n.push(`${o}--col-${t}-${s}`);continue}if(typeof s=="object"){const{span:l,offset:m}=s;typeof l=="number"&&n.push(`${o}--col-${t}-${l}`),l===!0&&n.push(`${o}--col-${t}`),typeof m=="number"&&n.push(`${o}--offset-${t}-${m}`)}}return n.join(" ")}function P(c,o){const n=[];if(typeof c=="number")n.push(`${o}--col-span-${c}`);else if(typeof c=="string")n.push(`${o}--col-span-${c.slice(0,-1)}`);else if(typeof c=="object"){const{span:a,start:s,end:t}=c;a!=null&&n.push(`${o}--col-span-${a}`),s!=null&&n.push(`${o}--col-start-${s}`),t!=null&&n.push(`${o}--col-end-${t}`)}return n.join("")}export{S as C};
