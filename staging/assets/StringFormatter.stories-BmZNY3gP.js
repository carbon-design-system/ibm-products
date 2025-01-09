import{e as c}from"./index-CPiZ6Cnx.js";import{aw as t,al as j,ax as R,ak as D}from"./index-BogHQN-I.js";import{useMDXComponents as F}from"./index-CUO_02de.js";import"./chunk-NUUEMKO5-CceeWqv-.js";import{c as f,P as l}from"./index-CXyjPnaX.js";import{g as P}from"./devtools-CjVY-wQW.js";import{p as S}from"./settings-iwZeeh4T.js";import{D as A}from"./DefinitionTooltip-BPN6Mdin.js";import{a as M}from"./props-helper-Dlg0HCIz.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CvMLeDc5.js";import"../sb-preview/runtime.js";import"./index-BSHYryQu.js";import"./index-Bsyy8W_U.js";import"./index-Df9so8jS.js";import"./index-DMCuvgYY.js";import"./index-DrFu-skq.js";import"./react-18-C6q_qjn2.js";import"./events-OVwOsPzJ.js";import"./index-DJK44odq.js";const n={TOP:"top",TOP_LEFT:"top-left",TOP_RIGHT:"top-right",BOTTOM:"bottom",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",LEFT:"left",LEFT_BOTTOM:"left-bottom",LEFT_TOP:"left-top",RIGHT:"right",RIGHT_BOTTOM:"right-bottom",RIGHT_TOP:"right-top"},r={TOP:"top",TOP_START:"top-start",TOP_END:"top-end",BOTTOM:"bottom",BOTTOM_START:"bottom-start",BOTTOM_END:"bottom-end",LEFT:"left",LEFT_END:"left-end",LEFT_START:"left-start",RIGHT:"right",RIGHT_END:"right-end",RIGHT_START:"right-start"},N=o=>({[n.TOP_LEFT]:r.TOP_START,[n.TOP_RIGHT]:r.TOP_END,[n.BOTTOM_LEFT]:r.BOTTOM_START,[n.BOTTOM_RIGHT]:r.BOTTOM_END,[n.LEFT_BOTTOM]:r.LEFT_END,[n.LEFT_TOP]:r.LEFT_START,[n.RIGHT_BOTTOM]:r.RIGHT_END,[n.RIGHT_START]:r.RIGHT_START})[o],m=`${S.prefix}--string-formatter`,h="StringFormatter",d={lines:1,tooltipDirection:r.BOTTOM_START,truncate:!1,width:null};let a=c.forwardRef(({className:o,lines:e=d.lines,tooltipDirection:u=d.tooltipDirection,truncate:s=d.truncate,width:T=d.width,value:p,...w},E)=>{const g=c.createElement("span",{className:f(`${m}--content`,{[`${m}--truncate`]:s}),style:{maxWidth:T,WebkitLineClamp:e}},p);return c.createElement("span",{...w,className:f(m,o),ref:E,...P(h)},s?c.createElement(A,{className:`${m}__tooltip`,align:u,definition:p,openOnHover:!0},g):g)});a=S.checkComponentEnabled(a,h);a.displayName=h;a.validateAlignment=()=>(o,e,u)=>{const s=o[e];if(Object.values(n).includes(s)){const p=N(s);console.warn(`"${s}" is a deprecated value for the "${e}" prop on the "${u}" component. Use "${p}" instead. Allowable values are: ${Object.values(r).join(", ")}.`)}};a.propTypes={className:l.string,lines:l.number,tooltipDirection:M([a.validateAlignment(),l.oneOf(Object.values(n),Object.values(r))]),truncate:l.bool,value:l.string.isRequired,width:l.string};a.__docgenInfo={description:`StringFormatter allows for truncating text while displaying a tooltip
overlay on hover or focus with the entirety of the provided copy.`,methods:[{name:"validateAlignment",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"StringFormatter",props:{lines:{defaultValue:{value:"1",computed:!1},description:"Number of lines to clamp value.",type:{name:"number"},required:!1},tooltipDirection:{defaultValue:{value:"'bottom-start'",computed:!1},description:"Specify the direction of the tooltip. Can be either top or bottom.",type:{name:"custom",raw:`allPropTypes([
  StringFormatter.validateAlignment(),
  PropTypes.oneOf(
    Object.values(deprecated_StringFormatterAlignment),
    Object.values(StringFormatterAlignment)
  ),
])`},required:!1},truncate:{defaultValue:{value:"false",computed:!1},description:"Whether or not the value should be truncated.",type:{name:"bool"},required:!1},width:{defaultValue:{value:"null",computed:!1},description:"Maximum width of value which should include",type:{name:"string"},required:!1},className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1},value:{description:"Value to format.",type:{name:"string"},required:!0}}};function b(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...F(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"stringformatter",children:"StringFormatter"}),`
`,t.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#overview",children:"Overview"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#example-usage",children:"Example usage"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,t.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,t.jsx(e.p,{children:`StringFormatter allows for truncating text while displaying a tooltip overlay on
hover or focus with the entirety of the provided copy.`}),`
`,t.jsx(e.h2,{id:"example-usage",children:"Example usage"}),`
`,t.jsx(j,{children:t.jsx(R,{of:i})}),`
`,t.jsx(e.h2,{id:"code-sample",children:"Code sample"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`<StringFormatter
  className="myStringFormatter"
  lines={1}
  truncate={true}
  value="Hello world"
  width="200px"
  tooltipDirection="bottom-left"
/>
`})}),`
`,t.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,t.jsx(D,{})]})}function I(o={}){const{wrapper:e}={...F(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(b,{...o})}):b(o)}const B=".storyStringFormatter{font-size:var(--cds-body-01-font-size, .875rem);font-weight:var(--cds-body-01-font-weight, 400);line-height:var(--cds-body-01-line-height, 1.42857);letter-spacing:var(--cds-body-01-letter-spacing, .16px);margin:2rem;color:var(--cds-text-primary, #161616)}",ae={title:"Experimental/Components/String formatter/StringFormatter",component:a,tags:["autodocs"],parameters:{styles:B,docs:{page:I},layout:"fullscreen"}},H=o=>c.createElement(a,{className:"storyStringFormatter",...o}),L="Buttons are used to initialize an action, either in the background or foreground of an experience. There are several kinds of buttons. Primary buttons should be used for the principle call to action on the page. Secondary buttons should be used for secondary actions on each page. Danger buttons should be used for a negative action (such as Delete) on the page. Modify the behavior of the button by changing its event properties. Small buttons may be used when there is not enough space for a regular sized button. This issue is most found in tables. Small button should have three words or less. When words are not enough, icons can be used in buttons to better communicate what the button does. Icons are always paired with text.",i=H.bind({});i.args={lines:1,truncate:!0,value:L,width:"200px",tooltipDirection:"bottom-left"};var O,v,y,x,_;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  return <StringFormatter className="storyStringFormatter"
  // TODO: handle events with action or local handler.
  // onTodo={action('onTodo log action')}
  {...args} />;
}`,...(y=(v=i.parameters)==null?void 0:v.docs)==null?void 0:y.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(_=(x=i.parameters)==null?void 0:x.docs)==null?void 0:_.description}}};const ie=["stringFormatter"];export{ie as __namedExportsOrder,ae as default,i as stringFormatter};
