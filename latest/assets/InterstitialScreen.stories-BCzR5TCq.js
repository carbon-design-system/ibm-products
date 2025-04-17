import{e as t,r as d}from"./index-DzvNrmz8.js";import"./index-5As4T26e.js";import{B as f}from"./settings-DbzZchXt.js";import{j as n}from"./index-Cg1swjps.js";import{useMDXComponents as A}from"./index-B7BkHM3Y.js";import"./index-52KsHLmw.js";import{C as G}from"./index-C_-_U5WJ.js";import{I}from"./InterstitialScreen-CHYKexHr.js";import{I as l}from"./InterstitialScreenView-Cl2aN7_X.js";import{I as o}from"./InterstitialScreenViewModule-BOoWgOuy.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./events-OVwOsPzJ.js";import"./index-P6UCShJt.js";import"./index-Bv4JGo1_.js";import"./preview-DORzmaO-.js";import"./iframe-CBXui-ld.js";import"./DocsRenderer-CFRXHY34-DTsNfGzG.js";import"./client-fwTTGz69.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";import"./ComposedModal-DuX0rG4s.js";import"./index-B9LAK09p.js";import"./LayerContext-DfrloTEd.js";import"./ButtonSet-B2onNqwp.js";import"./InlineLoading-pF8In0wu.js";import"./bucket-6-BVxmYIXv.js";import"./mergeRefs-CTUecegF.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-DPmHpWJH.js";import"./FlexGrid-SGz1UDZT.js";import"./Row-DLmrX-g2.js";import"./Column-1L-H8Axx.js";import"./ProgressIndicator-DKNWUMpg.js";import"./Text-DyBNjUAs.js";import"./bucket-18-D-cwffHE.js";import"./bucket-9-DBhRplFe.js";import"./clamp-CsXXRQhr.js";import"./devtools-CskDVa8y.js";import"./Carousel-Cc3QlNR6.js";import"./useIsomorphicEffect-l5L8NYko.js";import"./bucket-0-C6v-wDs9.js";function E(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...A(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"interstitialscreen",children:"InterstitialScreen"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/interstitial-screen/",rel:"nofollow",children:"InterstitialScreen usage guidelines"})}),`
`,n.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#overview",children:"Overview"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#expected-composability",children:"Expected Composability"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#about-onboarding",children:"About Onboarding"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#stackblitz-example-with-animated-media",children:"Stackblitz example with Animated Media"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/interstitial-screen/usage",rel:"nofollow",children:"Interstitial screen"}),`
can be a full page or an overlay, and are shown on the first time a user
accesses a new experience (e.g. upon first login or first time opening a page
where a newly purchased capability is presented).`]}),`
`,n.jsx(e.h2,{id:"expected-composability",children:"Expected Composability"}),`
`,n.jsxs(e.p,{children:[`Interstitial Screen was designed to be used with N number of
`,n.jsx(e.strong,{children:"InterstitialScreenView"}),` children. As a convenience, a provided
`,n.jsx(e.strong,{children:"InterstitialScreenViewModule"}),` is also available, although not required as a
child of InterstitialScreenView.`]}),`
`,n.jsx(e.h2,{id:"about-onboarding",children:"About Onboarding"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://pages.github.ibm.com/security/security-design/teams-across-security/onboarding/overview/",rel:"nofollow",children:"Onboarding"}),`
is a continuous learning methodology and framework that aims to orient, onboard,
explain, educate, and cultivate novice users into high-functioning power users.`]}),`
`,n.jsx(e.h2,{id:"interstitial-screen-code-sample",children:"Interstitial Screen Code sample"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<InterstitialScreen
  interstitialAriaLabel="Interstitial Example"
  domainName="IBM"
  hideProgressIndicator
  isOpen
  nextButtonLabel="Next"
  onClose={function noRefCheck() {}}
  previousButtonLabel="Back"
  productName="Product"
  skipButtonLabel="Skip"
  startButtonLabel="Get started"
>
  <InterstitialScreenView className="NoImageExampleModal" stepTitle="Step 1">
    <InterstitialScreenViewModule
      description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
      size="sm"
      title="Use case-specific heading"
    />
  </InterstitialScreenView>
</InterstitialScreen>
`})}),`
`,n.jsx(e.h2,{id:"stackblitz-example-with-animated-media",children:"Stackblitz example with Animated Media"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/examples/carbon-for-ibm-products/InterstitialScreenWithAnimatedMedia",rel:"nofollow",children:n.jsx(e.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Example with Animated media"})})}),`
`,n.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,n.jsx(G,{})]})}function H(i={}){const{wrapper:e}={...A(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(E,{...i})}):E(i)}const R=""+new URL("interstitial-ph-ciVLfZ4M.png",import.meta.url).href,$=".CustomLayout{display:flex;flex-wrap:wrap;padding:2rem;gap:1rem}.storyCardExample{flex-grow:1;padding:1.5rem;border:1px solid var(--cds-border-inverse, #161616);background-color:var(--cds-layer-accent-01, #e0e0e0);block-size:350px;inline-size:20%}.GenericView{margin-block-start:6rem!important}.NoImageExampleModal{inline-size:100%}@media (min-width: 672px){.NoImageExampleModal{inline-size:75%}}.NoImageExampleFullScreen{inline-size:100%}@media (min-width: 672px){.NoImageExampleFullScreen{inline-size:75%}}@media (min-width: 1056px){.NoImageExampleFullScreen{inline-size:50%}}";new URL("./_story-assets/illustrations/how-a-case-is-created-1.json",import.meta.url).pathname;new URL("./_story-assets/illustrations/how-a-case-is-created-2.json",import.meta.url).pathname;new URL("./_story-assets/illustrations/how-a-case-is-created-3.json",import.meta.url).pathname;const D="interstitial-stories",Ae={title:"Experimental/Onboarding/Interstitial screen/InterstitialScreen",component:I,tags:["autodocs"],argTypes:{renderMedia:{options:["None","With a static image"],control:{type:"select"},description:"Optional prop to render any media like images or any animated media. This is a callback prop where you need to return the component with media to be rendered"},breakpointsWithMedia:{description:"Breakpoints are used to set the media content column size as well as the remainder for the main content areas column size. Medium and small breakpoints will be set to 0 internally to focus on the main content area."},children:{control:{disable:!0}}},decorators:[i=>t.createElement("div",{className:`${D}__viewport`},i())],parameters:{styles:$,docs:{page:H}}},M={"carbon.progress-step.complete":"Terminé","carbon.progress-step.incomplete":"Partiel","carbon.progress-step.current":"Actuel","carbon.progress-step.invalid":"Non valide"},x=i=>{switch(i){case"With a static image":return()=>t.createElement("div",{style:{width:"100%",height:"100%",background:`center center / contain no-repeat url("${R}") `}});default:return null}},X=({title:i})=>t.createElement("div",{className:"storyCardExample"},t.createElement("span",null,i)),F=({total:i,startValue:e,copyPrefix:c})=>{const a=[];for(let s=e;s<e+i;s++)a.push(t.createElement(X,{key:s,title:`${c} ${s}`}));return a},q=({children:i,...e})=>{const[c,a]=d.useState(!0),{renderMedia:s}=e,r=x(s);return t.createElement(t.Fragment,null,t.createElement(f,{onClick:()=>{a(!0)}},"Show Interstitial modal"),t.createElement(I,{isOpen:c,onClose:()=>{a(!1)},...e,renderMedia:r},i))},Z=({children:i,...e})=>{const[c,a]=d.useState(!0),{renderMedia:s}=e,r=x(s);return t.createElement(t.Fragment,null,t.createElement(f,{onClick:()=>{a(!0)}},"Show Interstitial modal"),t.createElement(I,{isOpen:c,onClose:()=>{a(!1)},...e,renderMedia:r},i.props.children))},J=({children:i,...e})=>{const[c,a]=d.useState(!0),[s,r]=d.useState(!0),{renderMedia:g}=e,w=x(g);return t.createElement(t.Fragment,null,t.createElement(f,{onClick:()=>{r(!0)}},"Show Interstitial full screen"),t.createElement(I,{isOpen:c||s,isFullScreen:s,onClose:()=>{a(!1),r(!1)},...e,renderMedia:w},i.props.children))},K=({children:i,...e})=>{const[c,a]=d.useState(!0),[s,r]=d.useState(!0),{renderMedia:g}=e,w=x(g);return t.createElement(t.Fragment,null,t.createElement(f,{onClick:()=>{r(!0)}},"Show Interstitial full screen"),t.createElement(I,{isOpen:c||s,isFullScreen:s,onClose:()=>{a(!1),r(!1)},...e,renderMedia:w},i))},Q=({children:i,...e})=>{const[c,a]=d.useState(!0),[s,r]=d.useState(!0),{renderMedia:g}=e,w=x(g);return t.createElement(t.Fragment,null,t.createElement(f,{onClick:()=>{r(!0)}},"Show Interstitial full screen"),t.createElement(I,{isOpen:c||s,isFullScreen:s,onClose:()=>{a(!1),r(!1)},...e,renderMedia:w},i.props.children))},_={domainName:"IBM",productName:"Product",previousButtonLabel:"Back",nextButtonLabel:"Next",startButtonLabel:"Get started",skipButtonLabel:"Skip",renderMedia:"None",breakpointsWithMedia:{xlg:8,lg:8}},b={..._,renderMedia:"With a static image"},p=q.bind({});p.storyName="Modal";p.args={...b,hideProgressIndicator:!0,interstitialAriaLabel:"Interstitial Screen",children:t.createElement(l,{stepTitle:"Step 1",translateWithId:i=>M[i]??i},t.createElement(o,{size:"sm",title:"Use case-specific heading",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."}))};const h=Z.bind({});h.storyName="Modal with multiple steps";h.args={...b,hideProgressIndicator:!1,headerTitle:"Use case-specific title",interstitialAriaLabel:"Interstitial Screen",children:t.createElement(t.Fragment,null,t.createElement(l,{stepTitle:"Step 1",translateWithId:i=>M[i]??i},t.createElement(o,{size:"md",title:"Use case-specific heading 1",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."})),t.createElement(l,{stepTitle:"Step 2",translateWithId:i=>M[i]??i},t.createElement(o,{size:"md",title:"Use case-specific heading 2",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."})),t.createElement(l,{stepTitle:"Step 3",translateWithId:i=>M[i]??i},t.createElement(o,{size:"md",title:"Use case-specific heading 3",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."})))};const m=K.bind({});m.storyName="Full screen";m.args={...b,hideProgressIndicator:!0,children:t.createElement(l,{stepTitle:"Step 1"},t.createElement(o,{className:"GenericView",title:"Use case-specific heading",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."}))};const u=J.bind({});u.storyName="Full screen with multiple steps";u.args={...b,headerTitle:"Use case-specific title",headerClassName:"MyInterstitialHeader",hideProgressIndicator:!1,children:t.createElement(t.Fragment,null,t.createElement(l,{stepTitle:"Step 1"},t.createElement(o,{className:"GenericView",title:"Use case-specific heading",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."})),t.createElement(l,{stepTitle:"Step 2"},t.createElement(o,{className:"GenericView",title:"Use case-specific heading",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."})),t.createElement(l,{stepTitle:"Step 3"},t.createElement(o,{className:"GenericView",title:"Use case-specific heading",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."})))};const S=Q.bind({});S.storyName="Full screen with custom layout";S.args={..._,headerTitle:"Use case-specific title",headerClassName:"MyInterstitialHeader",hideProgressIndicator:!1,children:t.createElement(t.Fragment,null,t.createElement(l,{stepTitle:"Step 1"},t.createElement("div",{className:"CustomLayout"},t.createElement(F,{total:8,startValue:1,copyPrefix:"Custom Element"}))),t.createElement(l,{stepTitle:"Step 2"},t.createElement("div",{className:"CustomLayout"},t.createElement(F,{total:8,startValue:9,copyPrefix:"Custom Element"}))))};var U,C,j;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  const [showInterstitialModal, setShowInterstitialModal] = useState(true);
  const {
    renderMedia
  } = args;
  const selectedMedia = getSelectedMedia(renderMedia);
  return <>
      <Button onClick={() => {
      setShowInterstitialModal(true);
    }}>
        Show Interstitial modal
      </Button>

      <InterstitialScreen isOpen={showInterstitialModal} onClose={() => {
      setShowInterstitialModal(false);
    }} {...args} renderMedia={selectedMedia}>
        {children}
      </InterstitialScreen>
    </>;
}`,...(j=(C=p.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var y,k,N;h.parameters={...h.parameters,docs:{...(y=h.parameters)==null?void 0:y.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  const [showInterstitialModal, setShowInterstitialModal] = useState(true);
  const {
    renderMedia
  } = args;
  const selectedMedia = getSelectedMedia(renderMedia);
  return <>
      <Button onClick={() => {
      setShowInterstitialModal(true);
    }}>
        Show Interstitial modal
      </Button>

      <InterstitialScreen isOpen={showInterstitialModal} onClose={() => {
      setShowInterstitialModal(false);
    }} {...args} renderMedia={selectedMedia}>
        {children.props.children}
      </InterstitialScreen>
    </>;
}`,...(N=(k=h.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var v,B,T;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  const [showInterstitialModal, setShowInterstitialModal] = useState(true);
  const [showInterstitialFullScreen, setShowInterstitialFullScreen] = useState(true);
  const {
    renderMedia
  } = args;
  const selectedMedia = getSelectedMedia(renderMedia);
  return <>
      <Button onClick={() => {
      setShowInterstitialFullScreen(true);
    }}>
        Show Interstitial full screen
      </Button>
      <InterstitialScreen isOpen={showInterstitialModal || showInterstitialFullScreen} isFullScreen={showInterstitialFullScreen} onClose={() => {
      setShowInterstitialModal(false);
      setShowInterstitialFullScreen(false);
    }} {...args} renderMedia={selectedMedia}>
        {children}
      </InterstitialScreen>
    </>;
}`,...(T=(B=m.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var z,L,O;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  const [showInterstitialModal, setShowInterstitialModal] = useState(true);
  const [showInterstitialFullScreen, setShowInterstitialFullScreen] = useState(true);
  const {
    renderMedia
  } = args;
  const selectedMedia = getSelectedMedia(renderMedia);
  return <>
      <Button onClick={() => {
      setShowInterstitialFullScreen(true);
    }}>
        Show Interstitial full screen
      </Button>
      <InterstitialScreen isOpen={showInterstitialModal || showInterstitialFullScreen} isFullScreen={showInterstitialFullScreen} onClose={() => {
      setShowInterstitialModal(false);
      setShowInterstitialFullScreen(false);
    }} {...args} renderMedia={selectedMedia}>
        {children.props.children}
      </InterstitialScreen>
    </>;
}`,...(O=(L=u.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var W,P,V;S.parameters={...S.parameters,docs:{...(W=S.parameters)==null?void 0:W.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  const [showInterstitialModal, setShowInterstitialModal] = useState(true);
  const [showInterstitialFullScreen, setShowInterstitialFullScreen] = useState(true);
  const {
    renderMedia
  } = args;
  const selectedMedia = getSelectedMedia(renderMedia);
  return <>
      <Button onClick={() => {
      setShowInterstitialFullScreen(true);
    }}>
        Show Interstitial full screen
      </Button>
      <InterstitialScreen isOpen={showInterstitialModal || showInterstitialFullScreen} isFullScreen={showInterstitialFullScreen} onClose={() => {
      setShowInterstitialModal(false);
      setShowInterstitialFullScreen(false);
    }} {...args} renderMedia={selectedMedia}>
        {children.props.children}
      </InterstitialScreen>
    </>;
}`,...(V=(P=S.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};const _e=["interstitialScreenModalWithImage","interstitialScreenModalMultiplesHeader","interstitialScreenFullScreenImage","interstitialScreenFullScreenHeaderWithImage","interstitialScreenFullScreenNoMediaWithCards"];export{_e as __namedExportsOrder,Ae as default,u as interstitialScreenFullScreenHeaderWithImage,m as interstitialScreenFullScreenImage,S as interstitialScreenFullScreenNoMediaWithCards,h as interstitialScreenModalMultiplesHeader,p as interstitialScreenModalWithImage};
