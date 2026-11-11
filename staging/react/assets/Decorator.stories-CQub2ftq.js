var p=Object.defineProperty;var o=(n,e)=>p(n,"name",{value:e,configurable:!0});import{u as c,j as t,aO as m,aR as u,aS as h,R as r}from"./iframe-CmZeheT6.js";import{A as x}from"./index-B_DVOlna.js";import{D as s}from"./Decorator-CCh0eAj9.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-11-CB-8MoXe.js";import"./bucket-21-KTYeptVo.js";import"./devtools-B-HeQd45.js";import"./props-helper-ByZt1ChO.js";import"./DecoratorBase-DBPDfRFG.js";import"./bucket-2-BRiQQ9US.js";import"./bucket-5-D4BuUgs-.js";import"./bucket-18-BgC2P19b.js";function i(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"decorator",children:"Decorator"}),`
`,t.jsx(e.h2,{id:"deprecation-notice",children:"Deprecation notice"}),`
`,t.jsx(e.p,{children:`This component is deprecated and will be removed in the next major version. This
component has no known production adoption and will not be migrating to Carbon
core.`}),`
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
`,t.jsx(m,{children:t.jsx(u,{of:a})}),`
`,t.jsxs(e.h2,{id:"example-setlabeltitle",children:["Example ",t.jsx(e.strong,{children:"setLabelTitle()"})]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`<Decorator label="IP" score={5} value="192.168.0.50" />
`})}),`
`,t.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,t.jsx(h,{})]})}o(i,"_createMdxContent");function g(n={}){const{wrapper:e}={...c(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(i,{...n})}):i(n)}o(g,"MDXContent");const j="",l={"-1 (less than 0 is 0)":-1,"0 ":0,"1 ":1,"2 ":2,"3 ":3,"4 ":4,"5 ":5,"6 ":6,"7 ":7,"8 ":8,"9 ":9,"10 ":10,"11 (greater than 10 is 10)":11,'NaN; treated as "Unknown"':null},_={title:"Deprecated/Decorator",component:s,tags:["autodocs"],parameters:{styles:j,docs:{page:g}},decorators:[n=>r.createElement(x,{type:"deprecation-notice",text:r.createElement("div",null,r.createElement("strong",null,"Decorator")," is deprecated and will be removed in a future major release. This component has no known production adoption and will not be migrating to Carbon core.")},n())],argTypes:{kind:{table:{disable:!0}},className:{control:{type:{}}},setLabelTitle:{control:{type:{}}},score:{control:{type:"select",labels:Object.keys(l)},mapping:Object.values(l),options:Object.values(l).map((n,e)=>e)},theme:{control:{type:"select",labels:["use default","light","dark"]},mapping:{0:null,1:"light",2:"dark"},options:[0,1,2]},truncateValue:{control:{type:"select",labels:{0:"No truncation",1:'"end"',2:'"start"',3:"{ maxLength:20, front:9, back:10 }"}},mapping:{0:void 0,1:"end",2:"start",3:{maxLength:20,front:9,back:10}},options:[0,1,2,3]}},args:{theme:0,truncateValue:0}},v=o(n=>n.truncateValue?r.createElement(r.Fragment,null,r.createElement("div",{style:{padding:"0 0 1rem"}},"With limited width."),r.createElement("div",{style:{maxWidth:"16rem",padding:"3px",outline:"2px dashed #999"}},r.createElement(s,{...n,value:"Very long value to show truncation"}))):r.createElement(s,{...n}),"Template"),a=v.bind({});a.storyName="Decorator";a.args={hideIcon:!1,label:"IP",score:5,scoreThresholds:[0,4,7,10],setLabelTitle:o((n,e,d)=>typeof n!="number"?"Unknown score":`"${d}" magnitude. Score ${n} out of ${e[e.length-1]}`,"setLabelTitle"),small:!1,value:"192.168.0.50",valueTitle:""};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
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
}`,...a.parameters?.docs?.source}}};const I=["Default"];export{a as Default,I as __namedExportsOrder,_ as default};
//# sourceMappingURL=Decorator.stories-CQub2ftq.js.map
