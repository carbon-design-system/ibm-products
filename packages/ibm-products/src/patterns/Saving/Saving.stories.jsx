/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import styles from './_story-styles.scss?inline';
import DocsPage from './Saving.mdx';
import { AutoSaving } from './example/preview-components/AutoSaving';
import { ManualSaving } from './example/preview-components/ManualSaving';

export default {
  title: 'Patterns/Saving',
  component: () => {},
  tags: ['autodocs'],
  parameters: {
    styles,
    docs: {
      page: DocsPage,
    },
  },
};

export const Auto = () => <AutoSaving />;
Auto.storyName = 'Auto';

export const Manual = () => <ManualSaving />;
Manual.storyName = 'Manual';
