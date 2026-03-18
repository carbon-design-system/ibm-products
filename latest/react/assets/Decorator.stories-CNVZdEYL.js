var p=Object.defineProperty;var o=(n,e)=>p(n,"name",{value:e,configurable:!0});import{j as t,aA as m,aC as u,aB as h,e as a}from"./iframe-DhIv2Cz2.js";import{useMDXComponents as c}from"./index-CqKVgfqi.js";import{D as l}from"./Decorator-CFe2b-Hm.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-KpiUTsjr.js";import"./props-helper-CYANkYtB.js";import"./DecoratorBase-BGEj_E9N.js";import"./bucket-2-bhxorkyk.js";import"./bucket-5-CSCE0Y1O.js";import"./bucket-17-Cw9icrIT.js";function i(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"decorator",children:"Decorator"}),`
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
`,t.jsx(m,{children:t.jsx(u,{of:r})}),`
`,t.jsxs(e.h2,{id:"example-setlabeltitle",children:["Example ",t.jsx(e.strong,{children:"setLabelTitle()"})]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`<Decorator label="IP" score={5} value="192.168.0.50" />
`})}),`
`,t.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,t.jsx(h,{})]})}o(i,"_createMdxContent");function x(n={}){const{wrapper:e}={...c(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(i,{...n})}):i(n)}o(x,"MDXContent");const g="",s={"-1 (less than 0 is 0)":-1,"0 ":0,"1 ":1,"2 ":2,"3 ":3,"4 ":4,"5 ":5,"6 ":6,"7 ":7,"8 ":8,"9 ":9,"10 ":10,"11 (greater than 10 is 10)":11,'NaN; treated as "Unknown"':null},O={title:"Preview Candidate/Decorator",component:l,tags:["autodocs"],parameters:{styles:g,docs:{page:x}},argTypes:{kind:{table:{disable:!0}},className:{control:{type:{}}},setLabelTitle:{control:{type:{}}},score:{control:{type:"select",labels:Object.keys(s)},mapping:Object.values(s),options:Object.values(s).map((n,e)=>e)},theme:{control:{type:"select",labels:["use default","light","dark"]},mapping:{0:null,1:"light",2:"dark"},options:[0,1,2]},truncateValue:{control:{type:"select",labels:{0:"No truncation",1:'"end"',2:'"start"',3:"{ maxLength:20, front:9, back:10 }"}},mapping:{0:void 0,1:"end",2:"start",3:{maxLength:20,front:9,back:10}},options:[0,1,2,3]}},args:{theme:0,truncateValue:0}},j=o(n=>n.truncateValue?a.createElement(a.Fragment,null,a.createElement("div",{style:{padding:"0 0 1rem"}},"With limited width."),a.createElement("div",{style:{maxWidth:"16rem",padding:"3px",outline:"2px dashed #999"}},a.createElement(l,{...n,value:"Very long value to show truncation"}))):a.createElement(l,{...n}),"Template"),r=j.bind({});r.storyName="Decorator";r.args={hideIcon:!1,label:"IP",score:5,scoreThresholds:[0,4,7,10],setLabelTitle:o((n,e,d)=>typeof n!="number"?"Unknown score":`"${d}" magnitude. Score ${n} out of ${e[e.length-1]}`,"setLabelTitle"),small:!1,value:"192.168.0.50",valueTitle:""};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
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
}`,...r.parameters?.docs?.source}}};const N=["Default"];export{r as Default,N as __namedExportsOrder,O as default};
//# sourceMappingURL=Decorator.stories-CNVZdEYL.js.map
