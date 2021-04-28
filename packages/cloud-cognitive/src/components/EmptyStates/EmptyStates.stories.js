/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { action } from '@storybook/addon-actions';
import { Add20 } from '@carbon/icons-react';
import CustomIllustration from './story_assets/empty-state-bright-magnifying-glass.svg';
import '../../utils/enable-all'; // must come before component is imported (directly or indirectly)
import { pkg } from '../../settings';
import { getStorybookPrefix } from '../../../config';
import mdx from './EmptyState.mdx';

import {
  EmptyState,
  ErrorEmptyState,
  NoDataEmptyState,
  NoTagsEmptyState,
  NotFoundEmptyState,
  NotificationsEmptyState,
  UnauthorizedEmptyState,
} from '.';

import styles from './_storybook-styles.scss';

const storybookPrefix = getStorybookPrefix(pkg, EmptyState.displayName);
console.log(EmptyState.displayName, storybookPrefix);

export default {
  title: `${storybookPrefix}/EmptyStates/EmptyState`,
  component: EmptyState,
  subcomponents: {
    ErrorEmptyState,
    NoDataEmptyState,
    NoTagsEmptyState,
    NotFoundEmptyState,
    NotificationsEmptyState,
    UnauthorizedEmptyState,
  },
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const Template = (args) => {
  return (
    <EmptyState
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

export const WithCustomIllustration = Template.bind({});
WithCustomIllustration.args = {
  illustration: CustomIllustration,
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
