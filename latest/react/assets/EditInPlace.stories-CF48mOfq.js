var E=Object.defineProperty;var e=(t,a)=>E(t,"name",{value:a,configurable:!0});import{e as s,S as O,r as C}from"./iframe-DhIv2Cz2.js";import{D as P}from"./DisplayBox-Dhu4L14W.js";import{E as h}from"./EditInPlace-CWdVjjiB.js";import"./preload-helper-Cc2_yIPf.js";import"./index-C1b99TSV.js";import"./devtools-KpiUTsjr.js";import"./bucket-20-BLUMbjfu.js";import"./bucket-6-gELQZyM7.js";const T=".ccs-sb--display-box{position:relative;display:inline-block;color:var(--cds-text-helper, #6f6f6f);margin-block-start:3rem;padding-block-start:1rem}.ccs-sb--display-box__indicator{position:absolute;border-block-end:1px solid var(--cds-text-helper, #6f6f6f);inline-size:100%;inset-block-start:0;white-space:nowrap;font-size:var(--cds-helper-text-01-font-size, .75rem);line-height:var(--cds-helper-text-01-line-height, 1.33333);letter-spacing:var(--cds-helper-text-01-letter-spacing, .32px)}.ccs-sb--display-box__message{position:absolute;inset-block-end:.25rem}.sb-main-centered .ccs-sb--display-box__message{inline-size:inherit;text-align:center}.ccs-sb--display-box__indicator--left,.ccs-sb--display-box__indicator--right{position:absolute;block-size:0;border-block-start:.75rem solid var(--cds-text-helper, #6f6f6f);border-inline-end:.25rem solid transparent;border-inline-start:.25rem solid transparent;inline-size:0;inset-block-end:-.75rem}.ccs-sb--display-box__indicator--left{inset-inline-start:-.25rem}.ccs-sb--display-box__indicator--right{inset-inline-end:-.25rem}.edit-in-place-example__viewport{margin:100px}",{action:m}=__STORYBOOK_MODULE_ACTIONS__,A="edit-in-place-example",v={"Default / undefined":void 0,"All top":"top","All top-left":"top-left","All top-right":"top-right","All bottom":"bottom","All bottom-left":"bottom-left","All bottom-right":"bottom-right","All left":"left","All right":"right","Edit and save right, cancel left":{edit:"right",cancel:"left",save:"right"}},F={title:"Components/EditInPlace",component:h,tags:["autodocs"],argTypes:{containerWidth:{control:{type:"range",min:20,max:800,step:10},description:"Controls containing element width. Used for demonstration purposes, not property of the component."},tooltipAlignment:{control:{type:"select",labels:Object.keys(v)},options:Object.values(v).map((t,a)=>a),mapping:Object.values(v)}},parameters:{styles:T,docs:{page:e(()=>s.createElement(O,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/edit-and-update/usage/#inline-edit"}),"page")}},decorators:[t=>s.createElement(P,{className:`${A}__viewport`},t())]},x=m("save"),S=m("change"),g=m("cancel"),B=m("blur"),i={cancelLabel:"Cancel",containerWidth:300,editLabel:"Edit",id:"story-id",invalid:!1,invalidText:"This field is required",labelText:"Label text",onCancel:e(()=>{},"onCancel"),onChange:e(()=>{},"onChange"),onSave:e(()=>{},"onSave"),onBlur:e(()=>{},"onBlur"),readOnlyToggleTipText:"This field is read-only and cannot be edited",toggleTipAlignment:"bottom",saveLabel:"Save",value:"default",placeholder:"placeholder text"},b=e(({containerWidth:t,...a})=>{const[r,l]=C.useState(i.value),f={...a,value:r,onChange:e(o=>{l(o),S(o)},"onChange"),onSave:e(()=>{x(r)},"onSave"),onCancel:e(o=>{l(o),g(o)},"onCancel")};return s.createElement("div",{style:{width:t}},s.createElement(h,{...f,className:"edit-in-place-example"}))},"Template"),k=e(({containerWidth:t,...a})=>{const[r,l]=C.useState(i.value),o={...a,value:r,onChange:e(n=>{l(n),S(n)},"onChange"),onSave:e(()=>{x(r)},"onSave"),onCancel:e(n=>{l(n),g(n)},"onCancel"),onBlur:e(n=>{l(n),g(n),B(n)},"onBlur")};return s.createElement("div",{style:{width:t}},s.createElement(h,{...o,className:"edit-in-place-example"}))},"TemplateBlur"),c=b.bind({});c.args={...i};const d=b.bind({});d.args={...i,invalid:!0};const p=k.bind({});p.args={...i};const u=b.bind({});u.args={...i,readOnly:!0,readOnlyLabel:"Edit off"};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
  containerWidth,
  ...args
}) => {
  const [value, setValue] = useState(defaultProps.value);
  const onChange = val => {
    setValue(val);
    actionChange(val);
  };
  const onSave = () => {
    actionSave(value);
  };
  const onCancel = initialVal => {
    setValue(initialVal);
    actionCancel(initialVal);
  };
  const props = {
    ...args,
    value,
    onChange,
    onSave,
    onCancel
  };
  return <div style={{
    width: containerWidth
  }}>
      <EditInPlace {...props} className="edit-in-place-example" />
    </div>;
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`({
  containerWidth,
  ...args
}) => {
  const [value, setValue] = useState(defaultProps.value);
  const onChange = val => {
    setValue(val);
    actionChange(val);
  };
  const onSave = () => {
    actionSave(value);
  };
  const onCancel = initialVal => {
    setValue(initialVal);
    actionCancel(initialVal);
  };
  const props = {
    ...args,
    value,
    onChange,
    onSave,
    onCancel
  };
  return <div style={{
    width: containerWidth
  }}>
      <EditInPlace {...props} className="edit-in-place-example" />
    </div>;
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`({
  containerWidth,
  ...args
}) => {
  const [value, setValue] = useState(defaultProps.value);
  const onChange = val => {
    setValue(val);
    actionChange(val);
  };
  const onSave = () => {
    actionSave(value);
  };
  const onCancel = initialVal => {
    setValue(initialVal);
    actionCancel(initialVal);
  };
  const onBlur = initialVal => {
    const shouldSaveValue = false;
    if (shouldSaveValue) {
      actionSave(value);
    } else {
      setValue(initialVal);
      actionCancel(initialVal);
    }
    actionBlur(initialVal);
  };
  const props = {
    ...args,
    value,
    onChange,
    onSave,
    onCancel,
    onBlur
  };
  return <div style={{
    width: containerWidth
  }}>
      <EditInPlace {...props} className="edit-in-place-example" />
    </div>;
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`({
  containerWidth,
  ...args
}) => {
  const [value, setValue] = useState(defaultProps.value);
  const onChange = val => {
    setValue(val);
    actionChange(val);
  };
  const onSave = () => {
    actionSave(value);
  };
  const onCancel = initialVal => {
    setValue(initialVal);
    actionCancel(initialVal);
  };
  const props = {
    ...args,
    value,
    onChange,
    onSave,
    onCancel
  };
  return <div style={{
    width: containerWidth
  }}>
      <EditInPlace {...props} className="edit-in-place-example" />
    </div>;
}`,...u.parameters?.docs?.source}}};const U=["Default","Invalid","CustomBlurFunction","ReadOnly"];export{p as CustomBlurFunction,c as Default,d as Invalid,u as ReadOnly,U as __namedExportsOrder,F as default};
//# sourceMappingURL=EditInPlace.stories-CF48mOfq.js.map
