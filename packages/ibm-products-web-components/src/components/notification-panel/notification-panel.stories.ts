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
import { action } from '@storybook/addon-actions';
import './index';
import styles from './story-styles.scss?lit';
import { useState } from '@storybook/preview-api';
import { prefix, carbonPrefix } from '../../globals/settings';
import '@carbon/web-components/es/components/button/index.js';
import '@carbon/web-components/es/components/ui-shell/index.js';
import '@carbon/web-components/es/components/heading/index.js';
import Settings16 from '@carbon/web-components/es/icons/settings/16';
import User20 from '@carbon/web-components/es/icons/user/20.js';
import Notification20 from '@carbon/web-components/es/icons/notification/20.js';
import SwitcherIcon20 from '@carbon/web-components/es/icons/switcher/20.js';
import {
  dataToday as initialDataToday,
  dataPrevious as initialDataPrevious,
} from './NotificationsPanel_data';
const storyPrefix = 'notification-panel-stories__';
const blockClassNotificationPanel = `${prefix}--notifications-panel`;
const blockClassNotification = `${prefix}--notifications-panel__notification`;
const storyBlockClass = `${prefix}--notifications-panel__story`;

export const defaultTemplate = {
  args: {
    titleText: 'Notifications',
    open: false,
  },
  argTypes: {
    titleText: {
      control: 'text',
      description: 'Title for the Notification panel',
    },
  },
  render: function Render(args) {
    const [dataToday, setDataToday] = useState([...initialDataToday]);
    const [dataPrevious, setDataPrevious] = useState([...initialDataPrevious]);
    const [openPanel, setOpenPanel] = useState(args.open);
    const [expandPanel, setExpandPanel] = useState(false);
    const triggerButton = document.querySelector('#trigger-button');
    const toggleButton = () => {
      setOpenPanel(!openPanel);
      setExpandPanel(false);
      console.log(expandPanel, 'expandPanel');
    };
    const dismissAllNotification = () => {
      setDataToday([]);
      setDataPrevious([]);
    };
    const notificationSingleDismiss = (
      notificationId: string,
      dataType: 'today' | 'previous'
    ) => {
      if (dataType === 'today') {
        const filteredData = dataToday.filter(
          (obj) => obj.id !== notificationId
        );
        setDataToday([...filteredData]);
      } else {
        const filteredData = dataPrevious.filter(
          (obj) => obj.id !== notificationId
        );
        setDataPrevious([...filteredData]);
      }
    };
    const clickOutside = (event) => {
      if (
        event.detail.triggeredBy !== triggerButton &&
        !triggerButton?.contains(event.detail.triggeredBy) &&
        openPanel
      ) {
        setOpenPanel(false);
      }
    };
    return html`
      <style>
        ${styles}
      </style>
      <cds-header
        aria-label="IBM Cloud Pak"
        className="${storyBlockClass}--header"
      >
        <cds-header-name
          href="/"
          prefix="IBM"
          @click=${(e) => {
            e.preventDefault();
          }}
        >
          Cloud Pak
        </cds-header-name>
        <div class="${carbonPrefix}--header__global">
          <cds-header-global-action aria-label="User" tooltip-text="User">
            ${User20({ slot: 'icon' })}
          </cds-header-global-action>
          <cds-header-global-action
            aria-label="Notification"
            tooltip-text="Notification"
            id="trigger-button"
            @click="${toggleButton}"
          >
            ${Notification20({ slot: 'icon' })}
          </cds-header-global-action>
          <cds-header-global-action
            aria-label="App Switcher"
            tooltip-text="App Switcher"
            tooltip-alignment="right"
            @click=${() => {
              setExpandPanel((prev) => !prev);
            }}
          >
            ${SwitcherIcon20({ slot: 'icon' })}
          </cds-header-global-action>
          <cds-header-panel
            id="switcher-panel"
            .expanded="${expandPanel}"
            aria-label="Header Panel"
          >
            <div className="${storyBlockClass}__header-panel">
              App switcher
              <br />
              example panel
            </div>
          </cds-header-panel>
        </div>
      </cds-header>
      <c4p-notification-panel
        .triggerButtonRef=${triggerButton}
        .open="${openPanel}"
        title-text="Notifications"
        today-text="Today"
        previous-text="Previous"
        dismiss-all-label="Dismiss All"
        donot-disturb-label="Do not disturb"
        @c4p-notification-dismiss-all=${dismissAllNotification}
        @c4p-notification-donot-disturb-change=${() => {
          console.log('Do not disturb');
        }}
        @c4p-notification-click-outside=${clickOutside}
      >
        ${dataToday.length > 0
          ? html`
              <div slot="today">
                ${dataToday.map((item) => {
                  return html`
                    <c4p-notification
                      .open=${args.open}
                      @c4p-notification-click=${item.onNotificationClick}
                      @c4p-notification-dismiss=${() => {
                        notificationSingleDismiss(item.id, 'today');
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
                        notificationSingleDismiss(item.id, 'previous');
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
            @click=${action(`Clicked View All`)}
          >
            View all(${dataPrevious.length + dataToday.length})
          </cds-button>
          <cds-button
            kind="ghost"
            size="sm"
            class="${blockClassNotificationPanel}__settings-button"
            @click=${action(`Clicked Settings`)}
          >
            ${Settings16()}
          </cds-button>
        </div>
      </c4p-notification-panel>
      <div class="${storyPrefix}story-container">
        <div class="${storyPrefix}story-header"></div>
        <div id="page-content-selector" class="${storyPrefix}story-content">
          <cds-button>Toggle Notification Panel</cds-button>
        </div>
      </div>
    `;
  },
};
const meta = {
  title: 'Experimental/NotificationPanel',
};

export default meta;
