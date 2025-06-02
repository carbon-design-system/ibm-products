import{e as o}from"./index-DtHxqM--.js";import{a as l}from"./index-B-lxVbXh.js";import{j as t}from"./index-DgLvjnYm.js";import{useMDXComponents as p}from"./index-CseD6FCQ.js";import"./index-lMmuxduI.js";import{A as h}from"./index-FZeL_GBE.js";import{D as i}from"./DecoratorSingleButton-Din65QhL.js";import{a as x,j as g,C as j}from"./index-BEF4m_XO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CtRu48qb.js";import"./index-CiYgQLeJ.js";import"./preview-jePjwBR5.js";import"./iframe-Dt20USK0.js";import"./DocsRenderer-CFRXHY34-C0lv72g2.js";import"./client-CZTHzaKS.js";import"./index-Ccw_5OKp.js";import"./bucket-10-D5QqA8rU.js";import"./bucket-18-CKSgrqVQ.js";import"./settings-JuRwpTYJ.js";import"./events-OVwOsPzJ.js";import"./index-DxWVrnnv.js";import"./devtools-DSwQefcu.js";import"./props-helper-mI8EhIiv.js";import"./DecoratorBase-Ck8i-23S.js";import"./bucket-2-BROwSLLy.js";import"./bucket-5-rJc-1NLr.js";import"./bucket-15-CM0uxXPN.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";function s(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...p(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"decoratorsinglebutton",children:"DecoratorSingleButton"}),`
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
`,t.jsx(x,{children:t.jsx(g,{of:r})}),`
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
`,t.jsx(j,{})]})}function f(n={}){const{wrapper:e}={...p(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(s,{...n})}):s(n)}const v="",a={"-1 (less than 0 is 0)":-1,"0 ":0,"1 ":1,"2 ":2,"3 ":3,"4 ":4,"5 ":5,"6 ":6,"7 ":7,"8 ":8,"9 ":9,"10 ":10,"11 (greater than 10 is 10)":11,'NaN; treated as "Unknown"':null},K={title:"Deprecated/Decorators/DecoratorSingleButton",component:i,tags:["autodocs"],parameters:{styles:v,docs:{page:f}},argTypes:{kind:{table:{disable:!0}},className:{control:{type:{}}},onClick:{control:{type:{}}},onContextMenu:{control:{type:{}}},setLabelTitle:{control:{type:{}}},score:{control:{type:"select",labels:Object.keys(a)},mapping:Object.values(a),options:Object.values(a).map((n,e)=>e)},theme:{control:{type:"select",labels:["use default","light","dark"]},mapping:{0:null,1:"light",2:"dark"},options:[0,1,2]},truncateValue:{control:{type:"select",labels:{0:"No truncation",1:'"end"',2:'"start"',3:"{ maxLength:20, front:9, back:10 }"}},mapping:{0:void 0,1:"end",2:"start",3:{maxLength:20,front:9,back:10}},options:[0,1,2,3]}},args:{theme:0,truncateValue:0},decorators:[n=>o.createElement(h,{type:"deprecation-notice",text:o.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},n())]},b=n=>n.truncateValue?o.createElement(o.Fragment,null,o.createElement("div",{style:{padding:"0 0 1rem"}},"With limited width."),o.createElement("div",{style:{maxWidth:"16rem",padding:"3px",outline:"2px dashed #999"}},o.createElement(i,{...n,value:"Very long value to show truncation"}))):o.createElement(o.Fragment,null,o.createElement(i,{...n})),r=b.bind({});r.storyName="DecoratorSingleButton";r.args={disabled:!1,hideIcon:!1,label:"IP",onClick:(n,e)=>l("onClick")(e),onContextMenu:(n,e)=>l("onContextMenu")(e),score:5,scoreThresholds:[0,4,7,10],setLabelTitle:(n,e,u)=>typeof n!="number"?"Unknown score":`"${u}" magnitude. Score ${n} out of ${e[e.length-1]}`,small:!1,value:"192.168.0.50",valueTitle:""};var c,m,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
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
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Q=["Default"];export{r as Default,Q as __namedExportsOrder,K as default};
