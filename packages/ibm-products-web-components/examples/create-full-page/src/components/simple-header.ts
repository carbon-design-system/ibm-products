/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element';
import '@carbon/web-components/es/components/breadcrumb/index.js';

const blockClass = 'simple-header';

export interface Breadcrumb {
  key?: string;
  label: string;
  href?: string;
  isCurrentPage?: boolean;
}

/**
 * SimpleHeader component for web components
 */
@customElement('simple-header')
export class SimpleHeader extends LitElement {
  /**
   * Page title
   */
  @property({ type: String })
  title = '';

  /**
   * Breadcrumbs array
   */
  @property({ type: Array })
  breadcrumbs: Breadcrumb[] = [];

  /**
   * Whether to show trailing slash in breadcrumbs
   */
  @property({ type: Boolean, attribute: 'no-trailing-slash' })
  noTrailingSlash = true;

  /**
   * Maximum visible breadcrumbs
   */
  @property({ type: Number, attribute: 'max-visible' })
  maxVisible?: number;

  /**
   * Overflow aria label
   */
  @property({ type: String, attribute: 'overflow-aria-label' })
  overflowAriaLabel = 'Open breadcrumb overflow menu';

  /**
   * Overflow tooltip alignment
   */
  @property({ type: String, attribute: 'overflow-tooltip-align' })
  overflowTooltipAlign = 'bottom';

  // Disable shadow DOM to use Carbon styles
  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    if (!this.title && (!this.breadcrumbs || this.breadcrumbs.length === 0)) {
      console.warn(
        'Warning: You have tried using a SimpleHeader component without specifying a title or breadcrumbs props'
      );
    }
  }

  render() {
    const classes = {
      [blockClass]: true,
    };

    return html`
      <header class="${classMap(classes)}">
        ${this.breadcrumbs && this.breadcrumbs.length > 0
          ? html`
              <breadcrumb-with-overflow
                class="${blockClass}__breadcrumbs"
                .breadcrumbs="${this.breadcrumbs}"
                ?no-trailing-slash="${this.noTrailingSlash}"
                max-visible="${this.maxVisible || ''}"
                overflow-aria-label="${this.overflowAriaLabel}"
                overflow-tooltip-align="${this.overflowTooltipAlign}"
              ></breadcrumb-with-overflow>
            `
          : ''}
        ${this.title
          ? html`
              <h1 class="${blockClass}__title">${this.title}</h1>
            `
          : ''}
      </header>
    `;
  }
}

