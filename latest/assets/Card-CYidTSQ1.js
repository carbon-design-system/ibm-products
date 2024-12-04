import{R as a,r as Te}from"./index-BwDkhjyp.js";import{b as he,c as _,J as qe}from"./index-CQ0F2wkl.js";import{p as K,B as z,I as Be}from"./settings-xiNX1vM3.js";import{M as we}from"./MenuItem-BnQb4tLm.js";import{O as _e}from"./index-Bp_RdxBV.js";import{L as Ee}from"./index-CvBNEhOa.js";import{P as e}from"./index-Dk74W0Oi.js";import{c as Oe}from"./bucket-6-DBBo9VQm.js";import{c as Ne}from"./bucket-9-BGCJpvdq.js";import{b as ke}from"./bucket-2-DlXCnOsR.js";const Ce="CardHeader",$e={hasActions:!1,titleSize:"default"},L=({actions:R,aiLabel:n,noActionIcons:v,onPrimaryButtonClick:I,onSecondaryButtonClick:j,primaryButtonIcon:A,primaryButtonPlacement:g,primaryButtonText:E,primaryButtonDisabled:T,description:h,hasActions:l=$e.hasActions,inClickableCard:H,label:o,secondaryButtonDisabled:O,secondaryButtonHref:N,secondaryButtonIcon:k,secondaryButtonPlacement:C,secondaryButtonText:d,slug:y,title:s,titleSize:m="default"})=>{const f=he(),r=`${K.prefix}--card`,i=`${r}__header`,M=_(i,{[`${i}-label-only`]:o&&!s&&!h,[`${i}-has-label`]:!!o,[`${r}__title-lg`]:m==="large"}),q=`${r}__actions-header-ghost-button`,B=_(q,{[`${q}--only`]:v}),w=a.createElement("svg",{className:`${f}--slug ${f}--slug-icon`,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("rect",{x:"0.5",y:"0.5",width:"23",height:"23"}),a.createElement("path",{d:"M13.2436 16H11.5996L10.9276 13.864H7.95164L7.29164 16H5.68364L8.49164 7.624H10.4596L13.2436 16ZM10.5436 12.508L9.46364 9.064H9.40364L8.33564 12.508H10.5436ZM17.9341 16H14.1301V14.728H15.2341V8.896H14.1301V7.624H17.9341V8.896H16.8181V14.728H17.9341V16Z",fill:"#161616"}));let $=null;if(n||y)if(H||typeof n=="boolean"||typeof y=="boolean")$=w;else{const D=n||y;$=a.cloneElement(D,{size:o&&s||s&&m==="large"?"sm":"xs"})}return a.createElement("div",{className:M},a.createElement("div",{className:_([`${i}-container`,{[`${i}-container--has-slug`]:!!y},{[`${i}-container--has-ai-label`]:!!n},{[`${i}-container--has-actions`]:!!l},{[`${i}-container--large-tile-or-label`]:s&&(o||m==="large")}])},a.createElement("div",{className:`${r}__title-container`},o&&a.createElement("p",{className:`${r}__label`},o),s&&a.createElement("h6",{className:`${r}__title`},s),h&&a.createElement("p",{className:`${r}__description`},h)),l&&a.createElement("div",{className:`${r}__actions ${r}__actions-header`},R,d&&C==="top"&&a.createElement(z,{kind:"ghost",onClick:j,size:"sm",renderIcon:k,href:N,className:B,disabled:O},d),E&&g==="top"&&a.createElement(z,{kind:"ghost",size:"sm",renderIcon:A,onClick:I,className:B,disabled:T},E)),$))};L.propTypes={actions:e.oneOfType([e.array,e.node]),aiLabel:e.oneOfType([e.node,e.bool]),description:e.oneOfType([e.string,e.object,e.node]),hasActions:e.bool,inClickableCard:e.bool,label:e.string,noActionIcons:e.bool,onPrimaryButtonClick:e.func,onSecondaryButtonClick:e.func,primaryButtonDisabled:e.bool,primaryButtonIcon:e.oneOfType([e.func,e.object]),primaryButtonPlacement:e.oneOf(["top","bottom"]),primaryButtonText:e.string,secondaryButtonDisabled:e.bool,secondaryButtonHref:e.string,secondaryButtonIcon:e.oneOfType([e.func,e.object]),secondaryButtonKind:e.oneOf(["secondary","ghost"]),secondaryButtonPlacement:e.oneOf(["top","bottom"]),secondaryButtonText:e.string,slug:e.oneOfType([e.node,e.bool]),title:e.oneOfType([e.string,e.object,e.node]),titleSize:e.oneOf(["default","large"])};L.displayName=Ce;L.__docgenInfo={description:"",methods:[],displayName:"CardHeader",props:{actions:{required:!1,tsType:{name:"ReactNode"},description:"",type:{name:"union",value:[{name:"array"},{name:"node"}]}},aiLabel:{required:!1,tsType:{name:"union",raw:"ReactNode | boolean",elements:[{name:"ReactNode"},{name:"boolean"}]},description:"Optional prop that is intended for any scenario where something is being generated by AI to reinforce AI transparency, accountability, and explainability at the UI level.",type:{name:"union",value:[{name:"node"},{name:"bool"}]}},description:{required:!1,tsType:{name:"ReactNode"},description:"",type:{name:"union",value:[{name:"string"},{name:"object"},{name:"node"}]}},hasActions:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},inClickableCard:{required:!1,tsType:{name:"boolean"},description:"is the host card clickable",type:{name:"bool"}},label:{required:!1,tsType:{name:"ReactNode"},description:"",type:{name:"string"}},noActionIcons:{required:!1,tsType:{name:"boolean"},description:"",type:{name:"bool"}},onPrimaryButtonClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",type:{name:"func"}},onSecondaryButtonClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",type:{name:"func"}},primaryButtonDisabled:{required:!1,tsType:{name:"boolean"},description:"",type:{name:"bool"}},primaryButtonIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"",type:{name:"union",value:[{name:"func"},{name:"object"}]}},primaryButtonPlacement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'bottom'",computed:!1}]}},primaryButtonText:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},secondaryButtonDisabled:{required:!1,tsType:{name:"boolean"},description:"",type:{name:"bool"}},secondaryButtonHref:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},secondaryButtonIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"",type:{name:"union",value:[{name:"func"},{name:"object"}]}},secondaryButtonKind:{required:!1,tsType:{name:"union",raw:"'secondary' | 'ghost'",elements:[{name:"literal",value:"'secondary'"},{name:"literal",value:"'ghost'"}]},description:"",type:{name:"enum",value:[{value:"'secondary'",computed:!1},{value:"'ghost'",computed:!1}]}},secondaryButtonPlacement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'bottom'",computed:!1}]}},secondaryButtonText:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},slug:{required:!1,tsType:{name:"ReactNode"},description:"**Experimental:** For all cases a `Slug` component can be provided.\nClickable tiles only accept a boolean value of true and display a hollow slug.\n@deprecated please use the `aiLabel` prop",type:{name:"union",value:[{name:"node"},{name:"bool"}]}},title:{required:!1,tsType:{name:"ReactNode"},description:"",type:{name:"union",value:[{name:"string"},{name:"object"},{name:"node"}]}},titleSize:{required:!1,tsType:{name:"union",raw:"'default' | 'large'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'large'",computed:!1}]}}}};const Re="CardFooter",oe={actions:Object.freeze([]),primaryButtonKind:"primary",productive:!1,secondaryButtonKind:"secondary"},F=({actions:R=oe.actions,disabled:n,footerActionIcon:v,hasActions:I,hasButton:j,onPrimaryButtonClick:A,onSecondaryButtonClick:g,primaryButtonDisabled:E,primaryButtonHref:T,primaryButtonIcon:h,primaryButtonKind:l="primary",primaryButtonPlacement:H,primaryButtonText:o,productive:O=oe.productive,secondaryButtonDisabled:N,secondaryButtonHref:k,secondaryButtonIcon:C,secondaryButtonKind:d="secondary",secondaryButtonPlacement:y,secondaryButtonText:s})=>{const m=`${K.prefix}--card`,f=`${K.prefix}--card__footer`,r=_(f,{[`${f}-no-button`]:!j});return a.createElement("div",{className:r},s&&y==="bottom"&&a.createElement(z,{kind:O?"ghost":d,onClick:g,size:"md",renderIcon:C,href:k,disabled:N},s),o&&H==="bottom"&&a.createElement(z,{kind:O?"ghost":l,onClick:A,size:"md",renderIcon:h,href:T,disabled:E},o),I&&a.createElement("div",{className:`${m}__actions`},R),v&&a.createElement("div",{className:`${m}__action-icon`},n?a.createElement(Oe,{size:16}):a.createElement(v,null)))};F.propTypes={actions:e.oneOfType([e.array,e.node]),disabled:e.bool,footerActionIcon:e.oneOfType([e.func,e.object]),hasActions:e.bool,hasButton:e.bool,onPrimaryButtonClick:e.func,onSecondaryButtonClick:e.func,primaryButtonDisabled:e.bool,primaryButtonHref:e.string,primaryButtonIcon:e.oneOfType([e.func,e.object]),primaryButtonKind:e.oneOf(["primary","ghost"]),primaryButtonPlacement:e.oneOf(["top","bottom"]),primaryButtonText:e.string,productive:e.bool,secondaryButtonDisabled:e.bool,secondaryButtonHref:e.string,secondaryButtonIcon:e.oneOfType([e.func,e.object]),secondaryButtonKind:e.oneOf(["secondary","ghost"]),secondaryButtonPlacement:e.oneOf(["top","bottom"]),secondaryButtonText:e.string};F.displayName=Re;F.__docgenInfo={description:"",methods:[],displayName:"CardFooter",props:{actions:{required:!1,tsType:{name:"union",raw:"ReactNode[] | ReactNode",elements:[{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"},{name:"ReactNode"}]},description:"",defaultValue:{value:"Object.freeze([])",computed:!0},type:{name:"union",value:[{name:"array"},{name:"node"}]}},disabled:{required:!1,tsType:{name:"boolean"},description:"",type:{name:"bool"}},footerActionIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"",type:{name:"union",value:[{name:"func"},{name:"object"}]}},hasActions:{required:!1,tsType:{name:"boolean"},description:"",type:{name:"bool"}},hasButton:{required:!1,tsType:{name:"boolean"},description:"",type:{name:"bool"}},onPrimaryButtonClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",type:{name:"func"}},onSecondaryButtonClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",type:{name:"func"}},primaryButtonDisabled:{required:!1,tsType:{name:"boolean"},description:"",type:{name:"bool"}},primaryButtonHref:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},primaryButtonIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"",type:{name:"union",value:[{name:"func"},{name:"object"}]}},primaryButtonKind:{required:!1,tsType:{name:"union",raw:"'primary' | 'ghost'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'primary'",computed:!1},type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'ghost'",computed:!1}]}},primaryButtonPlacement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'bottom'",computed:!1}]}},primaryButtonText:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},productive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},secondaryButtonDisabled:{required:!1,tsType:{name:"boolean"},description:"",type:{name:"bool"}},secondaryButtonHref:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},secondaryButtonIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"",type:{name:"union",value:[{name:"func"},{name:"object"}]}},secondaryButtonKind:{required:!1,tsType:{name:"union",raw:"'secondary' | 'ghost'",elements:[{name:"literal",value:"'secondary'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'secondary'",computed:!1},type:{name:"enum",value:[{value:"'secondary'",computed:!1},{value:"'ghost'",computed:!1}]}},secondaryButtonPlacement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'bottom'",computed:!1}]}},secondaryButtonText:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}}}};const Ie="Card",J=Te.forwardRef(({actionIcons:R=Object.freeze([]),actionsPlacement:n="bottom",aiLabel:v,metadata:I=Object.freeze([]),children:j,className:A,clickZone:g="one",description:E,disabled:T,footerActionIcon:h,getStarted:l,label:H,media:o,mediaPosition:O="top",onClick:N,onKeyDown:k,onPrimaryButtonClick:C,overflowActions:d=Object.freeze([]),overflowAriaLabel:y,onSecondaryButtonClick:s,pictogram:m,primaryButtonDisabled:f,primaryButtonHref:r,primaryButtonIcon:i,primaryButtonKind:M="primary",primaryButtonPlacement:q="bottom",primaryButtonText:B,productive:w=!1,secondaryButtonDisabled:$,secondaryButtonHref:D,secondaryButtonIcon:W,secondaryButtonKind:re="secondary",secondaryButtonPlacement:Q="bottom",secondaryButtonText:S,slug:X,status:Z,sequence:Y,title:le,titleSize:se="default",iconDescription:ie="Options",...me},ce)=>{const G=()=>l?I:R,t=`${K.prefix}--card`,ee=G().length>0||d.length>0||!!B&&q==="top",ue=ee&&n==="top",ae=ee&&n==="bottom",te=!!S||!!B&&q==="bottom",pe=ae||te,V=!!N||!!k,U={onClick:N,onKeyDown:k,role:"button",tabIndex:0},ne=()=>{if(d.length>0){const u=n==="top"?"bottom-end":"top-end",p=n==="top"?"sm":"md";return a.createElement(Ee,{level:2},a.createElement(qe,{enableV12Overflowmenu:!0},a.createElement(_e,{autoAlign:!0,menuAlignment:u,size:p,"aria-label":y,label:ie},d.map(({id:P,itemText:b,...x})=>a.createElement(we,{key:P,label:b,...x})))))}return G().map(({id:u,icon:p,onClick:P,iconDescription:b,href:x,...ge})=>l?a.createElement("span",{key:u,className:`${t}__icon`},p&&a.createElement(p,{"aria-label":b}),b):w?a.createElement(z,{...ge,key:u,renderIcon:p,hasIconOnly:!0,onClick:P,size:n==="top"?"sm":"md",iconDescription:b,kind:"ghost",href:x}):x?a.createElement("a",{key:u,className:`${t}__icon`,href:x,onClick:P},p&&a.createElement(p,{"aria-label":b})):a.createElement(Be,{key:u,label:b,className:`${t}__icon`,onClick:P,kind:"ghost",size:"sm"},p&&a.createElement(p,{"aria-label":b})))},de=()=>{const c=V&&!w||V&&w&&g==="one";return{...me,ref:ce,className:_(t,{[`${t}__disabled`]:T,[`${t}__get-started`]:l,[`${t}__productive`]:w,[`${t}__clickable`]:c,[`${t}__media-left`]:O==="left",[`${t}--has-slug`]:!!X,[`${t}--has-ai-label`]:!!v},A),...c&&U}},ye=()=>{const c=V&&g==="two";return{className:_(`${t}__header-body-container`,{[`${t}__clickable`]:c}),...c&&U}},fe=()=>({actions:n==="top"?ne():"",aiLabel:v,noActionIcons:!(G().length>0&&n==="top"),actionsPlacement:n,onPrimaryButtonClick:C,onSecondaryButtonClick:s,primaryButtonIcon:i,primaryButtonPlacement:q,primaryButtonText:B,primaryButtonDisabled:f,description:E,hasActions:ue,inClickableCard:V,label:H,secondaryButtonDisabled:$,secondaryButtonHref:D,secondaryButtonIcon:W,secondaryButtonPlacement:Q,secondaryButtonText:S,slug:X,title:le,titleSize:se}),be=()=>{const c=V&&g==="three";return{className:_(`${t}__body`,{[`${t}__clickable`]:c}),...c&&U}},ve=()=>({actions:n==="bottom"?ne():"",actionsPlacement:n,disabled:T,footerActionIcon:h,hasActions:ae,hasButton:te,onPrimaryButtonClick:C,onSecondaryButtonClick:s,primaryButtonDisabled:f,primaryButtonHref:r,primaryButtonIcon:i,primaryButtonKind:M,primaryButtonPlacement:q,primaryButtonText:B,productive:w,secondaryButtonDisabled:$,secondaryButtonHref:D,secondaryButtonIcon:W,secondaryButtonKind:re,secondaryButtonPlacement:Q,secondaryButtonText:S});return a.createElement("div",{"aria-disabled":T,...de()},!l&&o&&a.createElement("div",{className:`${t}__media`},o),m&&a.createElement("div",{className:`${t}__pictogram`},a.createElement(m,null)),l&&Y&&a.createElement("div",{className:`${t}__sequence`},Y),l&&Z&&a.createElement("div",{className:`${t}__status`},Z==="incomplete"&&a.createElement(Ne,null),Z==="complete"&&a.createElement(ke,null)),a.createElement("div",{className:`${t}__content-container`},a.createElement("div",{...ye()},a.createElement("div",{className:`${t}__header-wrapper`},a.createElement(L,{...fe()}),a.createElement("div",{...be()},j)),l&&o&&a.createElement("div",{className:`${t}__media`},o)),pe&&a.createElement(F,{...ve()})))});J.propTypes={actionIcons:e.arrayOf(e.shape({id:e.string,icon:e.oneOfType([e.func,e.object]),onKeyDown:e.func,onClick:e.func,iconDescription:e.string,href:e.string})),actionsPlacement:e.oneOf(["top","bottom"]),aiLabel:e.oneOfType([e.node,e.bool]),children:e.node,className:e.string,clickZone:e.oneOf(["one","two","three"]),description:e.oneOfType([e.string,e.node]),disabled:e.bool,footerActionIcon:e.oneOfType([e.func,e.object]),getStarted:e.bool,label:e.oneOfType([e.string,e.node]),media:e.node,mediaPosition:e.oneOf(["top","left"]),metadata:e.arrayOf(e.shape({id:e.string,icon:e.oneOfType([e.func,e.object]),iconDescription:e.string})),onClick:e.func,onKeyDown:e.func,onPrimaryButtonClick:e.func,onSecondaryButtonClick:e.func,overflowActions:e.arrayOf(e.shape({id:e.string,itemText:e.string,onClick:e.func,onKeyDown:e.func})),overflowAriaLabel:e.string,pictogram:e.oneOfType([e.func,e.object]),primaryButtonDisabled:e.bool,primaryButtonHref:e.string,primaryButtonIcon:e.oneOfType([e.func,e.object]),primaryButtonKind:e.oneOf(["primary","ghost"]),primaryButtonPlacement:e.oneOf(["top","bottom"]),primaryButtonText:e.string,productive:e.bool,secondaryButtonDisabled:e.bool,secondaryButtonHref:e.string,secondaryButtonIcon:e.oneOfType([e.func,e.object]),secondaryButtonKind:e.oneOf(["secondary","ghost"]),secondaryButtonPlacement:e.oneOf(["top","bottom"]),secondaryButtonText:e.string,sequence:e.number,slug:e.oneOfType([e.node,e.bool]),status:e.oneOf(["complete","incomplete"]),title:e.oneOfType([e.string,e.node]),titleSize:e.oneOf(["default","large"])};J.displayName=Ie;J.__docgenInfo={description:"",methods:[],displayName:"Card",props:{actionIcons:{required:!1,tsType:{name:"unknown"},description:"",defaultValue:{value:"Object.freeze([])",computed:!0},type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",required:!1},icon:{name:"union",value:[{name:"func"},{name:"object"}],required:!1},onKeyDown:{name:"func",required:!1},onClick:{name:"func",required:!1},iconDescription:{name:"string",required:!1},href:{name:"string",required:!1}}}}},actionsPlacement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"",defaultValue:{value:"'bottom'",computed:!1},type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'bottom'",computed:!1}]}},children:{required:!1,tsType:{name:"ReactNode"},description:"",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},clickZone:{required:!1,tsType:{name:"union",raw:"'one' | 'two' | 'three'",elements:[{name:"literal",value:"'one'"},{name:"literal",value:"'two'"},{name:"literal",value:"'three'"}]},description:"",defaultValue:{value:"'one'",computed:!1},type:{name:"enum",value:[{value:"'one'",computed:!1},{value:"'two'",computed:!1},{value:"'three'",computed:!1}]}},description:{required:!1,tsType:{name:"ReactNode"},description:"",type:{name:"union",value:[{name:"string"},{name:"node"}]}},disabled:{required:!1,tsType:{name:"boolean"},description:"",type:{name:"bool"}},footerActionIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"",type:{name:"union",value:[{name:"func"},{name:"object"}]}},getStarted:{required:!1,tsType:{name:"boolean"},description:"",type:{name:"bool"}},label:{required:!1,tsType:{name:"ReactNode"},description:"",type:{name:"union",value:[{name:"string"},{name:"node"}]}},media:{required:!1,tsType:{name:"ReactNode"},description:"",type:{name:"node"}},mediaPosition:{required:!1,tsType:{name:"union",raw:"'top' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'left'"}]},description:"",defaultValue:{value:"'top'",computed:!1},type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'left'",computed:!1}]}},metadata:{required:!1,tsType:{name:"unknown"},description:"",defaultValue:{value:"Object.freeze([])",computed:!0},type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",required:!1},icon:{name:"union",value:[{name:"func"},{name:"object"}],required:!1},iconDescription:{name:"string",required:!1}}}}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",type:{name:"func"}},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",type:{name:"func"}},onPrimaryButtonClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",type:{name:"func"}},onSecondaryButtonClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",type:{name:"func"}},overflowActions:{required:!1,tsType:{name:"unknown"},description:"",defaultValue:{value:"Object.freeze([])",computed:!0},type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",required:!1},itemText:{name:"string",required:!1},onClick:{name:"func",required:!1},onKeyDown:{name:"func",required:!1}}}}},overflowAriaLabel:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},pictogram:{required:!1,tsType:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}}},description:"",type:{name:"union",value:[{name:"func"},{name:"object"}]}},primaryButtonDisabled:{required:!1,tsType:{name:"boolean"},description:"",type:{name:"bool"}},primaryButtonHref:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},primaryButtonIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"",type:{name:"union",value:[{name:"func"},{name:"object"}]}},primaryButtonKind:{required:!1,tsType:{name:"union",raw:"'primary' | 'ghost'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'primary'",computed:!1},type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'ghost'",computed:!1}]}},primaryButtonPlacement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"",defaultValue:{value:"'bottom'",computed:!1},type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'bottom'",computed:!1}]}},primaryButtonText:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},productive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},secondaryButtonDisabled:{required:!1,tsType:{name:"boolean"},description:"",type:{name:"bool"}},secondaryButtonHref:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},secondaryButtonIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"",type:{name:"union",value:[{name:"func"},{name:"object"}]}},secondaryButtonKind:{required:!1,tsType:{name:"union",raw:"'secondary' | 'ghost'",elements:[{name:"literal",value:"'secondary'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'secondary'",computed:!1},type:{name:"enum",value:[{value:"'secondary'",computed:!1},{value:"'ghost'",computed:!1}]}},secondaryButtonPlacement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"",defaultValue:{value:"'bottom'",computed:!1},type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'bottom'",computed:!1}]}},secondaryButtonText:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},sequence:{required:!1,tsType:{name:"number"},description:"",type:{name:"number"}},iconDescription:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Options'",computed:!1}},slug:{required:!1,tsType:{name:"union",raw:"ReactNode | boolean",elements:[{name:"ReactNode"},{name:"boolean"}]},description:"Clickable tiles only accept a boolean value of true and display a hollow slug.\n@deprecated please use the `aiLabel` prop",type:{name:"union",value:[{name:"node"},{name:"bool"}]}},aiLabel:{required:!1,tsType:{name:"union",raw:"ReactNode | boolean",elements:[{name:"ReactNode"},{name:"boolean"}]},description:"Optional prop that is intended for any scenario where something is being generated by AI to reinforce AI transparency, accountability, and explainability at the UI level.",type:{name:"union",value:[{name:"node"},{name:"bool"}]}},status:{required:!1,tsType:{name:"union",raw:"'complete' | 'incomplete'",elements:[{name:"literal",value:"'complete'"},{name:"literal",value:"'incomplete'"}]},description:"",type:{name:"enum",value:[{value:"'complete'",computed:!1},{value:"'incomplete'",computed:!1}]}},title:{required:!1,tsType:{name:"ReactNode"},description:"",type:{name:"union",value:[{name:"string"},{name:"node"}]}},titleSize:{required:!1,tsType:{name:"union",raw:"'default' | 'large'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'large'",computed:!1}]}}},composes:["PropsWithChildren"]};export{J as C};
