/**
 * @license
 *
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import './add-select-row';
import '../add-select/add-select';
import '../../user-avatar/user-avatar';
import { prefix } from '../../../globals/settings';
import styles from '../story-styles.scss?lit';

/**
 * Story 1: Default
 * Shows both single-select (radio) and multi-select (checkbox) variants
 */
export const Default = {
  render: () => {
    return html`
      <style>
        ${styles}
      </style>
      <div class="add-select-story-variant-container">
        <h4>Single-select (Radio button)</h4>
        <c4p-add-select-row item-id="1" title="Item 1" value="item-1">
        </c4p-add-select-row>
      </div>
      <div class="add-select-story-variant-container">
        <h4>Multi-select (Checkbox)</h4>
        <c4p-add-select multi>
          <c4p-add-select-row item-id="2" title="Item 1" value="item-1">
          </c4p-add-select-row>
        </c4p-add-select>
      </div>
    `;
  },
};

/**
 * Story 2: WithSubtitle
 * Shows subtitle with both single and multi-select variants
 */
export const WithSubtitle = {
  render: () => {
    return html`
      <style>
        ${styles}
      </style>
      <div class="add-select-story-variant-container">
        <h4>Single-select with subtitle</h4>
        <c4p-add-select-row
          item-id="1"
          title="Item 1"
          subtitle="This is a description for item 1"
          value="item-1"
        >
        </c4p-add-select-row>
      </div>
      <div class="add-select-story-variant-container">
        <h4>Multi-select with subtitle</h4>
        <c4p-add-select multi>
          <c4p-add-select-row
            item-id="2"
            title="Item 1"
            subtitle="This is a description for item 1"
            value="item-1"
          >
          </c4p-add-select-row>
        </c4p-add-select>
      </div>
    `;
  },
};

/**
 * Story 3: WithChildren
 * Shows navigation arrow with subtitle in both single and multi-select variants
 */
export const WithChildren = {
  render: () => {
    return html`
      <style>
        ${styles}
      </style>
      <div class="add-select-story-variant-container">
        <h4>Single-select with navigation</h4>
        <c4p-add-select-row
          item-id="1"
          title="Parent Item"
          subtitle="Navigate to view children"
          value="parent-1"
          has-children
        >
        </c4p-add-select-row>
      </div>
      <div class="add-select-story-variant-container">
        <h4>Multi-select with navigation</h4>
        <c4p-add-select multi>
          <c4p-add-select-row
            item-id="2"
            title="Parent Item"
            subtitle="Navigate to view children"
            value="parent-1"
            has-children
          >
          </c4p-add-select-row>
        </c4p-add-select>
      </div>
    `;
  },
};

/**
 * Story 4: WithAvatar
 * Shows UserAvatar icon with both single and multi-select variants
 */
export const WithAvatar = {
  render: () => {
    return html`
      <style>
        ${styles}
      </style>
      <div class="add-select-story-variant-container">
        <h4>Single-select with avatar</h4>
        <c4p-add-select-row
          item-id="1"
          title="John Doe"
          subtitle="Software Engineer"
          value="user-1"
        >
          <c4p-user-avatar
            slot="icon"
            name="John Doe"
            size="md"
          ></c4p-user-avatar>
        </c4p-add-select-row>
      </div>
      <div class="add-select-story-variant-container">
        <h4>Multi-select with avatar</h4>
        <c4p-add-select multi>
          <c4p-add-select-row
            item-id="2"
            title="John Doe"
            subtitle="Software Engineer"
            value="user-1"
          >
            <c4p-user-avatar
              slot="icon"
              name="John Doe"
              size="md"
            ></c4p-user-avatar>
          </c4p-add-select-row>
        </c4p-add-select>
      </div>
    `;
  },
};

/**
 * Story 5: WithMetadata
 * Shows metadata tag with both single and multi-select variants
 */
export const WithMetadata = {
  render: () => {
    return html`
      <style>
        ${styles}
      </style>
      <div class="add-select-story-variant-container">
        <h4>Single-select with metadata</h4>
        <c4p-add-select-row
          item-id="1"
          title="Item 1"
          subtitle="This item has metadata"
          value="item-1"
        >
          <cds-tag slot="meta" type="blue">New</cds-tag>
        </c4p-add-select-row>
      </div>
      <div class="add-select-story-variant-container">
        <h4>Multi-select with metadata</h4>
        <c4p-add-select multi>
          <c4p-add-select-row
            item-id="2"
            title="Item 1"
            subtitle="This item has metadata"
            value="item-1"
          >
            <cds-tag slot="meta" type="blue">New</cds-tag>
          </c4p-add-select-row>
        </c4p-add-select>
      </div>
    `;
  },
};

/**
 * Story 6: DisabledItems
 * Shows disabled state with subtitle in both single and multi-select variants
 */
export const DisabledItem = {
  render: () => {
    return html`
      <style>
        ${styles}
      </style>
      <div class="add-select-story-variant-container">
        <h4>Single-select disabled</h4>
        <c4p-add-select-row
          item-id="1"
          title="Disabled Item"
          subtitle="This item cannot be selected"
          value="item-1"
          disabled
        >
        </c4p-add-select-row>
      </div>
      <div class="add-select-story-variant-container">
        <h4>Multi-select disabled</h4>
        <c4p-add-select multi>
          <c4p-add-select-row
            item-id="2"
            title="Disabled Item"
            subtitle="This item cannot be selected"
            value="item-1"
            disabled
          >
          </c4p-add-select-row>
        </c4p-add-select>
      </div>
    `;
  },
};

const meta = {
  title: 'Preview/Add and select/AddSelectRow',
  tags: ['autodocs'],
  decorators: [
    (story) => html` <div class="add-select-story-container">${story()}</div> `,
  ],
  parameters: {
    styles,
  },
};

export default meta;
