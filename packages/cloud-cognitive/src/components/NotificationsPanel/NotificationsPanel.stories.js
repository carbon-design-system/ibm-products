/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@carbon/react';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from '@carbon/react/lib/components/UIShell';
import { User, Notification } from '@carbon/icons-react';
import { white } from '@carbon/colors';
import styles from './_storybook-styles.scss';
import uuidv4 from '../../global/js/utils/uuidv4';
import { UnreadNotificationBell } from './preview-components/UnreadNotificationBell';

import { NotificationsPanel } from '.';

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';

import mdx from './NotificationsPanel.mdx';
import data from './NotificationsPanel_data';

export default {
  title: getStoryTitle(NotificationsPanel.displayName),
  component: NotificationsPanel,
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const renderUIShellHeader = (open, setOpen, hasUnreadNotifications) => (
  <HeaderContainer
    render={() => (
      <Header aria-label="IBM Cloud Pak">
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
          >
            {hasUnreadNotifications ? (
              <UnreadNotificationBell />
            ) : (
              <Notification
                size={20}
                style={{
                  /* stylelint-disable-next-line */
                  fill: white,
                }}
              />
            )}
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="App switcher">
            <User
              size={20}
              style={{
                /* stylelint-disable-next-line */
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

  return (
    <>
      {renderUIShellHeader(open, setOpen, hasUnreadNotifications)}
      <Button onClick={addNewNotification}>Add new notification</Button>
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
    </>
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

export const Default = prepareStory(Template, {
  args: {
    onDoNotDisturbChange: action('Toggled to do not disturb'),
    onViewAllClick: action('Clicked view all button'),
    onSettingsClick: action('Clicked settings gear'),
  },
});

export const EmptyState = prepareStory(EmptyNotifications, {
  args: {
    data: [],
    onDoNotDisturbChange: action('Toggled to do not disturb'),
    onViewAllClick: action('Clicked view all button'),
    onSettingsClick: action('Clicked settings gear'),
  },
});
