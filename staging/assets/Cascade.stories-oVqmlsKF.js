import{j as s}from"./settings-BiUEFdm2.js";import"./deprecate-D9ms-jbM.js";import{C as g}from"./Column-joQvaXDX.js";import{S as b}from"./StoryDocsPage-BuwgUq5r.js";import{C as t}from"./Cascade-xLyamXkq.js";import{u as f}from"./index-CDYzkStP.js";import{b as h}from"./story-helper-YTYnELA9.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-Dk74W0Oi.js";import"./events-Bq7WR1mU.js";import"./index-BONylQH5.js";import"./Grid-sFQW4EYz.js";import"./index-gKY8typL.js";import"./devtools-BPcQvzXy.js";import"./iframe-j3s5A4v9.js";import"../sb-preview/runtime.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-BjQFKvNH.js";import"./isSymbol-BZYRlrjc.js";import"./index-DrFu-skq.js";import"./tslib.es6-B4_xh3D5.js";const v="#storybook-docs .docs-story{padding:30px 0}.box{display:inline-block;width:400px;height:300px;margin:.75rem;background-color:var(--cds-layer-selected-inverse, #161616);color:var(--cds-text-on-color, #ffffff)}.grid-box{display:flex;width:100%;height:300px;align-items:center;justify-content:center;margin-bottom:.5rem;background-color:var(--cds-layer-selected-inverse, #161616);color:var(--cds-text-on-color, #ffffff)}",u=()=>{const{csfFile:r}=f("meta",["meta"]);return s.jsx(b,{altGuidelinesHref:[h(r),{href:"https://www.carbondesignsystem.com/guidelines/motion/overview/",label:"Carbon motion guidelines"}],blocks:[{story:o},{description:"When using `Cascade` with  grid support its important that you follow the example code structure and provide the rows and columns. The component will assume this structure and add the appropriate CSS classes to the columns.",story:e}]})};u.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const L={title:"IBM Products/Patterns/Cascade",component:t,tags:["autodocs"],parameters:{layout:"fullscreen",styles:v,docs:{page:u}}},N=r=>s.jsxs(t,{...r,children:[s.jsx("div",{className:"box"}),s.jsx("div",{className:"box"}),s.jsx("div",{className:"box"}),s.jsx("div",{className:"box"}),s.jsx("div",{className:"box"}),s.jsx("div",{className:"box"}),s.jsx("div",{className:"box"}),s.jsx("div",{className:"box"})]}),j=r=>{const a=()=>{const i=[];for(let n=0;n<4;n++)i.push(s.jsx(g,{lg:4,children:s.jsx("div",{className:"grid-box"})}));return i};return s.jsxs(t,{...r,children:[a(),a()]})},o=N.bind({});o.args={};const e=j.bind({});e.args={grid:!0};var c,d,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
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
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var l,p,x;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
}`,...(x=(p=e.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};const Q=["WithoutGrid","WithGrid"];export{e as WithGrid,o as WithoutGrid,Q as __namedExportsOrder,L as default};
