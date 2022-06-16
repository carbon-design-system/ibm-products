/**
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, { useEffect, useState, useRef } from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { useClickOutside } from '../../global/js/hooks';
import { pkg } from '../../settings';
import { timeAgo } from './utils';

import { NotificationsEmptyState } from '../EmptyStates/NotificationsEmptyState';

// Carbon and package components we use.
import { Button, Link, Toggle, IconButton } from '@carbon/react';
import {
  ErrorFilled,
  WarningAltFilled,
  CheckmarkFilled,
  InformationSquareFilled,
  ChevronDown,
  Close,
  Settings,
} from '@carbon/icons-react';
import { usePreviousValue } from '../../global/js/hooks';

// The block part of our conventional BEM class names (blockClass__E--M).
const componentName = 'NotificationsPanel';
const blockClass = `${pkg.prefix}--notifications-panel`;

// Default values for props
const defaults = {
  daysAgoText: (value) => `${value} days ago`,
  dismissAllLabel: 'Dismiss all',
  dismissSingleNotificationIconDescription: 'Dismiss',
  doNotDisturbLabel: 'Do not disturb',
  emptyStateLabel: 'You do not have any notifications',
  hourAgoText: (value) => `${value} hour ago`,
  hoursAgoText: (value) => `${value} hours ago`,
  minuteAgoText: (value) => `${value} minute ago`,
  minutesAgoText: (value) => `${value} minutes ago`,
  monthAgoText: (value) => `${value} month ago`,
  monthsAgoText: (value) => `${value} months ago`,
  nowText: 'Now',
  onDismissAllNotifications: () => {},
  onDismissSingleNotification: () => {},
  previousLabel: 'Previous',
  readLessLabel: 'Read less',
  readMoreLabel: 'Read more',
  secondsAgoText: (value) => `${value} seconds ago`,
  settingsIconDescription: 'Settings',
  title: 'Notifications',
  todayLabel: 'Today',
  viewAllLabel: (value) => `View all (${value})`,
  yearAgoText: (value) => `${value} year ago`,
  yearsAgoText: (value) => `${value} years ago`,
  yesterdayAtText: (value) => `Yesterday at ${value}`,
  yesterdayLabel: 'Yesterday',
};

export let NotificationsPanel = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).

      className,
      data,
      daysAgoText = defaults.daysAgoText,
      dismissAllLabel = defaults.dismissAllLabel,
      dismissSingleNotificationIconDescription = defaults.dismissSingleNotificationIconDescription,
      doNotDisturbDefaultToggled,
      doNotDisturbLabel = defaults.doNotDisturbLabel,
      emptyStateLabel = defaults.emptyStateLabel,
      hourAgoText = defaults.hourAgoText,
      hoursAgoText = defaults.hoursAgoText,
      minuteAgoText = defaults.minuteAgoText,
      minutesAgoText = defaults.minutesAgoText,
      monthAgoText = defaults.monthAgoText,
      monthsAgoText = defaults.monthsAgoText,
      nowText = defaults.nowText,
      onClickOutside,
      onDismissAllNotifications = defaults.onDismissAllNotifications,
      onDismissSingleNotification = defaults.onDismissSingleNotification,
      onDoNotDisturbChange,
      onSettingsClick,
      onViewAllClick,
      open,
      previousLabel = defaults.previousLabel,
      readLessLabel = defaults.readLessLabel,
      readMoreLabel = defaults.readMoreLabel,
      secondsAgoText = defaults.secondsAgoText,
      settingsIconDescription = defaults.settingsIconDescription,
      title = defaults.title,
      todayLabel = defaults.todayLabel,
      viewAllLabel = defaults.viewAllLabel,
      yearAgoText = defaults.yearAgoText,
      yearsAgoText = defaults.yearsAgoText,
      yesterdayAtText = defaults.yesterdayAtText,
      yesterdayLabel = defaults.yesterdayLabel,

      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    const notificationPanelRef = useRef();
    const [shouldRender, setRender] = useState(open);
    const [allNotifications, setAllNotifications] = useState([]);
    const previousState = usePreviousValue({ open });

    const reducedMotion =
      window && window.matchMedia
        ? window.matchMedia('(prefers-reduced-motion: reduce)')
        : { matches: true };

    useEffect(() => {
      // Set the notifications passed to the state within this component
      setAllNotifications(data);
    }, [data]);

    useClickOutside(ref || notificationPanelRef, () => {
      onClickOutside();
    });

    useEffect(() => {
      // initialize the notification panel to open
      if (open) {
        setRender(true);
      }
    }, [open]);

    const onAnimationEnd = () => {
      // initialize the notification panel to close
      !open && setRender(false);
    };

    useEffect(() => {
      if (!open && previousState?.open && reducedMotion.matches) {
        setRender(false);
      }
    }, [open, reducedMotion.matches, previousState?.open]);

    const sortChronologically = (arr) => {
      if (!arr || (arr && !arr.length)) {
        return;
      }
      return arr.sort((a, b) => b.timestamp - a.timestamp);
    };

    // Notifications should be grouped by "Today", "Yesterday", and "Previous", the variables
    // below filter the notifications based on those conditions and then render them in those groups
    let yesterdayDate = new Date();
    yesterdayDate = new Date(
      yesterdayDate.setDate(yesterdayDate.getDate() - 1)
    );
    let dayBeforeYesterdayDate = new Date();
    dayBeforeYesterdayDate = new Date(
      dayBeforeYesterdayDate.setDate(dayBeforeYesterdayDate.getDate() - 2)
    );
    let withinLastDayNotifications =
      allNotifications &&
      allNotifications.length &&
      allNotifications.filter(
        (item) => item.timestamp.getTime() >= yesterdayDate.getTime()
      );
    withinLastDayNotifications = sortChronologically(
      withinLastDayNotifications
    );
    let previousDayNotifications =
      allNotifications &&
      allNotifications.length &&
      allNotifications.filter(
        (item) =>
          item.timestamp.getTime() < yesterdayDate.getTime() &&
          item.timestamp.getTime() >= dayBeforeYesterdayDate.getTime()
      );
    previousDayNotifications = sortChronologically(previousDayNotifications);
    let previousNotifications =
      allNotifications &&
      allNotifications.length &&
      allNotifications.filter(
        (item) => item.timestamp.getTime() < dayBeforeYesterdayDate.getTime()
      );
    previousNotifications = sortChronologically(previousNotifications);

    const renderDescription = (id) => {
      const notification =
        allNotifications &&
        allNotifications.length &&
        allNotifications.filter((item) => item.id === id)[0];
      const trimLength = 88;
      const description = notification.description;
      const descriptionClassName = cx([
        `${blockClass}__notification-description`,
        {
          [`${blockClass}__notification-long-description`]:
            notification.showAll,
          [`${blockClass}__notification-short-description`]:
            !notification.showAll,
        },
      ]);
      const showMoreButtonClassName = cx([
        {
          [`${blockClass}__notification-read-less-button`]:
            notification.showAll,
          [`${blockClass}__notification-read-more-button`]:
            !notification.showAll,
        },
      ]);
      return (
        <div>
          <p className={descriptionClassName}>{description}</p>
          {description.length > trimLength && (
            <Button
              kind="ghost"
              size="sm"
              renderIcon={(props) => <ChevronDown size={16} {...props} />}
              iconDescription={
                notification.showAll ? readLessLabel : readMoreLabel
              }
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                const newData = allNotifications.map((item) => {
                  if (item.id === notification.id) {
                    return Object.assign({}, item, {
                      showAll: !item.showAll,
                    });
                  }
                  return item;
                });
                setAllNotifications(newData);
              }}
              className={showMoreButtonClassName}
            >
              {notification.showAll ? readLessLabel : readMoreLabel}
            </Button>
          )}
        </div>
      );
    };

    const renderNotification = (group, notification, index) => {
      const notificationClassName = cx([
        `${blockClass}__notification`,
        `${blockClass}__notification-${group}`,
      ]);
      const notificationHeaderClassName = cx([
        `${blockClass}__notification-title`,
        {
          [`${blockClass}__notification-title-unread`]: notification.unread,
        },
      ]);
      return (
        <div
          aria-label={notification.title}
          key={`${notification.timestamp}-${notification.title}-${index}`}
          className={notificationClassName}
          type="button"
          role="button"
          tabIndex={0}
          onClick={() => notification.onNotificationClick(notification)}
          onKeyDown={(event) => {
            if (
              event.target.classList.contains(
                `${blockClass}__dismiss-single-button`
              )
            ) {
              return;
            }
            event.which === 13 &&
              notification.onNotificationClick(notification);
          }}
        >
          {notification.type === 'error' && (
            <ErrorFilled
              size={16}
              className={cx([
                `${blockClass}__notification-status-icon`,
                `${blockClass}__notification-status-icon-error`,
              ])}
            />
          )}
          {notification.type === 'success' && (
            <CheckmarkFilled
              size={16}
              className={cx([
                `${blockClass}__notification-status-icon`,
                `${blockClass}__notification-status-icon-success`,
              ])}
            />
          )}
          {notification.type === 'warning' && (
            <WarningAltFilled
              size={16}
              className={cx([
                `${blockClass}__notification-status-icon`,
                `${blockClass}__notification-status-icon-warning`,
              ])}
            />
          )}
          {notification.type === 'informational' && (
            <InformationSquareFilled
              size={16}
              className={cx([
                `${blockClass}__notification-status-icon`,
                `${blockClass}__notification-status-icon-informational`,
              ])}
            />
          )}
          <div className={`${blockClass}__notification-content`}>
            <p className={`${blockClass}__notification-time-label`}>
              {timeAgo({
                previousTime: notification.timestamp,
                secondsAgoText,
                minuteAgoText,
                minutesAgoText,
                hoursAgoText,
                hourAgoText,
                daysAgoText,
                yesterdayAtText,
                monthsAgoText,
                monthAgoText,
                yearsAgoText,
                yearAgoText,
                nowText,
              })}
            </p>
            <h6 className={notificationHeaderClassName}>
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
                  className={`${blockClass}__notifications-link`}
                >
                  {notification.link.text}
                </Link>
              )}
          </div>
          <IconButton
            align="left"
            kind="ghost"
            size="sm"
            label={dismissSingleNotificationIconDescription}
            className={`${blockClass}__dismiss-single-button`}
            onClick={(event) => dismissSingleNotification(event, notification)}
          >
            <Close size={16} />
          </IconButton>
        </div>
      );
    };

    const dismissSingleNotification = (event, notification) => {
      event.preventDefault();
      event.stopPropagation();
      onDismissSingleNotification(notification);
    };

    const mainSectionClassName = cx([
      `${blockClass}__main-section`,
      {
        [`${blockClass}__main-section-empty`]:
          allNotifications && !allNotifications.length,
      },
    ]);

    return shouldRender ? (
      <div
        {
          // Pass through any other property values as HTML attributes.
          ...rest
        }
        id={blockClass}
        className={cx(blockClass, className, `${blockClass}__container`)}
        style={{
          animation: !reducedMotion.matches
            ? `${open ? 'fade-in 250ms' : 'fade-out 250ms'}`
            : null,
        }}
        onAnimationEnd={onAnimationEnd}
        ref={ref || notificationPanelRef}
        {...getDevtoolsProps(componentName)}
      >
        <div className={`${blockClass}__header-container`}>
          <div className={`${blockClass}__header-flex`}>
            <h1 className={`${blockClass}__header`}>{title}</h1>
            <Button
              size="sm"
              kind="ghost"
              className={`${blockClass}__dismiss-button`}
              onClick={() => onDismissAllNotifications()}
            >
              {dismissAllLabel}
            </Button>
          </div>
          <Toggle
            size="sm"
            className={`${blockClass}__do-not-disturb-toggle`}
            id={`${blockClass}__do-not-disturb-toggle-component`}
            labelA={doNotDisturbLabel}
            labelB={doNotDisturbLabel}
            onToggle={(event) => onDoNotDisturbChange(event)}
            defaultToggled={doNotDisturbDefaultToggled}
            aria-label={doNotDisturbLabel}
          />
        </div>
        <div className={mainSectionClassName}>
          {withinLastDayNotifications && withinLastDayNotifications.length ? (
            <>
              <h6 className={`${blockClass}__time-section-label`}>
                {todayLabel}
              </h6>
              {withinLastDayNotifications.map((notification, index) =>
                renderNotification('today', notification, index)
              )}
            </>
          ) : null}
          {previousDayNotifications && previousDayNotifications.length ? (
            <>
              <h6 className={`${blockClass}__time-section-label`}>
                {yesterdayLabel}
              </h6>
              {previousDayNotifications.map((notification, index) =>
                renderNotification('yesterday', notification, index)
              )}
            </>
          ) : null}
          {previousNotifications && previousNotifications.length ? (
            <>
              <h6 className={`${blockClass}__time-section-label`}>
                {previousLabel}
              </h6>
              {previousNotifications.map((notification, index) =>
                renderNotification('previous', notification, index)
              )}
            </>
          ) : null}
          {!allNotifications.length && (
            <NotificationsEmptyState
              illustrationTheme="dark"
              title=""
              subtitle={emptyStateLabel}
            />
          )}
        </div>
        {onViewAllClick &&
        onSettingsClick &&
        allNotifications &&
        allNotifications.length ? (
          <div className={`${blockClass}__bottom-actions`}>
            <Button
              kind="ghost"
              className={`${blockClass}__view-all-button`}
              onClick={() => onViewAllClick()}
            >
              {viewAllLabel(allNotifications.length)}
            </Button>
            <Button
              kind="ghost"
              size="small"
              className={`${blockClass}__settings-button`}
              renderIcon={(props) => <Settings size={16} {...props} />}
              iconDescription={settingsIconDescription}
              onClick={() => onSettingsClick()}
            />
          </div>
        ) : null}
      </div>
    ) : null;
  }
);

// Return a placeholder if not released and not enabled by feature flag
NotificationsPanel = pkg.checkComponentEnabled(
  NotificationsPanel,
  componentName
);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
NotificationsPanel.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
NotificationsPanel.propTypes = {
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

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
      unread: PropTypes.bool,
      onNotificationClick: PropTypes.func,
    })
  ).isRequired,

  /**
   * Sets the `days ago` label text
   */
  daysAgoText: PropTypes.func,

  /**
   * Label for Dismiss all button
   */
  dismissAllLabel: PropTypes.string,

  /**
   * Label for Dismiss single notification icon button
   */
  dismissSingleNotificationIconDescription: PropTypes.string,

  /**
   * Determines if the `Do not disturb` toggle is on or off when the component is rendered
   */
  doNotDisturbDefaultToggled: PropTypes.bool,

  /**
   * Label for Do not disturb toggle
   */
  doNotDisturbLabel: PropTypes.string,

  /**
   * Sets the empty state label text when there are no notifications
   */
  emptyStateLabel: PropTypes.string,

  /**
   * Sets the `hour ago` label text
   */
  hourAgoText: PropTypes.func,

  /**
   * Sets the `hours ago` label text
   */
  hoursAgoText: PropTypes.func,

  /**
   * Sets the `minute ago` label text
   */
  minuteAgoText: PropTypes.func,

  /**
   * Sets the `minutes ago` label text
   */
  minutesAgoText: PropTypes.func,

  /**
   * Sets the `month ago` label text
   */
  monthAgoText: PropTypes.func,

  /**
   * Sets the `months ago` label text
   */
  monthsAgoText: PropTypes.func,

  /**
   * Sets the `now` label text
   */
  nowText: PropTypes.string,

  /**
   * Sets the notifications panel open state
   */
  onClickOutside: PropTypes.func.isRequired,

  /**
   * Function that will dismiss all notifications
   */
  onDismissAllNotifications: PropTypes.func,

  /**
   * Function that will dismiss a single notification
   */
  onDismissSingleNotification: PropTypes.func,

  /**
   * Function that returns the current selected value of the disable notification toggle
   */
  onDoNotDisturbChange: PropTypes.func,

  /**
   * Event handler for the View all button
   */
  onSettingsClick: PropTypes.func,

  /**
   * Event handler for the View all button
   */
  onViewAllClick: PropTypes.func,

  /**
   * Determines whether the notifications panel should render or not
   */
  open: PropTypes.bool.isRequired,

  /**
   * Sets the previous label text
   */
  previousLabel: PropTypes.string,

  /**
   * Sets the `read less` label text
   */
  readLessLabel: PropTypes.string,

  /**
   * Sets the `read more` label text
   */
  readMoreLabel: PropTypes.string,

  /**
   * Sets the `seconds ago` label text
   */
  secondsAgoText: PropTypes.func,

  /**
   * Sets the settings icon description text
   */
  settingsIconDescription: PropTypes.string,

  /**
   * Sets the title for the Notifications panel
   */
  title: PropTypes.string,

  /**
   * Sets the today label text
   */
  todayLabel: PropTypes.string,

  /**
   * Sets the View all button text
   */
  viewAllLabel: PropTypes.func,

  /**
   * Sets the `year ago` label text
   */
  yearAgoText: PropTypes.func,

  /**
   * Sets the `years ago` label text
   */
  yearsAgoText: PropTypes.func,

  /**
   * Sets the `Yesterday at` label text
   */
  yesterdayAtText: PropTypes.func,

  /**
   * Sets the yesterday label text
   */
  yesterdayLabel: PropTypes.string,
};
