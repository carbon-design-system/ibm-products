/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { AddSelect } from '../AddSelect/AddSelect';
import { NoDataEmptyState } from '../../../EmptyStates/NoDataEmptyState';
import styles from '../_storybook-styles.scss?inline';

import mdx from './AddSelectSelectionSummaryPanel.mdx';

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
 * Story 1: Default with selected items
 */
export const Default = {
  render: () => {
    return (
      <div style={{ width: '360px', border: '1px solid #ccc' }}>
        <AddSelect.SelectionSummaryPanel
          title="Selected items"
          selectedItems={sampleItems}
          showCount
        />
      </div>
    );
  },
};

/**
 * Story 2: With edit icon
 */
export const WithEditIcon = {
  render: () => {
    return (
      <div style={{ width: '360px', border: '1px solid #ccc' }}>
        <AddSelect.SelectionSummaryPanel
          title="Selected items"
          selectedItems={sampleItems}
          showCount
          showEditIcon
          onEdit={() => console.log('Edit clicked')}
          editIconDescription="Edit selections"
        />
      </div>
    );
  },
};

/**
 * Story 3: With empty state
 */
export const WithEmptyState = {
  render: () => {
    return (
      <div style={{ width: '360px', border: '1px solid #ccc' }}>
        <AddSelect.SelectionSummaryPanel
          title="Selected items"
          selectedItems={[]}
          emptyState={
            <NoDataEmptyState
              title="No items selected"
              subtitle="Select items to see them here"
              size="sm"
            />
          }
        />
      </div>
    );
  },
};

/**
 * Story 4: With custom rendering
 */
export const WithCustomRendering = {
  render: () => {
    return (
      <div style={{ width: '360px', border: '1px solid #ccc' }}>
        <AddSelect.SelectionSummaryPanel
          title="Selected items"
          selectedItems={sampleItems}
          showCount
          renderItem={(item) => (
            <div
              style={{
                padding: '0.5rem 1rem',
                borderBottom: '1px solid #e0e0e0',
              }}
            >
              <strong>{item.title}</strong>
              <div style={{ fontSize: '0.875rem', color: '#525252' }}>
                Custom: {item.value}
              </div>
            </div>
          )}
        />
      </div>
    );
  },
};

/**
 * Story 5: Without count badge
 */
export const WithoutCount = {
  render: () => {
    return (
      <div style={{ width: '360px', border: '1px solid #ccc' }}>
        <AddSelect.SelectionSummaryPanel
          title="Selected items"
          selectedItems={sampleItems}
          showCount={false}
        />
      </div>
    );
  },
};

export default {
  title: 'Preview/Add and select/AddSelectSelectionSummaryPanel',
  component: AddSelect.SelectionSummaryPanel,
  tags: ['autodocs'],
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Panel title',
    },
    selectedItems: {
      control: false,
      description: 'Array of selected items',
    },
    showCount: {
      control: 'boolean',
      description: 'Show count badge',
    },
    showEditIcon: {
      control: 'boolean',
      description: 'Show edit icon next to count',
    },
    editIconDescription: {
      control: 'text',
      description: 'Edit icon aria-label',
    },
    emptyState: {
      control: false,
      description: 'Custom empty state component',
    },
    children: {
      control: false,
      description: 'Custom content or SelectionSummaryPanelItem components',
    },
    renderItem: {
      control: false,
      description: 'Custom item renderer function',
    },
    className: {
      control: 'text',
      description: 'Optional class name',
    },
  },
};
