/**
 * @license
 *
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, LitElement, PropertyValues } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import HostListenerMixin from '@carbon/web-components/es/globals/mixins/host-listener.js';
import '@carbon/web-components/es/components/modal/index.js';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';
import '../truncated-text';
import styles from './tearsheet-header-content.scss?lit';

const blockClass = `${prefix}--tearsheet__next`;

/**
 * Tearsheet Header Content component - Contains the title, description, and decorative elements.
 *
 * @element c4p-tearsheet-header-content
 * @slot label - Optional label text above the title
 * @slot title-start - Content before the title (e.g., icons)
 * @slot title-end - Content after the title (e.g., badges, tags)
 * @slot description - Custom description content below the title
 * @slot decorator - AI label or other decorative elements
 */
@customElement(`${prefix}-tearsheet-header-content`)
class CDSTearsheetHeaderContent extends HostListenerMixin(LitElement) {
  @property({ reflect: true })
  slot = 'header-content';

  /**
   *  The main title of the tearsheet.
   */
  @property({ reflect: true })
  title: string = '';

  @query('slot[name="title-start"]')
  private _titleStartSlot?: HTMLSlotElement;

  @query('slot[name="title-end"]')
  private _titleEndSlot?: HTMLSlotElement;

  @state()
  private _hasTitleStart = false;

  @state()
  private _hasTitleEnd = false;

  protected firstUpdated(_changedProperties: PropertyValues): void {
    this._checkSlots();
  }

  private _checkSlots() {
    if (this._titleStartSlot) {
      const assignedNodes = this._titleStartSlot.assignedElements();
      this._hasTitleStart = assignedNodes.length > 0;
    }
    if (this._titleEndSlot) {
      const assignedNodes = this._titleEndSlot.assignedElements();
      this._hasTitleEnd = assignedNodes.length > 0;
    }
  }

  private _handleSlotChange() {
    this._checkSlots();
  }

  render() {
    return html`
      <div class="${blockClass}__header-content">
        <!-- Label -->
        <div class="${blockClass}__header-label">
          <slot name="label"></slot>
        </div>

        <div class="${blockClass}__content__title-wrapper">
          <h2 class="${blockClass}__header-title">
            <!-- Title Start -->
            ${this._hasTitleStart
              ? html`
                  <span class="${blockClass}__title-start">
                    <slot
                      name="title-start"
                      @slotchange="${this._handleSlotChange}"
                    ></slot>
                  </span>
                `
              : html`<slot
                  name="title-start"
                  @slotchange="${this._handleSlotChange}"
                ></slot>`}

            <!-- Title (main text) -->
            <c4p-truncated-text
              class="${blockClass}__content__title"
              id="${blockClass}__header-title__truncatedText"
              value="${this.title}"
            ></c4p-truncated-text>

            <!-- Title End -->
            ${this._hasTitleEnd
              ? html`
                  <span class="${blockClass}__title-end">
                    <slot
                      name="title-end"
                      @slotchange="${this._handleSlotChange}"
                    ></slot>
                  </span>
                `
              : html`<slot
                  name="title-end"
                  @slotchange="${this._handleSlotChange}"
                ></slot>`}
          </h2>
        </div>

        <!-- Description -->
        <div class="${blockClass}__header-description">
          <slot name="description"></slot>
        </div>

        <!-- Extra children -->
        <div class="${blockClass}__header-content--extra">
          <slot></slot>
        </div>
      </div>

      <!-- Header actions -->
      <div class="${blockClass}__header-actions">
        <slot name="header-actions"></slot>
      </div>
    `;
  }

  static styles = styles;
}
export default CDSTearsheetHeaderContent;
