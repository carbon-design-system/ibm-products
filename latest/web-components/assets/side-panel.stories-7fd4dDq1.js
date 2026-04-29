import{k as E,x as o,l as T}from"./iframe-Dq7_sE-R.js";import{S as s,a as $}from"./side-panel-Bt4x6SAU.js";import{B as e}from"./button-CAMQBIDi.js";import"./button-skeleton-BqzEqCwi.js";import"./text-input-Bxq2zgyi.js";import"./text-input-skeleton-DpTn7lPW.js";import"./textarea-skeleton-BewjCYcB.js";import{I as _}from"./defs-D3xIET8I.js";import{_ as O}from"./16-gUhxGjnI.js";import{_ as R}from"./16-C-Ba_D2f.js";import{i as y}from"./icon-loader-DBarA4V3.js";import"./breadcrumb-skeleton-UbGg5-Fe.js";import"./toast-notification-V-aWqDpV.js";import"./actionable-notification-button-Bbr4vpE6.js";import"./callout-notification-DQMJiOOo.js";import"./preload-helper-PPVm8Dsz.js";import"./state-145bePLO.js";import"./query-D0jTsbLw.js";import"./query-assigned-elements-CblsR2sJ.js";import"./host-listener-DN1-XIwx.js";import"./16-803qFA73.js";import"./16-D5maUdCH.js";import"./index-CrWKEZ58.js";import"./icon-button-DuMI0ej2.js";import"./definition-tooltip-DfSYRZUQ.js";import"./popover-content-CwEb-NFO.js";import"./floating-controller-O5_OP1Uj.js";import"./class-map-lm-sIrT2.js";import"./layer-HRmTEGxr.js";import"./16-BKf1RCCE.js";import"./validity-5v9si4Dr.js";import"./link-B9XCLPk6.js";const w=".side-panel-stories__body-content{display:flex;flex-direction:column;padding:1rem;gap:1rem}.side-panel-stories__text-inputs{display:flex;gap:1rem}.side-panel-stories__text-inputs>*{flex-basis:50%}.side-panel-stories__story-container{position:fixed;display:grid;block-size:100vh;grid-template-rows:3rem 1fr;inline-size:100vw;inset-block-start:0;inset-inline-start:0}.side-panel-stories__story-header{background:var(--cds-background-inverse, #393939)}.side-panel-stories__story-content{position:relative;display:flex;align-items:center;justify-content:center}.side-panel-stories__custom-header-content{margin-block-end:.5rem}",c=E(w),i="side-panel-stories__",f=t=>{switch(t){case 1:return o`
        <style>
          ${c}
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
      `;case 2:return o`
        <style>
          ${c}
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
      `;default:return null}},h=t=>{switch(t){case 1:return o`<div slot="subtitle">This is your subtitle slot.</div>`;case 2:return o`<div slot="subtitle">
        I am your subtitle slot for <strong>adding detail</strong> that can be
        one or two lines.
      </div>`;default:return null}},v=t=>t===1?o`
        <cds-button slot="action-toolbar">Copy</cds-button>
        <cds-button
          slot="action-toolbar"
          aria-label="Settings"
          has-icon-only="true"
          kind=${e.GHOST}
          size="sm"
          tooltip-text="Settings"
        >
          ${y(R,{slot:"icon"})}
        </cds-button>
        <cds-button
          slot="action-toolbar"
          aria-label="Delete"
          has-icon-only="true"
          kind=${e.GHOST}
          size="sm"
          tooltip-text="Delete"
        >
          ${y(O,{slot:"icon"})}
        </cds-button>
      `:null,I=t=>{switch(t){case 1:return o`<cds-button slot="actions" kind=${e.PRIMARY}
        >Primary</cds-button
      >`;case 2:return o`<cds-button slot="actions" kind=${e.GHOST}
        >Ghost</cds-button
      >`;case 3:return o`<cds-button slot="actions" kind=${e.DANGER}
        >Danger</cds-button
      >`;case 4:return o`
        <cds-button slot="actions" kind=${e.SECONDARY}
          >Secondary</cds-button
        >
        <cds-button slot="actions" kind=${e.PRIMARY}
          >Primary</cds-button
        >
      `;case 5:return o`
        <cds-button slot="actions" kind=${e.GHOST}>Ghost</cds-button>
        <cds-button slot="actions" kind=${e.PRIMARY}
          >Primary</cds-button
        >
      `;case 6:return o`<cds-button slot="actions" kind=${e.DANGER}
          >Danger</cds-button
        >
        <cds-button slot="actions" kind=${e.PRIMARY}
          >Primary</cds-button
        >`;case 7:return o`<cds-button slot="actions" kind=${e.GHOST}
          >Ghost</cds-button
        >
        <cds-button slot="actions" kind=${e.SECONDARY}
          >Secondary</cds-button
        >
        <cds-button slot="actions" kind=${e.PRIMARY}
          >Primary</cds-button
        >`;case 8:return o`<cds-button slot="actions" kind=${e.DANGER}
          >Danger</cds-button
        >
        <cds-button slot="actions" kind=${e.SECONDARY}
          >Secondary</cds-button
        >
        <cds-button slot="actions" kind=${e.PRIMARY}
          >Primary</cds-button
        >`;case 9:return o`<cds-button slot="actions" kind=${e.SECONDARY}
          >Secondary</cds-button
        >
        <cds-button slot="actions" kind=${e.SECONDARY}
          >Secondary</cds-button
        >
        <cds-button slot="actions" kind=${e.PRIMARY}
          >Primary</cds-button
        >`;default:return null}},S=t=>t===1?o`<cds-slug size="xs" alignment="bottom-right">
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
      </cds-slug>`:null,L=t=>{switch(t){case 1:return o` <style>
          ${c}
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
        </div>`;case 2:return o` <style>
          ${c}
        </style>
        <div slot="below-title" class="${i}custom-header-content">
          <cds-inline-notification
            title="Notification title"
            subtitle="Subtitle text goes here"
            kind="error"
          >
          </cds-inline-notification>
        </div>`;case 3:return o` <style>
          ${c}
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
        </div>`;default:return null}},x=()=>{document.querySelector(`${T}-side-panel`)?.toggleAttribute("open")},A=()=>{document.querySelector(`${T}-side-panel`)?.setAttribute("current-step","1")},k=()=>{document.querySelector(`${T}-side-panel`)?.setAttribute("current-step","0")},P={[`Extra small size (${s.EXTRA_SMALL})`]:s.EXTRA_SMALL,[`Small size (${s.SMALL})`]:s.SMALL,[`Medium size (default) (${s.MEDIUM})`]:s.MEDIUM,[`Large size (${s.LARGE})`]:s.LARGE,[`Extra Large size (${s.EXTRA_LARGE})`]:s.EXTRA_LARGE,[`Extra Extra Large size (${s.EXTRA_EXTRA_LARGE})`]:s.EXTRA_EXTRA_LARGE},N={left:$.LEFT,"right (default)":$.RIGHT},D={Empty:0,"Brief content":1,"Longer content":2},l="side-panel-stories__",z={"No label":0,"Shorter label":1,"Longer label":2},C=t=>{switch(t){case 1:return"A short label";case 2:return"A longer label that might go on for a little bit";default:return""}},H={"No subtitle":0,"Short subtitle":1,"Longer subtitle":2},M={"No action toolbar":0,"With action toolbar":1},G={"One button":1,"One button (ghost)":2,"One button (danger)":3,"Two buttons":4,"Two buttons with ghost":5,"Two buttons with danger":6,"Three buttons with ghost":7,"Three buttons with danger":8,"Three buttons":9,None:0},B={"No Slug":0,"With Slug":1},W={"No custom header components":0,"With custom components above title":1,"With custom components below title":2,"With custom components above & below title":3},Y=Object.values(_),n={args:{actionItems:1,actionToolbarItems:0,animateTitle:!0,class:"a-user-class",closeIconDescription:"Close panel",closeIconTooltipAlignment:"left",condensedActions:!1,content:2,includeOverlay:!0,label:2,open:!1,placement:$.RIGHT,preventCloseOnClickOutside:!1,selectorPageContent:"#page-content-selector",selectorInitialFocus:"#side-panel-story-text-input-a",hideCloseButton:!1,size:s.MEDIUM,slideIn:!1,slug:0,subtitle:1,title:"This title is testing a very long title to see how this behaves with a longer title. It needs to be long enough to trigger overflow when collapsed."},argTypes:{actionItems:{control:"select",description:"Slot (actions)",options:G},actionToolbarItems:{control:"select",description:"Slot (action-toolbar)",options:M},animateTitle:{control:"boolean",description:"animate-title (Title animates on scroll)"},class:{control:"text",description:"class"},closeIconDescription:{control:"text",description:"Close icon description"},closeIconTooltipAlignment:{control:"select",description:"Close icon tooltip alignment",options:Y},condensedActions:{control:"boolean",description:"condensed-actions"},content:{control:"select",description:"Slot (default), panel contents",options:D},includeOverlay:{control:"boolean",description:"include-overlay"},label:{control:"select",description:"label",options:z},open:{control:"boolean",description:"open"},placement:{control:"select",description:"placement",options:N},preventCloseOnClickOutside:{control:"boolean",description:"prevent-close-on-click-outside"},selectorPageContent:{control:"text",description:"selector-page-content"},selectorInitialFocus:{control:"text",description:"selector-initial-focus"},hideCloseButton:{control:"boolean",description:'Show/hide the "X" close button'},size:{control:"select",description:"size",options:P},slideIn:{control:"boolean",description:"slide-in"},slug:{control:"select",description:"slug (AI slug)",options:B},subtitle:{control:"select",description:"Slot (subtitle)",options:H},title:{control:"text",description:"title"}},render:t=>o`
      <div class="${l}story-container">
        <div class="${l}story-header"></div>
        <div id="page-content-selector" class="${l}story-content">
          <cds-button @click="${x}">Toggle side-panel</cds-button>
        </div>
      </div>
      <c4p-side-panel
        ?animate-title=${t.animateTitle}
        ?condensed-actions=${t.condensedActions}
        current-step="0"
        ?include-overlay=${t.includeOverlay&&!t.slideIn}
        selector-initial-focus=${t.selectorInitialFocus}
        label-text="${C(t.label)}"
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
        @c4p-side-panel-navigate-back=${k}
      >
        <!-- slotted action toolbar cds-buttons -->
        ${v(t.actionToolbarItems)}

        <!-- default slotted content -->
        ${f(t.content)}
        <cds-button @click="${A}">Step two</cds-button>

        <!-- slotted subtitle slotted content -->
        ${h(t.subtitle)}

        <!-- slotted action items cds-buttons -->
        ${I(t.actionItems)}

        <!-- slotted slug -->
        ${S(t.slug)}
      </c4p-side-panel>
    `},a={...n},r={...n,args:{...n.args,slideIn:!0}},d={...n,args:{...n.args,actionToolbarItems:1}},u={...n,args:{...n.args,focusSelector:"#side-panel-story-text-input-a",label:0},argTypes:{...n.argTypes,focusSelector:{control:"text",description:"selector-primary-focus"}}},p={...n,args:{...n.args,animateTitle:!1,label:0}},m={...n,args:{...n.args,actionToolbarItems:1,animateTitle:!1,label:0}},b={...n,args:{...n.args,label:0,title:""}},g={args:{...n.args,customHeaderComponents:1},argTypes:{...n.argTypes,customHeaderComponents:{control:"select",description:"Slots (above-title, below-title)",options:W}},render:t=>o`
      <div class="${l}story-container">
        <div class="${l}story-header"></div>
        <div id="page-content-selector" class="${l}story-content">
          <cds-button @click="${x}">Toggle side-panel</cds-button>
        </div>
      </div>
      <c4p-side-panel
        ?animate-title=${t.animateTitle}
        ?condensed-actions=${t.condensedActions}
        current-step="0"
        ?include-overlay=${t.includeOverlay&&!t.slideIn}
        selector-initial-focus=${t.selectorInitialFocus}
        label-text="${C(t.label)}"
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
        @c4p-side-panel-navigate-back=${k}
      >
        <!-- slotted custom header components -->
        ${L(t.customHeaderComponents)}

        <!-- slotted action toolbar cds-buttons -->
        ${v(t.actionToolbarItems)}

        <!-- default slotted content -->
        ${f(t.content)}
        <cds-button @click="${A}">Step two</cds-button>

        <!-- slotted subtitle slotted content -->
        ${h(t.subtitle)}

        <!-- slotted action items cds-buttons -->
        ${I(t.actionItems)}

        <!-- slotted slug -->
        ${S(t.slug)}
      </c4p-side-panel>
    `},It={title:"Components/SidePanel"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  ...defaultTemplate
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...defaultTemplate,
  args: {
    ...defaultTemplate.args,
    slideIn: true
  }
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...defaultTemplate,
  args: {
    ...defaultTemplate.args,
    actionToolbarItems: 1
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...defaultTemplate,
  args: {
    ...defaultTemplate.args,
    animateTitle: false,
    label: 0
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...defaultTemplate,
  args: {
    ...defaultTemplate.args,
    actionToolbarItems: 1,
    animateTitle: false,
    label: 0
  }
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  ...defaultTemplate,
  args: {
    ...defaultTemplate.args,
    label: 0,
    title: ''
  }
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const St=["SlideOver","SlideIn","WithActionToolbar","SpecifyElementToHaveFocus","WithStaticTitle","WithStaticTitleAndActionToolbar","WithoutTitle","CustomHeader"];export{g as CustomHeader,r as SlideIn,a as SlideOver,u as SpecifyElementToHaveFocus,d as WithActionToolbar,p as WithStaticTitle,m as WithStaticTitleAndActionToolbar,b as WithoutTitle,St as __namedExportsOrder,It as default};
