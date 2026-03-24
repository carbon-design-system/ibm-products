/**
 * @license
 *
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element';
import '@carbon/web-components/es/components/text-input/index.js';
import '@carbon/web-components/es/components/number-input/index.js';
import '@carbon/web-components/es/components/checkbox/index.js';
import '@carbon/web-components/es/components/toggle/index.js';
import '@carbon/web-components/es/components/radio-button/index.js';
import '@carbon/web-components/es/components/notification/index.js';
import '@carbon/web-components/es/components/link/index.js';
import '@carbon/web-components/es/components/modal/index.js';
import '@carbon/web-components/es/components/tooltip/index.js';
import './components/index.js';
import './create-full-page.scss';

const storyClass = 'create-full-page-stories';

/**
 * Standard CreateFullPage example
 */
export default function StandardCreateFullPage() {
  return html`
    <standard-create-full-page-example></standard-create-full-page-example>
  `;
}

/**
 * Example component for StandardCreateFullPage
 */
@customElement('standard-create-full-page-example')
class StandardCreateFullPageExample extends HTMLElement {
  private textInput = '';
  private isInvalid = false;
  private hasSubmitError = false;
  private shouldReject = false;
  private shouldIncludeAdditionalStep = false;
  private simulatedDelay = 750;
  private topicName2 = '';
  private numberInput1 = 0;
  private numberInput2 = 0;
  private replicas = '';
  private replicationFactor = 'standard';

  connectedCallback() {
    this.render();
    this.attachEventListeners();
  }

  private attachEventListeners() {
    // Text input handlers
    const topicNameInput = this.querySelector('#topic-name-input');
    topicNameInput?.addEventListener('input', (e: any) => {
      this.textInput = e.target.value;
      this.isInvalid = false;
      this.render();
    });
    topicNameInput?.addEventListener('blur', () => {
      if (this.textInput.length === 0) {
        this.isInvalid = true;
        this.render();
      }
    });

    // Toggle handler
    const errorToggle = this.querySelector('#simulated-error-toggle');
    errorToggle?.addEventListener('cds-toggle-changed', (e: any) => {
      this.shouldReject = e.detail.toggled;
      this.render();
    });

    // Checkbox handler
    const additionalStepCheckbox = this.querySelector(
      '#include-additional-step-checkbox'
    );
    additionalStepCheckbox?.addEventListener('cds-checkbox-changed', (e: any) => {
      this.shouldIncludeAdditionalStep = e.detail.checked;
      this.render();
    });

    // Topic name 2 input
    const topicName2Input = this.querySelector('#topic-name-optional');
    topicName2Input?.addEventListener('input', (e: any) => {
      this.topicName2 = e.target.value;
    });

    // Number inputs
    const numberInput1El = this.querySelector('#number-input-1');
    numberInput1El?.addEventListener('cds-number-input-changed', (e: any) => {
      this.numberInput1 = e.detail.value;
    });

    const numberInput2El = this.querySelector('#number-input-2');
    numberInput2El?.addEventListener('cds-number-input-changed', (e: any) => {
      this.numberInput2 = e.detail.value;
    });

    // Replicas input
    const replicasInput = this.querySelector('#replicas-input');
    replicasInput?.addEventListener('input', (e: any) => {
      this.replicas = e.target.value;
    });

    // Radio button group
    const radioGroup = this.querySelector('cds-radio-button-group');
    radioGroup?.addEventListener('cds-radio-button-group-changed', (e: any) => {
      this.replicationFactor = e.detail.value;
    });

    // Inline notification close
    const notification = this.querySelector('cds-inline-notification');
    notification?.addEventListener('cds-notification-closed', () => {
      this.hasSubmitError = false;
      this.render();
    });
  }

  private async handleStepNext() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.shouldReject) {
          this.hasSubmitError = true;
          this.render();
          reject();
        } else {
          this.isInvalid = false;
          resolve(undefined);
        }
      }, this.simulatedDelay);
    });
  }

  private render() {
    this.innerHTML = `
      <div class="${storyClass}__viewport">
        <create-full-page
          secondary-title="Create topic"
          next-button-text="Next"
          back-button-text="Back"
          cancel-button-text="Cancel"
          submit-button-text="Create"
          modal-title="Are you sure you want to cancel?"
          modal-description="If you cancel, the information you have entered won't be saved."
          modal-danger-button-text="Cancel partition"
          modal-secondary-button-text="Return to form"
        >
          <create-full-page-step
            slot="steps"
            title="Partition"
            subtitle="One or more partitions make up a topic. A partition is an ordered list of messages."
            description="Partitions are distributed across the brokers in order to increase the scalability of your topic. You can also use them to distribute messages across the members of a consumer group."
            ${!this.textInput ? 'disable-submit' : ''}
          >
            <div class="cds--grid">
              <div class="cds--col-xlg-5 cds--col-lg-5 cds--col-md-4 cds--col-sm-4">
                <cds-text-input
                  id="topic-name-input"
                  label="Topic name"
                  placeholder="Enter topic name"
                  value="${this.textInput}"
                  ${this.isInvalid ? 'invalid' : ''}
                  invalid-text="A valid value is required"
                >
                </cds-text-input>
                
                ${
                  this.hasSubmitError
                    ? `
                  <cds-inline-notification
                    kind="error"
                    title="Error"
                    subtitle="Resolve errors to continue"
                    low-contrast
                  >
                  </cds-inline-notification>
                `
                    : ''
                }
                
            
                    <cds-definition-tooltip
                      class="${storyClass}__error--text"
                      align="bottom-left"
                      open-on-hover
                    >
                      <span slot="definition">
                        Once toggled on, an inline error notification will appear upon clicking next.
                        This is an example usage of how to prevent the next step if some kind of error
                        occurred during the onNext handler.
                      </span>
                      Simulate error
                    </cds-definition-tooltip>
               
                 
           

                 <cds-toggle
                    id="simulated-error-toggle"
                    label-text="Simulate error"
                    hideLabel
                    size="sm"
                  >
                  </cds-toggle>
                <cds-checkbox
                  id="include-additional-step-checkbox"
                  label-text="Include additional step"
                  ${this.shouldIncludeAdditionalStep ? 'checked' : ''}
                >
                </cds-checkbox>
              </div>
            </div>
          </create-full-page-step>

          ${
            this.shouldIncludeAdditionalStep
              ? `
            <create-full-page-step
              slot="steps"
              title="Dynamic step"
              description="Example dynamic step"
            >
              <div></div>
            </create-full-page-step>
          `
              : ''
          }

          <create-full-page-step
            slot="steps"
            title="Empty"
            description="Empty step for demonstration purposes"
          >
            <div></div>
          </create-full-page-step>

          <create-full-page-step
            slot="steps"
            title="Core configuration"
            description="Here is an example description for the 'Core configuration' step."
          >
            <div class="cds--grid">
              <div class="cds--col-xlg-5 cds--col-lg-5 cds--col-md-4 cds--col-sm-4">
                <div class="cds--grid">
                  <div class="cds--col-xlg-5 cds--col-lg-5 cds--col-md-4 cds--col-sm-4">
                    <cds-text-input
                      id="topic-name-optional"
                      label="Topic name (optional)"
                      placeholder="Enter topic name"
                      value="${this.topicName2}"
                      invalid-text="A valid value is required"
                    >
                    </cds-text-input>
                  </div>

                  <div class="cds--col-span-3">
                    <cds-number-input
                      id="number-input-1"
                      label="Label (optional)"
                      min="0"
                      max="100"
                      step="10"
                      value="${this.numberInput1}"
                      invalid-text="Number is not valid"
                    >
                    </cds-number-input>

                    <cds-number-input
                      id="number-input-2"
                      label="Label (optional)"
                      min="0"
                      max="100"
                      step="10"
                      value="${this.numberInput2}"
                      invalid-text="Number is not valid"
                    >
                    </cds-number-input>
                  </div>

                  <div class="cds--col-xlg-5 cds--col-lg-5 cds--col-md-4 cds--col-sm-4">
                    <cds-text-input
                      id="replicas-input"
                      label="Minimum in-sync replicas (optional)"
                      placeholder="Enter topic name"
                      value="${this.replicas}"
                      invalid-text="A valid value is required"
                    >
                    </cds-text-input>
                  </div>
                </div>
              </div>
            </div>
          </create-full-page-step>

          <create-full-page-step
            slot="steps"
            title="Message retention"
            subtitle="This is how many copies of a topic will be made for high availability"
            description="The partitions of each topic can be replicated across a configurable number of brokers"
          >
            <div class="cds--grid">
              <div class="cds--col-span-100">
                <cds-radio-button-group
                  legend-text="Group Legend"
                  name="radio-button-group"
                  value="${this.replicationFactor}"
                  orientation="vertical"
                >
                  <cds-radio-button
                    id="radio-1"
                    label-text="Replication factor: 1"
                    value="standard"
                  >
                  </cds-radio-button>
                  <cds-radio-button
                    id="radio-2"
                    label-text="Replication factor: 2"
                    value="default-selected"
                  >
                  </cds-radio-button>
                  <cds-radio-button
                    id="radio-3"
                    label-text="Replication factor: 3"
                    value="disabled"
                  >
                  </cds-radio-button>
                </cds-radio-button-group>
              </div>
            </div>
          </create-full-page-step>
        </create-full-page>
      </div>
    `;

    // Set up the onNext handler for the first step
    const firstStep = this.querySelector('create-full-page-step');
    if (firstStep) {
      (firstStep as any).onNext = () => this.handleStepNext();
    }

    // Set up the onRequestSubmit handler
    const createFullPage = this.querySelector('create-full-page');
    if (createFullPage) {
      (createFullPage as any).onRequestSubmit = async () => {
        console.log('Form submitted');
      };
      (createFullPage as any).onClose = () => {
        console.log('CreateFullPage closed');
      };
    }

    // Re-attach event listeners after render
    setTimeout(() => this.attachEventListeners(), 0);
  }
}
