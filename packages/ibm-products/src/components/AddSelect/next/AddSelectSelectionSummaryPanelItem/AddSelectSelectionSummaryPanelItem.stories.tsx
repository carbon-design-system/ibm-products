/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { AddSelect } from '../AddSelect/AddSelect';
import styles from '../_storybook-styles.scss?inline';

import mdx from './AddSelectSelectionSummaryPanelItem.mdx';

const sampleItem = {
  id: '1',
  title: 'Item 1',
  subtitle: 'Description for item 1',
  value: 'item-1',
  itemStatus: 'Active',
  owner: 'John Doe',
  created: '2024-01-15',
};

/**
 * Story 1: Default with accordion
 */
export const Default = {
  render: () => {
    return (
      <div style={{ width: '360px', border: '1px solid #ccc' }}>
        <AddSelect.SelectionSummaryPanelItem item={sampleItem} useAccordion />
      </div>
    );
  },
};

/**
 * Story 2: Without accordion
 */
export const WithoutAccordion = {
  render: () => {
    return (
      <div style={{ width: '360px', border: '1px solid #ccc' }}>
        <AddSelect.SelectionSummaryPanelItem
          item={sampleItem}
          useAccordion={false}
        />
      </div>
    );
  },
};

/**
 * Story 3: With remove button
 */
export const WithRemoveButton = {
  render: () => {
    return (
      <div style={{ width: '360px', border: '1px solid #ccc' }}>
        <AddSelect.SelectionSummaryPanelItem
          item={sampleItem}
          useAccordion
          onRemove={(id) => console.log('Remove item:', id)}
          removeButtonLabel="Remove item"
        />
      </div>
    );
  },
};

/**
 * Story 4: With custom title
 */
export const WithCustomTitle = {
  render: () => {
    return (
      <div style={{ width: '360px', border: '1px solid #ccc' }}>
        <AddSelect.SelectionSummaryPanelItem
          item={sampleItem}
          useAccordion
          renderTitle={(item) => (
            <div style={{ padding: '0.5rem' }}>
              <strong style={{ color: '#0f62fe' }}>{item.title}</strong>
              <div style={{ fontSize: '0.75rem', color: '#525252' }}>
                Custom subtitle: {item.value}
              </div>
            </div>
          )}
        />
      </div>
    );
  },
};

/**
 * Story 5: With custom content
 */
export const WithCustomContent = {
  render: () => {
    return (
      <div style={{ width: '360px', border: '1px solid #ccc' }}>
        <AddSelect.SelectionSummaryPanelItem
          item={sampleItem}
          useAccordion
          renderContent={(item) => (
            <div style={{ padding: '1rem' }}>
              <p>
                <strong>Custom Content</strong>
              </p>
              <p>ID: {item.id}</p>
              <p>Value: {item.value}</p>
              <p>Status: {item.status}</p>
            </div>
          )}
        />
      </div>
    );
  },
};

/**
 * Story 6: With children
 */
export const WithChildren = {
  render: () => {
    return (
      <div style={{ width: '360px', border: '1px solid #ccc' }}>
        <AddSelect.SelectionSummaryPanelItem item={sampleItem} useAccordion>
          <div style={{ padding: '1rem', background: '#f4f4f4' }}>
            <p>Custom children content</p>
            <p>This overrides the default content rendering</p>
          </div>
        </AddSelect.SelectionSummaryPanelItem>
      </div>
    );
  },
};

/**
 * Story 7: Multiple items
 */
export const MultipleItems = {
  render: () => {
    const items = [
      { id: '1', title: 'Item 1', subtitle: 'Subtitle 1', value: 'value-1' },
      { id: '2', title: 'Item 2', subtitle: 'Subtitle 2', value: 'value-2' },
      { id: '3', title: 'Item 3', subtitle: 'Subtitle 3', value: 'value-3' },
    ];

    return (
      <div style={{ width: '360px', border: '1px solid #ccc' }}>
        {items.map((item) => (
          <AddSelect.SelectionSummaryPanelItem
            key={item.id}
            item={item}
            useAccordion
            onRemove={(id) => console.log('Remove:', id)}
          />
        ))}
      </div>
    );
  },
};

export default {
  title: 'Preview/Add and select/AddSelectSelectionSummaryPanelItem',
  component: AddSelect.SelectionSummaryPanelItem,
  tags: ['autodocs'],
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    item: {
      control: false,
      description: 'Item data (AddSelectItem type)',
    },
    useAccordion: {
      control: 'boolean',
      description: 'Use accordion pattern',
    },
    onRemove: {
      control: false,
      description: 'Remove button handler',
    },
    removeButtonLabel: {
      control: 'text',
      description: 'Remove button aria-label',
    },
    renderTitle: {
      control: false,
      description: 'Custom title renderer function',
    },
    renderContent: {
      control: false,
      description: 'Custom content renderer function',
    },
    children: {
      control: false,
      description: 'Custom content for accordion body',
    },
    className: {
      control: 'text',
      description: 'Optional class name',
    },
  },
};
