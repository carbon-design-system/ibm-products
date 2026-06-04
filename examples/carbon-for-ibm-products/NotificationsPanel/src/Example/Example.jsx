import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
  Button,
} from '@carbon/react';
import { Close, Notification } from '@carbon/icons-react';

import './_example.scss';

import { NotificationsPanel } from '@carbon/ibm-products';
import { sampleData } from './sampleData';

export const Example = () => {
  const [open, setOpen] = useState(false);
  const [notificationsData, setNotificationsData] = useState(sampleData);

  const addNewNotification = () => {
    const newNotification = {
      id: (props) => (<uuidv size={4} {...props} />)(),
      type: 'success',
      title: 'Deployed app successfully',
      description: 'Application has been deployed.',
      timestamp: new Date(),
      unread: true,
      onNotificationClick: (notification) =>
        console.log(`Clicked on notification with id "${notification.id}"`),
    };
    setNotificationsData((arr) => [...arr, newNotification]);
  };

  return (
    <>
      <HeaderContainer
        render={() => (
          <Header aria-label="IBM [Product]">
            <HeaderName href="/" prefix="IBM">
              [Product]
            </HeaderName>
            <HeaderGlobalBar>
              <HeaderGlobalAction
                aria-label="Notifications"
                onClick={() => setOpen(!open)}
              >
                {open ? (
                  <Close size={20} />
                ) : (
                  <Notification size={20} />
                )}
              </HeaderGlobalAction>
            </HeaderGlobalBar>
          </Header>
        )}
      />
      <div className="main--content">
        <Button onClick={addNewNotification}>Add new notification</Button>
        <NotificationsPanel
          open={open}
          onClickOutside={() => setOpen(false)}
          data={notificationsData}
          onDoNotDisturbChange={(event) =>
            console.log('Toggled do not disturb', event)
          }
          onViewAllClick={() => console.log('Clicked view all button')}
          onSettingsClick={() => console.log('Clicked settings gear button')}
          onDismissAllNotifications={() => setNotificationsData([])}
          onDismissSingleNotification={({ id }) => {
            let tempData = [...notificationsData];
            tempData = tempData.filter((item) => item.id !== id);
            setNotificationsData(tempData);
          }}
        />
      </div>
    </>
  );
};

export default Example;
