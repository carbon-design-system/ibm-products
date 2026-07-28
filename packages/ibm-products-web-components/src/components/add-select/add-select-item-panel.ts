/**
 * @license
 *
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';
import '@carbon/web-components/es/components/icon-button/index.js';
import { iconLoader } from '@carbon/web-components/es/globals/internal/icon-loader.js';
import Close16 from '@carbon/icons/es/close/16';
import { prefix } from '../../globals/settings';
import type { AddSelectItem } from '@carbon/ibm-products-utilities';
import styles from './add-select-item-panel.scss?lit';

const blockClass = `${prefix}--add-select__next`;

/**
 * Add Select Item Panel — side panel displaying detailed information about an item.
 * CSS modifier `${blockClass}__item-summary-panel--open` is added when `open` is true,
 * enabling CSS-driven slide-in/out transitions.
 * @element c4p-add-select-item-panel
 * @slot default - Highest priority: replaces all body rendering when populated
 * @slot render-item - Medium priority: receives item for custom rendering
 * @fires c4p-add-select-item-panel-close - Fired when close icon is clicked
 */
@customElement(`${prefix}-add-select-item-panel`)
class CDSAddSelectItemPanel extends LitElement {
  /**
   * Panel title
   */
  @property({ type: String })
  title = 'Item details';

  /**
   * Item data (set via JS property)
   */
  @property({ attribute: false })
  item: AddSelectItem | null = null;

  /**
   * Controls panel visibility via CSS modifier class (enables CSS transitions)
   */
  @property({ type: Boolean, reflect: true })
  open = false;

  /**
   * Accessible label for the close icon button
   */
  @property({ type: String, attribute: 'close-icon-description' })
  closeIconDescription = 'Close';

  private _handleClose() {
    this.dispatchEvent(
      new CustomEvent(
        (this.constructor as typeof CDSAddSelectItemPanel).eventClose,
        { bubbles: true, cancelable: true, composed: true }
      )
    );
  }

  private _renderDefaultContent() {
    const { item } = this;
    if (!item) {
      return nothing;
    }
    const { itemDetails } = item;
    if (
      !itemDetails ||
      !Array.isArray(itemDetails) ||
      itemDetails.length === 0
    ) {
      return nothing;
    }
    return html`
      ${itemDetails.map(
        ({ label, value: val }) => html`
          <div class="${blockClass}__item-summary-panel-entry">
            <p class="${blockClass}__item-summary-panel-entry-title">
              ${label}
            </p>
            <p class="${blockClass}__item-summary-panel-entry-body">
              ${String(val)}
            </p>
          </div>
        `
      )}
    `;
  }

  render() {
    const { title, open, closeIconDescription } = this;

    const panelClasses = classMap({
      [`${blockClass}__item-summary-panel`]: true,
      [`${blockClass}__item-summary-panel--open`]: open,
    });

    return html`
      <div class=${panelClasses}>
        <!-- Header -->
        <div class="${blockClass}__item-summary-panel-header">
          <p class="${blockClass}__item-summary-panel-title">${title}</p>
          <cds-icon-button
            label=${closeIconDescription}
            kind="ghost"
            size="sm"
            class="${blockClass}__item-summary-panel-close"
            @click=${this._handleClose}
          >
            ${iconLoader(Close16, { slot: 'icon' })}
          </cds-icon-button>
        </div>

        <!-- Body: priority 1=default slot, 2=render-item slot, 3=default template -->
        <div class="${blockClass}__item-summary-panel-body">
          <slot>
            <slot name="render-item"> ${this._renderDefaultContent()} </slot>
          </slot>
        </div>
      </div>
    `;
  }

  /**
   * The name of the custom event fired when the close icon is clicked.
   */
  static get eventClose() {
    return `${prefix}-add-select-item-panel-close`;
  }

  static styles = styles;
}

export default CDSAddSelectItemPanel;
