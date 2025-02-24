import{e,r as i}from"./index-BOZkNhcz.js";import{c as f,P as n}from"./index--clQM3eT.js";import{p as qe,B as b}from"./settings-BYgtfLKl.js";import{j as s,C as Ye}from"./index-KgSg3jcr.js";import{useMDXComponents as Oe}from"./index-aaDvWpb8.js";import"./DocsRenderer-CFRXHY34-A56J-102.js";import{C as Ze,M as Je,a as et,b as tt}from"./ComposedModal-B5GOofnJ.js";import{F as nt,C as pe}from"./Column-DDtOIyjn.js";import{R as st}from"./Row-lGQ8ycrS.js";import{P as me,a as ue}from"./ProgressIndicator-XE1PKxnq.js";import{c as he}from"./clamp-CsXXRQhr.js";import{g as fe}from"./devtools-BSXGZlBP.js";import{C as ge}from"./Carousel-CfCT9sHV.js";import{S as $e}from"./SteppedAnimatedMedia-BOC_MZvc.js";import{b as Se}from"./bucket-0-tjTgXQWL.js";import{I as w}from"./InterstitialScreenView-CYll_0Ab.js";import{I as M}from"./InterstitialScreenViewModule-9X0gDcG0.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-hBZdtWkn.js";import"./index-2uioG_CI.js";import"./events-OVwOsPzJ.js";import"./index-YZUn1U4D.js";import"./iframe--Hb3m1kv.js";import"./index-CO8sV34W.js";import"./index-ogSvIofg.js";import"./react-18-Cs6RDBhU.js";import"./index-_87NmGAs.js";import"./LayerContext-DxTbsTfh.js";import"./ButtonSet-BHSafAHF.js";import"./InlineLoading-CRp3J8hh.js";import"./bucket-6-B5NNCZ27.js";import"./mergeRefs-CTUecegF.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-DuCohhwL.js";import"./Text-C-NQiyV2.js";import"./bucket-18-Dly-sSmK.js";import"./bucket-9-C6VBS02H.js";import"./useIsomorphicEffect-C0ObacuX.js";import"./lottie-BZLE-Bwx.js";const a=`${qe.prefix}--interstitial-screen`,W=`${a}--internal-header`,at=`${a}--internal-body`,G="InterstitialScreen",h={closeIconDescription:"Close",domainName:"",hideProgressIndicator:!1,interstitialAriaLabel:"Interstitial screen",isFullScreen:!1,isOpen:!1,nextButtonLabel:"Next",onClose:()=>{},previousButtonLabel:"Back",productName:"",skipButtonLabel:"",startButtonLabel:"Get started"};let g=e.forwardRef((r,t)=>{var ce,de;const{children:c,className:p,closeIconDescription:d=h.closeIconDescription,domainName:m=h.domainName,hideProgressIndicator:I=h.hideProgressIndicator,interstitialAriaLabel:x=h.interstitialAriaLabel,isFullScreen:j=h.isFullScreen,isOpen:E=h.isOpen,media:o,renderMedia:X,breakpointsWithMedia:C,nextButtonLabel:Z=h.nextButtonLabel,onClose:K=h.onClose,previousButtonLabel:J=h.previousButtonLabel,productName:ee=h.productName,headerClassName:te,headerTitle:N,startButtonLabel:z=h.startButtonLabel,skipButtonLabel:Q=h.skipButtonLabel,...ne}=r,ze=i.useRef(null),Ae=t||ze,A=i.useRef(void 0),Y=i.useRef(void 0),V=i.useRef(void 0),[Ve,De]=i.useState(null),[S,q]=i.useState(0),k=i.Children.toArray(c),y=k.length>1,O=(o==null?void 0:o.render)||(o==null?void 0:o.filePaths)||X,se=i.useRef(null),v={xlg:((ce=o==null?void 0:o.breakpoints)==null?void 0:ce.xlg)||(C==null?void 0:C.xlg)||0,lg:((de=o==null?void 0:o.breakpoints)==null?void 0:de.lg)||(C==null?void 0:C.lg)||0,md:0,sm:0},D={xlg:16-v.xlg,lg:16-v.lg,md:8,sm:4},_e=j?`${a}--full-screen`:`${a}--modal`,ae=0,_=k.length-1,F=i.useCallback(()=>{q(0),K()},[K]),re=()=>{var l,u;(u=(l=se.current)==null?void 0:l.scroll)==null||u.call(l,{top:0,behavior:"smooth"})},We=()=>{const l=he(S-1,ae,_);A.current.scrollPrev(),re(),q(l)},Ge=()=>{const l=he(S+1,ae,_);A.current.scrollNext(),re(),q(l)};i.useEffect(()=>{var l;E||q(0),(l=Y.current)==null||l.focus()},[E,S,K]),i.useEffect(()=>{var l;De(!j&&E?"is-visible":null),(l=V==null?void 0:V.current)==null||l.focus()},[j,E]),i.useEffect(()=>{const l=u=>{const{key:$}=u;$==="Escape"&&F()};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[F]);const He=i.useMemo(()=>c&&i.Children.count(c)>1?parseFloat((1/(i.Children.count(c)-1)).toFixed(2)):0,[c]);if(!E)return null;const Xe=m!==""&&ee!==""?" | ":"",Ke=l=>e.createElement(Ze,{...ne,preventCloseOnClickOutside:!0,className:f(a,p),size:"lg",onClose:F,open:E,ref:Ae,"aria-label":x,...fe(G)},e.createElement(Je,{className:f(W,N&&`${W}--has-title`,te),iconDescription:d},N&&e.createElement("h2",null,N),!I&&e.createElement("div",{className:`${a}--progress`},e.createElement(me,{vertical:!1,currentIndex:S},k.map((u,$)=>{if(i.isValidElement(u))return e.createElement(ue,{key:$,label:u.props.stepTitle||""})})))),e.createElement(et,{className:at},l),e.createElement(tt,null,oe())),Qe=l=>e.createElement("div",{...ne,className:f(a,p,_e,Ve),role:"main","aria-label":x,ref:t,...fe(G)},e.createElement("div",{className:f([{[`${a}--container`]:j}])},e.createElement("div",{className:`${a}--header`},m,Xe,e.createElement("strong",null,ee)),e.createElement("header",{className:f(W,N&&`${W}--has-title`,te)},N&&e.createElement("h2",null,N),!I&&e.createElement("div",{className:`${a}--progress`},e.createElement(me,{vertical:!1,currentIndex:S},k.map((u,$)=>{if(i.isValidElement(u))return e.createElement(ue,{key:$,label:u.props.stepTitle||""})})))),l,oe())),ie=l=>{const u=l/He;q(Math.ceil(u))},le=()=>e.createElement("div",{className:f(`${a}--body`),ref:se,tabIndex:0},O?e.createElement(nt,{fullWidth:!0,className:f(`${a}--body-grid`)},e.createElement(st,{className:f(`${a}--body-row`)},e.createElement(pe,{xlg:D.xlg,lg:D.lg,md:D.md,sm:D.sm},e.createElement("div",{className:f(`${a}--content`)},y?e.createElement("div",{className:`${a}__carousel`},e.createElement(ge,{disableArrowScroll:!0,ref:A,onScroll:ie},c)):k[0])),O&&e.createElement(pe,{xlg:v.xlg,lg:v.lg,md:v.md,sm:v.sm,className:f(`${a}--media-container`)},e.createElement("div",{className:`${a}--media`},O&&(o==null?void 0:o.render)&&o.render(),O&&(o==null?void 0:o.filePaths)&&e.createElement($e,{className:`${a}--stepped-animated-media`,filePaths:o.filePaths,playStep:S}),O&&X&&e.createElement("div",{className:`${a}--stepped-animated-media`},X({playStep:S})))))):e.createElement("div",{className:f(`${a}--content`)},y?e.createElement("div",{className:`${a}__carousel`},e.createElement(ge,{disableArrowScroll:!0,ref:A,onScroll:ie},c)):e.createElement("div",null,k[0]))),oe=()=>e.createElement("div",{className:`${a}--footer`},y&&Q!==""&&e.createElement(b,{className:`${a}--skip-btn`,kind:"ghost",size:"lg",title:Q,onClick:F},Q),e.createElement("div",{className:`${a}--footer-controls`},y&&S>0&&e.createElement(b,{className:`${a}--prev-btn`,kind:"secondary",size:"lg",title:J,onClick:We},J),y&&S<_&&e.createElement(b,{className:`${a}--next-btn`,renderIcon:Se,ref:V,size:"lg",title:Z,onClick:Ge},Z),y&&S===_&&e.createElement(b,{className:`${a}--start-btn`,ref:Y,renderIcon:Se,size:"lg",title:z,onClick:F},z),!y&&e.createElement(b,{className:`${a}--start-btn`,ref:Y,size:"lg",title:z,onClick:F},z)));return j?Qe(le()):Ke(le())});g=qe.checkComponentEnabled(g,G);g.displayName=G;g.propTypes={breakpointsWithMedia:n.object,children:n.node.isRequired,className:n.string,closeIconDescription:n.string,domainName:n.string,headerClassName:n.string,headerTitle:n.string,hideProgressIndicator:n.bool,interstitialAriaLabel:n.string,isFullScreen:n.bool,isOpen:n.bool,media:n.oneOfType([n.shape({render:n.func,breakpoints:n.shape({xlg:n.number,lg:n.number})}),n.shape({filePaths:n.arrayOf(n.string),breakpoints:n.shape({xlg:n.number,lg:n.number})})]),nextButtonLabel:n.string,onClose:n.func,previousButtonLabel:n.string,productName:n.string,renderMedia:n.func,skipButtonLabel:n.string,startButtonLabel:n.string};g.__docgenInfo={description:`InterstitialScreen can be a full page or an overlay, and are
shown on the first time a user accesses a new experience
(e.g. upon first login or first time opening a page where a
newly purchased capability is presented).`,methods:[],displayName:"InterstitialScreen",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Provide the contents of the InterstitialScreen.",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}},closeIconDescription:{required:!1,tsType:{name:"string"},description:"Tooltip text and aria label for the Close button icon.",type:{name:"string"}},domainName:{required:!1,tsType:{name:"string"},description:'The domain this app belongs to, e.g. "IBM Cloud Pak".',type:{name:"string"}},headerClassName:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the <header> element >.",type:{name:"string"}},headerTitle:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the <header> element >.",type:{name:"string"}},hideProgressIndicator:{required:!1,tsType:{name:"boolean"},description:"Optional parameter to hide the progress indicator when multiple steps are used.",type:{name:"bool"}},interstitialAriaLabel:{required:!1,tsType:{name:"string"},description:"The aria label applied to the Interstitial Screen component",type:{name:"string"}},isFullScreen:{required:!1,tsType:{name:"boolean"},description:`Specifies whether the component is shown as a full-screen
experience, else it is shown as a modal by default.`,type:{name:"bool"}},isOpen:{required:!1,tsType:{name:"boolean"},description:"Specifies whether the component is currently open.",type:{name:"bool"}},media:{required:!1,tsType:{name:"intersection",raw:`{
  breakpoints?: {
    xlg?: number;
    lg?: number;
  };
} & (
  | {
      render?: () => ReactNode;
      filePaths?: never;
    }
  | {
      render?: never;
      filePaths?: string[];
    }
)`,elements:[{name:"signature",type:"object",raw:`{
  breakpoints?: {
    xlg?: number;
    lg?: number;
  };
}`,signature:{properties:[{key:"breakpoints",value:{name:"signature",type:"object",raw:`{
  xlg?: number;
  lg?: number;
}`,signature:{properties:[{key:"xlg",value:{name:"number",required:!1}},{key:"lg",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"unknown"}]},description:`The object describing an image in one of two shapes.

If a single media element is required, use \`{render}\`.

If a stepped animation is required, use \`{filePaths}\`.

Breakpoints are used to set the media content column size as well as the remainder for the main content areas column size.
Medium and small breakpoints will be set to 0 internally to focus on the main content area.

@deprecated please use the \`renderMedia\` prop
@see {@link MEDIA_PROP_TYPE}.`,type:{name:"union",value:[{name:"shape",value:{render:{name:"func",required:!1},breakpoints:{name:"shape",value:{xlg:{name:"number",required:!1},lg:{name:"number",required:!1}},required:!1}}},{name:"shape",value:{filePaths:{name:"arrayOf",value:{name:"string"},required:!1},breakpoints:{name:"shape",value:{xlg:{name:"number",required:!1},lg:{name:"number",required:!1}},required:!1}}}]}},renderMedia:{required:!1,tsType:{name:"signature",type:"function",raw:"(params) => ReactNode",signature:{arguments:[{name:"params"}],return:{name:"ReactNode"}}},description:"Optional prop to render any media like images or any animated media.",type:{name:"func"}},breakpointsWithMedia:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  xlg?: number;
  lg?: number;
}`,signature:{properties:[{key:"xlg",value:{name:"number",required:!1}},{key:"lg",value:{name:"number",required:!1}}]}},description:`optional prop to specify breakpoints when media is rendered through renderMedia
Breakpoints are used to set the media content column size as well as the remainder for the main content areas column size.
Medium and small breakpoints will be set to 0 internally to focus on the main content area.`,type:{name:"object"}},nextButtonLabel:{required:!1,tsType:{name:"string"},description:"The label for the Next button.",type:{name:"string"}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function to call when the close button is clicked.",type:{name:"func"}},previousButtonLabel:{required:!1,tsType:{name:"string"},description:"The label for the Previous button.",type:{name:"string"}},productName:{required:!1,tsType:{name:"string"},description:'The name of this app, e.g. "QRadar".',type:{name:"string"}},skipButtonLabel:{required:!1,tsType:{name:"string"},description:"The label for the skip button.",type:{name:"string"}},startButtonLabel:{required:!1,tsType:{name:"string"},description:"The label for the start button.",type:{name:"string"}}},composes:["PropsWithChildren"]};function be(r){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...Oe(),...r.components};return s.jsxs(s.Fragment,{children:[s.jsx(t.h1,{id:"interstitialscreen",children:"InterstitialScreen"}),`
`,s.jsx(t.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,s.jsxs(t.ul,{children:[`
`,s.jsx(t.li,{children:s.jsx(t.a,{href:"#overview",children:"Overview"})}),`
`,s.jsx(t.li,{children:s.jsx(t.a,{href:"#expected-composability",children:"Expected Composability"})}),`
`,s.jsx(t.li,{children:s.jsx(t.a,{href:"#about-onboarding",children:"About Onboarding"})}),`
`,s.jsx(t.li,{children:s.jsx(t.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,s.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,s.jsxs(t.p,{children:[s.jsx(t.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/interstitial-screen/usage",rel:"nofollow",children:"Interstitial screen"}),`
can be a full page or an overlay, and are shown on the first time a user
accesses a new experience (e.g. upon first login or first time opening a page
where a newly purchased capability is presented).`]}),`
`,s.jsx(t.h2,{id:"expected-composability",children:"Expected Composability"}),`
`,s.jsxs(t.p,{children:[`Interstitial Screen was designed to be used with N number of
`,s.jsx(t.strong,{children:"InterstitialScreenView"}),` children. As a convenience, a provided
`,s.jsx(t.strong,{children:"InterstitialScreenViewModule"}),` is also available, although not required as a
child of InterstitialScreenView.`]}),`
`,s.jsx(t.h2,{id:"about-onboarding",children:"About Onboarding"}),`
`,s.jsxs(t.p,{children:[s.jsx(t.a,{href:"https://pages.github.ibm.com/security/security-design/teams-across-security/onboarding/overview/",rel:"nofollow",children:"Onboarding"}),`
is a continuous learning methodology and framework that aims to orient, onboard,
explain, educate, and cultivate novice users into high-functioning power users.`]}),`
`,s.jsx(t.h2,{id:"interstitial-screen-code-sample",children:"Interstitial Screen Code sample"}),`
`,s.jsx(t.pre,{children:s.jsx(t.code,{className:"language-jsx",children:`<InterstitialScreen
  interstitialAriaLabel="Interstitial Example"
  domainName="IBM"
  hideProgressIndicator
  isOpen
  media={null}
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
`,s.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,s.jsx(Ye,{})]})}function rt(r={}){const{wrapper:t}={...Oe(),...r.components};return t?s.jsx(t,{...r,children:s.jsx(be,{...r})}):be(r)}const we=""+new URL("interstitial-ph-ciVLfZ4M.png",import.meta.url).href,it=".CustomLayout{display:flex;flex-wrap:wrap;padding:2rem;gap:1rem}.storyCardExample{flex-grow:1;padding:1.5rem;border:1px solid var(--cds-border-inverse, #161616);background-color:var(--cds-layer-accent-01, #e0e0e0);block-size:350px;inline-size:20%}.GenericView{margin-block-start:6rem!important}.NoImageExampleModal{inline-size:100%}@media (min-width: 672px){.NoImageExampleModal{inline-size:75%}}.NoImageExampleFullScreen{inline-size:100%}@media (min-width: 672px){.NoImageExampleFullScreen{inline-size:75%}}@media (min-width: 1056px){.NoImageExampleFullScreen{inline-size:50%}}",lt=new URL(""+new URL("how-a-case-is-created-1-Tfbcsgjr.json",import.meta.url).href,import.meta.url).pathname,ot=new URL(""+new URL("how-a-case-is-created-2-DbAlCK_E.json",import.meta.url).href,import.meta.url).pathname,ct=new URL(""+new URL("how-a-case-is-created-3-DFOOUVcw.json",import.meta.url).href,import.meta.url).pathname,dt="interstitial-stories",sn={title:"Experimental/Onboarding/Interstitial screen/InterstitialScreen",component:g,tags:["autodocs"],argTypes:{renderMedia:{options:["None","With a static image","With an animation"],control:{type:"select"},description:"Optional prop to render any media like images or any animated media. This is a callback prop where you need to return the component with media to be rendered"},media:{control:{type:null},description:'Deprecated: Property replaced by "renderMedia"'},breakpointsWithMedia:{description:"Breakpoints are used to set the media content column size as well as the remainder for the main content areas column size. Medium and small breakpoints will be set to 0 internally to focus on the main content area."},children:{control:{disable:!0}}},decorators:[r=>e.createElement("div",{className:`${dt}__viewport`},r())],parameters:{styles:it,docs:{page:rt}}},R=r=>{switch(console.log("Story media: ",we),r){case"With a static image":return()=>e.createElement("div",{style:{width:"100%",height:"100%",background:`center center / contain no-repeat url("${we}") `}});case"With an animation":return({playStep:t})=>e.createElement($e,{filePaths:[lt,ot,ct],playStep:t});default:return null}},pt=({title:r})=>e.createElement("div",{className:"storyCardExample"},e.createElement("span",null,r)),Ie=({total:r,startValue:t,copyPrefix:c})=>{const p=[];for(let d=t;d<t+r;d++)p.push(e.createElement(pt,{key:d,title:`${c} ${d}`}));return p},mt=({children:r,...t})=>{const[c,p]=i.useState(!0),{renderMedia:d}=t,m=R(d);return e.createElement(e.Fragment,null,e.createElement(b,{onClick:()=>{p(!0)}},"Show Interstitial modal"),e.createElement(g,{isOpen:c,onClose:()=>{p(!1)},...t,renderMedia:m},r))},ut=({children:r,...t})=>{const[c,p]=i.useState(!0),{renderMedia:d}=t,m=R(d);return e.createElement(e.Fragment,null,e.createElement(b,{onClick:()=>{p(!0)}},"Show Interstitial modal"),e.createElement(g,{isOpen:c,onClose:()=>{p(!1)},...t,renderMedia:m},r.props.children))},ht=({children:r,...t})=>{const[c,p]=i.useState(!0),[d,m]=i.useState(!0),{renderMedia:I}=t,x=R(I);return e.createElement(e.Fragment,null,e.createElement(b,{onClick:()=>{m(!0)}},"Show Interstitial full screen"),e.createElement(g,{isOpen:c||d,isFullScreen:d,onClose:()=>{p(!1),m(!1)},...t,renderMedia:x},r.props.children))},ft=({children:r,...t})=>{const[c,p]=i.useState(!0),[d,m]=i.useState(!0),{renderMedia:I}=t,x=R(I);return e.createElement(e.Fragment,null,e.createElement(b,{onClick:()=>{m(!0)}},"Show Interstitial full screen"),e.createElement(g,{isOpen:c||d,isFullScreen:d,onClose:()=>{p(!1),m(!1)},...t,renderMedia:x},r))},gt=({children:r,...t})=>{const[c,p]=i.useState(!0),[d,m]=i.useState(!0),{renderMedia:I}=t,x=R(I);return e.createElement(e.Fragment,null,e.createElement(b,{onClick:()=>{m(!0)}},"Show Interstitial full screen"),e.createElement(g,{isOpen:c||d,isFullScreen:d,onClose:()=>{p(!1),m(!1)},...t,renderMedia:x},r.props.children))},Re={domainName:"IBM",productName:"Product",previousButtonLabel:"Back",nextButtonLabel:"Next",startButtonLabel:"Get started",skipButtonLabel:"Skip",renderMedia:"None",breakpointsWithMedia:{xlg:8,lg:8}},H={...Re,renderMedia:"With a static image"},T=mt.bind({});T.storyName="Modal";T.args={...H,hideProgressIndicator:!0,interstitialAriaLabel:"Interstitial Screen",children:e.createElement(w,{stepTitle:"Step 1"},e.createElement(M,{size:"sm",title:"Use case-specific heading",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."}))};const B=ut.bind({});B.storyName="Modal with multiple steps";B.args={...H,hideProgressIndicator:!1,headerTitle:"Use case-specific title",interstitialAriaLabel:"Interstitial Screen",children:e.createElement(e.Fragment,null,e.createElement(w,{stepTitle:"Step 1"},e.createElement(M,{size:"md",title:"Use case-specific heading 1",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."})),e.createElement(w,{stepTitle:"Step 2"},e.createElement(M,{size:"md",title:"Use case-specific heading 2",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."})),e.createElement(w,{stepTitle:"Step 3"},e.createElement(M,{size:"md",title:"Use case-specific heading 3",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."})))};const U=ft.bind({});U.storyName="Full screen";U.args={...H,hideProgressIndicator:!0,children:e.createElement(w,{stepTitle:"Step 1"},e.createElement(M,{className:"GenericView",title:"Use case-specific heading",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."}))};const L=ht.bind({});L.storyName="Full screen with multiple steps";L.args={...H,headerTitle:"Use case-specific title",headerClassName:"MyInterstitialHeader",hideProgressIndicator:!1,children:e.createElement(e.Fragment,null,e.createElement(w,{stepTitle:"Step 1"},e.createElement(M,{className:"GenericView",title:"Use case-specific heading",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."})),e.createElement(w,{stepTitle:"Step 2"},e.createElement(M,{className:"GenericView",title:"Use case-specific heading",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."})),e.createElement(w,{stepTitle:"Step 3"},e.createElement(M,{className:"GenericView",title:"Use case-specific heading",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."})))};const P=gt.bind({});P.storyName="Full screen with custom layout";P.args={...Re,headerTitle:"Use case-specific title",headerClassName:"MyInterstitialHeader",hideProgressIndicator:!1,children:e.createElement(e.Fragment,null,e.createElement(w,{stepTitle:"Step 1"},e.createElement("div",{className:"CustomLayout"},e.createElement(Ie,{total:8,startValue:1,copyPrefix:"Custom Element"}))),e.createElement(w,{stepTitle:"Step 2"},e.createElement("div",{className:"CustomLayout"},e.createElement(Ie,{total:8,startValue:9,copyPrefix:"Custom Element"}))))};var xe,Me,ye;T.parameters={...T.parameters,docs:{...(xe=T.parameters)==null?void 0:xe.docs,source:{originalSource:`({
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
}`,...(ye=(Me=T.parameters)==null?void 0:Me.docs)==null?void 0:ye.source}}};var Ee,Ce,Ne;B.parameters={...B.parameters,docs:{...(Ee=B.parameters)==null?void 0:Ee.docs,source:{originalSource:`({
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
}`,...(Ne=(Ce=B.parameters)==null?void 0:Ce.docs)==null?void 0:Ne.source}}};var ke,ve,Fe;U.parameters={...U.parameters,docs:{...(ke=U.parameters)==null?void 0:ke.docs,source:{originalSource:`({
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
}`,...(Fe=(ve=U.parameters)==null?void 0:ve.docs)==null?void 0:Fe.source}}};var Te,Be,Ue;L.parameters={...L.parameters,docs:{...(Te=L.parameters)==null?void 0:Te.docs,source:{originalSource:`({
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
}`,...(Ue=(Be=L.parameters)==null?void 0:Be.docs)==null?void 0:Ue.source}}};var Le,Pe,je;P.parameters={...P.parameters,docs:{...(Le=P.parameters)==null?void 0:Le.docs,source:{originalSource:`({
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
}`,...(je=(Pe=P.parameters)==null?void 0:Pe.docs)==null?void 0:je.source}}};const an=["interstitialScreenModalWithImage","interstitialScreenModalMultiplesHeader","interstitialScreenFullScreenImage","interstitialScreenFullScreenHeaderWithImage","interstitialScreenFullScreenNoMediaWithCards"];export{an as __namedExportsOrder,sn as default,L as interstitialScreenFullScreenHeaderWithImage,U as interstitialScreenFullScreenImage,P as interstitialScreenFullScreenNoMediaWithCards,B as interstitialScreenModalMultiplesHeader,T as interstitialScreenModalWithImage};
