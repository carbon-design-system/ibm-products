/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { AddSelect } from './AddSelect';

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
    return (
      <AddSelect>
        <AddSelect.Body
          itemsLabel="All items"
          globalSearchLabel="Search"
          globalSearchPlaceholder="Search items"
          itemCount={sampleItems.length}
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
  render: () => {
    return (
      <AddSelect multi>
        <AddSelect.Body
          itemsLabel="All items"
          globalSearchLabel="Search"
          globalSearchPlaceholder="Search items"
          itemCount={sampleItems.length}
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

    return (
      <AddSelect>
        <AddSelect.Body
          itemsLabel="All items"
          globalSearchLabel="Search"
          globalSearchPlaceholder="Search items"
          itemCount={hierarchicalItems.length}
        >
          <AddSelect.List>
            {hierarchicalItems.map((item) => (
              <AddSelect.Item
                key={item.id}
                itemId={item.id}
                title={item.title}
                subtitle={item.subtitle}
                value={item.value}
                hasChildren={item.hasChildren}
              />
            ))}
          </AddSelect.List>
        </AddSelect.Body>
      </AddSelect>
    );
  },
};

const meta = {
  title: 'Preview/AddSelect/Add select',
  component: AddSelect,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

// Made with Bob
