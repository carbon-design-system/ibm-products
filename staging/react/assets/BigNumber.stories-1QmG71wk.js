import{j as o,eo as p,eq as d,ep as u,e as l,B as m}from"./iframe-DaJ7qZFz.js";import{B as h,a as i}from"./BigNumber-Dpmcu8GC.js";import{useMDXComponents as c}from"./index-JWVq4XZ1.js";import{E as b}from"./bucket-6-BJYpAUvA.js";import"./devtools-fyD2yDo2.js";import"./getSupportedLocale--Qslfae5.js";import"./SkeletonText-BkPZdxkH.js";import"./TooltipTrigger-jw_oYYbg.js";import"./bucket-9-DO1Iqhb7.js";import"./bucket-0-CrmspZNA.js";function a(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...c(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(e.h1,{id:"bignumber",children:"BigNumber"}),`
`,o.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsx(e.li,{children:o.jsx(e.a,{href:"#overview",children:"Overview"})}),`
`,o.jsx(e.li,{children:o.jsx(e.a,{href:"#example-usage",children:"Example usage"})}),`
`,o.jsx(e.li,{children:o.jsx(e.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,o.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,o.jsxs(e.p,{children:[`BigNumber is used to display large values in a small area. The display of values
can be the value itself, or grouped in a `,o.jsx(e.code,{children:"numerator/denominator"}),` fashion.
Control over the total fraction decimals displayed as well as how the
values/totals are displayed are done via a locale prop. Other optional props
allow control over size, truncation, if the value is a percentage, the addition
of a button as well as tool tip functionality. The default locale is English
(`,o.jsx(e.code,{children:"en-US"}),") if one is not provided or if the provided one is not supported."]}),`
`,o.jsx(e.p,{children:o.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#locales",rel:"nofollow",children:"Supported locales"})}),`
`,o.jsx(e.h2,{id:"example-usage",children:"Example usage"}),`
`,`
`,o.jsx(e.h3,{id:"big-numbers",children:"Big numbers"}),`
`,o.jsx(p,{children:o.jsx(d,{of:t})}),`
`,o.jsx(e.h2,{id:"code-sample",children:"Code sample"}),`
`,`
`,o.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,o.jsx(u,{})]})}function f(n={}){const{wrapper:e}={...c(),...n.components};return e?o.jsx(e,{...n,children:o.jsx(a,{...n})}):a(n)}const g="",{action:j}=__STORYBOOK_MODULE_ACTIONS__,s={"-123 ":-123,"0 ":0,"12 ":12,"345 ":345,"6789 ":6789,"12345.678 ":12345.678,"678901.2456 ":678901.2456,"1000000 ":1e6,"2345678 ":2345678,"90123456 ":90123456,"789012345 ":789012345,"6789012345 ":6789012345,"null ":null,"undefined ":void 0},r={"undefined ":null,"Example <Button> ":l.createElement(m,{renderIcon:b,iconDescription:"Icon Description",kind:"ghost",size:"sm",hasIconOnly:!0,onClick:j("Button.onClick()"),tooltipPosition:"bottom"})},D={title:"Experimental/BigNumber",component:i,tags:["autodocs"],argTypes:{forceShowTotal:{options:[!0,!1],control:{type:"boolean"}},iconButton:{control:{type:"select",labels:Object.keys(r)},options:Object.values(r).map((n,e)=>e),mapping:Object.values(r)},loading:{options:[!0,!1],control:{type:"boolean"}},locale:{options:["bg","cs","da-DK","de-CH","de","en-AU","en-GB","en-US","en-ZA","es-ES","es","et","fi","fr-CA","fr-CH","fr","hu","it","ja","lv","nl-BE","nl-NL","no","pl","pt-BR","pt-PT","ru-UA","ru","sk","sl","th","tr","uk-UA","vi"],control:{type:"select"}},percentage:{options:[!0,!1],control:{type:"boolean"}},size:{options:Object.values(h),control:{type:"radio"}},total:{control:{type:"select",labels:Object.keys(s)},options:Object.values(s).map((n,e)=>e),mapping:Object.values(s)},trending:{options:[!0,!1],control:{type:"boolean"}},truncate:{options:[!0,!1],control:{type:"boolean"}},value:{control:{type:"select",labels:Object.keys(s)},options:Object.values(s).map((n,e)=>e),mapping:Object.values(s)}},parameters:{styles:g,docs:{page:f}}},x={forceShowTotal:!1,fractionDigits:1,iconButton:0,label:"Label",loading:!1,locale:"en-US",percentage:!1,size:"default",tooltipDescription:"",total:13,trending:!1,truncate:!0,value:5},v=n=>l.createElement(i,{...n}),t=v.bind({});t.args={...x};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  return <BigNumber {...args} />;
}`,...t.parameters?.docs?.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...t.parameters?.docs?.description}}};const T=["bigNumber"];export{T as __namedExportsOrder,t as bigNumber,D as default};
