/**
 * @license
 *
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { LitElement } from 'lit';
import './add-select';
import '../add-select-body/add-select-body';
import '../add-select-list/add-select-list';
import '../add-select-item/add-select-item';
import {
  AddSelectData,
  HierarchicalItem,
} from '../../../globals/js/utils/add-select-data';
import { prefix } from '../../../globals/settings';

// Sample hierarchical data
const sampleHierarchicalData: HierarchicalItem[] = [
  {
    id: '1',
    title: 'United States',
    value: 'us',
    children: {
      entries: [
        {
          id: '1-1',
          title: 'California',
          value: 'ca',
          children: {
            entries: [
              { id: '1-1-1', title: 'Los Angeles', value: 'la' },
              { id: '1-1-2', title: 'San Francisco', value: 'sf' },
              { id: '1-1-3', title: 'San Diego', value: 'sd' },
            ],
          },
        },
        {
          id: '1-2',
          title: 'Texas',
          value: 'tx',
          children: {
            entries: [
              { id: '1-2-1', title: 'Houston', value: 'houston' },
              { id: '1-2-2', title: 'Dallas', value: 'dallas' },
              { id: '1-2-3', title: 'Austin', value: 'austin' },
            ],
          },
        },
        {
          id: '1-3',
          title: 'New York',
          value: 'ny',
          children: {
            entries: [
              { id: '1-3-1', title: 'New York City', value: 'nyc' },
              { id: '1-3-2', title: 'Buffalo', value: 'buffalo' },
            ],
          },
        },
      ],
    },
  },
  {
    id: '2',
    title: 'Canada',
    value: 'ca',
    children: {
      entries: [
        {
          id: '2-1',
          title: 'Ontario',
          value: 'on',
          children: {
            entries: [
              { id: '2-1-1', title: 'Toronto', value: 'toronto' },
              { id: '2-1-2', title: 'Ottawa', value: 'ottawa' },
            ],
          },
        },
        {
          id: '2-2',
          title: 'British Columbia',
          value: 'bc',
          children: {
            entries: [
              { id: '2-2-1', title: 'Vancouver', value: 'vancouver' },
              { id: '2-2-2', title: 'Victoria', value: 'victoria' },
            ],
          },
        },
      ],
    },
  },
  {
    id: '3',
    title: 'Mexico',
    value: 'mx',
    children: {
      entries: [
        { id: '3-1', title: 'Mexico City', value: 'mexico-city' },
        { id: '3-2', title: 'Guadalajara', value: 'guadalajara' },
        { id: '3-3', title: 'Monterrey', value: 'monterrey' },
      ],
    },
  },
];

/**
 * Interactive example demonstrating AddSelectData utility usage
 */
@customElement('add-select-interactive-example')
class AddSelectInteractiveExample extends LitElement {
  // Initialize the data manager
  private dataManager = new AddSelectData();

  @state()
  private _searchTerm = '';

  @state()
  private _filteredItems: HierarchicalItem[] = [];

  @state()
  private _currentItems: HierarchicalItem[] = [];

  @state()
  private _selectedItem = '';

  @state()
  private _navigationStack: Array<{
    items: HierarchicalItem[];
    parentId: string;
    parentTitle: string;
  }> = [];

  constructor() {
    super();
    // Initialize data manager with sample items
    this.dataManager.setItems(sampleHierarchicalData);
    this._currentItems = this.dataManager.getItems();
    this._filteredItems = this.dataManager.getItems();
  }

  private _handleSearch(event: CustomEvent) {
    this._searchTerm = event.detail.searchTerm.toLowerCase();

    if (this._searchTerm) {
      // Use the data manager's search functionality
      this._filteredItems = this.dataManager.search(this._searchTerm, {
        caseSensitive: false,
        searchFields: ['title', 'value'],
      });
    } else {
      this._filteredItems = this._currentItems;
    }
  }

  private _handleItemSelect(event: CustomEvent) {
    const { itemId, selected } = event.detail;
    if (selected) {
      this._selectedItem = itemId;
      // Use the data manager to set selection (exclusive mode for single select)
      this.dataManager.setSelectedItems(itemId, true);
    }
  }

  private _handleNavigate(event: CustomEvent) {
    const { itemId, title } = event.detail;

    // Use the data manager to get children
    const children = this.dataManager.getItemChildren(itemId);

    if (children.length > 0) {
      // Save current state to navigation stack
      this._navigationStack = [
        ...this._navigationStack,
        {
          items: this._currentItems,
          parentId: itemId,
          parentTitle: title,
        },
      ];

      // Update current items to show children
      this._currentItems = children;
      this._filteredItems = children;
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

    // Navigate back to the clicked breadcrumb level
    const levelsToGoBack = this._navigationStack.length - index;

    for (let i = 0; i < levelsToGoBack; i++) {
      this._handleNavigateBack();
    }
  }

  private _getBreadcrumbPath() {
    const path = [{ id: 'root', title: 'Locations' }];

    this._navigationStack.forEach((item) => {
      path.push({ id: item.parentId, title: item.parentTitle });
    });

    return path;
  }

  render() {
    return html`
      <c4p-add-select>
        <c4p-add-select-body
          items-label="Locations"
          global-search-label="Search locations"
          global-search-placeholder="Search..."
          search-results-title="Search results"
          .itemCount="${this._filteredItems.length}"
          .path="${this._getBreadcrumbPath()}"
          @c4p-add-select-body-search="${this._handleSearch}"
          @c4p-add-select-body-breadcrumb-click="${this._handleBreadcrumbClick}"
        >
          <c4p-add-select-list>
            ${this._filteredItems.map((item) => {
              // Use the data manager to check if item has children
              const hasChildren = this.dataManager.hasChildren(item.id);
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
            })}
          </c4p-add-select-list>
        </c4p-add-select-body>
      </c4p-add-select>
    `;
  }
}

/**
 * Interactive story demonstrating the AddSelectData utility
 * This example shows:
 * - Hierarchical navigation using dataManager.getItemChildren()
 * - Search functionality using dataManager.search()
 * - Selection management using dataManager.setSelectedItems()
 * - Checking for children using dataManager.hasChildren()
 */
export const InteractiveWithDataUtility = {
  render: () =>
    html`<add-select-interactive-example></add-select-interactive-example>`,
};

const meta = {
  title: 'Components/Add and select/Interactive Examples',
  parameters: {
    docs: {
      description: {
        component: `
This interactive example demonstrates how to use the AddSelectData utility for managing hierarchical data in Add Select components.

## Key Features Demonstrated:

- **Hierarchical Navigation**: Navigate through nested data structures
- **Search Functionality**: Search across all levels of the hierarchy
- **Selection Management**: Handle single-select scenarios
- **Breadcrumb Navigation**: Navigate back through the hierarchy
- **Data Utility Integration**: All data operations use the AddSelectData utility

## AddSelectData Utility Methods Used:

- \`setItems()\` - Initialize hierarchical data
- \`getItems()\` - Get all items
- \`getItemChildren()\` - Navigate to child items
- \`hasChildren()\` - Check if item has children
- \`search()\` - Search through all items
- \`setSelectedItems()\` - Manage selections
- \`clearSelections()\` - Clear all selections

See the source code for implementation details.
        `,
      },
    },
  },
};

export default meta;
