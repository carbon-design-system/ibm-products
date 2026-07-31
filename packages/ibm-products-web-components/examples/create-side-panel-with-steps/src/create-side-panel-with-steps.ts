/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html, nothing } from 'lit';
import { state } from 'lit/decorators.js';
import HostListenerMixin from '@carbon/web-components/es/globals/mixins/host-listener';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element';
import '@carbon/ibm-products-web-components/es/components/side-panel/index.js';
import '@carbon/web-components/es/components/button/index.js';
import '@carbon/web-components/es/components/form/form-item.js';
import '@carbon/web-components/es/components/form/form.js';
import '@carbon/web-components/es/components/text-input/index.js';
import '@carbon/web-components/es/components/number-input/index.js';
import '@carbon/web-components/es/components/select/index.js';
import './components/index.js';
import type { StepData } from './components/index.js';
import styles from './styles.scss?lit';

const blockClass = 'c4p--create-side-panel';
const storyClass = 'create-side-panel-with-steps-stories';

/**
 * Create side panel with steps — main Storybook example component.
 *
 * Demonstrates how to wire `c4p-side-panel` with the step utilities
 * (`create-side-panel-step` and `create-side-panel-influencer`) to
 * produce a multi-step "Create partitions" flow.
 *
 * @element create-side-panel-with-steps
 */
@customElement('create-side-panel-with-steps')
export class CreateSidePanelWithSteps extends HostListenerMixin(LitElement) {
  @state() private open = true;

  // ── Step state ──────────────────────────────────────────────────────────────
  @state() private currentStep = 1;

  // ── Form values ─────────────────────────────────────────────────────────────
  @state() private topicName = '';
  @state() private partitions = 1;
  @state() private replicas = 1;
  @state() private replicationFactor = 'default';
  @state() private retentionSize = '1';

  // ── Validation ──────────────────────────────────────────────────────────────
  @state() private topicNameInvalid = false;

  // ── Step metadata (drives the progress indicator) ───────────────────────────
  private get stepData(): StepData[] {
    return [
      { title: 'Topic name', shouldIncludeStep: true },
      { title: 'Core configuration', shouldIncludeStep: true },
      { title: 'Message retention', shouldIncludeStep: true },
    ];
  }

  private get totalSteps() {
    return this.stepData.filter((s) => s.shouldIncludeStep !== false).length;
  }

  // ── Handlers ────────────────────────────────────────────────────────────────
  private openPanel() {
    this.open = true;
  }

  private closePanel() {
    this.open = false;
    // Reset back to step 1 when the panel is dismissed
    this.currentStep = 1;
  }

  private handleNext() {
    if (this.currentStep === 1 && this.topicName.trim() === '') {
      this.topicNameInvalid = true;
      return;
    }
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  private handleBack() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  private handleSubmit() {
    console.log('Partition created', {
      topicName: this.topicName,
      partitions: this.partitions,
      replicas: this.replicas,
      replicationFactor: this.replicationFactor,
      retentionSize: this.retentionSize,
    });
    this.closePanel();
  }

  private handleTopicNameInput(e: Event) {
    this.topicName = (e.target as HTMLInputElement).value;
    if (this.topicName.trim()) {
      this.topicNameInvalid = false;
    }
  }

  private handlePartitionsChange(e: CustomEvent) {
    this.partitions = e.detail.value;
  }

  private handleReplicasChange(e: CustomEvent) {
    this.replicas = e.detail.value;
  }

  private handleReplicationFactorChange(e: Event) {
    this.replicationFactor = (e.target as HTMLSelectElement).value;
  }

  private handleRetentionSizeChange(e: Event) {
    this.retentionSize = (e.target as HTMLSelectElement).value;
  }

  // ── Step content ─────────────────────────────────────────────────────────────
  private renderStep1() {
    return html`
      <create-side-panel-step
        title="Topic name"
        description="Provide a unique name that helps identify your topic."
        ?disable-submit=${!this.topicName.trim()}
      >
        <cds-form class="${blockClass}__form">
          <cds-form-item>
            <cds-text-input
              label="Topic name"
              placeholder="Enter topic name"
              .value=${this.topicName}
              ?invalid=${this.topicNameInvalid}
              invalid-text="A topic name is required"
              @input=${this.handleTopicNameInput}
            ></cds-text-input>
          </cds-form-item>
        </cds-form>
      </create-side-panel-step>
    `;
  }

  private renderStep2() {
    return html`
      <create-side-panel-step
        title="Core configuration"
        subtitle="Configure the core settings for your topic."
        description="We recommend you fill out and evaluate these details at a minimum before deploying your topic."
      >
        <cds-form class="${blockClass}__form">
          <cds-form-item>
            <cds-number-input
              label="Partitions"
              min="1"
              max="100"
              step="1"
              .value=${this.partitions}
              @cds-number-input-changed=${this.handlePartitionsChange}
            ></cds-number-input>
          </cds-form-item>
          <cds-form-item>
            <cds-number-input
              label="Replicas"
              min="1"
              max="10"
              step="1"
              .value=${this.replicas}
              @cds-number-input-changed=${this.handleReplicasChange}
            ></cds-number-input>
          </cds-form-item>
          <cds-form-item>
            <cds-select
              label-text="Replication factor"
              .value=${this.replicationFactor}
              @change=${this.handleReplicationFactorChange}
            >
              <cds-select-item value="default">Default</cds-select-item>
              <cds-select-item value="high">High availability</cds-select-item>
              <cds-select-item value="low">Low redundancy</cds-select-item>
            </cds-select>
          </cds-form-item>
        </cds-form>
      </create-side-panel-step>
    `;
  }

  private renderStep3() {
    return html`
      <create-side-panel-step
        title="Message retention"
        subtitle="Specify how long messages are kept."
        description="This is how many copies of a topic will be made for high availability."
      >
        <cds-form class="${blockClass}__form">
          <cds-form-item>
            <cds-select
              label-text="Retention size"
              .value=${this.retentionSize}
              @change=${this.handleRetentionSizeChange}
            >
              <cds-select-item value="1">1 GB</cds-select-item>
              <cds-select-item value="5">5 GB</cds-select-item>
              <cds-select-item value="10">10 GB</cds-select-item>
              <cds-select-item value="unlimited">Unlimited</cds-select-item>
            </cds-select>
          </cds-form-item>
        </cds-form>
      </create-side-panel-step>
    `;
  }

  render() {
    const isFirstStep = this.currentStep === 1;
    const isLastStep = this.currentStep === this.totalSteps;

    const currentStepDisabledSubmit = (() => {
      if (this.currentStep === 1) {
        return !this.topicName.trim();
      }
      return false;
    })();

    return html`
      <style>
        ${styles}
      </style>
      <div class="${storyClass}__trigger-button">
        <cds-button @click=${this.openPanel}>Create partitions</cds-button>
      </div>

      <c4p-side-panel
        @c4p-side-panel-closed=${this.closePanel}
        class="${blockClass}"
        include-overlay
        ?open=${this.open}
        size="md"
        title="Create partitions"
        ?animate-title=${false}
      >
        <div slot="subtitle">
          Step ${this.currentStep} of ${this.totalSteps}
        </div>

        <!-- Progress indicator (influencer) -->
        <create-side-panel-influencer
          current-step="${this.currentStep}"
          .stepData="${this.stepData}"
          title="Create partitions"
        ></create-side-panel-influencer>

        <!-- Step content — only the active step is shown -->
        ${this.currentStep === 1 ? this.renderStep1() : nothing}
        ${this.currentStep === 2 ? this.renderStep2() : nothing}
        ${this.currentStep === 3 ? this.renderStep3() : nothing}

        <!-- Back button (hidden on step 1) -->
        ${!isFirstStep
          ? html`
              <cds-button
                slot="actions"
                kind="secondary"
                @click=${this.handleBack}
              >
                Back
              </cds-button>
            `
          : nothing}

        <!-- Cancel button (only on step 1) -->
        ${isFirstStep
          ? html`
              <cds-button
                slot="actions"
                kind="secondary"
                @click=${this.closePanel}
              >
                Cancel
              </cds-button>
            `
          : nothing}

        <!-- Next / Create primary action -->
        <cds-button
          slot="actions"
          kind="primary"
          ?disabled=${currentStepDisabledSubmit}
          @click=${isLastStep ? this.handleSubmit : this.handleNext}
        >
          ${isLastStep ? 'Create' : 'Next'}
        </cds-button>
      </c4p-side-panel>
    `;
  }
}

export default CreateSidePanelWithSteps;
