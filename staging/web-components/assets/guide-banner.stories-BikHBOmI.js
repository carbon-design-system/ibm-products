import{z as M,B as D,x as b}from"./iframe-DR1WA3L-.js";import{c as F}from"./repeat-BwVl6iNJ.js";import"./guide-banner-element-B_Ahxexz.js";import{i as L}from"./icon-loader-DL1ZNzxN.js";import{v as H,a as P}from"./index-DkSYGz6Z.js";import{_ as q}from"./16-B_l_7QwJ.js";const N=".body{color:var(--cds-text-primary, #161616)}.body-elm{inline-size:600px;padding-inline-start:3rem}.footer{display:flex;justify-content:space-between;inline-size:100%}.footer-left .guide-banner-story__toggle-button{margin-inline-start:2rem}",V=M(N),u=`${D}--snappy`,G=`${u}__elm`,l=`${u}__selection`;function z(e,s){const o=document.querySelector(e);if(!o)return;const t=document.createElement("style");t.textContent=`
  .${u} {
    display: flex;
    flex: none;
    overflow: scroll;
    scroll-snap-type: x mandatory;
    width: 100%;
  }

  .${u}::-webkit-scrollbar {
    display: none;
  }

  .${u}__elm {
    scroll-snap-align: start;
    flex: none;
    width: 100%;
  }
`,document.head.appendChild(t),o.classList.add(u);const r="onscrollsnapchange"in o,a=o.querySelectorAll(s);if(a.length>0&&a.forEach(i=>{i.classList.add(G)}),r)o.addEventListener("scrollsnapchange",i=>{const c=i,f=document.querySelector(`.${l}`);f&&f.classList.remove(l),c.snapTargetInline.classList.add(l)});else{const i=m=>{m.forEach(w=>{w.target.classList.toggle(l,w.isIntersecting)})};let c;c&&c.disconnect(),c=new IntersectionObserver(i,{root:o,threshold:1}),a.forEach(m=>{c.observe(m)})}}function _(){return document.querySelector(`.${l}`)}function E(e,s){const o=e.getBoundingClientRect(),t=s.getBoundingClientRect();return o.left>=t.left&&o.right<=t.right}function W(e,s,o){let t=e,r=e;for(;t;){if(!E(t,s))return t;r=t,t=o==="next"?t.nextElementSibling:t.previousElementSibling}return r}function B(e,s,o){const t=e.parentElement;if(!t)return;const r=W(e,t,o),a=E(r,t);if(a){const i=document.querySelector(`.${l}`);i&&i.classList.remove(l),r.classList.add(l)}r.scrollIntoView({behavior:"smooth",inline:s}),a&&setTimeout(()=>{t.dispatchEvent(new Event("scrollend",{bubbles:!0}))},50)}function j(){const e=Y();e&&B(e,"start","next")}function K(){const e=J();e&&B(e,"nearest","previous")}function Y(){const e=_();if(e)return e.nextElementSibling}function J(){const e=_();if(e)return e.previousElementSibling}function Q(){const e=_();if(!e||!e.parentElement)return!1;let s=e.nextElementSibling;for(;s;){if(!E(s,e.parentElement))return!0;s=s.nextElementSibling}return!1}function X(){const e=_();if(!e||!e.parentElement)return!1;let s=e.previousElementSibling;for(;s;){if(!E(s,e.parentElement))return!0;s=s.previousElementSibling}return!1}const{fn:g}=__STORYBOOK_MODULE_TEST__,I={},p="guide-banner-story",U=[{titleText:"Use-case specific heading",descriptionText:"Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context.",buttonType:"tertiary",buttonText:"Show Me",hasIcon:!0,idx:0},{titleText:"Use-case specific heading",descriptionText:"Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context.",buttonType:"ghost",buttonText:"Click me",idx:1},{titleText:"Use-case specific heading",descriptionText:"Use-case specific content related to the heading that explains the concept or adds context.",buttonType:"ghost",buttonText:"Click me",idx:2},{titleText:"Use-case specific heading",descriptionText:"Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context.",isLink:!0,linkHref:"https://www.ibm.com",buttonText:"Learn more",idx:3},{titleText:"Use-case specific heading",descriptionText:"Use-case specific content related to the heading that explains the concept or adds context.",isLink:!0,linkHref:"https://www.ibm.com",buttonText:"Learn more",idx:4}],Z=[{titleText:"Use-case specific heading",descriptionText:"Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context.",buttonType:"tertiary",buttonText:"Show Me",hasIcon:!0,idx:0},{titleText:"Use-case specific heading",descriptionText:"Use-case specific content related to the heading that explains the concept or adds context.",isLink:!0,linkHref:"https://www.ibm.com",buttonText:"Learn more",idx:1}],h=e=>{const{"@c4p-guidebanner-ontoggle":s,"@c4p-guidebanner-onclose":o,collapseText:t,expandText:r,titleText:a,open:i,items:c=U,withLeftGutter:f}=e;document.addEventListener("DOMContentLoaded",()=>{z(".body",".body-elm")});const m=()=>{j()},w=()=>{K()},R=()=>{const n=document.getElementById("next-btn");Q()?n?.removeAttribute("disabled"):n?.setAttribute("disabled","");const d=document.getElementById("previous-btn");X()?d?.removeAttribute("disabled"):d?.setAttribute("disabled","")};return b`
    <style>
      ${V}
    </style>
    <c4p-guide-banner
      @c4p-guidebanner-toggle=${s}
      @c4p-guidebanner-close=${o}
      class=${f?`${p} ${p}--with-left-gutter`:p}
      collapseText=${t}
      expandText=${r}
      ?open=${i}
      titleText=${a}
    >
      <div slot="body">
        <div class="body" dir="ltr" @scrollend=${R}>
          ${F(c,n=>n.idx,n=>b`
              <c4p-guide-banner-element class="body-elm">
                <div slot="title">${n.titleText}</div>
                <div slot="description">${n.descriptionText}</div>
                ${n.isLink?b`<cds-link href="${n.linkHref}" target="_blank"
                      >${n.buttonText}</cds-link
                    >`:b`<cds-button kind="${n.buttonType}">
                      ${n.buttonText}
                      ${n.hasIcon?b`${L(q,{slot:"icon"})}`:""}
                    </cds-button>`}
              </c4p-guide-banner-element>
            `)}
        </div>
      </div>
      <div class="footer" slot="footer">
        <div class="footer-left">
          <cds-button
            id="toggle-btn"
            kind="ghost"
            class="${p}__toggle-button"
            @click=${n=>{const d=n.target?.closest("c4p-guide-banner"),A=n.target,C=document.querySelector(".footer-right");d&&(d._handleToggle(),setTimeout(()=>{const O=A.closest("cds-button");O&&(O.textContent=d.open?t:r),C&&(C.style.display=d.open?"flex":"none")},0))}}
          >
            ${i?t:r}
          </cds-button>
        </div>
        <div class="footer-right" style="display: ${i?"flex":"none"}">
          <cds-button
            id="previous-btn"
            kind="ghost"
            class="${p}__toggle-button"
            @click=${w}
            ?disabled=${!0}
          >
            <span
              @click=${n=>{n.preventDefault()}}
            >
              ${L(H,{slot:"icon"})}
            </span>
          </cds-button>
          <cds-button
            id="next-btn"
            kind="ghost"
            class="${p}__toggle-button"
            @click=${m}
            ?disabled=${!1}
          >
            <span
              @click=${n=>{n.preventDefault()}}
            >
              ${L(P,{slot:"icon"})}
            </span>
          </cds-button>
        </div>
      </div>
    </c4p-guide-banner>
  `},k={"@c4p-guidebanner-ontoggle":g(),"@c4p-guidebanner-onclose":g(),collapseText:"Read less",expandText:"Read more",titleText:"Page-related heading that can stand on its own",open:!0,items:U,withLeftGutter:!1},x={args:{...k},argTypes:I,render:h},ee={title:"Components/Onboarding/GuideBanner"},T={args:{...k,open:!1},argTypes:I,render:h},y={args:{...k,open:!1,items:U},argTypes:I,render:h},v={args:{...k,open:!1,items:Z},argTypes:I,render:h},$={args:{"@c4p-guidebanner-ontoggle":g(),"@c4p-guidebanner-onclose":g(),collapseText:"Show less",expandText:"Show more",titleText:"Page-related heading that can stand on its own",open:!0},render:h},S={args:{"@c4p-guidebanner-ontoggle":g(),"@c4p-guidebanner-onclose":g(),collapseText:"Read less",expandText:"Read more",titleText:"",open:!0},render:h};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  },
  argTypes,
  render: renderTemplate
}`,...x.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    open: false
  },
  argTypes,
  render: renderTemplate
}`,...T.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    open: false,
    items: manyInsightsItems
  },
  argTypes,
  render: renderTemplate
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    open: false,
    items: fewInsightsItems
  },
  argTypes,
  render: renderTemplate
}`,...v.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    '@c4p-guidebanner-ontoggle': fn(),
    '@c4p-guidebanner-onclose': fn(),
    collapseText: 'Show less',
    expandText: 'Show more',
    titleText: 'Page-related heading that can stand on its own',
    open: true
  },
  render: renderTemplate
}`,...$.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    '@c4p-guidebanner-ontoggle': fn(),
    '@c4p-guidebanner-onclose': fn(),
    collapseText: 'Read less',
    expandText: 'Read more',
    titleText: '',
    open: true
  },
  render: renderTemplate
}`,...S.parameters?.docs?.source}}};const te=["Default","Collapsible","ManyInsights","FewInsights","WithCustomLabels","WithoutTitle"],ce=Object.freeze(Object.defineProperty({__proto__:null,Collapsible:T,Default:x,FewInsights:v,ManyInsights:y,WithCustomLabels:$,WithoutTitle:S,__namedExportsOrder:te,default:ee},Symbol.toStringTag,{value:"Module"}));export{x as D,v as F,ce as G,y as M};
