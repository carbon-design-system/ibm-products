import{e,S as l}from"./iframe-BbTYfv9-.js";import{C as d}from"./Column-BYF5dbgU.js";import{C as t}from"./Cascade-DMcgDFy9.js";import"./preload-helper-D9Z9MdNV.js";import"./Grid-CTufMKYT.js";import"./devtools-KS_k4bKc.js";const m="#storybook-docs .docs-story{padding:30px 0}.box{display:inline-block;margin:.75rem;background-color:var(--cds-layer-selected-inverse, #161616);block-size:300px;color:var(--cds-text-on-color, #ffffff);inline-size:400px}.grid-box{display:flex;align-items:center;justify-content:center;background-color:var(--cds-layer-selected-inverse, #161616);block-size:300px;color:var(--cds-text-on-color, #ffffff);inline-size:100%;margin-block-end:.5rem}",i=()=>e.createElement(l,{altGuidelinesHref:[{href:"https://pages.github.ibm.com/carbon/ibm-products/patterns/cascade/usage",label:"Usage guidelines"},{href:"https://carbondesignsystem.com/elements/motion/overview/",label:"Carbon motion overview"}],blocks:[{story:s},{description:"When using `Cascade` with  grid support its important that you follow the example code structure and provide the rows and columns. The component will assume this structure and add the appropriate CSS classes to the columns.",story:a}]});i.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const N={title:"Utilities/Cascade",component:t,tags:["autodocs"],parameters:{layout:"fullscreen",styles:m,docs:{page:i}}},p=o=>e.createElement(t,{...o},e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"})),u=o=>{const r=()=>{const n=[];for(let c=0;c<4;c++)n.push(e.createElement(d,{lg:4},e.createElement("div",{className:"grid-box"})));return n};return e.createElement(t,{...o},r(),r())},s=p.bind({});s.args={};const a=u.bind({});a.args={grid:!0};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
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
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
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
}`,...a.parameters?.docs?.source}}};const y=["WithoutGrid","WithGrid"];export{a as WithGrid,s as WithoutGrid,y as __namedExportsOrder,N as default};
//# sourceMappingURL=Cascade.stories-67P-LLC1.js.map
