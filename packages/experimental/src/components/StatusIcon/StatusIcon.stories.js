//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';

import { StatusIcon } from '.';
import { pkg } from '../../settings';
import mdx from './StatusIcon.mdx';
import styles from './_storybook.scss'; // import storybook which includes component and additional storybook styles
import { getStorybookPrefix } from '../../../config';
const storybookPrefix = getStorybookPrefix(pkg, 'StatusIcon');

export default {
  title: `${storybookPrefix}/StatusIcon`,
  component: StatusIcon,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: [
          'fatal',
          'critical',
          'major-warning',
          'minor-warning',
          'undefined',
          'unknown',
          'normal',
          'info',
          'in-progress',
          'running',
          'pending',
        ],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large', 'x-large'],
      },
    },
    theme: {
      control: {
        type: 'radio',
        options: ['light', 'dark'],
      },
    },
  },
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const defaultProps = {
  type: 'fatal',
  size: 'small',
  theme: 'light',
};

const Template = (args) => {
  return <StatusIcon {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
};
