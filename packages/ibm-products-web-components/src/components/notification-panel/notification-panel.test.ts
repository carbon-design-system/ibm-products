/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { describe, expect, it } from 'vitest';
import { html, fixture, oneEvent, elementUpdated } from '@open-wc/testing';
import './index';
import CDSNotificationPanel from './notification-panel';
import CDSNotification from './notification';

const defaultProps = {
  class: 'custom-class',
  titleText: 'Notifications',
  dismissAllLabel: 'Dismiss all',
  doNotDisturbLabel: 'Do not disturb',
  todayText: 'Today',
  previousText: 'previous',
  open: true,
};

const template = (props: any = defaultProps) => {
  const timeStamp = new Date(new Date().getTime() - 30 * 1000);
  return html`
    <c4p-notification-panel
      ?open=${props.open}
      title-text=${props.titleText}
      dismiss-all-label=${props.dismissAllLabel}
      donot-disturb-label=${props.doNotDisturbLabel}
      today-text=${props.todayText}
      previous-text=${props.previousText}
    >
      <c4p-notification
        slot="today"
        @c4p-notification-dismiss=${() => {
          console.log('dismiss notification');
        }}
        type="error"
        ?unread="true"
        .timestamp=${timeStamp}
      >
        <h4 class="c4p--notifications-panel__notification" slot="title">
          LogDNA cannot be reached.
        </h4>
        <div slot="description">Unable to communicate with LogDNA.</div>
      </c4p-notification>
      <c4p-notification
        slot="previous"
        @c4p-notification-dismiss=${() => {
          console.log('dismiss notification');
        }}
        type="error"
        ?unread="true"
        .timestamp=${timeStamp}
      >
        <h4 class="c4p--notifications-panel__notification" slot="title">
          LogDNA cannot be reached.
        </h4>
        <div slot="description">Unable to communicate with LogDNA.</div>
      </c4p-notification>
      <c4p-notification
        slot="previous"
        @c4p-notification-dismiss=${() => {
          console.log('dismiss notification');
        }}
        type="error"
        ?unread="true"
        .timestamp=${timeStamp}
      >
        <h4 class="c4p--notifications-panel__notification" slot="title">
          LogDNA cannot be reached.
        </h4>
        <div slot="description">Unable to communicate with LogDNA.</div>
      </c4p-notification>
    </c4p-notification-panel>
  `;
};

describe('c4p-notification-panel', () => {
  it('should render the notification panel', async () => {
    const panel = (await fixture(template())) as CDSNotificationPanel;
    expect(panel?.open).toBeTruthy();
    expect(panel).toBeDefined();
  });
  it('should have focus on Dismiss all button after render', async () => {
    const panel = (await fixture(template())) as CDSNotificationPanel;
    await new Promise((resolve) => requestAnimationFrame(resolve));
    const dismissButton = panel.shadowRoot?.querySelector(
      '.c4p--notifications-panel__dismiss-button'
    );
    expect(panel.shadowRoot?.activeElement).toBe(dismissButton);
  });
  it('should emit "c4p-notification-click-outside" when pressing Escape', async () => {
    const panel = (await fixture(template())) as CDSNotificationPanel;
    await elementUpdated(panel);
    const eventPromise = oneEvent(panel, 'c4p-notification-click-outside');
    panel.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Escape', bubbles: true })
    );
    const event = await eventPromise;
    expect(event).toBeDefined();
  });
  it('should have titleText rendered inside the panel header', async () => {
    const panel = (await fixture(template())) as CDSNotificationPanel;
    const panelHeading = panel.shadowRoot?.querySelector(
      '.c4p--notifications-panel__header'
    );
    expect(panelHeading?.textContent?.trim()).toBe(panel.titleText);
  });
  it('should have "dismissAllLabel" prop passed be the label for the dismiss all button', async () => {
    const panel = (await fixture(template())) as CDSNotificationPanel;
    const dismissButton = panel.shadowRoot?.querySelector(
      '.c4p--notifications-panel__dismiss-button'
    );
    expect(dismissButton?.textContent?.trim()).toBe(panel.dismissAllLabel);
  });
  it('should have "doNotDisturbLabel" prop passed be the label for the Do not disturb toggle', async () => {
    const panel = (await fixture(template())) as CDSNotificationPanel;
    const doNotDisturbToggle = panel.shadowRoot?.querySelector(
      '.c4p--notifications-panel__do-not-disturb-toggle'
    );
    const toggleText =
      doNotDisturbToggle?.shadowRoot?.querySelector('.cds--toggle__text');
    expect(toggleText?.textContent?.trim()).toBe(panel.doNotDisturbLabel);
  });
  it('should have "todayText" prop passed be title for Today Section', async () => {
    const panel = (await fixture(template())) as CDSNotificationPanel;
    const todayTitle = panel.shadowRoot?.querySelector(
      '.c4p--notifications-panel__time-section-label--today'
    );
    expect(todayTitle?.textContent?.trim()).toBe(panel.todayText);
  });
  it('should have "previousText" prop passed be title for Previous Section', async () => {
    const panel = (await fixture(template())) as CDSNotificationPanel;
    const previousTitle = panel.shadowRoot?.querySelector(
      '.c4p--notifications-panel__time-section-label--previous'
    );
    expect(previousTitle?.textContent?.trim()).toBe(panel.previousText);
  });
  it('should emit "c4p-notification-click-outside" when clicking outside the panel', async () => {
    const element = await fixture(html`
      <div>
        ${template()}
        <div id="outside"></div>
      </div>
    `);
    const panel = element.querySelector('c4p-notification-panel')!;
    const eventPromise = oneEvent(panel, 'c4p-notification-click-outside');
    const outsideDiv = element.querySelector('#outside') as HTMLElement;
    outsideDiv.click();
    const event = await eventPromise;
    expect(event).toBeDefined();
  });
  it('should emit "c4p-notification-dismiss-all" when clicked on dismiss all button', async () => {
    const panel = (await fixture(template())) as CDSNotificationPanel;
    const eventPromise = oneEvent(panel, 'c4p-notification-dismiss-all');
    const dismissButton = panel.shadowRoot?.querySelector(
      '.c4p--notifications-panel__dismiss-button'
    ) as HTMLElement;
    dismissButton?.click();
    const event = await eventPromise;
    expect(event).toBeDefined();
  });
  it('should emit "c4p-notification-donot-disturb-change" when clicked on Do not disturb toggle', async () => {
    const panel = (await fixture(template())) as CDSNotificationPanel;
    const eventPromise = oneEvent(
      panel,
      'c4p-notification-donot-disturb-change'
    );
    const doNotDisturbToggle = panel.shadowRoot?.querySelector(
      '.c4p--notifications-panel__do-not-disturb-toggle'
    ) as HTMLElement;
    doNotDisturbToggle?.dispatchEvent(
      new CustomEvent('cds-toggle-changed', {
        bubbles: true,
        composed: true,
        detail: {},
      })
    );
    const event = await eventPromise;
    expect(event).toBeDefined();
  });

  it('should render c4p-notification inside the "today" slot', async () => {
    const panel = (await fixture(template())) as HTMLElement;
    await elementUpdated(panel);
    const todaySlot = panel.shadowRoot?.querySelector(
      'slot[name="today"]'
    ) as HTMLSlotElement;
    expect(todaySlot).toBeDefined();
    const assignedElements = todaySlot!.assignedElements({ flatten: true });
    const notification = assignedElements.find(
      (el) => el.tagName.toLowerCase() === 'c4p-notification'
    );
    expect(notification).toBeDefined();
  });
  it('should render c4p-notification inside the "previous" slot', async () => {
    const panel = (await fixture(template())) as HTMLElement;
    await elementUpdated(panel);
    const previousSlot = panel.shadowRoot?.querySelector(
      'slot[name="previous"]'
    ) as HTMLSlotElement;
    expect(previousSlot).toBeDefined();
    const assignedElements = previousSlot!.assignedElements({ flatten: true });
    const notifications = assignedElements.every(
      (el) => el.tagName.toLowerCase() === 'c4p-notification'
    );
    expect(notifications).toBe(true);
    expect(assignedElements.length).toBeGreaterThan(0);
  });
});
