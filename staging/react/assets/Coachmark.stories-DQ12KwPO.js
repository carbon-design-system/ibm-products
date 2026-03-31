var u=Object.defineProperty;var i=(t,o)=>u(t,"name",{value:o,configurable:!0});import{j as e,M as f,aA as c,aC as d,aB as b,e as n,r as m,aJ as k,aK as C}from"./iframe-CjBCRFVj.js";import{d as j,e as v,B as y,b as w}from"./CoachmarkOverlayElements-lK1C40at.js";import{useMDXComponents as p}from"./index-Ctp_zyBF.js";import{A as E}from"./index-Df1kEqRj.js";import{C as l,a as O,b as A}from"./CoachmarkButton-CFPqhy5s.js";import"./preload-helper-Cc2_yIPf.js";import"./uuidv4-Fbcg8Vng.js";import"./devtools-CsBMoq7i.js";import"./bucket-6-CXCYtBmh.js";import"./useIsomorphicEffect-CxQ5hh_U.js";import"./clamp-BCozvAmP.js";import"./Carousel-XVihAjwL.js";import"./bucket-10-ZrkysMit.js";import"./bucket-20-BOI0trXu.js";function h(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...p(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{title:"Coachmark",component:l}),`
`,e.jsx(o.h1,{id:"coachmark",children:"Coachmark"}),`
`,e.jsx(o.p,{children:e.jsx(o.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/coachmark/usage/",rel:"nofollow",children:"Usage guidelines"})}),`
`,e.jsx(o.h2,{id:"deprecation-notice",children:"Deprecation notice"}),`
`,e.jsxs(o.p,{children:[`This component is deprecated and will be removed in the next major version.
Please migrate to
`,e.jsx(o.a,{href:"https://carbon-for-ibm-products.netlify.app/?path=/docs/preview-onboarding-coachmark--overview",rel:"nofollow",children:"composable Coachmark"}),"."]}),`
`,e.jsx(o.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#about-onboarding",children:"About Onboarding"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#note-on-theming",children:"Note on theming"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#tooltip-example-usage",children:"Tooltip example usage"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#tooltip-code-sample",children:"Tooltip code sample"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#floating-example-usage",children:"Floating example usage"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#floating-code-sample",children:"Floating code sample"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#stackblitz-example-with-animated-media",children:"Stackblitz example with Animated Media"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(o.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/coachmark/usage",rel:"nofollow",children:"Coachmarks"}),`
are just-in-time messages used to draw a user’s attention to a particular spot,
and explain new functionality or concepts they might not otherwise notice or
understand.`]}),`
`,e.jsx(o.p,{children:e.jsx(o.strong,{children:"Note:"})}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:`The target prop should always be either a CoachmarkBeacon or a
CoachmarkButton.`}),`
`,e.jsx(o.li,{children:`BEACON_KIND, COACHMARK_OVERLAY_KIND, COACHMARK_ALIGNMENT are enums exported as
a convenience from Coachmark.`}),`
`]}),`
`,e.jsx(o.h2,{id:"about-onboarding",children:"About Onboarding"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.a,{href:"https://pages.github.ibm.com/security/security-design/department/end-to-end-experiences/onboarding/overview/",rel:"nofollow",children:"Onboarding"}),`
is a continuous learning methodology and framework that aims to orient, onboard,
explain, educate, and cultivate novice users into high-functioning power users.`]}),`
`,e.jsx(o.h2,{id:"note-on-theming",children:"Note on theming"}),`
`,e.jsx(o.p,{children:`The Coachmark uses the theme prop (e.g., theme='dark') to set the appropriate
background and font colors for the overlay. Specify a value ('light' or 'dark')
to display properly within your usage.`}),`
`,e.jsx(o.h2,{id:"tooltip-example-usage",children:"Tooltip example usage"}),`
`,e.jsx(c,{className:"coachmarkExample",withSource:"none",children:e.jsx("div",{className:"CoachmarkBaseExampleUsage",children:e.jsx(d,{of:a})})}),`
`,e.jsx(o.h2,{id:"tooltip-code-sample",children:"Tooltip code sample"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`<Coachmark
  theme={'light'}
  target={<CoachmarkBeacon label="Show information" kind={'tooltip'} />}
>
  <CoachmarkOverlayElements closeButtonLabel="Done">
    <CoachmarkOverlayElement
      title="Hello World"
      description="this is a description test"
    />
  </CoachmarkOverlayElements>
</Coachmark>
`})}),`
`,e.jsx(o.h2,{id:"floating-example-usage",children:"Floating example usage"}),`
`,e.jsx(c,{className:"coachmarkExample",withSource:"none",children:e.jsx("div",{className:"CoachmarkBaseExampleUsage coachmark_annotation",children:e.jsx(d,{of:r})})}),`
`,e.jsx(o.h2,{id:"floating-code-sample",children:"Floating code sample"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`<Coachmark
  theme={'dark'}
  align={'bottom'}
  overlayKind={'floating'}
  target={
    <CoachmarkButton
      kind="tertiary"
      size="md"
      label="Show information"
      renderIcon={Crossroads16}
    >
      Click Me
    </CoachmarkButton>
  }
>
  <CoachmarkOverlayElements closeButtonLabel="Done">
    <CoachmarkOverlayElement
      title="Hello World"
      description="this is a description test"
    />
  </CoachmarkOverlayElements>
</Coachmark>
`})}),`
`,e.jsx(o.h2,{id:"stackblitz-example-with-animated-media",children:"Stackblitz example with Animated Media"}),`
`,e.jsx(o.p,{children:e.jsx(o.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/examples/carbon-for-ibm-products/CoachmarkWithAnimatedMedia",rel:"nofollow",children:e.jsx(o.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Example with Animated media"})})}),`
`,e.jsx(o.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(b,{})]})}i(h,"_createMdxContent");function N(t={}){const{wrapper:o}={...p(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(h,{...t})}):h(t)}i(N,"MDXContent");const T=".CoachmarkBaseExampleUsage{position:relative;display:inline-block;box-sizing:border-box;padding:1rem;margin-inline-start:50%;max-block-size:100%;transform:translate(-50%)}#story--deprecated-coachmark-coachmark--tooltip .story-wrapper{margin-inline-start:100px}",V={title:"Deprecated/Coachmark/Coachmark",component:l,tags:["autodocs","Onboarding"],argTypes:{theme:{control:{type:null}},target:{control:{type:null}},children:{control:{type:null}},onClose:{control:{type:null}},overlayKind:{control:{type:null}},overlayRef:{control:{type:null}},portalTarget:{control:{type:null}},overlayClassName:{control:{type:null}},align:{options:["top","top-left","top-right","bottom","bottom-left","bottom-right","left","left-bottom","left-top","right","right-bottom","right-top"],control:{type:"select"}},className:{control:{type:null}},closeIconDescription:{control:{type:"text"},description:"Tooltip text and aria label for the Close button icon."}},decorators:[t=>n.createElement(E,{type:"deprecation-notice",text:n.createElement("div",null,"This component is deprecated and will be removed in the next major version. Please migrate to ",n.createElement("a",{href:"/?path=/docs/preview-onboarding-coachmark--overview"},"composable Coachmark"),".")},t())],parameters:{styles:T,docs:{page:N}}},x=i(t=>{const o=m.useRef(void 0);m.useEffect(()=>{o?.current?.scrollIntoView({block:"center",inline:"center"})});const g=k(),s=n.createElement(l,{...t,theme:g},n.createElement(j,{closeButtonLabel:"Done"},n.createElement(v,{title:"Hello World",description:"this is a description test"})));return["fixed","floating","stacked"].includes(t.overlayKind)?s:n.createElement("div",{style:{width:"1000px",height:"500px"}},n.createElement("div",{style:{position:"absolute",top:"250px",left:"150px"},ref:o},s))},"Template"),a=x.bind({});a.args={theme:"dark",align:"bottom",closeIconDescription:"Close",positionTune:{x:0,y:0},target:n.createElement(O,{label:"Show information",kind:y.DEFAULT})};const r=x.bind({});r.args={theme:"dark",align:"bottom",closeIconDescription:"Close",overlayKind:w.FLOATING,target:n.createElement(A,{kind:"tertiary",size:"md",label:"Show information",renderIcon:C},"Click Me")};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  const ref = useRef(undefined);
  useEffect(() => {
    ref?.current?.scrollIntoView({
      block: 'center',
      inline: 'center'
    });
  });
  const theme = getSelectedCarbonTheme();
  const content = <Coachmark {...args} theme={theme}>
      <CoachmarkOverlayElements closeButtonLabel="Done">
        <CoachmarkOverlayElement title="Hello World" description="this is a description test" />
      </CoachmarkOverlayElements>
    </Coachmark>;
  return !['fixed', 'floating', 'stacked'].includes(args.overlayKind) ? <div style={{
    width: '1000px',
    height: '500px'
  }}>
      <div style={{
      position: 'absolute',
      top: '250px',
      left: '150px'
    }} ref={ref}>
        {content}
      </div>
    </div> : content;
}`,...a.parameters?.docs?.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  const ref = useRef(undefined);
  useEffect(() => {
    ref?.current?.scrollIntoView({
      block: 'center',
      inline: 'center'
    });
  });
  const theme = getSelectedCarbonTheme();
  const content = <Coachmark {...args} theme={theme}>
      <CoachmarkOverlayElements closeButtonLabel="Done">
        <CoachmarkOverlayElement title="Hello World" description="this is a description test" />
      </CoachmarkOverlayElements>
    </Coachmark>;
  return !['fixed', 'floating', 'stacked'].includes(args.overlayKind) ? <div style={{
    width: '1000px',
    height: '500px'
  }}>
      <div style={{
      position: 'absolute',
      top: '250px',
      left: '150px'
    }} ref={ref}>
        {content}
      </div>
    </div> : content;
}`,...r.parameters?.docs?.source}}};const X=["tooltip","floating"];export{X as __namedExportsOrder,V as default,r as floating,a as tooltip};
//# sourceMappingURL=Coachmark.stories-DQ12KwPO.js.map
