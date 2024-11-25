import{R as n,r as o}from"./index-BwDkhjyp.js";import{c as j}from"./index-CQ0F2wkl.js";import{L as O}from"./Link-5iVXV3Eb.js";import{g as Y}from"./story-helper-6_fmjwZ-.js";import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{useMDXComponents as _}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-BgzNaMoH.js";import{e as G,i as J,C as Q}from"./index-DXUYcqZv.js";import{a as Z,b as ee,C as te,c as oe,d as L}from"./CoachmarkOverlayElements-Bqrc-vO0.js";import{C as ne}from"./CoachmarkTagline-BwlIZAyH.js";import{P as c}from"./index-Dk74W0Oi.js";import{r as ae}from"./index-BONylQH5.js";import{g as re}from"./devtools-Bz70ioU6.js";import{p as P}from"./settings-xiNX1vM3.js";import{u as se}from"./use-reduced-motion-BisnjenD.js";import{u as ie}from"./useIsomorphicEffect-D7JMtAof.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib.es6-B4_xh3D5.js";import"./iframe-DanyPKBP.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./uuidv4-BQrI85uz.js";import"./bucket-5-BnP2u7x5.js";import"./lodash-C6Eq4oiK.js";import"./SteppedAnimatedMedia-BzeU5RwP.js";import"./lottie-D0UQuq7-.js";import"./clamp-Bg2yowlN.js";import"./toNumber-DVQITUtX.js";import"./Carousel-D8bIDKXH.js";import"./bucket-9-BGCJpvdq.js";import"./index-CJvxHwuA.js";import"./events-OVwOsPzJ.js";import"./index-ABeo-Xma.js";const q=`${P.prefix}--coachmark`,T=`${q}-fixed`,F=`${q}-overlay`,x="CoachmarkFixed",g={onClose:()=>{},theme:"light",tagline:""};let l=n.forwardRef(({children:a,className:t,onClose:b=g.onClose,portalTarget:p,tagline:A=g.tagline,theme:y=g.theme,...M},V)=>{const W=o.useRef(null),r=o.useRef(null),[m,d]=o.useState(!1),[k,C]=o.useState(!1),[$,H]=o.useState(),[X,U]=o.useState({x:0,y:0}),[u,v]=o.useState(!1),w=se();ie(()=>{r.current=p?(document==null?void 0:document.querySelector(p))??(document==null?void 0:document.querySelector("body")):document==null?void 0:document.querySelector("body")},[p]);const h=o.useCallback(()=>{w?d(!1):v(!1)},[w]),K=s=>{s.propertyName==="transform"&&!u&&(d(!1),b())},E=s=>{H(s.target.getBoundingClientRect()),U({x:s.target.offsetLeft,y:s.target.offsetTop}),d(!1),C(!0)},f=o.useCallback(s=>{s.key==="Escape"&&h()},[h]);o.useEffect(()=>(document.addEventListener("keydown",f,!1),()=>{document.removeEventListener("keydown",f,!1)}),[f]);const z={buttonProps:{"aria-expanded":m,tabIndex:0,onClick:E,onDoubleClick:E},closeButtonProps:{onClick:h},targetRect:$,targetOffset:X,isOpen:m,tacos:"tacos"};return o.useEffect(()=>{k&&(C(!1),d(!0))},[k]),o.useEffect(()=>{v(m)},[m]),o.useEffect(()=>()=>d(!1),[]),n.createElement(Z.Provider,{value:z},n.createElement("div",{...M,className:j(T,`${T}__${y}`,t),ref:V,...re(x)},n.createElement(ne,{title:A,onClose:b}),m&&(r==null?void 0:r.current)&&ae.createPortal(n.createElement(ee,{ref:W,fixedIsVisible:u,kind:te.FIXED,onClose:h,onTransitionEnd:K,theme:y,className:j(u&&`${F}--is-visible`,F)},a),r==null?void 0:r.current)))});l=P.checkComponentEnabled(l,x);l.displayName=x;l.propTypes={children:c.node.isRequired,className:c.string,onClose:c.func,portalTarget:c.string,tagline:c.string.isRequired,theme:c.oneOf(["light","dark"])};l.__docgenInfo={description:`Fixed coachmarks are used to call out specific functionality or concepts
within the UI that may not be intuitive but are important for the
user to gain understanding of the product's main value and discover new use cases.
This variant allows the a coachmark overlay to be displayed by interacting with the tagline.`,methods:[],displayName:"CoachmarkFixed",props:{onClose:{defaultValue:{value:"() => {}",computed:!1},description:"Function to call when the Coachmark closes.",type:{name:"func"},required:!1},tagline:{defaultValue:{value:"''",computed:!1},description:"The tagline title which will be fixed to the bottom right of the window and will serve as the display trigger.",type:{name:"string"},required:!1},theme:{defaultValue:{value:"'light'",computed:!1},description:"Determines the theme of the component.",type:{name:"enum",value:[{value:"'light'",computed:!1},{value:"'dark'",computed:!1}]},required:!1},children:{description:"CoachmarkFixed should use a single CoachmarkOverlayElements component as a child.",type:{name:"node"},required:!0},className:{description:"Optional class name for this component.",type:{name:"string"},required:!1},portalTarget:{description:`By default, the Coachmark will be appended to the end of \`document.body\`.
The Coachmark will remain persistent as the user navigates the app until
the user closes the Coachmark.

Alternatively, the app developer can tightly couple the Coachmark to a DOM
element or other component by specifying a CSS selector. The Coachmark will
remain visible as long as that element remains visible or mounted. When the
element is hidden or component is unmounted, the Coachmark will disappear.`,type:{name:"string"},required:!1}}};function R(a){const t={a:"a",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",..._(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"coachmarkfixed",children:"CoachmarkFixed"}),`
`,e.jsx(t.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#about-onboarding",children:"About Onboarding"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#note-on-theming",children:"Note on theming"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/coachmark/usage#fixed",rel:"nofollow",children:"CoachmarkFixed"}),`
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
`,e.jsx(G,{children:e.jsx("div",{className:"CoachmarkBaseExampleUsage",children:e.jsx(J,{of:i})})}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(Q,{})]})}function le(a={}){const{wrapper:t}={..._(),...a.components};return t?e.jsx(t,{...a,children:e.jsx(R,{...a})}):R(a)}const ce=".docs-story div{transform:none}",ze={title:"Experimental/Onboarding/Coachmark/CoachmarkFixed",component:l,tags:["autodocs"],argTypes:{children:{control:{type:null}},portalTarget:{control:{type:null}},theme:{control:{type:null}}},parameters:{styles:ce,docs:{page:le}}},me=a=>{const t=Y();return n.createElement(l,{...a,theme:t},n.createElement(oe,{closeButtonLabel:"Done",nextButtonText:"Next",previousButtonLabel:"Back"},n.createElement(L,{title:"Hello World",description:"Link opens in new tab.",button:n.createElement(O,{href:"https://www.ibm.com",target:"_blank"},"Learn more")}),n.createElement(L,{title:"Hello World 2",description:"Link opens on this page.",button:n.createElement(O,{href:"https://www.ibm.com"},"Learn more")})))},i=me.bind({});i.args={tagline:"Why are there two types of severity scores?",onClose:()=>console.log("CLOSE"),portalTarget:'#root:not([hidden="true"])',className:"myCoachmarkFixed"};var S,B,D,I,N;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  const theme = getSelectedCarbonTheme();
  return <CoachmarkFixed {...args} theme={theme}>
      <CoachmarkOverlayElements closeButtonLabel="Done" nextButtonText="Next" previousButtonLabel="Back">
        <CoachmarkOverlayElement title="Hello World" description="Link opens in new tab." button={<CarbonLink href="https://www.ibm.com" target="_blank">
              Learn more
            </CarbonLink>} />
        <CoachmarkOverlayElement title="Hello World 2" description="Link opens on this page." button={<CarbonLink href="https://www.ibm.com">Learn more</CarbonLink>} />
      </CoachmarkOverlayElements>
    </CoachmarkFixed>;
}`,...(D=(B=i.parameters)==null?void 0:B.docs)==null?void 0:D.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(N=(I=i.parameters)==null?void 0:I.docs)==null?void 0:N.description}}};const Ye=["coachmarkFixed"];export{Ye as __namedExportsOrder,i as coachmarkFixed,ze as default};
