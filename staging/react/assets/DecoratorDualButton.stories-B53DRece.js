var p=Object.defineProperty;var o=(n,e)=>p(n,"name",{value:e,configurable:!0});import{j as t,aA as m,aC as h,aB as x,e as r}from"./iframe-D7SEW46n.js";import{useMDXComponents as d}from"./index-mjRP7aaa.js";import{A as g}from"./index-0r6Ybb21.js";import{D as i}from"./DecoratorDualButton-NnvtbL-R.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-10-CZYtW2_b.js";import"./bucket-19-CmSPB5ma.js";import"./devtools-1BZM14jD.js";import"./props-helper-OxKO76gf.js";import"./DecoratorBase-BWa9qJfv.js";import"./bucket-2-WRuin4Ws.js";import"./bucket-5-D3dcz00j.js";import"./bucket-16-CiA4SR8i.js";function c(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"decoratordualbutton",children:"DecoratorDualButton"}),`
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
`,t.jsx(m,{children:t.jsx(h,{of:a})}),`
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
`,t.jsx(x,{})]})}o(c,"_createMdxContent");function b(n={}){const{wrapper:e}={...d(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(c,{...n})}):c(n)}o(b,"MDXContent");const j="",{action:l}=__STORYBOOK_MODULE_ACTIONS__,s={"-1 (less than 0 is 0)":-1,"0 ":0,"1 ":1,"2 ":2,"3 ":3,"4 ":4,"5 ":5,"6 ":6,"7 ":7,"8 ":8,"9 ":9,"10 ":10,"11 (greater than 10 is 10)":11,'NaN; treated as "Unknown"':null},N={title:"Deprecated/Decorators/DecoratorDualButton",component:i,tags:["autodocs"],parameters:{styles:j,docs:{page:b}},argTypes:{kind:{table:{disable:!0}},className:{control:{type:{}}},onClickLabel:{control:{type:{}}},onClickValue:{control:{type:{}}},onContextMenuLabel:{control:{type:{}}},onContextMenuValue:{control:{type:{}}},setLabelTitle:{control:{type:{}}},score:{control:{type:"select",labels:Object.keys(s)},mapping:Object.values(s),options:Object.values(s).map((n,e)=>e)},theme:{control:{type:"select",labels:["use default","light","dark"]},mapping:{0:null,1:"light",2:"dark"},options:[0,1,2]},truncateValue:{control:{type:"select",labels:{0:"No truncation",1:'"end"',2:'"start"',3:"{ maxLength:20, front:9, back:10 }"}},mapping:{0:void 0,1:"end",2:"start",3:{maxLength:20,front:9,back:10}},options:[0,1,2,3]}},args:{theme:0,truncateValue:0},decorators:[n=>r.createElement(g,{type:"deprecation-notice",text:r.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},n())]},v=o(n=>n.truncateValue?r.createElement(r.Fragment,null,r.createElement("div",{style:{padding:"0 0 1rem"}},"With limited width."),r.createElement("div",{style:{maxWidth:"16rem",padding:"3px",outline:"2px dashed #999"}},r.createElement(i,{...n,value:"Very long value to show truncation"}))):r.createElement(i,{...n}),"Template"),a=v.bind({});a.storyName="DecoratorDualButton";a.args={disabled:!1,hideIcon:!1,label:"IP",onClickLabel:o((n,e)=>l("onClickLabel")(e),"onClickLabel"),onClickValue:o((n,e)=>l("onClickValue")(e),"onClickValue"),onContextMenuLabel:o((n,e)=>l("onContextMenuLabel")(e),"onContextMenuLabel"),onContextMenuValue:o((n,e)=>l("onContextMenuValue")(e),"onContextMenuValue"),score:5,scoreThresholds:[0,4,7,10],setLabelTitle:o((n,e,u)=>typeof n!="number"?"Unknown score":`"${u}" magnitude. Score ${n} out of ${e[e.length-1]}`,"setLabelTitle"),small:!1,value:"192.168.0.50",valueTitle:""};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
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
}`,...a.parameters?.docs?.source}}};const A=["Default"];export{a as Default,A as __namedExportsOrder,N as default};
//# sourceMappingURL=DecoratorDualButton.stories-B53DRece.js.map
