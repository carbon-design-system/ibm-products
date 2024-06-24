import{j as e,B as a,p as M}from"./settings-DrdbGLhD.js";import{r as i}from"./index-BwDkhjyp.js";import{a as h}from"./chunk-MZXVCX43-CM0pFb8Z.js";import"./deprecate-D9ms-jbM.js";import{B as z}from"./ButtonSet-CqsYbwZH.js";import{D as ue}from"./Dropdown-B71Nk9fM.js";import{F as de}from"./Form-Cl1Tfi_h.js";import{F as me}from"./FormGroup-CVk9XJ_R.js";import{T as he,a as fe,b as N}from"./Tabs-CmcZF7d8.js";import{S as ge,a as ye}from"./index-DQgsvTql.js";import{T as w}from"./TextInput-C0l_7R0Q.js";import{T,d as Ce}from"./Tearsheet-CL7RtKR8.js";import{a as ke,b as xe,c as be}from"./actions-B6JF5Mm8.js";import{g as ve}from"./props-helper-D-fMQKH_.js";import{s as Te}from"./_storybook-styles-BHn2MbcW.js";import{T as Se}from"./TearsheetNarrow-C8iKyGTn.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-Dk74W0Oi.js";import"./events-Bq7WR1mU.js";import"./index-BONylQH5.js";import"./v4-CQkTLCs1.js";import"./index-JVWw4PeO.js";import"./extends-CCbyfPlC.js";import"./index-DcAOwtUU.js";import"./tslib.es6-CI8bilKU.js";import"./FormContext-C7kRVu4t.js";import"./mergeRefs-CTUecegF.js";import"./bucket-17-CArjO86K.js";import"./useControllableState-DwpxGhsf.js";import"./useNoInteractiveChildren-B4Ro9ZJd.js";import"./useMatchMedia-w9z1Yjfq.js";import"./Text-_TFgs5hl.js";import"./bucket-16-C-1D9aPX.js";import"./useNormalizedInputProps-DRpk_7sW.js";import"./useAnnouncer-MW4fVOqQ.js";import"./devtools-B_UYo462.js";import"./TearsheetShell-Rfh9qQ1K.js";import"./useResizeObserver-CYrpFlRY.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-BkuB78hp.js";import"./InlineLoading-DEQVZSgg.js";import"./bucket-5-BuK6y5Rd.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-CuszVIVc.js";import"./index-gKY8typL.js";import"./index-DoBoZ-97.js";import"./LayerContext-DbU-6VX4.js";import"./usePortalTarget-BwaChJ5a.js";import"./feature-flags-CaJ_YE9P.js";import"./index-DshjxXYm.js";import"./index-CQjTSNrb.js";import"./useFocus-S7kgSeaq.js";import"./usePreviousValue-DDnp_zt4.js";import"./ActionSet-Byj_zrS3.js";const An={title:"IBM Products/Components/Tearsheet",component:T,tags:["autodocs"],parameters:{styles:Te,layout:"fullscreen"},argTypes:{...ve(Ce),actions:{control:{type:"select",labels:ke},options:xe,mapping:be({primary:"Replace",danger:"Delete",secondary:"Back",secondary2:"Keep Both",dangerGhost:"Abort",ghost:"Cancel"},h)},description:{control:{type:"text"}},headerActions:{control:{type:"select",labels:{0:"none",1:"drop-down",2:"buttons"}},options:[0,1,2],mapping:{0:null,1:e.jsx(ue,{id:"tss-had",label:"Choose an option",titleText:"Choose an option",items:["option 1","option 2","option 3","option 4"]}),2:e.jsxs(z,{children:[e.jsx(a,{kind:"secondary",size:"sm",style:{width:"initial"},children:"Secondary"}),e.jsx(a,{kind:"primary",size:"sm",style:{width:"initial"},children:"Primary"})]})}},label:{control:{type:"text"}},title:{control:{type:"text"}},influencer:{control:{disable:!0}},onClose:{control:{disable:!0}},navigation:{control:{disable:!0}},open:{control:{disable:!0}},portalTarget:{control:{disable:!0}},slug:{control:{type:"select",labels:{0:"No AI slug",1:"with AI Slug"},default:0},options:[0,1]}}},f="Close the tearsheet",g="This is a description for the tearsheet, providing an opportunity to   describe the flow over a couple of lines in the header of the tearsheet.",_=e.jsx("div",{className:"tearsheet-stories__dummy-content-block",children:"Influencer"}),R="The label of the tearsheet",oe=e.jsx("div",{className:"tearsheet-stories__dummy-content-block",children:e.jsxs(de,{children:[e.jsx("p",{children:"Main content"}),e.jsxs(me,{legendId:"tearsheet-form-group",legendText:"FormGroup Legend",children:[e.jsx(w,{id:"tss-ft1",labelText:"Enter an important value here",style:{marginBottom:"1em"}}),e.jsx(w,{id:"tss-ft2",labelText:"Here is an entry field:",style:{marginBottom:"1em"}})]})]})}),re=e.jsx("div",{className:"tearsheet-stories__tabs",children:e.jsx(he,{onChange:h("Tab selection changed"),children:e.jsxs(fe,{"aria-label":"Tab list",children:[e.jsx(N,{children:"Tab 1"}),e.jsx(N,{children:"Tab 2"}),e.jsx(N,{children:"Tab 3"}),e.jsx(N,{children:"Tab 4"})]})})}),B="Title of the tearsheet",A=e.jsx(ge,{className:"slug-container",size:"xs",children:e.jsx(ye,{children:e.jsxs("div",{children:[e.jsx("p",{className:"secondary",children:"AI Explained"}),e.jsx("h1",{children:"84%"}),e.jsx("p",{className:"secondary bold",children:"Confidence score"}),e.jsx("p",{className:"secondary",children:"This is not really Lorem Ipsum but the spell checker did not like the previous text with it's non-words which is why this unwieldy sentence, should one choose to call it that, here."}),e.jsx("hr",{}),e.jsx("p",{className:"secondary",children:"Model type"}),e.jsx("p",{className:"bold",children:"Foundation model"})]})})}),F=({actions:r,slug:p,...u})=>{const[d,s]=i.useState(!1),l=r&&Array.prototype.map.call(r,t=>{if(t.label==="Cancel"){const o=t.onClick;return{...t,onClick:c=>{s(!1),o(c)}}}return t}),m=i.useRef();return e.jsxs(e.Fragment,{children:[e.jsxs("style",{children:[`.${M.prefix}--tearsheet { opacity: 0 }`,";"]}),e.jsx(a,{onClick:()=>s(!0),children:"Open Tearsheet"}),e.jsx("div",{ref:m,children:e.jsx(T,{...u,actions:l,open:d,onClose:()=>s(!1),slug:p&&A,children:oe})})]})},Oe=({actions:r,slug:p,...u})=>{const[d,s]=i.useState(!1),l=i.useRef(),m=r&&Array.prototype.map.call(r,o=>{if(o.label==="Cancel"){const c=o.onClick;return{...o,onClick:I=>{s(!1),c(I)}}}return o}),t=i.useRef();return e.jsxs(e.Fragment,{children:[e.jsxs("style",{children:[`.${M.prefix}--tearsheet { opacity: 0 }`,";"]}),e.jsx(a,{ref:l,onClick:()=>s(!0),children:"Open Tearsheet"}),e.jsx("div",{ref:t,children:e.jsx(T,{...u,actions:m,open:d,onClose:()=>s(!1),slug:p&&A,launcherButtonRef:l,children:oe})})]})},ae=({mixedSizes:r,actions:p,slug:u,...d})=>{const[s,l]=i.useState(!1),[m,t]=i.useState(!1),[o,c]=i.useState(!1),I=i.useRef(),ie=Array.prototype.map.call(p,n=>{if(n.label==="Cancel"){const S=n.onClick;return{...n,onClick:O=>{l(!1),S(O)}}}return n}),le=Array.prototype.map.call(p,n=>{if(n.label==="Cancel"){const S=n.onClick;return{...n,onClick:O=>{t(!1),S(O)}}}return n}),ce=Array.prototype.map.call(p,n=>{if(n.label==="Cancel"){const S=n.onClick;return{...n,onClick:O=>{c(!1),S(O)}}}return n}),pe=r?Se:T;return e.jsxs(e.Fragment,{children:[e.jsxs("style",{children:[`.${M.prefix}--tearsheet { opacity: 0 }`,";"]}),e.jsx("div",{style:{height:"3rem"},"data-reserve-space":"for toggle buttons"}),e.jsxs(z,{style:{display:"flex",position:"fixed",top:0,left:0,zIndex:1e4},children:[e.jsx(a,{onClick:()=>l(!s),children:"Toggle tearsheet 1"}),e.jsx(a,{onClick:()=>t(!m),children:"Toggle tearsheet 2"}),!r&&e.jsx(a,{onClick:()=>c(!o),children:"Toggle tearsheet 3"})]}),e.jsxs("div",{ref:I,children:[e.jsx(T,{...d,actions:ie,headerActions:e.jsx(z,{children:e.jsx(a,{kind:"primary",size:"sm",style:{width:"initial"},onClick:()=>t(!0),disabled:m,children:"Open tearsheet 2"})}),title:"Tearsheet 1",open:s,onClose:()=>l(!1),selectorPrimaryFocus:"#stacked-input-1",slug:u&&A,children:e.jsxs("div",{className:"tearsheet-stories__dummy-content-block",children:["Main content 1",e.jsx(w,{id:"stacked-input-1",labelText:"Enter an important value here"})]})}),e.jsx(pe,{...d,actions:le,headerActions:e.jsx(z,{children:e.jsx(a,{kind:"primary",size:"sm",style:{width:"initial"},onClick:()=>c(!0),disabled:o,children:"Open tearsheet 3"})}),title:"Tearsheet 2",open:m,onClose:()=>t(!1),selectorPrimaryFocus:"#stacked-input-2",slug:u&&A,children:e.jsxs("div",{className:"tearsheet-stories__dummy-content-block",children:["Main content 2",e.jsx(w,{id:"stacked-input-2",labelText:"Enter an important value here"})]})}),!r&&e.jsx(T,{...d,actions:ce,title:"Tearsheet 3",open:o,onClose:()=>c(!1),selectorPrimaryFocus:"#stacked-input-3",slug:u&&A,children:e.jsxs("div",{className:"tearsheet-stories__dummy-content-block",children:["Main content 3",e.jsx(w,{id:"stacked-input-3",labelText:"Enter an important value here"})]})})]})]})},y=F.bind({});y.storyName="Tearsheet";y.args={closeIconDescription:f,description:g,onClose:h("onClose called"),title:B,actions:7,selectorPrimaryFocus:"#tss-ft1"};const C=F.bind({});C.storyName="Tearsheet with navigation";C.args={closeIconDescription:f,description:g,label:R,navigation:re,onClose:h("onClose called"),title:B,actions:7};const k=F.bind({});k.storyName="Tearsheet with influencer";k.args={closeIconDescription:f,description:g,influencer:_,influencerPosition:"left",influencerWidth:"narrow",onClose:h("onClose called"),title:B,actions:7};const j=Oe.bind({});j.args={closeIconDescription:f,description:g,onClose:h("onClose called"),title:B,actions:7};const x=F.bind({});x.storyName="Tearsheet with all header items and influencer";x.args={closeIconDescription:f,description:g,hasCloseIcon:!0,headerActions:2,influencer:_,influencerPosition:"left",influencerWidth:"narrow",label:R,navigation:re,onClose:h("onClose called"),title:B,actions:0,slug:1};const b=ae.bind({});b.storyName="Stacking tearsheets";b.args={closeIconDescription:f,description:g,height:"lower",influencer:_,label:R,actions:7};const v=ae.bind({});v.storyName="Stacking tearsheets, different sizes";v.args={mixedSizes:!0,closeIconDescription:f,description:g,height:"lower",influencer:_,label:R,actions:7};var P,E,$;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`({
  actions,
  slug,
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
  const ref = useRef();
  return <>
      <style>{\`.\${pkg.prefix}--tearsheet { opacity: 0 }\`};</style>
      <Button onClick={() => setOpen(true)}>Open Tearsheet</Button>
      <div ref={ref}>
        <Tearsheet {...args} actions={wiredActions} open={open} onClose={() => setOpen(false)} slug={slug && sampleSlug}>
          {mainContent}
        </Tearsheet>
      </div>
    </>;
}`,...($=(E=y.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};var V,L,D;C.parameters={...C.parameters,docs:{...(V=C.parameters)==null?void 0:V.docs,source:{originalSource:`({
  actions,
  slug,
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
  const ref = useRef();
  return <>
      <style>{\`.\${pkg.prefix}--tearsheet { opacity: 0 }\`};</style>
      <Button onClick={() => setOpen(true)}>Open Tearsheet</Button>
      <div ref={ref}>
        <Tearsheet {...args} actions={wiredActions} open={open} onClose={() => setOpen(false)} slug={slug && sampleSlug}>
          {mainContent}
        </Tearsheet>
      </div>
    </>;
}`,...(D=(L=C.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var G,W,H;k.parameters={...k.parameters,docs:{...(G=k.parameters)==null?void 0:G.docs,source:{originalSource:`({
  actions,
  slug,
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
  const ref = useRef();
  return <>
      <style>{\`.\${pkg.prefix}--tearsheet { opacity: 0 }\`};</style>
      <Button onClick={() => setOpen(true)}>Open Tearsheet</Button>
      <div ref={ref}>
        <Tearsheet {...args} actions={wiredActions} open={open} onClose={() => setOpen(false)} slug={slug && sampleSlug}>
          {mainContent}
        </Tearsheet>
      </div>
    </>;
}`,...(H=(W=k.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var K,q,J;j.parameters={...j.parameters,docs:{...(K=j.parameters)==null?void 0:K.docs,source:{originalSource:`({
  actions,
  slug,
  ...args
}) => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef();
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
  const ref = useRef();
  return <>
      <style>{\`.\${pkg.prefix}--tearsheet { opacity: 0 }\`};</style>
      <Button ref={buttonRef} onClick={() => setOpen(true)}>
        Open Tearsheet
      </Button>
      <div ref={ref}>
        <Tearsheet {...args} actions={wiredActions} open={open} onClose={() => setOpen(false)} slug={slug && sampleSlug} launcherButtonRef={buttonRef}>
          {mainContent}
        </Tearsheet>
      </div>
    </>;
}`,...(J=(q=j.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var Q,U,X;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`({
  actions,
  slug,
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
  const ref = useRef();
  return <>
      <style>{\`.\${pkg.prefix}--tearsheet { opacity: 0 }\`};</style>
      <Button onClick={() => setOpen(true)}>Open Tearsheet</Button>
      <div ref={ref}>
        <Tearsheet {...args} actions={wiredActions} open={open} onClose={() => setOpen(false)} slug={slug && sampleSlug}>
          {mainContent}
        </Tearsheet>
      </div>
    </>;
}`,...(X=(U=x.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`({
  mixedSizes,
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
  const VariableSizeTearsheet = mixedSizes ? TearsheetNarrow : Tearsheet;
  return <>
      <style>{\`.\${pkg.prefix}--tearsheet { opacity: 0 }\`};</style>
      <div style={{
      height: '3rem'
    }} data-reserve-space="for toggle buttons" />
      <ButtonSet style={{
      display: 'flex',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 10000
    }}>
        <Button onClick={() => setOpen1(!open1)}>
          Toggle&nbsp;tearsheet&nbsp;1
        </Button>
        <Button onClick={() => setOpen2(!open2)}>
          Toggle&nbsp;tearsheet&nbsp;2
        </Button>
        {!mixedSizes && <Button onClick={() => setOpen3(!open3)}>
            Toggle&nbsp;tearsheet&nbsp;3
          </Button>}
      </ButtonSet>
      <div ref={ref}>
        <Tearsheet {...args} actions={wiredActions1} headerActions={<ButtonSet>
              <Button kind="primary" size="sm" style={{
          width: 'initial'
        }} onClick={() => setOpen2(true)} disabled={open2}>
                Open tearsheet 2
              </Button>
            </ButtonSet>} title="Tearsheet 1" open={open1} onClose={() => setOpen1(false)} selectorPrimaryFocus="#stacked-input-1" slug={slug && sampleSlug}>
          <div className="tearsheet-stories__dummy-content-block">
            Main content 1
            <TextInput id="stacked-input-1" labelText="Enter an important value here" />
          </div>
        </Tearsheet>
        <VariableSizeTearsheet {...args} actions={wiredActions2} headerActions={<ButtonSet>
              <Button kind="primary" size="sm" style={{
          width: 'initial'
        }} onClick={() => setOpen3(true)} disabled={open3}>
                Open tearsheet 3
              </Button>
            </ButtonSet>} title="Tearsheet 2" open={open2} onClose={() => setOpen2(false)} selectorPrimaryFocus="#stacked-input-2" slug={slug && sampleSlug}>
          <div className="tearsheet-stories__dummy-content-block">
            Main content 2
            <TextInput id="stacked-input-2" labelText="Enter an important value here" />
          </div>
        </VariableSizeTearsheet>
        {!mixedSizes && <Tearsheet {...args} actions={wiredActions3} title="Tearsheet 3" open={open3} onClose={() => setOpen3(false)} selectorPrimaryFocus="#stacked-input-3" slug={slug && sampleSlug}>
            <div className="tearsheet-stories__dummy-content-block">
              Main content 3
              <TextInput id="stacked-input-3" labelText="Enter an important value here" />
            </div>
          </Tearsheet>}
      </div>
    </>;
}`,...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,te,se;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`({
  mixedSizes,
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
  const VariableSizeTearsheet = mixedSizes ? TearsheetNarrow : Tearsheet;
  return <>
      <style>{\`.\${pkg.prefix}--tearsheet { opacity: 0 }\`};</style>
      <div style={{
      height: '3rem'
    }} data-reserve-space="for toggle buttons" />
      <ButtonSet style={{
      display: 'flex',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 10000
    }}>
        <Button onClick={() => setOpen1(!open1)}>
          Toggle&nbsp;tearsheet&nbsp;1
        </Button>
        <Button onClick={() => setOpen2(!open2)}>
          Toggle&nbsp;tearsheet&nbsp;2
        </Button>
        {!mixedSizes && <Button onClick={() => setOpen3(!open3)}>
            Toggle&nbsp;tearsheet&nbsp;3
          </Button>}
      </ButtonSet>
      <div ref={ref}>
        <Tearsheet {...args} actions={wiredActions1} headerActions={<ButtonSet>
              <Button kind="primary" size="sm" style={{
          width: 'initial'
        }} onClick={() => setOpen2(true)} disabled={open2}>
                Open tearsheet 2
              </Button>
            </ButtonSet>} title="Tearsheet 1" open={open1} onClose={() => setOpen1(false)} selectorPrimaryFocus="#stacked-input-1" slug={slug && sampleSlug}>
          <div className="tearsheet-stories__dummy-content-block">
            Main content 1
            <TextInput id="stacked-input-1" labelText="Enter an important value here" />
          </div>
        </Tearsheet>
        <VariableSizeTearsheet {...args} actions={wiredActions2} headerActions={<ButtonSet>
              <Button kind="primary" size="sm" style={{
          width: 'initial'
        }} onClick={() => setOpen3(true)} disabled={open3}>
                Open tearsheet 3
              </Button>
            </ButtonSet>} title="Tearsheet 2" open={open2} onClose={() => setOpen2(false)} selectorPrimaryFocus="#stacked-input-2" slug={slug && sampleSlug}>
          <div className="tearsheet-stories__dummy-content-block">
            Main content 2
            <TextInput id="stacked-input-2" labelText="Enter an important value here" />
          </div>
        </VariableSizeTearsheet>
        {!mixedSizes && <Tearsheet {...args} actions={wiredActions3} title="Tearsheet 3" open={open3} onClose={() => setOpen3(false)} selectorPrimaryFocus="#stacked-input-3" slug={slug && sampleSlug}>
            <div className="tearsheet-stories__dummy-content-block">
              Main content 3
              <TextInput id="stacked-input-3" labelText="Enter an important value here" />
            </div>
          </Tearsheet>}
      </div>
    </>;
}`,...(se=(te=v.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};const Bn=["tearsheet","withNavigation","withInfluencer","ReturnFocusToOpenButton","fullyLoaded","stacked","stackedMixedSizes"];export{j as ReturnFocusToOpenButton,Bn as __namedExportsOrder,An as default,x as fullyLoaded,b as stacked,v as stackedMixedSizes,y as tearsheet,k as withInfluencer,C as withNavigation};
