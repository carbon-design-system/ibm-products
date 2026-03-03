var O=Object.defineProperty;var l=(t,s)=>O(t,"name",{value:s,configurable:!0});import{o as r,X as I,am as m,an as d}from"./iframe-D7SEW46n.js";const S=l((t,s,e)=>{if(r(t,I))return(s+1)%e;if(r(t,m))return(s+e-1)%e},"getNextIndex"),c=`
  a[href], area[href], input:not([disabled]):not([tabindex='-1']),
  button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),
  textarea:not([disabled]):not([tabindex='-1']),
  iframe, object, embed, *[tabindex]:not([tabindex='-1']):not([disabled]), *[contenteditable=true]
`,x=`
  a[href], area[href], input:not([disabled]),
  button:not([disabled]),select:not([disabled]),
  textarea:not([disabled]),
  iframe, object, embed, *[tabindex]:not([disabled]), *[contenteditable=true]
`,T=typeof Node<"u"?Node.DOCUMENT_POSITION_PRECEDING|Node.DOCUMENT_POSITION_CONTAINS:0,p=typeof Node<"u"?Node.DOCUMENT_POSITION_FOLLOWING|Node.DOCUMENT_POSITION_CONTAINED_BY:0,_=l((t,s=[],e="cds")=>t instanceof Element&&typeof t.closest=="function"?[`.${e}--overflow-menu-options`,`.${e}--tooltip`,".flatpickr-calendar",...s].some(n=>!!t.closest(n)):!1,"elementOrParentIsFloatingMenu"),C=l(({bodyNode:t,startTrapNode:s,endTrapNode:e,currentActiveNode:a,oldActiveNode:n,selectorsFloatingMenus:f,prefix:u="cds"})=>{if(t&&a&&n&&!t.contains(a)&&!_(a,f,u)){const b=n.compareDocumentPosition(a);if(a===s||b&T){const o=Array.from(t.querySelectorAll(c)).reverse().find(({offsetParent:i})=>!!i);o?o.focus():t!==n&&t.focus()}else if(a===e||b&p){const o=Array.from(t.querySelectorAll(c)).find(({offsetParent:i})=>!!i);o?o.focus():t!==n&&t.focus()}}},"wrapFocus"),N=l(({containerNode:t,currentActiveNode:s,event:e})=>{if(!t)return;["blur","focusout","focusin","focus"].includes(e.type);const a=d(t),n=a[0],f=a[a.length-1];s===f&&!e.shiftKey&&(e.preventDefault(),n.focus()),s===n&&e.shiftKey&&(e.preventDefault(),f.focus())},"wrapFocusWithoutSentinels");export{C as a,x as b,_ as e,S as g,c as s,N as w};
//# sourceMappingURL=wrapFocus-Bvs_mQRd.js.map
