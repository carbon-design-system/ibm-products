import{j as e,M as x,ej as s,el as c,ek as u,r as d,eq as f,e as o,cO as b}from"./iframe-BfCV3bOI.js";import{d as k,e as C,B as j,b as y}from"./CoachmarkOverlayElements-113G7l7t.js";import{useMDXComponents as h}from"./index-D6XCO4qW.js";import{C as i,a as v}from"./CoachmarkBeacon-R1yFTngm.js";import{C as E}from"./CoachmarkButton-CFRfwl8p.js";import"./uuidv4-BN2rGLQG.js";import"./devtools-mGs0wnY2.js";import"./bucket-6-BUNG1ZbU.js";import"./useIsomorphicEffect-CGC_2bjf.js";import"./clamp-CsXXRQhr.js";import"./Carousel-J8drHLz7.js";function m(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...h(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Coachmark",component:i}),`
`,e.jsx(n.h1,{id:"coachmark",children:"Coachmark"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/coachmark/usage/",rel:"nofollow",children:"Usage guidelines"})}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#about-onboarding",children:"About Onboarding"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#note-on-theming",children:"Note on theming"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#tooltip-example-usage",children:"Tooltip example usage"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#tooltip-code-sample",children:"Tooltip code sample"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#floating-example-usage",children:"Floating example usage"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#floating-code-sample",children:"Floating code sample"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#stackblitz-example-with-animated-media",children:"Stackblitz example with Animated Media"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/coachmark/usage",rel:"nofollow",children:"Coachmarks"}),`
are just-in-time messages used to draw a user’s attention to a particular spot,
and explain new functionality or concepts they might not otherwise notice or
understand.`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Note:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`The target prop should always be either a CoachmarkBeacon or a
CoachmarkButton.`}),`
`,e.jsx(n.li,{children:`BEACON_KIND, COACHMARK_OVERLAY_KIND, COACHMARK_ALIGNMENT are enums exported as
a convenience from Coachmark.`}),`
`]}),`
`,e.jsx(n.h2,{id:"about-onboarding",children:"About Onboarding"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://pages.github.ibm.com/security/security-design/department/end-to-end-experiences/onboarding/overview/",rel:"nofollow",children:"Onboarding"}),`
is a continuous learning methodology and framework that aims to orient, onboard,
explain, educate, and cultivate novice users into high-functioning power users.`]}),`
`,e.jsx(n.h2,{id:"note-on-theming",children:"Note on theming"}),`
`,e.jsx(n.p,{children:`The Coachmark uses the theme prop (e.g., theme='dark') to set the appropriate
background and font colors for the overlay. Specify a value ('light' or 'dark')
to display properly within your usage.`}),`
`,e.jsx(n.h2,{id:"tooltip-example-usage",children:"Tooltip example usage"}),`
`,e.jsx(s,{className:"coachmarkExample",withSource:"none",children:e.jsx("div",{className:"CoachmarkBaseExampleUsage",children:e.jsx(c,{of:a})})}),`
`,e.jsx(n.h2,{id:"tooltip-code-sample",children:"Tooltip code sample"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Coachmark
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
`,e.jsx(n.h2,{id:"floating-example-usage",children:"Floating example usage"}),`
`,e.jsx(s,{className:"coachmarkExample",withSource:"none",children:e.jsx("div",{className:"CoachmarkBaseExampleUsage",children:e.jsx(c,{of:r})})}),`
`,e.jsx(n.h2,{id:"floating-code-sample",children:"Floating code sample"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Coachmark
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
`,e.jsx(n.h2,{id:"stackblitz-example-with-animated-media",children:"Stackblitz example with Animated Media"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/examples/carbon-for-ibm-products/CoachmarkWithAnimatedMedia",rel:"nofollow",children:e.jsx(n.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Example with Animated media"})})}),`
`,e.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(u,{})]})}function w(t={}){const{wrapper:n}={...h(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(m,{...t})}):m(t)}const O=".CoachmarkBaseExampleUsage{position:relative;display:inline-block;box-sizing:border-box;padding:1rem;margin-inline-start:50%;max-block-size:100%;transform:translate(-50%)}",L={title:"Preview Candidate/Onboarding/Coachmark/Coachmark",component:i,tags:["autodocs","Onboarding"],argTypes:{theme:{control:{type:null}},target:{control:{type:null}},children:{control:{type:null}},onClose:{control:{type:null}},overlayKind:{control:{type:null}},overlayRef:{control:{type:null}},portalTarget:{control:{type:null}},overlayClassName:{control:{type:null}},align:{options:["top","top-left","top-right","bottom","bottom-left","bottom-right","left","left-bottom","left-top","right","right-bottom","right-top"],control:{type:"select"}},className:{control:{type:null}},closeIconDescription:{control:{type:"text"},description:"Tooltip text and aria label for the Close button icon."}},parameters:{styles:O,docs:{page:w}}},p=t=>{const n=d.useRef(void 0);d.useEffect(()=>{n?.current?.scrollIntoView({block:"center",inline:"center"})});const g=f(),l=o.createElement(i,{...t,theme:g},o.createElement(k,{closeButtonLabel:"Done"},o.createElement(C,{title:"Hello World",description:"this is a description test"})));return["fixed","floating","stacked"].includes(t.overlayKind)?l:o.createElement("div",{style:{width:"4000px",height:"2000px"}},o.createElement("div",{style:{position:"absolute",top:"1000px",left:"2000px"},ref:n},l))},a=p.bind({});a.args={theme:"dark",align:"bottom",closeIconDescription:"Close",positionTune:{x:0,y:0},target:o.createElement(v,{label:"Show information",kind:j.DEFAULT})};const r=p.bind({});r.args={theme:"dark",align:"bottom",closeIconDescription:"Close",overlayKind:y.FLOATING,target:o.createElement(E,{kind:"tertiary",size:"md",label:"Show information",renderIcon:b},"Click Me")};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
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
    width: '4000px',
    height: '2000px'
  }}>
      <div style={{
      position: 'absolute',
      top: '1000px',
      left: '2000px'
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
    width: '4000px',
    height: '2000px'
  }}>
      <div style={{
      position: 'absolute',
      top: '1000px',
      left: '2000px'
    }} ref={ref}>
        {content}
      </div>
    </div> : content;
}`,...r.parameters?.docs?.source}}};const R=["tooltip","floating"];export{R as __namedExportsOrder,L as default,r as floating,a as tooltip};
