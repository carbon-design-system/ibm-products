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
import { AddSelectData, AddSelectItem } from '@carbon/ibm-products-primitives';
import './add-select';
import '../add-select-body/add-select-body';
import '../add-select-list/add-select-list';
import '../add-select-row/add-select-row';
import styles from '../story-styles.scss?lit';

// Sample hierarchical data
const hierarchicalData: AddSelectItem[] = [
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

// Interactive story wrapper component (no shadow DOM for styles)
class InteractiveAddSelectStory extends LitElement {
  // Disable shadow DOM to allow story-level styles to apply
  protected createRenderRoot() {
    return this;
  }
  private dataManager = new AddSelectData();

  @state()
  private currentItems: AddSelectItem[] = hierarchicalData;

  @state()
  private selectedItems = new Set<string>();

  @state()
  private path: Array<{ id: string; title: string }> = [];

  @state()
  private currentParentId = '';

  connectedCallback() {
    super.connectedCallback();
    this.dataManager.setItems(hierarchicalData);
  }

  private handleItemSelect(event: CustomEvent) {
    const { itemId, selected } = event.detail;

    if (selected) {
      // Use exclusive mode for single-select
      this.dataManager.setSelectedItems(itemId, true);
      this.selectedItems = new Set([itemId]);

      const selectedItem = this.dataManager.getItem(itemId);
      console.log('Selected item:', {
        id: selectedItem?.id,
        title: selectedItem?.title,
        value: selectedItem?.value,
      });
    } else {
      this.dataManager.clearSelections();
      this.selectedItems = new Set();
      console.log('Selection cleared');
    }
  }

  private handleNavigate(event: CustomEvent) {
    const { itemId, title } = event.detail;
    const children = this.dataManager.getItemChildren(itemId);

    if (children.length > 0) {
      this.currentItems = children;
      this.currentParentId = itemId;

      // Build breadcrumb path
      const parents = this.dataManager.getItemParents(itemId);
      this.path = [
        { id: 'root', title: 'All Locations' },
        ...parents.reverse().map((p) => ({ id: p.id, title: p.title || '' })),
        { id: itemId, title },
      ];
    }
  }

  private handleBreadcrumbClick(event: CustomEvent) {
    const { index } = event.detail;

    if (index === 0) {
      // Navigate to root
      this.currentItems = hierarchicalData;
      this.currentParentId = '';
      this.path = [];
    } else {
      const targetId = this.path[index].id;
      const children = this.dataManager.getItemChildren(targetId);
      this.currentItems = children;
      this.currentParentId = targetId;
      this.path = this.path.slice(0, index + 1);
    }
  }

  private handleSearch(event: CustomEvent) {
    const query = event.detail.searchTerm || '';

    if (query) {
      const results = this.dataManager.search(query);
      this.currentItems = results;
      this.path = [];
    } else {
      // Reset to current level or root
      if (this.currentParentId) {
        const children = this.dataManager.getItemChildren(this.currentParentId);
        this.currentItems = children;
      } else {
        this.currentItems = hierarchicalData;
      }
    }
  }

  private renderItems() {
    return this.currentItems.map((item) => {
      const hasChildren = this.dataManager.hasChildren(item.id);
      const isSelected = this.selectedItems.has(item.id);

      return html`
        <c4p-add-select-row
          item-id=${item.id}
          title=${item.title || ''}
          subtitle=${item.value}
          value=${item.value || ''}
          ?has-children=${hasChildren}
          ?selected=${isSelected}
          @c4p-add-select-row-select=${this.handleItemSelect}
          @c4p-add-select-row-navigate=${this.handleNavigate}
        >
        </c4p-add-select-row>
      `;
    });
  }

  render() {
    return html`
      <div class="add-select-story-variant-container">
        <h4>Interactive AddSelect with AddSelectData utility</h4>
        <c4p-add-select>
          <c4p-add-select-body
            items-label="All Locations"
            global-search-label="Search"
            global-search-placeholder="Search locations..."
            search-results-title="Search results"
            .itemCount=${this.currentItems.length}
            .path=${this.path}
            @c4p-add-select-body-search=${this.handleSearch}
            @c4p-add-select-body-breadcrumb-click=${this.handleBreadcrumbClick}
          >
            <c4p-add-select-list> ${this.renderItems()} </c4p-add-select-list>
          </c4p-add-select-body>
        </c4p-add-select>
      </div>
    `;
  }
}

/**
 * Story: Interactive
 * Shows complete implementation using AddSelectData utility
 */
export const Interactive = {
  render: () => {
    // Define custom element if not already defined
    if (!customElements.get('interactive-add-select-story')) {
      customElements.define(
        'interactive-add-select-story',
        InteractiveAddSelectStory
      );
    }
    return html`
      <style>
        ${styles}
      </style>
      <interactive-add-select-story></interactive-add-select-story>
    `;
  },
};

const meta = {
  title: 'Preview/Add and select/Interactive',
  tags: ['autodocs'],
  decorators: [
    (story: any) => html`
      <div class="add-select-story-container">${story()}</div>
    `,
  ],
  parameters: {
    styles,
  },
};

export default meta;
