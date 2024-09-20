import{j as o}from"./settings-CljJQLyl.js";import{u as eo}from"./floating-ui.react-C-lGofMW.js";import{G as ro}from"./Grid-CnkrpUdK.js";import{C as no}from"./Column-RLBd-601.js";import{A as to,a as so}from"./index-CMVUDlQd.js";import{S as io}from"./StoryDocsPage-D6alOP-V.js";import{a as t}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{P as Q}from"./ProductiveCard-ClSBV0LZ.js";import{a as lo}from"./bucket-6-CJUP1MJz.js";import{T as U}from"./bucket-17-ByMkANur.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-Dk74W0Oi.js";import"./events-B5D95Jtx.js";import"./index-1ulDwjQN.js";import"./index-BONylQH5.js";import"./index-xbyQ_51k.js";import"./index-DCeAv8ou.js";import"./iframe-BH6l3MBf.js";import"../sb-preview/runtime.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./story-helper-Ba8HmmvT.js";import"./tslib.es6-B4_xh3D5.js";import"./v4-CQkTLCs1.js";import"./devtools-C9kUiWhx.js";import"./props-helper-BM8tfO54.js";import"./Card-De-1chjP.js";import"./index-_4Qtr-t1.js";import"./Text-B6Yb8geH.js";import"./useAttachedMenu-D2EsEGO9.js";import"./mergeRefs-CTUecegF.js";import"./bucket-12-BOhlrMfU.js";import"./wrapFocus-DMN3GZJC.js";import"./index-CUiOlLtv.js";import"./LayerContext-DbU-6VX4.js";import"./bucket-9-CfAXSH6D.js";const co="#root{width:100%}.productive-card-stories__graph{width:200px;height:100px;border:10px solid var(--cds-border-subtle-01, #c6c6c6);border-right-color:var(--cds-support-success, #24a148);border-bottom:0;border-left-color:var(--cds-support-error, #da1e28);margin:0 auto 1.5rem;border-top-left-radius:110px;border-top-right-radius:110px}.productive-card-stories__visually-hidden{position:absolute;overflow:hidden;width:1px;height:1px;padding:0;border:0;clip:rect(0,0,0,0);visibility:inherit;white-space:nowrap}",V=()=>o.jsx(io,{blocks:[{story:d},{story:u},{story:s},{story:c},{story:m},{story:g},{story:p},{story:i},{story:l},{story:a},{title:"With Slug",description:"A Carbon AI slug can be used within the ProductiveCard using the Slug property.",source:{language:"html",code:`
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
          `}}]});V.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const z="productive-card-stories",ao=o.jsx(to,{className:"slug-container",size:"xs",children:o.jsx(so,{children:o.jsxs("div",{children:[o.jsx("p",{className:"secondary",children:"AI Explained"}),o.jsx("h1",{children:"84%"}),o.jsx("p",{className:"secondary bold",children:"Confidence score"}),o.jsx("p",{className:"secondary",children:"This is not really Lorem Ipsum but the spell checker did not like the previous text with it's non-words which is why this unwieldy sentence, should one choose to call it that, here."}),o.jsx("hr",{}),o.jsx("p",{className:"secondary",children:"Model type"}),o.jsx("p",{className:"bold",children:"Foundation model"})]})})}),Xo={title:"IBM Products/Components/Cards/ProductiveCard",component:Q,tags:["autodocs"],parameters:{styles:co,docs:{page:V}},argTypes:{columnSizeSm:{control:{type:"select"},options:[4,8,12,16]},columnSizeMd:{control:{type:"select"},options:[4,8,12,16]},columnSizeLg:{control:{type:"select"},options:[4,8,12,16]},slug:{control:{type:"select",labels:{0:"No AI slug",1:"with AI Slug",2:"with hollow slug (boolean)"},default:0},options:[0,1]}},decorators:[n=>{const S=eo();return o.jsx("div",{className:`${S}--grid card-story`,children:n()})}]},e={title:"Title",columnSizeSm:4,columnSizeMd:8,columnSizeLg:4,children:o.jsxs(o.Fragment,{children:[o.jsx("div",{className:`${z}__graph`,children:o.jsx("span",{className:`${z}__visually-hidden`,children:"graph showing progress"})}),o.jsx("p",{children:"Productive content text"}),o.jsx("p",{children:"Productive content text"})]}),actionIcons:[{id:"1",icon:n=>o.jsx(lo,{size:16,...n}),onClick:t("on click"),iconDescription:"Edit"},{id:"2",icon:n=>o.jsx(U,{size:16,...n}),onClick:t("on click"),iconDescription:"Delete"}]},r=n=>{const{children:S,columnSizeSm:X,columnSizeMd:Y,columnSizeLg:Z,slug:h,...oo}=n;return o.jsx(ro,{children:o.jsx(no,{sm:X,md:Y,lg:Z,children:o.jsx(Q,{...oo,slug:h&&(h===2||ao),children:S})})})},s=r.bind({});s.args={...e};const i=r.bind({});i.args={...e,description:"caption"};const l=r.bind({});l.args={...e,label:"Label"};const c=r.bind({});c.args={...e,title:"",label:"Label",actionsPlacement:"bottom",primaryButtonText:"Read more"};const a=r.bind({});a.args={...e,iconDescription:"Option",overflowAriaLabel:"Overflow menu",overflowActions:[{id:"1",itemText:"Edit",onClick:t("on click"),onKeyDown:t("on keydown")},{id:"2",itemText:"Delete",onClick:t("on click"),onKeyDown:t("on keydown")}]};const m=r.bind({});m.args={...e,primaryButtonText:"Read more"};const u=r.bind({});u.args={...e,primaryButtonText:"Read more",actionsPlacement:"bottom",title:"",label:"Label"};const d=r.bind({});d.args={...e,onClick:t("on click"),onKeyDown:t("on keydown"),primaryButtonText:"Read more",actionIcons:[]};const p=r.bind({});p.args={...e,primaryButtonText:"Read more",primaryButtonHref:"#"};const g=r.bind({});g.args={...e,primaryButtonPlacement:"top",primaryButtonText:"Read more",primaryButtonIcon:n=>o.jsx(U,{size:16,...n}),primaryButtonDisabled:!0};var C,y,x;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`opts => {
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
}`,...(x=(y=s.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var v,b,P;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`opts => {
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
}`,...(P=(b=i.parameters)==null?void 0:b.docs)==null?void 0:P.source}}};var L,f,w;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`opts => {
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
}`,...(w=(f=l.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var G,j,B;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`opts => {
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
}`,...(B=(j=c.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var M,k,T;a.parameters={...a.parameters,docs:{...(M=a.parameters)==null?void 0:M.docs,source:{originalSource:`opts => {
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
}`,...(T=(k=a.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var D,N,A;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`opts => {
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
}`,...(A=(N=m.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var _,I,R;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`opts => {
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
}`,...(R=(I=u.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var W,O,E;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`opts => {
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
}`,...(E=(O=d.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var F,K,H;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`opts => {
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
}`,...(H=(K=p.parameters)==null?void 0:K.docs)==null?void 0:H.source}}};var $,q,J;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`opts => {
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
}`,...(J=(q=g.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};const Yo=["Default","WithCaption","WithLabel","LabelOnly","WithOverflow","SupplementalBottomBar","ComplexBottomBar","Clickable","WithButtonHref","WithActionGhostButton"];export{d as Clickable,u as ComplexBottomBar,s as Default,c as LabelOnly,m as SupplementalBottomBar,g as WithActionGhostButton,p as WithButtonHref,i as WithCaption,l as WithLabel,a as WithOverflow,Yo as __namedExportsOrder,Xo as default};
