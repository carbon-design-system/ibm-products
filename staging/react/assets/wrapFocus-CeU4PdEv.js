import{o as b,X as u,an as O,ao as I}from"./iframe-BbTYfv9-.js";const _=(t,a,e)=>{if(b(t,u))return(a+1)%e;if(b(t,O))return(a+e-1)%e},r=`
  a[href], area[href], input:not([disabled]):not([tabindex='-1']),
  button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),
  textarea:not([disabled]):not([tabindex='-1']),
  iframe, object, embed, *[tabindex]:not([tabindex='-1']):not([disabled]), *[contenteditable=true]
`,D=`
  a[href], area[href], input:not([disabled]),
  button:not([disabled]),select:not([disabled]),
  textarea:not([disabled]),
  iframe, object, embed, *[tabindex]:not([disabled]), *[contenteditable=true]
`,d=typeof Node<"u"?Node.DOCUMENT_POSITION_PRECEDING|Node.DOCUMENT_POSITION_CONTAINS:0,m=typeof Node<"u"?Node.DOCUMENT_POSITION_FOLLOWING|Node.DOCUMENT_POSITION_CONTAINED_BY:0,T=(t,a=[],e="cds")=>t instanceof Element&&typeof t.closest=="function"?[`.${e}--overflow-menu-options`,`.${e}--tooltip`,".flatpickr-calendar",...a].some(n=>!!t.closest(n)):!1,E=({bodyNode:t,startTrapNode:a,endTrapNode:e,currentActiveNode:s,oldActiveNode:n,selectorsFloatingMenus:l,prefix:c="cds"})=>{if(t&&s&&n&&!t.contains(s)&&!T(s,l,c)){const i=n.compareDocumentPosition(s);if(s===a||i&d){const o=Array.from(t.querySelectorAll(r)).reverse().find(({offsetParent:f})=>!!f);o?o.focus():t!==n&&t.focus()}else if(s===e||i&m){const o=Array.from(t.querySelectorAll(r)).find(({offsetParent:f})=>!!f);o?o.focus():t!==n&&t.focus()}}},S=({containerNode:t,currentActiveNode:a,event:e})=>{if(!t)return;["blur","focusout","focusin","focus"].includes(e.type);const s=I(t),n=s[0],l=s[s.length-1];a===l&&!e.shiftKey&&(e.preventDefault(),n.focus()),a===n&&e.shiftKey&&(e.preventDefault(),l.focus())};export{E as a,D as b,T as e,_ as g,r as s,S as w};
//# sourceMappingURL=wrapFocus-CeU4PdEv.js.map
