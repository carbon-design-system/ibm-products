import{e as o,r as n}from"./index-CPiZ6Cnx.js";import{c as j,P as c}from"./index-BPCFiO9b.js";import{L as T}from"./Link-BmRyJrPM.js";import{g as Y}from"./story-helper-C7pmvIin.js";import{r as G,j as e}from"./index-B83en7q5.js";import{useMDXComponents as P}from"./index-CUO_02de.js";import"./index-Bf_H9q8r.js";import{c as J,d as Q,b as Z,C as ee,a as O}from"./CoachmarkOverlayElements-1w_eOm7u.js";import{C as te}from"./CoachmarkTagline-B8Ke2Sek.js";import{g as ne}from"./devtools-Ca6Wku6c.js";import{p as _}from"./settings-41bnSjHp.js";import{u as oe}from"./usePrefersReducedMotion-B4CsCXC2.js";import{u as ae}from"./useIsomorphicEffect-CqAX3nH-.js";import{a as re,f as se,C as ie}from"./index-DblCLej2.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-ZKO_qc5e.js";import"./preview-DUa2hDsf.js";import"./iframe-DG_HeTRT.js";import"./DocsRenderer-CFRXHY34-DtZUrKsm.js";import"./client-BCQEsWlk.js";import"./uuidv4-BN2rGLQG.js";import"./bucket-5-B7bOdntf.js";import"./clamp-CsXXRQhr.js";import"./Carousel-BCNWa9EM.js";import"./bucket-9-qDf-0NK_.js";import"./events-OVwOsPzJ.js";import"./index-H2wBg9na.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";const q=`${_.prefix}--coachmark`,L=`${q}-fixed`,F=`${q}-overlay`,x="CoachmarkFixed",g={onClose:()=>{},theme:"light",tagline:""};let l=o.forwardRef(({children:a,className:t,onClose:y=g.onClose,portalTarget:p,tagline:A=g.tagline,theme:b=g.theme,...M},V)=>{const W=n.useRef(null),r=n.useRef(null),[m,d]=n.useState(!1),[k,C]=n.useState(!1),[$,H]=n.useState(),[X,U]=n.useState({x:0,y:0}),[u,v]=n.useState(!1),w=oe();ae(()=>{r.current=p?(document==null?void 0:document.querySelector(p))??(document==null?void 0:document.querySelector("body")):document==null?void 0:document.querySelector("body")},[p]);const h=n.useCallback(()=>{w?d(!1):v(!1)},[w]),K=s=>{s.propertyName==="transform"&&!u&&(d(!1),y())},E=s=>{H(s.target.getBoundingClientRect()),U({x:s.target.offsetLeft,y:s.target.offsetTop}),d(!1),C(!0)},f=n.useCallback(s=>{s.key==="Escape"&&h()},[h]);n.useEffect(()=>(document.addEventListener("keydown",f,!1),()=>{document.removeEventListener("keydown",f,!1)}),[f]);const z={buttonProps:{"aria-expanded":m,tabIndex:0,onClick:E,onDoubleClick:E},closeButtonProps:{onClick:h},targetRect:$,targetOffset:X,isOpen:m,tacos:"tacos"};return n.useEffect(()=>{k&&(C(!1),d(!0))},[k]),n.useEffect(()=>{v(m)},[m]),n.useEffect(()=>()=>d(!1),[]),o.createElement(J.Provider,{value:z},o.createElement("div",{...M,className:j(L,`${L}__${b}`,t),ref:V,...ne(x)},o.createElement(te,{title:A,onClose:y}),m&&(r==null?void 0:r.current)&&G.createPortal(o.createElement(Q,{ref:W,fixedIsVisible:u,kind:Z.FIXED,onClose:h,onTransitionEnd:K,theme:b,className:j(u&&`${F}--is-visible`,F)},a),r==null?void 0:r.current)))});l=_.checkComponentEnabled(l,x);l.displayName=x;l.propTypes={children:c.node.isRequired,className:c.string,onClose:c.func,portalTarget:c.string,tagline:c.string.isRequired,theme:c.oneOf(["light","dark"])};l.__docgenInfo={description:`Fixed coachmarks are used to call out specific functionality or concepts
within the UI that may not be intuitive but are important for the
user to gain understanding of the product's main value and discover new use cases.
This variant allows the a coachmark overlay to be displayed by interacting with the tagline.`,methods:[],displayName:"CoachmarkFixed",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"CoachmarkFixed should use a single CoachmarkOverlayElements component as a child.",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"Optional class name for this component.",type:{name:"string"}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function to call when the Coachmark closes.",defaultValue:{value:"() => {}",computed:!1},type:{name:"func"}},portalTarget:{required:!1,tsType:{name:"string"},description:`By default, the Coachmark will be appended to the end of \`document.body\`.
The Coachmark will remain persistent as the user navigates the app until
the user closes the Coachmark.

Alternatively, the app developer can tightly couple the Coachmark to a DOM
element or other component by specifying a CSS selector. The Coachmark will
remain visible as long as that element remains visible or mounted. When the
element is hidden or component is unmounted, the Coachmark will disappear.`,type:{name:"string"}},tagline:{required:!1,tsType:{name:"string"},description:"The tagline title which will be fixed to the bottom right of the window and will serve as the display trigger.",defaultValue:{value:"''",computed:!1},type:{name:"string"}},theme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"Determines the theme of the component.",defaultValue:{value:"'light'",computed:!1},type:{name:"enum",value:[{value:"'light'",computed:!1},{value:"'dark'",computed:!1}]}}}};function S(a){const t={a:"a",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...P(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"coachmarkfixed",children:"CoachmarkFixed"}),`
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
`,e.jsx(re,{children:e.jsx("div",{className:"CoachmarkBaseExampleUsage",children:e.jsx(se,{of:i})})}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(ie,{})]})}function le(a={}){const{wrapper:t}={...P(),...a.components};return t?e.jsx(t,{...a,children:e.jsx(S,{...a})}):S(a)}const ce=".docs-story div{transform:none}",Me={title:"Experimental/Onboarding/Coachmark/CoachmarkFixed",component:l,tags:["autodocs"],argTypes:{children:{control:{type:null}},portalTarget:{control:{type:null}},theme:{control:{type:null}}},parameters:{styles:ce,docs:{page:le}}},me=a=>{const t=Y();return o.createElement(l,{...a,theme:t},o.createElement(ee,{closeButtonLabel:"Done",nextButtonText:"Next",previousButtonLabel:"Back"},o.createElement(O,{title:"Hello World",description:"Link opens in new tab.",button:o.createElement(T,{href:"https://www.ibm.com",target:"_blank"},"Learn more")}),o.createElement(O,{title:"Hello World 2",description:"Link opens on this page.",button:o.createElement(T,{href:"https://www.ibm.com"},"Learn more")})))},i=me.bind({});i.args={tagline:"Why are there two types of severity scores?",onClose:()=>console.log("CLOSE"),portalTarget:'#root:not([hidden="true"])',className:"myCoachmarkFixed"};var R,B,D,N,I;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
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
NB no need for a 'Playground' because all stories have all controls anyway.`,...(I=(N=i.parameters)==null?void 0:N.docs)==null?void 0:I.description}}};const Ve=["coachmarkFixed"];export{Ve as __namedExportsOrder,i as coachmarkFixed,Me as default};
