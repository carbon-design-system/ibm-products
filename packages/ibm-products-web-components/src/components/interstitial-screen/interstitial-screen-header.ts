/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import HostListenerMixin from '@carbon/web-components/es/globals/mixins/host-listener.js';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';
import { classMap } from 'lit-html/directives/class-map.js';
import '@carbon/web-components/es/components/progress-indicator/index.js';
import styles from './interstitial-screen-header.scss?lit';
import { interstitialDetailsSignal } from './interstitial-screen-context';
import { SignalWatcher } from '@lit-labs/signals';

const blockClass = `${prefix}--interstitial-screen`;
const headerBlockClass = `${blockClass}--internal-header`;

/**
 * interstitial-screen-header for header section
 * @element c4p-interstitial-screen-header
 */
@customElement(`${prefix}-interstitial-screen-header`)
class CDSInterstitialScreenHeader extends SignalWatcher(
  HostListenerMixin(LitElement)
) {
  /**
   * Provide an optional title to be applied to the header.
   */
  @property({ reflect: true, attribute: 'header-title' })
  headerTitle: string = '';

  /**
   * Tooltip text and aria label for the Close button icon.
   */

  @property({ reflect: true, attribute: 'header-subtitle' })
  headerSubTitle: string = '';

  /**
   * Tooltip text and aria label for the Close button icon.
   */
  @property({ reflect: true })
  closeIconDescription: string = 'Close';

  /**
   * Optional parameter to hide the progress indicator when multiple steps are used.
   */
  @property({ type: Boolean, reflect: true })
  hideProgressIndicator: boolean = false;

  private getStepState = (index) => {
    const currentStep = interstitialDetailsSignal.get().currentStep;
    if (index === currentStep) {
      return 'current';
    } else if (index < currentStep) {
      return 'complete';
    } else if (index > currentStep) {
      return 'incomplete';
    } else {
      return 'invalid';
    }
  };

  /**
   * Handles user-initiated close request of this tearsheet.
   *
   * @param triggeredBy The element that triggered this close request.
   */
  private _handleUserInitiatedClose(triggeredBy: EventTarget | null) {
    const init = {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: {
        triggeredBy,
      },
    };
    if (
      this.dispatchEvent(
        new CustomEvent(
          (
            this.constructor as typeof CDSInterstitialScreenHeader
          ).eventBeforeClose,
          init
        )
      )
    ) {
      this.dispatchEvent(
        new CustomEvent(
          (this.constructor as typeof CDSInterstitialScreenHeader).eventClose,
          init
        )
      );
    }
  }

  getHeaderContent() {
    const stepDetails = interstitialDetailsSignal.get().stepDetails;

    return html`
      ${(this.headerTitle || this.headerSubTitle) &&
      html`
        <div class="${blockClass}--titleContainer">
          ${this.headerTitle && html`<h1>${this.headerTitle}</h1>`}
          ${this.headerSubTitle && html`<h2>${this.headerSubTitle}</h2>`}
          </div>
          <slot></slot>

          ${
            !this.hideProgressIndicator && stepDetails?.length > 0
              ? html`
                  <div class="${blockClass}--progress">
                    <cds-progress-indicator>
                      ${stepDetails.map(
                        (eachStep, index) =>
                          html` <cds-progress-step
                            label="${eachStep.stepTitle}"
                            key="${eachStep.id}"
                            state="${this.getStepState(index)}"
                          ></cds-progress-step>`
                      )}
                    </cds-progress-indicator>
                  </div>
                `
              : html``
          }
        </div>
      `}
    `;
  }

  render() {
    const isFullScreen = interstitialDetailsSignal.get().isFullScreen;

    const classes = classMap({
      [`${headerBlockClass}`]: true,
      [`${headerBlockClass}--has-title`]:
        this.headerTitle || this.headerSubTitle, // add check for children
    });
    return isFullScreen
      ? html` <header class="${classes}">${this.getHeaderContent()}</header>`
      : html`<cds-modal-header class="${classes}">
          <cds-modal-close-button
            close-button-label=${this.closeIconDescription}
            @click="${this._handleUserInitiatedClose}"
          ></cds-modal-close-button>

          ${this.getHeaderContent()}
        </cds-modal-header>`;
  }

  static styles = styles;

  /**
   * The name of the custom event fired before this tearsheet is being closed upon a user gesture.
   * Cancellation of this event stops the user-initiated action of closing this tearsheet.
   */
  static get eventBeforeClose() {
    return `${prefix}-interstitial-beingclosed`;
  }

  /**
   * The name of the custom event fired after this tearsheet is closed upon a user gesture.
   */
  static get eventClose() {
    return `${prefix}-interstitial-closed`;
  }
}
export default CDSInterstitialScreenHeader;
