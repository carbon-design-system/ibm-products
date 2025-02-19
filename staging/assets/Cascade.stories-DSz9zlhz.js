import{e}from"./index-BOZkNhcz.js";import"./index-Cd8snwnz.js";import{C as x}from"./Column-C25oeRmQ.js";import{S as g}from"./StoryDocsPage-CUDE-DA-.js";import{C as r}from"./Cascade-Q8p5lxb7.js";import{u as f}from"./index-Cm8rDqP-.js";import{b as v}from"./story-helper-HIAsLHzl.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-hBZdtWkn.js";import"./index-2uioG_CI.js";import"./settings-DqneCnpo.js";import"./events-OVwOsPzJ.js";import"./index-CN8ymWyE.js";import"./Grid-B-8ku9nG.js";import"./devtools-Bjt2CwRv.js";import"./iframe-DVffvOdJ.js";import"./index-CO8sV34W.js";import"./index-ogSvIofg.js";const N="#storybook-docs .docs-story{padding:30px 0}.box{display:inline-block;margin:.75rem;background-color:var(--cds-layer-selected-inverse, #161616);block-size:300px;color:var(--cds-text-on-color, #ffffff);inline-size:400px}.grid-box{display:flex;align-items:center;justify-content:center;background-color:var(--cds-layer-selected-inverse, #161616);block-size:300px;color:var(--cds-text-on-color, #ffffff);inline-size:100%;margin-block-end:.5rem}",b=()=>{const{csfFile:t}=f("meta",["meta"]);return e.createElement(g,{altGuidelinesHref:[v(t),{href:"https://www.carbondesignsystem.com/guidelines/motion/overview/",label:"Carbon motion guidelines"}],blocks:[{story:s},{description:"When using `Cascade` with  grid support its important that you follow the example code structure and provide the rows and columns. The component will assume this structure and add the appropriate CSS classes to the columns.",story:o}]})};b.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const U={title:"Utils/Components/Cascade",component:r,tags:["autodocs"],parameters:{layout:"fullscreen",styles:N,docs:{page:b}}},h=t=>e.createElement(r,{...t},e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"})),y=t=>{const a=()=>{const n=[];for(let c=0;c<4;c++)n.push(e.createElement(x,{lg:4},e.createElement("div",{className:"grid-box"})));return n};return e.createElement(r,{...t},a(),a())},s=h.bind({});s.args={};const o=y.bind({});o.args={grid:!0};var i,m,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
}`,...(l=(m=s.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,p,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
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
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const q=["WithoutGrid","WithGrid"];export{o as WithGrid,s as WithoutGrid,q as __namedExportsOrder,U as default};
