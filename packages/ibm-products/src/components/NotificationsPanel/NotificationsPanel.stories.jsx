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
  // HeaderContainer,
  HeaderName,
  HeaderPanel,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from '@carbon/react';
import { User, Notification, Switcher } from '@carbon/react/icons';
import { StoryDocsPage } from '../../global/js/utils/StoryDocsPage';
import styles from './_storybook-styles.scss?inline';
import uuidv4 from '../../global/js/utils/uuidv4';
import { UnreadNotificationBell } from './preview-components/UnreadNotificationBell';
import { pkg } from '../../settings';

import { NotificationsPanel } from '.';

import data from './NotificationsPanel_data';

const storyBlockClass = `${pkg.prefix}--notifications-panel__story`;

const dataOptions = {
  'Sample data set': data,
  'Empty data set': [],
};

export default {
  title: 'IBM Products/Components/Notifications panel/NotificationsPanel',
  component: NotificationsPanel,
  tags: ['autodocs'],
  parameters: {
    styles,
    layout: 'fullscreen',
  },
  argTypes: {
    data: {
      control: { type: 'select', labels: Object.keys(dataOptions) },
      options: Object.values(dataOptions).map((_k, i) => i),
      mapping: Object.values(dataOptions),
    },
    docs: {
      page: () => (
        <StoryDocsPage altGuidelinesHref="https://pages.github.ibm.com/carbon/ibm-products/components/notification-panel/usage/" />
      ),
    },
  },
};

const defaultProps = {
  data: 0,
  open: true,
  onDoNotDisturbChange: action('Toggled "Do not disturb"'),
  onViewAllClick: action('Clicked "View all"'),
  onSettingsClick: action('Clicked gear icon'),
};

// Create a new notification.
const newNotification = () => {
  // Pick a random notification from the existing data set.
  const random = Math.floor(Math.random() * data.length);
  const notification = { ...data[random] };
  // Update dynamic data.
  notification.id = uuidv4();
  notification.timestamp = new Date();
  notification.unread = true;

  return notification;
};

const Template = (args) => {
  const { data, open, ...rest } = args;
  const [notificationsData, setNotificationsData] = useState(data);
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState(true);
  const [userOpen, setUserOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(open);
  const [switcherOpen, setSwitcherOpen] = useState(false);
  const userActionRef = useRef(null);
  const notificationActionRef = useRef(null);
  const switcherActionRef = useRef(null);

  const markAllAsUnread = () => {
    let tempData = [...notificationsData];
    tempData.forEach((element) => (element.unread = false));
    setNotificationsData(tempData);
  };

  // Every time data is added or removed, check for unread notifications.
  useEffect(() => {
    const hasUnread = notificationsData.find(
      (notification) => notification.unread === true
    );
    setHasUnreadNotifications(hasUnread);
  }, [notificationsData]);

  // Every time the panel is opened, mark all notifications as unread.
  useEffect(() => {
    if (notificationsOpen) {
      markAllAsUnread();
    }
  }, [notificationsOpen]);

  // After changing `data` from the Storybook control.
  useEffect(() => {
    setNotificationsData(data);
  }, [data]);
  // After changing `open` from the Storybook control.
  useEffect(() => {
    setNotificationsOpen(open);
  }, [open]);

  const addNewNotification = () => {
    const notification = newNotification();
    setNotificationsData((data) => [...data, { ...notification }]);
  };

  return (
    <div className={`${storyBlockClass}--full-height`}>
      {/* <HeaderContainer
        render={() => ( */}
      <Header
        aria-label="IBM Cloud Pak"
        className={`${storyBlockClass}--header`}
      >
        <HeaderName
          href="/"
          prefix="IBM"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Cloud Pak
        </HeaderName>
        <HeaderGlobalBar>
          {/**
           *
           * User account
           *
           */}
          <HeaderGlobalAction
            ref={userActionRef}
            aria-label={userOpen ? 'Close user account' : 'Open user account'}
            isActive={userOpen}
            onClick={(e) => {
              e.preventDefault();
              setUserOpen((prevState) => !prevState);
              setNotificationsOpen(false);
              setSwitcherOpen(false);
              setTimeout(() => {
                userActionRef?.current?.focus();
              }, 0);
            }}
          >
            <User size={20} />
          </HeaderGlobalAction>
          <HeaderPanel expanded={userOpen}>
            <div className={`${storyBlockClass}__header-panel`}>
              User account
              <br />
              example panel
            </div>
          </HeaderPanel>
          {/**
           *
           * Notifications
           *
           */}
          <HeaderGlobalAction
            ref={notificationActionRef}
            aria-label={
              notificationsOpen ? 'Close notifications' : 'Open notifications'
            }
            aria-expanded={notificationsOpen}
            isActive={notificationsOpen}
            onClick={(e) => {
              e.preventDefault();
              markAllAsUnread();
              setNotificationsOpen((prevState) => !prevState);
              setUserOpen(false);
              setSwitcherOpen(false);
            }}
          >
            {!notificationsOpen && hasUnreadNotifications ? (
              <UnreadNotificationBell />
            ) : (
              <Notification size={20} />
            )}
          </HeaderGlobalAction>
          <NotificationsPanel
            data={notificationsData}
            open={notificationsOpen}
            onClickOutside={() => {
              action('Clicked outside')();
              setNotificationsOpen(false);
            }}
            onDismissAllNotifications={() => {
              action('Clicked "Dismiss all"')();
              setNotificationsData([]);
            }}
            onDismissSingleNotification={({ id }) => {
              const deletedItem = notificationsData.find((item) => item.id);
              action('Clicked "Dismiss notification"')(deletedItem);

              let tempData = [...notificationsData];
              tempData = tempData.filter((item) => item.id !== id);
              setNotificationsData(tempData);
            }}
            {...rest}
          />
          {/**
           *
           * App switcher
           *
           */}
          <HeaderGlobalAction
            ref={switcherActionRef}
            aria-label={switcherOpen ? 'Close switcher' : 'Open switcher'}
            isActive={switcherOpen}
            onClick={(e) => {
              e.preventDefault();
              setSwitcherOpen((prevState) => !prevState);
              setUserOpen(false);
              setNotificationsOpen(false);
              setTimeout(() => {
                switcherActionRef?.current?.focus();
              }, 0);
            }}
          >
            <Switcher size={20} />
          </HeaderGlobalAction>
          <HeaderPanel expanded={switcherOpen}>
            <div className={`${storyBlockClass}__header-panel`}>
              App switcher
              <br />
              example panel
            </div>
          </HeaderPanel>
        </HeaderGlobalBar>
      </Header>
      {/* )}
      /> */}
      <div className={`${storyBlockClass}__add`}>
        <Button onClick={addNewNotification}>Add new notification</Button>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
};
