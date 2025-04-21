import{e}from"./index-DzvNrmz8.js";import"./index-5As4T26e.js";import{C as x}from"./Column-CfoaS7j8.js";import{S as g}from"./StoryDocsPage-DLdK_Krg.js";import{C as r}from"./Cascade-B_sxLCWH.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-Cg1swjps.js";import"./index-Bv4JGo1_.js";import"./Grid-WpMGg_A8.js";import"./index-CzcKhd7Q.js";import"./iframe-Czcp_UX8.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";import"./story-helper-DPPXKxdX.js";import"./settings-CP9zVSjJ.js";import"./events-OVwOsPzJ.js";import"./index-P6UCShJt.js";import"./devtools-B_dijMH7.js";const v="#storybook-docs .docs-story{padding:30px 0}.box{display:inline-block;margin:.75rem;background-color:var(--cds-layer-selected-inverse, #161616);block-size:300px;color:var(--cds-text-on-color, #ffffff);inline-size:400px}.grid-box{display:flex;align-items:center;justify-content:center;background-color:var(--cds-layer-selected-inverse, #161616);block-size:300px;color:var(--cds-text-on-color, #ffffff);inline-size:100%;margin-block-end:.5rem}",b=()=>e.createElement(g,{altGuidelinesHref:[{href:"https://pages.github.ibm.com/carbon/ibm-products/patterns/cascade/",label:"Cascade usage guidelines"},{href:"https://carbondesignsystem.com/elements/motion/overview/",label:"Carbon Motion overview"}],blocks:[{story:s},{description:"When using `Cascade` with  grid support its important that you follow the example code structure and provide the rows and columns. The component will assume this structure and add the appropriate CSS classes to the columns.",story:o}]});b.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const M={title:"Utils/Components/Cascade",component:r,tags:["autodocs"],parameters:{layout:"fullscreen",styles:v,docs:{page:b}}},f=t=>e.createElement(r,{...t},e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"})),h=t=>{const a=()=>{const n=[];for(let c=0;c<4;c++)n.push(e.createElement(x,{lg:4},e.createElement("div",{className:"grid-box"})));return n};return e.createElement(r,{...t},a(),a())},s=f.bind({});s.args={};const o=h.bind({});o.args={grid:!0};var i,m,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const O=["WithoutGrid","WithGrid"];export{o as WithGrid,s as WithoutGrid,O as __namedExportsOrder,M as default};
