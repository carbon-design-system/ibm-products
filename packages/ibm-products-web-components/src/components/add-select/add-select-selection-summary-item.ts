/**
 * @license
 *
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';
import '@carbon/web-components/es/components/accordion/index.js';
import '@carbon/web-components/es/components/icon-button/index.js';
import { iconLoader } from '@carbon/web-components/es/globals/internal/icon-loader.js';
import SubtractAlt16 from '@carbon/icons/es/subtract--alt/16';
import { prefix } from '../../globals/settings';
import type { AddSelectItem } from '@carbon/ibm-products-utilities';
import styles from './add-select-selection-summary-item.scss?lit';

const blockClass = `${prefix}--add-select__next`;

/**
 * Add Select Selection Summary Item — individual selected item display.
 * @element c4p-add-select-selection-summary-item
 * @slot default - Highest priority: replaces all rendering when populated
 * @slot accordion-title - Custom accordion title (used when use-accordion is true)
 * @slot accordion-body - Custom accordion body (used when use-accordion is true)
 * @fires c4p-add-select-selection-summary-item-remove - Fired when remove button clicked; detail: { itemId }
 */
@customElement(`${prefix}-add-select-selection-summary-item`)
class CDSAddSelectSelectionSummaryItem extends LitElement {
  /**
   * Item data (set via JS property)
   */
  @property({ attribute: false })
  item: AddSelectItem | null = null;

  /**
   * Use accordion pattern for display
   */
  @property({ type: Boolean, attribute: 'use-accordion', reflect: true })
  useAccordion = false;

  /**
   * Accessible label for the remove button
   */
  @property({ type: String, attribute: 'remove-button-label' })
  removeButtonLabel = 'Remove item';

  /** Whether the accordion-title slot has content */
  @state()
  private _hasAccordionTitleSlot = false;

  /** Whether the accordion-body slot has content */
  @state()
  private _hasAccordionBodySlot = false;

  private _handleSlotChange(
    slotName: 'accordion-title' | 'accordion-body' | 'default',
    event: Event
  ) {
    const slot = event.target as HTMLSlotElement;
    const hasContent = slot.assignedNodes({ flatten: true }).length > 0;
    if (slotName === 'accordion-title') {
      this._hasAccordionTitleSlot = hasContent;
    } else if (slotName === 'accordion-body') {
      this._hasAccordionBodySlot = hasContent;
    }
  }

  private _handleRemove() {
    if (!this.item) {
      return;
    }
    this.dispatchEvent(
      new CustomEvent(
        (
          this.constructor as typeof CDSAddSelectSelectionSummaryItem
        ).eventRemove,
        {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: { itemId: this.item.id },
        }
      )
    );
  }

  private _renderDefaultItemDetails() {
    const { item } = this;
    if (!item?.itemDetails || !Array.isArray(item.itemDetails)) {
      return nothing;
    }
    if (item.itemDetails.length === 0) {
      return nothing;
    }
    return html`
      ${item.itemDetails.map(
        ({ label, value: val }) => html`
          <div class="${blockClass}__selection-summary-item-entry">
            <p class="${blockClass}__selection-summary-item-header">${label}</p>
            <p class="${blockClass}__selection-summary-item-body">
              ${String(val)}
            </p>
          </div>
        `
      )}
    `;
  }

  private _renderRemoveButton() {
    return html`
      <div
        class="${blockClass}__selection-summary-item-remove-button-container"
      >
        <cds-icon-button
          label=${this.removeButtonLabel}
          kind="ghost"
          size="sm"
          class="${blockClass}__selection-summary-item-remove-button"
          @click=${(e: Event) => {
            e.stopPropagation();
            this._handleRemove();
          }}
        >
          ${iconLoader(SubtractAlt16, { slot: 'icon' })}
        </cds-icon-button>
      </div>
    `;
  }

  render() {
    const { item, useAccordion } = this;

    const itemClasses = classMap({
      [`${blockClass}__selection-summary-item`]: true,
      [`${blockClass}__selection-summary-item--accordion`]: useAccordion,
      [`${blockClass}__selection-summary-item--default`]: !useAccordion,
    });

    // Priority 1: default slot has content — render it directly
    // We always render the hidden slots so slotchange fires, then conditionally show content
    const defaultTitle = item
      ? html`
          <div class="${blockClass}__selection-summary-item-selected-item">
            <p class="${blockClass}__selection-summary-item-title">
              ${item.title}
            </p>
            ${item.subtitle
              ? html`<p class="${blockClass}__selection-summary-item-subtitle">
                  ${item.subtitle}
                </p>`
              : nothing}
          </div>
        `
      : nothing;

    return html`
      <div class=${itemClasses}>
        <!-- Hidden slot detectors (always rendered so slotchange fires) -->
        <slot
          name="accordion-title"
          style="display:none"
          @slotchange=${(e: Event) =>
            this._handleSlotChange('accordion-title', e)}
        ></slot>
        <slot
          name="accordion-body"
          style="display:none"
          @slotchange=${(e: Event) =>
            this._handleSlotChange('accordion-body', e)}
        ></slot>

        <!-- Priority 1: default slot -->
        <slot @slotchange=${(e: Event) => this._handleSlotChange('default', e)}>
          <!-- Priority 2: accordion mode -->
          ${useAccordion
            ? html`
                <cds-accordion align="start">
                  <cds-accordion-item>
                    <span slot="title">
                      ${this._hasAccordionTitleSlot
                        ? html`<slot name="accordion-title"></slot>`
                        : defaultTitle}
                      ${this._renderRemoveButton()}
                    </span>
                    ${this._hasAccordionBodySlot
                      ? html`<slot name="accordion-body"></slot>`
                      : this._renderDefaultItemDetails()}
                  </cds-accordion-item>
                </cds-accordion>
              `
            : html`
                <!-- Priority 3: non-accordion default rendering -->
                <div
                  class="${blockClass}__selection-summary-item-title-wrapper"
                >
                  ${defaultTitle} ${this._renderRemoveButton()}
                </div>
                <div class="${blockClass}__selection-summary-item-content">
                  ${this._renderDefaultItemDetails()}
                </div>
              `}
        </slot>
      </div>
    `;
  }

  /**
   * The name of the custom event fired when the remove button is clicked.
   * detail: { itemId: string }
   */
  static get eventRemove() {
    return `${prefix}-add-select-selection-summary-item-remove`;
  }

  static styles = styles;
}

export default CDSAddSelectSelectionSummaryItem;
