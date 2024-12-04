import{R as o}from"./index-BwDkhjyp.js";import{a as d}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{j as n}from"./jsx-runtime-Yb_4y5hn.js";import{useMDXComponents as f}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-UdGwiunq.js";import{e as b,i as g,C as x}from"./index-CTiS1d2M.js";import{A as v}from"./index-DznJAQiH.js";import{P as r}from"./index-Dk74W0Oi.js";import{g as k}from"./devtools-Bz70ioU6.js";import{p as y}from"./props-helper-BS5A6Pu3.js";import{p as j}from"./settings-xiNX1vM3.js";import{D as T}from"./DecoratorBase-B742PqhL.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./iframe-t6fBb6Y8.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./index-BONylQH5.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./index-CQ0F2wkl.js";import"./bucket-18-DbwFKOtV.js";import"./bucket-9-BGCJpvdq.js";import"./index-CJvxHwuA.js";import"./events-OVwOsPzJ.js";import"./index-ABeo-Xma.js";import"./bucket-2-DlXCnOsR.js";import"./bucket-5-BnP2u7x5.js";import"./bucket-15-z5ordBdm.js";const c="DecoratorLink";let a=o.forwardRef((t,e)=>{const s=y(t,["disabled","kind","onClickLabel","onClickValue","onContextMenuLabel","onContextMenuValue"]);return o.createElement(T,{ref:e,...s,kind:"link",...k(c)})});a.deprecated={level:"warn",details:"This component is deprecated"};a=j.checkComponentEnabled(a,c);a.displayName=c;a.propTypes={className:r.string,hideIcon:r.bool,href:r.string.isRequired,label:r.string,onClick:r.func,onContextMenu:r.func,score:r.number,scoreThresholds:r.arrayOf(r.number),setLabelTitle:r.func,small:r.bool,theme:r.oneOf(["light","dark"]),truncateValue:r.oneOfType([r.oneOf(["end","start"]),r.shape({maxLength:r.number,front:r.number,back:r.number})]),value:r.string.isRequired,valueTitle:r.string};a.__docgenInfo={description:`The DecoratorLink groups a key/value pair to behave like a link.
@deprecated This component is deprecated`,methods:[],displayName:"DecoratorLink",props:{className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1},hideIcon:{description:"Do not show the icon, regardless of score.",type:{name:"bool"},required:!1},href:{description:"The component's URL.",type:{name:"string"},required:!0},label:{description:"The label for the data.",type:{name:"string"},required:!1},onClick:{description:"Optional callback function.\nReturns two objects: `event` and `{ score, label, value, magnitude }`",type:{name:"func"},required:!1},onContextMenu:{description:"Optional callback function.\nReturns two objects: `event` and `{ score, label, value, magnitude }`",type:{name:"func"},required:!1},score:{description:"Used in conjunction with `scoreThresholds`, determines the color, shape, and type of magnitude of the icon.\n\nIf you don't want to show the icon at all, set `hideIcon={true}`.",type:{name:"number"},required:!1},scoreThresholds:{description:'Used in conjunction with `score`, determines the color, shape, and type of magnitude of the icon.\n\nAn array of 4 numbers determines the range of thresholds.\n\nExample using `[0, 4, 7, 10]`:\n<br/>- `<= 0` "Benign"\n<br/>- `1-3` "Low"\n<br/>- `4-6` "Medium"\n<br/>- `7-9` "High"\n<br/>- `>= 10` "Critical"\n<br/>- `NaN` "Unknown"',type:{name:"arrayOf",value:{name:"number"}},required:!1},setLabelTitle:{description:'Optional callback function for building a more detailed descriptive text.\nReturns `score`, `scoreThresholds`, `magnitude`.\n\nTypical description is in the form of\n\'"(magnitude)" magnitude: score (score) out of (last element of scoreThresholds array)\'.\n\nE.g. `"Medium" magnitude: score 5 out of 10`.\n\nIf not defined, the title will default to the `label` prop.',type:{name:"func"},required:!1},small:{description:"Styled smaller to better fit inline with text.",type:{name:"bool"},required:!1},theme:{description:`Override the default theme of the component.
Useful if you want "invert" the component's theme.`,type:{name:"enum",value:[{value:"'light'",computed:!1},{value:"'dark'",computed:!1}]},required:!1},truncateValue:{description:"If not defined, it will behave as `display:inline-block`.",type:{name:"union",value:[{name:"enum",value:[{value:"'end'",computed:!1},{value:"'start'",computed:!1}]},{name:"shape",value:{maxLength:{name:"number",required:!1},front:{name:"number",required:!1},back:{name:"number",required:!1}}}]},required:!1},value:{description:"The value of the data.",type:{name:"string"},required:!0},valueTitle:{description:"Overrides the default title for the Decorator's value.",type:{name:"string"},required:!1}}};function m(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...f(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"decoratorlink",children:"DecoratorLink"}),`
`,n.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#overview",children:"Overview"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#example-usage",children:"Example usage"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#example-setlabeltitle",children:"Example setLabelTitle()"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,n.jsx(e.h2,{id:"deprecation-notice",children:"Deprecation notice"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"This component is deprecated and will be removed in the next major version."}),`
`]}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsx(e.p,{children:"The DecoratorLink groups a key/value pair to look and behave like a single link."}),`
`,n.jsx(e.h2,{id:"example-usage",children:"Example usage"}),`
`,n.jsx(b,{children:n.jsx(g,{of:i})}),`
`,n.jsxs(e.h2,{id:"example-setlabeltitle",children:["Example ",n.jsx(e.strong,{children:"setLabelTitle()"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`setLabelTitle: (score, scoreThresholds, magnitude) => {
  if (typeof score !== 'number') {
    return 'Unknown score';
  }
  return \`"\${magnitude}" magnitude. Score \${score} out of \${
    scoreThresholds[scoreThresholds.length - 1]
  }\`;
},
`})}),`
`,n.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,n.jsx(x,{})]})}function w(t={}){const{wrapper:e}={...f(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(m,{...t})}):m(t)}const L="",l={"-1 (less than 0 is 0)":-1,"0 ":0,"1 ":1,"2 ":2,"3 ":3,"4 ":4,"5 ":5,"6 ":6,"7 ":7,"8 ":8,"9 ":9,"10 ":10,"11 (greater than 10 is 10)":11,'NaN; treated as "Unknown"':null},oe={title:"Deprecated/Decorators/DecoratorLink",component:a,tags:["autodocs"],parameters:{styles:L,docs:{page:w}},argTypes:{kind:{table:{disable:!0}},target:{table:{disable:!0}},className:{control:{type:{}}},onClick:{control:{type:{}}},onContextMenu:{control:{type:{}}},setLabelTitle:{control:{type:{}}},score:{control:{type:"select",labels:Object.keys(l)},mapping:Object.values(l),options:Object.values(l).map((t,e)=>e)},theme:{control:{type:"select",labels:["use default","light","dark"]},mapping:{0:null,1:"light",2:"dark"},options:[0,1,2]},truncateValue:{control:{type:"select",labels:{0:"No truncation",1:'"end"',2:'"start"',3:"{ maxLength:20, front:9, back:10 }"}},mapping:{0:void 0,1:"end",2:"start",3:{maxLength:20,front:9,back:10}},options:[0,1,2,3]}},args:{theme:0,truncateValue:0},decorators:[t=>o.createElement(v,{type:"deprecation-notice",text:o.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},t())]},C=t=>t.truncateValue?o.createElement(o.Fragment,null,o.createElement("div",{style:{padding:"0 0 1rem"}},"With limited width."),o.createElement("div",{style:{maxWidth:"16rem",padding:"3px",outline:"2px dashed #999"}},o.createElement(a,{...t,value:"Very long value to show truncation"}))):o.createElement(a,{...t}),i=C.bind({});i.storyName="DecoratorLink";i.args={hideIcon:!1,href:"http://www.ibm.com",label:"IP",onClick:(t,e)=>d("onClick")(e),onContextMenu:(t,e)=>d("onContextMenu")(e),score:5,scoreThresholds:[0,4,7,10],setLabelTitle:(t,e,s)=>typeof t!="number"?"Unknown score":`"${s}" magnitude. Score ${t} out of ${e[e.length-1]}`,small:!1,value:"192.168.0.50",valueTitle:"",target:"_blank"};var p,u,h;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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
}`,...(h=(u=i.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const ae=["Default"];export{i as Default,ae as __namedExportsOrder,oe as default};
