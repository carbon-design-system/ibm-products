import{c as y,O as d,a4 as G}from"./index-BPCFiO9b.js";import{D as X}from"./Dropdown-CFsOHIZw.js";import{O as V}from"./index-BZnmZh5O.js";import{O as T}from"./OverflowMenuItem-Bes9qn8M.js";import{r as s,e}from"./index-CPiZ6Cnx.js";import{j as o}from"./index-B83en7q5.js";import{useMDXComponents as q}from"./index-CUO_02de.js";import"./index-CvHaCfpW.js";import{g as H}from"./getFocusableElements-BW7cf991.js";import{g as K}from"./devtools-Ca6Wku6c.js";import{p as v,I as W,h as J}from"./settings-41bnSjHp.js";import{e as Q,f as Y}from"./bucket-15-e1AWIpaL.js";import{g as ee}from"./bucket-18-CAzey7tD.js";import{b as te}from"./bucket-17-VMH0CKri.js";import{S as ne,a as re,b as S,c as oe}from"./bucket-14-30MmQ0EF.js";import{Z as A,a as O}from"./bucket-19-D3HGmNQE.js";import{b as ae,c as le}from"./bucket-11-CzULl_B6.js";import{c as ie}from"./bucket-0-BYIdRiFw.js";import{a as se,c as k}from"./bucket-13-B7KjeMX0.js";import{T as ce,a as me,b as de}from"./bucket-16-D6LVaITE.js";import{a as pe,b as ue}from"./bucket-12-6vZmyEHs.js";import{c as fe}from"./bucket-5-B7bOdntf.js";import{a as N,f as R,C as be}from"./index-BLWQvygC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B0LLDM2X.js";import"./extends-CF3RwP-h.js";import"./FormContext-CgeSXHS1.js";import"./mergeRefs-CTUecegF.js";import"./useAttachedMenu-CqlpaYyp.js";import"./index-H2wBg9na.js";import"./wrapFocus-Dfrp1CCV.js";import"./createClassWrapper-CfmfodUV.js";import"./Text-DJS5NTiV.js";import"./index-ZKO_qc5e.js";import"./preview-CFjW7UBg.js";import"./iframe-DX7T_URq.js";import"./DocsRenderer-CFRXHY34-C2gN1Rw9.js";import"./client-BCQEsWlk.js";import"./events-OVwOsPzJ.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";const{checkComponentEnabled:Ee,prefix:he}=v,x=`${he}--toolbar`,M=s.createContext({});let f=s.forwardRef(({children:a,className:t,vertical:c,...b},n)=>{const g=s.useRef(void 0),u=s.useCallback(()=>g.current,[g]),I=s.useRef(null),E=n||I,[p,j]=s.useState(-1);s.useEffect(()=>{var i;g.current=H(E==null?void 0:E.current),p!==-1&&((i=u())==null||i.forEach((m,h)=>{m[h!==p?"setAttribute":"removeAttribute"]("tabindex","-1")}))}),s.useEffect(()=>{var i;p!==-1&&((i=u())==null||i[p].focus())},[p,u]);const[B,Z]=c?["ArrowDown","ArrowUp"]:["ArrowRight","ArrowLeft"];function _(i){var h;const m=p+i;(h=u())!=null&&h[m]&&j(m)}function L({target:i}){const m=u();m!=null&&m.includes(i)&&j(m.indexOf(i))}function U({key:i,target:m}){var h;if((h=u())!=null&&h.includes(m))switch(i){case B:_(1);break;case Z:_(-1);break}}return e.createElement("div",{...b,ref:E,className:y(x,t,{[`${x}--vertical`]:c}),onFocus:L,onKeyDown:U,...c&&{"aria-orientation":"vertical"},...K(w),role:"toolbar"},e.createElement(M.Provider,{value:{vertical:c}},a))});const w="Toolbar";f.displayName=w;f.propTypes={children:d.node.isRequired,className:d.string,vertical:d.bool};f=Ee(f,w);f.__docgenInfo={description:"Toolbars are a collection of action items that organize a program’s interaction patterns into a series of closely related commands.",methods:[],displayName:"Toolbar",props:{className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node",type:{name:"custom",raw:"string"}},vertical:{required:!1,tsType:{name:"boolean"},description:"Determines whether the `Toolbar` is rendered vertically",type:{name:"custom",raw:"bool"}},children:{description:"Provide the content of the `Toolbar`",type:{name:"node"},required:!0}}};const D=`${x}__button`;let r=s.forwardRef(({caret:a=!1,children:t,className:c,renderIcon:b,iconDescription:n="",label:g,...u},I)=>{var p;const E=b;return e.createElement(W,{align:(p=s.useContext(M))!=null&&p.vertical?"right":"top",...u,label:g??n,ref:I,className:y(c,{[`${D}--caret`]:a}),kind:"ghost",size:"md"},e.createElement(e.Fragment,null,E?e.createElement(E,null):null,t,a&&e.createElement("span",{className:`${D}__caret`})))});const $="ToolbarButton";r.displayName=$;const ge={iconDescription:d.string};r.propTypes={caret:d.bool,children:d.node,className:d.string,label:d.string.isRequired,renderIcon:d.func.isRequired,...ge};r=v.checkComponentEnabled(r,$);r.__docgenInfo={description:"Toolbar buttons are common functions performed as part of a products interface or an open window.",methods:[],displayName:"ToolbarButton",props:{caret:{required:!1,tsType:{name:"boolean"},description:"Determines whether the caret is rendered",defaultValue:{value:"false",computed:!1},type:{name:"custom",raw:"bool"}},className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node",type:{name:"custom",raw:"string"}},iconDescription:{required:!1,tsType:{name:"string"},description:"@deprecated use `label` instead\nSpecifies the label for the icon button",defaultValue:{value:"''",computed:!1},type:{name:"custom",raw:"string"}},label:{required:!0,tsType:{name:"string"},description:"Specifies the label for the icon button",type:{name:"string"}},renderIcon:{required:!0,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Specifies the icon to be used by the ToolbarButton component",type:{name:"func"}},children:{description:"Provide the content of the `ToolbarButton`",type:{name:"custom",raw:"node"},required:!1}}};let l=s.forwardRef(({className:a,children:t,...c},b)=>e.createElement("div",{...c,ref:b,className:y(`${x}__group`,a)},t));const F="ToolbarGroup";l.displayName=F;l.propTypes={children:d.node.isRequired,className:d.string};l=v.checkComponentEnabled(l,F);l.__docgenInfo={description:"Toolbar groups organize the commands within a toolbar into related groups.",methods:[],displayName:"ToolbarGroup",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Provide the content of the `ToolbarGroup`",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node",type:{name:"custom",raw:"string"}}}};function P(a){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ul:"ul",...q(),...a.components};return o.jsxs(o.Fragment,{children:[o.jsx(t.h1,{id:"toolbar",children:"Toolbar"}),`
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
`,o.jsx(N,{children:o.jsx(R,{of:z})}),`
`,o.jsx(t.h3,{id:"with-image",children:"With Image"}),`
`,o.jsx(N,{children:o.jsx(R,{of:C})}),`
`,o.jsx(t.h2,{id:"code-sample",children:"Code sample"}),`
`,`
`,o.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,o.jsx(be,{})]})}function Te(a={}){const{wrapper:t}={...q(),...a.components};return t?o.jsx(t,{...a,children:o.jsx(P,{...a})}):P(a)}const it={title:"Experimental/Components/Toolbars/Toolbar",component:f,tags:["autodocs"],parameters:{docs:{page:Te}},argTypes:{vertical:{control:"boolean"}}};function z(a){const t=["11","12","14","16","18"],[c,b]=s.useState(t[t.length/2|0]);return e.createElement(f,{...a},e.createElement(l,null,e.createElement(r,{label:"Save",renderIcon:n=>e.createElement(ne,{size:16,...n})}),e.createElement(r,{label:"Share",renderIcon:n=>e.createElement(Q,{size:16,...n})}),e.createElement(r,{label:"Upload",renderIcon:n=>e.createElement(ee,{size:16,...n})}),e.createElement(r,{label:"Print",renderIcon:n=>e.createElement(se,{size:16,...n})})),e.createElement(l,null,e.createElement(r,{label:"Undo",renderIcon:n=>e.createElement(te,{size:16,...n})}),e.createElement(r,{label:"Redo",renderIcon:n=>e.createElement(re,{size:16,...n})}),e.createElement(r,{label:"Zoom in",renderIcon:n=>e.createElement(A,{size:16,...n})}),e.createElement(r,{label:"Zoom out",renderIcon:n=>e.createElement(O,{size:16,...n})}),e.createElement(r,{label:"Minimize",renderIcon:n=>e.createElement(ae,{size:16,...n})}),e.createElement(r,{label:"Align horizontal center",renderIcon:n=>e.createElement(ie,{size:16,...n})})),e.createElement(l,null,e.createElement(r,{label:"Ruler",renderIcon:n=>e.createElement(S,{size:16,...n})}),e.createElement(r,{label:"Pin",renderIcon:n=>e.createElement(k,{size:16,...n})}),e.createElement(r,{label:"Copy file",renderIcon:n=>e.createElement(J,{size:16,...n})})),e.createElement(l,null,e.createElement(X,{id:"dropdown",hideLabel:!0,titleText:"Font size",initialSelectedItem:c,items:t,label:c,onChange:({selectedItem:n})=>b(n)})),e.createElement(l,null,e.createElement(r,{label:"Text align center",renderIcon:n=>e.createElement(ce,{size:16,...n})})),e.createElement(l,null,e.createElement(V,{"aria-label":"List",flipped:!0},e.createElement(T,{itemText:"Color palette"}),e.createElement(T,{itemText:"Text creation"}),e.createElement(T,{itemText:"Bulleted list"}),e.createElement(T,{itemText:"Delete",hasDivider:!0,isDelete:!0}))),e.createElement(l,null,e.createElement(r,{label:"Table",renderIcon:n=>e.createElement(me,{size:16,...n})}),e.createElement(r,{label:"Settings adjust",renderIcon:n=>e.createElement(Y,{size:16,...n})})))}z.args={vertical:!1};function C(a){return e.createElement(f,{...a},e.createElement(l,null,e.createElement(r,{label:"Drag",renderIcon:t=>e.createElement(fe,{size:16,...t})})),e.createElement(l,null,e.createElement(r,{label:"Ruler",renderIcon:t=>e.createElement(S,{size:16,...t})}),e.createElement(r,{label:"Pin",renderIcon:t=>e.createElement(k,{size:16,...t})}),e.createElement(r,{label:"Color palette",renderIcon:t=>e.createElement(G,{size:16,...t})}),e.createElement(r,{label:"Text creation",renderIcon:t=>e.createElement(de,{size:16,...t})})),e.createElement(l,null,e.createElement(r,{label:"Open panel left",renderIcon:t=>e.createElement(pe,{size:16,...t})}),e.createElement(r,{label:"Open panel right",renderIcon:t=>e.createElement(ue,{size:16,...t})})),e.createElement(l,null,e.createElement(r,{label:"Move",renderIcon:t=>e.createElement(le,{size:16,...t})}),e.createElement(r,{label:"Rotate",renderIcon:t=>e.createElement(oe,{size:16,...t})})),e.createElement(l,null,e.createElement(r,{label:"Zoom in",renderIcon:t=>e.createElement(A,{size:16,...t})}),e.createElement(r,{label:"Zoom out",renderIcon:t=>e.createElement(O,{size:16,...t})})))}C.args={vertical:!0};z.__docgenInfo={description:"",methods:[],displayName:"_Toolbar"};C.__docgenInfo={description:"",methods:[],displayName:"vertical"};const st=["_Toolbar","vertical"];export{z as _Toolbar,st as __namedExportsOrder,it as default,C as vertical};
