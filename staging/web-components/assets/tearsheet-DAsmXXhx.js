import{j as t,M as Q,A as z}from"./blocks-BCIBWqJE.js";import{useMDXComponents as E}from"./index-mzAhggzd.js";import{k as U,r as M,l as T,E as I,x as s,n as F,t as W,y as V}from"./iframe-f5hh7K5H.js";import{s as L}from"./tearsheet-summary-content-Dn1JxF3x.js";import{r as C}from"./state-bBpbQHcL.js";import{e as Y}from"./index-jZ7v_nzm.js";import{i as o}from"./icon-loader-CvslT9ia.js";import{_ as S,a as A,b as R}from"./32-gWGFBCOY.js";import"./progress-step-CswK7HM7.js";import"./text-input-k5aLrG0W.js";import"./text-input-skeleton-C0QyEyBj.js";import"./button-XM3OYt4g.js";import"./button-skeleton-CfNwpw03.js";import{S as Z}from"./step-group-3hvCYqwR.js";import{_ as D}from"./20-p-8MYGqG.js";import"./tab-skeleton-CM0CBN_9.js";import"./progress-bar-tMq3dO02.js";import"./textarea-skeleton-EzwF5zC3.js";import"./slug-action-button-PetmFxYN.js";import"./dropdown-skeleton-8h3LTVPV.js";import"./toast-notification-D5L46SgU.js";import"./actionable-notification-button-g-BB3Tb1.js";import"./callout-notification-D00AF0lL.js";const ee="c4p-tearsheet-influencer,div[slot=main-content],c4p-tearsheet-summary-content{padding-block:2rem}.summaryPanelTrigger{position:absolute;inset-block-start:0;inset-inline-end:0}.influencerPanelTrigger{position:absolute;inset-block-start:0;inset-inline-start:0}@media(min-width:66rem)and (max-width:82rem){c4p-preview-tearsheet:not([variant=narrow]) .summaryPanelTrigger,c4p-preview-tearsheet:not([variant=narrow]) .influencerPanelTrigger{display:none}}@media(min-width:42rem)and (max-width:66rem){c4p-preview-tearsheet:not([variant=narrow]) .summaryPanelTrigger,c4p-preview-tearsheet:not([variant=narrow]) .influencerPanelTrigger{display:none}}@media(min-width:82rem)and (max-width:99rem){c4p-preview-tearsheet:not([variant=narrow]) .summaryPanelTrigger,c4p-preview-tearsheet:not([variant=narrow]) .influencerPanelTrigger{display:none}}@media(min-width:99rem){c4p-preview-tearsheet:not([variant=narrow]) .summaryPanelTrigger,c4p-preview-tearsheet:not([variant=narrow]) .influencerPanelTrigger{display:none}}.summaryPanelHeading{font-size:var(--cds-heading-03-font-size,1.25rem);font-weight:var(--cds-heading-03-font-weight,400);line-height:var(--cds-heading-03-line-height,1.4);letter-spacing:var(--cds-heading-03-letter-spacing,0)}.stackButtons{z-index:9999;gap:.125rem;display:flex;position:absolute;inset-block-start:0;inset-inline-start:0}@media(min-width:20rem)and (max-width:42rem){.stackButtons{display:none}}.smallScreenButton{z-index:9999;gap:.125rem;display:flex;position:absolute;inset-block-start:0;inset-inline-start:1rem}@media(min-width:66rem)and (max-width:82rem){.smallScreenButton{display:none}}@media(min-width:42rem)and (max-width:66rem){.smallScreenButton{display:none}}@media(min-width:82rem)and (max-width:99rem){.smallScreenButton{display:none}}@media(min-width:99rem){.smallScreenButton{display:none}}.default__action-buttons{grid-template-columns:repeat(6,1fr);grid-auto-rows:minmax(auto,auto);display:grid}.default__action-buttons>cds-button{inline-size:100%;max-inline-size:none}.default__action-buttons>cds-button:first-child{grid-column:span 4}",l=U(ee);var te=Object.defineProperty,ne=Object.getOwnPropertyDescriptor,O=(n,e,r,d)=>{for(var a=d>1?void 0:d?ne(e,r):e,p=n.length-1,u;p>=0;p--)(u=n[p])&&(a=(d?u(e,r,a):u(a))||a);return d&&a&&te(e,r,a),a};let k=class extends Y(M){constructor(){super(...arguments),this.horizontal=!1,this._open=!1,this._stepInfo=new Z}connectedCallback(){super.connectedCallback(),this._stepInfo.updateTotalStepCount=3}_onButtonClick(){this._open=!0}_handleCancelButton(){this._open=!1,this._stepInfo.reset()}_handleBackButton(){const{currentStep:n}=this._stepInfo.data;if(n!==0)return this._stepInfo.handlePrevious()}_handleNextButton(){const{currentStep:n,totalSteps:e}=this._stepInfo.data;if(n+1===e){console.log("Form submitted:",this._stepInfo.data.formState),this._handleCancelButton();return}return this._stepInfo.handleNext()}_handleEmailInput(n){const e=structuredClone(this._stepInfo.data.formState);e.email=n.target.value,this._stepInfo.updateFormState=e}_handleCityInput(n){const e=structuredClone(this._stepInfo.data.formState);e.city=n.target.value,this._stepInfo.updateFormState=e}_handleStateInput(n){const e=structuredClone(this._stepInfo.data.formState);e.state=n.target.value,this._stepInfo.updateFormState=e}_toggleInfluencerPanel(){const n=this.shadowRoot?.querySelector(`${T}-tearsheet-influencer`);n&&n.toggleAttribute("influencer-panel-open")}_getStepContent(){const{formState:n,currentStep:e}=this._stepInfo.data,r=n;switch(e){case 0:return s`
          <div>
            <cds-text-input
              label="Email"
              id="step-email-input"
              value=${r.email||""}
              @input="${this._handleEmailInput}"
            ></cds-text-input>
          </div>
        `;case 1:return s`
          <div style="display: flex; gap: 1rem;">
            <cds-text-input
              label="City"
              id="step-city-input"
              value=${r.city||""}
              @input="${this._handleCityInput}"
            ></cds-text-input>
            <cds-text-input
              label="State"
              id="step-state-input"
              value=${r.state||""}
              @input="${this._handleStateInput}"
            ></cds-text-input>
          </div>
        `;case 2:return s`
          <div>
            <h4>Review your information</h4>
            <pre>${JSON.stringify(n,null,2)}</pre>
          </div>
        `;default:return I}}_getProgressStepState(n){const{currentStep:e}=this._stepInfo.data;return n<e?"complete":n===e?"current":"incomplete"}render(){const{currentStep:n,totalSteps:e}=this._stepInfo.data;return s`
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
          ${this.horizontal?s`<cds-progress-indicator>
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
              </cds-progress-indicator>`:I}
        </c4p-tearsheet-header>

        <!-- Influencer with Progress Indicator -->
        ${this.horizontal?I:s` <c4p-tearsheet-influencer>
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
                ${o(S,{slot:"icon"})}
              </cds-button>
            </div>

            <!-- Step Content -->
            ${this._getStepContent()}
          </div>
        </c4p-tearsheet-body>

        <c4p-tearsheet-footer>
          <div class="default__action-buttons">
            <cds-button
              kind="ghost"
              size="xl"
              @click="${this._handleCancelButton}"
            >
              Cancel
            </cds-button>
            <cds-button
              kind="secondary"
              size="xl"
              ?disabled="${n===0}"
              @click="${this._handleBackButton}"
            >
              Back
            </cds-button>
            <cds-button size="xl" @click="${this._handleNextButton}">
              ${n<e-1?"Next":"Submit"}
            </cds-button>
          </div>
        </c4p-tearsheet-footer>
      </c4p-preview-tearsheet>
    `}};k.styles=l;O([F({type:Boolean})],k.prototype,"horizontal",2);O([C()],k.prototype,"_open",2);k=O([W("step-tearsheet-preview")],k);var se=Object.defineProperty,re=Object.getOwnPropertyDescriptor,_=(n,e,r,d)=>{for(var a=d>1?void 0:d?re(e,r):e,p=n.length-1,u;p>=0;p--)(u=n[p])&&(a=(d?u(e,r,a):u(a))||a);return d&&a&&se(e,r,a),a};let b=class extends M{constructor(){super(...arguments),this.tearsheetType="wide",this._open1=!1,this._open2=!1,this._open3=!1}connectedCallback(){super.connectedCallback(),L.setStackStepSize("lg")}disconnectedCallback(){super.disconnectedCallback(),L.reset()}_toggleTearsheet1(){this._open1=!this._open1}_toggleTearsheet2(){this._open2=!this._open2}_toggleTearsheet3(){this._open3=!this._open3}render(){const n=s`
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
    `,e=s`
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
    `,r=d=>this.tearsheetType==="mixed"?d%2===0?"narrow":"wide":this.tearsheetType==="wide"?"wide":this.tearsheetType==="narrow"?"narrow":"wide";return s`
      <div class="stackButtons">
        <cds-button @click="${this._toggleTearsheet1}">
          Toggle Tearsheet 1
        </cds-button>
        <cds-button @click="${this._toggleTearsheet2}">
          Toggle Tearsheet 2
        </cds-button>
        <cds-button @click="${this._toggleTearsheet3}">
          Toggle Tearsheet 3
        </cds-button>
      </div>
      <div class="smallScreenButton">
        <cds-button
          kind="ghost"
          @click="${this._toggleTearsheet1}"
          aria-label="Toggle Tearsheet 1"
          tooltip-text="Toggle Tearsheet 1"
          tooltip-position="right"
        >
          ${o(A,{slot:"icon"})}
        </cds-button>
        <cds-button
          kind="ghost"
          @click="${this._toggleTearsheet2}"
          aria-label="Toggle Tearsheet 2"
          tooltip-text="Toggle Tearsheet 2"
          tooltip-position="right"
        >
          ${o(A,{slot:"icon"})}
        </cds-button>
        <cds-button
          kind="ghost"
          @click="${this._toggleTearsheet3}"
          aria-label="Toggle Tearsheet 3"
          tooltip-text="Toggle Tearsheet 3"
          tooltip-position="right"
        >
          ${o(A,{slot:"icon"})}
        </cds-button>
      </div>

      <!-- Tearsheet 1 -->
      <c4p-preview-tearsheet
        ?open="${this._open1}"
        variant="${r(1)}"
        @c4p-preview-tearsheet-closed="${()=>this._open1=!1}"
      >
        <c4p-tearsheet-header>
          <c4p-tearsheet-header-content title="Tearsheet 1">
            <label slot="label">Customer data</label>
            <span slot="description">
              This is a description for the tearsheet, providing an opportunity
              to describe the flow over a couple of lines in the header of the
              tearsheet.
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
            ${n}
          </c4p-tearsheet-summary-content>
        </c4p-tearsheet-body>

        <c4p-tearsheet-footer>
          <div class="default__action-buttons">
            <cds-button
              kind="ghost"
              size="xl"
              @click="${this._toggleTearsheet1}"
            >
              Cancel
            </cds-button>
            <cds-button kind="secondary" size="xl"> Back </cds-button>
            <cds-button size="xl"> Submit </cds-button>
          </div>
        </c4p-tearsheet-footer>
      </c4p-preview-tearsheet>

      <!-- Tearsheet 2 -->
      <c4p-preview-tearsheet
        ?open="${this._open2}"
        variant="${r(2)}"
        @c4p-preview-tearsheet-closed="${()=>this._open2=!1}"
      >
        <c4p-tearsheet-header>
          <c4p-tearsheet-header-content title="Tearsheet 2">
            <label slot="label">Customer data</label>
            <span slot="description">
              This is a description for the tearsheet, providing an opportunity
              to describe the flow over a couple of lines in the header of the
              tearsheet.
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
            ${n}
          </c4p-tearsheet-summary-content>
        </c4p-tearsheet-body>

        <c4p-tearsheet-footer>
          <div class="default__action-buttons">
            <cds-button
              kind="ghost"
              size="xl"
              @click="${this._toggleTearsheet2}"
            >
              Cancel
            </cds-button>
            <cds-button kind="secondary" size="xl"> Back </cds-button>
            <cds-button size="xl"> Submit </cds-button>
          </div>
        </c4p-tearsheet-footer>
      </c4p-preview-tearsheet>

      <!-- Tearsheet 3 -->
      <c4p-preview-tearsheet
        ?open="${this._open3}"
        variant="${r(3)}"
        @c4p-preview-tearsheet-closed="${()=>this._open3=!1}"
      >
        <c4p-tearsheet-header>
          <c4p-tearsheet-header-content title="Tearsheet 3">
            <label slot="label">Customer data</label>
            <span slot="description">
              This is a description for the tearsheet, providing an opportunity
              to describe the flow over a couple of lines in the header of the
              tearsheet.
            </span>
          </c4p-tearsheet-header-content>
        </c4p-tearsheet-header>

        <c4p-tearsheet-body>
          <div slot="main-content">${e}</div>
          <c4p-tearsheet-summary-content slot="summary-content">
            <h4 class="rightPanelHeading">Summary Details</h4>
            ${n}
          </c4p-tearsheet-summary-content>
        </c4p-tearsheet-body>

        <c4p-tearsheet-footer>
          <div class="default__action-buttons">
            <cds-button
              kind="ghost"
              size="xl"
              @click="${this._toggleTearsheet3}"
            >
              Cancel
            </cds-button>
            <cds-button kind="secondary" size="xl"> Back </cds-button>
            <cds-button size="xl"> Submit </cds-button>
          </div>
        </c4p-tearsheet-footer>
      </c4p-preview-tearsheet>
    `}};b.styles=l;_([F({type:String,attribute:"tearsheet-type"})],b.prototype,"tearsheetType",2);_([C()],b.prototype,"_open1",2);_([C()],b.prototype,"_open2",2);_([C()],b.prototype,"_open3",2);b=_([W("stacking-tearsheet-demo")],b);const i="tearsheet-preview-stories",c=(n="wide")=>{const e=`(max-width: ${V.md.width})`;return window.matchMedia(e).matches||n==="narrow"?"xl":"2xl"},P=n=>{if(n==="WITH_AI_LABEL")return s`
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
      `},h=()=>{document.querySelector(`${T}-preview-tearsheet`)?.toggleAttribute("open")},q=()=>{const n=document.querySelector(`${T}-tearsheet-influencer`);n&&n.toggleAttribute("influencer-panel-open")},G=()=>{const n=document.querySelector(`${T}-tearsheet-summary-content`);n&&n.toggleAttribute("summary-panel-open")},B=s` <c4p-truncated-text
  slot="description"
  lines="2"
  type="expand"
  expand-label="Read more"
  collapse-label="Read less"
  id="header-description__truncatedText"
  value="Buttons are used to initialize an action, either in the background or foreground of an experience. There are several kinds of buttons. Primary buttons should be used for the principle call to action on the page. Secondary buttons should be used for secondary actions on each page. Danger buttons should be used for a negative action (such as Delete) on the page"
></c4p-truncated-text>`,X=n=>s`<cds-progress-indicator ?vertical=${n} current-index="1">
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
  </cds-progress-indicator>`,ie=s` <cds-tabs value="tab-1">
  <cds-tab id="tab-1" target="tab-panel-1" value="tab-1">Tab 1</cds-tab>
  <cds-tab id="tab-2" target="tab-panel-2" value="tab-2">Tab 2</cds-tab>
  <cds-tab id="tab-3" target="tab-panel-3" value="tab-3">Tab 3</cds-tab>
  <cds-tab id="tab-4" target="tab-panel-4" value="tab-4">Tab 4</cds-tab>
  <cds-tab id="tab-5" target="tab-panel-5" value="tab-5">Tab 5</cds-tab>
  <cds-tab id="tab-6" target="tab-panel-6" value="tab-6">Tab 6</cds-tab>
  <cds-tab id="tab-7" target="tab-panel-7" value="tab-7">Tab 7</cds-tab>
</cds-tabs>`,ae=s` <div class="tabs-demo">
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
</div>`,J=s`  <div class="rightDetailsBody">
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
              </div>`,H=s` <section class="main-content">
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
</section>`,m={args:{variant:"wide",open:!1,decorator:"NONE",hideCloseButton:!1,disableHeaderCollapse:!1,title:"Title of the tearsheet",label:"Label",showDescription:!0,showTitleIcon:!0,showHeaderActions:!0,showSummaryContent:!0,preventCloseOnClickOutside:!1},argTypes:{variant:{control:"select",options:["wide","narrow"],description:"Tearsheet variant"},open:{control:"boolean",description:"Controls whether the tearsheet is open"},decorator:{control:"select",options:["NONE","WITH_AI_LABEL"],description:"Decorator type for the tearsheet header"},hideCloseButton:{control:"boolean",description:"Hide the close button in the header"},disableHeaderCollapse:{control:"boolean",description:"Disable header collapse/expand on scroll"},title:{control:"text",description:"Title of the tearsheet"},label:{control:"text",description:"Label above the title"},showDescription:{control:"boolean",description:"Show description text"},showTitleIcon:{control:"boolean",description:"Show icon before title"},showHeaderActions:{control:"boolean",description:"Show action buttons in header"},showSummaryContent:{control:"boolean",description:"Show summary content panel"},preventCloseOnClickOutside:{control:"boolean",description:"Prevent closing when clicking outside"}},render:n=>s`
      <style>
        ${l}
      </style>
      <div class="${i}story-container">
        <div class="${i}story-header"></div>
        <div id="page-content-selector" class="${i}story-content">
          <cds-button @click="${h}">Toggle tearsheet</cds-button>
        </div>
      </div>

      <c4p-preview-tearsheet
        variant="${n.variant}"
        ?open="${n.open}"
        ?prevent-close-on-click-outside="${n.preventCloseOnClickOutside}"
      >
        <c4p-tearsheet-header
          ?hide-close-button="${n.hideCloseButton}"
          ?disable-header-collapse="${n.disableHeaderCollapse}"
        >
          <!-- slotted Decorator -->
          ${n.decorator!=="NONE"?P(n.decorator):""}

          <c4p-tearsheet-header-content title="${n.title}">
            <label slot="label">${n.label}</label>
            ${n.showDescription?B:""}
            ${n.showTitleIcon?o(D,{slot:"title-start"}):""}
            ${n.showHeaderActions?s`<div slot="header-actions">
                  <cds-button size="sm" kind="tertiary">
                    Primary action ${o(R,{slot:"icon"})}
                  </cds-button>
                </div>`:""}
          </c4p-tearsheet-header-content>
        </c4p-tearsheet-header>

        <c4p-tearsheet-body>
          <div slot="main-content">
            ${n.showSummaryContent?s`<div class="summaryPanelTrigger">
                  <cds-button
                    kind="ghost"
                    label="Open right panel"
                    @click="${G}"
                  >
                    ${o(S,{slot:"icon"})}
                  </cds-button>
                </div>`:""}
            ${H}
          </div>
          ${n.showSummaryContent?s`<c4p-tearsheet-summary-content slot="summary-content"
                >${J}</c4p-tearsheet-summary-content
              >`:""}
        </c4p-tearsheet-body>
        <c4p-tearsheet-footer>
          <div class="default__action-buttons">
            <cds-button
              kind="ghost"
              size="${c(n.variant)}"
              @click="${h}"
            >
              Cancel
            </cds-button>
            <cds-button kind="secondary" size="${c(n.variant)}">
              Back
            </cds-button>
            <cds-button size="${c(n.variant)}">
              Submit
            </cds-button>
          </div>
        </c4p-tearsheet-footer>
      </c4p-preview-tearsheet>
    `},x={render:()=>s`
      <style>
        ${l}
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
          ${P("WITH_AI_LABEL")}

          <c4p-tearsheet-header-content title="Title of the tearsheet">
            <label slot="label">Label</label>
            ${B}
            ${o(D,{slot:"title-start"})}

            <div slot="header-actions">
              <cds-button size="sm" kind="tertiary">Action 1</cds-button>
            </div>
          </c4p-tearsheet-header-content>
        </c4p-tearsheet-header>

        <!-- Influencer with Progress Indicator -->
        <c4p-tearsheet-influencer>
          ${X(!0)}
        </c4p-tearsheet-influencer>

        <c4p-tearsheet-body>
          <div slot="main-content">
            <!-- Button to open influencer panel on small screens -->
            <div class="influencerPanelTrigger">
              <cds-button
                kind="ghost"
                tooltip-text="Open Influencer"
                tooltip-position="right"
                @click="${q}"
              >
                ${o(S,{slot:"icon"})}
              </cds-button>
            </div>

            <!-- Main Content -->
            ${H}
          </div>
        </c4p-tearsheet-body>

        <c4p-tearsheet-footer>
          <div class="default__action-buttons">
            <cds-button
              kind="ghost"
              size="${c("wide")}"
              @click="${h}"
            >
              Cancel
            </cds-button>
            <cds-button kind="secondary" size="${c("wide")}">
              Back
            </cds-button>
            <cds-button size="${c("wide")}"> Submit </cds-button>
          </div>
        </c4p-tearsheet-footer>
      </c4p-preview-tearsheet>
    `},g={render:()=>s`
      <style>
        ${l}
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
          ${P("WITH_AI_LABEL")}

          <c4p-tearsheet-header-content title="Title of the tearsheet">
            <label slot="label">Label</label>
            ${B}
            ${o(D,{slot:"title-start"})}

            <div slot="header-actions">
              <cds-button size="sm" kind="tertiary">Action 1</cds-button>
            </div>
          </c4p-tearsheet-header-content>
          <c4p-tearsheet-navigation-bar>
            ${ie}
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
            ${ae}
          </div>
        </c4p-tearsheet-body>

        <c4p-tearsheet-footer>
          <div class="default__action-buttons">
            <cds-button
              kind="ghost"
              size="${c("wide")}"
              @click="${h}"
            >
              Cancel
            </cds-button>
            <cds-button kind="secondary" size="${c("wide")}">
              Back
            </cds-button>
            <cds-button size="${c("wide")}"> Submit </cds-button>
          </div>
        </c4p-tearsheet-footer>
      </c4p-preview-tearsheet>
    `},v={render:n=>s`
      <style>
        ${l}
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
             ${P("WITH_AI_LABEL")}
      <c4p-tearsheet-header-content title="Tile to the tearsheet">
      <label slot="label"> label </label>
    ${B}
     
      
      <div slot="header-actions">
            <cds-button size="sm" kind="tertiary" 
              >Primary action ${o(R,{slot:"icon"})}</cds-button
            >
          </div>
     </c4p-tearsheet-header-content>
   
      
   
     </c4p-tearsheet-header>
      <c4p-tearsheet-influencer  >${X(!0)}</c4p-tearsheet-influencer>
       <c4p-tearsheet-body >
       <div  slot="main-content"> 
        <div class="influencerPanelTrigger">
              <cds-button
                kind="ghost"
                label="Open influencer"
                @click="${q}"
              >
                 ${o(S,{slot:"icon"})}
                </cds-button>
            </div>
            <div class="summaryPanelTrigger">
              <cds-button
                kind="ghost"
                label="Open right panel"
               @click="${G}"
               
              > ${o(S,{slot:"icon"})}</cds-button>
            </div>
        ${H}</div>
       <c4p-tearsheet-summary-content   slot="summary-content">${J}</c4p-tearsheet-summary-content>
        </c4p-tearsheet-body>
        <c4p-tearsheet-footer>
         <div class="default__action-buttons" >
            <cds-button kind="ghost" size="${c("narrow")}" @click="${h}">
              Cancel
            </cds-button>
            <cds-button kind="secondary" size="${c("narrow")}"> Back </cds-button>
            <cds-button size="${c("narrow")}"> Submit </cds-button>
         </div > </c4p-tearsheet-footer>
     </<c4p-preview-tearsheet>
      
    `},y={render:()=>s` <step-tearsheet-preview></step-tearsheet-preview> `},j={render:()=>s` <step-tearsheet-preview horizontal></step-tearsheet-preview> `},f={render:()=>s`
      <style>
        ${l}
      </style>
      <stacking-tearsheet-demo tearsheet-type="wide"></stacking-tearsheet-demo>
    `},w={render:()=>s`
      <style>
        ${l}
      </style>
      <stacking-tearsheet-demo
        tearsheet-type="narrow"
      ></stacking-tearsheet-demo>
    `},$={render:()=>s`
      <style>
        ${l}
      </style>
      <stacking-tearsheet-demo tearsheet-type="mixed"></stacking-tearsheet-demo>
    `},oe={title:"Preview/Tearsheet",parameters:{docs:{page:K}},decorators:[n=>s` <style>
          #main-content {
            padding: 0;
          }

          .tabs-demo {
            padding: 1rem;
          }
        </style>
        ${n()}`]};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
        <c4p-tearsheet-footer>
          <div class="default__action-buttons">
            <cds-button
              kind="ghost"
              size="\${getButtonSize(args.variant)}"
              @click="\${toggleButton}"
            >
              Cancel
            </cds-button>
            <cds-button kind="secondary" size="\${getButtonSize(args.variant)}">
              Back
            </cds-button>
            <cds-button size="\${getButtonSize(args.variant)}">
              Submit
            </cds-button>
          </div>
        </c4p-tearsheet-footer>
      </c4p-preview-tearsheet>
    \`;
  }
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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

        <c4p-tearsheet-footer>
          <div class="default__action-buttons">
            <cds-button
              kind="ghost"
              size="\${getButtonSize('wide')}"
              @click="\${toggleButton}"
            >
              Cancel
            </cds-button>
            <cds-button kind="secondary" size="\${getButtonSize('wide')}">
              Back
            </cds-button>
            <cds-button size="\${getButtonSize('wide')}"> Submit </cds-button>
          </div>
        </c4p-tearsheet-footer>
      </c4p-preview-tearsheet>
    \`;
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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

        <c4p-tearsheet-footer>
          <div class="default__action-buttons">
            <cds-button
              kind="ghost"
              size="\${getButtonSize('wide')}"
              @click="\${toggleButton}"
            >
              Cancel
            </cds-button>
            <cds-button kind="secondary" size="\${getButtonSize('wide')}">
              Back
            </cds-button>
            <cds-button size="\${getButtonSize('wide')}"> Submit </cds-button>
          </div>
        </c4p-tearsheet-footer>
      </c4p-preview-tearsheet>
    \`;
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
        <c4p-tearsheet-footer>
         <div class="default__action-buttons" >
            <cds-button kind="ghost" size="\${getButtonSize('narrow')}" @click="\${toggleButton}">
              Cancel
            </cds-button>
            <cds-button kind="secondary" size="\${getButtonSize('narrow')}"> Back </cds-button>
            <cds-button size="\${getButtonSize('narrow')}"> Submit </cds-button>
         </div > </c4p-tearsheet-footer>
     </<c4p-preview-tearsheet>
      
    \`;
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\` <step-tearsheet-preview></step-tearsheet-preview> \`;
  }
}`,...y.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\` <step-tearsheet-preview horizontal></step-tearsheet-preview> \`;
  }
}`,...j.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <style>
        \${styles}
      </style>
      <stacking-tearsheet-demo tearsheet-type="wide"></stacking-tearsheet-demo>
    \`;
  }
}`,...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <style>
        \${styles}
      </style>
      <stacking-tearsheet-demo tearsheet-type="mixed"></stacking-tearsheet-demo>
    \`;
  }
}`,...$.parameters?.docs?.source}}};const ce=["Default","WithInfluencer","WithTabs","narrowTearsheet","withSteps","withStepsAndHorizontalProgressIndicator","StackingTearsheets","StackingNarrowTearsheets","StackingWithDifferentSizes"],de=Object.freeze(Object.defineProperty({__proto__:null,Default:m,StackingNarrowTearsheets:w,StackingTearsheets:f,StackingWithDifferentSizes:$,WithInfluencer:x,WithTabs:g,__namedExportsOrder:ce,default:oe,narrowTearsheet:v,withSteps:y,withStepsAndHorizontalProgressIndicator:j},Symbol.toStringTag,{value:"Module"}));function N(n){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...E(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(Q,{of:de}),`
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
`,t.jsx(e.p,{children:"Multiple tearsheets can be opened simultaneously and will automatically stack:"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import { stackManager } from '@carbon/ibm-products-web-components/es/components/tearsheet-preview/stack-signal.js';

// Set stack step size (affects scaling). This is optional and is default to lg
stackManager.setStackStepSize('md'); // 'sm' | 'md' | 'lg' | 'xlg'
`})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<!-- First tearsheet -->
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
`,t.jsx(z,{of:"c4p-preview-tearsheet"}),`
`,t.jsxs(e.h3,{id:"c4p-tearsheet-header-attributes-and-properties",children:[t.jsx(e.code,{children:"<c4p-tearsheet-header>"})," attributes and properties"]}),`
`,t.jsx(z,{of:"c4p-tearsheet-header"}),`
`,t.jsxs(e.h3,{id:"c4p-tearsheet-header-content-attributes-and-properties",children:[t.jsx(e.code,{children:"<c4p-tearsheet-header-content>"})," attributes and properties"]}),`
`,t.jsx(z,{of:"c4p-tearsheet-header-content"}),`
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
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{children:"Slot"}),t.jsx(e.th,{children:"Description"})]})}),t.jsx(e.tbody,{children:t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"actions"})}),t.jsx(e.td,{children:"Action buttons (typically Cancel, Submit)"})]})})]})]})}function K(n={}){const{wrapper:e}={...E(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(N,{...n})}):N(n)}const Ae=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"}));export{de as T,Ae as t};
