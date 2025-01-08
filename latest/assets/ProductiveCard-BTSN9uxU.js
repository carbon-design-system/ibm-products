import{r as s,e as l}from"./index-CPiZ6Cnx.js";import{P as e}from"./index-CXyjPnaX.js";import{g as u}from"./devtools-CjVY-wQW.js";import{p as m}from"./settings-iwZeeh4T.js";import{p as c}from"./props-helper-Dlg0HCIz.js";import{C as d}from"./Card-AwOviZjn.js";const t="ProductiveCard";let n=s.forwardRef(({actionsPlacement:o="top",...a},r)=>{const i=c(a,["media","mediaPosition","pictogram","primaryButtonClick","productive","secondaryButtonKind"]);return l.createElement(d,{...i,actionsPlacement:o,ref:r,productive:!0,...u(t)})});n=m.checkComponentEnabled(n,t);n.propTypes={actionIcons:e.arrayOf(e.shape({id:e.string,icon:e.oneOfType([e.func,e.object]),onKeyDown:e.func,onClick:e.func,iconDescription:e.string,href:e.string})),actionsPlacement:e.oneOf(["top","bottom"]),children:e.node,className:e.string,clickZone:e.oneOf(["one","two","three"]),decorator:e.oneOfType([e.node,e.bool]),description:e.oneOfType([e.string,e.object,e.node]),iconDescription:e.string,label:e.oneOfType([e.string,e.object,e.node]),onClick:e.func,onPrimaryButtonClick:e.func,onSecondaryButtonClick:e.func,overflowActions:e.arrayOf(e.shape({id:e.string,itemText:e.string,onClick:e.func,onKeyDown:e.func})),overflowAriaLabel:e.string,primaryButtonDisabled:e.bool,primaryButtonHref:e.string,primaryButtonIcon:e.oneOfType([e.func,e.object]),primaryButtonPlacement:e.oneOf(["top","bottom"]),primaryButtonText:e.node,secondaryButtonHref:e.string,secondaryButtonIcon:e.oneOfType([e.func,e.object]),secondaryButtonPlacement:e.oneOf(["top","bottom"]),secondaryButtonText:e.node,slug:e.oneOfType([e.node,e.bool]),title:e.oneOfType([e.string,e.object,e.node]),titleSize:e.oneOf(["default","large"])};n.displayName=t;n.__docgenInfo={description:"",methods:[],displayName:"ProductiveCard",props:{actionIcons:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id?: string;
  icon?: CarbonIconType;
  onKeyDown?(): void;
  onClick?(): void;
  iconDescription?: string;
  href?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1}},{key:"icon",value:{name:"CarbonIconType",required:!1}},{key:"onKeyDown",value:{name:"void",required:!1}},{key:"onClick",value:{name:"void",required:!1}},{key:"iconDescription",value:{name:"string",required:!1}},{key:"href",value:{name:"string",required:!1}}]}}],raw:"ActionIcon[]"},description:"Icons that are displayed on card. Refer to design documentation for implementation guidelines. Note- href will supersede onClick",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",required:!1},icon:{name:"union",value:[{name:"func"},{name:"object"}],required:!1},onKeyDown:{name:"func",required:!1},onClick:{name:"func",required:!1},iconDescription:{name:"string",required:!1},href:{name:"string",required:!1}}}}},decorator:{required:!1,tsType:{name:"union",raw:"ReactNode | boolean",elements:[{name:"ReactNode"},{name:"boolean"}]},description:"Optional prop that allows you to pass any component.",type:{name:"union",value:[{name:"node"},{name:"bool"}]}},actionsPlacement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"Determines if the action icons are on the top or bottom of the card",defaultValue:{value:"'top'",computed:!1},type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'bottom'",computed:!1}]}},className:{required:!1,tsType:{name:"string"},description:"Optional user provided class",type:{name:"string"}},children:{required:!1,tsType:{name:"ReactNode"},description:"Content that shows in the body of the card",type:{name:"node"}},clickZone:{required:!1,tsType:{name:"union",raw:"'one' | 'two' | 'three'",elements:[{name:"literal",value:"'one'"},{name:"literal",value:"'two'"},{name:"literal",value:"'three'"}]},description:"Designates which zones of the card are clickable. Refer to design documentation for implementation guidelines",type:{name:"enum",value:[{value:"'one'",computed:!1},{value:"'two'",computed:!1},{value:"'three'",computed:!1}]}},description:{required:!1,tsType:{name:"union",raw:"string | object | ReactNode",elements:[{name:"string"},{name:"object"},{name:"ReactNode"}]},description:"Optional header description",type:{name:"union",value:[{name:"string"},{name:"object"},{name:"node"}]}},label:{required:!1,tsType:{name:"union",raw:"string | object | ReactNode",elements:[{name:"string"},{name:"object"},{name:"ReactNode"}]},description:"Optional label for the top of the card",type:{name:"union",value:[{name:"string"},{name:"object"},{name:"node"}]}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Provides the callback for a clickable card",type:{name:"func"}},onPrimaryButtonClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function that's called from the primary button or action icon",type:{name:"func"}},onSecondaryButtonClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function that's called from the secondary button",type:{name:"func"}},overflowActions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id?: string;
  itemText?: string;
  onClick?: () => void;
  onKeydown?: () => void;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1}},{key:"itemText",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"onKeydown",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"overflowAction[]"},description:"Use an overflow menu instead of action icons. Refer to design documentation for implementation guidelines",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",required:!1},itemText:{name:"string",required:!1},onClick:{name:"func",required:!1},onKeyDown:{name:"func",required:!1}}}}},overflowAriaLabel:{required:!1,tsType:{name:"string"},description:"Sets the text for the OverflowMenu aria label and the OverflowMenu trigger button tooltip.\nOverrides `iconDescription` prop.",type:{name:"string"}},primaryButtonDisabled:{required:!1,tsType:{name:"boolean"},description:"Determines if the primary button is enabled or not",type:{name:"bool"}},primaryButtonHref:{required:!1,tsType:{name:"string"},description:"Optionally specify an href for your Button to become an <a> element",type:{name:"string"}},primaryButtonIcon:{required:!1,tsType:{name:"CarbonIconType"},description:"Optional prop to allow overriding the icon rendering. Can be a React component class",type:{name:"union",value:[{name:"func"},{name:"object"}]}},primaryButtonPlacement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"Determines if the primary button is on the top or bottom of the card",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'bottom'",computed:!1}]}},primaryButtonText:{required:!1,tsType:{name:"string"},description:"The text that's displayed in the primary button",type:{name:"node"}},secondaryButtonHref:{required:!1,tsType:{name:"string"},description:"Optionally specify an href for your Button to become an <a> element",type:{name:"string"}},secondaryButtonIcon:{required:!1,tsType:{name:"CarbonIconType"},description:"Optional prop to allow overriding the icon rendering. Can be a React component class",type:{name:"union",value:[{name:"func"},{name:"object"}]}},secondaryButtonPlacement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"Determines if the secondary button is on the top or bottom of the card",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'bottom'",computed:!1}]}},secondaryButtonText:{required:!1,tsType:{name:"string"},description:"The text that's displayed in the secondary button",type:{name:"node"}},slug:{required:!1,tsType:{name:"union",raw:"ReactNode | boolean",elements:[{name:"ReactNode"},{name:"boolean"}]},description:"**Experimental:** For all cases a `Slug` component can be provided.\nClickable tiles only accept a boolean value of true and display a hollow slug.\n@deprecated please use the `decorator` prop",type:{name:"union",value:[{name:"node"},{name:"bool"}]}},title:{required:!1,tsType:{name:"union",raw:"string | object | ReactNode",elements:[{name:"string"},{name:"object"},{name:"ReactNode"}]},description:"Title that's displayed at the top of the card",type:{name:"union",value:[{name:"string"},{name:"object"},{name:"node"}]}},titleSize:{required:!1,tsType:{name:"union",raw:"'default' | 'large'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Determines title size",type:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'large'",computed:!1}]}},iconDescription:{required:!1,tsType:{name:"string"},description:"Sets the text for the OverflowMenu trigger button tooltip and OverflowMenu aria label,\ngets overridden by the `overflowAriaLabel` prop.\n\n@deprecated Please use the `overflowAriaLabel` prop instead.",type:{name:"string"}}},composes:["PropsWithChildren"]};export{n as P};
