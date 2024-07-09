import{p as j,j as e,T as te,B as oe}from"./settings-BiUEFdm2.js";import{c as g}from"./deprecate-D9ms-jbM.js";import{useMDXComponents as X}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-CsZ1lTTC.js";import{e as C,i as k,C as ne}from"./index-CDYzkStP.js";import{R as M}from"./index-BwDkhjyp.js";import{P as n}from"./index-Dk74W0Oi.js";import{g as x}from"./devtools-BPcQvzXy.js";import{S as $}from"./SkeletonText-CxO-ffce.js";import{T as ae}from"./TooltipTrigger-BUBh9TEp.js";import{e as re}from"./bucket-8-61DsWji_.js";import{c as se}from"./bucket-0-D7rUCVax.js";import{a as le}from"./bucket-5-BuK6y5Rd.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./events-Bq7WR1mU.js";import"./index-BONylQH5.js";import"./iframe-j3s5A4v9.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-BjQFKvNH.js";import"./isSymbol-BZYRlrjc.js";import"./index-DrFu-skq.js";const r={Default:"default",Large:"lg",XLarge:"xl"},L={Dash:"–",Slash:"/"},G="en-US",q=(o,t,c,d)=>t==null||typeof t!="number"?null:d?Intl.NumberFormat(o,{notation:"compact",minimumFractionDigits:0,maximumFractionDigits:Math.round(c)}).format(t):Intl.NumberFormat(o).format(t),ie=o=>{switch(o){case r.Large:return 20;case r.XLarge:return 24;default:return 16}},ce=o=>Intl.NumberFormat.supportedLocalesOf(o).length>0?o:G,a=`${j.prefix}--big-numbers`,m=`${j.prefix}--big-numbers-skeleton`,f="BigNumbers",s={forceShowTotal:!1,fractionDigits:1,loading:!1,locale:G,percentage:!1,size:r.Default,total:0,trending:!1,truncate:!0,value:null};let i=M.forwardRef(({className:o,forceShowTotal:t=s.forceShowTotal,fractionDigits:c=s.fractionDigits,iconButton:d,loading:b=s.loading,label:W,locale:Z=s.locale,percentage:N=s.percentage,size:h=s.size,tooltipDescription:w,total:v=s.total,trending:Q=s.trending,truncate:B=s.truncate,value:T=s.value,..._},S)=>{const Y=g(o,{[`${a}--lg`]:h===r.Large,[`${a}--xl`]:h===r.XLarge}),D=ce(Z),y=q(D,T,c,B)??L.Dash,O=q(D,v,c,B)??"Unknown",ee=!N&&v>T&&y!==O||t&&v>0;return b?e.jsx(H,{..._,ref:S,className:o,size:h,...x(f)}):e.jsxs("div",{..._,className:g(a,Y,o),ref:S,...x(f),children:[e.jsxs("span",{className:`${a}__row`,children:[e.jsx("h4",{className:`${a}__label`,children:W}),w&&e.jsx(te,{description:w,align:"right",className:`${a}__info`,children:e.jsx(ae,{className:`${a}__tooltip-trigger`,children:e.jsx(re,{size:16})})})]}),e.jsxs("span",{className:`${a}__row`,role:"math",children:[Q&&e.jsx(se,{className:`${a}__trend`,size:ie(h)}),e.jsx("span",{className:`${a}__value`,children:N?e.jsxs("div",{className:`${a}__percentage`,children:[y,e.jsx("span",{className:`${a}__percentage-mark`,children:"%"})]}):y}),ee&&e.jsx("span",{className:`${a}__total`,children:e.jsxs("span",{children:[L.Slash,O]})}),d]})]})});i=j.checkComponentEnabled(i,f);i.displayName=f;i.propTypes={className:n.string,forceShowTotal:n.bool,fractionDigits:n.number,iconButton:n.node,label:n.string.isRequired,loading:n.bool,locale:n.string,percentage:n.bool,size:n.oneOf(Object.values(r)),tooltipDescription:n.string,total:n.number,trending:n.bool,truncate:n.bool,value:n.number};let H=M.forwardRef(({className:o,size:t,...c},d)=>{const b=g(o,{[`${m}--lg`]:t===r.Large,[`${m}--xl`]:t===r.XLarge});return e.jsxs("div",{...c,className:g(o,m,b),ref:d,...x(f),children:[e.jsx($,{className:`${m}__label`}),e.jsx($,{heading:!0,className:`${m}__value`,width:"80%"})]})});H.propTypes={className:n.string,size:n.oneOf(Object.values(r))};i.__docgenInfo={description:`BigNumbers is used to display large values in a small area. The display of
values can be the value itself, or grouped in a numerator / denominator fashion.
Control over the total fraction decimals displayed as well as how the
values/totals are displayed are done via a locale prop. Other optional props
allow control over size, truncation, if the value is a percentage, the addition
of a button as well as tool tip functionality.
The default locale is English (\`en-US\`) if one is not provided or if the provided one is not supported.`,methods:[],displayName:"BigNumbers",props:{forceShowTotal:{defaultValue:{value:"false",computed:!1},description:"Display the `total` even when the `value` is equal to\nthe `total` when `forceShowTotal` prop is true on the\ncondition that the `total` is greater than 0.\n@type bool",type:{name:"bool"},required:!1},fractionDigits:{defaultValue:{value:"1",computed:!1},description:`Optional value to control the maximum fraction digits
used when truncating the value and total.
@type number`,type:{name:"number"},required:!1},loading:{defaultValue:{value:"false",computed:!1},description:`Specify if the BigNumbers is in a loading state
@type bool`,type:{name:"bool"},required:!1},locale:{defaultValue:{value:"'en-US'",computed:!1},description:`Locale value to determine approach to formatting numbers.
@type string`,type:{name:"string"},required:!1},percentage:{defaultValue:{value:"false",computed:!1},description:"Format number to percentage when `percentage` prop is true.\n@type bool",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'default'",computed:!1},description:`The size of the BigNumbers.
@type string`,type:{name:"enum",value:[{value:'"default"',computed:!1},{value:'"lg"',computed:!1},{value:'"xl"',computed:!1}]},required:!1},total:{defaultValue:{value:"0",computed:!1},description:`Total value that the main BigNumbers value is a subset of.
@type number`,type:{name:"number"},required:!1},trending:{defaultValue:{value:"false",computed:!1},description:`Display trending icon.
@type boolean`,type:{name:"bool"},required:!1},truncate:{defaultValue:{value:"true",computed:!1},description:`Specify whether or not the values should be truncated.
@type boolean`,type:{name:"bool"},required:!1},value:{defaultValue:{value:"null",computed:!1},description:`The main BigNumbers value to display
@type number`,type:{name:"number"},required:!1},className:{description:`Optional class name.
@type number`,type:{name:"string"},required:!1},iconButton:{description:`Displays an iconButton next to the BigNumbers value
@type node`,type:{name:"node"},required:!1},label:{description:`Text label for BigNumbers.
@type string`,type:{name:"string"},required:!0},tooltipDescription:{description:`Label applied to a Tooltip - marked with the Information icon.
@type string`,type:{name:"string"},required:!1}}};function I(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...X(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"bignumbers",children:"BigNumbers"}),`
`,e.jsx(t.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(t.p,{children:[`BigNumbers is used to display large values in a small area. The display of
values can be the value itself, or grouped in a numerator / denominator fashion.
Control over the total fraction decimals displayed as well as how the
values/totals are displayed are done via a locale prop. Other optional props
allow control over size, truncation, if the value is a percentage, the addition
of a button as well as tool tip functionality. The default locale is English
(`,e.jsx(t.code,{children:"en-US"}),") if one is not provided or if the provided one is not supported."]}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#locales",rel:"nofollow",children:"Supported locales"})}),`
`,e.jsx(t.h2,{id:"example-usage",children:"Example usage"}),`
`,`
`,e.jsx(t.h3,{id:"big-numbers",children:"Big numbers"}),`
`,e.jsx(C,{children:e.jsx(k,{of:l})}),`
`,e.jsx(t.h3,{id:"big-numbers-with-edit-button",children:"Big numbers with edit button"}),`
`,e.jsx(C,{children:e.jsx(k,{of:p})}),`
`,e.jsx(t.h2,{id:"code-sample",children:"Code sample"}),`
`,`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(ne,{})]})}function ue(o={}){const{wrapper:t}={...X(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(I,{...o})}):I(o)}const pe="",u={"-123":-123,"0 ":0,"12 ":12,"345 ":345,"6789 ":6789,"12345.678 ":12345.678,"678901.2456 ":678901.2456,"2345678 ":2345678,"90123456 ":90123456,"789012345 ":789012345,"6789012345 ":6789012345,"null ":null,"undefined ":void 0},Ee={title:"IBM Products/Components/Big numbers/BigNumbers",component:i,tags:["autodocs"],argTypes:{loading:{options:[!0,!1],control:{type:"boolean"}},value:{control:{type:"select",labels:Object.keys(u)},options:Object.values(u).map((o,t)=>t),mapping:Object.values(u)},total:{control:{type:"select",labels:Object.keys(u)},options:Object.values(u).map((o,t)=>t),mapping:Object.values(u)},size:{options:Object.values(r),control:{type:"radio"}},percentage:{options:[!0,!1],control:{type:"boolean"}},forceShowTotal:{options:[!0,!1],control:{type:"boolean"}},trending:{options:[!0,!1],control:{type:"boolean"}},truncate:{options:[!0,!1],control:{type:"boolean"}},locale:{options:["bg","cs","da-DK","de-CH","de","en-AU","en-GB","en-US","en-ZA","es-ES","es","et","fi","fr-CA","fr-CH","fr","hu","it","ja","lv","nl-BE","nl-NL","no","pl","pt-BR","pt-PT","ru-UA","ru","sk","sl","th","tr","uk-UA","vi"],control:{type:"select"}},iconButton:{control:{type:null}}},parameters:{styles:pe,docs:{page:ue}}},J={label:"Label",value:12345.678,total:678901.2456,percentage:!1,size:r.Default,forceShowTotal:!1,trending:!1,truncate:!0,locale:"en-US"},K=o=>e.jsx(i,{...o}),l=K.bind({});l.args={...J};const p=K.bind({});p.args={...J,tooltipDescription:"Tooltip description",iconButton:e.jsx(oe,{renderIcon:le,iconDescription:"Icon Description",kind:"ghost",size:"sm",hasIconOnly:!0,onClick:()=>console.log("clicked icon"),tooltipPosition:"bottom"})};var z,E,U,V,P;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  return <BigNumbers
  // TODO: handle events with action or local handler.
  // onTodo={action('onTodo log action')}
  {...args} />;
}`,...(U=(E=l.parameters)==null?void 0:E.docs)==null?void 0:U.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(P=(V=l.parameters)==null?void 0:V.docs)==null?void 0:P.description}}};var F,A,R;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
  return <BigNumbers
  // TODO: handle events with action or local handler.
  // onTodo={action('onTodo log action')}
  {...args} />;
}`,...(R=(A=p.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};const Ue=["bigNumbers","withEditButton"];export{Ue as __namedExportsOrder,l as bigNumbers,Ee as default,p as withEditButton};
