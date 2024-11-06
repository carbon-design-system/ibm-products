import{R as e}from"./index-BwDkhjyp.js";import"./floating-ui.dom.mjs-BB6krl5l.js";import{C as g}from"./Column-CXfe-11S.js";import{S as b}from"./StoryDocsPage-D3jszs05.js";import{C as r}from"./Cascade-uvDDbiRr.js";import{u as f}from"./index-Dq5OYLvq.js";import{b as v}from"./story-helper-6_fmjwZ-.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Dk74W0Oi.js";import"./index-BONylQH5.js";import"./settings-GP6q6PuD.js";import"./index-CJvxHwuA.js";import"./events-b0qlIvq_.js";import"./index-CmXP8YBY.js";import"./Grid-jbQhRIM1.js";import"./index-B48M1B-m.js";import"./devtools-TX7bKGcX.js";import"./iframe-d869IuaJ.js";import"../sb-preview/runtime.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./tslib.es6-B4_xh3D5.js";const h="#storybook-docs .docs-story{padding:30px 0}.box{display:inline-block;width:400px;height:300px;margin:.75rem;background-color:var(--cds-layer-selected-inverse, #161616);color:var(--cds-text-on-color, #ffffff)}.grid-box{display:flex;width:100%;height:300px;align-items:center;justify-content:center;margin-bottom:.5rem;background-color:var(--cds-layer-selected-inverse, #161616);color:var(--cds-text-on-color, #ffffff)}",x=()=>{const{csfFile:s}=f("meta",["meta"]);return e.createElement(b,{altGuidelinesHref:[v(s),{href:"https://www.carbondesignsystem.com/guidelines/motion/overview/",label:"Carbon motion guidelines"}],blocks:[{story:o},{description:"When using `Cascade` with  grid support its important that you follow the example code structure and provide the rows and columns. The component will assume this structure and add the appropriate CSS classes to the columns.",story:t}]})};x.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const L={title:"IBM Products/Patterns/Cascade",component:r,tags:["autodocs"],parameters:{layout:"fullscreen",styles:h,docs:{page:x}}},N=s=>e.createElement(r,{...s},e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"})),y=s=>{const a=()=>{const i=[];for(let n=0;n<4;n++)i.push(e.createElement(g,{lg:4},e.createElement("div",{className:"grid-box"})));return i};return e.createElement(r,{...s},a(),a())},o=N.bind({});o.args={};const t=y.bind({});t.args={grid:!0};var c,m,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  return <Cascade {...args}>
      <div className="box" />
      <div className="box" />
      <div className="box" />
      <div className="box" />
      <div className="box" />
      <div className="box" />
      <div className="box" />
      <div className="box" />
    </Cascade>;
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var l,p,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  const getBoxes = () => {
    const boxes = [];
    for (let i = 0; i < 4; i++) {
      boxes.push(<Column lg={4}>
          <div className="grid-box" />
        </Column>);
    }
    return boxes;
  };
  return <Cascade {...args}>
      {getBoxes()}
      {getBoxes()}
    </Cascade>;
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const Q=["WithoutGrid","WithGrid"];export{t as WithGrid,o as WithoutGrid,Q as __namedExportsOrder,L as default};
