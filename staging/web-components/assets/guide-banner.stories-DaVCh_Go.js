import{k as L,l as k,x as E}from"./iframe-Dq7_sE-R.js";import{c as q}from"./repeat-jPnEdKWG.js";import"./guide-banner-element-DgSr73lW.js";import{i as w}from"./icon-loader-DBarA4V3.js";import{v as P,a as I}from"./index-DkSYGz6Z.js";const O=".body{color:var(--cds-text-primary, #161616)}.body-elm{inline-size:600px;padding-inline-start:3rem}.footer{display:flex;justify-content:space-between;inline-size:100%}.footer-left .guide-banner-story__toggle-button{margin-inline-start:2rem}",B=L(O),p=`${k}--snappy`,A=`${p}__elm`,c=`${p}__selection`;function D(e,n){const s=document.querySelector(e);if(!s)return;const t=document.createElement("style");t.textContent=`
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
`,document.head.appendChild(t),s.classList.add(p);const r="onscrollsnapchange"in s,a=s.querySelectorAll(n);if(a.length>0&&a.forEach(l=>{l.classList.add(A)}),r)s.addEventListener("scrollsnapchange",l=>{const i=l,g=document.querySelector(`.${c}`);g&&g.classList.remove(c),i.snapTargetInline.classList.add(c)});else{const l=h=>{h.forEach(o=>{o.target.classList.toggle(c,o.isIntersecting)})};let i;i&&i.disconnect(),i=new IntersectionObserver(l,{root:s,threshold:1}),a.forEach(h=>{i.observe(h)})}}function T(){return document.querySelector(`.${c}`)}function y(e,n){const s=e.getBoundingClientRect(),t=n.getBoundingClientRect();return s.left>=t.left&&s.right<=t.right}function N(e,n,s){let t=e,r=e;for(;t;){if(!y(t,n))return t;r=t,t=s==="next"?t.nextElementSibling:t.previousElementSibling}return r}function C(e,n,s){const t=e.parentElement;if(!t)return;const r=N(e,t,s),a=y(r,t);if(a){const l=document.querySelector(`.${c}`);l&&l.classList.remove(c),r.classList.add(c)}r.scrollIntoView({behavior:"smooth",inline:n}),a&&setTimeout(()=>{t.dispatchEvent(new Event("scrollend",{bubbles:!0}))},50)}function V(){const e=F();e&&C(e,"start","next")}function j(){const e=H();e&&C(e,"nearest","previous")}function F(){const e=T();if(e)return e.nextElementSibling}function H(){const e=T();if(e)return e.previousElementSibling}function M(){const e=T();if(!e||!e.parentElement)return!1;let n=e.nextElementSibling;for(;n;){if(!y(n,e.parentElement))return!0;n=n.nextElementSibling}return!1}function W(){const e=T();if(!e||!e.parentElement)return!1;let n=e.previousElementSibling;for(;n;){if(!y(n,e.parentElement))return!0;n=n.previousElementSibling}return!1}const{fn:d}=__STORYBOOK_MODULE_TEST__,z={},v="guide-banner-story",G=Array(10).fill({}).map((e,n)=>({titleText:"Title text",descriptionText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices, erat ut cursus porta, erat mi lobortis lectus, et tristique sapien mi eget arcu. Maecenas gravida commodo urna, vel mollis sapien aliquam id. Pellentesque id metus vestibulum, sodales eros quis, rhoncus sem. Praesent felis justo, cursus eu malesuada vitae, ornare ac lectus. Curabitur non urna ut erat tincidunt ullamcorper. Cras id sapien justo. Pellentesque consequat mollis ex sit amet aliquet.",idx:n})),S=e=>{const{"@c4p-guidebanner-ontoggle":n,"@c4p-guidebanner-onclose":s,collapseText:t,expandText:r,titleText:a,open:l}=e;document.addEventListener("DOMContentLoaded",()=>{D(".body",".body-elm")});const i=()=>{V()},g=()=>{j()};return E`
    <style>
      ${B}
    </style>
    <c4p-guide-banner
      @c4p-guidebanner-toggle=${n}
      @c4p-guidebanner-close=${s}
      class=${v}
      collapseText=${t}
      expandText=${r}
      ?open=${l}
      titleText=${a}
    >
      <div slot="body">
        <div class="body" dir="ltr" @scrollend=${()=>{const o=document.getElementById("next-btn");M()?o?.removeAttribute("disabled"):o?.setAttribute("disabled","");const u=document.getElementById("previous-btn");W()?u?.removeAttribute("disabled"):u?.setAttribute("disabled","")}}>
          ${q(G,o=>o.idx,o=>E`
              <c4p-guide-banner-element class="body-elm">
                <div slot="title">${o.titleText} ${o.idx+1}</div>
                <div slot="description">${o.descriptionText}</div>
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
            class="${v}__toggle-button"
            @click=${o=>{const u=o.target?.closest("c4p-guide-banner"),R=o.target,$=document.querySelector(".footer-right");u&&(u._handleToggle(),setTimeout(()=>{const _=R.closest("cds-button");_&&(_.textContent=u.open?t:r),$&&($.style.display=u.open?"flex":"none")},0))}}
          >
            ${l?t:r}
          </cds-button>
        </div>
        <div class="footer-right" style="display: ${l?"flex":"none"}">
          <cds-button
            id="previous-btn"
            kind="ghost"
            class="${v}__toggle-button"
            @click=${g}
            ?disabled=${!0}
          >
            <span
              @click=${o=>{o.preventDefault()}}
            >
              ${w(P,{slot:"icon"})}
            </span>
          </cds-button>
          <cds-button
            id="next-btn"
            kind="ghost"
            class="${v}__toggle-button"
            @click=${i}
            ?disabled=${!1}
          >
            <span
              @click=${o=>{o.preventDefault()}}
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
