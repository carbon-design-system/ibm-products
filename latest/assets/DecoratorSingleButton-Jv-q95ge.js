import{e as o}from"./index-DzvNrmz8.js";import{P as e}from"./index-5As4T26e.js";import{g as l}from"./devtools-CskDVa8y.js";import{p as s}from"./props-helper-BZh4EldX.js";import{p as d}from"./settings-DbzZchXt.js";import{D as u}from"./DecoratorBase-CLYmklzv.js";const t="DecoratorSingleButton";let n=o.forwardRef((r,a)=>{const i=s(r,["href","kind","onClickLabel","onClickValue","onContextMenuLabel","onContextMenuValue"]);return o.createElement(u,{ref:a,...i,kind:"single-button",...l(t)})});n.deprecated={level:"warn",details:"This component is deprecated"};n=d.checkComponentEnabled(n,t);n.displayName=t;n.propTypes={className:e.string,disabled:e.bool,hideIcon:e.bool,label:e.string,onClick:e.func,onContextMenu:e.func,score:e.number,scoreThresholds:e.arrayOf(e.number),setLabelTitle:e.func,small:e.bool,theme:e.oneOf(["light","dark"]),truncateValue:e.oneOfType([e.oneOf(["end","start"]),e.shape({maxLength:e.number,front:e.number,back:e.number})]),value:e.string.isRequired,valueTitle:e.string};n.__docgenInfo={description:`The DecoratorSingleButton groups a key/value pair to behave like a button.
@deprecated This component is deprecated`,methods:[],displayName:"DecoratorSingleButton",props:{className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1},disabled:{description:'`disabled` only applies if `kind` is "single-button" or "dual-button".',type:{name:"bool"},required:!1},hideIcon:{description:"Do not show the icon, regardless of score.",type:{name:"bool"},required:!1},label:{description:"The label for the data.",type:{name:"string"},required:!1},onClick:{description:"Optional callback function.\nReturns two objects: `event` and `{ score, label, value, magnitude }`",type:{name:"func"},required:!1},onContextMenu:{description:"Optional callback function.\nReturns two objects: `event` and `{ score, label, value, magnitude }`",type:{name:"func"},required:!1},score:{description:"Used in conjunction with `scoreThresholds`, determines the color, shape, and type of magnitude of the icon.\n\nIf you don't want to show the icon at all, set `hideIcon={true}`.",type:{name:"number"},required:!1},scoreThresholds:{description:'Used in conjunction with `score`, determines the color, shape, and type of magnitude of the icon.\n\nAn array of 4 numbers determines the range of thresholds.\n\nExample using `[0, 4, 7, 10]`:\n<br/>- `<= 0` "Benign"\n<br/>- `1-3` "Low"\n<br/>- `4-6` "Medium"\n<br/>- `7-9` "High"\n<br/>- `>= 10` "Critical"\n<br/>- `NaN` "Unknown"',type:{name:"arrayOf",value:{name:"number"}},required:!1},setLabelTitle:{description:'Optional callback function for building a more detailed descriptive text.\nReturns `score`, `scoreThresholds`, `magnitude`.\n\nTypical description is in the form of\n\'"(magnitude)" magnitude: score (score) out of (last element of scoreThresholds array)\'.\n\nE.g. `"Medium" magnitude: score 5 out of 10`.\n\nIf not defined, the title will default to the `label` prop.',type:{name:"func"},required:!1},small:{description:"Styled smaller to better fit inline with text.",type:{name:"bool"},required:!1},theme:{description:`Override the default theme of the component.
Useful if you want "invert" the component's theme.`,type:{name:"enum",value:[{value:"'light'",computed:!1},{value:"'dark'",computed:!1}]},required:!1},truncateValue:{description:"If not defined, it will behave as `display:inline-block`.",type:{name:"union",value:[{name:"enum",value:[{value:"'end'",computed:!1},{value:"'start'",computed:!1}]},{name:"shape",value:{maxLength:{name:"number",required:!1},front:{name:"number",required:!1},back:{name:"number",required:!1}}}]},required:!1},value:{description:"The value of the data.",type:{name:"string"},required:!0},valueTitle:{description:"Overrides the default title for the Decorator's value.",type:{name:"string"},required:!1}}};export{n as D};
