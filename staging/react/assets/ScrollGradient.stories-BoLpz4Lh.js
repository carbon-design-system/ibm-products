import{el as e,ev as p,em as h,eo as u,en as x,e as t}from"./iframe-Cbdf71kV.js";import{useMDXComponents as c}from"./index-Bz9OSaUz.js";import{S as o}from"./ScrollGradient-Dzzr4186.js";import"./devtools-BsT0_Owc.js";import"./useIsomorphicEffect-BHn7yZvq.js";function i(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...c(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"ScrollGradient",component:o}),`
`,e.jsx(n.h1,{id:"scrollgradient",children:"ScrollGradient"}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:`The ScrollGradient implements gradient fades in horizontal and vertical
directions based on the user's scroll position. Visually, it informs the user of
more content that can be scrolled to.`}),`
`,e.jsx(n.h2,{id:"example-usage",children:"Example usage"}),`
`,e.jsx(h,{children:e.jsx(u,{of:l})}),`
`,e.jsx(n.h2,{id:"code-sample",children:"Code sample"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<ScrollGradient>
  <p>Scrolling content here</p>
</ScrollGradient>
`})}),`
`,e.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(x,{})]})}function g(r={}){const{wrapper:n}={...c(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}const j=".sb-show-main,.docs-story{background-color:var(--cds-layer-01, #f4f4f4)!important}.templateContainer{overflow:auto;margin:auto;block-size:400px;inline-size:300px;resize:both}.templateContainer-sm{overflow:auto;margin:auto;block-size:250px;inline-size:300px;resize:both}",s="Use case specific content to display in the ScrollGradient component. Use case specific content to display in the ScrollGradient component. Use case specific content to display in the ScrollGradient component. ",d=t.createElement("div",{style:{padding:16}},t.createElement("p",null,s),t.createElement("p",null,s),t.createElement("p",null,s),t.createElement("p",null,s),t.createElement("p",null,s),t.createElement("p",null,s)),b={title:"Utilities/ScrollGradient",component:o,tags:["autodocs"],parameters:{styles:j,docs:{page:g}}},m={width:"100%",height:"100%"},f=r=>t.createElement("div",{className:"templateContainer"},t.createElement(o,{style:m,className:"myScrollGradient",...r})),y=r=>t.createElement("div",{className:"templateContainer-sm"},t.createElement(o,{style:m,className:"myScrollGradient",...r})),l=f.bind({});l.args={children:d};const a=y.bind({});a.args={children:t.createElement("div",{style:{width:"1500px"}},d)};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => {
  return <div className="templateContainer">
      <ScrollGradient style={style} className={'myScrollGradient'} {...args} />
    </div>;
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  return <div className="templateContainer-sm">
      <ScrollGradient style={style} className={'myScrollGradient'} {...args} />
    </div>;
}`,...a.parameters?.docs?.source}}};const w=["scrollGradientVertical","scrollGradientXAndYAxis"];export{w as __namedExportsOrder,b as default,l as scrollGradientVertical,a as scrollGradientXAndYAxis};
