import{e as a}from"./index-CPiZ6Cnx.js";import{c as b,P as n}from"./index-CXyjPnaX.js";import{p as w,T as te,B as oe}from"./settings-DkGFwmHv.js";import{aw as t,al as k,ax as C,ak as ae}from"./index-z3zJDXtl.js";import{useMDXComponents as M}from"./index-CUO_02de.js";import"./chunk-NUUEMKO5-CVm38ugG.js";import{g as N}from"./devtools-BgfuqBVa.js";import{S as $}from"./SkeletonText-B30TI_EU.js";import{T as ne}from"./TooltipTrigger-CA2_KrNG.js";import{e as re}from"./bucket-9-BSWQ2dSd.js";import{c as le}from"./bucket-0-DUfmGMOu.js";import{a as se}from"./bucket-6-BQYdmIZX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BSHYryQu.js";import"./index-Bsyy8W_U.js";import"./events-OVwOsPzJ.js";import"./index-DJK44odq.js";import"./iframe-BAt2XFX8.js";import"../sb-preview/runtime.js";import"./index-Df9so8jS.js";import"./index-DMCuvgYY.js";import"./index-DrFu-skq.js";import"./react-18-C6q_qjn2.js";const l={Default:"default",Large:"lg",XLarge:"xl"},L={Dash:"–",Slash:"/"},G="en-US",q=(o,e,u,m)=>e==null||typeof e!="number"?null:m?Intl.NumberFormat(o,{notation:"compact",minimumFractionDigits:0,maximumFractionDigits:Math.round(u)}).format(e):Intl.NumberFormat(o).format(e),ie=o=>{switch(o){case l.Large:return 20;case l.XLarge:return 24;default:return 16}},ce=o=>Intl.NumberFormat.supportedLocalesOf(o).length>0?o:G,r=`${w.prefix}--big-numbers`,f=`${w.prefix}--big-numbers-skeleton`,g="BigNumbers",s={forceShowTotal:!1,fractionDigits:1,loading:!1,locale:G,percentage:!1,size:l.Default,total:0,trending:!1,truncate:!0,value:null};let c=a.forwardRef(({className:o,forceShowTotal:e=s.forceShowTotal,fractionDigits:u=s.fractionDigits,iconButton:m,loading:v=s.loading,label:W,locale:Z=s.locale,percentage:j=s.percentage,size:h=s.size,tooltipDescription:T,total:y=s.total,trending:Q=s.trending,truncate:B=s.truncate,value:_=s.value,...E},S)=>{const Y=b(o,{[`${r}--lg`]:h===l.Large,[`${r}--xl`]:h===l.XLarge}),D=ce(Z),x=q(D,_,u,B)??L.Dash,O=q(D,y,u,B)??"Unknown",ee=!j&&y>_&&x!==O||e&&y>0;return v?a.createElement(H,{...E,ref:S,className:o,size:h,...N(g)}):a.createElement("div",{...E,className:b(r,Y,o),ref:S,...N(g)},a.createElement("span",{className:`${r}__row`},a.createElement("h4",{className:`${r}__label`},W),T&&a.createElement(te,{description:T,align:"right",className:`${r}__info`},a.createElement(ne,{className:`${r}__tooltip-trigger`},a.createElement(re,{size:16})))),a.createElement("span",{className:`${r}__row`,role:"math"},Q&&a.createElement(le,{className:`${r}__trend`,size:ie(h)}),a.createElement("span",{className:`${r}__value`},j?a.createElement("div",{className:`${r}__percentage`},x,a.createElement("span",{className:`${r}__percentage-mark`},"%")):x),ee&&a.createElement("span",{className:`${r}__total`},a.createElement("span",null,L.Slash,O)),m))});c=w.checkComponentEnabled(c,g);c.displayName=g;c.propTypes={className:n.string,forceShowTotal:n.bool,fractionDigits:n.number,iconButton:n.node,label:n.string.isRequired,loading:n.bool,locale:n.string,percentage:n.bool,size:n.oneOf(Object.values(l)),tooltipDescription:n.string,total:n.number,trending:n.bool,truncate:n.bool,value:n.number};let H=a.forwardRef(({className:o,size:e,...u},m)=>{const v=b(o,{[`${f}--lg`]:e===l.Large,[`${f}--xl`]:e===l.XLarge});return a.createElement("div",{...u,className:b(o,f,v),ref:m,...N(g)},a.createElement($,{className:`${f}__label`}),a.createElement($,{heading:!0,className:`${f}__value`,width:"80%"}))});H.propTypes={className:n.string,size:n.oneOf(Object.values(l))};c.__docgenInfo={description:`BigNumbers is used to display large values in a small area. The display of
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
@type string`,type:{name:"string"},required:!1}}};function I(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...M(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"bignumbers",children:"BigNumbers"}),`
`,t.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#overview",children:"Overview"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#example-usage",children:"Example usage"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,t.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,t.jsxs(e.p,{children:[`BigNumbers is used to display large values in a small area. The display of
values can be the value itself, or grouped in a numerator / denominator fashion.
Control over the total fraction decimals displayed as well as how the
values/totals are displayed are done via a locale prop. Other optional props
allow control over size, truncation, if the value is a percentage, the addition
of a button as well as tool tip functionality. The default locale is English
(`,t.jsx(e.code,{children:"en-US"}),") if one is not provided or if the provided one is not supported."]}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#locales",rel:"nofollow",children:"Supported locales"})}),`
`,t.jsx(e.h2,{id:"example-usage",children:"Example usage"}),`
`,`
`,t.jsx(e.h3,{id:"big-numbers",children:"Big numbers"}),`
`,t.jsx(k,{children:t.jsx(C,{of:i})}),`
`,t.jsx(e.h3,{id:"big-numbers-with-edit-button",children:"Big numbers with edit button"}),`
`,t.jsx(k,{children:t.jsx(C,{of:d})}),`
`,t.jsx(e.h2,{id:"code-sample",children:"Code sample"}),`
`,`
`,t.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,t.jsx(ae,{})]})}function ue(o={}){const{wrapper:e}={...M(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(I,{...o})}):I(o)}const pe="",p={"-123":-123,"0 ":0,"12 ":12,"345 ":345,"6789 ":6789,"12345.678 ":12345.678,"678901.2456 ":678901.2456,"2345678 ":2345678,"90123456 ":90123456,"789012345 ":789012345,"6789012345 ":6789012345,"null ":null,"undefined ":void 0},qe={title:"Experimental/Components/Big numbers/BigNumbers",component:c,tags:["autodocs"],argTypes:{loading:{options:[!0,!1],control:{type:"boolean"}},value:{control:{type:"select",labels:Object.keys(p)},options:Object.values(p).map((o,e)=>e),mapping:Object.values(p)},total:{control:{type:"select",labels:Object.keys(p)},options:Object.values(p).map((o,e)=>e),mapping:Object.values(p)},size:{options:Object.values(l),control:{type:"radio"}},percentage:{options:[!0,!1],control:{type:"boolean"}},forceShowTotal:{options:[!0,!1],control:{type:"boolean"}},trending:{options:[!0,!1],control:{type:"boolean"}},truncate:{options:[!0,!1],control:{type:"boolean"}},locale:{options:["bg","cs","da-DK","de-CH","de","en-AU","en-GB","en-US","en-ZA","es-ES","es","et","fi","fr-CA","fr-CH","fr","hu","it","ja","lv","nl-BE","nl-NL","no","pl","pt-BR","pt-PT","ru-UA","ru","sk","sl","th","tr","uk-UA","vi"],control:{type:"select"}},iconButton:{control:{type:null}}},parameters:{styles:pe,docs:{page:ue}}},J={label:"Label",value:12345.678,total:678901.2456,percentage:!1,size:l.Default,forceShowTotal:!1,trending:!1,truncate:!0,locale:"en-US"},K=o=>a.createElement(c,{...o}),i=K.bind({});i.args={...J};const d=K.bind({});d.args={...J,tooltipDescription:"Tooltip description",iconButton:a.createElement(oe,{renderIcon:se,iconDescription:"Icon Description",kind:"ghost",size:"sm",hasIconOnly:!0,onClick:()=>console.log("clicked icon"),tooltipPosition:"bottom"})};var z,U,V,F,P;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  return <BigNumbers
  // TODO: handle events with action or local handler.
  // onTodo={action('onTodo log action')}
  {...args} />;
}`,...(V=(U=i.parameters)==null?void 0:U.docs)==null?void 0:V.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(P=(F=i.parameters)==null?void 0:F.docs)==null?void 0:P.description}}};var A,X,R;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`args => {
  return <BigNumbers
  // TODO: handle events with action or local handler.
  // onTodo={action('onTodo log action')}
  {...args} />;
}`,...(R=(X=d.parameters)==null?void 0:X.docs)==null?void 0:R.source}}};const Ie=["bigNumbers","withEditButton"];export{Ie as __namedExportsOrder,i as bigNumbers,qe as default,d as withEditButton};
