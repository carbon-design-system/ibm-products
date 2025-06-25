/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import styles from './_storybook-styles.scss?inline';
import mdx from './TruncatedText.mdx';
import { TruncatedText } from './TruncatedText';

const storyClass = 'truncated-list-stories';

const defaultProps = {
  align: 'top',
  autoalign: false,
  collapseLabel: 'Close',
  expandLabel: 'Open',
  lines: 3,
  value: 'Text',
  type: 'expand',
};

export default {
  title: 'Utilities/TruncatedText',
  component: TruncatedText,
  tags: ['autodocs'],
  parameters: {
    styles,
    layout: 'centered',
    docs: {
      page: mdx,
    },
  },
};

const Template = (args) => {
  return (
    <div className={`${storyClass}__viewport`}>
      <TruncatedText {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = { ...defaultProps };
