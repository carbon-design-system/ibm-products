import{e as r}from"./index-CPiZ6Cnx.js";import{g as p}from"./story-helper-C7pmvIin.js";import{j as e}from"./index-B83en7q5.js";import{useMDXComponents as h}from"./index-CUO_02de.js";import"./index-Bf_H9q8r.js";import{C as x,a as g,B as u}from"./CoachmarkOverlayElements-1w_eOm7u.js";import{C as d}from"./CoachmarkBeacon-Do1E9Bpl.js";import{C}from"./Coachmark-BNQfUVma.js";import{a as j,f as b,C as f}from"./index-DblCLej2.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BPCFiO9b.js";import"./index-ZKO_qc5e.js";import"./preview-DUa2hDsf.js";import"./iframe-DG_HeTRT.js";import"./DocsRenderer-CFRXHY34-DtZUrKsm.js";import"./client-BCQEsWlk.js";import"./uuidv4-BN2rGLQG.js";import"./devtools-Ca6Wku6c.js";import"./settings-41bnSjHp.js";import"./events-OVwOsPzJ.js";import"./index-H2wBg9na.js";import"./bucket-5-B7bOdntf.js";import"./useIsomorphicEffect-CqAX3nH-.js";import"./clamp-CsXXRQhr.js";import"./Carousel-BCNWa9EM.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";function t(a){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...h(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{id:"coachmarkbeacon",children:"CoachmarkBeacon"}),`
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
`,e.jsxs(o.p,{children:[e.jsx(o.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/coachmark/usage#tooltip",rel:"nofollow",children:"Beacons"}),`
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
`,e.jsx(j,{className:"coachmarkExample",withSource:"none",children:e.jsx("div",{className:"CoachmarkBaseExampleUsage",children:e.jsx(b,{of:n})})}),`
`,e.jsx(o.h2,{id:"code-sample",children:"Code sample"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`<Coachmark
  theme={'light'}
  target={<CoachmarkBeacon label="Show information" kind={'tooltip'} />}
>
  ...
</Coachmark>
`})}),`
`,e.jsx(o.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(f,{})]})}function k(a={}){const{wrapper:o}={...h(),...a.components};return o?e.jsx(o,{...a,children:e.jsx(t,{...a})}):t(a)}const v=".CoachmarkBaseExampleUsage{position:relative;display:inline-block;box-sizing:border-box;padding:1rem;margin-inline-start:50%;max-block-size:100%;transform:translate(-50%)}",Y={title:"Experimental/Onboarding/Coachmark/Coachmark elements/CoachmarkBeacon",component:d,tags:["autodocs"],parameters:{styles:v,docs:{page:k}}},y=a=>{const o=p();return r.createElement(C,{align:"bottom",target:r.createElement(d,{...a}),theme:o},r.createElement(x,{closeButtonLabel:"Done"},r.createElement(g,{title:"Hello World",description:"this is a description test"})))},n=y.bind({});n.args={className:"myBeacon",kind:u.DEFAULT,label:"Show information"};var i,s,c,l,m;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const theme = getSelectedCarbonTheme();
  return <Coachmark align={'bottom'} target={<CoachmarkBeacon {...args} />} theme={theme}>
      <CoachmarkOverlayElements closeButtonLabel="Done">
        <CoachmarkOverlayElement title="Hello World" description="this is a description test" />
      </CoachmarkOverlayElements>
    </Coachmark>;
}`,...(c=(s=n.parameters)==null?void 0:s.docs)==null?void 0:c.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.description}}};const Z=["coachmarkBeacon"];export{Z as __namedExportsOrder,n as coachmarkBeacon,Y as default};
