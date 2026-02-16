import{e,S as U,B as u,r as o,p as x}from"./iframe-DFpKMPby.js";import{B as w}from"./ButtonSet-CbfhMW98.js";import{D as j}from"./Dropdown-DqIfgZp5.js";import{F as Y}from"./Form-BJu6UTcQ.js";import{F as q}from"./FormGroup-CStcLMkP.js";import{T as E}from"./TextInput-5pf6-d20.js";import{T as J,a as Q,b as V,A as X,c as Z}from"./index-B_RYS3B3.js";import{S as D,H as I}from"./index-DjtoZuLp.js";import{T as b,d as ee}from"./Tearsheet-6VmEF0Wq.js";import{a as te,b as ne,c as oe,s as re}from"./_storybook-styles-B9EX_MeK.js";import{g as se}from"./props-helper-IRa1SilK.js";import{T as ae}from"./TearsheetNarrow-CEoUuK-H.js";import{a as v}from"./TearsheetShell-BL0GeXR5.js";import{T as _}from"./TruncatedText-CunRnApM.js";import{I as ie}from"./bucket-10-O5dH3UL6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ClXT6K7y.js";import"./inheritsLoose-DHKJTbHM.js";import"./FormContext-DhkisQRD.js";import"./mergeRefs-BZpmU3mx.js";import"./useNormalizedInputProps-CUOp-3yA.js";import"./Text-DmSkCN9-.js";import"./bucket-19-BiWvxoBr.js";import"./defaultItemToString-zSItMTD_.js";import"./utils-js3bPBK9.js";import"./devtools-BTj-TFWE.js";import"./useResizeObserver-BjbdykCB.js";import"./useIsomorphicEffect-D8ODjm2R.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-C4zVvowC.js";import"./index-BZNQ76pD.js";import"./LayerContext-BsfSsn3u.js";import"./clamp--00YEiB8.js";import"./InlineLoading-C4D8swtL.js";import"./bucket-6-B98T6Er9.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./wrapFocus-LRnjjuOM.js";import"./Wrap-DO_T519W.js";import"./usePortalTarget-BQit2Uui.js";import"./index-C7ycmAhm.js";import"./useFocus-COk-fU9I.js";import"./useId-BDEqOPFK.js";import"./uuidv4-BN2rGLQG.js";import"./usePreviousValue-BJntbRdj.js";import"./ActionSet-Ddw8WSp7.js";const F=()=>e.createElement(U,{blocks:[{title:"Tearsheet",story:h,description:`
Tearsheet supports the \`enable-presence\` feature flag. When enabled, Tearsheet will not mount until it's opened and unmount when it's closed. This helps to stay in sync with the React lifecycle.

This means that:

- The DOM no longer includes Tearsheet and its children in the closed state
- Tearsheet, all of its children and their hooks will mount/unmount on open/close
- Enter & exit animations change from CSS transitions to CSS animations

Note: Only Tearsheet and its children are unmounted/mounted. Use TearsheetPresence or withTearsheetPresence to shift the presence boundary to a higher level, if necessary.
`,source:{language:"jsx",code:`
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
`}}]});F.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:B}=__STORYBOOK_MODULE_ACTIONS__,rt={title:"Components/Tearsheet/Feature Flags/Presence",component:b,tags:["autodocs"],parameters:{styles:re,layout:"fullscreen",docs:{page:F}},argTypes:{...se(ee),actions:{control:{type:"select",labels:oe},options:ne,mapping:te({primary:"Replace",danger:"Delete",secondary:"Back",secondary2:"Keep Both",dangerGhost:"Abort",ghost:"Cancel"},B)},description:{control:{type:"select",labels:{0:"With plain String",1:"With TruncatedText and 1 line",2:"With TruncatedText and 2 lines"},default:0},description:"A description of the flow, displayed in the header area of the tearsheet.\n Note: `TruncatedText` can be passed as a React node to apply custom text formatting, including ellipsis truncation and a definition tooltip when the content is too long.",options:[0,1,2],mapping:{0:"This is a description for the tearsheet, providing an opportunity to describe the flow over a couple of lines in the header of the tearsheet.",1:e.createElement(_,{autoAlign:!0,lines:1,tooltipDirection:"bottom",value:"This is a description for the tearsheet, providing an opportunity to describe the flow over a couple of lines in the header of the tearsheet."}),2:e.createElement(_,{autoAlign:!0,lines:2,tooltipDirection:"bottom",value:"This is a description for the tearsheet, providing an opportunity to describe the flow over a couple of lines in the header of the tearsheet."})}},headerActions:{control:{type:"select",labels:{0:"none",1:"drop-down",2:"buttons"}},options:[0,1,2],mapping:{0:null,1:e.createElement(j,{id:"tss-had",label:"Choose an option",titleText:"Choose an option",items:["option 1","option 2","option 3","option 4"]}),2:e.createElement(w,null,e.createElement(u,{kind:"secondary",size:"sm",style:{width:"initial"}},"Secondary"),e.createElement(u,{kind:"primary",size:"sm",style:{width:"initial"}},"Primary"))}},label:{control:{type:"text"}},title:{control:{type:"text"}},influencer:{control:{disable:!0}},onClose:{control:{disable:!0}},navigation:{control:{disable:!0}},open:{control:{disable:!0}},portalTarget:{control:{disable:!0}},decorator:{control:{type:"select",labels:{0:"No AI Label",1:"with AI Label",2:"With non AI Label component"},default:0},description:"Optional prop that allows you to pass any component.",options:[0,1,2]},slug:{control:{type:"select",labels:{0:"No AI Slug",1:"with AI Slug"},default:0},description:'Deprecated: Property replaced by "decorator"',options:[0,1]}}},A="Close the tearsheet",le=e.createElement(D,{className:"tearsheet-stories__dummy-content-block"},e.createElement(I,null,"Influencer heading"),e.createElement("p",null,"Influencer content")),ce="The label of the tearsheet",M=e.createElement(D,{className:"tearsheet-stories__dummy-content-block"},e.createElement(I,null,"Main content heading"),e.createElement(Y,null,e.createElement("p",null,"Main content"),e.createElement(q,{legendId:"tearsheet-form-group",legendText:"FormGroup Legend"},e.createElement(E,{id:"tss-ft1",labelText:"Enter an important value here",style:{marginBottom:"1em"}}),e.createElement(E,{id:"tss-ft2",labelText:"Here is an entry field:",style:{marginBottom:"1em"}})))),R="Title of the tearsheet",l=s=>{switch(s){case 1:return e.createElement(X,{className:"decorator-container",size:"xs"},e.createElement(Z,null,e.createElement("div",null,e.createElement("p",{className:"secondary"},"AI Explained"),e.createElement("h1",null,"84%"),e.createElement("p",{className:"secondary bold"},"Confidence score"),e.createElement("p",{className:"secondary"},"This is not really Lorem Ipsum but the spell checker did not like the previous text with it's non-words which is why this unwieldy sentence, should one choose to call it that, here."),e.createElement("hr",null),e.createElement("p",{className:"secondary"},"Model type"),e.createElement("p",{className:"bold"},"Foundation model"))));case 2:return e.createElement(J,null,e.createElement(Q,{label:"Additional information"},e.createElement(ie,null)),e.createElement(V,null,e.createElement("p",null,"Custom content here")));default:return}},pe=({decorator:s,slug:r,actions:c,...i})=>{const[d,a]=o.useState(!1),f=c&&Array.prototype.map.call(c,t=>{if(t.label==="Cancel"){const m=t.onClick;return{...t,onClick:p=>{a(!1),m(p)}}}return t});return e.createElement(e.Fragment,null,e.createElement("style",null,`.${x.prefix}--tearsheet { opacity: 0 }`,";"),e.createElement("main",null,e.createElement(u,{onClick:()=>a(!0)},"Open Tearsheet")),e.createElement(v,{open:d},e.createElement(b,{...i,actions:f,onClose:()=>a(!1),decorator:s&&l(s),slug:r&&l(r)},M)))},ue=({decorator:s,slug:r,actions:c,...i})=>{const[d,a]=o.useState(!1),f=c&&Array.prototype.map.call(c,t=>{if(t.label==="Cancel"){const m=t.onClick;return{...t,onClick:p=>{a(!1),m(p)}}}return t});return e.createElement(e.Fragment,null,e.createElement("style",null,`.${x.prefix}--tearsheet { opacity: 0 }`,";"),e.createElement("main",null,e.createElement(u,{onClick:()=>a(!0)},"Open Tearsheet")),e.createElement(v,{open:d},e.createElement(ae,{...i,actions:f,onClose:()=>a(!1),decorator:s&&l(s),slug:r&&l(r)},M)))},de=({actions:s,decorator:r,description:c,slug:i,...d},a)=>{const[f,t]=o.useState(!1),[m,p]=o.useState(!1),[O,T]=o.useState(!1),z=o.useRef(void 0),S=o.useRef(void 0),P=o.useRef(void 0),N=o.useRef(void 0),L=o.cloneElement(c,{id:"truncated-text-01"}),$=o.cloneElement(c,{id:"truncated-text-02"}),W=o.cloneElement(c,{id:"truncated-text-03"}),G=Array.prototype.map.call(s,n=>{if(n.label==="Cancel"){const C=n.onClick;return{...n,onClick:k=>{t(!1),C(k)}}}return n}),H=Array.prototype.map.call(s,n=>{if(n.label==="Cancel"){const C=n.onClick;return{...n,onClick:k=>{p(!1),C(k)}}}return n}),K=Array.prototype.map.call(s,n=>{if(n.label==="Cancel"){const C=n.onClick;return{...n,onClick:k=>{T(!1),C(k)}}}return n});return o.useEffect(()=>{setTimeout(()=>{t(a.viewMode!=="docs"),p(a.viewMode!=="docs"),T(a.viewMode!=="docs")},0)},[]),e.createElement(e.Fragment,null,e.createElement("style",null,`.${x.prefix}--tearsheet { opacity: 0 }`,";"),e.createElement("div",{style:{height:"3rem"},"data-reserve-space":"for toggle buttons"}),e.createElement("main",null,e.createElement(w,{style:{display:"flex",position:"fixed",top:0,left:0,zIndex:1e4}},e.createElement(u,{onClick:()=>t(!f),ref:S},"Toggle tearsheet 1"),e.createElement(u,{onClick:()=>p(!m)},"Toggle tearsheet 2"),e.createElement(u,{onClick:()=>T(!O)},"Toggle tearsheet 3"))),e.createElement("div",{ref:z},e.createElement(v,{open:f},e.createElement(b,{...d,description:L,actions:G,headerActions:e.createElement(w,null,e.createElement(u,{kind:"primary",size:"sm",style:{width:"initial"},onClick:()=>p(!0),disabled:m,ref:P},"Open tearsheet 2")),title:"Tearsheet 1",onClose:()=>t(!1),selectorPrimaryFocus:"#stacked-input-1",decorator:r&&l(r),slug:i&&l(i),launcherButtonRef:S},e.createElement("div",{className:"tearsheet-stories__dummy-content-block"},"Main content 1",e.createElement(E,{id:"stacked-input-1",labelText:"Enter an important value here"})))),e.createElement(v,{open:m},e.createElement(b,{...d,description:$,actions:H,headerActions:e.createElement(w,null,e.createElement(u,{kind:"primary",size:"sm",style:{width:"initial"},onClick:()=>T(!0),disabled:O,ref:N},"Open tearsheet 3")),title:"Tearsheet 2",onClose:()=>p(!1),selectorPrimaryFocus:"#stacked-input-2",decorator:r&&l(r),slug:i&&l(i),launcherButtonRef:P},e.createElement("div",{className:"tearsheet-stories__dummy-content-block"},"Main content 2",e.createElement(E,{id:"stacked-input-2",labelText:"Enter an important value here"})))),e.createElement(v,{open:O},e.createElement(b,{...d,description:W,actions:K,title:"Tearsheet 3",onClose:()=>T(!1),selectorPrimaryFocus:"#stacked-input-3",decorator:r&&l(r),slug:i&&l(i),launcherButtonRef:N},e.createElement("div",{className:"tearsheet-stories__dummy-content-block"},"Main content 3",e.createElement(E,{id:"stacked-input-3",labelText:"Enter an important value here"}))))))},h=pe.bind({});h.storyName="Tearsheet";h.args={closeIconDescription:A,description:2,onClose:B("onClose called"),title:R,actions:7};const y=ue.bind({});y.storyName="Narrow";y.args={closeIconDescription:A,description:2,onClose:B("onClose called"),title:R,actions:7};const g=de.bind({});g.storyName="Stacking tearsheets";g.args={closeIconDescription:A,description:2,height:"lower",influencer:le,label:ce,actions:7};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`({
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
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`({
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
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`({
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
}`,...g.parameters?.docs?.source}}};const st=["tearsheet","narrow","stacked"];export{st as __namedExportsOrder,rt as default,y as narrow,g as stacked,h as tearsheet};
//# sourceMappingURL=TearsheetPresence.stories-BBalkxRc.js.map
