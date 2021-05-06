//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import { storiesOf } from '@storybook/react';
import { getComponentLabel } from '../../component_helpers/StorybookHelper';

import styles from './_storybook-styles.scss';

import { ContextHeader } from '.';

const args = {
  name: 'name',
  namespace: 'namespace',
  task: 'High level task',
};

storiesOf(getComponentLabel('ContextHeader'), module)
  .addParameters({ styles })
  .add('Example', () => (
    <div style={{ position: 'absolute', left: '0', right: '0', top: '0' }}>
      <ContextHeader {...args} />
    </div>
  ));
