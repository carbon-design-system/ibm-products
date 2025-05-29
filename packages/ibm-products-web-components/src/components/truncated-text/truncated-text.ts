/**
 * @license
 *
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { html, LitElement } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';
import { prefix, carbonPrefix } from '../../globals/settings';
import '@carbon/web-components/es/components/tooltip/index.js';
import '@carbon/web-components/es/components/button/button.js';
import '@carbon/web-components/es/components/link/index.js';

import styles from './truncated-text.scss?lit';

const componentName = 'truncated-text';
export const blockClass = `${prefix}--${componentName}`;
const elementName = `${prefix}-${componentName}`; // c4p-truncated-text

/**
 * TruncatedText.
 *
 * @element c4p-truncated-text
 */
@customElement(elementName)
export class CDSTruncatedText extends LitElement {
  /**
   * The maximum number of lines to display before truncation.
   */
  @property({ type: Number, reflect: true }) lines = 0;

  /**
   * The string value to be truncated.
   */
  @property({ type: String, attribute: 'value', reflect: true }) value = '';

  /**
   * The label on expand button.
   */
  @property({ attribute: 'expand-label', type: String, reflect: true })
  expandLabel = '...more';

  /**
   * The label on the collapse button.
   */
  @property({ attribute: 'collapse-label', type: String, reflect: true })
  collapseLabel = '...less';

  /**
   * The method to display the full text when truncated. Options are "tooltip" or "expand". if not passed, the text would just be truncated with ellipsis.
   */
  @property({ type: String, reflect: true }) with: 'tooltip' | 'expand' | null =
    null;

  @state() private _isOverflowing: boolean = false;
  @state() private _isExpanded: boolean = false;
  @state() private _maxHeight: string = 'none';

  @query(`.${blockClass}_content`) private _textElement!: HTMLElement;
  private _lineHeight: number = 0;
  private _isLayered: boolean = false;
  private _resizeObserver?: ResizeObserver;

  static styles = styles;

  connectedCallback() {
    super.connectedCallback();
    this._isLayered = !!this.closest(`${carbonPrefix}-layer`);
  }

  disconnectedCallback() {
    this._resizeObserver?.disconnect();
    super.disconnectedCallback();
  }

  protected firstUpdated() {
    requestAnimationFrame(() => {
      const computedStyle = getComputedStyle(this._textElement);
      this._lineHeight = parseFloat(computedStyle.lineHeight);
      this._setupResizeObserver();
    });
  }

  private _updateMaxHeight() {
    if (this.with !== 'expand') {
      return;
    }
    requestAnimationFrame(() => {
      if (!this._textElement) {
        return;
      }
      this._maxHeight =
        this.lines > 0 && !this._isExpanded
          ? `${this.lines * this._lineHeight}px`
          : `${this._textElement.scrollHeight}px`;
    });
  }

  private _setupResizeObserver() {
    if (!this._textElement) {
      return;
    }

    if (this._resizeObserver) {
      this._resizeObserver.disconnect();
    }

    this._resizeObserver = new ResizeObserver(() => {
      this._updateOverflowStatus();
    });

    this._resizeObserver.observe(this);
  }

  protected updated(changed: Map<string, unknown>) {
    if (changed.has('lines') || changed.has('value')) {
      this._updateOverflowStatus();
      this._updateMaxHeight();
    }
  }

  private _updateOverflowStatus() {
    if (!this._textElement || this.lines <= 0) {
      return;
    }
    this._updateMaxHeight();
    setTimeout(() => {
      const { scrollHeight, clientHeight } = this._textElement;
      const buffer = this._lineHeight / 2; // buffer of at least half of line height for a stable outcome

      const isOverflowing = scrollHeight > clientHeight + buffer;

      if (isOverflowing !== this._isOverflowing) {
        this._isOverflowing = isOverflowing;
      }
    });
  }

  private _toggleExpansion() {
    this._isExpanded = !this._isExpanded;
    this._updateMaxHeight();
    this._textElement?.classList.add(`${blockClass}_transition`);
    const onTransitionEnd = () => {
      this._textElement?.querySelector('button')?.focus();
      this._textElement?.removeEventListener('transitionend', onTransitionEnd);
    };
    this._textElement?.addEventListener('transitionend', onTransitionEnd);
  }

  private _renderToggleButton() {
    if (this.with !== 'expand') {
      return;
    }
    const className = classMap({
      [`${blockClass}_button-collapse`]: this._isExpanded,
      [`${blockClass}_button-expand`]: !this._isExpanded,
      [`${blockClass}_button-layered`]: this._isLayered,
      [`${blockClass}_button-hide`]: !this._isOverflowing && !this._isExpanded,
    });
    const label = this._isExpanded
      ? this.collapseLabel || '...less'
      : this.expandLabel || '...more';
    return html`
      <button class="${className}" @click=${this._toggleExpansion}>
        ${label}
      </button>
    `;
  }

  render() {
    // Apply different styles based on truncation method
    const contentStyle =
      this.with === 'tooltip' || !this.with
        ? `--line-clamp: ${this._isExpanded ? 'none' : this.lines};`
        : `max-block-size: ${this._maxHeight};`;

    const contentClass = classMap({
      [`${blockClass}_content`]: true,
    });

    const content = html`
      <div
        class="${contentClass}"
        style="${contentStyle}"
        tabindex=${this.with === 'tooltip' && this._isOverflowing
          ? '0'
          : undefined}
      >
        ${this.value} ${this._renderToggleButton()}
      </div>
    `;

    return this.with === 'tooltip' && this._isOverflowing
      ? html`
          <cds-tooltip align="bottom" enter-delay-ms="0" leave-delay-ms="0">
            ${content}
            <cds-tooltip-content>${this.value}</cds-tooltip-content>
          </cds-tooltip>
        `
      : html`<div style="position: relative; background-color: inherit;">
          ${content}
        </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [elementName]: CDSTruncatedText;
  }
}

export default CDSTruncatedText;
