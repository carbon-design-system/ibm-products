import{k as L,l as k,x as _}from"./iframe-DCyUdvyd.js";import{c as q}from"./repeat-aa0lEo9C.js";import"./guide-banner-element-C8T2Lcu3.js";import{i as w}from"./icon-loader-DJwbA0i1.js";import{i as P,a as I}from"./20-CppOV_ea.js";const O=".body{color:var(--cds-text-primary,#161616)}.body-elm{inline-size:600px;padding-inline-start:3rem}.footer{justify-content:space-between;inline-size:100%;display:flex}.footer-left .guide-banner-story__toggle-button{margin-inline-start:2rem}",B=L(O),p=`${k}--snappy`,A=`${p}__elm`,c=`${p}__selection`;function D(e,n){const o=document.querySelector(e);if(!o)return;const t=document.createElement("style");t.textContent=`
  .${p} {
    display: flex;
    flex: none;
    overflow: scroll;
    scroll-snap-type: x mandatory;
    width: 100%;
  }

  .${p}::-webkit-scrollbar {
    display: none;
  }

  .${p}__elm {
    scroll-snap-align: start;
    flex: none;
    width: 100%;
  }
`,document.head.appendChild(t),o.classList.add(p);const r="onscrollsnapchange"in o,i=o.querySelectorAll(n);if(i.length>0&&i.forEach(l=>{l.classList.add(A)}),r)o.addEventListener("scrollsnapchange",l=>{const a=l,g=document.querySelector(`.${c}`);g&&g.classList.remove(c),a.snapTargetInline.classList.add(c)});else{const l=h=>{h.forEach(s=>{s.target.classList.toggle(c,s.isIntersecting)})};let a;a&&a.disconnect(),a=new IntersectionObserver(l,{root:o,threshold:1}),i.forEach(h=>{a.observe(h)})}}function v(){return document.querySelector(`.${c}`)}function y(e,n){const o=e.getBoundingClientRect(),t=n.getBoundingClientRect();return o.left>=t.left&&o.right<=t.right}function N(e,n,o){let t=e,r=e;for(;t;){if(!y(t,n))return t;r=t,t=o==="next"?t.nextElementSibling:t.previousElementSibling}return r}function C(e,n,o){const t=e.parentElement;if(!t)return;const r=N(e,t,o),i=y(r,t);if(i){const l=document.querySelector(`.${c}`);l&&l.classList.remove(c),r.classList.add(c)}r.scrollIntoView({behavior:"smooth",inline:n}),i&&setTimeout(()=>{t.dispatchEvent(new Event("scrollend",{bubbles:!0}))},50)}function V(){const e=F();e&&C(e,"start","next")}function j(){const e=H();e&&C(e,"nearest","previous")}function F(){const e=v();if(e)return e.nextElementSibling}function H(){const e=v();if(e)return e.previousElementSibling}function M(){const e=v();if(!e||!e.parentElement)return!1;let n=e.nextElementSibling;for(;n;){if(!y(n,e.parentElement))return!0;n=n.nextElementSibling}return!1}function W(){const e=v();if(!e||!e.parentElement)return!1;let n=e.previousElementSibling;for(;n;){if(!y(n,e.parentElement))return!0;n=n.previousElementSibling}return!1}const{fn:d}=__STORYBOOK_MODULE_TEST__,z={},T="guide-banner-story",G=Array(10).fill({}).map((e,n)=>({titleText:"Title text",descriptionText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices, erat ut cursus porta, erat mi lobortis lectus, et tristique sapien mi eget arcu. Maecenas gravida commodo urna, vel mollis sapien aliquam id. Pellentesque id metus vestibulum, sodales eros quis, rhoncus sem. Praesent felis justo, cursus eu malesuada vitae, ornare ac lectus. Curabitur non urna ut erat tincidunt ullamcorper. Cras id sapien justo. Pellentesque consequat mollis ex sit amet aliquet.",idx:n})),S=e=>{const{"@c4p-guidebanner-ontoggle":n,"@c4p-guidebanner-onclose":o,collapseText:t,expandText:r,titleText:i,open:l}=e;document.addEventListener("DOMContentLoaded",()=>{D(".body",".body-elm")});const a=()=>{V()},g=()=>{j()};return _`
    <style>
      ${B}
    </style>
    <c4p-guide-banner
      @c4p-guidebanner-toggle=${n}
      @c4p-guidebanner-close=${o}
      class=${T}
      collapseText=${t}
      expandText=${r}
      ?open=${l}
      titleText=${i}
    >
      <div slot="body">
        <div class="body" dir="ltr" @scrollend=${()=>{const s=document.getElementById("next-btn");M()?s?.removeAttribute("disabled"):s?.setAttribute("disabled","");const u=document.getElementById("previous-btn");W()?u?.removeAttribute("disabled"):u?.setAttribute("disabled","")}}>
          ${q(G,s=>s.idx,s=>_`
              <c4p-guide-banner-element class="body-elm">
                <div slot="title">${s.titleText} ${s.idx+1}</div>
                <div slot="description">${s.descriptionText}</div>
                <cds-button kind="ghost">Read more</cds-button>
              </c4p-guide-banner-element>
            `)}
        </div>
      </div>
      <div class="footer" slot="footer">
        <div class="footer-left">
          <cds-button
            id="toggle-btn"
            kind="ghost"
            class="${T}__toggle-button"
            @click=${s=>{const u=s.target?.closest("c4p-guide-banner"),R=s.target,$=document.querySelector(".footer-right");u&&(u._handleToggle(),setTimeout(()=>{const E=R.closest("cds-button");E&&(E.textContent=u.open?t:r),$&&($.style.display=u.open?"flex":"none")},0))}}
          >
            ${l?t:r}
          </cds-button>
        </div>
        <div class="footer-right" style="display: ${l?"flex":"none"}">
          <cds-button
            id="previous-btn"
            kind="ghost"
            class="${T}__toggle-button"
            @click=${g}
            ?disabled=${!0}
          >
            <span
              @click=${s=>{s.preventDefault()}}
            >
              ${w(P,{slot:"icon"})}
            </span>
          </cds-button>
          <cds-button
            id="next-btn"
            kind="ghost"
            class="${T}__toggle-button"
            @click=${a}
            ?disabled=${!1}
          >
            <span
              @click=${s=>{s.preventDefault()}}
            >
              ${w(I,{slot:"icon"})}
            </span>
          </cds-button>
        </div>
      </div>
    </c4p-guide-banner>
  `},m={args:{"@c4p-guidebanner-ontoggle":d(),"@c4p-guidebanner-onclose":d(),collapseText:"Read less",expandText:"Read more",titleText:"Page-related heading that can stand on its own",open:!0},argTypes:z,render:S},K={title:"Components/GuideBanner"},b={args:{"@c4p-guidebanner-ontoggle":d(),"@c4p-guidebanner-onclose":d(),collapseText:"Read less",expandText:"Read more",titleText:"Page-related heading that can stand on its own",open:!1},render:S},f={args:{"@c4p-guidebanner-ontoggle":d(),"@c4p-guidebanner-onclose":d(),collapseText:"Show less",expandText:"Show more",titleText:"Page-related heading that can stand on its own",open:!0},render:S},x={args:{"@c4p-guidebanner-ontoggle":d(),"@c4p-guidebanner-onclose":d(),collapseText:"Read less",expandText:"Read more",titleText:"",open:!0},render:S};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    '@c4p-guidebanner-ontoggle': fn(),
    '@c4p-guidebanner-onclose': fn(),
    collapseText: 'Read less',
    expandText: 'Read more',
    titleText: 'Page-related heading that can stand on its own',
    open: true
  },
  argTypes,
  render: renderTemplate
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    '@c4p-guidebanner-ontoggle': fn(),
    '@c4p-guidebanner-onclose': fn(),
    collapseText: 'Read less',
    expandText: 'Read more',
    titleText: 'Page-related heading that can stand on its own',
    open: false
  },
  render: renderTemplate
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    '@c4p-guidebanner-ontoggle': fn(),
    '@c4p-guidebanner-onclose': fn(),
    collapseText: 'Show less',
    expandText: 'Show more',
    titleText: 'Page-related heading that can stand on its own',
    open: true
  },
  render: renderTemplate
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    '@c4p-guidebanner-ontoggle': fn(),
    '@c4p-guidebanner-onclose': fn(),
    collapseText: 'Read less',
    expandText: 'Read more',
    titleText: '',
    open: true
  },
  render: renderTemplate
}`,...x.parameters?.docs?.source}}};const U=["Default","Collapsed","WithCustomLabels","WithoutTitle"],ee=Object.freeze(Object.defineProperty({__proto__:null,Collapsed:b,Default:m,WithCustomLabels:f,WithoutTitle:x,__namedExportsOrder:U,default:K},Symbol.toStringTag,{value:"Module"}));export{m as D,ee as G};
