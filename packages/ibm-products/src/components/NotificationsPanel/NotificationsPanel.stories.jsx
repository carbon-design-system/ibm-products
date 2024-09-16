/**
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useState, useRef } from 'react';
import { action } from '@storybook/addon-actions';
import {
  Button,
  Header,
  HeaderContainer,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from '@carbon/react';
import { User, Notification } from '@carbon/react/icons';
import styles from './_storybook-styles.scss?inline';
import uuidv4 from '../../global/js/utils/uuidv4';
import { UnreadNotificationBell } from './preview-components/UnreadNotificationBell';
import { pkg } from '../../settings';

import { NotificationsPanel } from '.';

// import mdx from './NotificationsPanel.mdx';
import data from './NotificationsPanel_data';

const storyBlockClass = `${pkg.prefix}--notifications-panel__story`;
const blockClass = `${pkg.prefix}--notifications-panel`;

export default {
  title: 'IBM Products/Patterns/Notifications/NotificationsPanel',
  component: NotificationsPanel,
  tags: ['autodocs'],
  parameters: {
    styles,
    layout: 'fullscreen',
    /*
docs: {
      page: mdx,
    },
*/
  },
};

const renderUIShellHeader = (
  open,
  setOpen,
  notificationTriggerRef,
  hasUnreadNotifications
) => (
  <HeaderContainer
    render={() => (
      <Header
        aria-label="IBM Cloud Pak"
        className={`${storyBlockClass}--header`}
      >
        <HeaderName href="/" prefix="IBM">
          Cloud Pak
        </HeaderName>
        <HeaderGlobalBar
          style={{
            zIndex: 2,
          }}
        >
          <HeaderGlobalAction
            aria-label="Notifications"
            onClick={() => setOpen(!open)}
            ref={notificationTriggerRef}
          >
            {hasUnreadNotifications ? (
              <UnreadNotificationBell />
            ) : (
              <Notification size={20} />
            )}
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="App switcher">
            <User size={20} />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    )}
  />
);

const Template = (args) => {
  const [open, setOpen] = useState(false);
  const notificationTriggerRef = useRef(null);
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState(false);
  const [notificationsData, setNotificationsData] = useState(data);

  const addNewNotification = () => {
    const newNotification = {
      id: uuidv4(),
      type: 'success',
      title: 'Deployed app successfully',
      description: 'Application has been deployed.',
      timestamp: new Date(),
      unread: true,
      onNotificationClick: action(`Clicked on notification`),
    };
    setNotificationsData((arr) => [...arr, newNotification]);
  };

  // logic for unread bell indicator
  useEffect(() => {
    let unreadTimer;
    if (open && hasUnreadNotifications) {
      const tempData = [...notificationsData];
      tempData.forEach((element) => {
        element.unread = false;
      });
      unreadTimer = setTimeout(() => {
        setHasUnreadNotifications(false);
        setNotificationsData(tempData);
      }, 2000);
    }
    if (!open && !hasUnreadNotifications) {
      let hasUnreadNotificationsCheck;
      for (let i = 0; i < notificationsData.length; i++) {
        if (notificationsData[i].unread === true) {
          hasUnreadNotificationsCheck = true;
          break;
        } else {
          hasUnreadNotificationsCheck = false;
        }
      }
      setHasUnreadNotifications(hasUnreadNotificationsCheck);
    }
    return () => clearTimeout(unreadTimer);
  }, [open, notificationsData, hasUnreadNotifications]);

  // Focus the dialog content and trigger button
  useEffect(() => {
    if (!open && notificationTriggerRef.current) {
      notificationTriggerRef.current.focus();
    }
  }, [open]);

  return (
    <div className={`${storyBlockClass}--full-height`}>
      {renderUIShellHeader(
        open,
        setOpen,
        notificationTriggerRef,
        hasUnreadNotifications
      )}
      <div className={`${storyBlockClass}__add`}>
        <Button onClick={addNewNotification}>Add new notification</Button>
      </div>
      <NotificationsPanel
        {...args}
        data={notificationsData}
        open={open}
        onClickOutside={() => setOpen(false)}
        onDismissAllNotifications={() => setNotificationsData([])}
        onDismissSingleNotification={({ id }) => {
          let tempData = [...notificationsData];
          tempData = tempData.filter((item) => item.id !== id);
          setNotificationsData(tempData);
        }}
      />
    </div>
  );
};

const EmptyNotifications = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {renderUIShellHeader(open, setOpen)}
      <NotificationsPanel
        {...args}
        open={open}
        onClickOutside={() => setOpen(false)}
        doNotDisturbDefaultToggled
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  onDoNotDisturbChange: action('Toggled to do not disturb'),
  onViewAllClick: action('Clicked view all button'),
  onSettingsClick: action('Clicked settings gear'),
};

export const EmptyState = EmptyNotifications.bind({});
EmptyState.args = {
  data: [],
  onDoNotDisturbChange: action('Toggled to do not disturb'),
  onViewAllClick: action('Clicked view all button'),
  onSettingsClick: action('Clicked settings gear'),
};
