/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { state } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import '@carbon/web-components/es/components/modal/index.js';
import HostListenerMixin from '@carbon/web-components/es/globals/mixins/host-listener.js';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';
import styles from './interstitial-screen-body.scss?lit';
import { InitCarousel, initCarousel } from '../../utilities/carousel';
import { ref, createRef } from 'lit/directives/ref.js';
import {
  interstitialDetailsSignal,
  updateInterstitialDetailsSignal,
} from './interstitial-screen-context';

const blockClass = `${prefix}--interstitial-screen`;

@customElement(`${prefix}-interstitial-screen-body`)
class CDSInterstitialScreenBody extends HostListenerMixin(LitElement) {
  @state()
  stepType: 'single' | 'multi' | undefined = 'multi';

  private carouselAPI!: InitCarousel;
  private carouselElement = createRef<HTMLElement>();

  firstUpdated(): void {
    const slot = this.shadowRoot?.querySelector('slot') as HTMLSlotElement;

    const updateStepMode = () => {
      const assigned = slot.assignedElements({ flatten: true });

      if (assigned.length === 1) {
        this.stepType = 'single';
      } else if (assigned.length > 1) {
        this.stepType = 'multi';
        //initialize carousel for multi-step
        this._initCarousel();
      }
    };

    // Run once after initial slot content
    updateStepMode();
  }

  private _initCarousel() {
    this.carouselAPI = initCarousel(this.carouselElement.value as HTMLElement, {
      onViewChangeEnd: this.onViewChangeEnd,
      excludeSwipeSupport: true,
    });
    interstitialDetailsSignal.set({
      ...interstitialDetailsSignal.get(),
      carouselAPI: this.carouselAPI,
    });
  }

  private onViewChangeEnd = ({ currentIndex, lastIndex, totalViews }) => {
    updateInterstitialDetailsSignal({
      name: 'currentStep',
      detail: currentIndex,
    });

    this.dispatchEvent(
      new CustomEvent(
        (
          this.constructor as typeof CDSInterstitialScreenBody
        ).eventOnViewChangeEnd,
        {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: {
            currentStep: currentIndex,
            totalStepCount: totalViews,
            lastStep: lastIndex,
          },
        }
      )
    );
  };

  render() {
    return html`
      <div class="${blockClass}--body">
        ${this.stepType === 'multi'
          ? html`<div
              ${ref(this.carouselElement)}
              class="${blockClass}__carousel"
            >
              <slot></slot>
            </div>`
          : this.stepType === 'single'
            ? html`<div class="${blockClass}__contentWrapper">
                <slot></slot>
              </div>`
            : ''}
      </div>
    `;
  }

  static styles = styles;

  /**
   * The name of the custom event fired just after the action.
   */
  static get eventOnViewChangeEnd() {
    return `${prefix}-on-after-action`;
  }
}

export default CDSInterstitialScreenBody;
