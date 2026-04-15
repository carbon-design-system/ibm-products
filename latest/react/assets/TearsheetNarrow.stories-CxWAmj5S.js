var B=Object.defineProperty;var t=(r,n)=>B(r,"name",{value:n,configurable:!0});import{e,r as c,p as A,B as k}from"./iframe-DgruYanb.js";import{T as F,a as L,b as R}from"./index-BsYj2UP_.js";import{A as P,a as $}from"./index-xD4Xpd71.js";import{F as W}from"./Form-N6lF2Ftm.js";import{F as z}from"./FormGroup-DQ8ZBEmS.js";import{T as G}from"./TextInput-DB1hPMnm.js";import{T as v,d as K}from"./TearsheetNarrow-BZSxoJRX.js";import{a as U,b as Y,c as j,s as q}from"./_storybook-styles-Dkwn2GAg.js";import{g as H}from"./props-helper-BEn8ZzZM.js";import{T as O}from"./TruncatedText-eAk8jZJU.js";import{e as J}from"./bucket-10-BHFiCpWn.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-19-CGApZllR.js";import"./Text-D1lCafHM.js";import"./utils-CA4RKgu6.js";import"./FormContext-CKm6c-rM.js";import"./useNormalizedInputProps-CeKYoSNT.js";import"./bucket-20-DHjQwcsG.js";import"./TearsheetShell-kPchMTsC.js";import"./useResizeObserver-CP0wa2Cj.js";import"./useIsomorphicEffect-B6QIctlI.js";import"./getNodeTextContent-CjFansOq.js";import"./index-lUPiKPy6.js";import"./LayerContext-_FEItnCz.js";import"./clamp-ekNJC_Xv.js";import"./ComposedModal-NRx_kf66.js";import"./mergeRefs-BH0-8uDG.js";import"./toggleClass-Cl_8Rmh6.js";import"./InlineLoading-BL7zZaGk.js";import"./bucket-6-BPpGHdnV.js";import"./ButtonSet-CbbT0T6N.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-CTeM4Oek.js";import"./index-Dnru4M6s.js";import"./Wrap-B3uE9Uvf.js";import"./usePortalTarget-BW9a6DBL.js";import"./index-g4e2t4sN.js";import"./useFocus-BUqVHLBO.js";import"./usePresence-C3bCRfvm.js";import"./useId-DNBOHGwI.js";import"./uuidv4-Fbcg8Vng.js";import"./usePreviousValue-DCRYaoGC.js";import"./ActionSet-6aOKSBVg.js";import"./devtools-CW8YVWZC.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,Ke={title:"Components/Tearsheet/TearsheetNarrow",component:v,tags:["autodocs"],parameters:{layout:"fullscreen",styles:q},argTypes:{...H(K),actions:{control:{type:"select",labels:j},options:Y,mapping:U({primary:"Create",secondary:"Close",secondary2:"Save",ghost:"Cancel"},E)},description:{control:{type:"select",labels:{0:"With plain String",1:"With TruncatedText and 1 line",2:"With TruncatedText and 2 lines"},default:0},description:"A description of the flow, displayed in the header area of the tearsheet.\n Note: `TruncatedText` can be passed as a React node to apply custom text formatting, including ellipsis truncation and a definition tooltip when the content is too long.",options:[0,1,2],mapping:{0:"This is a description for the tearsheet, providing an opportunity to describe the flow.",1:e.createElement(O,{lines:1,tooltipDirection:"bottom",value:"This is a description for the tearsheet, providing an opportunity to describe the flow over a couple of lines in the header of the tearsheet."}),2:e.createElement(O,{lines:2,tooltipDirection:"bottom",value:"This is a description for the tearsheet, providing an opportunity to describe the flow over a couple of lines in the header of the tearsheet."})}},label:{control:{type:"text"}},title:{control:{type:"text"}},onClose:{control:{disable:!0}},open:{control:{disable:!0}},portalTarget:{control:{disable:!0}},decorator:{control:{type:"select",labels:{0:"No AI Label",1:"with AI Label",2:"With non AI Label component"},default:0},description:"Optional prop that allows you to pass any component.",options:[0,1,2]},slug:{control:{type:"select",labels:{0:"No AI Slug",1:"with AI Slug"},default:0},description:'deprecated Property replaced by "decorator"',options:[0,1]}}},N="Close the tearsheet",x="The label of the tearsheet",Q=e.createElement("div",{className:"tearsheet-stories__narrow-content-block"},e.createElement(W,null,e.createElement("p",null,"Main content"),e.createElement(z,{legendId:"tearsheetNarrow-form-group",legendText:"FormGroup Legend"},e.createElement(G,{id:"tss-ft1",labelText:"Enter an important value here"})))),_="Title of the tearsheet",l=t(r=>{switch(r){case 1:return e.createElement(P,{className:"decorator-container",size:"xs"},e.createElement($,null,e.createElement("div",null,e.createElement("p",{className:"secondary"},"AI Explained"),e.createElement("h1",null,"84%"),e.createElement("p",{className:"secondary bold"},"Confidence score"),e.createElement("p",{className:"secondary"},"This is not really Lorem Ipsum but the spell checker did not like the previous text with it's non-words which is why this unwieldy sentence, should one choose to call it that, here."),e.createElement("hr",null),e.createElement("p",{className:"secondary"},"Model type"),e.createElement("p",{className:"bold"},"Foundation model"))));case 2:return e.createElement(F,null,e.createElement(L,{label:"Additional information"},e.createElement(J,null)),e.createElement(R,null,e.createElement("p",null,"Custom content here")));default:return}},"sampleDecorator"),S=t(({actions:r,decorator:n,slug:a,...h},g)=>{const[w,s]=c.useState(g.viewMode!=="docs"),T=c.useRef(void 0),p=Array.prototype.map.call(r,i=>{if(i.label==="Cancel"){const m=i.onClick;return{...i,onClick:t(b=>{s(!1),m(b)},"onClick")}}return i});return e.createElement(e.Fragment,null,e.createElement("style",null,`.${A.prefix}--tearsheet { opacity: 0 }`,";"),e.createElement("main",null,e.createElement(k,{onClick:t(()=>s(!0),"onClick")},"Open Tearsheet")),e.createElement("div",{ref:T},e.createElement(v,{...h,actions:p,open:w,onClose:t(()=>s(!1),"onClose"),decorator:n&&l(n),slug:a&&l(a)},Q)))},"Template"),V=t(({actions:r,decorator:n,slug:a,...h},g)=>{const[w,s]=c.useState(!1),[T,p]=c.useState(!1),[i,m]=c.useState(!1),b=c.useRef(void 0);c.useEffect(()=>{s(g.viewMode!=="docs"),p(g.viewMode!=="docs"),m(g.viewMode!=="docs")},[]);const M=Array.prototype.map.call(r,o=>{if(o.label==="Cancel"){const C=o.onClick;return{...o,onClick:t(y=>{s(!1),C(y)},"onClick")}}return o}),I=Array.prototype.map.call(r,o=>{if(o.label==="Cancel"){const C=o.onClick;return{...o,onClick:t(y=>{p(!1),C(y)},"onClick")}}return o}),D=Array.prototype.map.call(r,o=>{if(o.label==="Cancel"){const C=o.onClick;return{...o,onClick:t(y=>{m(!1),C(y)},"onClick")}}return o});return e.createElement(e.Fragment,null,e.createElement("style",null,`.${A.prefix}--tearsheet { opacity: 0 }`,";"),e.createElement("div",{style:{height:"3rem"},"data-reserve-space":"for toggle buttons"}),e.createElement("main",{style:{display:"flex",position:"fixed",top:0,left:0,zIndex:1e4}},e.createElement(k,{onClick:t(()=>s(!w),"onClick")},"Toggle #1"),e.createElement(k,{onClick:t(()=>p(!T),"onClick")},"Toggle #2"),e.createElement(k,{onClick:t(()=>m(!i),"onClick")},"Toggle #3")),e.createElement("div",{ref:b},e.createElement(v,{...h,actions:M,title:"Tearsheet #1",open:w,onClose:t(()=>s(!1),"onClose"),decorator:n&&l(n),slug:a&&l(a)},e.createElement("div",{className:"tearsheet-stories__narrow-content-block"},"Main content 1")),e.createElement(v,{...h,actions:I,title:"Tearsheet #2",open:T,onClose:t(()=>p(!1),"onClose"),decorator:n&&l(n),slug:a&&l(a),selectorPrimaryFocus:"#main-content"},e.createElement("div",{className:"tearsheet-stories__narrow-content-block"},"Main content 2")),e.createElement(v,{...h,actions:D,title:"Tearsheet #3",open:i,onClose:t(()=>m(!1),"onClose"),decorator:n&&l(n),slug:a&&l(a),selectorPrimaryFocus:"#main-content"},e.createElement("div",{className:"tearsheet-stories__narrow-content-block"},"Main content 3"))))},"StackedTemplate"),d=S.bind({});d.storyName="Narrow tearsheet";d.args={closeIconDescription:N,description:0,onClose:E("onClose called"),title:_,actions:7};const u=S.bind({});u.storyName="Narrow tearsheet with all header items";u.args={closeIconDescription:N,description:0,hasCloseIcon:!0,label:x,onClose:E("onClose called"),title:_,actions:0,decorator:1,slug:0};const f=V.bind({});f.storyName="Stacking narrow tearsheets";f.args={closeIconDescription:N,description:0,height:"lower",label:x,actions:7};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`({
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
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`({
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
}`,...f.parameters?.docs?.source}}};const Ue=["tearsheetNarrow","fullyLoaded","stacked"];export{Ue as __namedExportsOrder,Ke as default,u as fullyLoaded,f as stacked,d as tearsheetNarrow};
//# sourceMappingURL=TearsheetNarrow.stories-CxWAmj5S.js.map
