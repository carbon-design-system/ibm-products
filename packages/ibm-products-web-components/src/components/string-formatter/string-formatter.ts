/**
 * @license
 *
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';
import { prefix } from '../../globals/settings';
// todo: replace with definition tooltip to get tab stop
import '@carbon/web-components/es/components/tooltip/index.js';

import styles from './string-formatter.scss?lit';

const componentName = 'string-formatter';
export const blockClass = `${prefix}--${componentName}`;
const elementName = `${prefix}-${componentName}`; // c4p-string-formatter

/**
 * StringFormatter.
 *
 * @element c4p-string-formatter
 */
@customElement(elementName)
export class CDSStringFormatter extends LitElement {
  @property({ type: Number }) lines = 0;
  @property({ type: String }) value = '';

  @query(`.${blockClass}_content`)
  private textElement!: HTMLElement;

  private isOverflowing = false;
  private resizeObserver?: ResizeObserver;

  static styles = styles;

  protected firstUpdated() {
    this.updateOverflowStatus();
    this.setupResizeObserver();
  }

  protected updated(changedProperties: Map<string, unknown>) {
    super.updated(changedProperties);
    if (changedProperties.has('lines') || changedProperties.has('value')) {
      this.updateOverflowStatus();
    }
  }

  private setupResizeObserver() {
    if (this.textElement) {
      this.resizeObserver = new ResizeObserver(() => {
        this.updateOverflowStatus();
      });
      this.resizeObserver.observe(this);
    }
  }

  private updateOverflowStatus() {
    if (this.textElement) {
      this.textElement.style[`--line-clamp`] = this.lines;
      const { scrollHeight, clientHeight } = this.textElement;
      const buffer = clientHeight / (2 * this.lines);
      // add a buffer of at least half of line height/clientHeight. to get a stable outcome.
      this.isOverflowing = scrollHeight > clientHeight + buffer;
      this.requestUpdate();
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.resizeObserver?.disconnect();
  }

  render() {
    const content = html`
      <div class="${blockClass}_content" style="--line-clamp: ${this.lines};">
        ${this.value}
      </div>
    `;

    return this.isOverflowing
      ? html`
          <cds-tooltip align="bottom" enter-delay-ms="0" leave-delay-ms="0">
            ${content}
            <cds-tooltip-content id="content"
              >${this.value}</cds-tooltip-content
            >
          </cds-tooltip>
        `
      : content;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [elementName]: CDSStringFormatter;
  }
}

export default CDSStringFormatter;
