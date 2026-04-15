var O=Object.defineProperty;var l=(t,a)=>O(t,"name",{value:a,configurable:!0});import{F as b,$ as p,ap as d,aq as I}from"./iframe-DgruYanb.js";const S=l((t,a,e)=>{if(b(t,p))return(a+1)%e;if(b(t,d))return(a+e-1)%e},"getNextIndex"),u=`
  a[href], area[href], input:not([disabled]):not([tabindex='-1']),
  button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),
  textarea:not([disabled]):not([tabindex='-1']),
  iframe, object, embed, *[tabindex]:not([tabindex='-1']):not([disabled]), *[contenteditable=true]
`,h=`
  a[href], area[href], input:not([disabled]),
  button:not([disabled]),select:not([disabled]),
  textarea:not([disabled]),
  iframe, object, embed, *[tabindex]:not([disabled]), *[contenteditable=true]
`,m=typeof Node<"u"?Node.DOCUMENT_POSITION_PRECEDING|Node.DOCUMENT_POSITION_CONTAINS:0,T=typeof Node<"u"?Node.DOCUMENT_POSITION_FOLLOWING|Node.DOCUMENT_POSITION_CONTAINED_BY:0,E=l((t,a=[],e="cds")=>t instanceof Element&&typeof t.closest=="function"?[`.${e}--overflow-menu-options`,`.${e}--tooltip`,".flatpickr-calendar",...a].some(s=>!!t.closest(s)):!1,"elementOrParentIsFloatingMenu"),w=l(({bodyNode:t,startTrapNode:a,endTrapNode:e,currentActiveNode:s,oldActiveNode:n,selectorsFloatingMenus:i,prefix:c="cds"})=>{if(t&&s&&n&&!t.contains(s)&&!E(s,i,c)){const r=n.compareDocumentPosition(s);if(s===a||r&m){const o=Array.from(t.querySelectorAll(u)).reverse().find(({offsetParent:f})=>!!f);o?o.focus():t!==n&&t.focus()}else if(s===e||r&T){const o=Array.from(t.querySelectorAll(u)).find(({offsetParent:f})=>!!f);o?o.focus():t!==n&&t.focus()}}},"wrapFocus"),C=l(({containerNode:t,currentActiveNode:a,event:e})=>{if(!t)return;if(["blur","focusout","focusin","focus"].includes(e.type))throw new Error(`Error: wrapFocusWithoutSentinels(...) called in unsupported ${e.type} event.

Call wrapFocusWithoutSentinels(...) from onKeyDown instead.`);const s=I(t),n=s[0],i=s[s.length-1];a===i&&!e.shiftKey&&(e.preventDefault(),n.focus()),a===n&&e.shiftKey&&(e.preventDefault(),i.focus())},"wrapFocusWithoutSentinels");export{w as a,h as b,E as e,S as g,u as s,C as w};
//# sourceMappingURL=wrapFocus-CTeM4Oek.js.map
