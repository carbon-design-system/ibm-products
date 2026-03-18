var b=Object.defineProperty;var r=(i,e)=>b(i,"name",{value:e,configurable:!0});import{j as n,aA as c,aB as k,e as t,c as f}from"./iframe-DhIv2Cz2.js";import{useMDXComponents as d}from"./index-CqKVgfqi.js";import{I as p,a as I,b as j}from"./InlineTipLink-Bcu544eG.js";import"./preload-helper-Cc2_yIPf.js";import"./index-4j00D-3u.js";import"./devtools-KpiUTsjr.js";import"./uuidv4-Fbcg8Vng.js";import"./bucket-10-CR9aY5BR.js";import"./Link-CWTaGkXd.js";function s(i){const e={a:"a",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...d(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"inlinetip",children:"InlineTip"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/inline-tip/usage/",rel:"nofollow",children:"Usage guidelines"})}),`
`,n.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#overview",children:"Overview"})}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"#example-usage",children:"Example usage"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#inline-tip",children:"Inline tip"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#inline-tip-narrow",children:"Inline tip narrow"})}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"#coded-examples",children:"Coded examples"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#stackblitz-example-with-animated-media",children:"Stackblitz example with animated media"})}),`
`]}),`
`]}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsx(e.p,{children:`Inline tips are messages embedded within other components that provide an
ambient way to deliver learning content without distracting the user from their
flow.`}),`
`,n.jsx(e.h2,{id:"example-usage",children:"Example usage"}),`
`,n.jsx(e.h3,{id:"inline-tip",children:"Inline tip"}),`
`,n.jsx(c,{of:a}),`
`,n.jsx(e.h3,{id:"inline-tip-narrow",children:"Inline tip narrow"}),`
`,n.jsx(c,{of:o}),`
`,n.jsx(e.h2,{id:"code-sample",children:"Code sample"}),`
`,n.jsx(e.h3,{id:"stackblitz-example-with-animated-media",children:"Stackblitz example with animated media"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/examples/carbon-for-ibm-products/InlineTipWithAnimatedMedia",rel:"nofollow",children:n.jsx(e.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Example with animated media"})})}),`
`,n.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,n.jsx(k,{})]})}r(s,"_createMdxContent");function T(i={}){const{wrapper:e}={...d(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}r(T,"MDXContent");const C=".storybook--inline-tip-wide{margin-block-start:2rem;max-inline-size:784px}.storybook--inline-tip-narrow{margin-block-start:2rem;max-inline-size:348px}",M=""+new URL("sample-image-Xi2Ah9yk.png",import.meta.url).href,{action:l}=__STORYBOOK_MODULE_ACTIONS__,R={title:"Preview Candidate/Onboarding/InlineTip",component:p,tags:["autodocs","Onboarding"],parameters:{styles:C,layout:"padded",docs:{page:T}},argTypes:{action:{options:["None","<InlineTipButton>","<InlineTipLink>"],control:{type:"radio"}},renderMedia:{options:["None","Render a static image"],control:{type:"radio"}},narrow:{control:{type:null}}}},m={children:t.createElement("ul",null,t.createElement("li",null,"Use ",t.createElement("b",null,"case-specific")," content that explains the concept or adds context."),t.createElement("li",null,"Use case-specific ",t.createElement("i",null,"content that")," explains the concept or adds context."),t.createElement("li",null,"Use case-specific content that explains the concept or adds context.")),closeIconDescription:"Close",collapseButtonLabel:"Read less",collapsible:!1,action:"None",expandButtonLabel:"Read more",renderMedia:"None",onClick:r(()=>{l("Clicked the tertiary button")()},"onClick"),onClose:r(()=>{l("Clicked the close button")()},"onClose"),title:"Use case-specific heading",withLeftGutter:!1},h=r(i=>{const{renderMedia:e,narrow:u,action:x}=i,w=(function(){return e==="Render a static image"?()=>t.createElement("img",{alt:"",src:M}):null})(),g=(function(){switch(x){case"<InlineTipButton>":return t.createElement(j,{onClick:r(()=>{l("Clicked the action button")()},"onClick")},"Click me");case"<InlineTipLink>":return t.createElement(I,{href:"https://www.ibm.com",onClick:r(()=>{l("Clicked the link")()},"onClick"),target:"_blank"},"Learn more");default:return null}})();return t.createElement("div",{className:f([u?"storybook--inline-tip-narrow":"storybook--inline-tip-wide"])},t.createElement(p,{...i,renderMedia:w,action:g}))},"Template"),a=h.bind({});a.args={narrow:!1,...m};const o=h.bind({});o.args={narrow:!0,...m};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
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
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
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
}`,...o.parameters?.docs?.source}}};const U=["inlineTip","inlineTipNarrow"];export{U as __namedExportsOrder,R as default,a as inlineTip,o as inlineTipNarrow};
//# sourceMappingURL=InlineTip.stories-zPn1LSdY.js.map
