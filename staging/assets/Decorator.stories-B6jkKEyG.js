import{e as o}from"./index-DtHxqM--.js";import{j as t}from"./index-DgLvjnYm.js";import{useMDXComponents as p}from"./index-CseD6FCQ.js";import"./index-Bq0jCRb-.js";import{D as s}from"./Decorator-DALFu0LZ.js";import{a as u,j as h,C as x}from"./index-BridxrSo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CiYgQLeJ.js";import"./preview-DZaLbi38.js";import"./iframe-CjQaoex9.js";import"./DocsRenderer-CFRXHY34-LUAN-qqw.js";import"./client-CZTHzaKS.js";import"./index-CMVdkQrl.js";import"./devtools-CJD9WatR.js";import"./settings-C3kz8lqM.js";import"./events-OVwOsPzJ.js";import"./index-BLvAv8yb.js";import"./props-helper-3VCN3cvm.js";import"./DecoratorBase-dTshfDMv.js";import"./bucket-2-D0m0gcwr.js";import"./bucket-5-BJPJ9WD6.js";import"./bucket-15-DPFZzV9q.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";function l(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...p(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"decorator",children:"Decorator"}),`
`,t.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#overview",children:"Overview"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#example-usage",children:"Example usage"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#example-setlabeltitle",children:"Example setLabelTitle()"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,t.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,t.jsx(e.p,{children:`The Decorator groups a key/value pair as a single element. This component is not
interactive.`}),`
`,t.jsx(e.h2,{id:"example-usage",children:"Example usage"}),`
`,t.jsx(u,{children:t.jsx(h,{of:n})}),`
`,t.jsxs(e.h2,{id:"example-setlabeltitle",children:["Example ",t.jsx(e.strong,{children:"setLabelTitle()"})]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`<Decorator label="IP" score={5} value="192.168.0.50" />
`})}),`
`,t.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,t.jsx(x,{})]})}function g(r={}){const{wrapper:e}={...p(),...r.components};return e?t.jsx(e,{...r,children:t.jsx(l,{...r})}):l(r)}const j="",a={"-1 (less than 0 is 0)":-1,"0 ":0,"1 ":1,"2 ":2,"3 ":3,"4 ":4,"5 ":5,"6 ":6,"7 ":7,"8 ":8,"9 ":9,"10 ":10,"11 (greater than 10 is 10)":11,'NaN; treated as "Unknown"':null},R={title:"Experimental/Components/Decorators/Decorator",component:s,tags:["autodocs"],parameters:{styles:j,docs:{page:g}},argTypes:{kind:{table:{disable:!0}},className:{control:{type:{}}},setLabelTitle:{control:{type:{}}},score:{control:{type:"select",labels:Object.keys(a)},mapping:Object.values(a),options:Object.values(a).map((r,e)=>e)},theme:{control:{type:"select",labels:["use default","light","dark"]},mapping:{0:null,1:"light",2:"dark"},options:[0,1,2]},truncateValue:{control:{type:"select",labels:{0:"No truncation",1:'"end"',2:'"start"',3:"{ maxLength:20, front:9, back:10 }"}},mapping:{0:void 0,1:"end",2:"start",3:{maxLength:20,front:9,back:10}},options:[0,1,2,3]}},args:{theme:0,truncateValue:0}},f=r=>r.truncateValue?o.createElement(o.Fragment,null,o.createElement("div",{style:{padding:"0 0 1rem"}},"With limited width."),o.createElement("div",{style:{maxWidth:"16rem",padding:"3px",outline:"2px dashed #999"}},o.createElement(s,{...r,value:"Very long value to show truncation"}))):o.createElement(s,{...r}),n=f.bind({});n.storyName="Decorator";n.args={hideIcon:!1,label:"IP",score:5,scoreThresholds:[0,4,7,10],setLabelTitle:(r,e,d)=>typeof r!="number"?"Unknown score":`"${d}" magnitude. Score ${r} out of ${e[e.length-1]}`,small:!1,value:"192.168.0.50",valueTitle:""};var i,c,m;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
          <Decorator {...args} value="Very long value to show truncation" />
        </div>
      </>;
  }
  return <Decorator {...args} />;
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const q=["Default"];export{n as Default,q as __namedExportsOrder,R as default};
