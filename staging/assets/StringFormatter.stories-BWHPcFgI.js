import{e as n}from"./index-DtHxqM--.js";import{j as e}from"./index-DgLvjnYm.js";import{useMDXComponents as p}from"./index-CseD6FCQ.js";import"./index-R5I2sGCW.js";import{W as d}from"./Wrap-v83oJNN_.js";import{S as h}from"./StringFormatter-CkRVS3hj.js";import{a as u,j as g,C as x}from"./index-HDDpa7CF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CiYgQLeJ.js";import"./preview-BDYrD1iz.js";import"./iframe-C04Vc2cR.js";import"./DocsRenderer-CFRXHY34-BeCith_b.js";import"./client-CZTHzaKS.js";import"./index-CGLP8AGt.js";import"./devtools-DANatd7d.js";import"./settings-xxMXFJdE.js";import"./events-OVwOsPzJ.js";import"./index-BeQw6zoj.js";import"./DefinitionTooltip-Bm70nIXa.js";import"./props-helper-CgskTpCX.js";import"./useIsomorphicEffect-DztsuiUB.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";function s(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...p(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"stringformatter",children:"StringFormatter"}),`
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
`,e.jsx(u,{children:e.jsx(g,{of:r})}),`
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
`,e.jsx(x,{})]})}function f(o={}){const{wrapper:t}={...p(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(s,{...o})}):s(o)}const y=".storyStringFormatter{margin:2rem}",q={title:"Experimental/Components/String formatter/StringFormatter",component:h,tags:["autodocs"],argTypes:{element:{description:"this is a story only prop to showcase the usage of this component in various html tags",options:["p","h1","h2","h3","h4","h5","h6"],control:{type:"select"}}},parameters:{styles:y,docs:{page:f},layout:"fullscreen"}},b=({element:o,...t})=>n.createElement(d,{element:o},n.createElement(h,{className:"storyStringFormatter",...t})),j="Buttons are used to initialize an action, either in the background or foreground of an experience. There are several kinds of buttons. Primary buttons should be used for the principle call to action on the page. Secondary buttons should be used for secondary actions on each page. Danger buttons should be used for a negative action (such as Delete) on the page. Modify the behavior of the button by changing its event properties. Small buttons may be used when there is not enough space for a regular sized button. This issue is most found in tables. Small button should have three words or less. When words are not enough, icons can be used in buttons to better communicate what the button does. Icons are always paired with text.",r=b.bind({});r.args={lines:1,truncate:!0,value:j,width:"200px",tooltipDirection:"bottom-left",element:"p"};var a,i,l,m,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`({
  element,
  ...stringFormatterProps
}) => {
  return <Wrap element={element}>
      <StringFormatter className="storyStringFormatter"
    // TODO: handle events with action or local handler.
    // onTodo={action('onTodo log action')}
    {...stringFormatterProps} />
    </Wrap>;
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.description}}};const G=["stringFormatter"];export{G as __namedExportsOrder,q as default,r as stringFormatter};
