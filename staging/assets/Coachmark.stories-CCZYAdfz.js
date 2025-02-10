import{r as c,e as n}from"./index-BOZkNhcz.js";import{g as E}from"./story-helper-HIAsLHzl.js";import{c as O,d as w,B as N,C as B}from"./CoachmarkOverlayElements-C2zgpd1v.js";import{j as e,i as T,a as m,h as d,C as A}from"./index-CKePA1sA.js";import{useMDXComponents as j}from"./index-aaDvWpb8.js";import"./DocsRenderer-CFRXHY34-CAZB0tDV.js";import{C as i}from"./Coachmark-DCctwQ2y.js";import{C as D}from"./CoachmarkBeacon-CODTh8JA.js";import{C as I}from"./CoachmarkButton-DVGWihIo.js";import{C as K}from"./settings-DqneCnpo.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Cd8snwnz.js";import"./index-hBZdtWkn.js";import"./index-2uioG_CI.js";import"./uuidv4-BQrI85uz.js";import"./devtools-Bjt2CwRv.js";import"./bucket-5-DaBRhwMZ.js";import"./useIsomorphicEffect-C0ObacuX.js";import"./lodash-D2NXmG3r.js";import"./SteppedAnimatedMedia-DbOBfKU6.js";import"./lottie-BZLE-Bwx.js";import"./clamp-CasrEGCP.js";import"./toNumber-cOipFfRl.js";import"./Carousel-BNrkDd2n.js";import"./iframe-BLi-C7G1.js";import"./index-CO8sV34W.js";import"./index-ogSvIofg.js";import"./react-18-Cs6RDBhU.js";import"./index-CN8ymWyE.js";import"./events-OVwOsPzJ.js";function h(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...j(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(T,{title:"Coachmark",component:i}),`
`,e.jsx(o.h1,{id:"coachmark",children:"Coachmark"}),`
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
`,e.jsx(m,{className:"coachmarkExample",withSource:"none",children:e.jsx("div",{className:"CoachmarkBaseExampleUsage",children:e.jsx(d,{of:r})})}),`
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
`,e.jsx(m,{className:"coachmarkExample",withSource:"none",children:e.jsx("div",{className:"CoachmarkBaseExampleUsage",children:e.jsx(d,{of:a})})}),`
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
`,e.jsx(o.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(A,{})]})}function S(t={}){const{wrapper:o}={...j(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(h,{...t})}):h(t)}const _=".CoachmarkBaseExampleUsage{position:relative;display:inline-block;box-sizing:border-box;padding:1rem;margin-inline-start:50%;max-block-size:100%;transform:translate(-50%)}",he={title:"Experimental/Onboarding/Coachmark",component:i,tags:["autodocs"],argTypes:{theme:{control:{type:null}},target:{control:{type:null}},children:{control:{type:null}},onClose:{control:{type:null}},overlayKind:{control:{type:null}},overlayRef:{control:{type:null}},portalTarget:{control:{type:null}},overlayClassName:{control:{type:null}},align:{options:["top","top-left","top-right","bottom","bottom-left","bottom-right","left","left-bottom","left-top","right","right-bottom","right-top"],control:{type:"select"}},className:{control:{type:null}}},parameters:{styles:_,docs:{page:S}}},b=t=>{const o=c.useRef(void 0);c.useEffect(()=>{var s;(s=o==null?void 0:o.current)==null||s.scrollIntoView({block:"center",inline:"center"})});const v=E(),l=n.createElement(i,{...t,theme:v},n.createElement(O,{closeButtonLabel:"Done"},n.createElement(w,{title:"Hello World",description:"this is a description test"})));return["fixed","floating","stacked"].includes(t.overlayKind)?l:n.createElement("div",{style:{width:"4000px",height:"2000px"}},n.createElement("div",{style:{position:"absolute",top:"1000px",left:"2000px"},ref:o},l))},r=b.bind({});r.args={theme:"dark",align:"bottom",positionTune:{x:0,y:0},target:n.createElement(D,{label:"Show information",kind:N.DEFAULT})};const a=b.bind({});a.args={theme:"dark",align:"bottom",overlayKind:B.FLOATING,target:n.createElement(I,{kind:"tertiary",size:"md",label:"Show information",renderIcon:K},"Click Me")};var p,g,u,x,f;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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
}`,...(y=(k=a.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};const pe=["tooltip","floating"];export{pe as __namedExportsOrder,he as default,a as floating,r as tooltip};
