/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import sectionTitle from '../../../config';

import DISPLAY_NAME from '.';

import page from './DISPLAY_NAME.mdx';
import styles from './_STYLE_NAME.scss';

const { name } = DISPLAY_NAME;

export default {
  title: `${sectionTitle}/${name}`,
  component: DISPLAY_NAME,

  // TODO: Component args - https://storybook.js.org/docs/react/writing-stories/args#DISPLAY_NAME-args
  args: {
    children: name,
  },
  parameters: {
    docs: {
      page,
    },
    styles,
  },
};

export const Default = (args) => <DISPLAY_NAME {...args} />;
