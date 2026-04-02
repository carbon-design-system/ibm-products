/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { AddSelect } from '../AddSelect/AddSelect';
import { Tag } from '@carbon/react';

export const Default = {
  render: () => {
    return (
      <AddSelect>
        <AddSelect.Body
          itemsLabel="Items"
          globalSearchLabel="Search"
          itemCount={3}
        >
          <AddSelect.List>
            <AddSelect.Item
              itemId="1"
              title="Item 1"
              subtitle="Description for item 1"
              value="item-1"
            />
            <AddSelect.Item
              itemId="2"
              title="Item 2"
              subtitle="Description for item 2"
              value="item-2"
            />
            <AddSelect.Item
              itemId="3"
              title="Item 3"
              subtitle="Description for item 3"
              value="item-3"
            />
          </AddSelect.List>
        </AddSelect.Body>
      </AddSelect>
    );
  },
};

export const WithMetadata = {
  render: () => {
    return (
      <AddSelect>
        <AddSelect.Body
          itemsLabel="Items with metadata"
          globalSearchLabel="Search"
          itemCount={3}
        >
          <AddSelect.List>
            <AddSelect.Item
              itemId="1"
              title="Item 1"
              subtitle="Description for item 1"
              value="item-1"
              meta={<Tag type="blue">New</Tag>}
            />
            <AddSelect.Item
              itemId="2"
              title="Item 2"
              subtitle="Description for item 2"
              value="item-2"
              meta={<Tag type="green">Active</Tag>}
            />
            <AddSelect.Item
              itemId="3"
              title="Item 3"
              subtitle="Description for item 3"
              value="item-3"
              meta={<Tag type="gray">Archived</Tag>}
            />
          </AddSelect.List>
        </AddSelect.Body>
      </AddSelect>
    );
  },
};

export const WithChildren = {
  render: () => {
    return (
      <AddSelect>
        <AddSelect.Body
          itemsLabel="Items with children"
          globalSearchLabel="Search"
          itemCount={3}
        >
          <AddSelect.List>
            <AddSelect.Item
              itemId="1"
              title="Parent Item 1"
              subtitle="Has children"
              value="parent-1"
              hasChildren
            />
            <AddSelect.Item
              itemId="2"
              title="Parent Item 2"
              subtitle="Has children"
              value="parent-2"
              hasChildren
            />
            <AddSelect.Item
              itemId="3"
              title="Regular Item"
              subtitle="No children"
              value="item-3"
            />
          </AddSelect.List>
        </AddSelect.Body>
      </AddSelect>
    );
  },
};

export const DisabledItems = {
  render: () => {
    return (
      <AddSelect>
        <AddSelect.Body
          itemsLabel="Items with disabled state"
          globalSearchLabel="Search"
          itemCount={3}
        >
          <AddSelect.List>
            <AddSelect.Item
              itemId="1"
              title="Active Item"
              subtitle="This item is active"
              value="item-1"
            />
            <AddSelect.Item
              itemId="2"
              title="Disabled Item"
              subtitle="This item is disabled"
              value="item-2"
              disabled
            />
            <AddSelect.Item
              itemId="3"
              title="Another Active Item"
              subtitle="This item is active"
              value="item-3"
            />
          </AddSelect.List>
        </AddSelect.Body>
      </AddSelect>
    );
  },
};

const meta = {
  title: 'Preview/AddSelect/Add select item',
  component: AddSelect.Item,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
The Add Select Item component represents an individual item in the list.

## Features

- Single or multi-select support
- Optional subtitle
- Optional metadata slot
- Hierarchical navigation support
- Disabled state
- Keyboard accessible
        `,
      },
    },
  },
};

export default meta;
