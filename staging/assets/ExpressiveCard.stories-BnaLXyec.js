import{j as n,p as se}from"./settings-DrdbGLhD.js";import{u as ne,c as ie,_ as ce,k as le}from"./deprecate-D9ms-jbM.js";import{P as e}from"./index-Dk74W0Oi.js";import{R as me,r as de}from"./index-BwDkhjyp.js";import{G as oe}from"./Grid-sFQW4EYz.js";import{C as re}from"./Column-joQvaXDX.js";import{S as ue,a as pe}from"./index-DQgsvTql.js";import{a as j}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{g as ge}from"./devtools-B_UYo462.js";import{p as ye}from"./props-helper-D-fMQKH_.js";import{C as fe}from"./Card-BY_Qnxj4.js";import{b as he,A as Se}from"./bucket-0-D7rUCVax.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./events-Bq7WR1mU.js";import"./index-BONylQH5.js";import"./index-gKY8typL.js";import"./bucket-16-C-1D9aPX.js";import"./v4-CQkTLCs1.js";import"./index-3iDKb0iK.js";import"./Text-_TFgs5hl.js";import"./useAttachedMenu-BGzc4N1_.js";import"./bucket-11-S2aFzyL7.js";import"./wrapFocus-CuszVIVc.js";import"./mergeRefs-CTUecegF.js";import"./createClassWrapper-EbB2Yi8H.js";import"./index-DoBoZ-97.js";import"./LayerContext-DbU-6VX4.js";import"./bucket-5-BuK6y5Rd.js";import"./bucket-8-61DsWji_.js";const te=o=>{let{as:t="div",className:i,children:m,ratio:d="1x1",...c}=o;const l=ne(),C=ie(i,`${l}--aspect-ratio`,`${l}--aspect-ratio--${d}`);return me.createElement(t,ce({className:C},c),m)};te.propTypes={as:e.elementType,children:e.node,className:e.string,ratio:e.oneOf(["16x9","9x16","2x1","1x2","4x3","3x4","3x2","2x3","1x1"])};const z="ExpressiveCard";let s=de.forwardRef((o,t)=>{const i=ye(o,["actionIconsPosition","overflowActions","productive","titleSize"]);return n.jsx(fe,{ref:t,...i,...ge(z)})});s=se.checkComponentEnabled(s,z);s.propTypes={actionIcons:e.arrayOf(e.shape({id:e.string,icon:e.oneOfType([e.func,e.object]),onKeyDown:e.func,onClick:e.func,iconDescription:e.string,href:e.string})),children:e.node,className:e.string,description:e.oneOfType([e.string,e.object,e.node]),label:e.oneOfType([e.string,e.object,e.node]),media:e.node,mediaPosition:e.oneOf(["top","left"]),onClick:e.func,onPrimaryButtonClick:e.func,onSecondaryButtonClick:e.func,pictogram:e.oneOfType([e.func,e.object]),primaryButtonHref:e.string,primaryButtonIcon:e.oneOfType([e.func,e.object]),primaryButtonKind:e.oneOf(["primary","ghost"]),primaryButtonText:e.string,secondaryButtonHref:e.string,secondaryButtonIcon:e.oneOfType([e.func,e.object]),secondaryButtonKind:e.oneOf(["secondary","ghost"]),secondaryButtonText:e.string,slug:e.oneOfType([e.node,e.bool]),title:e.oneOfType([e.string,e.object,e.node])};s.displayName=z;s.__docgenInfo={description:"",methods:[],displayName:"ExpressiveCard",props:{actionIcons:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id?: string;
  icon?: () => void | object;
  onKeydown?: () => void;
  onClick?: () => void;
  iconDescription?: string;
  href?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1}},{key:"icon",value:{name:"signature",type:"function",raw:"() => void | object",signature:{arguments:[],return:{name:"union",raw:"void | object",elements:[{name:"void"},{name:"object"}]}},required:!1}},{key:"onKeydown",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"iconDescription",value:{name:"string",required:!1}},{key:"href",value:{name:"string",required:!1}}]}}],raw:"ActionIcon[]"},description:"Icons that are displayed on card. Refer to design documentation for implementation guidelines. Note- href will supersede onClick",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",required:!1},icon:{name:"union",value:[{name:"func"},{name:"object"}],required:!1},onKeyDown:{name:"func",required:!1},onClick:{name:"func",required:!1},iconDescription:{name:"string",required:!1},href:{name:"string",required:!1}}}}},className:{required:!1,tsType:{name:"string"},description:"Optional user provided class",type:{name:"string"}},description:{required:!1,tsType:{name:"union",raw:"string | object | ReactNode",elements:[{name:"string"},{name:"object"},{name:"ReactNode"}]},description:"Optional header description",type:{name:"union",value:[{name:"string"},{name:"object"},{name:"node"}]}},label:{required:!1,tsType:{name:"union",raw:"string | object | ReactNode",elements:[{name:"string"},{name:"object"},{name:"ReactNode"}]},description:"Optional label for the top of the card",type:{name:"union",value:[{name:"string"},{name:"object"},{name:"node"}]}},media:{required:!1,tsType:{name:"ReactNode"},description:"Optional media content like an image to be placed in the card",type:{name:"node"}},mediaPosition:{required:!1,tsType:{name:"union",raw:"'top' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'left'"}]},description:"Establishes the position of the media in the card",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'left'",computed:!1}]}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Provides the callback for a clickable card",type:{name:"func"}},onPrimaryButtonClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function that's called from the primary button or action icon",type:{name:"func"}},onSecondaryButtonClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function that's called from the secondary button",type:{name:"func"}},pictogram:{required:!1,tsType:{name:"CarbonIconType"},description:"Provides the icon that's displayed at the top of the card",type:{name:"union",value:[{name:"func"},{name:"object"}]}},primaryButtonHref:{required:!1,tsType:{name:"string"},description:"Optionally specify an href for your Button to become an <a> element",type:{name:"string"}},primaryButtonIcon:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void | object",signature:{arguments:[],return:{name:"union",raw:"void | object",elements:[{name:"void"},{name:"object"}]}}},description:"Optional prop to allow overriding the icon rendering. Can be a React component class",type:{name:"union",value:[{name:"func"},{name:"object"}]}},primaryButtonKind:{required:!1,tsType:{name:"union",raw:"'primary' | 'ghost'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'ghost'"}]},description:"Establishes the kind of button displayed for the primary button",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'ghost'",computed:!1}]}},primaryButtonText:{required:!1,tsType:{name:"string"},description:"The text that's displayed in the primary button",type:{name:"string"}},secondaryButtonHref:{required:!1,tsType:{name:"string"},description:"Optionally specify an href for your Button to become an <a> element",type:{name:"string"}},secondaryButtonIcon:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void | object",signature:{arguments:[],return:{name:"union",raw:"void | object",elements:[{name:"void"},{name:"object"}]}}},description:"Optional prop to allow overriding the icon rendering. Can be a React component class",type:{name:"union",value:[{name:"func"},{name:"object"}]}},secondaryButtonKind:{required:!1,tsType:{name:"union",raw:"'secondary' | 'ghost'",elements:[{name:"literal",value:"'secondary'"},{name:"literal",value:"'ghost'"}]},description:"Establishes the kind of button displayed for the secondary button",type:{name:"enum",value:[{value:"'secondary'",computed:!1},{value:"'ghost'",computed:!1}]}},secondaryButtonText:{required:!1,tsType:{name:"string"},description:"The text that's displayed in the secondary button",type:{name:"string"}},slug:{required:!1,tsType:{name:"union",raw:"ReactNode | boolean",elements:[{name:"ReactNode"},{name:"boolean"}]},description:"**Experimental:** For all cases a `Slug` component can be provided.\nClickable tiles only accept a boolean value of true and display a hollow slug.",type:{name:"union",value:[{name:"node"},{name:"bool"}]}},title:{required:!1,tsType:{name:"union",raw:"string | object | ReactNode",elements:[{name:"string"},{name:"object"},{name:"ReactNode"}]},description:"Title that's displayed at the top of the card",type:{name:"union",value:[{name:"string"},{name:"object"},{name:"node"}]}},children:{description:"Content that shows in the body of the card",type:{name:"node"},required:!1}},composes:["PropsWithChildren"]};const xe="#root{width:100%}.card-story .cds--aspect-ratio{display:flex;align-items:center;justify-content:center;background:var(--cds-layer-accent-01, #e0e0e0)}.c4p--card__media-left .c4p--card__media{width:100%;max-width:300px}",ae=n.jsx(ue,{className:"slug-container",size:"xs",children:n.jsx(pe,{children:n.jsxs("div",{children:[n.jsx("p",{className:"secondary",children:"AI Explained"}),n.jsx("h1",{children:"84%"}),n.jsx("p",{className:"secondary bold",children:"Confidence score"}),n.jsx("p",{className:"secondary",children:"This is not really Lorem Ipsum but the spell checker did not like the previous text with it's non-words which is why this unwieldy sentence, should one choose to call it that, here."}),n.jsx("hr",{}),n.jsx("p",{className:"secondary",children:"Model type"}),n.jsx("p",{className:"bold",children:"Foundation model"})]})})}),Xe={title:"IBM Products/Components/Cards/ExpressiveCard",component:s,tags:["autodocs"],parameters:{styles:xe},argTypes:{columnSizeSm:{control:{type:"select"},options:[4,8,12,16]},columnSizeMd:{control:{type:"select"},options:[4,8,12,16]},columnSizeLg:{control:{type:"select"},options:[4,8,12,16]},mediaRatio:{control:{type:"select"},options:["16x9","9x16","2x1","1x2","4x3","3x4","1x1"]},slug:{control:{type:"select",labels:{0:"No AI slug",1:"with AI Slug",2:"with hollow slug (boolean)"},default:0},options:[0,1,2]}},decorators:[o=>{const t=ne();return n.jsx("div",{className:`${t}--grid card-story`,children:o()})}]},r={label:"Label",title:"Title",columnSizeSm:4,columnSizeMd:8,columnSizeLg:4,children:n.jsx("p",{children:"expressive card body content block. description inviting the user to take action on the card."}),primaryButtonText:"Primary"},a=o=>{const{children:t,columnSizeSm:i,columnSizeMd:m,columnSizeLg:d,slug:c,...l}=o;return n.jsx(oe,{children:n.jsx(re,{sm:i,md:m,lg:d,children:n.jsx(s,{...l,slug:c&&(c===2||ae),children:t})})})},ve=o=>{const{children:t,columnSizeSm:i,columnSizeMd:m,columnSizeLg:d,mediaRatio:c="1x1",slug:l,...C}=o;return n.jsx(oe,{children:n.jsx(re,{sm:i,md:m,lg:d,children:n.jsx(s,{media:n.jsx(te,{ratio:c,children:c}),slug:l&&(l===2||ae),...C,children:t})})})},u=a.bind({});u.args={...r,mediaRatio:null};const p=a.bind({});p.args={...r,title:"",mediaRatio:null};const g=a.bind({});g.args={...r,caption:"Description or long caption",label:"",mediaRatio:null};const y=ve.bind({});y.args={...r};const f=a.bind({});f.args={...r,actionIcons:[{id:"1",icon:o=>n.jsx(he,{size:24,...o}),href:"#",iconDescription:"Next"}],primaryButtonText:"",mediaRatio:null};const h=a.bind({});h.args={...r,pictogram:o=>n.jsx(le,{size:32,...o}),mediaRatio:null};const S=a.bind({});S.args={...r,secondaryButtonText:"Secondary",secondaryButtonKind:"ghost",mediaRatio:null};const x=a.bind({});x.args={...r,onClick:j("on click"),onKeyDown:j("on keydown"),primaryButtonText:"",mediaRatio:null};const v=a.bind({});v.args={...r,primaryButtonHref:"#",secondaryButtonHref:"#",secondaryButtonText:"Secondary",secondaryButtonKind:"ghost"};const b=a.bind({});b.args={...r,primaryButtonIcon:o=>n.jsx(Se,{size:16,...o})};var T,w,B;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`opts => {
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
}`,...(B=(w=u.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var k,E,q;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`opts => {
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
}`,...(q=(E=p.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var R,M,L;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`opts => {
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
}`,...(L=(M=g.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var N,O,G;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`opts => {
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
}`,...(G=(O=y.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var I,P,A;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`opts => {
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
}`,...(A=(P=f.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var W,D,K;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`opts => {
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
}`,...(K=(D=h.parameters)==null?void 0:D.docs)==null?void 0:K.source}}};var _,H,F;S.parameters={...S.parameters,docs:{...(_=S.parameters)==null?void 0:_.docs,source:{originalSource:`opts => {
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
}`,...(F=(H=S.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};var $,J,Q;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`opts => {
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
}`,...(Q=(J=x.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,V,X;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`opts => {
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
}`,...(X=(V=v.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var Y,Z,ee;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`opts => {
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
}`,...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const Ye=["Default","LabelOnly","WithCaption","WithMedia","WithActionIconHref","WithPictogram","WithSecondaryAction","Clickable","WithButtonHref","WithButtonIcon"];export{x as Clickable,u as Default,p as LabelOnly,f as WithActionIconHref,v as WithButtonHref,b as WithButtonIcon,g as WithCaption,y as WithMedia,h as WithPictogram,S as WithSecondaryAction,Ye as __namedExportsOrder,Xe as default};
