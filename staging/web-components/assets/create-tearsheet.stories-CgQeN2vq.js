import{r as O,x as i,n as u,c as x,A as V,E as g}from"./iframe-BoCQr2sp.js";import{r as p}from"./state-BGVRmIbP.js";import{i as M}from"./keyed-DM2vjm71.js";import{H as A}from"./host-listener-DN1-XIwx.js";import{i as U}from"./icon-loader-BqrhyFhm.js";import{_ as j}from"./16-BpKA4nzT.js";import{s as L}from"./tearsheet-summary-content-D0U-RQID.js";import{_ as N}from"./decorate-BsyuvM50.js";import"./grid-D9gYdhuz.js";import"./button-zsE1n1Bb.js";import"./button-skeleton-BKVbevEW.js";import"./text-input-CihfnmK8.js";import"./text-input-skeleton-CkDGdCUu.js";import"./textarea-skeleton-BEVhfAbf.js";import"./number-input-skeleton-Da2tCDWl.js";import"./progress-step-Cq2ECkia.js";import"./radio-button-skeleton-Dg5KhJVQ.js";import"./tile-group-PDt0Qve1.js";import"./toggle-DrZ1z1W0.js";import"./toggle-skeleton-rD8es-9V.js";import"./stack-D5i9EEop.js";import"./checkbox-zO52dlv2.js";import"./checkbox-skeleton-Btgi-N2Z.js";import"./toast-notification-C0YMAMZO.js";import"./actionable-notification-button-DrZq2WVf.js";import"./callout-notification-C38ljjG6.js";import"./inline-loading-Cb5YBp5X.js";var f;let I=(f=class extends O{constructor(...e){super(...e),this.stackStepSize="lg",this._isActive=!1}connectedCallback(){super.connectedCallback(),L.setStackStepSize(this.stackStepSize),this._isActive=!0,this.dispatchEvent(new CustomEvent("c4p-tearsheet-stack-connected",{bubbles:!0,composed:!0,detail:{stackStepSize:this.stackStepSize}}))}disconnectedCallback(){super.disconnectedCallback(),this._isActive&&(L.reset(),this._isActive=!1)}updated(e){super.updated(e),e.has("stackStepSize")&&(L.setStackStepSize(this.stackStepSize),this.dispatchEvent(new CustomEvent("c4p-tearsheet-stack-step-size-changed",{bubbles:!0,composed:!0,detail:{stackStepSize:this.stackStepSize}})))}render(){return i`<slot></slot>`}},f.styles=[],f);N([u({type:String,attribute:"stack-step-size"})],I.prototype,"stackStepSize",void 0);I=N([x("c4p-tearsheet-stack")],I);const B="@keyframes step-entrance{0%{opacity:0;transform:translateY(-.75rem)}to{opacity:1;transform:translateY(0)}}.c4p--create-tearsheet__launcher{display:block;inline-size:100%}.c4p--create-tearsheet__influencer{padding:1rem}.c4p--create-tearsheet__progress{margin-block-start:1.5rem}.c4p--create-tearsheet__body{padding:0}.c4p--create-tearsheet__show-influencer{display:none;margin-block-end:1rem}@media(max-width:41.98rem){.c4p--create-tearsheet__show-influencer{display:inline-flex;flex-grow:0}}.c4p--create-tearsheet__show-influencer::part(button){padding-left:0}.c4p--create-tearsheet__step{margin:1.5rem 0 0;opacity:1}.c4p--create-tearsheet__step--animated{animation:step-entrance .4s;animation-fill-mode:forwards;animation-timing-function:cubic-bezier(.5,0,.1,1)}.c4p--create-tearsheet__step-title{font-size:var(--cds-heading-03-font-size, 1.25rem);font-weight:var(--cds-heading-03-font-weight, 400);line-height:var(--cds-heading-03-line-height, 1.4);letter-spacing:var(--cds-heading-03-letter-spacing, 0);margin:0 0 1rem}.c4p--create-tearsheet__step-subtitle{font-size:var(--cds-heading-compact-01-font-size, .875rem);font-weight:var(--cds-heading-compact-01-font-weight, 600);line-height:var(--cds-heading-compact-01-line-height, 1.28572);letter-spacing:var(--cds-heading-compact-01-letter-spacing, .16px);margin:0 0 .5rem;color:var(--cds-text-primary, #161616)}.c4p--create-tearsheet__step-description{font-size:var(--cds-body-01-font-size, .875rem);font-weight:var(--cds-body-01-font-weight, 400);line-height:var(--cds-body-01-line-height, 1.42857);letter-spacing:var(--cds-body-01-letter-spacing, .16px);margin:0 0 1.5rem;color:var(--cds-text-secondary, #525252);max-inline-size:36rem}.c4p--create-tearsheet__step-header,.c4p--create-tearsheet__step-body,.c4p--create-tearsheet__step-fieldset,.c4p--create-tearsheet__step-content{padding:0;margin:0}.c4p--create-tearsheet__step-fieldset{min-inline-size:0;border:0}.c4p--create-tearsheet__step-fieldset legend{font-size:var(--cds-heading-compact-01-font-size, .875rem);font-weight:var(--cds-heading-compact-01-font-weight, 600);line-height:var(--cds-heading-compact-01-line-height, 1.28572);letter-spacing:var(--cds-heading-compact-01-letter-spacing, .16px);padding:0;margin:0 0 1rem;color:var(--cds-text-secondary, #525252)}.c4p--create-tearsheet__step-item{margin:0 0 1rem}.c4p--create-tearsheet__step-content--intro-layout :host(cds-tile-group) fieldset{display:flex;flex-wrap:wrap}.c4p--create-tearsheet__step-fieldset>.c4p--create-tearsheet__step-item:last-child,.c4p--create-tearsheet__step-content>.c4p--create-tearsheet__step-item:last-child{margin-block-end:0}.c4p--create-tearsheet__inline-error{margin-block-start:.5rem}.c4p--create-tearsheet__toggle{margin-block-start:1rem}.c4p--create-tearsheet__intro-step{min-block-size:25rem}.c4p--create-tearsheet__category-fieldset{display:flex;flex-wrap:wrap;min-inline-size:0;margin:0;padding:0;border:0}.c4p--create-tearsheet__category-legend{font-size:var(--cds-label-01-font-size, .75rem);font-weight:var(--cds-label-01-font-weight, 400);line-height:var(--cds-label-01-line-height, 1.33333);letter-spacing:var(--cds-label-01-letter-spacing, .32px);margin:0 0 .5rem;padding:0;color:var(--cds-text-secondary, #525252)}.c4p--create-tearsheet__category-group{display:flex;flex-wrap:wrap;gap:1rem;inline-size:100%}.c4p--create-tearsheet__category-group-fieldset{display:flex;flex-wrap:wrap;gap:1rem}.c4p--create-tearsheet__category-tile-wrapper{display:flex}.c4p--create-tearsheet__category-tile{position:relative;display:flex;min-block-size:8.75rem;align-items:flex-end;justify-content:flex-start}.c4p--create-tearsheet__tile-content{display:flex;flex-direction:column;gap:.75rem;padding:1rem;text-align:left}.c4p--create-tearsheet__tile-content h4{font-size:var(--cds-heading-02-font-size, 1rem);font-weight:var(--cds-heading-02-font-weight, 600);line-height:var(--cds-heading-02-line-height, 1.5);letter-spacing:var(--cds-heading-02-letter-spacing, 0);margin:0}.c4p--create-tearsheet__tile-content p{font-size:var(--cds-body-01-font-size, .875rem);font-weight:var(--cds-body-01-font-weight, 400);line-height:var(--cds-body-01-line-height, 1.42857);letter-spacing:var(--cds-body-01-letter-spacing, .16px);color:var(--cds-text-secondary, #525252)}.c4p--create-tearsheet__tile-icon{inline-size:4rem;block-size:4rem;fill:var(--cds-layer-accent-01, #e0e0e0);stroke:var(--cds-icon-primary, #161616);stroke-linecap:round;stroke-linejoin:round;stroke-width:.125rem}.c4p--create-tearsheet cds-text-input.c4p--create-tearsheet__topic-input{display:block;margin-block-end:1rem}.c4p--create-tearsheet .cds--btn-set .cds--btn.cds--btn--disabled{box-shadow:-.0625rem 0 0 0 var(--cds-button-separator, #e0e0e0)}.c4p--create-tearsheet .cds--fieldset{margin-block-end:0}.c4p--create-tearsheet .cds--grid+.cds--grid{padding-block-start:0;margin-block-start:1.5rem}.c4p--create-tearsheet .cds--tile-group div{display:flex;flex-wrap:wrap}",R=V(B);var G=Object.defineProperty,q=Object.getOwnPropertyDescriptor,m=(t,e,r,n)=>{for(var s=n>1?void 0:n?q(e,r):e,o=t.length-1,c;o>=0;o--)(c=t[o])&&(s=(n?c(e,r,s):c(s))||s);return n&&s&&G(e,r,s),s};const l="c4p--create-tearsheet",K=`${l}__step`;let h=class extends O{constructor(){super(...arguments),this.title="",this.subtitle="",this.description="",this.hasFieldset=!1,this.fieldsetLegendText="",this.introLayout=!1}render(){return i`
      <section class="${K}">
        <div class="${l}__step-header">
          <h2 class="${l}__step-title">${this.title}</h2>
          ${this.subtitle?i`
                <p class="${l}__step-subtitle">${this.subtitle}</p>
              `:""}
          ${this.description?i`
                <p class="${l}__step-description">
                  ${this.description}
                </p>
              `:""}
          <div class="${l}__step-description">
            <slot name="description"></slot>
          </div>
        </div>

        <div class="${l}__step-body">
          ${this.hasFieldset?i`
                <fieldset class="${l}__step-fieldset">
                  <legend>${this.fieldsetLegendText}</legend>
                  <div class="${l}__step-item">
                    <slot></slot>
                  </div>
                </fieldset>
              `:i`
                <div
                  class="${l}__step-content${this.introLayout?` ${l}__step-content--intro-layout`:""}">
                  <div
                    class="${l}__step-item${this.introLayout?` ${l}__step-item--intro-layout`:""}">
                    <slot></slot>
                  </div>
                </div>
              `}
        </div>
      </section>
    `}};h.styles=R;m([u({type:String})],h.prototype,"title",2);m([u({type:String})],h.prototype,"subtitle",2);m([u({type:String})],h.prototype,"description",2);m([u({type:Boolean,attribute:"has-fieldset"})],h.prototype,"hasFieldset",2);m([u({type:String,attribute:"fieldset-legend-text"})],h.prototype,"fieldsetLegendText",2);m([u({type:Boolean,attribute:"intro-layout"})],h.prototype,"introLayout",2);h=m([x("create-tearsheet-step")],h);var F=Object.defineProperty,$=(t,e,r,n)=>{for(var s=void 0,o=t.length-1,c;o>=0;o--)(c=t[o])&&(s=c(e,r,s)||s);return s&&F(e,r,s),s};const a="c4p--create-tearsheet",z=()=>({topicName:"",topicDescription:"",topicVersion:"",location:"",partitions:1,replicas:1,retentionTime:1,messageRetention:"one-day"}),P=class P extends A(O){constructor(){super(...arguments),this.open=!1,this.currentStep=0,this.isSubmitting=!1,this.influencerPanelOpen=!1,this.formData=z(),this.handleOpen=async()=>{this.currentStep=0,this.isSubmitting=!1,this.formData=z(),this.resetVariantState(),this.open=!0,await this.updateComplete,this.focusCurrentStepElement()},this.handleClose=()=>{this.open=!1},this.resetTearsheetState=()=>{this.currentStep=0,this.isSubmitting=!1,this.formData=z(),this.resetVariantState()},this.handleCancel=e=>{e?.preventDefault(),e?.stopPropagation(),this.handleClose(),this.resetTearsheetState()},this.handleBack=async()=>{this.currentStep>0&&(this.currentStep--,await this.updateComplete,this.focusCurrentStepElement())},this.handleInputChange=e=>r=>{const n=r.target,o=typeof this.formData[e]=="number"?Number(n.value):n.value;this.formData={...this.formData,[e]:Number.isNaN(o)?0:o}},this.handleToggleInfluencer=()=>{this.influencerPanelOpen=!this.influencerPanelOpen},this.handleInfluencerPanelClose=()=>{this.influencerPanelOpen=!1}}get triggerLabel(){return"CreateTearsheet"}get tearsheetTitle(){return"Create topic"}get tearsheetDescription(){return"Specify details for the new topic you want to create"}get tearsheetLabel(){return""}get submitButtonText(){return"Create"}get nextButtonText(){return"Next"}get backButtonText(){return"Back"}get cancelButtonText(){return"Cancel"}get submitDelay(){return 750}get showInfluencerOnIntroStep(){return!1}getVisibleSteps(){return[]}getStepLabels(){return[]}getCurrentStepKey(){return this.getVisibleSteps()[this.currentStep]}resetVariantState(){}handleVariantNext(){return!1}handleVariantSubmit(){}isStepInvalid(e,r){return!1}isNextDisabledForStep(e){return!1}renderStep(e){return g}focusCurrentStepElement(){}async handleNext(){await this.handleVariantNext()||this.currentStep<this.getVisibleSteps().length-1&&(this.currentStep++,await this.updateComplete,this.focusCurrentStepElement())}async handleSubmit(e){e?.preventDefault(),e?.stopPropagation(),this.isSubmitting=!0,await new Promise(r=>setTimeout(r,this.submitDelay)),this.handleVariantSubmit(),this.handleClose(),this.resetTearsheetState()}renderProgressIndicator(){const e=this.getVisibleSteps(),r=this.getCurrentStepKey();if(!this.showInfluencerOnIntroStep&&r==="intro")return g;const n=e.filter(w=>w!=="intro"),s=this.getStepLabels(),o=r==="intro"?-1:n.indexOf(r),c=s.length;return M(c,i`
        <cds-progress-indicator vertical class="${a}__progress" current-index="${o}">
          ${s.map((w,C)=>i`
              <cds-progress-step
                label="${w.label}"
                description="${w.secondaryLabel}"
                ?complete=${C<o}
                ?current=${C===o}
                ?invalid=${this.isStepInvalid(n[C],C)}
              ></cds-progress-step>
            `)}
        </cds-progress-indicator>
      `)}render(){const e=this.getVisibleSteps(),r=this.currentStep===e.length-1,n=this.getCurrentStepKey(),s=this.showInfluencerOnIntroStep||n!=="intro",o=this.open?`Close ${this.triggerLabel}`:`Open ${this.triggerLabel}`;return i`
      <cds-button kind="primary" class="${a}__launcher" @click=${this.handleOpen}>
        ${o}
      </cds-button>
      ${this.open?i`
            <c4p-preview-tearsheet
              class="${a}"
              open
              variant="wide"
              prevent-close-on-click-outside
              @c4p-preview-tearsheet-closed=${this.resetTearsheetState}
            >
              <c4p-tearsheet-header>
                <c4p-tearsheet-header-content title="${this.tearsheetTitle}">
                  ${this.tearsheetLabel?i`<label slot="label">${this.tearsheetLabel}</label>`:g}
                  <div slot="description" style="margin-top: 8px;">
                    ${this.tearsheetDescription}
                  </div>
                </c4p-tearsheet-header-content>
              </c4p-tearsheet-header>

              ${s?i`
                    <c4p-tearsheet-influencer
                      ?influencer-panel-open=${this.influencerPanelOpen}
                      @cds-tearsheet-influencer-closed=${this.handleInfluencerPanelClose}
                    >
                      <div class="${a}__influencer">
                        ${this.renderProgressIndicator()}
                      </div>
                    </c4p-tearsheet-influencer>
                  `:g}

              <c4p-tearsheet-body>
                <div slot="main-content" class="${a}__body">
                  <cds-button
                    size="sm"
                    kind="ghost"
                    class="${a}__show-influencer"
                    @click=${this.handleToggleInfluencer}
                  >
                    Show Influencer
                    ${U(j,{slot:"icon"})}
                  </cds-button>
                  ${M(n,this.renderStep(n))}
                </div>
              </c4p-tearsheet-body>

              <c4p-tearsheet-footer
                variant="wide"
                .actions=${[{kind:"ghost",label:this.cancelButtonText,onClick:this.handleCancel},{kind:"secondary",label:this.backButtonText,onClick:this.handleBack,disabled:this.currentStep===0||this.isSubmitting},{kind:"primary",label:this.isSubmitting?i`${r?this.submitButtonText:this.nextButtonText} <cds-inline-loading></cds-inline-loading>`:r?this.submitButtonText:this.nextButtonText,onClick:()=>r?this.handleSubmit():this.handleNext(),disabled:this.isSubmitting||this.isNextDisabledForStep(n)}]}
              >
              </c4p-tearsheet-footer>
            </c4p-preview-tearsheet>
          `:g}
    `}};P.styles=R;let d=P;$([p()],d.prototype,"open");$([p()],d.prototype,"currentStep");$([p()],d.prototype,"isSubmitting");$([p()],d.prototype,"influencerPanelOpen");$([p()],d.prototype,"formData");var H=Object.defineProperty,W=Object.getOwnPropertyDescriptor,T=(t,e,r,n)=>{for(var s=n>1?void 0:n?W(e,r):e,o=t.length-1,c;o>=0;o--)(c=t[o])&&(s=(n?c(e,r,s):c(s))||s);return n&&s&&H(e,r,s),s};let _=class extends d{constructor(){super(...arguments),this.shouldReject=!1,this.hasSubmitError=!1,this.selectedCategory="standard",this.handleBack=async()=>{this.currentStep>0&&(this.currentStep--,this.hasSubmitError=!1,await this.updateComplete,this.focusCurrentStepElement())},this.handleCategoryChange=async t=>{this.selectedCategory!==t&&(this.selectedCategory=t,this.currentStep=0,this.hasSubmitError=!1,await this.updateComplete)},this.handleToggleError=t=>{this.shouldReject=t.detail.toggled},this.handleTopicNameInput=t=>{this.handleInputChange("topicName")(t),t.target.value.length&&(this.hasSubmitError=!1)}}connectedCallback(){super.connectedCallback(),this.classList.add(`${a}--with-intro`)}get triggerLabel(){return"CreateTearsheet"}resetVariantState(){this.shouldReject=!1,this.hasSubmitError=!1,this.selectedCategory="standard"}getCategoryConditionalStep(){return this.selectedCategory==="plus"?"plus-conditional":this.selectedCategory==="standard"?"standard-conditional":null}getVisibleSteps(){const t=this.getCategoryConditionalStep();return["intro",...t?[t]:[],"topic-name","partitions","message-retention"]}getStepLabels(){const t=this.getCategoryConditionalStep();return[...t==="plus-conditional"?[{label:"Conditional step",secondaryLabel:"Plus category only"}]:[],...t==="standard-conditional"?[{label:"Standard step only",secondaryLabel:"Standard category only"}]:[],{label:"Topic name",secondaryLabel:"Name your topic"},{label:"Partitions",secondaryLabel:"Configure partitions"},{label:"Message retention",secondaryLabel:"Set retention policy"}]}handleVariantNext(){return this.getCurrentStepKey()==="topic-name"&&this.shouldReject&&this.formData.topicName.trim()?(this.hasSubmitError=!0,!0):(this.hasSubmitError=!1,!1)}handleVariantSubmit(){console.log("Form submitted with data:",{category:this.selectedCategory,...this.formData})}isNextDisabledForStep(t){return t==="topic-name"?!this.formData.topicName.trim():!1}focusCurrentStepElement(){requestAnimationFrame(()=>{const t=this.getCurrentStepKey();let e=null;switch(t){case"intro":e=this.renderRoot.querySelector(`.${a}__body cds-radio-tile`);break;case"topic-name":e=this.renderRoot.querySelector(`.${a}__body cds-text-input`);break;case"partitions":e=this.renderRoot.querySelector(`.${a}__body cds-number-input`);break;case"message-retention":e=this.renderRoot.querySelector(`.${a}__body cds-radio-button-group cds-radio-button`);break;default:return}e?.focus()})}renderStep(t){switch(t){case"intro":return i`
          <create-tearsheet-step
            title="Select a category"
            description="This is the category of item you will create"
            intro-layout
          >
            <fieldset class="${a}__category-fieldset">
              <legend class="${a}__category-legend">Categories</legend>
              <cds-tile-group
                class="${a}__category-group"
                fieldset-class-name="${a}__category-group-fieldset"
                legend="Categories"
                value-selected=${this.selectedCategory}
              >
                <div class="${a}__category-tile-wrapper">
                <cds-radio-tile
                  value="standard"
                  class="${a}__category-tile"
                  ?checked=${this.selectedCategory==="standard"}
                  @click=${()=>this.handleCategoryChange("standard")}
                >
                  <div class="${a}__tile-content">
                    <img
                      class="${a}__tile-icon"
                      src=${new URL("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='80'%20height='80'%20viewBox='0%200%2080%2080'%20fill='none'%3e%3cdefs%3e%3clinearGradient%20id='no-data-a'%20x1='18.35'%20y1='74.17'%20x2='61.65'%20y2='49.17'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23525252'%20stop-opacity='0.05'%20/%3e%3cstop%20offset='1'%20stop-opacity='0.1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='no-data-b'%20x1='15.16'%20y1='43.34'%20x2='40.31'%20y2='43.34'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23e0e0e0'%20/%3e%3cstop%20offset='1'%20stop-color='%23c6c6c6'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='no-data-c'%20x1='40'%20y1='43.34'%20x2='68.88'%20y2='43.34'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23a8a8a8'%20/%3e%3cstop%20offset='1'%20stop-color='%23c6c6c6'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='no-data-d'%20x1='18.35'%20y1='30.83'%20x2='61.65'%20y2='5.83'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f4f4f4'%20/%3e%3cstop%20offset='1'%20stop-color='%23e0e0e0'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='none'%20d='M0%200h80v80H0z'%20/%3e%3cpath%20fill='url(%23no-data-a)'%20d='M40%2078.34L11.13%2061.67%2040%2045.01l28.86%2016.66L40%2078.34z'%20/%3e%3cpath%20fill='url(%23no-data-b)'%20d='M40%2068.35L11.12%2051.68l.01-33.35L40%2034.99v33.36z'%20/%3e%3cpath%20fill='url(%23no-data-c)'%20d='M68.88%2051.68L40%2068.35V34.99l28.87-16.66.01%2033.35z'%20/%3e%3cpath%20fill='url(%23no-data-d)'%20d='M40%2034.99L11.13%2018.33%2040%201.66l28.87%2016.67L40%2034.99z'%20/%3e%3cpath%20fill='%23c6c6c6'%20d='M25.97%2026.67l28.67-16.55-.42-.24-28.68%2016.56.43.23z'%20/%3e%3cpath%20fill='%23fff'%20d='M40%2035.24L11.13%2018.57v-.24l.21-.12%2028.87%2016.67-.21.11v.25zM21.49%2033.33l-8.2-4.73.01-5.69%208.19%204.74v5.68z'%20/%3e%3c/svg%3e%3c!--%20Made%20with%20Bob%20--%3e",import.meta.url).href}
                      alt=""
                    />
                    <h4>Standard</h4>
                  </div>
                </cds-radio-tile>
                <cds-radio-tile
                  value="premium"
                  class="${a}__category-tile"
                  ?checked=${this.selectedCategory==="premium"}
                  @click=${()=>this.handleCategoryChange("premium")}
                >
                  <div class="${a}__tile-content">
                    <img
                      class="${a}__tile-icon"
                      src=${new URL("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='80'%20height='80'%20viewBox='0%200%2080%2080'%20fill='none'%3e%3cdefs%3e%3clinearGradient%20id='no-data-a'%20x1='18.35'%20y1='74.17'%20x2='61.65'%20y2='49.17'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23525252'%20stop-opacity='0.05'%20/%3e%3cstop%20offset='1'%20stop-opacity='0.1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='no-data-b'%20x1='15.16'%20y1='43.34'%20x2='40.31'%20y2='43.34'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23e0e0e0'%20/%3e%3cstop%20offset='1'%20stop-color='%23c6c6c6'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='no-data-c'%20x1='40'%20y1='43.34'%20x2='68.88'%20y2='43.34'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23a8a8a8'%20/%3e%3cstop%20offset='1'%20stop-color='%23c6c6c6'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='no-data-d'%20x1='18.35'%20y1='30.83'%20x2='61.65'%20y2='5.83'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f4f4f4'%20/%3e%3cstop%20offset='1'%20stop-color='%23e0e0e0'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='none'%20d='M0%200h80v80H0z'%20/%3e%3cpath%20fill='url(%23no-data-a)'%20d='M40%2078.34L11.13%2061.67%2040%2045.01l28.86%2016.66L40%2078.34z'%20/%3e%3cpath%20fill='url(%23no-data-b)'%20d='M40%2068.35L11.12%2051.68l.01-33.35L40%2034.99v33.36z'%20/%3e%3cpath%20fill='url(%23no-data-c)'%20d='M68.88%2051.68L40%2068.35V34.99l28.87-16.66.01%2033.35z'%20/%3e%3cpath%20fill='url(%23no-data-d)'%20d='M40%2034.99L11.13%2018.33%2040%201.66l28.87%2016.67L40%2034.99z'%20/%3e%3cpath%20fill='%23c6c6c6'%20d='M25.97%2026.67l28.67-16.55-.42-.24-28.68%2016.56.43.23z'%20/%3e%3cpath%20fill='%23fff'%20d='M40%2035.24L11.13%2018.57v-.24l.21-.12%2028.87%2016.67-.21.11v.25zM21.49%2033.33l-8.2-4.73.01-5.69%208.19%204.74v5.68z'%20/%3e%3c/svg%3e%3c!--%20Made%20with%20Bob%20--%3e",import.meta.url).href}
                      alt=""
                    />
                    <h4>Premium</h4>
                  </div>
                </cds-radio-tile>
                <cds-radio-tile
                  value="plus"
                  class="${a}__category-tile"
                  ?checked=${this.selectedCategory==="plus"}
                  @click=${()=>this.handleCategoryChange("plus")}
                >
                  <div class="${a}__tile-content">
                    <img
                      class="${a}__tile-icon"
                      src=${new URL("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='80'%20height='80'%20viewBox='0%200%2080%2080'%20fill='none'%3e%3cdefs%3e%3clinearGradient%20id='no-data-a'%20x1='18.35'%20y1='74.17'%20x2='61.65'%20y2='49.17'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23525252'%20stop-opacity='0.05'%20/%3e%3cstop%20offset='1'%20stop-opacity='0.1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='no-data-b'%20x1='15.16'%20y1='43.34'%20x2='40.31'%20y2='43.34'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23e0e0e0'%20/%3e%3cstop%20offset='1'%20stop-color='%23c6c6c6'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='no-data-c'%20x1='40'%20y1='43.34'%20x2='68.88'%20y2='43.34'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23a8a8a8'%20/%3e%3cstop%20offset='1'%20stop-color='%23c6c6c6'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='no-data-d'%20x1='18.35'%20y1='30.83'%20x2='61.65'%20y2='5.83'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f4f4f4'%20/%3e%3cstop%20offset='1'%20stop-color='%23e0e0e0'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='none'%20d='M0%200h80v80H0z'%20/%3e%3cpath%20fill='url(%23no-data-a)'%20d='M40%2078.34L11.13%2061.67%2040%2045.01l28.86%2016.66L40%2078.34z'%20/%3e%3cpath%20fill='url(%23no-data-b)'%20d='M40%2068.35L11.12%2051.68l.01-33.35L40%2034.99v33.36z'%20/%3e%3cpath%20fill='url(%23no-data-c)'%20d='M68.88%2051.68L40%2068.35V34.99l28.87-16.66.01%2033.35z'%20/%3e%3cpath%20fill='url(%23no-data-d)'%20d='M40%2034.99L11.13%2018.33%2040%201.66l28.87%2016.67L40%2034.99z'%20/%3e%3cpath%20fill='%23c6c6c6'%20d='M25.97%2026.67l28.67-16.55-.42-.24-28.68%2016.56.43.23z'%20/%3e%3cpath%20fill='%23fff'%20d='M40%2035.24L11.13%2018.57v-.24l.21-.12%2028.87%2016.67-.21.11v.25zM21.49%2033.33l-8.2-4.73.01-5.69%208.19%204.74v5.68z'%20/%3e%3c/svg%3e%3c!--%20Made%20with%20Bob%20--%3e",import.meta.url).href}
                      alt=""
                    />
                    <h4>Plus</h4>
                  </div>
                </cds-radio-tile>
                </div>
              </cds-tile-group>
            </fieldset>
          </create-tearsheet-step>
        `;case"plus-conditional":return this.selectedCategory!=="plus"?i``:i`
          <create-tearsheet-step title="Conditional step">
            <p>This step will only show for plus create flows.</p>
          </create-tearsheet-step>
        `;case"standard-conditional":return this.selectedCategory!=="standard"?i``:i`
          <create-tearsheet-step title="Standard step only">
            <p>This step will only show for standard create flows.</p>
          </create-tearsheet-step>
        `;case"topic-name":return i`
          <create-tearsheet-step
            title="Topic name"
            description="This is the unique name used to recognize your topic"
          >
            <cds-stack gap="5">
              <cds-text-input
                label="Topic name"
                placeholder="Enter topic name"
                value=${this.formData.topicName}
                @input=${this.handleTopicNameInput}
                ?invalid=${this.hasSubmitError&&!this.formData.topicName.trim()}
                invalid-text="This is a required field"
                required
              ></cds-text-input>
              <cds-text-input
                label="Topic description (optional)"
                placeholder="Enter topic description"
                value=${this.formData.topicDescription}
                @input=${this.handleInputChange("topicDescription")}
              ></cds-text-input>
              <cds-text-input
                label="Topic version (optional)"
                placeholder="Enter topic version"
                value=${this.formData.topicVersion}
                @input=${this.handleInputChange("topicVersion")}
              ></cds-text-input>
              ${this.hasSubmitError?i`
                    <div class="${a}__inline-error" role="alert">
                      Resolve errors to continue
                    </div>
                  `:""}
              <cds-toggle
                label-text="Simulate error"
                size="sm"
                ?checked=${this.shouldReject}
                @cds-toggle-changed=${this.handleToggleError}
              ></cds-toggle>
            </cds-stack>
          </create-tearsheet-step>
        `;case"partitions":return i`
          <create-tearsheet-step
            title="Partitions"
            description="One or more partitions make up a topic. A partition is an ordered list of messages."
          >
            <cds-stack gap="5">
              <cds-number-input
                label="Partitions"
                helper-text="1 partition is sufficient for getting started but production systems often have more."
                value=${this.formData.partitions}
                min="1"
                max="100"
                @input=${this.handleInputChange("partitions")}
              ></cds-number-input>
            </cds-stack>
          </create-tearsheet-step>
        `;case"message-retention":return i`
          <create-tearsheet-step
            title="Message retention"
            description="This is how long messages are retained before they are deleted."
          >
            <cds-radio-button-group
              legend-text="Message retention"
              name="message-retention"
              value=${this.formData.messageRetention}
              orientation="vertical"
              @cds-radio-button-group-changed=${e=>{this.formData={...this.formData,messageRetention:e.detail.value}}}
            >
              <cds-radio-button
                label-text="A day"
                value="one-day"
              ></cds-radio-button>
              <cds-radio-button
                label-text="A week"
                value="one-week"
              ></cds-radio-button>
              <cds-radio-button
                label-text="A month"
                value="one-month"
              ></cds-radio-button>
            </cds-radio-button-group>
          </create-tearsheet-step>
        `;default:return i``}}};T([p()],_.prototype,"shouldReject",2);T([p()],_.prototype,"hasSubmitError",2);T([p()],_.prototype,"selectedCategory",2);_=T([x("create-tearsheet-with-intro")],_);var Y=Object.defineProperty,J=Object.getOwnPropertyDescriptor,D=(t,e,r,n)=>{for(var s=n>1?void 0:n?J(e,r):e,o=t.length-1,c;o>=0;o--)(c=t[o])&&(s=(n?c(e,r,s):c(s))||s);return n&&s&&Y(e,r,s),s};let S=class extends d{constructor(){super(...arguments),this.shouldReject=!1,this.hasSubmitError=!1,this.shouldIncludeAdditionalStep=!1,this.handleBack=async()=>{this.currentStep>0&&(this.currentStep--,this.hasSubmitError=!1,await this.updateComplete,this.focusCurrentStepElement())},this.handleToggleError=t=>{this.shouldReject=t.detail.toggled},this.handleIncludeAdditionalStep=t=>{const e=t.detail.checked,r=this.getCurrentStepKey();this.shouldIncludeAdditionalStep=e,!e&&r==="standard-conditional"&&(this.currentStep=0)},this.handleTopicNameInput=t=>{this.handleInputChange("topicName")(t),t.target.value.length&&(this.hasSubmitError=!1)}}getVisibleSteps(){const t=["topic-information"];return this.shouldIncludeAdditionalStep&&t.push("standard-conditional"),t.push("location","partitions","message-retention"),t}getStepLabels(){const t=[{label:"Topic information",secondaryLabel:""},{label:"Location",secondaryLabel:""},{label:"Partitions",secondaryLabel:""},{label:"Message retention",secondaryLabel:""}];return this.shouldIncludeAdditionalStep&&t.splice(1,0,{label:"Dynamic step",secondaryLabel:""}),t}get submitDelay(){return 1e3}resetVariantState(){this.shouldReject=!1,this.hasSubmitError=!1,this.shouldIncludeAdditionalStep=!1}handleVariantNext(){return this.getCurrentStepKey()==="topic-information"&&this.shouldReject&&this.formData.topicName.trim()?(this.hasSubmitError=!0,!0):(this.hasSubmitError=!1,!1)}isNextDisabledForStep(t){switch(t){case"topic-information":return!this.formData.topicName.trim();case"location":return!this.formData.location.trim();case"partitions":return this.formData.partitions<1||this.formData.replicas<1;case"message-retention":return!this.formData.messageRetention;default:return!1}}focusCurrentStepElement(){requestAnimationFrame(()=>{const t=this.getCurrentStepKey();let e=null;switch(t){case"topic-information":e=this.renderRoot.querySelector(`.${a}__body cds-text-input`);break;case"location":e=this.renderRoot.querySelector(`.${a}__body cds-text-input`);break;case"partitions":e=this.renderRoot.querySelector(`.${a}__body cds-number-input`);break;case"message-retention":e=this.renderRoot.querySelector(`.${a}__body cds-radio-button-group cds-radio-button`);break;default:return}e?.focus()})}renderStep(t){switch(t){case"topic-information":return i`
          <create-tearsheet-step
            title="Topic name"
            subtitle="This is the unique name used to recognize your topic"
            fieldset-legend-text="Topic information"
            has-fieldset
          >
            <div slot="description">
              It will also be used by your producers and consumers as part of
              the connection information, so make it something easy to
              recognize.
              <cds-link href="#">Learn more.</cds-link>
            </div>
                <cds-text-input
                  class="${a}__topic-input"
                  label="Topic name"
                  placeholder="Enter topic name"
                  value=${this.formData.topicName}
                  @input=${this.handleTopicNameInput}
                  ?invalid=${this.hasSubmitError&&!this.formData.topicName.trim()}
                  invalid-text="This is a required field"
                  required
                ></cds-text-input>
                <cds-text-input
                  class="${a}__topic-input"
                  label="Topic description (optional)"
                  placeholder="Enter topic description"
                  value=${this.formData.topicDescription}
                  @input=${this.handleInputChange("topicDescription")}
                ></cds-text-input>
                <cds-text-input
                  class="${a}__topic-input"
                  label="Topic version (optional)"
                  placeholder="Enter topic version"
                  value=${this.formData.topicVersion}
                  @input=${this.handleInputChange("topicVersion")}
                ></cds-text-input>
                  ${this.hasSubmitError?i`
                        <cds-inline-notification
                          kind="error"
                          title="Error"
                          subtitle="Resolve errors to continue"
                          hide-close-button
                        ></cds-inline-notification>
                      `:i``}
                  <cds-toggle
                    class="${a}__error--toggle"
                    size="sm"
                    label-text="Simulate error"
                    ?checked=${this.shouldReject}
                    @cds-toggle-changed=${this.handleToggleError}
                  ></cds-toggle>
                  <cds-checkbox
                    label-text="Include additional step"
                    ?checked=${this.shouldIncludeAdditionalStep}
                    @cds-checkbox-changed=${this.handleIncludeAdditionalStep}
                  ></cds-checkbox>
            
           
            </create-tearsheet-step>
          `;case"location":return i`
          <create-tearsheet-step
            title="Location"
            subtitle="Provide additional configuration for this topic"
            fieldset-legend-text="Location information"
            has-fieldset
          >
            <cds-text-input
              label="Location"
              placeholder="Enter location"
              value=${this.formData.location}
              @input=${this.handleInputChange("location")}
            ></cds-text-input>
          </create-tearsheet-step>
        `;case"standard-conditional":return i`
          <create-tearsheet-step
            title="Dynamic step"
            subtitle="Dynamic step subtitle"
            description="This is an example showing how to include a dynamic step into the CreateTearsheet"
          >
            dynamic step content
          </create-tearsheet-step>
        `;case"partitions":return i`
          <create-tearsheet-step
            title="Partitions"
            subtitle="One or more partitions make up a topic. A partition is an ordered list of messages."
            description="Partitions are distributed across the brokers in order to increase the scalability of your topic. You can also use them to distribute messages across the members of a consumer group."
            fieldset-legend-text="Partition information"
            has-fieldset
          >
                <cds-number-input
                  label="Partitions"
                  helper-text="1 partition is sufficient for getting started but production systems often have more."
                  value=${this.formData.partitions}
                  min="1"
                  max="100"
                  @input=${this.handleInputChange("partitions")}
                ></cds-number-input>
          </create-tearsheet-step>
        `;case"message-retention":return i`
          <create-tearsheet-step
            title="Message retention"
            subtitle="This is how long messages are retained before they are deleted."
            description="If your messages are not read by a consumer within this time, they will be missed."
            fieldset-legend-text="Message retention scheduling"
            has-fieldset
          >
                <cds-radio-button-group
                  legend-text="Message retention"
                  name="message-retention"
                  value=${this.formData.messageRetention}
                  orientation="vertical"
                  @cds-radio-button-group-changed=${e=>{this.formData={...this.formData,messageRetention:e.detail.value}}}
                >
                  <cds-radio-button
                    label-text="A day"
                    value="one-day"
                  ></cds-radio-button>
                  <cds-radio-button
                    label-text="A week"
                    value="one-week"
                  ></cds-radio-button>
                  <cds-radio-button
                    label-text="A month"
                    value="one-month"
                  ></cds-radio-button>
                </cds-radio-button-group>
          </create-tearsheet-step>
        `;default:return i``}}};D([p()],S.prototype,"shouldReject",2);D([p()],S.prototype,"hasSubmitError",2);D([p()],S.prototype,"shouldIncludeAdditionalStep",2);S=D([x("create-tearsheet-multi-step")],S);var Q=Object.defineProperty,X=Object.getOwnPropertyDescriptor,E=(t,e,r,n)=>{for(var s=n>1?void 0:n?X(e,r):e,o=t.length-1,c;o>=0;o--)(c=t[o])&&(s=(n?c(e,r,s):c(s))||s);return n&&s&&Q(e,r,s),s};let k=class extends d{constructor(){super(...arguments),this.stepOneInvalid=!0,this.stepTwoInvalid=!1,this.handleTopicNameChange=t=>{this.handleInputChange("topicName")(t);const e=t.target;this.stepOneInvalid=!e.value.trim()},this.handleTopicDescriptionChange=t=>{this.handleInputChange("topicDescription")(t)},this.handlePartitionsChange=t=>{this.handleInputChange("partitions")(t);const e=t.target,r=Number(e.value);this.stepTwoInvalid=Number.isNaN(r)||r<1||r>100}}get triggerLabel(){return"CreateTearsheet"}getVisibleSteps(){return["topic-name","partitions"]}getStepLabels(){return[{label:"Topic name",secondaryLabel:"Required field validation"},{label:"Partitions",secondaryLabel:"Numeric validation"}]}resetVariantState(){this.stepOneInvalid=!0,this.stepTwoInvalid=!1}isStepInvalid(t){return t==="topic-name"?this.stepOneInvalid:t==="partitions"?this.stepTwoInvalid:!1}isNextDisabledForStep(t){return t==="topic-name"?this.stepOneInvalid:t==="partitions"?this.stepTwoInvalid:!1}handleVariantSubmit(){console.log("Form submitted with data:",{topicName:this.formData.topicName,topicDescription:this.formData.topicDescription,partitions:this.formData.partitions})}focusCurrentStepElement(){requestAnimationFrame(()=>{const t=this.getCurrentStepKey();let e="";switch(t){case"topic-name":e="cds-text-input";break;case"partitions":e="cds-number-input";break;default:return}this.renderRoot.querySelector(`.${a}__body ${e}`)?.focus()})}renderStep(t){switch(t){case"topic-name":return i`
          <create-tearsheet-step
            title="Topic name"
            description="This is the unique name used to recognize your topic"
            has-fieldset
            fieldset-legend-text="Topic information"
          >
            <cds-stack gap="5">
              <cds-text-input
                label="Topic name"
                placeholder="Enter topic name"
                value=${this.formData.topicName}
                @input=${this.handleTopicNameChange}
                ?invalid=${this.stepOneInvalid}
                invalid-text="This is a required field"
                required
              ></cds-text-input>
              <cds-text-input
                label="Topic description (optional)"
                placeholder="Enter topic description"
                value=${this.formData.topicDescription}
                @input=${this.handleTopicDescriptionChange}
              ></cds-text-input>
            </cds-stack>
          </create-tearsheet-step>
        `;case"partitions":return i`
          <create-tearsheet-step
            title="Partitions"
            subtitle="One or more partitions make up a topic. A partition is an ordered list of messages."
            description="Partitions are distributed across the brokers in order to increase the scalability of your topic. You can also use them to distribute messages across the members of a consumer group."
            has-fieldset
            fieldset-legend-text="Partition information"
          >
            <cds-stack gap="5">
              <cds-number-input
                label="Partitions"
                helper-text="1 partition is sufficient for getting started but, production systems often have more."
                value=${this.formData.partitions}
                min="1"
                max="100"
                ?invalid=${this.stepTwoInvalid}
                invalid-text="Max partitions is 100, min is 1"
                @input=${this.handlePartitionsChange}
              ></cds-number-input>
            </cds-stack>
          </create-tearsheet-step>
        `;default:return i``}}};E([p()],k.prototype,"stepOneInvalid",2);E([p()],k.prototype,"stepTwoInvalid",2);k=E([x("create-tearsheet-step-in-error-state")],k);const Z={title:"Patterns/Create flows/CreateTearsheet",parameters:{docs:{description:{component:"The CreateTearsheet pattern provides a multi-step workflow interface for creating resources or completing complex tasks. It demonstrates how to compose the Tearsheet component with step management for guided user experiences."}}}},b={render:()=>i`<create-tearsheet-multi-step></create-tearsheet-multi-step>`},y={render:()=>i`<create-tearsheet-with-intro></create-tearsheet-with-intro>`},v={render:()=>i`<create-tearsheet-step-in-error-state></create-tearsheet-step-in-error-state>`};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<create-tearsheet-multi-step></create-tearsheet-multi-step>\`;
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<create-tearsheet-with-intro></create-tearsheet-with-intro>\`;
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<create-tearsheet-step-in-error-state></create-tearsheet-step-in-error-state>\`;
  }
}`,...v.parameters?.docs?.source}}};const ee=["MultiStep","MultiStepWithIntro","MultiStepWithStepInErrorState"],De=Object.freeze(Object.defineProperty({__proto__:null,MultiStep:b,MultiStepWithIntro:y,MultiStepWithStepInErrorState:v,__namedExportsOrder:ee,default:Z},Symbol.toStringTag,{value:"Module"}));export{De as s};
