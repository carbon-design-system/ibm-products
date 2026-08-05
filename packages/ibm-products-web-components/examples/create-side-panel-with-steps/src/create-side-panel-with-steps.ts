/**
 * @license
 *
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html, nothing } from 'lit';
import { state } from 'lit/decorators.js';
import { SignalWatcher } from '@lit-labs/signals';
import HostListenerMixin from '@carbon/web-components/es/globals/mixins/host-listener';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element';
import '@carbon/ibm-products-web-components/es/components/side-panel/index.js';
import '@carbon/web-components/es/components/button/index.js';
import '@carbon/web-components/es/components/form/form-item.js';
import '@carbon/web-components/es/components/form/form.js';
import '@carbon/web-components/es/components/text-input/index.js';
import '@carbon/web-components/es/components/number-input/index.js';
import '@carbon/web-components/es/components/select/index.js';
import '@carbon/web-components/es/components/progress-indicator/index.js';
import './components/create-side-panel-step';
import { StepInstance } from './utils/step-instance';
import styles from './styles.scss?lit';

const blockClass = 'c4p--create-side-panel';
const storyClass = 'create-side-panel-with-steps-stories';

interface CreateSidePanelFormState {
  [key: string]: unknown;
  topicName?: string;
  partitions?: number;
  replicas?: number;
  replicationFactor?: string;
  retentionSize?: string;
}

/**
 * Create side panel with steps — main Storybook example component.
 *
 * Demonstrates how to wire `c4p-side-panel` with the `StepInstance` utility
 * and a horizontal `cds-progress-indicator` placed in `slot="below-title"` to
 * produce a multi-step "Create partitions" flow.
 *
 * @element create-side-panel-with-steps
 */
@customElement('create-side-panel-with-steps')
export class CreateSidePanelWithSteps extends SignalWatcher(
  HostListenerMixin(LitElement)
) {
  @state() private _open = true;
  @state() private _topicNameInvalid = false;

  // ── Step utility ────────────────────────────────────────────────────────────
  private _stepInfo = new StepInstance();

  private readonly _stepLabels = [
    'Topic name',
    'Core configuration',
    'Message retention',
  ];

  connectedCallback() {
    super.connectedCallback();
    this._stepInfo.updateTotalStepCount = this._stepLabels.length;
  }

  // ── Handlers ────────────────────────────────────────────────────────────────
  private _openPanel() {
    this._open = true;
  }

  private _closePanel() {
    this._open = false;
    this._stepInfo.reset();
    this._topicNameInvalid = false;
  }

  private _handleCancelButton() {
    this._closePanel();
  }

  private _handleBackButton() {
    const { currentStep } = this._stepInfo.data;
    if (currentStep === 0) return;
    this._stepInfo.handlePrevious();
  }

  private _handleNextButton() {
    const { currentStep, totalSteps, formState } = this._stepInfo.data;
    const fs = formState as CreateSidePanelFormState;

    // Step 1 validation — topic name required
    if (currentStep === 0 && !fs.topicName?.trim()) {
      this._topicNameInvalid = true;
      return;
    }

    if (currentStep + 1 === totalSteps) {
      // Final step — submit and close
      this._closePanel();
      return;
    }

    this._stepInfo.handleNext();
  }

  private _handleTopicNameInput(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    const savedFormState = structuredClone(
      this._stepInfo.data.formState
    ) as CreateSidePanelFormState;
    savedFormState.topicName = value;
    this._stepInfo.updateFormState = savedFormState;
    if (value.trim()) {
      this._topicNameInvalid = false;
    }
  }

  private _handlePartitionsChanged(e: CustomEvent) {
    const savedFormState = structuredClone(
      this._stepInfo.data.formState
    ) as CreateSidePanelFormState;
    savedFormState.partitions = Number(e.detail.value);
    this._stepInfo.updateFormState = savedFormState;
  }

  private _handleReplicasChanged(e: CustomEvent) {
    const savedFormState = structuredClone(
      this._stepInfo.data.formState
    ) as CreateSidePanelFormState;
    savedFormState.replicas = Number(e.detail.value);
    this._stepInfo.updateFormState = savedFormState;
  }

  private _handleReplicationFactorChange(e: Event) {
    const savedFormState = structuredClone(
      this._stepInfo.data.formState
    ) as CreateSidePanelFormState;
    savedFormState.replicationFactor = (e.target as HTMLSelectElement).value;
    this._stepInfo.updateFormState = savedFormState;
  }

  private _handleRetentionSizeChange(e: Event) {
    const savedFormState = structuredClone(
      this._stepInfo.data.formState
    ) as CreateSidePanelFormState;
    savedFormState.retentionSize = (e.target as HTMLSelectElement).value;
    this._stepInfo.updateFormState = savedFormState;
  }

  // ── Step rendering ───────────────────────────────────────────────────────────
  private _renderStep1(fs: CreateSidePanelFormState) {
    return html`
      <create-side-panel-step
        title="Topic name"
        description="Provide a unique name that helps identify your topic."
      >
        <cds-form>
          <cds-form-item>
            <cds-text-input
              label="Topic name"
              id="create-side-panel-topic-name"
              placeholder="Enter topic name"
              value=${fs.topicName ?? ''}
              ?invalid=${this._topicNameInvalid}
              invalid-text="A topic name is required"
              @input=${this._handleTopicNameInput}
            ></cds-text-input>
          </cds-form-item>
        </cds-form>
      </create-side-panel-step>
    `;
  }

  private _renderStep2(fs: CreateSidePanelFormState) {
    return html`
      <create-side-panel-step
        title="Core configuration"
        description="We recommend you fill out and evaluate these details at a minimum before deploying your topic."
      >
        <cds-form>
          <cds-form-item>
            <cds-number-input
              label="Partitions"
              min="1"
              max="100"
              step="1"
              value=${fs.partitions ?? 1}
              @cds-number-input-changed=${this._handlePartitionsChanged}
            ></cds-number-input>
          </cds-form-item>
          <cds-form-item>
            <cds-number-input
              label="Replicas"
              min="1"
              max="10"
              step="1"
              value=${fs.replicas ?? 1}
              @cds-number-input-changed=${this._handleReplicasChanged}
            ></cds-number-input>
          </cds-form-item>
          <cds-form-item>
            <cds-select
              label-text="Replication factor"
              value=${fs.replicationFactor ?? 'default'}
              @change=${this._handleReplicationFactorChange}
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

  private _renderStep3(fs: CreateSidePanelFormState) {
    return html`
      <create-side-panel-step
        title="Message retention"
        description="This is how long messages are retained before they are deleted."
      >
        <cds-form>
          <cds-form-item>
            <cds-select
              label-text="Retention size"
              value=${fs.retentionSize ?? '1'}
              @change=${this._handleRetentionSizeChange}
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
    const { currentStep, totalSteps, formState } = this._stepInfo.data;
    const fs = formState as CreateSidePanelFormState;
    const isFirstStep = currentStep === 0;
    const isLastStep = currentStep + 1 === totalSteps;

    return html`
      <style>
        ${styles}
      </style>
      <div class="${storyClass}__trigger-button">
        <cds-button @click=${this._openPanel}>Create partitions</cds-button>
      </div>

      <c4p-side-panel
        @c4p-side-panel-closed=${this._handleCancelButton}
        class="${blockClass}"
        ?animate-title=${false}
        include-overlay
        ?open=${this._open}
        size="md"
        title="Create partitions"
      >
        <div slot="subtitle">
          Specify the details of the partitions you're creating
        </div>

        <!-- Horizontal progress indicator in the "below-title" slot -->
        <div slot="below-title">
          <cds-progress-indicator class="${blockClass}__progress-indicator">
            ${this._stepLabels.map(
              (label, index) => html`
                <cds-progress-step
                  label=${label}
                  state=${index < currentStep
                    ? 'complete'
                    : index === currentStep
                      ? 'current'
                      : 'incomplete'}
                ></cds-progress-step>
              `
            )}
          </cds-progress-indicator>
        </div>

        <!-- Step content — only the active step is rendered -->
        ${currentStep === 0 ? this._renderStep1(fs) : nothing}
        ${currentStep === 1 ? this._renderStep2(fs) : nothing}
        ${currentStep === 2 ? this._renderStep3(fs) : nothing}

        <!-- Action buttons -->
        <cds-button
          slot="actions"
          kind="ghost"
          @click=${this._handleCancelButton}
          >Cancel</cds-button
        >
        <cds-button
          slot="actions"
          kind="secondary"
          ?disabled=${isFirstStep}
          @click=${this._handleBackButton}
          >Back</cds-button
        >
        <cds-button slot="actions" @click=${this._handleNextButton}>
          ${isLastStep ? 'Create' : 'Next'}
        </cds-button>
      </c4p-side-panel>
    `;
  }
}

export default CreateSidePanelWithSteps;
