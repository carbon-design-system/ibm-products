const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ErrorIllustration-ByS_MGs5.js","./settings-DEdZ0TrD.js","./index-BwDkhjyp.js","./_commonjsHelpers-BosuxZz1.js","./index-CJvxHwuA.js","./index-Dk74W0Oi.js","./floating-ui.core.mjs-LzsX8FoD.js","./index-BONylQH5.js","./events-BwXSUnsA.js","./index-CtP8jiW9.js","./uuidv4-BQrI85uz.js","./NoDataIllustration-CDaoSmH9.js","./NoTagsIllustration-DYIh1T9V.js","./NotFoundIllustration-BjNgXaPp.js","./NotificationsIllustration-CrpgNW8X.js","./UnauthorizedIllustration-CnrnrPxD.js"])))=>i.map(i=>d[i]);
import{j as o,p as g,B as I}from"./settings-DEdZ0TrD.js";import{r as i,R as P}from"./index-BwDkhjyp.js";import{P as t}from"./index-Dk74W0Oi.js";import{c as p}from"./floating-ui.core.mjs-LzsX8FoD.js";import{L as N}from"./Link-Dcx-j9tl.js";import{g as D}from"./devtools-BMJcATO0.js";import"./props-helper-Bq60RLbY.js";import{_ as s}from"./iframe-BXu0dMI8.js";const q=i.lazy(()=>s(()=>import("./ErrorIllustration-ByS_MGs5.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url)),z=i.lazy(()=>s(()=>import("./NoDataIllustration-CDaoSmH9.js"),__vite__mapDeps([11,1,2,3,4,5,6,7,8,9,10]),import.meta.url)),$=i.lazy(()=>s(()=>import("./NoTagsIllustration-DYIh1T9V.js"),__vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10]),import.meta.url)),O=i.lazy(()=>s(()=>import("./NotFoundIllustration-BjNgXaPp.js"),__vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10]),import.meta.url)),R=i.lazy(()=>s(()=>import("./NotificationsIllustration-CrpgNW8X.js"),__vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10]),import.meta.url)),j=i.lazy(()=>s(()=>import("./UnauthorizedIllustration-CnrnrPxD.js"),__vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10]),import.meta.url)),V=a=>{switch(a){case"error":return q;case"noData":return z;case"noTags":return $;case"notifications":return R;case"notFound":return O;case"unauthorized":return j;default:return()=>null}},f=({kind:a,...m})=>{const n=V(a);return o.jsx(i.Suspense,{children:o.jsx(n,{...m})})};f.propTypes={kind:t.string};f.__docgenInfo={description:"",methods:[],displayName:"EmptyStateIllustration",props:{kind:{description:"",type:{name:"string"},required:!1}}};const e=`${g.prefix}--empty-state`,h="EmptyStateV2";let r=P.forwardRef((a,m)=>{const{action:n,className:v,illustration:d,illustrationDescription:_,illustrationPosition:E="top",illustrationTheme:T,kind:l,link:c,size:u="lg",subtitle:y,title:x,...b}=a,k={size:u,theme:T,title:_,kind:l};return o.jsxs("div",{...b,className:p([e,v,`${e}-position--${E}`,{[`${e}-type--${l}`]:l}]),ref:m,...D(h),children:[d&&o.jsx("img",{src:d,alt:_,className:p([`${e}__illustration`,`${e}__illustration--${u}`])}),!d&&l&&o.jsx(f,{...k}),o.jsxs("div",{className:`${e}__content`,children:[o.jsx("h3",{className:p(`${e}__header`,{[`${e}__header--small`]:u==="sm"}),children:x}),y&&o.jsx("p",{className:p(`${e}__subtitle`,{[`${e}__subtitle--small`]:u==="sm"}),children:y}),n&&o.jsx(I,{...n,className:`${e}__action-button`,size:"sm",children:n.text}),c&&o.jsx(N,{...c,className:`${e}__link`,children:c.text})]})]})});r=g.checkComponentEnabled(r,h);r.propTypes={action:t.PropTypes.shape({text:t.string}),className:t.string,illustration:t.string,illustrationDescription:t.string,illustrationPosition:t.oneOf(["top","right","bottom","left"]),illustrationTheme:t.oneOf(["light","dark"]),kind:t.oneOf(["error","noData","noTags","notFound","notifications","unauthorized"]),link:t.shape({text:t.oneOfType([t.string,t.node])}),size:t.oneOf(["sm","lg"]),subtitle:t.oneOfType([t.string,t.node]),title:t.oneOfType([t.string,t.node]).isRequired};r.displayName=h;r.__docgenInfo={description:"This is the V2 version of the `EmptyState` component. To use you must pass the `v2` prop to the V1 version of the component `EmptyState` and use the props below.\nIn order to avoid breaking changes in the future `EmptyStateV2` is not actually directly importable.",methods:[],displayName:"EmptyStateV2",props:{action:{description:"Props for the action button. Refer to the Carbon Components button documentation for full list of props.",type:{name:"shape",value:{text:{name:"string",required:!1}}},required:!1},className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1},illustration:{description:"Source for the illustration image if you choose to use your own custom image. Passing an illustration prop will supersede the kind option.",type:{name:"string"},required:!1},illustrationDescription:{description:"The alt text for the illustration",type:{name:"string"},required:!1},illustrationPosition:{description:"Designates the position of the illustration relative to the content",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'right'",computed:!1},{value:"'bottom'",computed:!1},{value:"'left'",computed:!1}]},required:!1},illustrationTheme:{description:`Empty state illustration theme variations.
To ensure you use the correct themed illustrations, you can conditionally specify light or dark
based on your app's current theme value. Example:
\`illustrationTheme={appTheme === ('carbon--g100' || 'carbon--g90') ? 'dark' : 'light'}\``,type:{name:"enum",value:[{value:"'light'",computed:!1},{value:"'dark'",computed:!1}]},required:!1},kind:{description:"Determines which predefined illustration will be displayed",type:{name:"enum",value:[{value:"'error'",computed:!1},{value:"'noData'",computed:!1},{value:"'noTags'",computed:!1},{value:"'notFound'",computed:!1},{value:"'notifications'",computed:!1},{value:"'unauthorized'",computed:!1}]},required:!1},link:{description:"Props for the link. Refer to the Carbon Components link documentation for full list of props.",type:{name:"shape",value:{text:{name:"union",value:[{name:"string"},{name:"node"}],required:!1}}},required:!1},size:{description:"Empty state size",type:{name:"enum",value:[{value:"'sm'",computed:!1},{value:"'lg'",computed:!1}]},required:!1},subtitle:{description:"Empty state subtext",type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!1},title:{description:"Empty state heading",type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!0}}};export{r as E};
