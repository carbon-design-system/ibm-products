import{k as n,x as i}from"./iframe-CRtCEvHj.js";import"./options-tile-DYakf-ld.js";import"./toggle-C5spHnBX.js";import"./toggle-skeleton-D5ugFAEd.js";import"./dropdown-skeleton-DhijaTA-.js";const s=".options-tile__body p{font-size:var(--cds-body-01-font-size, .875rem);font-weight:var(--cds-body-01-font-weight, 400);line-height:var(--cds-body-01-line-height, 1.42857);letter-spacing:var(--cds-body-01-letter-spacing, .16px);margin-block-end:1rem}.options-tile__dropdown:first-of-type{margin-block-end:1rem}",l=n(s);/**
 * @license
 *
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const d={body:{control:"text",description:"Slot body content"},defaultOpen:{control:"boolean",description:"If `true` the body of the component is shown"},size:{control:"radio",options:["lg","xl"],description:"Determines the size of the header"},summary:{control:"text",description:"Slot text that is displayed under the title"},titleId:{control:"text",description:"ID for the title"},titleText:{control:"text",description:"Text for the title"}},o="options-tile",e={args:{defaultOpen:!1,size:"lg",titleId:"title-01",titleText:"Language"},argTypes:d,render:t=>i`
      <style>
        ${l}
      </style>
      <c4p-options-tile
        class=${o}
        ?defaultOpen=${t.defaultOpen}
        id="my-tile"
        size=${t.size}
        titleId=${t.titleId}
        titleText=${t.titleText}
        @c4p-options-tile-open=${console.log("open option tile")}
        @c4p-options-tile-close=${console.log("close option tile")}
      >
        <div slot="summary">
          <span>English | Locale: English</span>
        </div>
        <div slot="toggle">
          <cds-toggle id="my-toggle" size="sm" hideLabel></cds-toggle>
        </div>
        <div slot="body">
          <div class=${`${o}__body`}>
            <p>
              User interface defines the language the application is displayed
              in. Locale sets the regional display formats for information like
              time, date, currency and decimal delimiters.
            </p>
            <div class=${`${o}__dropdown`}>
              <cds-dropdown title-text="User interface" label="User interface">
                <cds-dropdown-item value="option-0">English</cds-dropdown-item>
              </cds-dropdown>
            </div>
            <div class=${`${o}__dropdown`}>
              <cds-dropdown title-text="Locale" label="Locale">
                <cds-dropdown-item value="option-0">English</cds-dropdown-item>
              </cds-dropdown>
            </div>
          </div>
        </div>
      </c4p-options-tile>
    `},r={title:"Components/OptionsTile"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: false,
    size: 'lg',
    titleId: 'title-01',
    titleText: 'Language'
  },
  argTypes,
  render: args => {
    return html\`
      <style>
        \${styles}
      </style>
      <c4p-options-tile
        class=\${blockClass}
        ?defaultOpen=\${args.defaultOpen}
        id="my-tile"
        size=\${args.size}
        titleId=\${args.titleId}
        titleText=\${args.titleText}
        @c4p-options-tile-open=\${console.log('open option tile')}
        @c4p-options-tile-close=\${console.log('close option tile')}
      >
        <div slot="summary">
          <span>English | Locale: English</span>
        </div>
        <div slot="toggle">
          <cds-toggle id="my-toggle" size="sm" hideLabel></cds-toggle>
        </div>
        <div slot="body">
          <div class=\${\`\${blockClass}__body\`}>
            <p>
              User interface defines the language the application is displayed
              in. Locale sets the regional display formats for information like
              time, date, currency and decimal delimiters.
            </p>
            <div class=\${\`\${blockClass}__dropdown\`}>
              <cds-dropdown title-text="User interface" label="User interface">
                <cds-dropdown-item value="option-0">English</cds-dropdown-item>
              </cds-dropdown>
            </div>
            <div class=\${\`\${blockClass}__dropdown\`}>
              <cds-dropdown title-text="Locale" label="Locale">
                <cds-dropdown-item value="option-0">English</cds-dropdown-item>
              </cds-dropdown>
            </div>
          </div>
        </div>
      </c4p-options-tile>
    \`;
  }
}`,...e.parameters?.docs?.source}}};const a=["Default"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:a,default:r},Symbol.toStringTag,{value:"Module"}));export{e as D,y as O};
