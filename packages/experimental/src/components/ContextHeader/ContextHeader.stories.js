//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';

import { ContextHeader } from '.';

import styles from './_ContextHeader.scss';
import {
  storybookPrefixCanary as storybookPrefix /* , storybookPrefixReleased */,
} from '../../../config';

export default {
  title: `${storybookPrefix}/ContextHeader`,
  component: ContextHeader,
  parameters: { styles },
};

const Template = (args) => {
  return (
    <div style={{ position: 'absolute', left: '0', right: '0', top: '0' }}>
      <ContextHeader {...args} />
    </div>
  );
};

export const Example = Template.bind({});
Example.args = {
  name: 'name',
  namespace: 'namespace',
  task: 'High level task',
};
