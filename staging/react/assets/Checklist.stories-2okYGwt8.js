import{e as n,S as m,aK as d}from"./iframe-BbTYfv9-.js";import{C as l}from"./Checklist-B2pFXVFI.js";import{T as i}from"./TruncatedText-C1WRpy-Y.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DADqHIn3.js";import"./devtools-KS_k4bKc.js";import"./clamp-CsXXRQhr.js";import"./bucket-10-Cya3ufu0.js";import"./bucket-19-DKyp3qQO.js";import"./uuidv4-BN2rGLQG.js";const k=".checklist-stories__viewport{max-inline-size:20rem;min-inline-size:20rem}",o=()=>n.createElement(m,{altGuidelinesHref:[{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/checklist/usage/",label:"Usage guidelines"}],blocks:[{story:s},{story:a}]});o.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:e}=__STORYBOOK_MODULE_ACTIONS__,p="checklist-stories",h=[{title:"Section label",tasks:[{kind:"checked",label:"Task name",url:"https://www.ibm.com/",onClick:t=>{e("task")(t)}},{kind:"indeterminate",label:"Task name",onClick:t=>{e("task")(t)}},{kind:"unchecked",label:"Task name",guid:"6B29FC40-CA47-1067-B31D-00DD010662DA",onClick:t=>{e("task")(t)}}]}],f={title:"Components/Onboarding/Checklist",component:l,tags:["autodocs","Onboarding"],argTypes:{taskLists:{table:{type:{detail:`[{
            title: string,
            tasks: [{
              kind: 'unchecked' | 'indeterminate' | 'checked' | 'disabled' | 'error',
              label: string,
              onClick: func,
            }]
          }]`}}},theme:{control:{type:null},table:{defaultValue:{summary:"light"},type:{summary:"'light' | 'dark'"}}}},parameters:{styles:k,docs:{page:o},layout:"padded"}},r=t=>{const c=d();return n.createElement("div",{className:`${p}__viewport`},n.createElement(l,{...t,theme:c}))},s=r.bind({});s.args={onClickViewAll:()=>{e("view all")()},onToggle:t=>{e(`toggle ${t?"open":"closed"}`)()},chartValue:.15,chartLabel:n.createElement(i,{autoAlign:!0,align:"bottom",id:"example-id-1",lines:2,type:"tooltip",value:"15% complete"}),taskLists:h,title:n.createElement(i,{autoAlign:!0,align:"bottom",id:"example-id-2",lines:2,type:"tooltip",value:"A long title running over the lines to show truncation and tooltips"}),viewAllLabel:"View all (10)"};const a=r.bind({});a.storyName="Task states";a.args={taskLists:[{title:"Unchecked state",tasks:[{kind:"unchecked",label:"Task name",onClick:e("task")},{kind:"unchecked",label:"Task name"}]},{title:"Indeterminate state",tasks:[{kind:"indeterminate",label:"Task name",onClick:e("task")},{kind:"indeterminate",label:"Task name"}]},{title:"Checked state",tasks:[{kind:"checked",label:"Task name",onClick:e("task")},{kind:"checked",label:"Task name"}]},{title:"Disabled state",tasks:[{kind:"disabled",label:"Task name"},{kind:"disabled",label:"Task name",onClick:e("task")}]},{title:"Error state",tasks:[{kind:"error",label:"Task name"},{kind:"error",label:"Task name",onClick:e("task")}]}]};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
  const theme = getSelectedCarbonTheme();
  return <div className={\`\${storyClass}__viewport\`}>
      <Checklist {...args} theme={theme} />
    </div>;
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  const theme = getSelectedCarbonTheme();
  return <div className={\`\${storyClass}__viewport\`}>
      <Checklist {...args} theme={theme} />
    </div>;
}`,...a.parameters?.docs?.source}}};const D=["checklist","taskStates"];export{D as __namedExportsOrder,s as checklist,f as default,a as taskStates};
//# sourceMappingURL=Checklist.stories-2okYGwt8.js.map
