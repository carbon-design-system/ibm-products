/**
 * @license
 *
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { state, query } from 'lit/decorators.js';
import HostListenerMixin from '@carbon/web-components/es/globals/mixins/host-listener.js';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';
import '@carbon/ibm-products-web-components/es/components/tearsheet/index.js';
import '@carbon/web-components/es/components/button/index.js';
import '@carbon/web-components/es/components/text-input/index.js';
import '@carbon/web-components/es/components/textarea/index.js';
import '@carbon/web-components/es/components/number-input/index.js';
import '@carbon/web-components/es/components/progress-indicator/index.js';
import '@carbon/web-components/es/components/radio-button/index.js';
import '@carbon/web-components/es/components/tile/index.js';
import '@carbon/web-components/es/components/stack/index.js';
import styles from './create-tearsheet.scss?lit';

const blockClass = `c4p--create-tearsheet`;

/**
 * CreateTearsheet - A multi-step create tearsheet with intro step.
 *
 * @element create-tearsheet
 */
@customElement(`create-tearsheet`)
class CreateTearsheet extends HostListenerMixin(LitElement) {
  @state()
  private open = false;

  @state()
  private currentStep = 0;

  @state()
  private isSubmitting = false;

  @state()
  private selectedCategory = 'standard';

  @state()
  private formData = {
    topicName: '',
    topicDescription: '',
    partitions: 1,
    retentionTime: 'one-day',
  };

  @query('c4p-tearsheet')
  private tearsheetRef!: HTMLElement;

  private totalSteps = 4; // Intro + 3 steps

  private getStepLabels() {
    // Intro step is not shown in progress indicator
    return [
      { label: 'Topic information', secondaryLabel: 'Name your topic' },
      { label: 'Partitions', secondaryLabel: 'Configure partitions' },
      { label: 'Retention', secondaryLabel: 'Set retention policy' },
    ];
  }

  private handleOpen = () => {
    this.open = true;
    this.currentStep = 0;
    this.isSubmitting = false;
  };

  private handleClose = () => {
    this.open = false;
    this.currentStep = 0;
    this.selectedCategory = 'standard';
    this.formData = {
      topicName: '',
      topicDescription: '',
      partitions: 1,
      retentionTime: 'one-day',
    };
  };

  private handleNext = () => {
    if (this.currentStep < this.totalSteps - 1) {
      this.currentStep++;
    }
  };

  private handleBack = () => {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  };

  private handleSubmit = async () => {
    this.isSubmitting = true;
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Form submitted with data:', {
      category: this.selectedCategory,
      ...this.formData,
    });
    this.isSubmitting = false;
    this.handleClose();
  };

  private handleInputChange = (field: string) => (evt: Event) => {
    const target = evt.target as HTMLInputElement;
    this.formData = {
      ...this.formData,
      [field]: target.value,
    };
  };

  private handleCategoryChange = (evt: Event) => {
    const target = evt.target as any;
    this.selectedCategory = target.value;
  };

  private isNextDisabled = () => {
    if (this.isSubmitting) return true;

    switch (this.currentStep) {
      case 0:
        // Intro step - always enabled
        return false;
      case 1:
        return !this.formData.topicName.trim();
      case 2:
        return this.formData.partitions < 1;
      case 3:
        return !this.formData.retentionTime;
      default:
        return false;
    }
  };

  private renderIntroStep() {
    return html`
      <div class="${blockClass}__step ${blockClass}__intro-step">
        <h3 class="${blockClass}__step-title">Select a category</h3>
        <p class="${blockClass}__step-description">
          Choose the type of topic you want to create
        </p>
        <cds-tile-group
          legend="Categories"
          value-selected=${this.selectedCategory}
          @cds-tile-group-changed=${this.handleCategoryChange}
        >
          <cds-radio-tile
            value="standard"
            class="${blockClass}__category-tile"
          >
            <div class="${blockClass}__tile-content">
              <h4>Standard</h4>
              <p>Basic topic configuration for standard use cases</p>
            </div>
          </cds-radio-tile>
          <cds-radio-tile value="premium" class="${blockClass}__category-tile">
            <div class="${blockClass}__tile-content">
              <h4>Premium</h4>
              <p>Enhanced topic with additional features</p>
            </div>
          </cds-radio-tile>
          <cds-radio-tile value="plus" class="${blockClass}__category-tile">
            <div class="${blockClass}__tile-content">
              <h4>Plus</h4>
              <p>Advanced topic with full feature set</p>
            </div>
          </cds-radio-tile>
        </cds-tile-group>
      </div>
    `;
  }

  private renderStep() {
    switch (this.currentStep) {
      case 0:
        return this.renderIntroStep();
      case 1:
        return html`
          <div class="${blockClass}__step">
            <h3 class="${blockClass}__step-title">Topic information</h3>
            <p class="${blockClass}__step-description">
              Specify the name and description for your
              ${this.selectedCategory} topic
            </p>
            <cds-stack gap="5">
              <cds-text-input
                label="Topic name"
                placeholder="Enter topic name"
                value=${this.formData.topicName}
                @input=${this.handleInputChange('topicName')}
                required
              ></cds-text-input>
              <cds-textarea
                label="Topic description"
                placeholder="Enter topic description"
                value=${this.formData.topicDescription}
                @input=${this.handleInputChange('topicDescription')}
                rows="4"
              ></cds-textarea>
            </cds-stack>
          </div>
        `;
      case 2:
        return html`
          <div class="${blockClass}__step">
            <h3 class="${blockClass}__step-title">Partitions</h3>
            <p class="${blockClass}__step-description">
              Configure the number of partitions for your topic
            </p>
            <cds-stack gap="5">
              <cds-number-input
                label="Number of partitions"
                value=${this.formData.partitions}
                min="1"
                max="100"
                @input=${this.handleInputChange('partitions')}
              ></cds-number-input>
            </cds-stack>
          </div>
        `;
      case 3:
        return html`
          <div class="${blockClass}__step">
            <h3 class="${blockClass}__step-title">Message retention</h3>
            <p class="${blockClass}__step-description">
              Set how long messages are retained before deletion
            </p>
            <cds-stack gap="5">
              <cds-radio-button-group
                legend-text="Retention period"
                name="retention"
                value=${this.formData.retentionTime}
                @cds-radio-button-group-changed=${(e: CustomEvent) => {
                  this.formData = {
                    ...this.formData,
                    retentionTime: e.detail.value,
                  };
                }}
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
            </cds-stack>
          </div>
        `;
      default:
        return html``;
    }
  }

  private renderProgressIndicator() {
    // Don't show progress indicator on intro step
    if (this.currentStep === 0) {
      return html``;
    }

    const stepLabels = this.getStepLabels();
    // Adjust current step index for progress indicator (subtract 1 for intro step)
    const progressStep = this.currentStep - 1;

    return html`
      <cds-progress-indicator vertical class="${blockClass}__progress">
        ${stepLabels.map(
          (step, index) => html`
            <cds-progress-step
              label=${step.label}
              secondary-label=${step.secondaryLabel}
              ?complete=${index < progressStep}
              ?current=${index === progressStep}
            ></cds-progress-step>
          `
        )}
      </cds-progress-indicator>
    `;
  }

  render() {
    const isLastStep = this.currentStep === this.totalSteps - 1;
    const isIntroStep = this.currentStep === 0;

    return html`
      <style>
        ${styles}
      </style>
      <cds-button kind="primary" @click=${this.handleOpen}>
        Create topic with intro
      </cds-button>
      <c4p-tearsheet
        class="${blockClass}"
        ?open=${this.open}
        width="wide"
        prevent-close-on-click-outside
        @c4p-tearsheet-closed=${this.handleClose}
      >
        <div slot="label">Create flows</div>
        <div slot="title">Create topic</div>
        <div slot="description">
          Follow these steps to create a new topic
        </div>

        ${!isIntroStep
          ? html`
              <div slot="influencer" class="${blockClass}__influencer">
                ${this.renderProgressIndicator()}
              </div>
            `
          : ''}

        <div slot="body" class="${blockClass}__body">
          ${this.renderStep()}
        </div>

        <cds-button
          slot="actions"
          kind="ghost"
          @click=${this.handleClose}
          ?disabled=${this.isSubmitting}
        >
          Cancel
        </cds-button>
        <cds-button
          slot="actions"
          kind="secondary"
          @click=${this.handleBack}
          ?disabled=${this.currentStep === 0 || this.isSubmitting}
        >
          Back
        </cds-button>
        <cds-button
          slot="actions"
          kind="primary"
          @click=${isLastStep ? this.handleSubmit : this.handleNext}
          ?disabled=${this.isNextDisabled()}
        >
          ${isLastStep ? 'Create' : 'Next'}
        </cds-button>
      </c4p-tearsheet>
    `;
  }

  static styles = styles;
}

export default CreateTearsheet;

