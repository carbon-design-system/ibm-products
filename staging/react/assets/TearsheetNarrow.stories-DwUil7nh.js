var B=Object.defineProperty;var t=(n,r)=>B(n,"name",{value:r,configurable:!0});import{R as e,r as c,K as O,L as b}from"./iframe-CaYiXxeb.js";import{A as F}from"./index-BCsWbdVX.js";import{T as L,a as R,b as P}from"./index-jlb8RiJl.js";import{A as $,a as W}from"./index-BX-ljRwx.js";import{F as z}from"./Form-D-Ju-HH3.js";import{F as G}from"./FormGroup-BzpKQVTj.js";import{T as K}from"./TextInput-8UbIMidv.js";import{T as C,d as j}from"./TearsheetNarrow-34nEyubO.js";import{a as U,b as Y,c as q,s as H}from"./_storybook-styles-Dkwn2GAg.js";import{g as J}from"./props-helper-DaiXPvfv.js";import{T as N}from"./TruncatedText-t_1WSfAq.js";import{b as Q}from"./bucket-11-CQyjVqQh.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-21-C4ELoiYU.js";import"./bucket-20-BIxJnZZV.js";import"./useNoInteractiveChildrenForLabel-1_tyUqLF.js";import"./Text-CGI6c8pb.js";import"./hasHelperText-CcJ_VphT.js";import"./useNormalizedInputProps-C--Qe6YU.js";import"./FormContext-D-VIdrjx.js";import"./getAnnouncement-B0n4vXaG.js";import"./TearsheetShell-DE_dKgUI.js";import"./useResizeObserver-R4NKztwC.js";import"./useIsomorphicEffect-CelFyGs3.js";import"./getNodeTextContent-CjFansOq.js";import"./index-CbznafVO.js";import"./LayerContext-C_jiTdxa.js";import"./clamp-ekNJC_Xv.js";import"./ComposedModal-BCG556m2.js";import"./mergeRefs-BH0-8uDG.js";import"./isTopmostVisibleModal-uVUXmJ0D.js";import"./InlineLoading-ZgtWNWQn.js";import"./bucket-7-BfvkBBdh.js";import"./ButtonSet-kpfj_AKD.js";import"./wrapFocus-BaZdYIcz.js";import"./index-D0ueUpbx.js";import"./Wrap-D7yYtBnZ.js";import"./usePortalTarget-PQnIa8FM.js";import"./index-Db3Fyji3.js";import"./useFocus-BSiYcBdv.js";import"./usePresence-0Us7zbuF.js";import"./useId-W2h0r20i.js";import"./uuidv4-Fbcg8Vng.js";import"./usePreviousValue-CI6rS2zt.js";import"./ActionSet-CxEDqNZ6.js";import"./devtools-Op8SBfoQ.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,Ye={title:"Deprecated/Tearsheet/TearsheetNarrow",component:C,tags:["autodocs"],parameters:{layout:"fullscreen",styles:H},decorators:[n=>e.createElement(F,{type:"deprecation-notice",text:e.createElement("div",null,"This component is deprecated and will be removed in a future major version. The composable replacement (",e.createElement("code",null,"preview__Tearsheet"),") will be promoted to stable in ",e.createElement("code",null,"@carbon/react")," at v12. Please migrate to"," ",e.createElement("a",{href:"https://ibm-products.carbondesignsystem.com/?path=/docs/preview-tearsheet--overview#migration-from-legacy-tearsheet"},"preview__Tearsheet"),".")},n())],argTypes:{...J(j),actions:{control:{type:"select",labels:q},options:Y,mapping:U({primary:"Create",secondary:"Close",secondary2:"Save",ghost:"Cancel"},E)},description:{control:{type:"select",labels:{0:"With plain String",1:"With TruncatedText and 1 line",2:"With TruncatedText and 2 lines"},default:0},description:"A description of the flow, displayed in the header area of the tearsheet.\n Note: `TruncatedText` can be passed as a React node to apply custom text formatting, including ellipsis truncation and a definition tooltip when the content is too long.",options:[0,1,2],mapping:{0:"This is a description for the tearsheet, providing an opportunity to describe the flow.",1:e.createElement(N,{lines:1,tooltipDirection:"bottom",value:"This is a description for the tearsheet, providing an opportunity to describe the flow over a couple of lines in the header of the tearsheet."}),2:e.createElement(N,{lines:2,tooltipDirection:"bottom",value:"This is a description for the tearsheet, providing an opportunity to describe the flow over a couple of lines in the header of the tearsheet."})}},label:{control:{type:"text"}},title:{control:{type:"text"}},onClose:{control:{disable:!0}},open:{control:{disable:!0}},portalTarget:{control:{disable:!0}},decorator:{control:{type:"select",labels:{0:"No AI Label",1:"with AI Label",2:"With non AI Label component"},default:0},description:"Optional prop that allows you to pass any component.",options:[0,1,2]},slug:{control:{type:"select",labels:{0:"No AI Slug",1:"with AI Slug"},default:0},description:'deprecated Property replaced by "decorator"',options:[0,1]}}},A="Close the tearsheet",x="The label of the tearsheet",V=e.createElement("div",{className:"tearsheet-stories__narrow-content-block"},e.createElement(z,null,e.createElement("p",null,"Main content"),e.createElement(G,{legendId:"tearsheetNarrow-form-group",legendText:"FormGroup Legend"},e.createElement(K,{id:"tss-ft1",labelText:"Enter an important value here"})))),_="Title of the tearsheet",l=t(n=>{switch(n){case 1:return e.createElement($,{className:"decorator-container",size:"xs"},e.createElement(W,null,e.createElement("div",null,e.createElement("p",{className:"secondary"},"AI Explained"),e.createElement("h1",null,"84%"),e.createElement("p",{className:"secondary bold"},"Confidence score"),e.createElement("p",{className:"secondary"},"This is not really Lorem Ipsum but the spell checker did not like the previous text with it's non-words which is why this unwieldy sentence, should one choose to call it that, here."),e.createElement("hr",null),e.createElement("p",{className:"secondary"},"Model type"),e.createElement("p",{className:"bold"},"Foundation model"))));case 2:return e.createElement(L,null,e.createElement(R,{label:"Additional information"},e.createElement(Q,null)),e.createElement(P,null,e.createElement("p",null,"Custom content here")));default:return}},"sampleDecorator"),S=t(({actions:n,decorator:r,slug:a,...f},g)=>{const[w,s]=c.useState(g.viewMode!=="docs"),T=c.useRef(void 0),p=Array.prototype.map.call(n,i=>{if(i.label==="Cancel"){const m=i.onClick;return{...i,onClick:t(k=>{s(!1),m(k)},"onClick")}}return i});return e.createElement(e.Fragment,null,e.createElement("style",null,`.${O.prefix}--tearsheet { opacity: 0 }`,";"),e.createElement("main",null,e.createElement(b,{onClick:t(()=>s(!0),"onClick")},"Open Tearsheet")),e.createElement("div",{ref:T},e.createElement(C,{...f,actions:p,open:w,onClose:t(()=>s(!1),"onClose"),decorator:r&&l(r),slug:a&&l(a)},V)))},"Template"),X=t(({actions:n,decorator:r,slug:a,...f},g)=>{const[w,s]=c.useState(!1),[T,p]=c.useState(!1),[i,m]=c.useState(!1),k=c.useRef(void 0);c.useEffect(()=>{s(g.viewMode!=="docs"),p(g.viewMode!=="docs"),m(g.viewMode!=="docs")},[]);const M=Array.prototype.map.call(n,o=>{if(o.label==="Cancel"){const y=o.onClick;return{...o,onClick:t(v=>{s(!1),y(v)},"onClick")}}return o}),D=Array.prototype.map.call(n,o=>{if(o.label==="Cancel"){const y=o.onClick;return{...o,onClick:t(v=>{p(!1),y(v)},"onClick")}}return o}),I=Array.prototype.map.call(n,o=>{if(o.label==="Cancel"){const y=o.onClick;return{...o,onClick:t(v=>{m(!1),y(v)},"onClick")}}return o});return e.createElement(e.Fragment,null,e.createElement("style",null,`.${O.prefix}--tearsheet { opacity: 0 }`,";"),e.createElement("div",{style:{height:"3rem"},"data-reserve-space":"for toggle buttons"}),e.createElement("main",{style:{display:"flex",position:"fixed",top:0,left:0,zIndex:1e4}},e.createElement(b,{onClick:t(()=>s(!w),"onClick")},"Toggle #1"),e.createElement(b,{onClick:t(()=>p(!T),"onClick")},"Toggle #2"),e.createElement(b,{onClick:t(()=>m(!i),"onClick")},"Toggle #3")),e.createElement("div",{ref:k},e.createElement(C,{...f,actions:M,title:"Tearsheet #1",open:w,onClose:t(()=>s(!1),"onClose"),decorator:r&&l(r),slug:a&&l(a)},e.createElement("div",{className:"tearsheet-stories__narrow-content-block"},"Main content 1")),e.createElement(C,{...f,actions:D,title:"Tearsheet #2",open:T,onClose:t(()=>p(!1),"onClose"),decorator:r&&l(r),slug:a&&l(a),selectorPrimaryFocus:"#main-content"},e.createElement("div",{className:"tearsheet-stories__narrow-content-block"},"Main content 2")),e.createElement(C,{...f,actions:I,title:"Tearsheet #3",open:i,onClose:t(()=>m(!1),"onClose"),decorator:r&&l(r),slug:a&&l(a),selectorPrimaryFocus:"#main-content"},e.createElement("div",{className:"tearsheet-stories__narrow-content-block"},"Main content 3"))))},"StackedTemplate"),d=S.bind({});d.storyName="Narrow tearsheet";d.args={closeIconDescription:A,description:0,onClose:E("onClose called"),title:_,actions:7};const u=S.bind({});u.storyName="Narrow tearsheet with all header items";u.args={closeIconDescription:A,description:0,hasCloseIcon:!0,label:x,onClose:E("onClose called"),title:_,actions:0,decorator:1,slug:0};const h=X.bind({});h.storyName="Stacking narrow tearsheets";h.args={closeIconDescription:A,description:0,height:"lower",label:x,actions:7};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`({
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
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`({
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
}`,...h.parameters?.docs?.source}}};const qe=["tearsheetNarrow","fullyLoaded","stacked"];export{qe as __namedExportsOrder,Ye as default,u as fullyLoaded,h as stacked,d as tearsheetNarrow};
//# sourceMappingURL=TearsheetNarrow.stories-DwUil7nh.js.map
