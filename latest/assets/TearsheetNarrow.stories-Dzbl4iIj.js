import{j as e,p as I,B as y}from"./settings-B0yoEqB-.js";import{r as s}from"./index-BwDkhjyp.js";import{a as v}from"./chunk-MZXVCX43-CM0pFb8Z.js";import"./useMergedRefs-CY5AfkP4.js";import{F as z}from"./Form-Cn3WUQlV.js";import{F as D}from"./FormGroup-B8MM2mOm.js";import{S as G,a as q}from"./index-BTlTfnmk.js";import{T as H}from"./TextInput-Bwex9vy7.js";import{T as f,d as J}from"./TearsheetNarrow-S5NgCtPX.js";import{s as K,a as Q,b as U,c as V}from"./_storybook-styles-PO4T6scg.js";import{g as W}from"./props-helper-TFaonUid.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-Dk74W0Oi.js";import"./events-D6dlm1BF.js";import"./index-D2JPet7M.js";import"./index-BONylQH5.js";import"./v4-CQkTLCs1.js";import"./bucket-17-DEU5xTcO.js";import"./useNormalizedInputProps-zMYHe45M.js";import"./Text-CiWJR74P.js";import"./bucket-18-CV2-K6tq.js";import"./FormContext-C7kRVu4t.js";import"./useAnnouncer-MW4fVOqQ.js";import"./devtools-Cvhd47uB.js";import"./TearsheetShell-BnaySOIn.js";import"./useResizeObserver-CYrpFlRY.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-BsRPX6M2.js";import"./index-DcAOwtUU.js";import"./ButtonSet-reKR4OAu.js";import"./InlineLoading-C8yXZ83a.js";import"./bucket-6-DVxyWg0u.js";import"./mergeRefs-CTUecegF.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-CuszVIVc.js";import"./index-D0hq9jV7.js";import"./index-BYHiJ3ZX.js";import"./LayerContext-DbU-6VX4.js";import"./usePortalTarget-BFF9_zHB.js";import"./feature-flags-DaCaCBcF.js";import"./index-DLwhpbfx.js";import"./useFocus-DyL17TYP.js";import"./usePreviousValue-DDnp_zt4.js";import"./ActionSet-CO2N4_EX.js";const He={title:"IBM Products/Components/Tearsheet/TearsheetNarrow",component:f,tags:["autodocs"],parameters:{layout:"fullscreen",styles:K},argTypes:{...W(J),actions:{control:{type:"select",labels:Q},options:U,mapping:V({primary:"Create",secondary:"Close",secondary2:"Save",ghost:"Cancel"},v)},description:{control:{type:"text"}},label:{control:{type:"text"}},title:{control:{type:"text"}},onClose:{control:{disable:!0}},open:{control:{disable:!0}},portalTarget:{control:{disable:!0}},slug:{control:{type:"select",labels:{0:"No AI slug",1:"with AI Slug"},default:0},options:[0,1]}}},w="Close the tearsheet",T="This is a description for the tearsheet, providing an opportunity to   describe the flow.",M="The label of the tearsheet",X=e.jsx("div",{className:"tearsheet-stories__narrow-content-block",children:e.jsxs(z,{children:[e.jsx("p",{children:"Main content"}),e.jsx(D,{legendId:"tearsheetNarrow-form-group",legendText:"FormGroup Legend",children:e.jsx(H,{id:"tss-ft1",labelText:"Enter an important value here"})})]})}),P="Title of the tearsheet",x=e.jsx(G,{className:"slug-container",size:"xs",children:e.jsx(q,{children:e.jsxs("div",{children:[e.jsx("p",{className:"secondary",children:"AI Explained"}),e.jsx("h1",{children:"84%"}),e.jsx("p",{className:"secondary bold",children:"Confidence score"}),e.jsx("p",{className:"secondary",children:"This is not really Lorem Ipsum but the spell checker did not like the previous text with it's non-words which is why this unwieldy sentence, should one choose to call it that, here."}),e.jsx("hr",{}),e.jsx("p",{className:"secondary",children:"Model type"}),e.jsx("p",{className:"bold",children:"Foundation model"})]})})}),R=({actions:l,slug:c,...p})=>{const[g,n]=s.useState(!1),C=s.useRef(),d=Array.prototype.map.call(l,o=>{if(o.label==="Cancel"){const u=o.onClick;return{...o,onClick:k=>{n(!1),u(k)}}}return o});return e.jsxs(e.Fragment,{children:[e.jsxs("style",{children:[`.${I.prefix}--tearsheet { opacity: 0 }`,";"]}),e.jsx(y,{onClick:()=>n(!0),children:"Open Tearsheet"}),e.jsx("div",{ref:C,children:e.jsx(f,{...p,actions:d,open:g,onClose:()=>n(!1),slug:c&&x,children:X})})]})},Y=({actions:l,slug:c,...p})=>{const[g,n]=s.useState(!1),[C,d]=s.useState(!1),[o,u]=s.useState(!1),k=s.useRef(),E=Array.prototype.map.call(l,t=>{if(t.label==="Cancel"){const m=t.onClick;return{...t,onClick:h=>{n(!1),m(h)}}}return t}),L=Array.prototype.map.call(l,t=>{if(t.label==="Cancel"){const m=t.onClick;return{...t,onClick:h=>{d(!1),m(h)}}}return t}),$=Array.prototype.map.call(l,t=>{if(t.label==="Cancel"){const m=t.onClick;return{...t,onClick:h=>{u(!1),m(h)}}}return t});return e.jsxs(e.Fragment,{children:[e.jsxs("style",{children:[`.${I.prefix}--tearsheet { opacity: 0 }`,";"]}),e.jsx("div",{style:{height:"3rem"},"data-reserve-space":"for toggle buttons"}),e.jsxs("div",{style:{display:"flex",position:"fixed",top:0,left:0,zIndex:1e4},children:[e.jsx(y,{onClick:()=>n(!g),children:"Toggle #1"}),e.jsx(y,{onClick:()=>d(!C),children:"Toggle #2"}),e.jsx(y,{onClick:()=>u(!o),children:"Toggle #3"})]}),e.jsxs("div",{ref:k,children:[e.jsx(f,{...p,actions:E,title:"Tearsheet #1",open:g,onClose:()=>n(!1),slug:c&&x,children:e.jsx("div",{className:"tearsheet-stories__narrow-content-block",children:"Main content 1"})}),e.jsx(f,{...p,actions:L,title:"Tearsheet #2",open:C,onClose:()=>d(!1),slug:c&&x,selectorPrimaryFocus:"#main-content",children:e.jsx("div",{className:"tearsheet-stories__narrow-content-block",children:"Main content 2"})}),e.jsx(f,{...p,actions:$,title:"Tearsheet #3",open:o,onClose:()=>u(!1),slug:c&&x,selectorPrimaryFocus:"#main-content",children:e.jsx("div",{className:"tearsheet-stories__narrow-content-block",children:"Main content 3"})})]})]})},r=R.bind({});r.storyName="Narrow tearsheet";r.args={closeIconDescription:w,description:T,onClose:v("onClose called"),title:P,actions:7};const a=R.bind({});a.storyName="Narrow tearsheet with all header items";a.args={closeIconDescription:w,description:T,hasCloseIcon:!0,label:M,onClose:v("onClose called"),title:P,actions:0,slug:1};const i=Y.bind({});i.storyName="Stacking narrow tearsheets";i.args={closeIconDescription:w,description:T,height:"lower",label:M,actions:7};var b,j,N;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`({
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
}`,...(N=(j=r.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var O,A,S;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`({
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
}`,...(S=(A=a.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var _,B,F;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`({
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
}`,...(F=(B=i.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};const Je=["tearsheetNarrow","fullyLoaded","stacked"];export{Je as __namedExportsOrder,He as default,a as fullyLoaded,i as stacked,r as tearsheetNarrow};
