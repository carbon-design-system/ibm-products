import{k as L,_ as S,n as k,c as z,p as a,w as M,x as e,l as x}from"./iframe-CPwma648.js";import{S as s,a as I}from"./side-panel-BQ6Su1GW.js";import{B as o}from"./button-BE8YYPkS.js";import"./button-skeleton-Dtbl2yvK.js";import"./text-input-BX25Iv0z.js";import"./text-input-skeleton-CQeRY_Yn.js";import"./textarea-skeleton-BHFf5yXR.js";import{I as H}from"./icon-button-JBsothZb.js";import{f as B,g as G}from"./16-BGJEph7x.js";import{_ as W}from"./16-CVWqvXKz.js";import{i as A}from"./icon-loader-Bb4ppSSv.js";import"./breadcrumb-skeleton-BS5xd6lB.js";import{s as F,C as Y,i as X}from"./actionable-notification-button-CUaXXfz-.js";const q=".side-panel-stories__body-content{display:flex;flex-direction:column;padding:1rem;gap:1rem}.side-panel-stories__text-inputs{display:flex;gap:1rem}.side-panel-stories__text-inputs>*{flex-basis:50%}.side-panel-stories__story-container{position:fixed;display:grid;block-size:100vh;grid-template-rows:3rem 1fr;inline-size:100vw;inset-block-start:0;inset-inline-start:0}.side-panel-stories__story-header{background:var(--cds-background-inverse, #393939)}.side-panel-stories__story-content{position:relative;display:flex;align-items:center;justify-content:center}.side-panel-stories__custom-header-content{margin-block-end:.5rem}",f=L(q);let T=class extends Y{constructor(){super(...arguments),this.titleId="",this.kind=B.INFO}_renderIcon(){const{statusIconDescription:c,kind:l}=this,{[l]:h}=X;return h?h({class:`${a}--inline-notification__icon`,children:c?M`<title>${c}</title>`:void 0}):void 0}_renderText(){const{subtitle:c,title:l,titleId:h,_type:v}=this;return e`
      <div class="${a}--${v}-notification__text-wrapper">
        <div class="${a}--${v}-notification__content">
          ${l&&e`<div
            class="${a}--${v}-notification__title"
            id="${h}">
            ${l}<slot name="title"></slot>
          </div>`}
          ${c&&e`<div class="${a}--${v}-notification__subtitle">
            ${c}<slot name="subtitle"></slot>
          </div>`}
          <slot></slot>
        </div>
      </div>
    `}_renderButton(){return e``}connectedCallback(){super.connectedCallback(),this.removeAttribute("role")}updated(c){super.updated(c);const l=this.querySelector(this.constructor.selectorActionButton);l&&(l.setAttribute("kind","ghost"),this.titleId&&l.setAttribute("aria-describedby",this.titleId))}};T.styles=F;S([k({type:String,reflect:!0,attribute:"title-id"})],T.prototype,"titleId",void 0);S([k({reflect:!0})],T.prototype,"kind",void 0);T=S([z(`${a}-callout-notification`)],T);const i="side-panel-stories__",_=t=>{switch(t){case 1:return e`
        <style>
          ${f}
        </style>
        <h5>Section</h5>
        <cds-text-input
          label="Input A"
          id="side-panel-story-text-input-a"
          class="${i}text-input"
        ></cds-text-input>
        <cds-text-input
          label="Input B"
          id="side-panel-story-text-input-b"
          class="${i}text-input"
        ></cds-text-input>
      `;case 2:return e`
        <style>
          ${f}
        </style>
        <h5>Section</h5>
        <div class="${i}text-inputs">
          <cds-text-input
            label="Input A"
            id="side-panel-story-text-input-a"
          ></cds-text-input>
          <cds-text-input
            label="Input B"
            id="side-panel-story-text-input-b"
          ></cds-text-input>
        </div>
        <div class="${i}text-inputs">
          <cds-text-input
            label="Input C"
            id="side-panel-story-text-input-c"
          ></cds-text-input>
          <cds-text-input
            label="Input D"
            id="side-panel-story-text-input-d"
          ></cds-text-input>
        </div>
        <div class="${i}textarea-container">
          <cds-textarea
            label="Notes"
            value="This is a text area"
          ></cds-textarea>
          <cds-textarea
            label="Notes"
            value="This is a text area"
          ></cds-textarea>
          <cds-textarea
            label="Notes"
            value="This is a text area"
          ></cds-textarea>
        </div>
      `;default:return null}},C=t=>{switch(t){case 1:return e`<div slot="subtitle">This is your subtitle slot.</div>`;case 2:return e`<div slot="subtitle">
        I am your subtitle slot for <strong>adding detail</strong> that can be
        one or two lines.
      </div>`;default:return null}},E=t=>{switch(t){case 1:return e`
        <cds-button slot="action-toolbar">Copy</cds-button>
        <cds-button
          slot="action-toolbar"
          aria-label="Settings"
          has-icon-only="true"
          kind=${o.GHOST}
          size="sm"
          tooltip-text="Settings"
        >
          ${A(W,{slot:"icon"})}
        </cds-button>
        <cds-button
          slot="action-toolbar"
          aria-label="Delete"
          has-icon-only="true"
          kind=${o.GHOST}
          size="sm"
          tooltip-text="Delete"
        >
          ${A(G,{slot:"icon"})}
        </cds-button>
      `;default:return null}},O=t=>{switch(t){case 1:return e`<cds-button key="p" slot="actions" kind=${o.PRIMARY}
        >Primary</cds-button
      >`;case 2:return e`
        <cds-button slot="actions" kind=${o.GHOST}>Ghost</cds-button>
        <cds-button slot="actions" kind=${o.PRIMARY}
          >Primary</cds-button
        >
      `;case 3:return e` <cds-button slot="actions" kind=${o.DANGER}
          >Danger</cds-button
        >
        <cds-button slot="actions" kind=${o.PRIMARY}
          >Primary</cds-button
        >`;case 4:return e` <cds-button slot="actions" kind=${o.GHOST}
          >Ghost</cds-button
        >
        <cds-button slot="actions" kind=${o.SECONDARY}
          >Secondary</cds-button
        >
        <cds-button slot="actions" kind=${o.PRIMARY}
          >Primary</cds-button
        >`;case 5:return e`<cds-button
          key="danger"
          slot="actions"
          kind=${o.DANGER}
          >Danger</cds-button
        >
        <cds-button key="secondary" slot="actions" kind=${o.SECONDARY}
          >Secondary</cds-button
        >
        <cds-button key="primary" slot="actions" kind=${o.PRIMARY}
          >Primary</cds-button
        >`;case 6:return e`<cds-button
          key="danger"
          slot="actions"
          kind=${o.DANGER}
          >Danger</cds-button
        >
        <cds-button key="tertiary" slot="actions" kind=${o.TERTIARY}
          >Tertiary</cds-button
        >
        <cds-button key="secondary" slot="actions" kind=${o.SECONDARY}
          >Secondary</cds-button
        >
        <cds-button key="primary" slot="actions" kind=${o.PRIMARY}
          >Primary</cds-button
        >`;default:return null}},N=t=>{switch(t){case 1:return e`<cds-slug size="xs" alignment="bottom-right">
        <div slot="body-text">
          <p class="secondary">AI Explained</p>
          <h1>84%</h1>
          <p class="secondary bold">Confidence score</p>
          <!-- //cspell: disable -->
          <p class="secondary">
            Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
          </p>
          <!-- //cspell: enable -->
          <hr />
          <p class="secondary">Model type</p>
          <p class="bold">Foundation model</p>
        </div>
      </cds-slug>`;default:return null}},U=t=>{switch(t){case 1:return e` <style>
          ${f}
        </style>
        <div slot="above-title" class="${i}custom-header-content">
          <cds-breadcrumb aria-label="">
            <cds-breadcrumb-item>
              <cds-breadcrumb-link href="#">Breadcrumb 1</cds-breadcrumb-link>
            </cds-breadcrumb-item>
            <cds-breadcrumb-item>
              <cds-breadcrumb-link href="#">Breadcrumb 2</cds-breadcrumb-link>
            </cds-breadcrumb-item>
          </cds-breadcrumb>
        </div>`;case 2:return e` <style>
          ${f}
        </style>
        <div slot="below-title" class="${i}custom-header-content">
          <cds-inline-notification
            title="Notification title"
            subtitle="Subtitle text goes here"
            kind="error"
          >
          </cds-inline-notification>
        </div>`;case 3:return e` <style>
          ${f}
        </style>
        <div slot="above-title" class="${i}custom-header-content">
          <cds-breadcrumb aria-label="">
            <cds-breadcrumb-item>
              <cds-breadcrumb-link href="#">Breadcrumb 1</cds-breadcrumb-link>
            </cds-breadcrumb-item>
            <cds-breadcrumb-item>
              <cds-breadcrumb-link href="#">Breadcrumb 2</cds-breadcrumb-link>
            </cds-breadcrumb-item>
          </cds-breadcrumb>
        </div>

        <div slot="below-title" class="${i}custom-header-content">
          <cds-inline-notification
            title="Notification title"
            subtitle="Subtitle text goes here"
            kind="error"
          >
          </cds-inline-notification>
        </div>`;default:return null}};/**
 * @license
 *
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const w=()=>{document.querySelector(`${x}-side-panel`)?.toggleAttribute("open")},R=()=>{document.querySelector(`${x}-side-panel`)?.setAttribute("current-step","1")},P=()=>{document.querySelector(`${x}-side-panel`)?.setAttribute("current-step","0")},j={[`Extra small size (${s.EXTRA_SMALL})`]:s.EXTRA_SMALL,[`Small size (${s.SMALL})`]:s.SMALL,[`Medium size (default) (${s.MEDIUM})`]:s.MEDIUM,[`Large size (${s.LARGE})`]:s.LARGE,[`Extra Extra Large size (${s.EXTRA_EXTRA_LARGE})`]:s.EXTRA_EXTRA_LARGE},K={left:I.LEFT,"right (default)":I.RIGHT},Z={Empty:0,"Brief content":1,"Longer content":2},r="side-panel-stories__",J={"No label":0,"Shorter label":1,"Longer label":2},D=t=>{switch(t){case 1:return"A short label";case 2:return"A longer label that might go on for a little bit";default:return""}},Q={"No subtitle":0,"Short subtitle":1,"Longer subtitle":2},V={"No action toolbar":0,"With action toolbar":1},tt={"No actions":0,"One button":1,"Two buttons with ghost":2,"Two buttons with danger":3,"Three buttons with ghost":4,"Three buttons with danger":5,"Too many buttons":6},et={"No Slug":0,"With Slug":1},ot={"No custom header components":0,"With custom components above title":1,"With custom components below title":2,"With custom components above & below title":3},nt=Object.values(H),n={args:{actionItems:1,actionToolbarItems:0,animateTitle:!0,class:"a-user-class",closeIconDescription:"Close panel",closeIconTooltipAlignment:"left",condensedActions:!1,content:2,includeOverlay:!0,label:2,open:!1,placement:I.RIGHT,preventCloseOnClickOutside:!1,selectorPageContent:"#page-content-selector",selectorInitialFocus:"#side-panel-story-text-input-a",hideCloseButton:!1,size:s.MEDIUM,slideIn:!1,slug:0,subtitle:1,title:"This title is testing a very long title to see how this behaves with a longer title. It needs to be long enough to trigger overflow when collapsed."},argTypes:{actionItems:{control:"select",description:"Slot (actions)",options:tt},actionToolbarItems:{control:"select",description:"Slot (action-toolbar)",options:V},animateTitle:{control:"boolean",description:"animate-title (Title animates on scroll)"},class:{control:"text",description:"class"},closeIconDescription:{control:"text",description:"Close icon description"},closeIconTooltipAlignment:{control:"select",description:"Close icon tooltip alignment",options:nt},condensedActions:{control:"boolean",description:"condensed-actions"},content:{control:"select",description:"Slot (default), panel contents",options:Z},includeOverlay:{control:"boolean",description:"include-overlay"},label:{control:"select",description:"label",options:J},open:{control:"boolean",description:"open"},placement:{control:"select",description:"placement",options:K},preventCloseOnClickOutside:{control:"boolean",description:"prevent-close-on-click-outside"},selectorPageContent:{control:"text",description:"selector-page-content"},selectorInitialFocus:{control:"text",description:"selector-initial-focus"},hideCloseButton:{control:"boolean",description:'Show/hide the "X" close button'},size:{control:"select",description:"size",options:j},slideIn:{control:"boolean",description:"slide-in"},slug:{control:"select",description:"slug (AI slug)",options:et},subtitle:{control:"select",description:"Slot (subtitle)",options:Q},title:{control:"text",description:"title"}},render:t=>e`
      <div class="${r}story-container">
        <div class="${r}story-header"></div>
        <div id="page-content-selector" class="${r}story-content">
          <cds-button @click="${w}">Toggle side-panel</cds-button>
        </div>
      </div>
      <c4p-side-panel
        ?animate-title=${t.animateTitle}
        ?condensed-actions=${t.condensedActions}
        current-step="0"
        ?include-overlay=${t.includeOverlay&&!t.slideIn}
        selector-initial-focus=${t.selectorInitialFocus}
        label-text="${D(t.label)}"
        ?open=${t.open}
        placement=${t.placement}
        ?prevent-close-on-click-outside=${t.preventCloseOnClickOutside}
        selector-page-content=${t.selectorPageContent}
        size=${t.size}
        ?slide-in=${t.slideIn}
        ?hide-close-button=${t.hideCloseButton}
        close-icon-description=${t.closeIconDescription}
        close-icon-tooltip-alignment=${t.closeIconTooltipAlignment}
        .title=${t.title}
        @c4p-side-panel-navigate-back=${P}
      >
        <!-- slotted action toolbar cds-buttons -->
        ${E(t.actionToolbarItems)}

        <!-- default slotted content -->
        ${_(t.content)}
        <cds-button @click="${R}">Step two</cds-button>

        <!-- slotted subtitle slotted content -->
        ${C(t.subtitle)}

        <!-- slotted action items cds-buttons -->
        ${O(t.actionItems)}

        <!-- slotted slug -->
        ${N(t.slug)}
      </c4p-side-panel>
    `},d={...n},u={...n,args:{...n.args,slideIn:!0}},p={...n,args:{...n.args,actionToolbarItems:1}},b={...n,args:{...n.args,focusSelector:"#side-panel-story-text-input-a",label:0},argTypes:{...n.argTypes,focusSelector:{control:"text",description:"selector-primary-focus"}}},m={...n,args:{...n.args,animateTitle:!1,label:0}},g={...n,args:{...n.args,actionToolbarItems:1,animateTitle:!1,label:0}},$={...n,args:{...n.args,label:0,title:""}},y={args:{...n.args,customHeaderComponents:1},argTypes:{...n.argTypes,customHeaderComponents:{control:"select",description:"Slots (above-title, below-title)",options:ot}},render:t=>e`
      <div class="${r}story-container">
        <div class="${r}story-header"></div>
        <div id="page-content-selector" class="${r}story-content">
          <cds-button @click="${w}">Toggle side-panel</cds-button>
        </div>
      </div>
      <c4p-side-panel
        ?animate-title=${t.animateTitle}
        ?condensed-actions=${t.condensedActions}
        current-step="0"
        ?include-overlay=${t.includeOverlay&&!t.slideIn}
        selector-initial-focus=${t.selectorInitialFocus}
        label-text="${D(t.label)}"
        ?open=${t.open}
        placement=${t.placement}
        ?prevent-close-on-click-outside=${t.preventCloseOnClickOutside}
        selector-page-content=${t.selectorPageContent}
        size=${t.size}
        ?slide-in=${t.slideIn}
        ?hide-close-button=${t.hideCloseButton}
        close-icon-description=${t.closeIconDescription}
        close-icon-tooltip-alignment=${t.closeIconTooltipAlignment}
        .title=${t.title}
        @c4p-side-panel-navigate-back=${P}
      >
        <!-- slotted custom header components -->
        ${U(t.customHeaderComponents)}

        <!-- slotted action toolbar cds-buttons -->
        ${E(t.actionToolbarItems)}

        <!-- default slotted content -->
        ${_(t.content)}
        <cds-button @click="${R}">Step two</cds-button>

        <!-- slotted subtitle slotted content -->
        ${C(t.subtitle)}

        <!-- slotted action items cds-buttons -->
        ${O(t.actionItems)}

        <!-- slotted slug -->
        ${N(t.slug)}
      </c4p-side-panel>
    `},st={title:"Components/SidePanel"};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...defaultTemplate
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...defaultTemplate,
  args: {
    ...defaultTemplate.args,
    slideIn: true
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...defaultTemplate,
  args: {
    ...defaultTemplate.args,
    actionToolbarItems: 1
  }
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  ...defaultTemplate,
  args: {
    ...defaultTemplate.args,
    focusSelector: '#side-panel-story-text-input-a',
    label: 0
  },
  argTypes: {
    ...defaultTemplate.argTypes,
    focusSelector: {
      control: 'text',
      description: 'selector-primary-focus'
    }
  }
}`,...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...defaultTemplate,
  args: {
    ...defaultTemplate.args,
    animateTitle: false,
    label: 0
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  ...defaultTemplate,
  args: {
    ...defaultTemplate.args,
    actionToolbarItems: 1,
    animateTitle: false,
    label: 0
  }
}`,...g.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  ...defaultTemplate,
  args: {
    ...defaultTemplate.args,
    label: 0,
    title: ''
  }
}`,...$.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultTemplate.args,
    customHeaderComponents: 1
  },
  argTypes: {
    ...defaultTemplate.argTypes,
    customHeaderComponents: {
      control: 'select',
      description: 'Slots (above-title, below-title)',
      options: customHeaderComponents
    }
  },
  render: args => {
    return html\`
      <div class="\${storyPrefix}story-container">
        <div class="\${storyPrefix}story-header"></div>
        <div id="page-content-selector" class="\${storyPrefix}story-content">
          <cds-button @click="\${toggleButton}">Toggle side-panel</cds-button>
        </div>
      </div>
      <c4p-side-panel
        ?animate-title=\${args.animateTitle}
        ?condensed-actions=\${args.condensedActions}
        current-step="0"
        ?include-overlay=\${args.includeOverlay && !args.slideIn}
        selector-initial-focus=\${args.selectorInitialFocus}
        label-text="\${getLabel(args.label)}"
        ?open=\${args.open}
        placement=\${args.placement}
        ?prevent-close-on-click-outside=\${args.preventCloseOnClickOutside}
        selector-page-content=\${args.selectorPageContent}
        size=\${args.size}
        ?slide-in=\${args.slideIn}
        ?hide-close-button=\${args.hideCloseButton}
        close-icon-description=\${args.closeIconDescription}
        close-icon-tooltip-alignment=\${args.closeIconTooltipAlignment}
        .title=\${args.title}
        @c4p-side-panel-navigate-back=\${prevStep}
      >
        <!-- slotted custom header components -->
        \${getCustomHeaderComponents(args.customHeaderComponents)}

        <!-- slotted action toolbar cds-buttons -->
        \${getActionToolbarItems(args.actionToolbarItems)}

        <!-- default slotted content -->
        \${getContent(args.content)}
        <cds-button @click="\${nextStep}">Step two</cds-button>

        <!-- slotted subtitle slotted content -->
        \${getSubTitle(args.subtitle)}

        <!-- slotted action items cds-buttons -->
        \${getActionItems(args.actionItems)}

        <!-- slotted slug -->
        \${getSlug(args.slug)}
      </c4p-side-panel>
    \`;
  }
}`,...y.parameters?.docs?.source}}};const it=["SlideOver","SlideIn","WithActionToolbar","SpecifyElementToHaveFocus","WithStaticTitle","WithStaticTitleAndActionToolbar","WithoutTitle","CustomHeader"],ht=Object.freeze(Object.defineProperty({__proto__:null,CustomHeader:y,SlideIn:u,SlideOver:d,SpecifyElementToHaveFocus:b,WithActionToolbar:p,WithStaticTitle:m,WithStaticTitleAndActionToolbar:g,WithoutTitle:$,__namedExportsOrder:it,default:st},Symbol.toStringTag,{value:"Module"}));export{ht as S};
