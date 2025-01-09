import{e as a}from"./index-CPiZ6Cnx.js";import{g as h}from"./story-helper-xvx7_7ek.js";import{aw as e,al as C,ax as u,ak as g}from"./index-BogHQN-I.js";import{useMDXComponents as p}from"./index-CUO_02de.js";import"./chunk-NUUEMKO5-CceeWqv-.js";import{C as d}from"./CoachmarkButton-BHrV6rH4.js";import{C as x}from"./Coachmark-DqBCStkx.js";import{C as k,c as b,d as f}from"./CoachmarkOverlayElements-C7mWItLt.js";import{C as j}from"./settings-iwZeeh4T.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CXyjPnaX.js";import"./index-BSHYryQu.js";import"./index-Bsyy8W_U.js";import"./tslib.es6-B4_xh3D5.js";import"./iframe-CvMLeDc5.js";import"../sb-preview/runtime.js";import"./index-Df9so8jS.js";import"./index-DMCuvgYY.js";import"./index-DrFu-skq.js";import"./react-18-C6q_qjn2.js";import"./devtools-CjVY-wQW.js";import"./lodash-CJO4g-jK.js";import"./index-DJK44odq.js";import"./useIsomorphicEffect-CqAX3nH-.js";import"./uuidv4-BQrI85uz.js";import"./bucket-5-CJguTH3X.js";import"./SteppedAnimatedMedia-Br3UU9fE.js";import"./lottie-BZLE-Bwx.js";import"./clamp-DeQgleG0.js";import"./toNumber-CT-AZYiF.js";import"./Carousel-BahPB65p.js";import"./events-OVwOsPzJ.js";function n(r){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...p(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{id:"coachmarkbutton",children:"CoachmarkButton"}),`
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
`,e.jsx(C,{children:e.jsx("div",{className:"CoachmarkBaseExampleUsage",children:e.jsx(u,{of:t})})}),`
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
`,e.jsx(g,{})]})}function y(r={}){const{wrapper:o}={...p(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(n,{...r})}):n(r)}const v=".CoachmarkBaseExampleUsage{position:relative;display:inline-block;max-height:100%;box-sizing:border-box;padding:1rem;margin-left:50%;transform:translate(-50%)}",te={title:"Experimental/Onboarding/Coachmark/Coachmark elements/CoachmarkButton",component:d,tags:["autodocs"],parameters:{styles:v,docs:{page:y}}},E=r=>{const o=h();return a.createElement(x,{align:"bottom",overlayKind:k.FLOATING,target:a.createElement(d,{kind:"tertiary",label:"Show information",size:"md",renderIcon:j,...r}),theme:o},a.createElement(b,{closeButtonLabel:"Done"},a.createElement(f,{title:"Hello World",description:"this is a description test"})))},t=E.bind({});t.args={label:"Click Me",className:"myButton"};var s,i,m,c,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  const theme = getSelectedCarbonTheme();
  return <Coachmark align={'bottom'} overlayKind={COACHMARK_OVERLAY_KIND.FLOATING} target={<CoachmarkButton kind="tertiary" label="Show information" size="md" renderIcon={Crossroads} {...args} />} theme={theme}>
      <CoachmarkOverlayElements closeButtonLabel="Done">
        <CoachmarkOverlayElement title="Hello World" description="this is a description test" />
      </CoachmarkOverlayElements>
    </Coachmark>;
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.description}}};const ae=["coachmarkButton"];export{ae as __namedExportsOrder,t as coachmarkButton,te as default};
