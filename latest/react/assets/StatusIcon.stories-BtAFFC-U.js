import{e,S as n}from"./iframe-BCQS5_Al.js";import{S as s}from"./StatusIcon-D6iq8AEc.js";import"./devtools-BnxPUADb.js";import"./bucket-13-DfemzzhA.js";import"./bucket-9-DNHV7TPt.js";import"./bucket-18-DXk0sF99.js";import"./bucket-19-PZtVqhwH.js";import"./bucket-11-BKStVx8j.js";import"./bucket-6-BnWBUhiK.js";const a=()=>e.createElement(n,{altGuidelinesHref:[{href:"https://carbondesignsystem.com/patterns/status-indicator-pattern/",label:"Carbon status indicator patterns"}],blocks:[{story:t},{title:"Accessibility",description:`The \`StatusIcon\` component follows the Carbon guidelines for status icons with
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
          `}]});a.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const y={title:"Patterns/Prebuilt patterns/StatusIcon",component:s,tags:["autodocs"],argTypes:{kind:{control:{type:"select",labels:["fatal","critical","major-warning","minor-warning","undefined","unknown","normal","info","in-progress","running","pending"]}},size:{control:{type:"select"},labels:["sm","md","lg","xl"]},theme:{control:{type:"radio"},labels:["light","dark"]}},parameters:{docs:{page:a}}},r={kind:"fatal",size:"sm",theme:"light",iconDescription:"Fatal"},i=o=>e.createElement(s,{...o}),t=i.bind({});t.args={...r};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  return <StatusIcon {...args} />;
}`,...t.parameters?.docs?.source}}};const b=["Default"];export{t as Default,b as __namedExportsOrder,y as default};
