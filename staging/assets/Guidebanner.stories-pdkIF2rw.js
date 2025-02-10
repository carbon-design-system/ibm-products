import{e,r as N}from"./index-BOZkNhcz.js";import{a as I}from"./chunk-D5ZWXAHU-DlerbUHg.js";import{S as le}from"./StoryDocsPage-BhgqlSUq.js";import{c as d,C as de,P as t}from"./index-Cd8snwnz.js";import{p,B as R,I as q,C as pe}from"./settings-DqneCnpo.js";import{b as me,c as ue}from"./index-Cwv8QpiQ.js";import{g as G}from"./devtools-Bjt2CwRv.js";import{u as he}from"./uuidv4-BQrI85uz.js";import{C as fe}from"./Carousel-BNrkDd2n.js";import{b as be,c as ge}from"./bucket-2-BRYD7UVO.js";import{I as ye}from"./bucket-9-0Zx3G2i3.js";import{L as Ee}from"./Link-BqtwLYC0.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CtRu48qb.js";import"./index-CKePA1sA.js";import"./iframe-BLi-C7G1.js";import"./index-hBZdtWkn.js";import"./index-2uioG_CI.js";import"./index-CO8sV34W.js";import"./index-ogSvIofg.js";import"./story-helper-HIAsLHzl.js";import"./events-OVwOsPzJ.js";import"./index-CN8ymWyE.js";import"./useIsomorphicEffect-C0ObacuX.js";const o=`${p.prefix}--guidebanner`,L="Guidebanner",m={collapsible:!1,withLeftGutter:!1,closeIconDescription:"Close",collapseButtonLabel:"Read less",expandButtonLabel:"Read more",nextIconDescription:"Next",previousIconDescription:"Back"};let u=e.forwardRef(({children:i,className:r,collapsible:n=m.collapsible,onClose:s,withLeftGutter:c=m.withLeftGutter,closeIconDescription:l=m.closeIconDescription,collapseButtonLabel:_=m.collapseButtonLabel,expandButtonLabel:Y=m.expandButtonLabel,nextIconDescription:Z=m.nextIconDescription,previousIconDescription:ee=m.previousIconDescription,title:te,...ne},ae)=>{const $=N.useRef(null),oe=N.useRef(null),[v,ie]=N.useState(0),[A,re]=N.useState(!1),[E,se]=N.useState(!!n),ce=()=>{se(x=>!x)},U=`${he()}--carousel-content-id`;return e.createElement("div",{...ne,"aria-owns":E?void 0:U,className:d(o,r,n&&`${o}__collapsible`,E&&`${o}__collapsible-collapsed`,c&&`${o}__with-left-gutter`),ref:ae,...G(L)},e.createElement(ye,{size:20,className:`${o}__icon-idea`}),e.createElement("div",{className:`${o}__title`},te),e.createElement(fe,{id:U,className:`${o}__carousel`,fadedEdgeColor:{left:ue,right:me},ref:$,onChangeIsScrollable:x=>{re(x)},onScroll:x=>{ie(x)}},i),e.createElement("div",{className:d([n||A?`${o}__navigation`:null])},n&&e.createElement(R,{kind:"ghost",size:"md",className:`${o}__toggle-button`,onClick:ce,ref:oe,"aria-controls":E?void 0:U,"aria-expanded":!E},E?Y:_),A&&e.createElement(e.Fragment,null,e.createElement("span",{className:d(`${o}__back-button`,[v===0?`${o}__back-button--disabled`:null])},e.createElement(q,{align:"top",disabled:v===0,kind:"ghost",label:ee,onClick:()=>{$.current.scrollPrev()},size:"md"},e.createElement(be,{size:16}))),e.createElement("span",{className:d(`${o}__next-button`,[v===1?`${o}__next-button--disabled`:null])},e.createElement(q,{align:"top-right",disabled:v===1,kind:"ghost",label:Z,onClick:()=>{$.current.scrollNext()},size:"md"},e.createElement(ge,{size:16}))))),s&&e.createElement("span",{className:`${o}__close-button`},e.createElement(q,{align:"bottom-end",kind:"ghost",label:l,onClick:s,size:"md"},e.createElement(de,{size:16}))))});u=p.checkComponentEnabled(u,L);u.displayName=L;u.propTypes={children:(i,r)=>{let n;const s=i[r];return s||(n=new Error("`Guidebanner` requires one or more children of type `GuidebannerElement`.")),e.Children.forEach(s,c=>{var l,_;c.type.displayName!=="GuidebannerElement"&&(n=new Error(`\`Guidebanner\` only accepts children of type \`GuidebannerElement\`, found \`${((l=c.type)==null?void 0:l.displayName)||((_=c.type)==null?void 0:_.name)||c.type}\` instead.`))}),n},className:t.string,closeIconDescription:t.string,collapseButtonLabel:t.string,collapsible:t.bool,expandButtonLabel:t.string,nextIconDescription:t.string,onClose:t.func,previousIconDescription:t.string,title:t.string.isRequired,withLeftGutter:t.bool};u.__docgenInfo={description:`The guide banner sits at the top of a page, or page-level tab,
to introduce foundational concepts related to the page's content.`,methods:[],displayName:"Guidebanner",props:{children:{required:!1,tsType:{name:"ReactNode"},description:`Provide the contents of the Guidebanner.
One or more GuidebannerElement components are required.`,type:{name:"custom",raw:`(props, propName) => {
  let error;
  const prop = props[propName];
  if (!prop) {
    error = new Error(
      '\`Guidebanner\` requires one or more children of type \`GuidebannerElement\`.'
    );
  }
  React.Children.forEach(prop, (child) => {
    if (child.type.displayName !== 'GuidebannerElement') {
      // If child element is not \`GuidebannerElement\`, then show:
      // Carbon Products component's \`displayName\` (child.type.displayName) or
      // React component's \`name\` (child.type.name) or
      // HTML element's tag name (child.type).
      error = new Error(
        \`\\\`Guidebanner\\\` only accepts children of type \\\`GuidebannerElement\\\`, found \\\`\${
          child.type?.displayName || child.type?.name || child.type
        }\\\` instead.\`
      );
    }
  });
  return error;
}`}},className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}},closeIconDescription:{required:!1,tsType:{name:"string"},description:"Tooltip text and aria label for the Close button icon.",defaultValue:{value:"'Close'",computed:!1},type:{name:"string"}},collapseButtonLabel:{required:!1,tsType:{name:"string"},description:"Text label for the Collapse button.",defaultValue:{value:"'Read less'",computed:!1},type:{name:"string"}},collapsible:{required:!1,tsType:{name:"boolean"},description:`When true, the Guidebanner will initialize in a collapsed state,
showing the title and the Expand button.

When expanded, it will show the GuidebannerElement child components and the Collapse button.`,defaultValue:{value:"false",computed:!1},type:{name:"bool"}},expandButtonLabel:{required:!1,tsType:{name:"string"},description:"Text label for the Expand button.",defaultValue:{value:"'Read more'",computed:!1},type:{name:"string"}},nextIconDescription:{required:!1,tsType:{name:"string"},description:"Tooltip text and aria label for the Next button icon.",defaultValue:{value:"'Next'",computed:!1},type:{name:"string"}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`If defined, a Close button will render in the top-right corner and a
callback function will be triggered when button is clicked.`,type:{name:"func"}},previousIconDescription:{required:!1,tsType:{name:"string"},description:"Tooltip text and aria label for the Back button icon.",defaultValue:{value:"'Back'",computed:!1},type:{name:"string"}},title:{required:!0,tsType:{name:"string"},description:"Title text.",type:{name:"string"}},withLeftGutter:{required:!1,tsType:{name:"boolean"},description:`If true, insert 1 rem of "space" on the left of the component.
This will allow the component's content to line up with other
content on the page under special circumstances.`,defaultValue:{value:"false",computed:!1},type:{name:"bool"}}}};const C=`${p.prefix}--guidebanner__element`,D="GuidebannerElement";let a=e.forwardRef(({button:i,className:r,description:n,title:s,...c},l)=>e.createElement("div",{...c,className:d(C,r),ref:l,...G(D)},s&&e.createElement("h2",{className:`${C}-title`},s),n&&e.createElement("p",{className:`${C}-content`},n),i&&e.createElement("div",{className:`${C}-buttons`},i)));a=p.checkComponentEnabled(a,D);a.displayName=D;a.propTypes={button:t.node,className:t.string,description:t.oneOfType([t.string,t.node]).isRequired,title:t.string};a.__docgenInfo={description:`The GuidebannerElement is a required child component of the Guidebanner,
and acts as a container for a CarouselItem.`,methods:[],displayName:"GuidebannerElement",props:{button:{required:!1,tsType:{name:"ReactNode"},description:`An optional button can be rendered below the description.
This can be a link, button, Coachmark button, etc.`,type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}},description:{required:!0,tsType:{name:"ReactNode"},description:"The description of the element.",type:{name:"union",value:[{name:"string"},{name:"node"}]}},title:{required:!1,tsType:{name:"string"},description:"The title of the element.",type:{name:"string"}}}};const V=`${p.prefix}--guidebanner__element-button`,k="GuidebannerElementButton",xe={iconDescription:"Crossroads"};let h=e.forwardRef(({children:i,className:r,iconDescription:n=xe.iconDescription,type:s,...c},l)=>s==="primary"?e.createElement(R,{...c,className:d(V,r),iconDescription:n,kind:"tertiary",ref:l,renderIcon:()=>e.createElement(pe,{size:16}),role:"button",size:"md",...G(k)},i):e.createElement(R,{...c,className:d(V,r),kind:"ghost",role:"button",size:"md",...G(k)},i));h=p.checkComponentEnabled(h,k);h.displayName=k;h.propTypes={children:t.node.isRequired,className:t.string,type:t.string};h.__docgenInfo={description:"One of two buttons styled specifically for the GuidebannerElement.",methods:[],displayName:"GuidebannerElementButton",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Provide the contents of the GuidebannerElementLink.",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}},iconDescription:{required:!1,tsType:{name:"string"},description:"Provide a description for the icon.",defaultValue:{value:"'Crossroads'",computed:!1}},type:{required:!1,tsType:{name:"string"},description:`If type is "primary", then return a tertiary button with the "crossroads" icon,
else return a ghost button.`,type:{name:"string"}}}};const Ne=`${p.prefix}--guidebanner__element-link`,B="GuidebannerElementLink";let y=e.forwardRef(({children:i,className:r,...n},s)=>e.createElement(Ee,{...n,className:d(Ne,r),kind:"ghost",ref:s,role:"link",size:"md",...G(B)},i));y=p.checkComponentEnabled(y,B);y.displayName=B;y.propTypes={children:t.node.isRequired,className:t.string};y.__docgenInfo={description:"A link styled specifically for the GuidebannerElement.",methods:[],displayName:"GuidebannerElementLink",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Provide the contents of the GuidebannerElementLink.",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}}}};const Ge="#storybook-root{overflow-x:hidden}@supports (overflow-inline: hidden){#storybook-root{overflow-inline:hidden}}.non-linear-reading-stories__viewport{margin:0}",Q=()=>e.createElement(le,{blocks:[{story:f},{story:b},{story:g}]});Q.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const we="guidebanner-stories",He={title:"Experimental/Onboarding/Guidebanner",component:u,tags:["autodocs"],parameters:{styles:Ge,layout:"fullscreen",docs:{page:Q}},argTypes:{children:{table:{disable:!0}},theme:{table:{disable:!0}}}},P={onClose:()=>I("onClose()")(),title:"Page-related heading that can stand on its own",withLeftGutter:!1},S=()=>e.createElement(h,{type:"primary",onClick:()=>{I('GuidebannerElementButton.onClick() (type="primary")')()}},"Show Me"),T=()=>e.createElement(h,{onClick:()=>{I("GuidebannerElementButton.onClick()")()}},"Click me"),w=()=>e.createElement(y,{href:"https://www.ibm.com",target:"_blank",onClick:()=>{I("GuidebannerElementLink.onClick()")()}},"Learn more"),z=({children:i,...r})=>{const n=i.props.children;return e.createElement("div",{className:`${we}__viewport`},e.createElement(u,{...r},n))},f=z.bind({});f.args={...P,collapsible:!0,children:e.createElement(e.Fragment,null,e.createElement(a,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(S,null)}),e.createElement(a,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(T,null)}),e.createElement(a,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(T,null)}),e.createElement(a,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(w,null)}),e.createElement(a,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(w,null)}))};const b=z.bind({});b.args={...P,children:e.createElement(e.Fragment,null,e.createElement(a,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(S,null)}),e.createElement(a,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(T,null)}),e.createElement(a,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(T,null)}),e.createElement(a,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(w,null)}),e.createElement(a,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(w,null)}))};const g=z.bind({});g.args={...P,children:e.createElement(e.Fragment,null,e.createElement(a,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(S,null)}),e.createElement(a,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(w,null)}))};var F,O,J;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`({
  children,
  ...rest
}) => {
  // Normally GuidebannerElement are listed directly as children of Guidebanner,
  // but as a story we have to wrap the JSX in a React.Fragment.
  // To feed them here, we point to the list of GuidebannerElements directly.
  const childArray = children.props.children;
  return <div className={\`\${storyClass}__viewport\`}>
      <Guidebanner {...rest}>{childArray}</Guidebanner>
    </div>;
}`,...(J=(O=f.parameters)==null?void 0:O.docs)==null?void 0:J.source}}};var X,M,W;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`({
  children,
  ...rest
}) => {
  // Normally GuidebannerElement are listed directly as children of Guidebanner,
  // but as a story we have to wrap the JSX in a React.Fragment.
  // To feed them here, we point to the list of GuidebannerElements directly.
  const childArray = children.props.children;
  return <div className={\`\${storyClass}__viewport\`}>
      <Guidebanner {...rest}>{childArray}</Guidebanner>
    </div>;
}`,...(W=(M=b.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var H,j,K;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`({
  children,
  ...rest
}) => {
  // Normally GuidebannerElement are listed directly as children of Guidebanner,
  // but as a story we have to wrap the JSX in a React.Fragment.
  // To feed them here, we point to the list of GuidebannerElements directly.
  const childArray = children.props.children;
  return <div className={\`\${storyClass}__viewport\`}>
      <Guidebanner {...rest}>{childArray}</Guidebanner>
    </div>;
}`,...(K=(j=g.parameters)==null?void 0:j.docs)==null?void 0:K.source}}};const je=["collapsible","manyInsights","fewInsights"];export{je as __namedExportsOrder,f as collapsible,He as default,g as fewInsights,b as manyInsights};
