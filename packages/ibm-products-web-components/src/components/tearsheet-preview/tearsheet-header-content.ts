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
import '@carbon/web-components/es/components/icon-button/index.js';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';
import '../truncated-text';
import styles from './tearsheet-header-content.scss?lit';
import { MatchMediaController } from '../../globals/js/utils/match-media-controller';
import { breakpoints } from '@carbon/layout';
import { registerFocusableContainers } from '../../utilities/manageFocusTrap/manageFocusTrap';
import { tearsheetSignal } from './tearsheet-signal';
import { SignalWatcher } from '@lit-labs/signals';
import Close20 from '@carbon/icons/es/close/20.js';
import { iconLoader } from '@carbon/web-components/es/globals/internal/icon-loader.js';

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
class CDSTearsheetHeaderContent extends SignalWatcher(
  HostListenerMixin(LitElement)
) {
  @property({ reflect: true })
  slot = 'header-content';

  /**
   *  The main title of the tearsheet.
   */
  @property({ reflect: true })
  title: string = '';

  /**
   * Internal ID for the title element (auto-generated, used for aria-labelledby on the modal)
   */
  private _titleId: string = `${blockClass}__title-${Math.random().toString(36).substr(2, 9)}`;

  /**
   * Public getter for the title ID (used by parent tearsheet for aria-labelledby)
   */
  get titleId(): string {
    return this._titleId;
  }

  @query('slot[name="title-start"]')
  private _titleStartSlot?: HTMLSlotElement;

  @query('slot[name="title-end"]')
  private _titleEndSlot?: HTMLSlotElement;

  @query('slot[name="decorator"]')
  private _decoratorSlot?: HTMLSlotElement;

  @state()
  private _hasTitleStart = false;

  @state()
  private _hasTitleEnd = false;

  @state()
  private _hasDecorator = false;

  @state()
  private _hasAILabel = false;

  @state()
  private _isMobileOrNarrow = false;

  private mdMediaQuery = `(max-width: ${breakpoints.md.width})`;
  private isMobileDevice = new MatchMediaController(
    this,
    this.mdMediaQuery,
    false
  );

  private get isNarrowVariant(): boolean {
    const tearsheet = this.closest(`${prefix}-preview-tearsheet`);
    return tearsheet?.getAttribute('variant') === 'narrow';
  }

  protected firstUpdated(_changedProperties: PropertyValues): void {
    this._checkSlots();
    this._isMobileOrNarrow =
      this.isMobileDevice?.matches || this.isNarrowVariant;

    // Register with the current tearsheet's uniqueId
    const uniqueId = tearsheetSignal.get().uniqueId;
    if (uniqueId) {
      registerFocusableContainers(this.shadowRoot, uniqueId);
    }
  }

  protected updated(_changedProperties: PropertyValues): void {
    const previousIsMobileOrNarrow = this._isMobileOrNarrow;
    this._isMobileOrNarrow =
      this.isMobileDevice?.matches || this.isNarrowVariant;

    if (this._isMobileOrNarrow !== previousIsMobileOrNarrow) {
      this.requestUpdate();
    }

    this._updateDecoratorSize();
    this._updateHeaderOffset();
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

  private _handleDecoratorChange(e: Event) {
    this._hasAILabel = false;
    const childItems = (e.target as HTMLSlotElement).assignedElements();
    this._hasDecorator = childItems.length > 0;
    if (this._hasDecorator) {
      for (const item of childItems) {
        if (item.tagName.toLowerCase() === 'cds-ai-label') {
          this._hasAILabel = true;
          break;
        }
      }
      // Set decorator size based on collapse state
      const { fullyCollapsed } = tearsheetSignal.get();
      childItems[0].setAttribute('size', fullyCollapsed ? 'xs' : 'sm');

      // Update host attributes for CSS targeting
      const host = this.closest(
        `${prefix}-tearsheet-header`
      ) as HTMLElement | null;
      if (host) {
        host.setAttribute(this._hasAILabel ? 'ai-label' : 'decorator', '');
        host.removeAttribute(this._hasAILabel ? 'decorator' : 'ai-label');
      }
    } else {
      const host = this.closest(
        `${prefix}-tearsheet-header`
      ) as HTMLElement | null;
      if (host) {
        host.removeAttribute('decorator');
        host.removeAttribute('ai-label');
      }
    }
    // Update header offset CSS variable
    this._updateHeaderOffset();
  }

  private _updateDecoratorSize() {
    const { fullyCollapsed } = tearsheetSignal.get();
    const assigned = this._decoratorSlot?.assignedElements({ flatten: true });
    if (assigned?.length) {
      assigned[0].setAttribute('size', fullyCollapsed ? 'xs' : 'sm');
    }
  }

  private _updateHeaderOffset() {
    const { open, isSm } = tearsheetSignal.get();
    if (!open) {
      return;
    }
    const assigned =
      this._decoratorSlot?.assignedElements({ flatten: true }) ?? [];
    const decoratorWidth = assigned[0]?.getBoundingClientRect().width ?? 0;
    const { hideCloseButton } = tearsheetSignal.get();
    const closeButtonWidth = !hideCloseButton ? 32 : 0;
    const offset = decoratorWidth + closeButtonWidth + (isSm ? 8 : 0);
    document.documentElement.style.setProperty(
      '--tearsheet-header-action-offset',
      `${offset}px`
    );
  }

  render() {
    const { fullyCollapsed, hideCloseButton, closeIconDescription, onClose } =
      tearsheetSignal.get();

    const decoratorTemplate = html`
      <div
        class="${blockClass}__decorator"
        role="${this._hasDecorator ? 'complementary' : undefined}"
        aria-label="${this._hasDecorator ? 'Decorator' : undefined}"
      >
        <slot
          name="decorator"
          @slotchange=${this._handleDecoratorChange}
        ></slot>
      </div>
    `;

    const closeButtonTemplate = !hideCloseButton
      ? html`
          <div class="${blockClass}__close-button cds--modal-close-button">
            <cds-icon-button
              class="cds--modal-close"
              kind="ghost"
              size="${fullyCollapsed ? 'md' : 'lg'}"
              align="left"
              aria-label="${closeIconDescription || 'Close'}"
              @click="${() => onClose?.()}"
            >
              ${iconLoader(Close20, {
                slot: 'icon',
                class: 'cds--modal-close__icon',
              })}
              <span slot="tooltip-content"
                >${closeIconDescription || 'Close'}</span
              >
            </cds-icon-button>
          </div>
        `
      : html``;

    const headerActionsTemplate = html`
      <div class="${blockClass}__header-actions">
        <slot name="header-actions"></slot>
      </div>
    `;

    const headerContentTemplate = html`
      <div class="${blockClass}__header-content">
        <!-- Label -->
        <div class="${blockClass}__header-label">
          <slot name="label"></slot>
        </div>

        <div class="${blockClass}__content__title-wrapper">
          <h2 class="${blockClass}__header-title" id="${this._titleId}">
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

            <!-- Title (main text) — limit to 1 line when collapsed so it fits
                 in the reduced-height collapsed bar -->
            <c4p-truncated-text
              class="${blockClass}__content__title"
              id="${blockClass}__header-title__truncatedText"
              value="${this.title}"
              lines="${tearsheetSignal.get().fullyCollapsed ? 1 : 2}"
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
    `;

    // DOM order drives tab order:
    //   Desktop/Wide: header-actions → decorator → close-button → header-content
    //   Mobile/Narrow: header-content → header-actions (natural stacking)
    // CSS `order` property handles the visual layout independently.
    return this._isMobileOrNarrow
      ? html`${headerContentTemplate} ${headerActionsTemplate}`
      : html`${headerActionsTemplate} ${decoratorTemplate}
        ${closeButtonTemplate} ${headerContentTemplate}`;
  }

  static styles = styles;
}
export default CDSTearsheetHeaderContent;
