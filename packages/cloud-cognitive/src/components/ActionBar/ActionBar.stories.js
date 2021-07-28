//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import { action } from '@storybook/addon-actions';

import { Bee16, Lightning16 } from '@carbon/icons-react';

import { pkg } from '../../settings';
import { getStorybookPrefix } from '../../../config';
import { prepareStory } from '../../global/js/utils/story-helper';
import { getDeprecatedArgTypes } from '../../global/js/utils/props-helper';
import { ActionBar, deprecatedProps } from './ActionBar';

const storybookPrefix = getStorybookPrefix(pkg, ActionBar.displayName);

export default {
  title: `${storybookPrefix}/${ActionBar.displayName}`,
  component: ActionBar,
  argTypes: {
    ...getDeprecatedArgTypes(deprecatedProps),
    containerWidth: {
      control: { type: 'range', min: 20, max: 800, step: 10 },
    },
  },
  decorators: [
    (story) => <div className={`ccs-sb__display-box`}>{story()}</div>,
  ],
};

const actions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => ({
  key: `a-key-${num}`,
  renderIcon: num % 2 ? Lightning16 : Bee16,
  iconDescription: `Action ${num}`,
  onClick: action(`Action ${num}`),
}));

const Template = (argsIn) => {
  const { children, containerWidth, ...args } = { ...argsIn };
  return (
    <div style={{ width: containerWidth }}>
      <ActionBar {...args}>{children}</ActionBar>
    </div>
  );
};

export const Default = prepareStory(Template, {
  args: {
    actions: actions,
    containerWidth: 500,
    overflowAriaLabel: 'Open and close additional action bar items list.',
  },
});
