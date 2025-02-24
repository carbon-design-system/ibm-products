import{e as n}from"./index-BOZkNhcz.js";import{g as p}from"./story-helper-DEC8H8IF.js";import{j as e,a as C,h as u,C as g}from"./index-KgSg3jcr.js";import{useMDXComponents as d}from"./index-aaDvWpb8.js";import"./DocsRenderer-CFRXHY34-A56J-102.js";import{C as h}from"./CoachmarkButton-CF5nRC_6.js";import{C as x}from"./Coachmark--ucHCM0x.js";import{b as k,C as b,a as f}from"./CoachmarkOverlayElements-BoIbEYJx.js";import{C as j}from"./settings-BYgtfLKl.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index--clQM3eT.js";import"./index-hBZdtWkn.js";import"./index-2uioG_CI.js";import"./iframe--Hb3m1kv.js";import"./index-CO8sV34W.js";import"./index-ogSvIofg.js";import"./react-18-Cs6RDBhU.js";import"./devtools-BSXGZlBP.js";import"./index-YZUn1U4D.js";import"./useIsomorphicEffect-C0ObacuX.js";import"./uuidv4-BN2rGLQG.js";import"./bucket-5-D_VnmO9x.js";import"./clamp-CsXXRQhr.js";import"./SteppedAnimatedMedia-BOC_MZvc.js";import"./lottie-BZLE-Bwx.js";import"./Carousel-CfCT9sHV.js";import"./events-OVwOsPzJ.js";function t(r){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...d(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{id:"coachmarkbutton",children:"CoachmarkButton"}),`
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
`,e.jsx(C,{children:e.jsx("div",{className:"CoachmarkBaseExampleUsage",children:e.jsx(u,{of:a})})}),`
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
`,e.jsx(g,{})]})}function y(r={}){const{wrapper:o}={...d(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(t,{...r})}):t(r)}const v=".CoachmarkBaseExampleUsage{position:relative;display:inline-block;box-sizing:border-box;padding:1rem;margin-inline-start:50%;max-block-size:100%;transform:translate(-50%)}",Z={title:"Experimental/Onboarding/Coachmark/Coachmark elements/CoachmarkButton",component:h,tags:["autodocs"],parameters:{styles:v,docs:{page:y}}},E=r=>{const o=p();return n.createElement(x,{align:"bottom",overlayKind:k.FLOATING,target:n.createElement(h,{kind:"tertiary",label:"Show information",size:"md",renderIcon:j,...r}),theme:o},n.createElement(b,{closeButtonLabel:"Done"},n.createElement(f,{title:"Hello World",description:"this is a description test"})))},a=E.bind({});a.args={label:"Click Me",className:"myButton"};var s,i,m,c,l;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  const theme = getSelectedCarbonTheme();
  return <Coachmark align={'bottom'} overlayKind={COACHMARK_OVERLAY_KIND.FLOATING} target={<CoachmarkButton kind="tertiary" label="Show information" size="md" renderIcon={Crossroads} {...args} />} theme={theme}>
      <CoachmarkOverlayElements closeButtonLabel="Done">
        <CoachmarkOverlayElement title="Hello World" description="this is a description test" />
      </CoachmarkOverlayElements>
    </Coachmark>;
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.description}}};const $=["coachmarkButton"];export{$ as __namedExportsOrder,a as coachmarkButton,Z as default};
