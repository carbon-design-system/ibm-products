import{j as t,eo as p,eq as u,ep as m,e as o}from"./iframe-6Ea7Lnhj.js";import{useMDXComponents as c}from"./index-Cv_bLOE1.js";import{A as h}from"./index-BWB014e2.js";import{D as l}from"./DecoratorSingleButton-gAl35Jqf.js";import"./bucket-10-DptLGOZv.js";import"./bucket-19-B56Rjjwc.js";import"./devtools-t5hVrn0E.js";import"./props-helper-BxLyO66a.js";import"./DecoratorBase-MGG3tbrX.js";import"./bucket-2-SPcLEvyK.js";import"./bucket-5-Ct_CXf5E.js";import"./bucket-16-CvJUHKHx.js";function s(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"decoratorsinglebutton",children:"DecoratorSingleButton"}),`
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
`,t.jsx(p,{children:t.jsx(u,{of:r})}),`
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
`,t.jsx(m,{})]})}function x(n={}){const{wrapper:e}={...c(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(s,{...n})}):s(n)}const g="",{action:i}=__STORYBOOK_MODULE_ACTIONS__,a={"-1 (less than 0 is 0)":-1,"0 ":0,"1 ":1,"2 ":2,"3 ":3,"4 ":4,"5 ":5,"6 ":6,"7 ":7,"8 ":8,"9 ":9,"10 ":10,"11 (greater than 10 is 10)":11,'NaN; treated as "Unknown"':null},_={title:"Deprecated/Decorators/DecoratorSingleButton",component:l,tags:["autodocs"],parameters:{styles:g,docs:{page:x}},argTypes:{kind:{table:{disable:!0}},className:{control:{type:{}}},onClick:{control:{type:{}}},onContextMenu:{control:{type:{}}},setLabelTitle:{control:{type:{}}},score:{control:{type:"select",labels:Object.keys(a)},mapping:Object.values(a),options:Object.values(a).map((n,e)=>e)},theme:{control:{type:"select",labels:["use default","light","dark"]},mapping:{0:null,1:"light",2:"dark"},options:[0,1,2]},truncateValue:{control:{type:"select",labels:{0:"No truncation",1:'"end"',2:'"start"',3:"{ maxLength:20, front:9, back:10 }"}},mapping:{0:void 0,1:"end",2:"start",3:{maxLength:20,front:9,back:10}},options:[0,1,2,3]}},args:{theme:0,truncateValue:0},decorators:[n=>o.createElement(h,{type:"deprecation-notice",text:o.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},n())]},j=n=>n.truncateValue?o.createElement(o.Fragment,null,o.createElement("div",{style:{padding:"0 0 1rem"}},"With limited width."),o.createElement("div",{style:{maxWidth:"16rem",padding:"3px",outline:"2px dashed #999"}},o.createElement(l,{...n,value:"Very long value to show truncation"}))):o.createElement(o.Fragment,null,o.createElement(l,{...n})),r=j.bind({});r.storyName="DecoratorSingleButton";r.args={disabled:!1,hideIcon:!1,label:"IP",onClick:(n,e)=>i("onClick")(e),onContextMenu:(n,e)=>i("onContextMenu")(e),score:5,scoreThresholds:[0,4,7,10],setLabelTitle:(n,e,d)=>typeof n!="number"?"Unknown score":`"${d}" magnitude. Score ${n} out of ${e[e.length-1]}`,small:!1,value:"192.168.0.50",valueTitle:""};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
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
}`,...r.parameters?.docs?.source}}};const B=["Default"];export{r as Default,B as __namedExportsOrder,_ as default};
