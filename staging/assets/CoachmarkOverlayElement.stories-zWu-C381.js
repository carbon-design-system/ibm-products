import{j as e}from"./settings-DDDiKwEV.js";import{g as d}from"./story-helper-BB2of0Wm.js";import{useMDXComponents as c}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-BO9OClxn.js";import{e as p,i as x,C as u}from"./index-Ypkytheb.js";import{d as h,c as g}from"./CoachmarkOverlayElements-CPCFTbVB.js";import{C as k}from"./Coachmark-D-0q9Hrq.js";import{C}from"./CoachmarkBeacon-CGMECPlv.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-Dk74W0Oi.js";import"./floating-ui.react-BgNs4SA8.js";import"./index-BONylQH5.js";import"./events-Dp3Lalez.js";import"./index-BLdp044m.js";import"./tslib.es6-B4_xh3D5.js";import"./iframe-DqqWLuMW.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./uuidv4-BQrI85uz.js";import"./devtools-C7Iu0rt6.js";import"./bucket-5-BlAGcMmC.js";import"./lodash-C6Eq4oiK.js";import"./SteppedAnimatedMedia-B6gySmDt.js";import"./lottie-D0UQuq7-.js";import"./clamp-Bg2yowlN.js";import"./toNumber-DVQITUtX.js";import"./Carousel-DyKWv4YD.js";import"./useIsomorphicEffect-D7JMtAof.js";function a(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...c(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"coachmarkoverlayelement",children:"CoachmarkOverlayElement"}),`
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
`,e.jsx(n.p,{children:`The CoachmarkOverlayElement is a composable element reserved for use within a
CoachmarkOverlayElements container, which should be used only within the scope
of a Coachmark or a CoachmarkFixed component. There can be one to N number of
CoachmarkOverlayElement components as children to a single
CoachmarkOverlayElements. When more than one CoachmarkOverlayElement components
are used in a CoachmarkOverlayElements, the components are displayed in a
paginated fashion within a carousel.`}),`
`,e.jsx(n.h2,{id:"about-onboarding",children:"About Onboarding"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://pages.github.ibm.com/security/security-design/department/end-to-end-experiences/onboarding/overview/",rel:"nofollow",children:"Onboarding"}),`
is a continuous learning methodology and framework that aims to orient, onboard,
explain, educate, and cultivate novice users into high-functioning power users.`]}),`
`,e.jsx(n.h2,{id:"note-on-theming",children:"Note on theming"}),`
`,e.jsx(n.p,{children:`The CoachmarkOverlayElement does not directly take a theme prop; rather, it
relies on the cascade from classes being set in the
Coachmark/CoachmarkFixed/CoachmarkStack components.`}),`
`,e.jsx(n.h2,{id:"example-usage",children:"Example usage"}),`
`,e.jsx(p,{className:"coachmarkExample",withSource:"none",children:e.jsx("div",{className:"CoachmarkBaseExampleUsage",children:e.jsx(x,{of:r})})}),`
`,e.jsx(n.h2,{id:"code-sample",children:"Code sample"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Coachmark ... >
  <CoachmarkOverlayElements ...>

    <CoachmarkOverlayElement
      title='Hello World'
      description='Link opens in new tab.'
      button={
        <Link href='https://www.ibm.com' target='_blank' renderIcon={Crossroads16}>
          Learn more
        </Link>
      } />

     <CoachmarkOverlayElement
        title='Hello World'
        description='Link opens on this page.'
        button={<Link href='https://www.ibm.com'>Learn more</Link>}
      />

  </CoachmarkOverlayElements>

</Coachmark>

`})}),`
`,e.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(u,{})]})}function y(o={}){const{wrapper:n}={...c(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(a,{...o})}):a(o)}const b=".CoachmarkBaseExampleUsage{position:relative;display:inline-block;max-height:100%;box-sizing:border-box;padding:1rem;margin-left:50%;transform:translate(-50%)}",oe={title:"Experimental/Onboarding/Coachmark/Coachmark elements/CoachmarkOverlayElement",component:h,tags:["autodocs"],argTypes:{button:{control:{type:null}},description:{control:{type:null}},nextButtonText:{control:{type:null}},previousButtonLabel:{control:{type:null}}},parameters:{styles:b,docs:{page:y}}},j=o=>{const n=d();return e.jsx(k,{align:"bottom",positionTune:{x:0,y:0},target:e.jsx(C,{label:"Show information",kind:"default"}),theme:n,children:e.jsx(g,{...o,children:e.jsx(h,{title:"Hello World",description:"this is a description test"})})})},r=j.bind({});r.args={closeButtonLabel:"Done",className:"myOverlayElement"};var t,i,s,l,m;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
  const theme = getSelectedCarbonTheme();
  return <Coachmark align={'bottom'} positionTune={{
    x: 0,
    y: 0
  }} target={<CoachmarkBeacon label="Show information" kind={'default'} />} theme={theme}>
      <CoachmarkOverlayElements {...args}>
        <CoachmarkOverlayElement title={'Hello World'} description={'this is a description test'} />
      </CoachmarkOverlayElements>
    </Coachmark>;
}`,...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.description}}};const re=["coachmarkOverlayElement"];export{re as __namedExportsOrder,r as coachmarkOverlayElement,oe as default};
