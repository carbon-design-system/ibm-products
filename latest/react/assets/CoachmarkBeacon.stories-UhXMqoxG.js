import{j as e,eo as c,eq as l,ep as m,ev as h,e as r}from"./iframe-BlQ-LkYW.js";import{useMDXComponents as s}from"./index-BYVA8DqO.js";import{d,e as p,B as x}from"./CoachmarkOverlayElements-DghXq7Av.js";import{a as i,C as g}from"./CoachmarkBeacon-CowmBYv_.js";import"./uuidv4-BN2rGLQG.js";import"./devtools-BJZSxg-N.js";import"./bucket-6-C4pRq2Bl.js";import"./useIsomorphicEffect-BIhftj2z.js";import"./clamp-CsXXRQhr.js";import"./Carousel-KzevvHGP.js";function t(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"coachmarkbeacon",children:"CoachmarkBeacon"}),`
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
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/coachmark/usage#tooltip",rel:"nofollow",children:"Beacons"}),`
use a pulsing action to call a user’s attention to a specific area in the UI.`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"target"}),` prop of the Coachmark should always be either a CoachmarkBeacon or
a CoachmarkButton.`]}),`
`,e.jsx(n.h2,{id:"about-onboarding",children:"About Onboarding"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://pages.github.ibm.com/security/security-design/department/end-to-end-experiences/onboarding/overview/",rel:"nofollow",children:"Onboarding"}),`
is a continuous learning methodology and framework that aims to orient, onboard,
explain, educate, and cultivate novice users into high-functioning power users.`]}),`
`,e.jsx(n.h2,{id:"note-on-theming",children:"Note on theming"}),`
`,e.jsx(n.p,{children:`The CoachmarkBeacon is theme-agnostic; it is always a blue visual displayed in
one of two states, animated or active.`}),`
`,e.jsx(n.h2,{id:"example-usage",children:"Example usage"}),`
`,e.jsx(c,{className:"coachmarkExample",withSource:"none",children:e.jsx("div",{className:"CoachmarkBaseExampleUsage",children:e.jsx(l,{of:a})})}),`
`,e.jsx(n.h2,{id:"code-sample",children:"Code sample"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Coachmark
  theme={'light'}
  target={<CoachmarkBeacon label="Show information" kind={'tooltip'} />}
>
  ...
</Coachmark>
`})}),`
`,e.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(m,{})]})}function u(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}const b=".CoachmarkBaseExampleUsage{position:relative;display:inline-block;box-sizing:border-box;padding:1rem;margin-inline-start:50%;max-block-size:100%;transform:translate(-50%)}",N={title:"Experimental/Onboarding/Coachmark/CoachmarkBeacon",component:i,tags:["autodocs","Onboarding"],parameters:{styles:b,docs:{page:u}}},j=o=>{const n=h();return r.createElement(g,{align:"bottom",target:r.createElement(i,{...o}),closeIconDescription:"Close",theme:n},r.createElement(d,{closeButtonLabel:"Done"},r.createElement(p,{title:"Hello World",description:"this is a description test"})))},a=j.bind({});a.args={className:"myBeacon",kind:x.DEFAULT,label:"Show information"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  const theme = getSelectedCarbonTheme();
  return <Coachmark align={'bottom'} target={<CoachmarkBeacon {...args} />} closeIconDescription="Close" theme={theme}>
      <CoachmarkOverlayElements closeButtonLabel="Done">
        <CoachmarkOverlayElement title="Hello World" description="this is a description test" />
      </CoachmarkOverlayElements>
    </Coachmark>;
}`,...a.parameters?.docs?.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...a.parameters?.docs?.description}}};const S=["coachmarkBeacon"];export{S as __namedExportsOrder,a as coachmarkBeacon,N as default};
