import{e,r as y}from"./index-CPiZ6Cnx.js";import{a as T}from"./index-B-lxVbXh.js";import{c as k,C as J,P as i}from"./index-BPCFiO9b.js";import{S as K}from"./StoryDocsPage-vEZJbmBv.js";import{p as h,I as Q,B as _,C as Z}from"./settings-41bnSjHp.js";import{g as v}from"./devtools-Ca6Wku6c.js";import{u as ee}from"./uuidv4-BN2rGLQG.js";import{I as te}from"./bucket-9-qDf-0NK_.js";import{L as ne}from"./Link-BmRyJrPM.js";import{c as ie}from"./bucket-10-COvSrTUI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CtRu48qb.js";import"./index-B83en7q5.js";import"./index-ZKO_qc5e.js";import"./index-DblCLej2.js";import"./iframe-DG_HeTRT.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";import"./story-helper-C7pmvIin.js";import"./events-OVwOsPzJ.js";import"./index-H2wBg9na.js";const C=t=>{var r;const a=((r=t==null?void 0:t.props)==null?void 0:r.children)||void 0;if(Array.isArray(t)){let s=[];return t.forEach(o=>{typeof o=="object"?s.push(C(o)):typeof o=="string"&&s.push(o)}),s.join(" ")}if(a===void 0)return typeof t=="string"?t:" ";if(typeof a=="object")return C(t.props.children);if(typeof a=="string")return t.props.children},n=`${h.prefix}--inline-tip`,E="InlineTip",l={closeIconDescription:"Close",collapsible:!1,collapseButtonLabel:"Read less",expandButtonLabel:"Read more",narrow:!1,withLeftGutter:!1,title:"Use case-specific heading"};let c=e.forwardRef(({action:t,children:a,className:r,closeIconDescription:s=l.closeIconDescription,collapsible:o=l.collapsible,collapseButtonLabel:w=l.collapseButtonLabel,expandButtonLabel:V=l.expandButtonLabel,renderMedia:p,narrow:g=l.narrow,onClick:G,onClose:j,tertiaryButtonLabel:I,title:O=l.title,withLeftGutter:F=l.withLeftGutter,...W},X)=>{const[b,L]=y.useState(o),R=y.useRef(ee()).current,H=y.useMemo(()=>C(e.Children.toArray(a)),[a]);let B=a;return!p&&o&&b&&(B=e.createElement("p",{className:`${n}__preview-text`},H)),y.useEffect(()=>{L(o)},[o]),e.createElement("div",{...W,"aria-labelledby":R,className:k(n,r,o&&`${n}__collapsible`,b&&`${n}__collapsible-collapsed`,p&&`${n}__has-media`,[g?`${n}__narrow`:`${n}__wide`],F&&!g&&`${n}__with-left-gutter`),ref:X,role:"complementary",...v(E)},e.createElement("div",{className:`${n}__close-icon-wrapper`},e.createElement(Q,{className:`${n}__close-icon`,kind:"ghost",label:s,onClick:j,size:"lg"},e.createElement(J,{size:16}))),(!p&&g||!g)&&e.createElement("div",{className:`${n}__icon-idea`,tabIndex:-1},e.createElement(te,{size:16})),e.createElement("div",{className:`${n}__content`},e.createElement("h6",{id:R,className:`${n}__title`},O),e.createElement("section",{className:`${n}__body`},B,t&&(!o||o&&!b)&&e.createElement("div",{className:`${n}__secondary-btn`},t)),(o||I)&&e.createElement("footer",{className:`${n}__footer`},o&&!p&&e.createElement(_,{className:`${n}__toggle-btn`,kind:"ghost",size:"md",onClick:()=>{L(Y=>!Y)}},b?V:w),I&&e.createElement(_,{className:`${n}__close-btn`,size:"md",onClick:G,kind:"tertiary",renderIcon:()=>e.createElement(Z,{size:16})},I))),p&&e.createElement("div",{className:`${n}__media`},p()))});c=h.checkComponentEnabled(c,E);c.displayName=E;c.propTypes={action:i.node,children:i.node.isRequired,className:i.string,closeIconDescription:i.string,collapseButtonLabel:i.string,collapsible:i.bool,expandButtonLabel:i.string,narrow:i.bool,onClick:i.func,onClose:i.func,renderMedia:i.func,tertiaryButtonLabel:i.string,title:i.string.isRequired,withLeftGutter:i.bool};c.__docgenInfo={description:`Inline tips are messages embedded within other components that
provide an ambient way to deliver learning content without
distracting the user from their flow.`,methods:[],displayName:"InlineTip",props:{action:{required:!1,tsType:{name:"ReactNode"},description:'Optional "call to action" ghost button or link that can appear\ndirectly below the content. This component comes with pre-styled\nelements available to use: `InlineTipLink` and `InlineTipButton`.',type:{name:"node"}},children:{required:!0,tsType:{name:"ReactNode"},description:"Provide the contents of the InlineTip.",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}},closeIconDescription:{required:!1,tsType:{name:"string"},description:"Tooltip text and aria label for the Close button icon.",defaultValue:{value:"'Close'",computed:!1},type:{name:"string"}},collapseButtonLabel:{required:!1,tsType:{name:"string"},description:"The label for the collapse button.\nThis button is not visible if `media` is specified.",defaultValue:{value:"'Read less'",computed:!1},type:{name:"string"}},collapsible:{required:!1,tsType:{name:"boolean"},description:"If set to `true`, it will truncate the body text to\none line and expose an expand/collapse button toggle.\n\nThis feature is disabled if `media` is specified.",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},expandButtonLabel:{required:!1,tsType:{name:"string"},description:"The label for the expand button.\nThis button is not visible if `media` is specified.",defaultValue:{value:"'Read more'",computed:!1},type:{name:"string"}},renderMedia:{required:!1,tsType:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}}},description:"Optional prop to render any media like images or any animated media.",type:{name:"func"}},narrow:{required:!1,tsType:{name:"boolean"},description:"Set to `true` to arrange the information in a format\nthat is easier to read in a limited space.",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function to call when the tertiary button is clicked.",type:{name:"func"}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:'Function to call when the InlineTip is closed via the "X" button.',type:{name:"func"}},tertiaryButtonLabel:{required:!1,tsType:{name:"string"},description:"Defining the label will show a the tertiary button with the crossroads icon.\nYou will still need to define the `onClose` method to trigger a callback.",type:{name:"string"}},title:{required:!1,tsType:{name:"string"},description:"The title of the InlineTip.",defaultValue:{value:"'Use case-specific heading'",computed:!1},type:{name:"string"}},withLeftGutter:{required:!1,tsType:{name:"boolean"},description:`If true, insert 1 rem of "space" on the left of the component.
This will allow the component's content to line up with other
content on the page under special circumstances.

This will only be applied when \`narrow\` is false.`,defaultValue:{value:"false",computed:!1},type:{name:"bool"}}}};const oe=`${h.prefix}--inline-tip__button`,x="InlineTipButton";let u=e.forwardRef(({children:t,className:a,...r},s)=>e.createElement(_,{...r,className:k(oe,a),ref:s,...v(x),size:"md",kind:"ghost"},t));u=h.checkComponentEnabled(u,x);u.displayName=x;u.propTypes={children:i.node.isRequired,className:i.string};u.__docgenInfo={description:"This is a standard Carbon button, styled specifically for use inside InlineTip.",methods:[],displayName:"InlineTipButton",props:{className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}},children:{required:!0,tsType:{name:"ReactNode"},description:"Provide the contents of the InlineTip.",type:{name:"node"}}}};const ae=`${h.prefix}--inline-tip__link`,N="InlineTipLink";let f=e.forwardRef(({children:t,className:a,...r},s)=>e.createElement(ne,{...r,className:k(ae,a),ref:s,...v(N),renderIcon:()=>e.createElement(ie,{size:16})},t));f=h.checkComponentEnabled(f,N);f.displayName=N;f.propTypes={children:i.node.isRequired,className:i.string};f.__docgenInfo={description:"This is a standard Carbon link, styled specifically for use inside InlineTip.",methods:[],displayName:"InlineTipLink",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Provide the contents of the InlineTipLink.",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}}},composes:["PropsWithChildren"]};const se=".storybook--inline-tip-wide{margin-block-start:2rem;max-inline-size:784px}.storybook--inline-tip-narrow{margin-block-start:2rem;max-inline-size:348px}",re=""+new URL("sample-image-Xi2Ah9yk.png",import.meta.url).href,D=()=>e.createElement(K,{altGuidelinesHref:[{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/inline-tip/usage/",label:"Inline tip usage guidelines"}],blocks:[{story:d},{story:m},{title:"Stackblitz example with Animated Media",description:`[![Example with Animated media](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/examples/carbon-for-ibm-products/InlineTipWithAnimatedMedia)
`}]});D.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const Le={title:"Experimental/Onboarding/Inline tip/InlineTip",component:c,tags:["autodocs"],parameters:{styles:se,layout:"padded",docs:{page:D}},argTypes:{action:{options:["None","<InlineTipButton>","<InlineTipLink>"],control:{type:"radio"}},renderMedia:{options:["None","Render a static image"],control:{type:"radio"}},narrow:{control:{type:null}}}},S={children:e.createElement("ul",null,e.createElement("li",null,"Use ",e.createElement("b",null,"case-specific")," content that explains the concept or adds context."),e.createElement("li",null,"Use case-specific ",e.createElement("i",null,"content that")," explains the concept or adds context."),e.createElement("li",null,"Use case-specific content that explains the concept or adds context.")),closeIconDescription:"Close",collapseButtonLabel:"Read less",collapsible:!1,action:"None",expandButtonLabel:"Read more",renderMedia:"None",onClick:()=>{T("Clicked the tertiary button")()},onClose:()=>{T("Clicked the close button")()},title:"Use case-specific heading",withLeftGutter:!1},U=t=>{const{renderMedia:a,narrow:r,action:s}=t,o=function(){switch(a){case"Render a static image":return()=>e.createElement("img",{alt:"",src:re});default:return null}}(),w=function(){switch(s){case"<InlineTipButton>":return e.createElement(u,{onClick:()=>{T("Clicked the action button")()}},"Click me");case"<InlineTipLink>":return e.createElement(f,{href:"https://www.ibm.com",onClick:()=>{T("Clicked the link")()},target:"_blank"},"Learn more");default:return null}}();return e.createElement("div",{className:k([r?"storybook--inline-tip-narrow":"storybook--inline-tip-wide"])},e.createElement(c,{...t,renderMedia:o,action:w}))},d=U.bind({});d.args={narrow:!1,...S};const m=U.bind({});m.args={narrow:!0,...S};var $,q,A;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
  const {
    renderMedia,
    narrow,
    action: componentAction
  } = args;
  const selectedMedia = function () {
    switch (renderMedia) {
      case 'Render a static image':
        return () => <img alt="" src={InlineTipImage} />;
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
}`,...(A=(q=d.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var M,z,P;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  const {
    renderMedia,
    narrow,
    action: componentAction
  } = args;
  const selectedMedia = function () {
    switch (renderMedia) {
      case 'Render a static image':
        return () => <img alt="" src={InlineTipImage} />;
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
}`,...(P=(z=m.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};const Re=["inlineTip","inlineTipNarrow"];export{Re as __namedExportsOrder,Le as default,d as inlineTip,m as inlineTipNarrow};
