/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element';

const blockClass = 'create-full-page-pattern';
const stepBlockClass = `${blockClass}__step`;

/**
 * CreateFullPageStep component for web components
 */
@customElement('create-full-page-step')
export class CreateFullPageStep extends LitElement {
  /**
   * Step title
   */
  @property({ type: String })
  title = '';

  /**
   * Step subtitle
   */
  @property({ type: String })
  subtitle = '';

  /**
   * Step description
   */
  @property({ type: String })
  description = '';

  /**
   * Whether to wrap content in a fieldset
   */
  @property({ type: Boolean, attribute: 'has-fieldset' })
  hasFieldset = false;

  /**
   * Fieldset legend text
   */
  @property({ type: String, attribute: 'fieldset-legend-text' })
  fieldsetLegendText = '';

  /**
   * Secondary label for the step
   */
  @property({ type: String, attribute: 'secondary-label' })
  secondaryLabel = '';

  /**
   * Whether to disable submit on this step
   */
  @property({ type: Boolean, attribute: 'disable-submit' })
  disableSubmit = false;

  /**
   * Callback for next action
   */
  @property({ attribute: false })
  onNext?: () => void | Promise<void>;

  /**
   * Callback for previous action
   */
  @property({ attribute: false })
  onPrevious?: () => void | Promise<void>;

  // Disable shadow DOM to use Carbon styles
  createRenderRoot() {
    return this;
  }

  firstUpdated() {
    this.reorganizeContent();
  }

  private reorganizeContent() {
    // Save the original children before we render
    const originalChildren = Array.from(this.children);
    
    // After render, move the original children to the slot location
    requestAnimationFrame(() => {
      const slotContainer = this.hasFieldset
        ? this.querySelector(`.${blockClass}__step-fieldset`)
        : this.querySelector(`.${blockClass}__step-content`);
      
      if (slotContainer) {
        originalChildren.forEach(child => {
          slotContainer.appendChild(child);
        });
      }
    });
  }

  render() {

    return html`
      <section class="${stepBlockClass}">
            <div class="cds--grid">
              <h2 class="${blockClass}__step-title cds--col-lg-8 cds--col-md-4">
                ${this.title}
              </h2>

              ${this.subtitle
                ? html`
                    <p class="${blockClass}__step-subtitle cds--col-lg-8 cds--col-md-4">
                      ${this.subtitle}
                    </p>
                  `
                : ''}
              ${this.description
                ? html`
                    <p class="${blockClass}__step-description cds--col-lg-8 cds--col-md-4">
                      ${this.description}
                    </p>
                  `
                : ''}
        </div>

        ${this.hasFieldset
          ? html`
              <fieldset class="${blockClass}__step-fieldset">
                <legend>${this.fieldsetLegendText}</legend>
              </fieldset>
            `
          : html`<div class="${blockClass}__step-content"></div>`}
      </section>
    `;
  }
}

