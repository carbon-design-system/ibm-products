import{x as l}from"./iframe-CRtCEvHj.js";import{s as a}from"./coachmark-tagline-Cgp94eN3.js";import"./preload-helper-D9Z9MdNV.js";import"./class-map-BDBYr7ko.js";import"./16-D5maUdCH.js";import"./16-DSpKrZTh.js";import"./button-BPrzbWFT.js";import"./icon-loader-DNTraskY.js";/**
 * @license
 *
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const i={title:"This is a tagline",closeIconDescription:"Close",open:!1},s={title:{control:"text",description:"The title of the tagline"},closeIconDescription:{control:"text",description:"Tooltip text and aria label for the Close button icon"},open:{control:"boolean",description:"Whether the tagline is open"}},e={args:i,argTypes:s,render:o=>{const t=()=>{console.log("Close button clicked");const n=document.querySelector("c4p-coachmark-tagline");n&&n.remove()},c=()=>{console.log("CTA clicked")};return l`
      <style>
        ${a}
      </style>
      <div style="padding: 20px;">
        <c4p-coachmark-tagline
          title="${o.title}"
          close-icon-description="${o.closeIconDescription}"
          ?open="${o.open}"
          @c4p-coachmark-tagline-close="${t}"
          @c4p-coachmark-tagline-cta-click="${c}"
        >
        </c4p-coachmark-tagline>
      </div>
    `}},u={title:"Components/Coachmark/CoachmarkTagline",parameters:{docs:{description:{component:"DO NOT USE. This component is for the exclusive use of other Onboarding components."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args,
  argTypes,
  render: (args: any) => {
    const handleClose = () => {
      console.log('Close button clicked');
      const tagline = document.querySelector('c4p-coachmark-tagline');
      if (tagline) {
        tagline.remove(); // Remove the tagline from DOM when close is clicked
      }
    };
    const handleCtaClick = () => {
      console.log('CTA clicked');
    };
    return html\`
      <style>
        \${styles}
      </style>
      <div style="padding: 20px;">
        <c4p-coachmark-tagline
          title="\${args.title}"
          close-icon-description="\${args.closeIconDescription}"
          ?open="\${args.open}"
          @c4p-coachmark-tagline-close="\${handleClose}"
          @c4p-coachmark-tagline-cta-click="\${handleCtaClick}"
        >
        </c4p-coachmark-tagline>
      </div>
    \`;
  }
}`,...e.parameters?.docs?.source}}};const f=["Default"];export{e as Default,f as __namedExportsOrder,u as default};
