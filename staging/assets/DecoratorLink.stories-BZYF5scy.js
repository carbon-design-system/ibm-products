import{e as o}from"./index-BOZkNhcz.js";import{a as d}from"./chunk-D5ZWXAHU-DlerbUHg.js";import{j as t,a as b,h as g,C as x}from"./index-CKePA1sA.js";import{useMDXComponents as f}from"./index-aaDvWpb8.js";import"./DocsRenderer-CFRXHY34-CAZB0tDV.js";import{A as v}from"./index-RATG_uWP.js";import{P as r}from"./index-Cd8snwnz.js";import{g as k}from"./devtools-Bjt2CwRv.js";import{p as y}from"./props-helper-DIx2Ramn.js";import{p as j}from"./settings-DqneCnpo.js";import{D as T}from"./DecoratorBase-DBtwvZZ9.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CtRu48qb.js";import"./iframe-BLi-C7G1.js";import"./index-hBZdtWkn.js";import"./index-2uioG_CI.js";import"./index-CO8sV34W.js";import"./index-ogSvIofg.js";import"./react-18-Cs6RDBhU.js";import"./bucket-9-0Zx3G2i3.js";import"./bucket-18-D95sPjw6.js";import"./events-OVwOsPzJ.js";import"./index-CN8ymWyE.js";import"./bucket-2-BRYD7UVO.js";import"./bucket-5-DaBRhwMZ.js";import"./bucket-15-3B18yM39.js";const c="DecoratorLink";let a=o.forwardRef((n,e)=>{const s=y(n,["disabled","kind","onClickLabel","onClickValue","onContextMenuLabel","onContextMenuValue"]);return o.createElement(T,{ref:e,...s,kind:"link",...k(c)})});a.deprecated={level:"warn",details:"This component is deprecated"};a=j.checkComponentEnabled(a,c);a.displayName=c;a.propTypes={className:r.string,hideIcon:r.bool,href:r.string.isRequired,label:r.string,onClick:r.func,onContextMenu:r.func,score:r.number,scoreThresholds:r.arrayOf(r.number),setLabelTitle:r.func,small:r.bool,theme:r.oneOf(["light","dark"]),truncateValue:r.oneOfType([r.oneOf(["end","start"]),r.shape({maxLength:r.number,front:r.number,back:r.number})]),value:r.string.isRequired,valueTitle:r.string};a.__docgenInfo={description:`The DecoratorLink groups a key/value pair to behave like a link.
@deprecated This component is deprecated`,methods:[],displayName:"DecoratorLink",props:{className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1},hideIcon:{description:"Do not show the icon, regardless of score.",type:{name:"bool"},required:!1},href:{description:"The component's URL.",type:{name:"string"},required:!0},label:{description:"The label for the data.",type:{name:"string"},required:!1},onClick:{description:"Optional callback function.\nReturns two objects: `event` and `{ score, label, value, magnitude }`",type:{name:"func"},required:!1},onContextMenu:{description:"Optional callback function.\nReturns two objects: `event` and `{ score, label, value, magnitude }`",type:{name:"func"},required:!1},score:{description:"Used in conjunction with `scoreThresholds`, determines the color, shape, and type of magnitude of the icon.\n\nIf you don't want to show the icon at all, set `hideIcon={true}`.",type:{name:"number"},required:!1},scoreThresholds:{description:'Used in conjunction with `score`, determines the color, shape, and type of magnitude of the icon.\n\nAn array of 4 numbers determines the range of thresholds.\n\nExample using `[0, 4, 7, 10]`:\n<br/>- `<= 0` "Benign"\n<br/>- `1-3` "Low"\n<br/>- `4-6` "Medium"\n<br/>- `7-9` "High"\n<br/>- `>= 10` "Critical"\n<br/>- `NaN` "Unknown"',type:{name:"arrayOf",value:{name:"number"}},required:!1},setLabelTitle:{description:'Optional callback function for building a more detailed descriptive text.\nReturns `score`, `scoreThresholds`, `magnitude`.\n\nTypical description is in the form of\n\'"(magnitude)" magnitude: score (score) out of (last element of scoreThresholds array)\'.\n\nE.g. `"Medium" magnitude: score 5 out of 10`.\n\nIf not defined, the title will default to the `label` prop.',type:{name:"func"},required:!1},small:{description:"Styled smaller to better fit inline with text.",type:{name:"bool"},required:!1},theme:{description:`Override the default theme of the component.
Useful if you want "invert" the component's theme.`,type:{name:"enum",value:[{value:"'light'",computed:!1},{value:"'dark'",computed:!1}]},required:!1},truncateValue:{description:"If not defined, it will behave as `display:inline-block`.",type:{name:"union",value:[{name:"enum",value:[{value:"'end'",computed:!1},{value:"'start'",computed:!1}]},{name:"shape",value:{maxLength:{name:"number",required:!1},front:{name:"number",required:!1},back:{name:"number",required:!1}}}]},required:!1},value:{description:"The value of the data.",type:{name:"string"},required:!0},valueTitle:{description:"Overrides the default title for the Decorator's value.",type:{name:"string"},required:!1}}};function p(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...f(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"decoratorlink",children:"DecoratorLink"}),`
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
`,t.jsx(b,{children:t.jsx(g,{of:i})}),`
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
`,t.jsx(x,{})]})}function w(n={}){const{wrapper:e}={...f(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(p,{...n})}):p(n)}const L="",l={"-1 (less than 0 is 0)":-1,"0 ":0,"1 ":1,"2 ":2,"3 ":3,"4 ":4,"5 ":5,"6 ":6,"7 ":7,"8 ":8,"9 ":9,"10 ":10,"11 (greater than 10 is 10)":11,'NaN; treated as "Unknown"':null},Z={title:"Deprecated/Decorators/DecoratorLink",component:a,tags:["autodocs"],parameters:{styles:L,docs:{page:w}},argTypes:{kind:{table:{disable:!0}},target:{table:{disable:!0}},className:{control:{type:{}}},onClick:{control:{type:{}}},onContextMenu:{control:{type:{}}},setLabelTitle:{control:{type:{}}},score:{control:{type:"select",labels:Object.keys(l)},mapping:Object.values(l),options:Object.values(l).map((n,e)=>e)},theme:{control:{type:"select",labels:["use default","light","dark"]},mapping:{0:null,1:"light",2:"dark"},options:[0,1,2]},truncateValue:{control:{type:"select",labels:{0:"No truncation",1:'"end"',2:'"start"',3:"{ maxLength:20, front:9, back:10 }"}},mapping:{0:void 0,1:"end",2:"start",3:{maxLength:20,front:9,back:10}},options:[0,1,2,3]}},args:{theme:0,truncateValue:0},decorators:[n=>o.createElement(v,{type:"deprecation-notice",text:o.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},n())]},C=n=>n.truncateValue?o.createElement(o.Fragment,null,o.createElement("div",{style:{padding:"0 0 1rem"}},"With limited width."),o.createElement("div",{style:{maxWidth:"16rem",padding:"3px",outline:"2px dashed #999"}},o.createElement(a,{...n,value:"Very long value to show truncation"}))):o.createElement(a,{...n}),i=C.bind({});i.storyName="DecoratorLink";i.args={hideIcon:!1,href:"http://www.ibm.com",label:"IP",onClick:(n,e)=>d("onClick")(e),onContextMenu:(n,e)=>d("onContextMenu")(e),score:5,scoreThresholds:[0,4,7,10],setLabelTitle:(n,e,s)=>typeof n!="number"?"Unknown score":`"${s}" magnitude. Score ${n} out of ${e[e.length-1]}`,small:!1,value:"192.168.0.50",valueTitle:"",target:"_blank"};var m,u,h;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(h=(u=i.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const ee=["Default"];export{i as Default,ee as __namedExportsOrder,Z as default};
