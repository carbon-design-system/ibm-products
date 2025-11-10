import{e,S as n}from"./iframe-Cx5KSUkN.js";import{S as s}from"./StatusIcon-CnOFa50q.js";import"./devtools-CqSmu32c.js";import"./bucket-13-Dcu5duvg.js";import"./bucket-9-B7qA5Jwb.js";import"./bucket-18-BsWhzxVc.js";import"./bucket-19-L8p_zxw3.js";import"./bucket-12-DjefWyAy.js";import"./bucket-10-vy7WitAF.js";import"./bucket-6-CTMsIO5l.js";const o=()=>e.createElement(n,{altGuidelinesHref:[{href:"https://carbondesignsystem.com/patterns/status-indicator-pattern/",label:"Carbon status indicator patterns"}],blocks:[{story:t},{title:"Accessibility",description:`The \`StatusIcon\` component follows the Carbon guidelines for status icons with
some added specifications around illustration usage. For additional usage
guidelines and documentation please refer to the links above.

_Status icons_ are an important method of communicating severity level
information to users. The shapes and colors, communicate severity that enable
users to quickly assess and identify status and respond accordingly.`},{title:"Sizing",description:`
| Size    | Pixels  |
| ------- | ------- |
| small   | 16 x 16 |
| medium  | 20 x 20 |
| large   | 24 x 24 |
| x-large | 32 x 32 |
          `}]});o.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const b={title:"Patterns/Prebuilt patterns/StatusIcon",component:s,tags:["autodocs"],argTypes:{kind:{control:{type:"select",labels:["fatal","critical","major-warning","minor-warning","undefined","unknown","normal","info","in-progress","running","pending"]}},size:{control:{type:"select"},labels:["sm","md","lg","xl"]},theme:{control:{type:"radio"},labels:["light","dark"]}},parameters:{docs:{page:o}}},r={kind:"fatal",size:"sm",theme:"light",iconDescription:"Fatal"},i=a=>e.createElement(s,{...a}),t=i.bind({});t.args={...r};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  return <StatusIcon {...args} />;
}`,...t.parameters?.docs?.source}}};const S=["Default"];export{t as Default,S as __namedExportsOrder,b as default};
