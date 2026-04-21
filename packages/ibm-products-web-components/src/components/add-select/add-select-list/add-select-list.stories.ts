/**
 * @license
 *
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import './add-select-list';
import '../add-select/add-select';
import '../add-select-row/add-select-row';
import { prefix } from '../../../globals/settings';
import styles from '../story-styles.scss?lit';

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
];

/**
 * Story 1: Default
 * Shows both single-select (radio) and multi-select (checkbox) lists
 */
export const Default = {
  render: () => {
    return html`
      <style>
        ${styles}
      </style>
      <div class="add-select-story-variant-container">
        <h4>Single-select list</h4>
        <c4p-add-select>
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
        </c4p-add-select>
      </div>
      <div class="add-select-story-variant-container">
        <h4>Multi-select list</h4>
        <c4p-add-select multi>
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
        </c4p-add-select>
      </div>
    `;
  },
};

const meta = {
  title: 'Preview/Add and select/AddSelectList',
  tags: ['autodocs'],
  decorators: [
    (story) => html` <div class="add-select-story-container">${story()}</div> `,
  ],
  parameters: {
    styles,
  },
};

export default meta;
