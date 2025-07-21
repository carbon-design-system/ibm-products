/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, LitElement, PropertyValues } from 'lit';
import { prefix } from '../../globals/settings';
import HostListenerMixin from '@carbon/web-components/es/globals/mixins/host-listener.js';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';

import styles from './interstitial-screen-body-item.scss?lit';
import { property } from 'lit/decorators.js';
import {
  interstitialDetailsSignal,
  updateInterstitialDetailsSignal,
} from './interstitial-screen-context';

@customElement(`${prefix}-interstitial-screen-body-item`)
class CDSInterstitialScreenBodyItem extends HostListenerMixin(LitElement) {
  @property({ reflect: true })
  stepTitle: string = '';

  protected firstUpdated(_changedProperties: PropertyValues): void {
    const slot = this.shadowRoot?.querySelector('slot') as HTMLSlotElement;
    slot.addEventListener('slotchange', this.updateStepDetails);

    this.updateStepDetails();
  }

  private updateStepDetails() {
    const randomId = Math.random().toString(36).slice(2);
    const stepKey = `${this.stepTitle?.replace(/\s+/g, '') || randomId}`;
    const newStep = {
      stepTitle: this.stepTitle,
      id: this.id ?? stepKey,
    };

    const exists = interstitialDetailsSignal
      .get()
      .stepDetails?.some((step) => step.stepTitle === newStep.stepTitle);

    if (!exists && newStep.stepTitle) {
      updateInterstitialDetailsSignal({ name: 'stepDetails', detail: newStep });
    }
  }

  render() {
    return html` <slot></slot> `;
  }

  static styles = styles;
}
export default CDSInterstitialScreenBodyItem;
