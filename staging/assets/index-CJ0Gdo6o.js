import{e}from"./index-DxDX2vOa.js";import{c as d,P as t,G as l}from"./index-B_euquWE.js";import{p as n}from"./settings-0ThqPtR3.js";import{d as m}from"./bucket-18-Dvh787Y8.js";import{L as f}from"./bucket-9-Clk9T-SZ.js";const o={"deprecation-notice":{icon:m},layer:{icon:f},"feature-flags":{icon:l}},i=({className:r,type:a,text:s,children:c})=>{const p=o[a].icon;return e.createElement("div",{className:d(`${n.prefix}--annotation`,`${n.prefix}--annotation--${a}`,r)},e.createElement("div",{className:`${n.prefix}--annotation__label`},e.createElement(p,null),s),e.createElement("div",{className:`${n.prefix}--annotation__content`},c))};i.propTypes={children:t.node,className:t.string,text:t.node,type:t.oneOf(Object.keys(o))};i.__docgenInfo={description:"",methods:[],displayName:"Annotation",props:{children:{description:"The story to be rendered with this annotation.",type:{name:"node"},required:!1},className:{description:"Additional css class names.",type:{name:"string"},required:!1},text:{description:"The annotation.",type:{name:"node"},required:!1},type:{description:"The story to be rendered with this annotation.",type:{name:"enum",value:[{value:'"deprecation-notice"',computed:!1},{value:'"layer"',computed:!1},{value:'"feature-flags"',computed:!1}]},required:!1}}};export{i as A};
