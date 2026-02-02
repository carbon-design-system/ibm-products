import{x as a}from"./iframe-CPwma648.js";import"./user-avatar-wMJHm90J.js";import{P as e}from"./popover-content-O3lmoZ8f.js";import{_ as s}from"./16-CPU3a-Kb.js";import{i as l}from"./icon-loader-Bb4ppSSv.js";/**
 * @license
 *
 * Copyright IBM Corp. 2025, 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const m={top:e.TOP,"top-left":e.TOP_LEFT,"top-right":e.TOP_RIGHT,bottom:e.BOTTOM,"bottom-left":e.BOTTOM_LEFT,"bottom-right":e.BOTTOM_RIGHT,left:e.LEFT,right:e.RIGHT},i={backgroundColor:{control:{type:"select"},options:["order-1-cyan","order-2-gray","order-3-green","order-4-magenta","order-5-purple","order-6-teal","order-7-cyan","order-8-gray","order-9-green","order-10-magenta","order-11-purple","order-12-teal"]},tooltipAlignment:{control:"select",description:"Specify the alignment of the tooltip.",options:m},tooltipText:{control:"text",description:"Specify the text of the tooltip"},name:{control:"text",description:"Specify the name of the user"},size:{control:{type:"radio"},options:["xl","lg","md","sm"]},image:{control:"textNullable",description:"Specify the full path to the image to be displayed"},imageDescription:{control:"text",description:"Specify the to description of image for screen reader users"},theme:{control:{type:"select"},options:["light","dark"]}},o={args:{tooltipAlignment:e.RIGHT,size:"md",tooltipText:"TW, Thomas J. Watson user profile",name:"Thomas J. Watson",backgroundColor:"order-1-cyan",theme:"light"},argTypes:i,render:t=>a`
      <c4p-user-avatar
        tooltip-alignment=${t.tooltipAlignment}
        tooltip-text=${t.tooltipText}
        name=${t.name}
        size=${t.size}
        background-color=${t.backgroundColor}
        theme=${t.theme}
      >
      </c4p-user-avatar>
    `},r={args:{tooltipAlignment:e.RIGHT,size:"md",tooltipText:"TW, Thomas J. Watson user profile",name:"Thomas J. Watson",backgroundColor:"order-1-cyan",theme:"light"},argTypes:i,render:t=>a`
      <c4p-user-avatar
        tooltip-alignment=${t.tooltipAlignment}
        tooltip-text=${t.tooltipText}
        name=${t.name}
        size=${t.size}
        background-color=${t.backgroundColor}
        theme=${t.theme}
      >
        ${l(s,{slot:"rendericon"})}
      </c4p-user-avatar>
    `},n={args:{tooltipAlignment:e.RIGHT,size:"md",image:"https://assets.ibm.com/is/image/ibm/christina-frohn?wid=2760&hei=1552&fit=constrain,0&qlt=85,0&fmt=png-alpha",tooltipText:"TW, Thomas J. Watson user profile",imageDescription:"Avatar of Thomas J. Watson",theme:"light"},argTypes:i,render:t=>a`
      <c4p-user-avatar
        tooltip-alignment=${t.tooltipAlignment}
        tooltip-text=${t.tooltipText}
        size=${t.size}
        image=${t.image}
        image-description=${t.imageDescription}
        theme=${t.theme}
      >
      </c4p-user-avatar>
    `},p={title:"Components/UserAvatar"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    tooltipAlignment: POPOVER_ALIGNMENT.RIGHT,
    size: 'md',
    tooltipText: 'TW, Thomas J. Watson user profile',
    name: 'Thomas J. Watson',
    backgroundColor: 'order-1-cyan',
    theme: 'light'
  },
  argTypes,
  render: args => {
    return html\`
      <c4p-user-avatar
        tooltip-alignment=\${args.tooltipAlignment}
        tooltip-text=\${args.tooltipText}
        name=\${args.name}
        size=\${args.size}
        background-color=\${args.backgroundColor}
        theme=\${args.theme}
      >
      </c4p-user-avatar>
    \`;
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    tooltipAlignment: POPOVER_ALIGNMENT.RIGHT,
    size: 'md',
    tooltipText: 'TW, Thomas J. Watson user profile',
    name: 'Thomas J. Watson',
    backgroundColor: 'order-1-cyan',
    theme: 'light'
  },
  argTypes,
  render: args => {
    return html\`
      <c4p-user-avatar
        tooltip-alignment=\${args.tooltipAlignment}
        tooltip-text=\${args.tooltipText}
        name=\${args.name}
        size=\${args.size}
        background-color=\${args.backgroundColor}
        theme=\${args.theme}
      >
        \${iconLoader(Group, {
      slot: 'rendericon'
    })}
      </c4p-user-avatar>
    \`;
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    tooltipAlignment: POPOVER_ALIGNMENT.RIGHT,
    size: 'md',
    image: 'https://assets.ibm.com/is/image/ibm/christina-frohn?wid=2760&hei=1552&fit=constrain,0&qlt=85,0&fmt=png-alpha',
    tooltipText: 'TW, Thomas J. Watson user profile',
    imageDescription: 'Avatar of Thomas J. Watson',
    theme: 'light'
  },
  argTypes,
  render: args => {
    return html\`
      <c4p-user-avatar
        tooltip-alignment=\${args.tooltipAlignment}
        tooltip-text=\${args.tooltipText}
        size=\${args.size}
        image=\${args.image}
        image-description=\${args.imageDescription}
        theme=\${args.theme}
      >
      </c4p-user-avatar>
    \`;
  }
}`,...n.parameters?.docs?.source}}};const c=["Default","WithIcon","WithImage"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:o,WithIcon:r,WithImage:n,__namedExportsOrder:c,default:p},Symbol.toStringTag,{value:"Module"}));export{o as D,$ as U,r as W,n as a};
