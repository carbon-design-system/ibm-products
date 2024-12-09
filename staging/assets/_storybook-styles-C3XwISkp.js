import{e}from"./index-DxDX2vOa.js";import{c as m,M as u,P as s}from"./index-B_euquWE.js";import{g as f}from"./devtools-BlxCaI1L.js";import{p as n}from"./settings-0ThqPtR3.js";import{I as v}from"./InlineLoading-CIMtbZ0Q.js";import{b as h}from"./bucket-6-Cw3hdw1e.js";import{b as g}from"./bucket-2-BDpMY3Ys.js";const a=`${n.prefix}--status-indicator-step`,r="StatusIndicatorStep",E={status:"inactive"};let i=e.forwardRef(({className:c,description:p,errorMessage:o,status:t=E.status,...l},d)=>e.createElement("li",{...l,className:m(a,c,`${a}--${t}`),ref:d,...f(r)},e.createElement("div",{className:`${a}__details`},e.createElement("div",{className:`${a}__icon`},t==="inactive"&&e.createElement(u,{size:16,viewBox:"1 1 14 14"}),t==="active"&&e.createElement(v,null),t==="error"&&e.createElement(h,{size:16}),t==="finished"&&e.createElement(g,{size:16})),e.createElement("div",{className:`${a}__text`},p)),t==="error"&&o&&e.createElement("div",{className:`${a}__error-message`},o)));i.deprecated={level:"warn",details:"This component is deprecated"};i=n.checkComponentEnabled(i,r);i.displayName=r;i.propTypes={className:s.string,description:s.string.isRequired,errorMessage:s.string,status:s.oneOf(["inactive","active","error","finished"]).isRequired};i.__docgenInfo={description:"An icon/description pair that describes one step of the `StatusIndicator`.\n@deprecated This component is deprecated",methods:[],displayName:"StatusIndicatorStep",props:{status:{defaultValue:{value:"'inactive'",computed:!1},description:"Each `status` represents a different icon..",type:{name:"enum",value:[{value:"'inactive'",computed:!1},{value:"'active'",computed:!1},{value:"'error'",computed:!1},{value:"'finished'",computed:!1}]},required:!1},className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1},description:{description:"The text associated with the icon.",type:{name:"string"},required:!0},errorMessage:{description:'This message will appear below the description if the `status` is "error".',type:{name:"string"},required:!1}}};const k="";export{i as S,k as s};
