import{b,c as f,_ as u,P as r}from"./index-Cd8snwnz.js";import{e}from"./index-BOZkNhcz.js";import{L as E}from"./Link-BqtwLYC0.js";import{T as B}from"./Text-Rb3iZwUo.js";import{O}from"./bucket-12-CsE6RCLW.js";const N=e.forwardRef(function(p,c){let{"aria-label":t,children:n,className:i,noTrailingSlash:m,...o}=p;const s=b(),a=f({[`${s}--breadcrumb`]:!0,[`${s}--breadcrumb--no-trailing-slash`]:m});return e.createElement("nav",u({className:i,"aria-label":t||"Breadcrumb",ref:c},o),e.createElement("ol",{className:a},n))});N.displayName="Breadcrumb";N.propTypes={"aria-label":r.string,children:r.node,className:r.string,noTrailingSlash:r.bool};const g=e.forwardRef(function(p,c){let{"aria-current":t,children:n,className:i="",href:m,isCurrentPage:o,...s}=p;const a=b(),d=f({[`${a}--breadcrumb-item`]:!0,[`${a}--breadcrumb-item--current`]:o&&t!=="page",[i]:!!i}),l=n;if(l.type&&l.type.displayName!==void 0&&l.type.displayName.includes("OverflowMenu")){const h=e.createElement(O,{className:`${a}--overflow-menu__icon`});return e.createElement("li",u({className:d},s),e.cloneElement(l,{menuOptionsClass:`${a}--breadcrumb-menu-options`,menuOffset:{top:10,left:59},renderIcon:()=>h}))}return typeof n=="string"?e.createElement("li",u({className:d,ref:c},s),m?e.createElement(E,{href:m,"aria-current":t||o},n):e.createElement(B,{"aria-current":t||o,className:`${a}--link`},n)):e.createElement("li",u({className:d,ref:c},s),e.cloneElement(l,{"aria-current":t,className:f(`${a}--link`,l.props.className)}))});g.displayName="BreadcrumbItem";g.propTypes={"aria-current":r.oneOfType([r.bool,r.oneOf(["false","true","page","step","location","date","time"])]),children:r.node,className:r.string,href:r.string,isCurrentPage:r.bool};export{N as B,g as a};
