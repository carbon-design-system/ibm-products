import{R as t,r as c}from"./index-BwDkhjyp.js";import{g as E}from"./story-helper-6_fmjwZ-.js";import{B as O,C as w,c as N,d as B}from"./CoachmarkOverlayElements-Bqrc-vO0.js";import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{useMDXComponents as j}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-BgzNaMoH.js";import{j as T,e as m,i as d,C as A}from"./index-DXUYcqZv.js";import{C as i}from"./Coachmark-CRS2_EJe.js";import{C as D}from"./CoachmarkBeacon-CKOUaMj_.js";import{C as I}from"./CoachmarkButton-DDg4I1vb.js";import{C as K}from"./settings-xiNX1vM3.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Dk74W0Oi.js";import"./tslib.es6-B4_xh3D5.js";import"./uuidv4-BQrI85uz.js";import"./index-CQ0F2wkl.js";import"./index-BONylQH5.js";import"./devtools-Bz70ioU6.js";import"./bucket-5-BnP2u7x5.js";import"./useIsomorphicEffect-D7JMtAof.js";import"./lodash-C6Eq4oiK.js";import"./SteppedAnimatedMedia-BzeU5RwP.js";import"./lottie-D0UQuq7-.js";import"./clamp-Bg2yowlN.js";import"./toNumber-DVQITUtX.js";import"./index-C0xX6qoh.js";import"./Carousel-D8bIDKXH.js";import"./iframe-DanyPKBP.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-DrFu-skq.js";import"./index-ABeo-Xma.js";import"./index-CJvxHwuA.js";import"./events-OVwOsPzJ.js";function h(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...j(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(T,{title:"Coachmark",component:i}),`
`,e.jsx(n.h1,{id:"coachmark",children:"Coachmark"}),`
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
`,e.jsx(m,{className:"coachmarkExample",withSource:"none",children:e.jsx("div",{className:"CoachmarkBaseExampleUsage",children:e.jsx(d,{of:r})})}),`
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
`,e.jsx(m,{className:"coachmarkExample",withSource:"none",children:e.jsx("div",{className:"CoachmarkBaseExampleUsage",children:e.jsx(d,{of:a})})}),`
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
`,e.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(A,{})]})}function S(o={}){const{wrapper:n}={...j(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(h,{...o})}):h(o)}const R=".CoachmarkBaseExampleUsage{position:relative;display:inline-block;max-height:100%;box-sizing:border-box;padding:1rem;margin-left:50%;transform:translate(-50%)}",Ce={title:"Experimental/Onboarding/Coachmark",component:i,tags:["autodocs"],argTypes:{theme:{control:{type:null}},target:{control:{type:null}},children:{control:{type:null}},onClose:{control:{type:null}},overlayKind:{control:{type:null}},overlayRef:{control:{type:null}},portalTarget:{control:{type:null}},overlayClassName:{control:{type:null}},align:{options:["top","top-left","top-right","bottom","bottom-left","bottom-right","left","left-bottom","left-top","right","right-bottom","right-top"],control:{type:"select"}},className:{control:{type:null}}},parameters:{styles:R,docs:{page:S}}},v=o=>{const n=c.useRef(void 0);c.useEffect(()=>{var s;(s=n==null?void 0:n.current)==null||s.scrollIntoView({block:"center",inline:"center"})});const b=E(),l=t.createElement(i,{...o,theme:b},t.createElement(N,{closeButtonLabel:"Done"},t.createElement(B,{title:"Hello World",description:"this is a description test"})));return["fixed","floating","stacked"].includes(o.overlayKind)?l:t.createElement("div",{style:{width:"4000px",height:"2000px"}},t.createElement("div",{style:{position:"absolute",top:"1000px",left:"2000px"},ref:n},l))},r=v.bind({});r.args={theme:"dark",align:"bottom",positionTune:{x:0,y:0},target:t.createElement(D,{label:"Show information",kind:O.DEFAULT})};const a=v.bind({});a.args={theme:"dark",align:"bottom",overlayKind:w.FLOATING,target:t.createElement(I,{kind:"tertiary",size:"md",label:"Show information",renderIcon:K},"Click Me")};var p,g,u,x,f;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.description}}};var C,k,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
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
}`,...(y=(k=a.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};const ke=["tooltip","floating"];export{ke as __namedExportsOrder,Ce as default,a as floating,r as tooltip};
