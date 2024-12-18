import{e,r as T}from"./index-DxDX2vOa.js";import{a as w}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as k,C as Z,P as n}from"./index-B_euquWE.js";import{S as ee}from"./StoryDocsPage-CSDwatIL.js";import{p as g,I as ne,B as v,C as te}from"./settings-0ThqPtR3.js";import{g as N}from"./devtools-BlxCaI1L.js";import{u as ie}from"./uuidv4-BQrI85uz.js";import{S as z}from"./SteppedAnimatedMedia-CCRxZAru.js";import{I as ae,f as oe}from"./bucket-9-Clk9T-SZ.js";import{L as re}from"./Link-Czg4mzd7.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./index-CaMJXrh2.js";import"./index-CYHZTqqy.js";import"./iframe-Cku1tuHn.js";import"../sb-preview/runtime.js";import"./index-Df9so8jS.js";import"./index-CRUq0TYl.js";import"./index-DrFu-skq.js";import"./story-helper-BvAgcfdm.js";import"./tslib.es6-B4_xh3D5.js";import"./events-OVwOsPzJ.js";import"./index-YDq2Pj7F.js";import"./lottie-D0UQuq7-.js";import"./clamp-RSd2z2nT.js";import"./toNumber-CjkmaA9J.js";const E=i=>{var s;const o=((s=i==null?void 0:i.props)==null?void 0:s.children)||void 0;if(Array.isArray(i)){let r=[];return i.forEach(a=>{typeof a=="object"?r.push(E(a)):typeof a=="string"&&r.push(a)}),r.join(" ")}if(o===void 0)return typeof i=="string"?i:" ";if(typeof o=="object")return E(i.props.children);if(typeof o=="string")return i.props.children},t=`${g.prefix}--inline-tip`,L="InlineTip",p={closeIconDescription:"Close",collapsible:!1,collapseButtonLabel:"Read less",expandButtonLabel:"Read more",narrow:!1,withLeftGutter:!1,onClick:()=>{},onClose:()=>{},title:"Use case-specific heading"};let d=e.forwardRef(({action:i,children:o,className:s,closeIconDescription:r=p.closeIconDescription,collapsible:a=p.collapsible,collapseButtonLabel:I=p.collapseButtonLabel,expandButtonLabel:O=p.expandButtonLabel,media:l,renderMedia:_,narrow:y=p.narrow,onClick:F,onClose:X,tertiaryButtonLabel:C,title:W=p.title,withLeftGutter:Y=p.withLeftGutter,...H},J)=>{const c=_||l,[b,q]=T.useState(a),$=T.useRef(ie()).current,K=T.useMemo(()=>E(e.Children.toArray(o)),[o]);let P=o;return!c&&a&&b&&(P=e.createElement("p",{className:`${t}__preview-text`},K)),T.useEffect(()=>{q(a)},[a]),e.createElement("div",{...H,"aria-labelledby":$,className:k(t,s,a&&`${t}__collapsible`,b&&`${t}__collapsible-collapsed`,c&&`${t}__has-media`,[y?`${t}__narrow`:`${t}__wide`],Y&&!y&&`${t}__with-left-gutter`),ref:J,role:"complementary",...N(L)},e.createElement("div",{className:`${t}__close-icon-wrapper`},e.createElement(ne,{className:`${t}__close-icon`,kind:"ghost",label:r,onClick:X,size:"lg"},e.createElement(Z,{size:16}))),(!c&&y||!y)&&e.createElement("div",{className:`${t}__icon-idea`,tabIndex:-1},e.createElement(ae,{size:16})),e.createElement("div",{className:`${t}__content`},e.createElement("h6",{id:$,className:`${t}__title`},W),e.createElement("section",{className:`${t}__body`},P,i&&(!a||a&&!b)&&e.createElement("div",{className:`${t}__secondary-btn`},i)),(a||C)&&e.createElement("footer",{className:`${t}__footer`},a&&!c&&e.createElement(v,{className:`${t}__toggle-btn`,kind:"ghost",size:"md",onClick:()=>{q(Q=>!Q)}},b?O:I),C&&e.createElement(v,{className:`${t}__close-btn`,size:"md",onClick:F,kind:"tertiary",renderIcon:()=>e.createElement(te,{size:16})},C))),c&&(l==null?void 0:l.render)&&e.createElement("div",{className:`${t}__media`},l.render()),c&&(l==null?void 0:l.filePaths)&&e.createElement(z,{className:`${t}__media`,filePaths:l.filePaths}),c&&_&&e.createElement("div",{className:`${t}__media`},_()))});d=g.checkComponentEnabled(d,L);d.displayName=L;d.propTypes={action:n.node,children:n.node.isRequired,className:n.string,closeIconDescription:n.string,collapseButtonLabel:n.string,collapsible:n.bool,expandButtonLabel:n.string,media:n.oneOfType([n.shape({render:n.func}),n.shape({filePaths:n.string})]),narrow:n.bool,onClick:n.func,onClose:n.func,renderMedia:n.func,tertiaryButtonLabel:n.string,title:n.string.isRequired,withLeftGutter:n.bool};d.__docgenInfo={description:`Inline tips are messages embedded within other components that
provide an ambient way to deliver learning content without
distracting the user from their flow.`,methods:[],displayName:"InlineTip",props:{action:{required:!1,tsType:{name:"ReactNode"},description:'Optional "call to action" ghost button or link that can appear\ndirectly below the content. This component comes with pre-styled\nelements available to use: `InlineTipLink` and `InlineTipButton`.',type:{name:"node"}},children:{required:!0,tsType:{name:"ReactNode"},description:"Provide the contents of the InlineTip.",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}},closeIconDescription:{required:!1,tsType:{name:"string"},description:"Tooltip text and aria label for the Close button icon.",defaultValue:{value:"'Close'",computed:!1},type:{name:"string"}},collapseButtonLabel:{required:!1,tsType:{name:"string"},description:"The label for the collapse button.\nThis button is not visible if `media` is specified.",defaultValue:{value:"'Read less'",computed:!1},type:{name:"string"}},collapsible:{required:!1,tsType:{name:"boolean"},description:"If set to `true`, it will truncate the body text to\none line and expose an expand/collapse button toggle.\n\nThis feature is disabled if `media` is specified.",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},expandButtonLabel:{required:!1,tsType:{name:"string"},description:"The label for the expand button.\nThis button is not visible if `media` is specified.",defaultValue:{value:"'Read more'",computed:!1},type:{name:"string"}},media:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  render?: () => ReactNode;
  filePaths?: string[];
}`,signature:{properties:[{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!1}},{key:"filePaths",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]}},description:"The object describing an image in one of two shapes.\n- If a single media element is required, use `{render}`.\n- If a stepped animation is required, use `{filePaths}`.\n\nEnabling `media` disables the `collapsible` feature.\n@deprecated please use the `renderMedia` prop",type:{name:"union",value:[{name:"shape",value:{render:{name:"func",required:!1}}},{name:"shape",value:{filePaths:{name:"string",required:!1}}}]}},renderMedia:{required:!1,tsType:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}}},description:"Optional prop to render any media like images or any animated media.",type:{name:"func"}},narrow:{required:!1,tsType:{name:"boolean"},description:"Set to `true` to arrange the information in a format\nthat is easier to read in a limited space.",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function to call when the tertiary button is clicked.",type:{name:"func"}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:'Function to call when the InlineTip is closed via the "X" button.',type:{name:"func"}},tertiaryButtonLabel:{required:!1,tsType:{name:"string"},description:"Defining the label will show a the tertiary button with the crossroads icon.\nYou will still need to define the `onClose` method to trigger a callback.",type:{name:"string"}},title:{required:!1,tsType:{name:"string"},description:"The title of the InlineTip.",defaultValue:{value:"'Use case-specific heading'",computed:!1},type:{name:"string"}},withLeftGutter:{required:!1,tsType:{name:"boolean"},description:`If true, insert 1 rem of "space" on the left of the component.
This will allow the component's content to line up with other
content on the page under special circumstances.

This will only be applied when \`narrow\` is false.`,defaultValue:{value:"false",computed:!1},type:{name:"bool"}}}};const se=`${g.prefix}--inline-tip__button`,x="InlineTipButton";let f=e.forwardRef(({children:i,className:o,...s},r)=>e.createElement(v,{...s,className:k(se,o),ref:r,...N(x),size:"md",kind:"ghost"},i));f=g.checkComponentEnabled(f,x);f.displayName=x;f.propTypes={children:n.node.isRequired,className:n.string};f.__docgenInfo={description:"This is a standard Carbon button, styled specifically for use inside InlineTip.",methods:[],displayName:"InlineTipButton",props:{className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}},children:{required:!0,tsType:{name:"ReactNode"},description:"Provide the contents of the InlineTip.",type:{name:"node"}}}};const le=`${g.prefix}--inline-tip__link`,R="InlineTipLink";let h=e.forwardRef(({children:i,className:o,...s},r)=>e.createElement(re,{...s,className:k(le,o),ref:r,...N(R),renderIcon:()=>e.createElement(oe,{size:16})},i));h=g.checkComponentEnabled(h,R);h.displayName=R;h.propTypes={children:n.node.isRequired,className:n.string};h.__docgenInfo={description:"This is a standard Carbon link, styled specifically for use inside InlineTip.",methods:[],displayName:"InlineTipLink",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Provide the contents of the InlineTipLink.",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}}},composes:["PropsWithChildren"]};const ce=".storybook--inline-tip-wide{max-width:784px;margin-top:2rem}.storybook--inline-tip-narrow{max-width:348px;margin-top:2rem}",pe=""+new URL("inline-tip-image-Xi2Ah9yk.png",import.meta.url).href,j=()=>e.createElement(ee,{blocks:[{story:m},{story:u}]});j.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const de=new URL(""+new URL("inline-tip-animation-Cxf3-59n.json",import.meta.url).href,import.meta.url).pathname,De={title:"Experimental/Onboarding/Inline tip/InlineTip",component:d,tags:["autodocs"],parameters:{styles:ce,layout:"padded",docs:{page:j}},argTypes:{action:{options:["None","<InlineTipButton>","<InlineTipLink>"],control:{type:"radio"}},renderMedia:{options:["None","Render a static image","Render an animation"],control:{type:"radio"}},narrow:{control:{type:null}},media:{control:{type:null},description:'Deprecated: Property replaced by "renderMedia"'}}},V={children:e.createElement("ul",null,e.createElement("li",null,"Use ",e.createElement("b",null,"case-specific")," content that explains the concept or adds context."),e.createElement("li",null,"Use case-specific ",e.createElement("i",null,"content that")," explains the concept or adds context."),e.createElement("li",null,"Use case-specific content that explains the concept or adds context.")),closeIconDescription:"Close",collapseButtonLabel:"Read less",collapsible:!1,action:"None",expandButtonLabel:"Read more",renderMedia:"None",onClick:()=>{w("Clicked the tertiary button")()},onClose:()=>{w("Clicked the close button")()},title:"Use case-specific heading",withLeftGutter:!1},G=i=>{const{renderMedia:o,narrow:s,action:r}=i,a=function(){switch(o){case"Render a static image":return()=>e.createElement("img",{alt:"",src:pe});case"Render an animation":return()=>e.createElement(z,{filePaths:[de],playStep:1});default:return null}}(),I=function(){switch(r){case"<InlineTipButton>":return e.createElement(f,{onClick:()=>{w("Clicked the action button")()}},"Click me");case"<InlineTipLink>":return e.createElement(h,{href:"https://www.ibm.com",onClick:()=>{w("Clicked the link")()},target:"_blank"},"Learn more");default:return null}}();return e.createElement("div",{className:k([s?"storybook--inline-tip-narrow":"storybook--inline-tip-wide"])},e.createElement(d,{...i,renderMedia:a,action:I}))},m=G.bind({});m.args={narrow:!1,...V};const u=G.bind({});u.args={narrow:!0,...V};var B,M,A;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  const {
    renderMedia,
    narrow,
    action: componentAction
  } = args;
  const selectedMedia = function () {
    switch (renderMedia) {
      case 'Render a static image':
        return () => <img alt="" src={InlineTipImage} />;
      case 'Render an animation':
        return () => <SteppedAnimatedMedia filePaths={[InlineTipAnimation]} playStep={1} />;
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
      <InlineTip {...args} renderMedia={selectedMedia} action={selectedAction} />
    </div>;
}`,...(A=(M=m.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var S,D,U;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  const {
    renderMedia,
    narrow,
    action: componentAction
  } = args;
  const selectedMedia = function () {
    switch (renderMedia) {
      case 'Render a static image':
        return () => <img alt="" src={InlineTipImage} />;
      case 'Render an animation':
        return () => <SteppedAnimatedMedia filePaths={[InlineTipAnimation]} playStep={1} />;
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
      <InlineTip {...args} renderMedia={selectedMedia} action={selectedAction} />
    </div>;
}`,...(U=(D=u.parameters)==null?void 0:D.docs)==null?void 0:U.source}}};const Ue=["inlineTip","inlineTipNarrow"];export{Ue as __namedExportsOrder,De as default,m as inlineTip,u as inlineTipNarrow};
