//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
// import { action } from '@storybook/addon-actions';

import { PageHeader } from '.';

import styles from './_storybook-styles.scss'; // import index in case more files are added later.

export default {
  title: 'Experimental/PageHeader',
  component: PageHeader,
  parameters: { styles, info: {} },
};

const Template = (args) => {
  return <PageHeader {...args} />;
};

export const Minimal = Template.bind({});
Minimal.args = {};

export const Background = Template.bind({});
Background.args = {
  background: true,
};
