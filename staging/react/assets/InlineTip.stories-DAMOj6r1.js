import{j as e,aB as l,aC as g,e as i,c as b}from"./iframe-BBf3bqTv.js";import{useMDXComponents as s}from"./index-BQtCSjrU.js";import{I as d,a as k,b as f}from"./InlineTipLink-PBxDC5iK.js";import"./preload-helper-D9Z9MdNV.js";import"./index-7K8oyqWX.js";import"./devtools-c2gfrTL0.js";import"./uuidv4-BN2rGLQG.js";import"./bucket-9-Ce7lYRrw.js";import"./Link-qk3ncX2u.js";import"./bucket-10-BG8-V5O3.js";function c(t){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"inlinetip",children:"InlineTip"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/inline-tip/usage/",rel:"nofollow",children:"Usage guidelines"})}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#example-usage",children:"Example usage"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#inline-tip",children:"Inline tip"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#inline-tip-narrow",children:"Inline tip narrow"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#coded-examples",children:"Coded examples"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#stackblitz-example-with-animated-media",children:"Stackblitz example with animated media"})}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:`Inline tips are messages embedded within other components that provide an
ambient way to deliver learning content without distracting the user from their
flow.`}),`
`,e.jsx(n.h2,{id:"example-usage",children:"Example usage"}),`
`,e.jsx(n.h3,{id:"inline-tip",children:"Inline tip"}),`
`,e.jsx(l,{of:r}),`
`,e.jsx(n.h3,{id:"inline-tip-narrow",children:"Inline tip narrow"}),`
`,e.jsx(l,{of:o}),`
`,e.jsx(n.h2,{id:"code-sample",children:"Code sample"}),`
`,e.jsx(n.h3,{id:"stackblitz-example-with-animated-media",children:"Stackblitz example with animated media"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/examples/carbon-for-ibm-products/InlineTipWithAnimatedMedia",rel:"nofollow",children:e.jsx(n.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Example with animated media"})})}),`
`,e.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(g,{})]})}function I(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(c,{...t})}):c(t)}const j=".storybook--inline-tip-wide{margin-block-start:2rem;max-inline-size:784px}.storybook--inline-tip-narrow{margin-block-start:2rem;max-inline-size:348px}",T=""+new URL("sample-image-Xi2Ah9yk.png",import.meta.url).href,{action:a}=__STORYBOOK_MODULE_ACTIONS__,O={title:"Preview Candidate/Onboarding/InlineTip",component:d,tags:["autodocs","Onboarding"],parameters:{styles:j,layout:"padded",docs:{page:I}},argTypes:{action:{options:["None","<InlineTipButton>","<InlineTipLink>"],control:{type:"radio"}},renderMedia:{options:["None","Render a static image"],control:{type:"radio"}},narrow:{control:{type:null}}}},p={children:i.createElement("ul",null,i.createElement("li",null,"Use ",i.createElement("b",null,"case-specific")," content that explains the concept or adds context."),i.createElement("li",null,"Use case-specific ",i.createElement("i",null,"content that")," explains the concept or adds context."),i.createElement("li",null,"Use case-specific content that explains the concept or adds context.")),closeIconDescription:"Close",collapseButtonLabel:"Read less",collapsible:!1,action:"None",expandButtonLabel:"Read more",renderMedia:"None",onClick:()=>{a("Clicked the tertiary button")()},onClose:()=>{a("Clicked the close button")()},title:"Use case-specific heading",withLeftGutter:!1},m=t=>{const{renderMedia:n,narrow:h,action:u}=t,x=function(){switch(n){case"Render a static image":return()=>i.createElement("img",{alt:"",src:T});default:return null}}(),w=function(){switch(u){case"<InlineTipButton>":return i.createElement(f,{onClick:()=>{a("Clicked the action button")()}},"Click me");case"<InlineTipLink>":return i.createElement(k,{href:"https://www.ibm.com",onClick:()=>{a("Clicked the link")()},target:"_blank"},"Learn more");default:return null}}();return i.createElement("div",{className:b([h?"storybook--inline-tip-narrow":"storybook--inline-tip-wide"])},i.createElement(d,{...t,renderMedia:x,action:w}))},r=m.bind({});r.args={narrow:!1,...p};const o=m.bind({});o.args={narrow:!0,...p};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
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
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
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
}`,...o.parameters?.docs?.source}}};const z=["inlineTip","inlineTipNarrow"];export{z as __namedExportsOrder,O as default,r as inlineTip,o as inlineTipNarrow};
//# sourceMappingURL=InlineTip.stories-DAMOj6r1.js.map
