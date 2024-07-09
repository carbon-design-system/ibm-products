import{j as o}from"./settings-BiUEFdm2.js";import{u as oo}from"./deprecate-D9ms-jbM.js";import{G as no}from"./Grid-sFQW4EYz.js";import{C as eo}from"./Column-joQvaXDX.js";import{S as ro,a as to}from"./index-Bo7SW2KM.js";import{S as so}from"./StoryDocsPage-BuwgUq5r.js";import{a as t}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{P as J}from"./ProductiveCard-B-L93-FK.js";import{a as io}from"./bucket-5-BuK6y5Rd.js";import{T as Q}from"./bucket-16-C-1D9aPX.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-Dk74W0Oi.js";import"./events-Bq7WR1mU.js";import"./index-BONylQH5.js";import"./index-gKY8typL.js";import"./index-CDYzkStP.js";import"./iframe-j3s5A4v9.js";import"../sb-preview/runtime.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-BjQFKvNH.js";import"./isSymbol-BZYRlrjc.js";import"./index-DrFu-skq.js";import"./story-helper-YTYnELA9.js";import"./tslib.es6-B4_xh3D5.js";import"./v4-CQkTLCs1.js";import"./devtools-BPcQvzXy.js";import"./props-helper-1oU9hECe.js";import"./Card-CciU5-u3.js";import"./index-B7Id7uWF.js";import"./Text-_TFgs5hl.js";import"./useAttachedMenu-BGzc4N1_.js";import"./bucket-11-S2aFzyL7.js";import"./wrapFocus-CuszVIVc.js";import"./mergeRefs-CTUecegF.js";import"./createClassWrapper-EbB2Yi8H.js";import"./index-DoBoZ-97.js";import"./LayerContext-DbU-6VX4.js";import"./bucket-8-61DsWji_.js";const lo="#root{width:100%}.graph{width:200px;height:100px;border:10px solid var(--cds-border-subtle-01, #c6c6c6);border-right-color:var(--cds-support-success, #24a148);border-bottom:0;border-left-color:var(--cds-support-error, #da1e28);margin:0 auto 1.5rem;border-top-left-radius:110px;border-top-right-radius:110px}",U=()=>o.jsx(so,{blocks:[{story:d},{story:m},{story:s},{story:c},{story:u},{story:g},{story:p},{story:i},{story:l},{story:a},{title:"With Slug",description:"A Carbon AI slug can be used within the ProductiveCard using the Slug property.",source:{language:"html",code:`
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
          `}}]});U.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const co=o.jsx(ro,{className:"slug-container",size:"xs",children:o.jsx(to,{children:o.jsxs("div",{children:[o.jsx("p",{className:"secondary",children:"AI Explained"}),o.jsx("h1",{children:"84%"}),o.jsx("p",{className:"secondary bold",children:"Confidence score"}),o.jsx("p",{className:"secondary",children:"This is not really Lorem Ipsum but the spell checker did not like the previous text with it's non-words which is why this unwieldy sentence, should one choose to call it that, here."}),o.jsx("hr",{}),o.jsx("p",{className:"secondary",children:"Model type"}),o.jsx("p",{className:"bold",children:"Foundation model"})]})})}),Xo={title:"IBM Products/Components/Cards/ProductiveCard",component:J,tags:["autodocs"],parameters:{styles:lo,docs:{page:U}},argTypes:{columnSizeSm:{control:{type:"select"},options:[4,8,12,16]},columnSizeMd:{control:{type:"select"},options:[4,8,12,16]},columnSizeLg:{control:{type:"select"},options:[4,8,12,16]},slug:{control:{type:"select",labels:{0:"No AI slug",1:"with AI Slug",2:"with hollow slug (boolean)"},default:0},options:[0,1]}},decorators:[r=>{const S=oo();return o.jsx("div",{className:`${S}--grid card-story`,children:r()})}]},n={title:"Title",columnSizeSm:4,columnSizeMd:8,columnSizeLg:4,children:o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"graph"}),o.jsx("p",{children:"Productive content text"}),o.jsx("p",{children:"Productive content text"})]}),actionIcons:[{id:"1",icon:r=>o.jsx(io,{size:16,...r}),onClick:t("on click"),iconDescription:"Edit"},{id:"2",icon:r=>o.jsx(Q,{size:16,...r}),onClick:t("on click"),iconDescription:"Delete"}]},e=r=>{const{children:S,columnSizeSm:V,columnSizeMd:X,columnSizeLg:Y,slug:h,...Z}=r;return o.jsx(no,{children:o.jsx(eo,{sm:V,md:X,lg:Y,children:o.jsx(J,{...Z,slug:h&&(h===2||co),children:S})})})},s=e.bind({});s.args={...n};const i=e.bind({});i.args={...n,description:"caption"};const l=e.bind({});l.args={...n,label:"Label"};const c=e.bind({});c.args={...n,title:"",label:"Label",actionsPlacement:"bottom",primaryButtonText:"Ghost button"};const a=e.bind({});a.args={...n,overflowAriaLabel:"Overflow menu",overflowActions:[{id:"1",itemText:"Edit",onClick:t("on click"),onKeyDown:t("on keydown")},{id:"2",itemText:"Delete",onClick:t("on click"),onKeyDown:t("on keydown")}]};const u=e.bind({});u.args={...n,primaryButtonText:"Ghost button"};const m=e.bind({});m.args={...n,primaryButtonText:"Ghost button",actionsPlacement:"bottom",title:"",label:"label"};const d=e.bind({});d.args={...n,onClick:t("on click"),onKeyDown:t("on keydown"),primaryButtonText:"Ghost button",actionIcons:[]};const p=e.bind({});p.args={...n,primaryButtonText:"Ghost button",primaryButtonHref:"#"};const g=e.bind({});g.args={...n,primaryButtonPlacement:"top",primaryButtonText:"Ghost button",primaryButtonIcon:r=>o.jsx(Q,{size:16,...r}),primaryButtonDisabled:!0};var z,C,x;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`opts => {
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
}`,...(k=(j=a.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var T,D,N;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`opts => {
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
}`,...(N=(D=u.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var W,A,I;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`opts => {
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
}`,...(I=(A=m.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var E,F,O;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`opts => {
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
}`,...(O=(F=d.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var K,R,_;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`opts => {
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
}`,...(q=($=g.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};const Yo=["Default","WithCaption","WithLabel","LabelOnly","WithOverflow","SupplementalBottomBar","ComplexBottomBar","Clickable","WithButtonHref","WithActionGhostButton"];export{d as Clickable,m as ComplexBottomBar,s as Default,c as LabelOnly,u as SupplementalBottomBar,g as WithActionGhostButton,p as WithButtonHref,i as WithCaption,l as WithLabel,a as WithOverflow,Yo as __namedExportsOrder,Xo as default};
