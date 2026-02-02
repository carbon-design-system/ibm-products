import{k as h,x as i}from"./iframe-CPwma648.js";import"./truncated-text-DuuQWPye.js";import"./layer-DhPwLigj.js";const x=".truncated-text-stories__viewport{font-size:var(--cds-body-01-font-size, .875rem);font-weight:var(--cds-body-01-font-weight, 400);line-height:var(--cds-body-01-line-height, 1.42857);letter-spacing:var(--cds-body-01-letter-spacing, .16px);inline-size:100%;max-inline-size:900px}",b=h(x);/**
 * @license
 *
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const y="truncated-text-stories__",c={align:"top",autoalign:!1,collapseLabel:"View less",expandLabel:"View more",id:"example-id",lines:3,type:"tooltip",value:"Buttons are used to initialize an action, either in the background or foreground of an experience. There are several kinds of buttons. Primary buttons should be used for the principle call to action on the page. Secondary buttons should be used for secondary actions on each page. Danger buttons should be used for a negative action (such as Delete) on the page. Modify the behavior of the button by changing its event properties. Small buttons may be used when there is not enough space for a regular sized button. This issue is most found in tables. Small button should have three words or less. When words are not enough, icons can be used in buttons to better communicate what the button does. Icons are always paired with text.",element:"p"},$={align:{control:{type:"select"},options:["top","bottom","left","right","left-bottom","left-top","right-bottom","right-top"]},autoalign:{control:{type:"boolean"}},lines:{control:{type:"number"}},value:{control:{type:"text"}},type:{control:{type:"select"},options:["tooltip","expand"]},expandLabel:{table:{disable:!0},control:{type:"text"}},collapseLabel:{table:{disable:!0},control:{type:"text"}},element:{description:"This is a story-only control to show the Truncated Text in different HTML elements, which just sets the parent element of the Truncated Text.",control:{type:"select",labels:{p:"Paragraph",layers:"type layers",h1:"Heading 1",h2:"Heading 2",h3:"Heading 3",h4:"Heading 4",h5:"Heading 5",h6:"Heading 6"}},options:["p","layers","h1","h2","h3","h4","h5","h6"]}},g=p=>{const{align:e,autoalign:t,collapseLabel:a,expandLabel:n,id:l,lines:o,type:r,value:s}=p;return i`
    <style>
      ${b}
    </style>
    <div class="${y}viewport">
      ${p.element==="p"?i`<p>
            <c4p-truncated-text
              value=${s}
              id=${l}
              align=${e}
              ?autoalign=${t}
              lines=${o}
              expand-label=${n}
              collapse-label=${a}
              .type=${r}
            ></c4p-truncated-text>
          </p>`:""}
      ${p.element==="layers"?i`
            <p>
              <c4p-truncated-text
                value=${s}
                id=${l}
                align=${e}
                ?autoalign=${t}
                lines=${o}
                expand-label=${n}
                collapse-label=${a}
                .type=${r}
              ></c4p-truncated-text>
            </p>
            <cds-layer>
              <div
                style="background: var(--cds-layer); color: var(--cds-text-primary, #161616);"
              >
                <p>
                  <c4p-truncated-text
                    value=${s}
                    id=${l}
                    align=${e}
                    ?autoalign=${t}
                    lines=${o}
                    expand-label=${n}
                    collapse-label=${a}
                    .type=${r}
                  ></c4p-truncated-text>
                </p>
              </div>
              <cds-layer>
                <div
                  style="background: var(--cds-layer); color: var(--cds-text-primary, #161616);"
                >
                  <p>
                    <c4p-truncated-text
                      value=${s}
                      id=${l}
                      align=${e}
                      ?autoalign=${t}
                      lines=${o}
                      expand-label=${n}
                      collapse-label=${a}
                      .type=${r}
                    ></c4p-truncated-text>
                  </p>
                </div>
                </cds-layer>
              </cds-layer>
            </cds-layer>
          `:""}
      ${p.element==="h1"?i`<h1>
            <c4p-truncated-text
              value=${s}
              id=${l}
              align=${e}
              ?autoalign=${t}
              lines=${o}
              expand-label=${n}
              collapse-label=${a}
              .type=${r}
            ></c4p-truncated-text>
          </h1>`:""}
      ${p.element==="h2"?i`<h2>
            <c4p-truncated-text
              value=${s}
              id=${l}
              align=${e}
              ?autoalign=${t}
              lines=${o}
              expand-label=${n}
              collapse-label=${a}
              .type=${r}
            ></c4p-truncated-text>
          </h2>`:""}
      ${p.element==="h3"?i`<h3>
            <c4p-truncated-text
              value=${s}
              id=${l}
              align=${e}
              ?autoalign=${t}
              lines=${o}
              expand-label=${n}
              collapse-label=${a}
              .type=${r}
            ></c4p-truncated-text>
          </h3>`:""}
      ${p.element==="h4"?i`<h4>
            <c4p-truncated-text
              value=${s}
              id=${l}
              align=${e}
              ?autoalign=${t}
              lines=${o}
              expand-label=${n}
              collapse-label=${a}
              .type=${r}
            ></c4p-truncated-text>
          </h4>`:""}
      ${p.element==="h5"?i`<h5>
            <c4p-truncated-text
              value=${s}
              id=${l}
              align=${e}
              ?autoalign=${t}
              lines=${o}
              expand-label=${n}
              collapse-label=${a}
              .type=${r}
            ></c4p-truncated-text>
          </h5>`:""}
      ${p.element==="h6"?i`<h6>
            <c4p-truncated-text
              value=${s}
              id=${l}
              align=${e}
              ?autoalign=${t}
              lines=${o}
              expand-label=${n}
              collapse-label=${a}
              .type=${r}
            ></c4p-truncated-text>
          </h6>`:""}
    </div>
  `},d={args:{...c},argTypes:$,name:"Default type Tooltip",render:g,parameters:{docs:{source:{code:`
<c4p-truncated-text
  value="${c.value}"
  lines="${c.lines}"
  ?autoalign=${c.autoalign}
  align=${c.align}
></c4p-truncated-text>
        `}}}},u={args:{...c,type:"expand"},argTypes:$,render:g,parameters:{docs:{source:{code:`
<c4p-truncated-text
  value="${c.value}"
  lines="${c.lines}"
  type="expand"
  expand-label="${c.expandLabel}"
  collapse-label="${c.collapseLabel}"
></c4p-truncated-text>
        `}}}},m={title:"Utilities/TruncatedText",component:"c4p-truncated-text",parameters:{layout:"centered"}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  },
  argTypes,
  name: 'Default type Tooltip',
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    type: 'expand'
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
  type="expand"
  expand-label="\${defaultArgs.expandLabel}"
  collapse-label="\${defaultArgs.collapseLabel}"
></c4p-truncated-text>
        \`
      }
    }
  }
}`,...u.parameters?.docs?.source}}};const v=["Default","typeExpand"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:d,__namedExportsOrder:v,default:m,typeExpand:u},Symbol.toStringTag,{value:"Module"}));export{d as D,A as T,u as t};
