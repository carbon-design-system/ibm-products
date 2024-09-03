import{j as e}from"./settings-RejM0MIl.js";import{r as s}from"./index-BwDkhjyp.js";import{g as b}from"./story-helper-BJP0smTN.js";import{B as E,C as O,c as w,d as N}from"./CoachmarkOverlayElements-Yhgrzk-n.js";import{useMDXComponents as k}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-Z7f8NcXw.js";import{j as B,e as c,i as m,C as T}from"./index-Dh254eKQ.js";import{C as a}from"./Coachmark-DwM1BMNX.js";import{C as A}from"./CoachmarkBeacon-DNdTWIKA.js";import{C as D}from"./CoachmarkButton-C6A2ITE9.js";import{C as I}from"./bucket-4-CJvNKCp-.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-Dk74W0Oi.js";import"./floating-ui.react-DMp4y4mM.js";import"./index-BONylQH5.js";import"./events-C3mJejkM.js";import"./index-CzgULgXp.js";import"./tslib.es6-B4_xh3D5.js";import"./uuidv4-BQrI85uz.js";import"./devtools-DM-SaWXd.js";import"./bucket-5-CkJxodIN.js";import"./lodash-C6Eq4oiK.js";import"./SteppedAnimatedMedia-D3ovmKSK.js";import"./lottie-D0UQuq7-.js";import"./clamp-Bg2yowlN.js";import"./toNumber-DVQITUtX.js";import"./index-C0xX6qoh.js";import"./Carousel-CKpjRqOI.js";import"./iframe-D7LytXOE.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-DrFu-skq.js";import"./useIsomorphicEffect-D7JMtAof.js";function h(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...k(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(B,{title:"Coachmark",component:a}),`
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
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://pages.github.ibm.com/cdai-design/pal/components/onboarding/coachmark/usage",rel:"nofollow",children:"Coachmarks"}),`
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
`,e.jsx(c,{className:"coachmarkExample",withSource:"none",children:e.jsx("div",{className:"CoachmarkBaseExampleUsage",children:e.jsx(m,{of:t})})}),`
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
`,e.jsx(c,{className:"coachmarkExample",withSource:"none",children:e.jsx("div",{className:"CoachmarkBaseExampleUsage",children:e.jsx(m,{of:r})})}),`
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
`,e.jsx(T,{})]})}function K(o={}){const{wrapper:n}={...k(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(h,{...o})}):h(o)}const S=".CoachmarkBaseExampleUsage{position:relative;display:inline-block;max-height:100%;box-sizing:border-box;padding:1rem;margin-left:50%;transform:translate(-50%)}",fe={title:"Experimental/Components/Coachmark",component:a,tags:["autodocs"],argTypes:{theme:{control:{type:null}},target:{control:{type:null}},children:{control:{type:null}},onClose:{control:{type:null}},overlayKind:{control:{type:null}},overlayRef:{control:{type:null}},portalTarget:{control:{type:null}},overlayClassName:{control:{type:null}},align:{options:["top","top-left","top-right","bottom","bottom-left","bottom-right","left","left-bottom","left-top","right","right-bottom","right-top"],control:{type:"select"}},className:{control:{type:null}}},parameters:{styles:S,docs:{page:K}}},y=o=>{const n=s.useRef();s.useEffect(()=>{var l;(l=n==null?void 0:n.current)==null||l.scrollIntoView({block:"center",inline:"center"})});const v=b(),i=e.jsx(a,{...o,theme:v,children:e.jsx(w,{closeButtonLabel:"Done",children:e.jsx(N,{title:"Hello World",description:"this is a description test"})})});return["fixed","floating","stacked"].includes(o.overlayKind)?i:e.jsx("div",{style:{width:"4000px",height:"2000px"},children:e.jsx("div",{style:{position:"absolute",top:"1000px",left:"2000px"},ref:n,children:i})})},t=y.bind({});t.args={theme:"dark",align:"bottom",positionTune:{x:0,y:0},target:e.jsx(A,{label:"Show information",kind:E.DEFAULT})};const r=y.bind({});r.args={theme:"dark",align:"bottom",overlayKind:O.FLOATING,target:e.jsx(D,{kind:"tertiary",size:"md",label:"Show information",renderIcon:I,children:"Click Me"})};var d,p,x,g,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const ref = useRef();
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
}`,...(x=(p=t.parameters)==null?void 0:p.docs)==null?void 0:x.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.description}}};var f,C,j;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  const ref = useRef();
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
}`,...(j=(C=r.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};const Ce=["tooltip","floating"];export{Ce as __namedExportsOrder,fe as default,r as floating,t as tooltip};
