/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import WebTerminal from './WebTerminal';
import { Navigation } from './preview-components';
import { sectionTitle } from '../../config';

import styles from './scss/_storybook-styles.scss';

const Template = (args) => {
  return (
    <div className="example">
      <Navigation />
      <div>Content</div>
      <WebTerminal {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};

export default {
  title: `${sectionTitle}/WebTerminal`,
  parameters: { styles },
};
