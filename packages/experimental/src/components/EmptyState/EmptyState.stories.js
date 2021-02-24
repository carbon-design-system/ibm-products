//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import { action } from '@storybook/addon-actions';
import { Add20 } from '@carbon/icons-react';
import CustomIllustration from './assets/light/error.svg';
import mdx from './EmptyState.mdx';
import {
  storybookPrefixCanary as storybookPrefix /* , storybookPrefixReleased */,
} from '../../../config';

import { EmptyState } from '.';

import styles from './_index.scss';

export default {
  title: `${storybookPrefix}/EmptyState`,
  component: EmptyState,
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

export const WithIllustration = Template.bind({});
WithIllustration.args = {
  illustration: 'nodata',
};

export const WithDarkModeIllustration = Template.bind({});
WithDarkModeIllustration.args = {
  illustration: 'nodata',
  illustrationTheme: 'dark',
};

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
