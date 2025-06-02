import{e,r as l}from"./index-DtHxqM--.js";import{a as T}from"./index-B-lxVbXh.js";import{p as B,B as k}from"./settings-JuRwpTYJ.js";import{S as N}from"./StringFormatter-BTvbWlle.js";import"./index-Ccw_5OKp.js";import{F as G}from"./Form-Dq-0qMzU.js";import{F as j}from"./FormGroup-wG1XWDcH.js";import{T as q}from"./TextInput-BqseqOCj.js";import{T as H,a as J,b as K,A as Q,c as U}from"./index-CE9buGiA.js";import{T as y,d as V}from"./TearsheetNarrow-Cn9JH-yc.js";import{a as X,b as Y,c as Z,s as ee}from"./_storybook-styles-XzCpCSKO.js";import{g as te}from"./props-helper-mI8EhIiv.js";import{e as oe}from"./bucket-9-Tu9Xse6i.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CtRu48qb.js";import"./events-OVwOsPzJ.js";import"./index-DxWVrnnv.js";import"./devtools-DSwQefcu.js";import"./DefinitionTooltip-I5zY1xMX.js";import"./useIsomorphicEffect-DztsuiUB.js";import"./index-DgLvjnYm.js";import"./index-CiYgQLeJ.js";import"./useNormalizedInputProps-Cy1SYPx-.js";import"./Text-CPocCdE2.js";import"./bucket-18-CKSgrqVQ.js";import"./FormContext-C4Nuixum.js";import"./bucket-17-Ch8K0_jZ.js";import"./TearsheetShell-BOLYesZ1.js";import"./useResizeObserver-CiQvgsPb.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-B82WV5E1.js";import"./index-CpJD3P8E.js";import"./LayerContext-B9CO-6mR.js";import"./clamp--00YEiB8.js";import"./ButtonSet-CHfwLmwF.js";import"./InlineLoading-B1G6aSdW.js";import"./bucket-6-byl-qy8t.js";import"./mergeRefs-CTUecegF.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-BExY9CJ6.js";import"./index-B8L-_-6_.js";import"./Wrap-B-FOhFq_.js";import"./usePortalTarget-DjC7v3SL.js";import"./feature-flags-BgCiJpXY.js";import"./index-ClSKgvHK.js";import"./useFocus-D3eRozWJ.js";import"./usePreviousValue-CuNkkQo9.js";import"./ActionSet-My3qJvIA.js";const Ze={title:"IBM Products/Components/Tearsheet/TearsheetNarrow",component:y,tags:["autodocs"],parameters:{layout:"fullscreen",styles:ee},argTypes:{...te(V),actions:{control:{type:"select",labels:Z},options:Y,mapping:X({primary:"Create",secondary:"Close",secondary2:"Save",ghost:"Cancel"},T)},description:{control:{type:"select",labels:{0:"With plain String",1:"With StringFormatter and 1 line",2:"With StringFormatter and 2 lines"},default:0},description:"A description of the flow, displayed in the header area of the tearsheet.\n Note: `StringFormatter` can be passed as a React node to apply custom text formatting, including ellipsis truncation and a definition tooltip when the content is too long.",options:[0,1,2],mapping:{0:"This is a description for the tearsheet, providing an opportunity to describe the flow.",1:e.createElement(N,{lines:1,truncate:!0,value:"This is a description for the tearsheet, providing an opportunity to describe the flow over a couple of lines in the header of the tearsheet.",tooltipDirection:"bottom"}),2:e.createElement(N,{lines:2,truncate:!0,value:"This is a description for the tearsheet, providing an opportunity to describe the flow over a couple of lines in the header of the tearsheet.",tooltipDirection:"bottom"})}},label:{control:{type:"text"}},title:{control:{type:"text"}},onClose:{control:{disable:!0}},open:{control:{disable:!0}},portalTarget:{control:{disable:!0}},decorator:{control:{type:"select",labels:{0:"No AI Label",1:"with AI Label",2:"With non AI Label component"},default:0},description:"Optional prop that allows you to pass any component.",options:[0,1,2]},slug:{control:{type:"select",labels:{0:"No AI Slug",1:"with AI Slug"},default:0},description:'deprecated Property replaced by "decorator"',options:[0,1]}}},E="Close the tearsheet",L="The label of the tearsheet",re=e.createElement("div",{className:"tearsheet-stories__narrow-content-block"},e.createElement(G,null,e.createElement("p",null,"Main content"),e.createElement(j,{legendId:"tearsheetNarrow-form-group",legendText:"FormGroup Legend"},e.createElement(q,{id:"tss-ft1",labelText:"Enter an important value here"})))),P="Title of the tearsheet",a=s=>{switch(s){case 1:return e.createElement(Q,{className:"decorator-container",size:"xs"},e.createElement(U,null,e.createElement("div",null,e.createElement("p",{className:"secondary"},"AI Explained"),e.createElement("h1",null,"84%"),e.createElement("p",{className:"secondary bold"},"Confidence score"),e.createElement("p",{className:"secondary"},"This is not really Lorem Ipsum but the spell checker did not like the previous text with it's non-words which is why this unwieldy sentence, should one choose to call it that, here."),e.createElement("hr",null),e.createElement("p",{className:"secondary"},"Model type"),e.createElement("p",{className:"bold"},"Foundation model"))));case 2:return e.createElement(H,null,e.createElement(J,{label:"Additional information"},e.createElement(oe,null)),e.createElement(K,null,e.createElement("p",null,"Custom content here")));default:return}},R=({actions:s,decorator:o,slug:r,...f},h)=>{const[v,n]=l.useState(h.viewMode!=="docs"),w=l.useRef(void 0),c=Array.prototype.map.call(s,i=>{if(i.label==="Cancel"){const p=i.onClick;return{...i,onClick:b=>{n(!1),p(b)}}}return i});return e.createElement(e.Fragment,null,e.createElement("style",null,`.${B.prefix}--tearsheet { opacity: 0 }`,";"),e.createElement(k,{onClick:()=>n(!0)},"Open Tearsheet"),e.createElement("div",{ref:w},e.createElement(y,{...f,actions:c,open:v,onClose:()=>n(!1),decorator:o&&a(o),slug:r&&a(r)},re)))},ne=({actions:s,decorator:o,slug:r,...f},h)=>{const[v,n]=l.useState(!1),[w,c]=l.useState(!1),[i,p]=l.useState(!1),b=l.useRef(void 0);l.useEffect(()=>{n(h.viewMode!=="docs"),c(h.viewMode!=="docs"),p(h.viewMode!=="docs")},[]);const $=Array.prototype.map.call(s,t=>{if(t.label==="Cancel"){const g=t.onClick;return{...t,onClick:C=>{n(!1),g(C)}}}return t}),W=Array.prototype.map.call(s,t=>{if(t.label==="Cancel"){const g=t.onClick;return{...t,onClick:C=>{c(!1),g(C)}}}return t}),z=Array.prototype.map.call(s,t=>{if(t.label==="Cancel"){const g=t.onClick;return{...t,onClick:C=>{p(!1),g(C)}}}return t});return e.createElement(e.Fragment,null,e.createElement("style",null,`.${B.prefix}--tearsheet { opacity: 0 }`,";"),e.createElement("div",{style:{height:"3rem"},"data-reserve-space":"for toggle buttons"}),e.createElement("div",{style:{display:"flex",position:"fixed",top:0,left:0,zIndex:1e4}},e.createElement(k,{onClick:()=>n(!v)},"Toggle #1"),e.createElement(k,{onClick:()=>c(!w)},"Toggle #2"),e.createElement(k,{onClick:()=>p(!i)},"Toggle #3")),e.createElement("div",{ref:b},e.createElement(y,{...f,actions:$,title:"Tearsheet #1",open:v,onClose:()=>n(!1),decorator:o&&a(o),slug:r&&a(r)},e.createElement("div",{className:"tearsheet-stories__narrow-content-block"},"Main content 1")),e.createElement(y,{...f,actions:W,title:"Tearsheet #2",open:w,onClose:()=>c(!1),decorator:o&&a(o),slug:r&&a(r),selectorPrimaryFocus:"#main-content"},e.createElement("div",{className:"tearsheet-stories__narrow-content-block"},"Main content 2")),e.createElement(y,{...f,actions:z,title:"Tearsheet #3",open:i,onClose:()=>p(!1),decorator:o&&a(o),slug:r&&a(r),selectorPrimaryFocus:"#main-content"},e.createElement("div",{className:"tearsheet-stories__narrow-content-block"},"Main content 3"))))},m=R.bind({});m.storyName="Narrow tearsheet";m.args={closeIconDescription:E,description:0,onClose:T("onClose called"),title:P,actions:7};const d=R.bind({});d.storyName="Narrow tearsheet with all header items";d.args={closeIconDescription:E,description:0,hasCloseIcon:!0,label:L,onClose:T("onClose called"),title:P,actions:0,decorator:1,slug:0};const u=ne.bind({});u.storyName="Stacking narrow tearsheets";u.args={closeIconDescription:E,description:0,height:"lower",label:L,actions:7};var A,O,x;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`({
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
}`,...(x=(O=m.parameters)==null?void 0:O.docs)==null?void 0:x.source}}};var S,M,I;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`({
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
}`,...(I=(M=d.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};var _,F,D;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`({
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
}`,...(D=(F=u.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};const et=["tearsheetNarrow","fullyLoaded","stacked"];export{et as __namedExportsOrder,Ze as default,d as fullyLoaded,u as stacked,m as tearsheetNarrow};
