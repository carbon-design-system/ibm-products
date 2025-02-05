import{e as r}from"./index-CPiZ6Cnx.js";import{a as d}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{aw as t,al as g,ax as b,ak as x}from"./index-z3zJDXtl.js";import{useMDXComponents as f}from"./index-CUO_02de.js";import"./chunk-NUUEMKO5-CVm38ugG.js";import{A as v}from"./index-Spu41qs0.js";import{P as o}from"./index-CXyjPnaX.js";import{g as y}from"./devtools-BgfuqBVa.js";import{p as k}from"./props-helper-C4XfpXsc.js";import{p as j}from"./settings-DkGFwmHv.js";import{D as T}from"./DecoratorBase-BwznYtHM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./iframe-BAt2XFX8.js";import"../sb-preview/runtime.js";import"./index-BSHYryQu.js";import"./index-Bsyy8W_U.js";import"./index-Df9so8jS.js";import"./index-DMCuvgYY.js";import"./index-DrFu-skq.js";import"./react-18-C6q_qjn2.js";import"./bucket-18-By6NmkK1.js";import"./bucket-9-BSWQ2dSd.js";import"./events-OVwOsPzJ.js";import"./index-DJK44odq.js";import"./bucket-2-L5Cs0C3i.js";import"./bucket-5-CJguTH3X.js";import"./bucket-15-BRJeqmt8.js";const c="DecoratorSingleButton";let a=r.forwardRef((n,e)=>{const l=k(n,["href","kind","onClickLabel","onClickValue","onContextMenuLabel","onContextMenuValue"]);return r.createElement(T,{ref:e,...l,kind:"single-button",...y(c)})});a.deprecated={level:"warn",details:"This component is deprecated"};a=j.checkComponentEnabled(a,c);a.displayName=c;a.propTypes={className:o.string,disabled:o.bool,hideIcon:o.bool,label:o.string,onClick:o.func,onContextMenu:o.func,score:o.number,scoreThresholds:o.arrayOf(o.number),setLabelTitle:o.func,small:o.bool,theme:o.oneOf(["light","dark"]),truncateValue:o.oneOfType([o.oneOf(["end","start"]),o.shape({maxLength:o.number,front:o.number,back:o.number})]),value:o.string.isRequired,valueTitle:o.string};a.__docgenInfo={description:`The DecoratorSingleButton groups a key/value pair to behave like a button.
@deprecated This component is deprecated`,methods:[],displayName:"DecoratorSingleButton",props:{className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1},disabled:{description:'`disabled` only applies if `kind` is "single-button" or "dual-button".',type:{name:"bool"},required:!1},hideIcon:{description:"Do not show the icon, regardless of score.",type:{name:"bool"},required:!1},label:{description:"The label for the data.",type:{name:"string"},required:!1},onClick:{description:"Optional callback function.\nReturns two objects: `event` and `{ score, label, value, magnitude }`",type:{name:"func"},required:!1},onContextMenu:{description:"Optional callback function.\nReturns two objects: `event` and `{ score, label, value, magnitude }`",type:{name:"func"},required:!1},score:{description:"Used in conjunction with `scoreThresholds`, determines the color, shape, and type of magnitude of the icon.\n\nIf you don't want to show the icon at all, set `hideIcon={true}`.",type:{name:"number"},required:!1},scoreThresholds:{description:'Used in conjunction with `score`, determines the color, shape, and type of magnitude of the icon.\n\nAn array of 4 numbers determines the range of thresholds.\n\nExample using `[0, 4, 7, 10]`:\n<br/>- `<= 0` "Benign"\n<br/>- `1-3` "Low"\n<br/>- `4-6` "Medium"\n<br/>- `7-9` "High"\n<br/>- `>= 10` "Critical"\n<br/>- `NaN` "Unknown"',type:{name:"arrayOf",value:{name:"number"}},required:!1},setLabelTitle:{description:'Optional callback function for building a more detailed descriptive text.\nReturns `score`, `scoreThresholds`, `magnitude`.\n\nTypical description is in the form of\n\'"(magnitude)" magnitude: score (score) out of (last element of scoreThresholds array)\'.\n\nE.g. `"Medium" magnitude: score 5 out of 10`.\n\nIf not defined, the title will default to the `label` prop.',type:{name:"func"},required:!1},small:{description:"Styled smaller to better fit inline with text.",type:{name:"bool"},required:!1},theme:{description:`Override the default theme of the component.
Useful if you want "invert" the component's theme.`,type:{name:"enum",value:[{value:"'light'",computed:!1},{value:"'dark'",computed:!1}]},required:!1},truncateValue:{description:"If not defined, it will behave as `display:inline-block`.",type:{name:"union",value:[{name:"enum",value:[{value:"'end'",computed:!1},{value:"'start'",computed:!1}]},{name:"shape",value:{maxLength:{name:"number",required:!1},front:{name:"number",required:!1},back:{name:"number",required:!1}}}]},required:!1},value:{description:"The value of the data.",type:{name:"string"},required:!0},valueTitle:{description:"Overrides the default title for the Decorator's value.",type:{name:"string"},required:!1}}};function u(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...f(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"decoratorsinglebutton",children:"DecoratorSingleButton"}),`
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
`,t.jsx(g,{children:t.jsx(b,{of:i})}),`
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
`,t.jsx(x,{})]})}function w(n={}){const{wrapper:e}={...f(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(u,{...n})}):u(n)}const C="",s={"-1 (less than 0 is 0)":-1,"0 ":0,"1 ":1,"2 ":2,"3 ":3,"4 ":4,"5 ":5,"6 ":6,"7 ":7,"8 ":8,"9 ":9,"10 ":10,"11 (greater than 10 is 10)":11,'NaN; treated as "Unknown"':null},te={title:"Deprecated/Decorators/DecoratorSingleButton",component:a,tags:["autodocs"],parameters:{styles:C,docs:{page:w}},argTypes:{kind:{table:{disable:!0}},className:{control:{type:{}}},onClick:{control:{type:{}}},onContextMenu:{control:{type:{}}},setLabelTitle:{control:{type:{}}},score:{control:{type:"select",labels:Object.keys(s)},mapping:Object.values(s),options:Object.values(s).map((n,e)=>e)},theme:{control:{type:"select",labels:["use default","light","dark"]},mapping:{0:null,1:"light",2:"dark"},options:[0,1,2]},truncateValue:{control:{type:"select",labels:{0:"No truncation",1:'"end"',2:'"start"',3:"{ maxLength:20, front:9, back:10 }"}},mapping:{0:void 0,1:"end",2:"start",3:{maxLength:20,front:9,back:10}},options:[0,1,2,3]}},args:{theme:0,truncateValue:0},decorators:[n=>r.createElement(v,{type:"deprecation-notice",text:r.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},n())]},D=n=>n.truncateValue?r.createElement(r.Fragment,null,r.createElement("div",{style:{padding:"0 0 1rem"}},"With limited width."),r.createElement("div",{style:{maxWidth:"16rem",padding:"3px",outline:"2px dashed #999"}},r.createElement(a,{...n,value:"Very long value to show truncation"}))):r.createElement(r.Fragment,null,r.createElement(a,{...n})),i=D.bind({});i.storyName="DecoratorSingleButton";i.args={disabled:!1,hideIcon:!1,label:"IP",onClick:(n,e)=>d("onClick")(e),onContextMenu:(n,e)=>d("onContextMenu")(e),score:5,scoreThresholds:[0,4,7,10],setLabelTitle:(n,e,l)=>typeof n!="number"?"Unknown score":`"${l}" magnitude. Score ${n} out of ${e[e.length-1]}`,small:!1,value:"192.168.0.50",valueTitle:""};var p,m,h;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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
}`,...(h=(m=i.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const ne=["Default"];export{i as Default,ne as __namedExportsOrder,te as default};
