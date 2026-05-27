var E=Object.defineProperty;var e=(a,t)=>E(a,"name",{value:t,configurable:!0});import{R as i,ah as O,r as C}from"./iframe-Smi5ZmZZ.js";import{D as P}from"./DisplayBox-CqCKWVCe.js";import{E as h}from"./EditInPlace-BLTdzxzy.js";import"./preload-helper-Cc2_yIPf.js";import"./index-DHhCJlCA.js";import"./devtools-DrPHs2CJ.js";import"./bucket-20-B45IimhC.js";import"./bucket-6-B_hGfOXV.js";const T=".ccs-sb--display-box{position:relative;display:inline-block;color:var(--cds-text-helper, #6f6f6f);margin-block-start:3rem;padding-block-start:1rem}.ccs-sb--display-box__indicator{position:absolute;border-block-end:1px solid var(--cds-text-helper, #6f6f6f);inline-size:100%;inset-block-start:0;white-space:nowrap;font-size:var(--cds-helper-text-01-font-size, .75rem);line-height:var(--cds-helper-text-01-line-height, 1.33333);letter-spacing:var(--cds-helper-text-01-letter-spacing, .32px)}.ccs-sb--display-box__message{position:absolute;inset-block-end:.25rem}.sb-main-centered .ccs-sb--display-box__message{inline-size:inherit;text-align:center}.ccs-sb--display-box__indicator--left,.ccs-sb--display-box__indicator--right{position:absolute;block-size:0;border-block-start:.75rem solid var(--cds-text-helper, #6f6f6f);border-inline-end:.25rem solid transparent;border-inline-start:.25rem solid transparent;inline-size:0;inset-block-end:-.75rem}.ccs-sb--display-box__indicator--left{inset-inline-start:-.25rem}.ccs-sb--display-box__indicator--right{inset-inline-end:-.25rem}.edit-in-place-example__viewport{margin:100px}",{action:m}=__STORYBOOK_MODULE_ACTIONS__,w="edit-in-place-example",v={"Default / undefined":void 0,"All top":"top","All top-left":"top-left","All top-right":"top-right","All bottom":"bottom","All bottom-left":"bottom-left","All bottom-right":"bottom-right","All left":"left","All right":"right","Edit and save right, cancel left":{edit:"right",cancel:"left",save:"right"}},j={title:"Components/EditInPlace",component:h,tags:["autodocs"],argTypes:{containerWidth:{control:{type:"range",min:20,max:800,step:10},description:"Controls containing element width. Used for demonstration purposes, not property of the component."},tooltipAlignment:{control:{type:"select",labels:Object.keys(v)},options:Object.values(v).map((a,t)=>t),mapping:Object.values(v)}},parameters:{styles:T,docs:{page:e(()=>i.createElement(O,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/edit-and-update/usage/#inline-edit"}),"page")}},decorators:[a=>i.createElement(P,{className:`${w}__viewport`},a())]},x=m("save"),S=m("change"),g=m("cancel"),A=m("blur"),r={cancelLabel:"Cancel",containerWidth:300,editLabel:"Edit",id:"story-id",invalid:!1,invalidText:"This field is required",labelText:"Label text",onCancel:e(()=>{},"onCancel"),onChange:e(()=>{},"onChange"),onSave:e(()=>{},"onSave"),readOnlyToggleTipText:"This field is read-only and cannot be edited",toggleTipAlignment:"bottom",saveLabel:"Save",value:"default",placeholder:"placeholder text"},b=e(({containerWidth:a,...t})=>{const[s,o]=C.useState(r.value),f={...t,value:s,onChange:e(l=>{o(l),S(l)},"onChange"),onSave:e(()=>{x(s)},"onSave"),onCancel:e(l=>{o(l),g(l)},"onCancel")};return i.createElement("div",{style:{width:a}},i.createElement(h,{...f,className:"edit-in-place-example"}))},"Template"),k=e(({containerWidth:a,...t})=>{const[s,o]=C.useState(r.value),l={...t,value:s,onChange:e(n=>{o(n),S(n)},"onChange"),onSave:e(()=>{o(s),x(s)},"onSave"),onCancel:e(n=>{o(n),g(n)},"onCancel"),onBlur:e(n=>{o(n),g(n),A(n)},"onBlur")};return i.createElement("div",{style:{width:a}},i.createElement(h,{...l,className:"edit-in-place-example"}))},"TemplateBlur"),c=b.bind({});c.args={...r};const d=b.bind({});d.args={...r,invalid:!0};const p=k.bind({});p.args={...r};const u=b.bind({});u.args={...r,readOnly:!0,readOnlyLabel:"Edit off"};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
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
    // Update parent state so the value prop changes and component can sync initialValue
    setValue(value);
    actionSave(value);
  };
  const onCancel = initialVal => {
    setValue(initialVal);
    actionCancel(initialVal);
  };
  const onBlur = initialVal => {
    const shouldSaveValue = false;
    if (shouldSaveValue) {
      // Update parent state when saving via blur
      setValue(value);
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
}`,...u.parameters?.docs?.source}}};const F=["Default","Invalid","CustomBlurFunction","ReadOnly"];export{p as CustomBlurFunction,c as Default,d as Invalid,u as ReadOnly,F as __namedExportsOrder,j as default};
//# sourceMappingURL=EditInPlace.stories-CaOhiHFY.js.map
