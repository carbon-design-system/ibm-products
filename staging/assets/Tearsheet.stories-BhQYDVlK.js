import{j as e,B as c,p as z}from"./settings-DDDiKwEV.js";import{r as a}from"./index-BwDkhjyp.js";import{a as h}from"./chunk-MZXVCX43-CM0pFb8Z.js";import"./floating-ui.react-BgNs4SA8.js";import{B as _}from"./ButtonSet-Dwf_xrN7.js";import{D as ye}from"./Dropdown-kl0VN08K.js";import{F as le}from"./Form-C0793gIU.js";import{F as ce}from"./FormGroup-DoLxBdhK.js";import{T as Ce,a as ke,b as F}from"./Tabs-0-kbVPff.js";import{S as xe,a as be}from"./index-C9z6BHTc.js";import{T as y}from"./TextInput-Hd7J5_5S.js";import{T as C,d as ve}from"./Tearsheet-BEqCqtUb.js";import{s as Te,a as Oe,b as Se,c as je}from"./_storybook-styles-PO4T6scg.js";import{g as we}from"./props-helper-D2PZmIqz.js";import{T as Ae}from"./TearsheetNarrow-A4FBrExj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-Dk74W0Oi.js";import"./events-Dp3Lalez.js";import"./index-BLdp044m.js";import"./v4-CQkTLCs1.js";import"./index-BONylQH5.js";import"./index-C7XzgV7l.js";import"./extends-CCbyfPlC.js";import"./index-DcAOwtUU.js";import"./tslib.es6-B4_xh3D5.js";import"./FormContext-C7kRVu4t.js";import"./mergeRefs-CTUecegF.js";import"./bucket-18-D_XNNF5i.js";import"./index-g07FazYc.js";import"./useControllableState-DwpxGhsf.js";import"./useNoInteractiveChildren-B4Ro9ZJd.js";import"./useMatchMedia-DHDhMA9x.js";import"./Text-DpcC0Z3Y.js";import"./bucket-17-B2E3mTyd.js";import"./useNormalizedInputProps-DtF50Ia0.js";import"./useAnnouncer-Dwt0jqXi.js";import"./TearsheetShell-D7rodDJF.js";import"./useResizeObserver-CYrpFlRY.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-BB3t0zem.js";import"./index-Bd0eoXr0.js";import"./LayerContext-DbU-6VX4.js";import"./InlineLoading-BvhLs1sa.js";import"./bucket-6-CS7rNrxx.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-CuszVIVc.js";import"./index-BK1SMh4y.js";import"./usePortalTarget-BD2WdNlr.js";import"./feature-flags-CaJ_YE9P.js";import"./index-DshjxXYm.js";import"./index-DW1YkzHB.js";import"./useFocus-mCy_1587.js";import"./usePreviousValue-DDnp_zt4.js";import"./ActionSet-7kyZHLkU.js";import"./devtools-C7Iu0rt6.js";const In={title:"IBM Products/Components/Tearsheet",component:C,tags:["autodocs"],parameters:{styles:Te,layout:"fullscreen"},argTypes:{...we(ve),actions:{control:{type:"select",labels:Oe},options:Se,mapping:je({primary:"Replace",danger:"Delete",secondary:"Back",secondary2:"Keep Both",dangerGhost:"Abort",ghost:"Cancel"},h)},description:{control:{type:"text"}},headerActions:{control:{type:"select",labels:{0:"none",1:"drop-down",2:"buttons"}},options:[0,1,2],mapping:{0:null,1:e.jsx(ye,{id:"tss-had",label:"Choose an option",titleText:"Choose an option",items:["option 1","option 2","option 3","option 4"]}),2:e.jsxs(_,{children:[e.jsx(c,{kind:"secondary",size:"sm",style:{width:"initial"},children:"Secondary"}),e.jsx(c,{kind:"primary",size:"sm",style:{width:"initial"},children:"Primary"})]})}},label:{control:{type:"text"}},title:{control:{type:"text"}},influencer:{control:{disable:!0}},onClose:{control:{disable:!0}},navigation:{control:{disable:!0}},open:{control:{disable:!0}},portalTarget:{control:{disable:!0}},slug:{control:{type:"select",labels:{0:"No AI slug",1:"with AI Slug"},default:0},options:[0,1]}}},f="Close the tearsheet",g="This is a description for the tearsheet, providing an opportunity to   describe the flow over a couple of lines in the header of the tearsheet.",I=e.jsx("div",{className:"tearsheet-stories__dummy-content-block",children:"Influencer"}),R="The label of the tearsheet",pe=e.jsx("div",{className:"tearsheet-stories__dummy-content-block",children:e.jsxs(le,{children:[e.jsx("p",{children:"Main content"}),e.jsxs(ce,{legendId:"tearsheet-form-group",legendText:"FormGroup Legend",children:[e.jsx(y,{id:"tss-ft1",labelText:"Enter an important value here",style:{marginBottom:"1em"}}),e.jsx(y,{id:"tss-ft2",labelText:"Here is an entry field:",style:{marginBottom:"1em"}})]})]})}),ue=e.jsx("div",{className:"tearsheet-stories__tabs",children:e.jsx(Ce,{onChange:h("Tab selection changed"),children:e.jsxs(ke,{"aria-label":"Tab list",children:[e.jsx(F,{children:"Tab 1"}),e.jsx(F,{children:"Tab 2"}),e.jsx(F,{children:"Tab 3"}),e.jsx(F,{children:"Tab 4"})]})})}),w="Title of the tearsheet",j=e.jsx(xe,{className:"slug-container",size:"xs",children:e.jsx(be,{children:e.jsxs("div",{children:[e.jsx("p",{className:"secondary",children:"AI Explained"}),e.jsx("h1",{children:"84%"}),e.jsx("p",{className:"secondary bold",children:"Confidence score"}),e.jsx("p",{className:"secondary",children:"This is not really Lorem Ipsum but the spell checker did not like the previous text with it's non-words which is why this unwieldy sentence, should one choose to call it that, here."}),e.jsx("hr",{}),e.jsx("p",{className:"secondary",children:"Model type"}),e.jsx("p",{className:"bold",children:"Foundation model"})]})})}),E=({actions:o,slug:p,...u})=>{const[d,t]=a.useState(!1),i=o&&Array.prototype.map.call(o,n=>{if(n.label==="Cancel"){const r=n.onClick;return{...n,onClick:l=>{t(!1),r(l)}}}return n}),m=a.useRef();return e.jsxs(e.Fragment,{children:[e.jsxs("style",{children:[`.${z.prefix}--tearsheet { opacity: 0 }`,";"]}),e.jsx(c,{onClick:()=>t(!0),children:"Open Tearsheet"}),e.jsx("div",{ref:m,children:e.jsx(C,{...u,actions:i,open:d,onClose:()=>t(!1),slug:p&&j,children:pe})})]})},Be=({actions:o,slug:p,...u})=>{const[d,t]=a.useState(!1),i=a.useRef(),m=o&&Array.prototype.map.call(o,r=>{if(r.label==="Cancel"){const l=r.onClick;return{...r,onClick:M=>{t(!1),l(M)}}}return r}),n=a.useRef();return e.jsxs(e.Fragment,{children:[e.jsxs("style",{children:[`.${z.prefix}--tearsheet { opacity: 0 }`,";"]}),e.jsx(c,{ref:i,onClick:()=>t(!0),children:"Open Tearsheet"}),e.jsx("div",{ref:n,children:e.jsx(C,{...u,actions:m,open:d,onClose:()=>t(!1),slug:p&&j,launcherButtonRef:i,children:pe})})]})},Ne=({actions:o,slug:p,...u})=>{const[d,t]=a.useState(!1),i=o&&Array.prototype.map.call(o,n=>{if(n.label==="Cancel"){const r=n.onClick;return{...n,onClick:l=>{t(!1),r(l)}}}return n}),m=a.useRef();return e.jsxs(e.Fragment,{children:[e.jsxs("style",{children:[`.${z.prefix}--tearsheet { opacity: 0 }`,";"]}),e.jsx(c,{onClick:()=>t(!0),children:"Open Tearsheet"}),e.jsx("div",{ref:m,children:e.jsx(C,{...u,actions:i,open:d,onClose:()=>t(!1),slug:p&&j,children:e.jsx("div",{className:"tearsheet-stories__dummy-content-block",children:e.jsxs(le,{children:[e.jsx("p",{children:"Main content"}),e.jsxs(ce,{legendId:"tearsheet-form-group",legendText:"FormGroup Legend",children:[e.jsx(y,{id:"tss-ft1",labelText:"Enter an important value here",style:{marginBottom:"1em"},disabled:!0}),e.jsx(y,{id:"tss-ft2",labelText:"Here is an entry field:",style:{marginBottom:"1em"}})]})]})})})})]})},de=({mixedSizes:o,actions:p,slug:u,...d})=>{const[t,i]=a.useState(!1),[m,n]=a.useState(!1),[r,l]=a.useState(!1),M=a.useRef(),me=Array.prototype.map.call(p,s=>{if(s.label==="Cancel"){const A=s.onClick;return{...s,onClick:B=>{i(!1),A(B)}}}return s}),he=Array.prototype.map.call(p,s=>{if(s.label==="Cancel"){const A=s.onClick;return{...s,onClick:B=>{n(!1),A(B)}}}return s}),fe=Array.prototype.map.call(p,s=>{if(s.label==="Cancel"){const A=s.onClick;return{...s,onClick:B=>{l(!1),A(B)}}}return s}),ge=o?Ae:C;return e.jsxs(e.Fragment,{children:[e.jsxs("style",{children:[`.${z.prefix}--tearsheet { opacity: 0 }`,";"]}),e.jsx("div",{style:{height:"3rem"},"data-reserve-space":"for toggle buttons"}),e.jsxs(_,{style:{display:"flex",position:"fixed",top:0,left:0,zIndex:1e4},children:[e.jsx(c,{onClick:()=>i(!t),children:"Toggle tearsheet 1"}),e.jsx(c,{onClick:()=>n(!m),children:"Toggle tearsheet 2"}),!o&&e.jsx(c,{onClick:()=>l(!r),children:"Toggle tearsheet 3"})]}),e.jsxs("div",{ref:M,children:[e.jsx(C,{...d,actions:me,headerActions:e.jsx(_,{children:e.jsx(c,{kind:"primary",size:"sm",style:{width:"initial"},onClick:()=>n(!0),disabled:m,children:"Open tearsheet 2"})}),title:"Tearsheet 1",open:t,onClose:()=>i(!1),selectorPrimaryFocus:"#stacked-input-1",slug:u&&j,children:e.jsxs("div",{className:"tearsheet-stories__dummy-content-block",children:["Main content 1",e.jsx(y,{id:"stacked-input-1",labelText:"Enter an important value here"})]})}),e.jsx(ge,{...d,actions:he,headerActions:e.jsx(_,{children:e.jsx(c,{kind:"primary",size:"sm",style:{width:"initial"},onClick:()=>l(!0),disabled:r,children:"Open tearsheet 3"})}),title:"Tearsheet 2",open:m,onClose:()=>n(!1),selectorPrimaryFocus:"#stacked-input-2",slug:u&&j,children:e.jsxs("div",{className:"tearsheet-stories__dummy-content-block",children:["Main content 2",e.jsx(y,{id:"stacked-input-2",labelText:"Enter an important value here"})]})}),!o&&e.jsx(C,{...d,actions:fe,title:"Tearsheet 3",open:r,onClose:()=>l(!1),selectorPrimaryFocus:"#stacked-input-3",slug:u&&j,children:e.jsxs("div",{className:"tearsheet-stories__dummy-content-block",children:["Main content 3",e.jsx(y,{id:"stacked-input-3",labelText:"Enter an important value here"})]})})]})]})},k=E.bind({});k.storyName="Tearsheet";k.args={closeIconDescription:f,description:g,onClose:h("onClose called"),title:w,actions:7,selectorPrimaryFocus:"#tss-ft1"};const x=E.bind({});x.storyName="Tearsheet with navigation";x.args={closeIconDescription:f,description:g,label:R,navigation:ue,onClose:h("onClose called"),title:w,actions:7};const b=E.bind({});b.storyName="Tearsheet with influencer";b.args={closeIconDescription:f,description:g,influencer:I,influencerPosition:"left",influencerWidth:"narrow",onClose:h("onClose called"),title:w,actions:7};const N=Be.bind({});N.args={closeIconDescription:f,description:g,onClose:h("onClose called"),title:w,actions:7};const v=Ne.bind({});v.storyName="First Element Disabled";v.args={closeIconDescription:f,hasCloseIcon:!0,description:g,onClose:h("onClose called"),title:w,actions:7,selectorPrimaryFocus:"#tss-ft1"};const T=E.bind({});T.storyName="Tearsheet with all header items and influencer";T.args={closeIconDescription:f,description:g,hasCloseIcon:!0,headerActions:2,influencer:I,influencerPosition:"left",influencerWidth:"narrow",label:R,navigation:ue,onClose:h("onClose called"),title:w,actions:0,slug:1};const O=de.bind({});O.storyName="Stacking tearsheets";O.args={closeIconDescription:f,description:g,height:"lower",influencer:I,label:R,actions:7};const S=de.bind({});S.storyName="Stacking tearsheets, different sizes";S.args={mixedSizes:!0,closeIconDescription:f,description:g,height:"lower",influencer:I,label:R,actions:7};var P,$,D;k.parameters={...k.parameters,docs:{...(P=k.parameters)==null?void 0:P.docs,source:{originalSource:`({
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
}`,...(D=($=k.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var L,G,V;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`({
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
}`,...(V=(G=x.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var H,W,K;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`({
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
}`,...(K=(W=b.parameters)==null?void 0:W.docs)==null?void 0:K.source}}};var q,J,Q;N.parameters={...N.parameters,docs:{...(q=N.parameters)==null?void 0:q.docs,source:{originalSource:`({
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
}`,...(Q=(J=N.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,X,Y;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`({
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
          <div className="tearsheet-stories__dummy-content-block">
            <Form>
              <p>Main content</p>
              <FormGroup legendId="tearsheet-form-group" legendText="FormGroup Legend">
                <TextInput id="tss-ft1" labelText="Enter an important value here" style={
              // stylelint-disable-next-line carbon/layout-token-use
              {
                marginBottom: '1em'
              }} disabled />
                <TextInput id="tss-ft2" labelText="Here is an entry field:" style={
              // stylelint-disable-next-line carbon/layout-token-use
              {
                marginBottom: '1em'
              }} />
              </FormGroup>
            </Form>
          </div>
        </Tearsheet>
      </div>
    </>;
}`,...(Y=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ne;T.parameters={...T.parameters,docs:{...(Z=T.parameters)==null?void 0:Z.docs,source:{originalSource:`({
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
}`,...(ne=(ee=T.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,se,oe;O.parameters={...O.parameters,docs:{...(te=O.parameters)==null?void 0:te.docs,source:{originalSource:`({
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
}`,...(oe=(se=O.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var re,ae,ie;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`({
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
}`,...(ie=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};const Rn=["tearsheet","withNavigation","withInfluencer","ReturnFocusToOpenButton","firstElementDisabled","fullyLoaded","stacked","stackedMixedSizes"];export{N as ReturnFocusToOpenButton,Rn as __namedExportsOrder,In as default,v as firstElementDisabled,T as fullyLoaded,O as stacked,S as stackedMixedSizes,k as tearsheet,b as withInfluencer,x as withNavigation};
