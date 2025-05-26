/**
 * @license
 *
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import './index';
import styles from './story-styles.scss?lit';
import { useState } from '@storybook/preview-api';
import { prefix } from '../../globals/settings';
import '@carbon/web-components/es/components/button/index.js';
import '@carbon/web-components/es/components/heading/index.js';
import Settings16 from '@carbon/web-components/es/icons/settings/16';
import {
  dataToday as initialDataToday,
  dataPrevious as initialDataPrevious,
} from './NotificationsPanel_data';
const storyPrefix = 'notification-panel-stories__';
const blockClassNotificationPanel = `${prefix}--notifications-panel`;
const blockClassNotification = `${prefix}--notifications-panel__notification`;

const toggleButton = () => {
  document
    .querySelector(`${prefix}-notification-panel`)
    ?.toggleAttribute('open');
};

const onViewAllClick = () => {};

const onSettingsClick = () => {};

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
  render: function Render(args) {
    // Use Storybook's useState to make the data reactive
    const [dataToday, setDataToday] = useState([...initialDataToday]);
    const [dataPrevious, setDataPrevious] = useState([...initialDataPrevious]);

    const dismissAllNotification = () => {
      // Clear both arrays
      setDataToday([]);
      setDataPrevious([]);
    };
    return html`
      <style>
        ${styles}
      </style>
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
        @c4p-notification-dismiss-all=${dismissAllNotification}
      >
        ${dataToday.length > 0
          ? html`
              <div slot="today">
                ${dataToday.map((item) => {
                  return html`
                    <c4p-notification
                      @c4p-notification-click=${item.onNotificationClick}
                      @c4p-notification-dismiss=${() => {
                        console.log('Notification dismissed');
                      }}
                      type=${item.type}
                      unread=${item.unread}
                      .timestamp=${item.timestamp}
                    >
                      <cds-heading
                        class=${classMap({
                          [`${blockClassNotification}__notification-title`]:
                            true,
                          [`${blockClassNotification}__notification-title-unread`]:
                            item.unread,
                        })}
                        slot="title"
                      >
                        ${item.title}
                      </cds-heading>
                      <div slot="description">${item.description}</div>
                    </c4p-notification>
                  `;
                })}
              </div>
            `
          : ''}
        ${dataPrevious.length > 0
          ? html`
              <div slot="previous">
                ${dataPrevious.map((item) => {
                  return html`
                    <c4p-notification
                      @c4p-notification-click=${item.onNotificationClick}
                      @c4p-notification-dismiss=${() => {
                        console.log('Notification dismissed');
                      }}
                      type=${item.type}
                      unread=${item.unread}
                      .timestamp=${item.timestamp}
                    >
                      <cds-heading
                        class=${classMap({
                          [`${blockClassNotification}__notification-title`]:
                            true,
                          [`${blockClassNotification}__notification-title-unread`]:
                            item.unread,
                        })}
                        slot="title"
                      >
                        ${item.title}
                      </cds-heading>
                      <div slot="description">${item.description}</div>
                    </c4p-notification>
                  `;
                })}
              </div>
            `
          : ''}
        <div
          slot="footer"
          class="${blockClassNotificationPanel}__bottom-actions"
        >
          <cds-button
            kind="ghost"
            class="${blockClassNotificationPanel}__view-all-button"
            }
            @click=${onViewAllClick}
          >
            View all(${dataPrevious.length + dataToday.length})
          </cds-button>
          <cds-button
            kind="ghost"
            size="sm"
            class="${blockClassNotificationPanel}__settings-button"
            @click=${onSettingsClick}
          >
            ${Settings16()}
          </cds-button>
        </div>
      </c4p-notification-panel>
    `;
  },
};
const meta = {
  title: 'Experimental/NotificationPanel',
};

export default meta;
