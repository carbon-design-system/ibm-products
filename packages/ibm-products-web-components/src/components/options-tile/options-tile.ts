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

export const blockClass = `${prefix}--options-tile`;
const blockEvent = `${prefix}-options-tile`;

/**
 * OptionsTile.
 *
 * @element c4p-options-tile
 * @csspart options-tile The options tile
 * @fires c4p-options-tile-open Custom event fired when tile is opened
 * @fires c4p-options-tile-close Custom event fired when tile is closed
 * */

@customElement(`${prefix}-options-tile`)
class CDSOptionsTile extends HostListenerMixin(LitElement) {
  /**
   * If `true` the body of the component is shown
   */
  @property({ type: Boolean, reflect: true })
  open: boolean = false;

  /**
   * Determines the size of the header
   */
  @property({ type: String, reflect: true })
  size?: 'lg' | 'xl' = 'lg';

  /**
   * Text for the title
   */
  @property({ type: String, reflect: true })
  title: string = '';

  /**
   * ID for the title
   */
  @property({ type: String, reflect: true })
  titleId: string = '';

  static get eventOpen() {
    return `${blockEvent}-open`;
  }

  static get eventClose() {
    return `${blockEvent}-close`;
  }

  private _toggle() {
    this.open ? this._handleClose() : this._handleOpen();
  }

  private _handleOpen() {
    const init = {
      bubbles: true,
      composed: true,
      detail: {
        open: this.open,
      },
    };
    this.dispatchEvent(
      new CustomEvent(
        (this.constructor as typeof CDSOptionsTile).eventOpen,
        init
      )
    );
  }

  private _handleClose() {
    const init = {
      bubbles: true,
      composed: true,
      detail: {
        open: this.open,
      },
    };
    this.dispatchEvent(
      new CustomEvent(
        (this.constructor as typeof CDSOptionsTile).eventClose,
        init
      )
    );
  }

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
    const { open, size, title, titleId } = this;
    const classes = classMap({
      [`${blockClass}`]: true,
      [`${blockClass}--xl`]: size === 'xl',
      [`${blockClass}--open`]: open,
    });

    return html`
      <div part="options-tile" class="${classes}">
        <div class="${blockClass}__header">
          <div class="${blockClass}__header-left">
            <div class="${blockClass}__chevron" @click=${this._toggle}>
              ${ChevronDown20({ slot: 'icon' })}
            </div>
            <div class="${blockClass}__title-block">
              <p class="${blockClass}__title" id="${titleId}">${title}</p>
              <div class="${blockClass}__summary">
                <slot name="summary"></slot>
              </div>
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

  static styles = styles;
}

export default CDSOptionsTile;
