var j=Object.defineProperty;var t=(a,n)=>j(a,"name",{value:n,configurable:!0});import{e,S as Y,B as d,r as s,p as B}from"./iframe-LiaStyBs.js";import{B as O}from"./ButtonSet-C_7Ys9Uu.js";import{D as q}from"./Dropdown-Bkdo5nJw.js";import{F as J}from"./Form-C2nkldOF.js";import{F as Q}from"./FormGroup-CjwI_7Hs.js";import{T as b}from"./TextInput-DzZZsaPG.js";import{T as V,a as X,b as Z}from"./index-BVtb6FYG.js";import{S as I,H as F}from"./index-CE4j8fAC.js";import{A as ee,a as te}from"./index-4--JecgM.js";import{T as v,d as ne}from"./Tearsheet-CADMDR4n.js";import{a as oe,b as re,c as ae,s as se}from"./_storybook-styles-Dkwn2GAg.js";import{g as ie}from"./props-helper-BjdYyuO_.js";import{T as le}from"./TearsheetNarrow-IQENrrK6.js";import{a as w}from"./TearsheetShell-DvHD2PEu.js";import{T as D}from"./TruncatedText-DpVQNwhb.js";import{d as ce}from"./bucket-10-iwuYBZPZ.js";import"./preload-helper-Cc2_yIPf.js";import"./index-DOxiW0Es.js";import"./inheritsLoose-CdLKJotq.js";import"./FormContext-nVLDpaU3.js";import"./mergeRefs-BH0-8uDG.js";import"./useNormalizedInputProps-_C0ZGaZw.js";import"./Text-CexaJYDP.js";import"./bucket-19-B-wN5ejR.js";import"./defaultItemToString-DDHghiWu.js";import"./utils-_nXq7M9N.js";import"./devtools-CUjvjodF.js";import"./useResizeObserver-VSpjG3EC.js";import"./useIsomorphicEffect-DAk8_5ES.js";import"./getNodeTextContent-CjFansOq.js";import"./ComposedModal-75vYZ7oq.js";import"./index-B9Zh2qAg.js";import"./LayerContext-Cg_WEBvk.js";import"./clamp-ekNJC_Xv.js";import"./InlineLoading-Da6JDjkJ.js";import"./bucket-6-kYy7D16T.js";import"./requiredIfGivenPropIsTruthy-DakX99Et.js";import"./wrapFocus-DA3E1wc8.js";import"./Wrap-BR4Y-dYa.js";import"./usePortalTarget-BfnCHncQ.js";import"./index-D-KFmUce.js";import"./useFocus-BZN4T96g.js";import"./useId-Ot11TkSk.js";import"./uuidv4-Fbcg8Vng.js";import"./usePreviousValue-D7gue4nV.js";import"./ActionSet-CSFjceeU.js";const M=t(()=>e.createElement(Y,{blocks:[{title:"Tearsheet",story:f,description:`
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
`}}]}),"DocsPage");M.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:A}=__STORYBOOK_MODULE_ACTIONS__,lt={title:"Components/Tearsheet/Feature Flags/Presence",component:v,tags:["autodocs"],parameters:{styles:se,layout:"fullscreen",docs:{page:M}},argTypes:{...ie(ne),actions:{control:{type:"select",labels:ae},options:re,mapping:oe({primary:"Replace",danger:"Delete",secondary:"Back",secondary2:"Keep Both",dangerGhost:"Abort",ghost:"Cancel"},A)},description:{control:{type:"select",labels:{0:"With plain String",1:"With TruncatedText and 1 line",2:"With TruncatedText and 2 lines"},default:0},description:"A description of the flow, displayed in the header area of the tearsheet.\n Note: `TruncatedText` can be passed as a React node to apply custom text formatting, including ellipsis truncation and a definition tooltip when the content is too long.",options:[0,1,2],mapping:{0:"This is a description for the tearsheet, providing an opportunity to describe the flow over a couple of lines in the header of the tearsheet.",1:e.createElement(D,{autoAlign:!0,lines:1,tooltipDirection:"bottom",value:"This is a description for the tearsheet, providing an opportunity to describe the flow over a couple of lines in the header of the tearsheet."}),2:e.createElement(D,{autoAlign:!0,lines:2,tooltipDirection:"bottom",value:"This is a description for the tearsheet, providing an opportunity to describe the flow over a couple of lines in the header of the tearsheet."})}},headerActions:{control:{type:"select",labels:{0:"none",1:"drop-down",2:"buttons"}},options:[0,1,2],mapping:{0:null,1:e.createElement(q,{id:"tss-had",label:"Choose an option",titleText:"Choose an option",items:["option 1","option 2","option 3","option 4"]}),2:e.createElement(O,null,e.createElement(d,{kind:"secondary",size:"sm",style:{width:"initial"}},"Secondary"),e.createElement(d,{kind:"primary",size:"sm",style:{width:"initial"}},"Primary"))}},label:{control:{type:"text"}},title:{control:{type:"text"}},influencer:{control:{disable:!0}},onClose:{control:{disable:!0}},navigation:{control:{disable:!0}},open:{control:{disable:!0}},portalTarget:{control:{disable:!0}},decorator:{control:{type:"select",labels:{0:"No AI Label",1:"with AI Label",2:"With non AI Label component"},default:0},description:"Optional prop that allows you to pass any component.",options:[0,1,2]},slug:{control:{type:"select",labels:{0:"No AI Slug",1:"with AI Slug"},default:0},description:'Deprecated: Property replaced by "decorator"',options:[0,1]}}},S="Close the tearsheet",pe=e.createElement(I,{className:"tearsheet-stories__dummy-content-block"},e.createElement(F,null,"Influencer heading"),e.createElement("p",null,"Influencer content")),ue="The label of the tearsheet",R=e.createElement(I,{className:"tearsheet-stories__dummy-content-block"},e.createElement(F,null,"Main content heading"),e.createElement(J,null,e.createElement("p",null,"Main content"),e.createElement(Q,{legendId:"tearsheet-form-group",legendText:"FormGroup Legend"},e.createElement(b,{id:"tss-ft1",labelText:"Enter an important value here",style:{marginBottom:"1em"}}),e.createElement(b,{id:"tss-ft2",labelText:"Here is an entry field:",style:{marginBottom:"1em"}})))),z="Title of the tearsheet",c=t(a=>{switch(a){case 1:return e.createElement(ee,{className:"decorator-container",size:"xs"},e.createElement(te,null,e.createElement("div",null,e.createElement("p",{className:"secondary"},"AI Explained"),e.createElement("h1",null,"84%"),e.createElement("p",{className:"secondary bold"},"Confidence score"),e.createElement("p",{className:"secondary"},"This is not really Lorem Ipsum but the spell checker did not like the previous text with it's non-words which is why this unwieldy sentence, should one choose to call it that, here."),e.createElement("hr",null),e.createElement("p",{className:"secondary"},"Model type"),e.createElement("p",{className:"bold"},"Foundation model"))));case 2:return e.createElement(V,null,e.createElement(X,{label:"Additional information"},e.createElement(ce,null)),e.createElement(Z,null,e.createElement("p",null,"Custom content here")));default:return}},"sampleDecorator"),de=t(({decorator:a,slug:n,actions:p,...l})=>{const[m,i]=s.useState(!1),y=p&&Array.prototype.map.call(p,o=>{if(o.label==="Cancel"){const h=o.onClick;return{...o,onClick:t(u=>{i(!1),h(u)},"onClick")}}return o});return e.createElement(e.Fragment,null,e.createElement("style",null,`.${B.prefix}--tearsheet { opacity: 0 }`,";"),e.createElement("main",null,e.createElement(d,{onClick:t(()=>i(!0),"onClick")},"Open Tearsheet")),e.createElement(w,{open:m},e.createElement(v,{...l,actions:y,onClose:t(()=>i(!1),"onClose"),decorator:a&&c(a),slug:n&&c(n)},R)))},"Template"),me=t(({decorator:a,slug:n,actions:p,...l})=>{const[m,i]=s.useState(!1),y=p&&Array.prototype.map.call(p,o=>{if(o.label==="Cancel"){const h=o.onClick;return{...o,onClick:t(u=>{i(!1),h(u)},"onClick")}}return o});return e.createElement(e.Fragment,null,e.createElement("style",null,`.${B.prefix}--tearsheet { opacity: 0 }`,";"),e.createElement("main",null,e.createElement(d,{onClick:t(()=>i(!0),"onClick")},"Open Tearsheet")),e.createElement(w,{open:m},e.createElement(le,{...l,actions:y,onClose:t(()=>i(!1),"onClose"),decorator:a&&c(a),slug:n&&c(n)},R)))},"Narrow"),he=t(({actions:a,decorator:n,description:p,slug:l,...m},i)=>{const[y,o]=s.useState(!1),[h,u]=s.useState(!1),[x,k]=s.useState(!1),L=s.useRef(void 0),P=s.useRef(void 0),N=s.useRef(void 0),_=s.useRef(void 0),$=s.cloneElement(p,{id:"truncated-text-01"}),W=s.cloneElement(p,{id:"truncated-text-02"}),G=s.cloneElement(p,{id:"truncated-text-03"}),H=Array.prototype.map.call(a,r=>{if(r.label==="Cancel"){const C=r.onClick;return{...r,onClick:t(E=>{o(!1),C(E)},"onClick")}}return r}),K=Array.prototype.map.call(a,r=>{if(r.label==="Cancel"){const C=r.onClick;return{...r,onClick:t(E=>{u(!1),C(E)},"onClick")}}return r}),U=Array.prototype.map.call(a,r=>{if(r.label==="Cancel"){const C=r.onClick;return{...r,onClick:t(E=>{k(!1),C(E)},"onClick")}}return r});return s.useEffect(()=>{setTimeout(()=>{o(i.viewMode!=="docs"),u(i.viewMode!=="docs"),k(i.viewMode!=="docs")},0)},[]),e.createElement(e.Fragment,null,e.createElement("style",null,`.${B.prefix}--tearsheet { opacity: 0 }`,";"),e.createElement("div",{style:{height:"3rem"},"data-reserve-space":"for toggle buttons"}),e.createElement("main",null,e.createElement(O,{style:{display:"flex",position:"fixed",top:0,left:0,zIndex:1e4}},e.createElement(d,{onClick:t(()=>o(!y),"onClick"),ref:P},"Toggle tearsheet 1"),e.createElement(d,{onClick:t(()=>u(!h),"onClick")},"Toggle tearsheet 2"),e.createElement(d,{onClick:t(()=>k(!x),"onClick")},"Toggle tearsheet 3"))),e.createElement("div",{ref:L},e.createElement(w,{open:y},e.createElement(v,{...m,description:$,actions:H,headerActions:e.createElement(O,null,e.createElement(d,{kind:"primary",size:"sm",style:{width:"initial"},onClick:t(()=>u(!0),"onClick"),disabled:h,ref:N},"Open tearsheet 2")),title:"Tearsheet 1",onClose:t(()=>o(!1),"onClose"),selectorPrimaryFocus:"#stacked-input-1",decorator:n&&c(n),slug:l&&c(l),launcherButtonRef:P},e.createElement("div",{className:"tearsheet-stories__dummy-content-block"},"Main content 1",e.createElement(b,{id:"stacked-input-1",labelText:"Enter an important value here"})))),e.createElement(w,{open:h},e.createElement(v,{...m,description:W,actions:K,headerActions:e.createElement(O,null,e.createElement(d,{kind:"primary",size:"sm",style:{width:"initial"},onClick:t(()=>k(!0),"onClick"),disabled:x,ref:_},"Open tearsheet 3")),title:"Tearsheet 2",onClose:t(()=>u(!1),"onClose"),selectorPrimaryFocus:"#stacked-input-2",decorator:n&&c(n),slug:l&&c(l),launcherButtonRef:N},e.createElement("div",{className:"tearsheet-stories__dummy-content-block"},"Main content 2",e.createElement(b,{id:"stacked-input-2",labelText:"Enter an important value here"})))),e.createElement(w,{open:x},e.createElement(v,{...m,description:G,actions:U,title:"Tearsheet 3",onClose:t(()=>k(!1),"onClose"),selectorPrimaryFocus:"#stacked-input-3",decorator:n&&c(n),slug:l&&c(l),launcherButtonRef:_},e.createElement("div",{className:"tearsheet-stories__dummy-content-block"},"Main content 3",e.createElement(b,{id:"stacked-input-3",labelText:"Enter an important value here"}))))))},"StackedTemplate"),f=de.bind({});f.storyName="Tearsheet";f.args={closeIconDescription:S,description:2,onClose:A("onClose called"),title:z,actions:7};const g=me.bind({});g.storyName="Narrow";g.args={closeIconDescription:S,description:2,onClose:A("onClose called"),title:z,actions:7};const T=he.bind({});T.storyName="Stacking tearsheets";T.args={closeIconDescription:S,description:2,height:"lower",influencer:pe,label:ue,actions:7};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`({
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
}`,...T.parameters?.docs?.source}}};const ct=["tearsheet","narrow","stacked"];export{ct as __namedExportsOrder,lt as default,g as narrow,T as stacked,f as tearsheet};
//# sourceMappingURL=TearsheetPresence.stories-DMLn3wT1.js.map
