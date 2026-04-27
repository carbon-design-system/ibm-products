import{j as t,M as V,A as O}from"./blocks-D2PmR6A2.js";import{useMDXComponents as G}from"./index-D9Jgl2Tx.js";import{n as N,r as E,l as u,x as n,c as Y,k as Z,E as z,t as U,y as ee}from"./iframe-Etog_1uH.js";import{s as H}from"./tearsheet-summary-content-DagpVPZ_.js";import{r as B}from"./state-DSNP4DDc.js";import{e as te}from"./index-BZslYQZt.js";import{i as c}from"./icon-loader-2iGE0hUJ.js";import{_ as m,a as se,b as F}from"./32-gWGFBCOY.js";import"./progress-step-DVnWnlv5.js";import"./text-input-BsWRkIFW.js";import"./text-input-skeleton-BFKx_7Pz.js";import"./button-DbFY82zT.js";import"./button-skeleton-ijMrHdaY.js";import{S as ne}from"./step-group-COC3Kivu.js";import{_ as I}from"./20-p-8MYGqG.js";import"./tab-skeleton-D5JrCoWh.js";import"./progress-bar-CCXPV28r.js";import"./textarea-skeleton-onq77Vq7.js";import"./slug-action-button-CRQbFKkk.js";import"./dropdown-skeleton-C4j-io1q.js";import"./toast-notification-CK4_WS1K.js";import"./actionable-notification-button-CzPU8a6J.js";import"./callout-notification-DkKXN0GG.js";var re=Object.defineProperty,ae=Object.getOwnPropertyDescriptor,X=(s,e,a,o)=>{for(var r=o>1?void 0:o?ae(e,a):e,l=s.length-1,d;l>=0;l--)(d=s[l])&&(r=(o?d(e,a,r):d(r))||r);return o&&r&&re(e,a,r),r};let P=class extends E{constructor(){super(...arguments),this.stackStepSize="lg",this._isActive=!1}connectedCallback(){super.connectedCallback(),H.setStackStepSize(this.stackStepSize),this._isActive=!0,this.dispatchEvent(new CustomEvent(`${u}-tearsheet-stack-connected`,{bubbles:!0,composed:!0,detail:{stackStepSize:this.stackStepSize}}))}disconnectedCallback(){super.disconnectedCallback(),this._isActive&&(H.reset(),this._isActive=!1)}updated(s){super.updated(s),s.has("stackStepSize")&&(H.setStackStepSize(this.stackStepSize),this.dispatchEvent(new CustomEvent(`${u}-tearsheet-stack-step-size-changed`,{bubbles:!0,composed:!0,detail:{stackStepSize:this.stackStepSize}})))}render(){return n`<slot></slot>`}};P.styles=[];X([N({type:String,attribute:"stack-step-size"})],P.prototype,"stackStepSize",2);P=X([Y(`${u}-tearsheet-stack`)],P);const ie="c4p-tearsheet-influencer,div[slot=main-content],c4p-tearsheet-summary-content{padding-block:2rem}.summaryPanelTrigger{position:absolute;inset-block-start:0;inset-inline-end:0}.influencerPanelTrigger{position:absolute;inset-block-start:0;inset-inline-start:0}@media(min-width:66rem)and (max-width:82rem){c4p-preview-tearsheet:not([variant=narrow]) .summaryPanelTrigger,c4p-preview-tearsheet:not([variant=narrow]) .influencerPanelTrigger{display:none}}@media(min-width:42rem)and (max-width:66rem){c4p-preview-tearsheet:not([variant=narrow]) .summaryPanelTrigger,c4p-preview-tearsheet:not([variant=narrow]) .influencerPanelTrigger{display:none}}@media(min-width:82rem)and (max-width:99rem){c4p-preview-tearsheet:not([variant=narrow]) .summaryPanelTrigger,c4p-preview-tearsheet:not([variant=narrow]) .influencerPanelTrigger{display:none}}@media(min-width:99rem){c4p-preview-tearsheet:not([variant=narrow]) .summaryPanelTrigger,c4p-preview-tearsheet:not([variant=narrow]) .influencerPanelTrigger{display:none}}.summaryPanelHeading{font-size:var(--cds-heading-03-font-size, 1.25rem);font-weight:var(--cds-heading-03-font-weight, 400);line-height:var(--cds-heading-03-line-height, 1.4);letter-spacing:var(--cds-heading-03-letter-spacing, 0)}@media(min-width:20rem)and (max-width:42rem){.stackButtons{display:none}}@media(min-width:66rem)and (max-width:82rem){.smallScreenButton{display:none}}@media(min-width:42rem)and (max-width:66rem){.smallScreenButton{display:none}}@media(min-width:82rem)and (max-width:99rem){.smallScreenButton{display:none}}@media(min-width:99rem){.smallScreenButton{display:none}}.default__action-buttons{display:grid;grid-auto-rows:minmax(auto,auto);grid-template-columns:repeat(6,1fr)}.default__action-buttons>cds-button{inline-size:100%;max-inline-size:none}.default__action-buttons>cds-button:first-child{grid-column:span 4}",p=Z(ie);var oe=Object.defineProperty,ce=Object.getOwnPropertyDescriptor,M=(s,e,a,o)=>{for(var r=o>1?void 0:o?ce(e,a):e,l=s.length-1,d;l>=0;l--)(d=s[l])&&(r=(o?d(e,a,r):d(r))||r);return o&&r&&oe(e,a,r),r};let C=class extends te(E){constructor(){super(...arguments),this.horizontal=!1,this._open=!1,this._stepInfo=new ne}connectedCallback(){super.connectedCallback(),this._stepInfo.updateTotalStepCount=3}_onButtonClick(){this._open=!0}_handleCancelButton(){this._open=!1,this._stepInfo.reset()}_handleBackButton(){const{currentStep:s}=this._stepInfo.data;if(s!==0)return this._stepInfo.handlePrevious()}_handleNextButton(){const{currentStep:s,totalSteps:e}=this._stepInfo.data;if(s+1===e){console.log("Form submitted:",this._stepInfo.data.formState),this._handleCancelButton();return}return this._stepInfo.handleNext()}_handleEmailInput(s){const e=structuredClone(this._stepInfo.data.formState);e.email=s.target.value,this._stepInfo.updateFormState=e}_handleCityInput(s){const e=structuredClone(this._stepInfo.data.formState);e.city=s.target.value,this._stepInfo.updateFormState=e}_handleStateInput(s){const e=structuredClone(this._stepInfo.data.formState);e.state=s.target.value,this._stepInfo.updateFormState=e}_toggleInfluencerPanel(){const s=this.shadowRoot?.querySelector(`${u}-tearsheet-influencer`);s&&s.toggleAttribute("influencer-panel-open")}_getStepContent(){const{formState:s,currentStep:e}=this._stepInfo.data,a=s;switch(e){case 0:return n`
          <div>
            <cds-text-input
              label="Email"
              id="step-email-input"
              value=${a.email||""}
              @input="${this._handleEmailInput}"
            ></cds-text-input>
          </div>
        `;case 1:return n`
          <div style="display: flex; gap: 1rem;">
            <cds-text-input
              label="City"
              id="step-city-input"
              value=${a.city||""}
              @input="${this._handleCityInput}"
            ></cds-text-input>
            <cds-text-input
              label="State"
              id="step-state-input"
              value=${a.state||""}
              @input="${this._handleStateInput}"
            ></cds-text-input>
          </div>
        `;case 2:return n`
          <div>
            <h4>Review your information</h4>
            <pre>${JSON.stringify(s,null,2)}</pre>
          </div>
        `;default:return z}}_getProgressStepState(s){const{currentStep:e}=this._stepInfo.data;return s<e?"complete":s===e?"current":"incomplete"}_getActions(){const{currentStep:s}=this._stepInfo.data;return[{kind:"ghost",label:"Cancel",onClick:()=>this._handleCancelButton()},{kind:"secondary",label:"Back",disabled:s===0,onClick:()=>this._handleBackButton()},{kind:"primary",label:s<this._stepInfo.data.totalSteps-1?"Next":"Submit",onClick:()=>this._handleNextButton()}]}render(){return n`
      <cds-button type="button" size="md" @click="${this._onButtonClick}">
        Start create flow
      </cds-button>

      <c4p-preview-tearsheet
        ?open=${this._open}
        variant="wide"
        prevent-close-on-click-outside
      >
        <c4p-tearsheet-header ?hideCloseButton="${!1}">
          <c4p-tearsheet-header-content title="Create tearsheet title">
            <label slot="label">Optional label for context</label>
            <span slot="description">
              This is a description for the tearsheet, providing an opportunity
              to describe the flow over a couple of lines in the header of the
              tearsheet.
            </span>
          </c4p-tearsheet-header-content>
          ${this.horizontal?n`<cds-progress-indicator>
                <cds-progress-step
                  label="First step"
                  state=${this._getProgressStepState(0)}
                ></cds-progress-step>
                <cds-progress-step
                  label="Second step"
                  state=${this._getProgressStepState(1)}
                ></cds-progress-step>
                <cds-progress-step
                  label="Third step"
                  state=${this._getProgressStepState(2)}
                ></cds-progress-step>
              </cds-progress-indicator>`:z}
        </c4p-tearsheet-header>

        <!-- Influencer with Progress Indicator -->
        ${this.horizontal?z:n` <c4p-tearsheet-influencer>
              <cds-progress-indicator vertical>
                <cds-progress-step
                  label="First step"
                  state=${this._getProgressStepState(0)}
                ></cds-progress-step>
                <cds-progress-step
                  label="Second step"
                  state=${this._getProgressStepState(1)}
                ></cds-progress-step>
                <cds-progress-step
                  label="Third step"
                  state=${this._getProgressStepState(2)}
                ></cds-progress-step>
              </cds-progress-indicator>
            </c4p-tearsheet-influencer>`}

        <c4p-tearsheet-body>
          <div slot="main-content">
            <!-- Button to open influencer panel on small screens -->
            <div class="influencerPanelTrigger">
              <cds-button
                kind="ghost"
                tooltip-text="Open Influencer"
                tooltip-position="right"
                @click="${this._toggleInfluencerPanel}"
              >
                ${c(m,{slot:"icon"})}
              </cds-button>
            </div>

            <!-- Step Content -->
            ${this._getStepContent()}
          </div>
        </c4p-tearsheet-body>

        <c4p-tearsheet-footer .actions="${this._getActions()}">
        </c4p-tearsheet-footer>
      </c4p-preview-tearsheet>
    `}};C.styles=p;M([N({type:Boolean})],C.prototype,"horizontal",2);M([B()],C.prototype,"_open",2);C=M([U("step-tearsheet-preview")],C);var le=Object.defineProperty,de=Object.getOwnPropertyDescriptor,T=(s,e,a,o)=>{for(var r=o>1?void 0:o?de(e,a):e,l=s.length-1,d;l>=0;l--)(d=s[l])&&(r=(o?d(e,a,r):d(r))||r);return o&&r&&le(e,a,r),r};let b=class extends E{constructor(){super(...arguments),this.tearsheetType="wide",this._open1=!1,this._open2=!1,this._open3=!1}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}_toggleTearsheet1(){this._open1=!this._open1}_toggleTearsheet2(){this._open2=!this._open2}_toggleTearsheet3(){this._open3=!this._open3}render(){const s=n`
      <div class="rightDetailsBody">
        <div>
          <label>item 1</label>
          <p>item description</p>
        </div>
        <div>
          <label>item 2</label>
          <p>item description</p>
        </div>
        <div>
          <label>item 3</label>
          <p>item description</p>
        </div>
        <div>
          <label>item 4</label>
          <p>item description</p>
        </div>
        <div>
          <label>item 5</label>
          <p>item description</p>
        </div>
      </div>
    `,e=n`
      <section class="main-content">
        <h4>Main content heading</h4>
        <div class="tearsheet-preview-stories-text-inputs">
          <cds-text-input
            label="Enter an important value here"
            id="tss-ft1"
          ></cds-text-input>
          <cds-text-input
            label="Here is an entry field:"
            id="tss-ft2"
          ></cds-text-input>
        </div>
      </section>
    `,a=o=>this.tearsheetType==="mixed"?o%2===0?"narrow":"wide":this.tearsheetType==="wide"?"wide":this.tearsheetType==="narrow"?"narrow":"wide";return n`
      <div class="stackButtons">
        <cds-button @click="${this._toggleTearsheet1}">
          Open Tearsheet 1
        </cds-button>
      </div>
      <div class="smallScreenButton">
        <cds-button
          kind="ghost"
          @click="${this._toggleTearsheet1}"
          aria-label="Open Tearsheet 1"
          tooltip-text="Open Tearsheet 1"
          tooltip-position="right"
        >
          ${c(se,{slot:"icon"})}
        </cds-button>
      </div>

      <!-- Wrap tearsheets in stack provider to enable stacking -->
      <c4p-tearsheet-stack stack-step-size="lg">
        <!-- Tearsheet 1 -->
        <c4p-preview-tearsheet
          ?open="${this._open1}"
          variant="${a(1)}"
          @c4p-preview-tearsheet-closed="${()=>this._open1=!1}"
        >
          <c4p-tearsheet-header>
            <c4p-tearsheet-header-content title="Tearsheet 1">
              <label slot="label">Customer data</label>
              <span slot="description">
                This is a description for the tearsheet, providing an
                opportunity to describe the flow over a couple of lines in the
                header of the tearsheet.
              </span>
              <div slot="header-actions">
                <cds-button
                  size="sm"
                  kind="tertiary"
                  @click="${this._toggleTearsheet2}"
                >
                  Open Tearsheet 2
                </cds-button>
              </div>
            </c4p-tearsheet-header-content>
          </c4p-tearsheet-header>

          <c4p-tearsheet-body>
            <div slot="main-content">${e}</div>
            <c4p-tearsheet-summary-content slot="summary-content">
              <h4 class="rightPanelHeading">Summary Details</h4>
              ${s}
            </c4p-tearsheet-summary-content>
          </c4p-tearsheet-body>

          <c4p-tearsheet-footer
            .actions="${[{kind:"ghost",label:"Cancel",onClick:()=>this._toggleTearsheet1()},{kind:"secondary",label:"Back"},{kind:"primary",label:"Submit"}]}"
          >
          </c4p-tearsheet-footer>
        </c4p-preview-tearsheet>

        <!-- Tearsheet 2 -->
        <c4p-preview-tearsheet
          ?open="${this._open2}"
          variant="${a(2)}"
          @c4p-preview-tearsheet-closed="${()=>this._open2=!1}"
        >
          <c4p-tearsheet-header>
            <c4p-tearsheet-header-content title="Tearsheet 2">
              <label slot="label">Customer data</label>
              <span slot="description">
                This is a description for the tearsheet, providing an
                opportunity to describe the flow over a couple of lines in the
                header of the tearsheet.
              </span>
              <div slot="header-actions">
                <cds-button
                  size="sm"
                  kind="tertiary"
                  @click="${this._toggleTearsheet3}"
                >
                  Open Tearsheet 3
                </cds-button>
              </div>
            </c4p-tearsheet-header-content>
          </c4p-tearsheet-header>

          <c4p-tearsheet-body>
            <div slot="main-content">${e}</div>
            <c4p-tearsheet-summary-content slot="summary-content">
              <h4 class="rightPanelHeading">Summary Details</h4>
              ${s}
            </c4p-tearsheet-summary-content>
          </c4p-tearsheet-body>

          <c4p-tearsheet-footer
            .actions="${[{kind:"ghost",label:"Cancel",onClick:()=>this._toggleTearsheet2()},{kind:"secondary",label:"Back"},{kind:"primary",label:"Submit"}]}"
          >
          </c4p-tearsheet-footer>
        </c4p-preview-tearsheet>

        <!-- Tearsheet 3 -->
        <c4p-preview-tearsheet
          ?open="${this._open3}"
          variant="${a(3)}"
          @c4p-preview-tearsheet-closed="${()=>this._open3=!1}"
        >
          <c4p-tearsheet-header>
            <c4p-tearsheet-header-content title="Tearsheet 3">
              <label slot="label">Customer data</label>
              <span slot="description">
                This is a description for the tearsheet, providing an
                opportunity to describe the flow over a couple of lines in the
                header of the tearsheet.
              </span>
            </c4p-tearsheet-header-content>
          </c4p-tearsheet-header>

          <c4p-tearsheet-body>
            <div slot="main-content">${e}</div>
            <c4p-tearsheet-summary-content slot="summary-content">
              <h4 class="rightPanelHeading">Summary Details</h4>
              ${s}
            </c4p-tearsheet-summary-content>
          </c4p-tearsheet-body>

          <c4p-tearsheet-footer
            .actions="${[{kind:"ghost",label:"Cancel",onClick:()=>this._toggleTearsheet3()},{kind:"secondary",label:"Back"},{kind:"primary",label:"Submit"}]}"
          >
          </c4p-tearsheet-footer>
        </c4p-preview-tearsheet>
      </c4p-tearsheet-stack>
    `}};b.styles=p;T([N({type:String,attribute:"tearsheet-type"})],b.prototype,"tearsheetType",2);T([B()],b.prototype,"_open1",2);T([B()],b.prototype,"_open2",2);T([B()],b.prototype,"_open3",2);b=T([U("stacking-tearsheet-demo")],b);const i="tearsheet-preview-stories",L=(s="wide")=>{const e=`(max-width: ${ee.md.width})`;return window.matchMedia(e).matches||s==="narrow"?"xl":"2xl"},A=s=>{if(s==="WITH_AI_LABEL")return n`
        <cds-ai-label alignment="bottom-right" slot="decorator">
          <div slot="body-text">
            <p class="secondary">AI Explained</p>
            <h2 class="ai-label-heading">84%</h2>
            <p class="secondary bold">Confidence score</p>
            <p class="secondary">Any description goes here</p>
            <hr />
            <p class="secondary">Model type</p>
            <p class="bold">Foundation model</p>
          </div>
        </cds-ai-label>
      `},h=()=>{document.querySelector(`${u}-preview-tearsheet`)?.toggleAttribute("open")},J=()=>{const s=document.querySelector(`${u}-tearsheet-influencer`);s&&s.toggleAttribute("influencer-panel-open")},W=()=>{const s=document.querySelector(`${u}-tearsheet-summary-content`);s&&s.toggleAttribute("summary-panel-open")},_=n` <c4p-truncated-text
  slot="description"
  lines="2"
  type="expand"
  expand-label="Read more"
  collapse-label="Read less"
  id="header-description__truncatedText"
  value="Buttons are used to initialize an action, either in the background or foreground of an experience. There are several kinds of buttons. Primary buttons should be used for the principle call to action on the page. Secondary buttons should be used for secondary actions on each page. Danger buttons should be used for a negative action (such as Delete) on the page"
></c4p-truncated-text>`,K=s=>n`<cds-progress-indicator ?vertical=${s} current-index="1">
    <cds-progress-step
      description="Step 1: Getting started with Carbon Design System"
      label="First step"
      complete
    ></cds-progress-step>
    <cds-progress-step
      description="Step 2: Getting started with Carbon Design System"
      label="Second step with tooltip"
      current
    ></cds-progress-step>
    <cds-progress-step
      description="Step 3: Getting started with Carbon Design System"
      label="Third step with tooltip"
    ></cds-progress-step>
    <cds-progress-step
      description="Step 4: Getting started with Carbon Design System"
      label="Fourth step"
      secondary-label="Example invalid step"
      invalid
    ></cds-progress-step>
    <cds-progress-step
      disabled
      description="Step 5: Getting started with Carbon Design System"
      label="Fifth step"
    ></cds-progress-step>
  </cds-progress-indicator>`,he=n` <cds-tabs value="tab-1">
  <cds-tab id="tab-1" target="tab-panel-1" value="tab-1">Tab 1</cds-tab>
  <cds-tab id="tab-2" target="tab-panel-2" value="tab-2">Tab 2</cds-tab>
  <cds-tab id="tab-3" target="tab-panel-3" value="tab-3">Tab 3</cds-tab>
  <cds-tab id="tab-4" target="tab-panel-4" value="tab-4">Tab 4</cds-tab>
  <cds-tab id="tab-5" target="tab-panel-5" value="tab-5">Tab 5</cds-tab>
  <cds-tab id="tab-6" target="tab-panel-6" value="tab-6">Tab 6</cds-tab>
  <cds-tab id="tab-7" target="tab-panel-7" value="tab-7">Tab 7</cds-tab>
</cds-tabs>`,pe=n` <div class="tabs-demo">
  <div id="tab-panel-1" role="tabpanel" aria-labelledby="tab-1" hidden>
    Tab Panel 1
  </div>
  <div id="tab-panel-2" role="tabpanel" aria-labelledby="tab-2" hidden>
    Tab Panel 2
  </div>
  <div id="tab-panel-3" role="tabpanel" aria-labelledby="tab-3" hidden>
    Tab Panel 3
  </div>
  <div id="tab-panel-4" role="tabpanel" aria-labelledby="tab-4" hidden>
    Tab Panel 4
  </div>
  <div id="tab-panel-5" role="tabpanel" aria-labelledby="tab-5" hidden>
    Tab Panel 5
  </div>
  <div id="tab-panel-6" role="tabpanel" aria-labelledby="tab-6" hidden>
    Tab Panel 6
  </div>
  <div id="tab-panel-7" role="tabpanel" aria-labelledby="tab-7" hidden>
    Tab Panel 7
  </div>
</div>`,R=n`  <div class="rightDetailsBody">
 <Heading class="summaryPanelHeading">Summary Details</Heading>
                <div>
                  <label>item 1</label>
                  <p>item description</p>
                </div>
                <div>
                  <label>item 2</label>
                  <p>item description</p>
                </div>
                <div>
                  <label>item 3</label>
                  <p>item description</p>
                </div>
                <div>
                  <label>item 4</label>
                  <p>item description</p>
                </div>
                <div>
                  <label>item 5</label>
                  <p>item description</p>
                </div>
              </div><div>
                  <label>item 1</label>
                  <p>item description</p>
                </div>
                <div>
                  <label>item 2</label>
                  <p>item description</p>
                </div>
                <div>
                  <label>item 3</label>
                  <p>item description</p>
                </div>
                <div>
                  <label>item 4</label>
                  <p>item description</p>
                </div>
                <div>
                  <label>item 5</label>
                  <p>item description</p>
                </div>
              </div><div>
                  <label>item 1</label>
                  <p>item description</p>
                </div>
                <div>
                  <label>item 2</label>
                  <p>item description</p>
                </div>
                <div>
                  <label>item 3</label>
                  <p>item description</p>
                </div>
                <div>
                  <label>item 4</label>
                  <p>item description</p>
                </div>
                <div>
                  <label>item 5</label>
                  <p>item description</p>
                </div>
              </div><div>
                  <label>item 1</label>
                  <p>item description</p>
                </div>
                <div>
                  <label>item 2</label>
                  <p>item description</p>
                </div>
                <div>
                  <label>item 3</label>
                  <p>item description</p>
                </div>
                <div>
                  <label>item 4</label>
                  <p>item description</p>
                </div>
                <div>
                  <label>item 5</label>
                  <p>item description</p>
                </div>
              </div>`,D=n` <section class="main-content">
  <h4>Main content heading</h4>

  <div class="${i}text-inputs">
    <cds-text-input
      label="Enter an important value here"
      id="input1"
    ></cds-text-input>
    <cds-text-input
      label="Here is an entry field:"
      id="tss-ft2"
    ></cds-text-input>
  </div>

  <div class="${i}text-inputs">
    <cds-text-input
      label="Enter an important value here"
      id="tss-ft1"
    ></cds-text-input>
    <cds-text-input
      label="Here is an entry field:"
      id="tss-ft2-2"
    ></cds-text-input>
  </div>

  <div class="${i}text-inputs">
    <cds-text-input
      label="Enter an important value here"
      id="tss-ft3"
    ></cds-text-input>
    <cds-text-input
      label="Here is an entry field:"
      id="tss-ft4"
    ></cds-text-input>
  </div>

  <div class="${i}textarea-container">
    <cds-textarea label="Notes" value="This is a text area"></cds-textarea>
    <cds-textarea label="Notes" value="This is a text area"></cds-textarea>
    <cds-textarea label="Notes" value="This is a text area"></cds-textarea>
    <cds-textarea label="Notes" value="This is a text area"></cds-textarea>
  </div>
</section>`,v={args:{variant:"wide",open:!1,decorator:"NONE",hideCloseButton:!1,disableHeaderCollapse:!1,title:"Title of the tearsheet",label:"Label",showDescription:!0,showTitleIcon:!0,showHeaderActions:!0,showSummaryContent:!0,preventCloseOnClickOutside:!1},argTypes:{variant:{control:"select",options:["wide","narrow"],description:"Tearsheet variant"},open:{control:"boolean",description:"Controls whether the tearsheet is open"},decorator:{control:"select",options:["NONE","WITH_AI_LABEL"],description:"Decorator type for the tearsheet header"},hideCloseButton:{control:"boolean",description:"Hide the close button in the header"},disableHeaderCollapse:{control:"boolean",description:"Disable header collapse/expand on scroll"},title:{control:"text",description:"Title of the tearsheet"},label:{control:"text",description:"Label above the title"},showDescription:{control:"boolean",description:"Show description text"},showTitleIcon:{control:"boolean",description:"Show icon before title"},showHeaderActions:{control:"boolean",description:"Show action buttons in header"},showSummaryContent:{control:"boolean",description:"Show summary content panel"},preventCloseOnClickOutside:{control:"boolean",description:"Prevent closing when clicking outside"}},render:s=>n`
      <style>
        ${p}
      </style>
      <div class="${i}story-container">
        <div class="${i}story-header"></div>
        <div id="page-content-selector" class="${i}story-content">
          <cds-button @click="${h}">Toggle tearsheet</cds-button>
        </div>
      </div>

      <c4p-preview-tearsheet
        variant="${s.variant}"
        ?open="${s.open}"
        ?prevent-close-on-click-outside="${s.preventCloseOnClickOutside}"
      >
        <c4p-tearsheet-header
          ?hide-close-button="${s.hideCloseButton}"
          ?disable-header-collapse="${s.disableHeaderCollapse}"
        >
          <!-- slotted Decorator -->
          ${s.decorator!=="NONE"?A(s.decorator):""}

          <c4p-tearsheet-header-content title="${s.title}">
            <label slot="label">${s.label}</label>
            ${s.showDescription?_:""}
            ${s.showTitleIcon?c(I,{slot:"title-start"}):""}
            ${s.showHeaderActions?n`<div slot="header-actions">
                  <cds-button size="sm" kind="tertiary">
                    Primary action ${c(F,{slot:"icon"})}
                  </cds-button>
                </div>`:""}
          </c4p-tearsheet-header-content>
        </c4p-tearsheet-header>

        <c4p-tearsheet-body>
          <div slot="main-content">
            ${s.showSummaryContent?n`<div class="summaryPanelTrigger">
                  <cds-button
                    kind="ghost"
                    label="Open right panel"
                    @click="${W}"
                  >
                    ${c(m,{slot:"icon"})}
                  </cds-button>
                </div>`:""}
            ${D}
          </div>
          ${s.showSummaryContent?n`<c4p-tearsheet-summary-content slot="summary-content"
                >${R}</c4p-tearsheet-summary-content
              >`:""}
        </c4p-tearsheet-body>
        <c4p-tearsheet-footer
          variant="${s.variant}"
          .actions="${[{kind:"ghost",label:"Cancel",onClick:h},{kind:"secondary",label:"Back"},{kind:"primary",label:"Submit"}]}"
        >
        </c4p-tearsheet-footer>
      </c4p-preview-tearsheet>
    `},g={render:()=>n`
      <style>
        ${p}
      </style>
      <div class="${i}story-container">
        <div class="${i}story-header"></div>
        <div id="page-content-selector" class="${i}story-content">
          <cds-button @click="${h}">Open Tearsheet</cds-button>
        </div>
      </div>

      <c4p-preview-tearsheet variant="wide">
        <c4p-tearsheet-header ?hide-close-button="${!1}">
          <!-- Decorator -->
          ${A("WITH_AI_LABEL")}

          <c4p-tearsheet-header-content title="Title of the tearsheet">
            <label slot="label">Label</label>
            ${_}
            ${c(I,{slot:"title-start"})}

            <div slot="header-actions">
              <cds-button size="sm" kind="tertiary">Action 1</cds-button>
            </div>
          </c4p-tearsheet-header-content>
        </c4p-tearsheet-header>

        <!-- Influencer with Progress Indicator -->
        <c4p-tearsheet-influencer>
          ${K(!0)}
        </c4p-tearsheet-influencer>

        <c4p-tearsheet-body>
          <div slot="main-content">
            <!-- Button to open influencer panel on small screens -->
            <div class="influencerPanelTrigger">
              <cds-button
                kind="ghost"
                tooltip-text="Open Influencer"
                tooltip-position="right"
                @click="${J}"
              >
                ${c(m,{slot:"icon"})}
              </cds-button>
            </div>

            <!-- Main Content -->
            ${D}
          </div>
        </c4p-tearsheet-body>

        <c4p-tearsheet-footer
          variant="wide"
          .actions="${[{kind:"ghost",label:"Cancel",onClick:h},{kind:"secondary",label:"Back"},{kind:"primary",label:"Submit"}]}"
        >
        </c4p-tearsheet-footer>
      </c4p-preview-tearsheet>
    `},x={render:()=>n`
      <style>
        ${p}
      </style>
      <div class="${i}story-container">
        <div class="${i}story-header"></div>
        <div id="page-content-selector" class="${i}story-content">
          <cds-button @click="${h}">Open Tearsheet</cds-button>
        </div>
      </div>

      <c4p-preview-tearsheet variant="wide">
        <c4p-tearsheet-header ?hide-close-button="${!1}">
          <!-- Decorator -->
          ${A("WITH_AI_LABEL")}

          <c4p-tearsheet-header-content title="Title of the tearsheet">
            <label slot="label">Label</label>
            ${_}
            ${c(I,{slot:"title-start"})}

            <div slot="header-actions">
              <cds-button size="sm" kind="tertiary">Action 1</cds-button>
            </div>
          </c4p-tearsheet-header-content>
          <c4p-tearsheet-navigation-bar>
            ${he}
            <c4p-tearsheet-scroller slot="scroller"></c4p-tearsheet-scroller>
          </c4p-tearsheet-navigation-bar>
        </c4p-tearsheet-header>

        <c4p-tearsheet-body>
          <div slot="main-content">
            <!-- Button to open influencer panel on small screens -->

            <!-- Main Content -->
            <div
              id="tab-cloudFoundry"
              role="tabpanel"
              aria-labelledby="tab-all"
              hidden=""
            >
              Tab Panel 1
            </div>
            ${pe}
          </div>
        </c4p-tearsheet-body>

        <c4p-tearsheet-footer
          variant="wide"
          .actions="${[{kind:"ghost",label:"Cancel",onClick:h},{kind:"secondary",label:"Back"},{kind:"primary",label:"Submit"}]}"
        >
        </c4p-tearsheet-footer>
      </c4p-preview-tearsheet>
    `},y={render:s=>n`
      <style>
        ${p}
      </style>
       <div class="${i}story-container">
        <div class="${i}story-header"></div>
        <div id="page-content-selector" class="${i}story-content">
          <cds-button @click="${h}">Toggle tearsheet</cds-button>
        </div>
      </div>


     <c4p-preview-tearsheet variant="narrow">
     <c4p-tearsheet-header  ?hide-close-button="${!1}" >
           <!-- slotted Decorator -->
             ${A("WITH_AI_LABEL")}
      <c4p-tearsheet-header-content title="Tile to the tearsheet">
      <label slot="label"> label </label>
    ${_}
     
      
      <div slot="header-actions">
            <cds-button size="sm" kind="tertiary" 
              >Primary action ${c(F,{slot:"icon"})}</cds-button
            >
          </div>
     </c4p-tearsheet-header-content>
   
      
   
     </c4p-tearsheet-header>
      <c4p-tearsheet-influencer  >${K(!0)}</c4p-tearsheet-influencer>
       <c4p-tearsheet-body >
       <div  slot="main-content"> 
        <div class="influencerPanelTrigger">
              <cds-button
                kind="ghost"
                label="Open influencer"
                @click="${J}"
              >
                 ${c(m,{slot:"icon"})}
                </cds-button>
            </div>
            <div class="summaryPanelTrigger">
              <cds-button
                kind="ghost"
                label="Open right panel"
               @click="${W}"
               
              > ${c(m,{slot:"icon"})}</cds-button>
            </div>
        ${D}</div>
       <c4p-tearsheet-summary-content   slot="summary-content">${R}</c4p-tearsheet-summary-content>
        </c4p-tearsheet-body>
        <c4p-tearsheet-footer
         variant="narrow"
         .actions="${[{kind:"ghost",label:"Cancel",onClick:h},{kind:"secondary",label:"Back"},{kind:"primary",label:"Submit"}]}"
       >
       </c4p-tearsheet-footer>
     </<c4p-preview-tearsheet>
      
    `},j={render:()=>n` <step-tearsheet-preview></step-tearsheet-preview> `},f={render:()=>n` <step-tearsheet-preview horizontal></step-tearsheet-preview> `},w={render:()=>n`
      <style>
        ${p}
      </style>
      <stacking-tearsheet-demo tearsheet-type="wide"></stacking-tearsheet-demo>
    `},$={render:()=>n`
      <style>
        ${p}
      </style>
      <stacking-tearsheet-demo
        tearsheet-type="narrow"
      ></stacking-tearsheet-demo>
    `},k={render:()=>n`
      <style>
        ${p}
      </style>
      <stacking-tearsheet-demo tearsheet-type="mixed"></stacking-tearsheet-demo>
    `},S={args:{variant:"wide",open:!1,showSummaryContent:!0},argTypes:{variant:{control:"select",options:["wide","narrow"],description:"Tearsheet variant"},open:{control:"boolean",description:"Controls whether the tearsheet is open"},showSummaryContent:{control:"boolean",description:"Show summary content panel"}},render:s=>n`
      <style>
        ${p}
      </style>
      <div class="${i}story-container">
        <div class="${i}story-header"></div>
        <div id="page-content-selector" class="${i}story-content">
          <cds-button @click="${h}">Toggle tearsheet</cds-button>
        </div>
      </div>

      <c4p-preview-tearsheet
        variant="${s.variant}"
        ?open="${s.open}"
        prevent-close-on-click-outside
      >
        <c4p-tearsheet-header ?hide-close-button="${!1}">
          <c4p-tearsheet-header-content title="Title of the tearsheet">
            <label slot="label">Customer data</label>
            ${_}
            ${c(I,{slot:"title-start"})}

            <div slot="header-actions">
              <cds-button size="sm" kind="tertiary">
                Action 1 ${c(F,{slot:"icon"})}
              </cds-button>
            </div>
          </c4p-tearsheet-header-content>
        </c4p-tearsheet-header>

        <c4p-tearsheet-body>
          <div slot="main-content">
            ${s.showSummaryContent?n`<div class="summaryPanelTrigger">
                  <cds-button
                    kind="ghost"
                    label="Open right panel"
                    @click="${W}"
                  >
                    ${c(m,{slot:"icon"})}
                  </cds-button>
                </div>`:""}
            ${D}
          </div>
          ${s.showSummaryContent?n`<c4p-tearsheet-summary-content slot="summary-content"
                >${R}</c4p-tearsheet-summary-content
              >`:""}
        </c4p-tearsheet-body>

        <c4p-tearsheet-footer>
          <div class="default__action-buttons">
            <cds-button
              kind="ghost"
              size="${L(s.variant)}"
              @click="${h}"
            >
              Cancel
            </cds-button>
            <cds-button
              kind="secondary"
              size="${L(s.variant)}"
              @click="${()=>console.log("Back clicked")}"
            >
              Back
            </cds-button>
            <cds-button
              size="${L(s.variant)}"
              @click="${()=>console.log("Submit clicked")}"
            >
              Submit
            </cds-button>
          </div>
        </c4p-tearsheet-footer>
      </c4p-preview-tearsheet>
    `},ue={title:"Preview/Tearsheet",parameters:{docs:{page:Q}},decorators:[s=>n` <style>
          #main-content {
            padding: 0;
          }

          .tabs-demo {
            padding: 1rem;
          }
        </style>
        ${s()}`]};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'wide',
    open: false,
    decorator: 'NONE',
    hideCloseButton: false,
    disableHeaderCollapse: false,
    title: 'Title of the tearsheet',
    label: 'Label',
    showDescription: true,
    showTitleIcon: true,
    showHeaderActions: true,
    showSummaryContent: true,
    preventCloseOnClickOutside: false
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['wide', 'narrow'],
      description: 'Tearsheet variant'
    },
    open: {
      control: 'boolean',
      description: 'Controls whether the tearsheet is open'
    },
    decorator: {
      control: 'select',
      options: ['NONE', 'WITH_AI_LABEL'],
      description: 'Decorator type for the tearsheet header'
    },
    hideCloseButton: {
      control: 'boolean',
      description: 'Hide the close button in the header'
    },
    disableHeaderCollapse: {
      control: 'boolean',
      description: 'Disable header collapse/expand on scroll'
    },
    title: {
      control: 'text',
      description: 'Title of the tearsheet'
    },
    label: {
      control: 'text',
      description: 'Label above the title'
    },
    showDescription: {
      control: 'boolean',
      description: 'Show description text'
    },
    showTitleIcon: {
      control: 'boolean',
      description: 'Show icon before title'
    },
    showHeaderActions: {
      control: 'boolean',
      description: 'Show action buttons in header'
    },
    showSummaryContent: {
      control: 'boolean',
      description: 'Show summary content panel'
    },
    preventCloseOnClickOutside: {
      control: 'boolean',
      description: 'Prevent closing when clicking outside'
    }
  },
  render: args => {
    return html\`
      <style>
        \${styles}
      </style>
      <div class="\${storyPrefix}story-container">
        <div class="\${storyPrefix}story-header"></div>
        <div id="page-content-selector" class="\${storyPrefix}story-content">
          <cds-button @click="\${toggleButton}">Toggle tearsheet</cds-button>
        </div>
      </div>

      <c4p-preview-tearsheet
        variant="\${args.variant}"
        ?open="\${args.open}"
        ?prevent-close-on-click-outside="\${args.preventCloseOnClickOutside}"
      >
        <c4p-tearsheet-header
          ?hide-close-button="\${args.hideCloseButton}"
          ?disable-header-collapse="\${args.disableHeaderCollapse}"
        >
          <!-- slotted Decorator -->
          \${args.decorator !== 'NONE' ? getDecorator(args.decorator) : ''}

          <c4p-tearsheet-header-content title="\${args.title}">
            <label slot="label">\${args.label}</label>
            \${args.showDescription ? description : ''}
            \${args.showTitleIcon ? iconLoader(Bee, {
      slot: 'title-start'
    }) : ''}
            \${args.showHeaderActions ? html\`<div slot="header-actions">
                  <cds-button size="sm" kind="tertiary">
                    Primary action \${iconLoader(Add16, {
      slot: 'icon'
    })}
                  </cds-button>
                </div>\` : ''}
          </c4p-tearsheet-header-content>
        </c4p-tearsheet-header>

        <c4p-tearsheet-body>
          <div slot="main-content">
            \${args.showSummaryContent ? html\`<div class="summaryPanelTrigger">
                  <cds-button
                    kind="ghost"
                    label="Open right panel"
                    @click="\${toggleSummaryPanel}"
                  >
                    \${iconLoader(RightPanelClose32, {
      slot: 'icon'
    })}
                  </cds-button>
                </div>\` : ''}
            \${dummyContent}
          </div>
          \${args.showSummaryContent ? html\`<c4p-tearsheet-summary-content slot="summary-content"
                >\${summaryContent}</c4p-tearsheet-summary-content
              >\` : ''}
        </c4p-tearsheet-body>
        <c4p-tearsheet-footer
          variant="\${args.variant}"
          .actions="\${[{
      kind: 'ghost',
      label: 'Cancel',
      onClick: toggleButton
    }, {
      kind: 'secondary',
      label: 'Back'
    }, {
      kind: 'primary',
      label: 'Submit'
    }]}"
        >
        </c4p-tearsheet-footer>
      </c4p-preview-tearsheet>
    \`;
  }
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <style>
        \${styles}
      </style>
      <div class="\${storyPrefix}story-container">
        <div class="\${storyPrefix}story-header"></div>
        <div id="page-content-selector" class="\${storyPrefix}story-content">
          <cds-button @click="\${toggleButton}">Open Tearsheet</cds-button>
        </div>
      </div>

      <c4p-preview-tearsheet variant="wide">
        <c4p-tearsheet-header ?hide-close-button="\${false}">
          <!-- Decorator -->
          \${getDecorator('WITH_AI_LABEL')}

          <c4p-tearsheet-header-content title="Title of the tearsheet">
            <label slot="label">Label</label>
            \${description}
            \${iconLoader(Bee, {
      slot: 'title-start'
    })}

            <div slot="header-actions">
              <cds-button size="sm" kind="tertiary">Action 1</cds-button>
            </div>
          </c4p-tearsheet-header-content>
        </c4p-tearsheet-header>

        <!-- Influencer with Progress Indicator -->
        <c4p-tearsheet-influencer>
          \${progressIndicator(true)}
        </c4p-tearsheet-influencer>

        <c4p-tearsheet-body>
          <div slot="main-content">
            <!-- Button to open influencer panel on small screens -->
            <div class="influencerPanelTrigger">
              <cds-button
                kind="ghost"
                tooltip-text="Open Influencer"
                tooltip-position="right"
                @click="\${toggleInfluencerPanel}"
              >
                \${iconLoader(RightPanelClose32, {
      slot: 'icon'
    })}
              </cds-button>
            </div>

            <!-- Main Content -->
            \${dummyContent}
          </div>
        </c4p-tearsheet-body>

        <c4p-tearsheet-footer
          variant="wide"
          .actions="\${[{
      kind: 'ghost',
      label: 'Cancel',
      onClick: toggleButton
    }, {
      kind: 'secondary',
      label: 'Back'
    }, {
      kind: 'primary',
      label: 'Submit'
    }]}"
        >
        </c4p-tearsheet-footer>
      </c4p-preview-tearsheet>
    \`;
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <style>
        \${styles}
      </style>
      <div class="\${storyPrefix}story-container">
        <div class="\${storyPrefix}story-header"></div>
        <div id="page-content-selector" class="\${storyPrefix}story-content">
          <cds-button @click="\${toggleButton}">Open Tearsheet</cds-button>
        </div>
      </div>

      <c4p-preview-tearsheet variant="wide">
        <c4p-tearsheet-header ?hide-close-button="\${false}">
          <!-- Decorator -->
          \${getDecorator('WITH_AI_LABEL')}

          <c4p-tearsheet-header-content title="Title of the tearsheet">
            <label slot="label">Label</label>
            \${description}
            \${iconLoader(Bee, {
      slot: 'title-start'
    })}

            <div slot="header-actions">
              <cds-button size="sm" kind="tertiary">Action 1</cds-button>
            </div>
          </c4p-tearsheet-header-content>
          <c4p-tearsheet-navigation-bar>
            \${tabs}
            <c4p-tearsheet-scroller slot="scroller"></c4p-tearsheet-scroller>
          </c4p-tearsheet-navigation-bar>
        </c4p-tearsheet-header>

        <c4p-tearsheet-body>
          <div slot="main-content">
            <!-- Button to open influencer panel on small screens -->

            <!-- Main Content -->
            <div
              id="tab-cloudFoundry"
              role="tabpanel"
              aria-labelledby="tab-all"
              hidden=""
            >
              Tab Panel 1
            </div>
            \${tabPanel}
          </div>
        </c4p-tearsheet-body>

        <c4p-tearsheet-footer
          variant="wide"
          .actions="\${[{
      kind: 'ghost',
      label: 'Cancel',
      onClick: toggleButton
    }, {
      kind: 'secondary',
      label: 'Back'
    }, {
      kind: 'primary',
      label: 'Submit'
    }]}"
        >
        </c4p-tearsheet-footer>
      </c4p-preview-tearsheet>
    \`;
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <style>
        \${styles}
      </style>
       <div class="\${storyPrefix}story-container">
        <div class="\${storyPrefix}story-header"></div>
        <div id="page-content-selector" class="\${storyPrefix}story-content">
          <cds-button @click="\${toggleButton}">Toggle tearsheet</cds-button>
        </div>
      </div>


     <c4p-preview-tearsheet variant="narrow">
     <c4p-tearsheet-header  ?hide-close-button="\${false}" >
           <!-- slotted Decorator -->
             \${getDecorator('WITH_AI_LABEL')}
      <c4p-tearsheet-header-content title="Tile to the tearsheet">
      <label slot="label"> label </label>
    \${description}
     
      
      <div slot="header-actions">
            <cds-button size="sm" kind="tertiary" 
              >Primary action \${iconLoader(Add16, {
      slot: 'icon'
    })}</cds-button
            >
          </div>
     </c4p-tearsheet-header-content>
   
      
   
     </c4p-tearsheet-header>
      <c4p-tearsheet-influencer  >\${progressIndicator(true)}</c4p-tearsheet-influencer>
       <c4p-tearsheet-body >
       <div  slot="main-content"> 
        <div class="influencerPanelTrigger">
              <cds-button
                kind="ghost"
                label="Open influencer"
                @click="\${toggleInfluencerPanel}"
              >
                 \${iconLoader(RightPanelClose32, {
      slot: 'icon'
    })}
                </cds-button>
            </div>
            <div class="summaryPanelTrigger">
              <cds-button
                kind="ghost"
                label="Open right panel"
               @click="\${toggleSummaryPanel}"
               
              > \${iconLoader(RightPanelClose32, {
      slot: 'icon'
    })}</cds-button>
            </div>
        \${dummyContent}</div>
       <c4p-tearsheet-summary-content   slot="summary-content">\${summaryContent}</c4p-tearsheet-summary-content>
        </c4p-tearsheet-body>
        <c4p-tearsheet-footer
         variant="narrow"
         .actions="\${[{
      kind: 'ghost',
      label: 'Cancel',
      onClick: toggleButton
    }, {
      kind: 'secondary',
      label: 'Back'
    }, {
      kind: 'primary',
      label: 'Submit'
    }]}"
       >
       </c4p-tearsheet-footer>
     </<c4p-preview-tearsheet>
      
    \`;
  }
}`,...y.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\` <step-tearsheet-preview></step-tearsheet-preview> \`;
  }
}`,...j.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\` <step-tearsheet-preview horizontal></step-tearsheet-preview> \`;
  }
}`,...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <style>
        \${styles}
      </style>
      <stacking-tearsheet-demo tearsheet-type="wide"></stacking-tearsheet-demo>
    \`;
  }
}`,...w.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <style>
        \${styles}
      </style>
      <stacking-tearsheet-demo
        tearsheet-type="narrow"
      ></stacking-tearsheet-demo>
    \`;
  }
}`,...$.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <style>
        \${styles}
      </style>
      <stacking-tearsheet-demo tearsheet-type="mixed"></stacking-tearsheet-demo>
    \`;
  }
}`,...k.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'wide',
    open: false,
    showSummaryContent: true
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['wide', 'narrow'],
      description: 'Tearsheet variant'
    },
    open: {
      control: 'boolean',
      description: 'Controls whether the tearsheet is open'
    },
    showSummaryContent: {
      control: 'boolean',
      description: 'Show summary content panel'
    }
  },
  render: args => {
    return html\`
      <style>
        \${styles}
      </style>
      <div class="\${storyPrefix}story-container">
        <div class="\${storyPrefix}story-header"></div>
        <div id="page-content-selector" class="\${storyPrefix}story-content">
          <cds-button @click="\${toggleButton}">Toggle tearsheet</cds-button>
        </div>
      </div>

      <c4p-preview-tearsheet
        variant="\${args.variant}"
        ?open="\${args.open}"
        prevent-close-on-click-outside
      >
        <c4p-tearsheet-header ?hide-close-button="\${false}">
          <c4p-tearsheet-header-content title="Title of the tearsheet">
            <label slot="label">Customer data</label>
            \${description}
            \${iconLoader(Bee, {
      slot: 'title-start'
    })}

            <div slot="header-actions">
              <cds-button size="sm" kind="tertiary">
                Action 1 \${iconLoader(Add16, {
      slot: 'icon'
    })}
              </cds-button>
            </div>
          </c4p-tearsheet-header-content>
        </c4p-tearsheet-header>

        <c4p-tearsheet-body>
          <div slot="main-content">
            \${args.showSummaryContent ? html\`<div class="summaryPanelTrigger">
                  <cds-button
                    kind="ghost"
                    label="Open right panel"
                    @click="\${toggleSummaryPanel}"
                  >
                    \${iconLoader(RightPanelClose32, {
      slot: 'icon'
    })}
                  </cds-button>
                </div>\` : ''}
            \${dummyContent}
          </div>
          \${args.showSummaryContent ? html\`<c4p-tearsheet-summary-content slot="summary-content"
                >\${summaryContent}</c4p-tearsheet-summary-content
              >\` : ''}
        </c4p-tearsheet-body>

        <c4p-tearsheet-footer>
          <div class="default__action-buttons">
            <cds-button
              kind="ghost"
              size="\${getButtonSize(args.variant)}"
              @click="\${toggleButton}"
            >
              Cancel
            </cds-button>
            <cds-button
              kind="secondary"
              size="\${getButtonSize(args.variant)}"
              @click="\${() => console.log('Back clicked')}"
            >
              Back
            </cds-button>
            <cds-button
              size="\${getButtonSize(args.variant)}"
              @click="\${() => console.log('Submit clicked')}"
            >
              Submit
            </cds-button>
          </div>
        </c4p-tearsheet-footer>
      </c4p-preview-tearsheet>
    \`;
  }
}`,...S.parameters?.docs?.source}}};const be=["Default","WithInfluencer","WithTabs","narrowTearsheet","withSteps","withStepsAndHorizontalProgressIndicator","StackingTearsheets","StackingNarrowTearsheets","StackingWithDifferentSizes","WithCustomFooterActions"],me=Object.freeze(Object.defineProperty({__proto__:null,Default:v,StackingNarrowTearsheets:$,StackingTearsheets:w,StackingWithDifferentSizes:k,WithCustomFooterActions:S,WithInfluencer:g,WithTabs:x,__namedExportsOrder:be,default:ue,narrowTearsheet:y,withSteps:j,withStepsAndHorizontalProgressIndicator:f},Symbol.toStringTag,{value:"Module"}));function q(s){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...G(),...s.components};return t.jsxs(t.Fragment,{children:[t.jsx(V,{of:me}),`
`,t.jsx(e.h1,{id:"tearsheet-new-composable",children:"Tearsheet (New Composable)"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"💡 This is the new composable tearsheet component with enhanced features including stacking support, collapsible headers, responsive and improved composability."}),`
`]}),`
`,t.jsx(e.p,{children:"A tearsheet is a mostly full-screen type of dialog that keeps users in-context and focused by bringing actionable content front and center while revealing parts of the UI behind it."}),`
`,t.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,t.jsx(e.p,{children:"The next-generation tearsheet uses a compound component pattern with the following sub-components:"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:t.jsx(e.code,{children:"c4p-preview-tearsheet"})})," - Main container"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:t.jsx(e.code,{children:"c4p-tearsheet-header"})})," - Header section"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:t.jsx(e.code,{children:"c4p-tearsheet-header-content"})})," - Header content area"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:t.jsx(e.code,{children:"c4p-tearsheet-navigation-bar"})})," - Rendered at the bottom of header that can render tabs"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:t.jsx(e.code,{children:"c4p-tearsheet-scroller"})})," - Can be used inside navigation bar as a trigger to collapse/ expand header"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:t.jsx(e.code,{children:"c4p-tearsheet-body"})})," - Main content area"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:t.jsx(e.code,{children:"c4p-tearsheet-influencer"})})," - Left-side panel to render any influencer."]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:t.jsx(e.code,{children:"c4p-tearsheet-footer"})})," - Footer with actions"]}),`
`]}),`
`,t.jsx(e.h2,{id:"available-slots",children:"Available Slots"}),`
`,t.jsxs(e.h3,{id:"main-tearsheet-c4p-preview-tearsheet",children:["Main Tearsheet (",t.jsx(e.code,{children:"c4p-preview-tearsheet"}),")"]}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{children:"Slot"}),t.jsx(e.th,{children:"Component"}),t.jsx(e.th,{children:"Description"})]})}),t.jsxs(e.tbody,{children:[t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"header"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"c4p-tearsheet-header"})}),t.jsx(e.td,{children:"Header section with title and actions"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"influencer"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"c4p-tearsheet-influencer"})}),t.jsx(e.td,{children:"Left-side panel for contextual info"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"body"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"c4p-tearsheet-body"})}),t.jsx(e.td,{children:"Main content area"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"footer"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"c4p-tearsheet-footer"})}),t.jsx(e.td,{children:"Footer with action buttons"})]})]})]}),`
`,t.jsxs(e.h3,{id:"header-c4p-tearsheet-header",children:["Header (",t.jsx(e.code,{children:"c4p-tearsheet-header"}),")"]}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{children:"Slot"}),t.jsx(e.th,{children:"Component"}),t.jsx(e.th,{children:"Description"})]})}),t.jsxs(e.tbody,{children:[t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"header-content"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"c4p-tearsheet-header-content"})}),t.jsx(e.td,{children:"Main header content (title, description)"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"header-navigation"})}),t.jsx(e.td,{children:"Any"}),t.jsx(e.td,{children:"Navigation tabs or breadcrumbs"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"header-actions"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"cds-button"})}),t.jsx(e.td,{children:"Action buttons (e.g., settings, delete)"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"decorator"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"cds-ai-label"})}),t.jsx(e.td,{children:"AI label or decorative elements"})]})]})]}),`
`,t.jsxs(e.h3,{id:"header-content-c4p-tearsheet-header-content",children:["Header Content (",t.jsx(e.code,{children:"c4p-tearsheet-header-content"}),")"]}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{children:"Slot"}),t.jsx(e.th,{children:"Component"}),t.jsx(e.th,{children:"Description"})]})}),t.jsxs(e.tbody,{children:[t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"label"})}),t.jsx(e.td,{children:"Any"}),t.jsx(e.td,{children:"Optional label text above title"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"title-start"})}),t.jsx(e.td,{children:"Any"}),t.jsx(e.td,{children:"Content before title (e.g., icons)"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"title-end"})}),t.jsx(e.td,{children:"Any"}),t.jsx(e.td,{children:"Content after title (e.g., badges)"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"description"})}),t.jsx(e.td,{children:"Any"}),t.jsx(e.td,{children:"Custom description content"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"decorator"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"cds-ai-label"})}),t.jsx(e.td,{children:"AI label or decorative elements"})]})]})]}),`
`,t.jsxs(e.h3,{id:"body-c4p-tearsheet-body",children:["Body (",t.jsx(e.code,{children:"c4p-tearsheet-body"}),")"]}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{children:"Slot"}),t.jsx(e.th,{children:"Component"}),t.jsx(e.th,{children:"Description"})]})}),t.jsxs(e.tbody,{children:[t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"main-content"})}),t.jsx(e.td,{children:"Any"}),t.jsx(e.td,{children:"Primary content area"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"summary-content"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"c4p-tearsheet-summary-content"})}),t.jsx(e.td,{children:"Right-side panel for summary"})]})]})]}),`
`,t.jsx(e.h2,{id:"key-features",children:"Key Features"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:["✅ ",t.jsx(e.strong,{children:"Stacking Support"})," - Multiple tearsheets can stack on top of each other"]}),`
`,t.jsxs(e.li,{children:["✅ ",t.jsx(e.strong,{children:"Collapsible Header"})," - Header automatically collapses on scroll"]}),`
`,t.jsxs(e.li,{children:["✅ ",t.jsx(e.strong,{children:"Responsive Layout"})," - Adapts to different screen sizes"]}),`
`,t.jsxs(e.li,{children:["✅ ",t.jsx(e.strong,{children:"Flexible Layout"})," - Influencer and summary content panels transform to side panels on small screens and narrow tearsheet"]}),`
`]}),`
`,t.jsx(e.h2,{id:"getting-started",children:"Getting Started"}),`
`,t.jsx(e.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import '@carbon/ibm-products-web-components/es/components/tearsheet-preview/index.js';
// Import Carbon components for content
import '@carbon/web-components/es/components/text-input/index.js';
import '@carbon/web-components/es/components/textarea/index.js';
import '@carbon/web-components/es/components/button/index.js';
`})}),`
`,t.jsx(e.h3,{id:"basic-example",children:"Basic Example"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<c4p-preview-tearsheet open>
  <c4p-tearsheet-header slot="header">
    <c4p-tearsheet-header-content 
      slot="header-content"
      title="Create resource">
      <div slot="description"> description</div>
    </c4p-tearsheet-header-content>
  </c4p-tearsheet-header>

  <c4p-tearsheet-body slot="body">
    <div slot="main-content">
      <cds-text-input label="Resource name"></cds-text-input>
      <cds-textarea label="Description"></cds-textarea>
    </div>
  </c4p-tearsheet-body>

  <c4p-tearsheet-footer slot="footer">
    <cds-button  kind="secondary">Cancel</cds-button>
    <cds-button  kind="primary">Create</cds-button>
  </c4p-tearsheet-footer>
</c4p-preview-tearsheet>
`})}),`
`,t.jsx(e.h2,{id:"with-influencer-and-summary-content",children:"With Influencer and Summary Content"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<c4p-preview-tearsheet open variant="wide">
  <c4p-tearsheet-header slot="header">
    <c4p-tearsheet-header-content 
      slot="header-content"
      title="Resource details">
    </c4p-tearsheet-header-content>
  </c4p-tearsheet-header>
  <!-- Left panel -->
    <c4p-tearsheet-influencer slot="influencer">
      <h6>Quick info</h6>
      <p>Additional context here</p>
    </c4p-tearsheet-influencer>
  <c4p-tearsheet-body slot="body">
  

    <!-- Main content -->
    <div slot="main-content">
      <h5>Main content area</h5>
      <!-- Your content -->
    </div>

    <!-- Right panel -->
    <c4p-tearsheet-summary-content slot="summary-content">
      <h6>Summary</h6>
      <p>Key details</p>
    </c4p-tearsheet-summary-content>
  </c4p-tearsheet-body>

  <c4p-tearsheet-footer slot="footer">
    <cds-button slot="actions">Save</cds-button>
  </c4p-tearsheet-footer>
</c4p-preview-tearsheet>
`})}),`
`,t.jsx(e.h2,{id:"stacking-tearsheets",children:"Stacking Tearsheets"}),`
`,t.jsxs(e.p,{children:["To enable stacking for multiple tearsheets, wrap them in a ",t.jsx(e.code,{children:"<c4p-tearsheet-stack>"})," component. This opt-in approach provides better performance and explicit control over which tearsheets participate in stacking, similar to React's ",t.jsx(e.code,{children:"StackProvider"}),". The ",t.jsx(e.code,{children:"stack-step-size"})," attribute controls the visual offset between stacked tearsheets (",t.jsx(e.code,{children:"sm"}),", ",t.jsx(e.code,{children:"md"}),", or ",t.jsx(e.code,{children:"lg"}),")."]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<c4p-tearsheet-stack stack-step-size="lg">
  <!-- First tearsheet -->
  <c4p-preview-tearsheet id="tearsheet-1" open>
    <c4p-tearsheet-header slot="header">
      <cds-button slot="header-actions" @click="\${openSecondTearsheet}">
        Open details
      </cds-button>
    </c4p-tearsheet-header>
    <!-- ... -->
  </c4p-preview-tearsheet>

  <!-- Second tearsheet - will stack on top -->
  <c4p-preview-tearsheet id="tearsheet-2" open>
    <!-- ... -->
  </c4p-preview-tearsheet>
</c4p-tearsheet-stack>
`})}),`
`,t.jsx(e.h2,{id:"with-ai-label-decorator",children:"With AI Label Decorator"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<c4p-tearsheet-header-content 
  slot="header-content"
  title="AI-powered analysis">
  <cds-ai-label slot="decorator" size="xs">
    <div slot="body-text">
      <p>AI Explained</p>
      <h1>84%</h1>
      <p>Confidence score</p>
    </div>
  </cds-ai-label>
</c4p-tearsheet-header-content>
`})}),`
`,t.jsx(e.h2,{id:"collapsible-header",children:"Collapsible Header"}),`
`,t.jsx(e.p,{children:"The header automatically collapses when scrolling in the main content area. To disable this behavior:"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<c4p-tearsheet-header slot="header" disable-header-collapse>
  <!-- Header will not collapse on scroll -->
</c4p-tearsheet-header>
`})}),`
`,t.jsx(e.h2,{id:"custom-widths",children:"Custom Widths"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<c4p-preview-tearsheet 
  influencer-width="320px"
  summary-content-width="280px"
  vertical-gap="4rem">
</c4p-preview-tearsheet>
`})}),`
`,t.jsx(e.h2,{id:"footer-actions",children:"Footer Actions"}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.code,{children:"c4p-tearsheet-footer"})," component supports two approaches for rendering action buttons:"]}),`
`,t.jsx(e.p,{children:t.jsxs(e.strong,{children:["Using the ",t.jsx(e.code,{children:".actions"})," property (recommended):"]})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<c4p-tearsheet-footer
  slot="footer"
  .actions="\${[
    {
      kind: 'ghost',
      label: 'Cancel',
      onClick: () => setOpen(false),
    },
    {
      kind: 'secondary',
      label: 'Back',
    },
    {
      kind: 'primary',
      label: 'Submit',
    },
  ]}">
</c4p-tearsheet-footer>
`})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"Using custom buttons:"})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<c4p-tearsheet-footer slot="footer">
  <cds-button kind="ghost">Cancel</cds-button>
  <cds-button kind="secondary">Back</cds-button>
  <cds-button kind="primary">Submit</cds-button>
</c4p-tearsheet-footer>
`})}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.code,{children:".actions"})," property automatically handles button sizing based on the tearsheet variant and screen size, while custom buttons give you full control over the footer layout."]}),`
`,t.jsx(e.h2,{id:"migration-from-legacy-tearsheet",children:"Migration from Legacy Tearsheet"}),`
`,t.jsx(e.h3,{id:"migration-example",children:"Migration Example"}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"Before (Legacy):"})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<c4p-tearsheet 
  open 
  label="Create resource"
  description="Configure settings">
  <div>Content</div>
</c4p-tearsheet>
`})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"After (Next Gen):"})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<c4p-preview-tearsheet open>
  <c4p-tearsheet-header slot="header">
    <c4p-tearsheet-header-content 
      slot="header-content"
      title="Create resource"
      description="Configure settings">
    </c4p-tearsheet-header-content>
  </c4p-tearsheet-header>
  
  <c4p-tearsheet-body slot="body">
    <div slot="main-content">Content</div>
  </c4p-tearsheet-body>
</c4p-preview-tearsheet>
`})}),`
`,t.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,t.jsxs(e.h3,{id:"c4p-preview-tearsheet-attributes-and-properties",children:[t.jsx(e.code,{children:"<c4p-preview-tearsheet>"})," attributes and properties"]}),`
`,t.jsxs(e.p,{children:["Note: For ",t.jsx(e.code,{children:"boolean"})," attributes, ",t.jsx(e.code,{children:"true"})," means simply setting the attribute (e.g. ",t.jsx(e.code,{children:"<c4p-preview-tearsheet open>"}),") and ",t.jsx(e.code,{children:"false"})," means not setting the attribute."]}),`
`,t.jsx(O,{of:"c4p-preview-tearsheet"}),`
`,t.jsxs(e.h3,{id:"c4p-tearsheet-header-attributes-and-properties",children:[t.jsx(e.code,{children:"<c4p-tearsheet-header>"})," attributes and properties"]}),`
`,t.jsx(O,{of:"c4p-tearsheet-header"}),`
`,t.jsxs(e.h3,{id:"c4p-tearsheet-header-content-attributes-and-properties",children:[t.jsx(e.code,{children:"<c4p-tearsheet-header-content>"})," attributes and properties"]}),`
`,t.jsx(O,{of:"c4p-tearsheet-header-content"}),`
`,t.jsx(e.h2,{id:"events",children:"Events"}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{children:"Event"}),t.jsx(e.th,{children:"Detail"}),t.jsx(e.th,{children:"Description"})]})}),t.jsxs(e.tbody,{children:[t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"c4p-preview-tearsheet-beingclosed"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"{ triggeredBy: Element }"})}),t.jsx(e.td,{children:"Fired before tearsheet closes"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"c4p-preview-tearsheet-closed"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"{ triggeredBy: Element }"})}),t.jsx(e.td,{children:"Fired after tearsheet closes"})]})]})]}),`
`,t.jsx(e.h2,{id:"slots-reference",children:"Slots Reference"}),`
`,t.jsx(e.h3,{id:"main-tearsheet-slots",children:"Main Tearsheet Slots"}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{children:"Slot"}),t.jsx(e.th,{children:"Description"})]})}),t.jsxs(e.tbody,{children:[t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"header"})}),t.jsxs(e.td,{children:["Header section (use ",t.jsx(e.code,{children:"c4p-tearsheet-header"}),")"]})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"influencer"})}),t.jsxs(e.td,{children:["Left-side panel (use ",t.jsx(e.code,{children:"c4p-tearsheet-influencer"}),")"]})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"body"})}),t.jsxs(e.td,{children:["Main content area (use ",t.jsx(e.code,{children:"c4p-tearsheet-body"}),")"]})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"footer"})}),t.jsxs(e.td,{children:["Footer with actions (use ",t.jsx(e.code,{children:"c4p-tearsheet-footer"}),")"]})]})]})]}),`
`,t.jsx(e.h3,{id:"header-slots",children:"Header Slots"}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{children:"Slot"}),t.jsx(e.th,{children:"Description"})]})}),t.jsxs(e.tbody,{children:[t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"header-content"})}),t.jsxs(e.td,{children:["Header content area (use ",t.jsx(e.code,{children:"c4p-tearsheet-header-content"}),")"]})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"header-navigation"})}),t.jsx(e.td,{children:"Navigation tabs or breadcrumbs"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"header-actions"})}),t.jsx(e.td,{children:"Action buttons in header"})]})]})]}),`
`,t.jsx(e.h3,{id:"header-content-slots",children:"Header Content Slots"}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{children:"Slot"}),t.jsx(e.th,{children:"Description"})]})}),t.jsxs(e.tbody,{children:[t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"title-start"})}),t.jsx(e.td,{children:"Content before title (e.g., icons)"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"title-end"})}),t.jsx(e.td,{children:"Content after title (e.g., badges)"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"description"})}),t.jsx(e.td,{children:"Custom description content"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"decorator"})}),t.jsx(e.td,{children:"AI label or other decorative elements"})]})]})]}),`
`,t.jsx(e.h3,{id:"body-slots",children:"Body Slots"}),`
`,t.jsx(e.table,{children:t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{children:"Slot"}),t.jsx(e.th,{children:"Description"})]})})}),`
`,t.jsxs(e.p,{children:["| ",t.jsx(e.code,{children:"main-content"}),` | Primary content area |
| `,t.jsx(e.code,{children:"summary-content"})," | Right-side panel (use ",t.jsx(e.code,{children:"c4p-tearsheet-summary-content"}),") |"]}),`
`,t.jsx(e.h3,{id:"footer-slots",children:"Footer Slots"}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{children:"Slot"}),t.jsx(e.th,{children:"Description"})]})}),t.jsx(e.tbody,{children:t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"actions"})}),t.jsx(e.td,{children:"Action buttons (typically Cancel, Submit)"})]})})]})]})}function Q(s={}){const{wrapper:e}={...G(),...s.components};return e?t.jsx(e,{...s,children:t.jsx(q,{...s})}):q(s)}const Ee=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"}));export{me as T,Ee as t};
