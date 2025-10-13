import{n as r,a0 as c,am as u,an as O}from"./iframe-DKsKIeO_.js";const T=(t,a,e)=>{if(r(t,c))return(a+1)%e;if(r(t,u))return(a+e-1)%e},b=`
  a[href], area[href], input:not([disabled]):not([tabindex='-1']),
  button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),
  textarea:not([disabled]):not([tabindex='-1']),
  iframe, object, embed, *[tabindex]:not([tabindex='-1']):not([disabled]), *[contenteditable=true]
`,_=`
  a[href], area[href], input:not([disabled]),
  button:not([disabled]),select:not([disabled]),
  textarea:not([disabled]),
  iframe, object, embed, *[tabindex]:not([disabled]), *[contenteditable=true]
`,I=typeof Node<"u"?Node.DOCUMENT_POSITION_PRECEDING|Node.DOCUMENT_POSITION_CONTAINS:0,m=typeof Node<"u"?Node.DOCUMENT_POSITION_FOLLOWING|Node.DOCUMENT_POSITION_CONTAINED_BY:0,d=(t,a=[])=>t instanceof Element&&typeof t.closest=="function"?[".cds--overflow-menu-options",".cds--tooltip",".flatpickr-calendar",...a].some(s=>!!t.closest(s)):!1,D=({bodyNode:t,startTrapNode:a,endTrapNode:e,currentActiveNode:s,oldActiveNode:n,selectorsFloatingMenus:l})=>{if(t&&s&&n&&!t.contains(s)&&!d(s,l)){const i=n.compareDocumentPosition(s);if(s===a||i&I){const o=Array.from(t.querySelectorAll(b)).reverse().find(({offsetParent:f})=>!!f);o?o.focus():t!==n&&t.focus()}else if(s===e||i&m){const o=Array.from(t.querySelectorAll(b)).find(({offsetParent:f})=>!!f);o?o.focus():t!==n&&t.focus()}}},E=({containerNode:t,currentActiveNode:a,event:e})=>{if(!t)return;["blur","focusout","focusin","focus"].includes(e.type);const s=O(t),n=s[0],l=s[s.length-1];a===l&&!e.shiftKey&&(e.preventDefault(),n.focus()),a===n&&e.shiftKey&&(e.preventDefault(),l.focus())};export{D as a,_ as b,d as e,T as g,b as s,E as w};
