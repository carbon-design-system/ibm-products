import{r as E,e}from"./index-DxDX2vOa.js";import{aw as i,al as te,ax as se,ak as ne}from"./index-6asNl-3l.js";import{useMDXComponents as V}from"./index-BgI2kBcJ.js";import"./chunk-NUUEMKO5-xM5q-MF7.js";import{A as ie}from"./index-CJ0Gdo6o.js";import{D as oe,b as j,c as h,_ as L,P as t,e as N,d as re}from"./index-B_euquWE.js";import{g as $}from"./devtools-BlxCaI1L.js";import{p as f}from"./settings-0ThqPtR3.js";import{b as ae}from"./index-YDq2Pj7F.js";import{T as B}from"./Text-9AedOkae.js";import{d as le,e as ce}from"./bucket-13-CG_GrGhO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Bz0rEyEi.js";import"../sb-preview/runtime.js";import"./index-CaMJXrh2.js";import"./index-Df9so8jS.js";import"./index-CRUq0TYl.js";import"./index-DrFu-skq.js";import"./react-18-DcnmlX6h.js";import"./bucket-18-Dvh787Y8.js";import"./bucket-9-Clk9T-SZ.js";import"./events-OVwOsPzJ.js";function de(n,s){const r=E.useRef(s);E.useEffect(()=>{r.current=s}),oe&&ae(window,"click",o=>{n.current&&!n.current.contains(o.target)&&r.current(o)})}var z;const H=e.createContext(null),U=e.createContext(null);function J(n){const{children:s,selection:r,className:o,["aria-label"]:d="Structured list section",ariaLabel:a,isCondensed:l,isFlush:v,...w}=n,p=j(),x=h(`${p}--structured-list`,{[`${p}--structured-list--selection`]:r,[`${p}--structured-list--condensed`]:l,[`${p}--structured-list--flush`]:v&&!r},o),[b,D]=e.useState(null);return e.createElement(H.Provider,{value:b},e.createElement(U.Provider,{value:D},e.createElement("div",L({role:"table",className:x},w,{"aria-label":a||d}),s)))}J.propTypes={"aria-label":t.string,ariaLabel:N(t.string),children:t.node,className:t.string,isCondensed:t.bool,isFlush:t.bool,selection:t.bool};t.node,t.string;function Q(n){const{children:s,className:r,...o}=n,d=j(),a=h(`${d}--structured-list-tbody`,r);return e.createElement("div",L({className:a,role:"rowgroup"},o),s)}Q.propTypes={children:t.node,className:t.string,head:t.bool,onKeyDown:t.func};const pe=e.createContext(null);function Y(n){const{onKeyDown:s,children:r,className:o,head:d,onClick:a,selection:l,...v}=n,[w,p]=E.useState(!1),x=re("grid-input"),b=e.useContext(H),D=e.useContext(U),g=j(),Z={id:x},O=h(`${g}--structured-list-row`,{[`${g}--structured-list-row--header-row`]:d,[`${g}--structured-list-row--focused-within`]:w&&!l||w&&l&&(b===x||b===null),[`${g}--structured-list-row--selected`]:b===x},o),A=E.useRef(null);return de(A,()=>{p(!1)}),d?e.createElement("div",L({role:"row"},v,{className:O}),l&&(z||(z=e.createElement(T,{head:!0}))),r):e.createElement("div",L({},v,{role:"row",className:O,ref:A,onClick:ee=>{D==null||D(x),a&&a(ee),l&&p(!0)},onFocus:()=>{p(!0)},onBlur:()=>{p(!1)},onKeyDown:s}),e.createElement(pe.Provider,{value:Z},l&&e.createElement(T,null,b===x?e.createElement(le,{className:`${g}--structured-list__icon`}):e.createElement(ce,{className:`${g}--structured-list__icon`})),r))}Y.propTypes={children:t.node,className:t.string,head:t.bool,label:N(t.bool),onClick:t.func,onKeyDown:t.func,selection:t.bool};t.string,N(t.bool),t.string,t.string,t.func,t.string,N(t.oneOfType([t.string,t.number]).isRequired);function T(n){const{children:s,className:r,head:o,noWrap:d,...a}=n,l=j(),v=h({[`${l}--structured-list-th`]:o,[`${l}--structured-list-td`]:!o,[`${l}--structured-list-content--nowrap`]:d},r);return o?e.createElement(B,L({className:v,role:"columnheader"},a),s):e.createElement(B,L({as:"div",className:v,role:"cell"},a),s)}T.propTypes={children:t.node,className:t.string,head:t.bool,noWrap:t.bool};const R={XSmall:"xs",Small:"sm",Medium:"md",Large:"lg"},_=`${f.prefix}--description-list`,k="DescriptionList",M={border:!1,size:R.Medium};let u=e.forwardRef(({border:n=M.border,children:s,className:r,size:o=M.size,...d},a)=>e.createElement("div",{...d,className:h(_,{[`${_}--bordered`]:n,[`${_}--${o}`]:o},r),ref:a,...$(k)},e.createElement(J,{role:"table",selection:!1},s)));u.deprecated={level:"warn",details:"This component is deprecated"};u=f.checkComponentEnabled(u,k);u.displayName=k;u.propTypes={border:t.bool,children:t.node,className:t.string,size:t.oneOf(Object.values(R))};u.__docgenInfo={description:`Type layouts provide an orderly layout of terms and definitions.
@deprecated This component is deprecated`,methods:[],displayName:"DescriptionList",props:{border:{defaultValue:{value:"false",computed:!1},description:"Specify if the type layout has a border",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'md'",computed:!1},description:"Specify the size of the type layout, from a list of available sizes",type:{name:"enum",value:[{value:'"xs"',computed:!1},{value:'"sm"',computed:!1},{value:'"md"',computed:!1},{value:'"lg"',computed:!1}]},required:!1},children:{description:"Provide the contents of the node",type:{name:"node"},required:!1},className:{description:"Provide an optional class to be applied to the containing node",type:{name:"string"},required:!1}}};const me=`${f.prefix}--description-list__body`,q="DescriptionListBody";let C=e.forwardRef(({children:n,className:s,...r},o)=>e.createElement(Q,{className:h(me,s),ref:o,...$(q),...r},n));C.propTypes={children:t.node,className:t.string};C=f.checkComponentEnabled(C,q);C.displayName=q;C.__docgenInfo={description:"",methods:[],displayName:"DescriptionListBody",props:{children:{description:"Provide the contents of the node",type:{name:"node"},required:!1},className:{description:"Provide an optional class to be applied to the containing node",type:{name:"string"},required:!1}}};const ue=`${f.prefix}--description-list__cell`,P="DescriptionListCell";let c=e.forwardRef(({children:n,className:s,...r},o)=>e.createElement(T,{className:h(ue,s),ref:o,...$(P),...r},n));c.propTypes={children:t.node,className:t.string};c=f.checkComponentEnabled(c,P);c.displayName=P;c.__docgenInfo={description:"",methods:[],displayName:"DescriptionListCell",props:{children:{description:"Provide the contents of the node",type:{name:"node"},required:!1},className:{description:"Provide an optional class to be applied to the containing node",type:{name:"string"},required:!1}}};const he=`${f.prefix}--description-list__row`,S="DescriptionListRow";let m=e.forwardRef(({children:n,className:s,...r},o)=>e.createElement(Y,{className:h(he,s),ref:o,...$(S),...r},n));m.propTypes={children:t.node,className:t.string};m=f.checkComponentEnabled(m,S);m.displayName=S;m.__docgenInfo={description:"",methods:[],displayName:"DescriptionListRow",props:{children:{description:"Provide the contents of the node",type:{name:"node"},required:!1},className:{description:"Provide an optional class to be applied to the containing node",type:{name:"string"},required:!1}}};function F(n){const s={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...V(),...n.components};return i.jsxs(i.Fragment,{children:[i.jsx(s.h1,{id:"descriptionlist",children:"DescriptionList"}),`
`,i.jsx(s.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,i.jsxs(s.ul,{children:[`
`,i.jsx(s.li,{children:i.jsx(s.a,{href:"#overview",children:"Overview"})}),`
`,i.jsx(s.li,{children:i.jsx(s.a,{href:"#example-usage",children:"Example usage"})}),`
`,i.jsx(s.li,{children:i.jsx(s.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,i.jsx(s.h2,{id:"deprecation-notice",children:"Deprecation notice"}),`
`,i.jsxs(s.blockquote,{children:[`
`,i.jsx(s.p,{children:"This component is deprecated and will be removed in the next major version."}),`
`]}),`
`,i.jsx(s.h2,{id:"overview",children:"Overview"}),`
`,i.jsx(s.p,{children:"Type layouts provide an orderly layout of terms and definitions."}),`
`,i.jsx(s.h2,{id:"example-usage",children:"Example usage"}),`
`,`
`,i.jsx(te,{children:i.jsx(se,{of:y})}),`
`,i.jsx(s.h2,{id:"component-api",children:"Component API"}),`
`,i.jsx(ne,{})]})}function fe(n={}){const{wrapper:s}={...V(),...n.components};return s?i.jsx(s,{...n,children:i.jsx(F,{...n})}):F(n)}const ve="",Fe={title:"Deprecated/DescriptionList",component:u,tags:["autodocs"],argTypes:{children:{control:{type:null}},size:{options:Object.values(R),control:{type:"radio"}}},parameters:{styles:ve,docs:{page:fe}},decorators:[n=>e.createElement(ie,{type:"deprecation-notice",text:e.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},n())]},xe=n=>e.createElement(e.Fragment,null,e.createElement(u,{...n},e.createElement(C,null,e.createElement(m,null,e.createElement(c,null,"Term 1"),e.createElement(c,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.")),e.createElement(m,null,e.createElement(c,null,"Term 2"),e.createElement(c,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan, dui ut pulvinar mattis, diam est imperdiet ex, a varius lacus ex at libero. Aenean euismod viverra odio, id volutpat turpis commodo.")),e.createElement(m,null,e.createElement(c,null,"Term 3"),e.createElement(c,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan, dui ut pulvinar mattis, diam est imperdiet ex, a varius lacus ex at libero."))))),y=xe.bind({});y.args={border:!1,size:R.Medium};var I,W,X,G,K;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  return <>
      <DescriptionList
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
              lacus ex at libero. Aenean euismod viverra odio, id volutpat
              turpis commodo.
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
      </DescriptionList>
    </>;
}`,...(X=(W=y.parameters)==null?void 0:W.docs)==null?void 0:X.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(K=(G=y.parameters)==null?void 0:G.docs)==null?void 0:K.description}}};const Ie=["descriptionList"];export{Ie as __namedExportsOrder,Fe as default,y as descriptionList};
