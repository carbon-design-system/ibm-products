var d=Object.defineProperty;var a=(e,l)=>d(e,"name",{value:l,configurable:!0});import{e as i,S as k,aQ as p}from"./iframe-DU3fWsEq.js";import{C as r}from"./Checklist-DR8Co22o.js";import{T as o}from"./TruncatedText-UBmuRnAk.js";import"./preload-helper-Cc2_yIPf.js";import"./index-CzJj9-T5.js";import"./devtools-D1O-44XN.js";import"./clamp-BCozvAmP.js";import"./bucket-10-B-hm18Zs.js";import"./bucket-20-CmByzEsl.js";import"./uuidv4-Fbcg8Vng.js";const h=".checklist-stories__viewport{max-inline-size:20rem;min-inline-size:20rem}",c=a(()=>i.createElement(k,{altGuidelinesHref:[{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/checklist/usage/",label:"Usage guidelines"}],blocks:[{story:n},{story:s}]}),"DocsPage");c.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:t}=__STORYBOOK_MODULE_ACTIONS__,g="checklist-stories",b=[{title:"Section label",tasks:[{kind:"checked",label:"Task name",url:"https://www.ibm.com/",onClick:a(e=>{t("task")(e)},"onClick")},{kind:"indeterminate",label:"Task name",onClick:a(e=>{t("task")(e)},"onClick")},{kind:"unchecked",label:"Task name",guid:"6B29FC40-CA47-1067-B31D-00DD010662DA",onClick:a(e=>{t("task")(e)},"onClick")}]}],E={title:"Components/Onboarding/Checklist",component:r,tags:["autodocs","Onboarding"],argTypes:{taskLists:{table:{type:{detail:`[{
            title: string,
            tasks: [{
              kind: 'unchecked' | 'indeterminate' | 'checked' | 'disabled' | 'error',
              label: string,
              onClick: func,
            }]
          }]`}}},theme:{control:{type:null},table:{defaultValue:{summary:"light"},type:{summary:"'light' | 'dark'"}}}},parameters:{styles:h,docs:{page:c},layout:"padded"}},m=a(e=>{const l=p();return i.createElement("div",{className:`${g}__viewport`},i.createElement(r,{...e,theme:l}))},"Template"),n=m.bind({});n.args={onClickViewAll:a(()=>{t("view all")()},"onClickViewAll"),onToggle:a(e=>{t(`toggle ${e?"open":"closed"}`)()},"onToggle"),chartValue:.15,chartLabel:i.createElement(o,{autoAlign:!0,align:"bottom",id:"example-id-1",lines:2,type:"tooltip",value:"15% complete"}),taskLists:b,title:i.createElement(o,{autoAlign:!0,align:"bottom",id:"example-id-2",lines:2,type:"tooltip",value:"A long title running over the lines to show truncation and tooltips"}),viewAllLabel:"View all (10)"};const s=m.bind({});s.storyName="Task states";s.args={taskLists:[{title:"Unchecked state",tasks:[{kind:"unchecked",label:"Task name",onClick:t("task")},{kind:"unchecked",label:"Task name"}]},{title:"Indeterminate state",tasks:[{kind:"indeterminate",label:"Task name",onClick:t("task")},{kind:"indeterminate",label:"Task name"}]},{title:"Checked state",tasks:[{kind:"checked",label:"Task name",onClick:t("task")},{kind:"checked",label:"Task name"}]},{title:"Disabled state",tasks:[{kind:"disabled",label:"Task name"},{kind:"disabled",label:"Task name",onClick:t("task")}]},{title:"Error state",tasks:[{kind:"error",label:"Task name"},{kind:"error",label:"Task name",onClick:t("task")}]}]};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
  const theme = getSelectedCarbonTheme();
  return <div className={\`\${storyClass}__viewport\`}>
      <Checklist {...args} theme={theme} />
    </div>;
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
  const theme = getSelectedCarbonTheme();
  return <div className={\`\${storyClass}__viewport\`}>
      <Checklist {...args} theme={theme} />
    </div>;
}`,...s.parameters?.docs?.source}}};const O=["checklist","taskStates"];export{O as __namedExportsOrder,n as checklist,E as default,s as taskStates};
//# sourceMappingURL=Checklist.stories-Dblb4uy7.js.map
