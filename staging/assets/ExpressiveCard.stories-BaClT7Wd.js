import{e as n,r as se}from"./index-CPiZ6Cnx.js";import{b as ne,c as ce,_ as le,P as e,a3 as me}from"./index-BPCFiO9b.js";import{G as oe}from"./Grid-DcB6NJHk.js";import{C as re}from"./Column-De0GgPoD.js";import{T as de,a as pe,b as ue,A as ge,c as ye}from"./index-GAgccHqf.js";import{S as fe}from"./StoryDocsPage-vEZJbmBv.js";import{a as E}from"./index-B-lxVbXh.js";import{g as he}from"./devtools-Ca6Wku6c.js";import{p as be}from"./settings-41bnSjHp.js";import{p as Se}from"./props-helper-C4WGU-Xx.js";import{C as ve}from"./Card-Ht60uCGh.js";import{e as Ce}from"./bucket-9-qDf-0NK_.js";import{b as xe,A as ze}from"./bucket-0-BYIdRiFw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B83en7q5.js";import"./index-ZKO_qc5e.js";import"./index-H2wBg9na.js";import"./bucket-17-VMH0CKri.js";import"./index-DblCLej2.js";import"./iframe-DG_HeTRT.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";import"./story-helper-C7pmvIin.js";import"./v4-CtRu48qb.js";import"./events-OVwOsPzJ.js";import"./MenuItem-qN6UbXhC.js";import"./useControllableState-uQXf5Mu5.js";import"./useAttachedMenu-CqlpaYyp.js";import"./Text-DJS5NTiV.js";import"./bucket-2-Bg39G-BA.js";import"./index-BZnmZh5O.js";import"./mergeRefs-CTUecegF.js";import"./bucket-12-6vZmyEHs.js";import"./wrapFocus-Dfrp1CCV.js";import"./createClassWrapper-CfmfodUV.js";import"./index-C_tB4MqD.js";import"./LayerContext-BGhaVt7n.js";import"./bucket-6-CO2LLwKX.js";const te=o=>{let{as:t="div",className:l,children:v,ratio:C="1x1",...i}=o;const s=ne(),x=ce(l,`${s}--aspect-ratio`,`${s}--aspect-ratio--${C}`);return n.createElement(t,le({className:x},i),v)};te.propTypes={as:e.elementType,children:e.node,className:e.string,ratio:e.oneOf(["16x9","9x16","2x1","1x2","4x3","3x4","3x2","2x3","1x1"])};const z="ExpressiveCard";let c=se.forwardRef((o,t)=>{const l=Se(o,["actionIconsPosition","overflowActions","productive","titleSize"]);return n.createElement(ve,{ref:t,...l,...he(z)})});c=be.checkComponentEnabled(c,z);c.propTypes={actionIcons:e.arrayOf(e.shape({id:e.string,icon:e.oneOfType([e.func,e.object]),onKeyDown:e.func,onClick:e.func,iconDescription:e.string,href:e.string})),children:e.node,className:e.string,decorator:e.oneOfType([e.node,e.bool]),description:e.oneOfType([e.string,e.object,e.node]),label:e.oneOfType([e.string,e.object,e.node]),media:e.node,mediaPosition:e.oneOf(["top","left"]),onClick:e.func,onPrimaryButtonClick:e.func,onSecondaryButtonClick:e.func,pictogram:e.oneOfType([e.func,e.object]),primaryButtonHref:e.string,primaryButtonIcon:e.oneOfType([e.func,e.object]),primaryButtonKind:e.oneOf(["primary","ghost"]),primaryButtonText:e.string,secondaryButtonHref:e.string,secondaryButtonIcon:e.oneOfType([e.func,e.object]),secondaryButtonKind:e.oneOf(["secondary","ghost"]),secondaryButtonText:e.string,slug:e.oneOfType([e.node,e.bool]),title:e.oneOfType([e.string,e.object,e.node])};c.displayName=z;c.__docgenInfo={description:"",methods:[],displayName:"ExpressiveCard",props:{actionIcons:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id?: string;
  icon?: () => void | object;
  onKeydown?: () => void;
  onClick?: () => void;
  iconDescription?: string;
  href?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1}},{key:"icon",value:{name:"signature",type:"function",raw:"() => void | object",signature:{arguments:[],return:{name:"union",raw:"void | object",elements:[{name:"void"},{name:"object"}]}},required:!1}},{key:"onKeydown",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"iconDescription",value:{name:"string",required:!1}},{key:"href",value:{name:"string",required:!1}}]}}],raw:"ActionIcon[]"},description:"Icons that are displayed on card. Refer to design documentation for implementation guidelines. Note- href will supersede onClick",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",required:!1},icon:{name:"union",value:[{name:"func"},{name:"object"}],required:!1},onKeyDown:{name:"func",required:!1},onClick:{name:"func",required:!1},iconDescription:{name:"string",required:!1},href:{name:"string",required:!1}}}}},className:{required:!1,tsType:{name:"string"},description:"Optional user provided class",type:{name:"string"}},decorator:{required:!1,tsType:{name:"union",raw:"ReactNode | boolean",elements:[{name:"ReactNode"},{name:"boolean"}]},description:"Optional prop that allows you to pass any component.",type:{name:"union",value:[{name:"node"},{name:"bool"}]}},description:{required:!1,tsType:{name:"union",raw:"string | object | ReactNode",elements:[{name:"string"},{name:"object"},{name:"ReactNode"}]},description:"Optional header description",type:{name:"union",value:[{name:"string"},{name:"object"},{name:"node"}]}},label:{required:!1,tsType:{name:"union",raw:"string | object | ReactNode",elements:[{name:"string"},{name:"object"},{name:"ReactNode"}]},description:"Optional label for the top of the card",type:{name:"union",value:[{name:"string"},{name:"object"},{name:"node"}]}},media:{required:!1,tsType:{name:"ReactNode"},description:"Optional media content like an image to be placed in the card",type:{name:"node"}},mediaPosition:{required:!1,tsType:{name:"union",raw:"'top' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'left'"}]},description:"Establishes the position of the media in the card",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'left'",computed:!1}]}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Provides the callback for a clickable card",type:{name:"func"}},onPrimaryButtonClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function that's called from the primary button or action icon",type:{name:"func"}},onSecondaryButtonClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function that's called from the secondary button",type:{name:"func"}},pictogram:{required:!1,tsType:{name:"CarbonIconType"},description:"Provides the icon that's displayed at the top of the card",type:{name:"union",value:[{name:"func"},{name:"object"}]}},primaryButtonHref:{required:!1,tsType:{name:"string"},description:"Optionally specify an href for your Button to become an <a> element",type:{name:"string"}},primaryButtonIcon:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void | object",signature:{arguments:[],return:{name:"union",raw:"void | object",elements:[{name:"void"},{name:"object"}]}}},description:"Optional prop to allow overriding the icon rendering. Can be a React component class",type:{name:"union",value:[{name:"func"},{name:"object"}]}},primaryButtonKind:{required:!1,tsType:{name:"union",raw:"'primary' | 'ghost'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'ghost'"}]},description:"Establishes the kind of button displayed for the primary button",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'ghost'",computed:!1}]}},primaryButtonText:{required:!1,tsType:{name:"string"},description:"The text that's displayed in the primary button",type:{name:"string"}},secondaryButtonHref:{required:!1,tsType:{name:"string"},description:"Optionally specify an href for your Button to become an <a> element",type:{name:"string"}},secondaryButtonIcon:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void | object",signature:{arguments:[],return:{name:"union",raw:"void | object",elements:[{name:"void"},{name:"object"}]}}},description:"Optional prop to allow overriding the icon rendering. Can be a React component class",type:{name:"union",value:[{name:"func"},{name:"object"}]}},secondaryButtonKind:{required:!1,tsType:{name:"union",raw:"'secondary' | 'ghost'",elements:[{name:"literal",value:"'secondary'"},{name:"literal",value:"'ghost'"}]},description:"Establishes the kind of button displayed for the secondary button",type:{name:"enum",value:[{value:"'secondary'",computed:!1},{value:"'ghost'",computed:!1}]}},secondaryButtonText:{required:!1,tsType:{name:"string"},description:"The text that's displayed in the secondary button",type:{name:"string"}},slug:{required:!1,tsType:{name:"union",raw:"ReactNode | boolean",elements:[{name:"ReactNode"},{name:"boolean"}]},description:"**Experimental:** For all cases a `Slug` component can be provided.\nClickable tiles only accept a boolean value of true and display a hollow slug.\n@deprecated please use the `decorator` prop",type:{name:"union",value:[{name:"node"},{name:"bool"}]}},title:{required:!1,tsType:{name:"union",raw:"string | object | ReactNode",elements:[{name:"string"},{name:"object"},{name:"ReactNode"}]},description:"Title that's displayed at the top of the card",type:{name:"union",value:[{name:"string"},{name:"object"},{name:"node"}]}},children:{description:"Content that shows in the body of the card",type:{name:"node"},required:!1}},composes:["PropsWithChildren"]};const Ee="#root{inline-size:100%}.card-story .cds--aspect-ratio{display:flex;align-items:center;justify-content:center;background:var(--cds-layer-accent-01, #e0e0e0)}.c4p--card__media-left .c4p--card__media{inline-size:100%;max-inline-size:300px}",ae=()=>n.createElement(fe,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/components/card/expressive-card/usage/",blocks:[{story:m},{story:h},{story:d},{story:g},{story:b},{story:S},{story:p},{story:u},{story:y},{story:f},{title:"With AI Label",description:"An AI Label is intended for any scenario where something is being generated by AI to reinforce AI transparency, accountability, and explainability at the UI level.",source:{language:"html",code:`
      <ExpressiveCard
  label="Label"
  primaryButtonText="Primary"
  decorator={<AILabel><AILabelContent>{renderedContent}</AILabelContent></AILabel>}
  title="Title">
  <p>
    expressive card body content block. description inviting the user to take action on the card.
  </p>
</ExpressiveCard>
          `}},{description:"Clickable tiles only accept a boolean value of true for the decorator property.",source:{language:"html",code:`
      <ExpressiveCard
  label="Label"
  primaryButtonText="Primary"
  onClick={() => {}}
  onKeyDown={() => {}}
  decorator={true}
  title="Title">
  <p>
    expressive card body content block. description inviting the user to take action on the card.
  </p>
</ExpressiveCard>
          `}}]});ae.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const ie=o=>{switch(o){case 1:return n.createElement(ge,{className:"decorator-container",size:"xs"},n.createElement(ye,null,n.createElement("div",null,n.createElement("p",{className:"secondary"},"AI Explained"),n.createElement("h1",null,"84%"),n.createElement("p",{className:"secondary bold"},"Confidence score"),n.createElement("p",{className:"secondary"},"This is not really Lorem Ipsum but the spell checker did not like the previous text with it's non-words which is why this unwieldy sentence, should one choose to call it that, here."),n.createElement("hr",null),n.createElement("p",{className:"secondary"},"Model type"),n.createElement("p",{className:"bold"},"Foundation model"))));case 2:return n.createElement(de,null,n.createElement(pe,{label:"Additional information"},n.createElement(Ce,null)),n.createElement(ue,null,n.createElement("p",null,"Custom content here")));default:return}},dn={title:"IBM Products/Components/Cards/ExpressiveCard",component:c,tags:["autodocs"],parameters:{styles:Ee,docs:{page:ae}},argTypes:{columnSizeSm:{control:{type:"select"},options:[4,8,12,16]},columnSizeMd:{control:{type:"select"},options:[4,8,12,16]},columnSizeLg:{control:{type:"select"},options:[4,8,12,16]},mediaRatio:{control:{type:"select"},options:["16x9","9x16","2x1","1x2","4x3","3x4","1x1"]},slug:{control:{type:"select",labels:{0:"No AI slug",1:"with AI Slug"},default:0},options:[!1,!0]},decorator:{control:{type:"select",labels:{0:"No AI label",1:"with AI label",2:"With non AI Label component",3:"with hollow AI label (boolean)"},default:0},options:[0,1,2,3]}},decorators:[o=>{const t=ne();return n.createElement("div",{className:`${t}--grid card-story`},o())}]},r={label:"Label",title:"Title",columnSizeSm:4,columnSizeMd:8,columnSizeLg:4,children:n.createElement("p",null,"expressive card body content block. description inviting the user to take action on the card."),primaryButtonText:"Read more"},a=o=>{const{children:t,columnSizeSm:l,columnSizeMd:v,columnSizeLg:C,decorator:i,...s}=o;return n.createElement(oe,null,n.createElement(re,{sm:l,md:v,lg:C},n.createElement(c,{...s,decorator:i&&(i===3||ie(i))},t)))},Te=o=>{const{children:t,columnSizeSm:l,columnSizeMd:v,columnSizeLg:C,mediaRatio:i="1x1",decorator:s,...x}=o;return n.createElement(oe,null,n.createElement(re,{sm:l,md:v,lg:C},n.createElement(c,{media:n.createElement(te,{ratio:i},i),decorator:s&&(s===3||ie(s)),...x},t)))},m=a.bind({});m.args={...r,mediaRatio:null};const d=a.bind({});d.args={...r,title:"",mediaRatio:null};const p=a.bind({});p.args={...r,caption:"Description or long caption",label:"",mediaRatio:null};const u=Te.bind({});u.args={...r};const g=a.bind({});g.args={...r,actionIcons:[{id:"1",icon:o=>n.createElement(xe,{size:24,...o}),href:"#",iconDescription:"Next"}],primaryButtonText:"",mediaRatio:null};const y=a.bind({});y.args={...r,pictogram:o=>n.createElement(me,{size:32,...o}),mediaRatio:null};const f=a.bind({});f.args={...r,secondaryButtonText:"Remove",secondaryButtonKind:"ghost",mediaRatio:null};const h=a.bind({});h.args={...r,onClick:E("on click"),onKeyDown:E("on keydown"),primaryButtonText:"",mediaRatio:null};const b=a.bind({});b.args={...r,primaryButtonHref:"#",secondaryButtonHref:"#",secondaryButtonText:"Remove",secondaryButtonKind:"ghost"};const S=a.bind({});S.args={...r,primaryButtonIcon:o=>n.createElement(ze,{size:16,...o})};var T,w,k;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`opts => {
  const {
    children,
    columnSizeSm,
    columnSizeMd,
    columnSizeLg,
    decorator,
    ...args
  } = opts;
  return <Grid>
      <Column sm={columnSizeSm} md={columnSizeMd} lg={columnSizeLg}>
        <ExpressiveCard {...args} decorator={decorator && (decorator === 3 || sampleDecorator(decorator))}>
          {children}
        </ExpressiveCard>
      </Column>
    </Grid>;
}`,...(k=(w=m.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var B,I,L;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`opts => {
  const {
    children,
    columnSizeSm,
    columnSizeMd,
    columnSizeLg,
    decorator,
    ...args
  } = opts;
  return <Grid>
      <Column sm={columnSizeSm} md={columnSizeMd} lg={columnSizeLg}>
        <ExpressiveCard {...args} decorator={decorator && (decorator === 3 || sampleDecorator(decorator))}>
          {children}
        </ExpressiveCard>
      </Column>
    </Grid>;
}`,...(L=(I=d.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var q,A,R;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`opts => {
  const {
    children,
    columnSizeSm,
    columnSizeMd,
    columnSizeLg,
    decorator,
    ...args
  } = opts;
  return <Grid>
      <Column sm={columnSizeSm} md={columnSizeMd} lg={columnSizeLg}>
        <ExpressiveCard {...args} decorator={decorator && (decorator === 3 || sampleDecorator(decorator))}>
          {children}
        </ExpressiveCard>
      </Column>
    </Grid>;
}`,...(R=(A=p.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var j,N,M;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`opts => {
  const {
    children,
    columnSizeSm,
    columnSizeMd,
    columnSizeLg,
    mediaRatio = '1x1',
    decorator,
    ...args
  } = opts;
  return <Grid>
      <Column sm={columnSizeSm} md={columnSizeMd} lg={columnSizeLg}>
        <ExpressiveCard media={<AspectRatio ratio={mediaRatio}>{mediaRatio}</AspectRatio>} decorator={decorator && (decorator === 3 || sampleDecorator(decorator))} {...args}>
          {children}
        </ExpressiveCard>
      </Column>
    </Grid>;
}`,...(M=(N=u.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var D,O,G;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`opts => {
  const {
    children,
    columnSizeSm,
    columnSizeMd,
    columnSizeLg,
    decorator,
    ...args
  } = opts;
  return <Grid>
      <Column sm={columnSizeSm} md={columnSizeMd} lg={columnSizeLg}>
        <ExpressiveCard {...args} decorator={decorator && (decorator === 3 || sampleDecorator(decorator))}>
          {children}
        </ExpressiveCard>
      </Column>
    </Grid>;
}`,...(G=(O=g.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var P,W,_;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`opts => {
  const {
    children,
    columnSizeSm,
    columnSizeMd,
    columnSizeLg,
    decorator,
    ...args
  } = opts;
  return <Grid>
      <Column sm={columnSizeSm} md={columnSizeMd} lg={columnSizeLg}>
        <ExpressiveCard {...args} decorator={decorator && (decorator === 3 || sampleDecorator(decorator))}>
          {children}
        </ExpressiveCard>
      </Column>
    </Grid>;
}`,...(_=(W=y.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var K,H,F;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`opts => {
  const {
    children,
    columnSizeSm,
    columnSizeMd,
    columnSizeLg,
    decorator,
    ...args
  } = opts;
  return <Grid>
      <Column sm={columnSizeSm} md={columnSizeMd} lg={columnSizeLg}>
        <ExpressiveCard {...args} decorator={decorator && (decorator === 3 || sampleDecorator(decorator))}>
          {children}
        </ExpressiveCard>
      </Column>
    </Grid>;
}`,...(F=(H=f.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};var $,U,J;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`opts => {
  const {
    children,
    columnSizeSm,
    columnSizeMd,
    columnSizeLg,
    decorator,
    ...args
  } = opts;
  return <Grid>
      <Column sm={columnSizeSm} md={columnSizeMd} lg={columnSizeLg}>
        <ExpressiveCard {...args} decorator={decorator && (decorator === 3 || sampleDecorator(decorator))}>
          {children}
        </ExpressiveCard>
      </Column>
    </Grid>;
}`,...(J=(U=h.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};var Q,V,X;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`opts => {
  const {
    children,
    columnSizeSm,
    columnSizeMd,
    columnSizeLg,
    decorator,
    ...args
  } = opts;
  return <Grid>
      <Column sm={columnSizeSm} md={columnSizeMd} lg={columnSizeLg}>
        <ExpressiveCard {...args} decorator={decorator && (decorator === 3 || sampleDecorator(decorator))}>
          {children}
        </ExpressiveCard>
      </Column>
    </Grid>;
}`,...(X=(V=b.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var Y,Z,ee;S.parameters={...S.parameters,docs:{...(Y=S.parameters)==null?void 0:Y.docs,source:{originalSource:`opts => {
  const {
    children,
    columnSizeSm,
    columnSizeMd,
    columnSizeLg,
    decorator,
    ...args
  } = opts;
  return <Grid>
      <Column sm={columnSizeSm} md={columnSizeMd} lg={columnSizeLg}>
        <ExpressiveCard {...args} decorator={decorator && (decorator === 3 || sampleDecorator(decorator))}>
          {children}
        </ExpressiveCard>
      </Column>
    </Grid>;
}`,...(ee=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const pn=["Default","LabelOnly","WithCaption","WithMedia","WithActionIconHref","WithPictogram","WithSecondaryAction","Clickable","WithButtonHref","WithButtonIcon"];export{h as Clickable,m as Default,d as LabelOnly,g as WithActionIconHref,b as WithButtonHref,S as WithButtonIcon,p as WithCaption,u as WithMedia,y as WithPictogram,f as WithSecondaryAction,pn as __namedExportsOrder,dn as default};
