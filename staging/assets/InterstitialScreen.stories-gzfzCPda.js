import{e,r as i}from"./index-CPiZ6Cnx.js";import{c as h,P as c}from"./index-BPCFiO9b.js";import{p as Be,B as f}from"./settings-41bnSjHp.js";import{j as n}from"./index-B83en7q5.js";import{useMDXComponents as Ue}from"./index-CUO_02de.js";import"./index-CJmRdHjV.js";import{C as De}from"./index-l8Cv5qjn.js";import{C as Ge,M as He,a as Xe,b as Qe}from"./ComposedModal-CgRKyN5W.js";import{F as Ze,C as le}from"./Column-De0GgPoD.js";import{R as Je}from"./Row-sWCFZi_g.js";import{P as oe,a as ce}from"./ProgressIndicator-DK8kw8LH.js";import{c as de}from"./clamp-CsXXRQhr.js";import{g as pe}from"./devtools-Ca6Wku6c.js";import{C as me}from"./Carousel-BCNWa9EM.js";import{b as ue}from"./bucket-0-BYIdRiFw.js";import{I as S}from"./InterstitialScreenView-BatUi626.js";import{I as x}from"./InterstitialScreenViewModule-vY6dai2w.js";import"./_commonjsHelpers-BosuxZz1.js";import"./events-OVwOsPzJ.js";import"./index-H2wBg9na.js";import"./index-ZKO_qc5e.js";import"./preview-8KXF_sIz.js";import"./iframe-bh7EDAL7.js";import"./DocsRenderer-CFRXHY34-FcMlR_MT.js";import"./client-BCQEsWlk.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";import"./index-C_tB4MqD.js";import"./LayerContext-BGhaVt7n.js";import"./ButtonSet-BTIAcY4e.js";import"./InlineLoading-Cst7O9Fk.js";import"./bucket-6-CO2LLwKX.js";import"./mergeRefs-CTUecegF.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-Dfrp1CCV.js";import"./Text-DJS5NTiV.js";import"./bucket-18-CAzey7tD.js";import"./bucket-9-qDf-0NK_.js";import"./useIsomorphicEffect-CqAX3nH-.js";const s=`${Be.prefix}--interstitial-screen`,W=`${s}--internal-header`,Ke=`${s}--internal-body`,D="InterstitialScreen",u={closeIconDescription:"Close",domainName:"",hideProgressIndicator:!1,interstitialAriaLabel:"Interstitial screen",isFullScreen:!1,isOpen:!1,nextButtonLabel:"Next",onClose:()=>{},previousButtonLabel:"Back",productName:"",skipButtonLabel:"",startButtonLabel:"Get started"};let g=e.forwardRef((a,t)=>{const{children:l,className:d,closeIconDescription:o=u.closeIconDescription,domainName:p=u.domainName,hideProgressIndicator:w=u.hideProgressIndicator,interstitialAriaLabel:I=u.interstitialAriaLabel,isFullScreen:L=u.isFullScreen,isOpen:y=u.isOpen,renderMedia:O,breakpointsWithMedia:E,nextButtonLabel:Z=u.nextButtonLabel,onClose:H=u.onClose,previousButtonLabel:J=u.previousButtonLabel,productName:K=u.productName,headerClassName:Y,headerTitle:C,startButtonLabel:R=u.startButtonLabel,skipButtonLabel:X=u.skipButtonLabel,...ee}=a,Le=i.useRef(null),Pe=t||Le,q=i.useRef(void 0),Q=i.useRef(void 0),A=i.useRef(void 0),[$e,ze]=i.useState(null),[b,P]=i.useState(0),N=i.Children.toArray(l),M=N.length>1,te=i.useRef(null),k={xlg:(E==null?void 0:E.xlg)||0,lg:(E==null?void 0:E.lg)||0,md:0,sm:0},V={xlg:16-k.xlg,lg:16-k.lg,md:8,sm:4},Oe=L?`${s}--full-screen`:`${s}--modal`,ne=0,_=N.length-1,v=i.useCallback(()=>{P(0),H()},[H]),se=()=>{var r,m;(m=(r=te.current)==null?void 0:r.scroll)==null||m.call(r,{top:0,behavior:"smooth"})},Re=()=>{const r=de(b-1,ne,_);q.current.scrollPrev(),se(),P(r)},qe=()=>{const r=de(b+1,ne,_);q.current.scrollNext(),se(),P(r)};i.useEffect(()=>{var r;y||P(0),(r=Q.current)==null||r.focus()},[y,b,H]),i.useEffect(()=>{var r;ze(!L&&y?"is-visible":null),(r=A==null?void 0:A.current)==null||r.focus()},[L,y]),i.useEffect(()=>{const r=m=>{const{key:$}=m;$==="Escape"&&v()};return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[v]);const Ae=i.useMemo(()=>l&&i.Children.count(l)>1?parseFloat((1/(i.Children.count(l)-1)).toFixed(2)):0,[l]);if(!y)return null;const Ve=p!==""&&K!==""?" | ":"",_e=r=>e.createElement(Ge,{...ee,preventCloseOnClickOutside:!0,className:h(s,d),size:"lg",onClose:v,open:y,ref:Pe,"aria-label":I,...pe(D)},e.createElement(He,{className:h(W,C&&`${W}--has-title`,Y),iconDescription:o},C&&e.createElement("h2",null,C),!w&&e.createElement("div",{className:`${s}--progress`},e.createElement(oe,{vertical:!1,currentIndex:b},N.map((m,$)=>{if(i.isValidElement(m))return e.createElement(ce,{key:$,label:m.props.stepTitle||""})})))),e.createElement(Xe,{className:Ke},r),e.createElement(Qe,null,re())),We=r=>e.createElement("div",{...ee,className:h(s,d,Oe,$e),role:"main","aria-label":I,ref:t,...pe(D)},e.createElement("div",{className:h([{[`${s}--container`]:L}])},e.createElement("div",{className:`${s}--header`},p,Ve,e.createElement("strong",null,K)),e.createElement("header",{className:h(W,C&&`${W}--has-title`,Y)},C&&e.createElement("h2",null,C),!w&&e.createElement("div",{className:`${s}--progress`},e.createElement(oe,{vertical:!1,currentIndex:b},N.map((m,$)=>{if(i.isValidElement(m))return e.createElement(ce,{key:$,label:m.props.stepTitle||""})})))),r,re())),ae=r=>{const m=r/Ae;P(Math.ceil(m))},ie=()=>e.createElement("div",{className:h(`${s}--body`),ref:te,tabIndex:0},O?e.createElement(Ze,{fullWidth:!0,className:h(`${s}--body-grid`)},e.createElement(Je,{className:h(`${s}--body-row`)},e.createElement(le,{xlg:V.xlg,lg:V.lg,md:V.md,sm:V.sm},e.createElement("div",{className:h(`${s}--content`)},M?e.createElement("div",{className:`${s}__carousel`},e.createElement(me,{disableArrowScroll:!0,ref:q,onScroll:ae},l)):N[0])),O&&e.createElement(le,{xlg:k.xlg,lg:k.lg,md:k.md,sm:k.sm,className:h(`${s}--media-container`)},e.createElement("div",{className:`${s}--media`},O&&e.createElement("div",{className:`${s}--stepped-animated-media`},O({playStep:b})))))):e.createElement("div",{className:h(`${s}--content`)},M?e.createElement("div",{className:`${s}__carousel`},e.createElement(me,{disableArrowScroll:!0,ref:q,onScroll:ae},l)):e.createElement("div",null,N[0]))),re=()=>e.createElement("div",{className:`${s}--footer`},M&&X!==""&&e.createElement(f,{className:`${s}--skip-btn`,kind:"ghost",size:"lg",title:X,onClick:v},X),e.createElement("div",{className:`${s}--footer-controls`},M&&b>0&&e.createElement(f,{className:`${s}--prev-btn`,kind:"secondary",size:"lg",title:J,onClick:Re},J),M&&b<_&&e.createElement(f,{className:`${s}--next-btn`,renderIcon:ue,ref:A,size:"lg",title:Z,onClick:qe},Z),M&&b===_&&e.createElement(f,{className:`${s}--start-btn`,ref:Q,renderIcon:ue,size:"lg",title:R,onClick:v},R),!M&&e.createElement(f,{className:`${s}--start-btn`,ref:Q,size:"lg",title:R,onClick:v},R)));return L?We(ie()):_e(ie())});g=Be.checkComponentEnabled(g,D);g.displayName=D;g.propTypes={breakpointsWithMedia:c.object,children:c.node.isRequired,className:c.string,closeIconDescription:c.string,domainName:c.string,headerClassName:c.string,headerTitle:c.string,hideProgressIndicator:c.bool,interstitialAriaLabel:c.string,isFullScreen:c.bool,isOpen:c.bool,nextButtonLabel:c.string,onClose:c.func,previousButtonLabel:c.string,productName:c.string,renderMedia:c.func,skipButtonLabel:c.string,startButtonLabel:c.string};g.__docgenInfo={description:`InterstitialScreen can be a full page or an overlay, and are
shown on the first time a user accesses a new experience
(e.g. upon first login or first time opening a page where a
newly purchased capability is presented).`,methods:[],displayName:"InterstitialScreen",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Provide the contents of the InterstitialScreen.",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}},closeIconDescription:{required:!1,tsType:{name:"string"},description:"Tooltip text and aria label for the Close button icon.",type:{name:"string"}},domainName:{required:!1,tsType:{name:"string"},description:'The domain this app belongs to, e.g. "IBM Cloud Pak".',type:{name:"string"}},headerClassName:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the <header> element >.",type:{name:"string"}},headerTitle:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the <header> element >.",type:{name:"string"}},hideProgressIndicator:{required:!1,tsType:{name:"boolean"},description:"Optional parameter to hide the progress indicator when multiple steps are used.",type:{name:"bool"}},interstitialAriaLabel:{required:!1,tsType:{name:"string"},description:"The aria label applied to the Interstitial Screen component",type:{name:"string"}},isFullScreen:{required:!1,tsType:{name:"boolean"},description:`Specifies whether the component is shown as a full-screen
experience, else it is shown as a modal by default.`,type:{name:"bool"}},isOpen:{required:!1,tsType:{name:"boolean"},description:"Specifies whether the component is currently open.",type:{name:"bool"}},renderMedia:{required:!1,tsType:{name:"signature",type:"function",raw:"(params) => ReactNode",signature:{arguments:[{name:"params"}],return:{name:"ReactNode"}}},description:"Optional prop to render any media like images or any animated media.",type:{name:"func"}},breakpointsWithMedia:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  xlg?: number;
  lg?: number;
}`,signature:{properties:[{key:"xlg",value:{name:"number",required:!1}},{key:"lg",value:{name:"number",required:!1}}]}},description:`optional prop to specify breakpoints when media is rendered through renderMedia
Breakpoints are used to set the media content column size as well as the remainder for the main content areas column size.
Medium and small breakpoints will be set to 0 internally to focus on the main content area.`,type:{name:"object"}},nextButtonLabel:{required:!1,tsType:{name:"string"},description:"The label for the Next button.",type:{name:"string"}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function to call when the close button is clicked.",type:{name:"func"}},previousButtonLabel:{required:!1,tsType:{name:"string"},description:"The label for the Previous button.",type:{name:"string"}},productName:{required:!1,tsType:{name:"string"},description:'The name of this app, e.g. "QRadar".',type:{name:"string"}},skipButtonLabel:{required:!1,tsType:{name:"string"},description:"The label for the skip button.",type:{name:"string"}},startButtonLabel:{required:!1,tsType:{name:"string"},description:"The label for the start button.",type:{name:"string"}}},composes:["PropsWithChildren"]};function he(a){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...Ue(),...a.components};return n.jsxs(n.Fragment,{children:[n.jsx(t.h1,{id:"interstitialscreen",children:"InterstitialScreen"}),`
`,n.jsx(t.p,{children:n.jsx(t.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/interstitial-screen/",rel:"nofollow",children:"InterstitialScreen usage guidelines"})}),`
`,n.jsx(t.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsx(t.li,{children:n.jsx(t.a,{href:"#overview",children:"Overview"})}),`
`,n.jsx(t.li,{children:n.jsx(t.a,{href:"#expected-composability",children:"Expected Composability"})}),`
`,n.jsx(t.li,{children:n.jsx(t.a,{href:"#about-onboarding",children:"About Onboarding"})}),`
`,n.jsx(t.li,{children:n.jsx(t.a,{href:"#stackblitz-example-with-animated-media",children:"Stackblitz example with Animated Media"})}),`
`,n.jsx(t.li,{children:n.jsx(t.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,n.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,n.jsxs(t.p,{children:[n.jsx(t.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/interstitial-screen/usage",rel:"nofollow",children:"Interstitial screen"}),`
can be a full page or an overlay, and are shown on the first time a user
accesses a new experience (e.g. upon first login or first time opening a page
where a newly purchased capability is presented).`]}),`
`,n.jsx(t.h2,{id:"expected-composability",children:"Expected Composability"}),`
`,n.jsxs(t.p,{children:[`Interstitial Screen was designed to be used with N number of
`,n.jsx(t.strong,{children:"InterstitialScreenView"}),` children. As a convenience, a provided
`,n.jsx(t.strong,{children:"InterstitialScreenViewModule"}),` is also available, although not required as a
child of InterstitialScreenView.`]}),`
`,n.jsx(t.h2,{id:"about-onboarding",children:"About Onboarding"}),`
`,n.jsxs(t.p,{children:[n.jsx(t.a,{href:"https://pages.github.ibm.com/security/security-design/teams-across-security/onboarding/overview/",rel:"nofollow",children:"Onboarding"}),`
is a continuous learning methodology and framework that aims to orient, onboard,
explain, educate, and cultivate novice users into high-functioning power users.`]}),`
`,n.jsx(t.h2,{id:"interstitial-screen-code-sample",children:"Interstitial Screen Code sample"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-jsx",children:`<InterstitialScreen
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
`,n.jsx(t.h2,{id:"stackblitz-example-with-animated-media",children:"Stackblitz example with Animated Media"}),`
`,n.jsx(t.p,{children:n.jsx(t.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/examples/carbon-for-ibm-products/InterstitialScreenWithAnimatedMedia",rel:"nofollow",children:n.jsx(t.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Example with Animated media"})})}),`
`,n.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,n.jsx(De,{})]})}function Ye(a={}){const{wrapper:t}={...Ue(),...a.components};return t?n.jsx(t,{...a,children:n.jsx(he,{...a})}):he(a)}const et=""+new URL("interstitial-ph-ciVLfZ4M.png",import.meta.url).href,tt=".CustomLayout{display:flex;flex-wrap:wrap;padding:2rem;gap:1rem}.storyCardExample{flex-grow:1;padding:1.5rem;border:1px solid var(--cds-border-inverse, #161616);background-color:var(--cds-layer-accent-01, #e0e0e0);block-size:350px;inline-size:20%}.GenericView{margin-block-start:6rem!important}.NoImageExampleModal{inline-size:100%}@media (min-width: 672px){.NoImageExampleModal{inline-size:75%}}.NoImageExampleFullScreen{inline-size:100%}@media (min-width: 672px){.NoImageExampleFullScreen{inline-size:75%}}@media (min-width: 1056px){.NoImageExampleFullScreen{inline-size:50%}}";new URL("./_story-assets/illustrations/how-a-case-is-created-1.json",import.meta.url).pathname;new URL("./_story-assets/illustrations/how-a-case-is-created-2.json",import.meta.url).pathname;new URL("./_story-assets/illustrations/how-a-case-is-created-3.json",import.meta.url).pathname;const nt="interstitial-stories",Xt={title:"Experimental/Onboarding/Interstitial screen/InterstitialScreen",component:g,tags:["autodocs"],argTypes:{renderMedia:{options:["None","With a static image"],control:{type:"select"},description:"Optional prop to render any media like images or any animated media. This is a callback prop where you need to return the component with media to be rendered"},breakpointsWithMedia:{description:"Breakpoints are used to set the media content column size as well as the remainder for the main content areas column size. Medium and small breakpoints will be set to 0 internally to focus on the main content area."},children:{control:{disable:!0}}},decorators:[a=>e.createElement("div",{className:`${nt}__viewport`},a())],parameters:{styles:tt,docs:{page:Ye}}},z=a=>{switch(a){case"With a static image":return()=>e.createElement("div",{style:{width:"100%",height:"100%",background:`center center / contain no-repeat url("${et}") `}});default:return null}},st=({title:a})=>e.createElement("div",{className:"storyCardExample"},e.createElement("span",null,a)),ge=({total:a,startValue:t,copyPrefix:l})=>{const d=[];for(let o=t;o<t+a;o++)d.push(e.createElement(st,{key:o,title:`${l} ${o}`}));return d},at=({children:a,...t})=>{const[l,d]=i.useState(!0),{renderMedia:o}=t,p=z(o);return e.createElement(e.Fragment,null,e.createElement(f,{onClick:()=>{d(!0)}},"Show Interstitial modal"),e.createElement(g,{isOpen:l,onClose:()=>{d(!1)},...t,renderMedia:p},a))},it=({children:a,...t})=>{const[l,d]=i.useState(!0),{renderMedia:o}=t,p=z(o);return e.createElement(e.Fragment,null,e.createElement(f,{onClick:()=>{d(!0)}},"Show Interstitial modal"),e.createElement(g,{isOpen:l,onClose:()=>{d(!1)},...t,renderMedia:p},a.props.children))},rt=({children:a,...t})=>{const[l,d]=i.useState(!0),[o,p]=i.useState(!0),{renderMedia:w}=t,I=z(w);return e.createElement(e.Fragment,null,e.createElement(f,{onClick:()=>{p(!0)}},"Show Interstitial full screen"),e.createElement(g,{isOpen:l||o,isFullScreen:o,onClose:()=>{d(!1),p(!1)},...t,renderMedia:I},a.props.children))},lt=({children:a,...t})=>{const[l,d]=i.useState(!0),[o,p]=i.useState(!0),{renderMedia:w}=t,I=z(w);return e.createElement(e.Fragment,null,e.createElement(f,{onClick:()=>{p(!0)}},"Show Interstitial full screen"),e.createElement(g,{isOpen:l||o,isFullScreen:o,onClose:()=>{d(!1),p(!1)},...t,renderMedia:I},a))},ot=({children:a,...t})=>{const[l,d]=i.useState(!0),[o,p]=i.useState(!0),{renderMedia:w}=t,I=z(w);return e.createElement(e.Fragment,null,e.createElement(f,{onClick:()=>{p(!0)}},"Show Interstitial full screen"),e.createElement(g,{isOpen:l||o,isFullScreen:o,onClose:()=>{d(!1),p(!1)},...t,renderMedia:I},a.props.children))},je={domainName:"IBM",productName:"Product",previousButtonLabel:"Back",nextButtonLabel:"Next",startButtonLabel:"Get started",skipButtonLabel:"Skip",renderMedia:"None",breakpointsWithMedia:{xlg:8,lg:8}},G={...je,renderMedia:"With a static image"},F=at.bind({});F.storyName="Modal";F.args={...G,hideProgressIndicator:!0,interstitialAriaLabel:"Interstitial Screen",children:e.createElement(S,{stepTitle:"Step 1"},e.createElement(x,{size:"sm",title:"Use case-specific heading",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."}))};const T=it.bind({});T.storyName="Modal with multiple steps";T.args={...G,hideProgressIndicator:!1,headerTitle:"Use case-specific title",interstitialAriaLabel:"Interstitial Screen",children:e.createElement(e.Fragment,null,e.createElement(S,{stepTitle:"Step 1"},e.createElement(x,{size:"md",title:"Use case-specific heading 1",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."})),e.createElement(S,{stepTitle:"Step 2"},e.createElement(x,{size:"md",title:"Use case-specific heading 2",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."})),e.createElement(S,{stepTitle:"Step 3"},e.createElement(x,{size:"md",title:"Use case-specific heading 3",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."})))};const B=lt.bind({});B.storyName="Full screen";B.args={...G,hideProgressIndicator:!0,children:e.createElement(S,{stepTitle:"Step 1"},e.createElement(x,{className:"GenericView",title:"Use case-specific heading",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."}))};const U=rt.bind({});U.storyName="Full screen with multiple steps";U.args={...G,headerTitle:"Use case-specific title",headerClassName:"MyInterstitialHeader",hideProgressIndicator:!1,children:e.createElement(e.Fragment,null,e.createElement(S,{stepTitle:"Step 1"},e.createElement(x,{className:"GenericView",title:"Use case-specific heading",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."})),e.createElement(S,{stepTitle:"Step 2"},e.createElement(x,{className:"GenericView",title:"Use case-specific heading",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."})),e.createElement(S,{stepTitle:"Step 3"},e.createElement(x,{className:"GenericView",title:"Use case-specific heading",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."})))};const j=ot.bind({});j.storyName="Full screen with custom layout";j.args={...je,headerTitle:"Use case-specific title",headerClassName:"MyInterstitialHeader",hideProgressIndicator:!1,children:e.createElement(e.Fragment,null,e.createElement(S,{stepTitle:"Step 1"},e.createElement("div",{className:"CustomLayout"},e.createElement(ge,{total:8,startValue:1,copyPrefix:"Custom Element"}))),e.createElement(S,{stepTitle:"Step 2"},e.createElement("div",{className:"CustomLayout"},e.createElement(ge,{total:8,startValue:9,copyPrefix:"Custom Element"}))))};var fe,Se,be;F.parameters={...F.parameters,docs:{...(fe=F.parameters)==null?void 0:fe.docs,source:{originalSource:`({
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
}`,...(be=(Se=F.parameters)==null?void 0:Se.docs)==null?void 0:be.source}}};var we,Ie,xe;T.parameters={...T.parameters,docs:{...(we=T.parameters)==null?void 0:we.docs,source:{originalSource:`({
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
}`,...(xe=(Ie=T.parameters)==null?void 0:Ie.docs)==null?void 0:xe.source}}};var Me,ye,Ee;B.parameters={...B.parameters,docs:{...(Me=B.parameters)==null?void 0:Me.docs,source:{originalSource:`({
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
}`,...(Ee=(ye=B.parameters)==null?void 0:ye.docs)==null?void 0:Ee.source}}};var Ce,Ne,ke;U.parameters={...U.parameters,docs:{...(Ce=U.parameters)==null?void 0:Ce.docs,source:{originalSource:`({
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
}`,...(ke=(Ne=U.parameters)==null?void 0:Ne.docs)==null?void 0:ke.source}}};var ve,Fe,Te;j.parameters={...j.parameters,docs:{...(ve=j.parameters)==null?void 0:ve.docs,source:{originalSource:`({
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
}`,...(Te=(Fe=j.parameters)==null?void 0:Fe.docs)==null?void 0:Te.source}}};const Qt=["interstitialScreenModalWithImage","interstitialScreenModalMultiplesHeader","interstitialScreenFullScreenImage","interstitialScreenFullScreenHeaderWithImage","interstitialScreenFullScreenNoMediaWithCards"];export{Qt as __namedExportsOrder,Xt as default,U as interstitialScreenFullScreenHeaderWithImage,B as interstitialScreenFullScreenImage,j as interstitialScreenFullScreenNoMediaWithCards,T as interstitialScreenModalMultiplesHeader,F as interstitialScreenModalWithImage};
