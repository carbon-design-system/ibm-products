/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { keyed } from 'lit/directives/keyed.js';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element';
import '@carbon/web-components/es/components/progress-indicator/index.js';
import styles from './create-side-panel-with-steps.scss?lit';

const blockClass = 'create-side-panel-with-steps';

export interface StepData {
  title?: string;
  secondaryLabel?: string;
  shouldIncludeStep?: boolean;
  invalid?: boolean;
  disableSubmit?: boolean;
}

/**
 * Progress-indicator influencer for the create-side-panel-with-steps pattern.
 * Renders a vertical `cds-progress-indicator` above the active step content.
 *
 * @element create-side-panel-influencer
 */
@customElement('create-side-panel-influencer')
export class CreateSidePanelInfluencer extends LitElement {
  /** 1-based index of the currently active step */
  @property({ type: Number, attribute: 'current-step' })
  currentStep = 1;

  /** Array of step metadata */
  @property({ type: Array })
  stepData: StepData[] = [];

  /** Optional heading displayed above the progress indicator */
  @property({ type: String })
  title = '';

  render() {
    const visibleSteps = this.stepData.filter(
      (s) => s.shouldIncludeStep !== false
    );

    // currentIndex for the progress indicator is 0-based
    const currentIndex = this.currentStep - 1;

    const stepCountKey = visibleSteps.length;

    return html`
      <div class="${classMap({ [blockClass]: true })}">
        <div class="${blockClass}__influencer">
          ${this.title
            ? html`<p class="${blockClass}__influencer-title">${this.title}</p>`
            : ''}
          ${keyed(
            stepCountKey,
            html`
              <cds-progress-indicator
                vertical
                space-equally
                current-index="${currentIndex}"
              >
                ${visibleSteps.map(
                  (step, idx) => html`
                    <cds-progress-step
                      label="${step.title || ''}"
                      secondary-label="${step.secondaryLabel || ''}"
                      ?invalid="${step.invalid}"
                      ?complete="${idx < currentIndex}"
                    ></cds-progress-step>
                  `
                )}
              </cds-progress-indicator>
            `
          )}
        </div>
      </div>
    `;
  }

  static styles = styles;
}
