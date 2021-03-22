/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import { pkg } from '../../../settings';
import { EmptyStateContent } from '../EmptyStateContent';
import { NotificationsIllustration } from '../assets/NotificationsIllustration';
import { EmptyStateDefaultProps } from '../EmptyState';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--empty-state`;
const componentName = 'NotificationsEmptyState';

export let NotificationsEmptyState = React.forwardRef(
  (
    {
      actionIcon,
      actionText,
      actionType,
      heading,
      illustrationSize,
      illustrationTheme,
      linkText,
      linkUrl,
      onActionEvent,
      subtext,
      ...rest
    },
    ref
  ) => {
    return (
      <div className={blockClass} ref={ref} {...rest}>
        <NotificationsIllustration
          size={illustrationSize}
          theme={illustrationTheme}
        />
        <EmptyStateContent
          actionIcon={actionIcon}
          actionText={actionText}
          actionType={actionType}
          heading={heading}
          linkText={linkText}
          linkUrl={linkUrl}
          onActionEvent={onActionEvent}
          subtext={subtext}
        />
      </div>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
NotificationsEmptyState = pkg.checkComponentEnabled(
  NotificationsEmptyState,
  componentName
);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
NotificationsEmptyState.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
NotificationsEmptyState.propTypes = {
  /**
   * Empty state action button icon
   */
  actionIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /**
   * Empty state action button text
   */
  actionText: PropTypes.string,
  /**
   * Empty state action button type
   */
  actionType: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  /**
   * Empty state heading
   */
  heading: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /**
   * Empty state illustration size
   */
  illustrationSize: PropTypes.oneOf(['lg', 'sm']),
  /**
   * Empty state illustration theme variations.
   * To ensure you use the correct themed illustrations, you can conditionally specify light or dark
   * based on your app's current theme value. Example:
   * `illustrationTheme={appTheme === ('carbon--g100' || 'carbon--g90') ? 'dark' : 'light'}`
   */
  illustrationTheme: PropTypes.oneOf(['light', 'dark']),
  /**
   * Empty state link text
   */
  linkText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * Empty state link url
   */
  linkUrl: PropTypes.string,
  /**
   * Empty state action button handler
   */
  onActionEvent: PropTypes.func,
  /**
   * Empty state subtext
   */
  subtext: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

// Default values for component props. Default values are not required for
// props that are required, nor for props where the component can apply
// 'undefined' values reasonably. Default values should be provided when the
// component needs to make a choice or assumption when a prop is not supplied.
NotificationsEmptyState.defaultProps = EmptyStateDefaultProps;
