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

const blockClass = 'breadcrumb-with-overflow';

export interface BreadcrumbItem {
  key?: string;
  label: string;
  href?: string;
  isCurrentPage?: boolean;
  title?: string;
  shortTitle?: string;
}

/**
 * BreadcrumbWithOverflow component for web components
 */
@customElement('breadcrumb-with-overflow')
export class BreadcrumbWithOverflow extends LitElement {
  /**
   * Array of breadcrumb items
   */
  @property({ type: Array })
  breadcrumbs: BreadcrumbItem[] = [];

  /**
   * Aria label for the breadcrumb
   */
  @property({ type: String })
  label = 'Breadcrumb';

  /**
   * Maximum visible breadcrumbs before overflow
   */
  @property({ type: Number, attribute: 'max-visible' })
  maxVisible?: number;

  /**
   * Whether to show trailing slash
   */
  @property({ type: Boolean, attribute: 'no-trailing-slash' })
  noTrailingSlash = true;

  /**
   * Overflow menu aria label
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

  render() {
    const classes = {
      [blockClass]: true,
      [`${blockClass}__with-items`]: this.breadcrumbs.length > 1,
    };

    const breadcrumbClasses = {
      [`${blockClass}__breadcrumb-container`]: true,
      [`${blockClass}__breadcrumb-container-with-items`]:
        this.breadcrumbs.length > 1,
    };

    // Get back item for back button
    let backItem = this.breadcrumbs[this.breadcrumbs.length - 1];
    if (backItem?.isCurrentPage) {
      backItem = this.breadcrumbs[this.breadcrumbs.length - 2];
    }

    return html`
      <div class="${classMap(classes)}">
        <div class="${blockClass}__space">
          <cds-breadcrumb
            class="${classMap(breadcrumbClasses)}"
            ?no-trailing-slash="${this.noTrailingSlash}"
          >
            ${backItem?.href && (backItem?.label || backItem?.title)
              ? html`
                  <cds-breadcrumb-item
                    class="${blockClass}__breadcrumb-back"
                    href="${backItem.href}"
                  >
                    <cds-icon-arrow-left slot="icon"></cds-icon-arrow-left>
                  </cds-breadcrumb-item>
                `
              : ''}
            ${this.breadcrumbs.map(
              (item, index) => html`
                <cds-breadcrumb-item
                  class="${index > 0 || this.breadcrumbs.length > 1
                    ? `${blockClass}__displayed-breadcrumb`
                    : ''}"
                  href="${item.href || ''}"
                  ?is-current-page="${item.isCurrentPage}"
                >
                  ${item.shortTitle || item.label}
                </cds-breadcrumb-item>
              `
            )}
          </cds-breadcrumb>
        </div>
      </div>
    `;
  }
}

