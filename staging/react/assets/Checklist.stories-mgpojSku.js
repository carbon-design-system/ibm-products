import{e as n,S as c,eq as k}from"./iframe-BfCV3bOI.js";import{C as i}from"./Checklist-Bqsn1BGb.js";import"./index-Rp0dLXSw.js";import"./devtools-mGs0wnY2.js";import"./clamp-CsXXRQhr.js";import"./bucket-9-CqiTmSYY.js";import"./bucket-19-DXGPPlEX.js";import"./uuidv4-BN2rGLQG.js";const d=".checklist-stories__viewport{max-inline-size:20rem;min-inline-size:20rem}",l=()=>n.createElement(c,{altGuidelinesHref:[{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/checklist/usage/",label:"Usage guidelines"}],blocks:[{story:a},{story:s}]});l.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:e}=__STORYBOOK_MODULE_ACTIONS__,m="checklist-stories",h=[{title:"Section label",tasks:[{kind:"checked",label:"Task name",url:"https://www.ibm.com/",onClick:t=>{e("task")(t)}},{kind:"indeterminate",label:"Task name",onClick:t=>{e("task")(t)}},{kind:"unchecked",label:"Task name",guid:"6B29FC40-CA47-1067-B31D-00DD010662DA",onClick:t=>{e("task")(t)}}]}],S={title:"Components/Onboarding/Checklist",component:i,tags:["autodocs","Onboarding"],argTypes:{taskLists:{table:{type:{detail:`[{
            title: string,
            tasks: [{
              kind: 'unchecked' | 'indeterminate' | 'checked' | 'disabled' | 'error',
              label: string,
              onClick: func,
            }]
          }]`}}},theme:{control:{type:null},table:{defaultValue:{summary:"light"},type:{summary:"'light' | 'dark'"}}}},parameters:{styles:d,docs:{page:l},layout:"padded"}},r=t=>{const o=k();return n.createElement("div",{className:`${m}__viewport`},n.createElement(i,{...t,theme:o}))},a=r.bind({});a.args={onClickViewAll:()=>{e("view all")()},onToggle:t=>{e(`toggle ${t?"open":"closed"}`)()},chartValue:.15,chartLabel:"15% complete",taskLists:h,title:"Checklist header",viewAllLabel:"View all (10)"};const s=r.bind({});s.storyName="Task states";s.args={taskLists:[{title:"Unchecked state",tasks:[{kind:"unchecked",label:"Task name",onClick:e("task")},{kind:"unchecked",label:"Task name"}]},{title:"Indeterminate state",tasks:[{kind:"indeterminate",label:"Task name",onClick:e("task")},{kind:"indeterminate",label:"Task name"}]},{title:"Checked state",tasks:[{kind:"checked",label:"Task name",onClick:e("task")},{kind:"checked",label:"Task name"}]},{title:"Disabled state",tasks:[{kind:"disabled",label:"Task name"},{kind:"disabled",label:"Task name",onClick:e("task")}]},{title:"Error state",tasks:[{kind:"error",label:"Task name"},{kind:"error",label:"Task name",onClick:e("task")}]}]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  const theme = getSelectedCarbonTheme();
  return <div className={\`\${storyClass}__viewport\`}>
      <Checklist {...args} theme={theme} />
    </div>;
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
  const theme = getSelectedCarbonTheme();
  return <div className={\`\${storyClass}__viewport\`}>
      <Checklist {...args} theme={theme} />
    </div>;
}`,...s.parameters?.docs?.source}}};const v=["checklist","taskStates"];export{v as __namedExportsOrder,a as checklist,S as default,s as taskStates};
