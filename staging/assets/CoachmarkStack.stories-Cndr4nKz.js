import{p as u,a as ce,j as e,B as F}from"./settings-BiUEFdm2.js";import{c as N}from"./deprecate-D9ms-jbM.js";import{L as W}from"./Link-CxgVlihf.js";import{g as le}from"./story-helper-YTYnELA9.js";import{useMDXComponents as G}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-CsZ1lTTC.js";import{e as de,i as he,C as me}from"./index-CDYzkStP.js";import{r as a,R as ue}from"./index-BwDkhjyp.js";import{r as J}from"./index-BONylQH5.js";import{P as n}from"./index-Dk74W0Oi.js";import{g as Q}from"./devtools-BPcQvzXy.js";import{e as pe,b as fe,C as ke,a as ge,c as A,d as p}from"./CoachmarkOverlayElements-BjzFwB1c.js";import{u as Z}from"./useIsomorphicEffect-D7JMtAof.js";import{S as ye}from"./SteppedAnimatedMedia-D5S8_Guu.js";import{c as be}from"./bucket-8-61DsWji_.js";import{C as xe}from"./CoachmarkTagline-Ct78EIFi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./events-Bq7WR1mU.js";import"./tslib.es6-B4_xh3D5.js";import"./iframe-j3s5A4v9.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-BjQFKvNH.js";import"./isSymbol-BZYRlrjc.js";import"./index-DrFu-skq.js";import"./uuidv4-BQrI85uz.js";import"./bucket-5-BuK6y5Rd.js";import"./lodash-C6Eq4oiK.js";import"./Carousel-DpP2qXaV.js";import"./lottie-D0UQuq7-.js";import"./clamp-DxEmERK6.js";import"./toNumber-DNhxxDfe.js";const H=`${u.prefix}--coachmark-stacked-home`,y=`${u.prefix}--coachmark-overlay`,_="CoachmarkStackHome";let j=a.forwardRef(({className:o,description:t,isOpen:C,media:f,navLinkLabels:q,onClickNavItem:B,onClose:k,portalTarget:T,closeButtonLabel:L,title:v,...I},R)=>{const S=a.useRef(),[d,s]=a.useState(0);a.useEffect(()=>{setTimeout(()=>{C&&S.current&&S.current.focus()},100)},[C]);const i=a.useRef();if(Z(()=>{i.current=T?(document==null?void 0:document.querySelector(T))??(document==null?void 0:document.querySelector("body")):document==null?void 0:document.querySelector("body")},[T]),!q)return ce.warn(`${_} is an Onboarding internal component and is not intended for general use.`);return i!=null&&i.current?J.createPortal(e.jsxs("div",{...I,className:N(H,o),ref:R,role:"main",...Q(_),children:[e.jsx(pe,{onClose:()=>{s(0),k()}}),e.jsx("div",{className:`${y}__body`,children:e.jsxs("div",{className:`${y}-element`,children:[!f&&e.jsx(be,{size:20,className:`${H}__icon-idea`}),f&&(f.render?f.render():e.jsx(ye,{className:`${y}__element-stepped-media`,filePaths:f.filePaths,playStep:0})),e.jsxs("div",{className:`${y}-element__content`,children:[v&&e.jsx("h2",{className:`${y}-element__title`,children:v}),t&&e.jsx("p",{className:`${y}-element__body`,children:t})]}),e.jsx("ul",{className:`${H}__nav-links`,children:q.map((l,r)=>r===d?h(r,l,S):h(r,l))}),L&&e.jsx("div",{className:`${y}__footer`,children:e.jsx(F,{size:"sm",onClick:()=>{s(0),k()},children:L})})]})})]}),i==null?void 0:i.current):null;function h(l,r,O=null){return e.jsx("li",{children:e.jsx(F,{kind:"ghost",size:"sm",onClick:()=>{s(l),B(l+1)},ref:O,children:r})},l)}});j=u.checkComponentEnabled(j,_);j.displayName=_;j.propTypes={className:n.string,closeButtonLabel:n.string,description:n.node.isRequired,isOpen:n.bool.isRequired,media:n.oneOfType([n.shape({render:n.func}),n.shape({filePaths:n.arrayOf(n.string)})]),navLinkLabels:n.arrayOf(n.string).isRequired,onClickNavItem:n.func.isRequired,onClose:n.func.isRequired,portalTarget:n.string,title:n.string.isRequired};j.__docgenInfo={description:`DO NOT USE. This component is for the exclusive use
of other Onboarding components.`,methods:[],displayName:"CoachmarkStackHome",props:{className:{description:"Optional class name for this component.",type:{name:"string"},required:!1},closeButtonLabel:{description:"The label for the button that will close the stack",type:{name:"string"},required:!1},description:{description:"The description of the Coachmark.",type:{name:"node"},required:!0},isOpen:{description:"If the stack home is open.",type:{name:"bool"},required:!0},media:{description:`The object describing an image in one of two shapes.

If a single media element is required, use \`{render}\`.

If a stepped animation is required, use \`{filePaths}\`.

@see {@link MEDIA_PROP_TYPE}.`,type:{name:"union",value:[{name:"shape",value:{render:{name:"func",required:!1}}},{name:"shape",value:{filePaths:{name:"arrayOf",value:{name:"string"},required:!1}}}]},required:!1},navLinkLabels:{description:"The labels used to link to the stackable Coachmarks.",type:{name:"arrayOf",value:{name:"string"}},required:!0},onClickNavItem:{description:"For internal use only by CoachmarkStack and CoachmarkStackHome.",type:{name:"func"},required:!0},onClose:{description:"Function to call when the stack closes.",type:{name:"func"},required:!0},portalTarget:{description:`By default, the CoachmarkStackHome will be appended to the end of \`document.body\`.
The CoachmarkStackHome will remain persistent as the user navigates the app until
the user closes the CoachmarkStackHome.

Alternatively, the app developer can tightly couple the CoachmarkStackHome to a DOM
element or other component by specifying a CSS selector. The CoachmarkStackHome will
remain visible as long as that element remains visible or mounted. When the
element is hidden or component is unmounted, the CoachmarkStackHome will disappear.`,type:{name:"string"},required:!1},title:{description:"The title of the Coachmark.",type:{name:"string"},required:!0}}};const Ce=`${u.prefix}--coachmark-stack`,M="CoachmarkStack",m=`${u.prefix}--coachmark-stack-element`,D={onClose:()=>{},theme:"light"};let x=ue.forwardRef(({children:o,className:t,onClose:C=D.onClose,description:f,media:q,navLinkLabels:B,portalTarget:k=D.portalTarget,closeButtonLabel:T,tagline:L,theme:v=D.theme,title:I,...R},S)=>{const d=a.useRef();Z(()=>{d.current=k?(document==null?void 0:document.querySelector(k))??(document==null?void 0:document.querySelector("body")):document==null?void 0:document.querySelector("body")},[k]);const s=a.useRef(),i=a.useRef([]),[h,l]=a.useState(!1),[r,O]=a.useState(0),[$,ee]=a.useState(null),te=a.Children.toArray(o),E=a.useRef(),ne=240,ae=c=>{O(c)},w=a.useCallback(c=>{if(c){O(-1);const g=setTimeout(()=>{l(!1),C()},ne);return()=>clearTimeout(g)}else O(0)},[C]),P=a.useCallback(c=>{c.key==="Escape"&&w(r===0)},[w,r]);a.useEffect(()=>(document.addEventListener("keydown",P,!1),()=>{document.removeEventListener("keydown",P,!1)}),[P]);const re={buttonProps:{tabIndex:0,"aria-expanded":h,onClick:()=>{l(!0)},onDoubleClick:()=>{l(!0)}},closeButtonProps:{onClick:()=>w(!1)},isOpen:h};a.useEffect(()=>(E.current=!0,()=>{E.current=!1}),[]),a.useEffect(()=>{setTimeout(()=>{s.current&&ee(s.current.clientHeight+16)},0)},[s]),a.useEffect(()=>{const c=r-1;if(!$)return;if(s.current.style.height=`${$}px`,!h||c<0){s.current.focus();return}const g=i.current[c].clientHeight;s.current.style.height=`${g}px`,i.current[c].focus()},[r,h,$]);const oe=a.Children.map(te,(c,g)=>{const se=E.current?`${m}--is-mounted`:"";return e.jsx(fe,{ref:ie=>i.current[g]=ie,kind:ke.STACKED,onClose:()=>w(!1),theme:v,fixedIsVisible:!1,className:N(m,se,g===r-1&&`${m}--is-visible`,E.current&&`${m}--is-mounted`),children:c},g)});return e.jsx(ge.Provider,{value:re,children:e.jsxs("div",{...R,className:N(Ce,`${u.prefix}--coachmark-overlay--stack`,t),ref:S,...Q(M),children:[e.jsx(xe,{title:L,onClose:C}),e.jsx(j,{ref:s,className:N(`${u.prefix}--coachmark-overlay`,`${u.prefix}--coachmark-overlay__${v}`,m,r>0&&`${m}--is-stacked`,r>0&&`${m}--is-stacked__${v}`,h&&`${m}--is-visible`,E.current&&`${m}--is-mounted`),isOpen:h&&r<1,description:f,media:q,navLinkLabels:B,onClickNavItem:ae,onClose:()=>{w(!0)},portalTarget:k,closeButtonLabel:T,title:I}),d!=null&&d.current?J.createPortal(oe,d==null?void 0:d.current):null]})})});x=u.checkComponentEnabled(x,M);x.displayName=M;x.propTypes={children:n.node.isRequired,className:n.string,closeButtonLabel:n.string,description:n.node.isRequired,media:n.oneOfType([n.shape({render:n.func}),n.shape({filePaths:n.arrayOf(n.string)})]),navLinkLabels:n.arrayOf(n.string).isRequired,onClose:n.func,portalTarget:n.string,tagline:n.string.isRequired,theme:n.oneOf(["light","dark"]),title:n.string.isRequired};x.__docgenInfo={description:`Stacked coachmarks are used to call out specific functionality or concepts
within the UI that may not be intuitive but are important for the
user to gain understanding of the product's main value and discover new use cases.
This variant allows the stacking of multiple coachmark overlays to be displayed by interacting with the tagline.`,methods:[],displayName:"CoachmarkStack",props:{onClose:{defaultValue:{value:"() => {}",computed:!1},description:"Function to call when the CoachmarkStack closes.",type:{name:"func"},required:!1},portalTarget:{defaultValue:{value:"defaults.portalTarget",computed:!0},description:"Where in the DOM to render the stack.\nThe default is `document.body`.",type:{name:"string"},required:!1},theme:{defaultValue:{value:"'light'",computed:!1},description:"Determines the theme of the component.",type:{name:"enum",value:[{value:"'light'",computed:!1},{value:"'dark'",computed:!1}]},required:!1},children:{description:"CoachmarkStack should use a single CoachmarkOverlayElements component as a child.",type:{name:"node"},required:!0},className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1},closeButtonLabel:{description:"The label for the button that will close the Stack",type:{name:"string"},required:!1},description:{description:"The description of the Coachmark.",type:{name:"node"},required:!0},media:{description:`The object describing an image in one of two shapes.

If a single media element is required, use \`{render}\`.

If a stepped animation is required, use \`{filePaths}\`.

@see {@link MEDIA_PROP_TYPE}.`,type:{name:"union",value:[{name:"shape",value:{render:{name:"func",required:!1}}},{name:"shape",value:{filePaths:{name:"arrayOf",value:{name:"string"},required:!1}}}]},required:!1},navLinkLabels:{description:"The labels used to link to the stackable Coachmarks.",type:{name:"arrayOf",value:{name:"string"}},required:!0},tagline:{description:"The tagline title which will be fixed to the bottom right of the window and will serve as the display trigger.",type:{name:"string"},required:!0},title:{description:"The title of the Coachmark.",type:{name:"string"},required:!0}}};function V(o){const t={a:"a",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...G(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"coachmarkstack",children:"CoachmarkStack"}),`
`,e.jsx(t.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#about-onboarding",children:"About Onboarding"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#note-on-theming",children:"Note on theming"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.a,{href:"https://pages.github.ibm.com/cdai-design/pal/components/onboarding/coachmark/usage#stacked",rel:"nofollow",children:"CoachmarkStacked"}),`
appears fixed at the bottom right corner of the browser window when the page
loads. It starts in a minimized state, to cover as little of the UI as possible;
when shown in tests as expanded by default, users immediately closed it without
reading, to get it out of the way. CoachmarkStacked can include ghost buttons to
trigger another layer to slide up to stack on top of it, much like the
`,e.jsx(t.a,{href:"https://pages.github.ibm.com/cdai-design/pal/components/tearsheet/usage/#navigation",rel:"nofollow",children:"stacked Tearsheet"}),`.
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
`,e.jsx(de,{children:e.jsx("div",{className:"CoachmarkBaseExampleUsage",children:e.jsx(he,{of:b})})}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(me,{})]})}function ve(o={}){const{wrapper:t}={...G(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(V,{...o})}):V(o)}const we=".docs-story div{transform:none}",st={title:"IBM Products/Onboarding/Coachmark/CoachmarkStack",component:x,tags:["autodocs"],argTypes:{children:{control:{type:null}},media:{control:{type:null}},portalTarget:{control:{type:null}},theme:{control:{type:null}}},parameters:{styles:we,docs:{page:ve}}},je=o=>{const t=le();return e.jsxs(x,{...o,theme:t,children:[e.jsx(A,{closeButtonLabel:"Got it",children:e.jsx(p,{title:"Short Coachmark",description:"As small as it gets."})}),e.jsxs(A,{closeButtonLabel:"Close",nextButtonText:"Next",previousButtonLabel:"Back",children:[e.jsx(p,{title:"Mid-height Coachmark",description:e.jsxs(e.Fragment,{children:["This should be about the same height as the base stack item.",e.jsx("br",{}),e.jsx("br",{}),"This is known as the enrichment phase. Enrichment supports you by emulating how an analyst would evaluate a finding—for example, by adding context, such as whether a certain piece of data is known to be malicious, or is linked..."]}),button:e.jsx(W,{href:"https://www.ibm.com",children:"Learn more"})}),e.jsx(p,{title:"Hello World",description:"Link opens in new tab.",button:e.jsx(W,{href:"https://www.ibm.com",target:"_blank",children:"Learn more"})})]}),e.jsxs(A,{closeButtonLabel:"Done",nextButtonText:"Next",previousButtonLabel:"Back",children:[e.jsx(p,{title:"Tall Coachmark",description:"These alerts contain data gathered from your connected security systems."}),e.jsx(p,{title:"Alerts contain evidence, known as artifacts",description:"These help to determine whether the alert is good or bad. And as alerts are added to a case, they become findings."}),e.jsx(p,{title:"Findings are enriched with more information and context",description:e.jsxs(e.Fragment,{children:["This is known as the enrichment phase. Enrichment supports you by emulating how an analyst would evaluate a finding—for example, by adding context, such as whether a certain piece of data is known to be malicious, or is linked to a known threat.",e.jsx("br",{}),e.jsx("br",{}),"Lets",e.jsx("br",{}),e.jsx("br",{}),"make",e.jsx("br",{}),e.jsx("br",{}),"this",e.jsx("br",{}),e.jsx("br",{}),"one",e.jsx("br",{}),e.jsx("br",{}),"really",e.jsx("br",{}),e.jsx("br",{}),"tall."]})}),e.jsx(p,{title:"Next, the correlation process takes place",description:"Based on the results of the enrichment process, findings that are potentially related are grouped together, and then evaluated."}),e.jsx(p,{title:"Between enrichment and correlation, the severity of a case is determined",description:"And once you know the severity, you can easily choose which case to pick up next."})]})]})},b=je.bind({});b.args={className:"myCoachmarkStack",closeButtonLabel:"Close",description:"This is an example of a description",title:"Example title",navLinkLabels:["Example 1","Example 2","Example 3"],onClose:()=>console.log("CLOSE"),tagline:"Why are there two types of severity scores?",portalTarget:'#root:not([hidden="true"]) .preview-position-fix'};var z,U,K,X,Y;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
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
}`,...(K=(U=b.parameters)==null?void 0:U.docs)==null?void 0:K.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(Y=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};const it=["coachmarkStack"];export{it as __namedExportsOrder,b as coachmarkStack,st as default};
