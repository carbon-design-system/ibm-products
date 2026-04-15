var p=Object.defineProperty;var r=(n,e)=>p(n,"name",{value:e,configurable:!0});import{j as t,aD as u,aF as h,aE as x,e as o}from"./iframe-DgruYanb.js";import{useMDXComponents as d}from"./index-CUlNcuo1.js";import{A as g}from"./index-DHtLXazq.js";import{D as s}from"./DecoratorSingleButton-DwWle1Jp.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-11-FRviP7FM.js";import"./bucket-20-DHjQwcsG.js";import"./devtools-CW8YVWZC.js";import"./props-helper-BEn8ZzZM.js";import"./DecoratorBase-BK0EICLQ.js";import"./bucket-2-DjMc9QmT.js";import"./bucket-5-O06x8pPr.js";import"./bucket-17-Cm4ex8DU.js";function i(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"decoratorsinglebutton",children:"DecoratorSingleButton"}),`
`,t.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#overview",children:"Overview"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#example-usage",children:"Example usage"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#example-setlabeltitle",children:"Example setLabelTitle()"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,t.jsx(e.h2,{id:"deprecation-notice",children:"Deprecation notice"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"This component is deprecated and will be removed in the next major version."}),`
`]}),`
`,t.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,t.jsx(e.p,{children:`The DecoratorSingleButton groups a key/value pair to look and behave like a
single button.`}),`
`,t.jsx(e.h2,{id:"example-usage",children:"Example usage"}),`
`,t.jsx(u,{children:t.jsx(h,{of:a})}),`
`,t.jsxs(e.h2,{id:"example-setlabeltitle",children:["Example ",t.jsx(e.strong,{children:"setLabelTitle()"})]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`setLabelTitle: (score, scoreThresholds, magnitude) => {
  if (typeof score !== 'number') {
    return 'Unknown score';
  }
  return \`"\${magnitude}" magnitude. Score \${score} out of \${
    scoreThresholds[scoreThresholds.length - 1]
  }\`;
},
`})}),`
`,t.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,t.jsx(x,{})]})}r(i,"_createMdxContent");function j(n={}){const{wrapper:e}={...d(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(i,{...n})}):i(n)}r(j,"MDXContent");const v="",{action:c}=__STORYBOOK_MODULE_ACTIONS__,l={"-1 (less than 0 is 0)":-1,"0 ":0,"1 ":1,"2 ":2,"3 ":3,"4 ":4,"5 ":5,"6 ":6,"7 ":7,"8 ":8,"9 ":9,"10 ":10,"11 (greater than 10 is 10)":11,'NaN; treated as "Unknown"':null},N={title:"Deprecated/Decorators/DecoratorSingleButton",component:s,tags:["autodocs"],parameters:{styles:v,docs:{page:j}},argTypes:{kind:{table:{disable:!0}},className:{control:{type:{}}},onClick:{control:{type:{}}},onContextMenu:{control:{type:{}}},setLabelTitle:{control:{type:{}}},score:{control:{type:"select",labels:Object.keys(l)},mapping:Object.values(l),options:Object.values(l).map((n,e)=>e)},theme:{control:{type:"select",labels:["use default","light","dark"]},mapping:{0:null,1:"light",2:"dark"},options:[0,1,2]},truncateValue:{control:{type:"select",labels:{0:"No truncation",1:'"end"',2:'"start"',3:"{ maxLength:20, front:9, back:10 }"}},mapping:{0:void 0,1:"end",2:"start",3:{maxLength:20,front:9,back:10}},options:[0,1,2,3]}},args:{theme:0,truncateValue:0},decorators:[n=>o.createElement(g,{type:"deprecation-notice",text:o.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},n())]},b=r(n=>n.truncateValue?o.createElement(o.Fragment,null,o.createElement("div",{style:{padding:"0 0 1rem"}},"With limited width."),o.createElement("div",{style:{maxWidth:"16rem",padding:"3px",outline:"2px dashed #999"}},o.createElement(s,{...n,value:"Very long value to show truncation"}))):o.createElement(o.Fragment,null,o.createElement(s,{...n})),"Template"),a=b.bind({});a.storyName="DecoratorSingleButton";a.args={disabled:!1,hideIcon:!1,label:"IP",onClick:r((n,e)=>c("onClick")(e),"onClick"),onContextMenu:r((n,e)=>c("onContextMenu")(e),"onContextMenu"),score:5,scoreThresholds:[0,4,7,10],setLabelTitle:r((n,e,m)=>typeof n!="number"?"Unknown score":`"${m}" magnitude. Score ${n} out of ${e[e.length-1]}`,"setLabelTitle"),small:!1,value:"192.168.0.50",valueTitle:""};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  if (args.truncateValue) {
    return <>
        <div style={{
        padding: '0 0 1rem'
      }}>With limited width.</div>
        <div style={{
        maxWidth: '16rem',
        padding: '3px',
        outline: '2px dashed #999'
      }}>
          <DecoratorSingleButton {...args} value="Very long value to show truncation" />
        </div>
      </>;
  }
  return <>
      <DecoratorSingleButton {...args} />
    </>;
}`,...a.parameters?.docs?.source}}};const V=["Default"];export{a as Default,V as __namedExportsOrder,N as default};
//# sourceMappingURL=DecoratorSingleButton.stories-iuZA9thx.js.map
