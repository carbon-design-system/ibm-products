import"./index-DxDX2vOa.js";import{K as f}from"./index-B_euquWE.js";const u=typeof Node<"u"&&Node.DOCUMENT_POSITION_PRECEDING|Node.DOCUMENT_POSITION_CONTAINS,b=typeof Node<"u"&&Node.DOCUMENT_POSITION_FOLLOWING|Node.DOCUMENT_POSITION_CONTAINED_BY,d=`
  a[href], area[href], input:not([disabled]):not([tabindex='-1']),
  button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),
  textarea:not([disabled]):not([tabindex='-1']),
  iframe, object, embed, *[tabindex]:not([tabindex='-1']):not([disabled]), *[contenteditable=true]
`,T=`
  a[href], area[href], input:not([disabled]),
  button:not([disabled]),select:not([disabled]),
  textarea:not([disabled]),
  iframe, object, embed, *[tabindex]:not([disabled]), *[contenteditable=true]
`;function N(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];if(n&&typeof n.closest=="function")return[".cds--overflow-menu-options",".cds--tooltip",".flatpickr-calendar",...e].some(o=>n.closest(o))}function m(n){let{bodyNode:e,startTrapNode:a,endTrapNode:o,currentActiveNode:t,oldActiveNode:s,selectorsFloatingMenus:r}=n;if(e&&t&&s&&!e.contains(t)&&!N(t,r)){const c=s.compareDocumentPosition(t);if(t===a||c&u){const l=[...e.querySelectorAll(d)].reverse().find(i=>!!i.offsetParent);l?l.focus():e!==s&&e.focus()}else if(t===o||c&b){const l=Array.prototype.find.call(e.querySelectorAll(d),i=>!!i.offsetParent);l?l.focus():e!==s&&e.focus()}}}function E(n){let{containerNode:e,currentActiveNode:a,event:o}=n;["blur","focusout","focusin","focus"].includes(o.type);const t=f(e),s=t[0],r=t[t.length-1];a===r&&!o.shiftKey&&(o.preventDefault(),s.focus()),a===s&&o.shiftKey&&(o.preventDefault(),r.focus())}export{T as a,E as b,N as e,d as s,m as w};
