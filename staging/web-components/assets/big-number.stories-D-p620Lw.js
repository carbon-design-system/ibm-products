import{k as S,l as _,x as y}from"./iframe-CRtCEvHj.js";import{i as v}from"./icon-loader-DNTraskY.js";import"./definition-tooltip-BV9MAPtz.js";import{_ as O,a as j,b as w,c as B}from"./16-Y4eBee2g.js";import{_ as T}from"./16-DvgjsF02.js";import{B as c}from"./big-number-BGHpeu0i.js";const D="#storybook-root #main-content{padding:0}.c4p--big-number-stories__viewport{display:grid;align-items:center;padding:1rem;block-size:10rem}.custom-label{font-size:var(--cds-label-01-font-size, .75rem);font-weight:var(--cds-label-01-font-weight, 400);line-height:var(--cds-label-01-line-height, 1.33333);letter-spacing:var(--cds-label-01-letter-spacing, .32px);display:inline-block;margin:0;color:var(--cds-text-secondary, #525252)}.prefix--big-number--xl .custom-label{font-size:var(--cds-body-compact-01-font-size, .875rem);font-weight:var(--cds-body-compact-01-font-weight, 400);line-height:var(--cds-body-compact-01-line-height, 1.28572);letter-spacing:var(--cds-body-compact-01-letter-spacing, .16px)}.c4p--big-number-stories__label-with-tooltip{display:inline-flex;align-items:center;gap:.5rem}.c4p--big-number-stories__tooltip{display:inline-flex;align-items:center}",$=S(D);/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const i=`${_}--big-number-stories`,o={"-123 ":-123,"0 ":0,"12 ":12,"345 ":345,"6789 ":6789,"12345.678 ":12345.678,"678901.2456 ":678901.2456,"1000000 ":1e6,"2345678 ":2345678,"90123456 ":90123456,"789012345 ":789012345,"6789012345 ":6789012345,"null ":null,"undefined ":void 0},z={fractionDigits:1,label:"Label",loading:!1,locale:"en-US",percentage:!1,size:c.Default,total:13,trending:!1,truncate:!0,value:5},h={loading:{options:[!0,!1],control:{type:"boolean"}},locale:{options:["bg","cs","da-DK","de-CH","de","en-AU","en-GB","en-US","en-ZA","es-ES","es","et","fi","fr-CA","fr-CH","fr","hu","it","ja","lv","nl-BE","nl-NL","no","pl","pt-BR","pt-PT","ru-UA","ru","sk","sl","th","tr","uk-UA","vi"],control:{type:"select"}},percentage:{options:[!0,!1],control:{type:"boolean"}},size:{options:Object.values(c),control:{type:"radio"}},total:{control:{type:"select",labels:Object.keys(o)},options:Object.values(o).map((t,e)=>e),mapping:Object.values(o)},trending:{options:[!0,!1],control:{type:"boolean"}},truncate:{options:[!0,!1],control:{type:"boolean"}},value:{control:{type:"select",labels:Object.keys(o)},options:Object.values(o).map((t,e)=>e),mapping:Object.values(o)}},C={args:z,argTypes:h,render:t=>{const{fractionDigits:e,label:a,loading:p,locale:d,percentage:u,size:l,total:g,trending:b,truncate:m,value:f}=t;return y`
      <style>
        ${$}
      </style>
      <div class="${i}__viewport">
        <c4p-big-number
          fraction-digits=${e}
          label=${a}
          .value=${f}
          .total=${g}
          size=${l}
          locale=${d}
          ?trending=${b}
          ?truncate=${m}
          ?percentage=${u}
          ?loading=${p}
        >
        </c4p-big-number>
      </div>
    `}},n={...C},N={args:{...z,trending:!0},argTypes:h,render:t=>{const{fractionDigits:e,label:a,loading:p,locale:d,percentage:u,size:l,total:g,trending:b,truncate:m,value:f}=t,k=x=>{switch(x){case"lg":return B;case"xl":return w;default:return j}};return y`
      <style>
        ${$}
      </style>
      <div class="${i}__viewport">
        <c4p-big-number
          fraction-digits=${e}
          label=${a}
          .value=${f}
          .total=${g}
          size=${l}
          locale=${d}
          ?trending=${b}
          ?truncate=${m}
          ?percentage=${u}
          ?loading=${p}
        >
          <div slot="label" class="${i}__label-with-tooltip">
            <span class="custom-label"> ${a} </span>
            <cds-tooltip align="right" class="${i}__tooltip">
              ${v(T,{id:"trigger","aria-labelledby":"content"})}
              <cds-tooltip-content id="content"
                >Tooltip content</cds-tooltip-content
              >
            </cds-tooltip>
          </div>

          ${v(k(l),{slot:"trending-icon",class:`${_}--big-number__trend`})}
          <cds-icon-button
            kind="ghost"
            size="sm"
            align="bottom"
            slot="icon-button"
          >
            ${v(O,{slot:"icon"})}
            <span slot="tooltip-content">Icon description</span>
          </cds-icon-button>
        </c4p-big-number>
      </div>
    `}},s={...N},r={args:{size:c.Default},argTypes:{size:{options:Object.values(c),control:{type:"radio"}}},render:t=>{const{size:e}=t;return y`
      <style>
        ${$}
      </style>
      <div class="${i}__viewport">
        <c4p-big-number-skeleton size=${e}> </c4p-big-number-skeleton>
      </div>
    `}},A={title:"Components/BigNumber"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  ...defaultChecklistTemplate
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...customBigNumberTemplate
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    size: BigNumberSize.Default
  },
  argTypes: {
    size: {
      options: Object.values(BigNumberSize),
      control: {
        type: 'radio'
      }
    }
  },
  render: args => {
    const {
      size
    } = args;
    return html\`
      <style>
        \${styles}
      </style>
      <div class="\${storyPrefix}__viewport">
        <c4p-big-number-skeleton size=\${size}> </c4p-big-number-skeleton>
      </div>
    \`;
  }
}`,...r.parameters?.docs?.source}}};const P=["Default","WithCustomIcons","Skeleton"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Skeleton:r,WithCustomIcons:s,__namedExportsOrder:P,default:A},Symbol.toStringTag,{value:"Module"}));export{G as B,n as D,s as W};
