import{j as e}from"./settings-DDDiKwEV.js";import{g as h}from"./story-helper-BB2of0Wm.js";import{useMDXComponents as l}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-BO9OClxn.js";import{e as p,i as d,C as x}from"./index-Ypkytheb.js";import{c,d as r}from"./CoachmarkOverlayElements-CPCFTbVB.js";import{C as u}from"./Coachmark-D-0q9Hrq.js";import{C}from"./CoachmarkBeacon-CGMECPlv.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-Dk74W0Oi.js";import"./floating-ui.react-BgNs4SA8.js";import"./index-BONylQH5.js";import"./events-Dp3Lalez.js";import"./index-BLdp044m.js";import"./tslib.es6-B4_xh3D5.js";import"./iframe-DqqWLuMW.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./uuidv4-BQrI85uz.js";import"./devtools-C7Iu0rt6.js";import"./bucket-5-BlAGcMmC.js";import"./lodash-C6Eq4oiK.js";import"./SteppedAnimatedMedia-B6gySmDt.js";import"./lottie-D0UQuq7-.js";import"./clamp-Bg2yowlN.js";import"./toNumber-DVQITUtX.js";import"./Carousel-DyKWv4YD.js";import"./useIsomorphicEffect-D7JMtAof.js";function t(a){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...l(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"coachmarkoverlayelements",children:"CoachmarkOverlayElements"}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#about-onboarding",children:"About Onboarding"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#note-on-theming",children:"Note on theming"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#code-sample",children:"Code Sample"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:`The CoachmarkOverlayElements is a composable container element, which should be
used only within the scope of a Coachmark or a CoachmarkFixed component. The
CoachmarkOverlayElements can contain one to N number of CoachmarkOverlayElement
components as children. When more than one CoachmarkOverlayElement component is
used in a CoachmarkOverlayElements, the components are displayed in a paginated
fashion within a carousel.`}),`
`,e.jsx(n.h2,{id:"about-onboarding",children:"About Onboarding"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://pages.github.ibm.com/security/security-design/department/end-to-end-experiences/onboarding/overview/",rel:"nofollow",children:"Onboarding"}),`
is a continuous learning methodology and framework that aims to orient, onboard,
explain, educate, and cultivate novice users into high-functioning power users.`]}),`
`,e.jsx(n.h2,{id:"note-on-theming",children:"Note on theming"}),`
`,e.jsx(n.p,{children:`The CoachmarkOverlayElements does not directly take a theme prop, rather it
relies on the cascade from classes being set in the Coachmark / CoachmarkFixed /
CoachmarkStack components.`}),`
`,e.jsx(n.h2,{id:"example-usage",children:"Example usage"}),`
`,`
`,e.jsx(p,{className:"coachmarkExample",withSource:"none",children:e.jsx("div",{className:"CoachmarkBaseExampleUsage",children:e.jsx(d,{of:o})})}),`
`,e.jsx(n.h2,{id:"code-sample",children:"Code sample"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Coachmark ... >
  <CoachmarkOverlayElements
    closeButtonLabel={'Done'}
    nextButtonText={'Next'}
    previousButtonLabel={'Back'}
    className={'myOverlayElements'}
    media={{
      filePaths: ['./assets/anim1.json', './assets/anim2.json']
    }}
    >
    ...
  </CoachmarkOverlayElements>

</Coachmark>

`})}),`
`,e.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(x,{})]})}function g(a={}){const{wrapper:n}={...l(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(t,{...a})}):t(a)}const j=".CoachmarkBaseExampleUsage{position:relative;display:inline-block;max-height:100%;box-sizing:border-box;padding:1rem;margin-left:50%;transform:translate(-50%)}",ae={title:"Experimental/Onboarding/Coachmark/Coachmark elements/CoachmarkOverlayElements",component:c,tags:["autodocs"],argTypes:{children:{control:{type:null}},media:{control:{type:null}}},parameters:{styles:j,docs:{page:g}}},k=new URL(""+new URL("anim1-DoxAu3_F.json",import.meta.url).href,import.meta.url).pathname,v=new URL(""+new URL("anim2-BIoltI8h.json",import.meta.url).href,import.meta.url).pathname,y=a=>{const n=h();return e.jsx(u,{align:"bottom",positionTune:{x:0,y:0},target:e.jsx(C,{label:"Show information",kind:"default"}),theme:n,children:e.jsxs(c,{...a,children:[e.jsx(r,{title:"Example 1",description:"This is an example description."}),e.jsx(r,{title:"Example 2",description:"This is another example description."})]})})},o=y.bind({});o.args={closeButtonLabel:"Done",nextButtonText:"Next",previousButtonLabel:"Back",className:"myOverlayElements",media:{filePaths:[k,v]}};var i,s,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const theme = getSelectedCarbonTheme();
  return <Coachmark align={'bottom'} positionTune={{
    x: 0,
    y: 0
  }} target={<CoachmarkBeacon label="Show information" kind={'default'} />} theme={theme}>
      <CoachmarkOverlayElements {...args}>
        <CoachmarkOverlayElement title="Example 1" description="This is an example description." />
        <CoachmarkOverlayElement title="Example 2" description="This is another example description." />
      </CoachmarkOverlayElements>
    </Coachmark>;
}`,...(m=(s=o.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const oe=["coachmarkOverlayElements"];export{oe as __namedExportsOrder,o as coachmarkOverlayElements,ae as default};
