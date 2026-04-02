/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
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
    const path = [
      { id: 'root', title: 'Root' },
      { id: 'category', title: 'Category' },
      { id: 'subcategory', title: 'Subcategory' },
    ];

    return (
      <AddSelect>
        <AddSelect.Body
          itemsLabel="Items"
          globalSearchLabel="Search"
          itemCount={sampleItems.length}
          path={path}
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

const InteractiveExample = () => {
  const [path, setPath] = useState([
    { id: 'root', title: 'Root' },
    { id: 'level1', title: 'Level 1' },
    { id: 'level2', title: 'Level 2' },
    { id: 'level3', title: 'Level 3' },
  ]);

  const handleBreadcrumbClick = (index: number) => {
    // Navigate back to the clicked level
    setPath(path.slice(0, index + 1));
  };

  return (
    <AddSelect>
      <AddSelect.Body
        itemsLabel="Items"
        globalSearchLabel="Search"
        itemCount={sampleItems.length}
        path={path}
        onBreadcrumbClick={handleBreadcrumbClick}
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
};

export const Interactive = {
  render: () => <InteractiveExample />,
};

export const DeepHierarchy = {
  render: () => {
    const path = [
      { id: 'root', title: 'Root' },
      { id: 'level1', title: 'Level 1' },
      { id: 'level2', title: 'Level 2' },
      { id: 'level3', title: 'Level 3' },
      { id: 'level4', title: 'Level 4' },
      { id: 'level5', title: 'Level 5' },
    ];

    return (
      <AddSelect>
        <AddSelect.Body
          itemsLabel="Items"
          globalSearchLabel="Search"
          itemCount={sampleItems.length}
          path={path}
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
  title: 'Preview/AddSelect/Add select breadcrumbs',
  component: AddSelect.Breadcrumbs,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
The Add Select Breadcrumbs component provides hierarchical navigation for the add-select pattern.

## Features

- Shows the current navigation path
- Clickable breadcrumb items for navigation
- Automatically truncates long paths
- Accessible keyboard navigation
        `,
      },
    },
  },
};

export default meta;
