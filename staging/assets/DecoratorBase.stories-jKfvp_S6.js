import{j as t}from"./settings-BiUEFdm2.js";import{a as r}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{useMDXComponents as p}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-CsZ1lTTC.js";import{e as u,i as h,C as x}from"./index-CDYzkStP.js";import{D as s}from"./DecoratorBase-VVVhgTEi.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-Dk74W0Oi.js";import"./deprecate-D9ms-jbM.js";import"./events-Bq7WR1mU.js";import"./index-BONylQH5.js";import"./v4-CQkTLCs1.js";import"./iframe-j3s5A4v9.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-BjQFKvNH.js";import"./isSymbol-BZYRlrjc.js";import"./index-DrFu-skq.js";import"./devtools-BPcQvzXy.js";import"./bucket-1-Bggqt_K0.js";import"./bucket-4-CfqsrDTc.js";import"./bucket-14-u3bYiptr.js";function l(n){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...p(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"decoratorbase",children:"DecoratorBase"}),`
`,t.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#overview",children:"Overview"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#example-usage",children:"Example usage"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#example-setlabeltitle",children:"Example setLabelTitle()"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,t.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,t.jsx(e.p,{children:t.jsx(e.em,{children:t.jsx(e.strong,{children:`The DecoratorBase is for internal use only and is used to build the other
Decorator types.`})})}),`
`,t.jsx(e.h2,{id:"example-usage",children:"Example usage"}),`
`,t.jsx(u,{children:t.jsx(h,{of:o})}),`
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
`,t.jsx(x,{})]})}function g(n={}){const{wrapper:e}={...p(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(l,{...n})}):l(n)}const j="",a={"-1 (less than 0 is 0)":-1,"0 ":0,"1 ":1,"2 ":2,"3 ":3,"4 ":4,"5 ":5,"6 ":6,"7 ":7,"8 ":8,"9 ":9,"10 ":10,"11 (greater than 10 is 10)":11,'NaN; treated as "Unknown"':null},q={title:"IBM Products/Internal/DecoratorBase",component:s,tags:["autodocs"],parameters:{styles:j,docs:{page:g}},argTypes:{kind:{table:{disable:!0}},className:{control:{type:{}}},onClickLabel:{control:{type:{}}},onClickValue:{control:{type:{}}},onContextMenuLabel:{control:{type:{}}},onContextMenuValue:{control:{type:{}}},setLabelTitle:{control:{type:{}}},score:{control:{type:"select",labels:Object.keys(a)},mapping:Object.values(a),options:Object.values(a).map((n,e)=>e)},theme:{control:{type:"select",labels:["use default","light","dark"]},mapping:{0:null,1:"light",2:"dark"},options:[0,1,2]},truncateValue:{control:{type:"select",labels:{0:"No truncation",1:'"end"',2:'"start"',3:"{ maxLength:20, front:9, back:10 }"}},mapping:{0:void 0,1:"end",2:"start",3:{maxLength:20,front:9,back:10}},options:[0,1,2,3]}},args:{theme:0,truncateValue:0}},f=n=>n.truncateValue?t.jsxs(t.Fragment,{children:[t.jsx("div",{style:{padding:"0 0 1rem"},children:"With limited width."}),t.jsx("div",{style:{maxWidth:"16rem",padding:"3px",outline:"2px dashed #999"},children:t.jsx(s,{...n,value:"Very long value to show truncation"})})]}):t.jsx(s,{...n}),o=f.bind({});o.storyName="DecoratorBase";o.args={disabled:!1,kind:"default",hideIcon:!1,label:"IP",onClickLabel:(n,e)=>r("onClickLabel")(e),onClickValue:(n,e)=>r("onClickValue")(e),onContextMenuLabel:(n,e)=>r("onContextMenuLabel")(e),onContextMenuValue:(n,e)=>r("onContextMenuValue")(e),score:5,scoreThresholds:[0,4,7,10],setLabelTitle:(n,e,m)=>typeof n!="number"?"Unknown score":`"${m}" magnitude. Score ${n} out of ${e[e.length-1]}`,small:!1,value:"192.168.0.50",valueTitle:""};var i,c,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
          <DecoratorBase {...args} value="Very long value to show truncation" />
        </div>
      </>;
  }
  return <DecoratorBase {...args} />;
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const z=["Default"];export{o as Default,z as __namedExportsOrder,q as default};
