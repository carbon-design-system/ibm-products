import{p as v,j as h,B as P,c as A}from"./settings-DEdZ0TrD.js";import{R as H,r as a}from"./index-BwDkhjyp.js";import{c as T}from"./floating-ui.core.mjs-LzsX8FoD.js";import{P as e}from"./index-Dk74W0Oi.js";import{g as O}from"./devtools-BMJcATO0.js";const i=`${v.prefix}--truncated-list`,f="TruncatedList",l={as:"ul",collapsedItemsLimit:5,expandedItemsLimit:10,onClick:()=>{},viewLessLabel:"View less",viewMoreLabel:r=>`View more (${r})`};let o=H.forwardRef(({children:r,className:w,as:x=l.as,buttonClassName:L,collapsedItemsLimit:C=l.collapsedItemsLimit,expandedItemsLimit:I=l.expandedItemsLimit,onClick:y=l.onClick,viewLessLabel:N=l.viewLessLabel,viewMoreLabel:R=l.viewMoreLabel,...k},q)=>{const s=a.Children.toArray(r),n=Math.max(C,1),c=Math.min(I,s.length),[t,V]=a.useState(!0),[E,$]=a.useState(n*16),m=a.useRef(),M=()=>{V(d=>!d)};return a.useEffect(()=>{y(t)},[t,y]),a.useEffect(()=>{var d,g;if(m&&s.length>0){const S=t?n:c,u=(d=m.current)==null?void 0:d.childNodes;let b=0;for(let p=0;p<S;p++)if(u&&u[p]){const _=u[p],j=((g=window==null?void 0:window.getComputedStyle(_))==null?void 0:g.height)||"16";b+=parseInt(j)}$(b)}},[s,n,c,t,m]),h.jsxs("div",{...k,className:T(i,w,t?`${i}--collapsed`:`${i}--expanded`,!t&&s.length<=c&&`${i}--expanded-all`),ref:q,...O(f),children:[h.jsx(x,{className:`${i}__list`,ref:m,style:{height:E},children:t?s.slice(0,n):r}),s.length>n&&h.jsx(P,{className:T(`${i}__button`,`${A.prefix}--link`,L),kind:"ghost",size:"sm",onClick:M,children:t?R(s.length-n):N})]})});o=v.checkComponentEnabled(o,f);o.displayName=f;o.propTypes={as:e.oneOfType([e.elementType,e.string]),buttonClassName:e.string,children:e.node.isRequired,className:e.string,collapsedItemsLimit:e.number,expandedItemsLimit:e.number,onClick:e.func,viewLessLabel:e.string,viewMoreLabel:e.func};o.__docgenInfo={description:"The `TruncatedList` allows consumers to control how many items are\nrevealed to the user while giving the user the ability to expand\nand see the entire list.",methods:[],displayName:"TruncatedList",props:{as:{required:!1,tsType:{name:"union",raw:"React.ElementType | string",elements:[{name:"ReactElementType",raw:"React.ElementType"},{name:"string"}]},description:"The type of list element to render.\nThis could be a `ul`, `ol`, or a custom React component.",defaultValue:{value:"'ul'",computed:!1},type:{name:"union",value:[{name:"elementType"},{name:"string"}]}},buttonClassName:{required:!1,tsType:{name:"string"},description:"Optional class name for expand/collapse button.",type:{name:"string"}},children:{required:!0,tsType:{name:"ReactNode"},description:"The contents of the TruncatedList.",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}},collapsedItemsLimit:{required:!1,tsType:{name:"number"},description:`Number of items to render and display when the list is truncated and collapsed.
Scrolling is not enabled when collapsed. The smallest number is 1.`,defaultValue:{value:"5",computed:!1},type:{name:"number"}},expandedItemsLimit:{required:!1,tsType:{name:"number"},description:`Maximum number of items to show when the list is expanded. All
items are rendered when the list is expanded. Scrolling is enabled
if there are more items to display than this number.`,defaultValue:{value:"10",computed:!1},type:{name:"number"}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:"Optional callback reports the collapsed state of the list.",defaultValue:{value:"() => {}",computed:!1},type:{name:"func"}},viewLessLabel:{required:!1,tsType:{name:"string"},description:"Text label for when the list is expanded.",defaultValue:{value:"'View less'",computed:!1},type:{name:"string"}},viewMoreLabel:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:"Callback function for building the label when the list is collapsed.",defaultValue:{value:"(value) => `View more (${value})`",computed:!1},type:{name:"func"}}},composes:["PropsWithChildren"]};export{o as T};
