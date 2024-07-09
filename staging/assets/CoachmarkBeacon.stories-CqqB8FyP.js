import{j as e}from"./settings-BiUEFdm2.js";import{g as d}from"./story-helper-YTYnELA9.js";import{useMDXComponents as l}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-CsZ1lTTC.js";import{e as p,i as x,C as g}from"./index-CDYzkStP.js";import{B as u,c as j,d as C}from"./CoachmarkOverlayElements-BjzFwB1c.js";import{C as h}from"./CoachmarkBeacon-B6G1Cu6l.js";import{C as b}from"./Coachmark-DTT1Rzkr.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-Dk74W0Oi.js";import"./deprecate-D9ms-jbM.js";import"./events-Bq7WR1mU.js";import"./index-BONylQH5.js";import"./tslib.es6-B4_xh3D5.js";import"./iframe-j3s5A4v9.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-BjQFKvNH.js";import"./isSymbol-BZYRlrjc.js";import"./index-DrFu-skq.js";import"./uuidv4-BQrI85uz.js";import"./devtools-BPcQvzXy.js";import"./bucket-5-BuK6y5Rd.js";import"./lodash-C6Eq4oiK.js";import"./SteppedAnimatedMedia-D5S8_Guu.js";import"./lottie-D0UQuq7-.js";import"./clamp-DxEmERK6.js";import"./toNumber-DNhxxDfe.js";import"./Carousel-DpP2qXaV.js";import"./useIsomorphicEffect-D7JMtAof.js";function r(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{id:"coachmarkbeacon",children:"CoachmarkBeacon"}),`
`,e.jsx(o.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#about-onboarding",children:"About Onboarding"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#note-on-theming",children:"Note on theming"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#code-sample",children:"Code Sample"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(o.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.a,{href:"https://pages.github.ibm.com/cdai-design/pal/components/onboarding/coachmark/usage#tooltip",rel:"nofollow",children:"Beacons"}),`
use a pulsing action to call a user’s attention to a specific area in the UI.`]}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"target"}),` prop of the Coachmark should always be either a CoachmarkBeacon or
a CoachmarkButton.`]}),`
`,e.jsx(o.h2,{id:"about-onboarding",children:"About Onboarding"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.a,{href:"https://pages.github.ibm.com/security/security-design/department/end-to-end-experiences/onboarding/overview/",rel:"nofollow",children:"Onboarding"}),`
is a continuous learning methodology and framework that aims to orient, onboard,
explain, educate, and cultivate novice users into high-functioning power users.`]}),`
`,e.jsx(o.h2,{id:"note-on-theming",children:"Note on theming"}),`
`,e.jsx(o.p,{children:`The CoachmarkBeacon is theme-agnostic; it is always a blue visual displayed in
one of two states, animated or active.`}),`
`,e.jsx(o.h2,{id:"example-usage",children:"Example usage"}),`
`,e.jsx(p,{className:"coachmarkExample",withSource:"none",children:e.jsx("div",{className:"CoachmarkBaseExampleUsage",children:e.jsx(x,{of:a})})}),`
`,e.jsx(o.h2,{id:"code-sample",children:"Code sample"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`<Coachmark
  theme={'light'}
  target={<CoachmarkBeacon label="Show information" kind={'tooltip'} />}
>
  ...
</Coachmark>
`})}),`
`,e.jsx(o.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(g,{})]})}function f(n={}){const{wrapper:o}={...l(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(r,{...n})}):r(n)}const k=".CoachmarkBaseExampleUsage{position:relative;display:inline-block;max-height:100%;box-sizing:border-box;padding:1rem;margin-left:50%;transform:translate(-50%)}",ae={title:"IBM Products/Onboarding/Coachmark/Coachmark elements/CoachmarkBeacon",component:h,tags:["autodocs"],parameters:{styles:k,docs:{page:f}}},v=n=>{const o=d();return e.jsx(b,{align:"bottom",target:e.jsx(h,{...n}),theme:o,children:e.jsx(j,{closeButtonLabel:"Done",children:e.jsx(C,{title:"Hello World",description:"this is a description test"})})})},a=v.bind({});a.args={className:"myBeacon",kind:u.DEFAULT,label:"Show information"};var t,i,s,c,m;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
  const theme = getSelectedCarbonTheme();
  return <Coachmark align={'bottom'} target={<CoachmarkBeacon {...args} />} theme={theme}>
      <CoachmarkOverlayElements closeButtonLabel="Done">
        <CoachmarkOverlayElement title="Hello World" description="this is a description test" />
      </CoachmarkOverlayElements>
    </Coachmark>;
}`,...(s=(i=a.parameters)==null?void 0:i.docs)==null?void 0:s.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.description}}};const re=["coachmarkBeacon"];export{re as __namedExportsOrder,a as coachmarkBeacon,ae as default};
