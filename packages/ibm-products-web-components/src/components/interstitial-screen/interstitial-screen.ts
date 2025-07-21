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
const blockEvent = `${prefix}-interstitial-screen`;

export type disableButtonConfigType = {
  skip?: boolean;
  back?: boolean;
  next?: boolean;
  start?: boolean;
};
/**
 * interstitial-screen.
 *
 * @element c4p-interstitial-screen
 * @csspart interstitial-screen The options tile
 * @fires c4p-options-tile-open Custom event fired when tile is opened
 * @fires c4p-options-tile-close Custom event fired when tile is closed
 * */

@customElement(`${prefix}-interstitial-screen`)
class CDSInterstitialScreen extends SignalWatcher(
  HostListenerMixin(LitElement)
) {
  /**
   * Specifies whether the component is shown as a full-screen
   * experience, else it is shown as a modal by default.
   */

  @property({ type: Boolean, reflect: true, attribute: 'full-screen' })
  isFullScreen: boolean = false;
  /**
   * Specifies whether the component is currently open.
   */
  @property({ type: Boolean, reflect: true })
  open: boolean = false;

  @state()
  stepDetails: Array<{ stepTitle: string; name?: string }> = [];

  @query('cds-modal-body') modalBody!: HTMLElement;
  private header: Element | null = null;
  private body: Element | null = null;
  private footer: Element | null = null;

  private _wasOpen = false;

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener(`${prefix}-interstitial-closed`, this._handleClose);
  }
  firstUpdated() {
    // This has to do since cds-modal does not accept cds-body inside a slotted children.It will append it explicitly append cds body
    this.header = this.querySelector('c4p-interstitial-screen-header');
    this.body = this.querySelector('c4p-interstitial-screen-body');
    this.footer = this.querySelector('c4p-interstitial-screen-footer');

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
      const carouselAPI = interstitialDetailsSignal.get().carouselAPI;
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
      ${this.footer ? html`${this.footer}` : nothing}
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
}

export default CDSInterstitialScreen;
