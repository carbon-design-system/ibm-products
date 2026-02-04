import{j as t,aC as A,e as n,r as l,c as U,p as N,C as z,P as B,B as d}from"./iframe-BBf3bqTv.js";import{useMDXComponents as F}from"./index-BQtCSjrU.js";import{c as k}from"./clamp-CsXXRQhr.js";import{S as L}from"./SelectableTag-BW8Rfx0p.js";import{I as r,a as h}from"./InterstitialScreenView-DhEuijMo.js";import{a as E}from"./bucket-1-DySQS0Gd.js";import"./preload-helper-D9Z9MdNV.js";import"./Tag-Dhuk6mzi.js";import"./Text-CaNb5F2n.js";import"./DefinitionTooltip-D6H_RviI.js";import"./index-DOwP6x5e.js";import"./bucket-19-zmdOpOwk.js";import"./utils-BgfmaY2S.js";import"./mergeRefs-BZpmU3mx.js";import"./useControllableState-DY2q8Reb.js";import"./ComposedModal-BW2ljFCb.js";import"./index-CbeIurAw.js";import"./LayerContext-BOWqFdTq.js";import"./clamp--00YEiB8.js";import"./ButtonSet-C3GUdjVj.js";import"./InlineLoading-Iu2BiOBt.js";import"./bucket-6-TRoxTq9G.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./wrapFocus-DaSELL9x.js";import"./devtools-c2gfrTL0.js";import"./ProgressIndicator-CIMPzV17.js";import"./bucket-10-BG8-V5O3.js";import"./useId-BfWl2o0S.js";import"./uuidv4-BN2rGLQG.js";import"./Carousel-Cug4A72a.js";import"./useIsomorphicEffect-ZKZ1smHY.js";function R(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...F(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"interstitialscreen",children:"InterstitialScreen"}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/interstitial-screen/usage",rel:"nofollow",children:"Usage guidelines"})}),`
`,t.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#overview",children:"Overview"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#expected-composability",children:"Expected Composability"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#about-onboarding",children:"About Onboarding"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#stackblitz-examples",children:"Stackblitz Examples"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,t.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,t.jsxs(e.p,{children:[t.jsx(e.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/interstitial-screen/usage",rel:"nofollow",children:"Interstitial screen"}),`
can be a full page or an overlay, and are shown on the first time a user
accesses a new experience (e.g. upon first login or first time opening a page
where a newly purchased capability is presented).`]}),`
`,t.jsx(e.h2,{id:"expected-composability",children:"Expected Composability"}),`
`,t.jsxs(e.p,{children:[`The InterstitialScreen component is structured using the compound component
pattern in React, with distinct and well-defined sections: Header, Body, and
Footer. `,t.jsx(e.code,{children:"InterstitialScreen"}),` acting as a container and
`,t.jsx(e.code,{children:"InterstitialScreen.Header"}),", ",t.jsx(e.code,{children:"InterstitialScreen.Body"}),`,
`,t.jsx(e.code,{children:"InterstitialScreen.Footer"})," are static properties of the ",t.jsx(e.code,{children:"InterstitialScreen"}),`
component, effectively acting as sub-components. All related parts of the
screen, the Header, Body and Footer are grouped under a single logical component
called `,t.jsx(e.code,{children:"InterstitialScreen"}),`. You can mix and match subcomponents or even omit
some.`]}),`
`,t.jsx(e.h3,{id:"interstitialscreenheader",children:"InterstitialScreen.Header"}),`
`,t.jsxs(e.p,{children:[`The Header component is designed to be fully composable. It accepts optional
props such as
`,t.jsx(e.code,{children:"className, headerTitle, headerSubTitle, closeIconDescription, hideProgressIndicator"}),`.
You can also provide custom children, which will be rendered below the header
title, subtitle and above the progress indicator. If the interstitial screen
includes multiple steps, the progress indicator is displayed automatically.`]}),`
`,t.jsx(e.h3,{id:"interstitialscreenbody",children:"InterstitialScreen.Body"}),`
`,t.jsx(e.p,{children:`The Body component represents the main content area of the interstitial screen.
It supports two ways of rendering content:`}),`
`,t.jsxs(e.p,{children:[t.jsxs(e.strong,{children:["1.Using the ",t.jsx(e.code,{children:"contentRenderer"})," prop"]}),t.jsx("br",{}),` You can pass a callback function to
the contentRenderer prop that returns any JSX to be displayed as the body
content.`]}),`
`,t.jsxs(e.p,{children:[`The component automatically determines the number of steps based on the number
of children returned. If you want to render multiple steps, wrap each step’s
content inside a wrapper component. You can either use the built-in
`,t.jsx(e.code,{children:"InterstitialScreenView"})," utility component or your own custom wrapper."]}),`
`,t.jsx(e.p,{children:`Each wrapper component accepts a stepTitle prop, which defines the label shown
in the progress indicator. You can also provide an translateWithId callback to
handle internationalized strings for message IDs.`}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`<InterstitialScreen.Body
  contentRenderer={({ handleGotoStep, progStep, disableActionButton }) => (
    <>
      <InterstitialScreenView stepTitle="Step 1">
        Content for Step 1
      </InterstitialScreenView>
      <InterstitialScreenView stepTitle="Step 2">
        Content for Step 2
      </InterstitialScreenView>
    </>
  )}
/>
`})}),`
`,t.jsx(e.p,{children:"The contentRenderer function receives an object with the following properties:"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`type contentRendererArgs = {
 handleGotoStep?: (value: number) => void; // Navigate to a specific step
 progStep?: number;                        // Current step number
 disableActionButton: (value: disableButtonConfigType) => void; // Disable footer action buttons
};
`})}),`
`,t.jsx(e.p,{children:`If your interstitial does not require multiple steps, you can simply return the
desired content directly as single child.`}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`<InterstitialScreen.Body
  contentRenderer={() => (
    <InterstitialScreenView>Content</InterstitialScreenView>
  )}
/>
`})}),`
`,t.jsx(e.p,{children:"or"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`<InterstitialScreen.Body contentRenderer={() => <div>Content</div>} />
`})}),`
`,t.jsxs(e.p,{children:[t.jsxs(e.strong,{children:["2.Passing static children of ",t.jsx(e.code,{children:"InterstitialScreen.Body"})]}),t.jsx("br",{}),` Alternatively,
you can render the body content by passing it directly as static children of
InterstitialScreen.Body, especially if you don’t need to perform step
operations.`]}),`
`,t.jsxs(e.p,{children:[`In this approach, the steps are inferred automatically based on the number of
child elements provided. You can use either your own custom wrapper component or
the built-in `,t.jsx(e.code,{children:"InterstitialScreenView"})," component to render each step’s content."]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`<InterstitialScreen.Body>
  <InterstitialScreenView stepTitle="Step 1">
    Content for Step 1
  </InterstitialScreenView>
  <InterstitialScreenView stepTitle="Step 2">
    Content for Step 2
  </InterstitialScreenView>
</InterstitialScreen.Body>
`})}),`
`,t.jsx(e.p,{children:`If your interstitial does not require multiple steps, you can simply return the
desired content directly as a single child`}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`<InterstitialScreen.Body>
  <InterstitialScreenView>Content</InterstitialScreenView>
</InterstitialScreen.Body>
`})}),`
`,t.jsx(e.p,{children:"or"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`<InterstitialScreen.Body>
  <div>Content</div>
</InterstitialScreen.Body>
`})}),`
`,t.jsx(e.h3,{id:"interstitialscreenfooter",children:"InterstitialScreen.Footer"}),`
`,t.jsxs(e.p,{children:[`The footer provides built-in behavior for rendering action buttons
automatically. `,t.jsx(e.strong,{children:"Without steps"}),`: The footer displays Skip (which closes the
interstitial) and Get started buttons. `,t.jsx(e.strong,{children:"With steps"}),`: It displays Skip, Back,
Previous, Next, and Start buttons, with step navigation handled internally.`]}),`
`,t.jsx(e.p,{children:"You can also override the default button labels using the provided props."}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"onAction"})," ",t.jsx("br",{})," The ",t.jsx(e.code,{children:"onAction"}),` prop is a callback triggered when a user
interacts with any footer action button (e.g., Next, Back, Skip, or Cancel). It
allows you to perform custom logic such as validation, asynchronous operations,
or conditional navigation before the interstitial proceeds to the next step. It
comes with args that can be used to perform step operation, disable action
buttons etc...`]}),`
`,t.jsx(e.p,{children:`If the callback performs an asynchronous operation, the action button will
automatically display a loading state until the promise resolves. You can
optionally return true from the callback to abort navigation and remain on the
same step.`}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`<InterstitialScreen.Footer
  onAction={async (actionType:'close' | 'start' | 'skip' | 'back' | 'next', config:actionButtonArgs) => {
    // Perform async tasks, such as validation or API calls
    await new Promise((resolve) => {
      // simulate async operation
      resolve();
    });

    return true; // optionally return true to prevent automatic navigation
  }}
/>

`})}),`
`,t.jsxs(e.p,{children:[`If your implementation doesn’t require any asynchronous operations, you can
simply define the `,t.jsx(e.code,{children:"onAction"}),` callback as a regular synchronous function. In this
case, the interstitial will immediately handle the action (e.g., move to the
next or previous step) once the callback completes.`]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`<InterstitialScreen.Footer
  onAction={(actionType, config) => {
    // Perform synchronous logic
    return true; // optionally return true to stay on the current step
  }}
/>
`})}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"actionButtonRenderer"}),t.jsx("br",{}),` If you want to override the default footer
behavior and render your own custom action buttons, you can use the
actionButtonRenderer prop. This callback provides configuration utilities that
allow you to control step operations manually.`]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`<InterstitialScreen.Footer
  actionButtonRenderer={({ handleGotoStep, progStep, stepCount }) => {
    return (
      <div className="custom-footer">
        <Button onClick={() => handleGotoStep?.(progStep - 1)}>Previous</Button>
        <Button onClick={() => handleGotoStep?.(progStep + 1)}>Next</Button>
      </div>
    );
  }}
/>
`})}),`
`,t.jsx(e.h2,{id:"about-onboarding",children:"About Onboarding"}),`
`,t.jsxs(e.p,{children:[t.jsx(e.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/patterns/onboarding-flows/overview/overview/",rel:"nofollow",children:"Onboarding"}),`
is a continuous learning methodology and framework that aims to orient, onboard,
explain, educate, and cultivate novice users into high-functioning power users.`]}),`
`,t.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`<InterstitialScreen open >
  <InterstitialScreen.Header
    headerTitle={'headerTitle'}
    headerSubTitle={'headerSubTitle'}
  ></InterstitialScreen.Header>
  <InterstitialScreen.Body
    contentRenderer={(internalConfig) => {
      return (
        <InterstitialScreenView
          className="NoImageExampleModal"
          stepTitle="Step 1"
        >
          Step 1 content
        </InterstitialScreenView>
         <InterstitialScreenView
          className="NoImageExampleModal"
          stepTitle="Step 2"
        >
          Step 2 content
        </InterstitialScreenView>
      );
    }}
  />
  <InterstitialScreen.Footer
    nextButtonLabel="Next"
    previousButtonLabel="Back"
    skipButtonLabel="Skip"
    startButtonLabel="Get started"
  />
</InterstitialScreen>
`})}),`
`,t.jsx(e.h2,{id:"stackblitz-examples",children:"Stackblitz Examples"}),`
`,t.jsx(e.h4,{id:"example-using-sample-design-from-usage-guidelines",children:"Example using sample design from usage guidelines"}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/examples/carbon-for-ibm-products/InterstitialScreen",rel:"nofollow",children:t.jsx(e.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Example 1"})})}),`
`,t.jsx(e.h4,{id:"example-using-steppedanimatedmedia-and-lottie-web",children:"Example using steppedAnimatedMedia and lottie web"}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/examples/carbon-for-ibm-products/InterstitialScreenWithAnimatedMedia",rel:"nofollow",children:t.jsx(e.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Example 1"})})}),`
`,t.jsx(e.h4,{id:"example-using-interstitialview-and-interstitialviewmodule-components",children:"Example using InterstitialView and InterstitialViewModule components"}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/examples/carbon-for-ibm-products/InterstitialScreenView",rel:"nofollow",children:t.jsx(e.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Example 1"})})}),`
`,t.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,t.jsx(A,{})]})}function M(i={}){const{wrapper:e}={...F(),...i.components};return e?t.jsx(e,{...i,children:t.jsx(R,{...i})}):R(i)}const V=".CustomLayout{display:flex;flex-wrap:wrap;padding:2rem;gap:1rem}.storyCardExample{flex-grow:1;padding:1.5rem;border:1px solid var(--cds-border-inverse, #161616);background-color:var(--cds-layer-accent-01, #e0e0e0);block-size:350px;inline-size:20%}.GenericView{margin-block-start:6rem!important}.NoImageExampleModal{inline-size:100%}@media (min-width: 672px){.NoImageExampleModal{inline-size:75%}}.NoImageExampleFullScreen{inline-size:100%}@media (min-width: 672px){.NoImageExampleFullScreen{inline-size:75%}}@media (min-width: 1056px){.NoImageExampleFullScreen{inline-size:50%}}.c4p--interstitial-screen-view-module--enableTag{margin-block-start:2rem}",C=`${N.prefix}--interstitial-screen-view-module`,H="InterstitialScreenViewModule",p=n.forwardRef(({className:i,title:e,description:a,disableActionButton:s,...c},u)=>{l.useEffect(()=>{s?.({start:!0})},[]);const m=S=>{s?.({start:!S})};return n.createElement("section",{...c,className:U(C,i),ref:u},n.createElement("h1",{className:`${C}--heading`},e),n.createElement("p",{className:`${C}--body`},a),s&&n.createElement(L,{renderIcon:z,text:"Enable Get Started",className:`${C}--enableTag`,onChange:m}))});p.displayName=H;p.propTypes={className:B.string,description:B.string.isRequired,disableActionButton:B.func,title:B.string.isRequired};p.__docgenInfo={description:"View module to help in building interstitial screen views.",methods:[],displayName:"InterstitialScreenViewModule",props:{className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}},description:{required:!0,tsType:{name:"string"},description:"The description of this component.",type:{name:"string"}},title:{required:!0,tsType:{name:"string"},description:"The title of this component.",type:{name:"string"}},disableActionButton:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: disableButtonConfigType) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  skip?: boolean;
  back?: boolean;
  next?: boolean;
  start?: boolean;
}`,signature:{properties:[{key:"skip",value:{name:"boolean",required:!1}},{key:"back",value:{name:"boolean",required:!1}},{key:"next",value:{name:"boolean",required:!1}},{key:"start",value:{name:"boolean",required:!1}}]}},name:"value"}],return:{name:"void"}}},description:`@param value This is callback to disable any action button dynamically
@returns void`,type:{name:"func"}}}};const _="interstitial-stories",f=`${N.prefix}--interstitial-screen`,xe={title:"Components/Onboarding/InterstitialScreen",component:r,tags:["autodocs","Onboarding"],subcomponents:{Header:r.Header,Body:r.Body,Footer:r.Footer,InterstitialScreenView:h},decorators:[i=>n.createElement("div",{className:`${_}__viewport`},i())],parameters:{styles:V,docs:{page:M}}},g={"carbon.progress-step.complete":"Terminé","carbon.progress-step.incomplete":"Partiel","carbon.progress-step.current":"Actuel","carbon.progress-step.invalid":"Non valide"},T=({handleGotoStep:i})=>n.createElement(n.Fragment,null,n.createElement(h,{stepTitle:"Step 1",translateWithId:e=>g[e]??e},n.createElement(p,{size:"md",title:"Use case-specific heading 1",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."})),n.createElement(h,{stepTitle:"Step 2",translateWithId:e=>g[e]??e},n.createElement(p,{size:"md",title:"Use case-specific heading 2",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."})),n.createElement(h,{stepTitle:"Step 3",translateWithId:e=>g[e]??e},n.createElement(p,{size:"md",title:"Use case-specific heading 3",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."})),n.createElement(h,{stepTitle:"Step 4",translateWithId:e=>g[e]??e},n.createElement(p,{size:"md",title:"Use case-specific heading 4",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."})),n.createElement(h,{stepTitle:"Step 5",translateWithId:e=>g[e]??e},n.createElement(p,{size:"md",title:"Use case-specific heading 5",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."}))),P=({handleGotoStep:i,disableActionButton:e},a,s)=>n.createElement(n.Fragment,null,n.createElement(h,{stepTitle:"Step 1"},n.createElement(p,{className:s?"GenericView":"",title:"Use case-specific heading",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept.",disableActionButton:e}))),o={headerTitle:"Use case-specific title",headerSubTitle:"Use case-specific sub title",ariaLabel:"Interstitial Screen"},b=()=>{const[i,e]=l.useState(!0),a=l.useRef(null);return n.createElement(n.Fragment,null,n.createElement(d,{onClick:()=>{e(!0)},ref:a},"Show Interstitial modal"),n.createElement(r,{open:i,onClose:()=>{e(!1)},ariaLabel:o.ariaLabel,launcherButtonRef:a},n.createElement(r.Header,{headerTitle:o.headerTitle,headerSubTitle:o.headerSubTitle,hideProgressIndicator:!0}),n.createElement(r.Body,{contentRenderer:s=>P(s)}),n.createElement(r.Footer,null)))},x=()=>{const[i,e]=l.useState(!0),a=l.useRef(null);return n.createElement(n.Fragment,null,n.createElement(d,{onClick:()=>{e(!0)},ref:a},"Show Interstitial modal"),n.createElement(r,{open:i,onClose:()=>{e(!1)},ariaLabel:o.ariaLabel,launcherButtonRef:a},n.createElement(r.Header,{headerTitle:o.headerTitle,headerSubTitle:o.headerSubTitle}),n.createElement(r.Body,{contentRenderer:s=>T(s)}),n.createElement(r.Footer,null)))},I=()=>{const[i,e]=l.useState(!0),a=l.useRef(null);return n.createElement(n.Fragment,null,n.createElement(d,{onClick:()=>{e(!0)},ref:a},"Show Interstitial modal"),n.createElement(r,{open:i,onClose:()=>{e(!1)},ariaLabel:o.ariaLabel,launcherButtonRef:a},n.createElement(r.Header,{headerTitle:o.headerTitle,headerSubTitle:o.headerSubTitle}),n.createElement(r.Body,{contentRenderer:s=>T(s)}),n.createElement(r.Footer,{actionButtonRenderer:({handleGotoStep:s,progStep:c,stepCount:u})=>n.createElement(n.Fragment,null,n.createElement(d,{className:`${f}--skip-btn`,kind:"ghost",size:"lg",title:"Explore on my own",onClick:()=>e(!1)},"Explore on my own"),n.createElement("div",{className:`${f}--footer-controls`},c>0&&n.createElement(d,{className:`${f}--prev-btn`,kind:"secondary",size:"lg",title:"Previous",onClick:()=>{const S=u-1,v=k(c-1,0,S);s(v)}},"Previous"),c<u-1&&n.createElement(d,{className:`${f}--next-btn`,renderIcon:E,size:"lg",title:"Next",onClick:()=>{const S=u-1,v=k(c+1,0,S);s(v)}},"Next"),c===u-1&&n.createElement(d,{className:`${f}--start-btn`,renderIcon:E,size:"lg",title:"Start",onClick:()=>e(!1)},"Start")))})))},w=()=>{const[i,e]=l.useState(!0),a=l.useRef(null),s=async(c,u)=>{c!=="skip"&&await new Promise(m=>{setTimeout(()=>{m()},1500)})};return n.createElement(n.Fragment,null,n.createElement(d,{onClick:()=>{e(!0)},ref:a},"Show Interstitial modal"),n.createElement(r,{open:i,onClose:()=>{e(!1)},ariaLabel:o.ariaLabel,launcherButtonRef:a},n.createElement(r.Header,{headerTitle:o.headerTitle,headerSubTitle:o.headerSubTitle}),n.createElement(r.Body,{contentRenderer:c=>T(c)}),n.createElement(r.Footer,{onAction:s})))},y=()=>{const[i,e]=l.useState(!0);l.useState(!0);const a=l.useRef(null);return n.createElement(n.Fragment,null,n.createElement(d,{onClick:()=>{e(!0)},ref:a},"Show Interstitial full screen"),n.createElement(r,{open:i,onClose:()=>{e(!1)},isFullScreen:!0,ariaLabel:o.ariaLabel,launcherButtonRef:a},n.createElement(r.Header,{headerTitle:o.headerTitle,headerSubTitle:o.headerSubTitle}),n.createElement(r.Body,{contentRenderer:s=>P(s,!0,!0)}),n.createElement(r.Footer,null)))},j=()=>{const[i,e]=l.useState(!0);l.useState(!0);const a=l.useRef(null);return n.createElement(n.Fragment,null,n.createElement(d,{onClick:()=>{e(!0)},ref:a},"Show Interstitial full screen"),n.createElement(r,{open:i,onClose:()=>{e(!1)},isFullScreen:!0,ariaLabel:o.ariaLabel,launcherButtonRef:a},n.createElement(r.Header,{headerTitle:o.headerTitle,headerSubTitle:o.headerSubTitle}),n.createElement(r.Body,{contentRenderer:s=>T(s)}),n.createElement(r.Footer,null)))};b.__docgenInfo={description:"",methods:[],displayName:"Modal"};x.__docgenInfo={description:"",methods:[],displayName:"ModalWithMultipleSteps"};I.__docgenInfo={description:"",methods:[],displayName:"WithCustomActionButtons"};w.__docgenInfo={description:"",methods:[],displayName:"WithAsynchronousActionCallback"};y.__docgenInfo={description:"",methods:[],displayName:"fullScreen"};j.__docgenInfo={description:"",methods:[],displayName:"fullScreenWithMultipleSteps"};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const [showInterstitialScreen, setShowInterstitialScreen] = useState(true);
  const launcherButtonRef = useRef(null);
  return <>
      <Button onClick={() => {
      setShowInterstitialScreen(true);
    }} ref={launcherButtonRef}>
        Show Interstitial modal
      </Button>

      <InterstitialScreen open={showInterstitialScreen} onClose={() => {
      setShowInterstitialScreen(false);
    }} ariaLabel={defaultProps.ariaLabel} launcherButtonRef={launcherButtonRef}>
        <InterstitialScreen.Header headerTitle={defaultProps.headerTitle} headerSubTitle={defaultProps.headerSubTitle} hideProgressIndicator={true}></InterstitialScreen.Header>
        <InterstitialScreen.Body contentRenderer={internalConfig => {
        return getSingleContent(internalConfig, true);
      }} />
        <InterstitialScreen.Footer />
      </InterstitialScreen>
    </>;
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const [showInterstitialScreen, setShowInterstitialScreen] = useState(true);
  const launcherButtonRef = useRef(null);
  return <>
      <Button onClick={() => {
      setShowInterstitialScreen(true);
    }} ref={launcherButtonRef}>
        Show Interstitial modal
      </Button>

      <InterstitialScreen open={showInterstitialScreen} onClose={() => {
      setShowInterstitialScreen(false);
    }} ariaLabel={defaultProps.ariaLabel} launcherButtonRef={launcherButtonRef}>
        <InterstitialScreen.Header headerTitle={defaultProps.headerTitle} headerSubTitle={defaultProps.headerSubTitle}></InterstitialScreen.Header>
        <InterstitialScreen.Body contentRenderer={internalConfig => {
        return getMultipleContent(internalConfig);
      }} />
        <InterstitialScreen.Footer />
      </InterstitialScreen>
    </>;
}`,...x.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const [showInterstitialScreen, setShowInterstitialScreen] = useState(true);
  const launcherButtonRef = useRef(null);
  return <>
      <Button onClick={() => {
      setShowInterstitialScreen(true);
    }} ref={launcherButtonRef}>
        Show Interstitial modal
      </Button>

      <InterstitialScreen open={showInterstitialScreen} onClose={() => {
      setShowInterstitialScreen(false);
    }} ariaLabel={defaultProps.ariaLabel} launcherButtonRef={launcherButtonRef}>
        <InterstitialScreen.Header headerTitle={defaultProps.headerTitle} headerSubTitle={defaultProps.headerSubTitle}></InterstitialScreen.Header>
        <InterstitialScreen.Body contentRenderer={internalConfig => {
        return getMultipleContent(internalConfig);
      }} />
        <InterstitialScreen.Footer actionButtonRenderer={({
        handleGotoStep,
        progStep,
        stepCount
      }) => {
        return <>
                <Button className={\`\${blockClass}--skip-btn\`} kind="ghost" size="lg" title={'Explore on my own'} onClick={() => setShowInterstitialScreen(false)}>
                  Explore on my own
                </Button>
                <div className={\`\${blockClass}--footer-controls\`}>
                  {progStep > 0 && <Button className={\`\${blockClass}--prev-btn\`} kind="secondary" size="lg" title={'Previous'} onClick={() => {
              const progStepFloor = 0;
              const progStepCeil = stepCount - 1;
              const targetStep = clamp(progStep - 1, progStepFloor, progStepCeil);
              handleGotoStep(targetStep);
            }}>
                      Previous
                    </Button>}

                  {progStep < stepCount - 1 && <Button className={\`\${blockClass}--next-btn\`} renderIcon={ArrowRight} size="lg" title={'Next'} onClick={() => {
              const progStepFloor = 0;
              const progStepCeil = stepCount - 1;
              const targetStep = clamp(progStep + 1, progStepFloor, progStepCeil);
              handleGotoStep(targetStep);
            }}>
                      Next
                    </Button>}

                  {progStep === stepCount - 1 && <Button className={\`\${blockClass}--start-btn\`} renderIcon={ArrowRight} size="lg" title={'Start'} onClick={() => setShowInterstitialScreen(false)}>
                      Start
                    </Button>}
                </div>
              </>;
      }} />
      </InterstitialScreen>
    </>;
}`,...I.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const [showInterstitialScreen, setShowInterstitialScreen] = useState(true);
  const launcherButtonRef = useRef(null);
  const onAction = async (actionType, config) => {
    if (actionType !== 'skip') {
      await new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, 1500);
      });
    }
  };
  return <>
      <Button onClick={() => {
      setShowInterstitialScreen(true);
    }} ref={launcherButtonRef}>
        Show Interstitial modal
      </Button>

      <InterstitialScreen open={showInterstitialScreen} onClose={() => {
      setShowInterstitialScreen(false);
    }} ariaLabel={defaultProps.ariaLabel} launcherButtonRef={launcherButtonRef}>
        <InterstitialScreen.Header headerTitle={defaultProps.headerTitle} headerSubTitle={defaultProps.headerSubTitle}></InterstitialScreen.Header>
        <InterstitialScreen.Body contentRenderer={internalConfig => {
        return getMultipleContent(internalConfig);
      }} />
        <InterstitialScreen.Footer onAction={onAction} />
      </InterstitialScreen>
    </>;
}`,...w.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const [showInterstitialScreen, setShowInterstitialScreen] = useState(true);
  useState(true);
  const launcherButtonRef = useRef(null);
  return <>
      <Button onClick={() => {
      setShowInterstitialScreen(true);
    }} ref={launcherButtonRef}>
        Show Interstitial full screen
      </Button>
      <InterstitialScreen open={showInterstitialScreen} onClose={() => {
      setShowInterstitialScreen(false);
    }} isFullScreen={true} ariaLabel={defaultProps.ariaLabel} launcherButtonRef={launcherButtonRef}>
        <InterstitialScreen.Header headerTitle={defaultProps.headerTitle} headerSubTitle={defaultProps.headerSubTitle}></InterstitialScreen.Header>
        <InterstitialScreen.Body contentRenderer={internalConfig => {
        return getSingleContent(internalConfig, true, true);
      }} />
        <InterstitialScreen.Footer />
      </InterstitialScreen>
    </>;
}`,...y.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  const [showInterstitialScreen, setShowInterstitialScreen] = useState(true);
  useState(true);
  const launcherButtonRef = useRef(null);
  return <>
      <Button onClick={() => {
      setShowInterstitialScreen(true);
    }} ref={launcherButtonRef}>
        Show Interstitial full screen
      </Button>
      <InterstitialScreen open={showInterstitialScreen} onClose={() => {
      setShowInterstitialScreen(false);
    }} isFullScreen={true} ariaLabel={defaultProps.ariaLabel} launcherButtonRef={launcherButtonRef}>
        <InterstitialScreen.Header headerTitle={defaultProps.headerTitle} headerSubTitle={defaultProps.headerSubTitle}></InterstitialScreen.Header>
        <InterstitialScreen.Body contentRenderer={internalConfig => {
        return getMultipleContent(internalConfig, true);
      }} />
        <InterstitialScreen.Footer />
      </InterstitialScreen>
    </>;
}`,...j.parameters?.docs?.source}}};const Ie=["Modal","ModalWithMultipleSteps","WithCustomActionButtons","WithAsynchronousActionCallback","fullScreen","fullScreenWithMultipleSteps"];export{b as Modal,x as ModalWithMultipleSteps,w as WithAsynchronousActionCallback,I as WithCustomActionButtons,Ie as __namedExportsOrder,xe as default,y as fullScreen,j as fullScreenWithMultipleSteps};
//# sourceMappingURL=InterstitialScreen.stories-CRZCwfA5.js.map
