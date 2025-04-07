import{e as t}from"./index-DzvNrmz8.js";import{g as d}from"./story-helper-DPPXKxdX.js";import{j as e}from"./index-Cg1swjps.js";import{useMDXComponents as c}from"./index-B7BkHM3Y.js";import"./index-DzeuwgLe.js";import{d as h,e as r}from"./CoachmarkOverlayElements-D3CRzFxN.js";import{C as p}from"./Coachmark-CPfriO0g.js";import{C as x}from"./CoachmarkBeacon-DOWO1U7s.js";import{a as u,j as g,C as k}from"./index-B_2-5AJB.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-5As4T26e.js";import"./index-Bv4JGo1_.js";import"./preview-BxD30hs5.js";import"./iframe-DJDim8wj.js";import"./DocsRenderer-CFRXHY34-qaNuuHq1.js";import"./client-fwTTGz69.js";import"./uuidv4-BN2rGLQG.js";import"./devtools-CskDVa8y.js";import"./settings-DbzZchXt.js";import"./events-OVwOsPzJ.js";import"./index-P6UCShJt.js";import"./bucket-5-CQjaVkio.js";import"./useIsomorphicEffect-l5L8NYko.js";import"./clamp-CsXXRQhr.js";import"./Carousel-Cc3QlNR6.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";function i(n){const a={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...c(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"coachmarkoverlayelements",children:"CoachmarkOverlayElements"}),`
`,e.jsx(a.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#about-onboarding",children:"About Onboarding"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#note-on-theming",children:"Note on theming"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#code-sample",children:"Code Sample"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#stackblitz-example-with-animated-media",children:"Stackblitz example with Animated Media"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(a.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(a.p,{children:`The CoachmarkOverlayElements is a composable container element, which should be
used only within the scope of a Coachmark or a CoachmarkFixed component. The
CoachmarkOverlayElements can contain one to N number of CoachmarkOverlayElement
components as children. When more than one CoachmarkOverlayElement component is
used in a CoachmarkOverlayElements, the components are displayed in a paginated
fashion within a carousel.`}),`
`,e.jsx(a.h2,{id:"about-onboarding",children:"About Onboarding"}),`
`,e.jsxs(a.p,{children:[e.jsx(a.a,{href:"https://pages.github.ibm.com/security/security-design/department/end-to-end-experiences/onboarding/overview/",rel:"nofollow",children:"Onboarding"}),`
is a continuous learning methodology and framework that aims to orient, onboard,
explain, educate, and cultivate novice users into high-functioning power users.`]}),`
`,e.jsx(a.h2,{id:"note-on-theming",children:"Note on theming"}),`
`,e.jsx(a.p,{children:`The CoachmarkOverlayElements does not directly take a theme prop, rather it
relies on the cascade from classes being set in the Coachmark / CoachmarkFixed /
CoachmarkStack components.`}),`
`,e.jsx(a.h2,{id:"example-usage",children:"Example usage"}),`
`,`
`,e.jsx(u,{className:"coachmarkExample",withSource:"none",children:e.jsx("div",{className:"CoachmarkBaseExampleUsage",children:e.jsx(g,{of:o})})}),`
`,e.jsx(a.h2,{id:"code-sample",children:"Code sample"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-jsx",children:`<Coachmark ... >
  <CoachmarkOverlayElements
    closeButtonLabel={'Done'}
    nextButtonText={'Next'}
    previousButtonLabel={'Back'}
    className={'myOverlayElements'}
    >
    ...
  </CoachmarkOverlayElements>

</Coachmark>

`})}),`
`,e.jsx(a.h2,{id:"stackblitz-example-with-animated-media",children:"Stackblitz example with Animated Media"}),`
`,e.jsx(a.p,{children:e.jsx(a.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/examples/carbon-for-ibm-products/CoachmarkWithAnimatedMedia",rel:"nofollow",children:e.jsx(a.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Example with Animated media"})})}),`
`,e.jsx(a.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(k,{})]})}function b(n={}){const{wrapper:a}={...c(),...n.components};return a?e.jsx(a,{...n,children:e.jsx(i,{...n})}):i(n)}const C=".CoachmarkBaseExampleUsage{position:relative;display:inline-block;box-sizing:border-box;padding:1rem;margin-inline-start:50%;max-block-size:100%;transform:translate(-50%)}.c4p--coachmark-overlay-elements__element-stepped-media img{block-size:100%;inline-size:100%}",j=""+new URL("sample-image-Xi2Ah9yk.png",import.meta.url).href,Q={title:"Experimental/Onboarding/Coachmark/Coachmark elements/CoachmarkOverlayElements",component:h,tags:["autodocs"],argTypes:{children:{control:{type:null}}},parameters:{styles:C,docs:{page:b}}},v=n=>{const a=d();return t.createElement(p,{align:"bottom",positionTune:{x:0,y:0},target:t.createElement(x,{label:"Show information",kind:"default"}),theme:a},t.createElement(h,{...n},t.createElement(r,{title:"Example 1",description:"This is an example description."}),t.createElement(r,{title:"Example 2",description:"This is another example description."})))},o=v.bind({});o.args={closeButtonLabel:"Done",nextButtonText:"Next",previousButtonLabel:"Back",className:"myOverlayElements",renderMedia:()=>t.createElement("img",{alt:"",src:j})};var m,s,l;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const V=["coachmarkOverlayElements"];export{V as __namedExportsOrder,o as coachmarkOverlayElements,Q as default};
