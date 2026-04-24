/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { AddSelect } from '../AddSelect/AddSelect';
import styles from '../_storybook-styles.scss?inline';

import mdx from './AddSelectSidePanel.mdx';

/**
 * Story 1: Default
 * Shows the default side panel wrapper
 */
export const Default = {
  render: () => {
    return (
      <div
        style={{ display: 'flex', height: '400px', border: '1px solid #ccc' }}
      >
        <div style={{ flex: 1, padding: '1rem', background: '#f4f4f4' }}>
          Main content area
        </div>
        <AddSelect.SidePanel>
          <div style={{ padding: '1rem' }}>Side panel content</div>
        </AddSelect.SidePanel>
      </div>
    );
  },
};

/**
 * Story 2: Width Variants
 * Shows different width options
 */
export const WidthVariants = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div>
          <h4>Narrow (16rem)</h4>
          <div
            style={{
              display: 'flex',
              height: '300px',
              border: '1px solid #ccc',
            }}
          >
            <div style={{ flex: 1, padding: '1rem', background: '#f4f4f4' }}>
              Main content
            </div>
            <AddSelect.SidePanel width="narrow">
              <div style={{ padding: '1rem' }}>Narrow panel</div>
            </AddSelect.SidePanel>
          </div>
        </div>

        <div>
          <h4>Default (22.5rem)</h4>
          <div
            style={{
              display: 'flex',
              height: '300px',
              border: '1px solid #ccc',
            }}
          >
            <div style={{ flex: 1, padding: '1rem', background: '#f4f4f4' }}>
              Main content
            </div>
            <AddSelect.SidePanel width="default">
              <div style={{ padding: '1rem' }}>Default panel</div>
            </AddSelect.SidePanel>
          </div>
        </div>

        <div>
          <h4>Wide (28rem)</h4>
          <div
            style={{
              display: 'flex',
              height: '300px',
              border: '1px solid #ccc',
            }}
          >
            <div style={{ flex: 1, padding: '1rem', background: '#f4f4f4' }}>
              Main content
            </div>
            <AddSelect.SidePanel width="wide">
              <div style={{ padding: '1rem' }}>Wide panel</div>
            </AddSelect.SidePanel>
          </div>
        </div>
      </div>
    );
  },
};

export default {
  title: 'Preview/Add and select/AddSelectSidePanel',
  component: AddSelect.SidePanel,
  tags: ['autodocs'],
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    width: {
      control: 'select',
      options: ['narrow', 'default', 'wide'],
      description: 'Width variant for the side panel',
    },
    children: {
      control: false,
      description: 'Content to display in the side panel',
    },
    className: {
      control: 'text',
      description: 'Optional class name',
    },
  },
};
