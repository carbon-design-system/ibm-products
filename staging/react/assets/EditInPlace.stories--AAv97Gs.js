import{e as o,S as y,r as h}from"./iframe-BbTYfv9-.js";import{D as V}from"./DisplayBox-CeaLTzFL.js";import{E as v}from"./EditInPlace-DgLd7JPQ.js";import"./preload-helper-D9Z9MdNV.js";import"./devtools-KS_k4bKc.js";import"./bucket-19-DKyp3qQO.js";import"./bucket-6-D484BBya.js";const E=".ccs-sb--display-box{position:relative;display:inline-block;color:var(--cds-text-helper, #6f6f6f);margin-block-start:3rem;padding-block-start:1rem}.ccs-sb--display-box__indicator{position:absolute;border-block-end:1px solid var(--cds-text-helper, #6f6f6f);inline-size:100%;inset-block-start:0;white-space:nowrap;font-size:var(--cds-helper-text-01-font-size, .75rem);line-height:var(--cds-helper-text-01-line-height, 1.33333);letter-spacing:var(--cds-helper-text-01-letter-spacing, .32px)}.ccs-sb--display-box__message{position:absolute;inset-block-end:.25rem}.sb-main-centered .ccs-sb--display-box__message{inline-size:inherit;text-align:center}.ccs-sb--display-box__indicator--left,.ccs-sb--display-box__indicator--right{position:absolute;block-size:0;border-block-start:.75rem solid var(--cds-text-helper, #6f6f6f);border-inline-end:.25rem solid transparent;border-inline-start:.25rem solid transparent;inline-size:0;inset-block-end:-.75rem}.ccs-sb--display-box__indicator--left{inset-inline-start:-.25rem}.ccs-sb--display-box__indicator--right{inset-inline-end:-.25rem}.edit-in-place-example__viewport{margin:100px}",{action:p}=__STORYBOOK_MODULE_ACTIONS__,B="edit-in-place-example",u={"Default / undefined":void 0,"All top":"top","All top-left":"top-left","All top-right":"top-right","All bottom":"bottom","All bottom-left":"bottom-left","All bottom-right":"bottom-right","All left":"left","All right":"right","Edit and save right, cancel left":{edit:"right",cancel:"left",save:"right"}},N={title:"Components/EditInPlace",component:v,tags:["autodocs"],argTypes:{containerWidth:{control:{type:"range",min:20,max:800,step:10},description:"Controls containing element width. Used for demonstration purposes, not property of the component."},tooltipAlignment:{control:{type:"select",labels:Object.keys(u)},options:Object.values(u).map((t,l)=>l),mapping:Object.values(u)}},parameters:{styles:E,docs:{page:()=>o.createElement(y,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/edit-and-update/usage/#inline-edit"})}},decorators:[t=>o.createElement(V,{className:`${B}__viewport`},t())]},b=p("save"),f=p("change"),m=p("cancel"),k=p("blur"),d={cancelLabel:"Cancel",containerWidth:300,editLabel:"Edit",id:"story-id",invalid:!1,invalidText:"This field is required",labelText:"Label text",onCancel:()=>{},onChange:()=>{},onSave:()=>{},onBlur:()=>{},saveLabel:"Save",value:"default",placeholder:"placeholder text"},C=({containerWidth:t,...l})=>{const[s,a]=h.useState(d.value),g={...l,value:s,onChange:n=>{a(n),f(n)},onSave:()=>{b(s)},onCancel:n=>{a(n),m(n)}};return o.createElement("div",{style:{width:t}},o.createElement(v,{...g,className:"edit-in-place-example"}))},A=({containerWidth:t,...l})=>{const[s,a]=h.useState(d.value),n={...l,value:s,onChange:e=>{a(e),f(e)},onSave:()=>{b(s)},onCancel:e=>{a(e),m(e)},onBlur:e=>{a(e),m(e),k(e)}};return o.createElement("div",{style:{width:t}},o.createElement(v,{...n,className:"edit-in-place-example"}))},i=C.bind({});i.args={...d};const r=C.bind({});r.args={...d,invalid:!0};const c=A.bind({});c.args={...d};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
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
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`({
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
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
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
}`,...c.parameters?.docs?.source}}};const z=["Default","Invalid","CustomBlurFunction"];export{c as CustomBlurFunction,i as Default,r as Invalid,z as __namedExportsOrder,N as default};
//# sourceMappingURL=EditInPlace.stories--AAv97Gs.js.map
