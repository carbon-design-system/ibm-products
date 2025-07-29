import{h,x as s}from"./iframe-Dehrahfq.js";import"./truncated-text-D66Pj8q0.js";import"./layer-palr43cu.js";const x="#main-content{padding:12rem}",g=h(x);/**
 * @license
 *
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const i={lines:2,value:"Buttons are used to initialize an action, either in the background or foreground of an experience. There are several kinds of buttons. Primary buttons should be used for the principal call to action on the page. Secondary buttons should be used for secondary actions on each page. Danger buttons should be used for a negative action (such as Delete) on the page.",element:"p",align:"bottom",with:"tooltip",autoalign:!1},u={align:{control:{type:"select"},options:["top","bottom","left","right","left-bottom","left-top","right-bottom","right-top"]},autoalign:{control:{type:"boolean"}},lines:{control:{type:"number"}},value:{control:{type:"text"}},with:{control:{type:"select"},options:["tooltip","expand"]},expandLabel:{table:{disable:!0},control:{type:"text"}},collapseLabel:{table:{disable:!0},control:{type:"text"}},element:{description:"This is a story-only control to show the Truncated Text in different HTML elements, which just sets the parent element of the Truncated Text.",control:{type:"select",labels:{p:"Paragraph",layers:"With layers",h1:"Heading 1",h2:"Heading 2",h3:"Heading 3",h4:"Heading 4",h5:"Heading 5",h6:"Heading 6"}},options:["p","layers","h1","h2","h3","h4","h5","h6"]}},$=e=>{const{lines:t,value:a,with:l,align:n,autoalign:r}=e,o=e["expand-label"],c=e["collapse-label"];return s`
    <style>
      ${g}
    </style>
    ${e.element==="p"?s`<p>
          <c4p-truncated-text
            value=${a}
            align=${n}
            ?autoalign=${r}
            lines=${t}
            expand-label=${o}
            collapse-label=${c}
            .with=${l}
          ></c4p-truncated-text>
        </p>`:""}
    ${e.element==="layers"?s`
          <p>
            <c4p-truncated-text
              value=${a}
              align=${n}
              ?autoalign=${r}
              lines=${t}
              expand-label=${o}
              collapse-label=${c}
              .with=${l}
            ></c4p-truncated-text>
          </p>
          <cds-layer>
            <div
              style="background: var(--cds-layer); color: var(--cds-text-primary, #161616);"
            >
              <p>
                <c4p-truncated-text
                  value=${a}
                  align=${n}
                  ?autoalign=${r}
                  lines=${t}
                  expand-label=${o}
                  collapse-label=${c}
                  .with=${l}
                ></c4p-truncated-text>
              </p>
            </div>
            <cds-layer>
              <div
                style="background: var(--cds-layer); color: var(--cds-text-primary, #161616);"
              >
                <p>
                  <c4p-truncated-text
                    value=${a}
                    align=${n}
                    ?autoalign=${r}
                    lines=${t}
                    expand-label=${o}
                    collapse-label=${c}
                    .with=${l}
                  ></c4p-truncated-text>
                </p>
              </div>
              <cds-layer>
                <div
                  style="background: var(--cds-layer); color: var(--cds-text-primary, #161616);"
                >
                  <p>
                    <c4p-truncated-text
                      value=${a}
                      align=${n}
                      ?autoalign=${r}
                      lines=${t}
                      expand-label=${o}
                      collapse-label=${c}
                      .with=${l}
                    ></c4p-truncated-text>
                  </p>
                </div>
              </cds-layer>
            </cds-layer>
          </cds-layer>
        `:""}
    ${e.element==="h1"?s`<h1>
          <c4p-truncated-text
            value=${a}
            align=${n}
            ?autoalign=${r}
            lines=${t}
            expand-label=${o}
            collapse-label=${c}
            .with=${l}
          ></c4p-truncated-text>
        </h1>`:""}
    ${e.element==="h2"?s`<h2>
          <c4p-truncated-text
            value=${a}
            align=${n}
            ?autoalign=${r}
            lines=${t}
            expand-label=${o}
            collapse-label=${c}
            .with=${l}
          ></c4p-truncated-text>
        </h2>`:""}
    ${e.element==="h3"?s`<h3>
          <c4p-truncated-text
            value=${a}
            align=${n}
            ?autoalign=${r}
            lines=${t}
            expand-label=${o}
            collapse-label=${c}
            .with=${l}
          ></c4p-truncated-text>
        </h3>`:""}
    ${e.element==="h4"?s`<h4>
          <c4p-truncated-text
            value=${a}
            align=${n}
            ?autoalign=${r}
            lines=${t}
            expand-label=${o}
            collapse-label=${c}
            .with=${l}
          ></c4p-truncated-text>
        </h4>`:""}
    ${e.element==="h5"?s`<h5>
          <c4p-truncated-text
            value=${a}
            align=${n}
            ?autoalign=${r}
            lines=${t}
            expand-label=${o}
            collapse-label=${c}
            .with=${l}
          ></c4p-truncated-text>
        </h5>`:""}
    ${e.element==="h6"?s`<h6>
          <c4p-truncated-text
            value=${a}
            align=${n}
            ?autoalign=${r}
            lines=${t}
            expand-label=${o}
            collapse-label=${c}
            .with=${l}
          ></c4p-truncated-text>
        </h6>`:""}
  `},p={args:{...i},argTypes:u,name:"Default with Tooltip",render:$,parameters:{docs:{source:{code:`
<c4p-truncated-text
  value="${i.value}"
  lines="${i.lines}"
  ?autoalign=${i.autoalign}
  align=${i.align}
></c4p-truncated-text>
        `}}}},d={args:{...i,with:"expand"},argTypes:u,render:$,parameters:{docs:{source:{code:`
<c4p-truncated-text
  value="${i.value}"
  lines="${i.lines}"
  with="expand"
  expand-label="View more"
  collapse-label="View less"
></c4p-truncated-text>
        `}}}},b={title:"Utilities/TruncatedText",component:"c4p-truncated-text",parameters:{layout:"fullscreen"}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  },
  argTypes,
  name: 'Default with Tooltip',
  render: renderTemplate,
  parameters: {
    docs: {
      source: {
        code: \`
<c4p-truncated-text
  value="\${defaultArgs.value}"
  lines="\${defaultArgs.lines}"
  ?autoalign=\${defaultArgs.autoalign}
  align=\${defaultArgs.align}
></c4p-truncated-text>
        \`
      }
    }
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    with: 'expand'
  },
  argTypes,
  render: renderTemplate,
  parameters: {
    docs: {
      source: {
        code: \`
<c4p-truncated-text
  value="\${defaultArgs.value}"
  lines="\${defaultArgs.lines}"
  with="expand"
  expand-label="View more"
  collapse-label="View less"
></c4p-truncated-text>
        \`
      }
    }
  }
}`,...d.parameters?.docs?.source}}};const m=["Default","WithExpand"],w=Object.freeze(Object.defineProperty({__proto__:null,Default:p,WithExpand:d,__namedExportsOrder:m,default:b},Symbol.toStringTag,{value:"Module"}));export{p as D,w as T,d as W};
