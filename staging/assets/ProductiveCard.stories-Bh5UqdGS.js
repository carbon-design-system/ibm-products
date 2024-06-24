import{j as n}from"./settings-DrdbGLhD.js";import{u as Z}from"./deprecate-D9ms-jbM.js";import{G as nn}from"./Grid-sFQW4EYz.js";import{C as on}from"./Column-joQvaXDX.js";import{S as en,a as rn}from"./index-DQgsvTql.js";import{a as s}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{P as J}from"./ProductiveCard-CCKP8Edw.js";import{a as sn}from"./bucket-5-BuK6y5Rd.js";import{T as Q}from"./bucket-16-C-1D9aPX.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-Dk74W0Oi.js";import"./events-Bq7WR1mU.js";import"./index-BONylQH5.js";import"./index-gKY8typL.js";import"./v4-CQkTLCs1.js";import"./devtools-B_UYo462.js";import"./props-helper-D-fMQKH_.js";import"./Card-BY_Qnxj4.js";import"./index-3iDKb0iK.js";import"./Text-_TFgs5hl.js";import"./useAttachedMenu-BGzc4N1_.js";import"./bucket-11-S2aFzyL7.js";import"./wrapFocus-CuszVIVc.js";import"./mergeRefs-CTUecegF.js";import"./createClassWrapper-EbB2Yi8H.js";import"./index-DoBoZ-97.js";import"./LayerContext-DbU-6VX4.js";import"./bucket-8-61DsWji_.js";const tn="#root{width:100%}.graph{width:200px;height:100px;border:10px solid var(--cds-border-subtle-01, #c6c6c6);border-right-color:var(--cds-support-success, #24a148);border-bottom:0;border-left-color:var(--cds-support-error, #da1e28);margin:0 auto 1.5rem;border-top-left-radius:110px;border-top-right-radius:110px}",ln=n.jsx(en,{className:"slug-container",size:"xs",children:n.jsx(rn,{children:n.jsxs("div",{children:[n.jsx("p",{className:"secondary",children:"AI Explained"}),n.jsx("h1",{children:"84%"}),n.jsx("p",{className:"secondary bold",children:"Confidence score"}),n.jsx("p",{className:"secondary",children:"This is not really Lorem Ipsum but the spell checker did not like the previous text with it's non-words which is why this unwieldy sentence, should one choose to call it that, here."}),n.jsx("hr",{}),n.jsx("p",{className:"secondary",children:"Model type"}),n.jsx("p",{className:"bold",children:"Foundation model"})]})})}),En={title:"IBM Products/Components/Cards/ProductiveCard",component:J,tags:["autodocs"],parameters:{styles:tn},argTypes:{columnSizeSm:{control:{type:"select"},options:[4,8,12,16]},columnSizeMd:{control:{type:"select"},options:[4,8,12,16]},columnSizeLg:{control:{type:"select"},options:[4,8,12,16]},slug:{control:{type:"select",labels:{0:"No AI slug",1:"with AI Slug",2:"with hollow slug (boolean)"},default:0},options:[0,1]}},decorators:[r=>{const S=Z();return n.jsx("div",{className:`${S}--grid card-story`,children:r()})}]},o={title:"Title",columnSizeSm:4,columnSizeMd:8,columnSizeLg:4,children:n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"graph"}),n.jsx("p",{children:"Productive content text"}),n.jsx("p",{children:"Productive content text"})]}),actionIcons:[{id:"1",icon:r=>n.jsx(sn,{size:16,...r}),onClick:s("on click"),iconDescription:"Edit"},{id:"2",icon:r=>n.jsx(Q,{size:16,...r}),onClick:s("on click"),iconDescription:"Delete"}]},e=r=>{const{children:S,columnSizeSm:U,columnSizeMd:V,columnSizeLg:X,slug:h,...Y}=r;return n.jsx(nn,{children:n.jsx(on,{sm:U,md:V,lg:X,children:n.jsx(J,{...Y,slug:h&&(h===2||ln),children:S})})})},t=e.bind({});t.args={...o};const i=e.bind({});i.args={...o,description:"caption"};const l=e.bind({});l.args={...o,label:"Label"};const c=e.bind({});c.args={...o,title:"",label:"Label",actionsPlacement:"bottom",primaryButtonText:"Ghost button"};const m=e.bind({});m.args={...o,overflowAriaLabel:"Overflow menu",overflowActions:[{id:"1",itemText:"Edit",onClick:s("on click"),onKeyDown:s("on keydown")},{id:"2",itemText:"Delete",onClick:s("on click"),onKeyDown:s("on keydown")}]};const a=e.bind({});a.args={...o,primaryButtonText:"Ghost button"};const u=e.bind({});u.args={...o,primaryButtonText:"Ghost button",actionsPlacement:"bottom",title:"",label:"label"};const d=e.bind({});d.args={...o,onClick:s("on click"),onKeyDown:s("on keydown"),primaryButtonText:"Ghost button",actionIcons:[]};const p=e.bind({});p.args={...o,primaryButtonText:"Ghost button",primaryButtonHref:"#"};const g=e.bind({});g.args={...o,primaryButtonPlacement:"top",primaryButtonText:"Ghost button",primaryButtonIcon:r=>n.jsx(Q,{size:16,...r}),primaryButtonDisabled:!0};var z,C,b;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`opts => {
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
}`,...(b=(C=t.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var x,v,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`opts => {
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
}`,...(y=(v=i.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var P,G,L;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`opts => {
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
}`,...(L=(G=l.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};var f,M,j;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`opts => {
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
}`,...(j=(M=c.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var B,w,k;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`opts => {
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
}`,...(k=(w=m.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var T,D,W;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`opts => {
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
}`,...(W=(D=a.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var N,A,I;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`opts => {
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
}`,...(I=(A=u.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var E,O,H;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`opts => {
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
}`,...(H=(O=d.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var K,_,F;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`opts => {
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
}`,...(F=(_=p.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var R,$,q;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`opts => {
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
}`,...(q=($=g.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};const On=["Default","WithCaption","WithLabel","LabelOnly","WithOverflow","SupplementalBottomBar","ComplexBottomBar","Clickable","WithButtonHref","WithActionGhostButton"];export{d as Clickable,u as ComplexBottomBar,t as Default,c as LabelOnly,a as SupplementalBottomBar,g as WithActionGhostButton,p as WithButtonHref,i as WithCaption,l as WithLabel,m as WithOverflow,On as __namedExportsOrder,En as default};
