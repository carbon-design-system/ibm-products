/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { repeat } from 'lit/directives/repeat.js';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element';
import '@carbon/web-components/es/components/breadcrumb/index.js';
import '@carbon/web-components/es/components/breadcrumb/breadcrumb-link.js';
import '@carbon/web-components/es/components/overflow-menu/index.js';
import OverflowMenuHorizontal16 from '@carbon/icons/es/overflow-menu--horizontal/16.js';
import { iconLoader } from '@carbon/web-components/es/globals/internal/icon-loader.js';

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
  overflowAriaLabel = 'Open and close additional breadcrumb item list.';

  /**
   * Overflow tooltip alignment
   */
  @property({ type: String, attribute: 'overflow-tooltip-align' })
  overflowTooltipAlign = 'right';

  private renderBreadcrumbItem(item: BreadcrumbItem, index?: number) {
    const itemClass =
      index !== undefined && (index > 0 || this.breadcrumbs.length > 1)
        ? `${blockClass}__displayed-breadcrumb`
        : '';

    return html`
      <cds-breadcrumb-item class="${itemClass}">
        ${item.href && !item.isCurrentPage
          ? html`
              <cds-breadcrumb-link part="link" href="${item.href}">
                ${item.shortTitle || item.label}
              </cds-breadcrumb-link>
            `
          : html`
              <cds-breadcrumb-link
                part="${item.isCurrentPage ? 'current-link' : 'link'}"
                ?is-current-page="${item.isCurrentPage}">
                ${item.shortTitle || item.label}
              </cds-breadcrumb-link>
            `}
      </cds-breadcrumb-item>
    `;
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

    // Calculate display count based on maxVisible (following React logic)
    const displayCount =
      this.maxVisible && this.maxVisible < this.breadcrumbs.length
        ? Math.max(1, this.maxVisible)
        : this.breadcrumbs.length;

    // Calculate overflow position and items (React logic from lines 176-181)
    const overflowPosition = displayCount > 1 ? 1 : 0;
    const overflowCount = this.breadcrumbs.length - displayCount;

    // Build displayed items array
    let displayedItems: any[] = [];

    if (overflowCount > 0) {
      // Add first item
      displayedItems.push(this.renderBreadcrumbItem(this.breadcrumbs[0], 0));

      // Add overflow menu
      const overflowBreadcrumbs = this.breadcrumbs.slice(
        overflowPosition,
        overflowPosition + overflowCount
      );

      displayedItems.push(html`
        <cds-breadcrumb-item>
          <cds-overflow-menu breadcrumb align="${this.overflowTooltipAlign}">
            ${iconLoader(OverflowMenuHorizontal16, {
              slot: 'icon',
            })}
            <span slot="tooltip-content">${this.overflowAriaLabel}</span>
            <cds-overflow-menu-body size="sm">
              ${repeat(
                overflowBreadcrumbs,
                (item) => item.key || item.href || item.label,
                (item) => html`
                  <cds-overflow-menu-item href="${item.href || '#'}">
                    ${item.shortTitle || item.label}
                  </cds-overflow-menu-item>
                `
              )}
            </cds-overflow-menu-body>
          </cds-overflow-menu>
        </cds-breadcrumb-item>
      `);

      // Add remaining items (from the end)
      for (let i = overflowPosition + overflowCount; i < this.breadcrumbs.length; i++) {
        displayedItems.push(this.renderBreadcrumbItem(this.breadcrumbs[i], i));
      }
    } else {
      // No overflow, show all items
      displayedItems = this.breadcrumbs.map((item, index) =>
        this.renderBreadcrumbItem(item, index)
      );
    }

    return html`
      <div class="${classMap(classes)}">
        <div class="${blockClass}__space">
          <cds-breadcrumb
            class="${classMap(breadcrumbClasses)}"
            ?no-trailing-slash="${this.noTrailingSlash}"
            aria-label="${this.label}"
          >
            ${displayedItems}
          </cds-breadcrumb>
        </div>
      </div>
    `;
  }
}


