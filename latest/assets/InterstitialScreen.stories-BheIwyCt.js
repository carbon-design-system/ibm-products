import{e,r as m}from"./index-DtHxqM--.js";import{d as Y,P as u,C as ee}from"./index-CMVdkQrl.js";import{p as E,B as p}from"./settings-C3kz8lqM.js";import{j as n}from"./index-DgLvjnYm.js";import{useMDXComponents as J}from"./index-CseD6FCQ.js";import"./index-CN3z16O-.js";import{C as te}from"./index-CK5iQhpn.js";import{c as N}from"./clamp-CsXXRQhr.js";import{S as ne}from"./SelectableTag-DPNLxn07.js";import{I as r}from"./InterstitialScreen-LFuqSjvK.js";import{A as B}from"./bucket-0-CHtg8bFp.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./events-OVwOsPzJ.js";import"./index-BLvAv8yb.js";import"./index-CiYgQLeJ.js";import"./preview-C2liTwB1.js";import"./iframe-BEyU_vaq.js";import"./DocsRenderer-CFRXHY34-CVs9HZ-u.js";import"./client-CZTHzaKS.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";import"./Tag-TnuyD0LA.js";import"./DefinitionTooltip-LoiwcsAO.js";import"./Text-DeLhjZ72.js";import"./mergeRefs-CTUecegF.js";import"./ComposedModal-DK_gDe0c.js";import"./index-ly07KqNH.js";import"./LayerContext-B9CO-6mR.js";import"./clamp--00YEiB8.js";import"./ButtonSet-S29aEq84.js";import"./InlineLoading-C_FY6vWy.js";import"./bucket-6-CRocNvF-.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-4QzkQnOM.js";import"./devtools-CJD9WatR.js";import"./ProgressIndicator-CrooJxGB.js";import"./bucket-18-xYgoy0Nr.js";import"./bucket-9-m0gEOM1f.js";import"./Carousel-BWNfaVcq.js";import"./useIsomorphicEffect-DztsuiUB.js";import"./useId-DyRoBmqU.js";import"./uuidv4-BN2rGLQG.js";function F(i){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...J(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(t.h1,{id:"interstitialscreen",children:"InterstitialScreen"}),`
`,n.jsx(t.p,{children:n.jsx(t.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/interstitial-screen/",rel:"nofollow",children:"InterstitialScreen usage guidelines"})}),`
`,n.jsx(t.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsx(t.li,{children:n.jsx(t.a,{href:"#overview",children:"Overview"})}),`
`,n.jsx(t.li,{children:n.jsx(t.a,{href:"#expected-composability",children:"Expected Composability"})}),`
`,n.jsx(t.li,{children:n.jsx(t.a,{href:"#about-onboarding",children:"About Onboarding"})}),`
`,n.jsx(t.li,{children:n.jsx(t.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,n.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,n.jsxs(t.p,{children:[n.jsx(t.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/interstitial-screen/usage",rel:"nofollow",children:"Interstitial screen"}),`
can be a full page or an overlay, and are shown on the first time a user
accesses a new experience (e.g. upon first login or first time opening a page
where a newly purchased capability is presented).`]}),`
`,n.jsx(t.h2,{id:"expected-composability",children:"Expected Composability"}),`
`,n.jsxs(t.p,{children:["The InterstitialScreen component is structured using the compound component pattern in React, with distinct and well-defined sections: ",n.jsx(t.strong,{children:"Header, Body, and Footer"}),`.
InterstitialScreen acting as a container and `,n.jsx(t.strong,{children:"InterstitialScreen.Header, InterstitialScreen.Body, InterstitialScreen.Footer"}),`
are static properties of the InterstitialScreen component, effectively acting as sub-components.All related parts of the screen (Header, Body, Footer) are
grouped under one logical component: InterstitialScreen.You can mix and match subcomponents or even omit some.`]}),`
`,n.jsx(t.h2,{id:"about-onboarding",children:"About Onboarding"}),`
`,n.jsxs(t.p,{children:[n.jsx(t.a,{href:"https://pages.github.ibm.com/security/security-design/teams-across-security/onboarding/overview/",rel:"nofollow",children:"Onboarding"}),`
is a continuous learning methodology and framework that aims to orient, onboard,
explain, educate, and cultivate novice users into high-functioning power users.`]}),`
`,n.jsx(t.h2,{id:"interstitial-screen-code-sample",children:"Interstitial Screen Code sample"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-jsx",children:` <InterstitialScreen
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
`,n.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,n.jsx(te,{})]})}function re(i={}){const{wrapper:t}={...J(),...i.components};return t?n.jsx(t,{...i,children:n.jsx(F,{...i})}):F(i)}const ie=".CustomLayout{display:flex;flex-wrap:wrap;padding:2rem;gap:1rem}.storyCardExample{flex-grow:1;padding:1.5rem;border:1px solid var(--cds-border-inverse, #161616);background-color:var(--cds-layer-accent-01, #e0e0e0);block-size:350px;inline-size:20%}.GenericView{margin-block-start:6rem!important}.NoImageExampleModal{inline-size:100%}@media (min-width: 672px){.NoImageExampleModal{inline-size:75%}}.NoImageExampleFullScreen{inline-size:100%}@media (min-width: 672px){.NoImageExampleFullScreen{inline-size:75%}}@media (min-width: 1056px){.NoImageExampleFullScreen{inline-size:50%}}.c4p--interstitial-screen-view-module--enableTag{margin-block-start:2rem}",ae=`${E.prefix}--interstitial-screen-view`,K="InterstitialScreenView";let l=e.forwardRef(({children:i,className:t,stepTitle:s,translateWithId:a,...d},h)=>e.createElement("div",{role:"complementary","aria-label":s,...d,className:Y(ae,t,{}),ref:h},i));l=E.checkComponentEnabled(l,K);l.displayName=K;l.propTypes={children:u.node,className:u.string,stepTitle:u.string.isRequired,translateWithId:u.func};l.__docgenInfo={description:"An Onboarding component intended to be used as the child elements of the InterstitialScreen component.",methods:[],displayName:"InterstitialScreenView",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"Provide the contents of the InterstitialScreenView.",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"Optional class name for this component.",type:{name:"string"}},stepTitle:{required:!0,tsType:{name:"string"},description:"The label to pass to the ProgressStep component.",type:{name:"string"}},translateWithId:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => string",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"string"}}},description:"Optional method that takes in a message id and returns an internationalized string.",type:{name:"func"}}},composes:["PropsWithChildren"]};const k=`${E.prefix}--interstitial-screen-view-module`,Q="InterstitialScreenViewModule";let c=e.forwardRef(({className:i,title:t,description:s,disableActionButton:a,...d},h)=>{m.useEffect(()=>{a==null||a({start:!0})},[]);const S=g=>{a==null||a({start:!g})};return e.createElement("section",{...d,className:Y(k,i),ref:h},e.createElement("h1",{className:`${k}--heading`},t),e.createElement("p",{className:`${k}--body`},s),a&&e.createElement(ne,{renderIcon:ee,text:"Enable Get Started",className:`${k}--enableTag`,onChange:S}))});c=E.checkComponentEnabled(c,Q);c.displayName=Q;c.propTypes={className:u.string,description:u.string.isRequired,disableActionButton:u.func,title:u.string.isRequired};c.__docgenInfo={description:"View module to help in building interstitial screen views.",methods:[],displayName:"InterstitialScreenViewModule",props:{className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}},description:{required:!0,tsType:{name:"string"},description:"The description of this component.",type:{name:"string"}},title:{required:!0,tsType:{name:"string"},description:"The title of this component.",type:{name:"string"}},disableActionButton:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: disableButtonConfigType) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  skip?: boolean;
  back?: boolean;
  next?: boolean;
  start?: boolean;
}`,signature:{properties:[{key:"skip",value:{name:"boolean",required:!1}},{key:"back",value:{name:"boolean",required:!1}},{key:"next",value:{name:"boolean",required:!1}},{key:"start",value:{name:"boolean",required:!1}}]}},name:"value"}],return:{name:"void"}}},description:`@param value This is callback to disable any action button dynamically
@returns void`,type:{name:"func"}}}};const se="interstitial-stories",f=`${E.prefix}--interstitial-screen`,Ye={title:"Experimental/Onboarding/InterstitialScreen",component:r,tags:["autodocs"],subcomponents:{Header:r.Header,Body:r.Body,Footer:r.Footer},decorators:[i=>e.createElement("div",{className:`${se}__viewport`},i())],parameters:{styles:ie,docs:{page:re}}},I={"carbon.progress-step.complete":"Terminé","carbon.progress-step.incomplete":"Partiel","carbon.progress-step.current":"Actuel","carbon.progress-step.invalid":"Non valide"},v=({handleGotoStep:i})=>e.createElement(e.Fragment,null,e.createElement(l,{stepTitle:"Step 1",translateWithId:t=>I[t]??t},e.createElement(c,{size:"md",title:"Use case-specific heading 1",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."})),e.createElement(l,{stepTitle:"Step 2",translateWithId:t=>I[t]??t},e.createElement(c,{size:"md",title:"Use case-specific heading 2",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."})),e.createElement(l,{stepTitle:"Step 3",translateWithId:t=>I[t]??t},e.createElement(c,{size:"md",title:"Use case-specific heading 3",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."})),e.createElement(l,{stepTitle:"Step 4",translateWithId:t=>I[t]??t},e.createElement(c,{size:"md",title:"Use case-specific heading 4",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."})),e.createElement(l,{stepTitle:"Step 5",translateWithId:t=>I[t]??t},e.createElement(c,{size:"md",title:"Use case-specific heading 5",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."}))),Z=({handleGotoStep:i,disableActionButton:t},s,a)=>e.createElement(e.Fragment,null,e.createElement(l,{stepTitle:"Step 1"},e.createElement(c,{className:a?"GenericView":"",title:"Use case-specific heading",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept.",disableActionButton:t}))),o={headerTitle:"Use case-specific title",headerSubTitle:"Use case-specific sub title",interstitialAriaLabel:"Interstitial Screen"},b=()=>{const[i,t]=m.useState(!0);return e.createElement(e.Fragment,null,e.createElement(p,{onClick:()=>{t(!0)}},"Show Interstitial modal"),e.createElement(r,{isOpen:i,onClose:()=>{t(!1)},interstitialAriaLabel:o.interstitialAriaLabel},e.createElement(r.Header,{headerTitle:o.headerTitle,headerSubTitle:o.headerSubTitle,hideProgressIndicator:!0}),e.createElement(r.Body,{contentRenderer:s=>Z(s)}),e.createElement(r.Footer,null)))},w=()=>{const[i,t]=m.useState(!0);return e.createElement(e.Fragment,null,e.createElement(p,{onClick:()=>{t(!0)}},"Show Interstitial modal"),e.createElement(r,{isOpen:i,onClose:()=>{t(!1)},interstitialAriaLabel:o.interstitialAriaLabel},e.createElement(r.Header,{headerTitle:o.headerTitle,headerSubTitle:o.headerSubTitle}),e.createElement(r.Body,{contentRenderer:s=>v(s)}),e.createElement(r.Footer,null)))},x=()=>{const[i,t]=m.useState(!0);return e.createElement(e.Fragment,null,e.createElement(p,{onClick:()=>{t(!0)}},"Show Interstitial modal"),e.createElement(r,{isOpen:i,onClose:()=>{t(!1)},interstitialAriaLabel:o.interstitialAriaLabel},e.createElement(r.Header,{headerTitle:o.headerTitle,headerSubTitle:o.headerSubTitle}),e.createElement(r.Body,{contentRenderer:s=>v(s)}),e.createElement(r.Footer,{actionButtonRenderer:({handleGotoStep:s,progStep:a,stepCount:d})=>e.createElement(e.Fragment,null,e.createElement(p,{className:`${f}--skip-btn`,kind:"ghost",size:"lg",title:"Explore on my own",onClick:()=>t(!1)},"Explore on my own"),e.createElement("div",{className:`${f}--footer-controls`},a>0&&e.createElement(p,{className:`${f}--prev-btn`,kind:"secondary",size:"lg",title:"Previous",onClick:()=>{const S=d-1,g=N(a-1,0,S);s(g)}},"Previous"),a<d-1&&e.createElement(p,{className:`${f}--next-btn`,renderIcon:B,size:"lg",title:"Next",onClick:()=>{const S=d-1,g=N(a+1,0,S);s(g)}},"Next"),a===d-1&&e.createElement(p,{className:`${f}--start-btn`,renderIcon:B,size:"lg",title:"Start",onClick:()=>t(!1)},"Start")))})))},C=()=>{const[i,t]=m.useState(!0),s=async(a,d)=>{a!=="skip"&&await new Promise(h=>{setTimeout(()=>{h()},1500)})};return e.createElement(e.Fragment,null,e.createElement(p,{onClick:()=>{t(!0)}},"Show Interstitial modal"),e.createElement(r,{isOpen:i,onClose:()=>{t(!1)},interstitialAriaLabel:o.interstitialAriaLabel},e.createElement(r.Header,{headerTitle:o.headerTitle,headerSubTitle:o.headerSubTitle}),e.createElement(r.Body,{contentRenderer:a=>v(a)}),e.createElement(r.Footer,{onAction:s})))},y=()=>{const[i,t]=m.useState(!0);return m.useState(!0),e.createElement(e.Fragment,null,e.createElement(p,{onClick:()=>{t(!0)}},"Show Interstitial full screen"),e.createElement(r,{isOpen:i,onClose:()=>{t(!1)},isFullScreen:!0,interstitialAriaLabel:o.interstitialAriaLabel},e.createElement(r.Header,{headerTitle:o.headerTitle,headerSubTitle:o.headerSubTitle}),e.createElement(r.Body,{contentRenderer:s=>Z(s,!0,!0)}),e.createElement(r.Footer,null)))},T=()=>{const[i,t]=m.useState(!0);return m.useState(!0),e.createElement(e.Fragment,null,e.createElement(p,{onClick:()=>{t(!0)}},"Show Interstitial full screen"),e.createElement(r,{isOpen:i,onClose:()=>{t(!1)},isFullScreen:!0,interstitialAriaLabel:o.interstitialAriaLabel},e.createElement(r.Header,{headerTitle:o.headerTitle,headerSubTitle:o.headerSubTitle}),e.createElement(r.Body,{contentRenderer:s=>v(s)}),e.createElement(r.Footer,null)))};b.__docgenInfo={description:"",methods:[],displayName:"Modal"};w.__docgenInfo={description:"",methods:[],displayName:"ModalWithMultipleSteps"};x.__docgenInfo={description:"",methods:[],displayName:"WithCustomActionButtons"};C.__docgenInfo={description:"",methods:[],displayName:"WithAsynchronousActionCallback"};y.__docgenInfo={description:"",methods:[],displayName:"fullScreen"};T.__docgenInfo={description:"",methods:[],displayName:"fullScreenWithMultipleSteps"};var A,P,U;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  const [showInterstitialScreen, setShowInterstitialScreen] = useState(true);
  return <>
      <Button onClick={() => {
      setShowInterstitialScreen(true);
    }}>
        Show Interstitial modal
      </Button>

      <InterstitialScreen isOpen={showInterstitialScreen} onClose={() => {
      setShowInterstitialScreen(false);
    }} interstitialAriaLabel={defaultProps.interstitialAriaLabel}>
        <InterstitialScreen.Header headerTitle={defaultProps.headerTitle} headerSubTitle={defaultProps.headerSubTitle} hideProgressIndicator={true}></InterstitialScreen.Header>
        <InterstitialScreen.Body contentRenderer={internalConfig => {
        return getSingleContent(internalConfig, true);
      }} />
        <InterstitialScreen.Footer />
      </InterstitialScreen>
    </>;
}`,...(U=(P=b.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var j,L,M;w.parameters={...w.parameters,docs:{...(j=w.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const [showInterstitialScreen, setShowInterstitialScreen] = useState(true);
  return <>
      <Button onClick={() => {
      setShowInterstitialScreen(true);
    }}>
        Show Interstitial modal
      </Button>

      <InterstitialScreen isOpen={showInterstitialScreen} onClose={() => {
      setShowInterstitialScreen(false);
    }} interstitialAriaLabel={defaultProps.interstitialAriaLabel}>
        <InterstitialScreen.Header headerTitle={defaultProps.headerTitle} headerSubTitle={defaultProps.headerSubTitle}></InterstitialScreen.Header>
        <InterstitialScreen.Body contentRenderer={internalConfig => {
        return getMultipleContent(internalConfig);
      }} />
        <InterstitialScreen.Footer />
      </InterstitialScreen>
    </>;
}`,...(M=(L=w.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var R,H,O;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const [showInterstitialScreen, setShowInterstitialScreen] = useState(true);
  return <>
      <Button onClick={() => {
      setShowInterstitialScreen(true);
    }}>
        Show Interstitial modal
      </Button>

      <InterstitialScreen isOpen={showInterstitialScreen} onClose={() => {
      setShowInterstitialScreen(false);
    }} interstitialAriaLabel={defaultProps.interstitialAriaLabel}>
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
}`,...(O=(H=x.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var _,z,W;C.parameters={...C.parameters,docs:{...(_=C.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  const [showInterstitialScreen, setShowInterstitialScreen] = useState(true);
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
    }}>
        Show Interstitial modal
      </Button>

      <InterstitialScreen isOpen={showInterstitialScreen} onClose={() => {
      setShowInterstitialScreen(false);
    }} interstitialAriaLabel={defaultProps.interstitialAriaLabel}>
        <InterstitialScreen.Header headerTitle={defaultProps.headerTitle} headerSubTitle={defaultProps.headerSubTitle}></InterstitialScreen.Header>
        <InterstitialScreen.Body contentRenderer={internalConfig => {
        return getMultipleContent(internalConfig);
      }} />
        <InterstitialScreen.Footer onAction={onAction} />
      </InterstitialScreen>
    </>;
}`,...(W=(z=C.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var $,q,V;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  const [showInterstitialScreen, setShowInterstitialScreen] = useState(true);
  useState(true);
  return <>
      <Button onClick={() => {
      setShowInterstitialScreen(true);
    }}>
        Show Interstitial full screen
      </Button>
      <InterstitialScreen isOpen={showInterstitialScreen} onClose={() => {
      setShowInterstitialScreen(false);
    }} isFullScreen={true} interstitialAriaLabel={defaultProps.interstitialAriaLabel}>
        <InterstitialScreen.Header headerTitle={defaultProps.headerTitle} headerSubTitle={defaultProps.headerSubTitle}></InterstitialScreen.Header>
        <InterstitialScreen.Body contentRenderer={internalConfig => {
        return getSingleContent(internalConfig, true, true);
      }} />
        <InterstitialScreen.Footer />
      </InterstitialScreen>
    </>;
}`,...(V=(q=y.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var G,D,X;T.parameters={...T.parameters,docs:{...(G=T.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  const [showInterstitialScreen, setShowInterstitialScreen] = useState(true);
  useState(true);
  return <>
      <Button onClick={() => {
      setShowInterstitialScreen(true);
    }}>
        Show Interstitial full screen
      </Button>
      <InterstitialScreen isOpen={showInterstitialScreen} onClose={() => {
      setShowInterstitialScreen(false);
    }} isFullScreen={true} interstitialAriaLabel={defaultProps.interstitialAriaLabel}>
        <InterstitialScreen.Header headerTitle={defaultProps.headerTitle} headerSubTitle={defaultProps.headerSubTitle}></InterstitialScreen.Header>
        <InterstitialScreen.Body contentRenderer={internalConfig => {
        return getMultipleContent(internalConfig, true);
      }} />
        <InterstitialScreen.Footer />
      </InterstitialScreen>
    </>;
}`,...(X=(D=T.parameters)==null?void 0:D.docs)==null?void 0:X.source}}};const Je=["Modal","ModalWithMultipleSteps","WithCustomActionButtons","WithAsynchronousActionCallback","fullScreen","fullScreenWithMultipleSteps"];export{b as Modal,w as ModalWithMultipleSteps,C as WithAsynchronousActionCallback,x as WithCustomActionButtons,Je as __namedExportsOrder,Ye as default,y as fullScreen,T as fullScreenWithMultipleSteps};
