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

import styles from './truncated-string.scss?lit';

const componentName = 'truncated-string';
export const blockClass = `${prefix}--${componentName}`;
const elementName = `${prefix}-${componentName}`; // c4p-truncated-string

@customElement(elementName)
export class CDSTruncatedString extends LitElement {
  @property({ type: Number }) lines = 0;
  @property({ type: String }) value = '';
  @property({ attribute: 'expand-label', type: String, reflect: true })
  expandLabel = '...more';
  @property({ attribute: 'collapse-label', type: String, reflect: true })
  collapseLabel = '...less';
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

  private _toggleLines() {
    const isExpanded = this._localLines === undefined;
    this._localLines = isExpanded ? this.lines : undefined;

    setTimeout(() => {
      this._textElement?.querySelector('button')?.focus();
    });
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

    const label = isExpanded ? this.collapseLabel : this.expandLabel;

    return html`
      <button class="${className}" @click=${this._toggleLines}>${label}</button>
    `;
  }

  render() {
    const contentStyle =
      this.with === 'tooltip' || this.with === null
        ? `--line-clamp: ${this._localLines};`
        : this._localLines != null && this.with !== null
          ? `max-block-size: ${this._localLines * this._lineHeight}px;`
          : '';

    const contentClass = classMap({
      [`${blockClass}_content`]: true,
    });

    const content = html`
      <div class="${contentClass}" style="${contentStyle}">
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
    [elementName]: CDSTruncatedString;
  }
}

export default CDSTruncatedString;
