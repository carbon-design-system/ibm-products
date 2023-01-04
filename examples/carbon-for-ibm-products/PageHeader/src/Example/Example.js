import React from 'react';

import { CommonHeader } from './CommonHeader/CommonHeader.js';
import { Content } from '@carbon/react';

import './_example.scss';
import { SamplePage } from './SamplePage/index.js';

export const Example = () => (
  <>
    <CommonHeader className="header-area" />
    <Content className="content-area">
      <SamplePage />
    </Content>
  </>
);
