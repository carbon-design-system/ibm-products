import{j as e,p as F,B as y}from"./settings-DEdZ0TrD.js";import{r as s}from"./index-BwDkhjyp.js";import{a as v}from"./chunk-MZXVCX43-CM0pFb8Z.js";import"./floating-ui.core.mjs-LzsX8FoD.js";import{F as z}from"./Form-CtOSeT3_.js";import{F as D}from"./FormGroup-2MNJUnTV.js";import{A as G,a as q}from"./index-B87aoAka.js";import{T as H}from"./TextInput-DnFddHXA.js";import{T as f,d as J}from"./TearsheetNarrow-O6mcx78L.js";import{s as K,a as Q,b as U,c as V}from"./_storybook-styles-PO4T6scg.js";import{g as W}from"./props-helper-Bq60RLbY.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-Dk74W0Oi.js";import"./events-BwXSUnsA.js";import"./index-CtP8jiW9.js";import"./v4-CQkTLCs1.js";import"./index-BONylQH5.js";import"./bucket-17-Cv_pKmw7.js";import"./useNormalizedInputProps-SnNF9w2p.js";import"./Text-DzW_iQLr.js";import"./bucket-18-BepxNBd9.js";import"./FormContext-C7kRVu4t.js";import"./useAnnouncer-Dwt0jqXi.js";import"./TearsheetShell-D_WxQLC9.js";import"./useResizeObserver-CYrpFlRY.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-Bz57YeIR.js";import"./index-DcAOwtUU.js";import"./index-B19trKVm.js";import"./LayerContext-DbU-6VX4.js";import"./ButtonSet-B0eeKBZg.js";import"./InlineLoading-b-XMbmpT.js";import"./bucket-6-COExmpDO.js";import"./mergeRefs-CTUecegF.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-DKhmFa_m.js";import"./index-Jn_1HPt0.js";import"./usePortalTarget-C9qZOTQP.js";import"./feature-flags-ZUymDm0z.js";import"./index-BkXf54zg.js";import"./useFocus-BSpNcszJ.js";import"./wait-CTNFjQS8.js";import"./usePreviousValue-DDnp_zt4.js";import"./ActionSet-aBtXfkQ8.js";import"./devtools-BMJcATO0.js";const Je={title:"IBM Products/Components/Tearsheet/TearsheetNarrow",component:f,tags:["autodocs"],parameters:{layout:"fullscreen",styles:K},argTypes:{...W(J),actions:{control:{type:"select",labels:Q},options:U,mapping:V({primary:"Create",secondary:"Close",secondary2:"Save",ghost:"Cancel"},v)},description:{control:{type:"text"}},label:{control:{type:"text"}},title:{control:{type:"text"}},onClose:{control:{disable:!0}},open:{control:{disable:!0}},portalTarget:{control:{disable:!0}},slug:{control:{type:"select",labels:{0:"No AI slug",1:"with AI Slug"},default:0},options:[0,1]}}},w="Close the tearsheet",T="This is a description for the tearsheet, providing an opportunity to   describe the flow.",M="The label of the tearsheet",X=e.jsx("div",{className:"tearsheet-stories__narrow-content-block",children:e.jsxs(z,{children:[e.jsx("p",{children:"Main content"}),e.jsx(D,{legendId:"tearsheetNarrow-form-group",legendText:"FormGroup Legend",children:e.jsx(H,{id:"tss-ft1",labelText:"Enter an important value here"})})]})}),L="Title of the tearsheet",x=e.jsx(G,{className:"slug-container",size:"xs",children:e.jsx(q,{children:e.jsxs("div",{children:[e.jsx("p",{className:"secondary",children:"AI Explained"}),e.jsx("h1",{children:"84%"}),e.jsx("p",{className:"secondary bold",children:"Confidence score"}),e.jsx("p",{className:"secondary",children:"This is not really Lorem Ipsum but the spell checker did not like the previous text with it's non-words which is why this unwieldy sentence, should one choose to call it that, here."}),e.jsx("hr",{}),e.jsx("p",{className:"secondary",children:"Model type"}),e.jsx("p",{className:"bold",children:"Foundation model"})]})})}),P=({actions:l,slug:c,...p})=>{const[g,n]=s.useState(!1),C=s.useRef(),d=Array.prototype.map.call(l,o=>{if(o.label==="Cancel"){const m=o.onClick;return{...o,onClick:k=>{n(!1),m(k)}}}return o});return e.jsxs(e.Fragment,{children:[e.jsxs("style",{children:[`.${F.prefix}--tearsheet { opacity: 0 }`,";"]}),e.jsx(y,{onClick:()=>n(!0),children:"Open Tearsheet"}),e.jsx("div",{ref:C,children:e.jsx(f,{...p,actions:d,open:g,onClose:()=>n(!1),slug:c&&x,children:X})})]})},Y=({actions:l,slug:c,...p})=>{const[g,n]=s.useState(!1),[C,d]=s.useState(!1),[o,m]=s.useState(!1),k=s.useRef(),R=Array.prototype.map.call(l,t=>{if(t.label==="Cancel"){const u=t.onClick;return{...t,onClick:h=>{n(!1),u(h)}}}return t}),E=Array.prototype.map.call(l,t=>{if(t.label==="Cancel"){const u=t.onClick;return{...t,onClick:h=>{d(!1),u(h)}}}return t}),$=Array.prototype.map.call(l,t=>{if(t.label==="Cancel"){const u=t.onClick;return{...t,onClick:h=>{m(!1),u(h)}}}return t});return e.jsxs(e.Fragment,{children:[e.jsxs("style",{children:[`.${F.prefix}--tearsheet { opacity: 0 }`,";"]}),e.jsx("div",{style:{height:"3rem"},"data-reserve-space":"for toggle buttons"}),e.jsxs("div",{style:{display:"flex",position:"fixed",top:0,left:0,zIndex:1e4},children:[e.jsx(y,{onClick:()=>n(!g),children:"Toggle #1"}),e.jsx(y,{onClick:()=>d(!C),children:"Toggle #2"}),e.jsx(y,{onClick:()=>m(!o),children:"Toggle #3"})]}),e.jsxs("div",{ref:k,children:[e.jsx(f,{...p,actions:R,title:"Tearsheet #1",open:g,onClose:()=>n(!1),slug:c&&x,children:e.jsx("div",{className:"tearsheet-stories__narrow-content-block",children:"Main content 1"})}),e.jsx(f,{...p,actions:E,title:"Tearsheet #2",open:C,onClose:()=>d(!1),slug:c&&x,selectorPrimaryFocus:"#main-content",children:e.jsx("div",{className:"tearsheet-stories__narrow-content-block",children:"Main content 2"})}),e.jsx(f,{...p,actions:$,title:"Tearsheet #3",open:o,onClose:()=>m(!1),slug:c&&x,selectorPrimaryFocus:"#main-content",children:e.jsx("div",{className:"tearsheet-stories__narrow-content-block",children:"Main content 3"})})]})]})},r=P.bind({});r.storyName="Narrow tearsheet";r.args={closeIconDescription:w,description:T,onClose:v("onClose called"),title:L,actions:7};const a=P.bind({});a.storyName="Narrow tearsheet with all header items";a.args={closeIconDescription:w,description:T,hasCloseIcon:!0,label:M,onClose:v("onClose called"),title:L,actions:0,slug:1};const i=Y.bind({});i.storyName="Stacking narrow tearsheets";i.args={closeIconDescription:w,description:T,height:"lower",label:M,actions:7};var b,j,N;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`({
  actions,
  slug,
  ...args
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
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
        <TearsheetNarrow {...args} actions={wiredActions} open={open} onClose={() => setOpen(false)} slug={slug && sampleSlug}>
          {mainContent}
        </TearsheetNarrow>
      </div>
    </>;
}`,...(N=(j=r.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var A,O,S;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`({
  actions,
  slug,
  ...args
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
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
        <TearsheetNarrow {...args} actions={wiredActions} open={open} onClose={() => setOpen(false)} slug={slug && sampleSlug}>
          {mainContent}
        </TearsheetNarrow>
      </div>
    </>;
}`,...(S=(O=a.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var _,B,I;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`({
  actions,
  slug,
  ...args
}) => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const ref = useRef();
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
        <TearsheetNarrow {...args} actions={wiredActions1} title="Tearsheet #1" open={open1} onClose={() => setOpen1(false)} slug={slug && sampleSlug}>
          <div className="tearsheet-stories__narrow-content-block">
            Main content 1
          </div>
        </TearsheetNarrow>
        <TearsheetNarrow {...args} actions={wiredActions2} title="Tearsheet #2" open={open2} onClose={() => setOpen2(false)} slug={slug && sampleSlug} selectorPrimaryFocus="#main-content">
          <div className="tearsheet-stories__narrow-content-block">
            Main content 2
          </div>
        </TearsheetNarrow>
        <TearsheetNarrow {...args} actions={wiredActions3} title="Tearsheet #3" open={open3} onClose={() => setOpen3(false)} slug={slug && sampleSlug} selectorPrimaryFocus="#main-content">
          <div className="tearsheet-stories__narrow-content-block">
            Main content 3
          </div>
        </TearsheetNarrow>
      </div>
    </>;
}`,...(I=(B=i.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};const Ke=["tearsheetNarrow","fullyLoaded","stacked"];export{Ke as __namedExportsOrder,Je as default,a as fullyLoaded,i as stacked,r as tearsheetNarrow};
