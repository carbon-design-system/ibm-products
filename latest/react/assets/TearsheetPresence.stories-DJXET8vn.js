var U=Object.defineProperty;var t=(n,o)=>U(n,"name",{value:o,configurable:!0});import{R as e,aj as Y,L as d,r as s,K as A}from"./iframe-BJ3oD3I6.js";import{A as q}from"./index-CBMlVf8R.js";import{B as x}from"./ButtonSet-DHBPfsAD.js";import{T as J,a as Q,b as V}from"./index-FQgPJb5I.js";import{A as X,a as Z}from"./index-CfJuWsKG.js";import{F as ee}from"./Form-BNjHdqaV.js";import{S as I,H as F}from"./index-Vu7ywWcs.js";import{D as te}from"./Dropdown-Bex3-6T5.js";import{F as ne}from"./FormGroup-DZPOnPUC.js";import{T as v}from"./TextInput-bBELoCr1.js";import{T as C,d as oe}from"./Tearsheet-DvCJl91p.js";import{a as re,b as ae,c as se,s as ie}from"./_storybook-styles-Dkwn2GAg.js";import{g as le}from"./props-helper-CK5SYOfC.js";import{T as ce}from"./TearsheetNarrow-Cnd1EHyn.js";import{a as w}from"./TearsheetShell-DWRLA0PE.js";import{T as D}from"./TruncatedText-CyEi4D8n.js";import{b as pe}from"./bucket-11-0z2EjG9c.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-21-_gQwUv_z.js";import"./bucket-20-Vj6m3ER2.js";import"./defaultItemToString-DDHghiWu.js";import"./downshift.esm-Dw2SeZdp.js";import"./FormContext-v-R-meOx.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./useNormalizedInputProps-Bro2iP2D.js";import"./Text-CKFCb-K0.js";import"./useNoInteractiveChildrenForLabel-BAYLBxXJ.js";import"./hasHelperText-CcJ_VphT.js";import"./getAnnouncement-B0n4vXaG.js";import"./devtools-BnZ9dupT.js";import"./useResizeObserver-BZ8dhILb.js";import"./useIsomorphicEffect-hpa23fp6.js";import"./getNodeTextContent-CjFansOq.js";import"./index-B44qGmzH.js";import"./LayerContext-kZMSrgAm.js";import"./clamp-ekNJC_Xv.js";import"./ComposedModal-BXLb-sEZ.js";import"./isTopmostVisibleModal-DvUtpNhe.js";import"./InlineLoading-DnTQB44j.js";import"./bucket-7-BtrbsRa_.js";import"./wrapFocus-BG8cibfI.js";import"./Wrap-A1zli8WP.js";import"./usePortalTarget-DuEDzpGP.js";import"./index-cqtLY_Mv.js";import"./useFocus-B2sHbBnn.js";import"./usePresence-BeU_mIvQ.js";import"./useId-kRdbt123.js";import"./uuidv4-Fbcg8Vng.js";import"./usePreviousValue-iHNgpNoC.js";import"./ActionSet-BqX89kL9.js";const M=t(()=>e.createElement(Y,{deprecationNotice:"This component is deprecated and will be removed in a future major version. The composable replacement (`preview__Tearsheet`) will be promoted to stable in `@carbon/react` at v12. Please migrate to [preview__Tearsheet](https://ibm-products.carbondesignsystem.com/?path=/docs/preview-tearsheet--overview#migration-from-legacy-tearsheet).",blocks:[{title:"Tearsheet",story:f,description:`
Tearsheet supports the \`enable-presence\` feature flag. When enabled, Tearsheet will not mount until it's opened and unmount when it's closed. This helps to stay in sync with the React lifecycle.

This means that:

- The DOM no longer includes Tearsheet and its children in the closed state
- Tearsheet, all of its children and their hooks will mount/unmount on open/close
- Enter & exit animations change from CSS transitions to CSS animations

Note: Only Tearsheet and its children are unmounted/mounted. Use TearsheetPresence or withTearsheetPresence to shift the presence boundary to a higher level, if necessary.

Note: If your animation appears to be interrupted, this is likely caused by the Tearsheet portal target’s current limitations, which can trigger a re-mount after the initial render. As a workaround, explicitly set the \`portalTarget\` for your Tearsheet.`,source:{language:"jsx",code:`
// Option A: opt-in via feature flag
<FeatureFlags enablePresence>
    <Tearsheet {...args} open={open} />
</FeatureFlags>

// Option B: opt-in via tearsheet presence
<TearsheetPresence open={open}>
    <MyTearsheet {...args} />
</TearsheetPresence>

// Option C: opt-in via higher-order function
const MyTearsheet = withTearsheetPresence(({ onSubmit }) => {
  const [foo, setFoo] = useState();
  return <Tearsheet
  {...args}
  actions={[{
    kind: 'primary',
    label: 'Submit',
    onClick: () => {
      onSubmit(foo);
    }
  }]}
  />;
})

<MyTearsheet open={open} />
`}}]}),"DocsPage");M.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:B}=__STORYBOOK_MODULE_ACTIONS__,ht={title:"Deprecated/Tearsheet/Feature Flags/Presence",component:C,tags:["autodocs"],parameters:{styles:ie,layout:"fullscreen",docs:{page:M}},decorators:[n=>e.createElement(q,{type:"deprecation-notice",text:e.createElement("div",null,"This component is deprecated and will be removed in a future major version. The composable replacement (",e.createElement("code",null,"preview__Tearsheet"),") will be promoted to stable in ",e.createElement("code",null,"@carbon/react")," at v12. Please migrate to"," ",e.createElement("a",{href:"https://ibm-products.carbondesignsystem.com/?path=/docs/preview-tearsheet--overview#migration-from-legacy-tearsheet"},"preview__Tearsheet"),".")},n())],argTypes:{...le(oe),actions:{control:{type:"select",labels:se},options:ae,mapping:re({primary:"Replace",danger:"Delete",secondary:"Back",secondary2:"Keep Both",dangerGhost:"Abort",ghost:"Cancel"},B)},description:{control:{type:"select",labels:{0:"With plain String",1:"With TruncatedText and 1 line",2:"With TruncatedText and 2 lines"},default:0},description:"A description of the flow, displayed in the header area of the tearsheet.\n Note: `TruncatedText` can be passed as a React node to apply custom text formatting, including ellipsis truncation and a definition tooltip when the content is too long.",options:[0,1,2],mapping:{0:"This is a description for the tearsheet, providing an opportunity to describe the flow over a couple of lines in the header of the tearsheet.",1:e.createElement(D,{autoAlign:!0,lines:1,tooltipDirection:"bottom",value:"This is a description for the tearsheet, providing an opportunity to describe the flow over a couple of lines in the header of the tearsheet."}),2:e.createElement(D,{autoAlign:!0,lines:2,tooltipDirection:"bottom",value:"This is a description for the tearsheet, providing an opportunity to describe the flow over a couple of lines in the header of the tearsheet."})}},headerActions:{control:{type:"select",labels:{0:"none",1:"drop-down",2:"buttons"}},options:[0,1,2],mapping:{0:null,1:e.createElement(te,{id:"tss-had",label:"Choose an option",titleText:"Choose an option",items:["option 1","option 2","option 3","option 4"]}),2:e.createElement(x,null,e.createElement(d,{kind:"secondary",size:"sm",style:{width:"initial"}},"Secondary"),e.createElement(d,{kind:"primary",size:"sm",style:{width:"initial"}},"Primary"))}},label:{control:{type:"text"}},title:{control:{type:"text"}},influencer:{control:{disable:!0}},onClose:{control:{disable:!0}},navigation:{control:{disable:!0}},open:{control:{disable:!0}},portalTarget:{control:{disable:!0}},decorator:{control:{type:"select",labels:{0:"No AI Label",1:"with AI Label",2:"With non AI Label component"},default:0},description:"Optional prop that allows you to pass any component.",options:[0,1,2]},slug:{control:{type:"select",labels:{0:"No AI Slug",1:"with AI Slug"},default:0},description:'Deprecated: Property replaced by "decorator"',options:[0,1]}}},S="Close the tearsheet",me=e.createElement(I,{className:"tearsheet-stories__dummy-content-block"},e.createElement(F,null,"Influencer heading"),e.createElement("p",null,"Influencer content")),de="The label of the tearsheet",R=e.createElement(I,{className:"tearsheet-stories__dummy-content-block"},e.createElement(F,null,"Main content heading"),e.createElement(ee,null,e.createElement("p",null,"Main content"),e.createElement(ne,{legendId:"tearsheet-form-group",legendText:"FormGroup Legend"},e.createElement(v,{id:"tss-ft1",labelText:"Enter an important value here",style:{marginBottom:"1em"}}),e.createElement(v,{id:"tss-ft2",labelText:"Here is an entry field:",style:{marginBottom:"1em"}})))),L="Title of the tearsheet",c=t(n=>{switch(n){case 1:return e.createElement(X,{className:"decorator-container",size:"xs"},e.createElement(Z,null,e.createElement("div",null,e.createElement("p",{className:"secondary"},"AI Explained"),e.createElement("h1",null,"84%"),e.createElement("p",{className:"secondary bold"},"Confidence score"),e.createElement("p",{className:"secondary"},"This is not really Lorem Ipsum but the spell checker did not like the previous text with it's non-words which is why this unwieldy sentence, should one choose to call it that, here."),e.createElement("hr",null),e.createElement("p",{className:"secondary"},"Model type"),e.createElement("p",{className:"bold"},"Foundation model"))));case 2:return e.createElement(J,null,e.createElement(Q,{label:"Additional information"},e.createElement(pe,null)),e.createElement(V,null,e.createElement("p",null,"Custom content here")));default:return}},"sampleDecorator"),ue=t(({decorator:n,slug:o,actions:p,...l})=>{const[u,i]=s.useState(!1),y=p&&Array.prototype.map.call(p,r=>{if(r.label==="Cancel"){const h=r.onClick;return{...r,onClick:t(m=>{i(!1),h(m)},"onClick")}}return r});return e.createElement(e.Fragment,null,e.createElement("style",null,`.${A.prefix}--tearsheet { opacity: 0 }`,";"),e.createElement("main",null,e.createElement(d,{onClick:t(()=>i(!0),"onClick")},"Open Tearsheet")),e.createElement(w,{open:u},e.createElement(C,{...l,actions:y,onClose:t(()=>i(!1),"onClose"),decorator:n&&c(n),slug:o&&c(o)},R)))},"Template"),he=t(({decorator:n,slug:o,actions:p,...l})=>{const[u,i]=s.useState(!1),y=p&&Array.prototype.map.call(p,r=>{if(r.label==="Cancel"){const h=r.onClick;return{...r,onClick:t(m=>{i(!1),h(m)},"onClick")}}return r});return e.createElement(e.Fragment,null,e.createElement("style",null,`.${A.prefix}--tearsheet { opacity: 0 }`,";"),e.createElement("main",null,e.createElement(d,{onClick:t(()=>i(!0),"onClick")},"Open Tearsheet")),e.createElement(w,{open:u},e.createElement(ce,{...l,actions:y,onClose:t(()=>i(!1),"onClose"),decorator:n&&c(n),slug:o&&c(o)},R)))},"Narrow"),fe=t(({actions:n,decorator:o,description:p,slug:l,...u},i)=>{const[y,r]=s.useState(!1),[h,m]=s.useState(!1),[O,b]=s.useState(!1),z=s.useRef(void 0),_=s.useRef(void 0),P=s.useRef(void 0),N=s.useRef(void 0),$=s.cloneElement(p,{id:"truncated-text-01"}),W=s.cloneElement(p,{id:"truncated-text-02"}),j=s.cloneElement(p,{id:"truncated-text-03"}),G=Array.prototype.map.call(n,a=>{if(a.label==="Cancel"){const E=a.onClick;return{...a,onClick:t(k=>{r(!1),E(k)},"onClick")}}return a}),H=Array.prototype.map.call(n,a=>{if(a.label==="Cancel"){const E=a.onClick;return{...a,onClick:t(k=>{m(!1),E(k)},"onClick")}}return a}),K=Array.prototype.map.call(n,a=>{if(a.label==="Cancel"){const E=a.onClick;return{...a,onClick:t(k=>{b(!1),E(k)},"onClick")}}return a});return s.useEffect(()=>{setTimeout(()=>{r(i.viewMode!=="docs"),m(i.viewMode!=="docs"),b(i.viewMode!=="docs")},0)},[]),e.createElement(e.Fragment,null,e.createElement("style",null,`.${A.prefix}--tearsheet { opacity: 0 }`,";"),e.createElement("div",{style:{height:"3rem"},"data-reserve-space":"for toggle buttons"}),e.createElement("main",null,e.createElement(x,{style:{display:"flex",position:"fixed",top:0,left:0,zIndex:1e4}},e.createElement(d,{onClick:t(()=>r(!y),"onClick"),ref:_},"Toggle tearsheet 1"),e.createElement(d,{onClick:t(()=>m(!h),"onClick")},"Toggle tearsheet 2"),e.createElement(d,{onClick:t(()=>b(!O),"onClick")},"Toggle tearsheet 3"))),e.createElement("div",{ref:z},e.createElement(w,{open:y},e.createElement(C,{...u,description:$,actions:G,headerActions:e.createElement(x,null,e.createElement(d,{kind:"primary",size:"sm",style:{width:"initial"},onClick:t(()=>m(!0),"onClick"),disabled:h,ref:P},"Open tearsheet 2")),title:"Tearsheet 1",onClose:t(()=>r(!1),"onClose"),selectorPrimaryFocus:"#stacked-input-1",decorator:o&&c(o),slug:l&&c(l),launcherButtonRef:_},e.createElement("div",{className:"tearsheet-stories__dummy-content-block"},"Main content 1",e.createElement(v,{id:"stacked-input-1",labelText:"Enter an important value here"})))),e.createElement(w,{open:h},e.createElement(C,{...u,description:W,actions:H,headerActions:e.createElement(x,null,e.createElement(d,{kind:"primary",size:"sm",style:{width:"initial"},onClick:t(()=>b(!0),"onClick"),disabled:O,ref:N},"Open tearsheet 3")),title:"Tearsheet 2",onClose:t(()=>m(!1),"onClose"),selectorPrimaryFocus:"#stacked-input-2",decorator:o&&c(o),slug:l&&c(l),launcherButtonRef:P},e.createElement("div",{className:"tearsheet-stories__dummy-content-block"},"Main content 2",e.createElement(v,{id:"stacked-input-2",labelText:"Enter an important value here"})))),e.createElement(w,{open:O},e.createElement(C,{...u,description:j,actions:K,title:"Tearsheet 3",onClose:t(()=>b(!1),"onClose"),selectorPrimaryFocus:"#stacked-input-3",decorator:o&&c(o),slug:l&&c(l),launcherButtonRef:N},e.createElement("div",{className:"tearsheet-stories__dummy-content-block"},"Main content 3",e.createElement(v,{id:"stacked-input-3",labelText:"Enter an important value here"}))))))},"StackedTemplate"),f=ue.bind({});f.storyName="Tearsheet";f.args={closeIconDescription:S,description:2,onClose:B("onClose called"),title:L,actions:7};const g=he.bind({});g.storyName="Narrow";g.args={closeIconDescription:S,description:2,onClose:B("onClose called"),title:L,actions:7};const T=fe.bind({});T.storyName="Stacking tearsheets";T.args={closeIconDescription:S,description:2,height:"lower",influencer:me,label:de,actions:7};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`({
  decorator,
  slug,
  actions,
  ...args
}) => {
  const [open, setOpen] = useState(false);
  const wiredActions = actions && Array.prototype.map.call(actions, action => {
    if (action.label === 'Cancel') {
      const previousClick = action.onClick;
      return {
        ...action,
        onClick: evt => {
          setOpen(false);
          previousClick(evt);
        }
      };
    }
    return action;
  });
  return <>
      <style>{\`.\${pkg.prefix}--tearsheet { opacity: 0 }\`};</style>
      <main>
        <Button onClick={() => setOpen(true)}>Open Tearsheet</Button>
      </main>
      <TearsheetPresence open={open}>
        <Tearsheet {...args} actions={wiredActions} onClose={() => setOpen(false)} decorator={decorator && sampleDecorator(decorator)} slug={slug && sampleDecorator(slug)}>
          {mainContent}
        </Tearsheet>
      </TearsheetPresence>
    </>;
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`({
  decorator,
  slug,
  actions,
  ...args
}) => {
  const [open, setOpen] = useState(false);
  const wiredActions = actions && Array.prototype.map.call(actions, action => {
    if (action.label === 'Cancel') {
      const previousClick = action.onClick;
      return {
        ...action,
        onClick: evt => {
          setOpen(false);
          previousClick(evt);
        }
      };
    }
    return action;
  });
  return <>
      <style>{\`.\${pkg.prefix}--tearsheet { opacity: 0 }\`};</style>
      <main>
        <Button onClick={() => setOpen(true)}>Open Tearsheet</Button>
      </main>
      <TearsheetPresence open={open}>
        <TearsheetNarrow {...args} actions={wiredActions} onClose={() => setOpen(false)} decorator={decorator && sampleDecorator(decorator)} slug={slug && sampleDecorator(slug)}>
          {mainContent}
        </TearsheetNarrow>
      </TearsheetPresence>
    </>;
}`,...g.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`({
  actions,
  decorator,
  description,
  slug,
  ...args
}, context) => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const ref = useRef(undefined);
  const openButton1 = useRef(undefined);
  const openButton2 = useRef(undefined);
  const openButton3 = useRef(undefined);
  const description1 = cloneElement(description, {
    id: 'truncated-text-01'
  });
  const description2 = cloneElement(description, {
    id: 'truncated-text-02'
  });
  const description3 = cloneElement(description, {
    id: 'truncated-text-03'
  });
  const wiredActions1 = Array.prototype.map.call(actions, action => {
    if (action.label === 'Cancel') {
      const previousClick = action.onClick;
      return {
        ...action,
        onClick: evt => {
          setOpen1(false);
          previousClick(evt);
        }
      };
    }
    return action;
  });
  const wiredActions2 = Array.prototype.map.call(actions, action => {
    if (action.label === 'Cancel') {
      const previousClick = action.onClick;
      return {
        ...action,
        onClick: evt => {
          setOpen2(false);
          previousClick(evt);
        }
      };
    }
    return action;
  });
  const wiredActions3 = Array.prototype.map.call(actions, action => {
    if (action.label === 'Cancel') {
      const previousClick = action.onClick;
      return {
        ...action,
        onClick: evt => {
          setOpen3(false);
          previousClick(evt);
        }
      };
    }
    return action;
  });
  useEffect(() => {
    setTimeout(() => {
      setOpen1(context.viewMode !== 'docs');
      setOpen2(context.viewMode !== 'docs');
      setOpen3(context.viewMode !== 'docs');
    }, 0);
  }, []);
  return <>
      <style>{\`.\${pkg.prefix}--tearsheet { opacity: 0 }\`};</style>
      <div style={{
      height: '3rem'
    }} data-reserve-space="for toggle buttons" />
      <main>
        <ButtonSet style={{
        display: 'flex',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 10000
      }}>
          <Button onClick={() => setOpen1(!open1)} ref={openButton1}>
            Toggle&nbsp;tearsheet&nbsp;1
          </Button>
          <Button onClick={() => setOpen2(!open2)}>
            Toggle&nbsp;tearsheet&nbsp;2
          </Button>
          <Button onClick={() => setOpen3(!open3)}>
            Toggle&nbsp;tearsheet&nbsp;3
          </Button>
        </ButtonSet>
      </main>
      <div ref={ref}>
        <TearsheetPresence open={open1}>
          <Tearsheet {...args} description={description1} actions={wiredActions1} headerActions={<ButtonSet>
                <Button kind="primary" size="sm" style={{
            width: 'initial'
          }} onClick={() => setOpen2(true)} disabled={open2} ref={openButton2}>
                  Open tearsheet 2
                </Button>
              </ButtonSet>} title="Tearsheet 1" onClose={() => setOpen1(false)} selectorPrimaryFocus="#stacked-input-1" decorator={decorator && sampleDecorator(decorator)} slug={slug && sampleDecorator(slug)} launcherButtonRef={openButton1}>
            <div className="tearsheet-stories__dummy-content-block">
              Main content 1
              <TextInput id="stacked-input-1" labelText="Enter an important value here" />
            </div>
          </Tearsheet>
        </TearsheetPresence>
        <TearsheetPresence open={open2}>
          <Tearsheet {...args} description={description2} actions={wiredActions2} headerActions={<ButtonSet>
                <Button kind="primary" size="sm" style={{
            width: 'initial'
          }} onClick={() => setOpen3(true)} disabled={open3} ref={openButton3}>
                  Open tearsheet 3
                </Button>
              </ButtonSet>} title="Tearsheet 2" onClose={() => setOpen2(false)} selectorPrimaryFocus="#stacked-input-2" decorator={decorator && sampleDecorator(decorator)} slug={slug && sampleDecorator(slug)} launcherButtonRef={openButton2}>
            <div className="tearsheet-stories__dummy-content-block">
              Main content 2
              <TextInput id="stacked-input-2" labelText="Enter an important value here" />
            </div>
          </Tearsheet>
        </TearsheetPresence>
        <TearsheetPresence open={open3}>
          <Tearsheet {...args} description={description3} actions={wiredActions3} title="Tearsheet 3" onClose={() => setOpen3(false)} selectorPrimaryFocus="#stacked-input-3" decorator={decorator && sampleDecorator(decorator)} slug={slug && sampleDecorator(slug)} launcherButtonRef={openButton3}>
            <div className="tearsheet-stories__dummy-content-block">
              Main content 3
              <TextInput id="stacked-input-3" labelText="Enter an important value here" />
            </div>
          </Tearsheet>
        </TearsheetPresence>
      </div>
    </>;
}`,...T.parameters?.docs?.source}}};const ft=["tearsheet","narrow","stacked"];export{ft as __namedExportsOrder,ht as default,g as narrow,T as stacked,f as tearsheet};
//# sourceMappingURL=TearsheetPresence.stories-DJXET8vn.js.map
