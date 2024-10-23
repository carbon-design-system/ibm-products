import{p as u,a as ce,j as e,B as F}from"./settings-DEdZ0TrD.js";import{c as N}from"./floating-ui.core.mjs-LzsX8FoD.js";import{L as W}from"./Link-Dcx-j9tl.js";import{g as le}from"./story-helper-CtkteSRf.js";import{useMDXComponents as G}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-DKjBqJZd.js";import{e as de,i as he,C as me}from"./index-DeGQKZDn.js";import{r as a,R as ue}from"./index-BwDkhjyp.js";import{r as J}from"./index-BONylQH5.js";import{P as n}from"./index-Dk74W0Oi.js";import{g as Q}from"./devtools-BMJcATO0.js";import{e as pe,b as fe,C as ke,a as be,c as A,d as p}from"./CoachmarkOverlayElements-aabMPK1J.js";import{u as Z}from"./useIsomorphicEffect-D7JMtAof.js";import{S as ge}from"./SteppedAnimatedMedia-a8KJ2nZi.js";import{I as ye}from"./bucket-8-C1BVEtfd.js";import{C as xe}from"./CoachmarkTagline-BlAx27bF.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./events-BwXSUnsA.js";import"./index-CtP8jiW9.js";import"./tslib.es6-B4_xh3D5.js";import"./iframe-HHF2JHdl.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./uuidv4-BQrI85uz.js";import"./bucket-5-CnrlLpeo.js";import"./lodash-C6Eq4oiK.js";import"./Carousel-ivRYnOkT.js";import"./lottie-D0UQuq7-.js";import"./clamp-Bg2yowlN.js";import"./toNumber-DVQITUtX.js";const H=`${u.prefix}--coachmark-stacked-home`,g=`${u.prefix}--coachmark-overlay`,_="CoachmarkStackHome";let j=a.forwardRef(({className:s,description:t,isOpen:C,media:f,navLinkLabels:q,onClickNavItem:B,onClose:k,portalTarget:T,closeButtonLabel:L,title:v,...R},I)=>{const S=a.useRef(null),[d,r]=a.useState(0);a.useEffect(()=>{setTimeout(()=>{C&&S.current&&S.current.focus()},100)},[C]);const i=a.useRef(null);if(Z(()=>{i.current=T?(document==null?void 0:document.querySelector(T))??(document==null?void 0:document.querySelector("body")):document==null?void 0:document.querySelector("body")},[T]),!q)return ce.warn(`${_} is an Onboarding internal component and is not intended for general use.`);function h(l,o,O=null){return e.jsx("li",{children:e.jsx(F,{kind:"ghost",size:"sm",onClick:()=>{r(l),B(l+1)},ref:O,children:o})},l)}return i!=null&&i.current?J.createPortal(e.jsxs("div",{...R,className:N(H,s),ref:I,...Q(_),children:[e.jsx(pe,{onClose:()=>{r(0),k()}}),e.jsx("div",{className:`${g}__body`,children:e.jsxs("div",{className:`${g}-element`,children:[!f&&e.jsx(ye,{size:20,className:`${H}__icon-idea`}),f&&(f.render?f.render():e.jsx(ge,{className:`${g}__element-stepped-media`,filePaths:f.filePaths,playStep:0})),e.jsxs("div",{className:`${g}-element__content`,children:[v&&e.jsx("h2",{className:`${g}-element__title`,children:v}),t&&e.jsx("p",{className:`${g}-element__body`,children:t})]}),e.jsx("ul",{className:`${H}__nav-links`,children:q.map((l,o)=>o===d?h(o,l,S):h(o,l))}),L&&e.jsx("div",{className:`${g}__footer`,children:e.jsx(F,{size:"sm",onClick:()=>{r(0),k()},children:L})})]})})]}),i==null?void 0:i.current):null});j=u.checkComponentEnabled(j,_);j.displayName=_;j.propTypes={className:n.string,closeButtonLabel:n.string,description:n.node.isRequired,isOpen:n.bool.isRequired,media:n.oneOfType([n.shape({render:n.func}),n.shape({filePaths:n.arrayOf(n.string)})]),navLinkLabels:n.arrayOf(n.string.isRequired).isRequired,onClickNavItem:n.func.isRequired,onClose:n.func.isRequired,portalTarget:n.string,title:n.string.isRequired};j.__docgenInfo={description:`DO NOT USE. This component is for the exclusive use
of other Onboarding components.`,methods:[],displayName:"CoachmarkStackHome",props:{className:{description:"Optional class name for this component.",type:{name:"string"},required:!1},closeButtonLabel:{description:"The label for the button that will close the stack",type:{name:"string"},required:!1},description:{description:"The description of the Coachmark.",type:{name:"node"},required:!0},isOpen:{description:"If the stack home is open.",type:{name:"bool"},required:!0},media:{description:`The object describing an image in one of two shapes.

If a single media element is required, use \`{render}\`.

If a stepped animation is required, use \`{filePaths}\`.

@see {@link MEDIA_PROP_TYPE}.`,type:{name:"union",value:[{name:"shape",value:{render:{name:"func",required:!1}}},{name:"shape",value:{filePaths:{name:"arrayOf",value:{name:"string"},required:!1}}}]},required:!1},navLinkLabels:{description:"The labels used to link to the stackable Coachmarks.",type:{name:"arrayOf",value:{name:"string"}},required:!0},onClickNavItem:{description:"For internal use only by CoachmarkStack and CoachmarkStackHome.",type:{name:"func"},required:!0},onClose:{description:"Function to call when the stack closes.",type:{name:"func"},required:!0},portalTarget:{description:`By default, the CoachmarkStackHome will be appended to the end of \`document.body\`.
The CoachmarkStackHome will remain persistent as the user navigates the app until
the user closes the CoachmarkStackHome.

Alternatively, the app developer can tightly couple the CoachmarkStackHome to a DOM
element or other component by specifying a CSS selector. The CoachmarkStackHome will
remain visible as long as that element remains visible or mounted. When the
element is hidden or component is unmounted, the CoachmarkStackHome will disappear.`,type:{name:"string"},required:!1},title:{description:"The title of the Coachmark.",type:{name:"string"},required:!0}}};const Ce=`${u.prefix}--coachmark-stack`,M="CoachmarkStack",m=`${u.prefix}--coachmark-stack-element`,D={onClose:()=>{},theme:"light",portalTarget:"body"};let x=ue.forwardRef(({children:s,className:t,onClose:C=D.onClose,description:f,media:q,navLinkLabels:B,portalTarget:k=D.portalTarget,closeButtonLabel:T,tagline:L,theme:v=D.theme,title:R,...I},S)=>{const d=a.useRef(null);Z(()=>{d.current=k?(document==null?void 0:document.querySelector(k))??(document==null?void 0:document.querySelector("body")):document==null?void 0:document.querySelector("body")},[k]);const r=a.useRef(null),i=a.useRef([]),[h,l]=a.useState(!1),[o,O]=a.useState(0),[$,ee]=a.useState(),te=a.Children.toArray(s),E=a.useRef(),ne=240,ae=c=>{O(c)},w=a.useCallback(c=>{if(c){O(-1);const b=setTimeout(()=>{l(!1),C()},ne);return()=>clearTimeout(b)}else O(0)},[C]),P=a.useCallback(c=>{c.key==="Escape"&&w(o===0)},[w,o]);a.useEffect(()=>(document.addEventListener("keydown",P,!1),()=>{document.removeEventListener("keydown",P,!1)}),[P]);const re={buttonProps:{tabIndex:0,"aria-expanded":h,onClick:()=>{l(!0)},onDoubleClick:()=>{l(!0)}},closeButtonProps:{onClick:()=>w(!1)},isOpen:h};a.useEffect(()=>(E.current=!0,()=>{E.current=!1}),[]),a.useEffect(()=>{setTimeout(()=>{r.current&&ee(r.current.clientHeight+16)},0)},[r]),a.useEffect(()=>{const c=o-1;if(!$)return;if(r.current&&(r.current.style.height=`${$}px`),!h||c<0){r.current&&r.current.focus();return}const b=i.current[c].clientHeight;r.current&&(r.current.style.height=`${b}px`,i.current[c].focus())},[o,h,$]);const oe=a.Children.map(te,(c,b)=>{const se=E.current?`${m}--is-mounted`:"";return e.jsx(fe,{ref:ie=>i.current[b]=ie,kind:ke.STACKED,onClose:()=>w(!1),theme:v,fixedIsVisible:!1,className:N(m,se,b===o-1&&`${m}--is-visible`,E.current&&`${m}--is-mounted`),children:c},b)});return e.jsx(be.Provider,{value:re,children:e.jsxs("div",{...I,className:N(Ce,`${u.prefix}--coachmark-overlay--stack`,t),ref:S,...Q(M),children:[e.jsx(xe,{title:L,onClose:C}),e.jsx(j,{ref:r,className:N(`${u.prefix}--coachmark-overlay`,`${u.prefix}--coachmark-overlay__${v}`,m,o>0&&`${m}--is-stacked`,o>0&&`${m}--is-stacked__${v}`,h&&`${m}--is-visible`,E.current&&`${m}--is-mounted`),isOpen:h&&o<1,description:f,media:q,navLinkLabels:B,onClickNavItem:ae,onClose:()=>{w(!0)},portalTarget:k,closeButtonLabel:T,title:R}),d!=null&&d.current?J.createPortal(oe,d==null?void 0:d.current):null]})})});x=u.checkComponentEnabled(x,M);x.displayName=M;x.propTypes={children:n.node.isRequired,className:n.string,closeButtonLabel:n.string,description:n.node.isRequired,media:n.oneOfType([n.shape({render:n.func}),n.shape({filePaths:n.arrayOf(n.string)})]),navLinkLabels:n.arrayOf(n.string.isRequired).isRequired,onClose:n.func,portalTarget:n.string,tagline:n.string.isRequired,theme:n.oneOf(["light","dark"]),title:n.string.isRequired};x.__docgenInfo={description:`Stacked coachmarks are used to call out specific functionality or concepts
within the UI that may not be intuitive but are important for the
user to gain understanding of the product's main value and discover new use cases.
This variant allows the stacking of multiple coachmark overlays to be displayed by interacting with the tagline.`,methods:[],displayName:"CoachmarkStack",props:{onClose:{defaultValue:{value:"() => {}",computed:!1},description:"Function to call when the CoachmarkStack closes.",type:{name:"func"},required:!1},portalTarget:{defaultValue:{value:"'body'",computed:!1},description:"Where in the DOM to render the stack.\nThe default is `document.body`.",type:{name:"string"},required:!1},theme:{defaultValue:{value:"'light'",computed:!1},description:"Determines the theme of the component.",type:{name:"enum",value:[{value:"'light'",computed:!1},{value:"'dark'",computed:!1}]},required:!1},children:{description:"CoachmarkStack should use a single CoachmarkOverlayElements component as a child.",type:{name:"node"},required:!0},className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1},closeButtonLabel:{description:"The label for the button that will close the Stack",type:{name:"string"},required:!1},description:{description:"The description of the Coachmark.",type:{name:"node"},required:!0},media:{description:`The object describing an image in one of two shapes.

If a single media element is required, use \`{render}\`.

If a stepped animation is required, use \`{filePaths}\`.

@see {@link MEDIA_PROP_TYPE}.`,type:{name:"union",value:[{name:"shape",value:{render:{name:"func",required:!1}}},{name:"shape",value:{filePaths:{name:"arrayOf",value:{name:"string"},required:!1}}}]},required:!1},navLinkLabels:{description:"The labels used to link to the stackable Coachmarks.",type:{name:"arrayOf",value:{name:"string"}},required:!0},tagline:{description:"The tagline title which will be fixed to the bottom right of the window and will serve as the display trigger.",type:{name:"string"},required:!0},title:{description:"The title of the Coachmark.",type:{name:"string"},required:!0}}};function V(s){const t={a:"a",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...G(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"coachmarkstack",children:"CoachmarkStack"}),`
`,e.jsx(t.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#about-onboarding",children:"About Onboarding"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#note-on-theming",children:"Note on theming"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/coachmark/usage#stacked",rel:"nofollow",children:"CoachmarkStacked"}),`
appears fixed at the bottom right corner of the browser window when the page
loads. It starts in a minimized state, to cover as little of the UI as possible;
when shown in tests as expanded by default, users immediately closed it without
reading, to get it out of the way. CoachmarkStacked can include ghost buttons to
trigger another layer to slide up to stack on top of it, much like the
`,e.jsx(t.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/tearsheet/usage/#navigation",rel:"nofollow",children:"stacked Tearsheet"}),`.
When dismissed, the stacked layer exits by sliding back down, revealing the main
layer. When the main layer is dismissed, it slides down off the page. Only one
layer can be stacked on the main layer.`]}),`
`,e.jsx(t.h2,{id:"about-onboarding",children:"About Onboarding"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.a,{href:"https://pages.github.ibm.com/security/security-design/department/end-to-end-experiences/onboarding/overview",rel:"nofollow",children:"Onboarding"}),`
is a continuous learning methodology and framework that aims to orient, onboard,
explain, educate, and cultivate novice users into high-functioning power users.`]}),`
`,e.jsx(t.h2,{id:"note-on-theming",children:"Note on theming"}),`
`,e.jsx(t.p,{children:`The CoachmarkStacked uses the theme prop (e.g., theme='dark') to set the
appropriate background and font colors for the child Coachmark elements. Specify
a value ('light' or 'dark') to display properly within your usage.`}),`
`,e.jsx(t.h2,{id:"example-usage",children:"Example usage"}),`
`,e.jsx(t.p,{children:e.jsx(t.em,{children:"(See bottom right)"})}),`
`,e.jsx(de,{children:e.jsx("div",{className:"CoachmarkBaseExampleUsage",children:e.jsx(he,{of:y})})}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(me,{})]})}function ve(s={}){const{wrapper:t}={...G(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(V,{...s})}):V(s)}const we=".docs-story div{transform:none}",st={title:"Experimental/Onboarding/Coachmark/CoachmarkStack",component:x,tags:["autodocs"],argTypes:{children:{control:{type:null}},media:{control:{type:null}},portalTarget:{control:{type:null}},theme:{control:{type:null}}},parameters:{styles:we,docs:{page:ve}}},je=s=>{const t=le();return e.jsxs(x,{...s,theme:t,children:[e.jsx(A,{closeButtonLabel:"Got it",children:e.jsx(p,{title:"Short Coachmark",description:"As small as it gets."})}),e.jsxs(A,{closeButtonLabel:"Close",nextButtonText:"Next",previousButtonLabel:"Back",children:[e.jsx(p,{title:"Mid-height Coachmark",description:e.jsxs(e.Fragment,{children:["This should be about the same height as the base stack item.",e.jsx("br",{}),e.jsx("br",{}),"This is known as the enrichment phase. Enrichment supports you by emulating how an analyst would evaluate a finding—for example, by adding context, such as whether a certain piece of data is known to be malicious, or is linked..."]}),button:e.jsx(W,{href:"https://www.ibm.com",children:"Learn more"})}),e.jsx(p,{title:"Hello World",description:"Link opens in new tab.",button:e.jsx(W,{href:"https://www.ibm.com",target:"_blank",children:"Learn more"})})]}),e.jsxs(A,{closeButtonLabel:"Done",nextButtonText:"Next",previousButtonLabel:"Back",children:[e.jsx(p,{title:"Tall Coachmark",description:"These alerts contain data gathered from your connected security systems."}),e.jsx(p,{title:"Alerts contain evidence, known as artifacts",description:"These help to determine whether the alert is good or bad. And as alerts are added to a case, they become findings."}),e.jsx(p,{title:"Findings are enriched with more information and context",description:e.jsxs(e.Fragment,{children:["This is known as the enrichment phase. Enrichment supports you by emulating how an analyst would evaluate a finding—for example, by adding context, such as whether a certain piece of data is known to be malicious, or is linked to a known threat.",e.jsx("br",{}),e.jsx("br",{}),"Lets",e.jsx("br",{}),e.jsx("br",{}),"make",e.jsx("br",{}),e.jsx("br",{}),"this",e.jsx("br",{}),e.jsx("br",{}),"one",e.jsx("br",{}),e.jsx("br",{}),"really",e.jsx("br",{}),e.jsx("br",{}),"tall."]})}),e.jsx(p,{title:"Next, the correlation process takes place",description:"Based on the results of the enrichment process, findings that are potentially related are grouped together, and then evaluated."}),e.jsx(p,{title:"Between enrichment and correlation, the severity of a case is determined",description:"And once you know the severity, you can easily choose which case to pick up next."})]})]})},y=je.bind({});y.args={className:"myCoachmarkStack",closeButtonLabel:"Close",description:"This is an example of a description",title:"Example title",navLinkLabels:["Example 1","Example 2","Example 3"],onClose:()=>console.log("CLOSE"),tagline:"Why are there two types of severity scores?",portalTarget:'#root:not([hidden="true"]) .preview-position-fix'};var z,U,K,X,Y;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  const theme = getSelectedCarbonTheme();
  return <CoachmarkStack {...args} theme={theme}>
      <CoachmarkOverlayElements closeButtonLabel={'Got it'}>
        <CoachmarkOverlayElement title="Short Coachmark" description="As small as it gets." />
      </CoachmarkOverlayElements>

      <CoachmarkOverlayElements closeButtonLabel="Close" nextButtonText="Next" previousButtonLabel="Back">
        <CoachmarkOverlayElement title="Mid-height Coachmark" description={<>
              This should be about the same height as the base stack item.
              <br />
              <br />
              This is known as the enrichment phase. Enrichment supports you by
              emulating how an analyst would evaluate a finding—for example, by
              adding context, such as whether a certain piece of data is known
              to be malicious, or is linked...
            </>} button={<CarbonLink href="https://www.ibm.com">Learn more</CarbonLink>} />
        <CoachmarkOverlayElement title="Hello World" description="Link opens in new tab." button={<CarbonLink href="https://www.ibm.com" target="_blank">
              Learn more
            </CarbonLink>} />
      </CoachmarkOverlayElements>

      <CoachmarkOverlayElements closeButtonLabel="Done" nextButtonText="Next" previousButtonLabel="Back">
        <CoachmarkOverlayElement title="Tall Coachmark" description="These alerts contain data gathered from your connected security systems." />
        <CoachmarkOverlayElement title="Alerts contain evidence, known as artifacts" description="These help to determine whether the alert is good or bad. And as alerts are added to a case, they become findings." />
        <CoachmarkOverlayElement title="Findings are enriched with more information and context" description={<>
              This is known as the enrichment phase. Enrichment supports you by
              emulating how an analyst would evaluate a finding—for example, by
              adding context, such as whether a certain piece of data is known
              to be malicious, or is linked to a known threat.
              <br />
              <br />
              Lets
              <br />
              <br />
              make
              <br />
              <br />
              this
              <br />
              <br />
              one
              <br />
              <br />
              really
              <br />
              <br />
              tall.
            </>} />
        <CoachmarkOverlayElement title="Next, the correlation process takes place" description="Based on the results of the enrichment process, findings that are potentially related are grouped together, and then evaluated." />
        <CoachmarkOverlayElement title="Between enrichment and correlation, the severity of a case is determined" description="And once you know the severity, you can easily choose which case to pick up next." />
      </CoachmarkOverlayElements>
    </CoachmarkStack>;
}`,...(K=(U=y.parameters)==null?void 0:U.docs)==null?void 0:K.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(Y=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};const it=["coachmarkStack"];export{it as __namedExportsOrder,y as coachmarkStack,st as default};
