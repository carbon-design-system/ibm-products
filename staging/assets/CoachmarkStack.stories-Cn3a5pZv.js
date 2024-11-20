import{r,R as e}from"./index-BwDkhjyp.js";import{c as _}from"./index-CO-HQMMN.js";import{L as W}from"./Link-1779lvRe.js";import{g as ce}from"./story-helper-6_fmjwZ-.js";import{j as n}from"./jsx-runtime-Yb_4y5hn.js";import{useMDXComponents as J}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-BYpJLwUI.js";import{e as me,i as de,C as he}from"./index-DHGWxKiG.js";import{r as Q}from"./index-BONylQH5.js";import{P as a}from"./index-Dk74W0Oi.js";import{g as Z}from"./devtools-7ohusRRR.js";import{p,a as ue,B as V}from"./settings-9_3hiHpE.js";import{e as pe,b as fe,C as ke,a as be,c as H,d as f}from"./CoachmarkOverlayElements-DwrUkres.js";import{u as ee}from"./useIsomorphicEffect-D7JMtAof.js";import{S as ye}from"./SteppedAnimatedMedia-B716d7EF.js";import{I as ge}from"./bucket-9-CnK3eVdV.js";import{C as Ce}from"./CoachmarkTagline-CnP9blZV.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib.es6-B4_xh3D5.js";import"./iframe-CBdycsFE.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./index-CJvxHwuA.js";import"./events-OVwOsPzJ.js";import"./index-DQ9l4IMz.js";import"./uuidv4-BQrI85uz.js";import"./bucket-5-DLUbIH5T.js";import"./lodash-C6Eq4oiK.js";import"./Carousel-hwpbASlj.js";import"./lottie-D0UQuq7-.js";import"./clamp-Bg2yowlN.js";import"./toNumber-DVQITUtX.js";const D=`${p.prefix}--coachmark-stacked-home`,g=`${p.prefix}--coachmark-overlay`,B="CoachmarkStackHome";let T=r.forwardRef(({className:i,description:t,isOpen:E,media:k,navLinkLabels:j,onClickNavItem:R,onClose:b,portalTarget:S,closeButtonLabel:N,title:w,...I},$)=>{const O=r.useRef(null),[d,o]=r.useState(0);r.useEffect(()=>{setTimeout(()=>{E&&O.current&&O.current.focus()},100)},[E]);const l=r.useRef(null);if(ee(()=>{l.current=S?(document==null?void 0:document.querySelector(S))??(document==null?void 0:document.querySelector("body")):document==null?void 0:document.querySelector("body")},[S]),!j)return ue.warn(`${B} is an Onboarding internal component and is not intended for general use.`);function h(m,s,q=null){return e.createElement("li",{key:m},e.createElement(V,{kind:"ghost",size:"sm",onClick:()=>{o(m),R(m+1)},ref:q},s))}return l!=null&&l.current?Q.createPortal(e.createElement("div",{...I,className:_(D,i),ref:$,...Z(B)},e.createElement(pe,{onClose:()=>{o(0),b()}}),e.createElement("div",{className:`${g}__body`},e.createElement("div",{className:`${g}-element`},!k&&e.createElement(ge,{size:20,className:`${D}__icon-idea`}),k&&(k.render?k.render():e.createElement(ye,{className:`${g}__element-stepped-media`,filePaths:k.filePaths,playStep:0})),e.createElement("div",{className:`${g}-element__content`},w&&e.createElement("h2",{className:`${g}-element__title`},w),t&&e.createElement("p",{className:`${g}-element__body`},t)),e.createElement("ul",{className:`${D}__nav-links`},j.map((m,s)=>s===d?h(s,m,O):h(s,m))),N&&e.createElement("div",{className:`${g}__footer`},e.createElement(V,{size:"sm",onClick:()=>{o(0),b()}},N))))),l==null?void 0:l.current):null});T=p.checkComponentEnabled(T,B);T.displayName=B;T.propTypes={className:a.string,closeButtonLabel:a.string,description:a.node.isRequired,isOpen:a.bool.isRequired,media:a.oneOfType([a.shape({render:a.func}),a.shape({filePaths:a.arrayOf(a.string)})]),navLinkLabels:a.arrayOf(a.string.isRequired).isRequired,onClickNavItem:a.func.isRequired,onClose:a.func.isRequired,portalTarget:a.string,title:a.string.isRequired};T.__docgenInfo={description:`DO NOT USE. This component is for the exclusive use
of other Onboarding components.`,methods:[],displayName:"CoachmarkStackHome",props:{className:{description:"Optional class name for this component.",type:{name:"string"},required:!1},closeButtonLabel:{description:"The label for the button that will close the stack",type:{name:"string"},required:!1},description:{description:"The description of the Coachmark.",type:{name:"node"},required:!0},isOpen:{description:"If the stack home is open.",type:{name:"bool"},required:!0},media:{description:`The object describing an image in one of two shapes.

If a single media element is required, use \`{render}\`.

If a stepped animation is required, use \`{filePaths}\`.

@see {@link MEDIA_PROP_TYPE}.`,type:{name:"union",value:[{name:"shape",value:{render:{name:"func",required:!1}}},{name:"shape",value:{filePaths:{name:"arrayOf",value:{name:"string"},required:!1}}}]},required:!1},navLinkLabels:{description:"The labels used to link to the stackable Coachmarks.",type:{name:"arrayOf",value:{name:"string"}},required:!0},onClickNavItem:{description:"For internal use only by CoachmarkStack and CoachmarkStackHome.",type:{name:"func"},required:!0},onClose:{description:"Function to call when the stack closes.",type:{name:"func"},required:!0},portalTarget:{description:`By default, the CoachmarkStackHome will be appended to the end of \`document.body\`.
The CoachmarkStackHome will remain persistent as the user navigates the app until
the user closes the CoachmarkStackHome.

Alternatively, the app developer can tightly couple the CoachmarkStackHome to a DOM
element or other component by specifying a CSS selector. The CoachmarkStackHome will
remain visible as long as that element remains visible or mounted. When the
element is hidden or component is unmounted, the CoachmarkStackHome will disappear.`,type:{name:"string"},required:!1},title:{description:"The title of the Coachmark.",type:{name:"string"},required:!0}}};const ve=`${p.prefix}--coachmark-stack`,F="CoachmarkStack",u=`${p.prefix}--coachmark-stack-element`,M={onClose:()=>{},theme:"light",portalTarget:"body"};let v=e.forwardRef(({children:i,className:t,onClose:E=M.onClose,description:k,media:j,navLinkLabels:R,portalTarget:b=M.portalTarget,closeButtonLabel:S,tagline:N,theme:w=M.theme,title:I,...$},O)=>{const d=r.useRef(null);ee(()=>{d.current=b?(document==null?void 0:document.querySelector(b))??(document==null?void 0:document.querySelector("body")):document==null?void 0:document.querySelector("body")},[b]);const o=r.useRef(null),l=r.useRef([]),[h,m]=r.useState(!1),[s,q]=r.useState(0),[P,te]=r.useState(),ne=r.Children.toArray(i),L=r.useRef(void 0),ae=240,re=c=>{q(c)},x=r.useCallback(c=>{if(c){q(-1);const y=setTimeout(()=>{m(!1),E()},ae);return()=>clearTimeout(y)}else q(0)},[E]),A=r.useCallback(c=>{c.key==="Escape"&&x(s===0)},[x,s]);r.useEffect(()=>(document.addEventListener("keydown",A,!1),()=>{document.removeEventListener("keydown",A,!1)}),[A]);const oe={buttonProps:{tabIndex:0,"aria-expanded":h,onClick:()=>{m(!0)},onDoubleClick:()=>{m(!0)}},closeButtonProps:{onClick:()=>x(!1)},isOpen:h};r.useEffect(()=>(L.current=!0,()=>{L.current=!1}),[]),r.useEffect(()=>{setTimeout(()=>{o.current&&te(o.current.clientHeight+16)},0)},[o]),r.useEffect(()=>{const c=s-1;if(!P)return;if(o.current&&(o.current.style.height=`${P}px`),!h||c<0){o.current&&o.current.focus();return}const y=l.current[c].clientHeight;o.current&&(o.current.style.height=`${y}px`,l.current[c].focus())},[s,h,P]);const se=r.Children.map(ne,(c,y)=>{const ie=L.current?`${u}--is-mounted`:"";return e.createElement(fe,{key:y,ref:le=>l.current[y]=le,kind:ke.STACKED,onClose:()=>x(!1),theme:w,fixedIsVisible:!1,className:_(u,ie,y===s-1&&`${u}--is-visible`,L.current&&`${u}--is-mounted`)},c)});return e.createElement(be.Provider,{value:oe},e.createElement("div",{...$,className:_(ve,`${p.prefix}--coachmark-overlay--stack`,t),ref:O,...Z(F)},e.createElement(Ce,{title:N,onClose:E}),e.createElement(T,{ref:o,className:_(`${p.prefix}--coachmark-overlay`,`${p.prefix}--coachmark-overlay__${w}`,u,s>0&&`${u}--is-stacked`,s>0&&`${u}--is-stacked__${w}`,h&&`${u}--is-visible`,L.current&&`${u}--is-mounted`),isOpen:h&&s<1,description:k,media:j,navLinkLabels:R,onClickNavItem:re,onClose:()=>{x(!0)},portalTarget:b,closeButtonLabel:S,title:I}),d!=null&&d.current?Q.createPortal(se,d==null?void 0:d.current):null))});v=p.checkComponentEnabled(v,F);v.displayName=F;v.propTypes={children:a.node.isRequired,className:a.string,closeButtonLabel:a.string,description:a.node.isRequired,media:a.oneOfType([a.shape({render:a.func}),a.shape({filePaths:a.arrayOf(a.string)})]),navLinkLabels:a.arrayOf(a.string.isRequired).isRequired,onClose:a.func,portalTarget:a.string,tagline:a.string.isRequired,theme:a.oneOf(["light","dark"]),title:a.string.isRequired};v.__docgenInfo={description:`Stacked coachmarks are used to call out specific functionality or concepts
within the UI that may not be intuitive but are important for the
user to gain understanding of the product's main value and discover new use cases.
This variant allows the stacking of multiple coachmark overlays to be displayed by interacting with the tagline.`,methods:[],displayName:"CoachmarkStack",props:{onClose:{defaultValue:{value:"() => {}",computed:!1},description:"Function to call when the CoachmarkStack closes.",type:{name:"func"},required:!1},portalTarget:{defaultValue:{value:"'body'",computed:!1},description:"Where in the DOM to render the stack.\nThe default is `document.body`.",type:{name:"string"},required:!1},theme:{defaultValue:{value:"'light'",computed:!1},description:"Determines the theme of the component.",type:{name:"enum",value:[{value:"'light'",computed:!1},{value:"'dark'",computed:!1}]},required:!1},children:{description:"CoachmarkStack should use a single CoachmarkOverlayElements component as a child.",type:{name:"node"},required:!0},className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1},closeButtonLabel:{description:"The label for the button that will close the Stack",type:{name:"string"},required:!1},description:{description:"The description of the Coachmark.",type:{name:"node"},required:!0},media:{description:`The object describing an image in one of two shapes.

If a single media element is required, use \`{render}\`.

If a stepped animation is required, use \`{filePaths}\`.

@see {@link MEDIA_PROP_TYPE}.`,type:{name:"union",value:[{name:"shape",value:{render:{name:"func",required:!1}}},{name:"shape",value:{filePaths:{name:"arrayOf",value:{name:"string"},required:!1}}}]},required:!1},navLinkLabels:{description:"The labels used to link to the stackable Coachmarks.",type:{name:"arrayOf",value:{name:"string"}},required:!0},tagline:{description:"The tagline title which will be fixed to the bottom right of the window and will serve as the display trigger.",type:{name:"string"},required:!0},title:{description:"The title of the Coachmark.",type:{name:"string"},required:!0}}};function z(i){const t={a:"a",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...J(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(t.h1,{id:"coachmarkstack",children:"CoachmarkStack"}),`
`,n.jsx(t.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsx(t.li,{children:n.jsx(t.a,{href:"#overview",children:"Overview"})}),`
`,n.jsx(t.li,{children:n.jsx(t.a,{href:"#about-onboarding",children:"About Onboarding"})}),`
`,n.jsx(t.li,{children:n.jsx(t.a,{href:"#note-on-theming",children:"Note on theming"})}),`
`,n.jsx(t.li,{children:n.jsx(t.a,{href:"#example-usage",children:"Example usage"})}),`
`,n.jsx(t.li,{children:n.jsx(t.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,n.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,n.jsxs(t.p,{children:[n.jsx(t.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/coachmark/usage#stacked",rel:"nofollow",children:"CoachmarkStacked"}),`
appears fixed at the bottom right corner of the browser window when the page
loads. It starts in a minimized state, to cover as little of the UI as possible;
when shown in tests as expanded by default, users immediately closed it without
reading, to get it out of the way. CoachmarkStacked can include ghost buttons to
trigger another layer to slide up to stack on top of it, much like the
`,n.jsx(t.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/tearsheet/usage/#navigation",rel:"nofollow",children:"stacked Tearsheet"}),`.
When dismissed, the stacked layer exits by sliding back down, revealing the main
layer. When the main layer is dismissed, it slides down off the page. Only one
layer can be stacked on the main layer.`]}),`
`,n.jsx(t.h2,{id:"about-onboarding",children:"About Onboarding"}),`
`,n.jsxs(t.p,{children:[n.jsx(t.a,{href:"https://pages.github.ibm.com/security/security-design/department/end-to-end-experiences/onboarding/overview",rel:"nofollow",children:"Onboarding"}),`
is a continuous learning methodology and framework that aims to orient, onboard,
explain, educate, and cultivate novice users into high-functioning power users.`]}),`
`,n.jsx(t.h2,{id:"note-on-theming",children:"Note on theming"}),`
`,n.jsx(t.p,{children:`The CoachmarkStacked uses the theme prop (e.g., theme='dark') to set the
appropriate background and font colors for the child Coachmark elements. Specify
a value ('light' or 'dark') to display properly within your usage.`}),`
`,n.jsx(t.h2,{id:"example-usage",children:"Example usage"}),`
`,n.jsx(t.p,{children:n.jsx(t.em,{children:"(See bottom right)"})}),`
`,n.jsx(me,{children:n.jsx("div",{className:"CoachmarkBaseExampleUsage",children:n.jsx(de,{of:C})})}),`
`,n.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,n.jsx(he,{})]})}function Ee(i={}){const{wrapper:t}={...J(),...i.components};return t?n.jsx(t,{...i,children:n.jsx(z,{...i})}):z(i)}const we=".docs-story div{transform:none}",it={title:"Experimental/Onboarding/Coachmark/CoachmarkStack",component:v,tags:["autodocs"],argTypes:{children:{control:{type:null}},media:{control:{type:null}},portalTarget:{control:{type:null}},theme:{control:{type:null}}},parameters:{styles:we,docs:{page:Ee}}},xe=i=>{const t=ce();return e.createElement(v,{...i,theme:t},e.createElement(H,{closeButtonLabel:"Got it"},e.createElement(f,{title:"Short Coachmark",description:"As small as it gets."})),e.createElement(H,{closeButtonLabel:"Close",nextButtonText:"Next",previousButtonLabel:"Back"},e.createElement(f,{title:"Mid-height Coachmark",description:e.createElement(e.Fragment,null,"This should be about the same height as the base stack item.",e.createElement("br",null),e.createElement("br",null),"This is known as the enrichment phase. Enrichment supports you by emulating how an analyst would evaluate a finding—for example, by adding context, such as whether a certain piece of data is known to be malicious, or is linked..."),button:e.createElement(W,{href:"https://www.ibm.com"},"Learn more")}),e.createElement(f,{title:"Hello World",description:"Link opens in new tab.",button:e.createElement(W,{href:"https://www.ibm.com",target:"_blank"},"Learn more")})),e.createElement(H,{closeButtonLabel:"Done",nextButtonText:"Next",previousButtonLabel:"Back"},e.createElement(f,{title:"Tall Coachmark",description:"These alerts contain data gathered from your connected security systems."}),e.createElement(f,{title:"Alerts contain evidence, known as artifacts",description:"These help to determine whether the alert is good or bad. And as alerts are added to a case, they become findings."}),e.createElement(f,{title:"Findings are enriched with more information and context",description:e.createElement(e.Fragment,null,"This is known as the enrichment phase. Enrichment supports you by emulating how an analyst would evaluate a finding—for example, by adding context, such as whether a certain piece of data is known to be malicious, or is linked to a known threat.",e.createElement("br",null),e.createElement("br",null),"Lets",e.createElement("br",null),e.createElement("br",null),"make",e.createElement("br",null),e.createElement("br",null),"this",e.createElement("br",null),e.createElement("br",null),"one",e.createElement("br",null),e.createElement("br",null),"really",e.createElement("br",null),e.createElement("br",null),"tall.")}),e.createElement(f,{title:"Next, the correlation process takes place",description:"Based on the results of the enrichment process, findings that are potentially related are grouped together, and then evaluated."}),e.createElement(f,{title:"Between enrichment and correlation, the severity of a case is determined",description:"And once you know the severity, you can easily choose which case to pick up next."})))},C=xe.bind({});C.args={className:"myCoachmarkStack",closeButtonLabel:"Close",description:"This is an example of a description",title:"Example title",navLinkLabels:["Example 1","Example 2","Example 3"],onClose:()=>console.log("CLOSE"),tagline:"Why are there two types of severity scores?",portalTarget:'#root:not([hidden="true"]) .preview-position-fix'};var U,K,X,Y,G;C.parameters={...C.parameters,docs:{...(U=C.parameters)==null?void 0:U.docs,source:{originalSource:`args => {
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
}`,...(X=(K=C.parameters)==null?void 0:K.docs)==null?void 0:X.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(G=(Y=C.parameters)==null?void 0:Y.docs)==null?void 0:G.description}}};const lt=["coachmarkStack"];export{lt as __namedExportsOrder,C as coachmarkStack,it as default};
