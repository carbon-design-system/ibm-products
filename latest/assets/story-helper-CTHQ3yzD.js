import{e as f}from"./index-CPiZ6Cnx.js";import{P as x}from"./index-CXyjPnaX.js";function E(r){return r.toLowerCase()}var v=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],_=/[^A-Z0-9]+/gi;function C(r,e){e===void 0&&(e={});for(var t=e.splitRegexp,a=t===void 0?v:t,s=e.stripRegexp,o=s===void 0?_:s,l=e.transform,n=l===void 0?E:l,c=e.delimiter,d=c===void 0?" ":c,i=b(b(r,a,"$1\0$2"),o,"\0"),p=0,u=i.length;i.charAt(p)==="\0";)p++;for(;i.charAt(u-1)==="\0";)u--;return i.slice(p,u).split("\0").map(n).join(d)}function b(r,e,t){return e instanceof RegExp?r.replace(e,t):e.reduce(function(a,s){return a.replace(s,t)},r)}var m=function(){return m=Object.assign||function(e){for(var t,a=1,s=arguments.length;a<s;a++){t=arguments[a];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},m.apply(this,arguments)};function S(r,e){return e===void 0&&(e={}),C(r,m({delimiter:"."},e))}var g=function(){return g=Object.assign||function(e){for(var t,a=1,s=arguments.length;a<s;a++){t=arguments[a];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},g.apply(this,arguments)};function $(r,e){return e===void 0&&(e={}),S(r,g({delimiter:"-"},e))}const h="github/carbon-design-system/ibm-products/tree/main/examples/carbon-for-ibm-products",k=r=>`https://codesandbox.io/p/sandbox/${h}/${r}?file=%2Fsrc%2FExample%2FExample.jsx`,y=({exampleDirectory:r})=>{const e=k(r);return f.createElement("a",{href:e},f.createElement("img",{alt:"Edit on CodeSandbox",src:"https://codesandbox.io/static/img/play-codesandbox.svg"}))};y.propTypes={exampleDirectory:x.string};const A=r=>`https://stackblitz.com/${h}/${r}?file=src%2FExample%2FExample.jsx`;x.string;const w=r=>{var p;const e=(p=r==null?void 0:r.meta)==null?void 0:p.title,[t,a,s,o,...l]=e.split("/");let n={package:t,kind:a,expectCodedExample:!1},c;/components|patterns/i.test(a)?(n.expectCodedExample=!0,typeof o=="string"?c=o:c=s,n.section=s,n.guidelinesHref=`https://pages.github.ibm.com/carbon/ibm-products/${a.toLowerCase()}/${$(n.section)}/usage`):c=s;const d=c.split("#"),i=d[0];return d.length>1&&d[1]==="canary"&&(n.canary=!0),i?l.length>0?n.component=n.title=`${i} (${l.join(" ")})`:(n.component=i,n.title=i):(console.error("Error: unable to parse title from metadata."),n.title=e),n.guidelinesHref&&(n.guidelinesLinkLabel=`${n.title} usage guidelines`),n},j=r=>{const e=w(r);return{href:e.guidelinesHref,label:e.guidelinesLinkLabel}},R=()=>{var e;const r=(e=document.querySelector("[data-carbon-theme]"))==null?void 0:e.getAttribute("data-carbon-theme");return r==="g90"||r==="g100"?"dark":"light"};y.__docgenInfo={description:"",methods:[],displayName:"CodesandboxLink",props:{exampleDirectory:{description:"directory within examples codesandbox will be found",type:{name:"string"},required:!1}}};export{y as C,A as a,j as b,k as c,R as g,$ as p,w as s};
