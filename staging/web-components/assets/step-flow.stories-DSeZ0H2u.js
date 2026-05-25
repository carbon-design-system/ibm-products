import{z as x,r as $,E as l,x as a,n as k,A as w}from"./iframe-elyKelMt.js";import{e as I}from"./index-C_cPmxn3.js";import{S as C}from"./step-group-CBYz1uil.js";import{r as n}from"./state-CDWJB1vq.js";import"./progress-step-BkCVkwWu.js";import"./stack-BhqksI2M.js";import"./code-snippet-skeleton-VNhpqN9d.js";import"./tearsheet-CX_1FD7F.js";import{r as F,t as P}from"./manageFocusTrap-bnxW_f3C.js";import"./button-w0uhnFgR.js";import"./button-skeleton-CnlXpHYr.js";import"./grid-ogFqHaYA.js";import"./side-panel-DhkXwH6M.js";import"./text-input-BWJEX6Y6.js";import"./text-input-skeleton-CE5lcRAg.js";import"./preload-helper-PPVm8Dsz.js";import"./collection-helpers-Cnsts1JG.js";import"./icon-loader-zidJCUlI.js";import"./class-map-B13Nnaxe.js";import"./skeleton-text-_TYdBvZL.js";import"./16-Ci-Iy0jC.js";import"./16-D3CzXAJU.js";import"./icon-button-Dofr4B9E.js";import"./definition-tooltip-Dp2DFrs6.js";import"./host-listener-DN1-XIwx.js";import"./popover-content-Ce9L8LkO.js";import"./floating-controller-O5_OP1Uj.js";import"./query-D0jTsbLw.js";import"./16-iEvmxbCa.js";import"./style-map-ChEn7cSP.js";import"./16-D0aIqdwb.js";import"./query-assigned-elements-CblsR2sJ.js";import"./layer-DMJ4i_DD.js";import"./modal-label-Bxr9tEPB.js";import"./inline-loading-ByzNoFp0.js";import"./16-DSuDh1sQ.js";import"./20-CvqWH37X.js";import"./consume-DI2TaawZ.js";import"./16-803qFA73.js";import"./16-D5maUdCH.js";import"./index-CrWKEZ58.js";import"./action-set-BsgTT4xg.js";import"./ref-D7-SbDGI.js";import"./form-BTpacr1I.js";import"./validity-CzEiVmrf.js";import"./if-non-empty-pb-0iAaH.js";import"./16-DeKHrdu0.js";const z="#storybook-root #main-content{padding:0}",S=x(z);var O=Object.defineProperty,T=Object.getOwnPropertyDescriptor,h=(e,t,s,r)=>{for(var o=r>1?void 0:r?T(t,s):t,i=e.length-1,p;i>=0;i--)(p=e[i])&&(o=(r?p(t,s,o):p(o))||o);return r&&o&&O(t,s,o),o};let c=class extends I($){constructor(){super(...arguments),this.narrow=!1,this._open=!1,this._email="",this._city="",this._state="",this._trapFocusAPI=null,this._stepInfo=new C}_onButtonClick(){this._open=!0}_handleCancelButton(){this._open=!1,this._stepInfo.reset()}_handleBackButton(){const{currentStep:e}=this._stepInfo.data;if(e!==0)return this._stepInfo.handlePrevious()}_handleNextButton(){const{currentStep:e,totalSteps:t}=this._stepInfo.data;if(e+1===t){this._open=!1,this._stepInfo.reset();return}return this._stepInfo.handleNext()}_handleEmailInput(e){const t=structuredClone(this._stepInfo.data.formState);t.email=e.target.value,this._stepInfo.updateFormState=t}_handleCityInput(e){const t=structuredClone(this._stepInfo.data.formState);t.city=e.target.value,this._stepInfo.updateFormState=t}_handleStateInput(e){const t=structuredClone(this._stepInfo.data.formState);t.state=e.target.value,this._stepInfo.updateFormState=t}connectedCallback(){super.connectedCallback(),this._stepInfo.updateTotalStepCount=3}disconnectedCallback(){this._trapFocusAPI?.cleanup()}firstUpdated(e){F(this.shadowRoot?.querySelector("c4p-tearsheet"))}updated(e){e.has("_open")&&this._open&&(this._trapFocusAPI=P())}render(){const{formState:e,totalSteps:t,currentStep:s}=this._stepInfo.data;return a` <cds-button
        type="button"
        size="md"
        @click="${this._onButtonClick}"
      >
        Start create flow
      </cds-button>
      <c4p-tearsheet
        class=${"step-tearsheet-with-util"}
        selector-initial-focus=${"#tearsheet-story-text-input-a"}
        ?open=${this._open}
        width=${this.narrow?"narrow":"wide"}
        influencer-placement=${"left"}
        prevent-close-on-click-outside
      >
        <!-- default slotted content -->
        <step-group>
          ${s+1===1?a`<div>
                <cds-stack gap="6" orientation="horizontal">
                  <cds-text-input
                    label="Email"
                    id="tearsheet-story-text-input-a"
                    value=${this._email}
                    @input="${this._handleEmailInput}"
                  ></cds-text-input>
                </cds-stack>
              </div>`:l}
          ${s+1===2?a`<div>
                <cds-stack gap="6" orientation="horizontal">
                  <cds-text-input
                    label="City"
                    id="tearsheet-story-text-input-city"
                    value=${this._city}
                    @input="${this._handleCityInput}"
                  ></cds-text-input>
                  <cds-text-input
                    label="State"
                    id="tearsheet-story-text-input-state"
                    value=${this._state}
                    @input="${this._handleStateInput}"
                  ></cds-text-input>
                </cds-stack>
              </div>`:l}
          ${s+1===3?a`<div>
                <!-- //cspell: disable -->
                <cds-code-snippet
                  type="multi"
                  copy-text=""
                  maxcollapsednumberofrows="15"
                  maxexpandednumberofrows=""
                  mincollapsednumberofrows="3"
                  minexpandednumberofrows=""
                  show-less-text="Show less"
                  show-more-text="Show more"
                  feedback=""
                  feedback-timeout="0"
                  tooltip-content="Copy to clipboard"
                >
                  ${JSON.stringify(e,null,2)}
                </cds-code-snippet>
                <!-- //cspell: enable -->
              </div>`:l}
        </step-group>

        <!-- slotted header label -->
        <span slot="label">Optional label for context</span>

        <!-- slotted header title -->
        <span slot="title">Create tearsheet title</span>

        <!-- slotted header description -->
        <span slot="description">
          This is a description for the tearsheet, providing an opportunity to
          describe the flow over a couple of lines in the header of the
          tearsheet.
        </span>

        <!-- slotted action items cds-buttons -->
        <cds-button
          slot="actions"
          kind=${"ghost"}
          @click=${this._handleCancelButton}
        >
          Cancel
        </cds-button>
        <cds-button
          slot="actions"
          kind=${"secondary"}
          @click=${this._handleBackButton}
        >
          Back
        </cds-button>
        <cds-button slot="actions" @click=${this._handleNextButton}>
          ${s+1<t?"Next":"Submit"}
        </cds-button>
        <!-- slotted influencer -->
        <div slot="influencer">
          <cds-progress-indicator
            vertical
            class=${"custom-step-util__dummy-content-block"}
          >
            <cds-progress-step
              label="First step"
              state=${s+1===1?"current":"complete"}
            ></cds-progress-step>
            <cds-progress-step
              label="Second step"
              state=${s+1===2?"current":s+1<2?"incomplete":"complete"}
            ></cds-progress-step>
            <cds-progress-step
              label="Third step"
              state=${s+1===3?"current":s+1<3?"incomplete":"complete"}
            ></cds-progress-step>
          </cds-progress-indicator>
        </div>
      </c4p-tearsheet>`}};c.styles=S;h([k({type:Boolean})],c.prototype,"narrow",2);h([n()],c.prototype,"_open",2);h([n()],c.prototype,"_email",2);h([n()],c.prototype,"_city",2);h([n()],c.prototype,"_state",2);c=h([w("step-tearsheet")],c);const N=":host(step-full-page){display:grid;block-size:100vh;color:var(--cds-text-primary, #161616);grid-template-rows:minmax(auto,100%)}:host(step-full-page) .step-full-page-with-util{display:flex;overflow:hidden;padding:0;margin:0;max-block-size:100%}:host(step-full-page) .create-full-page-header{padding-block-end:1.5rem}:host(step-full-page) .create-full-page-header h2{font-size:var(--cds-heading-04-font-size, 1.75rem);font-weight:var(--cds-heading-04-font-weight, 400);line-height:var(--cds-heading-04-line-height, 1.28572);letter-spacing:var(--cds-heading-04-letter-spacing, 0)}:host(step-full-page) .create-full-page-wrapper{display:flex;overflow:auto;flex-direction:column;flex-grow:1;justify-content:space-between;background-color:var(--cds-layer-01, #f4f4f4);block-size:calc(100% - 1.5rem);color:var(--cds-text-primary, #161616);overflow-x:hidden;padding-block-start:1.5rem}:host(step-full-page) .create-influencer{box-sizing:border-box;padding:1.5rem 2rem;border-inline-end:1px solid var(--cds-border-subtle);inline-size:256px;min-inline-size:256px}:host(step-full-page) .create-full-page-subtitle{font-size:var(--cds-heading-compact-01-font-size, .875rem);font-weight:var(--cds-heading-compact-01-font-weight, 600);line-height:var(--cds-heading-compact-01-line-height, 1.28572);letter-spacing:var(--cds-heading-compact-01-letter-spacing, .16px)}:host(step-full-page) .create-full-page-description{font-size:var(--cds-body-01-font-size, .875rem);font-weight:var(--cds-body-01-font-weight, 400);line-height:var(--cds-body-01-line-height, 1.42857);letter-spacing:var(--cds-body-01-letter-spacing, .16px)}:host(step-full-page) .create-full-page-layer{inline-size:100%}:host(step-full-page) .create-full-page-actions{display:grid;block-size:64px;border-block-start:1px solid var(--cds-border-subtle);grid-auto-rows:minmax(auto,auto);grid-template-columns:repeat(6,1fr);font-size:var(--cds-body-compact-01-font-size, .875rem);font-weight:var(--cds-body-compact-01-font-weight, 400);line-height:var(--cds-body-compact-01-line-height, 1.28572);letter-spacing:var(--cds-body-compact-01-letter-spacing, .16px)}:host(step-full-page) .create-full-page-action__cancel{grid-column:span 4}:host(step-full-page) ::part(grid){max-inline-size:100%}",E=x(N);var j=Object.defineProperty,A=Object.getOwnPropertyDescriptor,m=(e,t,s,r)=>{for(var o=r>1?void 0:r?A(t,s):t,i=e.length-1,p;i>=0;i--)(p=e[i])&&(o=(r?p(t,s,o):p(o))||o);return r&&o&&j(t,s,o),o};let d=class extends I($){constructor(){super(...arguments),this.narrow=!1,this._open=!1,this._email="",this._city="",this._state="",this._trapFocusAPI=null,this._stepInfo=new C}_handleCancelButton(){this._open=!1,this._stepInfo.reset()}_handleBackButton(){const{currentStep:e}=this._stepInfo.data;if(e!==0)return this._stepInfo.handlePrevious()}_handleNextButton(){const{currentStep:e,totalSteps:t}=this._stepInfo.data;if(e+1===t){this._open=!1,this._stepInfo.reset();return}return this._stepInfo.handleNext()}_handleEmailInput(e){const t=structuredClone(this._stepInfo.data.formState);t.email=e.target.value,this._stepInfo.updateFormState=t}_handleCityInput(e){const t=structuredClone(this._stepInfo.data.formState);t.city=e.target.value,this._stepInfo.updateFormState=t}_handleStateInput(e){const t=structuredClone(this._stepInfo.data.formState);t.state=e.target.value,this._stepInfo.updateFormState=t}connectedCallback(){super.connectedCallback(),this._stepInfo.updateTotalStepCount=3}disconnectedCallback(){this._trapFocusAPI?.cleanup()}firstUpdated(e){F(this.shadowRoot?.querySelector("step-full-page"))}updated(e){e.has("_open")&&this._open&&(this._trapFocusAPI=P())}render(){const{formState:e,totalSteps:t,currentStep:s}=this._stepInfo.data;return a` <div class=${"step-full-page-with-util"} ?open=${this._open}>
      <!-- slotted influencer -->
      <div class="create-influencer" slot="influencer">
        <cds-progress-indicator
          vertical
          class=${"custom-step-util__dummy-content-block"}
        >
          <cds-progress-step
            label="First step"
            state=${s+1===1?"current":"complete"}
          ></cds-progress-step>
          <cds-progress-step
            label="Second step"
            state=${s+1===2?"current":s+1<2?"incomplete":"complete"}
          ></cds-progress-step>
          <cds-progress-step
            label="Third step"
            state=${s+1===3?"current":s+1<3?"incomplete":"complete"}
          ></cds-progress-step>
        </cds-progress-indicator>
      </div>
      <cds-layer level="1" class="create-full-page-layer">
        <div class="create-full-page-wrapper">
          <div class="upper-step-content">
            <cds-grid class="sb-grid">
              <cds-column lg="8" sm="4">
                <div class="create-full-page-header">
                  <!-- slotted header label -->
                  <!-- <span slot="label">Optional label for context</span> -->

                  <!-- slotted header title -->
                  <h2>Step ${s+1}</h2>
                  <p class="create-full-page-subtitle">
                    Optional subtitle to display on a step
                  </p>

                  <!-- slotted header description -->
                  <p class="create-full-page-description">
                    Optional description to display on a step
                  </p>
                </div>
              </cds-column>
            </cds-grid>

            <!-- default slotted content -->
            <step-group>
              <cds-grid class="sb-grid">
                <cds-column lg="8" sm="4">
                  ${s+1===1?a`<div>
                        <cds-stack gap="6" orientation="horizontal">
                          <cds-text-input
                            label="Email"
                            id="tearsheet-story-text-input-a"
                            value=${this._email}
                            @input="${this._handleEmailInput}"
                          ></cds-text-input>
                        </cds-stack>
                      </div>`:l}
                  ${s+1===2?a`<div>
                        <cds-stack gap="6" orientation="horizontal">
                          <cds-text-input
                            label="City"
                            id="tearsheet-story-text-input-city"
                            value=${this._city}
                            @input="${this._handleCityInput}"
                          ></cds-text-input>
                          <cds-text-input
                            label="State"
                            id="tearsheet-story-text-input-state"
                            value=${this._state}
                            @input="${this._handleStateInput}"
                          ></cds-text-input>
                        </cds-stack>
                      </div>`:l}
                  ${s+1===3?a`<div>
                        <!-- //cspell: disable -->
                        <cds-code-snippet
                          type="multi"
                          copy-text=""
                          maxcollapsednumberofrows="15"
                          maxexpandednumberofrows=""
                          mincollapsednumberofrows="3"
                          minexpandednumberofrows=""
                          show-less-text="Show less"
                          show-more-text="Show more"
                          feedback=""
                          feedback-timeout="0"
                          tooltip-content="Copy to clipboard"
                        >
                          ${JSON.stringify(e,null,2)}
                        </cds-code-snippet>
                        <!-- //cspell: enable -->
                      </div>`:l}
                </cds-column>
              </cds-grid>
            </step-group>
          </div>
          <div class="create-full-page-actions">
            <cds-button
              slot="actions"
              kind=${"ghost"}
              class="create-full-page-action__cancel"
              @click=${this._handleCancelButton}
            >
              Cancel
            </cds-button>
            <cds-button
              slot="actions"
              kind=${"secondary"}
              @click=${this._handleBackButton}
            >
              Back
            </cds-button>
            <cds-button slot="actions" @click=${this._handleNextButton}>
              ${s+1<t?"Next":"Submit"}
            </cds-button>
          </div>
        </div>
      </cds-layer>
    </div>`}};d.styles=E;m([k({type:Boolean})],d.prototype,"narrow",2);m([n()],d.prototype,"_open",2);m([n()],d.prototype,"_email",2);m([n()],d.prototype,"_city",2);m([n()],d.prototype,"_state",2);d=m([w("step-full-page")],d);const D=":host(step-side-panel) .progress-indicator{margin-block-end:1rem}",H=x(D);var J=Object.defineProperty,U=Object.getOwnPropertyDescriptor,_=(e,t,s,r)=>{for(var o=r>1?void 0:r?U(t,s):t,i=e.length-1,p;i>=0;i--)(p=e[i])&&(o=(r?p(t,s,o):p(o))||o);return r&&o&&J(t,s,o),o};const f="c4p--step-side-panel";let u=class extends I($){constructor(){super(...arguments),this.open=!0,this._email="",this._city="",this._state="",this._stepInfo=new C}_openHandler(){this.open=!this.open}_handleCancelButton(){this._openHandler(),this._stepInfo.reset()}_handleBackButton(){const{currentStep:e}=this._stepInfo.data;if(e!==0)return this._stepInfo.handlePrevious()}_handleNextButton(){const{currentStep:e,totalSteps:t}=this._stepInfo.data;if(e+1===t){this._openHandler(),this._stepInfo.reset();return}return this._stepInfo.handleNext()}_handleEmailInput(e){const t=structuredClone(this._stepInfo.data.formState);t.email=e.target.value,this._stepInfo.updateFormState=t}_handleCityInput(e){const t=structuredClone(this._stepInfo.data.formState);t.city=e.target.value,this._stepInfo.updateFormState=t}_handleStateInput(e){const t=structuredClone(this._stepInfo.data.formState);t.state=e.target.value,this._stepInfo.updateFormState=t}connectedCallback(){super.connectedCallback(),this._stepInfo.updateTotalStepCount=3}render(){const{formState:e,totalSteps:t,currentStep:s}=this._stepInfo.data;return a`
      <div>
        <cds-button @click=${this._openHandler}>Create partitions</cds-button>
        <c4p-side-panel
          @c4p-side-panel-closed=${this._openHandler}
          class="${f}"
          ?animate-title=${!1}
          include-overlay
          ?open=${this.open}
          size="md"
          title="Create partitions"
        >
          <div slot="subtitle">
            Specify the details of the partitions you're creating
          </div>
          <div slot="below-title">
            <cds-progress-indicator class="progress-indicator">
              <cds-progress-step
                label="First step"
                state=${s+1===1?"current":"complete"}
              ></cds-progress-step>
              <cds-progress-step
                label="Second step"
                state=${s+1===2?"current":s+1<2?"incomplete":"complete"}
              ></cds-progress-step>
              <cds-progress-step
                label="Third step"
                state=${s+1===3?"current":s+1<3?"incomplete":"complete"}
              ></cds-progress-step>
            </cds-progress-indicator>
          </div>
          <h3
            class="${f}__form-title-text ${f}__content-text"
          >
            Core configuration
          </h3>
          <p
            class="${f}__form-description-text ${f}__content-text"
          >
            We recommend you fill out and evaluate these details at a minimum
            before deploying your topic.
          </p>
          <step-group>
            ${s+1===1?a` <cds-text-input
                  label="Email"
                  id="tearsheet-story-text-input-a"
                  value=${this._email}
                  @input="${this._handleEmailInput}"
                ></cds-text-input>`:l}
            ${s+1===2?a` <cds-text-input
                  label="City"
                  id="tearsheet-story-text-input-city"
                  value=${this._city}
                  @input="${this._handleCityInput}"
                ></cds-text-input>`:l}
            ${s+1===2?a` <cds-text-input
                  label="State"
                  id="tearsheet-story-text-input-state"
                  value=${this._state}
                  @input="${this._handleStateInput}"
                ></cds-text-input>`:l}
            ${s+1===3?a`<div>
                  <!-- //cspell: disable -->
                  <cds-code-snippet
                    type="multi"
                    copy-text=""
                    maxcollapsednumberofrows="15"
                    maxexpandednumberofrows=""
                    mincollapsednumberofrows="3"
                    minexpandednumberofrows=""
                    show-less-text="Show less"
                    show-more-text="Show more"
                    feedback=""
                    feedback-timeout="0"
                    tooltip-content="Copy to clipboard"
                  >
                    ${JSON.stringify(e,null,2)}
                  </cds-code-snippet>
                  <!-- //cspell: enable -->
                </div>`:l}
          </step-group>
          <cds-button
            slot="actions"
            kind="ghost"
            @click=${this._handleCancelButton}
            >Cancel</cds-button
          >
          <cds-button
            slot="actions"
            kind="secondary"
            @click=${this._handleBackButton}
            >Back</cds-button
          >
          <cds-button slot="actions" @click=${this._handleNextButton}>
            ${s+1<t?"Next":"Submit"}
          </cds-button>
        </c4p-side-panel>
      </div>
    `}};u.styles=H;_([n()],u.prototype,"open",2);_([n()],u.prototype,"_email",2);_([n()],u.prototype,"_city",2);_([n()],u.prototype,"_state",2);u=_([w("step-side-panel")],u);const B=({narrow:e})=>a`
    <style>
      ${S}
    </style>
    <step-tearsheet .narrow=${e}></step-tearsheet>
  `,q=()=>a`
  <style>
    ${S}
  </style>
  <step-full-page> </step-full-page>
`,R=()=>a`
  <style>
    ${S}
  </style>
  <step-side-panel> </step-side-panel>
`,g={args:{},render:B,name:"Tearsheet"},b={args:{narrow:!0},render:B,name:"Tearsheet narrow"},v={args:{},render:q,name:"Full page"},y={args:{},render:R,name:"SidePanel"},At={title:"Utilities/Step flows"};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {},
  render: renderTemplate,
  name: 'Tearsheet'
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    narrow: true
  },
  render: renderTemplate,
  name: 'Tearsheet narrow'
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {},
  render: renderFullPageTemplate,
  name: 'Full page'
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {},
  render: renderSidePanel,
  name: 'SidePanel'
}`,...y.parameters?.docs?.source}}};const Dt=["Tearsheet","TearsheetNarrow","FullPage","SidePanel"];export{v as FullPage,y as SidePanel,g as Tearsheet,b as TearsheetNarrow,Dt as __namedExportsOrder,At as default};
