/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import { pkg } from '../../settings';
import '../../utils/enable-all'; // must come before component is imported (directly or indirectly)
import { getStorybookPrefix } from '../../../config';

import { ActionSet } from '.';
import { actionsOptions, actionsLabels, actionsMapping } from './actions.js';

import styles from './_storybook-styles.scss';

const storybookPrefix = getStorybookPrefix(pkg, ActionSet.displayName);

export default {
  title: `${storybookPrefix}/${ActionSet.displayName}`,
  component: ActionSet,
  parameters: {
    styles,
  },
  argTypes: {
    actions: {
      control: {
        type: 'select',
        labels: actionsLabels,
      },
      options: actionsOptions,
      mapping: actionsMapping(),
    },
  },
};

// eslint-disable-next-line react/prop-types
const Template = ({ actions, ...args }) => {
  return <ActionSet {...args} actions={actions} />;
};

export const actionSet = Template.bind({});
actionSet.args = { actions: 3 };
