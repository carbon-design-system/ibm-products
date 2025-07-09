import{e as o,r as E}from"./index-DtHxqM--.js";import{a as d}from"./index-B-lxVbXh.js";import{D as W}from"./DisplayBox-BbNwFvJS.js";import{S as z}from"./StoryDocsPage-BlyQ38W4.js";import{E as v}from"./EditInPlace-DdcLBhf-.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CtRu48qb.js";import"./index-4poXP75K.js";import"./index-DgLvjnYm.js";import"./index-CiYgQLeJ.js";import"./index-B4WvMzTq.js";import"./iframe-wzBMF1p9.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";import"./story-helper-C5uq5kSZ.js";import"./settings-Bzj6EGPa.js";import"./events-CdfZZS3f.js";import"./devtools-B69Kc3qg.js";import"./bucket-19-D8xKEiK4.js";import"./bucket-6-DLW23Ky6.js";const D=".ccs-sb--display-box{position:relative;display:inline-block;color:var(--cds-text-helper, #6f6f6f);margin-block-start:3rem;padding-block-start:1rem}.ccs-sb--display-box__indicator{position:absolute;border-block-end:1px solid var(--cds-text-helper, #6f6f6f);inline-size:100%;inset-block-start:0;white-space:nowrap;font-size:var(--cds-helper-text-01-font-size, .75rem);line-height:var(--cds-helper-text-01-line-height, 1.33333);letter-spacing:var(--cds-helper-text-01-letter-spacing, .32px)}.ccs-sb--display-box__message{position:absolute;inset-block-end:.25rem}.sb-main-centered .ccs-sb--display-box__message{inline-size:inherit;text-align:center}.ccs-sb--display-box__indicator--left,.ccs-sb--display-box__indicator--right{position:absolute;block-size:0;border-block-start:.75rem solid var(--cds-text-helper, #6f6f6f);border-inline-end:.25rem solid transparent;border-inline-start:.25rem solid transparent;inline-size:0;inset-block-end:-.75rem}.ccs-sb--display-box__indicator--left{inset-inline-start:-.25rem}.ccs-sb--display-box__indicator--right{inset-inline-end:-.25rem}.edit-in-place-example__viewport{margin:100px}",N="edit-in-place-example",m={"Default / undefined":void 0,"All top":"top","All top-left":"top-left","All top-right":"top-right","All bottom":"bottom","All bottom-left":"bottom-left","All bottom-right":"bottom-right","All left":"left","All right":"right","Edit and save right, cancel left":{edit:"right",cancel:"left",save:"right"}},oe={title:"Components/EditInPlace",component:v,tags:["autodocs"],argTypes:{containerWidth:{control:{type:"range",min:20,max:800,step:10},description:"Controls containing element width. Used for demonstration purposes, not property of the component."},tooltipAlignment:{control:{type:"select",labels:Object.keys(m)},options:Object.values(m).map((t,i)=>i),mapping:Object.values(m)}},parameters:{styles:D,docs:{page:()=>o.createElement(z,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/edit-and-update/usage/#inline-edit"})}},decorators:[t=>o.createElement(W,{className:`${N}__viewport`},t())]},k=d("save"),B=d("change"),u=d("cancel"),T=d("blur"),p={cancelLabel:"Cancel",containerWidth:300,editLabel:"Edit",id:"story-id",invalid:!1,invalidText:"This field is required",labelText:"Label text",onCancel:()=>{},onChange:()=>{},onSave:()=>{},onBlur:()=>{},saveLabel:"Save",value:"default",placeholder:"placeholder text"},P=({containerWidth:t,...i})=>{const[l,a]=E.useState(p.value),g={...i,value:l,onChange:n=>{a(n),B(n)},onSave:()=>{k(l)},onCancel:n=>{a(n),u(n)}};return o.createElement("div",{style:{width:t}},o.createElement(v,{...g,className:"edit-in-place-example"}))},O=({containerWidth:t,...i})=>{const[l,a]=E.useState(p.value),n={...i,value:l,onChange:e=>{a(e),B(e)},onSave:()=>{k(l)},onCancel:e=>{a(e),u(e)},onBlur:e=>{a(e),u(e),T(e)}};return o.createElement("div",{style:{width:t}},o.createElement(v,{...n,className:"edit-in-place-example"}))},s=P.bind({});s.args={...p};const r=P.bind({});r.args={...p,invalid:!0};const c=O.bind({});c.args={...p};var h,b,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`({
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
}`,...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var C,x,S;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`({
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
}`,...(S=(x=r.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var y,V,_;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`({
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
}`,...(_=(V=c.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};const ie=["Default","Invalid","CustomBlurFunction"];export{c as CustomBlurFunction,s as Default,r as Invalid,ie as __namedExportsOrder,oe as default};
