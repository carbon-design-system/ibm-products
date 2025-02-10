import{e as o}from"./index-BOZkNhcz.js";import{g as p}from"./story-helper-HIAsLHzl.js";import{j as e,a as d,h as x,C as u}from"./index-CKePA1sA.js";import{useMDXComponents as c}from"./index-aaDvWpb8.js";import"./DocsRenderer-CFRXHY34-CAZB0tDV.js";import{c as h,d as r}from"./CoachmarkOverlayElements-C2zgpd1v.js";import{C}from"./Coachmark-DCctwQ2y.js";import{C as g}from"./CoachmarkBeacon-CODTh8JA.js";import{S as k}from"./SteppedAnimatedMedia-DbOBfKU6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Cd8snwnz.js";import"./index-hBZdtWkn.js";import"./index-2uioG_CI.js";import"./iframe-BLi-C7G1.js";import"./index-CO8sV34W.js";import"./index-ogSvIofg.js";import"./react-18-Cs6RDBhU.js";import"./uuidv4-BQrI85uz.js";import"./devtools-Bjt2CwRv.js";import"./settings-DqneCnpo.js";import"./events-OVwOsPzJ.js";import"./index-CN8ymWyE.js";import"./bucket-5-DaBRhwMZ.js";import"./useIsomorphicEffect-C0ObacuX.js";import"./lodash-D2NXmG3r.js";import"./Carousel-BNrkDd2n.js";import"./lottie-BZLE-Bwx.js";import"./clamp-CasrEGCP.js";import"./toNumber-cOipFfRl.js";function i(a){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...c(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"coachmarkoverlayelements",children:"CoachmarkOverlayElements"}),`
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
`,e.jsx(d,{className:"coachmarkExample",withSource:"none",children:e.jsx("div",{className:"CoachmarkBaseExampleUsage",children:e.jsx(x,{of:t})})}),`
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
`,e.jsx(u,{})]})}function j(a={}){const{wrapper:n}={...c(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(i,{...a})}):i(a)}const y=".CoachmarkBaseExampleUsage{position:relative;display:inline-block;box-sizing:border-box;padding:1rem;margin-inline-start:50%;max-block-size:100%;transform:translate(-50%)}",$={title:"Experimental/Onboarding/Coachmark/Coachmark elements/CoachmarkOverlayElements",component:h,tags:["autodocs"],argTypes:{children:{control:{type:null}},media:{control:{type:null},description:'Deprecated: Property replaced by "renderMedia"'}},parameters:{styles:y,docs:{page:j}}},v=new URL(""+new URL("anim1-DoxAu3_F.json",import.meta.url).href,import.meta.url).pathname,E=new URL(""+new URL("anim2-BIoltI8h.json",import.meta.url).href,import.meta.url).pathname,b=a=>{const n=p();return o.createElement(C,{align:"bottom",positionTune:{x:0,y:0},target:o.createElement(g,{label:"Show information",kind:"default"}),theme:n},o.createElement(h,{...a},o.createElement(r,{title:"Example 1",description:"This is an example description."}),o.createElement(r,{title:"Example 2",description:"This is another example description."})))},t=b.bind({});t.args={closeButtonLabel:"Done",nextButtonText:"Next",previousButtonLabel:"Back",className:"myOverlayElements",renderMedia:({playStep:a})=>o.createElement(k,{filePaths:[v,E],playStep:a})};var s,m,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
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
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const ee=["coachmarkOverlayElements"];export{ee as __namedExportsOrder,t as coachmarkOverlayElements,$ as default};
