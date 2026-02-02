import{j as e,aB as l,aD as c,aC as h,e as n}from"./iframe-BbTYfv9-.js";import{useMDXComponents as a}from"./index-BBorVmTi.js";import{W as m}from"./Wrap-BTpem4Cx.js";import{S as i}from"./StringFormatter-DscWpoWv.js";import"./preload-helper-D9Z9MdNV.js";import"./devtools-KS_k4bKc.js";import"./DefinitionTooltip-BGxvqF2J.js";import"./props-helper-fbCn-Z71.js";import"./useIsomorphicEffect-omIe2Oju.js";function s(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"stringformatter",children:"StringFormatter"}),`
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
`,e.jsx(l,{children:e.jsx(c,{of:r})}),`
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
`,e.jsx(h,{})]})}function d(o={}){const{wrapper:t}={...a(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(s,{...o})}):s(o)}const p=".storyStringFormatter{margin:2rem}",D={title:"Utilities/StringFormatter",component:i,tags:["autodocs"],argTypes:{element:{description:"this is a story only prop to showcase the usage of this component in various html tags",options:["p","h1","h2","h3","h4","h5","h6"],control:{type:"select"}}},parameters:{styles:p,docs:{page:d},layout:"fullscreen"}},u=({element:o,...t})=>n.createElement(m,{element:o},n.createElement(i,{className:"storyStringFormatter",...t})),g="Buttons are used to initialize an action, either in the background or foreground of an experience. There are several kinds of buttons. Primary buttons should be used for the principle call to action on the page. Secondary buttons should be used for secondary actions on each page. Danger buttons should be used for a negative action (such as Delete) on the page. Modify the behavior of the button by changing its event properties. Small buttons may be used when there is not enough space for a regular sized button. This issue is most found in tables. Small button should have three words or less. When words are not enough, icons can be used in buttons to better communicate what the button does. Icons are always paired with text.",r=u.bind({});r.args={autoAlign:!1,lines:1,truncate:!0,value:g,width:"200px",tooltipDirection:"bottom-left",element:"p"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`({
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
NB no need for a 'Playground' because all stories have all controls anyway.`,...r.parameters?.docs?.description}}};const C=["stringFormatter"];export{C as __namedExportsOrder,D as default,r as stringFormatter};
//# sourceMappingURL=StringFormatter.stories-lhZkJ7Al.js.map
