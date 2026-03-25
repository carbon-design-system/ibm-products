/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { AddSelect } from '../AddSelect/AddSelect';

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
    itemsLabel: 'All items',
    globalSearchLabel: 'Search',
    globalSearchPlaceholder: 'Search items',
    searchResultsTitle: 'Search results',
    itemCount: 5,
  },
  argTypes: {
    multi: {
      control: 'boolean',
      description: 'Whether this is a multi-select',
    },
    itemsLabel: {
      control: 'text',
      description: 'Label for items section',
    },
    globalSearchLabel: {
      control: 'text',
      description: 'Global search label',
    },
    globalSearchPlaceholder: {
      control: 'text',
      description: 'Global search placeholder',
    },
    searchResultsTitle: {
      control: 'text',
      description: 'Search results title',
    },
    itemCount: {
      control: 'number',
      description: 'Item count for display',
    },
  },
  render: (args) => {
    return (
      <AddSelect multi={args.multi}>
        <AddSelect.Body
          itemsLabel={args.itemsLabel}
          globalSearchLabel={args.globalSearchLabel}
          globalSearchPlaceholder={args.globalSearchPlaceholder}
          searchResultsTitle={args.searchResultsTitle}
          itemCount={args.itemCount}
        >
          <AddSelect.List>
            {sampleItems.map((item) => (
              <AddSelect.Item
                key={item.id}
                itemId={item.id}
                title={item.title}
                subtitle={item.subtitle}
                value={item.value}
              />
            ))}
          </AddSelect.List>
        </AddSelect.Body>
      </AddSelect>
    );
  },
};

export const MultiSelect = {
  args: {
    ...Default.args,
    multi: true,
  },
  argTypes: Default.argTypes,
  render: Default.render,
};

export const WithBreadcrumbs = {
  args: {
    ...Default.args,
    path: [
      { id: 'root', title: 'Root' },
      { id: 'category', title: 'Category' },
      { id: 'subcategory', title: 'Subcategory' },
    ],
  },
  argTypes: {
    ...Default.argTypes,
    path: {
      control: 'object',
      description: 'Navigation path for breadcrumbs',
    },
  },
  render: (args) => {
    return (
      <AddSelect multi={args.multi}>
        <AddSelect.Body
          itemsLabel={args.itemsLabel}
          globalSearchLabel={args.globalSearchLabel}
          globalSearchPlaceholder={args.globalSearchPlaceholder}
          searchResultsTitle={args.searchResultsTitle}
          itemCount={args.itemCount}
          path={args.path}
        >
          <AddSelect.List>
            {sampleItems.map((item) => (
              <AddSelect.Item
                key={item.id}
                itemId={item.id}
                title={item.title}
                subtitle={item.subtitle}
                value={item.value}
              />
            ))}
          </AddSelect.List>
        </AddSelect.Body>
      </AddSelect>
    );
  },
};

const meta = {
  title: 'Preview/AddSelect/Add select body',
  component: AddSelect.Body,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

// Made with Bob
