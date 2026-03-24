/**
 * @license
 *
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';
import { prefix } from '../../../globals/settings';
import styles from './add-select-list.scss?lit';

const blockClass = `${prefix}--add-select-list`;

/**
 * Add Select List component - contains the list of selectable items
 * @element c4p-add-select-list
 * @slot default - Contains c4p-add-select-item components
 */
@customElement(`${prefix}-add-select-list`)
class CDSAddSelectList extends LitElement {
  /**
   * Whether this is a multi-select list
   */
  @property({ type: Boolean })
  multi = false;

  /**
   * Reference to the list body element
   */
  @query(`.${blockClass}-body`)
  private _listBody?: HTMLElement;

  /**
   * Current focused item index
   */
  private _focusedIndex = 0;

  /**
   * Get all item elements
   */
  private _getItems(): HTMLElement[] {
    const slot = this.shadowRoot?.querySelector('slot');
    if (!slot) {
      return [];
    }

    const assignedElements = slot.assignedElements({ flatten: true });
    return assignedElements.filter(
      (el) => el.tagName.toLowerCase() === `${prefix}-add-select-item`
    ) as HTMLElement[];
  }

  /**
   * Update focus on items - only one item should have tabindex="0"
   */
  private _updateItemFocus(focusIndex: number) {
    const items = this._getItems();
    if (items.length === 0) {
      return;
    }

    // Ensure focusIndex is within bounds
    this._focusedIndex = Math.max(0, Math.min(focusIndex, items.length - 1));

    items.forEach((item, index) => {
      if (index === this._focusedIndex) {
        item.setAttribute('tabindex', '0');
        item.focus();
      } else {
        item.setAttribute('tabindex', '-1');
      }
    });
  }

  /**
   * Handle keyboard navigation
   */
  private _handleKeyDown(event: KeyboardEvent) {
    const items = this._getItems();
    if (items.length === 0) {
      return;
    }

    const currentItem = items[this._focusedIndex];
    let handled = false;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this._updateItemFocus(this._focusedIndex + 1);
        handled = true;
        break;

      case 'ArrowUp':
        event.preventDefault();
        this._updateItemFocus(this._focusedIndex - 1);
        handled = true;
        break;

      case 'ArrowRight':
        // Check if current item has children
        if (currentItem && currentItem.hasAttribute('has-children')) {
          event.preventDefault();
          // Trigger the item's navigate event
          const navigateEvent = new CustomEvent(
            'c4p-add-select-item-navigate',
            {
              bubbles: true,
              composed: true,
              detail: {
                itemId: currentItem.getAttribute('item-id'),
                title: currentItem.getAttribute('title'),
                parentId: currentItem.getAttribute('parent-id') || '',
              },
            }
          );
          currentItem.dispatchEvent(navigateEvent);
          handled = true;
        }
        break;

      case 'Enter':
      case ' ':
        event.preventDefault();
        // Trigger the item's selection
        if (currentItem) {
          const isSelected = currentItem.hasAttribute('selected');
          const newSelected = !isSelected;

          // Update the item's selected attribute
          if (newSelected) {
            currentItem.setAttribute('selected', '');
          } else {
            currentItem.removeAttribute('selected');
          }

          // Dispatch selection event
          const selectEvent = new CustomEvent('c4p-add-select-item-select', {
            bubbles: true,
            composed: true,
            detail: {
              itemId: currentItem.getAttribute('item-id'),
              selected: newSelected,
              value: currentItem.getAttribute('value'),
            },
          });
          currentItem.dispatchEvent(selectEvent);
        }
        handled = true;
        break;

      case 'Home':
        if (event.ctrlKey) {
          event.preventDefault();
          this._updateItemFocus(0);
          handled = true;
        }
        break;

      case 'End':
        if (event.ctrlKey) {
          event.preventDefault();
          this._updateItemFocus(items.length - 1);
          handled = true;
        }
        break;
    }

    if (handled) {
      event.stopPropagation();
    }
  }

  /**
   * Initialize focus management after first update
   */
  firstUpdated() {
    // Set initial focus state
    this._updateItemFocus(0);
  }

  /**
   * Handle slot change to update focus management
   */
  private _handleSlotChange() {
    // Ensure focus is maintained when items change
    const items = this._getItems();
    if (items.length > 0) {
      // Reset to first item if current index is out of bounds
      if (this._focusedIndex >= items.length) {
        this._focusedIndex = 0;
      }
      // Re-apply focus management to new items
      this._updateItemFocus(this._focusedIndex);
    }
  }

  /**
   * Update lifecycle - ensure focus is maintained when items change
   */
  updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties);

    // Re-initialize focus when items might have changed
    const items = this._getItems();
    if (items.length > 0) {
      // Ensure at least one item has tabindex="0"
      const hasFocusableItem = items.some(
        (item) => item.getAttribute('tabindex') === '0'
      );
      if (!hasFocusableItem) {
        this._updateItemFocus(0);
      }
    }
  }

  render() {
    const {
      multi,
      _handleKeyDown: handleKeyDown,
      _handleSlotChange: handleSlotChange,
    } = this;

    const listClasses = classMap({
      [`${blockClass}-wrapper`]: true,
      [`${blockClass}-wrapper-multi`]: multi,
    });

    return html`
      <div class=${listClasses}>
        <div class="${blockClass}">
          <div
            class="${blockClass}-body"
            role="treegrid"
            aria-label="Add select list"
            @keydown=${handleKeyDown}
          >
            <slot @slotchange=${handleSlotChange}></slot>
          </div>
        </div>
      </div>
    `;
  }

  static styles = styles;
}

export default CDSAddSelectList;
