import{r,e}from"./index-BOZkNhcz.js";import{c as B,P as a}from"./index--clQM3eT.js";import{L as V}from"./Link-BFsW3ySJ.js";import{g as ce}from"./story-helper-DEC8H8IF.js";import{j as n,a as me,h as de,C as ue}from"./index-KgSg3jcr.js";import{useMDXComponents as Q}from"./index-aaDvWpb8.js";import"./DocsRenderer-CFRXHY34-A56J-102.js";import{r as Z}from"./index-hBZdtWkn.js";import{g as ee}from"./devtools-BSXGZlBP.js";import{a as he,p as y,B as z}from"./settings-BYgtfLKl.js";import{e as pe,d as fe,b as ye,c as ge,C as M,a as g}from"./CoachmarkOverlayElements-BoIbEYJx.js";import{d as ke}from"./props-helper-BNocl_Zr.js";import{u as te}from"./useIsomorphicEffect-C0ObacuX.js";import{S as be}from"./SteppedAnimatedMedia-BOC_MZvc.js";import{I as ve}from"./bucket-9-C6VBS02H.js";import{C as we}from"./CoachmarkTagline-Bn5Fs-ML.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe--Hb3m1kv.js";import"./index-CO8sV34W.js";import"./index-ogSvIofg.js";import"./react-18-Cs6RDBhU.js";import"./index-2uioG_CI.js";import"./events-OVwOsPzJ.js";import"./index-YZUn1U4D.js";import"./uuidv4-BN2rGLQG.js";import"./bucket-5-D_VnmO9x.js";import"./clamp-CsXXRQhr.js";import"./Carousel-CfCT9sHV.js";import"./lottie-BZLE-Bwx.js";const R=`${y.prefix}--coachmark-stacked-home`,S=`${y.prefix}--coachmark-overlay`,$="CoachmarkStackHome";let O=r.forwardRef(({className:o,description:t,isOpen:C,media:i,renderMedia:q,navLinkLabels:L,onClickNavItem:E,onClose:j,portalTarget:N,closeButtonLabel:x,title:_,...I},A)=>{const l=r.useRef(null),[s,k]=r.useState(0),c=i||q;r.useEffect(()=>{setTimeout(()=>{C&&l.current&&l.current.focus()},100)},[C]);const m=r.useRef(null);if(te(()=>{m.current=N?(document==null?void 0:document.querySelector(N))??(document==null?void 0:document.querySelector("body")):document==null?void 0:document.querySelector("body")},[N]),!L)return he.warn(`${$} is an Onboarding internal component and is not intended for general use.`);function d(h,p,H=null){return e.createElement("li",{key:h},e.createElement(z,{kind:"ghost",size:"sm",onClick:()=>{k(h),E(h+1)},ref:H},p))}return m!=null&&m.current?Z.createPortal(e.createElement("div",{...I,className:B(R,o),ref:A,...ee($)},e.createElement(pe,{onClose:()=>{k(0),j()}}),e.createElement("div",{className:`${S}__body`},e.createElement("div",{className:`${S}-element`},!c&&e.createElement(ve,{size:20,className:`${R}__icon-idea`}),c&&(i==null?void 0:i.render)&&i.render(),c&&(i==null?void 0:i.filePaths)&&e.createElement(be,{className:`${R}__element-stepped-media`,filePaths:i.filePaths,playStep:0}),c&&q&&e.createElement("div",{className:`${R}__element-stepped-media`},q({playStep:0})),e.createElement("div",{className:`${S}-element__content`},_&&e.createElement("h2",{className:`${S}-element__title`},_),t&&e.createElement("p",{className:`${S}-element__body`},t)),e.createElement("ul",{className:`${R}__nav-links`},L.map((h,p)=>p===s?d(p,h,l):d(p,h))),x&&e.createElement("div",{className:`${S}__footer`},e.createElement(z,{size:"sm",onClick:()=>{k(0),j()}},x))))),m==null?void 0:m.current):null});O=y.checkComponentEnabled(O,$);O.displayName=$;O.propTypes={className:a.string,closeButtonLabel:a.string,description:a.node.isRequired,isOpen:a.bool.isRequired,media:ke(a.oneOfType([a.shape({render:a.func}),a.shape({filePaths:a.arrayOf(a.string)})])),navLinkLabels:a.arrayOf(a.string.isRequired).isRequired,onClickNavItem:a.func.isRequired,onClose:a.func.isRequired,portalTarget:a.string,renderMedia:a.func,title:a.string.isRequired};O.__docgenInfo={description:`DO NOT USE. This component is for the exclusive use
of other Onboarding components.`,methods:[],displayName:"CoachmarkStackHome",props:{className:{required:!1,tsType:{name:"string"},description:"Optional class name for this component.",type:{name:"string"}},closeButtonLabel:{required:!1,tsType:{name:"string"},description:"The label for the button that will close the stack",type:{name:"string"}},description:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The description of the Coachmark.",type:{name:"node"}},isOpen:{required:!0,tsType:{name:"boolean"},description:"If the stack home is open.",type:{name:"bool"}},media:{required:!1,tsType:{name:"union",raw:`| {
    render?: () => ReactNode;
    filePaths?: never;
  }
| {
    render?: never;
    filePaths?: string[];
  }`,elements:[{name:"signature",type:"object",raw:`{
  render?: () => ReactNode;
  filePaths?: never;
}`,signature:{properties:[{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!1}},{key:"filePaths",value:{name:"never",required:!1}}]}},{name:"signature",type:"object",raw:`{
  render?: never;
  filePaths?: string[];
}`,signature:{properties:[{key:"render",value:{name:"never",required:!1}},{key:"filePaths",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]}}]},description:`The object describing an image in one of two shapes.

If a single media element is required, use \`{render}\`.

If a stepped animation is required, use \`{filePaths}\`.

@see {@link MEDIA_PROP_TYPE}.`,type:{name:"custom",raw:`deprecateProp(
  PropTypes.oneOfType([
    PropTypes.shape({
      render: PropTypes.func,
    }),
    PropTypes.shape({
      filePaths: PropTypes.arrayOf(PropTypes.string),
    }),
  ]),
  ''
)`}},renderMedia:{required:!1,tsType:{name:"signature",type:"function",raw:"(params) => ReactNode",signature:{arguments:[{name:"params"}],return:{name:"ReactNode"}}},description:"Optional prop to render any media like images or any animated media.",type:{name:"func"}},navLinkLabels:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The labels used to link to the stackable Coachmarks.",type:{name:"arrayOf",value:{name:"string"}}},onClickNavItem:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"For internal use only by CoachmarkStack and CoachmarkStackHome.",type:{name:"func"}},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function to call when the stack closes.",type:{name:"func"}},portalTarget:{required:!1,tsType:{name:"string"},description:`By default, the CoachmarkStackHome will be appended to the end of \`document.body\`.
The CoachmarkStackHome will remain persistent as the user navigates the app until
the user closes the CoachmarkStackHome.

Alternatively, the app developer can tightly couple the CoachmarkStackHome to a DOM
element or other component by specifying a CSS selector. The CoachmarkStackHome will
remain visible as long as that element remains visible or mounted. When the
element is hidden or component is unmounted, the CoachmarkStackHome will disappear.`,type:{name:"string"}},title:{required:!0,tsType:{name:"string"},description:"The title of the Coachmark.",type:{name:"string"}}}};const Ce=`${y.prefix}--coachmark-stack`,W="CoachmarkStack",f=`${y.prefix}--coachmark-stack-element`,F={onClose:()=>{},theme:"light",portalTarget:"body"};let w=e.forwardRef(({children:o,className:t,onClose:C=F.onClose,description:i,media:q,navLinkLabels:L,portalTarget:E=F.portalTarget,closeButtonLabel:j,tagline:N,theme:x=F.theme,title:_,...I},A)=>{const l=r.useRef(null);te(()=>{l.current=E?(document==null?void 0:document.querySelector(E))??(document==null?void 0:document.querySelector("body")):document==null?void 0:document.querySelector("body")},[E]);const s=r.useRef(null),k=r.useRef([]),[c,m]=r.useState(!1),[d,h]=r.useState(0),[p,H]=r.useState(),ne=r.Children.toArray(o),P=r.useRef(void 0),ae=240,re=u=>{h(u)},T=r.useCallback(u=>{if(u){h(-1);const b=setTimeout(()=>{m(!1),C()},ae);return()=>clearTimeout(b)}else h(0)},[C]),D=r.useCallback(u=>{u.key==="Escape"&&T(d===0)},[T,d]);r.useEffect(()=>(document.addEventListener("keydown",D,!1),()=>{document.removeEventListener("keydown",D,!1)}),[D]);const oe={buttonProps:{tabIndex:0,"aria-expanded":c,onClick:()=>{m(!0)},onDoubleClick:()=>{m(!0)}},closeButtonProps:{onClick:()=>T(!1)},isOpen:c};r.useEffect(()=>(P.current=!0,()=>{P.current=!1}),[]),r.useEffect(()=>{setTimeout(()=>{s.current&&H(s.current.clientHeight+16)},0)},[s]),r.useEffect(()=>{const u=d-1;if(!p)return;if(s.current&&(s.current.style.height=`${p}px`),!c||u<0){s.current&&s.current.focus();return}const b=k.current[u].clientHeight;s.current&&(s.current.style.height=`${b}px`,k.current[u].focus())},[d,c,p]);const se=r.Children.map(ne,(u,b)=>{const ie=P.current?`${f}--is-mounted`:"";return e.createElement(fe,{key:b,ref:le=>{k.current[b]=le},kind:ye.STACKED,onClose:()=>T(!1),theme:x,fixedIsVisible:!1,className:B(f,ie,b===d-1&&`${f}--is-visible`,P.current&&`${f}--is-mounted`)},u)});return e.createElement(ge.Provider,{value:oe},e.createElement("div",{...I,className:B(Ce,`${y.prefix}--coachmark-overlay--stack`,t),ref:A,...ee(W)},e.createElement(we,{title:N,onClose:C}),e.createElement(O,{ref:s,className:B(`${y.prefix}--coachmark-overlay`,`${y.prefix}--coachmark-overlay__${x}`,f,d>0&&`${f}--is-stacked`,d>0&&`${f}--is-stacked__${x}`,c&&`${f}--is-visible`,P.current&&`${f}--is-mounted`),isOpen:c&&d<1,description:i,media:q,navLinkLabels:L,onClickNavItem:re,onClose:()=>{T(!0)},portalTarget:E,closeButtonLabel:j,title:_}),l!=null&&l.current?Z.createPortal(se,l==null?void 0:l.current):null))});w=y.checkComponentEnabled(w,W);w.displayName=W;w.propTypes={children:a.node.isRequired,className:a.string,closeButtonLabel:a.string,description:a.node.isRequired,media:a.oneOfType([a.shape({render:a.func}),a.shape({filePaths:a.arrayOf(a.string)})]),navLinkLabels:a.arrayOf(a.string.isRequired).isRequired,onClose:a.func,portalTarget:a.string,tagline:a.string.isRequired,theme:a.oneOf(["light","dark"]),title:a.string.isRequired};w.__docgenInfo={description:`Stacked coachmarks are used to call out specific functionality or concepts
within the UI that may not be intuitive but are important for the
user to gain understanding of the product's main value and discover new use cases.
This variant allows the stacking of multiple coachmark overlays to be displayed by interacting with the tagline.`,methods:[],displayName:"CoachmarkStack",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"CoachmarkStack should use a single CoachmarkOverlayElements component as a child.",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}},closeButtonLabel:{required:!1,tsType:{name:"string"},description:"The label for the button that will close the Stack",type:{name:"string"}},description:{required:!0,tsType:{name:"ReactNode"},description:"The description of the Coachmark.",type:{name:"node"}},media:{required:!1,tsType:{name:"union",raw:`| {
    render?: () => ReactNode;
  }
| {
    filePaths?: string[];
  }`,elements:[{name:"signature",type:"object",raw:`{
  render?: () => ReactNode;
}`,signature:{properties:[{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!1}}]}},{name:"signature",type:"object",raw:`{
  filePaths?: string[];
}`,signature:{properties:[{key:"filePaths",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]}}]},description:`The object describing an image in one of two shapes.

If a single media element is required, use \`{render}\`.

If a stepped animation is required, use \`{filePaths}\`.

@see {@link MEDIA_PROP_TYPE}.`,type:{name:"union",value:[{name:"shape",value:{render:{name:"func",required:!1}}},{name:"shape",value:{filePaths:{name:"arrayOf",value:{name:"string"},required:!1}}}]}},navLinkLabels:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The labels used to link to the stackable Coachmarks.",type:{name:"arrayOf",value:{name:"string"}}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function to call when the CoachmarkStack closes.",defaultValue:{value:"() => {}",computed:!1},type:{name:"func"}},portalTarget:{required:!1,tsType:{name:"string"},description:"Where in the DOM to render the stack.\nThe default is `document.body`.",defaultValue:{value:"'body'",computed:!1},type:{name:"string"}},tagline:{required:!0,tsType:{name:"string"},description:"The tagline title which will be fixed to the bottom right of the window and will serve as the display trigger.",type:{name:"string"}},theme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"Determines the theme of the component.",defaultValue:{value:"'light'",computed:!1},type:{name:"enum",value:[{value:"'light'",computed:!1},{value:"'dark'",computed:!1}]}},title:{required:!0,tsType:{name:"string"},description:"The title of the Coachmark.",type:{name:"string"}}}};function U(o){const t={a:"a",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...Q(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(t.h1,{id:"coachmarkstack",children:"CoachmarkStack"}),`
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
`,n.jsx(me,{children:n.jsx("div",{className:"CoachmarkBaseExampleUsage",children:n.jsx(de,{of:v})})}),`
`,n.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,n.jsx(ue,{})]})}function Ee(o={}){const{wrapper:t}={...Q(),...o.components};return t?n.jsx(t,{...o,children:n.jsx(U,{...o})}):U(o)}const xe=".docs-story div{transform:none}",tt={title:"Experimental/Onboarding/Coachmark/CoachmarkStack",component:w,tags:["autodocs"],argTypes:{children:{control:{type:null}},media:{control:{type:null},description:'Deprecated: Property replaced by "renderMedia"'},portalTarget:{control:{type:null}},theme:{control:{type:null}}},parameters:{styles:xe,docs:{page:Ee}}},Te=o=>{const t=ce();return e.createElement(w,{...o,theme:t},e.createElement(M,{closeButtonLabel:"Got it"},e.createElement(g,{title:"Short Coachmark",description:"As small as it gets."})),e.createElement(M,{closeButtonLabel:"Close",nextButtonText:"Next",previousButtonLabel:"Back"},e.createElement(g,{title:"Mid-height Coachmark",description:e.createElement(e.Fragment,null,"This should be about the same height as the base stack item.",e.createElement("br",null),e.createElement("br",null),"This is known as the enrichment phase. Enrichment supports you by emulating how an analyst would evaluate a finding—for example, by adding context, such as whether a certain piece of data is known to be malicious, or is linked..."),button:e.createElement(V,{href:"https://www.ibm.com"},"Learn more")}),e.createElement(g,{title:"Hello World",description:"Link opens in new tab.",button:e.createElement(V,{href:"https://www.ibm.com",target:"_blank"},"Learn more")})),e.createElement(M,{closeButtonLabel:"Done",nextButtonText:"Next",previousButtonLabel:"Back"},e.createElement(g,{title:"Tall Coachmark",description:"These alerts contain data gathered from your connected security systems."}),e.createElement(g,{title:"Alerts contain evidence, known as artifacts",description:"These help to determine whether the alert is good or bad. And as alerts are added to a case, they become findings."}),e.createElement(g,{title:"Findings are enriched with more information and context",description:e.createElement(e.Fragment,null,"This is known as the enrichment phase. Enrichment supports you by emulating how an analyst would evaluate a finding—for example, by adding context, such as whether a certain piece of data is known to be malicious, or is linked to a known threat.",e.createElement("br",null),e.createElement("br",null),"Lets",e.createElement("br",null),e.createElement("br",null),"make",e.createElement("br",null),e.createElement("br",null),"this",e.createElement("br",null),e.createElement("br",null),"one",e.createElement("br",null),e.createElement("br",null),"really",e.createElement("br",null),e.createElement("br",null),"tall.")}),e.createElement(g,{title:"Next, the correlation process takes place",description:"Based on the results of the enrichment process, findings that are potentially related are grouped together, and then evaluated."}),e.createElement(g,{title:"Between enrichment and correlation, the severity of a case is determined",description:"And once you know the severity, you can easily choose which case to pick up next."})))},v=Te.bind({});v.args={className:"myCoachmarkStack",closeButtonLabel:"Close",description:"This is an example of a description",title:"Example title",navLinkLabels:["Example 1","Example 2","Example 3"],onClose:()=>console.log("CLOSE"),tagline:"Why are there two types of severity scores?",portalTarget:'#root:not([hidden="true"]) .preview-position-fix'};var K,X,Y,G,J;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
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
}`,...(Y=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(J=(G=v.parameters)==null?void 0:G.docs)==null?void 0:J.description}}};const nt=["coachmarkStack"];export{nt as __namedExportsOrder,v as coachmarkStack,tt as default};
