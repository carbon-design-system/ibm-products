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
        <c4p-notification
          slot="today"
          type="error"
          notification-title="Cluster unreachable"
          unread
        >
          <div slot="description">
            <p
              class="c4p--notifications-panel__notification-description c4p--notifications-panel__notification-short-description"
            >
              Not able to establish connection with provided cluster. Please
              check your logs and memory allocation to resolve this issue
              further.
            </p>
            <button
              class="c4p--notifications-panel__notification-read-more-button cds--btn cds--btn--sm cds--layout--size-sm cds--btn--ghost"
              type="button"
            >
              Read more
              <svg
                focusable="false"
                preserveAspectRatio="xMidYMid meet"
                fill="currentColor"
                aria-label="Read more"
                aria-hidden="true"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                role="img"
                class="cds--btn__icon"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path>
              </svg>
            </button>
          </div>
        </c4p-notification>
        <c4p-notification
          slot="previous"
          type="error"
          notification-title="Cluster unreachable"
          unread
        >
          <div slot="description">
            <p
              class="c4p--notifications-panel__notification-description c4p--notifications-panel__notification-short-description"
            >
              Not able to establish connection with provided cluster. Please
              check your logs and memory allocation to resolve this issue
              further.
            </p>
            <button
              class="c4p--notifications-panel__notification-read-more-button cds--btn cds--btn--sm cds--layout--size-sm cds--btn--ghost"
              type="button"
            >
              Read more
              <svg
                focusable="false"
                preserveAspectRatio="xMidYMid meet"
                fill="currentColor"
                aria-label="Read more"
                aria-hidden="true"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                role="img"
                class="cds--btn__icon"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path>
              </svg>
            </button>
          </div>
        </c4p-notification>
      </c4p-notification-panel>
    `;
  },
};
const meta = {
  title: 'Experimental/NotificationPanel',
};

export default meta;
