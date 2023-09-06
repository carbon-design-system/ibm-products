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
