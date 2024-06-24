import{p as g,j as e,B as T}from"./settings-DrdbGLhD.js";import{A as k}from"./index-DhYMnXl4.js";import{r,R as q}from"./index-BwDkhjyp.js";import{c as N,g as O}from"./deprecate-D9ms-jbM.js";import{O as v,a as P}from"./index-3iDKb0iK.js";import{p as n}from"./index-Dk74W0Oi.js";import{u as $}from"./uuidv4-BQrI85uz.js";import{l as A,k as R}from"./events-Bq7WR1mU.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-BONylQH5.js";import"./bucket-17-CArjO86K.js";import"./bucket-9-ClmGjNZq.js";import"./Text-_TFgs5hl.js";import"./index-gKY8typL.js";import"./useAttachedMenu-BGzc4N1_.js";import"./bucket-11-S2aFzyL7.js";import"./wrapFocus-CuszVIVc.js";import"./mergeRefs-CTUecegF.js";import"./createClassWrapper-EbB2Yi8H.js";const t=`${g.prefix}--combo-button`,b="ComboButton",s=r.forwardRef(({children:i,className:C,overflowMenu:y,...w},_)=>{const{current:x}=r.useRef($()),[d,p]=r.useState(!1),[B,...l]=r.Children.toArray(i).filter(Boolean).map(o=>{if(q.isValidElement(o)){const{props:m}=o;return{...m,children:e.jsx("span",{className:`${t}__action`,children:o})}}return null});return e.jsxs("div",{...w,ref:_,className:N(t,C),"data-floating-menu-container":!0,children:[e.jsx(T,{...B}),l.length>0&&e.jsx(v,{...y,className:`${t}__overflow-menu`,menuOptionsClass:`${t}__overflow-menu__list`,onClick:()=>!d&&p(!0),onClose:()=>p(!1),renderIcon:()=>r.createElement(d?o=>e.jsx(A,{size:16,...o}):o=>e.jsx(R,{size:16,...o}),{className:`${t}__overflow-menu__icon`}),flipped:!0,children:l.map(({children:o,renderIcon:m,...I},j)=>r.createElement(P,{...I,key:`${t}--${x}__overflow-menu__item__${j}`,className:`${t}__overflow-menu__item`,itemText:e.jsxs(e.Fragment,{children:[o,m&&e.jsx("span",{className:`${t}__overflow-menu__item__icon`,children:e.jsx(m,{})})]})}))})]})});s.deprecated={level:"warn",details:`Please replace ${b} with Carbon's ComboButton`};s.displayName=b;s.propTypes={children:n.node.isRequired,className:n.string,overflowMenu:n.shape(v.propTypes)};s.__docgenInfo={description:"The combo button consolidates similar actions, while exposing the most commonly used one.",methods:[],displayName:"ComboButton",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Provide the contents of the `ComboButton`",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node",type:{name:"custom",raw:"string"}},overflowMenu:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"onClick",value:{name:"void",required:!1},description:"The event handler for the `click` event."},{key:"onClose",value:{name:"void",required:!1},description:"Function called when menu is closed"},{key:"onFocus",value:{name:"void",required:!1},description:"The event handler for the `focus` event."},{key:"onKeyDown",value:{name:"void",required:!1},description:"The event handler for the `keydown` event."},{key:"onOpen",value:{name:"void",required:!1},description:"Function called when menu is opened"}]}},description:"Provide the [props of the `OverflowMenu`](https://react.carbondesignsystem.com/?path=/docs/overflowmenu)",type:{name:"shape",value:"OverflowMenu.propTypes",computed:!0}}},composes:["ComponentProps"]};const a=({...i})=>e.jsx("span",{...i});a.propTypes={children:n.node.isRequired,disabled:n.bool,href:n.string,renderIcon:n.oneOfType([n.func,n.object])};a.__docgenInfo={description:"The combo button item provides additional actions a user can take.",methods:[],displayName:"ComboButtonItem",props:{children:{description:"Provide the contents of the `ComboButtonItem`",type:{name:"node"},required:!0},disabled:{description:"Specify whether the `ComboButton` should be disabled, or not",type:{name:"custom",raw:"bool"},required:!1},href:{description:"Provide an optional `href` for the `ComboButtonItem` to become an `a` element",type:{name:"custom",raw:"string"},required:!1},renderIcon:{description:"Provide an optional icon to render",type:{name:"union",value:[{name:"func"},{name:"object"}]},required:!1}}};const te={title:"IBM Products/Internal/ComboButton",component:s,tags:["autodocs"]},E=()=>e.jsx(k,{type:"deprecation-notice",text:e.jsxs("div",{children:["This component is deprecated and will be removed in the next major version. Please migrate to Carbon's"," ",e.jsx("a",{href:"https://react.carbondesignsystem.com/?path=/docs/components-combobutton--overview",children:"ComboButton"}),"."]}),children:e.jsxs(s,{children:[e.jsx(a,{children:"ComboButtonItem 1"}),e.jsx(a,{renderIcon:i=>e.jsx(O,{size:16,...i}),children:"ComboButtonItem 2"}),e.jsx(a,{children:"ComboButtonItem 3"})]})}),c=E.bind({});var u,h,f;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`() => <Annotation type="deprecation-notice" text={<div>
        This component is deprecated and will be removed in the next major
        version. Please migrate to Carbon's{' '}
        <a href="https://react.carbondesignsystem.com/?path=/docs/components-combobutton--overview">
          ComboButton
        </a>
        .
      </div>}>
    <ComboButton>
      <ComboButtonItem>ComboButtonItem 1</ComboButtonItem>
      <ComboButtonItem renderIcon={props => <CloudApp size={16} {...props} />}>
        ComboButtonItem 2
      </ComboButtonItem>
      <ComboButtonItem>ComboButtonItem 3</ComboButtonItem>
    </ComboButton>
  </Annotation>`,...(f=(h=c.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const re=["Default"];export{c as Default,re as __namedExportsOrder,te as default};
