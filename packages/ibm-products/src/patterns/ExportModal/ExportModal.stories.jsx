/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import styles from './_story-styles.scss?inline';
import DocsPage from './ExportModal.mdx';
import {
  StandardExportModal,
  ExportModalWithExtensionValidation,
  ExportModalWithPreformattedExtensions,
} from './example/components/ExportModalExamples';

export default {
  title: 'Patterns/Export Modal',
  component: () => {},
  tags: ['autodocs'],
  parameters: {
    styles,
    docs: {
      page: DocsPage,
    },
  },
};

const StandardTemplate = (args) => {
  return <StandardExportModal {...args} />;
};

const WithExtensionValidationTemplate = (args) => {
  return <ExportModalWithExtensionValidation {...args} />;
};

const WithPreformattedExtensionsTemplate = (args) => {
  return <ExportModalWithPreformattedExtensions {...args} />;
};

export const Standard = StandardTemplate.bind({});
Standard.args = {};

export const WithExtensionValidation = WithExtensionValidationTemplate.bind({});
WithExtensionValidation.args = {};

export const WithPreformattedExtensions =
  WithPreformattedExtensionsTemplate.bind({});
WithPreformattedExtensions.args = {};
