/**
 * Copyright IBM Corp. 2020, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { addons } from 'storybook/manager-api';
import React from 'react';
import theme from './theme';
import { checkCanaryStatus } from '../../ibm-products/src/global/js/utils/story-helper';

const renderComponentLabel = (label, dark, type = 'Canary') => {
  return (
    <div
      style={{
        flex: '1 0 auto',
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'space-between',
      }}
    >
      {label}
      <div
        style={{
          background: dark ? '#555555' : '#e0e0e0',
          /* stylelint-disable-next-line carbon/type-use */
          fontSize: '11px',
          border: '.1px solid transparent',
          /* stylelint-disable-next-line carbon/layout-use */
          padding: '0 .5rem',
          /* stylelint-disable-next-line carbon/layout-use */
          margin: '0 .5em',
          borderRadius: '8px',
        }}
      >
        {type}
      </div>
    </div>
  );
};

addons.setConfig({
  theme,
});
