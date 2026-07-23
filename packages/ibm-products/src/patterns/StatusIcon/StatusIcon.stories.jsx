/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import styles from './example/index.scss?inline';
import DocsPage from './StatusIcon.mdx';
import { StatusIconDefault } from './example/preview-components/StatusIconDefault';

export default {
  title: 'Patterns/StatusIcon',
  component: () => {},
  tags: ['autodocs'],
  parameters: {
    styles,
    docs: {
      page: DocsPage,
    },
  },
};

export const Default = (args) => <StatusIconDefault />;
Default.storyName = 'StatusIcon';
