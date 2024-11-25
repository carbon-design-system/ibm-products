import{R as e,r as b}from"./index-BwDkhjyp.js";import{a as T}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{c as w,C as J}from"./index-CQ0F2wkl.js";import{S as K}from"./StoryDocsPage-CQs0QWcW.js";import{p as h,I as Q,B as _,C as Z}from"./settings-xiNX1vM3.js";import{P as n}from"./index-Dk74W0Oi.js";import{g as v}from"./devtools-Bz70ioU6.js";import{u as ee}from"./uuidv4-BQrI85uz.js";import{S as ne}from"./SteppedAnimatedMedia-BzeU5RwP.js";import{I as te,f as ie}from"./bucket-9-BGCJpvdq.js";import{L as ae}from"./Link-5iVXV3Eb.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./index-BONylQH5.js";import"./index-DXUYcqZv.js";import"./iframe-DanyPKBP.js";import"../sb-preview/runtime.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./story-helper-6_fmjwZ-.js";import"./tslib.es6-B4_xh3D5.js";import"./index-CJvxHwuA.js";import"./events-OVwOsPzJ.js";import"./index-ABeo-Xma.js";import"./lottie-D0UQuq7-.js";import"./clamp-Bg2yowlN.js";import"./toNumber-DVQITUtX.js";const C=i=>{var s;const o=((s=i==null?void 0:i.props)==null?void 0:s.children)||void 0;if(Array.isArray(i)){let r=[];return i.forEach(a=>{typeof a=="object"?r.push(C(a)):typeof a=="string"&&r.push(a)}),r.join(" ")}if(o===void 0)return typeof i=="string"?i:" ";if(typeof o=="object")return C(i.props.children);if(typeof o=="string")return i.props.children},t=`${h.prefix}--inline-tip`,E="InlineTip",c={closeIconDescription:"Close",collapsible:!1,collapseButtonLabel:"Read less",expandButtonLabel:"Read more",narrow:!1,withLeftGutter:!1,onClick:()=>{},onClose:()=>{},title:"Use case-specific heading"};let p=e.forwardRef(({action:i,children:o,className:s,closeIconDescription:r=c.closeIconDescription,collapsible:a=c.collapsible,collapseButtonLabel:k=c.collapseButtonLabel,expandButtonLabel:M=c.expandButtonLabel,media:l,narrow:g=c.narrow,onClick:V,onClose:G,tertiaryButtonLabel:I,title:O=c.title,withLeftGutter:F=c.withLeftGutter,...X},W)=>{const[y,x]=b.useState(a),R=b.useRef(ee()).current,Y=b.useMemo(()=>C(e.Children.toArray(o)),[o]);let q=o;return!l&&a&&y&&(q=e.createElement("p",{className:`${t}__preview-text`},Y)),b.useEffect(()=>{x(a)},[a]),e.createElement("div",{...X,"aria-labelledby":R,className:w(t,s,a&&`${t}__collapsible`,y&&`${t}__collapsible-collapsed`,l&&`${t}__has-media`,[g?`${t}__narrow`:`${t}__wide`],F&&!g&&`${t}__with-left-gutter`),ref:W,role:"complementary",...v(E)},e.createElement("div",{className:`${t}__close-icon-wrapper`},e.createElement(Q,{className:`${t}__close-icon`,kind:"ghost",label:r,onClick:G,size:"lg"},e.createElement(J,{size:16}))),(!l&&g||!g)&&e.createElement("div",{className:`${t}__icon-idea`,tabIndex:-1},e.createElement(te,{size:16})),e.createElement("div",{className:`${t}__content`},e.createElement("h6",{id:R,className:`${t}__title`},O),e.createElement("section",{className:`${t}__body`},q,i&&(!a||a&&!y)&&e.createElement("div",{className:`${t}__secondary-btn`},i)),(a||I)&&e.createElement("footer",{className:`${t}__footer`},a&&!l&&e.createElement(_,{className:`${t}__toggle-btn`,kind:"ghost",size:"md",onClick:()=>{x(H=>!H)}},y?M:k),I&&e.createElement(_,{className:`${t}__close-btn`,size:"md",onClick:V,kind:"tertiary",renderIcon:()=>e.createElement(Z,{size:16})},I))),l&&(l.render?e.createElement("div",{className:`${t}__media`},l.render()):e.createElement(ne,{className:`${t}__media`,filePaths:l.filePaths})))});p=h.checkComponentEnabled(p,E);p.displayName=E;p.propTypes={action:n.node,children:n.node.isRequired,className:n.string,closeIconDescription:n.string,collapseButtonLabel:n.string,collapsible:n.bool,expandButtonLabel:n.string,media:n.oneOfType([n.shape({render:n.func}),n.shape({filePaths:n.string})]),narrow:n.bool,onClick:n.func,onClose:n.func,tertiaryButtonLabel:n.string,title:n.string.isRequired,withLeftGutter:n.bool};p.__docgenInfo={description:`Inline tips are messages embedded within other components that
provide an ambient way to deliver learning content without
distracting the user from their flow.`,methods:[],displayName:"InlineTip",props:{action:{required:!1,tsType:{name:"ReactNode"},description:'Optional "call to action" ghost button or link that can appear\ndirectly below the content. This component comes with pre-styled\nelements available to use: `InlineTipLink` and `InlineTipButton`.',type:{name:"node"}},children:{required:!0,tsType:{name:"ReactNode"},description:"Provide the contents of the InlineTip.",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}},closeIconDescription:{required:!1,tsType:{name:"string"},description:"Tooltip text and aria label for the Close button icon.",defaultValue:{value:"'Close'",computed:!1},type:{name:"string"}},collapseButtonLabel:{required:!1,tsType:{name:"string"},description:"The label for the collapse button.\nThis button is not visible if `media` is specified.",defaultValue:{value:"'Read less'",computed:!1},type:{name:"string"}},collapsible:{required:!1,tsType:{name:"boolean"},description:"If set to `true`, it will truncate the body text to\none line and expose an expand/collapse button toggle.\n\nThis feature is disabled if `media` is specified.",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},expandButtonLabel:{required:!1,tsType:{name:"string"},description:"The label for the expand button.\nThis button is not visible if `media` is specified.",defaultValue:{value:"'Read more'",computed:!1},type:{name:"string"}},media:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  render?: () => ReactNode;
  filePaths?: string[];
}`,signature:{properties:[{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!1}},{key:"filePaths",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]}},description:"The object describing an image in one of two shapes.\n- If a single media element is required, use `{render}`.\n- If a stepped animation is required, use `{filePaths}`.\n\nEnabling `media` disables the `collapsible` feature.",type:{name:"union",value:[{name:"shape",value:{render:{name:"func",required:!1}}},{name:"shape",value:{filePaths:{name:"string",required:!1}}}]}},narrow:{required:!1,tsType:{name:"boolean"},description:"Set to `true` to arrange the information in a format\nthat is easier to read in a limited space.",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function to call when the tertiary button is clicked.",type:{name:"func"}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:'Function to call when the InlineTip is closed via the "X" button.',type:{name:"func"}},tertiaryButtonLabel:{required:!1,tsType:{name:"string"},description:"Defining the label will show a the tertiary button with the crossroads icon.\nYou will still need to define the `onClose` method to trigger a callback.",type:{name:"string"}},title:{required:!1,tsType:{name:"string"},description:"The title of the InlineTip.",defaultValue:{value:"'Use case-specific heading'",computed:!1},type:{name:"string"}},withLeftGutter:{required:!1,tsType:{name:"boolean"},description:`If true, insert 1 rem of "space" on the left of the component.
This will allow the component's content to line up with other
content on the page under special circumstances.

This will only be applied when \`narrow\` is false.`,defaultValue:{value:"false",computed:!1},type:{name:"bool"}}}};const oe=`${h.prefix}--inline-tip__button`,N="InlineTipButton";let u=e.forwardRef(({children:i,className:o,...s},r)=>e.createElement(_,{...s,className:w(oe,o),ref:r,...v(N),size:"md",kind:"ghost"},i));u=h.checkComponentEnabled(u,N);u.displayName=N;u.propTypes={children:n.node.isRequired,className:n.string};u.__docgenInfo={description:"This is a standard Carbon button, styled specifically for use inside InlineTip.",methods:[],displayName:"InlineTipButton",props:{className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}},children:{required:!0,tsType:{name:"ReactNode"},description:"Provide the contents of the InlineTip.",type:{name:"node"}}}};const re=`${h.prefix}--inline-tip__link`,L="InlineTipLink";let f=e.forwardRef(({children:i,className:o,...s},r)=>e.createElement(ae,{...s,className:w(re,o),ref:r,...v(L),renderIcon:()=>e.createElement(ie,{size:16})},i));f=h.checkComponentEnabled(f,L);f.displayName=L;f.propTypes={children:n.node.isRequired,className:n.string};f.__docgenInfo={description:"This is a standard Carbon link, styled specifically for use inside InlineTip.",methods:[],displayName:"InlineTipLink",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Provide the contents of the InlineTipLink.",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}}},composes:["PropsWithChildren"]};const se=".storybook--inline-tip-wide{max-width:784px;margin-top:2rem}.storybook--inline-tip-narrow{max-width:348px;margin-top:2rem}",le=""+new URL("inline-tip-image-Xi2Ah9yk.png",import.meta.url).href,z=()=>e.createElement(K,{blocks:[{story:d},{story:m}]});z.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const ce=new URL(""+new URL("inline-tip-animation-Cxf3-59n.json",import.meta.url).href,import.meta.url).pathname,Se={title:"Experimental/Onboarding/Inline tip/InlineTip",component:p,tags:["autodocs"],parameters:{styles:se,layout:"padded",docs:{page:z}},argTypes:{action:{options:["None","<InlineTipButton>","<InlineTipLink>"],control:{type:"radio"}},media:{options:["None","Render a static image","Render an animation"],control:{type:"radio"}},narrow:{control:{type:null}}}},S={children:e.createElement("ul",null,e.createElement("li",null,"Use ",e.createElement("b",null,"case-specific")," content that explains the concept or adds context."),e.createElement("li",null,"Use case-specific ",e.createElement("i",null,"content that")," explains the concept or adds context."),e.createElement("li",null,"Use case-specific content that explains the concept or adds context.")),closeIconDescription:"Close",collapseButtonLabel:"Read less",collapsible:!1,action:"None",expandButtonLabel:"Read more",media:"None",onClick:()=>{T("Clicked the tertiary button")()},onClose:()=>{T("Clicked the close button")()},title:"Use case-specific heading",withLeftGutter:!1},j=i=>{const{media:o,narrow:s,action:r}=i,a=function(){switch(o){case"Render a static image":return{render:()=>e.createElement("img",{alt:"",src:le})};case"Render an animation":return{filePaths:[ce]};default:return null}}(),k=function(){switch(r){case"<InlineTipButton>":return e.createElement(u,{onClick:()=>{T("Clicked the action button")()}},"Click me");case"<InlineTipLink>":return e.createElement(f,{href:"https://www.ibm.com",onClick:()=>{T("Clicked the link")()},target:"_blank"},"Learn more");default:return null}}();return e.createElement("div",{className:w([s?"storybook--inline-tip-narrow":"storybook--inline-tip-wide"])},e.createElement(p,{...i,media:a,action:k}))},d=j.bind({});d.args={narrow:!1,...S};const m=j.bind({});m.args={narrow:!0,...S};var $,B,P;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
  const {
    media,
    narrow,
    action: componentAction
  } = args;
  const selectedMedia = function () {
    switch (media) {
      case 'Render a static image':
        return {
          render: () => <img alt="" src={InlineTipImage} />
        };
      case 'Render an animation':
        return {
          filePaths: [InlineTipAnimation]
        };
      default:
        return null;
    }
  }();
  const selectedAction = function () {
    switch (componentAction) {
      case '<InlineTipButton>':
        return <InlineTipButton onClick={() => {
          action(\`Clicked the action button\`)();
        }}>
            Click me
          </InlineTipButton>;
      case '<InlineTipLink>':
        return <InlineTipLink href="https://www.ibm.com" onClick={() => {
          action('Clicked the link')();
        }} target="_blank">
            Learn more
          </InlineTipLink>;
      default:
        return null;
    }
  }();
  return <div className={cx([narrow ? 'storybook--inline-tip-narrow' : 'storybook--inline-tip-wide'])}>
      <InlineTip {...args} media={selectedMedia} action={selectedAction} />
    </div>;
}`,...(P=(B=d.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var A,D,U;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`args => {
  const {
    media,
    narrow,
    action: componentAction
  } = args;
  const selectedMedia = function () {
    switch (media) {
      case 'Render a static image':
        return {
          render: () => <img alt="" src={InlineTipImage} />
        };
      case 'Render an animation':
        return {
          filePaths: [InlineTipAnimation]
        };
      default:
        return null;
    }
  }();
  const selectedAction = function () {
    switch (componentAction) {
      case '<InlineTipButton>':
        return <InlineTipButton onClick={() => {
          action(\`Clicked the action button\`)();
        }}>
            Click me
          </InlineTipButton>;
      case '<InlineTipLink>':
        return <InlineTipLink href="https://www.ibm.com" onClick={() => {
          action('Clicked the link')();
        }} target="_blank">
            Learn more
          </InlineTipLink>;
      default:
        return null;
    }
  }();
  return <div className={cx([narrow ? 'storybook--inline-tip-narrow' : 'storybook--inline-tip-wide'])}>
      <InlineTip {...args} media={selectedMedia} action={selectedAction} />
    </div>;
}`,...(U=(D=m.parameters)==null?void 0:D.docs)==null?void 0:U.source}}};const je=["inlineTip","inlineTipNarrow"];export{je as __namedExportsOrder,Se as default,d as inlineTip,m as inlineTipNarrow};
