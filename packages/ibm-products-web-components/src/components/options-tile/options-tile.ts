/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { prefix } from '../../globals/settings';
import HostListenerMixin from '@carbon/web-components/es/globals/mixins/host-listener.js';
import styles from './options-tile.scss?lit';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';
import ChevronDown20 from '@carbon/web-components/es/icons/chevron--down/20';

const blockClass = `${prefix}--options-tile`;

/**
 * OptionsTile.
 *
 * @element c4p-options-tile
 * */

@customElement(`${prefix}-options-tile`)
class CDSOptionsTile extends HostListenerMixin(LitElement) {
  /**
   * If `true` the body of the component is shown
   */
  @property({ type: Boolean })
  open: boolean = false;

  /**
   * Callback fired when the component requests to be closed
   */
  @property({ type: Function })
  onClose?: (evt: Event) => void;

  /**
   * Callback fired when the component requests to be opened
   */
  @property({ type: Function })
  onOpen?: (evt: Event) => void;

  /**
   * Determines the size of the header
   */
  @property({ type: String })
  size?: 'lg' | 'xl' = 'lg';

  /**
   * Text that is displayed under the title
   */
  @property({ type: String })
  summary?: string;

  /**
   * Text for the title
   */
  @property({ type: String })
  title: string = '';

  /**
   * ID for the title
   */
  @property({ type: String })
  titleId: string = '';

  getBody() {
    const { open } = this;
    if (open) {
      return html` <div class="${blockClass}__body">
        <div class="${blockClass}__body-content"><slot name="body"></slot></div>
      </div>`;
    }
    return nothing;
  }

  render() {
    const { open, size, summary, title, titleId } = this;
    const classes = classMap({
      [`${blockClass}`]: true,
      [`${blockClass}--xl`]: size === 'xl',
      [`${blockClass}--open`]: open,
    });

    return html`
      <div class="${classes}">
        <div class="${blockClass}__header">
          <div class="${blockClass}__header-left">
            <div class="${blockClass}__chevron" @click=${this._toggle}>
              ${ChevronDown20({ slot: 'icon' })}
            </div>
            <div class="${blockClass}__title-block">
              <p class="${blockClass}__title" id="${titleId}">${title}</p>
              <p class="${blockClass}__summary">${summary}</p>
            </div>
          </div>
          <div class="${blockClass}__header-right">
            <slot name="toggle"></slot>
          </div>
        </div>
        ${this.getBody()}
      </div>
    `;
  }

  private _toggle() {
    if (this.open) {
      this._onClose();
    } else {
      this._onOpen();
    }
  }

  private _onOpen() {
    const options = {
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent('onOpen', options));
  }

  private _onClose() {
    const options = {
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent('onClose', options));
  }

  static styles = styles;
}

export default CDSOptionsTile;
