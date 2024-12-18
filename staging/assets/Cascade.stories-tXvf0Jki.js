import{e}from"./index-DxDX2vOa.js";import"./index-B_euquWE.js";import{C as g}from"./Column-cqxfba-8.js";import{S as b}from"./StoryDocsPage-CSDwatIL.js";import{C as r}from"./Cascade-DOFSQUXc.js";import{ae as f}from"./index-CYHZTqqy.js";import{b as v}from"./story-helper-BvAgcfdm.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CaMJXrh2.js";import"./settings-0ThqPtR3.js";import"./events-OVwOsPzJ.js";import"./index-YDq2Pj7F.js";import"./Grid-JDZMd2Uv.js";import"./devtools-BlxCaI1L.js";import"./iframe-Cku1tuHn.js";import"../sb-preview/runtime.js";import"./index-Df9so8jS.js";import"./index-CRUq0TYl.js";import"./index-DrFu-skq.js";import"./tslib.es6-B4_xh3D5.js";const h="#storybook-docs .docs-story{padding:30px 0}.box{display:inline-block;width:400px;height:300px;margin:.75rem;background-color:var(--cds-layer-selected-inverse, #161616);color:var(--cds-text-on-color, #ffffff)}.grid-box{display:flex;width:100%;height:300px;align-items:center;justify-content:center;margin-bottom:.5rem;background-color:var(--cds-layer-selected-inverse, #161616);color:var(--cds-text-on-color, #ffffff)}",x=()=>{const{csfFile:t}=f("meta",["meta"]);return e.createElement(b,{altGuidelinesHref:[v(t),{href:"https://www.carbondesignsystem.com/guidelines/motion/overview/",label:"Carbon motion guidelines"}],blocks:[{story:o},{description:"When using `Cascade` with  grid support its important that you follow the example code structure and provide the rows and columns. The component will assume this structure and add the appropriate CSS classes to the columns.",story:s}]})};x.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const A={title:"Utils/Components/Cascade",component:r,tags:["autodocs"],parameters:{layout:"fullscreen",styles:h,docs:{page:x}}},N=t=>e.createElement(r,{...t},e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"})),y=t=>{const a=()=>{const n=[];for(let i=0;i<4;i++)n.push(e.createElement(g,{lg:4},e.createElement("div",{className:"grid-box"})));return n};return e.createElement(r,{...t},a(),a())},o=N.bind({});o.args={};const s=y.bind({});s.args={grid:!0};var c,m,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
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
}`,...(l=(m=o.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,p,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
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
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const J=["WithoutGrid","WithGrid"];export{s as WithGrid,o as WithoutGrid,J as __namedExportsOrder,A as default};
