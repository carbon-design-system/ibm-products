/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { AddSelect } from '../AddSelect/AddSelect';
import styles from '../_storybook-styles.scss?inline';

import mdx from './AddSelectItemInfoPanel.mdx';
import { ItemDetailEntry } from './AddSelectItemInfoPanel';

const sampleItem = {
  id: '1',
  title: 'Item 1',
  subtitle: 'Description for item 1',
  value: 'item-1',
  itemStatus: 'Active',
  owner: 'John Doe',
  created: '2024-01-15',
  category: 'Category A',
};

const sampleDetailEntries: ItemDetailEntry[] = [
  { id: '1', title: 'Name', value: 'John Doe' },
  { id: '2', title: 'Email', value: 'john.doe@example.com' },
  { id: '3', title: 'Department', value: 'Engineering' },
  { id: '4', title: 'Location', value: 'San Francisco, CA' },
];

/**
 * Story 1: Default with AddSelectItem
 */
export const Default = {
  render: () => {
    return (
      <div style={{ width: '360px', border: '1px solid #ccc' }}>
        <AddSelect.ItemInfoPanel
          title="Item details"
          item={sampleItem}
          onClose={() => console.log('Close clicked')}
          closeIconDescription="Close details"
        />
      </div>
    );
  },
};

/**
 * Story 2: With ItemDetailEntry array
 */
export const WithItemDetailEntries = {
  render: () => {
    return (
      <div style={{ width: '360px', border: '1px solid #ccc' }}>
        <AddSelect.ItemInfoPanel
          title="User details"
          item={sampleDetailEntries}
          onClose={() => console.log('Close clicked')}
          closeIconDescription="Close details"
        />
      </div>
    );
  },
};

/**
 * Story 3: With custom content via children
 */
export const WithCustomContent = {
  render: () => {
    return (
      <div style={{ width: '360px', border: '1px solid #ccc' }}>
        <AddSelect.ItemInfoPanel
          title="Custom details"
          onClose={() => console.log('Close clicked')}
          closeIconDescription="Close details"
        >
          <div style={{ padding: '1rem' }}>
            <h4>Custom Content</h4>
            <p>This is custom content passed as children.</p>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
        </AddSelect.ItemInfoPanel>
      </div>
    );
  },
};

/**
 * Story 4: With renderContent prop
 */
export const WithRenderContent = {
  render: () => {
    return (
      <div style={{ width: '360px', border: '1px solid #ccc' }}>
        <AddSelect.ItemInfoPanel
          title="Item details"
          item={sampleItem}
          onClose={() => console.log('Close clicked')}
          renderContent={(item) => (
            <div style={{ padding: '1rem' }}>
              <div style={{ marginBottom: '1rem' }}>
                <strong>ID:</strong> {item.id}
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <strong>Title:</strong> {item.title}
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <strong>Value:</strong> {item.value}
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <strong>Status:</strong> {item.itemStatus}
              </div>
            </div>
          )}
        />
      </div>
    );
  },
};

/**
 * Story 5: Without close button
 */
export const WithoutCloseButton = {
  render: () => {
    return (
      <div style={{ width: '360px', border: '1px solid #ccc' }}>
        <AddSelect.ItemInfoPanel title="Item details" item={sampleItem} />
      </div>
    );
  },
};

/**
 * Story 6: With React element as item
 */
export const WithReactElement = {
  render: () => {
    return (
      <div style={{ width: '360px', border: '1px solid #ccc' }}>
        <AddSelect.ItemInfoPanel
          title="Custom element"
          item={
            <div style={{ padding: '1rem', background: '#f4f4f4' }}>
              <p>This is a React element passed as the item prop.</p>
              <p>It can contain any JSX content.</p>
            </div>
          }
          onClose={() => console.log('Close clicked')}
        />
      </div>
    );
  },
};

export default {
  title: 'Preview/Add and select/AddSelectItemInfoPanel',
  component: AddSelect.ItemInfoPanel,
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
    item: {
      control: false,
      description: 'Item data, array of entries, or custom content',
    },
    onClose: {
      control: false,
      description: 'Close button handler',
    },
    closeIconDescription: {
      control: 'text',
      description: 'Close button aria-label',
    },
    children: {
      control: false,
      description: 'Custom content (alternative to item prop)',
    },
    renderContent: {
      control: false,
      description: 'Custom content renderer function',
    },
    className: {
      control: 'text',
      description: 'Optional class name',
    },
  },
};
