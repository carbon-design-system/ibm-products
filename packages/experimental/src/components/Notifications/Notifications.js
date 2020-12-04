/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { expPrefix as prefix } from '../../global/js/settings';
import { Button, Link, ToggleSmall } from 'carbon-components-react';
import {
  ErrorFilled16,
  WarningAltFilled16,
  CheckmarkFilled16,
  InformationSquareFilled16,
  ChevronDown16,
} from '@carbon/icons-react';
import { timeAgo } from './utils';
import { EmptyState } from '../EmptyState';
import useClickOutside from './useClickOutside';

const Notifications = ({
  data,
  open,
  setOpen,
  onDoNotDisturbChange,
  title,
  dismissAllLabel,
  doNotDisturbLabel,
  todayLabel,
  yesterdayLabel,
  previousLabel,
}) => {
  const notificationPanelRef = useRef();
  const [shouldRender, setRender] = useState(open);
  const [allNotifications, setAllNotifications] = useState([]);

  useClickOutside(notificationPanelRef, () => {
    setOpen(!open);
  });

  useEffect(() => {
    // Set the notifications passed to the state within this component
    setAllNotifications(data);
  }, [data]);

  useEffect(() => {
    // initialize the notification panel to open
    if (open) setRender(true);
  }, [open]);

  const onAnimationEnd = () => {
    // initialize the notification panel to close
    if (!open) setRender(false);
  };

  // Notifications should be grouped by "Today", "Yesterday", and "Previous", the variables
  // below filter the notifications based on those conditions and then render them in those groups
  let yesterdayDate = new Date();
  yesterdayDate = new Date(yesterdayDate.setDate(yesterdayDate.getDate() - 1));
  let dayBeforeYesterdayDate = new Date();
  dayBeforeYesterdayDate = new Date(
    dayBeforeYesterdayDate.setDate(dayBeforeYesterdayDate.getDate() - 2)
  );
  const withinLastDayNotifications =
    allNotifications &&
    allNotifications.length &&
    allNotifications.filter(
      (item) => item.timestamp.getTime() >= yesterdayDate.getTime()
    );
  const previousDayNotifications =
    allNotifications &&
    allNotifications.length &&
    allNotifications.filter(
      (item) =>
        item.timestamp.getTime() < yesterdayDate.getTime() &&
        item.timestamp.getTime() >= dayBeforeYesterdayDate.getTime()
    );
  const previousNotifications =
    allNotifications &&
    allNotifications.length &&
    allNotifications.filter(
      (item) => item.timestamp.getTime() < dayBeforeYesterdayDate.getTime()
    );

  const renderDescription = (id) => {
    const notification =
      allNotifications &&
      allNotifications.length &&
      allNotifications.filter((item) => item.id === id)[0];
    const trimLength = 88;
    const description = notification.description;
    return (
      <div>
        <p
          className={[
            `${prefix}-notifications-panel-notification-description`,
            `${
              notification.showAll
                ? `${prefix}-notifications-panel-notification-long-description`
                : `${prefix}-notifications-panel-notification-short-description`
            }`,
          ].join(' ')}>
          {description}
        </p>
        {description.length > trimLength && (
          <Button
            kind="ghost"
            size="small"
            renderIcon={ChevronDown16}
            onClick={() => {
              const newData = allNotifications.map((item) => {
                if (item.id === notification.id)
                  return Object.assign({}, item, { showAll: !item.showAll });
                return item;
              });
              setAllNotifications(newData);
            }}
            className={[
              `${
                notification.showAll
                  ? `${prefix}-notifications-panel-notification-read-less-button`
                  : `${prefix}-notifications-panel-notification-read-more-button`
              }`,
            ].join(' ')}>
            {notification.showAll ? 'Read less' : 'Read more'}
          </Button>
        )}
      </div>
    );
  };

  const renderNotification = (group, notification, index) => {
    return (
      <div
        key={`${notification.timestamp}-${notification.title}-${index}`}
        className={[
          `${prefix}-notifications-panel-notification`,
          `${prefix}-notifications-panel-notification-${group}`,
        ].join(' ')}>
        {notification.type === 'error' && (
          <ErrorFilled16
            className={[
              `${prefix}-notifications-panel-notification-status-icon`,
              `${prefix}-notifications-panel-notification-status-icon-error`,
            ].join(' ')}
          />
        )}
        {notification.type === 'success' && (
          <CheckmarkFilled16
            className={[
              `${prefix}-notifications-panel-notification-status-icon`,
              `${prefix}-notifications-panel-notification-status-icon-success`,
            ].join(' ')}
          />
        )}
        {notification.type === 'warning' && (
          <WarningAltFilled16
            className={[
              `${prefix}-notifications-panel-notification-status-icon`,
              `${prefix}-notifications-panel-notification-status-icon-warning`,
            ].join(' ')}
          />
        )}
        {notification.type === 'informational' && (
          <InformationSquareFilled16
            className={[
              `${prefix}-notifications-panel-notification-status-icon`,
              `${prefix}-notifications-panel-notification-status-icon-informational`,
            ].join(' ')}
          />
        )}
        <div className={`${prefix}-notifications-panel-notification-content`}>
          <p
            className={`${prefix}-notifications-panel-notification-time-label`}>
            {timeAgo(notification.timestamp)}
          </p>
          <h6 className={`${prefix}-notifications-panel-notification-title`}>
            {notification.title}
          </h6>
          {notification.description &&
            notification.description.length &&
            renderDescription(notification.id)}
          {notification.link &&
            notification.link.text &&
            notification.link.url && (
              <Link
                href={notification.link.url}
                className={`${prefix}-notifications-panel-notifications-link`}>
                {notification.link.text}
              </Link>
            )}
        </div>
      </div>
    );
  };

  return (
    shouldRender && (
      <div
        className={[`${prefix}-notifications-panel-container`].join(' ')}
        style={{ animation: `${open ? 'fadeIn 250ms' : 'fadeOut 250ms'}` }}
        onAnimationEnd={onAnimationEnd}
        ref={notificationPanelRef}>
        <div className={`${prefix}-notifications-header-container`}>
          <div className={`${prefix}-notifications-header-flex`}>
            <h1 className={`${prefix}-notifications-header`}>{title}</h1>
            <Button
              size="small"
              kind="ghost"
              className={`${prefix}-notifications-dismiss-button`}
              onClick={() => {
                setAllNotifications([]);
              }}>
              {dismissAllLabel}
            </Button>
          </div>
          <ToggleSmall
            className={`${prefix}-notifications-do-not-disturb-toggle`}
            id={`${prefix}-notifications-do-not-disturb-toggle-component`}
            labelA={doNotDisturbLabel}
            labelB={doNotDisturbLabel}
            onToggle={(event) => onDoNotDisturbChange(event)}
            aria-label={doNotDisturbLabel}
          />
        </div>
        <div
          className={[
            `${prefix}-notifications-panel-main-section`,
            `${
              !allNotifications.length
                ? `${prefix}-notificaitons-panel-main-section-empty`
                : ''
            }`,
          ].join(' ')}>
          {withinLastDayNotifications && withinLastDayNotifications.length ? (
            <>
              <h6
                className={`${prefix}-notifications-panel-time-section-label`}>
                {todayLabel}
              </h6>
              {withinLastDayNotifications.map((notification, index) =>
                renderNotification('today', notification, index)
              )}
            </>
          ) : null}
          {previousDayNotifications && previousDayNotifications.length ? (
            <>
              <h6
                className={`${prefix}-notifications-panel-time-section-label`}>
                {yesterdayLabel}
              </h6>
              {previousDayNotifications.map((notification, index) =>
                renderNotification('yesterday', notification, index)
              )}
            </>
          ) : null}
          {previousNotifications && previousNotifications.length ? (
            <>
              <h6
                className={`${prefix}-notifications-panel-time-section-label`}>
                {previousLabel}
              </h6>
              {previousNotifications.map((notification, index) =>
                renderNotification('previous', notification, index)
              )}
            </>
          ) : null}
          {!allNotifications.length && (
            <EmptyState
              illustration="notifications"
              illustrationTheme="dark"
              heading=""
              subtext="You do not have any notifications"
            />
          )}
        </div>
      </div>
    )
  );
};

Notifications.propTypes = {
  /**
   * Array of data for Notifications component to render
   */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      type: PropTypes.oneOf(['error', 'warning', 'success', 'informational']),
      timestamp: PropTypes.instanceOf(Date),
      title: PropTypes.string,
      description: PropTypes.string,
      link: PropTypes.shape({
        url: PropTypes.string,
        text: PropTypes.string,
      }),
    })
  ).isRequired,
  /**
   * Label for Dismiss all button
   */
  dismissAllLabel: PropTypes.string,
  /**
   * Label for Do not disturb toggle
   */
  doNotDisturbLabel: PropTypes.string,
  /**
   * Function that returns the current selected value of the disable notification toggle
   */
  onDoNotDisturbChange: PropTypes.func,
  /**
   * Determines whether the notifications panel should render or not
   */
  open: PropTypes.bool.isRequired,
  /**
   * Sets the previous label text
   */
  previousLabel: PropTypes.string,
  /**
   * Sets the notifications panel open state
   */
  setOpen: PropTypes.func.isRequired,
  /**
   * Sets the title for the Notifications panel
   */
  title: PropTypes.string,
  /**
   * Sets the today label text
   */
  todayLabel: PropTypes.string,
  /**
   * Sets the yesterday label text
   */
  yesterdayLabel: PropTypes.string,
};

Notifications.defaultProps = {
  doNotDisturbLabel: 'Do not disturb',
  dismissAllLabel: 'Dismiss all',
  previousLabel: 'Previous',
  title: 'Notifications',
  todayLabel: 'Today',
  yesterdayLabel: 'Yesterday',
};

export default Notifications;
