import{R as t}from"./index-BwDkhjyp.js";import{g as p}from"./story-helper-6_fmjwZ-.js";import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{useMDXComponents as c}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-BYpJLwUI.js";import{e as d,i as x,C as u}from"./index-DHGWxKiG.js";import{c as h,d as r}from"./CoachmarkOverlayElements-DwrUkres.js";import{C}from"./Coachmark-BSzSYzb9.js";import{C as g}from"./CoachmarkBeacon-BEfNpg1y.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Dk74W0Oi.js";import"./tslib.es6-B4_xh3D5.js";import"./iframe-CBdycsFE.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./index-BONylQH5.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./uuidv4-BQrI85uz.js";import"./index-CO-HQMMN.js";import"./devtools-7ohusRRR.js";import"./settings-9_3hiHpE.js";import"./index-CJvxHwuA.js";import"./events-OVwOsPzJ.js";import"./index-DQ9l4IMz.js";import"./bucket-5-DLUbIH5T.js";import"./useIsomorphicEffect-D7JMtAof.js";import"./lodash-C6Eq4oiK.js";import"./SteppedAnimatedMedia-B716d7EF.js";import"./lottie-D0UQuq7-.js";import"./clamp-Bg2yowlN.js";import"./toNumber-DVQITUtX.js";import"./Carousel-hwpbASlj.js";function i(a){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...c(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"coachmarkoverlayelements",children:"CoachmarkOverlayElements"}),`
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
`,e.jsx(d,{className:"coachmarkExample",withSource:"none",children:e.jsx("div",{className:"CoachmarkBaseExampleUsage",children:e.jsx(x,{of:o})})}),`
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
`,e.jsx(u,{})]})}function k(a={}){const{wrapper:n}={...c(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(i,{...a})}):i(a)}const j=".CoachmarkBaseExampleUsage{position:relative;display:inline-block;max-height:100%;box-sizing:border-box;padding:1rem;margin-left:50%;transform:translate(-50%)}",te={title:"Experimental/Onboarding/Coachmark/Coachmark elements/CoachmarkOverlayElements",component:h,tags:["autodocs"],argTypes:{children:{control:{type:null}},media:{control:{type:null}}},parameters:{styles:j,docs:{page:k}}},v=new URL(""+new URL("anim1-DoxAu3_F.json",import.meta.url).href,import.meta.url).pathname,y=new URL(""+new URL("anim2-BIoltI8h.json",import.meta.url).href,import.meta.url).pathname,f=a=>{const n=p();return t.createElement(C,{align:"bottom",positionTune:{x:0,y:0},target:t.createElement(g,{label:"Show information",kind:"default"}),theme:n},t.createElement(h,{...a},t.createElement(r,{title:"Example 1",description:"This is an example description."}),t.createElement(r,{title:"Example 2",description:"This is another example description."})))},o=f.bind({});o.args={closeButtonLabel:"Done",nextButtonText:"Next",previousButtonLabel:"Back",className:"myOverlayElements",media:{filePaths:[v,y]}};var m,s,l;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const re=["coachmarkOverlayElements"];export{re as __namedExportsOrder,o as coachmarkOverlayElements,te as default};
