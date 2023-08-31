/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import { Content } from '@carbon/react';

export const sidePanelDecorator = (renderHeader, prefix) => (Story) =>
  (
    <div className={`${prefix}container`}>
      {renderHeader()}
      <Content className={`${prefix}content`}>
        <Story />
      </Content>
    </div>
  );
