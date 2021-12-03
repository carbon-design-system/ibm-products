import React, { useState } from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from './Theme/ThemeContext';
import { ThemeDropdown } from './Theme/ThemeDropdown';
import { v4 as uuidv4 } from 'uuid';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from 'carbon-components-react/lib/components/UIShell';
import { Button } from 'carbon-components-react';
import { Notification20 } from '@carbon/icons-react';

import './index.scss';

// config.js enables components that have not yet been reviewed/released
// but which we want to use in their 'canary' form. Note that that has to
// be done in an import so that it happens before all component imports.

import './config'; // must come before @carbon/ibm-cloud-cognitive... imports
import { NotificationsPanel } from '@carbon/ibm-cloud-cognitive';
import { sampleData } from './sampleData';

const App = () => {
  const [open, setOpen] = useState(false);
  const [notificationsData, setNotificationsData] = useState(sampleData);

  const addNewNotification = () => {
    const newNotification = {
      id: uuidv4(),
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
    <div className="app">
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
                <Notification20 />
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
      <ThemeDropdown />
    </div>
  );
};

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
