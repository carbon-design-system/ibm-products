import{e}from"./index-DtHxqM--.js";import"./index-4poXP75K.js";import{C as g}from"./Column-Dx-fSbMQ.js";import{S as x}from"./StoryDocsPage-BlyQ38W4.js";import{C as r}from"./Cascade-BdSiEpYp.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DgLvjnYm.js";import"./index-CiYgQLeJ.js";import"./Grid-1Cbz-cjc.js";import"./index-B4WvMzTq.js";import"./iframe-wzBMF1p9.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";import"./story-helper-C5uq5kSZ.js";import"./settings-Bzj6EGPa.js";import"./events-CdfZZS3f.js";import"./devtools-B69Kc3qg.js";const v="#storybook-docs .docs-story{padding:30px 0}.box{display:inline-block;margin:.75rem;background-color:var(--cds-layer-selected-inverse, #161616);block-size:300px;color:var(--cds-text-on-color, #ffffff);inline-size:400px}.grid-box{display:flex;align-items:center;justify-content:center;background-color:var(--cds-layer-selected-inverse, #161616);block-size:300px;color:var(--cds-text-on-color, #ffffff);inline-size:100%;margin-block-end:.5rem}",b=()=>e.createElement(x,{altGuidelinesHref:[{href:"https://pages.github.ibm.com/carbon/ibm-products/patterns/cascade/usage",label:"Usage guidelines"},{href:"https://carbondesignsystem.com/elements/motion/overview/",label:"Carbon motion overview"}],blocks:[{story:s},{description:"When using `Cascade` with  grid support its important that you follow the example code structure and provide the rows and columns. The component will assume this structure and add the appropriate CSS classes to the columns.",story:o}]});b.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const H={title:"Utilities/Cascade",component:r,tags:["autodocs"],parameters:{layout:"fullscreen",styles:v,docs:{page:b}}},f=t=>e.createElement(r,{...t},e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"})),h=t=>{const a=()=>{const n=[];for(let c=0;c<4;c++)n.push(e.createElement(g,{lg:4},e.createElement("div",{className:"grid-box"})));return n};return e.createElement(r,{...t},a(),a())},s=f.bind({});s.args={};const o=h.bind({});o.args={grid:!0};var i,l,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,p,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
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
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const I=["WithoutGrid","WithGrid"];export{o as WithGrid,s as WithoutGrid,I as __namedExportsOrder,H as default};
