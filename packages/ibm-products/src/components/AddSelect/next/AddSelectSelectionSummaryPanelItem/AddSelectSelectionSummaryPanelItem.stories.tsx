/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { AddSelect } from '../AddSelect/AddSelect';
import { UserAvatar } from '../../../UserAvatar';
import { IconButton } from '@carbon/react';
import { SubtractAlt } from '@carbon/react/icons';
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

const userItem = {
  id: '1',
  // cspell:disable-next-line
  title: 'Marleah Eagleston',
  email: 'jdoe@ibm.com',
  role: 'Editor',
  value: 'user-1',
};

/**
 * Story 1: Default (simple mode with key-value pairs)
 */
export const Default = {
  render: () => {
    return (
      <div style={{ width: '360px', border: '1px solid #ccc' }}>
        <AddSelect.SelectionSummaryPanelItem item={sampleItem} />
      </div>
    );
  },
};

/**
 * Story 2: Simple mode with remove button
 */
export const WithRemoveButton = {
  render: () => {
    return (
      <div style={{ width: '360px', border: '1px solid #ccc' }}>
        <AddSelect.SelectionSummaryPanelItem
          item={sampleItem}
          onRemove={(id) => console.log('Remove item:', id)}
          removeButtonLabel="Remove item"
        />
      </div>
    );
  },
};

/**
 * Story 3: Accordion mode
 */
export const Accordion = {
  render: () => {
    return (
      <div style={{ width: '360px', border: '1px solid #ccc' }}>
        <AddSelect.SelectionSummaryPanelItem item={sampleItem} useAccordion />
      </div>
    );
  },
};

/**
 * Story 4: Accordion mode with remove button
 */
export const AccordionWithRemoveButton = {
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
 * Story 5: Accordion with custom title
 */
export const AccordionWithCustomTitle = {
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
 * Story 6: Accordion with custom content
 */
export const AccordionWithCustomContent = {
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
              <p>Status: {item.itemStatus}</p>
            </div>
          )}
        />
      </div>
    );
  },
};

/**
 * Story 7: Custom template (works in all modes)
 * Demonstrates a user design with avatar, name, email, role, and remove button
 */
export const WithCustomTemplate = {
  render: () => {
    return (
      <div style={{ width: '400px', border: '1px solid #e0e0e0' }}>
        <AddSelect.SelectionSummaryPanelItem
          item={userItem}
          onRemove={(id) => console.log('Remove user:', id)}
          renderTemplate={(item, onRemove) => (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '1rem',
                borderBottom: '1px solid #e0e0e0',
                gap: '1rem',
              }}
            >
              {/* User Avatar */}
              <UserAvatar
                name={item.title}
                size="md"
                backgroundColor="order-1-cyan"
              />

              {/* User Info */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: '#161616',
                    marginBottom: '0.125rem',
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    fontSize: '0.75rem',
                    color: '#525252',
                  }}
                >
                  {item.email}
                </div>
              </div>

              {/* Role */}
              <div
                style={{
                  fontSize: '0.875rem',
                  color: '#525252',
                  marginRight: '0.5rem',
                }}
              >
                {item.role}
              </div>

              {/* Remove Button */}
              {onRemove && (
                <IconButton
                  kind="ghost"
                  size="sm"
                  label="Remove user"
                  onClick={() => onRemove(item.id)}
                >
                  <SubtractAlt />
                </IconButton>
              )}
            </div>
          )}
        />
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
      description: 'Use accordion pattern (default: false)',
    },
    onRemove: {
      control: false,
      description: 'Remove button handler (available in all modes)',
    },
    removeButtonLabel: {
      control: 'text',
      description: 'Remove button aria-label',
    },
    renderTitle: {
      control: false,
      description: 'Custom title renderer function (accordion mode only)',
    },
    renderContent: {
      control: false,
      description: 'Custom content renderer function (accordion mode only)',
    },
    renderTemplate: {
      control: false,
      description:
        'Custom template renderer function (works in all modes, takes precedence)',
    },
    className: {
      control: 'text',
      description: 'Optional class name',
    },
  },
};

// Made with Bob
