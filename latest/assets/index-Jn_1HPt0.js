import{g as f,F as S}from"./floating-ui.core.mjs-LzsX8FoD.js";import{P as p}from"./index-Dk74W0Oi.js";import{r,R as m}from"./index-BwDkhjyp.js";const i=r.createContext(S);function F(e){let{children:o,flags:t={}}=e;const s=r.useContext(i),[u,n]=r.useState(s),[a,l]=r.useState(()=>{const c=f(t);return c.mergeWithScope(s),c});if(s!==u){const c=f(t);c.mergeWithScope(s),l(c),n(s)}return d(t,P,c=>{const g=f(c);g.mergeWithScope(s),l(g)}),m.createElement(i.Provider,{value:a},o)}F.propTypes={children:p.node,flags:p.objectOf(p.bool)};function d(e,o,t){const s=r.useRef(!1),u=r.useRef(t),[n,a]=r.useState(e);o(n,e)||a(e),r.useEffect(()=>{u.current=t}),r.useEffect(()=>{s.current&&u.current(n)},[n]),r.useEffect(()=>{s.current=!0},[])}function C(e){return r.useContext(i).enabled(e)}function P(e,o){if(e===o)return!0;for(const t of Object.keys(e))if(e[t]!==o[t])return!1;for(const t of Object.keys(o))if(o[t]!==e[t])return!1;return!0}export{F,C as u};
