import{e as a}from"./index-BOZkNhcz.js";import{c as k,P as e}from"./index-Cd8snwnz.js";import{p as m,B as l}from"./settings-DqneCnpo.js";import{L as E}from"./Link-BqtwLYC0.js";import{g as b}from"./devtools-Bjt2CwRv.js";import{d as n,E as q}from"./EmptyState-DBARPyVY.js";import{ErrorIllustration as w}from"./ErrorIllustration-DDV2YgoZ.js";const r=`${m.prefix}--empty-state`,i="ErrorEmptyState";let t=a.forwardRef(({action:p,className:u,illustrationPosition:d=n.position,illustrationDescription:c,illustrationTheme:y,link:f,size:o=n.size,headingAs:g=n.headingAs,subtitle:v,title:s,...h},T)=>a.createElement("div",{...h,className:k(r,u,`${r}-position--${d}`,`${r}-type--error`),ref:T,...b(i)},a.createElement(w,{theme:y,size:o,alt:c||s}),a.createElement(q,{action:p,link:f,size:o,headingAs:g,subtitle:v,title:s||""})));t=m.checkComponentEnabled(t,i);t.displayName=i;t.propTypes={action:e.shape({...l.propTypes,kind:e.oneOf(["primary","secondary","tertiary"]),renderIcon:e.oneOfType([e.func,e.object]),onClick:l.propTypes.onClick,text:e.string}),className:e.string,headingAs:e.elementType,illustrationDescription:e.string,illustrationPosition:e.oneOf(["top","right","bottom","left"]),illustrationTheme:e.oneOf(["light","dark"]),link:e.shape({...E.propTypes,text:e.oneOfType([e.string,e.node]),href:e.string}),size:e.oneOf(["lg","sm"]),subtitle:e.oneOfType([e.string,e.node]),title:e.oneOfType([e.string,e.node]).isRequired};t.__docgenInfo={description:"The `EmptyState` component follows the Carbon guidelines for empty states with some added specifications around illustration usage. For additional usage guidelines and documentation please refer to the links above.",methods:[],displayName:"ErrorEmptyState",props:{action:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  kind?: 'primary' | 'secondary' | 'tertiary';
  renderIcon?: CarbonIconType;
  onClick?: ButtonProps<React.ElementType>['onClick'];
  text?: string;
}`,signature:{properties:[{key:"kind",value:{name:"union",raw:"'primary' | 'secondary' | 'tertiary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"}],required:!1}},{key:"renderIcon",value:{name:"CarbonIconType",required:!1}},{key:"onClick",value:{name:"ButtonProps['onClick']",raw:"ButtonProps<React.ElementType>['onClick']",required:!1}},{key:"text",value:{name:"string",required:!1}}]}},description:"Empty state action button",type:{name:"shape",value:{kind:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'tertiary'",computed:!1}],required:!1},renderIcon:{name:"union",value:[{name:"func"},{name:"object"}],required:!1},onClick:{name:"custom",raw:"Button.propTypes.onClick",required:!1},text:{name:"string",required:!1}}}},className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}},illustrationDescription:{required:!1,tsType:{name:"string"},description:"The alt text for empty state svg images. If not provided , title will be used.",type:{name:"string"}},illustrationPosition:{required:!1,tsType:{name:"union",raw:"'top' | 'right' | 'bottom' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"}]},description:"Designates the position of the illustration relative to the content",defaultValue:{value:"'top'",computed:!1},type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'right'",computed:!1},{value:"'bottom'",computed:!1},{value:"'left'",computed:!1}]}},illustrationTheme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:`Empty state illustration theme variations.
To ensure you use the correct themed illustrations, you can conditionally specify light or dark
based on your app's current theme value. Example:
\`illustrationTheme={appTheme === ('carbon--g100' || 'carbon--g90') ? 'dark' : 'light'}\``,type:{name:"enum",value:[{value:"'light'",computed:!1},{value:"'dark'",computed:!1}]}},link:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  text?: string | ReactNode;
  href?: string;
}`,signature:{properties:[{key:"text",value:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}],required:!1}},{key:"href",value:{name:"string",required:!1}}]}},description:"Empty state link object",type:{name:"shape",value:{text:{name:"union",value:[{name:"string"},{name:"node"}],required:!1},href:{name:"string",required:!1}}}},headingAs:{required:!1,tsType:{name:"union",raw:"(() => ReactNode) | string | ElementType",elements:[{name:"unknown"},{name:"string"},{name:"ElementType"}]},description:"Empty state headingAs allows you to customize the type of heading element",defaultValue:{value:"'h3'",computed:!1},type:{name:"elementType"}},size:{required:!1,tsType:{name:"union",raw:"'lg' | 'sm'",elements:[{name:"literal",value:"'lg'"},{name:"literal",value:"'sm'"}]},description:"Empty state size",defaultValue:{value:"sizes.lg",computed:!0},type:{name:"enum",value:[{value:"'lg'",computed:!1},{value:"'sm'",computed:!1}]}},subtitle:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"Empty state subtitle",type:{name:"union",value:[{name:"string"},{name:"node"}]}},title:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"Empty state title",type:{name:"union",value:[{name:"string"},{name:"node"}]}}}};export{t as E};
