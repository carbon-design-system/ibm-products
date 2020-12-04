/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from 'carbon-components-react/lib/components/UIShell';
import { User20, Notification20 } from '@carbon/icons-react';
import { white } from '@carbon/colors';
import styles from './_storybook-styles.scss';

import Notifications from './Notifications';
import mdx from './Notifications.mdx';
import data from './Notifications_data';

export default {
  title: 'Experimental/Notifications',
  component: Notifications,
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const renderUIShellHeader = (open, setOpen) => (
  <HeaderContainer
    render={() => (
      <Header aria-label="IBM Cloud Pak">
        <HeaderName href="/" prefix="IBM">
          Cloud Pak
        </HeaderName>
        <HeaderGlobalBar
          style={{
            zIndex: 2,
          }}>
          <HeaderGlobalAction
            aria-label="App switcher"
            onClick={() => setOpen(!open)}>
            <Notification20
              style={{
                fill: white,
              }}
            />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="App switcher">
            <User20
              style={{
                fill: white,
              }}
            />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    )}
  />
);

const Template = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {renderUIShellHeader(open, setOpen)}
      <Notifications {...args} open={open} setOpen={setOpen} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  data,
  onDoNotDisturbChange: (value) => action(`Toggled to ${value}`),
};

export const EmptyState = Template.bind({});
EmptyState.args = {
  data: [],
  onDoNotDisturbChange: (value) => action(`Toggled to ${value}`),
};
