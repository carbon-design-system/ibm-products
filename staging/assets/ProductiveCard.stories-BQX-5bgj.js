import{j as o}from"./settings-DDDiKwEV.js";import{a as oo}from"./floating-ui.react-BgNs4SA8.js";import{G as no}from"./Grid-BKMg6DvV.js";import{C as eo}from"./Column-EfHAxmlk.js";import{S as ro,a as to}from"./index-C9z6BHTc.js";import{S as so}from"./StoryDocsPage-C3kkfnsW.js";import{a as t}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{P as J}from"./ProductiveCard-Dz5GQKQA.js";import{a as io}from"./bucket-6-CS7rNrxx.js";import{T as Q}from"./bucket-16-DFCeQRVG.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-Dk74W0Oi.js";import"./events-Dp3Lalez.js";import"./index-BLdp044m.js";import"./index-BONylQH5.js";import"./index-BK1SMh4y.js";import"./bucket-17-B2E3mTyd.js";import"./index-Ypkytheb.js";import"./iframe-DqqWLuMW.js";import"../sb-preview/runtime.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./story-helper-BB2of0Wm.js";import"./tslib.es6-B4_xh3D5.js";import"./v4-CQkTLCs1.js";import"./devtools-C7Iu0rt6.js";import"./props-helper-D2PZmIqz.js";import"./Card-Dk9qopI-.js";import"./index-D9ju4W2A.js";import"./Text-DpcC0Z3Y.js";import"./useAttachedMenu-Ba8a--1h.js";import"./mergeRefs-CTUecegF.js";import"./bucket-12-C33cLYA1.js";import"./wrapFocus-CuszVIVc.js";import"./index-Bd0eoXr0.js";import"./LayerContext-DbU-6VX4.js";import"./bucket-9-pcRs3_9u.js";const lo="#root{width:100%}.graph{width:200px;height:100px;border:10px solid var(--cds-border-subtle-01, #c6c6c6);border-right-color:var(--cds-support-success, #24a148);border-bottom:0;border-left-color:var(--cds-support-error, #da1e28);margin:0 auto 1.5rem;border-top-left-radius:110px;border-top-right-radius:110px}",U=()=>o.jsx(so,{blocks:[{story:d},{story:u},{story:s},{story:c},{story:m},{story:g},{story:p},{story:i},{story:l},{story:a},{title:"With Slug",description:"A Carbon AI slug can be used within the ProductiveCard using the Slug property.",source:{language:"html",code:`
          <ProductiveCard
  onClick={() => {}}
  onKeyDown={() => {}}
  primaryButtonText="Ghost button"
  slug={
  <Slug className="slug-container" size="xs">
    <SlugContent>
        Slug content goes here...
    </SlugContent>
  </Slug>
  }
  title="Title"
>
  <React.Fragment key=".0">
    <div className="graph" />
    <p>
      Productive content text
    </p>
    <p>
      Productive content text
    </p>
  </React.Fragment>
</ProductiveCard>
          `}},{description:"Clickable tiles only accept a boolean value of true for the Slug property and display a hollow slug.",source:{language:"html",code:`
          <ProductiveCard
  onClick={() => {}}
  onKeyDown={() => {}}
  primaryButtonText="Ghost button"
  slug={true}
  title="Title"
>
  <React.Fragment key=".0">
    <div className="graph" />
    <p>
      Productive content text
    </p>
    <p>
      Productive content text
    </p>
  </React.Fragment>
</ProductiveCard>
          `}}]});U.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const co=o.jsx(ro,{className:"slug-container",size:"xs",children:o.jsx(to,{children:o.jsxs("div",{children:[o.jsx("p",{className:"secondary",children:"AI Explained"}),o.jsx("h1",{children:"84%"}),o.jsx("p",{className:"secondary bold",children:"Confidence score"}),o.jsx("p",{className:"secondary",children:"This is not really Lorem Ipsum but the spell checker did not like the previous text with it's non-words which is why this unwieldy sentence, should one choose to call it that, here."}),o.jsx("hr",{}),o.jsx("p",{className:"secondary",children:"Model type"}),o.jsx("p",{className:"bold",children:"Foundation model"})]})})}),Xo={title:"IBM Products/Components/Cards/ProductiveCard",component:J,tags:["autodocs"],parameters:{styles:lo,docs:{page:U}},argTypes:{columnSizeSm:{control:{type:"select"},options:[4,8,12,16]},columnSizeMd:{control:{type:"select"},options:[4,8,12,16]},columnSizeLg:{control:{type:"select"},options:[4,8,12,16]},slug:{control:{type:"select",labels:{0:"No AI slug",1:"with AI Slug",2:"with hollow slug (boolean)"},default:0},options:[0,1]}},decorators:[r=>{const S=oo();return o.jsx("div",{className:`${S}--grid card-story`,children:r()})}]},n={title:"Title",columnSizeSm:4,columnSizeMd:8,columnSizeLg:4,children:o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"graph"}),o.jsx("p",{children:"Productive content text"}),o.jsx("p",{children:"Productive content text"})]}),actionIcons:[{id:"1",icon:r=>o.jsx(io,{size:16,...r}),onClick:t("on click"),iconDescription:"Edit"},{id:"2",icon:r=>o.jsx(Q,{size:16,...r}),onClick:t("on click"),iconDescription:"Delete"}]},e=r=>{const{children:S,columnSizeSm:V,columnSizeMd:X,columnSizeLg:Y,slug:h,...Z}=r;return o.jsx(no,{children:o.jsx(eo,{sm:V,md:X,lg:Y,children:o.jsx(J,{...Z,slug:h&&(h===2||co),children:S})})})},s=e.bind({});s.args={...n};const i=e.bind({});i.args={...n,description:"caption"};const l=e.bind({});l.args={...n,label:"Label"};const c=e.bind({});c.args={...n,title:"",label:"Label",actionsPlacement:"bottom",primaryButtonText:"Ghost button"};const a=e.bind({});a.args={...n,iconDescription:"Option",overflowAriaLabel:"Overflow menu",overflowActions:[{id:"1",itemText:"Edit",onClick:t("on click"),onKeyDown:t("on keydown")},{id:"2",itemText:"Delete",onClick:t("on click"),onKeyDown:t("on keydown")}]};const m=e.bind({});m.args={...n,primaryButtonText:"Ghost button"};const u=e.bind({});u.args={...n,primaryButtonText:"Ghost button",actionsPlacement:"bottom",title:"",label:"label"};const d=e.bind({});d.args={...n,onClick:t("on click"),onKeyDown:t("on keydown"),primaryButtonText:"Ghost button",actionIcons:[]};const p=e.bind({});p.args={...n,primaryButtonText:"Ghost button",primaryButtonHref:"#"};const g=e.bind({});g.args={...n,primaryButtonPlacement:"top",primaryButtonText:"Ghost button",primaryButtonIcon:r=>o.jsx(Q,{size:16,...r}),primaryButtonDisabled:!0};var z,C,x;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`opts => {
  const {
    children,
    columnSizeSm,
    columnSizeMd,
    columnSizeLg,
    slug,
    ...args
  } = opts;
  return <Grid>
      <Column sm={columnSizeSm} md={columnSizeMd} lg={columnSizeLg}>
        <ProductiveCard {...args} slug={slug && (slug === 2 || sampleSlug)}>
          {children}
        </ProductiveCard>
      </Column>
    </Grid>;
}`,...(x=(C=s.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var y,b,v;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`opts => {
  const {
    children,
    columnSizeSm,
    columnSizeMd,
    columnSizeLg,
    slug,
    ...args
  } = opts;
  return <Grid>
      <Column sm={columnSizeSm} md={columnSizeMd} lg={columnSizeLg}>
        <ProductiveCard {...args} slug={slug && (slug === 2 || sampleSlug)}>
          {children}
        </ProductiveCard>
      </Column>
    </Grid>;
}`,...(v=(b=i.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var P,G,f;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`opts => {
  const {
    children,
    columnSizeSm,
    columnSizeMd,
    columnSizeLg,
    slug,
    ...args
  } = opts;
  return <Grid>
      <Column sm={columnSizeSm} md={columnSizeMd} lg={columnSizeLg}>
        <ProductiveCard {...args} slug={slug && (slug === 2 || sampleSlug)}>
          {children}
        </ProductiveCard>
      </Column>
    </Grid>;
}`,...(f=(G=l.parameters)==null?void 0:G.docs)==null?void 0:f.source}}};var L,w,B;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`opts => {
  const {
    children,
    columnSizeSm,
    columnSizeMd,
    columnSizeLg,
    slug,
    ...args
  } = opts;
  return <Grid>
      <Column sm={columnSizeSm} md={columnSizeMd} lg={columnSizeLg}>
        <ProductiveCard {...args} slug={slug && (slug === 2 || sampleSlug)}>
          {children}
        </ProductiveCard>
      </Column>
    </Grid>;
}`,...(B=(w=c.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var M,j,k;a.parameters={...a.parameters,docs:{...(M=a.parameters)==null?void 0:M.docs,source:{originalSource:`opts => {
  const {
    children,
    columnSizeSm,
    columnSizeMd,
    columnSizeLg,
    slug,
    ...args
  } = opts;
  return <Grid>
      <Column sm={columnSizeSm} md={columnSizeMd} lg={columnSizeLg}>
        <ProductiveCard {...args} slug={slug && (slug === 2 || sampleSlug)}>
          {children}
        </ProductiveCard>
      </Column>
    </Grid>;
}`,...(k=(j=a.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var T,D,N;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`opts => {
  const {
    children,
    columnSizeSm,
    columnSizeMd,
    columnSizeLg,
    slug,
    ...args
  } = opts;
  return <Grid>
      <Column sm={columnSizeSm} md={columnSizeMd} lg={columnSizeLg}>
        <ProductiveCard {...args} slug={slug && (slug === 2 || sampleSlug)}>
          {children}
        </ProductiveCard>
      </Column>
    </Grid>;
}`,...(N=(D=m.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var W,A,I;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`opts => {
  const {
    children,
    columnSizeSm,
    columnSizeMd,
    columnSizeLg,
    slug,
    ...args
  } = opts;
  return <Grid>
      <Column sm={columnSizeSm} md={columnSizeMd} lg={columnSizeLg}>
        <ProductiveCard {...args} slug={slug && (slug === 2 || sampleSlug)}>
          {children}
        </ProductiveCard>
      </Column>
    </Grid>;
}`,...(I=(A=u.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var O,E,F;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`opts => {
  const {
    children,
    columnSizeSm,
    columnSizeMd,
    columnSizeLg,
    slug,
    ...args
  } = opts;
  return <Grid>
      <Column sm={columnSizeSm} md={columnSizeMd} lg={columnSizeLg}>
        <ProductiveCard {...args} slug={slug && (slug === 2 || sampleSlug)}>
          {children}
        </ProductiveCard>
      </Column>
    </Grid>;
}`,...(F=(E=d.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var K,R,_;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`opts => {
  const {
    children,
    columnSizeSm,
    columnSizeMd,
    columnSizeLg,
    slug,
    ...args
  } = opts;
  return <Grid>
      <Column sm={columnSizeSm} md={columnSizeMd} lg={columnSizeLg}>
        <ProductiveCard {...args} slug={slug && (slug === 2 || sampleSlug)}>
          {children}
        </ProductiveCard>
      </Column>
    </Grid>;
}`,...(_=(R=p.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var H,$,q;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`opts => {
  const {
    children,
    columnSizeSm,
    columnSizeMd,
    columnSizeLg,
    slug,
    ...args
  } = opts;
  return <Grid>
      <Column sm={columnSizeSm} md={columnSizeMd} lg={columnSizeLg}>
        <ProductiveCard {...args} slug={slug && (slug === 2 || sampleSlug)}>
          {children}
        </ProductiveCard>
      </Column>
    </Grid>;
}`,...(q=($=g.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};const Yo=["Default","WithCaption","WithLabel","LabelOnly","WithOverflow","SupplementalBottomBar","ComplexBottomBar","Clickable","WithButtonHref","WithActionGhostButton"];export{d as Clickable,u as ComplexBottomBar,s as Default,c as LabelOnly,m as SupplementalBottomBar,g as WithActionGhostButton,p as WithButtonHref,i as WithCaption,l as WithLabel,a as WithOverflow,Yo as __namedExportsOrder,Xo as default};
