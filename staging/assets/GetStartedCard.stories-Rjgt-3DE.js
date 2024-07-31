import{j as e,p as R}from"./settings-Bk-Ww79A.js";import{useMDXComponents as D}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-Dpubv1Qy.js";import{e as p,i as u,C as _}from"./index-wBCg0-F9.js";import{C as N}from"./story-helper-Cn6RZn1q.js";import{a as z}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{u as E}from"./useMergedRefs-DoviDd4t.js";import{R as L}from"./index-BwDkhjyp.js";import{P as t}from"./index-Dk74W0Oi.js";import{g as B}from"./devtools-jK7s13u1.js";import{C as X}from"./Card-C0HOKrv2.js";import{a as F}from"./bucket-16-BPBZChqC.js";import{d as K}from"./bucket-14-BWqht3cs.js";import{b as U}from"./bucket-0-W33F5V9e.js";import{C as I}from"./bucket-4-CVgtr9ST.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./events-CiqBCP_Q.js";import"./index-8ToAQMOn.js";import"./index-BONylQH5.js";import"./iframe-r8cxUnT0.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-BjQFKvNH.js";import"./isSymbol-BZYRlrjc.js";import"./index-DrFu-skq.js";import"./tslib.es6-B4_xh3D5.js";import"./v4-CQkTLCs1.js";import"./index-pjE0epes.js";import"./Text-BVB9JT_I.js";import"./index-Bxn63eqr.js";import"./useAttachedMenu-Cur6rMAi.js";import"./bucket-12-CjYCkBh9.js";import"./wrapFocus-CuszVIVc.js";import"./mergeRefs-CTUecegF.js";import"./index-Cnj8eq3S.js";import"./LayerContext-DbU-6VX4.js";import"./bucket-6-GhvU-pGQ.js";import"./bucket-9-nWRGrQ7I.js";const h="GetStartedCard";let n=L.forwardRef(({...a},r)=>e.jsx(X,{getStarted:!0,ref:r,...a,...B(h)}));n=R.checkComponentEnabled(n,h);n.displayName=h;n.propTypes={className:t.string,disabled:t.bool,footerActionIcon:t.oneOfType([t.func,t.object]),label:t.oneOfType([t.string,t.object,t.node]),media:t.node,metadata:t.arrayOf(t.shape({id:t.string,icon:t.oneOfType([t.func,t.object]),iconDescription:t.string})),onClick:t.func.isRequired,pictogram:t.oneOfType([t.func,t.object]),sequence:t.number,status:t.oneOf(["complete","incomplete"]),title:t.oneOfType([t.string,t.object,t.node])};n.__docgenInfo={description:"GetStartedCard a card with icon, number, and media variants",methods:[],displayName:"GetStartedCard",props:{className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1},disabled:{description:"Optional if the card should be disabled",type:{name:"bool"},required:!1},footerActionIcon:{description:"Provides the action icon that's displayed at the footer of the card",type:{name:"union",value:[{name:"func"},{name:"object"}]},required:!1},label:{description:"Optional label for the top of the card",type:{name:"union",value:[{name:"string"},{name:"object"},{name:"node"}]},required:!1},media:{description:"Optional media content like an image to be placed in the card",type:{name:"node"},required:!1},metadata:{description:"Icons that are displayed on the card showing the time and skill needed",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",required:!1},icon:{name:"union",value:[{name:"func"},{name:"object"}],required:!1},iconDescription:{name:"string",required:!1}}}},required:!1},onClick:{description:"Provides the callback for a clickable card",type:{name:"func"},required:!0},pictogram:{description:"Provides the icon that's displayed at the top of the card",type:{name:"union",value:[{name:"func"},{name:"object"}]},required:!1},sequence:{description:"Provides number for card for tasks in a sequential order",type:{name:"number"},required:!1},status:{description:"Provides the status that's displayed at the top of the card",type:{name:"enum",value:[{value:"'complete'",computed:!1},{value:"'incomplete'",computed:!1}]},required:!1},title:{description:"Title that's displayed at the top of the card",type:{name:"union",value:[{name:"string"},{name:"object"},{name:"node"}]},required:!1}}};function f(a){const r={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ul:"ul",...D(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"getstartedcard",children:"GetStartedCard"}),`
`,e.jsx(r.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(r.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(p,{children:e.jsx(u,{of:o})}),`
`,e.jsx(r.h2,{id:"example-usage",children:"Example usage"}),`
`,e.jsx(r.h3,{id:"with-sequence",children:"with Sequence"}),`
`,e.jsx(p,{children:e.jsx(u,{of:i})}),`
`,e.jsx(r.h3,{id:"with-media-and-pictogram",children:"with Media and Pictogram"}),`
`,e.jsx(p,{children:e.jsx(u,{of:s})}),`
`,e.jsx(r.h3,{id:"with-media-and-sequence",children:"with Media and Sequence"}),`
`,e.jsx(p,{children:e.jsx(u,{of:d})}),`
`,e.jsx(r.h2,{id:"code-sample",children:"Code sample"}),`
`,e.jsx(N,{exampleDirectory:"GetStartedCard"}),`
`,e.jsx(r.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(_,{})]})}function $(a={}){const{wrapper:r}={...D(),...a.components};return r?e.jsx(r,{...a,children:e.jsx(f,{...a})}):f(a)}const M=""+new URL("abstract-image-KeSi23KF.svg",import.meta.url).href,l={label:"Label",title:"Title",metadata:[{id:"1",icon:a=>e.jsx(F,{size:16,...a}),iconDescription:"2 mins"},{id:"2",icon:a=>e.jsx(K,{size:16,...a}),iconDescription:"Beginner"}],footerActionIcon:a=>e.jsx(U,{size:16,...a}),onClick:z("on click")},Ae={title:"IBM Products/Onboarding/GetStartedCard",component:n,tags:["autodocs"],parameters:{docs:{page:$}},decorators:[a=>{const r=E();return e.jsx("div",{className:`${r}--grid`,children:a()})}]},m=a=>{const{children:r,...A}=a;return e.jsx(n,{label:"Prepare your data",title:"Generate synthetic Tabular data",...A,children:r})},o=m.bind({});o.args={...l,pictogram:a=>e.jsx(I,{size:32,...a})};const i=m.bind({});i.args={...l,sequence:3};const s=m.bind({});s.args={...l,pictogram:a=>e.jsx(I,{size:32,...a}),media:e.jsx("img",{src:M,alt:"abstract Image"})};const d=m.bind({});d.args={...l,sequence:3,media:e.jsx("img",{src:M,alt:"abstract Image"})};const c=m.bind({});c.args={...l,sequence:3,disabled:!0};var g,b,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`opts => {
  const {
    children,
    ...args
  } = opts;
  return <GetStartedCard label="Prepare your data" title="Generate synthetic Tabular data" {...args}>
      {children}
    </GetStartedCard>;
}`,...(x=(b=o.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var j,y,C;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`opts => {
  const {
    children,
    ...args
  } = opts;
  return <GetStartedCard label="Prepare your data" title="Generate synthetic Tabular data" {...args}>
      {children}
    </GetStartedCard>;
}`,...(C=(y=i.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var S,v,q;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`opts => {
  const {
    children,
    ...args
  } = opts;
  return <GetStartedCard label="Prepare your data" title="Generate synthetic Tabular data" {...args}>
      {children}
    </GetStartedCard>;
}`,...(q=(v=s.parameters)==null?void 0:v.docs)==null?void 0:q.source}}};var w,G,P;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`opts => {
  const {
    children,
    ...args
  } = opts;
  return <GetStartedCard label="Prepare your data" title="Generate synthetic Tabular data" {...args}>
      {children}
    </GetStartedCard>;
}`,...(P=(G=d.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var T,O,k;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`opts => {
  const {
    children,
    ...args
  } = opts;
  return <GetStartedCard label="Prepare your data" title="Generate synthetic Tabular data" {...args}>
      {children}
    </GetStartedCard>;
}`,...(k=(O=c.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};const Re=["Default","withSequence","withMediaAndPictogram","withMediaAndSequence","withDisabled"];export{o as Default,Re as __namedExportsOrder,Ae as default,c as withDisabled,s as withMediaAndPictogram,d as withMediaAndSequence,i as withSequence};
