import{e as r}from"./index-BOZkNhcz.js";import{g as p}from"./story-helper-DEC8H8IF.js";import{j as e,a as x,h as g,C as u}from"./index-k6DjlwLo.js";import{useMDXComponents as h}from"./index-aaDvWpb8.js";import"./DocsRenderer-CFRXHY34-mrqLW0G7.js";import{C,a as j,B as b}from"./CoachmarkOverlayElements-BoIbEYJx.js";import{C as d}from"./CoachmarkBeacon-DfQv7Dca.js";import{C as k}from"./Coachmark--ucHCM0x.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index--clQM3eT.js";import"./index-hBZdtWkn.js";import"./index-2uioG_CI.js";import"./iframe-CFrrarbq.js";import"./index-CO8sV34W.js";import"./index-ogSvIofg.js";import"./react-18-Cs6RDBhU.js";import"./uuidv4-BN2rGLQG.js";import"./devtools-BSXGZlBP.js";import"./settings-BYgtfLKl.js";import"./events-OVwOsPzJ.js";import"./index-YZUn1U4D.js";import"./bucket-5-D_VnmO9x.js";import"./useIsomorphicEffect-C0ObacuX.js";import"./clamp-CsXXRQhr.js";import"./SteppedAnimatedMedia-BOC_MZvc.js";import"./lottie-BZLE-Bwx.js";import"./Carousel-CfCT9sHV.js";function t(a){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...h(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{id:"coachmarkbeacon",children:"CoachmarkBeacon"}),`
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
`,e.jsx(x,{className:"coachmarkExample",withSource:"none",children:e.jsx("div",{className:"CoachmarkBaseExampleUsage",children:e.jsx(g,{of:n})})}),`
`,e.jsx(o.h2,{id:"code-sample",children:"Code sample"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`<Coachmark
  theme={'light'}
  target={<CoachmarkBeacon label="Show information" kind={'tooltip'} />}
>
  ...
</Coachmark>
`})}),`
`,e.jsx(o.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(u,{})]})}function f(a={}){const{wrapper:o}={...h(),...a.components};return o?e.jsx(o,{...a,children:e.jsx(t,{...a})}):t(a)}const v=".CoachmarkBaseExampleUsage{position:relative;display:inline-block;box-sizing:border-box;padding:1rem;margin-inline-start:50%;max-block-size:100%;transform:translate(-50%)}",Y={title:"Experimental/Onboarding/Coachmark/Coachmark elements/CoachmarkBeacon",component:d,tags:["autodocs"],parameters:{styles:v,docs:{page:f}}},y=a=>{const o=p();return r.createElement(k,{align:"bottom",target:r.createElement(d,{...a}),theme:o},r.createElement(C,{closeButtonLabel:"Done"},r.createElement(j,{title:"Hello World",description:"this is a description test"})))},n=y.bind({});n.args={className:"myBeacon",kind:b.DEFAULT,label:"Show information"};var i,s,c,l,m;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const theme = getSelectedCarbonTheme();
  return <Coachmark align={'bottom'} target={<CoachmarkBeacon {...args} />} theme={theme}>
      <CoachmarkOverlayElements closeButtonLabel="Done">
        <CoachmarkOverlayElement title="Hello World" description="this is a description test" />
      </CoachmarkOverlayElements>
    </Coachmark>;
}`,...(c=(s=n.parameters)==null?void 0:s.docs)==null?void 0:c.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.description}}};const Z=["coachmarkBeacon"];export{Z as __namedExportsOrder,n as coachmarkBeacon,Y as default};
