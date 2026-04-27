var d=Object.defineProperty;var t=(o,r)=>d(o,"name",{value:r,configurable:!0});import{e,S as m}from"./iframe-BlOC0pA1.js";import{C as p}from"./Column-l8zltNS1.js";import{C as n}from"./Cascade-B3TVWlmW.js";import"./preload-helper-Cc2_yIPf.js";import"./Grid-DMgtlr9j.js";import"./devtools-PisD3bve.js";const u="#storybook-docs .docs-story{padding:30px 0}.box{display:inline-block;margin:.75rem;background-color:var(--cds-layer-selected-inverse, #161616);block-size:300px;color:var(--cds-text-on-color, #ffffff);inline-size:400px}.grid-box{display:flex;align-items:center;justify-content:center;background-color:var(--cds-layer-selected-inverse, #161616);block-size:300px;color:var(--cds-text-on-color, #ffffff);inline-size:100%;margin-block-end:.5rem}",l=t(()=>e.createElement(m,{altGuidelinesHref:[{href:"https://pages.github.ibm.com/carbon/ibm-products/patterns/cascade/usage",label:"Usage guidelines"},{href:"https://carbondesignsystem.com/elements/motion/overview/",label:"Carbon motion overview"}],blocks:[{story:s},{description:"When using `Cascade` with  grid support its important that you follow the example code structure and provide the rows and columns. The component will assume this structure and add the appropriate CSS classes to the columns.",story:a}]}),"DocsPage");l.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const E={title:"Utilities/Cascade",component:n,tags:["autodocs"],parameters:{layout:"fullscreen",styles:u,docs:{page:l}}},b=t(o=>e.createElement(n,{...o},e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"}),e.createElement("div",{className:"box"})),"DefaultTemplate"),g=t(o=>{const r=t(()=>{const c=[];for(let i=0;i<4;i++)c.push(e.createElement(p,{lg:4},e.createElement("div",{className:"grid-box"})));return c},"getBoxes");return e.createElement(n,{...o},r(),r())},"GridTemplate"),s=b.bind({});s.args={};const a=g.bind({});a.args={grid:!0};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
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
}`,...a.parameters?.docs?.source}}};const k=["WithoutGrid","WithGrid"];export{a as WithGrid,s as WithoutGrid,k as __namedExportsOrder,E as default};
//# sourceMappingURL=Cascade.stories-Zr1hDXKp.js.map
