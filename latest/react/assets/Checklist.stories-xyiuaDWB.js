var d=Object.defineProperty;var a=(e,l)=>d(e,"name",{value:l,configurable:!0});import{e as n,S as k,aM as p}from"./iframe-MbX6O_l3.js";import{C as r}from"./Checklist-u35pX19i.js";import{T as o}from"./TruncatedText-BlkEtOS2.js";import"./preload-helper-Cc2_yIPf.js";import"./index-BIzQX_SE.js";import"./index-K1aIj0RU.js";import"./devtools-UxvtFMDS.js";import"./clamp-BCozvAmP.js";import"./bucket-10-CMmvkFRw.js";import"./bucket-20-BbNq9mQU.js";import"./uuidv4-Fbcg8Vng.js";const h=".checklist-stories__viewport{max-inline-size:20rem;min-inline-size:20rem}",c=a(()=>n.createElement(k,{altGuidelinesHref:[{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/checklist/usage/",label:"Usage guidelines"}],blocks:[{story:i},{story:s}]}),"DocsPage");c.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:t}=__STORYBOOK_MODULE_ACTIONS__,g="checklist-stories",b=[{title:"Section label",tasks:[{kind:"checked",label:"Task name",url:"https://www.ibm.com/",onClick:a(e=>{t("task")(e)},"onClick")},{kind:"indeterminate",label:"Task name",onClick:a(e=>{t("task")(e)},"onClick")},{kind:"unchecked",label:"Task name",guid:"6B29FC40-CA47-1067-B31D-00DD010662DA",onClick:a(e=>{t("task")(e)},"onClick")}]}],O={title:"Components/Onboarding/Checklist",component:r,tags:["autodocs","Onboarding"],argTypes:{taskLists:{table:{type:{detail:`[{
            title: string,
            tasks: [{
              kind: 'unchecked' | 'indeterminate' | 'checked' | 'disabled' | 'error',
              label: string,
              onClick: func,
            }]
          }]`}}},theme:{control:{type:null},table:{defaultValue:{summary:"light"},type:{summary:"'light' | 'dark'"}}}},parameters:{styles:h,docs:{page:c},layout:"padded"}},m=a(e=>{const l=p();return n.createElement("div",{className:`${g}__viewport`},n.createElement(r,{...e,theme:l}))},"Template"),i=m.bind({});i.args={onClickViewAll:a(()=>{t("view all")()},"onClickViewAll"),onToggle:a(e=>{t(`toggle ${e?"open":"closed"}`)()},"onToggle"),chartValue:.15,chartLabel:n.createElement(o,{autoAlign:!0,align:"bottom",id:"example-id-1",lines:2,type:"tooltip",value:"15% complete"}),taskLists:b,title:n.createElement(o,{autoAlign:!0,align:"bottom",id:"example-id-2",lines:2,type:"tooltip",value:"A long title running over the lines to show truncation and tooltips"}),viewAllLabel:"View all (10)"};const s=m.bind({});s.storyName="Task states";s.args={taskLists:[{title:"Unchecked state",tasks:[{kind:"unchecked",label:"Task name",onClick:t("task")},{kind:"unchecked",label:"Task name"}]},{title:"Indeterminate state",tasks:[{kind:"indeterminate",label:"Task name",onClick:t("task")},{kind:"indeterminate",label:"Task name"}]},{title:"Checked state",tasks:[{kind:"checked",label:"Task name",onClick:t("task")},{kind:"checked",label:"Task name"}]},{title:"Disabled state",tasks:[{kind:"disabled",label:"Task name"},{kind:"disabled",label:"Task name",onClick:t("task")}]},{title:"Error state",tasks:[{kind:"error",label:"Task name"},{kind:"error",label:"Task name",onClick:t("task")}]}]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => {
  const theme = getSelectedCarbonTheme();
  return <div className={\`\${storyClass}__viewport\`}>
      <Checklist {...args} theme={theme} />
    </div>;
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
  const theme = getSelectedCarbonTheme();
  return <div className={\`\${storyClass}__viewport\`}>
      <Checklist {...args} theme={theme} />
    </div>;
}`,...s.parameters?.docs?.source}}};const x=["checklist","taskStates"];export{x as __namedExportsOrder,i as checklist,O as default,s as taskStates};
//# sourceMappingURL=Checklist.stories-xyiuaDWB.js.map
