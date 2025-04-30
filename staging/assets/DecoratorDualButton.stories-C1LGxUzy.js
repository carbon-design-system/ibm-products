import{e as o}from"./index-DzvNrmz8.js";import{a}from"./index-B-lxVbXh.js";import{j as t}from"./index-Cg1swjps.js";import{useMDXComponents as u}from"./index-B7BkHM3Y.js";import"./index-TT84mNRS.js";import{A as h}from"./index-B9fxRmSt.js";import{D as i}from"./DecoratorDualButton-Cj5r8kjs.js";import{a as x,j as g,C as b}from"./index-CwcgRXWl.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./v4-CtRu48qb.js";import"./index-Bv4JGo1_.js";import"./preview-B_jYMs5d.js";import"./iframe-BsXekYnT.js";import"./DocsRenderer-CFRXHY34-Dv3JWg4F.js";import"./client-fwTTGz69.js";import"./index-5As4T26e.js";import"./bucket-10-BLMdRzi0.js";import"./bucket-18-D-cwffHE.js";import"./settings-CP9zVSjJ.js";import"./events-OVwOsPzJ.js";import"./index-P6UCShJt.js";import"./devtools-B_dijMH7.js";import"./props-helper-DCsMHcG1.js";import"./DecoratorBase-7zBiNQX6.js";import"./bucket-2-CdrYWKja.js";import"./bucket-5-CQjaVkio.js";import"./bucket-15-BuGLwsj4.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";function s(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...u(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"decoratordualbutton",children:"DecoratorDualButton"}),`
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
`,t.jsx(e.p,{children:`The DecoratorDualButton groups a key/value pair where the key and value are each
buttons.`}),`
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
`,t.jsx(b,{})]})}function j(n={}){const{wrapper:e}={...u(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(s,{...n})}):s(n)}const v="",l={"-1 (less than 0 is 0)":-1,"0 ":0,"1 ":1,"2 ":2,"3 ":3,"4 ":4,"5 ":5,"6 ":6,"7 ":7,"8 ":8,"9 ":9,"10 ":10,"11 (greater than 10 is 10)":11,'NaN; treated as "Unknown"':null},K={title:"Deprecated/Decorators/DecoratorDualButton",component:i,tags:["autodocs"],parameters:{styles:v,docs:{page:j}},argTypes:{kind:{table:{disable:!0}},className:{control:{type:{}}},onClickLabel:{control:{type:{}}},onClickValue:{control:{type:{}}},onContextMenuLabel:{control:{type:{}}},onContextMenuValue:{control:{type:{}}},setLabelTitle:{control:{type:{}}},score:{control:{type:"select",labels:Object.keys(l)},mapping:Object.values(l),options:Object.values(l).map((n,e)=>e)},theme:{control:{type:"select",labels:["use default","light","dark"]},mapping:{0:null,1:"light",2:"dark"},options:[0,1,2]},truncateValue:{control:{type:"select",labels:{0:"No truncation",1:'"end"',2:'"start"',3:"{ maxLength:20, front:9, back:10 }"}},mapping:{0:void 0,1:"end",2:"start",3:{maxLength:20,front:9,back:10}},options:[0,1,2,3]}},args:{theme:0,truncateValue:0},decorators:[n=>o.createElement(h,{type:"deprecation-notice",text:o.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},n())]},f=n=>n.truncateValue?o.createElement(o.Fragment,null,o.createElement("div",{style:{padding:"0 0 1rem"}},"With limited width."),o.createElement("div",{style:{maxWidth:"16rem",padding:"3px",outline:"2px dashed #999"}},o.createElement(i,{...n,value:"Very long value to show truncation"}))):o.createElement(i,{...n}),r=f.bind({});r.storyName="DecoratorDualButton";r.args={disabled:!1,hideIcon:!1,label:"IP",onClickLabel:(n,e)=>a("onClickLabel")(e),onClickValue:(n,e)=>a("onClickValue")(e),onContextMenuLabel:(n,e)=>a("onContextMenuLabel")(e),onContextMenuValue:(n,e)=>a("onContextMenuValue")(e),score:5,scoreThresholds:[0,4,7,10],setLabelTitle:(n,e,m)=>typeof n!="number"?"Unknown score":`"${m}" magnitude. Score ${n} out of ${e[e.length-1]}`,small:!1,value:"192.168.0.50",valueTitle:""};var c,d,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
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
          <DecoratorDualButton {...args} value="Very long value to show truncation" />
        </div>
      </>;
  }
  return <DecoratorDualButton {...args} />;
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const Q=["Default"];export{r as Default,Q as __namedExportsOrder,K as default};
