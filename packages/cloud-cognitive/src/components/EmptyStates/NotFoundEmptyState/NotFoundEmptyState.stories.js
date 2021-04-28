/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { action } from '@storybook/addon-actions';
import { Add20 } from '@carbon/icons-react';
import '../../../utils/enable-all'; // must come before component is imported (directly or indirectly)
import mdx from './NotFoundEmptyState.mdx';
import { pkg } from '../../../settings';
import { getStorybookPrefix } from '../../../../config';
import { NotFoundEmptyState } from '.';

import styles from '../_index.scss';

const storybookPrefix = getStorybookPrefix(pkg, NotFoundEmptyState.displayName);

export default {
  title: `${storybookPrefix}/EmptyStates/${NotFoundEmptyState.displayName}`,
  component: NotFoundEmptyState,
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const Template = (args) => {
  return (
    <NotFoundEmptyState
      heading="Start by adding data assets"
      subtext={
        <p>
          Click <span>Upload assets</span> to upload your data
        </p>
      }
      {...args}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};

export const WithDarkModeIllustration = Template.bind({});
WithDarkModeIllustration.args = {
  illustrationTheme: 'dark',
};

export const withAction = Template.bind({});
withAction.args = {
  actionText: 'Create new',
  actionType: 'tertiary',
  onActionEvent: action('actionHandler'),
};

export const withActionIconButton = Template.bind({});
withActionIconButton.args = {
  actionText: 'Create new',
  actionType: 'tertiary',
  onActionEvent: action('actionHandler'),
  actionIcon: Add20,
};

export const withLink = Template.bind({});
withLink.args = {
  linkText: 'View documentation',
  linkUrl: 'https://www.carbondesignsystem.com',
};

export const withActionAndLink = Template.bind({});
withActionAndLink.args = {
  actionText: 'Create new',
  actionType: 'tertiary',
  onActionEvent: action('actionHandler'),
  actionIcon: Add20,
  linkText: 'View documentation',
  linkUrl: 'https://www.carbondesignsystem.com',
};
