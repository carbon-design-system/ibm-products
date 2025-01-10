import{e as i}from"./index-CPiZ6Cnx.js";import{S as C}from"./StoryDocsPage-CfqXAAPC.js";import{c as P,P as a}from"./index-CXyjPnaX.js";import{g as E}from"./devtools-CjVY-wQW.js";import{p as b}from"./settings-iwZeeh4T.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CtsEI9BF.js";import"./iframe-hpPbDi6V.js";import"../sb-preview/runtime.js";import"./index-BSHYryQu.js";import"./index-Bsyy8W_U.js";import"./index-Df9so8jS.js";import"./index-DMCuvgYY.js";import"./index-DrFu-skq.js";import"./story-helper-xvx7_7ek.js";import"./tslib.es6-B4_xh3D5.js";import"./events-OVwOsPzJ.js";import"./index-DJK44odq.js";const p=`${b.prefix}--delimited-list`,n="DelimitedList",m={delimiter:", ",items:[],truncate:!0};let e=i.forwardRef(({className:o,delimiter:N=m.delimiter,items:d=m.items,truncate:L=m.truncate,...T},w)=>i.createElement("div",{...T,className:P(p,o,[L&&`${p}-truncate`]),ref:w,...E(n)},d.length>0?d.join(N):"–"));e=b.checkComponentEnabled(e,n);e.displayName=n;e.propTypes={className:a.string,delimiter:a.string,items:a.arrayOf(a.any),truncate:a.bool};e.__docgenInfo={description:"`DelimitedList` converts an array of items into a single line of\ncomma-separated values.",methods:[],displayName:"DelimitedList",props:{className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}},delimiter:{required:!1,tsType:{name:"string"},description:"The character(s) used to separate the items.",defaultValue:{value:"', '",computed:!1},type:{name:"string"}},items:{required:!1,tsType:{name:"Array",elements:[{name:"any"}],raw:"any[]"},description:"Array of items to be listed.",defaultValue:{value:"[]",computed:!1},type:{name:"arrayOf",value:{name:"any"}}},truncate:{required:!1,tsType:{name:"boolean"},description:"Toggle the component's ability to truncate or not.",defaultValue:{value:"true",computed:!1},type:{name:"bool"}}},composes:["PropsWithChildren"]};const $=".delimited-list-stories__viewport{width:20rem}",h=()=>i.createElement(C,{blocks:[{story:t},{story:s},{story:r}]});h.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const S="delimited-list-stories",Q={title:"Utils/Components/DelimitedList",component:e,tags:["autodocs"],parameters:{styles:$,docs:{page:h}}},l=o=>i.createElement("div",{className:`${S}__viewport`},i.createElement(e,{...o})),t=l.bind({});t.args={delimiter:", ",items:["Item 1","Item 2","Item 3","Item 4","Item 5","Item 6","Item 7","Item 8","Item 9","Item 10"],truncate:!0};const s=l.bind({});s.args={delimiter:", ",items:["Item 1","Item 2","Item 3"],truncate:!0};const r=l.bind({});r.args={items:[]};var c,u,y;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  return <div className={\`\${storyClass}__viewport\`}>
      <DelimitedList {...args} />
    </div>;
}`,...(y=(u=t.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var g,f,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  return <div className={\`\${storyClass}__viewport\`}>
      <DelimitedList {...args} />
    </div>;
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var _,D,I;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  return <div className={\`\${storyClass}__viewport\`}>
      <DelimitedList {...args} />
    </div>;
}`,...(I=(D=r.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const X=["delimited","notDelimited","empty"];export{X as __namedExportsOrder,Q as default,t as delimited,r as empty,s as notDelimited};
