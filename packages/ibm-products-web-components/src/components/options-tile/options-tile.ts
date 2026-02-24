/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { prefix } from '../../globals/settings';
import HostListenerMixin from '@carbon/web-components/es/globals/mixins/host-listener.js';
import styles from './options-tile.scss?lit';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';
import ChevronDown20 from '@carbon/icons/es/chevron--down/20';
import { iconLoader } from '@carbon/web-components/es/globals/internal/icon-loader.js';
import '@carbon/web-components/es/components/button/index.js';
import '@carbon/web-components/es/components/layer/index.js';

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
   * Determines if the tile is open by default
   */
  @property({ type: Boolean, reflect: true })
  defaultOpen?: boolean = false;

  /**
   * Determines the size of the header
   */
  @property({ type: String, reflect: true })
  size?: 'lg' | 'xl' = 'lg';

  /**
   * ID for the title
   */
  @property({ type: String, reflect: true })
  titleId: string = '';

  /**
   * Text for the title
   */
  @property({ type: String, reflect: true })
  titleText: string = '';

  /**
   * Using the native toggle event handler in details can cause an infinite loop
   * when setting the native open attribute. To combat this, the open state is kept
   * here and only referenced internally.
   */
  @state()
  private _open = false;

  /**
   * Tracks whether the toggle slot has content
   */
  @state()
  private _hasToggle = false;

  static get eventOpen() {
    return `${blockEvent}-open`;
  }

  static get eventClose() {
    return `${blockEvent}-close`;
  }

  private _handleToggleSlotChange(e: Event) {
    const target = e.target as HTMLSlotElement;
    const toggleElements = target?.assignedElements();
    this._hasToggle = toggleElements && toggleElements.length > 0;
  }

  private _toggle(evt: ToggleEvent) {
    const { newState } = evt;
    this._open = newState === 'open';
    this._open ? this._handleOpen() : this._handleClose();
  }

  private _handleOpen() {
    const init = {
      bubbles: true,
      composed: true,
      detail: {
        open: this._open,
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
        open: this._open,
      },
    };
    this.dispatchEvent(
      new CustomEvent(
        (this.constructor as typeof CDSOptionsTile).eventClose,
        init
      )
    );
  }

  render() {
    const { _open, _hasToggle, defaultOpen, size, titleId, titleText } = this;
    const classes = classMap({
      [`${blockClass}`]: true,
      [`${blockClass}--xl`]: size === 'xl',
      [`${blockClass}--open`]: _open,
    });

    const headerClasses = classMap({
      [`${blockClass}__header`]: true,
      [`${blockClass}__header--has-toggle`]: _hasToggle,
    });

    return html`
      <details
        @toggle=${this._toggle}
        class="${classes}"
        part="options-tile"
        open=${defaultOpen || nothing}
      >
        <summary class="${headerClasses}">
          <div class="${blockClass}__header-right">
            <slot
              name="toggle"
              @slotchange=${this._handleToggleSlotChange}
            ></slot>
          </div>
          <div class="${blockClass}__header-left">
            ${iconLoader(ChevronDown20, {
              slot: 'icon',
              class: `${blockClass}__chevron`,
            })}
            <div class="${blockClass}__title-block">
              <p class="${blockClass}__title" id="${titleId}">${titleText}</p>
              <div class="${blockClass}__summary">
                <slot name="summary"></slot>
              </div>
            </div>
          </div>
        </summary>
        <div class="${blockClass}__body">
          <cds-layer level="1">
            <slot name="body"></slot>
          </cds-layer>
        </div>
      </details>
    `;
  }

  static styles = styles;
}

export default CDSOptionsTile;
