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

import '../../../../src/components/tearsheet/index';
import '../../../../src/components/add-select/add-select/add-select';
import '../../../../src/components/add-select/add-select-body/add-select-body';
import '../../../../src/components/add-select/add-select-list/add-select-list';
import '../../../../src/components/add-select/add-select-item/add-select-item';

import styles from './single-add-select.scss?lit';

// Sample data for the example
// const sampleItems = [
//   {
//     id: '1',
//     title: 'Kansas',
//     value: 'kansas',
//   },
//   {
//     id: '2',
//     title: 'Texas',
//     value: 'texas',
//   },
//   {
//     id: '3',
//     title: 'Florida',
//     value: 'florida',
//   },
// ];

// Sample data for the example with hierarchy
const sampleItems =[
            {
              id: '1',
              title: 'Kansas',
              value: 'kansas',
            },
            {
              id: '2',
              title: 'Texas',
              value: 'texas',
            },
            {
              id: '3',
              title: 'Florida',
              value: 'florida',
            },
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
                        {
                          id: '6',
                          title: 'Beverly Hills',
                          value: 'bh',
                        },
                        {
                          id: '7',
                          title: 'Malibu',
                          value: 'malibu',
                          children: {
                            entries: [
                              {
                                id: '8',
                                title: 'Malibu Rd',
                                value: 'malibu-rd',
                              },
                            ],
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ];

@customElement('single-add-select-example')
export class AddSelectExample extends LitElement {
  static styles = styles;

  @state()
  private _open: boolean = false;

  @state()
  private _showNotification: boolean = false;

  @state()
  private _selectedItem: string = '';

  @state()
  private _searchTerm: string = '';

  @state()
  private _filteredItems = sampleItems;

  @state()
  private _currentItems = sampleItems;

  @state()
  private _navigationStack: Array<{items: any[], parentId: string, parentTitle: string}> = [];

  private _openAddSelect() {
    this._open = true;
    this._searchTerm = '';
    this._filteredItems = sampleItems;
    this._currentItems = sampleItems;
    this._selectedItem = '';
    this._navigationStack = [];
  }

  private _handleClose() {
    this._open = false;
    this._currentItems = sampleItems;
    this._navigationStack = [];
  }

  private _handleItemSelect(event: CustomEvent) {
    // Update selected item when an item is selected
    const { itemId, selected } = event.detail;
    console.log( event.detail)
    if (selected) {
      this._selectedItem = itemId;
    }
    console.log(this._selectedItem)
  }

  private _handleSubmit() {
     if (this._selectedItem) {
        this._handleClose();
        this._showNotification = true;
        setTimeout(() => {
          this._showNotification = false;
        }, 3000);
      }
      
  }

  private _searchRecursive(items: any[], searchTerm: string): any[] {
    const results: any[] = [];
    
    for (const item of items) {
      // Check if current item matches
      if (item.title.toLowerCase().includes(searchTerm)) {
        results.push(item);
      }
      
      // Recursively search in children
      if (item.children && item.children.entries) {
        const childResults = this._searchRecursive(item.children.entries, searchTerm);
        results.push(...childResults);
      }
    }
    
    return results;
  }

  private _handleSearch(event: CustomEvent) {
    this._searchTerm = event.detail.searchTerm.toLowerCase();
    
    if (this._searchTerm) {
      // Search recursively through all items starting from root
      this._filteredItems = this._searchRecursive(sampleItems, this._searchTerm);
    } else {
      this._filteredItems = this._currentItems;
    }
  }

  private _handleNavigate(event: CustomEvent) {
    const { itemId, title, parentId } = event.detail;
    console.log('Navigate to children of:', title, itemId);
    
    // Find the item in the entire hierarchy (not just current items)
    const item = this._findItemById(sampleItems, itemId);
    
    if (item && item.children && item.children.entries) {
      // Save current state to navigation stack
      this._navigationStack = [
        ...this._navigationStack,
        {
          items: this._currentItems,
          parentId: parentId || '',
          parentTitle: title
        }
      ];
      
      // Update current items to show children
      this._currentItems = item.children.entries;
      this._filteredItems = item.children.entries;
      this._searchTerm = '';
      this._selectedItem = '';
    }
  }

  private _handleNavigateBack() {
    if (this._navigationStack.length > 0) {
      const previous = this._navigationStack[this._navigationStack.length - 1];
      this._navigationStack = this._navigationStack.slice(0, -1);
      this._currentItems = previous.items;
      this._filteredItems = previous.items;
      this._searchTerm = '';
      this._selectedItem = '';
    }
  }

  private _handleBreadcrumbClick(event: CustomEvent) {
    const { index } = event.detail;
    console.log('Breadcrumb clicked, navigate to index:', index);
    
    // Navigate back to the clicked breadcrumb level
    const levelsToGoBack = this._navigationStack.length - index;
    
    for (let i = 0; i < levelsToGoBack; i++) {
      this._handleNavigateBack();
    }
  }

  private _getBreadcrumbPath() {
    const path = [{ id: 'root', title: 'Categories' }];
    
    this._navigationStack.forEach(item => {
      path.push({ id: item.parentId, title: item.parentTitle });
    });
    
    return path;
  }

  private _findItemById(items: any[], itemId: string): any {
    for (const item of items) {
      if (item.id === itemId) {
        return item;
      }
      if (item.children && item.children.entries) {
        const found = this._findItemById(item.children.entries, itemId);
        if (found) {
          return found;
        }
      }
    }
    return null;
  }

  private _onNotificationClose() {
    this._showNotification = false;
  }

  render() {
    const selectedItemData = this._findItemById(sampleItems, this._selectedItem);

    return html`
      <div class="example-container">
        <h3>Single Add Select Pattern Example</h3>
        <p>Click the button below to open the single add select dialog.</p>
        
        <cds-button
          type="button"
          kind="primary"
          size="md"
          @click="${this._openAddSelect}"
        >
          Select an item
        </cds-button>

        ${this._showNotification
          ? html`
              <cds-toast-notification
                kind="success"
                title="Item selected"
                subtitle="You selected: ${selectedItemData?.title}"
                timeout="3000"
                @cds-notification-closed="${this._onNotificationClose}"
              >
              </cds-toast-notification>
            `
          : ''}

        <!-- Single Add Select Pattern using Tearsheet -->
        ${this._open ? html`
          <c4p-add-select>
            <c4p-tearsheet
              ?open=${this._open}
              width="narrow"
              @c4p-tearsheet-closed="${this._handleClose}"
            >
              <!-- Header -->
              <h3 slot="title">Select category</h3>
              <div slot="description">Choose one category from the list below </div>

              <!-- Body with Add Select Content -->
              <c4p-add-select-body
                global-search-label="Search categories"
                global-search-placeholder="Search..."
                items-label="Categories"
                search-results-title="Search results"
                no-results-title="No results found"
                no-results-description="Try adjusting your search"
                .itemCount="${this._filteredItems.length}"
                .path="${this._getBreadcrumbPath()}"
                @c4p-add-select-body-search="${this._handleSearch}"
                @c4p-add-select-body-breadcrumb-click="${this._handleBreadcrumbClick}"
              >
                ${this._filteredItems.length > 0
                  ? html`
                      <c4p-add-select-list>
                        ${this._filteredItems.map(
                          (item) => {
                            const hasChildren = !!item.children;
                            return html`
                              <c4p-add-select-item
                                item-id="${item.id}"
                                title="${item.title}"
                                value="${item.value}"
                                ?has-children="${hasChildren}"
                                ?selected="${this._selectedItem === item.id}"
                                @c4p-add-select-item-select="${this._handleItemSelect}"
                                @c4p-add-select-item-navigate="${this._handleNavigate}"
                              >
                              </c4p-add-select-item>
                            `;
                          }
                        )}
                      </c4p-add-select-list>
                    `
                  : html`
                      <div class="no-results">
                        <h4 class="no-results__title">No results found</h4>
                        <p class="no-results__description">
                          Try adjusting your search or browse categories
                        </p>
                      </div>
                    `}
              </c4p-add-select-body>

              <!-- Footer with Action Buttons -->
              <cds-button
                slot="actions"
                kind="secondary"
                @click="${this._handleClose}"
              >
                Cancel
              </cds-button>
              <cds-button
                slot="actions"
                kind="primary"
                @click="${this._handleSubmit}"
                ?disabled="${!this._selectedItem}"
              >
                Select
              </cds-button>
            </c4p-tearsheet>
          </c4p-add-select>
        ` : ''}
      </div>
    `;
  }
}

export default AddSelectExample;
