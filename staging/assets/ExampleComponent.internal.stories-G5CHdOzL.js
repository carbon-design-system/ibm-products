import{r as b,e as d}from"./index-DtHxqM--.js";import{a as x}from"./index-B-lxVbXh.js";import{p as r,B as K}from"./settings-C3kz8lqM.js";import{d as ie,P as e}from"./index-CMVdkQrl.js";import{B as le}from"./ButtonSet-S29aEq84.js";import{b as U}from"./bucket-0-CHtg8bFp.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CtRu48qb.js";import"./events-OVwOsPzJ.js";import"./index-BLvAv8yb.js";import"./index-DgLvjnYm.js";import"./index-CiYgQLeJ.js";const ce=a=>{const[o,n]=b.useState(a),m="ExampleComponent.useExample",l=a!==void 0,c=l&&r.checkReportFeatureEnabled(m);return l&&!c&&console.warn(`Disabled feature "${m}" does not change the initialTime.`),b.useEffect(()=>{c&&o>0&&setTimeout(()=>{n(Math.max(0,o-.1))},100)},[c,o]),[o]},i=`${r.prefix}--example-component`,G="ExampleComponent",C={primaryKind:"primary",secondaryKind:"secondary",secondaryIcon:null,size:"lg"};let s=d.forwardRef(({borderColor:a,boxedBorder:o,className:n,disabled:m,usesExampleHook:l,onPrimaryClick:c,onSecondaryClick:F,primaryButtonLabel:k,primaryKind:Q=C.primaryKind,secondaryButtonLabel:X,secondaryKind:Y=C.secondaryKind,secondaryIcon:P=C.secondaryIcon,size:E=C.size,style:Z,...ee},ae)=>{const[re,B]=b.useState(k),[_]=ce(l),oe=o?`${i}--boxed-set`:`${i}--shadow-set`,ne=S=>{c&&c(S)},te=S=>{F&&F(S)},se=b.useRef(P&&r.checkReportFeatureEnabled("ExampleComponent.secondaryIcon")?P:null);return b.useEffect(()=>{l!==void 0&&r.checkReportFeatureEnabled("ExampleComponent.useExample")?B(`${k} ${_.toFixed(1)}s`):B(k)},[k,l,_]),d.createElement(le,{...ee,className:ie(i,n,`${i}--${E}`,oe),ref:ae,role:"main",style:{...Z,[`--${i}--border-color`]:a}},d.createElement(K,{className:`${i}__secondary-button`,kind:Y,onClick:te,renderIcon:se.current,disabled:m,size:E},X),d.createElement(K,{className:`${i}__primary-button`,kind:Q,onClick:ne,disabled:m,size:E},re))});s=r.checkComponentEnabled(s,G);s.displayName=G;s.propTypes={borderColor:e.string,boxedBorder:e.bool,className:e.string,disabled:e.bool,onPrimaryClick:e.func,onSecondaryClick:e.func,primaryButtonLabel:e.string.isRequired,primaryKind:e.oneOf(["primary","danger"]),secondaryButtonLabel:e.string.isRequired,secondaryIcon:e.oneOfType([e.func,e.object]),secondaryKind:e.oneOf(["secondary","tertiary"]),size:e.oneOf(["sm","md","lg","xl","2xl"]),style:e.object,usesExampleHook:e.number};s.__docgenInfo={description:"This is an example component to show relevant conventions and usage.",methods:[],displayName:"ExampleComponent",props:{primaryKind:{defaultValue:{value:"'primary'",computed:!1},description:"The kind of button for the primary button ('primary' or 'danger').",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'danger'",computed:!1}]},required:!1},secondaryKind:{defaultValue:{value:"'secondary'",computed:!1},description:"The kind of button for the secondary button ('secondary' or 'tertiary').",type:{name:"enum",value:[{value:"'secondary'",computed:!1},{value:"'tertiary'",computed:!1}]},required:!1},secondaryIcon:{defaultValue:{value:"null",computed:!1},description:"The icon to use for the secondary button.",type:{name:"union",value:[{name:"func"},{name:"object"}]},required:!1},size:{defaultValue:{value:"'lg'",computed:!1},description:"The size for the buttons",type:{name:"enum",value:[{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1},{value:"'xl'",computed:!1},{value:"'2xl'",computed:!1}]},required:!1},borderColor:{description:"What border color (HTML color value) to use.",type:{name:"string"},required:!1},boxedBorder:{description:"If true, the border is a box, otherwise it is a shadow.",type:{name:"bool"},required:!1},className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1},disabled:{description:"If true, the buttons are disabled, otherwise they can be used.",type:{name:"bool"},required:!1},onPrimaryClick:{description:"An optional primary button click handler.",type:{name:"func"},required:!1},onSecondaryClick:{description:"An optional secondary button click handler.",type:{name:"func"},required:!1},primaryButtonLabel:{description:"The primary button label.",type:{name:"string"},required:!0},secondaryButtonLabel:{description:"The secondary button label.",type:{name:"string"},required:!0},style:{description:"Optional style settings for the containing node.",type:{name:"object"},required:!1},usesExampleHook:{description:"Hook example timeout (in seconds) or undefined",type:{name:"number"},required:!1}}};const Ee={title:"IBM Products/Internal/ExampleComponent",component:s,tags:["autodocs"],argTypes:{borderColor:{control:"color"}},parameters:{docs:{}}},h=({featureFlags:a,...o})=>(a&&(r._silenceWarnings(!1),Object.keys(a).forEach(n=>{r.feature[n]=a[n]}),r._silenceWarnings(!0)),d.createElement(s,{primaryButtonLabel:"Primary",secondaryButtonLabel:"Secondary",onPrimaryClick:x("onPrimaryClick"),onSecondaryClick:x("onSecondaryClick"),...o})),t=h.bind({});t.args={};const u=h.bind({});u.args={...t.args,borderColor:"#141414",borderType:"box"};const p=h.bind({});p.args={...t.args,secondaryIcon:U,featureFlags:{"ExampleComponent.secondaryIcon":!1}};const y=h.bind({});y.args={...t.args,secondaryIcon:U,featureFlags:{"ExampleComponent.secondaryIcon":!0}};const J=({featureFlags:a,...o})=>(a&&(r._silenceWarnings(!1),Object.keys(a).forEach(n=>{r.feature[n]=a[n]}),r._silenceWarnings(!0)),d.createElement(s,{usesExampleHook:10,primaryButtonLabel:"Primary",secondaryButtonLabel:"Secondary",onPrimaryClick:x("onPrimaryClick"),onSecondaryClick:x("onSecondaryClick"),...o})),f=J.bind({});f.args={featureFlags:{"ExampleComponent.useExample":!1}};const g=J.bind({});g.args={featureFlags:{"ExampleComponent.useExample":!0}};var v,L,T;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`({
  featureFlags,
  ...args
}) => {
  if (featureFlags) {
    pkg._silenceWarnings(false); // warnings are ordinarily silenced in storybook, add this to test.
    Object.keys(featureFlags).forEach(flagKey => {
      pkg.feature[flagKey] = featureFlags[flagKey];
    });
    pkg._silenceWarnings(true);
  }
  return <ExampleComponent primaryButtonLabel="Primary" secondaryButtonLabel="Secondary" onPrimaryClick={action('onPrimaryClick')} onSecondaryClick={action('onSecondaryClick')} {...args} />;
}`,...(T=(L=t.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var I,W,q;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`({
  featureFlags,
  ...args
}) => {
  if (featureFlags) {
    pkg._silenceWarnings(false); // warnings are ordinarily silenced in storybook, add this to test.
    Object.keys(featureFlags).forEach(flagKey => {
      pkg.feature[flagKey] = featureFlags[flagKey];
    });
    pkg._silenceWarnings(true);
  }
  return <ExampleComponent primaryButtonLabel="Primary" secondaryButtonLabel="Secondary" onPrimaryClick={action('onPrimaryClick')} onSecondaryClick={action('onSecondaryClick')} {...args} />;
}`,...(q=(W=u.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var O,w,j;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`({
  featureFlags,
  ...args
}) => {
  if (featureFlags) {
    pkg._silenceWarnings(false); // warnings are ordinarily silenced in storybook, add this to test.
    Object.keys(featureFlags).forEach(flagKey => {
      pkg.feature[flagKey] = featureFlags[flagKey];
    });
    pkg._silenceWarnings(true);
  }
  return <ExampleComponent primaryButtonLabel="Primary" secondaryButtonLabel="Secondary" onPrimaryClick={action('onPrimaryClick')} onSecondaryClick={action('onSecondaryClick')} {...args} />;
}`,...(j=(w=p.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var $,H,N;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`({
  featureFlags,
  ...args
}) => {
  if (featureFlags) {
    pkg._silenceWarnings(false); // warnings are ordinarily silenced in storybook, add this to test.
    Object.keys(featureFlags).forEach(flagKey => {
      pkg.feature[flagKey] = featureFlags[flagKey];
    });
    pkg._silenceWarnings(true);
  }
  return <ExampleComponent primaryButtonLabel="Primary" secondaryButtonLabel="Secondary" onPrimaryClick={action('onPrimaryClick')} onSecondaryClick={action('onSecondaryClick')} {...args} />;
}`,...(N=(H=y.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var R,V,z;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`({
  featureFlags,
  ...args
}) => {
  if (featureFlags) {
    pkg._silenceWarnings(false); // warnings are ordinarily silenced in storybook, add this to test.
    Object.keys(featureFlags).forEach(flagKey => {
      pkg.feature[flagKey] = featureFlags[flagKey];
    });
    pkg._silenceWarnings(true);
  }
  return <ExampleComponent usesExampleHook={10} primaryButtonLabel="Primary" secondaryButtonLabel="Secondary" onPrimaryClick={action('onPrimaryClick')} onSecondaryClick={action('onSecondaryClick')} {...args} />;
}`,...(z=(V=f.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var A,D,M;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`({
  featureFlags,
  ...args
}) => {
  if (featureFlags) {
    pkg._silenceWarnings(false); // warnings are ordinarily silenced in storybook, add this to test.
    Object.keys(featureFlags).forEach(flagKey => {
      pkg.feature[flagKey] = featureFlags[flagKey];
    });
    pkg._silenceWarnings(true);
  }
  return <ExampleComponent usesExampleHook={10} primaryButtonLabel="Primary" secondaryButtonLabel="Secondary" onPrimaryClick={action('onPrimaryClick')} onSecondaryClick={action('onSecondaryClick')} {...args} />;
}`,...(M=(D=g.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};const Se=["exampleComponent","borderedSet","featureFlagSecondaryIconFalse","featureFlagSecondaryIconTrue","exampleHookDisabledComponent","exampleHookEnabledComponent"];export{Se as __namedExportsOrder,u as borderedSet,Ee as default,t as exampleComponent,f as exampleHookDisabledComponent,g as exampleHookEnabledComponent,p as featureFlagSecondaryIconFalse,y as featureFlagSecondaryIconTrue};
