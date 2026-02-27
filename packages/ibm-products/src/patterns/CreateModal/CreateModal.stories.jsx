/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import styles from './_story-styles.scss?inline';
import DocsPage from './CreateModal.mdx';
import {
  CreateModalExample,
  CreateModalWithValidationExample,
} from './example/components/CreateModalExample';

export default {
  title: 'Patterns/Step flows/Create Modal',
  component: () => {},
  tags: ['autodocs'],
  parameters: {
    styles,
    docs: {
      page: DocsPage,
    },
  },
};

const CreateModalPattern = (args) => {
  return <CreateModalExample {...args} />;
};

const CreateModalWithValidationPattern = (args) => {
  return <CreateModalWithValidationExample {...args} />;
};

export const CreateModal = CreateModalPattern.bind({});
CreateModal.args = {};

export const WithFormValidation = CreateModalWithValidationPattern.bind({});
WithFormValidation.args = {};
