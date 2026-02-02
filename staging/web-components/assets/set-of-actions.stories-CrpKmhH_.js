import{k as $,n as f,r as g,x as p,y as _}from"./iframe-CPwma648.js";import{_ as b,a as w,b as C,c as z,d as D,e as O,f as x,g as A,h as S,i as k,j as I}from"./16-CU4u-ZW8.js";import{_ as P}from"./16-BswKfa1f.js";import{i as n}from"./icon-loader-Bb4ppSSv.js";import{a as T}from"./query-DAIS6qJ0.js";import{e as H}from"./class-map-BjEbJ_wj.js";import{c as m}from"./repeat-RU2UzROa.js";import"./button-BE8YYPkS.js";import"./button-skeleton-Dtbl2yvK.js";import"./overflow-menu-item-BzweTqnM.js";import"./documentLang-E105Y72C.js";import{L as j}from"./overflowHandler-6nRVSJRW.js";import{s as L}from"./story-styles-tTyaVgOl.js";import"./preload-helper-D9Z9MdNV.js";import"./collection-helpers-Cnsts1JG.js";import"./icon-button-JBsothZb.js";import"./definition-tooltip-BoMZIf0Z.js";import"./popover-content-O3lmoZ8f.js";import"./state-BZ954teF.js";/**
 * @license
 *
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const F="Run Deploy Build Test Scan Format Debug Profile Analyze Sync Upload",u=F.split(/\s+/),v=[()=>n(b,{slot:"icon"}),()=>n(w,{slot:"icon"}),()=>n(C,{slot:"icon"}),()=>n(z,{slot:"icon"}),()=>n(D,{slot:"icon"}),()=>n(O,{slot:"icon"}),()=>n(x,{slot:"icon"}),()=>n(P,{slot:"icon"}),()=>n(A,{slot:"icon"}),()=>n(S,{slot:"icon"}),()=>n(k,{slot:"icon"})];function y({count:a,size:t,onClick:o=i=>alert(`Clicked action: ${i}`)}){return Array.from({length:a},(i,e)=>{const s=u[e%u.length],c=v[e%v.length];return{text:s,icon:c(),size:t,onClick:()=>o(s)}})}y({count:12});const R=":host .c4p--set-of-actions{height:100%}:host .c4p--set-of-actions cds-button:not(:defined),:host .c4p--set-of-actions cds-overflow-menu:not(:defined){display:none}:host .c4p--set-of-actions--horizontal{display:flex}:host .c4p--set-of-actions--vertical{display:inline-flex;flex-direction:column}:host .c4p--set-of-actions__overflow-svg{align-self:unset;color:var(--cds-icon-primary, #161616)}:host .c4p--set-of-actions [data-floating-menu-container]{position:relative}:host .c4p--set-of-actions [data-hidden]:not([data-fixed]){display:none}",U=$(R);var W=Object.defineProperty,q=Object.getOwnPropertyDescriptor,l=(a,t,o,i)=>{for(var e=i>1?void 0:i?q(t,o):t,s=a.length-1,c;s>=0;s--)(c=a[s])&&(e=(i?c(t,o,e):c(e))||e);return i&&e&&W(t,o,e),e};const h="c4p--set-of-actions";let r=class extends g{constructor(){super(...arguments),this.hiddenItems=[],this.actionsData=[],this.orientation=""}connectedCallback(){super.connectedCallback(),this.style.visibility="hidden"}firstUpdated(){this.container&&this.updateComplete.then(()=>{setTimeout(()=>{this.setupOverflowHandler(),this.style.visibility="visible"})})}updated(t){t.has("actionsData")&&this.updateComplete.then(()=>{this.hiddenItems=[],setTimeout(()=>this.setupOverflowHandler())}),this.hiddenItems.length||this.shadowRoot?.querySelector("[data-hidden]:not([data-offset])")?.removeAttribute("data-hidden")}setupOverflowHandler(){this.container&&(this.overflowHandler?.disconnect(),this.overflowHandler=j({container:this.container,dimension:this.orientation=="horizontal"?"width":"height",onChange:(t,o)=>{this.hiddenItems=this.actionsData?.slice(t.length)}}))}disconnectedCallback(){super.disconnectedCallback(),this.overflowHandler?.disconnect()}render(){return p`
      <div
        class=${H({[`${h}`]:!0,[`${h}--${this.orientation}`]:!0})}
      >
        ${m(this.actionsData??[],(t,o)=>o,(t,o)=>p`
            <span>
              <cds-icon-button
                @click="${t.onClick}"
                size=${t.size}
                kind="ghost"
                align=${this.orientation==="horizontal"?o===this.actionsData.length-1?"top-right":"top-left":"right"}
              >
                ${t.icon}
                <span slot="tooltip-content">${t.text}</span>
              </cds-icon-button>
            </span>
          `)}

        <div
          data-offset
          ?data-hidden=${this.hiddenItems.length===0}
          data-floating-menu-container
        >
          <cds-overflow-menu
            size=${this.actionsData[0].size}
            close-on-activation
            enter-delay-ms="0"
            leave-delay-ms="0"
            align=${this.orientation==="horizontal"?"top-right":"right"}
          >
            ${n(I,{class:`${h}__overflow-svg`,slot:"icon"})}
            <span slot="tooltip-content">Options</span>
            <cds-overflow-menu-body
              ?flipped=${this.orientation=="horizontal"}
            >
              ${m(this.hiddenItems??[],t=>t.text,t=>p`
                  <cds-overflow-menu-item @click="${t.onClick}">
                    ${t.text}
                  </cds-overflow-menu-item>
                `)}
            </cds-overflow-menu-body>
          </cds-overflow-menu>
        </div>
      </div>
    `}};r.styles=U;l([f({type:Array})],r.prototype,"hiddenItems",2);l([f({type:Array,attribute:"actions-data",reflect:!0})],r.prototype,"actionsData",2);l([f({type:String,attribute:"orientation",reflect:!0})],r.prototype,"orientation",2);l([T(`.${h}`)],r.prototype,"container",2);r=l([_("set-of-actions")],r);/**
 * @license
 *
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const B={actionsCount:{control:{type:"number"},description:"Number of actions to display"},actionSize:{control:{type:"radio"},options:["sm","md","lg"]},onClick:{action:"onClick"},orientation:{control:{type:"radio"},options:["horizontal","vertical"]}},E={actionsCount:11,actionSize:"md",orientation:"horizontal"},N=a=>{const{actionsCount:t,actionSize:o,onClick:i,orientation:e}=a,s=y({count:t,size:o,onClick:i});return p`
    <style>
      ${L}
    </style>
    <div class="example">
      <div
        class="annotation parent"
        style="height: ${e=="horizontal"?"unset":"calc(100vh - 16rem)"}"
      >
        <div class="annotation__label">Parent container</div>
        <div class="annotation__content">
          <set-of-actions
            orientation=${e}
            .actionsData=${s}
          ></set-of-actions>
        </div>
      </div>
    </div>
  `},d={args:{...E},argTypes:B,render:N},pt={title:"Patterns/Item overflow"};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  },
  argTypes,
  render: renderActionsTemplate
}`,...d.parameters?.docs?.source}}};const ht=["SetOfActions"];export{d as SetOfActions,ht as __namedExportsOrder,pt as default};
