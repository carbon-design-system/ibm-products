import{p as b,j as r,c as W}from"./settings-DEdZ0TrD.js";import{r as f}from"./index-BwDkhjyp.js";import{c as C}from"./floating-ui.core.mjs-LzsX8FoD.js";import{T as A}from"./TableSelectRow-ap-9JYe1.js";import{s as H,S as O,h as D}from"./_storybook-styles-C6_yZqW6.js";const h=`${b.prefix}--datagrid`,x=`${b.prefix}--datagrid__checkbox-cell`,Q=o=>{F(o);const i=t=>{const{rows:e}=t,s=e.map(c=>({...c,isSelectable:!0}));Object.assign(t,{rows:s})};o.useInstance.push(i),o.useInstance.push(t=>{Object.assign(t,{withSelectRows:!0})}),o.visibleColumns.push(t=>{const e=[...t],s=e.findIndex(n=>n.id==="expander"),c=s>-1?e.splice(s,1):[];return[...s>-1&&c&&c.length?c:[],{id:H,Header:n=>r.jsx(O,{...n}),Cell:n=>r.jsx(B,{...n})},...e]})},F=o=>{const i=(t,{row:e})=>{const{checked:s}=e.getToggleRowSelectedProps();return[t,{className:C([`${h}__carbon-row`,{[`${W.prefix}--data-table--selected`]:s,[`${h}__active-row`]:s}])}]};o.getRowProps.push(i)},B=o=>{var m;const{isFetching:i=!1,tableId:t,row:e,cell:s,radio:c,toggleAllRowsSelected:n,onRadioSelect:d,onRowSelect:a,columns:R,withStickyColumn:I,dispatch:P,getRowId:$}=o,[k,p]=f.useState();f.useLayoutEffect(()=>{p(window.innerWidth);function l(){p(window.innerWidth)}return window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},[]);const y=async l=>{var g,S;l.stopPropagation(),c&&(n(!1),d&&d(e)),j(l),a==null||a(e,l),D({dispatch:P,rowData:e,isChecked:l.target.checked,getRowId:$,selectAll:null});const N=((g=document==null?void 0:document.activeElement)==null?void 0:g.id)??"";await void 0,(S=document==null?void 0:document.getElementById(N))==null||S.focus()},E=i||e.getRowProps().disabled,{onChange:j,title:_,...v}=e.getToggleRowSelectedProps(),w=s.getCellProps(),z=((m=R[0])==null?void 0:m.sticky)==="left"&&I,u=`${t}-${e.id}-${e.index}`,{key:L,_cellProps:T}=w;return r.jsx(A,{...T,...v,radio:c,onSelect:y,id:u,name:`${u}-name`,className:C([x,w.className,{[`${x}-sticky-left`]:z&&Number(k)>671}]),ariaLabel:_,disabled:E},L)};export{Q as u};
