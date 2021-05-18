/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { action } from '@storybook/addon-actions';
import { Add20 } from '@carbon/icons-react';
import mdx from './NotificationsEmptyState.mdx';
import { pkg } from '../../../settings';
import { getStorybookPrefix } from '../../../../config';
import { NotificationsEmptyState } from '.';

import styles from '../_index.scss';

const storybookPrefix = getStorybookPrefix(
  pkg,
  NotificationsEmptyState.displayName
);

export default {
  title: `${storybookPrefix}/EmptyStates/${NotificationsEmptyState.displayName}`,
  component: NotificationsEmptyState,
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const defaultStoryProps = {
  title: 'Empty state title',
  subtitle: 'Description text explaining why this section is empty.',
};

const Template = (args) => {
  return <NotificationsEmptyState {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  ...defaultStoryProps,
};

export const WithDarkModeIllustration = Template.bind({});
WithDarkModeIllustration.args = {
  ...defaultStoryProps,
  illustrationTheme: 'dark',
};

export const withAction = Template.bind({});
withAction.args = {
  ...defaultStoryProps,
  actionText: 'Create new',
  actionType: 'tertiary',
  onActionEvent: action('actionHandler'),
};

export const withActionIconButton = Template.bind({});
withActionIconButton.args = {
  ...defaultStoryProps,
  actionText: 'Create new',
  actionType: 'tertiary',
  onActionEvent: action('actionHandler'),
  actionIcon: Add20,
};

export const withLink = Template.bind({});
withLink.args = {
  ...defaultStoryProps,
  linkText: 'View documentation',
  linkUrl: 'https://www.carbondesignsystem.com',
};

export const withActionAndLink = Template.bind({});
withActionAndLink.args = {
  ...defaultStoryProps,
  actionText: 'Create new',
  actionType: 'tertiary',
  onActionEvent: action('actionHandler'),
  actionIcon: Add20,
  linkText: 'View documentation',
  linkUrl: 'https://www.carbondesignsystem.com',
};
