import"./index-DtHxqM--.js";import{k as d,D as b,R as u,U as N}from"./index-CGLP8AGt.js";const D=(t,e,n)=>{if(d(t,b))return(e+1)%n;if(d(t,u))return(e+n-1)%n},O=typeof Node<"u"?Node.DOCUMENT_POSITION_PRECEDING|Node.DOCUMENT_POSITION_CONTAINS:0,p=typeof Node<"u"?Node.DOCUMENT_POSITION_FOLLOWING|Node.DOCUMENT_POSITION_CONTAINED_BY:0,f=`
  a[href], area[href], input:not([disabled]):not([tabindex='-1']),
  button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),
  textarea:not([disabled]):not([tabindex='-1']),
  iframe, object, embed, *[tabindex]:not([tabindex='-1']):not([disabled]), *[contenteditable=true]
`,_=`
  a[href], area[href], input:not([disabled]),
  button:not([disabled]),select:not([disabled]),
  textarea:not([disabled]),
  iframe, object, embed, *[tabindex]:not([disabled]), *[contenteditable=true]
`;function I(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];if(t&&typeof t.closest=="function")return[".cds--overflow-menu-options",".cds--tooltip",".flatpickr-calendar",...e].some(s=>t.closest(s))}function A(t){let{bodyNode:e,startTrapNode:n,endTrapNode:s,currentActiveNode:o,oldActiveNode:a,selectorsFloatingMenus:i}=t;if(e&&o&&a&&!e.contains(o)&&!I(o,i)){const c=a.compareDocumentPosition(o);if(o===n||c&O){const l=[...e.querySelectorAll(f)].reverse().find(r=>!!r.offsetParent);l?l.focus():e!==a&&e.focus()}else if(o===s||c&p){const l=Array.prototype.find.call(e.querySelectorAll(f),r=>!!r.offsetParent);l?l.focus():e!==a&&e.focus()}}}function P(t){let{containerNode:e,currentActiveNode:n,event:s}=t;["blur","focusout","focusin","focus"].includes(s.type);const o=N(e),a=o[0],i=o[o.length-1];n===i&&!s.shiftKey&&(s.preventDefault(),a.focus()),n===a&&s.shiftKey&&(s.preventDefault(),i.focus())}export{A as a,_ as b,I as e,D as g,f as s,P as w};
