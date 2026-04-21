/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { AddSelect } from '../AddSelect/AddSelect';
import { UserAvatar } from '../../../UserAvatar';
import { Tag } from '@carbon/react';
import styles from '../_storybook-styles.scss?inline';

import mdx from './AddSelectRow.mdx';

/**
 * Story 1: Default
 * Shows both single-select (radio) and multi-select (checkbox) variants
 */
export const Default = {
  render: () => {
    return (
      <>
        <div className="add-select-variant-container">
          <h4>Single-select (Radio button)</h4>
          <AddSelect.Row itemId="1" title="Item 1" value="item-1" />
        </div>
        <div className="add-select-variant-container">
          <h4>Multi-select (Checkbox)</h4>
          <AddSelect multi>
            <AddSelect.Row itemId="2" title="Item 1" value="item-1" />
          </AddSelect>
        </div>
      </>
    );
  },
};

/**
 * Story 2: WithSubtitle
 * Shows subtitle with both single and multi-select variants
 */
export const WithSubtitle = {
  render: () => {
    return (
      <>
        <div className="add-select-variant-container">
          <h4>Single-select with subtitle</h4>
          <AddSelect.Row
            itemId="1"
            title="Item 1"
            subtitle="This is a description for item 1"
            value="item-1"
          />
        </div>
        <div className="add-select-variant-container">
          <h4>Multi-select with subtitle</h4>
          <AddSelect multi>
            <AddSelect.Row
              itemId="2"
              title="Item 1"
              subtitle="This is a description for item 1"
              value="item-1"
            />
          </AddSelect>
        </div>
      </>
    );
  },
};

/**
 * Story 3: WithChildren
 * Shows navigation arrow with subtitle in both single and multi-select variants
 */
export const WithChildren = {
  render: () => {
    return (
      <>
        <div className="add-select-variant-container">
          <h4>Single-select with navigation</h4>
          <AddSelect.Row
            itemId="1"
            title="Parent Item"
            subtitle="Navigate to view children"
            value="parent-1"
            hasChildren
          />
        </div>
        <div className="add-select-variant-container">
          <h4>Multi-select with navigation</h4>
          <AddSelect multi>
            <AddSelect.Row
              itemId="2"
              title="Parent Item"
              subtitle="Navigate to view children"
              value="parent-1"
              hasChildren
            />
          </AddSelect>
        </div>
      </>
    );
  },
};

/**
 * Story 4: WithAvatar
 * Shows UserAvatar icon with both single and multi-select variants
 */
export const WithAvatar = {
  render: () => {
    return (
      <>
        <div className="add-select-variant-container">
          <h4>Single-select with avatar</h4>
          <AddSelect.Row
            itemId="1"
            title="John Doe"
            subtitle="Software Engineer"
            value="user-1"
            icon={<UserAvatar name="John Doe" />}
          />
        </div>
        <div className="add-select-variant-container">
          <h4>Multi-select with avatar</h4>
          <AddSelect multi>
            <AddSelect.Row
              itemId="2"
              title="John Doe"
              subtitle="Software Engineer"
              value="user-1"
              icon={<UserAvatar name="John Doe" />}
            />
          </AddSelect>
        </div>
      </>
    );
  },
};

/**
 * Story 5: WithMetadata
 * Shows metadata tag with both single and multi-select variants
 */
export const WithMetadata = {
  render: () => {
    return (
      <>
        <div className="add-select-variant-container">
          <h4>Single-select with metadata</h4>
          <AddSelect.Row
            itemId="1"
            title="Item 1"
            subtitle="This item has metadata"
            value="item-1"
            meta={<Tag type="blue">New</Tag>}
          />
        </div>
        <div className="add-select-variant-container">
          <h4>Multi-select with metadata</h4>
          <AddSelect multi>
            <AddSelect.Row
              itemId="2"
              title="Item 1"
              subtitle="This item has metadata"
              value="item-1"
              meta={<Tag type="blue">New</Tag>}
            />
          </AddSelect>
        </div>
      </>
    );
  },
};

/**
 * Story 6: DisabledItems
 * Shows disabled state with subtitle in both single and multi-select variants
 */
export const DisabledItem = {
  render: () => {
    return (
      <>
        <div className="add-select-variant-container">
          <h4>Single-select disabled</h4>
          <AddSelect.Row
            itemId="1"
            title="Disabled Item"
            subtitle="This item cannot be selected"
            value="item-1"
            disabled
          />
        </div>
        <div className="add-select-variant-container">
          <h4>Multi-select disabled</h4>
          <AddSelect multi>
            <AddSelect.Row
              itemId="2"
              title="Disabled Item"
              subtitle="This item cannot be selected"
              value="item-1"
              disabled
            />
          </AddSelect>
        </div>
      </>
    );
  },
};

export default {
  title: 'Preview/Add and select/AddSelectRow',
  component: AddSelect.Row,
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
