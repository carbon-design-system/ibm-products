import{b as p,x as n}from"./iframe-CflQw5FD.js";import"./user-avatar-1G90zKoo.js";import{P as t}from"./definition-tooltip-BtE9e--Z.js";import{s as l}from"./spread-CgNMLHME.js";const c=({children:e,...m}={})=>p`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${l(m)}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${e}<path d="M31 30H29V27a3 3 0 00-3-3H22a3 3 0 00-3 3v3H17V27a5 5 0 015-5h4a5 5 0 015 5zM24 12a3 3 0 11-3 3 3 3 0 013-3m0-2a5 5 0 105 5A5 5 0 0024 10zM15 22H13V19a3 3 0 00-3-3H6a3 3 0 00-3 3v3H1V19a5 5 0 015-5h4a5 5 0 015 5zM8 4A3 3 0 115 7 3 3 0 018 4M8 2a5 5 0 105 5A5 5 0 008 2z"></path></svg>`,g=""+new URL("headshot-BLzlzpzu.jpg",import.meta.url).href;/**
 * @license
 *
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const d={top:t.TOP,"top-left":t.TOP_LEFT,"top-right":t.TOP_RIGHT,bottom:t.BOTTOM,"bottom-left":t.BOTTOM_LEFT,"bottom-right":t.BOTTOM_RIGHT,left:t.LEFT,right:t.RIGHT},i={tooltipAlignment:t.RIGHT,size:"md"},s={backgroundColor:{control:{type:"select"},options:["order-1-cyan","order-2-gray","order-3-green","order-4-magenta","order-5-purple","order-6-teal","order-7-cyan","order-8-gray","order-9-green","order-10-magenta","order-11-purple","order-12-teal"]},tooltipAlignment:{control:"select",description:"Specify the alignment of the tooltip.",options:d},tooltipText:{control:"text",description:"Specify the text of the tooltip"},name:{control:"text",description:"Specify the name of the user"},size:{control:{type:"radio"},options:["xl","lg","md","sm"]},image:{control:"textNullable",description:"Specify the full path to the image to be displayed"},imageDescription:{control:"text",description:"Specify the to description of image for screen reader users"},theme:{control:{type:"select"},options:["light","dark"]}},o={args:{...i,tooltipText:"TW, Thomas J. Watson user profile",name:"Thomas J. Watson",backgroundColor:"order-1-cyan"},argTypes:s,render:e=>n`
      <c4p-user-avatar
        tooltip-alignment=${e.tooltipAlignment}
        tooltip-text=${e.tooltipText}
        name=${e.name}
        size=${e.size}
        image=${e.image}
        image-description=${e.imageDescription}
        background-color=${e.backgroundColor}
        theme=${e.theme}
      >
      </c4p-user-avatar>
    `},r={args:{...i,tooltipText:"TW, Thomas J. Watson user profile",name:"Thomas J. Watson",backgroundColor:"order-1-cyan"},argTypes:s,render:e=>n`
      <c4p-user-avatar
        tooltip-alignment=${e.tooltipAlignment}
        tooltip-text=${e.tooltipText}
        name=${e.name}
        size=${e.size}
        image=${e.image}
        image-description=${e.imageDescription}
        background-color=${e.backgroundColor}
        theme=${e.theme}
      >
        ${c({slot:"rendericon"})}
      </c4p-user-avatar>
    `},a={args:{...i,image:g,tooltipText:"TW, Thomas J. Watson user profile",imageDescription:"Avatar of Thomas J. Watson"},argTypes:s,render:e=>n`
      <c4p-user-avatar
        tooltip-alignment=${e.tooltipAlignment}
        tooltip-text=${e.tooltipText}
        name=${e.name}
        size=${e.size}
        image=${e.image}
        image-description=${e.imageDescription}
        background-color=${e.backgroundColor}
        theme=${e.theme}
      >
      </c4p-user-avatar>
    `},u={title:"Components/UserAvatar"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...args,
    tooltipText: 'TW, Thomas J. Watson user profile',
    name: 'Thomas J. Watson',
    backgroundColor: 'order-1-cyan'
  },
  argTypes,
  render: args => {
    return html\`
      <c4p-user-avatar
        tooltip-alignment=\${args.tooltipAlignment}
        tooltip-text=\${args.tooltipText}
        name=\${args.name}
        size=\${args.size}
        image=\${args.image}
        image-description=\${args.imageDescription}
        background-color=\${args.backgroundColor}
        theme=\${args.theme}
      >
      </c4p-user-avatar>
    \`;
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...args,
    tooltipText: 'TW, Thomas J. Watson user profile',
    name: 'Thomas J. Watson',
    backgroundColor: 'order-1-cyan'
  },
  argTypes,
  render: args => {
    return html\`
      <c4p-user-avatar
        tooltip-alignment=\${args.tooltipAlignment}
        tooltip-text=\${args.tooltipText}
        name=\${args.name}
        size=\${args.size}
        image=\${args.image}
        image-description=\${args.imageDescription}
        background-color=\${args.backgroundColor}
        theme=\${args.theme}
      >
        \${Group({
      slot: 'rendericon'
    })}
      </c4p-user-avatar>
    \`;
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...args,
    image: headshot,
    tooltipText: 'TW, Thomas J. Watson user profile',
    imageDescription: 'Avatar of Thomas J. Watson'
  },
  argTypes,
  render: args => {
    return html\`
      <c4p-user-avatar
        tooltip-alignment=\${args.tooltipAlignment}
        tooltip-text=\${args.tooltipText}
        name=\${args.name}
        size=\${args.size}
        image=\${args.image}
        image-description=\${args.imageDescription}
        background-color=\${args.backgroundColor}
        theme=\${args.theme}
      >
      </c4p-user-avatar>
    \`;
  }
}`,...a.parameters?.docs?.source}}};const h=["Default","WithIcon","WithImage"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:o,WithIcon:r,WithImage:a,__namedExportsOrder:h,default:u},Symbol.toStringTag,{value:"Module"}));export{b as U};
