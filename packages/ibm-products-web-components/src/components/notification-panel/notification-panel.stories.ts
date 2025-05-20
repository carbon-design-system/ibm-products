/**
 * @license
 *
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import './index';
import { prefix } from '../../globals/settings';
import '@carbon/web-components/es/components/button/index.js';
import { dataToday, dataPrevious } from './NotificationsPanel_data';
const storyPrefix = 'notification-panel-stories__';

const toggleButton = () => {
  document
    .querySelector(`${prefix}-notification-panel`)
    ?.toggleAttribute('open');
};

export const defaultTemplate = {
  args: {
    titleText: 'Notifications',
  },
  argTypes: {
    titleText: {
      control: 'text',
      description: 'Title for the Notification panel',
    },
  },
  render: (args) => {
    return html`
      <div class="${storyPrefix}story-container">
        <div class="${storyPrefix}story-header"></div>
        <div id="page-content-selector" class="${storyPrefix}story-content">
          <cds-button @click="${toggleButton}"
            >Toggle Notification Panel</cds-button
          >
        </div>
      </div>
      <c4p-notification-panel
        title-text="Notifications"
        today-text="Today"
        previous-text="Previous"
        dismiss-all-label="Dismiss All"
        donot-disturb-label="Do not disturb"
      >
        <div slot="today">
          ${dataToday.map((item) => {
            return html`
              <c4p-notification
                type=${item.type}
                notification-title=${item.title}
                unread=${item.unread}
                .onNotificationClick=${item.onNotificationClick}
              >
                <div slot="description">${item.description}</div>
              </c4p-notification>
            `;
          })}
        </div>

        <div slot="previous">
          ${dataPrevious.map((item) => {
            return html`
              <c4p-notification
                type=${item.type}
                notification-title=${item.title}
                unread=${item.unread}
                .onNotificationClick=${item.onNotificationClick}
              >
                <div slot="description">${item.description}</div>
              </c4p-notification>
            `;
          })}
        </div>
      </c4p-notification-panel>
    `;
  },
};
const meta = {
  title: 'Experimental/NotificationPanel',
};

export default meta;
