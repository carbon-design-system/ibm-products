import{e as c,r as R}from"./index-CPiZ6Cnx.js";import{j as t}from"./index-B83en7q5.js";import{useMDXComponents as S}from"./index-CUO_02de.js";import"./index-Kr43vjMr.js";import{c as b,P as l}from"./index-BPCFiO9b.js";import{g as D}from"./devtools-Ca6Wku6c.js";import{p as w}from"./settings-41bnSjHp.js";import{D as P}from"./DefinitionTooltip-3iCit3mp.js";import{a as A}from"./props-helper-C4WGU-Xx.js";import{u as M}from"./useIsomorphicEffect-CqAX3nH-.js";import{a as N,f as I,C as B}from"./index-C-2_Eo4o.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-ZKO_qc5e.js";import"./preview-BL8wQuie.js";import"./iframe-necW5_o2.js";import"./DocsRenderer-CFRXHY34-GHw2_TbQ.js";import"./client-BCQEsWlk.js";import"./events-OVwOsPzJ.js";import"./index-H2wBg9na.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";const n={TOP:"top",TOP_LEFT:"top-left",TOP_RIGHT:"top-right",BOTTOM:"bottom",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",LEFT:"left",LEFT_BOTTOM:"left-bottom",LEFT_TOP:"left-top",RIGHT:"right",RIGHT_BOTTOM:"right-bottom",RIGHT_TOP:"right-top"},r={TOP:"top",TOP_START:"top-start",TOP_END:"top-end",BOTTOM:"bottom",BOTTOM_START:"bottom-start",BOTTOM_END:"bottom-end",LEFT:"left",LEFT_END:"left-end",LEFT_START:"left-start",RIGHT:"right",RIGHT_END:"right-end",RIGHT_START:"right-start"},C=o=>({[n.TOP_LEFT]:r.TOP_START,[n.TOP_RIGHT]:r.TOP_END,[n.BOTTOM_LEFT]:r.BOTTOM_START,[n.BOTTOM_RIGHT]:r.BOTTOM_END,[n.LEFT_BOTTOM]:r.LEFT_END,[n.LEFT_TOP]:r.LEFT_START,[n.RIGHT_BOTTOM]:r.RIGHT_END,[n.RIGHT_START]:r.RIGHT_START})[o],m=`${w.prefix}--string-formatter`,g="StringFormatter",d={lines:1,tooltipDirection:r.BOTTOM_START,truncate:!1,width:null};let a=c.forwardRef(({className:o,lines:e=d.lines,tooltipDirection:u=d.tooltipDirection,truncate:s=d.truncate,width:h=d.width,value:p,...E},j)=>{const T=R.useRef(null);M(()=>{T.current.style.maxWidth=h,T.current.style.WebkitLineClamp=e},[e,h]);const f=c.createElement("span",{ref:T,className:b(`${m}--content`,{[`${m}--truncate`]:s})},p);return c.createElement("span",{...E,className:b(m,o),ref:j,...D(g)},s?c.createElement(P,{className:`${m}__tooltip`,align:u,definition:p,openOnHover:!0},f):f)});a=w.checkComponentEnabled(a,g);a.displayName=g;a.validateAlignment=()=>(o,e,u)=>{const s=o[e];if(Object.values(n).includes(s)){const p=C(s);console.warn(`"${s}" is a deprecated value for the "${e}" prop on the "${u}" component. Use "${p}" instead. Allowable values are: ${Object.values(r).join(", ")}.`)}};a.propTypes={className:l.string,lines:l.number,tooltipDirection:A([a.validateAlignment(),l.oneOf(Object.values(n),Object.values(r))]),truncate:l.bool,value:l.string.isRequired,width:l.string};a.__docgenInfo={description:`StringFormatter allows for truncating text while displaying a tooltip
overlay on hover or focus with the entirety of the provided copy.`,methods:[{name:"validateAlignment",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"StringFormatter",props:{lines:{defaultValue:{value:"1",computed:!1},description:"Number of lines to clamp value.",type:{name:"number"},required:!1},tooltipDirection:{defaultValue:{value:"'bottom-start'",computed:!1},description:"Specify the direction of the tooltip. Can be either top or bottom.",type:{name:"custom",raw:`allPropTypes([
  StringFormatter.validateAlignment(),
  PropTypes.oneOf(
    Object.values(deprecated_StringFormatterAlignment),
    Object.values(StringFormatterAlignment)
  ),
])`},required:!1},truncate:{defaultValue:{value:"false",computed:!1},description:"Whether or not the value should be truncated.",type:{name:"bool"},required:!1},width:{defaultValue:{value:"null",computed:!1},description:"Maximum width of value which should include",type:{name:"string"},required:!1},className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1},value:{description:"Value to format.",type:{name:"string"},required:!0}}};function O(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...S(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"stringformatter",children:"StringFormatter"}),`
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
`,t.jsx(N,{children:t.jsx(I,{of:i})}),`
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
`,t.jsx(B,{})]})}function H(o={}){const{wrapper:e}={...S(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(O,{...o})}):O(o)}const L=".storyStringFormatter{font-size:var(--cds-body-01-font-size, .875rem);font-weight:var(--cds-body-01-font-weight, 400);line-height:var(--cds-body-01-line-height, 1.42857);letter-spacing:var(--cds-body-01-letter-spacing, .16px);margin:2rem;color:var(--cds-text-primary, #161616)}",ce={title:"Experimental/Components/String formatter/StringFormatter",component:a,tags:["autodocs"],parameters:{styles:L,docs:{page:H},layout:"fullscreen"}},G=o=>c.createElement(a,{className:"storyStringFormatter",...o}),$="Buttons are used to initialize an action, either in the background or foreground of an experience. There are several kinds of buttons. Primary buttons should be used for the principle call to action on the page. Secondary buttons should be used for secondary actions on each page. Danger buttons should be used for a negative action (such as Delete) on the page. Modify the behavior of the button by changing its event properties. Small buttons may be used when there is not enough space for a regular sized button. This issue is most found in tables. Small button should have three words or less. When words are not enough, icons can be used in buttons to better communicate what the button does. Icons are always paired with text.",i=G.bind({});i.args={lines:1,truncate:!0,value:$,width:"200px",tooltipDirection:"bottom-left"};var v,y,x,_,F;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  return <StringFormatter className="storyStringFormatter"
  // TODO: handle events with action or local handler.
  // onTodo={action('onTodo log action')}
  {...args} />;
}`,...(x=(y=i.parameters)==null?void 0:y.docs)==null?void 0:x.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(F=(_=i.parameters)==null?void 0:_.docs)==null?void 0:F.description}}};const pe=["stringFormatter"];export{pe as __namedExportsOrder,ce as default,i as stringFormatter};
