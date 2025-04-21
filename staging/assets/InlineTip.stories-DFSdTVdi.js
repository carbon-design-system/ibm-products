import{e}from"./index-DzvNrmz8.js";import{a as i}from"./index-B-lxVbXh.js";import{d as I}from"./index-5As4T26e.js";import{S as T}from"./StoryDocsPage-DLdK_Krg.js";import{I as m,a as y,b as x}from"./InlineTipLink-4QhTjoiU.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./v4-CtRu48qb.js";import"./index-Cg1swjps.js";import"./index-Bv4JGo1_.js";import"./index-CzcKhd7Q.js";import"./iframe-Czcp_UX8.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";import"./story-helper-DPPXKxdX.js";import"./settings-CP9zVSjJ.js";import"./events-OVwOsPzJ.js";import"./index-P6UCShJt.js";import"./index-pOgDNIY8.js";import"./devtools-B_dijMH7.js";import"./uuidv4-BN2rGLQG.js";import"./bucket-9-DBhRplFe.js";import"./Link-Dprirwoi.js";import"./bucket-10-BLMdRzi0.js";const C=".storybook--inline-tip-wide{margin-block-start:2rem;max-inline-size:784px}.storybook--inline-tip-narrow{margin-block-start:2rem;max-inline-size:348px}",M=""+new URL("sample-image-Xi2Ah9yk.png",import.meta.url).href,d=()=>e.createElement(T,{altGuidelinesHref:[{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/inline-tip/usage/",label:"Inline tip usage guidelines"}],blocks:[{story:t},{story:n},{title:"Stackblitz example with Animated Media",description:`[![Example with Animated media](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/examples/carbon-for-ibm-products/InlineTipWithAnimatedMedia)
`}]});d.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const Q={title:"Experimental/Onboarding/Inline tip/InlineTip",component:m,tags:["autodocs"],parameters:{styles:C,layout:"padded",docs:{page:d}},argTypes:{action:{options:["None","<InlineTipButton>","<InlineTipLink>"],control:{type:"radio"}},renderMedia:{options:["None","Render a static image"],control:{type:"radio"}},narrow:{control:{type:null}}}},u={children:e.createElement("ul",null,e.createElement("li",null,"Use ",e.createElement("b",null,"case-specific")," content that explains the concept or adds context."),e.createElement("li",null,"Use case-specific ",e.createElement("i",null,"content that")," explains the concept or adds context."),e.createElement("li",null,"Use case-specific content that explains the concept or adds context.")),closeIconDescription:"Close",collapseButtonLabel:"Read less",collapsible:!1,action:"None",expandButtonLabel:"Read more",renderMedia:"None",onClick:()=>{i("Clicked the tertiary button")()},onClose:()=>{i("Clicked the close button")()},title:"Use case-specific heading",withLeftGutter:!1},k=o=>{const{renderMedia:b,narrow:g,action:h}=o,w=function(){switch(b){case"Render a static image":return()=>e.createElement("img",{alt:"",src:M});default:return null}}(),f=function(){switch(h){case"<InlineTipButton>":return e.createElement(x,{onClick:()=>{i("Clicked the action button")()}},"Click me");case"<InlineTipLink>":return e.createElement(y,{href:"https://www.ibm.com",onClick:()=>{i("Clicked the link")()},target:"_blank"},"Learn more");default:return null}}();return e.createElement("div",{className:I([g?"storybook--inline-tip-narrow":"storybook--inline-tip-wide"])},e.createElement(m,{...o,renderMedia:w,action:f}))},t=k.bind({});t.args={narrow:!1,...u};const n=k.bind({});n.args={narrow:!0,...u};var r,a,c;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  const {
    renderMedia,
    narrow,
    action: componentAction
  } = args;
  const selectedMedia = function () {
    switch (renderMedia) {
      case 'Render a static image':
        return () => <img alt="" src={InlineTipImage} />;
      default:
        return null;
    }
  }();
  const selectedAction = function () {
    switch (componentAction) {
      case '<InlineTipButton>':
        return <InlineTipButton onClick={() => {
          action(\`Clicked the action button\`)();
        }}>
            Click me
          </InlineTipButton>;
      case '<InlineTipLink>':
        return <InlineTipLink href="https://www.ibm.com" onClick={() => {
          action('Clicked the link')();
        }} target="_blank">
            Learn more
          </InlineTipLink>;
      default:
        return null;
    }
  }();
  return <div className={cx([narrow ? 'storybook--inline-tip-narrow' : 'storybook--inline-tip-wide'])}>
      <InlineTip {...args} renderMedia={selectedMedia} action={selectedAction} />
    </div>;
}`,...(c=(a=t.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,s,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  const {
    renderMedia,
    narrow,
    action: componentAction
  } = args;
  const selectedMedia = function () {
    switch (renderMedia) {
      case 'Render a static image':
        return () => <img alt="" src={InlineTipImage} />;
      default:
        return null;
    }
  }();
  const selectedAction = function () {
    switch (componentAction) {
      case '<InlineTipButton>':
        return <InlineTipButton onClick={() => {
          action(\`Clicked the action button\`)();
        }}>
            Click me
          </InlineTipButton>;
      case '<InlineTipLink>':
        return <InlineTipLink href="https://www.ibm.com" onClick={() => {
          action('Clicked the link')();
        }} target="_blank">
            Learn more
          </InlineTipLink>;
      default:
        return null;
    }
  }();
  return <div className={cx([narrow ? 'storybook--inline-tip-narrow' : 'storybook--inline-tip-wide'])}>
      <InlineTip {...args} renderMedia={selectedMedia} action={selectedAction} />
    </div>;
}`,...(p=(s=n.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const V=["inlineTip","inlineTipNarrow"];export{V as __namedExportsOrder,Q as default,t as inlineTip,n as inlineTipNarrow};
