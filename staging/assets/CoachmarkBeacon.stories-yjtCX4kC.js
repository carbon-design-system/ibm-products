import{e as r}from"./index-CPiZ6Cnx.js";import{g as p}from"./story-helper-U7E6Psyp.js";import{j as e}from"./jsx-runtime-Dc-z7RWI.js";import{useMDXComponents as h}from"./index-CUO_02de.js";import"./chunk-NUUEMKO5-DAfSjhFL.js";import{al as g,aw as x,ak as u}from"./index-B_DdD064.js";import{B as j,c as C,d as b}from"./CoachmarkOverlayElements-C7mWItLt.js";import{C as d}from"./CoachmarkBeacon-jWqIIfTj.js";import{C as f}from"./Coachmark-DqBCStkx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CXyjPnaX.js";import"./index-BSHYryQu.js";import"./index-Bsyy8W_U.js";import"./tslib.es6-rrx6G-_s.js";import"./iframe-BFx4DPzL.js";import"../sb-preview/runtime.js";import"./react-18-C6q_qjn2.js";import"./index-Df9so8jS.js";import"./index-DMCuvgYY.js";import"./index-DrFu-skq.js";import"./uuidv4-BQrI85uz.js";import"./devtools-CjVY-wQW.js";import"./settings-iwZeeh4T.js";import"./events-OVwOsPzJ.js";import"./index-DJK44odq.js";import"./bucket-5-CJguTH3X.js";import"./useIsomorphicEffect-CqAX3nH-.js";import"./lodash-CJO4g-jK.js";import"./SteppedAnimatedMedia-Br3UU9fE.js";import"./lottie-BZLE-Bwx.js";import"./clamp-DeQgleG0.js";import"./toNumber-CT-AZYiF.js";import"./Carousel-BahPB65p.js";function t(a){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...h(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{id:"coachmarkbeacon",children:"CoachmarkBeacon"}),`
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
`,e.jsx(g,{className:"coachmarkExample",withSource:"none",children:e.jsx("div",{className:"CoachmarkBaseExampleUsage",children:e.jsx(x,{of:n})})}),`
`,e.jsx(o.h2,{id:"code-sample",children:"Code sample"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`<Coachmark
  theme={'light'}
  target={<CoachmarkBeacon label="Show information" kind={'tooltip'} />}
>
  ...
</Coachmark>
`})}),`
`,e.jsx(o.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(u,{})]})}function k(a={}){const{wrapper:o}={...h(),...a.components};return o?e.jsx(o,{...a,children:e.jsx(t,{...a})}):t(a)}const v=".CoachmarkBaseExampleUsage{position:relative;display:inline-block;max-height:100%;box-sizing:border-box;padding:1rem;margin-left:50%;transform:translate(-50%)}",ne={title:"Experimental/Onboarding/Coachmark/Coachmark elements/CoachmarkBeacon",component:d,tags:["autodocs"],parameters:{styles:v,docs:{page:k}}},y=a=>{const o=p();return r.createElement(f,{align:"bottom",target:r.createElement(d,{...a}),theme:o},r.createElement(C,{closeButtonLabel:"Done"},r.createElement(b,{title:"Hello World",description:"this is a description test"})))},n=y.bind({});n.args={className:"myBeacon",kind:j.DEFAULT,label:"Show information"};var i,s,c,m,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const theme = getSelectedCarbonTheme();
  return <Coachmark align={'bottom'} target={<CoachmarkBeacon {...args} />} theme={theme}>
      <CoachmarkOverlayElements closeButtonLabel="Done">
        <CoachmarkOverlayElement title="Hello World" description="this is a description test" />
      </CoachmarkOverlayElements>
    </Coachmark>;
}`,...(c=(s=n.parameters)==null?void 0:s.docs)==null?void 0:c.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.description}}};const re=["coachmarkBeacon"];export{re as __namedExportsOrder,n as coachmarkBeacon,ne as default};
