import{e,r as c,p as O,B as T}from"./iframe-BBf3bqTv.js";import{F as D}from"./Form-D5NjAWeq.js";import{F as B}from"./FormGroup-Bc7y84q3.js";import{T as F}from"./TextInput-McvUY1bW.js";import{T as L,a as R,b as P,A as $,c as W}from"./index-DOwP6x5e.js";import{T as y,d as z}from"./TearsheetNarrow-M2rtEqTy.js";import{a as G,b as K,c as U,s as Y}from"./_storybook-styles-B9EX_MeK.js";import{g as j}from"./props-helper-CYOz70En.js";import{T as N}from"./TruncatedText-DbYAUHIX.js";import{I as q}from"./bucket-10-BG8-V5O3.js";import"./preload-helper-D9Z9MdNV.js";import"./useNormalizedInputProps-BgZ5uQfL.js";import"./Text-CaNb5F2n.js";import"./bucket-19-zmdOpOwk.js";import"./FormContext-CW3fTVyM.js";import"./utils-BgfmaY2S.js";import"./TearsheetShell-D6-OMKbK.js";import"./useResizeObserver-CVVoysON.js";import"./useIsomorphicEffect-ZKZ1smHY.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-BW2ljFCb.js";import"./index-CbeIurAw.js";import"./LayerContext-BOWqFdTq.js";import"./clamp--00YEiB8.js";import"./ButtonSet-C3GUdjVj.js";import"./InlineLoading-Iu2BiOBt.js";import"./bucket-6-TRoxTq9G.js";import"./mergeRefs-BZpmU3mx.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./wrapFocus-DaSELL9x.js";import"./index-7K8oyqWX.js";import"./Wrap-BwGjSwQP.js";import"./usePortalTarget-wcltUqTk.js";import"./index-hrngNdBX.js";import"./useFocus-BlxCTRT7.js";import"./usePreviousValue-Bzpu_MqH.js";import"./ActionSet-ByaSX0Ns.js";import"./devtools-c2gfrTL0.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,Be={title:"Components/Tearsheet/TearsheetNarrow",component:y,tags:["autodocs"],parameters:{layout:"fullscreen",styles:Y},argTypes:{...j(z),actions:{control:{type:"select",labels:U},options:K,mapping:G({primary:"Create",secondary:"Close",secondary2:"Save",ghost:"Cancel"},b)},description:{control:{type:"select",labels:{0:"With plain String",1:"With TruncatedText and 1 line",2:"With TruncatedText and 2 lines"},default:0},description:"A description of the flow, displayed in the header area of the tearsheet.\n Note: `TruncatedText` can be passed as a React node to apply custom text formatting, including ellipsis truncation and a definition tooltip when the content is too long.",options:[0,1,2],mapping:{0:"This is a description for the tearsheet, providing an opportunity to describe the flow.",1:e.createElement(N,{lines:1,tooltipDirection:"bottom",value:"This is a description for the tearsheet, providing an opportunity to describe the flow over a couple of lines in the header of the tearsheet."}),2:e.createElement(N,{lines:2,tooltipDirection:"bottom",value:"This is a description for the tearsheet, providing an opportunity to describe the flow over a couple of lines in the header of the tearsheet."})}},label:{control:{type:"text"}},title:{control:{type:"text"}},onClose:{control:{disable:!0}},open:{control:{disable:!0}},portalTarget:{control:{disable:!0}},decorator:{control:{type:"select",labels:{0:"No AI Label",1:"with AI Label",2:"With non AI Label component"},default:0},description:"Optional prop that allows you to pass any component.",options:[0,1,2]},slug:{control:{type:"select",labels:{0:"No AI Slug",1:"with AI Slug"},default:0},description:'deprecated Property replaced by "decorator"',options:[0,1]}}},E="Close the tearsheet",A="The label of the tearsheet",H=e.createElement("div",{className:"tearsheet-stories__narrow-content-block"},e.createElement(D,null,e.createElement("p",null,"Main content"),e.createElement(B,{legendId:"tearsheetNarrow-form-group",legendText:"FormGroup Legend"},e.createElement(F,{id:"tss-ft1",labelText:"Enter an important value here"})))),x="Title of the tearsheet",a=s=>{switch(s){case 1:return e.createElement($,{className:"decorator-container",size:"xs"},e.createElement(W,null,e.createElement("div",null,e.createElement("p",{className:"secondary"},"AI Explained"),e.createElement("h1",null,"84%"),e.createElement("p",{className:"secondary bold"},"Confidence score"),e.createElement("p",{className:"secondary"},"This is not really Lorem Ipsum but the spell checker did not like the previous text with it's non-words which is why this unwieldy sentence, should one choose to call it that, here."),e.createElement("hr",null),e.createElement("p",{className:"secondary"},"Model type"),e.createElement("p",{className:"bold"},"Foundation model"))));case 2:return e.createElement(L,null,e.createElement(R,{label:"Additional information"},e.createElement(q,null)),e.createElement(P,null,e.createElement("p",null,"Custom content here")));default:return}},_=({actions:s,decorator:o,slug:n,...h},f)=>{const[v,r]=c.useState(f.viewMode!=="docs"),w=c.useRef(void 0),i=Array.prototype.map.call(s,l=>{if(l.label==="Cancel"){const p=l.onClick;return{...l,onClick:k=>{r(!1),p(k)}}}return l});return e.createElement(e.Fragment,null,e.createElement("style",null,`.${O.prefix}--tearsheet { opacity: 0 }`,";"),e.createElement("main",null,e.createElement(T,{onClick:()=>r(!0)},"Open Tearsheet")),e.createElement("div",{ref:w},e.createElement(y,{...h,actions:i,open:v,onClose:()=>r(!1),decorator:o&&a(o),slug:n&&a(n)},H)))},J=({actions:s,decorator:o,slug:n,...h},f)=>{const[v,r]=c.useState(!1),[w,i]=c.useState(!1),[l,p]=c.useState(!1),k=c.useRef(void 0);c.useEffect(()=>{r(f.viewMode!=="docs"),i(f.viewMode!=="docs"),p(f.viewMode!=="docs")},[]);const S=Array.prototype.map.call(s,t=>{if(t.label==="Cancel"){const g=t.onClick;return{...t,onClick:C=>{r(!1),g(C)}}}return t}),M=Array.prototype.map.call(s,t=>{if(t.label==="Cancel"){const g=t.onClick;return{...t,onClick:C=>{i(!1),g(C)}}}return t}),I=Array.prototype.map.call(s,t=>{if(t.label==="Cancel"){const g=t.onClick;return{...t,onClick:C=>{p(!1),g(C)}}}return t});return e.createElement(e.Fragment,null,e.createElement("style",null,`.${O.prefix}--tearsheet { opacity: 0 }`,";"),e.createElement("div",{style:{height:"3rem"},"data-reserve-space":"for toggle buttons"}),e.createElement("main",{style:{display:"flex",position:"fixed",top:0,left:0,zIndex:1e4}},e.createElement(T,{onClick:()=>r(!v)},"Toggle #1"),e.createElement(T,{onClick:()=>i(!w)},"Toggle #2"),e.createElement(T,{onClick:()=>p(!l)},"Toggle #3")),e.createElement("div",{ref:k},e.createElement(y,{...h,actions:S,title:"Tearsheet #1",open:v,onClose:()=>r(!1),decorator:o&&a(o),slug:n&&a(n)},e.createElement("div",{className:"tearsheet-stories__narrow-content-block"},"Main content 1")),e.createElement(y,{...h,actions:M,title:"Tearsheet #2",open:w,onClose:()=>i(!1),decorator:o&&a(o),slug:n&&a(n),selectorPrimaryFocus:"#main-content"},e.createElement("div",{className:"tearsheet-stories__narrow-content-block"},"Main content 2")),e.createElement(y,{...h,actions:I,title:"Tearsheet #3",open:l,onClose:()=>p(!1),decorator:o&&a(o),slug:n&&a(n),selectorPrimaryFocus:"#main-content"},e.createElement("div",{className:"tearsheet-stories__narrow-content-block"},"Main content 3"))))},m=_.bind({});m.storyName="Narrow tearsheet";m.args={closeIconDescription:E,description:0,onClose:b("onClose called"),title:x,actions:7};const d=_.bind({});d.storyName="Narrow tearsheet with all header items";d.args={closeIconDescription:E,description:0,hasCloseIcon:!0,label:A,onClose:b("onClose called"),title:x,actions:0,decorator:1,slug:0};const u=J.bind({});u.storyName="Stacking narrow tearsheets";u.args={closeIconDescription:E,description:0,height:"lower",label:A,actions:7};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`({
  actions,
  decorator,
  slug,
  ...args
}, context) => {
  const [open, setOpen] = useState(context.viewMode !== 'docs');
  const ref = useRef(undefined);
  const wiredActions = Array.prototype.map.call(actions, action => {
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
      <div ref={ref}>
        <TearsheetNarrow {...args} actions={wiredActions} open={open} onClose={() => setOpen(false)} decorator={decorator && sampleDecorator(decorator)} slug={slug && sampleDecorator(slug)}>
          {mainContent}
        </TearsheetNarrow>
      </div>
    </>;
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`({
  actions,
  decorator,
  slug,
  ...args
}, context) => {
  const [open, setOpen] = useState(context.viewMode !== 'docs');
  const ref = useRef(undefined);
  const wiredActions = Array.prototype.map.call(actions, action => {
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
      <div ref={ref}>
        <TearsheetNarrow {...args} actions={wiredActions} open={open} onClose={() => setOpen(false)} decorator={decorator && sampleDecorator(decorator)} slug={slug && sampleDecorator(slug)}>
          {mainContent}
        </TearsheetNarrow>
      </div>
    </>;
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`({
  actions,
  decorator,
  slug,
  ...args
}, context) => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const ref = useRef(undefined);
  useEffect(() => {
    setOpen1(context.viewMode !== 'docs');
    setOpen2(context.viewMode !== 'docs');
    setOpen3(context.viewMode !== 'docs');
  }, []);
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
  return <>
      <style>{\`.\${pkg.prefix}--tearsheet { opacity: 0 }\`};</style>
      <div style={{
      height: '3rem'
    }} data-reserve-space="for toggle buttons" />
      <main style={{
      display: 'flex',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 10000
    }}>
        <Button onClick={() => setOpen1(!open1)}>Toggle #1</Button>
        <Button onClick={() => setOpen2(!open2)}>Toggle #2</Button>
        <Button onClick={() => setOpen3(!open3)}>Toggle #3</Button>
      </main>
      <div ref={ref}>
        <TearsheetNarrow {...args} actions={wiredActions1} title="Tearsheet #1" open={open1} onClose={() => setOpen1(false)} decorator={decorator && sampleDecorator(decorator)} slug={slug && sampleDecorator(slug)}>
          <div className="tearsheet-stories__narrow-content-block">
            Main content 1
          </div>
        </TearsheetNarrow>
        <TearsheetNarrow {...args} actions={wiredActions2} title="Tearsheet #2" open={open2} onClose={() => setOpen2(false)} decorator={decorator && sampleDecorator(decorator)} slug={slug && sampleDecorator(slug)} selectorPrimaryFocus="#main-content">
          <div className="tearsheet-stories__narrow-content-block">
            Main content 2
          </div>
        </TearsheetNarrow>
        <TearsheetNarrow {...args} actions={wiredActions3} title="Tearsheet #3" open={open3} onClose={() => setOpen3(false)} decorator={decorator && sampleDecorator(decorator)} slug={slug && sampleDecorator(slug)} selectorPrimaryFocus="#main-content">
          <div className="tearsheet-stories__narrow-content-block">
            Main content 3
          </div>
        </TearsheetNarrow>
      </div>
    </>;
}`,...u.parameters?.docs?.source}}};const Fe=["tearsheetNarrow","fullyLoaded","stacked"];export{Fe as __namedExportsOrder,Be as default,d as fullyLoaded,u as stacked,m as tearsheetNarrow};
//# sourceMappingURL=TearsheetNarrow.stories--ty5qpbn.js.map
