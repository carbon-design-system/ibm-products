/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import HostListenerMixin from '@carbon/web-components/es/globals/mixins/host-listener.js';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';
import '@carbon/web-components/es/components/button/index.js';
import styles from './interstitial-screen-footer.scss?lit';
import { interstitialDetailsSignal } from './interstitial-screen-context';
import { SignalWatcher } from '@lit-labs/signals';
import '@carbon/web-components/es/components/inline-loading/inline-loading.js';
import { CDSModalFooter } from '@carbon/web-components/es/index.js';
import ArrowRight from '@carbon/web-components/es/icons/arrow--right/16.js';

const blockClass = `${prefix}--interstitial-screen`;

export type ActionType = 'close' | 'start' | 'skip' | 'back' | 'next';

/**
 * interstitial-screen-footer for footer section
 * @element c4p-interstitial-screen-footer
 * @fires c4p-on-action - The name of the custom event fired just before the action. You can use this event to perform any async/sync validation.
 * if you pass async-action = true, the component will wait for an external listener (e.g., a form validation or confirmation modal) to resolve the proceed()
 *  callback before continuing. When asyncAction is true, you must listen for the eventOnBeforeAction event and call the proceed() function
 *  (either synchronously or with a promise) to allow navigation.
 */
@customElement(`${prefix}-interstitial-screen-footer`)
class CDSInterstitialScreenFooter extends SignalWatcher(
  HostListenerMixin(CDSModalFooter)
) {
  /**
   * The label for the Next button.
   */
  @property({ reflect: true })
  nextButtonLabel: string = 'Next';
  /**
   * The label for the Previous button.
   */
  @property({ reflect: true })
  previousButtonLabel: string = 'Back';
  /**
   * The label for the skip button.
   */
  @property({ reflect: true })
  skipButtonLabel: string = 'Skip';
  /**
   * The label for the start button.
   */
  @property({ reflect: true })
  startButtonLabel = 'Get Started';

  /**
   * Enables support for asynchronous validation or user confirmation before proceeding
   * to the next interstitial step. When set to true, the component will wait for an external
   *  listener (e.g., a form validation or confirmation modal) to resolve the proceed() callback before continuing.
   * When asyncAction is true, you must listen for the eventOnBeforeAction event and
   * call the proceed() function (either synchronously or with a promise) to allow navigation.
   */
  @property({ type: Boolean, reflect: true, attribute: 'async-action' })
  asyncAction;

  @state()
  loadingAction;

  private _handleUserInitiatedClose(
    triggeredBy: EventTarget | null | ActionType
  ) {
    const init = {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: {
        triggeredBy,
      },
    };

    this.dispatchEvent(
      new CustomEvent(
        (
          this.constructor as typeof CDSInterstitialScreenFooter
        ).eventRequestClose,
        init
      )
    );
  }

  private handleSkip = () => this.handleAction('skip');
  private handleStart = () => this.handleAction('start');
  private handleClickNext = () => this.handleAction('next');
  private handleClickPrev = () => this.handleAction('back');

  private handleAction = async (actionType: ActionType) => {
    this.loadingAction = actionType;

    const { currentStep, stepDetails } = interstitialDetailsSignal.get();
    const stepCount = stepDetails.length;

    let resolvePromise;
    const proceedPromise = new Promise<boolean>((resolve) => {
      resolvePromise = resolve;
    });

    const customEvent = new CustomEvent(
      (
        this.constructor as typeof CDSInterstitialScreenFooter
      ).eventOnBeforeAction,
      {
        bubbles: true,
        composed: true,
        cancelable: true,
        detail: {
          step: currentStep,
          stepCount: stepCount,
          proceed: (allow: boolean | Promise<boolean>) => {
            Promise.resolve(allow).then(resolvePromise);
          },
        },
      }
    );

    const eventNotCanceled = this.dispatchEvent(customEvent);

    if (!eventNotCanceled) {
      return;
    }

    const canProceed = this.asyncAction ? await proceedPromise : true;

    this.loadingAction = '';

    if (canProceed) {
      const carouselAPI = interstitialDetailsSignal.get()?.carouselAPI;
      if (actionType == 'next') {
        carouselAPI.next();
      } else if (actionType === 'back') {
        carouselAPI.prev();
      } else {
        this._handleUserInitiatedClose?.(actionType);
      }
    }
  };

  render() {
    const { stepDetails, currentStep, disableActions } =
      interstitialDetailsSignal.get();
    const { start, next, back, skip } = disableActions;
    const isMulti = stepDetails?.length > 0;
    const progStepCeil = stepDetails?.length - 1;
    return html`<slot>
      <div class="${blockClass}--footer">
        ${isMulti
          ? html`
              <cds-button
                class="${blockClass}--skip-btn"
                kind="ghost"
                size="lg"
                title="${this.skipButtonLabel}"
                @click="${this.handleSkip}"
                ?disabled="${skip}"
              >
                ${this.skipButtonLabel}
              </cds-button>
            `
          : ''}
        <div class="${blockClass}--footer-controls">
          ${isMulti && currentStep > 0
            ? html`
                <cds-button
                  class="${blockClass}--prev-btn"
                  kind="secondary"
                  size="lg"
                  title="${this.previousButtonLabel}"
                  ?disabled="${back}"
                  @click="${this.handleClickPrev}"
                >
                  ${this.previousButtonLabel}
                  ${this.loadingAction === 'back'
                    ? html` <cds-inline-loading slot="icon" aria-live="off">
                      </cds-inline-loading>`
                    : nothing}
                </cds-button>
              `
            : nothing}
          ${isMulti && currentStep < progStepCeil
            ? html`
                <cds-button
                  class="${blockClass}--next-btn"
                  kind="primary"
                  size="lg"
                  title="${this.nextButtonLabel}"
                  ?disabled="${next}"
                  @click="${this.handleClickNext}"
                >
                  ${this.nextButtonLabel}
                  ${this.loadingAction === 'next'
                    ? html` <cds-inline-loading slot="icon" aria-live="off">
                      </cds-inline-loading>`
                    : html` ${ArrowRight({ slot: 'icon' })}`}
                </cds-button>
              `
            : nothing}
          ${(isMulti && currentStep === progStepCeil) || !isMulti
            ? html`
                <cds-button
                  class="${blockClass}--start-btn"
                  kind="primary"
                  size="lg"
                  title="${this.startButtonLabel}"
                  ?disabled="${start}"
                  @click="${this.handleStart}"
                >
                  ${this.startButtonLabel}
                  ${this.loadingAction === 'start'
                    ? html` <cds-inline-loading slot="icon" aria-live="off">
                      </cds-inline-loading>`
                    : nothing}
                </cds-button>
              `
            : nothing}
        </div>
      </div>
    </slot>`;
  }

  static styles = styles;

  static get eventRequestClose() {
    return `${prefix}-request-close`;
  }

  /**
   * The name of the custom event fired just before the action.
   */
  static get eventOnBeforeAction() {
    return `${prefix}-on-action`;
  }
}
export default CDSInterstitialScreenFooter;
