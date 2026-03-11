/**
 * @license
 *
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';
import '@carbon/web-components/es/components/button/index.js';
import '@carbon/web-components/es/components/search/index.js';
import '@carbon/web-components/es/components/tag/index.js';
import { prefix } from '../../../globals/settings';
import styles from './add-select-body.scss?lit';

const blockClass = `${prefix}--add-select-body`;

/**
 * Add Select Body component - contains the main content area
 * @element c4p-add-select-body
 * @slot default - The main content area containing c4p-add-select-list
 * @slot header - Custom header content
 * @fires c4p-add-select-body-search - Fired when search term changes
 */
@customElement(`${prefix}-add-select-body`)
class CDSAddSelectBody extends LitElement {
  /**
   * Whether this is a multi-select
   */
  @property({ type: Boolean })
  multi = false;

  /**
   * Label for items section
   */
  @property({ type: String, attribute: 'items-label' })
  itemsLabel = '';

  /**
   * Global search label
   */
  @property({ type: String, attribute: 'global-search-label' })
  globalSearchLabel = '';

  /**
   * Global search placeholder
   */
  @property({ type: String, attribute: 'global-search-placeholder' })
  globalSearchPlaceholder = 'Search';

  /**
   * No results title
   */
  // @property({ type: String, attribute: 'no-results-title' })
  // noResultsTitle = 'No results found';

  /**
   * No results description
   */
  // @property({ type: String, attribute: 'no-results-description' })
  // noResultsDescription = 'Try adjusting your search or filter';

  /**
   * Search results title
   */
  @property({ type: String, attribute: 'search-results-title' })
  searchResultsTitle = 'Search results';

  /**
   * Current search term
   */
  @state()
  private _searchTerm = '';

  /**
   * Item count for display
   */
  @property({ type: Number, attribute: 'item-count' })
  itemCount = 0;

  /**
   * Handle search input
   */
  private _handleSearch(event: CustomEvent) {
    this._searchTerm = event.detail.value || '';
    const init = {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: { searchTerm: this._searchTerm },
    };
    this.dispatchEvent(
      new CustomEvent(
        (this.constructor as typeof CDSAddSelectBody).eventSearch,
        init
      )
    );
  }

  render() {
    const {
      multi,
      itemsLabel,
      globalSearchLabel,
      globalSearchPlaceholder,
      searchResultsTitle,
      itemCount,
      _searchTerm: searchTerm,
      _handleSearch: handleSearch,
    } = this;

    const bodyClasses = classMap({
      [`${blockClass}__body`]: true,
      [`${blockClass}__body--single`]: !multi,
      [`${blockClass}__body--multi`]: multi,
    });

    return html`
      <div class=${bodyClasses}>
        <!-- Header Section -->
        <div class="${blockClass}__header">
          <slot name="header">
            <!-- Search -->
            <div class="${blockClass}__search">
              <cds-search
                label-text=${globalSearchLabel}
                placeholder=${globalSearchPlaceholder}
                size="lg"
                @cds-search-input=${handleSearch}
              ></cds-search>
            </div>

            <!-- Sub-header with item count -->
            <div class="${blockClass}__sub-header">
              <div class="${blockClass}__tags">
                <p class="${blockClass}__tags-label">
                  ${searchTerm ? searchResultsTitle : itemsLabel}
                </p>
                <cds-tag type="gray" size="sm">${itemCount}</cds-tag>
              </div>
            </div>
          </slot>
        </div>

        <!-- Body Content -->
        <div class="${blockClass}__content">
          <slot></slot>
        </div>
      </div>
    `;
  }

  /**
   * The name of the custom event fired when search term changes
   */
  static get eventSearch() {
    return `${prefix}-add-select-body-search`;
  }

  static styles = styles;
}

export default CDSAddSelectBody;
