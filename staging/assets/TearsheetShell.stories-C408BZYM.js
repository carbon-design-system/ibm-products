import{j as e,B as x}from"./settings-BiUEFdm2.js";import{r as s}from"./index-BwDkhjyp.js";import{r as A}from"./index-BONylQH5.js";import{s as E}from"./_storybook-styles-BHn2MbcW.js";import{T as h,d as z}from"./TearsheetShell-BtN3A38u.js";import{g as P}from"./props-helper-1oU9hECe.js";import"./deprecate-D9ms-jbM.js";import{S as D,a as L}from"./index-Bo7SW2KM.js";import{T as q}from"./TextInput-CjYtA_nO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-Dk74W0Oi.js";import"./events-Bq7WR1mU.js";import"./useResizeObserver-CYrpFlRY.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-Ckm8JaZ3.js";import"./index-DcAOwtUU.js";import"./ButtonSet-CqsYbwZH.js";import"./InlineLoading-DEQVZSgg.js";import"./bucket-5-BuK6y5Rd.js";import"./mergeRefs-CTUecegF.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-CuszVIVc.js";import"./index-gKY8typL.js";import"./index-DoBoZ-97.js";import"./LayerContext-DbU-6VX4.js";import"./usePortalTarget-CUzsWZah.js";import"./feature-flags-CaJ_YE9P.js";import"./index-DshjxXYm.js";import"./index-BO2nGe7b.js";import"./useFocus-CSvq-1pJ.js";import"./usePreviousValue-DDnp_zt4.js";import"./ActionSet-DPSyJhT2.js";import"./bucket-16-C-1D9aPX.js";import"./useNormalizedInputProps-DRpk_7sW.js";import"./Text-_TFgs5hl.js";import"./bucket-17-CArjO86K.js";import"./FormContext-C7kRVu4t.js";import"./useAnnouncer-MW4fVOqQ.js";const Re={title:"IBM Products/Internal/TearsheetShell",component:h,tags:["autodocs"],parameters:{controls:{expanded:!0},styles:E},argTypes:{...P(z),influencer:{control:{type:"boolean"}},portalTarget:{control:{disable:!0}},slug:{control:{type:"select",labels:{0:"No AI slug",1:"with AI Slug"},default:0},options:[0,1]}}},G="Close the tearsheet",O="client-class-1 client-class-2",y=e.jsx("div",{style:{padding:"50px",height:"400px"},children:Array.from({length:10},(n,t)=>({key:`Paragraph-${t}`})).map(({key:n})=>e.jsx("p",{children:"This is not really Lorem Ipsum but the spell checker did not like the previous text with it's non-words which is why this unwieldy sentence, should one choose to call it that, here."},n))}),F=e.jsx(D,{className:"slug-container",size:"xs",children:e.jsx(L,{children:e.jsxs("div",{children:[e.jsx("p",{className:"secondary",children:"AI Explained"}),e.jsx("h1",{children:"84%"}),e.jsx("p",{className:"secondary bold",children:"Confidence score"}),e.jsx("p",{className:"secondary",children:"This is not really Lorem Ipsum but the spell checker did not like the previous text with it's non-words which is why this unwieldy sentence, should one choose to call it that, here."}),e.jsx("hr",{}),e.jsx("p",{className:"secondary",children:"Model type"}),e.jsx("p",{className:"bold",children:"Foundation model"})]})})}),$=({influencer:n,open:t,slug:o,...a},r)=>{const f=s.useRef(),[l,p]=s.useState(r.viewMode!=="docs"&&t),[i,g]=s.useState(!1);return s.useEffect(()=>g(i||l),[l,i]),e.jsxs("div",{ref:f,children:[e.jsx(x,{onClick:()=>p(!0),children:`${i?"Reopen":"Open"} the ${r.component.displayName}`}),e.jsx(h,{className:O,...a,influencer:n&&e.jsx("div",{className:"tearsheet-stories__dummy-content-block",children:"Influencer"}),open:l,onClose:()=>p(!1),slug:o&&F,title:"Tearsheet title",children:y})]})},H=({influencer:n,open:t,slug:o,...a},r)=>{const f=s.useRef(),[l,p]=s.useState(r.viewMode!=="docs"&&t),[i,g]=s.useState(!1);s.useEffect(()=>g(i||l),[l,i]);const b=s.useRef();return e.jsxs("div",{ref:f,children:[e.jsx(x,{ref:b,onClick:()=>p(!0),children:`${i?"Reopen":"Open"} the ${r.component.displayName}`})," ",e.jsx(h,{className:O,...a,influencer:n&&e.jsx("div",{className:"tearsheet-stories__dummy-content-block",children:"Influencer"}),open:l,onClose:()=>p(!1),slug:o&&F,title:"Tearsheet title",launcherButtonRef:b,children:y})]})},u=$.bind({});u.args={closeIconDescription:G,height:"normal",open:!0,size:"narrow"};const m=$.bind({});m.args={size:"wide"};const d=H.bind({});d.args={size:"wide"};function S({open:n,className:t,styleTransform:o}){return n&&A.createPortal(e.jsx("div",{className:t,style:{position:"absolute",top:"25%",left:"50%",transform:o,border:"solid 1px",zIndex:"9999",backgroundColor:"white"},children:e.jsx(q,{type:"text",style:{margin:"1rem"},labelText:`This is a floating DOM element with classname "${t}" added outside of the tearsheet DOM element`,placeholder:"Focus and enter something"})}),document.body)}const c=({open:n,...t},o)=>{const[a,r]=s.useState(o.viewMode!=="docs"&&n);return e.jsxs(e.Fragment,{children:[e.jsx(x,{onClick:()=>r(!0),children:`Open the ${o.component.displayName}`}),e.jsxs(h,{...t,open:a,onClose:()=>r(!1),hasCloseIcon:!0,className:O,size:"wide",actions:[{kind:"primary",label:"Primary"}],children:[y,e.jsx(S,{open:a,className:"floating-menu",styleTransform:"translate(-50%)"}),e.jsx(S,{open:a,className:"another-floating-menu",styleTransform:"translate(-50%, 100%)"})]})]})};c.args={selectorsFloatingMenus:[".floating-menu"],open:!0};c.__docgenInfo={description:"",methods:[],displayName:"FocusOnFloatingMenu"};var N,T,j;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`({
  influencer,
  open: _open,
  slug,
  ...args
}, context) => {
  const ref = useRef();
  const [open, setOpen] = useState(context.viewMode !== 'docs' && _open);
  const [beenOpen, setBeenOpen] = useState(false);
  useEffect(() => setBeenOpen(beenOpen || open), [open, beenOpen]);
  return <div ref={ref}>
      <Button onClick={() => setOpen(true)}>
        {\`\${beenOpen ? 'Reopen' : 'Open'} the \${context.component.displayName}\`}
      </Button>
      <TearsheetShell className={className} {...args} influencer={influencer && <div className="tearsheet-stories__dummy-content-block">
              Influencer
            </div>} open={open} onClose={() => setOpen(false)} slug={slug && sampleSlug} title={'Tearsheet title'}>
        {dummyContent}
      </TearsheetShell>
    </div>;
}`,...(j=(T=u.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var v,w,C;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`({
  influencer,
  open: _open,
  slug,
  ...args
}, context) => {
  const ref = useRef();
  const [open, setOpen] = useState(context.viewMode !== 'docs' && _open);
  const [beenOpen, setBeenOpen] = useState(false);
  useEffect(() => setBeenOpen(beenOpen || open), [open, beenOpen]);
  return <div ref={ref}>
      <Button onClick={() => setOpen(true)}>
        {\`\${beenOpen ? 'Reopen' : 'Open'} the \${context.component.displayName}\`}
      </Button>
      <TearsheetShell className={className} {...args} influencer={influencer && <div className="tearsheet-stories__dummy-content-block">
              Influencer
            </div>} open={open} onClose={() => setOpen(false)} slug={slug && sampleSlug} title={'Tearsheet title'}>
        {dummyContent}
      </TearsheetShell>
    </div>;
}`,...(C=(w=m.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var _,B,R;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`({
  influencer,
  open: _open,
  slug,
  ...args
}, context) => {
  const ref = useRef();
  const [open, setOpen] = useState(context.viewMode !== 'docs' && _open);
  const [beenOpen, setBeenOpen] = useState(false);
  useEffect(() => setBeenOpen(beenOpen || open), [open, beenOpen]);
  const buttonRef = useRef();
  return <div ref={ref}>
      <Button ref={buttonRef} onClick={() => setOpen(true)}>
        {\`\${beenOpen ? 'Reopen' : 'Open'} the \${context.component.displayName}\`}
      </Button>{' '}
      <TearsheetShell className={className} {...args} influencer={influencer && <div className="tearsheet-stories__dummy-content-block">
              Influencer
            </div>} open={open} onClose={() => setOpen(false)} slug={slug && sampleSlug} title={'Tearsheet title'} launcherButtonRef={buttonRef}>
        {dummyContent}
      </TearsheetShell>
    </div>;
}`,...(R=(B=d.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var k,I,M;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`({
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
}`,...(M=(I=c.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};const ke=["AllAttributesSet","NoAttributesSet","ReturnFocusToOpenButton","FocusOnFloatingMenu"];export{u as AllAttributesSet,c as FocusOnFloatingMenu,m as NoAttributesSet,d as ReturnFocusToOpenButton,ke as __namedExportsOrder,Re as default};
