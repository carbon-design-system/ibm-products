import{r as s,e}from"./index-DtHxqM--.js";import{r as $}from"./index-DgLvjnYm.js";import{s as D}from"./_storybook-styles-mW20BCXf.js";import{T as f,d as z}from"./TearsheetShell-Crph82d4.js";import{g as L}from"./props-helper-3VCN3cvm.js";import"./index-CMVdkQrl.js";import{B as b}from"./settings-C3kz8lqM.js";import{T as P}from"./TextInput-CixU1YEY.js";import{T as W,a as j,b as q,A as G,c as H}from"./index-D5LR258U.js";import{e as J}from"./bucket-9-m0gEOM1f.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CiYgQLeJ.js";import"./useResizeObserver-DtwIjblY.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-DK_gDe0c.js";import"./index-ly07KqNH.js";import"./LayerContext-B9CO-6mR.js";import"./clamp--00YEiB8.js";import"./ButtonSet-S29aEq84.js";import"./InlineLoading-C_FY6vWy.js";import"./bucket-6-CRocNvF-.js";import"./mergeRefs-CTUecegF.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-4QzkQnOM.js";import"./events-OVwOsPzJ.js";import"./index-BUpfIj5_.js";import"./Wrap-EeCeAlef.js";import"./usePortalTarget-BpuhspP7.js";import"./feature-flags-CgeLICHA.js";import"./index-BLKsqoyU.js";import"./useFocus-WYpTfz8b.js";import"./usePreviousValue-CuNkkQo9.js";import"./useIsomorphicEffect-DztsuiUB.js";import"./ActionSet-CwOjg9U4.js";import"./index-BLvAv8yb.js";import"./useNormalizedInputProps-DMHlP-q8.js";import"./Text-DeLhjZ72.js";import"./bucket-18-xYgoy0Nr.js";import"./FormContext-C4Nuixum.js";import"./bucket-17-BInI-cSl.js";const Fe={title:"IBM Products/Internal/TearsheetShell",component:f,tags:["autodocs"],parameters:{controls:{expanded:!0},styles:D},argTypes:{...L(z),influencer:{control:{type:"boolean"}},portalTarget:{control:{disable:!0}},decorator:{control:{type:"select",labels:{0:"No AI Label",1:"with AI Label",2:"With non AI Label component"},default:0},options:[0,1,2]}}},K="Close the tearsheet",g="client-class-1 client-class-2",y=e.createElement("div",{style:{padding:"50px",height:"400px"}},Array.from({length:10},(t,n)=>({key:`Paragraph-${n}`})).map(({key:t})=>e.createElement("p",{key:t},"This is not really Lorem Ipsum but the spell checker did not like the previous text with it's non-words which is why this unwieldy sentence, should one choose to call it that, here."))),A=t=>{switch(t){case 1:return e.createElement(G,{className:"decorator-container",size:"xs"},e.createElement(H,null,e.createElement("div",null,e.createElement("p",{className:"secondary"},"AI Explained"),e.createElement("h1",null,"84%"),e.createElement("p",{className:"secondary bold"},"Confidence score"),e.createElement("p",{className:"secondary"},"This is not really Lorem Ipsum but the spell checker did not like the previous text with it's non-words which is why this unwieldy sentence, should one choose to call it that, here."),e.createElement("hr",null),e.createElement("p",{className:"secondary"},"Model type"),e.createElement("p",{className:"bold"},"Foundation model"))));case 2:return e.createElement(W,null,e.createElement(j,{label:"Additional information"},e.createElement(J,null)),e.createElement(q,null,e.createElement("p",null,"Custom content here")));default:return}},F=({influencer:t,open:n,decorator:o,...a},r)=>{const h=s.useRef(void 0),[l,p]=s.useState(r.viewMode!=="docs"&&n),[c,O]=s.useState(!1);return s.useEffect(()=>O(c||l),[l,c]),e.createElement("div",{ref:h},e.createElement(b,{onClick:()=>p(!0)},`${c?"Reopen":"Open"} the ${r.component.displayName}`),e.createElement(f,{className:g,...a,influencer:t&&e.createElement("div",{className:"tearsheet-stories__dummy-content-block"},"Influencer"),open:l,onClose:()=>p(!1),decorator:o&&A(o),title:"Tearsheet title"},y))},Q=({influencer:t,open:n,decorator:o,...a},r)=>{const h=s.useRef(void 0),[l,p]=s.useState(r.viewMode!=="docs"&&n),[c,O]=s.useState(!1);s.useEffect(()=>O(c||l),[l,c]);const E=s.useRef(void 0);return e.createElement("div",{ref:h},e.createElement(b,{ref:E,onClick:()=>p(!0)},`${c?"Reopen":"Open"} the ${r.component.displayName}`)," ",e.createElement(f,{className:g,...a,influencer:t&&e.createElement("div",{className:"tearsheet-stories__dummy-content-block"},"Influencer"),open:l,onClose:()=>p(!1),decorator:o&&A(o),title:"Tearsheet title",launcherButtonRef:E},y))},m=F.bind({});m.args={closeIconDescription:K,height:"normal",open:!0,size:"narrow"};const u=F.bind({});u.args={size:"wide"};const d=Q.bind({});d.args={size:"wide"};function T({open:t,className:n,styleTransform:o}){return t&&$.createPortal(e.createElement("div",{className:n,style:{position:"absolute",top:"25%",left:"50%",transform:o,border:"solid 1px",zIndex:"9999",backgroundColor:"white"}},e.createElement(P,{type:"text",style:{margin:"1rem"},labelText:`This is a floating DOM element with classname "${n}" added outside of the tearsheet DOM element`,placeholder:"Focus and enter something"})),document.body)}const i=({open:t,...n},o)=>{const[a,r]=s.useState(o.viewMode!=="docs"&&t);return e.createElement(e.Fragment,null,e.createElement(b,{onClick:()=>r(!0)},`Open the ${o.component.displayName}`),e.createElement(f,{...n,open:a,onClose:()=>r(!1),hasCloseIcon:!0,className:g,size:"wide",actions:[{kind:"primary",label:"Primary"}]},y,e.createElement(T,{open:a,className:"floating-menu",styleTransform:"translate(-50%)"}),e.createElement(T,{open:a,className:"another-floating-menu",styleTransform:"translate(-50%, 100%)"})))};i.args={selectorsFloatingMenus:[".floating-menu"],open:!0};i.__docgenInfo={description:"",methods:[],displayName:"FocusOnFloatingMenu"};var N,v,S;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`({
  influencer,
  open: _open,
  decorator,
  ...args
}, context) => {
  const ref = useRef(undefined);
  const [open, setOpen] = useState(context.viewMode !== 'docs' && _open);
  const [beenOpen, setBeenOpen] = useState(false);
  useEffect(() => setBeenOpen(beenOpen || open), [open, beenOpen]);
  return <div ref={ref}>
      <Button onClick={() => setOpen(true)}>
        {\`\${beenOpen ? 'Reopen' : 'Open'} the \${context.component.displayName}\`}
      </Button>
      <TearsheetShell className={className} {...args} influencer={influencer && <div className="tearsheet-stories__dummy-content-block">
              Influencer
            </div>} open={open} onClose={() => setOpen(false)} decorator={decorator && sampleDecorator(decorator)} title={'Tearsheet title'}>
        {dummyContent}
      </TearsheetShell>
    </div>;
}`,...(S=(v=m.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var C,w,x;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`({
  influencer,
  open: _open,
  decorator,
  ...args
}, context) => {
  const ref = useRef(undefined);
  const [open, setOpen] = useState(context.viewMode !== 'docs' && _open);
  const [beenOpen, setBeenOpen] = useState(false);
  useEffect(() => setBeenOpen(beenOpen || open), [open, beenOpen]);
  return <div ref={ref}>
      <Button onClick={() => setOpen(true)}>
        {\`\${beenOpen ? 'Reopen' : 'Open'} the \${context.component.displayName}\`}
      </Button>
      <TearsheetShell className={className} {...args} influencer={influencer && <div className="tearsheet-stories__dummy-content-block">
              Influencer
            </div>} open={open} onClose={() => setOpen(false)} decorator={decorator && sampleDecorator(decorator)} title={'Tearsheet title'}>
        {dummyContent}
      </TearsheetShell>
    </div>;
}`,...(x=(w=u.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var _,B,I;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`({
  influencer,
  open: _open,
  decorator,
  ...args
}, context) => {
  const ref = useRef(undefined);
  const [open, setOpen] = useState(context.viewMode !== 'docs' && _open);
  const [beenOpen, setBeenOpen] = useState(false);
  useEffect(() => setBeenOpen(beenOpen || open), [open, beenOpen]);
  const buttonRef = useRef(undefined);
  return <div ref={ref}>
      <Button ref={buttonRef} onClick={() => setOpen(true)}>
        {\`\${beenOpen ? 'Reopen' : 'Open'} the \${context.component.displayName}\`}
      </Button>{' '}
      <TearsheetShell className={className} {...args} influencer={influencer && <div className="tearsheet-stories__dummy-content-block">
              Influencer
            </div>} open={open} onClose={() => setOpen(false)} decorator={decorator && sampleDecorator(decorator)} title={'Tearsheet title'} launcherButtonRef={buttonRef}>
        {dummyContent}
      </TearsheetShell>
    </div>;
}`,...(I=(B=d.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var R,k,M;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`({
  open: _open,
  ...args
}, context) => {
  const [open, setOpen] = useState(context.viewMode !== 'docs' && _open);
  return <>
      <Button onClick={() => setOpen(true)}>
        {\`Open the \${context.component.displayName}\`}
      </Button>
      <TearsheetShell {...args} open={open} onClose={() => setOpen(false)} hasCloseIcon className={className} size="wide" actions={[{
      kind: 'primary',
      label: 'Primary'
    }]}>
        {dummyContent}
        <FloatingMenu open={open} className="floating-menu" styleTransform="translate(-50%)" />
        <FloatingMenu open={open} className="another-floating-menu" styleTransform="translate(-50%, 100%)" />
      </TearsheetShell>
    </>;
}`,...(M=(k=i.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};const $e=["AllAttributesSet","NoAttributesSet","ReturnFocusToOpenButton","FocusOnFloatingMenu"];export{m as AllAttributesSet,i as FocusOnFloatingMenu,u as NoAttributesSet,d as ReturnFocusToOpenButton,$e as __namedExportsOrder,Fe as default};
