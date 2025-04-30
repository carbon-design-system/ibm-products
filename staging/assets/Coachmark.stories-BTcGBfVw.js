import{r as c,e as n}from"./index-DzvNrmz8.js";import{g as E}from"./story-helper-DPPXKxdX.js";import{d as w,e as O,B as A,b as N}from"./CoachmarkOverlayElements-ANulXPAn.js";import{j as e}from"./index-Cg1swjps.js";import{useMDXComponents as j}from"./index-B7BkHM3Y.js";import"./index-TT84mNRS.js";import{C as i}from"./Coachmark-WJZlnOdz.js";import{C as B}from"./CoachmarkBeacon-gNEKbPkZ.js";import{C as T}from"./CoachmarkButton-DZaZfGBI.js";import{Q as D}from"./settings-CP9zVSjJ.js";import{k as S,a as m,j as d,C as M}from"./index-CwcgRXWl.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-5As4T26e.js";import"./uuidv4-BN2rGLQG.js";import"./devtools-B_dijMH7.js";import"./bucket-5-CQjaVkio.js";import"./useIsomorphicEffect-l5L8NYko.js";import"./clamp-CsXXRQhr.js";import"./Carousel-BScPKJZf.js";import"./index-Bv4JGo1_.js";import"./preview-B_jYMs5d.js";import"./iframe-BsXekYnT.js";import"./DocsRenderer-CFRXHY34-Dv3JWg4F.js";import"./client-fwTTGz69.js";import"./index-P6UCShJt.js";import"./events-OVwOsPzJ.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";function h(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...j(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(S,{title:"Coachmark",component:i}),`
`,e.jsx(t.h1,{id:"coachmark",children:"Coachmark"}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/coachmark/usage/",rel:"nofollow",children:"Coachmark usage guidelines"})}),`
`,e.jsx(t.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#about-onboarding",children:"About Onboarding"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#note-on-theming",children:"Note on theming"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#tooltip-example-usage",children:"Tooltip example usage"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#tooltip-code-sample",children:"Tooltip code sample"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#floating-example-usage",children:"Floating example usage"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#floating-code-sample",children:"Floating code sample"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#stackblitz-example-with-animated-media",children:"Stackblitz example with Animated Media"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/coachmark/usage",rel:"nofollow",children:"Coachmarks"}),`
are just-in-time messages used to draw a user’s attention to a particular spot,
and explain new functionality or concepts they might not otherwise notice or
understand.`]}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Note:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:`The target prop should always be either a CoachmarkBeacon or a
CoachmarkButton.`}),`
`,e.jsx(t.li,{children:`BEACON_KIND, COACHMARK_OVERLAY_KIND, COACHMARK_ALIGNMENT are enums exported as
a convenience from Coachmark.`}),`
`]}),`
`,e.jsx(t.h2,{id:"about-onboarding",children:"About Onboarding"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.a,{href:"https://pages.github.ibm.com/security/security-design/department/end-to-end-experiences/onboarding/overview/",rel:"nofollow",children:"Onboarding"}),`
is a continuous learning methodology and framework that aims to orient, onboard,
explain, educate, and cultivate novice users into high-functioning power users.`]}),`
`,e.jsx(t.h2,{id:"note-on-theming",children:"Note on theming"}),`
`,e.jsx(t.p,{children:`The Coachmark uses the theme prop (e.g., theme='dark') to set the appropriate
background and font colors for the overlay. Specify a value ('light' or 'dark')
to display properly within your usage.`}),`
`,e.jsx(t.h2,{id:"tooltip-example-usage",children:"Tooltip example usage"}),`
`,e.jsx(m,{className:"coachmarkExample",withSource:"none",children:e.jsx("div",{className:"CoachmarkBaseExampleUsage",children:e.jsx(d,{of:a})})}),`
`,e.jsx(t.h2,{id:"tooltip-code-sample",children:"Tooltip code sample"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`<Coachmark
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
`,e.jsx(t.h2,{id:"floating-example-usage",children:"Floating example usage"}),`
`,e.jsx(m,{className:"coachmarkExample",withSource:"none",children:e.jsx("div",{className:"CoachmarkBaseExampleUsage",children:e.jsx(d,{of:r})})}),`
`,e.jsx(t.h2,{id:"floating-code-sample",children:"Floating code sample"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`<Coachmark
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
`,e.jsx(t.h2,{id:"stackblitz-example-with-animated-media",children:"Stackblitz example with Animated Media"}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/examples/carbon-for-ibm-products/CoachmarkWithAnimatedMedia",rel:"nofollow",children:e.jsx(t.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Example with Animated media"})})}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(M,{})]})}function _(o={}){const{wrapper:t}={...j(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(h,{...o})}):h(o)}const I=".CoachmarkBaseExampleUsage{position:relative;display:inline-block;box-sizing:border-box;padding:1rem;margin-inline-start:50%;max-block-size:100%;transform:translate(-50%)}",me={title:"Experimental/Onboarding/Coachmark",component:i,tags:["autodocs"],argTypes:{theme:{control:{type:null}},target:{control:{type:null}},children:{control:{type:null}},onClose:{control:{type:null}},overlayKind:{control:{type:null}},overlayRef:{control:{type:null}},portalTarget:{control:{type:null}},overlayClassName:{control:{type:null}},align:{options:["top","top-left","top-right","bottom","bottom-left","bottom-right","left","left-bottom","left-top","right","right-bottom","right-top"],control:{type:"select"}},className:{control:{type:null}}},parameters:{styles:I,docs:{page:_}}},y=o=>{const t=c.useRef(void 0);c.useEffect(()=>{var s;(s=t==null?void 0:t.current)==null||s.scrollIntoView({block:"center",inline:"center"})});const v=E(),l=n.createElement(i,{...o,theme:v},n.createElement(w,{closeButtonLabel:"Done"},n.createElement(O,{title:"Hello World",description:"this is a description test"})));return["fixed","floating","stacked"].includes(o.overlayKind)?l:n.createElement("div",{style:{width:"4000px",height:"2000px"}},n.createElement("div",{style:{position:"absolute",top:"1000px",left:"2000px"},ref:t},l))},a=y.bind({});a.args={theme:"dark",align:"bottom",positionTune:{x:0,y:0},target:n.createElement(B,{label:"Show information",kind:A.DEFAULT})};const r=y.bind({});r.args={theme:"dark",align:"bottom",overlayKind:N.FLOATING,target:n.createElement(T,{kind:"tertiary",size:"md",label:"Show information",renderIcon:D},"Click Me")};var p,g,x,u,f;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.description}}};var k,b,C;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
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
}`,...(C=(b=r.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const de=["tooltip","floating"];export{de as __namedExportsOrder,me as default,r as floating,a as tooltip};
