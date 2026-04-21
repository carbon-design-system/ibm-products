/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { AddSelect } from '../AddSelect/AddSelect';
import styles from '../_storybook-styles.scss?inline';

import mdx from './AddSelectBody.mdx';

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
    return (
      <AddSelect>
        <AddSelect.Body
          itemsLabel="All items"
          globalSearchLabel="Search"
          globalSearchPlaceholder="Search items"
          searchResultsTitle="Search results"
          itemCount={0}
        >
          <div
            style={{
              padding: '1rem',
              textAlign: 'center',
              color: 'var(--cds-text-secondary)',
            }}
          >
            List children go here
          </div>
        </AddSelect.Body>
      </AddSelect>
    );
  },
};

/**
 * Story 2: SingleSelectionList
 * Shows single-select body with search and item list
 */
export const SingleSelectionList = {
  render: () => {
    return (
      <div className="add-select-story-variant-container">
        <h4>Single select list</h4>
        <AddSelect>
          <AddSelect.Body
            itemsLabel="All items"
            globalSearchLabel="Search"
            globalSearchPlaceholder="Search items"
            searchResultsTitle="Search results"
            itemCount={sampleItems.length}
          >
            <AddSelect.List>
              {sampleItems.map((item) => (
                <AddSelect.Row
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
      </div>
    );
  },
};

/**
 * Story 3: MultiSelect
 * Shows multi-select body with search and item list
 */
export const MultiSelect = {
  render: () => {
    return (
      <div className="add-select-story-variant-container">
        <h4>Multi-select list</h4>
        <AddSelect multi>
          <AddSelect.Body
            itemsLabel="All items"
            globalSearchLabel="Search"
            globalSearchPlaceholder="Search items"
            searchResultsTitle="Search results"
            itemCount={sampleItems.length}
          >
            <AddSelect.List>
              {sampleItems.map((item) => (
                <AddSelect.Row
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
      </div>
    );
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

    return (
      <div className="add-select-story-variant-container">
        <h4>Body with breadcrumbs</h4>
        <AddSelect>
          <AddSelect.Body
            itemsLabel="All items"
            globalSearchLabel="Search"
            globalSearchPlaceholder="Search items"
            searchResultsTitle="Search results"
            itemCount={sampleItems.length}
            path={path}
          >
            <AddSelect.List>
              {sampleItems.map((item) => (
                <AddSelect.Row
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
      </div>
    );
  },
};

export default {
  title: 'Preview/Add and select/AddSelectBody',
  component: AddSelect.Body,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="add-select-story-container">
        <Story />
      </div>
    ),
  ],
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};
