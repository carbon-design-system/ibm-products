import{e as o}from"./index-DzvNrmz8.js";import{d as b,Q as j,a6 as A,au as G,P as e}from"./index-5As4T26e.js";import{p as x}from"./settings-DbzZchXt.js";import{g as J}from"./devtools-CskDVa8y.js";import{I as K}from"./bucket-2-CdrYWKja.js";import{E as W}from"./bucket-5-CQjaVkio.js";import{aT as X}from"./bucket-15-BuGLwsj4.js";const Y=(r,t)=>typeof r!="number"?"Unknown":r<=t[0]?"Benign":r<t[1]?"Low":r<t[2]?"Medium":r<t[3]?"High":"Critical",Z=(r,t)=>{if(!t)return r;const{maxLength:s,front:g,back:m}=t;return s&&r.length>s?`${r.substring(0,g)}…${r.substr(r.length-m)}`:r},N=`${x.prefix}--decorator-icon`,M="DecoratorIcon",B={magnitude:"unknown",small:!1};let i=o.forwardRef(({className:r,magnitude:t=B.magnitude,small:s=B.small,...g},m)=>{let n;switch(t){case"benign":n=G;break;case"low":n=X;break;case"medium":n=W;break;case"high":n=K;break;case"critical":n=A;break;default:n=j;break}return o.createElement(n,{...g,"aria-hidden":!0,className:b(N,r,`${N}__magnitude-${t}`,{[`${N}--sm`]:s}),focusable:!1,ref:m,viewBox:t==="critical"?"8 8 8 8":"0 0 16 16",...J(M)})});i=x.checkComponentEnabled(i,M);i.displayName=M;i.propTypes={className:e.string,magnitude:e.oneOf(["unknown","benign","low","medium","high","critical"]),small:e.bool};i.__docgenInfo={description:"The shape and color of the Decorator's icon.",methods:[],displayName:"DecoratorIcon",props:{magnitude:{defaultValue:{value:"'unknown'",computed:!1},description:"Determines the shape and color of the icon.",type:{name:"enum",value:[{value:"'unknown'",computed:!1},{value:"'benign'",computed:!1},{value:"'low'",computed:!1},{value:"'medium'",computed:!1},{value:"'high'",computed:!1},{value:"'critical'",computed:!1}]},required:!1},small:{defaultValue:{value:"false",computed:!1},description:"Reduce the size of the icon in proportion to a smaller Decorator.",type:{name:"bool"},required:!1},className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1}}};const a=`${x.prefix}--decorator`,ee="DecoratorBase",p={onClick:()=>{},onClickLabel:()=>{},onClickValue:()=>{},onContextMenu:()=>{},onContextMenuLabel:()=>{},onContextMenuValue:()=>{},scoreThresholds:[0,4,7,10]};let E=o.forwardRef(({className:r,disabled:t,hideIcon:s,href:g,kind:m,label:n,setLabelTitle:L,onClick:T=p.onClick,onClickLabel:P=p.onClickLabel,onClickValue:R=p.onClickValue,onContextMenu:F=p.onContextMenu,onContextMenuLabel:S=p.onContextMenuLabel,onContextMenuValue:U=p.onContextMenuValue,score:u,scoreThresholds:D=p.scoreThresholds,small:w,theme:O,truncateValue:f,value:l,valueTitle:C,...h},y)=>{const c=Y(u,D),v=L&&L(u,D,c),$=Z(l,f),q=b(a,r,{[`${a}--${O}`]:O,[`${a}--sm`]:w,[`${a}--truncate-end`]:f==="end",[`${a}--truncate-start`]:f==="start",[`${a}--truncate-midline`]:f==null?void 0:f.maxLength}),_={className:`${a}__icon`,magnitude:c.toLowerCase(),small:w},V=k=>{T(k,{score:u,label:n,value:l,magnitude:c})},I=k=>{F(k,{score:u,label:n,value:l,magnitude:c})};if(m==="dual-button"){const k=d=>{P(d,{score:u,label:n,value:l,magnitude:c})},z=d=>{R(d,{score:u,label:n,value:l,magnitude:c})},H=d=>{S(d,{score:u,label:n,value:l,magnitude:c})},Q=d=>{U(d,{score:u,label:n,value:l,magnitude:c})};return o.createElement("span",{...h,className:b(q,`${a}--dual-button`,{[`${a}-disabled`]:t}),ref:y},o.createElement("button",{className:`${a}__label`,disabled:t,onClick:!t&&k,onContextMenu:!t&&H,title:v||n,type:"button"},!s&&o.createElement(i,{..._}),!!n&&n),o.createElement("button",{className:`${a}__value`,disabled:t,onClick:!t&&z,onContextMenu:!t&&Q,title:C||l,type:"button"},$))}return m==="single-button"?o.createElement("button",{...h,className:b(q,`${a}--single-button`,{[`${a}-disabled`]:t}),disabled:t,onClick:!t&&V,onContextMenu:!t&&I,ref:y,type:"button"},o.createElement("span",{className:`${a}__label`,title:v||n},!s&&o.createElement(i,{..._}),!!n&&n),o.createElement("span",{className:`${a}__value`,title:C||l},$)):m==="link"?o.createElement("a",{...h,href:g,className:b(q,`${a}--link`),onClick:V,onContextMenu:I,ref:y},o.createElement("span",{className:`${a}__label`,title:v||n},!s&&o.createElement(i,{..._}),!!n&&n),o.createElement("span",{className:`${a}__value`,title:C||l},$)):o.createElement("span",{...h,className:b(q,`${a}--default`),ref:y},o.createElement("span",{className:`${a}__label`,title:v||n},!s&&o.createElement(i,{..._}),!!n&&n),o.createElement("span",{className:`${a}__value`,title:C||l},$))});E.displayName=ee;E.propTypes={className:e.string,disabled:e.bool,hideIcon:e.bool,href:e.string,kind:e.oneOf(["default","link","single-button","dual-button"]),label:e.string,onClick:e.func,onClickLabel:e.func,onClickValue:e.func,onContextMenu:e.func,onContextMenuLabel:e.func,onContextMenuValue:e.func,score:e.number,scoreThresholds:e.arrayOf(e.number),setLabelTitle:e.func,small:e.bool,theme:e.oneOf(["light","dark"]),truncateValue:e.oneOfType([e.oneOf(["end","start"]),e.shape({maxLength:e.number,front:e.number,back:e.number})]),value:e.string.isRequired,valueTitle:e.string};E.__docgenInfo={description:`The DecoratorBase groups a key/value pair to look and behave like a single UI element.

DecoratorBase is for internal use only. Refer to the other Decorator types as components for your app.`,methods:[],displayName:"DecoratorBase",props:{onClick:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},onClickLabel:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},onClickValue:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},onContextMenu:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},onContextMenuLabel:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},onContextMenuValue:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},scoreThresholds:{defaultValue:{value:"[0, 4, 7, 10]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"number"}},required:!1},className:{description:"",type:{name:"string"},required:!1},disabled:{description:"",type:{name:"bool"},required:!1},hideIcon:{description:"",type:{name:"bool"},required:!1},href:{description:"",type:{name:"string"},required:!1},kind:{description:"`kind` differentiates between each type of Decorator, and is for internal use only.",type:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'link'",computed:!1},{value:"'single-button'",computed:!1},{value:"'dual-button'",computed:!1}]},required:!1},label:{description:"",type:{name:"string"},required:!1},score:{description:"",type:{name:"number"},required:!1},setLabelTitle:{description:"",type:{name:"func"},required:!1},small:{description:"",type:{name:"bool"},required:!1},theme:{description:"",type:{name:"enum",value:[{value:"'light'",computed:!1},{value:"'dark'",computed:!1}]},required:!1},truncateValue:{description:"",type:{name:"union",value:[{name:"enum",value:[{value:"'end'",computed:!1},{value:"'start'",computed:!1}]},{name:"shape",value:{maxLength:{name:"number",required:!1},front:{name:"number",required:!1},back:{name:"number",required:!1}}}]},required:!1},value:{description:"",type:{name:"string"},required:!0},valueTitle:{description:"",type:{name:"string"},required:!1}}};export{E as D};
