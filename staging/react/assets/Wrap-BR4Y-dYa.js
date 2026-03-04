var c=Object.defineProperty;var o=(t,e)=>c(t,"name",{value:e,configurable:!0});import{e as a,P as n}from"./iframe-LiaStyBs.js";const s=o(t=>{let e=!0;return a.Children.forEach(t,r=>{r&&(e&&=r?.type?.displayName==="Wrap"&&s(r?.props?.children))}),e},"isEmpty"),i=a.forwardRef(({alwaysRender:t,children:e,element:r="div",neverRender:l,className:d,title:p,...h},m)=>(l||s(e))&&!t?null:a.createElement(r,{className:d,...h,ref:m,title:p},e));i.displayName="Wrap";i.propTypes={alwaysRender:n.bool,children:n.node,className:n.string,element:n.elementType,neverRender:n.bool,title:n.string};i.__docgenInfo={description:`A simple conditional wrapper that encloses its children in a <div> (or other
element if specified), passing any supplied attributes to the <div> (or other
element). The component renders nothing at all if there are no children or
the children are empty/falsy, or if all the non-falsy children are themselves
Wrap components that do not wish to render. This behavior can be overridden
by setting neverRender or alwaysRender to true. Note that if a ref is passed,
the ref.current will be set to the wrapper element if it renders, and will
remain undefined if it does not render.`,methods:[],displayName:"Wrap",props:{alwaysRender:{required:!1,tsType:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}]},description:`Specify whether the wrapper element should render even if there are no
children or the children are themselves empty wrappers. Useful if there
are some conditions in which the wrapper element is still required. Note
that this prop takes precedence over neverRender if both are set to true.`,type:{name:"bool"}},element:{required:!1,tsType:{name:"union",raw:"(() => ReactNode) | string | ElementType",elements:[{name:"unknown"},{name:"string"},{name:"ElementType"}]},description:"The element name or component to use as a wrapper for the content.",defaultValue:{value:"'div'",computed:!1},type:{name:"elementType"}},neverRender:{required:!1,tsType:{name:"boolean"},description:`Specify whether nothing should be rendered even if there are children
in the content. Useful if there are some circumstances in which the
component should not render at all. Note that if alwaysRender is also
set to true then it will take precedence and the wrapper element and
content will be rendered.`,type:{name:"bool"}},className:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},tabIndex:{required:!1,tsType:{name:"number"},description:"Tab index for the wrapper div"},title:{required:!1,tsType:{name:"string"},description:"The title attribute the content.",type:{name:"string"}},children:{description:`The content of the wrapper element. If no children are supplied, or the
resulting value(s) are falsy, or if all the non-falsy children are Wrap
components that decide not to render, nothing will be rendered in the DOM.`,type:{name:"node"},required:!1}},composes:["PropsWithChildren"]};export{i as W};
//# sourceMappingURL=Wrap-BR4Y-dYa.js.map
