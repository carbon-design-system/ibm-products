/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { action } from '@storybook/addon-actions';
import { Button } from 'carbon-components-react';

import Notifications from './Notifications';
import mdx from './Notifications.mdx';
import data from './Notifications_data';

import styles from './_index.scss';

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

/**
 * Simple state manager for modals.
 */
/* eslint-disable react/prop-types */
const ModalStateManager = ({
  renderLauncher: LauncherContent,
  children: ModalContent,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {!ModalContent || typeof document === 'undefined'
        ? null
        : ReactDOM.createPortal(
            <ModalContent open={open} setOpen={setOpen} />,
            document.body
          )}
      {LauncherContent && <LauncherContent open={open} setOpen={setOpen} />}
    </>
  );
};

export const Default = () => {
  return (
    <ModalStateManager
      renderLauncher={({ open, setOpen }) => (
        <Button onClick={() => setOpen(!open)}>
          {open ? 'Close notifications' : 'Open notifications'}
        </Button>
      )}>
      {({ open }) => (
        <Notifications
          open={open}
          data={data}
          onDisableNotificationChange={(value) => action(`Toggled to ${value}`)}
        />
      )}
    </ModalStateManager>
  );
};

export const EmptyState = () => {
  return (
    <ModalStateManager
      renderLauncher={({ open, setOpen }) => (
        <Button onClick={() => setOpen(!open)}>
          {open ? 'Close notifications' : 'Open notifications'}
        </Button>
      )}>
      {({ open }) => (
        <Notifications
          open={open}
          data={[]}
          onDisableNotificationChange={(value) => action(`Toggled to ${value}`)}
        />
      )}
    </ModalStateManager>
  );
};
