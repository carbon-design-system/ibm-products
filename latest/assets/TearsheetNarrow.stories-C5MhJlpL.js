import{r as c,e}from"./index-DzvNrmz8.js";import{a as b}from"./index-B-lxVbXh.js";import{p as F,B as k}from"./settings-DbzZchXt.js";import"./index-5As4T26e.js";import{F as W}from"./Form-EzleJG-j.js";import{F as j}from"./FormGroup-DglN6MVK.js";import{T as q,a as H,b as J,A as K,c as Q}from"./index-Cwsl1zwy.js";import{T as U}from"./TextInput-eyoE_C-N.js";import{T as y,d as V}from"./TearsheetNarrow-CAfaHRdw.js";import{a as X,b as Y,c as Z,s as ee}from"./_storybook-styles-XzCpCSKO.js";import{g as te}from"./props-helper-BZh4EldX.js";import{e as oe}from"./bucket-9-DBhRplFe.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./v4-CtRu48qb.js";import"./events-OVwOsPzJ.js";import"./index-P6UCShJt.js";import"./index-Cg1swjps.js";import"./index-Bv4JGo1_.js";import"./bucket-17-F0QcB3Pi.js";import"./useNormalizedInputProps-BTIESqM4.js";import"./Text-DyBNjUAs.js";import"./bucket-18-D-cwffHE.js";import"./FormContext-TkVWILkp.js";import"./useAnnouncer-Dwt0jqXi.js";import"./TearsheetShell-BKIzCle8.js";import"./useResizeObserver-Cp7HDrpC.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-DuX0rG4s.js";import"./index-B9LAK09p.js";import"./LayerContext-DfrloTEd.js";import"./ButtonSet-B2onNqwp.js";import"./InlineLoading-pF8In0wu.js";import"./bucket-6-BVxmYIXv.js";import"./mergeRefs-CTUecegF.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-DPmHpWJH.js";import"./index-pOgDNIY8.js";import"./DefinitionTooltip-DKyN1THq.js";import"./usePortalTarget-BRFg5-2X.js";import"./feature-flags-Cd4xSQCq.js";import"./index-BXVusgOK.js";import"./useFocus-CrEADr-4.js";import"./usePreviousValue-DGkdsrtI.js";import"./useIsomorphicEffect-l5L8NYko.js";import"./ActionSet-CYm8Ussl.js";import"./devtools-CskDVa8y.js";const Xe={title:"IBM Products/Components/Tearsheet/TearsheetNarrow",component:y,tags:["autodocs"],parameters:{layout:"fullscreen",styles:ee},argTypes:{...te(V),actions:{control:{type:"select",labels:Z},options:Y,mapping:X({primary:"Create",secondary:"Close",secondary2:"Save",ghost:"Cancel"},b)},description:{control:{type:"text"}},label:{control:{type:"text"}},title:{control:{type:"text"}},onClose:{control:{disable:!0}},open:{control:{disable:!0}},portalTarget:{control:{disable:!0}},decorator:{control:{type:"select",labels:{0:"No AI Label",1:"with AI Label",2:"With non AI Label component"},default:0},description:"Optional prop that allows you to pass any component.",options:[0,1,2]},slug:{control:{type:"select",labels:{0:"No AI Slug",1:"with AI Slug"},default:0},description:'deprecated Property replaced by "decorator"',options:[0,1]}}},E="Close the tearsheet",N="This is a description for the tearsheet, providing an opportunity to   describe the flow.",L="The label of the tearsheet",re=e.createElement("div",{className:"tearsheet-stories__narrow-content-block"},e.createElement(W,null,e.createElement("p",null,"Main content"),e.createElement(j,{legendId:"tearsheetNarrow-form-group",legendText:"FormGroup Legend"},e.createElement(U,{id:"tss-ft1",labelText:"Enter an important value here"})))),P="Title of the tearsheet",a=s=>{switch(s){case 1:return e.createElement(K,{className:"decorator-container",size:"xs"},e.createElement(Q,null,e.createElement("div",null,e.createElement("p",{className:"secondary"},"AI Explained"),e.createElement("h1",null,"84%"),e.createElement("p",{className:"secondary bold"},"Confidence score"),e.createElement("p",{className:"secondary"},"This is not really Lorem Ipsum but the spell checker did not like the previous text with it's non-words which is why this unwieldy sentence, should one choose to call it that, here."),e.createElement("hr",null),e.createElement("p",{className:"secondary"},"Model type"),e.createElement("p",{className:"bold"},"Foundation model"))));case 2:return e.createElement(q,null,e.createElement(H,{label:"Additional information"},e.createElement(oe,null)),e.createElement(J,null,e.createElement("p",null,"Custom content here")));default:return}},R=({actions:s,decorator:o,slug:r,...f},h)=>{const[v,n]=c.useState(h.viewMode!=="docs"),w=c.useRef(void 0),i=Array.prototype.map.call(s,l=>{if(l.label==="Cancel"){const p=l.onClick;return{...l,onClick:T=>{n(!1),p(T)}}}return l});return e.createElement(e.Fragment,null,e.createElement("style",null,`.${F.prefix}--tearsheet { opacity: 0 }`,";"),e.createElement(k,{onClick:()=>n(!0)},"Open Tearsheet"),e.createElement("div",{ref:w},e.createElement(y,{...f,actions:i,open:v,onClose:()=>n(!1),decorator:o&&a(o),slug:r&&a(r)},re)))},ne=({actions:s,decorator:o,slug:r,...f},h)=>{const[v,n]=c.useState(!1),[w,i]=c.useState(!1),[l,p]=c.useState(!1),T=c.useRef(void 0);c.useEffect(()=>{n(h.viewMode!=="docs"),i(h.viewMode!=="docs"),p(h.viewMode!=="docs")},[]);const $=Array.prototype.map.call(s,t=>{if(t.label==="Cancel"){const g=t.onClick;return{...t,onClick:C=>{n(!1),g(C)}}}return t}),z=Array.prototype.map.call(s,t=>{if(t.label==="Cancel"){const g=t.onClick;return{...t,onClick:C=>{i(!1),g(C)}}}return t}),G=Array.prototype.map.call(s,t=>{if(t.label==="Cancel"){const g=t.onClick;return{...t,onClick:C=>{p(!1),g(C)}}}return t});return e.createElement(e.Fragment,null,e.createElement("style",null,`.${F.prefix}--tearsheet { opacity: 0 }`,";"),e.createElement("div",{style:{height:"3rem"},"data-reserve-space":"for toggle buttons"}),e.createElement("div",{style:{display:"flex",position:"fixed",top:0,left:0,zIndex:1e4}},e.createElement(k,{onClick:()=>n(!v)},"Toggle #1"),e.createElement(k,{onClick:()=>i(!w)},"Toggle #2"),e.createElement(k,{onClick:()=>p(!l)},"Toggle #3")),e.createElement("div",{ref:T},e.createElement(y,{...f,actions:$,title:"Tearsheet #1",open:v,onClose:()=>n(!1),decorator:o&&a(o),slug:r&&a(r)},e.createElement("div",{className:"tearsheet-stories__narrow-content-block"},"Main content 1")),e.createElement(y,{...f,actions:z,title:"Tearsheet #2",open:w,onClose:()=>i(!1),decorator:o&&a(o),slug:r&&a(r),selectorPrimaryFocus:"#main-content"},e.createElement("div",{className:"tearsheet-stories__narrow-content-block"},"Main content 2")),e.createElement(y,{...f,actions:G,title:"Tearsheet #3",open:l,onClose:()=>p(!1),decorator:o&&a(o),slug:r&&a(r),selectorPrimaryFocus:"#main-content"},e.createElement("div",{className:"tearsheet-stories__narrow-content-block"},"Main content 3"))))},m=R.bind({});m.storyName="Narrow tearsheet";m.args={closeIconDescription:E,description:N,onClose:b("onClose called"),title:P,actions:7};const d=R.bind({});d.storyName="Narrow tearsheet with all header items";d.args={closeIconDescription:E,description:N,hasCloseIcon:!0,label:L,onClose:b("onClose called"),title:P,actions:0,decorator:1,slug:0};const u=ne.bind({});u.storyName="Stacking narrow tearsheets";u.args={closeIconDescription:E,description:N,height:"lower",label:L,actions:7};var A,O,x;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`({
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
      <Button onClick={() => setOpen(true)}>Open Tearsheet</Button>
      <div ref={ref}>
        <TearsheetNarrow {...args} actions={wiredActions} open={open} onClose={() => setOpen(false)} decorator={decorator && sampleDecorator(decorator)} slug={slug && sampleDecorator(slug)}>
          {mainContent}
        </TearsheetNarrow>
      </div>
    </>;
}`,...(x=(O=m.parameters)==null?void 0:O.docs)==null?void 0:x.source}}};var M,I,S;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`({
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
      <Button onClick={() => setOpen(true)}>Open Tearsheet</Button>
      <div ref={ref}>
        <TearsheetNarrow {...args} actions={wiredActions} open={open} onClose={() => setOpen(false)} decorator={decorator && sampleDecorator(decorator)} slug={slug && sampleDecorator(slug)}>
          {mainContent}
        </TearsheetNarrow>
      </div>
    </>;
}`,...(S=(I=d.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var _,B,D;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`({
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
      <div style={{
      display: 'flex',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 10000
    }}>
        <Button onClick={() => setOpen1(!open1)}>Toggle #1</Button>
        <Button onClick={() => setOpen2(!open2)}>Toggle #2</Button>
        <Button onClick={() => setOpen3(!open3)}>Toggle #3</Button>
      </div>
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
}`,...(D=(B=u.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};const Ye=["tearsheetNarrow","fullyLoaded","stacked"];export{Ye as __namedExportsOrder,Xe as default,d as fullyLoaded,u as stacked,m as tearsheetNarrow};
