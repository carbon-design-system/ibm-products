/**
 * @license
 *
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import './add-select-body';
import '../add-select/add-select';
import '../add-select-list/add-select-list';
import '../add-select-row/add-select-row';
import { prefix } from '../../../globals/settings';

const sampleItems = [
  {
    id: '1',
    title: 'Item 1',
    subtitle: 'Description for item 1',
    value: 'item-1',
  },
  {
    id: '2',
    title: 'Item 2',
    subtitle: 'Description for item 2',
    value: 'item-2',
  },
  {
    id: '3',
    title: 'Item 3',
    subtitle: 'Description for item 3',
    value: 'item-3',
  },
  {
    id: '4',
    title: 'Item 4',
    subtitle: 'Description for item 4',
    value: 'item-4',
  },
  {
    id: '5',
    title: 'Item 5',
    subtitle: 'Description for item 5',
    value: 'item-5',
  },
];

/**
 * Story 1: Default
 * Shows body component with placeholder for list children
 */
export const Default = {
  render: () => {
    return html`
      <c4p-add-select>
        <c4p-add-select-body
          items-label="All items"
          global-search-label="Search"
          global-search-placeholder="Search items"
          search-results-title="Search results"
          .itemCount=${0}
        >
          <div
            style="padding: 1rem; text-align: center; color: var(--cds-text-secondary);"
          >
            List children go here
          </div>
        </c4p-add-select-body>
      </c4p-add-select>
    `;
  },
};

/**
 * Story 2: SingleSelectionList
 * Shows single-select body with search and item list
 */
export const SingleSelectionList = {
  render: () => {
    return html`
      <div class="add-select-variant-container">
        <h4>Single select list</h4>
        <c4p-add-select>
          <c4p-add-select-body
            items-label="All items"
            global-search-label="Search"
            global-search-placeholder="Search items"
            search-results-title="Search results"
            .itemCount=${sampleItems.length}
          >
            <c4p-add-select-list>
              ${sampleItems.map(
                (item) => html`
                  <c4p-add-select-row
                    item-id=${item.id}
                    title=${item.title}
                    subtitle=${item.subtitle}
                    value=${item.value}
                  >
                  </c4p-add-select-row>
                `
              )}
            </c4p-add-select-list>
          </c4p-add-select-body>
        </c4p-add-select>
      </div>
    `;
  },
};

/**
 * Story 3: MultiSelect
 * Shows multi-select body with search and item list
 */
export const MultiSelect = {
  render: () => {
    return html`
      <div class="add-select-variant-container">
        <h4>Multi-select list</h4>
        <c4p-add-select multi>
          <c4p-add-select-body
            items-label="All items"
            global-search-label="Search"
            global-search-placeholder="Search items"
            search-results-title="Search results"
            .itemCount=${sampleItems.length}
          >
            <c4p-add-select-list>
              ${sampleItems.map(
                (item) => html`
                  <c4p-add-select-row
                    item-id=${item.id}
                    title=${item.title}
                    subtitle=${item.subtitle}
                    value=${item.value}
                  >
                  </c4p-add-select-row>
                `
              )}
            </c4p-add-select-list>
          </c4p-add-select-body>
        </c4p-add-select>
      </div>
    `;
  },
};

/**
 * Story 3: WithBreadcrumbs
 * Shows body with breadcrumb navigation
 */
export const WithBreadcrumbs = {
  render: () => {
    const path = [
      { id: 'root', title: 'Root' },
      { id: 'category', title: 'Category' },
      { id: 'subcategory', title: 'Subcategory' },
    ];

    return html`
      <div class="add-select-variant-container">
        <h4>Body with breadcrumbs</h4>
        <c4p-add-select>
          <c4p-add-select-body
            items-label="All items"
            global-search-label="Search"
            global-search-placeholder="Search items"
            search-results-title="Search results"
            .itemCount=${sampleItems.length}
            .path=${path}
          >
            <c4p-add-select-list>
              ${sampleItems.map(
                (item) => html`
                  <c4p-add-select-row
                    item-id=${item.id}
                    title=${item.title}
                    subtitle=${item.subtitle}
                    value=${item.value}
                  >
                  </c4p-add-select-row>
                `
              )}
            </c4p-add-select-list>
          </c4p-add-select-body>
        </c4p-add-select>
      </div>
    `;
  },
};

const meta = {
  title: 'Preview/Add and select/AddSelectBody',
  tags: ['autodocs'],
};

export default meta;
