import{e as i}from"./index-DtHxqM--.js";import{P as n}from"./index-CGLP8AGt.js";const l=o=>{let t=!0;return i.Children.forEach(o,e=>{var r,a;e&&t&&(t=((r=e==null?void 0:e.type)==null?void 0:r.displayName)==="Wrap"&&l((a=e==null?void 0:e.props)==null?void 0:a.children))}),t},s=i.forwardRef(({alwaysRender:o,children:t,element:e="div",neverRender:r,className:a,title:p,...d},m)=>(r||l(t))&&!o?null:i.createElement(e,{className:a,...d,ref:m,title:p},t));s.displayName="Wrap";s.propTypes={alwaysRender:n.bool,children:n.node,className:n.string,element:n.elementType,neverRender:n.bool,title:n.string};s.__docgenInfo={description:`A simple conditional wrapper that encloses its children in a <div> (or other
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
components that decide not to render, nothing will be rendered in the DOM.`,type:{name:"node"},required:!1}},composes:["PropsWithChildren"]};export{s as W};
