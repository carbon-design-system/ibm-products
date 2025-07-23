import{el as e,em as c,eo as l,en as m,eu as h,e as r}from"./iframe-C3VsvcP9.js";import{useMDXComponents as s}from"./index-C6IVAFFV.js";import{d,e as p,B as x}from"./CoachmarkOverlayElements-FX5VRZaP.js";import{a as i,C as g}from"./CoachmarkBeacon-CwRMoxok.js";import"./uuidv4-BN2rGLQG.js";import"./devtools-BjHf0isC.js";import"./bucket-6-CZ4baeq2.js";import"./useIsomorphicEffect-X37BQc6H.js";import"./clamp-CsXXRQhr.js";import"./Carousel-U0NGT8HO.js";function t(n){const a={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"coachmarkbeacon",children:"CoachmarkBeacon"}),`
`,e.jsx(a.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#about-onboarding",children:"About Onboarding"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#note-on-theming",children:"Note on theming"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#code-sample",children:"Code Sample"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(a.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(a.p,{children:[e.jsx(a.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/coachmark/usage#tooltip",rel:"nofollow",children:"Beacons"}),`
use a pulsing action to call a user’s attention to a specific area in the UI.`]}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"target"}),` prop of the Coachmark should always be either a CoachmarkBeacon or
a CoachmarkButton.`]}),`
`,e.jsx(a.h2,{id:"about-onboarding",children:"About Onboarding"}),`
`,e.jsxs(a.p,{children:[e.jsx(a.a,{href:"https://pages.github.ibm.com/security/security-design/department/end-to-end-experiences/onboarding/overview/",rel:"nofollow",children:"Onboarding"}),`
is a continuous learning methodology and framework that aims to orient, onboard,
explain, educate, and cultivate novice users into high-functioning power users.`]}),`
`,e.jsx(a.h2,{id:"note-on-theming",children:"Note on theming"}),`
`,e.jsx(a.p,{children:`The CoachmarkBeacon is theme-agnostic; it is always a blue visual displayed in
one of two states, animated or active.`}),`
`,e.jsx(a.h2,{id:"example-usage",children:"Example usage"}),`
`,e.jsx(c,{className:"coachmarkExample",withSource:"none",children:e.jsx("div",{className:"CoachmarkBaseExampleUsage",children:e.jsx(l,{of:o})})}),`
`,e.jsx(a.h2,{id:"code-sample",children:"Code sample"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-jsx",children:`<Coachmark
  theme={'light'}
  target={<CoachmarkBeacon label="Show information" kind={'tooltip'} />}
>
  ...
</Coachmark>
`})}),`
`,e.jsx(a.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(m,{})]})}function u(n={}){const{wrapper:a}={...s(),...n.components};return a?e.jsx(a,{...n,children:e.jsx(t,{...n})}):t(n)}const b=".CoachmarkBaseExampleUsage{position:relative;display:inline-block;box-sizing:border-box;padding:1rem;margin-inline-start:50%;max-block-size:100%;transform:translate(-50%)}",N={title:"Experimental/Onboarding/Coachmark/CoachmarkBeacon",component:i,tags:["autodocs","Onboarding"],parameters:{styles:b,docs:{page:u}}},j=n=>{const a=h();return r.createElement(g,{align:"bottom",target:r.createElement(i,{...n}),theme:a},r.createElement(d,{closeButtonLabel:"Done"},r.createElement(p,{title:"Hello World",description:"this is a description test"})))},o=j.bind({});o.args={className:"myBeacon",kind:x.DEFAULT,label:"Show information"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  const theme = getSelectedCarbonTheme();
  return <Coachmark align={'bottom'} target={<CoachmarkBeacon {...args} />} theme={theme}>
      <CoachmarkOverlayElements closeButtonLabel="Done">
        <CoachmarkOverlayElement title="Hello World" description="this is a description test" />
      </CoachmarkOverlayElements>
    </Coachmark>;
}`,...o.parameters?.docs?.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...o.parameters?.docs?.description}}};const S=["coachmarkBeacon"];export{S as __namedExportsOrder,o as coachmarkBeacon,N as default};
