import{k as y,x as n,l as x}from"./iframe-Dq7_sE-R.js";import{T as l,a,b as d}from"./tearsheet-C5fFydKd.js";import{B as t}from"./button-CAMQBIDi.js";import"./button-skeleton-BqzEqCwi.js";import"./tab-skeleton-otxBJnfU.js";import"./text-input-Bxq2zgyi.js";import"./text-input-skeleton-DpTn7lPW.js";import"./textarea-skeleton-BewjCYcB.js";import"./slug-action-button-DRk7xxc0.js";import"./progress-bar-apZOvJ6m.js";import"./dropdown-skeleton-C9eWyahS.js";import"./progress-step-C2nZRNfU.js";import"./truncated-text-Ka52VS6R.js";import"./preload-helper-PPVm8Dsz.js";import"./state-145bePLO.js";import"./query-D0jTsbLw.js";import"./query-assigned-elements-CblsR2sJ.js";import"./host-listener-DN1-XIwx.js";import"./layer-HRmTEGxr.js";import"./modal-label-uK7wUTdO.js";import"./inline-loading-Cyvw46C6.js";import"./icon-loader-DBarA4V3.js";import"./class-map-lm-sIrT2.js";import"./16-DSuDh1sQ.js";import"./icon-button-DuMI0ej2.js";import"./definition-tooltip-DfSYRZUQ.js";import"./popover-content-CwEb-NFO.js";import"./floating-controller-O5_OP1Uj.js";import"./20-CvqWH37X.js";import"./collection-helpers-Cnsts1JG.js";import"./16-BKf1RCCE.js";import"./validity-5v9si4Dr.js";import"./16-DvgjsF02.js";import"./16-D0aIqdwb.js";import"./16-C2f9e6nj.js";import"./skeleton-text-DBCxcWXQ.js";import"./16-Ci-Iy0jC.js";import"./16-D3CzXAJU.js";import"./style-map-C-moiae_.js";import"./link-B9XCLPk6.js";const O="#page-content-selector{position:absolute;z-index:9999;inset-block-start:0;inset-inline-start:0}.tearsheet-stories__tabs .cds--tab-content{display:none}",R=y(O),i="tearsheet-stories",S=()=>{document.querySelector(`${x}-tearsheet`)?.removeAttribute("open")},W={"No influencer":0,"Simple influencer":1,"Progress influencer":2},f=e=>{switch(e){case 1:return n`<div
        slot="influencer"
        class=${`${i}__dummy-content-block`}
      >
        Influencer
      </div>`;case 2:return n` <cds-progress-indicator
        vertical
        slot="influencer"
        class=${`${i}__dummy-content-block`}
      >
        <cds-progress-step
          state="complete"
          label="First step"
          secondary-label="Optional label"
          description="Step 1: Getting started with Carbon Design System"
        ></cds-progress-step>
        <cds-progress-step
          label="Second step with tooltip"
          state="current"
        ></cds-progress-step>
        <cds-progress-step
          label="Third step with tooltip"
          state="incomplete"
        ></cds-progress-step>
        <cds-progress-step
          label="Fourth step"
          secondary-label="Example invalid step"
          state="invalid"
        ></cds-progress-step>
        <cds-progress-step
          disabled
          label="Fifth step"
          state="incomplete"
        ></cds-progress-step>
      </cds-progress-indicator>`;default:return null}},v=e=>{switch(e){case 1:return n`
        <style>
          ${R}
        </style>
        <div class=${`${i}__dummy-content-block`}>
          <h5>Section</h5>
          <cds-text-input
            label="Input A"
            id="tearsheet-story-text-input-a"
            class="${i}text-input"
          ></cds-text-input>
          <cds-text-input
            label="Input B"
            id="tearsheet-story-text-input-b"
            class="${i}text-input"
          ></cds-text-input>
        </div>
      `;case 2:return n` <style>
          ${R}
        </style>
        <div class=${`${i}__dummy-content-block`}>
          <h5>Section</h5>
          <div class="${i}text-inputs">
            <cds-text-input
              label="Input A"
              id="tearsheet-story-text-input-a"
            ></cds-text-input>
            <cds-text-input
              label="Input B"
              id="tearsheet-story-text-input-b"
            ></cds-text-input>
          </div>
          <div class="${i}text-inputs">
            <cds-text-input
              label="Input C"
              id="tearsheet-story-text-input-c"
            ></cds-text-input>
            <cds-text-input
              label="Input D"
              id="tearsheet-story-text-input-d"
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
        </div>`;default:return null}},u=e=>{switch(e){case 1:return n`<span slot="label">Optional label for context</span>`;case 2:return n`<span slot="label"
        >A longer label giving a bit more context
      </span>`;default:return null}},A=e=>{switch(e){case 1:return n`<cds-dropdown slot="header-actions" value="option 1">
        ${["option 1","option 2","option 3","option 4"].map(s=>n` <cds-dropdown-item value="${s}"
              >${s}</cds-dropdown-item
            >`)}
      </cds-dropdown>`;case 2:return n`
        <cds-button
          slot="header-actions"
          kind=${t.SECONDARY}
          size="sm"
          style="width: initial"
        >
          Secondary
        </cds-button>
        <cds-button
          slot="header-actions"
          kind=${t.PRIMARY}
          size="sm"
          style="width: initial"
        >
          Primary
        </cds-button>
      `;default:return null}},r=e=>e?.map(s=>n`<cds-button
      key=${s}
      slot="actions"
      kind=${s}
      @click=${s==="ghost"&&S}
    >
      ${s.charAt(0).toUpperCase()+s.slice(1)}
    </cds-button>`),I=e=>{switch(e){case 1:return r([t.PRIMARY]);case 2:return r([t.GHOST,t.PRIMARY]);case 3:return r([t.DANGER,t.PRIMARY]);case 4:return r([t.GHOST,t.SECONDARY,t.PRIMARY]);case 5:return r([t.DANGER,t.SECONDARY,t.PRIMARY]);case 6:return r([t.GHOST,t.TERTIARY,t.SECONDARY,t.PRIMARY]);case 7:return r([t.DANGER,t.TERTIARY,t.SECONDARY,t.PRIMARY]);case 8:return r([t.GHOST,t.DANGER,t.TERTIARY,t.SECONDARY,t.PRIMARY]);default:return null}},T=e=>e===1?n` <div
        className="tearsheet-stories__tabs"
        slot="header-navigation"
      >
        <cds-tabs value="1">
          <cds-tab value="1">Tab 1</cds-tab>
          <cds-tab value="2">Tab 2</cds-tab>
          <cds-tab value="3">Tab 3</cds-tab>
          <cds-tab value="4">Tab 4</cds-tab>
        </cds-tabs>
      </div>`:null,w=e=>e===1?n`<cds-slug size="xs" alignment="bottom-right">
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
      </cds-slug>`:null,D=e=>{switch(e){case"WITH_AI_LABEL":return n`
        <cds-ai-label alignment="bottom-right" slot="decorator">
          <div slot="body-text">
            <p class="secondary">AI Explained</p>
            <h2 class="ai-label-heading">84%</h2>
            <p class="secondary bold">Confidence score</p>
            <p class="secondary">
              Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut fsil labore et dolore magna
              aliqua.
            </p>
            <hr />
            <p class="secondary">Model type</p>
            <p class="bold">Foundation model</p>
          </div>
        </cds-ai-label>
      `;case"NON_AI_LABEL_DECORATOR":return n`
        <cds-toggletip slot="decorator" alignment="bottom">
          <p slot="body-text">
            Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
          </p>
          <cds-link slot="actions">Test</cds-link>
          <cds-button slot="actions">Button</cds-button>
        </cds-toggletip>
      `;default:return}},N=e=>{switch(e){case 1:return n`
        <span slot="description">
          This is a description for the tearsheet, providing an opportunity to
          describe the flow over a couple of lines in the header of the
          tearsheet.
        </span>
      `;case 2:return n`
        <span slot="description">
          <c4p-truncated-text
            value="This is a description for the tearsheet, providing an opportunity to describe the flow over a couple of lines in the header of the tearsheet."
            lines="1"
            autoalign="true"
            align="bottom"
          />
        </span>
      `;case 3:return n`
        <span slot="description">
          <c4p-truncated-text
            value="This is a description for the tearsheet, providing an opportunity to describe the flow over a couple of lines in the header of the tearsheet."
            lines="2"
            autoalign="true"
            align="bottom"
          />
        </span>
      `;default:return null}},C=()=>{document.querySelector(`${x}-tearsheet`)?.toggleAttribute("open")},k={[`Narrow (${l.NARROW})`]:l.NARROW,[`Wide (${l.WIDE})`]:l.WIDE},_={[`Narrow (${d.NARROW})`]:d.NARROW,[`Wide (${d.WIDE})`]:d.WIDE},P={[`Left (${a.LEFT})`]:a.LEFT,[`right (${a.RIGHT})`]:a.RIGHT},c="tearsheet-stories",L={"No actions":0,"One button":1,"Two buttons with ghost":2,"Two buttons with danger":3,"Three buttons with ghost":4,"Three buttons with danger":5,"Four buttons with ghost":6,"Four buttons with danger":7,"Too many buttons":8},F={"No header actions":0,"Drop down":1,Buttons:2},H={"No navigation":0,"With navigation":1},B={"No Slug":0,"With Slug":1},Y={"No Decorator":"NO_DECORATOR","With AI Label":"WITH_AI_LABEL","With non AI Label component":"NON_AI_LABEL_DECORATOR"},M={Empty:0,"Brief content":1,"Longer content":2},G={"No label":0,"Shorter label":1,"Longer label":2},q={"No description":0,"With plain String":1,"With truncated-text and 1 line":2,"With truncated-text and 2 lines":3},o={args:{actionItems:4,headerActions:0,content:2,label:1,open:!1,influencerWidth:d.NARROW,influencerPlacement:a.LEFT,influencer:0,preventCloseOnClickOutside:!1,selectorInitialFocus:"",width:l.WIDE,slug:0,decorator:"NO_DECORATOR",description:1,title:"Title used to designate the overarching flow of the tearsheet.",headerNavigation:0},argTypes:{actionItems:{control:"select",description:"Slot (actions)",options:L},headerActions:{control:"select",description:"Slot (header-toolbar)",options:F},content:{control:"select",description:"Slot (default), panel contents",options:M},label:{control:"select",description:"label",options:G},open:{control:"boolean",description:"open"},influencerWidth:{control:"select",description:"influencer-width",options:_},influencerPlacement:{control:"select",description:"influencer-placement",options:P},influencer:{control:"select",description:"influencer (slot)",options:W},preventCloseOnClickOutside:{control:"boolean",description:"prevent-close-on-click-outside"},selectorInitialFocus:{control:"text",description:"selector-initial-focus"},width:{control:"select",description:"width",options:k},slug:{control:"select",description:"slug (AI slug)",options:B},decorator:{control:"select",description:"Slot(decorator)",options:Y},description:{control:"select",description:"description (slot)",options:q},title:{control:"text",description:"title"},headerNavigation:{control:"select",description:"header-navigation",options:H}},render:e=>n`
      <div class="${c}story-container">
        <div class="${c}story-header"></div>
        <div id="page-content-selector" class="${c}story-content">
          <cds-button @click="${C}">Toggle tearsheet</cds-button>
        </div>
      </div>
      <c4p-tearsheet
        class=${e.class}
        selector-initial-focus=${e.selectorInitialFocus}
        ?open=${e.open}
        influencer-placement=${e.influencerPlacement}
        influencer-width=${e.influencerWidth}
        ?prevent-close-on-click-outside=${e.preventCloseOnClickOutside}
        width=${e.width}
      >
        <!-- default slotted content -->
        ${v(e.content)}

        <!-- slotted header label -->
        ${u(e.label)}

        <!-- slotted header title -->
        ${e.title?n`<span slot="title">${e.title}</span>`:""}

        <!-- slotted header description -->
        ${N(e.description)}

        <!-- slotted action in header cds-buttons -->
        ${A(e.headerActions)}

        <!-- slotted action items cds-buttons -->
        ${I(e.actionItems)}

        <!-- slotted Decorator -->
        ${D(e.decorator)}

        <!-- slotted slug -->
        ${w(e.slug)}

        <!-- slotted header-navigation -->
        ${T(e.headerNavigation)}

        <!-- slotted influencer -->
        ${f(e.influencer)}
      </c4p-tearsheet>
    `},p={...o,args:{...o.args,headerNavigation:1}},h={...o,args:{...o.args,influencer:2}},g={...o,args:{...o.args,headerActions:2,influencer:2}},m={...o,args:{...o.args,label:u(0),width:l.NARROW}},$={...o,args:{...o.args,width:l.NARROW}},b={...o,args:{...o.args},render:e=>{const s=E=>{document.querySelector(`[data-index="${E}"]`)?.toggleAttribute("open")};return n`
      <div class="${c}story-container">
        <div class="${c}story-header"></div>
        <div id="page-content-selector" class="${c}story-content">
          <cds-button-set-base z-index="9999">
            <cds-button @click="${()=>s("one")}"
              >Toggle tearsheet one</cds-button
            >
            <cds-button @click="${()=>s("two")}"
              >Toggle tearsheet two</cds-button
            >
            <cds-button @click="${()=>s("three")}"
              >Toggle tearsheet three</cds-button
            >
          </cds-button-set-base>
        </div>
      </div>
      <c4p-tearsheet
        data-index="one"
        class=${e.class}
        selector-initial-focus=${e.selectorInitialFocus}
        ?open=${e.open}
        influencer-placement=${e.influencerPlacement}
        influencer-width=${e.influencerWidth}
        ?prevent-close-on-click-outside=${e.preventCloseOnClickOutside}
        width=${e.width}
      >
        <!-- default slotted content -->
        <cds-button @click="${()=>s("two")}"
          >Toggle tearsheet two</cds-button
        >
        ${v(e.content)}

        <!-- slotted header label -->
        ${u(e.label)}

        <!-- slotted header title -->
        ${e.title?n`<span slot="title">One ${e.title}</span>`:""}

        <!-- slotted header description -->
        ${N(e.description)}

        <!-- slotted action in header cds-buttons -->
        ${A(e.headerActions)}

        <!-- slotted action items cds-buttons -->
        ${I(e.actionItems)}

        <!-- slotted slug -->
        ${w(e.slug)}

        <!-- slotted header-navigation -->
        ${T(e.headerNavigation)}

        <!-- slotted influencer -->
        ${f(e.influencer)}
      </c4p-tearsheet>
      <c4p-tearsheet
        data-index="two"
        class=${e.class}
        selector-initial-focus=${e.selectorInitialFocus}
        has-close-icon
        ?open=${e.open}
        influencer-placement=${e.influencerPlacement}
        influencer-width=${e.influencerWidth}
        ?prevent-close-on-click-outside=${e.preventCloseOnClickOutside}
        width=${e.width}
      >
        <!-- default slotted content -->
        <cds-button @click="${()=>s("three")}"
          >Toggle tearsheet three</cds-button
        >
        ${v(e.content)}

        <!-- slotted header label -->
        ${u(e.label)}

        <!-- slotted header title -->
        ${e.title?n`<span slot="title">Two ${e.title}</span>`:""}

        <!-- slotted header description -->
        ${e.description?n`<span slot="description">${e.description}</span>`:""}

        <!-- slotted action in header cds-buttons -->
        ${A(e.headerActions)}

        <!-- slotted action items cds-buttons -->
        ${I(e.actionItems)}

        <!-- slotted slug -->
        ${w(e.slug)}

        <!-- slotted header-navigation -->
        ${T(e.headerNavigation)}

        <!-- slotted influencer -->
        ${f(e.influencer)}
      </c4p-tearsheet>
      <c4p-tearsheet
        data-index="three"
        class=${e.class}
        selector-initial-focus=${e.selectorInitialFocus}
        has-close-icon
        ?open=${e.open}
        influencer-placement=${e.influencerPlacement}
        influencer-width=${e.influencerWidth}
        ?prevent-close-on-click-outside=${e.preventCloseOnClickOutside}
        width=${e.width}
      >
        <!-- default slotted content -->
        ${v(e.content)}

        <!-- slotted header label -->
        ${u(e.label)}

        <!-- slotted action in header cds-buttons -->
        ${A(e.headerActions)}

        <!-- slotted action items cds-buttons -->
        ${I(e.actionItems)}

        <!-- slotted slug -->
        ${w(e.slug)}

        <!-- slotted header-navigation -->
        ${T(e.headerNavigation)}

        <!-- slotted influencer -->
        ${f(e.influencer)}

        <!-- slotted header title -->
        ${e.title?n`<span slot="title">Three ${e.title}</span>`:""}

        <!-- slotted header description -->
        ${N(e.description)}
      </c4p-tearsheet>
    `}},De={title:"Components/Tearsheet"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    actionItems: 4,
    headerActions: 0,
    content: 2,
    label: 1,
    open: false,
    influencerWidth: TEARSHEET_INFLUENCER_WIDTH.NARROW,
    influencerPlacement: TEARSHEET_INFLUENCER_PLACEMENT.LEFT,
    influencer: 0,
    preventCloseOnClickOutside: false,
    selectorInitialFocus: '',
    width: TEARSHEET_WIDTH.WIDE,
    slug: 0,
    decorator: 'NO_DECORATOR',
    description: 1,
    title: 'Title used to designate the overarching flow of the tearsheet.',
    headerNavigation: 0
  },
  argTypes: {
    actionItems: {
      control: 'select',
      description: 'Slot (actions)',
      options: actionItems
    },
    headerActions: {
      control: 'select',
      description: 'Slot (header-toolbar)',
      options: headerActions
    },
    content: {
      control: 'select',
      description: 'Slot (default), panel contents',
      options: contents
    },
    label: {
      control: 'select',
      description: 'label',
      options: labels
    },
    open: {
      control: 'boolean',
      description: 'open'
    },
    influencerWidth: {
      control: 'select',
      description: 'influencer-width',
      options: influencerWidths
    },
    influencerPlacement: {
      control: 'select',
      description: 'influencer-placement',
      options: influencerPlacements
    },
    influencer: {
      control: 'select',
      description: 'influencer (slot)',
      options: influencers
    },
    preventCloseOnClickOutside: {
      control: 'boolean',
      description: 'prevent-close-on-click-outside'
    },
    selectorInitialFocus: {
      control: 'text',
      description: 'selector-initial-focus'
    },
    width: {
      control: 'select',
      description: 'width',
      options: widths
    },
    slug: {
      control: 'select',
      description: 'slug (AI slug)',
      options: slugs
    },
    decorator: {
      control: 'select',
      description: 'Slot(decorator)',
      options: decorators
    },
    description: {
      control: 'select',
      description: 'description (slot)',
      options: descriptions
    },
    title: {
      control: 'text',
      description: 'title'
    },
    headerNavigation: {
      control: 'select',
      description: 'header-navigation',
      options: navigation
    }
  },
  render: args => {
    return html\`
      <div class="\${storyPrefix}story-container">
        <div class="\${storyPrefix}story-header"></div>
        <div id="page-content-selector" class="\${storyPrefix}story-content">
          <cds-button @click="\${toggleButton}">Toggle tearsheet</cds-button>
        </div>
      </div>
      <c4p-tearsheet
        class=\${args.class}
        selector-initial-focus=\${args.selectorInitialFocus}
        ?open=\${args.open}
        influencer-placement=\${args.influencerPlacement}
        influencer-width=\${args.influencerWidth}
        ?prevent-close-on-click-outside=\${args.preventCloseOnClickOutside}
        width=\${args.width}
      >
        <!-- default slotted content -->
        \${getContent(args.content)}

        <!-- slotted header label -->
        \${getLabel(args.label)}

        <!-- slotted header title -->
        \${args.title ? html\`<span slot="title">\${args.title}</span>\` : ''}

        <!-- slotted header description -->
        \${getDescription(args.description)}

        <!-- slotted action in header cds-buttons -->
        \${getActionToolbarItems(args.headerActions)}

        <!-- slotted action items cds-buttons -->
        \${getActionItems(args.actionItems)}

        <!-- slotted Decorator -->
        \${getDecorator(args.decorator)}

        <!-- slotted slug -->
        \${getSlug(args.slug)}

        <!-- slotted header-navigation -->
        \${getNavigation(args.headerNavigation)}

        <!-- slotted influencer -->
        \${getInfluencer(args.influencer)}
      </c4p-tearsheet>
    \`;
  }
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    headerNavigation: 1
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    influencer: 2
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    headerActions: 2,
    influencer: 2
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    label: getLabel(0),
    width: TEARSHEET_WIDTH.NARROW
  }
}`,...m.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    width: TEARSHEET_WIDTH.NARROW
  }
}`,...$.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args
  },
  render: args => {
    const toggleButton = index => {
      const tearsheet = document.querySelector(\`[data-index="\${index}"]\`);
      tearsheet?.toggleAttribute('open');
    };
    return html\`
      <div class="\${storyPrefix}story-container">
        <div class="\${storyPrefix}story-header"></div>
        <div id="page-content-selector" class="\${storyPrefix}story-content">
          <cds-button-set-base z-index="9999">
            <cds-button @click="\${() => toggleButton('one')}"
              >Toggle tearsheet one</cds-button
            >
            <cds-button @click="\${() => toggleButton('two')}"
              >Toggle tearsheet two</cds-button
            >
            <cds-button @click="\${() => toggleButton('three')}"
              >Toggle tearsheet three</cds-button
            >
          </cds-button-set-base>
        </div>
      </div>
      <c4p-tearsheet
        data-index="one"
        class=\${args.class}
        selector-initial-focus=\${args.selectorInitialFocus}
        ?open=\${args.open}
        influencer-placement=\${args.influencerPlacement}
        influencer-width=\${args.influencerWidth}
        ?prevent-close-on-click-outside=\${args.preventCloseOnClickOutside}
        width=\${args.width}
      >
        <!-- default slotted content -->
        <cds-button @click="\${() => toggleButton('two')}"
          >Toggle tearsheet two</cds-button
        >
        \${getContent(args.content)}

        <!-- slotted header label -->
        \${getLabel(args.label)}

        <!-- slotted header title -->
        \${args.title ? html\`<span slot="title">One \${args.title}</span>\` : ''}

        <!-- slotted header description -->
        \${getDescription(args.description)}

        <!-- slotted action in header cds-buttons -->
        \${getActionToolbarItems(args.headerActions)}

        <!-- slotted action items cds-buttons -->
        \${getActionItems(args.actionItems)}

        <!-- slotted slug -->
        \${getSlug(args.slug)}

        <!-- slotted header-navigation -->
        \${getNavigation(args.headerNavigation)}

        <!-- slotted influencer -->
        \${getInfluencer(args.influencer)}
      </c4p-tearsheet>
      <c4p-tearsheet
        data-index="two"
        class=\${args.class}
        selector-initial-focus=\${args.selectorInitialFocus}
        has-close-icon
        ?open=\${args.open}
        influencer-placement=\${args.influencerPlacement}
        influencer-width=\${args.influencerWidth}
        ?prevent-close-on-click-outside=\${args.preventCloseOnClickOutside}
        width=\${args.width}
      >
        <!-- default slotted content -->
        <cds-button @click="\${() => toggleButton('three')}"
          >Toggle tearsheet three</cds-button
        >
        \${getContent(args.content)}

        <!-- slotted header label -->
        \${getLabel(args.label)}

        <!-- slotted header title -->
        \${args.title ? html\`<span slot="title">Two \${args.title}</span>\` : ''}

        <!-- slotted header description -->
        \${args.description ? html\`<span slot="description">\${args.description}</span>\` : ''}

        <!-- slotted action in header cds-buttons -->
        \${getActionToolbarItems(args.headerActions)}

        <!-- slotted action items cds-buttons -->
        \${getActionItems(args.actionItems)}

        <!-- slotted slug -->
        \${getSlug(args.slug)}

        <!-- slotted header-navigation -->
        \${getNavigation(args.headerNavigation)}

        <!-- slotted influencer -->
        \${getInfluencer(args.influencer)}
      </c4p-tearsheet>
      <c4p-tearsheet
        data-index="three"
        class=\${args.class}
        selector-initial-focus=\${args.selectorInitialFocus}
        has-close-icon
        ?open=\${args.open}
        influencer-placement=\${args.influencerPlacement}
        influencer-width=\${args.influencerWidth}
        ?prevent-close-on-click-outside=\${args.preventCloseOnClickOutside}
        width=\${args.width}
      >
        <!-- default slotted content -->
        \${getContent(args.content)}

        <!-- slotted header label -->
        \${getLabel(args.label)}

        <!-- slotted action in header cds-buttons -->
        \${getActionToolbarItems(args.headerActions)}

        <!-- slotted action items cds-buttons -->
        \${getActionItems(args.actionItems)}

        <!-- slotted slug -->
        \${getSlug(args.slug)}

        <!-- slotted header-navigation -->
        \${getNavigation(args.headerNavigation)}

        <!-- slotted influencer -->
        \${getInfluencer(args.influencer)}

        <!-- slotted header title -->
        \${args.title ? html\`<span slot="title">Three \${args.title}</span>\` : ''}

        <!-- slotted header description -->
        \${getDescription(args.description)}
      </c4p-tearsheet>
    \`;
  }
}`,...b.parameters?.docs?.source}}};const Ce=["Default","WithNavigation","WithInfluencer","WithAllHeaderItemsAndInfluencer","Narrow","NarrowWithAllHeaderItems","StackingTemplate"];export{o as Default,m as Narrow,$ as NarrowWithAllHeaderItems,b as StackingTemplate,g as WithAllHeaderItemsAndInfluencer,h as WithInfluencer,p as WithNavigation,Ce as __namedExportsOrder,De as default};
