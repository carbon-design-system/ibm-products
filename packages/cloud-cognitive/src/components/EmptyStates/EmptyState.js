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
import { pkg } from '../../settings';
import { EmptyStateContent } from './EmptyStateContent';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--empty-state`;
const componentName = 'EmptyState';

export let EmptyState = React.forwardRef(
  (
    {
      actionIcon,
      actionText,
      actionType,
      className,
      customIllustrationAltText,
      title,
      illustration,
      linkText,
      linkUrl,
      onActionEvent,
      size,
      subtitle,
      ...rest
    },
    ref
  ) => {
    const renderIllustration = () => {
      return (
        <img
          src={illustration}
          alt={customIllustrationAltText}
          className={cx([
            `${blockClass}__illustration`,
            `${blockClass}__illustration--${size}`,
          ])}
        />
      );
    };

    return (
      <div
        {
          // Pass through any other property values as HTML attributes.
          ...rest
        }
        className={cx(blockClass, className)}
        ref={ref}>
        {illustration && renderIllustration()}
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
EmptyState = pkg.checkComponentEnabled(EmptyState, componentName);

export const EmptyStateProps = {
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
   * The alt text for custom provided illustrations
   */
  customIllustrationAltText: PropTypes.string,
  /**
   * Empty state illustration, specify the `src` of a custom illustration to be displayed.
   */
  illustration: PropTypes.string,
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
   * Empty state subtext
   */
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /**
   * Empty state heading
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

export const EmptyStateDefaultProps = {
  size: 'lg',
};

EmptyState.propTypes = EmptyStateProps;
EmptyState.defaultProps = EmptyStateDefaultProps;
EmptyState.displayName = componentName;
