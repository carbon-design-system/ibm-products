//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import { action } from '@storybook/addon-actions';
import { Add20 } from '@carbon/icons-react';

import { EmptyState } from '.';

import styles from './_index.scss';

export default {
  title: 'Experimental/EmptyState',
  component: EmptyState,
  parameters: { styles },
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
  illustration: 'default',
};

export const WithDarkModeIllustration = Template.bind({});
WithDarkModeIllustration.args = {
  illustration: 'default',
  illustrationTheme: 'dark',
};

export const withAction = Template.bind({});
withAction.args = {
  action: {
    text: 'Create new',
    type: 'tertiary',
    actionHandler: action('actionHandler'),
  },
};

export const withActionIconButton = Template.bind({});
withActionIconButton.args = {
  action: {
    text: 'Create new',
    type: 'tertiary',
    actionHandler: action('actionHandler'),
    renderIcon: Add20,
  },
};
