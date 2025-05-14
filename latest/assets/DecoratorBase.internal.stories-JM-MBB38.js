import{e as r}from"./index-DtHxqM--.js";import{a}from"./index-B-lxVbXh.js";import{j as t}from"./index-DgLvjnYm.js";import{useMDXComponents as p}from"./index-CseD6FCQ.js";import"./index-Bq0jCRb-.js";import{D as s}from"./DecoratorBase-dTshfDMv.js";import{a as h,j as x,C as g}from"./index-BridxrSo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CtRu48qb.js";import"./index-CiYgQLeJ.js";import"./preview-DZaLbi38.js";import"./iframe-CjQaoex9.js";import"./DocsRenderer-CFRXHY34-LUAN-qqw.js";import"./client-CZTHzaKS.js";import"./index-CMVdkQrl.js";import"./settings-C3kz8lqM.js";import"./events-OVwOsPzJ.js";import"./index-BLvAv8yb.js";import"./devtools-CJD9WatR.js";import"./bucket-2-D0m0gcwr.js";import"./bucket-5-BJPJ9WD6.js";import"./bucket-15-DPFZzV9q.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";function i(n){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...p(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"decoratorbase",children:"DecoratorBase"}),`
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
`,t.jsx(h,{children:t.jsx(x,{of:o})}),`
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
`,t.jsx(g,{})]})}function f(n={}){const{wrapper:e}={...p(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(i,{...n})}):i(n)}const j="",l={"-1 (less than 0 is 0)":-1,"0 ":0,"1 ":1,"2 ":2,"3 ":3,"4 ":4,"5 ":5,"6 ":6,"7 ":7,"8 ":8,"9 ":9,"10 ":10,"11 (greater than 10 is 10)":11,'NaN; treated as "Unknown"':null},R={title:"IBM Products/Internal/DecoratorBase",component:s,tags:["autodocs"],parameters:{styles:j,docs:{page:f}},argTypes:{kind:{table:{disable:!0}},className:{control:{type:{}}},onClickLabel:{control:{type:{}}},onClickValue:{control:{type:{}}},onContextMenuLabel:{control:{type:{}}},onContextMenuValue:{control:{type:{}}},setLabelTitle:{control:{type:{}}},score:{control:{type:"select",labels:Object.keys(l)},mapping:Object.values(l),options:Object.values(l).map((n,e)=>e)},theme:{control:{type:"select",labels:["use default","light","dark"]},mapping:{0:null,1:"light",2:"dark"},options:[0,1,2]},truncateValue:{control:{type:"select",labels:{0:"No truncation",1:'"end"',2:'"start"',3:"{ maxLength:20, front:9, back:10 }"}},mapping:{0:void 0,1:"end",2:"start",3:{maxLength:20,front:9,back:10}},options:[0,1,2,3]}},args:{theme:0,truncateValue:0}},b=n=>n.truncateValue?r.createElement(r.Fragment,null,r.createElement("div",{style:{padding:"0 0 1rem"}},"With limited width."),r.createElement("div",{style:{maxWidth:"16rem",padding:"3px",outline:"2px dashed #999"}},r.createElement(s,{...n,value:"Very long value to show truncation"}))):r.createElement(s,{...n}),o=b.bind({});o.storyName="DecoratorBase";o.args={disabled:!1,kind:"default",hideIcon:!1,label:"IP",onClickLabel:(n,e)=>a("onClickLabel")(e),onClickValue:(n,e)=>a("onClickValue")(e),onContextMenuLabel:(n,e)=>a("onContextMenuLabel")(e),onContextMenuValue:(n,e)=>a("onContextMenuValue")(e),score:5,scoreThresholds:[0,4,7,10],setLabelTitle:(n,e,u)=>typeof n!="number"?"Unknown score":`"${u}" magnitude. Score ${n} out of ${e[e.length-1]}`,small:!1,value:"192.168.0.50",valueTitle:""};var c,d,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
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
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const q=["Default"];export{o as Default,q as __namedExportsOrder,R as default};
