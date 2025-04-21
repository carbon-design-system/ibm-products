import{e as p}from"./index-DzvNrmz8.js";import{j as e}from"./index-Cg1swjps.js";import{useMDXComponents as m}from"./index-B7BkHM3Y.js";import"./index-yZ7SzbPB.js";import{S as d}from"./StringFormatter-CA47qgls.js";import{a as h,j as u,C as g}from"./index-CzcKhd7Q.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-Bv4JGo1_.js";import"./preview-CtqmI_Lj.js";import"./iframe-Czcp_UX8.js";import"./DocsRenderer-CFRXHY34-DLQHOBuc.js";import"./client-fwTTGz69.js";import"./index-5As4T26e.js";import"./devtools-B_dijMH7.js";import"./settings-CP9zVSjJ.js";import"./events-OVwOsPzJ.js";import"./index-P6UCShJt.js";import"./DefinitionTooltip-DKyN1THq.js";import"./props-helper-DCsMHcG1.js";import"./useIsomorphicEffect-l5L8NYko.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";function n(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"stringformatter",children:"StringFormatter"}),`
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
`,e.jsx(h,{children:e.jsx(u,{of:r})}),`
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
`,e.jsx(g,{})]})}function x(o={}){const{wrapper:t}={...m(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}const f=".storyStringFormatter{font-size:var(--cds-body-01-font-size, .875rem);font-weight:var(--cds-body-01-font-weight, 400);line-height:var(--cds-body-01-line-height, 1.42857);letter-spacing:var(--cds-body-01-letter-spacing, .16px);margin:2rem;color:var(--cds-text-primary, #161616)}",R={title:"Experimental/Components/String formatter/StringFormatter",component:d,tags:["autodocs"],parameters:{styles:f,docs:{page:x},layout:"fullscreen"}},b=o=>p.createElement(d,{className:"storyStringFormatter",...o}),y="Buttons are used to initialize an action, either in the background or foreground of an experience. There are several kinds of buttons. Primary buttons should be used for the principle call to action on the page. Secondary buttons should be used for secondary actions on each page. Danger buttons should be used for a negative action (such as Delete) on the page. Modify the behavior of the button by changing its event properties. Small buttons may be used when there is not enough space for a regular sized button. This issue is most found in tables. Small button should have three words or less. When words are not enough, icons can be used in buttons to better communicate what the button does. Icons are always paired with text.",r=b.bind({});r.args={lines:1,truncate:!0,value:y,width:"200px",tooltipDirection:"bottom-left"};var s,a,i,l,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  return <StringFormatter className="storyStringFormatter"
  // TODO: handle events with action or local handler.
  // onTodo={action('onTodo log action')}
  {...args} />;
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.description}}};const W=["stringFormatter"];export{W as __namedExportsOrder,R as default,r as stringFormatter};
