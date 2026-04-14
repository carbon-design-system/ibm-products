/**
 * @license
 *
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import './add-select';
import '../add-select-body/add-select-body';
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

export const Default = {
  render: () => {
    return html`
      <c4p-add-select>
        <c4p-add-select-body
          items-label="All items"
          global-search-label="Search"
          global-search-placeholder="Search items"
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
                  tab-index="0"
                >
                </c4p-add-select-row>
              `
            )}
          </c4p-add-select-list>
        </c4p-add-select-body>
      </c4p-add-select>
    `;
  },
};

export const MultiSelect = {
  render: () => {
    return html`
      <c4p-add-select>
        <c4p-add-select-body
          multi
          items-label="All items"
          global-search-label="Search"
          global-search-placeholder="Search items"
          .itemCount=${sampleItems.length}
        >
          <c4p-add-select-list multi>
            ${sampleItems.map(
              (item) => html`
                <c4p-add-select-row
                  multi
                  item-id=${item.id}
                  title=${item.title}
                  subtitle=${item.subtitle}
                  value=${item.value}
                  tab-index="0"
                >
                </c4p-add-select-row>
              `
            )}
          </c4p-add-select-list>
        </c4p-add-select-body>
      </c4p-add-select>
    `;
  },
};

export const WithHierarchy = {
  render: () => {
    const hierarchicalItems = [
      {
        id: '1',
        title: 'Parent 1',
        subtitle: 'Has children',
        value: 'parent-1',
        hasChildren: true,
      },
      {
        id: '2',
        title: 'Parent 2',
        subtitle: 'Has children',
        value: 'parent-2',
        hasChildren: true,
      },
      {
        id: '3',
        title: 'Item 3',
        subtitle: 'No children',
        value: 'item-3',
        hasChildren: false,
      },
    ];

    return html`
      <c4p-add-select>
        <c4p-add-select-body
          items-label="All items"
          global-search-label="Search"
          global-search-placeholder="Search items"
          .itemCount=${hierarchicalItems.length}
        >
          <c4p-add-select-list>
            ${hierarchicalItems.map(
              (item) => html`
                <c4p-add-select-row
                  item-id=${item.id}
                  title=${item.title}
                  subtitle=${item.subtitle}
                  value=${item.value}
                  ?has-children=${item.hasChildren}
                  tab-index="0"
                >
                </c4p-add-select-row>
              `
            )}
          </c4p-add-select-list>
        </c4p-add-select-body>
      </c4p-add-select>
    `;
  },
};

const meta = {
  title: 'Components/Add and select/Add select',
};

export default meta;
