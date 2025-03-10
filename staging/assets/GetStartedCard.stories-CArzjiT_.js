import{e as n}from"./index-CPiZ6Cnx.js";import{j as e}from"./index-B83en7q5.js";import{useMDXComponents as D}from"./index-CUO_02de.js";import"./index-Kr43vjMr.js";import{C as I}from"./story-helper-C7pmvIin.js";import{a as M}from"./index-B-lxVbXh.js";import{P as a,b as _}from"./index-BPCFiO9b.js";import{g as z}from"./devtools-Ca6Wku6c.js";import{p as L,C as R}from"./settings-41bnSjHp.js";import{C as X}from"./Card-Ht60uCGh.js";import{c as B}from"./bucket-17-VMH0CKri.js";import{d as F}from"./bucket-15-e1AWIpaL.js";import{b as K}from"./bucket-0-BYIdRiFw.js";import{a as u,f as h,C as U}from"./index-C-2_Eo4o.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-ZKO_qc5e.js";import"./preview-BL8wQuie.js";import"./iframe-necW5_o2.js";import"./DocsRenderer-CFRXHY34-GHw2_TbQ.js";import"./client-BCQEsWlk.js";import"./v4-CtRu48qb.js";import"./events-OVwOsPzJ.js";import"./index-H2wBg9na.js";import"./MenuItem-qN6UbXhC.js";import"./useControllableState-uQXf5Mu5.js";import"./useAttachedMenu-CqlpaYyp.js";import"./Text-DJS5NTiV.js";import"./bucket-2-Bg39G-BA.js";import"./index-BZnmZh5O.js";import"./mergeRefs-CTUecegF.js";import"./bucket-12-6vZmyEHs.js";import"./wrapFocus-Dfrp1CCV.js";import"./createClassWrapper-CfmfodUV.js";import"./index-C_tB4MqD.js";import"./LayerContext-BGhaVt7n.js";import"./bucket-6-CO2LLwKX.js";import"./bucket-9-qDf-0NK_.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";const f="GetStartedCard";let o=n.forwardRef((r,t)=>n.createElement(X,{...r,ref:t,getStarted:!0,...z(f)}));o=L.checkComponentEnabled(o,f);o.displayName=f;o.propTypes={className:a.string,disabled:a.bool,footerActionIcon:a.oneOfType([a.func,a.object]),label:a.oneOfType([a.string,a.node]),media:a.node,metadata:a.arrayOf(a.shape({id:a.string,icon:a.oneOfType([a.func,a.object]),iconDescription:a.string})),onClick:a.func.isRequired,pictogram:a.oneOfType([a.func,a.object]),sequence:a.number,status:a.oneOf(["complete","incomplete"]),title:a.oneOfType([a.string,a.node])};o.__docgenInfo={description:"GetStartedCard a card with icon, number, and media variants",methods:[],displayName:"GetStartedCard",props:{className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}},disabled:{required:!1,tsType:{name:"boolean"},description:"Optional if the card should be disabled",type:{name:"bool"}},footerActionIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Provides the action icon that's displayed at the footer of the card",type:{name:"union",value:[{name:"func"},{name:"object"}]}},label:{required:!1,tsType:{name:"ReactNode"},description:"Optional label for the top of the card",type:{name:"union",value:[{name:"string"},{name:"node"}]}},media:{required:!1,tsType:{name:"ReactNode"},description:"Optional media content like an image to be placed in the card",type:{name:"node"}},metadata:{required:!1,tsType:{name:"unknown"},description:"Icons that are displayed on the card showing the time and skill needed",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",required:!1},icon:{name:"union",value:[{name:"func"},{name:"object"}],required:!1},iconDescription:{name:"string",required:!1}}}}},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Provides the callback for a clickable card",type:{name:"func"}},pictogram:{required:!1,tsType:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}}},description:"Provides the icon that's displayed at the top of the card",type:{name:"union",value:[{name:"func"},{name:"object"}]}},sequence:{required:!1,tsType:{name:"number"},description:"Provides number for card for tasks in a sequential order",type:{name:"number"}},status:{required:!1,tsType:{name:"union",raw:"'complete' | 'incomplete'",elements:[{name:"literal",value:"'complete'"},{name:"literal",value:"'incomplete'"}]},description:"Provides the status that's displayed at the top of the card",type:{name:"enum",value:[{value:"'complete'",computed:!1},{value:"'incomplete'",computed:!1}]}},title:{required:!1,tsType:{name:"ReactNode"},description:"Title that's displayed at the top of the card",type:{name:"union",value:[{name:"string"},{name:"node"}]}}},composes:["PropsWithChildren"]};function g(r){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ul:"ul",...D(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"getstartedcard",children:"GetStartedCard"}),`
`,e.jsx(t.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(u,{children:e.jsx(h,{of:i})}),`
`,e.jsx(t.h2,{id:"example-usage",children:"Example usage"}),`
`,e.jsx(t.h3,{id:"with-sequence",children:"with Sequence"}),`
`,e.jsx(u,{children:e.jsx(h,{of:s})}),`
`,e.jsx(t.h3,{id:"with-media-and-pictogram",children:"with Media and Pictogram"}),`
`,e.jsx(u,{children:e.jsx(h,{of:d})}),`
`,e.jsx(t.h3,{id:"with-media-and-sequence",children:"with Media and Sequence"}),`
`,e.jsx(u,{children:e.jsx(h,{of:c})}),`
`,e.jsx(t.h2,{id:"code-sample",children:"Code sample"}),`
`,e.jsx(I,{exampleDirectory:"GetStartedCard"}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(U,{})]})}function W(r={}){const{wrapper:t}={...D(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(g,{...r})}):g(r)}const N=""+new URL("abstract-image-KeSi23KF.svg",import.meta.url).href,l={label:"Label",title:"Title",metadata:[{id:"1",icon:r=>n.createElement(B,{size:16,...r}),iconDescription:"2 mins"},{id:"2",icon:r=>n.createElement(F,{size:16,...r}),iconDescription:"Beginner"}],footerActionIcon:r=>n.createElement(K,{size:16,...r}),onClick:M("on click")},De={title:"Experimental/Onboarding/GetStartedCard",component:o,tags:["autodocs"],parameters:{docs:{page:W}},decorators:[r=>{const t=_();return n.createElement("div",{className:`${t}--grid`},r())}]},p=r=>{const{children:t,...A}=r;return n.createElement(o,{label:"Prepare your data",title:"Generate synthetic Tabular data",...A},t)},i=p.bind({});i.args={...l,pictogram:r=>n.createElement(R,{size:32,...r})};const s=p.bind({});s.args={...l,sequence:3};const d=p.bind({});d.args={...l,pictogram:r=>n.createElement(R,{size:32,...r}),media:n.createElement("img",{src:N,alt:"abstract Image"})};const c=p.bind({});c.args={...l,sequence:3,media:n.createElement("img",{src:N,alt:"abstract Image"})};const m=p.bind({});m.args={...l,sequence:3,disabled:!0};var b,y,x;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`opts => {
  const {
    children,
    ...args
  } = opts;
  return <GetStartedCard label="Prepare your data" title="Generate synthetic Tabular data" {...args}>
      {children}
    </GetStartedCard>;
}`,...(x=(y=i.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var C,j,v;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`opts => {
  const {
    children,
    ...args
  } = opts;
  return <GetStartedCard label="Prepare your data" title="Generate synthetic Tabular data" {...args}>
      {children}
    </GetStartedCard>;
}`,...(v=(j=s.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var S,T,q;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`opts => {
  const {
    children,
    ...args
  } = opts;
  return <GetStartedCard label="Prepare your data" title="Generate synthetic Tabular data" {...args}>
      {children}
    </GetStartedCard>;
}`,...(q=(T=d.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var w,G,P;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`opts => {
  const {
    children,
    ...args
  } = opts;
  return <GetStartedCard label="Prepare your data" title="Generate synthetic Tabular data" {...args}>
      {children}
    </GetStartedCard>;
}`,...(P=(G=c.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var E,O,k;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`opts => {
  const {
    children,
    ...args
  } = opts;
  return <GetStartedCard label="Prepare your data" title="Generate synthetic Tabular data" {...args}>
      {children}
    </GetStartedCard>;
}`,...(k=(O=m.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};const Re=["Default","withSequence","withMediaAndPictogram","withMediaAndSequence","withDisabled"];export{i as Default,Re as __namedExportsOrder,De as default,m as withDisabled,d as withMediaAndPictogram,c as withMediaAndSequence,s as withSequence};
