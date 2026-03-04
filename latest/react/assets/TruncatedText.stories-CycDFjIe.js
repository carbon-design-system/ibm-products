var h=Object.defineProperty;var r=(n,t)=>h(n,"name",{value:t,configurable:!0});import{j as e,aA as u,aC as m,aB as x,e as a}from"./iframe-LiaStyBs.js";import{useMDXComponents as l}from"./index-CsCkY5B2.js";import{T as c}from"./TruncatedText-DpVQNwhb.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-CUjvjodF.js";const g=".truncated-text-stories__viewport{font-size:var(--cds-body-01-font-size, .875rem);font-weight:var(--cds-body-01-font-weight, 400);line-height:var(--cds-body-01-line-height, 1.42857);letter-spacing:var(--cds-body-01-letter-spacing, .16px);inline-size:100%;max-inline-size:900px}";function i(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"truncatedtext",children:"TruncatedText"}),`
`,e.jsx(t.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(t.p,{children:`The truncated text utility can truncate text based on a specified number of
lines, provided via a prop. It offers two configurable options for revealing the
full content:`}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:["Tooltip mode ",e.jsx(t.code,{children:'type="tooltip"'}),`: Displays the full text in a tooltip overlay on
hover.`]}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:["Expandable mode ",e.jsx(t.code,{children:'type="expand"'}),`: Reveals the complete content through
collapsible “Read more” / “Read less” toggles. These labels can be customized
using the `,e.jsx(t.code,{children:"expandLabel"})," and ",e.jsx(t.code,{children:"collapseLabel"})," attributes on the component."]}),`
`]}),`
`]}),`
`,e.jsx(t.h2,{id:"example-usage",children:"Example usage"}),`
`,e.jsx(u,{children:e.jsx(m,{of:o})}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(x,{})]})}r(i,"_createMdxContent");function b(n={}){const{wrapper:t}={...l(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}r(b,"MDXContent");const f="truncated-text-stories",d={align:"top",autoAlign:!1,collapseLabel:"View less",expandLabel:"View more",id:"example-id",lines:3,value:"Buttons are used to initialize an action, either in the background or foreground of an experience. There are several kinds of buttons. Primary buttons should be used for the principle call to action on the page. Secondary buttons should be used for secondary actions on each page. Danger buttons should be used for a negative action (such as Delete) on the page. Modify the behavior of the button by changing its event properties. Small buttons may be used when there is not enough space for a regular sized button. This issue is most found in tables. Small button should have three words or less. When words are not enough, icons can be used in buttons to better communicate what the button does. Icons are always paired with text.",type:"tooltip"},C={title:"Utilities/TruncatedText",component:c,tags:["autodocs"],parameters:{styles:g,layout:"centered",docs:{page:b}},argTypes:{align:{options:["top","top-left","top-right","bottom","bottom-left","bottom-right","left","left-bottom","left-top","right","right-bottom","right-top"],control:{type:"select"}}}},p=r(n=>a.createElement("div",{className:`${f}__viewport`},a.createElement(c,{...n})),"Template"),o=p.bind({});o.args={...d};const s=p.bind({});s.args={...d,type:"expand"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  return <div className={\`\${storyClass}__viewport\`}>
      <TruncatedText {...args} />
    </div>;
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
  return <div className={\`\${storyClass}__viewport\`}>
      <TruncatedText {...args} />
    </div>;
}`,...s.parameters?.docs?.source}}};const E=["WithTooltip","WithExpand"];export{s as WithExpand,o as WithTooltip,E as __namedExportsOrder,C as default};
//# sourceMappingURL=TruncatedText.stories-CycDFjIe.js.map
