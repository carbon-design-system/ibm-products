import{e as r}from"./index-DtHxqM--.js";import{a as l}from"./index-B-lxVbXh.js";import{j as t}from"./index-DgLvjnYm.js";import{useMDXComponents as p}from"./index-CseD6FCQ.js";import"./index-R5I2sGCW.js";import{A as u}from"./index-CHR6uWaP.js";import{D as i}from"./DecoratorLink-BNAgy4A3.js";import{a as x,j as g,C as j}from"./index-HDDpa7CF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CtRu48qb.js";import"./index-CiYgQLeJ.js";import"./preview-BDYrD1iz.js";import"./iframe-C04Vc2cR.js";import"./DocsRenderer-CFRXHY34-BeCith_b.js";import"./client-CZTHzaKS.js";import"./index-CGLP8AGt.js";import"./bucket-10-DVt4Ot_f.js";import"./bucket-18-OZh5kibs.js";import"./settings-xxMXFJdE.js";import"./events-OVwOsPzJ.js";import"./index-BeQw6zoj.js";import"./devtools-DANatd7d.js";import"./props-helper-CgskTpCX.js";import"./DecoratorBase-Df87P6XI.js";import"./bucket-2-6VDW4ZdD.js";import"./bucket-5-BhaNt9ND.js";import"./bucket-15-BkQJIuEn.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";function s(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...p(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"decoratorlink",children:"DecoratorLink"}),`
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
`,t.jsx(e.p,{children:"The DecoratorLink groups a key/value pair to look and behave like a single link."}),`
`,t.jsx(e.h2,{id:"example-usage",children:"Example usage"}),`
`,t.jsx(x,{children:t.jsx(g,{of:o})}),`
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
`,t.jsx(j,{})]})}function b(n={}){const{wrapper:e}={...p(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(s,{...n})}):s(n)}const f="",a={"-1 (less than 0 is 0)":-1,"0 ":0,"1 ":1,"2 ":2,"3 ":3,"4 ":4,"5 ":5,"6 ":6,"7 ":7,"8 ":8,"9 ":9,"10 ":10,"11 (greater than 10 is 10)":11,'NaN; treated as "Unknown"':null},K={title:"Deprecated/Decorators/DecoratorLink",component:i,tags:["autodocs"],parameters:{styles:f,docs:{page:b}},argTypes:{kind:{table:{disable:!0}},target:{table:{disable:!0}},className:{control:{type:{}}},onClick:{control:{type:{}}},onContextMenu:{control:{type:{}}},setLabelTitle:{control:{type:{}}},score:{control:{type:"select",labels:Object.keys(a)},mapping:Object.values(a),options:Object.values(a).map((n,e)=>e)},theme:{control:{type:"select",labels:["use default","light","dark"]},mapping:{0:null,1:"light",2:"dark"},options:[0,1,2]},truncateValue:{control:{type:"select",labels:{0:"No truncation",1:'"end"',2:'"start"',3:"{ maxLength:20, front:9, back:10 }"}},mapping:{0:void 0,1:"end",2:"start",3:{maxLength:20,front:9,back:10}},options:[0,1,2,3]}},args:{theme:0,truncateValue:0},decorators:[n=>r.createElement(u,{type:"deprecation-notice",text:r.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},n())]},v=n=>n.truncateValue?r.createElement(r.Fragment,null,r.createElement("div",{style:{padding:"0 0 1rem"}},"With limited width."),r.createElement("div",{style:{maxWidth:"16rem",padding:"3px",outline:"2px dashed #999"}},r.createElement(i,{...n,value:"Very long value to show truncation"}))):r.createElement(i,{...n}),o=v.bind({});o.storyName="DecoratorLink";o.args={hideIcon:!1,href:"http://www.ibm.com",label:"IP",onClick:(n,e)=>l("onClick")(e),onContextMenu:(n,e)=>l("onContextMenu")(e),score:5,scoreThresholds:[0,4,7,10],setLabelTitle:(n,e,h)=>typeof n!="number"?"Unknown score":`"${h}" magnitude. Score ${n} out of ${e[e.length-1]}`,small:!1,value:"192.168.0.50",valueTitle:"",target:"_blank"};var c,m,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
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
          <DecoratorLink {...args} value="Very long value to show truncation" />
        </div>
      </>;
  }
  return <DecoratorLink {...args} />;
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Q=["Default"];export{o as Default,Q as __namedExportsOrder,K as default};
