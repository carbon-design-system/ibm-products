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
import cx from 'classnames';
import { pkg } from '../../../settings';
import { EmptyStateContent } from '../EmptyStateContent';
import { NoDataIllustration } from '../assets/NoDataIllustration';
import { EmptyStateDefaultProps } from '../EmptyState';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--empty-state`;
const componentName = 'NoDataEmptyState';

export let NoDataEmptyState = React.forwardRef(
  (
    {
      actionText,
      actionType,
      actionIcon,
      className,
      illustrationTheme,
      linkText,
      linkUrl,
      onActionEvent,
      size,
      subtitle,
      title,
      ...rest
    },
    ref
  ) => {
    return (
      <div
        {
          // Pass through any other property values as HTML attributes.
          ...rest
        }
        className={cx(blockClass, className)}
        ref={ref}>
        <NoDataIllustration theme={illustrationTheme} size={size} />
        <EmptyStateContent
          actionText={actionText}
          actionType={actionType}
          actionIcon={actionIcon}
          linkText={linkText}
          linkUrl={linkUrl}
          onActionEvent={onActionEvent}
          size={size}
          subtitle={subtitle}
          title={title}
        />
      </div>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
NoDataEmptyState = pkg.checkComponentEnabled(NoDataEmptyState, componentName);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
NoDataEmptyState.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
NoDataEmptyState.propTypes = {
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
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
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
   * Empty state size
   */
  size: PropTypes.oneOf(['lg', 'sm']),
  /**
   * Empty state subtitle
   */
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /**
   * Empty state title
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

// Default values for component props. Default values are not required for
// props that are required, nor for props where the component can apply
// 'undefined' values reasonably. Default values should be provided when the
// component needs to make a choice or assumption when a prop is not supplied.
NoDataEmptyState.defaultProps = EmptyStateDefaultProps;
