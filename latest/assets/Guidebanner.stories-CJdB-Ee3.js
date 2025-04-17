import{e}from"./index-DzvNrmz8.js";import{a as s}from"./index-B-lxVbXh.js";import{S as k}from"./StoryDocsPage-D9_Ykp8-.js";import{G as y,a as t,b as U,c as C}from"./GuidebannerElementLink-BHqVmvS6.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./v4-CtRu48qb.js";import"./index-5As4T26e.js";import"./index-Cg1swjps.js";import"./index-Bv4JGo1_.js";import"./index-C_-_U5WJ.js";import"./iframe-CBXui-ld.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";import"./story-helper-DPPXKxdX.js";import"./settings-DbzZchXt.js";import"./events-OVwOsPzJ.js";import"./index-P6UCShJt.js";import"./index-Cwv8QpiQ.js";import"./devtools-CskDVa8y.js";import"./uuidv4-BN2rGLQG.js";import"./Carousel-Cc3QlNR6.js";import"./useIsomorphicEffect-l5L8NYko.js";import"./bucket-2-CdrYWKja.js";import"./bucket-9-DBhRplFe.js";import"./Link-Dprirwoi.js";const S="#storybook-root{overflow-x:hidden}@supports (overflow-inline: hidden){#storybook-root{overflow-inline:hidden}}.non-linear-reading-stories__viewport{margin:0}",G=()=>e.createElement(k,{altGuidelinesHref:[{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/guide-banner/usage/",label:"Guide banner usage guidelines"}],blocks:[{story:n},{story:a},{story:c}]});G.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const N="guidebanner-stories",te={title:"Experimental/Onboarding/Guidebanner",component:y,tags:["autodocs"],parameters:{styles:S,layout:"fullscreen",docs:{page:G}},argTypes:{children:{table:{disable:!0}},theme:{table:{disable:!0}}}},o={onClose:()=>s("onClose()")(),title:"Page-related heading that can stand on its own",withLeftGutter:!1},l=()=>e.createElement(U,{type:"primary",onClick:()=>{s('GuidebannerElementButton.onClick() (type="primary")')()}},"Show Me"),r=()=>e.createElement(U,{onClick:()=>{s("GuidebannerElementButton.onClick()")()}},"Click me"),i=()=>e.createElement(C,{href:"https://www.ibm.com",target:"_blank",onClick:()=>{s("GuidebannerElementLink.onClick()")()}},"Learn more"),d=({children:w,...v})=>{const _=w.props.children;return e.createElement("div",{className:`${N}__viewport`},e.createElement(y,{...v},_))},n=d.bind({});n.args={...o,collapsible:!0,children:e.createElement(e.Fragment,null,e.createElement(t,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(l,null)}),e.createElement(t,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(r,null)}),e.createElement(t,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(r,null)}),e.createElement(t,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(i,null)}),e.createElement(t,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(i,null)}))};const a=d.bind({});a.args={...o,children:e.createElement(e.Fragment,null,e.createElement(t,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(l,null)}),e.createElement(t,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(r,null)}),e.createElement(t,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(r,null)}),e.createElement(t,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(i,null)}),e.createElement(t,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(i,null)}))};const c=d.bind({});c.args={...o,children:e.createElement(e.Fragment,null,e.createElement(t,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(l,null)}),e.createElement(t,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(i,null)}))};var p,h,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`({
  children,
  ...rest
}) => {
  // Normally GuidebannerElement are listed directly as children of Guidebanner,
  // but as a story we have to wrap the JSX in a React.Fragment.
  // To feed them here, we point to the list of GuidebannerElements directly.
  const childArray = children.props.children;
  return <div className={\`\${storyClass}__viewport\`}>
      <Guidebanner {...rest}>{childArray}</Guidebanner>
    </div>;
}`,...(m=(h=n.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var u,g,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`({
  children,
  ...rest
}) => {
  // Normally GuidebannerElement are listed directly as children of Guidebanner,
  // but as a story we have to wrap the JSX in a React.Fragment.
  // To feed them here, we point to the list of GuidebannerElements directly.
  const childArray = children.props.children;
  return <div className={\`\${storyClass}__viewport\`}>
      <Guidebanner {...rest}>{childArray}</Guidebanner>
    </div>;
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,E,x;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`({
  children,
  ...rest
}) => {
  // Normally GuidebannerElement are listed directly as children of Guidebanner,
  // but as a story we have to wrap the JSX in a React.Fragment.
  // To feed them here, we point to the list of GuidebannerElements directly.
  const childArray = children.props.children;
  return <div className={\`\${storyClass}__viewport\`}>
      <Guidebanner {...rest}>{childArray}</Guidebanner>
    </div>;
}`,...(x=(E=c.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};const ne=["collapsible","manyInsights","fewInsights"];export{ne as __namedExportsOrder,n as collapsible,te as default,c as fewInsights,a as manyInsights};
