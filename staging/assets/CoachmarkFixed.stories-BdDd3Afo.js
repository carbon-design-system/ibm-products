import{p as N,j as e}from"./settings-BiUEFdm2.js";import{c as j}from"./deprecate-D9ms-jbM.js";import{L as E}from"./Link-CxgVlihf.js";import{g as z}from"./story-helper-YTYnELA9.js";import{useMDXComponents as P}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-CsZ1lTTC.js";import{e as Y,i as G,C as J}from"./index-CDYzkStP.js";import{R as Q,r as o}from"./index-BwDkhjyp.js";import{P as l}from"./index-Dk74W0Oi.js";import{g as Z}from"./devtools-BPcQvzXy.js";import{r as ee}from"./index-BONylQH5.js";import{a as te,b as oe,C as ne,c as ae,d as O}from"./CoachmarkOverlayElements-BjzFwB1c.js";import{C as re}from"./CoachmarkTagline-Ct78EIFi.js";import{u as se}from"./use-reduced-motion-BisnjenD.js";import{u as ie}from"./useIsomorphicEffect-D7JMtAof.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./events-Bq7WR1mU.js";import"./tslib.es6-B4_xh3D5.js";import"./iframe-j3s5A4v9.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-BjQFKvNH.js";import"./isSymbol-BZYRlrjc.js";import"./index-DrFu-skq.js";import"./uuidv4-BQrI85uz.js";import"./bucket-5-BuK6y5Rd.js";import"./lodash-C6Eq4oiK.js";import"./SteppedAnimatedMedia-D5S8_Guu.js";import"./lottie-D0UQuq7-.js";import"./clamp-DxEmERK6.js";import"./toNumber-DNhxxDfe.js";import"./Carousel-DpP2qXaV.js";import"./bucket-8-61DsWji_.js";const _=`${N.prefix}--coachmark`,L=`${_}-fixed`,T=`${_}-overlay`,g="CoachmarkFixed",f={onClose:()=>{},theme:"light",tagline:""};let i=Q.forwardRef(({children:n,className:t,onClose:x=f.onClose,portalTarget:h,tagline:q=f.tagline,theme:b=f.theme,...M},A)=>{const V=o.useRef(null),a=o.useRef(null),[c,m]=o.useState(!1),[y,k]=o.useState(!1),[W,$]=o.useState(),[H,X]=o.useState({x:0,y:0}),[p,C]=o.useState(!1),v=se();ie(()=>{a.current=h?(document==null?void 0:document.querySelector(h))??(document==null?void 0:document.querySelector("body")):document==null?void 0:document.querySelector("body")},[h]);const d=o.useCallback(()=>{v?m(!1):C(!1)},[v]),U=r=>{r.propertyName==="transform"&&!p&&(m(!1),x())},w=r=>{$(r.target.getBoundingClientRect()),X({x:r.target.offsetLeft,y:r.target.offsetTop}),m(!1),k(!0)},u=o.useCallback(r=>{r.key==="Escape"&&d()},[d]);o.useEffect(()=>(document.addEventListener("keydown",u,!1),()=>{document.removeEventListener("keydown",u,!1)}),[u]);const K={buttonProps:{"aria-expanded":c,tabIndex:0,onClick:w,onDoubleClick:w},closeButtonProps:{onClick:d},targetRect:W,targetOffset:H,isOpen:c,tacos:"tacos"};return o.useEffect(()=>{y&&(k(!1),m(!0))},[y]),o.useEffect(()=>{C(c)},[c]),o.useEffect(()=>()=>m(!1),[]),e.jsx(te.Provider,{value:K,children:e.jsxs("div",{...M,className:j(L,`${L}__${b}`,t),ref:A,...Z(g),children:[e.jsx(re,{title:q,onClose:x}),c&&(a==null?void 0:a.current)&&ee.createPortal(e.jsx(oe,{ref:V,fixedIsVisible:p,kind:ne.FIXED,onClose:d,onTransitionEnd:U,theme:b,className:j(p&&`${T}--is-visible`,T),children:n}),a==null?void 0:a.current)]})})});i=N.checkComponentEnabled(i,g);i.displayName=g;i.propTypes={children:l.node.isRequired,className:l.string,onClose:l.func,portalTarget:l.string,tagline:l.string.isRequired,theme:l.oneOf(["light","dark"])};i.__docgenInfo={description:`Fixed coachmarks are used to call out specific functionality or concepts
within the UI that may not be intuitive but are important for the
user to gain understanding of the product's main value and discover new use cases.
This variant allows the a coachmark overlay to be displayed by interacting with the tagline.`,methods:[],displayName:"CoachmarkFixed",props:{onClose:{defaultValue:{value:"() => {}",computed:!1},description:"Function to call when the Coachmark closes.",type:{name:"func"},required:!1},tagline:{defaultValue:{value:"''",computed:!1},description:"The tagline title which will be fixed to the bottom right of the window and will serve as the display trigger.",type:{name:"string"},required:!1},theme:{defaultValue:{value:"'light'",computed:!1},description:"Determines the theme of the component.",type:{name:"enum",value:[{value:"'light'",computed:!1},{value:"'dark'",computed:!1}]},required:!1},children:{description:"CoachmarkFixed should use a single CoachmarkOverlayElements component as a child.",type:{name:"node"},required:!0},className:{description:"Optional class name for this component.",type:{name:"string"},required:!1},portalTarget:{description:`By default, the Coachmark will be appended to the end of \`document.body\`.
The Coachmark will remain persistent as the user navigates the app until
the user closes the Coachmark.

Alternatively, the app developer can tightly couple the Coachmark to a DOM
element or other component by specifying a CSS selector. The Coachmark will
remain visible as long as that element remains visible or mounted. When the
element is hidden or component is unmounted, the Coachmark will disappear.`,type:{name:"string"},required:!1}}};function F(n){const t={a:"a",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...P(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"coachmarkfixed",children:"CoachmarkFixed"}),`
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
`,e.jsx(Y,{children:e.jsx("div",{className:"CoachmarkBaseExampleUsage",children:e.jsx(G,{of:s})})}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(J,{})]})}function le(n={}){const{wrapper:t}={...P(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(F,{...n})}):F(n)}const ce=".docs-story div{transform:none}",Ke={title:"IBM Products/Onboarding/Coachmark/CoachmarkFixed",component:i,tags:["autodocs"],argTypes:{children:{control:{type:null}},portalTarget:{control:{type:null}},theme:{control:{type:null}}},parameters:{styles:ce,docs:{page:le}}},me=n=>{const t=z();return e.jsx(i,{...n,theme:t,children:e.jsxs(ae,{closeButtonLabel:"Done",nextButtonText:"Next",previousButtonLabel:"Back",children:[e.jsx(O,{title:"Hello World",description:"Link opens in new tab.",button:e.jsx(E,{href:"https://www.ibm.com",target:"_blank",children:"Learn more"})}),e.jsx(O,{title:"Hello World 2",description:"Link opens on this page.",button:e.jsx(E,{href:"https://www.ibm.com",children:"Learn more"})})]})})},s=me.bind({});s.args={tagline:"Why are there two types of severity scores?",onClose:()=>console.log("CLOSE"),portalTarget:'#root:not([hidden="true"])',className:"myCoachmarkFixed"};var R,S,B,D,I;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  const theme = getSelectedCarbonTheme();
  return <CoachmarkFixed {...args} theme={theme}>
      <CoachmarkOverlayElements closeButtonLabel="Done" nextButtonText="Next" previousButtonLabel="Back">
        <CoachmarkOverlayElement title="Hello World" description="Link opens in new tab." button={<CarbonLink href="https://www.ibm.com" target="_blank">
              Learn more
            </CarbonLink>} />
        <CoachmarkOverlayElement title="Hello World 2" description="Link opens on this page." button={<CarbonLink href="https://www.ibm.com">Learn more</CarbonLink>} />
      </CoachmarkOverlayElements>
    </CoachmarkFixed>;
}`,...(B=(S=s.parameters)==null?void 0:S.docs)==null?void 0:B.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(I=(D=s.parameters)==null?void 0:D.docs)==null?void 0:I.description}}};const ze=["coachmarkFixed"];export{ze as __namedExportsOrder,s as coachmarkFixed,Ke as default};
