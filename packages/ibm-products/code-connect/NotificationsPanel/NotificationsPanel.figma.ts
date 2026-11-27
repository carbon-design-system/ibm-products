// url=https://www.figma.com/design/0F9dKH2abAd7gSfvnacfWf?node-id=10574%3A240266
// source=https://github.com/carbon-design-system/ibm-products/blob/main/packages/ibm-products/src/components/NotificationsPanel/NotificationsPanel.tsx
// component=NotificationsPanel

/**
 * Copyright IBM Corp. 2025, 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import figma from 'figma';

const instance = figma.selectedInstance;

function textIn(instanceName: string, textName: string) {
  const parent = instance.findInstance(instanceName);
  if (parent.type === 'ERROR') {
    return undefined;
  }
  const text = parent.findText(textName);
  return text.type !== 'ERROR' ? text.textContent : undefined;
}

function createTemplate() {
  const emptyState = instance.getBoolean('Empty state');

  const title = textIn('Header', '"Notifications"');
  const doNotDisturbLabel = textIn('Toggle', 'Value');

  let emptyStateLabel: string | undefined;
  if (emptyState) {
    const empty = instance.findInstance(
      'Empty state | (v11) Carbon for IBM Products'
    );
    emptyStateLabel =
      empty.type !== 'ERROR' ? empty.getString('Title text') : undefined;
  }

  const data = emptyState
    ? figma.code`[]`
    : figma.code`[
    {
      id: '1',
      type: 'success',
      title: 'Title.',
      description: 'Message',
      timestamp: new Date(new Date().getTime() - 30 * 1000),
      unread: true,
      onNotificationClick: () => console.log('Clicked on notification'),
    },
    {
      id: '2',
      type: 'error',
      title: 'Title',
      description: 'Message',
      timestamp: new Date(new Date().getTime() - 11 * 1000),
      unread: false,
      onNotificationClick: () => console.log('Clicked on notification'),
    },
    {
      id: '3',
      type: 'warning',
      title: 'Title',
      description: 'Message',
      timestamp: new Date(new Date().getTime() - 120 * 1000),
      unread: false,
      onNotificationClick: () => console.log('Clicked on notification'),
    },
  ]`;

  const localeProps = emptyState
    ? ''
    : ' dateTimeLocale="en-US" dateTimeStyle="short"';

  return {
    id: 'NotificationsPanel',
    imports: ["import { NotificationsPanel } from '@carbon/ibm-products';"],
    example: figma.code`<NotificationsPanel
  open={true}
  data={${data}}
  illustrationTheme="light"${localeProps}${figma.helpers.react.renderProp('title', title)}${figma.helpers.react.renderProp('doNotDisturbLabel', doNotDisturbLabel)}${figma.helpers.react.renderProp('emptyStateLabel', emptyStateLabel)}
/>`,
    metadata: { nestable: false },
  };
}

export default createTemplate();
