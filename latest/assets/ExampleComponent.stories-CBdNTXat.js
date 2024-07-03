import{p as r,j as g,B as K}from"./settings-DrdbGLhD.js";import{a as x}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{r as b,R as ie}from"./index-BwDkhjyp.js";import{P as e}from"./index-Dk74W0Oi.js";import{c as le}from"./deprecate-D9ms-jbM.js";import{B as ce}from"./ButtonSet-CqsYbwZH.js";import{A as U}from"./bucket-0-D7rUCVax.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./events-Bq7WR1mU.js";import"./index-BONylQH5.js";import"./v4-CQkTLCs1.js";const de=a=>{const[n,o]=b.useState(a),d="ExampleComponent.useExample",l=a!==void 0,c=l&&r.checkReportFeatureEnabled(d);return l&&!c&&console.warn(`Disabled feature "${d}" does not change the initialTime.`),b.useEffect(()=>{c&&n>0&&setTimeout(()=>{o(Math.max(0,n-.1))},100)},[c,n]),[n]},i=`${r.prefix}--example-component`,G="ExampleComponent",C={primaryKind:"primary",secondaryKind:"secondary",secondaryIcon:null,size:"lg"};let s=ie.forwardRef(({borderColor:a,boxedBorder:n,className:o,disabled:d,usesExampleHook:l,onPrimaryClick:c,onSecondaryClick:F,primaryButtonLabel:k,primaryKind:Q=C.primaryKind,secondaryButtonLabel:X,secondaryKind:Y=C.secondaryKind,secondaryIcon:P=C.secondaryIcon,size:E=C.size,style:Z,...ee},ae)=>{const[re,B]=b.useState(k),[_]=de(l),ne=n?`${i}--boxed-set`:`${i}--shadow-set`,oe=S=>{c&&c(S)},te=S=>{F&&F(S)},se=b.useRef(P&&r.checkReportFeatureEnabled("ExampleComponent.secondaryIcon")?P:null);return b.useEffect(()=>{l!==void 0&&r.checkReportFeatureEnabled("ExampleComponent.useExample")?B(`${k} ${_.toFixed(1)}s`):B(k)},[k,l,_]),g.jsxs(ce,{...ee,className:le(i,o,`${i}--${E}`,ne),ref:ae,role:"main",style:{...Z,[`--${i}--border-color`]:a},children:[g.jsx(K,{className:`${i}__secondary-button`,kind:Y,onClick:te,renderIcon:se.current,disabled:d,size:E,children:X}),g.jsx(K,{className:`${i}__primary-button`,kind:Q,onClick:oe,disabled:d,size:E,children:re})]})});s=r.checkComponentEnabled(s,G);s.displayName=G;s.propTypes={borderColor:e.string,boxedBorder:e.bool,className:e.string,disabled:e.bool,onPrimaryClick:e.func,onSecondaryClick:e.func,primaryButtonLabel:e.string.isRequired,primaryKind:e.oneOf(["primary","danger"]),secondaryButtonLabel:e.string.isRequired,secondaryIcon:e.oneOfType([e.func,e.object]),secondaryKind:e.oneOf(["secondary","tertiary"]),size:e.oneOf(["sm","md","lg","xl","2xl"]),style:e.object,usesExampleHook:e.number};s.__docgenInfo={description:"This is an example component to show relevant conventions and usage.",methods:[],displayName:"ExampleComponent",props:{primaryKind:{defaultValue:{value:"'primary'",computed:!1},description:"The kind of button for the primary button ('primary' or 'danger').",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'danger'",computed:!1}]},required:!1},secondaryKind:{defaultValue:{value:"'secondary'",computed:!1},description:"The kind of button for the secondary button ('secondary' or 'tertiary').",type:{name:"enum",value:[{value:"'secondary'",computed:!1},{value:"'tertiary'",computed:!1}]},required:!1},secondaryIcon:{defaultValue:{value:"null",computed:!1},description:"The icon to use for the secondary button.",type:{name:"union",value:[{name:"func"},{name:"object"}]},required:!1},size:{defaultValue:{value:"'lg'",computed:!1},description:"The size for the buttons",type:{name:"enum",value:[{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1},{value:"'xl'",computed:!1},{value:"'2xl'",computed:!1}]},required:!1},borderColor:{description:"What border color (HTML color value) to use.",type:{name:"string"},required:!1},boxedBorder:{description:"If true, the border is a box, otherwise it is a shadow.",type:{name:"bool"},required:!1},className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1},disabled:{description:"If true, the buttons are disabled, otherwise they can be used.",type:{name:"bool"},required:!1},onPrimaryClick:{description:"An optional primary button click handler.",type:{name:"func"},required:!1},onSecondaryClick:{description:"An optional secondary button click handler.",type:{name:"func"},required:!1},primaryButtonLabel:{description:"The primary button label.",type:{name:"string"},required:!0},secondaryButtonLabel:{description:"The secondary button label.",type:{name:"string"},required:!0},style:{description:"Optional style settings for the containing node.",type:{name:"object"},required:!1},usesExampleHook:{description:"Hook example timeout (in seconds) or undefined",type:{name:"number"},required:!1}}};const Se={title:"IBM Products/Internal/ExampleComponent",component:s,tags:["autodocs"],argTypes:{borderColor:{control:"color"}},parameters:{docs:{}}},h=({featureFlags:a,...n})=>(a&&(r._silenceWarnings(!1),Object.keys(a).forEach(o=>{r.feature[o]=a[o]}),r._silenceWarnings(!0)),g.jsx(s,{primaryButtonLabel:"Primary",secondaryButtonLabel:"Secondary",onPrimaryClick:x("onPrimaryClick"),onSecondaryClick:x("onSecondaryClick"),...n})),t=h.bind({});t.args={};const u=h.bind({});u.args={...t.args,borderColor:"#141414",borderType:"box"};const m=h.bind({});m.args={...t.args,secondaryIcon:U,featureFlags:{"ExampleComponent.secondaryIcon":!1}};const p=h.bind({});p.args={...t.args,secondaryIcon:U,featureFlags:{"ExampleComponent.secondaryIcon":!0}};const J=({featureFlags:a,...n})=>(a&&(r._silenceWarnings(!1),Object.keys(a).forEach(o=>{r.feature[o]=a[o]}),r._silenceWarnings(!0)),g.jsx(s,{usesExampleHook:10,primaryButtonLabel:"Primary",secondaryButtonLabel:"Secondary",onPrimaryClick:x("onPrimaryClick"),onSecondaryClick:x("onSecondaryClick"),...n})),y=J.bind({});y.args={featureFlags:{"ExampleComponent.useExample":!1}};const f=J.bind({});f.args={featureFlags:{"ExampleComponent.useExample":!0}};var v,L,T;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`({
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
}`,...(T=(L=t.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var j,I,W;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`({
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
}`,...(W=(I=u.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var q,O,w;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`({
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
}`,...(w=(O=m.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};var $,H,R;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`({
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
}`,...(R=(H=p.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var N,A,V;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`({
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
}`,...(V=(A=y.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var z,D,M;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`({
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
}`,...(M=(D=f.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};const Fe=["exampleComponent","borderedSet","featureFlagSecondaryIconFalse","featureFlagSecondaryIconTrue","exampleHookDisabledComponent","exampleHookEnabledComponent"];export{Fe as __namedExportsOrder,u as borderedSet,Se as default,t as exampleComponent,y as exampleHookDisabledComponent,f as exampleHookEnabledComponent,m as featureFlagSecondaryIconFalse,p as featureFlagSecondaryIconTrue};
