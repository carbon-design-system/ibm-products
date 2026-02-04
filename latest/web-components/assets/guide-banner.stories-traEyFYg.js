import{k as T,l as _,x as f}from"./iframe-CRtCEvHj.js";import{c as E}from"./repeat-eowXJxic.js";import"./guide-banner-element-CKJAdqyp.js";import{i as x}from"./icon-loader-DNTraskY.js";import{i as S,a as k}from"./20-CppOV_ea.js";import"./preload-helper-D9Z9MdNV.js";import"./class-map-BDBYr7ko.js";import"./button-BPrzbWFT.js";import"./button-skeleton-Bkfs8A1v.js";import"./16-D5maUdCH.js";const q=".body{color:var(--cds-text-primary, #161616)}.body-elm{padding:2rem;inline-size:600px}.footer{display:flex;justify-content:space-between;inline-size:100%}",C=T(q),l=`${_}--snappy`,L=`${l}__elm`,d=`${l}__selection`;function w(t,r){const n=document.querySelector(t);if(!n)return;const i=document.createElement("style");i.textContent=`
  .${l} {
    display: flex;
    flex: none;
    overflow: scroll;
    scroll-snap-type: x mandatory;
    width: 100%;
  }

  .${l}::-webkit-scrollbar {
    display: none;
  }

  .${l}__elm {
    scroll-snap-align: start;
    flex: none;
    width: 100%;
  }
`,document.head.appendChild(i),n.classList.add(l);const u="onscrollsnapchange"in n,a=n.querySelectorAll(r);if(a.length>0&&a.forEach(s=>{s.classList.add(L)}),u)n.addEventListener("scrollsnapchange",s=>{const o=s,c=document.querySelector(`.${d}`);c&&c.classList.remove(d),o.snapTargetInline.classList.add(d)});else{const s=p=>{p.forEach(e=>{e.target.classList.toggle(d,e.isIntersecting)})};let o;(()=>{o&&o.disconnect(),o=new IntersectionObserver(s,{root:n,threshold:1}),a.forEach(p=>{o.observe(p)})})()}}function $(){return document.querySelector(`.${d}`)}function O(){y()?.scrollIntoView({behavior:"smooth",inline:"start"})}function I(){h()?.scrollIntoView({behavior:"smooth",inline:"start"})}function y(){const t=$();if(t)return t.nextElementSibling}function h(){const t=$();if(t)return t.previousElementSibling}/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const{fn:v}=__STORYBOOK_MODULE_TEST__,A={},m="guide-banner-story",P=Array(10).fill({}).map((t,r)=>({titleText:"Title text",descriptionText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices, erat ut cursus porta, erat mi lobortis lectus, et tristique sapien mi eget arcu. Maecenas gravida commodo urna, vel mollis sapien aliquam id. Pellentesque id metus vestibulum, sodales eros quis, rhoncus sem. Praesent felis justo, cursus eu malesuada vitae, ornare ac lectus. Curabitur non urna ut erat tincidunt ullamcorper. Cras id sapien justo. Pellentesque consequat mollis ex sit amet aliquet.",idx:r})),B=t=>{const{"@c4p-guidebanner-ontoggle":r,"@c4p-guidebanner-onclose":n,collapseText:i,expandText:u,titleText:a,open:s}=t;document.addEventListener("DOMContentLoaded",()=>{w(".body",".body-elm")});const o=()=>{O()},c=()=>{I()};return f`
    <style>
      ${C}
    </style>
    <c4p-guide-banner
      @c4p-guidebanner-toggle=${r}
      @c4p-guidebanner-close=${n}
      class=${m}
      collapseText=${i}
      expandText=${u}
      ?open=${s}
      titleText=${a}
    >
      <div slot="body">
        <div class="body" dir="ltr" @scrollend=${()=>{const e=document.getElementById("next-btn");y()?e?.removeAttribute("disabled"):e?.setAttribute("disabled","");const g=document.getElementById("previous-btn");h()?g?.removeAttribute("disabled"):g?.setAttribute("disabled","")}}>
          ${E(P,e=>e.idx,e=>f`
              <c4p-guide-banner-element class="body-elm">
                <div slot="title">${e.titleText} ${e.idx+1}</div>
                <div slot="description">${e.descriptionText}</div>
                <cds-button kind="ghost">Read more</cds-button>
              </c4p-guide-banner-element>
            `)}
        </div>
      </div>
      <div class="footer" slot="footer">
        <div class="footer-left">
          <cds-button kind="ghost" class="${m}__toggle-button"
            >${s?i:u}</cds-button
          >
        </div>
        <div class="footer-right">
          <cds-button
            id="previous-btn"
            kind="ghost"
            class="${m}__toggle-button"
            @click=${c}
            ?disabled=${!0}
          >
            <span
              @click=${e=>{e.preventDefault()}}
            >
              ${x(S,{slot:"icon"})}
            </span>
          </cds-button>
          <cds-button
            id="next-btn"
            kind="ghost"
            class="${m}__toggle-button"
            @click=${o}
            ?disabled=${!1}
          >
            <span
              @click=${e=>{e.preventDefault()}}
            >
              ${x(k,{slot:"icon"})}
            </span>
          </cds-button>
        </div>
      </div>
    </c4p-guide-banner>
  `},b={args:{"@c4p-guidebanner-ontoggle":v(),"@c4p-guidebanner-onclose":v(),collapseText:"Read less",expandText:"Read more",titleText:"Page-related heading that can stand on its own",open:!0},argTypes:A,render:B},K={title:"Components/GuideBanner"};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const U=["Default"];export{b as Default,U as __namedExportsOrder,K as default};
