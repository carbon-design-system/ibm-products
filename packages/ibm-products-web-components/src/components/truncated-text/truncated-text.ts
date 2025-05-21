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

  @state() private _localLines: number | undefined = this.lines;
  @state() private _isOverflowing = false;

  @query(`.${blockClass}_content`) private _textElement!: HTMLElement;
  private _lineHeight = 0;
  private _isLayered = this.closest(`${carbonPrefix}-layer`);

  static styles = styles;

  private resizeObserver?: ResizeObserver;

  protected firstUpdated() {
    this._localLines = this.lines;
    const computedStyle = getComputedStyle(this._textElement);
    this._lineHeight = parseFloat(computedStyle.lineHeight);
    this._updateOverflowStatus();
    this.setupResizeObserver();

    // apply transitions after first render
    if (this._textElement) {
      setTimeout(() => {
        this._textElement.classList.add(`${blockClass}_transition`);
      }, 0);
    }
  }

  private setupResizeObserver() {
    if (this._textElement) {
      this.resizeObserver = new ResizeObserver(() => {
        this._updateOverflowStatus();
      });
      this.resizeObserver.observe(this);
    }
  }

  protected updated(changed: Map<string, unknown>) {
    if (changed.has('lines')) {
      this._localLines = this.lines;
      this._updateOverflowStatus();
    }
    if (changed.has('value')) {
      this._updateOverflowStatus();
    }
  }

  private _updateOverflowStatus() {
    if (!this._textElement || !this._lineHeight) {
      return;
    }
    const { scrollHeight, clientHeight } = this._textElement;
    const buffer = Math.ceil(
      clientHeight / (2 * Math.max(1, this._localLines || 1))
    );
    const overflowing = scrollHeight > clientHeight + buffer;
    if (overflowing !== this._isOverflowing) {
      this._isOverflowing = overflowing;
    }
  }

  private _toggleExpansion() {
    const isExpanded = this._localLines === undefined;
    this._localLines = isExpanded ? this.lines : undefined;

    const onTransitionEnd = () => {
      this._textElement?.querySelector('button')?.focus();
      this._textElement?.removeEventListener('transitionend', onTransitionEnd);
    };
    this._textElement?.addEventListener('transitionend', onTransitionEnd);
  }

  private _renderToggleButton() {
    if (!this._isOverflowing && this._localLines !== undefined) {
      return null;
    }

    const isExpanded = this._localLines === undefined;
    const className = classMap({
      [`${blockClass}_collapse`]: isExpanded,
      [`${blockClass}_expand`]: !isExpanded,
      [`${blockClass}_layered`]: !!this._isLayered,
    });

    const label = isExpanded
      ? this.collapseLabel || '...less'
      : this.expandLabel || '...more';

    return html`
      <button class="${className}" @click=${this._toggleExpansion}>
        ${label}
      </button>
    `;
  }

  render() {
    const contentStyle =
      this.with === 'tooltip' || !this.with
        ? `--line-clamp: ${this._localLines};`
        : !!this._localLines && this.with === 'expand'
          ? `max-block-size: ${this._localLines * this._lineHeight}px;`
          : `max-block-size: ${this._textElement?.scrollHeight}px`;

    const contentClass = classMap({
      [`${blockClass}_content`]: true,
    });

    const content = html`
      <div
        class="${contentClass}"
        style="${contentStyle}"
        tabindex=${this.with === 'tooltip' ? '0' : undefined}
      >
        ${this.value}
        ${this.with === 'expand' ? this._renderToggleButton() : null}
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
