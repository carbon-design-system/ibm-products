import{v as m}from"./v4-CtRu48qb.js";const{addons:S}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:v}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:l}=__STORYBOOK_MODULE_GLOBAL__;var A="storybook/actions",x=`${A}/action-event`,j={depth:10,clearOnStoryChange:!0,limit:50},f=(t,e)=>{let r=Object.getPrototypeOf(t);return!r||e(r)?r:f(r,e)},w=t=>!!(typeof t=="object"&&t&&f(t,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof t.persist=="function"),D=t=>{if(w(t)){let e=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));e.persist();let r=Object.getOwnPropertyDescriptor(e,"view"),o=r==null?void 0:r.value;return typeof o=="object"&&(o==null?void 0:o.constructor.name)==="Window"&&Object.defineProperty(e,"view",{...r,value:Object.create(o.constructor.prototype)}),e}return t},I=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?m():Date.now().toString(36)+Math.random().toString(36).substring(2);function p(t,e={}){let r={...j,...e},o=function(...i){var O,d;if(e.implicit){let g=(O="__STORYBOOK_PREVIEW__"in l?l.__STORYBOOK_PREVIEW__:void 0)==null?void 0:O.storyRenders.find(c=>c.phase==="playing"||c.phase==="rendering");if(g){let c=!((d=globalThis==null?void 0:globalThis.FEATURES)!=null&&d.disallowImplicitActionsInRenderV8),u=new v({phase:g.phase,name:t,deprecated:c});if(c)console.warn(u);else throw u}}let n=S.getChannel(),s=I(),a=5,_=i.map(D),E=i.length>1?_:_[0],b={id:s,count:0,data:{name:t,args:E},options:{...r,maxDepth:a+(r.depth||3),allowFunction:r.allowFunction||!1}};n.emit(x,b)};return o.isAction=!0,o.implicit=e.implicit,o}var R=(t,e)=>typeof e[t]>"u"&&!(t in e),M=t=>{let{initialArgs:e,argTypes:r,id:o,parameters:{actions:i}}=t;if(!i||i.disable||!i.argTypesRegex||!r)return{};let n=new RegExp(i.argTypesRegex);return Object.entries(r).filter(([s])=>!!n.test(s)).reduce((s,[a,_])=>(R(a,e)&&(s[a]=p(a,{implicit:!0,id:o})),s),{})},P=t=>{let{initialArgs:e,argTypes:r,parameters:{actions:o}}=t;return o!=null&&o.disable||!r?{}:Object.entries(r).filter(([i,n])=>!!n.action).reduce((i,[n,s])=>(R(n,e)&&(i[n]=p(typeof s.action=="string"?s.action:n)),i),{})},h=[P,M],y=!1,C=t=>{let{parameters:{actions:e}}=t;if(!(e!=null&&e.disable)&&!y&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in l&&typeof l.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let r=l.__STORYBOOK_TEST_ON_MOCK_CALL__;r((o,i)=>{let n=o.getMockName();n!=="spy"&&(!/^next\/.*::/.test(n)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(s=>n.startsWith(s)))&&p(n)(i)}),y=!0}},T=[C];const L=Object.freeze(Object.defineProperty({__proto__:null,argsEnhancers:h,loaders:T},Symbol.toStringTag,{value:"Module"})),B=Object.freeze(Object.defineProperty({__proto__:null,argsEnhancers:h,loaders:T},Symbol.toStringTag,{value:"Module"}));export{B as a,L as p};
