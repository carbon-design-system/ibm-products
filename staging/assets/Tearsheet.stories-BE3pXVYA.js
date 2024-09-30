import{j as e,B as m,p as N}from"./settings-DEdZ0TrD.js";import{r}from"./index-BwDkhjyp.js";import{a as f}from"./chunk-MZXVCX43-CM0pFb8Z.js";import"./floating-ui.core.mjs-LzsX8FoD.js";import{B as z}from"./ButtonSet-B0eeKBZg.js";import{D as Te}from"./Dropdown-B7QPq3_7.js";import{F as le}from"./Form-CtOSeT3_.js";import{F as ce}from"./FormGroup-2MNJUnTV.js";import{T as Ce,a as F,b as ke,c as xe,d as _}from"./Tabs-Dcrr38LD.js";import{A as ve,a as je}from"./index-B87aoAka.js";import{T as y}from"./TextInput-DnFddHXA.js";import{T as h,d as Oe}from"./Tearsheet-DM0t180H.js";import{s as Se,a as Ae,b as we,c as Be}from"./_storybook-styles-PO4T6scg.js";import{g as Pe}from"./props-helper-Bq60RLbY.js";import{T as Ne}from"./TearsheetNarrow-O6mcx78L.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-Dk74W0Oi.js";import"./events-BwXSUnsA.js";import"./index-CtP8jiW9.js";import"./v4-CQkTLCs1.js";import"./index-BONylQH5.js";import"./index-DEc8pD2w.js";import"./extends-CCbyfPlC.js";import"./index-DcAOwtUU.js";import"./tslib.es6-B4_xh3D5.js";import"./FormContext-C7kRVu4t.js";import"./mergeRefs-CTUecegF.js";import"./bucket-18-BepxNBd9.js";import"./useControllableState-DwpxGhsf.js";import"./useNoInteractiveChildren-B4Ro9ZJd.js";import"./useMatchMedia-BV3YP2kV.js";import"./Text-DzW_iQLr.js";import"./bucket-17-Cv_pKmw7.js";import"./useNormalizedInputProps-SnNF9w2p.js";import"./useAnnouncer-Dwt0jqXi.js";import"./TearsheetShell-D_WxQLC9.js";import"./useResizeObserver-CYrpFlRY.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-Bz57YeIR.js";import"./index-B19trKVm.js";import"./LayerContext-DbU-6VX4.js";import"./InlineLoading-b-XMbmpT.js";import"./bucket-6-COExmpDO.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-DKhmFa_m.js";import"./index-Jn_1HPt0.js";import"./usePortalTarget-C9qZOTQP.js";import"./feature-flags-ZUymDm0z.js";import"./index-BkXf54zg.js";import"./useFocus-BSpNcszJ.js";import"./wait-CTNFjQS8.js";import"./usePreviousValue-DDnp_zt4.js";import"./ActionSet-aBtXfkQ8.js";import"./devtools-BMJcATO0.js";const Rn={title:"IBM Products/Components/Tearsheet",component:h,tags:["autodocs"],parameters:{styles:Se,layout:"fullscreen"},argTypes:{...Pe(Oe),actions:{control:{type:"select",labels:Ae},options:we,mapping:Be({primary:"Replace",danger:"Delete",secondary:"Back",secondary2:"Keep Both",dangerGhost:"Abort",ghost:"Cancel"},f)},description:{control:{type:"text"}},headerActions:{control:{type:"select",labels:{0:"none",1:"drop-down",2:"buttons"}},options:[0,1,2],mapping:{0:null,1:e.jsx(Te,{id:"tss-had",label:"Choose an option",titleText:"Choose an option",items:["option 1","option 2","option 3","option 4"]}),2:e.jsxs(z,{children:[e.jsx(m,{kind:"secondary",size:"sm",style:{width:"initial"},children:"Secondary"}),e.jsx(m,{kind:"primary",size:"sm",style:{width:"initial"},children:"Primary"})]})}},label:{control:{type:"text"}},title:{control:{type:"text"}},influencer:{control:{disable:!0}},onClose:{control:{disable:!0}},navigation:{control:{disable:!0}},open:{control:{disable:!0}},portalTarget:{control:{disable:!0}},slug:{control:{type:"select",labels:{0:"No AI slug",1:"with AI Slug"},default:0},options:[0,1]}}},g="Close the tearsheet",b="This is a description for the tearsheet, providing an opportunity to   describe the flow over a couple of lines in the header of the tearsheet.",I=e.jsx("div",{className:"tearsheet-stories__dummy-content-block",children:"Influencer"}),R="The label of the tearsheet",pe=e.jsx("div",{className:"tearsheet-stories__dummy-content-block",children:e.jsxs(le,{children:[e.jsx("p",{children:"Main content"}),e.jsxs(ce,{legendId:"tearsheet-form-group",legendText:"FormGroup Legend",children:[e.jsx(y,{id:"tss-ft1",labelText:"Enter an important value here",style:{marginBottom:"1em"}}),e.jsx(y,{id:"tss-ft2",labelText:"Here is an entry field:",style:{marginBottom:"1em"}})]})]})}),A="Title of the tearsheet",T=e.jsx(ve,{className:"slug-container",size:"xs",children:e.jsx(je,{children:e.jsxs("div",{children:[e.jsx("p",{className:"secondary",children:"AI Explained"}),e.jsx("h1",{children:"84%"}),e.jsx("p",{className:"secondary bold",children:"Confidence score"}),e.jsx("p",{className:"secondary",children:"This is not really Lorem Ipsum but the spell checker did not like the previous text with it's non-words which is why this unwieldy sentence, should one choose to call it that, here."}),e.jsx("hr",{}),e.jsx("p",{className:"secondary",children:"Model type"}),e.jsx("p",{className:"bold",children:"Foundation model"})]})})}),ue=({actions:s,slug:c,...p})=>{const[u,t]=r.useState(!1),i=s&&Array.prototype.map.call(s,n=>{if(n.label==="Cancel"){const o=n.onClick;return{...n,onClick:l=>{t(!1),o(l)}}}return n}),d=r.useRef();return e.jsxs(e.Fragment,{children:[e.jsxs("style",{children:[`.${N.prefix}--tearsheet { opacity: 0 }`,";"]}),e.jsx(m,{onClick:()=>t(!0),children:"Open Tearsheet"}),e.jsx("div",{ref:d,children:e.jsx(h,{...p,actions:i,open:u,onClose:()=>t(!1),slug:c&&T,children:pe})})]})},de=e.jsx("div",{className:"tearsheet-stories__tabs",children:e.jsxs(Ce,{"aria-label":"Tab list",children:[e.jsx(F,{children:"Tab 1"}),e.jsx(F,{children:"Tab 2"}),e.jsx(F,{children:"Tab 3"}),e.jsx(F,{children:"Tab 4"})]})}),me=({actions:s,slug:c,...p})=>{const[u,t]=r.useState(!1),i=s&&Array.prototype.map.call(s,n=>{if(n.label==="Cancel"){const o=n.onClick;return{...n,onClick:l=>{t(!1),o(l)}}}return n}),d=r.useRef();return e.jsxs(e.Fragment,{children:[e.jsxs("style",{children:[`.${N.prefix}--tearsheet { opacity: 0 }`,";"]}),e.jsx(m,{onClick:()=>t(!0),children:"Open Tearsheet"}),e.jsx("div",{ref:d,children:e.jsx(ke,{onChange:f("Tab selection changed"),children:e.jsx(h,{...p,actions:i,open:u,onClose:()=>t(!1),slug:c&&T,children:e.jsxs(xe,{children:[e.jsx(_,{children:"Tab 1"}),e.jsx(_,{children:"Tab 2"}),e.jsx(_,{children:"Tab 3"}),e.jsx(_,{children:"Tab 4"})]})})})})]})},Fe=({actions:s,slug:c,...p})=>{const[u,t]=r.useState(!1),i=r.useRef(),d=s&&Array.prototype.map.call(s,o=>{if(o.label==="Cancel"){const l=o.onClick;return{...o,onClick:E=>{t(!1),l(E)}}}return o}),n=r.useRef();return e.jsxs(e.Fragment,{children:[e.jsxs("style",{children:[`.${N.prefix}--tearsheet { opacity: 0 }`,";"]}),e.jsx(m,{ref:i,onClick:()=>t(!0),children:"Open Tearsheet"}),e.jsx("div",{ref:n,children:e.jsx(h,{...p,actions:d,open:u,onClose:()=>t(!1),slug:c&&T,launcherButtonRef:i,children:pe})})]})},_e=({actions:s,slug:c,...p})=>{const[u,t]=r.useState(!1),i=s&&Array.prototype.map.call(s,n=>{if(n.label==="Cancel"){const o=n.onClick;return{...n,onClick:l=>{t(!1),o(l)}}}return n}),d=r.useRef();return e.jsxs(e.Fragment,{children:[e.jsxs("style",{children:[`.${N.prefix}--tearsheet { opacity: 0 }`,";"]}),e.jsx(m,{onClick:()=>t(!0),children:"Open Tearsheet"}),e.jsx("div",{ref:d,children:e.jsx(h,{...p,actions:i,open:u,onClose:()=>t(!1),slug:c&&T,children:e.jsx("div",{className:"tearsheet-stories__dummy-content-block",children:e.jsxs(le,{children:[e.jsx("p",{children:"Main content"}),e.jsxs(ce,{legendId:"tearsheet-form-group",legendText:"FormGroup Legend",children:[e.jsx(y,{id:"tss-ft1",labelText:"Enter an important value here",style:{marginBottom:"1em"},disabled:!0}),e.jsx(y,{id:"tss-ft2",labelText:"Here is an entry field:",style:{marginBottom:"1em"}})]})]})})})})]})},he=({mixedSizes:s,actions:c,slug:p,...u})=>{const[t,i]=r.useState(!1),[d,n]=r.useState(!1),[o,l]=r.useState(!1),E=r.useRef(),fe=Array.prototype.map.call(c,a=>{if(a.label==="Cancel"){const w=a.onClick;return{...a,onClick:B=>{i(!1),w(B)}}}return a}),ge=Array.prototype.map.call(c,a=>{if(a.label==="Cancel"){const w=a.onClick;return{...a,onClick:B=>{n(!1),w(B)}}}return a}),be=Array.prototype.map.call(c,a=>{if(a.label==="Cancel"){const w=a.onClick;return{...a,onClick:B=>{l(!1),w(B)}}}return a}),ye=s?Ne:h;return e.jsxs(e.Fragment,{children:[e.jsxs("style",{children:[`.${N.prefix}--tearsheet { opacity: 0 }`,";"]}),e.jsx("div",{style:{height:"3rem"},"data-reserve-space":"for toggle buttons"}),e.jsxs(z,{style:{display:"flex",position:"fixed",top:0,left:0,zIndex:1e4},children:[e.jsx(m,{onClick:()=>i(!t),children:"Toggle tearsheet 1"}),e.jsx(m,{onClick:()=>n(!d),children:"Toggle tearsheet 2"}),!s&&e.jsx(m,{onClick:()=>l(!o),children:"Toggle tearsheet 3"})]}),e.jsxs("div",{ref:E,children:[e.jsx(h,{...u,actions:fe,headerActions:e.jsx(z,{children:e.jsx(m,{kind:"primary",size:"sm",style:{width:"initial"},onClick:()=>n(!0),disabled:d,children:"Open tearsheet 2"})}),title:"Tearsheet 1",open:t,onClose:()=>i(!1),selectorPrimaryFocus:"#stacked-input-1",slug:p&&T,children:e.jsxs("div",{className:"tearsheet-stories__dummy-content-block",children:["Main content 1",e.jsx(y,{id:"stacked-input-1",labelText:"Enter an important value here"})]})}),e.jsx(ye,{...u,actions:ge,headerActions:e.jsx(z,{children:e.jsx(m,{kind:"primary",size:"sm",style:{width:"initial"},onClick:()=>l(!0),disabled:o,children:"Open tearsheet 3"})}),title:"Tearsheet 2",open:d,onClose:()=>n(!1),selectorPrimaryFocus:"#stacked-input-2",slug:p&&T,children:e.jsxs("div",{className:"tearsheet-stories__dummy-content-block",children:["Main content 2",e.jsx(y,{id:"stacked-input-2",labelText:"Enter an important value here"})]})}),!s&&e.jsx(h,{...u,actions:be,title:"Tearsheet 3",open:o,onClose:()=>l(!1),selectorPrimaryFocus:"#stacked-input-3",slug:p&&T,children:e.jsxs("div",{className:"tearsheet-stories__dummy-content-block",children:["Main content 3",e.jsx(y,{id:"stacked-input-3",labelText:"Enter an important value here"})]})})]})]})},C=ue.bind({});C.storyName="Tearsheet";C.args={closeIconDescription:g,description:b,onClose:f("onClose called"),title:A,actions:7,selectorPrimaryFocus:"#tss-ft1"};const k=me.bind({});k.storyName="Tearsheet with navigation";k.args={closeIconDescription:g,description:b,label:R,navigation:de,onClose:f("onClose called"),title:A,actions:7};const x=ue.bind({});x.storyName="Tearsheet with influencer";x.args={closeIconDescription:g,description:b,influencer:I,influencerPosition:"left",influencerWidth:"narrow",onClose:f("onClose called"),title:A,actions:7};const P=Fe.bind({});P.args={closeIconDescription:g,description:b,onClose:f("onClose called"),title:A,actions:7};const v=_e.bind({});v.storyName="First Element Disabled";v.args={closeIconDescription:g,hasCloseIcon:!0,description:b,onClose:f("onClose called"),title:A,actions:7,selectorPrimaryFocus:"#tss-ft1"};const j=me.bind({});j.storyName="Tearsheet with all header items and influencer";j.args={closeIconDescription:g,description:b,hasCloseIcon:!0,headerActions:2,influencer:I,influencerPosition:"left",influencerWidth:"narrow",label:R,navigation:de,onClose:f("onClose called"),title:A,actions:0,slug:1};const O=he.bind({});O.storyName="Stacking tearsheets";O.args={closeIconDescription:g,description:b,height:"lower",influencer:I,label:R,actions:7};const S=he.bind({});S.storyName="Stacking tearsheets, different sizes";S.args={mixedSizes:!0,closeIconDescription:g,description:b,height:"lower",influencer:I,label:R,actions:7};var M,$,L;C.parameters={...C.parameters,docs:{...(M=C.parameters)==null?void 0:M.docs,source:{originalSource:`({
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
}`,...(L=($=C.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};var D,G,V;k.parameters={...k.parameters,docs:{...(D=k.parameters)==null?void 0:D.docs,source:{originalSource:`({
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
        <Tabs onChange={action('Tab selection changed')}>
          <Tearsheet {...args} actions={wiredActions} open={open} onClose={() => setOpen(false)} slug={slug && sampleSlug}>
            <TabPanels>
              <TabPanel>Tab 1</TabPanel>
              <TabPanel>Tab 2</TabPanel>
              <TabPanel>Tab 3</TabPanel>
              <TabPanel>Tab 4</TabPanel>
            </TabPanels>
          </Tearsheet>
        </Tabs>
      </div>
    </>;
}`,...(V=(G=k.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var H,W,K;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`({
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
}`,...(K=(W=x.parameters)==null?void 0:W.docs)==null?void 0:K.source}}};var q,J,Q;P.parameters={...P.parameters,docs:{...(q=P.parameters)==null?void 0:q.docs,source:{originalSource:`({
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
}`,...(Q=(J=P.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,X,Y;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`({
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
}`,...(Y=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ne;j.parameters={...j.parameters,docs:{...(Z=j.parameters)==null?void 0:Z.docs,source:{originalSource:`({
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
        <Tabs onChange={action('Tab selection changed')}>
          <Tearsheet {...args} actions={wiredActions} open={open} onClose={() => setOpen(false)} slug={slug && sampleSlug}>
            <TabPanels>
              <TabPanel>Tab 1</TabPanel>
              <TabPanel>Tab 2</TabPanel>
              <TabPanel>Tab 3</TabPanel>
              <TabPanel>Tab 4</TabPanel>
            </TabPanels>
          </Tearsheet>
        </Tabs>
      </div>
    </>;
}`,...(ne=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,se,oe;O.parameters={...O.parameters,docs:{...(te=O.parameters)==null?void 0:te.docs,source:{originalSource:`({
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
}`,...(oe=(se=O.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ae,re,ie;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`({
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
}`,...(ie=(re=S.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};const En=["tearsheet","withNavigation","withInfluencer","ReturnFocusToOpenButton","firstElementDisabled","fullyLoaded","stacked","stackedMixedSizes"];export{P as ReturnFocusToOpenButton,En as __namedExportsOrder,Rn as default,v as firstElementDisabled,j as fullyLoaded,O as stacked,S as stackedMixedSizes,C as tearsheet,x as withInfluencer,k as withNavigation};
