import{p as D,j as e}from"./settings-DrdbGLhD.js";import{c as w}from"./deprecate-D9ms-jbM.js";import{L as j}from"./Link-CxgVlihf.js";import{g as z}from"./story-helper-CKb9Drku.js";import{useMDXComponents as I}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-By_JQj77.js";import{e as G,i as Y,C as J}from"./index-PCczXLcq.js";import{R as Q,r as o}from"./index-BwDkhjyp.js";import{P as i}from"./index-Dk74W0Oi.js";import{g as Z}from"./devtools-B_UYo462.js";import{r as ee}from"./index-BONylQH5.js";import{a as te,b as oe,C as ne,c as ae,d as E}from"./CoachmarkOverlayElements-qOw1t6zT.js";import{C as re}from"./CoachmarkTagline-sXebI87a.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./events-Bq7WR1mU.js";import"./tslib.es6-CI8bilKU.js";import"./iframe-C34fHe3w.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-BjQFKvNH.js";import"./isSymbol-BZYRlrjc.js";import"./index-DrFu-skq.js";import"./uuidv4-BQrI85uz.js";import"./bucket-5-BuK6y5Rd.js";import"./lodash-C6Eq4oiK.js";import"./SteppedAnimatedMedia-CqRrHW7B.js";import"./lottie-D0UQuq7-.js";import"./clamp-DxEmERK6.js";import"./toNumber-DNhxxDfe.js";import"./Carousel-CyBvmnSc.js";import"./bucket-8-61DsWji_.js";const P=`${D.prefix}--coachmark`,O=`${P}-fixed`,L=`${P}-overlay`,u="CoachmarkFixed",p={onClose:()=>{},theme:"light",tagline:""};let s=Q.forwardRef(({children:n,className:t,onClose:f=p.onClose,portalTarget:g,tagline:_=p.tagline,theme:x=p.theme,...q},A)=>{const M=o.useRef(null),H=g?document.querySelector(g)??document.querySelector("body"):document.querySelector("body"),[l,c]=o.useState(!1),[y,b]=o.useState(!1),[V,W]=o.useState(),[$,X]=o.useState({x:0,y:0}),[d,k]=o.useState(!1),C=window.matchMedia("(prefers-reduced-motion: reduce)"),m=o.useCallback(()=>{console.log("HANDLING CLOSE HERE..."),C.matches?c(!1):k(!1)},[C.matches]),U=a=>{console.log("Here at transition end... ",a.propertyName==="transform"&&!d),a.propertyName==="transform"&&!d&&(c(!1),f())},v=a=>{W(a.target.getBoundingClientRect()),X({x:a.target.offsetLeft,y:a.target.offsetTop}),c(!1),b(!0)},h=o.useCallback(a=>{a.key==="Escape"&&m()},[m]);o.useEffect(()=>(document.addEventListener("keydown",h,!1),()=>{document.removeEventListener("keydown",h,!1)}),[h]);const K={buttonProps:{"aria-expanded":l,tabIndex:0,onClick:v,onDoubleClick:v},closeButtonProps:{onClick:m},targetRect:V,targetOffset:$,isOpen:l,tacos:"tacos"};return o.useEffect(()=>{y&&(b(!1),c(!0))},[y]),o.useEffect(()=>{k(l)},[l]),o.useEffect(()=>()=>c(!1),[]),e.jsx(te.Provider,{value:K,children:e.jsxs("div",{...q,className:w(O,`${O}__${x}`,t),ref:A,...Z(u),children:[e.jsx(re,{title:_,onClose:f}),l&&ee.createPortal(e.jsx(oe,{ref:M,fixedIsVisible:d,kind:ne.FIXED,onClose:m,onTransitionEnd:U,theme:x,className:w(d&&`${L}--is-visible`,L),children:n}),H||document.body)]})})});s=D.checkComponentEnabled(s,u);s.displayName=u;s.propTypes={children:i.node.isRequired,className:i.string,onClose:i.func,portalTarget:i.string,tagline:i.string.isRequired,theme:i.oneOf(["light","dark"])};s.__docgenInfo={description:`Fixed coachmarks are used to call out specific functionality or concepts
within the UI that may not be intuitive but are important for the
user to gain understanding of the product's main value and discover new use cases.
This variant allows the a coachmark overlay to be displayed by interacting with the tagline.`,methods:[],displayName:"CoachmarkFixed",props:{onClose:{defaultValue:{value:"() => {}",computed:!1},description:"Function to call when the Coachmark closes.",type:{name:"func"},required:!1},tagline:{defaultValue:{value:"''",computed:!1},description:"The tagline title which will be fixed to the bottom right of the window and will serve as the display trigger.",type:{name:"string"},required:!1},theme:{defaultValue:{value:"'light'",computed:!1},description:"Determines the theme of the component.",type:{name:"enum",value:[{value:"'light'",computed:!1},{value:"'dark'",computed:!1}]},required:!1},children:{description:"CoachmarkFixed should use a single CoachmarkOverlayElements component as a child.",type:{name:"node"},required:!0},className:{description:"Optional class name for this component.",type:{name:"string"},required:!1},portalTarget:{description:`By default, the Coachmark will be appended to the end of \`document.body\`.
The Coachmark will remain persistent as the user navigates the app until
the user closes the Coachmark.

Alternatively, the app developer can tightly couple the Coachmark to a DOM
element or other component by specifying a CSS selector. The Coachmark will
remain visible as long as that element remains visible or mounted. When the
element is hidden or component is unmounted, the Coachmark will disappear.`,type:{name:"string"},required:!1}}};function T(n){const t={a:"a",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...I(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"coachmarkfixed",children:"CoachmarkFixed"}),`
`,e.jsx(t.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#about-onboarding",children:"About Onboarding"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#note-on-theming",children:"Note on theming"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.a,{href:"https://pages.github.ibm.com/cdai-design/pal/components/onboarding/coachmark/usage#fixed",rel:"nofollow",children:"CoachmarkFixed"}),`
appears fixed at the bottom right corner of the browser window when the page
loads. It starts in a minimized state, to cover as little of the UI as possible;
when shown in tests as expanded by default, users immediately closed it without
reading, to get it out of the way. When dismissed, it slides down off the page.`]}),`
`,e.jsx(t.h2,{id:"about-onboarding",children:"About Onboarding"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.a,{href:"https://pages.github.ibm.com/security/security-design/teams-across-security/onboarding/overview/",rel:"nofollow",children:"Onboarding"}),`
is a continuous learning methodology and framework that aims to orient, onboard,
explain, educate, and cultivate novice users into high-functioning power users.`]}),`
`,e.jsx(t.h2,{id:"note-on-theming",children:"Note on theming"}),`
`,e.jsx(t.p,{children:`The CoachmarkFixed uses the theme prop (e.g., theme='dark') to set the
appropriate background and font colors for the overlay. Specify a value ('light'
or 'dark') to display properly within your usage.`}),`
`,e.jsx(t.h2,{id:"example-usage",children:"Example usage"}),`
`,e.jsx(t.p,{children:e.jsx(t.em,{children:"(See bottom right)"})}),`
`,e.jsx(G,{children:e.jsx("div",{className:"CoachmarkBaseExampleUsage",children:e.jsx(Y,{of:r})})}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(J,{})]})}function se(n={}){const{wrapper:t}={...I(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(T,{...n})}):T(n)}const ie=".docs-story div{transform:none}",We={title:"IBM Products/Onboarding/Coachmark/CoachmarkFixed",component:s,tags:["autodocs"],argTypes:{children:{control:{type:null}},portalTarget:{control:{type:null}},theme:{control:{type:null}}},parameters:{styles:ie,docs:{page:se}}},le=n=>{const t=z();return e.jsx(s,{...n,theme:t,children:e.jsxs(ae,{closeButtonLabel:"Done",nextButtonText:"Next",previousButtonLabel:"Back",children:[e.jsx(E,{title:"Hello World",description:"Link opens in new tab.",button:e.jsx(j,{href:"https://www.ibm.com",target:"_blank",children:"Learn more"})}),e.jsx(E,{title:"Hello World 2",description:"Link opens on this page.",button:e.jsx(j,{href:"https://www.ibm.com",children:"Learn more"})})]})})},r=le.bind({});r.args={tagline:"Why are there two types of severity scores?",onClose:()=>console.log("CLOSE"),portalTarget:'#root:not([hidden="true"])',className:"myCoachmarkFixed"};var F,N,S,R,B;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
  const theme = getSelectedCarbonTheme();
  return <CoachmarkFixed {...args} theme={theme}>
      <CoachmarkOverlayElements closeButtonLabel="Done" nextButtonText="Next" previousButtonLabel="Back">
        <CoachmarkOverlayElement title="Hello World" description="Link opens in new tab." button={<CarbonLink href="https://www.ibm.com" target="_blank">
              Learn more
            </CarbonLink>} />
        <CoachmarkOverlayElement title="Hello World 2" description="Link opens on this page." button={<CarbonLink href="https://www.ibm.com">Learn more</CarbonLink>} />
      </CoachmarkOverlayElements>
    </CoachmarkFixed>;
}`,...(S=(N=r.parameters)==null?void 0:N.docs)==null?void 0:S.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(B=(R=r.parameters)==null?void 0:R.docs)==null?void 0:B.description}}};const $e=["coachmarkFixed"];export{$e as __namedExportsOrder,r as coachmarkFixed,We as default};
