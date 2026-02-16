import{k as P,_ as S,n as k,c as z,p as a,x as e,l as A}from"./iframe-D_goBqV9.js";import{S as s,a as I}from"./side-panel-CUzRLa8U.js";import{B as o}from"./button-BiU2GWBy.js";import"./button-skeleton-D_cJh9PI.js";import"./text-input-BbphKhDW.js";import"./text-input-skeleton-ph05RCYN.js";import"./textarea-skeleton-DGI8ZSxV.js";import{I as H}from"./icon-button-DN4QV_WT.js";import{f as M,g as B}from"./16-DfZW_dVM.js";import{_ as G}from"./16-CVWqvXKz.js";import{i as x}from"./icon-loader-wTLyOJdN.js";import"./breadcrumb-skeleton-yerV0XcC.js";import{s as W,C as F,i as Y}from"./actionable-notification-button-0xIKl1jk.js";import"./preload-helper-PPVm8Dsz.js";import"./state-010NHMgK.js";import"./query-D0jTsbLw.js";import"./query-assigned-elements-CblsR2sJ.js";import"./class-map-Cd1_UiXq.js";import"./16-803qFA73.js";import"./16-D5maUdCH.js";import"./index-gRrbDvJ2.js";import"./layer-DQ8-ROfZ.js";import"./16-BX5ofAFL.js";import"./validity-CUJaV9kI.js";import"./definition-tooltip-BMNIiPWq.js";import"./popover-content-30i-98cd.js";import"./floating-controller-xHgEX7I-.js";import"./link-BbqWY59B.js";const X=".side-panel-stories__body-content{flex-direction:column;gap:1rem;padding:1rem;display:flex}.side-panel-stories__text-inputs{gap:1rem;display:flex}.side-panel-stories__text-inputs>*{flex-basis:50%}.side-panel-stories__story-container{grid-template-rows:3rem 1fr;block-size:100vh;inline-size:100vw;display:grid;position:fixed;inset-block-start:0;inset-inline-start:0}.side-panel-stories__story-header{background:var(--cds-background-inverse,#393939)}.side-panel-stories__story-content{justify-content:center;align-items:center;display:flex;position:relative}.side-panel-stories__custom-header-content{margin-block-end:.5rem}",d=P(X);let u=class extends F{constructor(){super(...arguments),this.titleId="",this.kind=M.INFO}_renderIcon(){const{statusIconDescription:c,kind:l}=this,p=Y[l];return p?x(p,{class:`${a}--inline-notification__icon`,"aria-label":c||void 0}):void 0}_renderText(){const{subtitle:c,title:l,titleId:p,_type:m}=this;return e`
      <div class="${a}--${m}-notification__text-wrapper">
        <div class="${a}--${m}-notification__content">
          ${l&&e`<div
            class="${a}--${m}-notification__title"
            id="${p}">
            ${l}<slot name="title"></slot>
          </div>`}
          ${c&&e`<div class="${a}--${m}-notification__subtitle">
            ${c}<slot name="subtitle"></slot>
          </div>`}
          <slot></slot>
        </div>
      </div>
    `}_renderButton(){return e``}connectedCallback(){super.connectedCallback(),this.removeAttribute("role")}updated(c){super.updated(c);const l=this.querySelector(this.constructor.selectorActionButton);l&&(l.setAttribute("kind","ghost"),this.titleId&&l.setAttribute("aria-describedby",this.titleId))}};u.styles=W;S([k({type:String,reflect:!0,attribute:"title-id"})],u.prototype,"titleId",void 0);S([k({reflect:!0})],u.prototype,"kind",void 0);u=S([z(`${a}-callout-notification`)],u);const i="side-panel-stories__",C=t=>{switch(t){case 1:return e`
        <style>
          ${d}
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
          ${d}
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
      `;default:return null}},_=t=>{switch(t){case 1:return e`<div slot="subtitle">This is your subtitle slot.</div>`;case 2:return e`<div slot="subtitle">
        I am your subtitle slot for <strong>adding detail</strong> that can be
        one or two lines.
      </div>`;default:return null}},E=t=>t===1?e`
        <cds-button slot="action-toolbar">Copy</cds-button>
        <cds-button
          slot="action-toolbar"
          aria-label="Settings"
          has-icon-only="true"
          kind=${o.GHOST}
          size="sm"
          tooltip-text="Settings"
        >
          ${x(G,{slot:"icon"})}
        </cds-button>
        <cds-button
          slot="action-toolbar"
          aria-label="Delete"
          has-icon-only="true"
          kind=${o.GHOST}
          size="sm"
          tooltip-text="Delete"
        >
          ${x(B,{slot:"icon"})}
        </cds-button>
      `:null,O=t=>{switch(t){case 1:return e`<cds-button key="p" slot="actions" kind=${o.PRIMARY}
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
        >`;default:return null}},N=t=>t===1?e`<cds-slug size="xs" alignment="bottom-right">
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
      </cds-slug>`:null,q=t=>{switch(t){case 1:return e` <style>
          ${d}
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
          ${d}
        </style>
        <div slot="below-title" class="${i}custom-header-content">
          <cds-inline-notification
            title="Notification title"
            subtitle="Subtitle text goes here"
            kind="error"
          >
          </cds-inline-notification>
        </div>`;case 3:return e` <style>
          ${d}
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
        </div>`;default:return null}},R=()=>{document.querySelector(`${A}-side-panel`)?.toggleAttribute("open")},w=()=>{document.querySelector(`${A}-side-panel`)?.setAttribute("current-step","1")},D=()=>{document.querySelector(`${A}-side-panel`)?.setAttribute("current-step","0")},U={[`Extra small size (${s.EXTRA_SMALL})`]:s.EXTRA_SMALL,[`Small size (${s.SMALL})`]:s.SMALL,[`Medium size (default) (${s.MEDIUM})`]:s.MEDIUM,[`Large size (${s.LARGE})`]:s.LARGE,[`Extra Extra Large size (${s.EXTRA_EXTRA_LARGE})`]:s.EXTRA_EXTRA_LARGE},K={left:I.LEFT,"right (default)":I.RIGHT},j={Empty:0,"Brief content":1,"Longer content":2},r="side-panel-stories__",Z={"No label":0,"Shorter label":1,"Longer label":2},L=t=>{switch(t){case 1:return"A short label";case 2:return"A longer label that might go on for a little bit";default:return""}},J={"No subtitle":0,"Short subtitle":1,"Longer subtitle":2},Q={"No action toolbar":0,"With action toolbar":1},V={"No actions":0,"One button":1,"Two buttons with ghost":2,"Two buttons with danger":3,"Three buttons with ghost":4,"Three buttons with danger":5,"Too many buttons":6},tt={"No Slug":0,"With Slug":1},et={"No custom header components":0,"With custom components above title":1,"With custom components below title":2,"With custom components above & below title":3},ot=Object.values(H),n={args:{actionItems:1,actionToolbarItems:0,animateTitle:!0,class:"a-user-class",closeIconDescription:"Close panel",closeIconTooltipAlignment:"left",condensedActions:!1,content:2,includeOverlay:!0,label:2,open:!1,placement:I.RIGHT,preventCloseOnClickOutside:!1,selectorPageContent:"#page-content-selector",selectorInitialFocus:"#side-panel-story-text-input-a",hideCloseButton:!1,size:s.MEDIUM,slideIn:!1,slug:0,subtitle:1,title:"This title is testing a very long title to see how this behaves with a longer title. It needs to be long enough to trigger overflow when collapsed."},argTypes:{actionItems:{control:"select",description:"Slot (actions)",options:V},actionToolbarItems:{control:"select",description:"Slot (action-toolbar)",options:Q},animateTitle:{control:"boolean",description:"animate-title (Title animates on scroll)"},class:{control:"text",description:"class"},closeIconDescription:{control:"text",description:"Close icon description"},closeIconTooltipAlignment:{control:"select",description:"Close icon tooltip alignment",options:ot},condensedActions:{control:"boolean",description:"condensed-actions"},content:{control:"select",description:"Slot (default), panel contents",options:j},includeOverlay:{control:"boolean",description:"include-overlay"},label:{control:"select",description:"label",options:Z},open:{control:"boolean",description:"open"},placement:{control:"select",description:"placement",options:K},preventCloseOnClickOutside:{control:"boolean",description:"prevent-close-on-click-outside"},selectorPageContent:{control:"text",description:"selector-page-content"},selectorInitialFocus:{control:"text",description:"selector-initial-focus"},hideCloseButton:{control:"boolean",description:'Show/hide the "X" close button'},size:{control:"select",description:"size",options:U},slideIn:{control:"boolean",description:"slide-in"},slug:{control:"select",description:"slug (AI slug)",options:tt},subtitle:{control:"select",description:"Slot (subtitle)",options:J},title:{control:"text",description:"title"}},render:t=>e`
      <div class="${r}story-container">
        <div class="${r}story-header"></div>
        <div id="page-content-selector" class="${r}story-content">
          <cds-button @click="${R}">Toggle side-panel</cds-button>
        </div>
      </div>
      <c4p-side-panel
        ?animate-title=${t.animateTitle}
        ?condensed-actions=${t.condensedActions}
        current-step="0"
        ?include-overlay=${t.includeOverlay&&!t.slideIn}
        selector-initial-focus=${t.selectorInitialFocus}
        label-text="${L(t.label)}"
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
        @c4p-side-panel-navigate-back=${D}
      >
        <!-- slotted action toolbar cds-buttons -->
        ${E(t.actionToolbarItems)}

        <!-- default slotted content -->
        ${C(t.content)}
        <cds-button @click="${w}">Step two</cds-button>

        <!-- slotted subtitle slotted content -->
        ${_(t.subtitle)}

        <!-- slotted action items cds-buttons -->
        ${O(t.actionItems)}

        <!-- slotted slug -->
        ${N(t.slug)}
      </c4p-side-panel>
    `},b={...n},g={...n,args:{...n.args,slideIn:!0}},$={...n,args:{...n.args,actionToolbarItems:1}},y={...n,args:{...n.args,focusSelector:"#side-panel-story-text-input-a",label:0},argTypes:{...n.argTypes,focusSelector:{control:"text",description:"selector-primary-focus"}}},f={...n,args:{...n.args,animateTitle:!1,label:0}},T={...n,args:{...n.args,actionToolbarItems:1,animateTitle:!1,label:0}},h={...n,args:{...n.args,label:0,title:""}},v={args:{...n.args,customHeaderComponents:1},argTypes:{...n.argTypes,customHeaderComponents:{control:"select",description:"Slots (above-title, below-title)",options:et}},render:t=>e`
      <div class="${r}story-container">
        <div class="${r}story-header"></div>
        <div id="page-content-selector" class="${r}story-content">
          <cds-button @click="${R}">Toggle side-panel</cds-button>
        </div>
      </div>
      <c4p-side-panel
        ?animate-title=${t.animateTitle}
        ?condensed-actions=${t.condensedActions}
        current-step="0"
        ?include-overlay=${t.includeOverlay&&!t.slideIn}
        selector-initial-focus=${t.selectorInitialFocus}
        label-text="${L(t.label)}"
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
        @c4p-side-panel-navigate-back=${D}
      >
        <!-- slotted custom header components -->
        ${q(t.customHeaderComponents)}

        <!-- slotted action toolbar cds-buttons -->
        ${E(t.actionToolbarItems)}

        <!-- default slotted content -->
        ${C(t.content)}
        <cds-button @click="${w}">Step two</cds-button>

        <!-- slotted subtitle slotted content -->
        ${_(t.subtitle)}

        <!-- slotted action items cds-buttons -->
        ${O(t.actionItems)}

        <!-- slotted slug -->
        ${N(t.slug)}
      </c4p-side-panel>
    `},Rt={title:"Components/SidePanel"};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  ...defaultTemplate
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  ...defaultTemplate,
  args: {
    ...defaultTemplate.args,
    slideIn: true
  }
}`,...g.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  ...defaultTemplate,
  args: {
    ...defaultTemplate.args,
    actionToolbarItems: 1
  }
}`,...$.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  ...defaultTemplate,
  args: {
    ...defaultTemplate.args,
    animateTitle: false,
    label: 0
  }
}`,...f.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  ...defaultTemplate,
  args: {
    ...defaultTemplate.args,
    actionToolbarItems: 1,
    animateTitle: false,
    label: 0
  }
}`,...T.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  ...defaultTemplate,
  args: {
    ...defaultTemplate.args,
    label: 0,
    title: ''
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};const wt=["SlideOver","SlideIn","WithActionToolbar","SpecifyElementToHaveFocus","WithStaticTitle","WithStaticTitleAndActionToolbar","WithoutTitle","CustomHeader"];export{v as CustomHeader,g as SlideIn,b as SlideOver,y as SpecifyElementToHaveFocus,$ as WithActionToolbar,f as WithStaticTitle,T as WithStaticTitleAndActionToolbar,h as WithoutTitle,wt as __namedExportsOrder,Rt as default};
