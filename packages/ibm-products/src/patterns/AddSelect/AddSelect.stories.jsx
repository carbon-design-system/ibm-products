/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import styles from './_story-styles.scss?inline';
import DocsPage from './AddSelect.mdx';
import { StandardSingleAddSelect } from './example/preview-components/StandardSingleAddSelect';

export default {
  title: 'Patterns/AddSelect',
  component: () => {},
  tags: ['autodocs'],
  parameters: {
    styles,
    docs: {
      page: DocsPage,
    },
  },
};

export const SingleAddSelect = () => {
  return <StandardSingleAddSelect />;
};

SingleAddSelect.storyName = 'Single selection';

// Made with Bob
