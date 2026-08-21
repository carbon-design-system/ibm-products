/**
 * @license
 *
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import '@carbon/web-components/es/components/button/index.js';
import '@carbon/web-components/es/components/notification/toast-notification.js';

import '../../../../src/components/tearsheet-preview/index';
import '../../../../src/components/add-select/index';
import { AddSelectData, AddSelectItem } from '@carbon/ibm-products-web-components';


import styles from './single-add-select.scss?lit';

// Sample flat data — no children needed for the Default pattern
const sampleItems: AddSelectItem[] = [
  { id: '1', title: 'Kansas', value: 'kansas' },
  { id: '2', title: 'Texas', value: 'texas' },
  { id: '3', title: 'Florida', value: 'florida' },
  { id: '4', title: 'California', value: 'california' },
  { id: '10', title: 'New York', value: 'ny' },
];

@customElement('single-add-select-example')
export class SingleAddSelectExample extends LitElement {
  static styles = styles;

  private dataManager = new AddSelectData();

  @state() private _open = true;
  @state() private _showNotification = false;
  @state() private _selectedItemId = '';
  @state() private _selectedValue = '';
  @state() private _filteredItems: AddSelectItem[] = [];

  constructor() {
    super();
    this.dataManager.setItems(sampleItems);
    this._filteredItems = this.dataManager.getItems();
  }

  private _openAddSelect() {
    this.dataManager.clearSelections();
    this._selectedItemId = '';
    this._selectedValue = '';
    this._filteredItems = this.dataManager.getItems();
    this._open = true;
  }

  private _handleClose() {
    this._open = false;
  }

  private _handleSearch(e: CustomEvent) {
    const term = e.detail.searchTerm.toLowerCase();
    this._filteredItems = term
      ? this.dataManager.search(term, {
          caseSensitive: false,
          searchFields: ['title', 'value'],
        })
      : this.dataManager.getItems();
  }

  private _handleItemSelect(e: CustomEvent) {
    const { itemId, selected, value } = e.detail;
    if (selected) {
      this._selectedItemId = itemId;
      this._selectedValue = value;
      this.dataManager.setSelectedItems(itemId, true);
    } else {
      this._selectedItemId = '';
      this._selectedValue = '';
      this.dataManager.clearSelections();
    }
  }

  private _handleSubmit() {
    if (!this._selectedItemId) return;
    this._handleClose();
    this._showNotification = true;
    setTimeout(() => {
      this._showNotification = false;
    }, 3000);
  }

  render() {
    return html`
      <div class="example-container">
        <h3>Single Add Select Pattern Example</h3>
        <p>Click the button below to open the single add select dialog (first level only).</p>

        <cds-button kind="primary" class="launch-button" @click="${this._openAddSelect}">
          Select a category
        </cds-button>
      </div>

      <c4p-add-select ?multi=${false}>
        <c4p-preview-tearsheet
          ?open=${this._open}
          variant="narrow"
          @c4p-preview-tearsheet-closed="${this._handleClose}"
        >
          <c4p-tearsheet-header hide-close-button disable-header-collapse slot="header" >
            <c4p-tearsheet-header-content title="Select category">
              <div slot="description">Choose one category from the list below</div>
            </c4p-tearsheet-header-content>
          </c4p-tearsheet-header>

          <c4p-tearsheet-body is-flush>
            <c4p-add-select-body
              slot="main-content"
              global-search-label="Search categories"
              global-search-placeholder="Search..."
              items-label="Categories"
              search-results-title="Search results"
              .itemCount="${this._filteredItems.length}"
              @c4p-add-select-body-search="${this._handleSearch}"
            >
              ${this._filteredItems.length > 0
                ? this._filteredItems.map(
                    (item) => html`
                      <c4p-add-select-row
                        item-id="${item.id}"
                        title="${item.title}"
                        value="${item.value}"
                        ?selected="${this._selectedItemId === item.id}"
                        @c4p-add-select-row-select="${this._handleItemSelect}"
                      ></c4p-add-select-row>
                    `
                  )
                : html`
                    <div class="no-results">
                      <h4 class="no-results__title">No results found</h4>
                      <p class="no-results__description">Try adjusting your search</p>
                    </div>
                  `}
            </c4p-add-select-body>
          </c4p-tearsheet-body>

          <c4p-tearsheet-footer slot="footer">
            <div class="action-buttons">
              <cds-button kind="secondary" @click="${this._handleClose}">Cancel</cds-button>
              <cds-button
                kind="primary"
                @click="${this._handleSubmit}"
                ?disabled="${!this._selectedItemId}"
              >Select</cds-button>
            </div>
          </c4p-tearsheet-footer>
        </c4p-preview-tearsheet>
      </c4p-add-select>

      ${this._showNotification
        ? html`
            <div class="notification">
              <cds-toast-notification
                kind="success"
                low-contrast
                title="Item selected"
                subtitle="Selected: ${this._selectedValue}"
                timeout="3000"
                @cds-notification-closed="${() => { this._showNotification = false; }}"
              ></cds-toast-notification>
            </div>
          `
        : ''}
    `;
  }
}

export default SingleAddSelectExample;
