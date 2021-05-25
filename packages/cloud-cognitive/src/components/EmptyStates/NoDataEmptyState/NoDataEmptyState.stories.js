/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { action } from '@storybook/addon-actions';
import { Add20 } from '@carbon/icons-react';
import mdx from './NoDataEmptyState.mdx';
import { pkg } from '../../../settings';
import { getStorybookPrefix } from '../../../../config';

import { NoDataEmptyState } from '.';

import styles from '../_index.scss';

const storybookPrefix = getStorybookPrefix(pkg, NoDataEmptyState.displayName);

export default {
  title: `${storybookPrefix}/EmptyStates/${NoDataEmptyState.displayName}`,
  component: NoDataEmptyState,
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
  return <NoDataEmptyState {...args} />;
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
  action: {
    text: 'Create new',
    onClick: action('Clicked empty state action button'),
  },
};

export const withActionIconButton = Template.bind({});
withActionIconButton.args = {
  ...defaultStoryProps,
  action: {
    text: 'Create new',
    onClick: action('Clicked empty state action button'),
    renderIcon: Add20,
    iconDescription: 'Add icon',
  },
};

export const withLink = Template.bind({});
withLink.args = {
  ...defaultStoryProps,
  link: {
    text: 'View documentation',
    href: 'https://www.carbondesignsystem.com',
  },
};

export const withActionAndLink = Template.bind({});
withActionAndLink.args = {
  ...defaultStoryProps,
  action: {
    text: 'Create new',
    onClick: action('Clicked empty state action button'),
    renderIcon: Add20,
    iconDescription: 'Add icon',
  },
  link: {
    text: 'View documentation',
    href: 'https://www.carbondesignsystem.com',
  },
};
