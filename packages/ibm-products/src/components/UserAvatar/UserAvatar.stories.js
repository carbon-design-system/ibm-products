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
import { UserAvatar } from '.';
import mdx from './UserAvatar.mdx';
import styles from './_storybook-styles.scss';
import { Add, Group, User } from '@carbon/react/icons';
import headshot from './_story-assets/headshot.jpg';
import { Theme } from '@carbon/react';
import { useEffect, useState } from 'react';

const defaultArgs = {
  backgroundColor: 'order-1-cyan',
};

export default {
  title: 'IBM Products/Components/User avatar/UserAvatar',
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
      options: [
        'order-1-cyan',
        'order-2-gray',
        'order-3-green',
        'order-4-magenta',
        'order-5-purple',
        'order-6-teal',
        'order-7-cyan',
        'order-8-gray',
        'order-9-green',
        'order-10-magenta',
        'order-11-purple',
        'order-12-teal',
      ],
    },
    renderIcon: {
      control: {
        type: 'select',
      },
      options: ['No icon', 'User', 'Group', 'Add'],
      mapping: { 'No icon': '', User: User, Group: Group, Add: Add },
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
  args: {
    size: 'md',
    tooltipAlignment: 'bottom',
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
  const [themeValue, setThemeValue] = useState(
    document.body.getAttribute('storybook-carbon-theme')
  );

  useEffect(() => {
    console.log('Theme value:', themeValue);
  }, [themeValue]);

  useEffect(() => {
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'storybook-carbon-theme'
        ) {
          setThemeValue(document.body.getAttribute('storybook-carbon-theme'));
        }
      }
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['storybook-carbon-theme'],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <Theme theme={themeValue}>
      <UserAvatar
        // TODO: handle events with action or local handler.
        // onTodo={action('onTodo log action')}
        {...args}
      />
    </Theme>
  );
};
/**
 * TODO: Declare one or more stories, generally one per design scenario.
 * NB no need for a 'Playground' because all stories have all controls anyway.
 */
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  ...defaultArgs,
  // TODO: Component args - https://storybook.js.org/docs/react/writing-stories/args#UserAvatar-args
  name: 'thomas j. watson',
  tooltipText: 'Thomas J. Watson',
  renderIcon: 'No icon',
};

export const WithImage = Template.bind({});
WithImage.storyName = 'WithImage';
WithImage.args = {
  ...defaultArgs,
  image: headshot,
  imageDescription: 'image here',
};
