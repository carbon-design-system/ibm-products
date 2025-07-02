import{e as i}from"./index-DtHxqM--.js";import{a}from"./index-B-lxVbXh.js";import{d as T}from"./index-4poXP75K.js";import{j as e}from"./index-DgLvjnYm.js";import{useMDXComponents as x}from"./index-CseD6FCQ.js";import"./index-BoUQZI5K.js";import{I as w,a as C,b as M}from"./InlineTipLink-4pT_9jrx.js";import{a as l,C as y}from"./index-BwG5U4EM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CtRu48qb.js";import"./index-CiYgQLeJ.js";import"./preview-DPD1RCF5.js";import"./iframe-Chm5YKQf.js";import"./DocsRenderer-CFRXHY34-Bv3MrXpg.js";import"./client-CZTHzaKS.js";import"./settings-Bzj6EGPa.js";import"./events-CdfZZS3f.js";import"./index-2cTe6Fdx.js";import"./devtools-B69Kc3qg.js";import"./uuidv4-BN2rGLQG.js";import"./bucket-9-BIeYAPRu.js";import"./Link-PvdHJXrE.js";import"./bucket-10-CJixWMOF.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";function c(t){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...x(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"inlinetip",children:"InlineTip"}),`
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
`,e.jsx(n.p,{children:"Inline tips are messages embedded within other components that provide an ambient way to deliver learning content without distracting the user from their flow."}),`
`,e.jsx(n.h2,{id:"example-usage",children:"Example usage"}),`
`,e.jsx(n.h3,{id:"inline-tip",children:"Inline tip"}),`
`,e.jsx(l,{of:r}),`
`,e.jsx(n.h3,{id:"inline-tip-narrow",children:"Inline tip narrow"}),`
`,e.jsx(l,{of:o}),`
`,e.jsx(n.h2,{id:"code-sample",children:"Code sample"}),`
`,e.jsx(n.h3,{id:"stackblitz-example-with-animated-media",children:"Stackblitz example with animated media"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/examples/carbon-for-ibm-products/InlineTipWithAnimatedMedia",rel:"nofollow",children:e.jsx(n.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Example with animated media"})})}),`
`,e.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(y,{})]})}function v(t={}){const{wrapper:n}={...x(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(c,{...t})}):c(t)}const E=".storybook--inline-tip-wide{margin-block-start:2rem;max-inline-size:784px}.storybook--inline-tip-narrow{margin-block-start:2rem;max-inline-size:348px}",L=""+new URL("inline-tip-image-Xi2Ah9yk.png",import.meta.url).href,ne={title:"Experimental/Onboarding/InlineTip",component:w,tags:["autodocs","Onboarding"],parameters:{styles:E,layout:"padded",docs:{page:v}},argTypes:{action:{options:["None","<InlineTipButton>","<InlineTipLink>"],control:{type:"radio"}},renderMedia:{options:["None","Render a static image"],control:{type:"radio"}},narrow:{control:{type:null}}}},f={children:i.createElement("ul",null,i.createElement("li",null,"Use ",i.createElement("b",null,"case-specific")," content that explains the concept or adds context."),i.createElement("li",null,"Use case-specific ",i.createElement("i",null,"content that")," explains the concept or adds context."),i.createElement("li",null,"Use case-specific content that explains the concept or adds context.")),closeIconDescription:"Close",collapseButtonLabel:"Read less",collapsible:!1,action:"None",expandButtonLabel:"Read more",renderMedia:"None",onClick:()=>{a("Clicked the tertiary button")()},onClose:()=>{a("Clicked the close button")()},title:"Use case-specific heading",withLeftGutter:!1},g=t=>{const{renderMedia:n,narrow:b,action:k}=t,j=function(){switch(n){case"Render a static image":return()=>i.createElement("img",{alt:"",src:L});default:return null}}(),I=function(){switch(k){case"<InlineTipButton>":return i.createElement(M,{onClick:()=>{a("Clicked the action button")()}},"Click me");case"<InlineTipLink>":return i.createElement(C,{href:"https://www.ibm.com",onClick:()=>{a("Clicked the link")()},target:"_blank"},"Learn more");default:return null}}();return i.createElement("div",{className:T([b?"storybook--inline-tip-narrow":"storybook--inline-tip-wide"])},i.createElement(w,{...t,renderMedia:j,action:I}))},r=g.bind({});r.args={narrow:!1,...f};const o=g.bind({});o.args={narrow:!0,...f};var s,d,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
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
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,h,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(u=(h=o.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const ie=["inlineTip","inlineTipNarrow"];export{ie as __namedExportsOrder,ne as default,r as inlineTip,o as inlineTipNarrow};
