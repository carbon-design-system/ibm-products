import{e as t}from"./index-CPiZ6Cnx.js";import{g as h}from"./story-helper-CTHQ3yzD.js";import{aw as e,al as C,ax as u,ak as g}from"./index-Be1mmqnw.js";import{useMDXComponents as p}from"./index-CUO_02de.js";import"./chunk-NUUEMKO5-Dwg16tLQ.js";import{C as d}from"./CoachmarkButton-v7quJ-p2.js";import{C as x}from"./Coachmark-AR2Qe3R4.js";import{C as k,c as b,d as f}from"./CoachmarkOverlayElements-L828gCOZ.js";import{C as j}from"./settings-DkGFwmHv.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CXyjPnaX.js";import"./index-BSHYryQu.js";import"./index-Bsyy8W_U.js";import"./iframe-C_4cBVrG.js";import"../sb-preview/runtime.js";import"./index-Df9so8jS.js";import"./index-DMCuvgYY.js";import"./index-DrFu-skq.js";import"./react-18-C6q_qjn2.js";import"./devtools-BgfuqBVa.js";import"./lodash-CJO4g-jK.js";import"./index-DJK44odq.js";import"./useIsomorphicEffect-CqAX3nH-.js";import"./uuidv4-BQrI85uz.js";import"./bucket-5-CJguTH3X.js";import"./SteppedAnimatedMedia-CV63aKFL.js";import"./lottie-BZLE-Bwx.js";import"./clamp-DeQgleG0.js";import"./toNumber-CT-AZYiF.js";import"./Carousel-CW3ZI-go.js";import"./events-OVwOsPzJ.js";function n(r){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...p(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{id:"coachmarkbutton",children:"CoachmarkButton"}),`
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
`,e.jsx(g,{})]})}function y(r={}){const{wrapper:o}={...p(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(n,{...r})}):n(r)}const v=".CoachmarkBaseExampleUsage{position:relative;display:inline-block;max-height:100%;box-sizing:border-box;padding:1rem;margin-left:50%;transform:translate(-50%)}",re={title:"Experimental/Onboarding/Coachmark/Coachmark elements/CoachmarkButton",component:d,tags:["autodocs"],parameters:{styles:v,docs:{page:y}}},E=r=>{const o=h();return t.createElement(x,{align:"bottom",overlayKind:k.FLOATING,target:t.createElement(d,{kind:"tertiary",label:"Show information",size:"md",renderIcon:j,...r}),theme:o},t.createElement(b,{closeButtonLabel:"Done"},t.createElement(f,{title:"Hello World",description:"this is a description test"})))},a=E.bind({});a.args={label:"Click Me",className:"myButton"};var s,i,m,c,l;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  const theme = getSelectedCarbonTheme();
  return <Coachmark align={'bottom'} overlayKind={COACHMARK_OVERLAY_KIND.FLOATING} target={<CoachmarkButton kind="tertiary" label="Show information" size="md" renderIcon={Crossroads} {...args} />} theme={theme}>
      <CoachmarkOverlayElements closeButtonLabel="Done">
        <CoachmarkOverlayElement title="Hello World" description="this is a description test" />
      </CoachmarkOverlayElements>
    </Coachmark>;
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.description}}};const ae=["coachmarkButton"];export{ae as __namedExportsOrder,a as coachmarkButton,re as default};
