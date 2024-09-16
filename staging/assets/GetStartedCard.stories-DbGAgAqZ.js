import{j as e,p as I}from"./settings-CljJQLyl.js";import{useMDXComponents as R}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-CyZH3xqC.js";import{e as l,i as u,C as M}from"./index-D6Mwpvt5.js";import{C as E}from"./story-helper-Ba8HmmvT.js";import{a as _}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{u as z}from"./floating-ui.react-C-lGofMW.js";import{R as L}from"./index-BwDkhjyp.js";import{P as a}from"./index-Dk74W0Oi.js";import{g as X}from"./devtools-C9kUiWhx.js";import{C as B}from"./Card-De-1chjP.js";import{T as F}from"./bucket-16-BOcfDpJ9.js";import{d as K}from"./bucket-14-DGwr16LJ.js";import{b as U}from"./bucket-0-M87sILds.js";import{C as D}from"./bucket-4-DCOQ86w1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./events-B5D95Jtx.js";import"./index-1ulDwjQN.js";import"./iframe-C3O3RKYb.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./index-BONylQH5.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./tslib.es6-B4_xh3D5.js";import"./v4-CQkTLCs1.js";import"./index-_4Qtr-t1.js";import"./Text-B6Yb8geH.js";import"./index-xbyQ_51k.js";import"./useAttachedMenu-D2EsEGO9.js";import"./mergeRefs-CTUecegF.js";import"./bucket-12-BOhlrMfU.js";import"./wrapFocus-DMN3GZJC.js";import"./index-CUiOlLtv.js";import"./LayerContext-DbU-6VX4.js";import"./bucket-6-CJUP1MJz.js";import"./bucket-9-CfAXSH6D.js";const h="GetStartedCard";let n=L.forwardRef((r,t)=>e.jsx(B,{...r,ref:t,getStarted:!0,...X(h)}));n=I.checkComponentEnabled(n,h);n.displayName=h;n.propTypes={className:a.string,disabled:a.bool,footerActionIcon:a.oneOfType([a.func,a.object]),label:a.oneOfType([a.string,a.node]),media:a.node,metadata:a.arrayOf(a.shape({id:a.string,icon:a.oneOfType([a.func,a.object]),iconDescription:a.string})),onClick:a.func.isRequired,pictogram:a.oneOfType([a.func,a.object]),sequence:a.number,status:a.oneOf(["complete","incomplete"]),title:a.oneOfType([a.string,a.node])};n.__docgenInfo={description:"GetStartedCard a card with icon, number, and media variants",methods:[],displayName:"GetStartedCard",props:{className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}},disabled:{required:!1,tsType:{name:"boolean"},description:"Optional if the card should be disabled",type:{name:"bool"}},footerActionIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Provides the action icon that's displayed at the footer of the card",type:{name:"union",value:[{name:"func"},{name:"object"}]}},label:{required:!1,tsType:{name:"ReactNode"},description:"Optional label for the top of the card",type:{name:"union",value:[{name:"string"},{name:"node"}]}},media:{required:!1,tsType:{name:"ReactNode"},description:"Optional media content like an image to be placed in the card",type:{name:"node"}},metadata:{required:!1,tsType:{name:"unknown"},description:"Icons that are displayed on the card showing the time and skill needed",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",required:!1},icon:{name:"union",value:[{name:"func"},{name:"object"}],required:!1},iconDescription:{name:"string",required:!1}}}}},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Provides the callback for a clickable card",type:{name:"func"}},pictogram:{required:!1,tsType:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}}},description:"Provides the icon that's displayed at the top of the card",type:{name:"union",value:[{name:"func"},{name:"object"}]}},sequence:{required:!1,tsType:{name:"number"},description:"Provides number for card for tasks in a sequential order",type:{name:"number"}},status:{required:!1,tsType:{name:"union",raw:"'complete' | 'incomplete'",elements:[{name:"literal",value:"'complete'"},{name:"literal",value:"'incomplete'"}]},description:"Provides the status that's displayed at the top of the card",type:{name:"enum",value:[{value:"'complete'",computed:!1},{value:"'incomplete'",computed:!1}]}},title:{required:!1,tsType:{name:"ReactNode"},description:"Title that's displayed at the top of the card",type:{name:"union",value:[{name:"string"},{name:"node"}]}}},composes:["PropsWithChildren"]};function f(r){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ul:"ul",...R(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"getstartedcard",children:"GetStartedCard"}),`
`,e.jsx(t.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(l,{children:e.jsx(u,{of:o})}),`
`,e.jsx(t.h2,{id:"example-usage",children:"Example usage"}),`
`,e.jsx(t.h3,{id:"with-sequence",children:"with Sequence"}),`
`,e.jsx(l,{children:e.jsx(u,{of:i})}),`
`,e.jsx(t.h3,{id:"with-media-and-pictogram",children:"with Media and Pictogram"}),`
`,e.jsx(l,{children:e.jsx(u,{of:s})}),`
`,e.jsx(t.h3,{id:"with-media-and-sequence",children:"with Media and Sequence"}),`
`,e.jsx(l,{children:e.jsx(u,{of:d})}),`
`,e.jsx(t.h2,{id:"code-sample",children:"Code sample"}),`
`,e.jsx(E,{exampleDirectory:"GetStartedCard"}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(M,{})]})}function W(r={}){const{wrapper:t}={...R(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(f,{...r})}):f(r)}const N=""+new URL("abstract-image-KeSi23KF.svg",import.meta.url).href,m={label:"Label",title:"Title",metadata:[{id:"1",icon:r=>e.jsx(F,{size:16,...r}),iconDescription:"2 mins"},{id:"2",icon:r=>e.jsx(K,{size:16,...r}),iconDescription:"Beginner"}],footerActionIcon:r=>e.jsx(U,{size:16,...r}),onClick:_("on click")},Ne={title:"Experimental/Onboarding/GetStartedCard",component:n,tags:["autodocs"],parameters:{docs:{page:W}},decorators:[r=>{const t=z();return e.jsx("div",{className:`${t}--grid`,children:r()})}]},p=r=>{const{children:t,...A}=r;return e.jsx(n,{label:"Prepare your data",title:"Generate synthetic Tabular data",...A,children:t})},o=p.bind({});o.args={...m,pictogram:r=>e.jsx(D,{size:32,...r})};const i=p.bind({});i.args={...m,sequence:3};const s=p.bind({});s.args={...m,pictogram:r=>e.jsx(D,{size:32,...r}),media:e.jsx("img",{src:N,alt:"abstract Image"})};const d=p.bind({});d.args={...m,sequence:3,media:e.jsx("img",{src:N,alt:"abstract Image"})};const c=p.bind({});c.args={...m,sequence:3,disabled:!0};var g,b,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`opts => {
  const {
    children,
    ...args
  } = opts;
  return <GetStartedCard label="Prepare your data" title="Generate synthetic Tabular data" {...args}>
      {children}
    </GetStartedCard>;
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var x,j,C;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`opts => {
  const {
    children,
    ...args
  } = opts;
  return <GetStartedCard label="Prepare your data" title="Generate synthetic Tabular data" {...args}>
      {children}
    </GetStartedCard>;
}`,...(C=(j=i.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var v,S,T;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`opts => {
  const {
    children,
    ...args
  } = opts;
  return <GetStartedCard label="Prepare your data" title="Generate synthetic Tabular data" {...args}>
      {children}
    </GetStartedCard>;
}`,...(T=(S=s.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var q,w,G;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`opts => {
  const {
    children,
    ...args
  } = opts;
  return <GetStartedCard label="Prepare your data" title="Generate synthetic Tabular data" {...args}>
      {children}
    </GetStartedCard>;
}`,...(G=(w=d.parameters)==null?void 0:w.docs)==null?void 0:G.source}}};var P,O,k;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`opts => {
  const {
    children,
    ...args
  } = opts;
  return <GetStartedCard label="Prepare your data" title="Generate synthetic Tabular data" {...args}>
      {children}
    </GetStartedCard>;
}`,...(k=(O=c.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};const Ae=["Default","withSequence","withMediaAndPictogram","withMediaAndSequence","withDisabled"];export{o as Default,Ae as __namedExportsOrder,Ne as default,c as withDisabled,s as withMediaAndPictogram,d as withMediaAndSequence,i as withSequence};
