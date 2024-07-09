import{p as h,j as e,I as K,B as _}from"./settings-BiUEFdm2.js";import{a as T}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{c as k,C as Q,e as Z}from"./deprecate-D9ms-jbM.js";import{S as ee}from"./StoryDocsPage-BuwgUq5r.js";import{R as w,r as b}from"./index-BwDkhjyp.js";import{P as n}from"./index-Dk74W0Oi.js";import{g as v}from"./devtools-BPcQvzXy.js";import{u as ne}from"./uuidv4-BQrI85uz.js";import{S as te}from"./SteppedAnimatedMedia-D5S8_Guu.js";import{c as ie}from"./bucket-8-61DsWji_.js";import{L as oe}from"./Link-CxgVlihf.js";import{c as se}from"./bucket-9-ClmGjNZq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./events-Bq7WR1mU.js";import"./index-BONylQH5.js";import"./v4-CQkTLCs1.js";import"./index-CDYzkStP.js";import"./iframe-j3s5A4v9.js";import"../sb-preview/runtime.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-BjQFKvNH.js";import"./isSymbol-BZYRlrjc.js";import"./index-DrFu-skq.js";import"./story-helper-YTYnELA9.js";import"./tslib.es6-B4_xh3D5.js";import"./lottie-D0UQuq7-.js";import"./clamp-DxEmERK6.js";import"./toNumber-DNhxxDfe.js";const C=i=>{var r;const s=((r=i==null?void 0:i.props)==null?void 0:r.children)||void 0;if(Array.isArray(i)){let a=[];return i.forEach(o=>{typeof o=="object"?a.push(C(o)):typeof o=="string"&&a.push(o)}),a.join(" ")}if(s===void 0)return typeof i=="string"?i:" ";if(typeof s=="object")return C(i.props.children);if(typeof s=="string")return i.props.children},t=`${h.prefix}--inline-tip`,j="InlineTip",c={closeIconDescription:"Close",collapsible:!1,collapseButtonLabel:"Read less",expandButtonLabel:"Read more",narrow:!1,withLeftGutter:!1,onClick:()=>{},onClose:()=>{},title:"Use case-specific heading"};let p=w.forwardRef(({action:i,children:s,className:r,closeIconDescription:a=c.closeIconDescription,collapsible:o=c.collapsible,collapseButtonLabel:I=c.collapseButtonLabel,expandButtonLabel:V=c.expandButtonLabel,media:l,narrow:g=c.narrow,onClick:G,onClose:O,tertiaryButtonLabel:x,title:F=c.title,withLeftGutter:X=c.withLeftGutter,...W},Y)=>{const[y,R]=b.useState(o),q=b.useRef(ne()).current,H=b.useMemo(()=>C(w.Children.toArray(s)),[s]);let B=s;return!l&&o&&y&&(B=e.jsx("p",{className:`${t}__preview-text`,children:H})),b.useEffect(()=>{R(o)},[o]),e.jsxs("div",{...W,"aria-labelledby":q,className:k(t,r,o&&`${t}__collapsible`,y&&`${t}__collapsible-collapsed`,l&&`${t}__has-media`,[g?`${t}__narrow`:`${t}__wide`],X&&!g&&`${t}__with-left-gutter`),ref:Y,role:"complementary",...v(j),children:[e.jsx("div",{className:`${t}__close-icon-wrapper`,children:e.jsx(K,{className:`${t}__close-icon`,kind:"ghost",label:a,onClick:O,size:"lg",children:e.jsx(Q,{size:16})})}),(!l&&g||!g)&&e.jsx("div",{className:`${t}__icon-idea`,tabIndex:-1,children:e.jsx(ie,{size:16})}),e.jsxs("div",{className:`${t}__content`,children:[e.jsx("h6",{id:q,className:`${t}__title`,children:F}),e.jsxs("section",{className:`${t}__body`,children:[B,i&&(!o||o&&!y)&&e.jsx("div",{className:`${t}__secondary-btn`,children:i})]}),(o||x)&&e.jsxs("footer",{className:`${t}__footer`,children:[o&&!l&&e.jsx(_,{className:`${t}__toggle-btn`,kind:"ghost",size:"md",onClick:()=>{R(J=>!J)},children:y?V:I}),x&&e.jsx(_,{className:`${t}__close-btn`,size:"md",onClick:G,kind:"tertiary",renderIcon:()=>e.jsx(Z,{size:16}),children:x})]})]}),l&&(l.render?e.jsx("div",{className:`${t}__media`,children:l.render()}):e.jsx(te,{className:`${t}__media`,filePaths:l.filePaths}))]})});p=h.checkComponentEnabled(p,j);p.displayName=j;p.propTypes={action:n.node,children:n.node.isRequired,className:n.string,closeIconDescription:n.string,collapseButtonLabel:n.string,collapsible:n.bool,expandButtonLabel:n.string,media:n.oneOfType([n.shape({render:n.func}),n.shape({filePaths:n.string})]),narrow:n.bool,onClick:n.func,onClose:n.func,tertiaryButtonLabel:n.string,title:n.string.isRequired,withLeftGutter:n.bool};p.__docgenInfo={description:`Inline tips are messages embedded within other components that
provide an ambient way to deliver learning content without
distracting the user from their flow.`,methods:[],displayName:"InlineTip",props:{action:{required:!1,tsType:{name:"ReactNode"},description:'Optional "call to action" ghost button or link that can appear\ndirectly below the content. This component comes with pre-styled\nelements available to use: `InlineTipLink` and `InlineTipButton`.',type:{name:"node"}},children:{required:!0,tsType:{name:"ReactNode"},description:"Provide the contents of the InlineTip.",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}},closeIconDescription:{required:!1,tsType:{name:"string"},description:"Tooltip text and aria label for the Close button icon.",defaultValue:{value:"'Close'",computed:!1},type:{name:"string"}},collapseButtonLabel:{required:!1,tsType:{name:"string"},description:"The label for the collapse button.\nThis button is not visible if `media` is specified.",defaultValue:{value:"'Read less'",computed:!1},type:{name:"string"}},collapsible:{required:!1,tsType:{name:"boolean"},description:"If set to `true`, it will truncate the body text to\none line and expose an expand/collapse button toggle.\n\nThis feature is disabled if `media` is specified.",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},expandButtonLabel:{required:!1,tsType:{name:"string"},description:"The label for the expand button.\nThis button is not visible if `media` is specified.",defaultValue:{value:"'Read more'",computed:!1},type:{name:"string"}},media:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  render?: () => ReactNode;
  filePaths?: string[];
}`,signature:{properties:[{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!1}},{key:"filePaths",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]}},description:"The object describing an image in one of two shapes.\n- If a single media element is required, use `{render}`.\n- If a stepped animation is required, use `{filePaths}`.\n\nEnabling `media` disables the `collapsible` feature.",type:{name:"union",value:[{name:"shape",value:{render:{name:"func",required:!1}}},{name:"shape",value:{filePaths:{name:"string",required:!1}}}]}},narrow:{required:!1,tsType:{name:"boolean"},description:"Set to `true` to arrange the information in a format\nthat is easier to read in a limited space.",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function to call when the tertiary button is clicked.",type:{name:"func"}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:'Function to call when the InlineTip is closed via the "X" button.',type:{name:"func"}},tertiaryButtonLabel:{required:!1,tsType:{name:"string"},description:"Defining the label will show a the tertiary button with the crossroads icon.\nYou will still need to define the `onClose` method to trigger a callback.",type:{name:"string"}},title:{required:!1,tsType:{name:"string"},description:"The title of the InlineTip.",defaultValue:{value:"'Use case-specific heading'",computed:!1},type:{name:"string"}},withLeftGutter:{required:!1,tsType:{name:"boolean"},description:`If true, insert 1 rem of "space" on the left of the component.
This will allow the component's content to line up with other
content on the page under special circumstances.

This will only be applied when \`narrow\` is false.`,defaultValue:{value:"false",computed:!1},type:{name:"bool"}}}};const ae=`${h.prefix}--inline-tip__button`,N="InlineTipButton";let u=w.forwardRef(({children:i,className:s,...r},a)=>e.jsx(_,{...r,className:k(ae,s),ref:a,...v(N),size:"md",kind:"ghost",children:i}));u=h.checkComponentEnabled(u,N);u.displayName=N;u.propTypes={children:n.node.isRequired,className:n.string};u.__docgenInfo={description:"This is a standard Carbon button, styled specifically for use inside InlineTip.",methods:[],displayName:"InlineTipButton",props:{className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}},children:{required:!0,tsType:{name:"ReactNode"},description:"Provide the contents of the InlineTip.",type:{name:"node"}}}};const re=`${h.prefix}--inline-tip__link`,L="InlineTipLink";let f=w.forwardRef(({children:i,className:s,...r},a)=>e.jsx(oe,{...r,className:k(re,s),ref:a,...v(L),renderIcon:()=>e.jsx(se,{size:16}),children:i}));f=h.checkComponentEnabled(f,L);f.displayName=L;f.propTypes={children:n.node.isRequired,className:n.string};f.__docgenInfo={description:"This is a standard Carbon link, styled specifically for use inside InlineTip.",methods:[],displayName:"InlineTipLink",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Provide the contents of the InlineTipLink.",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}}},composes:["PropsWithChildren"]};const le=".storybook--inline-tip-wide{max-width:784px;margin-top:2rem}.storybook--inline-tip-narrow{max-width:348px;margin-top:2rem}",ce=""+new URL("inline-tip-image-Xi2Ah9yk.png",import.meta.url).href,z=()=>e.jsx(ee,{blocks:[{story:d},{story:m}]});z.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const pe=new URL(""+new URL("inline-tip-animation-Cxf3-59n.json",import.meta.url).href,import.meta.url).pathname,Se={title:"IBM Products/Onboarding/Inline tip/InlineTip",component:p,tags:["autodocs"],parameters:{styles:le,layout:"padded",docs:{page:z}},argTypes:{action:{options:["None","<InlineTipButton>","<InlineTipLink>"],control:{type:"radio"}},media:{options:["None","Render a static image","Render an animation"],control:{type:"radio"}},narrow:{control:{type:null}}}},M={children:e.jsxs("ul",{children:[e.jsxs("li",{children:["Use ",e.jsx("b",{children:"case-specific"})," content that explains the concept or adds context."]}),e.jsxs("li",{children:["Use case-specific ",e.jsx("i",{children:"content that"})," explains the concept or adds context."]}),e.jsx("li",{children:"Use case-specific content that explains the concept or adds context."})]}),closeIconDescription:"Close",collapseButtonLabel:"Read less",collapsible:!1,action:"None",expandButtonLabel:"Read more",media:"None",onClick:()=>{T("Clicked the tertiary button")()},onClose:()=>{T("Clicked the close button")()},title:"Use case-specific heading",withLeftGutter:!1},S=i=>{const{media:s,narrow:r,action:a}=i,o=function(){switch(s){case"Render a static image":return{render:()=>e.jsx("img",{alt:"",src:ce})};case"Render an animation":return{filePaths:[pe]};default:return null}}(),I=function(){switch(a){case"<InlineTipButton>":return e.jsx(u,{onClick:()=>{T("Clicked the action button")()},children:"Click me"});case"<InlineTipLink>":return e.jsx(f,{href:"https://www.ibm.com",onClick:()=>{T("Clicked the link")()},target:"_blank",children:"Learn more"});default:return null}}();return e.jsx("div",{className:k([r?"storybook--inline-tip-narrow":"storybook--inline-tip-wide"]),children:e.jsx(p,{...i,media:o,action:I})})},d=S.bind({});d.args={narrow:!1,...M};const m=S.bind({});m.args={narrow:!0,...M};var $,P,A;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
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
}`,...(A=(P=d.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var D,E,U;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
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
}`,...(U=(E=m.parameters)==null?void 0:E.docs)==null?void 0:U.source}}};const Ve=["inlineTip","inlineTipNarrow"];export{Ve as __namedExportsOrder,Se as default,d as inlineTip,m as inlineTipNarrow};
