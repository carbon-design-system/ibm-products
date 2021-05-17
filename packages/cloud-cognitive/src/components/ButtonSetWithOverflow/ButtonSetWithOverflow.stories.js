//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';

import { action } from '@storybook/addon-actions';

import { pkg } from '../../settings';

import { getStorybookPrefix } from '../../../config';
import { ButtonSetWithOverflow } from '.';

// Carbon and package components we use.

const storybookPrefix = getStorybookPrefix(
  pkg,
  ButtonSetWithOverflow.displayName
);

const blockClass = `${pkg.prefix}--button-set`;

import styles from './_storybook-styles.scss'; // import index in case more files are added later.

export default {
  title: `${storybookPrefix}/${ButtonSetWithOverflow.displayName}`,
  component: ButtonSetWithOverflow,
  argTypes: {
    containerWidth: {
      control: { type: 'range', min: 20, max: 800, step: 10 },
    },
  },
  decorators: [
    (story) => <div className={`${blockClass}__story-viewport`}>{story()}</div>,
  ],
  parameters: { styles },
};

const buttons = [
  {
    kind: 'secondary',
    onClick: action('Secondary 1'),
    label: 'Secondary 1',
  },
  {
    kind: 'secondary',
    onClick: action('Secondary 2'),
    label: 'Secondary 2',
  },
  {
    kind: 'primary',
    onClick: action('Primary'),
    label: 'Primary',
  },
];

const Template = (argsIn) => {
  const { containerWidth, ...args } = { ...argsIn };
  return (
    <div style={{ width: containerWidth }}>
      <ButtonSetWithOverflow {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  buttons,
  containerWidth: 500,
};
