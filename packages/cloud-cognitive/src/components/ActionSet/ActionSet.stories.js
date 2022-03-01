/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import { action } from '@storybook/addon-actions';

import { pkg } from '../../settings';
import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';
import { DisplayBox } from '../../global/js/utils/DisplayBox';

import { ActionSet } from '.';
import { actionsOptions, actionsLabels, actionsMapping } from './actions.js';

import styles from './_storybook-styles.scss';

const blockClass = `${pkg.prefix}--action-set`;

export default {
  title: getStoryTitle(ActionSet.displayName),
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
      mapping: actionsMapping({}, action),
    },
  },
  decorators: [
    (story) => (
      <DisplayBox msg="width available to component">{story()}</DisplayBox>
    ),
  ],
};

// eslint-disable-next-line react/prop-types
const Template = ({ actions, size = 'md', ...args }) => {
  const validationError = ActionSet.validateActions()(
    { actions, size, ...args },
    'actions',
    ActionSet.displayName,
    'prop'
  );

  return (
    <>
      {validationError && <p>Note: {validationError.message.split(':')[1]}</p>}
      <div
        className={`${blockClass}__story-container ${blockClass}__story-container--${size}`}
      >
        <ActionSet {...{ actions, size, ...args }} />
      </div>
    </>
  );
};

export const actionSet = prepareStory(Template, {
  args: { actions: 3 },
});
