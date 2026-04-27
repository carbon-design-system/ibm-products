import{k as $,n as h,r as y,x as p,t as g}from"./iframe-Etog_1uH.js";import{_ as b,a as w,b as C,c as z,d as O,e as D,f as x,g as A,h as S,i as k}from"./16-CfG0rDIQ.js";import{_ as I}from"./16-BswKfa1f.js";import{i as n}from"./icon-loader-2iGE0hUJ.js";import{a as P}from"./query-D0jTsbLw.js";import{e as H}from"./class-map-DrB8Nott.js";import{c as m}from"./repeat-BkKzgudw.js";import"./button-DbFY82zT.js";import"./button-skeleton-ijMrHdaY.js";import"./overflow-menu-item-DYVwUe76.js";import{c as T}from"./index-C-eRm0LX.js";import{_ as j}from"./16-DOn1njS0.js";import{s as F}from"./story-styles-yV4VqWYY.js";import"./preload-helper-PPVm8Dsz.js";import"./host-listener-DN1-XIwx.js";import"./collection-helpers-Cnsts1JG.js";import"./icon-button-C58FG4yH.js";import"./definition-tooltip-DNxqllHQ.js";import"./popover-content--Q8g0cY9.js";import"./floating-controller-O5_OP1Uj.js";import"./state-DSNP4DDc.js";const L="Run Deploy Build Test Scan Format Debug Profile Analyze Sync Upload",u=L.split(/\s+/),v=[()=>n(b,{slot:"icon"}),()=>n(w,{slot:"icon"}),()=>n(C,{slot:"icon"}),()=>n(z,{slot:"icon"}),()=>n(O,{slot:"icon"}),()=>n(D,{slot:"icon"}),()=>n(x,{slot:"icon"}),()=>n(I,{slot:"icon"}),()=>n(A,{slot:"icon"}),()=>n(S,{slot:"icon"}),()=>n(k,{slot:"icon"})];function _({count:a,size:t,onClick:o=i=>alert(`Clicked action: ${i}`)}){return Array.from({length:a},(i,e)=>{const s=u[e%u.length],c=v[e%v.length];return{text:s,icon:c(),size:t,onClick:()=>o(s)}})}_({count:12});const R=":host .c4p--set-of-actions{height:100%}:host .c4p--set-of-actions cds-button:not(:defined),:host .c4p--set-of-actions cds-overflow-menu:not(:defined){display:none}:host .c4p--set-of-actions--horizontal{display:flex}:host .c4p--set-of-actions--vertical{display:inline-flex;flex-direction:column}:host .c4p--set-of-actions__overflow-svg{align-self:unset;color:var(--cds-icon-primary, #161616)}:host .c4p--set-of-actions [data-floating-menu-container]{position:relative}:host .c4p--set-of-actions [data-hidden]:not([data-fixed]){display:none}",U=$(R);var W=Object.defineProperty,q=Object.getOwnPropertyDescriptor,l=(a,t,o,i)=>{for(var e=i>1?void 0:i?q(t,o):t,s=a.length-1,c;s>=0;s--)(c=a[s])&&(e=(i?c(t,o,e):c(e))||e);return i&&e&&W(t,o,e),e};const f="c4p--set-of-actions";let r=class extends y{constructor(){super(...arguments),this.hiddenItems=[],this.actionsData=[],this.orientation=""}connectedCallback(){super.connectedCallback(),this.style.visibility="hidden"}firstUpdated(){this.container&&this.updateComplete.then(()=>{setTimeout(()=>{this.setupOverflowHandler(),this.style.visibility="visible"})})}updated(t){t.has("actionsData")&&this.updateComplete.then(()=>{this.hiddenItems=[],setTimeout(()=>this.setupOverflowHandler())}),this.hiddenItems.length||this.shadowRoot?.querySelector("[data-hidden]:not([data-offset])")?.removeAttribute("data-hidden")}setupOverflowHandler(){this.container&&(this.overflowHandler?.disconnect(),this.overflowHandler=T({container:this.container,dimension:this.orientation=="horizontal"?"width":"height",onChange:(t,o)=>{this.hiddenItems=this.actionsData?.slice(t.length)}}))}disconnectedCallback(){super.disconnectedCallback(),this.overflowHandler?.disconnect()}render(){return p`
      <div
        class=${H({[`${f}`]:!0,[`${f}--${this.orientation}`]:!0})}
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
            ${n(j,{class:`${f}__overflow-svg`,slot:"icon"})}
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
    `}};r.styles=U;l([h({type:Array})],r.prototype,"hiddenItems",2);l([h({type:Array,attribute:"actions-data",reflect:!0})],r.prototype,"actionsData",2);l([h({type:String,attribute:"orientation",reflect:!0})],r.prototype,"orientation",2);l([P(`.${f}`)],r.prototype,"container",2);r=l([g("set-of-actions")],r);const B={actionsCount:{control:{type:"number"},description:"Number of actions to display"},actionSize:{control:{type:"radio"},options:["sm","md","lg"]},onClick:{action:"onClick"},orientation:{control:{type:"radio"},options:["horizontal","vertical"]}},E={actionsCount:11,actionSize:"md",orientation:"horizontal"},N=a=>{const{actionsCount:t,actionSize:o,onClick:i,orientation:e}=a,s=_({count:t,size:o,onClick:i});return p`
    <style>
      ${F}
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
  `},d={args:{...E},argTypes:B,render:N},ht={title:"Patterns/Item overflow"};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  },
  argTypes,
  render: renderActionsTemplate
}`,...d.parameters?.docs?.source}}};const mt=["SetOfActions"];export{d as SetOfActions,mt as __namedExportsOrder,ht as default};
