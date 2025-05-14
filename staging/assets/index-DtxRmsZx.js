import{d as k,W as E,o as q,Q as o}from"./index-CMVdkQrl.js";import{p as N,B}from"./settings-C3kz8lqM.js";import{O as p}from"./index-CrpWSFad.js";import{O as I}from"./OverflowMenuItem-CqnmCkEJ.js";import{r,e}from"./index-DtHxqM--.js";import{u as O}from"./uuidv4-BN2rGLQG.js";const t=`${N.prefix}--combo-button`,u="ComboButton",a=r.forwardRef((i,h)=>{const{children:v,className:y,overflowMenu:w,..._}=i,{current:b}=r.useRef(O()),[l,c]=r.useState(!1),d=r.Children.toArray(v).filter(Boolean).map(n=>{if(e.isValidElement(n)){const{props:s}=n;return{...s,children:e.createElement("span",{className:`${t}__action`},n)}}return null}),C=d.slice(0,1),m=d.slice(1);return e.createElement("div",{..._,ref:h,className:k(t,y),"data-floating-menu-container":!0},e.createElement(B,{...C}),m.length>0&&e.createElement(p,{...w,className:`${t}__overflow-menu`,menuOptionsClass:`${t}__overflow-menu__list`,onClick:()=>!l&&c(!0),onClose:()=>c(!1),renderIcon:()=>r.createElement(l?n=>e.createElement(E,{size:16,...n}):n=>e.createElement(q,{size:16,...n}),{className:`${t}__overflow-menu__icon`}),flipped:!0},m.map(({children:n,renderIcon:s,...T},g)=>e.createElement(I,{...T,key:`${t}--${b}__overflow-menu__item__${g}`,className:`${t}__overflow-menu__item`,itemText:e.createElement(e.Fragment,null,n,s&&e.createElement("span",{className:`${t}__overflow-menu__item__icon`},e.createElement(s,null)))}))))});a.deprecated={level:"warn",details:`Please replace ${u} with Carbon's ComboButton`};a.displayName=u;a.propTypes={children:o.node.isRequired,className:o.string,overflowMenu:o.shape(p.propTypes)};a.__docgenInfo={description:"The combo button consolidates similar actions, while exposing the most commonly used one.",methods:[],displayName:"ComboButton",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Provide the contents of the `ComboButton`",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node",type:{name:"custom",raw:"string"}},overflowMenu:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /**
   * The event handler for the \`click\` event.
   */
  onClick?(): void;

  /**
   * Function called when menu is closed
   */
  onClose?(): void;

  /**
   * The event handler for the \`focus\` event.
   */
  onFocus?(): void;

  /**
   * The event handler for the \`keydown\` event.
   */
  onKeyDown?(): void;

  /**
   * Function called when menu is opened
   */
  onOpen?(): void;
}`,signature:{properties:[{key:"onClick",value:{name:"void",required:!1},description:"The event handler for the `click` event."},{key:"onClose",value:{name:"void",required:!1},description:"Function called when menu is closed"},{key:"onFocus",value:{name:"void",required:!1},description:"The event handler for the `focus` event."},{key:"onKeyDown",value:{name:"void",required:!1},description:"The event handler for the `keydown` event."},{key:"onOpen",value:{name:"void",required:!1},description:"Function called when menu is opened"}]}},description:"Provide the [props of the `OverflowMenu`](https://react.carbondesignsystem.com/?path=/docs/overflowmenu)",type:{name:"shape",value:"OverflowMenu.propTypes",computed:!0}}},composes:["ComponentProps"]};const f=({...i})=>e.createElement("span",{...i});f.propTypes={children:o.node.isRequired,disabled:o.bool,href:o.string,renderIcon:o.oneOfType([o.func,o.object])};f.__docgenInfo={description:"The combo button item provides additional actions a user can take.",methods:[],displayName:"ComboButtonItem",props:{children:{description:"Provide the contents of the `ComboButtonItem`",type:{name:"node"},required:!0},disabled:{description:"Specify whether the `ComboButton` should be disabled, or not",type:{name:"custom",raw:"bool"},required:!1},href:{description:"Provide an optional `href` for the `ComboButtonItem` to become an `a` element",type:{name:"custom",raw:"string"},required:!1},renderIcon:{description:"Provide an optional icon to render",type:{name:"union",value:[{name:"func"},{name:"object"}]},required:!1}}};export{a as C,f as a};
