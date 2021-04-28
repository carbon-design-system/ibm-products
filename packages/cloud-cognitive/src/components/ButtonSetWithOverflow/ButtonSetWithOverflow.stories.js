//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';

import { action } from '@storybook/addon-actions';

import { pkg } from '../../settings';
import '../../utils/enable-all'; // must come before component is imported (directly or indirectly)

import { getStorybookPrefix } from '../../../config';
import { ButtonSetWithOverflow } from '.';

// Carbon and package components we use.
import { Button } from 'carbon-components-react';

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

const ButtonSetWithOverflowItems = (
  <>
    <Button kind="secondary" onClick={action('Secondary 1')}>
      Secondary 1
    </Button>
    <Button kind="secondary" onClick={action('Secondary 2')}>
      Secondary 2
    </Button>
    <Button kind="primary" onClick={action('Primary')}>
      Primary
    </Button>
  </>
);

const Template = (argsIn) => {
  const { children, containerWidth, ...args } = { ...argsIn };
  return (
    <div style={{ width: containerWidth }}>
      <ButtonSetWithOverflow {...args}>{children}</ButtonSetWithOverflow>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: ButtonSetWithOverflowItems,
  containerWidth: 500,
};
