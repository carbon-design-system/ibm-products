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
import { AddSelectData } from '@carbon/ibm-products-utilities';
import type { AddSelectItem } from '@carbon/ibm-products-utilities';

import styles from './single-add-select-with-hierarchy.scss?lit';

// Hierarchical data matching the React SingleAddSelectWithHierarchy preview
const sampleItems: AddSelectItem[] = [
  { id: '1', title: 'Kansas', value: 'kansas' },
  { id: '2', title: 'Texas', value: 'texas' },
  { id: '3', title: 'Florida', value: 'florida' },
  {
    id: '4',
    title: 'California',
    value: 'california',
    children: {
      entries: [
        {
          id: '5',
          title: 'Los Angeles',
          value: 'la',
          children: {
            entries: [
              { id: '6', title: 'Beverly Hills', value: 'bh' },
              {
                id: '7',
                title: 'Malibu',
                value: 'malibu',
                children: {
                  entries: [{ id: '8', title: 'Malibu Rd', value: 'malibu-rd' }],
                },
              },
            ],
          },
        },
        { id: '9', title: 'San Francisco', value: 'sf' },
      ],
    },
  },
  {
    id: '10',
    title: 'New York',
    value: 'ny',
    children: {
      entries: [
        { id: '11', title: 'Manhattan', value: 'manhattan' },
        { id: '12', title: 'Brooklyn', value: 'brooklyn' },
      ],
    },
  },
];

interface NavStackEntry {
  items: AddSelectItem[];
  parentId: string;
  parentTitle: string;
}

@customElement('single-add-select-with-hierarchy-example')
export class SingleAddSelectWithHierarchyExample extends LitElement {
  static styles = styles;

  private dataManager = new AddSelectData();

  @state() private _open = false;
  @state() private _showNotification = false;
  @state() private _selectedItemId = '';
  @state() private _selectedValue = '';
  @state() private _filteredItems: AddSelectItem[] = [];
  @state() private _currentItems: AddSelectItem[] = [];
  @state() private _navigationStack: NavStackEntry[] = [];

  constructor() {
    super();
    this.dataManager.setItems(sampleItems);
    this._currentItems = this.dataManager.getItems();
    this._filteredItems = this.dataManager.getItems();
  }

  private _openAddSelect() {
    this.dataManager.clearSelections();
    this._selectedItemId = '';
    this._selectedValue = '';
    this._navigationStack = [];
    this._currentItems = this.dataManager.getItems();
    this._filteredItems = this.dataManager.getItems();
    this._open = true;
  }

  private _handleClose() {
    this._open = false;
  }

  private _handleSearch(e: CustomEvent) {
    const term = e.detail.searchTerm.toLowerCase();
    if (term) {
      this._filteredItems = this.dataManager.search(term, {
        caseSensitive: false,
        searchFields: ['title', 'value'],
      });
    } else {
      this._filteredItems = this._currentItems;
    }
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

  private _handleNavigate(e: CustomEvent) {
    const { itemId, title, parentId } = e.detail;
    const children = this.dataManager.getItemChildren(itemId);
    if (children.length === 0) return;

    this._navigationStack = [
      ...this._navigationStack,
      { items: this._currentItems, parentId: parentId || '', parentTitle: title },
    ];
    this._currentItems = children;
    this._filteredItems = children;
    this._selectedItemId = '';
    this._selectedValue = '';
    this.dataManager.clearSelections();
  }

  private _handleBreadcrumbClick(e: CustomEvent) {
    const { index } = e.detail;
    const levelsBack = this._navigationStack.length - index;
    let stack = [...this._navigationStack];
    let items = this._currentItems;

    for (let i = 0; i < levelsBack; i++) {
      const prev = stack[stack.length - 1];
      stack = stack.slice(0, -1);
      items = prev.items;
    }
    this._navigationStack = stack;
    this._currentItems = items;
    this._filteredItems = items;
    this._selectedItemId = '';
    this._selectedValue = '';
    this.dataManager.clearSelections();
  }

  private _getBreadcrumbPath() {
    const path: Array<{ id: string; title: string }> = [
      { id: 'root', title: 'Categories' },
    ];
    this._navigationStack.forEach((entry) => {
      path.push({ id: entry.parentId, title: entry.parentTitle });
    });
    return path;
  }

  private _handleSubmit() {
    if (!this._selectedItemId) return;
    this._handleClose();
    this._showNotification = true;
    setTimeout(() => { this._showNotification = false; }, 3000);
  }

  render() {
    const breadcrumbPath = this._getBreadcrumbPath();

    return html`
      <div class="example-container">
        <h3>Single Add Select – With Hierarchy</h3>
        <p>Click the button below to open the single add select dialog with hierarchical navigation.</p>

        <cds-button kind="primary" @click="${this._openAddSelect}">
          Select a category
        </cds-button>

        ${this._showNotification
          ? html`
              <cds-toast-notification
                kind="success"
                title="Item selected"
                subtitle="Selected: ${this._selectedValue}"
                timeout="3000"
                @cds-notification-closed="${() => { this._showNotification = false; }}"
              ></cds-toast-notification>
            `
          : ''}

        ${this._open
          ? html`
              <c4p-add-select ?multi=${false}>
                <c4p-preview-tearsheet
                  ?open=${this._open}
                  variant="narrow"
                  @c4p-preview-tearsheet-closed="${this._handleClose}"
                >
                  <c4p-tearsheet-header hide-close-button slot="header">
                    <c4p-tearsheet-header-content title="Select category">
                      <div slot="description">Choose one category from the list below</div>
                    </c4p-tearsheet-header-content>
                  </c4p-tearsheet-header>

                  <c4p-tearsheet-body>
                    <c4p-add-select-body
                      slot="main-content"
                      global-search-label="Search categories"
                      global-search-placeholder="Search..."
                      items-label="Categories"
                      search-results-title="Search results"
                      .itemCount="${this._filteredItems.length}"
                      .path="${breadcrumbPath}"
                      @c4p-add-select-body-search="${this._handleSearch}"
                      @c4p-add-select-body-breadcrumb-click="${this._handleBreadcrumbClick}"
                    >
                      <c4p-add-select-column hide-search>
                        ${this._filteredItems.length > 0
                          ? this._filteredItems.map(
                              (item) => html`
                                <c4p-add-select-row
                                  item-id="${item.id}"
                                  title="${item.title}"
                                  value="${item.value}"
                                  ?has-children="${this.dataManager.hasChildren(item.id)}"
                                  ?selected="${this._selectedItemId === item.id}"
                                  @c4p-add-select-row-select="${this._handleItemSelect}"
                                  @c4p-add-select-row-navigate="${this._handleNavigate}"
                                ></c4p-add-select-row>
                              `
                            )
                          : html`
                              <div class="no-results">
                                <h4 class="no-results__title">No results found</h4>
                                <p class="no-results__description">Try adjusting your search or browse categories</p>
                              </div>
                            `}
                      </c4p-add-select-column>
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
            `
          : ''}
      </div>
    `;
  }
}

export default SingleAddSelectWithHierarchyExample;
