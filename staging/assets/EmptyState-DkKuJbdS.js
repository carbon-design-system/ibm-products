import{e as a}from"./index-DxDX2vOa.js";import{c as m,P as e}from"./index-B_euquWE.js";import{p as f,B as r}from"./settings-0ThqPtR3.js";import{L as y}from"./Link-Czg4mzd7.js";import{g as x}from"./devtools-BlxCaI1L.js";import"./props-helper-DmbAnr2a.js";import{E as C}from"./EmptyStateV2-giEpiIyE.js";const s=`${f.prefix}--empty-state`,$="EmptyStateContent",u=({action:t,link:n,size:l,subtitle:p,title:d})=>a.createElement("div",{className:`${s}__content`},a.createElement("h3",{className:m(`${s}__header`,{[`${s}__header--small`]:l==="sm"})},d),p&&a.createElement("p",{className:m(`${s}__subtitle`,{[`${s}__subtitle--small`]:l==="sm"})},p),(t==null?void 0:t.text)&&(t==null?void 0:t.onClick)&&a.createElement(r,{...t,className:`${s}__action-button`,kind:t.kind||"tertiary",onClick:t.onClick,renderIcon:t.renderIcon||null,size:"sm"},t.text),(n==null?void 0:n.text)&&(n==null?void 0:n.href)&&a.createElement(y,{...n,className:`${s}__link`,href:n.href},n.text));u.displayName=$;u.propTypes={action:e.shape({...r.propTypes,iconDescription:e.string,kind:e.oneOf(["primary","secondary","tertiary"]),renderIcon:e.oneOfType([e.func,e.object]),onClick:r.propTypes.onClick,text:e.string}),link:e.shape({...y.propTypes,text:e.oneOfType([e.string,e.node]),href:e.string}),size:e.oneOf(["lg","sm"]),subtitle:e.oneOfType([e.string,e.node]),title:e.oneOfType([e.string,e.node]).isRequired};u.__docgenInfo={description:"",methods:[],displayName:"EmptyStateContent",props:{action:{description:"Empty state action button",type:{name:"shape",value:{iconDescription:{name:"string",required:!1},kind:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'tertiary'",computed:!1}],required:!1},renderIcon:{name:"union",value:[{name:"func"},{name:"object"}],required:!1},onClick:{name:"custom",raw:"Button.propTypes.onClick",required:!1},text:{name:"string",required:!1}}},required:!1},link:{description:"Empty state link object",type:{name:"shape",value:{text:{name:"union",value:[{name:"string"},{name:"node"}],required:!1},href:{name:"string",required:!1}}},required:!1},size:{description:"Empty state size",type:{name:"enum",value:[{value:"'lg'",computed:!1},{value:"'sm'",computed:!1}]},required:!1},subtitle:{description:"Empty state subtitle",type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!1},title:{description:"Empty state title",type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!0}}};const i=`${f.prefix}--empty-state`,g="EmptyState",v={position:"top",size:"lg"};let o=a.forwardRef(({v2:t=!1,...n},l)=>{if(t)return a.createElement(C,{...n});const{action:p,className:d,illustration:c,illustrationDescription:q,illustrationPosition:E=v.position,link:b,size:h=v.size,subtitle:k,title:T,..._}=n;return a.createElement("div",{..._,className:m(i,`${i}-type--default`,d,{[`${i}-position--${E}`]:!!c}),ref:l,...x(g)},c&&a.createElement("img",{src:c,alt:q,className:m([`${i}__illustration`,`${i}__illustration--${h}`])}),a.createElement(u,{action:p,link:b,size:h,subtitle:k,title:T??""}))});o=f.checkComponentEnabled(o,g);o.propTypes={action:e.shape({...r.propTypes,kind:e.oneOf(["primary","secondary","tertiary"]),renderIcon:e.oneOfType([e.func,e.object]),onClick:r.propTypes.onClick,text:e.string}),className:e.string,illustration:e.string,illustrationDescription:e.string.isRequired.if(({illustration:t})=>t),illustrationPosition:e.oneOf(["top","right","bottom","left"]),link:e.shape({...y.propTypes,text:e.oneOfType([e.string,e.node]),href:e.string}),size:e.oneOf(["lg","sm"]),subtitle:e.oneOfType([e.string,e.node]),title:e.oneOfType([e.string,e.node]).isRequired,v2:e.bool};o.displayName=g;o.__docgenInfo={description:"The `EmptyState` component follows the Carbon guidelines for empty states with some added specifications around illustration usage. For additional usage guidelines and documentation please refer to the links above.",methods:[],displayName:"EmptyState",props:{v2:{defaultValue:{value:"false",computed:!1},description:`Designates which version of the EmptyState component is being used.
Refer to V2 documentation separately.`,type:{name:"bool"},required:!1},action:{description:"Empty state action button",type:{name:"shape",value:{kind:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'tertiary'",computed:!1}],required:!1},renderIcon:{name:"union",value:[{name:"func"},{name:"object"}],required:!1},onClick:{name:"custom",raw:"Button.propTypes.onClick",required:!1},text:{name:"string",required:!1}}},required:!1},className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1},illustration:{description:"Empty state illustration, specify the `src` for a provided illustration to be displayed. In the case of requiring a light and dark illustration of your own, simply pass the corresponding illustration based on the current theme of your application.\nFor example: `illustration={appTheme === 'dark' ? darkIllustration : lightIllustration}`",type:{name:"string"},required:!1},illustrationDescription:{description:"The alt text for custom provided illustrations",type:{name:"string"},required:!0},illustrationPosition:{description:"Designates the position of the illustration relative to the content",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'right'",computed:!1},{value:"'bottom'",computed:!1},{value:"'left'",computed:!1}]},required:!1},link:{description:"Empty state link object",type:{name:"shape",value:{text:{name:"union",value:[{name:"string"},{name:"node"}],required:!1},href:{name:"string",required:!1}}},required:!1},size:{description:"Empty state size",type:{name:"enum",value:[{value:"'lg'",computed:!1},{value:"'sm'",computed:!1}]},required:!1},subtitle:{description:"Empty state subtext",type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!1},title:{description:"Empty state heading",type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!0}}};export{u as E,o as a,v as d};
