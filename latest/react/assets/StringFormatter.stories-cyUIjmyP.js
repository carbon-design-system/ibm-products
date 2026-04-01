var c=Object.defineProperty;var n=(o,e)=>c(o,"name",{value:e,configurable:!0});import{j as t,aD as h,aF as m,aE as d,e as s}from"./iframe-MbX6O_l3.js";import{useMDXComponents as i}from"./index-DTU5FsM8.js";import{W as p}from"./Wrap-CumdAQ2J.js";import{S as l}from"./StringFormatter-BUYro5cO.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-UxvtFMDS.js";import"./DefinitionTooltip-B78ETCiz.js";import"./props-helper-As6vworV.js";import"./useIsomorphicEffect-CPUpql7u.js";function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"stringformatter",children:"StringFormatter"}),`
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
`,t.jsx(h,{children:t.jsx(m,{of:r})}),`
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
`,t.jsx(d,{})]})}n(a,"_createMdxContent");function u(o={}){const{wrapper:e}={...i(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(a,{...o})}):a(o)}n(u,"MDXContent");const g=".storyStringFormatter{margin:2rem}",E={title:"Utilities/StringFormatter",component:l,tags:["autodocs"],argTypes:{element:{description:"this is a story only prop to showcase the usage of this component in various html tags",options:["p","h1","h2","h3","h4","h5","h6"],control:{type:"select"}}},parameters:{styles:g,docs:{page:u},layout:"fullscreen"}},x=n(({element:o,...e})=>s.createElement(p,{element:o},s.createElement(l,{className:"storyStringFormatter",...e})),"Template"),f="Buttons are used to initialize an action, either in the background or foreground of an experience. There are several kinds of buttons. Primary buttons should be used for the principle call to action on the page. Secondary buttons should be used for secondary actions on each page. Danger buttons should be used for a negative action (such as Delete) on the page. Modify the behavior of the button by changing its event properties. Small buttons may be used when there is not enough space for a regular sized button. This issue is most found in tables. Small button should have three words or less. When words are not enough, icons can be used in buttons to better communicate what the button does. Icons are always paired with text.",r=x.bind({});r.args={autoAlign:!1,lines:1,truncate:!0,value:f,width:"200px",tooltipDirection:"bottom-left",element:"p"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`({
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
NB no need for a 'Playground' because all stories have all controls anyway.`,...r.parameters?.docs?.description}}};const O=["stringFormatter"];export{O as __namedExportsOrder,E as default,r as stringFormatter};
//# sourceMappingURL=StringFormatter.stories-cyUIjmyP.js.map
