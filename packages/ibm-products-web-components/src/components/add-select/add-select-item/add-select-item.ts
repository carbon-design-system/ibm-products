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
import '@carbon/web-components/es/components/checkbox/index.js';
import '@carbon/web-components/es/components/radio-button/index.js';
import { iconLoader } from '@carbon/web-components/es/globals/internal/icon-loader.js';
import ChevronRight16 from '@carbon/icons/es/chevron--right/16';

import { prefix } from '../../../globals/settings';
import styles from './add-select-item.scss?lit';

const blockClass = `${prefix}--add-select-item`;

/**
 * Add Select Item component - represents a single selectable item
 * @element c4p-add-select-item
 * @slot default - The main content of the item (title, subtitle, etc.)
 * @slot icon - Optional icon slot
 * @slot meta - Optional metadata slot
 * @fires c4p-add-select-item-select - Fired when item is selected/deselected
 */
@customElement(`${prefix}-add-select-item`)
class CDSAddSelectItem extends LitElement {
  /**
   * Unique identifier for the item
   */
  @property({ type: String, attribute: 'item-id' })
  itemId = '';

  /**
   * Item title
   */
  @property({ type: String })
  title = '';

  /**
   * Item subtitle
   */
  @property({ type: String })
  subtitle = '';

  /**
   * Item value
   */
  @property({ type: String })
  value = '';

  /**
   * Whether this is part of a multi-select list
   */
  @property({ type: Boolean })
  multi = false;

  /**
   * Whether the item is selected
   */
  @property({ type: Boolean, reflect: true })
  selected = false;

  /**
   * Whether the item is disabled
   */
  @property({ type: Boolean })
  disabled = false;

  /**
   * Tab index for keyboard navigation
   */
  @property({ type: Number, attribute: 'tab-index' })
  tabIndex = -1;

  /**
   * Whether the item has children (for navigation)
   */
  @property({ type: Boolean, attribute: 'has-children' })
  hasChildren = false;

  /**
   * Handle selection change
   */
  private _handleSelect(event: Event) {
    if (this.disabled) {
      event.preventDefault();
      return;
    }

    this.selected = !this.selected;

    // Emit selection event
    const init = {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: {
        itemId: this.itemId,
        selected: this.selected,
        value: this.value,
      },
    };
    this.dispatchEvent(
      new CustomEvent(
        (this.constructor as typeof CDSAddSelectItem).eventSelect,
        init
      )
    );
  }

  /**
   * Handle keyboard interaction
   */
  private _handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this._handleSelect(event);
    }
  }

  render() {
    const {
      itemId,
      title,
      subtitle,
      multi,
      selected,
      disabled,
      tabIndex,
      hasChildren,
      _handleSelect: handleSelect,
      _handleKeyDown: handleKeyDown,
    } = this;

    // Debug log
    if (hasChildren) {
      console.log(`Item "${title}" has children:`, hasChildren);
    }

    const rowClasses = classMap({
      [`${blockClass}-row`]: true,
      [`${blockClass}-row--selected`]: selected,
      [`${blockClass}-row--disabled`]: disabled,
    });

    return html`
      <div
        class=${rowClasses}
        role="row"
        aria-selected=${selected}
        tabindex=${tabIndex}
        @keydown=${handleKeyDown}
      >
        <div class="${blockClass}-cell" role="gridcell">
          <div class="${blockClass}-cell-wrapper">
            ${multi
              ? html`
                  <cds-checkbox
                    ?checked=${selected}
                    ?disabled=${disabled}
                    @cds-checkbox-changed=${handleSelect}
                    label-text=${title}
                  >
                  </cds-checkbox>
                `
              : html`
                  <cds-radio-button
                    ?checked=${selected}
                    ?disabled=${disabled}
                    @cds-radio-button-changed=${handleSelect}
                    label-text=${title}
                    value=${itemId}
                  >
                  </cds-radio-button>
                `}

            <div class="${blockClass}-content">
              <slot name="item-icon"></slot>
              <div class="${blockClass}-text">
                <div class="${blockClass}-title">${title}</div>
                ${subtitle &&
                html`<div class="${blockClass}-subtitle">${subtitle}</div>`}
              </div>
              <slot name="item-meta"></slot>
            </div>

            ${hasChildren
              ? html`
                  <div class="${blockClass}-nav-indicator">
                    <slot name="item-nav-icon">
                      ${iconLoader(ChevronRight16, {
                        slot: 'icon',
                      })}
                    </slot>
                  </div>
                `
              : nothing}
          </div>
        </div>
      </div>
    `;
  }

  /**
   * The name of the custom event fired when item is selected/deselected
   */
  static get eventSelect() {
    return `${prefix}-add-select-item-select`;
  }

  static styles = styles;
}

export default CDSAddSelectItem;
