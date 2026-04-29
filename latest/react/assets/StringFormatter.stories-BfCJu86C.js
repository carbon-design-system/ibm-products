var c=Object.defineProperty;var a=(o,e)=>c(o,"name",{value:e,configurable:!0});import{j as t,aH as d,aJ as m,aI as h,e as n}from"./iframe-DU3fWsEq.js";import{useMDXComponents as i}from"./index-Y1jbeCiL.js";import{W as p}from"./Wrap-DnAerGrU.js";import{A as u}from"./index-DTbFSqPm.js";import{S as l}from"./StringFormatter-DzIztfa2.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-11-Bqu2xQ11.js";import"./bucket-20-CmByzEsl.js";import"./devtools-D1O-44XN.js";import"./DefinitionTooltip-DV7wJZxM.js";import"./props-helper-D-MGgUNp.js";import"./useIsomorphicEffect-rJHRE8hL.js";function s(o){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"stringformatter",children:"StringFormatter"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"Deprecated:"}),` This component is deprecated and will be removed in the next
major version. Please migrate to TruncatedText.`]}),`
`]}),`
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
`,t.jsx(d,{children:t.jsx(m,{of:r})}),`
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
`,t.jsx(h,{})]})}a(s,"_createMdxContent");function g(o={}){const{wrapper:e}={...i(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(s,{...o})}):s(o)}a(g,"MDXContent");const x=".storyStringFormatter{margin:2rem}",A={title:"Deprecated/StringFormatter",component:l,tags:["autodocs"],argTypes:{element:{description:"this is a story only prop to showcase the usage of this component in various html tags",options:["p","h1","h2","h3","h4","h5","h6"],control:{type:"select"}}},parameters:{styles:x,docs:{page:g},layout:"fullscreen"},decorators:[o=>n.createElement("div",null,n.createElement(u,{type:"deprecation-notice",text:n.createElement("div",null,"This component is deprecated and will be removed in the next major version. Please migrate to ",n.createElement("a",{href:"/?path=/docs/utilities-truncatedtext--overview"},"TruncatedText"),".")},o()))]},f=a(({element:o,...e})=>n.createElement(p,{element:o},n.createElement(l,{className:"storyStringFormatter",...e})),"Template"),b="Buttons are used to initialize an action, either in the background or foreground of an experience. There are several kinds of buttons. Primary buttons should be used for the principle call to action on the page. Secondary buttons should be used for secondary actions on each page. Danger buttons should be used for a negative action (such as Delete) on the page. Modify the behavior of the button by changing its event properties. Small buttons may be used when there is not enough space for a regular sized button. This issue is most found in tables. Small button should have three words or less. When words are not enough, icons can be used in buttons to better communicate what the button does. Icons are always paired with text.",r=f.bind({});r.args={autoAlign:!1,lines:1,truncate:!0,value:b,width:"200px",tooltipDirection:"bottom-left",element:"p"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`({
  element,
  ...stringFormatterProps
}) => {
  return <Wrap element={element}>
      <StringFormatter className="storyStringFormatter"
    // TODO: handle events with action or local handler.
    // onTodo={action('onTodo log action')}
    {...stringFormatterProps} />
    </Wrap>;
}`,...r.parameters?.docs?.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...r.parameters?.docs?.description}}};const M=["stringFormatter"];export{M as __namedExportsOrder,A as default,r as stringFormatter};
//# sourceMappingURL=StringFormatter.stories-BfCJu86C.js.map
