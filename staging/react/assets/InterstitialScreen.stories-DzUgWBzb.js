import{j as n,ek as z,e as t,c as F,p as R,P as h,r as l,C as L,B as p}from"./iframe-DKsKIeO_.js";import{useMDXComponents as U}from"./index-DnTQNC1B.js";import{c as v}from"./clamp-CsXXRQhr.js";import{S as M}from"./SelectableTag-B0VPJLTz.js";import{I as r}from"./InterstitialScreen-88BmRY18.js";import{b as j}from"./bucket-0-Bkg56oSG.js";import"./Tag-ByT5Z9aM.js";import"./DefinitionTooltip-62O3uvQ_.js";import"./index-zH3n7d5W.js";import"./bucket-18-DCBnxAKD.js";import"./utils-BNH49ZRR.js";import"./Text-DWkOwfBd.js";import"./mergeRefs-D4pwfk3t.js";import"./useControllableState-DfPh9Ar9.js";import"./ComposedModal-B2ovIMVM.js";import"./index-BEhuL1MR.js";import"./index-CDQbx0x2.js";import"./LayerContext-NMcPk0Nw.js";import"./clamp--00YEiB8.js";import"./ButtonSet-B47ramhY.js";import"./InlineLoading-p56X7jsD.js";import"./bucket-6-BDZoIsJJ.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-DEXO-vbF.js";import"./devtools-Bn3omVKL.js";import"./ProgressIndicator-2UX96HY7.js";import"./bucket-19-CjGrDCAa.js";import"./bucket-9-DIS24dXC.js";import"./useId-DN3dyYk2.js";import"./uuidv4-BN2rGLQG.js";import"./Carousel-DLIBLqXK.js";import"./useIsomorphicEffect-0hnIMifz.js";function N(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...U(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"interstitialscreen",children:"InterstitialScreen"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/interstitial-screen/usage",rel:"nofollow",children:"Usage guidelines"})}),`
`,n.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#overview",children:"Overview"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#expected-composability",children:"Expected Composability"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#about-onboarding",children:"About Onboarding"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#examples",children:"Stackblitz Examples"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/interstitial-screen/usage",rel:"nofollow",children:"Interstitial screen"}),`
can be a full page or an overlay, and are shown on the first time a user
accesses a new experience (e.g. upon first login or first time opening a page
where a newly purchased capability is presented).`]}),`
`,n.jsx(e.h2,{id:"expected-composability",children:"Expected Composability"}),`
`,n.jsxs(e.p,{children:[`The InterstitialScreen component is structured using the compound component
pattern in React, with distinct and well-defined sections: `,n.jsx(e.strong,{children:`Header, Body, and
Footer`}),`. InterstitialScreen acting as a container and
`,n.jsx(e.strong,{children:`InterstitialScreen.Header, InterstitialScreen.Body,
InterstitialScreen.Footer`}),` are static properties of the InterstitialScreen
component, effectively acting as sub-components.All related parts of the screen
(Header, Body, Footer) are grouped under one logical component:
InterstitialScreen.You can mix and match subcomponents or even omit some.`]}),`
`,n.jsx(e.h2,{id:"about-onboarding",children:"About Onboarding"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/patterns/onboarding-flows/overview/overview/",rel:"nofollow",children:"Onboarding"}),`
is a continuous learning methodology and framework that aims to orient, onboard,
explain, educate, and cultivate novice users into high-functioning power users.`]}),`
`,n.jsx(e.h2,{id:"interstitial-screen-code-sample",children:"Interstitial Screen Code sample"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<InterstitialScreen open onClose={function noRefCheck() {}}>
  <InterstitialScreen.Header
    headerTitle={'headerTitle'}
    headerSubTitle={'headerSubTitle'}
    hideProgressIndicator
  ></InterstitialScreen.Header>
  <InterstitialScreen.Body
    contentRenderer={(internalConfig) => {
      return (
        <InterstitialScreenView
          className="NoImageExampleModal"
          stepTitle="Step 1"
        >
          <InterstitialScreenViewModule
            description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
            size="sm"
            title="Use case-specific heading"
          />
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
`,n.jsx(e.h2,{id:"stackblitz-examples",children:"Stackblitz Examples"}),`
`,n.jsx(e.h4,{id:"example-using-sample-design-from-docs-page",children:"Example using sample design from docs page"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/examples/carbon-for-ibm-products/InterstitialScreen",rel:"nofollow",children:n.jsx(e.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Example 1"})})}),`
`,n.jsx(e.h4,{id:"example-using-steppedanimatedmedia-and-lottie-web",children:"Example using steppedAnimatedMedia and lottie web"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/examples/carbon-for-ibm-products/InterstitialScreenWithAnimatedMedia",rel:"nofollow",children:n.jsx(e.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Example 1"})})}),`
`,n.jsx(e.h4,{id:"example-using-interstitialview-and-interstitialviewmodule-components",children:"Example using InterstitialView and InterstitialViewModule components"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/examples/carbon-for-ibm-products/InterstitialScreenView",rel:"nofollow",children:n.jsx(e.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Example 1"})})}),`
`,n.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,n.jsx(z,{})]})}function _(i={}){const{wrapper:e}={...U(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(N,{...i})}):N(i)}const A=".CustomLayout{display:flex;flex-wrap:wrap;padding:2rem;gap:1rem}.storyCardExample{flex-grow:1;padding:1.5rem;border:1px solid var(--cds-border-inverse, #161616);background-color:var(--cds-layer-accent-01, #e0e0e0);block-size:350px;inline-size:20%}.GenericView{margin-block-start:6rem!important}.NoImageExampleModal{inline-size:100%}@media (min-width: 672px){.NoImageExampleModal{inline-size:75%}}.NoImageExampleFullScreen{inline-size:100%}@media (min-width: 672px){.NoImageExampleFullScreen{inline-size:75%}}@media (min-width: 1056px){.NoImageExampleFullScreen{inline-size:50%}}.c4p--interstitial-screen-view-module--enableTag{margin-block-start:2rem}",H=`${R.prefix}--interstitial-screen-view`,W="InterstitialScreenView",u=t.forwardRef(({children:i,className:e,stepTitle:a,translateWithId:s,...c},d)=>t.createElement("div",{role:"complementary","aria-label":a,...c,className:F(H,e,{}),ref:d},i));u.displayName=W;u.propTypes={children:h.node,className:h.string,stepTitle:h.string.isRequired,translateWithId:h.func};u.__docgenInfo={description:"An Onboarding component intended to be used as the child elements of the InterstitialScreen component.",methods:[],displayName:"InterstitialScreenView",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"Provide the contents of the InterstitialScreenView.",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"Optional class name for this component.",type:{name:"string"}},stepTitle:{required:!0,tsType:{name:"string"},description:"The label to pass to the ProgressStep component.",type:{name:"string"}},translateWithId:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => string",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"string"}}},description:"Optional method that takes in a message id and returns an internationalized string.",type:{name:"func"}}},composes:["PropsWithChildren"]};const E=`${R.prefix}--interstitial-screen-view-module`,$="InterstitialScreenViewModule",m=t.forwardRef(({className:i,title:e,description:a,disableActionButton:s,...c},d)=>{l.useEffect(()=>{s?.({start:!0})},[]);const S=f=>{s?.({start:!f})};return t.createElement("section",{...c,className:F(E,i),ref:d},t.createElement("h1",{className:`${E}--heading`},e),t.createElement("p",{className:`${E}--body`},a),s&&t.createElement(M,{renderIcon:L,text:"Enable Get Started",className:`${E}--enableTag`,onChange:S}))});m.displayName=$;m.propTypes={className:h.string,description:h.string.isRequired,disableActionButton:h.func,title:h.string.isRequired};m.__docgenInfo={description:"View module to help in building interstitial screen views.",methods:[],displayName:"InterstitialScreenViewModule",props:{className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}},description:{required:!0,tsType:{name:"string"},description:"The description of this component.",type:{name:"string"}},title:{required:!0,tsType:{name:"string"},description:"The title of this component.",type:{name:"string"}},disableActionButton:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: disableButtonConfigType) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  skip?: boolean;
  back?: boolean;
  next?: boolean;
  start?: boolean;
}`,signature:{properties:[{key:"skip",value:{name:"boolean",required:!1}},{key:"back",value:{name:"boolean",required:!1}},{key:"next",value:{name:"boolean",required:!1}},{key:"start",value:{name:"boolean",required:!1}}]}},name:"value"}],return:{name:"void"}}},description:`@param value This is callback to disable any action button dynamically
@returns void`,type:{name:"func"}}}};const V="interstitial-stories",g=`${R.prefix}--interstitial-screen`,Ce={title:"Components/Onboarding/InterstitialScreen",component:r,tags:["autodocs","Onboarding"],subcomponents:{Header:r.Header,Body:r.Body,Footer:r.Footer},decorators:[i=>t.createElement("div",{className:`${V}__viewport`},i())],parameters:{styles:A,docs:{page:_}}},b={"carbon.progress-step.complete":"Terminé","carbon.progress-step.incomplete":"Partiel","carbon.progress-step.current":"Actuel","carbon.progress-step.invalid":"Non valide"},B=({handleGotoStep:i})=>t.createElement(t.Fragment,null,t.createElement(u,{stepTitle:"Step 1",translateWithId:e=>b[e]??e},t.createElement(m,{size:"md",title:"Use case-specific heading 1",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."})),t.createElement(u,{stepTitle:"Step 2",translateWithId:e=>b[e]??e},t.createElement(m,{size:"md",title:"Use case-specific heading 2",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."})),t.createElement(u,{stepTitle:"Step 3",translateWithId:e=>b[e]??e},t.createElement(m,{size:"md",title:"Use case-specific heading 3",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."})),t.createElement(u,{stepTitle:"Step 4",translateWithId:e=>b[e]??e},t.createElement(m,{size:"md",title:"Use case-specific heading 4",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."})),t.createElement(u,{stepTitle:"Step 5",translateWithId:e=>b[e]??e},t.createElement(m,{size:"md",title:"Use case-specific heading 5",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."}))),P=({handleGotoStep:i,disableActionButton:e},a,s)=>t.createElement(t.Fragment,null,t.createElement(u,{stepTitle:"Step 1"},t.createElement(m,{className:s?"GenericView":"",title:"Use case-specific heading",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept.",disableActionButton:e}))),o={headerTitle:"Use case-specific title",headerSubTitle:"Use case-specific sub title",ariaLabel:"Interstitial Screen"},I=()=>{const[i,e]=l.useState(!0),a=l.useRef(null);return t.createElement(t.Fragment,null,t.createElement(p,{onClick:()=>{e(!0)},ref:a},"Show Interstitial modal"),t.createElement(r,{open:i,onClose:()=>{e(!1)},ariaLabel:o.ariaLabel,launcherButtonRef:a},t.createElement(r.Header,{headerTitle:o.headerTitle,headerSubTitle:o.headerSubTitle,hideProgressIndicator:!0}),t.createElement(r.Body,{contentRenderer:s=>P(s)}),t.createElement(r.Footer,null)))},x=()=>{const[i,e]=l.useState(!0),a=l.useRef(null);return t.createElement(t.Fragment,null,t.createElement(p,{onClick:()=>{e(!0)},ref:a},"Show Interstitial modal"),t.createElement(r,{open:i,onClose:()=>{e(!1)},ariaLabel:o.ariaLabel,launcherButtonRef:a},t.createElement(r.Header,{headerTitle:o.headerTitle,headerSubTitle:o.headerSubTitle}),t.createElement(r.Body,{contentRenderer:s=>B(s)}),t.createElement(r.Footer,null)))},w=()=>{const[i,e]=l.useState(!0),a=l.useRef(null);return t.createElement(t.Fragment,null,t.createElement(p,{onClick:()=>{e(!0)},ref:a},"Show Interstitial modal"),t.createElement(r,{open:i,onClose:()=>{e(!1)},ariaLabel:o.ariaLabel,launcherButtonRef:a},t.createElement(r.Header,{headerTitle:o.headerTitle,headerSubTitle:o.headerSubTitle}),t.createElement(r.Body,{contentRenderer:s=>B(s)}),t.createElement(r.Footer,{actionButtonRenderer:({handleGotoStep:s,progStep:c,stepCount:d})=>t.createElement(t.Fragment,null,t.createElement(p,{className:`${g}--skip-btn`,kind:"ghost",size:"lg",title:"Explore on my own",onClick:()=>e(!1)},"Explore on my own"),t.createElement("div",{className:`${g}--footer-controls`},c>0&&t.createElement(p,{className:`${g}--prev-btn`,kind:"secondary",size:"lg",title:"Previous",onClick:()=>{const f=d-1,k=v(c-1,0,f);s(k)}},"Previous"),c<d-1&&t.createElement(p,{className:`${g}--next-btn`,renderIcon:j,size:"lg",title:"Next",onClick:()=>{const f=d-1,k=v(c+1,0,f);s(k)}},"Next"),c===d-1&&t.createElement(p,{className:`${g}--start-btn`,renderIcon:j,size:"lg",title:"Start",onClick:()=>e(!1)},"Start")))})))},C=()=>{const[i,e]=l.useState(!0),a=l.useRef(null),s=async(c,d)=>{c!=="skip"&&await new Promise(S=>{setTimeout(()=>{S()},1500)})};return t.createElement(t.Fragment,null,t.createElement(p,{onClick:()=>{e(!0)},ref:a},"Show Interstitial modal"),t.createElement(r,{open:i,onClose:()=>{e(!1)},ariaLabel:o.ariaLabel,launcherButtonRef:a},t.createElement(r.Header,{headerTitle:o.headerTitle,headerSubTitle:o.headerSubTitle}),t.createElement(r.Body,{contentRenderer:c=>B(c)}),t.createElement(r.Footer,{onAction:s})))},y=()=>{const[i,e]=l.useState(!0);l.useState(!0);const a=l.useRef(null);return t.createElement(t.Fragment,null,t.createElement(p,{onClick:()=>{e(!0)},ref:a},"Show Interstitial full screen"),t.createElement(r,{open:i,onClose:()=>{e(!1)},isFullScreen:!0,ariaLabel:o.ariaLabel,launcherButtonRef:a},t.createElement(r.Header,{headerTitle:o.headerTitle,headerSubTitle:o.headerSubTitle}),t.createElement(r.Body,{contentRenderer:s=>P(s,!0,!0)}),t.createElement(r.Footer,null)))},T=()=>{const[i,e]=l.useState(!0);l.useState(!0);const a=l.useRef(null);return t.createElement(t.Fragment,null,t.createElement(p,{onClick:()=>{e(!0)},ref:a},"Show Interstitial full screen"),t.createElement(r,{open:i,onClose:()=>{e(!1)},isFullScreen:!0,ariaLabel:o.ariaLabel,launcherButtonRef:a},t.createElement(r.Header,{headerTitle:o.headerTitle,headerSubTitle:o.headerSubTitle}),t.createElement(r.Body,{contentRenderer:s=>B(s)}),t.createElement(r.Footer,null)))};I.__docgenInfo={description:"",methods:[],displayName:"Modal"};x.__docgenInfo={description:"",methods:[],displayName:"ModalWithMultipleSteps"};w.__docgenInfo={description:"",methods:[],displayName:"WithCustomActionButtons"};C.__docgenInfo={description:"",methods:[],displayName:"WithAsynchronousActionCallback"};y.__docgenInfo={description:"",methods:[],displayName:"fullScreen"};T.__docgenInfo={description:"",methods:[],displayName:"fullScreenWithMultipleSteps"};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
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
}`,...I.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
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
}`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
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
}`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
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
}`,...C.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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
}`,...y.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
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
}`,...T.parameters?.docs?.source}}};const ye=["Modal","ModalWithMultipleSteps","WithCustomActionButtons","WithAsynchronousActionCallback","fullScreen","fullScreenWithMultipleSteps"];export{I as Modal,x as ModalWithMultipleSteps,C as WithAsynchronousActionCallback,w as WithCustomActionButtons,ye as __namedExportsOrder,Ce as default,y as fullScreen,T as fullScreenWithMultipleSteps};
