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
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element';
import styles from './create-side-panel-with-steps.scss?lit';

const blockClass = 'create-side-panel-with-steps';

/**
 * A single step within the create-side-panel-with-steps pattern.
 *
 * Renders its title, optional subtitle/description and slotted form content.
 * The parent `create-side-panel-with-steps` component controls visibility by
 * toggling the `hidden` attribute on each step element.
 *
 * @element create-side-panel-step
 */
@customElement('create-side-panel-step')
export class CreateSidePanelStep extends LitElement {
  /** Step title */
  @property({ type: String })
  title = '';

  /** Optional step subtitle */
  @property({ type: String })
  subtitle = '';

  /** Optional step description */
  @property({ type: String })
  description = '';

  /** Whether to wrap content in a <fieldset> */
  @property({ type: Boolean, attribute: 'has-fieldset' })
  hasFieldset = false;

  /** Legend text when `has-fieldset` is true */
  @property({ type: String, attribute: 'fieldset-legend-text' })
  fieldsetLegendText = '';

  /** Disable the Next / Submit button while on this step */
  @property({ type: Boolean, attribute: 'disable-submit', reflect: true })
  disableSubmit = false;

  /** Mark the step as invalid in the progress indicator */
  @property({ type: Boolean, reflect: true })
  invalid = false;

  /** Optional async callback called before advancing to the next step */
  @property({ attribute: false })
  onNext?: () => void | Promise<void>;

  render() {
    return html`
      <section class="${blockClass}__step">
        <h3 class="${blockClass}__step-title">${this.title}</h3>
        ${this.subtitle
          ? html`<p class="${blockClass}__step-subtitle">${this.subtitle}</p>`
          : ''}
        ${this.description
          ? html`<p class="${blockClass}__step-description">
              ${this.description}
            </p>`
          : ''}
        <div class="${blockClass}__step-description">
          <slot name="description"></slot>
        </div>
        ${this.hasFieldset
          ? html`
              <fieldset class="${blockClass}__step-fieldset">
                <legend>${this.fieldsetLegendText}</legend>
                <slot></slot>
              </fieldset>
            `
          : html`
              <div class="${blockClass}__step-content">
                <slot></slot>
              </div>
            `}
      </section>
    `;
  }

  static styles = styles;
}
