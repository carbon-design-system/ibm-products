import{u as J,j as t,M as ee,A as O}from"./blocks-D56Ifitm.js";import{n as M,r as E,B as u,x as s,c as te,z as ne,E as H,A as K,G as se}from"./iframe-P6EQVfds.js";import{s as F}from"./tearsheet-summary-content-7MWu53o3.js";import{r as I}from"./state-o25yqcsE.js";import{o as re}from"./index-CiJg2Nm-.js";import{i as l}from"./icon-loader-BBoVVBoj.js";import{_ as m,a as ae,b as W}from"./32-gWGFBCOY.js";import"./progress-step-CLb3vy03.js";import"./text-input-DxEJ4u8s.js";import"./text-input-skeleton-DnOK5k2_.js";import"./button-DYESWtRg.js";import"./button-skeleton-BZY9Ntol.js";import{S as ie}from"./step-group-Cwr0uITs.js";import{e as L,n as R}from"./ref-DcG1Rkhg.js";import{_ as A}from"./32-Dvc1-m7_.js";import"./definition-tooltip-pzrrCQRW.js";import"./tab-skeleton-DtihB7cC.js";import"./tabs-vertical-CH8oAern.js";import"./dropdown-skeleton-f2MNoWTd.js";import"./progress-bar-M7OhDmxF.js";import"./textarea-skeleton-BGfL0k90.js";import"./slug-action-button-DkoHAqCx.js";import"./toast-notification-V2JlQIEF.js";import"./actionable-notification-button-BXVvjLqA.js";import"./callout-notification-3oQsthPt.js";var oe=Object.defineProperty,le=Object.getOwnPropertyDescriptor,Q=(n,e,a,o)=>{for(var r=o>1?void 0:o?le(e,a):e,c=n.length-1,d;c>=0;c--)(d=n[c])&&(r=(o?d(e,a,r):d(r))||r);return o&&r&&oe(e,a,r),r};let z=class extends E{constructor(){super(...arguments),this.stackStepSize="lg",this._isActive=!1}connectedCallback(){super.connectedCallback(),F.setStackStepSize(this.stackStepSize),this._isActive=!0,this.dispatchEvent(new CustomEvent(`${u}-tearsheet-stack-connected`,{bubbles:!0,composed:!0,detail:{stackStepSize:this.stackStepSize}}))}disconnectedCallback(){super.disconnectedCallback(),this._isActive&&(F.reset(),this._isActive=!1)}updated(n){super.updated(n),n.has("stackStepSize")&&(F.setStackStepSize(this.stackStepSize),this.dispatchEvent(new CustomEvent(`${u}-tearsheet-stack-step-size-changed`,{bubbles:!0,composed:!0,detail:{stackStepSize:this.stackStepSize}})))}render(){return s`<slot></slot>`}};z.styles=[];Q([M({type:String,attribute:"stack-step-size"})],z.prototype,"stackStepSize",2);z=Q([te(`${u}-tearsheet-stack`)],z);const ce="c4p-tearsheet-influencer,div[slot=main-content],c4p-tearsheet-summary-content{padding-block:2rem}.summaryPanelTrigger{position:absolute;inset-block-start:0;inset-inline-end:0}.influencerPanelTrigger{position:absolute;inset-block-start:0;inset-inline-start:0}@media(min-width:66rem)and (max-width:82rem){c4p-preview-tearsheet:not([variant=narrow]) .summaryPanelTrigger,c4p-preview-tearsheet:not([variant=narrow]) .influencerPanelTrigger{display:none}}@media(min-width:42rem)and (max-width:66rem){c4p-preview-tearsheet:not([variant=narrow]) .summaryPanelTrigger,c4p-preview-tearsheet:not([variant=narrow]) .influencerPanelTrigger{display:none}}@media(min-width:82rem)and (max-width:99rem){c4p-preview-tearsheet:not([variant=narrow]) .summaryPanelTrigger,c4p-preview-tearsheet:not([variant=narrow]) .influencerPanelTrigger{display:none}}@media(min-width:99rem){c4p-preview-tearsheet:not([variant=narrow]) .summaryPanelTrigger,c4p-preview-tearsheet:not([variant=narrow]) .influencerPanelTrigger{display:none}}.summaryPanelHeading{font-size:var(--cds-heading-03-font-size, 1.25rem);font-weight:var(--cds-heading-03-font-weight, 400);line-height:var(--cds-heading-03-line-height, 1.4);letter-spacing:var(--cds-heading-03-letter-spacing, 0)}@media(min-width:20rem)and (max-width:42rem){.stackButtons{display:none}}@media(min-width:66rem)and (max-width:82rem){.smallScreenButton{display:none}}@media(min-width:42rem)and (max-width:66rem){.smallScreenButton{display:none}}@media(min-width:82rem)and (max-width:99rem){.smallScreenButton{display:none}}@media(min-width:99rem){.smallScreenButton{display:none}}.default__action-buttons{display:grid;grid-auto-rows:minmax(auto,auto);grid-template-columns:repeat(6,1fr)}.default__action-buttons>cds-button{inline-size:100%;max-inline-size:none}.default__action-buttons>cds-button:first-child{grid-column:span 4}",p=ne(ce);var de=Object.defineProperty,he=Object.getOwnPropertyDescriptor,q=(n,e,a,o)=>{for(var r=o>1?void 0:o?he(e,a):e,c=n.length-1,d;c>=0;c--)(d=n[c])&&(r=(o?d(e,a,r):d(r))||r);return o&&r&&de(e,a,r),r};let S=class extends re(E){constructor(){super(...arguments),this.horizontal=!1,this._open=!1,this._stepInfo=new ie}connectedCallback(){super.connectedCallback(),this._stepInfo.updateTotalStepCount=3}_onButtonClick(){this._open=!0}_handleCancelButton(){this._open=!1,this._stepInfo.reset()}_handleBackButton(){const{currentStep:n}=this._stepInfo.data;if(n!==0)return this._stepInfo.handlePrevious()}_handleNextButton(){const{currentStep:n,totalSteps:e}=this._stepInfo.data;if(n+1===e){console.log("Form submitted:",this._stepInfo.data.formState),this._handleCancelButton();return}return this._stepInfo.handleNext()}_handleEmailInput(n){const e=structuredClone(this._stepInfo.data.formState);e.email=n.target.value,this._stepInfo.updateFormState=e}_handleCityInput(n){const e=structuredClone(this._stepInfo.data.formState);e.city=n.target.value,this._stepInfo.updateFormState=e}_handleStateInput(n){const e=structuredClone(this._stepInfo.data.formState);e.state=n.target.value,this._stepInfo.updateFormState=e}_toggleInfluencerPanel(){const n=this.shadowRoot?.querySelector(`${u}-tearsheet-influencer`);n&&n.toggleAttribute("influencer-panel-open")}_getStepContent(){const{formState:n,currentStep:e}=this._stepInfo.data,a=n;switch(e){case 0:return s`
          <div>
            <cds-text-input
              label="Email"
              id="step-email-input"
              value=${a.email||""}
              @input="${this._handleEmailInput}"
            ></cds-text-input>
          </div>
        `;case 1:return s`
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
        `;case 2:return s`
          <div>
            <h4>Review your information</h4>
            <pre>${JSON.stringify(n,null,2)}</pre>
          </div>
        `;default:return H}}_getProgressStepState(n){const{currentStep:e}=this._stepInfo.data;return n<e?"complete":n===e?"current":"incomplete"}_getActions(){const{currentStep:n}=this._stepInfo.data;return[{kind:"ghost",label:"Cancel",onClick:()=>this._handleCancelButton()},{kind:"secondary",label:"Back",disabled:n===0,onClick:()=>this._handleBackButton()},{kind:"primary",label:n<this._stepInfo.data.totalSteps-1?"Next":"Submit",onClick:()=>this._handleNextButton()}]}render(){return s`
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
              </cds-progress-indicator>`:H}
        </c4p-tearsheet-header>

        <!-- Influencer with Progress Indicator -->
        ${this.horizontal?H:s` <c4p-tearsheet-influencer>
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
                ${l(m,{slot:"icon"})}
              </cds-button>
            </div>

            <!-- Step Content -->
            ${this._getStepContent()}
          </div>
        </c4p-tearsheet-body>

        <c4p-tearsheet-footer .actions="${this._getActions()}">
        </c4p-tearsheet-footer>
      </c4p-preview-tearsheet>
    `}};S.styles=p;q([M({type:Boolean})],S.prototype,"horizontal",2);q([I()],S.prototype,"_open",2);S=q([K("step-tearsheet-preview")],S);var pe=Object.defineProperty,ue=Object.getOwnPropertyDescriptor,_=(n,e,a,o)=>{for(var r=o>1?void 0:o?ue(e,a):e,c=n.length-1,d;c>=0;c--)(d=n[c])&&(r=(o?d(e,a,r):d(r))||r);return o&&r&&pe(e,a,r),r};let b=class extends E{constructor(){super(...arguments),this.tearsheetType="wide",this._open1=!1,this._open2=!1,this._open3=!1,this._launcherButtonRef1=L(),this._launcherButtonRef2=L(),this._launcherButtonRef3=L()}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}_toggleTearsheet1(){this._open1=!this._open1}_toggleTearsheet2(){this._open2=!this._open2}_toggleTearsheet3(){this._open3=!this._open3}render(){const n=s`
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
    `,a=o=>this.tearsheetType==="mixed"?o%2===0?"narrow":"wide":this.tearsheetType==="wide"?"wide":this.tearsheetType==="narrow"?"narrow":"wide";return s`
      <div class="stackButtons">
        <cds-button
          ${R(this._launcherButtonRef1)}
          @click="${this._toggleTearsheet1}"
          aria-haspopup="dialog"
        >
          Open Tearsheet 1
        </cds-button>
      </div>
      <div class="smallScreenButton">
        <cds-button
          kind="ghost"
          @click="${this._toggleTearsheet1}"
          aria-label="Open Tearsheet 1"
          aria-haspopup="dialog"
          tooltip-text="Open Tearsheet 1"
          tooltip-position="right"
        >
          ${l(ae,{slot:"icon"})}
        </cds-button>
      </div>

      <!-- Wrap tearsheets in stack provider to enable stacking -->
      <c4p-tearsheet-stack stack-step-size="lg">
        <!-- Tearsheet 1 -->
        <c4p-preview-tearsheet
          ?open="${this._open1}"
          variant="${a(1)}"
          .launcherButtonRef="${this._launcherButtonRef1.value}"
          selector-primary-focus="#tss-ft1"
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
                  ${R(this._launcherButtonRef2)}
                  size="sm"
                  kind="tertiary"
                  @click="${this._toggleTearsheet2}"
                  aria-haspopup="dialog"
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

          <c4p-tearsheet-footer
            .actions="${[{kind:"ghost",label:"Cancel",onClick:()=>this._toggleTearsheet1()},{kind:"secondary",label:"Back"},{kind:"primary",label:"Submit"}]}"
          >
          </c4p-tearsheet-footer>
        </c4p-preview-tearsheet>

        <!-- Tearsheet 2 -->
        <c4p-preview-tearsheet
          ?open="${this._open2}"
          variant="${a(2)}"
          .launcherButtonRef="${this._launcherButtonRef2.value}"
          selector-primary-focus="#tss-ft1"
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
                  ${R(this._launcherButtonRef3)}
                  size="sm"
                  kind="tertiary"
                  @click="${this._toggleTearsheet3}"
                  aria-haspopup="dialog"
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

          <c4p-tearsheet-footer
            .actions="${[{kind:"ghost",label:"Cancel",onClick:()=>this._toggleTearsheet2()},{kind:"secondary",label:"Back"},{kind:"primary",label:"Submit"}]}"
          >
          </c4p-tearsheet-footer>
        </c4p-preview-tearsheet>

        <!-- Tearsheet 3 -->
        <c4p-preview-tearsheet
          ?open="${this._open3}"
          variant="${a(3)}"
          .launcherButtonRef="${this._launcherButtonRef3.value}"
          selector-primary-focus="#tss-ft1"
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
              ${n}
            </c4p-tearsheet-summary-content>
          </c4p-tearsheet-body>

          <c4p-tearsheet-footer
            .actions="${[{kind:"ghost",label:"Cancel",onClick:()=>this._toggleTearsheet3()},{kind:"secondary",label:"Back"},{kind:"primary",label:"Submit"}]}"
          >
          </c4p-tearsheet-footer>
        </c4p-preview-tearsheet>
      </c4p-tearsheet-stack>
    `}};b.styles=p;_([M({type:String,attribute:"tearsheet-type"})],b.prototype,"tearsheetType",2);_([I()],b.prototype,"_open1",2);_([I()],b.prototype,"_open2",2);_([I()],b.prototype,"_open3",2);b=_([K("stacking-tearsheet-demo")],b);const i="tearsheet-preview-stories",N=(n="wide")=>{const e=`(max-width: ${se.md.width})`;return window.matchMedia(e).matches||n==="narrow"?"xl":"2xl"},T=n=>n?s`
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
  `:"",h=()=>{document.querySelector(`${u}-preview-tearsheet`)?.toggleAttribute("open")},B=n=>{const{collapsed:e}=n.detail;n.currentTarget.querySelectorAll('[slot="header-actions"] cds-button').forEach(o=>o.setAttribute("size",e?"xs":"sm"))},V=()=>{const n=document.querySelector(`${u}-tearsheet-influencer`);n&&n.toggleAttribute("influencer-panel-open")},G=()=>{const n=document.querySelector(`${u}-tearsheet-summary-content`);n&&n.toggleAttribute("summary-panel-open")},P=s` <c4p-truncated-text
  slot="description"
  lines="2"
  type="expand"
  expand-label="Read more"
  collapse-label="Read less"
  id="header-description__truncatedText"
  value="Buttons are used to initialize an action, either in the background or foreground of an experience. There are several kinds of buttons. Primary buttons should be used for the principle call to action on the page. Secondary buttons should be used for secondary actions on each page. Danger buttons should be used for a negative action (such as Delete) on the page"
></c4p-truncated-text>`,Y=n=>s`<cds-progress-indicator ?vertical=${n} current-index="1">
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
  </cds-progress-indicator>`,be=s` <cds-tabs value="tab-1">
  <cds-tab id="tab-1" target="tab-panel-1" value="tab-1">Tab 1</cds-tab>
  <cds-tab id="tab-2" target="tab-panel-2" value="tab-2">Tab 2</cds-tab>
  <cds-tab id="tab-3" target="tab-panel-3" value="tab-3">Tab 3</cds-tab>
  <cds-tab id="tab-4" target="tab-panel-4" value="tab-4">Tab 4</cds-tab>
  <cds-tab id="tab-5" target="tab-panel-5" value="tab-5">Tab 5</cds-tab>
  <cds-tab id="tab-6" target="tab-panel-6" value="tab-6">Tab 6</cds-tab>
  <cds-tab id="tab-7" target="tab-panel-7" value="tab-7">Tab 7</cds-tab>
</cds-tabs>`,me=s` <div class="tabs-demo">
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
</div>`,U=s`  <div class="rightDetailsBody">
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
              </div>`,D=s` <section class="main-content">
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
</section>`,v={args:{variant:"wide",open:!1,decorator:!1,isFlush:!1,hideCloseButton:!1,disableHeaderCollapse:!1,title:"Title of the tearsheet",label:"Label",showDescription:!0,showTitleIcon:!0,showHeaderActions:!0,showSummaryContent:!0,preventCloseOnClickOutside:!1},render:n=>s`
      <style>
        ${p}
      </style>
      <div class="${i}story-container">
        <div class="${i}story-header"></div>
        <div id="page-content-selector" class="${i}story-content">
          <cds-button @click="${h}" aria-haspopup="dialog"
            >Toggle tearsheet</cds-button
          >
        </div>
      </div>

      <c4p-preview-tearsheet
        variant="${n.variant}"
        ?open="${n.open}"
        ?prevent-close-on-click-outside="${n.preventCloseOnClickOutside}"
        @c4p-preview-tearsheet-collapse-change="${B}"
      >
        <c4p-tearsheet-header
          ?hide-close-button="${n.hideCloseButton}"
          ?disable-header-collapse="${n.disableHeaderCollapse}"
        >
          <c4p-tearsheet-header-content title="${n.title}">
            ${T(n.decorator)}
            <label slot="label">${n.label}</label>
            ${n.showDescription?P:""}
            ${n.showTitleIcon?l(A,{slot:"title-start"}):""}
            ${n.showHeaderActions?s`<div slot="header-actions">
                  <cds-button size="sm" kind="tertiary">
                    Primary action ${l(W,{slot:"icon"})}
                  </cds-button>
                </div>`:""}
          </c4p-tearsheet-header-content>
        </c4p-tearsheet-header>

        <c4p-tearsheet-body>
          <div slot="main-content" ?is-flush="${n.isFlush}">
            ${n.showSummaryContent?s`<div class="summaryPanelTrigger">
                  <cds-button
                    size="md"
                    kind="ghost"
                    label="Open right panel"
                    @click="${G}"
                    aria-expanded="false"
                    aria-controls="summary-panel"
                  >
                    ${l(m,{slot:"icon"})}
                  </cds-button>
                </div>`:""}
            ${D}
          </div>
          ${n.showSummaryContent?s`<c4p-tearsheet-summary-content slot="summary-content"
                >${U}</c4p-tearsheet-summary-content
              >`:""}
        </c4p-tearsheet-body>
        <c4p-tearsheet-footer
          variant="${n.variant}"
          .actions="${[{kind:"ghost",label:"Cancel",onClick:h},{kind:"secondary",label:"Back"},{kind:"primary",label:"Submit"}]}"
        >
        </c4p-tearsheet-footer>
      </c4p-preview-tearsheet>
    `},g={args:{variant:"wide",decorator:!1,isFlush:!1,hideCloseButton:!1,disableHeaderCollapse:!1},render:n=>s`
      <style>
        ${p}
      </style>
      <div class="${i}story-container">
        <div class="${i}story-header"></div>
        <div id="page-content-selector" class="${i}story-content">
          <cds-button @click="${h}">Open Tearsheet</cds-button>
        </div>
      </div>

      <c4p-preview-tearsheet
        variant="${n.variant??"wide"}"
        @c4p-preview-tearsheet-collapse-change="${B}"
      >
        <c4p-tearsheet-header
          ?hide-close-button="${n.hideCloseButton}"
          ?disable-header-collapse="${n.disableHeaderCollapse}"
        >
          <c4p-tearsheet-header-content title="Title of the tearsheet">
            ${T(n.decorator)}
            <label slot="label">Label</label>
            ${P}
            ${l(A,{slot:"title-start"})}

            <div slot="header-actions">
              <cds-button size="sm" kind="tertiary">Action 1</cds-button>
            </div>
          </c4p-tearsheet-header-content>
        </c4p-tearsheet-header>

        <!-- Influencer with Progress Indicator -->
        <c4p-tearsheet-influencer>
          ${Y(!0)}
        </c4p-tearsheet-influencer>

        <c4p-tearsheet-body>
          <div slot="main-content" ?is-flush="${n.isFlush}">
            <!-- Button to open influencer panel on small screens -->
            <div class="influencerPanelTrigger">
              <cds-button
                size="md"
                kind="ghost"
                tooltip-text="Open Influencer"
                tooltip-position="right"
                @click="${V}"
              >
                ${l(m,{slot:"icon"})}
              </cds-button>
            </div>

            <!-- Main Content -->
            ${D}
          </div>
        </c4p-tearsheet-body>

        <c4p-tearsheet-footer
          variant="${n.variant??"wide"}"
          .actions="${[{kind:"ghost",label:"Cancel",onClick:h},{kind:"secondary",label:"Back"},{kind:"primary",label:"Submit"}]}"
        >
        </c4p-tearsheet-footer>
      </c4p-preview-tearsheet>
    `},x={args:{variant:"wide",decorator:!1,isFlush:!1,hideCloseButton:!1,disableHeaderCollapse:!1},render:n=>s`
      <style>
        ${p}
      </style>
      <div class="${i}story-container">
        <div class="${i}story-header"></div>
        <div id="page-content-selector" class="${i}story-content">
          <cds-button @click="${h}">Open Tearsheet</cds-button>
        </div>
      </div>

      <c4p-preview-tearsheet
        variant="${n.variant??"wide"}"
        @c4p-preview-tearsheet-collapse-change="${B}"
      >
        <c4p-tearsheet-header
          ?hide-close-button="${n.hideCloseButton}"
          ?disable-header-collapse="${n.disableHeaderCollapse}"
        >
          <c4p-tearsheet-header-content title="Title of the tearsheet">
            ${T(n.decorator)}
            <label slot="label">Label</label>
            ${P}
            ${l(A,{slot:"title-start"})}

            <div slot="header-actions">
              <cds-button size="sm" kind="tertiary">Action 1</cds-button>
            </div>
          </c4p-tearsheet-header-content>
          <c4p-tearsheet-navigation-bar>
            ${be}
            <c4p-tearsheet-scroller slot="scroller"></c4p-tearsheet-scroller>
          </c4p-tearsheet-navigation-bar>
        </c4p-tearsheet-header>

        <c4p-tearsheet-body>
          <div slot="main-content" ?is-flush="${n.isFlush}">
            <div
              id="tab-cloudFoundry"
              role="tabpanel"
              aria-labelledby="tab-all"
              hidden=""
            >
              Tab Panel 1
            </div>
            ${me}
          </div>
        </c4p-tearsheet-body>

        <c4p-tearsheet-footer
          variant="${n.variant??"wide"}"
          .actions="${[{kind:"ghost",label:"Cancel",onClick:h},{kind:"secondary",label:"Back"},{kind:"primary",label:"Submit"}]}"
        >
        </c4p-tearsheet-footer>
      </c4p-preview-tearsheet>
    `},y={args:{decorator:!1,isFlush:!1,hideCloseButton:!1,disableHeaderCollapse:!1},render:n=>s`
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
        variant="narrow"
        @c4p-preview-tearsheet-collapse-change="${B}"
      >
        <c4p-tearsheet-header
          ?hide-close-button="${n.hideCloseButton}"
          ?disable-header-collapse="${n.disableHeaderCollapse}"
        >
          <c4p-tearsheet-header-content title="Title of the tearsheet">
            ${T(n.decorator)}
            <label slot="label">Label</label>
            ${P}
            <div slot="header-actions">
              <cds-button size="sm" kind="tertiary">
                Primary action ${l(W,{slot:"icon"})}
              </cds-button>
            </div>
          </c4p-tearsheet-header-content>
        </c4p-tearsheet-header>

        <c4p-tearsheet-influencer
          >${Y(!0)}</c4p-tearsheet-influencer
        >

        <c4p-tearsheet-body>
          <div slot="main-content" ?is-flush="${n.isFlush}">
            <div class="influencerPanelTrigger">
              <cds-button
                size="md"
                kind="ghost"
                label="Open influencer"
                @click="${V}"
              >
                ${l(m,{slot:"icon"})}
              </cds-button>
            </div>
            <div class="summaryPanelTrigger">
              <cds-button
                size="md"
                kind="ghost"
                label="Open right panel"
                @click="${G}"
              >
                ${l(m,{slot:"icon"})}
              </cds-button>
            </div>
            ${D}
          </div>
          <c4p-tearsheet-summary-content slot="summary-content">
            ${U}
          </c4p-tearsheet-summary-content>
        </c4p-tearsheet-body>

        <c4p-tearsheet-footer
          variant="narrow"
          .actions="${[{kind:"ghost",label:"Cancel",onClick:h},{kind:"secondary",label:"Back"},{kind:"primary",label:"Submit"}]}"
        >
        </c4p-tearsheet-footer>
      </c4p-preview-tearsheet>
    `},f={render:()=>s` <step-tearsheet-preview></step-tearsheet-preview> `},j={render:()=>s` <step-tearsheet-preview horizontal></step-tearsheet-preview> `},$={render:()=>s`
      <style>
        ${p}
      </style>
      <stacking-tearsheet-demo tearsheet-type="wide"></stacking-tearsheet-demo>
    `},w={render:()=>s`
      <style>
        ${p}
      </style>
      <stacking-tearsheet-demo
        tearsheet-type="narrow"
      ></stacking-tearsheet-demo>
    `},k={render:()=>s`
      <style>
        ${p}
      </style>
      <stacking-tearsheet-demo tearsheet-type="mixed"></stacking-tearsheet-demo>
    `},C={args:{variant:"wide",open:!1,decorator:!1,isFlush:!1,hideCloseButton:!1,disableHeaderCollapse:!1,showSummaryContent:!0},render:n=>s`
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
        variant="${n.variant}"
        ?open="${n.open}"
        prevent-close-on-click-outside
        @c4p-preview-tearsheet-collapse-change="${B}"
      >
        <c4p-tearsheet-header
          ?hide-close-button="${n.hideCloseButton}"
          ?disable-header-collapse="${n.disableHeaderCollapse}"
        >
          <c4p-tearsheet-header-content title="Title of the tearsheet">
            ${T(n.decorator)}
            <label slot="label">Customer data</label>
            ${P}
            ${l(A,{slot:"title-start"})}
            <div slot="header-actions">
              <cds-button size="sm" kind="tertiary">
                Action 1 ${l(W,{slot:"icon"})}
              </cds-button>
            </div>
          </c4p-tearsheet-header-content>
        </c4p-tearsheet-header>

        <c4p-tearsheet-body>
          <div slot="main-content" ?is-flush="${n.isFlush}">
            ${n.showSummaryContent?s`<div class="summaryPanelTrigger">
                  <cds-button
                    size="md"
                    kind="ghost"
                    label="Open right panel"
                    @click="${G}"
                  >
                    ${l(m,{slot:"icon"})}
                  </cds-button>
                </div>`:""}
            ${D}
          </div>
          ${n.showSummaryContent?s`<c4p-tearsheet-summary-content slot="summary-content"
                >${U}</c4p-tearsheet-summary-content
              >`:""}
        </c4p-tearsheet-body>

        <c4p-tearsheet-footer>
          <div class="default__action-buttons">
            <cds-button
              kind="ghost"
              size="${N(n.variant)}"
              @click="${h}"
            >
              Cancel
            </cds-button>
            <cds-button
              kind="secondary"
              size="${N(n.variant)}"
              @click="${()=>console.log("Back clicked")}"
            >
              Back
            </cds-button>
            <cds-button
              size="${N(n.variant)}"
              @click="${()=>console.log("Submit clicked")}"
            >
              Submit
            </cds-button>
          </div>
        </c4p-tearsheet-footer>
      </c4p-preview-tearsheet>
    `},ve={title:"Preview/Tearsheet",parameters:{docs:{page:Z}},argTypes:{decorator:{control:{type:"boolean"},description:"When true, an AI Label decorator is shown in the header."},isFlush:{control:{type:"boolean"},description:"When true, the main content area takes full width without padding."},variant:{control:{type:"radio"},options:["wide","narrow"],description:"Tearsheet variant"},hideCloseButton:{control:{type:"boolean"},description:"Hide the close button in the header."},disableHeaderCollapse:{control:{type:"boolean"},description:"Disable header collapse/expand on scroll."},closeIconDescription:{control:{type:"text"},description:"Accessible label for the close icon button."},open:{control:{type:"boolean"},description:"Controls whether the tearsheet is open"},title:{control:{type:"text"},description:"Title of the tearsheet"},label:{control:{type:"text"},description:"Label above the title"},showDescription:{control:{type:"boolean"},description:"Show description text"},showTitleIcon:{control:{type:"boolean"},description:"Show icon before title"},showHeaderActions:{control:{type:"boolean"},description:"Show action buttons in header"},showSummaryContent:{control:{type:"boolean"},description:"Show summary content panel"},preventCloseOnClickOutside:{control:{type:"boolean"},description:"Prevent closing when clicking outside"}},decorators:[n=>s` <style>
          #main-content {
            padding: 0;
          }
        </style>
        ${n()}`]};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'wide',
    open: false,
    decorator: false,
    isFlush: false,
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
  render: args => {
    return html\`
      <style>
        \${styles}
      </style>
      <div class="\${storyPrefix}story-container">
        <div class="\${storyPrefix}story-header"></div>
        <div id="page-content-selector" class="\${storyPrefix}story-content">
          <cds-button @click="\${toggleButton}" aria-haspopup="dialog"
            >Toggle tearsheet</cds-button
          >
        </div>
      </div>

      <c4p-preview-tearsheet
        variant="\${args.variant}"
        ?open="\${args.open}"
        ?prevent-close-on-click-outside="\${args.preventCloseOnClickOutside}"
        @c4p-preview-tearsheet-collapse-change="\${handleCollapseChange}"
      >
        <c4p-tearsheet-header
          ?hide-close-button="\${args.hideCloseButton}"
          ?disable-header-collapse="\${args.disableHeaderCollapse}"
        >
          <c4p-tearsheet-header-content title="\${args.title}">
            \${getDecorator(args.decorator)}
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
          <div slot="main-content" ?is-flush="\${args.isFlush}">
            \${args.showSummaryContent ? html\`<div class="summaryPanelTrigger">
                  <cds-button
                    size="md"
                    kind="ghost"
                    label="Open right panel"
                    @click="\${toggleSummaryPanel}"
                    aria-expanded="false"
                    aria-controls="summary-panel"
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
  args: {
    variant: 'wide',
    decorator: false,
    isFlush: false,
    hideCloseButton: false,
    disableHeaderCollapse: false
  },
  render: args => {
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

      <c4p-preview-tearsheet
        variant="\${args.variant ?? 'wide'}"
        @c4p-preview-tearsheet-collapse-change="\${handleCollapseChange}"
      >
        <c4p-tearsheet-header
          ?hide-close-button="\${args.hideCloseButton}"
          ?disable-header-collapse="\${args.disableHeaderCollapse}"
        >
          <c4p-tearsheet-header-content title="Title of the tearsheet">
            \${getDecorator(args.decorator)}
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
          <div slot="main-content" ?is-flush="\${args.isFlush}">
            <!-- Button to open influencer panel on small screens -->
            <div class="influencerPanelTrigger">
              <cds-button
                size="md"
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
          variant="\${args.variant ?? 'wide'}"
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
  args: {
    variant: 'wide',
    decorator: false,
    isFlush: false,
    hideCloseButton: false,
    disableHeaderCollapse: false
  },
  render: args => {
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

      <c4p-preview-tearsheet
        variant="\${args.variant ?? 'wide'}"
        @c4p-preview-tearsheet-collapse-change="\${handleCollapseChange}"
      >
        <c4p-tearsheet-header
          ?hide-close-button="\${args.hideCloseButton}"
          ?disable-header-collapse="\${args.disableHeaderCollapse}"
        >
          <c4p-tearsheet-header-content title="Title of the tearsheet">
            \${getDecorator(args.decorator)}
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
          <div slot="main-content" ?is-flush="\${args.isFlush}">
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
          variant="\${args.variant ?? 'wide'}"
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
  args: {
    decorator: false,
    isFlush: false,
    hideCloseButton: false,
    disableHeaderCollapse: false
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
        variant="narrow"
        @c4p-preview-tearsheet-collapse-change="\${handleCollapseChange}"
      >
        <c4p-tearsheet-header
          ?hide-close-button="\${args.hideCloseButton}"
          ?disable-header-collapse="\${args.disableHeaderCollapse}"
        >
          <c4p-tearsheet-header-content title="Title of the tearsheet">
            \${getDecorator(args.decorator)}
            <label slot="label">Label</label>
            \${description}
            <div slot="header-actions">
              <cds-button size="sm" kind="tertiary">
                Primary action \${iconLoader(Add16, {
      slot: 'icon'
    })}
              </cds-button>
            </div>
          </c4p-tearsheet-header-content>
        </c4p-tearsheet-header>

        <c4p-tearsheet-influencer
          >\${progressIndicator(true)}</c4p-tearsheet-influencer
        >

        <c4p-tearsheet-body>
          <div slot="main-content" ?is-flush="\${args.isFlush}">
            <div class="influencerPanelTrigger">
              <cds-button
                size="md"
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
                size="md"
                kind="ghost"
                label="Open right panel"
                @click="\${toggleSummaryPanel}"
              >
                \${iconLoader(RightPanelClose32, {
      slot: 'icon'
    })}
              </cds-button>
            </div>
            \${dummyContent}
          </div>
          <c4p-tearsheet-summary-content slot="summary-content">
            \${summaryContent}
          </c4p-tearsheet-summary-content>
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
      </c4p-preview-tearsheet>
    \`;
  }
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\` <step-tearsheet-preview></step-tearsheet-preview> \`;
  }
}`,...f.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\` <step-tearsheet-preview horizontal></step-tearsheet-preview> \`;
  }
}`,...j.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <style>
        \${styles}
      </style>
      <stacking-tearsheet-demo tearsheet-type="wide"></stacking-tearsheet-demo>
    \`;
  }
}`,...$.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <style>
        \${styles}
      </style>
      <stacking-tearsheet-demo tearsheet-type="mixed"></stacking-tearsheet-demo>
    \`;
  }
}`,...k.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'wide',
    open: false,
    decorator: false,
    isFlush: false,
    hideCloseButton: false,
    disableHeaderCollapse: false,
    showSummaryContent: true
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
        @c4p-preview-tearsheet-collapse-change="\${handleCollapseChange}"
      >
        <c4p-tearsheet-header
          ?hide-close-button="\${args.hideCloseButton}"
          ?disable-header-collapse="\${args.disableHeaderCollapse}"
        >
          <c4p-tearsheet-header-content title="Title of the tearsheet">
            \${getDecorator(args.decorator)}
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
          <div slot="main-content" ?is-flush="\${args.isFlush}">
            \${args.showSummaryContent ? html\`<div class="summaryPanelTrigger">
                  <cds-button
                    size="md"
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
}`,...C.parameters?.docs?.source}}};const ge=["Default","WithInfluencer","WithTabs","narrowTearsheet","withSteps","withStepsAndHorizontalProgressIndicator","StackingTearsheets","StackingNarrowTearsheets","StackingWithDifferentSizes","WithCustomFooterActions"],xe=Object.freeze(Object.defineProperty({__proto__:null,Default:v,StackingNarrowTearsheets:w,StackingTearsheets:$,StackingWithDifferentSizes:k,WithCustomFooterActions:C,WithInfluencer:g,WithTabs:x,__namedExportsOrder:ge,default:ve,narrowTearsheet:y,withSteps:f,withStepsAndHorizontalProgressIndicator:j},Symbol.toStringTag,{value:"Module"}));function X(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...J(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(ee,{of:xe}),`
`,t.jsx(e.h1,{id:"tearsheet-new-composable",children:"Tearsheet (New Composable)"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"💡 This is the new composable tearsheet component with enhanced features including stacking support, collapsible headers, responsive and improved composability."}),`
`]}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/tearsheet/usage/",rel:"nofollow",children:"Usage guidelines"})}),`
`,t.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,t.jsx(e.p,{children:"A tearsheet is a mostly full-screen type of dialog that keeps users in-context and focused by bringing actionable content front and center while revealing parts of the UI behind it. There is also a narrow variant of the tearsheet."}),`
`,t.jsx(e.p,{children:"A tearsheet is composed of up to five zones, providing flexibility based on the content: a heading area, an optional navigation area positioned just below the heading, an optional influencer area on the left, a main content area, an optional summary details area on the right, and a footer section."}),`
`,t.jsx(e.p,{children:"The implementation is designed to deliver a composable tearsheet that’s both feature-rich and highly customizable. In web components this is achieved through a slot-based composition model with distinct sections."}),`
`,t.jsxs(e.p,{children:["By default, the tearsheet is controlled through the ",t.jsx(e.code,{children:"open"})," attribute on ",t.jsx(e.code,{children:"c4p-preview-tearsheet"}),"."]}),`
`,t.jsx(e.p,{children:"The next-generation tearsheet uses a slot-based composition model with the following sub-components:"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:t.jsx(e.code,{children:"c4p-preview-tearsheet"})})," - Main container"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:t.jsx(e.code,{children:"c4p-tearsheet-header"})})," - Header section"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:t.jsx(e.code,{children:"c4p-tearsheet-header-content"})})," - Header content area"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:t.jsx(e.code,{children:"c4p-tearsheet-navigation-bar"})})," - Rendered at the bottom of the header and can render tabs"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:t.jsx(e.code,{children:"c4p-tearsheet-scroller"})})," - Can be used inside the navigation bar as a trigger to collapse or expand the header"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:t.jsx(e.code,{children:"c4p-tearsheet-body"})})," - Main content area"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:t.jsx(e.code,{children:"c4p-tearsheet-influencer"})})," - Left-side panel for contextual content"]}),`
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
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"Scalable & Composable"}),": Built with composable subcomponents that can be easily extended and customized for different use cases"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"Collapsible Header"}),": Smart header that automatically collapses on scroll to maximize content space and can be disabled via the ",t.jsx(e.code,{children:"disable-header-collapse"})," attribute on ",t.jsx(e.code,{children:"c4p-tearsheet-header"})]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"Better Developer Experience"}),": Clear component boundaries through named slots and dedicated subcomponents"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"Responsive Layout"}),": Influencer and summary content can move into side panels on small screens and narrow tearsheets"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"Stacking Support"}),": Multiple tearsheets can stack when wrapped in ",t.jsx(e.code,{children:"c4p-tearsheet-stack"})]}),`
`]}),`
`,t.jsx(e.h2,{id:"getting-started",children:"Getting Started"}),`
`,t.jsx(e.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import '@carbon/ibm-products-web-components/es/components/tearsheet-preview/index.js';
// Import Carbon components for content
import '@carbon/web-components/es/components/text-input/index.js';
import '@carbon/web-components/es/components/textarea/index.js';
import '@carbon/web-components/es/components/button/index.js';
`})}),`
`,t.jsx(e.h2,{id:"migration-from-legacy-tearsheet",children:"Migration from Legacy Tearsheet"}),`
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
      title="Create resource">
      <div slot="description">Configure settings</div>
    </c4p-tearsheet-header-content>
  </c4p-tearsheet-header>
  
  <c4p-tearsheet-body slot="body">
    <div slot="main-content">Content</div>
  </c4p-tearsheet-body>
</c4p-preview-tearsheet>
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
    <cds-button kind="secondary">Cancel</cds-button>
    <cds-button kind="primary">Create</cds-button>
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
`,t.jsxs(e.p,{children:["To enable stacking for multiple tearsheets, wrap them in a ",t.jsx(e.code,{children:"<c4p-tearsheet-stack>"})," component. This opt-in approach provides better performance and explicit control over which tearsheets participate in stacking. The ",t.jsx(e.code,{children:"stack-step-size"})," attribute controls the visual offset between stacked tearsheets (",t.jsx(e.code,{children:"sm"}),", ",t.jsx(e.code,{children:"md"}),", or ",t.jsx(e.code,{children:"lg"}),")."]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<c4p-tearsheet-stack stack-step-size="lg">
  <!-- First tearsheet -->
  <c4p-preview-tearsheet id="tearsheet-1" open>
    <c4p-tearsheet-header slot="header">
      <cds-button slot="header-actions">
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
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{children:"Slot"}),t.jsx(e.th,{children:"Description"})]})}),t.jsxs(e.tbody,{children:[t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"label"})}),t.jsx(e.td,{children:"Optional label text above title"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"title-start"})}),t.jsx(e.td,{children:"Content before title (e.g., icons)"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"title-end"})}),t.jsx(e.td,{children:"Content after title (e.g., badges)"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"description"})}),t.jsx(e.td,{children:"Custom description content"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"decorator"})}),t.jsx(e.td,{children:"AI label or other decorative elements"})]})]})]}),`
`,t.jsx(e.h3,{id:"body-slots",children:"Body Slots"}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{children:"Slot"}),t.jsx(e.th,{children:"Description"})]})}),t.jsxs(e.tbody,{children:[t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"main-content"})}),t.jsx(e.td,{children:"Primary content area"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"summary-content"})}),t.jsxs(e.td,{children:["Right-side panel (use ",t.jsx(e.code,{children:"c4p-tearsheet-summary-content"}),")"]})]})]})]}),`
`,t.jsx(e.h3,{id:"footer-slots",children:"Footer Slots"}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{children:"Slot"}),t.jsx(e.th,{children:"Description"})]})}),t.jsx(e.tbody,{children:t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"actions"})}),t.jsx(e.td,{children:"Action buttons (typically Cancel, Submit)"})]})})]})]})}function Z(n={}){const{wrapper:e}={...J(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(X,{...n})}):X(n)}const qe=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"}));export{xe as T,qe as t};
