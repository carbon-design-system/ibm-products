import{r as l,e}from"./index-CPiZ6Cnx.js";import{a as b}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{p as F,B as k}from"./settings-iwZeeh4T.js";import"./index-CXyjPnaX.js";import{F as W}from"./Form--JAB0_ak.js";import{F as j}from"./FormGroup-9BStNhuZ.js";import{T as q,a as H,b as J,A as K,c as Q}from"./index-DFTsbWWI.js";import{T as U}from"./TextInput-D6QswYlg.js";import{T as y,d as V}from"./TearsheetNarrow--jmzU21R.js";import{s as X,a as Y,b as Z,c as ee}from"./_storybook-styles-PO4T6scg.js";import{g as te}from"./props-helper-Dlg0HCIz.js";import{e as oe}from"./bucket-9-BSWQ2dSd.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./events-OVwOsPzJ.js";import"./index-DJK44odq.js";import"./index-BSHYryQu.js";import"./index-Bsyy8W_U.js";import"./bucket-17-Ddrrb1BH.js";import"./useNormalizedInputProps-Dv8FHz9Q.js";import"./Text-vNWzJqus.js";import"./bucket-18-By6NmkK1.js";import"./FormContext-CgeSXHS1.js";import"./useAnnouncer-Dwt0jqXi.js";import"./TearsheetShell-bqG2YThR.js";import"./useResizeObserver-CZKdqPxj.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-BZzRRIGC.js";import"./index-Dcfl0vi2.js";import"./LayerContext-BGhaVt7n.js";import"./ButtonSet-DCPCKVSR.js";import"./InlineLoading-DZri6jHG.js";import"./bucket-6-BQYdmIZX.js";import"./bucket-2-L5Cs0C3i.js";import"./mergeRefs-CTUecegF.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-i_P_nIQh.js";import"./usePortalTarget-2TvXB9Ir.js";import"./feature-flags-B_abUzZ5.js";import"./index-BLF2Ep9P.js";import"./useFocus-szDTkabV.js";import"./wait-CTNFjQS8.js";import"./usePreviousValue-CSEZflXC.js";import"./ActionSet-B09sMic5.js";import"./devtools-CjVY-wQW.js";const Ve={title:"IBM Products/Components/Tearsheet/TearsheetNarrow",component:y,tags:["autodocs"],parameters:{layout:"fullscreen",styles:X},argTypes:{...te(V),actions:{control:{type:"select",labels:Y},options:Z,mapping:ee({primary:"Create",secondary:"Close",secondary2:"Save",ghost:"Cancel"},b)},description:{control:{type:"text"}},label:{control:{type:"text"}},title:{control:{type:"text"}},onClose:{control:{disable:!0}},open:{control:{disable:!0}},portalTarget:{control:{disable:!0}},decorator:{control:{type:"select",labels:{0:"No AI Label",1:"with AI Label",2:"With non AI Label component"},default:0},description:"Optional prop that allows you to pass any component.",options:[0,1,2]},slug:{control:{type:"select",labels:{0:"No AI Slug",1:"with AI Slug"},default:0},description:'deprecated Property replaced by "decorator"',options:[0,1]}}},E="Close the tearsheet",N="This is a description for the tearsheet, providing an opportunity to   describe the flow.",L="The label of the tearsheet",re=e.createElement("div",{className:"tearsheet-stories__narrow-content-block"},e.createElement(W,null,e.createElement("p",null,"Main content"),e.createElement(j,{legendId:"tearsheetNarrow-form-group",legendText:"FormGroup Legend"},e.createElement(U,{id:"tss-ft1",labelText:"Enter an important value here"})))),P="Title of the tearsheet",n=a=>{switch(a){case 1:return e.createElement(K,{className:"decorator-container",size:"xs"},e.createElement(Q,null,e.createElement("div",null,e.createElement("p",{className:"secondary"},"AI Explained"),e.createElement("h1",null,"84%"),e.createElement("p",{className:"secondary bold"},"Confidence score"),e.createElement("p",{className:"secondary"},"This is not really Lorem Ipsum but the spell checker did not like the previous text with it's non-words which is why this unwieldy sentence, should one choose to call it that, here."),e.createElement("hr",null),e.createElement("p",{className:"secondary"},"Model type"),e.createElement("p",{className:"bold"},"Foundation model"))));case 2:return e.createElement(q,null,e.createElement(H,{label:"Additional information"},e.createElement(oe,null)),e.createElement(J,null,e.createElement("p",null,"Custom content here")));default:return}},R=({actions:a,decorator:o,slug:r,...d},u)=>{const[v,s]=l.useState(u.viewMode!=="docs"),w=l.useRef(void 0),f=Array.prototype.map.call(a,c=>{if(c.label==="Cancel"){const h=c.onClick;return{...c,onClick:T=>{s(!1),h(T)}}}return c});return e.createElement(e.Fragment,null,e.createElement("style",null,`.${F.prefix}--tearsheet { opacity: 0 }`,";"),e.createElement(k,{onClick:()=>s(!0)},"Open Tearsheet"),e.createElement("div",{ref:w},e.createElement(y,{...d,actions:f,open:v,onClose:()=>s(!1),decorator:o&&n(o),slug:r&&n(r)},re)))},ne=({actions:a,decorator:o,slug:r,...d},u)=>{const[v,s]=l.useState(u.viewMode!=="docs"),[w,f]=l.useState(u.viewMode!=="docs"),[c,h]=l.useState(u.viewMode!=="docs"),T=l.useRef(void 0),$=Array.prototype.map.call(a,t=>{if(t.label==="Cancel"){const g=t.onClick;return{...t,onClick:C=>{s(!1),g(C)}}}return t}),z=Array.prototype.map.call(a,t=>{if(t.label==="Cancel"){const g=t.onClick;return{...t,onClick:C=>{f(!1),g(C)}}}return t}),G=Array.prototype.map.call(a,t=>{if(t.label==="Cancel"){const g=t.onClick;return{...t,onClick:C=>{h(!1),g(C)}}}return t});return e.createElement(e.Fragment,null,e.createElement("style",null,`.${F.prefix}--tearsheet { opacity: 0 }`,";"),e.createElement("div",{style:{height:"3rem"},"data-reserve-space":"for toggle buttons"}),e.createElement("div",{style:{display:"flex",position:"fixed",top:0,left:0,zIndex:1e4}},e.createElement(k,{onClick:()=>s(!v)},"Toggle #1"),e.createElement(k,{onClick:()=>f(!w)},"Toggle #2"),e.createElement(k,{onClick:()=>h(!c)},"Toggle #3")),e.createElement("div",{ref:T},e.createElement(y,{...d,actions:$,title:"Tearsheet #1",open:v,onClose:()=>s(!1),decorator:o&&n(o),slug:r&&n(r)},e.createElement("div",{className:"tearsheet-stories__narrow-content-block"},"Main content 1")),e.createElement(y,{...d,actions:z,title:"Tearsheet #2",open:w,onClose:()=>f(!1),decorator:o&&n(o),slug:r&&n(r),selectorPrimaryFocus:"#main-content"},e.createElement("div",{className:"tearsheet-stories__narrow-content-block"},"Main content 2")),e.createElement(y,{...d,actions:G,title:"Tearsheet #3",open:c,onClose:()=>h(!1),decorator:o&&n(o),slug:r&&n(r),selectorPrimaryFocus:"#main-content"},e.createElement("div",{className:"tearsheet-stories__narrow-content-block"},"Main content 3"))))},i=R.bind({});i.storyName="Narrow tearsheet";i.args={closeIconDescription:E,description:N,onClose:b("onClose called"),title:P,actions:7};const p=R.bind({});p.storyName="Narrow tearsheet with all header items";p.args={closeIconDescription:E,description:N,hasCloseIcon:!0,label:L,onClose:b("onClose called"),title:P,actions:0,decorator:1,slug:0};const m=ne.bind({});m.storyName="Stacking narrow tearsheets";m.args={closeIconDescription:E,description:N,height:"lower",label:L,actions:7};var A,O,x;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`({
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
}`,...(x=(O=i.parameters)==null?void 0:O.docs)==null?void 0:x.source}}};var M,I,S;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`({
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
}`,...(S=(I=p.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var _,B,D;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`({
  actions,
  decorator,
  slug,
  ...args
}, context) => {
  const [open1, setOpen1] = useState(context.viewMode !== 'docs');
  const [open2, setOpen2] = useState(context.viewMode !== 'docs');
  const [open3, setOpen3] = useState(context.viewMode !== 'docs');
  const ref = useRef(undefined);
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
}`,...(D=(B=m.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};const Xe=["tearsheetNarrow","fullyLoaded","stacked"];export{Xe as __namedExportsOrder,Ve as default,p as fullyLoaded,m as stacked,i as tearsheetNarrow};
