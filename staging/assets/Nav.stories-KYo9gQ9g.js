import{p as A,j as e}from"./settings-B0yoEqB-.js";import{a as G}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{R as j,r as m}from"./index-BwDkhjyp.js";import{P as s,p as f}from"./index-Dk74W0Oi.js";import{c as R}from"./useMergedRefs-CY5AfkP4.js";import{u as J}from"./uuidv4-BQrI85uz.js";import{e as Q}from"./bucket-9-C9TeJaCv.js";import{d as U}from"./events-D6dlm1BF.js";import{g as Y}from"./devtools-Cvhd47uB.js";import{useMDXComponents as z}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-C8rwFTKs.js";import{e as Z,i as ee,C as te}from"./index-D4z3D3nr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-D2JPet7M.js";import"./index-BONylQH5.js";import"./v4-CQkTLCs1.js";import"./iframe-BBSBJ9v0.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";const D=j.forwardRef(function(t,b){const{element:h,...y}=t;return j.createElement(h,{...y,ref:b})});D.displayName="NavItemLink";D.propTypes={element:s.elementType};D.defaultProps={element:"a"};D.__docgenInfo={description:"",methods:[],displayName:"NavItemLink",props:{element:{defaultValue:{value:"'a'",computed:!1},description:"@type {elementType} The base element to use to build the link. Defaults to `a`, can also accept alternative tag names or custom components like `Link` from `react-router`.",type:{name:"elementType"},required:!1}}};const c=`${A.prefix}--nav-item`,ne="NavItem",H={activeHref:"#",disabled:!1,element:"a",onClick:()=>{},tabIndex:0},d=({activeHref:r=H.activeHref,children:t=H.children,className:b,current:h,disabled:y=H.disabled,element:k=H.element,href:p,id:N,label:q,onClick:x=H.onClick,tabIndex:$=H.tabIndex,..._})=>{const[u,I]=m.useState(!1);m.useEffect(()=>{p.indexOf(window.location.host)===-1&&I(!0)},[p]);const n=m.useRef(J()),a=`${c}__${n.current}`,o=N||a,i=new RegExp("^([a-z]+://|//)","i").test(p)&&u,C=`${c}__link`,E=(T,B=null)=>y?B:T,P=E($,-1),O=i&&{rel:"noopener noreferrer",target:"_blank"};return e.jsx("li",{..._,className:R(c,b,{[`${c}--active`]:h!==null&&h===o||r!==void 0&&r===p&&!i,[`${c}--disabled`]:y}),label:q,onClick:T=>E(x(T,p)),onKeyDown:T=>E(x(T,p)),role:"menuitem",children:e.jsxs(D,{id:o,className:R(C,{[`${c}__link--external`]:i}),element:k,href:p,tabIndex:P,..._,...O,children:[t,i&&e.jsx(Q,{className:`${c}__link--external__icon`})]})})};d.displayName=ne;d.propTypes={activeHref:s.string,children:s.node.isRequired,className:s.string,current:s.string,disabled:s.bool,element:s.elementType,href:s.string,id:s.string,label:s.string,link:s.bool,onClick:s.func,tabIndex:s.number};d.__docgenInfo={description:"Navigation item component.",methods:[],displayName:"NavItem",props:{activeHref:{defaultValue:{value:"'#'",computed:!1},description:"Hypertext reference for active page.",type:{name:"string"},required:!1},children:{defaultValue:{value:"defaults.children",computed:!0},description:"Provide the contents of the Nav.",type:{name:"node"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Whether the item is disabled.",type:{name:"bool"},required:!1},element:{defaultValue:{value:"'a'",computed:!1},description:"The base element to use to build the link. Defaults to `a`, can also accept alternative tag names or custom components like `Link` from `react-router`.",type:{name:"elementType"},required:!1},onClick:{defaultValue:{value:"() => {}",computed:!1},description:"Click handler of an item.",type:{name:"func"},required:!1},tabIndex:{defaultValue:{value:"0",computed:!1},description:"`tabindex` of an item.",type:{name:"number"},required:!1},className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1},current:{description:"Currently selected item.",type:{name:"string"},required:!1},href:{description:"The href of the nav item.",type:{name:"string"},required:!1},id:{description:"Identifier.",type:{name:"string"},required:!1},label:{description:"Label of an item.",type:{name:"string"},required:!1},link:{description:"Whether the item is a link.",type:{name:"bool"},required:!1}}};const ae="NavList",V=`${A.prefix}--nav-list`,v={activeHref:"#",className:"",children:null,id:"",isExpandedOnPageLoad:!1,onItemClick:()=>{},onListClick:()=>{},tabIndex:0,title:"",icon:"",navigationItemTitle:""};let g=j.forwardRef(({activeHref:r=v.activeHref,children:t=v.children,className:b=v.className,icon:h=v.icon,id:y=v.id,isExpandedOnPageLoad:k=v.isExpandedOnPageLoad,navigationItemTitle:p=v.navigationItemTitle,onItemClick:N=v.onItemClick,onListClick:q=v.onListClick,tabIndex:x=v.tabIndex,title:$=v.title},_)=>{const[u,I]=m.useState(k);m.useEffect(()=>{const l=j.Children.toArray(t).filter(({props:i})=>i.href&&i.href.length>0).map(({props:i})=>i.href);I(l.includes(r)||k)},[]);const n=()=>{u&&I(!1)},a=l=>{const{which:i,type:C}=l;(i===13||i===32||C==="click")&&(u||q(y),I(!u))};m.useImperativeHandle(_,()=>({close:n,isExpandedOnPageLoad:k}));const o=j.Children.map(t,(l,i)=>m.createElement(d,{...l.props,key:`${c}--${i}`,onClick:(C,E)=>{var P,O;N(C,E),(O=(P=l.props).onClick)==null||O.call(P,C)},activeHref:r,tabIndex:u?0:-1}));return e.jsxs("li",{ref:_,className:R(V,b,{[`${c}--expanded`]:u}),tabIndex:x,onClick:a,onKeyDown:a,role:"menuitem",children:[e.jsxs("div",{className:`${c}__link`,children:[h&&e.jsx("img",{alt:p,className:`${c}__img`,src:h}),e.jsx("div",{className:`${c}__content`,children:$}),e.jsx(U,{className:`${V}__icon`})]}),e.jsx("ul",{"aria-label":$,"aria-hidden":!u,className:`${V} ${V}--nested`,role:"menu",children:o})]})});g.propTypes={activeHref:f.string,children:f.node,className:f.string,icon:f.string,id:f.string,isExpandedOnPageLoad:f.bool,navigationItemTitle:f.string,onItemClick:f.func,onListClick:f.func,tabIndex:f.number,title:f.string};g.displayName=ae;g.__docgenInfo={description:"",methods:[{name:"close",docblock:null,modifiers:[],params:[],returns:null}],displayName:"NavList",props:{activeHref:{defaultValue:{value:"'#'",computed:!1},description:"@type {string} Hypertext reference for active page.",type:{name:"custom",raw:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"@type {Node} Child elements.",type:{name:"custom",raw:"node"},required:!1},className:{defaultValue:{value:"''",computed:!1},description:"@type {string} Extra classes to add.",type:{name:"custom",raw:"string"},required:!1},icon:{defaultValue:{value:"''",computed:!1},description:"@type {string} Icon of a list.",type:{name:"custom",raw:"string"},required:!1},id:{defaultValue:{value:"''",computed:!1},description:"@type {string} ID of a list.",type:{name:"custom",raw:"string"},required:!1},isExpandedOnPageLoad:{defaultValue:{value:"false",computed:!1},description:"@type {boolean} State of a list.",type:{name:"custom",raw:"bool"},required:!1},navigationItemTitle:{defaultValue:{value:"''",computed:!1},description:"@type {boolean} Title of nav.",type:{name:"custom",raw:"string"},required:!1},onItemClick:{defaultValue:{value:"() => {}",computed:!1},description:"@type {Function} Click handler for an item.",type:{name:"custom",raw:"func"},required:!1},onListClick:{defaultValue:{value:"() => {}",computed:!1},description:"@type {Function} Click handler for a list.",type:{name:"custom",raw:"func"},required:!1},tabIndex:{defaultValue:{value:"0",computed:!1},description:"@type {number} `tabindex` of an item.",type:{name:"custom",raw:"number"},required:!1},title:{defaultValue:{value:"''",computed:!1},description:"@type {string} Label of the list.",type:{name:"custom",raw:"string"},required:!1}}};const M="Nav",S=`${A.prefix}--nav`;let L=j.forwardRef(({activeHref:r,className:t,children:b,heading:h,label:y,...k},p)=>{const[N,q]=m.useState(r),x=m.useRef({});m.useEffect(()=>{if(!N&&window.location){const{hash:n,pathname:a}=window.location;q(a+n)}},[N]);const $=(n,a)=>{const o=`${c}--${a}`;return m.createElement(d,{...n.props,activeHref:N,key:o,onClick:(l,i)=>u(l,i,n.props.onClick)})},_=(n,a)=>{const o=`${V}--${a}`;return m.createElement(g,{...n.props,activeHref:N,id:o,key:o,onListClick:I,onItemClick:u,ref:l=>x.current[o]=l})},u=(n,a,o)=>{n.stopPropagation();const{type:l,which:i}=n;(i===13||i===32||l==="click")&&a!==N&&q(a),o&&o(n)},I=n=>{Object.keys(x.current).forEach(a=>{a!==n&&!x.current[a].isExpandedOnPageLoad&&x.current[a].close()})};return e.jsxs("nav",{className:R(S,t),"aria-label":y,ref:p,...Y(M),...k,children:[h&&e.jsx("h1",{className:`${S}__heading`,children:h}),e.jsx("ul",{className:`${S}__wrapper`,role:"menubar",children:j.Children.map(b,(n,a)=>{var o;return((o=n==null?void 0:n.type)==null?void 0:o.displayName)===g.displayName?_(n,a):$(n,a)})})]})});L.propTypes={activeHref:s.string,children:s.node,className:s.string,heading:s.string,label:s.string.isRequired};L=A.checkComponentEnabled(L,M);L.displayName=M;L.__docgenInfo={description:"",methods:[],displayName:"Nav",props:{activeHref:{description:"Hypertext reference for active page.",type:{name:"string"},required:!1},children:{description:"Child elements.",type:{name:"node"},required:!1},className:{description:"Extra classes to add.",type:{name:"string"},required:!1},heading:{description:"Heading.",type:{name:"string"},required:!1},label:{description:"Aria-label on the rendered `nav` element.",type:{name:"string"},required:!0}}};function F(r){const t={a:"a",h1:"h1",h2:"h2",li:"li",ul:"ul",...z(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"nav",children:"Nav"}),`
`,e.jsx(t.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,`
`,e.jsx(t.h2,{id:"example-usage",children:"Example usage"}),`
`,`
`,e.jsx(Z,{children:e.jsx(ee,{of:w})}),`
`,e.jsx(t.h2,{id:"code-sample",children:"Code sample"}),`
`,`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(te,{})]})}function ie(r={}){const{wrapper:t}={...z(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(F,{...r})}):F(r)}const se="",Ee={title:"Experimental/Components/Nav",component:L,subcomponents:{NavList:g,NavItem:d},tags:["autodocs"],parameters:{styles:se,docs:{page:ie}}},re=r=>e.jsx("div",{style:{width:"300px"},children:e.jsxs(L,{...r,children:[e.jsxs(g,{title:"Nav list 1",children:[e.jsx(d,{element:"span",customprop:"uniqueValue",href:"#navitem_1-1",children:"Nav item 1-1 (with a custom element)"},"navitem_1-1"),e.jsx(d,{onClick:G("onClick"),href:"#navitem_1-2",children:"Nav item 1-2"},"navitem_1-2")]}),e.jsxs(g,{title:"Nav list 2 expanded on page load",isExpandedOnPageLoad:!0,children:[e.jsx(d,{href:"#navitem_2-1",children:"Nav item 2-1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},"navitem_2-1"),e.jsx(d,{href:"#navitem_2-2",children:"Nav item 2-2"},"navitem_2-2")]}),e.jsxs(g,{title:"Nav list 3",children:[e.jsx(d,{href:"#navitem_3-1",children:"Nav item 3-1"},"navitem_3-1"),e.jsx(d,{href:"https://www.ibm.com/",children:"Nav item that is an external link and wraps to a new line"},"navitem_3-2")]})]})}),w=re.bind({});w.storyName="Default";w.args={label:"Navigation",heading:"Nav example",activeHref:"#"};var X,K,W;w.parameters={...w.parameters,docs:{...(X=w.parameters)==null?void 0:X.docs,source:{originalSource:`args => {
  return <div style={{
    width: '300px'
  }}>
      <Nav {...args}>
        <NavList title="Nav list 1">
          <NavItem key="navitem_1-1" element="span" customprop="uniqueValue" href="#navitem_1-1">
            Nav item 1-1 (with a custom element)
          </NavItem>
          <NavItem key="navitem_1-2" onClick={action('onClick')} href="#navitem_1-2">
            Nav item 1-2
          </NavItem>
        </NavList>
        <NavList title="Nav list 2 expanded on page load" isExpandedOnPageLoad>
          <NavItem key="navitem_2-1" href="#navitem_2-1">
            Nav item 2-1 - Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </NavItem>
          <NavItem key="navitem_2-2" href="#navitem_2-2">
            Nav item 2-2
          </NavItem>
        </NavList>
        <NavList title="Nav list 3">
          <NavItem key="navitem_3-1" href="#navitem_3-1">
            Nav item 3-1
          </NavItem>
          <NavItem key="navitem_3-2" href="https://www.ibm.com/">
            Nav item that is an external link and wraps to a new line
          </NavItem>
        </NavList>
      </Nav>
    </div>;
}`,...(W=(K=w.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};const He=["nav"];export{He as __namedExportsOrder,Ee as default,w as nav};
