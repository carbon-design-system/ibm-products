import{j as n,p as ie}from"./settings-BiUEFdm2.js";import{u as ne,c as le,_ as ce,k as me}from"./deprecate-D9ms-jbM.js";import{P as e}from"./index-Dk74W0Oi.js";import{R as de,r as ue}from"./index-BwDkhjyp.js";import{G as oe}from"./Grid-sFQW4EYz.js";import{C as re}from"./Column-joQvaXDX.js";import{S as pe,a as ge}from"./index-Bo7SW2KM.js";import{S as ye}from"./StoryDocsPage-BuwgUq5r.js";import{a as j}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{g as he}from"./devtools-BPcQvzXy.js";import{p as fe}from"./props-helper-1oU9hECe.js";import{C as Se}from"./Card-CciU5-u3.js";import{b as xe,A as ve}from"./bucket-0-D7rUCVax.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./events-Bq7WR1mU.js";import"./index-BONylQH5.js";import"./index-gKY8typL.js";import"./bucket-16-C-1D9aPX.js";import"./index-CDYzkStP.js";import"./iframe-j3s5A4v9.js";import"../sb-preview/runtime.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-BjQFKvNH.js";import"./isSymbol-BZYRlrjc.js";import"./index-DrFu-skq.js";import"./story-helper-YTYnELA9.js";import"./tslib.es6-B4_xh3D5.js";import"./v4-CQkTLCs1.js";import"./index-B7Id7uWF.js";import"./Text-_TFgs5hl.js";import"./useAttachedMenu-BGzc4N1_.js";import"./bucket-11-S2aFzyL7.js";import"./wrapFocus-CuszVIVc.js";import"./mergeRefs-CTUecegF.js";import"./createClassWrapper-EbB2Yi8H.js";import"./index-DoBoZ-97.js";import"./LayerContext-DbU-6VX4.js";import"./bucket-5-BuK6y5Rd.js";import"./bucket-8-61DsWji_.js";const te=o=>{let{as:t="div",className:i,children:v,ratio:b="1x1",...l}=o;const c=ne(),C=le(i,`${c}--aspect-ratio`,`${c}--aspect-ratio--${b}`);return de.createElement(t,ce({className:C},l),v)};te.propTypes={as:e.elementType,children:e.node,className:e.string,ratio:e.oneOf(["16x9","9x16","2x1","1x2","4x3","3x4","3x2","2x3","1x1"])};const z="ExpressiveCard";let a=ue.forwardRef((o,t)=>{const i=fe(o,["actionIconsPosition","overflowActions","productive","titleSize"]);return n.jsx(Se,{ref:t,...i,...he(z)})});a=ie.checkComponentEnabled(a,z);a.propTypes={actionIcons:e.arrayOf(e.shape({id:e.string,icon:e.oneOfType([e.func,e.object]),onKeyDown:e.func,onClick:e.func,iconDescription:e.string,href:e.string})),children:e.node,className:e.string,description:e.oneOfType([e.string,e.object,e.node]),label:e.oneOfType([e.string,e.object,e.node]),media:e.node,mediaPosition:e.oneOf(["top","left"]),onClick:e.func,onPrimaryButtonClick:e.func,onSecondaryButtonClick:e.func,pictogram:e.oneOfType([e.func,e.object]),primaryButtonHref:e.string,primaryButtonIcon:e.oneOfType([e.func,e.object]),primaryButtonKind:e.oneOf(["primary","ghost"]),primaryButtonText:e.string,secondaryButtonHref:e.string,secondaryButtonIcon:e.oneOfType([e.func,e.object]),secondaryButtonKind:e.oneOf(["secondary","ghost"]),secondaryButtonText:e.string,slug:e.oneOfType([e.node,e.bool]),title:e.oneOfType([e.string,e.object,e.node])};a.displayName=z;a.__docgenInfo={description:"",methods:[],displayName:"ExpressiveCard",props:{actionIcons:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id?: string;
  icon?: () => void | object;
  onKeydown?: () => void;
  onClick?: () => void;
  iconDescription?: string;
  href?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1}},{key:"icon",value:{name:"signature",type:"function",raw:"() => void | object",signature:{arguments:[],return:{name:"union",raw:"void | object",elements:[{name:"void"},{name:"object"}]}},required:!1}},{key:"onKeydown",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"iconDescription",value:{name:"string",required:!1}},{key:"href",value:{name:"string",required:!1}}]}}],raw:"ActionIcon[]"},description:"Icons that are displayed on card. Refer to design documentation for implementation guidelines. Note- href will supersede onClick",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",required:!1},icon:{name:"union",value:[{name:"func"},{name:"object"}],required:!1},onKeyDown:{name:"func",required:!1},onClick:{name:"func",required:!1},iconDescription:{name:"string",required:!1},href:{name:"string",required:!1}}}}},className:{required:!1,tsType:{name:"string"},description:"Optional user provided class",type:{name:"string"}},description:{required:!1,tsType:{name:"union",raw:"string | object | ReactNode",elements:[{name:"string"},{name:"object"},{name:"ReactNode"}]},description:"Optional header description",type:{name:"union",value:[{name:"string"},{name:"object"},{name:"node"}]}},label:{required:!1,tsType:{name:"union",raw:"string | object | ReactNode",elements:[{name:"string"},{name:"object"},{name:"ReactNode"}]},description:"Optional label for the top of the card",type:{name:"union",value:[{name:"string"},{name:"object"},{name:"node"}]}},media:{required:!1,tsType:{name:"ReactNode"},description:"Optional media content like an image to be placed in the card",type:{name:"node"}},mediaPosition:{required:!1,tsType:{name:"union",raw:"'top' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'left'"}]},description:"Establishes the position of the media in the card",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'left'",computed:!1}]}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Provides the callback for a clickable card",type:{name:"func"}},onPrimaryButtonClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function that's called from the primary button or action icon",type:{name:"func"}},onSecondaryButtonClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function that's called from the secondary button",type:{name:"func"}},pictogram:{required:!1,tsType:{name:"CarbonIconType"},description:"Provides the icon that's displayed at the top of the card",type:{name:"union",value:[{name:"func"},{name:"object"}]}},primaryButtonHref:{required:!1,tsType:{name:"string"},description:"Optionally specify an href for your Button to become an <a> element",type:{name:"string"}},primaryButtonIcon:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void | object",signature:{arguments:[],return:{name:"union",raw:"void | object",elements:[{name:"void"},{name:"object"}]}}},description:"Optional prop to allow overriding the icon rendering. Can be a React component class",type:{name:"union",value:[{name:"func"},{name:"object"}]}},primaryButtonKind:{required:!1,tsType:{name:"union",raw:"'primary' | 'ghost'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'ghost'"}]},description:"Establishes the kind of button displayed for the primary button",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'ghost'",computed:!1}]}},primaryButtonText:{required:!1,tsType:{name:"string"},description:"The text that's displayed in the primary button",type:{name:"string"}},secondaryButtonHref:{required:!1,tsType:{name:"string"},description:"Optionally specify an href for your Button to become an <a> element",type:{name:"string"}},secondaryButtonIcon:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void | object",signature:{arguments:[],return:{name:"union",raw:"void | object",elements:[{name:"void"},{name:"object"}]}}},description:"Optional prop to allow overriding the icon rendering. Can be a React component class",type:{name:"union",value:[{name:"func"},{name:"object"}]}},secondaryButtonKind:{required:!1,tsType:{name:"union",raw:"'secondary' | 'ghost'",elements:[{name:"literal",value:"'secondary'"},{name:"literal",value:"'ghost'"}]},description:"Establishes the kind of button displayed for the secondary button",type:{name:"enum",value:[{value:"'secondary'",computed:!1},{value:"'ghost'",computed:!1}]}},secondaryButtonText:{required:!1,tsType:{name:"string"},description:"The text that's displayed in the secondary button",type:{name:"string"}},slug:{required:!1,tsType:{name:"union",raw:"ReactNode | boolean",elements:[{name:"ReactNode"},{name:"boolean"}]},description:"**Experimental:** For all cases a `Slug` component can be provided.\nClickable tiles only accept a boolean value of true and display a hollow slug.",type:{name:"union",value:[{name:"node"},{name:"bool"}]}},title:{required:!1,tsType:{name:"union",raw:"string | object | ReactNode",elements:[{name:"string"},{name:"object"},{name:"ReactNode"}]},description:"Title that's displayed at the top of the card",type:{name:"union",value:[{name:"string"},{name:"object"},{name:"node"}]}},children:{description:"Content that shows in the body of the card",type:{name:"node"},required:!1}},composes:["PropsWithChildren"]};const be="#root{width:100%}.card-story .cds--aspect-ratio{display:flex;align-items:center;justify-content:center;background:var(--cds-layer-accent-01, #e0e0e0)}.c4p--card__media-left .c4p--card__media{width:100%;max-width:300px}",se=()=>n.jsx(ye,{blocks:[{story:m},{story:f},{story:d},{story:g},{story:S},{story:x},{story:u},{story:p},{story:y},{story:h},{title:"With Slug",description:"A Carbon AI slug can be used within the ExpressiveCard using the Slug property.",source:{language:"html",code:`
      <ExpressiveCard
  label="Label"
  primaryButtonText="Primary"
  slug={
    <Slug className="slug-container" size="xs">
      <SlugContent>
          Slug content goes here...
      </SlugContent>
    </Slug>
  }
  title="Title">
  <p>
    expressive card body content block. description inviting the user to take action on the card.
  </p>
</ExpressiveCard>
          `}},{description:"Clickable tiles only accept a boolean value of true for the Slug property and display a hollow slug.",source:{language:"html",code:`
      <ExpressiveCard
  label="Label"
  primaryButtonText="Primary"
  onClick={() => {}}
  onKeyDown={() => {}}
  slug={true}
  title="Title">
  <p>
    expressive card body content block. description inviting the user to take action on the card.
  </p>
</ExpressiveCard>
          `}}]});se.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const ae=n.jsx(pe,{className:"slug-container",size:"xs",children:n.jsx(ge,{children:n.jsxs("div",{children:[n.jsx("p",{className:"secondary",children:"AI Explained"}),n.jsx("h1",{children:"84%"}),n.jsx("p",{className:"secondary bold",children:"Confidence score"}),n.jsx("p",{className:"secondary",children:"This is not really Lorem Ipsum but the spell checker did not like the previous text with it's non-words which is why this unwieldy sentence, should one choose to call it that, here."}),n.jsx("hr",{}),n.jsx("p",{className:"secondary",children:"Model type"}),n.jsx("p",{className:"bold",children:"Foundation model"})]})})}),dn={title:"IBM Products/Components/Cards/ExpressiveCard",component:a,tags:["autodocs"],parameters:{styles:be,docs:{page:se}},argTypes:{columnSizeSm:{control:{type:"select"},options:[4,8,12,16]},columnSizeMd:{control:{type:"select"},options:[4,8,12,16]},columnSizeLg:{control:{type:"select"},options:[4,8,12,16]},mediaRatio:{control:{type:"select"},options:["16x9","9x16","2x1","1x2","4x3","3x4","1x1"]},slug:{control:{type:"select",labels:{0:"No AI slug",1:"with AI Slug",2:"with hollow slug (boolean)"},default:0},options:[0,1,2]}},decorators:[o=>{const t=ne();return n.jsx("div",{className:`${t}--grid card-story`,children:o()})}]},r={label:"Label",title:"Title",columnSizeSm:4,columnSizeMd:8,columnSizeLg:4,children:n.jsx("p",{children:"expressive card body content block. description inviting the user to take action on the card."}),primaryButtonText:"Primary"},s=o=>{const{children:t,columnSizeSm:i,columnSizeMd:v,columnSizeLg:b,slug:l,...c}=o;return n.jsx(oe,{children:n.jsx(re,{sm:i,md:v,lg:b,children:n.jsx(a,{...c,slug:l&&(l===2||ae),children:t})})})},Ce=o=>{const{children:t,columnSizeSm:i,columnSizeMd:v,columnSizeLg:b,mediaRatio:l="1x1",slug:c,...C}=o;return n.jsx(oe,{children:n.jsx(re,{sm:i,md:v,lg:b,children:n.jsx(a,{media:n.jsx(te,{ratio:l,children:l}),slug:c&&(c===2||ae),...C,children:t})})})},m=s.bind({});m.args={...r,mediaRatio:null};const d=s.bind({});d.args={...r,title:"",mediaRatio:null};const u=s.bind({});u.args={...r,caption:"Description or long caption",label:"",mediaRatio:null};const p=Ce.bind({});p.args={...r};const g=s.bind({});g.args={...r,actionIcons:[{id:"1",icon:o=>n.jsx(xe,{size:24,...o}),href:"#",iconDescription:"Next"}],primaryButtonText:"",mediaRatio:null};const y=s.bind({});y.args={...r,pictogram:o=>n.jsx(me,{size:32,...o}),mediaRatio:null};const h=s.bind({});h.args={...r,secondaryButtonText:"Secondary",secondaryButtonKind:"ghost",mediaRatio:null};const f=s.bind({});f.args={...r,onClick:j("on click"),onKeyDown:j("on keydown"),primaryButtonText:"",mediaRatio:null};const S=s.bind({});S.args={...r,primaryButtonHref:"#",secondaryButtonHref:"#",secondaryButtonText:"Secondary",secondaryButtonKind:"ghost"};const x=s.bind({});x.args={...r,primaryButtonIcon:o=>n.jsx(ve,{size:16,...o})};var T,w,k;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`opts => {
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
        <ExpressiveCard {...args} slug={slug && (slug === 2 || sampleSlug)}>
          {children}
        </ExpressiveCard>
      </Column>
    </Grid>;
}`,...(k=(w=m.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var B,E,q;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`opts => {
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
        <ExpressiveCard {...args} slug={slug && (slug === 2 || sampleSlug)}>
          {children}
        </ExpressiveCard>
      </Column>
    </Grid>;
}`,...(q=(E=d.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var R,L,N;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`opts => {
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
        <ExpressiveCard {...args} slug={slug && (slug === 2 || sampleSlug)}>
          {children}
        </ExpressiveCard>
      </Column>
    </Grid>;
}`,...(N=(L=u.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var M,O,P;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`opts => {
  const {
    children,
    columnSizeSm,
    columnSizeMd,
    columnSizeLg,
    mediaRatio = '1x1',
    slug,
    ...args
  } = opts;
  return <Grid>
      <Column sm={columnSizeSm} md={columnSizeMd} lg={columnSizeLg}>
        <ExpressiveCard media={<AspectRatio ratio={mediaRatio}>{mediaRatio}</AspectRatio>} slug={slug && (slug === 2 || sampleSlug)} {...args}>
          {children}
        </ExpressiveCard>
      </Column>
    </Grid>;
}`,...(P=(O=p.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var I,G,A;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`opts => {
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
        <ExpressiveCard {...args} slug={slug && (slug === 2 || sampleSlug)}>
          {children}
        </ExpressiveCard>
      </Column>
    </Grid>;
}`,...(A=(G=g.parameters)==null?void 0:G.docs)==null?void 0:A.source}}};var D,W,_;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`opts => {
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
        <ExpressiveCard {...args} slug={slug && (slug === 2 || sampleSlug)}>
          {children}
        </ExpressiveCard>
      </Column>
    </Grid>;
}`,...(_=(W=y.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var K,H,F;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`opts => {
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
        <ExpressiveCard {...args} slug={slug && (slug === 2 || sampleSlug)}>
          {children}
        </ExpressiveCard>
      </Column>
    </Grid>;
}`,...(F=(H=h.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};var $,J,Q;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`opts => {
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
        <ExpressiveCard {...args} slug={slug && (slug === 2 || sampleSlug)}>
          {children}
        </ExpressiveCard>
      </Column>
    </Grid>;
}`,...(Q=(J=f.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,V,X;S.parameters={...S.parameters,docs:{...(U=S.parameters)==null?void 0:U.docs,source:{originalSource:`opts => {
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
        <ExpressiveCard {...args} slug={slug && (slug === 2 || sampleSlug)}>
          {children}
        </ExpressiveCard>
      </Column>
    </Grid>;
}`,...(X=(V=S.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var Y,Z,ee;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`opts => {
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
        <ExpressiveCard {...args} slug={slug && (slug === 2 || sampleSlug)}>
          {children}
        </ExpressiveCard>
      </Column>
    </Grid>;
}`,...(ee=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const un=["Default","LabelOnly","WithCaption","WithMedia","WithActionIconHref","WithPictogram","WithSecondaryAction","Clickable","WithButtonHref","WithButtonIcon"];export{f as Clickable,m as Default,d as LabelOnly,g as WithActionIconHref,S as WithButtonHref,x as WithButtonIcon,u as WithCaption,p as WithMedia,y as WithPictogram,h as WithSecondaryAction,un as __namedExportsOrder,dn as default};
