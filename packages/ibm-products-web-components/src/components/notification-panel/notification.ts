/**
 * @license
 *
 * Copyright IBM Corp. 2023, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { prefix, carbonPrefix } from '../../globals/settings';
import HostListener from '@carbon/web-components/es/globals/decorators/host-listener.js';
import HostListenerMixin from '@carbon/web-components/es/globals/mixins/host-listener.js';
import { selectorTabbable } from '@carbon/web-components/es/globals/settings.js';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';
import { classMap } from 'lit/directives/class-map.js';
import '@carbon/web-components/es/components/heading/index.js';
import '@carbon/web-components/es/components/icon-button/index.js';
import Close16 from '@carbon/web-components/es/icons/close/16';
import ErrorFilled16 from '@carbon/web-components/es/icons/error--filled/16';
import CheckmarkFilled16 from '@carbon/web-components/es/icons/checkmark--filled/16';
import WarningAltFilled16 from '@carbon/web-components/es/icons/warning--alt--filled/16';
import InformationSquareFilled16 from '@carbon/web-components/es/icons/information--square--filled/16';

const blockClass = `${prefix}--notifications-panel__notification`;
/**
 * Notification.
 *
 * @element c4p-notification
 * @csspart dialog The dialog.
 * @fires c4p-notification-beingclosed
 *   The custom event fired before this notification-panel is being closed upon a user gesture.
 *   Cancellation of this event stops the user-initiated action of closing this notification-panel.
 * @fires c4p-notification-closed - The custom event fired after this notification-panel is closed upon a user gesture.
 */
@customElement(`${prefix}-notification`)
class CDSNotification extends HostListenerMixin(LitElement) {
  /**
   * Sets the Title for the Notification panel
   */
  @property({ reflect: true, attribute: 'notification-id' })
  notificationId?: string | number;
  /**
   * Sets the Today text for the Notification panel
   */
  @property({ reflect: true })
  type?: 'error' | 'warning' | 'success' | 'informational';
  /**
   * Sets the Previous section title for the Notification panel
   */
  @property()
  timestamp?: Date;
  /**
   * Determines whether the notifications panel should render or not
   */
  @property({ type: String, attribute: 'notification-title' })
  notificationTitle;
  /**
   * Determines whether the notifications panel should render or not
   */
  @property({ reflect: true, type: Boolean })
  unread;
  /**
   * Determines whether the notifications panel should render or not
   */
  @property()
  onNotificationClick?: () => void;
  /**
   * Determines whether the notifications panel should render or not
   */
  @property()
  onDismissSingleNotification?: () => void;

  render() {
    const {
      notificationId,
      type,
      timestamp,
      notificationTitle,
      unread,
      onNotificationClick,
      _handleKeyDown: handleKeyDown,
      _dismissSingleNotification: dismissSingleNotification,
      _fetchIcon: fetchIcon,
    } = this;

    const notificationHeaderClassName = classMap({
      [`${blockClass}__notification-title`]: true,
      [`${blockClass}__notification-title-unread`]: unread,
    });
    const icon = fetchIcon(type);
    return html`
      <div
        class="${blockClass}__notification"
        role="button"
        tabindex="0"
        @click=${onNotificationClick}
        @keydown=${handleKeyDown}
      >
        ${icon}
        <div class="${blockClass}__notification-content">
          <p class="${blockClass}__notification-time-label">x time ago</p>
          <cds-heading class="${notificationHeaderClassName}">
            ${notificationTitle}
          </cds-heading>
          <slot name="description">
        </div>
        <cds-icon-button
          align="left"
          kind="ghost"
          size="sm"
          class="${blockClass}__dismiss-single-button"
          @click=${(event) => dismissSingleNotification(event)}
        >
          ${Close16({})}
        </cds-icon-button>
      </div>
    `;
  }
  private _handleKeyDown(event: KeyboardEvent) {
    if (
      event.target instanceof HTMLElement &&
      event.target.classList.contains(`${blockClass}__dismiss-single-button`)
    ) {
      return;
    }
    if (event.key === 'Enter' && this.onNotificationClick) {
      this.onNotificationClick();
    }
  }

  private _dismissSingleNotification(event) {
    event.preventDefault();
    event.stopPropagation();
    this.onDismissSingleNotification && this.onDismissSingleNotification();
  }

  private _fetchIcon(type) {
    let icon;
    switch (type) {
      case 'error':
        icon = ErrorFilled16({
          class: `${blockClass}__notification-status-icon ${blockClass}__notification-status-icon-error`,
        });
        break;
      case 'success':
        icon = CheckmarkFilled16({
          class: `${blockClass}__notification-status-icon ${blockClass}__notification-status-icon-success`,
        });
        break;
      case 'warning':
        icon = WarningAltFilled16({
          class: `${blockClass}__notification-status-icon ${blockClass}__notification-status-icon-warning`,
        });
        break;
      case 'informational':
        icon = InformationSquareFilled16({
          class: `${blockClass}__notification-status-icon ${blockClass}__notification-status-icon-informational`,
        });
        break;
      default:
        icon = null;
    }
    return icon;
  }

  /**
   * A selector selecting tabbable nodes.
   */
  static get selectorTabbable() {
    return selectorTabbable;
  }

  /**
   * The name of the custom event fired before this notification-panel is being closed upon a user gesture.
   * Cancellation of this event stops the user-initiated action of closing this notification-panel.
   */
  static get eventBeforeClose() {
    return `${prefix}-notification-beingclosed`;
  }

  /**
   * The name of the custom event fired after this notification-panel is closed upon a user gesture.
   */
  static get eventClose() {
    return `${prefix}-notification-closed`;
  }
}

export default CDSNotification;
