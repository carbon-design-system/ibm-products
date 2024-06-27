import{p as h,a as ie,j as e,B as F}from"./settings-DrdbGLhD.js";import{c as N}from"./deprecate-D9ms-jbM.js";import{L as W}from"./Link-CxgVlihf.js";import{g as ce}from"./story-helper-CKb9Drku.js";import{useMDXComponents as G}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-DSrNmesS.js";import{e as le,i as de,C as he}from"./index-Ctt8F4L-.js";import{r as a,R as me}from"./index-BwDkhjyp.js";import{r as J}from"./index-BONylQH5.js";import{P as n}from"./index-Dk74W0Oi.js";import{g as Q}from"./devtools-B_UYo462.js";import{e as ue,b as pe,C as fe,a as ke,c as A,d as m}from"./CoachmarkOverlayElements-qOw1t6zT.js";import{S as ge}from"./SteppedAnimatedMedia-CqRrHW7B.js";import{c as ye}from"./bucket-8-61DsWji_.js";import{C as be}from"./CoachmarkTagline-sXebI87a.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./events-Bq7WR1mU.js";import"./tslib.es6-CI8bilKU.js";import"./iframe-Cetns1dB.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-BjQFKvNH.js";import"./isSymbol-BZYRlrjc.js";import"./index-DrFu-skq.js";import"./uuidv4-BQrI85uz.js";import"./bucket-5-BuK6y5Rd.js";import"./lodash-C6Eq4oiK.js";import"./Carousel-CyBvmnSc.js";import"./lottie-D0UQuq7-.js";import"./clamp-DxEmERK6.js";import"./toNumber-DNhxxDfe.js";const H=`${h.prefix}--coachmark-stacked-home`,f=`${h.prefix}--coachmark-overlay`,L="CoachmarkStackHome";let v=a.forwardRef(({className:o,description:t,isOpen:y,media:u,navLinkLabels:O,onClickNavItem:_,onClose:b,portalTarget:E,closeButtonLabel:q,title:x,...B},$)=>{const w=a.useRef(),[I,s]=a.useState(0);if(a.useEffect(()=>{setTimeout(()=>{y&&w.current&&w.current.focus()},100)},[y]),!O)return ie.warn(`${L} is an Onboarding internal component and is not intended for general use.`);const j=E?document.querySelector(E)??document.querySelector("body"):document.querySelector("body");return J.createPortal(e.jsxs("div",{...B,className:N(H,o),ref:$,role:"main",...Q(L),children:[e.jsx(ue,{onClose:()=>{s(0),b()}}),e.jsx("div",{className:`${f}__body`,children:e.jsxs("div",{className:`${f}-element`,children:[!u&&e.jsx(ye,{size:20,className:`${H}__icon-idea`}),u&&(u.render?u.render():e.jsx(ge,{className:`${f}__element-stepped-media`,filePaths:u.filePaths,playStep:0})),e.jsxs("div",{className:`${f}-element__content`,children:[x&&e.jsx("h2",{className:`${f}-element__title`,children:x}),t&&e.jsx("p",{className:`${f}-element__body`,children:t})]}),e.jsx("ul",{className:`${H}__nav-links`,children:O.map((c,r)=>r===I?l(r,c,w):l(r,c))}),q&&e.jsx("div",{className:`${f}__footer`,children:e.jsx(F,{size:"sm",onClick:()=>{s(0),b()},children:q})})]})})]}),j);function l(c,r,T=null){return e.jsx("li",{children:e.jsx(F,{kind:"ghost",size:"sm",onClick:()=>{s(c),_(c+1)},ref:T,children:r})},c)}});v=h.checkComponentEnabled(v,L);v.displayName=L;v.propTypes={className:n.string,closeButtonLabel:n.string,description:n.node.isRequired,isOpen:n.bool.isRequired,media:n.oneOfType([n.shape({render:n.func}),n.shape({filePaths:n.arrayOf(n.string)})]),navLinkLabels:n.arrayOf(n.string).isRequired,onClickNavItem:n.func.isRequired,onClose:n.func.isRequired,portalTarget:n.string,title:n.string.isRequired};v.__docgenInfo={description:`DO NOT USE. This component is for the exclusive use
of other Onboarding components.`,methods:[],displayName:"CoachmarkStackHome",props:{className:{description:"Optional class name for this component.",type:{name:"string"},required:!1},closeButtonLabel:{description:"The label for the button that will close the stack",type:{name:"string"},required:!1},description:{description:"The description of the Coachmark.",type:{name:"node"},required:!0},isOpen:{description:"If the stack home is open.",type:{name:"bool"},required:!0},media:{description:`The object describing an image in one of two shapes.

If a single media element is required, use \`{render}\`.

If a stepped animation is required, use \`{filePaths}\`.

@see {@link MEDIA_PROP_TYPE}.`,type:{name:"union",value:[{name:"shape",value:{render:{name:"func",required:!1}}},{name:"shape",value:{filePaths:{name:"arrayOf",value:{name:"string"},required:!1}}}]},required:!1},navLinkLabels:{description:"The labels used to link to the stackable Coachmarks.",type:{name:"arrayOf",value:{name:"string"}},required:!0},onClickNavItem:{description:"For internal use only by CoachmarkStack and CoachmarkStackHome.",type:{name:"func"},required:!0},onClose:{description:"Function to call when the stack closes.",type:{name:"func"},required:!0},portalTarget:{description:`By default, the CoachmarkStackHome will be appended to the end of \`document.body\`.
The CoachmarkStackHome will remain persistent as the user navigates the app until
the user closes the CoachmarkStackHome.

Alternatively, the app developer can tightly couple the CoachmarkStackHome to a DOM
element or other component by specifying a CSS selector. The CoachmarkStackHome will
remain visible as long as that element remains visible or mounted. When the
element is hidden or component is unmounted, the CoachmarkStackHome will disappear.`,type:{name:"string"},required:!1},title:{description:"The title of the Coachmark.",type:{name:"string"},required:!0}}};const xe=`${h.prefix}--coachmark-stack`,M="CoachmarkStack",d=`${h.prefix}--coachmark-stack-element`,D={onClose:()=>{},theme:"light"};let g=me.forwardRef(({children:o,className:t,onClose:y=D.onClose,description:u,media:O,navLinkLabels:_,portalTarget:b=D.portalTarget,closeButtonLabel:E,tagline:q,theme:x=D.theme,title:B,...$},w)=>{const I=b?document.querySelector(b)??document.querySelector("body"):document.querySelector("body"),s=a.useRef(),j=a.useRef([]),[l,c]=a.useState(!1),[r,T]=a.useState(0),[P,Z]=a.useState(null),ee=a.Children.toArray(o),S=a.useRef(),te=240,ne=i=>{T(i)},C=a.useCallback(i=>{if(i){T(-1);const p=setTimeout(()=>{c(!1),y()},te);return()=>clearTimeout(p)}else T(0)},[y]),R=a.useCallback(i=>{i.key==="Escape"&&C(r===0)},[C,r]);a.useEffect(()=>(document.addEventListener("keydown",R,!1),()=>{document.removeEventListener("keydown",R,!1)}),[R]);const ae={buttonProps:{tabIndex:0,"aria-expanded":l,onClick:()=>{c(!0)},onDoubleClick:()=>{c(!0)}},closeButtonProps:{onClick:()=>C(!1)},isOpen:l};a.useEffect(()=>(S.current=!0,()=>{S.current=!1}),[]),a.useEffect(()=>{setTimeout(()=>{s.current&&Z(s.current.clientHeight+16)},0)},[s]),a.useEffect(()=>{const i=r-1;if(!P)return;if(s.current.style.height=`${P}px`,!l||i<0){s.current.focus();return}const p=j.current[i].clientHeight;s.current.style.height=`${p}px`,j.current[i].focus()},[r,l,P]);const re=a.Children.map(ee,(i,p)=>{const oe=S.current?`${d}--is-mounted`:"";return e.jsx(pe,{ref:se=>j.current[p]=se,kind:fe.STACKED,onClose:()=>C(!1),theme:x,fixedIsVisible:!1,className:N(d,oe,p===r-1&&`${d}--is-visible`,S.current&&`${d}--is-mounted`),children:i},p)});return e.jsx(ke.Provider,{value:ae,children:e.jsxs("div",{...$,className:N(xe,`${h.prefix}--coachmark-overlay--stack`,t),ref:w,...Q(M),children:[e.jsx(be,{title:q,onClose:y}),e.jsx(v,{ref:s,className:N(`${h.prefix}--coachmark-overlay`,`${h.prefix}--coachmark-overlay__${x}`,d,r>0&&`${d}--is-stacked`,r>0&&`${d}--is-stacked__${x}`,l&&`${d}--is-visible`,S.current&&`${d}--is-mounted`),isOpen:l&&r<1,description:u,media:O,navLinkLabels:_,onClickNavItem:ne,onClose:()=>{C(!0)},portalTarget:b,closeButtonLabel:E,title:B}),J.createPortal(re,I)]})})});g=h.checkComponentEnabled(g,M);g.displayName=M;g.propTypes={children:n.node.isRequired,className:n.string,closeButtonLabel:n.string,description:n.node.isRequired,media:n.oneOfType([n.shape({render:n.func}),n.shape({filePaths:n.arrayOf(n.string)})]),navLinkLabels:n.arrayOf(n.string).isRequired,onClose:n.func,portalTarget:n.string,tagline:n.string.isRequired,theme:n.oneOf(["light","dark"]),title:n.string.isRequired};g.__docgenInfo={description:`Stacked coachmarks are used to call out specific functionality or concepts
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
`,e.jsx(le,{children:e.jsx("div",{className:"CoachmarkBaseExampleUsage",children:e.jsx(de,{of:k})})}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(he,{})]})}function Ce(o={}){const{wrapper:t}={...G(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(V,{...o})}):V(o)}const ve=".docs-story div{transform:none}",rt={title:"IBM Products/Onboarding/Coachmark/CoachmarkStack",component:g,tags:["autodocs"],argTypes:{children:{control:{type:null}},media:{control:{type:null}},portalTarget:{control:{type:null}},theme:{control:{type:null}}},parameters:{styles:ve,docs:{page:Ce}}},we=o=>{const t=ce();return e.jsxs(g,{...o,theme:t,children:[e.jsx(A,{closeButtonLabel:"Got it",children:e.jsx(m,{title:"Short Coachmark",description:"As small as it gets."})}),e.jsxs(A,{closeButtonLabel:"Close",nextButtonText:"Next",previousButtonLabel:"Back",children:[e.jsx(m,{title:"Mid-height Coachmark",description:e.jsxs(e.Fragment,{children:["This should be about the same height as the base stack item.",e.jsx("br",{}),e.jsx("br",{}),"This is known as the enrichment phase. Enrichment supports you by emulating how an analyst would evaluate a finding—for example, by adding context, such as whether a certain piece of data is known to be malicious, or is linked..."]}),button:e.jsx(W,{href:"https://www.ibm.com",children:"Learn more"})}),e.jsx(m,{title:"Hello World",description:"Link opens in new tab.",button:e.jsx(W,{href:"https://www.ibm.com",target:"_blank",children:"Learn more"})})]}),e.jsxs(A,{closeButtonLabel:"Done",nextButtonText:"Next",previousButtonLabel:"Back",children:[e.jsx(m,{title:"Tall Coachmark",description:"These alerts contain data gathered from your connected security systems."}),e.jsx(m,{title:"Alerts contain evidence, known as artifacts",description:"These help to determine whether the alert is good or bad. And as alerts are added to a case, they become findings."}),e.jsx(m,{title:"Findings are enriched with more information and context",description:e.jsxs(e.Fragment,{children:["This is known as the enrichment phase. Enrichment supports you by emulating how an analyst would evaluate a finding—for example, by adding context, such as whether a certain piece of data is known to be malicious, or is linked to a known threat.",e.jsx("br",{}),e.jsx("br",{}),"Lets",e.jsx("br",{}),e.jsx("br",{}),"make",e.jsx("br",{}),e.jsx("br",{}),"this",e.jsx("br",{}),e.jsx("br",{}),"one",e.jsx("br",{}),e.jsx("br",{}),"really",e.jsx("br",{}),e.jsx("br",{}),"tall."]})}),e.jsx(m,{title:"Next, the correlation process takes place",description:"Based on the results of the enrichment process, findings that are potentially related are grouped together, and then evaluated."}),e.jsx(m,{title:"Between enrichment and correlation, the severity of a case is determined",description:"And once you know the severity, you can easily choose which case to pick up next."})]})]})},k=we.bind({});k.args={className:"myCoachmarkStack",closeButtonLabel:"Close",description:"This is an example of a description",title:"Example title",navLinkLabels:["Example 1","Example 2","Example 3"],onClose:()=>console.log("CLOSE"),tagline:"Why are there two types of severity scores?",portalTarget:'#root:not([hidden="true"]) .preview-position-fix'};var z,U,K,X,Y;k.parameters={...k.parameters,docs:{...(z=k.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
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
}`,...(K=(U=k.parameters)==null?void 0:U.docs)==null?void 0:K.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(Y=(X=k.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};const ot=["coachmarkStack"];export{ot as __namedExportsOrder,k as coachmarkStack,rt as default};
