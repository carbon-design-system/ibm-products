import{e as a}from"./index-DzvNrmz8.js";import{d as k,P as e}from"./index-5As4T26e.js";import{p,B as l}from"./settings-DbzZchXt.js";import{L as E}from"./Link-Dprirwoi.js";import{g as b}from"./devtools-CskDVa8y.js";import{d as o,E as q}from"./EmptyState-XmCa0Jde.js";import{NoTagsIllustration as N}from"./NoTagsIllustration-CuujQ0N-.js";const n=`${p.prefix}--empty-state`,i="NoTagsEmptyState";let t=a.forwardRef(({action:m,className:u,illustrationPosition:d=o.position,illustrationTheme:c,illustrationDescription:f,link:y,size:s=o.size,headingAs:g=o.headingAs,subtitle:h,title:r,...v},T)=>a.createElement("div",{...v,className:k(n,u,`${n}-position--${d}`,`${n}-type--noTags`),ref:T,...b(i)},a.createElement(N,{theme:c,size:s,alt:f||r}),a.createElement(q,{action:m,link:y,size:s,headingAs:g,subtitle:h,title:r=""})));t=p.checkComponentEnabled(t,i);t.displayName=i;t.propTypes={action:e.shape({...l.propTypes,kind:e.oneOf(["primary","secondary","tertiary"]),renderIcon:e.oneOfType([e.func,e.object]),onClick:l.propTypes.onClick,text:e.string}),className:e.string,headingAs:e.elementType,illustrationDescription:e.string,illustrationPosition:e.oneOf(["top","right","bottom","left"]),illustrationTheme:e.oneOf(["light","dark"]),link:e.shape({...E.propTypes,text:e.oneOfType([e.string,e.node]),href:e.string}),size:e.oneOf(["lg","sm"]),subtitle:e.oneOfType([e.string,e.node]),title:e.oneOfType([e.string,e.node]).isRequired};t.__docgenInfo={description:"The `EmptyState` component follows the Carbon guidelines for empty states with some added specifications around illustration usage. For additional usage guidelines and documentation please refer to the links above.",methods:[],displayName:"NoTagsEmptyState",props:{illustrationTheme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:`Empty state illustration theme variations.
To ensure you use the correct themed illustrations, you can conditionally specify light or dark
based on your app's current theme value. Example:
\`illustrationTheme={appTheme === ('carbon--g100' || 'carbon--g90') ? 'dark' : 'light'}\``,type:{name:"enum",value:[{value:"'light'",computed:!1},{value:"'dark'",computed:!1}]}},illustrationPosition:{defaultValue:{value:"'top'",computed:!1},description:"Designates the position of the illustration relative to the content",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'right'",computed:!1},{value:"'bottom'",computed:!1},{value:"'left'",computed:!1}]},required:!1},size:{defaultValue:{value:"sizes.lg",computed:!0},description:"Empty state size",type:{name:"enum",value:[{value:"'lg'",computed:!1},{value:"'sm'",computed:!1}]},required:!1},headingAs:{defaultValue:{value:"'h3'",computed:!1},description:"Empty state headingAs allows you to customize the type of heading element",type:{name:"elementType"},required:!1},action:{description:"Empty state action button",type:{name:"shape",value:{kind:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'tertiary'",computed:!1}],required:!1},renderIcon:{name:"union",value:[{name:"func"},{name:"object"}],required:!1},onClick:{name:"custom",raw:"Button.propTypes.onClick",required:!1},text:{name:"string",required:!1}}},required:!1},className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1},illustrationDescription:{description:"The alt text for empty state svg images. If not provided , title will be used.",type:{name:"string"},required:!1},link:{description:"Empty state link object",type:{name:"shape",value:{text:{name:"union",value:[{name:"string"},{name:"node"}],required:!1},href:{name:"string",required:!1}}},required:!1},subtitle:{description:"Empty state subtitle",type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!1},title:{description:"Empty state title",type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!0}},composes:["EmptyStatePresetProps"]};export{t as N};
