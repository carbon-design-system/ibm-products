/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { AddSelect } from '../AddSelect/AddSelect';
import styles from '../_storybook-styles.scss?inline';

import mdx from './AddSelectList.mdx';

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
 * Story 1: Default
 * Shows both single-select (radio) and multi-select (checkbox) lists
 */
export const Default = {
  render: () => {
    return (
      <>
        <div className="add-select-story-variant-container">
          <h4>Single-select list</h4>
          <AddSelect>
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
          </AddSelect>
        </div>
        <div className="add-select-story-variant-container">
          <h4>Multi-select list</h4>
          <AddSelect multi>
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
          </AddSelect>
        </div>
      </>
    );
  },
};

export default {
  title: 'Preview/Add and select/AddSelectList',
  component: AddSelect.List,
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
