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
import '../add-select-item/add-select-item';
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
  args: {
    multi: false,
  },
  argTypes: {
    multi: {
      control: 'boolean',
      description: 'Whether this is a multi-select list',
    },
  },
  render: (args) => {
    return html`
      <c4p-add-select-list ?multi=${args.multi}>
        ${sampleItems.map(
          (item) => html`
            <c4p-add-select-item
              ?multi=${args.multi}
              item-id=${item.id}
              title=${item.title}
              subtitle=${item.subtitle}
              value=${item.value}
              tab-index="0"
            >
            </c4p-add-select-item>
          `
        )}
      </c4p-add-select-list>
    `;
  },
};

export const SingleSelect = {
  args: {
    multi: false,
  },
  argTypes: Default.argTypes,
  render: Default.render,
};

export const MultiSelect = {
  args: {
    multi: true,
  },
  argTypes: Default.argTypes,
  render: Default.render,
};

export const WithSelectedItems = {
  args: {
    multi: true,
  },
  argTypes: Default.argTypes,
  render: (args) => {
    return html`
      <c4p-add-select-list ?multi=${args.multi}>
        ${sampleItems.map(
          (item, index) => html`
            <c4p-add-select-item
              ?multi=${args.multi}
              item-id=${item.id}
              title=${item.title}
              subtitle=${item.subtitle}
              value=${item.value}
              ?selected=${index < 2}
              tab-index="0"
            >
            </c4p-add-select-item>
          `
        )}
      </c4p-add-select-list>
    `;
  },
};

export const WithHierarchicalItems = {
  args: {
    multi: false,
  },
  argTypes: Default.argTypes,
  render: (args) => {
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
      {
        id: '4',
        title: 'Item 4',
        subtitle: 'No children',
        value: 'item-4',
        hasChildren: false,
      },
    ];

    return html`
      <c4p-add-select-list ?multi=${args.multi}>
        ${hierarchicalItems.map(
          (item) => html`
            <c4p-add-select-item
              ?multi=${args.multi}
              item-id=${item.id}
              title=${item.title}
              subtitle=${item.subtitle}
              value=${item.value}
              ?has-children=${item.hasChildren}
              tab-index="0"
            >
            </c4p-add-select-item>
          `
        )}
      </c4p-add-select-list>
    `;
  },
};

export const LargeList = {
  args: {
    multi: false,
  },
  argTypes: Default.argTypes,
  render: (args) => {
    const largeItemList = Array.from({ length: 20 }, (_, i) => ({
      id: `${i + 1}`,
      title: `Item ${i + 1}`,
      subtitle: `Description for item ${i + 1}`,
      value: `item-${i + 1}`,
    }));

    return html`
      <c4p-add-select-list ?multi=${args.multi}>
        ${largeItemList.map(
          (item) => html`
            <c4p-add-select-item
              ?multi=${args.multi}
              item-id=${item.id}
              title=${item.title}
              subtitle=${item.subtitle}
              value=${item.value}
              tab-index="0"
            >
            </c4p-add-select-item>
          `
        )}
      </c4p-add-select-list>
    `;
  },
};

const meta = {
  title: 'Components/Add and select/Add select list',
};

export default meta;

// Made with Bob
