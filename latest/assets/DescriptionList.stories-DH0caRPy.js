import{p as m,j as s}from"./settings-DEdZ0TrD.js";import{useMDXComponents as V}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-CyASr9Ca.js";import{e as te,i as se,C as ie}from"./index-CimYzH0T.js";import{r as w,R as o}from"./index-BwDkhjyp.js";import{P as e}from"./index-Dk74W0Oi.js";import{q as oe,a as T,c as h,_ as L,d as j,b as ne}from"./floating-ui.core.mjs-LzsX8FoD.js";import{g as $}from"./devtools-BMJcATO0.js";import{b as re}from"./index-CtP8jiW9.js";import{T as A}from"./Text-DzW_iQLr.js";import{d as ae,e as le}from"./bucket-13-K9d64cD_.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./events-BwXSUnsA.js";import"./iframe-BXu0dMI8.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./index-BONylQH5.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";function ce(i,t){const r=w.useRef(t);w.useEffect(()=>{r.current=t}),oe&&re(window,"click",n=>{i.current&&!i.current.contains(n.target)&&r.current(n)})}var z;const H=o.createContext(null),U=o.createContext(null);function J(i){const{children:t,selection:r,className:n,["aria-label"]:d="Structured list section",ariaLabel:a,isCondensed:l,isFlush:f,...N}=i,p=T(),x=h(`${p}--structured-list`,{[`${p}--structured-list--selection`]:r,[`${p}--structured-list--condensed`]:l,[`${p}--structured-list--flush`]:f&&!r},n),[g,D]=o.useState(null);return o.createElement(H.Provider,{value:g},o.createElement(U.Provider,{value:D},o.createElement("div",L({role:"table",className:x},N,{"aria-label":a||d}),t)))}J.propTypes={"aria-label":e.string,ariaLabel:j(e.string),children:e.node,className:e.string,isCondensed:e.bool,isFlush:e.bool,selection:e.bool};e.node,e.string;function Q(i){const{children:t,className:r,...n}=i,d=T(),a=h(`${d}--structured-list-tbody`,r);return o.createElement("div",L({className:a,role:"rowgroup"},n),t)}Q.propTypes={children:e.node,className:e.string,head:e.bool,onKeyDown:e.func};const de=o.createContext(null);function Y(i){const{onKeyDown:t,children:r,className:n,head:d,onClick:a,selection:l,...f}=i,[N,p]=w.useState(!1),x=ne("grid-input"),g=o.useContext(H),D=o.useContext(U),b=T(),Z={id:x},O=h(`${b}--structured-list-row`,{[`${b}--structured-list-row--header-row`]:d,[`${b}--structured-list-row--focused-within`]:N&&!l||N&&l&&(g===x||g===null),[`${b}--structured-list-row--selected`]:g===x},n),B=w.useRef(null);return ce(B,()=>{p(!1)}),d?o.createElement("div",L({role:"row"},f,{className:O}),l&&(z||(z=o.createElement(R,{head:!0}))),r):o.createElement("div",L({},f,{role:"row",className:O,ref:B,onClick:ee=>{D==null||D(x),a&&a(ee),l&&p(!0)},onFocus:()=>{p(!0)},onBlur:()=>{p(!1)},onKeyDown:t}),o.createElement(de.Provider,{value:Z},l&&o.createElement(R,null,g===x?o.createElement(ae,{className:`${b}--structured-list__icon`}):o.createElement(le,{className:`${b}--structured-list__icon`})),r))}Y.propTypes={children:e.node,className:e.string,head:e.bool,label:j(e.bool),onClick:e.func,onKeyDown:e.func,selection:e.bool};e.string,j(e.bool),e.string,e.string,e.func,e.string,j(e.oneOfType([e.string,e.number]).isRequired);function R(i){const{children:t,className:r,head:n,noWrap:d,...a}=i,l=T(),f=h({[`${l}--structured-list-th`]:n,[`${l}--structured-list-td`]:!n,[`${l}--structured-list-content--nowrap`]:d},r);return n?o.createElement(A,L({className:f,role:"columnheader"},a),t):o.createElement(A,L({as:"div",className:f,role:"cell"},a),t)}R.propTypes={children:e.node,className:e.string,head:e.bool,noWrap:e.bool};const _={XSmall:"xs",Small:"sm",Medium:"md",Large:"lg"},E=`${m.prefix}--description-list`,k="DescriptionList",M={border:!1,size:_.Medium};let v=o.forwardRef(({border:i=M.border,children:t,className:r,size:n=M.size,...d},a)=>s.jsx("div",{...d,className:h(E,{[`${E}--bordered`]:i,[`${E}--${n}`]:n},r),ref:a,...$(k),children:s.jsx(J,{role:"table",selection:!1,children:t})}));v=m.checkComponentEnabled(v,k);v.displayName=k;v.propTypes={border:e.bool,children:e.node,className:e.string,size:e.oneOf(Object.values(_))};v.__docgenInfo={description:"Type layouts provide an orderly layout of terms and definitions.",methods:[],displayName:"DescriptionList",props:{border:{defaultValue:{value:"false",computed:!1},description:"Specify if the type layout has a border",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'md'",computed:!1},description:"Specify the size of the type layout, from a list of available sizes",type:{name:"enum",value:[{value:'"xs"',computed:!1},{value:'"sm"',computed:!1},{value:'"md"',computed:!1},{value:'"lg"',computed:!1}]},required:!1},children:{description:"Provide the contents of the node",type:{name:"node"},required:!1},className:{description:"Provide an optional class to be applied to the containing node",type:{name:"string"},required:!1}}};const pe=`${m.prefix}--description-list__body`,P="DescriptionListBody";let C=o.forwardRef(({children:i,className:t,...r},n)=>s.jsx(Q,{className:h(pe,t),ref:n,...$(P),...r,children:i}));C.propTypes={children:e.node,className:e.string};C=m.checkComponentEnabled(C,P);C.displayName=P;C.__docgenInfo={description:"",methods:[],displayName:"DescriptionListBody",props:{children:{description:"Provide the contents of the node",type:{name:"node"},required:!1},className:{description:"Provide an optional class to be applied to the containing node",type:{name:"string"},required:!1}}};const ue=`${m.prefix}--description-list__cell`,S="DescriptionListCell";let c=o.forwardRef(({children:i,className:t,...r},n)=>s.jsx(R,{className:h(ue,t),ref:n,...$(S),...r,children:i}));c.propTypes={children:e.node,className:e.string};c=m.checkComponentEnabled(c,S);c.displayName=S;c.__docgenInfo={description:"",methods:[],displayName:"DescriptionListCell",props:{children:{description:"Provide the contents of the node",type:{name:"node"},required:!1},className:{description:"Provide an optional class to be applied to the containing node",type:{name:"string"},required:!1}}};const me=`${m.prefix}--description-list__row`,q="DescriptionListRow";let u=o.forwardRef(({children:i,className:t,...r},n)=>s.jsx(Y,{className:h(me,t),ref:n,...$(q),...r,children:i}));u.propTypes={children:e.node,className:e.string};u=m.checkComponentEnabled(u,q);u.displayName=q;u.__docgenInfo={description:"",methods:[],displayName:"DescriptionListRow",props:{children:{description:"Provide the contents of the node",type:{name:"node"},required:!1},className:{description:"Provide an optional class to be applied to the containing node",type:{name:"string"},required:!1}}};function I(i){const t={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...V(),...i.components};return s.jsxs(s.Fragment,{children:[s.jsx(t.h1,{id:"descriptionlist",children:"DescriptionList"}),`
`,s.jsx(t.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,s.jsxs(t.ul,{children:[`
`,s.jsx(t.li,{children:s.jsx(t.a,{href:"#overview",children:"Overview"})}),`
`,s.jsx(t.li,{children:s.jsx(t.a,{href:"#example-usage",children:"Example usage"})}),`
`,s.jsx(t.li,{children:s.jsx(t.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,s.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,s.jsx(t.p,{children:"Type layouts provide an orderly layout of terms and definitions."}),`
`,s.jsx(t.h2,{id:"example-usage",children:"Example usage"}),`
`,`
`,s.jsx(te,{children:s.jsx(se,{of:y})}),`
`,s.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,s.jsx(ie,{})]})}function he(i={}){const{wrapper:t}={...V(),...i.components};return t?s.jsx(t,{...i,children:s.jsx(I,{...i})}):I(i)}const fe="",Me={title:"Experimental/Components/Description list/DescriptionList",component:v,tags:["autodocs"],argTypes:{children:{control:{type:null}},size:{options:Object.values(_),control:{type:"radio"}}},parameters:{styles:fe,docs:{page:he}}},xe=i=>s.jsx(v,{...i,children:s.jsxs(C,{children:[s.jsxs(u,{children:[s.jsx(c,{children:"Term 1"}),s.jsx(c,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]}),s.jsxs(u,{children:[s.jsx(c,{children:"Term 2"}),s.jsx(c,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan, dui ut pulvinar mattis, diam est imperdiet ex, a varius lacus ex at libero. Aenean euismod viverra odio, id volutpat turpis commodo."})]}),s.jsxs(u,{children:[s.jsx(c,{children:"Term 3"}),s.jsx(c,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan, dui ut pulvinar mattis, diam est imperdiet ex, a varius lacus ex at libero."})]})]})}),y=xe.bind({});y.args={border:!1,size:_.Medium};var F,W,X,G,K;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
  return <DescriptionList
  // TODO: handle events with action or local handler.
  // onTodo={action('onTodo log action')}
  {...args}>
      <DescriptionListBody>
        <DescriptionListRow>
          <DescriptionListCell>Term 1</DescriptionListCell>

          <DescriptionListCell>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </DescriptionListCell>
        </DescriptionListRow>

        <DescriptionListRow>
          <DescriptionListCell>Term 2</DescriptionListCell>

          <DescriptionListCell>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            accumsan, dui ut pulvinar mattis, diam est imperdiet ex, a varius
            lacus ex at libero. Aenean euismod viverra odio, id volutpat turpis
            commodo.
          </DescriptionListCell>
        </DescriptionListRow>

        <DescriptionListRow>
          <DescriptionListCell>Term 3</DescriptionListCell>

          <DescriptionListCell>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            accumsan, dui ut pulvinar mattis, diam est imperdiet ex, a varius
            lacus ex at libero.
          </DescriptionListCell>
        </DescriptionListRow>
      </DescriptionListBody>
    </DescriptionList>;
}`,...(X=(W=y.parameters)==null?void 0:W.docs)==null?void 0:X.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(K=(G=y.parameters)==null?void 0:G.docs)==null?void 0:K.description}}};const Ie=["descriptionList"];export{Ie as __namedExportsOrder,Me as default,y as descriptionList};
