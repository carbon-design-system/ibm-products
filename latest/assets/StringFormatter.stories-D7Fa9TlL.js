import{p as _,j as e}from"./settings-DEdZ0TrD.js";import{useMDXComponents as F}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-CyASr9Ca.js";import{e as w,i as R,C as E}from"./index-CimYzH0T.js";import{R as D}from"./index-BwDkhjyp.js";import{P as l}from"./index-Dk74W0Oi.js";import{c as g}from"./floating-ui.core.mjs-LzsX8FoD.js";import{g as P}from"./devtools-BMJcATO0.js";import{D as A}from"./DefinitionTooltip-BKLgLTUt.js";import{a as M}from"./props-helper-Bq60RLbY.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./events-BwXSUnsA.js";import"./index-CtP8jiW9.js";import"./iframe-BXu0dMI8.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./index-BONylQH5.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";const n={TOP:"top",TOP_LEFT:"top-left",TOP_RIGHT:"top-right",BOTTOM:"bottom",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",LEFT:"left",LEFT_BOTTOM:"left-bottom",LEFT_TOP:"left-top",RIGHT:"right",RIGHT_BOTTOM:"right-bottom",RIGHT_TOP:"right-top"},r={TOP:"top",TOP_START:"top-start",TOP_END:"top-end",BOTTOM:"bottom",BOTTOM_START:"bottom-start",BOTTOM_END:"bottom-end",LEFT:"left",LEFT_END:"left-end",LEFT_START:"left-start",RIGHT:"right",RIGHT_END:"right-end",RIGHT_START:"right-start"},N=o=>({[n.TOP_LEFT]:r.TOP_START,[n.TOP_RIGHT]:r.TOP_END,[n.BOTTOM_LEFT]:r.BOTTOM_START,[n.BOTTOM_RIGHT]:r.BOTTOM_END,[n.LEFT_BOTTOM]:r.LEFT_END,[n.LEFT_TOP]:r.LEFT_START,[n.RIGHT_BOTTOM]:r.RIGHT_END,[n.RIGHT_START]:r.RIGHT_START})[o],p=`${_.prefix}--string-formatter`,u="StringFormatter",d={lines:1,tooltipDirection:r.BOTTOM_START,truncate:!1,width:null};let a=D.forwardRef(({className:o,lines:t=d.lines,tooltipDirection:m=d.tooltipDirection,truncate:s=d.truncate,width:h=d.width,value:c,...S},j)=>{const T=e.jsx("span",{className:g(`${p}--content`,{[`${p}--truncate`]:s}),style:{maxWidth:h,WebkitLineClamp:t},children:c});return e.jsx("span",{...S,className:g(p,o),ref:j,...P(u),children:s?e.jsx(A,{className:`${p}__tooltip`,align:m,definition:c,openOnHover:!0,children:T}):T})});a=_.checkComponentEnabled(a,u);a.displayName=u;a.validateAlignment=()=>(o,t,m)=>{const s=o[t];if(Object.values(n).includes(s)){const c=N(s);console.warn(`"${s}" is a deprecated value for the "${t}" prop on the "${m}" component. Use "${c}" instead. Allowable values are: ${Object.values(r).join(", ")}.`)}};a.propTypes={className:l.string,lines:l.number,tooltipDirection:M([a.validateAlignment(),l.oneOf(Object.values(n),Object.values(r))]),truncate:l.bool,value:l.string.isRequired,width:l.string};a.__docgenInfo={description:`StringFormatter allows for truncating text while displaying a tooltip
overlay on hover or focus with the entirety of the provided copy.`,methods:[{name:"validateAlignment",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"StringFormatter",props:{lines:{defaultValue:{value:"1",computed:!1},description:"Number of lines to clamp value.",type:{name:"number"},required:!1},tooltipDirection:{defaultValue:{value:"'bottom-start'",computed:!1},description:"Specify the direction of the tooltip. Can be either top or bottom.",type:{name:"custom",raw:`allPropTypes([
  StringFormatter.validateAlignment(),
  PropTypes.oneOf(
    Object.values(deprecated_StringFormatterAlignment),
    Object.values(StringFormatterAlignment)
  ),
])`},required:!1},truncate:{defaultValue:{value:"false",computed:!1},description:"Whether or not the value should be truncated.",type:{name:"bool"},required:!1},width:{defaultValue:{value:"null",computed:!1},description:"Maximum width of value which should include",type:{name:"string"},required:!1},className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1},value:{description:"Value to format.",type:{name:"string"},required:!0}}};function f(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...F(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"stringformatter",children:"StringFormatter"}),`
`,e.jsx(t.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(t.p,{children:`StringFormatter allows for truncating text while displaying a tooltip overlay on
hover or focus with the entirety of the provided copy.`}),`
`,e.jsx(t.h2,{id:"example-usage",children:"Example usage"}),`
`,e.jsx(w,{children:e.jsx(R,{of:i})}),`
`,e.jsx(t.h2,{id:"code-sample",children:"Code sample"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`<StringFormatter
  className="myStringFormatter"
  lines={1}
  truncate={true}
  value="Hello world"
  width="200px"
  tooltipDirection="bottom-left"
/>
`})}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(E,{})]})}function I(o={}){const{wrapper:t}={...F(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(f,{...o})}):f(o)}const B=".storyStringFormatter{font-size:var(--cds-body-01-font-size, .875rem);font-weight:var(--cds-body-01-font-weight, 400);line-height:var(--cds-body-01-line-height, 1.42857);letter-spacing:var(--cds-body-01-letter-spacing, .16px);margin:2rem;color:var(--cds-text-primary, #161616)}",se={title:"Experimental/Components/String formatter/StringFormatter",component:a,tags:["autodocs"],parameters:{styles:B,docs:{page:I},layout:"fullscreen"}},C=o=>e.jsx(a,{className:"storyStringFormatter",...o}),H="Buttons are used to initialize an action, either in the background or foreground of an experience. There are several kinds of buttons. Primary buttons should be used for the principle call to action on the page. Secondary buttons should be used for secondary actions on each page. Danger buttons should be used for a negative action (such as Delete) on the page. Modify the behavior of the button by changing its event properties. Small buttons may be used when there is not enough space for a regular sized button. This issue is most found in tables. Small button should have three words or less. When words are not enough, icons can be used in buttons to better communicate what the button does. Icons are always paired with text.",i=C.bind({});i.args={lines:1,truncate:!0,value:H,width:"200px",tooltipDirection:"bottom-left"};var b,O,v,x,y;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  return <StringFormatter className="storyStringFormatter"
  // TODO: handle events with action or local handler.
  // onTodo={action('onTodo log action')}
  {...args} />;
}`,...(v=(O=i.parameters)==null?void 0:O.docs)==null?void 0:v.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.description}}};const le=["stringFormatter"];export{le as __namedExportsOrder,se as default,i as stringFormatter};
