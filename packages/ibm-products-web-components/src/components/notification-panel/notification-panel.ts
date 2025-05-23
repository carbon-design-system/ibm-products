/**
 * @license
 *
 * Copyright IBM Corp. 2023, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import {
  property,
  query,
  queryAssignedElements,
  state,
} from 'lit/decorators.js';
import { provide } from '@lit/context';
import { prefix, carbonPrefix } from '../../globals/settings';
import HostListener from '@carbon/web-components/es/globals/decorators/host-listener.js';
import HostListenerMixin from '@carbon/web-components/es/globals/mixins/host-listener.js';
import styles from './notification-panel.scss?lit';
import { selectorTabbable } from '@carbon/web-components/es/globals/settings.js';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';
import { classMap } from 'lit/directives/class-map.js';
import { dateTimeLocaleContext } from './date-time-context';
import '@carbon/web-components/es/components/button/index.js';
import '@carbon/web-components/es/components/heading/index.js';
import '@carbon/web-components/es/components/icon-button/index.js';

const blockClass = `${prefix}--notifications-panel`;
/**
 * NotificationPanel.
 *
 * @element c4p-notification-panel
 * @csspart dialog The dialog.
 * @fires c4p-notification-panel-beingclosed
 *   The custom event fired before this notification-panel is being closed upon a user gesture.
 *   Cancellation of this event stops the user-initiated action of closing this notification-panel.
 * @fires c4p-notification-panel-closed - The custom event fired after this notification-panel is closed upon a user gesture.
 * @fires c4p-notification-panel-navigate-back - custom event fired when clicking navigate back (available when step > 0)
 */
@customElement(`${prefix}-notification-panel`)
class CDSNotificationPanel extends HostListenerMixin(LitElement) {
  /**
   * Sets the Title for the Notification panel
   */
  @property({ type: String, attribute: 'title-text' })
  titleText;
  /**
   * Sets the Today text for the Notification panel
   */
  @property({ type: String, attribute: 'today-text' })
  todayText;
  /**
   * Sets the Previous section title for the Notification panel
   */
  @property({ type: String, attribute: 'previous-text' })
  previousText;
  /**
   * Determines whether the notifications panel should render or not
   */
  @property({ reflect: true, type: Boolean })
  open = false;
  /**
   * Sets the label text for the "Dismiss all" button in the Notification panel
   */
  @property({ type: String, attribute: 'dismiss-all-label' })
  dismissAllLabel;
  /**
   * Sets the label text for the "Do Not Disturb" toggle in the Notification panel
   */
  @property({ type: String, attribute: 'donot-disturb-label' })
  doNotDisturbLabel;

  /**
   * The language for each notification's time stamp.
   * Used with `dateTimeStyle`.
   */
  @property({ type: String, attribute: 'date-time-locale' })
  dateTimeLocale?: string;

  @provide({ context: dateTimeLocaleContext })
  private _providedLocale: string | undefined;

  willUpdate(changedProperties: any) {
    if (changedProperties.has('dateTimeLocale')) {
      this._providedLocale = this.dateTimeLocale;
    }
  }
  render() {
    const {
      titleText,
      todayText,
      previousText,
      dismissAllLabel,
      doNotDisturbLabel,
      open,
      _onDismissAllNotifications: onDismissAllNotifications,
    } = this;
    const classes = classMap({
      [`${blockClass}__container`]: true,
      [`${blockClass}__entrance`]: open,
      [`${blockClass}__exit`]: !open,
    });
    return html`
      <div role="dialog" tabindex="0" class=${classes}>
        <div>
          <div class="${blockClass}__header-container">
            <div class="${blockClass}__header-flex">
              <cds-heading class="${blockClass}__header">
                ${titleText}
              </cds-heading>
              <cds-button
                size="sm"
                kind="ghost"
                class="${blockClass}__dismiss-button"
                @click=${onDismissAllNotifications}
              >
                ${dismissAllLabel}
              </cds-button>
            </div>
            <cds-toggle
              size="sm"
              class="${blockClass}__do-not-disturb-toggle"
              id="${blockClass}__do-not-disturb-toggle-component"
              label-a=${doNotDisturbLabel}
              label-b=${doNotDisturbLabel}
              aria-label=${doNotDisturbLabel}
            ></cds-toggle>
          </div>
          <div class="${blockClass}__main-section">
            <cds-heading class="${blockClass}__time-section-label">
              ${todayText}
            </cds-heading>
            <slot name="today"></slot>

            <cds-heading class="${blockClass}__time-section-label">
              ${previousText}
            </cds-heading>
            <slot name="previous"></slot>
          </div>
          <div className="${blockClass}__bottom-actions">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    `;
  }

  private _onDismissAllNotifications() {}
  @HostListener('document:keydown')
  // @ts-ignore: The decorator refers to this method but TS thinks this method is not referred to
  private _handleKeydown = ({ key, target }: KeyboardEvent) => {};

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
    return `${prefix}-notification-panel-beingclosed`;
  }

  /**
   * The name of the custom event fired after this notification-panel is closed upon a user gesture.
   */
  static get eventClose() {
    return `${prefix}-notification-panel-closed`;
  }
  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default CDSNotificationPanel;
