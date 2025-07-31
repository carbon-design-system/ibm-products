/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html, nothing } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import '@carbon/web-components/es/components/modal/index.js';
import HostListenerMixin from '@carbon/web-components/es/globals/mixins/host-listener.js';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';

import styles from './interstitial-screen.scss?lit';
import { SignalWatcher } from '@lit-labs/signals';
import {
  interstitialDetailsSignal,
  resetInterstitialDetailsSignal,
  updateInterstitialDetailsSignal,
} from './interstitial-screen-context';

export const blockClass = `${prefix}--interstitial-screen`;

export type disableButtonConfigType = {
  skip?: boolean;
  back?: boolean;
  next?: boolean;
  start?: boolean;
};
/**
 * interstitial-screen main component
 * @element c4p-interstitial-screen
 * @fires c4p-interstitial-opened -  The custom event triggered after loading the component.
 * Its event.detail will provide you with carousal api methods for step navigation and method to disable any action button
 * * @fires c4p-interstitial-beingclosed - The name of the custom event fired before interstitial is being closed upon a user gesture.
 * Cancellation of this event stops the user-initiated action of closing the interstitial.
 * @fires c4p-interstitial-closed - The name of the custom event fired after this tearsheet is closed upon a user gesture.

 */

@customElement(`${prefix}-interstitial-screen`)
class CDSInterstitialScreen extends SignalWatcher(
  HostListenerMixin(LitElement)
) {
  /**
   * Specifies whether the component is shown as a full-screen
   * experience, else it is shown as a modal by default.
   */

  @property({ type: Boolean, reflect: true, attribute: 'fullscreen' })
  isFullScreen: boolean = false;
  /**
   * Specifies whether the component is currently open.
   */
  @property({ type: Boolean, reflect: true })
  open: boolean = false;

  @state()
  stepDetails: Array<{ stepTitle: string; name?: string }> = [];
  /**
   * @ignore
   */
  @query('cds-modal-body') modalBody!: HTMLElement;
  private header: Element | null = null;
  private body: Element | null = null;
  private footer: Element | null = null;

  private _wasOpen = false;

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener(`${prefix}-request-close`, this._handleClose);
  }
  firstUpdated() {
    // This has to do since cds-modal does not accept cds-body inside a slotted children.It will append it explicitly append cds body
    this.header = this.querySelector(`${prefix}-interstitial-screen-header`);
    this.body = this.querySelector(`${prefix}-interstitial-screen-body`);
    this.footer = this.querySelector(`${prefix}-interstitial-screen-footer`);

    this.requestUpdate(); // Ensure re-render
    resetInterstitialDetailsSignal();
  }
  updated(changedProps: Map<string | number | symbol, unknown>) {
    if (changedProps.has('open')) {
      const wasOpen = this._wasOpen;
      const isOpen = this.open;

      if (!wasOpen && isOpen) {
        this.dispatchInItializeEvent();
      }

      this._wasOpen = isOpen;
    }
  }

  private dispatchInItializeEvent = () => {
    setTimeout(() => {
      const { carouselAPI } = interstitialDetailsSignal.get();
      this.dispatchEvent(
        new CustomEvent(
          (
            this.constructor as typeof CDSInterstitialScreen
          ).eventOnInterstitialOpened,
          {
            bubbles: true,
            cancelable: true,
            composed: true,
            detail: {
              carouselAPI: carouselAPI
                ? {
                    next: carouselAPI.next,
                    prev: carouselAPI.prev,
                    reset: carouselAPI.reset,
                    gotToStep: carouselAPI.goToIndex,
                  }
                : undefined,
              setDisableActionButtons: this.setDisableActionButtons,
            },
          }
        )
      );
    });
  };

  private setDisableActionButtons = (config: disableButtonConfigType) => {
    updateInterstitialDetailsSignal({ name: 'disableActions', detail: config });
  };

  _handleClose(e) {
    this.open = false;
    e.stopPropagation();
    const init = {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: {
        triggeredBy: e.detail.triggeredBy,
      },
    };
    if (
      this.dispatchEvent(
        new CustomEvent(
          (this.constructor as typeof CDSInterstitialScreen).eventBeforeClose,
          init
        )
      )
    ) {
      this.dispatchEvent(
        new CustomEvent(
          (this.constructor as typeof CDSInterstitialScreen).eventClose,
          init
        )
      );
    }
  }

  //template methods

  renderFullScreen() {
    return this.open
      ? html`<div class="${blockClass} ${blockClass}--full-screen" role="main">
          <div class="${blockClass}--container">
            <slot></slot>
          </div>
        </div>`
      : nothing;
  }

  renderModal() {
    return html`<cds-modal
      key=${this.open}
      ?prevent-close-on-click-outside="true"
      class=${blockClass}
      size="lg"
      ?open="${this.open}"
    >
      ${this.header ? html`${this.header}` : nothing}
      <cds-modal-body class="${blockClass}__body-container">
        ${this.body ? html`${this.body}` : nothing}
      </cds-modal-body>
      <cds-modal-footer>
        ${this.footer ? html`${this.footer}` : nothing}
      </cds-modal-footer>
    </cds-modal>`;
  }

  render() {
    return this.isFullScreen
      ? html`${this.renderFullScreen()}`
      : html`${this.renderModal()}`;
  }

  static styles = styles;

  static get eventOnInterstitialOpened() {
    return `${prefix}-interstitial-opened`;
  }
  /**
   
   * The name of the custom event fired before interstitial is being closed upon a user gesture.
   * Cancellation of this event stops the user-initiated action of closing the interstitial.
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

export default CDSInterstitialScreen;
