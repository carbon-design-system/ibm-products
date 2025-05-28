import{e as d}from"./index-DtHxqM--.js";import"./index-CMVdkQrl.js";import{B as b}from"./settings-C3kz8lqM.js";import{a as f}from"./index-B-lxVbXh.js";import{a as g,B as u}from"./BigNumbers-BhV7X5sZ.js";import{j as o}from"./index-DgLvjnYm.js";import{useMDXComponents as h}from"./index-CseD6FCQ.js";import"./index-CN3z16O-.js";import{b as j}from"./bucket-6-CRocNvF-.js";import{a as x,j as v,C as y}from"./index-CK5iQhpn.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./events-OVwOsPzJ.js";import"./index-BLvAv8yb.js";import"./v4-CtRu48qb.js";import"./devtools-CJD9WatR.js";import"./getSupportedLocale--Qslfae5.js";import"./SkeletonText-EbJJsNSY.js";import"./TooltipTrigger-XoCaIUMA.js";import"./bucket-9-m0gEOM1f.js";import"./bucket-0-CHtg8bFp.js";import"./index-CiYgQLeJ.js";import"./preview-C2liTwB1.js";import"./iframe-BEyU_vaq.js";import"./DocsRenderer-CFRXHY34-CVs9HZ-u.js";import"./client-CZTHzaKS.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";function i(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...h(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(e.h1,{id:"bignumbers",children:"BigNumbers"}),`
`,o.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsx(e.li,{children:o.jsx(e.a,{href:"#overview",children:"Overview"})}),`
`,o.jsx(e.li,{children:o.jsx(e.a,{href:"#example-usage",children:"Example usage"})}),`
`,o.jsx(e.li,{children:o.jsx(e.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,o.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,o.jsxs(e.p,{children:[`BigNumbers is used to display large values in a small area. The display of
values can be the value itself, or grouped in a `,o.jsx(e.code,{children:"numerator/denominator"}),` fashion.
Control over the total fraction decimals displayed as well as how the
values/totals are displayed are done via a locale prop. Other optional props
allow control over size, truncation, if the value is a percentage, the addition
of a button as well as tool tip functionality. The default locale is English
(`,o.jsx(e.code,{children:"en-US"}),") if one is not provided or if the provided one is not supported."]}),`
`,o.jsx(e.p,{children:o.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#locales",rel:"nofollow",children:"Supported locales"})}),`
`,o.jsx(e.h2,{id:"example-usage",children:"Example usage"}),`
`,`
`,o.jsx(e.h3,{id:"big-numbers",children:"Big numbers"}),`
`,o.jsx(x,{children:o.jsx(v,{of:n})}),`
`,o.jsx(e.h2,{id:"code-sample",children:"Code sample"}),`
`,`
`,o.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,o.jsx(y,{})]})}function B(t={}){const{wrapper:e}={...h(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(i,{...t})}):i(t)}const O="",r={"-123 ":-123,"0 ":0,"12 ":12,"345 ":345,"6789 ":6789,"12345.678 ":12345.678,"678901.2456 ":678901.2456,"1000000 ":1e6,"2345678 ":2345678,"90123456 ":90123456,"789012345 ":789012345,"6789012345 ":6789012345,"null ":null,"undefined ":void 0},s={"undefined ":null,"Example <Button> ":d.createElement(b,{renderIcon:j,iconDescription:"Icon Description",kind:"ghost",size:"sm",hasIconOnly:!0,onClick:f("Button.onClick()"),tooltipPosition:"bottom"})},$={title:"Experimental/Components/Big numbers/BigNumbers",component:u,tags:["autodocs"],argTypes:{forceShowTotal:{options:[!0,!1],control:{type:"boolean"}},iconButton:{control:{type:"select",labels:Object.keys(s)},options:Object.values(s).map((t,e)=>e),mapping:Object.values(s)},loading:{options:[!0,!1],control:{type:"boolean"}},locale:{options:["bg","cs","da-DK","de-CH","de","en-AU","en-GB","en-US","en-ZA","es-ES","es","et","fi","fr-CA","fr-CH","fr","hu","it","ja","lv","nl-BE","nl-NL","no","pl","pt-BR","pt-PT","ru-UA","ru","sk","sl","th","tr","uk-UA","vi"],control:{type:"select"}},percentage:{options:[!0,!1],control:{type:"boolean"}},size:{options:Object.values(g),control:{type:"radio"}},total:{control:{type:"select",labels:Object.keys(r)},options:Object.values(r).map((t,e)=>e),mapping:Object.values(r)},trending:{options:[!0,!1],control:{type:"boolean"}},truncate:{options:[!0,!1],control:{type:"boolean"}},value:{control:{type:"select",labels:Object.keys(r)},options:Object.values(r).map((t,e)=>e),mapping:Object.values(r)}},parameters:{styles:O,docs:{page:B}}},C={forceShowTotal:!1,fractionDigits:1,iconButton:0,label:"Label",loading:!1,locale:"en-US",percentage:!1,size:"default",tooltipDescription:"",total:13,trending:!1,truncate:!0,value:5},w=t=>d.createElement(u,{...t}),n=w.bind({});n.args={...C};var a,l,c,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  return <BigNumbers {...args} />;
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.description}}};const ee=["bigNumbers"];export{ee as __namedExportsOrder,n as bigNumbers,$ as default};
