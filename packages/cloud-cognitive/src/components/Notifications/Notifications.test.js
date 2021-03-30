/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import React from 'react';
import '../../utils/enable-all'; // must come before component is imported (directly or indirectly)
import { pkg } from '../../settings';
import uuidv4 from '../../global/js/utils/uuidv4';
import { Notifications } from '.';

const blockClass = `${pkg.prefix}--notifications-panel`;
const dataTestId = uuidv4();

describe('Notifications', () => {
  it('renders the notification panel', () => {
    render(<Notifications data={[]} open setOpen={() => {}} />);
    expect(screen.queryAllByText(/Notifications/i)).toBeTruthy();
  });

  it('should toggle do not disturb switch', () => {
    const { fn } = jest;
    const onToggle = fn();
    render(
      <Notifications
        data={[]}
        open
        onDoNotDisturbChange={onToggle}
        setOpen={() => {}}
      />
    );

    userEvent.click(screen.getByRole('checkbox', /Do not disturb/i));
    expect(onToggle).toBeCalled();
  });

  it('should render notifications empty state', () => {
    render(<Notifications data={[]} open setOpen={() => {}} />);
    expect(screen.getByText(/you do not have any notifications/i));
  });

  it('should render notification with error state svg', () => {
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
        setOpen={() => {}}
      />
    );
    const renderedEmptyStateSvg = container.querySelectorAll(
      `svg.${blockClass}__notification-status-icon-error`
    );
    expect(renderedEmptyStateSvg[0]).toBeTruthy();
  });

  it('should render notification with warning state svg', () => {
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
        setOpen={() => {}}
      />
    );
    const renderedEmptyStateSvg = container.querySelectorAll(
      `svg.${blockClass}__notification-status-icon-warning`
    );
    expect(renderedEmptyStateSvg[0]).toBeTruthy();
  });

  it('should render notification with success state svg', () => {
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
        setOpen={() => {}}
      />
    );
    const renderedEmptyStateSvg = container.querySelectorAll(
      `svg.${blockClass}__notification-status-icon-success`
    );
    expect(renderedEmptyStateSvg[0]).toBeTruthy();
  });

  it('should render notification with informational state svg', () => {
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
        setOpen={() => {}}
      />
    );
    const renderedEmptyStateSvg = container.querySelectorAll(
      `svg.${blockClass}__notification-status-icon-informational`
    );
    expect(renderedEmptyStateSvg[0]).toBeTruthy();
  });

  it('should render link in notification', () => {
    render(
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
            onNotificationClick: () => {},
          },
        ]}
        open
        setOpen={() => {}}
      />
    );
    const logLink = screen.getByText(/view logs/i);
    userEvent.click(logLink);
    expect(logLink);
  });

  it('should render Read more button', () => {
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
        setOpen={() => {}}
      />
    );
    expect(getByText(/read more/i)).toBeTruthy();
  });

  it('adds additional properties to the containing node', () => {
    const { container } = render(
      <Notifications
        open
        setOpen={() => {}}
        data={[]}
        data-testid={dataTestId}
      />
    );
    expect(
      container.querySelector(
        `.${blockClass}__container[data-testid="${dataTestId}"]`
      )
    ).toBeInTheDocument();
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    render(<Notifications ref={ref} open setOpen={() => {}} data={[]} />);
    expect(
      ref.current.classList.contains(`${blockClass}__container`)
    ).toBeTruthy();
  });
});
