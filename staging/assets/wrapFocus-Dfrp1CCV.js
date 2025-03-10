import"./index-CPiZ6Cnx.js";import{N as b}from"./index-BPCFiO9b.js";const f=typeof Node<"u"&&Node.DOCUMENT_POSITION_PRECEDING|Node.DOCUMENT_POSITION_CONTAINS,u=typeof Node<"u"&&Node.DOCUMENT_POSITION_FOLLOWING|Node.DOCUMENT_POSITION_CONTAINED_BY,d=`
  a[href], area[href], input:not([disabled]):not([tabindex='-1']),
  button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),
  textarea:not([disabled]):not([tabindex='-1']),
  iframe, object, embed, *[tabindex]:not([tabindex='-1']):not([disabled]), *[contenteditable=true]
`,I=`
  a[href], area[href], input:not([disabled]),
  button:not([disabled]),select:not([disabled]),
  textarea:not([disabled]),
  iframe, object, embed, *[tabindex]:not([disabled]), *[contenteditable=true]
`;function N(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];if(n&&typeof n.closest=="function")return[".cds--overflow-menu-options",".cds--tooltip",".flatpickr-calendar",...e].some(o=>n.closest(o))}function T(n){let{bodyNode:e,startTrapNode:s,endTrapNode:o,currentActiveNode:t,oldActiveNode:a,selectorsFloatingMenus:i}=n;if(e&&t&&a&&!e.contains(t)&&!N(t,i)){const r=a.compareDocumentPosition(t);if(t===s||r&f){const l=[...e.querySelectorAll(d)].reverse().find(c=>!!c.offsetParent);l?l.focus():e!==a&&e.focus()}else if(t===o||r&u){const l=Array.prototype.find.call(e.querySelectorAll(d),c=>!!c.offsetParent);l?l.focus():e!==a&&e.focus()}}}function m(n){let{containerNode:e,currentActiveNode:s,event:o}=n;["blur","focusout","focusin","focus"].includes(o.type);const t=b(e),a=t[0],i=t[t.length-1];s===i&&!o.shiftKey&&(o.preventDefault(),a.focus()),s===a&&o.shiftKey&&(o.preventDefault(),i.focus())}export{I as a,m as b,N as e,d as s,T as w};
