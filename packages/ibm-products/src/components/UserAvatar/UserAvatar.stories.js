//story

/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
// TODO: import action to handle events if required.
// import { action } from '@storybook/addon-actions';

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';

import { UserAvatar } from '.';
import mdx from './UserAvatar.mdx';
import styles from './_storybook-styles.scss';
import { User } from '@carbon/react/icons';

const defaultArgs = {
  backgroundColor: 'light-cyan',
  size: 'md',
  renderIcon: User,
};

export default {
  title: getStoryTitle(UserAvatar.displayName),
  component: UserAvatar,
  tags: ['autodocs'],
  // TODO: Define argTypes for props not represented by standard JS types.
  // argTypes: {
  //   egProp: { control: 'color' },
  // },
  argTypes: {
    backgroundColor: {
      control: {
        type: 'select',
      },
      options: ['light-cyan', 'dark-cyan'],
    },
    renderIcon: {
      control: false,
    },
    size: {
      control: {
        type: 'radio',
      },
      options: ['xl', 'lg', 'md', 'sm'],
    },
    tooltipAlignment: {
      control: {
        type: 'select',
      },
      options: [
        'top',
        'top-left',
        'top-right',
        'bottom',
        'bottom-left',
        'bottom-right',
        'left',
        'right',
      ],
    },
  },
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

/**
 * TODO: Declare template(s) for one or more scenarios.
 */
const Template = (args) => {
  return (
    <UserAvatar
      // TODO: handle events with action or local handler.
      // onTodo={action('onTodo log action')}
      {...args}
    />
  );
};

/**
 * TODO: Declare one or more stories, generally one per design scenario.
 * NB no need for a 'Playground' because all stories have all controls anyway.
 */
export const Default = prepareStory(Template, {
  args: {
    ...defaultArgs,
    // TODO: Component args - https://storybook.js.org/docs/react/writing-stories/args#UserAvatar-args
    tooltipText: 'Thomas J. Watson',
  },
});

export const WithName = prepareStory(Template, {
  args: {
    ...defaultArgs,
    name: 'thomas j. watson',
    tooltipText: 'Thomas J. Watson',
  },
});
