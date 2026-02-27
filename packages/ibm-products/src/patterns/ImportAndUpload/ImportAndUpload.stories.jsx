/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import styles from './_story-styles.scss?inline';
import mdx from './ImportAndUpload.mdx';
import { StandardImportAndUploadExample } from './example/components/ImportAndUploadExamples';

export default {
  title: 'Patterns/Import And Upload',
  component: () => {},
  tags: ['autodocs'],
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const StandardTemplate = (args) => {
  return <StandardImportAndUploadExample {...args} />;
};

export const Standard = StandardTemplate.bind({});
Standard.args = {};
