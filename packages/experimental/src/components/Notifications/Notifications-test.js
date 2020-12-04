/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { fireEvent, render, screen } from '@testing-library/react';

import React from 'react';
import Notifications from './Notifications';
import { expPrefix as prefix } from '../../global/js/settings';

describe('Notifications', () => {
  test('renders the notification panel', () => {
    render(<Notifications data={[]} open />);
    expect(screen.queryAllByText(/Notifications/i)).toBeTruthy();
  });

  test('should toggle do not disturb switch', () => {
    const { click } = fireEvent;
    const { fn } = jest;
    const onToggle = fn();
    const { container } = render(
      <Notifications data={[]} open onDoNotDisturbChange={onToggle} />
    );

    click(
      container.querySelector(
        `#${prefix}-notifications-do-not-disturb-toggle-component`
      )
    );
    expect(onToggle).toBeCalled();
  });

  test('should render empty state illustration', () => {
    const { container } = render(<Notifications data={[]} open />);
    const renderedEmptyStateSvg = container.querySelector('img');
    expect(renderedEmptyStateSvg).toBeTruthy();
  });

  test('should render notification with error state svg', () => {
    const { container } = render(
      <Notifications
        data={[
          {
            id: 0,
            type: 'error',
            title: 'LogRhythm connection failure',
            timestamp: new Date(),
          },
        ]}
        open
      />
    );
    const renderedEmptyStateSvg = container.querySelectorAll(
      `svg.${prefix}-notifications-panel-notification-status-icon-error`
    );
    expect(renderedEmptyStateSvg[0]).toBeTruthy();
  });

  test('should render notification with warning state svg', () => {
    const { container } = render(
      <Notifications
        data={[
          {
            id: 0,
            type: 'warning',
            title: 'LogRhythm connection failure',
            timestamp: new Date(),
          },
        ]}
        open
      />
    );
    const renderedEmptyStateSvg = container.querySelectorAll(
      `svg.${prefix}-notifications-panel-notification-status-icon-warning`
    );
    expect(renderedEmptyStateSvg[0]).toBeTruthy();
  });

  test('should render notification with success state svg', () => {
    const { container } = render(
      <Notifications
        data={[
          {
            id: 0,
            type: 'success',
            title: 'LogRhythm connection failure',
            timestamp: new Date(),
          },
        ]}
        open
      />
    );
    const renderedEmptyStateSvg = container.querySelectorAll(
      `svg.${prefix}-notifications-panel-notification-status-icon-success`
    );
    expect(renderedEmptyStateSvg[0]).toBeTruthy();
  });

  test('should render notification with informational state svg', () => {
    const { container } = render(
      <Notifications
        data={[
          {
            id: 0,
            type: 'informational',
            title: 'LogRhythm connection failure',
            timestamp: new Date(),
          },
        ]}
        open
      />
    );
    const renderedEmptyStateSvg = container.querySelectorAll(
      `svg.${prefix}-notifications-panel-notification-status-icon-informational`
    );
    expect(renderedEmptyStateSvg[0]).toBeTruthy();
  });

  test('should render link in notification', () => {
    const { getByText, container } = render(
      <Notifications
        data={[
          {
            id: 0,
            type: 'informational',
            title: 'LogRhythm connection failure',
            timestamp: new Date(),
            link: {
              text: 'View logs',
              url: 'https://www.carbondesignsystem.com/',
            },
          },
        ]}
        open
      />
    );
    const { click } = fireEvent;
    const link = container.querySelectorAll('a')[0].href;
    click(getByText('View logs'));
    expect(link.length && link).toEqual('https://www.carbondesignsystem.com/');
  });

  test('should render Read more button', () => {
    const { getByText } = render(
      <Notifications
        data={[
          {
            id: 0,
            type: 'informational',
            title: 'LogRhythm connection failure',
            description:
              'Not able to establish connection with provided cluster. Please check your logs and memory allocation to resolve this issue further.',
            timestamp: new Date(),
          },
        ]}
        open
      />
    );
    expect(getByText(/Read more/i)).toBeTruthy();
  });
});
