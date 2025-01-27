import{r,e}from"./index-CPiZ6Cnx.js";import{c as $,P as a}from"./index-CXyjPnaX.js";import{L as V}from"./Link-EP4KkhUp.js";import{g as ce}from"./story-helper-CTHQ3yzD.js";import{aw as n,al as me,ax as de,ak as he}from"./index-Be1mmqnw.js";import{useMDXComponents as Q}from"./index-CUO_02de.js";import"./chunk-NUUEMKO5-Dwg16tLQ.js";import{r as Z}from"./index-BSHYryQu.js";import{g as ee}from"./devtools-BgfuqBVa.js";import{p as k,a as ue,B as z}from"./settings-DkGFwmHv.js";import{e as pe,b as fe,C as ke,a as ye,c as M,d as y}from"./CoachmarkOverlayElements-L828gCOZ.js";import{d as be}from"./props-helper-C4XfpXsc.js";import{u as te}from"./useIsomorphicEffect-CqAX3nH-.js";import{S as ge}from"./SteppedAnimatedMedia-CV63aKFL.js";import{I as Ce}from"./bucket-9-BSWQ2dSd.js";import{C as ve}from"./CoachmarkTagline-DSuKOnOY.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-C_4cBVrG.js";import"../sb-preview/runtime.js";import"./index-Df9so8jS.js";import"./index-DMCuvgYY.js";import"./index-DrFu-skq.js";import"./react-18-C6q_qjn2.js";import"./index-Bsyy8W_U.js";import"./events-OVwOsPzJ.js";import"./index-DJK44odq.js";import"./uuidv4-BQrI85uz.js";import"./bucket-5-CJguTH3X.js";import"./lodash-CJO4g-jK.js";import"./Carousel-CW3ZI-go.js";import"./lottie-BZLE-Bwx.js";import"./clamp-DeQgleG0.js";import"./toNumber-CT-AZYiF.js";const N=`${k.prefix}--coachmark-stacked-home`,S=`${k.prefix}--coachmark-overlay`,I="CoachmarkStackHome";let O=r.forwardRef(({className:o,description:t,isOpen:E,media:i,renderMedia:q,navLinkLabels:P,onClickNavItem:w,onClose:j,portalTarget:L,closeButtonLabel:x,title:B,...R},A)=>{const l=r.useRef(null),[s,b]=r.useState(0),c=i||q;r.useEffect(()=>{setTimeout(()=>{E&&l.current&&l.current.focus()},100)},[E]);const m=r.useRef(null);if(te(()=>{m.current=L?(document==null?void 0:document.querySelector(L))??(document==null?void 0:document.querySelector("body")):document==null?void 0:document.querySelector("body")},[L]),!P)return ue.warn(`${I} is an Onboarding internal component and is not intended for general use.`);function d(u,p,H=null){return e.createElement("li",{key:u},e.createElement(z,{kind:"ghost",size:"sm",onClick:()=>{b(u),w(u+1)},ref:H},p))}return m!=null&&m.current?Z.createPortal(e.createElement("div",{...R,className:$(N,o),ref:A,...ee(I)},e.createElement(pe,{onClose:()=>{b(0),j()}}),e.createElement("div",{className:`${S}__body`},e.createElement("div",{className:`${S}-element`},!c&&e.createElement(Ce,{size:20,className:`${N}__icon-idea`}),c&&(i==null?void 0:i.render)&&i.render(),c&&(i==null?void 0:i.filePaths)&&e.createElement(ge,{className:`${N}__element-stepped-media`,filePaths:i.filePaths,playStep:0}),c&&q&&e.createElement("div",{className:`${N}__element-stepped-media`},q({playStep:0})),e.createElement("div",{className:`${S}-element__content`},B&&e.createElement("h2",{className:`${S}-element__title`},B),t&&e.createElement("p",{className:`${S}-element__body`},t)),e.createElement("ul",{className:`${N}__nav-links`},P.map((u,p)=>p===s?d(p,u,l):d(p,u))),x&&e.createElement("div",{className:`${S}__footer`},e.createElement(z,{size:"sm",onClick:()=>{b(0),j()}},x))))),m==null?void 0:m.current):null});O=k.checkComponentEnabled(O,I);O.displayName=I;O.propTypes={className:a.string,closeButtonLabel:a.string,description:a.node.isRequired,isOpen:a.bool.isRequired,media:be(a.oneOfType([a.shape({render:a.func}),a.shape({filePaths:a.arrayOf(a.string)})])),navLinkLabels:a.arrayOf(a.string.isRequired).isRequired,onClickNavItem:a.func.isRequired,onClose:a.func.isRequired,portalTarget:a.string,renderMedia:a.func,title:a.string.isRequired};O.__docgenInfo={description:`DO NOT USE. This component is for the exclusive use
of other Onboarding components.`,methods:[],displayName:"CoachmarkStackHome",props:{className:{description:"Optional class name for this component.",type:{name:"string"},required:!1},closeButtonLabel:{description:"The label for the button that will close the stack",type:{name:"string"},required:!1},description:{description:"The description of the Coachmark.",type:{name:"node"},required:!0},isOpen:{description:"If the stack home is open.",type:{name:"bool"},required:!0},media:{description:`The object describing an image in one of two shapes.

If a single media element is required, use \`{render}\`.

If a stepped animation is required, use \`{filePaths}\`.

@see {@link MEDIA_PROP_TYPE}.
@deprecated please use the \`renderMedia\` prop`,type:{name:"custom",raw:`deprecateProp(
  PropTypes.oneOfType([
    PropTypes.shape({
      render: PropTypes.func,
    }),
    PropTypes.shape({
      filePaths: PropTypes.arrayOf(PropTypes.string),
    }),
  ]),
  ''
)`},required:!1},navLinkLabels:{description:"The labels used to link to the stackable Coachmarks.",type:{name:"arrayOf",value:{name:"string"}},required:!0},onClickNavItem:{description:"For internal use only by CoachmarkStack and CoachmarkStackHome.",type:{name:"func"},required:!0},onClose:{description:"Function to call when the stack closes.",type:{name:"func"},required:!0},portalTarget:{description:`By default, the CoachmarkStackHome will be appended to the end of \`document.body\`.
The CoachmarkStackHome will remain persistent as the user navigates the app until
the user closes the CoachmarkStackHome.

Alternatively, the app developer can tightly couple the CoachmarkStackHome to a DOM
element or other component by specifying a CSS selector. The CoachmarkStackHome will
remain visible as long as that element remains visible or mounted. When the
element is hidden or component is unmounted, the CoachmarkStackHome will disappear.`,type:{name:"string"},required:!1},renderMedia:{description:"Optional prop to render any media like images or animated media.",type:{name:"func"},required:!1},title:{description:"The title of the Coachmark.",type:{name:"string"},required:!0}}};const Ee=`${k.prefix}--coachmark-stack`,W="CoachmarkStack",f=`${k.prefix}--coachmark-stack-element`,F={onClose:()=>{},theme:"light",portalTarget:"body"};let v=e.forwardRef(({children:o,className:t,onClose:E=F.onClose,description:i,media:q,navLinkLabels:P,portalTarget:w=F.portalTarget,closeButtonLabel:j,tagline:L,theme:x=F.theme,title:B,...R},A)=>{const l=r.useRef(null);te(()=>{l.current=w?(document==null?void 0:document.querySelector(w))??(document==null?void 0:document.querySelector("body")):document==null?void 0:document.querySelector("body")},[w]);const s=r.useRef(null),b=r.useRef([]),[c,m]=r.useState(!1),[d,u]=r.useState(0),[p,H]=r.useState(),ne=r.Children.toArray(o),_=r.useRef(void 0),ae=240,re=h=>{u(h)},T=r.useCallback(h=>{if(h){u(-1);const g=setTimeout(()=>{m(!1),E()},ae);return()=>clearTimeout(g)}else u(0)},[E]),D=r.useCallback(h=>{h.key==="Escape"&&T(d===0)},[T,d]);r.useEffect(()=>(document.addEventListener("keydown",D,!1),()=>{document.removeEventListener("keydown",D,!1)}),[D]);const oe={buttonProps:{tabIndex:0,"aria-expanded":c,onClick:()=>{m(!0)},onDoubleClick:()=>{m(!0)}},closeButtonProps:{onClick:()=>T(!1)},isOpen:c};r.useEffect(()=>(_.current=!0,()=>{_.current=!1}),[]),r.useEffect(()=>{setTimeout(()=>{s.current&&H(s.current.clientHeight+16)},0)},[s]),r.useEffect(()=>{const h=d-1;if(!p)return;if(s.current&&(s.current.style.height=`${p}px`),!c||h<0){s.current&&s.current.focus();return}const g=b.current[h].clientHeight;s.current&&(s.current.style.height=`${g}px`,b.current[h].focus())},[d,c,p]);const se=r.Children.map(ne,(h,g)=>{const ie=_.current?`${f}--is-mounted`:"";return e.createElement(fe,{key:g,ref:le=>b.current[g]=le,kind:ke.STACKED,onClose:()=>T(!1),theme:x,fixedIsVisible:!1,className:$(f,ie,g===d-1&&`${f}--is-visible`,_.current&&`${f}--is-mounted`)},h)});return e.createElement(ye.Provider,{value:oe},e.createElement("div",{...R,className:$(Ee,`${k.prefix}--coachmark-overlay--stack`,t),ref:A,...ee(W)},e.createElement(ve,{title:L,onClose:E}),e.createElement(O,{ref:s,className:$(`${k.prefix}--coachmark-overlay`,`${k.prefix}--coachmark-overlay__${x}`,f,d>0&&`${f}--is-stacked`,d>0&&`${f}--is-stacked__${x}`,c&&`${f}--is-visible`,_.current&&`${f}--is-mounted`),isOpen:c&&d<1,description:i,media:q,navLinkLabels:P,onClickNavItem:re,onClose:()=>{T(!0)},portalTarget:w,closeButtonLabel:j,title:B}),l!=null&&l.current?Z.createPortal(se,l==null?void 0:l.current):null))});v=k.checkComponentEnabled(v,W);v.displayName=W;v.propTypes={children:a.node.isRequired,className:a.string,closeButtonLabel:a.string,description:a.node.isRequired,media:a.oneOfType([a.shape({render:a.func}),a.shape({filePaths:a.arrayOf(a.string)})]),navLinkLabels:a.arrayOf(a.string.isRequired).isRequired,onClose:a.func,portalTarget:a.string,tagline:a.string.isRequired,theme:a.oneOf(["light","dark"]),title:a.string.isRequired};v.__docgenInfo={description:`Stacked coachmarks are used to call out specific functionality or concepts
within the UI that may not be intuitive but are important for the
user to gain understanding of the product's main value and discover new use cases.
This variant allows the stacking of multiple coachmark overlays to be displayed by interacting with the tagline.`,methods:[],displayName:"CoachmarkStack",props:{onClose:{defaultValue:{value:"() => {}",computed:!1},description:"Function to call when the CoachmarkStack closes.",type:{name:"func"},required:!1},portalTarget:{defaultValue:{value:"'body'",computed:!1},description:"Where in the DOM to render the stack.\nThe default is `document.body`.",type:{name:"string"},required:!1},theme:{defaultValue:{value:"'light'",computed:!1},description:"Determines the theme of the component.",type:{name:"enum",value:[{value:"'light'",computed:!1},{value:"'dark'",computed:!1}]},required:!1},children:{description:"CoachmarkStack should use a single CoachmarkOverlayElements component as a child.",type:{name:"node"},required:!0},className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1},closeButtonLabel:{description:"The label for the button that will close the Stack",type:{name:"string"},required:!1},description:{description:"The description of the Coachmark.",type:{name:"node"},required:!0},media:{description:`The object describing an image in one of two shapes.

If a single media element is required, use \`{render}\`.

If a stepped animation is required, use \`{filePaths}\`.

@see {@link MEDIA_PROP_TYPE}.`,type:{name:"union",value:[{name:"shape",value:{render:{name:"func",required:!1}}},{name:"shape",value:{filePaths:{name:"arrayOf",value:{name:"string"},required:!1}}}]},required:!1},navLinkLabels:{description:"The labels used to link to the stackable Coachmarks.",type:{name:"arrayOf",value:{name:"string"}},required:!0},tagline:{description:"The tagline title which will be fixed to the bottom right of the window and will serve as the display trigger.",type:{name:"string"},required:!0},title:{description:"The title of the Coachmark.",type:{name:"string"},required:!0}}};function U(o){const t={a:"a",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...Q(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(t.h1,{id:"coachmarkstack",children:"CoachmarkStack"}),`
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
`,n.jsx(he,{})]})}function we(o={}){const{wrapper:t}={...Q(),...o.components};return t?n.jsx(t,{...o,children:n.jsx(U,{...o})}):U(o)}const xe=".docs-story div{transform:none}",ot={title:"Experimental/Onboarding/Coachmark/CoachmarkStack",component:v,tags:["autodocs"],argTypes:{children:{control:{type:null}},media:{control:{type:null},description:'Deprecated: Property replaced by "renderMedia"'},portalTarget:{control:{type:null}},theme:{control:{type:null}}},parameters:{styles:xe,docs:{page:we}}},Te=o=>{const t=ce();return e.createElement(v,{...o,theme:t},e.createElement(M,{closeButtonLabel:"Got it"},e.createElement(y,{title:"Short Coachmark",description:"As small as it gets."})),e.createElement(M,{closeButtonLabel:"Close",nextButtonText:"Next",previousButtonLabel:"Back"},e.createElement(y,{title:"Mid-height Coachmark",description:e.createElement(e.Fragment,null,"This should be about the same height as the base stack item.",e.createElement("br",null),e.createElement("br",null),"This is known as the enrichment phase. Enrichment supports you by emulating how an analyst would evaluate a finding—for example, by adding context, such as whether a certain piece of data is known to be malicious, or is linked..."),button:e.createElement(V,{href:"https://www.ibm.com"},"Learn more")}),e.createElement(y,{title:"Hello World",description:"Link opens in new tab.",button:e.createElement(V,{href:"https://www.ibm.com",target:"_blank"},"Learn more")})),e.createElement(M,{closeButtonLabel:"Done",nextButtonText:"Next",previousButtonLabel:"Back"},e.createElement(y,{title:"Tall Coachmark",description:"These alerts contain data gathered from your connected security systems."}),e.createElement(y,{title:"Alerts contain evidence, known as artifacts",description:"These help to determine whether the alert is good or bad. And as alerts are added to a case, they become findings."}),e.createElement(y,{title:"Findings are enriched with more information and context",description:e.createElement(e.Fragment,null,"This is known as the enrichment phase. Enrichment supports you by emulating how an analyst would evaluate a finding—for example, by adding context, such as whether a certain piece of data is known to be malicious, or is linked to a known threat.",e.createElement("br",null),e.createElement("br",null),"Lets",e.createElement("br",null),e.createElement("br",null),"make",e.createElement("br",null),e.createElement("br",null),"this",e.createElement("br",null),e.createElement("br",null),"one",e.createElement("br",null),e.createElement("br",null),"really",e.createElement("br",null),e.createElement("br",null),"tall.")}),e.createElement(y,{title:"Next, the correlation process takes place",description:"Based on the results of the enrichment process, findings that are potentially related are grouped together, and then evaluated."}),e.createElement(y,{title:"Between enrichment and correlation, the severity of a case is determined",description:"And once you know the severity, you can easily choose which case to pick up next."})))},C=Te.bind({});C.args={className:"myCoachmarkStack",closeButtonLabel:"Close",description:"This is an example of a description",title:"Example title",navLinkLabels:["Example 1","Example 2","Example 3"],onClose:()=>console.log("CLOSE"),tagline:"Why are there two types of severity scores?",portalTarget:'#root:not([hidden="true"]) .preview-position-fix'};var K,X,Y,G,J;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
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
}`,...(Y=(X=C.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(J=(G=C.parameters)==null?void 0:G.docs)==null?void 0:J.description}}};const st=["coachmarkStack"];export{st as __namedExportsOrder,C as coachmarkStack,ot as default};
