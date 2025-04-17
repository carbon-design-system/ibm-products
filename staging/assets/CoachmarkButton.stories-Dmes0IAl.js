import{e as n}from"./index-DzvNrmz8.js";import{g as p}from"./story-helper-DPPXKxdX.js";import{j as e}from"./index-Cg1swjps.js";import{useMDXComponents as d}from"./index-B7BkHM3Y.js";import"./index-52KsHLmw.js";import{C as h}from"./CoachmarkButton-B8kSi6u3.js";import{C}from"./Coachmark-CPfriO0g.js";import{b as u,d as g,e as x}from"./CoachmarkOverlayElements-D3CRzFxN.js";import{Q as k}from"./settings-DbzZchXt.js";import{a as b,j as f,C as j}from"./index-C_-_U5WJ.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-5As4T26e.js";import"./index-Bv4JGo1_.js";import"./preview-DORzmaO-.js";import"./iframe-CBXui-ld.js";import"./DocsRenderer-CFRXHY34-DTsNfGzG.js";import"./client-fwTTGz69.js";import"./devtools-CskDVa8y.js";import"./index-P6UCShJt.js";import"./useIsomorphicEffect-l5L8NYko.js";import"./uuidv4-BN2rGLQG.js";import"./bucket-5-CQjaVkio.js";import"./clamp-CsXXRQhr.js";import"./Carousel-Cc3QlNR6.js";import"./events-OVwOsPzJ.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";function t(r){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...d(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{id:"coachmarkbutton",children:"CoachmarkButton"}),`
`,e.jsx(o.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(o.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(o.p,{children:[`CoachmarkButton components use a ghost variant Carbon button specifically
designed to be used in the target prop of a Coachmark component
`,e.jsx(o.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/coachmark/usage#floating",rel:"nofollow",children:"floating"}),`
variant.`]}),`
`,e.jsx(o.h2,{id:"example-usage",children:"Example usage"}),`
`,`
`,e.jsx(b,{children:e.jsx("div",{className:"CoachmarkBaseExampleUsage",children:e.jsx(f,{of:a})})}),`
`,e.jsx(o.h2,{id:"code-sample",children:"Code sample"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`<Coachmark
  theme={'light'}
  target={
    <CoachmarkButton
      kind="tertiary"
      label="Show information"
      size="md"
      renderIcon={Crossroads}
      label="Click Me"
      className="myButton"
    />
  }
>
  ...
</Coachmark>
`})}),`
`,e.jsx(o.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(j,{})]})}function y(r={}){const{wrapper:o}={...d(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(t,{...r})}):t(r)}const v=".CoachmarkBaseExampleUsage{position:relative;display:inline-block;box-sizing:border-box;padding:1rem;margin-inline-start:50%;max-block-size:100%;transform:translate(-50%)}",Z={title:"Experimental/Onboarding/Coachmark/Coachmark elements/CoachmarkButton",component:h,tags:["autodocs"],parameters:{styles:v,docs:{page:y}}},E=r=>{const o=p();return n.createElement(C,{align:"bottom",overlayKind:u.FLOATING,target:n.createElement(h,{kind:"tertiary",label:"Show information",size:"md",renderIcon:k,...r}),theme:o},n.createElement(g,{closeButtonLabel:"Done"},n.createElement(x,{title:"Hello World",description:"this is a description test"})))},a=E.bind({});a.args={label:"Click Me",className:"myButton"};var s,i,m,c,l;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  const theme = getSelectedCarbonTheme();
  return <Coachmark align={'bottom'} overlayKind={COACHMARK_OVERLAY_KIND.FLOATING} target={<CoachmarkButton kind="tertiary" label="Show information" size="md" renderIcon={Crossroads} {...args} />} theme={theme}>
      <CoachmarkOverlayElements closeButtonLabel="Done">
        <CoachmarkOverlayElement title="Hello World" description="this is a description test" />
      </CoachmarkOverlayElements>
    </Coachmark>;
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.description}}};const $=["coachmarkButton"];export{$ as __namedExportsOrder,a as coachmarkButton,Z as default};
