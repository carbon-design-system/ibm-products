import{e as t,r as l}from"./index-DtHxqM--.js";import{d as J,P as h,C as te}from"./index-Ccw_5OKp.js";import{p as T,B as u}from"./settings-JuRwpTYJ.js";import{j as n}from"./index-DgLvjnYm.js";import{useMDXComponents as K}from"./index-CseD6FCQ.js";import"./index-Cw55I15S.js";import{C as ne}from"./index-DkHmASp-.js";import{c as v}from"./clamp-CsXXRQhr.js";import{S as re}from"./SelectableTag-BsnCs0ki.js";import{I as r}from"./InterstitialScreen-DyNgeCrl.js";import{A as j}from"./bucket-0-BTuMVGfh.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./events-OVwOsPzJ.js";import"./index-DxWVrnnv.js";import"./index-CiYgQLeJ.js";import"./preview-D-c0imNg.js";import"./iframe-DnOnTP6j.js";import"./DocsRenderer-CFRXHY34-BHicNskh.js";import"./client-CZTHzaKS.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";import"./Tag-Dv9fGIyR.js";import"./DefinitionTooltip-I5zY1xMX.js";import"./Text-CPocCdE2.js";import"./mergeRefs-CTUecegF.js";import"./ComposedModal-B82WV5E1.js";import"./index-CpJD3P8E.js";import"./LayerContext-B9CO-6mR.js";import"./clamp--00YEiB8.js";import"./ButtonSet-CHfwLmwF.js";import"./InlineLoading-B1G6aSdW.js";import"./bucket-6-byl-qy8t.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-BExY9CJ6.js";import"./devtools-DSwQefcu.js";import"./ProgressIndicator-CsDm52CZ.js";import"./bucket-18-CKSgrqVQ.js";import"./bucket-9-Tu9Xse6i.js";import"./Carousel-xPCHD9Pg.js";import"./useIsomorphicEffect-DztsuiUB.js";import"./useId-DyRoBmqU.js";import"./uuidv4-BN2rGLQG.js";function N(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...K(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"interstitialscreen",children:"InterstitialScreen"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/interstitial-screen/",rel:"nofollow",children:"InterstitialScreen usage guidelines"})}),`
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
`,n.jsxs(e.p,{children:["The InterstitialScreen component is structured using the compound component pattern in React, with distinct and well-defined sections: ",n.jsx(e.strong,{children:"Header, Body, and Footer"}),`.
InterstitialScreen acting as a container and `,n.jsx(e.strong,{children:"InterstitialScreen.Header, InterstitialScreen.Body, InterstitialScreen.Footer"}),`
are static properties of the InterstitialScreen component, effectively acting as sub-components.All related parts of the screen (Header, Body, Footer) are
grouped under one logical component: InterstitialScreen.You can mix and match subcomponents or even omit some.`]}),`
`,n.jsx(e.h2,{id:"about-onboarding",children:"About Onboarding"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://pages.github.ibm.com/security/security-design/teams-across-security/onboarding/overview/",rel:"nofollow",children:"Onboarding"}),`
is a continuous learning methodology and framework that aims to orient, onboard,
explain, educate, and cultivate novice users into high-functioning power users.`]}),`
`,n.jsx(e.h2,{id:"interstitial-screen-code-sample",children:"Interstitial Screen Code sample"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:` <InterstitialScreen
  isOpen
  onClose={function noRefCheck() {}}
>
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
</InterstitialScreen>;

`})}),`
`,n.jsx(e.h2,{id:"stackblitz-examples",children:"Stackblitz Examples"}),`
`,n.jsx(e.h4,{id:"example-using-sample-design-from-docs-page",children:"Example using sample design from docs page"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/examples/carbon-for-ibm-products/InterstitialScreen",rel:"nofollow",children:n.jsx(e.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Example 1"})})}),`
`,n.jsx(e.h4,{id:"example-using-steppedanimatedmedia-and-lottie-web",children:"Example using steppedAnimatedMedia and lottie web"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/examples/carbon-for-ibm-products/InterstitialScreenWithAnimatedMedia",rel:"nofollow",children:n.jsx(e.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Example 1"})})}),`
`,n.jsx(e.h4,{id:"example-using-interstitialview-and-interstitialviewmodule-components",children:"Example using InterstitialView and InterstitialViewModule components"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/examples/carbon-for-ibm-products/InterstitialScreenView",rel:"nofollow",children:n.jsx(e.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Example 1"})})}),`
`,n.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,n.jsx(ne,{})]})}function ie(i={}){const{wrapper:e}={...K(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(N,{...i})}):N(i)}const ae=".CustomLayout{display:flex;flex-wrap:wrap;padding:2rem;gap:1rem}.storyCardExample{flex-grow:1;padding:1.5rem;border:1px solid var(--cds-border-inverse, #161616);background-color:var(--cds-layer-accent-01, #e0e0e0);block-size:350px;inline-size:20%}.GenericView{margin-block-start:6rem!important}.NoImageExampleModal{inline-size:100%}@media (min-width: 672px){.NoImageExampleModal{inline-size:75%}}.NoImageExampleFullScreen{inline-size:100%}@media (min-width: 672px){.NoImageExampleFullScreen{inline-size:75%}}@media (min-width: 1056px){.NoImageExampleFullScreen{inline-size:50%}}.c4p--interstitial-screen-view-module--enableTag{margin-block-start:2rem}",se=`${T.prefix}--interstitial-screen-view`,Q="InterstitialScreenView";let p=t.forwardRef(({children:i,className:e,stepTitle:s,translateWithId:a,...c},m)=>t.createElement("div",{role:"complementary","aria-label":s,...c,className:J(se,e,{}),ref:m},i));p=T.checkComponentEnabled(p,Q);p.displayName=Q;p.propTypes={children:h.node,className:h.string,stepTitle:h.string.isRequired,translateWithId:h.func};p.__docgenInfo={description:"An Onboarding component intended to be used as the child elements of the InterstitialScreen component.",methods:[],displayName:"InterstitialScreenView",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"Provide the contents of the InterstitialScreenView.",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"Optional class name for this component.",type:{name:"string"}},stepTitle:{required:!0,tsType:{name:"string"},description:"The label to pass to the ProgressStep component.",type:{name:"string"}},translateWithId:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => string",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"string"}}},description:"Optional method that takes in a message id and returns an internationalized string.",type:{name:"func"}}},composes:["PropsWithChildren"]};const k=`${T.prefix}--interstitial-screen-view-module`,Z="InterstitialScreenViewModule";let d=t.forwardRef(({className:i,title:e,description:s,disableActionButton:a,...c},m)=>{l.useEffect(()=>{a==null||a({start:!0})},[]);const S=f=>{a==null||a({start:!f})};return t.createElement("section",{...c,className:J(k,i),ref:m},t.createElement("h1",{className:`${k}--heading`},e),t.createElement("p",{className:`${k}--body`},s),a&&t.createElement(re,{renderIcon:te,text:"Enable Get Started",className:`${k}--enableTag`,onChange:S}))});d=T.checkComponentEnabled(d,Z);d.displayName=Z;d.propTypes={className:h.string,description:h.string.isRequired,disableActionButton:h.func,title:h.string.isRequired};d.__docgenInfo={description:"View module to help in building interstitial screen views.",methods:[],displayName:"InterstitialScreenViewModule",props:{className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}},description:{required:!0,tsType:{name:"string"},description:"The description of this component.",type:{name:"string"}},title:{required:!0,tsType:{name:"string"},description:"The title of this component.",type:{name:"string"}},disableActionButton:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: disableButtonConfigType) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  skip?: boolean;
  back?: boolean;
  next?: boolean;
  start?: boolean;
}`,signature:{properties:[{key:"skip",value:{name:"boolean",required:!1}},{key:"back",value:{name:"boolean",required:!1}},{key:"next",value:{name:"boolean",required:!1}},{key:"start",value:{name:"boolean",required:!1}}]}},name:"value"}],return:{name:"void"}}},description:`@param value This is callback to disable any action button dynamically
@returns void`,type:{name:"func"}}}};const oe="interstitial-stories",g=`${T.prefix}--interstitial-screen`,Je={title:"Experimental/Onboarding/InterstitialScreen",component:r,tags:["autodocs"],subcomponents:{Header:r.Header,Body:r.Body,Footer:r.Footer},decorators:[i=>t.createElement("div",{className:`${oe}__viewport`},i())],parameters:{styles:ae,docs:{page:ie}}},b={"carbon.progress-step.complete":"Terminé","carbon.progress-step.incomplete":"Partiel","carbon.progress-step.current":"Actuel","carbon.progress-step.invalid":"Non valide"},B=({handleGotoStep:i})=>t.createElement(t.Fragment,null,t.createElement(p,{stepTitle:"Step 1",translateWithId:e=>b[e]??e},t.createElement(d,{size:"md",title:"Use case-specific heading 1",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."})),t.createElement(p,{stepTitle:"Step 2",translateWithId:e=>b[e]??e},t.createElement(d,{size:"md",title:"Use case-specific heading 2",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."})),t.createElement(p,{stepTitle:"Step 3",translateWithId:e=>b[e]??e},t.createElement(d,{size:"md",title:"Use case-specific heading 3",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."})),t.createElement(p,{stepTitle:"Step 4",translateWithId:e=>b[e]??e},t.createElement(d,{size:"md",title:"Use case-specific heading 4",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."})),t.createElement(p,{stepTitle:"Step 5",translateWithId:e=>b[e]??e},t.createElement(d,{size:"md",title:"Use case-specific heading 5",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."}))),ee=({handleGotoStep:i,disableActionButton:e},s,a)=>t.createElement(t.Fragment,null,t.createElement(p,{stepTitle:"Step 1"},t.createElement(d,{className:a?"GenericView":"",title:"Use case-specific heading",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept.",disableActionButton:e}))),o={headerTitle:"Use case-specific title",headerSubTitle:"Use case-specific sub title",interstitialAriaLabel:"Interstitial Screen"},I=()=>{const[i,e]=l.useState(!0),s=l.useRef(null);return t.createElement(t.Fragment,null,t.createElement(u,{onClick:()=>{e(!0)},ref:s},"Show Interstitial modal"),t.createElement(r,{isOpen:i,onClose:()=>{e(!1)},interstitialAriaLabel:o.interstitialAriaLabel,launcherButtonRef:s},t.createElement(r.Header,{headerTitle:o.headerTitle,headerSubTitle:o.headerSubTitle,hideProgressIndicator:!0}),t.createElement(r.Body,{contentRenderer:a=>ee(a)}),t.createElement(r.Footer,null)))},x=()=>{const[i,e]=l.useState(!0),s=l.useRef(null);return t.createElement(t.Fragment,null,t.createElement(u,{onClick:()=>{e(!0)},ref:s},"Show Interstitial modal"),t.createElement(r,{isOpen:i,onClose:()=>{e(!1)},interstitialAriaLabel:o.interstitialAriaLabel,launcherButtonRef:s},t.createElement(r.Header,{headerTitle:o.headerTitle,headerSubTitle:o.headerSubTitle}),t.createElement(r.Body,{contentRenderer:a=>B(a)}),t.createElement(r.Footer,null)))},w=()=>{const[i,e]=l.useState(!0),s=l.useRef(null);return t.createElement(t.Fragment,null,t.createElement(u,{onClick:()=>{e(!0)},ref:s},"Show Interstitial modal"),t.createElement(r,{isOpen:i,onClose:()=>{e(!1)},interstitialAriaLabel:o.interstitialAriaLabel,launcherButtonRef:s},t.createElement(r.Header,{headerTitle:o.headerTitle,headerSubTitle:o.headerSubTitle}),t.createElement(r.Body,{contentRenderer:a=>B(a)}),t.createElement(r.Footer,{actionButtonRenderer:({handleGotoStep:a,progStep:c,stepCount:m})=>t.createElement(t.Fragment,null,t.createElement(u,{className:`${g}--skip-btn`,kind:"ghost",size:"lg",title:"Explore on my own",onClick:()=>e(!1)},"Explore on my own"),t.createElement("div",{className:`${g}--footer-controls`},c>0&&t.createElement(u,{className:`${g}--prev-btn`,kind:"secondary",size:"lg",title:"Previous",onClick:()=>{const f=m-1,R=v(c-1,0,f);a(R)}},"Previous"),c<m-1&&t.createElement(u,{className:`${g}--next-btn`,renderIcon:j,size:"lg",title:"Next",onClick:()=>{const f=m-1,R=v(c+1,0,f);a(R)}},"Next"),c===m-1&&t.createElement(u,{className:`${g}--start-btn`,renderIcon:j,size:"lg",title:"Start",onClick:()=>e(!1)},"Start")))})))},C=()=>{const[i,e]=l.useState(!0),s=l.useRef(null),a=async(c,m)=>{c!=="skip"&&await new Promise(S=>{setTimeout(()=>{S()},1500)})};return t.createElement(t.Fragment,null,t.createElement(u,{onClick:()=>{e(!0)},ref:s},"Show Interstitial modal"),t.createElement(r,{isOpen:i,onClose:()=>{e(!1)},interstitialAriaLabel:o.interstitialAriaLabel,launcherButtonRef:s},t.createElement(r.Header,{headerTitle:o.headerTitle,headerSubTitle:o.headerSubTitle}),t.createElement(r.Body,{contentRenderer:c=>B(c)}),t.createElement(r.Footer,{onAction:a})))},y=()=>{const[i,e]=l.useState(!0);l.useState(!0);const s=l.useRef(null);return t.createElement(t.Fragment,null,t.createElement(u,{onClick:()=>{e(!0)},ref:s},"Show Interstitial full screen"),t.createElement(r,{isOpen:i,onClose:()=>{e(!1)},isFullScreen:!0,interstitialAriaLabel:o.interstitialAriaLabel,launcherButtonRef:s},t.createElement(r.Header,{headerTitle:o.headerTitle,headerSubTitle:o.headerSubTitle}),t.createElement(r.Body,{contentRenderer:a=>ee(a,!0,!0)}),t.createElement(r.Footer,null)))},E=()=>{const[i,e]=l.useState(!0);l.useState(!0);const s=l.useRef(null);return t.createElement(t.Fragment,null,t.createElement(u,{onClick:()=>{e(!0)},ref:s},"Show Interstitial full screen"),t.createElement(r,{isOpen:i,onClose:()=>{e(!1)},isFullScreen:!0,interstitialAriaLabel:o.interstitialAriaLabel,launcherButtonRef:s},t.createElement(r.Header,{headerTitle:o.headerTitle,headerSubTitle:o.headerSubTitle}),t.createElement(r.Body,{contentRenderer:a=>B(a)}),t.createElement(r.Footer,null)))};I.__docgenInfo={description:"",methods:[],displayName:"Modal"};x.__docgenInfo={description:"",methods:[],displayName:"ModalWithMultipleSteps"};w.__docgenInfo={description:"",methods:[],displayName:"WithCustomActionButtons"};C.__docgenInfo={description:"",methods:[],displayName:"WithAsynchronousActionCallback"};y.__docgenInfo={description:"",methods:[],displayName:"fullScreen"};E.__docgenInfo={description:"",methods:[],displayName:"fullScreenWithMultipleSteps"};var A,F,P;I.parameters={...I.parameters,docs:{...(A=I.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  const [showInterstitialScreen, setShowInterstitialScreen] = useState(true);
  const launcherButtonRef = useRef(null);
  return <>
      <Button onClick={() => {
      setShowInterstitialScreen(true);
    }} ref={launcherButtonRef}>
        Show Interstitial modal
      </Button>

      <InterstitialScreen isOpen={showInterstitialScreen} onClose={() => {
      setShowInterstitialScreen(false);
    }} interstitialAriaLabel={defaultProps.interstitialAriaLabel} launcherButtonRef={launcherButtonRef}>
        <InterstitialScreen.Header headerTitle={defaultProps.headerTitle} headerSubTitle={defaultProps.headerSubTitle} hideProgressIndicator={true}></InterstitialScreen.Header>
        <InterstitialScreen.Body contentRenderer={internalConfig => {
        return getSingleContent(internalConfig, true);
      }} />
        <InterstitialScreen.Footer />
      </InterstitialScreen>
    </>;
}`,...(P=(F=I.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var U,z,L;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  const [showInterstitialScreen, setShowInterstitialScreen] = useState(true);
  const launcherButtonRef = useRef(null);
  return <>
      <Button onClick={() => {
      setShowInterstitialScreen(true);
    }} ref={launcherButtonRef}>
        Show Interstitial modal
      </Button>

      <InterstitialScreen isOpen={showInterstitialScreen} onClose={() => {
      setShowInterstitialScreen(false);
    }} interstitialAriaLabel={defaultProps.interstitialAriaLabel} launcherButtonRef={launcherButtonRef}>
        <InterstitialScreen.Header headerTitle={defaultProps.headerTitle} headerSubTitle={defaultProps.headerSubTitle}></InterstitialScreen.Header>
        <InterstitialScreen.Body contentRenderer={internalConfig => {
        return getMultipleContent(internalConfig);
      }} />
        <InterstitialScreen.Footer />
      </InterstitialScreen>
    </>;
}`,...(L=(z=x.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var M,_,H;w.parameters={...w.parameters,docs:{...(M=w.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  const [showInterstitialScreen, setShowInterstitialScreen] = useState(true);
  const launcherButtonRef = useRef(null);
  return <>
      <Button onClick={() => {
      setShowInterstitialScreen(true);
    }} ref={launcherButtonRef}>
        Show Interstitial modal
      </Button>

      <InterstitialScreen isOpen={showInterstitialScreen} onClose={() => {
      setShowInterstitialScreen(false);
    }} interstitialAriaLabel={defaultProps.interstitialAriaLabel} launcherButtonRef={launcherButtonRef}>
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
}`,...(H=(_=w.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var O,W,$;C.parameters={...C.parameters,docs:{...(O=C.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
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

      <InterstitialScreen isOpen={showInterstitialScreen} onClose={() => {
      setShowInterstitialScreen(false);
    }} interstitialAriaLabel={defaultProps.interstitialAriaLabel} launcherButtonRef={launcherButtonRef}>
        <InterstitialScreen.Header headerTitle={defaultProps.headerTitle} headerSubTitle={defaultProps.headerSubTitle}></InterstitialScreen.Header>
        <InterstitialScreen.Body contentRenderer={internalConfig => {
        return getMultipleContent(internalConfig);
      }} />
        <InterstitialScreen.Footer onAction={onAction} />
      </InterstitialScreen>
    </>;
}`,...($=(W=C.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var V,q,G;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  const [showInterstitialScreen, setShowInterstitialScreen] = useState(true);
  useState(true);
  const launcherButtonRef = useRef(null);
  return <>
      <Button onClick={() => {
      setShowInterstitialScreen(true);
    }} ref={launcherButtonRef}>
        Show Interstitial full screen
      </Button>
      <InterstitialScreen isOpen={showInterstitialScreen} onClose={() => {
      setShowInterstitialScreen(false);
    }} isFullScreen={true} interstitialAriaLabel={defaultProps.interstitialAriaLabel} launcherButtonRef={launcherButtonRef}>
        <InterstitialScreen.Header headerTitle={defaultProps.headerTitle} headerSubTitle={defaultProps.headerSubTitle}></InterstitialScreen.Header>
        <InterstitialScreen.Body contentRenderer={internalConfig => {
        return getSingleContent(internalConfig, true, true);
      }} />
        <InterstitialScreen.Footer />
      </InterstitialScreen>
    </>;
}`,...(G=(q=y.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var D,X,Y;E.parameters={...E.parameters,docs:{...(D=E.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const [showInterstitialScreen, setShowInterstitialScreen] = useState(true);
  useState(true);
  const launcherButtonRef = useRef(null);
  return <>
      <Button onClick={() => {
      setShowInterstitialScreen(true);
    }} ref={launcherButtonRef}>
        Show Interstitial full screen
      </Button>
      <InterstitialScreen isOpen={showInterstitialScreen} onClose={() => {
      setShowInterstitialScreen(false);
    }} isFullScreen={true} interstitialAriaLabel={defaultProps.interstitialAriaLabel} launcherButtonRef={launcherButtonRef}>
        <InterstitialScreen.Header headerTitle={defaultProps.headerTitle} headerSubTitle={defaultProps.headerSubTitle}></InterstitialScreen.Header>
        <InterstitialScreen.Body contentRenderer={internalConfig => {
        return getMultipleContent(internalConfig, true);
      }} />
        <InterstitialScreen.Footer />
      </InterstitialScreen>
    </>;
}`,...(Y=(X=E.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const Ke=["Modal","ModalWithMultipleSteps","WithCustomActionButtons","WithAsynchronousActionCallback","fullScreen","fullScreenWithMultipleSteps"];export{I as Modal,x as ModalWithMultipleSteps,C as WithAsynchronousActionCallback,w as WithCustomActionButtons,Ke as __namedExportsOrder,Je as default,y as fullScreen,E as fullScreenWithMultipleSteps};
