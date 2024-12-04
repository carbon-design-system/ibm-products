import{c as y,a0 as G}from"./index-CQ0F2wkl.js";import{D as X}from"./Dropdown-DdJe44Fy.js";import{O as V}from"./index-Bp_RdxBV.js";import{O as T}from"./OverflowMenuItem-piys-31F.js";import{r as s,R as e}from"./index-BwDkhjyp.js";import{j as o}from"./jsx-runtime-Yb_4y5hn.js";import{useMDXComponents as q}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-UdGwiunq.js";import{e as _,i as N,C as H}from"./index-CTiS1d2M.js";import{p as d}from"./index-Dk74W0Oi.js";import{g as K}from"./getFocusableElements-BW7cf991.js";import{g as W}from"./devtools-Bz70ioU6.js";import{p as v,I as J,l as Q}from"./settings-xiNX1vM3.js";import{b as Y}from"./bucket-15-z5ordBdm.js";import{e as ee,c as te}from"./bucket-17-B1XGOcQQ.js";import{P as re,R as ne,b as A}from"./bucket-13-BtB9ADLM.js";import{Z as S,a as O}from"./bucket-19-GW7fY9kk.js";import{b as oe,c as ae}from"./bucket-11-RcJCIvZm.js";import{d as le}from"./bucket-0-DyNWBZ5j.js";import{c as ie,d as k,e as se,f as ce}from"./bucket-14-BEt3Y4-s.js";import{T as me,a as de,b as pe}from"./bucket-16-CA_u3VxQ.js";import{a as ue,b as be}from"./bucket-12-C1h62Pz5.js";import{c as fe}from"./bucket-5-BnP2u7x5.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BONylQH5.js";import"./index-DesgAUBt.js";import"./extends-CCbyfPlC.js";import"./index-DcAOwtUU.js";import"./tslib.es6-B4_xh3D5.js";import"./FormContext-C7kRVu4t.js";import"./mergeRefs-CTUecegF.js";import"./bucket-18-DbwFKOtV.js";import"./bucket-2-DlXCnOsR.js";import"./useAttachedMenu-DuO3mIji.js";import"./wrapFocus-0D7LLA53.js";import"./Text-BiMgJRID.js";import"./iframe-t6fBb6Y8.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./index-CJvxHwuA.js";import"./events-OVwOsPzJ.js";import"./index-ABeo-Xma.js";const{checkComponentEnabled:Ee,prefix:he}=v,x=`${he}--toolbar`,M=s.createContext({});let b=s.forwardRef(({children:a,className:t,vertical:c,...f},r)=>{const g=s.useRef(void 0),u=s.useCallback(()=>g.current,[g]),I=s.useRef(null),E=r||I,[p,j]=s.useState(-1);s.useEffect(()=>{var i;g.current=K(E==null?void 0:E.current),p!==-1&&((i=u())==null||i.forEach((m,h)=>{m[h!==p?"setAttribute":"removeAttribute"]("tabindex","-1")}))}),s.useEffect(()=>{var i;p!==-1&&((i=u())==null||i[p].focus())},[p,u]);const[B,Z]=c?["ArrowDown","ArrowUp"]:["ArrowRight","ArrowLeft"];function R(i){var h;const m=p+i;(h=u())!=null&&h[m]&&j(m)}function L({target:i}){const m=u();m!=null&&m.includes(i)&&j(m.indexOf(i))}function U({key:i,target:m}){var h;if((h=u())!=null&&h.includes(m))switch(i){case B:R(1);break;case Z:R(-1);break}}return e.createElement("div",{...f,ref:E,className:y(x,t,{[`${x}--vertical`]:c}),onFocus:L,onKeyDown:U,...c&&{"aria-orientation":"vertical"},...W(w),role:"toolbar"},e.createElement(M.Provider,{value:{vertical:c}},a))});const w="Toolbar";b.displayName=w;b.propTypes={children:d.node.isRequired,className:d.string,vertical:d.bool};b=Ee(b,w);b.__docgenInfo={description:"Toolbars are a collection of action items that organize a program’s interaction patterns into a series of closely related commands.",methods:[],displayName:"Toolbar",props:{className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node",type:{name:"custom",raw:"string"}},vertical:{required:!1,tsType:{name:"boolean"},description:"Determines whether the `Toolbar` is rendered vertically",type:{name:"custom",raw:"bool"}},children:{description:"Provide the content of the `Toolbar`",type:{name:"node"},required:!0}}};const D=`${x}__button`;let n=s.forwardRef(({caret:a=!1,children:t,className:c,renderIcon:f,iconDescription:r="",label:g,...u},I)=>{var p;const E=f;return e.createElement(J,{align:(p=s.useContext(M))!=null&&p.vertical?"right":"top",...u,label:g??r,ref:I,className:y(c,{[`${D}--caret`]:a}),kind:"ghost",size:"md"},e.createElement(e.Fragment,null,E?e.createElement(E,null):null,t,a&&e.createElement("span",{className:`${D}__caret`})))});const $="ToolbarButton";n.displayName=$;const ge={iconDescription:d.string};n.propTypes={caret:d.bool,children:d.node,className:d.string,label:d.string.isRequired,renderIcon:d.func.isRequired,...ge};n=v.checkComponentEnabled(n,$);n.__docgenInfo={description:"Toolbar buttons are common functions performed as part of a products interface or an open window.",methods:[],displayName:"ToolbarButton",props:{caret:{required:!1,tsType:{name:"boolean"},description:"Determines whether the caret is rendered",defaultValue:{value:"false",computed:!1},type:{name:"custom",raw:"bool"}},className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node",type:{name:"custom",raw:"string"}},iconDescription:{required:!1,tsType:{name:"string"},description:"@deprecated use `label` instead\nSpecifies the label for the icon button",defaultValue:{value:"''",computed:!1},type:{name:"custom",raw:"string"}},label:{required:!0,tsType:{name:"string"},description:"Specifies the label for the icon button",type:{name:"string"}},renderIcon:{required:!0,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Specifies the icon to be used by the ToolbarButton component",type:{name:"func"}},children:{description:"Provide the content of the `ToolbarButton`",type:{name:"custom",raw:"node"},required:!1}}};let l=s.forwardRef(({className:a,children:t,...c},f)=>e.createElement("div",{...c,ref:f,className:y(`${x}__group`,a)},t));const F="ToolbarGroup";l.displayName=F;l.propTypes={children:d.node.isRequired,className:d.string};l=v.checkComponentEnabled(l,F);l.__docgenInfo={description:"Toolbar groups organize the commands within a toolbar into related groups.",methods:[],displayName:"ToolbarGroup",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Provide the content of the `ToolbarGroup`",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node",type:{name:"custom",raw:"string"}}}};function P(a){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ul:"ul",...q(),...a.components};return o.jsxs(o.Fragment,{children:[o.jsx(t.h1,{id:"toolbar",children:"Toolbar"}),`
`,o.jsx(t.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,o.jsxs(t.ul,{children:[`
`,o.jsx(t.li,{children:o.jsx(t.a,{href:"#overview",children:"Overview"})}),`
`,o.jsx(t.li,{children:o.jsx(t.a,{href:"#example-usage",children:"Example usage"})}),`
`,o.jsx(t.li,{children:o.jsx(t.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,o.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,`
`,o.jsx(t.h2,{id:"example-usage",children:"Example usage"}),`
`,`
`,o.jsx(t.h3,{id:"default",children:"Default"}),`
`,o.jsx(_,{children:o.jsx(N,{of:z})}),`
`,o.jsx(t.h3,{id:"with-image",children:"With Image"}),`
`,o.jsx(_,{children:o.jsx(N,{of:C})}),`
`,o.jsx(t.h2,{id:"code-sample",children:"Code sample"}),`
`,`
`,o.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,o.jsx(H,{})]})}function Te(a={}){const{wrapper:t}={...q(),...a.components};return t?o.jsx(t,{...a,children:o.jsx(P,{...a})}):P(a)}const dt={title:"Experimental/Components/Toolbars/Toolbar",component:b,tags:["autodocs"],parameters:{docs:{page:Te}},argTypes:{vertical:{control:"boolean"}}};function z(a){const t=["11","12","14","16","18"],[c,f]=s.useState(t[t.length/2|0]);return e.createElement(b,{...a},e.createElement(l,null,e.createElement(n,{label:"Save",renderIcon:r=>e.createElement(ie,{size:16,...r})}),e.createElement(n,{label:"Share",renderIcon:r=>e.createElement(Y,{size:16,...r})}),e.createElement(n,{label:"Upload",renderIcon:r=>e.createElement(ee,{size:16,...r})}),e.createElement(n,{label:"Print",renderIcon:r=>e.createElement(re,{size:16,...r})})),e.createElement(l,null,e.createElement(n,{label:"Undo",renderIcon:r=>e.createElement(te,{size:16,...r})}),e.createElement(n,{label:"Redo",renderIcon:r=>e.createElement(ne,{size:16,...r})}),e.createElement(n,{label:"Zoom in",renderIcon:r=>e.createElement(S,{size:16,...r})}),e.createElement(n,{label:"Zoom out",renderIcon:r=>e.createElement(O,{size:16,...r})}),e.createElement(n,{label:"Minimize",renderIcon:r=>e.createElement(oe,{size:16,...r})}),e.createElement(n,{label:"Align horizontal center",renderIcon:r=>e.createElement(le,{size:16,...r})})),e.createElement(l,null,e.createElement(n,{label:"Ruler",renderIcon:r=>e.createElement(k,{size:16,...r})}),e.createElement(n,{label:"Pin",renderIcon:r=>e.createElement(A,{size:16,...r})}),e.createElement(n,{label:"Copy file",renderIcon:r=>e.createElement(Q,{size:16,...r})})),e.createElement(l,null,e.createElement(X,{id:"dropdown",hideLabel:!0,titleText:"Font size",initialSelectedItem:c,items:t,label:c,onChange:({selectedItem:r})=>f(r)})),e.createElement(l,null,e.createElement(n,{label:"Text align center",renderIcon:r=>e.createElement(me,{size:16,...r})})),e.createElement(l,null,e.createElement(V,{"aria-label":"List",flipped:!0},e.createElement(T,{itemText:"Color palette"}),e.createElement(T,{itemText:"Text creation"}),e.createElement(T,{itemText:"Bulleted list"}),e.createElement(T,{itemText:"Delete",hasDivider:!0,isDelete:!0}))),e.createElement(l,null,e.createElement(n,{label:"Table",renderIcon:r=>e.createElement(de,{size:16,...r})}),e.createElement(n,{label:"Settings adjust",renderIcon:r=>e.createElement(se,{size:16,...r})})))}z.args={vertical:!1};function C(a){return e.createElement(b,{...a},e.createElement(l,null,e.createElement(n,{label:"Drag",renderIcon:t=>e.createElement(fe,{size:16,...t})})),e.createElement(l,null,e.createElement(n,{label:"Ruler",renderIcon:t=>e.createElement(k,{size:16,...t})}),e.createElement(n,{label:"Pin",renderIcon:t=>e.createElement(A,{size:16,...t})}),e.createElement(n,{label:"Color palette",renderIcon:t=>e.createElement(G,{size:16,...t})}),e.createElement(n,{label:"Text creation",renderIcon:t=>e.createElement(pe,{size:16,...t})})),e.createElement(l,null,e.createElement(n,{label:"Open panel left",renderIcon:t=>e.createElement(ue,{size:16,...t})}),e.createElement(n,{label:"Open panel right",renderIcon:t=>e.createElement(be,{size:16,...t})})),e.createElement(l,null,e.createElement(n,{label:"Move",renderIcon:t=>e.createElement(ae,{size:16,...t})}),e.createElement(n,{label:"Rotate",renderIcon:t=>e.createElement(ce,{size:16,...t})})),e.createElement(l,null,e.createElement(n,{label:"Zoom in",renderIcon:t=>e.createElement(S,{size:16,...t})}),e.createElement(n,{label:"Zoom out",renderIcon:t=>e.createElement(O,{size:16,...t})})))}C.args={vertical:!0};z.__docgenInfo={description:"",methods:[],displayName:"_Toolbar"};C.__docgenInfo={description:"",methods:[],displayName:"vertical"};const pt=["_Toolbar","vertical"];export{z as _Toolbar,pt as __namedExportsOrder,dt as default,C as vertical};
