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

export const WithKeyboardNavigation = {
  render: () => {
    return (
      <AddSelect>
        <AddSelect.Body
          itemsLabel="Navigate with keyboard"
          globalSearchLabel="Search"
          globalSearchPlaceholder="Use arrow keys to navigate"
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

const meta = {
  title: 'Preview/AddSelect/Add select list',
  component: AddSelect.List,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
The Add Select List component manages the list of items and handles keyboard navigation.

## Keyboard Navigation

- **Arrow Down**: Move focus to next item
- **Arrow Up**: Move focus to previous item
- **Arrow Right**: Navigate to children (if item has children)
- **Enter/Space**: Select/deselect the focused item
- **Ctrl+Home**: Move focus to first item
- **Ctrl+End**: Move focus to last item
        `,
      },
    },
  },
};

export default meta;

// Made with Bob
